(window.webpackJsonp = window.webpackJsonp || []).push([
    [5], {
        "14xD": function(l, n, e) {
            "use strict";
            e.d(n, "a", function() {
                return k
            }), e.d(n, "b", function() {
                return A
            });
            var t = e("8ubM"),
                i = e("CcnG"),
                a = e("AHdH"),
                o = e("Ywhj"),
                u = e("R+s0"),
                c = e("k79+"),
                r = e("Xy94"),
                s = e("MP4t"),
                d = e("ek82"),
                g = e("t6FG"),
                f = e("Mkm6"),
                p = e("H8yg"),
                m = e("Ip0R"),
                v = e("QoYF"),
                h = e("U3KO"),
                x = e("Vug8"),
                b = e("k/Rj"),
                y = e("Se1k"),
                w = e("nJx2"),
                k = (e("ikwa"), i["\u0275crt"]({
                    encapsulation: 2,
                    styles: [t.a],
                    data: {}
                }));

            function T(l) {
                return i["\u0275vid"](0, [(l()(), i["\u0275eld"](0, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-x-axis", ""]
                ], null, [
                    [null, "dimensionsChanged"]
                ], function(l, n, e) {
                    var t = !0;
                    return "dimensionsChanged" === n && (t = !1 !== l.component.updateXAxisHeight(e) && t), t
                }, a.b, a.a)), i["\u0275did"](1, 573440, null, 0, o.a, [], {
                    xScale: [0, "xScale"],
                    dims: [1, "dims"],
                    tickFormatting: [2, "tickFormatting"],
                    showGridLines: [3, "showGridLines"],
                    showLabel: [4, "showLabel"],
                    labelText: [5, "labelText"],
                    ticks: [6, "ticks"]
                }, {
                    dimensionsChanged: "dimensionsChanged"
                })], function(l, n) {
                    var e = n.component;
                    l(n, 1, 0, e.xScale, e.dims, e.xAxisTickFormatting, e.showGridLines, e.showXAxisLabel, e.xAxisLabel, e.xAxisTicks)
                }, null)
            }

            function R(l) {
                return i["\u0275vid"](0, [(l()(), i["\u0275eld"](0, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-y-axis", ""]
                ], null, [
                    [null, "dimensionsChanged"]
                ], function(l, n, e) {
                    var t = !0;
                    return "dimensionsChanged" === n && (t = !1 !== l.component.updateYAxisWidth(e) && t), t
                }, u.b, u.a)), i["\u0275did"](1, 573440, null, 0, c.a, [], {
                    yScale: [0, "yScale"],
                    dims: [1, "dims"],
                    tickFormatting: [2, "tickFormatting"],
                    ticks: [3, "ticks"],
                    showGridLines: [4, "showGridLines"],
                    showLabel: [5, "showLabel"],
                    labelText: [6, "labelText"]
                }, {
                    dimensionsChanged: "dimensionsChanged"
                })], function(l, n) {
                    var e = n.component;
                    l(n, 1, 0, e.yScale, e.dims, e.yAxisTickFormatting, e.yAxisTicks, e.showGridLines, e.showYAxisLabel, e.yAxisLabel)
                }, null)
            }

            function C(l) {
                return i["\u0275vid"](0, [(l()(), i["\u0275eld"](0, 0, null, null, 2, ":svg:g", [], null, null, null, null, null)), (l()(), i["\u0275eld"](1, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-area-series", ""]
                ], null, null, null, r.b, r.a)), i["\u0275did"](2, 573440, null, 0, s.a, [], {
                    data: [0, "data"],
                    xScale: [1, "xScale"],
                    yScale: [2, "yScale"],
                    baseValue: [3, "baseValue"],
                    colors: [4, "colors"],
                    scaleType: [5, "scaleType"],
                    gradient: [6, "gradient"],
                    curve: [7, "curve"],
                    activeEntries: [8, "activeEntries"],
                    animations: [9, "animations"]
                }, null)], function(l, n) {
                    var e = n.component;
                    l(n, 2, 0, n.context.$implicit, e.xScale, e.yScale, e.baseValue, e.colors, e.scaleType, e.gradient, e.curve, e.activeEntries, e.animations)
                }, null)
            }

            function L(l) {
                return i["\u0275vid"](0, [(l()(), i["\u0275eld"](0, 0, null, null, 2, ":svg:g", [], null, null, null, null, null)), (l()(), i["\u0275eld"](1, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-circle-series", ""]
                ], null, [
                    [null, "select"],
                    [null, "activate"],
                    [null, "deactivate"]
                ], function(l, n, e) {
                    var t = !0,
                        i = l.component;
                    return "select" === n && (t = !1 !== i.onClick(e, l.context.$implicit) && t), "activate" === n && (t = !1 !== i.onActivate(e) && t), "deactivate" === n && (t = !1 !== i.onDeactivate(e) && t), t
                }, d.b, d.a)), i["\u0275did"](2, 638976, null, 0, g.a, [], {
                    data: [0, "data"],
                    xScale: [1, "xScale"],
                    yScale: [2, "yScale"],
                    colors: [3, "colors"],
                    scaleType: [4, "scaleType"],
                    visibleValue: [5, "visibleValue"],
                    activeEntries: [6, "activeEntries"],
                    tooltipDisabled: [7, "tooltipDisabled"],
                    tooltipTemplate: [8, "tooltipTemplate"]
                }, {
                    select: "select",
                    activate: "activate",
                    deactivate: "deactivate"
                })], function(l, n) {
                    var e = n.component;
                    l(n, 2, 0, n.context.$implicit, e.xScale, e.yScale, e.colors, e.scaleType, e.hoveredVertical, e.activeEntries, e.tooltipDisabled, e.tooltipTemplate)
                }, null)
            }

            function I(l) {
                return i["\u0275vid"](0, [(l()(), i["\u0275eld"](0, 0, null, null, 4, ":svg:g", [], null, [
                    [null, "mouseleave"]
                ], function(l, n, e) {
                    var t = !0;
                    return "mouseleave" === n && (t = !1 !== l.component.hideCircles() && t), t
                }, null, null)), (l()(), i["\u0275eld"](1, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-tooltip-area", ""]
                ], null, [
                    [null, "hover"]
                ], function(l, n, e) {
                    var t = !0;
                    return "hover" === n && (t = !1 !== l.component.updateHoveredVertical(e) && t), t
                }, f.b, f.a)), i["\u0275did"](2, 49152, null, 0, p.a, [i.Renderer], {
                    dims: [0, "dims"],
                    xSet: [1, "xSet"],
                    xScale: [2, "xScale"],
                    yScale: [3, "yScale"],
                    results: [4, "results"],
                    colors: [5, "colors"],
                    tooltipDisabled: [6, "tooltipDisabled"],
                    tooltipTemplate: [7, "tooltipTemplate"]
                }, {
                    hover: "hover"
                }), (l()(), i["\u0275and"](16777216, null, null, 1, null, L)), i["\u0275did"](4, 802816, null, 0, m.NgForOf, [i.ViewContainerRef, i.TemplateRef, i.IterableDiffers], {
                    ngForOf: [0, "ngForOf"]
                }, null)], function(l, n) {
                    var e = n.component;
                    l(n, 2, 0, e.dims, e.xSet, e.xScale, e.yScale, e.results, e.colors, e.tooltipDisabled, e.seriesTooltipTemplate), l(n, 4, 0, e.results)
                }, null)
            }

            function F(l) {
                return i["\u0275vid"](0, [(l()(), i["\u0275eld"](0, 0, null, null, 2, ":svg:g", [], null, null, null, null, null)), (l()(), i["\u0275eld"](1, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-area-series", ""]
                ], null, null, null, r.b, r.a)), i["\u0275did"](2, 573440, null, 0, s.a, [], {
                    data: [0, "data"],
                    xScale: [1, "xScale"],
                    yScale: [2, "yScale"],
                    baseValue: [3, "baseValue"],
                    colors: [4, "colors"],
                    scaleType: [5, "scaleType"],
                    gradient: [6, "gradient"],
                    curve: [7, "curve"],
                    animations: [8, "animations"]
                }, null)], function(l, n) {
                    var e = n.component;
                    l(n, 2, 0, n.context.$implicit, e.timelineXScale, e.timelineYScale, e.baseValue, e.colors, e.scaleType, e.gradient, e.curve, e.animations)
                }, null)
            }

            function S(l) {
                return i["\u0275vid"](0, [(l()(), i["\u0275eld"](0, 0, null, null, 4, ":svg:g", [
                    ["ngx-charts-timeline", ""]
                ], [
                    [1, "transform", 0]
                ], [
                    [null, "onDomainChange"]
                ], function(l, n, e) {
                    var t = !0;
                    return "onDomainChange" === n && (t = !1 !== l.component.updateDomain(e) && t), t
                }, v.b, v.a)), i["\u0275did"](1, 573440, null, 0, h.a, [i.ElementRef, i.ChangeDetectorRef], {
                    view: [0, "view"],
                    results: [1, "results"],
                    scheme: [2, "scheme"],
                    customColors: [3, "customColors"],
                    legend: [4, "legend"],
                    scaleType: [5, "scaleType"],
                    height: [6, "height"]
                }, {
                    onDomainChange: "onDomainChange"
                }), i["\u0275pad"](2, 2), (l()(), i["\u0275and"](16777216, null, 0, 1, null, F)), i["\u0275did"](4, 802816, null, 0, m.NgForOf, [i.ViewContainerRef, i.TemplateRef, i.IterableDiffers], {
                    ngForOf: [0, "ngForOf"],
                    ngForTrackBy: [1, "ngForTrackBy"]
                }, null)], function(l, n) {
                    var e = n.component;
                    l(n, 1, 0, l(n, 2, 0, e.timelineWidth, e.height), e.results, e.scheme, e.customColors, e.legend, e.scaleType, e.timelineHeight), l(n, 4, 0, e.results, e.trackBy)
                }, function(l, n) {
                    l(n, 0, 0, n.component.timelineTransform)
                })
            }

            function A(l) {
                return i["\u0275vid"](2, [(l()(), i["\u0275eld"](0, 16777216, null, null, 18, "ngx-charts-chart", [], null, [
                    [null, "legendLabelClick"],
                    [null, "legendLabelActivate"],
                    [null, "legendLabelDeactivate"]
                ], function(l, n, e) {
                    var t = !0,
                        i = l.component;
                    return "legendLabelClick" === n && (t = !1 !== i.onClick(e) && t), "legendLabelActivate" === n && (t = !1 !== i.onActivate(e) && t), "legendLabelDeactivate" === n && (t = !1 !== i.onDeactivate(e) && t), t
                }, x.b, x.a)), i["\u0275prd"](512, null, b.a, b.a, [y.a]), i["\u0275did"](2, 573440, null, 0, w.a, [i.ViewContainerRef, b.a], {
                    view: [0, "view"],
                    showLegend: [1, "showLegend"],
                    legendOptions: [2, "legendOptions"],
                    activeEntries: [3, "activeEntries"],
                    animations: [4, "animations"]
                }, {
                    legendLabelClick: "legendLabelClick",
                    legendLabelActivate: "legendLabelActivate",
                    legendLabelDeactivate: "legendLabelDeactivate"
                }), i["\u0275pad"](3, 2), (l()(), i["\u0275eld"](4, 0, null, 0, 2, ":svg:defs", [], null, null, null, null, null)), (l()(), i["\u0275eld"](5, 0, null, null, 1, ":svg:clipPath", [], [
                    [1, "id", 0]
                ], null, null, null, null)), (l()(), i["\u0275eld"](6, 0, null, null, 0, ":svg:rect", [], [
                    [1, "width", 0],
                    [1, "height", 0],
                    [1, "transform", 0]
                ], null, null, null, null)), (l()(), i["\u0275eld"](7, 0, null, 0, 9, ":svg:g", [
                    ["class", "area-chart chart"]
                ], [
                    [1, "transform", 0]
                ], null, null, null, null)), (l()(), i["\u0275and"](16777216, null, null, 1, null, T)), i["\u0275did"](9, 16384, null, 0, m.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), i["\u0275and"](16777216, null, null, 1, null, R)), i["\u0275did"](11, 16384, null, 0, m.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), i["\u0275eld"](12, 0, null, null, 4, ":svg:g", [], [
                    [1, "clip-path", 0]
                ], null, null, null, null)), (l()(), i["\u0275and"](16777216, null, null, 1, null, C)), i["\u0275did"](14, 802816, null, 0, m.NgForOf, [i.ViewContainerRef, i.TemplateRef, i.IterableDiffers], {
                    ngForOf: [0, "ngForOf"],
                    ngForTrackBy: [1, "ngForTrackBy"]
                }, null), (l()(), i["\u0275and"](16777216, null, null, 1, null, I)), i["\u0275did"](16, 16384, null, 0, m.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), i["\u0275and"](16777216, null, 0, 1, null, S)), i["\u0275did"](18, 16384, null, 0, m.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(l, n) {
                    var e = n.component;
                    l(n, 2, 0, l(n, 3, 0, e.width, e.height), e.legend, e.legendOptions, e.activeEntries, e.animations), l(n, 9, 0, e.xAxis), l(n, 11, 0, e.yAxis), l(n, 14, 0, e.results, e.trackBy), l(n, 16, 0, !e.tooltipDisabled), l(n, 18, 0, e.timeline && "ordinal" != e.scaleType)
                }, function(l, n) {
                    var e = n.component;
                    l(n, 5, 0, e.clipPathId), l(n, 6, 0, e.dims.width + 10, e.dims.height + 10, "translate(-5, -5)"), l(n, 7, 0, e.transform), l(n, 12, 0, e.clipPath)
                })
            }
        },
        "7W4y": function(l, n, e) {
            "use strict";
            var t = e("CcnG"),
                i = e("Ip0R"),
                a = e("Y5s4"),
                o = t["\u0275crt"]({
                    encapsulation: 2,
                    styles: [],
                    data: {}
                });

            function u(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 0, ":svg:stop", [], [
                    [1, "offset", 0],
                    [4, "stop-color", null],
                    [4, "stop-opacity", null]
                ], null, null, null, null))], null, function(l, n) {
                    l(n, 0, 0, n.context.$implicit.offset + "%", n.context.$implicit.color, n.context.$implicit.opacity)
                })
            }

            function c(l) {
                return t["\u0275vid"](2, [(l()(), t["\u0275eld"](0, 0, null, null, 2, ":svg:radialGradient", [
                    ["gradientUnits", "userSpaceOnUse"]
                ], [
                    [8, "id", 0],
                    [1, "cx", 0],
                    [1, "cy", 0],
                    [1, "r", 0]
                ], null, null, null, null)), (l()(), t["\u0275and"](16777216, null, null, 1, null, u)), t["\u0275did"](2, 802816, null, 0, i.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                    ngForOf: [0, "ngForOf"]
                }, null)], function(l, n) {
                    l(n, 2, 0, n.component.stops)
                }, function(l, n) {
                    var e = n.component;
                    l(n, 0, 0, e.name, e.cx, e.cy, e.r)
                })
            }
            e("J6WN"), e.d(n, "a", function() {
                return r
            }), e.d(n, "b", function() {
                return d
            });
            var r = t["\u0275crt"]({
                encapsulation: 2,
                styles: [],
                data: {}
            });

            function s(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 2, ":svg:defs", [], null, null, null, null, null)), (l()(), t["\u0275eld"](1, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-svg-radial-gradient", ""],
                    ["orientation", "vertical"]
                ], null, null, null, c, o)), t["\u0275did"](2, 573440, null, 0, a.a, [], {
                    color: [0, "color"],
                    name: [1, "name"],
                    startOpacity: [2, "startOpacity"]
                }, null)], function(l, n) {
                    var e = n.component;
                    l(n, 2, 0, e.fill, e.radialGradientId, e.startOpacity)
                }, null)
            }

            function d(l) {
                return t["\u0275vid"](2, [(l()(), t["\u0275eld"](0, 0, null, null, 3, ":svg:g", [
                    ["class", "arc-group"]
                ], null, null, null, null, null)), (l()(), t["\u0275and"](16777216, null, null, 1, null, s)), t["\u0275did"](2, 16384, null, 0, i.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), t["\u0275eld"](3, 0, null, null, 0, ":svg:path", [
                    ["class", "arc"]
                ], [
                    [1, "d", 0],
                    [2, "active", null],
                    [1, "fill", 0],
                    [4, "pointer-events", null]
                ], [
                    [null, "click"],
                    [null, "dblclick"],
                    [null, "mouseenter"],
                    [null, "mouseleave"]
                ], function(l, n, e) {
                    var t = !0,
                        i = l.component;
                    return "click" === n && (t = !1 !== i.onClick() && t), "dblclick" === n && (t = !1 !== i.onDblClick(e) && t), "mouseenter" === n && (t = !1 !== i.activate.emit(i.data) && t), "mouseleave" === n && (t = !1 !== i.deactivate.emit(i.data) && t), t
                }, null, null))], function(l, n) {
                    l(n, 2, 0, n.component.gradient)
                }, function(l, n) {
                    var e = n.component;
                    l(n, 3, 0, e.path, e.isActive, e.getGradient(), e.getPointerEvents())
                })
            }
        },
        "8rwn": function(l, n, e) {
            "use strict";
            var t = e("8ubM"),
                i = e("CcnG"),
                a = e("Vug8"),
                o = e("k/Rj"),
                u = e("Se1k"),
                c = e("nJx2"),
                r = e("d91A"),
                s = e("NT8I"),
                d = e("bmvy"),
                g = e("FfNM"),
                f = e("Ip0R"),
                p = e("OM5j"),
                m = i["\u0275crt"]({
                    encapsulation: 2,
                    styles: [
                        [".advanced-pie-legend{float:left;position:relative;top:50%;-webkit-transform:translate(0,-50%);transform:translate(0,-50%)}.advanced-pie-legend .total-value{font-size:36px}.advanced-pie-legend .total-label{font-size:24px;margin-bottom:19px}.advanced-pie-legend .legend-items-container{width:100%}.advanced-pie-legend .legend-items-container .legend-items{white-space:nowrap;overflow:auto}.advanced-pie-legend .legend-items-container .legend-items .legend-item{margin-right:20px;display:inline-block;cursor:pointer}.advanced-pie-legend .legend-items-container .legend-items .legend-item:focus{outline:0}.advanced-pie-legend .legend-items-container .legend-items .legend-item:hover{color:#000;transition:.2s}.advanced-pie-legend .legend-items-container .legend-items .legend-item .item-value{font-size:24px;margin-top:-6px;margin-left:11px}.advanced-pie-legend .legend-items-container .legend-items .legend-item .item-label{font-size:14px;opacity:.7;margin-left:11px;margin-top:-6px}.advanced-pie-legend .legend-items-container .legend-items .legend-item .item-percent{font-size:24px;opacity:.7;margin-left:11px}.advanced-pie-legend .legend-items-container .legend-items .legend-item .item-color{width:4px;height:42px;float:left;margin-right:7px}"]
                    ],
                    data: {}
                });

            function v(l) {
                return i["\u0275vid"](0, [(l()(), i["\u0275eld"](0, 0, null, null, 1, "div", [
                    ["class", "total-value"],
                    ["ngx-charts-count-up", ""]
                ], null, null, null, d.b, d.a)), i["\u0275did"](1, 180224, null, 0, g.a, [i.ChangeDetectorRef, i.ElementRef], {
                    countTo: [0, "countTo"]
                }, null)], function(l, n) {
                    l(n, 1, 0, n.component.roundedTotal)
                }, null)
            }

            function h(l) {
                return i["\u0275vid"](0, [(l()(), i["\u0275eld"](0, 0, null, null, 1, "div", [], null, null, null, null, null)), (l()(), i["\u0275ted"](1, null, [" ", " "]))], null, function(l, n) {
                    l(n, 1, 0, n.component.roundedTotal)
                })
            }

            function x(l) {
                return i["\u0275vid"](0, [(l()(), i["\u0275eld"](0, 0, null, null, 1, "div", [
                    ["class", "item-value"],
                    ["ngx-charts-count-up", ""]
                ], null, null, null, d.b, d.a)), i["\u0275did"](1, 180224, null, 0, g.a, [i.ChangeDetectorRef, i.ElementRef], {
                    countTo: [0, "countTo"]
                }, null)], function(l, n) {
                    l(n, 1, 0, n.parent.context.$implicit.value)
                }, null)
            }

            function b(l) {
                return i["\u0275vid"](0, [(l()(), i["\u0275eld"](0, 0, null, null, 1, "div", [
                    ["class", "item-value"]
                ], null, null, null, null, null)), (l()(), i["\u0275ted"](1, null, [" ", " "]))], null, function(l, n) {
                    l(n, 1, 0, n.parent.context.$implicit.value)
                })
            }

            function y(l) {
                return i["\u0275vid"](0, [(l()(), i["\u0275eld"](0, 0, null, null, 1, "div", [
                    ["class", "item-percent"],
                    ["ngx-charts-count-up", ""]
                ], null, null, null, d.b, d.a)), i["\u0275did"](1, 180224, null, 0, g.a, [i.ChangeDetectorRef, i.ElementRef], {
                    countSuffix: [0, "countSuffix"],
                    countTo: [1, "countTo"]
                }, null)], function(l, n) {
                    l(n, 1, 0, "%", n.parent.context.$implicit.percentage)
                }, null)
            }

            function w(l) {
                return i["\u0275vid"](0, [(l()(), i["\u0275eld"](0, 0, null, null, 1, "div", [
                    ["class", "item-percent"]
                ], null, null, null, null, null)), (l()(), i["\u0275ted"](1, null, [" ", "% "]))], null, function(l, n) {
                    l(n, 1, 0, n.parent.context.$implicit.percentage.toLocaleString())
                })
            }

            function k(l) {
                return i["\u0275vid"](0, [(l()(), i["\u0275eld"](0, 0, null, null, 11, "div", [
                    ["class", "legend-item"],
                    ["tabindex", "-1"]
                ], null, [
                    [null, "mouseenter"],
                    [null, "mouseleave"],
                    [null, "click"]
                ], function(l, n, e) {
                    var t = !0,
                        i = l.component;
                    return "mouseenter" === n && (t = !1 !== i.activate.emit(l.context.$implicit.label) && t), "mouseleave" === n && (t = !1 !== i.deactivate.emit(l.context.$implicit.label) && t), "click" === n && (t = !1 !== i.select.emit({
                        name: l.context.$implicit.label,
                        value: l.context.$implicit.value
                    }) && t), t
                }, null, null)), (l()(), i["\u0275eld"](1, 0, null, null, 0, "div", [
                    ["class", "item-color"]
                ], [
                    [4, "background", null]
                ], null, null, null, null)), (l()(), i["\u0275and"](16777216, null, null, 1, null, x)), i["\u0275did"](3, 16384, null, 0, f.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), i["\u0275and"](16777216, null, null, 1, null, b)), i["\u0275did"](5, 16384, null, 0, f.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), i["\u0275eld"](6, 0, null, null, 1, "div", [
                    ["class", "item-label"]
                ], null, null, null, null, null)), (l()(), i["\u0275ted"](7, null, ["", ""])), (l()(), i["\u0275and"](16777216, null, null, 1, null, y)), i["\u0275did"](9, 16384, null, 0, f.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), i["\u0275and"](16777216, null, null, 1, null, w)), i["\u0275did"](11, 16384, null, 0, f.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(l, n) {
                    var e = n.component;
                    l(n, 3, 0, e.animations), l(n, 5, 0, !e.animations), l(n, 9, 0, e.animations), l(n, 11, 0, !e.animations)
                }, function(l, n) {
                    l(n, 1, 0, n.context.$implicit.color), l(n, 7, 0, n.context.$implicit.label)
                })
            }

            function T(l) {
                return i["\u0275vid"](2, [(l()(), i["\u0275eld"](0, 0, null, null, 10, "div", [
                    ["class", "advanced-pie-legend"]
                ], [
                    [4, "width", "px"]
                ], null, null, null, null)), (l()(), i["\u0275and"](16777216, null, null, 1, null, v)), i["\u0275did"](2, 16384, null, 0, f.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), i["\u0275and"](16777216, null, null, 1, null, h)), i["\u0275did"](4, 16384, null, 0, f.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), i["\u0275eld"](5, 0, null, null, 1, "div", [
                    ["class", "total-label"]
                ], null, null, null, null, null)), (l()(), i["\u0275ted"](6, null, [" ", " "])), (l()(), i["\u0275eld"](7, 0, null, null, 3, "div", [
                    ["class", "legend-items-container"]
                ], null, null, null, null, null)), (l()(), i["\u0275eld"](8, 0, null, null, 2, "div", [
                    ["class", "legend-items"]
                ], null, null, null, null, null)), (l()(), i["\u0275and"](16777216, null, null, 1, null, k)), i["\u0275did"](10, 802816, null, 0, f.NgForOf, [i.ViewContainerRef, i.TemplateRef, i.IterableDiffers], {
                    ngForOf: [0, "ngForOf"],
                    ngForTrackBy: [1, "ngForTrackBy"]
                }, null)], function(l, n) {
                    var e = n.component;
                    l(n, 2, 0, e.animations), l(n, 4, 0, !e.animations), l(n, 10, 0, e.legendItems, e.trackBy)
                }, function(l, n) {
                    var e = n.component;
                    l(n, 0, 0, e.width), l(n, 6, 0, e.label)
                })
            }
            e("eZ3f"), e.d(n, "a", function() {
                return R
            }), e.d(n, "b", function() {
                return C
            });
            var R = i["\u0275crt"]({
                encapsulation: 2,
                styles: [t.a, [".advanced-pie{display:inline-block;float:left}.advanced-pie-legend-wrapper{display:inline-block}"]],
                data: {}
            });

            function C(l) {
                return i["\u0275vid"](2, [(l()(), i["\u0275eld"](0, 0, null, null, 11, "div", [], [
                    [4, "width", "px"],
                    [4, "height", "px"]
                ], null, null, null, null)), (l()(), i["\u0275eld"](1, 0, null, null, 7, "div", [
                    ["class", "advanced-pie chart"]
                ], [
                    [4, "width", "px"],
                    [4, "height", "px"]
                ], null, null, null, null)), (l()(), i["\u0275eld"](2, 16777216, null, null, 6, "ngx-charts-chart", [], null, null, null, a.b, a.a)), i["\u0275prd"](512, null, o.a, o.a, [u.a]), i["\u0275did"](4, 573440, null, 0, c.a, [i.ViewContainerRef, o.a], {
                    view: [0, "view"],
                    showLegend: [1, "showLegend"],
                    animations: [2, "animations"]
                }, null), i["\u0275pad"](5, 2), (l()(), i["\u0275eld"](6, 0, null, 0, 2, ":svg:g", [
                    ["class", "pie chart"]
                ], [
                    [1, "transform", 0]
                ], null, null, null, null)), (l()(), i["\u0275eld"](7, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-pie-series", ""]
                ], null, [
                    [null, "select"]
                ], function(l, n, e) {
                    var t = !0;
                    return "select" === n && (t = !1 !== l.component.onClick(e) && t), t
                }, r.b, r.a)), i["\u0275did"](8, 573440, null, 0, s.a, [], {
                    colors: [0, "colors"],
                    series: [1, "series"],
                    innerRadius: [2, "innerRadius"],
                    outerRadius: [3, "outerRadius"],
                    gradient: [4, "gradient"],
                    activeEntries: [5, "activeEntries"],
                    tooltipText: [6, "tooltipText"],
                    tooltipDisabled: [7, "tooltipDisabled"],
                    tooltipTemplate: [8, "tooltipTemplate"],
                    animations: [9, "animations"]
                }, {
                    select: "select"
                }), (l()(), i["\u0275eld"](9, 0, null, null, 2, "div", [
                    ["class", "advanced-pie-legend-wrapper"]
                ], [
                    [4, "width", "px"],
                    [4, "height", "px"]
                ], null, null, null, null)), (l()(), i["\u0275eld"](10, 0, null, null, 1, "ngx-charts-advanced-legend", [], null, [
                    [null, "select"],
                    [null, "activate"],
                    [null, "deactivate"]
                ], function(l, n, e) {
                    var t = !0,
                        i = l.component;
                    return "select" === n && (t = !1 !== i.onClick(e) && t), "activate" === n && (t = !1 !== i.onActivate(e) && t), "deactivate" === n && (t = !1 !== i.onDeactivate(e) && t), t
                }, T, m)), i["\u0275did"](11, 573440, null, 0, p.a, [], {
                    width: [0, "width"],
                    data: [1, "data"],
                    colors: [2, "colors"],
                    label: [3, "label"],
                    animations: [4, "animations"],
                    valueFormatting: [5, "valueFormatting"],
                    labelFormatting: [6, "labelFormatting"],
                    percentageFormatting: [7, "percentageFormatting"]
                }, {
                    select: "select",
                    activate: "activate",
                    deactivate: "deactivate"
                })], function(l, n) {
                    var e = n.component;
                    l(n, 4, 0, l(n, 5, 0, e.width, e.height), !1, e.animations), l(n, 8, 0, e.colors, e.results, e.innerRadius, e.outerRadius, e.gradient, e.activeEntries, e.tooltipText, e.tooltipDisabled, e.tooltipTemplate, e.animations), l(n, 11, 0, e.width - e.dims.width - e.margin[1], e.results, e.colors, e.label, e.animations, e.valueFormatting, e.nameFormatting, e.percentageFormatting)
                }, function(l, n) {
                    var e = n.component;
                    l(n, 0, 0, e.width, e.height), l(n, 1, 0, e.dims.width, e.dims.height), l(n, 6, 0, e.transform), l(n, 9, 0, e.width - e.dims.width, e.height)
                })
            }
        },
        "8ubM": function(l, n, e) {
            "use strict";
            e.d(n, "a", function() {
                return t
            });
            var t = [".ngx-charts{float:left;overflow:visible}.ngx-charts .arc,.ngx-charts .bar,.ngx-charts .circle{cursor:pointer}.ngx-charts .arc.active,.ngx-charts .arc:hover,.ngx-charts .bar.active,.ngx-charts .bar:hover,.ngx-charts .card.active,.ngx-charts .card:hover,.ngx-charts .cell.active,.ngx-charts .cell:hover{opacity:.8;transition:opacity .1s ease-in-out}.ngx-charts .arc:focus,.ngx-charts .bar:focus,.ngx-charts .card:focus,.ngx-charts .cell:focus,.ngx-charts g:focus{outline:0}.ngx-charts .area-series.inactive,.ngx-charts .line-series-range.inactive,.ngx-charts .line-series.inactive,.ngx-charts .polar-series-area.inactive,.ngx-charts .polar-series-path.inactive{transition:opacity .1s ease-in-out;opacity:.2}.ngx-charts .line-highlight{display:none}.ngx-charts .line-highlight.active{display:block}.ngx-charts .area{opacity:.6}.ngx-charts .circle:hover{cursor:pointer}.ngx-charts .label{font-size:12px;font-weight:400}.ngx-charts .tooltip-anchor{fill:#000}.ngx-charts .gridline-path{stroke:#ddd;stroke-width:1;fill:none}.ngx-charts .refline-path{stroke:#a8b2c7;stroke-width:1;stroke-dasharray:5;stroke-dashoffset:5}.ngx-charts .refline-label{font-size:9px}.ngx-charts .reference-area{fill-opacity:.05;fill:#000}.ngx-charts .gridline-path-dotted{stroke:#ddd;stroke-width:1;fill:none;stroke-dasharray:1,20;stroke-dashoffset:3}.ngx-charts .grid-panel rect{fill:none}.ngx-charts .grid-panel.odd rect{fill:rgba(0,0,0,.05)}"]
        },
        AHdH: function(l, n, e) {
            "use strict";
            var t = e("CcnG"),
                i = e("Ip0R"),
                a = e("QkSP"),
                o = t["\u0275crt"]({
                    encapsulation: 2,
                    styles: [],
                    data: {}
                });

            function u(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 4, ":svg:g", [
                    ["class", "tick"]
                ], [
                    [1, "transform", 0]
                ], null, null, null, null)), (l()(), t["\u0275eld"](1, 0, null, null, 1, ":svg:title", [], null, null, null, null, null)), (l()(), t["\u0275ted"](2, null, ["", ""])), (l()(), t["\u0275eld"](3, 0, null, null, 1, ":svg:text", [
                    ["stroke-width", "0.01"]
                ], [
                    [1, "text-anchor", 0],
                    [1, "transform", 0],
                    [4, "font-size", null]
                ], null, null, null, null)), (l()(), t["\u0275ted"](4, null, [" ", " "]))], null, function(l, n) {
                    var e = n.component;
                    l(n, 0, 0, e.tickTransform(n.context.$implicit)), l(n, 2, 0, e.tickFormat(n.context.$implicit)), l(n, 3, 0, e.textAnchor, e.textTransform, "12px"), l(n, 4, 0, e.trimLabel(e.tickFormat(n.context.$implicit)))
                })
            }

            function c(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 1, ":svg:g", [], [
                    [1, "transform", 0]
                ], null, null, null, null)), (l()(), t["\u0275eld"](1, 0, null, null, 0, ":svg:line", [
                    ["class", "gridline-path gridline-path-vertical"],
                    ["y2", "0"]
                ], [
                    [1, "y1", 0]
                ], null, null, null, null))], null, function(l, n) {
                    var e = n.component;
                    l(n, 0, 0, e.gridLineTransform()), l(n, 1, 0, 0 - e.gridLineHeight)
                })
            }

            function r(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 2, ":svg:g", [], [
                    [1, "transform", 0]
                ], null, null, null, null)), (l()(), t["\u0275and"](16777216, null, null, 1, null, c)), t["\u0275did"](2, 16384, null, 0, i.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(l, n) {
                    l(n, 2, 0, n.component.showGridLines)
                }, function(l, n) {
                    l(n, 0, 0, n.component.tickTransform(n.context.$implicit))
                })
            }

            function s(l) {
                return t["\u0275vid"](2, [t["\u0275qud"](402653184, 1, {
                    ticksElement: 0
                }), (l()(), t["\u0275eld"](1, 0, [
                    [1, 0],
                    ["ticksel", 1]
                ], null, 2, ":svg:g", [], null, null, null, null, null)), (l()(), t["\u0275and"](16777216, null, null, 1, null, u)), t["\u0275did"](3, 802816, null, 0, i.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                    ngForOf: [0, "ngForOf"]
                }, null), (l()(), t["\u0275and"](16777216, null, null, 1, null, r)), t["\u0275did"](5, 802816, null, 0, i.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                    ngForOf: [0, "ngForOf"]
                }, null)], function(l, n) {
                    var e = n.component;
                    l(n, 3, 0, e.ticks), l(n, 5, 0, e.ticks)
                }, null)
            }
            var d = e("JCoh"),
                g = e("tb0z");
            e("Ywhj"), e.d(n, "a", function() {
                return f
            }), e.d(n, "b", function() {
                return v
            });
            var f = t["\u0275crt"]({
                encapsulation: 2,
                styles: [],
                data: {}
            });

            function p(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-x-axis-ticks", ""]
                ], null, [
                    [null, "dimensionsChanged"]
                ], function(l, n, e) {
                    var t = !0;
                    return "dimensionsChanged" === n && (t = !1 !== l.component.emitTicksHeight(e) && t), t
                }, s, o)), t["\u0275did"](1, 4767744, [
                    [1, 4]
                ], 0, a.a, [], {
                    scale: [0, "scale"],
                    orient: [1, "orient"],
                    tickArguments: [2, "tickArguments"],
                    tickValues: [3, "tickValues"],
                    tickStroke: [4, "tickStroke"],
                    tickFormatting: [5, "tickFormatting"],
                    showGridLines: [6, "showGridLines"],
                    gridLineHeight: [7, "gridLineHeight"],
                    width: [8, "width"]
                }, {
                    dimensionsChanged: "dimensionsChanged"
                })], function(l, n) {
                    var e = n.component;
                    l(n, 1, 0, e.xScale, e.xOrient, e.tickArguments, e.ticks, e.tickStroke, e.tickFormatting, e.showGridLines, e.dims.height, e.dims.width)
                }, null)
            }

            function m(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-axis-label", ""]
                ], null, null, null, d.b, d.a)), t["\u0275did"](1, 573440, null, 0, g.a, [t.ElementRef], {
                    orient: [0, "orient"],
                    label: [1, "label"],
                    offset: [2, "offset"],
                    width: [3, "width"],
                    height: [4, "height"]
                }, null)], function(l, n) {
                    var e = n.component;
                    l(n, 1, 0, "bottom", e.labelText, e.labelOffset, e.dims.width, e.dims.height)
                }, null)
            }

            function v(l) {
                return t["\u0275vid"](2, [t["\u0275qud"](671088640, 1, {
                    ticksComponent: 0
                }), (l()(), t["\u0275eld"](1, 0, null, null, 4, ":svg:g", [], [
                    [1, "class", 0],
                    [1, "transform", 0]
                ], null, null, null, null)), (l()(), t["\u0275and"](16777216, null, null, 1, null, p)), t["\u0275did"](3, 16384, null, 0, i.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), t["\u0275and"](16777216, null, null, 1, null, m)), t["\u0275did"](5, 16384, null, 0, i.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(l, n) {
                    var e = n.component;
                    l(n, 3, 0, e.xScale), l(n, 5, 0, e.showLabel)
                }, function(l, n) {
                    var e = n.component;
                    l(n, 1, 0, e.xAxisClassName, e.transform)
                })
            }
        },
        GEJo: function(l, n, e) {
            "use strict";
            e.d(n, "a", function() {
                return u
            }), e.d(n, "b", function() {
                return r
            });
            var t = e("CcnG"),
                i = e("I3BX"),
                a = e("IU+9"),
                o = e("Ip0R"),
                u = (e("B4+B"), t["\u0275crt"]({
                    encapsulation: 2,
                    styles: [],
                    data: {}
                }));

            function c(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 2, ":svg:defs", [], null, null, null, null, null)), (l()(), t["\u0275eld"](1, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-svg-linear-gradient", ""],
                    ["orientation", "vertical"]
                ], null, null, null, i.b, i.a)), t["\u0275did"](2, 573440, null, 0, a.a, [], {
                    orientation: [0, "orientation"],
                    name: [1, "name"],
                    stops: [2, "stops"]
                }, null)], function(l, n) {
                    var e = n.component;
                    l(n, 2, 0, "vertical", e.gradientId, e.gradientStops)
                }, null)
            }

            function r(l) {
                return t["\u0275vid"](2, [(l()(), t["\u0275and"](16777216, null, null, 1, null, c)), t["\u0275did"](1, 16384, null, 0, o.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), t["\u0275eld"](2, 0, null, null, 0, ":svg:path", [
                    ["class", "area"]
                ], [
                    [1, "d", 0],
                    [1, "fill", 0],
                    [4, "opacity", null]
                ], null, null, null, null))], function(l, n) {
                    l(n, 1, 0, n.component.gradient)
                }, function(l, n) {
                    var e = n.component;
                    l(n, 2, 0, e.areaPath, e.gradient ? e.gradientFill : e.fill, e.opacity)
                })
            }
        },
        I3BX: function(l, n, e) {
            "use strict";
            e.d(n, "a", function() {
                return a
            }), e.d(n, "b", function() {
                return u
            });
            var t = e("CcnG"),
                i = e("Ip0R"),
                a = (e("IU+9"), t["\u0275crt"]({
                    encapsulation: 2,
                    styles: [],
                    data: {}
                }));

            function o(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 0, ":svg:stop", [], [
                    [1, "offset", 0],
                    [4, "stop-color", null],
                    [4, "stop-opacity", null]
                ], null, null, null, null))], null, function(l, n) {
                    l(n, 0, 0, n.context.$implicit.offset + "%", n.context.$implicit.color, n.context.$implicit.opacity)
                })
            }

            function u(l) {
                return t["\u0275vid"](2, [(l()(), t["\u0275eld"](0, 0, null, null, 2, ":svg:linearGradient", [], [
                    [8, "id", 0],
                    [1, "x1", 0],
                    [1, "y1", 0],
                    [1, "x2", 0],
                    [1, "y2", 0]
                ], null, null, null, null)), (l()(), t["\u0275and"](16777216, null, null, 1, null, o)), t["\u0275did"](2, 802816, null, 0, i.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                    ngForOf: [0, "ngForOf"]
                }, null)], function(l, n) {
                    l(n, 2, 0, n.component.stops)
                }, function(l, n) {
                    var e = n.component;
                    l(n, 0, 0, e.name, e.x1, e.y1, e.x2, e.y2)
                })
            }
        },
        JCoh: function(l, n, e) {
            "use strict";
            e.d(n, "a", function() {
                return i
            }), e.d(n, "b", function() {
                return a
            });
            var t = e("CcnG"),
                i = (e("tb0z"), t["\u0275crt"]({
                    encapsulation: 2,
                    styles: [],
                    data: {}
                }));

            function a(l) {
                return t["\u0275vid"](2, [(l()(), t["\u0275eld"](0, 0, null, null, 1, ":svg:text", [], [
                    [1, "stroke-width", 0],
                    [1, "x", 0],
                    [1, "y", 0],
                    [1, "text-anchor", 0],
                    [1, "transform", 0]
                ], null, null, null, null)), (l()(), t["\u0275ted"](1, null, [" ", " "]))], null, function(l, n) {
                    var e = n.component;
                    l(n, 0, 0, e.strokeWidth, e.x, e.y, e.textAnchor, e.transform), l(n, 1, 0, e.label)
                })
            }
        },
        Mkm6: function(l, n, e) {
            "use strict";
            e.d(n, "a", function() {
                return u
            }), e.d(n, "b", function() {
                return s
            });
            var t = e("CcnG"),
                i = e("Ip0R"),
                a = e("+vzl"),
                o = e("k/Rj"),
                u = (e("H8yg"), t["\u0275crt"]({
                    encapsulation: 2,
                    styles: [],
                    data: {
                        animation: [{
                            type: 7,
                            name: "animationState",
                            definitions: [{
                                type: 1,
                                expr: "inactive => active",
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
                                            opacity: .7
                                        },
                                        offset: null
                                    },
                                    timings: 250
                                }],
                                options: null
                            }, {
                                type: 1,
                                expr: "active => inactive",
                                animation: [{
                                    type: 6,
                                    styles: {
                                        opacity: .7
                                    },
                                    offset: null
                                }, {
                                    type: 4,
                                    styles: {
                                        type: 6,
                                        styles: {
                                            opacity: 0
                                        },
                                        offset: null
                                    },
                                    timings: 250
                                }],
                                options: null
                            }],
                            options: {}
                        }]
                    }
                }));

            function c(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 2, ":xhtml:div", [
                    ["class", "tooltip-item"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](1, 0, null, null, 0, ":xhtml:span", [
                    ["class", "tooltip-item-color"]
                ], [
                    [4, "background-color", null]
                ], null, null, null, null)), (l()(), t["\u0275ted"](2, null, [" ", " "]))], null, function(l, n) {
                    var e = n.component;
                    l(n, 1, 0, n.context.$implicit.color), l(n, 2, 0, e.getToolTipText(n.context.$implicit))
                })
            }

            function r(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 2, ":xhtml:div", [
                    ["class", "area-tooltip-container"]
                ], null, null, null, null, null)), (l()(), t["\u0275and"](16777216, null, null, 1, null, c)), t["\u0275did"](2, 802816, null, 0, i.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                    ngForOf: [0, "ngForOf"]
                }, null)], function(l, n) {
                    l(n, 2, 0, n.context.model)
                }, null)
            }

            function s(l) {
                return t["\u0275vid"](2, [t["\u0275qud"](402653184, 1, {
                    tooltipAnchor: 0
                }), (l()(), t["\u0275eld"](1, 0, null, null, 4, ":svg:g", [], null, null, null, null, null)), (l()(), t["\u0275eld"](2, 0, null, null, 0, ":svg:rect", [
                    ["class", "tooltip-area"],
                    ["style", "opacity: 0; cursor: 'auto';"],
                    ["y", "0"]
                ], [
                    [1, "x", 0],
                    [1, "width", 0],
                    [1, "height", 0]
                ], [
                    [null, "mousemove"],
                    [null, "mouseleave"]
                ], function(l, n, e) {
                    var t = !0,
                        i = l.component;
                    return "mousemove" === n && (t = !1 !== i.mouseMove(e) && t), "mouseleave" === n && (t = !1 !== i.hideTooltip() && t), t
                }, null, null)), (l()(), t["\u0275and"](0, [
                    ["defaultTooltipTemplate", 2]
                ], null, 0, null, r)), (l()(), t["\u0275eld"](4, 16777216, [
                    [1, 0],
                    ["tooltipAnchor", 1]
                ], null, 1, ":svg:rect", [
                    ["class", "tooltip-anchor"],
                    ["ngx-tooltip", ""],
                    ["y", "0"]
                ], [
                    [24, "@animationState", 0],
                    [1, "x", 0],
                    [1, "width", 0],
                    [1, "height", 0],
                    [4, "opacity", null],
                    [4, "pointer-events", null]
                ], [
                    [null, "focusin"],
                    [null, "blur"],
                    [null, "mouseenter"],
                    [null, "mouseleave"],
                    [null, "click"]
                ], function(l, n, e) {
                    var i = !0;
                    return "focusin" === n && (i = !1 !== t["\u0275nov"](l, 5).onFocus() && i), "blur" === n && (i = !1 !== t["\u0275nov"](l, 5).onBlur() && i), "mouseenter" === n && (i = !1 !== t["\u0275nov"](l, 5).onMouseEnter() && i), "mouseleave" === n && (i = !1 !== t["\u0275nov"](l, 5).onMouseLeave(e.target) && i), "click" === n && (i = !1 !== t["\u0275nov"](l, 5).onMouseClick() && i), i
                }, null, null)), t["\u0275did"](5, 147456, null, 0, a.a, [o.a, t.ViewContainerRef, t.Renderer], {
                    tooltipSpacing: [0, "tooltipSpacing"],
                    tooltipDisabled: [1, "tooltipDisabled"],
                    tooltipPlacement: [2, "tooltipPlacement"],
                    tooltipType: [3, "tooltipType"],
                    tooltipTemplate: [4, "tooltipTemplate"],
                    tooltipContext: [5, "tooltipContext"],
                    tooltipImmediateExit: [6, "tooltipImmediateExit"]
                }, null)], function(l, n) {
                    var e = n.component;
                    l(n, 5, 0, 15, e.tooltipDisabled, "right", "tooltip", e.tooltipTemplate ? e.tooltipTemplate : t["\u0275nov"](n, 3), e.anchorValues, !0)
                }, function(l, n) {
                    var e = n.component;
                    l(n, 2, 0, 0, e.dims.width, e.dims.height), l(n, 4, 0, 0 !== e.anchorOpacity ? "active" : "inactive", e.anchorPos, 1, e.dims.height, e.anchorOpacity, "none")
                })
            }
        },
        Nx8C: function(l, n, e) {
            "use strict";
            e.d(n, "a", function() {
                return d
            }), e.d(n, "b", function() {
                return m
            });
            var t = e("CcnG"),
                i = e("yH0T"),
                a = e("+vzl"),
                o = e("k/Rj"),
                u = e("wLzX"),
                c = e("RRcI"),
                r = e("lTBp"),
                s = e("Ip0R"),
                d = (e("dP00"), t["\u0275crt"]({
                    encapsulation: 2,
                    styles: [],
                    data: {
                        animation: [{
                            type: 7,
                            name: "animationState",
                            definitions: [{
                                type: 1,
                                expr: ":leave",
                                animation: [{
                                    type: 6,
                                    styles: {
                                        opacity: 1
                                    },
                                    offset: null
                                }, {
                                    type: 4,
                                    styles: {
                                        type: 6,
                                        styles: {
                                            opacity: 0
                                        },
                                        offset: null
                                    },
                                    timings: 500
                                }],
                                options: null
                            }],
                            options: {}
                        }]
                    }
                }));

            function g(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 16777216, null, null, 2, ":svg:g", [
                    ["ngx-charts-bar", ""],
                    ["ngx-tooltip", ""]
                ], [
                    [24, "@animationState", 0],
                    [24, "@.disabled", 0]
                ], [
                    [null, "select"],
                    [null, "activate"],
                    [null, "deactivate"],
                    [null, "focusin"],
                    [null, "blur"],
                    [null, "mouseenter"],
                    [null, "mouseleave"],
                    [null, "click"]
                ], function(l, n, e) {
                    var i = !0,
                        a = l.component;
                    return "focusin" === n && (i = !1 !== t["\u0275nov"](l, 1).onFocus() && i), "blur" === n && (i = !1 !== t["\u0275nov"](l, 1).onBlur() && i), "mouseenter" === n && (i = !1 !== t["\u0275nov"](l, 1).onMouseEnter() && i), "mouseleave" === n && (i = !1 !== t["\u0275nov"](l, 1).onMouseLeave(e.target) && i), "click" === n && (i = !1 !== t["\u0275nov"](l, 1).onMouseClick() && i), "mouseenter" === n && (i = !1 !== t["\u0275nov"](l, 2).onMouseEnter() && i), "mouseleave" === n && (i = !1 !== t["\u0275nov"](l, 2).onMouseLeave() && i), "select" === n && (i = !1 !== a.onClick(e) && i), "activate" === n && (i = !1 !== a.activate.emit(e) && i), "deactivate" === n && (i = !1 !== a.deactivate.emit(e) && i), i
                }, i.b, i.a)), t["\u0275did"](1, 147456, null, 0, a.a, [o.a, t.ViewContainerRef, t.Renderer], {
                    tooltipTitle: [0, "tooltipTitle"],
                    tooltipDisabled: [1, "tooltipDisabled"],
                    tooltipPlacement: [2, "tooltipPlacement"],
                    tooltipType: [3, "tooltipType"],
                    tooltipTemplate: [4, "tooltipTemplate"],
                    tooltipContext: [5, "tooltipContext"]
                }, null), t["\u0275did"](2, 573440, null, 0, u.a, [t.ElementRef], {
                    fill: [0, "fill"],
                    data: [1, "data"],
                    width: [2, "width"],
                    height: [3, "height"],
                    x: [4, "x"],
                    y: [5, "y"],
                    orientation: [6, "orientation"],
                    roundEdges: [7, "roundEdges"],
                    gradient: [8, "gradient"],
                    isActive: [9, "isActive"],
                    stops: [10, "stops"],
                    animations: [11, "animations"]
                }, {
                    select: "select",
                    activate: "activate",
                    deactivate: "deactivate"
                }), (l()(), t["\u0275and"](0, null, null, 0))], function(l, n) {
                    var e = n.component;
                    l(n, 1, 0, e.tooltipTemplate ? void 0 : n.context.$implicit.tooltipText, e.tooltipDisabled, e.tooltipPlacement, e.tooltipType, e.tooltipTemplate, n.context.$implicit.data), l(n, 2, 1, [n.context.$implicit.color, n.context.$implicit.data, n.context.$implicit.width, n.context.$implicit.height, n.context.$implicit.x, n.context.$implicit.y, "vertical", n.context.$implicit.roundEdges, e.gradient, e.isActive(n.context.$implicit.data), n.context.$implicit.gradientStops, e.animations])
                }, function(l, n) {
                    l(n, 0, 0, "active", !n.component.animations)
                })
            }

            function f(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-bar-label", ""]
                ], null, [
                    [null, "dimensionsChanged"]
                ], function(l, n, e) {
                    var t = !0;
                    return "dimensionsChanged" === n && (t = !1 !== l.component.dataLabelHeightChanged.emit({
                        size: e,
                        index: l.context.index
                    }) && t), t
                }, c.b, c.a)), t["\u0275did"](1, 4767744, null, 0, r.a, [t.ElementRef], {
                    value: [0, "value"],
                    valueFormatting: [1, "valueFormatting"],
                    barX: [2, "barX"],
                    barY: [3, "barY"],
                    barWidth: [4, "barWidth"],
                    barHeight: [5, "barHeight"],
                    orientation: [6, "orientation"]
                }, {
                    dimensionsChanged: "dimensionsChanged"
                })], function(l, n) {
                    l(n, 1, 0, n.context.$implicit.total, n.component.dataLabelFormatting, n.context.$implicit.x, n.context.$implicit.y, n.context.$implicit.width, n.context.$implicit.height, "vertical")
                }, null)
            }

            function p(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 2, ":svg:g", [], null, null, null, null, null)), (l()(), t["\u0275and"](16777216, null, null, 1, null, f)), t["\u0275did"](2, 802816, null, 0, s.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                    ngForOf: [0, "ngForOf"],
                    ngForTrackBy: [1, "ngForTrackBy"]
                }, null)], function(l, n) {
                    var e = n.component;
                    l(n, 2, 0, e.barsForDataLabels, e.trackDataLabelBy)
                }, null)
            }

            function m(l) {
                return t["\u0275vid"](2, [(l()(), t["\u0275and"](16777216, null, null, 1, null, g)), t["\u0275did"](1, 802816, null, 0, s.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                    ngForOf: [0, "ngForOf"],
                    ngForTrackBy: [1, "ngForTrackBy"]
                }, null), (l()(), t["\u0275and"](16777216, null, null, 1, null, p)), t["\u0275did"](3, 16384, null, 0, s.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(l, n) {
                    var e = n.component;
                    l(n, 1, 0, e.bars, e.trackBy), l(n, 3, 0, e.showDataLabel)
                }, null)
            }
        },
        QoYF: function(l, n, e) {
            "use strict";
            var t = e("CcnG");
            e("U3KO"), e.d(n, "a", function() {
                return i
            }), e.d(n, "b", function() {
                return a
            });
            var i = t["\u0275crt"]({
                encapsulation: 2,
                styles: [
                    [".timeline .brush-background{fill:rgba(0,0,0,.05)}.timeline .brush .selection{fill:rgba(0,0,0,.1);stroke-width:1px;stroke:#888}.timeline .brush .handle{fill-opacity:0}.timeline .embedded-chart{opacity:.6}"]
                ],
                data: {}
            });

            function a(l) {
                return t["\u0275vid"](2, [(l()(), t["\u0275eld"](0, 0, null, null, 6, ":svg:g", [
                    ["class", "timeline"]
                ], [
                    [1, "transform", 0]
                ], null, null, null, null)), (l()(), t["\u0275eld"](1, 0, null, null, 1, ":svg:filter", [], [
                    [1, "id", 0]
                ], null, null, null, null)), (l()(), t["\u0275eld"](2, 0, null, null, 0, ":svg:feColorMatrix", [
                    ["in", "SourceGraphic"],
                    ["type", "matrix"],
                    ["values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](3, 0, null, null, 1, ":svg:g", [
                    ["class", "embedded-chart"]
                ], null, null, null, null, null)), t["\u0275ncd"](null, 0), (l()(), t["\u0275eld"](5, 0, null, null, 0, ":svg:rect", [
                    ["class", "brush-background"],
                    ["x", "0"],
                    ["y", "0"]
                ], [
                    [1, "width", 0],
                    [1, "height", 0]
                ], null, null, null, null)), (l()(), t["\u0275eld"](6, 0, null, null, 0, ":svg:g", [
                    ["class", "brush"]
                ], null, null, null, null, null))], null, function(l, n) {
                    var e = n.component;
                    l(n, 0, 0, e.transform), l(n, 1, 0, e.filterId), l(n, 5, 0, e.view[0], e.height)
                })
            }
        },
        "R+s0": function(l, n, e) {
            "use strict";
            var t = e("CcnG"),
                i = e("Ip0R"),
                a = e("0yKa"),
                o = t["\u0275crt"]({
                    encapsulation: 2,
                    styles: [],
                    data: {}
                });

            function u(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 4, ":svg:g", [
                    ["class", "tick"]
                ], [
                    [1, "transform", 0]
                ], null, null, null, null)), (l()(), t["\u0275eld"](1, 0, null, null, 1, ":svg:title", [], null, null, null, null, null)), (l()(), t["\u0275ted"](2, null, ["", ""])), (l()(), t["\u0275eld"](3, 0, null, null, 1, ":svg:text", [
                    ["stroke-width", "0.01"]
                ], [
                    [1, "dy", 0],
                    [1, "x", 0],
                    [1, "y", 0],
                    [1, "text-anchor", 0],
                    [4, "font-size", null]
                ], null, null, null, null)), (l()(), t["\u0275ted"](4, null, [" ", " "]))], null, function(l, n) {
                    var e = n.component;
                    l(n, 0, 0, e.transform(n.context.$implicit)), l(n, 2, 0, e.tickFormat(n.context.$implicit)), l(n, 3, 0, e.dy, e.x1, e.y1, e.textAnchor, "12px"), l(n, 4, 0, e.trimLabel(e.tickFormat(n.context.$implicit)))
                })
            }

            function c(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 0, ":svg:path", [
                    ["class", "reference-area"]
                ], [
                    [1, "d", 0],
                    [1, "transform", 0]
                ], null, null, null, null))], null, function(l, n) {
                    var e = n.component;
                    l(n, 0, 0, e.referenceAreaPath, e.gridLineTransform())
                })
            }

            function r(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 0, ":svg:line", [
                    ["class", "gridline-path gridline-path-horizontal"],
                    ["x1", "0"]
                ], [
                    [1, "x2", 0]
                ], null, null, null, null))], null, function(l, n) {
                    l(n, 0, 0, n.component.gridLineWidth)
                })
            }

            function s(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 0, ":svg:line", [
                    ["class", "gridline-path gridline-path-horizontal"],
                    ["x1", "0"]
                ], [
                    [1, "x2", 0]
                ], null, null, null, null))], null, function(l, n) {
                    l(n, 0, 0, 0 - n.component.gridLineWidth)
                })
            }

            function d(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 4, ":svg:g", [], [
                    [1, "transform", 0]
                ], null, null, null, null)), (l()(), t["\u0275and"](16777216, null, null, 1, null, r)), t["\u0275did"](2, 16384, null, 0, i.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), t["\u0275and"](16777216, null, null, 1, null, s)), t["\u0275did"](4, 16384, null, 0, i.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(l, n) {
                    var e = n.component;
                    l(n, 2, 0, "left" === e.orient), l(n, 4, 0, "right" === e.orient)
                }, function(l, n) {
                    l(n, 0, 0, n.component.gridLineTransform())
                })
            }

            function g(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 2, ":svg:g", [], [
                    [1, "transform", 0]
                ], null, null, null, null)), (l()(), t["\u0275and"](16777216, null, null, 1, null, d)), t["\u0275did"](2, 16384, null, 0, i.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(l, n) {
                    l(n, 2, 0, n.component.showGridLines)
                }, function(l, n) {
                    l(n, 0, 0, n.component.transform(n.context.$implicit))
                })
            }

            function f(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 4, ":svg:g", [], null, null, null, null, null)), (l()(), t["\u0275eld"](1, 0, null, null, 1, ":svg:title", [], null, null, null, null, null)), (l()(), t["\u0275ted"](2, null, ["", ""])), (l()(), t["\u0275eld"](3, 0, null, null, 1, ":svg:text", [
                    ["class", "refline-label"]
                ], [
                    [1, "dy", 0],
                    [1, "y", 0],
                    [1, "x", 0],
                    [1, "text-anchor", 0]
                ], null, null, null, null)), (l()(), t["\u0275ted"](4, null, [" ", " "]))], null, function(l, n) {
                    var e = n.component;
                    l(n, 2, 0, e.trimLabel(e.tickFormat(n.parent.parent.context.$implicit.value))), l(n, 3, 0, e.dy, -6, e.gridLineWidth, e.textAnchor), l(n, 4, 0, n.parent.parent.context.$implicit.name)
                })
            }

            function p(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 3, ":svg:g", [], [
                    [1, "transform", 0]
                ], null, null, null, null)), (l()(), t["\u0275eld"](1, 0, null, null, 0, ":svg:line", [
                    ["class", "refline-path gridline-path-horizontal"],
                    ["x1", "0"]
                ], [
                    [1, "x2", 0],
                    [1, "transform", 0]
                ], null, null, null, null)), (l()(), t["\u0275and"](16777216, null, null, 1, null, f)), t["\u0275did"](3, 16384, null, 0, i.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(l, n) {
                    l(n, 3, 0, n.component.showRefLabels)
                }, function(l, n) {
                    var e = n.component;
                    l(n, 0, 0, e.transform(n.parent.context.$implicit.value)), l(n, 1, 0, e.gridLineWidth, e.gridLineTransform())
                })
            }

            function m(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 2, ":svg:g", [], null, null, null, null, null)), (l()(), t["\u0275and"](16777216, null, null, 1, null, p)), t["\u0275did"](2, 16384, null, 0, i.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(l, n) {
                    l(n, 2, 0, n.component.showRefLines)
                }, null)
            }

            function v(l) {
                return t["\u0275vid"](2, [t["\u0275qud"](402653184, 1, {
                    ticksElement: 0
                }), (l()(), t["\u0275eld"](1, 0, [
                    [1, 0],
                    ["ticksel", 1]
                ], null, 2, ":svg:g", [], null, null, null, null, null)), (l()(), t["\u0275and"](16777216, null, null, 1, null, u)), t["\u0275did"](3, 802816, null, 0, i.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                    ngForOf: [0, "ngForOf"]
                }, null), (l()(), t["\u0275and"](16777216, null, null, 1, null, c)), t["\u0275did"](5, 16384, null, 0, i.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), t["\u0275and"](16777216, null, null, 1, null, g)), t["\u0275did"](7, 802816, null, 0, i.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                    ngForOf: [0, "ngForOf"]
                }, null), (l()(), t["\u0275and"](16777216, null, null, 1, null, m)), t["\u0275did"](9, 802816, null, 0, i.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                    ngForOf: [0, "ngForOf"]
                }, null)], function(l, n) {
                    var e = n.component;
                    l(n, 3, 0, e.ticks), l(n, 5, 0, e.referenceLineLength > 1 && e.refMax && e.refMin && e.showRefLines), l(n, 7, 0, e.ticks), l(n, 9, 0, e.referenceLines)
                }, null)
            }
            var h = e("JCoh"),
                x = e("tb0z");
            e("k79+"), e.d(n, "a", function() {
                return b
            }), e.d(n, "b", function() {
                return k
            });
            var b = t["\u0275crt"]({
                encapsulation: 2,
                styles: [],
                data: {}
            });

            function y(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-y-axis-ticks", ""]
                ], null, [
                    [null, "dimensionsChanged"]
                ], function(l, n, e) {
                    var t = !0;
                    return "dimensionsChanged" === n && (t = !1 !== l.component.emitTicksWidth(e) && t), t
                }, v, o)), t["\u0275did"](1, 4767744, [
                    [1, 4]
                ], 0, a.a, [], {
                    scale: [0, "scale"],
                    orient: [1, "orient"],
                    tickArguments: [2, "tickArguments"],
                    tickValues: [3, "tickValues"],
                    tickStroke: [4, "tickStroke"],
                    tickFormatting: [5, "tickFormatting"],
                    showGridLines: [6, "showGridLines"],
                    gridLineWidth: [7, "gridLineWidth"],
                    height: [8, "height"],
                    referenceLines: [9, "referenceLines"],
                    showRefLabels: [10, "showRefLabels"],
                    showRefLines: [11, "showRefLines"]
                }, {
                    dimensionsChanged: "dimensionsChanged"
                })], function(l, n) {
                    var e = n.component;
                    l(n, 1, 1, [e.yScale, e.yOrient, e.tickArguments, e.ticks, e.tickStroke, e.tickFormatting, e.showGridLines, e.dims.width, e.dims.height, e.referenceLines, e.showRefLabels, e.showRefLines])
                }, null)
            }

            function w(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-axis-label", ""]
                ], null, null, null, h.b, h.a)), t["\u0275did"](1, 573440, null, 0, x.a, [t.ElementRef], {
                    orient: [0, "orient"],
                    label: [1, "label"],
                    offset: [2, "offset"],
                    width: [3, "width"],
                    height: [4, "height"]
                }, null)], function(l, n) {
                    var e = n.component;
                    l(n, 1, 0, e.yOrient, e.labelText, e.labelOffset, e.dims.width, e.dims.height)
                }, null)
            }

            function k(l) {
                return t["\u0275vid"](2, [t["\u0275qud"](671088640, 1, {
                    ticksComponent: 0
                }), (l()(), t["\u0275eld"](1, 0, null, null, 4, ":svg:g", [], [
                    [1, "class", 0],
                    [1, "transform", 0]
                ], null, null, null, null)), (l()(), t["\u0275and"](16777216, null, null, 1, null, y)), t["\u0275did"](3, 16384, null, 0, i.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), t["\u0275and"](16777216, null, null, 1, null, w)), t["\u0275did"](5, 16384, null, 0, i.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(l, n) {
                    var e = n.component;
                    l(n, 3, 0, e.yScale), l(n, 5, 0, e.showLabel)
                }, function(l, n) {
                    var e = n.component;
                    l(n, 1, 0, e.yAxisClassName, e.transform)
                })
            }
        },
        RRcI: function(l, n, e) {
            "use strict";
            var t = e("CcnG");
            e("lTBp"), e.d(n, "a", function() {
                return i
            }), e.d(n, "b", function() {
                return a
            });
            var i = t["\u0275crt"]({
                encapsulation: 0,
                styles: [
                    [".textDataLabel[_ngcontent-%COMP%]{font-size:11px}"]
                ],
                data: {}
            });

            function a(l) {
                return t["\u0275vid"](2, [(l()(), t["\u0275eld"](0, 0, null, null, 1, ":svg:text", [
                    ["alignment-baseline", "middle"],
                    ["class", "textDataLabel"]
                ], [
                    [1, "text-anchor", 0],
                    [1, "transform", 0],
                    [1, "x", 0],
                    [1, "y", 0]
                ], null, null, null, null)), (l()(), t["\u0275ted"](1, null, [" ", " "]))], null, function(l, n) {
                    var e = n.component;
                    l(n, 0, 0, e.textAnchor, e.transform, e.x, e.y), l(n, 1, 0, e.formatedValue)
                })
            }
        },
        Vug8: function(l, n, e) {
            "use strict";
            var t = e("CcnG"),
                i = e("B/s7"),
                a = e("ZYjt"),
                o = t["\u0275crt"]({
                    encapsulation: 2,
                    styles: [
                        [".chart-legend{display:inline-block;padding:0;width:auto!important}.chart-legend .scale-legend{text-align:center;display:flex;flex-direction:column}.chart-legend .scale-legend-wrap{display:inline-block;flex:1;width:30px;border-radius:5px;margin:0 auto}.chart-legend .scale-legend-label{font-size:12px}"]
                    ],
                    data: {}
                });

            function u(l) {
                return t["\u0275vid"](2, [(l()(), t["\u0275eld"](0, 0, null, null, 7, "div", [
                    ["class", "scale-legend"]
                ], [
                    [4, "height", "px"],
                    [4, "width", "px"]
                ], null, null, null, null)), (l()(), t["\u0275eld"](1, 0, null, null, 2, "div", [
                    ["class", "scale-legend-label"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](2, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), t["\u0275ted"](3, null, ["", ""])), (l()(), t["\u0275eld"](4, 0, null, null, 0, "div", [
                    ["class", "scale-legend-wrap"]
                ], [
                    [4, "background", null]
                ], null, null, null, null)), (l()(), t["\u0275eld"](5, 0, null, null, 2, "div", [
                    ["class", "scale-legend-label"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](6, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), t["\u0275ted"](7, null, ["", ""]))], null, function(l, n) {
                    var e = n.component;
                    l(n, 0, 0, e.height, e.width), l(n, 3, 0, e.valueRange[1].toLocaleString()), l(n, 4, 0, e.gradient), l(n, 7, 0, e.valueRange[0].toLocaleString())
                })
            }
            var c = e("vA3y"),
                r = t["\u0275crt"]({
                    encapsulation: 2,
                    styles: [],
                    data: {}
                });

            function s(l) {
                return t["\u0275vid"](2, [(l()(), t["\u0275eld"](0, 0, null, null, 3, "span", [
                    ["tabindex", "-1"]
                ], [
                    [8, "title", 0],
                    [2, "active", null]
                ], [
                    [null, "click"]
                ], function(l, n, e) {
                    var t = !0,
                        i = l.component;
                    return "click" === n && (t = !1 !== i.select.emit(i.formattedLabel) && t), t
                }, null, null)), (l()(), t["\u0275eld"](1, 0, null, null, 0, "span", [
                    ["class", "legend-label-color"]
                ], [
                    [4, "background-color", null]
                ], [
                    [null, "click"]
                ], function(l, n, e) {
                    var t = !0,
                        i = l.component;
                    return "click" === n && (t = !1 !== i.toggle.emit(i.formattedLabel) && t), t
                }, null, null)), (l()(), t["\u0275eld"](2, 0, null, null, 1, "span", [
                    ["class", "legend-label-text"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](3, null, [" ", " "]))], null, function(l, n) {
                    var e = n.component;
                    l(n, 0, 0, e.formattedLabel, e.isActive), l(n, 1, 0, e.color), l(n, 3, 0, e.trimmedLabel)
                })
            }
            var d = e("Ip0R"),
                g = e("wpkD"),
                f = t["\u0275crt"]({
                    encapsulation: 2,
                    styles: [
                        [".chart-legend{display:inline-block;padding:0;width:auto!important}.chart-legend .legend-title{white-space:nowrap;overflow:hidden;margin-left:10px;margin-bottom:5px;font-size:14px;font-weight:700}.chart-legend li,.chart-legend ul{padding:0;margin:0;list-style:none}.chart-legend .legend-wrap{width:calc(100% - 10px)}.chart-legend .legend-labels{line-height:85%;list-style:none;text-align:left;float:left;width:100%;border-radius:3px;overflow-y:auto;overflow-x:hidden;white-space:nowrap;background:rgba(0,0,0,.05)}.chart-legend .legend-label{cursor:pointer;font-size:90%;margin:8px;color:#afb7c8}.chart-legend .legend-label:hover{color:#000;transition:.2s}.chart-legend .legend-label .active .legend-label-text{color:#000}.chart-legend .legend-label-color{display:inline-block;height:15px;width:15px;margin-right:5px;color:#5b646b;border-radius:3px}.chart-legend .legend-label-text{display:inline-block;vertical-align:top;line-height:15px;font-size:12px;width:calc(100% - 20px);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.chart-legend .legend-title-text{vertical-align:bottom;display:inline-block;line-height:16px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}"]
                    ],
                    data: {}
                });

            function p(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 2, "header", [
                    ["class", "legend-title"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](1, 0, null, null, 1, "span", [
                    ["class", "legend-title-text"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](2, null, ["", ""]))], null, function(l, n) {
                    l(n, 2, 0, n.component.title)
                })
            }

            function m(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 2, "li", [
                    ["class", "legend-label"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](1, 0, null, null, 1, "ngx-charts-legend-entry", [], null, [
                    [null, "select"],
                    [null, "activate"],
                    [null, "deactivate"],
                    [null, "mouseenter"],
                    [null, "mouseleave"]
                ], function(l, n, e) {
                    var i = !0,
                        a = l.component;
                    return "mouseenter" === n && (i = !1 !== t["\u0275nov"](l, 2).onMouseEnter() && i), "mouseleave" === n && (i = !1 !== t["\u0275nov"](l, 2).onMouseLeave() && i), "select" === n && (i = !1 !== a.labelClick.emit(e) && i), "activate" === n && (i = !1 !== a.activate(e) && i), "deactivate" === n && (i = !1 !== a.deactivate(e) && i), i
                }, s, r)), t["\u0275did"](2, 49152, null, 0, c.a, [], {
                    color: [0, "color"],
                    label: [1, "label"],
                    formattedLabel: [2, "formattedLabel"],
                    isActive: [3, "isActive"]
                }, {
                    select: "select",
                    activate: "activate",
                    deactivate: "deactivate"
                })], function(l, n) {
                    l(n, 2, 0, n.context.$implicit.color, n.context.$implicit.label, n.context.$implicit.formattedLabel, n.component.isActive(n.context.$implicit))
                }, null)
            }

            function v(l) {
                return t["\u0275vid"](2, [(l()(), t["\u0275eld"](0, 0, null, null, 6, "div", [], [
                    [4, "width", "px"]
                ], null, null, null, null)), (l()(), t["\u0275and"](16777216, null, null, 1, null, p)), t["\u0275did"](2, 16384, null, 0, d.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), t["\u0275eld"](3, 0, null, null, 3, "div", [
                    ["class", "legend-wrap"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](4, 0, null, null, 2, "ul", [
                    ["class", "legend-labels"]
                ], [
                    [4, "max-height", "px"]
                ], null, null, null, null)), (l()(), t["\u0275and"](16777216, null, null, 1, null, m)), t["\u0275did"](6, 802816, null, 0, d.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                    ngForOf: [0, "ngForOf"],
                    ngForTrackBy: [1, "ngForTrackBy"]
                }, null)], function(l, n) {
                    var e = n.component;
                    l(n, 2, 0, (null == e.title ? null : e.title.length) > 0), l(n, 6, 0, e.legendEntries, e.trackBy)
                }, function(l, n) {
                    var e = n.component;
                    l(n, 0, 0, e.width), l(n, 4, 0, e.height - 45)
                })
            }
            e("k/Rj"), e("Se1k"), e("nJx2"), e.d(n, "a", function() {
                return h
            }), e.d(n, "b", function() {
                return y
            });
            var h = t["\u0275crt"]({
                encapsulation: 2,
                styles: [],
                data: {
                    animation: [{
                        type: 7,
                        name: "animationState",
                        definitions: [{
                            type: 1,
                            expr: ":enter",
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
                                timings: "500ms 100ms"
                            }],
                            options: null
                        }],
                        options: {}
                    }]
                }
            });

            function x(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 1, "ngx-charts-scale-legend", [
                    ["class", "chart-legend"]
                ], null, null, null, u, o)), t["\u0275did"](1, 573440, null, 0, i.a, [a.DomSanitizer], {
                    valueRange: [0, "valueRange"],
                    colors: [1, "colors"],
                    height: [2, "height"],
                    width: [3, "width"]
                }, null)], function(l, n) {
                    var e = n.component;
                    l(n, 1, 0, e.legendOptions.domain, e.legendOptions.colors, e.view[1], e.legendWidth)
                }, null)
            }

            function b(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 1, "ngx-charts-legend", [
                    ["class", "chart-legend"]
                ], null, [
                    [null, "labelClick"],
                    [null, "labelActivate"],
                    [null, "labelDeactivate"]
                ], function(l, n, e) {
                    var t = !0,
                        i = l.component;
                    return "labelClick" === n && (t = !1 !== i.legendLabelClick.emit(e) && t), "labelActivate" === n && (t = !1 !== i.legendLabelActivate.emit(e) && t), "labelDeactivate" === n && (t = !1 !== i.legendLabelDeactivate.emit(e) && t), t
                }, v, f)), t["\u0275did"](1, 573440, null, 0, g.a, [t.ChangeDetectorRef], {
                    data: [0, "data"],
                    title: [1, "title"],
                    colors: [2, "colors"],
                    height: [3, "height"],
                    width: [4, "width"],
                    activeEntries: [5, "activeEntries"]
                }, {
                    labelClick: "labelClick",
                    labelActivate: "labelActivate",
                    labelDeactivate: "labelDeactivate"
                })], function(l, n) {
                    var e = n.component;
                    l(n, 1, 0, e.legendOptions.domain, e.legendOptions.title, e.legendOptions.colors, e.view[1], e.legendWidth, e.activeEntries)
                }, null)
            }

            function y(l) {
                return t["\u0275vid"](2, [(l()(), t["\u0275eld"](0, 0, null, null, 6, "div", [
                    ["class", "ngx-charts-outer"]
                ], [
                    [4, "width", "px"],
                    [24, "@animationState", 0],
                    [24, "@.disabled", 0]
                ], null, null, null, null)), (l()(), t["\u0275eld"](1, 0, null, null, 1, ":svg:svg", [
                    ["class", "ngx-charts"]
                ], [
                    [1, "width", 0],
                    [1, "height", 0]
                ], null, null, null, null)), t["\u0275ncd"](null, 0), (l()(), t["\u0275and"](16777216, null, null, 1, null, x)), t["\u0275did"](4, 16384, null, 0, d.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), t["\u0275and"](16777216, null, null, 1, null, b)), t["\u0275did"](6, 16384, null, 0, d.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(l, n) {
                    var e = n.component;
                    l(n, 4, 0, e.showLegend && "scaleLegend" === e.legendType), l(n, 6, 0, e.showLegend && "legend" === e.legendType)
                }, function(l, n) {
                    var e = n.component;
                    l(n, 0, 0, e.view[0], "active", !e.animations), l(n, 1, 0, e.chartWidth, e.view[1])
                })
            }
        },
        Wnl8: function(l, n, e) {
            "use strict";
            e.d(n, "a", function() {
                return v
            }), e.d(n, "b", function() {
                return b
            });
            var t = e("8ubM"),
                i = e("CcnG"),
                a = e("AHdH"),
                o = e("Ywhj"),
                u = e("R+s0"),
                c = e("k79+"),
                r = e("Vug8"),
                s = e("k/Rj"),
                d = e("Se1k"),
                g = e("nJx2"),
                f = e("Ip0R"),
                p = e("Nx8C"),
                m = e("dP00"),
                v = (e("LKRB"), i["\u0275crt"]({
                    encapsulation: 2,
                    styles: [t.a],
                    data: {}
                }));

            function h(l) {
                return i["\u0275vid"](0, [(l()(), i["\u0275eld"](0, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-x-axis", ""]
                ], null, [
                    [null, "dimensionsChanged"]
                ], function(l, n, e) {
                    var t = !0;
                    return "dimensionsChanged" === n && (t = !1 !== l.component.updateXAxisHeight(e) && t), t
                }, a.b, a.a)), i["\u0275did"](1, 573440, null, 0, o.a, [], {
                    xScale: [0, "xScale"],
                    dims: [1, "dims"],
                    tickFormatting: [2, "tickFormatting"],
                    showLabel: [3, "showLabel"],
                    labelText: [4, "labelText"],
                    ticks: [5, "ticks"],
                    xAxisOffset: [6, "xAxisOffset"]
                }, {
                    dimensionsChanged: "dimensionsChanged"
                })], function(l, n) {
                    var e = n.component;
                    l(n, 1, 0, e.xScale, e.dims, e.xAxisTickFormatting, e.showXAxisLabel, e.xAxisLabel, e.xAxisTicks, e.dataLabelMaxHeight.negative)
                }, null)
            }

            function x(l) {
                return i["\u0275vid"](0, [(l()(), i["\u0275eld"](0, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-y-axis", ""]
                ], null, [
                    [null, "dimensionsChanged"]
                ], function(l, n, e) {
                    var t = !0;
                    return "dimensionsChanged" === n && (t = !1 !== l.component.updateYAxisWidth(e) && t), t
                }, u.b, u.a)), i["\u0275did"](1, 573440, null, 0, c.a, [], {
                    yScale: [0, "yScale"],
                    dims: [1, "dims"],
                    tickFormatting: [2, "tickFormatting"],
                    ticks: [3, "ticks"],
                    showGridLines: [4, "showGridLines"],
                    showLabel: [5, "showLabel"],
                    labelText: [6, "labelText"]
                }, {
                    dimensionsChanged: "dimensionsChanged"
                })], function(l, n) {
                    var e = n.component;
                    l(n, 1, 0, e.yScale, e.dims, e.yAxisTickFormatting, e.yAxisTicks, e.showGridLines, e.showYAxisLabel, e.yAxisLabel)
                }, null)
            }

            function b(l) {
                return i["\u0275vid"](2, [(l()(), i["\u0275eld"](0, 16777216, null, null, 10, "ngx-charts-chart", [], null, [
                    [null, "legendLabelClick"],
                    [null, "legendLabelActivate"],
                    [null, "legendLabelDeactivate"]
                ], function(l, n, e) {
                    var t = !0,
                        i = l.component;
                    return "legendLabelClick" === n && (t = !1 !== i.onClick(e) && t), "legendLabelActivate" === n && (t = !1 !== i.onActivate(e) && t), "legendLabelDeactivate" === n && (t = !1 !== i.onDeactivate(e) && t), t
                }, r.b, r.a)), i["\u0275prd"](512, null, s.a, s.a, [d.a]), i["\u0275did"](2, 573440, null, 0, g.a, [i.ViewContainerRef, s.a], {
                    view: [0, "view"],
                    showLegend: [1, "showLegend"],
                    legendOptions: [2, "legendOptions"],
                    activeEntries: [3, "activeEntries"],
                    animations: [4, "animations"]
                }, {
                    legendLabelClick: "legendLabelClick",
                    legendLabelActivate: "legendLabelActivate",
                    legendLabelDeactivate: "legendLabelDeactivate"
                }), i["\u0275pad"](3, 2), (l()(), i["\u0275eld"](4, 0, null, 0, 6, ":svg:g", [
                    ["class", "bar-chart chart"]
                ], [
                    [1, "transform", 0]
                ], null, null, null, null)), (l()(), i["\u0275and"](16777216, null, null, 1, null, h)), i["\u0275did"](6, 16384, null, 0, f.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), i["\u0275and"](16777216, null, null, 1, null, x)), i["\u0275did"](8, 16384, null, 0, f.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), i["\u0275eld"](9, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-series-vertical", ""]
                ], null, [
                    [null, "activate"],
                    [null, "deactivate"],
                    [null, "select"],
                    [null, "dataLabelHeightChanged"]
                ], function(l, n, e) {
                    var t = !0,
                        i = l.component;
                    return "activate" === n && (t = !1 !== i.onActivate(e) && t), "deactivate" === n && (t = !1 !== i.onDeactivate(e) && t), "select" === n && (t = !1 !== i.onClick(e) && t), "dataLabelHeightChanged" === n && (t = !1 !== i.onDataLabelMaxHeightChanged(e) && t), t
                }, p.b, p.a)), i["\u0275did"](10, 573440, null, 0, m.b, [], {
                    dims: [0, "dims"],
                    series: [1, "series"],
                    xScale: [2, "xScale"],
                    yScale: [3, "yScale"],
                    colors: [4, "colors"],
                    gradient: [5, "gradient"],
                    activeEntries: [6, "activeEntries"],
                    tooltipDisabled: [7, "tooltipDisabled"],
                    tooltipTemplate: [8, "tooltipTemplate"],
                    roundEdges: [9, "roundEdges"],
                    animations: [10, "animations"],
                    showDataLabel: [11, "showDataLabel"],
                    dataLabelFormatting: [12, "dataLabelFormatting"]
                }, {
                    select: "select",
                    activate: "activate",
                    deactivate: "deactivate",
                    dataLabelHeightChanged: "dataLabelHeightChanged"
                })], function(l, n) {
                    var e = n.component;
                    l(n, 2, 0, l(n, 3, 0, e.width, e.height), e.legend, e.legendOptions, e.activeEntries, e.animations), l(n, 6, 0, e.xAxis), l(n, 8, 0, e.yAxis), l(n, 10, 1, [e.dims, e.results, e.xScale, e.yScale, e.colors, e.gradient, e.activeEntries, e.tooltipDisabled, e.tooltipTemplate, e.roundEdges, e.animations, e.showDataLabel, e.dataLabelFormatting])
                }, function(l, n) {
                    l(n, 4, 0, n.component.transform)
                })
            }
        },
        Xy94: function(l, n, e) {
            "use strict";
            e.d(n, "a", function() {
                return o
            }), e.d(n, "b", function() {
                return u
            });
            var t = e("CcnG"),
                i = e("GEJo"),
                a = e("B4+B"),
                o = (e("MP4t"), t["\u0275crt"]({
                    encapsulation: 2,
                    styles: [],
                    data: {}
                }));

            function u(l) {
                return t["\u0275vid"](2, [(l()(), t["\u0275eld"](0, 0, null, null, 1, ":svg:g", [
                    ["class", "area-series"],
                    ["ngx-charts-area", ""]
                ], [
                    [2, "active", null],
                    [2, "inactive", null]
                ], null, null, i.b, i.a)), t["\u0275did"](1, 573440, null, 0, a.a, [t.ElementRef], {
                    data: [0, "data"],
                    path: [1, "path"],
                    startingPath: [2, "startingPath"],
                    fill: [3, "fill"],
                    opacity: [4, "opacity"],
                    gradient: [5, "gradient"],
                    stops: [6, "stops"],
                    animations: [7, "animations"]
                }, null)], function(l, n) {
                    var e = n.component;
                    l(n, 1, 0, e.data, e.path, e.startingPath, e.colors.getColor(e.data.name), e.opacity, e.gradient || e.hasGradient, e.gradientStops, e.animations)
                }, function(l, n) {
                    var e = n.component;
                    l(n, 0, 0, e.isActive(e.data), e.isInactive(e.data))
                })
            }
        },
        afy3: function(l, n, e) {
            "use strict";
            var t = e("8ubM"),
                i = e("CcnG"),
                a = e("Vug8"),
                o = e("k/Rj"),
                u = e("Se1k"),
                c = e("nJx2"),
                r = e("d91A"),
                s = e("NT8I");
            e("7lyt"), e.d(n, "a", function() {
                return d
            }), e.d(n, "b", function() {
                return g
            });
            var d = i["\u0275crt"]({
                encapsulation: 2,
                styles: [t.a, [".pie-label{font-size:11px}.pie-label.animation{-webkit-animation:750ms ease-in fadeIn;animation:750ms ease-in fadeIn}@-webkit-keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}.pie-label-line{stroke-dasharray:100%}.pie-label-line.animation{-webkit-animation:3s linear drawOut;animation:3s linear drawOut;transition:d 750ms}@-webkit-keyframes drawOut{from{stroke-dashoffset:100%}to{stroke-dashoffset:0}}@keyframes drawOut{from{stroke-dashoffset:100%}to{stroke-dashoffset:0}}"]],
                data: {}
            });

            function g(l) {
                return i["\u0275vid"](2, [(l()(), i["\u0275eld"](0, 16777216, null, null, 6, "ngx-charts-chart", [], null, [
                    [null, "legendLabelActivate"],
                    [null, "legendLabelDeactivate"],
                    [null, "legendLabelClick"]
                ], function(l, n, e) {
                    var t = !0,
                        i = l.component;
                    return "legendLabelActivate" === n && (t = !1 !== i.onActivate(e) && t), "legendLabelDeactivate" === n && (t = !1 !== i.onDeactivate(e) && t), "legendLabelClick" === n && (t = !1 !== i.onClick(e) && t), t
                }, a.b, a.a)), i["\u0275prd"](512, null, o.a, o.a, [u.a]), i["\u0275did"](2, 573440, null, 0, c.a, [i.ViewContainerRef, o.a], {
                    view: [0, "view"],
                    showLegend: [1, "showLegend"],
                    legendOptions: [2, "legendOptions"],
                    activeEntries: [3, "activeEntries"],
                    animations: [4, "animations"]
                }, {
                    legendLabelClick: "legendLabelClick",
                    legendLabelActivate: "legendLabelActivate",
                    legendLabelDeactivate: "legendLabelDeactivate"
                }), i["\u0275pad"](3, 2), (l()(), i["\u0275eld"](4, 0, null, 0, 2, ":svg:g", [
                    ["class", "pie-chart chart"]
                ], [
                    [1, "transform", 0]
                ], null, null, null, null)), (l()(), i["\u0275eld"](5, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-pie-series", ""]
                ], null, [
                    [null, "dblclick"],
                    [null, "select"],
                    [null, "activate"],
                    [null, "deactivate"]
                ], function(l, n, e) {
                    var t = !0,
                        i = l.component;
                    return "dblclick" === n && (t = !1 !== i.dblclick.emit(e) && t), "select" === n && (t = !1 !== i.onClick(e) && t), "activate" === n && (t = !1 !== i.onActivate(e) && t), "deactivate" === n && (t = !1 !== i.onDeactivate(e) && t), t
                }, r.b, r.a)), i["\u0275did"](6, 573440, null, 0, s.a, [], {
                    colors: [0, "colors"],
                    series: [1, "series"],
                    innerRadius: [2, "innerRadius"],
                    outerRadius: [3, "outerRadius"],
                    explodeSlices: [4, "explodeSlices"],
                    showLabels: [5, "showLabels"],
                    gradient: [6, "gradient"],
                    activeEntries: [7, "activeEntries"],
                    labelFormatting: [8, "labelFormatting"],
                    trimLabels: [9, "trimLabels"],
                    maxLabelLength: [10, "maxLabelLength"],
                    tooltipText: [11, "tooltipText"],
                    tooltipDisabled: [12, "tooltipDisabled"],
                    tooltipTemplate: [13, "tooltipTemplate"],
                    animations: [14, "animations"]
                }, {
                    select: "select",
                    activate: "activate",
                    deactivate: "deactivate",
                    dblclick: "dblclick"
                })], function(l, n) {
                    var e = n.component;
                    l(n, 2, 0, l(n, 3, 0, e.width, e.height), e.legend, e.legendOptions, e.activeEntries, e.animations), l(n, 6, 1, [e.colors, e.data, e.innerRadius, e.outerRadius, e.explodeSlices, e.labels, e.gradient, e.activeEntries, e.labelFormatting, e.trimLabels, e.maxLabelLength, e.tooltipText, e.tooltipDisabled, e.tooltipTemplate, e.animations])
                }, function(l, n) {
                    l(n, 4, 0, n.component.translation)
                })
            }
        },
        bmvy: function(l, n, e) {
            "use strict";
            e.d(n, "a", function() {
                return i
            }), e.d(n, "b", function() {
                return a
            });
            var t = e("CcnG"),
                i = (e("FfNM"), t["\u0275crt"]({
                    encapsulation: 2,
                    styles: [],
                    data: {}
                }));

            function a(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275ted"](0, null, ["", ""]))], null, function(l, n) {
                    l(n, 0, 0, n.component.value)
                })
            }
        },
        d91A: function(l, n, e) {
            "use strict";
            var t = e("CcnG"),
                i = e("8aVx"),
                a = t["\u0275crt"]({
                    encapsulation: 2,
                    styles: [],
                    data: {}
                });

            function o(l) {
                return t["\u0275vid"](2, [(l()(), t["\u0275eld"](0, 0, null, null, 1, "title", [], null, null, null, null, null)), (l()(), t["\u0275ted"](1, null, ["", ""])), (l()(), t["\u0275eld"](2, 0, null, null, 2, ":svg:g", [], [
                    [1, "transform", 0],
                    [4, "transform", null],
                    [4, "transition", null]
                ], null, null, null, null)), (l()(), t["\u0275eld"](3, 0, null, null, 1, ":svg:text", [
                    ["class", "pie-label"],
                    ["dy", ".35em"]
                ], [
                    [2, "animation", null],
                    [4, "textAnchor", null],
                    [4, "shapeRendering", null]
                ], null, null, null, null)), (l()(), t["\u0275ted"](4, null, [" ", " "])), (l()(), t["\u0275eld"](5, 0, null, null, 0, ":svg:path", [
                    ["class", "pie-label-line line"],
                    ["fill", "none"]
                ], [
                    [1, "d", 0],
                    [1, "stroke", 0],
                    [2, "animation", null]
                ], null, null, null, null))], null, function(l, n) {
                    var e = n.component;
                    l(n, 1, 0, e.label), l(n, 2, 0, e.attrTransform, e.styleTransform, e.textTransition), l(n, 3, 0, e.animations, e.textAnchor(), "crispEdges"), l(n, 4, 0, e.labelTrim ? e.trimLabel(e.label, e.labelTrimSize) : e.label), l(n, 5, 0, e.line, e.color, e.animations)
                })
            }
            var u = e("Ip0R"),
                c = e("7W4y"),
                r = e("+vzl"),
                s = e("k/Rj"),
                d = e("J6WN");
            e("NT8I"), e.d(n, "a", function() {
                return g
            }), e.d(n, "b", function() {
                return m
            });
            var g = t["\u0275crt"]({
                encapsulation: 2,
                styles: [],
                data: {}
            });

            function f(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-pie-label", ""]
                ], null, null, null, o, a)), t["\u0275did"](1, 573440, null, 0, i.a, [], {
                    data: [0, "data"],
                    radius: [1, "radius"],
                    label: [2, "label"],
                    color: [3, "color"],
                    max: [4, "max"],
                    value: [5, "value"],
                    explodeSlices: [6, "explodeSlices"],
                    animations: [7, "animations"],
                    labelTrim: [8, "labelTrim"],
                    labelTrimSize: [9, "labelTrimSize"]
                }, null)], function(l, n) {
                    var e = n.component;
                    l(n, 1, 0, n.parent.context.$implicit, e.outerRadius, e.labelText(n.parent.context.$implicit), e.color(n.parent.context.$implicit), e.max, n.parent.context.$implicit.value, e.explodeSlices, e.animations, e.trimLabels, e.maxLabelLength)
                }, null)
            }

            function p(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 5, ":svg:g", [], null, null, null, null, null)), (l()(), t["\u0275and"](16777216, null, null, 1, null, f)), t["\u0275did"](2, 16384, null, 0, u.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), t["\u0275eld"](3, 16777216, null, null, 2, ":svg:g", [
                    ["ngx-charts-pie-arc", ""],
                    ["ngx-tooltip", ""]
                ], null, [
                    [null, "select"],
                    [null, "activate"],
                    [null, "deactivate"],
                    [null, "dblclick"],
                    [null, "focusin"],
                    [null, "blur"],
                    [null, "mouseenter"],
                    [null, "mouseleave"],
                    [null, "click"]
                ], function(l, n, e) {
                    var i = !0,
                        a = l.component;
                    return "focusin" === n && (i = !1 !== t["\u0275nov"](l, 4).onFocus() && i), "blur" === n && (i = !1 !== t["\u0275nov"](l, 4).onBlur() && i), "mouseenter" === n && (i = !1 !== t["\u0275nov"](l, 4).onMouseEnter() && i), "mouseleave" === n && (i = !1 !== t["\u0275nov"](l, 4).onMouseLeave(e.target) && i), "click" === n && (i = !1 !== t["\u0275nov"](l, 4).onMouseClick() && i), "select" === n && (i = !1 !== a.onClick(e) && i), "activate" === n && (i = !1 !== a.activate.emit(e) && i), "deactivate" === n && (i = !1 !== a.deactivate.emit(e) && i), "dblclick" === n && (i = !1 !== a.dblclick.emit(e) && i), i
                }, c.b, c.a)), t["\u0275did"](4, 147456, null, 0, r.a, [s.a, t.ViewContainerRef, t.Renderer], {
                    tooltipTitle: [0, "tooltipTitle"],
                    tooltipDisabled: [1, "tooltipDisabled"],
                    tooltipPlacement: [2, "tooltipPlacement"],
                    tooltipType: [3, "tooltipType"],
                    tooltipTemplate: [4, "tooltipTemplate"],
                    tooltipContext: [5, "tooltipContext"]
                }, null), t["\u0275did"](5, 573440, null, 0, d.a, [t.ElementRef], {
                    fill: [0, "fill"],
                    startAngle: [1, "startAngle"],
                    endAngle: [2, "endAngle"],
                    innerRadius: [3, "innerRadius"],
                    outerRadius: [4, "outerRadius"],
                    value: [5, "value"],
                    max: [6, "max"],
                    data: [7, "data"],
                    explodeSlices: [8, "explodeSlices"],
                    gradient: [9, "gradient"],
                    animate: [10, "animate"],
                    isActive: [11, "isActive"]
                }, {
                    select: "select",
                    activate: "activate",
                    deactivate: "deactivate",
                    dblclick: "dblclick"
                })], function(l, n) {
                    var e = n.component;
                    l(n, 2, 0, e.labelVisible(n.context.$implicit)), l(n, 4, 0, e.getTooltipTitle(n.context.$implicit), e.tooltipDisabled, "top", "tooltip", e.tooltipTemplate, n.context.$implicit.data), l(n, 5, 1, [e.color(n.context.$implicit), n.context.$implicit.startAngle, n.context.$implicit.endAngle, e.innerRadius, e.outerRadius, n.context.$implicit.data.value, e.max, n.context.$implicit.data, e.explodeSlices, e.gradient, e.animations, e.isActive(n.context.$implicit.data)])
                }, null)
            }

            function m(l) {
                return t["\u0275vid"](2, [(l()(), t["\u0275and"](16777216, null, null, 1, null, p)), t["\u0275did"](1, 802816, null, 0, u.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                    ngForOf: [0, "ngForOf"],
                    ngForTrackBy: [1, "ngForTrackBy"]
                }, null)], function(l, n) {
                    var e = n.component;
                    l(n, 1, 0, e.data, e.trackBy)
                }, null)
            }
        },
        e5Md: function(l, n, e) {
            "use strict";
            var t = e("8ubM"),
                i = e("CcnG"),
                a = e("AHdH"),
                o = e("Ywhj"),
                u = e("R+s0"),
                c = e("k79+"),
                r = e("I3BX"),
                s = e("IU+9"),
                d = e("GEJo"),
                g = e("B4+B"),
                f = e("Ip0R"),
                p = e("Qb23"),
                m = i["\u0275crt"]({
                    encapsulation: 2,
                    styles: [],
                    data: {
                        animation: [{
                            type: 7,
                            name: "animationState",
                            definitions: [{
                                type: 1,
                                expr: ":enter",
                                animation: [{
                                    type: 6,
                                    styles: {
                                        strokeDasharray: 2e3,
                                        strokeDashoffset: 2e3
                                    },
                                    offset: null
                                }, {
                                    type: 4,
                                    styles: {
                                        type: 6,
                                        styles: {
                                            strokeDashoffset: 0
                                        },
                                        offset: null
                                    },
                                    timings: 1e3
                                }],
                                options: null
                            }],
                            options: {}
                        }]
                    }
                });

            function v(l) {
                return i["\u0275vid"](2, [(l()(), i["\u0275eld"](0, 0, null, null, 0, ":svg:path", [
                    ["class", "line"],
                    ["stroke-width", "1.5px"]
                ], [
                    [24, "@animationState", 0],
                    [1, "d", 0],
                    [1, "fill", 0],
                    [1, "stroke", 0]
                ], null, null, null, null))], null, function(l, n) {
                    var e = n.component;
                    l(n, 0, 0, "active", e.initialPath, e.fill, e.stroke)
                })
            }
            var h = e("oAiE"),
                x = i["\u0275crt"]({
                    encapsulation: 2,
                    styles: [],
                    data: {}
                });

            function b(l) {
                return i["\u0275vid"](0, [(l()(), i["\u0275eld"](0, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-svg-linear-gradient", ""],
                    ["orientation", "vertical"]
                ], null, null, null, r.b, r.a)), i["\u0275did"](1, 573440, null, 0, s.a, [], {
                    orientation: [0, "orientation"],
                    name: [1, "name"],
                    stops: [2, "stops"]
                }, null)], function(l, n) {
                    var e = n.component;
                    l(n, 1, 0, "vertical", e.gradientId, e.gradientStops)
                }, null)
            }

            function y(l) {
                return i["\u0275vid"](0, [(l()(), i["\u0275eld"](0, 0, null, null, 1, ":svg:g", [
                    ["class", "line-series-range"],
                    ["ngx-charts-area", ""]
                ], [
                    [2, "active", null],
                    [2, "inactive", null]
                ], null, null, d.b, d.a)), i["\u0275did"](1, 573440, null, 0, g.a, [i.ElementRef], {
                    data: [0, "data"],
                    path: [1, "path"],
                    fill: [2, "fill"],
                    opacity: [3, "opacity"],
                    animations: [4, "animations"]
                }, null)], function(l, n) {
                    var e = n.component;
                    l(n, 1, 0, e.data, e.outerPath, e.hasGradient ? e.gradientUrl : e.colors.getColor(e.data.name), e.rangeFillOpacity, e.animations)
                }, function(l, n) {
                    var e = n.component;
                    l(n, 0, 0, e.isActive(e.data), e.isInactive(e.data))
                })
            }

            function w(l) {
                return i["\u0275vid"](2, [(l()(), i["\u0275eld"](0, 0, null, null, 9, ":svg:g", [], null, null, null, null, null)), (l()(), i["\u0275eld"](1, 0, null, null, 2, ":svg:defs", [], null, null, null, null, null)), (l()(), i["\u0275and"](16777216, null, null, 1, null, b)), i["\u0275did"](3, 16384, null, 0, f.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), i["\u0275eld"](4, 0, null, null, 1, ":svg:g", [
                    ["class", "line-highlight"],
                    ["ngx-charts-area", ""]
                ], [
                    [2, "active", null],
                    [2, "inactive", null]
                ], null, null, d.b, d.a)), i["\u0275did"](5, 573440, null, 0, g.a, [i.ElementRef], {
                    data: [0, "data"],
                    path: [1, "path"],
                    fill: [2, "fill"],
                    opacity: [3, "opacity"],
                    startOpacity: [4, "startOpacity"],
                    gradient: [5, "gradient"],
                    stops: [6, "stops"],
                    animations: [7, "animations"]
                }, null), (l()(), i["\u0275eld"](6, 0, null, null, 1, ":svg:g", [
                    ["class", "line-series"],
                    ["ngx-charts-line", ""]
                ], [
                    [2, "active", null],
                    [2, "inactive", null]
                ], null, null, v, m)), i["\u0275did"](7, 573440, null, 0, p.a, [i.ElementRef], {
                    path: [0, "path"],
                    stroke: [1, "stroke"],
                    data: [2, "data"],
                    animations: [3, "animations"]
                }, null), (l()(), i["\u0275and"](16777216, null, null, 1, null, y)), i["\u0275did"](9, 16384, null, 0, f.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(l, n) {
                    var e = n.component;
                    l(n, 3, 0, e.hasGradient), l(n, 5, 0, e.data, e.areaPath, e.hasGradient ? e.gradientUrl : e.colors.getColor(e.data.name), .25, 0, !0, e.areaGradientStops, e.animations), l(n, 7, 0, e.path, e.stroke, e.data, e.animations), l(n, 9, 0, e.hasRange)
                }, function(l, n) {
                    var e = n.component;
                    l(n, 4, 0, e.isActive(e.data), e.isInactive(e.data)), l(n, 6, 0, e.isActive(e.data), e.isInactive(e.data))
                })
            }
            var k = e("ek82"),
                T = e("t6FG"),
                R = e("Mkm6"),
                C = e("H8yg"),
                L = e("QoYF"),
                I = e("U3KO"),
                F = e("Vug8"),
                S = e("k/Rj"),
                A = e("Se1k"),
                D = e("nJx2");
            e("l/X3"), e.d(n, "a", function() {
                return O
            }), e.d(n, "b", function() {
                return H
            });
            var O = i["\u0275crt"]({
                encapsulation: 2,
                styles: [t.a],
                data: {
                    animation: [{
                        type: 7,
                        name: "animationState",
                        definitions: [{
                            type: 1,
                            expr: ":leave",
                            animation: [{
                                type: 6,
                                styles: {
                                    opacity: 1
                                },
                                offset: null
                            }, {
                                type: 4,
                                styles: {
                                    type: 6,
                                    styles: {
                                        opacity: 0
                                    },
                                    offset: null
                                },
                                timings: 500
                            }],
                            options: null
                        }],
                        options: {}
                    }]
                }
            });

            function V(l) {
                return i["\u0275vid"](0, [(l()(), i["\u0275eld"](0, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-x-axis", ""]
                ], null, [
                    [null, "dimensionsChanged"]
                ], function(l, n, e) {
                    var t = !0;
                    return "dimensionsChanged" === n && (t = !1 !== l.component.updateXAxisHeight(e) && t), t
                }, a.b, a.a)), i["\u0275did"](1, 573440, null, 0, o.a, [], {
                    xScale: [0, "xScale"],
                    dims: [1, "dims"],
                    tickFormatting: [2, "tickFormatting"],
                    showGridLines: [3, "showGridLines"],
                    showLabel: [4, "showLabel"],
                    labelText: [5, "labelText"],
                    ticks: [6, "ticks"]
                }, {
                    dimensionsChanged: "dimensionsChanged"
                })], function(l, n) {
                    var e = n.component;
                    l(n, 1, 0, e.xScale, e.dims, e.xAxisTickFormatting, e.showGridLines, e.showXAxisLabel, e.xAxisLabel, e.xAxisTicks)
                }, null)
            }

            function E(l) {
                return i["\u0275vid"](0, [(l()(), i["\u0275eld"](0, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-y-axis", ""]
                ], null, [
                    [null, "dimensionsChanged"]
                ], function(l, n, e) {
                    var t = !0;
                    return "dimensionsChanged" === n && (t = !1 !== l.component.updateYAxisWidth(e) && t), t
                }, u.b, u.a)), i["\u0275did"](1, 573440, null, 0, c.a, [], {
                    yScale: [0, "yScale"],
                    dims: [1, "dims"],
                    tickFormatting: [2, "tickFormatting"],
                    ticks: [3, "ticks"],
                    showGridLines: [4, "showGridLines"],
                    showLabel: [5, "showLabel"],
                    labelText: [6, "labelText"],
                    referenceLines: [7, "referenceLines"],
                    showRefLines: [8, "showRefLines"],
                    showRefLabels: [9, "showRefLabels"]
                }, {
                    dimensionsChanged: "dimensionsChanged"
                })], function(l, n) {
                    var e = n.component;
                    l(n, 1, 0, e.yScale, e.dims, e.yAxisTickFormatting, e.yAxisTicks, e.showGridLines, e.showYAxisLabel, e.yAxisLabel, e.referenceLines, e.showRefLines, e.showRefLabels)
                }, null)
            }

            function N(l) {
                return i["\u0275vid"](0, [(l()(), i["\u0275eld"](0, 0, null, null, 2, ":svg:g", [], [
                    [24, "@animationState", 0]
                ], null, null, null, null)), (l()(), i["\u0275eld"](1, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-line-series", ""]
                ], null, null, null, w, x)), i["\u0275did"](2, 573440, null, 0, h.a, [], {
                    data: [0, "data"],
                    xScale: [1, "xScale"],
                    yScale: [2, "yScale"],
                    colors: [3, "colors"],
                    scaleType: [4, "scaleType"],
                    curve: [5, "curve"],
                    activeEntries: [6, "activeEntries"],
                    rangeFillOpacity: [7, "rangeFillOpacity"],
                    hasRange: [8, "hasRange"],
                    animations: [9, "animations"]
                }, null)], function(l, n) {
                    var e = n.component;
                    l(n, 2, 0, n.context.$implicit, e.xScale, e.yScale, e.colors, e.scaleType, e.curve, e.activeEntries, e.rangeFillOpacity, e.hasRange, e.animations)
                }, function(l, n) {
                    l(n, 0, 0, "active")
                })
            }

            function $(l) {
                return i["\u0275vid"](0, [(l()(), i["\u0275eld"](0, 0, null, null, 2, ":svg:g", [], null, null, null, null, null)), (l()(), i["\u0275eld"](1, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-circle-series", ""]
                ], null, [
                    [null, "select"],
                    [null, "activate"],
                    [null, "deactivate"]
                ], function(l, n, e) {
                    var t = !0,
                        i = l.component;
                    return "select" === n && (t = !1 !== i.onClick(e, l.context.$implicit) && t), "activate" === n && (t = !1 !== i.onActivate(e) && t), "deactivate" === n && (t = !1 !== i.onDeactivate(e) && t), t
                }, k.b, k.a)), i["\u0275did"](2, 638976, null, 0, T.a, [], {
                    data: [0, "data"],
                    xScale: [1, "xScale"],
                    yScale: [2, "yScale"],
                    colors: [3, "colors"],
                    scaleType: [4, "scaleType"],
                    visibleValue: [5, "visibleValue"],
                    activeEntries: [6, "activeEntries"],
                    tooltipDisabled: [7, "tooltipDisabled"],
                    tooltipTemplate: [8, "tooltipTemplate"]
                }, {
                    select: "select",
                    activate: "activate",
                    deactivate: "deactivate"
                })], function(l, n) {
                    var e = n.component;
                    l(n, 2, 0, n.context.$implicit, e.xScale, e.yScale, e.colors, e.scaleType, e.hoveredVertical, e.activeEntries, e.tooltipDisabled, e.tooltipTemplate)
                }, null)
            }

            function G(l) {
                return i["\u0275vid"](0, [(l()(), i["\u0275eld"](0, 0, null, null, 4, ":svg:g", [], null, [
                    [null, "mouseleave"]
                ], function(l, n, e) {
                    var t = !0;
                    return "mouseleave" === n && (t = !1 !== l.component.hideCircles() && t), t
                }, null, null)), (l()(), i["\u0275eld"](1, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-tooltip-area", ""]
                ], null, [
                    [null, "hover"]
                ], function(l, n, e) {
                    var t = !0;
                    return "hover" === n && (t = !1 !== l.component.updateHoveredVertical(e) && t), t
                }, R.b, R.a)), i["\u0275did"](2, 49152, null, 0, C.a, [i.Renderer], {
                    dims: [0, "dims"],
                    xSet: [1, "xSet"],
                    xScale: [2, "xScale"],
                    yScale: [3, "yScale"],
                    results: [4, "results"],
                    colors: [5, "colors"],
                    tooltipDisabled: [6, "tooltipDisabled"],
                    tooltipTemplate: [7, "tooltipTemplate"]
                }, {
                    hover: "hover"
                }), (l()(), i["\u0275and"](16777216, null, null, 1, null, $)), i["\u0275did"](4, 802816, null, 0, f.NgForOf, [i.ViewContainerRef, i.TemplateRef, i.IterableDiffers], {
                    ngForOf: [0, "ngForOf"]
                }, null)], function(l, n) {
                    var e = n.component;
                    l(n, 2, 0, e.dims, e.xSet, e.xScale, e.yScale, e.results, e.colors, e.tooltipDisabled, e.seriesTooltipTemplate), l(n, 4, 0, e.results)
                }, null)
            }

            function B(l) {
                return i["\u0275vid"](0, [(l()(), i["\u0275eld"](0, 0, null, null, 2, ":svg:g", [], null, null, null, null, null)), (l()(), i["\u0275eld"](1, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-line-series", ""]
                ], null, null, null, w, x)), i["\u0275did"](2, 573440, null, 0, h.a, [], {
                    data: [0, "data"],
                    xScale: [1, "xScale"],
                    yScale: [2, "yScale"],
                    colors: [3, "colors"],
                    scaleType: [4, "scaleType"],
                    curve: [5, "curve"],
                    hasRange: [6, "hasRange"],
                    animations: [7, "animations"]
                }, null)], function(l, n) {
                    var e = n.component;
                    l(n, 2, 0, n.context.$implicit, e.timelineXScale, e.timelineYScale, e.colors, e.scaleType, e.curve, e.hasRange, e.animations)
                }, null)
            }

            function M(l) {
                return i["\u0275vid"](0, [(l()(), i["\u0275eld"](0, 0, null, null, 4, ":svg:g", [
                    ["ngx-charts-timeline", ""]
                ], [
                    [1, "transform", 0]
                ], [
                    [null, "onDomainChange"]
                ], function(l, n, e) {
                    var t = !0;
                    return "onDomainChange" === n && (t = !1 !== l.component.updateDomain(e) && t), t
                }, L.b, L.a)), i["\u0275did"](1, 573440, null, 0, I.a, [i.ElementRef, i.ChangeDetectorRef], {
                    view: [0, "view"],
                    results: [1, "results"],
                    scheme: [2, "scheme"],
                    customColors: [3, "customColors"],
                    legend: [4, "legend"],
                    scaleType: [5, "scaleType"],
                    height: [6, "height"]
                }, {
                    onDomainChange: "onDomainChange"
                }), i["\u0275pad"](2, 2), (l()(), i["\u0275and"](16777216, null, 0, 1, null, B)), i["\u0275did"](4, 802816, null, 0, f.NgForOf, [i.ViewContainerRef, i.TemplateRef, i.IterableDiffers], {
                    ngForOf: [0, "ngForOf"],
                    ngForTrackBy: [1, "ngForTrackBy"]
                }, null)], function(l, n) {
                    var e = n.component;
                    l(n, 1, 0, l(n, 2, 0, e.timelineWidth, e.height), e.results, e.scheme, e.customColors, e.legend, e.scaleType, e.timelineHeight), l(n, 4, 0, e.results, e.trackBy)
                }, function(l, n) {
                    l(n, 0, 0, n.component.timelineTransform)
                })
            }

            function H(l) {
                return i["\u0275vid"](2, [(l()(), i["\u0275eld"](0, 16777216, null, null, 18, "ngx-charts-chart", [], null, [
                    [null, "legendLabelClick"],
                    [null, "legendLabelActivate"],
                    [null, "legendLabelDeactivate"]
                ], function(l, n, e) {
                    var t = !0,
                        i = l.component;
                    return "legendLabelClick" === n && (t = !1 !== i.onClick(e) && t), "legendLabelActivate" === n && (t = !1 !== i.onActivate(e) && t), "legendLabelDeactivate" === n && (t = !1 !== i.onDeactivate(e) && t), t
                }, F.b, F.a)), i["\u0275prd"](512, null, S.a, S.a, [A.a]), i["\u0275did"](2, 573440, null, 0, D.a, [i.ViewContainerRef, S.a], {
                    view: [0, "view"],
                    showLegend: [1, "showLegend"],
                    legendOptions: [2, "legendOptions"],
                    activeEntries: [3, "activeEntries"],
                    animations: [4, "animations"]
                }, {
                    legendLabelClick: "legendLabelClick",
                    legendLabelActivate: "legendLabelActivate",
                    legendLabelDeactivate: "legendLabelDeactivate"
                }), i["\u0275pad"](3, 2), (l()(), i["\u0275eld"](4, 0, null, 0, 2, ":svg:defs", [], null, null, null, null, null)), (l()(), i["\u0275eld"](5, 0, null, null, 1, ":svg:clipPath", [], [
                    [1, "id", 0]
                ], null, null, null, null)), (l()(), i["\u0275eld"](6, 0, null, null, 0, ":svg:rect", [], [
                    [1, "width", 0],
                    [1, "height", 0],
                    [1, "transform", 0]
                ], null, null, null, null)), (l()(), i["\u0275eld"](7, 0, null, 0, 9, ":svg:g", [
                    ["class", "line-chart chart"]
                ], [
                    [1, "transform", 0]
                ], null, null, null, null)), (l()(), i["\u0275and"](16777216, null, null, 1, null, V)), i["\u0275did"](9, 16384, null, 0, f.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), i["\u0275and"](16777216, null, null, 1, null, E)), i["\u0275did"](11, 16384, null, 0, f.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), i["\u0275eld"](12, 0, null, null, 4, ":svg:g", [], [
                    [1, "clip-path", 0]
                ], null, null, null, null)), (l()(), i["\u0275and"](16777216, null, null, 1, null, N)), i["\u0275did"](14, 802816, null, 0, f.NgForOf, [i.ViewContainerRef, i.TemplateRef, i.IterableDiffers], {
                    ngForOf: [0, "ngForOf"],
                    ngForTrackBy: [1, "ngForTrackBy"]
                }, null), (l()(), i["\u0275and"](16777216, null, null, 1, null, G)), i["\u0275did"](16, 16384, null, 0, f.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), i["\u0275and"](16777216, null, 0, 1, null, M)), i["\u0275did"](18, 16384, null, 0, f.NgIf, [i.ViewContainerRef, i.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(l, n) {
                    var e = n.component;
                    l(n, 2, 0, l(n, 3, 0, e.width, e.height), e.legend, e.legendOptions, e.activeEntries, e.animations), l(n, 9, 0, e.xAxis), l(n, 11, 0, e.yAxis), l(n, 14, 0, e.results, e.trackBy), l(n, 16, 0, !e.tooltipDisabled), l(n, 18, 0, e.timeline && "ordinal" != e.scaleType)
                }, function(l, n) {
                    var e = n.component;
                    l(n, 5, 0, e.clipPathId), l(n, 6, 0, e.dims.width + 10, e.dims.height + 10, "translate(-5, -5)"), l(n, 7, 0, e.transform), l(n, 12, 0, e.clipPath)
                })
            }
        },
        ek82: function(l, n, e) {
            "use strict";
            var t = e("CcnG"),
                i = e("I3BX"),
                a = e("IU+9"),
                o = e("Ip0R"),
                u = e("NL3J"),
                c = t["\u0275crt"]({
                    encapsulation: 2,
                    styles: [],
                    data: {}
                });

            function r(l) {
                return t["\u0275vid"](2, [(l()(), t["\u0275eld"](0, 0, null, null, 0, ":svg:circle", [], [
                    [1, "cx", 0],
                    [1, "cy", 0],
                    [1, "r", 0],
                    [1, "fill", 0],
                    [1, "stroke", 0],
                    [1, "opacity", 0],
                    [1, "class", 0],
                    [1, "pointer-events", 0]
                ], null, null, null, null))], null, function(l, n) {
                    var e = n.component;
                    l(n, 0, 0, e.cx, e.cy, e.r, e.fill, e.stroke, e.circleOpacity, e.classNames, e.pointerEvents)
                })
            }
            var s = e("+vzl"),
                d = e("k/Rj");
            e("t6FG"), e.d(n, "a", function() {
                return g
            }), e.d(n, "b", function() {
                return m
            });
            var g = t["\u0275crt"]({
                encapsulation: 2,
                styles: [],
                data: {
                    animation: [{
                        type: 7,
                        name: "animationState",
                        definitions: [{
                            type: 1,
                            expr: ":enter",
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
                                timings: 250
                            }],
                            options: null
                        }],
                        options: {}
                    }]
                }
            });

            function f(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 0, ":svg:rect", [
                    ["class", "tooltip-bar"]
                ], [
                    [24, "@animationState", 0],
                    [1, "x", 0],
                    [1, "y", 0],
                    [1, "width", 0],
                    [1, "height", 0],
                    [1, "fill", 0]
                ], null, null, null, null))], null, function(l, n) {
                    var e = n.component;
                    l(n, 0, 0, "active", e.circle.cx - e.circle.radius, e.circle.cy, 2 * e.circle.radius, e.circle.height, e.gradientFill)
                })
            }

            function p(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 9, ":svg:g", [], null, null, null, null, null)), (l()(), t["\u0275eld"](1, 0, null, null, 2, ":svg:defs", [], null, null, null, null, null)), (l()(), t["\u0275eld"](2, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-svg-linear-gradient", ""],
                    ["orientation", "vertical"]
                ], null, null, null, i.b, i.a)), t["\u0275did"](3, 573440, null, 0, a.a, [], {
                    orientation: [0, "orientation"],
                    name: [1, "name"],
                    stops: [2, "stops"]
                }, null), (l()(), t["\u0275and"](16777216, null, null, 1, null, f)), t["\u0275did"](5, 16384, null, 0, o.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), t["\u0275eld"](6, 16777216, null, null, 3, ":svg:g", [
                    ["class", "circle"],
                    ["ngx-charts-circle", ""],
                    ["ngx-tooltip", ""]
                ], [
                    [2, "active", null]
                ], [
                    [null, "select"],
                    [null, "activate"],
                    [null, "deactivate"],
                    [null, "focusin"],
                    [null, "blur"],
                    [null, "mouseenter"],
                    [null, "mouseleave"],
                    [null, "click"]
                ], function(l, n, e) {
                    var i = !0,
                        a = l.component;
                    return "focusin" === n && (i = !1 !== t["\u0275nov"](l, 7).onFocus() && i), "blur" === n && (i = !1 !== t["\u0275nov"](l, 7).onBlur() && i), "mouseenter" === n && (i = !1 !== t["\u0275nov"](l, 7).onMouseEnter() && i), "mouseleave" === n && (i = !1 !== t["\u0275nov"](l, 7).onMouseLeave(e.target) && i), "click" === n && (i = !1 !== t["\u0275nov"](l, 7).onMouseClick() && i), "click" === n && (i = !1 !== t["\u0275nov"](l, 8).onClick() && i), "mouseenter" === n && (i = !1 !== t["\u0275nov"](l, 8).onMouseEnter() && i), "mouseleave" === n && (i = !1 !== t["\u0275nov"](l, 8).onMouseLeave() && i), "select" === n && (i = !1 !== a.onClick(e, a.circle.label) && i), "activate" === n && (i = !1 !== a.activateCircle() && i), "deactivate" === n && (i = !1 !== a.deactivateCircle() && i), i
                }, r, c)), t["\u0275did"](7, 147456, null, 0, s.a, [d.a, t.ViewContainerRef, t.Renderer], {
                    tooltipTitle: [0, "tooltipTitle"],
                    tooltipDisabled: [1, "tooltipDisabled"],
                    tooltipPlacement: [2, "tooltipPlacement"],
                    tooltipType: [3, "tooltipType"],
                    tooltipTemplate: [4, "tooltipTemplate"],
                    tooltipContext: [5, "tooltipContext"]
                }, null), t["\u0275did"](8, 573440, null, 0, u.a, [], {
                    cx: [0, "cx"],
                    cy: [1, "cy"],
                    r: [2, "r"],
                    fill: [3, "fill"],
                    data: [4, "data"],
                    classNames: [5, "classNames"],
                    pointerEvents: [6, "pointerEvents"]
                }, {
                    select: "select",
                    activate: "activate",
                    deactivate: "deactivate"
                }), t["\u0275pod"](9, {
                    name: 0
                })], function(l, n) {
                    var e = n.component;
                    l(n, 3, 0, "vertical", e.gradientId, e.circle.gradientStops), l(n, 5, 0, e.barVisible && "standard" === e.type), l(n, 7, 0, e.tooltipTemplate ? void 0 : e.getTooltipText(e.circle), e.tooltipDisabled, "top", "tooltip", e.tooltipTemplate, e.circle.data), l(n, 8, 0, e.circle.cx, e.circle.cy, e.circle.radius, e.circle.color, e.circle.value, e.circle.classNames, 0 === e.circle.value ? "none" : "all")
                }, function(l, n) {
                    var e = n.component;
                    l(n, 6, 0, e.isActive(l(n, 9, 0, e.circle.seriesName)))
                })
            }

            function m(l) {
                return t["\u0275vid"](2, [(l()(), t["\u0275and"](16777216, null, null, 1, null, p)), t["\u0275did"](1, 16384, null, 0, o.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(l, n) {
                    l(n, 1, 0, n.component.circle)
                }, null)
            }
        },
        yH0T: function(l, n, e) {
            "use strict";
            e.d(n, "a", function() {
                return u
            }), e.d(n, "b", function() {
                return r
            });
            var t = e("CcnG"),
                i = e("I3BX"),
                a = e("IU+9"),
                o = e("Ip0R"),
                u = (e("wLzX"), t["\u0275crt"]({
                    encapsulation: 2,
                    styles: [],
                    data: {}
                }));

            function c(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 2, ":svg:defs", [], null, null, null, null, null)), (l()(), t["\u0275eld"](1, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-svg-linear-gradient", ""]
                ], null, null, null, i.b, i.a)), t["\u0275did"](2, 573440, null, 0, a.a, [], {
                    orientation: [0, "orientation"],
                    name: [1, "name"],
                    stops: [2, "stops"]
                }, null)], function(l, n) {
                    var e = n.component;
                    l(n, 2, 0, e.orientation, e.gradientId, e.gradientStops)
                }, null)
            }

            function r(l) {
                return t["\u0275vid"](2, [(l()(), t["\u0275and"](16777216, null, null, 1, null, c)), t["\u0275did"](1, 16384, null, 0, o.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), t["\u0275eld"](2, 0, null, null, 0, ":svg:path", [
                    ["class", "bar"],
                    ["stroke", "none"]
                ], [
                    [2, "active", null],
                    [1, "d", 0],
                    [1, "fill", 0]
                ], [
                    [null, "click"]
                ], function(l, n, e) {
                    var t = !0,
                        i = l.component;
                    return "click" === n && (t = !1 !== i.select.emit(i.data) && t), t
                }, null, null))], function(l, n) {
                    l(n, 1, 0, n.component.hasGradient)
                }, function(l, n) {
                    var e = n.component;
                    l(n, 2, 0, e.isActive, e.path, e.hasGradient ? e.gradientFill : e.fill)
                })
            }
        }
    }
]);