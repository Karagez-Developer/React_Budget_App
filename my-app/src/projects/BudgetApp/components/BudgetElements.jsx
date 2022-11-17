import React, {useContext, useState} from 'react'
import { ExpenseContext } from '../budgetContext/BudgetContext'
import { BudgetModal } from './BudgetModal';

export const BudgetElements = () => {

    const [budgetSum, setBudgetSum] = useState(1000);
    const [open, setOpen] = useState(false);


    function addBudget(increase) {
        setBudgetSum(prev => prev += increase)
    }
    
    const {expenses} = useContext(ExpenseContext);

    const expensesTotal = expenses.reduce( (sum, expense) => sum += expense.price, 0 );

    const expensesRemain = budgetSum - expensesTotal;

    return (
        <div className='budget_row'>
            <BudgetModal open={open} onClose={() => setOpen(false)} callback={addBudget} />
            <div className="budget_element edit">
                <p>Budget: {budgetSum}$</p>
                <button onClick={() => setOpen(true)}>Edit</button>
            </div>
            <div className="budget_element remains">
                <p>Remaining: {expensesRemain}$</p>
            </div>
            <div className="budget_element spent">
                <p>Spent so far: {expensesTotal}$</p>
            </div>
        </div>
    )
}
