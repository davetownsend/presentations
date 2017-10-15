import React, { Component } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import _ from 'lodash';

/**
 * @author Dave Townsend
 */
export default class SearchDisplay extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { bookingData } = this.props;
    return (
      <div>
        <Table>
          {_.isEmpty(bookingData) ? "" :
            <TableHeader>
              <TableRow>
                <TableHeaderColumn style={styles.header}>ID</TableHeaderColumn>
                <TableHeaderColumn style={styles.header}>Booking Number</TableHeaderColumn>
                <TableHeaderColumn style={styles.header}>Port</TableHeaderColumn>
                <TableHeaderColumn style={styles.header}>Status</TableHeaderColumn>
              </TableRow>
            </TableHeader>
          }
          <TableBody>
            {bookingData.map((booking, i) => (
              <TableRow key={i}>
                <TableRowColumn style={styles.column}>{booking.id}</TableRowColumn>
                <TableRowColumn style={styles.column}>{booking.bookingNumber}</TableRowColumn>
                <TableRowColumn style={styles.column}>{booking.port}</TableRowColumn>
                <TableRowColumn style={styles.column}>{booking.status}</TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    )
  };
}

const styles = {
  header: {
    fontWeight: 'bold',
    fontSize: '12pt'
  },
  column: {
    fontSize: '11pt'
  }
};
