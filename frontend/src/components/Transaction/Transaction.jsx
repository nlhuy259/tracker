import React, { useState } from 'react'
import { useGlobalContext } from '../../context/globalContext'
import History from '../../History/History'
import Filter from '../../components/Filter/Filter' // <-- Import your new Filter

function Transaction() {
    const [filter, setFilter] = useState({})

    return (
        <div className='dashboard'>
            <div className='inner-layout'>
                <div className="title">All Transactions</div>

                <Filter onFilterChange={setFilter} /> {/* <-- Add Filter */}

                <div className="history-con">
                    <History filter={filter} detailed={true} /> {/* <-- Pass dynamic filter */}
                </div>
            </div>
        </div>
    )
}

export default Transaction
