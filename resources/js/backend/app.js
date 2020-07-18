window.$ = window.jQuery = require('jquery');
window.Swal = require('sweetalert2');
require('../vendor/jquery-browser-mobile/jquery.browser.mobile');
require('popper.js');
require('bootstrap');
require('bootstrap-datepicker/dist/js/bootstrap-datepicker');
require('../vendor/common/common');
require('nanoscroller/bin/javascripts/jquery.nanoscroller');
require('magnific-popup/dist/jquery.magnific-popup');
require('jquery.placeholder/jquery.placeholder');
require('./theme');
require('./custom');
require('./theme.init');

// Maintain Scroll Position
if (typeof localStorage !== 'undefined') {
    if (localStorage.getItem('sidebar-left-position') !== null) {
        var initialPosition = localStorage.getItem('sidebar-left-position'),
            sidebarLeft = document.querySelector('#sidebar-left .nano-content');

        sidebarLeft.scrollTop = initialPosition;
    }
}


require('../plugins');
import 'alpinejs';