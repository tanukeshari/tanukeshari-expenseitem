import React,{useState} from "react";
import ExpenseDate from "../Expenses/ExpenseDate";

import './ExpenseForm.css';

const ExpenseForm = (props) => {
const [enteredTitle, setEnteredTitle]=useState('');
const[enteredAmount, setEnteredAmount]=useState('');
const[entereddate,setEnteredDate]=useState('');
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        
    }

    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value);

    }
    const datechangeHandler=(event)=>{
setEnteredDate(event.target.value);


    }

    const submitHandler=(event)=>{
        event.preventDefault();

        const ExpenseData={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(entereddate),
































        }
            props.onSaveExpenseData(ExpenseData);
            setEnteredTitle('');
            setEnteredAmount('');
            setEnteredDate('');
        
    };
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>ExpenseTitle</label>
                    <input type="text" 
                    value={enteredTitle}
                    onChange={titleChangeHandler} />

                </div>
                <div className="new-expense__control">
                    <label>ExpenseAmount</label>
                    <input type="number" 
                    min="0.01" 
                    step="0.01" 
                    value={enteredAmount}
                    onChange={amountChangeHandler} />

                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="Date"
                     min="2020|01|01"
                      max="2023|12|31"
                      value={entereddate}
                       onChange={datechangeHandler} />

                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}
export default ExpenseForm;