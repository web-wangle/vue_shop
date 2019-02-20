module.exports = {
  presets: [
    '@vue/app', ['env', { 'modules': false }]
  ],
  'plugins': [['component',
    {
      'libraryName': 'mint-ui',
      'style': true
    }
  ]]
}
