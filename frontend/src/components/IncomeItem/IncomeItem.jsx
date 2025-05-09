import {React, useState} from 'react'
import { dateFormat } from '../../utils/dateFormat';
import { 
    bitcoin, book, calender, card, circle, clothing, comment, vnd, 
    food, freelance, medical, money, piggy, stocks, takeaway, trash, tv, users, yt 
} from '../../utils/icons';
import Button from '../Button/Button';
import './IncomeItem.css';

function IncomeItem({
    id,
    title,
    amount,
    date,
    category,
    description,
    deleteItem,
    indicatorColor,
    type
}) {

    const categoryIcon = () => {
        switch (category) {
            case 'salary': return money;
            case 'freelancing': return freelance;
            case 'investments': return stocks;
            case 'stocks': return users;
            case 'bitcoin': return bitcoin;
            case 'bank': return card;
            case 'youtube': return yt;
            case 'other': return piggy;
            default: return '';
        }
    }

    const expenseCatIcon = () => {
        switch (category) {
            case 'education': return book;
            case 'groceries': return food;
            case 'health': return medical;
            case 'subscriptions': return tv;
            case 'takeaways': return takeaway;
            case 'clothing': return clothing;
            case 'travelling': return freelance;
            case 'other': return circle;
            default: return '';
        }
    }
    const [showFull, setShowFull] = useState(false);
    const toggleDescription = () => {
        setShowFull(prev => !prev);
    }

    return (
        <div className="income-item" style={{ borderColor: '#FFFFFF', '--indicator': indicatorColor }}>
            <div className="income-item__icon">
                {type === 'expense' ? expenseCatIcon() : categoryIcon()}
            </div>
            <div className="income-item__content">
                <h5>{title}</h5>
                <div className="income-item__details">
                    <div className="income-item__text">
                        <p>{amount} {vnd}</p>
                        <p>{calender} {dateFormat(date)}</p>
                        <p>
                            {comment} 
                            {showFull 
                                ? description 
                                : `${description.substring(0, 40)}${description.length > 40 ? '...' : ''}`
                            }
                            {description.length > 40 && (
                                <span 
                                    onClick={toggleDescription} 
                                    className="see-more"
                                >
                                    {showFull ? ' Show less' : ' See more'}
                                </span>
                            )}
                        </p>
                    </div>
                    <div className="income-item__btn">
                        <Button 
                            icon={trash}
                            bPad={'1rem'}
                            bRad={'50%'}
                            bg={'var(--primary-color'}
                            color={'#fff'}
                            iColor={'#fff'}
                            hColor={'var(--color-green)'}
                            onClick={() => deleteItem(id)}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IncomeItem
