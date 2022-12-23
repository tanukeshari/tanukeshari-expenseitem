import expenseDate from "./expenseDate";
import card from "./card";



function expenseitem(props){
    return(
        <card className="expense-item">
    <div className="expense-item">

        <expenseDate date={props.date}/>
        <div className='expense-item__desription'>
            <h2>{props.title}</h2>
            <div className="expense-item__price">{props.amount}</div>
        </div>
    </div>
</card>

    
    )
}
export default expenseitem;