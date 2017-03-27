(function (window, undefined) {

    // 根对象
    var _$ = window.OUI;
    _$.Editor = editor = function (options) {
        this.options = {};
        _$.extent.copyData(options, this.options);

        this.init();
    };
    editor.prototype = {
        constructor: editor,
        init: function () {

        },
        show: function () {
            console.info(this.prototype);
            console.log("你好")
        },
        searchNode: function () {

        },
        execCommand: function () {

        }

    }

})(window);