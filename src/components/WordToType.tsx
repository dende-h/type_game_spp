// components/WordToType.tsx
import { Text, VStack, useColorModeValue } from "@chakra-ui/react";
import React from "react";

interface WordToTypeProps {
	word: string;
	jaWord: string;
	userInput: string;
	mode: string;
}

const WordToType: React.FC<WordToTypeProps> = ({ word, userInput, jaWord, mode }) => {
	const wordCharacters = word.split("");
	const userInputCharacters = userInput.split("");
	const bgColor = useColorModeValue("gray.50", "gray.900");
	return (
		<VStack mt={8} spacing={0}>
			{mode === "japanese" || (
				<Text fontSize={{ base: "xl", md: "2xl" }} overflowWrap="break-word">
					{jaWord}
				</Text>
			)}
			<Text fontSize={{ base: "2xl", md: "3xl" }} mb={4} overflowWrap="break-word">
				{wordCharacters.map((char, index) => (
					<Text
						as="span"
						key={index}
						color={
							userInputCharacters[index] === char
								? "green.500"
								: mode === "mania"
								? index === 0
									? "inherit"
									: bgColor
								: "inherit"
						}
					>
						{char}
					</Text>
				))}
			</Text>
		</VStack>
	);
};

export default WordToType;
