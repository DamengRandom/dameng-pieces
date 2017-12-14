import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as Colors from 'material-ui/styles/colors';
import {GridList, GridTile} from 'material-ui/GridList';
import Dialog from 'material-ui/Dialog';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
const muiTheme = getMuiTheme({
  container: {
    height: "100%",
    padding: "10%",
    margin: "0",
    backgroundColor: Colors.amber50
  },
  tourButton: {
    display: "block",
    margin: "0 auto"
  },
  tourIcon: {
    position: "relative",
    top: "5px",
    left: "-15px",
    float: "right"
  },
  popoverText: {
    paddingLeft: "10px"
  },
  popoverIcon: {
    position: "relative",
    left: "10px",
    top: "5px",
    cursor: "pointer"
  },
  gridList: {
    padding: "10%"
  },
  piecesIcon: {
    fontSize: "1.2em",
    position: "relative",
    top: "5px"
  },
  piecesTitle: {
    position: "relative",
    left: "5px",
    lineHeight: "20px"
  },
  footerGrid: {
    color: Colors.white,
    bottom: "0px",
    padding: "0 10%",
    backgroundColor: Colors.teal500,
  },
  footerTileTwo: {
    textAlign: "right"
  },
  footerSubtitle: {
    paddingTop: "30px"
  },
  footerTileFirstLink: {
    color: Colors.white,
    paddingRight: "0px",
    fontSize: "1.6em"
  },
  footerTileLink: {
    color: Colors.white,
    padding: "0 10%",
    fontSize: "1.4em"
  },
  footerTileLastLink: {
    color: Colors.white,
    paddingRight: "0px",
    fontSize: "1.4em",
    cursor: "pointer"
  },
  footerTileLastLinkImg: {
    width: "200px",
    height: "200px",
    display: "block",
    margin: "0 auto"
  }
});
const hi = "Hi there, ";
const subTitle = "Welcome to dameng pieces, this app recorded latest self-approaches ..";
class HomePageTopSlide extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: false
    }
    // this.handleTouchTap = this.handleTouchTap.bind(this);
    // this.handleRquestClose = this.handleRquestClose.bind(this);
  }
  handleTouchTap = (event) => {
    event.preventDefault();
    event.persist();
    this.setState(() => {
      return {
        open: true,
        anchorEl: event.currentTarget
      }
    })
  }
  handleRquestClose = () => {
    this.setState(() => {
      return {
        open: false
      }
    })
  }
  render(){
    return (
      <div style={muiTheme.container}> 
        <h1>{ hi }</h1> 
        <h4>{ subTitle }</h4>
        <FlatButton label="Start tour" 
          style={muiTheme.tourButton} 
          onClick={this.handleTouchTap}
          icon={<FontIcon className="material-icons" style={muiTheme.tourIcon}>touch_app</FontIcon>}
        />
        <Popover 
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'bottom'}}
          onRequestClose={this.handleRquestClose}
          animation={PopoverAnimationVertical}>
          <Menu>
            <p style={muiTheme.popoverText}>
              Start from top menu button ..
              <FontIcon className="material-icons" 
                style={muiTheme.popoverIcon} 
                onClick={this.handleRquestClose}>
                arrow_forward
              </FontIcon>
            </p>
          </Menu>
        </Popover>
      </div>
    );
  }
}
const HomePageMiddleMotto = () => (
  <GridList cols={1} rows={2} style={muiTheme.gridList}>
    <GridTile>
      <h3>
        <FontIcon className="material-icons" style={muiTheme.piecesIcon}>all_inclusive</FontIcon>
        <span style={muiTheme.piecesTitle}>Pieces</span>
      </h3>
      <p>Pieces refers to each of the functionalities I developed, and app will be updated <u>constantly</u> ..</p>
    </GridTile>
    <GridTile>
      <h3>
        <FontIcon className="material-icons" style={muiTheme.piecesIcon}>lightbulb_outline</FontIcon>
        <span style={muiTheme.piecesTitle}>Ideas</span>
      </h3>
      <p>Pieces also reflects some new ideas or new thought about author' <u>thinking</u> and shares ..</p>
    </GridTile>
  </GridList>
);
class HomePageFooter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: false
    }
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  handleOpen = () => {
    this.setState(() => {
      return {
        open: true
      }
    });
  }
  handleClose = () => {
    this.setState(() => {
      return {
        open: false
      }
    });
  }
  render(){
    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onClick={this.handleClose}
      />
    ]
    return (
      <div>
        <GridList cols={2} rows={1} style={muiTheme.footerGrid}>
          <GridTile style={muiTheme.footerTileOne}>
            <h4 style={muiTheme.footerSubtitle}>About App</h4>
            <p>
              <i className="fa fa-creative-commons" aria-hidden="true"></i> 
              <span> Developed by Dameng at 2017 </span>
            </p>
          </GridTile>
          <GridTile style={muiTheme.footerTileTwo}>
            <h4 style={muiTheme.footerSubtitle}>About Me</h4>
            <a style={muiTheme.footerTileFirstLink} href="https://github.com/DamengRandom"><i className="fa fa-github" aria-hidden="true"></i></a>
            <a style={muiTheme.footerTileLink} href="mailto:damonwu0605@gmail.com"><i className="fa fa-envelope" aria-hidden="true"></i></a>
            <a onClick={this.handleOpen} style={muiTheme.footerTileLastLink}><i className="fa fa-weixin" aria-hidden="true"></i></a>
          </GridTile>
        </GridList>
          <Dialog
            title="Scan QR Code"
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}>
            <img style={muiTheme.footerTileLastLinkImg} src="./img/dameng-qr.png" alt="Scan QR Code" />
          </Dialog>
        </div>
    );
  }
}
export default class Core extends React.Component {
  render(){
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <HomePageTopSlide />
          <HomePageMiddleMotto />
          <HomePageFooter/>
        </div>
      </MuiThemeProvider>
    );
  }
} 