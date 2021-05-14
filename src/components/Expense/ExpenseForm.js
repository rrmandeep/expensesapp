import React, {useState} from 'react';
import "./ExpenseForm.css"

const ExpenseForm = () => {
  const [enteredTitle, setenteredTitle] = useState("");
  const changeTitleHandler = (event) => {
    setenteredTitle(event.target.value);
  };
  
  const [enteredDate, setenteredDate] = useState('');
  const changeDateHandler = (event) => {
    setenteredDate(event.target.value);
  }

  const [enteredAmount, setenteredAmount] = useState('');
  const changeAmountHandler = (event) => {
    setenteredAmount(event.target.value);
  };

  //*****************************************************************/
  //Alternative way usnig single state
  
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: ""
  // })
 
  // // IN this type we have to manage state of other input as well
  // const changeTitleHandler = (event) => {
  //   // Way One
  //   setUserInput({...userInput, enteredTitle: event.target.value});
  //   // Way two (Most correct)
  //   setUserInput((pervState) => {
  //     return ({...pervState, enteredTitle: event.target.value});
  //   });
  // };
  //******************************************************************/

  const submitHandler = (event) => {
    event.preventDefault();
 
    const intputData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }
    console.log(intputData)
    setenteredTitle('');
    setenteredAmount('');
    setenteredDate('');
  };

  return(
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={enteredTitle} onChange={changeTitleHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={changeAmountHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2019.01.01' max='2022.12.31' value={enteredDate} onChange={changeDateHandler} />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
};


export default ExpenseForm; 