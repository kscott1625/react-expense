import React, { useState } from 'react';

import ExpenseItem from '../components/ExpenseItem';
import ExpensesFilter from '../components/ExpenseFilter';
import '../components/Expenses.css';

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
const filteredExpenses = props.items.filter((item) =>{
  return item.date.getFullYear().toString() === filteredYear;
})
  return (
    <div>
      <div className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        {filteredExpenses.length === 0 ? <p>No expenses found</p> : 
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}

      </div>
    </div>
  );
};

export default Expense;
