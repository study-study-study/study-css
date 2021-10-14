module.exports = {
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        releaseRules: [
          { type: 'art', release: 'patch' },
          { type: ':art', release: 'patch' },
          { type: 'art:', release: 'patch' },
          { type: ':art:', release: 'patch' },
          { type: 'aaa', release: 'patch' },
        ],
      },
    ],
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
  ],
  branches: ['main'],
};
