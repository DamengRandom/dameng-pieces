import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as Colors from 'material-ui/styles/colors';
import { GridList, GridTile } from 'material-ui/GridList';
import Dialog from 'material-ui/Dialog';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
const muiTheme = getMuiTheme({
  tourButton: {
    display: "block",
    margin: "0 auto"
  },
  tourIcon: {
    position: "relative",
    top: "18pt",
    left: "-9pt",
    float: "right",
    color: "#fff"
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
    backgroundColor: '#04a9f4',
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
const subTitle = "Welcome to dameng pieces, this app recorded latest self-approaches. Technically, this app is built with React + Firebase + Material UI. You may surf the app from menu tab which on the ";
const location = "top right";
class HomePageTopSlide extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: false
    }
    // this.handleRquestClose = this.handleRquestClose.bind(this);
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
      <div className="core-subheader"> 
        <h1>{ hi }</h1> 
        <h4>
          { subTitle } 
          <u>{ location }</u> .. 
          <FontIcon className="material-icons" style={muiTheme.tourIcon}>touch_app</FontIcon>
        </h4>
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
    <GridTile>
      <h3>
        <FontIcon className="material-icons" style={muiTheme.piecesIcon}>airplay</FontIcon>
        <span style={muiTheme.piecesTitle}>Demos</span>
      </h3>
      <p><u>Fate</u> is one of the tiny apps author has developed (React App), you find the app in the meau tab (which needs to click the menu button)</p>
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
            <a style={muiTheme.footerTileFirstLink} href="https://github.com/DamengRandom">
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
            <a style={muiTheme.footerTileLink} href="mailto:damonwu0605@gmail.com">
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </a>
            <a onClick={this.handleOpen} style={muiTheme.footerTileLastLink}>
              <i className="fa fa-weixin" aria-hidden="true"></i>
            </a>
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