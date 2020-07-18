(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/backend"],{

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./resources/js/backend/app.js":
/*!*************************************!*\
  !*** ./resources/js/backend/app.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! alpinejs */ "./node_modules/alpinejs/dist/alpine.js");
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(alpinejs__WEBPACK_IMPORTED_MODULE_0__);
window.$ = window.jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
window.Swal = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");

__webpack_require__(/*! ../vendor/jquery-browser-mobile/jquery.browser.mobile */ "./resources/js/vendor/jquery-browser-mobile/jquery.browser.mobile.js");

__webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");

__webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");

__webpack_require__(/*! bootstrap-datepicker/dist/js/bootstrap-datepicker */ "./node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.js");

__webpack_require__(/*! ../vendor/common/common */ "./resources/js/vendor/common/common.js");

__webpack_require__(/*! nanoscroller/bin/javascripts/jquery.nanoscroller */ "./node_modules/nanoscroller/bin/javascripts/jquery.nanoscroller.js");

__webpack_require__(/*! magnific-popup/dist/jquery.magnific-popup */ "./node_modules/magnific-popup/dist/jquery.magnific-popup.js");

__webpack_require__(/*! jquery.placeholder/jquery.placeholder */ "./node_modules/jquery.placeholder/jquery.placeholder.js");

__webpack_require__(/*! ./theme */ "./resources/js/backend/theme.js");

__webpack_require__(/*! ./custom */ "./resources/js/backend/custom.js");

__webpack_require__(/*! ./theme.init */ "./resources/js/backend/theme.init.js"); // Maintain Scroll Position


if (typeof localStorage !== 'undefined') {
  if (localStorage.getItem('sidebar-left-position') !== null) {
    var initialPosition = localStorage.getItem('sidebar-left-position'),
        sidebarLeft = document.querySelector('#sidebar-left .nano-content');
    sidebarLeft.scrollTop = initialPosition;
  }
}

__webpack_require__(/*! ../plugins */ "./resources/js/plugins.js");



/***/ }),

/***/ "./resources/js/backend/custom.js":
/*!****************************************!*\
  !*** ./resources/js/backend/custom.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Add here all your JS customizations */

/***/ }),

/***/ "./resources/js/backend/theme.init.js":
/*!********************************************!*\
  !*** ./resources/js/backend/theme.init.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Animate
(function ($) {
  'use strict';

  if ($.isFunction($.fn['appear'])) {
    $(function () {
      $('[data-plugin-animate], [data-appear-animation]').each(function () {
        var $this = $(this),
            opts = {};
        var pluginOptions = $this.data('plugin-options');
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginAnimate(opts);
      });
    });
  }
}).apply(this, [jQuery]); // Carousel

(function ($) {
  'use strict';

  if ($.isFunction($.fn['owlCarousel'])) {
    $(function () {
      $('[data-plugin-carousel]').each(function () {
        var $this = $(this),
            opts = {};
        var pluginOptions = $this.data('plugin-options');
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginCarousel(opts);
      });
    });
  }
}).apply(this, [jQuery]); // Chart Circular

(function ($) {
  'use strict';

  if ($.isFunction($.fn['easyPieChart'])) {
    $(function () {
      $('[data-plugin-chart-circular], .circular-bar-chart:not(.manual)').each(function () {
        var $this = $(this),
            opts = {};
        var pluginOptions = $this.data('plugin-options');
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginChartCircular(opts);
      });
    });
  }
}).apply(this, [jQuery]); // Codemirror

(function ($) {
  'use strict';

  if (typeof CodeMirror !== 'undefined') {
    $(function () {
      $('[data-plugin-codemirror]').each(function () {
        var $this = $(this),
            opts = {};
        var pluginOptions = $this.data('plugin-options');
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginCodeMirror(opts);
      });
    });
  }
}).apply(this, [jQuery]); // Colorpicker

(function ($) {
  'use strict';

  if ($.isFunction($.fn['colorpicker'])) {
    $(function () {
      $('[data-plugin-colorpicker]').each(function () {
        var $this = $(this),
            opts = {};
        var pluginOptions = $this.data('plugin-options');
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginColorPicker(opts);
      });
    });
  }
}).apply(this, [jQuery]); // Datepicker

(function ($) {
  'use strict';

  if ($.isFunction($.fn['bootstrapDP'])) {
    $(function () {
      $('[data-plugin-datepicker]').each(function () {
        var $this = $(this),
            opts = {};
        var pluginOptions = $this.data('plugin-options');
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginDatePicker(opts);
      });
    });
  }
}).apply(this, [jQuery]); // Header Menu Nav

(function (theme, $) {
  'use strict';

  if (typeof theme.Nav !== 'undefined') {
    theme.Nav.initialize();
  }
}).apply(this, [window.theme, jQuery]); // iosSwitcher

(function ($) {
  'use strict';

  if (typeof Switch !== 'undefined' && $.isFunction(Switch)) {
    $(function () {
      $('[data-plugin-ios-switch]').each(function () {
        var $this = $(this);
        $this.themePluginIOS7Switch();
      });
    });
  }
}).apply(this, [jQuery]); // Lightbox

(function ($) {
  'use strict';

  if ($.isFunction($.fn['magnificPopup'])) {
    $(function () {
      $('[data-plugin-lightbox], .lightbox:not(.manual)').each(function () {
        var $this = $(this),
            opts = {};
        var pluginOptions = $this.data('plugin-options');
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginLightbox(opts);
      });
    });
  }
}).apply(this, [jQuery]); // Portlets

(function ($) {
  'use strict';

  if (typeof NProgress !== 'undefined' && $.isFunction(NProgress.configure)) {
    NProgress.configure({
      showSpinner: false,
      ease: 'ease',
      speed: 750
    });
  }
}).apply(this, [jQuery]); // Markdown

(function ($) {
  'use strict';

  if ($.isFunction($.fn['markdown'])) {
    $(function () {
      $('[data-plugin-markdown-editor]').each(function () {
        var $this = $(this),
            opts = {};
        var pluginOptions = $this.data('plugin-options');
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginMarkdownEditor(opts);
      });
    });
  }
}).apply(this, [jQuery]); // Masked Input

(function ($) {
  'use strict';

  if ($.isFunction($.fn['mask'])) {
    $(function () {
      $('[data-plugin-masked-input]').each(function () {
        var $this = $(this),
            opts = {};
        var pluginOptions = $this.data('plugin-options');
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginMaskedInput(opts);
      });
    });
  }
}).apply(this, [jQuery]); // MaxLength

(function ($) {
  'use strict';

  if ($.isFunction($.fn['maxlength'])) {
    $(function () {
      $('[data-plugin-maxlength]').each(function () {
        var $this = $(this),
            opts = {};
        var pluginOptions = $this.data('plugin-options');
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginMaxLength(opts);
      });
    });
  }
}).apply(this, [jQuery]); // MultiSelect

(function ($) {
  'use strict';

  if ($.isFunction($.fn['multiselect'])) {
    $(function () {
      $('[data-plugin-multiselect]').each(function () {
        var $this = $(this),
            opts = {};
        var pluginOptions = $this.data('plugin-options');
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginMultiSelect(opts);
      });
    });
  }
}).apply(this, [jQuery]);
(function ($) {
  'use strict';

  if ($.isFunction($.fn['placeholder'])) {
    $('input[placeholder]').placeholder();
  }
}).apply(this, [jQuery]); // Popover

(function ($) {
  'use strict';

  if ($.isFunction($.fn['popover'])) {
    $('[data-toggle=popover]').popover();
  }
}).apply(this, [jQuery]); // Portlets

(function ($) {
  'use strict';

  $(function () {
    $('[data-plugin-portlet]').each(function () {
      var $this = $(this),
          opts = {};
      var pluginOptions = $this.data('plugin-options');
      if (pluginOptions) opts = pluginOptions;
      $this.themePluginPortlet(opts);
    });
  });
}).apply(this, [jQuery]); // Scroll to Top

(function (theme, $) {
  // Scroll to Top Button.
  if (typeof theme.PluginScrollToTop !== 'undefined') {
    theme.PluginScrollToTop.initialize();
  }
}).apply(this, [window.theme, jQuery]); // Scrollable

(function ($) {
  'use strict';

  if ($.isFunction($.fn['nanoScroller'])) {
    $(function () {
      $('[data-plugin-scrollable]').each(function () {
        var $this = $(this),
            opts = {};
        var pluginOptions = $this.data('plugin-options');

        if (pluginOptions) {
          opts = pluginOptions;
        }

        $this.themePluginScrollable(opts);
      });
    });
  }
}).apply(this, [jQuery]); // Select2

(function ($) {
  'use strict';

  if ($.isFunction($.fn['select2'])) {
    $(function () {
      $('[data-plugin-selectTwo]').each(function () {
        var $this = $(this),
            opts = {};
        var pluginOptions = $this.data('plugin-options');
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginSelect2(opts);
      });
    });
  }
}).apply(this, [jQuery]); // Sidebar Widgets

(function ($) {
  'use strict';

  function expand(content) {
    content.children('.widget-content').slideDown('fast', function () {
      $(this).css('display', '');
      content.removeClass('widget-collapsed');
    });
  }

  function collapse(content) {
    content.children('.widget-content').slideUp('fast', function () {
      content.addClass('widget-collapsed');
      $(this).css('display', '');
    });
  }

  var $widgets = $('.sidebar-widget');
  $widgets.each(function () {
    var $widget = $(this),
        $toggler = $widget.find('.widget-toggle');
    $toggler.on('click.widget-toggler', function () {
      $widget.hasClass('widget-collapsed') ? expand($widget) : collapse($widget);
    });
  });
}).apply(this, [jQuery]); // Slider

(function ($) {
  'use strict';

  if ($.isFunction($.fn['slider'])) {
    $(function () {
      $('[data-plugin-slider]').each(function () {
        var $this = $(this),
            opts = {};
        var pluginOptions = $this.data('plugin-options');

        if (pluginOptions) {
          opts = pluginOptions;
        }

        $this.themePluginSlider(opts);
      });
    });
  }
}).apply(this, [jQuery]); // Spinner

(function ($) {
  'use strict';

  if ($.isFunction($.fn['spinner'])) {
    $(function () {
      $('[data-plugin-spinner]').each(function () {
        var $this = $(this),
            opts = {};
        var pluginOptions = $this.data('plugin-options');
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginSpinner(opts);
      });
    });
  }
}).apply(this, [jQuery]); // SummerNote

(function ($) {
  'use strict';

  if ($.isFunction($.fn['summernote'])) {
    $(function () {
      $('[data-plugin-summernote]').each(function () {
        var $this = $(this),
            opts = {};
        var pluginOptions = $this.data('plugin-options');
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginSummerNote(opts);
      });
    });
  }
}).apply(this, [jQuery]); // TextArea AutoSize

(function ($) {
  'use strict';

  if (typeof autosize === 'function') {
    $(function () {
      $('[data-plugin-textarea-autosize]').each(function () {
        var $this = $(this),
            opts = {};
        var pluginOptions = $this.data('plugin-options');
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginTextAreaAutoSize(opts);
      });
    });
  }
}).apply(this, [jQuery]); // TimePicker

(function ($) {
  'use strict';

  if ($.isFunction($.fn['timepicker'])) {
    $(function () {
      $('[data-plugin-timepicker]').each(function () {
        var $this = $(this),
            opts = {};
        var pluginOptions = $this.data('plugin-options');
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginTimePicker(opts);
      });
    });
  }
}).apply(this, [jQuery]); // Toggle

(function ($) {
  'use strict';

  $(function () {
    $('[data-plugin-toggle]').each(function () {
      var $this = $(this),
          opts = {};
      var pluginOptions = $this.data('plugin-options');
      if (pluginOptions) opts = pluginOptions;
      $this.themePluginToggle(opts);
    });
  });
}).apply(this, [jQuery]); // Tooltip

(function ($) {
  'use strict';

  if ($.isFunction($.fn['tooltip'])) {
    $('[data-toggle=tooltip],[rel=tooltip]').tooltip({
      container: 'body'
    });
  }
}).apply(this, [jQuery]); // Widget - Todo

(function ($) {
  'use strict';

  if ($.isFunction($.fn['themePluginWidgetTodoList'])) {
    $(function () {
      $('[data-plugin-todo-list], ul.widget-todo-list').each(function () {
        var $this = $(this),
            opts = {};
        var pluginOptions = $this.data('plugin-options');
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginWidgetTodoList(opts);
      });
    });
  }
}).apply(this, [jQuery]); // Widget - Toggle

(function ($) {
  'use strict';

  if ($.isFunction($.fn['themePluginWidgetToggleExpand'])) {
    $(function () {
      $('[data-plugin-toggle-expand], .widget-toggle-expand').each(function () {
        var $this = $(this),
            opts = {};
        var pluginOptions = $this.data('plugin-options');
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginWidgetToggleExpand(opts);
      });
    });
  }
}).apply(this, [jQuery]); // Word Rotator

(function ($) {
  'use strict';

  if ($.isFunction($.fn['themePluginWordRotator'])) {
    $(function () {
      $('[data-plugin-wort-rotator], .wort-rotator:not(.manual)').each(function () {
        var $this = $(this),
            opts = {};
        var pluginOptions = $this.data('plugin-options');
        if (pluginOptions) opts = pluginOptions;
        $this.themePluginWordRotator(opts);
      });
    });
  }
}).apply(this, [jQuery]); // Base

(function (theme, $) {
  'use strict';

  theme = theme || {};
  theme.Skeleton.initialize();
}).apply(this, [window.theme, jQuery]); // Mailbox

(function ($) {
  'use strict';

  $(function () {
    $('[data-mailbox]').each(function () {
      var $this = $(this);
      $this.themeMailbox();
    });
  });
}).apply(this, [jQuery]);

/***/ }),

/***/ "./resources/js/backend/theme.js":
/*!***************************************!*\
  !*** ./resources/js/backend/theme.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
Name: 			Theme Base
Written by: 	Okler Themes - (http://www.okler.net)
Theme Version: 	2.2.0
*/
window.theme = {}; // Theme Common Functions

window.theme.fn = {
  getOptions: function getOptions(opts) {
    if (_typeof(opts) == 'object') {
      return opts;
    } else if (typeof opts == 'string') {
      try {
        return JSON.parse(opts.replace(/'/g, '"').replace(';', ''));
      } catch (e) {
        return {};
      }
    } else {
      return {};
    }
  }
}; // Animate

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__animate';

  var PluginAnimate = function PluginAnimate($el, opts) {
    return this.initialize($el, opts);
  };

  PluginAnimate.defaults = {
    accX: 0,
    accY: -150,
    delay: 1,
    duration: '1s'
  };
  PluginAnimate.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginAnimate.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      var self = this,
          $el = this.options.wrapper,
          delay = 0,
          duration = '1s',
          elTopDistance = $el.offset().top,
          windowTopDistance = $(window).scrollTop();
      $(document).ready(function () {
        $el.addClass('appear-animation animated');

        if (!$('html').hasClass('no-csstransitions') && $(window).width() > 767 && elTopDistance > windowTopDistance) {
          $el.appear(function () {
            $el.one('animation:show', function (ev) {
              delay = $el.attr('data-appear-animation-delay') ? $el.attr('data-appear-animation-delay') : self.options.delay;
              duration = $el.attr('data-appear-animation-duration') ? $el.attr('data-appear-animation-duration') : self.options.duration;

              if (duration != '1s') {
                $el.css('animation-duration', duration);
              }

              setTimeout(function () {
                $el.addClass($el.attr('data-appear-animation') + ' appear-animation-visible');
              }, delay);
            });
            $el.trigger('animation:show');
          }, {
            accX: self.options.accX,
            accY: self.options.accY
          });
        } else {
          $el.addClass('appear-animation-visible');
        }
      });
      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    PluginAnimate: PluginAnimate
  }); // jquery plugin

  $.fn.themePluginAnimate = function (opts) {
    return this.map(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginAnimate($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Bootstrap Toggle

(function ($) {
  'use strict';

  var $window = $(window);

  var toggleClass = function toggleClass($el) {
    if (!!$el.data('toggleClassBinded')) {
      return false;
    }

    var $target, className, eventName;
    $target = $($el.attr('data-target'));
    className = $el.attr('data-toggle-class');
    eventName = $el.attr('data-fire-event');
    $el.on('click.toggleClass', function (e) {
      e.preventDefault();
      $target.toggleClass(className);
      var hasClass = $target.hasClass(className);

      if (!!eventName) {
        $window.trigger(eventName, {
          added: hasClass,
          removed: !hasClass
        });
      }
    });
    $el.data('toggleClassBinded', true);
    return true;
  };

  $(function () {
    $('[data-toggle-class][data-target]').each(function () {
      toggleClass($(this));
    });
  });
}).apply(this, [jQuery]); // Cards

(function ($) {
  $(function () {
    $('.card').on('card:toggle', function () {
      var $this, direction;
      $this = $(this);
      direction = $this.hasClass('card-collapsed') ? 'Down' : 'Up';
      $this.find('.card-body, .card-footer')['slide' + direction](200, function () {
        $this[(direction === 'Up' ? 'add' : 'remove') + 'Class']('card-collapsed');
      });
    }).on('card:dismiss', function () {
      var $this = $(this);

      if (!!($this.parent('div').attr('class') || '').match(/col-(xs|sm|md|lg)/g) && $this.siblings().length === 0) {
        $row = $this.closest('.row');
        $this.parent('div').remove();

        if ($row.children().length === 0) {
          $row.remove();
        }
      } else {
        $this.remove();
      }
    }).on('click', '[data-card-toggle]', function (e) {
      e.preventDefault();
      $(this).closest('.card').trigger('card:toggle');
    }).on('click', '[data-card-dismiss]', function (e) {
      e.preventDefault();
      $(this).closest('.card').trigger('card:dismiss');
    })
    /* Deprecated */
    .on('click', '.card-actions a.fa-caret-up', function (e) {
      e.preventDefault();
      var $this = $(this);
      $this.removeClass('fa-caret-up').addClass('fa-caret-down');
      $this.closest('.card').trigger('card:toggle');
    }).on('click', '.card-actions a.fa-caret-down', function (e) {
      e.preventDefault();
      var $this = $(this);
      $this.removeClass('fa-caret-down').addClass('fa-caret-up');
      $this.closest('.card').trigger('card:toggle');
    }).on('click', '.card-actions a.fa-times', function (e) {
      e.preventDefault();
      var $this = $(this);
      $this.closest('.card').trigger('card:dismiss');
    });
  });
})(jQuery); // Carousel


(function (theme, $) {
  theme = theme || {};
  var initialized = false;
  var instanceName = '__carousel';

  var PluginCarousel = function PluginCarousel($el, opts) {
    return this.initialize($el, opts);
  };

  PluginCarousel.defaults = {
    navText: []
  };
  PluginCarousel.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginCarousel.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      this.options.wrapper.owlCarousel(this.options).addClass("owl-carousel-init");
      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    PluginCarousel: PluginCarousel
  }); // jquery plugin

  $.fn.themePluginCarousel = function (opts) {
    return this.map(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginCarousel($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Chart Circular

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__chartCircular';

  var PluginChartCircular = function PluginChartCircular($el, opts) {
    return this.initialize($el, opts);
  };

  PluginChartCircular.defaults = {
    accX: 0,
    accY: -150,
    delay: 1,
    barColor: '#0088CC',
    trackColor: '#f2f2f2',
    scaleColor: false,
    scaleLength: 5,
    lineCap: 'round',
    lineWidth: 13,
    size: 175,
    rotate: 0,
    animate: {
      duration: 2500,
      enabled: true
    }
  };
  PluginChartCircular.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginChartCircular.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      var self = this,
          $el = this.options.wrapper,
          value = $el.attr('data-percent') ? $el.attr('data-percent') : 0,
          percentEl = $el.find('.percent'),
          shouldAnimate,
          data;
      shouldAnimate = $.isFunction($.fn['appear']) && typeof $.browser !== 'undefined' && !$.browser.mobile;
      data = {
        accX: self.options.accX,
        accY: self.options.accY
      };
      $.extend(true, self.options, {
        onStep: function onStep(from, to, currentValue) {
          percentEl.html(parseInt(currentValue));
        }
      });
      $el.attr('data-percent', shouldAnimate ? 0 : value);
      $el.easyPieChart(this.options);

      if (shouldAnimate) {
        $el.appear(function () {
          setTimeout(function () {
            $el.data('easyPieChart').update(value);
            $el.attr('data-percent', value);
          }, self.options.delay);
        }, data);
      } else {
        $el.data('easyPieChart').update(value);
        $el.attr('data-percent', value);
      }

      return this;
    }
  }; // expose to scope

  $.extend(true, theme, {
    Chart: {
      PluginChartCircular: PluginChartCircular
    }
  }); // jquery plugin

  $.fn.themePluginChartCircular = function (opts) {
    return this.map(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginChartCircular($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Codemirror

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__codemirror';

  var PluginCodeMirror = function PluginCodeMirror($el, opts) {
    return this.initialize($el, opts);
  };

  PluginCodeMirror.defaults = {
    lineNumbers: true,
    styleActiveLine: true,
    matchBrackets: true,
    theme: 'monokai'
  };
  PluginCodeMirror.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginCodeMirror.defaults, opts);
      return this;
    },
    build: function build() {
      CodeMirror.fromTextArea(this.$el.get(0), this.options);
      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    PluginCodeMirror: PluginCodeMirror
  }); // jquery plugin

  $.fn.themePluginCodeMirror = function (opts) {
    return this.each(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginCodeMirror($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Colorpicker

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__colorpicker';

  var PluginColorPicker = function PluginColorPicker($el, opts) {
    return this.initialize($el, opts);
  };

  PluginColorPicker.defaults = {};
  PluginColorPicker.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginColorPicker.defaults, opts);
      return this;
    },
    build: function build() {
      this.$el.colorpicker(this.options);
      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    PluginColorPicker: PluginColorPicker
  }); // jquery plugin

  $.fn.themePluginColorPicker = function (opts) {
    return this.each(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginColorPicker($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Data Tables - Config

(function ($) {
  'use strict'; // we overwrite initialize of all datatables here
  // because we want to use select2, give search input a bootstrap look
  // keep in mind if you overwrite this fnInitComplete somewhere,
  // you should run the code inside this function to keep functionality.
  //
  // there's no better way to do this at this time :(

  if ($.isFunction($.fn['dataTable'])) {
    $.extend(true, $.fn.dataTable.defaults, {
      oLanguage: {
        sLengthMenu: '_MENU_ records per page',
        sProcessing: '<i class="fas fa-spinner fa-spin"></i> Loading',
        sSearch: ''
      },
      fnInitComplete: function fnInitComplete(settings, json) {
        // select 2
        if ($.isFunction($.fn['select2'])) {
          $('.dataTables_length select', settings.nTableWrapper).select2({
            theme: 'bootstrap',
            minimumResultsForSearch: -1
          });
        }

        var options = $('table', settings.nTableWrapper).data('plugin-options') || {}; // search

        var $search = $('.dataTables_filter input', settings.nTableWrapper);
        $search.attr({
          placeholder: typeof options.searchPlaceholder !== 'undefined' ? options.searchPlaceholder : 'Search...'
        }).removeClass('form-control-sm').addClass('form-control pull-right');

        if ($.isFunction($.fn.placeholder)) {
          $search.placeholder();
        }
      }
    });
  }
}).apply(this, [jQuery]); // Datepicker

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__datepicker';

  var PluginDatePicker = function PluginDatePicker($el, opts) {
    return this.initialize($el, opts);
  };

  PluginDatePicker.defaults = {};
  PluginDatePicker.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el;
      this.setVars().setData().setOptions(opts).build();
      return this;
    },
    setVars: function setVars() {
      this.skin = this.$el.data('plugin-skin');
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginDatePicker.defaults, opts);
      return this;
    },
    build: function build() {
      this.$el.bootstrapDP(this.options);

      if (!!this.skin && typeof this.$el.data('datepicker').picker != 'undefined') {
        this.$el.data('datepicker').picker.addClass('datepicker-' + this.skin);
      }

      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    PluginDatePicker: PluginDatePicker
  }); // jquery plugin

  $.fn.themePluginDatePicker = function (opts) {
    return this.each(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginDatePicker($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Header Menu Nav

(function (theme, $) {
  'use strict';

  theme = theme || {};
  var initialized = false;
  $.extend(theme, {
    Nav: {
      defaults: {
        wrapper: $('#mainNav'),
        scrollDelay: 600,
        scrollAnimation: 'easeOutQuad'
      },
      initialize: function initialize($wrapper, opts) {
        if (initialized) {
          return this;
        }

        initialized = true;
        this.$wrapper = $wrapper || this.defaults.wrapper;
        this.setOptions(opts).build().events();
        return this;
      },
      setOptions: function setOptions(opts) {
        // this.options = $.extend(true, {}, this.defaults, opts, theme.fn.getOptions(this.$wrapper.data('plugin-options')));
        return this;
      },
      build: function build() {
        var self = this,
            $html = $('html'),
            $header = $('.header'),
            thumbInfoPreview; // Add Arrows

        $header.find('.dropdown-toggle:not(.notification-icon), .dropdown-submenu > a').append($('<i />').addClass('fas fa-caret-down')); // Preview Thumbs

        self.$wrapper.find('a[data-thumb-preview]').each(function () {
          thumbInfoPreview = $('<span />').addClass('thumb-info thumb-info-preview').append($('<span />').addClass('thumb-info-wrapper').append($('<span />').addClass('thumb-info-image').css('background-image', 'url(' + $(this).data('thumb-preview') + ')')));
          $(this).append(thumbInfoPreview);
        }); // Side Header Right (Reverse Dropdown)

        if ($html.hasClass('side-header-right')) {
          $header.find('.dropdown').addClass('dropdown-reverse');
        }

        return this;
      },
      events: function events() {
        var self = this,
            $header = $('.header'),
            $window = $(window);
        $header.find('a[href="#"]').on('click', function (e) {
          e.preventDefault();
        }); // Mobile Arrows

        $header.find('.dropdown-toggle[href="#"], .dropdown-submenu a[href="#"], .dropdown-toggle[href!="#"] .fa-caret-down, .dropdown-submenu a[href!="#"] .fa-caret-down').on('click', function (e) {
          e.preventDefault();

          if ($window.width() < 992) {
            $(this).closest('li').toggleClass('showed');
          }
        }); // Touch Devices with normal resolutions

        if ('ontouchstart' in document.documentElement) {
          $header.find('.dropdown-toggle:not([href="#"]), .dropdown-submenu > a:not([href="#"])').on('touchstart click', function (e) {
            if ($window.width() > 991) {
              e.stopPropagation();
              e.preventDefault();

              if (e.handled !== true) {
                var li = $(this).closest('li');

                if (li.hasClass('tapped')) {
                  location.href = $(this).attr('href');
                }

                li.addClass('tapped');
                e.handled = true;
              } else {
                return false;
              }

              return false;
            }
          }).on('blur', function (e) {
            $(this).closest('li').removeClass('tapped');
          });
        } // Collapse Nav


        $header.find('[data-collapse-nav]').on('click', function (e) {
          $(this).parents('.collapse').removeClass('in');
        }); // Anchors Position

        $('[data-hash]').each(function () {
          var target = $(this).attr('href'),
              offset = $(this).is("[data-hash-offset]") ? $(this).data('hash-offset') : 0;

          if ($(target).get(0)) {
            $(this).on('click', function (e) {
              e.preventDefault(); // Close Collapse if Opened

              $(this).parents('.collapse.in').removeClass('in');
              self.scrollToTarget(target, offset);
              return;
            });
          }
        });
        return this;
      },
      scrollToTarget: function scrollToTarget(target, offset) {
        var self = this;
        $('body').addClass('scrolling');
        $('html, body').animate({
          scrollTop: $(target).offset().top - offset
        }, self.options.scrollDelay, self.options.scrollAnimation, function () {
          $('body').removeClass('scrolling');
        });
        return this;
      }
    }
  });
}).apply(this, [window.theme, jQuery]); // iosSwitcher

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__IOS7Switch';

  var PluginIOS7Switch = function PluginIOS7Switch($el) {
    return this.initialize($el);
  };

  PluginIOS7Switch.prototype = {
    initialize: function initialize($el) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el;
      this.setData().build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    build: function build() {
      var switcher = new Switch(this.$el.get(0));
      $(switcher.el).on('click', function (e) {
        e.preventDefault();
        switcher.toggle();
      });
      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    PluginIOS7Switch: PluginIOS7Switch
  }); // jquery plugin

  $.fn.themePluginIOS7Switch = function (opts) {
    return this.each(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginIOS7Switch($this);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Form to Object

(function ($) {
  'use strict';

  $.fn.formToObject = function () {
    var arrayData, objectData;
    arrayData = this.serializeArray();
    objectData = {};
    $.each(arrayData, function () {
      var value;

      if (this.value != null) {
        value = this.value;
      } else {
        value = '';
      }

      if (objectData[this.name] != null) {
        if (!objectData[this.name].push) {
          objectData[this.name] = [objectData[this.name]];
        }

        objectData[this.name].push(value);
      } else {
        objectData[this.name] = value;
      }
    });
    return objectData;
  };
})(jQuery); // Lightbox


(function (theme, $) {
  theme = theme || {};
  var instanceName = '__lightbox';

  var PluginLightbox = function PluginLightbox($el, opts) {
    return this.initialize($el, opts);
  };

  PluginLightbox.defaults = {
    tClose: 'Close (Esc)',
    // Alt text on close button
    tLoading: 'Loading...',
    // Text that is displayed during loading. Can contain %curr% and %total% keys
    gallery: {
      tPrev: 'Previous (Left arrow key)',
      // Alt text on left arrow
      tNext: 'Next (Right arrow key)',
      // Alt text on right arrow
      tCounter: '%curr% of %total%' // Markup for "1 of 7" counter

    },
    image: {
      tError: '<a href="%url%">The image</a> could not be loaded.' // Error message when image could not be loaded

    },
    ajax: {
      tError: '<a href="%url%">The content</a> could not be loaded.' // Error message when ajax request failed

    }
  };
  PluginLightbox.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginLightbox.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      this.options.wrapper.magnificPopup(this.options);
      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    PluginLightbox: PluginLightbox
  }); // jquery plugin

  $.fn.themePluginLightbox = function (opts) {
    return this.each(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginLightbox($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Loading Overlay

(function (theme, $) {
  'use strict';

  theme = theme || {};
  var loadingOverlayTemplate = ['<div class="loading-overlay">', '<div class="bounce-loader"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>', '</div>'].join('');

  var LoadingOverlay = function LoadingOverlay($wrapper, options) {
    return this.initialize($wrapper, options);
  };

  LoadingOverlay.prototype = {
    options: {
      css: {}
    },
    initialize: function initialize($wrapper, options) {
      this.$wrapper = $wrapper;
      this.setVars().setOptions(options).build().events();
      this.$wrapper.data('loadingOverlay', this);
    },
    setVars: function setVars() {
      this.$overlay = this.$wrapper.find('.loading-overlay');
      return this;
    },
    setOptions: function setOptions(options) {
      if (!this.$overlay.get(0)) {
        this.matchProperties();
      }

      this.options = $.extend(true, {}, this.options, options);
      this.loaderClass = this.getLoaderClass(this.options.css.backgroundColor);
      return this;
    },
    build: function build() {
      if (!this.$overlay.closest(document.documentElement).get(0)) {
        if (!this.$cachedOverlay) {
          this.$overlay = $(loadingOverlayTemplate).clone();

          if (this.options.css) {
            this.$overlay.css(this.options.css);
            this.$overlay.find('.loader').addClass(this.loaderClass);
          }
        } else {
          this.$overlay = this.$cachedOverlay.clone();
        }

        this.$wrapper.append(this.$overlay);
      }

      if (!this.$cachedOverlay) {
        this.$cachedOverlay = this.$overlay.clone();
      }

      return this;
    },
    events: function events() {
      var _self = this;

      if (this.options.startShowing) {
        _self.show();
      }

      if (this.$wrapper.is('body') || this.options.hideOnWindowLoad) {
        $(window).on('load error', function () {
          _self.hide();
        });
      }

      if (this.options.listenOn) {
        $(this.options.listenOn).on('loading-overlay:show beforeSend.ic', function (e) {
          e.stopPropagation();

          _self.show();
        }).on('loading-overlay:hide complete.ic', function (e) {
          e.stopPropagation();

          _self.hide();
        });
      }

      this.$wrapper.on('loading-overlay:show beforeSend.ic', function (e) {
        if (e.target === _self.$wrapper.get(0)) {
          e.stopPropagation();

          _self.show();

          return true;
        }

        return false;
      }).on('loading-overlay:hide complete.ic', function (e) {
        if (e.target === _self.$wrapper.get(0)) {
          e.stopPropagation();

          _self.hide();

          return true;
        }

        return false;
      });
      return this;
    },
    show: function show() {
      this.build();
      this.position = this.$wrapper.css('position').toLowerCase();

      if (this.position != 'relative' || this.position != 'absolute' || this.position != 'fixed') {
        this.$wrapper.css({
          position: 'relative'
        });
      }

      this.$wrapper.addClass('loading-overlay-showing');
    },
    hide: function hide() {
      var _self = this;

      this.$wrapper.removeClass('loading-overlay-showing');
      setTimeout(function () {
        if (this.position != 'relative' || this.position != 'absolute' || this.position != 'fixed') {
          _self.$wrapper.css({
            position: ''
          });
        }
      }, 500);
    },
    matchProperties: function matchProperties() {
      var i, l, properties;
      properties = ['backgroundColor', 'borderRadius'];
      l = properties.length;

      for (i = 0; i < l; i++) {
        var obj = {};
        obj[properties[i]] = this.$wrapper.css(properties[i]);
        $.extend(this.options.css, obj);
      }
    },
    getLoaderClass: function getLoaderClass(backgroundColor) {
      if (!backgroundColor || backgroundColor === 'transparent' || backgroundColor === 'inherit') {
        return 'black';
      }

      var hexColor, r, g, b, yiq;

      var colorToHex = function colorToHex(color) {
        var hex, rgb;

        if (color.indexOf('#') > -1) {
          hex = color.replace('#', '');
        } else {
          rgb = color.match(/\d+/g);
          hex = ('0' + parseInt(rgb[0], 10).toString(16)).slice(-2) + ('0' + parseInt(rgb[1], 10).toString(16)).slice(-2) + ('0' + parseInt(rgb[2], 10).toString(16)).slice(-2);
        }

        if (hex.length === 3) {
          hex = hex + hex;
        }

        return hex;
      };

      hexColor = colorToHex(backgroundColor);
      r = parseInt(hexColor.substr(0, 2), 16);
      g = parseInt(hexColor.substr(2, 2), 16);
      b = parseInt(hexColor.substr(4, 2), 16);
      yiq = (r * 299 + g * 587 + b * 114) / 1000;
      return yiq >= 128 ? 'black' : 'white';
    }
  }; // expose to scope

  $.extend(theme, {
    LoadingOverlay: LoadingOverlay
  }); // expose as a jquery plugin

  $.fn.loadingOverlay = function (opts) {
    return this.each(function () {
      var $this = $(this);
      var loadingOverlay = $this.data('loadingOverlay');

      if (loadingOverlay) {
        return loadingOverlay;
      } else {
        var options = opts || $this.data('loading-overlay-options') || {};
        return new LoadingOverlay($this, options);
      }
    });
  }; // auto init


  $('[data-loading-overlay]').loadingOverlay();
}).apply(this, [window.theme, jQuery]); // Lock Screen

(function ($) {
  'use strict';

  var LockScreen = {
    initialize: function initialize() {
      this.$body = $('body');
      this.build().events();
    },
    build: function build() {
      var lockHTML, userinfo;
      userinfo = this.getUserInfo();
      this.lockHTML = this.buildTemplate(userinfo);
      this.$lock = this.$body.children('#LockScreenInline');
      this.$userPicture = this.$lock.find('#LockUserPicture');
      this.$userName = this.$lock.find('#LockUserName');
      this.$userEmail = this.$lock.find('#LockUserEmail');
      return this;
    },
    events: function events() {
      var _self = this;

      this.$body.find('[data-lock-screen="true"]').on('click', function (e) {
        e.preventDefault();

        _self.show();
      });
      return this;
    },
    formEvents: function formEvents($form) {
      var _self = this;

      $form.on('submit', function (e) {
        e.preventDefault();

        _self.hide();
      });
    },
    show: function show() {
      var _self = this,
          userinfo = this.getUserInfo();

      this.$userPicture.attr('src', userinfo.picture);
      this.$userName.text(userinfo.username);
      this.$userEmail.text(userinfo.email);
      this.$body.addClass('show-lock-screen');
      $.magnificPopup.open({
        items: {
          src: this.lockHTML,
          type: 'inline'
        },
        modal: true,
        mainClass: 'mfp-lock-screen',
        callbacks: {
          change: function change() {
            _self.formEvents(this.content.find('form'));
          }
        }
      });
    },
    hide: function hide() {
      $.magnificPopup.close();
    },
    getUserInfo: function getUserInfo() {
      var $info, picture, name, email; // always search in case something is changed through ajax

      $info = $('#userbox');
      picture = $info.find('.profile-picture img').attr('data-lock-picture');
      name = $info.find('.profile-info').attr('data-lock-name');
      email = $info.find('.profile-info').attr('data-lock-email');
      return {
        picture: picture,
        username: name,
        email: email
      };
    },
    buildTemplate: function buildTemplate(userinfo) {
      return ['<section id="LockScreenInline" class="body-sign body-locked body-locked-inline">', '<div class="center-sign">', '<div class="panel card-sign">', '<div class="card-body">', '<form>', '<div class="current-user text-center">', '<img id="LockUserPicture" src="{{picture}}" alt="John Doe" class="rounded-circle user-image" />', '<h2 id="LockUserName" class="user-name text-dark m-0">{{username}}</h2>', '<p  id="LockUserEmail" class="user-email m-0">{{email}}</p>', '</div>', '<div class="form-group mb-lg">', '<div class="input-group">', '<input id="pwd" name="pwd" type="password" class="form-control form-control-lg" placeholder="Password" />', '<span class="input-group-append">', '<span class="input-group-text">', '<i class="fas fa-lock"></i>', '</span>', '</span>', '</div>', '</div>', '<div class="row">', '<div class="col-6">', '<p class="mt-xs mb-0">', '<a href="#">Not John Doe?</a>', '</p>', '</div>', '<div class="col-6">', '<button type="submit" class="btn btn-primary pull-right">Unlock</button>', '</div>', '</div>', '</form>', '</div>', '</div>', '</div>', '</section>'].join('').replace(/\{\{picture\}\}/, userinfo.picture).replace(/\{\{username\}\}/, userinfo.username).replace(/\{\{email\}\}/, userinfo.email);
    }
  };
  this.LockScreen = LockScreen;
  $(function () {
    LockScreen.initialize();
  });
}).apply(this, [jQuery]); // Map Builder

(function (theme, $) {
  'use strict'; // prevent undefined var

  theme = theme || {}; // internal var to check if reached limit

  var timeouts = 0; // instance

  var instanceName = '__gmapbuilder'; // private

  var roundNumber = function roundNumber(number, precision) {
    if (precision < 0) {
      precision = 0;
    } else if (precision > 10) {
      precision = 10;
    }

    var a = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 10000000000];
    return Math.round(number * a[precision]) / a[precision];
  }; // definition


  var GMapBuilder = function GMapBuilder($wrapper, opts) {
    return this.initialize($wrapper, opts);
  };

  GMapBuilder.defaults = {
    mapSelector: '#gmap',
    markers: {
      modal: '#MarkerModal',
      list: '#MarkersList',
      removeAll: '#MarkerRemoveAll'
    },
    previewModal: '#ModalPreview',
    getCodeModal: '#ModalGetCode',
    mapOptions: {
      center: {
        lat: -38.908133,
        lng: -13.692628
      },
      panControl: true,
      zoom: 3
    }
  };
  GMapBuilder.prototype = {
    markers: [],
    initialize: function initialize($wrapper, opts) {
      this.$wrapper = $wrapper;
      this.setData().setOptions(opts).setVars().build().events();
      return this;
    },
    setData: function setData() {
      this.$wrapper.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, GMapBuilder.defaults, opts);
      return this;
    },
    setVars: function setVars() {
      this.$mapContainer = this.$wrapper.find(this.options.mapSelector);
      this.$previewModal = $(this.options.previewModal);
      this.$getCodeModal = $(this.options.getCodeModal);
      this.marker = {};
      this.marker.$modal = $(this.options.markers.modal);
      this.marker.$form = this.marker.$modal.find('form');
      this.marker.$list = $(this.options.markers.list);
      this.marker.$removeAll = $(this.options.markers.removeAll);
      return this;
    },
    build: function build() {
      var _self = this;

      if (!!window.SnazzyThemes) {
        var themeOpts = [];
        $.each(window.SnazzyThemes, function (i, theme) {
          themeOpts.push($('<option value="' + theme.id + '">' + theme.name + '</option>').data('json', theme.json));
        });
        this.$wrapper.find('[data-builder-field="maptheme"]').append(themeOpts);
      }

      this.geocoder = new google.maps.Geocoder();
      google.maps.event.addDomListener(window, 'load', function () {
        _self.options.mapOptions.center = new google.maps.LatLng(_self.options.mapOptions.center.lat, _self.options.mapOptions.center.lng);
        _self.map = new google.maps.Map(_self.$mapContainer.get(0), _self.options.mapOptions);

        _self.updateControl('latlng').updateControl('zoomlevel');

        _self.mapEvents();
      });
      return this;
    },
    events: function events() {
      var _self = this;

      this.$wrapper.find('[data-builder-field]').each(function () {
        var $this = $(this),
            field,
            value;
        field = $this.data('builder-field');
        $this.on('change', function () {
          if ($this.is('select')) {
            value = $this.children('option:selected').val().toLowerCase();
          } else {
            value = $this.val().toLowerCase();
          }

          _self.updateMap(field, value);
        });
      });
      this.marker.$form.on('submit', function (e) {
        e.preventDefault();

        _self.saveMarker(_self.marker.$form.formToObject());
      });
      this.marker.$removeAll.on('click', function (e) {
        e.preventDefault();

        _self.removeAllMarkers();
      }); // preview events

      this.$previewModal.on('shown.bs.modal', function () {
        _self.preview();
      });
      this.$previewModal.on('hidden.bs.modal', function () {
        _self.$previewModal.find('iframe').get(0).contentWindow.document.body.innerHTML = '';
      }); // get code events

      this.$getCodeModal.on('shown.bs.modal', function () {
        _self.getCode();
      });
      return this;
    },
    // MAP FUNCTIONS
    // -----------------------------------------------------------------------------
    mapEvents: function mapEvents() {
      var _self = this;

      google.maps.event.addDomListener(_self.map, 'resize', function () {
        google.maps.event.trigger(_self.map, 'resize');
      });
      google.maps.event.addListener(this.map, 'center_changed', function () {
        var coords = _self.map.getCenter();

        _self.updateControl('latlng', {
          lat: roundNumber(coords.lat(), 6),
          lng: roundNumber(coords.lng(), 6)
        });
      });
      google.maps.event.addListener(this.map, 'zoom_changed', function () {
        _self.updateControl('zoomlevel', _self.map.getZoom());
      });
      google.maps.event.addListener(this.map, 'maptypeid_changed', function () {
        _self.updateControl('maptype', _self.map.getMapTypeId());
      });
      return this;
    },
    updateMap: function updateMap(prop, value) {
      var updateFn;
      updateFn = this.updateMapProperty[prop];

      if ($.isFunction(updateFn)) {
        updateFn.apply(this, [value]);
      } else {
        console.info('missing update function for', prop);
      }

      return this;
    },
    updateMapProperty: {
      latlng: function latlng() {
        var lat, lng;
        lat = this.$wrapper.find('[data-builder-field][name="latitude"]').val();
        lng = this.$wrapper.find('[data-builder-field][name="longitude"]').val();

        if (lat.length > 0 && lng.length > 0) {
          this.map.setCenter(new google.maps.LatLng(lat, lng));
        }

        return this;
      },
      zoomlevel: function zoomlevel(value) {
        var value = arguments[0];
        this.map.setZoom(parseInt(value, 10));
        return this;
      },
      maptypecontrol: function maptypecontrol(value) {
        var options;
        options = {};

        if (value === 'false') {
          options.mapTypeControl = false;
        } else {
          options = {
            mapTypeControl: true,
            mapTypeControlOptions: {
              style: google.maps.MapTypeControlStyle[value.toUpperCase()]
            }
          };
        }

        this.map.setOptions(options);
        return this;
      },
      zoomcontrol: function zoomcontrol(value) {
        var options;
        options = {};

        if (value === 'false') {
          options.zoomControl = false;
        } else {
          options = {
            zoomControl: true,
            zoomControlOptions: {
              style: google.maps.ZoomControlStyle[value.toUpperCase()]
            }
          };
        }

        this.map.setOptions(options);
        return this;
      },
      scalecontrol: function scalecontrol(value) {
        var options;
        options = {};
        options.scaleControl = value !== 'false';
        this.map.setOptions(options);
        return this;
      },
      streetviewcontrol: function streetviewcontrol(value) {
        var options;
        options = {};
        options.streetViewControl = value !== 'false';
        this.map.setOptions(options);
        return this;
      },
      pancontrol: function pancontrol(value) {
        var options;
        options = {};
        options.panControl = value !== 'false';
        this.map.setOptions(options);
        return this;
      },
      overviewcontrol: function overviewcontrol(value) {
        var options;
        options = {};

        if (value === 'false') {
          options.overviewMapControl = false;
        } else {
          options = {
            overviewMapControl: true,
            overviewMapControlOptions: {
              opened: value === 'opened'
            }
          };
        }

        this.map.setOptions(options);
        return this;
      },
      draggablecontrol: function draggablecontrol(value) {
        var options;
        options = {};
        options.draggable = value !== 'false';
        this.map.setOptions(options);
        return this;
      },
      clicktozoomcontrol: function clicktozoomcontrol(value) {
        var options;
        options = {};
        options.disableDoubleClickZoom = value === 'false';
        this.map.setOptions(options);
        return this;
      },
      scrollwheelcontrol: function scrollwheelcontrol(value) {
        var options;
        options = {};
        options.scrollwheel = value !== 'false';
        this.map.setOptions(options);
        return this;
      },
      maptype: function maptype(value) {
        var options, mapStyles, mapType;
        mapStyles = this.$wrapper.find('[data-builder-field="maptheme"]').children('option').filter(':selected').data('json');
        mapType = google.maps.MapTypeId[value.toUpperCase()];
        options = {
          mapTypeId: mapType
        };

        if ($.inArray(google.maps.MapTypeId[value.toUpperCase()], ['terrain', 'roadmap']) > -1 && !!mapStyles) {
          options.styles = eval(mapStyles);
        } else {
          options.styles = false;
          this.updateControl('maptheme');
        }

        this.map.setOptions(options);
      },
      maptheme: function maptheme(value) {
        var json, mapType, options;
        mapType = google.maps.MapTypeId[this.map.getMapTypeId() === 'terrain' ? 'TERRAIN' : 'ROADMAP'];
        options = {};
        json = this.$wrapper.find('[data-builder-field="maptheme"]').children('option').filter(':selected').data('json');

        if (!json) {
          options = {
            mapTypeId: mapType,
            styles: false
          };
        } else {
          options = {
            mapTypeId: mapType,
            styles: eval(json)
          };
        }

        this.map.setOptions(options);
      }
    },
    // CONTROLS FUNCTIONS
    // -----------------------------------------------------------------------------
    updateControl: function updateControl(prop) {
      var updateFn;
      updateFn = this.updateControlValue[prop];

      if ($.isFunction(updateFn)) {
        updateFn.apply(this);
      } else {
        console.info('missing update function for', prop);
      }

      return this;
    },
    updateControlValue: {
      latlng: function latlng() {
        var center = this.map.getCenter();
        this.$wrapper.find('[data-builder-field][name="latitude"]').val(roundNumber(center.lat(), 6));
        this.$wrapper.find('[data-builder-field][name="longitude"]').val(roundNumber(center.lng(), 6));
      },
      zoomlevel: function zoomlevel() {
        var $control, level;
        level = this.map.getZoom();
        $control = this.$wrapper.find('[data-builder-field="zoomlevel"]');
        $control.children('option[value="' + level + '"]').prop('selected', true);

        if ($control.hasClass('select2-offscreen')) {
          $control.select2('val', level);
        }
      },
      maptype: function maptype() {
        var $control, mapType;
        mapType = this.map.getMapTypeId();
        $control = this.$wrapper.find('[data-builder-field="maptype"]');
        $control.children('option[value="' + mapType + '"]').prop('selected', true);

        if ($control.hasClass('select2-offscreen')) {
          $control.select2('val', mapType);
        }
      },
      maptheme: function maptheme() {
        var $control;
        $control = this.$wrapper.find('[data-builder-field="maptheme"]');
        $control.children('option[value="false"]').prop('selected', true);

        if ($control.hasClass('select2-offscreen')) {
          $control.select2('val', 'false');
        }
      }
    },
    // MARKERS FUNCTIONS
    // -----------------------------------------------------------------------------
    editMarker: function editMarker(marker) {
      this.currentMarker = marker;
      this.marker.$form.find('#MarkerLocation').val(marker.location);
      this.marker.$form.find('#MarkerTitle').val(marker.title);
      this.marker.$form.find('#MarkerDescription').val(marker.description);
      this.marker.$modal.modal('show');
    },
    removeMarker: function removeMarker(marker) {
      var i;

      marker._instance.setMap(null);

      marker._$html.remove();

      for (i = 0; i < this.markers.length; i++) {
        if (marker === this.markers[i]) {
          this.markers.splice(i, 1);
          break;
        }
      }

      if (this.markers.length === 0) {
        this.marker.$list.addClass('hidden');
      }
    },
    saveMarker: function saveMarker(marker) {
      this._geocode(marker);
    },
    removeAllMarkers: function removeAllMarkers() {
      var i = 0,
          l,
          marker;
      l = this.markers.length;

      for (; i < l; i++) {
        marker = this.markers[i];

        marker._instance.setMap(null);

        marker._$html.remove();
      }

      this.markers = [];
      this.marker.$list.addClass('hidden');
    },
    _geocode: function _geocode(marker) {
      var _self = this,
          status;

      this.geocoder.geocode({
        address: marker.location
      }, function (response, status) {
        _self._onGeocodeResult(marker, response, status);
      });
    },
    _onGeocodeResult: function _onGeocodeResult(marker, response, status) {
      var result;

      if (!response || status !== google.maps.GeocoderStatus.OK) {
        if (status == google.maps.GeocoderStatus.ZERO_RESULTS) {// show notification
        } else {
          timeouts++;

          if (timeouts > 3) {// show notification reached limit of requests
          }
        }
      } else {
        timeouts = 0;

        if (this.currentMarker) {
          this.removeMarker(this.currentMarker);
          this.currentMarker = null;
        } // grab first result of the list


        result = response[0]; // get lat & lng and set to marker

        marker.lat = Math.round(result.geometry.location.lat() * 1000000) / 1000000;
        marker.lng = Math.round(result.geometry.location.lng() * 1000000) / 1000000;
        var opts = {
          position: new google.maps.LatLng(marker.lat, marker.lng),
          map: this.map
        };

        if (marker.title.length > 0) {
          opts.title = marker.title;
        }

        if (marker.description.length > 0) {
          opts.desc = marker.description;
        }

        marker.position = opts.position;
        marker._instance = new google.maps.Marker(opts);

        if (!!marker.title || !!marker.description) {
          this._bindMarkerClick(marker);
        }

        this.markers.push(marker); // append to markers list

        this._appendMarkerToList(marker); // hide modal and reset form


        this.marker.$form.get(0).reset();
        this.marker.$modal.modal('hide');
      }
    },
    _appendMarkerToList: function _appendMarkerToList(marker) {
      var _self = this,
          html;

      html = ['<li>', '<p>{location}</p>', '<a href="#" class="location-action location-center"><i class="fas fa-map-marker-alt"></i></a>', '<a href="#" class="location-action location-edit"><i class="fas fa-edit"></i></a>', '<a href="#" class="location-action location-remove text-danger"><i class="fas fa-times"></i></a>', '</li>'].join('');
      html = html.replace(/\{location\}/, !!marker.title ? marker.title : marker.location);
      marker._$html = $(html); // events

      marker._$html.find('.location-center').on('click', function (e) {
        _self.map.setCenter(marker.position);
      });

      marker._$html.find('.location-remove').on('click', function (e) {
        e.preventDefault();

        _self.removeMarker(marker);
      });

      marker._$html.find('.location-edit').on('click', function (e) {
        e.preventDefault();

        _self.editMarker(marker);
      });

      this.marker.$list.append(marker._$html).removeClass('hidden');
    },
    _bindMarkerClick: function _bindMarkerClick(marker) {
      var _self = this,
          html;

      html = ['<div style="background-color: #FFF; color: #000; padding: 5px; width: 150px;">', '{title}', '{description}', '</div>'].join('');
      html = html.replace(/\{title\}/, !!marker.title ? "<h4>" + marker.title + "</h4>" : "");
      html = html.replace(/\{description\}/, !!marker.description ? "<p>" + marker.description + "</p>" : "");
      marker._infoWindow = new google.maps.InfoWindow({
        content: html
      });
      google.maps.event.addListener(marker._instance, 'click', function () {
        if (marker._infoWindow.isOpened) {
          marker._infoWindow.close();

          marker._infoWindow.isOpened = false;
        } else {
          marker._infoWindow.open(_self.map, this);

          marker._infoWindow.isOpened = true;
        }
      });
    },
    preview: function preview() {
      var customScript, googleScript, iframe, previewHtml;
      previewHtml = ['<style>', 'html, body { margin: 0; padding: 0; }', '</style>', '<div id="' + this.$wrapper.find('[data-builder-field="mapid"]').val() + '" style="width: 100%; height: 100%;"></div>'];
      iframe = this.$previewModal.find('iframe').get(0).contentWindow.document;
      iframe.body.innerHTML = previewHtml.join('');
      customScript = iframe.createElement('script');
      customScript.type = 'text/javascript';
      customScript.text = "window.initialize = function() { " + this.generate() + " init(); }; ";
      iframe.body.appendChild(customScript);
      googleScript = iframe.createElement('script');
      googleScript.type = 'text/javascript';
      googleScript.text = 'function loadScript() { var script = document.createElement("script"); script.type = "text/javascript"; script.src = "//maps.googleapis.com/maps/api/js?key=&sensor=&callback=initialize"; document.body.appendChild(script); } loadScript()';
      iframe.body.appendChild(googleScript);
    },
    getCode: function getCode() {
      this.$getCodeModal.find('.modal-body pre').html(this.generate().replace(/</g, '&lt;').replace(/>/g, '&gt;'));
    },
    // GENERATE CODE
    // -----------------------------------------------------------------------------
    generate: function generate() {
      var i, work;
      var output = ['    google.maps.event.addDomListener(window, "load", init);', '    var map;', '    function init() {', '        var mapOptions = {', '            center: new google.maps.LatLng({lat}, {lng}),', '            zoom: {zoom},', '            zoomControl: {zoomControl},', '            {zoomControlOptions}', '            disableDoubleClickZoom: {disableDoubleClickZoom},', '            mapTypeControl: {mapTypeControl},', '            {mapTypeControlOptions}', '            scaleControl: {scaleControl},', '            scrollwheel: {scrollwheel},', '            panControl: {panControl},', '            streetViewControl: {streetViewControl},', '            draggable : {draggable},', '            overviewMapControl: {overviewMapControl},', '            {overviewMapControlOptions}', '            mapTypeId: google.maps.MapTypeId.{mapTypeId}{styles}', '        };', '', '        var mapElement = document.getElementById("{mapid}");', '        var map = new google.maps.Map(mapElement, mapOptions);', '        {locations}', '    }'];
      output = output.join("\r\n");
      var zoomControl = this.$wrapper.find('[data-builder-field="zoomcontrol"] option:selected').val() !== 'false';
      var mapTypeControl = this.$wrapper.find('[data-builder-field="maptypecontrol"] option:selected').val() !== 'false';
      var overviewMapControl = this.$wrapper.find('[data-builder-field="overviewcontrol"] option:selected').val().toLowerCase();
      var $themeControl = this.$wrapper.find('[data-builder-field="maptheme"] option:selected').filter(':selected');
      output = output.replace(/\{mapid\}/, this.$wrapper.find('[data-builder-field="mapid"]').val()).replace(/\{lat\}/, this.$wrapper.find('[data-builder-field][name="latitude"]').val()).replace(/\{lng\}/, this.$wrapper.find('[data-builder-field][name="longitude"]').val()).replace(/\{zoom\}/, this.$wrapper.find('[data-builder-field="zoomlevel"] option:selected').val()).replace(/\{zoomControl\}/, zoomControl).replace(/\{disableDoubleClickZoom\}/, this.$wrapper.find('[data-builder-field="clicktozoomcontrol"] option:selected').val() === 'false').replace(/\{mapTypeControl\}/, mapTypeControl).replace(/\{scaleControl\}/, this.$wrapper.find('[data-builder-field="scalecontrol"] option:selected').val() !== 'false').replace(/\{scrollwheel\}/, this.$wrapper.find('[data-builder-field="scrollwheelcontrol"] option:selected').val() !== 'false').replace(/\{panControl\}/, this.$wrapper.find('[data-builder-field="pancontrol"] option:selected').val() !== 'false').replace(/\{streetViewControl\}/, this.$wrapper.find('[data-builder-field="streetviewcontrol"] option:selected').val() !== 'false').replace(/\{draggable\}/, this.$wrapper.find('[data-builder-field="draggablecontrol"] option:selected').val() !== 'false').replace(/\{overviewMapControl\}/, overviewMapControl !== 'false').replace(/\{mapTypeId\}/, this.$wrapper.find('[data-builder-field="maptype"] option:selected').val().toUpperCase());

      if (zoomControl) {
        work = {
          zoomControlOptions: {
            style: this.$wrapper.find('[data-builder-field="maptypecontrol"] option:selected').val().toUpperCase()
          }
        };
        output = output.replace(/\{zoomControlOptions\}/, "zoomControlOptions: {\r\n                style: google.maps.ZoomControlStyle." + this.$wrapper.find('[data-builder-field="zoomcontrol"] option:selected').val().toUpperCase() + "\r\n\            },");
      } else {
        output = output.replace(/\{zoomControlOptions\}/, '');
      }

      if (mapTypeControl) {
        work = {
          zoomControlOptions: {
            style: this.$wrapper.find('[data-builder-field="maptypecontrol"] option:selected').val().toUpperCase()
          }
        };
        output = output.replace(/\{mapTypeControlOptions\}/, "mapTypeControlOptions: {\r\n                style: google.maps.MapTypeControlStyle." + this.$wrapper.find('[data-builder-field="maptypecontrol"] option:selected').val().toUpperCase() + "\r\n\            },");
      } else {
        output = output.replace(/\{mapTypeControlOptions\}/, '');
      }

      if (overviewMapControl !== 'false') {
        output = output.replace(/\{overviewMapControlOptions\}/, "overviewMapControlOptions: {\r\n                opened: " + (overviewMapControl === 'opened') + "\r\n\            },");
      } else {
        output = output.replace(/\{overviewMapControlOptions\}/, '');
      }

      if ($themeControl.val() !== 'false') {
        output = output.replace(/\{styles\}/, ',\r\n            styles: ' + $themeControl.data('json').replace(/\r\n/g, ''));
      } else {
        output = output.replace(/\{styles\}/, '');
      }

      if (this.markers.length > 0) {
        var work = ['var locations = ['];
        var m, object;

        for (i = 0; i < this.markers.length; i++) {
          m = this.markers[i];
          object = '';
          object += '            { lat: ' + m.lat + ', lng: ' + m.lng;

          if (!!m.title) {
            object += ', title: "' + m.title + '"';
          }

          if (!!m.description) {
            object += ', description: "' + m.description + '"';
          }

          object += ' }';

          if (i + 1 < this.markers.length) {
            object += ',';
          }

          work.push(object);
        }

        work.push('        ];\r\n');
        work.push('        var opts = {};');
        work.push('        for (var i = 0; i < locations.length; i++) {');
        work.push('            opts.position = new google.maps.LatLng( locations[ i ].lat, locations[ i ].lng );');
        work.push('            opts.map = map;');
        work.push('            if ( !!locations[ i ] .title ) { opts.title = locations[ i ].title; }');
        work.push('            if ( !!locations[ i ] .description ) { opts.description = locations[ i ].description; }');
        work.push('            marker = new google.maps.Marker( opts );');
        work.push('');
        work.push('            (function() {');
        work.push('                var html = [');
        work.push('                	\'<div style="background-color: #FFF; color: #000; padding: 5px; width: 150px;">\',');
        work.push('                		\'{title}\',');
        work.push('                		\'{description}\',');
        work.push('                	\'</div>\'');
        work.push('                ].join(\'\');');
        work.push('');
        work.push('                html = html.replace(/\{title\}/, !!opts.title ?  ("<h4>" + opts.title + "</h4>") : "" );');
        work.push('                html = html.replace(/\{description\}/, !!opts.description ?  ("<p>" + opts.description + "</p>") : "" );');
        work.push('                var infoWindow = new google.maps.InfoWindow({ content: html });');
        work.push('                google.maps.event.addListener( marker, \'click\', function() {');
        work.push('                	if ( infoWindow.isOpened ) {');
        work.push('                		infoWindow.close();');
        work.push('                		infoWindow.isOpened = false;');
        work.push('                	} else {');
        work.push('                		infoWindow.open( map, this );');
        work.push('                		infoWindow.isOpened = true;');
        work.push('                	}');
        work.push('                });');
        work.push('            })();');
        work.push('        }');
        output = output.replace(/\{locations\}/, work.join('\r\n'));
      } else {
        output = output.replace(/\{locations\}/, '');
      }

      console.log(output);
      return output;
    }
  }; // expose

  $.extend(true, theme, {
    Maps: {
      GMapBuilder: GMapBuilder
    }
  }); // jQuery plugin

  $.fn.themeGMapBuilder = function (opts) {
    return this.map(function () {
      var $this = $(this),
          instance;
      instance = $this.data(instanceName);

      if (instance) {
        return instance;
      } else {
        return new GMapBuilder($this, opts);
      }
    });
  }; // auto initialize


  $(function () {
    $('[data-theme-gmap-builder]').each(function () {
      var $this = $(this);
      window.builder = $this.themeGMapBuilder();
    });
  });
}).apply(this, [window.theme, jQuery]); // Markdown

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__markdownEditor';

  var PluginMarkdownEditor = function PluginMarkdownEditor($el, opts) {
    return this.initialize($el, opts);
  };

  PluginMarkdownEditor.defaults = {
    iconlibrary: 'fa',
    buttons: [[{
      data: [{
        icon: {
          fa: 'fa fa-bold'
        }
      }, {
        icon: {
          fa: 'fa fa-italic'
        }
      }, {
        icon: {
          fa: 'fa fa-heading'
        }
      }]
    }, {
      data: [{
        icon: {
          fa: 'fa fa-link'
        }
      }, {
        icon: {
          fa: 'fa fa-image'
        }
      }]
    }, {
      data: [{
        icon: {
          fa: 'fa fa-list'
        }
      }, {
        icon: {
          fa: 'fa fa-list-ol'
        }
      }, {
        icon: {
          fa: 'fa fa-code'
        }
      }, {
        icon: {
          fa: 'fa fa-quote-left'
        }
      }]
    }, {
      data: [{
        icon: {
          fa: 'fa fa-search'
        }
      }]
    }]]
  };
  PluginMarkdownEditor.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginMarkdownEditor.defaults, opts);
      return this;
    },
    build: function build() {
      this.$el.markdown(this.options);
      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    PluginMarkdownEditor: PluginMarkdownEditor
  }); // jquery plugin

  $.fn.themePluginMarkdownEditor = function (opts) {
    return this.each(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginMarkdownEditor($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Masked Input

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__maskedInput';

  var PluginMaskedInput = function PluginMaskedInput($el, opts) {
    return this.initialize($el, opts);
  };

  PluginMaskedInput.defaults = {};
  PluginMaskedInput.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginMaskedInput.defaults, opts);
      return this;
    },
    build: function build() {
      this.$el.mask(this.$el.data('input-mask'), this.options);
      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    PluginMaskedInput: PluginMaskedInput
  }); // jquery plugin

  $.fn.themePluginMaskedInput = function (opts) {
    return this.each(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginMaskedInput($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // MaxLength

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__maxlength';

  var PluginMaxLength = function PluginMaxLength($el, opts) {
    return this.initialize($el, opts);
  };

  PluginMaxLength.defaults = {
    alwaysShow: true,
    placement: 'bottom-left',
    warningClass: 'badge badge-success bottom-left',
    limitReachedClass: 'badge badge-danger bottom-left'
  };
  PluginMaxLength.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginMaxLength.defaults, opts);
      return this;
    },
    build: function build() {
      this.$el.maxlength(this.options);
      this.$el.on('blur', function () {
        $('.bootstrap-maxlength').remove();
      });
      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    PluginMaxLength: PluginMaxLength
  }); // jquery plugin

  $.fn.themePluginMaxLength = function (opts) {
    return this.each(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginMaxLength($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // MultiSelect

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__multiselect';

  var PluginMultiSelect = function PluginMultiSelect($el, opts) {
    return this.initialize($el, opts);
  };

  PluginMultiSelect.defaults = {
    templates: {
      li: '<li><a class="dropdown-item" tabindex="0"><label style="display: block;"></label></a></li>',
      filter: '<div class="input-group"><span class="input-group-prepend"><span class="input-group-text"><i class="fas fa-search"></i></span></span><input class="form-control multiselect-search" type="text"></div>'
    }
  };
  PluginMultiSelect.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginMultiSelect.defaults, opts);
      return this;
    },
    build: function build() {
      this.$el.multiselect(this.options);
      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    PluginMultiSelect: PluginMultiSelect
  }); // jquery plugin

  $.fn.themePluginMultiSelect = function (opts) {
    return this.each(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginMultiSelect($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Notifications - Config

(function ($) {
  'use strict'; // use font awesome icons if available

  if (typeof PNotify != 'undefined') {
    PNotify.prototype.options.styling = "fontawesome";
    $.extend(true, PNotify.prototype.options, {
      shadow: false,
      stack: {
        spacing1: 15,
        spacing2: 15
      }
    });
    $.extend(PNotify.styling.fontawesome, {
      // classes
      container: "notification",
      notice: "notification-warning",
      info: "notification-info",
      success: "notification-success",
      error: "notification-danger",
      // icons
      notice_icon: "fas fa-exclamation",
      info_icon: "fas fa-info",
      success_icon: "fas fa-check",
      error_icon: "fas fa-times"
    });
  }
}).apply(this, [jQuery]); // Portlets

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__portlet',
      storageOrderKey = '__portletOrder',
      storageStateKey = '__portletState';

  var PluginPortlet = function PluginPortlet($el, opts) {
    return this.initialize($el, opts);
  };

  PluginPortlet.defaults = {
    connectWith: '[data-plugin-portlet]',
    items: '[data-portlet-item]',
    handle: '.portlet-handler',
    opacity: 0.7,
    placeholder: 'portlet-placeholder',
    cancel: 'portlet-cancel',
    forcePlaceholderSize: true,
    forceHelperSize: true,
    tolerance: 'pointer',
    helper: 'original',
    revert: 200
  };
  PluginPortlet.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      var _self = this;

      this.options = $.extend(true, {}, PluginPortlet.defaults, opts, {
        wrapper: this.$el,
        update: _self.onUpdate,
        create: _self.onLoad
      });
      return this;
    },
    onUpdate: function onUpdate(event, ui) {
      var key = storageOrderKey,
          data = store.get(key),
          $this = $(this),
          porletId = $this.prop('id');

      if (!data) {
        data = {};
      }

      if (!!porletId) {
        data[porletId] = $this.sortable('toArray');
        store.set(key, data);
      }
    },
    onLoad: function onLoad(event, ui) {
      var key = storageOrderKey,
          data = store.get(key),
          $this = $(this),
          porletId = $this.prop('id'),
          portlet = $('#' + porletId);

      if (!!data) {
        var cards = data[porletId];

        if (!!cards) {
          $.each(cards, function (index, panelId) {
            $('#' + panelId).appendTo(portlet);
          });
        }
      }
    },
    saveState: function saveState(panel) {
      var key = storageStateKey,
          data = store.get(key),
          panelId = panel.prop('id');

      if (!data) {
        data = {};
      }

      if (!panelId) {
        return this;
      }

      var collapse = panel.find('.card-actions').children('a.fa-caret-up, a.fa-caret-down'),
          isCollapsed = !!collapse.hasClass('fa-caret-up'),
          isRemoved = !panel.closest('body').get(0);

      if (isRemoved) {
        data[panelId] = 'removed';
      } else if (isCollapsed) {
        data[panelId] = 'collapsed';
      } else {
        delete data[panelId];
      }

      store.set(key, data);
      return this;
    },
    loadState: function loadState() {
      var key = storageStateKey,
          data = store.get(key);

      if (!!data) {
        $.each(data, function (panelId, state) {
          var panel = $('#' + panelId);

          if (!panel.data('portlet-state-loaded')) {
            if (state == 'collapsed') {
              panel.find('.card-actions a.fa-caret-down').trigger('click');
            } else if (state == 'removed') {
              panel.find('.card-actions a.fa-times').trigger('click');
            }

            panel.data('portlet-state-loaded', true);
          }
        });
      }

      return this;
    },
    build: function build() {
      var _self = this;

      if ($.isFunction($.fn.sortable)) {
        this.$el.sortable(this.options);
        this.$el.find('[data-portlet-item]').each(function () {
          _self.events($(this));
        });
      }

      var portlet = this.$el;
      portlet.css('min-height', 150);
      return this;
    },
    events: function events($el) {
      var _self = this,
          portlet = $el.closest('[data-plugin-portlet]');

      this.loadState();
      $el.find('.card-actions').on('click', 'a.fa-caret-up, a.fa-caret-down, a.fa-times', function (e) {
        setTimeout(function () {
          _self.saveState($el);
        }, 250);
      });
      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    PluginPortlet: PluginPortlet
  }); // jquery plugin

  $.fn.themePluginPortlet = function (opts) {
    return this.map(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginPortlet($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Scroll to Top

(function (theme, $) {
  theme = theme || {};
  $.extend(theme, {
    PluginScrollToTop: {
      defaults: {
        wrapper: $('body'),
        offset: 150,
        buttonClass: 'scroll-to-top',
        iconClass: 'fas fa-chevron-up',
        delay: 500,
        visibleMobile: false,
        label: false
      },
      initialize: function initialize(opts) {
        initialized = true;
        this.setOptions(opts).build().events();
        return this;
      },
      setOptions: function setOptions(opts) {
        this.options = $.extend(true, {}, this.defaults, opts);
        return this;
      },
      build: function build() {
        var self = this,
            $el; // Base HTML Markup

        $el = $('<a />').addClass(self.options.buttonClass).attr({
          'href': '#'
        }).append($('<i />').addClass(self.options.iconClass)); // Visible Mobile

        if (!self.options.visibleMobile) {
          $el.addClass('hidden-mobile');
        } // Label


        if (self.options.label) {
          $el.append($('<span />').html(self.options.label));
        }

        this.options.wrapper.append($el);
        this.$el = $el;
        return this;
      },
      events: function events() {
        var self = this,
            _isScrolling = false; // Click Element Action

        self.$el.on('click', function (e) {
          e.preventDefault();
          $('body, html').animate({
            scrollTop: 0
          }, self.options.delay);
          return false;
        }); // Show/Hide Button on Window Scroll event.

        $(window).scroll(function () {
          if (!_isScrolling) {
            _isScrolling = true;

            if ($(window).scrollTop() > self.options.offset) {
              self.$el.stop(true, true).addClass('visible');
              _isScrolling = false;
            } else {
              self.$el.stop(true, true).removeClass('visible');
              _isScrolling = false;
            }
          }
        });
        return this;
      }
    }
  });
}).apply(this, [window.theme, jQuery]); // Scrollable

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__scrollable';

  var PluginScrollable = function PluginScrollable($el, opts) {
    return this.initialize($el, opts);
  };

  PluginScrollable.updateModals = function () {
    PluginScrollable.updateBootstrapModal();
  };

  PluginScrollable.updateBootstrapModal = function () {
    var updateBoostrapModal;
    updateBoostrapModal = typeof $.fn.modal !== 'undefined';
    updateBoostrapModal = updateBoostrapModal && typeof $.fn.modal.Constructor !== 'undefined';
    updateBoostrapModal = updateBoostrapModal && typeof $.fn.modal.Constructor.prototype !== 'undefined';
    updateBoostrapModal = updateBoostrapModal && typeof $.fn.modal.Constructor.prototype.enforceFocus !== 'undefined';

    if (!updateBoostrapModal) {
      return false;
    }

    var originalFocus = $.fn.modal.Constructor.prototype.enforceFocus;

    $.fn.modal.Constructor.prototype.enforceFocus = function () {
      originalFocus.apply(this);
      var $scrollable = this.$element.find('.scrollable');

      if ($scrollable) {
        if ($.isFunction($.fn['themePluginScrollable'])) {
          $scrollable.themePluginScrollable();
        }

        if ($.isFunction($.fn['nanoScroller'])) {
          $scrollable.nanoScroller();
        }
      }
    };
  };

  PluginScrollable.defaults = {
    contentClass: 'scrollable-content',
    paneClass: 'scrollable-pane',
    sliderClass: 'scrollable-slider',
    alwaysVisible: true,
    preventPageScrolling: true
  };
  PluginScrollable.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginScrollable.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      this.options.wrapper.nanoScroller(this.options);
      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    PluginScrollable: PluginScrollable
  }); // jquery plugin

  $.fn.themePluginScrollable = function (opts) {
    return this.each(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginScrollable($this, opts);
      }
    });
  };

  $(function () {
    PluginScrollable.updateModals();
  });
}).apply(this, [window.theme, jQuery]); // Select2

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__select2';

  var PluginSelect2 = function PluginSelect2($el, opts) {
    return this.initialize($el, opts);
  };

  PluginSelect2.defaults = {
    theme: 'bootstrap'
  };
  PluginSelect2.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginSelect2.defaults, opts);
      return this;
    },
    build: function build() {
      this.$el.select2(this.options);
      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    PluginSelect2: PluginSelect2
  }); // jquery plugin

  $.fn.themePluginSelect2 = function (opts) {
    return this.each(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginSelect2($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Slider

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__slider';

  var PluginSlider = function PluginSlider($el, opts) {
    return this.initialize($el, opts);
  };

  PluginSlider.defaults = {};
  PluginSlider.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el;
      this.setVars().setData().setOptions(opts).build();
      return this;
    },
    setVars: function setVars() {
      var $output = $(this.$el.data('plugin-slider-output'));
      this.$output = $output.get(0) ? $output : null;
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      var _self = this;

      this.options = $.extend(true, {}, PluginSlider.defaults, opts);

      if (this.$output) {
        $.extend(this.options, {
          slide: function slide(event, ui) {
            _self.onSlide(event, ui);
          }
        });
      }

      return this;
    },
    build: function build() {
      this.$el.slider(this.options);
      return this;
    },
    onSlide: function onSlide(event, ui) {
      if (!ui.values) {
        this.$output.val(ui.value);
      } else {
        this.$output.val(ui.values[0] + '/' + ui.values[1]);
      }

      this.$output.trigger('change');
    }
  }; // expose to scope

  $.extend(theme, {
    PluginSlider: PluginSlider
  }); // jquery plugin

  $.fn.themePluginSlider = function (opts) {
    return this.each(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginSlider($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Spinner

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__spinner';

  var PluginSpinner = function PluginSpinner($el, opts) {
    return this.initialize($el, opts);
  };

  PluginSpinner.defaults = {};
  PluginSpinner.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginSpinner.defaults, opts);
      return this;
    },
    build: function build() {
      this.$el.spinner(this.options);
      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    PluginSpinner: PluginSpinner
  }); // jquery plugin

  $.fn.themePluginSpinner = function (opts) {
    return this.each(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginSpinner($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // SummerNote

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__summernote';

  var PluginSummerNote = function PluginSummerNote($el, opts) {
    return this.initialize($el, opts);
  };

  PluginSummerNote.defaults = {
    onfocus: function onfocus() {
      $(this).closest('.note-editor').addClass('active');
    },
    onblur: function onblur() {
      $(this).closest('.note-editor').removeClass('active');
    }
  };
  PluginSummerNote.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginSummerNote.defaults, opts);
      return this;
    },
    build: function build() {
      this.$el.summernote(this.options);
      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    PluginSummerNote: PluginSummerNote
  }); // jquery plugin

  $.fn.themePluginSummerNote = function (opts) {
    return this.each(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginSummerNote($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // TextArea AutoSize

(function (theme, $) {
  theme = theme || {};
  var initialized = false;
  var instanceName = '__textareaAutosize';

  var PluginTextAreaAutoSize = function PluginTextAreaAutoSize($el, opts) {
    return this.initialize($el, opts);
  };

  PluginTextAreaAutoSize.defaults = {};
  PluginTextAreaAutoSize.prototype = {
    initialize: function initialize($el, opts) {
      if (initialized) {
        return this;
      }

      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginTextAreaAutoSize.defaults, opts);
      return this;
    },
    build: function build() {
      autosize($(this.$el));
      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    PluginTextAreaAutoSize: PluginTextAreaAutoSize
  }); // jquery plugin

  $.fn.themePluginTextAreaAutoSize = function (opts) {
    return this.each(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginTextAreaAutoSize($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // TimePicker

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__timepicker';

  var PluginTimePicker = function PluginTimePicker($el, opts) {
    return this.initialize($el, opts);
  };

  PluginTimePicker.defaults = {
    disableMousewheel: true,
    icons: {
      up: 'fas fa-chevron-up',
      down: 'fas fa-chevron-down'
    }
  };
  PluginTimePicker.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginTimePicker.defaults, opts);
      return this;
    },
    build: function build() {
      this.$el.timepicker(this.options);
      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    PluginTimePicker: PluginTimePicker
  }); // jquery plugin

  $.fn.themePluginTimePicker = function (opts) {
    return this.each(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginTimePicker($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Toggle

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__toggle';

  var PluginToggle = function PluginToggle($el, opts) {
    return this.initialize($el, opts);
  };

  PluginToggle.defaults = {
    duration: 350,
    isAccordion: false,
    addIcons: true
  };
  PluginToggle.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginToggle.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      var self = this,
          $wrapper = this.options.wrapper,
          $items = $wrapper.find('.toggle'),
          $el = null;
      $items.each(function () {
        $el = $(this);

        if (self.options.addIcons) {
          $el.find('> label').prepend($('<i />').addClass('fas fa-plus'), $('<i />').addClass('fas fa-minus'));
        }

        if ($el.hasClass('active')) {
          $el.find('> p').addClass('preview-active');
          $el.find('> .toggle-content').slideDown(self.options.duration);
        }

        self.events($el);
      });

      if (self.options.isAccordion) {
        self.options.duration = self.options.duration / 2;
      }

      return this;
    },
    events: function events($el) {
      var self = this,
          previewParCurrentHeight = 0,
          previewParAnimateHeight = 0,
          toggleContent = null;
      $el.find('> label').click(function (e) {
        var $this = $(this),
            parentSection = $this.parent(),
            parentWrapper = $this.parents('.toggle'),
            previewPar = null,
            closeElement = null;

        if (self.options.isAccordion && typeof e.originalEvent != 'undefined') {
          closeElement = parentWrapper.find('.toggle.active > label');

          if (closeElement[0] == $this[0]) {
            return;
          }
        }

        parentSection.toggleClass('active'); // Preview Paragraph

        if (parentSection.find('> p').get(0)) {
          previewPar = parentSection.find('> p');
          previewParCurrentHeight = previewPar.css('height');
          previewPar.css('height', 'auto');
          previewParAnimateHeight = previewPar.css('height');
          previewPar.css('height', previewParCurrentHeight);
        } // Content


        toggleContent = parentSection.find('> .toggle-content');

        if (parentSection.hasClass('active')) {
          $(previewPar).animate({
            height: previewParAnimateHeight
          }, self.options.duration, function () {
            $(this).addClass('preview-active');
          });
          toggleContent.slideDown(self.options.duration, function () {
            if (closeElement) {
              closeElement.trigger('click');
            }
          });
        } else {
          $(previewPar).animate({
            height: 0
          }, self.options.duration, function () {
            $(this).removeClass('preview-active');
          });
          toggleContent.slideUp(self.options.duration);
        }
      });
    }
  }; // expose to scope

  $.extend(theme, {
    PluginToggle: PluginToggle
  }); // jquery plugin

  $.fn.themePluginToggle = function (opts) {
    return this.map(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginToggle($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Widget - Todo

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__widgetTodoList';

  var WidgetTodoList = function WidgetTodoList($el, opts) {
    return this.initialize($el, opts);
  };

  WidgetTodoList.defaults = {};
  WidgetTodoList.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el;
      this.setData().setOptions(opts).build().events();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, WidgetTodoList.defaults, opts);
      return this;
    },
    check: function check(input, label) {
      if (input.is(':checked')) {
        label.addClass('line-through');
      } else {
        label.removeClass('line-through');
      }
    },
    build: function build() {
      var _self = this,
          $check = this.$el.find('.todo-check');

      $check.each(function () {
        var label = $(this).closest('li').find('.todo-label');

        _self.check($(this), label);
      });
      return this;
    },
    events: function events() {
      var _self = this,
          $remove = this.$el.find('.todo-remove'),
          $check = this.$el.find('.todo-check'),
          $window = $(window);

      $remove.on('click.widget-todo-list', function (ev) {
        ev.preventDefault();
        $(this).closest("li").remove();
      });
      $check.on('change', function () {
        var label = $(this).closest('li').find('.todo-label');

        _self.check($(this), label);
      });

      if ($.isFunction($.fn.sortable)) {
        this.$el.sortable({
          sort: function sort(event, ui) {
            var top = event.pageY - _self.$el.offset().top - ui.helper.outerHeight(true) / 2;
            ui.helper.css({
              'top': top + 'px'
            });
          }
        });
      }

      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    WidgetTodoList: WidgetTodoList
  }); // jquery plugin

  $.fn.themePluginWidgetTodoList = function (opts) {
    return this.each(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new WidgetTodoList($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Widget - Toggle

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__widgetToggleExpand';

  var WidgetToggleExpand = function WidgetToggleExpand($el, opts) {
    return this.initialize($el, opts);
  };

  WidgetToggleExpand.defaults = {};
  WidgetToggleExpand.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el;
      this.setData().setOptions(opts).build().events();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, WidgetToggleExpand.defaults, opts);
      return this;
    },
    build: function build() {
      return this;
    },
    events: function events() {
      var _self = this,
          $toggler = this.$el.find('.widget-toggle');

      $toggler.on('click.widget-toggler', function () {
        _self.$el.hasClass('widget-collapsed') ? _self.expand(_self.$el) : _self.collapse(_self.$el);
      });
      return this;
    },
    expand: function expand(content) {
      content.children('.widget-content-expanded').slideDown('fast', function () {
        $(this).css('display', '');
        content.removeClass('widget-collapsed');
      });
    },
    collapse: function collapse(content) {
      content.children('.widget-content-expanded').slideUp('fast', function () {
        content.addClass('widget-collapsed');
        $(this).css('display', '');
      });
    }
  }; // expose to scope

  $.extend(theme, {
    WidgetToggleExpand: WidgetToggleExpand
  }); // jquery plugin

  $.fn.themePluginWidgetToggleExpand = function (opts) {
    return this.each(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new WidgetToggleExpand($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Word Rotator

(function (theme, $) {
  theme = theme || {};
  var instanceName = '__wordRotator';

  var PluginWordRotator = function PluginWordRotator($el, opts) {
    return this.initialize($el, opts);
  };

  PluginWordRotator.defaults = {
    delay: 2000
  };
  PluginWordRotator.prototype = {
    initialize: function initialize($el, opts) {
      if ($el.data(instanceName)) {
        return this;
      }

      this.$el = $el;
      this.setData().setOptions(opts).build();
      return this;
    },
    setData: function setData() {
      this.$el.data(instanceName, this);
      return this;
    },
    setOptions: function setOptions(opts) {
      this.options = $.extend(true, {}, PluginWordRotator.defaults, opts, {
        wrapper: this.$el
      });
      return this;
    },
    build: function build() {
      var $el = this.options.wrapper,
          itemsWrapper = $el.find(".wort-rotator-items"),
          items = itemsWrapper.find("> span"),
          firstItem = items.eq(0),
          firstItemClone = firstItem.clone(),
          itemHeight = firstItem.height(),
          currentItem = 1,
          currentTop = 0;
      itemsWrapper.append(firstItemClone);
      $el.height(itemHeight).addClass("active");
      setInterval(function () {
        currentTop = currentItem * itemHeight;
        itemsWrapper.animate({
          top: -currentTop + "px"
        }, 300, function () {
          currentItem++;

          if (currentItem > items.length) {
            itemsWrapper.css("top", 0);
            currentItem = 1;
          }
        });
      }, this.options.delay);
      return this;
    }
  }; // expose to scope

  $.extend(theme, {
    PluginWordRotator: PluginWordRotator
  }); // jquery plugin

  $.fn.themePluginWordRotator = function (opts) {
    return this.each(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new PluginWordRotator($this, opts);
      }
    });
  };
}).apply(this, [window.theme, jQuery]); // Navigation

(function ($) {
  'use strict';

  var $items = $('.nav-main li.nav-parent');

  function expand($li) {
    $li.children('ul.nav-children').slideDown('fast', function () {
      $li.addClass('nav-expanded');
      $(this).css('display', '');
      ensureVisible($li);
    });
  }

  function collapse($li) {
    $li.children('ul.nav-children').slideUp('fast', function () {
      $(this).css('display', '');
      $li.removeClass('nav-expanded');
    });
  }

  function ensureVisible($li) {
    var scroller = $li.offsetParent();

    if (!scroller.get(0)) {
      return false;
    }

    var top = $li.position().top;

    if (top < 0) {
      scroller.animate({
        scrollTop: scroller.scrollTop() + top
      }, 'fast');
    }
  }

  function buildSidebarNav(anchor, prev, next, ev) {
    if (anchor.prop('href')) {
      var arrowWidth = parseInt(window.getComputedStyle(anchor.get(0), ':after').width, 10) || 0;

      if (ev.offsetX > anchor.get(0).offsetWidth - arrowWidth) {
        ev.preventDefault();
      }
    }

    if (prev.get(0) !== next.get(0)) {
      collapse(prev);
      expand(next);
    } else {
      collapse(prev);
    }
  }

  $items.find('> a').on('click', function (ev) {
    var $html = $('html'),
        $window = $(window),
        $anchor = $(this),
        $prev = $anchor.closest('ul.nav').find('> li.nav-expanded'),
        $next = $anchor.closest('li'),
        $ev = ev;

    if ($anchor.attr('href') == '#') {
      ev.preventDefault();
    }

    if (!$html.hasClass('sidebar-left-big-icons')) {
      buildSidebarNav($anchor, $prev, $next, $ev);
    } else if ($html.hasClass('sidebar-left-big-icons') && $window.width() < 768) {
      buildSidebarNav($anchor, $prev, $next, $ev);
    }
  }); // Chrome Fix

  $.browser.chrome = /chrom(e|ium)/.test(navigator.userAgent.toLowerCase());

  if ($.browser.chrome && !$.browser.mobile) {
    var flag = true;
    $('.sidebar-left .nav-main li a').on('click', function () {
      flag = false;
      setTimeout(function () {
        flag = true;
      }, 200);
    });
    $('.nano').on('mouseenter', function (e) {
      $(this).addClass('hovered');
    });
    $('.nano').on('mouseleave', function (e) {
      if (flag) {
        $(this).removeClass('hovered');
      }
    });
  }

  $('.nav-main a').filter(':not([href])').attr('href', '#');
}).apply(this, [jQuery]); // Skeleton

(function (theme, $) {
  'use strict';

  theme = theme || {};
  var $body = $('body'),
      $html = $('html'),
      $window = $(window),
      isAndroid = navigator.userAgent.toLowerCase().indexOf('android') > -1,
      isIpad = navigator.userAgent.match(/iPad/i) != null,
      updatingNanoScroll = false; // mobile devices with fixed has a lot of issues when focus inputs and others...

  if (typeof $.browser !== 'undefined' && $.browser.mobile && $html.hasClass('fixed')) {
    $html.removeClass('fixed').addClass('scroll');
  }

  var Skeleton = {
    options: {
      sidebars: {
        menu: '#content-menu',
        left: '#sidebar-left',
        right: '#sidebar-right'
      }
    },
    customScroll: !Modernizr.overflowscrolling && !isAndroid && $.fn.nanoScroller !== 'undefined',
    initialize: function initialize() {
      this.setVars().build().events();
    },
    setVars: function setVars() {
      this.sidebars = {};
      this.sidebars.left = {
        $el: $(this.options.sidebars.left)
      };
      this.sidebars.right = {
        $el: $(this.options.sidebars.right),
        isOpened: $html.hasClass('sidebar-right-opened')
      };
      this.sidebars.menu = {
        $el: $(this.options.sidebars.menu),
        isOpened: $html.hasClass('inner-menu-opened')
      };
      return this;
    },
    build: function build() {
      if (typeof $.browser !== 'undefined' && $.browser.mobile) {
        $html.addClass('mobile-device');
      } else {
        $html.addClass('no-mobile-device');
      }

      $html.addClass('custom-scroll');

      if (this.customScroll) {
        this.buildSidebarLeft();
        this.buildContentMenu();
      }

      if (isIpad) {
        this.fixIpad();
      }

      this.buildSidebarRight();
      return this;
    },
    events: function events() {
      if (this.customScroll) {
        this.eventsSidebarLeft();
      }

      this.eventsSidebarRight();
      this.eventsContentMenu();

      if (typeof $.browser !== 'undefined' && !this.customScroll && isAndroid) {
        this.fixScroll();
      }

      return this;
    },
    fixScroll: function fixScroll() {
      var _self = this;

      $window.on('sidebar-left-opened sidebar-right-toggle', function (e, data) {
        _self.preventBodyScrollToggle(data.added);
      });
    },
    fixIpad: function fixIpad() {
      var _self = this;

      $('.header, .page-header, .content-body').on('click', function () {
        $html.removeClass('sidebar-left-opened');
      });
    },
    buildSidebarLeft: function buildSidebarLeft() {
      var initialPosition = 0;
      this.sidebars.left.isOpened = !$html.hasClass('sidebar-left-collapsed') || $html.hasClass('sidebar-left-opened');
      this.sidebars.left.$nano = this.sidebars.left.$el.find('.nano');

      if (typeof localStorage !== 'undefined') {
        this.sidebars.left.$nano.on('update', function (e, values) {
          localStorage.setItem('sidebar-left-position', values.position);
        });

        if (localStorage.getItem('sidebar-left-position') !== null) {
          initialPosition = localStorage.getItem('sidebar-left-position');
          this.sidebars.left.$el.find('.nano-content').scrollTop(initialPosition);
        }
      }

      this.sidebars.left.$nano.nanoScroller({
        scrollTop: initialPosition,
        alwaysVisible: true,
        preventPageScrolling: $html.hasClass('fixed')
      });
      return this;
    },
    eventsSidebarLeft: function eventsSidebarLeft() {
      var _self = this,
          $nano = this.sidebars.left.$nano;

      var open = function open() {
        if (_self.sidebars.left.isOpened) {
          return close();
        }

        _self.sidebars.left.isOpened = true;
        $html.addClass('sidebar-left-opened');
        $window.trigger('sidebar-left-toggle', {
          added: true,
          removed: false
        });
        $html.on('click.close-left-sidebar', function (e) {
          e.stopPropagation();
          close(e);
        });
      };

      var close = function close(e) {
        if (!!e && !!e.target && ($(e.target).closest('.sidebar-left').get(0) || !$(e.target).closest('html').get(0))) {
          e.preventDefault();
          return false;
        } else {
          $html.removeClass('sidebar-left-opened');
          $html.off('click.close-left-sidebar');
          $window.trigger('sidebar-left-toggle', {
            added: false,
            removed: true
          });
          _self.sidebars.left.isOpened = !$html.hasClass('sidebar-left-collapsed');
        }
      };

      var updateNanoScroll = function updateNanoScroll() {
        if (updatingNanoScroll) {
          if ($.support.transition) {
            $nano.nanoScroller();
            $nano.one('bsTransitionEnd', updateNanoScroll).emulateTransitionEnd(150);
          } else {
            updateNanoScroll();
          }

          updatingNanoScroll = true;
          setTimeout(function () {
            updatingNanoScroll = false;
          }, 200);
        }
      };

      var isToggler = function isToggler(element) {
        return $(element).data('fire-event') === 'sidebar-left-toggle' || $(element).parents().data('fire-event') === 'sidebar-left-toggle';
      };

      this.sidebars.left.$el.on('click', function () {
        updateNanoScroll();
      }).on('touchend', function (e) {
        _self.sidebars.left.isOpened = !$html.hasClass('sidebar-left-collapsed') || $html.hasClass('sidebar-left-opened');

        if (!_self.sidebars.left.isOpened && !isToggler(e.target)) {
          e.stopPropagation();
          e.preventDefault();
          open();
        }
      });
      $nano.on('mouseenter', function () {
        if ($html.hasClass('sidebar-left-collapsed')) {
          $nano.nanoScroller();
        }
      }).on('mouseleave', function () {
        if ($html.hasClass('sidebar-left-collapsed')) {
          $nano.nanoScroller();
        }
      });
      $window.on('sidebar-left-toggle', function (e, toggle) {
        if (toggle.removed) {
          $html.removeClass('sidebar-left-opened');
          $html.off('click.close-left-sidebar');
        } // Recalculate Owl Carousel sizes


        $('.owl-carousel').trigger('refresh.owl.carousel');
      });
      return this;
    },
    buildSidebarRight: function buildSidebarRight() {
      this.sidebars.right.isOpened = $html.hasClass('sidebar-right-opened');

      if (this.customScroll) {
        this.sidebars.right.$nano = this.sidebars.right.$el.find('.nano');
        this.sidebars.right.$nano.nanoScroller({
          alwaysVisible: true,
          preventPageScrolling: true
        });
      }

      return this;
    },
    eventsSidebarRight: function eventsSidebarRight() {
      var _self = this;

      var open = function open() {
        if (_self.sidebars.right.isOpened) {
          return close();
        }

        _self.sidebars.right.isOpened = true;
        $html.addClass('sidebar-right-opened');
        $window.trigger('sidebar-right-toggle', {
          added: true,
          removed: false
        });
        $html.on('click.close-right-sidebar', function (e) {
          e.stopPropagation();
          close(e);
        });
      };

      var close = function close(e) {
        if (!!e && !!e.target && ($(e.target).closest('.sidebar-right').get(0) || !$(e.target).closest('html').get(0))) {
          return false;
        }

        $html.removeClass('sidebar-right-opened');
        $html.off('click.close-right-sidebar');
        $window.trigger('sidebar-right-toggle', {
          added: false,
          removed: true
        });
        _self.sidebars.right.isOpened = false;
      };

      var bind = function bind() {
        $('[data-open="sidebar-right"]').on('click', function (e) {
          var $el = $(this);
          e.stopPropagation();
          if ($el.is('a')) e.preventDefault();
          open();
        });
      };

      this.sidebars.right.$el.find('.mobile-close').on('click', function (e) {
        e.preventDefault();
        $html.trigger('click.close-right-sidebar');
      });
      bind();
      return this;
    },
    buildContentMenu: function buildContentMenu() {
      if (!$html.hasClass('fixed')) {
        return false;
      }

      this.sidebars.menu.$nano = this.sidebars.menu.$el.find('.nano');
      this.sidebars.menu.$nano.nanoScroller({
        alwaysVisible: true,
        preventPageScrolling: true
      });
      return this;
    },
    eventsContentMenu: function eventsContentMenu() {
      var _self = this;

      var open = function open() {
        if (_self.sidebars.menu.isOpened) {
          return close();
        }

        _self.sidebars.menu.isOpened = true;
        $html.addClass('inner-menu-opened');
        $window.trigger('inner-menu-toggle', {
          added: true,
          removed: false
        });
        $html.on('click.close-inner-menu', function (e) {
          close(e);
        });
      };

      var close = function close(e) {
        var hasEvent, hasTarget, isCollapseButton, isInsideModal, isInsideInnerMenu, isInsideHTML, $target;
        hasEvent = !!e;
        hasTarget = hasEvent && !!e.target;

        if (hasTarget) {
          $target = $(e.target);
        }

        isCollapseButton = hasTarget && !!$target.closest('.inner-menu-collapse').get(0);
        isInsideModal = hasTarget && !!$target.closest('.mfp-wrap').get(0);
        isInsideInnerMenu = hasTarget && !!$target.closest('.inner-menu').get(0);
        isInsideHTML = hasTarget && !!$target.closest('html').get(0);

        if (!isCollapseButton && (isInsideInnerMenu || !isInsideHTML) || isInsideModal) {
          return false;
        }

        e.stopPropagation();
        $html.removeClass('inner-menu-opened');
        $html.off('click.close-inner-menu');
        $window.trigger('inner-menu-toggle', {
          added: false,
          removed: true
        });
        _self.sidebars.menu.isOpened = false;
      };

      var bind = function bind() {
        $('[data-open="inner-menu"]').on('click', function (e) {
          var $el = $(this);
          e.stopPropagation();
          if ($el.is('a')) e.preventDefault();
          open();
        });
      };

      bind();
      /* Nano Scroll */

      if ($html.hasClass('fixed')) {
        var $nano = this.sidebars.menu.$nano;

        var updateNanoScroll = function updateNanoScroll() {
          if ($.support.transition) {
            $nano.nanoScroller();
            $nano.one('bsTransitionEnd', updateNanoScroll).emulateTransitionEnd(150);
          } else {
            updateNanoScroll();
          }
        };

        this.sidebars.menu.$el.on('click', function () {
          updateNanoScroll();
        });
      }

      return this;
    },
    preventBodyScrollToggle: function preventBodyScrollToggle(shouldPrevent, $el) {
      setTimeout(function () {
        if (shouldPrevent) {
          $body.data('scrollTop', $body.get(0).scrollTop).css({
            position: 'fixed',
            top: $body.get(0).scrollTop * -1
          });
        } else {
          $body.css({
            position: '',
            top: ''
          }).scrollTop($body.data('scrollTop'));
        }
      }, 150);
    }
  }; // expose to scope

  $.extend(theme, {
    Skeleton: Skeleton
  });
}).apply(this, [window.theme, jQuery]); // Tab Navigation

(function ($) {
  'use strict';

  if ($('html.has-tab-navigation').get(0)) {
    var $window = $(window),
        $toggleMenuButton = $('.toggle-menu'),
        $navActive = $('.tab-navigation nav > ul .nav-active'),
        $tabNav = $('.tab-navigation'),
        $tabItem = $('.tab-navigation nav > ul > li a'),
        $contentBody = $('.content-body');
    $tabItem.on('click', function (e) {
      if ($(this).parent().hasClass('dropdown') || $(this).parent().hasClass('dropdown-submenu')) {
        if ($window.width() < 992) {
          if ($(this).parent().hasClass('nav-expanded')) {
            $(this).closest('li').find('> ul').slideUp('fast', function () {
              $(this).css('display', '');
              $(this).closest('li').removeClass('nav-expanded');
            });
          } else {
            if ($(this).parent().hasClass('dropdown')) {
              $tabItem.parent().removeClass('nav-expanded');
            }

            $(this).parent().addClass('expanding');
            $(this).closest('li').find('> ul').slideDown('fast', function () {
              $tabItem.parent().removeClass('expanding');
              $(this).closest('li').addClass('nav-expanded');
              $(this).css('display', '');

              if ($(this).position().top + $(this).height() < $window.scrollTop()) {
                $('html,body').animate({
                  scrollTop: $(this).offset().top - 100
                }, 300);
              }
            });
          }
        } else {
          if (!$(this).parent().hasClass('dropdown')) {
            e.preventDefault();
            return false;
          }

          if ($(this).parent().hasClass('nav-expanded')) {
            $tabItem.parent().removeClass('nav-expanded');
            $contentBody.removeClass('tab-menu-opened');
            return;
          }

          $tabItem.parent().removeClass('nav-expanded');
          $contentBody.addClass('tab-menu-opened');
          $(this).parent().addClass('nav-expanded');
        }
      }
    });
    $window.on('scroll', function () {
      if ($window.width() < 992) {
        var tabNavOffset = $tabNav.position().top + $tabNav.height() + 100,
            windowOffset = $window.scrollTop();

        if (windowOffset > tabNavOffset) {
          $tabNav.removeClass('show');
        }
      }
    });
    $toggleMenuButton.on('click', function () {
      if (!$tabNav.hasClass('show')) {
        $('html,body').animate({
          scrollTop: $tabNav.offset().top - 50
        }, 300);
      }
    });
  }
}).apply(this, [jQuery]);
/* Browser Selector */

(function ($) {
  $.extend({
    browserSelector: function browserSelector() {
      // jQuery.browser.mobile (http://detectmobilebrowser.com/)
      (function (a) {
        (jQuery.browser = jQuery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4));
      })(navigator.userAgent || navigator.vendor || window.opera); // Touch


      var hasTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;

      var u = navigator.userAgent,
          ua = u.toLowerCase(),
          is = function is(t) {
        return ua.indexOf(t) > -1;
      },
          g = 'gecko',
          w = 'webkit',
          s = 'safari',
          o = 'opera',
          h = document.documentElement,
          b = [!/opera|webtv/i.test(ua) && /msie\s(\d)/.test(ua) ? 'ie ie' + parseFloat(navigator.appVersion.split("MSIE")[1]) : is('firefox/2') ? g + ' ff2' : is('firefox/3.5') ? g + ' ff3 ff3_5' : is('firefox/3') ? g + ' ff3' : is('gecko/') ? g : is('opera') ? o + (/version\/(\d+)/.test(ua) ? ' ' + o + RegExp.jQuery1 : /opera(\s|\/)(\d+)/.test(ua) ? ' ' + o + RegExp.jQuery2 : '') : is('konqueror') ? 'konqueror' : is('chrome') ? w + ' chrome' : is('iron') ? w + ' iron' : is('applewebkit/') ? w + ' ' + s + (/version\/(\d+)/.test(ua) ? ' ' + s + RegExp.jQuery1 : '') : is('mozilla/') ? g : '', is('j2me') ? 'mobile' : is('iphone') ? 'iphone' : is('ipod') ? 'ipod' : is('mac') ? 'mac' : is('darwin') ? 'mac' : is('webtv') ? 'webtv' : is('win') ? 'win' : is('freebsd') ? 'freebsd' : is('x11') || is('linux') ? 'linux' : '', 'js'];

      c = b.join(' ');

      if ($.browser.mobile) {
        c += ' mobile';
      }

      if (hasTouch) {
        c += ' touch';
      }

      h.className += ' ' + c; // IE11 Detect

      var isIE11 = !window.ActiveXObject && "ActiveXObject" in window;

      if (isIE11) {
        $('html').removeClass('gecko').addClass('ie ie11');
        return;
      } // Dark and Boxed Compatibility


      if ($('body').hasClass('dark')) {
        $('html').addClass('dark');
      }

      if ($('body').hasClass('boxed')) {
        $('html').addClass('boxed');
      }
    }
  });
  $.browserSelector();
})(jQuery); // Mailbox


(function (theme, $) {
  theme = theme || {};
  var instanceName = '__mailbox';

  var capitalizeString = function capitalizeString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  var Mailbox = function Mailbox($wrapper) {
    return this.initialize($wrapper);
  };

  Mailbox.prototype = {
    initialize: function initialize($wrapper) {
      if ($wrapper.data(instanceName)) {
        return this;
      }

      this.$wrapper = $wrapper;
      this.setVars().setData().build().events();
      return this;
    },
    setVars: function setVars() {
      this.view = capitalizeString(this.$wrapper.data('mailbox-view') || "");
      return this;
    },
    setData: function setData() {
      this.$wrapper.data(instanceName, this);
      return this;
    },
    build: function build() {
      if (typeof this['build' + this.view] === 'function') {
        this['build' + this.view].call(this);
      }

      return this;
    },
    events: function events() {
      if (typeof this['events' + this.view] === 'function') {
        this['events' + this.view].call(this);
      }

      return this;
    },
    buildFolder: function buildFolder() {
      this.$wrapper.find('.mailbox-email-list .nano').nanoScroller({
        alwaysVisible: true,
        preventPageScrolling: true
      });
    },
    buildEmail: function buildEmail() {
      this.buildComposer();
    },
    buildCompose: function buildCompose() {
      this.buildComposer();
    },
    buildComposer: function buildComposer() {
      this.$wrapper.find('#compose-field').summernote({
        height: 250,
        toolbar: [['style', ['style']], ['font', ['bold', 'italic', 'underline', 'clear']], ['fontname', ['fontname']], ['color', ['color']], ['para', ['ul', 'ol', 'paragraph']], ['height', ['height']], ['table', ['table']], ['insert', ['link', 'picture', 'video']], ['view', ['fullscreen']], ['help', ['help']]]
      });
    },
    eventsCompose: function eventsCompose() {
      var $composer, $contentBody, $html, $innerBody;
      $composer = $('.note-editable');
      $contentBody = $('.content-body');
      $html = $('html');
      $innerBody = $('.inner-body');

      var adjustComposeSize = function adjustComposeSize() {
        var composerHeight, composerTop, contentBodyPaddingBottom, innerBodyHeight, viewportHeight, viewportWidth;
        contentBodyPaddingBottom = parseInt($contentBody.css('paddingBottom'), 10) || 0;
        viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        $composer.css('height', '');

        if (viewportWidth < 767 || $html.hasClass('mobile-device')) {
          composerTop = $composer.offset().top;
          composerHeight = viewportHeight - composerTop;
        } else {
          if ($html.hasClass('fixed')) {
            composerTop = $composer.offset().top;
          } else {
            composerTop = $composer.position().top;
          }

          composerHeight = $innerBody.outerHeight() - composerTop;
        }

        composerHeight -= contentBodyPaddingBottom;
        $composer.css({
          height: composerHeight
        });
      };

      var timer;
      $(window).on('resize orientationchange sidebar-left-toggle mailbox-recalc', function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
          adjustComposeSize();
        }, 100);
      });
      adjustComposeSize();
    }
  }; // expose to scope

  $.extend(theme, {
    Mailbox: Mailbox
  }); // jquery plugin

  $.fn.themeMailbox = function (opts) {
    return this.each(function () {
      var $this = $(this);

      if ($this.data(instanceName)) {
        return $this.data(instanceName);
      } else {
        return new Mailbox($this);
      }
    });
  };
}).apply(this, [window.theme, jQuery]);

/***/ }),

/***/ "./resources/js/plugins.js":
/*!*********************************!*\
  !*** ./resources/js/plugins.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Place any jQuery/helper plugins in here.
 */
$(function () {
  /**
   * Disable submit inputs in the given form
   *
   * @param form
   */
  function disableSubmitButtons(form) {
    form.find('input[type="submit"]').attr('disabled', true);
    form.find('button[type="submit"]').attr('disabled', true);
  }
  /**
   * Enable the submit inputs in a given form
   *
   * @param form
   */


  function enableSubmitButtons(form) {
    form.find('input[type="submit"]').removeAttr('disabled');
    form.find('button[type="submit"]').removeAttr('disabled');
  }
  /**
   * Disable all submit buttons once clicked
   */


  $('form').submit(function () {
    disableSubmitButtons($(this));
    return true;
  });
  /**
   * Add a confirmation to a delete button/form
   */

  $('body').on('submit', 'form[name=delete-item]', function (e) {
    var _this = this;

    e.preventDefault();
    Swal.fire({
      title: 'Are you sure you want to delete this item?',
      showCancelButton: true,
      confirmButtonText: 'Confirm Delete',
      cancelButtonText: 'Cancel',
      icon: 'warning'
    }).then(function (result) {
      if (result.value) {
        _this.submit();
      } else {
        enableSubmitButtons($(_this));
      }
    });
  }).on('click', 'a[name=confirm-item]', function (e) {
    var _this2 = this;

    /**
     * Add an 'are you sure' pop-up to any button/link
     */
    e.preventDefault();
    Swal.fire({
      title: 'Are you sure you want to do this?',
      showCancelButton: true,
      confirmButtonText: 'Continue',
      cancelButtonText: 'Cancel',
      icon: 'info'
    }).then(function (result) {
      result.value && window.location.assign($(_this2).attr('href'));
    });
  }); // Remember tab on page load

  $('a[data-toggle="tab"], a[data-toggle="pill"]').on('shown.bs.tab', function (e) {
    var hash = $(e.target).attr('href');

    if (history.pushState) {
      history.pushState(null, null, hash);
    } else {
      location.hash = hash;
    }
  });
  var hash = window.location.hash;

  if (hash) {
    $('.nav-link[href="' + hash + '"]').tab('show');
  }
});

/***/ }),

/***/ "./resources/js/vendor/common/common.js":
/*!**********************************************!*\
  !*** ./resources/js/vendor/common/common.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Tooltip and Popover
(function ($) {
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();
})(jQuery); // Tabs


$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  $(this).parents('.nav-tabs').find('.active').removeClass('active');
  $(this).parents('.nav-pills').find('.active').removeClass('active');
  $(this).addClass('active').parent().addClass('active');
}); // Bootstrap Datepicker

if (typeof $.fn.datepicker != 'undefined') {
  $.fn.bootstrapDP = $.fn.datepicker.noConflict();
}

/***/ }),

/***/ "./resources/js/vendor/jquery-browser-mobile/jquery.browser.mobile.js":
/*!****************************************************************************!*\
  !*** ./resources/js/vendor/jquery-browser-mobile/jquery.browser.mobile.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (a) {
  (jQuery.browser = jQuery.browser || {}).mobile = /(iphone|ipad|ipod|android)/i.test(a) || /(iphone|ipad|ipod|android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4));
})(navigator.userAgent || navigator.vendor || window.opera);

/***/ }),

/***/ 1:
/*!*******************************************!*\
  !*** multi ./resources/js/backend/app.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/adilimudassir/my-projects/laravel-starter/resources/js/backend/app.js */"./resources/js/backend/app.js");


/***/ })

},[[1,"/js/manifest","/js/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jdXN0b20uanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdGhlbWUuaW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC90aGVtZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGx1Z2lucy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmVuZG9yL2NvbW1vbi9jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3ZlbmRvci9qcXVlcnktYnJvd3Nlci1tb2JpbGUvanF1ZXJ5LmJyb3dzZXIubW9iaWxlLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIiQiLCJqUXVlcnkiLCJyZXF1aXJlIiwiU3dhbCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJpbml0aWFsUG9zaXRpb24iLCJzaWRlYmFyTGVmdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNjcm9sbFRvcCIsImlzRnVuY3Rpb24iLCJmbiIsImVhY2giLCIkdGhpcyIsIm9wdHMiLCJwbHVnaW5PcHRpb25zIiwiZGF0YSIsInRoZW1lUGx1Z2luQW5pbWF0ZSIsImFwcGx5IiwidGhlbWVQbHVnaW5DYXJvdXNlbCIsInRoZW1lUGx1Z2luQ2hhcnRDaXJjdWxhciIsIkNvZGVNaXJyb3IiLCJ0aGVtZVBsdWdpbkNvZGVNaXJyb3IiLCJ0aGVtZVBsdWdpbkNvbG9yUGlja2VyIiwidGhlbWVQbHVnaW5EYXRlUGlja2VyIiwidGhlbWUiLCJOYXYiLCJpbml0aWFsaXplIiwiU3dpdGNoIiwidGhlbWVQbHVnaW5JT1M3U3dpdGNoIiwidGhlbWVQbHVnaW5MaWdodGJveCIsIk5Qcm9ncmVzcyIsImNvbmZpZ3VyZSIsInNob3dTcGlubmVyIiwiZWFzZSIsInNwZWVkIiwidGhlbWVQbHVnaW5NYXJrZG93bkVkaXRvciIsInRoZW1lUGx1Z2luTWFza2VkSW5wdXQiLCJ0aGVtZVBsdWdpbk1heExlbmd0aCIsInRoZW1lUGx1Z2luTXVsdGlTZWxlY3QiLCJwbGFjZWhvbGRlciIsInBvcG92ZXIiLCJ0aGVtZVBsdWdpblBvcnRsZXQiLCJQbHVnaW5TY3JvbGxUb1RvcCIsInRoZW1lUGx1Z2luU2Nyb2xsYWJsZSIsInRoZW1lUGx1Z2luU2VsZWN0MiIsImV4cGFuZCIsImNvbnRlbnQiLCJjaGlsZHJlbiIsInNsaWRlRG93biIsImNzcyIsInJlbW92ZUNsYXNzIiwiY29sbGFwc2UiLCJzbGlkZVVwIiwiYWRkQ2xhc3MiLCIkd2lkZ2V0cyIsIiR3aWRnZXQiLCIkdG9nZ2xlciIsImZpbmQiLCJvbiIsImhhc0NsYXNzIiwidGhlbWVQbHVnaW5TbGlkZXIiLCJ0aGVtZVBsdWdpblNwaW5uZXIiLCJ0aGVtZVBsdWdpblN1bW1lck5vdGUiLCJhdXRvc2l6ZSIsInRoZW1lUGx1Z2luVGV4dEFyZWFBdXRvU2l6ZSIsInRoZW1lUGx1Z2luVGltZVBpY2tlciIsInRoZW1lUGx1Z2luVG9nZ2xlIiwidG9vbHRpcCIsImNvbnRhaW5lciIsInRoZW1lUGx1Z2luV2lkZ2V0VG9kb0xpc3QiLCJ0aGVtZVBsdWdpbldpZGdldFRvZ2dsZUV4cGFuZCIsInRoZW1lUGx1Z2luV29yZFJvdGF0b3IiLCJTa2VsZXRvbiIsInRoZW1lTWFpbGJveCIsImdldE9wdGlvbnMiLCJKU09OIiwicGFyc2UiLCJyZXBsYWNlIiwiZSIsImluc3RhbmNlTmFtZSIsIlBsdWdpbkFuaW1hdGUiLCIkZWwiLCJkZWZhdWx0cyIsImFjY1giLCJhY2NZIiwiZGVsYXkiLCJkdXJhdGlvbiIsInByb3RvdHlwZSIsInNldERhdGEiLCJzZXRPcHRpb25zIiwiYnVpbGQiLCJvcHRpb25zIiwiZXh0ZW5kIiwid3JhcHBlciIsInNlbGYiLCJlbFRvcERpc3RhbmNlIiwib2Zmc2V0IiwidG9wIiwid2luZG93VG9wRGlzdGFuY2UiLCJyZWFkeSIsIndpZHRoIiwiYXBwZWFyIiwib25lIiwiZXYiLCJhdHRyIiwic2V0VGltZW91dCIsInRyaWdnZXIiLCJtYXAiLCIkd2luZG93IiwidG9nZ2xlQ2xhc3MiLCIkdGFyZ2V0IiwiY2xhc3NOYW1lIiwiZXZlbnROYW1lIiwicHJldmVudERlZmF1bHQiLCJhZGRlZCIsInJlbW92ZWQiLCJkaXJlY3Rpb24iLCJwYXJlbnQiLCJtYXRjaCIsInNpYmxpbmdzIiwibGVuZ3RoIiwiJHJvdyIsImNsb3Nlc3QiLCJyZW1vdmUiLCJpbml0aWFsaXplZCIsIlBsdWdpbkNhcm91c2VsIiwibmF2VGV4dCIsIm93bENhcm91c2VsIiwiUGx1Z2luQ2hhcnRDaXJjdWxhciIsImJhckNvbG9yIiwidHJhY2tDb2xvciIsInNjYWxlQ29sb3IiLCJzY2FsZUxlbmd0aCIsImxpbmVDYXAiLCJsaW5lV2lkdGgiLCJzaXplIiwicm90YXRlIiwiYW5pbWF0ZSIsImVuYWJsZWQiLCJ2YWx1ZSIsInBlcmNlbnRFbCIsInNob3VsZEFuaW1hdGUiLCJicm93c2VyIiwibW9iaWxlIiwib25TdGVwIiwiZnJvbSIsInRvIiwiY3VycmVudFZhbHVlIiwiaHRtbCIsInBhcnNlSW50IiwiZWFzeVBpZUNoYXJ0IiwidXBkYXRlIiwiQ2hhcnQiLCJQbHVnaW5Db2RlTWlycm9yIiwibGluZU51bWJlcnMiLCJzdHlsZUFjdGl2ZUxpbmUiLCJtYXRjaEJyYWNrZXRzIiwiZnJvbVRleHRBcmVhIiwiZ2V0IiwiUGx1Z2luQ29sb3JQaWNrZXIiLCJjb2xvcnBpY2tlciIsImRhdGFUYWJsZSIsIm9MYW5ndWFnZSIsInNMZW5ndGhNZW51Iiwic1Byb2Nlc3NpbmciLCJzU2VhcmNoIiwiZm5Jbml0Q29tcGxldGUiLCJzZXR0aW5ncyIsImpzb24iLCJuVGFibGVXcmFwcGVyIiwic2VsZWN0MiIsIm1pbmltdW1SZXN1bHRzRm9yU2VhcmNoIiwiJHNlYXJjaCIsInNlYXJjaFBsYWNlaG9sZGVyIiwiUGx1Z2luRGF0ZVBpY2tlciIsInNldFZhcnMiLCJza2luIiwiYm9vdHN0cmFwRFAiLCJwaWNrZXIiLCJzY3JvbGxEZWxheSIsInNjcm9sbEFuaW1hdGlvbiIsIiR3cmFwcGVyIiwiZXZlbnRzIiwiJGh0bWwiLCIkaGVhZGVyIiwidGh1bWJJbmZvUHJldmlldyIsImFwcGVuZCIsImRvY3VtZW50RWxlbWVudCIsInN0b3BQcm9wYWdhdGlvbiIsImhhbmRsZWQiLCJsaSIsImxvY2F0aW9uIiwiaHJlZiIsInBhcmVudHMiLCJ0YXJnZXQiLCJpcyIsInNjcm9sbFRvVGFyZ2V0IiwiUGx1Z2luSU9TN1N3aXRjaCIsInN3aXRjaGVyIiwiZWwiLCJ0b2dnbGUiLCJmb3JtVG9PYmplY3QiLCJhcnJheURhdGEiLCJvYmplY3REYXRhIiwic2VyaWFsaXplQXJyYXkiLCJuYW1lIiwicHVzaCIsIlBsdWdpbkxpZ2h0Ym94IiwidENsb3NlIiwidExvYWRpbmciLCJnYWxsZXJ5IiwidFByZXYiLCJ0TmV4dCIsInRDb3VudGVyIiwiaW1hZ2UiLCJ0RXJyb3IiLCJhamF4IiwibWFnbmlmaWNQb3B1cCIsImxvYWRpbmdPdmVybGF5VGVtcGxhdGUiLCJqb2luIiwiTG9hZGluZ092ZXJsYXkiLCIkb3ZlcmxheSIsIm1hdGNoUHJvcGVydGllcyIsImxvYWRlckNsYXNzIiwiZ2V0TG9hZGVyQ2xhc3MiLCJiYWNrZ3JvdW5kQ29sb3IiLCIkY2FjaGVkT3ZlcmxheSIsImNsb25lIiwiX3NlbGYiLCJzdGFydFNob3dpbmciLCJzaG93IiwiaGlkZU9uV2luZG93TG9hZCIsImhpZGUiLCJsaXN0ZW5PbiIsInBvc2l0aW9uIiwidG9Mb3dlckNhc2UiLCJpIiwibCIsInByb3BlcnRpZXMiLCJvYmoiLCJoZXhDb2xvciIsInIiLCJnIiwiYiIsInlpcSIsImNvbG9yVG9IZXgiLCJjb2xvciIsImhleCIsInJnYiIsImluZGV4T2YiLCJ0b1N0cmluZyIsInNsaWNlIiwic3Vic3RyIiwibG9hZGluZ092ZXJsYXkiLCJMb2NrU2NyZWVuIiwiJGJvZHkiLCJsb2NrSFRNTCIsInVzZXJpbmZvIiwiZ2V0VXNlckluZm8iLCJidWlsZFRlbXBsYXRlIiwiJGxvY2siLCIkdXNlclBpY3R1cmUiLCIkdXNlck5hbWUiLCIkdXNlckVtYWlsIiwiZm9ybUV2ZW50cyIsIiRmb3JtIiwicGljdHVyZSIsInRleHQiLCJ1c2VybmFtZSIsImVtYWlsIiwib3BlbiIsIml0ZW1zIiwic3JjIiwidHlwZSIsIm1vZGFsIiwibWFpbkNsYXNzIiwiY2FsbGJhY2tzIiwiY2hhbmdlIiwiY2xvc2UiLCIkaW5mbyIsInRpbWVvdXRzIiwicm91bmROdW1iZXIiLCJudW1iZXIiLCJwcmVjaXNpb24iLCJhIiwiTWF0aCIsInJvdW5kIiwiR01hcEJ1aWxkZXIiLCJtYXBTZWxlY3RvciIsIm1hcmtlcnMiLCJsaXN0IiwicmVtb3ZlQWxsIiwicHJldmlld01vZGFsIiwiZ2V0Q29kZU1vZGFsIiwibWFwT3B0aW9ucyIsImNlbnRlciIsImxhdCIsImxuZyIsInBhbkNvbnRyb2wiLCJ6b29tIiwiJG1hcENvbnRhaW5lciIsIiRwcmV2aWV3TW9kYWwiLCIkZ2V0Q29kZU1vZGFsIiwibWFya2VyIiwiJG1vZGFsIiwiJGxpc3QiLCIkcmVtb3ZlQWxsIiwiU25henp5VGhlbWVzIiwidGhlbWVPcHRzIiwiaWQiLCJnZW9jb2RlciIsImdvb2dsZSIsIm1hcHMiLCJHZW9jb2RlciIsImV2ZW50IiwiYWRkRG9tTGlzdGVuZXIiLCJMYXRMbmciLCJNYXAiLCJ1cGRhdGVDb250cm9sIiwibWFwRXZlbnRzIiwiZmllbGQiLCJ2YWwiLCJ1cGRhdGVNYXAiLCJzYXZlTWFya2VyIiwicmVtb3ZlQWxsTWFya2VycyIsInByZXZpZXciLCJjb250ZW50V2luZG93IiwiYm9keSIsImlubmVySFRNTCIsImdldENvZGUiLCJhZGRMaXN0ZW5lciIsImNvb3JkcyIsImdldENlbnRlciIsImdldFpvb20iLCJnZXRNYXBUeXBlSWQiLCJwcm9wIiwidXBkYXRlRm4iLCJ1cGRhdGVNYXBQcm9wZXJ0eSIsImNvbnNvbGUiLCJpbmZvIiwibGF0bG5nIiwic2V0Q2VudGVyIiwiem9vbWxldmVsIiwiYXJndW1lbnRzIiwic2V0Wm9vbSIsIm1hcHR5cGVjb250cm9sIiwibWFwVHlwZUNvbnRyb2wiLCJtYXBUeXBlQ29udHJvbE9wdGlvbnMiLCJzdHlsZSIsIk1hcFR5cGVDb250cm9sU3R5bGUiLCJ0b1VwcGVyQ2FzZSIsInpvb21jb250cm9sIiwiem9vbUNvbnRyb2wiLCJ6b29tQ29udHJvbE9wdGlvbnMiLCJab29tQ29udHJvbFN0eWxlIiwic2NhbGVjb250cm9sIiwic2NhbGVDb250cm9sIiwic3RyZWV0dmlld2NvbnRyb2wiLCJzdHJlZXRWaWV3Q29udHJvbCIsInBhbmNvbnRyb2wiLCJvdmVydmlld2NvbnRyb2wiLCJvdmVydmlld01hcENvbnRyb2wiLCJvdmVydmlld01hcENvbnRyb2xPcHRpb25zIiwib3BlbmVkIiwiZHJhZ2dhYmxlY29udHJvbCIsImRyYWdnYWJsZSIsImNsaWNrdG96b29tY29udHJvbCIsImRpc2FibGVEb3VibGVDbGlja1pvb20iLCJzY3JvbGx3aGVlbGNvbnRyb2wiLCJzY3JvbGx3aGVlbCIsIm1hcHR5cGUiLCJtYXBTdHlsZXMiLCJtYXBUeXBlIiwiZmlsdGVyIiwiTWFwVHlwZUlkIiwibWFwVHlwZUlkIiwiaW5BcnJheSIsInN0eWxlcyIsImV2YWwiLCJtYXB0aGVtZSIsInVwZGF0ZUNvbnRyb2xWYWx1ZSIsIiRjb250cm9sIiwibGV2ZWwiLCJlZGl0TWFya2VyIiwiY3VycmVudE1hcmtlciIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJyZW1vdmVNYXJrZXIiLCJfaW5zdGFuY2UiLCJzZXRNYXAiLCJfJGh0bWwiLCJzcGxpY2UiLCJfZ2VvY29kZSIsInN0YXR1cyIsImdlb2NvZGUiLCJhZGRyZXNzIiwicmVzcG9uc2UiLCJfb25HZW9jb2RlUmVzdWx0IiwicmVzdWx0IiwiR2VvY29kZXJTdGF0dXMiLCJPSyIsIlpFUk9fUkVTVUxUUyIsImdlb21ldHJ5IiwiZGVzYyIsIk1hcmtlciIsIl9iaW5kTWFya2VyQ2xpY2siLCJfYXBwZW5kTWFya2VyVG9MaXN0IiwicmVzZXQiLCJfaW5mb1dpbmRvdyIsIkluZm9XaW5kb3ciLCJpc09wZW5lZCIsImN1c3RvbVNjcmlwdCIsImdvb2dsZVNjcmlwdCIsImlmcmFtZSIsInByZXZpZXdIdG1sIiwiY3JlYXRlRWxlbWVudCIsImdlbmVyYXRlIiwiYXBwZW5kQ2hpbGQiLCJ3b3JrIiwib3V0cHV0IiwiJHRoZW1lQ29udHJvbCIsIm0iLCJvYmplY3QiLCJsb2ciLCJNYXBzIiwidGhlbWVHTWFwQnVpbGRlciIsImluc3RhbmNlIiwiYnVpbGRlciIsIlBsdWdpbk1hcmtkb3duRWRpdG9yIiwiaWNvbmxpYnJhcnkiLCJidXR0b25zIiwiaWNvbiIsImZhIiwibWFya2Rvd24iLCJQbHVnaW5NYXNrZWRJbnB1dCIsIm1hc2siLCJQbHVnaW5NYXhMZW5ndGgiLCJhbHdheXNTaG93IiwicGxhY2VtZW50Iiwid2FybmluZ0NsYXNzIiwibGltaXRSZWFjaGVkQ2xhc3MiLCJtYXhsZW5ndGgiLCJQbHVnaW5NdWx0aVNlbGVjdCIsInRlbXBsYXRlcyIsIm11bHRpc2VsZWN0IiwiUE5vdGlmeSIsInN0eWxpbmciLCJzaGFkb3ciLCJzdGFjayIsInNwYWNpbmcxIiwic3BhY2luZzIiLCJmb250YXdlc29tZSIsIm5vdGljZSIsInN1Y2Nlc3MiLCJlcnJvciIsIm5vdGljZV9pY29uIiwiaW5mb19pY29uIiwic3VjY2Vzc19pY29uIiwiZXJyb3JfaWNvbiIsInN0b3JhZ2VPcmRlcktleSIsInN0b3JhZ2VTdGF0ZUtleSIsIlBsdWdpblBvcnRsZXQiLCJjb25uZWN0V2l0aCIsImhhbmRsZSIsIm9wYWNpdHkiLCJjYW5jZWwiLCJmb3JjZVBsYWNlaG9sZGVyU2l6ZSIsImZvcmNlSGVscGVyU2l6ZSIsInRvbGVyYW5jZSIsImhlbHBlciIsInJldmVydCIsIm9uVXBkYXRlIiwiY3JlYXRlIiwib25Mb2FkIiwidWkiLCJrZXkiLCJzdG9yZSIsInBvcmxldElkIiwic29ydGFibGUiLCJzZXQiLCJwb3J0bGV0IiwiY2FyZHMiLCJpbmRleCIsInBhbmVsSWQiLCJhcHBlbmRUbyIsInNhdmVTdGF0ZSIsInBhbmVsIiwiaXNDb2xsYXBzZWQiLCJpc1JlbW92ZWQiLCJsb2FkU3RhdGUiLCJzdGF0ZSIsImJ1dHRvbkNsYXNzIiwiaWNvbkNsYXNzIiwidmlzaWJsZU1vYmlsZSIsImxhYmVsIiwiX2lzU2Nyb2xsaW5nIiwic2Nyb2xsIiwic3RvcCIsIlBsdWdpblNjcm9sbGFibGUiLCJ1cGRhdGVNb2RhbHMiLCJ1cGRhdGVCb290c3RyYXBNb2RhbCIsInVwZGF0ZUJvb3N0cmFwTW9kYWwiLCJDb25zdHJ1Y3RvciIsImVuZm9yY2VGb2N1cyIsIm9yaWdpbmFsRm9jdXMiLCIkc2Nyb2xsYWJsZSIsIiRlbGVtZW50IiwibmFub1Njcm9sbGVyIiwiY29udGVudENsYXNzIiwicGFuZUNsYXNzIiwic2xpZGVyQ2xhc3MiLCJhbHdheXNWaXNpYmxlIiwicHJldmVudFBhZ2VTY3JvbGxpbmciLCJQbHVnaW5TZWxlY3QyIiwiUGx1Z2luU2xpZGVyIiwiJG91dHB1dCIsInNsaWRlIiwib25TbGlkZSIsInNsaWRlciIsInZhbHVlcyIsIlBsdWdpblNwaW5uZXIiLCJzcGlubmVyIiwiUGx1Z2luU3VtbWVyTm90ZSIsIm9uZm9jdXMiLCJvbmJsdXIiLCJzdW1tZXJub3RlIiwiUGx1Z2luVGV4dEFyZWFBdXRvU2l6ZSIsIlBsdWdpblRpbWVQaWNrZXIiLCJkaXNhYmxlTW91c2V3aGVlbCIsImljb25zIiwidXAiLCJkb3duIiwidGltZXBpY2tlciIsIlBsdWdpblRvZ2dsZSIsImlzQWNjb3JkaW9uIiwiYWRkSWNvbnMiLCIkaXRlbXMiLCJwcmVwZW5kIiwicHJldmlld1BhckN1cnJlbnRIZWlnaHQiLCJwcmV2aWV3UGFyQW5pbWF0ZUhlaWdodCIsInRvZ2dsZUNvbnRlbnQiLCJjbGljayIsInBhcmVudFNlY3Rpb24iLCJwYXJlbnRXcmFwcGVyIiwicHJldmlld1BhciIsImNsb3NlRWxlbWVudCIsIm9yaWdpbmFsRXZlbnQiLCJoZWlnaHQiLCJXaWRnZXRUb2RvTGlzdCIsImNoZWNrIiwiaW5wdXQiLCIkY2hlY2siLCIkcmVtb3ZlIiwic29ydCIsInBhZ2VZIiwib3V0ZXJIZWlnaHQiLCJXaWRnZXRUb2dnbGVFeHBhbmQiLCJQbHVnaW5Xb3JkUm90YXRvciIsIml0ZW1zV3JhcHBlciIsImZpcnN0SXRlbSIsImVxIiwiZmlyc3RJdGVtQ2xvbmUiLCJpdGVtSGVpZ2h0IiwiY3VycmVudEl0ZW0iLCJjdXJyZW50VG9wIiwic2V0SW50ZXJ2YWwiLCIkbGkiLCJlbnN1cmVWaXNpYmxlIiwic2Nyb2xsZXIiLCJvZmZzZXRQYXJlbnQiLCJidWlsZFNpZGViYXJOYXYiLCJhbmNob3IiLCJwcmV2IiwibmV4dCIsImFycm93V2lkdGgiLCJnZXRDb21wdXRlZFN0eWxlIiwib2Zmc2V0WCIsIm9mZnNldFdpZHRoIiwiJGFuY2hvciIsIiRwcmV2IiwiJG5leHQiLCIkZXYiLCJjaHJvbWUiLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiZmxhZyIsImlzQW5kcm9pZCIsImlzSXBhZCIsInVwZGF0aW5nTmFub1Njcm9sbCIsInNpZGViYXJzIiwibWVudSIsImxlZnQiLCJyaWdodCIsImN1c3RvbVNjcm9sbCIsIk1vZGVybml6ciIsIm92ZXJmbG93c2Nyb2xsaW5nIiwiYnVpbGRTaWRlYmFyTGVmdCIsImJ1aWxkQ29udGVudE1lbnUiLCJmaXhJcGFkIiwiYnVpbGRTaWRlYmFyUmlnaHQiLCJldmVudHNTaWRlYmFyTGVmdCIsImV2ZW50c1NpZGViYXJSaWdodCIsImV2ZW50c0NvbnRlbnRNZW51IiwiZml4U2Nyb2xsIiwicHJldmVudEJvZHlTY3JvbGxUb2dnbGUiLCIkbmFubyIsInNldEl0ZW0iLCJvZmYiLCJ1cGRhdGVOYW5vU2Nyb2xsIiwic3VwcG9ydCIsInRyYW5zaXRpb24iLCJlbXVsYXRlVHJhbnNpdGlvbkVuZCIsImlzVG9nZ2xlciIsImVsZW1lbnQiLCJiaW5kIiwiaGFzRXZlbnQiLCJoYXNUYXJnZXQiLCJpc0NvbGxhcHNlQnV0dG9uIiwiaXNJbnNpZGVNb2RhbCIsImlzSW5zaWRlSW5uZXJNZW51IiwiaXNJbnNpZGVIVE1MIiwic2hvdWxkUHJldmVudCIsIiR0b2dnbGVNZW51QnV0dG9uIiwiJG5hdkFjdGl2ZSIsIiR0YWJOYXYiLCIkdGFiSXRlbSIsIiRjb250ZW50Qm9keSIsInRhYk5hdk9mZnNldCIsIndpbmRvd09mZnNldCIsImJyb3dzZXJTZWxlY3RvciIsInZlbmRvciIsIm9wZXJhIiwiaGFzVG91Y2giLCJtc01heFRvdWNoUG9pbnRzIiwidSIsInVhIiwidCIsInciLCJzIiwibyIsImgiLCJwYXJzZUZsb2F0IiwiYXBwVmVyc2lvbiIsInNwbGl0IiwiUmVnRXhwIiwialF1ZXJ5MSIsImpRdWVyeTIiLCJjIiwiaXNJRTExIiwiQWN0aXZlWE9iamVjdCIsImNhcGl0YWxpemVTdHJpbmciLCJzdHIiLCJjaGFyQXQiLCJNYWlsYm94IiwidmlldyIsImNhbGwiLCJidWlsZEZvbGRlciIsImJ1aWxkRW1haWwiLCJidWlsZENvbXBvc2VyIiwiYnVpbGRDb21wb3NlIiwidG9vbGJhciIsImV2ZW50c0NvbXBvc2UiLCIkY29tcG9zZXIiLCIkaW5uZXJCb2R5IiwiYWRqdXN0Q29tcG9zZVNpemUiLCJjb21wb3NlckhlaWdodCIsImNvbXBvc2VyVG9wIiwiY29udGVudEJvZHlQYWRkaW5nQm90dG9tIiwiaW5uZXJCb2R5SGVpZ2h0Iiwidmlld3BvcnRIZWlnaHQiLCJ2aWV3cG9ydFdpZHRoIiwibWF4IiwiY2xpZW50SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJjbGllbnRXaWR0aCIsImlubmVyV2lkdGgiLCJ0aW1lciIsImNsZWFyVGltZW91dCIsImRpc2FibGVTdWJtaXRCdXR0b25zIiwiZm9ybSIsImVuYWJsZVN1Ym1pdEJ1dHRvbnMiLCJyZW1vdmVBdHRyIiwic3VibWl0IiwiZmlyZSIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uVGV4dCIsImNhbmNlbEJ1dHRvblRleHQiLCJ0aGVuIiwiYXNzaWduIiwiaGFzaCIsImhpc3Rv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UUFBMUQ7QUFDQXBELEdBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXVELFFBQVIsQ0FBaUIsUUFBakIsRUFBMkJnRSxNQUEzQixHQUFvQ2hFLFFBQXBDLENBQTZDLFFBQTdDO0FBQ0EsQ0FKRCxFLENBTUE7O0FBQ0EsSUFBSSxPQUFPdkQsQ0FBQyxDQUFDWSxFQUFGLENBQUs0cUIsVUFBWixJQUEyQixXQUEvQixFQUE0QztBQUMzQ3hyQixHQUFDLENBQUNZLEVBQUYsQ0FBS3VLLFdBQUwsR0FBbUJuTCxDQUFDLENBQUNZLEVBQUYsQ0FBSzRxQixVQUFMLENBQWdCQyxVQUFoQixFQUFuQjtBQUNBLEM7Ozs7Ozs7Ozs7O0FDaEJELENBQUMsVUFBUzNaLENBQVQsRUFBVztBQUFDLEdBQUM3UixNQUFNLENBQUMrSSxPQUFQLEdBQWUvSSxNQUFNLENBQUMrSSxPQUFQLElBQWdCLEVBQWhDLEVBQW9DQyxNQUFwQyxHQUEyQyw4QkFBOEJ3YixJQUE5QixDQUFtQzNTLENBQW5DLEtBQXVDLG9WQUFvVjJTLElBQXBWLENBQXlWM1MsQ0FBelYsQ0FBdkMsSUFBb1ksMGtEQUEwa0QyUyxJQUExa0QsQ0FBK2tEM1MsQ0FBQyxDQUFDaEMsTUFBRixDQUFTLENBQVQsRUFBVyxDQUFYLENBQS9rRCxDQUEvYTtBQUE2Z0UsQ0FBMWhFLEVBQTRoRTRVLFNBQVMsQ0FBQ0MsU0FBVixJQUFxQkQsU0FBUyxDQUFDK0MsTUFBL0IsSUFBdUMxbkIsTUFBTSxDQUFDMm5CLEtBQTFrRSxFIiwiZmlsZSI6Ii9qcy9iYWNrZW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwid2luZG93LiQgPSB3aW5kb3cualF1ZXJ5ID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG53aW5kb3cuU3dhbCA9IHJlcXVpcmUoJ3N3ZWV0YWxlcnQyJyk7XG5yZXF1aXJlKCcuLi92ZW5kb3IvanF1ZXJ5LWJyb3dzZXItbW9iaWxlL2pxdWVyeS5icm93c2VyLm1vYmlsZScpO1xucmVxdWlyZSgncG9wcGVyLmpzJyk7XG5yZXF1aXJlKCdib290c3RyYXAnKTtcbnJlcXVpcmUoJ2Jvb3RzdHJhcC1kYXRlcGlja2VyL2Rpc3QvanMvYm9vdHN0cmFwLWRhdGVwaWNrZXInKTtcbnJlcXVpcmUoJy4uL3ZlbmRvci9jb21tb24vY29tbW9uJyk7XG5yZXF1aXJlKCduYW5vc2Nyb2xsZXIvYmluL2phdmFzY3JpcHRzL2pxdWVyeS5uYW5vc2Nyb2xsZXInKTtcbnJlcXVpcmUoJ21hZ25pZmljLXBvcHVwL2Rpc3QvanF1ZXJ5Lm1hZ25pZmljLXBvcHVwJyk7XG5yZXF1aXJlKCdqcXVlcnkucGxhY2Vob2xkZXIvanF1ZXJ5LnBsYWNlaG9sZGVyJyk7XG5yZXF1aXJlKCcuL3RoZW1lJyk7XG5yZXF1aXJlKCcuL2N1c3RvbScpO1xucmVxdWlyZSgnLi90aGVtZS5pbml0Jyk7XG5cbi8vIE1haW50YWluIFNjcm9sbCBQb3NpdGlvblxuaWYgKHR5cGVvZiBsb2NhbFN0b3JhZ2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzaWRlYmFyLWxlZnQtcG9zaXRpb24nKSAhPT0gbnVsbCkge1xuICAgICAgICB2YXIgaW5pdGlhbFBvc2l0aW9uID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NpZGViYXItbGVmdC1wb3NpdGlvbicpLFxuICAgICAgICAgICAgc2lkZWJhckxlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2lkZWJhci1sZWZ0IC5uYW5vLWNvbnRlbnQnKTtcblxuICAgICAgICBzaWRlYmFyTGVmdC5zY3JvbGxUb3AgPSBpbml0aWFsUG9zaXRpb247XG4gICAgfVxufVxuXG5cbnJlcXVpcmUoJy4uL3BsdWdpbnMnKTtcbmltcG9ydCAnYWxwaW5lanMnOyIsIi8qIEFkZCBoZXJlIGFsbCB5b3VyIEpTIGN1c3RvbWl6YXRpb25zICovIiwiXHJcblxyXG4vLyBBbmltYXRlXHJcbihmdW5jdGlvbigkKSB7XHJcblxyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0aWYgKCAkLmlzRnVuY3Rpb24oJC5mblsgJ2FwcGVhcicgXSkgKSB7XHJcblxyXG5cdFx0JChmdW5jdGlvbigpIHtcclxuXHRcdFx0JCgnW2RhdGEtcGx1Z2luLWFuaW1hdGVdLCBbZGF0YS1hcHBlYXItYW5pbWF0aW9uXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dmFyICR0aGlzID0gJCggdGhpcyApLFxyXG5cdFx0XHRcdFx0b3B0cyA9IHt9O1xyXG5cclxuXHRcdFx0XHR2YXIgcGx1Z2luT3B0aW9ucyA9ICR0aGlzLmRhdGEoJ3BsdWdpbi1vcHRpb25zJyk7XHJcblx0XHRcdFx0aWYgKHBsdWdpbk9wdGlvbnMpXHJcblx0XHRcdFx0XHRvcHRzID0gcGx1Z2luT3B0aW9ucztcclxuXHJcblx0XHRcdFx0JHRoaXMudGhlbWVQbHVnaW5BbmltYXRlKG9wdHMpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KS5hcHBseSh0aGlzLCBbalF1ZXJ5XSk7XHJcblxyXG4vLyBDYXJvdXNlbFxyXG4oZnVuY3Rpb24oJCkge1xyXG5cclxuXHQndXNlIHN0cmljdCc7XHJcblxyXG5cdGlmICggJC5pc0Z1bmN0aW9uKCQuZm5bICdvd2xDYXJvdXNlbCcgXSkgKSB7XHJcblxyXG5cdFx0JChmdW5jdGlvbigpIHtcclxuXHRcdFx0JCgnW2RhdGEtcGx1Z2luLWNhcm91c2VsXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dmFyICR0aGlzID0gJCggdGhpcyApLFxyXG5cdFx0XHRcdFx0b3B0cyA9IHt9O1xyXG5cclxuXHRcdFx0XHR2YXIgcGx1Z2luT3B0aW9ucyA9ICR0aGlzLmRhdGEoJ3BsdWdpbi1vcHRpb25zJyk7XHJcblx0XHRcdFx0aWYgKHBsdWdpbk9wdGlvbnMpXHJcblx0XHRcdFx0XHRvcHRzID0gcGx1Z2luT3B0aW9ucztcclxuXHJcblx0XHRcdFx0JHRoaXMudGhlbWVQbHVnaW5DYXJvdXNlbChvcHRzKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufSkuYXBwbHkodGhpcywgW2pRdWVyeV0pO1xyXG5cclxuLy8gQ2hhcnQgQ2lyY3VsYXJcclxuKGZ1bmN0aW9uKCQpIHtcclxuXHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cclxuXHRpZiAoICQuaXNGdW5jdGlvbigkLmZuWyAnZWFzeVBpZUNoYXJ0JyBdKSApIHtcclxuXHJcblx0XHQkKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKCdbZGF0YS1wbHVnaW4tY2hhcnQtY2lyY3VsYXJdLCAuY2lyY3VsYXItYmFyLWNoYXJ0Om5vdCgubWFudWFsKScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dmFyICR0aGlzID0gJCggdGhpcyApLFxyXG5cdFx0XHRcdFx0b3B0cyA9IHt9O1xyXG5cclxuXHRcdFx0XHR2YXIgcGx1Z2luT3B0aW9ucyA9ICR0aGlzLmRhdGEoJ3BsdWdpbi1vcHRpb25zJyk7XHJcblx0XHRcdFx0aWYgKHBsdWdpbk9wdGlvbnMpXHJcblx0XHRcdFx0XHRvcHRzID0gcGx1Z2luT3B0aW9ucztcclxuXHJcblx0XHRcdFx0JHRoaXMudGhlbWVQbHVnaW5DaGFydENpcmN1bGFyKG9wdHMpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KS5hcHBseSh0aGlzLCBbalF1ZXJ5XSk7XHJcblxyXG4vLyBDb2RlbWlycm9yXHJcbihmdW5jdGlvbigkKSB7XHJcblxyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0aWYgKCB0eXBlb2YgQ29kZU1pcnJvciAhPT0gJ3VuZGVmaW5lZCcgKSB7XHJcblxyXG5cdFx0JChmdW5jdGlvbigpIHtcclxuXHRcdFx0JCgnW2RhdGEtcGx1Z2luLWNvZGVtaXJyb3JdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR2YXIgJHRoaXMgPSAkKCB0aGlzICksXHJcblx0XHRcdFx0XHRvcHRzID0ge307XHJcblxyXG5cdFx0XHRcdHZhciBwbHVnaW5PcHRpb25zID0gJHRoaXMuZGF0YSgncGx1Z2luLW9wdGlvbnMnKTtcclxuXHRcdFx0XHRpZiAocGx1Z2luT3B0aW9ucylcclxuXHRcdFx0XHRcdG9wdHMgPSBwbHVnaW5PcHRpb25zO1xyXG5cclxuXHRcdFx0XHQkdGhpcy50aGVtZVBsdWdpbkNvZGVNaXJyb3Iob3B0cyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pLmFwcGx5KHRoaXMsIFtqUXVlcnldKTtcclxuXHJcbi8vIENvbG9ycGlja2VyXHJcbihmdW5jdGlvbigkKSB7XHJcblxyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0aWYgKCAkLmlzRnVuY3Rpb24oJC5mblsgJ2NvbG9ycGlja2VyJyBdKSApIHtcclxuXHJcblx0XHQkKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKCdbZGF0YS1wbHVnaW4tY29sb3JwaWNrZXJdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR2YXIgJHRoaXMgPSAkKCB0aGlzICksXHJcblx0XHRcdFx0XHRvcHRzID0ge307XHJcblxyXG5cdFx0XHRcdHZhciBwbHVnaW5PcHRpb25zID0gJHRoaXMuZGF0YSgncGx1Z2luLW9wdGlvbnMnKTtcclxuXHRcdFx0XHRpZiAocGx1Z2luT3B0aW9ucylcclxuXHRcdFx0XHRcdG9wdHMgPSBwbHVnaW5PcHRpb25zO1xyXG5cclxuXHRcdFx0XHQkdGhpcy50aGVtZVBsdWdpbkNvbG9yUGlja2VyKG9wdHMpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KS5hcHBseSh0aGlzLCBbalF1ZXJ5XSk7XHJcblxyXG4vLyBEYXRlcGlja2VyXHJcbihmdW5jdGlvbigkKSB7XHJcblxyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0aWYgKCAkLmlzRnVuY3Rpb24oJC5mblsgJ2Jvb3RzdHJhcERQJyBdKSApIHtcclxuXHJcblx0XHQkKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKCdbZGF0YS1wbHVnaW4tZGF0ZXBpY2tlcl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHZhciAkdGhpcyA9ICQoIHRoaXMgKSxcclxuXHRcdFx0XHRcdG9wdHMgPSB7fTtcclxuXHJcblx0XHRcdFx0dmFyIHBsdWdpbk9wdGlvbnMgPSAkdGhpcy5kYXRhKCdwbHVnaW4tb3B0aW9ucycpO1xyXG5cdFx0XHRcdGlmIChwbHVnaW5PcHRpb25zKVxyXG5cdFx0XHRcdFx0b3B0cyA9IHBsdWdpbk9wdGlvbnM7XHJcblxyXG5cdFx0XHRcdCR0aGlzLnRoZW1lUGx1Z2luRGF0ZVBpY2tlcihvcHRzKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufSkuYXBwbHkodGhpcywgW2pRdWVyeV0pO1xyXG5cclxuLy8gSGVhZGVyIE1lbnUgTmF2XHJcbihmdW5jdGlvbih0aGVtZSwgJCkge1xyXG5cclxuXHQndXNlIHN0cmljdCc7XHJcblx0XHJcblx0aWYgKHR5cGVvZiB0aGVtZS5OYXYgIT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHR0aGVtZS5OYXYuaW5pdGlhbGl6ZSgpO1xyXG5cdH1cclxuXHRcclxufSkuYXBwbHkodGhpcywgW3dpbmRvdy50aGVtZSwgalF1ZXJ5XSk7XHJcblxyXG4vLyBpb3NTd2l0Y2hlclxyXG4oZnVuY3Rpb24oJCkge1xyXG5cclxuXHQndXNlIHN0cmljdCc7XHJcblxyXG5cdGlmICggdHlwZW9mIFN3aXRjaCAhPT0gJ3VuZGVmaW5lZCcgJiYgJC5pc0Z1bmN0aW9uKCBTd2l0Y2ggKSApIHtcclxuXHJcblx0XHQkKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKCdbZGF0YS1wbHVnaW4taW9zLXN3aXRjaF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHZhciAkdGhpcyA9ICQoIHRoaXMgKTtcclxuXHJcblx0XHRcdFx0JHRoaXMudGhlbWVQbHVnaW5JT1M3U3dpdGNoKCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pLmFwcGx5KHRoaXMsIFtqUXVlcnldKTtcclxuXHJcbi8vIExpZ2h0Ym94XHJcbihmdW5jdGlvbigkKSB7XHJcblxyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0aWYgKCAkLmlzRnVuY3Rpb24oJC5mblsgJ21hZ25pZmljUG9wdXAnIF0pICkge1xyXG5cclxuXHRcdCQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQoJ1tkYXRhLXBsdWdpbi1saWdodGJveF0sIC5saWdodGJveDpub3QoLm1hbnVhbCknKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHZhciAkdGhpcyA9ICQoIHRoaXMgKSxcclxuXHRcdFx0XHRcdG9wdHMgPSB7fTtcclxuXHJcblx0XHRcdFx0dmFyIHBsdWdpbk9wdGlvbnMgPSAkdGhpcy5kYXRhKCdwbHVnaW4tb3B0aW9ucycpO1xyXG5cdFx0XHRcdGlmIChwbHVnaW5PcHRpb25zKVxyXG5cdFx0XHRcdFx0b3B0cyA9IHBsdWdpbk9wdGlvbnM7XHJcblxyXG5cdFx0XHRcdCR0aGlzLnRoZW1lUGx1Z2luTGlnaHRib3gob3B0cyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pLmFwcGx5KHRoaXMsIFtqUXVlcnldKTtcclxuXHJcbi8vIFBvcnRsZXRzXHJcbihmdW5jdGlvbigkKSB7XHJcblxyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0aWYgKCB0eXBlb2YgTlByb2dyZXNzICE9PSAndW5kZWZpbmVkJyAmJiAkLmlzRnVuY3Rpb24oIE5Qcm9ncmVzcy5jb25maWd1cmUgKSApIHtcclxuXHJcblx0XHROUHJvZ3Jlc3MuY29uZmlndXJlKHtcclxuXHRcdFx0c2hvd1NwaW5uZXI6IGZhbHNlLFxyXG5cdFx0XHRlYXNlOiAnZWFzZScsXHJcblx0XHRcdHNwZWVkOiA3NTBcclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KS5hcHBseSh0aGlzLCBbalF1ZXJ5XSk7XHJcblxyXG4vLyBNYXJrZG93blxyXG4oZnVuY3Rpb24oJCkge1xyXG5cclxuXHQndXNlIHN0cmljdCc7XHJcblxyXG5cdGlmICggJC5pc0Z1bmN0aW9uKCQuZm5bICdtYXJrZG93bicgXSkgKSB7XHJcblxyXG5cdFx0JChmdW5jdGlvbigpIHtcclxuXHRcdFx0JCgnW2RhdGEtcGx1Z2luLW1hcmtkb3duLWVkaXRvcl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHZhciAkdGhpcyA9ICQoIHRoaXMgKSxcclxuXHRcdFx0XHRcdG9wdHMgPSB7fTtcclxuXHJcblx0XHRcdFx0dmFyIHBsdWdpbk9wdGlvbnMgPSAkdGhpcy5kYXRhKCdwbHVnaW4tb3B0aW9ucycpO1xyXG5cdFx0XHRcdGlmIChwbHVnaW5PcHRpb25zKVxyXG5cdFx0XHRcdFx0b3B0cyA9IHBsdWdpbk9wdGlvbnM7XHJcblxyXG5cdFx0XHRcdCR0aGlzLnRoZW1lUGx1Z2luTWFya2Rvd25FZGl0b3Iob3B0cyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pLmFwcGx5KHRoaXMsIFtqUXVlcnldKTtcclxuXHJcbi8vIE1hc2tlZCBJbnB1dFxyXG4oZnVuY3Rpb24oJCkge1xyXG5cclxuXHQndXNlIHN0cmljdCc7XHJcblxyXG5cdGlmICggJC5pc0Z1bmN0aW9uKCQuZm5bICdtYXNrJyBdKSApIHtcclxuXHJcblx0XHQkKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKCdbZGF0YS1wbHVnaW4tbWFza2VkLWlucHV0XScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dmFyICR0aGlzID0gJCggdGhpcyApLFxyXG5cdFx0XHRcdFx0b3B0cyA9IHt9O1xyXG5cclxuXHRcdFx0XHR2YXIgcGx1Z2luT3B0aW9ucyA9ICR0aGlzLmRhdGEoJ3BsdWdpbi1vcHRpb25zJyk7XHJcblx0XHRcdFx0aWYgKHBsdWdpbk9wdGlvbnMpXHJcblx0XHRcdFx0XHRvcHRzID0gcGx1Z2luT3B0aW9ucztcclxuXHJcblx0XHRcdFx0JHRoaXMudGhlbWVQbHVnaW5NYXNrZWRJbnB1dChvcHRzKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufSkuYXBwbHkodGhpcywgW2pRdWVyeV0pO1xyXG5cclxuLy8gTWF4TGVuZ3RoXHJcbihmdW5jdGlvbigkKSB7XHJcblxyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0aWYgKCAkLmlzRnVuY3Rpb24oICQuZm5bICdtYXhsZW5ndGgnIF0pICkge1xyXG5cclxuXHRcdCQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQoJ1tkYXRhLXBsdWdpbi1tYXhsZW5ndGhdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR2YXIgJHRoaXMgPSAkKCB0aGlzICksXHJcblx0XHRcdFx0XHRvcHRzID0ge307XHJcblxyXG5cdFx0XHRcdHZhciBwbHVnaW5PcHRpb25zID0gJHRoaXMuZGF0YSgncGx1Z2luLW9wdGlvbnMnKTtcclxuXHRcdFx0XHRpZiAocGx1Z2luT3B0aW9ucylcclxuXHRcdFx0XHRcdG9wdHMgPSBwbHVnaW5PcHRpb25zO1xyXG5cclxuXHRcdFx0XHQkdGhpcy50aGVtZVBsdWdpbk1heExlbmd0aChvcHRzKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufSkuYXBwbHkodGhpcywgW2pRdWVyeV0pO1xyXG5cclxuLy8gTXVsdGlTZWxlY3RcclxuKGZ1bmN0aW9uKCQpIHtcclxuXHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cclxuXHRpZiAoICQuaXNGdW5jdGlvbiggJC5mblsgJ211bHRpc2VsZWN0JyBdICkgKSB7XHJcblxyXG5cdFx0JChmdW5jdGlvbigpIHtcclxuXHRcdFx0JCggJ1tkYXRhLXBsdWdpbi1tdWx0aXNlbGVjdF0nICkuZWFjaChmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdFx0dmFyICR0aGlzID0gJCggdGhpcyApLFxyXG5cdFx0XHRcdFx0b3B0cyA9IHt9O1xyXG5cclxuXHRcdFx0XHR2YXIgcGx1Z2luT3B0aW9ucyA9ICR0aGlzLmRhdGEoJ3BsdWdpbi1vcHRpb25zJyk7XHJcblx0XHRcdFx0aWYgKHBsdWdpbk9wdGlvbnMpXHJcblx0XHRcdFx0XHRvcHRzID0gcGx1Z2luT3B0aW9ucztcclxuXHJcblx0XHRcdFx0JHRoaXMudGhlbWVQbHVnaW5NdWx0aVNlbGVjdChvcHRzKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pLmFwcGx5KHRoaXMsIFtqUXVlcnldKTtcclxuXHJcbihmdW5jdGlvbigkKSB7XHJcblxyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0aWYgKCAkLmlzRnVuY3Rpb24oICQuZm5bICdwbGFjZWhvbGRlcicgXSkgKSB7XHJcblxyXG5cdFx0JCgnaW5wdXRbcGxhY2Vob2xkZXJdJykucGxhY2Vob2xkZXIoKTtcclxuXHJcblx0fVxyXG5cclxufSkuYXBwbHkodGhpcywgW2pRdWVyeV0pO1xyXG5cclxuXHJcbi8vIFBvcG92ZXJcclxuKGZ1bmN0aW9uKCQpIHtcclxuXHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cclxuXHRpZiAoICQuaXNGdW5jdGlvbiggJC5mblsncG9wb3ZlciddICkgKSB7XHJcblx0XHQkKCAnW2RhdGEtdG9nZ2xlPXBvcG92ZXJdJyApLnBvcG92ZXIoKTtcclxuXHR9XHJcblxyXG59KS5hcHBseSh0aGlzLCBbalF1ZXJ5XSk7XHJcblxyXG4vLyBQb3J0bGV0c1xyXG4oZnVuY3Rpb24oJCkge1xyXG5cclxuXHQndXNlIHN0cmljdCc7XHJcblxyXG5cdCQoZnVuY3Rpb24oKSB7XHJcblx0XHQkKCdbZGF0YS1wbHVnaW4tcG9ydGxldF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgJHRoaXMgPSAkKCB0aGlzICksXHJcblx0XHRcdFx0b3B0cyA9IHt9O1xyXG5cclxuXHRcdFx0dmFyIHBsdWdpbk9wdGlvbnMgPSAkdGhpcy5kYXRhKCdwbHVnaW4tb3B0aW9ucycpO1xyXG5cdFx0XHRpZiAocGx1Z2luT3B0aW9ucylcclxuXHRcdFx0XHRvcHRzID0gcGx1Z2luT3B0aW9ucztcclxuXHJcblx0XHRcdCR0aGlzLnRoZW1lUGx1Z2luUG9ydGxldChvcHRzKTtcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG5cclxufSkuYXBwbHkodGhpcywgW2pRdWVyeV0pO1xyXG5cclxuLy8gU2Nyb2xsIHRvIFRvcFxyXG4oZnVuY3Rpb24odGhlbWUsICQpIHtcclxuXHQvLyBTY3JvbGwgdG8gVG9wIEJ1dHRvbi5cclxuXHRpZiAodHlwZW9mIHRoZW1lLlBsdWdpblNjcm9sbFRvVG9wICE9PSAndW5kZWZpbmVkJykge1xyXG5cdFx0dGhlbWUuUGx1Z2luU2Nyb2xsVG9Ub3AuaW5pdGlhbGl6ZSgpO1xyXG5cdH1cclxufSkuYXBwbHkodGhpcywgW3dpbmRvdy50aGVtZSwgalF1ZXJ5XSk7XHJcblxyXG4vLyBTY3JvbGxhYmxlXHJcbihmdW5jdGlvbigkKSB7XHJcblxyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0aWYgKCAkLmlzRnVuY3Rpb24oJC5mblsgJ25hbm9TY3JvbGxlcicgXSkgKSB7XHJcblxyXG5cdFx0JChmdW5jdGlvbigpIHtcclxuXHRcdFx0JCgnW2RhdGEtcGx1Z2luLXNjcm9sbGFibGVdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR2YXIgJHRoaXMgPSAkKCB0aGlzICksXHJcblx0XHRcdFx0XHRvcHRzID0ge307XHJcblxyXG5cdFx0XHRcdHZhciBwbHVnaW5PcHRpb25zID0gJHRoaXMuZGF0YSgncGx1Z2luLW9wdGlvbnMnKTtcclxuXHRcdFx0XHRpZiAocGx1Z2luT3B0aW9ucykge1xyXG5cdFx0XHRcdFx0b3B0cyA9IHBsdWdpbk9wdGlvbnM7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQkdGhpcy50aGVtZVBsdWdpblNjcm9sbGFibGUob3B0cyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pLmFwcGx5KHRoaXMsIFtqUXVlcnldKTtcclxuXHJcbi8vIFNlbGVjdDJcclxuKGZ1bmN0aW9uKCQpIHtcclxuXHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cclxuXHRpZiAoICQuaXNGdW5jdGlvbigkLmZuWyAnc2VsZWN0MicgXSkgKSB7XHJcblxyXG5cdFx0JChmdW5jdGlvbigpIHtcclxuXHRcdFx0JCgnW2RhdGEtcGx1Z2luLXNlbGVjdFR3b10nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHZhciAkdGhpcyA9ICQoIHRoaXMgKSxcclxuXHRcdFx0XHRcdG9wdHMgPSB7fTtcclxuXHJcblx0XHRcdFx0dmFyIHBsdWdpbk9wdGlvbnMgPSAkdGhpcy5kYXRhKCdwbHVnaW4tb3B0aW9ucycpO1xyXG5cdFx0XHRcdGlmIChwbHVnaW5PcHRpb25zKVxyXG5cdFx0XHRcdFx0b3B0cyA9IHBsdWdpbk9wdGlvbnM7XHJcblxyXG5cdFx0XHRcdCR0aGlzLnRoZW1lUGx1Z2luU2VsZWN0MihvcHRzKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufSkuYXBwbHkodGhpcywgW2pRdWVyeV0pO1xyXG5cclxuLy8gU2lkZWJhciBXaWRnZXRzXHJcbihmdW5jdGlvbigkKSB7XHJcblxyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0ZnVuY3Rpb24gZXhwYW5kKCBjb250ZW50ICkge1xyXG5cdFx0Y29udGVudC5jaGlsZHJlbiggJy53aWRnZXQtY29udGVudCcgKS5zbGlkZURvd24oICdmYXN0JywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQodGhpcykuY3NzKCAnZGlzcGxheScsICcnICk7XHJcblx0XHRcdGNvbnRlbnQucmVtb3ZlQ2xhc3MoICd3aWRnZXQtY29sbGFwc2VkJyApO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBjb2xsYXBzZSggY29udGVudCApIHtcclxuXHRcdGNvbnRlbnQuY2hpbGRyZW4oJy53aWRnZXQtY29udGVudCcgKS5zbGlkZVVwKCAnZmFzdCcsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRjb250ZW50LmFkZENsYXNzKCAnd2lkZ2V0LWNvbGxhcHNlZCcgKTtcclxuXHRcdFx0JCh0aGlzKS5jc3MoICdkaXNwbGF5JywgJycgKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0dmFyICR3aWRnZXRzID0gJCggJy5zaWRlYmFyLXdpZGdldCcgKTtcclxuXHJcblx0JHdpZGdldHMuZWFjaCggZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0dmFyICR3aWRnZXQgPSAkKCB0aGlzICksXHJcblx0XHRcdCR0b2dnbGVyID0gJHdpZGdldC5maW5kKCAnLndpZGdldC10b2dnbGUnICk7XHJcblxyXG5cdFx0JHRvZ2dsZXIub24oJ2NsaWNrLndpZGdldC10b2dnbGVyJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdCR3aWRnZXQuaGFzQ2xhc3MoJ3dpZGdldC1jb2xsYXBzZWQnKSA/IGV4cGFuZCgkd2lkZ2V0KSA6IGNvbGxhcHNlKCR3aWRnZXQpO1xyXG5cdFx0fSk7XHJcblx0fSk7XHJcblxyXG59KS5hcHBseSh0aGlzLCBbalF1ZXJ5XSk7XHJcblxyXG4vLyBTbGlkZXJcclxuKGZ1bmN0aW9uKCQpIHtcclxuXHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cclxuXHRpZiAoICQuaXNGdW5jdGlvbigkLmZuWyAnc2xpZGVyJyBdKSApIHtcclxuXHJcblx0XHQkKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKCdbZGF0YS1wbHVnaW4tc2xpZGVyXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dmFyICR0aGlzID0gJCggdGhpcyApLFxyXG5cdFx0XHRcdFx0b3B0cyA9IHt9O1xyXG5cclxuXHRcdFx0XHR2YXIgcGx1Z2luT3B0aW9ucyA9ICR0aGlzLmRhdGEoJ3BsdWdpbi1vcHRpb25zJyk7XHJcblx0XHRcdFx0aWYgKHBsdWdpbk9wdGlvbnMpIHtcclxuXHRcdFx0XHRcdG9wdHMgPSBwbHVnaW5PcHRpb25zO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0JHRoaXMudGhlbWVQbHVnaW5TbGlkZXIob3B0cyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pLmFwcGx5KHRoaXMsIFtqUXVlcnldKTtcclxuXHJcbi8vIFNwaW5uZXJcclxuKGZ1bmN0aW9uKCQpIHtcclxuXHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cclxuXHRpZiAoICQuaXNGdW5jdGlvbigkLmZuWyAnc3Bpbm5lcicgXSkgKSB7XHJcblxyXG5cdFx0JChmdW5jdGlvbigpIHtcclxuXHRcdFx0JCgnW2RhdGEtcGx1Z2luLXNwaW5uZXJdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR2YXIgJHRoaXMgPSAkKCB0aGlzICksXHJcblx0XHRcdFx0XHRvcHRzID0ge307XHJcblxyXG5cdFx0XHRcdHZhciBwbHVnaW5PcHRpb25zID0gJHRoaXMuZGF0YSgncGx1Z2luLW9wdGlvbnMnKTtcclxuXHRcdFx0XHRpZiAocGx1Z2luT3B0aW9ucylcclxuXHRcdFx0XHRcdG9wdHMgPSBwbHVnaW5PcHRpb25zO1xyXG5cclxuXHRcdFx0XHQkdGhpcy50aGVtZVBsdWdpblNwaW5uZXIob3B0cyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pLmFwcGx5KHRoaXMsIFtqUXVlcnldKTtcclxuXHJcbi8vIFN1bW1lck5vdGVcclxuKGZ1bmN0aW9uKCQpIHtcclxuXHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cclxuXHRpZiAoICQuaXNGdW5jdGlvbigkLmZuWyAnc3VtbWVybm90ZScgXSkgKSB7XHJcblxyXG5cdFx0JChmdW5jdGlvbigpIHtcclxuXHRcdFx0JCgnW2RhdGEtcGx1Z2luLXN1bW1lcm5vdGVdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR2YXIgJHRoaXMgPSAkKCB0aGlzICksXHJcblx0XHRcdFx0XHRvcHRzID0ge307XHJcblxyXG5cdFx0XHRcdHZhciBwbHVnaW5PcHRpb25zID0gJHRoaXMuZGF0YSgncGx1Z2luLW9wdGlvbnMnKTtcclxuXHRcdFx0XHRpZiAocGx1Z2luT3B0aW9ucylcclxuXHRcdFx0XHRcdG9wdHMgPSBwbHVnaW5PcHRpb25zO1xyXG5cclxuXHRcdFx0XHQkdGhpcy50aGVtZVBsdWdpblN1bW1lck5vdGUob3B0cyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pLmFwcGx5KHRoaXMsIFtqUXVlcnldKTtcclxuXHJcbi8vIFRleHRBcmVhIEF1dG9TaXplXHJcbihmdW5jdGlvbigkKSB7XHJcblxyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0aWYgKCB0eXBlb2YgYXV0b3NpemUgPT09ICdmdW5jdGlvbicgKSB7XHJcblxyXG5cdFx0JChmdW5jdGlvbigpIHtcclxuXHRcdFx0JCgnW2RhdGEtcGx1Z2luLXRleHRhcmVhLWF1dG9zaXplXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dmFyICR0aGlzID0gJCggdGhpcyApLFxyXG5cdFx0XHRcdFx0b3B0cyA9IHt9O1xyXG5cclxuXHRcdFx0XHR2YXIgcGx1Z2luT3B0aW9ucyA9ICR0aGlzLmRhdGEoJ3BsdWdpbi1vcHRpb25zJyk7XHJcblx0XHRcdFx0aWYgKHBsdWdpbk9wdGlvbnMpXHJcblx0XHRcdFx0XHRvcHRzID0gcGx1Z2luT3B0aW9ucztcclxuXHJcblx0XHRcdFx0JHRoaXMudGhlbWVQbHVnaW5UZXh0QXJlYUF1dG9TaXplKG9wdHMpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KS5hcHBseSh0aGlzLCBbalF1ZXJ5XSk7XHJcblxyXG4vLyBUaW1lUGlja2VyXHJcbihmdW5jdGlvbigkKSB7XHJcblxyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0aWYgKCAkLmlzRnVuY3Rpb24oJC5mblsgJ3RpbWVwaWNrZXInIF0pICkge1xyXG5cclxuXHRcdCQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQoJ1tkYXRhLXBsdWdpbi10aW1lcGlja2VyXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dmFyICR0aGlzID0gJCggdGhpcyApLFxyXG5cdFx0XHRcdFx0b3B0cyA9IHt9O1xyXG5cclxuXHRcdFx0XHR2YXIgcGx1Z2luT3B0aW9ucyA9ICR0aGlzLmRhdGEoJ3BsdWdpbi1vcHRpb25zJyk7XHJcblx0XHRcdFx0aWYgKHBsdWdpbk9wdGlvbnMpXHJcblx0XHRcdFx0XHRvcHRzID0gcGx1Z2luT3B0aW9ucztcclxuXHJcblx0XHRcdFx0JHRoaXMudGhlbWVQbHVnaW5UaW1lUGlja2VyKG9wdHMpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KS5hcHBseSh0aGlzLCBbalF1ZXJ5XSk7XHJcblxyXG4vLyBUb2dnbGVcclxuKGZ1bmN0aW9uKCQpIHtcclxuXHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cclxuXHQkKGZ1bmN0aW9uKCkge1xyXG5cdFx0JCgnW2RhdGEtcGx1Z2luLXRvZ2dsZV0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgJHRoaXMgPSAkKCB0aGlzICksXHJcblx0XHRcdFx0b3B0cyA9IHt9O1xyXG5cclxuXHRcdFx0dmFyIHBsdWdpbk9wdGlvbnMgPSAkdGhpcy5kYXRhKCdwbHVnaW4tb3B0aW9ucycpO1xyXG5cdFx0XHRpZiAocGx1Z2luT3B0aW9ucylcclxuXHRcdFx0XHRvcHRzID0gcGx1Z2luT3B0aW9ucztcclxuXHJcblx0XHRcdCR0aGlzLnRoZW1lUGx1Z2luVG9nZ2xlKG9wdHMpO1xyXG5cdFx0fSk7XHJcblx0fSk7XHJcblxyXG59KS5hcHBseSh0aGlzLCBbalF1ZXJ5XSk7XHJcblxyXG4vLyBUb29sdGlwXHJcbihmdW5jdGlvbigkKSB7XHJcblxyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0aWYgKCAkLmlzRnVuY3Rpb24oICQuZm5bJ3Rvb2x0aXAnXSApICkge1xyXG5cdFx0JCggJ1tkYXRhLXRvZ2dsZT10b29sdGlwXSxbcmVsPXRvb2x0aXBdJyApLnRvb2x0aXAoeyBjb250YWluZXI6ICdib2R5JyB9KTtcclxuXHR9XHJcblxyXG59KS5hcHBseSh0aGlzLCBbalF1ZXJ5XSk7XHJcblxyXG4vLyBXaWRnZXQgLSBUb2RvXHJcbihmdW5jdGlvbigkKSB7XHJcblxyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0aWYgKCAkLmlzRnVuY3Rpb24oJC5mblsgJ3RoZW1lUGx1Z2luV2lkZ2V0VG9kb0xpc3QnIF0pICkge1xyXG5cclxuXHRcdCQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQoJ1tkYXRhLXBsdWdpbi10b2RvLWxpc3RdLCB1bC53aWRnZXQtdG9kby1saXN0JykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR2YXIgJHRoaXMgPSAkKCB0aGlzICksXHJcblx0XHRcdFx0XHRvcHRzID0ge307XHJcblxyXG5cdFx0XHRcdHZhciBwbHVnaW5PcHRpb25zID0gJHRoaXMuZGF0YSgncGx1Z2luLW9wdGlvbnMnKTtcclxuXHRcdFx0XHRpZiAocGx1Z2luT3B0aW9ucylcclxuXHRcdFx0XHRcdG9wdHMgPSBwbHVnaW5PcHRpb25zO1xyXG5cclxuXHRcdFx0XHQkdGhpcy50aGVtZVBsdWdpbldpZGdldFRvZG9MaXN0KG9wdHMpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KS5hcHBseSh0aGlzLCBbalF1ZXJ5XSk7XHJcblxyXG4vLyBXaWRnZXQgLSBUb2dnbGVcclxuKGZ1bmN0aW9uKCQpIHtcclxuXHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cclxuXHRpZiAoICQuaXNGdW5jdGlvbigkLmZuWyAndGhlbWVQbHVnaW5XaWRnZXRUb2dnbGVFeHBhbmQnIF0pICkge1xyXG5cclxuXHRcdCQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQoJ1tkYXRhLXBsdWdpbi10b2dnbGUtZXhwYW5kXSwgLndpZGdldC10b2dnbGUtZXhwYW5kJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR2YXIgJHRoaXMgPSAkKCB0aGlzICksXHJcblx0XHRcdFx0XHRvcHRzID0ge307XHJcblxyXG5cdFx0XHRcdHZhciBwbHVnaW5PcHRpb25zID0gJHRoaXMuZGF0YSgncGx1Z2luLW9wdGlvbnMnKTtcclxuXHRcdFx0XHRpZiAocGx1Z2luT3B0aW9ucylcclxuXHRcdFx0XHRcdG9wdHMgPSBwbHVnaW5PcHRpb25zO1xyXG5cclxuXHRcdFx0XHQkdGhpcy50aGVtZVBsdWdpbldpZGdldFRvZ2dsZUV4cGFuZChvcHRzKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG59KS5hcHBseSh0aGlzLCBbalF1ZXJ5XSk7XHJcblxyXG4vLyBXb3JkIFJvdGF0b3JcclxuKGZ1bmN0aW9uKCQpIHtcclxuXHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cclxuXHRpZiAoICQuaXNGdW5jdGlvbigkLmZuWyAndGhlbWVQbHVnaW5Xb3JkUm90YXRvcicgXSkgKSB7XHJcblxyXG5cdFx0JChmdW5jdGlvbigpIHtcclxuXHRcdFx0JCgnW2RhdGEtcGx1Z2luLXdvcnQtcm90YXRvcl0sIC53b3J0LXJvdGF0b3I6bm90KC5tYW51YWwpJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR2YXIgJHRoaXMgPSAkKCB0aGlzICksXHJcblx0XHRcdFx0XHRvcHRzID0ge307XHJcblxyXG5cdFx0XHRcdHZhciBwbHVnaW5PcHRpb25zID0gJHRoaXMuZGF0YSgncGx1Z2luLW9wdGlvbnMnKTtcclxuXHRcdFx0XHRpZiAocGx1Z2luT3B0aW9ucylcclxuXHRcdFx0XHRcdG9wdHMgPSBwbHVnaW5PcHRpb25zO1xyXG5cclxuXHRcdFx0XHQkdGhpcy50aGVtZVBsdWdpbldvcmRSb3RhdG9yKG9wdHMpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG59KS5hcHBseSh0aGlzLCBbalF1ZXJ5XSk7XHJcblxyXG4vLyBCYXNlXHJcbihmdW5jdGlvbih0aGVtZSwgJCkge1xyXG5cclxuXHQndXNlIHN0cmljdCc7XHJcblxyXG5cdHRoZW1lID0gdGhlbWUgfHwge307XHJcblxyXG5cdHRoZW1lLlNrZWxldG9uLmluaXRpYWxpemUoKTtcclxuXHJcbn0pLmFwcGx5KHRoaXMsIFt3aW5kb3cudGhlbWUsIGpRdWVyeV0pO1xyXG5cclxuLy8gTWFpbGJveFxyXG4oZnVuY3Rpb24oJCkge1xyXG5cclxuXHQndXNlIHN0cmljdCc7XHJcblxyXG5cdCQoZnVuY3Rpb24oKSB7XHJcblx0XHQkKCdbZGF0YS1tYWlsYm94XScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciAkdGhpcyA9ICQoIHRoaXMgKTtcclxuXHJcblx0XHRcdCR0aGlzLnRoZW1lTWFpbGJveCgpO1xyXG5cdFx0fSk7XHJcblx0fSk7XHJcblxyXG59KS5hcHBseSh0aGlzLCBbalF1ZXJ5XSk7IiwiLypcclxuTmFtZTogXHRcdFx0VGhlbWUgQmFzZVxyXG5Xcml0dGVuIGJ5OiBcdE9rbGVyIFRoZW1lcyAtIChodHRwOi8vd3d3Lm9rbGVyLm5ldClcclxuVGhlbWUgVmVyc2lvbjogXHQyLjIuMFxyXG4qL1xyXG5cclxud2luZG93LnRoZW1lID0ge307XHJcblxyXG4vLyBUaGVtZSBDb21tb24gRnVuY3Rpb25zXHJcbndpbmRvdy50aGVtZS5mbiA9IHtcclxuXHJcblx0Z2V0T3B0aW9uczogZnVuY3Rpb24ob3B0cykge1xyXG5cclxuXHRcdGlmICh0eXBlb2Yob3B0cykgPT0gJ29iamVjdCcpIHtcclxuXHJcblx0XHRcdHJldHVybiBvcHRzO1xyXG5cclxuXHRcdH0gZWxzZSBpZiAodHlwZW9mKG9wdHMpID09ICdzdHJpbmcnKSB7XHJcblxyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdHJldHVybiBKU09OLnBhcnNlKG9wdHMucmVwbGFjZSgvJy9nLCdcIicpLnJlcGxhY2UoJzsnLCcnKSk7XHJcblx0XHRcdH0gY2F0Y2goZSkge1xyXG5cdFx0XHRcdHJldHVybiB7fTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRyZXR1cm4ge307XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG59O1xyXG5cclxuLy8gQW5pbWF0ZVxyXG4oZnVuY3Rpb24odGhlbWUsICQpIHtcclxuXHJcblx0dGhlbWUgPSB0aGVtZSB8fCB7fTtcclxuXHJcblx0dmFyIGluc3RhbmNlTmFtZSA9ICdfX2FuaW1hdGUnO1xyXG5cclxuXHR2YXIgUGx1Z2luQW5pbWF0ZSA9IGZ1bmN0aW9uKCRlbCwgb3B0cykge1xyXG5cdFx0cmV0dXJuIHRoaXMuaW5pdGlhbGl6ZSgkZWwsIG9wdHMpO1xyXG5cdH07XHJcblxyXG5cdFBsdWdpbkFuaW1hdGUuZGVmYXVsdHMgPSB7XHJcblx0XHRhY2NYOiAwLFxyXG5cdFx0YWNjWTogLTE1MCxcclxuXHRcdGRlbGF5OiAxLFxyXG5cdFx0ZHVyYXRpb246ICcxcydcclxuXHR9O1xyXG5cclxuXHRQbHVnaW5BbmltYXRlLnByb3RvdHlwZSA9IHtcclxuXHRcdGluaXRpYWxpemU6IGZ1bmN0aW9uKCRlbCwgb3B0cykge1xyXG5cdFx0XHRpZiAoJGVsLmRhdGEoaW5zdGFuY2VOYW1lKSkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLiRlbCA9ICRlbDtcclxuXHJcblx0XHRcdHRoaXNcclxuXHRcdFx0XHQuc2V0RGF0YSgpXHJcblx0XHRcdFx0LnNldE9wdGlvbnMob3B0cylcclxuXHRcdFx0XHQuYnVpbGQoKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzZXREYXRhOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy4kZWwuZGF0YShpbnN0YW5jZU5hbWUsIHRoaXMpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdHNldE9wdGlvbnM6IGZ1bmN0aW9uKG9wdHMpIHtcclxuXHRcdFx0dGhpcy5vcHRpb25zID0gJC5leHRlbmQodHJ1ZSwge30sIFBsdWdpbkFuaW1hdGUuZGVmYXVsdHMsIG9wdHMsIHtcclxuXHRcdFx0XHR3cmFwcGVyOiB0aGlzLiRlbFxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRidWlsZDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBzZWxmID0gdGhpcyxcclxuXHRcdFx0XHQkZWwgPSB0aGlzLm9wdGlvbnMud3JhcHBlcixcclxuXHRcdFx0XHRkZWxheSA9IDAsXHJcblx0XHRcdFx0ZHVyYXRpb24gPSAnMXMnLFxyXG5cdFx0XHRcdGVsVG9wRGlzdGFuY2UgPSAkZWwub2Zmc2V0KCkudG9wLFxyXG5cdFx0XHRcdHdpbmRvd1RvcERpc3RhbmNlID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG5cclxuXHRcdFx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuXHJcblx0XHRcdFx0JGVsLmFkZENsYXNzKCdhcHBlYXItYW5pbWF0aW9uIGFuaW1hdGVkJyk7XHJcblxyXG5cdFx0XHRcdGlmICghJCgnaHRtbCcpLmhhc0NsYXNzKCduby1jc3N0cmFuc2l0aW9ucycpICYmICQod2luZG93KS53aWR0aCgpID4gNzY3ICYmIGVsVG9wRGlzdGFuY2UgPiB3aW5kb3dUb3BEaXN0YW5jZSkge1xyXG5cclxuXHRcdFx0XHRcdCRlbC5hcHBlYXIoZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHRcdFx0XHQkZWwub25lKCdhbmltYXRpb246c2hvdycsIGZ1bmN0aW9uKGV2KSB7XHJcblx0XHRcdFx0XHRcdFx0ZGVsYXkgPSAoJGVsLmF0dHIoJ2RhdGEtYXBwZWFyLWFuaW1hdGlvbi1kZWxheScpID8gJGVsLmF0dHIoJ2RhdGEtYXBwZWFyLWFuaW1hdGlvbi1kZWxheScpIDogc2VsZi5vcHRpb25zLmRlbGF5KTtcclxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbiA9ICgkZWwuYXR0cignZGF0YS1hcHBlYXItYW5pbWF0aW9uLWR1cmF0aW9uJykgPyAkZWwuYXR0cignZGF0YS1hcHBlYXItYW5pbWF0aW9uLWR1cmF0aW9uJykgOiBzZWxmLm9wdGlvbnMuZHVyYXRpb24pO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAoZHVyYXRpb24gIT0gJzFzJykge1xyXG5cdFx0XHRcdFx0XHRcdFx0JGVsLmNzcygnYW5pbWF0aW9uLWR1cmF0aW9uJywgZHVyYXRpb24pO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRcdCRlbC5hZGRDbGFzcygkZWwuYXR0cignZGF0YS1hcHBlYXItYW5pbWF0aW9uJykgKyAnIGFwcGVhci1hbmltYXRpb24tdmlzaWJsZScpO1xyXG5cdFx0XHRcdFx0XHRcdH0sIGRlbGF5KTtcclxuXHRcdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0XHQkZWwudHJpZ2dlcignYW5pbWF0aW9uOnNob3cnKTtcclxuXHJcblx0XHRcdFx0XHR9LCB7XHJcblx0XHRcdFx0XHRcdGFjY1g6IHNlbGYub3B0aW9ucy5hY2NYLFxyXG5cdFx0XHRcdFx0XHRhY2NZOiBzZWxmLm9wdGlvbnMuYWNjWVxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0JGVsLmFkZENsYXNzKCdhcHBlYXItYW5pbWF0aW9uLXZpc2libGUnKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHQvLyBleHBvc2UgdG8gc2NvcGVcclxuXHQkLmV4dGVuZCh0aGVtZSwge1xyXG5cdFx0UGx1Z2luQW5pbWF0ZTogUGx1Z2luQW5pbWF0ZVxyXG5cdH0pO1xyXG5cclxuXHQvLyBqcXVlcnkgcGx1Z2luXHJcblx0JC5mbi50aGVtZVBsdWdpbkFuaW1hdGUgPSBmdW5jdGlvbihvcHRzKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblxyXG5cdFx0XHRpZiAoJHRoaXMuZGF0YShpbnN0YW5jZU5hbWUpKSB7XHJcblx0XHRcdFx0cmV0dXJuICR0aGlzLmRhdGEoaW5zdGFuY2VOYW1lKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gbmV3IFBsdWdpbkFuaW1hdGUoJHRoaXMsIG9wdHMpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcbn0pLmFwcGx5KHRoaXMsIFt3aW5kb3cudGhlbWUsIGpRdWVyeV0pO1xyXG5cclxuLy8gQm9vdHN0cmFwIFRvZ2dsZVxyXG4oZnVuY3Rpb24oJCkge1xyXG5cclxuXHQndXNlIHN0cmljdCc7XHJcblxyXG5cdHZhciAkd2luZG93ID0gJCggd2luZG93ICk7XHJcblxyXG5cdHZhciB0b2dnbGVDbGFzcyA9IGZ1bmN0aW9uKCAkZWwgKSB7XHJcblx0XHRpZiAoICEhJGVsLmRhdGEoJ3RvZ2dsZUNsYXNzQmluZGVkJykgKSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgJHRhcmdldCxcclxuXHRcdFx0Y2xhc3NOYW1lLFxyXG5cdFx0XHRldmVudE5hbWU7XHJcblxyXG5cdFx0JHRhcmdldCA9ICQoICRlbC5hdHRyKCdkYXRhLXRhcmdldCcpICk7XHJcblx0XHRjbGFzc05hbWUgPSAkZWwuYXR0cignZGF0YS10b2dnbGUtY2xhc3MnKTtcclxuXHRcdGV2ZW50TmFtZSA9ICRlbC5hdHRyKCdkYXRhLWZpcmUtZXZlbnQnKTtcclxuXHJcblxyXG5cdFx0JGVsLm9uKCdjbGljay50b2dnbGVDbGFzcycsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHQkdGFyZ2V0LnRvZ2dsZUNsYXNzKCBjbGFzc05hbWUgKTtcclxuXHJcblx0XHRcdHZhciBoYXNDbGFzcyA9ICR0YXJnZXQuaGFzQ2xhc3MoIGNsYXNzTmFtZSApO1xyXG5cclxuXHRcdFx0aWYgKCAhIWV2ZW50TmFtZSApIHtcclxuXHRcdFx0XHQkd2luZG93LnRyaWdnZXIoIGV2ZW50TmFtZSwge1xyXG5cdFx0XHRcdFx0YWRkZWQ6IGhhc0NsYXNzLFxyXG5cdFx0XHRcdFx0cmVtb3ZlZDogIWhhc0NsYXNzXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdCRlbC5kYXRhKCd0b2dnbGVDbGFzc0JpbmRlZCcsIHRydWUpO1xyXG5cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH07XHJcblxyXG5cdCQoZnVuY3Rpb24oKSB7XHJcblx0XHQkKCdbZGF0YS10b2dnbGUtY2xhc3NdW2RhdGEtdGFyZ2V0XScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRvZ2dsZUNsYXNzKCAkKHRoaXMpICk7XHJcblx0XHR9KTtcclxuXHR9KTtcclxuXHJcbn0pLmFwcGx5KHRoaXMsIFtqUXVlcnldKTtcclxuXHJcbi8vIENhcmRzXHJcbihmdW5jdGlvbigkKSB7XHJcblxyXG5cdCQoZnVuY3Rpb24oKSB7XHJcblx0XHQkKCcuY2FyZCcpXHJcblx0XHRcdC5vbiggJ2NhcmQ6dG9nZ2xlJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dmFyICR0aGlzLFxyXG5cdFx0XHRcdFx0ZGlyZWN0aW9uO1xyXG5cclxuXHRcdFx0XHQkdGhpcyA9ICQodGhpcyk7XHJcblx0XHRcdFx0ZGlyZWN0aW9uID0gJHRoaXMuaGFzQ2xhc3MoICdjYXJkLWNvbGxhcHNlZCcgKSA/ICdEb3duJyA6ICdVcCc7XHJcblxyXG5cdFx0XHRcdCR0aGlzLmZpbmQoJy5jYXJkLWJvZHksIC5jYXJkLWZvb3RlcicpWyAnc2xpZGUnICsgZGlyZWN0aW9uIF0oIDIwMCwgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHQkdGhpc1sgKGRpcmVjdGlvbiA9PT0gJ1VwJyA/ICdhZGQnIDogJ3JlbW92ZScpICsgJ0NsYXNzJyBdKCAnY2FyZC1jb2xsYXBzZWQnIClcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSlcclxuXHRcdFx0Lm9uKCAnY2FyZDpkaXNtaXNzJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcblx0XHRcdFx0aWYgKCAhISggJHRoaXMucGFyZW50KCdkaXYnKS5hdHRyKCdjbGFzcycpIHx8ICcnICkubWF0Y2goIC9jb2wtKHhzfHNtfG1kfGxnKS9nICkgJiYgJHRoaXMuc2libGluZ3MoKS5sZW5ndGggPT09IDAgKSB7XHJcblx0XHRcdFx0XHQkcm93ID0gJHRoaXMuY2xvc2VzdCgnLnJvdycpO1xyXG5cdFx0XHRcdFx0JHRoaXMucGFyZW50KCdkaXYnKS5yZW1vdmUoKTtcclxuXHRcdFx0XHRcdGlmICggJHJvdy5jaGlsZHJlbigpLmxlbmd0aCA9PT0gMCApIHtcclxuXHRcdFx0XHRcdFx0JHJvdy5yZW1vdmUoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0JHRoaXMucmVtb3ZlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0XHQub24oICdjbGljaycsICdbZGF0YS1jYXJkLXRvZ2dsZV0nLCBmdW5jdGlvbiggZSApIHtcclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0JCh0aGlzKS5jbG9zZXN0KCcuY2FyZCcpLnRyaWdnZXIoICdjYXJkOnRvZ2dsZScgKTtcclxuXHRcdFx0fSlcclxuXHRcdFx0Lm9uKCAnY2xpY2snLCAnW2RhdGEtY2FyZC1kaXNtaXNzXScsIGZ1bmN0aW9uKCBlICkge1xyXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHQkKHRoaXMpLmNsb3Nlc3QoJy5jYXJkJykudHJpZ2dlciggJ2NhcmQ6ZGlzbWlzcycgKTtcclxuXHRcdFx0fSlcclxuXHRcdFx0LyogRGVwcmVjYXRlZCAqL1xyXG5cdFx0XHQub24oICdjbGljaycsICcuY2FyZC1hY3Rpb25zIGEuZmEtY2FyZXQtdXAnLCBmdW5jdGlvbiggZSApIHtcclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0dmFyICR0aGlzID0gJCggdGhpcyApO1xyXG5cclxuXHRcdFx0XHQkdGhpc1xyXG5cdFx0XHRcdFx0LnJlbW92ZUNsYXNzKCAnZmEtY2FyZXQtdXAnIClcclxuXHRcdFx0XHRcdC5hZGRDbGFzcyggJ2ZhLWNhcmV0LWRvd24nICk7XHJcblxyXG5cdFx0XHRcdCR0aGlzLmNsb3Nlc3QoJy5jYXJkJykudHJpZ2dlciggJ2NhcmQ6dG9nZ2xlJyApO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQub24oICdjbGljaycsICcuY2FyZC1hY3Rpb25zIGEuZmEtY2FyZXQtZG93bicsIGZ1bmN0aW9uKCBlICkge1xyXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHR2YXIgJHRoaXMgPSAkKCB0aGlzICk7XHJcblxyXG5cdFx0XHRcdCR0aGlzXHJcblx0XHRcdFx0XHQucmVtb3ZlQ2xhc3MoICdmYS1jYXJldC1kb3duJyApXHJcblx0XHRcdFx0XHQuYWRkQ2xhc3MoICdmYS1jYXJldC11cCcgKTtcclxuXHJcblx0XHRcdFx0JHRoaXMuY2xvc2VzdCgnLmNhcmQnKS50cmlnZ2VyKCAnY2FyZDp0b2dnbGUnICk7XHJcblx0XHRcdH0pXHJcblx0XHRcdC5vbiggJ2NsaWNrJywgJy5jYXJkLWFjdGlvbnMgYS5mYS10aW1lcycsIGZ1bmN0aW9uKCBlICkge1xyXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHR2YXIgJHRoaXMgPSAkKCB0aGlzICk7XHJcblxyXG5cdFx0XHRcdCR0aGlzLmNsb3Nlc3QoJy5jYXJkJykudHJpZ2dlciggJ2NhcmQ6ZGlzbWlzcycgKTtcclxuXHRcdFx0fSk7XHJcblx0fSk7XHJcblxyXG59KShqUXVlcnkpO1xyXG5cclxuLy8gQ2Fyb3VzZWxcclxuKGZ1bmN0aW9uKHRoZW1lLCAkKSB7XHJcblxyXG5cdHRoZW1lID0gdGhlbWUgfHwge307XHJcblxyXG5cdHZhciBpbml0aWFsaXplZCA9IGZhbHNlO1xyXG5cdHZhciBpbnN0YW5jZU5hbWUgPSAnX19jYXJvdXNlbCc7XHJcblxyXG5cdHZhciBQbHVnaW5DYXJvdXNlbCA9IGZ1bmN0aW9uKCRlbCwgb3B0cykge1xyXG5cdFx0cmV0dXJuIHRoaXMuaW5pdGlhbGl6ZSgkZWwsIG9wdHMpO1xyXG5cdH07XHJcblxyXG5cdFBsdWdpbkNhcm91c2VsLmRlZmF1bHRzID0ge1xyXG5cdFx0bmF2VGV4dDogW11cclxuXHR9O1xyXG5cclxuXHRQbHVnaW5DYXJvdXNlbC5wcm90b3R5cGUgPSB7XHJcblx0XHRpbml0aWFsaXplOiBmdW5jdGlvbigkZWwsIG9wdHMpIHtcclxuXHRcdFx0aWYgKCAkZWwuZGF0YSggaW5zdGFuY2VOYW1lICkgKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuJGVsID0gJGVsO1xyXG5cclxuXHRcdFx0dGhpc1xyXG5cdFx0XHRcdC5zZXREYXRhKClcclxuXHRcdFx0XHQuc2V0T3B0aW9ucyhvcHRzKVxyXG5cdFx0XHRcdC5idWlsZCgpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdHNldERhdGE6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLiRlbC5kYXRhKGluc3RhbmNlTmFtZSwgdGhpcyk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0c2V0T3B0aW9uczogZnVuY3Rpb24ob3B0cykge1xyXG5cdFx0XHR0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh0cnVlLCB7fSwgUGx1Z2luQ2Fyb3VzZWwuZGVmYXVsdHMsIG9wdHMsIHtcclxuXHRcdFx0XHR3cmFwcGVyOiB0aGlzLiRlbFxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRidWlsZDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMub3B0aW9ucy53cmFwcGVyLm93bENhcm91c2VsKHRoaXMub3B0aW9ucykuYWRkQ2xhc3MoXCJvd2wtY2Fyb3VzZWwtaW5pdFwiKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8vIGV4cG9zZSB0byBzY29wZVxyXG5cdCQuZXh0ZW5kKHRoZW1lLCB7XHJcblx0XHRQbHVnaW5DYXJvdXNlbDogUGx1Z2luQ2Fyb3VzZWxcclxuXHR9KTtcclxuXHJcblx0Ly8ganF1ZXJ5IHBsdWdpblxyXG5cdCQuZm4udGhlbWVQbHVnaW5DYXJvdXNlbCA9IGZ1bmN0aW9uKG9wdHMpIHtcclxuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcblx0XHRcdGlmICgkdGhpcy5kYXRhKGluc3RhbmNlTmFtZSkpIHtcclxuXHRcdFx0XHRyZXR1cm4gJHRoaXMuZGF0YShpbnN0YW5jZU5hbWUpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiBuZXcgUGx1Z2luQ2Fyb3VzZWwoJHRoaXMsIG9wdHMpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxufSkuYXBwbHkodGhpcywgW3dpbmRvdy50aGVtZSwgalF1ZXJ5XSk7XHJcblxyXG4vLyBDaGFydCBDaXJjdWxhclxyXG4oZnVuY3Rpb24odGhlbWUsICQpIHtcclxuXHJcblx0dGhlbWUgPSB0aGVtZSB8fCB7fTtcclxuXHJcblx0dmFyIGluc3RhbmNlTmFtZSA9ICdfX2NoYXJ0Q2lyY3VsYXInO1xyXG5cclxuXHR2YXIgUGx1Z2luQ2hhcnRDaXJjdWxhciA9IGZ1bmN0aW9uKCRlbCwgb3B0cykge1xyXG5cdFx0cmV0dXJuIHRoaXMuaW5pdGlhbGl6ZSgkZWwsIG9wdHMpO1xyXG5cdH07XHJcblxyXG5cdFBsdWdpbkNoYXJ0Q2lyY3VsYXIuZGVmYXVsdHMgPSB7XHJcblx0XHRhY2NYOiAwLFxyXG5cdFx0YWNjWTogLTE1MCxcclxuXHRcdGRlbGF5OiAxLFxyXG5cdFx0YmFyQ29sb3I6ICcjMDA4OENDJyxcclxuXHRcdHRyYWNrQ29sb3I6ICcjZjJmMmYyJyxcclxuXHRcdHNjYWxlQ29sb3I6IGZhbHNlLFxyXG5cdFx0c2NhbGVMZW5ndGg6IDUsXHJcblx0XHRsaW5lQ2FwOiAncm91bmQnLFxyXG5cdFx0bGluZVdpZHRoOiAxMyxcclxuXHRcdHNpemU6IDE3NSxcclxuXHRcdHJvdGF0ZTogMCxcclxuXHRcdGFuaW1hdGU6ICh7XHJcblx0XHRcdGR1cmF0aW9uOiAyNTAwLFxyXG5cdFx0XHRlbmFibGVkOiB0cnVlXHJcblx0XHR9KVxyXG5cdH07XHJcblxyXG5cdFBsdWdpbkNoYXJ0Q2lyY3VsYXIucHJvdG90eXBlID0ge1xyXG5cdFx0aW5pdGlhbGl6ZTogZnVuY3Rpb24oJGVsLCBvcHRzKSB7XHJcblx0XHRcdGlmICggJGVsLmRhdGEoIGluc3RhbmNlTmFtZSApICkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLiRlbCA9ICRlbDtcclxuXHJcblx0XHRcdHRoaXNcclxuXHRcdFx0XHQuc2V0RGF0YSgpXHJcblx0XHRcdFx0LnNldE9wdGlvbnMob3B0cylcclxuXHRcdFx0XHQuYnVpbGQoKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzZXREYXRhOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy4kZWwuZGF0YShpbnN0YW5jZU5hbWUsIHRoaXMpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdHNldE9wdGlvbnM6IGZ1bmN0aW9uKG9wdHMpIHtcclxuXHRcdFx0dGhpcy5vcHRpb25zID0gJC5leHRlbmQodHJ1ZSwge30sIFBsdWdpbkNoYXJ0Q2lyY3VsYXIuZGVmYXVsdHMsIG9wdHMsIHtcclxuXHRcdFx0XHR3cmFwcGVyOiB0aGlzLiRlbFxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRidWlsZDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBzZWxmID0gdGhpcyxcclxuXHRcdFx0XHQkZWwgPSB0aGlzLm9wdGlvbnMud3JhcHBlcixcclxuXHRcdFx0XHR2YWx1ZSA9ICgkZWwuYXR0cignZGF0YS1wZXJjZW50JykgPyAkZWwuYXR0cignZGF0YS1wZXJjZW50JykgOiAwKSxcclxuXHRcdFx0XHRwZXJjZW50RWwgPSAkZWwuZmluZCgnLnBlcmNlbnQnKSxcclxuXHRcdFx0XHRzaG91bGRBbmltYXRlLFxyXG5cdFx0XHRcdGRhdGE7XHJcblxyXG5cdFx0XHRzaG91bGRBbmltYXRlID0gJC5pc0Z1bmN0aW9uKCQuZm5bICdhcHBlYXInIF0pICYmICggdHlwZW9mICQuYnJvd3NlciAhPT0gJ3VuZGVmaW5lZCcgJiYgISQuYnJvd3Nlci5tb2JpbGUgKTtcclxuXHRcdFx0ZGF0YSA9IHsgYWNjWDogc2VsZi5vcHRpb25zLmFjY1gsIGFjY1k6IHNlbGYub3B0aW9ucy5hY2NZIH07XHJcblxyXG5cdFx0XHQkLmV4dGVuZCh0cnVlLCBzZWxmLm9wdGlvbnMsIHtcclxuXHRcdFx0XHRvblN0ZXA6IGZ1bmN0aW9uKGZyb20sIHRvLCBjdXJyZW50VmFsdWUpIHtcclxuXHRcdFx0XHRcdHBlcmNlbnRFbC5odG1sKHBhcnNlSW50KGN1cnJlbnRWYWx1ZSkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHQkZWwuYXR0cignZGF0YS1wZXJjZW50JywgKHNob3VsZEFuaW1hdGUgPyAwIDogdmFsdWUpICk7XHJcblxyXG5cdFx0XHQkZWwuZWFzeVBpZUNoYXJ0KCB0aGlzLm9wdGlvbnMgKTtcclxuXHJcblx0XHRcdGlmICggc2hvdWxkQW5pbWF0ZSApIHtcclxuXHRcdFx0XHQkZWwuYXBwZWFyKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0JGVsLmRhdGEoJ2Vhc3lQaWVDaGFydCcpLnVwZGF0ZSh2YWx1ZSk7XHJcblx0XHRcdFx0XHRcdCRlbC5hdHRyKCdkYXRhLXBlcmNlbnQnLCB2YWx1ZSk7XHJcblxyXG5cdFx0XHRcdFx0fSwgc2VsZi5vcHRpb25zLmRlbGF5KTtcclxuXHRcdFx0XHR9LCBkYXRhKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQkZWwuZGF0YSgnZWFzeVBpZUNoYXJ0JykudXBkYXRlKHZhbHVlKTtcclxuXHRcdFx0XHQkZWwuYXR0cignZGF0YS1wZXJjZW50JywgdmFsdWUpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHQvLyBleHBvc2UgdG8gc2NvcGVcclxuXHQkLmV4dGVuZCh0cnVlLCB0aGVtZSwge1xyXG5cdFx0Q2hhcnQ6IHtcclxuXHRcdFx0UGx1Z2luQ2hhcnRDaXJjdWxhcjogUGx1Z2luQ2hhcnRDaXJjdWxhclxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHQvLyBqcXVlcnkgcGx1Z2luXHJcblx0JC5mbi50aGVtZVBsdWdpbkNoYXJ0Q2lyY3VsYXIgPSBmdW5jdGlvbihvcHRzKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblxyXG5cdFx0XHRpZiAoJHRoaXMuZGF0YShpbnN0YW5jZU5hbWUpKSB7XHJcblx0XHRcdFx0cmV0dXJuICR0aGlzLmRhdGEoaW5zdGFuY2VOYW1lKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gbmV3IFBsdWdpbkNoYXJ0Q2lyY3VsYXIoJHRoaXMsIG9wdHMpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxufSkuYXBwbHkodGhpcywgW3dpbmRvdy50aGVtZSwgalF1ZXJ5XSk7XHJcblxyXG4vLyBDb2RlbWlycm9yXHJcbihmdW5jdGlvbih0aGVtZSwgJCkge1xyXG5cclxuXHR0aGVtZSA9IHRoZW1lIHx8IHt9O1xyXG5cclxuXHR2YXIgaW5zdGFuY2VOYW1lID0gJ19fY29kZW1pcnJvcic7XHJcblxyXG5cdHZhciBQbHVnaW5Db2RlTWlycm9yID0gZnVuY3Rpb24oJGVsLCBvcHRzKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5pbml0aWFsaXplKCRlbCwgb3B0cyk7XHJcblx0fTtcclxuXHJcblx0UGx1Z2luQ29kZU1pcnJvci5kZWZhdWx0cyA9IHtcclxuXHRcdGxpbmVOdW1iZXJzOiB0cnVlLFxyXG5cdFx0c3R5bGVBY3RpdmVMaW5lOiB0cnVlLFxyXG5cdFx0bWF0Y2hCcmFja2V0czogdHJ1ZSxcclxuXHRcdHRoZW1lOiAnbW9ub2thaSdcclxuXHR9O1xyXG5cclxuXHRQbHVnaW5Db2RlTWlycm9yLnByb3RvdHlwZSA9IHtcclxuXHRcdGluaXRpYWxpemU6IGZ1bmN0aW9uKCRlbCwgb3B0cykge1xyXG5cdFx0XHRpZiAoICRlbC5kYXRhKCBpbnN0YW5jZU5hbWUgKSApIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy4kZWwgPSAkZWw7XHJcblxyXG5cdFx0XHR0aGlzXHJcblx0XHRcdFx0LnNldERhdGEoKVxyXG5cdFx0XHRcdC5zZXRPcHRpb25zKG9wdHMpXHJcblx0XHRcdFx0LmJ1aWxkKCk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0c2V0RGF0YTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMuJGVsLmRhdGEoaW5zdGFuY2VOYW1lLCB0aGlzKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzZXRPcHRpb25zOiBmdW5jdGlvbihvcHRzKSB7XHJcblx0XHRcdHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKCB0cnVlLCB7fSwgUGx1Z2luQ29kZU1pcnJvci5kZWZhdWx0cywgb3B0cyApO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdGJ1aWxkOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0Q29kZU1pcnJvci5mcm9tVGV4dEFyZWEoIHRoaXMuJGVsLmdldCgwKSwgdGhpcy5vcHRpb25zICk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHQvLyBleHBvc2UgdG8gc2NvcGVcclxuXHQkLmV4dGVuZCh0aGVtZSwge1xyXG5cdFx0UGx1Z2luQ29kZU1pcnJvcjogUGx1Z2luQ29kZU1pcnJvclxyXG5cdH0pO1xyXG5cclxuXHQvLyBqcXVlcnkgcGx1Z2luXHJcblx0JC5mbi50aGVtZVBsdWdpbkNvZGVNaXJyb3IgPSBmdW5jdGlvbihvcHRzKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG5cclxuXHRcdFx0aWYgKCR0aGlzLmRhdGEoaW5zdGFuY2VOYW1lKSkge1xyXG5cdFx0XHRcdHJldHVybiAkdGhpcy5kYXRhKGluc3RhbmNlTmFtZSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBQbHVnaW5Db2RlTWlycm9yKCR0aGlzLCBvcHRzKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcbn0pLmFwcGx5KHRoaXMsIFt3aW5kb3cudGhlbWUsIGpRdWVyeV0pO1xyXG5cclxuLy8gQ29sb3JwaWNrZXJcclxuKGZ1bmN0aW9uKHRoZW1lLCAkKSB7XHJcblxyXG5cdHRoZW1lID0gdGhlbWUgfHwge307XHJcblxyXG5cdHZhciBpbnN0YW5jZU5hbWUgPSAnX19jb2xvcnBpY2tlcic7XHJcblxyXG5cdHZhciBQbHVnaW5Db2xvclBpY2tlciA9IGZ1bmN0aW9uKCRlbCwgb3B0cykge1xyXG5cdFx0cmV0dXJuIHRoaXMuaW5pdGlhbGl6ZSgkZWwsIG9wdHMpO1xyXG5cdH07XHJcblxyXG5cdFBsdWdpbkNvbG9yUGlja2VyLmRlZmF1bHRzID0ge1xyXG5cdH07XHJcblxyXG5cdFBsdWdpbkNvbG9yUGlja2VyLnByb3RvdHlwZSA9IHtcclxuXHRcdGluaXRpYWxpemU6IGZ1bmN0aW9uKCRlbCwgb3B0cykge1xyXG5cdFx0XHRpZiAoICRlbC5kYXRhKCBpbnN0YW5jZU5hbWUgKSApIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy4kZWwgPSAkZWw7XHJcblxyXG5cdFx0XHR0aGlzXHJcblx0XHRcdFx0LnNldERhdGEoKVxyXG5cdFx0XHRcdC5zZXRPcHRpb25zKG9wdHMpXHJcblx0XHRcdFx0LmJ1aWxkKCk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0c2V0RGF0YTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMuJGVsLmRhdGEoaW5zdGFuY2VOYW1lLCB0aGlzKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzZXRPcHRpb25zOiBmdW5jdGlvbihvcHRzKSB7XHJcblx0XHRcdHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKCB0cnVlLCB7fSwgUGx1Z2luQ29sb3JQaWNrZXIuZGVmYXVsdHMsIG9wdHMgKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRidWlsZDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMuJGVsLmNvbG9ycGlja2VyKCB0aGlzLm9wdGlvbnMgKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8vIGV4cG9zZSB0byBzY29wZVxyXG5cdCQuZXh0ZW5kKHRoZW1lLCB7XHJcblx0XHRQbHVnaW5Db2xvclBpY2tlcjogUGx1Z2luQ29sb3JQaWNrZXJcclxuXHR9KTtcclxuXHJcblx0Ly8ganF1ZXJ5IHBsdWdpblxyXG5cdCQuZm4udGhlbWVQbHVnaW5Db2xvclBpY2tlciA9IGZ1bmN0aW9uKG9wdHMpIHtcclxuXHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblxyXG5cdFx0XHRpZiAoJHRoaXMuZGF0YShpbnN0YW5jZU5hbWUpKSB7XHJcblx0XHRcdFx0cmV0dXJuICR0aGlzLmRhdGEoaW5zdGFuY2VOYW1lKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gbmV3IFBsdWdpbkNvbG9yUGlja2VyKCR0aGlzLCBvcHRzKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcbn0pLmFwcGx5KHRoaXMsIFt3aW5kb3cudGhlbWUsIGpRdWVyeV0pO1xyXG5cclxuLy8gRGF0YSBUYWJsZXMgLSBDb25maWdcclxuKGZ1bmN0aW9uKCQpIHtcclxuXHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cclxuXHQvLyB3ZSBvdmVyd3JpdGUgaW5pdGlhbGl6ZSBvZiBhbGwgZGF0YXRhYmxlcyBoZXJlXHJcblx0Ly8gYmVjYXVzZSB3ZSB3YW50IHRvIHVzZSBzZWxlY3QyLCBnaXZlIHNlYXJjaCBpbnB1dCBhIGJvb3RzdHJhcCBsb29rXHJcblx0Ly8ga2VlcCBpbiBtaW5kIGlmIHlvdSBvdmVyd3JpdGUgdGhpcyBmbkluaXRDb21wbGV0ZSBzb21ld2hlcmUsXHJcblx0Ly8geW91IHNob3VsZCBydW4gdGhlIGNvZGUgaW5zaWRlIHRoaXMgZnVuY3Rpb24gdG8ga2VlcCBmdW5jdGlvbmFsaXR5LlxyXG5cdC8vXHJcblx0Ly8gdGhlcmUncyBubyBiZXR0ZXIgd2F5IHRvIGRvIHRoaXMgYXQgdGhpcyB0aW1lIDooXHJcblx0aWYgKCAkLmlzRnVuY3Rpb24oICQuZm5bICdkYXRhVGFibGUnIF0gKSApIHtcclxuXHJcblx0XHQkLmV4dGVuZCh0cnVlLCAkLmZuLmRhdGFUYWJsZS5kZWZhdWx0cywge1xyXG5cdFx0XHRvTGFuZ3VhZ2U6IHtcclxuXHRcdFx0XHRzTGVuZ3RoTWVudTogJ19NRU5VXyByZWNvcmRzIHBlciBwYWdlJyxcclxuXHRcdFx0XHRzUHJvY2Vzc2luZzogJzxpIGNsYXNzPVwiZmFzIGZhLXNwaW5uZXIgZmEtc3BpblwiPjwvaT4gTG9hZGluZycsXHJcblx0XHRcdFx0c1NlYXJjaDogJydcclxuXHRcdFx0fSxcclxuXHRcdFx0Zm5Jbml0Q29tcGxldGU6IGZ1bmN0aW9uKCBzZXR0aW5ncywganNvbiApIHtcclxuXHRcdFx0XHQvLyBzZWxlY3QgMlxyXG5cdFx0XHRcdGlmICggJC5pc0Z1bmN0aW9uKCAkLmZuWyAnc2VsZWN0MicgXSApICkge1xyXG5cdFx0XHRcdFx0JCgnLmRhdGFUYWJsZXNfbGVuZ3RoIHNlbGVjdCcsIHNldHRpbmdzLm5UYWJsZVdyYXBwZXIpLnNlbGVjdDIoe1xyXG5cdFx0XHRcdFx0XHR0aGVtZTogJ2Jvb3RzdHJhcCcsXHJcblx0XHRcdFx0XHRcdG1pbmltdW1SZXN1bHRzRm9yU2VhcmNoOiAtMVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR2YXIgb3B0aW9ucyA9ICQoICd0YWJsZScsIHNldHRpbmdzLm5UYWJsZVdyYXBwZXIgKS5kYXRhKCAncGx1Z2luLW9wdGlvbnMnICkgfHwge307XHJcblxyXG5cdFx0XHRcdC8vIHNlYXJjaFxyXG5cdFx0XHRcdHZhciAkc2VhcmNoID0gJCgnLmRhdGFUYWJsZXNfZmlsdGVyIGlucHV0Jywgc2V0dGluZ3MublRhYmxlV3JhcHBlcik7XHJcblxyXG5cdFx0XHRcdCRzZWFyY2hcclxuXHRcdFx0XHRcdC5hdHRyKHtcclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI6IHR5cGVvZiBvcHRpb25zLnNlYXJjaFBsYWNlaG9sZGVyICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMuc2VhcmNoUGxhY2Vob2xkZXIgOiAnU2VhcmNoLi4uJ1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdC5yZW1vdmVDbGFzcygnZm9ybS1jb250cm9sLXNtJykuYWRkQ2xhc3MoJ2Zvcm0tY29udHJvbCBwdWxsLXJpZ2h0Jyk7XHJcblxyXG5cdFx0XHRcdGlmICggJC5pc0Z1bmN0aW9uKCAkLmZuLnBsYWNlaG9sZGVyICkgKSB7XHJcblx0XHRcdFx0XHQkc2VhcmNoLnBsYWNlaG9sZGVyKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufSkuYXBwbHkodGhpcywgW2pRdWVyeV0pO1xyXG5cclxuLy8gRGF0ZXBpY2tlclxyXG4oZnVuY3Rpb24odGhlbWUsICQpIHtcclxuXHJcblx0dGhlbWUgPSB0aGVtZSB8fCB7fTtcclxuXHJcblx0dmFyIGluc3RhbmNlTmFtZSA9ICdfX2RhdGVwaWNrZXInO1xyXG5cclxuXHR2YXIgUGx1Z2luRGF0ZVBpY2tlciA9IGZ1bmN0aW9uKCRlbCwgb3B0cykge1xyXG5cdFx0cmV0dXJuIHRoaXMuaW5pdGlhbGl6ZSgkZWwsIG9wdHMpO1xyXG5cdH07XHJcblxyXG5cdFBsdWdpbkRhdGVQaWNrZXIuZGVmYXVsdHMgPSB7XHJcblx0fTtcclxuXHJcblx0UGx1Z2luRGF0ZVBpY2tlci5wcm90b3R5cGUgPSB7XHJcblx0XHRpbml0aWFsaXplOiBmdW5jdGlvbigkZWwsIG9wdHMpIHtcclxuXHRcdFx0aWYgKCAkZWwuZGF0YSggaW5zdGFuY2VOYW1lICkgKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuJGVsID0gJGVsO1xyXG5cclxuXHRcdFx0dGhpc1xyXG5cdFx0XHRcdC5zZXRWYXJzKClcclxuXHRcdFx0XHQuc2V0RGF0YSgpXHJcblx0XHRcdFx0LnNldE9wdGlvbnMob3B0cylcclxuXHRcdFx0XHQuYnVpbGQoKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzZXRWYXJzOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy5za2luID0gdGhpcy4kZWwuZGF0YSggJ3BsdWdpbi1za2luJyApO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdHNldERhdGE6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLiRlbC5kYXRhKGluc3RhbmNlTmFtZSwgdGhpcyk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0c2V0T3B0aW9uczogZnVuY3Rpb24ob3B0cykge1xyXG5cdFx0XHR0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCggdHJ1ZSwge30sIFBsdWdpbkRhdGVQaWNrZXIuZGVmYXVsdHMsIG9wdHMgKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRidWlsZDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMuJGVsLmJvb3RzdHJhcERQKCB0aGlzLm9wdGlvbnMgKTtcclxuXHJcblx0XHRcdGlmICggISF0aGlzLnNraW4gJiYgdHlwZW9mKHRoaXMuJGVsLmRhdGEoJ2RhdGVwaWNrZXInKS5waWNrZXIpICE9ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdFx0dGhpcy4kZWwuZGF0YSgnZGF0ZXBpY2tlcicpLnBpY2tlci5hZGRDbGFzcyggJ2RhdGVwaWNrZXItJyArIHRoaXMuc2tpbiApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHQvLyBleHBvc2UgdG8gc2NvcGVcclxuXHQkLmV4dGVuZCh0aGVtZSwge1xyXG5cdFx0UGx1Z2luRGF0ZVBpY2tlcjogUGx1Z2luRGF0ZVBpY2tlclxyXG5cdH0pO1xyXG5cclxuXHQvLyBqcXVlcnkgcGx1Z2luXHJcblx0JC5mbi50aGVtZVBsdWdpbkRhdGVQaWNrZXIgPSBmdW5jdGlvbihvcHRzKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG5cclxuXHRcdFx0aWYgKCR0aGlzLmRhdGEoaW5zdGFuY2VOYW1lKSkge1xyXG5cdFx0XHRcdHJldHVybiAkdGhpcy5kYXRhKGluc3RhbmNlTmFtZSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBQbHVnaW5EYXRlUGlja2VyKCR0aGlzLCBvcHRzKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcbn0pLmFwcGx5KHRoaXMsIFt3aW5kb3cudGhlbWUsIGpRdWVyeV0pO1xyXG5cclxuLy8gSGVhZGVyIE1lbnUgTmF2XHJcbihmdW5jdGlvbih0aGVtZSwgJCkge1xyXG5cclxuXHQndXNlIHN0cmljdCc7XHJcblxyXG5cdHRoZW1lID0gdGhlbWUgfHwge307XHJcblxyXG5cdHZhciBpbml0aWFsaXplZCA9IGZhbHNlO1xyXG5cclxuXHQkLmV4dGVuZCh0aGVtZSwge1xyXG5cclxuXHRcdE5hdjoge1xyXG5cclxuXHRcdFx0ZGVmYXVsdHM6IHtcclxuXHRcdFx0XHR3cmFwcGVyOiAkKCcjbWFpbk5hdicpLFxyXG5cdFx0XHRcdHNjcm9sbERlbGF5OiA2MDAsXHJcblx0XHRcdFx0c2Nyb2xsQW5pbWF0aW9uOiAnZWFzZU91dFF1YWQnXHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRpbml0aWFsaXplOiBmdW5jdGlvbigkd3JhcHBlciwgb3B0cykge1xyXG5cdFx0XHRcdGlmIChpbml0aWFsaXplZCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpbml0aWFsaXplZCA9IHRydWU7XHJcblx0XHRcdFx0dGhpcy4kd3JhcHBlciA9ICgkd3JhcHBlciB8fCB0aGlzLmRlZmF1bHRzLndyYXBwZXIpO1xyXG5cclxuXHRcdFx0XHR0aGlzXHJcblx0XHRcdFx0XHQuc2V0T3B0aW9ucyhvcHRzKVxyXG5cdFx0XHRcdFx0LmJ1aWxkKClcclxuXHRcdFx0XHRcdC5ldmVudHMoKTtcclxuXHJcblx0XHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRzZXRPcHRpb25zOiBmdW5jdGlvbihvcHRzKSB7XHJcblx0XHRcdFx0Ly8gdGhpcy5vcHRpb25zID0gJC5leHRlbmQodHJ1ZSwge30sIHRoaXMuZGVmYXVsdHMsIG9wdHMsIHRoZW1lLmZuLmdldE9wdGlvbnModGhpcy4kd3JhcHBlci5kYXRhKCdwbHVnaW4tb3B0aW9ucycpKSk7XHJcblxyXG5cdFx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0YnVpbGQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHZhciBzZWxmID0gdGhpcyxcclxuXHRcdFx0XHRcdCRodG1sID0gJCgnaHRtbCcpLFxyXG5cdFx0XHRcdFx0JGhlYWRlciA9ICQoJy5oZWFkZXInKSxcclxuXHRcdFx0XHRcdHRodW1iSW5mb1ByZXZpZXc7XHJcblxyXG5cdFx0XHRcdC8vIEFkZCBBcnJvd3NcclxuXHRcdFx0XHQkaGVhZGVyLmZpbmQoJy5kcm9wZG93bi10b2dnbGU6bm90KC5ub3RpZmljYXRpb24taWNvbiksIC5kcm9wZG93bi1zdWJtZW51ID4gYScpLmFwcGVuZCgkKCc8aSAvPicpLmFkZENsYXNzKCdmYXMgZmEtY2FyZXQtZG93bicpKTtcclxuXHJcblx0XHRcdFx0Ly8gUHJldmlldyBUaHVtYnNcclxuXHRcdFx0XHRzZWxmLiR3cmFwcGVyLmZpbmQoJ2FbZGF0YS10aHVtYi1wcmV2aWV3XScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHR0aHVtYkluZm9QcmV2aWV3ID0gJCgnPHNwYW4gLz4nKS5hZGRDbGFzcygndGh1bWItaW5mbyB0aHVtYi1pbmZvLXByZXZpZXcnKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0LmFwcGVuZCgkKCc8c3BhbiAvPicpLmFkZENsYXNzKCd0aHVtYi1pbmZvLXdyYXBwZXInKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuYXBwZW5kKCQoJzxzcGFuIC8+JykuYWRkQ2xhc3MoJ3RodW1iLWluZm8taW1hZ2UnKS5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnLCAndXJsKCcgKyAkKHRoaXMpLmRhdGEoJ3RodW1iLXByZXZpZXcnKSArICcpJylcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICApXHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgICk7XHJcblxyXG5cdFx0XHRcdFx0JCh0aGlzKS5hcHBlbmQodGh1bWJJbmZvUHJldmlldyk7XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdC8vIFNpZGUgSGVhZGVyIFJpZ2h0IChSZXZlcnNlIERyb3Bkb3duKVxyXG5cdFx0XHRcdGlmKCRodG1sLmhhc0NsYXNzKCdzaWRlLWhlYWRlci1yaWdodCcpKSB7XHJcblx0XHRcdFx0XHQkaGVhZGVyLmZpbmQoJy5kcm9wZG93bicpLmFkZENsYXNzKCdkcm9wZG93bi1yZXZlcnNlJyk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdGV2ZW50czogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dmFyIHNlbGYgPSB0aGlzLFxyXG5cdFx0XHRcdFx0JGhlYWRlciA9ICQoJy5oZWFkZXInKSxcclxuXHRcdFx0XHRcdCR3aW5kb3cgPSAkKHdpbmRvdyk7XHJcblxyXG5cdFx0XHRcdCRoZWFkZXIuZmluZCgnYVtocmVmPVwiI1wiXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0Ly8gTW9iaWxlIEFycm93c1xyXG5cdFx0XHRcdCRoZWFkZXIuZmluZCgnLmRyb3Bkb3duLXRvZ2dsZVtocmVmPVwiI1wiXSwgLmRyb3Bkb3duLXN1Ym1lbnUgYVtocmVmPVwiI1wiXSwgLmRyb3Bkb3duLXRvZ2dsZVtocmVmIT1cIiNcIl0gLmZhLWNhcmV0LWRvd24sIC5kcm9wZG93bi1zdWJtZW51IGFbaHJlZiE9XCIjXCJdIC5mYS1jYXJldC1kb3duJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdFx0aWYgKCR3aW5kb3cud2lkdGgoKSA8IDk5Mikge1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpLmNsb3Nlc3QoJ2xpJykudG9nZ2xlQ2xhc3MoJ3Nob3dlZCcpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHQvLyBUb3VjaCBEZXZpY2VzIHdpdGggbm9ybWFsIHJlc29sdXRpb25zXHJcblx0XHRcdFx0aWYoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XHJcblx0XHRcdFx0XHQkaGVhZGVyLmZpbmQoJy5kcm9wZG93bi10b2dnbGU6bm90KFtocmVmPVwiI1wiXSksIC5kcm9wZG93bi1zdWJtZW51ID4gYTpub3QoW2hyZWY9XCIjXCJdKScpXHJcblx0XHRcdFx0XHRcdC5vbigndG91Y2hzdGFydCBjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcdFx0XHRpZigkd2luZG93LndpZHRoKCkgPiA5OTEpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGlmKGUuaGFuZGxlZCAhPT0gdHJ1ZSkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIGxpID0gJCh0aGlzKS5jbG9zZXN0KCdsaScpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYobGkuaGFzQ2xhc3MoJ3RhcHBlZCcpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bG9jYXRpb24uaHJlZiA9ICQodGhpcykuYXR0cignaHJlZicpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRsaS5hZGRDbGFzcygndGFwcGVkJyk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRlLmhhbmRsZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHQub24oJ2JsdXInLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS5jbG9zZXN0KCdsaScpLnJlbW92ZUNsYXNzKCd0YXBwZWQnKTtcclxuXHRcdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gQ29sbGFwc2UgTmF2XHJcblx0XHRcdFx0JGhlYWRlci5maW5kKCdbZGF0YS1jb2xsYXBzZS1uYXZdJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdFx0JCh0aGlzKS5wYXJlbnRzKCcuY29sbGFwc2UnKS5yZW1vdmVDbGFzcygnaW4nKTtcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0Ly8gQW5jaG9ycyBQb3NpdGlvblxyXG5cdFx0XHRcdCQoJ1tkYXRhLWhhc2hdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdFx0XHR2YXIgdGFyZ2V0ID0gJCh0aGlzKS5hdHRyKCdocmVmJyksXHJcblx0XHRcdFx0XHRcdG9mZnNldCA9ICgkKHRoaXMpLmlzKFwiW2RhdGEtaGFzaC1vZmZzZXRdXCIpID8gJCh0aGlzKS5kYXRhKCdoYXNoLW9mZnNldCcpIDogMCk7XHJcblxyXG5cdFx0XHRcdFx0aWYoJCh0YXJnZXQpLmdldCgwKSkge1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8vIENsb3NlIENvbGxhcHNlIGlmIE9wZW5lZFxyXG5cdFx0XHRcdFx0XHRcdCQodGhpcykucGFyZW50cygnLmNvbGxhcHNlLmluJykucmVtb3ZlQ2xhc3MoJ2luJyk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHNlbGYuc2Nyb2xsVG9UYXJnZXQodGFyZ2V0LCBvZmZzZXQpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRzY3JvbGxUb1RhcmdldDogZnVuY3Rpb24odGFyZ2V0LCBvZmZzZXQpIHtcclxuXHRcdFx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG5cdFx0XHRcdCQoJ2JvZHknKS5hZGRDbGFzcygnc2Nyb2xsaW5nJyk7XHJcblxyXG5cdFx0XHRcdCQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuXHRcdFx0XHRcdHNjcm9sbFRvcDogJCh0YXJnZXQpLm9mZnNldCgpLnRvcCAtIG9mZnNldFxyXG5cdFx0XHRcdH0sIHNlbGYub3B0aW9ucy5zY3JvbGxEZWxheSwgc2VsZi5vcHRpb25zLnNjcm9sbEFuaW1hdGlvbiwgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHQkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ3Njcm9sbGluZycpO1xyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gdGhpcztcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxufSkuYXBwbHkodGhpcywgW3dpbmRvdy50aGVtZSwgalF1ZXJ5XSk7XHJcblxyXG4vLyBpb3NTd2l0Y2hlclxyXG4oZnVuY3Rpb24odGhlbWUsICQpIHtcclxuXHJcblx0dGhlbWUgPSB0aGVtZSB8fCB7fTtcclxuXHJcblx0dmFyIGluc3RhbmNlTmFtZSA9ICdfX0lPUzdTd2l0Y2gnO1xyXG5cclxuXHR2YXIgUGx1Z2luSU9TN1N3aXRjaCA9IGZ1bmN0aW9uKCRlbCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuaW5pdGlhbGl6ZSgkZWwpO1xyXG5cdH07XHJcblxyXG5cdFBsdWdpbklPUzdTd2l0Y2gucHJvdG90eXBlID0ge1xyXG5cdFx0aW5pdGlhbGl6ZTogZnVuY3Rpb24oJGVsKSB7XHJcblx0XHRcdGlmICggJGVsLmRhdGEoIGluc3RhbmNlTmFtZSApICkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLiRlbCA9ICRlbDtcclxuXHJcblx0XHRcdHRoaXNcclxuXHRcdFx0XHQuc2V0RGF0YSgpXHJcblx0XHRcdFx0LmJ1aWxkKCk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0c2V0RGF0YTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMuJGVsLmRhdGEoaW5zdGFuY2VOYW1lLCB0aGlzKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRidWlsZDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBzd2l0Y2hlciA9IG5ldyBTd2l0Y2goIHRoaXMuJGVsLmdldCgwKSApO1xyXG5cclxuXHRcdFx0JCggc3dpdGNoZXIuZWwgKS5vbiggJ2NsaWNrJywgZnVuY3Rpb24oIGUgKSB7XHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdHN3aXRjaGVyLnRvZ2dsZSgpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8vIGV4cG9zZSB0byBzY29wZVxyXG5cdCQuZXh0ZW5kKHRoZW1lLCB7XHJcblx0XHRQbHVnaW5JT1M3U3dpdGNoOiBQbHVnaW5JT1M3U3dpdGNoXHJcblx0fSk7XHJcblxyXG5cdC8vIGpxdWVyeSBwbHVnaW5cclxuXHQkLmZuLnRoZW1lUGx1Z2luSU9TN1N3aXRjaCA9IGZ1bmN0aW9uKG9wdHMpIHtcclxuXHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblxyXG5cdFx0XHRpZiAoJHRoaXMuZGF0YShpbnN0YW5jZU5hbWUpKSB7XHJcblx0XHRcdFx0cmV0dXJuICR0aGlzLmRhdGEoaW5zdGFuY2VOYW1lKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gbmV3IFBsdWdpbklPUzdTd2l0Y2goJHRoaXMpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxufSkuYXBwbHkodGhpcywgW3dpbmRvdy50aGVtZSwgalF1ZXJ5XSk7XHJcblxyXG4vLyBGb3JtIHRvIE9iamVjdFxyXG4oZnVuY3Rpb24oJCkge1xyXG5cclxuXHQndXNlIHN0cmljdCc7XHJcblxyXG5cdCQuZm4uZm9ybVRvT2JqZWN0ID0gZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgYXJyYXlEYXRhLFxyXG5cdFx0XHRvYmplY3REYXRhO1xyXG5cclxuXHRcdGFycmF5RGF0YVx0PSB0aGlzLnNlcmlhbGl6ZUFycmF5KCk7XHJcblx0XHRvYmplY3REYXRhXHQ9IHt9O1xyXG5cclxuXHRcdCQuZWFjaCggYXJyYXlEYXRhLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIHZhbHVlO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMudmFsdWUgIT0gbnVsbCkge1xyXG5cdFx0XHRcdHZhbHVlID0gdGhpcy52YWx1ZTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR2YWx1ZSA9ICcnO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAob2JqZWN0RGF0YVt0aGlzLm5hbWVdICE9IG51bGwpIHtcclxuXHRcdFx0XHRpZiAoIW9iamVjdERhdGFbdGhpcy5uYW1lXS5wdXNoKSB7XHJcblx0XHRcdFx0XHRvYmplY3REYXRhW3RoaXMubmFtZV0gPSBbb2JqZWN0RGF0YVt0aGlzLm5hbWVdXTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdG9iamVjdERhdGFbdGhpcy5uYW1lXS5wdXNoKHZhbHVlKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRvYmplY3REYXRhW3RoaXMubmFtZV0gPSB2YWx1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0cmV0dXJuIG9iamVjdERhdGE7XHJcblx0fTtcclxuXHJcbn0pKGpRdWVyeSk7XHJcblxyXG4vLyBMaWdodGJveFxyXG4oZnVuY3Rpb24odGhlbWUsICQpIHtcclxuXHJcblx0dGhlbWUgPSB0aGVtZSB8fCB7fTtcclxuXHJcblx0dmFyIGluc3RhbmNlTmFtZSA9ICdfX2xpZ2h0Ym94JztcclxuXHJcblx0dmFyIFBsdWdpbkxpZ2h0Ym94ID0gZnVuY3Rpb24oJGVsLCBvcHRzKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5pbml0aWFsaXplKCRlbCwgb3B0cyk7XHJcblx0fTtcclxuXHJcblx0UGx1Z2luTGlnaHRib3guZGVmYXVsdHMgPSB7XHJcblx0XHR0Q2xvc2U6ICdDbG9zZSAoRXNjKScsIC8vIEFsdCB0ZXh0IG9uIGNsb3NlIGJ1dHRvblxyXG5cdFx0dExvYWRpbmc6ICdMb2FkaW5nLi4uJywgLy8gVGV4dCB0aGF0IGlzIGRpc3BsYXllZCBkdXJpbmcgbG9hZGluZy4gQ2FuIGNvbnRhaW4gJWN1cnIlIGFuZCAldG90YWwlIGtleXNcclxuXHRcdGdhbGxlcnk6IHtcclxuXHRcdFx0dFByZXY6ICdQcmV2aW91cyAoTGVmdCBhcnJvdyBrZXkpJywgLy8gQWx0IHRleHQgb24gbGVmdCBhcnJvd1xyXG5cdFx0XHR0TmV4dDogJ05leHQgKFJpZ2h0IGFycm93IGtleSknLCAvLyBBbHQgdGV4dCBvbiByaWdodCBhcnJvd1xyXG5cdFx0XHR0Q291bnRlcjogJyVjdXJyJSBvZiAldG90YWwlJyAvLyBNYXJrdXAgZm9yIFwiMSBvZiA3XCIgY291bnRlclxyXG5cdFx0fSxcclxuXHRcdGltYWdlOiB7XHJcblx0XHRcdHRFcnJvcjogJzxhIGhyZWY9XCIldXJsJVwiPlRoZSBpbWFnZTwvYT4gY291bGQgbm90IGJlIGxvYWRlZC4nIC8vIEVycm9yIG1lc3NhZ2Ugd2hlbiBpbWFnZSBjb3VsZCBub3QgYmUgbG9hZGVkXHJcblx0XHR9LFxyXG5cdFx0YWpheDoge1xyXG5cdFx0XHR0RXJyb3I6ICc8YSBocmVmPVwiJXVybCVcIj5UaGUgY29udGVudDwvYT4gY291bGQgbm90IGJlIGxvYWRlZC4nIC8vIEVycm9yIG1lc3NhZ2Ugd2hlbiBhamF4IHJlcXVlc3QgZmFpbGVkXHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0UGx1Z2luTGlnaHRib3gucHJvdG90eXBlID0ge1xyXG5cdFx0aW5pdGlhbGl6ZTogZnVuY3Rpb24oJGVsLCBvcHRzKSB7XHJcblx0XHRcdGlmICggJGVsLmRhdGEoIGluc3RhbmNlTmFtZSApICkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLiRlbCA9ICRlbDtcclxuXHJcblx0XHRcdHRoaXNcclxuXHRcdFx0XHQuc2V0RGF0YSgpXHJcblx0XHRcdFx0LnNldE9wdGlvbnMob3B0cylcclxuXHRcdFx0XHQuYnVpbGQoKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzZXREYXRhOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy4kZWwuZGF0YShpbnN0YW5jZU5hbWUsIHRoaXMpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdHNldE9wdGlvbnM6IGZ1bmN0aW9uKG9wdHMpIHtcclxuXHRcdFx0dGhpcy5vcHRpb25zID0gJC5leHRlbmQodHJ1ZSwge30sIFBsdWdpbkxpZ2h0Ym94LmRlZmF1bHRzLCBvcHRzLCB7XHJcblx0XHRcdFx0d3JhcHBlcjogdGhpcy4kZWxcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0YnVpbGQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLm9wdGlvbnMud3JhcHBlci5tYWduaWZpY1BvcHVwKHRoaXMub3B0aW9ucyk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHQvLyBleHBvc2UgdG8gc2NvcGVcclxuXHQkLmV4dGVuZCh0aGVtZSwge1xyXG5cdFx0UGx1Z2luTGlnaHRib3g6IFBsdWdpbkxpZ2h0Ym94XHJcblx0fSk7XHJcblxyXG5cdC8vIGpxdWVyeSBwbHVnaW5cclxuXHQkLmZuLnRoZW1lUGx1Z2luTGlnaHRib3ggPSBmdW5jdGlvbihvcHRzKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG5cclxuXHRcdFx0aWYgKCR0aGlzLmRhdGEoaW5zdGFuY2VOYW1lKSkge1xyXG5cdFx0XHRcdHJldHVybiAkdGhpcy5kYXRhKGluc3RhbmNlTmFtZSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBQbHVnaW5MaWdodGJveCgkdGhpcywgb3B0cyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG59KS5hcHBseSh0aGlzLCBbd2luZG93LnRoZW1lLCBqUXVlcnldKTtcclxuXHJcbi8vIExvYWRpbmcgT3ZlcmxheVxyXG4oZnVuY3Rpb24odGhlbWUsICQpIHtcclxuXHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cclxuXHR0aGVtZSA9IHRoZW1lIHx8IHt9O1xyXG5cclxuXHR2YXIgbG9hZGluZ092ZXJsYXlUZW1wbGF0ZSA9IFtcclxuXHRcdCc8ZGl2IGNsYXNzPVwibG9hZGluZy1vdmVybGF5XCI+JyxcclxuXHRcdFx0JzxkaXYgY2xhc3M9XCJib3VuY2UtbG9hZGVyXCI+PGRpdiBjbGFzcz1cImJvdW5jZTFcIj48L2Rpdj48ZGl2IGNsYXNzPVwiYm91bmNlMlwiPjwvZGl2PjxkaXYgY2xhc3M9XCJib3VuY2UzXCI+PC9kaXY+PC9kaXY+JyxcclxuXHRcdCc8L2Rpdj4nXHJcblx0XS5qb2luKCcnKTtcclxuXHJcblx0dmFyIExvYWRpbmdPdmVybGF5ID0gZnVuY3Rpb24oICR3cmFwcGVyLCBvcHRpb25zICkge1xyXG5cdFx0cmV0dXJuIHRoaXMuaW5pdGlhbGl6ZSggJHdyYXBwZXIsIG9wdGlvbnMgKTtcclxuXHR9O1xyXG5cclxuXHRMb2FkaW5nT3ZlcmxheS5wcm90b3R5cGUgPSB7XHJcblxyXG5cdFx0b3B0aW9uczoge1xyXG5cdFx0XHRjc3M6IHt9XHJcblx0XHR9LFxyXG5cclxuXHRcdGluaXRpYWxpemU6IGZ1bmN0aW9uKCAkd3JhcHBlciwgb3B0aW9ucyApIHtcclxuXHRcdFx0dGhpcy4kd3JhcHBlciA9ICR3cmFwcGVyO1xyXG5cclxuXHRcdFx0dGhpc1xyXG5cdFx0XHRcdC5zZXRWYXJzKClcclxuXHRcdFx0XHQuc2V0T3B0aW9ucyggb3B0aW9ucyApXHJcblx0XHRcdFx0LmJ1aWxkKClcclxuXHRcdFx0XHQuZXZlbnRzKCk7XHJcblxyXG5cdFx0XHR0aGlzLiR3cmFwcGVyLmRhdGEoICdsb2FkaW5nT3ZlcmxheScsIHRoaXMgKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0c2V0VmFyczogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMuJG92ZXJsYXkgPSB0aGlzLiR3cmFwcGVyLmZpbmQoJy5sb2FkaW5nLW92ZXJsYXknKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzZXRPcHRpb25zOiBmdW5jdGlvbiggb3B0aW9ucyApIHtcclxuXHRcdFx0aWYgKCAhdGhpcy4kb3ZlcmxheS5nZXQoMCkgKSB7XHJcblx0XHRcdFx0dGhpcy5tYXRjaFByb3BlcnRpZXMoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLm9wdGlvbnMgICAgID0gJC5leHRlbmQoIHRydWUsIHt9LCB0aGlzLm9wdGlvbnMsIG9wdGlvbnMgKTtcclxuXHRcdFx0dGhpcy5sb2FkZXJDbGFzcyA9IHRoaXMuZ2V0TG9hZGVyQ2xhc3MoIHRoaXMub3B0aW9ucy5jc3MuYmFja2dyb3VuZENvbG9yICk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0YnVpbGQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZiAoICF0aGlzLiRvdmVybGF5LmNsb3Nlc3QoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5nZXQoMCkgKSB7XHJcblx0XHRcdFx0aWYgKCAhdGhpcy4kY2FjaGVkT3ZlcmxheSApIHtcclxuXHRcdFx0XHRcdHRoaXMuJG92ZXJsYXkgPSAkKCBsb2FkaW5nT3ZlcmxheVRlbXBsYXRlICkuY2xvbmUoKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoIHRoaXMub3B0aW9ucy5jc3MgKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuJG92ZXJsYXkuY3NzKCB0aGlzLm9wdGlvbnMuY3NzICk7XHJcblx0XHRcdFx0XHRcdHRoaXMuJG92ZXJsYXkuZmluZCggJy5sb2FkZXInICkuYWRkQ2xhc3MoIHRoaXMubG9hZGVyQ2xhc3MgKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy4kb3ZlcmxheSA9IHRoaXMuJGNhY2hlZE92ZXJsYXkuY2xvbmUoKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHRoaXMuJHdyYXBwZXIuYXBwZW5kKCB0aGlzLiRvdmVybGF5ICk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICggIXRoaXMuJGNhY2hlZE92ZXJsYXkgKSB7XHJcblx0XHRcdFx0dGhpcy4kY2FjaGVkT3ZlcmxheSA9IHRoaXMuJG92ZXJsYXkuY2xvbmUoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdGV2ZW50czogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBfc2VsZiA9IHRoaXM7XHJcblxyXG5cdFx0XHRpZiAoIHRoaXMub3B0aW9ucy5zdGFydFNob3dpbmcgKSB7XHJcblx0XHRcdFx0X3NlbGYuc2hvdygpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIHRoaXMuJHdyYXBwZXIuaXMoJ2JvZHknKSB8fCB0aGlzLm9wdGlvbnMuaGlkZU9uV2luZG93TG9hZCApIHtcclxuXHRcdFx0XHQkKCB3aW5kb3cgKS5vbiggJ2xvYWQgZXJyb3InLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdF9zZWxmLmhpZGUoKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCB0aGlzLm9wdGlvbnMubGlzdGVuT24gKSB7XHJcblx0XHRcdFx0JCggdGhpcy5vcHRpb25zLmxpc3Rlbk9uIClcclxuXHRcdFx0XHRcdC5vbiggJ2xvYWRpbmctb3ZlcmxheTpzaG93IGJlZm9yZVNlbmQuaWMnLCBmdW5jdGlvbiggZSApIHtcclxuXHRcdFx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdFx0XHRcdFx0X3NlbGYuc2hvdygpO1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdC5vbiggJ2xvYWRpbmctb3ZlcmxheTpoaWRlIGNvbXBsZXRlLmljJywgZnVuY3Rpb24oIGUgKSB7XHJcblx0XHRcdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdFx0XHRcdF9zZWxmLmhpZGUoKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLiR3cmFwcGVyXHJcblx0XHRcdFx0Lm9uKCAnbG9hZGluZy1vdmVybGF5OnNob3cgYmVmb3JlU2VuZC5pYycsIGZ1bmN0aW9uKCBlICkge1xyXG5cdFx0XHRcdFx0aWYgKCBlLnRhcmdldCA9PT0gX3NlbGYuJHdyYXBwZXIuZ2V0KDApICkge1xyXG5cdFx0XHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHRcdFx0XHRfc2VsZi5zaG93KCk7XHJcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0Lm9uKCAnbG9hZGluZy1vdmVybGF5OmhpZGUgY29tcGxldGUuaWMnLCBmdW5jdGlvbiggZSApIHtcclxuXHRcdFx0XHRcdGlmICggZS50YXJnZXQgPT09IF9zZWxmLiR3cmFwcGVyLmdldCgwKSApIHtcclxuXHRcdFx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdFx0XHRcdFx0X3NlbGYuaGlkZSgpO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzaG93OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy5idWlsZCgpO1xyXG5cclxuXHRcdFx0dGhpcy5wb3NpdGlvbiA9IHRoaXMuJHdyYXBwZXIuY3NzKCAncG9zaXRpb24nICkudG9Mb3dlckNhc2UoKTtcclxuXHRcdFx0aWYgKCB0aGlzLnBvc2l0aW9uICE9ICdyZWxhdGl2ZScgfHwgdGhpcy5wb3NpdGlvbiAhPSAnYWJzb2x1dGUnIHx8IHRoaXMucG9zaXRpb24gIT0gJ2ZpeGVkJyApIHtcclxuXHRcdFx0XHR0aGlzLiR3cmFwcGVyLmNzcyh7XHJcblx0XHRcdFx0XHRwb3NpdGlvbjogJ3JlbGF0aXZlJ1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuJHdyYXBwZXIuYWRkQ2xhc3MoICdsb2FkaW5nLW92ZXJsYXktc2hvd2luZycgKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0aGlkZTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBfc2VsZiA9IHRoaXM7XHJcblxyXG5cdFx0XHR0aGlzLiR3cmFwcGVyLnJlbW92ZUNsYXNzKCAnbG9hZGluZy1vdmVybGF5LXNob3dpbmcnICk7XHJcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0aWYgKCB0aGlzLnBvc2l0aW9uICE9ICdyZWxhdGl2ZScgfHwgdGhpcy5wb3NpdGlvbiAhPSAnYWJzb2x1dGUnIHx8IHRoaXMucG9zaXRpb24gIT0gJ2ZpeGVkJyApIHtcclxuXHRcdFx0XHRcdF9zZWxmLiR3cmFwcGVyLmNzcyh7IHBvc2l0aW9uOiAnJyB9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sIDUwMCk7XHJcblx0XHR9LFxyXG5cclxuXHRcdG1hdGNoUHJvcGVydGllczogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBpLFxyXG5cdFx0XHRcdGwsXHJcblx0XHRcdFx0cHJvcGVydGllcztcclxuXHJcblx0XHRcdHByb3BlcnRpZXMgPSBbXHJcblx0XHRcdFx0J2JhY2tncm91bmRDb2xvcicsXHJcblx0XHRcdFx0J2JvcmRlclJhZGl1cydcclxuXHRcdFx0XTtcclxuXHJcblx0XHRcdGwgPSBwcm9wZXJ0aWVzLmxlbmd0aDtcclxuXHJcblx0XHRcdGZvciggaSA9IDA7IGkgPCBsOyBpKysgKSB7XHJcblx0XHRcdFx0dmFyIG9iaiA9IHt9O1xyXG5cdFx0XHRcdG9ialsgcHJvcGVydGllc1sgaSBdIF0gPSB0aGlzLiR3cmFwcGVyLmNzcyggcHJvcGVydGllc1sgaSBdICk7XHJcblxyXG5cdFx0XHRcdCQuZXh0ZW5kKCB0aGlzLm9wdGlvbnMuY3NzLCBvYmogKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblx0XHRnZXRMb2FkZXJDbGFzczogZnVuY3Rpb24oIGJhY2tncm91bmRDb2xvciApIHtcclxuXHRcdFx0aWYgKCAhYmFja2dyb3VuZENvbG9yIHx8IGJhY2tncm91bmRDb2xvciA9PT0gJ3RyYW5zcGFyZW50JyB8fCBiYWNrZ3JvdW5kQ29sb3IgPT09ICdpbmhlcml0JyApIHtcclxuXHRcdFx0XHRyZXR1cm4gJ2JsYWNrJztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dmFyIGhleENvbG9yLFxyXG5cdFx0XHRcdHIsXHJcblx0XHRcdFx0ZyxcclxuXHRcdFx0XHRiLFxyXG5cdFx0XHRcdHlpcTtcclxuXHJcblx0XHRcdHZhciBjb2xvclRvSGV4ID0gZnVuY3Rpb24oIGNvbG9yICl7XHJcblx0XHRcdFx0dmFyIGhleCxcclxuXHRcdFx0XHRcdHJnYjtcclxuXHJcblx0XHRcdFx0aWYoIGNvbG9yLmluZGV4T2YoJyMnKSA+LSAxICl7XHJcblx0XHRcdFx0XHRoZXggPSBjb2xvci5yZXBsYWNlKCcjJywgJycpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRyZ2IgPSBjb2xvci5tYXRjaCgvXFxkKy9nKTtcclxuXHRcdFx0XHRcdGhleCA9ICgnMCcgKyBwYXJzZUludChyZ2JbMF0sIDEwKS50b1N0cmluZygxNikpLnNsaWNlKC0yKSArICgnMCcgKyBwYXJzZUludChyZ2JbMV0sIDEwKS50b1N0cmluZygxNikpLnNsaWNlKC0yKSArICgnMCcgKyBwYXJzZUludChyZ2JbMl0sIDEwKS50b1N0cmluZygxNikpLnNsaWNlKC0yKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmICggaGV4Lmxlbmd0aCA9PT0gMyApIHtcclxuXHRcdFx0XHRcdGhleCA9IGhleCArIGhleDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHJldHVybiBoZXg7XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRoZXhDb2xvciA9IGNvbG9yVG9IZXgoIGJhY2tncm91bmRDb2xvciApO1xyXG5cclxuXHRcdFx0ciA9IHBhcnNlSW50KCBoZXhDb2xvci5zdWJzdHIoIDAsIDIpLCAxNiApO1xyXG5cdFx0XHRnID0gcGFyc2VJbnQoIGhleENvbG9yLnN1YnN0ciggMiwgMiksIDE2ICk7XHJcblx0XHRcdGIgPSBwYXJzZUludCggaGV4Q29sb3Iuc3Vic3RyKCA0LCAyKSwgMTYgKTtcclxuXHRcdFx0eWlxID0gKChyICogMjk5KSArIChnICogNTg3KSArIChiICogMTE0KSkgLyAxMDAwO1xyXG5cclxuXHRcdFx0cmV0dXJuICggeWlxID49IDEyOCApID8gJ2JsYWNrJyA6ICd3aGl0ZSc7XHJcblx0XHR9XHJcblxyXG5cdH07XHJcblxyXG5cdC8vIGV4cG9zZSB0byBzY29wZVxyXG5cdCQuZXh0ZW5kKHRoZW1lLCB7XHJcblx0XHRMb2FkaW5nT3ZlcmxheTogTG9hZGluZ092ZXJsYXlcclxuXHR9KTtcclxuXHJcblx0Ly8gZXhwb3NlIGFzIGEganF1ZXJ5IHBsdWdpblxyXG5cdCQuZm4ubG9hZGluZ092ZXJsYXkgPSBmdW5jdGlvbiggb3B0cyApIHtcclxuXHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciAkdGhpcyA9ICQoIHRoaXMgKTtcclxuXHJcblx0XHRcdHZhciBsb2FkaW5nT3ZlcmxheSA9ICR0aGlzLmRhdGEoICdsb2FkaW5nT3ZlcmxheScgKTtcclxuXHRcdFx0aWYgKCBsb2FkaW5nT3ZlcmxheSApIHtcclxuXHRcdFx0XHRyZXR1cm4gbG9hZGluZ092ZXJsYXk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dmFyIG9wdGlvbnMgPSBvcHRzIHx8ICR0aGlzLmRhdGEoICdsb2FkaW5nLW92ZXJsYXktb3B0aW9ucycgKSB8fCB7fTtcclxuXHRcdFx0XHRyZXR1cm4gbmV3IExvYWRpbmdPdmVybGF5KCAkdGhpcywgb3B0aW9ucyApO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdC8vIGF1dG8gaW5pdFxyXG5cdCQoJ1tkYXRhLWxvYWRpbmctb3ZlcmxheV0nKS5sb2FkaW5nT3ZlcmxheSgpO1xyXG5cclxufSkuYXBwbHkodGhpcywgW3dpbmRvdy50aGVtZSwgalF1ZXJ5XSk7XHJcblxyXG4vLyBMb2NrIFNjcmVlblxyXG4oZnVuY3Rpb24oJCkge1xyXG5cclxuXHQndXNlIHN0cmljdCc7XHJcblxyXG5cdHZhciBMb2NrU2NyZWVuID0ge1xyXG5cclxuXHRcdGluaXRpYWxpemU6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLiRib2R5ID0gJCggJ2JvZHknICk7XHJcblxyXG5cdFx0XHR0aGlzXHJcblx0XHRcdFx0LmJ1aWxkKClcclxuXHRcdFx0XHQuZXZlbnRzKCk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGJ1aWxkOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIGxvY2tIVE1MLFxyXG5cdFx0XHRcdHVzZXJpbmZvO1xyXG5cclxuXHRcdFx0dXNlcmluZm8gPSB0aGlzLmdldFVzZXJJbmZvKCk7XHJcblx0XHRcdHRoaXMubG9ja0hUTUwgPSB0aGlzLmJ1aWxkVGVtcGxhdGUoIHVzZXJpbmZvICk7XHJcblxyXG5cdFx0XHR0aGlzLiRsb2NrICAgICAgICA9IHRoaXMuJGJvZHkuY2hpbGRyZW4oICcjTG9ja1NjcmVlbklubGluZScgKTtcclxuXHRcdFx0dGhpcy4kdXNlclBpY3R1cmUgPSB0aGlzLiRsb2NrLmZpbmQoICcjTG9ja1VzZXJQaWN0dXJlJyApO1xyXG5cdFx0XHR0aGlzLiR1c2VyTmFtZSAgICA9IHRoaXMuJGxvY2suZmluZCggJyNMb2NrVXNlck5hbWUnICk7XHJcblx0XHRcdHRoaXMuJHVzZXJFbWFpbCAgID0gdGhpcy4kbG9jay5maW5kKCAnI0xvY2tVc2VyRW1haWwnICk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0ZXZlbnRzOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIF9zZWxmID0gdGhpcztcclxuXHJcblx0XHRcdHRoaXMuJGJvZHkuZmluZCggJ1tkYXRhLWxvY2stc2NyZWVuPVwidHJ1ZVwiXScgKS5vbiggJ2NsaWNrJywgZnVuY3Rpb24oIGUgKSB7XHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0XHRfc2VsZi5zaG93KCk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdGZvcm1FdmVudHM6IGZ1bmN0aW9uKCAkZm9ybSApIHtcclxuXHRcdFx0dmFyIF9zZWxmID0gdGhpcztcclxuXHJcblx0XHRcdCRmb3JtLm9uKCAnc3VibWl0JywgZnVuY3Rpb24oIGUgKSB7XHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0XHRfc2VsZi5oaWRlKCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzaG93OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIF9zZWxmID0gdGhpcyxcclxuXHRcdFx0XHR1c2VyaW5mbyA9IHRoaXMuZ2V0VXNlckluZm8oKTtcclxuXHJcblx0XHRcdHRoaXMuJHVzZXJQaWN0dXJlLmF0dHIoICdzcmMnLCB1c2VyaW5mby5waWN0dXJlICk7XHJcblx0XHRcdHRoaXMuJHVzZXJOYW1lLnRleHQoIHVzZXJpbmZvLnVzZXJuYW1lICk7XHJcblx0XHRcdHRoaXMuJHVzZXJFbWFpbC50ZXh0KCB1c2VyaW5mby5lbWFpbCApO1xyXG5cclxuXHRcdFx0dGhpcy4kYm9keS5hZGRDbGFzcyggJ3Nob3ctbG9jay1zY3JlZW4nICk7XHJcblxyXG5cdFx0XHQkLm1hZ25pZmljUG9wdXAub3Blbih7XHJcblx0XHRcdFx0aXRlbXM6IHtcclxuXHRcdFx0XHRcdHNyYzogdGhpcy5sb2NrSFRNTCxcclxuXHRcdFx0XHRcdHR5cGU6ICdpbmxpbmUnXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRtb2RhbDogdHJ1ZSxcclxuXHRcdFx0XHRtYWluQ2xhc3M6ICdtZnAtbG9jay1zY3JlZW4nLFxyXG5cdFx0XHRcdGNhbGxiYWNrczoge1xyXG5cdFx0XHRcdFx0Y2hhbmdlOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0X3NlbGYuZm9ybUV2ZW50cyggdGhpcy5jb250ZW50LmZpbmQoICdmb3JtJyApICk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblxyXG5cdFx0aGlkZTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQubWFnbmlmaWNQb3B1cC5jbG9zZSgpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRnZXRVc2VySW5mbzogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciAkaW5mbyxcclxuXHRcdFx0XHRwaWN0dXJlLFxyXG5cdFx0XHRcdG5hbWUsXHJcblx0XHRcdFx0ZW1haWw7XHJcblxyXG5cdFx0XHQvLyBhbHdheXMgc2VhcmNoIGluIGNhc2Ugc29tZXRoaW5nIGlzIGNoYW5nZWQgdGhyb3VnaCBhamF4XHJcblx0XHRcdCRpbmZvICAgID0gJCggJyN1c2VyYm94JyApO1xyXG5cdFx0XHRwaWN0dXJlICA9ICRpbmZvLmZpbmQoICcucHJvZmlsZS1waWN0dXJlIGltZycgKS5hdHRyKCAnZGF0YS1sb2NrLXBpY3R1cmUnICk7XHJcblx0XHRcdG5hbWUgICAgID0gJGluZm8uZmluZCggJy5wcm9maWxlLWluZm8nICkuYXR0ciggJ2RhdGEtbG9jay1uYW1lJyApO1xyXG5cdFx0XHRlbWFpbCAgICA9ICRpbmZvLmZpbmQoICcucHJvZmlsZS1pbmZvJyApLmF0dHIoICdkYXRhLWxvY2stZW1haWwnICk7XHJcblxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHBpY3R1cmU6IHBpY3R1cmUsXHJcblx0XHRcdFx0dXNlcm5hbWU6IG5hbWUsXHJcblx0XHRcdFx0ZW1haWw6IGVtYWlsXHJcblx0XHRcdH07XHJcblx0XHR9LFxyXG5cclxuXHRcdGJ1aWxkVGVtcGxhdGU6IGZ1bmN0aW9uKCB1c2VyaW5mbyApIHtcclxuXHRcdFx0cmV0dXJuIFtcclxuXHRcdFx0XHRcdCc8c2VjdGlvbiBpZD1cIkxvY2tTY3JlZW5JbmxpbmVcIiBjbGFzcz1cImJvZHktc2lnbiBib2R5LWxvY2tlZCBib2R5LWxvY2tlZC1pbmxpbmVcIj4nLFxyXG5cdFx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cImNlbnRlci1zaWduXCI+JyxcclxuXHRcdFx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cInBhbmVsIGNhcmQtc2lnblwiPicsXHJcblx0XHRcdFx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdCc8Zm9ybT4nLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwiY3VycmVudC11c2VyIHRleHQtY2VudGVyXCI+JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCc8aW1nIGlkPVwiTG9ja1VzZXJQaWN0dXJlXCIgc3JjPVwie3twaWN0dXJlfX1cIiBhbHQ9XCJKb2huIERvZVwiIGNsYXNzPVwicm91bmRlZC1jaXJjbGUgdXNlci1pbWFnZVwiIC8+JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCc8aDIgaWQ9XCJMb2NrVXNlck5hbWVcIiBjbGFzcz1cInVzZXItbmFtZSB0ZXh0LWRhcmsgbS0wXCI+e3t1c2VybmFtZX19PC9oMj4nLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0JzxwICBpZD1cIkxvY2tVc2VyRW1haWxcIiBjbGFzcz1cInVzZXItZW1haWwgbS0wXCI+e3tlbWFpbH19PC9wPicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0JzwvZGl2PicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIG1iLWxnXCI+JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj4nLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnPGlucHV0IGlkPVwicHdkXCIgbmFtZT1cInB3ZFwiIHR5cGU9XCJwYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1sZ1wiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiAvPicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCc8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZFwiPicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0JzxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnPGkgY2xhc3M9XCJmYXMgZmEtbG9ja1wiPjwvaT4nLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCc8L3NwYW4+JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Jzwvc3Bhbj4nLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0JzwvZGl2PicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0JzwvZGl2PicsXHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwicm93XCI+JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwiY29sLTZcIj4nLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnPHAgY2xhc3M9XCJtdC14cyBtYi0wXCI+JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnPGEgaHJlZj1cIiNcIj5Ob3QgSm9obiBEb2U/PC9hPicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCc8L3A+JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCc8L2Rpdj4nLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCJjb2wtNlwiPicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCc8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBwdWxsLXJpZ2h0XCI+VW5sb2NrPC9idXR0b24+JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCc8L2Rpdj4nLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCc8L2Rpdj4nLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQnPC9mb3JtPicsXHJcblx0XHRcdFx0XHRcdFx0XHQnPC9kaXY+JyxcclxuXHRcdFx0XHRcdFx0XHQnPC9kaXY+JyxcclxuXHRcdFx0XHRcdFx0JzwvZGl2PicsXHJcblx0XHRcdFx0XHQnPC9zZWN0aW9uPidcclxuXHRcdFx0XHRdXHJcblx0XHRcdFx0LmpvaW4oICcnIClcclxuXHRcdFx0XHQucmVwbGFjZSggL1xce1xce3BpY3R1cmVcXH1cXH0vLCB1c2VyaW5mby5waWN0dXJlIClcclxuXHRcdFx0XHQucmVwbGFjZSggL1xce1xce3VzZXJuYW1lXFx9XFx9LywgdXNlcmluZm8udXNlcm5hbWUgKVxyXG5cdFx0XHRcdC5yZXBsYWNlKCAvXFx7XFx7ZW1haWxcXH1cXH0vLCB1c2VyaW5mby5lbWFpbCApO1xyXG5cdFx0fVxyXG5cclxuXHR9O1xyXG5cclxuXHR0aGlzLkxvY2tTY3JlZW4gPSBMb2NrU2NyZWVuO1xyXG5cclxuXHQkKGZ1bmN0aW9uKCkge1xyXG5cdFx0TG9ja1NjcmVlbi5pbml0aWFsaXplKCk7XHJcblx0fSk7XHJcblxyXG59KS5hcHBseSh0aGlzLCBbalF1ZXJ5XSk7XHJcblxyXG4vLyBNYXAgQnVpbGRlclxyXG4oZnVuY3Rpb24oIHRoZW1lLCAkICkge1xyXG5cclxuXHQndXNlIHN0cmljdCc7XHJcblxyXG5cdC8vIHByZXZlbnQgdW5kZWZpbmVkIHZhclxyXG5cdHRoZW1lID0gdGhlbWUgfHwge307XHJcblxyXG5cdC8vIGludGVybmFsIHZhciB0byBjaGVjayBpZiByZWFjaGVkIGxpbWl0XHJcblx0dmFyIHRpbWVvdXRzID0gMDtcclxuXHJcblx0Ly8gaW5zdGFuY2VcclxuXHR2YXIgaW5zdGFuY2VOYW1lID0gJ19fZ21hcGJ1aWxkZXInO1xyXG5cclxuXHQvLyBwcml2YXRlXHJcblx0dmFyIHJvdW5kTnVtYmVyID0gZnVuY3Rpb24oIG51bWJlciwgcHJlY2lzaW9uICkge1xyXG5cdFx0aWYoIHByZWNpc2lvbiA8IDAgKSB7XHJcblx0XHRcdHByZWNpc2lvbiA9IDA7XHJcblx0XHR9IGVsc2UgaWYoIHByZWNpc2lvbiA+IDEwICkge1xyXG5cdFx0XHRwcmVjaXNpb24gPSAxMDtcclxuXHRcdH1cclxuXHRcdHZhciBhID0gWyAxLCAxMCwgMTAwLCAxMDAwLCAxMDAwMCwgMTAwMDAwLCAxMDAwMDAwLCAxMDAwMDAwMCwgMTAwMDAwMDAwLCAxMDAwMDAwMDAwLCAxMDAwMDAwMDAwMCBdO1xyXG5cclxuXHRcdHJldHVybiBNYXRoLnJvdW5kKCBudW1iZXIgKiBhWyBwcmVjaXNpb24gXSApIC8gYVsgcHJlY2lzaW9uIF07XHJcblx0fTtcclxuXHJcblx0Ly8gZGVmaW5pdGlvblxyXG5cdHZhciBHTWFwQnVpbGRlciA9IGZ1bmN0aW9uKCAkd3JhcHBlciwgb3B0cyApIHtcclxuXHRcdHJldHVybiB0aGlzLmluaXRpYWxpemUoICR3cmFwcGVyLCBvcHRzICk7XHJcblx0fTtcclxuXHJcblx0R01hcEJ1aWxkZXIuZGVmYXVsdHMgPSB7XHJcblx0XHRtYXBTZWxlY3RvcjogJyNnbWFwJyxcclxuXHJcblx0XHRtYXJrZXJzOiB7XHJcblx0XHRcdG1vZGFsOiAnI01hcmtlck1vZGFsJyxcclxuXHRcdFx0bGlzdDogJyNNYXJrZXJzTGlzdCcsXHJcblx0XHRcdHJlbW92ZUFsbDogJyNNYXJrZXJSZW1vdmVBbGwnXHJcblx0XHR9LFxyXG5cclxuXHRcdHByZXZpZXdNb2RhbDogJyNNb2RhbFByZXZpZXcnLFxyXG5cdFx0Z2V0Q29kZU1vZGFsOiAnI01vZGFsR2V0Q29kZScsXHJcblxyXG5cdFx0bWFwT3B0aW9uczoge1xyXG5cdFx0XHRjZW50ZXI6IHtcclxuXHRcdFx0XHRsYXQ6IC0zOC45MDgxMzMsXHJcblx0XHRcdFx0bG5nOiAtMTMuNjkyNjI4XHJcblx0XHRcdH0sXHJcblx0XHRcdHBhbkNvbnRyb2w6IHRydWUsXHJcblx0XHRcdHpvb206IDNcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRHTWFwQnVpbGRlci5wcm90b3R5cGUgPSB7XHJcblxyXG5cdFx0bWFya2VyczogW10sXHJcblxyXG5cdFx0aW5pdGlhbGl6ZTogZnVuY3Rpb24oICR3cmFwcGVyLCBvcHRzICkge1xyXG5cdFx0XHR0aGlzLiR3cmFwcGVyID0gJHdyYXBwZXI7XHJcblxyXG5cdFx0XHR0aGlzXHJcblx0XHRcdFx0LnNldERhdGEoKVxyXG5cdFx0XHRcdC5zZXRPcHRpb25zKCBvcHRzIClcclxuXHRcdFx0XHQuc2V0VmFycygpXHJcblx0XHRcdFx0LmJ1aWxkKClcclxuXHRcdFx0XHQuZXZlbnRzKCk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0c2V0RGF0YTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMuJHdyYXBwZXIuZGF0YSggaW5zdGFuY2VOYW1lLCB0aGlzICk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0c2V0T3B0aW9uczogZnVuY3Rpb24oIG9wdHMgKSB7XHJcblx0XHRcdHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKCB0cnVlLCB7fSwgR01hcEJ1aWxkZXIuZGVmYXVsdHMsIG9wdHMgKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzZXRWYXJzOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy4kbWFwQ29udGFpbmVyXHRcdD0gdGhpcy4kd3JhcHBlci5maW5kKCB0aGlzLm9wdGlvbnMubWFwU2VsZWN0b3IgKTtcclxuXHJcblx0XHRcdHRoaXMuJHByZXZpZXdNb2RhbFx0XHQ9ICQoIHRoaXMub3B0aW9ucy5wcmV2aWV3TW9kYWwgKTtcclxuXHRcdFx0dGhpcy4kZ2V0Q29kZU1vZGFsXHRcdD0gJCggdGhpcy5vcHRpb25zLmdldENvZGVNb2RhbCApO1xyXG5cclxuXHRcdFx0dGhpcy5tYXJrZXJcdFx0XHRcdD0ge307XHJcblx0XHRcdHRoaXMubWFya2VyLiRtb2RhbCAgXHQ9ICQoIHRoaXMub3B0aW9ucy5tYXJrZXJzLm1vZGFsICk7XHJcblx0XHRcdHRoaXMubWFya2VyLiRmb3JtXHRcdD0gdGhpcy5tYXJrZXIuJG1vZGFsLmZpbmQoICdmb3JtJyApO1xyXG5cdFx0XHR0aGlzLm1hcmtlci4kbGlzdFx0XHQ9ICQoIHRoaXMub3B0aW9ucy5tYXJrZXJzLmxpc3QgKTtcclxuXHRcdFx0dGhpcy5tYXJrZXIuJHJlbW92ZUFsbFx0PSAkKCB0aGlzLm9wdGlvbnMubWFya2Vycy5yZW1vdmVBbGwgKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRidWlsZDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBfc2VsZiA9IHRoaXM7XHJcblxyXG5cdFx0XHRpZiAoICEhd2luZG93LlNuYXp6eVRoZW1lcyApIHtcclxuXHRcdFx0XHR2YXIgdGhlbWVPcHRzID0gW107XHJcblxyXG5cdFx0XHRcdCQuZWFjaCggd2luZG93LlNuYXp6eVRoZW1lcywgZnVuY3Rpb24oIGksIHRoZW1lICkge1xyXG5cdFx0XHRcdFx0dGhlbWVPcHRzLnB1c2goICQoJzxvcHRpb24gdmFsdWU9XCInICsgdGhlbWUuaWQgKyAnXCI+JyArIHRoZW1lLm5hbWUgKyAnPC9vcHRpb24+JykuZGF0YSggJ2pzb24nLCB0aGVtZS5qc29uICkgKTtcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0dGhpcy4kd3JhcHBlci5maW5kKCAnW2RhdGEtYnVpbGRlci1maWVsZD1cIm1hcHRoZW1lXCJdJyApLmFwcGVuZCggdGhlbWVPcHRzICk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuZ2VvY29kZXIgPSBuZXcgZ29vZ2xlLm1hcHMuR2VvY29kZXIoKTtcclxuXHJcblx0XHRcdGdvb2dsZS5tYXBzLmV2ZW50LmFkZERvbUxpc3RlbmVyKCB3aW5kb3csICdsb2FkJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0X3NlbGYub3B0aW9ucy5tYXBPcHRpb25zLmNlbnRlciA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoIF9zZWxmLm9wdGlvbnMubWFwT3B0aW9ucy5jZW50ZXIubGF0LCBfc2VsZi5vcHRpb25zLm1hcE9wdGlvbnMuY2VudGVyLmxuZyApO1xyXG5cclxuXHRcdFx0XHRfc2VsZi5tYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKCBfc2VsZi4kbWFwQ29udGFpbmVyLmdldCgwKSwgX3NlbGYub3B0aW9ucy5tYXBPcHRpb25zICk7XHJcblxyXG5cdFx0XHRcdF9zZWxmXHJcblx0XHRcdFx0XHQudXBkYXRlQ29udHJvbCggJ2xhdGxuZycgKVxyXG5cdFx0XHRcdFx0LnVwZGF0ZUNvbnRyb2woICd6b29tbGV2ZWwnICk7XHJcblxyXG5cdFx0XHRcdF9zZWxmLm1hcEV2ZW50cygpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRldmVudHM6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgX3NlbGYgPSB0aGlzO1xyXG5cclxuXHRcdFx0dGhpcy4kd3JhcHBlci5maW5kKCAnW2RhdGEtYnVpbGRlci1maWVsZF0nICkuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR2YXIgJHRoaXMgPSAkKCB0aGlzICksXHJcblx0XHRcdFx0XHRmaWVsZCxcclxuXHRcdFx0XHRcdHZhbHVlO1xyXG5cclxuXHRcdFx0XHRmaWVsZCA9ICR0aGlzLmRhdGEoICdidWlsZGVyLWZpZWxkJyApO1xyXG5cclxuXHRcdFx0XHQkdGhpcy5vbiggJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdFx0XHRcdGlmICggJHRoaXMuaXMoICdzZWxlY3QnICkgKSB7XHJcblx0XHRcdFx0XHRcdHZhbHVlID0gJHRoaXMuY2hpbGRyZW4oICdvcHRpb246c2VsZWN0ZWQnICkudmFsKCkudG9Mb3dlckNhc2UoKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHZhbHVlID0gJHRoaXMudmFsKCkudG9Mb3dlckNhc2UoKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRfc2VsZi51cGRhdGVNYXAoIGZpZWxkLCB2YWx1ZSApO1xyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHR0aGlzLm1hcmtlci4kZm9ybS5vbiggJ3N1Ym1pdCcsIGZ1bmN0aW9uKCBlICkge1xyXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdFx0X3NlbGYuc2F2ZU1hcmtlciggX3NlbGYubWFya2VyLiRmb3JtLmZvcm1Ub09iamVjdCgpICk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0dGhpcy5tYXJrZXIuJHJlbW92ZUFsbC5vbiggJ2NsaWNrJywgZnVuY3Rpb24oIGUgKSB7XHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdF9zZWxmLnJlbW92ZUFsbE1hcmtlcnMoKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHQvLyBwcmV2aWV3IGV2ZW50c1xyXG5cdFx0XHR0aGlzLiRwcmV2aWV3TW9kYWwub24oICdzaG93bi5icy5tb2RhbCcsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdF9zZWxmLnByZXZpZXcoKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHR0aGlzLiRwcmV2aWV3TW9kYWwub24oICdoaWRkZW4uYnMubW9kYWwnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRfc2VsZi4kcHJldmlld01vZGFsLmZpbmQoICdpZnJhbWUnICkuZ2V0KDApLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSAnJztcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHQvLyBnZXQgY29kZSBldmVudHNcclxuXHRcdFx0dGhpcy4kZ2V0Q29kZU1vZGFsLm9uKCAnc2hvd24uYnMubW9kYWwnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRfc2VsZi5nZXRDb2RlKCk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8vIE1BUCBGVU5DVElPTlNcclxuXHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHRtYXBFdmVudHM6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgX3NlbGYgPSB0aGlzO1xyXG5cclxuXHRcdFx0Z29vZ2xlLm1hcHMuZXZlbnQuYWRkRG9tTGlzdGVuZXIoIF9zZWxmLm1hcCwgJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGdvb2dsZS5tYXBzLmV2ZW50LnRyaWdnZXIoIF9zZWxmLm1hcCwgJ3Jlc2l6ZScgKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lciggdGhpcy5tYXAsICdjZW50ZXJfY2hhbmdlZCcsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHZhciBjb29yZHMgPSBfc2VsZi5tYXAuZ2V0Q2VudGVyKCk7XHJcblx0XHRcdFx0X3NlbGYudXBkYXRlQ29udHJvbCggJ2xhdGxuZycsIHtcclxuXHRcdFx0XHRcdGxhdDogcm91bmROdW1iZXIoIGNvb3Jkcy5sYXQoKSwgNiApLFxyXG5cdFx0XHRcdFx0bG5nOiByb3VuZE51bWJlciggY29vcmRzLmxuZygpLCA2IClcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lciggdGhpcy5tYXAsICd6b29tX2NoYW5nZWQnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRfc2VsZi51cGRhdGVDb250cm9sKCAnem9vbWxldmVsJywgX3NlbGYubWFwLmdldFpvb20oKSApO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKCB0aGlzLm1hcCwgJ21hcHR5cGVpZF9jaGFuZ2VkJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0X3NlbGYudXBkYXRlQ29udHJvbCggJ21hcHR5cGUnLCBfc2VsZi5tYXAuZ2V0TWFwVHlwZUlkKCkgKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0dXBkYXRlTWFwOiBmdW5jdGlvbiggcHJvcCwgdmFsdWUgKSB7XHJcblx0XHRcdHZhciB1cGRhdGVGbjtcclxuXHJcblx0XHRcdHVwZGF0ZUZuID0gdGhpcy51cGRhdGVNYXBQcm9wZXJ0eVsgcHJvcCBdO1xyXG5cclxuXHRcdFx0aWYgKCAkLmlzRnVuY3Rpb24oIHVwZGF0ZUZuICkgKSB7XHJcblx0XHRcdFx0dXBkYXRlRm4uYXBwbHkoIHRoaXMsIFsgdmFsdWUgXSApO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGNvbnNvbGUuaW5mbyggJ21pc3NpbmcgdXBkYXRlIGZ1bmN0aW9uIGZvcicsIHByb3AgKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdHVwZGF0ZU1hcFByb3BlcnR5OiB7XHJcblxyXG5cdFx0XHRsYXRsbmc6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHZhciBsYXQsXHJcblx0XHRcdFx0XHRsbmc7XHJcblxyXG5cdFx0XHRcdGxhdCA9IHRoaXMuJHdyYXBwZXIuZmluZCgnW2RhdGEtYnVpbGRlci1maWVsZF1bbmFtZT1cImxhdGl0dWRlXCJdJykudmFsKCk7XHJcblx0XHRcdFx0bG5nID0gdGhpcy4kd3JhcHBlci5maW5kKCdbZGF0YS1idWlsZGVyLWZpZWxkXVtuYW1lPVwibG9uZ2l0dWRlXCJdJykudmFsKCk7XHJcblxyXG5cdFx0XHRcdGlmICggbGF0Lmxlbmd0aCA+IDAgJiYgbG5nLmxlbmd0aCA+IDAgKSB7XHJcblx0XHRcdFx0XHR0aGlzLm1hcC5zZXRDZW50ZXIoIG5ldyBnb29nbGUubWFwcy5MYXRMbmcoIGxhdCwgbG5nICkgKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0em9vbWxldmVsOiBmdW5jdGlvbiggdmFsdWUgKSB7XHJcblx0XHRcdFx0dmFyIHZhbHVlID0gYXJndW1lbnRzWyAwIF07XHJcblxyXG5cdFx0XHRcdHRoaXMubWFwLnNldFpvb20oIHBhcnNlSW50KCB2YWx1ZSwgMTAgKSApO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdG1hcHR5cGVjb250cm9sOiBmdW5jdGlvbiggdmFsdWUgKSB7XHJcblx0XHRcdFx0dmFyIG9wdGlvbnM7XHJcblxyXG5cdFx0XHRcdG9wdGlvbnNcdD0ge307XHJcblxyXG5cdFx0XHRcdGlmICggdmFsdWUgPT09ICdmYWxzZScgKXtcclxuXHRcdFx0XHRcdG9wdGlvbnMubWFwVHlwZUNvbnRyb2wgPSBmYWxzZTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0b3B0aW9ucyA9IHtcclxuXHRcdFx0XHRcdFx0bWFwVHlwZUNvbnRyb2w6IHRydWUsXHJcblx0XHRcdFx0XHRcdG1hcFR5cGVDb250cm9sT3B0aW9uczoge1xyXG5cdFx0XHRcdFx0XHRcdHN0eWxlOiBnb29nbGUubWFwcy5NYXBUeXBlQ29udHJvbFN0eWxlWyB2YWx1ZS50b1VwcGVyQ2FzZSgpIF1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHRoaXMubWFwLnNldE9wdGlvbnMoIG9wdGlvbnMgKTtcclxuXHJcblx0XHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHR6b29tY29udHJvbDogZnVuY3Rpb24oIHZhbHVlICkge1xyXG5cdFx0XHRcdHZhciBvcHRpb25zO1xyXG5cclxuXHRcdFx0XHRvcHRpb25zXHQ9IHt9O1xyXG5cclxuXHRcdFx0XHRpZiAoIHZhbHVlID09PSAnZmFsc2UnICl7XHJcblx0XHRcdFx0XHRvcHRpb25zLnpvb21Db250cm9sID0gZmFsc2U7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdG9wdGlvbnMgPSB7XHJcblx0XHRcdFx0XHRcdHpvb21Db250cm9sOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHR6b29tQ29udHJvbE9wdGlvbnM6IHtcclxuXHRcdFx0XHRcdFx0XHRzdHlsZTogZ29vZ2xlLm1hcHMuWm9vbUNvbnRyb2xTdHlsZVsgdmFsdWUudG9VcHBlckNhc2UoKSBdXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH07XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR0aGlzLm1hcC5zZXRPcHRpb25zKCBvcHRpb25zICk7XHJcblxyXG5cdFx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0c2NhbGVjb250cm9sOiBmdW5jdGlvbiggdmFsdWUgKSB7XHJcblx0XHRcdFx0dmFyIG9wdGlvbnM7XHJcblxyXG5cdFx0XHRcdG9wdGlvbnNcdD0ge307XHJcblxyXG5cdFx0XHRcdG9wdGlvbnMuc2NhbGVDb250cm9sID0gdmFsdWUgIT09ICdmYWxzZSc7XHJcblxyXG5cdFx0XHRcdHRoaXMubWFwLnNldE9wdGlvbnMoIG9wdGlvbnMgKTtcclxuXHJcblx0XHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRzdHJlZXR2aWV3Y29udHJvbDogZnVuY3Rpb24oIHZhbHVlICkge1xyXG5cdFx0XHRcdHZhciBvcHRpb25zO1xyXG5cclxuXHRcdFx0XHRvcHRpb25zXHQ9IHt9O1xyXG5cclxuXHRcdFx0XHRvcHRpb25zLnN0cmVldFZpZXdDb250cm9sID0gdmFsdWUgIT09ICdmYWxzZSc7XHJcblxyXG5cdFx0XHRcdHRoaXMubWFwLnNldE9wdGlvbnMoIG9wdGlvbnMgKTtcclxuXHJcblx0XHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRwYW5jb250cm9sOiBmdW5jdGlvbiggdmFsdWUgKSB7XHJcblx0XHRcdFx0dmFyIG9wdGlvbnM7XHJcblxyXG5cdFx0XHRcdG9wdGlvbnNcdD0ge307XHJcblxyXG5cdFx0XHRcdG9wdGlvbnMucGFuQ29udHJvbCA9IHZhbHVlICE9PSAnZmFsc2UnO1xyXG5cclxuXHRcdFx0XHR0aGlzLm1hcC5zZXRPcHRpb25zKCBvcHRpb25zICk7XHJcblxyXG5cdFx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0b3ZlcnZpZXdjb250cm9sOiBmdW5jdGlvbiggdmFsdWUgKSB7XHJcblx0XHRcdFx0dmFyIG9wdGlvbnM7XHJcblxyXG5cdFx0XHRcdG9wdGlvbnNcdD0ge307XHJcblxyXG5cdFx0XHRcdGlmICggdmFsdWUgPT09ICdmYWxzZScgKXtcclxuXHRcdFx0XHRcdG9wdGlvbnMub3ZlcnZpZXdNYXBDb250cm9sID0gZmFsc2U7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdG9wdGlvbnMgPSB7XHJcblx0XHRcdFx0XHRcdG92ZXJ2aWV3TWFwQ29udHJvbDogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0b3ZlcnZpZXdNYXBDb250cm9sT3B0aW9uczoge1xyXG5cdFx0XHRcdFx0XHRcdG9wZW5lZDogdmFsdWUgPT09ICdvcGVuZWQnXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH07XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR0aGlzLm1hcC5zZXRPcHRpb25zKCBvcHRpb25zICk7XHJcblxyXG5cdFx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0ZHJhZ2dhYmxlY29udHJvbDogZnVuY3Rpb24oIHZhbHVlICkge1xyXG5cdFx0XHRcdHZhciBvcHRpb25zO1xyXG5cclxuXHRcdFx0XHRvcHRpb25zXHQ9IHt9O1xyXG5cclxuXHRcdFx0XHRvcHRpb25zLmRyYWdnYWJsZSA9IHZhbHVlICE9PSAnZmFsc2UnO1xyXG5cclxuXHRcdFx0XHR0aGlzLm1hcC5zZXRPcHRpb25zKCBvcHRpb25zICk7XHJcblxyXG5cdFx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0Y2xpY2t0b3pvb21jb250cm9sOiBmdW5jdGlvbiggdmFsdWUgKSB7XHJcblx0XHRcdFx0dmFyIG9wdGlvbnM7XHJcblxyXG5cdFx0XHRcdG9wdGlvbnNcdD0ge307XHJcblxyXG5cdFx0XHRcdG9wdGlvbnMuZGlzYWJsZURvdWJsZUNsaWNrWm9vbSA9IHZhbHVlID09PSAnZmFsc2UnO1xyXG5cclxuXHRcdFx0XHR0aGlzLm1hcC5zZXRPcHRpb25zKCBvcHRpb25zICk7XHJcblxyXG5cdFx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0c2Nyb2xsd2hlZWxjb250cm9sOiBmdW5jdGlvbiggdmFsdWUgKSB7XHJcblx0XHRcdFx0dmFyIG9wdGlvbnM7XHJcblxyXG5cdFx0XHRcdG9wdGlvbnNcdD0ge307XHJcblxyXG5cdFx0XHRcdG9wdGlvbnMuc2Nyb2xsd2hlZWwgPSB2YWx1ZSAhPT0gJ2ZhbHNlJztcclxuXHJcblx0XHRcdFx0dGhpcy5tYXAuc2V0T3B0aW9ucyggb3B0aW9ucyApO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdG1hcHR5cGU6IGZ1bmN0aW9uKCB2YWx1ZSApIHtcclxuXHRcdFx0XHR2YXIgb3B0aW9ucyxcclxuXHRcdFx0XHRcdG1hcFN0eWxlcyxcclxuXHRcdFx0XHRcdG1hcFR5cGU7XHJcblxyXG5cdFx0XHRcdG1hcFN0eWxlcyA9IHRoaXMuJHdyYXBwZXIuZmluZCggJ1tkYXRhLWJ1aWxkZXItZmllbGQ9XCJtYXB0aGVtZVwiXScgKS5jaGlsZHJlbiggJ29wdGlvbicgKS5maWx0ZXIoICc6c2VsZWN0ZWQnICkuZGF0YSggJ2pzb24nICk7XHJcblx0XHRcdFx0bWFwVHlwZSA9ICBnb29nbGUubWFwcy5NYXBUeXBlSWRbIHZhbHVlLnRvVXBwZXJDYXNlKCkgXTtcclxuXHJcblx0XHRcdFx0b3B0aW9uc1x0PSB7XHJcblx0XHRcdFx0XHRtYXBUeXBlSWQ6IG1hcFR5cGVcclxuXHRcdFx0XHR9O1xyXG5cclxuXHRcdFx0XHRpZiAoICQuaW5BcnJheSggZ29vZ2xlLm1hcHMuTWFwVHlwZUlkWyB2YWx1ZS50b1VwcGVyQ2FzZSgpIF0sIFsgJ3RlcnJhaW4nLCAncm9hZG1hcCcgXSkgPiAtMSAmJiAhIW1hcFN0eWxlcyApIHtcclxuXHRcdFx0XHRcdG9wdGlvbnMuc3R5bGVzID0gZXZhbCggbWFwU3R5bGVzICk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdG9wdGlvbnMuc3R5bGVzID0gZmFsc2U7XHJcblx0XHRcdFx0XHR0aGlzLnVwZGF0ZUNvbnRyb2woICdtYXB0aGVtZScgKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHRoaXMubWFwLnNldE9wdGlvbnMoIG9wdGlvbnMgKTtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdG1hcHRoZW1lOiBmdW5jdGlvbiggdmFsdWUgKSB7XHJcblx0XHRcdFx0dmFyIGpzb24sXHJcblx0XHRcdFx0XHRtYXBUeXBlLFxyXG5cdFx0XHRcdFx0b3B0aW9ucztcclxuXHJcblx0XHRcdFx0bWFwVHlwZSA9IGdvb2dsZS5tYXBzLk1hcFR5cGVJZFsgdGhpcy5tYXAuZ2V0TWFwVHlwZUlkKCkgPT09ICd0ZXJyYWluJyA/ICdURVJSQUlOJyA6ICdST0FETUFQJyBdO1xyXG5cdFx0XHRcdG9wdGlvbnMgPSB7fTtcclxuXHRcdFx0XHRqc29uID0gdGhpcy4kd3JhcHBlci5maW5kKCAnW2RhdGEtYnVpbGRlci1maWVsZD1cIm1hcHRoZW1lXCJdJyApLmNoaWxkcmVuKCAnb3B0aW9uJyApLmZpbHRlciggJzpzZWxlY3RlZCcgKS5kYXRhKCAnanNvbicgKTtcclxuXHJcblx0XHRcdFx0aWYgKCAhanNvbiApIHtcclxuXHRcdFx0XHRcdG9wdGlvbnMgPSB7XHJcblx0XHRcdFx0XHRcdG1hcFR5cGVJZDogbWFwVHlwZSxcclxuXHRcdFx0XHRcdFx0c3R5bGVzOiBmYWxzZVxyXG5cdFx0XHRcdFx0fTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0b3B0aW9ucyA9IHtcclxuXHRcdFx0XHRcdFx0bWFwVHlwZUlkOiBtYXBUeXBlLFxyXG5cdFx0XHRcdFx0XHRzdHlsZXM6IGV2YWwoIGpzb24gKVxyXG5cdFx0XHRcdFx0fTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHRoaXMubWFwLnNldE9wdGlvbnMoIG9wdGlvbnMgKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH0sXHJcblxyXG5cdFx0Ly8gQ09OVFJPTFMgRlVOQ1RJT05TXHJcblx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0dXBkYXRlQ29udHJvbDogZnVuY3Rpb24oIHByb3AgKSB7XHJcblx0XHRcdHZhciB1cGRhdGVGbjtcclxuXHJcblx0XHRcdHVwZGF0ZUZuID0gdGhpcy51cGRhdGVDb250cm9sVmFsdWVbIHByb3AgXTtcclxuXHJcblx0XHRcdGlmICggJC5pc0Z1bmN0aW9uKCB1cGRhdGVGbiApICkge1xyXG5cdFx0XHRcdHVwZGF0ZUZuLmFwcGx5KCB0aGlzICk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Y29uc29sZS5pbmZvKCAnbWlzc2luZyB1cGRhdGUgZnVuY3Rpb24gZm9yJywgcHJvcCApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0dXBkYXRlQ29udHJvbFZhbHVlOiB7XHJcblxyXG5cdFx0XHRsYXRsbmc6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHZhciBjZW50ZXIgPSB0aGlzLm1hcC5nZXRDZW50ZXIoKTtcclxuXHJcblx0XHRcdFx0dGhpcy4kd3JhcHBlci5maW5kKCdbZGF0YS1idWlsZGVyLWZpZWxkXVtuYW1lPVwibGF0aXR1ZGVcIl0nKS52YWwoIHJvdW5kTnVtYmVyKCBjZW50ZXIubGF0KCkgLCA2ICkgKTtcclxuXHRcdFx0XHR0aGlzLiR3cmFwcGVyLmZpbmQoJ1tkYXRhLWJ1aWxkZXItZmllbGRdW25hbWU9XCJsb25naXR1ZGVcIl0nKS52YWwoIHJvdW5kTnVtYmVyKCBjZW50ZXIubG5nKCkgLCA2ICkgKTtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdHpvb21sZXZlbDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dmFyICRjb250cm9sLFxyXG5cdFx0XHRcdFx0bGV2ZWw7XHJcblxyXG5cdFx0XHRcdGxldmVsID0gdGhpcy5tYXAuZ2V0Wm9vbSgpO1xyXG5cclxuXHRcdFx0XHQkY29udHJvbCA9IHRoaXMuJHdyYXBwZXIuZmluZCgnW2RhdGEtYnVpbGRlci1maWVsZD1cInpvb21sZXZlbFwiXScpO1xyXG5cclxuXHRcdFx0XHQkY29udHJvbFxyXG5cdFx0XHRcdFx0LmNoaWxkcmVuKCAnb3B0aW9uW3ZhbHVlPVwiJyArIGxldmVsICsgJ1wiXScgKVxyXG5cdFx0XHRcdFx0LnByb3AoICdzZWxlY3RlZCcsIHRydWUgKTtcclxuXHJcblx0XHRcdFx0aWYgKCAkY29udHJvbC5oYXNDbGFzcyggJ3NlbGVjdDItb2Zmc2NyZWVuJyApICkge1xyXG5cdFx0XHRcdFx0JGNvbnRyb2wuc2VsZWN0MiggJ3ZhbCcsIGxldmVsICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0bWFwdHlwZTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dmFyICRjb250cm9sLFxyXG5cdFx0XHRcdFx0bWFwVHlwZTtcclxuXHJcblx0XHRcdFx0bWFwVHlwZSA9IHRoaXMubWFwLmdldE1hcFR5cGVJZCgpO1xyXG5cdFx0XHRcdCRjb250cm9sID0gdGhpcy4kd3JhcHBlci5maW5kKCdbZGF0YS1idWlsZGVyLWZpZWxkPVwibWFwdHlwZVwiXScpO1xyXG5cclxuXHRcdFx0XHQkY29udHJvbFxyXG5cdFx0XHRcdFx0LmNoaWxkcmVuKCAnb3B0aW9uW3ZhbHVlPVwiJyArIG1hcFR5cGUgKyAnXCJdJyApXHJcblx0XHRcdFx0XHQucHJvcCggJ3NlbGVjdGVkJywgdHJ1ZSApO1xyXG5cclxuXHRcdFx0XHRpZiAoICRjb250cm9sLmhhc0NsYXNzKCAnc2VsZWN0Mi1vZmZzY3JlZW4nICkgKSB7XHJcblx0XHRcdFx0XHQkY29udHJvbC5zZWxlY3QyKCAndmFsJywgbWFwVHlwZSApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdG1hcHRoZW1lOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR2YXIgJGNvbnRyb2w7XHJcblxyXG5cdFx0XHRcdCRjb250cm9sID0gdGhpcy4kd3JhcHBlci5maW5kKCdbZGF0YS1idWlsZGVyLWZpZWxkPVwibWFwdGhlbWVcIl0nKTtcclxuXHJcblx0XHRcdFx0JGNvbnRyb2xcclxuXHRcdFx0XHRcdC5jaGlsZHJlbiggJ29wdGlvblt2YWx1ZT1cImZhbHNlXCJdJyApXHJcblx0XHRcdFx0XHQucHJvcCggJ3NlbGVjdGVkJywgdHJ1ZSApO1xyXG5cclxuXHRcdFx0XHRpZiAoICRjb250cm9sLmhhc0NsYXNzKCAnc2VsZWN0Mi1vZmZzY3JlZW4nICkgKSB7XHJcblx0XHRcdFx0XHQkY29udHJvbC5zZWxlY3QyKCAndmFsJywgJ2ZhbHNlJyApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0sXHJcblxyXG5cdFx0Ly8gTUFSS0VSUyBGVU5DVElPTlNcclxuXHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHRlZGl0TWFya2VyOiBmdW5jdGlvbiggbWFya2VyICkge1xyXG5cdFx0XHR0aGlzLmN1cnJlbnRNYXJrZXIgPSBtYXJrZXI7XHJcblxyXG5cdFx0XHR0aGlzLm1hcmtlci4kZm9ybVxyXG5cdFx0XHRcdC5maW5kKCAnI01hcmtlckxvY2F0aW9uJyApLnZhbCggbWFya2VyLmxvY2F0aW9uICk7XHJcblxyXG5cdFx0XHR0aGlzLm1hcmtlci4kZm9ybVxyXG5cdFx0XHRcdC5maW5kKCAnI01hcmtlclRpdGxlJyApLnZhbCggbWFya2VyLnRpdGxlICk7XHJcblxyXG5cdFx0XHR0aGlzLm1hcmtlci4kZm9ybVxyXG5cdFx0XHRcdC5maW5kKCAnI01hcmtlckRlc2NyaXB0aW9uJyApLnZhbCggbWFya2VyLmRlc2NyaXB0aW9uICk7XHJcblxyXG5cdFx0XHR0aGlzLm1hcmtlci4kbW9kYWwubW9kYWwoICdzaG93JyApO1xyXG5cdFx0fSxcclxuXHJcblx0XHRyZW1vdmVNYXJrZXI6IGZ1bmN0aW9uKCBtYXJrZXIgKSB7XHJcblx0XHRcdHZhciBpO1xyXG5cclxuXHRcdFx0bWFya2VyLl9pbnN0YW5jZS5zZXRNYXAoIG51bGwgKTtcclxuXHRcdFx0bWFya2VyLl8kaHRtbC5yZW1vdmUoKTtcclxuXHJcblx0XHRcdGZvciggaSA9IDA7IGkgPCB0aGlzLm1hcmtlcnMubGVuZ3RoOyBpKysgKSB7XHJcblx0XHRcdFx0aWYgKCBtYXJrZXIgPT09IHRoaXMubWFya2Vyc1sgaSBdICkge1xyXG5cdFx0XHRcdFx0dGhpcy5tYXJrZXJzLnNwbGljZSggaSwgMSApO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIHRoaXMubWFya2Vycy5sZW5ndGggPT09IDAgKSB7XHJcblx0XHRcdFx0dGhpcy5tYXJrZXIuJGxpc3QuYWRkQ2xhc3MoICdoaWRkZW4nICk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdFx0c2F2ZU1hcmtlcjogZnVuY3Rpb24oIG1hcmtlciApIHtcclxuXHRcdFx0dGhpcy5fZ2VvY29kZSggbWFya2VyICk7XHJcblx0XHR9LFxyXG5cclxuXHRcdHJlbW92ZUFsbE1hcmtlcnM6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgaSA9IDAsXHJcblx0XHRcdFx0bCxcclxuXHRcdFx0XHRtYXJrZXI7XHJcblxyXG5cdFx0XHRsID0gdGhpcy5tYXJrZXJzLmxlbmd0aDtcclxuXHJcblx0XHRcdGZvciggOyBpIDwgbDsgaSsrICkge1xyXG5cdFx0XHRcdG1hcmtlciA9IHRoaXMubWFya2Vyc1sgaSBdO1xyXG5cclxuXHRcdFx0XHRtYXJrZXIuX2luc3RhbmNlLnNldE1hcCggbnVsbCApO1xyXG5cdFx0XHRcdG1hcmtlci5fJGh0bWwucmVtb3ZlKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMubWFya2VycyA9IFtdO1xyXG5cdFx0XHR0aGlzLm1hcmtlci4kbGlzdC5hZGRDbGFzcyggJ2hpZGRlbicgKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0X2dlb2NvZGU6IGZ1bmN0aW9uKCBtYXJrZXIgKSB7XHJcblx0XHRcdHZhciBfc2VsZiA9IHRoaXMsXHJcblx0XHRcdFx0c3RhdHVzO1xyXG5cclxuXHRcdFx0dGhpcy5nZW9jb2Rlci5nZW9jb2RlKHsgYWRkcmVzczogbWFya2VyLmxvY2F0aW9uIH0sIGZ1bmN0aW9uKCByZXNwb25zZSwgc3RhdHVzICkge1xyXG5cdFx0XHRcdF9zZWxmLl9vbkdlb2NvZGVSZXN1bHQoIG1hcmtlciwgcmVzcG9uc2UsIHN0YXR1cyApO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblxyXG5cdFx0X29uR2VvY29kZVJlc3VsdDogZnVuY3Rpb24oIG1hcmtlciwgcmVzcG9uc2UsIHN0YXR1cyApIHtcclxuXHRcdFx0dmFyIHJlc3VsdDtcclxuXHJcblx0XHRcdGlmICggIXJlc3BvbnNlIHx8IHN0YXR1cyAhPT0gZ29vZ2xlLm1hcHMuR2VvY29kZXJTdGF0dXMuT0sgKSB7XHJcblx0XHRcdFx0aWYgKCBzdGF0dXMgPT0gZ29vZ2xlLm1hcHMuR2VvY29kZXJTdGF0dXMuWkVST19SRVNVTFRTICkge1xyXG5cdFx0XHRcdFx0Ly8gc2hvdyBub3RpZmljYXRpb25cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGltZW91dHMrKztcclxuXHRcdFx0XHRcdGlmICggdGltZW91dHMgPiAzICkge1xyXG5cdFx0XHRcdFx0XHQvLyBzaG93IG5vdGlmaWNhdGlvbiByZWFjaGVkIGxpbWl0IG9mIHJlcXVlc3RzXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRpbWVvdXRzID0gMDtcclxuXHJcblx0XHRcdFx0aWYgKCB0aGlzLmN1cnJlbnRNYXJrZXIgKSB7XHJcblx0XHRcdFx0XHR0aGlzLnJlbW92ZU1hcmtlciggdGhpcy5jdXJyZW50TWFya2VyICk7XHJcblx0XHRcdFx0XHR0aGlzLmN1cnJlbnRNYXJrZXIgPSBudWxsO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gZ3JhYiBmaXJzdCByZXN1bHQgb2YgdGhlIGxpc3RcclxuXHRcdFx0XHRyZXN1bHQgPSByZXNwb25zZVsgMCBdO1xyXG5cclxuXHRcdFx0XHQvLyBnZXQgbGF0ICYgbG5nIGFuZCBzZXQgdG8gbWFya2VyXHJcblx0XHRcdFx0bWFya2VyLmxhdCA9IE1hdGgucm91bmQoIHJlc3VsdC5nZW9tZXRyeS5sb2NhdGlvbi5sYXQoKSAqIDEwMDAwMDAgKSAvIDEwMDAwMDA7XHJcblx0XHRcdFx0bWFya2VyLmxuZyA9IE1hdGgucm91bmQoIHJlc3VsdC5nZW9tZXRyeS5sb2NhdGlvbi5sbmcoKSAqIDEwMDAwMDAgKSAvIDEwMDAwMDA7XHJcblxyXG5cdFx0XHRcdHZhciBvcHRzID0ge1xyXG5cdFx0XHRcdFx0cG9zaXRpb246IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoIG1hcmtlci5sYXQsIG1hcmtlci5sbmcgKSxcclxuXHRcdFx0XHRcdG1hcDogdGhpcy5tYXBcclxuXHRcdFx0XHR9O1xyXG5cclxuXHRcdFx0XHRpZiAoIG1hcmtlci50aXRsZS5sZW5ndGggPiAwICkge1xyXG5cdFx0XHRcdFx0b3B0cy50aXRsZSA9IG1hcmtlci50aXRsZTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmICggbWFya2VyLmRlc2NyaXB0aW9uLmxlbmd0aCA+IDAgKSB7XHJcblx0XHRcdFx0XHRvcHRzLmRlc2MgPSBtYXJrZXIuZGVzY3JpcHRpb247XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRtYXJrZXIucG9zaXRpb24gPSBvcHRzLnBvc2l0aW9uO1xyXG5cdFx0XHRcdG1hcmtlci5faW5zdGFuY2UgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKCBvcHRzICk7XHJcblxyXG5cdFx0XHRcdGlmICggISFtYXJrZXIudGl0bGUgfHwgISFtYXJrZXIuZGVzY3JpcHRpb24gICkge1xyXG5cdFx0XHRcdFx0dGhpcy5fYmluZE1hcmtlckNsaWNrKCBtYXJrZXIgKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHRoaXMubWFya2Vycy5wdXNoKCBtYXJrZXIgKTtcclxuXHJcblx0XHRcdFx0Ly8gYXBwZW5kIHRvIG1hcmtlcnMgbGlzdFxyXG5cdFx0XHRcdHRoaXMuX2FwcGVuZE1hcmtlclRvTGlzdCggbWFya2VyICk7XHJcblxyXG5cdFx0XHRcdC8vIGhpZGUgbW9kYWwgYW5kIHJlc2V0IGZvcm1cclxuXHRcdFx0XHR0aGlzLm1hcmtlci4kZm9ybS5nZXQoMCkucmVzZXQoKTtcclxuXHRcdFx0XHR0aGlzLm1hcmtlci4kbW9kYWwubW9kYWwoICdoaWRlJyApO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdF9hcHBlbmRNYXJrZXJUb0xpc3Q6IGZ1bmN0aW9uKCBtYXJrZXIgKSB7XHJcblx0XHRcdHZhciBfc2VsZiA9IHRoaXMsXHJcblx0XHRcdFx0aHRtbDtcclxuXHJcblx0XHRcdGh0bWwgPSBbXHJcblx0XHRcdFx0JzxsaT4nLFxyXG5cdFx0XHRcdFx0JzxwPntsb2NhdGlvbn08L3A+JyxcclxuXHRcdFx0XHRcdCc8YSBocmVmPVwiI1wiIGNsYXNzPVwibG9jYXRpb24tYWN0aW9uIGxvY2F0aW9uLWNlbnRlclwiPjxpIGNsYXNzPVwiZmFzIGZhLW1hcC1tYXJrZXItYWx0XCI+PC9pPjwvYT4nLFxyXG5cdFx0XHRcdFx0JzxhIGhyZWY9XCIjXCIgY2xhc3M9XCJsb2NhdGlvbi1hY3Rpb24gbG9jYXRpb24tZWRpdFwiPjxpIGNsYXNzPVwiZmFzIGZhLWVkaXRcIj48L2k+PC9hPicsXHJcblx0XHRcdFx0XHQnPGEgaHJlZj1cIiNcIiBjbGFzcz1cImxvY2F0aW9uLWFjdGlvbiBsb2NhdGlvbi1yZW1vdmUgdGV4dC1kYW5nZXJcIj48aSBjbGFzcz1cImZhcyBmYS10aW1lc1wiPjwvaT48L2E+JyxcclxuXHRcdFx0XHQnPC9saT4nXHJcblx0XHRcdF0uam9pbignJyk7XHJcblxyXG5cdFx0XHRodG1sID0gaHRtbC5yZXBsYWNlKCAvXFx7bG9jYXRpb25cXH0vLCAhIW1hcmtlci50aXRsZSA/IG1hcmtlci50aXRsZSA6IG1hcmtlci5sb2NhdGlvbiApO1xyXG5cclxuXHRcdFx0bWFya2VyLl8kaHRtbCA9ICQoIGh0bWwgKTtcclxuXHJcblx0XHRcdC8vIGV2ZW50c1xyXG5cdFx0XHRtYXJrZXIuXyRodG1sLmZpbmQoICcubG9jYXRpb24tY2VudGVyJyApXHJcblx0XHRcdFx0Lm9uKCAnY2xpY2snLCBmdW5jdGlvbiggZSApIHtcclxuXHRcdFx0XHRcdF9zZWxmLm1hcC5zZXRDZW50ZXIoIG1hcmtlci5wb3NpdGlvbiApO1xyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0bWFya2VyLl8kaHRtbC5maW5kKCAnLmxvY2F0aW9uLXJlbW92ZScgKVxyXG5cdFx0XHRcdC5vbiggJ2NsaWNrJywgZnVuY3Rpb24oIGUgKSB7XHJcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0XHRfc2VsZi5yZW1vdmVNYXJrZXIoIG1hcmtlciApO1xyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0bWFya2VyLl8kaHRtbC5maW5kKCAnLmxvY2F0aW9uLWVkaXQnIClcclxuXHRcdFx0XHQub24oICdjbGljaycsIGZ1bmN0aW9uKCBlICkge1xyXG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdFx0X3NlbGYuZWRpdE1hcmtlciggbWFya2VyICk7XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR0aGlzLm1hcmtlci4kbGlzdFxyXG5cdFx0XHRcdC5hcHBlbmQoIG1hcmtlci5fJGh0bWwgKVxyXG5cdFx0XHRcdC5yZW1vdmVDbGFzcyggJ2hpZGRlbicgKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0X2JpbmRNYXJrZXJDbGljazogZnVuY3Rpb24oIG1hcmtlciApIHtcclxuXHRcdFx0dmFyIF9zZWxmID0gdGhpcyxcclxuXHRcdFx0XHRodG1sO1xyXG5cclxuXHRcdFx0aHRtbCA9IFtcclxuXHRcdFx0XHQnPGRpdiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICNGRkY7IGNvbG9yOiAjMDAwOyBwYWRkaW5nOiA1cHg7IHdpZHRoOiAxNTBweDtcIj4nLFxyXG5cdFx0XHRcdFx0J3t0aXRsZX0nLFxyXG5cdFx0XHRcdFx0J3tkZXNjcmlwdGlvbn0nLFxyXG5cdFx0XHRcdCc8L2Rpdj4nXHJcblx0XHRcdF0uam9pbignJyk7XHJcblxyXG5cdFx0XHRodG1sID0gaHRtbC5yZXBsYWNlKC9cXHt0aXRsZVxcfS8sICEhbWFya2VyLnRpdGxlID8gIChcIjxoND5cIiArIG1hcmtlci50aXRsZSArIFwiPC9oND5cIikgOiBcIlwiICk7XHJcblx0XHRcdGh0bWwgPSBodG1sLnJlcGxhY2UoL1xce2Rlc2NyaXB0aW9uXFx9LywgISFtYXJrZXIuZGVzY3JpcHRpb24gPyAgKFwiPHA+XCIgKyBtYXJrZXIuZGVzY3JpcHRpb24gKyBcIjwvcD5cIikgOiBcIlwiICk7XHJcblxyXG5cdFx0XHRtYXJrZXIuX2luZm9XaW5kb3cgPSBuZXcgZ29vZ2xlLm1hcHMuSW5mb1dpbmRvdyh7IGNvbnRlbnQ6IGh0bWwgfSk7XHJcblxyXG5cdFx0XHRnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lciggbWFya2VyLl9pbnN0YW5jZSwgJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHRcdGlmICggbWFya2VyLl9pbmZvV2luZG93LmlzT3BlbmVkICkge1xyXG5cdFx0XHRcdFx0bWFya2VyLl9pbmZvV2luZG93LmNsb3NlKCk7XHJcblx0XHRcdFx0XHRtYXJrZXIuX2luZm9XaW5kb3cuaXNPcGVuZWQgPSBmYWxzZTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0bWFya2VyLl9pbmZvV2luZG93Lm9wZW4oIF9zZWxmLm1hcCwgdGhpcyApO1xyXG5cdFx0XHRcdFx0bWFya2VyLl9pbmZvV2luZG93LmlzT3BlbmVkID0gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblxyXG5cdFx0cHJldmlldzogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBjdXN0b21TY3JpcHQsXHJcblx0XHRcdFx0Z29vZ2xlU2NyaXB0LFxyXG5cdFx0XHRcdGlmcmFtZSxcclxuXHRcdFx0XHRwcmV2aWV3SHRtbDtcclxuXHJcblx0XHRcdHByZXZpZXdIdG1sID0gW1xyXG5cdFx0XHRcdCc8c3R5bGU+JyxcclxuXHRcdFx0XHRcdCdodG1sLCBib2R5IHsgbWFyZ2luOiAwOyBwYWRkaW5nOiAwOyB9JyxcclxuXHRcdFx0XHQnPC9zdHlsZT4nLFxyXG5cdFx0XHRcdCc8ZGl2IGlkPVwiJyArIHRoaXMuJHdyYXBwZXIuZmluZCgnW2RhdGEtYnVpbGRlci1maWVsZD1cIm1hcGlkXCJdJykudmFsKCkgKyAnXCIgc3R5bGU9XCJ3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlO1wiPjwvZGl2PidcclxuXHRcdFx0XTtcclxuXHJcblx0XHRcdGlmcmFtZSA9IHRoaXMuJHByZXZpZXdNb2RhbC5maW5kKCAnaWZyYW1lJyApLmdldCgwKS5jb250ZW50V2luZG93LmRvY3VtZW50O1xyXG5cclxuXHRcdFx0aWZyYW1lLmJvZHkuaW5uZXJIVE1MID0gcHJldmlld0h0bWwuam9pbignJyk7XHJcblxyXG5cdFx0XHRjdXN0b21TY3JpcHQgPSBpZnJhbWUuY3JlYXRlRWxlbWVudCggJ3NjcmlwdCcgKTtcclxuXHRcdFx0Y3VzdG9tU2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcclxuXHRcdFx0Y3VzdG9tU2NyaXB0LnRleHQgPSBcIndpbmRvdy5pbml0aWFsaXplID0gZnVuY3Rpb24oKSB7IFwiICsgdGhpcy5nZW5lcmF0ZSgpICsgXCIgaW5pdCgpOyB9OyBcIjtcclxuXHRcdFx0aWZyYW1lLmJvZHkuYXBwZW5kQ2hpbGQoIGN1c3RvbVNjcmlwdCApO1xyXG5cclxuXHRcdFx0Z29vZ2xlU2NyaXB0ID0gaWZyYW1lLmNyZWF0ZUVsZW1lbnQoICdzY3JpcHQnICk7XHJcblx0XHRcdGdvb2dsZVNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XHJcblx0XHRcdGdvb2dsZVNjcmlwdC50ZXh0ID0gJ2Z1bmN0aW9uIGxvYWRTY3JpcHQoKSB7IHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpOyBzY3JpcHQudHlwZSA9IFwidGV4dC9qYXZhc2NyaXB0XCI7IHNjcmlwdC5zcmMgPSBcIi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9qcz9rZXk9JnNlbnNvcj0mY2FsbGJhY2s9aW5pdGlhbGl6ZVwiOyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7IH0gbG9hZFNjcmlwdCgpJztcclxuXHRcdFx0aWZyYW1lLmJvZHkuYXBwZW5kQ2hpbGQoIGdvb2dsZVNjcmlwdCApO1xyXG5cdFx0fSxcclxuXHJcblx0XHRnZXRDb2RlOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy4kZ2V0Q29kZU1vZGFsLmZpbmQoJy5tb2RhbC1ib2R5IHByZScpLmh0bWwoIHRoaXMuZ2VuZXJhdGUoKS5yZXBsYWNlKCAvPC9nLCAnJmx0OycgKS5yZXBsYWNlKCAvPi9nLCAnJmd0OycgKSApO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvLyBHRU5FUkFURSBDT0RFXHJcblx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0Z2VuZXJhdGU6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgaSxcclxuXHRcdFx0XHR3b3JrO1xyXG5cclxuXHRcdFx0dmFyIG91dHB1dCA9IFtcclxuXHRcdFx0XHQnICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZERvbUxpc3RlbmVyKHdpbmRvdywgXCJsb2FkXCIsIGluaXQpOycsXHJcblx0XHRcdFx0JyAgICB2YXIgbWFwOycsXHJcblx0XHRcdFx0JyAgICBmdW5jdGlvbiBpbml0KCkgeycsXHJcblx0XHRcdFx0JyAgICAgICAgdmFyIG1hcE9wdGlvbnMgPSB7JyxcclxuXHRcdFx0XHQnICAgICAgICAgICAgY2VudGVyOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKHtsYXR9LCB7bG5nfSksJyxcclxuXHRcdFx0XHQnICAgICAgICAgICAgem9vbToge3pvb219LCcsXHJcblx0XHRcdFx0JyAgICAgICAgICAgIHpvb21Db250cm9sOiB7em9vbUNvbnRyb2x9LCcsXHJcblx0XHRcdFx0JyAgICAgICAgICAgIHt6b29tQ29udHJvbE9wdGlvbnN9JyxcclxuXHRcdFx0XHQnICAgICAgICAgICAgZGlzYWJsZURvdWJsZUNsaWNrWm9vbToge2Rpc2FibGVEb3VibGVDbGlja1pvb219LCcsXHJcblx0XHRcdFx0JyAgICAgICAgICAgIG1hcFR5cGVDb250cm9sOiB7bWFwVHlwZUNvbnRyb2x9LCcsXHJcblx0XHRcdFx0JyAgICAgICAgICAgIHttYXBUeXBlQ29udHJvbE9wdGlvbnN9JyxcclxuXHRcdFx0XHQnICAgICAgICAgICAgc2NhbGVDb250cm9sOiB7c2NhbGVDb250cm9sfSwnLFxyXG5cdFx0XHRcdCcgICAgICAgICAgICBzY3JvbGx3aGVlbDoge3Njcm9sbHdoZWVsfSwnLFxyXG5cdFx0XHRcdCcgICAgICAgICAgICBwYW5Db250cm9sOiB7cGFuQ29udHJvbH0sJyxcclxuXHRcdFx0XHQnICAgICAgICAgICAgc3RyZWV0Vmlld0NvbnRyb2w6IHtzdHJlZXRWaWV3Q29udHJvbH0sJyxcclxuXHRcdFx0XHQnICAgICAgICAgICAgZHJhZ2dhYmxlIDoge2RyYWdnYWJsZX0sJyxcclxuXHRcdFx0XHQnICAgICAgICAgICAgb3ZlcnZpZXdNYXBDb250cm9sOiB7b3ZlcnZpZXdNYXBDb250cm9sfSwnLFxyXG5cdFx0XHRcdCcgICAgICAgICAgICB7b3ZlcnZpZXdNYXBDb250cm9sT3B0aW9uc30nLFxyXG5cdFx0XHRcdCcgICAgICAgICAgICBtYXBUeXBlSWQ6IGdvb2dsZS5tYXBzLk1hcFR5cGVJZC57bWFwVHlwZUlkfXtzdHlsZXN9JyxcclxuXHRcdFx0XHQnICAgICAgICB9OycsXHJcblx0XHRcdFx0JycsXHJcblx0XHRcdFx0JyAgICAgICAgdmFyIG1hcEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInttYXBpZH1cIik7JyxcclxuXHRcdFx0XHQnICAgICAgICB2YXIgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChtYXBFbGVtZW50LCBtYXBPcHRpb25zKTsnLFxyXG5cdFx0XHRcdCcgICAgICAgIHtsb2NhdGlvbnN9JyxcclxuXHRcdFx0XHQnICAgIH0nXHJcblx0XHRcdF07XHJcblxyXG5cdFx0XHRvdXRwdXQgPSBvdXRwdXQuam9pbihcIlxcclxcblwiKTtcclxuXHJcblx0XHRcdHZhciB6b29tQ29udHJvbFx0XHRcdD0gdGhpcy4kd3JhcHBlci5maW5kKCdbZGF0YS1idWlsZGVyLWZpZWxkPVwiem9vbWNvbnRyb2xcIl0gb3B0aW9uOnNlbGVjdGVkJykudmFsKCkgIT09ICdmYWxzZSc7XHJcblx0XHRcdHZhciBtYXBUeXBlQ29udHJvbFx0XHQ9IHRoaXMuJHdyYXBwZXIuZmluZCgnW2RhdGEtYnVpbGRlci1maWVsZD1cIm1hcHR5cGVjb250cm9sXCJdIG9wdGlvbjpzZWxlY3RlZCcpLnZhbCgpICE9PSAnZmFsc2UnO1xyXG5cdFx0XHR2YXIgb3ZlcnZpZXdNYXBDb250cm9sXHQ9IHRoaXMuJHdyYXBwZXIuZmluZCgnW2RhdGEtYnVpbGRlci1maWVsZD1cIm92ZXJ2aWV3Y29udHJvbFwiXSBvcHRpb246c2VsZWN0ZWQnKS52YWwoKS50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0XHR2YXIgJHRoZW1lQ29udHJvbFx0XHQ9IHRoaXMuJHdyYXBwZXIuZmluZCgnW2RhdGEtYnVpbGRlci1maWVsZD1cIm1hcHRoZW1lXCJdIG9wdGlvbjpzZWxlY3RlZCcpLmZpbHRlciggJzpzZWxlY3RlZCcgKTtcclxuXHJcblx0XHRcdG91dHB1dCA9IG91dHB1dFxyXG5cdFx0XHRcdFx0XHQucmVwbGFjZSggL1xce21hcGlkXFx9LywgdGhpcy4kd3JhcHBlci5maW5kKCdbZGF0YS1idWlsZGVyLWZpZWxkPVwibWFwaWRcIl0nKS52YWwoKSApXHJcblx0XHRcdFx0XHRcdC5yZXBsYWNlKCAvXFx7bGF0XFx9LywgdGhpcy4kd3JhcHBlci5maW5kKCdbZGF0YS1idWlsZGVyLWZpZWxkXVtuYW1lPVwibGF0aXR1ZGVcIl0nKS52YWwoKSApXHJcblx0XHRcdFx0XHRcdC5yZXBsYWNlKCAvXFx7bG5nXFx9LywgdGhpcy4kd3JhcHBlci5maW5kKCdbZGF0YS1idWlsZGVyLWZpZWxkXVtuYW1lPVwibG9uZ2l0dWRlXCJdJykudmFsKCkgKVxyXG5cdFx0XHRcdFx0XHQucmVwbGFjZSggL1xce3pvb21cXH0vLCB0aGlzLiR3cmFwcGVyLmZpbmQoJ1tkYXRhLWJ1aWxkZXItZmllbGQ9XCJ6b29tbGV2ZWxcIl0gb3B0aW9uOnNlbGVjdGVkJykudmFsKCkgKVxyXG5cdFx0XHRcdFx0XHQucmVwbGFjZSggL1xce3pvb21Db250cm9sXFx9Lywgem9vbUNvbnRyb2wgKVxyXG5cdFx0XHRcdFx0XHQucmVwbGFjZSggL1xce2Rpc2FibGVEb3VibGVDbGlja1pvb21cXH0vLCB0aGlzLiR3cmFwcGVyLmZpbmQoJ1tkYXRhLWJ1aWxkZXItZmllbGQ9XCJjbGlja3Rvem9vbWNvbnRyb2xcIl0gb3B0aW9uOnNlbGVjdGVkJykudmFsKCkgPT09ICdmYWxzZScgKVxyXG5cdFx0XHRcdFx0XHQucmVwbGFjZSggL1xce21hcFR5cGVDb250cm9sXFx9LywgbWFwVHlwZUNvbnRyb2wgKVxyXG5cdFx0XHRcdFx0XHQucmVwbGFjZSggL1xce3NjYWxlQ29udHJvbFxcfS8sIHRoaXMuJHdyYXBwZXIuZmluZCgnW2RhdGEtYnVpbGRlci1maWVsZD1cInNjYWxlY29udHJvbFwiXSBvcHRpb246c2VsZWN0ZWQnKS52YWwoKSAhPT0gJ2ZhbHNlJyApXHJcblx0XHRcdFx0XHRcdC5yZXBsYWNlKCAvXFx7c2Nyb2xsd2hlZWxcXH0vLCB0aGlzLiR3cmFwcGVyLmZpbmQoJ1tkYXRhLWJ1aWxkZXItZmllbGQ9XCJzY3JvbGx3aGVlbGNvbnRyb2xcIl0gb3B0aW9uOnNlbGVjdGVkJykudmFsKCkgIT09ICdmYWxzZScgKVxyXG5cdFx0XHRcdFx0XHQucmVwbGFjZSggL1xce3BhbkNvbnRyb2xcXH0vLCB0aGlzLiR3cmFwcGVyLmZpbmQoJ1tkYXRhLWJ1aWxkZXItZmllbGQ9XCJwYW5jb250cm9sXCJdIG9wdGlvbjpzZWxlY3RlZCcpLnZhbCgpICE9PSAnZmFsc2UnIClcclxuXHRcdFx0XHRcdFx0LnJlcGxhY2UoIC9cXHtzdHJlZXRWaWV3Q29udHJvbFxcfS8sIHRoaXMuJHdyYXBwZXIuZmluZCgnW2RhdGEtYnVpbGRlci1maWVsZD1cInN0cmVldHZpZXdjb250cm9sXCJdIG9wdGlvbjpzZWxlY3RlZCcpLnZhbCgpICE9PSAnZmFsc2UnIClcclxuXHRcdFx0XHRcdFx0LnJlcGxhY2UoIC9cXHtkcmFnZ2FibGVcXH0vLCB0aGlzLiR3cmFwcGVyLmZpbmQoJ1tkYXRhLWJ1aWxkZXItZmllbGQ9XCJkcmFnZ2FibGVjb250cm9sXCJdIG9wdGlvbjpzZWxlY3RlZCcpLnZhbCgpICE9PSAnZmFsc2UnIClcclxuXHRcdFx0XHRcdFx0LnJlcGxhY2UoIC9cXHtvdmVydmlld01hcENvbnRyb2xcXH0vLCBvdmVydmlld01hcENvbnRyb2wgIT09ICdmYWxzZScgKVxyXG5cdFx0XHRcdFx0XHQucmVwbGFjZSggL1xce21hcFR5cGVJZFxcfS8sIHRoaXMuJHdyYXBwZXIuZmluZCgnW2RhdGEtYnVpbGRlci1maWVsZD1cIm1hcHR5cGVcIl0gb3B0aW9uOnNlbGVjdGVkJykudmFsKCkudG9VcHBlckNhc2UoKSApO1xyXG5cclxuXHRcdFx0aWYgKCB6b29tQ29udHJvbCApIHtcclxuXHRcdFx0XHR3b3JrID0ge1xyXG5cdFx0XHRcdFx0em9vbUNvbnRyb2xPcHRpb25zOiB7XHJcblx0XHRcdFx0XHRcdHN0eWxlOiB0aGlzLiR3cmFwcGVyLmZpbmQoJ1tkYXRhLWJ1aWxkZXItZmllbGQ9XCJtYXB0eXBlY29udHJvbFwiXSBvcHRpb246c2VsZWN0ZWQnKS52YWwoKS50b1VwcGVyQ2FzZSgpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fTtcclxuXHRcdFx0XHRvdXRwdXQgPSBvdXRwdXQucmVwbGFjZSggL1xce3pvb21Db250cm9sT3B0aW9uc1xcfS8sIFwiem9vbUNvbnRyb2xPcHRpb25zOiB7XFxyXFxuICAgICAgICAgICAgICAgIHN0eWxlOiBnb29nbGUubWFwcy5ab29tQ29udHJvbFN0eWxlLlwiICsgdGhpcy4kd3JhcHBlci5maW5kKCdbZGF0YS1idWlsZGVyLWZpZWxkPVwiem9vbWNvbnRyb2xcIl0gb3B0aW9uOnNlbGVjdGVkJykudmFsKCkudG9VcHBlckNhc2UoKSArIFwiXFxyXFxuXFwgICAgICAgICAgICB9LFwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRvdXRwdXQgPSBvdXRwdXQucmVwbGFjZSggL1xce3pvb21Db250cm9sT3B0aW9uc1xcfS8sICcnICk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICggbWFwVHlwZUNvbnRyb2wgKSB7XHJcblx0XHRcdFx0d29yayA9IHtcclxuXHRcdFx0XHRcdHpvb21Db250cm9sT3B0aW9uczoge1xyXG5cdFx0XHRcdFx0XHRzdHlsZTogdGhpcy4kd3JhcHBlci5maW5kKCdbZGF0YS1idWlsZGVyLWZpZWxkPVwibWFwdHlwZWNvbnRyb2xcIl0gb3B0aW9uOnNlbGVjdGVkJykudmFsKCkudG9VcHBlckNhc2UoKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH07XHJcblx0XHRcdFx0b3V0cHV0ID0gb3V0cHV0LnJlcGxhY2UoIC9cXHttYXBUeXBlQ29udHJvbE9wdGlvbnNcXH0vLCBcIm1hcFR5cGVDb250cm9sT3B0aW9uczoge1xcclxcbiAgICAgICAgICAgICAgICBzdHlsZTogZ29vZ2xlLm1hcHMuTWFwVHlwZUNvbnRyb2xTdHlsZS5cIiArIHRoaXMuJHdyYXBwZXIuZmluZCgnW2RhdGEtYnVpbGRlci1maWVsZD1cIm1hcHR5cGVjb250cm9sXCJdIG9wdGlvbjpzZWxlY3RlZCcpLnZhbCgpLnRvVXBwZXJDYXNlKCkgKyBcIlxcclxcblxcICAgICAgICAgICAgfSxcIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0b3V0cHV0ID0gb3V0cHV0LnJlcGxhY2UoIC9cXHttYXBUeXBlQ29udHJvbE9wdGlvbnNcXH0vLCAnJyApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIG92ZXJ2aWV3TWFwQ29udHJvbCAhPT0gJ2ZhbHNlJyApIHtcclxuXHRcdFx0XHRvdXRwdXQgPSBvdXRwdXQucmVwbGFjZSggL1xce292ZXJ2aWV3TWFwQ29udHJvbE9wdGlvbnNcXH0vLCBcIm92ZXJ2aWV3TWFwQ29udHJvbE9wdGlvbnM6IHtcXHJcXG4gICAgICAgICAgICAgICAgb3BlbmVkOiBcIiArIChvdmVydmlld01hcENvbnRyb2wgPT09ICdvcGVuZWQnKSArIFwiXFxyXFxuXFwgICAgICAgICAgICB9LFwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRvdXRwdXQgPSBvdXRwdXQucmVwbGFjZSggL1xce292ZXJ2aWV3TWFwQ29udHJvbE9wdGlvbnNcXH0vLCAnJyApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoICR0aGVtZUNvbnRyb2wudmFsKCkgIT09ICdmYWxzZScgKSB7XHJcblx0XHRcdFx0b3V0cHV0ID0gb3V0cHV0LnJlcGxhY2UoIC9cXHtzdHlsZXNcXH0vLCAnLFxcclxcbiAgICAgICAgICAgIHN0eWxlczogJyArICR0aGVtZUNvbnRyb2wuZGF0YSggJ2pzb24nICkucmVwbGFjZSgvXFxyXFxuL2csICcnKSApO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdG91dHB1dCA9IG91dHB1dC5yZXBsYWNlKCAvXFx7c3R5bGVzXFx9LywgJycgKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCB0aGlzLm1hcmtlcnMubGVuZ3RoID4gMCApIHtcclxuXHRcdFx0XHR2YXIgd29yayA9IFsgJ3ZhciBsb2NhdGlvbnMgPSBbJyBdO1xyXG5cdFx0XHRcdHZhciBtLFxyXG5cdFx0XHRcdFx0b2JqZWN0O1xyXG5cclxuXHRcdFx0XHRmb3IoIGkgPSAwOyBpIDwgdGhpcy5tYXJrZXJzLmxlbmd0aDsgaSsrICkge1xyXG5cdFx0XHRcdFx0bSA9IHRoaXMubWFya2Vyc1sgaSBdO1xyXG5cdFx0XHRcdFx0b2JqZWN0ID0gJyc7XHJcblxyXG5cdFx0XHRcdFx0b2JqZWN0ICs9ICcgICAgICAgICAgICB7IGxhdDogJyArIG0ubGF0ICsgJywgbG5nOiAnICsgbS5sbmc7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCAhIW0udGl0bGUgKSB7XHJcblx0XHRcdFx0XHRcdG9iamVjdCArPSAnLCB0aXRsZTogXCInICsgbS50aXRsZSArICdcIic7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0aWYgKCAhIW0uZGVzY3JpcHRpb24gKSB7XHJcblx0XHRcdFx0XHRcdG9iamVjdCArPSAnLCBkZXNjcmlwdGlvbjogXCInICsgbS5kZXNjcmlwdGlvbiArICdcIic7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0b2JqZWN0ICs9ICcgfSc7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCBpICsgMSA8IHRoaXMubWFya2Vycy5sZW5ndGggKSB7XHJcblx0XHRcdFx0XHRcdG9iamVjdCArPSAnLCc7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0d29yay5wdXNoKCBvYmplY3QgKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHdvcmsucHVzaCggJyAgICAgICAgXTtcXHJcXG4nIClcclxuXHJcblx0XHRcdFx0d29yay5wdXNoKCAnICAgICAgICB2YXIgb3B0cyA9IHt9OycgKVxyXG5cdFx0XHRcdHdvcmsucHVzaCggJyAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsb2NhdGlvbnMubGVuZ3RoOyBpKyspIHsnICk7XHJcblx0XHRcdFx0d29yay5wdXNoKCAnICAgICAgICAgICAgb3B0cy5wb3NpdGlvbiA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoIGxvY2F0aW9uc1sgaSBdLmxhdCwgbG9jYXRpb25zWyBpIF0ubG5nICk7JyApO1xyXG5cdFx0XHRcdHdvcmsucHVzaCggJyAgICAgICAgICAgIG9wdHMubWFwID0gbWFwOycgKTtcclxuXHRcdFx0XHR3b3JrLnB1c2goICcgICAgICAgICAgICBpZiAoICEhbG9jYXRpb25zWyBpIF0gLnRpdGxlICkgeyBvcHRzLnRpdGxlID0gbG9jYXRpb25zWyBpIF0udGl0bGU7IH0nKTtcclxuXHRcdFx0XHR3b3JrLnB1c2goICcgICAgICAgICAgICBpZiAoICEhbG9jYXRpb25zWyBpIF0gLmRlc2NyaXB0aW9uICkgeyBvcHRzLmRlc2NyaXB0aW9uID0gbG9jYXRpb25zWyBpIF0uZGVzY3JpcHRpb247IH0nKTtcclxuXHRcdFx0XHR3b3JrLnB1c2goICcgICAgICAgICAgICBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKCBvcHRzICk7JyApO1xyXG5cdFx0XHRcdHdvcmsucHVzaCggJycgKTtcclxuXHRcdFx0XHR3b3JrLnB1c2goICcgICAgICAgICAgICAoZnVuY3Rpb24oKSB7JyApO1xyXG5cdFx0XHRcdHdvcmsucHVzaCggJyAgICAgICAgICAgICAgICB2YXIgaHRtbCA9IFsnICk7XHJcblx0XHRcdFx0d29yay5wdXNoKCAnICAgICAgICAgICAgICAgIFx0XFwnPGRpdiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICNGRkY7IGNvbG9yOiAjMDAwOyBwYWRkaW5nOiA1cHg7IHdpZHRoOiAxNTBweDtcIj5cXCcsJyApO1xyXG5cdFx0XHRcdHdvcmsucHVzaCggJyAgICAgICAgICAgICAgICBcdFx0XFwne3RpdGxlfVxcJywnICk7XHJcblx0XHRcdFx0d29yay5wdXNoKCAnICAgICAgICAgICAgICAgIFx0XHRcXCd7ZGVzY3JpcHRpb259XFwnLCcgKTtcclxuXHRcdFx0XHR3b3JrLnB1c2goICcgICAgICAgICAgICAgICAgXHRcXCc8L2Rpdj5cXCcnICk7XHJcblx0XHRcdFx0d29yay5wdXNoKCAnICAgICAgICAgICAgICAgIF0uam9pbihcXCdcXCcpOycgKTtcclxuXHJcblx0XHRcdFx0d29yay5wdXNoKCAnJyApO1xyXG5cdFx0XHRcdHdvcmsucHVzaCggJyAgICAgICAgICAgICAgICBodG1sID0gaHRtbC5yZXBsYWNlKC9cXHt0aXRsZVxcfS8sICEhb3B0cy50aXRsZSA/ICAoXCI8aDQ+XCIgKyBvcHRzLnRpdGxlICsgXCI8L2g0PlwiKSA6IFwiXCIgKTsnICk7XHJcblx0XHRcdFx0d29yay5wdXNoKCAnICAgICAgICAgICAgICAgIGh0bWwgPSBodG1sLnJlcGxhY2UoL1xce2Rlc2NyaXB0aW9uXFx9LywgISFvcHRzLmRlc2NyaXB0aW9uID8gIChcIjxwPlwiICsgb3B0cy5kZXNjcmlwdGlvbiArIFwiPC9wPlwiKSA6IFwiXCIgKTsnICk7XHJcblxyXG5cdFx0XHRcdHdvcmsucHVzaCggJyAgICAgICAgICAgICAgICB2YXIgaW5mb1dpbmRvdyA9IG5ldyBnb29nbGUubWFwcy5JbmZvV2luZG93KHsgY29udGVudDogaHRtbCB9KTsnICk7XHJcblxyXG5cdFx0XHRcdHdvcmsucHVzaCggJyAgICAgICAgICAgICAgICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lciggbWFya2VyLCBcXCdjbGlja1xcJywgZnVuY3Rpb24oKSB7JyApO1xyXG5cdFx0XHRcdHdvcmsucHVzaCggJyAgICAgICAgICAgICAgICBcdGlmICggaW5mb1dpbmRvdy5pc09wZW5lZCApIHsnICk7XHJcblx0XHRcdFx0d29yay5wdXNoKCAnICAgICAgICAgICAgICAgIFx0XHRpbmZvV2luZG93LmNsb3NlKCk7JyApO1xyXG5cdFx0XHRcdHdvcmsucHVzaCggJyAgICAgICAgICAgICAgICBcdFx0aW5mb1dpbmRvdy5pc09wZW5lZCA9IGZhbHNlOycgKTtcclxuXHRcdFx0XHR3b3JrLnB1c2goICcgICAgICAgICAgICAgICAgXHR9IGVsc2UgeycgKTtcclxuXHRcdFx0XHR3b3JrLnB1c2goICcgICAgICAgICAgICAgICAgXHRcdGluZm9XaW5kb3cub3BlbiggbWFwLCB0aGlzICk7JyApO1xyXG5cdFx0XHRcdHdvcmsucHVzaCggJyAgICAgICAgICAgICAgICBcdFx0aW5mb1dpbmRvdy5pc09wZW5lZCA9IHRydWU7JyApO1xyXG5cdFx0XHRcdHdvcmsucHVzaCggJyAgICAgICAgICAgICAgICBcdH0nICk7XHJcblx0XHRcdFx0d29yay5wdXNoKCAnICAgICAgICAgICAgICAgIH0pOycgKTtcclxuXHRcdFx0XHR3b3JrLnB1c2goICcgICAgICAgICAgICB9KSgpOycgKVxyXG5cdFx0XHRcdHdvcmsucHVzaCggJyAgICAgICAgfScpO1xyXG5cclxuXHRcdFx0XHRvdXRwdXQgPSBvdXRwdXQucmVwbGFjZSggL1xce2xvY2F0aW9uc1xcfS8sIHdvcmsuam9pbignXFxyXFxuJykgKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRvdXRwdXQgPSBvdXRwdXQucmVwbGFjZSggL1xce2xvY2F0aW9uc1xcfS8sICcnICk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGNvbnNvbGUubG9nKCBvdXRwdXQgKTtcclxuXHJcblx0XHRcdHJldHVybiBvdXRwdXQ7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Ly8gZXhwb3NlXHJcblx0JC5leHRlbmQoIHRydWUsIHRoZW1lLCB7XHJcblx0XHRNYXBzOiB7XHJcblx0XHRcdEdNYXBCdWlsZGVyOiBHTWFwQnVpbGRlclxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHQvLyBqUXVlcnkgcGx1Z2luXHJcblx0JC5mbi50aGVtZUdNYXBCdWlsZGVyID0gZnVuY3Rpb24oIG9wdHMgKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciAkdGhpcyA9ICQoIHRoaXMgKSxcclxuXHRcdFx0XHRpbnN0YW5jZTtcclxuXHJcblx0XHRcdGluc3RhbmNlID0gJHRoaXMuZGF0YSggaW5zdGFuY2VOYW1lICk7XHJcblxyXG5cdFx0XHRpZiAoIGluc3RhbmNlICkge1xyXG5cdFx0XHRcdHJldHVybiBpbnN0YW5jZTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gKG5ldyBHTWFwQnVpbGRlciggJHRoaXMsIG9wdHMgKSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdC8vIGF1dG8gaW5pdGlhbGl6ZVxyXG5cdCQoZnVuY3Rpb24oKSB7XHJcblx0XHQkKCdbZGF0YS10aGVtZS1nbWFwLWJ1aWxkZXJdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyICR0aGlzID0gJCggdGhpcyApO1xyXG5cclxuXHRcdFx0d2luZG93LmJ1aWxkZXIgPSAkdGhpcy50aGVtZUdNYXBCdWlsZGVyKCk7XHJcblx0XHR9KTtcclxuXHR9KTtcclxuXHJcbn0pLmFwcGx5KHRoaXMsIFt3aW5kb3cudGhlbWUsIGpRdWVyeV0pO1xyXG5cclxuLy8gTWFya2Rvd25cclxuKGZ1bmN0aW9uKHRoZW1lLCAkKSB7XHJcblxyXG5cdHRoZW1lID0gdGhlbWUgfHwge307XHJcblxyXG5cdHZhciBpbnN0YW5jZU5hbWUgPSAnX19tYXJrZG93bkVkaXRvcic7XHJcblxyXG5cdHZhciBQbHVnaW5NYXJrZG93bkVkaXRvciA9IGZ1bmN0aW9uKCRlbCwgb3B0cykge1xyXG5cdFx0cmV0dXJuIHRoaXMuaW5pdGlhbGl6ZSgkZWwsIG9wdHMpO1xyXG5cdH07XHJcblxyXG5cdFBsdWdpbk1hcmtkb3duRWRpdG9yLmRlZmF1bHRzID0ge1xyXG5cdFx0aWNvbmxpYnJhcnk6ICdmYScsXHJcblx0XHRidXR0b25zOiBbXHJcblx0XHRcdFt7XHJcblx0XHRcdFx0ZGF0YTogW3tcclxuXHRcdFx0XHRcdGljb246IHtcclxuXHRcdFx0XHRcdFx0ZmE6ICdmYSBmYS1ib2xkJ1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sIHtcclxuXHRcdFx0XHRcdGljb246IHtcclxuXHRcdFx0XHRcdFx0ZmE6ICdmYSBmYS1pdGFsaWMnXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSwge1xyXG5cdFx0XHRcdFx0aWNvbjoge1xyXG5cdFx0XHRcdFx0XHRmYTogJ2ZhIGZhLWhlYWRpbmcnXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fV1cclxuXHRcdFx0fSwge1xyXG5cdFx0XHRcdGRhdGE6IFt7XHJcblx0XHRcdFx0XHRpY29uOiB7XHJcblx0XHRcdFx0XHRcdGZhOiAnZmEgZmEtbGluaydcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LCB7XHJcblx0XHRcdFx0XHRpY29uOiB7XHJcblx0XHRcdFx0XHRcdGZhOiAnZmEgZmEtaW1hZ2UnXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fV1cclxuXHRcdFx0fSwge1xyXG5cdFx0XHRcdGRhdGE6IFt7XHJcblx0XHRcdFx0XHRcdGljb246IHtcclxuXHRcdFx0XHRcdFx0XHRmYTogJ2ZhIGZhLWxpc3QnXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGljb246IHtcclxuXHRcdFx0XHRcdFx0XHRmYTogJ2ZhIGZhLWxpc3Qtb2wnXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGljb246IHtcclxuXHRcdFx0XHRcdFx0XHRmYTogJ2ZhIGZhLWNvZGUnXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGljb246IHtcclxuXHRcdFx0XHRcdFx0XHRmYTogJ2ZhIGZhLXF1b3RlLWxlZnQnXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRdXHJcblx0XHRcdH0sIHtcclxuXHRcdFx0XHRkYXRhOiBbe1xyXG5cdFx0XHRcdFx0aWNvbjoge1xyXG5cdFx0XHRcdFx0XHRmYTogJ2ZhIGZhLXNlYXJjaCdcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XVxyXG5cdFx0XHR9XVxyXG5cdFx0XVxyXG5cdH07XHJcblxyXG5cdFBsdWdpbk1hcmtkb3duRWRpdG9yLnByb3RvdHlwZSA9IHtcclxuXHRcdGluaXRpYWxpemU6IGZ1bmN0aW9uKCRlbCwgb3B0cykge1xyXG5cdFx0XHRpZiAoICRlbC5kYXRhKCBpbnN0YW5jZU5hbWUgKSApIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy4kZWwgPSAkZWw7XHJcblxyXG5cdFx0XHR0aGlzXHJcblx0XHRcdFx0LnNldERhdGEoKVxyXG5cdFx0XHRcdC5zZXRPcHRpb25zKG9wdHMpXHJcblx0XHRcdFx0LmJ1aWxkKCk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0c2V0RGF0YTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMuJGVsLmRhdGEoaW5zdGFuY2VOYW1lLCB0aGlzKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzZXRPcHRpb25zOiBmdW5jdGlvbihvcHRzKSB7XHJcblx0XHRcdHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKCB0cnVlLCB7fSwgUGx1Z2luTWFya2Rvd25FZGl0b3IuZGVmYXVsdHMsIG9wdHMgKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRidWlsZDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMuJGVsLm1hcmtkb3duKCB0aGlzLm9wdGlvbnMgKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8vIGV4cG9zZSB0byBzY29wZVxyXG5cdCQuZXh0ZW5kKHRoZW1lLCB7XHJcblx0XHRQbHVnaW5NYXJrZG93bkVkaXRvcjogUGx1Z2luTWFya2Rvd25FZGl0b3JcclxuXHR9KTtcclxuXHJcblx0Ly8ganF1ZXJ5IHBsdWdpblxyXG5cdCQuZm4udGhlbWVQbHVnaW5NYXJrZG93bkVkaXRvciA9IGZ1bmN0aW9uKG9wdHMpIHtcclxuXHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblxyXG5cdFx0XHRpZiAoJHRoaXMuZGF0YShpbnN0YW5jZU5hbWUpKSB7XHJcblx0XHRcdFx0cmV0dXJuICR0aGlzLmRhdGEoaW5zdGFuY2VOYW1lKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gbmV3IFBsdWdpbk1hcmtkb3duRWRpdG9yKCR0aGlzLCBvcHRzKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcbn0pLmFwcGx5KHRoaXMsIFt3aW5kb3cudGhlbWUsIGpRdWVyeV0pO1xyXG5cclxuLy8gTWFza2VkIElucHV0XHJcbihmdW5jdGlvbih0aGVtZSwgJCkge1xyXG5cclxuXHR0aGVtZSA9IHRoZW1lIHx8IHt9O1xyXG5cclxuXHR2YXIgaW5zdGFuY2VOYW1lID0gJ19fbWFza2VkSW5wdXQnO1xyXG5cclxuXHR2YXIgUGx1Z2luTWFza2VkSW5wdXQgPSBmdW5jdGlvbigkZWwsIG9wdHMpIHtcclxuXHRcdHJldHVybiB0aGlzLmluaXRpYWxpemUoJGVsLCBvcHRzKTtcclxuXHR9O1xyXG5cclxuXHRQbHVnaW5NYXNrZWRJbnB1dC5kZWZhdWx0cyA9IHtcclxuXHR9O1xyXG5cclxuXHRQbHVnaW5NYXNrZWRJbnB1dC5wcm90b3R5cGUgPSB7XHJcblx0XHRpbml0aWFsaXplOiBmdW5jdGlvbigkZWwsIG9wdHMpIHtcclxuXHRcdFx0aWYgKCAkZWwuZGF0YSggaW5zdGFuY2VOYW1lICkgKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuJGVsID0gJGVsO1xyXG5cclxuXHRcdFx0dGhpc1xyXG5cdFx0XHRcdC5zZXREYXRhKClcclxuXHRcdFx0XHQuc2V0T3B0aW9ucyhvcHRzKVxyXG5cdFx0XHRcdC5idWlsZCgpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdHNldERhdGE6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLiRlbC5kYXRhKGluc3RhbmNlTmFtZSwgdGhpcyk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0c2V0T3B0aW9uczogZnVuY3Rpb24ob3B0cykge1xyXG5cdFx0XHR0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCggdHJ1ZSwge30sIFBsdWdpbk1hc2tlZElucHV0LmRlZmF1bHRzLCBvcHRzICk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0YnVpbGQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLiRlbC5tYXNrKCB0aGlzLiRlbC5kYXRhKCdpbnB1dC1tYXNrJyksIHRoaXMub3B0aW9ucyApO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Ly8gZXhwb3NlIHRvIHNjb3BlXHJcblx0JC5leHRlbmQodGhlbWUsIHtcclxuXHRcdFBsdWdpbk1hc2tlZElucHV0OiBQbHVnaW5NYXNrZWRJbnB1dFxyXG5cdH0pO1xyXG5cclxuXHQvLyBqcXVlcnkgcGx1Z2luXHJcblx0JC5mbi50aGVtZVBsdWdpbk1hc2tlZElucHV0ID0gZnVuY3Rpb24ob3B0cykge1xyXG5cdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcblx0XHRcdGlmICgkdGhpcy5kYXRhKGluc3RhbmNlTmFtZSkpIHtcclxuXHRcdFx0XHRyZXR1cm4gJHRoaXMuZGF0YShpbnN0YW5jZU5hbWUpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiBuZXcgUGx1Z2luTWFza2VkSW5wdXQoJHRoaXMsIG9wdHMpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxufSkuYXBwbHkodGhpcywgW3dpbmRvdy50aGVtZSwgalF1ZXJ5XSk7XHJcblxyXG4vLyBNYXhMZW5ndGhcclxuKGZ1bmN0aW9uKHRoZW1lLCAkKSB7XHJcblxyXG5cdHRoZW1lID0gdGhlbWUgfHwge307XHJcblxyXG5cdHZhciBpbnN0YW5jZU5hbWUgPSAnX19tYXhsZW5ndGgnO1xyXG5cclxuXHR2YXIgUGx1Z2luTWF4TGVuZ3RoID0gZnVuY3Rpb24oJGVsLCBvcHRzKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5pbml0aWFsaXplKCRlbCwgb3B0cyk7XHJcblx0fTtcclxuXHJcblx0UGx1Z2luTWF4TGVuZ3RoLmRlZmF1bHRzID0ge1xyXG5cdFx0YWx3YXlzU2hvdzogdHJ1ZSxcclxuXHRcdHBsYWNlbWVudDogJ2JvdHRvbS1sZWZ0JyxcclxuXHRcdHdhcm5pbmdDbGFzczogJ2JhZGdlIGJhZGdlLXN1Y2Nlc3MgYm90dG9tLWxlZnQnLFxyXG5cdFx0bGltaXRSZWFjaGVkQ2xhc3M6ICdiYWRnZSBiYWRnZS1kYW5nZXIgYm90dG9tLWxlZnQnXHJcblx0fTtcclxuXHJcblx0UGx1Z2luTWF4TGVuZ3RoLnByb3RvdHlwZSA9IHtcclxuXHRcdGluaXRpYWxpemU6IGZ1bmN0aW9uKCRlbCwgb3B0cykge1xyXG5cdFx0XHRpZiAoICRlbC5kYXRhKCBpbnN0YW5jZU5hbWUgKSApIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy4kZWwgPSAkZWw7XHJcblxyXG5cdFx0XHR0aGlzXHJcblx0XHRcdFx0LnNldERhdGEoKVxyXG5cdFx0XHRcdC5zZXRPcHRpb25zKG9wdHMpXHJcblx0XHRcdFx0LmJ1aWxkKCk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0c2V0RGF0YTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMuJGVsLmRhdGEoaW5zdGFuY2VOYW1lLCB0aGlzKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzZXRPcHRpb25zOiBmdW5jdGlvbihvcHRzKSB7XHJcblx0XHRcdHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKCB0cnVlLCB7fSwgUGx1Z2luTWF4TGVuZ3RoLmRlZmF1bHRzLCBvcHRzICk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0YnVpbGQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLiRlbC5tYXhsZW5ndGgoIHRoaXMub3B0aW9ucyApO1xyXG5cclxuXHRcdFx0dGhpcy4kZWwub24oJ2JsdXInLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHQkKCcuYm9vdHN0cmFwLW1heGxlbmd0aCcpLnJlbW92ZSgpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8vIGV4cG9zZSB0byBzY29wZVxyXG5cdCQuZXh0ZW5kKHRoZW1lLCB7XHJcblx0XHRQbHVnaW5NYXhMZW5ndGg6IFBsdWdpbk1heExlbmd0aFxyXG5cdH0pO1xyXG5cclxuXHQvLyBqcXVlcnkgcGx1Z2luXHJcblx0JC5mbi50aGVtZVBsdWdpbk1heExlbmd0aCA9IGZ1bmN0aW9uKG9wdHMpIHtcclxuXHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblxyXG5cdFx0XHRpZiAoJHRoaXMuZGF0YShpbnN0YW5jZU5hbWUpKSB7XHJcblx0XHRcdFx0cmV0dXJuICR0aGlzLmRhdGEoaW5zdGFuY2VOYW1lKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gbmV3IFBsdWdpbk1heExlbmd0aCgkdGhpcywgb3B0cyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG59KS5hcHBseSh0aGlzLCBbd2luZG93LnRoZW1lLCBqUXVlcnldKTtcclxuXHJcbi8vIE11bHRpU2VsZWN0XHJcbihmdW5jdGlvbih0aGVtZSwgJCkge1xyXG5cclxuXHR0aGVtZSA9IHRoZW1lIHx8IHt9O1xyXG5cclxuXHR2YXIgaW5zdGFuY2VOYW1lID0gJ19fbXVsdGlzZWxlY3QnO1xyXG5cclxuXHR2YXIgUGx1Z2luTXVsdGlTZWxlY3QgPSBmdW5jdGlvbigkZWwsIG9wdHMpIHtcclxuXHRcdHJldHVybiB0aGlzLmluaXRpYWxpemUoJGVsLCBvcHRzKTtcclxuXHR9O1xyXG5cclxuXHRQbHVnaW5NdWx0aVNlbGVjdC5kZWZhdWx0cyA9IHtcclxuXHRcdHRlbXBsYXRlczoge1xyXG5cdFx0XHRsaTogJzxsaT48YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiB0YWJpbmRleD1cIjBcIj48bGFiZWwgc3R5bGU9XCJkaXNwbGF5OiBibG9jaztcIj48L2xhYmVsPjwvYT48L2xpPicsXHJcblx0XHRcdGZpbHRlcjogJzxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPjxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPjxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPjxpIGNsYXNzPVwiZmFzIGZhLXNlYXJjaFwiPjwvaT48L3NwYW4+PC9zcGFuPjxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbCBtdWx0aXNlbGVjdC1zZWFyY2hcIiB0eXBlPVwidGV4dFwiPjwvZGl2PidcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRQbHVnaW5NdWx0aVNlbGVjdC5wcm90b3R5cGUgPSB7XHJcblx0XHRpbml0aWFsaXplOiBmdW5jdGlvbigkZWwsIG9wdHMpIHtcclxuXHRcdFx0aWYgKCAkZWwuZGF0YSggaW5zdGFuY2VOYW1lICkgKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuJGVsID0gJGVsO1xyXG5cclxuXHRcdFx0dGhpc1xyXG5cdFx0XHRcdC5zZXREYXRhKClcclxuXHRcdFx0XHQuc2V0T3B0aW9ucyhvcHRzKVxyXG5cdFx0XHRcdC5idWlsZCgpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdHNldERhdGE6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLiRlbC5kYXRhKGluc3RhbmNlTmFtZSwgdGhpcyk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0c2V0T3B0aW9uczogZnVuY3Rpb24ob3B0cykge1xyXG5cdFx0XHR0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCggdHJ1ZSwge30sIFBsdWdpbk11bHRpU2VsZWN0LmRlZmF1bHRzLCBvcHRzICk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0YnVpbGQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLiRlbC5tdWx0aXNlbGVjdCggdGhpcy5vcHRpb25zICk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHQvLyBleHBvc2UgdG8gc2NvcGVcclxuXHQkLmV4dGVuZCh0aGVtZSwge1xyXG5cdFx0UGx1Z2luTXVsdGlTZWxlY3Q6IFBsdWdpbk11bHRpU2VsZWN0XHJcblx0fSk7XHJcblxyXG5cdC8vIGpxdWVyeSBwbHVnaW5cclxuXHQkLmZuLnRoZW1lUGx1Z2luTXVsdGlTZWxlY3QgPSBmdW5jdGlvbihvcHRzKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG5cclxuXHRcdFx0aWYgKCR0aGlzLmRhdGEoaW5zdGFuY2VOYW1lKSkge1xyXG5cdFx0XHRcdHJldHVybiAkdGhpcy5kYXRhKGluc3RhbmNlTmFtZSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBQbHVnaW5NdWx0aVNlbGVjdCgkdGhpcywgb3B0cyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG59KS5hcHBseSh0aGlzLCBbd2luZG93LnRoZW1lLCBqUXVlcnldKTtcclxuXHJcbi8vIE5vdGlmaWNhdGlvbnMgLSBDb25maWdcclxuKGZ1bmN0aW9uKCQpIHtcclxuXHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cclxuXHQvLyB1c2UgZm9udCBhd2Vzb21lIGljb25zIGlmIGF2YWlsYWJsZVxyXG5cdGlmICggdHlwZW9mIFBOb3RpZnkgIT0gJ3VuZGVmaW5lZCcgKSB7XHJcblx0XHRQTm90aWZ5LnByb3RvdHlwZS5vcHRpb25zLnN0eWxpbmcgPSBcImZvbnRhd2Vzb21lXCI7XHJcblxyXG5cdFx0JC5leHRlbmQodHJ1ZSwgUE5vdGlmeS5wcm90b3R5cGUub3B0aW9ucywge1xyXG5cdFx0XHRzaGFkb3c6IGZhbHNlLFxyXG5cdFx0XHRzdGFjazoge1xyXG5cdFx0XHRcdHNwYWNpbmcxOiAxNSxcclxuXHQgICAgICAgIFx0c3BhY2luZzI6IDE1XHJcbiAgICAgICAgXHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHQkLmV4dGVuZChQTm90aWZ5LnN0eWxpbmcuZm9udGF3ZXNvbWUsIHtcclxuXHRcdFx0Ly8gY2xhc3Nlc1xyXG5cdFx0XHRjb250YWluZXI6IFwibm90aWZpY2F0aW9uXCIsXHJcblx0XHRcdG5vdGljZTogXCJub3RpZmljYXRpb24td2FybmluZ1wiLFxyXG5cdFx0XHRpbmZvOiBcIm5vdGlmaWNhdGlvbi1pbmZvXCIsXHJcblx0XHRcdHN1Y2Nlc3M6IFwibm90aWZpY2F0aW9uLXN1Y2Nlc3NcIixcclxuXHRcdFx0ZXJyb3I6IFwibm90aWZpY2F0aW9uLWRhbmdlclwiLFxyXG5cclxuXHRcdFx0Ly8gaWNvbnNcclxuXHRcdFx0bm90aWNlX2ljb246IFwiZmFzIGZhLWV4Y2xhbWF0aW9uXCIsXHJcblx0XHRcdGluZm9faWNvbjogXCJmYXMgZmEtaW5mb1wiLFxyXG5cdFx0XHRzdWNjZXNzX2ljb246IFwiZmFzIGZhLWNoZWNrXCIsXHJcblx0XHRcdGVycm9yX2ljb246IFwiZmFzIGZhLXRpbWVzXCJcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcbn0pLmFwcGx5KHRoaXMsIFtqUXVlcnldKTtcclxuXHJcbi8vIFBvcnRsZXRzXHJcbihmdW5jdGlvbih0aGVtZSwgJCkge1xyXG5cclxuXHR0aGVtZSA9IHRoZW1lIHx8IHt9O1xyXG5cclxuXHR2YXIgaW5zdGFuY2VOYW1lID0gJ19fcG9ydGxldCcsXHJcblx0XHRzdG9yYWdlT3JkZXJLZXkgPSAnX19wb3J0bGV0T3JkZXInLFxyXG5cdFx0c3RvcmFnZVN0YXRlS2V5ID0gJ19fcG9ydGxldFN0YXRlJztcclxuXHJcblx0dmFyIFBsdWdpblBvcnRsZXQgPSBmdW5jdGlvbigkZWwsIG9wdHMpIHtcclxuXHRcdHJldHVybiB0aGlzLmluaXRpYWxpemUoJGVsLCBvcHRzKTtcclxuXHR9O1xyXG5cclxuXHRQbHVnaW5Qb3J0bGV0LmRlZmF1bHRzID0ge1xyXG5cdFx0Y29ubmVjdFdpdGg6ICdbZGF0YS1wbHVnaW4tcG9ydGxldF0nLFxyXG5cdFx0aXRlbXM6ICdbZGF0YS1wb3J0bGV0LWl0ZW1dJyxcclxuXHRcdGhhbmRsZTogJy5wb3J0bGV0LWhhbmRsZXInLFxyXG5cdFx0b3BhY2l0eTogMC43LFxyXG5cdFx0cGxhY2Vob2xkZXI6ICdwb3J0bGV0LXBsYWNlaG9sZGVyJyxcclxuXHRcdGNhbmNlbDogJ3BvcnRsZXQtY2FuY2VsJyxcclxuXHRcdGZvcmNlUGxhY2Vob2xkZXJTaXplOiB0cnVlLFxyXG5cdFx0Zm9yY2VIZWxwZXJTaXplOiB0cnVlLFxyXG5cdFx0dG9sZXJhbmNlOiAncG9pbnRlcicsXHJcblx0XHRoZWxwZXI6ICdvcmlnaW5hbCcsXHJcblx0XHRyZXZlcnQ6IDIwMFxyXG5cdH07XHJcblxyXG5cdFBsdWdpblBvcnRsZXQucHJvdG90eXBlID0ge1xyXG5cdFx0aW5pdGlhbGl6ZTogZnVuY3Rpb24oJGVsLCBvcHRzKSB7XHJcblx0XHRcdGlmICggJGVsLmRhdGEoIGluc3RhbmNlTmFtZSApICkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLiRlbCA9ICRlbDtcclxuXHJcblx0XHRcdHRoaXNcclxuXHRcdFx0XHQuc2V0RGF0YSgpXHJcblx0XHRcdFx0LnNldE9wdGlvbnMob3B0cylcclxuXHRcdFx0XHQuYnVpbGQoKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzZXREYXRhOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy4kZWwuZGF0YShpbnN0YW5jZU5hbWUsIHRoaXMpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdHNldE9wdGlvbnM6IGZ1bmN0aW9uKG9wdHMpIHtcclxuXHRcdFx0dmFyIF9zZWxmID0gdGhpcztcclxuXHJcblx0XHRcdHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHRydWUsIHt9LCBQbHVnaW5Qb3J0bGV0LmRlZmF1bHRzLCBvcHRzLCB7XHJcblx0XHRcdFx0d3JhcHBlcjogdGhpcy4kZWwsXHJcblx0XHRcdFx0dXBkYXRlOiBfc2VsZi5vblVwZGF0ZSxcclxuXHRcdFx0XHRjcmVhdGU6IF9zZWxmLm9uTG9hZFxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRvblVwZGF0ZTogZnVuY3Rpb24oZXZlbnQsIHVpKSB7XHJcblx0XHRcdHZhciBrZXkgPSBzdG9yYWdlT3JkZXJLZXksXHJcblx0XHRcdFx0ZGF0YSA9IHN0b3JlLmdldChrZXkpLFxyXG5cdFx0XHRcdCR0aGlzID0gJCh0aGlzKSxcclxuXHRcdFx0XHRwb3JsZXRJZCA9ICR0aGlzLnByb3AoJ2lkJyk7XHJcblxyXG5cdFx0XHRpZiAoIWRhdGEpIHtcclxuXHRcdFx0XHRkYXRhID0ge307XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICghIXBvcmxldElkKSB7XHJcblx0XHRcdFx0ZGF0YVtwb3JsZXRJZF0gPSAkdGhpcy5zb3J0YWJsZSgndG9BcnJheScpO1xyXG5cdFx0XHRcdHN0b3JlLnNldChrZXksIGRhdGEpO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdG9uTG9hZDogZnVuY3Rpb24oZXZlbnQsIHVpKSB7XHJcblx0XHRcdHZhciBrZXkgPSBzdG9yYWdlT3JkZXJLZXksXHJcblx0XHRcdFx0ZGF0YSA9IHN0b3JlLmdldChrZXkpLFxyXG5cdFx0XHRcdCR0aGlzID0gJCh0aGlzKSxcclxuXHRcdFx0XHRwb3JsZXRJZCA9ICR0aGlzLnByb3AoJ2lkJyksXHJcblx0XHRcdFx0cG9ydGxldCA9ICQoJyMnICsgcG9ybGV0SWQpO1xyXG5cclxuXHRcdFx0aWYgKCEhZGF0YSkge1xyXG5cdFx0XHRcdHZhciBjYXJkcyA9IGRhdGFbcG9ybGV0SWRdO1xyXG5cclxuXHRcdFx0XHRpZiAoISFjYXJkcykge1xyXG5cdFx0XHRcdFx0JC5lYWNoKGNhcmRzLCBmdW5jdGlvbihpbmRleCwgcGFuZWxJZCkge1xyXG5cdFx0XHRcdFx0XHQkKCcjJyArIHBhbmVsSWQpLmFwcGVuZFRvKHBvcnRsZXQpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdHNhdmVTdGF0ZTogZnVuY3Rpb24oIHBhbmVsICkge1xyXG5cdFx0XHR2YXIga2V5ID0gc3RvcmFnZVN0YXRlS2V5LFxyXG5cdFx0XHRcdGRhdGEgPSBzdG9yZS5nZXQoa2V5KSxcclxuXHRcdFx0XHRwYW5lbElkID0gcGFuZWwucHJvcCgnaWQnKTtcclxuXHJcblx0XHRcdGlmICghZGF0YSkge1xyXG5cdFx0XHRcdGRhdGEgPSB7fTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCFwYW5lbElkKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHZhciBjb2xsYXBzZSA9IHBhbmVsLmZpbmQoJy5jYXJkLWFjdGlvbnMnKS5jaGlsZHJlbignYS5mYS1jYXJldC11cCwgYS5mYS1jYXJldC1kb3duJyksXHJcblx0XHRcdFx0aXNDb2xsYXBzZWQgPSAhIWNvbGxhcHNlLmhhc0NsYXNzKCdmYS1jYXJldC11cCcpLFxyXG5cdFx0XHRcdGlzUmVtb3ZlZCA9ICFwYW5lbC5jbG9zZXN0KCdib2R5JykuZ2V0KDApO1xyXG5cclxuXHRcdFx0aWYgKGlzUmVtb3ZlZCkge1xyXG5cdFx0XHRcdGRhdGFbcGFuZWxJZF0gPSAncmVtb3ZlZCc7XHJcblx0XHRcdH0gZWxzZSBpZiAoaXNDb2xsYXBzZWQpIHtcclxuXHRcdFx0XHRkYXRhW3BhbmVsSWRdID0gJ2NvbGxhcHNlZCc7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0ZGVsZXRlIGRhdGFbcGFuZWxJZF07XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHN0b3JlLnNldChrZXksIGRhdGEpO1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0bG9hZFN0YXRlOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIGtleSA9IHN0b3JhZ2VTdGF0ZUtleSxcclxuXHRcdFx0XHRkYXRhID0gc3RvcmUuZ2V0KGtleSk7XHJcblxyXG5cdFx0XHRpZiAoISFkYXRhKSB7XHJcblx0XHRcdFx0JC5lYWNoKGRhdGEsIGZ1bmN0aW9uKHBhbmVsSWQsIHN0YXRlKSB7XHJcblx0XHRcdFx0XHR2YXIgcGFuZWwgPSAkKCcjJyArIHBhbmVsSWQpO1xyXG5cdFx0XHRcdFx0aWYgKCFwYW5lbC5kYXRhKCdwb3J0bGV0LXN0YXRlLWxvYWRlZCcpKSB7XHJcblx0XHRcdFx0XHRcdGlmIChzdGF0ZSA9PSAnY29sbGFwc2VkJykge1xyXG5cdFx0XHRcdFx0XHRcdHBhbmVsLmZpbmQoJy5jYXJkLWFjdGlvbnMgYS5mYS1jYXJldC1kb3duJykudHJpZ2dlcignY2xpY2snKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChzdGF0ZSA9PSAncmVtb3ZlZCcpIHtcclxuXHRcdFx0XHRcdFx0XHRwYW5lbC5maW5kKCcuY2FyZC1hY3Rpb25zIGEuZmEtdGltZXMnKS50cmlnZ2VyKCdjbGljaycpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHBhbmVsLmRhdGEoJ3BvcnRsZXQtc3RhdGUtbG9hZGVkJywgdHJ1ZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRidWlsZDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBfc2VsZiA9IHRoaXM7XHJcblxyXG5cdFx0XHRpZiAoICQuaXNGdW5jdGlvbiggJC5mbi5zb3J0YWJsZSApICkge1xyXG5cdFx0XHRcdHRoaXMuJGVsLnNvcnRhYmxlKCB0aGlzLm9wdGlvbnMgKTtcclxuXHRcdFx0XHR0aGlzLiRlbC5maW5kKCdbZGF0YS1wb3J0bGV0LWl0ZW1dJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdF9zZWxmLmV2ZW50cyggJCh0aGlzKSApO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR2YXIgcG9ydGxldCA9IHRoaXMuJGVsO1xyXG5cdFx0XHRwb3J0bGV0LmNzcygnbWluLWhlaWdodCcsIDE1MCk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0ZXZlbnRzOiBmdW5jdGlvbigkZWwpIHtcclxuXHRcdFx0dmFyIF9zZWxmID0gdGhpcyxcclxuXHRcdFx0XHRwb3J0bGV0ID0gJGVsLmNsb3Nlc3QoJ1tkYXRhLXBsdWdpbi1wb3J0bGV0XScpO1xyXG5cclxuXHRcdFx0dGhpcy5sb2FkU3RhdGUoKTtcclxuXHJcblx0XHRcdCRlbC5maW5kKCcuY2FyZC1hY3Rpb25zJykub24oICdjbGljaycsICdhLmZhLWNhcmV0LXVwLCBhLmZhLWNhcmV0LWRvd24sIGEuZmEtdGltZXMnLCBmdW5jdGlvbiggZSApIHtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0X3NlbGYuc2F2ZVN0YXRlKCAkZWwgKTtcclxuXHRcdFx0XHR9LCAyNTApO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8vIGV4cG9zZSB0byBzY29wZVxyXG5cdCQuZXh0ZW5kKHRoZW1lLCB7XHJcblx0XHRQbHVnaW5Qb3J0bGV0OiBQbHVnaW5Qb3J0bGV0XHJcblx0fSk7XHJcblxyXG5cdC8vIGpxdWVyeSBwbHVnaW5cclxuXHQkLmZuLnRoZW1lUGx1Z2luUG9ydGxldCA9IGZ1bmN0aW9uKG9wdHMpIHtcclxuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcblx0XHRcdGlmICgkdGhpcy5kYXRhKGluc3RhbmNlTmFtZSkpIHtcclxuXHRcdFx0XHRyZXR1cm4gJHRoaXMuZGF0YShpbnN0YW5jZU5hbWUpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiBuZXcgUGx1Z2luUG9ydGxldCgkdGhpcywgb3B0cyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG59KS5hcHBseSh0aGlzLCBbd2luZG93LnRoZW1lLCBqUXVlcnldKTtcclxuXHJcbi8vIFNjcm9sbCB0byBUb3BcclxuKGZ1bmN0aW9uKHRoZW1lLCAkKSB7XHJcblxyXG5cdHRoZW1lID0gdGhlbWUgfHwge307XHJcblxyXG5cdCQuZXh0ZW5kKHRoZW1lLCB7XHJcblxyXG5cdFx0UGx1Z2luU2Nyb2xsVG9Ub3A6IHtcclxuXHJcblx0XHRcdGRlZmF1bHRzOiB7XHJcblx0XHRcdFx0d3JhcHBlcjogJCgnYm9keScpLFxyXG5cdFx0XHRcdG9mZnNldDogMTUwLFxyXG5cdFx0XHRcdGJ1dHRvbkNsYXNzOiAnc2Nyb2xsLXRvLXRvcCcsXHJcblx0XHRcdFx0aWNvbkNsYXNzOiAnZmFzIGZhLWNoZXZyb24tdXAnLFxyXG5cdFx0XHRcdGRlbGF5OiA1MDAsXHJcblx0XHRcdFx0dmlzaWJsZU1vYmlsZTogZmFsc2UsXHJcblx0XHRcdFx0bGFiZWw6IGZhbHNlXHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRpbml0aWFsaXplOiBmdW5jdGlvbihvcHRzKSB7XHJcblx0XHRcdFx0aW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG5cclxuXHRcdFx0XHR0aGlzXHJcblx0XHRcdFx0XHQuc2V0T3B0aW9ucyhvcHRzKVxyXG5cdFx0XHRcdFx0LmJ1aWxkKClcclxuXHRcdFx0XHRcdC5ldmVudHMoKTtcclxuXHJcblx0XHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRzZXRPcHRpb25zOiBmdW5jdGlvbihvcHRzKSB7XHJcblx0XHRcdFx0dGhpcy5vcHRpb25zID0gJC5leHRlbmQodHJ1ZSwge30sIHRoaXMuZGVmYXVsdHMsIG9wdHMpO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdGJ1aWxkOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR2YXIgc2VsZiA9IHRoaXMsXHJcblx0XHRcdFx0XHQkZWw7XHJcblxyXG5cdFx0XHRcdC8vIEJhc2UgSFRNTCBNYXJrdXBcclxuXHRcdFx0XHQkZWwgPSAkKCc8YSAvPicpXHJcblx0XHRcdFx0XHQuYWRkQ2xhc3Moc2VsZi5vcHRpb25zLmJ1dHRvbkNsYXNzKVxyXG5cdFx0XHRcdFx0LmF0dHIoe1xyXG5cdFx0XHRcdFx0XHQnaHJlZic6ICcjJyxcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQuYXBwZW5kKFxyXG5cdFx0XHRcdFx0XHQkKCc8aSAvPicpXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcyhzZWxmLm9wdGlvbnMuaWNvbkNsYXNzKVxyXG5cdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdC8vIFZpc2libGUgTW9iaWxlXHJcblx0XHRcdFx0aWYgKCFzZWxmLm9wdGlvbnMudmlzaWJsZU1vYmlsZSkge1xyXG5cdFx0XHRcdFx0JGVsLmFkZENsYXNzKCdoaWRkZW4tbW9iaWxlJyk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyBMYWJlbFxyXG5cdFx0XHRcdGlmIChzZWxmLm9wdGlvbnMubGFiZWwpIHtcclxuXHRcdFx0XHRcdCRlbC5hcHBlbmQoXHJcblx0XHRcdFx0XHRcdCQoJzxzcGFuIC8+JykuaHRtbChzZWxmLm9wdGlvbnMubGFiZWwpXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dGhpcy5vcHRpb25zLndyYXBwZXIuYXBwZW5kKCRlbCk7XHJcblxyXG5cdFx0XHRcdHRoaXMuJGVsID0gJGVsO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdGV2ZW50czogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dmFyIHNlbGYgPSB0aGlzLFxyXG5cdFx0XHRcdFx0X2lzU2Nyb2xsaW5nID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdC8vIENsaWNrIEVsZW1lbnQgQWN0aW9uXHJcblx0XHRcdFx0c2VsZi4kZWwub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdFx0JCgnYm9keSwgaHRtbCcpLmFuaW1hdGUoe1xyXG5cdFx0XHRcdFx0XHRzY3JvbGxUb3A6IDBcclxuXHRcdFx0XHRcdH0sIHNlbGYub3B0aW9ucy5kZWxheSk7XHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdC8vIFNob3cvSGlkZSBCdXR0b24gb24gV2luZG93IFNjcm9sbCBldmVudC5cclxuXHRcdFx0XHQkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdFx0XHRcdGlmICghX2lzU2Nyb2xsaW5nKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRfaXNTY3JvbGxpbmcgPSB0cnVlO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKCQod2luZG93KS5zY3JvbGxUb3AoKSA+IHNlbGYub3B0aW9ucy5vZmZzZXQpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0c2VsZi4kZWwuc3RvcCh0cnVlLCB0cnVlKS5hZGRDbGFzcygndmlzaWJsZScpO1xyXG5cdFx0XHRcdFx0XHRcdF9pc1Njcm9sbGluZyA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0c2VsZi4kZWwuc3RvcCh0cnVlLCB0cnVlKS5yZW1vdmVDbGFzcygndmlzaWJsZScpO1xyXG5cdFx0XHRcdFx0XHRcdF9pc1Njcm9sbGluZyA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcbn0pLmFwcGx5KHRoaXMsIFt3aW5kb3cudGhlbWUsIGpRdWVyeV0pO1xyXG5cclxuLy8gU2Nyb2xsYWJsZVxyXG4oZnVuY3Rpb24odGhlbWUsICQpIHtcclxuXHJcblx0dGhlbWUgPSB0aGVtZSB8fCB7fTtcclxuXHJcblx0dmFyIGluc3RhbmNlTmFtZSA9ICdfX3Njcm9sbGFibGUnO1xyXG5cclxuXHR2YXIgUGx1Z2luU2Nyb2xsYWJsZSA9IGZ1bmN0aW9uKCRlbCwgb3B0cykge1xyXG5cdFx0cmV0dXJuIHRoaXMuaW5pdGlhbGl6ZSgkZWwsIG9wdHMpO1xyXG5cdH07XHJcblxyXG5cdFBsdWdpblNjcm9sbGFibGUudXBkYXRlTW9kYWxzID0gZnVuY3Rpb24oKSB7XHJcblx0XHRQbHVnaW5TY3JvbGxhYmxlLnVwZGF0ZUJvb3RzdHJhcE1vZGFsKCk7XHJcblx0fTtcclxuXHJcblx0UGx1Z2luU2Nyb2xsYWJsZS51cGRhdGVCb290c3RyYXBNb2RhbCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIHVwZGF0ZUJvb3N0cmFwTW9kYWw7XHJcblxyXG5cdFx0dXBkYXRlQm9vc3RyYXBNb2RhbCA9IHR5cGVvZiAkLmZuLm1vZGFsICE9PSAndW5kZWZpbmVkJztcclxuXHRcdHVwZGF0ZUJvb3N0cmFwTW9kYWwgPSB1cGRhdGVCb29zdHJhcE1vZGFsICYmIHR5cGVvZiAkLmZuLm1vZGFsLkNvbnN0cnVjdG9yICE9PSAndW5kZWZpbmVkJztcclxuXHRcdHVwZGF0ZUJvb3N0cmFwTW9kYWwgPSB1cGRhdGVCb29zdHJhcE1vZGFsICYmIHR5cGVvZiAkLmZuLm1vZGFsLkNvbnN0cnVjdG9yLnByb3RvdHlwZSAhPT0gJ3VuZGVmaW5lZCc7XHJcblx0XHR1cGRhdGVCb29zdHJhcE1vZGFsID0gdXBkYXRlQm9vc3RyYXBNb2RhbCAmJiB0eXBlb2YgJC5mbi5tb2RhbC5Db25zdHJ1Y3Rvci5wcm90b3R5cGUuZW5mb3JjZUZvY3VzICE9PSAndW5kZWZpbmVkJztcclxuXHJcblx0XHRpZiAoICF1cGRhdGVCb29zdHJhcE1vZGFsICkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIG9yaWdpbmFsRm9jdXMgPSAkLmZuLm1vZGFsLkNvbnN0cnVjdG9yLnByb3RvdHlwZS5lbmZvcmNlRm9jdXM7XHJcblx0XHQkLmZuLm1vZGFsLkNvbnN0cnVjdG9yLnByb3RvdHlwZS5lbmZvcmNlRm9jdXMgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0b3JpZ2luYWxGb2N1cy5hcHBseSggdGhpcyApO1xyXG5cclxuXHRcdFx0dmFyICRzY3JvbGxhYmxlID0gdGhpcy4kZWxlbWVudC5maW5kKCcuc2Nyb2xsYWJsZScpO1xyXG5cdFx0XHRpZiAoICRzY3JvbGxhYmxlICkge1xyXG5cdFx0XHRcdGlmICggJC5pc0Z1bmN0aW9uKCQuZm5bJ3RoZW1lUGx1Z2luU2Nyb2xsYWJsZSddKSAgKSB7XHJcblx0XHRcdFx0XHQkc2Nyb2xsYWJsZS50aGVtZVBsdWdpblNjcm9sbGFibGUoKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmICggJC5pc0Z1bmN0aW9uKCQuZm5bJ25hbm9TY3JvbGxlciddKSApIHtcclxuXHRcdFx0XHRcdCRzY3JvbGxhYmxlLm5hbm9TY3JvbGxlcigpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHR9O1xyXG5cclxuXHRQbHVnaW5TY3JvbGxhYmxlLmRlZmF1bHRzID0ge1xyXG5cdFx0Y29udGVudENsYXNzOiAnc2Nyb2xsYWJsZS1jb250ZW50JyxcclxuXHRcdHBhbmVDbGFzczogJ3Njcm9sbGFibGUtcGFuZScsXHJcblx0XHRzbGlkZXJDbGFzczogJ3Njcm9sbGFibGUtc2xpZGVyJyxcclxuXHRcdGFsd2F5c1Zpc2libGU6IHRydWUsXHJcblx0XHRwcmV2ZW50UGFnZVNjcm9sbGluZzogdHJ1ZVxyXG5cdH07XHJcblxyXG5cdFBsdWdpblNjcm9sbGFibGUucHJvdG90eXBlID0ge1xyXG5cdFx0aW5pdGlhbGl6ZTogZnVuY3Rpb24oJGVsLCBvcHRzKSB7XHJcblx0XHRcdGlmICggJGVsLmRhdGEoIGluc3RhbmNlTmFtZSApICkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLiRlbCA9ICRlbDtcclxuXHJcblx0XHRcdHRoaXNcclxuXHRcdFx0XHQuc2V0RGF0YSgpXHJcblx0XHRcdFx0LnNldE9wdGlvbnMob3B0cylcclxuXHRcdFx0XHQuYnVpbGQoKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzZXREYXRhOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy4kZWwuZGF0YShpbnN0YW5jZU5hbWUsIHRoaXMpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdHNldE9wdGlvbnM6IGZ1bmN0aW9uKG9wdHMpIHtcclxuXHRcdFx0dGhpcy5vcHRpb25zID0gJC5leHRlbmQodHJ1ZSwge30sIFBsdWdpblNjcm9sbGFibGUuZGVmYXVsdHMsIG9wdHMsIHtcclxuXHRcdFx0XHR3cmFwcGVyOiB0aGlzLiRlbFxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRidWlsZDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMub3B0aW9ucy53cmFwcGVyLm5hbm9TY3JvbGxlcih0aGlzLm9wdGlvbnMpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Ly8gZXhwb3NlIHRvIHNjb3BlXHJcblx0JC5leHRlbmQodGhlbWUsIHtcclxuXHRcdFBsdWdpblNjcm9sbGFibGU6IFBsdWdpblNjcm9sbGFibGVcclxuXHR9KTtcclxuXHJcblx0Ly8ganF1ZXJ5IHBsdWdpblxyXG5cdCQuZm4udGhlbWVQbHVnaW5TY3JvbGxhYmxlID0gZnVuY3Rpb24ob3B0cykge1xyXG5cdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcblx0XHRcdGlmICgkdGhpcy5kYXRhKGluc3RhbmNlTmFtZSkpIHtcclxuXHRcdFx0XHRyZXR1cm4gJHRoaXMuZGF0YShpbnN0YW5jZU5hbWUpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiBuZXcgUGx1Z2luU2Nyb2xsYWJsZSgkdGhpcywgb3B0cyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHQkKGZ1bmN0aW9uKCkge1xyXG5cdFx0UGx1Z2luU2Nyb2xsYWJsZS51cGRhdGVNb2RhbHMoKTtcclxuXHR9KTtcclxuXHJcbn0pLmFwcGx5KHRoaXMsIFt3aW5kb3cudGhlbWUsIGpRdWVyeV0pO1xyXG5cclxuLy8gU2VsZWN0MlxyXG4oZnVuY3Rpb24odGhlbWUsICQpIHtcclxuXHJcblx0dGhlbWUgPSB0aGVtZSB8fCB7fTtcclxuXHJcblx0dmFyIGluc3RhbmNlTmFtZSA9ICdfX3NlbGVjdDInO1xyXG5cclxuXHR2YXIgUGx1Z2luU2VsZWN0MiA9IGZ1bmN0aW9uKCRlbCwgb3B0cykge1xyXG5cdFx0cmV0dXJuIHRoaXMuaW5pdGlhbGl6ZSgkZWwsIG9wdHMpO1xyXG5cdH07XHJcblxyXG5cdFBsdWdpblNlbGVjdDIuZGVmYXVsdHMgPSB7XHJcblx0XHR0aGVtZTogJ2Jvb3RzdHJhcCdcclxuXHR9O1xyXG5cclxuXHRQbHVnaW5TZWxlY3QyLnByb3RvdHlwZSA9IHtcclxuXHRcdGluaXRpYWxpemU6IGZ1bmN0aW9uKCRlbCwgb3B0cykge1xyXG5cdFx0XHRpZiAoICRlbC5kYXRhKCBpbnN0YW5jZU5hbWUgKSApIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy4kZWwgPSAkZWw7XHJcblxyXG5cdFx0XHR0aGlzXHJcblx0XHRcdFx0LnNldERhdGEoKVxyXG5cdFx0XHRcdC5zZXRPcHRpb25zKG9wdHMpXHJcblx0XHRcdFx0LmJ1aWxkKCk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0c2V0RGF0YTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMuJGVsLmRhdGEoaW5zdGFuY2VOYW1lLCB0aGlzKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzZXRPcHRpb25zOiBmdW5jdGlvbihvcHRzKSB7XHJcblx0XHRcdHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKCB0cnVlLCB7fSwgUGx1Z2luU2VsZWN0Mi5kZWZhdWx0cywgb3B0cyApO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdGJ1aWxkOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy4kZWwuc2VsZWN0MiggdGhpcy5vcHRpb25zICk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHQvLyBleHBvc2UgdG8gc2NvcGVcclxuXHQkLmV4dGVuZCh0aGVtZSwge1xyXG5cdFx0UGx1Z2luU2VsZWN0MjogUGx1Z2luU2VsZWN0MlxyXG5cdH0pO1xyXG5cclxuXHQvLyBqcXVlcnkgcGx1Z2luXHJcblx0JC5mbi50aGVtZVBsdWdpblNlbGVjdDIgPSBmdW5jdGlvbihvcHRzKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG5cclxuXHRcdFx0aWYgKCR0aGlzLmRhdGEoaW5zdGFuY2VOYW1lKSkge1xyXG5cdFx0XHRcdHJldHVybiAkdGhpcy5kYXRhKGluc3RhbmNlTmFtZSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBQbHVnaW5TZWxlY3QyKCR0aGlzLCBvcHRzKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcbn0pLmFwcGx5KHRoaXMsIFt3aW5kb3cudGhlbWUsIGpRdWVyeV0pO1xyXG5cclxuLy8gU2xpZGVyXHJcbihmdW5jdGlvbih0aGVtZSwgJCkge1xyXG5cclxuXHR0aGVtZSA9IHRoZW1lIHx8IHt9O1xyXG5cclxuXHR2YXIgaW5zdGFuY2VOYW1lID0gJ19fc2xpZGVyJztcclxuXHJcblx0dmFyIFBsdWdpblNsaWRlciA9IGZ1bmN0aW9uKCRlbCwgb3B0cykge1xyXG5cdFx0cmV0dXJuIHRoaXMuaW5pdGlhbGl6ZSgkZWwsIG9wdHMpO1xyXG5cdH07XHJcblxyXG5cdFBsdWdpblNsaWRlci5kZWZhdWx0cyA9IHtcclxuXHJcblx0fTtcclxuXHJcblx0UGx1Z2luU2xpZGVyLnByb3RvdHlwZSA9IHtcclxuXHRcdGluaXRpYWxpemU6IGZ1bmN0aW9uKCRlbCwgb3B0cykge1xyXG5cdFx0XHRpZiAoICRlbC5kYXRhKCBpbnN0YW5jZU5hbWUgKSApIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy4kZWwgPSAkZWw7XHJcblxyXG5cdFx0XHR0aGlzXHJcblx0XHRcdFx0LnNldFZhcnMoKVxyXG5cdFx0XHRcdC5zZXREYXRhKClcclxuXHRcdFx0XHQuc2V0T3B0aW9ucyhvcHRzKVxyXG5cdFx0XHRcdC5idWlsZCgpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdHNldFZhcnM6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgJG91dHB1dCA9ICQoIHRoaXMuJGVsLmRhdGEoJ3BsdWdpbi1zbGlkZXItb3V0cHV0JykgKTtcclxuXHRcdFx0dGhpcy4kb3V0cHV0ID0gJG91dHB1dC5nZXQoMCkgPyAkb3V0cHV0IDogbnVsbDtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzZXREYXRhOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy4kZWwuZGF0YShpbnN0YW5jZU5hbWUsIHRoaXMpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdHNldE9wdGlvbnM6IGZ1bmN0aW9uKG9wdHMpIHtcclxuXHRcdFx0dmFyIF9zZWxmID0gdGhpcztcclxuXHRcdFx0dGhpcy5vcHRpb25zID0gJC5leHRlbmQoIHRydWUsIHt9LCBQbHVnaW5TbGlkZXIuZGVmYXVsdHMsIG9wdHMgKTtcclxuXHJcblx0XHRcdGlmICggdGhpcy4kb3V0cHV0ICkge1xyXG5cdFx0XHRcdCQuZXh0ZW5kKCB0aGlzLm9wdGlvbnMsIHtcclxuXHRcdFx0XHRcdHNsaWRlOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xyXG5cdFx0XHRcdFx0XHRfc2VsZi5vblNsaWRlKCBldmVudCwgdWkgKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdGJ1aWxkOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy4kZWwuc2xpZGVyKCB0aGlzLm9wdGlvbnMgKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRvblNsaWRlOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xyXG5cdFx0XHRpZiAoICF1aS52YWx1ZXMgKSB7XHJcblx0XHRcdFx0dGhpcy4kb3V0cHV0LnZhbCggdWkudmFsdWUgKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLiRvdXRwdXQudmFsKCB1aS52YWx1ZXNbIDAgXSArICcvJyArIHVpLnZhbHVlc1sgMSBdICk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuJG91dHB1dC50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHQvLyBleHBvc2UgdG8gc2NvcGVcclxuXHQkLmV4dGVuZCh0aGVtZSwge1xyXG5cdFx0UGx1Z2luU2xpZGVyOiBQbHVnaW5TbGlkZXJcclxuXHR9KTtcclxuXHJcblx0Ly8ganF1ZXJ5IHBsdWdpblxyXG5cdCQuZm4udGhlbWVQbHVnaW5TbGlkZXIgPSBmdW5jdGlvbihvcHRzKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG5cclxuXHRcdFx0aWYgKCR0aGlzLmRhdGEoaW5zdGFuY2VOYW1lKSkge1xyXG5cdFx0XHRcdHJldHVybiAkdGhpcy5kYXRhKGluc3RhbmNlTmFtZSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBQbHVnaW5TbGlkZXIoJHRoaXMsIG9wdHMpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxufSkuYXBwbHkodGhpcywgW3dpbmRvdy50aGVtZSwgalF1ZXJ5XSk7XHJcblxyXG4vLyBTcGlubmVyXHJcbihmdW5jdGlvbih0aGVtZSwgJCkge1xyXG5cclxuXHR0aGVtZSA9IHRoZW1lIHx8IHt9O1xyXG5cclxuXHR2YXIgaW5zdGFuY2VOYW1lID0gJ19fc3Bpbm5lcic7XHJcblxyXG5cdHZhciBQbHVnaW5TcGlubmVyID0gZnVuY3Rpb24oJGVsLCBvcHRzKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5pbml0aWFsaXplKCRlbCwgb3B0cyk7XHJcblx0fTtcclxuXHJcblx0UGx1Z2luU3Bpbm5lci5kZWZhdWx0cyA9IHtcclxuXHR9O1xyXG5cclxuXHRQbHVnaW5TcGlubmVyLnByb3RvdHlwZSA9IHtcclxuXHRcdGluaXRpYWxpemU6IGZ1bmN0aW9uKCRlbCwgb3B0cykge1xyXG5cdFx0XHRpZiAoICRlbC5kYXRhKCBpbnN0YW5jZU5hbWUgKSApIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy4kZWwgPSAkZWw7XHJcblxyXG5cdFx0XHR0aGlzXHJcblx0XHRcdFx0LnNldERhdGEoKVxyXG5cdFx0XHRcdC5zZXRPcHRpb25zKG9wdHMpXHJcblx0XHRcdFx0LmJ1aWxkKCk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0c2V0RGF0YTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMuJGVsLmRhdGEoaW5zdGFuY2VOYW1lLCB0aGlzKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzZXRPcHRpb25zOiBmdW5jdGlvbihvcHRzKSB7XHJcblx0XHRcdHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKCB0cnVlLCB7fSwgUGx1Z2luU3Bpbm5lci5kZWZhdWx0cywgb3B0cyApO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdGJ1aWxkOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy4kZWwuc3Bpbm5lciggdGhpcy5vcHRpb25zICk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHQvLyBleHBvc2UgdG8gc2NvcGVcclxuXHQkLmV4dGVuZCh0aGVtZSwge1xyXG5cdFx0UGx1Z2luU3Bpbm5lcjogUGx1Z2luU3Bpbm5lclxyXG5cdH0pO1xyXG5cclxuXHQvLyBqcXVlcnkgcGx1Z2luXHJcblx0JC5mbi50aGVtZVBsdWdpblNwaW5uZXIgPSBmdW5jdGlvbihvcHRzKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG5cclxuXHRcdFx0aWYgKCR0aGlzLmRhdGEoaW5zdGFuY2VOYW1lKSkge1xyXG5cdFx0XHRcdHJldHVybiAkdGhpcy5kYXRhKGluc3RhbmNlTmFtZSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBQbHVnaW5TcGlubmVyKCR0aGlzLCBvcHRzKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcbn0pLmFwcGx5KHRoaXMsIFt3aW5kb3cudGhlbWUsIGpRdWVyeV0pO1xyXG5cclxuLy8gU3VtbWVyTm90ZVxyXG4oZnVuY3Rpb24odGhlbWUsICQpIHtcclxuXHJcblx0dGhlbWUgPSB0aGVtZSB8fCB7fTtcclxuXHJcblx0dmFyIGluc3RhbmNlTmFtZSA9ICdfX3N1bW1lcm5vdGUnO1xyXG5cclxuXHR2YXIgUGx1Z2luU3VtbWVyTm90ZSA9IGZ1bmN0aW9uKCRlbCwgb3B0cykge1xyXG5cdFx0cmV0dXJuIHRoaXMuaW5pdGlhbGl6ZSgkZWwsIG9wdHMpO1xyXG5cdH07XHJcblxyXG5cdFBsdWdpblN1bW1lck5vdGUuZGVmYXVsdHMgPSB7XHJcblx0XHRvbmZvY3VzOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0JCggdGhpcyApLmNsb3Nlc3QoICcubm90ZS1lZGl0b3InICkuYWRkQ2xhc3MoICdhY3RpdmUnICk7XHJcblx0XHR9LFxyXG5cdFx0b25ibHVyOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0JCggdGhpcyApLmNsb3Nlc3QoICcubm90ZS1lZGl0b3InICkucmVtb3ZlQ2xhc3MoICdhY3RpdmUnICk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0UGx1Z2luU3VtbWVyTm90ZS5wcm90b3R5cGUgPSB7XHJcblx0XHRpbml0aWFsaXplOiBmdW5jdGlvbigkZWwsIG9wdHMpIHtcclxuXHRcdFx0aWYgKCAkZWwuZGF0YSggaW5zdGFuY2VOYW1lICkgKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuJGVsID0gJGVsO1xyXG5cclxuXHRcdFx0dGhpc1xyXG5cdFx0XHRcdC5zZXREYXRhKClcclxuXHRcdFx0XHQuc2V0T3B0aW9ucyhvcHRzKVxyXG5cdFx0XHRcdC5idWlsZCgpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdHNldERhdGE6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLiRlbC5kYXRhKGluc3RhbmNlTmFtZSwgdGhpcyk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0c2V0T3B0aW9uczogZnVuY3Rpb24ob3B0cykge1xyXG5cdFx0XHR0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCggdHJ1ZSwge30sIFBsdWdpblN1bW1lck5vdGUuZGVmYXVsdHMsIG9wdHMgKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRidWlsZDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMuJGVsLnN1bW1lcm5vdGUoIHRoaXMub3B0aW9ucyApO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Ly8gZXhwb3NlIHRvIHNjb3BlXHJcblx0JC5leHRlbmQodGhlbWUsIHtcclxuXHRcdFBsdWdpblN1bW1lck5vdGU6IFBsdWdpblN1bW1lck5vdGVcclxuXHR9KTtcclxuXHJcblx0Ly8ganF1ZXJ5IHBsdWdpblxyXG5cdCQuZm4udGhlbWVQbHVnaW5TdW1tZXJOb3RlID0gZnVuY3Rpb24ob3B0cykge1xyXG5cdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcblx0XHRcdGlmICgkdGhpcy5kYXRhKGluc3RhbmNlTmFtZSkpIHtcclxuXHRcdFx0XHRyZXR1cm4gJHRoaXMuZGF0YShpbnN0YW5jZU5hbWUpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiBuZXcgUGx1Z2luU3VtbWVyTm90ZSgkdGhpcywgb3B0cyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG59KS5hcHBseSh0aGlzLCBbd2luZG93LnRoZW1lLCBqUXVlcnldKTtcclxuXHJcbi8vIFRleHRBcmVhIEF1dG9TaXplXHJcbihmdW5jdGlvbih0aGVtZSwgJCkge1xyXG5cclxuXHR0aGVtZSA9IHRoZW1lIHx8IHt9O1xyXG5cclxuXHR2YXIgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxuXHR2YXIgaW5zdGFuY2VOYW1lID0gJ19fdGV4dGFyZWFBdXRvc2l6ZSc7XHJcblxyXG5cdHZhciBQbHVnaW5UZXh0QXJlYUF1dG9TaXplID0gZnVuY3Rpb24oJGVsLCBvcHRzKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5pbml0aWFsaXplKCRlbCwgb3B0cyk7XHJcblx0fTtcclxuXHJcblx0UGx1Z2luVGV4dEFyZWFBdXRvU2l6ZS5kZWZhdWx0cyA9IHtcclxuXHR9O1xyXG5cclxuXHRQbHVnaW5UZXh0QXJlYUF1dG9TaXplLnByb3RvdHlwZSA9IHtcclxuXHRcdGluaXRpYWxpemU6IGZ1bmN0aW9uKCRlbCwgb3B0cykge1xyXG5cdFx0XHRpZiAoaW5pdGlhbGl6ZWQpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy4kZWwgPSAkZWw7XHJcblxyXG5cdFx0XHR0aGlzXHJcblx0XHRcdFx0LnNldERhdGEoKVxyXG5cdFx0XHRcdC5zZXRPcHRpb25zKG9wdHMpXHJcblx0XHRcdFx0LmJ1aWxkKCk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0c2V0RGF0YTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMuJGVsLmRhdGEoaW5zdGFuY2VOYW1lLCB0aGlzKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzZXRPcHRpb25zOiBmdW5jdGlvbihvcHRzKSB7XHJcblx0XHRcdHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKCB0cnVlLCB7fSwgUGx1Z2luVGV4dEFyZWFBdXRvU2l6ZS5kZWZhdWx0cywgb3B0cyApO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdGJ1aWxkOiBmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdGF1dG9zaXplKCQodGhpcy4kZWwpKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8vIGV4cG9zZSB0byBzY29wZVxyXG5cdCQuZXh0ZW5kKHRoZW1lLCB7XHJcblx0XHRQbHVnaW5UZXh0QXJlYUF1dG9TaXplOiBQbHVnaW5UZXh0QXJlYUF1dG9TaXplXHJcblx0fSk7XHJcblxyXG5cdC8vIGpxdWVyeSBwbHVnaW5cclxuXHQkLmZuLnRoZW1lUGx1Z2luVGV4dEFyZWFBdXRvU2l6ZSA9IGZ1bmN0aW9uKG9wdHMpIHtcclxuXHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblxyXG5cdFx0XHRpZiAoJHRoaXMuZGF0YShpbnN0YW5jZU5hbWUpKSB7XHJcblx0XHRcdFx0cmV0dXJuICR0aGlzLmRhdGEoaW5zdGFuY2VOYW1lKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gbmV3IFBsdWdpblRleHRBcmVhQXV0b1NpemUoJHRoaXMsIG9wdHMpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxufSkuYXBwbHkodGhpcywgW3dpbmRvdy50aGVtZSwgalF1ZXJ5XSk7XHJcblxyXG4vLyBUaW1lUGlja2VyXHJcbihmdW5jdGlvbih0aGVtZSwgJCkge1xyXG5cclxuXHR0aGVtZSA9IHRoZW1lIHx8IHt9O1xyXG5cclxuXHR2YXIgaW5zdGFuY2VOYW1lID0gJ19fdGltZXBpY2tlcic7XHJcblxyXG5cdHZhciBQbHVnaW5UaW1lUGlja2VyID0gZnVuY3Rpb24oJGVsLCBvcHRzKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5pbml0aWFsaXplKCRlbCwgb3B0cyk7XHJcblx0fTtcclxuXHJcblx0UGx1Z2luVGltZVBpY2tlci5kZWZhdWx0cyA9IHtcclxuXHRcdGRpc2FibGVNb3VzZXdoZWVsOiB0cnVlLFxyXG5cdFx0aWNvbnM6IHtcclxuXHRcdFx0dXA6ICdmYXMgZmEtY2hldnJvbi11cCcsXHJcblx0XHRcdGRvd246ICdmYXMgZmEtY2hldnJvbi1kb3duJ1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdFBsdWdpblRpbWVQaWNrZXIucHJvdG90eXBlID0ge1xyXG5cdFx0aW5pdGlhbGl6ZTogZnVuY3Rpb24oJGVsLCBvcHRzKSB7XHJcblx0XHRcdGlmICggJGVsLmRhdGEoIGluc3RhbmNlTmFtZSApICkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLiRlbCA9ICRlbDtcclxuXHJcblx0XHRcdHRoaXNcclxuXHRcdFx0XHQuc2V0RGF0YSgpXHJcblx0XHRcdFx0LnNldE9wdGlvbnMob3B0cylcclxuXHRcdFx0XHQuYnVpbGQoKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzZXREYXRhOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy4kZWwuZGF0YShpbnN0YW5jZU5hbWUsIHRoaXMpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdHNldE9wdGlvbnM6IGZ1bmN0aW9uKG9wdHMpIHtcclxuXHRcdFx0dGhpcy5vcHRpb25zID0gJC5leHRlbmQoIHRydWUsIHt9LCBQbHVnaW5UaW1lUGlja2VyLmRlZmF1bHRzLCBvcHRzICk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0YnVpbGQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLiRlbC50aW1lcGlja2VyKCB0aGlzLm9wdGlvbnMgKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8vIGV4cG9zZSB0byBzY29wZVxyXG5cdCQuZXh0ZW5kKHRoZW1lLCB7XHJcblx0XHRQbHVnaW5UaW1lUGlja2VyOiBQbHVnaW5UaW1lUGlja2VyXHJcblx0fSk7XHJcblxyXG5cdC8vIGpxdWVyeSBwbHVnaW5cclxuXHQkLmZuLnRoZW1lUGx1Z2luVGltZVBpY2tlciA9IGZ1bmN0aW9uKG9wdHMpIHtcclxuXHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblxyXG5cdFx0XHRpZiAoJHRoaXMuZGF0YShpbnN0YW5jZU5hbWUpKSB7XHJcblx0XHRcdFx0cmV0dXJuICR0aGlzLmRhdGEoaW5zdGFuY2VOYW1lKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gbmV3IFBsdWdpblRpbWVQaWNrZXIoJHRoaXMsIG9wdHMpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxufSkuYXBwbHkodGhpcywgW3dpbmRvdy50aGVtZSwgalF1ZXJ5XSk7XHJcblxyXG4vLyBUb2dnbGVcclxuKGZ1bmN0aW9uKHRoZW1lLCAkKSB7XHJcblxyXG5cdHRoZW1lID0gdGhlbWUgfHwge307XHJcblxyXG5cdHZhciBpbnN0YW5jZU5hbWUgPSAnX190b2dnbGUnO1xyXG5cclxuXHR2YXIgUGx1Z2luVG9nZ2xlID0gZnVuY3Rpb24oJGVsLCBvcHRzKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5pbml0aWFsaXplKCRlbCwgb3B0cyk7XHJcblx0fTtcclxuXHJcblx0UGx1Z2luVG9nZ2xlLmRlZmF1bHRzID0ge1xyXG5cdFx0ZHVyYXRpb246IDM1MCxcclxuXHRcdGlzQWNjb3JkaW9uOiBmYWxzZSxcclxuXHRcdGFkZEljb25zOiB0cnVlXHJcblx0fTtcclxuXHJcblx0UGx1Z2luVG9nZ2xlLnByb3RvdHlwZSA9IHtcclxuXHRcdGluaXRpYWxpemU6IGZ1bmN0aW9uKCRlbCwgb3B0cykge1xyXG5cdFx0XHRpZiAoICRlbC5kYXRhKCBpbnN0YW5jZU5hbWUgKSApIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy4kZWwgPSAkZWw7XHJcblxyXG5cdFx0XHR0aGlzXHJcblx0XHRcdFx0LnNldERhdGEoKVxyXG5cdFx0XHRcdC5zZXRPcHRpb25zKG9wdHMpXHJcblx0XHRcdFx0LmJ1aWxkKCk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0c2V0RGF0YTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMuJGVsLmRhdGEoaW5zdGFuY2VOYW1lLCB0aGlzKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzZXRPcHRpb25zOiBmdW5jdGlvbihvcHRzKSB7XHJcblx0XHRcdHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHRydWUsIHt9LCBQbHVnaW5Ub2dnbGUuZGVmYXVsdHMsIG9wdHMsIHtcclxuXHRcdFx0XHR3cmFwcGVyOiB0aGlzLiRlbFxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRidWlsZDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBzZWxmID0gdGhpcyxcclxuXHRcdFx0XHQkd3JhcHBlciA9IHRoaXMub3B0aW9ucy53cmFwcGVyLFxyXG5cdFx0XHRcdCRpdGVtcyA9ICR3cmFwcGVyLmZpbmQoJy50b2dnbGUnKSxcclxuXHRcdFx0XHQkZWwgPSBudWxsO1xyXG5cclxuXHRcdFx0JGl0ZW1zLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0JGVsID0gJCh0aGlzKTtcclxuXHJcblx0XHRcdFx0aWYoc2VsZi5vcHRpb25zLmFkZEljb25zKSB7XHJcblx0XHRcdFx0XHQkZWwuZmluZCgnPiBsYWJlbCcpLnByZXBlbmQoXHJcblx0XHRcdFx0XHRcdCQoJzxpIC8+JykuYWRkQ2xhc3MoJ2ZhcyBmYS1wbHVzJyksXHJcblx0XHRcdFx0XHRcdCQoJzxpIC8+JykuYWRkQ2xhc3MoJ2ZhcyBmYS1taW51cycpXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYoJGVsLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG5cdFx0XHRcdFx0JGVsLmZpbmQoJz4gcCcpLmFkZENsYXNzKCdwcmV2aWV3LWFjdGl2ZScpO1xyXG5cdFx0XHRcdFx0JGVsLmZpbmQoJz4gLnRvZ2dsZS1jb250ZW50Jykuc2xpZGVEb3duKHNlbGYub3B0aW9ucy5kdXJhdGlvbik7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRzZWxmLmV2ZW50cygkZWwpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGlmKHNlbGYub3B0aW9ucy5pc0FjY29yZGlvbikge1xyXG5cdFx0XHRcdHNlbGYub3B0aW9ucy5kdXJhdGlvbiA9IHNlbGYub3B0aW9ucy5kdXJhdGlvbi8yO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0ZXZlbnRzOiBmdW5jdGlvbigkZWwpIHtcclxuXHRcdFx0dmFyIHNlbGYgPSB0aGlzLFxyXG5cdFx0XHRcdHByZXZpZXdQYXJDdXJyZW50SGVpZ2h0ID0gMCxcclxuXHRcdFx0XHRwcmV2aWV3UGFyQW5pbWF0ZUhlaWdodCA9IDAsXHJcblx0XHRcdFx0dG9nZ2xlQ29udGVudCA9IG51bGw7XHJcblxyXG5cdFx0XHQkZWwuZmluZCgnPiBsYWJlbCcpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuXHJcblx0XHRcdFx0dmFyICR0aGlzID0gJCh0aGlzKSxcclxuXHRcdFx0XHRcdHBhcmVudFNlY3Rpb24gPSAkdGhpcy5wYXJlbnQoKSxcclxuXHRcdFx0XHRcdHBhcmVudFdyYXBwZXIgPSAkdGhpcy5wYXJlbnRzKCcudG9nZ2xlJyksXHJcblx0XHRcdFx0XHRwcmV2aWV3UGFyID0gbnVsbCxcclxuXHRcdFx0XHRcdGNsb3NlRWxlbWVudCA9IG51bGw7XHJcblxyXG5cdFx0XHRcdGlmKHNlbGYub3B0aW9ucy5pc0FjY29yZGlvbiAmJiB0eXBlb2YoZS5vcmlnaW5hbEV2ZW50KSAhPSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHRcdFx0Y2xvc2VFbGVtZW50ID0gcGFyZW50V3JhcHBlci5maW5kKCcudG9nZ2xlLmFjdGl2ZSA+IGxhYmVsJyk7XHJcblxyXG5cdFx0XHRcdFx0aWYoY2xvc2VFbGVtZW50WzBdID09ICR0aGlzWzBdKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHBhcmVudFNlY3Rpb24udG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuXHRcdFx0XHQvLyBQcmV2aWV3IFBhcmFncmFwaFxyXG5cdFx0XHRcdGlmKHBhcmVudFNlY3Rpb24uZmluZCgnPiBwJykuZ2V0KDApKSB7XHJcblxyXG5cdFx0XHRcdFx0cHJldmlld1BhciA9IHBhcmVudFNlY3Rpb24uZmluZCgnPiBwJyk7XHJcblx0XHRcdFx0XHRwcmV2aWV3UGFyQ3VycmVudEhlaWdodCA9IHByZXZpZXdQYXIuY3NzKCdoZWlnaHQnKTtcclxuXHRcdFx0XHRcdHByZXZpZXdQYXIuY3NzKCdoZWlnaHQnLCAnYXV0bycpO1xyXG5cdFx0XHRcdFx0cHJldmlld1BhckFuaW1hdGVIZWlnaHQgPSBwcmV2aWV3UGFyLmNzcygnaGVpZ2h0Jyk7XHJcblx0XHRcdFx0XHRwcmV2aWV3UGFyLmNzcygnaGVpZ2h0JywgcHJldmlld1BhckN1cnJlbnRIZWlnaHQpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIENvbnRlbnRcclxuXHRcdFx0XHR0b2dnbGVDb250ZW50ID0gcGFyZW50U2VjdGlvbi5maW5kKCc+IC50b2dnbGUtY29udGVudCcpO1xyXG5cclxuXHRcdFx0XHRpZihwYXJlbnRTZWN0aW9uLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG5cclxuXHRcdFx0XHRcdCQocHJldmlld1BhcikuYW5pbWF0ZSh7XHJcblx0XHRcdFx0XHRcdGhlaWdodDogcHJldmlld1BhckFuaW1hdGVIZWlnaHRcclxuXHRcdFx0XHRcdH0sIHNlbGYub3B0aW9ucy5kdXJhdGlvbiwgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ3ByZXZpZXctYWN0aXZlJyk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHR0b2dnbGVDb250ZW50LnNsaWRlRG93bihzZWxmLm9wdGlvbnMuZHVyYXRpb24sIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRpZihjbG9zZUVsZW1lbnQpIHtcclxuXHRcdFx0XHRcdFx0XHRjbG9zZUVsZW1lbnQudHJpZ2dlcignY2xpY2snKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0JChwcmV2aWV3UGFyKS5hbmltYXRlKHtcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiAwXHJcblx0XHRcdFx0XHR9LCBzZWxmLm9wdGlvbnMuZHVyYXRpb24sIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpLnJlbW92ZUNsYXNzKCdwcmV2aWV3LWFjdGl2ZScpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0dG9nZ2xlQ29udGVudC5zbGlkZVVwKHNlbGYub3B0aW9ucy5kdXJhdGlvbik7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8vIGV4cG9zZSB0byBzY29wZVxyXG5cdCQuZXh0ZW5kKHRoZW1lLCB7XHJcblx0XHRQbHVnaW5Ub2dnbGU6IFBsdWdpblRvZ2dsZVxyXG5cdH0pO1xyXG5cclxuXHQvLyBqcXVlcnkgcGx1Z2luXHJcblx0JC5mbi50aGVtZVBsdWdpblRvZ2dsZSA9IGZ1bmN0aW9uKG9wdHMpIHtcclxuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcblx0XHRcdGlmICgkdGhpcy5kYXRhKGluc3RhbmNlTmFtZSkpIHtcclxuXHRcdFx0XHRyZXR1cm4gJHRoaXMuZGF0YShpbnN0YW5jZU5hbWUpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiBuZXcgUGx1Z2luVG9nZ2xlKCR0aGlzLCBvcHRzKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcbn0pLmFwcGx5KHRoaXMsIFt3aW5kb3cudGhlbWUsIGpRdWVyeV0pO1xyXG5cclxuLy8gV2lkZ2V0IC0gVG9kb1xyXG4oZnVuY3Rpb24odGhlbWUsICQpIHtcclxuXHJcblx0dGhlbWUgPSB0aGVtZSB8fCB7fTtcclxuXHJcblx0dmFyIGluc3RhbmNlTmFtZSA9ICdfX3dpZGdldFRvZG9MaXN0JztcclxuXHJcblx0dmFyIFdpZGdldFRvZG9MaXN0ID0gZnVuY3Rpb24oJGVsLCBvcHRzKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5pbml0aWFsaXplKCRlbCwgb3B0cyk7XHJcblx0fTtcclxuXHJcblx0V2lkZ2V0VG9kb0xpc3QuZGVmYXVsdHMgPSB7XHJcblx0fTtcclxuXHJcblx0V2lkZ2V0VG9kb0xpc3QucHJvdG90eXBlID0ge1xyXG5cdFx0aW5pdGlhbGl6ZTogZnVuY3Rpb24oJGVsLCBvcHRzKSB7XHJcblx0XHRcdGlmICggJGVsLmRhdGEoIGluc3RhbmNlTmFtZSApICkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLiRlbCA9ICRlbDtcclxuXHJcblx0XHRcdHRoaXNcclxuXHRcdFx0XHQuc2V0RGF0YSgpXHJcblx0XHRcdFx0LnNldE9wdGlvbnMob3B0cylcclxuXHRcdFx0XHQuYnVpbGQoKVxyXG5cdFx0XHRcdC5ldmVudHMoKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzZXREYXRhOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy4kZWwuZGF0YShpbnN0YW5jZU5hbWUsIHRoaXMpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdHNldE9wdGlvbnM6IGZ1bmN0aW9uKG9wdHMpIHtcclxuXHRcdFx0dGhpcy5vcHRpb25zID0gJC5leHRlbmQoIHRydWUsIHt9LCBXaWRnZXRUb2RvTGlzdC5kZWZhdWx0cywgb3B0cyApO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdGNoZWNrOiBmdW5jdGlvbiggaW5wdXQsIGxhYmVsICkge1xyXG5cdFx0XHRpZiAoIGlucHV0LmlzKCc6Y2hlY2tlZCcpICkge1xyXG5cdFx0XHRcdGxhYmVsLmFkZENsYXNzKCdsaW5lLXRocm91Z2gnKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRsYWJlbC5yZW1vdmVDbGFzcygnbGluZS10aHJvdWdoJyk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdFx0YnVpbGQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgX3NlbGYgPSB0aGlzLFxyXG5cdFx0XHRcdCRjaGVjayA9IHRoaXMuJGVsLmZpbmQoJy50b2RvLWNoZWNrJyk7XHJcblxyXG5cdFx0XHQkY2hlY2suZWFjaChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0dmFyIGxhYmVsID0gJCh0aGlzKS5jbG9zZXN0KCdsaScpLmZpbmQoJy50b2RvLWxhYmVsJyk7XHJcblx0XHRcdFx0X3NlbGYuY2hlY2soICQodGhpcyksIGxhYmVsICk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdGV2ZW50czogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBfc2VsZiA9IHRoaXMsXHJcblx0XHRcdFx0JHJlbW92ZSA9IHRoaXMuJGVsLmZpbmQoICcudG9kby1yZW1vdmUnICksXHJcblx0XHRcdFx0JGNoZWNrID0gdGhpcy4kZWwuZmluZCgnLnRvZG8tY2hlY2snKSxcclxuXHRcdFx0XHQkd2luZG93ID0gJCggd2luZG93ICk7XHJcblxyXG5cdFx0XHQkcmVtb3ZlLm9uKCdjbGljay53aWRnZXQtdG9kby1saXN0JywgZnVuY3Rpb24oIGV2ICkge1xyXG5cdFx0XHRcdGV2LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0JCh0aGlzKS5jbG9zZXN0KFwibGlcIikucmVtb3ZlKCk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0JGNoZWNrLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0dmFyIGxhYmVsID0gJCh0aGlzKS5jbG9zZXN0KCdsaScpLmZpbmQoJy50b2RvLWxhYmVsJyk7XHJcblx0XHRcdFx0X3NlbGYuY2hlY2soICQodGhpcyksIGxhYmVsICk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0aWYgKCAkLmlzRnVuY3Rpb24oICQuZm4uc29ydGFibGUgKSApIHtcclxuXHRcdFx0XHR0aGlzLiRlbC5zb3J0YWJsZSh7XHJcblx0XHRcdFx0XHRzb3J0OiBmdW5jdGlvbihldmVudCwgdWkpIHtcclxuXHRcdFx0XHRcdFx0dmFyIHRvcCA9IGV2ZW50LnBhZ2VZIC0gX3NlbGYuJGVsLm9mZnNldCgpLnRvcCAtICh1aS5oZWxwZXIub3V0ZXJIZWlnaHQodHJ1ZSkgLyAyKTtcclxuXHRcdFx0XHRcdFx0dWkuaGVscGVyLmNzcyh7J3RvcCcgOiB0b3AgKyAncHgnfSk7XHJcblx0XHRcdFx0ICAgIH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Ly8gZXhwb3NlIHRvIHNjb3BlXHJcblx0JC5leHRlbmQodGhlbWUsIHtcclxuXHRcdFdpZGdldFRvZG9MaXN0OiBXaWRnZXRUb2RvTGlzdFxyXG5cdH0pO1xyXG5cclxuXHQvLyBqcXVlcnkgcGx1Z2luXHJcblx0JC5mbi50aGVtZVBsdWdpbldpZGdldFRvZG9MaXN0ID0gZnVuY3Rpb24ob3B0cykge1xyXG5cdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcblx0XHRcdGlmICgkdGhpcy5kYXRhKGluc3RhbmNlTmFtZSkpIHtcclxuXHRcdFx0XHRyZXR1cm4gJHRoaXMuZGF0YShpbnN0YW5jZU5hbWUpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiBuZXcgV2lkZ2V0VG9kb0xpc3QoJHRoaXMsIG9wdHMpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxufSkuYXBwbHkodGhpcywgW3dpbmRvdy50aGVtZSwgalF1ZXJ5XSk7XHJcblxyXG4vLyBXaWRnZXQgLSBUb2dnbGVcclxuKGZ1bmN0aW9uKHRoZW1lLCAkKSB7XHJcblxyXG5cdHRoZW1lID0gdGhlbWUgfHwge307XHJcblxyXG5cdHZhciBpbnN0YW5jZU5hbWUgPSAnX193aWRnZXRUb2dnbGVFeHBhbmQnO1xyXG5cclxuXHR2YXIgV2lkZ2V0VG9nZ2xlRXhwYW5kID0gZnVuY3Rpb24oJGVsLCBvcHRzKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5pbml0aWFsaXplKCRlbCwgb3B0cyk7XHJcblx0fTtcclxuXHJcblx0V2lkZ2V0VG9nZ2xlRXhwYW5kLmRlZmF1bHRzID0ge1xyXG5cdH07XHJcblxyXG5cdFdpZGdldFRvZ2dsZUV4cGFuZC5wcm90b3R5cGUgPSB7XHJcblx0XHRpbml0aWFsaXplOiBmdW5jdGlvbigkZWwsIG9wdHMpIHtcclxuXHRcdFx0aWYgKCAkZWwuZGF0YSggaW5zdGFuY2VOYW1lICkgKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuJGVsID0gJGVsO1xyXG5cclxuXHRcdFx0dGhpc1xyXG5cdFx0XHRcdC5zZXREYXRhKClcclxuXHRcdFx0XHQuc2V0T3B0aW9ucyhvcHRzKVxyXG5cdFx0XHRcdC5idWlsZCgpXHJcblx0XHRcdFx0LmV2ZW50cygpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdHNldERhdGE6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLiRlbC5kYXRhKGluc3RhbmNlTmFtZSwgdGhpcyk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0c2V0T3B0aW9uczogZnVuY3Rpb24ob3B0cykge1xyXG5cdFx0XHR0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCggdHJ1ZSwge30sIFdpZGdldFRvZ2dsZUV4cGFuZC5kZWZhdWx0cywgb3B0cyApO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdGJ1aWxkOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdGV2ZW50czogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBfc2VsZiA9IHRoaXMsXHJcblx0XHRcdFx0JHRvZ2dsZXIgPSB0aGlzLiRlbC5maW5kKCAnLndpZGdldC10b2dnbGUnICk7XHJcblxyXG5cdFx0XHQkdG9nZ2xlci5vbignY2xpY2sud2lkZ2V0LXRvZ2dsZXInLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRfc2VsZi4kZWwuaGFzQ2xhc3MoJ3dpZGdldC1jb2xsYXBzZWQnKSA/IF9zZWxmLmV4cGFuZCggX3NlbGYuJGVsICkgOiBfc2VsZi5jb2xsYXBzZSggX3NlbGYuJGVsICk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdGV4cGFuZDogZnVuY3Rpb24oIGNvbnRlbnQgKSB7XHJcblx0XHRcdGNvbnRlbnQuY2hpbGRyZW4oICcud2lkZ2V0LWNvbnRlbnQtZXhwYW5kZWQnICkuc2xpZGVEb3duKCAnZmFzdCcsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdCQodGhpcykuY3NzKCAnZGlzcGxheScsICcnICk7XHJcblx0XHRcdFx0Y29udGVudC5yZW1vdmVDbGFzcyggJ3dpZGdldC1jb2xsYXBzZWQnICk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHJcblx0XHRjb2xsYXBzZTogZnVuY3Rpb24oIGNvbnRlbnQgKSB7XHJcblx0XHRcdGNvbnRlbnQuY2hpbGRyZW4oJy53aWRnZXQtY29udGVudC1leHBhbmRlZCcgKS5zbGlkZVVwKCAnZmFzdCcsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGNvbnRlbnQuYWRkQ2xhc3MoICd3aWRnZXQtY29sbGFwc2VkJyApO1xyXG5cdFx0XHRcdCQodGhpcykuY3NzKCAnZGlzcGxheScsICcnICk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8vIGV4cG9zZSB0byBzY29wZVxyXG5cdCQuZXh0ZW5kKHRoZW1lLCB7XHJcblx0XHRXaWRnZXRUb2dnbGVFeHBhbmQ6IFdpZGdldFRvZ2dsZUV4cGFuZFxyXG5cdH0pO1xyXG5cclxuXHQvLyBqcXVlcnkgcGx1Z2luXHJcblx0JC5mbi50aGVtZVBsdWdpbldpZGdldFRvZ2dsZUV4cGFuZCA9IGZ1bmN0aW9uKG9wdHMpIHtcclxuXHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblxyXG5cdFx0XHRpZiAoJHRoaXMuZGF0YShpbnN0YW5jZU5hbWUpKSB7XHJcblx0XHRcdFx0cmV0dXJuICR0aGlzLmRhdGEoaW5zdGFuY2VOYW1lKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gbmV3IFdpZGdldFRvZ2dsZUV4cGFuZCgkdGhpcywgb3B0cyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG59KS5hcHBseSh0aGlzLCBbd2luZG93LnRoZW1lLCBqUXVlcnldKTtcclxuXHJcbi8vIFdvcmQgUm90YXRvclxyXG4oZnVuY3Rpb24odGhlbWUsICQpIHtcclxuXHJcblx0dGhlbWUgPSB0aGVtZSB8fCB7fTtcclxuXHJcblx0dmFyIGluc3RhbmNlTmFtZSA9ICdfX3dvcmRSb3RhdG9yJztcclxuXHJcblx0dmFyIFBsdWdpbldvcmRSb3RhdG9yID0gZnVuY3Rpb24oJGVsLCBvcHRzKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5pbml0aWFsaXplKCRlbCwgb3B0cyk7XHJcblx0fTtcclxuXHJcblx0UGx1Z2luV29yZFJvdGF0b3IuZGVmYXVsdHMgPSB7XHJcblx0XHRkZWxheTogMjAwMFxyXG5cdH07XHJcblxyXG5cdFBsdWdpbldvcmRSb3RhdG9yLnByb3RvdHlwZSA9IHtcclxuXHRcdGluaXRpYWxpemU6IGZ1bmN0aW9uKCRlbCwgb3B0cykge1xyXG5cdFx0XHRpZiAoICRlbC5kYXRhKCBpbnN0YW5jZU5hbWUgKSApIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy4kZWwgPSAkZWw7XHJcblxyXG5cdFx0XHR0aGlzXHJcblx0XHRcdFx0LnNldERhdGEoKVxyXG5cdFx0XHRcdC5zZXRPcHRpb25zKG9wdHMpXHJcblx0XHRcdFx0LmJ1aWxkKCk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0c2V0RGF0YTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMuJGVsLmRhdGEoaW5zdGFuY2VOYW1lLCB0aGlzKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzZXRPcHRpb25zOiBmdW5jdGlvbihvcHRzKSB7XHJcblx0XHRcdHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHRydWUsIHt9LCBQbHVnaW5Xb3JkUm90YXRvci5kZWZhdWx0cywgb3B0cywge1xyXG5cdFx0XHRcdHdyYXBwZXI6IHRoaXMuJGVsXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdGJ1aWxkOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyICRlbCA9IHRoaXMub3B0aW9ucy53cmFwcGVyLFxyXG5cdFx0XHRcdGl0ZW1zV3JhcHBlciA9ICRlbC5maW5kKFwiLndvcnQtcm90YXRvci1pdGVtc1wiKSxcclxuXHRcdFx0XHRpdGVtcyA9IGl0ZW1zV3JhcHBlci5maW5kKFwiPiBzcGFuXCIpLFxyXG5cdFx0XHRcdGZpcnN0SXRlbSA9IGl0ZW1zLmVxKDApLFxyXG5cdFx0XHRcdGZpcnN0SXRlbUNsb25lID0gZmlyc3RJdGVtLmNsb25lKCksXHJcblx0XHRcdFx0aXRlbUhlaWdodCA9IGZpcnN0SXRlbS5oZWlnaHQoKSxcclxuXHRcdFx0XHRjdXJyZW50SXRlbSA9IDEsXHJcblx0XHRcdFx0Y3VycmVudFRvcCA9IDA7XHJcblxyXG5cdFx0XHRpdGVtc1dyYXBwZXIuYXBwZW5kKGZpcnN0SXRlbUNsb25lKTtcclxuXHJcblx0XHRcdCRlbFxyXG5cdFx0XHRcdC5oZWlnaHQoaXRlbUhlaWdodClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcblxyXG5cdFx0XHRzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdFx0Y3VycmVudFRvcCA9IChjdXJyZW50SXRlbSAqIGl0ZW1IZWlnaHQpO1xyXG5cclxuXHRcdFx0XHRpdGVtc1dyYXBwZXIuYW5pbWF0ZSh7XHJcblx0XHRcdFx0XHR0b3A6IC0oY3VycmVudFRvcCkgKyBcInB4XCJcclxuXHRcdFx0XHR9LCAzMDAsIGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdFx0XHRcdGN1cnJlbnRJdGVtKys7XHJcblxyXG5cdFx0XHRcdFx0aWYoY3VycmVudEl0ZW0gPiBpdGVtcy5sZW5ndGgpIHtcclxuXHJcblx0XHRcdFx0XHRcdGl0ZW1zV3JhcHBlci5jc3MoXCJ0b3BcIiwgMCk7XHJcblx0XHRcdFx0XHRcdGN1cnJlbnRJdGVtID0gMTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fSwgdGhpcy5vcHRpb25zLmRlbGF5KTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8vIGV4cG9zZSB0byBzY29wZVxyXG5cdCQuZXh0ZW5kKHRoZW1lLCB7XHJcblx0XHRQbHVnaW5Xb3JkUm90YXRvcjogUGx1Z2luV29yZFJvdGF0b3JcclxuXHR9KTtcclxuXHJcblx0Ly8ganF1ZXJ5IHBsdWdpblxyXG5cdCQuZm4udGhlbWVQbHVnaW5Xb3JkUm90YXRvciA9IGZ1bmN0aW9uKG9wdHMpIHtcclxuXHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblxyXG5cdFx0XHRpZiAoJHRoaXMuZGF0YShpbnN0YW5jZU5hbWUpKSB7XHJcblx0XHRcdFx0cmV0dXJuICR0aGlzLmRhdGEoaW5zdGFuY2VOYW1lKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gbmV3IFBsdWdpbldvcmRSb3RhdG9yKCR0aGlzLCBvcHRzKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcbn0pLmFwcGx5KHRoaXMsIFt3aW5kb3cudGhlbWUsIGpRdWVyeV0pO1xyXG5cclxuLy8gTmF2aWdhdGlvblxyXG4oZnVuY3Rpb24oJCkge1xyXG5cclxuXHQndXNlIHN0cmljdCc7XHJcblxyXG5cdHZhciAkaXRlbXMgPSAkKCAnLm5hdi1tYWluIGxpLm5hdi1wYXJlbnQnICk7XHJcblxyXG5cdGZ1bmN0aW9uIGV4cGFuZCggJGxpICkge1xyXG5cdFx0JGxpLmNoaWxkcmVuKCAndWwubmF2LWNoaWxkcmVuJyApLnNsaWRlRG93biggJ2Zhc3QnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0JGxpLmFkZENsYXNzKCAnbmF2LWV4cGFuZGVkJyApO1xyXG5cdFx0XHQkKHRoaXMpLmNzcyggJ2Rpc3BsYXknLCAnJyApO1xyXG5cdFx0XHRlbnN1cmVWaXNpYmxlKCAkbGkgKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gY29sbGFwc2UoICRsaSApIHtcclxuXHRcdCRsaS5jaGlsZHJlbigndWwubmF2LWNoaWxkcmVuJyApLnNsaWRlVXAoICdmYXN0JywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQodGhpcykuY3NzKCAnZGlzcGxheScsICcnICk7XHJcblx0XHRcdCRsaS5yZW1vdmVDbGFzcyggJ25hdi1leHBhbmRlZCcgKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZW5zdXJlVmlzaWJsZSggJGxpICkge1xyXG5cdFx0dmFyIHNjcm9sbGVyID0gJGxpLm9mZnNldFBhcmVudCgpO1xyXG5cdFx0aWYgKCAhc2Nyb2xsZXIuZ2V0KDApICkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIHRvcCA9ICRsaS5wb3NpdGlvbigpLnRvcDtcclxuXHRcdGlmICggdG9wIDwgMCApIHtcclxuXHRcdFx0c2Nyb2xsZXIuYW5pbWF0ZSh7XHJcblx0XHRcdFx0c2Nyb2xsVG9wOiBzY3JvbGxlci5zY3JvbGxUb3AoKSArIHRvcFxyXG5cdFx0XHR9LCAnZmFzdCcpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gYnVpbGRTaWRlYmFyTmF2KCBhbmNob3IsIHByZXYsIG5leHQsIGV2ICkge1xyXG5cdFx0aWYgKCBhbmNob3IucHJvcCgnaHJlZicpICkge1xyXG5cdFx0XHR2YXIgYXJyb3dXaWR0aCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGFuY2hvci5nZXQoMCksICc6YWZ0ZXInKS53aWR0aCwgMTApIHx8IDA7XHJcblx0XHRcdGlmIChldi5vZmZzZXRYID4gYW5jaG9yLmdldCgwKS5vZmZzZXRXaWR0aCAtIGFycm93V2lkdGgpIHtcclxuXHRcdFx0XHRldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCBwcmV2LmdldCggMCApICE9PSBuZXh0LmdldCggMCApICkge1xyXG5cdFx0XHRjb2xsYXBzZSggcHJldiApO1xyXG5cdFx0XHRleHBhbmQoIG5leHQgKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbGxhcHNlKCBwcmV2ICk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQkaXRlbXMuZmluZCgnPiBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oIGV2ICkge1xyXG5cclxuXHRcdHZhciAkaHRtbCAgID0gJCgnaHRtbCcpLFxyXG5cdFx0XHQkd2luZG93ID0gJCh3aW5kb3cpLFxyXG5cdFx0ICAgICRhbmNob3IgPSAkKCB0aGlzICksXHJcblx0XHRcdCRwcmV2ICAgPSAkYW5jaG9yLmNsb3Nlc3QoJ3VsLm5hdicpLmZpbmQoJz4gbGkubmF2LWV4cGFuZGVkJyApLFxyXG5cdFx0XHQkbmV4dCAgID0gJGFuY2hvci5jbG9zZXN0KCdsaScpLFxyXG5cdFx0XHQkZXYgICAgID0gZXY7XHJcblxyXG5cdFx0aWYoICRhbmNob3IuYXR0cignaHJlZicpID09ICcjJyApIHtcclxuXHRcdFx0ZXYucHJldmVudERlZmF1bHQoKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiggISRodG1sLmhhc0NsYXNzKCdzaWRlYmFyLWxlZnQtYmlnLWljb25zJykgKSB7XHJcblx0XHRcdGJ1aWxkU2lkZWJhck5hdiggJGFuY2hvciwgJHByZXYsICRuZXh0LCAkZXYgKTtcclxuXHRcdH0gZWxzZSBpZiggJGh0bWwuaGFzQ2xhc3MoJ3NpZGViYXItbGVmdC1iaWctaWNvbnMnKSAmJiAkd2luZG93LndpZHRoKCkgPCA3NjggKSB7XHJcblx0XHRcdGJ1aWxkU2lkZWJhck5hdiggJGFuY2hvciwgJHByZXYsICRuZXh0LCAkZXYgKTtcclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG5cdC8vIENocm9tZSBGaXhcclxuXHQkLmJyb3dzZXIuY2hyb21lID0gL2Nocm9tKGV8aXVtKS8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpO1xyXG5cdGlmKCAkLmJyb3dzZXIuY2hyb21lICYmICEkLmJyb3dzZXIubW9iaWxlICkge1xyXG5cdFx0dmFyIGZsYWcgPSB0cnVlO1xyXG5cdFx0JCgnLnNpZGViYXItbGVmdCAubmF2LW1haW4gbGkgYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblx0XHRcdGZsYWcgPSBmYWxzZTtcclxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cdFx0XHRcdGZsYWcgPSB0cnVlO1xyXG5cdFx0XHR9LCAyMDApO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0JCgnLm5hbm8nKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKGUpe1xyXG5cdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdob3ZlcmVkJyk7XHJcblx0XHR9KTtcclxuXHJcblx0XHQkKCcubmFubycpLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oZSl7XHJcblx0XHRcdGlmKCBmbGFnICkge1xyXG5cdFx0XHRcdCQodGhpcykucmVtb3ZlQ2xhc3MoJ2hvdmVyZWQnKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHRcclxuXHR9XHJcblxyXG5cdCQoJy5uYXYtbWFpbiBhJykuZmlsdGVyKCc6bm90KFtocmVmXSknKS5hdHRyKCdocmVmJywgJyMnKTtcclxuXHJcbn0pLmFwcGx5KHRoaXMsIFtqUXVlcnldKTtcclxuXHJcbi8vIFNrZWxldG9uXHJcbihmdW5jdGlvbih0aGVtZSwgJCkge1xyXG5cclxuXHQndXNlIHN0cmljdCc7XHJcblxyXG5cdHRoZW1lID0gdGhlbWUgfHwge307XHJcblxyXG5cdHZhciAkYm9keVx0XHRcdFx0PSAkKCAnYm9keScgKSxcclxuXHRcdCRodG1sXHRcdFx0XHQ9ICQoICdodG1sJyApLFxyXG5cdFx0JHdpbmRvd1x0XHRcdFx0PSAkKCB3aW5kb3cgKSxcclxuXHRcdGlzQW5kcm9pZFx0XHRcdD0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2FuZHJvaWQnKSA+IC0xLFxyXG5cdFx0aXNJcGFkICAgICAgXHRcdD0gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBhZC9pKSAhPSBudWxsLFxyXG5cdFx0dXBkYXRpbmdOYW5vU2Nyb2xsICA9IGZhbHNlO1xyXG5cclxuXHQvLyBtb2JpbGUgZGV2aWNlcyB3aXRoIGZpeGVkIGhhcyBhIGxvdCBvZiBpc3N1ZXMgd2hlbiBmb2N1cyBpbnB1dHMgYW5kIG90aGVycy4uLlxyXG5cdGlmICggdHlwZW9mICQuYnJvd3NlciAhPT0gJ3VuZGVmaW5lZCcgJiYgJC5icm93c2VyLm1vYmlsZSAmJiAkaHRtbC5oYXNDbGFzcygnZml4ZWQnKSApIHtcclxuXHRcdCRodG1sLnJlbW92ZUNsYXNzKCAnZml4ZWQnICkuYWRkQ2xhc3MoICdzY3JvbGwnICk7XHJcblx0fVxyXG5cclxuXHR2YXIgU2tlbGV0b24gPSB7XHJcblxyXG5cdFx0b3B0aW9uczoge1xyXG5cdFx0XHRzaWRlYmFyczoge1xyXG5cdFx0XHRcdG1lbnU6ICcjY29udGVudC1tZW51JyxcclxuXHRcdFx0XHRsZWZ0OiAnI3NpZGViYXItbGVmdCcsXHJcblx0XHRcdFx0cmlnaHQ6ICcjc2lkZWJhci1yaWdodCdcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblx0XHRjdXN0b21TY3JvbGw6ICggIU1vZGVybml6ci5vdmVyZmxvd3Njcm9sbGluZyAmJiAhaXNBbmRyb2lkICYmICQuZm4ubmFub1Njcm9sbGVyICE9PSAndW5kZWZpbmVkJyksXHJcblxyXG5cdFx0aW5pdGlhbGl6ZTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRoaXNcclxuXHRcdFx0XHQuc2V0VmFycygpXHJcblx0XHRcdFx0LmJ1aWxkKClcclxuXHRcdFx0XHQuZXZlbnRzKCk7XHJcblx0XHR9LFxyXG5cclxuXHRcdHNldFZhcnM6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR0aGlzLnNpZGViYXJzID0ge307XHJcblxyXG5cdFx0XHR0aGlzLnNpZGViYXJzLmxlZnQgPSB7XHJcblx0XHRcdFx0JGVsOiAkKCB0aGlzLm9wdGlvbnMuc2lkZWJhcnMubGVmdCApXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHR0aGlzLnNpZGViYXJzLnJpZ2h0ID0ge1xyXG5cdFx0XHRcdCRlbDogJCggdGhpcy5vcHRpb25zLnNpZGViYXJzLnJpZ2h0ICksXHJcblx0XHRcdFx0aXNPcGVuZWQ6ICRodG1sLmhhc0NsYXNzKCAnc2lkZWJhci1yaWdodC1vcGVuZWQnIClcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHRoaXMuc2lkZWJhcnMubWVudSA9IHtcclxuXHRcdFx0XHQkZWw6ICQoIHRoaXMub3B0aW9ucy5zaWRlYmFycy5tZW51ICksXHJcblx0XHRcdFx0aXNPcGVuZWQ6ICRodG1sLmhhc0NsYXNzKCAnaW5uZXItbWVudS1vcGVuZWQnIClcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRidWlsZDogZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHRpZiAoIHR5cGVvZiAkLmJyb3dzZXIgIT09ICd1bmRlZmluZWQnICYmICQuYnJvd3Nlci5tb2JpbGUgKSB7XHJcblx0XHRcdFx0JGh0bWwuYWRkQ2xhc3MoICdtb2JpbGUtZGV2aWNlJyApO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdCRodG1sLmFkZENsYXNzKCAnbm8tbW9iaWxlLWRldmljZScgKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0JGh0bWwuYWRkQ2xhc3MoICdjdXN0b20tc2Nyb2xsJyApO1xyXG5cdFx0XHRpZiAoIHRoaXMuY3VzdG9tU2Nyb2xsICkge1xyXG5cdFx0XHRcdHRoaXMuYnVpbGRTaWRlYmFyTGVmdCgpO1xyXG5cdFx0XHRcdHRoaXMuYnVpbGRDb250ZW50TWVudSgpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiggaXNJcGFkICkge1xyXG5cdFx0XHRcdHRoaXMuZml4SXBhZCgpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLmJ1aWxkU2lkZWJhclJpZ2h0KCk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0ZXZlbnRzOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0aWYgKCB0aGlzLmN1c3RvbVNjcm9sbCApIHtcclxuXHRcdFx0XHR0aGlzLmV2ZW50c1NpZGViYXJMZWZ0KCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuZXZlbnRzU2lkZWJhclJpZ2h0KCk7XHJcblx0XHRcdHRoaXMuZXZlbnRzQ29udGVudE1lbnUoKTtcclxuXHJcblx0XHRcdGlmICggdHlwZW9mICQuYnJvd3NlciAhPT0gJ3VuZGVmaW5lZCcgJiYgIXRoaXMuY3VzdG9tU2Nyb2xsICYmIGlzQW5kcm9pZCApIHtcclxuXHRcdFx0XHR0aGlzLmZpeFNjcm9sbCgpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0Zml4U2Nyb2xsOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIF9zZWxmID0gdGhpcztcclxuXHJcblx0XHRcdCR3aW5kb3dcclxuXHRcdFx0XHQub24oICdzaWRlYmFyLWxlZnQtb3BlbmVkIHNpZGViYXItcmlnaHQtdG9nZ2xlJywgZnVuY3Rpb24oIGUsIGRhdGEgKSB7XHJcblx0XHRcdFx0XHRfc2VsZi5wcmV2ZW50Qm9keVNjcm9sbFRvZ2dsZSggZGF0YS5hZGRlZCApO1xyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdH0sXHJcblxyXG5cdFx0Zml4SXBhZDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBfc2VsZiA9IHRoaXM7XHJcblxyXG5cdFx0XHQkKCcuaGVhZGVyLCAucGFnZS1oZWFkZXIsIC5jb250ZW50LWJvZHknKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cdFx0XHRcdCRodG1sLnJlbW92ZUNsYXNzKCdzaWRlYmFyLWxlZnQtb3BlbmVkJyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHJcblx0XHRidWlsZFNpZGViYXJMZWZ0OiBmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdHZhciBpbml0aWFsUG9zaXRpb24gPSAwO1xyXG5cclxuXHRcdFx0dGhpcy5zaWRlYmFycy5sZWZ0LmlzT3BlbmVkID0gISRodG1sLmhhc0NsYXNzKCAnc2lkZWJhci1sZWZ0LWNvbGxhcHNlZCcgKSB8fCAkaHRtbC5oYXNDbGFzcyggJ3NpZGViYXItbGVmdC1vcGVuZWQnICk7XHJcblxyXG5cdFx0XHR0aGlzLnNpZGViYXJzLmxlZnQuJG5hbm8gPSB0aGlzLnNpZGViYXJzLmxlZnQuJGVsLmZpbmQoICcubmFubycgKTtcclxuXHJcblx0XHRcdGlmICh0eXBlb2YgbG9jYWxTdG9yYWdlICE9PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHRcdHRoaXMuc2lkZWJhcnMubGVmdC4kbmFuby5vbigndXBkYXRlJywgZnVuY3Rpb24oZSwgdmFsdWVzKSB7XHJcblx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2lkZWJhci1sZWZ0LXBvc2l0aW9uJywgdmFsdWVzLnBvc2l0aW9uKTtcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0aWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzaWRlYmFyLWxlZnQtcG9zaXRpb24nKSAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0aW5pdGlhbFBvc2l0aW9uID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NpZGViYXItbGVmdC1wb3NpdGlvbicpO1xyXG5cdFx0XHRcdFx0dGhpcy5zaWRlYmFycy5sZWZ0LiRlbC5maW5kKCAnLm5hbm8tY29udGVudCcpLnNjcm9sbFRvcChpbml0aWFsUG9zaXRpb24pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5zaWRlYmFycy5sZWZ0LiRuYW5vLm5hbm9TY3JvbGxlcih7XHJcblx0XHRcdFx0c2Nyb2xsVG9wOiBpbml0aWFsUG9zaXRpb24sXHJcblx0XHRcdFx0YWx3YXlzVmlzaWJsZTogdHJ1ZSxcclxuXHRcdFx0XHRwcmV2ZW50UGFnZVNjcm9sbGluZzogJGh0bWwuaGFzQ2xhc3MoICdmaXhlZCcgKVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRldmVudHNTaWRlYmFyTGVmdDogZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHR2YXIgX3NlbGYgPSB0aGlzLFxyXG5cdFx0XHRcdCRuYW5vID0gdGhpcy5zaWRlYmFycy5sZWZ0LiRuYW5vO1xyXG5cclxuXHRcdFx0dmFyIG9wZW4gPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRpZiAoIF9zZWxmLnNpZGViYXJzLmxlZnQuaXNPcGVuZWQgKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gY2xvc2UoKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdF9zZWxmLnNpZGViYXJzLmxlZnQuaXNPcGVuZWQgPSB0cnVlO1xyXG5cclxuXHRcdFx0XHQkaHRtbC5hZGRDbGFzcyggJ3NpZGViYXItbGVmdC1vcGVuZWQnICk7XHJcblxyXG5cdFx0XHRcdCR3aW5kb3cudHJpZ2dlciggJ3NpZGViYXItbGVmdC10b2dnbGUnLCB7XHJcblx0XHRcdFx0XHRhZGRlZDogdHJ1ZSxcclxuXHRcdFx0XHRcdHJlbW92ZWQ6IGZhbHNlXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdCRodG1sLm9uKCAnY2xpY2suY2xvc2UtbGVmdC1zaWRlYmFyJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdFx0XHRcdGNsb3NlKGUpO1xyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHR2YXIgY2xvc2UgPSBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0aWYgKCAhIWUgJiYgISFlLnRhcmdldCAmJiAoJChlLnRhcmdldCkuY2xvc2VzdCggJy5zaWRlYmFyLWxlZnQnICkuZ2V0KDApIHx8ICEkKGUudGFyZ2V0KS5jbG9zZXN0KCAnaHRtbCcgKS5nZXQoMCkpICkge1xyXG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0JGh0bWwucmVtb3ZlQ2xhc3MoICdzaWRlYmFyLWxlZnQtb3BlbmVkJyApO1xyXG5cdFx0XHRcdFx0JGh0bWwub2ZmKCAnY2xpY2suY2xvc2UtbGVmdC1zaWRlYmFyJyApO1xyXG5cclxuXHRcdFx0XHRcdCR3aW5kb3cudHJpZ2dlciggJ3NpZGViYXItbGVmdC10b2dnbGUnLCB7XHJcblx0XHRcdFx0XHRcdGFkZGVkOiBmYWxzZSxcclxuXHRcdFx0XHRcdFx0cmVtb3ZlZDogdHJ1ZVxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0X3NlbGYuc2lkZWJhcnMubGVmdC5pc09wZW5lZCA9ICEkaHRtbC5oYXNDbGFzcyggJ3NpZGViYXItbGVmdC1jb2xsYXBzZWQnICk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHZhciB1cGRhdGVOYW5vU2Nyb2xsID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0aWYgKHVwZGF0aW5nTmFub1Njcm9sbCkge1xyXG5cdFx0XHRcdFx0aWYgKCAkLnN1cHBvcnQudHJhbnNpdGlvbiApIHtcclxuXHRcdFx0XHRcdFx0JG5hbm8ubmFub1Njcm9sbGVyKCk7XHJcblx0XHRcdFx0XHRcdCRuYW5vXHJcblx0XHRcdFx0XHRcdFx0Lm9uZSgnYnNUcmFuc2l0aW9uRW5kJywgdXBkYXRlTmFub1Njcm9sbClcclxuXHRcdFx0XHRcdFx0XHQuZW11bGF0ZVRyYW5zaXRpb25FbmQoMTUwKVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dXBkYXRlTmFub1Njcm9sbCgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHVwZGF0aW5nTmFub1Njcm9sbCA9IHRydWU7XHJcblxyXG5cdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0dXBkYXRpbmdOYW5vU2Nyb2xsID0gZmFsc2U7XHJcblx0XHRcdFx0XHR9LCAyMDApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHZhciBpc1RvZ2dsZXIgPSBmdW5jdGlvbiggZWxlbWVudCApIHtcclxuXHRcdFx0XHRyZXR1cm4gJChlbGVtZW50KS5kYXRhKCdmaXJlLWV2ZW50JykgPT09ICdzaWRlYmFyLWxlZnQtdG9nZ2xlJyB8fCAkKGVsZW1lbnQpLnBhcmVudHMoKS5kYXRhKCdmaXJlLWV2ZW50JykgPT09ICdzaWRlYmFyLWxlZnQtdG9nZ2xlJztcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHRoaXMuc2lkZWJhcnMubGVmdC4kZWxcclxuXHRcdFx0XHQub24oICdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0dXBkYXRlTmFub1Njcm9sbCgpO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0Lm9uKCd0b3VjaGVuZCcsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcdF9zZWxmLnNpZGViYXJzLmxlZnQuaXNPcGVuZWQgPSAhJGh0bWwuaGFzQ2xhc3MoICdzaWRlYmFyLWxlZnQtY29sbGFwc2VkJyApIHx8ICRodG1sLmhhc0NsYXNzKCAnc2lkZWJhci1sZWZ0LW9wZW5lZCcgKTtcclxuXHRcdFx0XHRcdGlmICggIV9zZWxmLnNpZGViYXJzLmxlZnQuaXNPcGVuZWQgJiYgIWlzVG9nZ2xlcihlLnRhcmdldCkgKSB7XHJcblx0XHRcdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRcdFx0b3BlbigpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0JG5hbm9cclxuXHRcdFx0XHQub24oICdtb3VzZWVudGVyJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRpZiAoICRodG1sLmhhc0NsYXNzKCAnc2lkZWJhci1sZWZ0LWNvbGxhcHNlZCcgKSApIHtcclxuXHRcdFx0XHRcdFx0JG5hbm8ubmFub1Njcm9sbGVyKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQub24oICdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRpZiAoICRodG1sLmhhc0NsYXNzKCAnc2lkZWJhci1sZWZ0LWNvbGxhcHNlZCcgKSApIHtcclxuXHRcdFx0XHRcdFx0JG5hbm8ubmFub1Njcm9sbGVyKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHQkd2luZG93Lm9uKCAnc2lkZWJhci1sZWZ0LXRvZ2dsZScsIGZ1bmN0aW9uKGUsIHRvZ2dsZSkge1xyXG5cdFx0XHRcdGlmICggdG9nZ2xlLnJlbW92ZWQgKSB7XHJcblx0XHRcdFx0XHQkaHRtbC5yZW1vdmVDbGFzcyggJ3NpZGViYXItbGVmdC1vcGVuZWQnICk7XHJcblx0XHRcdFx0XHQkaHRtbC5vZmYoICdjbGljay5jbG9zZS1sZWZ0LXNpZGViYXInICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8vIFJlY2FsY3VsYXRlIE93bCBDYXJvdXNlbCBzaXplc1xyXG5cdFx0XHRcdCQoJy5vd2wtY2Fyb3VzZWwnKS50cmlnZ2VyKCdyZWZyZXNoLm93bC5jYXJvdXNlbCcpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRidWlsZFNpZGViYXJSaWdodDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMuc2lkZWJhcnMucmlnaHQuaXNPcGVuZWQgPSAkaHRtbC5oYXNDbGFzcyggJ3NpZGViYXItcmlnaHQtb3BlbmVkJyApO1xyXG5cclxuXHRcdFx0aWYgKCB0aGlzLmN1c3RvbVNjcm9sbCApIHtcclxuXHRcdFx0XHR0aGlzLnNpZGViYXJzLnJpZ2h0LiRuYW5vID0gdGhpcy5zaWRlYmFycy5yaWdodC4kZWwuZmluZCggJy5uYW5vJyApO1xyXG5cclxuXHRcdFx0XHR0aGlzLnNpZGViYXJzLnJpZ2h0LiRuYW5vLm5hbm9TY3JvbGxlcih7XHJcblx0XHRcdFx0XHRhbHdheXNWaXNpYmxlOiB0cnVlLFxyXG5cdFx0XHRcdFx0cHJldmVudFBhZ2VTY3JvbGxpbmc6IHRydWVcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdGV2ZW50c1NpZGViYXJSaWdodDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBfc2VsZiA9IHRoaXM7XHJcblxyXG5cdFx0XHR2YXIgb3BlbiA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGlmICggX3NlbGYuc2lkZWJhcnMucmlnaHQuaXNPcGVuZWQgKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gY2xvc2UoKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdF9zZWxmLnNpZGViYXJzLnJpZ2h0LmlzT3BlbmVkID0gdHJ1ZTtcclxuXHJcblx0XHRcdFx0JGh0bWwuYWRkQ2xhc3MoICdzaWRlYmFyLXJpZ2h0LW9wZW5lZCcgKTtcclxuXHJcblx0XHRcdFx0JHdpbmRvdy50cmlnZ2VyKCAnc2lkZWJhci1yaWdodC10b2dnbGUnLCB7XHJcblx0XHRcdFx0XHRhZGRlZDogdHJ1ZSxcclxuXHRcdFx0XHRcdHJlbW92ZWQ6IGZhbHNlXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdCRodG1sLm9uKCAnY2xpY2suY2xvc2UtcmlnaHQtc2lkZWJhcicsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdFx0XHRjbG9zZShlKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHZhciBjbG9zZSA9IGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRpZiAoICEhZSAmJiAhIWUudGFyZ2V0ICYmICgkKGUudGFyZ2V0KS5jbG9zZXN0KCAnLnNpZGViYXItcmlnaHQnICkuZ2V0KDApIHx8ICEkKGUudGFyZ2V0KS5jbG9zZXN0KCAnaHRtbCcgKS5nZXQoMCkpICkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0JGh0bWwucmVtb3ZlQ2xhc3MoICdzaWRlYmFyLXJpZ2h0LW9wZW5lZCcgKTtcclxuXHRcdFx0XHQkaHRtbC5vZmYoICdjbGljay5jbG9zZS1yaWdodC1zaWRlYmFyJyApO1xyXG5cclxuXHRcdFx0XHQkd2luZG93LnRyaWdnZXIoICdzaWRlYmFyLXJpZ2h0LXRvZ2dsZScsIHtcclxuXHRcdFx0XHRcdGFkZGVkOiBmYWxzZSxcclxuXHRcdFx0XHRcdHJlbW92ZWQ6IHRydWVcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0X3NlbGYuc2lkZWJhcnMucmlnaHQuaXNPcGVuZWQgPSBmYWxzZTtcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHZhciBiaW5kID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0JCgnW2RhdGEtb3Blbj1cInNpZGViYXItcmlnaHRcIl0nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0XHR2YXIgJGVsID0gJCh0aGlzKTtcclxuXHRcdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCAkZWwuaXMoJ2EnKSApXHJcblx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdFx0XHRvcGVuKCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHR0aGlzLnNpZGViYXJzLnJpZ2h0LiRlbC5maW5kKCAnLm1vYmlsZS1jbG9zZScgKVxyXG5cdFx0XHRcdC5vbiggJ2NsaWNrJywgZnVuY3Rpb24oIGUgKSB7XHJcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0XHQkaHRtbC50cmlnZ2VyKCAnY2xpY2suY2xvc2UtcmlnaHQtc2lkZWJhcicgKTtcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdGJpbmQoKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRidWlsZENvbnRlbnRNZW51OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0aWYgKCAhJGh0bWwuaGFzQ2xhc3MoICdmaXhlZCcgKSApIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuc2lkZWJhcnMubWVudS4kbmFubyA9IHRoaXMuc2lkZWJhcnMubWVudS4kZWwuZmluZCggJy5uYW5vJyApO1xyXG5cclxuXHRcdFx0dGhpcy5zaWRlYmFycy5tZW51LiRuYW5vLm5hbm9TY3JvbGxlcih7XHJcblx0XHRcdFx0YWx3YXlzVmlzaWJsZTogdHJ1ZSxcclxuXHRcdFx0XHRwcmV2ZW50UGFnZVNjcm9sbGluZzogdHJ1ZVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRldmVudHNDb250ZW50TWVudTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBfc2VsZiA9IHRoaXM7XHJcblxyXG5cdFx0XHR2YXIgb3BlbiA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGlmICggX3NlbGYuc2lkZWJhcnMubWVudS5pc09wZW5lZCApIHtcclxuXHRcdFx0XHRcdHJldHVybiBjbG9zZSgpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0X3NlbGYuc2lkZWJhcnMubWVudS5pc09wZW5lZCA9IHRydWU7XHJcblxyXG5cdFx0XHRcdCRodG1sLmFkZENsYXNzKCAnaW5uZXItbWVudS1vcGVuZWQnICk7XHJcblxyXG5cdFx0XHRcdCR3aW5kb3cudHJpZ2dlciggJ2lubmVyLW1lbnUtdG9nZ2xlJywge1xyXG5cdFx0XHRcdFx0YWRkZWQ6IHRydWUsXHJcblx0XHRcdFx0XHRyZW1vdmVkOiBmYWxzZVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHQkaHRtbC5vbiggJ2NsaWNrLmNsb3NlLWlubmVyLW1lbnUnLCBmdW5jdGlvbihlKSB7XHJcblxyXG5cdFx0XHRcdFx0Y2xvc2UoZSk7XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0dmFyIGNsb3NlID0gZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdHZhciBoYXNFdmVudCxcclxuXHRcdFx0XHRcdGhhc1RhcmdldCxcclxuXHRcdFx0XHRcdGlzQ29sbGFwc2VCdXR0b24sXHJcblx0XHRcdFx0XHRpc0luc2lkZU1vZGFsLFxyXG5cdFx0XHRcdFx0aXNJbnNpZGVJbm5lck1lbnUsXHJcblx0XHRcdFx0XHRpc0luc2lkZUhUTUwsXHJcblx0XHRcdFx0XHQkdGFyZ2V0O1xyXG5cclxuXHRcdFx0XHRoYXNFdmVudCA9ICEhZTtcclxuXHRcdFx0XHRoYXNUYXJnZXQgPSBoYXNFdmVudCAmJiAhIWUudGFyZ2V0O1xyXG5cclxuXHRcdFx0XHRpZiAoIGhhc1RhcmdldCApIHtcclxuXHRcdFx0XHRcdCR0YXJnZXQgPSAkKGUudGFyZ2V0KTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlzQ29sbGFwc2VCdXR0b24gPSBoYXNUYXJnZXQgJiYgISEkdGFyZ2V0LmNsb3Nlc3QoICcuaW5uZXItbWVudS1jb2xsYXBzZScgKS5nZXQoMCk7XHJcblx0XHRcdFx0aXNJbnNpZGVNb2RhbCA9IGhhc1RhcmdldCAmJiAhISR0YXJnZXQuY2xvc2VzdCggJy5tZnAtd3JhcCcgKS5nZXQoMCk7XHJcblx0XHRcdFx0aXNJbnNpZGVJbm5lck1lbnUgPSBoYXNUYXJnZXQgJiYgISEkdGFyZ2V0LmNsb3Nlc3QoICcuaW5uZXItbWVudScgKS5nZXQoMCk7XHJcblx0XHRcdFx0aXNJbnNpZGVIVE1MID0gaGFzVGFyZ2V0ICYmICEhJHRhcmdldC5jbG9zZXN0KCAnaHRtbCcgKS5nZXQoMCk7XHJcblxyXG5cdFx0XHRcdGlmICggKCFpc0NvbGxhcHNlQnV0dG9uICYmIChpc0luc2lkZUlubmVyTWVudSB8fCAhaXNJbnNpZGVIVE1MKSkgfHwgaXNJbnNpZGVNb2RhbCApIHtcclxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG5cdFx0XHRcdCRodG1sLnJlbW92ZUNsYXNzKCAnaW5uZXItbWVudS1vcGVuZWQnICk7XHJcblx0XHRcdFx0JGh0bWwub2ZmKCAnY2xpY2suY2xvc2UtaW5uZXItbWVudScgKTtcclxuXHJcblx0XHRcdFx0JHdpbmRvdy50cmlnZ2VyKCAnaW5uZXItbWVudS10b2dnbGUnLCB7XHJcblx0XHRcdFx0XHRhZGRlZDogZmFsc2UsXHJcblx0XHRcdFx0XHRyZW1vdmVkOiB0cnVlXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdF9zZWxmLnNpZGViYXJzLm1lbnUuaXNPcGVuZWQgPSBmYWxzZTtcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHZhciBiaW5kID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0JCgnW2RhdGEtb3Blbj1cImlubmVyLW1lbnVcIl0nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0XHR2YXIgJGVsID0gJCh0aGlzKTtcclxuXHRcdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCAkZWwuaXMoJ2EnKSApXHJcblx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdFx0XHRvcGVuKCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRiaW5kKCk7XHJcblxyXG5cdFx0XHQvKiBOYW5vIFNjcm9sbCAqL1xyXG5cdFx0XHRpZiAoICRodG1sLmhhc0NsYXNzKCAnZml4ZWQnICkgKSB7XHJcblx0XHRcdFx0dmFyICRuYW5vID0gdGhpcy5zaWRlYmFycy5tZW51LiRuYW5vO1xyXG5cclxuXHRcdFx0XHR2YXIgdXBkYXRlTmFub1Njcm9sbCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0aWYgKCAkLnN1cHBvcnQudHJhbnNpdGlvbiApIHtcclxuXHRcdFx0XHRcdFx0JG5hbm8ubmFub1Njcm9sbGVyKCk7XHJcblx0XHRcdFx0XHRcdCRuYW5vXHJcblx0XHRcdFx0XHRcdFx0Lm9uZSgnYnNUcmFuc2l0aW9uRW5kJywgdXBkYXRlTmFub1Njcm9sbClcclxuXHRcdFx0XHRcdFx0XHQuZW11bGF0ZVRyYW5zaXRpb25FbmQoMTUwKVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dXBkYXRlTmFub1Njcm9sbCgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH07XHJcblxyXG5cdFx0XHRcdHRoaXMuc2lkZWJhcnMubWVudS4kZWxcclxuXHRcdFx0XHRcdC5vbiggJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdHVwZGF0ZU5hbm9TY3JvbGwoKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0cHJldmVudEJvZHlTY3JvbGxUb2dnbGU6IGZ1bmN0aW9uKCBzaG91bGRQcmV2ZW50LCAkZWwgKSB7XHJcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0aWYgKCBzaG91bGRQcmV2ZW50ICkge1xyXG5cdFx0XHRcdFx0JGJvZHlcclxuXHRcdFx0XHRcdFx0LmRhdGEoICdzY3JvbGxUb3AnLCAkYm9keS5nZXQoMCkuc2Nyb2xsVG9wIClcclxuXHRcdFx0XHRcdFx0LmNzcyh7XHJcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246ICdmaXhlZCcsXHJcblx0XHRcdFx0XHRcdFx0dG9wOiAkYm9keS5nZXQoMCkuc2Nyb2xsVG9wICogLTFcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0JGJvZHlcclxuXHRcdFx0XHRcdFx0LmNzcyh7XHJcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246ICcnLFxyXG5cdFx0XHRcdFx0XHRcdHRvcDogJydcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0LnNjcm9sbFRvcCggJGJvZHkuZGF0YSggJ3Njcm9sbFRvcCcgKSApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSwgMTUwKTtcclxuXHRcdH1cclxuXHJcblx0fTtcclxuXHJcblx0Ly8gZXhwb3NlIHRvIHNjb3BlXHJcblx0JC5leHRlbmQodGhlbWUsIHtcclxuXHRcdFNrZWxldG9uOiBTa2VsZXRvblxyXG5cdH0pO1xyXG5cclxufSkuYXBwbHkodGhpcywgW3dpbmRvdy50aGVtZSwgalF1ZXJ5XSk7XHJcblxyXG4vLyBUYWIgTmF2aWdhdGlvblxyXG4oZnVuY3Rpb24oJCkge1xyXG5cclxuXHQndXNlIHN0cmljdCc7XHJcblxyXG5cdGlmKCAkKCdodG1sLmhhcy10YWItbmF2aWdhdGlvbicpLmdldCgwKSApIHtcclxuXHJcblx0XHR2YXIgJHdpbmRvdyBcdCBcdCAgPSAkKCB3aW5kb3cgKSxcclxuXHRcdFx0JHRvZ2dsZU1lbnVCdXR0b24gPSAkKCcudG9nZ2xlLW1lbnUnKSxcclxuXHRcdFx0JG5hdkFjdGl2ZSAgIFx0ICA9ICQoJy50YWItbmF2aWdhdGlvbiBuYXYgPiB1bCAubmF2LWFjdGl2ZScpLFxyXG5cdFx0XHQkdGFiTmF2ICAgICAgXHQgID0gJCgnLnRhYi1uYXZpZ2F0aW9uJyksXHJcblx0XHRcdCR0YWJJdGVtIFx0IFx0ICA9ICQoJy50YWItbmF2aWdhdGlvbiBuYXYgPiB1bCA+IGxpIGEnKSxcclxuXHRcdFx0JGNvbnRlbnRCb2R5IFx0ICA9ICQoJy5jb250ZW50LWJvZHknKTtcclxuXHJcblx0XHQkdGFiSXRlbS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHRcdFx0aWYoICQodGhpcykucGFyZW50KCkuaGFzQ2xhc3MoJ2Ryb3Bkb3duJykgfHwgJCh0aGlzKS5wYXJlbnQoKS5oYXNDbGFzcygnZHJvcGRvd24tc3VibWVudScpICkge1xyXG5cdFx0XHRcdGlmKCAkd2luZG93LndpZHRoKCkgPCA5OTIgKSB7XHJcblx0XHRcdFx0XHRpZiggJCh0aGlzKS5wYXJlbnQoKS5oYXNDbGFzcygnbmF2LWV4cGFuZGVkJykgKSB7XHJcblx0XHRcdFx0XHRcdCQodGhpcykuY2xvc2VzdCgnbGknKS5maW5kKCAnPiB1bCcgKS5zbGlkZVVwKCAnZmFzdCcsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdCQodGhpcykuY3NzKCAnZGlzcGxheScsICcnICk7XHJcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS5jbG9zZXN0KCdsaScpLnJlbW92ZUNsYXNzKCAnbmF2LWV4cGFuZGVkJyApO1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGlmKCAkKHRoaXMpLnBhcmVudCgpLmhhc0NsYXNzKCdkcm9wZG93bicpICkge1xyXG5cdFx0XHRcdFx0XHRcdCR0YWJJdGVtLnBhcmVudCgpLnJlbW92ZUNsYXNzKCduYXYtZXhwYW5kZWQnKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0JCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnZXhwYW5kaW5nJyk7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHQkKHRoaXMpLmNsb3Nlc3QoJ2xpJykuZmluZCggJz4gdWwnICkuc2xpZGVEb3duKCAnZmFzdCcsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdCR0YWJJdGVtLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdleHBhbmRpbmcnKTtcclxuXHRcdFx0XHRcdFx0XHQkKHRoaXMpLmNsb3Nlc3QoJ2xpJykuYWRkQ2xhc3MoICduYXYtZXhwYW5kZWQnICk7XHJcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS5jc3MoICdkaXNwbGF5JywgJycgKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0aWYoICgkKHRoaXMpLnBvc2l0aW9uKCkudG9wICsgJCh0aGlzKS5oZWlnaHQoKSkgPCAkd2luZG93LnNjcm9sbFRvcCgpICkge1xyXG5cdFx0XHRcdFx0XHRcdFx0JCgnaHRtbCxib2R5JykuYW5pbWF0ZSh7IHNjcm9sbFRvcDogJCh0aGlzKS5vZmZzZXQoKS50b3AgLSAxMDAgfSwgMzAwKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRpZiggISQodGhpcykucGFyZW50KCkuaGFzQ2xhc3MoJ2Ryb3Bkb3duJykgKSB7XHJcblx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpZiggJCh0aGlzKS5wYXJlbnQoKS5oYXNDbGFzcygnbmF2LWV4cGFuZGVkJykgKSB7XHJcblx0XHRcdFx0XHRcdCR0YWJJdGVtLnBhcmVudCgpLnJlbW92ZUNsYXNzKCduYXYtZXhwYW5kZWQnKTtcclxuXHRcdFx0XHRcdFx0JGNvbnRlbnRCb2R5LnJlbW92ZUNsYXNzKCd0YWItbWVudS1vcGVuZWQnKTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQkdGFiSXRlbS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnbmF2LWV4cGFuZGVkJyk7XHJcblx0XHRcdFx0XHQkY29udGVudEJvZHkuYWRkQ2xhc3MoJ3RhYi1tZW51LW9wZW5lZCcpO1xyXG5cdFx0XHRcdFx0JCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnbmF2LWV4cGFuZGVkJyk7XHRcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdCR3aW5kb3cub24oJ3Njcm9sbCcsIGZ1bmN0aW9uKCl7XHJcblx0XHRcdGlmKCAkd2luZG93LndpZHRoKCkgPCA5OTIgKSB7XHJcblx0XHRcdFx0dmFyIHRhYk5hdk9mZnNldCA9ICggJHRhYk5hdi5wb3NpdGlvbigpLnRvcCArICR0YWJOYXYuaGVpZ2h0KCkgKSArIDEwMCxcclxuXHRcdFx0XHRcdHdpbmRvd09mZnNldCA9ICR3aW5kb3cuc2Nyb2xsVG9wKCk7XHJcblxyXG5cdFx0XHRcdGlmKCB3aW5kb3dPZmZzZXQgPiB0YWJOYXZPZmZzZXQgKSB7XHJcblx0XHRcdFx0XHQkdGFiTmF2LnJlbW92ZUNsYXNzKCdzaG93Jyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHQkdG9nZ2xlTWVudUJ1dHRvbi5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cdFx0XHRpZiggISR0YWJOYXYuaGFzQ2xhc3MoJ3Nob3cnKSApIHtcclxuXHRcdFx0XHQkKCdodG1sLGJvZHknKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAkdGFiTmF2Lm9mZnNldCgpLnRvcCAtIDUwIH0sIDMwMCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0fVxyXG5cclxufSkuYXBwbHkodGhpcywgW2pRdWVyeV0pO1xyXG5cclxuLyogQnJvd3NlciBTZWxlY3RvciAqL1xyXG4oZnVuY3Rpb24oJCkge1xyXG5cdCQuZXh0ZW5kKHtcclxuXHJcblx0XHRicm93c2VyU2VsZWN0b3I6IGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdFx0Ly8galF1ZXJ5LmJyb3dzZXIubW9iaWxlIChodHRwOi8vZGV0ZWN0bW9iaWxlYnJvd3Nlci5jb20vKVxyXG5cdFx0XHQoZnVuY3Rpb24oYSl7KGpRdWVyeS5icm93c2VyPWpRdWVyeS5icm93c2VyfHx7fSkubW9iaWxlPS8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG1vYmlsZS4rZmlyZWZveHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllcyg0fDYpMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyAoY2V8cGhvbmUpfHhkYXx4aWluby9pLnRlc3QoYSl8fC8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzXFwtKXxhaShrb3xybil8YWwoYXZ8Y2F8Y28pfGFtb2l8YW4oZXh8bnl8eXcpfGFwdHV8YXIoY2h8Z28pfGFzKHRlfHVzKXxhdHR3fGF1KGRpfFxcLW18ciB8cyApfGF2YW58YmUoY2t8bGx8bnEpfGJpKGxifHJkKXxibChhY3xheil8YnIoZXx2KXd8YnVtYnxid1xcLShufHUpfGM1NVxcL3xjYXBpfGNjd2F8Y2RtXFwtfGNlbGx8Y2h0bXxjbGRjfGNtZFxcLXxjbyhtcHxuZCl8Y3Jhd3xkYShpdHxsbHxuZyl8ZGJ0ZXxkY1xcLXN8ZGV2aXxkaWNhfGRtb2J8ZG8oY3xwKW98ZHMoMTJ8XFwtZCl8ZWwoNDl8YWkpfGVtKGwyfHVsKXxlcihpY3xrMCl8ZXNsOHxleihbNC03XTB8b3N8d2F8emUpfGZldGN8Zmx5KFxcLXxfKXxnMSB1fGc1NjB8Z2VuZXxnZlxcLTV8Z1xcLW1vfGdvKFxcLnd8b2QpfGdyKGFkfHVuKXxoYWllfGhjaXR8aGRcXC0obXxwfHQpfGhlaVxcLXxoaShwdHx0YSl8aHAoIGl8aXApfGhzXFwtY3xodChjKFxcLXwgfF98YXxnfHB8c3x0KXx0cCl8aHUoYXd8dGMpfGlcXC0oMjB8Z298bWEpfGkyMzB8aWFjKCB8XFwtfFxcLyl8aWJyb3xpZGVhfGlnMDF8aWtvbXxpbTFrfGlubm98aXBhcXxpcmlzfGphKHR8dilhfGpicm98amVtdXxqaWdzfGtkZGl8a2VqaXxrZ3QoIHxcXC8pfGtsb258a3B0IHxrd2NcXC18a3lvKGN8ayl8bGUobm98eGkpfGxnKCBnfFxcLyhrfGx8dSl8NTB8NTR8XFwtW2Etd10pfGxpYnd8bHlueHxtMVxcLXd8bTNnYXxtNTBcXC98bWEodGV8dWl8eG8pfG1jKDAxfDIxfGNhKXxtXFwtY3J8bWUocmN8cmkpfG1pKG84fG9hfHRzKXxtbWVmfG1vKDAxfDAyfGJpfGRlfGRvfHQoXFwtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSlcXC18b258dGZ8d2Z8d2d8d3QpfG5vayg2fGkpfG56cGh8bzJpbXxvcCh0aXx3dil8b3Jhbnxvd2cxfHA4MDB8cGFuKGF8ZHx0KXxwZHhnfHBnKDEzfFxcLShbMS04XXxjKSl8cGhpbHxwaXJlfHBsKGF5fHVjKXxwblxcLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdFxcLWd8cWFcXC1hfHFjKDA3fDEyfDIxfDMyfDYwfFxcLVsyLTddfGlcXC0pfHF0ZWt8cjM4MHxyNjAwfHJha3N8cmltOXxybyh2ZXx6byl8czU1XFwvfHNhKGdlfG1hfG1tfG1zfG55fHZhKXxzYygwMXxoXFwtfG9vfHBcXC0pfHNka1xcL3xzZShjKFxcLXwwfDEpfDQ3fG1jfG5kfHJpKXxzZ2hcXC18c2hhcnxzaWUoXFwtfG0pfHNrXFwtMHxzbCg0NXxpZCl8c20oYWx8YXJ8YjN8aXR8dDUpfHNvKGZ0fG55KXxzcCgwMXxoXFwtfHZcXC18diApfHN5KDAxfG1iKXx0MigxOHw1MCl8dDYoMDB8MTB8MTgpfHRhKGd0fGxrKXx0Y2xcXC18dGRnXFwtfHRlbChpfG0pfHRpbVxcLXx0XFwtbW98dG8ocGx8c2gpfHRzKDcwfG1cXC18bTN8bTUpfHR4XFwtOXx1cChcXC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118XFwtdil8dm00MHx2b2RhfHZ1bGN8dngoNTJ8NTN8NjB8NjF8NzB8ODB8ODF8ODN8ODV8OTgpfHczYyhcXC18ICl8d2ViY3x3aGl0fHdpKGcgfG5jfG53KXx3bWxifHdvbnV8eDcwMHx5YXNcXC18eW91cnx6ZXRvfHp0ZVxcLS9pLnRlc3QoYS5zdWJzdHIoMCw0KSl9KShuYXZpZ2F0b3IudXNlckFnZW50fHxuYXZpZ2F0b3IudmVuZG9yfHx3aW5kb3cub3BlcmEpO1xyXG5cclxuXHRcdFx0Ly8gVG91Y2hcclxuXHRcdFx0dmFyIGhhc1RvdWNoID0gJ29udG91Y2hzdGFydCcgaW4gd2luZG93IHx8IG5hdmlnYXRvci5tc01heFRvdWNoUG9pbnRzO1xyXG5cclxuXHRcdFx0dmFyIHUgPSBuYXZpZ2F0b3IudXNlckFnZW50LFxyXG5cdFx0XHRcdHVhID0gdS50b0xvd2VyQ2FzZSgpLFxyXG5cdFx0XHRcdGlzID0gZnVuY3Rpb24gKHQpIHtcclxuXHRcdFx0XHRcdHJldHVybiB1YS5pbmRleE9mKHQpID4gLTE7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRnID0gJ2dlY2tvJyxcclxuXHRcdFx0XHR3ID0gJ3dlYmtpdCcsXHJcblx0XHRcdFx0cyA9ICdzYWZhcmknLFxyXG5cdFx0XHRcdG8gPSAnb3BlcmEnLFxyXG5cdFx0XHRcdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXHJcblx0XHRcdFx0YiA9IFsoISgvb3BlcmF8d2VidHYvaS50ZXN0KHVhKSkgJiYgL21zaWVcXHMoXFxkKS8udGVzdCh1YSkpID8gKCdpZSBpZScgKyBwYXJzZUZsb2F0KG5hdmlnYXRvci5hcHBWZXJzaW9uLnNwbGl0KFwiTVNJRVwiKVsxXSkpIDogaXMoJ2ZpcmVmb3gvMicpID8gZyArICcgZmYyJyA6IGlzKCdmaXJlZm94LzMuNScpID8gZyArICcgZmYzIGZmM181JyA6IGlzKCdmaXJlZm94LzMnKSA/IGcgKyAnIGZmMycgOiBpcygnZ2Vja28vJykgPyBnIDogaXMoJ29wZXJhJykgPyBvICsgKC92ZXJzaW9uXFwvKFxcZCspLy50ZXN0KHVhKSA/ICcgJyArIG8gKyBSZWdFeHAualF1ZXJ5MSA6ICgvb3BlcmEoXFxzfFxcLykoXFxkKykvLnRlc3QodWEpID8gJyAnICsgbyArIFJlZ0V4cC5qUXVlcnkyIDogJycpKSA6IGlzKCdrb25xdWVyb3InKSA/ICdrb25xdWVyb3InIDogaXMoJ2Nocm9tZScpID8gdyArICcgY2hyb21lJyA6IGlzKCdpcm9uJykgPyB3ICsgJyBpcm9uJyA6IGlzKCdhcHBsZXdlYmtpdC8nKSA/IHcgKyAnICcgKyBzICsgKC92ZXJzaW9uXFwvKFxcZCspLy50ZXN0KHVhKSA/ICcgJyArIHMgKyBSZWdFeHAualF1ZXJ5MSA6ICcnKSA6IGlzKCdtb3ppbGxhLycpID8gZyA6ICcnLCBpcygnajJtZScpID8gJ21vYmlsZScgOiBpcygnaXBob25lJykgPyAnaXBob25lJyA6IGlzKCdpcG9kJykgPyAnaXBvZCcgOiBpcygnbWFjJykgPyAnbWFjJyA6IGlzKCdkYXJ3aW4nKSA/ICdtYWMnIDogaXMoJ3dlYnR2JykgPyAnd2VidHYnIDogaXMoJ3dpbicpID8gJ3dpbicgOiBpcygnZnJlZWJzZCcpID8gJ2ZyZWVic2QnIDogKGlzKCd4MTEnKSB8fCBpcygnbGludXgnKSkgPyAnbGludXgnIDogJycsICdqcyddO1xyXG5cclxuXHRcdFx0YyA9IGIuam9pbignICcpO1xyXG5cclxuXHRcdFx0aWYgKCQuYnJvd3Nlci5tb2JpbGUpIHtcclxuXHRcdFx0XHRjICs9ICcgbW9iaWxlJztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGhhc1RvdWNoKSB7XHJcblx0XHRcdFx0YyArPSAnIHRvdWNoJztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aC5jbGFzc05hbWUgKz0gJyAnICsgYztcclxuXHJcblx0XHRcdC8vIElFMTEgRGV0ZWN0XHJcblx0XHRcdHZhciBpc0lFMTEgPSAhKHdpbmRvdy5BY3RpdmVYT2JqZWN0KSAmJiBcIkFjdGl2ZVhPYmplY3RcIiBpbiB3aW5kb3c7XHJcblxyXG5cdFx0XHRpZiAoaXNJRTExKSB7XHJcblx0XHRcdFx0JCgnaHRtbCcpLnJlbW92ZUNsYXNzKCdnZWNrbycpLmFkZENsYXNzKCdpZSBpZTExJyk7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBEYXJrIGFuZCBCb3hlZCBDb21wYXRpYmlsaXR5XHJcblx0XHRcdGlmKCQoJ2JvZHknKS5oYXNDbGFzcygnZGFyaycpKSB7XHJcblx0XHRcdFx0JCgnaHRtbCcpLmFkZENsYXNzKCdkYXJrJyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmKCQoJ2JvZHknKS5oYXNDbGFzcygnYm94ZWQnKSkge1xyXG5cdFx0XHRcdCQoJ2h0bWwnKS5hZGRDbGFzcygnYm94ZWQnKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG5cdCQuYnJvd3NlclNlbGVjdG9yKCk7XHJcblxyXG59KShqUXVlcnkpO1xyXG5cclxuLy8gTWFpbGJveFxyXG4oZnVuY3Rpb24odGhlbWUsICQpIHtcclxuXHJcblx0dGhlbWUgPSB0aGVtZSB8fCB7fTtcclxuXHJcblx0dmFyIGluc3RhbmNlTmFtZSA9ICdfX21haWxib3gnO1xyXG5cclxuXHR2YXIgY2FwaXRhbGl6ZVN0cmluZyA9IGZ1bmN0aW9uKCBzdHIgKSB7XHJcbiAgICBcdHJldHVybiBzdHIuY2hhckF0KCAwICkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSggMSApO1xyXG5cdH1cclxuXHJcblx0dmFyIE1haWxib3ggPSBmdW5jdGlvbigkd3JhcHBlcikge1xyXG5cdFx0cmV0dXJuIHRoaXMuaW5pdGlhbGl6ZSgkd3JhcHBlcik7XHJcblx0fTtcclxuXHJcblx0TWFpbGJveC5wcm90b3R5cGUgPSB7XHJcblx0XHRpbml0aWFsaXplOiBmdW5jdGlvbigkd3JhcHBlcikge1xyXG5cdFx0XHRpZiAoICR3cmFwcGVyLmRhdGEoIGluc3RhbmNlTmFtZSApICkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLiR3cmFwcGVyID0gJHdyYXBwZXI7XHJcblxyXG5cdFx0XHR0aGlzXHJcblx0XHRcdFx0LnNldFZhcnMoKVxyXG5cdFx0XHRcdC5zZXREYXRhKClcclxuXHRcdFx0XHQuYnVpbGQoKVxyXG5cdFx0XHRcdC5ldmVudHMoKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzZXRWYXJzOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy52aWV3ID0gY2FwaXRhbGl6ZVN0cmluZyggdGhpcy4kd3JhcHBlci5kYXRhKCAnbWFpbGJveC12aWV3JyApIHx8IFwiXCIgKTtcclxuXHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzZXREYXRhOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy4kd3JhcHBlci5kYXRhKGluc3RhbmNlTmFtZSwgdGhpcyk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0YnVpbGQ6IGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdFx0aWYgKCB0eXBlb2YgdGhpc1sgJ2J1aWxkJyArIHRoaXMudmlldyBdID09PSAnZnVuY3Rpb24nICkge1xyXG5cdFx0XHRcdHRoaXNbICdidWlsZCcgKyB0aGlzLnZpZXcgXS5jYWxsKCB0aGlzICk7XHJcblx0XHRcdH1cclxuXHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblxyXG5cdFx0ZXZlbnRzOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0aWYgKCB0eXBlb2YgdGhpc1sgJ2V2ZW50cycgKyB0aGlzLnZpZXcgXSA9PT0gJ2Z1bmN0aW9uJyApIHtcclxuXHRcdFx0XHR0aGlzWyAnZXZlbnRzJyArIHRoaXMudmlldyBdLmNhbGwoIHRoaXMgKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cclxuXHRcdGJ1aWxkRm9sZGVyOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy4kd3JhcHBlci5maW5kKCcubWFpbGJveC1lbWFpbC1saXN0IC5uYW5vJykubmFub1Njcm9sbGVyKHtcclxuXHRcdFx0XHRhbHdheXNWaXNpYmxlOiB0cnVlLFxyXG5cdFx0XHRcdHByZXZlbnRQYWdlU2Nyb2xsaW5nOiB0cnVlXHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHJcblx0XHRidWlsZEVtYWlsOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy5idWlsZENvbXBvc2VyKCk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGJ1aWxkQ29tcG9zZTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMuYnVpbGRDb21wb3NlcigpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRidWlsZENvbXBvc2VyOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy4kd3JhcHBlci5maW5kKCAnI2NvbXBvc2UtZmllbGQnICkuc3VtbWVybm90ZSh7XHJcblx0XHRcdFx0aGVpZ2h0OiAyNTAsXHJcblx0XHRcdFx0dG9vbGJhcjogW1xyXG5cdFx0XHRcdFx0WydzdHlsZScsIFsnc3R5bGUnXV0sXHJcblx0XHRcdFx0XHRbJ2ZvbnQnLCBbJ2JvbGQnLCAnaXRhbGljJywgJ3VuZGVybGluZScsICdjbGVhciddXSxcclxuXHRcdFx0XHRcdFsnZm9udG5hbWUnLCBbJ2ZvbnRuYW1lJ11dLFxyXG5cdFx0XHRcdFx0Wydjb2xvcicsIFsnY29sb3InXV0sXHJcblx0XHRcdFx0XHRbJ3BhcmEnLCBbJ3VsJywgJ29sJywgJ3BhcmFncmFwaCddXSxcclxuXHRcdFx0XHRcdFsnaGVpZ2h0JywgWydoZWlnaHQnXV0sXHJcblx0XHRcdFx0XHRbJ3RhYmxlJywgWyd0YWJsZSddXSxcclxuXHRcdFx0XHRcdFsnaW5zZXJ0JywgWydsaW5rJywgJ3BpY3R1cmUnLCAndmlkZW8nXV0sXHJcblx0XHRcdFx0XHRbJ3ZpZXcnLCBbJ2Z1bGxzY3JlZW4nXV0sXHJcblx0XHRcdFx0XHRbJ2hlbHAnLCBbJ2hlbHAnXV1cclxuXHRcdFx0XHRdXHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHJcblx0XHRldmVudHNDb21wb3NlOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyICRjb21wb3NlcixcclxuXHRcdFx0XHQkY29udGVudEJvZHksXHJcblx0XHRcdFx0JGh0bWwsXHJcblx0XHRcdFx0JGlubmVyQm9keTtcclxuXHJcblx0XHRcdCRjb21wb3Nlclx0XHQ9ICQoICcubm90ZS1lZGl0YWJsZScgKTtcclxuXHRcdFx0JGNvbnRlbnRCb2R5XHQ9ICQoICcuY29udGVudC1ib2R5JyApO1xyXG5cdFx0XHQkaHRtbFx0XHRcdD0gJCggJ2h0bWwnICk7XHJcblx0XHRcdCRpbm5lckJvZHlcdFx0PSAkKCAnLmlubmVyLWJvZHknICk7XHJcblxyXG5cdFx0XHR2YXIgYWRqdXN0Q29tcG9zZVNpemUgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR2YXIgY29tcG9zZXJIZWlnaHQsXHJcblx0XHRcdFx0XHRjb21wb3NlclRvcCxcclxuXHRcdFx0XHRcdGNvbnRlbnRCb2R5UGFkZGluZ0JvdHRvbSxcclxuXHRcdFx0XHRcdGlubmVyQm9keUhlaWdodCxcclxuXHRcdFx0XHRcdHZpZXdwb3J0SGVpZ2h0LFxyXG5cdFx0XHRcdFx0dmlld3BvcnRXaWR0aDtcclxuXHJcblxyXG5cdFx0XHRcdGNvbnRlbnRCb2R5UGFkZGluZ0JvdHRvbVx0PSBwYXJzZUludCggJGNvbnRlbnRCb2R5LmNzcygncGFkZGluZ0JvdHRvbScpLCAxMCApIHx8IDA7XHJcblx0XHRcdFx0dmlld3BvcnRIZWlnaHRcdFx0XHRcdD0gTWF0aC5tYXgoIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsIHdpbmRvdy5pbm5lckhlaWdodCB8fCAwICk7XHJcblx0XHRcdFx0dmlld3BvcnRXaWR0aFx0XHRcdFx0PSBNYXRoLm1heCggZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLCB3aW5kb3cuaW5uZXJXaWR0aCB8fCAwICk7XHJcblxyXG5cdFx0XHRcdCRjb21wb3Nlci5jc3MoICdoZWlnaHQnLCAnJyApO1xyXG5cclxuXHRcdFx0XHRpZiAoIHZpZXdwb3J0V2lkdGggPCA3NjcgfHwgJGh0bWwuaGFzQ2xhc3MoJ21vYmlsZS1kZXZpY2UnKSApIHtcclxuXHRcdFx0XHRcdGNvbXBvc2VyVG9wXHQgICA9ICRjb21wb3Nlci5vZmZzZXQoKS50b3A7XHJcblx0XHRcdFx0XHRjb21wb3NlckhlaWdodCA9IHZpZXdwb3J0SGVpZ2h0IC0gY29tcG9zZXJUb3A7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGlmICggJGh0bWwuaGFzQ2xhc3MoICdmaXhlZCcgKSApIHtcclxuXHRcdFx0XHRcdFx0Y29tcG9zZXJUb3BcdD0gJGNvbXBvc2VyLm9mZnNldCgpLnRvcDtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGNvbXBvc2VyVG9wXHQ9ICRjb21wb3Nlci5wb3NpdGlvbigpLnRvcDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGNvbXBvc2VySGVpZ2h0ID0gJGlubmVyQm9keS5vdXRlckhlaWdodCgpIC0gY29tcG9zZXJUb3A7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRjb21wb3NlckhlaWdodCAtPSBjb250ZW50Qm9keVBhZGRpbmdCb3R0b207XHJcblxyXG5cdFx0XHRcdCRjb21wb3Nlci5jc3Moe1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiBjb21wb3NlckhlaWdodFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0dmFyIHRpbWVyO1xyXG5cdFx0XHQkKHdpbmRvdylcclxuXHRcdFx0XHQub24oICdyZXNpemUgb3JpZW50YXRpb25jaGFuZ2Ugc2lkZWJhci1sZWZ0LXRvZ2dsZSBtYWlsYm94LXJlY2FsYycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KCB0aW1lciApO1xyXG5cdFx0XHRcdFx0dGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRhZGp1c3RDb21wb3NlU2l6ZSgpO1xyXG5cdFx0XHRcdFx0fSwgMTAwKTtcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdGFkanVzdENvbXBvc2VTaXplKCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Ly8gZXhwb3NlIHRvIHNjb3BlXHJcblx0JC5leHRlbmQodGhlbWUsIHtcclxuXHRcdE1haWxib3g6IE1haWxib3hcclxuXHR9KTtcclxuXHJcblx0Ly8ganF1ZXJ5IHBsdWdpblxyXG5cdCQuZm4udGhlbWVNYWlsYm94ID0gZnVuY3Rpb24ob3B0cykge1xyXG5cdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcblx0XHRcdGlmICgkdGhpcy5kYXRhKGluc3RhbmNlTmFtZSkpIHtcclxuXHRcdFx0XHRyZXR1cm4gJHRoaXMuZGF0YShpbnN0YW5jZU5hbWUpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiBuZXcgTWFpbGJveCgkdGhpcyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG59KS5hcHBseSh0aGlzLCBbd2luZG93LnRoZW1lLCBqUXVlcnldKTsiLCIvKipcbiAqIFBsYWNlIGFueSBqUXVlcnkvaGVscGVyIHBsdWdpbnMgaW4gaGVyZS5cbiAqL1xuJChmdW5jdGlvbiAoKSB7XG5cbiAgICAvKipcbiAgICAgKiBEaXNhYmxlIHN1Ym1pdCBpbnB1dHMgaW4gdGhlIGdpdmVuIGZvcm1cbiAgICAgKlxuICAgICAqIEBwYXJhbSBmb3JtXG4gICAgICovXG4gICAgZnVuY3Rpb24gZGlzYWJsZVN1Ym1pdEJ1dHRvbnMoZm9ybSkge1xuICAgICAgICBmb3JtLmZpbmQoJ2lucHV0W3R5cGU9XCJzdWJtaXRcIl0nKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICBmb3JtLmZpbmQoJ2J1dHRvblt0eXBlPVwic3VibWl0XCJdJykuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFbmFibGUgdGhlIHN1Ym1pdCBpbnB1dHMgaW4gYSBnaXZlbiBmb3JtXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZm9ybVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGVuYWJsZVN1Ym1pdEJ1dHRvbnMoZm9ybSkge1xuICAgICAgICBmb3JtLmZpbmQoJ2lucHV0W3R5cGU9XCJzdWJtaXRcIl0nKS5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpO1xuICAgICAgICBmb3JtLmZpbmQoJ2J1dHRvblt0eXBlPVwic3VibWl0XCJdJykucmVtb3ZlQXR0cignZGlzYWJsZWQnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEaXNhYmxlIGFsbCBzdWJtaXQgYnV0dG9ucyBvbmNlIGNsaWNrZWRcbiAgICAgKi9cbiAgICAkKCdmb3JtJykuc3VibWl0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGlzYWJsZVN1Ym1pdEJ1dHRvbnMoJCh0aGlzKSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogQWRkIGEgY29uZmlybWF0aW9uIHRvIGEgZGVsZXRlIGJ1dHRvbi9mb3JtXG4gICAgICovXG4gICAgJCgnYm9keScpLm9uKCdzdWJtaXQnLCAnZm9ybVtuYW1lPWRlbGV0ZS1pdGVtXScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICB0aXRsZTogJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBpdGVtPycsXG4gICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdDb25maXJtIERlbGV0ZScsXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiAnQ2FuY2VsJyxcbiAgICAgICAgICAgIGljb246ICd3YXJuaW5nJ1xuICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdCgpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVuYWJsZVN1Ym1pdEJ1dHRvbnMoJCh0aGlzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pLm9uKCdjbGljaycsICdhW25hbWU9Y29uZmlybS1pdGVtXScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGQgYW4gJ2FyZSB5b3Ugc3VyZScgcG9wLXVwIHRvIGFueSBidXR0b24vbGlua1xuICAgICAgICAgKi9cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICB0aXRsZTogJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkbyB0aGlzPycsXG4gICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdDb250aW51ZScsXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiAnQ2FuY2VsJyxcbiAgICAgICAgICAgIGljb246ICdpbmZvJyxcbiAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICByZXN1bHQudmFsdWUgJiYgd2luZG93LmxvY2F0aW9uLmFzc2lnbigkKHRoaXMpLmF0dHIoJ2hyZWYnKSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gUmVtZW1iZXIgdGFiIG9uIHBhZ2UgbG9hZFxuICAgICQoJ2FbZGF0YS10b2dnbGU9XCJ0YWJcIl0sIGFbZGF0YS10b2dnbGU9XCJwaWxsXCJdJykub24oJ3Nob3duLmJzLnRhYicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBoYXNoID0gJChlLnRhcmdldCkuYXR0cignaHJlZicpO1xuICAgICAgICBpZiAoaGlzdG9yeS5wdXNoU3RhdGUpIHtcbiAgICAgICAgICAgIGhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIGhhc2gpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbG9jYXRpb24uaGFzaCA9IGhhc2g7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XG4gICAgaWYgKGhhc2gpIHtcbiAgICAgICAgJCgnLm5hdi1saW5rW2hyZWY9XCInICsgaGFzaCArICdcIl0nKS50YWIoJ3Nob3cnKTtcbiAgICB9XG59KTtcbiIsIi8vIFRvb2x0aXAgYW5kIFBvcG92ZXJcclxuKGZ1bmN0aW9uKCQpIHtcclxuXHQkKCdbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJykudG9vbHRpcCgpO1xyXG5cdCQoJ1tkYXRhLXRvZ2dsZT1cInBvcG92ZXJcIl0nKS5wb3BvdmVyKCk7XHJcbn0pKGpRdWVyeSk7XHJcblxyXG4vLyBUYWJzXHJcbiQoJ2FbZGF0YS10b2dnbGU9XCJ0YWJcIl0nKS5vbignc2hvd24uYnMudGFiJywgZnVuY3Rpb24gKGUpIHtcclxuXHQkKHRoaXMpLnBhcmVudHMoJy5uYXYtdGFicycpLmZpbmQoJy5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0JCh0aGlzKS5wYXJlbnRzKCcubmF2LXBpbGxzJykuZmluZCgnLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHQkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKS5wYXJlbnQoKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbn0pO1xyXG5cclxuLy8gQm9vdHN0cmFwIERhdGVwaWNrZXJcclxuaWYgKHR5cGVvZigkLmZuLmRhdGVwaWNrZXIpICE9ICd1bmRlZmluZWQnKSB7XHJcblx0JC5mbi5ib290c3RyYXBEUCA9ICQuZm4uZGF0ZXBpY2tlci5ub0NvbmZsaWN0KCk7XHJcbn0iLCIoZnVuY3Rpb24oYSl7KGpRdWVyeS5icm93c2VyPWpRdWVyeS5icm93c2VyfHx7fSkubW9iaWxlPS8oaXBob25lfGlwYWR8aXBvZHxhbmRyb2lkKS9pLnRlc3QoYSl8fC8oaXBob25lfGlwYWR8aXBvZHxhbmRyb2lkfGJiXFxkK3xtZWVnbykuK21vYmlsZXxhdmFudGdvfGJhZGFcXC98YmxhY2tiZXJyeXxibGF6ZXJ8Y29tcGFsfGVsYWluZXxmZW5uZWN8aGlwdG9wfGllbW9iaWxlfGlwKGhvbmV8b2QpfGlyaXN8a2luZGxlfGxnZSB8bWFlbW98bWlkcHxtbXB8bW9iaWxlLitmaXJlZm94fG5ldGZyb250fG9wZXJhIG0ob2J8aW4paXxwYWxtKCBvcyk/fHBob25lfHAoaXhpfHJlKVxcL3xwbHVja2VyfHBvY2tldHxwc3B8c2VyaWVzKDR8NikwfHN5bWJpYW58dHJlb3x1cFxcLihicm93c2VyfGxpbmspfHZvZGFmb25lfHdhcHx3aW5kb3dzIChjZXxwaG9uZSl8eGRhfHhpaW5vL2kudGVzdChhKXx8LzEyMDd8NjMxMHw2NTkwfDNnc298NHRocHw1MFsxLTZdaXw3NzBzfDgwMnN8YSB3YXxhYmFjfGFjKGVyfG9vfHNcXC0pfGFpKGtvfHJuKXxhbChhdnxjYXxjbyl8YW1vaXxhbihleHxueXx5dyl8YXB0dXxhcihjaHxnbyl8YXModGV8dXMpfGF0dHd8YXUoZGl8XFwtbXxyIHxzICl8YXZhbnxiZShja3xsbHxucSl8YmkobGJ8cmQpfGJsKGFjfGF6KXxicihlfHYpd3xidW1ifGJ3XFwtKG58dSl8YzU1XFwvfGNhcGl8Y2N3YXxjZG1cXC18Y2VsbHxjaHRtfGNsZGN8Y21kXFwtfGNvKG1wfG5kKXxjcmF3fGRhKGl0fGxsfG5nKXxkYnRlfGRjXFwtc3xkZXZpfGRpY2F8ZG1vYnxkbyhjfHApb3xkcygxMnxcXC1kKXxlbCg0OXxhaSl8ZW0obDJ8dWwpfGVyKGljfGswKXxlc2w4fGV6KFs0LTddMHxvc3x3YXx6ZSl8ZmV0Y3xmbHkoXFwtfF8pfGcxIHV8ZzU2MHxnZW5lfGdmXFwtNXxnXFwtbW98Z28oXFwud3xvZCl8Z3IoYWR8dW4pfGhhaWV8aGNpdHxoZFxcLShtfHB8dCl8aGVpXFwtfGhpKHB0fHRhKXxocCggaXxpcCl8aHNcXC1jfGh0KGMoXFwtfCB8X3xhfGd8cHxzfHQpfHRwKXxodShhd3x0Yyl8aVxcLSgyMHxnb3xtYSl8aTIzMHxpYWMoIHxcXC18XFwvKXxpYnJvfGlkZWF8aWcwMXxpa29tfGltMWt8aW5ub3xpcGFxfGlyaXN8amEodHx2KWF8amJyb3xqZW11fGppZ3N8a2RkaXxrZWppfGtndCggfFxcLyl8a2xvbnxrcHQgfGt3Y1xcLXxreW8oY3xrKXxsZShub3x4aSl8bGcoIGd8XFwvKGt8bHx1KXw1MHw1NHxcXC1bYS13XSl8bGlid3xseW54fG0xXFwtd3xtM2dhfG01MFxcL3xtYSh0ZXx1aXx4byl8bWMoMDF8MjF8Y2EpfG1cXC1jcnxtZShyY3xyaSl8bWkobzh8b2F8dHMpfG1tZWZ8bW8oMDF8MDJ8Yml8ZGV8ZG98dChcXC18IHxvfHYpfHp6KXxtdCg1MHxwMXx2ICl8bXdicHxteXdhfG4xMFswLTJdfG4yMFsyLTNdfG4zMCgwfDIpfG41MCgwfDJ8NSl8bjcoMCgwfDEpfDEwKXxuZSgoY3xtKVxcLXxvbnx0Znx3Znx3Z3x3dCl8bm9rKDZ8aSl8bnpwaHxvMmltfG9wKHRpfHd2KXxvcmFufG93ZzF8cDgwMHxwYW4oYXxkfHQpfHBkeGd8cGcoMTN8XFwtKFsxLThdfGMpKXxwaGlsfHBpcmV8cGwoYXl8dWMpfHBuXFwtMnxwbyhja3xydHxzZSl8cHJveHxwc2lvfHB0XFwtZ3xxYVxcLWF8cWMoMDd8MTJ8MjF8MzJ8NjB8XFwtWzItN118aVxcLSl8cXRla3xyMzgwfHI2MDB8cmFrc3xyaW05fHJvKHZlfHpvKXxzNTVcXC98c2EoZ2V8bWF8bW18bXN8bnl8dmEpfHNjKDAxfGhcXC18b298cFxcLSl8c2RrXFwvfHNlKGMoXFwtfDB8MSl8NDd8bWN8bmR8cmkpfHNnaFxcLXxzaGFyfHNpZShcXC18bSl8c2tcXC0wfHNsKDQ1fGlkKXxzbShhbHxhcnxiM3xpdHx0NSl8c28oZnR8bnkpfHNwKDAxfGhcXC18dlxcLXx2ICl8c3koMDF8bWIpfHQyKDE4fDUwKXx0NigwMHwxMHwxOCl8dGEoZ3R8bGspfHRjbFxcLXx0ZGdcXC18dGVsKGl8bSl8dGltXFwtfHRcXC1tb3x0byhwbHxzaCl8dHMoNzB8bVxcLXxtM3xtNSl8dHhcXC05fHVwKFxcLmJ8ZzF8c2kpfHV0c3R8djQwMHx2NzUwfHZlcml8dmkocmd8dGUpfHZrKDQwfDVbMC0zXXxcXC12KXx2bTQwfHZvZGF8dnVsY3x2eCg1Mnw1M3w2MHw2MXw3MHw4MHw4MXw4M3w4NXw5OCl8dzNjKFxcLXwgKXx3ZWJjfHdoaXR8d2koZyB8bmN8bncpfHdtbGJ8d29udXx4NzAwfHlhc1xcLXx5b3VyfHpldG98enRlXFwtL2kudGVzdChhLnN1YnN0cigwLDQpKX0pKG5hdmlnYXRvci51c2VyQWdlbnR8fG5hdmlnYXRvci52ZW5kb3J8fHdpbmRvdy5vcGVyYSk7Il0sInNvdXJjZVJvb3QiOiIifQ==