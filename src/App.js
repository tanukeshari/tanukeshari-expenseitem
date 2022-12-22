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

import ExpenseItem from "./ExpenseItem";
function App(){

  const expenses=[
    {

      
      id:'e1',
      title:'Brush',
      amount:20,
      Date:new Date(2021, 6,17), 
    },
    { id: 'e2',
    title:' food ',
    amount:10,
     Date : new Date(2022,2,20)},
    { id: 'e3',
    title:'petrol', 
    amount :100,
     Date: new Date(2022, 3, 21) },

    { id: 'e4',
    title:'movies', 
    amount: 200, 
    Date: new Date (2022, 4, 22)},
   
  ];

  return(
    <div  >
      <h2 >Lets get started!</h2>
     <div >
      
      <ExpenseItem title={expenses[0].title}
      amount={expenses[0].amount}
      date={expenses[0].date}>
      </ExpenseItem>

      <ExpenseItem title={expenses[1].title}
      amount={expenses[1].amount}
      date={expenses[1].date}>
      </ExpenseItem>


      <ExpenseItem title={expenses[2].title}
      amount={expenses[2].amount}
      date={expenses[2].date}>
      </ExpenseItem>
      
      <ExpenseItem title={expenses[3].title}
      amount={expenses[3].amount}
      date={expenses[3].date}>
      </ExpenseItem>

      </div>

    </div>

  );
  
}



export default App;