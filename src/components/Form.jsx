import React from 'react';
import { Input, InputGroup, IconButton, HStack } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useForm } from 'react-hook-form';
import { checkBarcode } from '../api/Checker';

export default function Form() {
	const { handleSubmit } = useForm();

	const onSubmit = async () => {
		const { description } = await checkBarcode();

		console.log(description);
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
