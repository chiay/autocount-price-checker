import { Heading, Box, VStack } from '@chakra-ui/react';

export default function Details({ description, price }) {
	return description && price ? (
		<Box p="2rem" mt="2rem" minH="lg" display="flex" alignItems="center">
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
		<Box p="2rem" mt="2rem" minH="lg" display="flex" alignItems="center">
			<VStack spacing={10}>
				<Heading size="2xl" color="white">
					Not Found
				</Heading>
			</VStack>
		</Box>
	);
}
