import React,{useState} from "react";
import ExpenseDate from "../Expenses/ExpenseDate";

import './ExpenseForm.css';

const ExpenseForm = () => {
const [enteredTitle, setEntertitle]=useState('');
const[enteredAmount, setEnteramount]=useState('');
const[enterdate,setEnterDate]=useState('');
    const titleChangeHandler = (event) => {
        setEntertitle(event.target.value);
        
    }

    const amountChangeHandler=(event)=>{
        setEnteramount(event.target.value);

    }
    const datechangeHandler=event=>{
setEnterDate(event.target.value);


    }

    const submitHandler=(event)=>{
        event.preventDefault();

        const ExpenseData={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enterdate),
        }
            console.log(ExpenseData);
        
    }
    return (
        <form onsubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>ExpenseTitle</label>
                    <input type="text"
                    onChange={titleChangeHandler} />

                </div>
                <div className="new-expense__control">
                    <label>ExpenseAmount</label>
                    <input type="number" 
                    min="0.01" 
                    step="0.01" 
                    onChange={amountChangeHandler} />

                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="Date"
                     min="2020|01|01"
                      max="2023|12|31"
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