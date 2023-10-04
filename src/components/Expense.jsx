import React, { useState } from 'react';

// import ExpenseItem from '../components/ExpenseItem';
import ExpensesList from '../components/ExpensesList';
import ExpensesChart from '../components/ExpensesChart';
import ExpensesFilter from '../components/ExpenseFilter';
import '../components/Expenses.css';

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <div>
      <div className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses} />
      </div>
    </div>
  );
};

export default Expense;
