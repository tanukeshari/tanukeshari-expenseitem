import React,{useState} from "react";

import './ExpenseForm.css';

const ExpenseForm = () => {
const [enteredTitle, setEntertitle]=useState('');
const[enteredAmount, setEnteramount]=useState('');
const[enterdate,setEnterDate]=useState('');
    const titleChangeHandler = (event) => {
        setEntertitle(event.target.value);
        console.log(enteredTitle)
    }

    const amountChangeHandler=(event)=>{
        setEnteramount(event.target.value);
console.log(enteredAmount);
    }
    const datechangeHandler=event=>{
setEnterDate(event.target.value);
console.log(enterdate);

    }
    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>ExpenseTitle</label>
                    <input type="text" onChange={titleChangeHandler} />

                </div>
                <div className="new-expense__control">
                    <label>ExpenseAmount</label>
                    <input type="number" min="10" step="1000" onChange={amountChangeHandler} />

                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="Date" min="2020|01|01" max="2023|12|31" onChange={datechangeHandler} />

                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}
export default ExpenseForm;