const express = require('express');
const router = express.Router();

const mssql = require('mssql');
const config = require('../db/sqlConfig.js');

console.log(config);

router.post('/', async (req, res) => {
	try {
		const barcode = req.body.barcode;

		const pool = await mssql.connect(config);

		const {
			recordset: [result],
		} = await pool
			.request()
			.query(
				`SELECT TOP 1 Item.Description, ItemUOM.Price from dbo.Item AS Item INNER JOIN dbo.ItemUOM AS ItemUOM ON ItemUOM.ItemCode = Item.ItemCode WHERE ItemUOM.BarCode = '${barcode}'`
			);
		res.status(200).json(result);
	} catch (err) {
		console.log('error', err);
	}
});

module.exports = router;
