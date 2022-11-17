import React from 'react';
// css
import './ExpenseTracker.css';
// components
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';


// context
import { GlobalProvider } from './context/GlobalState';


export const ExpenseTracker = () => {
    return (
        <GlobalProvider>
            <Header/>
            <div className="container">
                <Balance/>
                <IncomeExpenses/>
                <TransactionList/>
                <AddTransaction/>
            </div>
        </GlobalProvider>
    )
}
