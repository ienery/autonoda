const commonConfig = require('../common/config');

const partialPath = '/main-index';

module.exports = {
    entry: {
        ts: commonConfig.commonEntry + partialPath + '/ts/test.tsx'
    },
    output: {
        filename: commonConfig.commonOutput + partialPath + '/[name].js'
    },
    outputCss: {
        filename: commonConfig.commonCss + partialPath + '/styles.css'
    }
}
