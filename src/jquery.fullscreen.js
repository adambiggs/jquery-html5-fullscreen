;(function($) {

    $.fullscreen = function(el, options) {

        var defaults = {
            support: true,
            //set to called when support test happened
            supportcallback: function() {}
        }

        var fullscreen = this;

        fullscreen.settings = {}

        var init = function() {
            fullscreen.settings = $.extend({}, defaults, options);
            fullscreen.$el = el;
            fullscreen.el = el[0];
            checkFullScreenSupport();
            // code goes here
        }

        fullscreen.enableFullScreen = function() {
            var el=fullscreen.el;
            if(el.requestFullScreen) {
                el.requestFullScreen();
            } else if(el.mozRequestFullScreen) {
                el.mozRequestFullScreen();
            } else if(el.webkitRequestFullScreen) {
                el.webkitRequestFullScreen();
            }
        }

        fullscreen.disableFullScreen = function() {
            if(document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if(document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if(document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
        }

        var checkFullScreenSupport = function() {
            // code goes here


        }

        init();

    }

})(jQuery);