import React, {useContext} from 'react'
import src_img from './img/close.png'
import { ExpenseContext } from '../budgetContext/BudgetContext'


export const ExpensesElement = ({expense}) => {

  const {deleteExpense} = useContext(ExpenseContext)

  return (
    <li key={expense.id}>
        <p>{expense.title}</p>
        <div className="price_delete">
            <div className="price">{expense.price} $</div>
            <img src={src_img} alt="close" className='close' onClick={() => deleteExpense(expense.id)} />
        </div>
    </li>
  )
}
