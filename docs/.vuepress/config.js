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
      {
        title: 'Getting started',
        path: '/start/',
        collapsable: false,
        sidebarDepth: 0,
        children: [
          ['start/packages.md', 'Available packages'],
          ['start/keyring.md', 'Keyring'],
          ['start/keyring.accounts.md', 'Keyring accounts'],
          ['start/keyring.derivation.md', 'Account derivation'],
          ['start/keyring.retrieve.md', 'Account retrieval'],
          ['start/keyring.other.md', 'Other addresses'],
          ['start/FAQ.md', 'FAQ']
        ]
      },
      ['/react-identicon/', '@polkadot/react-identicon'],
      ['/react-qr/', '@polkadot/react-qr'],
      ['/reactnative-identicon/', '@polkadot/reactnative-identicon'],
      ['/ui-keyring/', '@polkadot/ui-keyring'],
      ['/ui-settings/', '@polkadot/ui-settings'],
      ['/ui-shared/', '@polkadot/ui-shared'],
      ['/vue-identicon/', '@polkadot/vue-identicon'],
      '/CONTRIBUTING.md'
    ]
  }
};
