import axios from 'axios';

export async function checkBarcode(barcode) {
	try {
		const { data } = await axios.post(
			'http://localhost:5000/api/checker',
			{ barcode: barcode },
			{ headers: { 'Content-Type': 'application/json' } }
		);
		return data;
	} catch (err) {
		console.log(err, 'Unable to query item details.');
	}
}
