(async function() {
  const semanticRelease = await import('semantic-release');

  const result = await semanticRelease.default();

  if (result) {
    const { lastRelease, commits, nextRelease, releases } = result;

    console.log(
      `Published ${nextRelease.type} release version ${nextRelease.version} containing ${commits.length} commits.`,
    );

    if (lastRelease.version) {
      console.log(`The last release was "${lastRelease.version}".`);
    }

    for (const release of releases) {
      console.log(`The release was published with plugin "${release.pluginName}".`);
    }
  } else {
    console.log('No release published.');
  }
})();
