module.exports = {
  extends: 'semantic-release-monorepo',
  dryRun: true,
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'angular',
        releaseRules: [
          { type: 'feat', release: 'minor' },
          { type: 'fix', release: 'patch' },
          { type: 'perf', release: 'patch' },
          { type: 'refactor', release: 'patch' },
          { type: 'style', release: 'patch' },
          { scope: 'no-release', release: false },
        ],
      },
    ],
    `${__dirname}/scripts/semantic-release-plugin.js`,
  ],
  preset: 'angular',
};
