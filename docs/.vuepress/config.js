module.exports = {
  base: '/ui/',
  title: 'polkadot-js/ui',
  description: 'UI libraries and utilities in-use accross @polkadot projects',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    displayAllHeaders: true,
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'GitHub', link: 'https://github.com/polkadot-js/ui' }
    ],
    sidebar: [
      ['/ui-identicon/', '@polkadot/ui-identicon'],
      ['/ui-keyring/', '@polkadot/ui-keyring'],
      ['/ui-settings/', '@polkadot/ui-settings'],
      ['/ui-util/', '@polkadot/ui-util'],
      '/CONTRIBUTING.md'
    ]
  }
};
