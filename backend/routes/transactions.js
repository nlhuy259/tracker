const router = require('express').Router();
const income = require('../controllers/income');
const expense = require('../controllers/expense');

router.get('/', (req, res) => {
	res.send('Hello');
} )

router.post('/add-income', income.addIncome)
	.get('/get-incomes', income.getIncomes)
	.delete('/delete-income/:id', income.deleteIncome)
	.post('/add-expense', expense.addExpense)
	.get('/get-expenses', expense.getExpenses)
	.delete('/delete-expense/:id', expense.deleteExpense)

module.exports = router;