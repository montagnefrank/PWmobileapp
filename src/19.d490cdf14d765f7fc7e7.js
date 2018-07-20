(window.webpackJsonp = window.webpackJsonp || []).push([
    [19], {
        Qm7J: function(l, n, e) {
            "use strict";
            e.r(n);
            var u = e("CcnG"),
                t = function() {},
                a = e("pMnS"),
                s = e("Ip0R"),
                i = e("lf6A"),
                o = e("c+eF"),
                r = function() {
                    function l(l) {
                        this.pageTitleService = l, this.style = {}
                    }
                    return l.prototype.ngOnInit = function() {
                        this.pageTitleService.setTitle("Resizable")
                    }, l.prototype.validate = function(l) {
                        return !(l.rectangle.width < 50 || l.rectangle.height < 50)
                    }, l.prototype.onResizeEnd = function(l) {
                        this.style = {
                            position: "fixed",
                            left: l.rectangle.left + "px",
                            top: l.rectangle.top + "px",
                            width: l.rectangle.width + "px",
                            height: l.rectangle.height + "px"
                        }
                    }, l
                }(),
                d = u["\u0275crt"]({
                    encapsulation: 2,
                    styles: [
                        [".resizable-card{z-index:99}"]
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

            function c(l) {
                return u["\u0275vid"](0, [(l()(), u["\u0275eld"](0, 0, null, null, 27, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), u["\u0275eld"](1, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), u["\u0275eld"](2, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), u["\u0275eld"](3, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), u["\u0275eld"](4, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), u["\u0275ted"](-1, null, ["Resizable"])), (l()(), u["\u0275eld"](6, 0, null, null, 21, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), u["\u0275eld"](7, 0, null, null, 3, "p", [
                    ["class", "text-muted"]
                ], null, null, null, null, null)), (l()(), u["\u0275ted"](-1, null, ["An angular 4.0+ directive that allows an element to be resized. Built with "])), (l()(), u["\u0275eld"](9, 0, null, null, 1, "a", [
                    ["class", "font-weight-bold transition"],
                    ["href", "https://github.com/mattlewis92/angular-resizable-element"],
                    ["target", "_blank"]
                ], null, null, null, null, null)), (l()(), u["\u0275ted"](-1, null, ["angular-resizable-element"])), (l()(), u["\u0275eld"](11, 0, null, null, 16, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), u["\u0275eld"](12, 0, null, null, 15, "div", [
                    ["class", "col-lg-12"]
                ], null, null, null, null, null)), (l()(), u["\u0275eld"](13, 0, null, null, 14, "div", [
                    ["class", "card resizable-card over-hidden"],
                    ["mwlResizable", ""]
                ], null, [
                    [null, "resizeEnd"]
                ], function(l, n, e) {
                    var u = !0;
                    return "resizeEnd" === n && (u = !1 !== l.component.onResizeEnd(e) && u), u
                }, null, null)), u["\u0275did"](14, 278528, null, 0, s.NgStyle, [u.KeyValueDiffers, u.ElementRef, u.Renderer2], {
                    ngStyle: [0, "ngStyle"]
                }, null), u["\u0275did"](15, 212992, null, 0, i.a, [u.Renderer2, u.ElementRef, u.NgZone], {
                    validateResize: [0, "validateResize"],
                    resizeEdges: [1, "resizeEdges"],
                    enableGhostResize: [2, "enableGhostResize"],
                    resizeSnapGrid: [3, "resizeSnapGrid"]
                }, {
                    resizeEnd: "resizeEnd"
                }), u["\u0275pod"](16, {
                    bottom: 0,
                    right: 1,
                    top: 2,
                    left: 3
                }), u["\u0275pod"](17, {
                    left: 0,
                    right: 1
                }), (l()(), u["\u0275eld"](18, 0, null, null, 4, "div", [
                    ["class", "card-header transparent border-0 text-muted"]
                ], null, null, null, null, null)), (l()(), u["\u0275eld"](19, 0, null, null, 3, "h5", [
                    ["class", "mb-0"]
                ], null, null, null, null, null)), (l()(), u["\u0275ted"](-1, null, ["Resize me! "])), (l()(), u["\u0275eld"](21, 0, null, null, 0, "i", [
                    ["class", "fa fa-arrows-h ml-2 mr-2"]
                ], null, null, null, null, null)), (l()(), u["\u0275eld"](22, 0, null, null, 0, "i", [
                    ["class", "fa fa-arrows-v"]
                ], null, null, null, null, null)), (l()(), u["\u0275eld"](23, 0, null, null, 4, "div", [
                    ["class", "card-body h-100"],
                    ["perfect-scrollbar", ""]
                ], null, null, null, null, null)), (l()(), u["\u0275eld"](24, 0, null, null, 0, "img", [
                    ["alt", "adam"],
                    ["class", "mr-3 mb-4"],
                    ["height", "150"],
                    ["src", "assets/img/user-1.jpg"],
                    ["width", "150"]
                ], null, null, null, null, null)), (l()(), u["\u0275eld"](25, 0, null, null, 0, "img", [
                    ["alt", "ashley"],
                    ["class", "mr-3 mb-4"],
                    ["height", "150"],
                    ["src", "assets/img/user-2.jpg"],
                    ["width", "150"]
                ], null, null, null, null, null)), (l()(), u["\u0275eld"](26, 0, null, null, 0, "img", [
                    ["alt", "bruno"],
                    ["class", "mr-3 mb-4"],
                    ["height", "150"],
                    ["src", "assets/img/user-3.jpg"],
                    ["width", "150"]
                ], null, null, null, null, null)), (l()(), u["\u0275eld"](27, 0, null, null, 0, "img", [
                    ["alt", "julia"],
                    ["class", "mr-3 mb-4"],
                    ["height", "150"],
                    ["src", "assets/img/user-4.jpg"],
                    ["width", "150"]
                ], null, null, null, null, null))], function(l, n) {
                    var e = n.component;
                    l(n, 14, 0, e.style), l(n, 15, 0, e.validate, l(n, 16, 0, !0, !0, !0, !0), !0, l(n, 17, 0, 50, 50))
                }, null)
            }
            var m = u["\u0275ccf"]("app-resizable", r, function(l) {
                    return u["\u0275vid"](0, [(l()(), u["\u0275eld"](0, 0, null, null, 1, "app-resizable", [], [
                        [40, "@fadeInAnimation", 0]
                    ], null, null, c, d)), u["\u0275did"](1, 114688, null, 0, r, [o.a], null, null)], function(l, n) {
                        l(n, 1, 0)
                    }, function(l, n) {
                        l(n, 0, 0, !0)
                    })
                }, {}, {}, []),
                p = e("gIcY"),
                g = e("ZYCi");
            e.d(n, "ResizableDemoModuleNgFactory", function() {
                return f
            });
            var f = u["\u0275cmf"](t, [], function(l) {
                return u["\u0275mod"]([u["\u0275mpd"](512, u.ComponentFactoryResolver, u["\u0275CodegenComponentFactoryResolver"], [
                    [8, [a.a, m]],
                    [3, u.ComponentFactoryResolver], u.NgModuleRef
                ]), u["\u0275mpd"](4608, s.NgLocalization, s.NgLocaleLocalization, [u.LOCALE_ID, [2, s["\u0275angular_packages_common_common_a"]]]), u["\u0275mpd"](4608, p["\u0275angular_packages_forms_forms_i"], p["\u0275angular_packages_forms_forms_i"], []), u["\u0275mpd"](1073742336, s.CommonModule, s.CommonModule, []), u["\u0275mpd"](1073742336, p["\u0275angular_packages_forms_forms_bb"], p["\u0275angular_packages_forms_forms_bb"], []), u["\u0275mpd"](1073742336, p.FormsModule, p.FormsModule, []), u["\u0275mpd"](1073742336, i.b, i.b, []), u["\u0275mpd"](1073742336, g.p, g.p, [
                    [2, g.v],
                    [2, g.m]
                ]), u["\u0275mpd"](1073742336, t, t, []), u["\u0275mpd"](1024, g.k, function() {
                    return [
                        [{
                            path: "",
                            component: r
                        }]
                    ]
                }, [])])
            })
        }
    }
]);