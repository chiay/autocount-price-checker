import { useState } from 'react';
import Layout from './components/Layout';
import Form from './components/Form';
import Details from './components/Details';

export default function App() {
	const [itemData, setItemData] = useState({});

	return (
		<Layout>
			<Form setItemData={setItemData} />
			<Details description={itemData.Description} price={itemData.Price} />
		</Layout>
	);
}
