import { Container } from '@chakra-ui/react';

export default function Layout({ children }) {
	return (
		<Container
			centerContent
			p="2rem"
			minW="100vw"
			minH="100vh"
			bgColor="gray.700"
		>
			{children}
		</Container>
	);
}
