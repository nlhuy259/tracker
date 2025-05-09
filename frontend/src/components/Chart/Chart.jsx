import React, { useState } from 'react'
import { Chart as ChartJs, 
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js'

import { Line, Bar } from 'react-chartjs-2'
import { useGlobalContext } from '../../context/globalContext'
import { dateFormat } from '../../utils/dateFormat'
import './Chart.css'

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
)

function Chart() {
    const { incomes, expenses } = useGlobalContext()
    const [chartMode, setChartMode] = useState('overview')  // 'overview' | 'income' | 'expenses'

    const sortedIncomes = incomes.slice().reverse()
    const sortedExpenses = expenses.slice().reverse()

    // Aggregate category totals
    const incomeByCategory = {}
    sortedIncomes.forEach(inc => {
        incomeByCategory[inc.category] = (incomeByCategory[inc.category] || 0) + inc.amount
    })

    const expenseByCategory = {}
    sortedExpenses.forEach(exp => {
        expenseByCategory[exp.category] = (expenseByCategory[exp.category] || 0) + exp.amount
    })

    const overviewData = {
        labels: sortedIncomes.map((inc) => dateFormat(inc.date)),
        datasets: [
            {
                label: 'Income',
                data: sortedIncomes.map((income) => income.amount),
                borderColor: 'green',
                backgroundColor: 'rgba(0,128,0,0.2)',
                tension: 0.2,
                type: 'line',
                fill: true,
            },
            {
                label: 'Expenses',
                data: sortedExpenses.map((expense) => expense.amount),
                borderColor: 'red',
                backgroundColor: 'rgba(255,0,0,0.2)',
                tension: 0.2,
                type: 'line',
                fill: true,
            }
        ]
    }

    const categoryData = {
        labels: chartMode === 'income' ? Object.keys(incomeByCategory) : Object.keys(expenseByCategory),
        datasets: [
            {
                label: chartMode === 'income' ? 'Income by Category' : 'Expenses by Category',
                data: chartMode === 'income' ? Object.values(incomeByCategory) : Object.values(expenseByCategory),
                backgroundColor: chartMode === 'income' ? 'green' : 'red'
            }
        ]
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                onClick: (e, legendItem, legend) => {
                    const clickedLabel = legendItem.text
                    if (clickedLabel === 'Income') setChartMode('income')
                    if (clickedLabel === 'Expenses') setChartMode('expenses')
                }
            },
            title: {
                display: true,
                text: chartMode === 'overview' ? 'Income & Expenses Overview' :
                    chartMode === 'income' ? 'Income Breakdown by Category' : 'Expenses Breakdown by Category'
            },
        },
        scales: {
            y: { beginAtZero: true }
        }
    }

    return (
        <div className='chart-container'>
            {chartMode !== 'overview' && (
                <button className="back-btn" onClick={() => setChartMode('overview')}>
                    Back
                </button>
            )}
            {chartMode === 'overview' ? (
                <Line data={overviewData} options={options} />
            ) : (
                <Bar data={categoryData} options={options} />
            )}
        </div>
    )
}

export default Chart
