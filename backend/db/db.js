const mongoose = require('mongoose');

async function connect() {
	try {
		await mongoose.connect('mongodb://localhost:27017/expense_tracker');
		console.log("Sucess DB connect");
	} catch (error) {
		console.log("Fail", error);
	}
}

module.exports = {connect}