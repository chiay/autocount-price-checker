import axios from 'axios';

export async function checkBarcode(barcode) {
	try {
		const { data } = await axios.get('http://localhost:5000/api/checker', {
			barcode,
		});
		return data;
	} catch (err) {
		console.log(err, 'Unable to query item details.');
	}
}
