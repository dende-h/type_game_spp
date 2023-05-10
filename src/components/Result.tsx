// components/Result.tsx
import React from "react";
import { Text } from "@chakra-ui/react";

interface ResultProps {
	isCorrect: boolean;
}

const Result: React.FC<ResultProps> = ({ isCorrect }) => {
	return <Text color={isCorrect ? "green.500" : "red.500"}>{isCorrect ? "Correct!" : "Incorrect!"}</Text>;
};

export default Result;
