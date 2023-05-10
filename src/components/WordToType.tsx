// components/WordToType.tsx
import React from "react";
import { Text } from "@chakra-ui/react";

interface WordToTypeProps {
	word: string;
}

const WordToType: React.FC<WordToTypeProps> = ({ word }) => {
	return <Text fontSize="2xl">{word}</Text>;
};

export default WordToType;
