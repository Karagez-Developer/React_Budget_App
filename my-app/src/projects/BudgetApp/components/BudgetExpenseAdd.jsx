import React, {useContext} from 'react'
import { useState } from 'react'
import { ExpenseContext } from '../budgetContext/BudgetContext'

export const BudgetExpenseAdd = () => {

    const [expense, setExpense] = useState({id: 0, title: '', price: 0});
    const {addExpense} = useContext(ExpenseContext);

    function handleAddExpense(e) {
        e.preventDefault();
        setExpense({...expense, id: Math.floor(Math.random() * 100000000)})
        addExpense(expense);
    }
    

    return (
        <>
            <h2 className='h2_budget'>Add Expense</h2>
            <form onSubmit={(e) => handleAddExpense(e)}>
                <div className="wrapper_form_row">
                    <div className="wrapper_form">
                        <label>Name</label><br />
                        <input type="text" className='inp_add' value={expense.title} onChange={(e) => setExpense({...expense, title: e.target.value})} />
                    </div>
                    <div className="wrapper_form">
                        <label>Cost</label><br />
                        <input type="number" className='inp_add' value={expense.price} onChange={(e) => setExpense({...expense, price: +(e.target.value)})} />
                    </div>
                </div>
                <button className='btn_save'>Save</button>
            </form>
        </>
    )
}
