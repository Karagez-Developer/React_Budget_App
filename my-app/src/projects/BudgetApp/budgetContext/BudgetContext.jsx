import React, {createContext, useReducer} from 'react'
import ExpensesReducer from './ExpensesReducer'

// initial value. expenses elements
const initialExpenses = {
    expenses: [],
}



export const ExpenseContext = createContext(initialExpenses) 


export const BudgetContext = ({children}) => {

    const [state, dispatch] = useReducer(ExpensesReducer, initialExpenses);

    function deleteExpense(id) {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: id
        })
    }

    function addExpense(expense) {
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        })
    }

    

    return (
        <ExpenseContext.Provider value={{
            expenses: state.expenses,
            deleteExpense,
            addExpense,
        }}>
            {children}
        </ExpenseContext.Provider>
    )
}
