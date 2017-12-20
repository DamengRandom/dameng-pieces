import React from 'react';
import { Link } from 'react-router-dom'; 
import { firebaseApp } from '../services/firebase';
import * as Colors from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
// import styles 
import '../index.css';
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: Colors.teal500,
    primary2Color: Colors.blue500,
    textColor: Colors.white
  },
  appBar: {
    height: 60,
    backgroundColor: Colors.teal500
  }
});
const menuItemStyle = {
  color: Colors.teal500,
  cursor: 'pointer'
};
class Navbar extends React.Component {
  render(){
    return(
      <div>
        <MuiThemeProvider muiTheme={muiTheme}>
          <HeadeBar />
        </MuiThemeProvider>
      </div>
    );
  }
}
const HeadeBar = () => (
  <AppBar className="nav-core"
    title="Dameng Pieces"
    showMenuIconButton={false}
    iconElementRight={<NavMenu />}
  />
);
class NavMenu extends React.Component {
  componentDidMount() {
    firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } 
    });
  }
  constructor(props){
    super(props);
    this.state = {
      open: false,
      user: null
    }
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
  }
  handleToggle = () => {
    this.setState(() => {
      return {
        open: !this.state.open,
        user: this.state.user 
      }
    })
  }
  handleClose = () => {
    this.setState(() => {
      return {
        open: false,
        user: this.state.user 
      }
    })
  }
  handleSignOut = () => {
    localStorage.clear();
    this.setState(() => {
      return {
        open: false,
        user: null
      }
    });
    firebaseApp.auth().signOut();
  }
  render(){
    return (
      <div className="nav-links">
        <FlatButton label="Menu" onClick={this.handleToggle} hoverColor={Colors.teal500} />
        { 
          this.state.user ? 
          
          <Drawer
            docked={false}
            width={240}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}>
            <AppBar title="Dameng Pieces" showMenuIconButton={false} />
            <MenuItem
              containerElement={<Link to="/" />}
              onClick={this.handleClose} 
              primaryText="Spot" 
              style={menuItemStyle}
              leftIcon={
                <FontIcon className="material-icons">home</FontIcon>
              }>
            </MenuItem> 
            <MenuItem
              containerElement={<Link to="/fate" />}
              onClick={this.handleClose} 
              primaryText="Fate" 
              style={menuItemStyle}
              leftIcon={
                <FontIcon className="material-icons">live_help</FontIcon>
              }>
            </MenuItem>
            <MenuItem containerElement={<Link to="/costs" />}
              onClick={this.handleClose}
              primaryText="Daily Costs"
              style={menuItemStyle}
              leftIcon={
                <FontIcon className="material-icons">monetization_on</FontIcon>
              }
              >
            </MenuItem>
            <MenuItem
              containerElement={<Link to="/words" />}
              onClick={this.handleClose} 
              primaryText="Recent Pots" 
              style={menuItemStyle}
              leftIcon={
                <FontIcon className="material-icons">border_color</FontIcon>
              }>
            </MenuItem>
            <MenuItem
              containerElement={<Link to="/signin" />}
              onClick={this.handleSignOut} 
              primaryText="Sign Out" 
              style={menuItemStyle}
              leftIcon={
                <FontIcon className="material-icons">directions_run</FontIcon>
              }>
            </MenuItem>
          </Drawer>
          : 
          <Drawer
            docked={false}
            width={240}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}>
            <AppBar title="Dameng Pieces" showMenuIconButton={false} />
            <MenuItem
              containerElement={<Link to="/signin" />}
              onClick={this.handleClose} 
              primaryText="Sign In" 
              style={menuItemStyle}
              leftIcon={
                <FontIcon className="material-icons">account_circle</FontIcon>
              }>
            </MenuItem>
            <MenuItem
              containerElement={<Link to="/signup" />}
              onClick={this.handleClose} 
              primaryText="Sign Up" 
              style={menuItemStyle}
              leftIcon={
                <FontIcon className="material-icons">people</FontIcon>
              }>
            </MenuItem>
          </Drawer>
        }
      </div>
    );
  }
}
export default Navbar;