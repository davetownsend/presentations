import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import ActionSearch from 'material-ui/svg-icons/action/search';
import { Link } from 'react-router';

const Home = () => {
  return (
    <div>
      <Card style={styles.card}>
        <CardHeader
          title="Home"
          titleStyle={{fontSize: '15pt', color: '#FFF', marginTop: 10}}
          style={{backgroundColor: '#039BE5', height: 50, paddingTop: 2}}
        />
        />
        <CardText style={styles.text}>
          <h1 style={{color: '#333'}}>Welcome to the Booking Service</h1>
          <div style={{fontSize: '14pt'}}><Link to="/search"><b>Search for bookings</b><ActionSearch /></Link></div>
        </CardText>
      </Card>
    </div>
  )
};

const styles = {
  card: {
    width: "50%",
    height: "100%",
    margin: '100px 0px 0px 410px',
    padding: "0px",
  },
  text: {
    height: '200px'
  }
};

export default Home;