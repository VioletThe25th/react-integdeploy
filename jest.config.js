module.exports = {
    setupFiles: ['./src/.jest/setEnvVars.js'],
    collectCoverage: true, 
    coverageDirectory: "coverage",
    coverageReporters: ["json", "lcov", "text", "clover"],
    testEnvironment: "node",
};