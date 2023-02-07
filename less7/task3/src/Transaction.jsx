import React from 'react';
import moment from 'moment';

const toFormatNumber = (number)=> new Intl.NumberFormat('en-GB').format(number);

const Transaction = ({ from, to, amount, rate, time }) => {
  return (
    <ul className="transactions">
      <li className="transaction">
        <span className="transaction__date">{moment(time).format('MMM DD')}</span>
        <span className="transaction__time">{moment(time).format('LT')}</span>
        <span className="transaction__assets">
          {from} → {to}
        </span>
        <span className="transaction__rate">{toFormatNumber(rate)}</span>
        <span className="transaction__amount">{toFormatNumber(amount)}</span>
      </li>
    </ul>
  );
};

export default Transaction;
