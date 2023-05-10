module.exports = {
	testEnvironment: 'jsdom',
	moduleNameMapper: {
		'\\.(css|less|scss|sss|styl)$': 'identity-obj-proxy'
	},
	setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
	testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/']
};
