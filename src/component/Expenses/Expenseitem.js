import React,{ useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './Expenseitem.css';


const  Expenseitem =(props)=>{

 const [amount, setTitle]= useState(props.amount);
  
 const clickHandler = ()=>{
    console.log("Updated!")
  setTitle("100");
  console.log(amount);
  };

  const deleteTitle=()=>{
    console.log("Deleted!")
  }
  
    return(
      <Card className="expense-item">
    
      <ExpenseDate date={props.date }/>      
    <div className="expense-item__discription"> 
        <h2>{props.title}</h2>
        <div className="expense-item__price">{amount}</div>
   
    <button onClick={clickHandler()}>changeTitle</button>
    <button onClick={deleteTitle}></button>
    </div>
    <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
        <button onClick={clickHandler}>changeExpense</button>
 </Card>
     );
    }
export default Expenseitem;
