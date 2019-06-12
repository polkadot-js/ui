module.exports = {
  base: '/ui/',
  title: 'polkadot-js/ui',
  description: 'UI utilities, libraries and React components in use across @polkadot projects',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    displayAllHeaders: true,
    nav: [
      { text: 'Polkadot/Substrate Apps', link: 'https://polkadot.js.org/apps/' },
      { text: 'Project family', link: 'https://polkadot.js.org/' },
      {
        text: 'Documentation',
        items: [
          { text: 'API Reference', link: 'https://polkadot.js.org/api/' },
          { text: 'Utility Reference', link: 'https://polkadot.js.org/common/' },
          { text: 'UI Libs Reference (this)', link: 'https://polkadot.js.org/ui/' },
        ]
      },
      { text: 'GitHub', link: 'https://github.com/polkadot-js/ui' }
    ],
    search: false,
    sidebar: [
      ['/ui-identicon/', '@polkadot/ui-identicon'],
      ['/ui-keyring/', '@polkadot/ui-keyring'],
      ['/ui-settings/', '@polkadot/ui-settings'],
      '/CONTRIBUTING.md'
    ]
  }
};
