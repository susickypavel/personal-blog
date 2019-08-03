module.exports = {
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testPathIgnorePatterns: ["/node_modules/", ".cache"],
  moduleNameMapper: {
    "@components(.*)$": "<rootDir>/src/components$1",
    "@generated(.*)$": "<rootDir>/src/generated$1",
    "@css(.*)$": "<rootDir>/src/css$1",
    "@utils(.*)$": "<rootDir>/src/utils$1"
  },
  globals: {
    __PATH_PREFIX__: ``
  },
  setupFiles: ["<rootDir>/test/loadershim.ts"]
}
