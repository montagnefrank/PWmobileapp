(window.webpackJsonp = window.webpackJsonp || []).push([
    [16], {
        jtI3: function(l, n, u) {
            "use strict";
            u.r(n);
            var t = u("CcnG"),
                e = function() {},
                a = u("pMnS"),
                b = u("c+eF"),
                i = function() {
                    function l(l) {
                        this.pageTitleService = l, this.effects = ["bounce", "flash", "pulse", "rubberBand", "shake", "swing", "tada", "wobble", "bounceIn", "bounceInDown", "bounceInLeft", "bounceInUp", "bounceInRight", "bounceOut", "bounceOutDown", "bounceOutLeft", "bounceOutRight", "bounceOutUp", "fadeIn", "fadeInDown", "fadeInDownBig", "fadeInLeft", "fadeInLeftBig", "fadeInRight", "fadeInRightBig", "fadeInUp", "fadeInUpBig", "fadeOut", "fadeOutDown", "fadeOutDownBig", "fadeOutLeft", "fadeOutLeftBig", "fadeInRight", "fadeInRightBig", "fadeInUp", "fadeInUpBig", "flip", "flipInX", "flipInY", "flipOutX", "flipOutY", "lightSpeedIn", "lightSpeedOut", "rotateIn", "rotateInDownLeft", "rotateInDownRight", "rotateInUpLeft", "rotateInUpRight", "fadeInRightBig", "fadeInUp", "fadeInUpBig", "flip", "flipInX", "flipInY", "flipOutX", "flipOutY", "lightSpeedIn", "lightSpeedOut", "zoomIn", "zoomInDown", "zoomInLeft", "zoomInRight", "zoomInUp", "zoomOut", "zoomOutDown", "zoomOutLeft", "zoomOutRight", "zoomOutUp", "hinge", "rollIn", "rollOut"]
                    }
                    return l.prototype.ngOnInit = function() {
                        this.pageTitleService.setTitle("Animation"), $(".animate-element").click(function() {
                            $("#animation-object").removeClass();
                            var l = $(this).data("animation-class");
                            $("#animation-object").addClass("animated " + l)
                        })
                    }, l
                }(),
                o = t["\u0275crt"]({
                    encapsulation: 2,
                    styles: [
                        ["@media (max-width:1500px){.animation-wrapper .col-lg-7{margin:30px 0 0;order:2}}"]
                    ],
                    data: {
                        animation: [{
                            type: 7,
                            name: "fadeInAnimation",
                            definitions: [{
                                type: 1,
                                expr: "void => *",
                                animation: [{
                                    type: 6,
                                    styles: {
                                        opacity: 0
                                    },
                                    offset: null
                                }, {
                                    type: 4,
                                    styles: {
                                        type: 6,
                                        styles: {
                                            opacity: 1
                                        },
                                        offset: null
                                    },
                                    timings: "400ms 150ms ease-in-out"
                                }],
                                options: null
                            }],
                            options: {}
                        }]
                    }
                });

            function s(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 241, "div", [
                    ["class", "animation-wrapper"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](1, 0, null, null, 240, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](2, 0, null, null, 236, "div", [
                    ["class", "col-lg-7 col-full-lg-down"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](3, 0, null, null, 235, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](4, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](5, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](6, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](7, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["Animation Options"])), (l()(), t["\u0275eld"](9, 0, null, null, 229, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](10, 0, null, null, 5, "div", [
                    ["class", "mb-4"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](11, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["A cross-browser library of CSS animations. Animation.css is a bunch of cool, fun, and cross-browser animations for you to use in your projects. Great for emphasis, home pages, sliders, and general just-add-water-awesomeness. "])), (l()(), t["\u0275eld"](13, 0, null, null, 2, "div", [
                    ["class", "alert alert-success"],
                    ["role", "alert"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](14, 0, null, null, 1, "p", [
                    ["class", "m-0"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["Use any animation button to turn on the animation on box example."])), (l()(), t["\u0275eld"](16, 0, null, null, 222, "div", [
                    ["class", "animation-btn-list"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](17, 0, null, null, 221, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](18, 0, null, null, 61, "div", [
                    ["class", "col-xs-6 col-sm-6 col-md-3 col-lg-3"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](19, 0, null, null, 60, "ul", [
                    ["class", "list-unstyled"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](20, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](21, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "bounce"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["Bounce"])), (l()(), t["\u0275eld"](23, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](24, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "flash"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["Flash"])), (l()(), t["\u0275eld"](26, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](27, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "pulse"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["pulse"])), (l()(), t["\u0275eld"](29, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](30, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "rubberBand"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["rubberBand"])), (l()(), t["\u0275eld"](32, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](33, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "shake"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["shake"])), (l()(), t["\u0275eld"](35, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](36, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "swing"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["swing"])), (l()(), t["\u0275eld"](38, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](39, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "tada"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["tada"])), (l()(), t["\u0275eld"](41, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](42, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "wobble"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["wobble"])), (l()(), t["\u0275eld"](44, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](45, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "bounceIn"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["bounceIn"])), (l()(), t["\u0275eld"](47, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](48, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "bounceInDown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["bounceInDown"])), (l()(), t["\u0275eld"](50, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](51, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "bounceInLeft"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["bounceInLeft"])), (l()(), t["\u0275eld"](53, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](54, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "bounceInUp"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["bounceInUp"])), (l()(), t["\u0275eld"](56, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](57, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "bounceInRight"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["bounceInRight"])), (l()(), t["\u0275eld"](59, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](60, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "bounceOut"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["bounceOut"])), (l()(), t["\u0275eld"](62, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](63, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "bounceOutDown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["bounceOutDown"])), (l()(), t["\u0275eld"](65, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](66, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "bounceOutLeft"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["bounceOutLeft"])), (l()(), t["\u0275eld"](68, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](69, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "bounceOutRight"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["bounceOutRight"])), (l()(), t["\u0275eld"](71, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](72, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "bounceOutUp"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["bounceOutUp"])), (l()(), t["\u0275eld"](74, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](75, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "fadeIn"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["fadeIn"])), (l()(), t["\u0275eld"](77, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](78, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "fadeInDown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["fadeInDown"])), (l()(), t["\u0275eld"](80, 0, null, null, 61, "div", [
                    ["class", "col-xs-6 col-sm-6 col-md-3 col-lg-3"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](81, 0, null, null, 60, "ul", [
                    ["class", "list-unstyled"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](82, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](83, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "fadeInDownBig"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["fadeInDownBig"])), (l()(), t["\u0275eld"](85, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](86, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "fadeInLeft"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["fadeInLeft"])), (l()(), t["\u0275eld"](88, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](89, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "fadeInLeftBig"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["fadeInLeftBig"])), (l()(), t["\u0275eld"](91, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](92, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "fadeInRight"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["fadeInRight"])), (l()(), t["\u0275eld"](94, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](95, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "fadeInRightBig"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["fadeInRightBig"])), (l()(), t["\u0275eld"](97, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](98, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "fadeInUp"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["fadeInUp"])), (l()(), t["\u0275eld"](100, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](101, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "fadeInUpBig"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["fadeInUpBig"])), (l()(), t["\u0275eld"](103, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](104, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "fadeOut"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["fadeOut"])), (l()(), t["\u0275eld"](106, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](107, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "fadeOutDown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["fadeOutDown"])), (l()(), t["\u0275eld"](109, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](110, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "fadeOutDownBig"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["fadeOutDownBig"])), (l()(), t["\u0275eld"](112, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](113, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "fadeOutLeft"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["fadeOutLeft"])), (l()(), t["\u0275eld"](115, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](116, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "fadeOutLeftBig"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["fadeOutLeftBig"])), (l()(), t["\u0275eld"](118, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](119, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "fadeInRight"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["fadeInRight"])), (l()(), t["\u0275eld"](121, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](122, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "fadeInRightBig"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["fadeInRightBig"])), (l()(), t["\u0275eld"](124, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](125, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "fadeInUp"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["fadeInUp"])), (l()(), t["\u0275eld"](127, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](128, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "fadeInUpBig"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["fadeInUpBig"])), (l()(), t["\u0275eld"](130, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](131, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "flip"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["flip"])), (l()(), t["\u0275eld"](133, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](134, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "flipInX"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["flipInX"])), (l()(), t["\u0275eld"](136, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](137, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "flipInY"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["flipInY"])), (l()(), t["\u0275eld"](139, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](140, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "flipOutX"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["flipOutX"])), (l()(), t["\u0275eld"](142, 0, null, null, 61, "div", [
                    ["class", "col-xs-6 col-sm-6 col-md-3 col-lg-3"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](143, 0, null, null, 60, "ul", [
                    ["class", "list-unstyled"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](144, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](145, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "flipOutY"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["flipOutY"])), (l()(), t["\u0275eld"](147, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](148, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "lightSpeedIn"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["lightSpeedIn"])), (l()(), t["\u0275eld"](150, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](151, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "lightSpeedOut"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["lightSpeedOut"])), (l()(), t["\u0275eld"](153, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](154, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "rotateIn"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["rotateIn"])), (l()(), t["\u0275eld"](156, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](157, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "rotateInDownLeft"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["rotateInDownLeft"])), (l()(), t["\u0275eld"](159, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](160, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "rotateInDownRight"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["rotateInDownRight"])), (l()(), t["\u0275eld"](162, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](163, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "rotateInUpLeft"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["rotateInUpLeft"])), (l()(), t["\u0275eld"](165, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](166, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "rotateInUpRight"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["rotateInUpRight"])), (l()(), t["\u0275eld"](168, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](169, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "fadeInRightBig"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["fadeInRightBig"])), (l()(), t["\u0275eld"](171, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](172, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "fadeInUp"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["fadeInUp"])), (l()(), t["\u0275eld"](174, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](175, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "fadeInUpBig"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["fadeInUpBig"])), (l()(), t["\u0275eld"](177, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](178, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "flip"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["flip"])), (l()(), t["\u0275eld"](180, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](181, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "flipInX"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["flipInX"])), (l()(), t["\u0275eld"](183, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](184, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "flipInY"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["flipInY"])), (l()(), t["\u0275eld"](186, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](187, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "flipOutX"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["flipOutX"])), (l()(), t["\u0275eld"](189, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](190, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "flipOutY"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["flipOutY"])), (l()(), t["\u0275eld"](192, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](193, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "lightSpeedIn"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["lightSpeedIn"])), (l()(), t["\u0275eld"](195, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](196, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "lightSpeedOut"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["lightSpeedOut"])), (l()(), t["\u0275eld"](198, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](199, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "zoomIn"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["zoomIn"])), (l()(), t["\u0275eld"](201, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](202, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "zoomInDown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["zoomInDown"])), (l()(), t["\u0275eld"](204, 0, null, null, 34, "div", [
                    ["class", "col-xs-6 col-sm-6 col-md-3 col-lg-3"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](205, 0, null, null, 33, "ul", [
                    ["class", "list-unstyled"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](206, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](207, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "zoomInLeft"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["zoomInLeft"])), (l()(), t["\u0275eld"](209, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](210, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "zoomInRight"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["zoomInRight"])), (l()(), t["\u0275eld"](212, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](213, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "zoomInUp"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["zoomInUp"])), (l()(), t["\u0275eld"](215, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](216, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "zoomOut"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["zoomOut"])), (l()(), t["\u0275eld"](218, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](219, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "zoomOutDown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["zoomOutDown"])), (l()(), t["\u0275eld"](221, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](222, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "zoomOutLeft"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["zoomOutLeft"])), (l()(), t["\u0275eld"](224, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](225, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "zoomOutRight"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["zoomOutRight"])), (l()(), t["\u0275eld"](227, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](228, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "zoomOutUp"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["zoomOutUp"])), (l()(), t["\u0275eld"](230, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](231, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "hinge"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["hinge"])), (l()(), t["\u0275eld"](233, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](234, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "rollIn"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["rollIn"])), (l()(), t["\u0275eld"](236, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t["\u0275eld"](237, 0, null, null, 1, "button", [
                    ["class", "animate-element btn btn-light btn-square mb-3 btn-block"],
                    ["data-animation-class", "rollOut"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["rollOut"])), (l()(), t["\u0275eld"](239, 0, null, null, 2, "div", [
                    ["class", "col-lg-5 col-full-lg-down"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](240, 0, null, null, 1, "div", [
                    ["class", "animated text-center"],
                    ["id", "animation-object"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](241, 0, null, null, 0, "img", [
                    ["alt", "animation demo thumb"],
                    ["class", "img-fluid"],
                    ["height", "310"],
                    ["src", "assets/img/animation.png"],
                    ["width", "367"]
                ], null, null, null, null, null))], null, null)
            }
            var d = t["\u0275ccf"]("ms-animation-demo", i, function(l) {
                    return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 1, "ms-animation-demo", [], [
                        [40, "@fadeInAnimation", 0]
                    ], null, null, s, o)), t["\u0275did"](1, 114688, null, 0, i, [b.a], null, null)], function(l, n) {
                        l(n, 1, 0)
                    }, function(l, n) {
                        l(n, 0, 0, !0)
                    })
                }, {}, {}, []),
                m = u("Ip0R"),
                c = u("gIcY"),
                p = u("ZYCi");
            u.d(n, "AnimationDemoModuleNgFactory", function() {
                return g
            });
            var g = t["\u0275cmf"](e, [], function(l) {
                return t["\u0275mod"]([t["\u0275mpd"](512, t.ComponentFactoryResolver, t["\u0275CodegenComponentFactoryResolver"], [
                    [8, [a.a, d]],
                    [3, t.ComponentFactoryResolver], t.NgModuleRef
                ]), t["\u0275mpd"](4608, m.NgLocalization, m.NgLocaleLocalization, [t.LOCALE_ID, [2, m["\u0275angular_packages_common_common_a"]]]), t["\u0275mpd"](4608, c["\u0275angular_packages_forms_forms_i"], c["\u0275angular_packages_forms_forms_i"], []), t["\u0275mpd"](1073742336, m.CommonModule, m.CommonModule, []), t["\u0275mpd"](1073742336, c["\u0275angular_packages_forms_forms_bb"], c["\u0275angular_packages_forms_forms_bb"], []), t["\u0275mpd"](1073742336, c.FormsModule, c.FormsModule, []), t["\u0275mpd"](1073742336, p.p, p.p, [
                    [2, p.v],
                    [2, p.m]
                ]), t["\u0275mpd"](1073742336, e, e, []), t["\u0275mpd"](1024, p.k, function() {
                    return [
                        [{
                            path: "",
                            component: i
                        }]
                    ]
                }, [])])
            })
        }
    }
]);