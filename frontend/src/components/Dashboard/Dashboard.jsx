import React, { useEffect } from 'react'
import { useGlobalContext } from '../../context/globalContext';
import History from '../../History/History';
import { vnd } from '../../utils/icons';
import Chart from '../Chart/Chart';
import './Dashboard.css'

function Dashboard() {
    const { totalExpenses, incomes, expenses, totalIncome, totalBalance, getIncomes, getExpenses } = useGlobalContext()

    useEffect(() => {
        getIncomes()
        getExpenses()
    }, [])

    return (
        <div className='dashboard'>
            <div className='inner-layout'>
            <div className="title">All Transactions</div>
                <div className="stats-con">
                    
                    <div className="chart-con">
                        <Chart />
                    </div>
                    <div className="history-con">
                    <h2>Recent Transactions</h2> <br />
                        <History limit={5} />
                    </div>
                </div>

                <div className="amount-con">
                    <div className="income-amount">
                        <h2>Total Income</h2>
                        <p>{totalIncome()}{vnd}</p>
                    </div>
                    <div className="expense-amount">
                        <h2>Total Expense</h2>
                        <p>{totalExpenses()}{vnd}</p>
                    </div>
                    <div className="balance-amount">
                        <h2>Total Balance</h2>
                        <p>{totalBalance()}{vnd}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
