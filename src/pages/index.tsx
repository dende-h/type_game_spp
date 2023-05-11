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
import { novelWords, comicAndAnimeWords, hunterWords } from "../constant/typingProblems";

const easyWords = novelWords;
const normalWords = comicAndAnimeWords;
const hardWords = hunterWords;
export default function Home() {
	const [words, setWords] = useState(easyWords);
	const [num, setNum] = useState(0);
	const [currentWord, setCurrentWord] = useState(words[num].romaji);
	const [jaWord, setJaWord] = useState(words[num].kanji);
	const [userInput, setUserInput] = useState("");
	const [isActive, setIsActive] = useState(false);
	const [score, setScore] = useState(0);
	const router = useRouter();
	const duration = 30;
	const [timeLeft, setTimeLeft] = useState(duration);
	const Mode = {
		Jap: "japanese",
		Roma: "roma",
		Eng: "English"
	};
	const [mode, setMode] = useState(Mode.Roma);

	const incrementTime = () => {
		setTimeLeft((prevTime) => prevTime + 1);
	};
	const Difficulty = {
		EASY: "easy",
		NORMAL: "normal",
		HARD: "hard"
	};
	const [difficulty, setDifficulty] = useState(Difficulty.EASY);
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

	const modeLabel = () => {
		if (mode === Mode.Jap) return "Japanese";
		if (mode === Mode.Roma) return "Roma";
		if (mode === Mode.Eng) return "English";
		return "";
	};

	const toast = useToast();

	const handleInputChange = (value: string) => {
		setUserInput(value);
		if (value === currentWord) {
			setScore(score + 1);
			setUserInput("");
			const newNum = Math.floor(Math.random() * words.length);
			setCurrentWord(
				mode === Mode.Jap ? words[newNum].kanji : mode === Mode.Roma ? words[newNum].romaji : words[newNum].eng
			);
			setJaWord(words[newNum].kanji);
			setNum(newNum);

			incrementTime();
			toast({
				title: "Correct! +1 Seconds",
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
		setCurrentWord(mode === Mode.Jap ? words[num].kanji : mode === Mode.Roma ? words[num].romaji : words[num].eng);
		setJaWord(words[num].kanji);
	};

	const onTimeUp = () => {
		setUserInput("");
		setNum(0);
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
				<Timer
					isActive={isActive}
					onTimeUp={onTimeUp}
					duration={duration}
					timeLeft={timeLeft}
					setTimeLeft={setTimeLeft}
				/>
				{isActive && <WordToType word={currentWord} jaWord={jaWord} userInput={userInput} mode={mode} />}
				{isActive && (
					<TypingInput value={userInput} onChange={handleInputChange} disabled={!isActive} inputRef={inputRef} />
				)}
			</Box>

			{!isActive ? (
				<VStack spacing={8} my={8} h={"50%"}>
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
					<Flex direction={flexDirection} justifyContent="space-between" w="100%">
						<Button
							onClick={() => setMode(Mode.Jap)}
							w={buttonWidth}
							colorScheme={mode === Mode.Jap ? "teal" : "gray"}
							mb={{ base: 4, md: 0 }}
							mx={{ base: 0, md: 2 }}
						>
							JapaneseMode
						</Button>
						<Button
							onClick={() => setMode(Mode.Roma)}
							w={buttonWidth}
							colorScheme={difficulty === Mode.Roma ? "teal" : "gray"}
							mb={{ base: 4, md: 0 }}
							mx={{ base: 0, md: 2 }}
						>
							RomaMode
						</Button>
						<Button
							onClick={() => setMode(Mode.Eng)}
							w={buttonWidth}
							colorScheme={difficulty === Mode.Eng ? "teal" : "gray"}
							mb={{ base: 4, md: 0 }}
							mx={{ base: 0, md: 2 }}
						>
							EnglishMode
						</Button>
					</Flex>
				</VStack>
			) : (
				<VStack spacing={8} my={8} h={"50%"}></VStack>
			)}
		</Container>
	);
}
