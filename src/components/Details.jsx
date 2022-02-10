import { Heading, Box, VStack } from '@chakra-ui/react';

export default function Details({ description, price }) {
	return description && price ? (
		<Box px="1rem" mt="2rem" minH="xs" display="flex" alignItems="center">
			<VStack spacing={10}>
				<Heading
					size="2xl"
					color="white"
					textAlign="center"
					lineHeight={1.2}
				>
					{description}
				</Heading>
				<Heading size="2xl" color="white">
					RM {Number(price).toFixed(2)}
				</Heading>
			</VStack>
		</Box>
	) : (
		<Box px="1rem" mt="2rem" minH="xs" display="flex" alignItems="center">
			<Heading size="2xl" color="white">
				Not Found
			</Heading>
		</Box>
	);
}
