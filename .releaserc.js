module.exports = {
  plugins: [
    // [
    //   '@semantic-release/commit-analyzer',
    //   {
    //     parserOpts: {
    //       noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
    //     },
    //     // headerPattern: /^(:.*?:) (.*)$/,
    //     // releaseRules: [
    //     //   { type: 'art', release: 'patch' },
    //     //   { type: ':art', release: 'patch' },
    //     //   { type: 'art:', release: 'patch' },
    //     //   { type: ':art:', release: 'patch' },
    //     //   { type: 'aaa', release: 'patch' },
    //     //   { type: '\\:art', release: 'patch' },
    //     //   { type: 'art\\:', release: 'patch' },
    //     //   { type: '\\:art\\:', release: 'patch' },
    //     // ],
    //   },
    // ],
    [
      'semantic-release-gitmoji',
      {
        releaseRules: {
          major: [':boom:'],
          minor: [':sparkles:'],
          patch: [':bug:', ':ambulance:', ':lock:', ':art:'],
        },
        // releaseNotes: {
        //   template,
        //   partials: { commitTemplate },
        //   helpers: {
        //     datetime: function (format = 'UTC:yyyy-mm-dd') {
        //       return dateFormat(new Date(), format);
        //     },
        //   },
        //   issueResolution: {
        //     template: '{baseUrl}/{owner}/{repo}/issues/{ref}',
        //     baseUrl: 'https://github.com',
        //     source: 'github.com',
        //   },
        // },
      },
    ],
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
  ],
  branches: ['main'],
};
