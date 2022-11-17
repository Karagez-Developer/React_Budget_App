import React, {useContext} from 'react'
import { useState } from 'react';
import { ExpensesElement } from './ExpensesElement';

// context
import { ExpenseContext } from '../budgetContext/BudgetContext'


export const BudgetList = () => {

    const [searchExpense, setSearchExpense] = useState('');

    const {expenses} = useContext(ExpenseContext);

    return (
        <>
            <h2 className='h2_budget'>Expenses</h2>
            <input type='text' value={searchExpense} onChange={(e) => setSearchExpense(e.target.value)} placeholder='Type to search...' className='inp_search'/>
            <ul>
                {expenses.filter( expense => expense.title.toLocaleLowerCase().includes(searchExpense) ).map( expense => <ExpensesElement key={expense.id} expense={expense} /> )}
            </ul>
        </>
    )
}
