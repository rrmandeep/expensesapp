import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem'
import Card from "../UI/Card"
import ExpensesFilter from './ExpensesFilter';
import './Expense.css'

const Expense = (props) => {
  
  const expenseItems = props.expense.map( (ei) => {
    return (<ExpenseItem title={ei.title} date={ei.date} amount={ei.amount}></ExpenseItem>)
  })

  const [yearselected, setSelectedYear] = useState("2020");

  const getYear = (selectedyear) => {   
    setSelectedYear(selectedyear)
    //console.log(selectedyear)
  }
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