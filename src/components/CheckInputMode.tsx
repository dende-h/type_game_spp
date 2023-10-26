import {
	useDisclosure,
	Button,
	AlertDialog,
	AlertDialogOverlay,
	AlertDialogContent,
	AlertDialogHeader,
	AlertDialogBody,
	AlertDialogFooter,
	Text,
	ButtonProps
} from "@chakra-ui/react";
import React from "react";

type Props = ButtonProps & {
	genre: string;
	mode: string;
	onclickStart: () => void;
};

export const CheckInputMode = (props: Props) => {
	const { genre, mode, onclickStart, ...buttonProps } = props;
	const { isOpen, onOpen, onClose } = useDisclosure();
	const cancelRef: React.MutableRefObject<HTMLButtonElement | null> = React.useRef(null);

	return (
		<>
			<Button {...buttonProps} onClick={onOpen}>
				Game Start
			</Button>

			<AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
				<AlertDialogOverlay>
					<AlertDialogContent>
						<AlertDialogHeader fontSize="lg" fontWeight="bold">
							以下の内容で開始します
						</AlertDialogHeader>

						<AlertDialogBody>
							<Text fontWeight="bold">
								Genre : {genre}
								<br />
								Mode : {mode}
							</Text>
							<Text>入力モードは適切か確認してスタートボタンで開始してください。</Text>
							<Text>例：ローマ字モード→英字入力、変換モード→かな入力</Text>
						</AlertDialogBody>

						<AlertDialogFooter>
							<Button ref={cancelRef} onClick={onClose}>
								Cancel
							</Button>
							<Button colorScheme="teal" onClick={onclickStart} ml={3}>
								Start!
							</Button>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialogOverlay>
			</AlertDialog>
		</>
	);
};
