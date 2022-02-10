import React, { useEffect, useRef } from 'react';
import { Input, InputGroup, IconButton, HStack } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useForm } from 'react-hook-form';
import { checkBarcode } from '../api/Checker';

export default function Form({ setItemData }) {
	const { handleSubmit } = useForm();
	const barcodeInput = useRef();

	const onSubmit = async () => {
		const barcode = barcodeInput.current.value;
		const { Description, Price } = await checkBarcode(barcode);

		setItemData({ Description, Price });

		barcodeInput.current.value = '';
	};

	return (
		<HStack>
			<form onSubmit={handleSubmit(onSubmit)}>
				<InputGroup size="lg">
					<Input
						placeholder="Barcode"
						w="80vw"
						mr="1rem"
						bgColor="white"
						ref={barcodeInput}
						autoFocus
					/>
					<IconButton
						icon={<SearchIcon />}
						aria-label="Search"
						type="submit"
					/>
				</InputGroup>
			</form>
		</HStack>
	);
}
