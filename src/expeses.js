import expenseitem from "./expenseItem";
import card from ".card";

const  expense =(props)=>{
    return (

<card className="expense">
      
  
      
          <ExpenseItem 
      
          title={expenses[0].title}
      
          amount={expenses[0].amount}
      
          Date={expenses[0].Date}
      
          />
      
      
      
          <ExpenseItem
      
           title={expenses[1].title}
      
          amount={expenses[1].amount}
      
          Date={expenses[1].Date}
      
          />
      
      
      
      <ExpenseItem title={expenses[2].title}
      
          amount={expenses[2].amount}
      
          Date={expenses[2].Date}/>
      
      
      
      <ExpenseItem title={expenses[3].title}
      
          amount={expenses[3].amount}
      
          Date={expenses[3].Date}/>
      
</card>
    )
}
   
   export default expense;