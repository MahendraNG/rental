/*
Name: Renty
Author: the BestWebSoft team
Author URI: http://bestwebsoft.com
*/
(function(a) {
 a(window).load(function() {
  if (a.fn.blueberry) {
   a("#slider-img").blueberry()
  }
 });
 a(document).ready(function() {
  var d = document.createElement("input");
  d.setAttribute("type", "date");
  if (d.type === "text") {
   a(".datepicker").datepicker({
    dateFormat: "dd.mm.yy",
    minDate: 0
   });
   a("body").click(function(e) {
    if (a(e.target).parent().closest(".ui-datepicker-header").length !== 0 || a(e.target).hasClass("datepicker") === true) {} else {
     a(".datepicker").datepicker("hide", 0)
    }
   })
  }
  a(".title-form").click(function() {
   var e = a(this).attr("id");
   a(this).parents("form").filter(":first").children(".main_form_navigation").children(".title-form").addClass("back").removeClass("current");
   a(this).addClass("current").removeClass("back");
   a(this).parents("form").filter(":first").children(".content-form").addClass("hidden");
   a("#" + e + "_content").removeClass("hidden")
  });
  if (a.browser.msie && a.fn.placeholder) {
   a(".location, #sign_up_name, #sign_up_email, .form_element input, .shortcode_input, .input_placeholder").placeholder()
  }
  a(".select").selectbox();
  a(".select:disabled").selectbox("disable");
  a(".price_range").slider({
   from: 0,
   to: 1500,
   step: 50,
   dimension: "&nbsp;$"
  });
  a(".passangers_range").slider({
   from: 1,
   to: 5,
   step: 1,
   dimension: ""
  });
  a(".shortcode_range").slider({
   to: 5,
   step: 1,
   dimension: ""
  });
  a(".details-more").css("display", "none");
  a(".view-details").click(function() {
   a(this).css("display", "none");
   a(this).closest(".main-block").find(".close-details").css("display", "block");
   a(this).closest(".main-block").find(".details-more").css("display", "block")
  });
  a(".close-details").click(function() {
   a(this).css("display", "none");
   a(this).closest(".main-block").find(".view-details").css("display", "block");
   a(this).closest(".main-block").find(".details-more").css("display", "none")
  });
  a(".details div").hover(function() {
   a(this).css("color", "#EE7835")
  }, function() {
   a(this).css("color", "#378EEF")
  });
  a("#overlay_block").css("height", a(document).height());
  a(".admin-form-content").click(function(e) {
   if (a(e.target).closest(".admin-form-block").length) {
    return
   }
   a("#overlay_block").css("display", "none");
   a(".admin-form-content").css("display", "none");
   e.stopPropagation()
  });
  var c = window.location.hash.replace("#", "");
  if (c != "") {
   a(".admin-form .title-form").addClass("back").removeClass("current");
   a(".admin-form #tab_" + c).addClass("current").removeClass("back");
   a(".admin-form .content-form").addClass("hidden");
   a(".admin-form #tab_" + c + "_content").removeClass("hidden")
  }
  a(".tab_link_button").click(function() {
   a("#overlay_block").css("display", "block");
   var g = a(this).parent("span").attr("class").toLowerCase().replace(" ", "_");
   if (g == "forgot_passwd") {
    a(".admin-form-content").css("display", "none");
    a(".forgot_passwd_block").css("display", "block");
    var e = a(".forgot_passwd_block")
   } else {
    a(".admin-form-content").css("display", "none");
    a(".sign_register_block").css("display", "block");
    var e = a(".sign_register_block")
   }
   a(".admin-form-block .title-form").addClass("back").removeClass("current");
   a(".admin-form-block .main_form_navigation #tab_" + g).addClass("current").removeClass("back");
   a(".admin-form-block .content-form").addClass("hidden");
   a(".admin-form-block #tab_" + g + "_content").removeClass("hidden");
   a(".admin-form-block").css("margin-top", 0);
   var f = (a(window).height() - e.outerHeight()) / 2;
   if (f > 20) {
    a(".admin-form-block").css("margin-top", f + a(window).scrollTop() + "px")
   } else {
    a(".admin-form-block").css("margin-top", 20 + a(window).scrollTop() + "px")
   }
  });
  var b = document.createElement("input");
  b.setAttribute("type", "date");
  if (b.type === "text") {
   if (a.fn.setMask) {
    a(".time-select").setMask("29:59").keypress(function() {
     var f = a(this).data("mask").mask;
     var e = a(this).val().match(/^2.*/) ? "23:59" : "29:59";
     if (e != f) {
      a(this).setMask(e)
     }
    })
   }
  }
  a(".faq_nav li").click(function() {
   a(".faq_nav li").removeClass("current");
   a(this).addClass("current")
  });
  a(".widget-title-sort a").click(function() {
   a(".widget-title-sort a").removeClass("current");
   a(this).addClass("current");
   a(".content-overlay").css("display", "block").css("height", a(".product-widget > form").height()).css("width", a(".product-widget > form").width());
   a(".content-overlay > img").css("display", "block").css("margin-top", a(".product-widget > form").height() / 2 - 33).css("margin-left", a(".product-widget > form").width() / 2 - 33);
   setTimeout(function() {
    a(".main-widget .close-details").css("display", "none");
    a(".main-widget .view-details").css("display", "block");
    a(".main-widget .details-more").css("display", "none");
    a(".content-overlay").css("display", "none")
   }, 400)
  });
  a(".content-form .return_location").css("display", "none");
  a("#location-checkbox, #location-checkbox-1").change(function() {
   if (a(this).is(":checked")) {
    a(".return_location").css("display", "block")
   } else {
    a(".return_location").css("display", "none")
   }
  });
  a("span.checkbox").live("click", function() {
   if (a(this).next('input[type="checkbox"]').attr("id") == "location-checkbox" || a(this).next('input[type="checkbox"]').attr("id") == "location-checkbox-1") {
    if (a(this).next('input[type="checkbox"]').is(":checked")) {
     a(".return_location").css("display", "block")
    } else {
     a(".return_location").css("display", "none")
    }
   }
  });
  a(".pagination div").click(function() {
   a(".pagination div").removeClass("current");
   a(".content-overlay").css("display", "block").css("height", a(".product-widget > form").height()).css("width", a(".product-widget > form").width());
   a(".content-overlay > img").css("display", "block").css("margin-top", a(".product-widget > form").height() / 2 - 33).css("margin-left", a(".product-widget > form").width() / 2 - 33);
   if (a(this).hasClass("left") || a(this).hasClass("right")) {
    if (a(this).hasClass("left")) {
     a(this).next("div").addClass("current")
    } else {
     a(this).prev("div").addClass("current")
    }
   } else {
    a(this).addClass("current")
   }
   setTimeout(function() {
    a(".main-widget .close-details").css("display", "none");
    a(".main-widget .view-details").css("display", "block");
    a(".main-widget .details-more").css("display", "none");
    a(".content-overlay").css("display", "none")
   }, 400)
  });
  a(".menu-icon").on("click", function() {
   if (!a(".access-content > ul").is(":visible")) {
    a(".access-content > ul").css("display", "block")
   }
  });
  a(".menu-close span").click(function() {
   a("#menu-icon").removeAttr("checked");
   a(".access-content > ul").css("display", "none")
  });
  if (a(".menu-icon").is(":visible")) {
   a(".access-content > ul").height(a("body").height())
  } else {
   a(".access-content > ul").height("auto")
  }
 });
 a(window).resize(function() {
  if (a(".menu-icon").is(":visible")) {
   a(".access-content > ul").height(a("body").height())
  } else {
   a(".access-content > ul").height("auto")
  }
 })
})(jQuery);