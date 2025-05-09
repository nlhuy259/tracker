import React, { useState, useEffect } from 'react'
import './Filter.css'

function Filter({ onFilterChange }) {
    const [category, setCategory] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')

    // Update filter automatically when value changes
    useEffect(() => {
        onFilterChange({
            category: category || undefined,
            month: month ? parseInt(month) : undefined,
            year: year ? parseInt(year) : undefined,
        })
    }, [category, month, year, onFilterChange])

    return (
        <div className="filter">
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">All Categories</option>
                <option value="groceries">Groceries</option>
                <option value="stocks">Stocks</option>
                <option value="bank">Bank</option>
                <option value="freelancing">Freelancing</option>
                {/* Add more categories if needed */}
            </select>

            <select value={month} onChange={(e) => setMonth(e.target.value)}>
                <option value="">All Months</option>
                {[...Array(12)].map((_, index) => (
                    <option key={index + 1} value={index + 1}>
                        {index + 1}
                    </option>
                ))}
            </select>

            <select value={year} onChange={(e) => setYear(e.target.value)}>
                <option value="">All Years</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
            </select>
        </div>
    )
}

export default Filter
