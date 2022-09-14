require('dotenv').config();

module.exports = {
    publishers: [
        {
            name: '@electron-forge/publisher-github',
            config: {
              repository: {
                owner: 'uhTeddy',
                name: 'roShadow'
              },
              authToken: process.env.GITHUB_TOKEN,
              prerelease: true
            }
          }
    ],
    makers: [
      {
        name: '@electron-forge/maker-wix',
        config: {
          language: 1033,
          manufacturer: 'roShadow'
        }
      },
    ],
    buildIdentifier: 'com.uhteddy.roshadow'
  }