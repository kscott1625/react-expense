import React from 'react'
import '../components/ExpensesList.css';
import ExpenseItem from "../components/ExpenseItem";


const ExpensesList = (props) => {
   
if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>No dates found</h2>
}

  return <ul className='expenses-list'> 
  {props.items.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ))}</ul>
}

export default ExpensesList