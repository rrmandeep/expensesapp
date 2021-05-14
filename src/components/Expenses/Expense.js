import React from 'react';
import ExpenseItem from './ExpenseItem'
import './Expense.css'
import Card from "../UI/Card"

const Expense = (props) => {
  
  const expenseItems = props.expense.map( (ei) => {
    return (<ExpenseItem title={ei.title} date={ei.date} amount={ei.amount}></ExpenseItem>)
  })

  return(
    <Card className="expenses">
      {expenseItems}
    </Card>
  )
}


export default Expense;