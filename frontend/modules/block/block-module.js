var BlockModule = (function () {
    function BlockModule() {
        console.debug('constructor Block module');
    }
    BlockModule.prototype.initModule = function () {
        console.debug('init Block module');
    };
    return BlockModule;
}());
module.exports = {
    BlockModule: BlockModule
};
