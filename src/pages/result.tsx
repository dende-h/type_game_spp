// pages/result.tsx
import { useRouter } from "next/router";
import { Box, Button, Container, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import Seo from "../components/Seo";

export default function Result() {
	const router = useRouter();
	const score = router.query.score;
	const numScore: number = typeof score === "string" ? Number(score) : 0;
	const mode = router.query.mode;
	const genre = router.query.genre;

	const bgColor = useColorModeValue("gray.50", "gray.900");
	const headingColor = useColorModeValue("gray.700", "gray.200");

	return (
		<>
			<Seo
				pageDescription={"今回のリザルトスコア"}
				pageTitle={"匂う...匂うぞ"}
				pagePath={"https://type-game-spp.vercel.app/result"}
				pageImg={null}
				pageImgWidth={1200}
				pageImgHeight={600}
			/>
			<Container
				height="100vh"
				display="flex"
				flexDirection="column"
				justifyContent="center"
				alignItems="center"
				backgroundColor={bgColor}
			>
				<Text fontSize="3xl" fontWeight="bold" color={headingColor} mb={6}>
					{genre === "Hunter×Hunter"
						? numScore === 0
							? "道草を楽しめ、大いになほしいものより大切なものがきっとそっちにころがってる" //0点
							: numScore <= 10
							? "君の敗因は容量（メモリ）の無駄使い" //10点以下
							: numScore <= 20
							? "甘かった、No2くらいならすぐとか思ってたけど、はるか格下だ・・・絶望的なくらい" //20点以下
							: numScore <= 30
							? "まるでゴッコじゃの・・・・" //30点以下
							: numScore <= 40
							? "モタリケ君のちょっといいトコ見て見たいー♪" //40点以下
							: numScore <= 50
							? "まるあなたの上達の早さは並じゃない。10万人に一人の才能です。ただあの2人が1000万人に一人の才能をもっていたというだけです" //50点以下
							: numScore <= 60
							? "そんな目でみつめるなよ。興奮しちゃうじゃないか。" //60点以下
							: numScore <= 70
							? "レベルが・・・違い過ぎるっす・・・・" //70点以下
							: numScore <= 80
							? "天賦の才を持つ者が更にその才を全て投げ出してようやく得られる程の力！！" //80点以下
							: numScore <= 90
							? "おそろしい…でもそれ以上に哀しいコ…日常が地獄だったはず…今こうして笑顔でいられるのが奇跡的なほどの…" //90点以下
							: numScore === 95
							? "95点、なんだイルミか"
							: numScore <= 100
							? "挑戦を止めた時が人生の終わる時" //100点以下
							: "天賦の才を持つ者が更にその才を全て投げ出してようやく得られる程の力！！" //101点以上
						: "Thanks for playing!"}
				</Text>
				<Box textAlign="center">
					<Text fontSize="2xl">Genres Played : {genre}</Text>
					<Text fontSize="2xl">Modes Played : {mode}</Text>
					<Text fontSize="3xl" mb={4}>
						Score: {score}
					</Text>
					<Button colorScheme="blue" onClick={() => router.push("/")}>
						Retry
					</Button>
				</Box>
				<Text fontSize={"xl"} color={headingColor} my={6}>
					©2023 dende-h
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
