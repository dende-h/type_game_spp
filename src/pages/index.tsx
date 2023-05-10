// pages/index.tsx
import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import WordToType from "../components/WordToType";
import TypingInput from "../components/TypingInput";
import Timer from "../components/Timer";
import { useRouter } from "next/router";

const words = ["apple", "banana", "grape", "orange", "pineapple"];

export default function Home() {
	const [currentWord, setCurrentWord] = useState(words[0]);
	const [userInput, setUserInput] = useState("");
	const [isActive, setIsActive] = useState(false);
	const [score, setScore] = useState(0);
	const router = useRouter();

	const handleInputChange = (value: string) => {
		setUserInput(value);
		if (value === currentWord) {
			setScore(score + 1);
			setUserInput("");
			setCurrentWord(words[Math.floor(Math.random() * words.length)]);
		}
	};

	const startGame = () => {
		setIsActive(true);
		setScore(0);
		setUserInput("");
		setCurrentWord(words[Math.floor(Math.random() * words.length)]);
	};

	const onTimeUp = () => {
		setIsActive(false);
		router.push({ pathname: "/result", query: { score } });
	};

	return (
		<Box textAlign="center" pt="10">
			<WordToType word={currentWord} />
			<TypingInput value={userInput} onChange={handleInputChange} disabled={!isActive} />
			<Timer isActive={isActive} onTimeUp={onTimeUp} duration={30} />
			<button onClick={startGame}>Start Game</button>
		</Box>
	);
}
