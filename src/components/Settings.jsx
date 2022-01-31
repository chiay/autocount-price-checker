import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Button,
	IconButton,
	Input,
	InputGroup,
	Text,
	VStack,
} from '@chakra-ui/react';
import { SettingsIcon } from '@chakra-ui/icons';

export default function Settings() {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<IconButton
				aria-label="settings"
				icon={<SettingsIcon />}
				onClick={onOpen}
				size="lg"
			/>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<form>
					<ModalContent>
						<ModalHeader>Settings</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							<VStack alignItems="flex-start">
								<Text>Username:</Text>
								<Input
									placeholder="Username"
									type="text"
									isRequired={true}
								/>
								<Text>Password:</Text>
								<Input
									placeholder="Password"
									type="password"
									isRequired
								/>
								<Text>Server:</Text>
								<Input
									placeholder="eg.localhost, 192.168.x.x, etc."
									isRequired
								/>
								<Text>Database:</Text>
								<Input placeholder="eg.MSSQL, etc." isRequired />
							</VStack>
						</ModalBody>

						<ModalFooter>
							<Button colorScheme="blue" mr={3} onClick={onClose}>
								Close
							</Button>
							<Button colorScheme="green">Apply</Button>
						</ModalFooter>
					</ModalContent>
				</form>
			</Modal>
		</>
	);
}
