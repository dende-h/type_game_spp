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
	Flex,
	HStack
} from "@chakra-ui/react";
import { magicItems, adjectives, WordList } from "../constant/typingProblems";
import Seo from "../components/Seo";
import { hunterWords } from "@/constant/typingProblemHunterHunter";
import Link from "next/link";
import { ColorSwitchButton } from "@/components/ColorSwitchButton";

const easyWords = magicItems;
const normalWords = adjectives;
const hardWords = hunterWords;

//この関数は、配列をシャッフル（ランダムに並び替え）するためのヘルパー関数です。
//Fisher-Yates（またはKnuth）シャッフルというアルゴリズムを使用している。
//このアルゴリズムは、配列を効率的かつ公平にシャッフルするためのもの。
const shuffleArray = (array: WordList[]) => {
	let currentIndex = array.length;
	let randomIndex;

	// While there remain elements to shuffle...
	while (currentIndex !== 0) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
	}

	return array;
};

export default function Home() {
	const isMobileDevice = (): boolean => {
		if (typeof window === "undefined") return false;

		const userAgent = window.navigator.userAgent.toLowerCase();
		const mobileRegex = /iphone|ipod|ipad|android|blackberry|windows phone|opera mini|silk/i;
		return mobileRegex.test(userAgent);
	};
	const [words, setWords] = useState(easyWords);
	// const [num, setNum] = useState(Math.floor(Math.random() * 80));

	const [userInput, setUserInput] = useState("");
	const [isActive, setIsActive] = useState(false);
	const [score, setScore] = useState(0);
	const router = useRouter();
	const [shuffledQuestions, setShuffledQuestions] = useState<WordList[]>(shuffleArray([...words]));
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

	useEffect(() => {
		if (currentQuestionIndex >= shuffledQuestions.length) {
			setShuffledQuestions(shuffleArray([...words]));
			setCurrentQuestionIndex(0);
		}
	}, [currentQuestionIndex]);

	const Mode = {
		Jap: "japanese",
		Roma: "roma",
		Eng: "english",
		Mania: "mania"
	};
	const [mode, setMode] = useState(Mode.Roma);

	const Genre = {
		EASY: "Magic Items",
		NORMAL: "Adjective",
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
		if (words === easyWords) return "Magic Items";
		if (words === normalWords) return "Adjective";
		if (words === hardWords) return "Hunter×Hunter";
		return "";
	};

	const modeLabel = () => {
		if (mode === Mode.Jap) return "Japanese";
		if (mode === Mode.Roma) return "Roma";
		if (mode === Mode.Eng) return genre === "Hunter×Hunter" ? "Ruby" : "English";
		if (mode === Mode.Mania) return "Mania";
		return "";
	};

	const currentQuestion = shuffledQuestions[currentQuestionIndex];
	useEffect(() => {
		const updatedQuestion = shuffledQuestions[currentQuestionIndex];
		setCurrentWord(
			mode === Mode.Jap ? updatedQuestion.kanji : mode === Mode.Roma ? updatedQuestion.romaji : updatedQuestion.eng
		);
		setJaWord(updatedQuestion.kanji);
	}, [currentQuestionIndex, mode, shuffledQuestions]);

	const [currentWord, setCurrentWord] = useState(currentQuestion.romaji);
	const [jaWord, setJaWord] = useState(currentQuestion.kanji);

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
				setCurrentQuestionIndex((prev) => prev + 1);
				toast({
					title: "Correct!",
					status: "success",
					duration: 1000,
					isClosable: true,
					position: "top"
				});
				if (score !== 0 && score % 5 === 0) {
					incrementTime(5);
					toast({
						title: mode === Mode.Mania ? currentQuestion.kanji : "+5 Seconds Bonus",
						status: "success",
						duration: 1000,
						isClosable: true,
						position: "top"
					});
				}
				// const newNum = Math.floor(Math.random() * words.length);
				// setCurrentWord(
				// 	mode === Mode.Jap ? currentQuestion.kanji : mode === Mode.Roma ? currentQuestion.romaji : currentQuestion.eng
				// );
				// setJaWord(currentQuestion.kanji);
				// setNum(newNum);
			}
		}
	};

	const handleInputChange = (value: string) => {
		if (mode === Mode.Roma) {
			if ([...currentQuestion.romaji][0] !== [...value][0]) {
				return;
			} else {
				if ([...value].length > 1 && [...currentQuestion.romaji][1] !== [...value][1]) {
					return;
				} else {
					if (currentQuestion.validInputs.some((validInput) => validInput.includes(value))) {
						const findIndex = currentQuestion.validInputs.findIndex((validInput) => validInput.includes(value));
						if (currentWord.includes(currentQuestion.validInputs[findIndex])) {
							setUserInput(value);
						} else {
							setCurrentWord(currentQuestion.validInputs[findIndex]);
							setUserInput(value);
						}
					}
				}
			}
		} else if (mode === Mode.Eng || mode === Mode.Mania) {
			if (genre === "Hunter×Hunter") {
				if ([...currentQuestion.eng][0] !== [...value][0]) {
					return;
				} else {
					if ([...value].length > 1 && [...currentQuestion.eng][1] !== [...value][1]) {
						return;
					} else {
						if (currentQuestion.validInputs2.some((validInput) => validInput.includes(value))) {
							const findIndex = currentQuestion.validInputs2.findIndex((validInput) => validInput.includes(value));
							if (currentWord.includes(currentQuestion.validInputs2[findIndex])) {
								setUserInput(value);
							} else {
								setCurrentWord(currentQuestion.validInputs2[findIndex]);
								setUserInput(value);
							}
						}
					}
				}
			} else if (currentQuestion.eng.includes(value)) {
				setUserInput(value);
			}
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
				setCurrentQuestionIndex((prev) => prev + 1);
				toast({
					title: "Correct!",
					status: "success",
					duration: 1000,
					isClosable: true,
					position: "top"
				});
				if (score !== 0 && score % 3 === 0) {
					incrementTime(5);
					toast({
						title: mode === Mode.Mania ? currentQuestion.kanji : "+5 Seconds Bonus",
						status: "success",
						duration: 1000,
						isClosable: true,
						position: "top"
					});
				}
				// const newNum = Math.floor(Math.random() * words.length);
				// setCurrentWord(
				// 	mode === Mode.Jap ? currentQuestion.kanji : mode === Mode.Roma ? currentQuestion.romaji : currentQuestion.eng
				// );
				// setJaWord(currentQuestion.kanji);
				// setNum(newNum);
			}
		}
	};

	const startGame = () => {
		setIsActive(true);
		setScore(0);
		setUserInput("");
		setCurrentWord(
			mode === Mode.Jap ? currentQuestion.kanji : mode === Mode.Roma ? currentQuestion.romaji : currentQuestion.eng
		);
		setJaWord(currentQuestion.kanji);
	};

	const onTimeUp = () => {
		setUserInput("");
		// setNum(0);
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
						<Text as={"h2"} fontWeight="bold">
							<br />
							ジャンル選択
						</Text>
						<Flex direction={flexDirection} justifyContent="space-between" w="100%">
							<Button
								onClick={() => setGenre("Magic Items")}
								w={buttonWidth}
								colorScheme={genre === "Magic Items" ? "teal" : "gray"}
								mb={{ base: 1, md: 0 }}
								mx={{ base: 0, md: 2 }}
							>
								魔道具
							</Button>
							<Button
								onClick={() => setGenre("Adjective")}
								w={buttonWidth}
								colorScheme={genre === "Adjective" ? "teal" : "gray"}
								mb={{ base: 1, md: 0 }}
								mx={{ base: 0, md: 2 }}
							>
								形容詞
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
						<Text as={"h2"} fontWeight="bold">
							<br />
							モード選択
						</Text>
						<Flex direction={flexDirection} justifyContent="space-between" w="100%">
							<Button
								onClick={() => setMode(Mode.Jap)}
								w={{ base: buttonWidth, md: genre === "Hunter×Hunter" ? "115px" : buttonWidth }}
								colorScheme={mode === Mode.Jap ? "teal" : "gray"}
								mb={{ base: 1, md: 0 }}
								mx={{ base: 0, md: 2 }}
							>
								変換入力
							</Button>
							<Button
								onClick={() => setMode(Mode.Roma)}
								w={{ base: buttonWidth, md: genre === "Hunter×Hunter" ? "115px" : buttonWidth }}
								colorScheme={mode === Mode.Roma ? "teal" : "gray"}
								mb={{ base: 1, md: 0 }}
								mx={{ base: 0, md: 2 }}
							>
								ローマ字
							</Button>

							{genre === "Hunter×Hunter" ? (
								<>
									<Button
										onClick={() => setMode(Mode.Eng)}
										w={{ base: buttonWidth, md: genre === "Hunter×Hunter" ? "115px" : buttonWidth }}
										colorScheme={mode === Mode.Eng ? "teal" : "gray"}
										mb={{ base: 1, md: 0 }}
										mx={{ base: 0, md: 2 }}
									>
										ルビ
									</Button>
									<Button
										onClick={() => setMode(Mode.Mania)}
										w={{ base: buttonWidth, md: genre === "Hunter×Hunter" ? "115px" : buttonWidth }}
										colorScheme={mode === Mode.Mania ? "teal" : "gray"}
										mb={{ base: 1, md: 0 }}
										mx={{ base: 0, md: 2 }}
									>
										マニア
									</Button>
								</>
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
						<Text as={"h3"} fontWeight="bold">
							<br />
							Config
						</Text>
						<ColorSwitchButton aria-label={"colorMode switch"} />
					</VStack>
				) : (
					<VStack spacing={8} my={8} h={"50%"}></VStack>
				)}
				<HStack>
					<Text fontSize={"xl"} color={headingColor} mt={6}>
						©2023 dende-h
					</Text>
					<Link href={"https://twitter.com/dendeiriamaka1"} passHref>
						<Text fontSize={"xl"} color={headingColor} mt={6}>
							Twitter
						</Text>
					</Link>
				</HStack>
				<Text fontSize={"xl"} color={headingColor} mb={6}>
					ver.2.0.22
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
