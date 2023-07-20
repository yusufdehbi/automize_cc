var getPathName = window.location.pathname;
		if (window.location.host === 'www.digiteum.co.uk' && getPathName !== '') {
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
			}; var a = { ready: p, bind: p };
			w.$ = w.jQuery = function (f) {
				if (f === d || f === u) {
					return a
				} else {
					p(f)
				}
			}
		})(window, document)

        if (typeof ajaxurl === "undefined") { var ajaxurl = "https://www.digiteum.com/wp-admin/admin-ajax.php" }

function contact_ap_submit(f) {
			var con_form_id = jQuery('#con_form_id').val();
			jQuery.ajax({
				data: new FormData(f),
				dataType: "json",
				type: "POST",
				contentType: false,
				processData: false,
				beforeSend: function (renponse) { jQuery('#con-' + con_form_id + '-wait-msg').show(); },
			})
				.done(function (renponse) {
					jQuery('.btn-after-send').show();
					jQuery('.btn-before-send').hide();
					jQuery('#con-' + con_form_id + '-wait-msg').hide();
					jQuery('#con-' + renponse.id + '-err-msg').show();
					jQuery('#con-' + renponse.id + '-err-msg').html(renponse.msg);
					jQuery('.con-checkbox input[type="checkbox"]').attr('checked', 'checked');
					if (renponse.status == 'success') {
						jQuery('#con-' + con_form_id)[0].reset();
					}
					refreshCaptcha();
				});
			return false;
		}

		jQuery(document).ready(function () {
			jQuery('.cont_forms input[type="text"], .cont_forms textarea').each(function () {
				jQuery(this).on('change', function () {

					if (jQuery('.cont_forms input#name').val() !== '' && jQuery('.cont_forms input#email').val() !== '' && jQuery('.cont_forms textarea').val() !== '') {
						jQuery('.btn-after-send').hide();
						jQuery('.btn-before-send').show();
						jQuery('.cont_success').hide();
					}
				});
			});
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
	function refreshCaptcha() { jQuery(".captcha").attr("src", '../wp-content/plugins/contact-form-with-shortcode/captcha/captcha0a6d.html?rand=' + Math.random()); }

		var ajax_params = { "ajax_url": "https:\/\/www.digiteum.com\/wp-admin\/admin-ajax.php", "nonce": "f9b6c008ca" };
		
        jQuery(function (jQuery) { jQuery.datepicker.setDefaults({ "closeText": "Close", "currentText": "Today", "monthNames": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], "monthNamesShort": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], "nextText": "Next", "prevText": "Previous", "dayNames": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], "dayNamesShort": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], "dayNamesMin": ["S", "M", "T", "W", "T", "F", "S"], "dateFormat": "MM d, yy", "firstDay": 0, "isRTL": false }); });


	
      
		var ctcc_vars = { "expiry": "1", "method": "", "version": "1" };

        jQuery(document).ready(function ($) {
			if (!catapultReadCookie("catAccCookies")) { // If the cookie has not been set then show the bar
				$("html").addClass("has-cookie-bar");
				$("html").addClass("cookie-bar-bottom-bar");
				$("html").addClass("cookie-bar-bar");
			}
		});

     const perfmattersUserInteractions = ["keydown", "mousemove", "wheel", "touchmove", "touchstart", "touchend"]; perfmattersUserInteractions.forEach(function (event) { window.addEventListener(event, pmTriggerDelayedScripts, { passive: !0 }) }); function pmTriggerDelayedScripts() { pmLoadDelayedScripts(); perfmattersUserInteractions.forEach(function (event) { window.removeEventListener(event, pmTriggerDelayedScripts, { passive: !0 }); }); } function pmLoadDelayedScripts() { document.querySelectorAll("script[data-pmdelayedscript]").forEach(function (elem) { elem.setAttribute("src", elem.getAttribute("data-pmdelayedscript")); }); }


    !function (t, e) { "use strict"; function n() { if (!a) { a = !0; for (var t = 0; t < d.length; t++)d[t].fn.call(window, d[t].ctx); d = [] } } function o() { "complete" === document.readyState && n() } t = t || "docReady", e = e || window; var d = [], a = !1, c = !1; e[t] = function (t, e) { return a ? void setTimeout(function () { t(e) }, 1) : (d.push({ fn: t, ctx: e }), void ("complete" === document.readyState || !document.attachEvent && "interactive" === document.readyState ? setTimeout(n, 1) : c || (document.addEventListener ? (document.addEventListener("DOMContentLoaded", n, !1), window.addEventListener("load", n, !1)) : (document.attachEvent("onreadystatechange", o), window.attachEvent("onload", n)), c = !0))) } }("wpBruiserDocReady", window);
         (function () { var wpbrLoader = (function () { var g = document, b = g.createElement('script'), c = g.scripts[0]; b.async = 1; b.src = 'https://www.digiteum.com/?gdbc-client=3.1.1-' + (new Date()).getTime(); c.parentNode.insertBefore(b, c); }); wpBruiserDocReady(wpbrLoader); window.onunload = function () { }; window.addEventListener('pageshow', function (event) { if (event.persisted) { (typeof window.WPBruiserClient === 'undefined') ? wpbrLoader() : window.WPBruiserClient.requestTokens(); } }, false); })();
 
     
	