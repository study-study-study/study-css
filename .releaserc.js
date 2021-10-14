module.exports = {
  plugins: [
    // '@semantic-release/commit-analyzer',
    [
      '@semantic-release/commit-analyzer',
      {
        config: 'conventional-changelog-gitmoji-config',
      },
    ],
    // '@semantic-release/release-notes-generator',
    [
      '@semantic-release/release-notes-generator',
      {
        config: 'conventional-changelog-gitmoji-config',
      },
    ],
    '@semantic-release/github',
  ],
  branches: ['main'],
};
