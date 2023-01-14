import React,{ useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './Expenseitem.css';


const  Expenseitem =(props)=>{

 const [amount, setTitle]= useState(props.amount);
  
 const clickHandler = ()=>{
    setTitle("100");
  console.log(amount);
  };

  
    return(
      <Card className="expense-item">
    
      <ExpenseDate date={props.date }/>      
    <div className="expense-item__discription"> 
        <h2>{props.title}</h2>
        <div className="expense-item__price">{amount}</div>
   
    <button onClick={clickHandler()}>changeTitle</button>
  
    </div>
   
 </Card>
     );
    }
export default Expenseitem;
