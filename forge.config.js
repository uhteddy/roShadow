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
            name: '@electron-forge/maker-squirrel',
            platforms: ["win32"],
            config: {
                name: "roShadow",
            }
        }
    ],
    buildIdentifier: 'com.uhteddy.roshadow'
  }