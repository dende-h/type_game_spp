// pages/index.tsx
import React, { useState } from "react";
import WordToType from "../components/WordToType";
import TypingInput from "../components/TypingInput";
import Timer from "../components/Timer";
import { useRouter } from "next/router";
import { Box, Button, useToast } from "@chakra-ui/react";

const easyWords = ["cat", "dog", "car", "bus", "sun"];
const normalWords = ["apple", "grape", "chair", "table", "pencil"];
const hardWords = [
	"pterodactyl",
	"supercalifragilisticexpialidocious",
	"pneumonoultramicroscopicsilicovolcanoconiosis",
	"floccinaucinihilipilification",
	"antidisestablishmentarianism"
];
export default function Home() {
	const [words, setWords] = useState(normalWords);
	const [currentWord, setCurrentWord] = useState(words[0]);
	const [userInput, setUserInput] = useState("");
	const [isActive, setIsActive] = useState(false);
	const [score, setScore] = useState(0);
	const router = useRouter();

	const toast = useToast();

	const handleInputChange = (value: string) => {
		setUserInput(value);
		if (value === currentWord) {
			setScore(score + 1);
			setUserInput("");
			setCurrentWord(words[Math.floor(Math.random() * words.length)]);

			toast({
				title: "Correct!",
				status: "success",
				duration: 1000,
				isClosable: true
			});
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
		setUserInput("");
		setTimeout(() => {
			router.push({ pathname: "/result", query: { score } });
		}, 2000);
	};

	return (
		<Box textAlign="center" pt="10">
			{isActive && <WordToType word={currentWord} />}
			<TypingInput value={userInput} onChange={handleInputChange} disabled={!isActive} />
			<Timer isActive={isActive} onTimeUp={onTimeUp} duration={30} />
			<button onClick={startGame}>Start Game</button>
			<br />
			<Button onClick={() => setWords(easyWords)}>Easy</Button>
			<Button onClick={() => setWords(normalWords)}>Normal</Button>
			<Button onClick={() => setWords(hardWords)}>Hard</Button>
		</Box>
	);
}
