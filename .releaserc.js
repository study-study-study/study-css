module.exports = {
  plugins: [
    // '@semantic-release/commit-analyzer',
    // '@semantic-release/release-notes-generator',
    [
      'semantic-release-gitmoji',
      {
        releaseRules: {
          major: [':boom:'],
          minor: [':sparkles:'],
          patch: [':bug:', ':ambulance:', ':lock:'],
        },
      },
    ],
    '@semantic-release/github',
  ],
  branches: ['main'],
};
