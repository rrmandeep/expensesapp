import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem'
import Card from "../UI/Card"
import ExpensesFilter from './ExpensesFilter';
import './Expense.css'

const Expense = (props) => {
  
  const [yearselected, setSelectedYear] = useState("2020");

  const getYear = (selectedyear) => {   
    setSelectedYear(selectedyear)
  }
  
  const filteredExpense = props.expense.filter((expense) => {
    return expense.date.getFullYear().toString() === yearselected
  })
  
  
  
  
  const expenseItems = filteredExpense.map( (ei) => {
    return (<ExpenseItem
        key={ei.id} 
        title={ei.title} 
        date={ei.date} 
        amount={ei.amount}>
      </ExpenseItem>)
  })

  


  return(
    <div>    
      <Card className="expenses">
        <ExpensesFilter selected={yearselected} onSelectYear={getYear} /> 
        {expenseItems}
      </Card>
    </div>
  )
}


export default Expense;