import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './Expenseitem.css';

const  Expenseitem=(props)=>{
  const clickHandler= ()=>{
console.log('clicked!!')
  };
  
    return(
      <Card className="expense-item">
    
      <ExpenseDate date={props.date }/>      
    <div className="expense-item__discription">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
    </div>
    <button onClick={clickHandler()}>Edit</button>
 </Card>
     );
}
export default Expenseitem;
