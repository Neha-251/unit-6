const mongoose = require('mongoose');

const shortid=require("shortid")

const urlSchema = new mongoose.Schema(
	{
		full: {
			type: String,
			require: true,
		},
		short: {
			type: String,
			require: true,
			default: shortid.generate,
		},
		clicks: {
			type: Number,
			require: true,
			default: 0,
		},
	},
	{
		versionKey: false,
		timestamps: true,
	},
);

module.exports = mongoose.model('urlshort', urlSchema);