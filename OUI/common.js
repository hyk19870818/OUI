window.OUI = window.OUI || {};

window.OUI.extent = {
    // 浅拷贝
    copyData: function (src, dist) {
        if (src) {
            dist = dist || {};
            for (var p in dist) {
                if (src.hasOwnProperty(p)) {
                    dist[p] = src[p];
                }
            }
            return dist;
        }
        return null;
    },

    // 注册事件
    registerEvent: function (dom) {

    },
    log: function (msg) {
        console.log(msg);
    }

};

