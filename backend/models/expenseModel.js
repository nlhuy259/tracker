const { default: mongoose } = require("mongoose")

const ExpenseSChema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		trim: true,
		maxLength: 50,
	},

	amount: {
		type: Number,
		required: true,
		trim: true,
		maxLength: 20,
	},

	type: {
		type: String,
		default: "expense",
	},

	date: {
		type: Date,

	},
	category: {
		type: String,
		required: true,
		trim: true,
	},
	description: {
		type: String,
		required: true,
		trim: true,
	},
	symbol: {
		type: String,
		requierd: false,
		trim: true,	
	}
}, {
	timestamps: true,
}
)

module.exports = mongoose.model('Expense', ExpenseSChema)