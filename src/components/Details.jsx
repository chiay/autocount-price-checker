import { Heading, Box, VStack } from '@chakra-ui/react';

export default function Details() {
	return (
		<Box p="2rem" mt="2rem" minH="lg" display="flex" alignItems="center">
			<VStack spacing={10}>
				<Heading
					size="2xl"
					color="white"
					textAlign="center"
					lineHeight={1.2}
				>
					In esse ea cupidatat proident ipsum veniam proident ut ipsum.
					Voluptate laboris occaecat commodo irure reprehenderit Lorem non
					occaecat magna pariatur. Culpa aliqua do ad irure.
				</Heading>
				<Heading size="2xl" color="white">
					RM Price
				</Heading>
			</VStack>
		</Box>
	);
}
