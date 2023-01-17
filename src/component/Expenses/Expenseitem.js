import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './Expenseitem.css';

const Expenseitem = (props) => {
  const [title, setTitle] = useState(props.title);
  console.log('Expenseitem evaluated by React');

  
  return (
    <Card className="expense-item">

      <ExpenseDate date={props.date} />
      <div className="expense-item__discription">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      
    </Card>
  );
}
export default Expenseitem;
