// components/WordToType.tsx
import { Text, Box, useColorModeValue } from "@chakra-ui/react";

interface WordToTypeProps {
	word: string;
	userInput: string;
}

const WordToType: React.FC<WordToTypeProps> = ({ word, userInput }) => {
	const wordCharacters = word.split("");
	const userInputCharacters = userInput.split("");

	return (
		<Text fontSize="3xl" mb={4}>
			{wordCharacters.map((char, index) => (
				<Text as="span" key={index} color={userInputCharacters[index] === char ? "green.500" : "inherit"}>
					{char}
				</Text>
			))}
		</Text>
	);
};

export default WordToType;
