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
              authToken: PROCCESS.ENV.GITHUB_TOKEN,
              prerelease: true
            }
          }
    ]
  }