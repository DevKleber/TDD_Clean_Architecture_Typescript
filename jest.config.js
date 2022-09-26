module.exports = {
	collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
	coverageDirectory: "coverage",
	coverageProvider: "babel",
	roots: ["<rootDir>/src", "<rootDir>/tests"],
	testEnvironment: "jest-environment-node",
	transform: {
		"\\.ts$": "ts-jest",
	},
};
