import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css"

const NewExpense = (props) => {
  const saveUserData = (newExpense) => {
    const newexpense = {
      ...newExpense,
      id: ((Math.random() * 10) + 1).toString()
    }
    props.onNewExpense(newexpense);
  };

  return(
    <div  className='new-expense'>
      <ExpenseForm onSaveUserData={saveUserData}/>
    </div>
  )
};


export default NewExpense;