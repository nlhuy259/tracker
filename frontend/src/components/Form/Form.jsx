import React, { useState } from 'react';
import { DatePicker, Space } from 'antd';
import { useGlobalContext } from '../../context/globalContext';
import Button from '../Button/Button';
import { plus } from '../../utils/icons';
import dayjs from 'dayjs';
import './Form.css';

function Form() {
    const { addIncome, getIncomes, error, setError } = useGlobalContext();
    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: '',
    });

    const { title, amount, date, category, description } = inputState;

    const handleInput = name => e => {
        setInputState({ ...inputState, [name]: e.target.value });
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        addIncome(inputState); 
        setInputState({
            title: '',
            amount: '',
            date: null,
            category: '',
            description: '',
        });
    };
    

    return (
        <form className="form" onSubmit={handleSubmit}>
            {error && <p className="error">{error}</p>}
            <div className="input-control">
                <input
                    type="text"
                    value={title}
                    name="title"
                    placeholder="Title"
                    onChange={handleInput('title')}
                />
            </div>
            <div className="input-control">
                <input
                    value={amount}
                    type="text"
                    name="amount"
                    placeholder="Amount"
                    onChange={handleInput('amount')}
                />
            </div>
            <div className="input-control">
                    <Space direction="vertical">
                        <DatePicker
                            id="date"
                            value={date ? dayjs(date) : null}
                            format="DD/MM/YYYY"
                            onChange={(dateObj) => {
                                const formatted = dateObj ? dayjs(dateObj).toISOString() : '';
                                setInputState(prev => ({ ...prev, date: formatted }));
                            }}
                            size="large"
                        />
                    </Space>
            </div>
            <div className="selects input-control">
                <select
                    required
                    value={category}
                    name="category"
                    id="category"
                    onChange={handleInput('category')}
                >
                    <option value="" disabled>Select Option</option>
                    <option value="salary">Salary</option>
                    <option value="freelancing">Freelancing</option>
                    <option value="stocks">Stocks</option>
                    <option value="bank">Bank Transfer</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div className="input-control">
                <textarea
                    name="description"
                    value={description}
                    placeholder="Add A Reference"
                    id="description"
                    cols="30"
                    rows="4"
                    onChange={handleInput('description')}
                ></textarea>
            </div>
            <div className="submit-btn">
                <Button
                    name="Add Income"
                    icon={plus}
                    bPad=".8rem 1.6rem"
                    bRad="30px"
                    bg="var(--color-accent)"
                    color="#fff"
                />
            </div>
        </form>
    );
}

export default Form;
