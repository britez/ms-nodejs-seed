module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ["./jestSetup.ts"],
  //testPathIgnorePatterns: ["/node_modules/", "/.stryker-tmp/"]
};
