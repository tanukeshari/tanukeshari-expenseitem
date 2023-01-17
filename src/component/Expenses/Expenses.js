import React, { useState } from 'react';

import Expenseitem from "./Expenseitem";
import Card from '../UI/Card';
 import ExpenseFilter from './ExpenseFilter';
import './Expenses.css';

  const Expenses=(props)=> {
    const [filteredYear,setFilteredYear] = useState('2019');

    const filterChangeHandler=selectedYaer=>{
      setFilteredYear(selectedYaer);
    }
return(
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear}onChangeFilter={filterChangeHandler}/>
        <Expenseitem
        title={props.items[0].title}
        amount={props.items[0].amount}
      date={props.items[0].date}
      />
        <Expenseitem
        title={props.items[1].title}
        amount={props.items[1].amount}
      date={props.items[1].date}
      />
        <Expenseitem
        title={props.items[2].title}
        amount={props.items[2].amount}
      date={props.items[2].date}
      />
        <Expenseitem
        title={props.items[3].title}
        amount={props.items[3].amount}
      date={props.items[3].date}
      />
    </Card>
      ); 
}

    export default Expenses;
