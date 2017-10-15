import React, { Component } from "react";
import { Link } from "react-router";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import Drawer from 'material-ui/Drawer';
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";

/**
 * @author Dave Townsend
 */
class App extends Component {

  constructor() {
    super();
    this.state = {open: false}
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>
        <AppBar
          title="Booking Service"
          style={{backgroundColor: '#0C63AA'}}
          onLeftIconButtonTouchTap={this.handleToggle}
          iconElementRight={<IconMenu iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}>
            <MenuItem><Link to="/search">Search</Link></MenuItem>
            <MenuItem><Link to="/home">Home</Link></MenuItem>
          </IconMenu>
          }
        />
        {this.props.children}
        <Drawer
          width={210}
          docked={false}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
          >
          <MenuItem onTouchTap={this.handleClose}><Link to="/home">Home</Link></MenuItem>
          <MenuItem onTouchTap={this.handleClose}><Link to="/search">Search</Link></MenuItem>
          <MenuItem onTouchTap={this.handleClose}><Link to="/">Logout</Link></MenuItem>
        </Drawer>
      </div>
    )
  };
}

export default App;