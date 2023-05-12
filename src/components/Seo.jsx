/* eslint-disable indent */
/* eslint-disable react/prop-types */
/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-tabs */
import Head from "next/head";
import React from "react";

const Seo = ({ pageTitle, pageDescription, pagePath, pageImg, pageImgWidth, pageImgHeight }) => {
	const defaultTitle = "恐ろしく速いタイピング";
	const defaultDescription = "恐ろしく速いタイピングを習得して彼をビックリさせましょう";
	const defaultImageUrl = "/typinggame";

	const title = pageTitle ? `${pageTitle} | ${defaultTitle}` : defaultTitle;
	const description = pageDescription || defaultDescription;
	const url = pagePath;
	const imgUrl = pageImg ? `${pageImg}` : defaultImageUrl;
	const imgWidth = pageImgWidth || 1280;
	const imgHeight = pageImgHeight || 640;

	return (
		<Head>
			<title>{title}</title>
			<meta name="viewport" content="width=device-width,initial-scale=1.0" />
			<meta name="description" content={description} />
			<meta name="twitter:card" content="summary_large_image" />
			<meta property="og:url" content={url} />
			<meta property="og:title" content={title} />
			<meta property="og:site_name" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:type" content="website" />
			<meta property="og:image" content={imgUrl} />
			<meta property="og:image:width" content={String(imgWidth)} />
			<meta property="og:image:height" content={String(imgHeight)} />
			<meta name="twitter:title" content={title} />
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link rel="canonical" href={url} />
			<link rel="icon" href="/favicon.ico" />
			<link rel="icon" type="image/png" sizes="32x32" href="/assassin32.png" />
			<link rel="apple-touch-icon" sizes="180x180" href="/assassin180.png" />
			<link rel="manifest" href="/manifest.json" />
			<meta name="google-site-verification" content="26u2b3-4uum3ZXDKrS6jWfPzCaWa9I8dPyp5TD2ekrE" />
		</Head>
	);
};

export default Seo;
