var getPathName = window.location.pathname;
if (window.location.host === "www.digiteum.co.uk" && getPathName !== "") {
  location = "https://digiteum.com/" + getPathName;
  document.location.href = "https://digiteum.com" + getPathName;
  location.replace("https://digiteum.com" + getPathName);
  window.location.reload("https://digiteum.com" + getPathName);
  document.location.replace("https://digiteum.com" + getPathName);
}
(function (w, d, u) {
  w.readyQ = [];
  w.bindReadyQ = [];

  function p(x, y) {
    if (x == "ready") {
      w.bindReadyQ.push(y);
    } else {
      w.readyQ.push(x);
    }
  }
  var a = { ready: p, bind: p };
  w.$ = w.jQuery = function (f) {
    if (f === d || f === u) {
      return a;
    } else {
      p(f);
    }
  };
})(window, document);

function contact_ap_submit(f) {
  var con_form_id = jQuery("#con_form_id").val();
  jQuery
    .ajax({
      data: new FormData(f),
      dataType: "json",
      type: "POST",
      contentType: false,
      processData: false,
      beforeSend: function (renponse) {
        jQuery("#con-" + con_form_id + "-wait-msg").show();
      },
    })
    .done(function (renponse) {
      jQuery(".btn-after-send").show();
      jQuery(".btn-before-send").hide();
      jQuery("#con-" + con_form_id + "-wait-msg").hide();
      jQuery("#con-" + renponse.id + "-err-msg").show();
      jQuery("#con-" + renponse.id + "-err-msg").html(renponse.msg);
      jQuery('.con-checkbox input[type="checkbox"]').attr("checked", "checked");
      if (renponse.status == "success") {
        jQuery("#con-" + con_form_id)[0].reset();
      }
      refreshCaptcha();
    });
  return false;
}

jQuery(document).ready(function () {
  jQuery('.cont_forms input[type="text"], .cont_forms textarea').each(
    function () {
      jQuery(this).on("change", function () {
        if (
          jQuery(".cont_forms input#name").val() !== "" &&
          jQuery(".cont_forms input#email").val() !== "" &&
          jQuery(".cont_forms textarea").val() !== ""
        ) {
          jQuery(".btn-after-send").hide();
          jQuery(".btn-before-send").show();
          jQuery(".cont_success").hide();
        }
      });
    }
  );
});

function subscribe_ap_submit(f) {
  var sub_form_id = jQuery('#sub_form_id').val();
  var data = jQuery(f).serialize();
  jQuery.ajax({
    data: data,
    dataType: "json",
    type: "POST",
    beforeSend: function (renponse) {
      jQuery('#sub-' + sub_form_id + '-wait-msg').show();
      jQuery('.spinner-form').show();
      jQuery('.btn-before-send input[type="submit"]').text('');
    }
  })
    .done(function (renponse) {
      jQuery('.spinner-form').hide();
      jQuery('#sub-' + sub_form_id + '-wait-msg').hide();
      jQuery('#sub-' + renponse.id + '-err-msg').show();
      jQuery('#sub-' + renponse.id + '-err-msg').html(renponse.msg);
      jQuery("#sub-" + renponse.id).find("input[type=text], textarea, select").val("");
    });
  return false;
}

jQuery(document).ready(function () {
  jQuery('.con-checkbox input[type="checkbox"]').on('change', function () {
    console.log(jQuery(this).is(':checked'));
    if (!(jQuery(this).is(':checked'))) {
      jQuery('.btn-before-send input[type="submit"]').attr('disabled', 'disabled');
    } else {
      jQuery('.btn-before-send input[type="submit"]').removeAttr('disabled');
    }
  });
});

function refreshCaptcha() {
  jQuery(".captcha").attr("src", '../wp-content/plugins/contact-form-with-shortcode/captcha/captcha0a6d.html?rand=' + Math.random());
}
if (typeof ajaxurl === "undefined") {
  var ajaxurl = "https://www.digiteum.com/wp-admin/admin-ajax.php"
}

