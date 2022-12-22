function expenseitem(props){
    const expenseDate= new Date(2022, 2, 21);
    const expenseTitle =('food items');
    const expenseAmount= 200;
    return (
        <div className="expense-item">
            <div>{ expenseDate.toISOString()}</div>
            <div className="expense-item_disription">
                <h2>{expenseTitle}</h2>
                <div className="expense-item_price"> 200{expenseAmount}</div>
            </div>
        </div>
    );
}
export default expenseitem;