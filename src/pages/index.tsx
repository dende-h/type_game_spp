// pages/index.tsx
import React, { useEffect, useRef, useState } from "react";
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
	useToast,
	FlexProps,
	Flex
} from "@chakra-ui/react";
import { fantasyWords, sfWords, mysteryWords } from "../constant/typingProblems";

const easyWords = fantasyWords;
const normalWords = mysteryWords;
const hardWords = sfWords;
export default function Home() {
	const [words, setWords] = useState(normalWords);
	const [num, setNum] = useState(Math.floor(Math.random() * words.length));
	const [currentWord, setCurrentWord] = useState(words[num].romaji);
	const [jaWord, setJaWord] = useState(words[num].kanji);
	const [userInput, setUserInput] = useState("");
	const [isActive, setIsActive] = useState(false);
	const [score, setScore] = useState(0);
	const router = useRouter();
	const Difficulty = {
		EASY: "easy",
		NORMAL: "normal",
		HARD: "hard"
	};
	const [difficulty, setDifficulty] = useState(Difficulty.NORMAL);
	useEffect(() => {
		if (difficulty === Difficulty.EASY) {
			setWords(easyWords);
		} else if (difficulty === Difficulty.NORMAL) {
			setWords(normalWords);
		} else if (difficulty === Difficulty.HARD) {
			setWords(hardWords);
		}
	}, [difficulty]);

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
			const newNum = Math.floor(Math.random() * words.length);
			setCurrentWord(words[newNum].romaji);
			setJaWord(words[newNum].kanji);
			setNum(newNum);

			toast({
				title: "Correct!",
				status: "success",
				duration: 1000,
				isClosable: true,
				position: "top"
			});
		}
	};

	const startGame = () => {
		setIsActive(true);
		setScore(0);
		setUserInput("");
		setCurrentWord(words[num].romaji);
		setJaWord(words[num].kanji);
	};

	const onTimeUp = () => {
		setIsActive(false);
		setUserInput("");
		setTimeout(() => {
			router.push({ pathname: "/result", query: { score } });
		}, 2000);
	};

	const inputRef = useRef<HTMLInputElement>(null);
	const startGameAndFocusInput = () => {
		startGame();
		inputRef.current?.focus();
	};

	const bgColor = useColorModeValue("gray.50", "gray.900");
	const headingColor = useColorModeValue("gray.700", "gray.200");
	const textSize = useBreakpointValue({ base: "sm", md: "md", lg: "lg" });
	const buttonWidth = "150px";

	const flexDirection = useBreakpointValue<FlexProps["flexDirection"]>({ base: "column", md: "row" });

	return (
		<Container
			height="100vh"
			display="flex"
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
			backgroundColor={bgColor}
		>
			<Text fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold" color={headingColor} mb={6}>
				Typing Practice Game
			</Text>
			<Text fontSize={textSize} fontWeight="bold">
				Difficulty: {difficultyLabel()}
			</Text>
			<Box textAlign="center" pt="10">
				<Timer isActive={isActive} onTimeUp={onTimeUp} duration={30} />
				{isActive && <WordToType word={currentWord} jaWord={jaWord} userInput={userInput} />}
				<TypingInput value={userInput} onChange={handleInputChange} disabled={!isActive} inputRef={inputRef} />
			</Box>

			{!isActive && (
				<VStack spacing={8} my={8}>
					<Button
						onClick={startGameAndFocusInput}
						disabled={isActive}
						fontSize={textSize}
						w={buttonWidth}
						colorScheme="blue"
					>
						Start Game
					</Button>
					<Flex direction={flexDirection} justifyContent="space-between" w="100%">
						<Button
							onClick={() => setDifficulty("easy")}
							w={buttonWidth}
							colorScheme={difficulty === "easy" ? "teal" : "gray"}
							mb={{ base: 4, md: 0 }}
							mx={{ base: 0, md: 2 }}
						>
							Easy
						</Button>
						<Button
							onClick={() => setDifficulty("normal")}
							w={buttonWidth}
							colorScheme={difficulty === "normal" ? "teal" : "gray"}
							mb={{ base: 4, md: 0 }}
							mx={{ base: 0, md: 2 }}
						>
							Normal
						</Button>
						<Button
							onClick={() => setDifficulty("hard")}
							w={buttonWidth}
							colorScheme={difficulty === "hard" ? "teal" : "gray"}
							mb={{ base: 4, md: 0 }}
							mx={{ base: 0, md: 2 }}
						>
							Hard
						</Button>
					</Flex>
				</VStack>
			)}
		</Container>
	);
}
