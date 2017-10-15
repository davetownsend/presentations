import React, { Component } from 'react';
import { Link } from "react-router";
import { Card, CardActions, CardHeader, CardText, CardMedia } from 'material-ui/Card';
import ActionHome from 'material-ui/svg-icons/action/home';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Dialog from 'material-ui/Dialog';
import SearchDisplay from '../presentation/SearchDisplay'
import axios from 'axios';

/**
 * @author Dave Townsend
 */
class Search extends Component {
  constructor() {
    super();
    this.state = {
      booking: [],
      bookingNumber: '',
      dialogOpen: false
    }
  }


  handleGetAllBookings = () => {
    axios.get(`${process.env.API_HOST}/api/booking`)
      .then((response) => {
        this.setState({
          booking: response.data
        })
      });
  };

  handleGetBooking = () => {
    const bookingNumber = this.state.bookingNumber;
    if (!bookingNumber) {
      this.handleDialogOpen();
      return;
    }
    axios.get(`${process.env.API_HOST}/api/booking/${bookingNumber}`)
      .then((response) => {
        this.setState({
          booking: response.data
        })
      });
  };

  handleBookingChange = (event) => {
    this.setState({bookingNumber: event.target.value});
  };

  handleDialogOpen = () => {
    this.setState({dialogOpen: true});
  };

  handleDialogClose = () => {
    this.setState({dialogOpen: false});
  };

  handleResetChange = () => {
    this.setState({booking: []});
  };


  render() {

    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleDialogClose}
      />
    ];

    return (
      <div>
        <Card style={styles.card}>
          <CardHeader
            title="Booking Search"
            titleStyle={styles.card.header.title}
            style={styles.card.header}
            children={<Link to="/home"><IconButton style={styles.icon}><ActionHome /></IconButton></Link>}
          />
          <RaisedButton
            label="Get All Bookings"
            primary={true}
            style={styles.button}
            onClick={this.handleGetAllBookings}
          />
          <RaisedButton
            label="Find Booking"
            labelColor="#EEE"
            backgroundColor="#0C63AA"
            style={styles.button}
            onClick={this.handleGetBooking}
          />
          <TextField
            name="bookingNumber"
            hintText="Enter Booking Number"
            floatingLabelText="Booking Number"
            onChange={this.handleBookingChange}
          />
          <FlatButton
            label="Reset"
            primary={true}
            onClick={this.handleResetChange}
          />
          <CardMedia>
            <SearchDisplay bookingData={this.state.booking}/>
          </CardMedia>
        </Card>

        <Dialog
          actions={actions}
          modal={false}
          open={this.state.dialogOpen}
          onRequestClose={this.handleDialogClose}
        >
          <h3 style={{color: '#FF6666'}}>Booking Number is required.</h3>
        </Dialog>
      </div>
    );
  }
}

const styles = {
  card: {
    width: "65%",
    height: "100%",
    margin: '100px 0px 0px 265px',
    padding: "0px",
    header: {
      backgroundColor: '#039BE5',
      height: 50,
      paddingTop: 2,
      title: {
        fontSize: '15pt',
        color: '#FFF',
        marginTop: 10
      }
    }
  },
  button: {
    margin: 12
  },
  icon: {
    right: 10,
    position: 'absolute',
    horizontal: 'right',
    vertical: 'top'
  }
};

export default Search;