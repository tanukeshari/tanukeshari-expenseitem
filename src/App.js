// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React with tanu
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;




import ExpenseItem from "./expenseitem";
function App(){

  const expenses= [
    { id: 'e1',
    title:'food items',
     amount: 100, Date:
      new Date(2022, 2, 21)},
    
      { id: 'e2',
      title:'food items',
       amount: 100,
        Date: new Date(2022, 2, 21)},
    { id: 'e3',
    title:'food items',
     amount: 100,
      Date: new Date(2022, 2, 21)},
    { id:'e4',
    title:'food items', 
    amount: 100,
     Date: new Date(2022, 2, 21)},
  ];
return (
  <div>
    <h2>lets get started</h2>
    <ExpenseItem title={expenses[0].title}
    amount={expenses[0].amount}
    Date={expenses[0].Date}></ExpenseItem>

    <ExpenseItem title={expenses[1].title}
    amount={expenses[1].amount}
    Date={expenses[1].Date}></ExpenseItem>

<ExpenseItem title={expenses[2].title}
    amount={expenses[2].amount}
    Date={expenses[2].Date}></ExpenseItem>

<ExpenseItem title={expenses[3].title}
    amount={expenses[3].amount}
    Date={expenses[3].Date}></ExpenseItem>
  </div>
)
}
export default App; 