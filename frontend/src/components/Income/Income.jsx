import React, { useEffect, useState } from 'react';
import Form from '../Form/Form';
import IncomeItem from '../IncomeItem/IncomeItem';
import './Income.css';
import { useGlobalContext } from '../../context/globalContext';

function Income() {
    const {addIncome,incomes, getIncomes, totalIncome, deleteIncome} = useGlobalContext()

    useEffect(() => {
        getIncomes();
    }, []);
    
    

    return (
        <div className="income">
            <div className="inner-layout">
            <div className="title">Incomes</div>
                <h2 className="total-income">Total Income: <span>${totalIncome()}</span></h2>
                <div className="income-content">
                    <div className="form-container">
                        <Form/>
                    </div>
                    <div className="incomes">
                        {incomes.map((income) => {
                            const { _id, title, amount, date, category, description, type } = income;
                            return <IncomeItem
                                key={_id}
                                id={_id}
                                title={title}
                                description={description}
                                amount={amount}
                                date={date}
                                type={type}
                                category={category}
                                indicatorColor="var(--color-green)"
                                deleteItem={deleteIncome}
                            />
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Income;
