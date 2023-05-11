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
	const isMobileDevice = (): boolean => {
		if (typeof window === "undefined") return false;

		const userAgent = window.navigator.userAgent.toLowerCase();
		const mobileRegex = /iphone|ipod|ipad|android|blackberry|windows phone|opera mini|silk/i;
		return mobileRegex.test(userAgent);
	};
	const [words, setWords] = useState(easyWords);
	const [num, setNum] = useState(0);
	const [currentWord, setCurrentWord] = useState(words[num].romaji);
	const [jaWord, setJaWord] = useState(words[num].kanji);
	const [userInput, setUserInput] = useState("");
	const [isActive, setIsActive] = useState(false);
	const [score, setScore] = useState(0);
	const router = useRouter();
	const duration = 60;
	const [timeLeft, setTimeLeft] = useState(duration);
	const Mode = {
		Jap: "japanese",
		Roma: "roma",
		Eng: "english",
		Mania: "mania"
	};
	const [mode, setMode] = useState(Mode.Roma);

	const incrementTime = () => {
		setTimeLeft((prevTime) => prevTime + 5);
	};
	const Difficulty = {
		EASY: "easy",
		NORMAL: "normal",
		HARD: "hard"
	};
	const [difficulty, setDifficulty] = useState(Difficulty.EASY);
	useEffect(() => {
		setMode(Mode.Roma);
		if (difficulty === Difficulty.EASY) {
			setWords(easyWords);
		} else if (difficulty === Difficulty.NORMAL) {
			setWords(normalWords);
		} else if (difficulty === Difficulty.HARD) {
			setWords(hardWords);
		}
	}, [difficulty]);

	const difficultyLabel = () => {
		if (words === easyWords) return "Novel Words";
		if (words === normalWords) return "Comic and Anime";
		if (words === hardWords) return "Hunter×Hunter";
		return "";
	};

	const modeLabel = () => {
		if (mode === Mode.Jap) return "Japanese";
		if (mode === Mode.Roma) return "Roma";
		if (mode === Mode.Eng) return "English";
		if (mode === Mode.Mania) return "Mania";
		return "";
	};

	const toast = useToast();

	const userInputRef = useRef(userInput);
	useEffect(() => {
		userInputRef.current = userInput;
	}, [userInput]);

	const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (isMobileDevice() || mode === Mode.Jap || mode === Mode.Mania) {
			if (event.key === "Enter" && userInputRef.current === currentWord) {
				setScore(score + 1);
				setUserInput("");
				const newNum = Math.floor(Math.random() * words.length);
				setCurrentWord(
					mode === Mode.Jap
						? words[newNum].kanji
						: mode === Mode.Roma
						? words[newNum].romaji
						: mode === Mode.Mania
						? words[newNum].kanji
						: words[newNum].eng
				);
				setJaWord(words[newNum].kanji);
				setNum(newNum);

				incrementTime();
				toast({
					title: "Correct! +5 Seconds",
					status: "success",
					duration: 1000,
					isClosable: true,
					position: "top"
				});
			}
		}
	};

	const handleInputChange = (value: string) => {
		setUserInput(value);
		if (isMobileDevice() || mode === Mode.Jap || mode === Mode.Mania) {
			// なにもしない
		} else {
			// PCの場合、エンターキーを押さずに判定
			if (value === currentWord) {
				setScore(score + 1);
				setUserInput("");
				const newNum = Math.floor(Math.random() * words.length);
				setCurrentWord(
					mode === Mode.Jap
						? words[newNum].kanji
						: mode === Mode.Roma
						? words[newNum].romaji
						: mode === Mode.Mania
						? words[newNum].kanji
						: words[newNum].eng
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
		}
	};

	const startGame = () => {
		setIsActive(true);
		setScore(0);
		setUserInput("");
		setCurrentWord(
			mode === Mode.Jap
				? words[num].kanji
				: mode === Mode.Roma
				? words[num].romaji
				: mode === Mode.Mania
				? words[num].kanji
				: words[num].eng
		);
		setJaWord(mode === Mode.Mania ? words[num].eng : words[num].kanji);
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
				Genre: {difficultyLabel()}
				<br />
				Mode:{modeLabel()}
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
					<TypingInput
						value={userInput}
						onChange={handleInputChange}
						disabled={!isActive}
						inputRef={inputRef}
						onKeyPress={handleKeyPress}
					/>
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
							mb={{ base: 2, md: 0 }}
							mx={{ base: 0, md: 2 }}
						>
							Easy
						</Button>
						<Button
							onClick={() => setDifficulty("normal")}
							w={buttonWidth}
							colorScheme={difficulty === "normal" ? "teal" : "gray"}
							mb={{ base: 2, md: 0 }}
							mx={{ base: 0, md: 2 }}
						>
							Normal
						</Button>
						<Button
							onClick={() => setDifficulty("hard")}
							w={buttonWidth}
							colorScheme={difficulty === "hard" ? "teal" : "gray"}
							mb={{ base: 2, md: 0 }}
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
							mb={{ base: 2, md: 0 }}
							mx={{ base: 0, md: 2 }}
						>
							JapaneseMode
						</Button>
						<Button
							onClick={() => setMode(Mode.Roma)}
							w={buttonWidth}
							colorScheme={mode === Mode.Roma ? "teal" : "gray"}
							mb={{ base: 2, md: 0 }}
							mx={{ base: 0, md: 2 }}
						>
							RomaMode
						</Button>

						{difficulty === "hard" ? (
							<Button
								onClick={() => setMode(Mode.Mania)}
								w={buttonWidth}
								colorScheme={mode === Mode.Mania ? "teal" : "gray"}
								mb={{ base: 2, md: 0 }}
								mx={{ base: 0, md: 2 }}
							>
								ManiaMode
							</Button>
						) : (
							<Button
								onClick={() => setMode(Mode.Eng)}
								w={buttonWidth}
								colorScheme={mode === Mode.Eng ? "teal" : "gray"}
								mb={{ base: 2, md: 0 }}
								mx={{ base: 0, md: 2 }}
							>
								EnglishMode
							</Button>
						)}
					</Flex>
				</VStack>
			) : (
				<VStack spacing={8} my={8} h={"50%"}></VStack>
			)}
			<Text fontSize={"xl"} color={headingColor} my={6}>
				©2023 dende-h
			</Text>
		</Container>
	);
}
