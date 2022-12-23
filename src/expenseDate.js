function expenseDate(props){
    const month=props.Date.toLocaleString('en-US', {month: 'long'});
    const Day=props.Date.toLocaleString('en-US',{Day:'2-digit'}); 
    const year=props.Date.getFullYear();

return(
    <div className="expense-Date">
<div className="expense-date_month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{Day}</div>
            </div>
)
};
export default expenseDate;