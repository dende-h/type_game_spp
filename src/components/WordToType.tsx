// components/WordToType.tsx
import { Text, Box, useColorModeValue } from "@chakra-ui/react";

interface WordToTypeProps {
	word: string;
	userInput: string;
}

const WordToType: React.FC<WordToTypeProps> = ({ word, userInput }) => {
	const correctColor = useColorModeValue("green.500", "green.300");
	const defaultColor = useColorModeValue("black", "white");

	const coloredWord = word.split("").map((char, idx) => (
		<Text as="span" key={idx} color={userInput[idx] === char ? correctColor : defaultColor}>
			{char}
		</Text>
	));

	return (
		<Box>
			<Text fontSize="xl">{coloredWord}</Text>
		</Box>
	);
};

export default WordToType;
