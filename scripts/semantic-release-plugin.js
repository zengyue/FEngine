/**
 * Called by semantic-release during the verification step
 * @param {*} pluginConfig The semantic-release plugin config
 * @param {*} context The context provided by semantic-release
 */
async function verifyConditions(pluginConfig, context) {}

async function publish(pluginConfig, context) {
  const { nextRelease } = context;
  if (!nextRelease) return;
  // nextRelease: {
  //   type: 'patch',
  //   channel: null,
  //   gitHead: '8a804de5bbac12d75a206b0a9358b70d40bb3338',
  //   version: '1.0.8',
  //   gitTag: '@suoqiu/f-engine@1.0.8',
  //   name: '@suoqiu/f-engine@1.0.8',
  //   notes: ''
  // },
  const { type, version, name } = nextRelease;

  console.log(nextRelease);
  console.log('publish', pluginConfig, context);
}

module.exports = { verifyConditions, publish };
