import { useEffect } from 'react';
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
	Text,
	VStack,
} from '@chakra-ui/react';
import { SettingsIcon } from '@chakra-ui/icons';
import { useForm } from 'react-hook-form';
import useLocalStorage from '../hooks/useLocalStorage';

export default function Settings() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [settings, setSettings] = useLocalStorage('settings', {
		username: '',
		password: '',
		server: '',
		database: '',
	});
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		defaultValues: {
			username: '',
			password: '',
			server: '',
			database: '',
		},
	});

	useEffect(() => {
		reset(settings);
	}, []);

	const onSubmit = (data) => {
		const { username, password, server, database } = data;
		setSettings({ username, password, server, database });
		onClose();
	};

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
				<form onSubmit={handleSubmit(onSubmit)}>
					<ModalContent>
						<ModalHeader>Settings</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							<VStack alignItems="flex-start">
								<Text>Username:</Text>
								<Input
									placeholder="Username"
									type="text"
									{...register('username', { required: true })}
								/>
								{errors.username && (
									<Text color="red">This field is required</Text>
								)}
								<Text>Password:</Text>
								<Input
									placeholder="Password"
									type="password"
									{...register('password', { required: true })}
								/>
								{errors.password && (
									<Text color="red">This field is required</Text>
								)}
								<Text>Server:</Text>
								<Input
									placeholder="eg.localhost, 192.168.x.x, etc."
									{...register('server', { required: true })}
								/>
								{errors.server && (
									<Text color="red">This field is required</Text>
								)}
								<Text>Database:</Text>
								<Input
									placeholder="eg.MSSQL, etc."
									{...register('database', { required: true })}
								/>
								{errors.database && (
									<Text color="red">This field is required</Text>
								)}
							</VStack>
						</ModalBody>

						<ModalFooter>
							<Button colorScheme="blue" onClick={onClose}>
								Close
							</Button>
							<Button colorScheme="teal" mx={3}>
								Test Connection
							</Button>
							<Button colorScheme="green" type="submit">
								Apply
							</Button>
						</ModalFooter>
					</ModalContent>
				</form>
			</Modal>
		</>
	);
}
