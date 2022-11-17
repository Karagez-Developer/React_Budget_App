import React from 'react'
// components
import { BudgetHeader } from './components/BudgetHeader'
import { BudgetElements } from './components/BudgetElements'
import { BudgetList } from './components/BudgetList'
import { BudgetExpenseAdd } from './components/BudgetExpenseAdd'

// context

import { BudgetContext } from './budgetContext/BudgetContext'


export const BudgetApp = () => {
    return (
        <BudgetContext>
            <div className='wrapper'>
                <BudgetHeader/>
                <BudgetElements/>
                <BudgetList/>
                <BudgetExpenseAdd/>
            </div>
        </BudgetContext>
    )
}
