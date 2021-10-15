module.exports = {
  // plugins: [
  //   [
  //     'semantic-release-gitmoji',
  //     {
  //       releaseRules: {
  //         major: [':boom:'],
  //         minor: [':sparkles:'],
  //         patch: [':bug:', ':ambulance:', ':lock:'],
  //       },
  //     },
  //   ],
  //   '@semantic-release/github',
  // ],
  extends: ['semantic-release-config-gitmoji'],
  branches: ['main'],
};
