(window.webpackJsonp = window.webpackJsonp || []).push([
    [31], {
        QTam: function(l, n) {
            ! function(l, n) {
                "use strict";
                var u, e;
                l.jQuery && l.jQuery.fn ? (u = l.jQuery, (e = function(l, n) {
                    this.$element = u(l), this.$collapse = this.$element.find("[data-widgster=collapse]"), this.$expand = this.$element.find("[data-widgster=expand]"), this.$fullscreen = this.$element.find("[data-widgster=fullscreen]"), this.$restore = this.$element.find("[data-widgster=restore]"), this.options = n, this.collapsed = n.collapsed, this.fullscreened = n.fullscreened, this._initHandlers(), this.collapsed ? this.collapse(!1) : this.$expand.hide(), this.fullscreened ? this.fullscreen() : this.$restore.hide(), this.options.autoload && this.load();
                    var e = parseInt(this.options.autoload);
                    if (!isNaN(e)) {
                        var s = this;
                        this._autoloadInterval = setInterval(function() {
                            s.load()
                        }, e)
                    }
                }).DEFAULTS = {
                    collapsed: !1,
                    fullscreened: !1,
                    transitionDuration: 150,
                    bodySelector: ".body",
                    showLoader: !0,
                    autoload: !1,
                    loaderTemplate: '<div style="text-align: center; margin-top: 10px;">Loading...</div>',
                    closePrompt: function(l) {
                        l()
                    }
                }, e.prototype.collapse = function(l) {
                    l = void 0 === l || l;
                    var n = u.Event("collapse.widgster");
                    if (this.$element.trigger(n), !n.isDefaultPrevented()) {
                        var e = this,
                            s = l ? this.options.transitionDuration : 0;
                        return this.$element.find(this.options.bodySelector).slideUp(s, function() {
                            e.$element.addClass("collapsed"), e.$element.trigger(u.Event("collapsed.widgster")), e.collapsed = !0
                        }), this.$collapse.hide(), this.$expand.show(), !1
                    }
                }, e.prototype.expand = function(l) {
                    l = void 0 === l || l;
                    var n = u.Event("expand.widgster");
                    if (this.$element.trigger(n), !n.isDefaultPrevented()) {
                        var e = this,
                            s = l ? this.options.transitionDuration : 0;
                        return this.$element.find(this.options.bodySelector).slideDown(s, function() {
                            e.$element.removeClass("collapsed"), e.$element.trigger(u.Event("expanded.widgster")), e.collapsed = !1
                        }), this.$collapse.show(), this.$expand.hide(), !1
                    }
                }, e.prototype.close = function() {
                    return this.options.closePrompt && this.options.closePrompt(u.proxy(this._doClose, this)), !1
                }, e.prototype.load = function() {
                    var l = u.Event("load.widgster");
                    if (this.$element.trigger(l), !l.isDefaultPrevented()) {
                        var n = this;
                        return this.$element.find(this.options.bodySelector).load(this.options.load, function(l, e, s) {
                            n.expand(), n.options.showLoader && n._hideLoader(), n.$element.trigger(u.Event("loaded.widgster", {
                                responseText: l,
                                textStatus: e,
                                xhr: s
                            }))
                        }), this.options.showLoader && this._showLoader(), !1
                    }
                }, e.prototype.fullscreen = function() {
                    var l = u.Event("fullscreen.widgster");
                    if (this.$element.trigger(l), !l.isDefaultPrevented()) return this.$element.css({
                        position: "fixed",
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        margin: 0,
                        "z-index": 1e4
                    }), u("body").css("overflow", "hidden"), this.wasCollapsed = this.collapsed, this.expand(!1), this.$fullscreen.hide(), this.$restore.show(), this.$collapse.hide(), this.$expand.hide(), this.$element.addClass("fullscreened"), this.$element.trigger(u.Event("fullscreened.widgster")), !1
                }, e.prototype.restore = function() {
                    var l = u.Event("restore.widgster");
                    if (this.$element.trigger(l), !l.isDefaultPrevented()) return this.$element.css({
                        position: "",
                        top: "",
                        right: "",
                        bottom: "",
                        left: "",
                        margin: "",
                        "z-index": ""
                    }), u("body").css("overflow", ""), this.$fullscreen.show(), this.$restore.hide(), this.collapsed ? (this.$collapse.hide(), this.$expand.show()) : (this.$collapse.show(), this.$expand.hide()), this.wasCollapsed && this.collapse(!1), this.$element.removeClass("fullscreened"), this.$element.trigger(u.Event("restored.widgster")), !1
                }, e.prototype._doClose = function() {
                    var l = u.Event("close.widgster");
                    this.$element.trigger(l), l.isDefaultPrevented() || (u("body").css("overflow", ""), this.$element.detach(), l = u.Event("closed.widgster", {
                        $element: this.$element
                    }), this.$element.trigger(l))
                }, e.prototype._showLoader = function() {
                    var l = this.$element.find(this.options.bodySelector);
                    this.$loaderWrap = this.$element.find(".widgster-loader-wrap"), 0 == this.$loaderWrap.length && (this.$loaderWrap = u('<div class="widgster-loader-wrap" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; display: none"></div>'), this.$element.append(this.$loaderWrap)), this.$loaderWrap.html(this.options.loaderTemplate), this.$loaderWrap.css({
                        "margin-top": l.position().top
                    }), this.collapsed || (l.fadeTo(this.options.transitionDuration, 0), this.$loaderWrap.fadeIn(this.options.transitionDuration))
                }, e.prototype._hideLoader = function() {
                    this.$loaderWrap.fadeOut(this.options.transitionDuration), this.$element.find(this.options.bodySelector).fadeTo(this.options.transitionDuration, 1)
                }, e.prototype._initHandlers = function() {
                    this.$element.on("click.collapse.widgster", "[data-widgster=collapse]", u.proxy(this.collapse, this)), this.$element.on("click.expand.widgster", "[data-widgster=expand]", u.proxy(this.expand, this)), this.$element.on("click.close.widgster", "[data-widgster=close]", u.proxy(this.close, this)), this.$element.on("click.load.widgster", "[data-widgster=load]", u.proxy(this.load, this)), this.$element.on("click.fullscreen.widgster", "[data-widgster=fullscreen]", u.proxy(this.fullscreen, this)), this.$element.on("click.restore.widgster", "[data-widgster=restore]", u.proxy(this.restore, this))
                }, u.fn.widgster = function(l) {
                    return this.each(function() {
                        var n = u(this),
                            s = n.data("widgster"),
                            d = u.extend({}, e.DEFAULTS, function(l, n) {
                                var u = {};
                                for (var e in n)
                                    if ("widgster" == e.slice(0, "widgster".length)) {
                                        var s = e.slice("widgster".length, e.length);
                                        u[s = s.charAt(0).toLowerCase() + s.slice(1)] = n[e]
                                    }
                                return u
                            }(0, n.data()), "object" == typeof l && l);
                        s || n.data("widgster", new e(this, d)), "string" == typeof l && s[l]()
                    })
                }, u.fn.widgster.Constructor = e) : console.warn("Widgster must be executed in a browser environment with jQuery defined")
            }("undefined" != typeof window ? window : this)
        },
        "uP/6": function(l, n, u) {
            "use strict";
            u.r(n);
            var e = u("CcnG"),
                s = function() {},
                d = u("7Z8E"),
                t = u("pMnS"),
                a = u("Ip0R"),
                i = u("gIcY"),
                c = u("Wnl8"),
                o = u("LKRB"),
                r = u("e5Md"),
                p = u("l/X3"),
                m = (u("QTam"), function() {
                    function l(l) {
                        this.$el = jQuery(l.nativeElement), jQuery.fn.widgster.Constructor.DEFAULTS.bodySelector = ".widget-body", jQuery(document).on("close.widgster", function(l) {
                            var n = jQuery(l.target).closest(' [class*="col-"]:not(.widget-container)');
                            n.find(".widget").not(l.target).length || n.remove()
                        }), jQuery(document).on("fullscreened.widgster", function(l) {
                            jQuery(l.target).find("div.widget-body").addClass("card-block-scrolling")
                        }).on("restored.widgster", function(l) {
                            jQuery(l.target).find("div.widget-body").removeClass("card-block-scrolling")
                        })
                    }
                    return l.prototype.ngOnInit = function() {
                        this.$el.widgster()
                    }, l
                }()),
                g = u("14xD"),
                f = u("ikwa"),
                h = u("afy3"),
                v = u("7lyt"),
                w = u("c+eF"),
                b = new Date,
                x = (b.getHours() < 10 ? "0" : "") + b.getHours() + ":" + (b.getMinutes() < 10 ? "0" : "") + b.getMinutes() + ":" + (b.getSeconds() < 10 ? "0" : "") + b.getSeconds(),
                y = [{
                    name: "Product 1",
                    series: [{
                        name: x,
                        value: 21632
                    }]
                }, {
                    name: "Product 2",
                    series: [{
                        name: x,
                        value: 32632
                    }]
                }],
                k = [{
                    name: "Orders",
                    series: [{
                        name: "1980",
                        value: 21632
                    }]
                }],
                j = [{
                    name: "Product-1",
                    value: 69400
                }, {
                    name: "Product-2",
                    value: 59400
                }, {
                    name: "Product-3",
                    value: 82400
                }, {
                    name: "Product-4",
                    value: 73400
                }, {
                    name: "Product-5",
                    value: 25400
                }, {
                    name: "Product-6",
                    value: 23400
                }, {
                    name: "Product-7",
                    value: 49300
                }, {
                    name: "Product-8",
                    value: 55400
                }, {
                    name: "Product-9",
                    value: 37400
                }, {
                    name: "Product-10",
                    value: 65220
                }, {
                    name: "Product-11",
                    value: 79400
                }, {
                    name: "Product-12",
                    value: 58400
                }, {
                    name: "Product-13",
                    value: 41400
                }, {
                    name: "Product-14",
                    value: 37400
                }, {
                    name: "Product-15",
                    value: 33700
                }, {
                    name: "Product-16",
                    value: 42700
                }, {
                    name: "Product-17",
                    value: 52700
                }, {
                    name: "Product-18",
                    value: 62700
                }],
                C = [{
                    name: "Customers",
                    series: [{
                        name: "2000",
                        value: 34502
                    }]
                }],
                T = [{
                    name: "Item-1",
                    value: 23701
                }, {
                    name: "Item-2",
                    value: 33701
                }, {
                    name: "Item-3",
                    value: 63701
                }, {
                    name: "Item-4",
                    value: 52701
                }, {
                    name: "Item-5",
                    value: 73701
                }, {
                    name: "Item-6",
                    value: 43701
                }, {
                    name: "Item-7",
                    value: 83701
                }, {
                    name: "Item-8",
                    value: 29701
                }, {
                    name: "Item-9",
                    value: 69701
                }, {
                    name: "Item-10",
                    value: 58701
                }, {
                    name: "Item-11",
                    value: 65701
                }, {
                    name: "Item-12",
                    value: 47701
                }, {
                    name: "Item-13",
                    value: 41701
                }, {
                    name: "Item-14",
                    value: 25701
                }, {
                    name: "Item-15",
                    value: 35701
                }],
                S = [{
                    name: "Germany",
                    value: 60632
                }, {
                    name: "United States",
                    value: 49737
                }, {
                    name: "France",
                    value: 46745
                }],
                A = u("t/UT");

            function E(l) {
                return (l.getHours() < 10 ? "0" : "") + l.getHours() + ":" + (l.getMinutes() < 10 ? "0" : "") + l.getMinutes() + ":" + (l.getSeconds() < 10 ? "0" : "") + l.getSeconds()
            }
            var R = function() {
                    function l(l) {
                        var n = this;
                        this.pageTitleService = l, this.customStyle = [{
                            featureType: "water",
                            elementType: "geometry",
                            stylers: [{
                                color: "#e9e9e9"
                            }, {
                                lightness: 17
                            }]
                        }, {
                            featureType: "landscape",
                            elementType: "geometry",
                            stylers: [{
                                color: "#f5f5f5"
                            }, {
                                lightness: 20
                            }]
                        }, {
                            featureType: "road.highway",
                            elementType: "geometry.fill",
                            stylers: [{
                                color: "#ffffff"
                            }, {
                                lightness: 17
                            }]
                        }, {
                            featureType: "road.highway",
                            elementType: "geometry.stroke",
                            stylers: [{
                                color: "#ffffff"
                            }, {
                                lightness: 29
                            }, {
                                weight: .2
                            }]
                        }, {
                            featureType: "road.arterial",
                            elementType: "geometry",
                            stylers: [{
                                color: "#ffffff"
                            }, {
                                lightness: 18
                            }]
                        }, {
                            featureType: "road.local",
                            elementType: "geometry",
                            stylers: [{
                                color: "#ffffff"
                            }, {
                                lightness: 16
                            }]
                        }, {
                            featureType: "poi",
                            elementType: "geometry",
                            stylers: [{
                                color: "#f5f5f5"
                            }, {
                                lightness: 21
                            }]
                        }, {
                            featureType: "poi.park",
                            elementType: "geometry",
                            stylers: [{
                                color: "#dedede"
                            }, {
                                lightness: 21
                            }]
                        }, {
                            elementType: "labels.text.stroke",
                            stylers: [{
                                visibility: "on"
                            }, {
                                color: "#ffffff"
                            }, {
                                lightness: 16
                            }]
                        }, {
                            elementType: "labels.text.fill",
                            stylers: [{
                                saturation: 36
                            }, {
                                color: "#333333"
                            }, {
                                lightness: 40
                            }]
                        }, {
                            elementType: "labels.icon",
                            stylers: [{
                                visibility: "off"
                            }]
                        }, {
                            featureType: "transit",
                            elementType: "geometry",
                            stylers: [{
                                color: "#f2f2f2"
                            }, {
                                lightness: 19
                            }]
                        }, {
                            featureType: "administrative",
                            elementType: "geometry.fill",
                            stylers: [{
                                color: "#fefefe"
                            }, {
                                lightness: 20
                            }]
                        }, {
                            featureType: "administrative",
                            elementType: "geometry.stroke",
                            stylers: [{
                                color: "#fefefe"
                            }, {
                                lightness: 17
                            }, {
                                weight: 1.2
                            }]
                        }], this.lat = 50.937531, this.lng = 6.960278600000038, this.newTodoText = "", this.todoList = [{
                            text: "Make the bed"
                        }, {
                            text: "Pay Bills"
                        }, {
                            text: "Prepare documents"
                        }, {
                            text: "Send update mails"
                        }, {
                            text: "Attend seminar at 3:00 PM"
                        }, {
                            text: "Book air tickets"
                        }, {
                            text: "Reply support requests"
                        }, {
                            text: "Yoga classes"
                        }], this.colorScheme = {
                            domain: ["#FFFFFF"]
                        }, this.autoScale = !0, this.showXAxis = !0, this.showYAxis = !0, this.gradient = !0, this.tooltipDisabled = !1, this.showLegend = !1, this.showXAxisLabel = !0, this.xAxisLabel = "Time", this.showYAxisLabel = !0, this.yAxisLabel = "Cost", this.colorScheme2 = {
                            domain: ["#0066EB", "#00caac", "#51CAE3", "#ff5723", "#F54B5E", "#F8C51C"]
                        }, this.dynamicChartColor = {
                            domain: ["#ff5723", "#0066EB"]
                        }, this.picChartColor = {
                            domain: ["#43ae3f", "#0066EB", "#ff5723"]
                        }, this.showLabels = !1, this.explodeSlices = !1, this.doughnut = !1, this.newmembers = [{
                            image: "assets/img/user-1.jpg",
                            name: "jim Conner"
                        }, {
                            image: "assets/img/user-2.jpg",
                            name: "Frederick"
                        }, {
                            image: "assets/img/user-3.jpg",
                            name: "Lucinda"
                        }, {
                            image: "assets/img/user-4.jpg",
                            name: "Chester"
                        }, {
                            image: "assets/img/user-5.jpg",
                            name: "Clayton"
                        }, {
                            image: "assets/img/user-6.jpg",
                            name: "Andrew"
                        }, {
                            image: "assets/img/user-7.jpg",
                            name: "Terry"
                        }, {
                            image: "assets/img/user-8.jpg",
                            name: "Martha"
                        }], setInterval(function() {
                            n.cost = n.addRandomValue2().slice()
                        }, 3e3)
                    }
                    return l.prototype.ngOnInit = function() {
                        var l = this;
                        this.pageTitleService.setTitle("Home"), this.orders = k, this.products = j, this.customers = C, this.refunds = T, this.orders = this.addRandomValue("orders"), this.customers = this.addRandomValue("customers"), this.cost = y, this.pie = S, setTimeout(function() {
                            return l.orders = k.slice()
                        }), setTimeout(function() {
                            return l.products = j.slice()
                        }), setTimeout(function() {
                            return l.customers = C.slice()
                        }), setTimeout(function() {
                            return l.refunds = T.slice()
                        }), setTimeout(function() {
                            return l.pie = S.slice()
                        }), setTimeout(function() {
                            return l.cost = y.slice()
                        });
                        var n = document.querySelector(".to-do-list-wrap ");
                        window.matchMedia("(min-width: 960px)").matches && new A.a(n)
                    }, l.prototype.addRandomValue = function(l) {
                        switch (l) {
                            case "orders":
                                for (var n = 1; n < 30; n++) this.orders[0].series.push({
                                    name: 1980 + n,
                                    value: Math.ceil(1e6 * Math.random())
                                });
                                return this.orders;
                            case "customers":
                                for (n = 1; n < 15; n++) this.customers[0].series.push({
                                    name: 2e3 + n,
                                    value: Math.ceil(1e6 * Math.random())
                                });
                                return this.customers;
                            default:
                                return this.orders
                        }
                    }, l.prototype.addRandomValue2 = function() {
                        var l = 1e3 * Math.random();
                        this.cost[0].series.push({
                            name: E(new Date),
                            value: l
                        });
                        var n = 1e3 * Math.random();
                        return this.cost[1].series.push({
                            name: E(new Date),
                            value: n
                        }), this.cost[0].series.length > 5 && this.cost[0].series.splice(0, 1), this.cost[1].series.length > 5 && this.cost[1].series.splice(0, 1), this.cost
                    }, l.prototype.onSelect = function(l) {
                        console.log(l)
                    }, l.prototype.getNotDeleted = function() {
                        return this.todoList.filter(function(l) {
                            return !l.deleted
                        })
                    }, l.prototype.addToDoItem = function(l) {
                        1 !== l.which && 13 !== l.which || "" == this.newTodoText.trim() || (this.todoList.unshift({
                            text: this.newTodoText
                        }), this.newTodoText = "")
                    }, l.prototype.ngOnDestroy = function() {
                        this.cost[0].series.length = 0
                    }, l
                }(),
                $ = e["\u0275crt"]({
                    encapsulation: 2,
                    styles: [
                        [".progress{height:auto}"]
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

            function L(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 13, "li", [], null, [
                    [null, "mouseenter"],
                    [null, "mouseleave"]
                ], function(l, n, u) {
                    var e = !0;
                    return "mouseenter" === n && (e = 0 != (l.context.$implicit.isActive = !0) && e), "mouseleave" === n && (e = 0 != (l.context.$implicit.isActive = !1) && e), e
                }, null, null)), e["\u0275did"](1, 278528, null, 0, a.NgClass, [e.IterableDiffers, e.KeyValueDiffers, e.ElementRef, e.Renderer2], {
                    ngClass: [0, "ngClass"]
                }, null), e["\u0275pod"](2, {
                    checked: 0,
                    active: 1
                }), (l()(), e["\u0275eld"](3, 0, null, null, 9, "label", [
                    ["class", "custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](4, 0, null, null, 5, "input", [
                    ["class", "custom-control-input"],
                    ["type", "checkbox"]
                ], [
                    [2, "ng-untouched", null],
                    [2, "ng-touched", null],
                    [2, "ng-pristine", null],
                    [2, "ng-dirty", null],
                    [2, "ng-valid", null],
                    [2, "ng-invalid", null],
                    [2, "ng-pending", null]
                ], [
                    [null, "ngModelChange"],
                    [null, "change"],
                    [null, "blur"]
                ], function(l, n, u) {
                    var s = !0;
                    return "change" === n && (s = !1 !== e["\u0275nov"](l, 5).onChange(u.target.checked) && s), "blur" === n && (s = !1 !== e["\u0275nov"](l, 5).onTouched() && s), "ngModelChange" === n && (s = !1 !== (l.context.$implicit.isChecked = u) && s), s
                }, null, null)), e["\u0275did"](5, 16384, null, 0, i.CheckboxControlValueAccessor, [e.Renderer2, e.ElementRef], null, null), e["\u0275prd"](1024, null, i.NG_VALUE_ACCESSOR, function(l) {
                    return [l]
                }, [i.CheckboxControlValueAccessor]), e["\u0275did"](7, 671744, null, 0, i.NgModel, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, i.NG_VALUE_ACCESSOR]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), e["\u0275prd"](2048, null, i.NgControl, null, [i.NgModel]), e["\u0275did"](9, 16384, null, 0, i.NgControlStatus, [
                    [4, i.NgControl]
                ], null, null), (l()(), e["\u0275eld"](10, 0, null, null, 0, "span", [
                    ["class", "custom-control-indicator"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](11, 0, null, null, 1, "span", [
                    ["class", "custom-control-description"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](12, null, ["", ""])), (l()(), e["\u0275eld"](13, 0, null, null, 0, "i", [
                    ["class", "fa fa-trash text-danger"]
                ], null, [
                    [null, "click"]
                ], function(l, n, u) {
                    var e = !0;
                    return "click" === n && (e = 0 != (l.context.$implicit.deleted = !0) && e), e
                }, null, null))], function(l, n) {
                    l(n, 1, 0, l(n, 2, 0, n.context.$implicit.isChecked, n.context.$implicit.isActive)), l(n, 7, 0, n.context.$implicit.isChecked)
                }, function(l, n) {
                    l(n, 4, 0, e["\u0275nov"](n, 9).ngClassUntouched, e["\u0275nov"](n, 9).ngClassTouched, e["\u0275nov"](n, 9).ngClassPristine, e["\u0275nov"](n, 9).ngClassDirty, e["\u0275nov"](n, 9).ngClassValid, e["\u0275nov"](n, 9).ngClassInvalid, e["\u0275nov"](n, 9).ngClassPending), l(n, 12, 0, n.context.$implicit.text)
                })
            }

            function M(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 5, "div", [
                    ["class", "col-6 col-sm-3 col-md-2 col-lg-3 col-12-lg-down"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 4, "div", [
                    ["class", "chk-thumbnail"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](2, 0, null, null, 0, "img", [
                    ["alt", "user image"],
                    ["class", "img-fluid mb-2 thumbnail"],
                    ["height", "95"],
                    ["width", "95"]
                ], [
                    [8, "src", 4]
                ], null, null, null, null)), (l()(), e["\u0275eld"](3, 0, null, null, 2, "div", [
                    ["class", "chk-thumbnail-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](4, 0, null, null, 1, "p", [
                    ["class", "text-primary"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](5, null, ["", ""]))], null, function(l, n) {
                    l(n, 2, 0, e["\u0275inlineInterpolate"](1, "", n.context.$implicit.image, "")), l(n, 5, 0, n.context.$implicit.name)
                })
            }

            function D(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 60, "div", [
                    ["class", "row base-card"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 9, "div", [
                    ["class", "col-xs-12 col-sm-6 col-md-4 col-lg-2 mb-4 col-one-half-lg-down fade-in-up"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](2, 0, null, null, 8, "div", [
                    ["class", "bg-primary pl-2 lazy-up"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](3, 0, null, null, 7, "div", [
                    ["class", "d-flex bg-light justify-content-between p-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](4, 0, null, null, 4, "div", [], null, null, null, null, null)), (l()(), e["\u0275eld"](5, 0, null, null, 1, "h2", [
                    ["class", "fw-normal"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Sales"])), (l()(), e["\u0275eld"](7, 0, null, null, 1, "h3", [
                    ["class", "fw-normal m-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["4,983"])), (l()(), e["\u0275eld"](9, 0, null, null, 1, "div", [
                    ["class", "dash-icon"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](10, 0, null, null, 0, "i", [
                    ["class", "icon-wallet icons font-xl"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](11, 0, null, null, 9, "div", [
                    ["class", "col-xs-12 col-sm-6 col-md-4 col-lg-2 mb-4 col-one-half-lg-down fade-in-up"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](12, 0, null, null, 8, "div", [
                    ["class", "bg-success pl-2 lazy-up"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](13, 0, null, null, 7, "div", [
                    ["class", "d-flex bg-light justify-content-between p-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](14, 0, null, null, 4, "div", [], null, null, null, null, null)), (l()(), e["\u0275eld"](15, 0, null, null, 1, "h2", [
                    ["class", "fw-normal"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Likes"])), (l()(), e["\u0275eld"](17, 0, null, null, 1, "h3", [
                    ["class", "fw-normal m-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["47,513"])), (l()(), e["\u0275eld"](19, 0, null, null, 1, "div", [
                    ["class", "dash-icon"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](20, 0, null, null, 0, "i", [
                    ["class", "icon-like font-xl"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](21, 0, null, null, 9, "div", [
                    ["class", "col-xs-12 col-sm-6 col-md-4 col-lg-2 mb-4 col-one-half-lg-down fade-in-up"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](22, 0, null, null, 8, "div", [
                    ["class", "bg-warning pl-2 lazy-up"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](23, 0, null, null, 7, "div", [
                    ["class", "d-flex bg-light justify-content-between p-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](24, 0, null, null, 4, "div", [], null, null, null, null, null)), (l()(), e["\u0275eld"](25, 0, null, null, 1, "h2", [
                    ["class", "fw-normal"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Download"])), (l()(), e["\u0275eld"](27, 0, null, null, 1, "h3", [
                    ["class", "fw-normal m-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["1,89,200"])), (l()(), e["\u0275eld"](29, 0, null, null, 1, "div", [
                    ["class", "dash-icon"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](30, 0, null, null, 0, "i", [
                    ["class", "icon-cloud-download icons font-xl"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](31, 0, null, null, 9, "div", [
                    ["class", "col-xs-12 col-sm-6 col-md-4 col-lg-2 mb-4 col-one-half-lg-down fade-in-up"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](32, 0, null, null, 8, "div", [
                    ["class", "bg-green pl-2 lazy-up"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](33, 0, null, null, 7, "div", [
                    ["class", "d-flex bg-light justify-content-between p-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](34, 0, null, null, 4, "div", [], null, null, null, null, null)), (l()(), e["\u0275eld"](35, 0, null, null, 1, "h2", [
                    ["class", "fw-normal"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Profit"])), (l()(), e["\u0275eld"](37, 0, null, null, 1, "h3", [
                    ["class", "fw-normal m-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["$98,575"])), (l()(), e["\u0275eld"](39, 0, null, null, 1, "div", [
                    ["class", "dash-icon"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](40, 0, null, null, 0, "i", [
                    ["class", "icon-graph icons font-xl"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](41, 0, null, null, 9, "div", [
                    ["class", "col-xs-12 col-sm-6 col-md-4 col-lg-2 mb-4 col-one-half-lg-down fade-in-up"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](42, 0, null, null, 8, "div", [
                    ["class", "bg-danger pl-2 lazy-up"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](43, 0, null, null, 7, "div", [
                    ["class", "d-flex bg-light justify-content-between p-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](44, 0, null, null, 4, "div", [], null, null, null, null, null)), (l()(), e["\u0275eld"](45, 0, null, null, 1, "h2", [
                    ["class", "fw-normal"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Message"])), (l()(), e["\u0275eld"](47, 0, null, null, 1, "h3", [
                    ["class", "fw-normal m-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["135"])), (l()(), e["\u0275eld"](49, 0, null, null, 1, "div", [
                    ["class", "dash-icon"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](50, 0, null, null, 0, "i", [
                    ["class", "icon-envelope-open icons font-xl"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](51, 0, null, null, 9, "div", [
                    ["class", "col-xs-12 col-sm-6 col-md-4 col-lg-2 mb-4 col-one-half-lg-down fade-in-up"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](52, 0, null, null, 8, "div", [
                    ["class", "bg-yellow pl-2 lazy-up"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](53, 0, null, null, 7, "div", [
                    ["class", "d-flex bg-light justify-content-between p-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](54, 0, null, null, 4, "div", [], null, null, null, null, null)), (l()(), e["\u0275eld"](55, 0, null, null, 1, "h2", [
                    ["class", "fw-normal"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Member"])), (l()(), e["\u0275eld"](57, 0, null, null, 1, "h3", [
                    ["class", "fw-normal m-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["2,56,784"])), (l()(), e["\u0275eld"](59, 0, null, null, 1, "div", [
                    ["class", "dash-icon"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](60, 0, null, null, 0, "i", [
                    ["class", "icon-people icons font-xl"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](61, 0, null, null, 110, "div", [
                    ["class", "row pt-4 mb-n2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](62, 0, null, null, 26, "div", [
                    ["class", "col-xl-3 col-lg-6 col-md-6 mb-4 col-half-lg-down mb-3 mb-5-down"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](63, 0, null, null, 25, "div", [
                    ["class", "card border-0 bg-primary hover-up"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](64, 0, null, null, 8, "div", [
                    ["class", "card-head d-flex justify-content-between pt-3 pb-2 px-3 bg-dark hover-up-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](65, 0, null, null, 4, "div", [
                    ["class", "align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](66, 0, null, null, 1, "h2", [
                    ["class", "fw-normal"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["$98,987"])), (l()(), e["\u0275eld"](68, 0, null, null, 1, "h4", [
                    ["class", "fw-normal m-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Revenue"])), (l()(), e["\u0275eld"](70, 0, null, null, 2, "h5", [
                    ["class", "align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](71, 0, null, null, 1, "i", [
                    ["class", "material-icons font-xl"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["attach_money"])), (l()(), e["\u0275eld"](73, 0, null, null, 15, "div", [
                    ["class", "card-body p-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](74, 0, null, null, 14, "div", [
                    ["class", "w-100 height-130"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](75, 0, null, null, 8, "div", [
                    ["class", "card-actions text-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](76, 0, null, null, 3, "a", [
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](77, 0, null, null, 0, "i", [
                    ["class", "icon-pencil icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](78, 0, null, null, 1, "a", [
                    ["class", "tooltip-link"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Edit"])), (l()(), e["\u0275eld"](80, 0, null, null, 3, "a", [
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](81, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "icon-close icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](82, 0, null, null, 1, "a", [
                    ["class", "tooltip-link"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Remove"])), (l()(), e["\u0275eld"](84, 0, null, null, 1, "h5", [
                    ["class", "py-3 px-4 fw-normal"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Weekly Sales"])), (l()(), e["\u0275eld"](86, 0, null, null, 2, "ngx-charts-bar-vertical", [], null, [
                    [null, "select"]
                ], function(l, n, u) {
                    var e = !0;
                    return "select" === n && (e = !1 !== l.component.onSelect(u) && e), e
                }, c.b, c.a)), e["\u0275did"](87, 4898816, null, 1, o.a, [e.ElementRef, e.NgZone, e.ChangeDetectorRef], {
                    results: [0, "results"],
                    scheme: [1, "scheme"],
                    barPadding: [2, "barPadding"]
                }, {
                    select: "select"
                }), e["\u0275qud"](335544320, 1, {
                    tooltipTemplate: 0
                }), (l()(), e["\u0275eld"](89, 0, null, null, 27, "div", [
                    ["class", "col-xl-3 col-lg-6 col-md-6 mb-4 col-half-lg-down mb-3 mb-5-down"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](90, 0, null, null, 26, "div", [
                    ["class", "card border-0 bg-warning hover-up"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](91, 0, null, null, 8, "div", [
                    ["class", "card-head d-flex justify-content-between pt-3 pb-2 px-3 bg-dark hover-up-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](92, 0, null, null, 4, "div", [
                    ["class", "align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](93, 0, null, null, 1, "h2", [
                    ["class", "fw-normal"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["98,764"])), (l()(), e["\u0275eld"](95, 0, null, null, 1, "h4", [
                    ["class", "fw-normal m-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Total Users"])), (l()(), e["\u0275eld"](97, 0, null, null, 2, "h5", [
                    ["class", "align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](98, 0, null, null, 1, "i", [
                    ["class", "material-icons font-xl"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["supervisor_account"])), (l()(), e["\u0275eld"](100, 0, null, null, 16, "div", [
                    ["class", "card-body p-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](101, 0, null, null, 15, "div", [
                    ["class", "w-100 height-130"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](102, 0, null, null, 8, "div", [
                    ["class", "card-actions text-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](103, 0, null, null, 3, "a", [
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](104, 0, null, null, 0, "i", [
                    ["class", "icon-pencil icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](105, 0, null, null, 1, "a", [
                    ["class", "tooltip-link"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Edit"])), (l()(), e["\u0275eld"](107, 0, null, null, 3, "a", [
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](108, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "icon-close icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](109, 0, null, null, 1, "a", [
                    ["class", "tooltip-link"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Remove"])), (l()(), e["\u0275eld"](111, 0, null, null, 1, "h5", [
                    ["class", "py-3 px-4 fw-normal"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Weekly Registrations"])), (l()(), e["\u0275eld"](113, 0, null, null, 3, "ngx-charts-line-chart", [], null, [
                    [null, "select"],
                    [null, "mouseleave"]
                ], function(l, n, u) {
                    var s = !0,
                        d = l.component;
                    return "mouseleave" === n && (s = !1 !== e["\u0275nov"](l, 114).hideCircles() && s), "select" === n && (s = !1 !== d.onSelect(u) && s), s
                }, r.b, r.a)), e["\u0275did"](114, 4898816, null, 2, p.a, [e.ElementRef, e.NgZone, e.ChangeDetectorRef], {
                    results: [0, "results"],
                    scheme: [1, "scheme"],
                    autoScale: [2, "autoScale"]
                }, {
                    select: "select"
                }), e["\u0275qud"](335544320, 2, {
                    tooltipTemplate: 0
                }), e["\u0275qud"](335544320, 3, {
                    seriesTooltipTemplate: 0
                }), (l()(), e["\u0275eld"](117, 0, null, null, 26, "div", [
                    ["class", "col-xl-3 col-lg-6 col-md-6 mb-4 col-half-lg-down mb-3 mb-5-down"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](118, 0, null, null, 25, "div", [
                    ["class", "card border-0 bg-success hover-up"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](119, 0, null, null, 8, "div", [
                    ["class", "card-head d-flex justify-content-between pt-3 pb-2 px-3 bg-dark hover-up-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](120, 0, null, null, 4, "div", [
                    ["class", "align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](121, 0, null, null, 1, "h2", [
                    ["class", "fw-normal"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["$40,583"])), (l()(), e["\u0275eld"](123, 0, null, null, 1, "h4", [
                    ["class", "fw-normal m-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Total Sales"])), (l()(), e["\u0275eld"](125, 0, null, null, 2, "h5", [
                    ["class", "align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](126, 0, null, null, 1, "i", [
                    ["class", "material-icons font-xl"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["donut_small"])), (l()(), e["\u0275eld"](128, 0, null, null, 15, "div", [
                    ["class", "card-body p-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](129, 0, null, null, 14, "div", [
                    ["class", "w-100 height-130"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](130, 0, null, null, 8, "div", [
                    ["class", "card-actions text-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](131, 0, null, null, 3, "a", [
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](132, 0, null, null, 0, "i", [
                    ["class", "icon-pencil icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](133, 0, null, null, 1, "a", [
                    ["class", "tooltip-link"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Edit"])), (l()(), e["\u0275eld"](135, 0, null, null, 3, "a", [
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](136, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "icon-close icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](137, 0, null, null, 1, "a", [
                    ["class", "tooltip-link"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Remove"])), (l()(), e["\u0275eld"](139, 0, null, null, 1, "h5", [
                    ["class", "py-3 px-4 fw-normal"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Product Sales"])), (l()(), e["\u0275eld"](141, 0, null, null, 2, "ngx-charts-bar-vertical", [], null, [
                    [null, "select"]
                ], function(l, n, u) {
                    var e = !0;
                    return "select" === n && (e = !1 !== l.component.onSelect(u) && e), e
                }, c.b, c.a)), e["\u0275did"](142, 4898816, null, 1, o.a, [e.ElementRef, e.NgZone, e.ChangeDetectorRef], {
                    results: [0, "results"],
                    scheme: [1, "scheme"],
                    barPadding: [2, "barPadding"]
                }, {
                    select: "select"
                }), e["\u0275qud"](335544320, 4, {
                    tooltipTemplate: 0
                }), (l()(), e["\u0275eld"](144, 0, null, null, 27, "div", [
                    ["class", "col-xl-3 col-lg-6 col-md-6 mb-4 col-half-lg-down mb-3 mb-5-down"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](145, 0, null, null, 26, "div", [
                    ["class", "card border-0 bg-danger hover-up"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](146, 0, null, null, 8, "div", [
                    ["class", "card-head d-flex justify-content-between pt-3 pb-2 px-3 bg-dark hover-up-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](147, 0, null, null, 4, "div", [
                    ["class", "align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](148, 0, null, null, 1, "h2", [
                    ["class", "fw-normal"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["$7,845"])), (l()(), e["\u0275eld"](150, 0, null, null, 1, "h4", [
                    ["class", "fw-normal m-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Total Expensive"])), (l()(), e["\u0275eld"](152, 0, null, null, 2, "h5", [
                    ["class", "align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](153, 0, null, null, 1, "i", [
                    ["class", "material-icons font-xl"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["swap_vert"])), (l()(), e["\u0275eld"](155, 0, null, null, 16, "div", [
                    ["class", "card-body p-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](156, 0, null, null, 15, "div", [
                    ["class", "w-100 height-130"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](157, 0, null, null, 8, "div", [
                    ["class", "card-actions text-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](158, 0, null, null, 3, "a", [
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](159, 0, null, null, 0, "i", [
                    ["class", "icon-pencil icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](160, 0, null, null, 1, "a", [
                    ["class", "tooltip-link"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Edit"])), (l()(), e["\u0275eld"](162, 0, null, null, 3, "a", [
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](163, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "icon-close icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](164, 0, null, null, 1, "a", [
                    ["class", "tooltip-link"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Remove"])), (l()(), e["\u0275eld"](166, 0, null, null, 1, "h5", [
                    ["class", "py-3 px-4 fw-normal"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Stats This Week"])), (l()(), e["\u0275eld"](168, 0, null, null, 3, "ngx-charts-line-chart", [], null, [
                    [null, "select"],
                    [null, "mouseleave"]
                ], function(l, n, u) {
                    var s = !0,
                        d = l.component;
                    return "mouseleave" === n && (s = !1 !== e["\u0275nov"](l, 169).hideCircles() && s), "select" === n && (s = !1 !== d.onSelect(u) && s), s
                }, r.b, r.a)), e["\u0275did"](169, 4898816, null, 2, p.a, [e.ElementRef, e.NgZone, e.ChangeDetectorRef], {
                    results: [0, "results"],
                    scheme: [1, "scheme"],
                    autoScale: [2, "autoScale"]
                }, {
                    select: "select"
                }), e["\u0275qud"](335544320, 5, {
                    tooltipTemplate: 0
                }), e["\u0275qud"](335544320, 6, {
                    seriesTooltipTemplate: 0
                }), (l()(), e["\u0275eld"](172, 0, null, null, 64, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](173, 0, null, null, 25, "div", [
                    ["class", "col-xs-12 col-sm-12 col-md-6 col-lg-8 pb-md-6"],
                    ["widget", ""]
                ], null, null, null, null, null)), e["\u0275did"](174, 81920, null, 0, m, [e.ElementRef], null, null), (l()(), e["\u0275eld"](175, 0, null, null, 23, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](176, 0, null, null, 16, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](177, 0, null, null, 15, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](178, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](179, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dynamic Chart"])), (l()(), e["\u0275eld"](181, 0, null, null, 11, "div", [
                    ["class", "d-inline-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](182, 0, null, null, 10, "div", [
                    ["class", "chk-contextual-link widget-controls"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](183, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "expand"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](184, 0, null, null, 0, "i", [
                    ["class", "icon-plus icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](185, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "collapse"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](186, 0, null, null, 0, "i", [
                    ["class", "icon-minus icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](187, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "close"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](188, 0, null, null, 0, "i", [
                    ["class", "icon-close icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](189, 0, null, null, 1, "a", [
                    ["data-widgster", "fullscreen"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](190, 0, null, null, 0, "i", [
                    ["class", "icon-size-fullscreen icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](191, 0, null, null, 1, "a", [
                    ["data-widgster", "restore"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](192, 0, null, null, 0, "i", [
                    ["class", "icon-size-actual icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](193, 0, null, null, 5, "div", [
                    ["class", "chk-block-content widget-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](194, 0, null, null, 4, "div", [
                    ["class", "w-100 height-300 over-auto"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](195, 0, null, null, 3, "ngx-charts-area-chart", [], null, [
                    [null, "select"],
                    [null, "mouseleave"]
                ], function(l, n, u) {
                    var s = !0,
                        d = l.component;
                    return "mouseleave" === n && (s = !1 !== e["\u0275nov"](l, 196).hideCircles() && s), "select" === n && (s = !1 !== d.onSelect(u) && s), s
                }, g.b, g.a)), e["\u0275did"](196, 4898816, null, 2, f.a, [e.ElementRef, e.NgZone, e.ChangeDetectorRef], {
                    results: [0, "results"],
                    scheme: [1, "scheme"],
                    legend: [2, "legend"],
                    xAxis: [3, "xAxis"],
                    yAxis: [4, "yAxis"],
                    autoScale: [5, "autoScale"],
                    showXAxisLabel: [6, "showXAxisLabel"],
                    showYAxisLabel: [7, "showYAxisLabel"],
                    xAxisLabel: [8, "xAxisLabel"],
                    yAxisLabel: [9, "yAxisLabel"],
                    gradient: [10, "gradient"],
                    tooltipDisabled: [11, "tooltipDisabled"]
                }, {
                    select: "select"
                }), e["\u0275qud"](335544320, 7, {
                    tooltipTemplate: 0
                }), e["\u0275qud"](335544320, 8, {
                    seriesTooltipTemplate: 0
                }), (l()(), e["\u0275eld"](199, 0, null, null, 37, "div", [
                    ["class", "col-xs-12 col-sm-12 col-md-6 col-lg-4 pb-md-6"],
                    ["widget", ""]
                ], null, null, null, null, null)), e["\u0275did"](200, 81920, null, 0, m, [e.ElementRef], null, null), (l()(), e["\u0275eld"](201, 0, null, null, 35, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](202, 0, null, null, 16, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](203, 0, null, null, 15, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](204, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](205, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Pie Chart"])), (l()(), e["\u0275eld"](207, 0, null, null, 11, "div", [
                    ["class", "d-inline-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](208, 0, null, null, 10, "div", [
                    ["class", "chk-contextual-link widget-controls"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](209, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "expand"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](210, 0, null, null, 0, "i", [
                    ["class", "icon-plus icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](211, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "collapse"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](212, 0, null, null, 0, "i", [
                    ["class", "icon-minus icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](213, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "close"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](214, 0, null, null, 0, "i", [
                    ["class", "icon-close icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](215, 0, null, null, 1, "a", [
                    ["data-widgster", "fullscreen"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](216, 0, null, null, 0, "i", [
                    ["class", "icon-size-fullscreen icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](217, 0, null, null, 1, "a", [
                    ["data-widgster", "restore"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](218, 0, null, null, 0, "i", [
                    ["class", "icon-size-actual icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](219, 0, null, null, 17, "div", [
                    ["class", "chk-block-content widget-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](220, 0, null, null, 16, "div", [
                    ["class", "w-100 height-300 over-auto"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](221, 0, null, null, 12, "div", [
                    ["class", "d-flex justify-content-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](222, 0, null, null, 5, "div", [
                    ["class", "form-check"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](223, 0, null, null, 4, "label", [
                    ["class", "form-check-label custom-control custom-checkbox"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](224, 0, null, null, 0, "input", [
                    ["class", "form-check-input custom-control-input"],
                    ["type", "checkbox"]
                ], [
                    [8, "checked", 0]
                ], [
                    [null, "change"]
                ], function(l, n, u) {
                    var e = !0,
                        s = l.component;
                    return "change" === n && (e = 0 != (s.explodeSlices = !s.explodeSlices) && e), e
                }, null, null)), (l()(), e["\u0275eld"](225, 0, null, null, 0, "span", [
                    ["class", "custom-control-indicator"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](226, 0, null, null, 1, "span", [
                    ["class", "custom-control-description"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Explode Slices"])), (l()(), e["\u0275eld"](228, 0, null, null, 5, "div", [
                    ["class", "form-check"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](229, 0, null, null, 4, "label", [
                    ["class", "form-check-label custom-control custom-checkbox"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](230, 0, null, null, 0, "input", [
                    ["class", "form-check-input custom-control-input"],
                    ["type", "checkbox"]
                ], [
                    [8, "checked", 0]
                ], [
                    [null, "change"]
                ], function(l, n, u) {
                    var e = !0,
                        s = l.component;
                    return "change" === n && (e = 0 != (s.showLabels = !s.showLabels) && e), e
                }, null, null)), (l()(), e["\u0275eld"](231, 0, null, null, 0, "span", [
                    ["class", "custom-control-indicator"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](232, 0, null, null, 1, "span", [
                    ["class", "custom-control-description"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Show Legends"])), (l()(), e["\u0275eld"](234, 0, null, null, 2, "ngx-charts-pie-chart", [], null, [
                    [null, "select"]
                ], function(l, n, u) {
                    var e = !0;
                    return "select" === n && (e = !1 !== l.component.onSelect(u) && e), e
                }, h.b, h.a)), e["\u0275did"](235, 4898816, null, 1, v.a, [e.ElementRef, e.NgZone, e.ChangeDetectorRef], {
                    results: [0, "results"],
                    scheme: [1, "scheme"],
                    labels: [2, "labels"],
                    legend: [3, "legend"],
                    explodeSlices: [4, "explodeSlices"],
                    doughnut: [5, "doughnut"],
                    gradient: [6, "gradient"]
                }, {
                    select: "select"
                }), e["\u0275qud"](335544320, 9, {
                    tooltipTemplate: 0
                }), (l()(), e["\u0275eld"](237, 0, null, null, 88, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](238, 0, null, null, 24, "div", [
                    ["class", "col-xs-12 col-sm-12 col-md-12 col-lg-4 col-half-lg-down mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](239, 0, null, null, 23, "div", [
                    ["class", "card bg-primary"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](240, 0, null, null, 22, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](241, 0, null, null, 21, "ul", [
                    ["class", "list-unstyled progress-custom"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](242, 0, null, null, 6, "li", [
                    ["class", "mb-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](243, 0, null, null, 1, "h1", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["2,346"])), (l()(), e["\u0275eld"](245, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Total orders in period"])), (l()(), e["\u0275eld"](247, 0, null, null, 1, "div", [
                    ["class", "progress mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](248, 0, null, null, 0, "div", [
                    ["aria-valuemax", "100"],
                    ["aria-valuemin", "0"],
                    ["aria-valuenow", "25"],
                    ["class", "progress-bar progress-bar-striped progress-bar-animated"],
                    ["role", "progressbar"],
                    ["style", "width: 65%; height: 5px;"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](249, 0, null, null, 6, "li", [
                    ["class", "mb-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](250, 0, null, null, 1, "h1", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["4,422"])), (l()(), e["\u0275eld"](252, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Orders in last month"])), (l()(), e["\u0275eld"](254, 0, null, null, 1, "div", [
                    ["class", "progress mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](255, 0, null, null, 0, "div", [
                    ["aria-valuemax", "100"],
                    ["aria-valuemin", "0"],
                    ["aria-valuenow", "25"],
                    ["class", "progress-bar progress-bar-striped progress-bar-animated"],
                    ["role", "progressbar"],
                    ["style", "width: 35%; height: 5px;"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](256, 0, null, null, 6, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](257, 0, null, null, 1, "h1", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["9,180"])), (l()(), e["\u0275eld"](259, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Monthly income from orders"])), (l()(), e["\u0275eld"](261, 0, null, null, 1, "div", [
                    ["class", "progress mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](262, 0, null, null, 0, "div", [
                    ["aria-valuemax", "100"],
                    ["aria-valuemin", "0"],
                    ["aria-valuenow", "25"],
                    ["class", "progress-bar progress-bar-striped progress-bar-animated"],
                    ["role", "progressbar"],
                    ["style", "width: 85%; height: 5px;"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](263, 0, null, null, 38, "div", [
                    ["class", "col-xs-12 col-sm-12 col-md-12 col-lg-4 col-half-lg-down"],
                    ["widget", ""]
                ], null, null, null, null, null)), e["\u0275did"](264, 81920, null, 0, m, [e.ElementRef], null, null), (l()(), e["\u0275eld"](265, 0, null, null, 36, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](266, 0, null, null, 16, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](267, 0, null, null, 15, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](268, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](269, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["To Do List"])), (l()(), e["\u0275eld"](271, 0, null, null, 11, "div", [
                    ["class", "d-inline-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](272, 0, null, null, 10, "div", [
                    ["class", "chk-contextual-link widget-controls"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](273, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "expand"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](274, 0, null, null, 0, "i", [
                    ["class", "icon-plus icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](275, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "collapse"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](276, 0, null, null, 0, "i", [
                    ["class", "icon-minus icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](277, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "close"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](278, 0, null, null, 0, "i", [
                    ["class", "icon-close icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](279, 0, null, null, 1, "a", [
                    ["data-widgster", "fullscreen"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](280, 0, null, null, 0, "i", [
                    ["class", "icon-size-fullscreen icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](281, 0, null, null, 1, "a", [
                    ["data-widgster", "restore"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](282, 0, null, null, 0, "i", [
                    ["class", "icon-size-actual icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](283, 0, null, null, 18, "div", [
                    ["class", "chk-block-content widget-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](284, 0, null, null, 17, "div", [], null, null, null, null, null)), (l()(), e["\u0275eld"](285, 0, null, null, 11, "div", [
                    ["class", "row pb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](286, 0, null, null, 10, "div", [
                    ["class", "col-sm-12"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](287, 0, null, null, 9, "div", [
                    ["class", "input-group"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](288, 0, null, null, 5, "input", [
                    ["class", "form-control"],
                    ["placeholder", "Add task in list..."],
                    ["type", "text"],
                    ["value", ""]
                ], [
                    [2, "ng-untouched", null],
                    [2, "ng-touched", null],
                    [2, "ng-pristine", null],
                    [2, "ng-dirty", null],
                    [2, "ng-valid", null],
                    [2, "ng-invalid", null],
                    [2, "ng-pending", null]
                ], [
                    [null, "keyup"],
                    [null, "ngModelChange"],
                    [null, "input"],
                    [null, "blur"],
                    [null, "compositionstart"],
                    [null, "compositionend"]
                ], function(l, n, u) {
                    var s = !0,
                        d = l.component;
                    return "input" === n && (s = !1 !== e["\u0275nov"](l, 289)._handleInput(u.target.value) && s), "blur" === n && (s = !1 !== e["\u0275nov"](l, 289).onTouched() && s), "compositionstart" === n && (s = !1 !== e["\u0275nov"](l, 289)._compositionStart() && s), "compositionend" === n && (s = !1 !== e["\u0275nov"](l, 289)._compositionEnd(u.target.value) && s), "keyup" === n && (s = !1 !== d.addToDoItem(u) && s), "ngModelChange" === n && (s = !1 !== (d.newTodoText = u) && s), s
                }, null, null)), e["\u0275did"](289, 16384, null, 0, i.DefaultValueAccessor, [e.Renderer2, e.ElementRef, [2, i.COMPOSITION_BUFFER_MODE]], null, null), e["\u0275prd"](1024, null, i.NG_VALUE_ACCESSOR, function(l) {
                    return [l]
                }, [i.DefaultValueAccessor]), e["\u0275did"](291, 671744, null, 0, i.NgModel, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, i.NG_VALUE_ACCESSOR]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), e["\u0275prd"](2048, null, i.NgControl, null, [i.NgModel]), e["\u0275did"](293, 16384, null, 0, i.NgControlStatus, [
                    [4, i.NgControl]
                ], null, null), (l()(), e["\u0275eld"](294, 0, null, null, 2, "div", [
                    ["class", "input-group-btn"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](295, 0, null, null, 1, "button", [
                    ["class", "btn btn-primary"],
                    ["type", "button"]
                ], null, [
                    [null, "click"]
                ], function(l, n, u) {
                    var e = !0;
                    return "click" === n && (e = !1 !== l.component.addToDoItem(u) && e), e
                }, null, null)), (l()(), e["\u0275ted"](-1, null, [" Add "])), (l()(), e["\u0275eld"](297, 0, null, null, 4, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](298, 0, null, null, 3, "div", [
                    ["class", "col-sm-12"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](299, 0, null, null, 2, "ul", [
                    ["class", "to-do-list-wrap list-unstyled"],
                    ["perfect-scrollbar", ""]
                ], null, null, null, null, null)), (l()(), e["\u0275and"](16777216, null, null, 1, null, L)), e["\u0275did"](301, 802816, null, 0, a.NgForOf, [e.ViewContainerRef, e.TemplateRef, e.IterableDiffers], {
                    ngForOf: [0, "ngForOf"]
                }, null), (l()(), e["\u0275eld"](302, 0, null, null, 23, "div", [
                    ["class", "col-xs-12 col-sm-12 col-md-12 col-lg-4 col-full-lg-down"],
                    ["widget", ""]
                ], null, null, null, null, null)), e["\u0275did"](303, 81920, null, 0, m, [e.ElementRef], null, null), (l()(), e["\u0275eld"](304, 0, null, null, 21, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](305, 0, null, null, 16, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](306, 0, null, null, 15, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](307, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](308, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["New members"])), (l()(), e["\u0275eld"](310, 0, null, null, 11, "div", [
                    ["class", "d-inline-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](311, 0, null, null, 10, "div", [
                    ["class", "chk-contextual-link widget-controls"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](312, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "expand"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](313, 0, null, null, 0, "i", [
                    ["class", "icon-plus icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](314, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "collapse"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](315, 0, null, null, 0, "i", [
                    ["class", "icon-minus icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](316, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "close"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](317, 0, null, null, 0, "i", [
                    ["class", "icon-close icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](318, 0, null, null, 1, "a", [
                    ["data-widgster", "fullscreen"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](319, 0, null, null, 0, "i", [
                    ["class", "icon-size-fullscreen icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](320, 0, null, null, 1, "a", [
                    ["data-widgster", "restore"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](321, 0, null, null, 0, "i", [
                    ["class", "icon-size-actual icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](322, 0, null, null, 3, "div", [
                    ["class", "chk-block-content pb-0 widget-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](323, 0, null, null, 2, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275and"](16777216, null, null, 1, null, M)), e["\u0275did"](325, 802816, null, 0, a.NgForOf, [e.ViewContainerRef, e.TemplateRef, e.IterableDiffers], {
                    ngForOf: [0, "ngForOf"]
                }, null), (l()(), e["\u0275eld"](326, 0, null, null, 166, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](327, 0, null, null, 36, "div", [
                    ["class", "col-xs-12 col-sm-12 col-md-12 col-lg-6 col-full-lg-down"],
                    ["widget", ""]
                ], null, null, null, null, null)), e["\u0275did"](328, 81920, null, 0, m, [e.ElementRef], null, null), (l()(), e["\u0275eld"](329, 0, null, null, 34, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](330, 0, null, null, 16, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](331, 0, null, null, 15, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](332, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](333, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Featured Post"])), (l()(), e["\u0275eld"](335, 0, null, null, 11, "div", [
                    ["class", "d-inline-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](336, 0, null, null, 10, "div", [
                    ["class", "chk-contextual-link widget-controls"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](337, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "expand"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](338, 0, null, null, 0, "i", [
                    ["class", "icon-plus icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](339, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "collapse"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](340, 0, null, null, 0, "i", [
                    ["class", "icon-minus icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](341, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "close"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](342, 0, null, null, 0, "i", [
                    ["class", "icon-close icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](343, 0, null, null, 1, "a", [
                    ["data-widgster", "fullscreen"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](344, 0, null, null, 0, "i", [
                    ["class", "icon-size-fullscreen icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](345, 0, null, null, 1, "a", [
                    ["data-widgster", "restore"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](346, 0, null, null, 0, "i", [
                    ["class", "icon-size-actual icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](347, 0, null, null, 16, "div", [
                    ["class", "chk-block-content pt-0 pl-0 pr-0 widget-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](348, 0, null, null, 1, "div", [], null, null, null, null, null)), (l()(), e["\u0275eld"](349, 0, null, null, 0, "img", [
                    ["alt", "First slide"],
                    ["class", "img-fluid w-100"],
                    ["height", "683"],
                    ["src", "assets/img/latest-post.jpg"],
                    ["width", "1024"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](350, 0, null, null, 13, "div", [
                    ["class", "px-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](351, 0, null, null, 7, "div", [
                    ["class", "d-flex mb-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](352, 0, null, null, 1, "div", [
                    ["class", "author-image"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](353, 0, null, null, 0, "img", [
                    ["alt", ""],
                    ["class", "circle"],
                    ["height", "80"],
                    ["src", "assets/img/user-3.jpg"],
                    ["width", "80"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](354, 0, null, null, 4, "div", [
                    ["class", "author-info px-3 pt-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](355, 0, null, null, 1, "h5", [
                    ["class", "mb-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Luke Hobbs"])), (l()(), e["\u0275eld"](357, 0, null, null, 1, "small", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Front End Designer"])), (l()(), e["\u0275eld"](359, 0, null, null, 4, "div", [
                    ["class", "post-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](360, 0, null, null, 1, "h5", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Lorem ipsum dolor sit amec adipiscing elit."])), (l()(), e["\u0275eld"](362, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Nulla condimentum sodales urna, at consequat urna laoreet non. Aenean id porttitor odio, id elementum augue. Donec rhoncus semper mi. "])), (l()(), e["\u0275eld"](364, 0, null, null, 128, "div", [
                    ["class", "col-xs-12 col-sm-12 col-md-12 col-lg-6 col-full-lg-down"],
                    ["widget", ""]
                ], null, null, null, null, null)), e["\u0275did"](365, 81920, null, 0, m, [e.ElementRef], null, null), (l()(), e["\u0275eld"](366, 0, null, null, 126, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](367, 0, null, null, 16, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](368, 0, null, null, 15, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](369, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](370, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Wheather"])), (l()(), e["\u0275eld"](372, 0, null, null, 11, "div", [
                    ["class", "d-inline-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](373, 0, null, null, 10, "div", [
                    ["class", "chk-contextual-link widget-controls"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](374, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "expand"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](375, 0, null, null, 0, "i", [
                    ["class", "icon-plus icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](376, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "collapse"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](377, 0, null, null, 0, "i", [
                    ["class", "icon-minus icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](378, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "close"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](379, 0, null, null, 0, "i", [
                    ["class", "icon-close icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](380, 0, null, null, 1, "a", [
                    ["data-widgster", "fullscreen"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](381, 0, null, null, 0, "i", [
                    ["class", "icon-size-fullscreen icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](382, 0, null, null, 1, "a", [
                    ["data-widgster", "restore"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](383, 0, null, null, 0, "i", [
                    ["class", "icon-size-actual icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](384, 0, null, null, 108, "div", [
                    ["class", "chk-block-content p-0 widget-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](385, 0, null, null, 107, "div", [
                    ["class", "wheather-widget over-hidden"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](386, 0, null, null, 106, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](387, 0, null, null, 53, "div", [
                    ["class", "col-xs-12 col-sm-12 col-md-12 col-lg-7 "]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](388, 0, null, null, 14, "div", [
                    ["class", "p-2 py-4 text-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](389, 0, null, null, 1, "h4", [
                    ["class", "fa-2x mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Today"])), (l()(), e["\u0275eld"](391, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Monday, September 19, 2017"])), (l()(), e["\u0275eld"](393, 0, null, null, 1, "h4", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["California, USA"])), (l()(), e["\u0275eld"](395, 0, null, null, 1, "div", [
                    ["class", "wheather-icon-l"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](396, 0, null, null, 0, "img", [
                    ["alt", "mostly-sunny"],
                    ["height", "240"],
                    ["src", "assets/img/hail.png"],
                    ["width", "240"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](397, 0, null, null, 3, "div", [
                    ["class", "fa-3x text-primary"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" 26\xb0 "])), (l()(), e["\u0275eld"](399, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["C"])), (l()(), e["\u0275eld"](401, 0, null, null, 1, "div", [
                    ["class", "text-primary"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Heavy Raining"])), (l()(), e["\u0275eld"](403, 0, null, null, 37, "div", [
                    ["class", "weather-times p-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](404, 0, null, null, 36, "div", [
                    ["class", "row text-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](405, 0, null, null, 8, "div", [
                    ["class", "col-lg-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](406, 0, null, null, 7, "div", [
                    ["class", "weather-day"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](407, 0, null, null, 1, "div", [
                    ["class", "margin-bottom-5"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["06:00"])), (l()(), e["\u0275eld"](409, 0, null, null, 0, "img", [
                    ["alt", "mostly-sunny"],
                    ["height", "80"],
                    ["src", "assets/img/partly-cloudy.png"],
                    ["width", "80"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](410, 0, null, null, 3, "div", [
                    ["class", "red-600"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["24\xb0 "])), (l()(), e["\u0275eld"](412, 0, null, null, 1, "span", [
                    ["class", "font-size-12"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["C"])), (l()(), e["\u0275eld"](414, 0, null, null, 8, "div", [
                    ["class", "col-lg-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](415, 0, null, null, 7, "div", [
                    ["class", "weather-day vertical-align"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](416, 0, null, null, 1, "div", [
                    ["class", "margin-bottom-5"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["12:00"])), (l()(), e["\u0275eld"](418, 0, null, null, 0, "img", [
                    ["alt", "mostly-sunny"],
                    ["height", "80"],
                    ["src", "assets/img/mostly-sunny.png"],
                    ["width", "80"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](419, 0, null, null, 3, "div", [
                    ["class", "red-600"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["28\xb0 "])), (l()(), e["\u0275eld"](421, 0, null, null, 1, "span", [
                    ["class", "font-size-12"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["C"])), (l()(), e["\u0275eld"](423, 0, null, null, 8, "div", [
                    ["class", "col-lg-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](424, 0, null, null, 7, "div", [
                    ["class", "weather-day vertical-align"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](425, 0, null, null, 1, "div", [
                    ["class", "margin-bottom-5"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["18:00"])), (l()(), e["\u0275eld"](427, 0, null, null, 0, "img", [
                    ["alt", "mostly-sunny"],
                    ["height", "80"],
                    ["src", "assets/img/partly-cloudy.png"],
                    ["width", "80"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](428, 0, null, null, 3, "div", [
                    ["class", "red-600"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["17\xb0 "])), (l()(), e["\u0275eld"](430, 0, null, null, 1, "span", [
                    ["class", "font-size-12"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["C"])), (l()(), e["\u0275eld"](432, 0, null, null, 8, "div", [
                    ["class", "col-lg-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](433, 0, null, null, 7, "div", [
                    ["class", "weather-day vertical-align"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](434, 0, null, null, 1, "div", [
                    ["class", "margin-bottom-5"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["24:00"])), (l()(), e["\u0275eld"](436, 0, null, null, 0, "img", [
                    ["alt", "mostly-sunny"],
                    ["height", "80"],
                    ["src", "assets/img/hail.png"],
                    ["width", "80"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](437, 0, null, null, 3, "div", [
                    ["class", "red-600"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["32\xb0 "])), (l()(), e["\u0275eld"](439, 0, null, null, 1, "span", [
                    ["class", "font-size-12"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["C"])), (l()(), e["\u0275eld"](441, 0, null, null, 51, "div", [
                    ["class", "col-xs-12 col-sm-12 col-md-12 col-lg-5 bg-primary "]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](442, 0, null, null, 50, "div", [
                    ["class", "wheather-list"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](443, 0, null, null, 49, "ul", [
                    ["class", "pl-2 py-4 pr-4 list-unstyled"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](444, 0, null, null, 6, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](445, 0, null, null, 5, "div", [
                    ["class", "d-flex justify-content-between align-item-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](446, 0, null, null, 1, "span", [
                    ["class", "align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Sun"])), (l()(), e["\u0275eld"](448, 0, null, null, 0, "img", [
                    ["alt", "mostly-sunny"],
                    ["class", "align-self-center"],
                    ["height", "80"],
                    ["src", "assets/img/rain-snow.png"],
                    ["width", "80"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](449, 0, null, null, 1, "span", [
                    ["class", "align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["24 - 26"])), (l()(), e["\u0275eld"](451, 0, null, null, 6, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](452, 0, null, null, 5, "div", [
                    ["class", "d-flex justify-content-between align-item-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](453, 0, null, null, 1, "span", [
                    ["class", "align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Mon"])), (l()(), e["\u0275eld"](455, 0, null, null, 0, "img", [
                    ["alt", "mostly-sunny"],
                    ["class", "align-self-center"],
                    ["height", "80"],
                    ["src", "assets/img/storm.png"],
                    ["width", "80"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](456, 0, null, null, 1, "span", [
                    ["class", "align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["21 - 28"])), (l()(), e["\u0275eld"](458, 0, null, null, 6, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](459, 0, null, null, 5, "div", [
                    ["class", "d-flex justify-content-between align-item-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](460, 0, null, null, 1, "span", [
                    ["class", "align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Tues"])), (l()(), e["\u0275eld"](462, 0, null, null, 0, "img", [
                    ["alt", "mostly-sunny"],
                    ["class", "align-self-center"],
                    ["height", "80"],
                    ["src", "assets/img/mostly-sunny.png"],
                    ["width", "80"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](463, 0, null, null, 1, "span", [
                    ["class", "align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["18 - 21"])), (l()(), e["\u0275eld"](465, 0, null, null, 6, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](466, 0, null, null, 5, "div", [
                    ["class", "d-flex justify-content-between align-item-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](467, 0, null, null, 1, "span", [
                    ["class", "align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Wed"])), (l()(), e["\u0275eld"](469, 0, null, null, 0, "img", [
                    ["alt", "mostly-sunny"],
                    ["class", "align-self-center"],
                    ["height", "80"],
                    ["src", "assets/img/partly-cloudy.png"],
                    ["width", "80"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](470, 0, null, null, 1, "span", [
                    ["class", "align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["15 - 19"])), (l()(), e["\u0275eld"](472, 0, null, null, 6, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](473, 0, null, null, 5, "div", [
                    ["class", "d-flex justify-content-between align-item-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](474, 0, null, null, 1, "span", [
                    ["class", "align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Thur"])), (l()(), e["\u0275eld"](476, 0, null, null, 0, "img", [
                    ["alt", "mostly-sunny"],
                    ["class", "align-self-center"],
                    ["height", "80"],
                    ["src", "assets/img/hail.png"],
                    ["width", "80"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](477, 0, null, null, 1, "span", [
                    ["class", "align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["22 - 20"])), (l()(), e["\u0275eld"](479, 0, null, null, 6, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](480, 0, null, null, 5, "div", [
                    ["class", "d-flex justify-content-between align-item-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](481, 0, null, null, 1, "span", [
                    ["class", "align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Frid"])), (l()(), e["\u0275eld"](483, 0, null, null, 0, "img", [
                    ["alt", "mostly-sunny"],
                    ["class", "align-self-center"],
                    ["height", "80"],
                    ["src", "assets/img/rain-snow.png"],
                    ["width", "80"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](484, 0, null, null, 1, "span", [
                    ["class", "align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["10 - 18"])), (l()(), e["\u0275eld"](486, 0, null, null, 6, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](487, 0, null, null, 5, "div", [
                    ["class", "d-flex justify-content-between align-item-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](488, 0, null, null, 1, "span", [
                    ["class", "align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Stur"])), (l()(), e["\u0275eld"](490, 0, null, null, 0, "img", [
                    ["alt", "mostly-sunny"],
                    ["class", "align-self-center"],
                    ["height", "80"],
                    ["src", "assets/img/partly-cloudy.png"],
                    ["width", "80"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](491, 0, null, null, 1, "span", [
                    ["class", "align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["5 - 10"])), (l()(), e["\u0275eld"](493, 0, null, null, 27, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](494, 0, null, null, 8, "div", [
                    ["class", "col-xl-4 mb-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](495, 0, null, null, 7, "div", [
                    ["class", "bg-primary clearfix social-grid"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](496, 0, null, null, 1, "div", [
                    ["class", "icon-social d-flex justify-content-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](497, 0, null, null, 0, "i", [
                    ["class", "fa fa-facebook  align-self-center "]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](498, 0, null, null, 4, "div", [
                    ["class", "icon-info-social"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](499, 0, null, null, 1, "span", [
                    ["class", "name-social"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Facebook "])), (l()(), e["\u0275eld"](501, 0, null, null, 1, "span", [
                    ["class", "number-social"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["41 Like"])), (l()(), e["\u0275eld"](503, 0, null, null, 8, "div", [
                    ["class", "col-xl-4 mb-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](504, 0, null, null, 7, "div", [
                    ["class", "bg-info clearfix social-grid"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](505, 0, null, null, 1, "div", [
                    ["class", "icon-social d-flex justify-content-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](506, 0, null, null, 0, "i", [
                    ["class", "fa fa-twitter  align-self-center "]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](507, 0, null, null, 4, "div", [
                    ["class", "icon-info-social"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](508, 0, null, null, 1, "span", [
                    ["class", "name-social"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Twitter "])), (l()(), e["\u0275eld"](510, 0, null, null, 1, "span", [
                    ["class", "number-social"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["154k Followers"])), (l()(), e["\u0275eld"](512, 0, null, null, 8, "div", [
                    ["class", "col-xl-4 mb-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](513, 0, null, null, 7, "div", [
                    ["class", "bg-danger clearfix social-grid"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](514, 0, null, null, 1, "div", [
                    ["class", "icon-social d-flex justify-content-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](515, 0, null, null, 0, "i", [
                    ["class", "fa fa-google-plus  align-self-center "]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](516, 0, null, null, 4, "div", [
                    ["class", "icon-info-social"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](517, 0, null, null, 1, "span", [
                    ["class", "name-social"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Google Plus "])), (l()(), e["\u0275eld"](519, 0, null, null, 1, "span", [
                    ["class", "number-social"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["42 Cirlces"])), (l()(), e["\u0275eld"](521, 0, null, null, 276, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](522, 0, null, null, 70, "div", [
                    ["class", "col-xs-12 col-sm-12 col-md-12 col-lg-4 col-half-lg-down"],
                    ["widget", ""]
                ], null, null, null, null, null)), e["\u0275did"](523, 81920, null, 0, m, [e.ElementRef], null, null), (l()(), e["\u0275eld"](524, 0, null, null, 68, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](525, 0, null, null, 16, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](526, 0, null, null, 15, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](527, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](528, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Messages"])), (l()(), e["\u0275eld"](530, 0, null, null, 11, "div", [
                    ["class", "d-inline-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](531, 0, null, null, 10, "div", [
                    ["class", "chk-contextual-link widget-controls"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](532, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "expand"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](533, 0, null, null, 0, "i", [
                    ["class", "icon-plus icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](534, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "collapse"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](535, 0, null, null, 0, "i", [
                    ["class", "icon-minus icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](536, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "close"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](537, 0, null, null, 0, "i", [
                    ["class", "icon-close icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](538, 0, null, null, 1, "a", [
                    ["data-widgster", "fullscreen"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](539, 0, null, null, 0, "i", [
                    ["class", "icon-size-fullscreen icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](540, 0, null, null, 1, "a", [
                    ["data-widgster", "restore"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](541, 0, null, null, 0, "i", [
                    ["class", "icon-size-actual icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](542, 0, null, null, 50, "div", [
                    ["class", "chk-block-content pb-4 widget-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](543, 0, null, null, 4, "div", [
                    ["class", "d-flex mb-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](544, 0, null, null, 1, "div", [
                    ["class", "square-30 circle bg-success align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["25"])), (l()(), e["\u0275eld"](546, 0, null, null, 1, "h3", [
                    ["class", "mb-0 pl-2 pr-2 align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["New Messages"])), (l()(), e["\u0275eld"](548, 0, null, null, 44, "ul", [
                    ["class", "list-unstyled list-item-border list-item-space ripple-list"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](549, 0, null, null, 10, "li", [
                    ["class", "media"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](550, 0, null, null, 2, "div", [
                    ["class", "pos-relative mr-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](551, 0, null, null, 0, "img", [
                    ["alt", "user thumb"],
                    ["class", "img-fluid rounded-circle d-flex"],
                    ["height", "60"],
                    ["src", "assets/img/user-1.jpg"],
                    ["width", "60"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](552, 0, null, null, 0, "span", [
                    ["class", "badge badge-danger square-10 circle top-right-badge fa-notify"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](553, 0, null, null, 6, "div", [
                    ["class", "media-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](554, 0, null, null, 1, "small", [
                    ["class", "text-primary"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Monica Smith"])), (l()(), e["\u0275eld"](556, 0, null, null, 1, "p", [
                    ["class", "mb-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Well, it seems to be working now. Thank You !"])), (l()(), e["\u0275eld"](558, 0, null, null, 1, "small", [
                    ["class", "text-muted"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Today 5:60 pm - 12.06.2014"])), (l()(), e["\u0275eld"](560, 0, null, null, 10, "li", [
                    ["class", "media"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](561, 0, null, null, 2, "div", [
                    ["class", "pos-relative mr-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](562, 0, null, null, 0, "img", [
                    ["alt", "user thumb"],
                    ["class", "img-fluid rounded-circle d-flex"],
                    ["height", "60"],
                    ["src", "assets/img/user-2.jpg"],
                    ["width", "60"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](563, 0, null, null, 0, "span", [
                    ["class", "badge bg-green square-10 circle top-right-badge fa-notify"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](564, 0, null, null, 6, "div", [
                    ["class", "media-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](565, 0, null, null, 1, "small", [
                    ["class", "text-primary"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Monica Smith"])), (l()(), e["\u0275eld"](567, 0, null, null, 1, "p", [
                    ["class", "mb-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Where I can change the color ?"])), (l()(), e["\u0275eld"](569, 0, null, null, 1, "small", [
                    ["class", "text-muted"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Today 5:60 pm - 12.06.2014"])), (l()(), e["\u0275eld"](571, 0, null, null, 10, "li", [
                    ["class", "media"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](572, 0, null, null, 2, "div", [
                    ["class", "pos-relative mr-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](573, 0, null, null, 0, "img", [
                    ["alt", "user thumb"],
                    ["class", "img-fluid rounded-circle d-flex"],
                    ["height", "60"],
                    ["src", "assets/img/user-3.jpg"],
                    ["width", "60"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](574, 0, null, null, 0, "span", [
                    ["class", "badge badge-warning square-10 circle top-right-badge fa-notify"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](575, 0, null, null, 6, "div", [
                    ["class", "media-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](576, 0, null, null, 1, "small", [
                    ["class", "text-primary"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Monica Smith"])), (l()(), e["\u0275eld"](578, 0, null, null, 1, "p", [
                    ["class", "mb-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["I want custom work on my project. Are you guys available ?"])), (l()(), e["\u0275eld"](580, 0, null, null, 1, "small", [
                    ["class", "text-muted"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Today 5:60 pm - 12.06.2014"])), (l()(), e["\u0275eld"](582, 0, null, null, 10, "li", [
                    ["class", "media"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](583, 0, null, null, 2, "div", [
                    ["class", "pos-relative mr-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](584, 0, null, null, 0, "img", [
                    ["alt", "user thumb"],
                    ["class", "img-fluid rounded-circle d-flex"],
                    ["height", "60"],
                    ["src", "assets/img/user-4.jpg"],
                    ["width", "60"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](585, 0, null, null, 0, "span", [
                    ["class", "badge bg-green square-10 circle top-right-badge fa-notify"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](586, 0, null, null, 6, "div", [
                    ["class", "media-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](587, 0, null, null, 1, "small", [
                    ["class", "text-primary"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Monica Smith"])), (l()(), e["\u0275eld"](589, 0, null, null, 1, "p", [
                    ["class", "mb-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Thanks a lot. It was easy to fix it with your guidelines. Great support!"])), (l()(), e["\u0275eld"](591, 0, null, null, 1, "small", [
                    ["class", "text-muted"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Today 5:60 pm - 12.06.2014"])), (l()(), e["\u0275eld"](593, 0, null, null, 78, "div", [
                    ["class", "col-xs-12 col-sm-12 col-md-12 col-lg-4 col-half-lg-down"],
                    ["widget", ""]
                ], null, null, null, null, null)), e["\u0275did"](594, 81920, null, 0, m, [e.ElementRef], null, null), (l()(), e["\u0275eld"](595, 0, null, null, 76, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](596, 0, null, null, 16, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](597, 0, null, null, 15, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](598, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](599, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Activity"])), (l()(), e["\u0275eld"](601, 0, null, null, 11, "div", [
                    ["class", "d-inline-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](602, 0, null, null, 10, "div", [
                    ["class", "chk-contextual-link widget-controls"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](603, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "expand"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](604, 0, null, null, 0, "i", [
                    ["class", "icon-plus icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](605, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "collapse"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](606, 0, null, null, 0, "i", [
                    ["class", "icon-minus icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](607, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "close"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](608, 0, null, null, 0, "i", [
                    ["class", "icon-close icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](609, 0, null, null, 1, "a", [
                    ["data-widgster", "fullscreen"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](610, 0, null, null, 0, "i", [
                    ["class", "icon-size-fullscreen icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](611, 0, null, null, 1, "a", [
                    ["data-widgster", "restore"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](612, 0, null, null, 0, "i", [
                    ["class", "icon-size-actual icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](613, 0, null, null, 58, "div", [
                    ["class", "chk-block-content widget-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](614, 0, null, null, 57, "div", [
                    ["class", "timeline-widget"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](615, 0, null, null, 56, "ul", [
                    ["class", "list-unstyled list-item-space ripple-list"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](616, 0, null, null, 7, "li", [
                    ["class", "d-flex"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](617, 0, null, null, 1, "div", [], null, null, null, null, null)), (l()(), e["\u0275eld"](618, 0, null, null, 0, "div", [
                    ["class", "timeline-point fa-notify square-20 circle bg-success"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](619, 0, null, null, 4, "div", [
                    ["class", "align-self-center pl-4 pr-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](620, 0, null, null, 1, "p", [
                    ["class", "mb-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Finished task one."])), (l()(), e["\u0275eld"](622, 0, null, null, 1, "span", [
                    ["class", "text-muted small"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Just Now"])), (l()(), e["\u0275eld"](624, 0, null, null, 7, "li", [
                    ["class", "d-flex"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](625, 0, null, null, 1, "div", [], null, null, null, null, null)), (l()(), e["\u0275eld"](626, 0, null, null, 0, "div", [
                    ["class", "timeline-point square-20 circle bg-primary"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](627, 0, null, null, 4, "div", [
                    ["class", "align-self-center pl-4 pr-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](628, 0, null, null, 1, "p", [
                    ["class", "mb-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Called the sales department for updates."])), (l()(), e["\u0275eld"](630, 0, null, null, 1, "span", [
                    ["class", "text-muted small"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Just Now"])), (l()(), e["\u0275eld"](632, 0, null, null, 7, "li", [
                    ["class", "d-flex"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](633, 0, null, null, 1, "div", [], null, null, null, null, null)), (l()(), e["\u0275eld"](634, 0, null, null, 0, "div", [
                    ["class", "timeline-point square-20 circle bg-success"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](635, 0, null, null, 4, "div", [
                    ["class", "align-self-center pl-4 pr-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](636, 0, null, null, 1, "p", [
                    ["class", "mb-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Sent sales report to sales."])), (l()(), e["\u0275eld"](638, 0, null, null, 1, "span", [
                    ["class", "text-muted small"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Just Now"])), (l()(), e["\u0275eld"](640, 0, null, null, 7, "li", [
                    ["class", "d-flex"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](641, 0, null, null, 1, "div", [], null, null, null, null, null)), (l()(), e["\u0275eld"](642, 0, null, null, 0, "div", [
                    ["class", "timeline-point square-20 circle bg-warning"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](643, 0, null, null, 4, "div", [
                    ["class", "align-self-center pl-4 pr-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](644, 0, null, null, 1, "p", [
                    ["class", "mb-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Prepared monthly report."])), (l()(), e["\u0275eld"](646, 0, null, null, 1, "span", [
                    ["class", "text-muted small"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Just Now"])), (l()(), e["\u0275eld"](648, 0, null, null, 7, "li", [
                    ["class", "d-flex"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](649, 0, null, null, 1, "div", [], null, null, null, null, null)), (l()(), e["\u0275eld"](650, 0, null, null, 0, "div", [
                    ["class", "timeline-point square-20 circle bg-success"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](651, 0, null, null, 4, "div", [
                    ["class", "align-self-center pl-4 pr-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](652, 0, null, null, 1, "p", [
                    ["class", "mb-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Attended seminar"])), (l()(), e["\u0275eld"](654, 0, null, null, 1, "span", [
                    ["class", "text-muted small"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Just Now"])), (l()(), e["\u0275eld"](656, 0, null, null, 7, "li", [
                    ["class", "d-flex"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](657, 0, null, null, 1, "div", [], null, null, null, null, null)), (l()(), e["\u0275eld"](658, 0, null, null, 0, "div", [
                    ["class", "timeline-point square-20 circle bg-warning"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](659, 0, null, null, 4, "div", [
                    ["class", "align-self-center pl-4 pr-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](660, 0, null, null, 1, "p", [
                    ["class", "mb-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Prepared documents for meeting."])), (l()(), e["\u0275eld"](662, 0, null, null, 1, "span", [
                    ["class", "text-muted small"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Just Now"])), (l()(), e["\u0275eld"](664, 0, null, null, 7, "li", [
                    ["class", "d-flex"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](665, 0, null, null, 1, "div", [], null, null, null, null, null)), (l()(), e["\u0275eld"](666, 0, null, null, 0, "div", [
                    ["class", "timeline-point fa-notify ripple square-20 circle bg-warning"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](667, 0, null, null, 4, "div", [
                    ["class", "align-self-center pl-4 pr-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](668, 0, null, null, 1, "p", [
                    ["class", "mb-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Update the system."])), (l()(), e["\u0275eld"](670, 0, null, null, 1, "span", [
                    ["class", "text-muted small"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Just Now"])), (l()(), e["\u0275eld"](672, 0, null, null, 125, "div", [
                    ["class", "col-xs-12 col-sm-12 col-md-12 col-lg-4 col-full-lg-down"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](673, 0, null, null, 26, "div", [
                    ["class", "chk-block-content mb-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](674, 0, null, null, 25, "div", [
                    ["class", "carousel slide"],
                    ["data-ride", "carousel"],
                    ["id", "carouselExampleControls"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](675, 0, null, null, 16, "div", [
                    ["class", "carousel-inner"],
                    ["role", "listbox"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](676, 0, null, null, 7, "div", [
                    ["class", "carousel-item active"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](677, 0, null, null, 0, "img", [
                    ["alt", "First slide"],
                    ["class", "img-fluid w-100"],
                    ["height", "833"],
                    ["src", "assets/img/tips1.jpg"],
                    ["width", "1920"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](678, 0, null, null, 4, "div", [
                    ["class", "carousel-caption d-none d-md-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](679, 0, null, null, 1, "h4", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Tips"])), (l()(), e["\u0275eld"](681, 0, null, null, 1, "h5", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Explore the best angular 4 theme with awesome sidebar "])), (l()(), e["\u0275eld"](683, 0, null, null, 0, "div", [
                    ["class", "caption-overlay"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](684, 0, null, null, 7, "div", [
                    ["class", "carousel-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](685, 0, null, null, 0, "img", [
                    ["alt", "Second slide"],
                    ["class", "img-fluid w-100"],
                    ["height", "833"],
                    ["src", "assets/img/tips2.jpg"],
                    ["width", "1920"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](686, 0, null, null, 4, "div", [
                    ["class", "carousel-caption d-none d-md-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](687, 0, null, null, 1, "h4", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Tips"])), (l()(), e["\u0275eld"](689, 0, null, null, 1, "h5", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Check out our diffent layput style "])), (l()(), e["\u0275eld"](691, 0, null, null, 0, "div", [
                    ["class", "caption-overlay"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](692, 0, null, null, 3, "a", [
                    ["class", "carousel-control-prev"],
                    ["data-slide", "prev"],
                    ["href", "#carouselExampleControls"],
                    ["role", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](693, 0, null, null, 0, "span", [
                    ["aria-hidden", "true"],
                    ["class", "carousel-control-prev-icon"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](694, 0, null, null, 1, "span", [
                    ["class", "sr-only"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Previous"])), (l()(), e["\u0275eld"](696, 0, null, null, 3, "a", [
                    ["class", "carousel-control-next"],
                    ["data-slide", "next"],
                    ["href", "#carouselExampleControls"],
                    ["role", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](697, 0, null, null, 0, "span", [
                    ["aria-hidden", "true"],
                    ["class", "carousel-control-next-icon"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](698, 0, null, null, 1, "span", [
                    ["class", "sr-only"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Next"])), (l()(), e["\u0275eld"](700, 0, null, null, 97, "div", [
                    ["class", "chk-block"],
                    ["widget", ""]
                ], null, null, null, null, null)), e["\u0275did"](701, 81920, null, 0, m, [e.ElementRef], null, null), (l()(), e["\u0275eld"](702, 0, null, null, 16, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](703, 0, null, null, 15, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](704, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](705, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Ratings"])), (l()(), e["\u0275eld"](707, 0, null, null, 11, "div", [
                    ["class", "d-inline-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](708, 0, null, null, 10, "div", [
                    ["class", "chk-contextual-link widget-controls"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](709, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "expand"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](710, 0, null, null, 0, "i", [
                    ["class", "icon-plus icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](711, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "collapse"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](712, 0, null, null, 0, "i", [
                    ["class", "icon-minus icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](713, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "close"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](714, 0, null, null, 0, "i", [
                    ["class", "icon-close icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](715, 0, null, null, 1, "a", [
                    ["data-widgster", "fullscreen"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](716, 0, null, null, 0, "i", [
                    ["class", "icon-size-fullscreen icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](717, 0, null, null, 1, "a", [
                    ["data-widgster", "restore"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](718, 0, null, null, 0, "i", [
                    ["class", "icon-size-actual icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](719, 0, null, null, 78, "div", [
                    ["class", "chk-block-content widget-body  p-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](720, 0, null, null, 77, "div", [
                    ["class", "recent-review card border-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](721, 0, null, null, 76, "div", [
                    ["class", "row no-gutters"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](722, 0, null, null, 17, "div", [
                    ["class", "col-xs-12 col-sm-6 col-md-6 col-lg-6"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](723, 0, null, null, 16, "div", [
                    ["class", "review-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](724, 0, null, null, 1, "h3", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Reviews"])), (l()(), e["\u0275eld"](726, 0, null, null, 1, "h2", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["4.5"])), (l()(), e["\u0275eld"](728, 0, null, null, 5, "div", [
                    ["class", "rating-starts mb-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](729, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-star text-yellow"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](730, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-star text-yellow"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](731, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-star text-yellow"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](732, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-star text-yellow"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](733, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-star-half-o text-yellow"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](734, 0, null, null, 2, "p", [
                    ["class", "d-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](735, 0, null, null, 0, "i", [
                    ["class", "fa fa-smile-o"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" \xa078 Positive"])), (l()(), e["\u0275eld"](737, 0, null, null, 2, "p", [
                    ["class", "d-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](738, 0, null, null, 0, "i", [
                    ["class", "fa fa-frown-o"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" \xa02 Negative"])), (l()(), e["\u0275eld"](740, 0, null, null, 57, "div", [
                    ["class", "col-xs-12 col-sm-6 col-md-6 col-lg-6"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](741, 0, null, null, 56, "div", [
                    ["class", "card-body rating-progress-list"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](742, 0, null, null, 55, "ul", [
                    ["class", "list-unstyled"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](743, 0, null, null, 10, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](744, 0, null, null, 3, "div", [
                    ["class", "pull-left"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](745, 0, null, null, 0, "i", [
                    ["class", "fa fa-star text-muted mr-2 fa-lg text-yellow"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](746, 0, null, null, 1, "span", [
                    ["class", "mx-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" 5 "])), (l()(), e["\u0275eld"](748, 0, null, null, 4, "div", [
                    ["class", "progress-listing"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](749, 0, null, null, 3, "div", [
                    ["class", "progress"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](750, 0, null, null, 2, "div", [
                    ["aria-valuemax", "100"],
                    ["aria-valuemin", "0"],
                    ["aria-valuenow", "75"],
                    ["class", "progress-bar bg-warning"],
                    ["role", "progressbar"],
                    ["style", "width: 100%; height: 4px;"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](751, 0, null, null, 1, "span", [
                    ["class", "sr-only"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["100% Complete"])), (l()(), e["\u0275eld"](753, 0, null, null, 0, "div", [
                    ["class", "clearfix"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](754, 0, null, null, 10, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](755, 0, null, null, 3, "div", [
                    ["class", "pull-left"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](756, 0, null, null, 0, "i", [
                    ["class", "fa fa-star text-muted mr-2 fa-lg text-yellow"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](757, 0, null, null, 1, "span", [
                    ["class", "mx-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" 4 "])), (l()(), e["\u0275eld"](759, 0, null, null, 4, "div", [
                    ["class", "progress-listing"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](760, 0, null, null, 3, "div", [
                    ["class", "progress"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](761, 0, null, null, 2, "div", [
                    ["aria-valuemax", "100"],
                    ["aria-valuemin", "0"],
                    ["aria-valuenow", "80"],
                    ["class", "progress-bar bg-warning"],
                    ["role", "progressbar"],
                    ["style", "width: 75%; height: 4px;"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](762, 0, null, null, 1, "span", [
                    ["class", "sr-only"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["80% Complete"])), (l()(), e["\u0275eld"](764, 0, null, null, 0, "div", [
                    ["class", "clearfix"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](765, 0, null, null, 10, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](766, 0, null, null, 3, "div", [
                    ["class", "pull-left"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](767, 0, null, null, 0, "i", [
                    ["class", "fa fa-star text-muted mr-2 fa-lg text-yellow"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](768, 0, null, null, 1, "span", [
                    ["class", "mx-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" 3 "])), (l()(), e["\u0275eld"](770, 0, null, null, 4, "div", [
                    ["class", "progress-listing"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](771, 0, null, null, 3, "div", [
                    ["class", "progress"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](772, 0, null, null, 2, "div", [
                    ["aria-valuemax", "100"],
                    ["aria-valuemin", "0"],
                    ["aria-valuenow", "40"],
                    ["class", "progress-bar bg-warning"],
                    ["role", "progressbar"],
                    ["style", "width: 60%; height: 4px;"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](773, 0, null, null, 1, "span", [
                    ["class", "sr-only"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["55% Complete"])), (l()(), e["\u0275eld"](775, 0, null, null, 0, "div", [
                    ["class", "clearfix"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](776, 0, null, null, 10, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](777, 0, null, null, 3, "div", [
                    ["class", "pull-left"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](778, 0, null, null, 0, "i", [
                    ["class", "fa fa-star text-muted mr-2 fa-lg text-yellow"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](779, 0, null, null, 1, "span", [
                    ["class", "mx-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" 2 "])), (l()(), e["\u0275eld"](781, 0, null, null, 4, "div", [
                    ["class", "progress-listing"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](782, 0, null, null, 3, "div", [
                    ["class", "progress"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](783, 0, null, null, 2, "div", [
                    ["aria-valuemax", "100"],
                    ["aria-valuemin", "0"],
                    ["aria-valuenow", "25"],
                    ["class", "progress-bar bg-warning"],
                    ["role", "progressbar"],
                    ["style", "width: 25%; height: 4px;"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](784, 0, null, null, 1, "span", [
                    ["class", "sr-only"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["25% Complete"])), (l()(), e["\u0275eld"](786, 0, null, null, 0, "div", [
                    ["class", "clearfix"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](787, 0, null, null, 10, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](788, 0, null, null, 3, "div", [
                    ["class", "pull-left"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](789, 0, null, null, 0, "i", [
                    ["class", "fa fa-star text-muted mr-2 fa-lg text-yellow"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](790, 0, null, null, 1, "span", [
                    ["class", "mx-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" 1 "])), (l()(), e["\u0275eld"](792, 0, null, null, 4, "div", [
                    ["class", "progress-listing"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](793, 0, null, null, 3, "div", [
                    ["class", "progress"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](794, 0, null, null, 2, "div", [
                    ["aria-valuemax", "100"],
                    ["aria-valuemin", "0"],
                    ["aria-valuenow", "15"],
                    ["class", "progress-bar bg-warning"],
                    ["role", "progressbar"],
                    ["style", "width: 15%; height: 4px;"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](795, 0, null, null, 1, "span", [
                    ["class", "sr-only"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["15% Complete"])), (l()(), e["\u0275eld"](797, 0, null, null, 0, "div", [
                    ["class", "clearfix"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](798, 0, null, null, 281, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](799, 0, null, null, 52, "div", [
                    ["class", "col-xs-12 col-sm-12 col-md-12 col-lg-3 col-half-lg-down"],
                    ["widget", ""]
                ], null, null, null, null, null)), e["\u0275did"](800, 81920, null, 0, m, [e.ElementRef], null, null), (l()(), e["\u0275eld"](801, 0, null, null, 50, "div", [
                    ["class", "chk-block bg-primary"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](802, 0, null, null, 16, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](803, 0, null, null, 15, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](804, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](805, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Feeds"])), (l()(), e["\u0275eld"](807, 0, null, null, 11, "div", [
                    ["class", "d-inline-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](808, 0, null, null, 10, "div", [
                    ["class", "chk-contextual-link widget-controls"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](809, 0, null, null, 1, "a", [
                    ["class", "transition text-white"],
                    ["data-widgster", "expand"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](810, 0, null, null, 0, "i", [
                    ["class", "icon-plus icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](811, 0, null, null, 1, "a", [
                    ["class", "transition text-white"],
                    ["data-widgster", "collapse"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](812, 0, null, null, 0, "i", [
                    ["class", "icon-minus icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](813, 0, null, null, 1, "a", [
                    ["class", "transition text-white"],
                    ["data-widgster", "close"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](814, 0, null, null, 0, "i", [
                    ["class", "icon-close icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](815, 0, null, null, 1, "a", [
                    ["class", "text-white"],
                    ["data-widgster", "fullscreen"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](816, 0, null, null, 0, "i", [
                    ["class", "icon-size-fullscreen icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](817, 0, null, null, 1, "a", [
                    ["class", "text-white"],
                    ["data-widgster", "restore"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](818, 0, null, null, 0, "i", [
                    ["class", "icon-size-actual icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](819, 0, null, null, 32, "div", [
                    ["class", "chk-block-content pb-2 widget-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](820, 0, null, null, 31, "div", [
                    ["class", "feed-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](821, 0, null, null, 30, "ul", [
                    ["class", "list-unstyled list-item-space"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](822, 0, null, null, 4, "li", [
                    ["class", "d-flex"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](823, 0, null, null, 1, "a", [
                    ["class", "d-block square-40 circle bg-white  text-warning shadow-box"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](824, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-bell-o"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](825, 0, null, null, 1, "span", [
                    ["class", "px-3 align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["You have 4 pending tasks."])), (l()(), e["\u0275eld"](827, 0, null, null, 4, "li", [
                    ["class", "d-flex"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](828, 0, null, null, 1, "a", [
                    ["class", "d-block square-40 circle bg-white  text-success shadow-box"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](829, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-server"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](830, 0, null, null, 1, "span", [
                    ["class", "px-3 align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Server #1 overloaded."])), (l()(), e["\u0275eld"](832, 0, null, null, 4, "li", [
                    ["class", "d-flex"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](833, 0, null, null, 1, "a", [
                    ["class", "d-block square-40 circle bg-white  text-primary shadow-box"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](834, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-reply-all"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](835, 0, null, null, 1, "span", [
                    ["class", "px-3 align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["10 Order Refunded."])), (l()(), e["\u0275eld"](837, 0, null, null, 4, "li", [
                    ["class", "d-flex"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](838, 0, null, null, 1, "a", [
                    ["class", "d-block square-40 circle bg-white  text-warning shadow-box"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](839, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-retweet"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](840, 0, null, null, 1, "span", [
                    ["class", "px-3 align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["New Version just arrived."])), (l()(), e["\u0275eld"](842, 0, null, null, 4, "li", [
                    ["class", "d-flex"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](843, 0, null, null, 1, "a", [
                    ["class", "d-block square-40 circle bg-white  text-success shadow-box"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](844, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-wrench"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](845, 0, null, null, 1, "span", [
                    ["class", "px-3 align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Database fails to load at client."])), (l()(), e["\u0275eld"](847, 0, null, null, 4, "li", [
                    ["class", "d-flex"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](848, 0, null, null, 1, "a", [
                    ["class", "d-block square-40 circle bg-white  text-primary shadow-box"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](849, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-trophy"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](850, 0, null, null, 1, "span", [
                    ["class", "px-3 align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Achived goal of 100 sales in month"])), (l()(), e["\u0275eld"](852, 0, null, null, 75, "div", [
                    ["class", "col-xs-12 col-sm-12 col-md-12 col-lg-3 col-half-lg-down"],
                    ["widget", ""]
                ], null, null, null, null, null)), e["\u0275did"](853, 81920, null, 0, m, [e.ElementRef], null, null), (l()(), e["\u0275eld"](854, 0, null, null, 73, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](855, 0, null, null, 16, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](856, 0, null, null, 15, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](857, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](858, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Support"])), (l()(), e["\u0275eld"](860, 0, null, null, 11, "div", [
                    ["class", "d-inline-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](861, 0, null, null, 10, "div", [
                    ["class", "chk-contextual-link widget-controls"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](862, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "expand"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](863, 0, null, null, 0, "i", [
                    ["class", "icon-plus icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](864, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "collapse"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](865, 0, null, null, 0, "i", [
                    ["class", "icon-minus icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](866, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "close"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](867, 0, null, null, 0, "i", [
                    ["class", "icon-close icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](868, 0, null, null, 1, "a", [
                    ["data-widgster", "fullscreen"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](869, 0, null, null, 0, "i", [
                    ["class", "icon-size-fullscreen icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](870, 0, null, null, 1, "a", [
                    ["data-widgster", "restore"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](871, 0, null, null, 0, "i", [
                    ["class", "icon-size-actual icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](872, 0, null, null, 55, "div", [
                    ["class", "chk-block-content widget-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](873, 0, null, null, 10, "div", [
                    ["class", "d-flex justify-content-between px-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](874, 0, null, null, 6, "div", [
                    ["class", "align-item-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](875, 0, null, null, 1, "span", [
                    ["class", "text-primary"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["#201798"])), (l()(), e["\u0275eld"](877, 0, null, null, 1, "span", [
                    ["class", "d-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Server unavaible"])), (l()(), e["\u0275eld"](879, 0, null, null, 1, "span", [
                    ["class", "text-muted small"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Opened by Timothy Owens today"])), (l()(), e["\u0275eld"](881, 0, null, null, 2, "div", [
                    ["class", "align-item-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](882, 0, null, null, 1, "span", [
                    ["class", "badge badge-success"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Completed"])), (l()(), e["\u0275eld"](884, 0, null, null, 10, "div", [
                    ["class", "d-flex justify-content-between px-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](885, 0, null, null, 6, "div", [
                    ["class", "align-item-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](886, 0, null, null, 1, "span", [
                    ["class", "text-primary"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["#209569"])), (l()(), e["\u0275eld"](888, 0, null, null, 1, "span", [
                    ["class", "d-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Server unavaible"])), (l()(), e["\u0275eld"](890, 0, null, null, 1, "span", [
                    ["class", "text-muted small"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Database not found error "])), (l()(), e["\u0275eld"](892, 0, null, null, 2, "div", [
                    ["class", "align-item-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](893, 0, null, null, 1, "span", [
                    ["class", "badge badge-success"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Completed"])), (l()(), e["\u0275eld"](895, 0, null, null, 10, "div", [
                    ["class", "d-flex justify-content-between px-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](896, 0, null, null, 6, "div", [
                    ["class", "align-item-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](897, 0, null, null, 1, "span", [
                    ["class", "text-primary"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["#209569"])), (l()(), e["\u0275eld"](899, 0, null, null, 1, "span", [
                    ["class", "d-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Server unavaible"])), (l()(), e["\u0275eld"](901, 0, null, null, 1, "span", [
                    ["class", "text-muted small"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Database not found error "])), (l()(), e["\u0275eld"](903, 0, null, null, 2, "div", [
                    ["class", "align-item-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](904, 0, null, null, 1, "span", [
                    ["class", "badge badge-success"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Completed"])), (l()(), e["\u0275eld"](906, 0, null, null, 10, "div", [
                    ["class", "d-flex justify-content-between px-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](907, 0, null, null, 6, "div", [
                    ["class", "align-item-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](908, 0, null, null, 1, "span", [
                    ["class", "text-primary"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["#201798"])), (l()(), e["\u0275eld"](910, 0, null, null, 1, "span", [
                    ["class", "d-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Server unavaible"])), (l()(), e["\u0275eld"](912, 0, null, null, 1, "span", [
                    ["class", "text-muted small"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Mobile App Problem"])), (l()(), e["\u0275eld"](914, 0, null, null, 2, "div", [
                    ["class", "align-item-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](915, 0, null, null, 1, "span", [
                    ["class", "badge badge-warning"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Pending"])), (l()(), e["\u0275eld"](917, 0, null, null, 10, "div", [
                    ["class", "d-flex justify-content-between px-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](918, 0, null, null, 6, "div", [
                    ["class", "align-item-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](919, 0, null, null, 1, "span", [
                    ["class", "text-primary"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["#201798"])), (l()(), e["\u0275eld"](921, 0, null, null, 1, "span", [
                    ["class", "d-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Server unavaible"])), (l()(), e["\u0275eld"](923, 0, null, null, 1, "span", [
                    ["class", "text-muted small"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Paypal is not connected."])), (l()(), e["\u0275eld"](925, 0, null, null, 2, "div", [
                    ["class", "align-item-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](926, 0, null, null, 1, "span", [
                    ["class", "badge badge-danger"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Urgent"])), (l()(), e["\u0275eld"](928, 0, null, null, 151, "div", [
                    ["class", "col-xs-12 col-sm-12 col-md-12 col-lg-6 col-full-lg-down"],
                    ["widget", ""]
                ], null, null, null, null, null)), e["\u0275did"](929, 81920, null, 0, m, [e.ElementRef], null, null), (l()(), e["\u0275eld"](930, 0, null, null, 149, "div", [
                    ["class", "chk-full-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](931, 0, null, null, 16, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](932, 0, null, null, 15, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](933, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](934, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Project Status"])), (l()(), e["\u0275eld"](936, 0, null, null, 11, "div", [
                    ["class", "d-inline-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](937, 0, null, null, 10, "div", [
                    ["class", "chk-contextual-link widget-controls"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](938, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "expand"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](939, 0, null, null, 0, "i", [
                    ["class", "icon-plus icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](940, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "collapse"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](941, 0, null, null, 0, "i", [
                    ["class", "icon-minus icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](942, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "close"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](943, 0, null, null, 0, "i", [
                    ["class", "icon-close icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](944, 0, null, null, 1, "a", [
                    ["data-widgster", "fullscreen"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](945, 0, null, null, 0, "i", [
                    ["class", "icon-size-fullscreen icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](946, 0, null, null, 1, "a", [
                    ["data-widgster", "restore"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](947, 0, null, null, 0, "i", [
                    ["class", "icon-size-actual icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](948, 0, null, null, 131, "div", [
                    ["class", "chk-block-content pb-4 widget-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](949, 0, null, null, 130, "div", [
                    ["class", "table-responsive"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](950, 0, null, null, 129, "table", [
                    ["class", "table table-striped table-middle mb-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](951, 0, null, null, 7, "thead", [], null, null, null, null, null)), (l()(), e["\u0275eld"](952, 0, null, null, 6, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](953, 0, null, null, 1, "th", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Project Name"])), (l()(), e["\u0275eld"](955, 0, null, null, 1, "th", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Progress"])), (l()(), e["\u0275eld"](957, 0, null, null, 1, "th", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Team Members"])), (l()(), e["\u0275eld"](959, 0, null, null, 120, "tbody", [], null, null, null, null, null)), (l()(), e["\u0275eld"](960, 0, null, null, 19, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](961, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Cinema Booking"])), (l()(), e["\u0275eld"](963, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](964, 0, null, null, 1, "div", [
                    ["class", "progress m-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](965, 0, null, null, 0, "div", [
                    ["aria-valuemax", "100"],
                    ["aria-valuemin", "0"],
                    ["aria-valuenow", "25"],
                    ["class", "progress-bar"],
                    ["role", "progressbar"],
                    ["style", "width: 25%; height: 5px;"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](966, 0, null, null, 13, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](967, 0, null, null, 12, "ul", [
                    ["class", "list-inline mb-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](968, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](969, 0, null, null, 1, "a", [], null, null, null, null, null)), (l()(), e["\u0275eld"](970, 0, null, null, 0, "img", [
                    ["alt", "team member"],
                    ["class", "img-fluid rounded-circle"],
                    ["height", "30"],
                    ["src", "assets/img/user-1.jpg"],
                    ["width", "30"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](971, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](972, 0, null, null, 1, "a", [
                    ["class", "square-30 rounded-circle bg-primary"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["DR"])), (l()(), e["\u0275eld"](974, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](975, 0, null, null, 1, "a", [], null, null, null, null, null)), (l()(), e["\u0275eld"](976, 0, null, null, 0, "img", [
                    ["alt", "team member"],
                    ["class", "img-fluid rounded-circle"],
                    ["height", "30"],
                    ["src", "assets/img/user-2.jpg"],
                    ["width", "30"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](977, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](978, 0, null, null, 1, "a", [], null, null, null, null, null)), (l()(), e["\u0275eld"](979, 0, null, null, 0, "img", [
                    ["alt", "team member"],
                    ["class", "img-fluid rounded-circle"],
                    ["height", "30"],
                    ["src", "assets/img/user-3.jpg"],
                    ["width", "30"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](980, 0, null, null, 19, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](981, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Angel\u2019s Fashion blog"])), (l()(), e["\u0275eld"](983, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](984, 0, null, null, 1, "div", [
                    ["class", "progress m-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](985, 0, null, null, 0, "div", [
                    ["aria-valuemax", "100"],
                    ["aria-valuemin", "0"],
                    ["aria-valuenow", "25"],
                    ["class", "progress-bar bg-success"],
                    ["role", "progressbar"],
                    ["style", "width: 65%; height: 5px;"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](986, 0, null, null, 13, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](987, 0, null, null, 12, "ul", [
                    ["class", "list-inline mb-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](988, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](989, 0, null, null, 1, "a", [], null, null, null, null, null)), (l()(), e["\u0275eld"](990, 0, null, null, 0, "img", [
                    ["alt", "team member"],
                    ["class", "img-fluid rounded-circle"],
                    ["height", "30"],
                    ["src", "assets/img/user-4.jpg"],
                    ["width", "30"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](991, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](992, 0, null, null, 1, "a", [], null, null, null, null, null)), (l()(), e["\u0275eld"](993, 0, null, null, 0, "img", [
                    ["alt", "team member"],
                    ["class", "img-fluid rounded-circle"],
                    ["height", "30"],
                    ["src", "assets/img/user-5.jpg"],
                    ["width", "30"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](994, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](995, 0, null, null, 1, "a", [], null, null, null, null, null)), (l()(), e["\u0275eld"](996, 0, null, null, 0, "img", [
                    ["alt", "team member"],
                    ["class", "img-fluid rounded-circle"],
                    ["height", "30"],
                    ["src", "assets/img/user-6.jpg"],
                    ["width", "30"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](997, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](998, 0, null, null, 1, "a", [], null, null, null, null, null)), (l()(), e["\u0275eld"](999, 0, null, null, 0, "img", [
                    ["alt", "team member"],
                    ["class", "img-fluid rounded-circle"],
                    ["height", "30"],
                    ["src", "assets/img/user-7.jpg"],
                    ["width", "30"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1e3, 0, null, null, 19, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1001, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["StarTrek cms"])), (l()(), e["\u0275eld"](1003, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1004, 0, null, null, 1, "div", [
                    ["class", "progress m-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1005, 0, null, null, 0, "div", [
                    ["aria-valuemax", "100"],
                    ["aria-valuemin", "0"],
                    ["aria-valuenow", "25"],
                    ["class", "progress-bar bg-warning"],
                    ["role", "progressbar"],
                    ["style", "width: 45%; height: 5px;"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1006, 0, null, null, 13, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1007, 0, null, null, 12, "ul", [
                    ["class", "list-inline mb-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1008, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1009, 0, null, null, 1, "a", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1010, 0, null, null, 0, "img", [
                    ["alt", "team member"],
                    ["class", "img-fluid rounded-circle"],
                    ["height", "30"],
                    ["src", "assets/img/user-8.jpg"],
                    ["width", "30"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1011, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1012, 0, null, null, 1, "a", [
                    ["class", "square-30 rounded-circle bg-primary"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["VP"])), (l()(), e["\u0275eld"](1014, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1015, 0, null, null, 1, "a", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1016, 0, null, null, 0, "img", [
                    ["alt", "team member"],
                    ["class", "img-fluid rounded-circle"],
                    ["height", "30"],
                    ["src", "assets/img/user-9.jpg"],
                    ["width", "30"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1017, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1018, 0, null, null, 1, "a", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1019, 0, null, null, 0, "img", [
                    ["alt", "team member"],
                    ["class", "img-fluid rounded-circle"],
                    ["height", "30"],
                    ["src", "assets/img/user-10.jpg"],
                    ["width", "30"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1020, 0, null, null, 19, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1021, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Saral Construction Theme"])), (l()(), e["\u0275eld"](1023, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1024, 0, null, null, 1, "div", [
                    ["class", "progress m-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1025, 0, null, null, 0, "div", [
                    ["aria-valuemax", "100"],
                    ["aria-valuemin", "0"],
                    ["aria-valuenow", "25"],
                    ["class", "progress-bar"],
                    ["role", "progressbar"],
                    ["style", "width: 85%; height: 5px;"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1026, 0, null, null, 13, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1027, 0, null, null, 12, "ul", [
                    ["class", "list-inline mb-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1028, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1029, 0, null, null, 1, "a", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1030, 0, null, null, 0, "img", [
                    ["alt", "team member"],
                    ["class", "img-fluid rounded-circle"],
                    ["height", "30"],
                    ["src", "assets/img/user-1.jpg"],
                    ["width", "30"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1031, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1032, 0, null, null, 1, "a", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1033, 0, null, null, 0, "img", [
                    ["alt", "team member"],
                    ["class", "img-fluid rounded-circle"],
                    ["height", "30"],
                    ["src", "assets/img/user-2.jpg"],
                    ["width", "30"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1034, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1035, 0, null, null, 1, "a", [
                    ["class", "square-30 rounded-circle bg-primary"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["RS"])), (l()(), e["\u0275eld"](1037, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1038, 0, null, null, 1, "a", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1039, 0, null, null, 0, "img", [
                    ["alt", "team member"],
                    ["class", "img-fluid rounded-circle"],
                    ["height", "30"],
                    ["src", "assets/img/user-3.jpg"],
                    ["width", "30"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1040, 0, null, null, 19, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1041, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Mali Gardening theme"])), (l()(), e["\u0275eld"](1043, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1044, 0, null, null, 1, "div", [
                    ["class", "progress m-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1045, 0, null, null, 0, "div", [
                    ["aria-valuemax", "100"],
                    ["aria-valuemin", "0"],
                    ["aria-valuenow", "25"],
                    ["class", "progress-bar bg-danger"],
                    ["role", "progressbar"],
                    ["style", "width: 90%; height: 5px;"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1046, 0, null, null, 13, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1047, 0, null, null, 12, "ul", [
                    ["class", "list-inline mb-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1048, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1049, 0, null, null, 1, "a", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1050, 0, null, null, 0, "img", [
                    ["alt", "team member"],
                    ["class", "img-fluid rounded-circle"],
                    ["height", "30"],
                    ["src", "assets/img/user-4.jpg"],
                    ["width", "30"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1051, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1052, 0, null, null, 1, "a", [
                    ["class", "square-30 rounded-circle bg-primary"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["DR"])), (l()(), e["\u0275eld"](1054, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1055, 0, null, null, 1, "a", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1056, 0, null, null, 0, "img", [
                    ["alt", "team member"],
                    ["class", "img-fluid rounded-circle"],
                    ["height", "30"],
                    ["src", "assets/img/user-5.jpg"],
                    ["width", "30"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1057, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1058, 0, null, null, 1, "a", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1059, 0, null, null, 0, "img", [
                    ["alt", "team member"],
                    ["class", "img-fluid rounded-circle"],
                    ["height", "30"],
                    ["src", "assets/img/user-6.jpg"],
                    ["width", "30"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1060, 0, null, null, 19, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1061, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Music flow app"])), (l()(), e["\u0275eld"](1063, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1064, 0, null, null, 1, "div", [
                    ["class", "progress m-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1065, 0, null, null, 0, "div", [
                    ["aria-valuemax", "100"],
                    ["aria-valuemin", "0"],
                    ["aria-valuenow", "25"],
                    ["class", "progress-bar bg-info"],
                    ["role", "progressbar"],
                    ["style", "width: 75%; height: 5px;"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1066, 0, null, null, 13, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1067, 0, null, null, 12, "ul", [
                    ["class", "list-inline mb-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1068, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1069, 0, null, null, 1, "a", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1070, 0, null, null, 0, "img", [
                    ["alt", "team member"],
                    ["class", "img-fluid rounded-circle"],
                    ["height", "30"],
                    ["src", "assets/img/user-1.jpg"],
                    ["width", "30"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1071, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1072, 0, null, null, 1, "a", [
                    ["class", "square-30 rounded-circle bg-primary"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["DR"])), (l()(), e["\u0275eld"](1074, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1075, 0, null, null, 1, "a", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1076, 0, null, null, 0, "img", [
                    ["alt", "team member"],
                    ["class", "img-fluid rounded-circle"],
                    ["height", "30"],
                    ["src", "assets/img/user-2.jpg"],
                    ["width", "30"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1077, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1078, 0, null, null, 1, "a", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1079, 0, null, null, 0, "img", [
                    ["alt", "team member"],
                    ["class", "img-fluid rounded-circle"],
                    ["height", "30"],
                    ["src", "assets/img/user-3.jpg"],
                    ["width", "30"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1080, 0, null, null, 208, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1081, 0, null, null, 138, "div", [
                    ["class", "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6"],
                    ["widget", ""]
                ], null, null, null, null, null)), e["\u0275did"](1082, 81920, null, 0, m, [e.ElementRef], null, null), (l()(), e["\u0275eld"](1083, 0, null, null, 103, "div", [
                    ["class", "chk-full-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1084, 0, null, null, 16, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1085, 0, null, null, 15, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1086, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1087, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Browser Stat"])), (l()(), e["\u0275eld"](1089, 0, null, null, 11, "div", [
                    ["class", "d-inline-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1090, 0, null, null, 10, "div", [
                    ["class", "chk-contextual-link widget-controls"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1091, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "expand"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1092, 0, null, null, 0, "i", [
                    ["class", "icon-plus icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1093, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "collapse"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1094, 0, null, null, 0, "i", [
                    ["class", "icon-minus icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1095, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "close"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1096, 0, null, null, 0, "i", [
                    ["class", "icon-close icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1097, 0, null, null, 1, "a", [
                    ["data-widgster", "fullscreen"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1098, 0, null, null, 0, "i", [
                    ["class", "icon-size-fullscreen icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1099, 0, null, null, 1, "a", [
                    ["data-widgster", "restore"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1100, 0, null, null, 0, "i", [
                    ["class", "icon-size-actual icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1101, 0, null, null, 85, "div", [
                    ["class", "chk-block-content widget-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1102, 0, null, null, 84, "div", [
                    ["class", "table-responsive"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1103, 0, null, null, 83, "table", [
                    ["class", "table table-middle table-striped"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1104, 0, null, null, 11, "thead", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1105, 0, null, null, 10, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1106, 0, null, null, 1, "th", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["\xa0"])), (l()(), e["\u0275eld"](1108, 0, null, null, 1, "th", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Browsers"])), (l()(), e["\u0275eld"](1110, 0, null, null, 1, "th", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Visits"])), (l()(), e["\u0275eld"](1112, 0, null, null, 1, "th", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Purchase"])), (l()(), e["\u0275eld"](1114, 0, null, null, 1, "th", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["%"])), (l()(), e["\u0275eld"](1116, 0, null, null, 70, "tbody", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1117, 0, null, null, 13, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1118, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1119, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1120, 0, null, null, 0, "i", [
                    ["class", "fa fa-firefox text-primary fa-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1121, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Mozila Firefox"])), (l()(), e["\u0275eld"](1123, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["10,392"])), (l()(), e["\u0275eld"](1125, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["4,214"])), (l()(), e["\u0275eld"](1127, 0, null, null, 3, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1128, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1129, 0, null, null, 0, "i", [
                    ["class", "fa fa-arrow-up text-success mr-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["45%"])), (l()(), e["\u0275eld"](1131, 0, null, null, 13, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1132, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1133, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1134, 0, null, null, 0, "i", [
                    ["class", "fa fa-chrome text-primary fa-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1135, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Google Chrome"])), (l()(), e["\u0275eld"](1137, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["8,322"])), (l()(), e["\u0275eld"](1139, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["3,200"])), (l()(), e["\u0275eld"](1141, 0, null, null, 3, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1142, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1143, 0, null, null, 0, "i", [
                    ["class", "fa fa-arrow-down text-warning mr-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["36%"])), (l()(), e["\u0275eld"](1145, 0, null, null, 13, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1146, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1147, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1148, 0, null, null, 0, "i", [
                    ["class", "fa fa-internet-explorer text-primary fa-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1149, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Internet Explorer"])), (l()(), e["\u0275eld"](1151, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["5,032"])), (l()(), e["\u0275eld"](1153, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["2.327"])), (l()(), e["\u0275eld"](1155, 0, null, null, 3, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1156, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1157, 0, null, null, 0, "i", [
                    ["class", "fa fa-arrow-down text-warning mr-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["28%"])), (l()(), e["\u0275eld"](1159, 0, null, null, 13, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1160, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1161, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1162, 0, null, null, 0, "i", [
                    ["class", "fa fa-internet-explorer text-primary fa-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1163, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Opera"])), (l()(), e["\u0275eld"](1165, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["5,341"])), (l()(), e["\u0275eld"](1167, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["454"])), (l()(), e["\u0275eld"](1169, 0, null, null, 3, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1170, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1171, 0, null, null, 0, "i", [
                    ["class", "fa fa-arrow-down text-warning mr-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["47%"])), (l()(), e["\u0275eld"](1173, 0, null, null, 13, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1174, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1175, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1176, 0, null, null, 0, "i", [
                    ["class", "fa fa-internet-explorer text-primary fa-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1177, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["UC Browser"])), (l()(), e["\u0275eld"](1179, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["45,534"])), (l()(), e["\u0275eld"](1181, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["48,489"])), (l()(), e["\u0275eld"](1183, 0, null, null, 3, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1184, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1185, 0, null, null, 0, "i", [
                    ["class", "fa fa-arrow-down text-warning mr-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["8%"])), (l()(), e["\u0275eld"](1187, 0, null, null, 32, "div", [
                    ["class", "author-card rounded-0 bg-light p-4 mb-4 card"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1188, 0, null, null, 31, "div", [
                    ["class", "media"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1189, 0, null, null, 0, "img", [
                    ["alt", "author thumb"],
                    ["class", "d-flex mr-3 img-fluid rounded-circle align-self-center"],
                    ["height", "120"],
                    ["src", "assets/img/user-4.jpg"],
                    ["width", "120"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1190, 0, null, null, 29, "div", [
                    ["class", "media-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1191, 0, null, null, 1, "h2", [
                    ["class", "font-normal"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Jake Applesed"])), (l()(), e["\u0275eld"](1193, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Freelance Designer"])), (l()(), e["\u0275eld"](1195, 0, null, null, 24, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1196, 0, null, null, 5, "div", [
                    ["class", "col-6 col-sm-4 col-md-4 col-lg-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1197, 0, null, null, 2, "span", [
                    ["class", "text-muted small"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1198, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-clock-o mr-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Working Hours"])), (l()(), e["\u0275eld"](1200, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["14 hours"])), (l()(), e["\u0275eld"](1202, 0, null, null, 5, "div", [
                    ["class", "col-6 col-sm-4 col-md-4 col-lg-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1203, 0, null, null, 2, "span", [
                    ["class", "text-muted small"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1204, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-money mr-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Amount Total"])), (l()(), e["\u0275eld"](1206, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["$6259"])), (l()(), e["\u0275eld"](1208, 0, null, null, 5, "div", [
                    ["class", "col-6 col-sm-4 col-md-4 col-lg-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1209, 0, null, null, 2, "span", [
                    ["class", "text-muted small"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1210, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-briefcase mr-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Overall Work"])), (l()(), e["\u0275eld"](1212, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["48%"])), (l()(), e["\u0275eld"](1214, 0, null, null, 5, "div", [
                    ["class", "col-6 col-sm-4 col-md-4 col-lg-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1215, 0, null, null, 2, "span", [
                    ["class", "text-muted small"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1216, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-quote-left mr-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Overdue"])), (l()(), e["\u0275eld"](1218, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["$289"])), (l()(), e["\u0275eld"](1220, 0, null, null, 68, "div", [
                    ["class", "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6"],
                    ["widget", ""]
                ], null, null, null, null, null)), e["\u0275did"](1221, 81920, null, 0, m, [e.ElementRef], null, null), (l()(), e["\u0275eld"](1222, 0, null, null, 66, "div", [
                    ["class", "mb-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1223, 0, null, null, 65, "div", [
                    ["class", "chk-block mb-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1224, 0, null, null, 16, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1225, 0, null, null, 15, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1226, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1227, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Chat"])), (l()(), e["\u0275eld"](1229, 0, null, null, 11, "div", [
                    ["class", "d-inline-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1230, 0, null, null, 10, "div", [
                    ["class", "chk-contextual-link widget-controls"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1231, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "expand"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1232, 0, null, null, 0, "i", [
                    ["class", "icon-plus icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1233, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "collapse"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1234, 0, null, null, 0, "i", [
                    ["class", "icon-minus icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1235, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "close"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1236, 0, null, null, 0, "i", [
                    ["class", "icon-close icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1237, 0, null, null, 1, "a", [
                    ["data-widgster", "fullscreen"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1238, 0, null, null, 0, "i", [
                    ["class", "icon-size-fullscreen icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1239, 0, null, null, 1, "a", [
                    ["data-widgster", "restore"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1240, 0, null, null, 0, "i", [
                    ["class", "icon-size-actual icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1241, 0, null, null, 47, "div", [
                    ["class", "chk-block-content widget-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1242, 0, null, null, 40, "div", [
                    ["class", "chat-wrapper"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1243, 0, null, null, 9, "div", [
                    ["class", "media"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1244, 0, null, null, 0, "img", [
                    ["alt", "thumb image"],
                    ["class", "d-flex mr-3 img-fluid rounded-circle"],
                    ["height", "60"],
                    ["src", "assets/img/user-1.jpg"],
                    ["width", "60"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1245, 0, null, null, 7, "div", [
                    ["class", "media-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1246, 0, null, null, 1, "span", [
                    ["class", "text-muted small d-block mb-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Beatrice Ward"])), (l()(), e["\u0275eld"](1248, 0, null, null, 2, "div", [
                    ["class", "chat-content odd"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1249, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This is exactly I needed. You guys did a great job."])), (l()(), e["\u0275eld"](1251, 0, null, null, 1, "p", [
                    ["class", "text-muted small mt-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["3 Min ago"])), (l()(), e["\u0275eld"](1253, 0, null, null, 9, "div", [
                    ["class", "media"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1254, 0, null, null, 7, "div", [
                    ["class", "media-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1255, 0, null, null, 1, "span", [
                    ["class", "text-muted small text-right d-block mb-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Estella Marsh"])), (l()(), e["\u0275eld"](1257, 0, null, null, 2, "div", [
                    ["class", "chat-content even"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1258, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["We are always here to help you. Our customer care service is 24X7."])), (l()(), e["\u0275eld"](1260, 0, null, null, 1, "p", [
                    ["class", "text-muted small text-right mt-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["4 Min ago"])), (l()(), e["\u0275eld"](1262, 0, null, null, 0, "img", [
                    ["alt", "thumb image"],
                    ["class", "d-flex ml-3 img-fluid rounded-circle"],
                    ["height", "60"],
                    ["src", "assets/img/user-3.jpg"],
                    ["width", "60"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1263, 0, null, null, 9, "div", [
                    ["class", "media"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1264, 0, null, null, 0, "img", [
                    ["alt", "thumb image"],
                    ["class", "d-flex mr-3 img-fluid rounded-circle"],
                    ["height", "60"],
                    ["src", "assets/img/user-1.jpg"],
                    ["width", "60"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1265, 0, null, null, 7, "div", [
                    ["class", "media-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1266, 0, null, null, 1, "span", [
                    ["class", "text-muted small d-block mb-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Beatrice Ward"])), (l()(), e["\u0275eld"](1268, 0, null, null, 2, "div", [
                    ["class", "chat-content odd"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1269, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["I got it fixed with your guidelines. Great and quick support !"])), (l()(), e["\u0275eld"](1271, 0, null, null, 1, "p", [
                    ["class", "text-muted small mt-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["5 Min ago"])), (l()(), e["\u0275eld"](1273, 0, null, null, 9, "div", [
                    ["class", "media"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1274, 0, null, null, 7, "div", [
                    ["class", "media-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1275, 0, null, null, 1, "span", [
                    ["class", "text-muted small text-right d-block mb-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Estella Marsh"])), (l()(), e["\u0275eld"](1277, 0, null, null, 2, "div", [
                    ["class", "chat-content even"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1278, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["You can go through the documentation for style customization."])), (l()(), e["\u0275eld"](1280, 0, null, null, 1, "p", [
                    ["class", "text-muted small text-right mt-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["5 Min ago"])), (l()(), e["\u0275eld"](1282, 0, null, null, 0, "img", [
                    ["alt", "thumb image"],
                    ["class", "d-flex ml-3 img-fluid rounded-circle"],
                    ["height", "60"],
                    ["src", "assets/img/user-3.jpg"],
                    ["width", "60"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1283, 0, null, null, 5, "div", [
                    ["class", "send-msg  p-4 bg-light"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1284, 0, null, null, 4, "div", [
                    ["class", "input-group"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1285, 0, null, null, 0, "input", [
                    ["class", "form-control"],
                    ["placeholder", "Type message..."],
                    ["type", "text"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1286, 0, null, null, 2, "span", [
                    ["class", "input-group-btn"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1287, 0, null, null, 1, "button", [
                    ["class", "btn btn-primary"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Send"])), (l()(), e["\u0275eld"](1289, 0, null, null, 206, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1290, 0, null, null, 205, "div", [
                    ["class", "col-xs-12 col-sm-12 col-md-12 col-lg-12"],
                    ["widget", ""]
                ], null, null, null, null, null)), e["\u0275did"](1291, 81920, null, 0, m, [e.ElementRef], null, null), (l()(), e["\u0275eld"](1292, 0, null, null, 203, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1293, 0, null, null, 16, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1294, 0, null, null, 15, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1295, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1296, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Order Status"])), (l()(), e["\u0275eld"](1298, 0, null, null, 11, "div", [
                    ["class", "d-inline-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1299, 0, null, null, 10, "div", [
                    ["class", "chk-contextual-link widget-controls"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1300, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "expand"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1301, 0, null, null, 0, "i", [
                    ["class", "icon-plus icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1302, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "collapse"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1303, 0, null, null, 0, "i", [
                    ["class", "icon-minus icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1304, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "close"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1305, 0, null, null, 0, "i", [
                    ["class", "icon-close icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1306, 0, null, null, 1, "a", [
                    ["data-widgster", "fullscreen"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1307, 0, null, null, 0, "i", [
                    ["class", "icon-size-fullscreen icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1308, 0, null, null, 1, "a", [
                    ["data-widgster", "restore"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1309, 0, null, null, 0, "i", [
                    ["class", "icon-size-actual icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1310, 0, null, null, 185, "div", [
                    ["class", "chk-block-content widget-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1311, 0, null, null, 184, "div", [
                    ["class", "table-responsive"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1312, 0, null, null, 183, "table", [
                    ["class", "table table-striped"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1313, 0, null, null, 13, "thead", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1314, 0, null, null, 12, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1315, 0, null, null, 1, "th", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Invoice"])), (l()(), e["\u0275eld"](1317, 0, null, null, 1, "th", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["User"])), (l()(), e["\u0275eld"](1319, 0, null, null, 1, "th", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Order date"])), (l()(), e["\u0275eld"](1321, 0, null, null, 1, "th", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Amount"])), (l()(), e["\u0275eld"](1323, 0, null, null, 1, "th", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Status"])), (l()(), e["\u0275eld"](1325, 0, null, null, 1, "th", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Tracking ID"])), (l()(), e["\u0275eld"](1327, 0, null, null, 168, "tbody", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1328, 0, null, null, 13, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1329, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Order #53431"])), (l()(), e["\u0275eld"](1331, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Estelle Rodriguez"])), (l()(), e["\u0275eld"](1333, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["27 Oct 2017"])), (l()(), e["\u0275eld"](1335, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["$59.08"])), (l()(), e["\u0275eld"](1337, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1338, 0, null, null, 1, "span", [
                    ["class", "badge badge-success"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Paid"])), (l()(), e["\u0275eld"](1340, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["CGX0089734531"])), (l()(), e["\u0275eld"](1342, 0, null, null, 13, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1343, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Order #53432"])), (l()(), e["\u0275eld"](1345, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Ronnie Payne"])), (l()(), e["\u0275eld"](1347, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["29 Mar 2017"])), (l()(), e["\u0275eld"](1349, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["$79.4"])), (l()(), e["\u0275eld"](1351, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1352, 0, null, null, 1, "span", [
                    ["class", "badge badge-danger"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["cancel"])), (l()(), e["\u0275eld"](1354, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["CGX0089734531"])), (l()(), e["\u0275eld"](1356, 0, null, null, 13, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1357, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Order #53433"])), (l()(), e["\u0275eld"](1359, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Fannie Simmons"])), (l()(), e["\u0275eld"](1361, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["9 Mar 2017"])), (l()(), e["\u0275eld"](1363, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["$79.4"])), (l()(), e["\u0275eld"](1365, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1366, 0, null, null, 1, "span", [
                    ["class", "badge badge-success"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Paid"])), (l()(), e["\u0275eld"](1368, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["CGX0089734531"])), (l()(), e["\u0275eld"](1370, 0, null, null, 13, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1371, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Order #53434"])), (l()(), e["\u0275eld"](1373, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Alan Spencer"])), (l()(), e["\u0275eld"](1375, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["26 Dec 2017"])), (l()(), e["\u0275eld"](1377, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["$3.12"])), (l()(), e["\u0275eld"](1379, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1380, 0, null, null, 1, "span", [
                    ["class", "badge badge-success"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Paid"])), (l()(), e["\u0275eld"](1382, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["CGX0089734531"])), (l()(), e["\u0275eld"](1384, 0, null, null, 13, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1385, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Order #53435"])), (l()(), e["\u0275eld"](1387, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Calvin Padilla"])), (l()(), e["\u0275eld"](1389, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["11 May 2017"])), (l()(), e["\u0275eld"](1391, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["$43.12"])), (l()(), e["\u0275eld"](1393, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1394, 0, null, null, 1, "span", [
                    ["class", "badge badge-warning"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["COD"])), (l()(), e["\u0275eld"](1396, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["CGX0089734531"])), (l()(), e["\u0275eld"](1398, 0, null, null, 13, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1399, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Order #53436"])), (l()(), e["\u0275eld"](1401, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Polly Ferguson"])), (l()(), e["\u0275eld"](1403, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["16 May 2017"])), (l()(), e["\u0275eld"](1405, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["$49.32"])), (l()(), e["\u0275eld"](1407, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1408, 0, null, null, 1, "span", [
                    ["class", "badge badge-success"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Paid"])), (l()(), e["\u0275eld"](1410, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["CGX0089734531"])), (l()(), e["\u0275eld"](1412, 0, null, null, 13, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1413, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Order #53437"])), (l()(), e["\u0275eld"](1415, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Carl Fowler"])), (l()(), e["\u0275eld"](1417, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["04 Dec 2017"])), (l()(), e["\u0275eld"](1419, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["$56.12"])), (l()(), e["\u0275eld"](1421, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1422, 0, null, null, 1, "span", [
                    ["class", "badge badge-danger"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Cancel"])), (l()(), e["\u0275eld"](1424, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["CGX0089734531"])), (l()(), e["\u0275eld"](1426, 0, null, null, 13, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1427, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Order #53438"])), (l()(), e["\u0275eld"](1429, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Charlotte Robertson"])), (l()(), e["\u0275eld"](1431, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["02 Nov 2017"])), (l()(), e["\u0275eld"](1433, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["$93.12"])), (l()(), e["\u0275eld"](1435, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1436, 0, null, null, 1, "span", [
                    ["class", "badge badge-success"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Paid"])), (l()(), e["\u0275eld"](1438, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["CGX0089734531"])), (l()(), e["\u0275eld"](1440, 0, null, null, 13, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1441, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Order #53439"])), (l()(), e["\u0275eld"](1443, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Miguel Love"])), (l()(), e["\u0275eld"](1445, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["05 May 2017"])), (l()(), e["\u0275eld"](1447, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["$44.12"])), (l()(), e["\u0275eld"](1449, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1450, 0, null, null, 1, "span", [
                    ["class", "badge badge-warning"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["COD"])), (l()(), e["\u0275eld"](1452, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["CGX0089734531"])), (l()(), e["\u0275eld"](1454, 0, null, null, 13, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1455, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Order #53440"])), (l()(), e["\u0275eld"](1457, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Polly Ferguson"])), (l()(), e["\u0275eld"](1459, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["16 May 2017"])), (l()(), e["\u0275eld"](1461, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["$49.32"])), (l()(), e["\u0275eld"](1463, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1464, 0, null, null, 1, "span", [
                    ["class", "badge badge-success"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Paid"])), (l()(), e["\u0275eld"](1466, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["CGX0089734531"])), (l()(), e["\u0275eld"](1468, 0, null, null, 13, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1469, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Order #53441"])), (l()(), e["\u0275eld"](1471, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Carl Fowler"])), (l()(), e["\u0275eld"](1473, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["04 Dec 2017"])), (l()(), e["\u0275eld"](1475, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["$56.12"])), (l()(), e["\u0275eld"](1477, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1478, 0, null, null, 1, "span", [
                    ["class", "badge badge-success"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Paid"])), (l()(), e["\u0275eld"](1480, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["CGX0089734531"])), (l()(), e["\u0275eld"](1482, 0, null, null, 13, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1483, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Order #53442"])), (l()(), e["\u0275eld"](1485, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Polly Ferguson"])), (l()(), e["\u0275eld"](1487, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["16 May 2017"])), (l()(), e["\u0275eld"](1489, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["$49.32"])), (l()(), e["\u0275eld"](1491, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1492, 0, null, null, 1, "span", [
                    ["class", "badge badge-success"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Paid"])), (l()(), e["\u0275eld"](1494, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["CGX0089734531"]))], function(l, n) {
                    var u = n.component;
                    l(n, 87, 0, u.products, u.colorScheme, 6), l(n, 114, 0, u.orders, u.colorScheme, u.autoScale), l(n, 142, 0, u.refunds, u.colorScheme, 16), l(n, 169, 0, u.customers, u.colorScheme, u.autoScale), l(n, 174, 0), l(n, 196, 1, [u.cost, u.dynamicChartColor, u.showLegend, u.showXAxis, u.showYAxis, u.autoScale, u.showXAxisLabel, u.showYAxisLabel, u.xAxisLabel, u.yAxisLabel, u.gradient, u.tooltipDisabled]), l(n, 200, 0), l(n, 235, 0, u.pie, u.picChartColor, u.showLabels, u.showLegend, u.explodeSlices, u.doughnut, !1), l(n, 264, 0), l(n, 291, 0, u.newTodoText), l(n, 301, 0, u.getNotDeleted()), l(n, 303, 0), l(n, 325, 0, u.newmembers), l(n, 328, 0), l(n, 365, 0), l(n, 523, 0), l(n, 594, 0), l(n, 701, 0), l(n, 800, 0), l(n, 853, 0), l(n, 929, 0), l(n, 1082, 0), l(n, 1221, 0), l(n, 1291, 0)
                }, function(l, n) {
                    var u = n.component;
                    l(n, 224, 0, u.explodeSlices), l(n, 230, 0, u.showLabels), l(n, 288, 0, e["\u0275nov"](n, 293).ngClassUntouched, e["\u0275nov"](n, 293).ngClassTouched, e["\u0275nov"](n, 293).ngClassPristine, e["\u0275nov"](n, 293).ngClassDirty, e["\u0275nov"](n, 293).ngClassValid, e["\u0275nov"](n, 293).ngClassInvalid, e["\u0275nov"](n, 293).ngClassPending)
                })
            }
            var z = e["\u0275ccf"]("ms-dashboard", R, function(l) {
                    return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 1, "ms-dashboard", [], [
                        [40, "@fadeInAnimation", 0]
                    ], null, null, D, $)), e["\u0275did"](1, 245760, null, 0, R, [w.a], null, null)], function(l, n) {
                        l(n, 1, 0)
                    }, function(l, n) {
                        l(n, 0, 0, !0)
                    })
                }, {}, {}, []),
                P = u("8rwn"),
                N = u("eZ3f");

            function F(l) {
                return (l.getHours() < 10 ? "0" : "") + l.getHours() + ":" + (l.getMinutes() < 10 ? "0" : "") + l.getMinutes() + ":" + (l.getSeconds() < 10 ? "0" : "") + l.getSeconds()
            }
            var O = function() {
                    function l(l) {
                        var n = this;
                        this.pageTitleService = l, this.newTodoText = "", this.todoList = [{
                            text: "Make the bed"
                        }, {
                            text: "Pay Bills"
                        }, {
                            text: "Prepare documents"
                        }, {
                            text: "Send update mails"
                        }, {
                            text: "Attend seminar at 3:00 PM"
                        }, {
                            text: "Book air tickets"
                        }, {
                            text: "Reply support requests"
                        }, {
                            text: "Yoga classes"
                        }], this.colorScheme = {
                            domain: ["#0066EB", "#F8C51C", "#51CAE3", "#ff5723", "#F54B5E", "#00caac"]
                        }, this.barColorScheme = {
                            domain: ["#0066EB"]
                        }, this.barColorScheme2 = {
                            domain: ["#FF5723"]
                        }, this.autoScale = !0, this.showXAxis = !0, this.showYAxis = !0, this.gradient = !1, this.tooltipDisabled = !1, this.showLegend = !1, this.showXAxisLabel = !0, this.xAxisLabel = "Time", this.showYAxisLabel = !0, this.yAxisLabel = "Cost", this.colorScheme2 = {
                            domain: ["#0066EB", "#00caac", "#51CAE3", "#ff5723", "#F54B5E", "#F8C51C"]
                        }, this.showLabels = !0, this.explodeSlices = !1, this.doughnut = !1, this.users = [{
                            image: "assets/img/user-1.jpg",
                            name: "Shally"
                        }, {
                            image: "assets/img/user-2.jpg",
                            name: "Lamar"
                        }, {
                            image: "assets/img/user-3.jpg",
                            name: "Lucinda"
                        }, {
                            image: "assets/img/user-4.jpg",
                            name: "Chester"
                        }, {
                            image: "assets/img/user-5.jpg",
                            name: "Clayton"
                        }, {
                            image: "assets/img/user-6.jpg",
                            name: "Andrew"
                        }, {
                            image: "assets/img/user-7.jpg",
                            name: "Terry"
                        }, {
                            image: "assets/img/dummy-user.png",
                            name: "Martha"
                        }], setInterval(function() {
                            n.cost = n.addRandomValue2().slice()
                        }, 3e3)
                    }
                    return l.prototype.ngOnInit = function() {
                        var l = this;
                        this.pageTitleService.setTitle("Dashboard 2"), this.orders = k, this.products = j, this.customers = C, this.refunds = T, this.orders = this.addRandomValue("orders"), this.customers = this.addRandomValue("customers"), this.cost = y, this.pie = S;
                        var n = document.querySelector(".to-do-list-wrap");
                        window.matchMedia("(min-width: 960px)").matches && new A.a(n), setTimeout(function() {
                            return l.orders = k.slice()
                        }), setTimeout(function() {
                            return l.products = j.slice()
                        }), setTimeout(function() {
                            return l.customers = C.slice()
                        }), setTimeout(function() {
                            return l.refunds = T.slice()
                        }), setTimeout(function() {
                            return l.pie = S.slice()
                        }), setTimeout(function() {
                            return l.cost = y.slice()
                        })
                    }, l.prototype.addRandomValue = function(l) {
                        switch (l) {
                            case "orders":
                                for (var n = 1; n < 30; n++) this.orders[0].series.push({
                                    name: 1980 + n,
                                    value: Math.ceil(1e6 * Math.random())
                                });
                                return this.orders;
                            case "customers":
                                for (n = 1; n < 15; n++) this.customers[0].series.push({
                                    name: 2e3 + n,
                                    value: Math.ceil(1e6 * Math.random())
                                });
                                return this.customers;
                            default:
                                return this.orders
                        }
                    }, l.prototype.addRandomValue2 = function() {
                        var l = 1e6 * Math.random();
                        this.cost[0].series.push({
                            name: F(new Date),
                            value: l
                        });
                        var n = 1e6 * Math.random();
                        return this.cost[1].series.push({
                            name: F(new Date),
                            value: n
                        }), this.cost[0].series.length > 5 && this.cost[0].series.splice(0, 1), this.cost[1].series.length > 5 && this.cost[1].series.splice(0, 1), this.cost
                    }, l.prototype.onSelect = function(l) {
                        console.log(l)
                    }, l.prototype.getNotDeleted = function() {
                        return this.todoList.filter(function(l) {
                            return !l.deleted
                        })
                    }, l.prototype.addToDoItem = function(l) {
                        1 !== l.which && 13 !== l.which || "" == this.newTodoText.trim() || (this.todoList.unshift({
                            text: this.newTodoText
                        }), this.newTodoText = "")
                    }, l.prototype.ngOnDestroy = function() {
                        this.cost[0].series.length = 0
                    }, l
                }(),
                I = e["\u0275crt"]({
                    encapsulation: 2,
                    styles: [
                        ['.to-do-wrap .header{border-bottom:1px solid #ccc;padding-bottom:20px}.to-do-wrap i.add-item-icon{font-size:18px}.to-do-wrap .to-do-list-wrap{height:234px;padding:0;margin-top:10px;margin-bottom:0}.to-do-wrap .to-do-list-wrap li{list-style:none;width:100%;line-height:0;position:relative}.to-do-wrap .to-do-list-wrap li.checked span:before{content:"\\f00c";-webkit-column-rule:#OOCAAC;column-rule:#OOCAAC}.to-do-wrap .to-do-list-wrap li.checked span{text-decoration:line-through}.to-do-wrap .to-do-list-wrap li input[type=checkbox]{position:absolute;opacity:0;z-index:1;cursor:pointer;width:100%;height:28px;line-height:28px}.to-do-wrap .to-do-list-wrap li span{width:100%;height:28px;line-height:28px;display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding-left:26px;padding-right:46px;position:relative}.to-do-wrap .to-do-list-wrap li span:before{font-family:FontAwesome;content:"\\f1db";margin-left:-26px;position:absolute;font-size:13px}.to-do-wrap .to-do-list-wrap li i{position:absolute;top:4px;right:10px;font-size:20px;opacity:1;z-index:2;cursor:pointer}']
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

            function _(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 13, "li", [], null, [
                    [null, "mouseenter"],
                    [null, "mouseleave"]
                ], function(l, n, u) {
                    var e = !0;
                    return "mouseenter" === n && (e = 0 != (l.context.$implicit.isActive = !0) && e), "mouseleave" === n && (e = 0 != (l.context.$implicit.isActive = !1) && e), e
                }, null, null)), e["\u0275did"](1, 278528, null, 0, a.NgClass, [e.IterableDiffers, e.KeyValueDiffers, e.ElementRef, e.Renderer2], {
                    ngClass: [0, "ngClass"]
                }, null), e["\u0275pod"](2, {
                    checked: 0,
                    active: 1
                }), (l()(), e["\u0275eld"](3, 0, null, null, 9, "label", [
                    ["class", "custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](4, 0, null, null, 5, "input", [
                    ["class", "custom-control-input"],
                    ["type", "checkbox"]
                ], [
                    [2, "ng-untouched", null],
                    [2, "ng-touched", null],
                    [2, "ng-pristine", null],
                    [2, "ng-dirty", null],
                    [2, "ng-valid", null],
                    [2, "ng-invalid", null],
                    [2, "ng-pending", null]
                ], [
                    [null, "ngModelChange"],
                    [null, "change"],
                    [null, "blur"]
                ], function(l, n, u) {
                    var s = !0;
                    return "change" === n && (s = !1 !== e["\u0275nov"](l, 5).onChange(u.target.checked) && s), "blur" === n && (s = !1 !== e["\u0275nov"](l, 5).onTouched() && s), "ngModelChange" === n && (s = !1 !== (l.context.$implicit.isChecked = u) && s), s
                }, null, null)), e["\u0275did"](5, 16384, null, 0, i.CheckboxControlValueAccessor, [e.Renderer2, e.ElementRef], null, null), e["\u0275prd"](1024, null, i.NG_VALUE_ACCESSOR, function(l) {
                    return [l]
                }, [i.CheckboxControlValueAccessor]), e["\u0275did"](7, 671744, null, 0, i.NgModel, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, i.NG_VALUE_ACCESSOR]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), e["\u0275prd"](2048, null, i.NgControl, null, [i.NgModel]), e["\u0275did"](9, 16384, null, 0, i.NgControlStatus, [
                    [4, i.NgControl]
                ], null, null), (l()(), e["\u0275eld"](10, 0, null, null, 0, "span", [
                    ["class", "custom-control-indicator"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](11, 0, null, null, 1, "span", [
                    ["class", "custom-control-description"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](12, null, ["", ""])), (l()(), e["\u0275eld"](13, 0, null, null, 0, "i", [
                    ["class", "fa fa-trash text-danger"]
                ], null, [
                    [null, "click"]
                ], function(l, n, u) {
                    var e = !0;
                    return "click" === n && (e = 0 != (l.context.$implicit.deleted = !0) && e), e
                }, null, null))], function(l, n) {
                    l(n, 1, 0, l(n, 2, 0, n.context.$implicit.isChecked, n.context.$implicit.isActive)), l(n, 7, 0, n.context.$implicit.isChecked)
                }, function(l, n) {
                    l(n, 4, 0, e["\u0275nov"](n, 9).ngClassUntouched, e["\u0275nov"](n, 9).ngClassTouched, e["\u0275nov"](n, 9).ngClassPristine, e["\u0275nov"](n, 9).ngClassDirty, e["\u0275nov"](n, 9).ngClassValid, e["\u0275nov"](n, 9).ngClassInvalid, e["\u0275nov"](n, 9).ngClassPending), l(n, 12, 0, n.context.$implicit.text)
                })
            }

            function q(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 7, "div", [
                    ["class", "col-6 col-sm-3 col-md-3 col-lg-3 col-12-lg-down"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 6, "div", [
                    ["class", "chk-thumbnail text-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](2, 0, null, null, 0, "img", [
                    ["alt", "user image"],
                    ["class", "img-fluid mb-1 circle"],
                    ["height", "95"],
                    ["width", "95"]
                ], [
                    [8, "src", 4]
                ], null, null, null, null)), (l()(), e["\u0275eld"](3, 0, null, null, 4, "div", [
                    ["class", "chk-thumbnail-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](4, 0, null, null, 1, "span", [
                    ["class", "text-primary"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](5, null, ["", ""])), (l()(), e["\u0275eld"](6, 0, null, null, 1, "p", [
                    ["class", "text-danger small"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["USA"]))], null, function(l, n) {
                    l(n, 2, 0, e["\u0275inlineInterpolate"](1, "", n.context.$implicit.image, "")), l(n, 5, 0, n.context.$implicit.name)
                })
            }

            function V(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 116, "div", [
                    ["class", "row stats-grid"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 28, "div", [
                    ["class", "col-xl-3 col-lg-6 col-md-6 mb-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](2, 0, null, null, 27, "div", [
                    ["class", "card rounded-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](3, 0, null, null, 26, "div", [
                    ["class", "card-body stat-border-primary over-visible"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](4, 0, null, null, 16, "div", [
                    ["class", "d-flex justify-content-between mb-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](5, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](6, 0, null, null, 1, "h4", [
                    ["class", "fw-normal"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Total Profit"])), (l()(), e["\u0275eld"](8, 0, null, null, 12, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](9, 0, null, null, 11, "div", [
                    ["class", "dropdown show"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](10, 0, null, null, 3, "a", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "text-muted"],
                    ["data-toggle", "dropdown"],
                    ["href", "#"],
                    ["id", "dropdownMenuLink"],
                    ["role", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](11, 0, null, null, 1, "small", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Today"])), (l()(), e["\u0275eld"](13, 0, null, null, 0, "i", [
                    ["class", "fa fa-angle-down"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](14, 0, null, null, 6, "div", [
                    ["aria-labelledby", "dropdownMenuLink"],
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](15, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Week"])), (l()(), e["\u0275eld"](17, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Month"])), (l()(), e["\u0275eld"](19, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Year"])), (l()(), e["\u0275eld"](21, 0, null, null, 8, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](22, 0, null, null, 4, "div", [
                    ["class", "align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](23, 0, null, null, 1, "h2", [
                    ["class", "mb-1 fw-normal fs-26"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["$40,200"])), (l()(), e["\u0275eld"](25, 0, null, null, 1, "p", [
                    ["class", "small text-muted"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Last week (40.5%)"])), (l()(), e["\u0275eld"](27, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](28, 0, null, null, 1, "span", [
                    ["class", "text-success"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](29, 0, null, null, 0, "i", [
                    ["class", "fa fa-arrow-up fa-2x"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](30, 0, null, null, 28, "div", [
                    ["class", "col-xl-3 col-lg-6 col-md-6 mb-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](31, 0, null, null, 27, "div", [
                    ["class", "card rounded-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](32, 0, null, null, 26, "div", [
                    ["class", "card-body stat-border-warning over-visible"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](33, 0, null, null, 16, "div", [
                    ["class", "d-flex justify-content-between mb-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](34, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](35, 0, null, null, 1, "h4", [
                    ["class", "fw-normal"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Visits"])), (l()(), e["\u0275eld"](37, 0, null, null, 12, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](38, 0, null, null, 11, "div", [
                    ["class", "dropdown show"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](39, 0, null, null, 3, "a", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "text-muted"],
                    ["data-toggle", "dropdown"],
                    ["href", "#"],
                    ["id", "dropdownMenuLink"],
                    ["role", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](40, 0, null, null, 1, "small", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Today"])), (l()(), e["\u0275eld"](42, 0, null, null, 0, "i", [
                    ["class", "fa fa-angle-down"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](43, 0, null, null, 6, "div", [
                    ["aria-labelledby", "dropdownMenuLink"],
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](44, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Week"])), (l()(), e["\u0275eld"](46, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Month"])), (l()(), e["\u0275eld"](48, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Year"])), (l()(), e["\u0275eld"](50, 0, null, null, 8, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](51, 0, null, null, 4, "div", [
                    ["class", "align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](52, 0, null, null, 1, "h2", [
                    ["class", "mb-1 fw-normal fs-26"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["7,115"])), (l()(), e["\u0275eld"](54, 0, null, null, 1, "p", [
                    ["class", "small text-muted"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Last week (40.5%)"])), (l()(), e["\u0275eld"](56, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](57, 0, null, null, 1, "span", [
                    ["class", "text-success"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](58, 0, null, null, 0, "i", [
                    ["class", "fa fa-arrow-up fa-2x"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](59, 0, null, null, 28, "div", [
                    ["class", "col-xl-3 col-lg-6 col-md-6 mb-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](60, 0, null, null, 27, "div", [
                    ["class", "card rounded-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](61, 0, null, null, 26, "div", [
                    ["class", "card-body stat-border-success over-visible"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](62, 0, null, null, 16, "div", [
                    ["class", "d-flex justify-content-between mb-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](63, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](64, 0, null, null, 1, "h4", [
                    ["class", "fw-normal"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["New Orders"])), (l()(), e["\u0275eld"](66, 0, null, null, 12, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](67, 0, null, null, 11, "div", [
                    ["class", "dropdown show"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](68, 0, null, null, 3, "a", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "text-muted"],
                    ["data-toggle", "dropdown"],
                    ["href", "#"],
                    ["id", "dropdownMenuLink"],
                    ["role", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](69, 0, null, null, 1, "small", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Today"])), (l()(), e["\u0275eld"](71, 0, null, null, 0, "i", [
                    ["class", "fa fa-angle-down"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](72, 0, null, null, 6, "div", [
                    ["aria-labelledby", "dropdownMenuLink"],
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](73, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Week"])), (l()(), e["\u0275eld"](75, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Month"])), (l()(), e["\u0275eld"](77, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Year"])), (l()(), e["\u0275eld"](79, 0, null, null, 8, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](80, 0, null, null, 4, "div", [
                    ["class", "align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](81, 0, null, null, 1, "h2", [
                    ["class", "mb-1 fw-normal fs-26"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["1455"])), (l()(), e["\u0275eld"](83, 0, null, null, 1, "p", [
                    ["class", "small text-muted"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Last week (40.5%)"])), (l()(), e["\u0275eld"](85, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](86, 0, null, null, 1, "span", [
                    ["class", "text-danger"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](87, 0, null, null, 0, "i", [
                    ["class", "fa fa-arrow-down fa-2x"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](88, 0, null, null, 28, "div", [
                    ["class", "col-xl-3 col-lg-6 col-md-6 mb-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](89, 0, null, null, 27, "div", [
                    ["class", "card rounded-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](90, 0, null, null, 26, "div", [
                    ["class", "card-body stat-border-inverse over-visible"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](91, 0, null, null, 16, "div", [
                    ["class", "d-flex justify-content-between mb-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](92, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](93, 0, null, null, 1, "h4", [
                    ["class", "fw-normal"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Comments"])), (l()(), e["\u0275eld"](95, 0, null, null, 12, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](96, 0, null, null, 11, "div", [
                    ["class", "dropdown show"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](97, 0, null, null, 3, "a", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "text-muted"],
                    ["data-toggle", "dropdown"],
                    ["href", "#"],
                    ["id", "dropdownMenuLink"],
                    ["role", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](98, 0, null, null, 1, "small", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Today"])), (l()(), e["\u0275eld"](100, 0, null, null, 0, "i", [
                    ["class", "fa fa-angle-down"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](101, 0, null, null, 6, "div", [
                    ["aria-labelledby", "dropdownMenuLink"],
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](102, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Week"])), (l()(), e["\u0275eld"](104, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Month"])), (l()(), e["\u0275eld"](106, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Year"])), (l()(), e["\u0275eld"](108, 0, null, null, 8, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](109, 0, null, null, 4, "div", [
                    ["class", "align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](110, 0, null, null, 1, "h2", [
                    ["class", "mb-1 fw-normal fs-26"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["5,400"])), (l()(), e["\u0275eld"](112, 0, null, null, 1, "p", [
                    ["class", "small text-muted"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Last week (40.5%)"])), (l()(), e["\u0275eld"](114, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](115, 0, null, null, 1, "span", [
                    ["class", "text-success"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](116, 0, null, null, 0, "i", [
                    ["class", "fa fa-arrow-up fa-2x"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](117, 0, null, null, 110, "div", [
                    ["class", "row mb-n2 mt-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](118, 0, null, null, 26, "div", [
                    ["class", "col-xl-3 col-lg-6 col-md-6 mb-4 col-half-lg-down mb-3 mb-5-down"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](119, 0, null, null, 25, "div", [
                    ["class", "card border-0 bg-light hover-up"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](120, 0, null, null, 8, "div", [
                    ["class", "card-head d-flex justify-content-between pt-3 pb-2 px-3 bg-primary hover-up-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](121, 0, null, null, 4, "div", [
                    ["class", "align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](122, 0, null, null, 1, "span", [
                    ["class", "d-block fa-2x"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["14,8952"])), (l()(), e["\u0275eld"](124, 0, null, null, 1, "span", [
                    ["class", "d-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Total Income"])), (l()(), e["\u0275eld"](126, 0, null, null, 2, "h5", [
                    ["class", "align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](127, 0, null, null, 1, "i", [
                    ["class", "material-icons font-xl"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["attach_money"])), (l()(), e["\u0275eld"](129, 0, null, null, 15, "div", [
                    ["class", "card-body p-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](130, 0, null, null, 14, "div", [
                    ["class", "w-100 height-130"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](131, 0, null, null, 8, "div", [
                    ["class", "card-actions text-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](132, 0, null, null, 3, "a", [
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](133, 0, null, null, 0, "i", [
                    ["class", "icon-pencil icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](134, 0, null, null, 1, "a", [
                    ["class", "tooltip-link"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Edit"])), (l()(), e["\u0275eld"](136, 0, null, null, 3, "a", [
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](137, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "icon-close icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](138, 0, null, null, 1, "a", [
                    ["class", "tooltip-link"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Remove"])), (l()(), e["\u0275eld"](140, 0, null, null, 1, "h5", [
                    ["class", "py-3 px-4 fw-normal"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Stats This Week"])), (l()(), e["\u0275eld"](142, 0, null, null, 2, "ngx-charts-bar-vertical", [], null, [
                    [null, "select"]
                ], function(l, n, u) {
                    var e = !0;
                    return "select" === n && (e = !1 !== l.component.onSelect(u) && e), e
                }, c.b, c.a)), e["\u0275did"](143, 4898816, null, 1, o.a, [e.ElementRef, e.NgZone, e.ChangeDetectorRef], {
                    results: [0, "results"],
                    scheme: [1, "scheme"]
                }, {
                    select: "select"
                }), e["\u0275qud"](335544320, 1, {
                    tooltipTemplate: 0
                }), (l()(), e["\u0275eld"](145, 0, null, null, 27, "div", [
                    ["class", "col-xl-3 col-lg-6 col-md-6 mb-4 col-half-lg-down mb-3 mb-5-down"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](146, 0, null, null, 26, "div", [
                    ["class", "card border-0 bg-light hover-up"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](147, 0, null, null, 8, "div", [
                    ["class", "card-head d-flex justify-content-between pt-3 pb-2 px-3 bg-warning hover-up-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](148, 0, null, null, 4, "div", [
                    ["class", "align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](149, 0, null, null, 1, "span", [
                    ["class", "d-block fa-2x"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["98,764"])), (l()(), e["\u0275eld"](151, 0, null, null, 1, "span", [
                    ["class", "d-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Total Users"])), (l()(), e["\u0275eld"](153, 0, null, null, 2, "h5", [
                    ["class", "align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](154, 0, null, null, 1, "i", [
                    ["class", "material-icons font-xl"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["supervisor_account"])), (l()(), e["\u0275eld"](156, 0, null, null, 16, "div", [
                    ["class", "card-body p-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](157, 0, null, null, 15, "div", [
                    ["class", "w-100 height-130"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](158, 0, null, null, 8, "div", [
                    ["class", "card-actions text-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](159, 0, null, null, 3, "a", [
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](160, 0, null, null, 0, "i", [
                    ["class", "icon-pencil icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](161, 0, null, null, 1, "a", [
                    ["class", "tooltip-link"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Edit"])), (l()(), e["\u0275eld"](163, 0, null, null, 3, "a", [
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](164, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "icon-close icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](165, 0, null, null, 1, "a", [
                    ["class", "tooltip-link"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Remove"])), (l()(), e["\u0275eld"](167, 0, null, null, 1, "h5", [
                    ["class", "py-3 px-4 fw-normal"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Stats This Week"])), (l()(), e["\u0275eld"](169, 0, null, null, 3, "ngx-charts-line-chart", [], null, [
                    [null, "select"],
                    [null, "mouseleave"]
                ], function(l, n, u) {
                    var s = !0,
                        d = l.component;
                    return "mouseleave" === n && (s = !1 !== e["\u0275nov"](l, 170).hideCircles() && s), "select" === n && (s = !1 !== d.onSelect(u) && s), s
                }, r.b, r.a)), e["\u0275did"](170, 4898816, null, 2, p.a, [e.ElementRef, e.NgZone, e.ChangeDetectorRef], {
                    results: [0, "results"],
                    scheme: [1, "scheme"],
                    autoScale: [2, "autoScale"]
                }, {
                    select: "select"
                }), e["\u0275qud"](335544320, 2, {
                    tooltipTemplate: 0
                }), e["\u0275qud"](335544320, 3, {
                    seriesTooltipTemplate: 0
                }), (l()(), e["\u0275eld"](173, 0, null, null, 26, "div", [
                    ["class", "col-xl-3 col-lg-6 col-md-6 mb-4 col-half-lg-down mb-3 mb-5-down"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](174, 0, null, null, 25, "div", [
                    ["class", "card border-0 bg-light hover-up"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](175, 0, null, null, 8, "div", [
                    ["class", "card-head d-flex justify-content-between pt-3 pb-2 px-3 bg-success hover-up-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](176, 0, null, null, 4, "div", [
                    ["class", "align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](177, 0, null, null, 1, "span", [
                    ["class", "d-block fa-2x"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["$10,583"])), (l()(), e["\u0275eld"](179, 0, null, null, 1, "span", [
                    ["class", "d-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Total Profit"])), (l()(), e["\u0275eld"](181, 0, null, null, 2, "h5", [
                    ["class", "align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](182, 0, null, null, 1, "i", [
                    ["class", "material-icons font-xl"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["donut_small"])), (l()(), e["\u0275eld"](184, 0, null, null, 15, "div", [
                    ["class", "card-body p-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](185, 0, null, null, 14, "div", [
                    ["class", "w-100 height-130"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](186, 0, null, null, 8, "div", [
                    ["class", "card-actions text-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](187, 0, null, null, 3, "a", [
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](188, 0, null, null, 0, "i", [
                    ["class", "icon-pencil icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](189, 0, null, null, 1, "a", [
                    ["class", "tooltip-link"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Edit"])), (l()(), e["\u0275eld"](191, 0, null, null, 3, "a", [
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](192, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "icon-close icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](193, 0, null, null, 1, "a", [
                    ["class", "tooltip-link"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Remove"])), (l()(), e["\u0275eld"](195, 0, null, null, 1, "h5", [
                    ["class", "py-3 px-4 fw-normal"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Stats This Week"])), (l()(), e["\u0275eld"](197, 0, null, null, 2, "ngx-charts-bar-vertical", [], null, [
                    [null, "select"]
                ], function(l, n, u) {
                    var e = !0;
                    return "select" === n && (e = !1 !== l.component.onSelect(u) && e), e
                }, c.b, c.a)), e["\u0275did"](198, 4898816, null, 1, o.a, [e.ElementRef, e.NgZone, e.ChangeDetectorRef], {
                    results: [0, "results"],
                    scheme: [1, "scheme"]
                }, {
                    select: "select"
                }), e["\u0275qud"](335544320, 4, {
                    tooltipTemplate: 0
                }), (l()(), e["\u0275eld"](200, 0, null, null, 27, "div", [
                    ["class", "col-xl-3 col-lg-6 col-md-6 mb-4 col-half-lg-down mb-3 mb-5-down"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](201, 0, null, null, 26, "div", [
                    ["class", "card border-0 bg-light hover-up"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](202, 0, null, null, 8, "div", [
                    ["class", "card-head d-flex justify-content-between pt-3 pb-2 px-3 bg-danger hover-up-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](203, 0, null, null, 4, "div", [
                    ["class", "align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](204, 0, null, null, 1, "span", [
                    ["class", "d-block fa-2x"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["$7,845"])), (l()(), e["\u0275eld"](206, 0, null, null, 1, "span", [
                    ["class", "d-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Total Expensive"])), (l()(), e["\u0275eld"](208, 0, null, null, 2, "h5", [
                    ["class", "align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](209, 0, null, null, 1, "i", [
                    ["class", "material-icons font-xl"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["swap_vert"])), (l()(), e["\u0275eld"](211, 0, null, null, 16, "div", [
                    ["class", " p-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](212, 0, null, null, 15, "div", [
                    ["class", "w-100 height-130"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](213, 0, null, null, 8, "div", [
                    ["class", "card-actions text-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](214, 0, null, null, 3, "a", [
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](215, 0, null, null, 0, "i", [
                    ["class", "icon-pencil icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](216, 0, null, null, 1, "a", [
                    ["class", "tooltip-link"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Edit"])), (l()(), e["\u0275eld"](218, 0, null, null, 3, "a", [
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](219, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "icon-close icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](220, 0, null, null, 1, "a", [
                    ["class", "tooltip-link"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Remove"])), (l()(), e["\u0275eld"](222, 0, null, null, 1, "h5", [
                    ["class", "py-3 px-4 fw-normal"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Stats This Week"])), (l()(), e["\u0275eld"](224, 0, null, null, 3, "ngx-charts-line-chart", [], null, [
                    [null, "select"],
                    [null, "mouseleave"]
                ], function(l, n, u) {
                    var s = !0,
                        d = l.component;
                    return "mouseleave" === n && (s = !1 !== e["\u0275nov"](l, 225).hideCircles() && s), "select" === n && (s = !1 !== d.onSelect(u) && s), s
                }, r.b, r.a)), e["\u0275did"](225, 4898816, null, 2, p.a, [e.ElementRef, e.NgZone, e.ChangeDetectorRef], {
                    results: [0, "results"],
                    scheme: [1, "scheme"],
                    autoScale: [2, "autoScale"]
                }, {
                    select: "select"
                }), e["\u0275qud"](335544320, 5, {
                    tooltipTemplate: 0
                }), e["\u0275qud"](335544320, 6, {
                    seriesTooltipTemplate: 0
                }), (l()(), e["\u0275eld"](228, 0, null, null, 51, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](229, 0, null, null, 25, "div", [
                    ["class", "col-sm-12 col-md-12 col-lg-6 pb-md-6"],
                    ["widget", ""]
                ], null, null, null, null, null)), e["\u0275did"](230, 81920, null, 0, m, [e.ElementRef], null, null), (l()(), e["\u0275eld"](231, 0, null, null, 23, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](232, 0, null, null, 16, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](233, 0, null, null, 15, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](234, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](235, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dynamic Chart"])), (l()(), e["\u0275eld"](237, 0, null, null, 11, "div", [
                    ["class", "d-inline-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](238, 0, null, null, 10, "div", [
                    ["class", "chk-contextual-link widget-controls"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](239, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "expand"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](240, 0, null, null, 0, "i", [
                    ["class", "icon-plus icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](241, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "collapse"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](242, 0, null, null, 0, "i", [
                    ["class", "icon-minus icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](243, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "close"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](244, 0, null, null, 0, "i", [
                    ["class", "icon-close icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](245, 0, null, null, 1, "a", [
                    ["data-widgster", "fullscreen"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](246, 0, null, null, 0, "i", [
                    ["class", "icon-size-fullscreen icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](247, 0, null, null, 1, "a", [
                    ["data-widgster", "restore"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](248, 0, null, null, 0, "i", [
                    ["class", "icon-size-actual icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](249, 0, null, null, 5, "div", [
                    ["class", "chk-block-content widget-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](250, 0, null, null, 4, "div", [
                    ["class", "w-100 height-300"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](251, 0, null, null, 3, "ngx-charts-area-chart", [], null, [
                    [null, "select"],
                    [null, "mouseleave"]
                ], function(l, n, u) {
                    var s = !0,
                        d = l.component;
                    return "mouseleave" === n && (s = !1 !== e["\u0275nov"](l, 252).hideCircles() && s), "select" === n && (s = !1 !== d.onSelect(u) && s), s
                }, g.b, g.a)), e["\u0275did"](252, 4898816, null, 2, f.a, [e.ElementRef, e.NgZone, e.ChangeDetectorRef], {
                    results: [0, "results"],
                    scheme: [1, "scheme"],
                    legend: [2, "legend"],
                    xAxis: [3, "xAxis"],
                    yAxis: [4, "yAxis"],
                    autoScale: [5, "autoScale"],
                    showXAxisLabel: [6, "showXAxisLabel"],
                    showYAxisLabel: [7, "showYAxisLabel"],
                    xAxisLabel: [8, "xAxisLabel"],
                    yAxisLabel: [9, "yAxisLabel"],
                    gradient: [10, "gradient"],
                    tooltipDisabled: [11, "tooltipDisabled"]
                }, {
                    select: "select"
                }), e["\u0275qud"](335544320, 7, {
                    tooltipTemplate: 0
                }), e["\u0275qud"](335544320, 8, {
                    seriesTooltipTemplate: 0
                }), (l()(), e["\u0275eld"](255, 0, null, null, 24, "div", [
                    ["class", "col-sm-12 col-md-12 col-lg-6 pb-md-6"],
                    ["widget", ""]
                ], null, null, null, null, null)), e["\u0275did"](256, 81920, null, 0, m, [e.ElementRef], null, null), (l()(), e["\u0275eld"](257, 0, null, null, 22, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](258, 0, null, null, 16, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](259, 0, null, null, 15, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](260, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](261, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Pie Chart"])), (l()(), e["\u0275eld"](263, 0, null, null, 11, "div", [
                    ["class", "d-inline-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](264, 0, null, null, 10, "div", [
                    ["class", "chk-contextual-link widget-controls"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](265, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "expand"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](266, 0, null, null, 0, "i", [
                    ["class", "icon-plus icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](267, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "collapse"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](268, 0, null, null, 0, "i", [
                    ["class", "icon-minus icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](269, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "close"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](270, 0, null, null, 0, "i", [
                    ["class", "icon-close icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](271, 0, null, null, 1, "a", [
                    ["data-widgster", "fullscreen"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](272, 0, null, null, 0, "i", [
                    ["class", "icon-size-fullscreen icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](273, 0, null, null, 1, "a", [
                    ["data-widgster", "restore"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](274, 0, null, null, 0, "i", [
                    ["class", "icon-size-actual icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](275, 0, null, null, 4, "div", [
                    ["class", "chk-block-content widget-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](276, 0, null, null, 3, "div", [
                    ["class", "w-100 height-300 chankya-custom-legends"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](277, 0, null, null, 2, "ngx-charts-advanced-pie-chart", [], null, [
                    [null, "select"]
                ], function(l, n, u) {
                    var e = !0;
                    return "select" === n && (e = !1 !== l.component.onSelect(u) && e), e
                }, P.b, P.a)), e["\u0275did"](278, 4898816, null, 1, N.a, [e.ElementRef, e.NgZone, e.ChangeDetectorRef], {
                    results: [0, "results"],
                    scheme: [1, "scheme"],
                    gradient: [2, "gradient"]
                }, {
                    select: "select"
                }), e["\u0275qud"](335544320, 9, {
                    tooltipTemplate: 0
                }), (l()(), e["\u0275eld"](280, 0, null, null, 60, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](281, 0, null, null, 9, "div", [
                    ["class", "col-sm-6 col-md-4 col-lg-2 col-one-half-lg-down mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](282, 0, null, null, 8, "div", [
                    ["class", "bg-primary base-card-border  lazy-up"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](283, 0, null, null, 7, "div", [
                    ["class", "d-flex bg-white justify-content-between p-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](284, 0, null, null, 4, "div", [], null, null, null, null, null)), (l()(), e["\u0275eld"](285, 0, null, null, 1, "h4", [
                    ["class", "fw-normal"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Sales"])), (l()(), e["\u0275eld"](287, 0, null, null, 1, "h2", [
                    ["class", "fw-normal m-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["81%"])), (l()(), e["\u0275eld"](289, 0, null, null, 1, "div", [
                    ["class", "dash-icon"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](290, 0, null, null, 0, "i", [
                    ["class", "icon-wallet icons font-xl"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](291, 0, null, null, 9, "div", [
                    ["class", "col-sm-6 col-md-4 col-lg-2 col-one-half-lg-down mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](292, 0, null, null, 8, "div", [
                    ["class", "bg-success base-card-border  lazy-up"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](293, 0, null, null, 7, "div", [
                    ["class", "d-flex bg-white justify-content-between p-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](294, 0, null, null, 4, "div", [], null, null, null, null, null)), (l()(), e["\u0275eld"](295, 0, null, null, 1, "h4", [
                    ["class", "fw-normal"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Likes"])), (l()(), e["\u0275eld"](297, 0, null, null, 1, "h2", [
                    ["class", "fw-normal m-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["47,513"])), (l()(), e["\u0275eld"](299, 0, null, null, 1, "div", [
                    ["class", "dash-icon"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](300, 0, null, null, 0, "i", [
                    ["class", "icon-like font-xl"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](301, 0, null, null, 9, "div", [
                    ["class", "col-sm-6 col-md-4 col-lg-2 col-one-half-lg-down mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](302, 0, null, null, 8, "div", [
                    ["class", "bg-warning base-card-border  lazy-up"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](303, 0, null, null, 7, "div", [
                    ["class", "d-flex bg-white justify-content-between p-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](304, 0, null, null, 4, "div", [], null, null, null, null, null)), (l()(), e["\u0275eld"](305, 0, null, null, 1, "h4", [
                    ["class", "fw-normal"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Download"])), (l()(), e["\u0275eld"](307, 0, null, null, 1, "h2", [
                    ["class", "fw-normal m-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["1,89,200"])), (l()(), e["\u0275eld"](309, 0, null, null, 1, "div", [
                    ["class", "dash-icon"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](310, 0, null, null, 0, "i", [
                    ["class", "icon-cloud-download icons font-xl"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](311, 0, null, null, 9, "div", [
                    ["class", "col-sm-6 col-md-4 col-lg-2 col-one-half-lg-down mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](312, 0, null, null, 8, "div", [
                    ["class", "bg-green base-card-border  lazy-up"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](313, 0, null, null, 7, "div", [
                    ["class", "d-flex bg-white justify-content-between p-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](314, 0, null, null, 4, "div", [], null, null, null, null, null)), (l()(), e["\u0275eld"](315, 0, null, null, 1, "h4", [
                    ["class", "fw-normal"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Profit"])), (l()(), e["\u0275eld"](317, 0, null, null, 1, "h2", [
                    ["class", "fw-normal m-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["$4575"])), (l()(), e["\u0275eld"](319, 0, null, null, 1, "div", [
                    ["class", "dash-icon"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](320, 0, null, null, 0, "i", [
                    ["class", "icon-graph icons font-xl"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](321, 0, null, null, 9, "div", [
                    ["class", "col-sm-6 col-md-4 col-lg-2 col-one-half-lg-down mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](322, 0, null, null, 8, "div", [
                    ["class", "bg-danger base-card-border  lazy-up"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](323, 0, null, null, 7, "div", [
                    ["class", "d-flex bg-white justify-content-between p-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](324, 0, null, null, 4, "div", [], null, null, null, null, null)), (l()(), e["\u0275eld"](325, 0, null, null, 1, "h4", [
                    ["class", "fw-normal"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Message"])), (l()(), e["\u0275eld"](327, 0, null, null, 1, "h2", [
                    ["class", "fw-normal m-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["81%"])), (l()(), e["\u0275eld"](329, 0, null, null, 1, "div", [
                    ["class", "dash-icon"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](330, 0, null, null, 0, "i", [
                    ["class", "icon-envelope-open icons font-xl"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](331, 0, null, null, 9, "div", [
                    ["class", "col-sm-6 col-md-4 col-lg-2 col-one-half-lg-down mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](332, 0, null, null, 8, "div", [
                    ["class", "bg-yellow base-card-border  lazy-up"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](333, 0, null, null, 7, "div", [
                    ["class", "d-flex bg-white justify-content-between p-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](334, 0, null, null, 4, "div", [], null, null, null, null, null)), (l()(), e["\u0275eld"](335, 0, null, null, 1, "h4", [
                    ["class", "fw-normal"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Member"])), (l()(), e["\u0275eld"](337, 0, null, null, 1, "h2", [
                    ["class", "fw-normal m-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["2,56,784"])), (l()(), e["\u0275eld"](339, 0, null, null, 1, "div", [
                    ["class", "dash-icon"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](340, 0, null, null, 0, "i", [
                    ["class", "icon-people icons font-xl"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](341, 0, null, null, 124, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](342, 0, null, null, 38, "div", [
                    ["class", "col-sm-12 col-md-12 col-lg-4 col-half-lg-down"],
                    ["widget", ""]
                ], null, null, null, null, null)), e["\u0275did"](343, 81920, null, 0, m, [e.ElementRef], null, null), (l()(), e["\u0275eld"](344, 0, null, null, 36, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](345, 0, null, null, 16, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](346, 0, null, null, 15, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](347, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](348, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["To DO List"])), (l()(), e["\u0275eld"](350, 0, null, null, 11, "div", [
                    ["class", "d-inline-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](351, 0, null, null, 10, "div", [
                    ["class", "chk-contextual-link widget-controls"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](352, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "expand"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](353, 0, null, null, 0, "i", [
                    ["class", "icon-plus icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](354, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "collapse"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](355, 0, null, null, 0, "i", [
                    ["class", "icon-minus icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](356, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "close"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](357, 0, null, null, 0, "i", [
                    ["class", "icon-close icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](358, 0, null, null, 1, "a", [
                    ["data-widgster", "fullscreen"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](359, 0, null, null, 0, "i", [
                    ["class", "icon-size-fullscreen icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](360, 0, null, null, 1, "a", [
                    ["data-widgster", "restore"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](361, 0, null, null, 0, "i", [
                    ["class", "icon-size-actual icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](362, 0, null, null, 18, "div", [
                    ["class", "chk-block-content widget-body pt-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](363, 0, null, null, 17, "div", [], null, null, null, null, null)), (l()(), e["\u0275eld"](364, 0, null, null, 11, "div", [
                    ["class", "row pb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](365, 0, null, null, 10, "div", [
                    ["class", "col-sm-12"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](366, 0, null, null, 9, "div", [
                    ["class", "input-group"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](367, 0, null, null, 5, "input", [
                    ["class", "form-control"],
                    ["placeholder", "Add task in list..."],
                    ["type", "text"],
                    ["value", ""]
                ], [
                    [2, "ng-untouched", null],
                    [2, "ng-touched", null],
                    [2, "ng-pristine", null],
                    [2, "ng-dirty", null],
                    [2, "ng-valid", null],
                    [2, "ng-invalid", null],
                    [2, "ng-pending", null]
                ], [
                    [null, "keyup"],
                    [null, "ngModelChange"],
                    [null, "input"],
                    [null, "blur"],
                    [null, "compositionstart"],
                    [null, "compositionend"]
                ], function(l, n, u) {
                    var s = !0,
                        d = l.component;
                    return "input" === n && (s = !1 !== e["\u0275nov"](l, 368)._handleInput(u.target.value) && s), "blur" === n && (s = !1 !== e["\u0275nov"](l, 368).onTouched() && s), "compositionstart" === n && (s = !1 !== e["\u0275nov"](l, 368)._compositionStart() && s), "compositionend" === n && (s = !1 !== e["\u0275nov"](l, 368)._compositionEnd(u.target.value) && s), "keyup" === n && (s = !1 !== d.addToDoItem(u) && s), "ngModelChange" === n && (s = !1 !== (d.newTodoText = u) && s), s
                }, null, null)), e["\u0275did"](368, 16384, null, 0, i.DefaultValueAccessor, [e.Renderer2, e.ElementRef, [2, i.COMPOSITION_BUFFER_MODE]], null, null), e["\u0275prd"](1024, null, i.NG_VALUE_ACCESSOR, function(l) {
                    return [l]
                }, [i.DefaultValueAccessor]), e["\u0275did"](370, 671744, null, 0, i.NgModel, [
                    [8, null],
                    [8, null],
                    [8, null],
                    [6, i.NG_VALUE_ACCESSOR]
                ], {
                    model: [0, "model"]
                }, {
                    update: "ngModelChange"
                }), e["\u0275prd"](2048, null, i.NgControl, null, [i.NgModel]), e["\u0275did"](372, 16384, null, 0, i.NgControlStatus, [
                    [4, i.NgControl]
                ], null, null), (l()(), e["\u0275eld"](373, 0, null, null, 2, "div", [
                    ["class", "input-group-btn"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](374, 0, null, null, 1, "button", [
                    ["class", "btn btn-primary"],
                    ["type", "button"]
                ], null, [
                    [null, "click"]
                ], function(l, n, u) {
                    var e = !0;
                    return "click" === n && (e = !1 !== l.component.addToDoItem(u) && e), e
                }, null, null)), (l()(), e["\u0275ted"](-1, null, [" Add "])), (l()(), e["\u0275eld"](376, 0, null, null, 4, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](377, 0, null, null, 3, "div", [
                    ["class", "col-sm-12"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](378, 0, null, null, 2, "ul", [
                    ["class", "to-do-list-wrap to-do-list-wrap list-unstyled"],
                    ["perfect-scrollbar", ""]
                ], null, null, null, null, null)), (l()(), e["\u0275and"](16777216, null, null, 1, null, _)), e["\u0275did"](380, 802816, null, 0, a.NgForOf, [e.ViewContainerRef, e.TemplateRef, e.IterableDiffers], {
                    ngForOf: [0, "ngForOf"]
                }, null), (l()(), e["\u0275eld"](381, 0, null, null, 60, "div", [
                    ["class", "col-sm-12 col-md-12 col-lg-4 col-half-lg-down"],
                    ["widget", ""]
                ], null, null, null, null, null)), e["\u0275did"](382, 81920, null, 0, m, [e.ElementRef], null, null), (l()(), e["\u0275eld"](383, 0, null, null, 58, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](384, 0, null, null, 16, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](385, 0, null, null, 15, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](386, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](387, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Visitor Stats"])), (l()(), e["\u0275eld"](389, 0, null, null, 11, "div", [
                    ["class", "d-inline-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](390, 0, null, null, 10, "div", [
                    ["class", "chk-contextual-link widget-controls"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](391, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "expand"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](392, 0, null, null, 0, "i", [
                    ["class", "icon-plus icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](393, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "collapse"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](394, 0, null, null, 0, "i", [
                    ["class", "icon-minus icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](395, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "close"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](396, 0, null, null, 0, "i", [
                    ["class", "icon-close icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](397, 0, null, null, 1, "a", [
                    ["data-widgster", "fullscreen"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](398, 0, null, null, 0, "i", [
                    ["class", "icon-size-fullscreen icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](399, 0, null, null, 1, "a", [
                    ["data-widgster", "restore"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](400, 0, null, null, 0, "i", [
                    ["class", "icon-size-actual icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](401, 0, null, null, 40, "div", [
                    ["class", "chk-block-content mb-2 widget-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](402, 0, null, null, 9, "div", [
                    ["class", "visitor-stat-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](403, 0, null, null, 8, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](404, 0, null, null, 4, "div", [
                    ["class", "align-self-center d-flex"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](405, 0, null, null, 1, "span", [
                    ["class", "text-primary font-3x align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](406, 0, null, null, 0, "i", [
                    ["class", "icon-docs icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](407, 0, null, null, 1, "p", [
                    ["class", "font-lg mb-0 pr-2 pl-4 align-self-center d-none-sm"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Page Views"])), (l()(), e["\u0275eld"](409, 0, null, null, 2, "div", [
                    ["class", "align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](410, 0, null, null, 1, "span", [
                    ["class", "count-item font-2x"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["230,609"])), (l()(), e["\u0275eld"](412, 0, null, null, 9, "div", [
                    ["class", "visitor-stat-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](413, 0, null, null, 8, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](414, 0, null, null, 4, "div", [
                    ["class", "align-self-center d-flex"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](415, 0, null, null, 1, "span", [
                    ["class", "text-success font-3x align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](416, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "icon-globe-alt icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](417, 0, null, null, 1, "p", [
                    ["class", "font-lg mb-0 align-self-center pr-2 pl-4 d-none-sm"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Site Visitors"])), (l()(), e["\u0275eld"](419, 0, null, null, 2, "div", [
                    ["class", "align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](420, 0, null, null, 1, "span", [
                    ["class", "count-item font-2x"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["210,405"])), (l()(), e["\u0275eld"](422, 0, null, null, 9, "div", [
                    ["class", "visitor-stat-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](423, 0, null, null, 8, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](424, 0, null, null, 4, "div", [
                    ["class", "align-self-center d-flex"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](425, 0, null, null, 1, "span", [
                    ["class", "text-danger font-3x align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](426, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "icon-cursor icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](427, 0, null, null, 1, "p", [
                    ["class", "font-lg mb-0 align-self-center pr-2 pl-4 d-none-sm"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Total Clicks"])), (l()(), e["\u0275eld"](429, 0, null, null, 2, "div", [
                    ["class", "align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](430, 0, null, null, 1, "span", [
                    ["class", "count-item font-2x"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["420,540"])), (l()(), e["\u0275eld"](432, 0, null, null, 9, "div", [
                    ["class", "visitor-stat-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](433, 0, null, null, 8, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](434, 0, null, null, 4, "div", [
                    ["class", "align-self-center d-flex"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](435, 0, null, null, 1, "span", [
                    ["class", "text-green font-3x align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](436, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "icon-cloud-upload icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](437, 0, null, null, 1, "p", [
                    ["class", "font-lg mb-0 align-self-center pr-2 pl-4 d-none-sm"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Total Downloads"])), (l()(), e["\u0275eld"](439, 0, null, null, 2, "div", [
                    ["class", "align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](440, 0, null, null, 1, "span", [
                    ["class", "count-item font-2x"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["4,576"])), (l()(), e["\u0275eld"](442, 0, null, null, 23, "div", [
                    ["class", "col-sm-12 col-md-12 col-lg-4 col-full-lg-down"],
                    ["widget", ""]
                ], null, null, null, null, null)), e["\u0275did"](443, 81920, null, 0, m, [e.ElementRef], null, null), (l()(), e["\u0275eld"](444, 0, null, null, 21, "div", [
                    ["class", "chk-block"],
                    ["ng-reflect-class-base", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](445, 0, null, null, 16, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](446, 0, null, null, 15, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](447, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](448, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Registred User"])), (l()(), e["\u0275eld"](450, 0, null, null, 11, "div", [
                    ["class", "d-inline-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](451, 0, null, null, 10, "div", [
                    ["class", "chk-contextual-link widget-controls"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](452, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "expand"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](453, 0, null, null, 0, "i", [
                    ["class", "icon-plus icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](454, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "collapse"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](455, 0, null, null, 0, "i", [
                    ["class", "icon-minus icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](456, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "close"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](457, 0, null, null, 0, "i", [
                    ["class", "icon-close icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](458, 0, null, null, 1, "a", [
                    ["data-widgster", "fullscreen"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](459, 0, null, null, 0, "i", [
                    ["class", "icon-size-fullscreen icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](460, 0, null, null, 1, "a", [
                    ["data-widgster", "restore"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](461, 0, null, null, 0, "i", [
                    ["class", "icon-size-actual icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](462, 0, null, null, 3, "div", [
                    ["class", "chk-block-content pb-0 widget-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](463, 0, null, null, 2, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275and"](16777216, null, null, 1, null, q)), e["\u0275did"](465, 802816, null, 0, a.NgForOf, [e.ViewContainerRef, e.TemplateRef, e.IterableDiffers], {
                    ngForOf: [0, "ngForOf"]
                }, null), (l()(), e["\u0275eld"](466, 0, null, null, 227, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](467, 0, null, null, 99, "div", [
                    ["class", "col-sm-12 col-md-12 col-lg-4 col-half-lg-down"],
                    ["widget", ""]
                ], null, null, null, null, null)), e["\u0275did"](468, 81920, null, 0, m, [e.ElementRef], null, null), (l()(), e["\u0275eld"](469, 0, null, null, 97, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](470, 0, null, null, 16, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](471, 0, null, null, 15, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](472, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](473, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Download Data"])), (l()(), e["\u0275eld"](475, 0, null, null, 11, "div", [
                    ["class", "d-inline-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](476, 0, null, null, 10, "div", [
                    ["class", "chk-contextual-link widget-controls"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](477, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "expand"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](478, 0, null, null, 0, "i", [
                    ["class", "icon-plus icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](479, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "collapse"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](480, 0, null, null, 0, "i", [
                    ["class", "icon-minus icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](481, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "close"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](482, 0, null, null, 0, "i", [
                    ["class", "icon-close icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](483, 0, null, null, 1, "a", [
                    ["data-widgster", "fullscreen"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](484, 0, null, null, 0, "i", [
                    ["class", "icon-size-fullscreen icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](485, 0, null, null, 1, "a", [
                    ["data-widgster", "restore"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](486, 0, null, null, 0, "i", [
                    ["class", "icon-size-actual icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](487, 0, null, null, 79, "div", [
                    ["class", "chk-block-content widget-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](488, 0, null, null, 75, "div", [
                    ["class", "reports mb-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](489, 0, null, null, 0, "hr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](490, 0, null, null, 13, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](491, 0, null, null, 9, "div", [
                    ["class", ""]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](492, 0, null, null, 8, "div", [
                    ["class", "d-flex"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](493, 0, null, null, 2, "div", [
                    ["class", "text-primary align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](494, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275eld"](495, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-file-word-o fa-2x"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](496, 0, null, null, 4, "div", [
                    ["class", "pl-3 pr-3 align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](497, 0, null, null, 1, "p", [
                    ["class", "mb-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Visitors"])), (l()(), e["\u0275eld"](499, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["10-Jan to 10-Feb"])), (l()(), e["\u0275eld"](501, 0, null, null, 2, "div", [], null, null, null, null, null)), (l()(), e["\u0275eld"](502, 0, null, null, 1, "a", [], null, null, null, null, null)), (l()(), e["\u0275eld"](503, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-download fa-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](504, 0, null, null, 0, "hr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](505, 0, null, null, 13, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](506, 0, null, null, 9, "div", [
                    ["class", ""]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](507, 0, null, null, 8, "div", [
                    ["class", "d-flex"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](508, 0, null, null, 2, "div", [
                    ["class", "text-primary align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](509, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275eld"](510, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-file-word-o fa-2x"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](511, 0, null, null, 4, "div", [
                    ["class", "pl-3 pr-3 align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](512, 0, null, null, 1, "p", [
                    ["class", "mb-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Revenue"])), (l()(), e["\u0275eld"](514, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["10-Jan to 10-Feb"])), (l()(), e["\u0275eld"](516, 0, null, null, 2, "div", [], null, null, null, null, null)), (l()(), e["\u0275eld"](517, 0, null, null, 1, "a", [], null, null, null, null, null)), (l()(), e["\u0275eld"](518, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-download fa-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](519, 0, null, null, 0, "hr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](520, 0, null, null, 13, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](521, 0, null, null, 9, "div", [
                    ["class", ""]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](522, 0, null, null, 8, "div", [
                    ["class", "d-flex"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](523, 0, null, null, 2, "div", [
                    ["class", "text-primary align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](524, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275eld"](525, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-file-powerpoint-o fa-2x"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](526, 0, null, null, 4, "div", [
                    ["class", "pl-3 pr-3 align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](527, 0, null, null, 1, "p", [
                    ["class", "mb-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Stock"])), (l()(), e["\u0275eld"](529, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["10-Jan to 10-Feb"])), (l()(), e["\u0275eld"](531, 0, null, null, 2, "div", [], null, null, null, null, null)), (l()(), e["\u0275eld"](532, 0, null, null, 1, "a", [], null, null, null, null, null)), (l()(), e["\u0275eld"](533, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-download fa-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](534, 0, null, null, 0, "hr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](535, 0, null, null, 13, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](536, 0, null, null, 9, "div", [
                    ["class", ""]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](537, 0, null, null, 8, "div", [
                    ["class", "d-flex"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](538, 0, null, null, 2, "div", [
                    ["class", "text-primary align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](539, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275eld"](540, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-file-pdf-o fa-2x"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](541, 0, null, null, 4, "div", [
                    ["class", "pl-3 pr-3 align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](542, 0, null, null, 1, "p", [
                    ["class", "mb-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Member Detail"])), (l()(), e["\u0275eld"](544, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["10-Jan to 10-Feb"])), (l()(), e["\u0275eld"](546, 0, null, null, 2, "div", [], null, null, null, null, null)), (l()(), e["\u0275eld"](547, 0, null, null, 1, "a", [], null, null, null, null, null)), (l()(), e["\u0275eld"](548, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-download fa-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](549, 0, null, null, 0, "hr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](550, 0, null, null, 13, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](551, 0, null, null, 9, "div", [
                    ["class", ""]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](552, 0, null, null, 8, "div", [
                    ["class", "d-flex"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](553, 0, null, null, 2, "div", [
                    ["class", "text-primary align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](554, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275eld"](555, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-file-pdf-o fa-2x"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](556, 0, null, null, 4, "div", [
                    ["class", "pl-3 pr-3 align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](557, 0, null, null, 1, "p", [
                    ["class", "mb-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Balance Sheet"])), (l()(), e["\u0275eld"](559, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["1-Apr to 31-March"])), (l()(), e["\u0275eld"](561, 0, null, null, 2, "div", [], null, null, null, null, null)), (l()(), e["\u0275eld"](562, 0, null, null, 1, "a", [], null, null, null, null, null)), (l()(), e["\u0275eld"](563, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-download fa-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](564, 0, null, null, 2, "div", [
                    ["class", "text-center text-danger"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](565, 0, null, null, 1, "a", [
                    ["class", ""]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["View All"])), (l()(), e["\u0275eld"](567, 0, null, null, 50, "div", [
                    ["class", "col-sm-12 col-md-12 col-lg-4 col-half-lg-down"],
                    ["widget", ""]
                ], null, null, null, null, null)), e["\u0275did"](568, 81920, null, 0, m, [e.ElementRef], null, null), (l()(), e["\u0275eld"](569, 0, null, null, 48, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](570, 0, null, null, 16, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](571, 0, null, null, 15, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](572, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](573, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Notifications"])), (l()(), e["\u0275eld"](575, 0, null, null, 11, "div", [
                    ["class", "d-inline-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](576, 0, null, null, 10, "div", [
                    ["class", "chk-contextual-link widget-controls"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](577, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "expand"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](578, 0, null, null, 0, "i", [
                    ["class", "icon-plus icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](579, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "collapse"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](580, 0, null, null, 0, "i", [
                    ["class", "icon-minus icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](581, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "close"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](582, 0, null, null, 0, "i", [
                    ["class", "icon-close icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](583, 0, null, null, 1, "a", [
                    ["data-widgster", "fullscreen"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](584, 0, null, null, 0, "i", [
                    ["class", "icon-size-fullscreen icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](585, 0, null, null, 1, "a", [
                    ["data-widgster", "restore"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](586, 0, null, null, 0, "i", [
                    ["class", "icon-size-actual icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](587, 0, null, null, 30, "div", [
                    ["class", "chk-block-content widget-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](588, 0, null, null, 29, "div", [], null, null, null, null, null)), (l()(), e["\u0275eld"](589, 0, null, null, 25, "ul", [
                    ["class", "pl-0 list-style-none mb-3 ripple-list"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](590, 0, null, null, 4, "li", [
                    ["class", "bg-danger pb-3 pt-3 pl-3 pr-3 mb-3 d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](591, 0, null, null, 3, "div", [
                    ["class", "d-flex"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](592, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa-lg icon-space fa fa-exclamation-triangle"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](593, 0, null, null, 1, "div", [
                    ["class", "pl-2 pr-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Site goes is down for 6 hours."])), (l()(), e["\u0275eld"](595, 0, null, null, 4, "li", [
                    ["class", "bg-success pb-3 pt-3 pl-3 pr-3 mb-3 d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](596, 0, null, null, 3, "div", [
                    ["class", "d-flex"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](597, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa-lg icon-space fa fa-check"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](598, 0, null, null, 1, "div", [
                    ["class", "pl-2 pr-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["New users can grab 30% off offer."])), (l()(), e["\u0275eld"](600, 0, null, null, 4, "li", [
                    ["class", "bg-primary pb-3 pt-3 pl-3 pr-3 mb-3 d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](601, 0, null, null, 3, "div", [
                    ["class", "d-flex"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](602, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa-lg icon-space fa fa-smile-o"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](603, 0, null, null, 1, "div", [
                    ["class", "pl-2 pr-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Bug detected from the development team."])), (l()(), e["\u0275eld"](605, 0, null, null, 4, "li", [
                    ["class", "bg-warning pb-3 pt-3 pl-3 pr-3 mb-3 d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](606, 0, null, null, 3, "div", [
                    ["class", "d-flex"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](607, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa-lg icon-space fa fa-exclamation"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](608, 0, null, null, 1, "div", [
                    ["class", "pl-2 pr-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Automatic system will be initialize at 10.00 PM."])), (l()(), e["\u0275eld"](610, 0, null, null, 4, "li", [
                    ["class", "bg-info pb-3 pt-3 pl-3 pr-3 hide-lap d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](611, 0, null, null, 3, "div", [
                    ["class", "d-flex"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](612, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa-lg icon-space fa fa-info"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](613, 0, null, null, 1, "div", [
                    ["class", "pl-2 pr-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Trash box is almost full."])), (l()(), e["\u0275eld"](615, 0, null, null, 2, "div", [
                    ["class", "text-center text-danger"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](616, 0, null, null, 1, "a", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["View All Notfications"])), (l()(), e["\u0275eld"](618, 0, null, null, 75, "div", [
                    ["class", "col-sm-12 col-md-12 col-lg-4 col-full-lg-down"],
                    ["widget", ""]
                ], null, null, null, null, null)), e["\u0275did"](619, 81920, null, 0, m, [e.ElementRef], null, null), (l()(), e["\u0275eld"](620, 0, null, null, 73, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](621, 0, null, null, 16, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](622, 0, null, null, 15, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](623, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](624, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Support"])), (l()(), e["\u0275eld"](626, 0, null, null, 11, "div", [
                    ["class", "d-inline-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](627, 0, null, null, 10, "div", [
                    ["class", "chk-contextual-link widget-controls"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](628, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "expand"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](629, 0, null, null, 0, "i", [
                    ["class", "icon-plus icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](630, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "collapse"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](631, 0, null, null, 0, "i", [
                    ["class", "icon-minus icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](632, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "close"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](633, 0, null, null, 0, "i", [
                    ["class", "icon-close icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](634, 0, null, null, 1, "a", [
                    ["data-widgster", "fullscreen"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](635, 0, null, null, 0, "i", [
                    ["class", "icon-size-fullscreen icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](636, 0, null, null, 1, "a", [
                    ["data-widgster", "restore"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](637, 0, null, null, 0, "i", [
                    ["class", "icon-size-actual icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](638, 0, null, null, 55, "div", [
                    ["class", "chk-block-content mb-3 widget-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](639, 0, null, null, 12, "div", [
                    ["class", "d-flex justify-content-between mb-2 ripple"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](640, 0, null, null, 8, "div", [
                    ["class", "d-flex"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](641, 0, null, null, 1, "div", [
                    ["class", "d-none-sm"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](642, 0, null, null, 0, "img", [
                    ["alt", "user image"],
                    ["class", "img-fluid mb-1 circle"],
                    ["height", "95"],
                    ["src", "assets/img/user-1.jpg"],
                    ["width", "95"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](643, 0, null, null, 5, "div", [
                    ["class", "pr-3 pl-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](644, 0, null, null, 2, "span", [], null, null, null, null, null)), (l()(), e["\u0275eld"](645, 0, null, null, 1, "strong", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Helena Booneopen "])), (l()(), e["\u0275eld"](647, 0, null, null, 1, "p", [
                    ["class", "text-over-p"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Lorem ipsum dolor sit amet, consectetur adipisicing."])), (l()(), e["\u0275eld"](649, 0, null, null, 2, "div", [
                    ["class", "w-60-sm align-self-center text-primary text-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](650, 0, null, null, 0, "i", [
                    ["class", "fa fa-dot-circle-o"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Close "])), (l()(), e["\u0275eld"](652, 0, null, null, 12, "div", [
                    ["class", "d-flex justify-content-between mb-2 ripple"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](653, 0, null, null, 8, "div", [
                    ["class", "d-flex"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](654, 0, null, null, 1, "div", [
                    ["class", "d-none-sm"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](655, 0, null, null, 0, "img", [
                    ["alt", "user image"],
                    ["class", "img-fluid mb-1 circle"],
                    ["height", "95"],
                    ["src", "assets/img/user-5.jpg"],
                    ["width", "95"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](656, 0, null, null, 5, "div", [
                    ["class", "pr-3 pl-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](657, 0, null, null, 2, "span", [], null, null, null, null, null)), (l()(), e["\u0275eld"](658, 0, null, null, 1, "strong", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Helena Booneopen "])), (l()(), e["\u0275eld"](660, 0, null, null, 1, "p", [
                    ["class", "text-over-p"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Lorem ipsum dolor sit amet, consectetur adipisicing."])), (l()(), e["\u0275eld"](662, 0, null, null, 2, "div", [
                    ["class", "w-60-sm align-self-center text-danger text-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](663, 0, null, null, 0, "i", [
                    ["class", "fa fa-dot-circle-o"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Open "])), (l()(), e["\u0275eld"](665, 0, null, null, 12, "div", [
                    ["class", "d-flex justify-content-between mb-2 ripple"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](666, 0, null, null, 8, "div", [
                    ["class", "d-flex"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](667, 0, null, null, 1, "div", [
                    ["class", "d-none-sm"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](668, 0, null, null, 0, "img", [
                    ["alt", "user image"],
                    ["class", "img-fluid mb-1 circle"],
                    ["height", "95"],
                    ["src", "assets/img/user-6.jpg"],
                    ["width", "95"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](669, 0, null, null, 5, "div", [
                    ["class", "pr-3 pl-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](670, 0, null, null, 2, "span", [], null, null, null, null, null)), (l()(), e["\u0275eld"](671, 0, null, null, 1, "strong", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Helena Booneopen "])), (l()(), e["\u0275eld"](673, 0, null, null, 1, "p", [
                    ["class", "text-over-p"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Lorem ipsum dolor sit amet, consectetur adipisicing."])), (l()(), e["\u0275eld"](675, 0, null, null, 2, "div", [
                    ["class", "w-60-sm align-self-center text-warning text-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](676, 0, null, null, 0, "i", [
                    ["class", "fa fa-dot-circle-o"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Pending "])), (l()(), e["\u0275eld"](678, 0, null, null, 12, "div", [
                    ["class", "d-flex justify-content-between mb-2 ripple"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](679, 0, null, null, 8, "div", [
                    ["class", "d-flex"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](680, 0, null, null, 1, "div", [
                    ["class", "d-none-sm"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](681, 0, null, null, 0, "img", [
                    ["alt", "user image"],
                    ["class", "img-fluid mb-1 circle"],
                    ["height", "95"],
                    ["src", "assets/img/user-7.jpg"],
                    ["width", "95"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](682, 0, null, null, 5, "div", [
                    ["class", "pr-3 pl-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](683, 0, null, null, 2, "span", [], null, null, null, null, null)), (l()(), e["\u0275eld"](684, 0, null, null, 1, "strong", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Helena Booneopen "])), (l()(), e["\u0275eld"](686, 0, null, null, 1, "p", [
                    ["class", "text-over-p"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Lorem ipsum dolor sit amet, consectetur adipisicing."])), (l()(), e["\u0275eld"](688, 0, null, null, 2, "div", [
                    ["class", "w-60-sm align-self-center text-primary text-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](689, 0, null, null, 0, "i", [
                    ["class", "fa fa-dot-circle-o"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Close "])), (l()(), e["\u0275eld"](691, 0, null, null, 2, "div", [
                    ["class", "text-center text-danger"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](692, 0, null, null, 1, "a", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["View All"])), (l()(), e["\u0275eld"](694, 0, null, null, 120, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](695, 0, null, null, 119, "div", [
                    ["class", "col-sm-12 col-md-12 col-lg-12"],
                    ["widget", ""]
                ], null, null, null, null, null)), e["\u0275did"](696, 81920, null, 0, m, [e.ElementRef], null, null), (l()(), e["\u0275eld"](697, 0, null, null, 117, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](698, 0, null, null, 16, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](699, 0, null, null, 15, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](700, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](701, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Download Data"])), (l()(), e["\u0275eld"](703, 0, null, null, 11, "div", [
                    ["class", "d-inline-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](704, 0, null, null, 10, "div", [
                    ["class", "chk-contextual-link widget-controls"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](705, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "expand"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](706, 0, null, null, 0, "i", [
                    ["class", "icon-plus icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](707, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "collapse"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](708, 0, null, null, 0, "i", [
                    ["class", "icon-minus icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](709, 0, null, null, 1, "a", [
                    ["class", "transition"],
                    ["data-widgster", "close"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](710, 0, null, null, 0, "i", [
                    ["class", "icon-close icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](711, 0, null, null, 1, "a", [
                    ["data-widgster", "fullscreen"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](712, 0, null, null, 0, "i", [
                    ["class", "icon-size-fullscreen icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](713, 0, null, null, 1, "a", [
                    ["data-widgster", "restore"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](714, 0, null, null, 0, "i", [
                    ["class", "icon-size-actual icons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](715, 0, null, null, 99, "div", [
                    ["class", "chk-block-content widget-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](716, 0, null, null, 98, "div", [
                    ["class", "table-responsive"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](717, 0, null, null, 97, "table", [
                    ["class", "table table-middle table-hover fw-light th-fw-light th-pad-all-sm td-pad-all-sm"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](718, 0, null, null, 11, "thead", [], null, null, null, null, null)), (l()(), e["\u0275eld"](719, 0, null, null, 10, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](720, 0, null, null, 1, "th", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["#"])), (l()(), e["\u0275eld"](722, 0, null, null, 1, "th", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Verification"])), (l()(), e["\u0275eld"](724, 0, null, null, 1, "th", [
                    ["class", "text-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Username"])), (l()(), e["\u0275eld"](726, 0, null, null, 1, "th", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["E-mail"])), (l()(), e["\u0275eld"](728, 0, null, null, 1, "th", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Mobile"])), (l()(), e["\u0275eld"](730, 0, null, null, 84, "tbody", [], null, null, null, null, null)), (l()(), e["\u0275eld"](731, 0, null, null, 11, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](732, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["1"])), (l()(), e["\u0275eld"](734, 0, null, null, 1, "td", [
                    ["class", "text-primary"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Charles A. Martin"])), (l()(), e["\u0275eld"](736, 0, null, null, 2, "td", [
                    ["class", "text-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](737, 0, null, null, 1, "span", [
                    ["class", "small bg-success p-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Paid"])), (l()(), e["\u0275eld"](739, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["example@example.com"])), (l()(), e["\u0275eld"](741, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["+1 (795) 784 8989"])), (l()(), e["\u0275eld"](743, 0, null, null, 11, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](744, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["2"])), (l()(), e["\u0275eld"](746, 0, null, null, 1, "td", [
                    ["class", "text-primary"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Julie Morgan"])), (l()(), e["\u0275eld"](748, 0, null, null, 2, "td", [
                    ["class", "text-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](749, 0, null, null, 1, "span", [
                    ["class", "small bg-danger p-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Cancel"])), (l()(), e["\u0275eld"](751, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["example@example.com"])), (l()(), e["\u0275eld"](753, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["+1 (397) 781 2371"])), (l()(), e["\u0275eld"](755, 0, null, null, 11, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](756, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["3"])), (l()(), e["\u0275eld"](758, 0, null, null, 1, "td", [
                    ["class", "text-primary"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Shawn Peterson"])), (l()(), e["\u0275eld"](760, 0, null, null, 2, "td", [
                    ["class", "text-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](761, 0, null, null, 1, "span", [
                    ["class", "small bg-warning p-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Pending"])), (l()(), e["\u0275eld"](763, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["example@example.com"])), (l()(), e["\u0275eld"](765, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["+1 (896) 785 4596"])), (l()(), e["\u0275eld"](767, 0, null, null, 11, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](768, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["4"])), (l()(), e["\u0275eld"](770, 0, null, null, 1, "td", [
                    ["class", "text-primary"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dennis Freeman"])), (l()(), e["\u0275eld"](772, 0, null, null, 2, "td", [
                    ["class", "text-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](773, 0, null, null, 1, "span", [
                    ["class", "small bg-danger p-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Cancel"])), (l()(), e["\u0275eld"](775, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["example@example.com"])), (l()(), e["\u0275eld"](777, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["+1 (473) 396 7238"])), (l()(), e["\u0275eld"](779, 0, null, null, 11, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](780, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["5"])), (l()(), e["\u0275eld"](782, 0, null, null, 1, "td", [
                    ["class", "text-primary"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Ernest Scott"])), (l()(), e["\u0275eld"](784, 0, null, null, 2, "td", [
                    ["class", "text-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](785, 0, null, null, 1, "span", [
                    ["class", "small bg-danger p-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Error"])), (l()(), e["\u0275eld"](787, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["example@example.com"])), (l()(), e["\u0275eld"](789, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["+1 (285) 457 7458"])), (l()(), e["\u0275eld"](791, 0, null, null, 11, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](792, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["6"])), (l()(), e["\u0275eld"](794, 0, null, null, 1, "td", [
                    ["class", "text-primary"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Betty Warren"])), (l()(), e["\u0275eld"](796, 0, null, null, 2, "td", [
                    ["class", "text-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](797, 0, null, null, 1, "span", [
                    ["class", "small bg-success p-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Paid"])), (l()(), e["\u0275eld"](799, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["example@example.com"])), (l()(), e["\u0275eld"](801, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["+1 (633) 256 9683"])), (l()(), e["\u0275eld"](803, 0, null, null, 11, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](804, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["7"])), (l()(), e["\u0275eld"](806, 0, null, null, 1, "td", [
                    ["class", "text-primary"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Lisa W. Edwards"])), (l()(), e["\u0275eld"](808, 0, null, null, 2, "td", [
                    ["class", "text-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](809, 0, null, null, 1, "span", [
                    ["class", "small bg-danger p-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Error"])), (l()(), e["\u0275eld"](811, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["example@example.com"])), (l()(), e["\u0275eld"](813, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["+1 (739) 875 1256"]))], function(l, n) {
                    var u = n.component;
                    l(n, 143, 0, u.products, u.barColorScheme), l(n, 170, 0, u.orders, u.colorScheme, u.autoScale), l(n, 198, 0, u.refunds, u.barColorScheme2), l(n, 225, 0, u.customers, u.colorScheme, u.autoScale), l(n, 230, 0), l(n, 252, 1, [u.cost, u.colorScheme2, u.showLegend, u.showXAxis, u.showYAxis, u.autoScale, u.showXAxisLabel, u.showYAxisLabel, u.xAxisLabel, u.yAxisLabel, u.gradient, u.tooltipDisabled]), l(n, 256, 0), l(n, 278, 0, u.pie, u.colorScheme2, u.gradient), l(n, 343, 0), l(n, 370, 0, u.newTodoText), l(n, 380, 0, u.getNotDeleted()), l(n, 382, 0), l(n, 443, 0), l(n, 465, 0, u.users), l(n, 468, 0), l(n, 568, 0), l(n, 619, 0), l(n, 696, 0)
                }, function(l, n) {
                    l(n, 367, 0, e["\u0275nov"](n, 372).ngClassUntouched, e["\u0275nov"](n, 372).ngClassTouched, e["\u0275nov"](n, 372).ngClassPristine, e["\u0275nov"](n, 372).ngClassDirty, e["\u0275nov"](n, 372).ngClassValid, e["\u0275nov"](n, 372).ngClassInvalid, e["\u0275nov"](n, 372).ngClassPending)
                })
            }
            var U = e["\u0275ccf"]("ms-dashboard1", O, function(l) {
                    return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 1, "ms-dashboard1", [], [
                        [40, "@fadeInAnimation", 0]
                    ], null, null, V, I)), e["\u0275did"](1, 245760, null, 0, O, [w.a], null, null)], function(l, n) {
                        l(n, 1, 0)
                    }, function(l, n) {
                        l(n, 0, 0, !0)
                    })
                }, {}, {}, []),
                W = u("Se1k"),
                B = u("k/Rj"),
                G = u("/qvy"),
                X = u("b3E/"),
                Y = u("w6+6"),
                H = u("IZET"),
                Z = u("1jDe"),
                J = u("T8sE"),
                Q = u("skic"),
                K = u("KeWI"),
                ll = u("UsZU"),
                nl = u("50k4"),
                ul = u("o56U"),
                el = u("U3vz"),
                sl = u("r6ye"),
                dl = u("KktT"),
                tl = u("eby4"),
                al = function() {},
                il = u("ZYCi");
            u.d(n, "DashboardModuleNgFactory", function() {
                return cl
            });
            var cl = e["\u0275cmf"](s, [], function(l) {
                return e["\u0275mod"]([e["\u0275mpd"](512, e.ComponentFactoryResolver, e["\u0275CodegenComponentFactoryResolver"], [
                    [8, [d.a, t.a, z, U]],
                    [3, e.ComponentFactoryResolver], e.NgModuleRef
                ]), e["\u0275mpd"](4608, a.NgLocalization, a.NgLocaleLocalization, [e.LOCALE_ID, [2, a["\u0275angular_packages_common_common_a"]]]), e["\u0275mpd"](4608, i["\u0275angular_packages_forms_forms_i"], i["\u0275angular_packages_forms_forms_i"], []), e["\u0275mpd"](4608, W.a, W.a, [e.ApplicationRef, e.ComponentFactoryResolver, e.Injector]), e["\u0275mpd"](4608, B.a, B.a, [W.a]), e["\u0275mpd"](4608, a.LocationStrategy, a.PathLocationStrategy, [a.PlatformLocation, [2, a.APP_BASE_HREF]]), e["\u0275mpd"](4608, a.Location, a.Location, [a.LocationStrategy]), e["\u0275mpd"](1073742336, a.CommonModule, a.CommonModule, []), e["\u0275mpd"](1073742336, i["\u0275angular_packages_forms_forms_bb"], i["\u0275angular_packages_forms_forms_bb"], []), e["\u0275mpd"](1073742336, i.FormsModule, i.FormsModule, []), e["\u0275mpd"](1073742336, G.a, G.a, []), e["\u0275mpd"](1073742336, X.a, X.a, []), e["\u0275mpd"](1073742336, Y.a, Y.a, []), e["\u0275mpd"](1073742336, H.a, H.a, []), e["\u0275mpd"](1073742336, Z.a, Z.a, []), e["\u0275mpd"](1073742336, J.a, J.a, []), e["\u0275mpd"](1073742336, Q.a, Q.a, []), e["\u0275mpd"](1073742336, K.a, K.a, []), e["\u0275mpd"](1073742336, ll.a, ll.a, []), e["\u0275mpd"](1073742336, nl.a, nl.a, []), e["\u0275mpd"](1073742336, ul.a, ul.a, []), e["\u0275mpd"](1073742336, el.a, el.a, []), e["\u0275mpd"](1073742336, sl.a, sl.a, []), e["\u0275mpd"](1073742336, dl.a, dl.a, []), e["\u0275mpd"](1073742336, tl.a, tl.a, []), e["\u0275mpd"](1073742336, al, al, []), e["\u0275mpd"](1073742336, il.p, il.p, [
                    [2, il.v],
                    [2, il.m]
                ]), e["\u0275mpd"](1073742336, s, s, []), e["\u0275mpd"](1024, il.k, function() {
                    return [
                        [{
                            path: "",
                            redirectTo: "dashboard-v1",
                            pathMatch: "full"
                        }, {
                            path: "",
                            children: [{
                                path: "dashboard-v1",
                                component: R
                            }, {
                                path: "dashboard-v2",
                                component: O
                            }]
                        }]
                    ]
                }, [])])
            })
        }
    }
]);