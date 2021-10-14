module.exports = {
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        releaseRules: [
          { emoji: 'art', release: 'patch' },
          { emoji: ':art', release: 'patch' },
          { emoji: 'art:', release: 'patch' },
          { emoji: ':art:', release: 'patch' },
          { emoji: 'aaa', release: 'patch' },
          { emoji: '\\:art', release: 'patch' },
          { emoji: 'art\\:', release: 'patch' },
          { emoji: '\\:art\\:', release: 'patch' },
        ],
      },
    ],
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
  ],
  branches: ['main'],
};
