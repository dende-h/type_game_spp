import { Text, VStack, useColorModeValue } from "@chakra-ui/react";
import React from "react";

interface WordToTypeProps {
	word: string;
	jaWord: string;
	userInput: string;
	mode: string;
	guideOn: boolean;
}

const WordToType: React.FC<WordToTypeProps> = ({ word, userInput, jaWord, mode, guideOn }) => {
	const wordCharacters = word.split("");
	const userInputCharacters = userInput.split("");
	const bgColor = useColorModeValue("gray.50", "gray.900");

	const getColor = (char: string, index: number) => {
		if (userInputCharacters[index] === char) {
			return "green.500";
		}
		if (mode === "mania" || !guideOn) {
			return index === 0 ? "inherit" : bgColor;
		}
		return "inherit";
	};

	return (
		<VStack mt={8} spacing={0}>
			{mode !== "japanese" && (
				<Text fontSize={{ base: "xl", md: "2xl" }} overflowWrap="break-word">
					{jaWord}
				</Text>
			)}
			<Text fontSize={{ base: "2xl", md: "3xl" }} mb={4} overflowWrap="break-word">
				{wordCharacters.map((char, index) => (
					<Text as="span" key={index} color={getColor(char, index)}>
						{char}
					</Text>
				))}
			</Text>
		</VStack>
	);
};

export default WordToType;