!function (t, e) {
  "use strict";
  function n() {
    if (!a) {
      a = !0;
      for (var t = 0; t < d.length; t++)
        d[t].fn.call(window, d[t].ctx); d = []
    }
  }
  function o() {
    "complete" === document.readyState && n()
  } t = t || "docReady", e = e || window;
  var d = [], a = !1, c = !1;
  e[t] = function (t, e) {
    return a ? void setTimeout(function () { t(e) }, 1) : (d.push({ fn: t, ctx: e }), void ("complete" === document.readyState || !document.attachEvent && "interactive" === document.readyState ? setTimeout(n, 1) : c || (document.addEventListener ? (document.addEventListener("DOMContentLoaded", n, !1), window.addEventListener("load", n, !1)) : (document.attachEvent("onreadystatechange", o), window.attachEvent("onload", n)), c = !0)))
  }
}("wpBruiserDocReady", window);
(function () {
  var wpbrLoader = (function () {
    var g = document, b = g.createElement('script'), c = g.scripts[0];
    b.async = 1;
    b.src = 'https://www.digiteum.com/?gdbc-client=3.1.1-' + (new Date()).getTime();
    c.parentNode.insertBefore(b, c);
  });
  wpBruiserDocReady(wpbrLoader);
  window.onunload = function () { };
  window.addEventListener('pageshow', function (event) {
    if (event.persisted) {
      (typeof window.WPBruiserClient === 'undefined') ? wpbrLoader() : window.WPBruiserClient.requestTokens();
    }
  }, false);
})();

jQuery(document).ready(function () {
  var forceGutter = 50; // change to false to return to the normal behavior.
  (function (e) { "use strict"; e.Isotope.prototype._getMasonryGutterColumns = function () { var e = this.options.masonry && this.options.masonry.gutterWidth || 0; var t = this.element.width(); this.masonry.columnWidth = this.options.masonry && this.options.masonry.columnWidth || this.$filteredAtoms.outerWidth(true) || t; this.masonry.columnWidth += e; this.masonry.cols = Math.floor((t + e) / this.masonry.columnWidth); this.masonry.cols = Math.max(this.masonry.cols, 1) }; e.Isotope.prototype._masonryReset = function () { this.masonry = {}; this._getMasonryGutterColumns(); var e = this.masonry.cols; this.masonry.colYs = []; while (e--) { this.masonry.colYs.push(0) } }; e.Isotope.prototype._masonryResizeChanged = function () { var e = this.masonry.cols; this._getMasonryGutterColumns(); return this.masonry.cols !== e }; e(document).ready(function () { var t = e(".journal"); var n = 0; var r = 0; var i = function () { var e = parseInt(t.data("columns")); var i = t.data("gutterSpace"); var s = t.width(); var o = 0; if (isNaN(i)) { i = .02 } else if (i > .05 || i < 0) { i = .02 } if (s < 568) { e = 1 } else if (s < 768) { e -= 2 } else if (s < 991) { e -= 1; if (e < 2) { e = 2 } } if (e < 1) { e = 1 } r = forceGutter != false ? forceGutter : Math.floor(s * i); var u = r * (e - 1); var a = s - u; n = Math.floor(a / e); o = r; if (1 == e) { o = 20 } t.children(".journal-post").css({ width: n + "px", marginBottom: o + "px" }) }; i(); window.iso = t.isotope({ itemSelector: ".journal-post", resizable: false, masonry: { columnWidth: n, gutterWidth: r } }); t.imagesLoaded(function () { i(); t.isotope({ itemSelector: ".journal-post", resizable: true, masonry: { columnWidth: n, gutterWidth: r } }) }); e(window).smartresize(function () { i(); t.isotope({ masonry: { columnWidth: n, gutterWidth: r } }) }); var s = e(".wc-shortcodes-filtering .wc-shortcodes-term"); s.click(function (i) { i.preventDefault(); s.removeClass("wc-shortcodes-term-active"); e(this).addClass("wc-shortcodes-term-active"); var o = e(this).attr("data-filter"); t.isotope({ filter: o, masonry: { columnWidth: n, gutterWidth: r } }); return false }) }) })(jQuery);

  jQuery(".flexslider").flexslider({
    animation: "fade",
    slideshow: true,
    slideshowSpeed: 3500,
    animationDuration: 1000,
    directionNav: true,
    controlNav: true,
    smootheHeight: false,
    start: function (slider) {
      slider.removeClass("loading").css("overflow", "");
    }

  });
});

jQuery(document).ready(function ($) {
  if (!catapultReadCookie("catAccCookies")) {
    $("html").addClass("has-cookie-bar");
    $("html").addClass("cookie-bar-bottom-bar");
    $("html").addClass("cookie-bar-bar");
  }
});


