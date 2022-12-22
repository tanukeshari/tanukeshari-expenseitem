function ExpenseItem(props) {
 
    const expenseDate= new Date (2022, 10, 21);
  const expenseTitle= 'food';
  const expenseAmount= 10;

  
return(
<div className= 'expense-item'>
    <div>{expenseDate.toISOString()}</div>
    <div className='expense-item_description'>
        <h2>{expenseTitle}</h2>
        <div className='expense-item_price'>{expenseAmount}</div>
    </div>
</div>

 
    );
}
export default ExpenseItem;
