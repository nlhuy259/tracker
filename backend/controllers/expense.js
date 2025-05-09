const ExpenseSchema = require('../models/expenseModel')


exports.addExpense = async (req,res) => {
	const {title, amount, category, description, date} = req.body;

	const expense = ExpenseSchema({
		title,
		amount,
		category,
		description,
		date,
	});
	
	try {
		await expense.save();
		console.log('success');
	} catch(error) {
		console.log("ERROR", error);
	}
}
exports.getExpenses = async (req, res) => {
	try {
		const expenses = await ExpenseSchema.find().sort({createdAt: -1});
		res.status(200).json(expenses)
	} catch (error) {
		res.status(500).json({message: "Server Error"})
	}
}
exports.deleteExpense = async (req, res) => {
	const {id} = req.params;
	ExpenseSchema.findByIdAndDelete(id)
	.then((expense) => {
		res.status(200).json({message: "Income Deleted"});
	})
	.catch((err) => {
		res.status(500).json({message: "Server Error"});
	})
}
