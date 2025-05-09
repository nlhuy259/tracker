import React from 'react'
import { useGlobalContext } from '../context/globalContext'
import './History.css'
import { vnd } from '../utils/icons'
import IncomeItem from '../components/IncomeItem/IncomeItem'


function History({ limit, filter, detailed }) {
    const { transactionHistory } = useGlobalContext()

    let history = transactionHistory()

    if (filter) {
        history = history.filter((item) => {
            const { title, category, amount, date } = item
    
            const itemDate = new Date(date) // Parse the item's date
    
            const matchesTitle = filter.title
                ? title.toLowerCase().includes(filter.title.toLowerCase())
                : true
    
            const matchesCategory = filter.category
                ? category.toLowerCase().includes(filter.category.toLowerCase())
                : true
    
            const matchesAmount = filter.amount
                ? amount === filter.amount
                : true
    
            const matchesDate = filter.date
                ? new Date(filter.date).toDateString() === itemDate.toDateString()
                : true
    
            const matchesMonth = filter.month !== undefined
                ? itemDate.getMonth() + 1 === filter.month // getMonth() is 0-indexed!
                : true
    
            const matchesYear = filter.year !== undefined
                ? itemDate.getFullYear() === filter.year
                : true
    
            return (
                matchesTitle &&
                matchesCategory &&
                matchesAmount &&
                matchesDate &&
                matchesMonth &&
                matchesYear
            )
        })
    }

    // Apply limit after filtering
    if (limit) {
        history = history.slice(0, limit)
    }
    if (!detailed)  {
        return (
            <div className="history">
                {history.length === 0 ? (
                    <p>No transactions found.</p>
                ) : (
                    history.map((item) => {
                        const { _id, title, amount, type } = item
                        return (
                            <div key={_id} className="history-item">
                                <p
                                    style={{
                                        color: type === 'expense' ? 'red' : 'var(--color-green)',
                                    }}
                                >
                                    {title}
                                </p>
                            
                                <p
                                    style={{
                                        color: type === 'expense' ? 'red' : 'var(--color-green)',
                                    }}
                                >
                                    {type === 'expense'
                                        ? `- ${amount <= 0 ? 0 : amount} ${vnd}`
                                        : `+ ${amount <= 0 ? 0 : amount} ${vnd}`}
                                </p>
                            </div>
                        )
                    })
                )}
            </div>
        )
    } else if(detailed) {
        return (
            <div className="history">
                {history.length === 0 ? (
                    <p>No transactions found.</p>
                ) : (
                    history.map((item) => {
                        const { _id, title, amount, type, description, date, category } = item;
                        
                            return (
                                <IncomeItem
                                    key={_id}
                                    id={_id}
                                    title={title}
                                    description={description}
                                    amount={amount}
                                    date={date}
                                    type={type}
                                    category={category}
                                    indicatorColor={type === 'income'? "var(--color-green)": "red" }
                                />
                            )
                        
                    })
                )}
            </div>
        )
    }
    
    
}

export default History
