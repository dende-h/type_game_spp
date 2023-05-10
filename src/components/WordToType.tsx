// components/WordToType.tsx
import { Text, VStack } from "@chakra-ui/react";
import React from "react";

interface WordToTypeProps {
	word: string;
	jaWord: string;
	userInput: string;
}

const WordToType: React.FC<WordToTypeProps> = ({ word, userInput, jaWord }) => {
	const wordCharacters = word.split("");
	const userInputCharacters = userInput.split("");

	return (
		<VStack mt={8} spacing={0}>
			<Text fontSize="2xl">{jaWord}</Text>
			<Text fontSize="3xl" mb={4}>
				{wordCharacters.map((char, index) => (
					<Text as="span" key={index} color={userInputCharacters[index] === char ? "green.500" : "inherit"}>
						{char}
					</Text>
				))}
			</Text>
		</VStack>
	);
};

export default WordToType;
