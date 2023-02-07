import React, { Component } from 'react';
import Transaction from './Transaction';

class TransactionList extends Component {
  render() {
    return (
      <div className="transactions">
          {this.props.transactions.map(transaction => (
            <Transaction key={transaction.id} {...transaction} />
          ))}
      </div>
    );
  }
  
};

export default TransactionList;
