const commonConfig = require('../common/config');

const partialPath = '/';

module.exports = {
    entry: {
        shell: commonConfig.commonEntry + partialPath + '/scripts/main/shell.js',

        // auth
        auth: commonConfig.commonEntry + partialPath + '/modules/auth/auth-module.tsx',
        authStyle: commonConfig.commonEntry + partialPath + '/modules/auth/styles/auth-styles.scss'
    },
    output: {
        filename: commonConfig.commonOutput + partialPath + '[name].js'
    },
    outputCss: {
        filename: commonConfig.commonCss + partialPath + '[name].css'
    }
}
