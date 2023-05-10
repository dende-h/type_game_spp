// pages/index.tsx
import React, { useState } from "react";
import WordToType from "../components/WordToType";
import TypingInput from "../components/TypingInput";
import Timer from "../components/Timer";
import { useRouter } from "next/router";
import {
	Box,
	Button,
	VStack,
	Text,
	useColorModeValue,
	useBreakpointValue,
	Container,
	useToast
} from "@chakra-ui/react";

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
	const difficultyLabel = () => {
		if (words === easyWords) return "Easy";
		if (words === normalWords) return "Normal";
		if (words === hardWords) return "Hard";
		return "";
	};

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

	const bgColor = useColorModeValue("gray.50", "gray.900");
	const headingColor = useColorModeValue("gray.700", "gray.200");
	const textSize = useBreakpointValue({ base: "sm", md: "md", lg: "lg" });

	return (
		<Container
			height="100vh"
			display="flex"
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
			backgroundColor={bgColor}
		>
			<Text fontSize="4xl" fontWeight="bold" color={headingColor} mb={6}>
				Typing Practice Game
			</Text>
			<Box textAlign="center" pt="10">
				{isActive && <WordToType word={currentWord} userInput={userInput} />}
				<TypingInput value={userInput} onChange={handleInputChange} disabled={!isActive} />
				<Timer isActive={isActive} onTimeUp={onTimeUp} duration={30} />
				{!isActive && (
					<VStack spacing={4}>
						<Button onClick={startGame} disabled={isActive} fontSize={textSize}>
							Start Game
						</Button>
						<Text fontSize={textSize}>Current difficulty: {difficultyLabel()}</Text>
						<Button onClick={() => setWords(easyWords)} disabled={isActive} fontSize={textSize}>
							Easy
						</Button>
						<Button onClick={() => setWords(normalWords)} disabled={isActive} fontSize={textSize}>
							Normal
						</Button>
						<Button onClick={() => setWords(hardWords)} disabled={isActive} fontSize={textSize}>
							Hard
						</Button>
					</VStack>
				)}
			</Box>
		</Container>
	);
}
