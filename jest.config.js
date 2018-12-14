const config = require('@polkadot/dev-react/config/jest');

module.exports = Object.assign({}, config, {
  moduleNameMapper: {
    '@polkadot/ui-(assets|identicon|keyring|settings)(.*)$': '<rootDir>/packages/ui-$1/src/$2',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'empty/object',
    '\\.(css|less)$': 'empty/object'
  }
});
