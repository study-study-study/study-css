module.exports = {
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        parserOpts: {
          headerPattern: '^:(\\w+): \\s(.*)$',
          headerCorrespondence: ['type', 'subject'],
        },
        releaseRules: [
          { type: 'art', release: 'patch' },
          { type: ':art', release: 'patch' },
          { type: 'art:', release: 'patch' },
          { type: ':art:', release: 'patch' },
          { type: 'aaa', release: 'patch' },

          { type: '\\:art', release: 'patch' },
          { type: 'art\\:', release: 'patch' },
          { type: '\\:art\\:', release: 'patch' },
        ],
      },
    ],
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
  ],
  branches: ['main'],
};
