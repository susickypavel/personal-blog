module.exports = {
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testPathIgnorePatterns: ["/node_modules/", ".cache"],
  setupFilesAfterEnv: ["@testing-library/react/cleanup-after-each"],
  moduleNameMapper: {
    "@components(.*)$": "<rootDir>/src/components$1",
    "@generated(.*)$": "<rootDir>/src/generated$1",
    "@css(.*)$": "<rootDir>/src/css$1",
    "@utils(.*)$": "<rootDir>/src/utils$1",
    "@services(.*)$": "<rootDir>/src/services$1"
  },
  globals: {
    __PATH_PREFIX__: ``
  },
  setupFiles: ["<rootDir>/test/loadershim.ts"]
}
