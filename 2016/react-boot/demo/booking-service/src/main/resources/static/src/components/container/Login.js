/**
 * @author Dave Townsend
 */
import React, { Component } from "react";
import Card from "material-ui/Card";
import CardHeader from "material-ui/Card/CardHeader";
import CardText from "material-ui/Card/CardText";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import {browserHistory} from 'react-router'


class Login extends Component {
  constructor() {
    super();

    this.state = {
      open: false
    };
  }

  handleLogin = () => {
    browserHistory.push('/home')
  };

  render() {
    return (
      <div style={{width: '100%'}}>
        <div
          style={{
            width: '30%',
            margin: '0 auto',
            marginTop: '8%'
          }}
        >
          <Card>
            <CardHeader
              title="Login"
              titleStyle={{fontSize: '18pt', color: '#FFF'}}
              subtitle="Booking Service"
              avatar="https://cgcookie.com/app/uploads/2013/09/Container.png"
              style={{backgroundColor: '#039BE5'}}
            />
            <CardText>
              <TextField
                hintText="User Name"
                floatingLabelText="User Name"
                style={{fontSize: '13pt'}}
              />
              <TextField
                hintText="Password"
                floatingLabelText="Password"
                type="password"
                style={{fontSize: '13pt'}}
              />
              <div>
                <RaisedButton
                  label="Login"
                  labelColor="#fff"
                  backgroundColor='#28A2FA'
                  labelStyle={{fontSize: '14pt', top: '12px'}}
                  onTouchTap={this.handleLogin}
                  style={{
                    marginTop: '30px',
                    width: '25%',
                    height: '45px'
                  }}/>
              </div>
            </CardText>
          </Card>
        </div>
      </div>
    )
  };
}

export default Login;