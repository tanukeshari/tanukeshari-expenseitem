   import React, { useState }from 'react';
   
   import NewExpense from './component/NewExpense/NewExpense';
 import Expenses from './component/Expenses/Expenses';


  const DUMMY_EXPENSES = [
    {
    id: 'e1',
    title: 'oil',
    amount: 120,
    date: new Date(2020, 1, 1),
  },

  { id: 'e2', title: 'radio', amount: 12000, date: new Date(2022, 1, 12) },
  {
    id: 'e3',
    title: 'mobile',
    amount: 10000,
    date: new Date(2022, 1, 13),

  },
  {
    id: 'e4',
    title: 'rice',
    amount: 130,
    date: new Date(2019, 1, 7)
  },
  ]

  const App = () => {
  const[expenses, setExpenses] = useState(DUMMY_EXPENSES);
        
    const addExpenseHandler = (expense) => { 
         setExpenses((prevExpenses) => {
          return [expense, ...prevExpenses];
        });


  };
  return (
    <div>
        <NewExpense onAddExpense={addExpenseHandler} />  
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

