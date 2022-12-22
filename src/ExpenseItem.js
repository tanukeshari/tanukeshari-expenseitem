function ExpenseItem(props) {
  const expenseDate= new Date (2022, 10, 21);
  const expenseTitle= 'food';
  const expenseAmount= 10;

  
//          <div>
//             /* <div>18/12/2022</div>
//             <div>
//                 <h2>food</h2>
//                 <div>Rs 10</div>
//             </div>

//             <div>19/12/2022</div>
//             <div>
//                 <h2>Petrol</h2>
//                 <div>Rs 100</div>
//             </div>

//             <div>20/12/2022</div>
//             <div>
//                 <h2>Movies</h2>
//                 <div>Rs 200</div>
//             </div>
//         </div> */
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
