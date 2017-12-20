import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper';

// components
import AddOption from './addOption';
import Options from './options';
import Rolls from './rolls';
import RollResult from './rollResult';

const muiTheme = getMuiTheme({
  rollInstructions: {

  },
  rollSteps: {
    listStyleType: 'upper-roman'
  },
  fateRollButtons: {
    textAlign: 'left'
  },
  fateRollButton: {
    padding: '12px',
    paddingLeft: 0,
    boxShadow: 'none'
  },
  fateRemoveButton: {
    padding: '12px',
    boxShadow: 'none'
  },
  fateRepeatOptionsLayout: {
    paddingLeft: '48px'
  },
  fateRepeatOR: {
    padding: '0px',
    paddingLeft: '12px'
  },
  fateRepeatOptions: {
    padding: '0px'
  }
});

export default class Fate extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      options: [],
      rollCount: -1,
      outputs: [],
      finished: false,
      stepIndex: 0
    }
    this.handleGetRolls = this.handleGetRolls.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleFateOption = this.handleFateOption.bind(this);
    this.removeAllOptions = this.removeAllOptions.bind(this);
    this.handleRemoveSingleOption = this.handleRemoveSingleOption.bind(this);
  }
  // lifecyle methods
  componentDidMount(){
    try{
      const savedOptions = localStorage.getItem('options');
      const readOptions = JSON.parse(savedOptions);
      if(readOptions){
        this.setState(() => {
          return {
            options: readOptions
          }
        });
      }
    }catch(e) {
      alert("Error: " + e);
    }
  }
  componentDidUpdate(prevProps, prevState){
    if(prevState.options.length !== this.state.options.length){
      const savingOptions = JSON.stringify(this.state.options);
      localStorage.setItem('options', savingOptions);
    }
  }
  // functional methods
  disableRollButton(){
    return this.state.options.length <= 0 ? true : false;
  }
  removeAllOptions(){
    localStorage.removeItem('options');
    return this.setState({ options: [], outputs: [] });
  }
  handleFateOption(){
    if(this.state.rollCount > 0){
      const fateOne = [];
      for(let i = 0; i < this.state.rollCount; i++){
        fateOne.push(this.state.options[Math.floor(Math.random() * this.state.options.length)]);
      }
      this.setState((prevState) => {
        return {
          // rollCount: prevState.rollCount - 1,
          rollCount: 0,
          outputs: prevState.outputs.concat([fateOne]) 
        }
      });
      // return alert(`Current Fate result: ${fateOne}, you have ${this.state.rollCount - 1} chance(s) left ..`)
    }
  }
  handleAddOption(newAddedOption) {
    if(newAddedOption.length === 0){
      return "Please enter a valid option ..";
    }else if(this.state.options.indexOf(newAddedOption) > -1) {
      return "Oops, option has already existed ..";
    }else {
      this.setState((prevState) => {
        return {
          options: prevState.options.concat(newAddedOption)
        }
      })
    }
  }
  handleRemoveSingleOption(removeOption){
    this.setState((prevState) => {
      return {
        options: prevState.options.filter((option) => {
          return option !== removeOption;
        })
      }
    });
  }
  handleGetRolls(timesCount){
    this.setState(() => {
      return {
        rollCount: timesCount
      }
    })
  }
  // handle buttons (Next Back and Finish)
  handleNext = () => {
    const { stepIndex } = this.state;
    this.setState(() => {
      return {
        stepIndex: stepIndex + 1,
        finished: stepIndex >= 2
      }
    })
  }
  handlePrev = () => {
    const { stepIndex } = this.state;
    if(stepIndex > 0){
      this.setState(() => {
        return {
          stepIndex: stepIndex - 1,
          rollCount: -1
        }
      })
    }
  }
  renderStepActions(step) {
    const { stepIndex } = this.state;
    return (
      <div>
        <RaisedButton 
          label={ stepIndex === 2 ? 'Again' : 'Next' }
          disableTouchRipple={true}
          disableFocusRipple={true}
          disabled={stepIndex === 1 && this.state.rollCount > 0}
          primary={true}
          onClick={this.handleNext}
          style={{marginRight: 12}} 
        />
        { (step !== 0 && step !==2) && 
          (<FlatButton
            label='Back'
            disabled={stepIndex === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onClick={ this.handlePrev}
          />) 
        }
      </div>
    );
  }
  render() {
    const {stepIndex, finished} = this.state;
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={{ maxWidth: '100%' }}>
          <h3>What is Fate (Random Decision) App?</h3>
          <p>Fate app is a app which is used for the case when you have no idea to make a decision for a thing, such as you don't know where to go for lunch, there are several places for you to choose, but it is really diffcult for you to choose which one, and in this time, you will need this app to help you to make the final decision.</p>
          <Stepper activeStep={stepIndex} orientation='vertical'>
            <Step>
              <StepLabel>Please enter total times of rolling</StepLabel>
              <StepContent>
                <Rolls rollCount={this.handleGetRolls} />
                { this.state.rollCount > 0 && <div>
                    <p>Your total rolling times would be: {this.state.rollCount}. Please click 'NEXT' button to go next step ..</p>
                  </div> }
                { this.state.rollCount > 0 && this.renderStepActions(0) }
              </StepContent>
            </Step>

            <Step>
              <StepLabel>Please add some options for rolling</StepLabel>
              <StepContent>
                <div style={muiTheme.rollInstructions}>
                  <p>Please follow the steps below: </p>
                  <ol style={muiTheme.rollSteps}>
                    <li>Step 1: Add new options (choices) you want to roll if you don't have any options inside list</li>
                    <li>Step 2: Click 'ROLL' button to roll your fate decision if options list is not empty</li>
                    <li>Step 3: Click the 'NEXT' button to view the fate result</li>
                  </ol>
                </div>
                <AddOption handleAddOption={this.handleAddOption} />  
                <div style={muiTheme.fateRollButtons}>
                  <RaisedButton label="ROLL" primary={true} onClick={ this.handleFateOption } disabled={ this.disableRollButton() } style={muiTheme.fateRollButton} />
                  <RaisedButton label="REMOVE ALL OPTIONS" primary={true} onClick={ this.removeAllOptions } disabled={ this.state.options.length === 0 } style={muiTheme.fateRemoveButton} />
                </div>
                <Options optionsData={this.state.options} handleRemoveSingleOption={this.handleRemoveSingleOption} />
                { (this.state.options.length > 0 && this.state.rollCount <= 0) &&  <div>
                    <p>Well done!! please click 'NEXT' button to view the final fate random decision ..</p>
                  </div> }
                { this.renderStepActions(1) }
              </StepContent>
            </Step>

            <Step>
              <StepLabel>View the result(s): </StepLabel>
              <StepContent>
              { this.state.rollCount === 0 && <RollResult outputs={this.state.outputs} /> }
                { this.renderStepActions(2) }
              </StepContent>
            </Step>
          </Stepper>
          {
            finished && (
              <div style={muiTheme.fateRepeatOptionsLayout}>
                <p style={muiTheme.fateRepeatOptions}>
                  <a href="###"
                    onClick={(event) => {
                      event.preventDefault();
                      this.setState({stepIndex: 0, finished: false, outputs: [], rollCount: -1});
                    }}>Click </a> to roll again with existed options.
                </p>
                <p style={muiTheme.fateRepeatOR}>OR</p>
                <p style={muiTheme.fateRepeatOptions}>
                  <a href="###"
                    onClick={(event) => {
                      event.preventDefault();
                      localStorage.removeItem('options');
                      this.setState({stepIndex: 0, finished: false, options: [], outputs: [], rollCount: -1});
                    }}>Click </a> to start a new rolling (without any existed options).
                </p>
              </div>
            )
          }
        </div>
      </MuiThemeProvider>
    );
  }
}
