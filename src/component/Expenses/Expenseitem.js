import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './Expenseitem.css';

const Expenseitem = (props) => {
  const [title, setTitle] = useState(props.title);
  console.log('Expenseitem evaluated by React');

  const clickHandler = () => {
    setTitle('Updated');
    console.log(title);
  };
  return (
    <Card className="expense-item">

      <ExpenseDate date={props.date} />
      <div className="expense-item__discription">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}
export default Expenseitem;
