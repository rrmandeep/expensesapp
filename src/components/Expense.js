import ExpenseItem from './ExpenseItem'
import './Expense.css'

function Expense(props){
  
  const expenseItems = props.expense.map( (ei) => {
    return (<ExpenseItem title={ei.title} date={ei.date} amount={ei.amount}></ExpenseItem>)
  })

  return(
    <div className="expenses">
      {expenseItems}
    </div>
  )
}


export default Expense;