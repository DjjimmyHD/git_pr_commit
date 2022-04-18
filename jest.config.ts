import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  rootDir: "__tests__",
  preset: "ts-jest",
  verbose: true,
  testPathIgnorePatterns: ["node_modules"],
  resetModules: true,
  globals: {
    "ts-jest": {
      useESM: true,
    },
  },
  testEnvironment: "node"
};

export default config;
