import React from 'react';
import { Input, InputGroup, IconButton, HStack } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import Settings from './Settings';

export default function Form() {
	return (
		<HStack>
			<InputGroup size="lg">
				<Input placeholder="Barcode" w="80vw" mr="1rem" bgColor="white" />;
				<IconButton icon={<SearchIcon />} aria-label="Search" />
			</InputGroup>
			<Settings />
		</HStack>
	);
}
