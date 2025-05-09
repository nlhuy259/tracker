const IncomeSchema = require('../models/incomeModel')


exports.addIncome = async (req,res) => {
	const {title, amount, category, description, date} = req.body;

	const income = IncomeSchema({
		title,
		amount,
		category,
		description,
		date,
	});
	
	try {

		await income.save();
		console.log('success');
	} catch(error) {
		console.log("ERROR", error);
	}
}
exports.getIncomes = async (req, res) => {
	try {
		const incomes = await IncomeSchema.find().sort({createdAt: -1});
		res.status(200).json(incomes)
	} catch (error) {
		res.status(500).json({message: "Server Error"})
	}
}
exports.deleteIncome = async (req, res) => {
	const {id} = req.params;
	IncomeSchema.findByIdAndDelete(id)
	.then((income) => {
		res.status(200).json({message: "Income Deleted"});
	})
	.catch((err) => {
		res.status(500).json({message: "Server Error"});
	})
}
