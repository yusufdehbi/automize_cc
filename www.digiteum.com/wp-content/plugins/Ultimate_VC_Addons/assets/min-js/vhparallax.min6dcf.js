!function(a){var b=jQuery(window),c=b.height();b.resize(function(){c=b.height()}),jQuery.fn.vparallax=function(a,d,e){function f(){var e=b.scrollTop();i.each(function(){h=jQuery(this).offset().top;var b=jQuery(this),f=b.offset().top,i=g(b);if(!(e>f+i||f>e+c)){var j=Math.round((h-e)*d);if(j=-j,jQuery(this).parent().hasClass("vcpb-mlvp-jquery"))var k=jQuery(this).parent().parent().data("img-parallax-mobile-disable").toString();else var k=jQuery(this).parent().data("img-parallax-mobile-disable").toString();if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))var l="true";else var l="false";if("true"==k&&"true"==l)var m="true";else var m="false";"false"==m&&jQuery(this).css("backgroundPosition",a+" "+j+"px")}})}var g,h,i=jQuery(this);g=e?function(a){return a.outerHeight(!0)}:function(a){return a.height()},(arguments.length<1||null===a)&&(a="50%"),(arguments.length<2||null===d)&&(d=.5),(arguments.length<3||null===e)&&(e=!0),b.bind("scroll",f).resize(f),f()},jQuery.fn.hparallax=function(a,d,e){function f(){var e=b.scrollTop();i.each(function(){h=jQuery(this).offset().top;var b=jQuery(this),f=b.offset().top,i=g(b);if(!(e>f+i||f>e+c)){var k=jQuery(this).css("backgroundPosition"),l=k.indexOf("px"),m=k.substring(0,l),n=0;0>=j-e?n=parseInt(m)-parseInt(d*Math.abs(j-e)):(n=parseInt(m)+parseInt(d*(j-e)),n>0&&(n=0));var o=jQuery(this).parent().data("img-parallax-mobile-disable").toString();if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))var p="true";else var p="false";if("true"==p&&"true"==o)var q="true";else var q="false";"false"==q&&jQuery(this).css("backgroundPosition",n+"px "+a)}}),j=e}var g,h,i=jQuery(this);g=e?function(a){return a.outerHeight(!0)}:function(a){return a.height()},(arguments.length<1||null===a)&&(a="50%"),(arguments.length<2||null===d)&&(d=.5),(arguments.length<3||null===e)&&(e=!0),d=jQuery(this).data("parallax_sense")/100,a="0px";var j=b.scrollTop();b.bind("scroll",f).resize(f),f()}}(jQuery),jQuery(document).ready(function(){if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))var a="true";else var a="false";jQuery(".vcpb-mlvp-jquery").each(function(){var a=jQuery(this),b=a.data("img-array");b=b.split(",");for(var c=b.length,d=0;c>d;d++)jQuery(a).prepend('<div class="vertical_layer_parallax" style="position:absolute;background-image:url('+b[d]+');"></div>');var e=jQuery(a).find(".vertical_layer_parallax");e.css({"max-width":"none",position:"absolute"})}),jQuery(".vcpb-mlvp-jquery").each(function(){var b=jQuery(this).find(".vertical_layer_parallax").length,c=parseInt(jQuery(this).data("parallax_sense"))/100,d=jQuery(this).parent().data("img-parallax-mobile-disable").toString();if(b=c/b,c=0,"true"==a&&"true"==d)var e="true";else var e="false";jQuery(this).find(".vertical_layer_parallax").each(function(a){c+=b,jQuery(this).css({height:jQuery(this).parent().outerHeight()+"px",width:jQuery(this).parent().outerWidth()+"px"}).attr("data-p-sense",c),"false"==e&&jQuery(this).vparallax("0%",c)})}),jQuery(".vcpb-vz-jquery").each(function(){var b=jQuery(this).parent().data("img-parallax-mobile-disable");if("true"==a&&"true"==b)var c="true";else var c="false";"false"==c&&jQuery(this).vparallax("50%",jQuery(this).data("parallax_sense")/100)}),jQuery(".vcpb-hz-jquery").hparallax(),jQuery(".vcpb-hz-jquery").length>0&&setTimeout(function(){jQuery(window).scrollTop(0)},1e3)});