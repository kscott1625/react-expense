import '../components/ExpenseItems.css';
import ExpenseDate from '../components/ExpenseDate';
import { useState } from 'react';
// import Card from '../components/Card';



function ExpenseItem(props) {

  const [title, setTitle] = useState(props.title);


const clickHandler = () => {
  setTitle("Hanalei")
}

    return (
      <div className="expense-item">
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Lucy</button>
      </div>
    );
  }
  
  export default ExpenseItem;