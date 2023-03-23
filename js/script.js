// main-visualのスライドショー
$(function () {
    $(".mv-ul li").css({ "position": "relative", "overflow": "hidden" });
    $(".mv-ul li").hide().css({ "position": "absolute", "top": 0, "right": 0 });
    $(".mv-ul li:first").addClass("fade").show();
    setInterval(function () {
        var $active = $(".mv-ul li.fade");
        var $next = $active.next("li").length ? $active.next("li") : $(".mv-ul li:first");
        $active.fadeOut(4000).removeClass("fade");
        $next.fadeIn(4000).addClass("fade");
    }, 4000);
});

!function (a) { "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a(require("jquery")) : a(jQuery) }(function (a) { function i() { var b, c, d = { height: f.innerHeight, width: f.innerWidth }; return d.height || (b = e.compatMode, (b || !a.support.boxModel) && (c = "CSS1Compat" === b ? g : e.body, d = { height: c.clientHeight, width: c.clientWidth })), d } function j() { return { top: f.pageYOffset || g.scrollTop || e.body.scrollTop, left: f.pageXOffset || g.scrollLeft || e.body.scrollLeft } } function k() { if (b.length) { var e = 0, f = a.map(b, function (a) { var b = a.data.selector, c = a.$element; return b ? c.find(b) : c }); for (c = c || i(), d = d || j(); e < b.length; e++)if (a.contains(g, f[e][0])) { var h = a(f[e]), k = { height: h[0].offsetHeight, width: h[0].offsetWidth }, l = h.offset(), m = h.data("inview"); if (!d || !c) return; l.top + k.height > d.top && l.top < d.top + c.height && l.left + k.width > d.left && l.left < d.left + c.width ? m || h.data("inview", !0).trigger("inview", [!0]) : m && h.data("inview", !1).trigger("inview", [!1]) } } } var c, d, h, b = [], e = document, f = window, g = e.documentElement; a.event.special.inview = { add: function (c) { b.push({ data: c, $element: a(this), element: this }), !h && b.length && (h = setInterval(k, 250)) }, remove: function (a) { for (var c = 0; c < b.length; c++) { var d = b[c]; if (d.element === this && d.data.guid === a.guid) { b.splice(c, 1); break } } b.length || (clearInterval(h), h = null) } }, a(f).on("scroll resize scrollstop", function () { c = d = null }), !g.addEventListener && g.attachEvent && g.attachEvent("onfocusin", function () { d = null }) });

$(function () {
    $(".inview-slide-left").on("inview", function (event, isInView) {
        if (isInView) {
            $(this).stop().addClass("slide-left");
        }
    });
});

$(function (){
    $(".inview-slide-right").on("inview", function (event, isInView) {
        if (isInView) {
            $(this).stop().addClass("slide-right");
        }
    });
})

$(function () {
    $(".voice-box").on("inview", function (event, isInView) {
        if (isInView) {
            $(this).stop().addClass("scaleup");
        }
    });
});

$('.globalMenuSp').hide();
$(function () {
    $('.hamburger').click(function () {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.globalMenuSp').show();
            $('.globalMenuSp').addClass('active');
            $('.logo').css('z-index','1');
        } else {
            $('.globalMenuSp').removeClass('active');
            $('.logo').show();
            $('.logo').css('z-index','2');
        }
    });
});