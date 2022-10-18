module.exports = {
    verbose: true,
    rootDir: "",
    collectCoverage: true,
    coverageDirectory: "/coverage/",
    testPathIgnorePatterns: ["/node_modules/", ".*fixture.js", "/cypress/"],
    coveragePathIgnorePatterns: ["/node_modules/", ".*fixture.js", "/cypress"],
    testEnvironment: "jest-environment-jsdom",
  };

  