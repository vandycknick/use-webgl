module.exports = {
    "roots": [
        "<rootDir>/src/",
        "<rootDir>/test/"
    ],
    "transform": {
        "^.+\\.tsx?$": "ts-jest"
    },
    "testPathIgnorePatterns": ["node_modules", "__mocks__"],
    "testRegex": "(/test/.*|(\\.|/)(test|spec))\\.tsx?$",
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
}
