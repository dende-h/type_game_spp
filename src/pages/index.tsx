// pages/index.tsx
import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import WordToType from "../components/WordToType";
import TypingInput from "../components/TypingInput";
import Result from "../components/Result";
import Timer from "../components/Timer";

const words = ["apple", "banana", "grape", "orange", "pineapple"];

export default function Home() {
	const [currentWord, setCurrentWord] = useState(words[0]);
	const [userInput, setUserInput] = useState("");
	const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
	const [isActive, setIsActive] = useState(false);

	const handleInputChange = (value: string) => {
		setUserInput(value);
		if (value === currentWord) {
			setIsCorrect(true);
			setIsActive(false);
		} else {
			setIsCorrect(false);
		}
	};

	const startGame = () => {
		setIsActive(true);
		setIsCorrect(null);
		setUserInput("");
		setCurrentWord(words[Math.floor(Math.random() * words.length)]);
	};

	const onTimeUp = () => {
		setIsActive(false);
	};

	return (
		<Box textAlign="center" pt="10">
			<WordToType word={currentWord} />
			<TypingInput value={userInput} onChange={handleInputChange} />
			{isCorrect !== null && <Result isCorrect={isCorrect} />}
			<Timer isActive={isActive} onTimeUp={onTimeUp} duration={30} />
			<button onClick={startGame}>Start Game</button>
		</Box>
	);
}
