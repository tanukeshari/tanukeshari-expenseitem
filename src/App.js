   
import React from 'react';
   import NewExpense from './component/NewExpense/NewExpense';
 import Expenses from './component/Expenses/Expenses';

const App = () => {
  const expenses = [{
    id: 'e1',
    title: 'oil',
    amount: 120,
    date: new Date(2023, 1, 1),
  },
  { id: 'e2', title: 'radio', amount: 12000, date: new Date(2023, 1, 12) },
  {
    id: 'e3',
    title: 'mobile',
    amount: 10000,
    date: new Date(2023, 1, 13),

  },
  {
    id: 'e4',
    title: 'rice',
    amount: 130,
    date: new Date(2023, 1, 7)
  },
  ]
  // return React.createElement(
  //   'div',
  // {}, 
  // React.createElement('h2', {}, "Let's get started"),
  // React.createElement(Expenses, {items:expenses})
  // );
  return (
    <div>
        <NewExpense/>  
      <Expenses items={expenses} />
    </div>
  );
}
export default App; 