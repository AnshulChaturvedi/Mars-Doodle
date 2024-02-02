const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () => {
	mongoose
		.connect(process.env.DATABASE_URL)
		.then(() => console.log("DB CONNECTION SUCCESS"))
		.catch((error) => {
			console.log(`DB CONNECTION ISSUES`);
			console.error(error.message);
			process.exit(1);
		});
};

module.exports = dbConnect;
