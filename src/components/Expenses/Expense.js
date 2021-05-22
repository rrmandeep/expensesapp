import React, {useState} from 'react';
import ExpenseList from './ExpenseList'
import Card from "../UI/Card"
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart'
import './Expense.css'

const Expense = (props) => {
  
  const [yearselected, setSelectedYear] = useState("2020");

  const getYear = (selectedyear) => {   
    setSelectedYear(selectedyear)
  }
  
  const filteredExpense = props.expense.filter((expense) => {
    return expense.date.getFullYear().toString() === yearselected
  })
  
    
  return(
    <div>    
      <Card className="expenses">
        <ExpensesChart expenses={filteredExpense} />
        <ExpensesFilter selected={yearselected} onSelectYear={getYear} /> 
        <ExpenseList items={filteredExpense}/>
      </Card>
    </div>
  )
}


export default Expense;