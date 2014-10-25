(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
// AMD. Register as an anonymous module.
        define(['jquery', 'underscore'], factory);
    } else {
// Browser globals
        root.locator = factory(root, root.JQuery, root._);
    }
}(this, function(root, $, _) {

    var cont = true;

    function getLocation(cb) {
        if (root.navigator.geolocation) {
            root.navigator.geolocation.getCurrentPosition(cb);
        } else {
            root.alert("Geolocation is not supported by this browser.");
        }
    }

    function loop(speed, cb) {
        if (cont) {
            setTimeout(function() {
                cb();
                loop(speed, cb);
            }, speed);
        }
    }

    var locator = {
        options: {},
        getPosition: function(options, cb) {
            this.options = options || {};
            this.options.speed = options.speed || 1000;

            cont = true;
            loop(this.options.speed, function() {
                getLocation(cb);
            });
        },
        stop: function() {
            cont = false;
        }
    };

    return locator;
}));
