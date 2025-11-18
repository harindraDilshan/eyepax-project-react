/** @type {import("jest").Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom', // corrected
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // point to your setup file
  moduleNameMapper: {
    '\\.(css|scss|sass)$': 'identity-obj-proxy',
  },
};
