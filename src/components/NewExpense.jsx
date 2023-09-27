import React from 'react'
import ExpenseForm from '../components/ExpenseForm'
import "../components/NewExpense.css"

const NewExpense = () => {
  return (
    <div className='new-expense'>
        <ExpenseForm />
    </div>
  )
}

export default NewExpense