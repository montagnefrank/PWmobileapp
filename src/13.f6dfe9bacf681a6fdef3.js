(window.webpackJsonp = window.webpackJsonp || []).push([
    [13], {
        "090/": function(l, n, u) {
            "use strict";
            u.r(n);
            var e = u("CcnG"),
                s = function() {},
                a = u("pMnS"),
                t = u("Ip0R"),
                i = u("c+eF"),
                d = function() {
                    function l(l) {
                        this.pageTitleService = l, this.clients = [{
                            image: "assets/img/user-1.jpg",
                            name: "Anne Doe",
                            color: "primary"
                        }, {
                            image: "assets/img/user-2.jpg",
                            name: "Maria Kate",
                            color: "success"
                        }, {
                            image: "assets/img/user-3.jpg",
                            name: "Elisa Janson",
                            color: "warning"
                        }, {
                            image: "assets/img/user-4.jpg",
                            name: "Janson Doe",
                            color: "info"
                        }, {
                            image: "assets/img/user-5.jpg",
                            name: "Jhon Smith",
                            color: "danger"
                        }, {
                            image: "assets/img/user-6.jpg",
                            name: "Rose Kate",
                            color: "green"
                        }]
                    }
                    return l.prototype.ngOnInit = function() {
                        this.pageTitleService.setTitle("Testimonials")
                    }, l
                }(),
                c = e["\u0275crt"]({
                    encapsulation: 0,
                    styles: [
                        [""]
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

            function o(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 11, "div", [
                    ["class", "col-md-12 col-lg-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 10, "div", [
                    ["class", "testimonial-card card text-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](2, 0, null, null, 0, "div", [], [
                    [8, "className", 0]
                ], null, null, null, null)), (l()(), e["\u0275eld"](3, 0, null, null, 1, "div", [
                    ["class", "testimonial-user"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](4, 0, null, null, 0, "img", [
                    ["alt", "testimonail user thumb"],
                    ["class", "img-fluid rounded-circle"],
                    ["height", "150"],
                    ["width", "150"]
                ], [
                    [8, "src", 4]
                ], null, null, null, null)), (l()(), e["\u0275eld"](5, 0, null, null, 6, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](6, 0, null, null, 1, "h2", [], [
                    [8, "className", 0]
                ], null, null, null, null)), (l()(), e["\u0275ted"](7, null, ["", ""])), (l()(), e["\u0275eld"](8, 0, null, null, 0, "div", [
                    ["class", "dropdown-divider my-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](9, 0, null, null, 2, "p", [], null, null, null, null, null)), (l()(), e["\u0275eld"](10, 0, null, null, 0, "i", [
                    ["class", "fa fa-quote-left"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Neque cupiditate assumenda in maiores repudiandae mollitia architecto."]))], null, function(l, n) {
                    l(n, 2, 0, e["\u0275inlineInterpolate"](1, "card-up bg-", n.context.$implicit.color, " p-5")), l(n, 4, 0, e["\u0275inlineInterpolate"](1, "", n.context.$implicit.image, "")), l(n, 6, 0, e["\u0275inlineInterpolate"](1, "text-uppercase text-", n.context.$implicit.color, "")), l(n, 7, 0, n.context.$implicit.name)
                })
            }

            function r(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 8, "div", [
                    ["class", "testimonail-wrapper"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 7, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](2, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](3, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Testimonials"])), (l()(), e["\u0275eld"](5, 0, null, null, 3, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](6, 0, null, null, 2, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275and"](16777216, null, null, 1, null, o)), e["\u0275did"](8, 802816, null, 0, t.NgForOf, [e.ViewContainerRef, e.TemplateRef, e.IterableDiffers], {
                    ngForOf: [0, "ngForOf"]
                }, null)], function(l, n) {
                    l(n, 8, 0, n.component.clients)
                }, null)
            }
            var p = e["\u0275ccf"]("ms-testimonials", d, function(l) {
                    return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 1, "ms-testimonials", [], [
                        [40, "@fadeInAnimation", 0]
                    ], null, null, r, c)), e["\u0275did"](1, 114688, null, 0, d, [i.a], null, null)], function(l, n) {
                        l(n, 1, 0)
                    }, function(l, n) {
                        l(n, 0, 0, !0)
                    })
                }, {}, {}, []),
                m = function() {
                    function l(l) {
                        this.pageTitleService = l, this.posts = [{
                            image: "assets/img/project-1.jpg",
                            title: "Title of section 1"
                        }, {
                            image: "assets/img/project-2.jpg",
                            title: "Title of section 2"
                        }, {
                            image: "assets/img/project-3.jpg",
                            title: "Title of section 3"
                        }]
                    }
                    return l.prototype.ngOnInit = function() {
                        this.pageTitleService.setTitle("Timeline")
                    }, l
                }(),
                f = e["\u0275crt"]({
                    encapsulation: 0,
                    styles: [
                        [""]
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

            function g(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 15, "div", [
                    ["class", "timeline-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 2, "div", [
                    ["class", "timeline-badge badge-success"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](2, 0, null, null, 1, "span", [
                    ["class", "icon"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](3, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-file-image-o fa-2x fa-inverse"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](4, 0, null, null, 11, "div", [
                    ["class", "timeline-card"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](5, 0, null, null, 10, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](6, 0, null, null, 1, "div", [
                    ["class", "timeline-img mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](7, 0, null, null, 0, "img", [
                    ["alt", "timeline image"],
                    ["class", "img-fluid"],
                    ["height", "300"],
                    ["width", "940"]
                ], [
                    [8, "src", 4]
                ], null, null, null, null)), (l()(), e["\u0275eld"](8, 0, null, null, 1, "h2", [], null, null, null, null, null)), (l()(), e["\u0275ted"](9, null, ["", ""])), (l()(), e["\u0275eld"](10, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut."])), (l()(), e["\u0275eld"](12, 0, null, null, 1, "a", [
                    ["class", "btn btn-primary btn-lg btn-square"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Read more"])), (l()(), e["\u0275eld"](14, 0, null, null, 1, "span", [
                    ["class", "timeline-date"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Jan 14"]))], null, function(l, n) {
                    l(n, 7, 0, e["\u0275inlineInterpolate"](1, "", n.context.$implicit.image, "")), l(n, 9, 0, n.context.$implicit.title)
                })
            }

            function b(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 8, "div", [
                    ["class", "timeline-wrapper"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 7, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](2, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](3, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Timeline"])), (l()(), e["\u0275eld"](5, 0, null, null, 3, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](6, 0, null, null, 2, "div", [
                    ["class", "timeline-flow clearfix"]
                ], null, null, null, null, null)), (l()(), e["\u0275and"](16777216, null, null, 1, null, g)), e["\u0275did"](8, 802816, null, 0, t.NgForOf, [e.ViewContainerRef, e.TemplateRef, e.IterableDiffers], {
                    ngForOf: [0, "ngForOf"]
                }, null)], function(l, n) {
                    l(n, 8, 0, n.component.posts)
                }, null)
            }
            var v = e["\u0275ccf"]("ms-timeline", m, function(l) {
                    return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 1, "ms-timeline", [], [
                        [40, "@fadeInAnimation", 0]
                    ], null, null, b, f)), e["\u0275did"](1, 114688, null, 0, m, [i.a], null, null)], function(l, n) {
                        l(n, 1, 0)
                    }, function(l, n) {
                        l(n, 0, 0, !0)
                    })
                }, {}, {}, []),
                h = function() {
                    function l(l) {
                        this.pageTitleService = l
                    }
                    return l.prototype.ngOnInit = function() {
                        this.pageTitleService.setTitle("Pricing")
                    }, l
                }(),
                y = e["\u0275crt"]({
                    encapsulation: 2,
                    styles: [
                        [""]
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

            function x(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 227, "div", [
                    ["class", "pricing-wrapper"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 6, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](2, 0, null, null, 5, "div", [
                    ["class", "col-sm-12 co-md-8 col-lg-6 mx-auto"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](3, 0, null, null, 4, "div", [
                    ["class", "chk-heading text-center mb-5"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](4, 0, null, null, 1, "h2", [
                    ["class", "text-capitalize mb-4 font-2x fw-bold"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Choose your perfect plan"])), (l()(), e["\u0275eld"](6, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. "])), (l()(), e["\u0275eld"](8, 0, null, null, 111, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](9, 0, null, null, 36, "div", [
                    ["class", "col-md-12 col-lg-12 col-xl-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](10, 0, null, null, 35, "div", [
                    ["class", "card text-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](11, 0, null, null, 34, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](12, 0, null, null, 1, "label", [
                    ["class", "ribbon top-left ribbon-primary"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](13, 0, null, null, 0, "span", [
                    ["class", "fa fa-star"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](14, 0, null, null, 1, "p", [
                    ["class", "text-primary font-2x"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Basic"])), (l()(), e["\u0275eld"](16, 0, null, null, 1, "h2", [
                    ["class", "font-4x"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["$150"])), (l()(), e["\u0275eld"](18, 0, null, null, 1, "p", [
                    ["class", "text-capitalize mb-4 text-muted"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["per month"])), (l()(), e["\u0275eld"](20, 0, null, null, 0, "hr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](21, 0, null, null, 21, "div", [
                    ["class", "card-feature mb-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](22, 0, null, null, 20, "ul", [
                    ["class", "list-unstyled"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](23, 0, null, null, 3, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](24, 0, null, null, 1, "span", [
                    ["class", "mr-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](25, 0, null, null, 0, "i", [
                    ["class", "fa fa-area-chart"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" 100+ Graph & Charts"])), (l()(), e["\u0275eld"](27, 0, null, null, 3, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](28, 0, null, null, 1, "span", [
                    ["class", "mr-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](29, 0, null, null, 0, "i", [
                    ["class", "fa fa-inbox"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" 100+ Components"])), (l()(), e["\u0275eld"](31, 0, null, null, 3, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](32, 0, null, null, 1, "span", [
                    ["class", "mr-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](33, 0, null, null, 0, "i", [
                    ["class", "fa fa-adjust"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" 10+ Themes color"])), (l()(), e["\u0275eld"](35, 0, null, null, 3, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](36, 0, null, null, 1, "span", [
                    ["class", "mr-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](37, 0, null, null, 0, "i", [
                    ["class", "fa fa-sliders"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" 100+ Features"])), (l()(), e["\u0275eld"](39, 0, null, null, 3, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](40, 0, null, null, 1, "span", [
                    ["class", "mr-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](41, 0, null, null, 0, "i", [
                    ["class", "fa fa-cubes"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" 100+ Icons"])), (l()(), e["\u0275eld"](43, 0, null, null, 2, "a", [
                    ["class", "btn btn-primary btn-lg"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](44, 0, null, null, 0, "i", [
                    ["class", "la la-cart-plus mr-2 la-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Buy Now"])), (l()(), e["\u0275eld"](46, 0, null, null, 36, "div", [
                    ["class", "col-md-12 col-lg-12 col-xl-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](47, 0, null, null, 35, "div", [
                    ["class", "card text-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](48, 0, null, null, 34, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](49, 0, null, null, 1, "label", [
                    ["class", "ribbon top-left ribbon-warning"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](50, 0, null, null, 0, "span", [
                    ["class", "fa fa-star"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](51, 0, null, null, 1, "p", [
                    ["class", "text-warning font-2x"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Enterprise"])), (l()(), e["\u0275eld"](53, 0, null, null, 1, "h2", [
                    ["class", "font-4x"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["$250"])), (l()(), e["\u0275eld"](55, 0, null, null, 1, "p", [
                    ["class", "text-capitalize mb-4 text-muted"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["per month"])), (l()(), e["\u0275eld"](57, 0, null, null, 0, "hr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](58, 0, null, null, 21, "div", [
                    ["class", "card-feature mb-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](59, 0, null, null, 20, "ul", [
                    ["class", "list-unstyled"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](60, 0, null, null, 3, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](61, 0, null, null, 1, "span", [
                    ["class", "mr-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](62, 0, null, null, 0, "i", [
                    ["class", "fa fa-area-chart"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" 100+ Graph & Charts"])), (l()(), e["\u0275eld"](64, 0, null, null, 3, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](65, 0, null, null, 1, "span", [
                    ["class", "mr-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](66, 0, null, null, 0, "i", [
                    ["class", "fa fa-inbox"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" 100+ Components"])), (l()(), e["\u0275eld"](68, 0, null, null, 3, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](69, 0, null, null, 1, "span", [
                    ["class", "mr-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](70, 0, null, null, 0, "i", [
                    ["class", "fa fa-adjust"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" 10+ Themes color"])), (l()(), e["\u0275eld"](72, 0, null, null, 3, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](73, 0, null, null, 1, "span", [
                    ["class", "mr-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](74, 0, null, null, 0, "i", [
                    ["class", "fa fa-sliders"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" 100+ Features"])), (l()(), e["\u0275eld"](76, 0, null, null, 3, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](77, 0, null, null, 1, "span", [
                    ["class", "mr-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](78, 0, null, null, 0, "i", [
                    ["class", "fa fa-cubes"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" 100+ Icons"])), (l()(), e["\u0275eld"](80, 0, null, null, 2, "a", [
                    ["class", "btn btn-warning btn-lg"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](81, 0, null, null, 0, "i", [
                    ["class", "la la-cart-plus mr-2 la-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Buy Now"])), (l()(), e["\u0275eld"](83, 0, null, null, 36, "div", [
                    ["class", "col-md-12 col-lg-12 col-xl-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](84, 0, null, null, 35, "div", [
                    ["class", "card text-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](85, 0, null, null, 34, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](86, 0, null, null, 1, "label", [
                    ["class", "ribbon top-left ribbon-success"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](87, 0, null, null, 0, "span", [
                    ["class", "fa fa-star"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](88, 0, null, null, 1, "p", [
                    ["class", "text-success font-2x"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Pro"])), (l()(), e["\u0275eld"](90, 0, null, null, 1, "h2", [
                    ["class", "font-4x"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["$350"])), (l()(), e["\u0275eld"](92, 0, null, null, 1, "p", [
                    ["class", "text-capitalize mb-4 text-muted"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["per month"])), (l()(), e["\u0275eld"](94, 0, null, null, 0, "hr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](95, 0, null, null, 21, "div", [
                    ["class", "card-feature mb-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](96, 0, null, null, 20, "ul", [
                    ["class", "list-unstyled"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](97, 0, null, null, 3, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](98, 0, null, null, 1, "span", [
                    ["class", "mr-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](99, 0, null, null, 0, "i", [
                    ["class", "fa fa-area-chart"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" 100+ Graph & Charts"])), (l()(), e["\u0275eld"](101, 0, null, null, 3, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](102, 0, null, null, 1, "span", [
                    ["class", "mr-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](103, 0, null, null, 0, "i", [
                    ["class", "fa fa-inbox"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" 100+ Components"])), (l()(), e["\u0275eld"](105, 0, null, null, 3, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](106, 0, null, null, 1, "span", [
                    ["class", "mr-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](107, 0, null, null, 0, "i", [
                    ["class", "fa fa-adjust"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" 10+ Themes color"])), (l()(), e["\u0275eld"](109, 0, null, null, 3, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](110, 0, null, null, 1, "span", [
                    ["class", "mr-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](111, 0, null, null, 0, "i", [
                    ["class", "fa fa-sliders"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" 100+ Features"])), (l()(), e["\u0275eld"](113, 0, null, null, 3, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](114, 0, null, null, 1, "span", [
                    ["class", "mr-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](115, 0, null, null, 0, "i", [
                    ["class", "fa fa-cubes"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" 100+ Icons"])), (l()(), e["\u0275eld"](117, 0, null, null, 2, "a", [
                    ["class", "btn btn-success btn-lg"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](118, 0, null, null, 0, "i", [
                    ["class", "la la-cart-plus mr-2 la-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Buy Now"])), (l()(), e["\u0275eld"](120, 0, null, null, 107, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](121, 0, null, null, 34, "div", [
                    ["class", "col-md-12 col-lg-12 col-xl-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](122, 0, null, null, 33, "div", [
                    ["class", "card bg-primary text-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](123, 0, null, null, 32, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](124, 0, null, null, 1, "p", [
                    ["class", "font-2x"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Basic"])), (l()(), e["\u0275eld"](126, 0, null, null, 1, "h2", [
                    ["class", "font-4x"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["$150"])), (l()(), e["\u0275eld"](128, 0, null, null, 1, "p", [
                    ["class", "text-capitalize mb-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Per Month"])), (l()(), e["\u0275eld"](130, 0, null, null, 0, "hr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](131, 0, null, null, 21, "div", [
                    ["class", "card-feature mb-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](132, 0, null, null, 20, "ul", [
                    ["class", "list-unstyled"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](133, 0, null, null, 3, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](134, 0, null, null, 1, "span", [
                    ["class", "mr-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](135, 0, null, null, 0, "i", [
                    ["class", "fa fa-area-chart"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" 100+ Graph & Charts"])), (l()(), e["\u0275eld"](137, 0, null, null, 3, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](138, 0, null, null, 1, "span", [
                    ["class", "mr-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](139, 0, null, null, 0, "i", [
                    ["class", "fa fa-inbox"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" 100+ Components"])), (l()(), e["\u0275eld"](141, 0, null, null, 3, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](142, 0, null, null, 1, "span", [
                    ["class", "mr-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](143, 0, null, null, 0, "i", [
                    ["class", "fa fa-adjust"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" 10+ Themes color"])), (l()(), e["\u0275eld"](145, 0, null, null, 3, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](146, 0, null, null, 1, "span", [
                    ["class", "mr-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](147, 0, null, null, 0, "i", [
                    ["class", "fa fa-sliders"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" 100+ Features"])), (l()(), e["\u0275eld"](149, 0, null, null, 3, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](150, 0, null, null, 1, "span", [
                    ["class", "mr-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](151, 0, null, null, 0, "i", [
                    ["class", "fa fa-cubes"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" 100+ Icons"])), (l()(), e["\u0275eld"](153, 0, null, null, 2, "a", [
                    ["class", "btn btn-secondary btn-lg"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](154, 0, null, null, 0, "i", [
                    ["class", "la la-cart-plus mr-2 la-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Buy Now"])), (l()(), e["\u0275eld"](156, 0, null, null, 36, "div", [
                    ["class", "col-md-12 col-lg-12 col-xl-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](157, 0, null, null, 35, "div", [
                    ["class", "card bg-warning text-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](158, 0, null, null, 34, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](159, 0, null, null, 1, "label", [
                    ["class", "ribbon top-left ribbon-primary"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](160, 0, null, null, 0, "span", [
                    ["class", "fa fa-star"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](161, 0, null, null, 1, "p", [
                    ["class", "font-2x"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Enterprise"])), (l()(), e["\u0275eld"](163, 0, null, null, 1, "h2", [
                    ["class", "font-4x"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["$150"])), (l()(), e["\u0275eld"](165, 0, null, null, 1, "p", [
                    ["class", "text-capitalize mb-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Per Month"])), (l()(), e["\u0275eld"](167, 0, null, null, 0, "hr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](168, 0, null, null, 21, "div", [
                    ["class", "card-feature mb-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](169, 0, null, null, 20, "ul", [
                    ["class", "list-unstyled"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](170, 0, null, null, 3, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](171, 0, null, null, 1, "span", [
                    ["class", "mr-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](172, 0, null, null, 0, "i", [
                    ["class", "fa fa-area-chart"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" 100+ Graph & Charts"])), (l()(), e["\u0275eld"](174, 0, null, null, 3, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](175, 0, null, null, 1, "span", [
                    ["class", "mr-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](176, 0, null, null, 0, "i", [
                    ["class", "fa fa-inbox"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" 100+ Components"])), (l()(), e["\u0275eld"](178, 0, null, null, 3, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](179, 0, null, null, 1, "span", [
                    ["class", "mr-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](180, 0, null, null, 0, "i", [
                    ["class", "fa fa-adjust"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" 10+ Themes color"])), (l()(), e["\u0275eld"](182, 0, null, null, 3, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](183, 0, null, null, 1, "span", [
                    ["class", "mr-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](184, 0, null, null, 0, "i", [
                    ["class", "fa fa-sliders"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" 100+ Features"])), (l()(), e["\u0275eld"](186, 0, null, null, 3, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](187, 0, null, null, 1, "span", [
                    ["class", "mr-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](188, 0, null, null, 0, "i", [
                    ["class", "fa fa-cubes"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" 100+ Icons"])), (l()(), e["\u0275eld"](190, 0, null, null, 2, "a", [
                    ["class", "btn btn-secondary btn-lg"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](191, 0, null, null, 0, "i", [
                    ["class", "la la-cart-plus mr-2 la-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Buy Now"])), (l()(), e["\u0275eld"](193, 0, null, null, 34, "div", [
                    ["class", "col-md-12 col-lg-12 col-xl-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](194, 0, null, null, 33, "div", [
                    ["class", "card bg-success text-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](195, 0, null, null, 32, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](196, 0, null, null, 1, "p", [
                    ["class", "font-2x"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Pro"])), (l()(), e["\u0275eld"](198, 0, null, null, 1, "h2", [
                    ["class", "font-4x"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["$150"])), (l()(), e["\u0275eld"](200, 0, null, null, 1, "p", [
                    ["class", "text-capitalize mb-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Per Month"])), (l()(), e["\u0275eld"](202, 0, null, null, 0, "hr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](203, 0, null, null, 21, "div", [
                    ["class", "card-feature mb-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](204, 0, null, null, 20, "ul", [
                    ["class", "list-unstyled"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](205, 0, null, null, 3, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](206, 0, null, null, 1, "span", [
                    ["class", "mr-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](207, 0, null, null, 0, "i", [
                    ["class", "fa fa-area-chart"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" 100+ Graph & Charts"])), (l()(), e["\u0275eld"](209, 0, null, null, 3, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](210, 0, null, null, 1, "span", [
                    ["class", "mr-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](211, 0, null, null, 0, "i", [
                    ["class", "fa fa-inbox"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" 100+ Components"])), (l()(), e["\u0275eld"](213, 0, null, null, 3, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](214, 0, null, null, 1, "span", [
                    ["class", "mr-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](215, 0, null, null, 0, "i", [
                    ["class", "fa fa-adjust"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" 10+ Themes color"])), (l()(), e["\u0275eld"](217, 0, null, null, 3, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](218, 0, null, null, 1, "span", [
                    ["class", "mr-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](219, 0, null, null, 0, "i", [
                    ["class", "fa fa-sliders"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" 100+ Features"])), (l()(), e["\u0275eld"](221, 0, null, null, 3, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](222, 0, null, null, 1, "span", [
                    ["class", "mr-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](223, 0, null, null, 0, "i", [
                    ["class", "fa fa-cubes"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" 100+ Icons"])), (l()(), e["\u0275eld"](225, 0, null, null, 2, "a", [
                    ["class", "btn btn-secondary btn-lg"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](226, 0, null, null, 0, "i", [
                    ["class", "la la-cart-plus mr-2 la-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Buy Now"]))], null, null)
            }
            var w = e["\u0275ccf"]("ms-pricing", h, function(l) {
                    return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 1, "ms-pricing", [], [
                        [40, "@fadeInAnimation", 0]
                    ], null, null, x, y)), e["\u0275did"](1, 114688, null, 0, h, [i.a], null, null)], function(l, n) {
                        l(n, 1, 0)
                    }, function(l, n) {
                        l(n, 0, 0, !0)
                    })
                }, {}, {}, []),
                I = function() {
                    function l(l) {
                        this.pageTitleService = l
                    }
                    return l.prototype.ngOnInit = function() {
                        this.pageTitleService.setTitle("Blank")
                    }, l
                }(),
                k = e["\u0275crt"]({
                    encapsulation: 0,
                    styles: [
                        [""]
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

            function T(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 2, "div", [
                    ["class", "pad-wrap"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" blank works! "]))], null, null)
            }
            var j = e["\u0275ccf"]("ms-blank", I, function(l) {
                    return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 1, "ms-blank", [], [
                        [40, "@fadeInAnimation", 0]
                    ], null, null, T, k)), e["\u0275did"](1, 114688, null, 0, I, [i.a], null, null)], function(l, n) {
                        l(n, 1, 0)
                    }, function(l, n) {
                        l(n, 0, 0, !0)
                    })
                }, {}, {}, []),
                C = u("gIcY"),
                _ = u("ZYCi");
            u.d(n, "PagesDemoModuleNgFactory", function() {
                return F
            });
            var F = e["\u0275cmf"](s, [], function(l) {
                return e["\u0275mod"]([e["\u0275mpd"](512, e.ComponentFactoryResolver, e["\u0275CodegenComponentFactoryResolver"], [
                    [8, [a.a, p, v, w, j]],
                    [3, e.ComponentFactoryResolver], e.NgModuleRef
                ]), e["\u0275mpd"](4608, t.NgLocalization, t.NgLocaleLocalization, [e.LOCALE_ID, [2, t["\u0275angular_packages_common_common_a"]]]), e["\u0275mpd"](4608, C["\u0275angular_packages_forms_forms_i"], C["\u0275angular_packages_forms_forms_i"], []), e["\u0275mpd"](1073742336, t.CommonModule, t.CommonModule, []), e["\u0275mpd"](1073742336, C["\u0275angular_packages_forms_forms_bb"], C["\u0275angular_packages_forms_forms_bb"], []), e["\u0275mpd"](1073742336, C.FormsModule, C.FormsModule, []), e["\u0275mpd"](1073742336, _.p, _.p, [
                    [2, _.v],
                    [2, _.m]
                ]), e["\u0275mpd"](1073742336, s, s, []), e["\u0275mpd"](1024, _.k, function() {
                    return [
                        [{
                            path: "",
                            redirectTo: "user-list",
                            pathMatch: "full"
                        }, {
                            path: "",
                            children: [{
                                path: "testimonials",
                                component: d
                            }, {
                                path: "timeline",
                                component: m
                            }, {
                                path: "pricing",
                                component: h
                            }, {
                                path: "blank",
                                component: I
                            }]
                        }]
                    ]
                }, [])])
            })
        }
    }
]);