/* eslint-disable no-irregular-whitespace */
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
import Seo from "../components/Seo";

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
	const [num, setNum] = useState(Math.floor(Math.random() * 10));
	const [currentWord, setCurrentWord] = useState(words[num].romaji);
	const [jaWord, setJaWord] = useState(words[num].kanji);
	const [userInput, setUserInput] = useState("");
	const [isActive, setIsActive] = useState(false);
	const [score, setScore] = useState(0);
	const router = useRouter();

	const Mode = {
		Jap: "japanese",
		Roma: "roma",
		Eng: "english",
		Mania: "mania"
	};
	const [mode, setMode] = useState(Mode.Roma);

	const Genre = {
		EASY: "Novel Words",
		NORMAL: "ComicAndAnime",
		HARD: "Hunter×Hunter"
	};
	const [genre, setGenre] = useState(Genre.EASY);
	useEffect(() => {
		setMode(Mode.Roma);
		setDuration(durationInitial);
		if (genre === Genre.EASY) {
			setWords(easyWords);
		} else if (genre === Genre.NORMAL) {
			setWords(normalWords);
		} else if (genre === Genre.HARD) {
			setWords(hardWords);
		}
	}, [genre]);

	const genreLabel = () => {
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

	const durationInitial = genre === Genre.EASY ? 60 : mode === Mode.Mania ? 120 : 90;
	const [duration, setDuration] = useState(durationInitial);
	const [timeLeft, setTimeLeft] = useState(duration);

	const incrementTime = (addTime: number) => {
		setDuration((prevDuration) => prevDuration + addTime);
	};

	const toast = useToast();

	const userInputRef = useRef(userInput);
	useEffect(() => {
		userInputRef.current = userInput;
	}, [userInput]);

	const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
		
		if (isMobileDevice() || mode === Mode.Jap) {
			if (event.key === "Enter" && userInputRef.current === currentWord) {
				setScore(score + 1);
				setUserInput("");
				toast({
					title: mode === Mode.Mania ? words[num].kanji : "Correct!",
					status: "success",
					duration: mode === Mode.Mania ? 3000 : 1000,
					isClosable: true,
					position: "top"
				});
				if (score !== 0 && score % 5 === 0) {
					incrementTime(5);
					toast({
						title: mode === Mode.Mania ? words[num].kanji : "+5 Seconds Bonus",
						status: "success",
						duration: 1000,
						isClosable: true,
						position: "top"
					});
				}
				const newNum = Math.floor(Math.random() * words.length);
				setCurrentWord(
					mode === Mode.Jap
						? words[newNum].kanji
						: mode === Mode.Roma || Mode.Mania
						? words[newNum].romaji
						: words[newNum].eng
				);
				setJaWord(mode === Mode.Mania ? words[newNum].eng : words[newNum].kanji);
				setNum(newNum);
			}
		}
	};

	const handleInputChange = (value: string) => {
		if (mode === Mode.Roma || Mode.Eng) {
			if (currentWord.includes(value)) {
				
				setUserInput(value)
			};
		} else {
			setUserInput(value);
		}

		if (isMobileDevice() || mode === Mode.Jap) {
			// なにもしない
		} else {
			// PCの場合、エンターキーを押さずに判定
			if (value === currentWord) {
				setScore(score + 1);
				setUserInput("");
				toast({
					title: mode === Mode.Mania ? words[num].kanji : "Correct!",
					status: "success",
					duration: mode === Mode.Mania ? 3000 : 1000,
					isClosable: true,
					position: "top"
				});
				if (score !== 0 && score % 5 === 0) {
					incrementTime(5);
					toast({
						title: mode === Mode.Mania ? words[num].kanji : "+5 Seconds Bonus",
						status: "success",
						duration: 1000,
						isClosable: true,
						position: "top"
					});
				}
				const newNum = Math.floor(Math.random() * words.length);
				setCurrentWord(
					mode === Mode.Jap
						? words[newNum].kanji
						: mode === Mode.Roma || Mode.Mania
						? words[newNum].romaji
						: words[newNum].eng
				);
				setJaWord(mode === Mode.Mania ? words[newNum].eng : words[newNum].kanji);
				setNum(newNum);
			}
		}
	};

	const startGame = () => {
		setIsActive(true);
		setScore(0);
		setUserInput("");
		setCurrentWord(
			mode === Mode.Jap ? words[num].kanji : mode === Mode.Roma || Mode.Mania ? words[num].romaji : words[num].eng
		);
		setJaWord(mode === Mode.Mania ? words[num].eng : words[num].kanji);
	};

	const onTimeUp = () => {
		setUserInput("");
		setNum(0);
		setTimeout(() => {
			router.push({ pathname: "/result", query: { score, mode, genre } });
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
		<>
			<Seo
				pageDescription={null}
				pageTitle={null}
				pagePath={"https://type-game-spp.vercel.app/"}
				pageImg={null}
				pageImgWidth={1200}
				pageImgHeight={600}
			/>
			<Container
				minHeight="100vh"
				display="flex"
				flexDirection="column"
				justifyContent="center"
				alignItems="center"
				backgroundColor={bgColor}
			>
				<Text as={"h1"} fontSize={{ base: "lg", md: "2xl" }} fontWeight="bold" color={headingColor} mb={6}>
					恐ろしく速い“Typing”
					<br />
					　オレでなきゃ見逃しちゃうねゲーム
				</Text>
				<Text fontSize={textSize} fontWeight="bold">
					Genre : {genreLabel()}
					<br />
					Mode : {modeLabel()}
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
					<VStack spacing={{ base: 0, md: 4 }} my={{ base: 0, md: 4 }} minH={"50%"}>
						<Button
							onClick={startGameAndFocusInput}
							disabled={isActive}
							fontSize={textSize}
							w={buttonWidth}
							colorScheme="blue"
						>
							Start Game
						</Button>
						<Text as={"h4"}>
							<br />
							Genre
						</Text>
						<Flex direction={flexDirection} justifyContent="space-between" w="100%">
							<Button
								onClick={() => setGenre("Novel Words")}
								w={buttonWidth}
								colorScheme={genre === "Novel Words" ? "teal" : "gray"}
								mb={{ base: 1, md: 0 }}
								mx={{ base: 0, md: 2 }}
							>
								小説ワード
							</Button>
							<Button
								onClick={() => setGenre("ComicAndAnime")}
								w={buttonWidth}
								colorScheme={genre === "ComicAndAnime" ? "teal" : "gray"}
								mb={{ base: 1, md: 0 }}
								mx={{ base: 0, md: 2 }}
							>
								漫画&アニメ
							</Button>
							<Button
								onClick={() => setGenre("Hunter×Hunter")}
								w={buttonWidth}
								colorScheme={genre === "Hunter×Hunter" ? "teal" : "gray"}
								mb={{ base: 1, md: 0 }}
								mx={{ base: 0, md: 2 }}
							>
								Hunter×Hunter
							</Button>
						</Flex>
						<Text as={"h4"}>
							<br />
							Mode
						</Text>
						<Flex direction={flexDirection} justifyContent="space-between" w="100%">
							<Button
								onClick={() => setMode(Mode.Jap)}
								w={buttonWidth}
								colorScheme={mode === Mode.Jap ? "teal" : "gray"}
								mb={{ base: 1, md: 0 }}
								mx={{ base: 0, md: 2 }}
							>
								変換入力
							</Button>
							<Button
								onClick={() => setMode(Mode.Roma)}
								w={buttonWidth}
								colorScheme={mode === Mode.Roma ? "teal" : "gray"}
								mb={{ base: 1, md: 0 }}
								mx={{ base: 0, md: 2 }}
							>
								ローマ字
							</Button>

							{genre === "Hunter×Hunter" ? (
								<Button
									onClick={() => setMode(Mode.Mania)}
									w={buttonWidth}
									colorScheme={mode === Mode.Mania ? "teal" : "gray"}
									mb={{ base: 1, md: 0 }}
									mx={{ base: 0, md: 2 }}
								>
									マニア
								</Button>
							) : (
								<Button
									onClick={() => setMode(Mode.Eng)}
									w={buttonWidth}
									colorScheme={mode === Mode.Eng ? "teal" : "gray"}
									mb={{ base: 1, md: 0 }}
									mx={{ base: 0, md: 2 }}
								>
									English
								</Button>
							)}
						</Flex>
					</VStack>
				) : (
					<VStack spacing={8} my={8} h={"50%"}></VStack>
				)}
				<Text fontSize={"xl"} color={headingColor} mt={6}>
					©2023 dende-h
				</Text>
				<Text fontSize={"xl"} color={headingColor} mb={6}>
					ver.1.2.4
				</Text>
			</Container>
		</>
	);
}
export const getStaticProps = async () => {
	return {
		props: {
			data: "This is static data"
		}
	};
};
