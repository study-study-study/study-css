module.exports = {
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        headerPattern: /^(:.*?:) (.*)$/,
        headerCorrespondence: ['emoji', 'shortDesc'],
        // headerPattern: /^(:.*?:) (.*)$/,
        // releaseRules: [
        //   { type: 'art', release: 'patch' },
        //   { type: ':art', release: 'patch' },
        //   { type: 'art:', release: 'patch' },
        //   { type: ':art:', release: 'patch' },
        //   { type: 'aaa', release: 'patch' },
        //   { type: '\\:art', release: 'patch' },
        //   { type: 'art\\:', release: 'patch' },
        //   { type: '\\:art\\:', release: 'patch' },
        // ],
      },
    ],
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
  ],
  branches: ['main'],
};
