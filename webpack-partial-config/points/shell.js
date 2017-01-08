const commonConfig = require('../common/config');

const partialPath = '/';

module.exports = {
    entry: {
        // spa shell
        shell: commonConfig.commonEntry + partialPath + '/scripts/main/shell.js',

        // common styles
        commonStyles: commonConfig.commonEntry + partialPath + '/scripts/main/styles/common.scss',

        // auth
        auth: commonConfig.commonEntry + partialPath + '/modules/auth/auth-module.tsx',
        authStyle: commonConfig.commonEntry + partialPath + '/modules/auth/styles/auth-styles.scss',

        // block
        block: commonConfig.commonEntry + partialPath + '/modules/block/block-module.tsx',
        blockStyle: commonConfig.commonEntry + partialPath + '/modules/block/styles/block-styles.scss',

        // main menu
        mainMenu: commonConfig.commonEntry + partialPath + '/modules/main-menu/main-menu-module.tsx',
        mainMenuStyle: commonConfig.commonEntry + partialPath + '/modules/main-menu/styles/main-menu-styles.scss'
    },
    output: {
        filename: commonConfig.commonOutput + partialPath + '[name].js'
    },
    outputCss: {
        filename: commonConfig.commonCss + partialPath + '[name].css'
    }
}
