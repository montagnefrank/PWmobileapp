(window.webpackJsonp = window.webpackJsonp || []).push([
    [15], {
        "4R65": function(t, e, i) {
            ! function(t) {
                "use strict";
                var e = Object.freeze;

                function i(t) {
                    var e, i, n, o;
                    for (i = 1, n = arguments.length; i < n; i++)
                        for (e in o = arguments[i]) t[e] = o[e];
                    return t
                }
                Object.freeze = function(t) {
                    return t
                };
                var n = Object.create || function() {
                    function t() {}
                    return function(e) {
                        return t.prototype = e, new t
                    }
                }();

                function o(t, e) {
                    var i = Array.prototype.slice;
                    if (t.bind) return t.bind.apply(t, i.call(arguments, 1));
                    var n = i.call(arguments, 2);
                    return function() {
                        return t.apply(e, n.length ? n.concat(i.call(arguments)) : arguments)
                    }
                }
                var s = 0;

                function a(t) {
                    return t._leaflet_id = t._leaflet_id || ++s, t._leaflet_id
                }

                function r(t, e, i) {
                    var n, o, s, a;
                    return a = function() {
                        n = !1, o && (s.apply(i, o), o = !1)
                    }, s = function() {
                        n ? o = arguments : (t.apply(i, arguments), setTimeout(a, e), n = !0)
                    }
                }

                function h(t, e, i) {
                    var n = e[1],
                        o = e[0],
                        s = n - o;
                    return t === n && i ? t : ((t - o) % s + s) % s + o
                }

                function l() {
                    return !1
                }

                function u(t, e) {
                    var i = Math.pow(10, void 0 === e ? 6 : e);
                    return Math.round(t * i) / i
                }

                function c(t) {
                    return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
                }

                function d(t) {
                    return c(t).split(/\s+/)
                }

                function _(t, e) {
                    for (var i in t.hasOwnProperty("options") || (t.options = t.options ? n(t.options) : {}), e) t.options[i] = e[i];
                    return t.options
                }

                function p(t, e, i) {
                    var n = [];
                    for (var o in t) n.push(encodeURIComponent(i ? o.toUpperCase() : o) + "=" + encodeURIComponent(t[o]));
                    return (e && -1 !== e.indexOf("?") ? "&" : "?") + n.join("&")
                }
                var m = /\{ *([\w_-]+) *\}/g;

                function f(t, e) {
                    return t.replace(m, function(t, i) {
                        var n = e[i];
                        if (void 0 === n) throw new Error("No value provided for variable " + t);
                        return "function" == typeof n && (n = n(e)), n
                    })
                }
                var g = Array.isArray || function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                };

                function v(t, e) {
                    for (var i = 0; i < t.length; i++)
                        if (t[i] === e) return i;
                    return -1
                }
                var y = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";

                function P(t) {
                    return window["webkit" + t] || window["moz" + t] || window["ms" + t]
                }
                var x = 0;

                function w(t) {
                    var e = +new Date,
                        i = Math.max(0, 16 - (e - x));
                    return x = e + i, window.setTimeout(t, i)
                }
                var b = window.requestAnimationFrame || P("RequestAnimationFrame") || w,
                    T = window.cancelAnimationFrame || P("CancelAnimationFrame") || P("CancelRequestAnimationFrame") || function(t) {
                        window.clearTimeout(t)
                    };

                function M(t, e, i) {
                    if (!i || b !== w) return b.call(window, o(t, e));
                    t.call(e)
                }

                function E(t) {
                    t && T.call(window, t)
                }
                var C = (Object.freeze || Object)({
                    freeze: e,
                    extend: i,
                    create: n,
                    bind: o,
                    lastId: s,
                    stamp: a,
                    throttle: r,
                    wrapNum: h,
                    falseFn: l,
                    formatNum: u,
                    trim: c,
                    splitWords: d,
                    setOptions: _,
                    getParamString: p,
                    template: f,
                    isArray: g,
                    indexOf: v,
                    emptyImageUrl: y,
                    requestFn: b,
                    cancelFn: T,
                    requestAnimFrame: M,
                    cancelAnimFrame: E
                });

                function S() {}
                S.extend = function(t) {
                    var e = function() {
                            this.initialize && this.initialize.apply(this, arguments), this.callInitHooks()
                        },
                        o = e.__super__ = this.prototype,
                        s = n(o);
                    for (var a in s.constructor = e, e.prototype = s, this) this.hasOwnProperty(a) && "prototype" !== a && "__super__" !== a && (e[a] = this[a]);
                    return t.statics && (i(e, t.statics), delete t.statics), t.includes && (function(t) {
                        if ("undefined" != typeof L && L && L.Mixin) {
                            t = g(t) ? t : [t];
                            for (var e = 0; e < t.length; e++) t[e] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", (new Error).stack)
                        }
                    }(t.includes), i.apply(null, [s].concat(t.includes)), delete t.includes), s.options && (t.options = i(n(s.options), t.options)), i(s, t), s._initHooks = [], s.callInitHooks = function() {
                        if (!this._initHooksCalled) {
                            o.callInitHooks && o.callInitHooks.call(this), this._initHooksCalled = !0;
                            for (var t = 0, e = s._initHooks.length; t < e; t++) s._initHooks[t].call(this)
                        }
                    }, e
                }, S.include = function(t) {
                    return i(this.prototype, t), this
                }, S.mergeOptions = function(t) {
                    return i(this.prototype.options, t), this
                }, S.addInitHook = function(t) {
                    var e = Array.prototype.slice.call(arguments, 1),
                        i = "function" == typeof t ? t : function() {
                            this[t].apply(this, e)
                        };
                    return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(i), this
                };
                var z = {
                    on: function(t, e, i) {
                        if ("object" == typeof t)
                            for (var n in t) this._on(n, t[n], e);
                        else
                            for (var o = 0, s = (t = d(t)).length; o < s; o++) this._on(t[o], e, i);
                        return this
                    },
                    off: function(t, e, i) {
                        if (t)
                            if ("object" == typeof t)
                                for (var n in t) this._off(n, t[n], e);
                            else
                                for (var o = 0, s = (t = d(t)).length; o < s; o++) this._off(t[o], e, i);
                        else delete this._events;
                        return this
                    },
                    _on: function(t, e, i) {
                        this._events = this._events || {};
                        var n = this._events[t];
                        n || (this._events[t] = n = []), i === this && (i = void 0);
                        for (var o = {
                                fn: e,
                                ctx: i
                            }, s = n, a = 0, r = s.length; a < r; a++)
                            if (s[a].fn === e && s[a].ctx === i) return;
                        s.push(o)
                    },
                    _off: function(t, e, i) {
                        var n, o, s;
                        if (this._events && (n = this._events[t]))
                            if (e) {
                                if (i === this && (i = void 0), n)
                                    for (o = 0, s = n.length; o < s; o++) {
                                        var a = n[o];
                                        if (a.ctx === i && a.fn === e) return a.fn = l, this._firingCount && (this._events[t] = n = n.slice()), void n.splice(o, 1)
                                    }
                            } else {
                                for (o = 0, s = n.length; o < s; o++) n[o].fn = l;
                                delete this._events[t]
                            }
                    },
                    fire: function(t, e, n) {
                        if (!this.listens(t, n)) return this;
                        var o = i({}, e, {
                            type: t,
                            target: this,
                            sourceTarget: e && e.sourceTarget || this
                        });
                        if (this._events) {
                            var s = this._events[t];
                            if (s) {
                                this._firingCount = this._firingCount + 1 || 1;
                                for (var a = 0, r = s.length; a < r; a++) {
                                    var h = s[a];
                                    h.fn.call(h.ctx || this, o)
                                }
                                this._firingCount--
                            }
                        }
                        return n && this._propagateEvent(o), this
                    },
                    listens: function(t, e) {
                        var i = this._events && this._events[t];
                        if (i && i.length) return !0;
                        if (e)
                            for (var n in this._eventParents)
                                if (this._eventParents[n].listens(t, e)) return !0;
                        return !1
                    },
                    once: function(t, e, i) {
                        if ("object" == typeof t) {
                            for (var n in t) this.once(n, t[n], e);
                            return this
                        }
                        var s = o(function() {
                            this.off(t, e, i).off(t, s, i)
                        }, this);
                        return this.on(t, e, i).on(t, s, i)
                    },
                    addEventParent: function(t) {
                        return this._eventParents = this._eventParents || {}, this._eventParents[a(t)] = t, this
                    },
                    removeEventParent: function(t) {
                        return this._eventParents && delete this._eventParents[a(t)], this
                    },
                    _propagateEvent: function(t) {
                        for (var e in this._eventParents) this._eventParents[e].fire(t.type, i({
                            layer: t.target,
                            propagatedFrom: t.target
                        }, t), !0)
                    }
                };
                z.addEventListener = z.on, z.removeEventListener = z.clearAllEventListeners = z.off, z.addOneTimeEventListener = z.once, z.fireEvent = z.fire, z.hasEventListeners = z.listens;
                var D = S.extend(z);

                function k(t, e, i) {
                    this.x = i ? Math.round(t) : t, this.y = i ? Math.round(e) : e
                }
                var I = Math.trunc || function(t) {
                    return t > 0 ? Math.floor(t) : Math.ceil(t)
                };

                function A(t, e, i) {
                    return t instanceof k ? t : g(t) ? new k(t[0], t[1]) : void 0 === t || null === t ? t : "object" == typeof t && "x" in t && "y" in t ? new k(t.x, t.y) : new k(t, e, i)
                }

                function B(t, e) {
                    if (t)
                        for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++) this.extend(i[n])
                }

                function O(t, e) {
                    return !t || t instanceof B ? t : new B(t, e)
                }

                function Z(t, e) {
                    if (t)
                        for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++) this.extend(i[n])
                }

                function N(t, e) {
                    return t instanceof Z ? t : new Z(t, e)
                }

                function R(t, e, i) {
                    if (isNaN(t) || isNaN(e)) throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
                    this.lat = +t, this.lng = +e, void 0 !== i && (this.alt = +i)
                }

                function U(t, e, i) {
                    return t instanceof R ? t : g(t) && "object" != typeof t[0] ? 3 === t.length ? new R(t[0], t[1], t[2]) : 2 === t.length ? new R(t[0], t[1]) : null : void 0 === t || null === t ? t : "object" == typeof t && "lat" in t ? new R(t.lat, "lng" in t ? t.lng : t.lon, t.alt) : void 0 === e ? null : new R(t, e, i)
                }
                k.prototype = {
                    clone: function() {
                        return new k(this.x, this.y)
                    },
                    add: function(t) {
                        return this.clone()._add(A(t))
                    },
                    _add: function(t) {
                        return this.x += t.x, this.y += t.y, this
                    },
                    subtract: function(t) {
                        return this.clone()._subtract(A(t))
                    },
                    _subtract: function(t) {
                        return this.x -= t.x, this.y -= t.y, this
                    },
                    divideBy: function(t) {
                        return this.clone()._divideBy(t)
                    },
                    _divideBy: function(t) {
                        return this.x /= t, this.y /= t, this
                    },
                    multiplyBy: function(t) {
                        return this.clone()._multiplyBy(t)
                    },
                    _multiplyBy: function(t) {
                        return this.x *= t, this.y *= t, this
                    },
                    scaleBy: function(t) {
                        return new k(this.x * t.x, this.y * t.y)
                    },
                    unscaleBy: function(t) {
                        return new k(this.x / t.x, this.y / t.y)
                    },
                    round: function() {
                        return this.clone()._round()
                    },
                    _round: function() {
                        return this.x = Math.round(this.x), this.y = Math.round(this.y), this
                    },
                    floor: function() {
                        return this.clone()._floor()
                    },
                    _floor: function() {
                        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
                    },
                    ceil: function() {
                        return this.clone()._ceil()
                    },
                    _ceil: function() {
                        return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
                    },
                    trunc: function() {
                        return this.clone()._trunc()
                    },
                    _trunc: function() {
                        return this.x = I(this.x), this.y = I(this.y), this
                    },
                    distanceTo: function(t) {
                        var e = (t = A(t)).x - this.x,
                            i = t.y - this.y;
                        return Math.sqrt(e * e + i * i)
                    },
                    equals: function(t) {
                        return (t = A(t)).x === this.x && t.y === this.y
                    },
                    contains: function(t) {
                        return t = A(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
                    },
                    toString: function() {
                        return "Point(" + u(this.x) + ", " + u(this.y) + ")"
                    }
                }, B.prototype = {
                    extend: function(t) {
                        return t = A(t), this.min || this.max ? (this.min.x = Math.min(t.x, this.min.x), this.max.x = Math.max(t.x, this.max.x), this.min.y = Math.min(t.y, this.min.y), this.max.y = Math.max(t.y, this.max.y)) : (this.min = t.clone(), this.max = t.clone()), this
                    },
                    getCenter: function(t) {
                        return new k((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t)
                    },
                    getBottomLeft: function() {
                        return new k(this.min.x, this.max.y)
                    },
                    getTopRight: function() {
                        return new k(this.max.x, this.min.y)
                    },
                    getTopLeft: function() {
                        return this.min
                    },
                    getBottomRight: function() {
                        return this.max
                    },
                    getSize: function() {
                        return this.max.subtract(this.min)
                    },
                    contains: function(t) {
                        var e, i;
                        return (t = "number" == typeof t[0] || t instanceof k ? A(t) : O(t)) instanceof B ? (e = t.min, i = t.max) : e = i = t, e.x >= this.min.x && i.x <= this.max.x && e.y >= this.min.y && i.y <= this.max.y
                    },
                    intersects: function(t) {
                        t = O(t);
                        var e = this.min,
                            i = this.max,
                            n = t.min,
                            o = t.max;
                        return o.x >= e.x && n.x <= i.x && o.y >= e.y && n.y <= i.y
                    },
                    overlaps: function(t) {
                        t = O(t);
                        var e = this.min,
                            i = this.max,
                            n = t.min,
                            o = t.max;
                        return o.x > e.x && n.x < i.x && o.y > e.y && n.y < i.y
                    },
                    isValid: function() {
                        return !(!this.min || !this.max)
                    }
                }, Z.prototype = {
                    extend: function(t) {
                        var e, i, n = this._southWest,
                            o = this._northEast;
                        if (t instanceof R) e = t, i = t;
                        else {
                            if (!(t instanceof Z)) return t ? this.extend(U(t) || N(t)) : this;
                            if (i = t._northEast, !(e = t._southWest) || !i) return this
                        }
                        return n || o ? (n.lat = Math.min(e.lat, n.lat), n.lng = Math.min(e.lng, n.lng), o.lat = Math.max(i.lat, o.lat), o.lng = Math.max(i.lng, o.lng)) : (this._southWest = new R(e.lat, e.lng), this._northEast = new R(i.lat, i.lng)), this
                    },
                    pad: function(t) {
                        var e = this._southWest,
                            i = this._northEast,
                            n = Math.abs(e.lat - i.lat) * t,
                            o = Math.abs(e.lng - i.lng) * t;
                        return new Z(new R(e.lat - n, e.lng - o), new R(i.lat + n, i.lng + o))
                    },
                    getCenter: function() {
                        return new R((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2)
                    },
                    getSouthWest: function() {
                        return this._southWest
                    },
                    getNorthEast: function() {
                        return this._northEast
                    },
                    getNorthWest: function() {
                        return new R(this.getNorth(), this.getWest())
                    },
                    getSouthEast: function() {
                        return new R(this.getSouth(), this.getEast())
                    },
                    getWest: function() {
                        return this._southWest.lng
                    },
                    getSouth: function() {
                        return this._southWest.lat
                    },
                    getEast: function() {
                        return this._northEast.lng
                    },
                    getNorth: function() {
                        return this._northEast.lat
                    },
                    contains: function(t) {
                        t = "number" == typeof t[0] || t instanceof R || "lat" in t ? U(t) : N(t);
                        var e, i, n = this._southWest,
                            o = this._northEast;
                        return t instanceof Z ? (e = t.getSouthWest(), i = t.getNorthEast()) : e = i = t, e.lat >= n.lat && i.lat <= o.lat && e.lng >= n.lng && i.lng <= o.lng
                    },
                    intersects: function(t) {
                        t = N(t);
                        var e = this._southWest,
                            i = this._northEast,
                            n = t.getSouthWest(),
                            o = t.getNorthEast();
                        return o.lat >= e.lat && n.lat <= i.lat && o.lng >= e.lng && n.lng <= i.lng
                    },
                    overlaps: function(t) {
                        t = N(t);
                        var e = this._southWest,
                            i = this._northEast,
                            n = t.getSouthWest(),
                            o = t.getNorthEast();
                        return o.lat > e.lat && n.lat < i.lat && o.lng > e.lng && n.lng < i.lng
                    },
                    toBBoxString: function() {
                        return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",")
                    },
                    equals: function(t, e) {
                        return !!t && (t = N(t), this._southWest.equals(t.getSouthWest(), e) && this._northEast.equals(t.getNorthEast(), e))
                    },
                    isValid: function() {
                        return !(!this._southWest || !this._northEast)
                    }
                }, R.prototype = {
                    equals: function(t, e) {
                        return !!t && (t = U(t), Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng)) <= (void 0 === e ? 1e-9 : e))
                    },
                    toString: function(t) {
                        return "LatLng(" + u(this.lat, t) + ", " + u(this.lng, t) + ")"
                    },
                    distanceTo: function(t) {
                        return H.distance(this, U(t))
                    },
                    wrap: function() {
                        return H.wrapLatLng(this)
                    },
                    toBounds: function(t) {
                        var e = 180 * t / 40075017,
                            i = e / Math.cos(Math.PI / 180 * this.lat);
                        return N([this.lat - e, this.lng - i], [this.lat + e, this.lng + i])
                    },
                    clone: function() {
                        return new R(this.lat, this.lng, this.alt)
                    }
                };
                var j, W = {
                        latLngToPoint: function(t, e) {
                            var i = this.projection.project(t),
                                n = this.scale(e);
                            return this.transformation._transform(i, n)
                        },
                        pointToLatLng: function(t, e) {
                            var i = this.scale(e),
                                n = this.transformation.untransform(t, i);
                            return this.projection.unproject(n)
                        },
                        project: function(t) {
                            return this.projection.project(t)
                        },
                        unproject: function(t) {
                            return this.projection.unproject(t)
                        },
                        scale: function(t) {
                            return 256 * Math.pow(2, t)
                        },
                        zoom: function(t) {
                            return Math.log(t / 256) / Math.LN2
                        },
                        getProjectedBounds: function(t) {
                            if (this.infinite) return null;
                            var e = this.projection.bounds,
                                i = this.scale(t);
                            return new B(this.transformation.transform(e.min, i), this.transformation.transform(e.max, i))
                        },
                        infinite: !1,
                        wrapLatLng: function(t) {
                            var e = this.wrapLng ? h(t.lng, this.wrapLng, !0) : t.lng;
                            return new R(this.wrapLat ? h(t.lat, this.wrapLat, !0) : t.lat, e, t.alt)
                        },
                        wrapLatLngBounds: function(t) {
                            var e = t.getCenter(),
                                i = this.wrapLatLng(e),
                                n = e.lat - i.lat,
                                o = e.lng - i.lng;
                            if (0 === n && 0 === o) return t;
                            var s = t.getSouthWest(),
                                a = t.getNorthEast();
                            return new Z(new R(s.lat - n, s.lng - o), new R(a.lat - n, a.lng - o))
                        }
                    },
                    H = i({}, W, {
                        wrapLng: [-180, 180],
                        R: 6371e3,
                        distance: function(t, e) {
                            var i = Math.PI / 180,
                                n = t.lat * i,
                                o = e.lat * i,
                                s = Math.sin((e.lat - t.lat) * i / 2),
                                a = Math.sin((e.lng - t.lng) * i / 2),
                                r = s * s + Math.cos(n) * Math.cos(o) * a * a,
                                h = 2 * Math.atan2(Math.sqrt(r), Math.sqrt(1 - r));
                            return this.R * h
                        }
                    }),
                    F = {
                        R: 6378137,
                        MAX_LATITUDE: 85.0511287798,
                        project: function(t) {
                            var e = Math.PI / 180,
                                i = this.MAX_LATITUDE,
                                n = Math.max(Math.min(i, t.lat), -i),
                                o = Math.sin(n * e);
                            return new k(this.R * t.lng * e, this.R * Math.log((1 + o) / (1 - o)) / 2)
                        },
                        unproject: function(t) {
                            var e = 180 / Math.PI;
                            return new R((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * e, t.x * e / this.R)
                        },
                        bounds: (j = 6378137 * Math.PI, new B([-j, -j], [j, j]))
                    };

                function V(t, e, i, n) {
                    if (g(t)) return this._a = t[0], this._b = t[1], this._c = t[2], void(this._d = t[3]);
                    this._a = t, this._b = e, this._c = i, this._d = n
                }

                function G(t, e, i, n) {
                    return new V(t, e, i, n)
                }
                V.prototype = {
                    transform: function(t, e) {
                        return this._transform(t.clone(), e)
                    },
                    _transform: function(t, e) {
                        return t.x = (e = e || 1) * (this._a * t.x + this._b), t.y = e * (this._c * t.y + this._d), t
                    },
                    untransform: function(t, e) {
                        return new k((t.x / (e = e || 1) - this._b) / this._a, (t.y / e - this._d) / this._c)
                    }
                };
                var q = i({}, H, {
                        code: "EPSG:3857",
                        projection: F,
                        transformation: function() {
                            var t = .5 / (Math.PI * F.R);
                            return G(t, .5, -t, .5)
                        }()
                    }),
                    J = i({}, q, {
                        code: "EPSG:900913"
                    });

                function K(t) {
                    return document.createElementNS("http://www.w3.org/2000/svg", t)
                }

                function X(t, e) {
                    var i, n, o, s, a, r, h = "";
                    for (i = 0, o = t.length; i < o; i++) {
                        for (n = 0, s = (a = t[i]).length; n < s; n++) r = a[n], h += (n ? "L" : "M") + r.x + " " + r.y;
                        h += e ? Et ? "z" : "x" : ""
                    }
                    return h || "M0 0"
                }
                var Y = document.documentElement.style,
                    Q = "ActiveXObject" in window,
                    $ = Q && !document.addEventListener,
                    tt = "msLaunchUri" in navigator && !("documentMode" in document),
                    et = St("webkit"),
                    it = St("android"),
                    nt = St("android 2") || St("android 3"),
                    ot = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
                    st = it && St("Google") && ot < 537 && !("AudioNode" in window),
                    at = !!window.opera,
                    rt = St("chrome"),
                    ht = St("gecko") && !et && !at && !Q,
                    lt = !rt && St("safari"),
                    ut = St("phantom"),
                    ct = "OTransition" in Y,
                    dt = 0 === navigator.platform.indexOf("Win"),
                    _t = Q && "transition" in Y,
                    pt = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix && !nt,
                    mt = "MozPerspective" in Y,
                    ft = !window.L_DISABLE_3D && (_t || pt || mt) && !ct && !ut,
                    gt = "undefined" != typeof orientation || St("mobile"),
                    vt = gt && et,
                    yt = gt && pt,
                    Pt = !window.PointerEvent && window.MSPointerEvent,
                    Lt = !(!window.PointerEvent && !Pt),
                    xt = !window.L_NO_TOUCH && (Lt || "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
                    wt = gt && at,
                    bt = gt && ht,
                    Tt = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1,
                    Mt = !!document.createElement("canvas").getContext,
                    Et = !(!document.createElementNS || !K("svg").createSVGRect),
                    Ct = !Et && function() {
                        try {
                            var t = document.createElement("div");
                            t.innerHTML = '<v:shape adj="1"/>';
                            var e = t.firstChild;
                            return e.style.behavior = "url(#default#VML)", e && "object" == typeof e.adj
                        } catch (t) {
                            return !1
                        }
                    }();

                function St(t) {
                    return navigator.userAgent.toLowerCase().indexOf(t) >= 0
                }
                var zt = (Object.freeze || Object)({
                        ie: Q,
                        ielt9: $,
                        edge: tt,
                        webkit: et,
                        android: it,
                        android23: nt,
                        androidStock: st,
                        opera: at,
                        chrome: rt,
                        gecko: ht,
                        safari: lt,
                        phantom: ut,
                        opera12: ct,
                        win: dt,
                        ie3d: _t,
                        webkit3d: pt,
                        gecko3d: mt,
                        any3d: ft,
                        mobile: gt,
                        mobileWebkit: vt,
                        mobileWebkit3d: yt,
                        msPointer: Pt,
                        pointer: Lt,
                        touch: xt,
                        mobileOpera: wt,
                        mobileGecko: bt,
                        retina: Tt,
                        canvas: Mt,
                        svg: Et,
                        vml: Ct
                    }),
                    Dt = Pt ? "MSPointerDown" : "pointerdown",
                    kt = Pt ? "MSPointerMove" : "pointermove",
                    It = Pt ? "MSPointerUp" : "pointerup",
                    At = Pt ? "MSPointerCancel" : "pointercancel",
                    Bt = ["INPUT", "SELECT", "OPTION"],
                    Ot = {},
                    Zt = !1,
                    Nt = 0;

                function Rt(t) {
                    Ot[t.pointerId] = t, Nt++
                }

                function Ut(t) {
                    Ot[t.pointerId] && (Ot[t.pointerId] = t)
                }

                function jt(t) {
                    delete Ot[t.pointerId], Nt--
                }

                function Wt(t, e) {
                    for (var i in t.touches = [], Ot) t.touches.push(Ot[i]);
                    t.changedTouches = [t], e(t)
                }
                var Ht = Pt ? "MSPointerDown" : Lt ? "pointerdown" : "touchstart",
                    Ft = Pt ? "MSPointerUp" : Lt ? "pointerup" : "touchend",
                    Vt = "_leaflet_";

                function Gt(t, e, i) {
                    var n, o, s = !1,
                        a = 250;

                    function r(t) {
                        var e;
                        if (Lt) {
                            if (!tt || "mouse" === t.pointerType) return;
                            e = Nt
                        } else e = t.touches.length;
                        if (!(e > 1)) {
                            var i = Date.now(),
                                r = i - (n || i);
                            o = t.touches ? t.touches[0] : t, s = r > 0 && r <= a, n = i
                        }
                    }

                    function h(t) {
                        if (s && !o.cancelBubble) {
                            if (Lt) {
                                if (!tt || "mouse" === t.pointerType) return;
                                var i, a, r = {};
                                for (a in o) r[a] = (i = o[a]) && i.bind ? i.bind(o) : i;
                                o = r
                            }
                            o.type = "dblclick", e(o), n = null
                        }
                    }
                    return t[Vt + Ht + i] = r, t[Vt + Ft + i] = h, t[Vt + "dblclick" + i] = e, t.addEventListener(Ht, r, !1), t.addEventListener(Ft, h, !1), t.addEventListener("dblclick", e, !1), this
                }

                function qt(t, e) {
                    var i = t[Vt + Ft + e],
                        n = t[Vt + "dblclick" + e];
                    return t.removeEventListener(Ht, t[Vt + Ht + e], !1), t.removeEventListener(Ft, i, !1), tt || t.removeEventListener("dblclick", n, !1), this
                }

                function Jt(t, e, i, n) {
                    if ("object" == typeof e)
                        for (var o in e) Yt(t, o, e[o], i);
                    else
                        for (var s = 0, a = (e = d(e)).length; s < a; s++) Yt(t, e[s], i, n);
                    return this
                }
                var Kt = "_leaflet_events";

                function Xt(t, e, i, n) {
                    if ("object" == typeof e)
                        for (var o in e) Qt(t, o, e[o], i);
                    else if (e)
                        for (var s = 0, a = (e = d(e)).length; s < a; s++) Qt(t, e[s], i, n);
                    else {
                        for (var r in t[Kt]) Qt(t, r, t[Kt][r]);
                        delete t[Kt]
                    }
                    return this
                }

                function Yt(t, e, i, n) {
                    var s = e + a(i) + (n ? "_" + a(n) : "");
                    if (t[Kt] && t[Kt][s]) return this;
                    var r = function(e) {
                            return i.call(n || t, e || window.event)
                        },
                        h = r;
                    Lt && 0 === e.indexOf("touch") ? function(t, e, i, n) {
                        "touchstart" === e ? function(t, e, i) {
                            var n = o(function(t) {
                                if ("mouse" !== t.pointerType && t.MSPOINTER_TYPE_MOUSE && t.pointerType !== t.MSPOINTER_TYPE_MOUSE) {
                                    if (!(Bt.indexOf(t.target.tagName) < 0)) return;
                                    ie(t)
                                }
                                Wt(t, e)
                            });
                            t["_leaflet_touchstart" + i] = n, t.addEventListener(Dt, n, !1), Zt || (document.documentElement.addEventListener(Dt, Rt, !0), document.documentElement.addEventListener(kt, Ut, !0), document.documentElement.addEventListener(It, jt, !0), document.documentElement.addEventListener(At, jt, !0), Zt = !0)
                        }(t, i, n) : "touchmove" === e ? function(t, e, i) {
                            var n = function(t) {
                                (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType || 0 !== t.buttons) && Wt(t, e)
                            };
                            t["_leaflet_touchmove" + i] = n, t.addEventListener(kt, n, !1)
                        }(t, i, n) : "touchend" === e && function(t, e, i) {
                            var n = function(t) {
                                Wt(t, e)
                            };
                            t["_leaflet_touchend" + i] = n, t.addEventListener(It, n, !1), t.addEventListener(At, n, !1)
                        }(t, i, n)
                    }(t, e, r, s) : !xt || "dblclick" !== e || !Gt || Lt && rt ? "addEventListener" in t ? "mousewheel" === e ? t.addEventListener("onwheel" in t ? "wheel" : "mousewheel", r, !1) : "mouseenter" === e || "mouseleave" === e ? (r = function(e) {
                        e = e || window.event, ce(t, e) && h(e)
                    }, t.addEventListener("mouseenter" === e ? "mouseover" : "mouseout", r, !1)) : ("click" === e && it && (r = function(t) {
                        ! function(t, e) {
                            var i = t.timeStamp || t.originalEvent && t.originalEvent.timeStamp,
                                n = re && i - re;
                            n && n > 100 && n < 500 || t.target._simulatedClick && !t._simulated ? ne(t) : (re = i, e(t))
                        }(t, h)
                    }), t.addEventListener(e, r, !1)) : "attachEvent" in t && t.attachEvent("on" + e, r) : Gt(t, r, s), t[Kt] = t[Kt] || {}, t[Kt][s] = r
                }

                function Qt(t, e, i, n) {
                    var o = e + a(i) + (n ? "_" + a(n) : ""),
                        s = t[Kt] && t[Kt][o];
                    if (!s) return this;
                    Lt && 0 === e.indexOf("touch") ? function(t, e, i) {
                        var n = t["_leaflet_" + e + i];
                        "touchstart" === e ? t.removeEventListener(Dt, n, !1) : "touchmove" === e ? t.removeEventListener(kt, n, !1) : "touchend" === e && (t.removeEventListener(It, n, !1), t.removeEventListener(At, n, !1))
                    }(t, e, o) : !xt || "dblclick" !== e || !qt || Lt && rt ? "removeEventListener" in t ? t.removeEventListener("mousewheel" === e ? "onwheel" in t ? "wheel" : "mousewheel" : "mouseenter" === e ? "mouseover" : "mouseleave" === e ? "mouseout" : e, s, !1) : "detachEvent" in t && t.detachEvent("on" + e, s) : qt(t, o), t[Kt][o] = null
                }

                function $t(t) {
                    return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0, ue(t), this
                }

                function te(t) {
                    return Yt(t, "mousewheel", $t), this
                }

                function ee(t) {
                    return Jt(t, "mousedown touchstart dblclick", $t), Yt(t, "click", le), this
                }

                function ie(t) {
                    return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this
                }

                function ne(t) {
                    return ie(t), $t(t), this
                }

                function oe(t, e) {
                    if (!e) return new k(t.clientX, t.clientY);
                    var i = e.getBoundingClientRect();
                    return new k(t.clientX / (i.width / e.offsetWidth || 1) - i.left - e.clientLeft, t.clientY / (i.height / e.offsetHeight || 1) - i.top - e.clientTop)
                }
                var se = dt && rt ? 2 * window.devicePixelRatio : ht ? window.devicePixelRatio : 1;

                function ae(t) {
                    return tt ? t.wheelDeltaY / 2 : t.deltaY && 0 === t.deltaMode ? -t.deltaY / se : t.deltaY && 1 === t.deltaMode ? 20 * -t.deltaY : t.deltaY && 2 === t.deltaMode ? 60 * -t.deltaY : t.deltaX || t.deltaZ ? 0 : t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : t.detail && Math.abs(t.detail) < 32765 ? 20 * -t.detail : t.detail ? t.detail / -32765 * 60 : 0
                }
                var re, he = {};

                function le(t) {
                    he[t.type] = !0
                }

                function ue(t) {
                    var e = he[t.type];
                    return he[t.type] = !1, e
                }

                function ce(t, e) {
                    var i = e.relatedTarget;
                    if (!i) return !0;
                    try {
                        for (; i && i !== t;) i = i.parentNode
                    } catch (t) {
                        return !1
                    }
                    return i !== t
                }
                var de, _e, pe, me, fe, ge = (Object.freeze || Object)({
                        on: Jt,
                        off: Xt,
                        stopPropagation: $t,
                        disableScrollPropagation: te,
                        disableClickPropagation: ee,
                        preventDefault: ie,
                        stop: ne,
                        getMousePosition: oe,
                        getWheelDelta: ae,
                        fakeStop: le,
                        skipped: ue,
                        isExternalTarget: ce,
                        addListener: Jt,
                        removeListener: Xt
                    }),
                    ve = Ae(["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"]),
                    ye = Ae(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]),
                    Pe = "webkitTransition" === ye || "OTransition" === ye ? ye + "End" : "transitionend";

                function Le(t) {
                    return "string" == typeof t ? document.getElementById(t) : t
                }

                function xe(t, e) {
                    var i = t.style[e] || t.currentStyle && t.currentStyle[e];
                    if ((!i || "auto" === i) && document.defaultView) {
                        var n = document.defaultView.getComputedStyle(t, null);
                        i = n ? n[e] : null
                    }
                    return "auto" === i ? null : i
                }

                function we(t, e, i) {
                    var n = document.createElement(t);
                    return n.className = e || "", i && i.appendChild(n), n
                }

                function be(t) {
                    var e = t.parentNode;
                    e && e.removeChild(t)
                }

                function Te(t) {
                    for (; t.firstChild;) t.removeChild(t.firstChild)
                }

                function Me(t) {
                    var e = t.parentNode;
                    e.lastChild !== t && e.appendChild(t)
                }

                function Ee(t) {
                    var e = t.parentNode;
                    e.firstChild !== t && e.insertBefore(t, e.firstChild)
                }

                function Ce(t, e) {
                    if (void 0 !== t.classList) return t.classList.contains(e);
                    var i = ke(t);
                    return i.length > 0 && new RegExp("(^|\\s)" + e + "(\\s|$)").test(i)
                }

                function Se(t, e) {
                    if (void 0 !== t.classList)
                        for (var i = d(e), n = 0, o = i.length; n < o; n++) t.classList.add(i[n]);
                    else if (!Ce(t, e)) {
                        var s = ke(t);
                        De(t, (s ? s + " " : "") + e)
                    }
                }

                function ze(t, e) {
                    void 0 !== t.classList ? t.classList.remove(e) : De(t, c((" " + ke(t) + " ").replace(" " + e + " ", " ")))
                }

                function De(t, e) {
                    void 0 === t.className.baseVal ? t.className = e : t.className.baseVal = e
                }

                function ke(t) {
                    return void 0 === t.className.baseVal ? t.className : t.className.baseVal
                }

                function Ie(t, e) {
                    "opacity" in t.style ? t.style.opacity = e : "filter" in t.style && function(t, e) {
                        var i = !1,
                            n = "DXImageTransform.Microsoft.Alpha";
                        try {
                            i = t.filters.item(n)
                        } catch (t) {
                            if (1 === e) return
                        }
                        e = Math.round(100 * e), i ? (i.Enabled = 100 !== e, i.Opacity = e) : t.style.filter += " progid:" + n + "(opacity=" + e + ")"
                    }(t, e)
                }

                function Ae(t) {
                    for (var e = document.documentElement.style, i = 0; i < t.length; i++)
                        if (t[i] in e) return t[i];
                    return !1
                }

                function Be(t, e, i) {
                    var n = e || new k(0, 0);
                    t.style[ve] = (_t ? "translate(" + n.x + "px," + n.y + "px)" : "translate3d(" + n.x + "px," + n.y + "px,0)") + (i ? " scale(" + i + ")" : "")
                }

                function Oe(t, e) {
                    t._leaflet_pos = e, ft ? Be(t, e) : (t.style.left = e.x + "px", t.style.top = e.y + "px")
                }

                function Ze(t) {
                    return t._leaflet_pos || new k(0, 0)
                }
                if ("onselectstart" in document) de = function() {
                    Jt(window, "selectstart", ie)
                }, _e = function() {
                    Xt(window, "selectstart", ie)
                };
                else {
                    var Ne = Ae(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
                    de = function() {
                        if (Ne) {
                            var t = document.documentElement.style;
                            pe = t[Ne], t[Ne] = "none"
                        }
                    }, _e = function() {
                        Ne && (document.documentElement.style[Ne] = pe, pe = void 0)
                    }
                }

                function Re() {
                    Jt(window, "dragstart", ie)
                }

                function Ue() {
                    Xt(window, "dragstart", ie)
                }

                function je(t) {
                    for (; - 1 === t.tabIndex;) t = t.parentNode;
                    t.style && (We(), me = t, fe = t.style.outline, t.style.outline = "none", Jt(window, "keydown", We))
                }

                function We() {
                    me && (me.style.outline = fe, me = void 0, fe = void 0, Xt(window, "keydown", We))
                }
                var He = (Object.freeze || Object)({
                        TRANSFORM: ve,
                        TRANSITION: ye,
                        TRANSITION_END: Pe,
                        get: Le,
                        getStyle: xe,
                        create: we,
                        remove: be,
                        empty: Te,
                        toFront: Me,
                        toBack: Ee,
                        hasClass: Ce,
                        addClass: Se,
                        removeClass: ze,
                        setClass: De,
                        getClass: ke,
                        setOpacity: Ie,
                        testProp: Ae,
                        setTransform: Be,
                        setPosition: Oe,
                        getPosition: Ze,
                        disableTextSelection: de,
                        enableTextSelection: _e,
                        disableImageDrag: Re,
                        enableImageDrag: Ue,
                        preventOutline: je,
                        restoreOutline: We
                    }),
                    Fe = D.extend({
                        run: function(t, e, i, n) {
                            this.stop(), this._el = t, this._inProgress = !0, this._duration = i || .25, this._easeOutPower = 1 / Math.max(n || .5, .2), this._startPos = Ze(t), this._offset = e.subtract(this._startPos), this._startTime = +new Date, this.fire("start"), this._animate()
                        },
                        stop: function() {
                            this._inProgress && (this._step(!0), this._complete())
                        },
                        _animate: function() {
                            this._animId = M(this._animate, this), this._step()
                        },
                        _step: function(t) {
                            var e = +new Date - this._startTime,
                                i = 1e3 * this._duration;
                            e < i ? this._runFrame(this._easeOut(e / i), t) : (this._runFrame(1), this._complete())
                        },
                        _runFrame: function(t, e) {
                            var i = this._startPos.add(this._offset.multiplyBy(t));
                            e && i._round(), Oe(this._el, i), this.fire("step")
                        },
                        _complete: function() {
                            E(this._animId), this._inProgress = !1, this.fire("end")
                        },
                        _easeOut: function(t) {
                            return 1 - Math.pow(1 - t, this._easeOutPower)
                        }
                    }),
                    Ve = D.extend({
                        options: {
                            crs: q,
                            center: void 0,
                            zoom: void 0,
                            minZoom: void 0,
                            maxZoom: void 0,
                            layers: [],
                            maxBounds: void 0,
                            renderer: void 0,
                            zoomAnimation: !0,
                            zoomAnimationThreshold: 4,
                            fadeAnimation: !0,
                            markerZoomAnimation: !0,
                            transform3DLimit: 8388608,
                            zoomSnap: 1,
                            zoomDelta: 1,
                            trackResize: !0
                        },
                        initialize: function(t, e) {
                            e = _(this, e), this._initContainer(t), this._initLayout(), this._onResize = o(this._onResize, this), this._initEvents(), e.maxBounds && this.setMaxBounds(e.maxBounds), void 0 !== e.zoom && (this._zoom = this._limitZoom(e.zoom)), e.center && void 0 !== e.zoom && this.setView(U(e.center), e.zoom, {
                                reset: !0
                            }), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this.callInitHooks(), this._zoomAnimated = ye && ft && !wt && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), Jt(this._proxy, Pe, this._catchTransitionEnd, this)), this._addLayers(this.options.layers)
                        },
                        setView: function(t, e, n) {
                            return e = void 0 === e ? this._zoom : this._limitZoom(e), t = this._limitCenter(U(t), e, this.options.maxBounds), n = n || {}, this._stop(), this._loaded && !n.reset && !0 !== n && (void 0 !== n.animate && (n.zoom = i({
                                animate: n.animate
                            }, n.zoom), n.pan = i({
                                animate: n.animate,
                                duration: n.duration
                            }, n.pan)), this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, n.zoom) : this._tryAnimatedPan(t, n.pan)) ? (clearTimeout(this._sizeTimer), this) : (this._resetView(t, e), this)
                        },
                        setZoom: function(t, e) {
                            return this._loaded ? this.setView(this.getCenter(), t, {
                                zoom: e
                            }) : (this._zoom = t, this)
                        },
                        zoomIn: function(t, e) {
                            return this.setZoom(this._zoom + (t = t || (ft ? this.options.zoomDelta : 1)), e)
                        },
                        zoomOut: function(t, e) {
                            return this.setZoom(this._zoom - (t = t || (ft ? this.options.zoomDelta : 1)), e)
                        },
                        setZoomAround: function(t, e, i) {
                            var n = this.getZoomScale(e),
                                o = this.getSize().divideBy(2),
                                s = (t instanceof k ? t : this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1 - 1 / n),
                                a = this.containerPointToLatLng(o.add(s));
                            return this.setView(a, e, {
                                zoom: i
                            })
                        },
                        _getBoundsCenterZoom: function(t, e) {
                            e = e || {}, t = t.getBounds ? t.getBounds() : N(t);
                            var i = A(e.paddingTopLeft || e.padding || [0, 0]),
                                n = A(e.paddingBottomRight || e.padding || [0, 0]),
                                o = this.getBoundsZoom(t, !1, i.add(n));
                            if ((o = "number" == typeof e.maxZoom ? Math.min(e.maxZoom, o) : o) === 1 / 0) return {
                                center: t.getCenter(),
                                zoom: o
                            };
                            var s = n.subtract(i).divideBy(2),
                                a = this.project(t.getSouthWest(), o),
                                r = this.project(t.getNorthEast(), o);
                            return {
                                center: this.unproject(a.add(r).divideBy(2).add(s), o),
                                zoom: o
                            }
                        },
                        fitBounds: function(t, e) {
                            if (!(t = N(t)).isValid()) throw new Error("Bounds are not valid.");
                            var i = this._getBoundsCenterZoom(t, e);
                            return this.setView(i.center, i.zoom, e)
                        },
                        fitWorld: function(t) {
                            return this.fitBounds([
                                [-90, -180],
                                [90, 180]
                            ], t)
                        },
                        panTo: function(t, e) {
                            return this.setView(t, this._zoom, {
                                pan: e
                            })
                        },
                        panBy: function(t, e) {
                            if (t = A(t).round(), e = e || {}, !t.x && !t.y) return this.fire("moveend");
                            if (!0 !== e.animate && !this.getSize().contains(t)) return this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), this;
                            if (this._panAnim || (this._panAnim = new Fe, this._panAnim.on({
                                    step: this._onPanTransitionStep,
                                    end: this._onPanTransitionEnd
                                }, this)), e.noMoveStart || this.fire("movestart"), !1 !== e.animate) {
                                Se(this._mapPane, "leaflet-pan-anim");
                                var i = this._getMapPanePos().subtract(t).round();
                                this._panAnim.run(this._mapPane, i, e.duration || .25, e.easeLinearity)
                            } else this._rawPanBy(t), this.fire("move").fire("moveend");
                            return this
                        },
                        flyTo: function(t, e, i) {
                            if (!1 === (i = i || {}).animate || !ft) return this.setView(t, e, i);
                            this._stop();
                            var n = this.project(this.getCenter()),
                                o = this.project(t),
                                s = this.getSize(),
                                a = this._zoom;
                            t = U(t), e = void 0 === e ? a : e;
                            var r = Math.max(s.x, s.y),
                                h = r * this.getZoomScale(a, e),
                                l = o.distanceTo(n) || 1,
                                u = 2.0164;

                            function c(t) {
                                var e = (h * h - r * r + (t ? -1 : 1) * u * u * l * l) / (2 * (t ? h : r) * u * l),
                                    i = Math.sqrt(e * e + 1) - e;
                                return i < 1e-9 ? -18 : Math.log(i)
                            }

                            function d(t) {
                                return (Math.exp(t) - Math.exp(-t)) / 2
                            }

                            function _(t) {
                                return (Math.exp(t) + Math.exp(-t)) / 2
                            }
                            var p = c(0),
                                m = Date.now(),
                                f = (c(1) - p) / 1.42,
                                g = i.duration ? 1e3 * i.duration : 1e3 * f * .8;
                            return this._moveStart(!0, i.noMoveStart), (function i() {
                                var s = (Date.now() - m) / g,
                                    h = function(t) {
                                        return 1 - Math.pow(1 - t, 1.5)
                                    }(s) * f;
                                s <= 1 ? (this._flyToFrame = M(i, this), this._move(this.unproject(n.add(o.subtract(n).multiplyBy(function(t) {
                                    return r * (_(p) * (d(e = p + 1.42 * t) / _(e)) - d(p)) / u;
                                    var e
                                }(h) / l)), a), this.getScaleZoom(r / function(t) {
                                    return r * (_(p) / _(p + 1.42 * t))
                                }(h), a), {
                                    flyTo: !0
                                })) : this._move(t, e)._moveEnd(!0)
                            }).call(this), this
                        },
                        flyToBounds: function(t, e) {
                            var i = this._getBoundsCenterZoom(t, e);
                            return this.flyTo(i.center, i.zoom, e)
                        },
                        setMaxBounds: function(t) {
                            return (t = N(t)).isValid() ? (this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this.options.maxBounds = t, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this.off("moveend", this._panInsideMaxBounds))
                        },
                        setMinZoom: function(t) {
                            var e = this.options.minZoom;
                            return this.options.minZoom = t, this._loaded && e !== t && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(t) : this
                        },
                        setMaxZoom: function(t) {
                            var e = this.options.maxZoom;
                            return this.options.maxZoom = t, this._loaded && e !== t && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(t) : this
                        },
                        panInsideBounds: function(t, e) {
                            this._enforcingBounds = !0;
                            var i = this.getCenter(),
                                n = this._limitCenter(i, this._zoom, N(t));
                            return i.equals(n) || this.panTo(n, e), this._enforcingBounds = !1, this
                        },
                        invalidateSize: function(t) {
                            if (!this._loaded) return this;
                            t = i({
                                animate: !1,
                                pan: !0
                            }, !0 === t ? {
                                animate: !0
                            } : t);
                            var e = this.getSize();
                            this._sizeChanged = !0, this._lastCenter = null;
                            var n = this.getSize(),
                                s = e.divideBy(2).round(),
                                a = n.divideBy(2).round(),
                                r = s.subtract(a);
                            return r.x || r.y ? (t.animate && t.pan ? this.panBy(r) : (t.pan && this._rawPanBy(r), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(o(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
                                oldSize: e,
                                newSize: n
                            })) : this
                        },
                        stop: function() {
                            return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop()
                        },
                        locate: function(t) {
                            if (t = this._locateOptions = i({
                                    timeout: 1e4,
                                    watch: !1
                                }, t), !("geolocation" in navigator)) return this._handleGeolocationError({
                                code: 0,
                                message: "Geolocation not supported."
                            }), this;
                            var e = o(this._handleGeolocationResponse, this),
                                n = o(this._handleGeolocationError, this);
                            return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(e, n, t) : navigator.geolocation.getCurrentPosition(e, n, t), this
                        },
                        stopLocate: function() {
                            return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this
                        },
                        _handleGeolocationError: function(t) {
                            var e = t.code,
                                i = t.message || (1 === e ? "permission denied" : 2 === e ? "position unavailable" : "timeout");
                            this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
                                code: e,
                                message: "Geolocation error: " + i + "."
                            })
                        },
                        _handleGeolocationResponse: function(t) {
                            var e = new R(t.coords.latitude, t.coords.longitude),
                                i = e.toBounds(t.coords.accuracy),
                                n = this._locateOptions;
                            if (n.setView) {
                                var o = this.getBoundsZoom(i);
                                this.setView(e, n.maxZoom ? Math.min(o, n.maxZoom) : o)
                            }
                            var s = {
                                latlng: e,
                                bounds: i,
                                timestamp: t.timestamp
                            };
                            for (var a in t.coords) "number" == typeof t.coords[a] && (s[a] = t.coords[a]);
                            this.fire("locationfound", s)
                        },
                        addHandler: function(t, e) {
                            if (!e) return this;
                            var i = this[t] = new e(this);
                            return this._handlers.push(i), this.options[t] && i.enable(), this
                        },
                        remove: function() {
                            if (this._initEvents(!0), this._containerId !== this._container._leaflet_id) throw new Error("Map container is being reused by another instance");
                            try {
                                delete this._container._leaflet_id, delete this._containerId
                            } catch (t) {
                                this._container._leaflet_id = void 0, this._containerId = void 0
                            }
                            var t;
                            for (t in void 0 !== this._locationWatchId && this.stopLocate(), this._stop(), be(this._mapPane), this._clearControlPos && this._clearControlPos(), this._clearHandlers(), this._loaded && this.fire("unload"), this._layers) this._layers[t].remove();
                            for (t in this._panes) be(this._panes[t]);
                            return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this
                        },
                        createPane: function(t, e) {
                            var i = we("div", "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""), e || this._mapPane);
                            return t && (this._panes[t] = i), i
                        },
                        getCenter: function() {
                            return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter : this.layerPointToLatLng(this._getCenterLayerPoint())
                        },
                        getZoom: function() {
                            return this._zoom
                        },
                        getBounds: function() {
                            var t = this.getPixelBounds();
                            return new Z(this.unproject(t.getBottomLeft()), this.unproject(t.getTopRight()))
                        },
                        getMinZoom: function() {
                            return void 0 === this.options.minZoom ? this._layersMinZoom || 0 : this.options.minZoom
                        },
                        getMaxZoom: function() {
                            return void 0 === this.options.maxZoom ? void 0 === this._layersMaxZoom ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom
                        },
                        getBoundsZoom: function(t, e, i) {
                            t = N(t), i = A(i || [0, 0]);
                            var n = this.getZoom() || 0,
                                o = this.getMinZoom(),
                                s = this.getMaxZoom(),
                                a = t.getNorthWest(),
                                r = t.getSouthEast(),
                                h = this.getSize().subtract(i),
                                l = O(this.project(r, n), this.project(a, n)).getSize(),
                                u = ft ? this.options.zoomSnap : 1,
                                c = h.x / l.x,
                                d = h.y / l.y,
                                _ = e ? Math.max(c, d) : Math.min(c, d);
                            return n = this.getScaleZoom(_, n), u && (n = Math.round(n / (u / 100)) * (u / 100), n = e ? Math.ceil(n / u) * u : Math.floor(n / u) * u), Math.max(o, Math.min(s, n))
                        },
                        getSize: function() {
                            return this._size && !this._sizeChanged || (this._size = new k(this._container.clientWidth || 0, this._container.clientHeight || 0), this._sizeChanged = !1), this._size.clone()
                        },
                        getPixelBounds: function(t, e) {
                            var i = this._getTopLeftPoint(t, e);
                            return new B(i, i.add(this.getSize()))
                        },
                        getPixelOrigin: function() {
                            return this._checkIfLoaded(), this._pixelOrigin
                        },
                        getPixelWorldBounds: function(t) {
                            return this.options.crs.getProjectedBounds(void 0 === t ? this.getZoom() : t)
                        },
                        getPane: function(t) {
                            return "string" == typeof t ? this._panes[t] : t
                        },
                        getPanes: function() {
                            return this._panes
                        },
                        getContainer: function() {
                            return this._container
                        },
                        getZoomScale: function(t, e) {
                            var i = this.options.crs;
                            return e = void 0 === e ? this._zoom : e, i.scale(t) / i.scale(e)
                        },
                        getScaleZoom: function(t, e) {
                            var i = this.options.crs,
                                n = i.zoom(t * i.scale(e = void 0 === e ? this._zoom : e));
                            return isNaN(n) ? 1 / 0 : n
                        },
                        project: function(t, e) {
                            return e = void 0 === e ? this._zoom : e, this.options.crs.latLngToPoint(U(t), e)
                        },
                        unproject: function(t, e) {
                            return e = void 0 === e ? this._zoom : e, this.options.crs.pointToLatLng(A(t), e)
                        },
                        layerPointToLatLng: function(t) {
                            var e = A(t).add(this.getPixelOrigin());
                            return this.unproject(e)
                        },
                        latLngToLayerPoint: function(t) {
                            return this.project(U(t))._round()._subtract(this.getPixelOrigin())
                        },
                        wrapLatLng: function(t) {
                            return this.options.crs.wrapLatLng(U(t))
                        },
                        wrapLatLngBounds: function(t) {
                            return this.options.crs.wrapLatLngBounds(N(t))
                        },
                        distance: function(t, e) {
                            return this.options.crs.distance(U(t), U(e))
                        },
                        containerPointToLayerPoint: function(t) {
                            return A(t).subtract(this._getMapPanePos())
                        },
                        layerPointToContainerPoint: function(t) {
                            return A(t).add(this._getMapPanePos())
                        },
                        containerPointToLatLng: function(t) {
                            var e = this.containerPointToLayerPoint(A(t));
                            return this.layerPointToLatLng(e)
                        },
                        latLngToContainerPoint: function(t) {
                            return this.layerPointToContainerPoint(this.latLngToLayerPoint(U(t)))
                        },
                        mouseEventToContainerPoint: function(t) {
                            return oe(t, this._container)
                        },
                        mouseEventToLayerPoint: function(t) {
                            return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))
                        },
                        mouseEventToLatLng: function(t) {
                            return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))
                        },
                        _initContainer: function(t) {
                            var e = this._container = Le(t);
                            if (!e) throw new Error("Map container not found.");
                            if (e._leaflet_id) throw new Error("Map container is already initialized.");
                            Jt(e, "scroll", this._onScroll, this), this._containerId = a(e)
                        },
                        _initLayout: function() {
                            var t = this._container;
                            this._fadeAnimated = this.options.fadeAnimation && ft, Se(t, "leaflet-container" + (xt ? " leaflet-touch" : "") + (Tt ? " leaflet-retina" : "") + ($ ? " leaflet-oldie" : "") + (lt ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
                            var e = xe(t, "position");
                            "absolute" !== e && "relative" !== e && "fixed" !== e && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos()
                        },
                        _initPanes: function() {
                            var t = this._panes = {};
                            this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), Oe(this._mapPane, new k(0, 0)), this.createPane("tilePane"), this.createPane("shadowPane"), this.createPane("overlayPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (Se(t.markerPane, "leaflet-zoom-hide"), Se(t.shadowPane, "leaflet-zoom-hide"))
                        },
                        _resetView: function(t, e) {
                            Oe(this._mapPane, new k(0, 0));
                            var i = !this._loaded;
                            this._loaded = !0, e = this._limitZoom(e), this.fire("viewprereset");
                            var n = this._zoom !== e;
                            this._moveStart(n, !1)._move(t, e)._moveEnd(n), this.fire("viewreset"), i && this.fire("load")
                        },
                        _moveStart: function(t, e) {
                            return t && this.fire("zoomstart"), e || this.fire("movestart"), this
                        },
                        _move: function(t, e, i) {
                            void 0 === e && (e = this._zoom);
                            var n = this._zoom !== e;
                            return this._zoom = e, this._lastCenter = t, this._pixelOrigin = this._getNewPixelOrigin(t), (n || i && i.pinch) && this.fire("zoom", i), this.fire("move", i)
                        },
                        _moveEnd: function(t) {
                            return t && this.fire("zoomend"), this.fire("moveend")
                        },
                        _stop: function() {
                            return E(this._flyToFrame), this._panAnim && this._panAnim.stop(), this
                        },
                        _rawPanBy: function(t) {
                            Oe(this._mapPane, this._getMapPanePos().subtract(t))
                        },
                        _getZoomSpan: function() {
                            return this.getMaxZoom() - this.getMinZoom()
                        },
                        _panInsideMaxBounds: function() {
                            this._enforcingBounds || this.panInsideBounds(this.options.maxBounds)
                        },
                        _checkIfLoaded: function() {
                            if (!this._loaded) throw new Error("Set map center and zoom first.")
                        },
                        _initEvents: function(t) {
                            this._targets = {}, this._targets[a(this._container)] = this;
                            var e = t ? Xt : Jt;
                            e(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress", this._handleDOMEvent, this), this.options.trackResize && e(window, "resize", this._onResize, this), ft && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd)
                        },
                        _onResize: function() {
                            E(this._resizeRequest), this._resizeRequest = M(function() {
                                this.invalidateSize({
                                    debounceMoveend: !0
                                })
                            }, this)
                        },
                        _onScroll: function() {
                            this._container.scrollTop = 0, this._container.scrollLeft = 0
                        },
                        _onMoveEnd: function() {
                            var t = this._getMapPanePos();
                            Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom())
                        },
                        _findEventTargets: function(t, e) {
                            for (var i, n = [], o = "mouseout" === e || "mouseover" === e, s = t.target || t.srcElement, r = !1; s;) {
                                if ((i = this._targets[a(s)]) && ("click" === e || "preclick" === e) && !t._simulated && this._draggableMoved(i)) {
                                    r = !0;
                                    break
                                }
                                if (i && i.listens(e, !0)) {
                                    if (o && !ce(s, t)) break;
                                    if (n.push(i), o) break
                                }
                                if (s === this._container) break;
                                s = s.parentNode
                            }
                            return n.length || r || o || !ce(s, t) || (n = [this]), n
                        },
                        _handleDOMEvent: function(t) {
                            if (this._loaded && !ue(t)) {
                                var e = t.type;
                                "mousedown" !== e && "keypress" !== e || je(t.target || t.srcElement), this._fireDOMEvent(t, e)
                            }
                        },
                        _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
                        _fireDOMEvent: function(t, e, n) {
                            if ("click" === t.type) {
                                var o = i({}, t);
                                o.type = "preclick", this._fireDOMEvent(o, o.type, n)
                            }
                            if (!t._stopped && (n = (n || []).concat(this._findEventTargets(t, e))).length) {
                                var s = n[0];
                                "contextmenu" === e && s.listens(e, !0) && ie(t);
                                var a = {
                                    originalEvent: t
                                };
                                if ("keypress" !== t.type) {
                                    var r = s.getLatLng && (!s._radius || s._radius <= 10);
                                    a.containerPoint = r ? this.latLngToContainerPoint(s.getLatLng()) : this.mouseEventToContainerPoint(t), a.layerPoint = this.containerPointToLayerPoint(a.containerPoint), a.latlng = r ? s.getLatLng() : this.layerPointToLatLng(a.layerPoint)
                                }
                                for (var h = 0; h < n.length; h++)
                                    if (n[h].fire(e, a, !0), a.originalEvent._stopped || !1 === n[h].options.bubblingMouseEvents && -1 !== v(this._mouseEvents, e)) return
                            }
                        },
                        _draggableMoved: function(t) {
                            return (t = t.dragging && t.dragging.enabled() ? t : this).dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved()
                        },
                        _clearHandlers: function() {
                            for (var t = 0, e = this._handlers.length; t < e; t++) this._handlers[t].disable()
                        },
                        whenReady: function(t, e) {
                            return this._loaded ? t.call(e || this, {
                                target: this
                            }) : this.on("load", t, e), this
                        },
                        _getMapPanePos: function() {
                            return Ze(this._mapPane) || new k(0, 0)
                        },
                        _moved: function() {
                            var t = this._getMapPanePos();
                            return t && !t.equals([0, 0])
                        },
                        _getTopLeftPoint: function(t, e) {
                            return (t && void 0 !== e ? this._getNewPixelOrigin(t, e) : this.getPixelOrigin()).subtract(this._getMapPanePos())
                        },
                        _getNewPixelOrigin: function(t, e) {
                            var i = this.getSize()._divideBy(2);
                            return this.project(t, e)._subtract(i)._add(this._getMapPanePos())._round()
                        },
                        _latLngToNewLayerPoint: function(t, e, i) {
                            var n = this._getNewPixelOrigin(i, e);
                            return this.project(t, e)._subtract(n)
                        },
                        _latLngBoundsToNewLayerBounds: function(t, e, i) {
                            var n = this._getNewPixelOrigin(i, e);
                            return O([this.project(t.getSouthWest(), e)._subtract(n), this.project(t.getNorthWest(), e)._subtract(n), this.project(t.getSouthEast(), e)._subtract(n), this.project(t.getNorthEast(), e)._subtract(n)])
                        },
                        _getCenterLayerPoint: function() {
                            return this.containerPointToLayerPoint(this.getSize()._divideBy(2))
                        },
                        _getCenterOffset: function(t) {
                            return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())
                        },
                        _limitCenter: function(t, e, i) {
                            if (!i) return t;
                            var n = this.project(t, e),
                                o = this.getSize().divideBy(2),
                                s = new B(n.subtract(o), n.add(o)),
                                a = this._getBoundsOffset(s, i, e);
                            return a.round().equals([0, 0]) ? t : this.unproject(n.add(a), e)
                        },
                        _limitOffset: function(t, e) {
                            if (!e) return t;
                            var i = this.getPixelBounds(),
                                n = new B(i.min.add(t), i.max.add(t));
                            return t.add(this._getBoundsOffset(n, e))
                        },
                        _getBoundsOffset: function(t, e, i) {
                            var n = O(this.project(e.getNorthEast(), i), this.project(e.getSouthWest(), i)),
                                o = n.min.subtract(t.min),
                                s = n.max.subtract(t.max);
                            return new k(this._rebound(o.x, -s.x), this._rebound(o.y, -s.y))
                        },
                        _rebound: function(t, e) {
                            return t + e > 0 ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e))
                        },
                        _limitZoom: function(t) {
                            var e = this.getMinZoom(),
                                i = this.getMaxZoom(),
                                n = ft ? this.options.zoomSnap : 1;
                            return n && (t = Math.round(t / n) * n), Math.max(e, Math.min(i, t))
                        },
                        _onPanTransitionStep: function() {
                            this.fire("move")
                        },
                        _onPanTransitionEnd: function() {
                            ze(this._mapPane, "leaflet-pan-anim"), this.fire("moveend")
                        },
                        _tryAnimatedPan: function(t, e) {
                            var i = this._getCenterOffset(t)._trunc();
                            return !(!0 !== (e && e.animate) && !this.getSize().contains(i) || (this.panBy(i, e), 0))
                        },
                        _createAnimProxy: function() {
                            var t = this._proxy = we("div", "leaflet-proxy leaflet-zoom-animated");
                            this._panes.mapPane.appendChild(t), this.on("zoomanim", function(t) {
                                var e = ve,
                                    i = this._proxy.style[e];
                                Be(this._proxy, this.project(t.center, t.zoom), this.getZoomScale(t.zoom, 1)), i === this._proxy.style[e] && this._animatingZoom && this._onZoomTransitionEnd()
                            }, this), this.on("load moveend", function() {
                                var t = this.getCenter(),
                                    e = this.getZoom();
                                Be(this._proxy, this.project(t, e), this.getZoomScale(e, 1))
                            }, this), this._on("unload", this._destroyAnimProxy, this)
                        },
                        _destroyAnimProxy: function() {
                            be(this._proxy), delete this._proxy
                        },
                        _catchTransitionEnd: function(t) {
                            this._animatingZoom && t.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd()
                        },
                        _nothingToAnimate: function() {
                            return !this._container.getElementsByClassName("leaflet-zoom-animated").length
                        },
                        _tryAnimatedZoom: function(t, e, i) {
                            if (this._animatingZoom) return !0;
                            if (i = i || {}, !this._zoomAnimated || !1 === i.animate || this._nothingToAnimate() || Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold) return !1;
                            var n = this.getZoomScale(e),
                                o = this._getCenterOffset(t)._divideBy(1 - 1 / n);
                            return !(!0 !== i.animate && !this.getSize().contains(o) || (M(function() {
                                this._moveStart(!0, !1)._animateZoom(t, e, !0)
                            }, this), 0))
                        },
                        _animateZoom: function(t, e, i, n) {
                            this._mapPane && (i && (this._animatingZoom = !0, this._animateToCenter = t, this._animateToZoom = e, Se(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
                                center: t,
                                zoom: e,
                                noUpdate: n
                            }), setTimeout(o(this._onZoomTransitionEnd, this), 250))
                        },
                        _onZoomTransitionEnd: function() {
                            this._animatingZoom && (this._mapPane && ze(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom), M(function() {
                                this._moveEnd(!0)
                            }, this))
                        }
                    }),
                    Ge = S.extend({
                        options: {
                            position: "topright"
                        },
                        initialize: function(t) {
                            _(this, t)
                        },
                        getPosition: function() {
                            return this.options.position
                        },
                        setPosition: function(t) {
                            var e = this._map;
                            return e && e.removeControl(this), this.options.position = t, e && e.addControl(this), this
                        },
                        getContainer: function() {
                            return this._container
                        },
                        addTo: function(t) {
                            this.remove(), this._map = t;
                            var e = this._container = this.onAdd(t),
                                i = this.getPosition(),
                                n = t._controlCorners[i];
                            return Se(e, "leaflet-control"), -1 !== i.indexOf("bottom") ? n.insertBefore(e, n.firstChild) : n.appendChild(e), this
                        },
                        remove: function() {
                            return this._map ? (be(this._container), this.onRemove && this.onRemove(this._map), this._map = null, this) : this
                        },
                        _refocusOnMap: function(t) {
                            this._map && t && t.screenX > 0 && t.screenY > 0 && this._map.getContainer().focus()
                        }
                    }),
                    qe = function(t) {
                        return new Ge(t)
                    };
                Ve.include({
                    addControl: function(t) {
                        return t.addTo(this), this
                    },
                    removeControl: function(t) {
                        return t.remove(), this
                    },
                    _initControlPos: function() {
                        var t = this._controlCorners = {},
                            e = "leaflet-",
                            i = this._controlContainer = we("div", e + "control-container", this._container);

                        function n(n, o) {
                            t[n + o] = we("div", e + n + " " + e + o, i)
                        }
                        n("top", "left"), n("top", "right"), n("bottom", "left"), n("bottom", "right")
                    },
                    _clearControlPos: function() {
                        for (var t in this._controlCorners) be(this._controlCorners[t]);
                        be(this._controlContainer), delete this._controlCorners, delete this._controlContainer
                    }
                });
                var Je = Ge.extend({
                        options: {
                            collapsed: !0,
                            position: "topright",
                            autoZIndex: !0,
                            hideSingleBase: !1,
                            sortLayers: !1,
                            sortFunction: function(t, e, i, n) {
                                return i < n ? -1 : n < i ? 1 : 0
                            }
                        },
                        initialize: function(t, e, i) {
                            for (var n in _(this, i), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1, t) this._addLayer(t[n], n);
                            for (n in e) this._addLayer(e[n], n, !0)
                        },
                        onAdd: function(t) {
                            this._initLayout(), this._update(), this._map = t, t.on("zoomend", this._checkDisabledLayers, this);
                            for (var e = 0; e < this._layers.length; e++) this._layers[e].layer.on("add remove", this._onLayerChange, this);
                            return this._container
                        },
                        addTo: function(t) {
                            return Ge.prototype.addTo.call(this, t), this._expandIfNotCollapsed()
                        },
                        onRemove: function() {
                            this._map.off("zoomend", this._checkDisabledLayers, this);
                            for (var t = 0; t < this._layers.length; t++) this._layers[t].layer.off("add remove", this._onLayerChange, this)
                        },
                        addBaseLayer: function(t, e) {
                            return this._addLayer(t, e), this._map ? this._update() : this
                        },
                        addOverlay: function(t, e) {
                            return this._addLayer(t, e, !0), this._map ? this._update() : this
                        },
                        removeLayer: function(t) {
                            t.off("add remove", this._onLayerChange, this);
                            var e = this._getLayer(a(t));
                            return e && this._layers.splice(this._layers.indexOf(e), 1), this._map ? this._update() : this
                        },
                        expand: function() {
                            Se(this._container, "leaflet-control-layers-expanded"), this._form.style.height = null;
                            var t = this._map.getSize().y - (this._container.offsetTop + 50);
                            return t < this._form.clientHeight ? (Se(this._form, "leaflet-control-layers-scrollbar"), this._form.style.height = t + "px") : ze(this._form, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this
                        },
                        collapse: function() {
                            return ze(this._container, "leaflet-control-layers-expanded"), this
                        },
                        _initLayout: function() {
                            var t = "leaflet-control-layers",
                                e = this._container = we("div", t),
                                i = this.options.collapsed;
                            e.setAttribute("aria-haspopup", !0), ee(e), te(e);
                            var n = this._form = we("form", t + "-list");
                            i && (this._map.on("click", this.collapse, this), it || Jt(e, {
                                mouseenter: this.expand,
                                mouseleave: this.collapse
                            }, this));
                            var o = this._layersLink = we("a", t + "-toggle", e);
                            o.href = "#", o.title = "Layers", xt ? (Jt(o, "click", ne), Jt(o, "click", this.expand, this)) : Jt(o, "focus", this.expand, this), i || this.expand(), this._baseLayersList = we("div", t + "-base", n), this._separator = we("div", t + "-separator", n), this._overlaysList = we("div", t + "-overlays", n), e.appendChild(n)
                        },
                        _getLayer: function(t) {
                            for (var e = 0; e < this._layers.length; e++)
                                if (this._layers[e] && a(this._layers[e].layer) === t) return this._layers[e]
                        },
                        _addLayer: function(t, e, i) {
                            this._map && t.on("add remove", this._onLayerChange, this), this._layers.push({
                                layer: t,
                                name: e,
                                overlay: i
                            }), this.options.sortLayers && this._layers.sort(o(function(t, e) {
                                return this.options.sortFunction(t.layer, e.layer, t.name, e.name)
                            }, this)), this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed()
                        },
                        _update: function() {
                            if (!this._container) return this;
                            Te(this._baseLayersList), Te(this._overlaysList), this._layerControlInputs = [];
                            var t, e, i, n, o = 0;
                            for (i = 0; i < this._layers.length; i++) this._addItem(n = this._layers[i]), e = e || n.overlay, t = t || !n.overlay, o += n.overlay ? 0 : 1;
                            return this.options.hideSingleBase && (this._baseLayersList.style.display = (t = t && o > 1) ? "" : "none"), this._separator.style.display = e && t ? "" : "none", this
                        },
                        _onLayerChange: function(t) {
                            this._handlingClick || this._update();
                            var e = this._getLayer(a(t.target)),
                                i = e.overlay ? "add" === t.type ? "overlayadd" : "overlayremove" : "add" === t.type ? "baselayerchange" : null;
                            i && this._map.fire(i, e)
                        },
                        _createRadioElement: function(t, e) {
                            var i = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (e ? ' checked="checked"' : "") + "/>",
                                n = document.createElement("div");
                            return n.innerHTML = i, n.firstChild
                        },
                        _addItem: function(t) {
                            var e, i = document.createElement("label"),
                                n = this._map.hasLayer(t.layer);
                            t.overlay ? ((e = document.createElement("input")).type = "checkbox", e.className = "leaflet-control-layers-selector", e.defaultChecked = n) : e = this._createRadioElement("leaflet-base-layers", n), this._layerControlInputs.push(e), e.layerId = a(t.layer), Jt(e, "click", this._onInputClick, this);
                            var o = document.createElement("span");
                            o.innerHTML = " " + t.name;
                            var s = document.createElement("div");
                            return i.appendChild(s), s.appendChild(e), s.appendChild(o), (t.overlay ? this._overlaysList : this._baseLayersList).appendChild(i), this._checkDisabledLayers(), i
                        },
                        _onInputClick: function() {
                            var t, e, i = this._layerControlInputs,
                                n = [],
                                o = [];
                            this._handlingClick = !0;
                            for (var s = i.length - 1; s >= 0; s--) e = this._getLayer((t = i[s]).layerId).layer, t.checked ? n.push(e) : t.checked || o.push(e);
                            for (s = 0; s < o.length; s++) this._map.hasLayer(o[s]) && this._map.removeLayer(o[s]);
                            for (s = 0; s < n.length; s++) this._map.hasLayer(n[s]) || this._map.addLayer(n[s]);
                            this._handlingClick = !1, this._refocusOnMap()
                        },
                        _checkDisabledLayers: function() {
                            for (var t, e, i = this._layerControlInputs, n = this._map.getZoom(), o = i.length - 1; o >= 0; o--) e = this._getLayer((t = i[o]).layerId).layer, t.disabled = void 0 !== e.options.minZoom && n < e.options.minZoom || void 0 !== e.options.maxZoom && n > e.options.maxZoom
                        },
                        _expandIfNotCollapsed: function() {
                            return this._map && !this.options.collapsed && this.expand(), this
                        },
                        _expand: function() {
                            return this.expand()
                        },
                        _collapse: function() {
                            return this.collapse()
                        }
                    }),
                    Ke = Ge.extend({
                        options: {
                            position: "topleft",
                            zoomInText: "+",
                            zoomInTitle: "Zoom in",
                            zoomOutText: "&#x2212;",
                            zoomOutTitle: "Zoom out"
                        },
                        onAdd: function(t) {
                            var e = "leaflet-control-zoom",
                                i = we("div", e + " leaflet-bar"),
                                n = this.options;
                            return this._zoomInButton = this._createButton(n.zoomInText, n.zoomInTitle, e + "-in", i, this._zoomIn), this._zoomOutButton = this._createButton(n.zoomOutText, n.zoomOutTitle, e + "-out", i, this._zoomOut), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), i
                        },
                        onRemove: function(t) {
                            t.off("zoomend zoomlevelschange", this._updateDisabled, this)
                        },
                        disable: function() {
                            return this._disabled = !0, this._updateDisabled(), this
                        },
                        enable: function() {
                            return this._disabled = !1, this._updateDisabled(), this
                        },
                        _zoomIn: function(t) {
                            !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
                        },
                        _zoomOut: function(t) {
                            !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
                        },
                        _createButton: function(t, e, i, n, o) {
                            var s = we("a", i, n);
                            return s.innerHTML = t, s.href = "#", s.title = e, s.setAttribute("role", "button"), s.setAttribute("aria-label", e), ee(s), Jt(s, "click", ne), Jt(s, "click", o, this), Jt(s, "click", this._refocusOnMap, this), s
                        },
                        _updateDisabled: function() {
                            var t = this._map,
                                e = "leaflet-disabled";
                            ze(this._zoomInButton, e), ze(this._zoomOutButton, e), (this._disabled || t._zoom === t.getMinZoom()) && Se(this._zoomOutButton, e), (this._disabled || t._zoom === t.getMaxZoom()) && Se(this._zoomInButton, e)
                        }
                    });
                Ve.mergeOptions({
                    zoomControl: !0
                }), Ve.addInitHook(function() {
                    this.options.zoomControl && (this.zoomControl = new Ke, this.addControl(this.zoomControl))
                });
                var Xe = Ge.extend({
                        options: {
                            position: "bottomleft",
                            maxWidth: 100,
                            metric: !0,
                            imperial: !0
                        },
                        onAdd: function(t) {
                            var e = we("div", "leaflet-control-scale"),
                                i = this.options;
                            return this._addScales(i, "leaflet-control-scale-line", e), t.on(i.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), e
                        },
                        onRemove: function(t) {
                            t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this)
                        },
                        _addScales: function(t, e, i) {
                            t.metric && (this._mScale = we("div", e, i)), t.imperial && (this._iScale = we("div", e, i))
                        },
                        _update: function() {
                            var t = this._map,
                                e = t.getSize().y / 2,
                                i = t.distance(t.containerPointToLatLng([0, e]), t.containerPointToLatLng([this.options.maxWidth, e]));
                            this._updateScales(i)
                        },
                        _updateScales: function(t) {
                            this.options.metric && t && this._updateMetric(t), this.options.imperial && t && this._updateImperial(t)
                        },
                        _updateMetric: function(t) {
                            var e = this._getRoundNum(t);
                            this._updateScale(this._mScale, e < 1e3 ? e + " m" : e / 1e3 + " km", e / t)
                        },
                        _updateImperial: function(t) {
                            var e, i, n, o = 3.2808399 * t;
                            o > 5280 ? (i = this._getRoundNum(e = o / 5280), this._updateScale(this._iScale, i + " mi", i / e)) : (n = this._getRoundNum(o), this._updateScale(this._iScale, n + " ft", n / o))
                        },
                        _updateScale: function(t, e, i) {
                            t.style.width = Math.round(this.options.maxWidth * i) + "px", t.innerHTML = e
                        },
                        _getRoundNum: function(t) {
                            var e = Math.pow(10, (Math.floor(t) + "").length - 1),
                                i = t / e;
                            return e * (i >= 10 ? 10 : i >= 5 ? 5 : i >= 3 ? 3 : i >= 2 ? 2 : 1)
                        }
                    }),
                    Ye = Ge.extend({
                        options: {
                            position: "bottomright",
                            prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
                        },
                        initialize: function(t) {
                            _(this, t), this._attributions = {}
                        },
                        onAdd: function(t) {
                            for (var e in t.attributionControl = this, this._container = we("div", "leaflet-control-attribution"), ee(this._container), t._layers) t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
                            return this._update(), this._container
                        },
                        setPrefix: function(t) {
                            return this.options.prefix = t, this._update(), this
                        },
                        addAttribution: function(t) {
                            return t ? (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update(), this) : this
                        },
                        removeAttribution: function(t) {
                            return t ? (this._attributions[t] && (this._attributions[t]--, this._update()), this) : this
                        },
                        _update: function() {
                            if (this._map) {
                                var t = [];
                                for (var e in this._attributions) this._attributions[e] && t.push(e);
                                var i = [];
                                this.options.prefix && i.push(this.options.prefix), t.length && i.push(t.join(", ")), this._container.innerHTML = i.join(" | ")
                            }
                        }
                    });
                Ve.mergeOptions({
                    attributionControl: !0
                }), Ve.addInitHook(function() {
                    this.options.attributionControl && (new Ye).addTo(this)
                }), Ge.Layers = Je, Ge.Zoom = Ke, Ge.Scale = Xe, Ge.Attribution = Ye, qe.layers = function(t, e, i) {
                    return new Je(t, e, i)
                }, qe.zoom = function(t) {
                    return new Ke(t)
                }, qe.scale = function(t) {
                    return new Xe(t)
                }, qe.attribution = function(t) {
                    return new Ye(t)
                };
                var Qe = S.extend({
                    initialize: function(t) {
                        this._map = t
                    },
                    enable: function() {
                        return this._enabled ? this : (this._enabled = !0, this.addHooks(), this)
                    },
                    disable: function() {
                        return this._enabled ? (this._enabled = !1, this.removeHooks(), this) : this
                    },
                    enabled: function() {
                        return !!this._enabled
                    }
                });
                Qe.addTo = function(t, e) {
                    return t.addHandler(e, this), this
                };
                var $e, ti = {
                        Events: z
                    },
                    ei = xt ? "touchstart mousedown" : "mousedown",
                    ii = {
                        mousedown: "mouseup",
                        touchstart: "touchend",
                        pointerdown: "touchend",
                        MSPointerDown: "touchend"
                    },
                    ni = {
                        mousedown: "mousemove",
                        touchstart: "touchmove",
                        pointerdown: "touchmove",
                        MSPointerDown: "touchmove"
                    },
                    oi = D.extend({
                        options: {
                            clickTolerance: 3
                        },
                        initialize: function(t, e, i, n) {
                            _(this, n), this._element = t, this._dragStartTarget = e || t, this._preventOutline = i
                        },
                        enable: function() {
                            this._enabled || (Jt(this._dragStartTarget, ei, this._onDown, this), this._enabled = !0)
                        },
                        disable: function() {
                            this._enabled && (oi._dragging === this && this.finishDrag(), Xt(this._dragStartTarget, ei, this._onDown, this), this._enabled = !1, this._moved = !1)
                        },
                        _onDown: function(t) {
                            if (!t._simulated && this._enabled && (this._moved = !1, !Ce(this._element, "leaflet-zoom-anim") && !(oi._dragging || t.shiftKey || 1 !== t.which && 1 !== t.button && !t.touches || (oi._dragging = this, this._preventOutline && je(this._element), Re(), de(), this._moving)))) {
                                this.fire("down");
                                var e = t.touches ? t.touches[0] : t;
                                this._startPoint = new k(e.clientX, e.clientY), Jt(document, ni[t.type], this._onMove, this), Jt(document, ii[t.type], this._onUp, this)
                            }
                        },
                        _onMove: function(t) {
                            if (!t._simulated && this._enabled)
                                if (t.touches && t.touches.length > 1) this._moved = !0;
                                else {
                                    var e = t.touches && 1 === t.touches.length ? t.touches[0] : t,
                                        i = new k(e.clientX, e.clientY).subtract(this._startPoint);
                                    (i.x || i.y) && (Math.abs(i.x) + Math.abs(i.y) < this.options.clickTolerance || (ie(t), this._moved || (this.fire("dragstart"), this._moved = !0, this._startPos = Ze(this._element).subtract(i), Se(document.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, window.SVGElementInstance && this._lastTarget instanceof SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), Se(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(i), this._moving = !0, E(this._animRequest), this._lastEvent = t, this._animRequest = M(this._updatePosition, this, !0)))
                                }
                        },
                        _updatePosition: function() {
                            var t = {
                                originalEvent: this._lastEvent
                            };
                            this.fire("predrag", t), Oe(this._element, this._newPos), this.fire("drag", t)
                        },
                        _onUp: function(t) {
                            !t._simulated && this._enabled && this.finishDrag()
                        },
                        finishDrag: function() {
                            for (var t in ze(document.body, "leaflet-dragging"), this._lastTarget && (ze(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), ni) Xt(document, ni[t], this._onMove, this), Xt(document, ii[t], this._onUp, this);
                            Ue(), _e(), this._moved && this._moving && (E(this._animRequest), this.fire("dragend", {
                                distance: this._newPos.distanceTo(this._startPos)
                            })), this._moving = !1, oi._dragging = !1
                        }
                    });

                function si(t, e) {
                    if (!e || !t.length) return t.slice();
                    var i = e * e;
                    return function(t, e) {
                        var i = t.length,
                            n = new(typeof Uint8Array != void 0 + "" ? Uint8Array : Array)(i);
                        n[0] = n[i - 1] = 1,
                            function t(e, i, n, o, s) {
                                var a, r, h, l = 0;
                                for (r = o + 1; r <= s - 1; r++)(h = ui(e[r], e[o], e[s], !0)) > l && (a = r, l = h);
                                l > n && (i[a] = 1, t(e, i, n, o, a), t(e, i, n, a, s))
                            }(t, n, e, 0, i - 1);
                        var o, s = [];
                        for (o = 0; o < i; o++) n[o] && s.push(t[o]);
                        return s
                    }(t = function(t, e) {
                        for (var i = [t[0]], n = 1, o = 0, s = t.length; n < s; n++)(h = (r = t[o]).x - (a = t[n]).x) * h + (l = r.y - a.y) * l > e && (i.push(t[n]), o = n);
                        var a, r, h, l;
                        return o < s - 1 && i.push(t[s - 1]), i
                    }(t, i), i)
                }

                function ai(t, e, i) {
                    return Math.sqrt(ui(t, e, i, !0))
                }

                function ri(t, e, i, n, o) {
                    var s, a, r, h = n ? $e : li(t, i),
                        l = li(e, i);
                    for ($e = l;;) {
                        if (!(h | l)) return [t, e];
                        if (h & l) return !1;
                        r = li(a = hi(t, e, s = h || l, i, o), i), s === h ? (t = a, h = r) : (e = a, l = r)
                    }
                }

                function hi(t, e, i, n, o) {
                    var s, a, r = e.x - t.x,
                        h = e.y - t.y,
                        l = n.min,
                        u = n.max;
                    return 8 & i ? (s = t.x + r * (u.y - t.y) / h, a = u.y) : 4 & i ? (s = t.x + r * (l.y - t.y) / h, a = l.y) : 2 & i ? (s = u.x, a = t.y + h * (u.x - t.x) / r) : 1 & i && (s = l.x, a = t.y + h * (l.x - t.x) / r), new k(s, a, o)
                }

                function li(t, e) {
                    var i = 0;
                    return t.x < e.min.x ? i |= 1 : t.x > e.max.x && (i |= 2), t.y < e.min.y ? i |= 4 : t.y > e.max.y && (i |= 8), i
                }

                function ui(t, e, i, n) {
                    var o, s = e.x,
                        a = e.y,
                        r = i.x - s,
                        h = i.y - a,
                        l = r * r + h * h;
                    return l > 0 && ((o = ((t.x - s) * r + (t.y - a) * h) / l) > 1 ? (s = i.x, a = i.y) : o > 0 && (s += r * o, a += h * o)), r = t.x - s, h = t.y - a, n ? r * r + h * h : new k(s, a)
                }

                function ci(t) {
                    return !g(t[0]) || "object" != typeof t[0][0] && void 0 !== t[0][0]
                }

                function di(t) {
                    return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), ci(t)
                }
                var _i = (Object.freeze || Object)({
                    simplify: si,
                    pointToSegmentDistance: ai,
                    closestPointOnSegment: function(t, e, i) {
                        return ui(t, e, i)
                    },
                    clipSegment: ri,
                    _getEdgeIntersection: hi,
                    _getBitCode: li,
                    _sqClosestPointOnSegment: ui,
                    isFlat: ci,
                    _flat: di
                });

                function pi(t, e, i) {
                    var n, o, s, a, r, h, l, u, c, d = [1, 4, 2, 8];
                    for (o = 0, l = t.length; o < l; o++) t[o]._code = li(t[o], e);
                    for (a = 0; a < 4; a++) {
                        for (u = d[a], n = [], o = 0, s = (l = t.length) - 1; o < l; s = o++) h = t[s], (r = t[o])._code & u ? h._code & u || ((c = hi(h, r, u, e, i))._code = li(c, e), n.push(c)) : (h._code & u && ((c = hi(h, r, u, e, i))._code = li(c, e), n.push(c)), n.push(r));
                        t = n
                    }
                    return t
                }
                var mi = (Object.freeze || Object)({
                        clipPolygon: pi
                    }),
                    fi = {
                        project: function(t) {
                            return new k(t.lng, t.lat)
                        },
                        unproject: function(t) {
                            return new R(t.y, t.x)
                        },
                        bounds: new B([-180, -90], [180, 90])
                    },
                    gi = {
                        R: 6378137,
                        R_MINOR: 6356752.314245179,
                        bounds: new B([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),
                        project: function(t) {
                            var e = Math.PI / 180,
                                i = this.R,
                                n = t.lat * e,
                                o = this.R_MINOR / i,
                                s = Math.sqrt(1 - o * o),
                                a = s * Math.sin(n),
                                r = Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - a) / (1 + a), s / 2);
                            return n = -i * Math.log(Math.max(r, 1e-10)), new k(t.lng * e * i, n)
                        },
                        unproject: function(t) {
                            for (var e, i = 180 / Math.PI, n = this.R, o = this.R_MINOR / n, s = Math.sqrt(1 - o * o), a = Math.exp(-t.y / n), r = Math.PI / 2 - 2 * Math.atan(a), h = 0, l = .1; h < 15 && Math.abs(l) > 1e-7; h++) e = s * Math.sin(r), e = Math.pow((1 - e) / (1 + e), s / 2), r += l = Math.PI / 2 - 2 * Math.atan(a * e) - r;
                            return new R(r * i, t.x * i / n)
                        }
                    },
                    vi = (Object.freeze || Object)({
                        LonLat: fi,
                        Mercator: gi,
                        SphericalMercator: F
                    }),
                    yi = i({}, H, {
                        code: "EPSG:3395",
                        projection: gi,
                        transformation: function() {
                            var t = .5 / (Math.PI * gi.R);
                            return G(t, .5, -t, .5)
                        }()
                    }),
                    Pi = i({}, H, {
                        code: "EPSG:4326",
                        projection: fi,
                        transformation: G(1 / 180, 1, -1 / 180, .5)
                    }),
                    Li = i({}, W, {
                        projection: fi,
                        transformation: G(1, 0, -1, 0),
                        scale: function(t) {
                            return Math.pow(2, t)
                        },
                        zoom: function(t) {
                            return Math.log(t) / Math.LN2
                        },
                        distance: function(t, e) {
                            var i = e.lng - t.lng,
                                n = e.lat - t.lat;
                            return Math.sqrt(i * i + n * n)
                        },
                        infinite: !0
                    });
                W.Earth = H, W.EPSG3395 = yi, W.EPSG3857 = q, W.EPSG900913 = J, W.EPSG4326 = Pi, W.Simple = Li;
                var xi = D.extend({
                    options: {
                        pane: "overlayPane",
                        attribution: null,
                        bubblingMouseEvents: !0
                    },
                    addTo: function(t) {
                        return t.addLayer(this), this
                    },
                    remove: function() {
                        return this.removeFrom(this._map || this._mapToAdd)
                    },
                    removeFrom: function(t) {
                        return t && t.removeLayer(this), this
                    },
                    getPane: function(t) {
                        return this._map.getPane(t ? this.options[t] || t : this.options.pane)
                    },
                    addInteractiveTarget: function(t) {
                        return this._map._targets[a(t)] = this, this
                    },
                    removeInteractiveTarget: function(t) {
                        return delete this._map._targets[a(t)], this
                    },
                    getAttribution: function() {
                        return this.options.attribution
                    },
                    _layerAdd: function(t) {
                        var e = t.target;
                        if (e.hasLayer(this)) {
                            if (this._map = e, this._zoomAnimated = e._zoomAnimated, this.getEvents) {
                                var i = this.getEvents();
                                e.on(i, this), this.once("remove", function() {
                                    e.off(i, this)
                                }, this)
                            }
                            this.onAdd(e), this.getAttribution && e.attributionControl && e.attributionControl.addAttribution(this.getAttribution()), this.fire("add"), e.fire("layeradd", {
                                layer: this
                            })
                        }
                    }
                });
                Ve.include({
                    addLayer: function(t) {
                        if (!t._layerAdd) throw new Error("The provided object is not a Layer.");
                        var e = a(t);
                        return this._layers[e] ? this : (this._layers[e] = t, t._mapToAdd = this, t.beforeAdd && t.beforeAdd(this), this.whenReady(t._layerAdd, t), this)
                    },
                    removeLayer: function(t) {
                        var e = a(t);
                        return this._layers[e] ? (this._loaded && t.onRemove(this), t.getAttribution && this.attributionControl && this.attributionControl.removeAttribution(t.getAttribution()), delete this._layers[e], this._loaded && (this.fire("layerremove", {
                            layer: t
                        }), t.fire("remove")), t._map = t._mapToAdd = null, this) : this
                    },
                    hasLayer: function(t) {
                        return !!t && a(t) in this._layers
                    },
                    eachLayer: function(t, e) {
                        for (var i in this._layers) t.call(e, this._layers[i]);
                        return this
                    },
                    _addLayers: function(t) {
                        for (var e = 0, i = (t = t ? g(t) ? t : [t] : []).length; e < i; e++) this.addLayer(t[e])
                    },
                    _addZoomLimit: function(t) {
                        !isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[a(t)] = t, this._updateZoomLevels())
                    },
                    _removeZoomLimit: function(t) {
                        var e = a(t);
                        this._zoomBoundLayers[e] && (delete this._zoomBoundLayers[e], this._updateZoomLevels())
                    },
                    _updateZoomLevels: function() {
                        var t = 1 / 0,
                            e = -1 / 0,
                            i = this._getZoomSpan();
                        for (var n in this._zoomBoundLayers) {
                            var o = this._zoomBoundLayers[n].options;
                            t = void 0 === o.minZoom ? t : Math.min(t, o.minZoom), e = void 0 === o.maxZoom ? e : Math.max(e, o.maxZoom)
                        }
                        this._layersMaxZoom = e === -1 / 0 ? void 0 : e, this._layersMinZoom = t === 1 / 0 ? void 0 : t, i !== this._getZoomSpan() && this.fire("zoomlevelschange"), void 0 === this.options.maxZoom && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), void 0 === this.options.minZoom && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom)
                    }
                });
                var wi = xi.extend({
                        initialize: function(t, e) {
                            var i, n;
                            if (_(this, e), this._layers = {}, t)
                                for (i = 0, n = t.length; i < n; i++) this.addLayer(t[i])
                        },
                        addLayer: function(t) {
                            var e = this.getLayerId(t);
                            return this._layers[e] = t, this._map && this._map.addLayer(t), this
                        },
                        removeLayer: function(t) {
                            var e = t in this._layers ? t : this.getLayerId(t);
                            return this._map && this._layers[e] && this._map.removeLayer(this._layers[e]), delete this._layers[e], this
                        },
                        hasLayer: function(t) {
                            return !!t && (t in this._layers || this.getLayerId(t) in this._layers)
                        },
                        clearLayers: function() {
                            return this.eachLayer(this.removeLayer, this)
                        },
                        invoke: function(t) {
                            var e, i, n = Array.prototype.slice.call(arguments, 1);
                            for (e in this._layers)(i = this._layers[e])[t] && i[t].apply(i, n);
                            return this
                        },
                        onAdd: function(t) {
                            this.eachLayer(t.addLayer, t)
                        },
                        onRemove: function(t) {
                            this.eachLayer(t.removeLayer, t)
                        },
                        eachLayer: function(t, e) {
                            for (var i in this._layers) t.call(e, this._layers[i]);
                            return this
                        },
                        getLayer: function(t) {
                            return this._layers[t]
                        },
                        getLayers: function() {
                            var t = [];
                            return this.eachLayer(t.push, t), t
                        },
                        setZIndex: function(t) {
                            return this.invoke("setZIndex", t)
                        },
                        getLayerId: function(t) {
                            return a(t)
                        }
                    }),
                    bi = wi.extend({
                        addLayer: function(t) {
                            return this.hasLayer(t) ? this : (t.addEventParent(this), wi.prototype.addLayer.call(this, t), this.fire("layeradd", {
                                layer: t
                            }))
                        },
                        removeLayer: function(t) {
                            return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.removeEventParent(this), wi.prototype.removeLayer.call(this, t), this.fire("layerremove", {
                                layer: t
                            })) : this
                        },
                        setStyle: function(t) {
                            return this.invoke("setStyle", t)
                        },
                        bringToFront: function() {
                            return this.invoke("bringToFront")
                        },
                        bringToBack: function() {
                            return this.invoke("bringToBack")
                        },
                        getBounds: function() {
                            var t = new Z;
                            for (var e in this._layers) {
                                var i = this._layers[e];
                                t.extend(i.getBounds ? i.getBounds() : i.getLatLng())
                            }
                            return t
                        }
                    }),
                    Ti = S.extend({
                        options: {
                            popupAnchor: [0, 0],
                            tooltipAnchor: [0, 0]
                        },
                        initialize: function(t) {
                            _(this, t)
                        },
                        createIcon: function(t) {
                            return this._createIcon("icon", t)
                        },
                        createShadow: function(t) {
                            return this._createIcon("shadow", t)
                        },
                        _createIcon: function(t, e) {
                            var i = this._getIconUrl(t);
                            if (!i) {
                                if ("icon" === t) throw new Error("iconUrl not set in Icon options (see the docs).");
                                return null
                            }
                            var n = this._createImg(i, e && "IMG" === e.tagName ? e : null);
                            return this._setIconStyles(n, t), n
                        },
                        _setIconStyles: function(t, e) {
                            var i = this.options,
                                n = i[e + "Size"];
                            "number" == typeof n && (n = [n, n]);
                            var o = A(n),
                                s = A("shadow" === e && i.shadowAnchor || i.iconAnchor || o && o.divideBy(2, !0));
                            t.className = "leaflet-marker-" + e + " " + (i.className || ""), s && (t.style.marginLeft = -s.x + "px", t.style.marginTop = -s.y + "px"), o && (t.style.width = o.x + "px", t.style.height = o.y + "px")
                        },
                        _createImg: function(t, e) {
                            return (e = e || document.createElement("img")).src = t, e
                        },
                        _getIconUrl: function(t) {
                            return Tt && this.options[t + "RetinaUrl"] || this.options[t + "Url"]
                        }
                    }),
                    Mi = Ti.extend({
                        options: {
                            iconUrl: "marker-icon.png",
                            iconRetinaUrl: "marker-icon-2x.png",
                            shadowUrl: "marker-shadow.png",
                            iconSize: [25, 41],
                            iconAnchor: [12, 41],
                            popupAnchor: [1, -34],
                            tooltipAnchor: [16, -28],
                            shadowSize: [41, 41]
                        },
                        _getIconUrl: function(t) {
                            return Mi.imagePath || (Mi.imagePath = this._detectIconPath()), (this.options.imagePath || Mi.imagePath) + Ti.prototype._getIconUrl.call(this, t)
                        },
                        _detectIconPath: function() {
                            var t = we("div", "leaflet-default-icon-path", document.body),
                                e = xe(t, "background-image") || xe(t, "backgroundImage");
                            return document.body.removeChild(t), null === e || 0 !== e.indexOf("url") ? "" : e.replace(/^url\(["']?/, "").replace(/marker-icon\.png["']?\)$/, "")
                        }
                    }),
                    Ei = Qe.extend({
                        initialize: function(t) {
                            this._marker = t
                        },
                        addHooks: function() {
                            var t = this._marker._icon;
                            this._draggable || (this._draggable = new oi(t, t, !0)), this._draggable.on({
                                dragstart: this._onDragStart,
                                predrag: this._onPreDrag,
                                drag: this._onDrag,
                                dragend: this._onDragEnd
                            }, this).enable(), Se(t, "leaflet-marker-draggable")
                        },
                        removeHooks: function() {
                            this._draggable.off({
                                dragstart: this._onDragStart,
                                predrag: this._onPreDrag,
                                drag: this._onDrag,
                                dragend: this._onDragEnd
                            }, this).disable(), this._marker._icon && ze(this._marker._icon, "leaflet-marker-draggable")
                        },
                        moved: function() {
                            return this._draggable && this._draggable._moved
                        },
                        _adjustPan: function(t) {
                            var e = this._marker,
                                i = e._map,
                                n = this._marker.options.autoPanSpeed,
                                o = this._marker.options.autoPanPadding,
                                s = L.DomUtil.getPosition(e._icon),
                                a = i.getPixelBounds(),
                                r = i.getPixelOrigin(),
                                h = O(a.min._subtract(r).add(o), a.max._subtract(r).subtract(o));
                            if (!h.contains(s)) {
                                var l = A((Math.max(h.max.x, s.x) - h.max.x) / (a.max.x - h.max.x) - (Math.min(h.min.x, s.x) - h.min.x) / (a.min.x - h.min.x), (Math.max(h.max.y, s.y) - h.max.y) / (a.max.y - h.max.y) - (Math.min(h.min.y, s.y) - h.min.y) / (a.min.y - h.min.y)).multiplyBy(n);
                                i.panBy(l, {
                                    animate: !1
                                }), this._draggable._newPos._add(l), this._draggable._startPos._add(l), L.DomUtil.setPosition(e._icon, this._draggable._newPos), this._onDrag(t), this._panRequest = M(this._adjustPan.bind(this, t))
                            }
                        },
                        _onDragStart: function() {
                            this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup().fire("movestart").fire("dragstart")
                        },
                        _onPreDrag: function(t) {
                            this._marker.options.autoPan && (E(this._panRequest), this._panRequest = M(this._adjustPan.bind(this, t)))
                        },
                        _onDrag: function(t) {
                            var e = this._marker,
                                i = e._shadow,
                                n = Ze(e._icon),
                                o = e._map.layerPointToLatLng(n);
                            i && Oe(i, n), e._latlng = o, t.latlng = o, t.oldLatLng = this._oldLatLng, e.fire("move", t).fire("drag", t)
                        },
                        _onDragEnd: function(t) {
                            E(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t)
                        }
                    }),
                    Ci = xi.extend({
                        options: {
                            icon: new Mi,
                            interactive: !0,
                            draggable: !1,
                            autoPan: !1,
                            autoPanPadding: [50, 50],
                            autoPanSpeed: 10,
                            keyboard: !0,
                            title: "",
                            alt: "",
                            zIndexOffset: 0,
                            opacity: 1,
                            riseOnHover: !1,
                            riseOffset: 250,
                            pane: "markerPane",
                            bubblingMouseEvents: !1
                        },
                        initialize: function(t, e) {
                            _(this, e), this._latlng = U(t)
                        },
                        onAdd: function(t) {
                            this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation, this._zoomAnimated && t.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update()
                        },
                        onRemove: function(t) {
                            this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && t.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow()
                        },
                        getEvents: function() {
                            return {
                                zoom: this.update,
                                viewreset: this.update
                            }
                        },
                        getLatLng: function() {
                            return this._latlng
                        },
                        setLatLng: function(t) {
                            var e = this._latlng;
                            return this._latlng = U(t), this.update(), this.fire("move", {
                                oldLatLng: e,
                                latlng: this._latlng
                            })
                        },
                        setZIndexOffset: function(t) {
                            return this.options.zIndexOffset = t, this.update()
                        },
                        setIcon: function(t) {
                            return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this
                        },
                        getElement: function() {
                            return this._icon
                        },
                        update: function() {
                            if (this._icon && this._map) {
                                var t = this._map.latLngToLayerPoint(this._latlng).round();
                                this._setPos(t)
                            }
                            return this
                        },
                        _initIcon: function() {
                            var t = this.options,
                                e = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"),
                                i = t.icon.createIcon(this._icon),
                                n = !1;
                            i !== this._icon && (this._icon && this._removeIcon(), n = !0, t.title && (i.title = t.title), "IMG" === i.tagName && (i.alt = t.alt || "")), Se(i, e), t.keyboard && (i.tabIndex = "0"), this._icon = i, t.riseOnHover && this.on({
                                mouseover: this._bringToFront,
                                mouseout: this._resetZIndex
                            });
                            var o = t.icon.createShadow(this._shadow),
                                s = !1;
                            o !== this._shadow && (this._removeShadow(), s = !0), o && (Se(o, e), o.alt = ""), this._shadow = o, t.opacity < 1 && this._updateOpacity(), n && this.getPane().appendChild(this._icon), this._initInteraction(), o && s && this.getPane("shadowPane").appendChild(this._shadow)
                        },
                        _removeIcon: function() {
                            this.options.riseOnHover && this.off({
                                mouseover: this._bringToFront,
                                mouseout: this._resetZIndex
                            }), be(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null
                        },
                        _removeShadow: function() {
                            this._shadow && be(this._shadow), this._shadow = null
                        },
                        _setPos: function(t) {
                            Oe(this._icon, t), this._shadow && Oe(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex()
                        },
                        _updateZIndex: function(t) {
                            this._icon.style.zIndex = this._zIndex + t
                        },
                        _animateZoom: function(t) {
                            var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
                            this._setPos(e)
                        },
                        _initInteraction: function() {
                            if (this.options.interactive && (Se(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), Ei)) {
                                var t = this.options.draggable;
                                this.dragging && (t = this.dragging.enabled(), this.dragging.disable()), this.dragging = new Ei(this), t && this.dragging.enable()
                            }
                        },
                        setOpacity: function(t) {
                            return this.options.opacity = t, this._map && this._updateOpacity(), this
                        },
                        _updateOpacity: function() {
                            var t = this.options.opacity;
                            Ie(this._icon, t), this._shadow && Ie(this._shadow, t)
                        },
                        _bringToFront: function() {
                            this._updateZIndex(this.options.riseOffset)
                        },
                        _resetZIndex: function() {
                            this._updateZIndex(0)
                        },
                        _getPopupAnchor: function() {
                            return this.options.icon.options.popupAnchor
                        },
                        _getTooltipAnchor: function() {
                            return this.options.icon.options.tooltipAnchor
                        }
                    }),
                    Si = xi.extend({
                        options: {
                            stroke: !0,
                            color: "#3388ff",
                            weight: 3,
                            opacity: 1,
                            lineCap: "round",
                            lineJoin: "round",
                            dashArray: null,
                            dashOffset: null,
                            fill: !1,
                            fillColor: null,
                            fillOpacity: .2,
                            fillRule: "evenodd",
                            interactive: !0,
                            bubblingMouseEvents: !0
                        },
                        beforeAdd: function(t) {
                            this._renderer = t.getRenderer(this)
                        },
                        onAdd: function() {
                            this._renderer._initPath(this), this._reset(), this._renderer._addPath(this)
                        },
                        onRemove: function() {
                            this._renderer._removePath(this)
                        },
                        redraw: function() {
                            return this._map && this._renderer._updatePath(this), this
                        },
                        setStyle: function(t) {
                            return _(this, t), this._renderer && this._renderer._updateStyle(this), this
                        },
                        bringToFront: function() {
                            return this._renderer && this._renderer._bringToFront(this), this
                        },
                        bringToBack: function() {
                            return this._renderer && this._renderer._bringToBack(this), this
                        },
                        getElement: function() {
                            return this._path
                        },
                        _reset: function() {
                            this._project(), this._update()
                        },
                        _clickTolerance: function() {
                            return (this.options.stroke ? this.options.weight / 2 : 0) + this._renderer.options.tolerance
                        }
                    }),
                    zi = Si.extend({
                        options: {
                            fill: !0,
                            radius: 10
                        },
                        initialize: function(t, e) {
                            _(this, e), this._latlng = U(t), this._radius = this.options.radius
                        },
                        setLatLng: function(t) {
                            return this._latlng = U(t), this.redraw(), this.fire("move", {
                                latlng: this._latlng
                            })
                        },
                        getLatLng: function() {
                            return this._latlng
                        },
                        setRadius: function(t) {
                            return this.options.radius = this._radius = t, this.redraw()
                        },
                        getRadius: function() {
                            return this._radius
                        },
                        setStyle: function(t) {
                            var e = t && t.radius || this._radius;
                            return Si.prototype.setStyle.call(this, t), this.setRadius(e), this
                        },
                        _project: function() {
                            this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds()
                        },
                        _updateBounds: function() {
                            var t = this._radius,
                                e = this._radiusY || t,
                                i = this._clickTolerance(),
                                n = [t + i, e + i];
                            this._pxBounds = new B(this._point.subtract(n), this._point.add(n))
                        },
                        _update: function() {
                            this._map && this._updatePath()
                        },
                        _updatePath: function() {
                            this._renderer._updateCircle(this)
                        },
                        _empty: function() {
                            return this._radius && !this._renderer._bounds.intersects(this._pxBounds)
                        },
                        _containsPoint: function(t) {
                            return t.distanceTo(this._point) <= this._radius + this._clickTolerance()
                        }
                    }),
                    Di = zi.extend({
                        initialize: function(t, e, n) {
                            if ("number" == typeof e && (e = i({}, n, {
                                    radius: e
                                })), _(this, e), this._latlng = U(t), isNaN(this.options.radius)) throw new Error("Circle radius cannot be NaN");
                            this._mRadius = this.options.radius
                        },
                        setRadius: function(t) {
                            return this._mRadius = t, this.redraw()
                        },
                        getRadius: function() {
                            return this._mRadius
                        },
                        getBounds: function() {
                            var t = [this._radius, this._radiusY || this._radius];
                            return new Z(this._map.layerPointToLatLng(this._point.subtract(t)), this._map.layerPointToLatLng(this._point.add(t)))
                        },
                        setStyle: Si.prototype.setStyle,
                        _project: function() {
                            var t = this._latlng.lng,
                                e = this._latlng.lat,
                                i = this._map,
                                n = i.options.crs;
                            if (n.distance === H.distance) {
                                var o = Math.PI / 180,
                                    s = this._mRadius / H.R / o,
                                    a = i.project([e + s, t]),
                                    r = i.project([e - s, t]),
                                    h = a.add(r).divideBy(2),
                                    l = i.unproject(h).lat,
                                    u = Math.acos((Math.cos(s * o) - Math.sin(e * o) * Math.sin(l * o)) / (Math.cos(e * o) * Math.cos(l * o))) / o;
                                (isNaN(u) || 0 === u) && (u = s / Math.cos(Math.PI / 180 * e)), this._point = h.subtract(i.getPixelOrigin()), this._radius = isNaN(u) ? 0 : h.x - i.project([l, t - u]).x, this._radiusY = h.y - a.y
                            } else {
                                var c = n.unproject(n.project(this._latlng).subtract([this._mRadius, 0]));
                                this._point = i.latLngToLayerPoint(this._latlng), this._radius = this._point.x - i.latLngToLayerPoint(c).x
                            }
                            this._updateBounds()
                        }
                    }),
                    ki = Si.extend({
                        options: {
                            smoothFactor: 1,
                            noClip: !1
                        },
                        initialize: function(t, e) {
                            _(this, e), this._setLatLngs(t)
                        },
                        getLatLngs: function() {
                            return this._latlngs
                        },
                        setLatLngs: function(t) {
                            return this._setLatLngs(t), this.redraw()
                        },
                        isEmpty: function() {
                            return !this._latlngs.length
                        },
                        closestLayerPoint: function(t) {
                            for (var e, i, n = 1 / 0, o = null, s = ui, a = 0, r = this._parts.length; a < r; a++)
                                for (var h = this._parts[a], l = 1, u = h.length; l < u; l++) {
                                    var c = s(t, e = h[l - 1], i = h[l], !0);
                                    c < n && (n = c, o = s(t, e, i))
                                }
                            return o && (o.distance = Math.sqrt(n)), o
                        },
                        getCenter: function() {
                            if (!this._map) throw new Error("Must add layer to map before using getCenter()");
                            var t, e, i, n, o, s, a, r = this._rings[0],
                                h = r.length;
                            if (!h) return null;
                            for (t = 0, e = 0; t < h - 1; t++) e += r[t].distanceTo(r[t + 1]) / 2;
                            if (0 === e) return this._map.layerPointToLatLng(r[0]);
                            for (t = 0, n = 0; t < h - 1; t++)
                                if ((n += i = (o = r[t]).distanceTo(s = r[t + 1])) > e) return this._map.layerPointToLatLng([s.x - (a = (n - e) / i) * (s.x - o.x), s.y - a * (s.y - o.y)])
                        },
                        getBounds: function() {
                            return this._bounds
                        },
                        addLatLng: function(t, e) {
                            return e = e || this._defaultShape(), t = U(t), e.push(t), this._bounds.extend(t), this.redraw()
                        },
                        _setLatLngs: function(t) {
                            this._bounds = new Z, this._latlngs = this._convertLatLngs(t)
                        },
                        _defaultShape: function() {
                            return ci(this._latlngs) ? this._latlngs : this._latlngs[0]
                        },
                        _convertLatLngs: function(t) {
                            for (var e = [], i = ci(t), n = 0, o = t.length; n < o; n++) i ? (e[n] = U(t[n]), this._bounds.extend(e[n])) : e[n] = this._convertLatLngs(t[n]);
                            return e
                        },
                        _project: function() {
                            var t = new B;
                            this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t);
                            var e = this._clickTolerance(),
                                i = new k(e, e);
                            this._bounds.isValid() && t.isValid() && (t.min._subtract(i), t.max._add(i), this._pxBounds = t)
                        },
                        _projectLatlngs: function(t, e, i) {
                            var n, o, s = t.length;
                            if (t[0] instanceof R) {
                                for (o = [], n = 0; n < s; n++) o[n] = this._map.latLngToLayerPoint(t[n]), i.extend(o[n]);
                                e.push(o)
                            } else
                                for (n = 0; n < s; n++) this._projectLatlngs(t[n], e, i)
                        },
                        _clipPoints: function() {
                            var t = this._renderer._bounds;
                            if (this._parts = [], this._pxBounds && this._pxBounds.intersects(t))
                                if (this.options.noClip) this._parts = this._rings;
                                else {
                                    var e, i, n, o, s, a, r, h = this._parts;
                                    for (e = 0, n = 0, o = this._rings.length; e < o; e++)
                                        for (i = 0, s = (r = this._rings[e]).length; i < s - 1; i++)(a = ri(r[i], r[i + 1], t, i, !0)) && (h[n] = h[n] || [], h[n].push(a[0]), a[1] === r[i + 1] && i !== s - 2 || (h[n].push(a[1]), n++))
                                }
                        },
                        _simplifyPoints: function() {
                            for (var t = this._parts, e = this.options.smoothFactor, i = 0, n = t.length; i < n; i++) t[i] = si(t[i], e)
                        },
                        _update: function() {
                            this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath())
                        },
                        _updatePath: function() {
                            this._renderer._updatePoly(this)
                        },
                        _containsPoint: function(t, e) {
                            var i, n, o, s, a, r, h = this._clickTolerance();
                            if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
                            for (i = 0, s = this._parts.length; i < s; i++)
                                for (n = 0, o = (a = (r = this._parts[i]).length) - 1; n < a; o = n++)
                                    if ((e || 0 !== n) && ai(t, r[o], r[n]) <= h) return !0;
                            return !1
                        }
                    });
                ki._flat = di;
                var Ii = ki.extend({
                        options: {
                            fill: !0
                        },
                        isEmpty: function() {
                            return !this._latlngs.length || !this._latlngs[0].length
                        },
                        getCenter: function() {
                            if (!this._map) throw new Error("Must add layer to map before using getCenter()");
                            var t, e, i, n, o, s, a, r, h = this._rings[0],
                                l = h.length;
                            if (!l) return null;
                            for (s = a = r = 0, t = 0, e = l - 1; t < l; e = t++) a += ((i = h[t]).x + (n = h[e]).x) * (o = i.y * n.x - n.y * i.x), r += (i.y + n.y) * o, s += 3 * o;
                            return this._map.layerPointToLatLng(0 === s ? h[0] : [a / s, r / s])
                        },
                        _convertLatLngs: function(t) {
                            var e = ki.prototype._convertLatLngs.call(this, t),
                                i = e.length;
                            return i >= 2 && e[0] instanceof R && e[0].equals(e[i - 1]) && e.pop(), e
                        },
                        _setLatLngs: function(t) {
                            ki.prototype._setLatLngs.call(this, t), ci(this._latlngs) && (this._latlngs = [this._latlngs])
                        },
                        _defaultShape: function() {
                            return ci(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0]
                        },
                        _clipPoints: function() {
                            var t = this._renderer._bounds,
                                e = this.options.weight,
                                i = new k(e, e);
                            if (t = new B(t.min.subtract(i), t.max.add(i)), this._parts = [], this._pxBounds && this._pxBounds.intersects(t))
                                if (this.options.noClip) this._parts = this._rings;
                                else
                                    for (var n, o = 0, s = this._rings.length; o < s; o++)(n = pi(this._rings[o], t, !0)).length && this._parts.push(n)
                        },
                        _updatePath: function() {
                            this._renderer._updatePoly(this, !0)
                        },
                        _containsPoint: function(t) {
                            var e, i, n, o, s, a, r, h, l = !1;
                            if (!this._pxBounds.contains(t)) return !1;
                            for (o = 0, r = this._parts.length; o < r; o++)
                                for (s = 0, a = (h = (e = this._parts[o]).length) - 1; s < h; a = s++)(i = e[s]).y > t.y != (n = e[a]).y > t.y && t.x < (n.x - i.x) * (t.y - i.y) / (n.y - i.y) + i.x && (l = !l);
                            return l || ki.prototype._containsPoint.call(this, t, !0)
                        }
                    }),
                    Ai = bi.extend({
                        initialize: function(t, e) {
                            _(this, e), this._layers = {}, t && this.addData(t)
                        },
                        addData: function(t) {
                            var e, i, n, o = g(t) ? t : t.features;
                            if (o) {
                                for (e = 0, i = o.length; e < i; e++)((n = o[e]).geometries || n.geometry || n.features || n.coordinates) && this.addData(n);
                                return this
                            }
                            var s = this.options;
                            if (s.filter && !s.filter(t)) return this;
                            var a = Bi(t, s);
                            return a ? (a.feature = ji(t), a.defaultOptions = a.options, this.resetStyle(a), s.onEachFeature && s.onEachFeature(t, a), this.addLayer(a)) : this
                        },
                        resetStyle: function(t) {
                            return t.options = i({}, t.defaultOptions), this._setLayerStyle(t, this.options.style), this
                        },
                        setStyle: function(t) {
                            return this.eachLayer(function(e) {
                                this._setLayerStyle(e, t)
                            }, this)
                        },
                        _setLayerStyle: function(t, e) {
                            "function" == typeof e && (e = e(t.feature)), t.setStyle && t.setStyle(e)
                        }
                    });

                function Bi(t, e) {
                    var i, n, o, s, a = "Feature" === t.type ? t.geometry : t,
                        r = a ? a.coordinates : null,
                        h = [],
                        l = e && e.pointToLayer,
                        u = e && e.coordsToLatLng || Oi;
                    if (!r && !a) return null;
                    switch (a.type) {
                        case "Point":
                            return i = u(r), l ? l(t, i) : new Ci(i);
                        case "MultiPoint":
                            for (o = 0, s = r.length; o < s; o++) i = u(r[o]), h.push(l ? l(t, i) : new Ci(i));
                            return new bi(h);
                        case "LineString":
                        case "MultiLineString":
                            return n = Zi(r, "LineString" === a.type ? 0 : 1, u), new ki(n, e);
                        case "Polygon":
                        case "MultiPolygon":
                            return n = Zi(r, "Polygon" === a.type ? 1 : 2, u), new Ii(n, e);
                        case "GeometryCollection":
                            for (o = 0, s = a.geometries.length; o < s; o++) {
                                var c = Bi({
                                    geometry: a.geometries[o],
                                    type: "Feature",
                                    properties: t.properties
                                }, e);
                                c && h.push(c)
                            }
                            return new bi(h);
                        default:
                            throw new Error("Invalid GeoJSON object.")
                    }
                }

                function Oi(t) {
                    return new R(t[1], t[0], t[2])
                }

                function Zi(t, e, i) {
                    for (var n, o = [], s = 0, a = t.length; s < a; s++) n = e ? Zi(t[s], e - 1, i) : (i || Oi)(t[s]), o.push(n);
                    return o
                }

                function Ni(t, e) {
                    return e = "number" == typeof e ? e : 6, void 0 !== t.alt ? [u(t.lng, e), u(t.lat, e), u(t.alt, e)] : [u(t.lng, e), u(t.lat, e)]
                }

                function Ri(t, e, i, n) {
                    for (var o = [], s = 0, a = t.length; s < a; s++) o.push(e ? Ri(t[s], e - 1, i, n) : Ni(t[s], n));
                    return !e && i && o.push(o[0]), o
                }

                function Ui(t, e) {
                    return t.feature ? i({}, t.feature, {
                        geometry: e
                    }) : ji(e)
                }

                function ji(t) {
                    return "Feature" === t.type || "FeatureCollection" === t.type ? t : {
                        type: "Feature",
                        properties: {},
                        geometry: t
                    }
                }
                var Wi = {
                    toGeoJSON: function(t) {
                        return Ui(this, {
                            type: "Point",
                            coordinates: Ni(this.getLatLng(), t)
                        })
                    }
                };

                function Hi(t, e) {
                    return new Ai(t, e)
                }
                Ci.include(Wi), Di.include(Wi), zi.include(Wi), ki.include({
                    toGeoJSON: function(t) {
                        var e = !ci(this._latlngs),
                            i = Ri(this._latlngs, e ? 1 : 0, !1, t);
                        return Ui(this, {
                            type: (e ? "Multi" : "") + "LineString",
                            coordinates: i
                        })
                    }
                }), Ii.include({
                    toGeoJSON: function(t) {
                        var e = !ci(this._latlngs),
                            i = e && !ci(this._latlngs[0]),
                            n = Ri(this._latlngs, i ? 2 : e ? 1 : 0, !0, t);
                        return e || (n = [n]), Ui(this, {
                            type: (i ? "Multi" : "") + "Polygon",
                            coordinates: n
                        })
                    }
                }), wi.include({
                    toMultiPoint: function(t) {
                        var e = [];
                        return this.eachLayer(function(i) {
                            e.push(i.toGeoJSON(t).geometry.coordinates)
                        }), Ui(this, {
                            type: "MultiPoint",
                            coordinates: e
                        })
                    },
                    toGeoJSON: function(t) {
                        var e = this.feature && this.feature.geometry && this.feature.geometry.type;
                        if ("MultiPoint" === e) return this.toMultiPoint(t);
                        var i = "GeometryCollection" === e,
                            n = [];
                        return this.eachLayer(function(e) {
                            if (e.toGeoJSON) {
                                var o = e.toGeoJSON(t);
                                if (i) n.push(o.geometry);
                                else {
                                    var s = ji(o);
                                    "FeatureCollection" === s.type ? n.push.apply(n, s.features) : n.push(s)
                                }
                            }
                        }), i ? Ui(this, {
                            geometries: n,
                            type: "GeometryCollection"
                        }) : {
                            type: "FeatureCollection",
                            features: n
                        }
                    }
                });
                var Fi = Hi,
                    Vi = xi.extend({
                        options: {
                            opacity: 1,
                            alt: "",
                            interactive: !1,
                            crossOrigin: !1,
                            errorOverlayUrl: "",
                            zIndex: 1,
                            className: ""
                        },
                        initialize: function(t, e, i) {
                            this._url = t, this._bounds = N(e), _(this, i)
                        },
                        onAdd: function() {
                            this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (Se(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset()
                        },
                        onRemove: function() {
                            be(this._image), this.options.interactive && this.removeInteractiveTarget(this._image)
                        },
                        setOpacity: function(t) {
                            return this.options.opacity = t, this._image && this._updateOpacity(), this
                        },
                        setStyle: function(t) {
                            return t.opacity && this.setOpacity(t.opacity), this
                        },
                        bringToFront: function() {
                            return this._map && Me(this._image), this
                        },
                        bringToBack: function() {
                            return this._map && Ee(this._image), this
                        },
                        setUrl: function(t) {
                            return this._url = t, this._image && (this._image.src = t), this
                        },
                        setBounds: function(t) {
                            return this._bounds = N(t), this._map && this._reset(), this
                        },
                        getEvents: function() {
                            var t = {
                                zoom: this._reset,
                                viewreset: this._reset
                            };
                            return this._zoomAnimated && (t.zoomanim = this._animateZoom), t
                        },
                        setZIndex: function(t) {
                            return this.options.zIndex = t, this._updateZIndex(), this
                        },
                        getBounds: function() {
                            return this._bounds
                        },
                        getElement: function() {
                            return this._image
                        },
                        _initImage: function() {
                            var t = "IMG" === this._url.tagName,
                                e = this._image = t ? this._url : we("img");
                            Se(e, "leaflet-image-layer"), this._zoomAnimated && Se(e, "leaflet-zoom-animated"), this.options.className && Se(e, this.options.className), e.onselectstart = l, e.onmousemove = l, e.onload = o(this.fire, this, "load"), e.onerror = o(this._overlayOnError, this, "error"), this.options.crossOrigin && (e.crossOrigin = ""), this.options.zIndex && this._updateZIndex(), t ? this._url = e.src : (e.src = this._url, e.alt = this.options.alt)
                        },
                        _animateZoom: function(t) {
                            var e = this._map.getZoomScale(t.zoom),
                                i = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
                            Be(this._image, i, e)
                        },
                        _reset: function() {
                            var t = this._image,
                                e = new B(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())),
                                i = e.getSize();
                            Oe(t, e.min), t.style.width = i.x + "px", t.style.height = i.y + "px"
                        },
                        _updateOpacity: function() {
                            Ie(this._image, this.options.opacity)
                        },
                        _updateZIndex: function() {
                            this._image && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._image.style.zIndex = this.options.zIndex)
                        },
                        _overlayOnError: function() {
                            this.fire("error");
                            var t = this.options.errorOverlayUrl;
                            t && this._url !== t && (this._url = t, this._image.src = t)
                        }
                    }),
                    Gi = Vi.extend({
                        options: {
                            autoplay: !0,
                            loop: !0
                        },
                        _initImage: function() {
                            var t = "VIDEO" === this._url.tagName,
                                e = this._image = t ? this._url : we("video");
                            if (Se(e, "leaflet-image-layer"), this._zoomAnimated && Se(e, "leaflet-zoom-animated"), e.onselectstart = l, e.onmousemove = l, e.onloadeddata = o(this.fire, this, "load"), t) {
                                for (var i = e.getElementsByTagName("source"), n = [], s = 0; s < i.length; s++) n.push(i[s].src);
                                this._url = i.length > 0 ? n : [e.src]
                            } else {
                                g(this._url) || (this._url = [this._url]), e.autoplay = !!this.options.autoplay, e.loop = !!this.options.loop;
                                for (var a = 0; a < this._url.length; a++) {
                                    var r = we("source");
                                    r.src = this._url[a], e.appendChild(r)
                                }
                            }
                        }
                    }),
                    qi = xi.extend({
                        options: {
                            offset: [0, 7],
                            className: "",
                            pane: "popupPane"
                        },
                        initialize: function(t, e) {
                            _(this, t), this._source = e
                        },
                        onAdd: function(t) {
                            this._zoomAnimated = t._zoomAnimated, this._container || this._initLayout(), t._fadeAnimated && Ie(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), t._fadeAnimated && Ie(this._container, 1), this.bringToFront()
                        },
                        onRemove: function(t) {
                            t._fadeAnimated ? (Ie(this._container, 0), this._removeTimeout = setTimeout(o(be, void 0, this._container), 200)) : be(this._container)
                        },
                        getLatLng: function() {
                            return this._latlng
                        },
                        setLatLng: function(t) {
                            return this._latlng = U(t), this._map && (this._updatePosition(), this._adjustPan()), this
                        },
                        getContent: function() {
                            return this._content
                        },
                        setContent: function(t) {
                            return this._content = t, this.update(), this
                        },
                        getElement: function() {
                            return this._container
                        },
                        update: function() {
                            this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan())
                        },
                        getEvents: function() {
                            var t = {
                                zoom: this._updatePosition,
                                viewreset: this._updatePosition
                            };
                            return this._zoomAnimated && (t.zoomanim = this._animateZoom), t
                        },
                        isOpen: function() {
                            return !!this._map && this._map.hasLayer(this)
                        },
                        bringToFront: function() {
                            return this._map && Me(this._container), this
                        },
                        bringToBack: function() {
                            return this._map && Ee(this._container), this
                        },
                        _updateContent: function() {
                            if (this._content) {
                                var t = this._contentNode,
                                    e = "function" == typeof this._content ? this._content(this._source || this) : this._content;
                                if ("string" == typeof e) t.innerHTML = e;
                                else {
                                    for (; t.hasChildNodes();) t.removeChild(t.firstChild);
                                    t.appendChild(e)
                                }
                                this.fire("contentupdate")
                            }
                        },
                        _updatePosition: function() {
                            if (this._map) {
                                var t = this._map.latLngToLayerPoint(this._latlng),
                                    e = A(this.options.offset),
                                    i = this._getAnchor();
                                this._zoomAnimated ? Oe(this._container, t.add(i)) : e = e.add(t).add(i);
                                var n = this._containerBottom = -e.y,
                                    o = this._containerLeft = -Math.round(this._containerWidth / 2) + e.x;
                                this._container.style.bottom = n + "px", this._container.style.left = o + "px"
                            }
                        },
                        _getAnchor: function() {
                            return [0, 0]
                        }
                    }),
                    Ji = qi.extend({
                        options: {
                            maxWidth: 300,
                            minWidth: 50,
                            maxHeight: null,
                            autoPan: !0,
                            autoPanPaddingTopLeft: null,
                            autoPanPaddingBottomRight: null,
                            autoPanPadding: [5, 5],
                            keepInView: !1,
                            closeButton: !0,
                            autoClose: !0,
                            closeOnEscapeKey: !0,
                            className: ""
                        },
                        openOn: function(t) {
                            return t.openPopup(this), this
                        },
                        onAdd: function(t) {
                            qi.prototype.onAdd.call(this, t), t.fire("popupopen", {
                                popup: this
                            }), this._source && (this._source.fire("popupopen", {
                                popup: this
                            }, !0), this._source instanceof Si || this._source.on("preclick", $t))
                        },
                        onRemove: function(t) {
                            qi.prototype.onRemove.call(this, t), t.fire("popupclose", {
                                popup: this
                            }), this._source && (this._source.fire("popupclose", {
                                popup: this
                            }, !0), this._source instanceof Si || this._source.off("preclick", $t))
                        },
                        getEvents: function() {
                            var t = qi.prototype.getEvents.call(this);
                            return (void 0 !== this.options.closeOnClick ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this._close), this.options.keepInView && (t.moveend = this._adjustPan), t
                        },
                        _close: function() {
                            this._map && this._map.closePopup(this)
                        },
                        _initLayout: function() {
                            var t = "leaflet-popup",
                                e = this._container = we("div", t + " " + (this.options.className || "") + " leaflet-zoom-animated"),
                                i = this._wrapper = we("div", t + "-content-wrapper", e);
                            if (this._contentNode = we("div", t + "-content", i), ee(i), te(this._contentNode), Jt(i, "contextmenu", $t), this._tipContainer = we("div", t + "-tip-container", e), this._tip = we("div", t + "-tip", this._tipContainer), this.options.closeButton) {
                                var n = this._closeButton = we("a", t + "-close-button", e);
                                n.href = "#close", n.innerHTML = "&#215;", Jt(n, "click", this._onCloseButtonClick, this)
                            }
                        },
                        _updateLayout: function() {
                            var t = this._contentNode,
                                e = t.style;
                            e.width = "", e.whiteSpace = "nowrap";
                            var i = t.offsetWidth;
                            i = Math.min(i, this.options.maxWidth), i = Math.max(i, this.options.minWidth), e.width = i + 1 + "px", e.whiteSpace = "", e.height = "";
                            var n = this.options.maxHeight;
                            n && t.offsetHeight > n ? (e.height = n + "px", Se(t, "leaflet-popup-scrolled")) : ze(t, "leaflet-popup-scrolled"), this._containerWidth = this._container.offsetWidth
                        },
                        _animateZoom: function(t) {
                            var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center),
                                i = this._getAnchor();
                            Oe(this._container, e.add(i))
                        },
                        _adjustPan: function() {
                            if (!(!this.options.autoPan || this._map._panAnim && this._map._panAnim._inProgress)) {
                                var t = this._map,
                                    e = parseInt(xe(this._container, "marginBottom"), 10) || 0,
                                    i = this._container.offsetHeight + e,
                                    n = this._containerWidth,
                                    o = new k(this._containerLeft, -i - this._containerBottom);
                                o._add(Ze(this._container));
                                var s = t.layerPointToContainerPoint(o),
                                    a = A(this.options.autoPanPadding),
                                    r = A(this.options.autoPanPaddingTopLeft || a),
                                    h = A(this.options.autoPanPaddingBottomRight || a),
                                    l = t.getSize(),
                                    u = 0,
                                    c = 0;
                                s.x + n + h.x > l.x && (u = s.x + n - l.x + h.x), s.x - u - r.x < 0 && (u = s.x - r.x), s.y + i + h.y > l.y && (c = s.y + i - l.y + h.y), s.y - c - r.y < 0 && (c = s.y - r.y), (u || c) && t.fire("autopanstart").panBy([u, c])
                            }
                        },
                        _onCloseButtonClick: function(t) {
                            this._close(), ne(t)
                        },
                        _getAnchor: function() {
                            return A(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0])
                        }
                    });
                Ve.mergeOptions({
                    closePopupOnClick: !0
                }), Ve.include({
                    openPopup: function(t, e, i) {
                        return t instanceof Ji || (t = new Ji(i).setContent(t)), e && t.setLatLng(e), this.hasLayer(t) ? this : (this._popup && this._popup.options.autoClose && this.closePopup(), this._popup = t, this.addLayer(t))
                    },
                    closePopup: function(t) {
                        return t && t !== this._popup || (t = this._popup, this._popup = null), t && this.removeLayer(t), this
                    }
                }), xi.include({
                    bindPopup: function(t, e) {
                        return t instanceof Ji ? (_(t, e), this._popup = t, t._source = this) : (this._popup && !e || (this._popup = new Ji(e, this)), this._popup.setContent(t)), this._popupHandlersAdded || (this.on({
                            click: this._openPopup,
                            keypress: this._onKeyPress,
                            remove: this.closePopup,
                            move: this._movePopup
                        }), this._popupHandlersAdded = !0), this
                    },
                    unbindPopup: function() {
                        return this._popup && (this.off({
                            click: this._openPopup,
                            keypress: this._onKeyPress,
                            remove: this.closePopup,
                            move: this._movePopup
                        }), this._popupHandlersAdded = !1, this._popup = null), this
                    },
                    openPopup: function(t, e) {
                        if (t instanceof xi || (e = t, t = this), t instanceof bi)
                            for (var i in this._layers) {
                                t = this._layers[i];
                                break
                            }
                        return e || (e = t.getCenter ? t.getCenter() : t.getLatLng()), this._popup && this._map && (this._popup._source = t, this._popup.update(), this._map.openPopup(this._popup, e)), this
                    },
                    closePopup: function() {
                        return this._popup && this._popup._close(), this
                    },
                    togglePopup: function(t) {
                        return this._popup && (this._popup._map ? this.closePopup() : this.openPopup(t)), this
                    },
                    isPopupOpen: function() {
                        return !!this._popup && this._popup.isOpen()
                    },
                    setPopupContent: function(t) {
                        return this._popup && this._popup.setContent(t), this
                    },
                    getPopup: function() {
                        return this._popup
                    },
                    _openPopup: function(t) {
                        var e = t.layer || t.target;
                        this._popup && this._map && (ne(t), e instanceof Si ? this.openPopup(t.layer || t.target, t.latlng) : this._map.hasLayer(this._popup) && this._popup._source === e ? this.closePopup() : this.openPopup(e, t.latlng))
                    },
                    _movePopup: function(t) {
                        this._popup.setLatLng(t.latlng)
                    },
                    _onKeyPress: function(t) {
                        13 === t.originalEvent.keyCode && this._openPopup(t)
                    }
                });
                var Ki = qi.extend({
                    options: {
                        pane: "tooltipPane",
                        offset: [0, 0],
                        direction: "auto",
                        permanent: !1,
                        sticky: !1,
                        interactive: !1,
                        opacity: .9
                    },
                    onAdd: function(t) {
                        qi.prototype.onAdd.call(this, t), this.setOpacity(this.options.opacity), t.fire("tooltipopen", {
                            tooltip: this
                        }), this._source && this._source.fire("tooltipopen", {
                            tooltip: this
                        }, !0)
                    },
                    onRemove: function(t) {
                        qi.prototype.onRemove.call(this, t), t.fire("tooltipclose", {
                            tooltip: this
                        }), this._source && this._source.fire("tooltipclose", {
                            tooltip: this
                        }, !0)
                    },
                    getEvents: function() {
                        var t = qi.prototype.getEvents.call(this);
                        return xt && !this.options.permanent && (t.preclick = this._close), t
                    },
                    _close: function() {
                        this._map && this._map.closeTooltip(this)
                    },
                    _initLayout: function() {
                        this._contentNode = this._container = we("div", "leaflet-tooltip " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"))
                    },
                    _updateLayout: function() {},
                    _adjustPan: function() {},
                    _setPosition: function(t) {
                        var e = this._map,
                            i = this._container,
                            n = e.latLngToContainerPoint(e.getCenter()),
                            o = e.layerPointToContainerPoint(t),
                            s = this.options.direction,
                            a = i.offsetWidth,
                            r = i.offsetHeight,
                            h = A(this.options.offset),
                            l = this._getAnchor();
                        "top" === s ? t = t.add(A(-a / 2 + h.x, -r + h.y + l.y, !0)) : "bottom" === s ? t = t.subtract(A(a / 2 - h.x, -h.y, !0)) : "center" === s ? t = t.subtract(A(a / 2 + h.x, r / 2 - l.y + h.y, !0)) : "right" === s || "auto" === s && o.x < n.x ? (s = "right", t = t.add(A(h.x + l.x, l.y - r / 2 + h.y, !0))) : (s = "left", t = t.subtract(A(a + l.x - h.x, r / 2 - l.y - h.y, !0))), ze(i, "leaflet-tooltip-right"), ze(i, "leaflet-tooltip-left"), ze(i, "leaflet-tooltip-top"), ze(i, "leaflet-tooltip-bottom"), Se(i, "leaflet-tooltip-" + s), Oe(i, t)
                    },
                    _updatePosition: function() {
                        var t = this._map.latLngToLayerPoint(this._latlng);
                        this._setPosition(t)
                    },
                    setOpacity: function(t) {
                        this.options.opacity = t, this._container && Ie(this._container, t)
                    },
                    _animateZoom: function(t) {
                        var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
                        this._setPosition(e)
                    },
                    _getAnchor: function() {
                        return A(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0])
                    }
                });
                Ve.include({
                    openTooltip: function(t, e, i) {
                        return t instanceof Ki || (t = new Ki(i).setContent(t)), e && t.setLatLng(e), this.hasLayer(t) ? this : this.addLayer(t)
                    },
                    closeTooltip: function(t) {
                        return t && this.removeLayer(t), this
                    }
                }), xi.include({
                    bindTooltip: function(t, e) {
                        return t instanceof Ki ? (_(t, e), this._tooltip = t, t._source = this) : (this._tooltip && !e || (this._tooltip = new Ki(e, this)), this._tooltip.setContent(t)), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this
                    },
                    unbindTooltip: function() {
                        return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this
                    },
                    _initTooltipInteractions: function(t) {
                        if (t || !this._tooltipHandlersAdded) {
                            var e = t ? "off" : "on",
                                i = {
                                    remove: this.closeTooltip,
                                    move: this._moveTooltip
                                };
                            this._tooltip.options.permanent ? i.add = this._openTooltip : (i.mouseover = this._openTooltip, i.mouseout = this.closeTooltip, this._tooltip.options.sticky && (i.mousemove = this._moveTooltip), xt && (i.click = this._openTooltip)), this[e](i), this._tooltipHandlersAdded = !t
                        }
                    },
                    openTooltip: function(t, e) {
                        if (t instanceof xi || (e = t, t = this), t instanceof bi)
                            for (var i in this._layers) {
                                t = this._layers[i];
                                break
                            }
                        return e || (e = t.getCenter ? t.getCenter() : t.getLatLng()), this._tooltip && this._map && (this._tooltip._source = t, this._tooltip.update(), this._map.openTooltip(this._tooltip, e), this._tooltip.options.interactive && this._tooltip._container && (Se(this._tooltip._container, "leaflet-clickable"), this.addInteractiveTarget(this._tooltip._container))), this
                    },
                    closeTooltip: function() {
                        return this._tooltip && (this._tooltip._close(), this._tooltip.options.interactive && this._tooltip._container && (ze(this._tooltip._container, "leaflet-clickable"), this.removeInteractiveTarget(this._tooltip._container))), this
                    },
                    toggleTooltip: function(t) {
                        return this._tooltip && (this._tooltip._map ? this.closeTooltip() : this.openTooltip(t)), this
                    },
                    isTooltipOpen: function() {
                        return this._tooltip.isOpen()
                    },
                    setTooltipContent: function(t) {
                        return this._tooltip && this._tooltip.setContent(t), this
                    },
                    getTooltip: function() {
                        return this._tooltip
                    },
                    _openTooltip: function(t) {
                        this._tooltip && this._map && this.openTooltip(t.layer || t.target, this._tooltip.options.sticky ? t.latlng : void 0)
                    },
                    _moveTooltip: function(t) {
                        var e, i, n = t.latlng;
                        this._tooltip.options.sticky && t.originalEvent && (e = this._map.mouseEventToContainerPoint(t.originalEvent), i = this._map.containerPointToLayerPoint(e), n = this._map.layerPointToLatLng(i)), this._tooltip.setLatLng(n)
                    }
                });
                var Xi = Ti.extend({
                    options: {
                        iconSize: [12, 12],
                        html: !1,
                        bgPos: null,
                        className: "leaflet-div-icon"
                    },
                    createIcon: function(t) {
                        var e = t && "DIV" === t.tagName ? t : document.createElement("div"),
                            i = this.options;
                        if (e.innerHTML = !1 !== i.html ? i.html : "", i.bgPos) {
                            var n = A(i.bgPos);
                            e.style.backgroundPosition = -n.x + "px " + -n.y + "px"
                        }
                        return this._setIconStyles(e, "icon"), e
                    },
                    createShadow: function() {
                        return null
                    }
                });
                Ti.Default = Mi;
                var Yi = xi.extend({
                        options: {
                            tileSize: 256,
                            opacity: 1,
                            updateWhenIdle: gt,
                            updateWhenZooming: !0,
                            updateInterval: 200,
                            zIndex: 1,
                            bounds: null,
                            minZoom: 0,
                            maxZoom: void 0,
                            maxNativeZoom: void 0,
                            minNativeZoom: void 0,
                            noWrap: !1,
                            pane: "tilePane",
                            className: "",
                            keepBuffer: 2
                        },
                        initialize: function(t) {
                            _(this, t)
                        },
                        onAdd: function() {
                            this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView(), this._update()
                        },
                        beforeAdd: function(t) {
                            t._addZoomLimit(this)
                        },
                        onRemove: function(t) {
                            this._removeAllTiles(), be(this._container), t._removeZoomLimit(this), this._container = null, this._tileZoom = void 0
                        },
                        bringToFront: function() {
                            return this._map && (Me(this._container), this._setAutoZIndex(Math.max)), this
                        },
                        bringToBack: function() {
                            return this._map && (Ee(this._container), this._setAutoZIndex(Math.min)), this
                        },
                        getContainer: function() {
                            return this._container
                        },
                        setOpacity: function(t) {
                            return this.options.opacity = t, this._updateOpacity(), this
                        },
                        setZIndex: function(t) {
                            return this.options.zIndex = t, this._updateZIndex(), this
                        },
                        isLoading: function() {
                            return this._loading
                        },
                        redraw: function() {
                            return this._map && (this._removeAllTiles(), this._update()), this
                        },
                        getEvents: function() {
                            var t = {
                                viewprereset: this._invalidateAll,
                                viewreset: this._resetView,
                                zoom: this._resetView,
                                moveend: this._onMoveEnd
                            };
                            return this.options.updateWhenIdle || (this._onMove || (this._onMove = r(this._onMoveEnd, this.options.updateInterval, this)), t.move = this._onMove), this._zoomAnimated && (t.zoomanim = this._animateZoom), t
                        },
                        createTile: function() {
                            return document.createElement("div")
                        },
                        getTileSize: function() {
                            var t = this.options.tileSize;
                            return t instanceof k ? t : new k(t, t)
                        },
                        _updateZIndex: function() {
                            this._container && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._container.style.zIndex = this.options.zIndex)
                        },
                        _setAutoZIndex: function(t) {
                            for (var e, i = this.getPane().children, n = -t(-1 / 0, 1 / 0), o = 0, s = i.length; o < s; o++) e = i[o].style.zIndex, i[o] !== this._container && e && (n = t(n, +e));
                            isFinite(n) && (this.options.zIndex = n + t(-1, 1), this._updateZIndex())
                        },
                        _updateOpacity: function() {
                            if (this._map && !$) {
                                Ie(this._container, this.options.opacity);
                                var t = +new Date,
                                    e = !1,
                                    i = !1;
                                for (var n in this._tiles) {
                                    var o = this._tiles[n];
                                    if (o.current && o.loaded) {
                                        var s = Math.min(1, (t - o.loaded) / 200);
                                        Ie(o.el, s), s < 1 ? e = !0 : (o.active ? i = !0 : this._onOpaqueTile(o), o.active = !0)
                                    }
                                }
                                i && !this._noPrune && this._pruneTiles(), e && (E(this._fadeFrame), this._fadeFrame = M(this._updateOpacity, this))
                            }
                        },
                        _onOpaqueTile: l,
                        _initContainer: function() {
                            this._container || (this._container = we("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container))
                        },
                        _updateLevels: function() {
                            var t = this._tileZoom,
                                e = this.options.maxZoom;
                            if (void 0 !== t) {
                                for (var i in this._levels) this._levels[i].el.children.length || i === t ? (this._levels[i].el.style.zIndex = e - Math.abs(t - i), this._onUpdateLevel(i)) : (be(this._levels[i].el), this._removeTilesAtZoom(i), this._onRemoveLevel(i), delete this._levels[i]);
                                var n = this._levels[t],
                                    o = this._map;
                                return n || ((n = this._levels[t] = {}).el = we("div", "leaflet-tile-container leaflet-zoom-animated", this._container), n.el.style.zIndex = e, n.origin = o.project(o.unproject(o.getPixelOrigin()), t).round(), n.zoom = t, this._setZoomTransform(n, o.getCenter(), o.getZoom()), this._onCreateLevel(n)), this._level = n, n
                            }
                        },
                        _onUpdateLevel: l,
                        _onRemoveLevel: l,
                        _onCreateLevel: l,
                        _pruneTiles: function() {
                            if (this._map) {
                                var t, e, i = this._map.getZoom();
                                if (i > this.options.maxZoom || i < this.options.minZoom) this._removeAllTiles();
                                else {
                                    for (t in this._tiles)(e = this._tiles[t]).retain = e.current;
                                    for (t in this._tiles)
                                        if ((e = this._tiles[t]).current && !e.active) {
                                            var n = e.coords;
                                            this._retainParent(n.x, n.y, n.z, n.z - 5) || this._retainChildren(n.x, n.y, n.z, n.z + 2)
                                        }
                                    for (t in this._tiles) this._tiles[t].retain || this._removeTile(t)
                                }
                            }
                        },
                        _removeTilesAtZoom: function(t) {
                            for (var e in this._tiles) this._tiles[e].coords.z === t && this._removeTile(e)
                        },
                        _removeAllTiles: function() {
                            for (var t in this._tiles) this._removeTile(t)
                        },
                        _invalidateAll: function() {
                            for (var t in this._levels) be(this._levels[t].el), this._onRemoveLevel(t), delete this._levels[t];
                            this._removeAllTiles(), this._tileZoom = void 0
                        },
                        _retainParent: function(t, e, i, n) {
                            var o = Math.floor(t / 2),
                                s = Math.floor(e / 2),
                                a = i - 1,
                                r = new k(+o, +s);
                            r.z = +a;
                            var h = this._tileCoordsToKey(r),
                                l = this._tiles[h];
                            return l && l.active ? (l.retain = !0, !0) : (l && l.loaded && (l.retain = !0), a > n && this._retainParent(o, s, a, n))
                        },
                        _retainChildren: function(t, e, i, n) {
                            for (var o = 2 * t; o < 2 * t + 2; o++)
                                for (var s = 2 * e; s < 2 * e + 2; s++) {
                                    var a = new k(o, s);
                                    a.z = i + 1;
                                    var r = this._tileCoordsToKey(a),
                                        h = this._tiles[r];
                                    h && h.active ? h.retain = !0 : (h && h.loaded && (h.retain = !0), i + 1 < n && this._retainChildren(o, s, i + 1, n))
                                }
                        },
                        _resetView: function(t) {
                            var e = t && (t.pinch || t.flyTo);
                            this._setView(this._map.getCenter(), this._map.getZoom(), e, e)
                        },
                        _animateZoom: function(t) {
                            this._setView(t.center, t.zoom, !0, t.noUpdate)
                        },
                        _clampZoom: function(t) {
                            var e = this.options;
                            return void 0 !== e.minNativeZoom && t < e.minNativeZoom ? e.minNativeZoom : void 0 !== e.maxNativeZoom && e.maxNativeZoom < t ? e.maxNativeZoom : t
                        },
                        _setView: function(t, e, i, n) {
                            var o = this._clampZoom(Math.round(e));
                            (void 0 !== this.options.maxZoom && o > this.options.maxZoom || void 0 !== this.options.minZoom && o < this.options.minZoom) && (o = void 0), n && !(this.options.updateWhenZooming && o !== this._tileZoom) || (this._tileZoom = o, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), void 0 !== o && this._update(t), i || this._pruneTiles(), this._noPrune = !!i), this._setZoomTransforms(t, e)
                        },
                        _setZoomTransforms: function(t, e) {
                            for (var i in this._levels) this._setZoomTransform(this._levels[i], t, e)
                        },
                        _setZoomTransform: function(t, e, i) {
                            var n = this._map.getZoomScale(i, t.zoom),
                                o = t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(e, i)).round();
                            ft ? Be(t.el, o, n) : Oe(t.el, o)
                        },
                        _resetGrid: function() {
                            var t = this._map,
                                e = t.options.crs,
                                i = this._tileSize = this.getTileSize(),
                                n = this._tileZoom,
                                o = this._map.getPixelWorldBounds(this._tileZoom);
                            o && (this._globalTileRange = this._pxBoundsToTileRange(o)), this._wrapX = e.wrapLng && !this.options.noWrap && [Math.floor(t.project([0, e.wrapLng[0]], n).x / i.x), Math.ceil(t.project([0, e.wrapLng[1]], n).x / i.y)], this._wrapY = e.wrapLat && !this.options.noWrap && [Math.floor(t.project([e.wrapLat[0], 0], n).y / i.x), Math.ceil(t.project([e.wrapLat[1], 0], n).y / i.y)]
                        },
                        _onMoveEnd: function() {
                            this._map && !this._map._animatingZoom && this._update()
                        },
                        _getTiledPixelBounds: function(t) {
                            var e = this._map,
                                i = e._animatingZoom ? Math.max(e._animateToZoom, e.getZoom()) : e.getZoom(),
                                n = e.getZoomScale(i, this._tileZoom),
                                o = e.project(t, this._tileZoom).floor(),
                                s = e.getSize().divideBy(2 * n);
                            return new B(o.subtract(s), o.add(s))
                        },
                        _update: function(t) {
                            var e = this._map;
                            if (e) {
                                var i = this._clampZoom(e.getZoom());
                                if (void 0 === t && (t = e.getCenter()), void 0 !== this._tileZoom) {
                                    var n = this._getTiledPixelBounds(t),
                                        o = this._pxBoundsToTileRange(n),
                                        s = o.getCenter(),
                                        a = [],
                                        r = this.options.keepBuffer,
                                        h = new B(o.getBottomLeft().subtract([r, -r]), o.getTopRight().add([r, -r]));
                                    if (!(isFinite(o.min.x) && isFinite(o.min.y) && isFinite(o.max.x) && isFinite(o.max.y))) throw new Error("Attempted to load an infinite number of tiles");
                                    for (var l in this._tiles) {
                                        var u = this._tiles[l].coords;
                                        u.z === this._tileZoom && h.contains(new k(u.x, u.y)) || (this._tiles[l].current = !1)
                                    }
                                    if (Math.abs(i - this._tileZoom) > 1) this._setView(t, i);
                                    else {
                                        for (var c = o.min.y; c <= o.max.y; c++)
                                            for (var d = o.min.x; d <= o.max.x; d++) {
                                                var _ = new k(d, c);
                                                if (_.z = this._tileZoom, this._isValidTile(_)) {
                                                    var p = this._tiles[this._tileCoordsToKey(_)];
                                                    p ? p.current = !0 : a.push(_)
                                                }
                                            }
                                        if (a.sort(function(t, e) {
                                                return t.distanceTo(s) - e.distanceTo(s)
                                            }), 0 !== a.length) {
                                            this._loading || (this._loading = !0, this.fire("loading"));
                                            var m = document.createDocumentFragment();
                                            for (d = 0; d < a.length; d++) this._addTile(a[d], m);
                                            this._level.el.appendChild(m)
                                        }
                                    }
                                }
                            }
                        },
                        _isValidTile: function(t) {
                            var e = this._map.options.crs;
                            if (!e.infinite) {
                                var i = this._globalTileRange;
                                if (!e.wrapLng && (t.x < i.min.x || t.x > i.max.x) || !e.wrapLat && (t.y < i.min.y || t.y > i.max.y)) return !1
                            }
                            if (!this.options.bounds) return !0;
                            var n = this._tileCoordsToBounds(t);
                            return N(this.options.bounds).overlaps(n)
                        },
                        _keyToBounds: function(t) {
                            return this._tileCoordsToBounds(this._keyToTileCoords(t))
                        },
                        _tileCoordsToNwSe: function(t) {
                            var e = this._map,
                                i = this.getTileSize(),
                                n = t.scaleBy(i),
                                o = n.add(i);
                            return [e.unproject(n, t.z), e.unproject(o, t.z)]
                        },
                        _tileCoordsToBounds: function(t) {
                            var e = this._tileCoordsToNwSe(t),
                                i = new Z(e[0], e[1]);
                            return this.options.noWrap || (i = this._map.wrapLatLngBounds(i)), i
                        },
                        _tileCoordsToKey: function(t) {
                            return t.x + ":" + t.y + ":" + t.z
                        },
                        _keyToTileCoords: function(t) {
                            var e = t.split(":"),
                                i = new k(+e[0], +e[1]);
                            return i.z = +e[2], i
                        },
                        _removeTile: function(t) {
                            var e = this._tiles[t];
                            e && (st || e.el.setAttribute("src", y), be(e.el), delete this._tiles[t], this.fire("tileunload", {
                                tile: e.el,
                                coords: this._keyToTileCoords(t)
                            }))
                        },
                        _initTile: function(t) {
                            Se(t, "leaflet-tile");
                            var e = this.getTileSize();
                            t.style.width = e.x + "px", t.style.height = e.y + "px", t.onselectstart = l, t.onmousemove = l, $ && this.options.opacity < 1 && Ie(t, this.options.opacity), it && !nt && (t.style.WebkitBackfaceVisibility = "hidden")
                        },
                        _addTile: function(t, e) {
                            var i = this._getTilePos(t),
                                n = this._tileCoordsToKey(t),
                                s = this.createTile(this._wrapCoords(t), o(this._tileReady, this, t));
                            this._initTile(s), this.createTile.length < 2 && M(o(this._tileReady, this, t, null, s)), Oe(s, i), this._tiles[n] = {
                                el: s,
                                coords: t,
                                current: !0
                            }, e.appendChild(s), this.fire("tileloadstart", {
                                tile: s,
                                coords: t
                            })
                        },
                        _tileReady: function(t, e, i) {
                            if (this._map) {
                                e && this.fire("tileerror", {
                                    error: e,
                                    tile: i,
                                    coords: t
                                });
                                var n = this._tileCoordsToKey(t);
                                (i = this._tiles[n]) && (i.loaded = +new Date, this._map._fadeAnimated ? (Ie(i.el, 0), E(this._fadeFrame), this._fadeFrame = M(this._updateOpacity, this)) : (i.active = !0, this._pruneTiles()), e || (Se(i.el, "leaflet-tile-loaded"), this.fire("tileload", {
                                    tile: i.el,
                                    coords: t
                                })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), $ || !this._map._fadeAnimated ? M(this._pruneTiles, this) : setTimeout(o(this._pruneTiles, this), 250)))
                            }
                        },
                        _getTilePos: function(t) {
                            return t.scaleBy(this.getTileSize()).subtract(this._level.origin)
                        },
                        _wrapCoords: function(t) {
                            var e = new k(this._wrapX ? h(t.x, this._wrapX) : t.x, this._wrapY ? h(t.y, this._wrapY) : t.y);
                            return e.z = t.z, e
                        },
                        _pxBoundsToTileRange: function(t) {
                            var e = this.getTileSize();
                            return new B(t.min.unscaleBy(e).floor(), t.max.unscaleBy(e).ceil().subtract([1, 1]))
                        },
                        _noTilesToLoad: function() {
                            for (var t in this._tiles)
                                if (!this._tiles[t].loaded) return !1;
                            return !0
                        }
                    }),
                    Qi = Yi.extend({
                        options: {
                            minZoom: 0,
                            maxZoom: 18,
                            subdomains: "abc",
                            errorTileUrl: "",
                            zoomOffset: 0,
                            tms: !1,
                            zoomReverse: !1,
                            detectRetina: !1,
                            crossOrigin: !1
                        },
                        initialize: function(t, e) {
                            this._url = t, (e = _(this, e)).detectRetina && Tt && e.maxZoom > 0 && (e.tileSize = Math.floor(e.tileSize / 2), e.zoomReverse ? (e.zoomOffset--, e.minZoom++) : (e.zoomOffset++, e.maxZoom--), e.minZoom = Math.max(0, e.minZoom)), "string" == typeof e.subdomains && (e.subdomains = e.subdomains.split("")), it || this.on("tileunload", this._onTileRemove)
                        },
                        setUrl: function(t, e) {
                            return this._url = t, e || this.redraw(), this
                        },
                        createTile: function(t, e) {
                            var i = document.createElement("img");
                            return Jt(i, "load", o(this._tileOnLoad, this, e, i)), Jt(i, "error", o(this._tileOnError, this, e, i)), this.options.crossOrigin && (i.crossOrigin = ""), i.alt = "", i.setAttribute("role", "presentation"), i.src = this.getTileUrl(t), i
                        },
                        getTileUrl: function(t) {
                            var e = {
                                r: Tt ? "@2x" : "",
                                s: this._getSubdomain(t),
                                x: t.x,
                                y: t.y,
                                z: this._getZoomForUrl()
                            };
                            if (this._map && !this._map.options.crs.infinite) {
                                var n = this._globalTileRange.max.y - t.y;
                                this.options.tms && (e.y = n), e["-y"] = n
                            }
                            return f(this._url, i(e, this.options))
                        },
                        _tileOnLoad: function(t, e) {
                            $ ? setTimeout(o(t, this, null, e), 0) : t(null, e)
                        },
                        _tileOnError: function(t, e, i) {
                            var n = this.options.errorTileUrl;
                            n && e.getAttribute("src") !== n && (e.src = n), t(i, e)
                        },
                        _onTileRemove: function(t) {
                            t.tile.onload = null
                        },
                        _getZoomForUrl: function() {
                            var t = this._tileZoom;
                            return this.options.zoomReverse && (t = this.options.maxZoom - t), t + this.options.zoomOffset
                        },
                        _getSubdomain: function(t) {
                            var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
                            return this.options.subdomains[e]
                        },
                        _abortLoading: function() {
                            var t, e;
                            for (t in this._tiles) this._tiles[t].coords.z !== this._tileZoom && ((e = this._tiles[t].el).onload = l, e.onerror = l, e.complete || (e.src = y, be(e), delete this._tiles[t]))
                        }
                    });

                function $i(t, e) {
                    return new Qi(t, e)
                }
                var tn = Qi.extend({
                    defaultWmsParams: {
                        service: "WMS",
                        request: "GetMap",
                        layers: "",
                        styles: "",
                        format: "image/jpeg",
                        transparent: !1,
                        version: "1.1.1"
                    },
                    options: {
                        crs: null,
                        uppercase: !1
                    },
                    initialize: function(t, e) {
                        this._url = t;
                        var n = i({}, this.defaultWmsParams);
                        for (var o in e) o in this.options || (n[o] = e[o]);
                        var s = (e = _(this, e)).detectRetina && Tt ? 2 : 1,
                            a = this.getTileSize();
                        n.width = a.x * s, n.height = a.y * s, this.wmsParams = n
                    },
                    onAdd: function(t) {
                        this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version), this.wmsParams[this._wmsVersion >= 1.3 ? "crs" : "srs"] = this._crs.code, Qi.prototype.onAdd.call(this, t)
                    },
                    getTileUrl: function(t) {
                        var e = this._tileCoordsToNwSe(t),
                            i = this._crs,
                            n = O(i.project(e[0]), i.project(e[1])),
                            o = n.min,
                            s = n.max,
                            a = (this._wmsVersion >= 1.3 && this._crs === Pi ? [o.y, o.x, s.y, s.x] : [o.x, o.y, s.x, s.y]).join(","),
                            r = L.TileLayer.prototype.getTileUrl.call(this, t);
                        return r + p(this.wmsParams, r, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + a
                    },
                    setParams: function(t, e) {
                        return i(this.wmsParams, t), e || this.redraw(), this
                    }
                });
                Qi.WMS = tn, $i.wms = function(t, e) {
                    return new tn(t, e)
                };
                var en = xi.extend({
                        options: {
                            padding: .1,
                            tolerance: 0
                        },
                        initialize: function(t) {
                            _(this, t), a(this), this._layers = this._layers || {}
                        },
                        onAdd: function() {
                            this._container || (this._initContainer(), this._zoomAnimated && Se(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this)
                        },
                        onRemove: function() {
                            this.off("update", this._updatePaths, this), this._destroyContainer()
                        },
                        getEvents: function() {
                            var t = {
                                viewreset: this._reset,
                                zoom: this._onZoom,
                                moveend: this._update,
                                zoomend: this._onZoomEnd
                            };
                            return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t
                        },
                        _onAnimZoom: function(t) {
                            this._updateTransform(t.center, t.zoom)
                        },
                        _onZoom: function() {
                            this._updateTransform(this._map.getCenter(), this._map.getZoom())
                        },
                        _updateTransform: function(t, e) {
                            var i = this._map.getZoomScale(e, this._zoom),
                                n = Ze(this._container),
                                o = this._map.getSize().multiplyBy(.5 + this.options.padding),
                                s = this._map.project(this._center, e),
                                a = this._map.project(t, e).subtract(s),
                                r = o.multiplyBy(-i).add(n).add(o).subtract(a);
                            ft ? Be(this._container, r, i) : Oe(this._container, r)
                        },
                        _reset: function() {
                            for (var t in this._update(), this._updateTransform(this._center, this._zoom), this._layers) this._layers[t]._reset()
                        },
                        _onZoomEnd: function() {
                            for (var t in this._layers) this._layers[t]._project()
                        },
                        _updatePaths: function() {
                            for (var t in this._layers) this._layers[t]._update()
                        },
                        _update: function() {
                            var t = this.options.padding,
                                e = this._map.getSize(),
                                i = this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();
                            this._bounds = new B(i, i.add(e.multiplyBy(1 + 2 * t)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom()
                        }
                    }),
                    nn = en.extend({
                        getEvents: function() {
                            var t = en.prototype.getEvents.call(this);
                            return t.viewprereset = this._onViewPreReset, t
                        },
                        _onViewPreReset: function() {
                            this._postponeUpdatePaths = !0
                        },
                        onAdd: function() {
                            en.prototype.onAdd.call(this), this._draw()
                        },
                        _initContainer: function() {
                            var t = this._container = document.createElement("canvas");
                            Jt(t, "mousemove", r(this._onMouseMove, 32, this), this), Jt(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this), Jt(t, "mouseout", this._handleMouseOut, this), this._ctx = t.getContext("2d")
                        },
                        _destroyContainer: function() {
                            delete this._ctx, be(this._container), Xt(this._container), delete this._container
                        },
                        _updatePaths: function() {
                            if (!this._postponeUpdatePaths) {
                                for (var t in this._redrawBounds = null, this._layers) this._layers[t]._update();
                                this._redraw()
                            }
                        },
                        _update: function() {
                            if (!this._map._animatingZoom || !this._bounds) {
                                this._drawnLayers = {}, en.prototype._update.call(this);
                                var t = this._bounds,
                                    e = this._container,
                                    i = t.getSize(),
                                    n = Tt ? 2 : 1;
                                Oe(e, t.min), e.width = n * i.x, e.height = n * i.y, e.style.width = i.x + "px", e.style.height = i.y + "px", Tt && this._ctx.scale(2, 2), this._ctx.translate(-t.min.x, -t.min.y), this.fire("update")
                            }
                        },
                        _reset: function() {
                            en.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths())
                        },
                        _initPath: function(t) {
                            this._updateDashArray(t), this._layers[a(t)] = t;
                            var e = t._order = {
                                layer: t,
                                prev: this._drawLast,
                                next: null
                            };
                            this._drawLast && (this._drawLast.next = e), this._drawLast = e, this._drawFirst = this._drawFirst || this._drawLast
                        },
                        _addPath: function(t) {
                            this._requestRedraw(t)
                        },
                        _removePath: function(t) {
                            var e = t._order,
                                i = e.next,
                                n = e.prev;
                            i ? i.prev = n : this._drawLast = n, n ? n.next = i : this._drawFirst = i, delete t._order, delete this._layers[L.stamp(t)], this._requestRedraw(t)
                        },
                        _updatePath: function(t) {
                            this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t)
                        },
                        _updateStyle: function(t) {
                            this._updateDashArray(t), this._requestRedraw(t)
                        },
                        _updateDashArray: function(t) {
                            if (t.options.dashArray) {
                                var e, i = t.options.dashArray.split(","),
                                    n = [];
                                for (e = 0; e < i.length; e++) n.push(Number(i[e]));
                                t.options._dashArray = n
                            }
                        },
                        _requestRedraw: function(t) {
                            this._map && (this._extendRedrawBounds(t), this._redrawRequest = this._redrawRequest || M(this._redraw, this))
                        },
                        _extendRedrawBounds: function(t) {
                            if (t._pxBounds) {
                                var e = (t.options.weight || 0) + 1;
                                this._redrawBounds = this._redrawBounds || new B, this._redrawBounds.extend(t._pxBounds.min.subtract([e, e])), this._redrawBounds.extend(t._pxBounds.max.add([e, e]))
                            }
                        },
                        _redraw: function() {
                            this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null
                        },
                        _clear: function() {
                            var t = this._redrawBounds;
                            if (t) {
                                var e = t.getSize();
                                this._ctx.clearRect(t.min.x, t.min.y, e.x, e.y)
                            } else this._ctx.clearRect(0, 0, this._container.width, this._container.height)
                        },
                        _draw: function() {
                            var t, e = this._redrawBounds;
                            if (this._ctx.save(), e) {
                                var i = e.getSize();
                                this._ctx.beginPath(), this._ctx.rect(e.min.x, e.min.y, i.x, i.y), this._ctx.clip()
                            }
                            this._drawing = !0;
                            for (var n = this._drawFirst; n; n = n.next) t = n.layer, (!e || t._pxBounds && t._pxBounds.intersects(e)) && t._updatePath();
                            this._drawing = !1, this._ctx.restore()
                        },
                        _updatePoly: function(t, e) {
                            if (this._drawing) {
                                var i, n, o, s, a = t._parts,
                                    r = a.length,
                                    h = this._ctx;
                                if (r) {
                                    for (this._drawnLayers[t._leaflet_id] = t, h.beginPath(), i = 0; i < r; i++) {
                                        for (n = 0, o = a[i].length; n < o; n++) s = a[i][n], h[n ? "lineTo" : "moveTo"](s.x, s.y);
                                        e && h.closePath()
                                    }
                                    this._fillStroke(h, t)
                                }
                            }
                        },
                        _updateCircle: function(t) {
                            if (this._drawing && !t._empty()) {
                                var e = t._point,
                                    i = this._ctx,
                                    n = Math.max(Math.round(t._radius), 1),
                                    o = (Math.max(Math.round(t._radiusY), 1) || n) / n;
                                this._drawnLayers[t._leaflet_id] = t, 1 !== o && (i.save(), i.scale(1, o)), i.beginPath(), i.arc(e.x, e.y / o, n, 0, 2 * Math.PI, !1), 1 !== o && i.restore(), this._fillStroke(i, t)
                            }
                        },
                        _fillStroke: function(t, e) {
                            var i = e.options;
                            i.fill && (t.globalAlpha = i.fillOpacity, t.fillStyle = i.fillColor || i.color, t.fill(i.fillRule || "evenodd")), i.stroke && 0 !== i.weight && (t.setLineDash && t.setLineDash(e.options && e.options._dashArray || []), t.globalAlpha = i.opacity, t.lineWidth = i.weight, t.strokeStyle = i.color, t.lineCap = i.lineCap, t.lineJoin = i.lineJoin, t.stroke())
                        },
                        _onClick: function(t) {
                            for (var e, i, n = this._map.mouseEventToLayerPoint(t), o = this._drawFirst; o; o = o.next)(e = o.layer).options.interactive && e._containsPoint(n) && !this._map._draggableMoved(e) && (i = e);
                            i && (le(t), this._fireEvent([i], t))
                        },
                        _onMouseMove: function(t) {
                            if (this._map && !this._map.dragging.moving() && !this._map._animatingZoom) {
                                var e = this._map.mouseEventToLayerPoint(t);
                                this._handleMouseHover(t, e)
                            }
                        },
                        _handleMouseOut: function(t) {
                            var e = this._hoveredLayer;
                            e && (ze(this._container, "leaflet-interactive"), this._fireEvent([e], t, "mouseout"), this._hoveredLayer = null)
                        },
                        _handleMouseHover: function(t, e) {
                            for (var i, n, o = this._drawFirst; o; o = o.next)(i = o.layer).options.interactive && i._containsPoint(e) && (n = i);
                            n !== this._hoveredLayer && (this._handleMouseOut(t), n && (Se(this._container, "leaflet-interactive"), this._fireEvent([n], t, "mouseover"), this._hoveredLayer = n)), this._hoveredLayer && this._fireEvent([this._hoveredLayer], t)
                        },
                        _fireEvent: function(t, e, i) {
                            this._map._fireDOMEvent(e, i || e.type, t)
                        },
                        _bringToFront: function(t) {
                            var e = t._order,
                                i = e.next,
                                n = e.prev;
                            i && (i.prev = n, n ? n.next = i : i && (this._drawFirst = i), e.prev = this._drawLast, this._drawLast.next = e, e.next = null, this._drawLast = e, this._requestRedraw(t))
                        },
                        _bringToBack: function(t) {
                            var e = t._order,
                                i = e.next,
                                n = e.prev;
                            n && (n.next = i, i ? i.prev = n : n && (this._drawLast = n), e.prev = null, e.next = this._drawFirst, this._drawFirst.prev = e, this._drawFirst = e, this._requestRedraw(t))
                        }
                    });

                function on(t) {
                    return Mt ? new nn(t) : null
                }
                var sn = function() {
                        try {
                            return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
                                function(t) {
                                    return document.createElement("<lvml:" + t + ' class="lvml">')
                                }
                        } catch (t) {
                            return function(t) {
                                return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')
                            }
                        }
                    }(),
                    an = {
                        _initContainer: function() {
                            this._container = we("div", "leaflet-vml-container")
                        },
                        _update: function() {
                            this._map._animatingZoom || (en.prototype._update.call(this), this.fire("update"))
                        },
                        _initPath: function(t) {
                            var e = t._container = sn("shape");
                            Se(e, "leaflet-vml-shape " + (this.options.className || "")), e.coordsize = "1 1", t._path = sn("path"), e.appendChild(t._path), this._updateStyle(t), this._layers[a(t)] = t
                        },
                        _addPath: function(t) {
                            var e = t._container;
                            this._container.appendChild(e), t.options.interactive && t.addInteractiveTarget(e)
                        },
                        _removePath: function(t) {
                            var e = t._container;
                            be(e), t.removeInteractiveTarget(e), delete this._layers[a(t)]
                        },
                        _updateStyle: function(t) {
                            var e = t._stroke,
                                i = t._fill,
                                n = t.options,
                                o = t._container;
                            o.stroked = !!n.stroke, o.filled = !!n.fill, n.stroke ? (e || (e = t._stroke = sn("stroke")), o.appendChild(e), e.weight = n.weight + "px", e.color = n.color, e.opacity = n.opacity, e.dashStyle = n.dashArray ? g(n.dashArray) ? n.dashArray.join(" ") : n.dashArray.replace(/( *, *)/g, " ") : "", e.endcap = n.lineCap.replace("butt", "flat"), e.joinstyle = n.lineJoin) : e && (o.removeChild(e), t._stroke = null), n.fill ? (i || (i = t._fill = sn("fill")), o.appendChild(i), i.color = n.fillColor || n.color, i.opacity = n.fillOpacity) : i && (o.removeChild(i), t._fill = null)
                        },
                        _updateCircle: function(t) {
                            var e = t._point.round(),
                                i = Math.round(t._radius),
                                n = Math.round(t._radiusY || i);
                            this._setPath(t, t._empty() ? "M0 0" : "AL " + e.x + "," + e.y + " " + i + "," + n + " 0,23592600")
                        },
                        _setPath: function(t, e) {
                            t._path.v = e
                        },
                        _bringToFront: function(t) {
                            Me(t._container)
                        },
                        _bringToBack: function(t) {
                            Ee(t._container)
                        }
                    },
                    rn = Ct ? sn : K,
                    hn = en.extend({
                        getEvents: function() {
                            var t = en.prototype.getEvents.call(this);
                            return t.zoomstart = this._onZoomStart, t
                        },
                        _initContainer: function() {
                            this._container = rn("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = rn("g"), this._container.appendChild(this._rootGroup)
                        },
                        _destroyContainer: function() {
                            be(this._container), Xt(this._container), delete this._container, delete this._rootGroup, delete this._svgSize
                        },
                        _onZoomStart: function() {
                            this._update()
                        },
                        _update: function() {
                            if (!this._map._animatingZoom || !this._bounds) {
                                en.prototype._update.call(this);
                                var t = this._bounds,
                                    e = t.getSize(),
                                    i = this._container;
                                this._svgSize && this._svgSize.equals(e) || (this._svgSize = e, i.setAttribute("width", e.x), i.setAttribute("height", e.y)), Oe(i, t.min), i.setAttribute("viewBox", [t.min.x, t.min.y, e.x, e.y].join(" ")), this.fire("update")
                            }
                        },
                        _initPath: function(t) {
                            var e = t._path = rn("path");
                            t.options.className && Se(e, t.options.className), t.options.interactive && Se(e, "leaflet-interactive"), this._updateStyle(t), this._layers[a(t)] = t
                        },
                        _addPath: function(t) {
                            this._rootGroup || this._initContainer(), this._rootGroup.appendChild(t._path), t.addInteractiveTarget(t._path)
                        },
                        _removePath: function(t) {
                            be(t._path), t.removeInteractiveTarget(t._path), delete this._layers[a(t)]
                        },
                        _updatePath: function(t) {
                            t._project(), t._update()
                        },
                        _updateStyle: function(t) {
                            var e = t._path,
                                i = t.options;
                            e && (i.stroke ? (e.setAttribute("stroke", i.color), e.setAttribute("stroke-opacity", i.opacity), e.setAttribute("stroke-width", i.weight), e.setAttribute("stroke-linecap", i.lineCap), e.setAttribute("stroke-linejoin", i.lineJoin), i.dashArray ? e.setAttribute("stroke-dasharray", i.dashArray) : e.removeAttribute("stroke-dasharray"), i.dashOffset ? e.setAttribute("stroke-dashoffset", i.dashOffset) : e.removeAttribute("stroke-dashoffset")) : e.setAttribute("stroke", "none"), i.fill ? (e.setAttribute("fill", i.fillColor || i.color), e.setAttribute("fill-opacity", i.fillOpacity), e.setAttribute("fill-rule", i.fillRule || "evenodd")) : e.setAttribute("fill", "none"))
                        },
                        _updatePoly: function(t, e) {
                            this._setPath(t, X(t._parts, e))
                        },
                        _updateCircle: function(t) {
                            var e = t._point,
                                i = Math.max(Math.round(t._radius), 1),
                                n = "a" + i + "," + (Math.max(Math.round(t._radiusY), 1) || i) + " 0 1,0 ",
                                o = t._empty() ? "M0 0" : "M" + (e.x - i) + "," + e.y + n + 2 * i + ",0 " + n + 2 * -i + ",0 ";
                            this._setPath(t, o)
                        },
                        _setPath: function(t, e) {
                            t._path.setAttribute("d", e)
                        },
                        _bringToFront: function(t) {
                            Me(t._path)
                        },
                        _bringToBack: function(t) {
                            Ee(t._path)
                        }
                    });

                function ln(t) {
                    return Et || Ct ? new hn(t) : null
                }
                Ct && hn.include(an), Ve.include({
                    getRenderer: function(t) {
                        var e = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer;
                        return e || (e = this._renderer = this.options.preferCanvas && on() || ln()), this.hasLayer(e) || this.addLayer(e), e
                    },
                    _getPaneRenderer: function(t) {
                        if ("overlayPane" === t || void 0 === t) return !1;
                        var e = this._paneRenderers[t];
                        return void 0 === e && (e = hn && ln({
                            pane: t
                        }) || nn && on({
                            pane: t
                        }), this._paneRenderers[t] = e), e
                    }
                });
                var un = Ii.extend({
                    initialize: function(t, e) {
                        Ii.prototype.initialize.call(this, this._boundsToLatLngs(t), e)
                    },
                    setBounds: function(t) {
                        return this.setLatLngs(this._boundsToLatLngs(t))
                    },
                    _boundsToLatLngs: function(t) {
                        return [(t = N(t)).getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()]
                    }
                });
                hn.create = rn, hn.pointsToPath = X, Ai.geometryToLayer = Bi, Ai.coordsToLatLng = Oi, Ai.coordsToLatLngs = Zi, Ai.latLngToCoords = Ni, Ai.latLngsToCoords = Ri, Ai.getFeature = Ui, Ai.asFeature = ji, Ve.mergeOptions({
                    boxZoom: !0
                });
                var cn = Qe.extend({
                    initialize: function(t) {
                        this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._resetStateTimeout = 0, t.on("unload", this._destroy, this)
                    },
                    addHooks: function() {
                        Jt(this._container, "mousedown", this._onMouseDown, this)
                    },
                    removeHooks: function() {
                        Xt(this._container, "mousedown", this._onMouseDown, this)
                    },
                    moved: function() {
                        return this._moved
                    },
                    _destroy: function() {
                        be(this._pane), delete this._pane
                    },
                    _resetState: function() {
                        this._resetStateTimeout = 0, this._moved = !1
                    },
                    _clearDeferredResetState: function() {
                        0 !== this._resetStateTimeout && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0)
                    },
                    _onMouseDown: function(t) {
                        if (!t.shiftKey || 1 !== t.which && 1 !== t.button) return !1;
                        this._clearDeferredResetState(), this._resetState(), de(), Re(), this._startPoint = this._map.mouseEventToContainerPoint(t), Jt(document, {
                            contextmenu: ne,
                            mousemove: this._onMouseMove,
                            mouseup: this._onMouseUp,
                            keydown: this._onKeyDown
                        }, this)
                    },
                    _onMouseMove: function(t) {
                        this._moved || (this._moved = !0, this._box = we("div", "leaflet-zoom-box", this._container), Se(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(t);
                        var e = new B(this._point, this._startPoint),
                            i = e.getSize();
                        Oe(this._box, e.min), this._box.style.width = i.x + "px", this._box.style.height = i.y + "px"
                    },
                    _finish: function() {
                        this._moved && (be(this._box), ze(this._container, "leaflet-crosshair")), _e(), Ue(), Xt(document, {
                            contextmenu: ne,
                            mousemove: this._onMouseMove,
                            mouseup: this._onMouseUp,
                            keydown: this._onKeyDown
                        }, this)
                    },
                    _onMouseUp: function(t) {
                        if ((1 === t.which || 1 === t.button) && (this._finish(), this._moved)) {
                            this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(o(this._resetState, this), 0);
                            var e = new Z(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point));
                            this._map.fitBounds(e).fire("boxzoomend", {
                                boxZoomBounds: e
                            })
                        }
                    },
                    _onKeyDown: function(t) {
                        27 === t.keyCode && this._finish()
                    }
                });
                Ve.addInitHook("addHandler", "boxZoom", cn), Ve.mergeOptions({
                    doubleClickZoom: !0
                });
                var dn = Qe.extend({
                    addHooks: function() {
                        this._map.on("dblclick", this._onDoubleClick, this)
                    },
                    removeHooks: function() {
                        this._map.off("dblclick", this._onDoubleClick, this)
                    },
                    _onDoubleClick: function(t) {
                        var e = this._map,
                            i = e.getZoom(),
                            n = e.options.zoomDelta,
                            o = t.originalEvent.shiftKey ? i - n : i + n;
                        "center" === e.options.doubleClickZoom ? e.setZoom(o) : e.setZoomAround(t.containerPoint, o)
                    }
                });
                Ve.addInitHook("addHandler", "doubleClickZoom", dn), Ve.mergeOptions({
                    dragging: !0,
                    inertia: !nt,
                    inertiaDeceleration: 3400,
                    inertiaMaxSpeed: 1 / 0,
                    easeLinearity: .2,
                    worldCopyJump: !1,
                    maxBoundsViscosity: 0
                });
                var _n = Qe.extend({
                    addHooks: function() {
                        if (!this._draggable) {
                            var t = this._map;
                            this._draggable = new oi(t._mapPane, t._container), this._draggable.on({
                                dragstart: this._onDragStart,
                                drag: this._onDrag,
                                dragend: this._onDragEnd
                            }, this), this._draggable.on("predrag", this._onPreDragLimit, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this))
                        }
                        Se(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = []
                    },
                    removeHooks: function() {
                        ze(this._map._container, "leaflet-grab"), ze(this._map._container, "leaflet-touch-drag"), this._draggable.disable()
                    },
                    moved: function() {
                        return this._draggable && this._draggable._moved
                    },
                    moving: function() {
                        return this._draggable && this._draggable._moving
                    },
                    _onDragStart: function() {
                        var t = this._map;
                        if (t._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
                            var e = N(this._map.options.maxBounds);
                            this._offsetLimit = O(this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity))
                        } else this._offsetLimit = null;
                        t.fire("movestart").fire("dragstart"), t.options.inertia && (this._positions = [], this._times = [])
                    },
                    _onDrag: function(t) {
                        if (this._map.options.inertia) {
                            var e = this._lastTime = +new Date,
                                i = this._lastPos = this._draggable._absPos || this._draggable._newPos;
                            this._positions.push(i), this._times.push(e), this._prunePositions(e)
                        }
                        this._map.fire("move", t).fire("drag", t)
                    },
                    _prunePositions: function(t) {
                        for (; this._positions.length > 1 && t - this._times[0] > 50;) this._positions.shift(), this._times.shift()
                    },
                    _onZoomEnd: function() {
                        var t = this._map.getSize().divideBy(2),
                            e = this._map.latLngToLayerPoint([0, 0]);
                        this._initialWorldOffset = e.subtract(t).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x
                    },
                    _viscousLimit: function(t, e) {
                        return t - (t - e) * this._viscosity
                    },
                    _onPreDragLimit: function() {
                        if (this._viscosity && this._offsetLimit) {
                            var t = this._draggable._newPos.subtract(this._draggable._startPos),
                                e = this._offsetLimit;
                            t.x < e.min.x && (t.x = this._viscousLimit(t.x, e.min.x)), t.y < e.min.y && (t.y = this._viscousLimit(t.y, e.min.y)), t.x > e.max.x && (t.x = this._viscousLimit(t.x, e.max.x)), t.y > e.max.y && (t.y = this._viscousLimit(t.y, e.max.y)), this._draggable._newPos = this._draggable._startPos.add(t)
                        }
                    },
                    _onPreDragWrap: function() {
                        var t = this._worldWidth,
                            e = Math.round(t / 2),
                            i = this._initialWorldOffset,
                            n = this._draggable._newPos.x,
                            o = (n - e + i) % t + e - i,
                            s = (n + e + i) % t - e - i,
                            a = Math.abs(o + i) < Math.abs(s + i) ? o : s;
                        this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = a
                    },
                    _onDragEnd: function(t) {
                        var e = this._map,
                            i = e.options,
                            n = !i.inertia || this._times.length < 2;
                        if (e.fire("dragend", t), n) e.fire("moveend");
                        else {
                            this._prunePositions(+new Date);
                            var o = this._lastPos.subtract(this._positions[0]),
                                s = i.easeLinearity,
                                a = o.multiplyBy(s / ((this._lastTime - this._times[0]) / 1e3)),
                                r = a.distanceTo([0, 0]),
                                h = Math.min(i.inertiaMaxSpeed, r),
                                l = a.multiplyBy(h / r),
                                u = h / (i.inertiaDeceleration * s),
                                c = l.multiplyBy(-u / 2).round();
                            c.x || c.y ? (c = e._limitOffset(c, e.options.maxBounds), M(function() {
                                e.panBy(c, {
                                    duration: u,
                                    easeLinearity: s,
                                    noMoveStart: !0,
                                    animate: !0
                                })
                            })) : e.fire("moveend")
                        }
                    }
                });
                Ve.addInitHook("addHandler", "dragging", _n), Ve.mergeOptions({
                    keyboard: !0,
                    keyboardPanDelta: 80
                });
                var pn = Qe.extend({
                    keyCodes: {
                        left: [37],
                        right: [39],
                        down: [40],
                        up: [38],
                        zoomIn: [187, 107, 61, 171],
                        zoomOut: [189, 109, 54, 173]
                    },
                    initialize: function(t) {
                        this._map = t, this._setPanDelta(t.options.keyboardPanDelta), this._setZoomDelta(t.options.zoomDelta)
                    },
                    addHooks: function() {
                        var t = this._map._container;
                        t.tabIndex <= 0 && (t.tabIndex = "0"), Jt(t, {
                            focus: this._onFocus,
                            blur: this._onBlur,
                            mousedown: this._onMouseDown
                        }, this), this._map.on({
                            focus: this._addHooks,
                            blur: this._removeHooks
                        }, this)
                    },
                    removeHooks: function() {
                        this._removeHooks(), Xt(this._map._container, {
                            focus: this._onFocus,
                            blur: this._onBlur,
                            mousedown: this._onMouseDown
                        }, this), this._map.off({
                            focus: this._addHooks,
                            blur: this._removeHooks
                        }, this)
                    },
                    _onMouseDown: function() {
                        if (!this._focused) {
                            var t = document.body,
                                e = document.documentElement,
                                i = t.scrollTop || e.scrollTop,
                                n = t.scrollLeft || e.scrollLeft;
                            this._map._container.focus(), window.scrollTo(n, i)
                        }
                    },
                    _onFocus: function() {
                        this._focused = !0, this._map.fire("focus")
                    },
                    _onBlur: function() {
                        this._focused = !1, this._map.fire("blur")
                    },
                    _setPanDelta: function(t) {
                        var e, i, n = this._panKeys = {},
                            o = this.keyCodes;
                        for (e = 0, i = o.left.length; e < i; e++) n[o.left[e]] = [-1 * t, 0];
                        for (e = 0, i = o.right.length; e < i; e++) n[o.right[e]] = [t, 0];
                        for (e = 0, i = o.down.length; e < i; e++) n[o.down[e]] = [0, t];
                        for (e = 0, i = o.up.length; e < i; e++) n[o.up[e]] = [0, -1 * t]
                    },
                    _setZoomDelta: function(t) {
                        var e, i, n = this._zoomKeys = {},
                            o = this.keyCodes;
                        for (e = 0, i = o.zoomIn.length; e < i; e++) n[o.zoomIn[e]] = t;
                        for (e = 0, i = o.zoomOut.length; e < i; e++) n[o.zoomOut[e]] = -t
                    },
                    _addHooks: function() {
                        Jt(document, "keydown", this._onKeyDown, this)
                    },
                    _removeHooks: function() {
                        Xt(document, "keydown", this._onKeyDown, this)
                    },
                    _onKeyDown: function(t) {
                        if (!(t.altKey || t.ctrlKey || t.metaKey)) {
                            var e, i = t.keyCode,
                                n = this._map;
                            if (i in this._panKeys) {
                                if (n._panAnim && n._panAnim._inProgress) return;
                                e = this._panKeys[i], t.shiftKey && (e = A(e).multiplyBy(3)), n.panBy(e), n.options.maxBounds && n.panInsideBounds(n.options.maxBounds)
                            } else if (i in this._zoomKeys) n.setZoom(n.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[i]);
                            else {
                                if (27 !== i || !n._popup || !n._popup.options.closeOnEscapeKey) return;
                                n.closePopup()
                            }
                            ne(t)
                        }
                    }
                });
                Ve.addInitHook("addHandler", "keyboard", pn), Ve.mergeOptions({
                    scrollWheelZoom: !0,
                    wheelDebounceTime: 40,
                    wheelPxPerZoomLevel: 60
                });
                var mn = Qe.extend({
                    addHooks: function() {
                        Jt(this._map._container, "mousewheel", this._onWheelScroll, this), this._delta = 0
                    },
                    removeHooks: function() {
                        Xt(this._map._container, "mousewheel", this._onWheelScroll, this)
                    },
                    _onWheelScroll: function(t) {
                        var e = ae(t),
                            i = this._map.options.wheelDebounceTime;
                        this._delta += e, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +new Date);
                        var n = Math.max(i - (+new Date - this._startTime), 0);
                        clearTimeout(this._timer), this._timer = setTimeout(o(this._performZoom, this), n), ne(t)
                    },
                    _performZoom: function() {
                        var t = this._map,
                            e = t.getZoom(),
                            i = this._map.options.zoomSnap || 0;
                        t._stop();
                        var n = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(this._delta / (4 * this._map.options.wheelPxPerZoomLevel))))) / Math.LN2,
                            o = i ? Math.ceil(n / i) * i : n,
                            s = t._limitZoom(e + (this._delta > 0 ? o : -o)) - e;
                        this._delta = 0, this._startTime = null, s && ("center" === t.options.scrollWheelZoom ? t.setZoom(e + s) : t.setZoomAround(this._lastMousePos, e + s))
                    }
                });
                Ve.addInitHook("addHandler", "scrollWheelZoom", mn), Ve.mergeOptions({
                    tap: !0,
                    tapTolerance: 15
                });
                var fn = Qe.extend({
                    addHooks: function() {
                        Jt(this._map._container, "touchstart", this._onDown, this)
                    },
                    removeHooks: function() {
                        Xt(this._map._container, "touchstart", this._onDown, this)
                    },
                    _onDown: function(t) {
                        if (t.touches) {
                            if (ie(t), this._fireClick = !0, t.touches.length > 1) return this._fireClick = !1, void clearTimeout(this._holdTimeout);
                            var e = t.touches[0],
                                i = e.target;
                            this._startPos = this._newPos = new k(e.clientX, e.clientY), i.tagName && "a" === i.tagName.toLowerCase() && Se(i, "leaflet-active"), this._holdTimeout = setTimeout(o(function() {
                                this._isTapValid() && (this._fireClick = !1, this._onUp(), this._simulateEvent("contextmenu", e))
                            }, this), 1e3), this._simulateEvent("mousedown", e), Jt(document, {
                                touchmove: this._onMove,
                                touchend: this._onUp
                            }, this)
                        }
                    },
                    _onUp: function(t) {
                        if (clearTimeout(this._holdTimeout), Xt(document, {
                                touchmove: this._onMove,
                                touchend: this._onUp
                            }, this), this._fireClick && t && t.changedTouches) {
                            var e = t.changedTouches[0],
                                i = e.target;
                            i && i.tagName && "a" === i.tagName.toLowerCase() && ze(i, "leaflet-active"), this._simulateEvent("mouseup", e), this._isTapValid() && this._simulateEvent("click", e)
                        }
                    },
                    _isTapValid: function() {
                        return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance
                    },
                    _onMove: function(t) {
                        var e = t.touches[0];
                        this._newPos = new k(e.clientX, e.clientY), this._simulateEvent("mousemove", e)
                    },
                    _simulateEvent: function(t, e) {
                        var i = document.createEvent("MouseEvents");
                        i._simulated = !0, e.target._simulatedClick = !0, i.initMouseEvent(t, !0, !0, window, 1, e.screenX, e.screenY, e.clientX, e.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(i)
                    }
                });
                xt && !Lt && Ve.addInitHook("addHandler", "tap", fn), Ve.mergeOptions({
                    touchZoom: xt && !nt,
                    bounceAtZoomLimits: !0
                });
                var gn = Qe.extend({
                    addHooks: function() {
                        Se(this._map._container, "leaflet-touch-zoom"), Jt(this._map._container, "touchstart", this._onTouchStart, this)
                    },
                    removeHooks: function() {
                        ze(this._map._container, "leaflet-touch-zoom"), Xt(this._map._container, "touchstart", this._onTouchStart, this)
                    },
                    _onTouchStart: function(t) {
                        var e = this._map;
                        if (t.touches && 2 === t.touches.length && !e._animatingZoom && !this._zooming) {
                            var i = e.mouseEventToContainerPoint(t.touches[0]),
                                n = e.mouseEventToContainerPoint(t.touches[1]);
                            this._centerPoint = e.getSize()._divideBy(2), this._startLatLng = e.containerPointToLatLng(this._centerPoint), "center" !== e.options.touchZoom && (this._pinchStartLatLng = e.containerPointToLatLng(i.add(n)._divideBy(2))), this._startDist = i.distanceTo(n), this._startZoom = e.getZoom(), this._moved = !1, this._zooming = !0, e._stop(), Jt(document, "touchmove", this._onTouchMove, this), Jt(document, "touchend", this._onTouchEnd, this), ie(t)
                        }
                    },
                    _onTouchMove: function(t) {
                        if (t.touches && 2 === t.touches.length && this._zooming) {
                            var e = this._map,
                                i = e.mouseEventToContainerPoint(t.touches[0]),
                                n = e.mouseEventToContainerPoint(t.touches[1]),
                                s = i.distanceTo(n) / this._startDist;
                            if (this._zoom = e.getScaleZoom(s, this._startZoom), !e.options.bounceAtZoomLimits && (this._zoom < e.getMinZoom() && s < 1 || this._zoom > e.getMaxZoom() && s > 1) && (this._zoom = e._limitZoom(this._zoom)), "center" === e.options.touchZoom) {
                                if (this._center = this._startLatLng, 1 === s) return
                            } else {
                                var a = i._add(n)._divideBy(2)._subtract(this._centerPoint);
                                if (1 === s && 0 === a.x && 0 === a.y) return;
                                this._center = e.unproject(e.project(this._pinchStartLatLng, this._zoom).subtract(a), this._zoom)
                            }
                            this._moved || (e._moveStart(!0, !1), this._moved = !0), E(this._animRequest);
                            var r = o(e._move, e, this._center, this._zoom, {
                                pinch: !0,
                                round: !1
                            });
                            this._animRequest = M(r, this, !0), ie(t)
                        }
                    },
                    _onTouchEnd: function() {
                        this._moved && this._zooming ? (this._zooming = !1, E(this._animRequest), Xt(document, "touchmove", this._onTouchMove), Xt(document, "touchend", this._onTouchEnd), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom))) : this._zooming = !1
                    }
                });
                Ve.addInitHook("addHandler", "touchZoom", gn), Ve.BoxZoom = cn, Ve.DoubleClickZoom = dn, Ve.Drag = _n, Ve.Keyboard = pn, Ve.ScrollWheelZoom = mn, Ve.Tap = fn, Ve.TouchZoom = gn;
                var vn = window.L;
                window.L = t, Object.freeze = e, t.version = "1.3.1", t.noConflict = function() {
                    return window.L = vn, this
                }, t.Control = Ge, t.control = qe, t.Browser = zt, t.Evented = D, t.Mixin = ti, t.Util = C, t.Class = S, t.Handler = Qe, t.extend = i, t.bind = o, t.stamp = a, t.setOptions = _, t.DomEvent = ge, t.DomUtil = He, t.PosAnimation = Fe, t.Draggable = oi, t.LineUtil = _i, t.PolyUtil = mi, t.Point = k, t.point = A, t.Bounds = B, t.bounds = O, t.Transformation = V, t.transformation = G, t.Projection = vi, t.LatLng = R, t.latLng = U, t.LatLngBounds = Z, t.latLngBounds = N, t.CRS = W, t.GeoJSON = Ai, t.geoJSON = Hi, t.geoJson = Fi, t.Layer = xi, t.LayerGroup = wi, t.layerGroup = function(t, e) {
                    return new wi(t, e)
                }, t.FeatureGroup = bi, t.featureGroup = function(t) {
                    return new bi(t)
                }, t.ImageOverlay = Vi, t.imageOverlay = function(t, e, i) {
                    return new Vi(t, e, i)
                }, t.VideoOverlay = Gi, t.videoOverlay = function(t, e, i) {
                    return new Gi(t, e, i)
                }, t.DivOverlay = qi, t.Popup = Ji, t.popup = function(t, e) {
                    return new Ji(t, e)
                }, t.Tooltip = Ki, t.tooltip = function(t, e) {
                    return new Ki(t, e)
                }, t.Icon = Ti, t.icon = function(t) {
                    return new Ti(t)
                }, t.DivIcon = Xi, t.divIcon = function(t) {
                    return new Xi(t)
                }, t.Marker = Ci, t.marker = function(t, e) {
                    return new Ci(t, e)
                }, t.TileLayer = Qi, t.tileLayer = $i, t.GridLayer = Yi, t.gridLayer = function(t) {
                    return new Yi(t)
                }, t.SVG = hn, t.svg = ln, t.Renderer = en, t.Canvas = nn, t.canvas = on, t.Path = Si, t.CircleMarker = zi, t.circleMarker = function(t, e) {
                    return new zi(t, e)
                }, t.Circle = Di, t.circle = function(t, e, i) {
                    return new Di(t, e, i)
                }, t.Polyline = ki, t.polyline = function(t, e) {
                    return new ki(t, e)
                }, t.Polygon = Ii, t.polygon = function(t, e) {
                    return new Ii(t, e)
                }, t.Rectangle = un, t.rectangle = function(t, e) {
                    return new un(t, e)
                }, t.Map = Ve, t.map = function(t, e) {
                    return new Ve(t, e)
                }
            }(e)
        },
        FSnT: function(t, e, i) {
            "use strict";
            i.r(e);
            var n = i("CcnG"),
                o = function() {},
                s = i("pMnS"),
                a = i("3FdN"),
                r = i("jeoQ"),
                h = i("zKQG"),
                l = i("jJjB"),
                u = i("y+xJ"),
                c = i("fNGB"),
                d = i("4Jtj"),
                _ = i("rX1C"),
                p = i("Izlp"),
                m = i("7W/L"),
                f = n["\u0275crt"]({
                    encapsulation: 0,
                    styles: [".agm-map-container-inner[_ngcontent-%COMP%] {\n      width: inherit;\n      height: inherit;\n    }\n    .agm-map-content[_ngcontent-%COMP%] {\n      display:none;\n    }"],
                    data: {}
                });

            function g(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 0, "div", [
                    ["class", "agm-map-container-inner sebm-google-map-container-inner"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](1, 0, null, null, 1, "div", [
                    ["class", "agm-map-content"]
                ], null, null, null, null, null)), n["\u0275ncd"](null, 0)], null, null)
            }
            var v = i("j5V/"),
                y = i("c+eF"),
                P = function() {
                    function t(t) {
                        this.pageTitleService = t, this.lat = 40.73061, this.lng = -73.935242
                    }
                    return t.prototype.ngOnInit = function() {
                        this.pageTitleService.setTitle("Google Map")
                    }, t
                }(),
                L = n["\u0275crt"]({
                    encapsulation: 2,
                    styles: [
                        [".sebm-google-map-container{width:100%;height:600px;display:flex}"]
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

            function x(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 21, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](1, 0, null, null, 20, "div", [
                    ["class", "col-xs-12 col-sm-12 col-md-12 col-lg-12"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](2, 0, null, null, 19, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](3, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](4, 0, null, null, 3, "div", [
                    ["class", "chankya-card-inner"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](5, 0, null, null, 2, "div", [
                    ["class", "chankya-start"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](6, 0, null, null, 1, "h4", [], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, ["Global Locations"])), (t()(), n["\u0275eld"](8, 0, null, null, 13, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](9, 0, null, null, 12, "agm-map", [], [
                    [2, "sebm-google-map-container", null]
                ], null, null, g, f)), n["\u0275prd"](4608, null, h.a, h.a, [r.a, n.NgZone, a.a]), n["\u0275prd"](4608, null, l.a, l.a, [r.a, n.NgZone]), n["\u0275prd"](4608, null, u.a, u.a, [r.a, n.NgZone]), n["\u0275prd"](4608, null, c.a, c.a, [r.a, n.NgZone]), n["\u0275prd"](4608, null, d.a, d.a, [r.a, n.NgZone]), n["\u0275prd"](4608, null, _.a, _.a, [r.a, n.NgZone]), n["\u0275prd"](512, null, r.a, r.a, [p.a, n.NgZone]), n["\u0275did"](17, 770048, null, 0, m.a, [n.ElementRef, r.a], {
                    longitude: [0, "longitude"],
                    latitude: [1, "latitude"]
                }, null), n["\u0275prd"](512, null, a.a, a.a, [r.a, n.NgZone]), (t()(), n["\u0275eld"](19, 0, null, 0, 2, "agm-marker", [], null, null, null, null, null)), n["\u0275did"](20, 1720320, null, 1, v.a, [a.a], {
                    latitude: [0, "latitude"],
                    longitude: [1, "longitude"]
                }, null), n["\u0275qud"](603979776, 1, {
                    infoWindow: 1
                })], function(t, e) {
                    var i = e.component;
                    t(e, 17, 0, i.lng, i.lat), t(e, 20, 0, i.lat, i.lng)
                }, function(t, e) {
                    t(e, 9, 0, !0)
                })
            }
            var w = n["\u0275ccf"]("ms-google-map", P, function(t) {
                    return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 1, "ms-google-map", [], [
                        [40, "@fadeInAnimation", 0]
                    ], null, null, x, L)), n["\u0275did"](1, 114688, null, 0, P, [y.a], null, null)], function(t, e) {
                        t(e, 1, 0)
                    }, function(t, e) {
                        t(e, 0, 0, !0)
                    })
                }, {}, {}, []),
                b = function() {
                    function t(t) {
                        this.pageTitleService = t
                    }
                    return t.prototype.ngOnInit = function() {
                        this.pageTitleService.setTitle("Vector Map"), jQuery("#vmap").vectorMap({
                            map: "world_en"
                        })
                    }, t
                }(),
                T = n["\u0275crt"]({
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

            function M(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 7, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](1, 0, null, null, 6, "div", [
                    ["class", "col-xs-12 col-sm-12 col-md-12 col-lg-12"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](2, 0, null, null, 5, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](3, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](4, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, ["Global Locations"])), (t()(), n["\u0275eld"](6, 0, null, null, 1, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](7, 0, null, null, 0, "div", [
                    ["class", "w-100"],
                    ["id", "vmap"],
                    ["style", "height: 400px;"]
                ], null, null, null, null, null))], null, null)
            }
            var E = n["\u0275ccf"]("ms-vector-map", b, function(t) {
                    return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 1, "ms-vector-map", [], [
                        [40, "@fadeInAnimation", 0]
                    ], null, null, M, T)), n["\u0275did"](1, 114688, null, 0, b, [y.a], null, null)], function(t, e) {
                        t(e, 1, 0)
                    }, function(t, e) {
                        t(e, 0, 0, !0)
                    })
                }, {}, {}, []),
                C = i("4R65"),
                S = (i("Or5P"), function() {
                    function t(t, e) {
                        this._elementRef = t, this.pageTitleService = e
                    }
                    return t.prototype.ngOnInit = function() {
                        this.pageTitleService.setTitle("Leaflet Map")
                    }, t.prototype.ngAfterViewInit = function() {
                        var t = this._elementRef.nativeElement.querySelector(".leaflet-maps");
                        C.Icon.Default.imagePath = "assets/img/";
                        var e = C.map(t).setView([51.505, -.09], 13);
                        C.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
                            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        }).addTo(e), C.marker([51.5, -.09]).addTo(e).bindPopup("A pretty CSS3 popup.<br> Easily customizable.").openPopup()
                    }, t
                }()),
                z = n["\u0275crt"]({
                    encapsulation: 2,
                    styles: [
                        [".leaflet-maps{width:100%;height:600px}"]
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

            function D(t) {
                return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 7, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](1, 0, null, null, 6, "div", [
                    ["class", "col-xs-12 col-sm-12 col-md-12 col-lg-12"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](2, 0, null, null, 5, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](3, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](4, 0, null, null, 1, "h3", [], null, null, null, null, null)), (t()(), n["\u0275ted"](-1, null, ["Global Locations"])), (t()(), n["\u0275eld"](6, 0, null, null, 1, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (t()(), n["\u0275eld"](7, 0, null, null, 0, "div", [
                    ["class", "leaflet-maps"]
                ], null, null, null, null, null))], null, null)
            }
            var k = n["\u0275ccf"]("ms-leaflet-maps", S, function(t) {
                    return n["\u0275vid"](0, [(t()(), n["\u0275eld"](0, 0, null, null, 1, "ms-leaflet-maps", [], [
                        [40, "@fadeInAnimation", 0]
                    ], null, null, D, z)), n["\u0275did"](1, 4308992, null, 0, S, [n.ElementRef, y.a], null, null)], function(t, e) {
                        t(e, 1, 0)
                    }, function(t, e) {
                        t(e, 0, 0, !0)
                    })
                }, {}, {}, []),
                I = i("Ip0R"),
                A = i("gIcY"),
                B = i("BBZF"),
                O = i("Ry/H"),
                Z = i("/fSM"),
                N = i("ZYCi");
            i.d(e, "MapsDemoModuleNgFactory", function() {
                return R
            });
            var R = n["\u0275cmf"](o, [], function(t) {
                return n["\u0275mod"]([n["\u0275mpd"](512, n.ComponentFactoryResolver, n["\u0275CodegenComponentFactoryResolver"], [
                    [8, [s.a, w, E, k]],
                    [3, n.ComponentFactoryResolver], n.NgModuleRef
                ]), n["\u0275mpd"](4608, I.NgLocalization, I.NgLocaleLocalization, [n.LOCALE_ID, [2, I["\u0275angular_packages_common_common_a"]]]), n["\u0275mpd"](4608, A["\u0275angular_packages_forms_forms_i"], A["\u0275angular_packages_forms_forms_i"], []), n["\u0275mpd"](4608, B.c, B.c, []), n["\u0275mpd"](4608, B.b, B.b, []), n["\u0275mpd"](4608, p.a, O.b, [
                    [2, O.a], B.c, B.b
                ]), n["\u0275mpd"](1073742336, I.CommonModule, I.CommonModule, []), n["\u0275mpd"](1073742336, A["\u0275angular_packages_forms_forms_bb"], A["\u0275angular_packages_forms_forms_bb"], []), n["\u0275mpd"](1073742336, A.FormsModule, A.FormsModule, []), n["\u0275mpd"](1073742336, Z.a, Z.a, []), n["\u0275mpd"](1073742336, N.p, N.p, [
                    [2, N.v],
                    [2, N.m]
                ]), n["\u0275mpd"](1073742336, o, o, []), n["\u0275mpd"](256, O.a, {
                    apiKey: "AIzaSyBtdO5k6CRntAMJCF-H5uZjTCoSGX95cdk"
                }, []), n["\u0275mpd"](1024, N.k, function() {
                    return [
                        [{
                            path: "",
                            redirectTo: "googlemap",
                            pathMatch: "full"
                        }, {
                            path: "",
                            children: [{
                                path: "googlemap",
                                component: P
                            }, {
                                path: "vectormap",
                                component: b
                            }, {
                                path: "leafletmap",
                                component: S
                            }]
                        }]
                    ]
                }, [])])
            })
        },
        Or5P: function(t, e, i) {
            var n = i("Xtg7");
            t.exports = function(t) {
                (t = t || {
                    defaultStyle: !0
                }).defaultStyle && (n.Icon.Default.imagePath = "//cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.3/images", function() {
                    document.documentElement.style.height = "100%", document.body.style.height = "100%", document.body.style.margin = "0";
                    var t = document.createElement("link");
                    t.setAttribute("rel", "stylesheet"), t.setAttribute("href", "//cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.3/leaflet.css"), document.body.appendChild(t)
                }());
                var e = document.createElement("div");
                return e.setAttribute("style", "width:100%;height:100%;position:inherit;"), document.body.appendChild(e), n.map(e)
            }
        },
        Xtg7: function(t, e, i) {
            var n, o;
            ! function(s, a, r) {
                var h, l, u = s.L,
                    c = {
                        version: "0.7.7"
                    };
                "object" == typeof t && "object" == typeof t.exports ? t.exports = c : void 0 === (o = "function" == typeof(n = c) ? n.call(e, i, e, t) : n) || (t.exports = o), c.noConflict = function() {
                        return s.L = u, this
                    }, s.L = c, c.Util = {
                        extend: function(t) {
                            var e, i, n, o, s = Array.prototype.slice.call(arguments, 1);
                            for (i = 0, n = s.length; i < n; i++)
                                for (e in o = s[i] || {}) o.hasOwnProperty(e) && (t[e] = o[e]);
                            return t
                        },
                        bind: function(t, e) {
                            var i = arguments.length > 2 ? Array.prototype.slice.call(arguments, 2) : null;
                            return function() {
                                return t.apply(e, i || arguments)
                            }
                        },
                        stamp: (h = 0, l = "_leaflet_id", function(t) {
                            return t[l] = t[l] || ++h, t[l]
                        }),
                        invokeEach: function(t, e, i) {
                            var n, o;
                            if ("object" == typeof t) {
                                for (n in o = Array.prototype.slice.call(arguments, 3), t) e.apply(i, [n, t[n]].concat(o));
                                return !0
                            }
                            return !1
                        },
                        limitExecByInterval: function(t, e, i) {
                            var n, o;
                            return function s() {
                                var a = arguments;
                                n ? o = !0 : (n = !0, setTimeout(function() {
                                    n = !1, o && (s.apply(i, a), o = !1)
                                }, e), t.apply(i, a))
                            }
                        },
                        falseFn: function() {
                            return !1
                        },
                        formatNum: function(t, e) {
                            var i = Math.pow(10, e || 5);
                            return Math.round(t * i) / i
                        },
                        trim: function(t) {
                            return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
                        },
                        splitWords: function(t) {
                            return c.Util.trim(t).split(/\s+/)
                        },
                        setOptions: function(t, e) {
                            return t.options = c.extend({}, t.options, e), t.options
                        },
                        getParamString: function(t, e, i) {
                            var n = [];
                            for (var o in t) n.push(encodeURIComponent(i ? o.toUpperCase() : o) + "=" + encodeURIComponent(t[o]));
                            return (e && -1 !== e.indexOf("?") ? "&" : "?") + n.join("&")
                        },
                        template: function(t, e) {
                            return t.replace(/\{ *([\w_]+) *\}/g, function(t, i) {
                                var n = e[i];
                                if (void 0 === n) throw new Error("No value provided for variable " + t);
                                return "function" == typeof n && (n = n(e)), n
                            })
                        },
                        isArray: Array.isArray || function(t) {
                            return "[object Array]" === Object.prototype.toString.call(t)
                        },
                        emptyImageUrl: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                    },
                    function() {
                        function t(t) {
                            var e, i, n = ["webkit", "moz", "o", "ms"];
                            for (e = 0; e < n.length && !i; e++) i = s[n[e] + t];
                            return i
                        }
                        var e = 0;

                        function i(t) {
                            var i = +new Date,
                                n = Math.max(0, 16 - (i - e));
                            return e = i + n, s.setTimeout(t, n)
                        }
                        var n = s.requestAnimationFrame || t("RequestAnimationFrame") || i,
                            o = s.cancelAnimationFrame || t("CancelAnimationFrame") || t("CancelRequestAnimationFrame") || function(t) {
                                s.clearTimeout(t)
                            };
                        c.Util.requestAnimFrame = function(t, e, o, a) {
                            if (t = c.bind(t, e), !o || n !== i) return n.call(s, t, a);
                            t()
                        }, c.Util.cancelAnimFrame = function(t) {
                            t && o.call(s, t)
                        }
                    }(), c.extend = c.Util.extend, c.bind = c.Util.bind, c.stamp = c.Util.stamp, c.setOptions = c.Util.setOptions, c.Class = function() {}, c.Class.extend = function(t) {
                        var e = function() {
                                this.initialize && this.initialize.apply(this, arguments), this._initHooks && this.callInitHooks()
                            },
                            i = function() {};
                        i.prototype = this.prototype;
                        var n = new i;
                        for (var o in n.constructor = e, e.prototype = n, this) this.hasOwnProperty(o) && "prototype" !== o && (e[o] = this[o]);
                        t.statics && (c.extend(e, t.statics), delete t.statics), t.includes && (c.Util.extend.apply(null, [n].concat(t.includes)), delete t.includes), t.options && n.options && (t.options = c.extend({}, n.options, t.options)), c.extend(n, t), n._initHooks = [];
                        var s = this;
                        return e.__super__ = s.prototype, n.callInitHooks = function() {
                            if (!this._initHooksCalled) {
                                s.prototype.callInitHooks && s.prototype.callInitHooks.call(this), this._initHooksCalled = !0;
                                for (var t = 0, e = n._initHooks.length; t < e; t++) n._initHooks[t].call(this)
                            }
                        }, e
                    }, c.Class.include = function(t) {
                        c.extend(this.prototype, t)
                    }, c.Class.mergeOptions = function(t) {
                        c.extend(this.prototype.options, t)
                    }, c.Class.addInitHook = function(t) {
                        var e = Array.prototype.slice.call(arguments, 1),
                            i = "function" == typeof t ? t : function() {
                                this[t].apply(this, e)
                            };
                        this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(i)
                    };
                var d, _, p, m, f, g, v, y, P, L, x, w, b, T, M, E, C, S, z, D, k = "_leaflet_events";
                c.Mixin = {}, c.Mixin.Events = {
                        addEventListener: function(t, e, i) {
                            if (c.Util.invokeEach(t, this.addEventListener, this, e, i)) return this;
                            var n, o, s, a, r, h, l, u = this[k] = this[k] || {},
                                d = i && i !== this && c.stamp(i);
                            for (n = 0, o = (t = c.Util.splitWords(t)).length; n < o; n++) s = {
                                action: e,
                                context: i || this
                            }, a = t[n], d ? (h = (r = a + "_idx") + "_len", (l = u[r] = u[r] || {})[d] || (l[d] = [], u[h] = (u[h] || 0) + 1), l[d].push(s)) : (u[a] = u[a] || [], u[a].push(s));
                            return this
                        },
                        hasEventListeners: function(t) {
                            var e = this[k];
                            return !!e && (t in e && e[t].length > 0 || t + "_idx" in e && e[t + "_idx_len"] > 0)
                        },
                        removeEventListener: function(t, e, i) {
                            if (!this[k]) return this;
                            if (!t) return this.clearAllEventListeners();
                            if (c.Util.invokeEach(t, this.removeEventListener, this, e, i)) return this;
                            var n, o, s, a, r, h, l, u, d = this[k],
                                _ = i && i !== this && c.stamp(i);
                            for (n = 0, o = (t = c.Util.splitWords(t)).length; n < o; n++)
                                if (l = (h = (s = t[n]) + "_idx") + "_len", u = d[h], e) {
                                    if (a = _ && u ? u[_] : d[s]) {
                                        for (r = a.length - 1; r >= 0; r--) a[r].action !== e || i && a[r].context !== i || (a.splice(r, 1)[0].action = c.Util.falseFn);
                                        i && u && 0 === a.length && (delete u[_], d[l]--)
                                    }
                                } else delete d[s], delete d[h], delete d[l];
                            return this
                        },
                        clearAllEventListeners: function() {
                            return delete this[k], this
                        },
                        fireEvent: function(t, e) {
                            if (!this.hasEventListeners(t)) return this;
                            var i, n, o, s, a, r = c.Util.extend({}, e, {
                                    type: t,
                                    target: this
                                }),
                                h = this[k];
                            if (h[t])
                                for (n = 0, o = (i = h[t].slice()).length; n < o; n++) i[n].action.call(i[n].context, r);
                            for (a in s = h[t + "_idx"])
                                if (i = s[a].slice())
                                    for (n = 0, o = i.length; n < o; n++) i[n].action.call(i[n].context, r);
                            return this
                        },
                        addOneTimeEventListener: function(t, e, i) {
                            if (c.Util.invokeEach(t, this.addOneTimeEventListener, this, e, i)) return this;
                            var n = c.bind(function() {
                                this.removeEventListener(t, e, i).removeEventListener(t, n, i)
                            }, this);
                            return this.addEventListener(t, e, i).addEventListener(t, n, i)
                        }
                    }, c.Mixin.Events.on = c.Mixin.Events.addEventListener, c.Mixin.Events.off = c.Mixin.Events.removeEventListener, c.Mixin.Events.once = c.Mixin.Events.addOneTimeEventListener, c.Mixin.Events.fire = c.Mixin.Events.fireEvent, _ = (d = "ActiveXObject" in s) && !a.addEventListener, m = -1 !== (p = navigator.userAgent.toLowerCase()).indexOf("webkit"), f = -1 !== p.indexOf("chrome"), g = -1 !== p.indexOf("phantom"), v = -1 !== p.indexOf("android"), y = -1 !== p.search("android [23]"), P = -1 !== p.indexOf("gecko"), L = typeof orientation != void 0 + "", x = !s.PointerEvent && s.MSPointerEvent, w = s.PointerEvent && s.navigator.pointerEnabled || x, b = "devicePixelRatio" in s && s.devicePixelRatio > 1 || "matchMedia" in s && s.matchMedia("(min-resolution:144dpi)") && s.matchMedia("(min-resolution:144dpi)").matches, T = a.documentElement, M = d && "transition" in T.style, E = "WebKitCSSMatrix" in s && "m11" in new s.WebKitCSSMatrix && !y, C = "MozPerspective" in T.style, S = "OTransition" in T.style, c.Browser = {
                        ie: d,
                        ielt9: _,
                        webkit: m,
                        gecko: P && !m && !s.opera && !d,
                        android: v,
                        android23: y,
                        chrome: f,
                        ie3d: M,
                        webkit3d: E,
                        gecko3d: C,
                        opera3d: S,
                        any3d: !s.L_DISABLE_3D && (M || E || C || S) && !g,
                        mobile: L,
                        mobileWebkit: L && m,
                        mobileWebkit3d: L && E,
                        mobileOpera: L && s.opera,
                        touch: !s.L_NO_TOUCH && !g && (w || "ontouchstart" in s || s.DocumentTouch && a instanceof s.DocumentTouch),
                        msPointer: x,
                        pointer: w,
                        retina: b
                    }, c.Point = function(t, e, i) {
                        this.x = i ? Math.round(t) : t, this.y = i ? Math.round(e) : e
                    }, c.Point.prototype = {
                        clone: function() {
                            return new c.Point(this.x, this.y)
                        },
                        add: function(t) {
                            return this.clone()._add(c.point(t))
                        },
                        _add: function(t) {
                            return this.x += t.x, this.y += t.y, this
                        },
                        subtract: function(t) {
                            return this.clone()._subtract(c.point(t))
                        },
                        _subtract: function(t) {
                            return this.x -= t.x, this.y -= t.y, this
                        },
                        divideBy: function(t) {
                            return this.clone()._divideBy(t)
                        },
                        _divideBy: function(t) {
                            return this.x /= t, this.y /= t, this
                        },
                        multiplyBy: function(t) {
                            return this.clone()._multiplyBy(t)
                        },
                        _multiplyBy: function(t) {
                            return this.x *= t, this.y *= t, this
                        },
                        round: function() {
                            return this.clone()._round()
                        },
                        _round: function() {
                            return this.x = Math.round(this.x), this.y = Math.round(this.y), this
                        },
                        floor: function() {
                            return this.clone()._floor()
                        },
                        _floor: function() {
                            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
                        },
                        distanceTo: function(t) {
                            var e = (t = c.point(t)).x - this.x,
                                i = t.y - this.y;
                            return Math.sqrt(e * e + i * i)
                        },
                        equals: function(t) {
                            return (t = c.point(t)).x === this.x && t.y === this.y
                        },
                        contains: function(t) {
                            return t = c.point(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
                        },
                        toString: function() {
                            return "Point(" + c.Util.formatNum(this.x) + ", " + c.Util.formatNum(this.y) + ")"
                        }
                    }, c.point = function(t, e, i) {
                        return t instanceof c.Point ? t : c.Util.isArray(t) ? new c.Point(t[0], t[1]) : void 0 === t || null === t ? t : new c.Point(t, e, i)
                    }, c.Bounds = function(t, e) {
                        if (t)
                            for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++) this.extend(i[n])
                    }, c.Bounds.prototype = {
                        extend: function(t) {
                            return t = c.point(t), this.min || this.max ? (this.min.x = Math.min(t.x, this.min.x), this.max.x = Math.max(t.x, this.max.x), this.min.y = Math.min(t.y, this.min.y), this.max.y = Math.max(t.y, this.max.y)) : (this.min = t.clone(), this.max = t.clone()), this
                        },
                        getCenter: function(t) {
                            return new c.Point((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t)
                        },
                        getBottomLeft: function() {
                            return new c.Point(this.min.x, this.max.y)
                        },
                        getTopRight: function() {
                            return new c.Point(this.max.x, this.min.y)
                        },
                        getSize: function() {
                            return this.max.subtract(this.min)
                        },
                        contains: function(t) {
                            var e, i;
                            return (t = "number" == typeof t[0] || t instanceof c.Point ? c.point(t) : c.bounds(t)) instanceof c.Bounds ? (e = t.min, i = t.max) : e = i = t, e.x >= this.min.x && i.x <= this.max.x && e.y >= this.min.y && i.y <= this.max.y
                        },
                        intersects: function(t) {
                            t = c.bounds(t);
                            var e = this.min,
                                i = this.max,
                                n = t.min,
                                o = t.max;
                            return o.x >= e.x && n.x <= i.x && o.y >= e.y && n.y <= i.y
                        },
                        isValid: function() {
                            return !(!this.min || !this.max)
                        }
                    }, c.bounds = function(t, e) {
                        return !t || t instanceof c.Bounds ? t : new c.Bounds(t, e)
                    }, c.Transformation = function(t, e, i, n) {
                        this._a = t, this._b = e, this._c = i, this._d = n
                    }, c.Transformation.prototype = {
                        transform: function(t, e) {
                            return this._transform(t.clone(), e)
                        },
                        _transform: function(t, e) {
                            return t.x = (e = e || 1) * (this._a * t.x + this._b), t.y = e * (this._c * t.y + this._d), t
                        },
                        untransform: function(t, e) {
                            return new c.Point((t.x / (e = e || 1) - this._b) / this._a, (t.y / e - this._d) / this._c)
                        }
                    }, c.DomUtil = {
                        get: function(t) {
                            return "string" == typeof t ? a.getElementById(t) : t
                        },
                        getStyle: function(t, e) {
                            var i = t.style[e];
                            if (!i && t.currentStyle && (i = t.currentStyle[e]), (!i || "auto" === i) && a.defaultView) {
                                var n = a.defaultView.getComputedStyle(t, null);
                                i = n ? n[e] : null
                            }
                            return "auto" === i ? null : i
                        },
                        getViewportOffset: function(t) {
                            var e, i = 0,
                                n = 0,
                                o = t,
                                s = a.body,
                                r = a.documentElement;
                            do {
                                if (i += o.offsetTop || 0, n += o.offsetLeft || 0, i += parseInt(c.DomUtil.getStyle(o, "borderTopWidth"), 10) || 0, n += parseInt(c.DomUtil.getStyle(o, "borderLeftWidth"), 10) || 0, e = c.DomUtil.getStyle(o, "position"), o.offsetParent === s && "absolute" === e) break;
                                if ("fixed" === e) {
                                    i += s.scrollTop || r.scrollTop || 0, n += s.scrollLeft || r.scrollLeft || 0;
                                    break
                                }
                                if ("relative" === e && !o.offsetLeft) {
                                    var h = c.DomUtil.getStyle(o, "width"),
                                        l = c.DomUtil.getStyle(o, "max-width"),
                                        u = o.getBoundingClientRect();
                                    "none" === h && "none" === l || (n += u.left + o.clientLeft), i += u.top + (s.scrollTop || r.scrollTop || 0);
                                    break
                                }
                                o = o.offsetParent
                            } while (o);
                            o = t;
                            do {
                                if (o === s) break;
                                i -= o.scrollTop || 0, n -= o.scrollLeft || 0, o = o.parentNode
                            } while (o);
                            return new c.Point(n, i)
                        },
                        documentIsLtr: function() {
                            return c.DomUtil._docIsLtrCached || (c.DomUtil._docIsLtrCached = !0, c.DomUtil._docIsLtr = "ltr" === c.DomUtil.getStyle(a.body, "direction")), c.DomUtil._docIsLtr
                        },
                        create: function(t, e, i) {
                            var n = a.createElement(t);
                            return n.className = e, i && i.appendChild(n), n
                        },
                        hasClass: function(t, e) {
                            if (void 0 !== t.classList) return t.classList.contains(e);
                            var i = c.DomUtil._getClass(t);
                            return i.length > 0 && new RegExp("(^|\\s)" + e + "(\\s|$)").test(i)
                        },
                        addClass: function(t, e) {
                            if (void 0 !== t.classList)
                                for (var i = c.Util.splitWords(e), n = 0, o = i.length; n < o; n++) t.classList.add(i[n]);
                            else if (!c.DomUtil.hasClass(t, e)) {
                                var s = c.DomUtil._getClass(t);
                                c.DomUtil._setClass(t, (s ? s + " " : "") + e)
                            }
                        },
                        removeClass: function(t, e) {
                            void 0 !== t.classList ? t.classList.remove(e) : c.DomUtil._setClass(t, c.Util.trim((" " + c.DomUtil._getClass(t) + " ").replace(" " + e + " ", " ")))
                        },
                        _setClass: function(t, e) {
                            void 0 === t.className.baseVal ? t.className = e : t.className.baseVal = e
                        },
                        _getClass: function(t) {
                            return void 0 === t.className.baseVal ? t.className : t.className.baseVal
                        },
                        setOpacity: function(t, e) {
                            if ("opacity" in t.style) t.style.opacity = e;
                            else if ("filter" in t.style) {
                                var i = !1,
                                    n = "DXImageTransform.Microsoft.Alpha";
                                try {
                                    i = t.filters.item(n)
                                } catch (t) {
                                    if (1 === e) return
                                }
                                e = Math.round(100 * e), i ? (i.Enabled = 100 !== e, i.Opacity = e) : t.style.filter += " progid:" + n + "(opacity=" + e + ")"
                            }
                        },
                        testProp: function(t) {
                            for (var e = a.documentElement.style, i = 0; i < t.length; i++)
                                if (t[i] in e) return t[i];
                            return !1
                        },
                        getTranslateString: function(t) {
                            var e = c.Browser.webkit3d;
                            return "translate" + (e ? "3d" : "") + "(" + t.x + "px," + t.y + "px" + (e ? ",0" : "") + ")"
                        },
                        getScaleString: function(t, e) {
                            return c.DomUtil.getTranslateString(e.add(e.multiplyBy(-1 * t))) + " scale(" + t + ") "
                        },
                        setPosition: function(t, e, i) {
                            t._leaflet_pos = e, !i && c.Browser.any3d ? t.style[c.DomUtil.TRANSFORM] = c.DomUtil.getTranslateString(e) : (t.style.left = e.x + "px", t.style.top = e.y + "px")
                        },
                        getPosition: function(t) {
                            return t._leaflet_pos
                        }
                    }, c.DomUtil.TRANSFORM = c.DomUtil.testProp(["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"]), c.DomUtil.TRANSITION = c.DomUtil.testProp(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]), c.DomUtil.TRANSITION_END = "webkitTransition" === c.DomUtil.TRANSITION || "OTransition" === c.DomUtil.TRANSITION ? c.DomUtil.TRANSITION + "End" : "transitionend",
                    function() {
                        if ("onselectstart" in a) c.extend(c.DomUtil, {
                            disableTextSelection: function() {
                                c.DomEvent.on(s, "selectstart", c.DomEvent.preventDefault)
                            },
                            enableTextSelection: function() {
                                c.DomEvent.off(s, "selectstart", c.DomEvent.preventDefault)
                            }
                        });
                        else {
                            var t = c.DomUtil.testProp(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
                            c.extend(c.DomUtil, {
                                disableTextSelection: function() {
                                    if (t) {
                                        var e = a.documentElement.style;
                                        this._userSelect = e[t], e[t] = "none"
                                    }
                                },
                                enableTextSelection: function() {
                                    t && (a.documentElement.style[t] = this._userSelect, delete this._userSelect)
                                }
                            })
                        }
                        c.extend(c.DomUtil, {
                            disableImageDrag: function() {
                                c.DomEvent.on(s, "dragstart", c.DomEvent.preventDefault)
                            },
                            enableImageDrag: function() {
                                c.DomEvent.off(s, "dragstart", c.DomEvent.preventDefault)
                            }
                        })
                    }(), c.LatLng = function(t, e, i) {
                        if (t = parseFloat(t), e = parseFloat(e), isNaN(t) || isNaN(e)) throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
                        this.lat = t, this.lng = e, void 0 !== i && (this.alt = parseFloat(i))
                    }, c.extend(c.LatLng, {
                        DEG_TO_RAD: Math.PI / 180,
                        RAD_TO_DEG: 180 / Math.PI,
                        MAX_MARGIN: 1e-9
                    }), c.LatLng.prototype = {
                        equals: function(t) {
                            return !!t && (t = c.latLng(t), Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng)) <= c.LatLng.MAX_MARGIN)
                        },
                        toString: function(t) {
                            return "LatLng(" + c.Util.formatNum(this.lat, t) + ", " + c.Util.formatNum(this.lng, t) + ")"
                        },
                        distanceTo: function(t) {
                            t = c.latLng(t);
                            var e = c.LatLng.DEG_TO_RAD,
                                i = (t.lng - this.lng) * e,
                                n = this.lat * e,
                                o = t.lat * e,
                                s = Math.sin((t.lat - this.lat) * e / 2),
                                a = Math.sin(i / 2),
                                r = s * s + a * a * Math.cos(n) * Math.cos(o);
                            return 12756274 * Math.atan2(Math.sqrt(r), Math.sqrt(1 - r))
                        },
                        wrap: function(t, e) {
                            var i = this.lng;
                            return t = t || -180, new c.LatLng(this.lat, i = (i + (e = e || 180)) % (e - t) + (i < t || i === e ? e : t))
                        }
                    }, c.latLng = function(t, e) {
                        return t instanceof c.LatLng ? t : c.Util.isArray(t) ? "number" == typeof t[0] || "string" == typeof t[0] ? new c.LatLng(t[0], t[1], t[2]) : null : void 0 === t || null === t ? t : "object" == typeof t && "lat" in t ? new c.LatLng(t.lat, "lng" in t ? t.lng : t.lon) : void 0 === e ? null : new c.LatLng(t, e)
                    }, c.LatLngBounds = function(t, e) {
                        if (t)
                            for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++) this.extend(i[n])
                    }, c.LatLngBounds.prototype = {
                        extend: function(t) {
                            if (!t) return this;
                            var e = c.latLng(t);
                            return (t = null !== e ? e : c.latLngBounds(t)) instanceof c.LatLng ? this._southWest || this._northEast ? (this._southWest.lat = Math.min(t.lat, this._southWest.lat), this._southWest.lng = Math.min(t.lng, this._southWest.lng), this._northEast.lat = Math.max(t.lat, this._northEast.lat), this._northEast.lng = Math.max(t.lng, this._northEast.lng)) : (this._southWest = new c.LatLng(t.lat, t.lng), this._northEast = new c.LatLng(t.lat, t.lng)) : t instanceof c.LatLngBounds && (this.extend(t._southWest), this.extend(t._northEast)), this
                        },
                        pad: function(t) {
                            var e = this._southWest,
                                i = this._northEast,
                                n = Math.abs(e.lat - i.lat) * t,
                                o = Math.abs(e.lng - i.lng) * t;
                            return new c.LatLngBounds(new c.LatLng(e.lat - n, e.lng - o), new c.LatLng(i.lat + n, i.lng + o))
                        },
                        getCenter: function() {
                            return new c.LatLng((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2)
                        },
                        getSouthWest: function() {
                            return this._southWest
                        },
                        getNorthEast: function() {
                            return this._northEast
                        },
                        getNorthWest: function() {
                            return new c.LatLng(this.getNorth(), this.getWest())
                        },
                        getSouthEast: function() {
                            return new c.LatLng(this.getSouth(), this.getEast())
                        },
                        getWest: function() {
                            return this._southWest.lng
                        },
                        getSouth: function() {
                            return this._southWest.lat
                        },
                        getEast: function() {
                            return this._northEast.lng
                        },
                        getNorth: function() {
                            return this._northEast.lat
                        },
                        contains: function(t) {
                            t = "number" == typeof t[0] || t instanceof c.LatLng ? c.latLng(t) : c.latLngBounds(t);
                            var e, i, n = this._southWest,
                                o = this._northEast;
                            return t instanceof c.LatLngBounds ? (e = t.getSouthWest(), i = t.getNorthEast()) : e = i = t, e.lat >= n.lat && i.lat <= o.lat && e.lng >= n.lng && i.lng <= o.lng
                        },
                        intersects: function(t) {
                            t = c.latLngBounds(t);
                            var e = this._southWest,
                                i = this._northEast,
                                n = t.getSouthWest(),
                                o = t.getNorthEast();
                            return o.lat >= e.lat && n.lat <= i.lat && o.lng >= e.lng && n.lng <= i.lng
                        },
                        toBBoxString: function() {
                            return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",")
                        },
                        equals: function(t) {
                            return !!t && (t = c.latLngBounds(t), this._southWest.equals(t.getSouthWest()) && this._northEast.equals(t.getNorthEast()))
                        },
                        isValid: function() {
                            return !(!this._southWest || !this._northEast)
                        }
                    }, c.latLngBounds = function(t, e) {
                        return !t || t instanceof c.LatLngBounds ? t : new c.LatLngBounds(t, e)
                    }, c.Projection = {}, c.Projection.SphericalMercator = {
                        MAX_LATITUDE: 85.0511287798,
                        project: function(t) {
                            var e = c.LatLng.DEG_TO_RAD,
                                i = this.MAX_LATITUDE,
                                n = Math.max(Math.min(i, t.lat), -i),
                                o = t.lng * e,
                                s = n * e;
                            return s = Math.log(Math.tan(Math.PI / 4 + s / 2)), new c.Point(o, s)
                        },
                        unproject: function(t) {
                            var e = c.LatLng.RAD_TO_DEG,
                                i = t.x * e,
                                n = (2 * Math.atan(Math.exp(t.y)) - Math.PI / 2) * e;
                            return new c.LatLng(n, i)
                        }
                    }, c.Projection.LonLat = {
                        project: function(t) {
                            return new c.Point(t.lng, t.lat)
                        },
                        unproject: function(t) {
                            return new c.LatLng(t.y, t.x)
                        }
                    }, c.CRS = {
                        latLngToPoint: function(t, e) {
                            var i = this.projection.project(t),
                                n = this.scale(e);
                            return this.transformation._transform(i, n)
                        },
                        pointToLatLng: function(t, e) {
                            var i = this.scale(e),
                                n = this.transformation.untransform(t, i);
                            return this.projection.unproject(n)
                        },
                        project: function(t) {
                            return this.projection.project(t)
                        },
                        scale: function(t) {
                            return 256 * Math.pow(2, t)
                        },
                        getSize: function(t) {
                            var e = this.scale(t);
                            return c.point(e, e)
                        }
                    }, c.CRS.Simple = c.extend({}, c.CRS, {
                        projection: c.Projection.LonLat,
                        transformation: new c.Transformation(1, 0, -1, 0),
                        scale: function(t) {
                            return Math.pow(2, t)
                        }
                    }), c.CRS.EPSG3857 = c.extend({}, c.CRS, {
                        code: "EPSG:3857",
                        projection: c.Projection.SphericalMercator,
                        transformation: new c.Transformation(.5 / Math.PI, .5, -.5 / Math.PI, .5),
                        project: function(t) {
                            return this.projection.project(t).multiplyBy(6378137)
                        }
                    }), c.CRS.EPSG900913 = c.extend({}, c.CRS.EPSG3857, {
                        code: "EPSG:900913"
                    }), c.CRS.EPSG4326 = c.extend({}, c.CRS, {
                        code: "EPSG:4326",
                        projection: c.Projection.LonLat,
                        transformation: new c.Transformation(1 / 360, .5, -1 / 360, .5)
                    }), c.Map = c.Class.extend({
                        includes: c.Mixin.Events,
                        options: {
                            crs: c.CRS.EPSG3857,
                            fadeAnimation: c.DomUtil.TRANSITION && !c.Browser.android23,
                            trackResize: !0,
                            markerZoomAnimation: c.DomUtil.TRANSITION && c.Browser.any3d
                        },
                        initialize: function(t, e) {
                            e = c.setOptions(this, e), this._initContainer(t), this._initLayout(), this._onResize = c.bind(this._onResize, this), this._initEvents(), e.maxBounds && this.setMaxBounds(e.maxBounds), e.center && void 0 !== e.zoom && this.setView(c.latLng(e.center), e.zoom, {
                                reset: !0
                            }), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._tileLayersNum = 0, this.callInitHooks(), this._addLayers(e.layers)
                        },
                        setView: function(t, e) {
                            return e = void 0 === e ? this.getZoom() : e, this._resetView(c.latLng(t), this._limitZoom(e)), this
                        },
                        setZoom: function(t, e) {
                            return this._loaded ? this.setView(this.getCenter(), t, {
                                zoom: e
                            }) : (this._zoom = this._limitZoom(t), this)
                        },
                        zoomIn: function(t, e) {
                            return this.setZoom(this._zoom + (t || 1), e)
                        },
                        zoomOut: function(t, e) {
                            return this.setZoom(this._zoom - (t || 1), e)
                        },
                        setZoomAround: function(t, e, i) {
                            var n = this.getZoomScale(e),
                                o = this.getSize().divideBy(2),
                                s = (t instanceof c.Point ? t : this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1 - 1 / n),
                                a = this.containerPointToLatLng(o.add(s));
                            return this.setView(a, e, {
                                zoom: i
                            })
                        },
                        fitBounds: function(t, e) {
                            e = e || {}, t = t.getBounds ? t.getBounds() : c.latLngBounds(t);
                            var i = c.point(e.paddingTopLeft || e.padding || [0, 0]),
                                n = c.point(e.paddingBottomRight || e.padding || [0, 0]),
                                o = this.getBoundsZoom(t, !1, i.add(n));
                            o = e.maxZoom ? Math.min(e.maxZoom, o) : o;
                            var s = n.subtract(i).divideBy(2),
                                a = this.project(t.getSouthWest(), o),
                                r = this.project(t.getNorthEast(), o),
                                h = this.unproject(a.add(r).divideBy(2).add(s), o);
                            return this.setView(h, o, e)
                        },
                        fitWorld: function(t) {
                            return this.fitBounds([
                                [-90, -180],
                                [90, 180]
                            ], t)
                        },
                        panTo: function(t, e) {
                            return this.setView(t, this._zoom, {
                                pan: e
                            })
                        },
                        panBy: function(t) {
                            return this.fire("movestart"), this._rawPanBy(c.point(t)), this.fire("move"), this.fire("moveend")
                        },
                        setMaxBounds: function(t) {
                            return t = c.latLngBounds(t), this.options.maxBounds = t, t ? (this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds, this)) : this.off("moveend", this._panInsideMaxBounds, this)
                        },
                        panInsideBounds: function(t, e) {
                            var i = this.getCenter(),
                                n = this._limitCenter(i, this._zoom, t);
                            return i.equals(n) ? this : this.panTo(n, e)
                        },
                        addLayer: function(t) {
                            var e = c.stamp(t);
                            return this._layers[e] ? this : (this._layers[e] = t, !t.options || isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[e] = t, this._updateZoomLevels()), this.options.zoomAnimation && c.TileLayer && t instanceof c.TileLayer && (this._tileLayersNum++, this._tileLayersToLoad++, t.on("load", this._onTileLayerLoad, this)), this._loaded && this._layerAdd(t), this)
                        },
                        removeLayer: function(t) {
                            var e = c.stamp(t);
                            return this._layers[e] ? (this._loaded && t.onRemove(this), delete this._layers[e], this._loaded && this.fire("layerremove", {
                                layer: t
                            }), this._zoomBoundLayers[e] && (delete this._zoomBoundLayers[e], this._updateZoomLevels()), this.options.zoomAnimation && c.TileLayer && t instanceof c.TileLayer && (this._tileLayersNum--, this._tileLayersToLoad--, t.off("load", this._onTileLayerLoad, this)), this) : this
                        },
                        hasLayer: function(t) {
                            return !!t && c.stamp(t) in this._layers
                        },
                        eachLayer: function(t, e) {
                            for (var i in this._layers) t.call(e, this._layers[i]);
                            return this
                        },
                        invalidateSize: function(t) {
                            if (!this._loaded) return this;
                            t = c.extend({
                                animate: !1,
                                pan: !0
                            }, !0 === t ? {
                                animate: !0
                            } : t);
                            var e = this.getSize();
                            this._sizeChanged = !0, this._initialCenter = null;
                            var i = this.getSize(),
                                n = e.divideBy(2).round(),
                                o = i.divideBy(2).round(),
                                s = n.subtract(o);
                            return s.x || s.y ? (t.animate && t.pan ? this.panBy(s) : (t.pan && this._rawPanBy(s), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(c.bind(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
                                oldSize: e,
                                newSize: i
                            })) : this
                        },
                        addHandler: function(t, e) {
                            if (!e) return this;
                            var i = this[t] = new e(this);
                            return this._handlers.push(i), this.options[t] && i.enable(), this
                        },
                        remove: function() {
                            this._loaded && this.fire("unload"), this._initEvents("off");
                            try {
                                delete this._container._leaflet
                            } catch (t) {
                                this._container._leaflet = void 0
                            }
                            return this._clearPanes(), this._clearControlPos && this._clearControlPos(), this._clearHandlers(), this
                        },
                        getCenter: function() {
                            return this._checkIfLoaded(), this._initialCenter && !this._moved() ? this._initialCenter : this.layerPointToLatLng(this._getCenterLayerPoint())
                        },
                        getZoom: function() {
                            return this._zoom
                        },
                        getBounds: function() {
                            var t = this.getPixelBounds(),
                                e = this.unproject(t.getBottomLeft()),
                                i = this.unproject(t.getTopRight());
                            return new c.LatLngBounds(e, i)
                        },
                        getMinZoom: function() {
                            return void 0 === this.options.minZoom ? void 0 === this._layersMinZoom ? 0 : this._layersMinZoom : this.options.minZoom
                        },
                        getMaxZoom: function() {
                            return void 0 === this.options.maxZoom ? void 0 === this._layersMaxZoom ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom
                        },
                        getBoundsZoom: function(t, e, i) {
                            t = c.latLngBounds(t);
                            var n, o = this.getMinZoom() - (e ? 1 : 0),
                                s = this.getMaxZoom(),
                                a = this.getSize(),
                                r = t.getNorthWest(),
                                h = t.getSouthEast(),
                                l = !0;
                            i = c.point(i || [0, 0]);
                            do {
                                n = this.project(h, ++o).subtract(this.project(r, o)).add(i), l = e ? n.x < a.x || n.y < a.y : a.contains(n)
                            } while (l && o <= s);
                            return l && e ? null : e ? o : o - 1
                        },
                        getSize: function() {
                            return this._size && !this._sizeChanged || (this._size = new c.Point(this._container.clientWidth, this._container.clientHeight), this._sizeChanged = !1), this._size.clone()
                        },
                        getPixelBounds: function() {
                            var t = this._getTopLeftPoint();
                            return new c.Bounds(t, t.add(this.getSize()))
                        },
                        getPixelOrigin: function() {
                            return this._checkIfLoaded(), this._initialTopLeftPoint
                        },
                        getPanes: function() {
                            return this._panes
                        },
                        getContainer: function() {
                            return this._container
                        },
                        getZoomScale: function(t) {
                            var e = this.options.crs;
                            return e.scale(t) / e.scale(this._zoom)
                        },
                        getScaleZoom: function(t) {
                            return this._zoom + Math.log(t) / Math.LN2
                        },
                        project: function(t, e) {
                            return e = void 0 === e ? this._zoom : e, this.options.crs.latLngToPoint(c.latLng(t), e)
                        },
                        unproject: function(t, e) {
                            return e = void 0 === e ? this._zoom : e, this.options.crs.pointToLatLng(c.point(t), e)
                        },
                        layerPointToLatLng: function(t) {
                            var e = c.point(t).add(this.getPixelOrigin());
                            return this.unproject(e)
                        },
                        latLngToLayerPoint: function(t) {
                            return this.project(c.latLng(t))._round()._subtract(this.getPixelOrigin())
                        },
                        containerPointToLayerPoint: function(t) {
                            return c.point(t).subtract(this._getMapPanePos())
                        },
                        layerPointToContainerPoint: function(t) {
                            return c.point(t).add(this._getMapPanePos())
                        },
                        containerPointToLatLng: function(t) {
                            var e = this.containerPointToLayerPoint(c.point(t));
                            return this.layerPointToLatLng(e)
                        },
                        latLngToContainerPoint: function(t) {
                            return this.layerPointToContainerPoint(this.latLngToLayerPoint(c.latLng(t)))
                        },
                        mouseEventToContainerPoint: function(t) {
                            return c.DomEvent.getMousePosition(t, this._container)
                        },
                        mouseEventToLayerPoint: function(t) {
                            return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))
                        },
                        mouseEventToLatLng: function(t) {
                            return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))
                        },
                        _initContainer: function(t) {
                            var e = this._container = c.DomUtil.get(t);
                            if (!e) throw new Error("Map container not found.");
                            if (e._leaflet) throw new Error("Map container is already initialized.");
                            e._leaflet = !0
                        },
                        _initLayout: function() {
                            var t = this._container;
                            c.DomUtil.addClass(t, "leaflet-container" + (c.Browser.touch ? " leaflet-touch" : "") + (c.Browser.retina ? " leaflet-retina" : "") + (c.Browser.ielt9 ? " leaflet-oldie" : "") + (this.options.fadeAnimation ? " leaflet-fade-anim" : ""));
                            var e = c.DomUtil.getStyle(t, "position");
                            "absolute" !== e && "relative" !== e && "fixed" !== e && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos()
                        },
                        _initPanes: function() {
                            var t = this._panes = {};
                            this._mapPane = t.mapPane = this._createPane("leaflet-map-pane", this._container), this._tilePane = t.tilePane = this._createPane("leaflet-tile-pane", this._mapPane), t.objectsPane = this._createPane("leaflet-objects-pane", this._mapPane), t.shadowPane = this._createPane("leaflet-shadow-pane"), t.overlayPane = this._createPane("leaflet-overlay-pane"), t.markerPane = this._createPane("leaflet-marker-pane"), t.popupPane = this._createPane("leaflet-popup-pane");
                            var e = " leaflet-zoom-hide";
                            this.options.markerZoomAnimation || (c.DomUtil.addClass(t.markerPane, e), c.DomUtil.addClass(t.shadowPane, e), c.DomUtil.addClass(t.popupPane, e))
                        },
                        _createPane: function(t, e) {
                            return c.DomUtil.create("div", t, e || this._panes.objectsPane)
                        },
                        _clearPanes: function() {
                            this._container.removeChild(this._mapPane)
                        },
                        _addLayers: function(t) {
                            for (var e = 0, i = (t = t ? c.Util.isArray(t) ? t : [t] : []).length; e < i; e++) this.addLayer(t[e])
                        },
                        _resetView: function(t, e, i, n) {
                            var o = this._zoom !== e;
                            n || (this.fire("movestart"), o && this.fire("zoomstart")), this._zoom = e, this._initialCenter = t, this._initialTopLeftPoint = this._getNewTopLeftPoint(t), i ? this._initialTopLeftPoint._add(this._getMapPanePos()) : c.DomUtil.setPosition(this._mapPane, new c.Point(0, 0)), this._tileLayersToLoad = this._tileLayersNum;
                            var s = !this._loaded;
                            this._loaded = !0, this.fire("viewreset", {
                                hard: !i
                            }), s && (this.fire("load"), this.eachLayer(this._layerAdd, this)), this.fire("move"), (o || n) && this.fire("zoomend"), this.fire("moveend", {
                                hard: !i
                            })
                        },
                        _rawPanBy: function(t) {
                            c.DomUtil.setPosition(this._mapPane, this._getMapPanePos().subtract(t))
                        },
                        _getZoomSpan: function() {
                            return this.getMaxZoom() - this.getMinZoom()
                        },
                        _updateZoomLevels: function() {
                            var t, e = 1 / 0,
                                i = -1 / 0,
                                n = this._getZoomSpan();
                            for (t in this._zoomBoundLayers) {
                                var o = this._zoomBoundLayers[t];
                                isNaN(o.options.minZoom) || (e = Math.min(e, o.options.minZoom)), isNaN(o.options.maxZoom) || (i = Math.max(i, o.options.maxZoom))
                            }
                            void 0 === t ? this._layersMaxZoom = this._layersMinZoom = void 0 : (this._layersMaxZoom = i, this._layersMinZoom = e), n !== this._getZoomSpan() && this.fire("zoomlevelschange")
                        },
                        _panInsideMaxBounds: function() {
                            this.panInsideBounds(this.options.maxBounds)
                        },
                        _checkIfLoaded: function() {
                            if (!this._loaded) throw new Error("Set map center and zoom first.")
                        },
                        _initEvents: function(t) {
                            if (c.DomEvent) {
                                c.DomEvent[t = t || "on"](this._container, "click", this._onMouseClick, this);
                                var e, i, n = ["dblclick", "mousedown", "mouseup", "mouseenter", "mouseleave", "mousemove", "contextmenu"];
                                for (e = 0, i = n.length; e < i; e++) c.DomEvent[t](this._container, n[e], this._fireMouseEvent, this);
                                this.options.trackResize && c.DomEvent[t](s, "resize", this._onResize, this)
                            }
                        },
                        _onResize: function() {
                            c.Util.cancelAnimFrame(this._resizeRequest), this._resizeRequest = c.Util.requestAnimFrame(function() {
                                this.invalidateSize({
                                    debounceMoveend: !0
                                })
                            }, this, !1, this._container)
                        },
                        _onMouseClick: function(t) {
                            !this._loaded || !t._simulated && (this.dragging && this.dragging.moved() || this.boxZoom && this.boxZoom.moved()) || c.DomEvent._skipped(t) || (this.fire("preclick"), this._fireMouseEvent(t))
                        },
                        _fireMouseEvent: function(t) {
                            if (this._loaded && !c.DomEvent._skipped(t)) {
                                var e = t.type;
                                if (this.hasEventListeners(e = "mouseenter" === e ? "mouseover" : "mouseleave" === e ? "mouseout" : e)) {
                                    "contextmenu" === e && c.DomEvent.preventDefault(t);
                                    var i = this.mouseEventToContainerPoint(t),
                                        n = this.containerPointToLayerPoint(i),
                                        o = this.layerPointToLatLng(n);
                                    this.fire(e, {
                                        latlng: o,
                                        layerPoint: n,
                                        containerPoint: i,
                                        originalEvent: t
                                    })
                                }
                            }
                        },
                        _onTileLayerLoad: function() {
                            this._tileLayersToLoad--, this._tileLayersNum && !this._tileLayersToLoad && this.fire("tilelayersload")
                        },
                        _clearHandlers: function() {
                            for (var t = 0, e = this._handlers.length; t < e; t++) this._handlers[t].disable()
                        },
                        whenReady: function(t, e) {
                            return this._loaded ? t.call(e || this, this) : this.on("load", t, e), this
                        },
                        _layerAdd: function(t) {
                            t.onAdd(this), this.fire("layeradd", {
                                layer: t
                            })
                        },
                        _getMapPanePos: function() {
                            return c.DomUtil.getPosition(this._mapPane)
                        },
                        _moved: function() {
                            var t = this._getMapPanePos();
                            return t && !t.equals([0, 0])
                        },
                        _getTopLeftPoint: function() {
                            return this.getPixelOrigin().subtract(this._getMapPanePos())
                        },
                        _getNewTopLeftPoint: function(t, e) {
                            var i = this.getSize()._divideBy(2);
                            return this.project(t, e)._subtract(i)._round()
                        },
                        _latLngToNewLayerPoint: function(t, e, i) {
                            var n = this._getNewTopLeftPoint(i, e).add(this._getMapPanePos());
                            return this.project(t, e)._subtract(n)
                        },
                        _getCenterLayerPoint: function() {
                            return this.containerPointToLayerPoint(this.getSize()._divideBy(2))
                        },
                        _getCenterOffset: function(t) {
                            return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())
                        },
                        _limitCenter: function(t, e, i) {
                            if (!i) return t;
                            var n = this.project(t, e),
                                o = this.getSize().divideBy(2),
                                s = new c.Bounds(n.subtract(o), n.add(o)),
                                a = this._getBoundsOffset(s, i, e);
                            return this.unproject(n.add(a), e)
                        },
                        _limitOffset: function(t, e) {
                            if (!e) return t;
                            var i = this.getPixelBounds(),
                                n = new c.Bounds(i.min.add(t), i.max.add(t));
                            return t.add(this._getBoundsOffset(n, e))
                        },
                        _getBoundsOffset: function(t, e, i) {
                            var n = this.project(e.getNorthWest(), i).subtract(t.min),
                                o = this.project(e.getSouthEast(), i).subtract(t.max),
                                s = this._rebound(n.x, -o.x),
                                a = this._rebound(n.y, -o.y);
                            return new c.Point(s, a)
                        },
                        _rebound: function(t, e) {
                            return t + e > 0 ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e))
                        },
                        _limitZoom: function(t) {
                            var e = this.getMinZoom(),
                                i = this.getMaxZoom();
                            return Math.max(e, Math.min(i, t))
                        }
                    }), c.map = function(t, e) {
                        return new c.Map(t, e)
                    }, c.Projection.Mercator = {
                        MAX_LATITUDE: 85.0840591556,
                        R_MINOR: 6356752.314245179,
                        R_MAJOR: 6378137,
                        project: function(t) {
                            var e = c.LatLng.DEG_TO_RAD,
                                i = this.MAX_LATITUDE,
                                n = Math.max(Math.min(i, t.lat), -i),
                                o = this.R_MAJOR,
                                s = t.lng * e * o,
                                a = n * e,
                                r = this.R_MINOR / o,
                                h = Math.sqrt(1 - r * r),
                                l = h * Math.sin(a);
                            l = Math.pow((1 - l) / (1 + l), .5 * h);
                            var u = Math.tan(.5 * (.5 * Math.PI - a)) / l;
                            return a = -o * Math.log(u), new c.Point(s, a)
                        },
                        unproject: function(t) {
                            for (var e, i = c.LatLng.RAD_TO_DEG, n = this.R_MAJOR, o = t.x * i / n, s = this.R_MINOR / n, a = Math.sqrt(1 - s * s), r = Math.exp(-t.y / n), h = Math.PI / 2 - 2 * Math.atan(r), l = 15, u = .1; Math.abs(u) > 1e-7 && --l > 0;) e = a * Math.sin(h), h += u = Math.PI / 2 - 2 * Math.atan(r * Math.pow((1 - e) / (1 + e), .5 * a)) - h;
                            return new c.LatLng(h * i, o)
                        }
                    }, c.CRS.EPSG3395 = c.extend({}, c.CRS, {
                        code: "EPSG:3395",
                        projection: c.Projection.Mercator,
                        transformation: (z = .5 / (Math.PI * c.Projection.Mercator.R_MAJOR), new c.Transformation(z, .5, -z, .5))
                    }), c.TileLayer = c.Class.extend({
                        includes: c.Mixin.Events,
                        options: {
                            minZoom: 0,
                            maxZoom: 18,
                            tileSize: 256,
                            subdomains: "abc",
                            errorTileUrl: "",
                            attribution: "",
                            zoomOffset: 0,
                            opacity: 1,
                            unloadInvisibleTiles: c.Browser.mobile,
                            updateWhenIdle: c.Browser.mobile
                        },
                        initialize: function(t, e) {
                            (e = c.setOptions(this, e)).detectRetina && c.Browser.retina && e.maxZoom > 0 && (e.tileSize = Math.floor(e.tileSize / 2), e.zoomOffset++, e.minZoom > 0 && e.minZoom--, this.options.maxZoom--), e.bounds && (e.bounds = c.latLngBounds(e.bounds)), this._url = t;
                            var i = this.options.subdomains;
                            "string" == typeof i && (this.options.subdomains = i.split(""))
                        },
                        onAdd: function(t) {
                            this._map = t, this._animated = t._zoomAnimated, this._initContainer(), t.on({
                                viewreset: this._reset,
                                moveend: this._update
                            }, this), this._animated && t.on({
                                zoomanim: this._animateZoom,
                                zoomend: this._endZoomAnim
                            }, this), this.options.updateWhenIdle || (this._limitedUpdate = c.Util.limitExecByInterval(this._update, 150, this), t.on("move", this._limitedUpdate, this)), this._reset(), this._update()
                        },
                        addTo: function(t) {
                            return t.addLayer(this), this
                        },
                        onRemove: function(t) {
                            this._container.parentNode.removeChild(this._container), t.off({
                                viewreset: this._reset,
                                moveend: this._update
                            }, this), this._animated && t.off({
                                zoomanim: this._animateZoom,
                                zoomend: this._endZoomAnim
                            }, this), this.options.updateWhenIdle || t.off("move", this._limitedUpdate, this), this._container = null, this._map = null
                        },
                        bringToFront: function() {
                            var t = this._map._panes.tilePane;
                            return this._container && (t.appendChild(this._container), this._setAutoZIndex(t, Math.max)), this
                        },
                        bringToBack: function() {
                            var t = this._map._panes.tilePane;
                            return this._container && (t.insertBefore(this._container, t.firstChild), this._setAutoZIndex(t, Math.min)), this
                        },
                        getAttribution: function() {
                            return this.options.attribution
                        },
                        getContainer: function() {
                            return this._container
                        },
                        setOpacity: function(t) {
                            return this.options.opacity = t, this._map && this._updateOpacity(), this
                        },
                        setZIndex: function(t) {
                            return this.options.zIndex = t, this._updateZIndex(), this
                        },
                        setUrl: function(t, e) {
                            return this._url = t, e || this.redraw(), this
                        },
                        redraw: function() {
                            return this._map && (this._reset({
                                hard: !0
                            }), this._update()), this
                        },
                        _updateZIndex: function() {
                            this._container && void 0 !== this.options.zIndex && (this._container.style.zIndex = this.options.zIndex)
                        },
                        _setAutoZIndex: function(t, e) {
                            var i, n, o, s = t.children,
                                a = -e(1 / 0, -1 / 0);
                            for (n = 0, o = s.length; n < o; n++) s[n] !== this._container && (i = parseInt(s[n].style.zIndex, 10), isNaN(i) || (a = e(a, i)));
                            this.options.zIndex = this._container.style.zIndex = (isFinite(a) ? a : 0) + e(1, -1)
                        },
                        _updateOpacity: function() {
                            var t, e = this._tiles;
                            if (c.Browser.ielt9)
                                for (t in e) c.DomUtil.setOpacity(e[t], this.options.opacity);
                            else c.DomUtil.setOpacity(this._container, this.options.opacity)
                        },
                        _initContainer: function() {
                            var t = this._map._panes.tilePane;
                            this._container || (this._container = c.DomUtil.create("div", "leaflet-layer"), this._updateZIndex(), this._animated ? (this._bgBuffer = c.DomUtil.create("div", "leaflet-tile-container", this._container), this._tileContainer = c.DomUtil.create("div", "leaflet-tile-container", this._container)) : this._tileContainer = this._container, t.appendChild(this._container), this.options.opacity < 1 && this._updateOpacity())
                        },
                        _reset: function(t) {
                            for (var e in this._tiles) this.fire("tileunload", {
                                tile: this._tiles[e]
                            });
                            this._tiles = {}, this._tilesToLoad = 0, this.options.reuseTiles && (this._unusedTiles = []), this._tileContainer.innerHTML = "", this._animated && t && t.hard && this._clearBgBuffer(), this._initContainer()
                        },
                        _getTileSize: function() {
                            var t = this._map,
                                e = t.getZoom() + this.options.zoomOffset,
                                i = this.options.maxNativeZoom,
                                n = this.options.tileSize;
                            return i && e > i && (n = Math.round(t.getZoomScale(e) / t.getZoomScale(i) * n)), n
                        },
                        _update: function() {
                            if (this._map) {
                                var t = this._map,
                                    e = t.getPixelBounds(),
                                    i = t.getZoom(),
                                    n = this._getTileSize();
                                if (!(i > this.options.maxZoom || i < this.options.minZoom)) {
                                    var o = c.bounds(e.min.divideBy(n)._floor(), e.max.divideBy(n)._floor());
                                    this._addTilesFromCenterOut(o), (this.options.unloadInvisibleTiles || this.options.reuseTiles) && this._removeOtherTiles(o)
                                }
                            }
                        },
                        _addTilesFromCenterOut: function(t) {
                            var e, i, n, o = [],
                                s = t.getCenter();
                            for (e = t.min.y; e <= t.max.y; e++)
                                for (i = t.min.x; i <= t.max.x; i++) n = new c.Point(i, e), this._tileShouldBeLoaded(n) && o.push(n);
                            var r = o.length;
                            if (0 !== r) {
                                o.sort(function(t, e) {
                                    return t.distanceTo(s) - e.distanceTo(s)
                                });
                                var h = a.createDocumentFragment();
                                for (this._tilesToLoad || this.fire("loading"), this._tilesToLoad += r, i = 0; i < r; i++) this._addTile(o[i], h);
                                this._tileContainer.appendChild(h)
                            }
                        },
                        _tileShouldBeLoaded: function(t) {
                            if (t.x + ":" + t.y in this._tiles) return !1;
                            var e = this.options;
                            if (!e.continuousWorld) {
                                var i = this._getWrapTileNum();
                                if (e.noWrap && (t.x < 0 || t.x >= i.x) || t.y < 0 || t.y >= i.y) return !1
                            }
                            if (e.bounds) {
                                var n = this._getTileSize(),
                                    o = t.multiplyBy(n),
                                    s = o.add([n, n]),
                                    a = this._map.unproject(o),
                                    r = this._map.unproject(s);
                                if (e.continuousWorld || e.noWrap || (a = a.wrap(), r = r.wrap()), !e.bounds.intersects([a, r])) return !1
                            }
                            return !0
                        },
                        _removeOtherTiles: function(t) {
                            var e, i, n, o;
                            for (o in this._tiles) e = o.split(":"), i = parseInt(e[0], 10), n = parseInt(e[1], 10), (i < t.min.x || i > t.max.x || n < t.min.y || n > t.max.y) && this._removeTile(o)
                        },
                        _removeTile: function(t) {
                            var e = this._tiles[t];
                            this.fire("tileunload", {
                                tile: e,
                                url: e.src
                            }), this.options.reuseTiles ? (c.DomUtil.removeClass(e, "leaflet-tile-loaded"), this._unusedTiles.push(e)) : e.parentNode === this._tileContainer && this._tileContainer.removeChild(e), c.Browser.android || (e.onload = null, e.src = c.Util.emptyImageUrl), delete this._tiles[t]
                        },
                        _addTile: function(t, e) {
                            var i = this._getTilePos(t),
                                n = this._getTile();
                            c.DomUtil.setPosition(n, i, c.Browser.chrome), this._tiles[t.x + ":" + t.y] = n, this._loadTile(n, t), n.parentNode !== this._tileContainer && e.appendChild(n)
                        },
                        _getZoomForUrl: function() {
                            var t = this.options,
                                e = this._map.getZoom();
                            return t.zoomReverse && (e = t.maxZoom - e), e += t.zoomOffset, t.maxNativeZoom ? Math.min(e, t.maxNativeZoom) : e
                        },
                        _getTilePos: function(t) {
                            var e = this._map.getPixelOrigin(),
                                i = this._getTileSize();
                            return t.multiplyBy(i).subtract(e)
                        },
                        getTileUrl: function(t) {
                            return c.Util.template(this._url, c.extend({
                                s: this._getSubdomain(t),
                                z: t.z,
                                x: t.x,
                                y: t.y
                            }, this.options))
                        },
                        _getWrapTileNum: function() {
                            return this._map.options.crs.getSize(this._map.getZoom()).divideBy(this._getTileSize())._floor()
                        },
                        _adjustTilePoint: function(t) {
                            var e = this._getWrapTileNum();
                            this.options.continuousWorld || this.options.noWrap || (t.x = (t.x % e.x + e.x) % e.x), this.options.tms && (t.y = e.y - t.y - 1), t.z = this._getZoomForUrl()
                        },
                        _getSubdomain: function(t) {
                            var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
                            return this.options.subdomains[e]
                        },
                        _getTile: function() {
                            if (this.options.reuseTiles && this._unusedTiles.length > 0) {
                                var t = this._unusedTiles.pop();
                                return this._resetTile(t), t
                            }
                            return this._createTile()
                        },
                        _resetTile: function() {},
                        _createTile: function() {
                            var t = c.DomUtil.create("img", "leaflet-tile");
                            return t.style.width = t.style.height = this._getTileSize() + "px", t.galleryimg = "no", t.onselectstart = t.onmousemove = c.Util.falseFn, c.Browser.ielt9 && void 0 !== this.options.opacity && c.DomUtil.setOpacity(t, this.options.opacity), c.Browser.mobileWebkit3d && (t.style.WebkitBackfaceVisibility = "hidden"), t
                        },
                        _loadTile: function(t, e) {
                            t._layer = this, t.onload = this._tileOnLoad, t.onerror = this._tileOnError, this._adjustTilePoint(e), t.src = this.getTileUrl(e), this.fire("tileloadstart", {
                                tile: t,
                                url: t.src
                            })
                        },
                        _tileLoaded: function() {
                            this._tilesToLoad--, this._animated && c.DomUtil.addClass(this._tileContainer, "leaflet-zoom-animated"), this._tilesToLoad || (this.fire("load"), this._animated && (clearTimeout(this._clearBgBufferTimer), this._clearBgBufferTimer = setTimeout(c.bind(this._clearBgBuffer, this), 500)))
                        },
                        _tileOnLoad: function() {
                            var t = this._layer;
                            this.src !== c.Util.emptyImageUrl && (c.DomUtil.addClass(this, "leaflet-tile-loaded"), t.fire("tileload", {
                                tile: this,
                                url: this.src
                            })), t._tileLoaded()
                        },
                        _tileOnError: function() {
                            var t = this._layer;
                            t.fire("tileerror", {
                                tile: this,
                                url: this.src
                            });
                            var e = t.options.errorTileUrl;
                            e && (this.src = e), t._tileLoaded()
                        }
                    }), c.tileLayer = function(t, e) {
                        return new c.TileLayer(t, e)
                    }, c.TileLayer.WMS = c.TileLayer.extend({
                        defaultWmsParams: {
                            service: "WMS",
                            request: "GetMap",
                            version: "1.1.1",
                            layers: "",
                            styles: "",
                            format: "image/jpeg",
                            transparent: !1
                        },
                        initialize: function(t, e) {
                            this._url = t;
                            var i = c.extend({}, this.defaultWmsParams),
                                n = e.tileSize || this.options.tileSize;
                            for (var o in i.width = i.height = e.detectRetina && c.Browser.retina ? 2 * n : n, e) this.options.hasOwnProperty(o) || "crs" === o || (i[o] = e[o]);
                            this.wmsParams = i, c.setOptions(this, e)
                        },
                        onAdd: function(t) {
                            this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version), this.wmsParams[this._wmsVersion >= 1.3 ? "crs" : "srs"] = this._crs.code, c.TileLayer.prototype.onAdd.call(this, t)
                        },
                        getTileUrl: function(t) {
                            var e = this._map,
                                i = this.options.tileSize,
                                n = t.multiplyBy(i),
                                o = n.add([i, i]),
                                s = this._crs.project(e.unproject(n, t.z)),
                                a = this._crs.project(e.unproject(o, t.z)),
                                r = this._wmsVersion >= 1.3 && this._crs === c.CRS.EPSG4326 ? [a.y, s.x, s.y, a.x].join(",") : [s.x, a.y, a.x, s.y].join(","),
                                h = c.Util.template(this._url, {
                                    s: this._getSubdomain(t)
                                });
                            return h + c.Util.getParamString(this.wmsParams, h, !0) + "&BBOX=" + r
                        },
                        setParams: function(t, e) {
                            return c.extend(this.wmsParams, t), e || this.redraw(), this
                        }
                    }), c.tileLayer.wms = function(t, e) {
                        return new c.TileLayer.WMS(t, e)
                    }, c.TileLayer.Canvas = c.TileLayer.extend({
                        options: {
                            async: !1
                        },
                        initialize: function(t) {
                            c.setOptions(this, t)
                        },
                        redraw: function() {
                            for (var t in this._map && (this._reset({
                                    hard: !0
                                }), this._update()), this._tiles) this._redrawTile(this._tiles[t]);
                            return this
                        },
                        _redrawTile: function(t) {
                            this.drawTile(t, t._tilePoint, this._map._zoom)
                        },
                        _createTile: function() {
                            var t = c.DomUtil.create("canvas", "leaflet-tile");
                            return t.width = t.height = this.options.tileSize, t.onselectstart = t.onmousemove = c.Util.falseFn, t
                        },
                        _loadTile: function(t, e) {
                            t._layer = this, t._tilePoint = e, this._redrawTile(t), this.options.async || this.tileDrawn(t)
                        },
                        drawTile: function() {},
                        tileDrawn: function(t) {
                            this._tileOnLoad.call(t)
                        }
                    }), c.tileLayer.canvas = function(t) {
                        return new c.TileLayer.Canvas(t)
                    }, c.ImageOverlay = c.Class.extend({
                        includes: c.Mixin.Events,
                        options: {
                            opacity: 1
                        },
                        initialize: function(t, e, i) {
                            this._url = t, this._bounds = c.latLngBounds(e), c.setOptions(this, i)
                        },
                        onAdd: function(t) {
                            this._map = t, this._image || this._initImage(), t._panes.overlayPane.appendChild(this._image), t.on("viewreset", this._reset, this), t.options.zoomAnimation && c.Browser.any3d && t.on("zoomanim", this._animateZoom, this), this._reset()
                        },
                        onRemove: function(t) {
                            t.getPanes().overlayPane.removeChild(this._image), t.off("viewreset", this._reset, this), t.options.zoomAnimation && t.off("zoomanim", this._animateZoom, this)
                        },
                        addTo: function(t) {
                            return t.addLayer(this), this
                        },
                        setOpacity: function(t) {
                            return this.options.opacity = t, this._updateOpacity(), this
                        },
                        bringToFront: function() {
                            return this._image && this._map._panes.overlayPane.appendChild(this._image), this
                        },
                        bringToBack: function() {
                            var t = this._map._panes.overlayPane;
                            return this._image && t.insertBefore(this._image, t.firstChild), this
                        },
                        setUrl: function(t) {
                            this._url = t, this._image.src = this._url
                        },
                        getAttribution: function() {
                            return this.options.attribution
                        },
                        _initImage: function() {
                            this._image = c.DomUtil.create("img", "leaflet-image-layer"), c.DomUtil.addClass(this._image, this._map.options.zoomAnimation && c.Browser.any3d ? "leaflet-zoom-animated" : "leaflet-zoom-hide"), this._updateOpacity(), c.extend(this._image, {
                                galleryimg: "no",
                                onselectstart: c.Util.falseFn,
                                onmousemove: c.Util.falseFn,
                                onload: c.bind(this._onImageLoad, this),
                                src: this._url
                            })
                        },
                        _animateZoom: function(t) {
                            var e = this._map,
                                i = this._image,
                                n = e.getZoomScale(t.zoom),
                                o = this._bounds.getNorthWest(),
                                s = this._bounds.getSouthEast(),
                                a = e._latLngToNewLayerPoint(o, t.zoom, t.center),
                                r = e._latLngToNewLayerPoint(s, t.zoom, t.center)._subtract(a),
                                h = a._add(r._multiplyBy(.5 * (1 - 1 / n)));
                            i.style[c.DomUtil.TRANSFORM] = c.DomUtil.getTranslateString(h) + " scale(" + n + ") "
                        },
                        _reset: function() {
                            var t = this._image,
                                e = this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
                                i = this._map.latLngToLayerPoint(this._bounds.getSouthEast())._subtract(e);
                            c.DomUtil.setPosition(t, e), t.style.width = i.x + "px", t.style.height = i.y + "px"
                        },
                        _onImageLoad: function() {
                            this.fire("load")
                        },
                        _updateOpacity: function() {
                            c.DomUtil.setOpacity(this._image, this.options.opacity)
                        }
                    }), c.imageOverlay = function(t, e, i) {
                        return new c.ImageOverlay(t, e, i)
                    }, c.Icon = c.Class.extend({
                        options: {
                            className: ""
                        },
                        initialize: function(t) {
                            c.setOptions(this, t)
                        },
                        createIcon: function(t) {
                            return this._createIcon("icon", t)
                        },
                        createShadow: function(t) {
                            return this._createIcon("shadow", t)
                        },
                        _createIcon: function(t, e) {
                            var i, n = this._getIconUrl(t);
                            if (!n) {
                                if ("icon" === t) throw new Error("iconUrl not set in Icon options (see the docs).");
                                return null
                            }
                            return i = e && "IMG" === e.tagName ? this._createImg(n, e) : this._createImg(n), this._setIconStyles(i, t), i
                        },
                        _setIconStyles: function(t, e) {
                            var i, n = this.options,
                                o = c.point(n[e + "Size"]);
                            !(i = c.point("shadow" === e && n.shadowAnchor || n.iconAnchor)) && o && (i = o.divideBy(2, !0)), t.className = "leaflet-marker-" + e + " " + n.className, i && (t.style.marginLeft = -i.x + "px", t.style.marginTop = -i.y + "px"), o && (t.style.width = o.x + "px", t.style.height = o.y + "px")
                        },
                        _createImg: function(t, e) {
                            return (e = e || a.createElement("img")).src = t, e
                        },
                        _getIconUrl: function(t) {
                            return c.Browser.retina && this.options[t + "RetinaUrl"] ? this.options[t + "RetinaUrl"] : this.options[t + "Url"]
                        }
                    }), c.icon = function(t) {
                        return new c.Icon(t)
                    }, c.Icon.Default = c.Icon.extend({
                        options: {
                            iconSize: [25, 41],
                            iconAnchor: [12, 41],
                            popupAnchor: [1, -34],
                            shadowSize: [41, 41]
                        },
                        _getIconUrl: function(t) {
                            var e = t + "Url";
                            if (this.options[e]) return this.options[e];
                            c.Browser.retina && "icon" === t && (t += "-2x");
                            var i = c.Icon.Default.imagePath;
                            if (!i) throw new Error("Couldn't autodetect L.Icon.Default.imagePath, set it manually.");
                            return i + "/marker-" + t + ".png"
                        }
                    }), c.Icon.Default.imagePath = function() {
                        var t, e, i, n, o = a.getElementsByTagName("script"),
                            s = /[\/^]leaflet[\-\._]?([\w\-\._]*)\.js\??/;
                        for (t = 0, e = o.length; t < e; t++)
                            if ((i = o[t].src).match(s)) return ((n = i.split(s)[0]) ? n + "/" : "") + "images"
                    }(), c.Marker = c.Class.extend({
                        includes: c.Mixin.Events,
                        options: {
                            icon: new c.Icon.Default,
                            title: "",
                            alt: "",
                            clickable: !0,
                            draggable: !1,
                            keyboard: !0,
                            zIndexOffset: 0,
                            opacity: 1,
                            riseOnHover: !1,
                            riseOffset: 250
                        },
                        initialize: function(t, e) {
                            c.setOptions(this, e), this._latlng = c.latLng(t)
                        },
                        onAdd: function(t) {
                            this._map = t, t.on("viewreset", this.update, this), this._initIcon(), this.update(), this.fire("add"), t.options.zoomAnimation && t.options.markerZoomAnimation && t.on("zoomanim", this._animateZoom, this)
                        },
                        addTo: function(t) {
                            return t.addLayer(this), this
                        },
                        onRemove: function(t) {
                            this.dragging && this.dragging.disable(), this._removeIcon(), this._removeShadow(), this.fire("remove"), t.off({
                                viewreset: this.update,
                                zoomanim: this._animateZoom
                            }, this), this._map = null
                        },
                        getLatLng: function() {
                            return this._latlng
                        },
                        setLatLng: function(t) {
                            return this._latlng = c.latLng(t), this.update(), this.fire("move", {
                                latlng: this._latlng
                            })
                        },
                        setZIndexOffset: function(t) {
                            return this.options.zIndexOffset = t, this.update(), this
                        },
                        setIcon: function(t) {
                            return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup), this
                        },
                        update: function() {
                            return this._icon && this._setPos(this._map.latLngToLayerPoint(this._latlng).round()), this
                        },
                        _initIcon: function() {
                            var t = this.options,
                                e = this._map,
                                i = e.options.zoomAnimation && e.options.markerZoomAnimation ? "leaflet-zoom-animated" : "leaflet-zoom-hide",
                                n = t.icon.createIcon(this._icon),
                                o = !1;
                            n !== this._icon && (this._icon && this._removeIcon(), o = !0, t.title && (n.title = t.title), t.alt && (n.alt = t.alt)), c.DomUtil.addClass(n, i), t.keyboard && (n.tabIndex = "0"), this._icon = n, this._initInteraction(), t.riseOnHover && c.DomEvent.on(n, "mouseover", this._bringToFront, this).on(n, "mouseout", this._resetZIndex, this);
                            var s = t.icon.createShadow(this._shadow),
                                a = !1;
                            s !== this._shadow && (this._removeShadow(), a = !0), s && c.DomUtil.addClass(s, i), this._shadow = s, t.opacity < 1 && this._updateOpacity();
                            var r = this._map._panes;
                            o && r.markerPane.appendChild(this._icon), s && a && r.shadowPane.appendChild(this._shadow)
                        },
                        _removeIcon: function() {
                            this.options.riseOnHover && c.DomEvent.off(this._icon, "mouseover", this._bringToFront).off(this._icon, "mouseout", this._resetZIndex), this._map._panes.markerPane.removeChild(this._icon), this._icon = null
                        },
                        _removeShadow: function() {
                            this._shadow && this._map._panes.shadowPane.removeChild(this._shadow), this._shadow = null
                        },
                        _setPos: function(t) {
                            c.DomUtil.setPosition(this._icon, t), this._shadow && c.DomUtil.setPosition(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex()
                        },
                        _updateZIndex: function(t) {
                            this._icon.style.zIndex = this._zIndex + t
                        },
                        _animateZoom: function(t) {
                            var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
                            this._setPos(e)
                        },
                        _initInteraction: function() {
                            if (this.options.clickable) {
                                var t = this._icon,
                                    e = ["dblclick", "mousedown", "mouseover", "mouseout", "contextmenu"];
                                c.DomUtil.addClass(t, "leaflet-clickable"), c.DomEvent.on(t, "click", this._onMouseClick, this), c.DomEvent.on(t, "keypress", this._onKeyPress, this);
                                for (var i = 0; i < e.length; i++) c.DomEvent.on(t, e[i], this._fireMouseEvent, this);
                                c.Handler.MarkerDrag && (this.dragging = new c.Handler.MarkerDrag(this), this.options.draggable && this.dragging.enable())
                            }
                        },
                        _onMouseClick: function(t) {
                            var e = this.dragging && this.dragging.moved();
                            (this.hasEventListeners(t.type) || e) && c.DomEvent.stopPropagation(t), e || (this.dragging && this.dragging._enabled || !this._map.dragging || !this._map.dragging.moved()) && this.fire(t.type, {
                                originalEvent: t,
                                latlng: this._latlng
                            })
                        },
                        _onKeyPress: function(t) {
                            13 === t.keyCode && this.fire("click", {
                                originalEvent: t,
                                latlng: this._latlng
                            })
                        },
                        _fireMouseEvent: function(t) {
                            this.fire(t.type, {
                                originalEvent: t,
                                latlng: this._latlng
                            }), "contextmenu" === t.type && this.hasEventListeners(t.type) && c.DomEvent.preventDefault(t), "mousedown" !== t.type ? c.DomEvent.stopPropagation(t) : c.DomEvent.preventDefault(t)
                        },
                        setOpacity: function(t) {
                            return this.options.opacity = t, this._map && this._updateOpacity(), this
                        },
                        _updateOpacity: function() {
                            c.DomUtil.setOpacity(this._icon, this.options.opacity), this._shadow && c.DomUtil.setOpacity(this._shadow, this.options.opacity)
                        },
                        _bringToFront: function() {
                            this._updateZIndex(this.options.riseOffset)
                        },
                        _resetZIndex: function() {
                            this._updateZIndex(0)
                        }
                    }), c.marker = function(t, e) {
                        return new c.Marker(t, e)
                    }, c.DivIcon = c.Icon.extend({
                        options: {
                            iconSize: [12, 12],
                            className: "leaflet-div-icon",
                            html: !1
                        },
                        createIcon: function(t) {
                            var e = t && "DIV" === t.tagName ? t : a.createElement("div"),
                                i = this.options;
                            return e.innerHTML = !1 !== i.html ? i.html : "", i.bgPos && (e.style.backgroundPosition = -i.bgPos.x + "px " + -i.bgPos.y + "px"), this._setIconStyles(e, "icon"), e
                        },
                        createShadow: function() {
                            return null
                        }
                    }), c.divIcon = function(t) {
                        return new c.DivIcon(t)
                    }, c.Map.mergeOptions({
                        closePopupOnClick: !0
                    }), c.Popup = c.Class.extend({
                        includes: c.Mixin.Events,
                        options: {
                            minWidth: 50,
                            maxWidth: 300,
                            autoPan: !0,
                            closeButton: !0,
                            offset: [0, 7],
                            autoPanPadding: [5, 5],
                            keepInView: !1,
                            className: "",
                            zoomAnimation: !0
                        },
                        initialize: function(t, e) {
                            c.setOptions(this, t), this._source = e, this._animated = c.Browser.any3d && this.options.zoomAnimation, this._isOpen = !1
                        },
                        onAdd: function(t) {
                            this._map = t, this._container || this._initLayout();
                            var e = t.options.fadeAnimation;
                            e && c.DomUtil.setOpacity(this._container, 0), t._panes.popupPane.appendChild(this._container), t.on(this._getEvents(), this), this.update(), e && c.DomUtil.setOpacity(this._container, 1), this.fire("open"), t.fire("popupopen", {
                                popup: this
                            }), this._source && this._source.fire("popupopen", {
                                popup: this
                            })
                        },
                        addTo: function(t) {
                            return t.addLayer(this), this
                        },
                        openOn: function(t) {
                            return t.openPopup(this), this
                        },
                        onRemove: function(t) {
                            t._panes.popupPane.removeChild(this._container), c.Util.falseFn(this._container.offsetWidth), t.off(this._getEvents(), this), t.options.fadeAnimation && c.DomUtil.setOpacity(this._container, 0), this._map = null, this.fire("close"), t.fire("popupclose", {
                                popup: this
                            }), this._source && this._source.fire("popupclose", {
                                popup: this
                            })
                        },
                        getLatLng: function() {
                            return this._latlng
                        },
                        setLatLng: function(t) {
                            return this._latlng = c.latLng(t), this._map && (this._updatePosition(), this._adjustPan()), this
                        },
                        getContent: function() {
                            return this._content
                        },
                        setContent: function(t) {
                            return this._content = t, this.update(), this
                        },
                        update: function() {
                            this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan())
                        },
                        _getEvents: function() {
                            var t = {
                                viewreset: this._updatePosition
                            };
                            return this._animated && (t.zoomanim = this._zoomAnimation), ("closeOnClick" in this.options ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this._close), this.options.keepInView && (t.moveend = this._adjustPan), t
                        },
                        _close: function() {
                            this._map && this._map.closePopup(this)
                        },
                        _initLayout: function() {
                            var t, e = "leaflet-popup",
                                i = this._container = c.DomUtil.create("div", e + " " + this.options.className + " leaflet-zoom-" + (this._animated ? "animated" : "hide"));
                            this.options.closeButton && ((t = this._closeButton = c.DomUtil.create("a", e + "-close-button", i)).href = "#close", t.innerHTML = "&#215;", c.DomEvent.disableClickPropagation(t), c.DomEvent.on(t, "click", this._onCloseButtonClick, this));
                            var n = this._wrapper = c.DomUtil.create("div", e + "-content-wrapper", i);
                            c.DomEvent.disableClickPropagation(n), this._contentNode = c.DomUtil.create("div", e + "-content", n), c.DomEvent.disableScrollPropagation(this._contentNode), c.DomEvent.on(n, "contextmenu", c.DomEvent.stopPropagation), this._tipContainer = c.DomUtil.create("div", e + "-tip-container", i), this._tip = c.DomUtil.create("div", e + "-tip", this._tipContainer)
                        },
                        _updateContent: function() {
                            if (this._content) {
                                if ("string" == typeof this._content) this._contentNode.innerHTML = this._content;
                                else {
                                    for (; this._contentNode.hasChildNodes();) this._contentNode.removeChild(this._contentNode.firstChild);
                                    this._contentNode.appendChild(this._content)
                                }
                                this.fire("contentupdate")
                            }
                        },
                        _updateLayout: function() {
                            var t = this._contentNode,
                                e = t.style;
                            e.width = "", e.whiteSpace = "nowrap";
                            var i = t.offsetWidth;
                            i = Math.min(i, this.options.maxWidth), i = Math.max(i, this.options.minWidth), e.width = i + 1 + "px", e.whiteSpace = "", e.height = "";
                            var n = this.options.maxHeight;
                            n && t.offsetHeight > n ? (e.height = n + "px", c.DomUtil.addClass(t, "leaflet-popup-scrolled")) : c.DomUtil.removeClass(t, "leaflet-popup-scrolled"), this._containerWidth = this._container.offsetWidth
                        },
                        _updatePosition: function() {
                            if (this._map) {
                                var t = this._map.latLngToLayerPoint(this._latlng),
                                    e = this._animated,
                                    i = c.point(this.options.offset);
                                e && c.DomUtil.setPosition(this._container, t), this._containerBottom = -i.y - (e ? 0 : t.y), this._containerLeft = -Math.round(this._containerWidth / 2) + i.x + (e ? 0 : t.x), this._container.style.bottom = this._containerBottom + "px", this._container.style.left = this._containerLeft + "px"
                            }
                        },
                        _zoomAnimation: function(t) {
                            var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
                            c.DomUtil.setPosition(this._container, e)
                        },
                        _adjustPan: function() {
                            if (this.options.autoPan) {
                                var t = this._map,
                                    e = this._container.offsetHeight,
                                    i = this._containerWidth,
                                    n = new c.Point(this._containerLeft, -e - this._containerBottom);
                                this._animated && n._add(c.DomUtil.getPosition(this._container));
                                var o = t.layerPointToContainerPoint(n),
                                    s = c.point(this.options.autoPanPadding),
                                    a = c.point(this.options.autoPanPaddingTopLeft || s),
                                    r = c.point(this.options.autoPanPaddingBottomRight || s),
                                    h = t.getSize(),
                                    l = 0,
                                    u = 0;
                                o.x + i + r.x > h.x && (l = o.x + i - h.x + r.x), o.x - l - a.x < 0 && (l = o.x - a.x), o.y + e + r.y > h.y && (u = o.y + e - h.y + r.y), o.y - u - a.y < 0 && (u = o.y - a.y), (l || u) && t.fire("autopanstart").panBy([l, u])
                            }
                        },
                        _onCloseButtonClick: function(t) {
                            this._close(), c.DomEvent.stop(t)
                        }
                    }), c.popup = function(t, e) {
                        return new c.Popup(t, e)
                    }, c.Map.include({
                        openPopup: function(t, e, i) {
                            if (this.closePopup(), !(t instanceof c.Popup)) {
                                var n = t;
                                t = new c.Popup(i).setLatLng(e).setContent(n)
                            }
                            return t._isOpen = !0, this._popup = t, this.addLayer(t)
                        },
                        closePopup: function(t) {
                            return t && t !== this._popup || (t = this._popup, this._popup = null), t && (this.removeLayer(t), t._isOpen = !1), this
                        }
                    }), c.Marker.include({
                        openPopup: function() {
                            return this._popup && this._map && !this._map.hasLayer(this._popup) && (this._popup.setLatLng(this._latlng), this._map.openPopup(this._popup)), this
                        },
                        closePopup: function() {
                            return this._popup && this._popup._close(), this
                        },
                        togglePopup: function() {
                            return this._popup && (this._popup._isOpen ? this.closePopup() : this.openPopup()), this
                        },
                        bindPopup: function(t, e) {
                            var i = c.point(this.options.icon.options.popupAnchor || [0, 0]);
                            return i = i.add(c.Popup.prototype.options.offset), e && e.offset && (i = i.add(e.offset)), e = c.extend({
                                offset: i
                            }, e), this._popupHandlersAdded || (this.on("click", this.togglePopup, this).on("remove", this.closePopup, this).on("move", this._movePopup, this), this._popupHandlersAdded = !0), t instanceof c.Popup ? (c.setOptions(t, e), this._popup = t, t._source = this) : this._popup = new c.Popup(e, this).setContent(t), this
                        },
                        setPopupContent: function(t) {
                            return this._popup && this._popup.setContent(t), this
                        },
                        unbindPopup: function() {
                            return this._popup && (this._popup = null, this.off("click", this.togglePopup, this).off("remove", this.closePopup, this).off("move", this._movePopup, this), this._popupHandlersAdded = !1), this
                        },
                        getPopup: function() {
                            return this._popup
                        },
                        _movePopup: function(t) {
                            this._popup.setLatLng(t.latlng)
                        }
                    }), c.LayerGroup = c.Class.extend({
                        initialize: function(t) {
                            var e, i;
                            if (this._layers = {}, t)
                                for (e = 0, i = t.length; e < i; e++) this.addLayer(t[e])
                        },
                        addLayer: function(t) {
                            var e = this.getLayerId(t);
                            return this._layers[e] = t, this._map && this._map.addLayer(t), this
                        },
                        removeLayer: function(t) {
                            var e = t in this._layers ? t : this.getLayerId(t);
                            return this._map && this._layers[e] && this._map.removeLayer(this._layers[e]), delete this._layers[e], this
                        },
                        hasLayer: function(t) {
                            return !!t && (t in this._layers || this.getLayerId(t) in this._layers)
                        },
                        clearLayers: function() {
                            return this.eachLayer(this.removeLayer, this), this
                        },
                        invoke: function(t) {
                            var e, i, n = Array.prototype.slice.call(arguments, 1);
                            for (e in this._layers)(i = this._layers[e])[t] && i[t].apply(i, n);
                            return this
                        },
                        onAdd: function(t) {
                            this._map = t, this.eachLayer(t.addLayer, t)
                        },
                        onRemove: function(t) {
                            this.eachLayer(t.removeLayer, t), this._map = null
                        },
                        addTo: function(t) {
                            return t.addLayer(this), this
                        },
                        eachLayer: function(t, e) {
                            for (var i in this._layers) t.call(e, this._layers[i]);
                            return this
                        },
                        getLayer: function(t) {
                            return this._layers[t]
                        },
                        getLayers: function() {
                            var t = [];
                            for (var e in this._layers) t.push(this._layers[e]);
                            return t
                        },
                        setZIndex: function(t) {
                            return this.invoke("setZIndex", t)
                        },
                        getLayerId: function(t) {
                            return c.stamp(t)
                        }
                    }), c.layerGroup = function(t) {
                        return new c.LayerGroup(t)
                    }, c.FeatureGroup = c.LayerGroup.extend({
                        includes: c.Mixin.Events,
                        statics: {
                            EVENTS: "click dblclick mouseover mouseout mousemove contextmenu popupopen popupclose"
                        },
                        addLayer: function(t) {
                            return this.hasLayer(t) ? this : ("on" in t && t.on(c.FeatureGroup.EVENTS, this._propagateEvent, this), c.LayerGroup.prototype.addLayer.call(this, t), this._popupContent && t.bindPopup && t.bindPopup(this._popupContent, this._popupOptions), this.fire("layeradd", {
                                layer: t
                            }))
                        },
                        removeLayer: function(t) {
                            return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), "off" in t && t.off(c.FeatureGroup.EVENTS, this._propagateEvent, this), c.LayerGroup.prototype.removeLayer.call(this, t), this._popupContent && this.invoke("unbindPopup"), this.fire("layerremove", {
                                layer: t
                            })) : this
                        },
                        bindPopup: function(t, e) {
                            return this._popupContent = t, this._popupOptions = e, this.invoke("bindPopup", t, e)
                        },
                        openPopup: function(t) {
                            for (var e in this._layers) {
                                this._layers[e].openPopup(t);
                                break
                            }
                            return this
                        },
                        setStyle: function(t) {
                            return this.invoke("setStyle", t)
                        },
                        bringToFront: function() {
                            return this.invoke("bringToFront")
                        },
                        bringToBack: function() {
                            return this.invoke("bringToBack")
                        },
                        getBounds: function() {
                            var t = new c.LatLngBounds;
                            return this.eachLayer(function(e) {
                                t.extend(e instanceof c.Marker ? e.getLatLng() : e.getBounds())
                            }), t
                        },
                        _propagateEvent: function(t) {
                            t = c.extend({
                                layer: t.target,
                                target: this
                            }, t), this.fire(t.type, t)
                        }
                    }), c.featureGroup = function(t) {
                        return new c.FeatureGroup(t)
                    }, c.Path = c.Class.extend({
                        includes: [c.Mixin.Events],
                        statics: {
                            CLIP_PADDING: (D = ((c.Browser.mobile ? 1280 : 2e3) / Math.max(s.outerWidth, s.outerHeight) - 1) / 2, Math.max(0, Math.min(.5, D)))
                        },
                        options: {
                            stroke: !0,
                            color: "#0033ff",
                            dashArray: null,
                            lineCap: null,
                            lineJoin: null,
                            weight: 5,
                            opacity: .5,
                            fill: !1,
                            fillColor: null,
                            fillOpacity: .2,
                            clickable: !0
                        },
                        initialize: function(t) {
                            c.setOptions(this, t)
                        },
                        onAdd: function(t) {
                            this._map = t, this._container || (this._initElements(), this._initEvents()), this.projectLatlngs(), this._updatePath(), this._container && this._map._pathRoot.appendChild(this._container), this.fire("add"), t.on({
                                viewreset: this.projectLatlngs,
                                moveend: this._updatePath
                            }, this)
                        },
                        addTo: function(t) {
                            return t.addLayer(this), this
                        },
                        onRemove: function(t) {
                            t._pathRoot.removeChild(this._container), this.fire("remove"), this._map = null, c.Browser.vml && (this._container = null, this._stroke = null, this._fill = null), t.off({
                                viewreset: this.projectLatlngs,
                                moveend: this._updatePath
                            }, this)
                        },
                        projectLatlngs: function() {},
                        setStyle: function(t) {
                            return c.setOptions(this, t), this._container && this._updateStyle(), this
                        },
                        redraw: function() {
                            return this._map && (this.projectLatlngs(), this._updatePath()), this
                        }
                    }), c.Map.include({
                        _updatePathViewport: function() {
                            var t = c.Path.CLIP_PADDING,
                                e = this.getSize(),
                                i = c.DomUtil.getPosition(this._mapPane).multiplyBy(-1)._subtract(e.multiplyBy(t)._round()),
                                n = i.add(e.multiplyBy(1 + 2 * t)._round());
                            this._pathViewport = new c.Bounds(i, n)
                        }
                    }), c.Path.SVG_NS = "http://www.w3.org/2000/svg", c.Browser.svg = !(!a.createElementNS || !a.createElementNS(c.Path.SVG_NS, "svg").createSVGRect), c.Path = c.Path.extend({
                        statics: {
                            SVG: c.Browser.svg
                        },
                        bringToFront: function() {
                            var t = this._map._pathRoot,
                                e = this._container;
                            return e && t.lastChild !== e && t.appendChild(e), this
                        },
                        bringToBack: function() {
                            var t = this._map._pathRoot,
                                e = this._container,
                                i = t.firstChild;
                            return e && i !== e && t.insertBefore(e, i), this
                        },
                        getPathString: function() {},
                        _createElement: function(t) {
                            return a.createElementNS(c.Path.SVG_NS, t)
                        },
                        _initElements: function() {
                            this._map._initPathRoot(), this._initPath(), this._initStyle()
                        },
                        _initPath: function() {
                            this._container = this._createElement("g"), this._path = this._createElement("path"), this.options.className && c.DomUtil.addClass(this._path, this.options.className), this._container.appendChild(this._path)
                        },
                        _initStyle: function() {
                            this.options.stroke && (this._path.setAttribute("stroke-linejoin", "round"), this._path.setAttribute("stroke-linecap", "round")), this.options.fill && this._path.setAttribute("fill-rule", "evenodd"), this.options.pointerEvents && this._path.setAttribute("pointer-events", this.options.pointerEvents), this.options.clickable || this.options.pointerEvents || this._path.setAttribute("pointer-events", "none"), this._updateStyle()
                        },
                        _updateStyle: function() {
                            this.options.stroke ? (this._path.setAttribute("stroke", this.options.color), this._path.setAttribute("stroke-opacity", this.options.opacity), this._path.setAttribute("stroke-width", this.options.weight), this.options.dashArray ? this._path.setAttribute("stroke-dasharray", this.options.dashArray) : this._path.removeAttribute("stroke-dasharray"), this.options.lineCap && this._path.setAttribute("stroke-linecap", this.options.lineCap), this.options.lineJoin && this._path.setAttribute("stroke-linejoin", this.options.lineJoin)) : this._path.setAttribute("stroke", "none"), this.options.fill ? (this._path.setAttribute("fill", this.options.fillColor || this.options.color), this._path.setAttribute("fill-opacity", this.options.fillOpacity)) : this._path.setAttribute("fill", "none")
                        },
                        _updatePath: function() {
                            var t = this.getPathString();
                            t || (t = "M0 0"), this._path.setAttribute("d", t)
                        },
                        _initEvents: function() {
                            if (this.options.clickable) {
                                !c.Browser.svg && c.Browser.vml || c.DomUtil.addClass(this._path, "leaflet-clickable"), c.DomEvent.on(this._container, "click", this._onMouseClick, this);
                                for (var t = ["dblclick", "mousedown", "mouseover", "mouseout", "mousemove", "contextmenu"], e = 0; e < t.length; e++) c.DomEvent.on(this._container, t[e], this._fireMouseEvent, this)
                            }
                        },
                        _onMouseClick: function(t) {
                            this._map.dragging && this._map.dragging.moved() || this._fireMouseEvent(t)
                        },
                        _fireMouseEvent: function(t) {
                            if (this._map && this.hasEventListeners(t.type)) {
                                var e = this._map,
                                    i = e.mouseEventToContainerPoint(t),
                                    n = e.containerPointToLayerPoint(i),
                                    o = e.layerPointToLatLng(n);
                                this.fire(t.type, {
                                    latlng: o,
                                    layerPoint: n,
                                    containerPoint: i,
                                    originalEvent: t
                                }), "contextmenu" === t.type && c.DomEvent.preventDefault(t), "mousemove" !== t.type && c.DomEvent.stopPropagation(t)
                            }
                        }
                    }), c.Map.include({
                        _initPathRoot: function() {
                            this._pathRoot || (this._pathRoot = c.Path.prototype._createElement("svg"), this._panes.overlayPane.appendChild(this._pathRoot), this.options.zoomAnimation && c.Browser.any3d ? (c.DomUtil.addClass(this._pathRoot, "leaflet-zoom-animated"), this.on({
                                zoomanim: this._animatePathZoom,
                                zoomend: this._endPathZoom
                            })) : c.DomUtil.addClass(this._pathRoot, "leaflet-zoom-hide"), this.on("moveend", this._updateSvgViewport), this._updateSvgViewport())
                        },
                        _animatePathZoom: function(t) {
                            var e = this.getZoomScale(t.zoom),
                                i = this._getCenterOffset(t.center)._multiplyBy(-e)._add(this._pathViewport.min);
                            this._pathRoot.style[c.DomUtil.TRANSFORM] = c.DomUtil.getTranslateString(i) + " scale(" + e + ") ", this._pathZooming = !0
                        },
                        _endPathZoom: function() {
                            this._pathZooming = !1
                        },
                        _updateSvgViewport: function() {
                            if (!this._pathZooming) {
                                this._updatePathViewport();
                                var t = this._pathViewport,
                                    e = t.min,
                                    i = t.max,
                                    n = i.x - e.x,
                                    o = i.y - e.y,
                                    s = this._pathRoot,
                                    a = this._panes.overlayPane;
                                c.Browser.mobileWebkit && a.removeChild(s), c.DomUtil.setPosition(s, e), s.setAttribute("width", n), s.setAttribute("height", o), s.setAttribute("viewBox", [e.x, e.y, n, o].join(" ")), c.Browser.mobileWebkit && a.appendChild(s)
                            }
                        }
                    }), c.Path.include({
                        bindPopup: function(t, e) {
                            return t instanceof c.Popup ? this._popup = t : (this._popup && !e || (this._popup = new c.Popup(e, this)), this._popup.setContent(t)), this._popupHandlersAdded || (this.on("click", this._openPopup, this).on("remove", this.closePopup, this), this._popupHandlersAdded = !0), this
                        },
                        unbindPopup: function() {
                            return this._popup && (this._popup = null, this.off("click", this._openPopup).off("remove", this.closePopup), this._popupHandlersAdded = !1), this
                        },
                        openPopup: function(t) {
                            return this._popup && (t = t || this._latlng || this._latlngs[Math.floor(this._latlngs.length / 2)], this._openPopup({
                                latlng: t
                            })), this
                        },
                        closePopup: function() {
                            return this._popup && this._popup._close(), this
                        },
                        _openPopup: function(t) {
                            this._popup.setLatLng(t.latlng), this._map.openPopup(this._popup)
                        }
                    }), c.Browser.vml = !c.Browser.svg && function() {
                        try {
                            var t = a.createElement("div");
                            t.innerHTML = '<v:shape adj="1"/>';
                            var e = t.firstChild;
                            return e.style.behavior = "url(#default#VML)", e && "object" == typeof e.adj
                        } catch (t) {
                            return !1
                        }
                    }(), c.Path = c.Browser.svg || !c.Browser.vml ? c.Path : c.Path.extend({
                        statics: {
                            VML: !0,
                            CLIP_PADDING: .02
                        },
                        _createElement: function() {
                            try {
                                return a.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
                                    function(t) {
                                        return a.createElement("<lvml:" + t + ' class="lvml">')
                                    }
                            } catch (t) {
                                return function(t) {
                                    return a.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')
                                }
                            }
                        }(),
                        _initPath: function() {
                            var t = this._container = this._createElement("shape");
                            c.DomUtil.addClass(t, "leaflet-vml-shape" + (this.options.className ? " " + this.options.className : "")), this.options.clickable && c.DomUtil.addClass(t, "leaflet-clickable"), t.coordsize = "1 1", this._path = this._createElement("path"), t.appendChild(this._path), this._map._pathRoot.appendChild(t)
                        },
                        _initStyle: function() {
                            this._updateStyle()
                        },
                        _updateStyle: function() {
                            var t = this._stroke,
                                e = this._fill,
                                i = this.options,
                                n = this._container;
                            n.stroked = i.stroke, n.filled = i.fill, i.stroke ? (t || ((t = this._stroke = this._createElement("stroke")).endcap = "round", n.appendChild(t)), t.weight = i.weight + "px", t.color = i.color, t.opacity = i.opacity, t.dashStyle = i.dashArray ? c.Util.isArray(i.dashArray) ? i.dashArray.join(" ") : i.dashArray.replace(/( *, *)/g, " ") : "", i.lineCap && (t.endcap = i.lineCap.replace("butt", "flat")), i.lineJoin && (t.joinstyle = i.lineJoin)) : t && (n.removeChild(t), this._stroke = null), i.fill ? (e || (e = this._fill = this._createElement("fill"), n.appendChild(e)), e.color = i.fillColor || i.color, e.opacity = i.fillOpacity) : e && (n.removeChild(e), this._fill = null)
                        },
                        _updatePath: function() {
                            var t = this._container.style;
                            t.display = "none", this._path.v = this.getPathString() + " ", t.display = ""
                        }
                    }), c.Map.include(c.Browser.svg || !c.Browser.vml ? {} : {
                        _initPathRoot: function() {
                            if (!this._pathRoot) {
                                var t = this._pathRoot = a.createElement("div");
                                t.className = "leaflet-vml-container", this._panes.overlayPane.appendChild(t), this.on("moveend", this._updatePathViewport), this._updatePathViewport()
                            }
                        }
                    }), c.Browser.canvas = !!a.createElement("canvas").getContext, c.Path = c.Path.SVG && !s.L_PREFER_CANVAS || !c.Browser.canvas ? c.Path : c.Path.extend({
                        statics: {
                            CANVAS: !0,
                            SVG: !1
                        },
                        redraw: function() {
                            return this._map && (this.projectLatlngs(), this._requestUpdate()), this
                        },
                        setStyle: function(t) {
                            return c.setOptions(this, t), this._map && (this._updateStyle(), this._requestUpdate()), this
                        },
                        onRemove: function(t) {
                            t.off("viewreset", this.projectLatlngs, this).off("moveend", this._updatePath, this), this.options.clickable && (this._map.off("click", this._onClick, this), this._map.off("mousemove", this._onMouseMove, this)), this._requestUpdate(), this.fire("remove"), this._map = null
                        },
                        _requestUpdate: function() {
                            this._map && !c.Path._updateRequest && (c.Path._updateRequest = c.Util.requestAnimFrame(this._fireMapMoveEnd, this._map))
                        },
                        _fireMapMoveEnd: function() {
                            c.Path._updateRequest = null, this.fire("moveend")
                        },
                        _initElements: function() {
                            this._map._initPathRoot(), this._ctx = this._map._canvasCtx
                        },
                        _updateStyle: function() {
                            var t = this.options;
                            t.stroke && (this._ctx.lineWidth = t.weight, this._ctx.strokeStyle = t.color), t.fill && (this._ctx.fillStyle = t.fillColor || t.color), t.lineCap && (this._ctx.lineCap = t.lineCap), t.lineJoin && (this._ctx.lineJoin = t.lineJoin)
                        },
                        _drawPath: function() {
                            var t, e, i, n, o;
                            for (this._ctx.beginPath(), t = 0, i = this._parts.length; t < i; t++) {
                                for (e = 0, n = this._parts[t].length; e < n; e++) o = this._parts[t][e], this._ctx[(0 === e ? "move" : "line") + "To"](o.x, o.y);
                                this instanceof c.Polygon && this._ctx.closePath()
                            }
                        },
                        _checkIfEmpty: function() {
                            return !this._parts.length
                        },
                        _updatePath: function() {
                            if (!this._checkIfEmpty()) {
                                var t = this._ctx,
                                    e = this.options;
                                this._drawPath(), t.save(), this._updateStyle(), e.fill && (t.globalAlpha = e.fillOpacity, t.fill(e.fillRule || "evenodd")), e.stroke && (t.globalAlpha = e.opacity, t.stroke()), t.restore()
                            }
                        },
                        _initEvents: function() {
                            this.options.clickable && (this._map.on("mousemove", this._onMouseMove, this), this._map.on("click dblclick contextmenu", this._fireMouseEvent, this))
                        },
                        _fireMouseEvent: function(t) {
                            this._containsPoint(t.layerPoint) && this.fire(t.type, t)
                        },
                        _onMouseMove: function(t) {
                            this._map && !this._map._animatingZoom && (this._containsPoint(t.layerPoint) ? (this._ctx.canvas.style.cursor = "pointer", this._mouseInside = !0, this.fire("mouseover", t)) : this._mouseInside && (this._ctx.canvas.style.cursor = "", this._mouseInside = !1, this.fire("mouseout", t)))
                        }
                    }), c.Map.include(c.Path.SVG && !s.L_PREFER_CANVAS || !c.Browser.canvas ? {} : {
                        _initPathRoot: function() {
                            var t, e = this._pathRoot;
                            e || ((e = this._pathRoot = a.createElement("canvas")).style.position = "absolute", (t = this._canvasCtx = e.getContext("2d")).lineCap = "round", t.lineJoin = "round", this._panes.overlayPane.appendChild(e), this.options.zoomAnimation && (this._pathRoot.className = "leaflet-zoom-animated", this.on("zoomanim", this._animatePathZoom), this.on("zoomend", this._endPathZoom)), this.on("moveend", this._updateCanvasViewport), this._updateCanvasViewport())
                        },
                        _updateCanvasViewport: function() {
                            if (!this._pathZooming) {
                                this._updatePathViewport();
                                var t = this._pathViewport,
                                    e = t.min,
                                    i = t.max.subtract(e),
                                    n = this._pathRoot;
                                c.DomUtil.setPosition(n, e), n.width = i.x, n.height = i.y, n.getContext("2d").translate(-e.x, -e.y)
                            }
                        }
                    }), c.LineUtil = {
                        simplify: function(t, e) {
                            if (!e || !t.length) return t.slice();
                            var i = e * e;
                            return t = this._reducePoints(t, i), this._simplifyDP(t, i)
                        },
                        pointToSegmentDistance: function(t, e, i) {
                            return Math.sqrt(this._sqClosestPointOnSegment(t, e, i, !0))
                        },
                        closestPointOnSegment: function(t, e, i) {
                            return this._sqClosestPointOnSegment(t, e, i)
                        },
                        _simplifyDP: function(t, e) {
                            var i = t.length,
                                n = new(typeof Uint8Array != void 0 + "" ? Uint8Array : Array)(i);
                            n[0] = n[i - 1] = 1, this._simplifyDPStep(t, n, e, 0, i - 1);
                            var o, s = [];
                            for (o = 0; o < i; o++) n[o] && s.push(t[o]);
                            return s
                        },
                        _simplifyDPStep: function(t, e, i, n, o) {
                            var s, a, r, h = 0;
                            for (a = n + 1; a <= o - 1; a++)(r = this._sqClosestPointOnSegment(t[a], t[n], t[o], !0)) > h && (s = a, h = r);
                            h > i && (e[s] = 1, this._simplifyDPStep(t, e, i, n, s), this._simplifyDPStep(t, e, i, s, o))
                        },
                        _reducePoints: function(t, e) {
                            for (var i = [t[0]], n = 1, o = 0, s = t.length; n < s; n++) this._sqDist(t[n], t[o]) > e && (i.push(t[n]), o = n);
                            return o < s - 1 && i.push(t[s - 1]), i
                        },
                        clipSegment: function(t, e, i, n) {
                            var o, s, a, r = n ? this._lastCode : this._getBitCode(t, i),
                                h = this._getBitCode(e, i);
                            for (this._lastCode = h;;) {
                                if (!(r | h)) return [t, e];
                                if (r & h) return !1;
                                s = this._getEdgeIntersection(t, e, o = r || h, i), a = this._getBitCode(s, i), o === r ? (t = s, r = a) : (e = s, h = a)
                            }
                        },
                        _getEdgeIntersection: function(t, e, i, n) {
                            var o = e.x - t.x,
                                s = e.y - t.y,
                                a = n.min,
                                r = n.max;
                            return 8 & i ? new c.Point(t.x + o * (r.y - t.y) / s, r.y) : 4 & i ? new c.Point(t.x + o * (a.y - t.y) / s, a.y) : 2 & i ? new c.Point(r.x, t.y + s * (r.x - t.x) / o) : 1 & i ? new c.Point(a.x, t.y + s * (a.x - t.x) / o) : void 0
                        },
                        _getBitCode: function(t, e) {
                            var i = 0;
                            return t.x < e.min.x ? i |= 1 : t.x > e.max.x && (i |= 2), t.y < e.min.y ? i |= 4 : t.y > e.max.y && (i |= 8), i
                        },
                        _sqDist: function(t, e) {
                            var i = e.x - t.x,
                                n = e.y - t.y;
                            return i * i + n * n
                        },
                        _sqClosestPointOnSegment: function(t, e, i, n) {
                            var o, s = e.x,
                                a = e.y,
                                r = i.x - s,
                                h = i.y - a,
                                l = r * r + h * h;
                            return l > 0 && ((o = ((t.x - s) * r + (t.y - a) * h) / l) > 1 ? (s = i.x, a = i.y) : o > 0 && (s += r * o, a += h * o)), r = t.x - s, h = t.y - a, n ? r * r + h * h : new c.Point(s, a)
                        }
                    }, c.Polyline = c.Path.extend({
                        initialize: function(t, e) {
                            c.Path.prototype.initialize.call(this, e), this._latlngs = this._convertLatLngs(t)
                        },
                        options: {
                            smoothFactor: 1,
                            noClip: !1
                        },
                        projectLatlngs: function() {
                            this._originalPoints = [];
                            for (var t = 0, e = this._latlngs.length; t < e; t++) this._originalPoints[t] = this._map.latLngToLayerPoint(this._latlngs[t])
                        },
                        getPathString: function() {
                            for (var t = 0, e = this._parts.length, i = ""; t < e; t++) i += this._getPathPartStr(this._parts[t]);
                            return i
                        },
                        getLatLngs: function() {
                            return this._latlngs
                        },
                        setLatLngs: function(t) {
                            return this._latlngs = this._convertLatLngs(t), this.redraw()
                        },
                        addLatLng: function(t) {
                            return this._latlngs.push(c.latLng(t)), this.redraw()
                        },
                        spliceLatLngs: function() {
                            var t = [].splice.apply(this._latlngs, arguments);
                            return this._convertLatLngs(this._latlngs, !0), this.redraw(), t
                        },
                        closestLayerPoint: function(t) {
                            for (var e, i, n = 1 / 0, o = this._parts, s = null, a = 0, r = o.length; a < r; a++)
                                for (var h = o[a], l = 1, u = h.length; l < u; l++) {
                                    var d = c.LineUtil._sqClosestPointOnSegment(t, e = h[l - 1], i = h[l], !0);
                                    d < n && (n = d, s = c.LineUtil._sqClosestPointOnSegment(t, e, i))
                                }
                            return s && (s.distance = Math.sqrt(n)), s
                        },
                        getBounds: function() {
                            return new c.LatLngBounds(this.getLatLngs())
                        },
                        _convertLatLngs: function(t, e) {
                            var i, n, o = e ? t : [];
                            for (i = 0, n = t.length; i < n; i++) {
                                if (c.Util.isArray(t[i]) && "number" != typeof t[i][0]) return;
                                o[i] = c.latLng(t[i])
                            }
                            return o
                        },
                        _initEvents: function() {
                            c.Path.prototype._initEvents.call(this)
                        },
                        _getPathPartStr: function(t) {
                            for (var e, i = c.Path.VML, n = 0, o = t.length, s = ""; n < o; n++) e = t[n], i && e._round(), s += (n ? "L" : "M") + e.x + " " + e.y;
                            return s
                        },
                        _clipPoints: function() {
                            var t, e, i, n = this._originalPoints,
                                o = n.length;
                            if (this.options.noClip) this._parts = [n];
                            else {
                                this._parts = [];
                                var s = this._parts,
                                    a = this._map._pathViewport,
                                    r = c.LineUtil;
                                for (t = 0, e = 0; t < o - 1; t++)(i = r.clipSegment(n[t], n[t + 1], a, t)) && (s[e] = s[e] || [], s[e].push(i[0]), i[1] === n[t + 1] && t !== o - 2 || (s[e].push(i[1]), e++))
                            }
                        },
                        _simplifyPoints: function() {
                            for (var t = this._parts, e = c.LineUtil, i = 0, n = t.length; i < n; i++) t[i] = e.simplify(t[i], this.options.smoothFactor)
                        },
                        _updatePath: function() {
                            this._map && (this._clipPoints(), this._simplifyPoints(), c.Path.prototype._updatePath.call(this))
                        }
                    }), c.polyline = function(t, e) {
                        return new c.Polyline(t, e)
                    }, c.PolyUtil = {}, c.PolyUtil.clipPolygon = function(t, e) {
                        var i, n, o, s, a, r, h, l, u, d = [1, 4, 2, 8],
                            _ = c.LineUtil;
                        for (n = 0, h = t.length; n < h; n++) t[n]._code = _._getBitCode(t[n], e);
                        for (s = 0; s < 4; s++) {
                            for (l = d[s], i = [], n = 0, o = (h = t.length) - 1; n < h; o = n++) r = t[o], (a = t[n])._code & l ? r._code & l || ((u = _._getEdgeIntersection(r, a, l, e))._code = _._getBitCode(u, e), i.push(u)) : (r._code & l && ((u = _._getEdgeIntersection(r, a, l, e))._code = _._getBitCode(u, e), i.push(u)), i.push(a));
                            t = i
                        }
                        return t
                    }, c.Polygon = c.Polyline.extend({
                        options: {
                            fill: !0
                        },
                        initialize: function(t, e) {
                            c.Polyline.prototype.initialize.call(this, t, e), this._initWithHoles(t)
                        },
                        _initWithHoles: function(t) {
                            var e, i, n;
                            if (t && c.Util.isArray(t[0]) && "number" != typeof t[0][0])
                                for (this._latlngs = this._convertLatLngs(t[0]), this._holes = t.slice(1), e = 0, i = this._holes.length; e < i; e++)(n = this._holes[e] = this._convertLatLngs(this._holes[e]))[0].equals(n[n.length - 1]) && n.pop();
                            (t = this._latlngs).length >= 2 && t[0].equals(t[t.length - 1]) && t.pop()
                        },
                        projectLatlngs: function() {
                            var t, e, i, n;
                            if (c.Polyline.prototype.projectLatlngs.call(this), this._holePoints = [], this._holes)
                                for (t = 0, i = this._holes.length; t < i; t++)
                                    for (this._holePoints[t] = [], e = 0, n = this._holes[t].length; e < n; e++) this._holePoints[t][e] = this._map.latLngToLayerPoint(this._holes[t][e])
                        },
                        setLatLngs: function(t) {
                            return t && c.Util.isArray(t[0]) && "number" != typeof t[0][0] ? (this._initWithHoles(t), this.redraw()) : c.Polyline.prototype.setLatLngs.call(this, t)
                        },
                        _clipPoints: function() {
                            var t = [];
                            if (this._parts = [this._originalPoints].concat(this._holePoints), !this.options.noClip) {
                                for (var e = 0, i = this._parts.length; e < i; e++) {
                                    var n = c.PolyUtil.clipPolygon(this._parts[e], this._map._pathViewport);
                                    n.length && t.push(n)
                                }
                                this._parts = t
                            }
                        },
                        _getPathPartStr: function(t) {
                            return c.Polyline.prototype._getPathPartStr.call(this, t) + (c.Browser.svg ? "z" : "x")
                        }
                    }), c.polygon = function(t, e) {
                        return new c.Polygon(t, e)
                    },
                    function() {
                        function t(t) {
                            return c.FeatureGroup.extend({
                                initialize: function(t, e) {
                                    this._layers = {}, this._options = e, this.setLatLngs(t)
                                },
                                setLatLngs: function(e) {
                                    var i = 0,
                                        n = e.length;
                                    for (this.eachLayer(function(t) {
                                            i < n ? t.setLatLngs(e[i++]) : this.removeLayer(t)
                                        }, this); i < n;) this.addLayer(new t(e[i++], this._options));
                                    return this
                                },
                                getLatLngs: function() {
                                    var t = [];
                                    return this.eachLayer(function(e) {
                                        t.push(e.getLatLngs())
                                    }), t
                                }
                            })
                        }
                        c.MultiPolyline = t(c.Polyline), c.MultiPolygon = t(c.Polygon), c.multiPolyline = function(t, e) {
                            return new c.MultiPolyline(t, e)
                        }, c.multiPolygon = function(t, e) {
                            return new c.MultiPolygon(t, e)
                        }
                    }(), c.Rectangle = c.Polygon.extend({
                        initialize: function(t, e) {
                            c.Polygon.prototype.initialize.call(this, this._boundsToLatLngs(t), e)
                        },
                        setBounds: function(t) {
                            this.setLatLngs(this._boundsToLatLngs(t))
                        },
                        _boundsToLatLngs: function(t) {
                            return [(t = c.latLngBounds(t)).getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()]
                        }
                    }), c.rectangle = function(t, e) {
                        return new c.Rectangle(t, e)
                    }, c.Circle = c.Path.extend({
                        initialize: function(t, e, i) {
                            c.Path.prototype.initialize.call(this, i), this._latlng = c.latLng(t), this._mRadius = e
                        },
                        options: {
                            fill: !0
                        },
                        setLatLng: function(t) {
                            return this._latlng = c.latLng(t), this.redraw()
                        },
                        setRadius: function(t) {
                            return this._mRadius = t, this.redraw()
                        },
                        projectLatlngs: function() {
                            var t = this._getLngRadius(),
                                e = this._latlng,
                                i = this._map.latLngToLayerPoint([e.lat, e.lng - t]);
                            this._point = this._map.latLngToLayerPoint(e), this._radius = Math.max(this._point.x - i.x, 1)
                        },
                        getBounds: function() {
                            var t = this._getLngRadius(),
                                e = this._mRadius / 40075017 * 360,
                                i = this._latlng;
                            return new c.LatLngBounds([i.lat - e, i.lng - t], [i.lat + e, i.lng + t])
                        },
                        getLatLng: function() {
                            return this._latlng
                        },
                        getPathString: function() {
                            var t = this._point,
                                e = this._radius;
                            return this._checkIfEmpty() ? "" : c.Browser.svg ? "M" + t.x + "," + (t.y - e) + "A" + e + "," + e + ",0,1,1," + (t.x - .1) + "," + (t.y - e) + " z" : (t._round(), e = Math.round(e), "AL " + t.x + "," + t.y + " " + e + "," + e + " 0,23592600")
                        },
                        getRadius: function() {
                            return this._mRadius
                        },
                        _getLatRadius: function() {
                            return this._mRadius / 40075017 * 360
                        },
                        _getLngRadius: function() {
                            return this._getLatRadius() / Math.cos(c.LatLng.DEG_TO_RAD * this._latlng.lat)
                        },
                        _checkIfEmpty: function() {
                            if (!this._map) return !1;
                            var t = this._map._pathViewport,
                                e = this._radius,
                                i = this._point;
                            return i.x - e > t.max.x || i.y - e > t.max.y || i.x + e < t.min.x || i.y + e < t.min.y
                        }
                    }), c.circle = function(t, e, i) {
                        return new c.Circle(t, e, i)
                    }, c.CircleMarker = c.Circle.extend({
                        options: {
                            radius: 10,
                            weight: 2
                        },
                        initialize: function(t, e) {
                            c.Circle.prototype.initialize.call(this, t, null, e), this._radius = this.options.radius
                        },
                        projectLatlngs: function() {
                            this._point = this._map.latLngToLayerPoint(this._latlng)
                        },
                        _updateStyle: function() {
                            c.Circle.prototype._updateStyle.call(this), this.setRadius(this.options.radius)
                        },
                        setLatLng: function(t) {
                            return c.Circle.prototype.setLatLng.call(this, t), this._popup && this._popup._isOpen && this._popup.setLatLng(t), this
                        },
                        setRadius: function(t) {
                            return this.options.radius = this._radius = t, this.redraw()
                        },
                        getRadius: function() {
                            return this._radius
                        }
                    }), c.circleMarker = function(t, e) {
                        return new c.CircleMarker(t, e)
                    }, c.Polyline.include(c.Path.CANVAS ? {
                        _containsPoint: function(t, e) {
                            var i, n, o, s, a, r, h = this.options.weight / 2;
                            for (c.Browser.touch && (h += 10), i = 0, s = this._parts.length; i < s; i++)
                                for (n = 0, o = (a = (r = this._parts[i]).length) - 1; n < a; o = n++)
                                    if ((e || 0 !== n) && c.LineUtil.pointToSegmentDistance(t, r[o], r[n]) <= h) return !0;
                            return !1
                        }
                    } : {}), c.Polygon.include(c.Path.CANVAS ? {
                        _containsPoint: function(t) {
                            var e, i, n, o, s, a, r, h, l = !1;
                            if (c.Polyline.prototype._containsPoint.call(this, t, !0)) return !0;
                            for (o = 0, r = this._parts.length; o < r; o++)
                                for (s = 0, a = (h = (e = this._parts[o]).length) - 1; s < h; a = s++)(i = e[s]).y > t.y != (n = e[a]).y > t.y && t.x < (n.x - i.x) * (t.y - i.y) / (n.y - i.y) + i.x && (l = !l);
                            return l
                        }
                    } : {}), c.Circle.include(c.Path.CANVAS ? {
                        _drawPath: function() {
                            var t = this._point;
                            this._ctx.beginPath(), this._ctx.arc(t.x, t.y, this._radius, 0, 2 * Math.PI, !1)
                        },
                        _containsPoint: function(t) {
                            var e = this.options.stroke ? this.options.weight / 2 : 0;
                            return t.distanceTo(this._point) <= this._radius + e
                        }
                    } : {}), c.CircleMarker.include(c.Path.CANVAS ? {
                        _updateStyle: function() {
                            c.Path.prototype._updateStyle.call(this)
                        }
                    } : {}), c.GeoJSON = c.FeatureGroup.extend({
                        initialize: function(t, e) {
                            c.setOptions(this, e), this._layers = {}, t && this.addData(t)
                        },
                        addData: function(t) {
                            var e, i, n, o = c.Util.isArray(t) ? t : t.features;
                            if (o) {
                                for (e = 0, i = o.length; e < i; e++)((n = o[e]).geometries || n.geometry || n.features || n.coordinates) && this.addData(o[e]);
                                return this
                            }
                            var s = this.options;
                            if (!s.filter || s.filter(t)) {
                                var a = c.GeoJSON.geometryToLayer(t, s.pointToLayer, s.coordsToLatLng, s);
                                return a.feature = c.GeoJSON.asFeature(t), a.defaultOptions = a.options, this.resetStyle(a), s.onEachFeature && s.onEachFeature(t, a), this.addLayer(a)
                            }
                        },
                        resetStyle: function(t) {
                            var e = this.options.style;
                            e && (c.Util.extend(t.options, t.defaultOptions), this._setLayerStyle(t, e))
                        },
                        setStyle: function(t) {
                            this.eachLayer(function(e) {
                                this._setLayerStyle(e, t)
                            }, this)
                        },
                        _setLayerStyle: function(t, e) {
                            "function" == typeof e && (e = e(t.feature)), t.setStyle && t.setStyle(e)
                        }
                    }), c.extend(c.GeoJSON, {
                        geometryToLayer: function(t, e, i, n) {
                            var o, s, a, r, h = "Feature" === t.type ? t.geometry : t,
                                l = h.coordinates,
                                u = [];
                            switch (i = i || this.coordsToLatLng, h.type) {
                                case "Point":
                                    return o = i(l), e ? e(t, o) : new c.Marker(o);
                                case "MultiPoint":
                                    for (a = 0, r = l.length; a < r; a++) o = i(l[a]), u.push(e ? e(t, o) : new c.Marker(o));
                                    return new c.FeatureGroup(u);
                                case "LineString":
                                    return s = this.coordsToLatLngs(l, 0, i), new c.Polyline(s, n);
                                case "Polygon":
                                    if (2 === l.length && !l[1].length) throw new Error("Invalid GeoJSON object.");
                                    return s = this.coordsToLatLngs(l, 1, i), new c.Polygon(s, n);
                                case "MultiLineString":
                                    return s = this.coordsToLatLngs(l, 1, i), new c.MultiPolyline(s, n);
                                case "MultiPolygon":
                                    return s = this.coordsToLatLngs(l, 2, i), new c.MultiPolygon(s, n);
                                case "GeometryCollection":
                                    for (a = 0, r = h.geometries.length; a < r; a++) u.push(this.geometryToLayer({
                                        geometry: h.geometries[a],
                                        type: "Feature",
                                        properties: t.properties
                                    }, e, i, n));
                                    return new c.FeatureGroup(u);
                                default:
                                    throw new Error("Invalid GeoJSON object.")
                            }
                        },
                        coordsToLatLng: function(t) {
                            return new c.LatLng(t[1], t[0], t[2])
                        },
                        coordsToLatLngs: function(t, e, i) {
                            var n, o, s, a = [];
                            for (o = 0, s = t.length; o < s; o++) n = e ? this.coordsToLatLngs(t[o], e - 1, i) : (i || this.coordsToLatLng)(t[o]), a.push(n);
                            return a
                        },
                        latLngToCoords: function(t) {
                            var e = [t.lng, t.lat];
                            return void 0 !== t.alt && e.push(t.alt), e
                        },
                        latLngsToCoords: function(t) {
                            for (var e = [], i = 0, n = t.length; i < n; i++) e.push(c.GeoJSON.latLngToCoords(t[i]));
                            return e
                        },
                        getFeature: function(t, e) {
                            return t.feature ? c.extend({}, t.feature, {
                                geometry: e
                            }) : c.GeoJSON.asFeature(e)
                        },
                        asFeature: function(t) {
                            return "Feature" === t.type ? t : {
                                type: "Feature",
                                properties: {},
                                geometry: t
                            }
                        }
                    });
                var I = {
                    toGeoJSON: function() {
                        return c.GeoJSON.getFeature(this, {
                            type: "Point",
                            coordinates: c.GeoJSON.latLngToCoords(this.getLatLng())
                        })
                    }
                };
                c.Marker.include(I), c.Circle.include(I), c.CircleMarker.include(I), c.Polyline.include({
                        toGeoJSON: function() {
                            return c.GeoJSON.getFeature(this, {
                                type: "LineString",
                                coordinates: c.GeoJSON.latLngsToCoords(this.getLatLngs())
                            })
                        }
                    }), c.Polygon.include({
                        toGeoJSON: function() {
                            var t, e, i, n = [c.GeoJSON.latLngsToCoords(this.getLatLngs())];
                            if (n[0].push(n[0][0]), this._holes)
                                for (t = 0, e = this._holes.length; t < e; t++)(i = c.GeoJSON.latLngsToCoords(this._holes[t])).push(i[0]), n.push(i);
                            return c.GeoJSON.getFeature(this, {
                                type: "Polygon",
                                coordinates: n
                            })
                        }
                    }),
                    function() {
                        function t(t) {
                            return function() {
                                var e = [];
                                return this.eachLayer(function(t) {
                                    e.push(t.toGeoJSON().geometry.coordinates)
                                }), c.GeoJSON.getFeature(this, {
                                    type: t,
                                    coordinates: e
                                })
                            }
                        }
                        c.MultiPolyline.include({
                            toGeoJSON: t("MultiLineString")
                        }), c.MultiPolygon.include({
                            toGeoJSON: t("MultiPolygon")
                        }), c.LayerGroup.include({
                            toGeoJSON: function() {
                                var e, i = this.feature && this.feature.geometry,
                                    n = [];
                                if (i && "MultiPoint" === i.type) return t("MultiPoint").call(this);
                                var o = i && "GeometryCollection" === i.type;
                                return this.eachLayer(function(t) {
                                    t.toGeoJSON && (e = t.toGeoJSON(), n.push(o ? e.geometry : c.GeoJSON.asFeature(e)))
                                }), o ? c.GeoJSON.getFeature(this, {
                                    geometries: n,
                                    type: "GeometryCollection"
                                }) : {
                                    type: "FeatureCollection",
                                    features: n
                                }
                            }
                        })
                    }(), c.geoJson = function(t, e) {
                        return new c.GeoJSON(t, e)
                    }, c.DomEvent = {
                        addListener: function(t, e, i, n) {
                            var o, s, a = c.stamp(i),
                                r = "_leaflet_" + e + a;
                            return t[r] ? this : (o = function(e) {
                                return i.call(n || t, e || c.DomEvent._getEvent())
                            }, c.Browser.pointer && 0 === e.indexOf("touch") ? this.addPointerListener(t, e, o, a) : (c.Browser.touch && "dblclick" === e && this.addDoubleTapListener && this.addDoubleTapListener(t, o, a), "addEventListener" in t ? "mousewheel" === e ? (t.addEventListener("DOMMouseScroll", o, !1), t.addEventListener(e, o, !1)) : "mouseenter" === e || "mouseleave" === e ? (s = o, t.addEventListener("mouseenter" === e ? "mouseover" : "mouseout", o = function(e) {
                                if (c.DomEvent._checkMouse(t, e)) return s(e)
                            }, !1)) : "click" === e && c.Browser.android ? (s = o, t.addEventListener(e, o = function(t) {
                                return c.DomEvent._filterClick(t, s)
                            }, !1)) : t.addEventListener(e, o, !1) : "attachEvent" in t && t.attachEvent("on" + e, o), t[r] = o, this))
                        },
                        removeListener: function(t, e, i) {
                            var n = c.stamp(i),
                                o = "_leaflet_" + e + n,
                                s = t[o];
                            return s ? (c.Browser.pointer && 0 === e.indexOf("touch") ? this.removePointerListener(t, e, n) : c.Browser.touch && "dblclick" === e && this.removeDoubleTapListener ? this.removeDoubleTapListener(t, n) : "removeEventListener" in t ? "mousewheel" === e ? (t.removeEventListener("DOMMouseScroll", s, !1), t.removeEventListener(e, s, !1)) : t.removeEventListener("mouseenter" === e || "mouseleave" === e ? "mouseenter" === e ? "mouseover" : "mouseout" : e, s, !1) : "detachEvent" in t && t.detachEvent("on" + e, s), t[o] = null, this) : this
                        },
                        stopPropagation: function(t) {
                            return t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0, c.DomEvent._skipped(t), this
                        },
                        disableScrollPropagation: function(t) {
                            var e = c.DomEvent.stopPropagation;
                            return c.DomEvent.on(t, "mousewheel", e).on(t, "MozMousePixelScroll", e)
                        },
                        disableClickPropagation: function(t) {
                            for (var e = c.DomEvent.stopPropagation, i = c.Draggable.START.length - 1; i >= 0; i--) c.DomEvent.on(t, c.Draggable.START[i], e);
                            return c.DomEvent.on(t, "click", c.DomEvent._fakeStop).on(t, "dblclick", e)
                        },
                        preventDefault: function(t) {
                            return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this
                        },
                        stop: function(t) {
                            return c.DomEvent.preventDefault(t).stopPropagation(t)
                        },
                        getMousePosition: function(t, e) {
                            if (!e) return new c.Point(t.clientX, t.clientY);
                            var i = e.getBoundingClientRect();
                            return new c.Point(t.clientX - i.left - e.clientLeft, t.clientY - i.top - e.clientTop)
                        },
                        getWheelDelta: function(t) {
                            var e = 0;
                            return t.wheelDelta && (e = t.wheelDelta / 120), t.detail && (e = -t.detail / 3), e
                        },
                        _skipEvents: {},
                        _fakeStop: function(t) {
                            c.DomEvent._skipEvents[t.type] = !0
                        },
                        _skipped: function(t) {
                            var e = this._skipEvents[t.type];
                            return this._skipEvents[t.type] = !1, e
                        },
                        _checkMouse: function(t, e) {
                            var i = e.relatedTarget;
                            if (!i) return !0;
                            try {
                                for (; i && i !== t;) i = i.parentNode
                            } catch (t) {
                                return !1
                            }
                            return i !== t
                        },
                        _getEvent: function() {
                            var t = s.event;
                            if (!t)
                                for (var e = arguments.callee.caller; e && (!(t = e.arguments[0]) || s.Event !== t.constructor);) e = e.caller;
                            return t
                        },
                        _filterClick: function(t, e) {
                            var i = t.timeStamp || t.originalEvent.timeStamp,
                                n = c.DomEvent._lastClick && i - c.DomEvent._lastClick;
                            if (!(n && n > 100 && n < 500 || t.target._simulatedClick && !t._simulated)) return c.DomEvent._lastClick = i, e(t);
                            c.DomEvent.stop(t)
                        }
                    }, c.DomEvent.on = c.DomEvent.addListener, c.DomEvent.off = c.DomEvent.removeListener, c.Draggable = c.Class.extend({
                        includes: c.Mixin.Events,
                        statics: {
                            START: c.Browser.touch ? ["touchstart", "mousedown"] : ["mousedown"],
                            END: {
                                mousedown: "mouseup",
                                touchstart: "touchend",
                                pointerdown: "touchend",
                                MSPointerDown: "touchend"
                            },
                            MOVE: {
                                mousedown: "mousemove",
                                touchstart: "touchmove",
                                pointerdown: "touchmove",
                                MSPointerDown: "touchmove"
                            }
                        },
                        initialize: function(t, e) {
                            this._element = t, this._dragStartTarget = e || t
                        },
                        enable: function() {
                            if (!this._enabled) {
                                for (var t = c.Draggable.START.length - 1; t >= 0; t--) c.DomEvent.on(this._dragStartTarget, c.Draggable.START[t], this._onDown, this);
                                this._enabled = !0
                            }
                        },
                        disable: function() {
                            if (this._enabled) {
                                for (var t = c.Draggable.START.length - 1; t >= 0; t--) c.DomEvent.off(this._dragStartTarget, c.Draggable.START[t], this._onDown, this);
                                this._enabled = !1, this._moved = !1
                            }
                        },
                        _onDown: function(t) {
                            if (this._moved = !1, !t.shiftKey && (1 === t.which || 1 === t.button || t.touches) && (c.DomEvent.stopPropagation(t), !c.Draggable._disabled && (c.DomUtil.disableImageDrag(), c.DomUtil.disableTextSelection(), !this._moving))) {
                                var e = t.touches ? t.touches[0] : t;
                                this._startPoint = new c.Point(e.clientX, e.clientY), this._startPos = this._newPos = c.DomUtil.getPosition(this._element), c.DomEvent.on(a, c.Draggable.MOVE[t.type], this._onMove, this).on(a, c.Draggable.END[t.type], this._onUp, this)
                            }
                        },
                        _onMove: function(t) {
                            if (t.touches && t.touches.length > 1) this._moved = !0;
                            else {
                                var e = t.touches && 1 === t.touches.length ? t.touches[0] : t,
                                    i = new c.Point(e.clientX, e.clientY).subtract(this._startPoint);
                                (i.x || i.y) && (c.Browser.touch && Math.abs(i.x) + Math.abs(i.y) < 3 || (c.DomEvent.preventDefault(t), this._moved || (this.fire("dragstart"), this._moved = !0, this._startPos = c.DomUtil.getPosition(this._element).subtract(i), c.DomUtil.addClass(a.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, c.DomUtil.addClass(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(i), this._moving = !0, c.Util.cancelAnimFrame(this._animRequest), this._animRequest = c.Util.requestAnimFrame(this._updatePosition, this, !0, this._dragStartTarget)))
                            }
                        },
                        _updatePosition: function() {
                            this.fire("predrag"), c.DomUtil.setPosition(this._element, this._newPos), this.fire("drag")
                        },
                        _onUp: function() {
                            for (var t in c.DomUtil.removeClass(a.body, "leaflet-dragging"), this._lastTarget && (c.DomUtil.removeClass(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), c.Draggable.MOVE) c.DomEvent.off(a, c.Draggable.MOVE[t], this._onMove).off(a, c.Draggable.END[t], this._onUp);
                            c.DomUtil.enableImageDrag(), c.DomUtil.enableTextSelection(), this._moved && this._moving && (c.Util.cancelAnimFrame(this._animRequest), this.fire("dragend", {
                                distance: this._newPos.distanceTo(this._startPos)
                            })), this._moving = !1
                        }
                    }), c.Handler = c.Class.extend({
                        initialize: function(t) {
                            this._map = t
                        },
                        enable: function() {
                            this._enabled || (this._enabled = !0, this.addHooks())
                        },
                        disable: function() {
                            this._enabled && (this._enabled = !1, this.removeHooks())
                        },
                        enabled: function() {
                            return !!this._enabled
                        }
                    }), c.Map.mergeOptions({
                        dragging: !0,
                        inertia: !c.Browser.android23,
                        inertiaDeceleration: 3400,
                        inertiaMaxSpeed: 1 / 0,
                        inertiaThreshold: c.Browser.touch ? 32 : 18,
                        easeLinearity: .25,
                        worldCopyJump: !1
                    }), c.Map.Drag = c.Handler.extend({
                        addHooks: function() {
                            if (!this._draggable) {
                                var t = this._map;
                                this._draggable = new c.Draggable(t._mapPane, t._container), this._draggable.on({
                                    dragstart: this._onDragStart,
                                    drag: this._onDrag,
                                    dragend: this._onDragEnd
                                }, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDrag, this), t.on("viewreset", this._onViewReset, this), t.whenReady(this._onViewReset, this))
                            }
                            this._draggable.enable()
                        },
                        removeHooks: function() {
                            this._draggable.disable()
                        },
                        moved: function() {
                            return this._draggable && this._draggable._moved
                        },
                        _onDragStart: function() {
                            var t = this._map;
                            t._panAnim && t._panAnim.stop(), t.fire("movestart").fire("dragstart"), t.options.inertia && (this._positions = [], this._times = [])
                        },
                        _onDrag: function() {
                            if (this._map.options.inertia) {
                                var t = this._lastTime = +new Date,
                                    e = this._lastPos = this._draggable._newPos;
                                this._positions.push(e), this._times.push(t), t - this._times[0] > 200 && (this._positions.shift(), this._times.shift())
                            }
                            this._map.fire("move").fire("drag")
                        },
                        _onViewReset: function() {
                            var t = this._map.getSize()._divideBy(2),
                                e = this._map.latLngToLayerPoint([0, 0]);
                            this._initialWorldOffset = e.subtract(t).x, this._worldWidth = this._map.project([0, 180]).x
                        },
                        _onPreDrag: function() {
                            var t = this._worldWidth,
                                e = Math.round(t / 2),
                                i = this._initialWorldOffset,
                                n = this._draggable._newPos.x,
                                o = (n - e + i) % t + e - i,
                                s = (n + e + i) % t - e - i,
                                a = Math.abs(o + i) < Math.abs(s + i) ? o : s;
                            this._draggable._newPos.x = a
                        },
                        _onDragEnd: function(t) {
                            var e = this._map,
                                i = e.options,
                                n = +new Date - this._lastTime,
                                o = !i.inertia || n > i.inertiaThreshold || !this._positions[0];
                            if (e.fire("dragend", t), o) e.fire("moveend");
                            else {
                                var s = this._lastPos.subtract(this._positions[0]),
                                    a = i.easeLinearity,
                                    r = s.multiplyBy(a / ((this._lastTime + n - this._times[0]) / 1e3)),
                                    h = r.distanceTo([0, 0]),
                                    l = Math.min(i.inertiaMaxSpeed, h),
                                    u = r.multiplyBy(l / h),
                                    d = l / (i.inertiaDeceleration * a),
                                    _ = u.multiplyBy(-d / 2).round();
                                _.x && _.y ? (_ = e._limitOffset(_, e.options.maxBounds), c.Util.requestAnimFrame(function() {
                                    e.panBy(_, {
                                        duration: d,
                                        easeLinearity: a,
                                        noMoveStart: !0
                                    })
                                })) : e.fire("moveend")
                            }
                        }
                    }), c.Map.addInitHook("addHandler", "dragging", c.Map.Drag), c.Map.mergeOptions({
                        doubleClickZoom: !0
                    }), c.Map.DoubleClickZoom = c.Handler.extend({
                        addHooks: function() {
                            this._map.on("dblclick", this._onDoubleClick, this)
                        },
                        removeHooks: function() {
                            this._map.off("dblclick", this._onDoubleClick, this)
                        },
                        _onDoubleClick: function(t) {
                            var e = this._map,
                                i = e.getZoom() + (t.originalEvent.shiftKey ? -1 : 1);
                            "center" === e.options.doubleClickZoom ? e.setZoom(i) : e.setZoomAround(t.containerPoint, i)
                        }
                    }), c.Map.addInitHook("addHandler", "doubleClickZoom", c.Map.DoubleClickZoom), c.Map.mergeOptions({
                        scrollWheelZoom: !0
                    }), c.Map.ScrollWheelZoom = c.Handler.extend({
                        addHooks: function() {
                            c.DomEvent.on(this._map._container, "mousewheel", this._onWheelScroll, this), c.DomEvent.on(this._map._container, "MozMousePixelScroll", c.DomEvent.preventDefault), this._delta = 0
                        },
                        removeHooks: function() {
                            c.DomEvent.off(this._map._container, "mousewheel", this._onWheelScroll), c.DomEvent.off(this._map._container, "MozMousePixelScroll", c.DomEvent.preventDefault)
                        },
                        _onWheelScroll: function(t) {
                            var e = c.DomEvent.getWheelDelta(t);
                            this._delta += e, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +new Date);
                            var i = Math.max(40 - (+new Date - this._startTime), 0);
                            clearTimeout(this._timer), this._timer = setTimeout(c.bind(this._performZoom, this), i), c.DomEvent.preventDefault(t), c.DomEvent.stopPropagation(t)
                        },
                        _performZoom: function() {
                            var t = this._map,
                                e = this._delta,
                                i = t.getZoom();
                            e = e > 0 ? Math.ceil(e) : Math.floor(e), e = Math.max(Math.min(e, 4), -4), e = t._limitZoom(i + e) - i, this._delta = 0, this._startTime = null, e && ("center" === t.options.scrollWheelZoom ? t.setZoom(i + e) : t.setZoomAround(this._lastMousePos, i + e))
                        }
                    }), c.Map.addInitHook("addHandler", "scrollWheelZoom", c.Map.ScrollWheelZoom), c.extend(c.DomEvent, {
                        _touchstart: c.Browser.msPointer ? "MSPointerDown" : c.Browser.pointer ? "pointerdown" : "touchstart",
                        _touchend: c.Browser.msPointer ? "MSPointerUp" : c.Browser.pointer ? "pointerup" : "touchend",
                        addDoubleTapListener: function(t, e, i) {
                            var n, o, s = !1,
                                r = 250,
                                h = this._touchstart,
                                l = this._touchend,
                                u = [];

                            function d(t) {
                                var e;
                                if (c.Browser.pointer ? (u.push(t.pointerId), e = u.length) : e = t.touches.length, !(e > 1)) {
                                    var i = Date.now(),
                                        a = i - (n || i);
                                    o = t.touches ? t.touches[0] : t, s = a > 0 && a <= r, n = i
                                }
                            }

                            function _(t) {
                                if (c.Browser.pointer) {
                                    var i = u.indexOf(t.pointerId);
                                    if (-1 === i) return;
                                    u.splice(i, 1)
                                }
                                if (s) {
                                    if (c.Browser.pointer) {
                                        var a, r = {};
                                        for (var h in o) r[h] = "function" == typeof(a = o[h]) ? a.bind(o) : a;
                                        o = r
                                    }
                                    o.type = "dblclick", e(o), n = null
                                }
                            }
                            t["_leaflet_" + h + i] = d, t["_leaflet_" + l + i] = _;
                            var p = c.Browser.pointer ? a.documentElement : t;
                            return t.addEventListener(h, d, !1), p.addEventListener(l, _, !1), c.Browser.pointer && p.addEventListener(c.DomEvent.POINTER_CANCEL, _, !1), this
                        },
                        removeDoubleTapListener: function(t, e) {
                            var i = "_leaflet_";
                            return t.removeEventListener(this._touchstart, t[i + this._touchstart + e], !1), (c.Browser.pointer ? a.documentElement : t).removeEventListener(this._touchend, t[i + this._touchend + e], !1), c.Browser.pointer && a.documentElement.removeEventListener(c.DomEvent.POINTER_CANCEL, t[i + this._touchend + e], !1), this
                        }
                    }), c.extend(c.DomEvent, {
                        POINTER_DOWN: c.Browser.msPointer ? "MSPointerDown" : "pointerdown",
                        POINTER_MOVE: c.Browser.msPointer ? "MSPointerMove" : "pointermove",
                        POINTER_UP: c.Browser.msPointer ? "MSPointerUp" : "pointerup",
                        POINTER_CANCEL: c.Browser.msPointer ? "MSPointerCancel" : "pointercancel",
                        _pointers: [],
                        _pointerDocumentListener: !1,
                        addPointerListener: function(t, e, i, n) {
                            switch (e) {
                                case "touchstart":
                                    return this.addPointerListenerStart(t, e, i, n);
                                case "touchend":
                                    return this.addPointerListenerEnd(t, e, i, n);
                                case "touchmove":
                                    return this.addPointerListenerMove(t, e, i, n);
                                default:
                                    throw "Unknown touch event type"
                            }
                        },
                        addPointerListenerStart: function(t, e, i, n) {
                            var o = this._pointers,
                                s = function(t) {
                                    "mouse" !== t.pointerType && t.pointerType !== t.MSPOINTER_TYPE_MOUSE && c.DomEvent.preventDefault(t);
                                    for (var e = !1, n = 0; n < o.length; n++)
                                        if (o[n].pointerId === t.pointerId) {
                                            e = !0;
                                            break
                                        }
                                    e || o.push(t), t.touches = o.slice(), t.changedTouches = [t], i(t)
                                };
                            if (t["_leaflet_touchstart" + n] = s, t.addEventListener(this.POINTER_DOWN, s, !1), !this._pointerDocumentListener) {
                                var r = function(t) {
                                    for (var e = 0; e < o.length; e++)
                                        if (o[e].pointerId === t.pointerId) {
                                            o.splice(e, 1);
                                            break
                                        }
                                };
                                a.documentElement.addEventListener(this.POINTER_UP, r, !1), a.documentElement.addEventListener(this.POINTER_CANCEL, r, !1), this._pointerDocumentListener = !0
                            }
                            return this
                        },
                        addPointerListenerMove: function(t, e, i, n) {
                            var o = this._pointers;

                            function s(t) {
                                if (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType || 0 !== t.buttons) {
                                    for (var e = 0; e < o.length; e++)
                                        if (o[e].pointerId === t.pointerId) {
                                            o[e] = t;
                                            break
                                        }
                                    t.touches = o.slice(), t.changedTouches = [t], i(t)
                                }
                            }
                            return t["_leaflet_touchmove" + n] = s, t.addEventListener(this.POINTER_MOVE, s, !1), this
                        },
                        addPointerListenerEnd: function(t, e, i, n) {
                            var o = this._pointers,
                                s = function(t) {
                                    for (var e = 0; e < o.length; e++)
                                        if (o[e].pointerId === t.pointerId) {
                                            o.splice(e, 1);
                                            break
                                        }
                                    t.touches = o.slice(), t.changedTouches = [t], i(t)
                                };
                            return t["_leaflet_touchend" + n] = s, t.addEventListener(this.POINTER_UP, s, !1), t.addEventListener(this.POINTER_CANCEL, s, !1), this
                        },
                        removePointerListener: function(t, e, i) {
                            var n = t["_leaflet_" + e + i];
                            switch (e) {
                                case "touchstart":
                                    t.removeEventListener(this.POINTER_DOWN, n, !1);
                                    break;
                                case "touchmove":
                                    t.removeEventListener(this.POINTER_MOVE, n, !1);
                                    break;
                                case "touchend":
                                    t.removeEventListener(this.POINTER_UP, n, !1), t.removeEventListener(this.POINTER_CANCEL, n, !1)
                            }
                            return this
                        }
                    }), c.Map.mergeOptions({
                        touchZoom: c.Browser.touch && !c.Browser.android23,
                        bounceAtZoomLimits: !0
                    }), c.Map.TouchZoom = c.Handler.extend({
                        addHooks: function() {
                            c.DomEvent.on(this._map._container, "touchstart", this._onTouchStart, this)
                        },
                        removeHooks: function() {
                            c.DomEvent.off(this._map._container, "touchstart", this._onTouchStart, this)
                        },
                        _onTouchStart: function(t) {
                            var e = this._map;
                            if (t.touches && 2 === t.touches.length && !e._animatingZoom && !this._zooming) {
                                var i = e.mouseEventToLayerPoint(t.touches[0]),
                                    n = e.mouseEventToLayerPoint(t.touches[1]),
                                    o = e._getCenterLayerPoint();
                                this._startCenter = i.add(n)._divideBy(2), this._startDist = i.distanceTo(n), this._moved = !1, this._zooming = !0, this._centerOffset = o.subtract(this._startCenter), e._panAnim && e._panAnim.stop(), c.DomEvent.on(a, "touchmove", this._onTouchMove, this).on(a, "touchend", this._onTouchEnd, this), c.DomEvent.preventDefault(t)
                            }
                        },
                        _onTouchMove: function(t) {
                            var e = this._map;
                            if (t.touches && 2 === t.touches.length && this._zooming) {
                                var i = e.mouseEventToLayerPoint(t.touches[0]),
                                    n = e.mouseEventToLayerPoint(t.touches[1]);
                                this._scale = i.distanceTo(n) / this._startDist, this._delta = i._add(n)._divideBy(2)._subtract(this._startCenter), 1 !== this._scale && (!e.options.bounceAtZoomLimits && (e.getZoom() === e.getMinZoom() && this._scale < 1 || e.getZoom() === e.getMaxZoom() && this._scale > 1) || (this._moved || (c.DomUtil.addClass(e._mapPane, "leaflet-touching"), e.fire("movestart").fire("zoomstart"), this._moved = !0), c.Util.cancelAnimFrame(this._animRequest), this._animRequest = c.Util.requestAnimFrame(this._updateOnMove, this, !0, this._map._container), c.DomEvent.preventDefault(t)))
                            }
                        },
                        _updateOnMove: function() {
                            var t = this._map,
                                e = this._getScaleOrigin(),
                                i = t.layerPointToLatLng(e),
                                n = t.getScaleZoom(this._scale);
                            t._animateZoom(i, n, this._startCenter, this._scale, this._delta, !1, !0)
                        },
                        _onTouchEnd: function() {
                            if (this._moved && this._zooming) {
                                var t = this._map;
                                this._zooming = !1, c.DomUtil.removeClass(t._mapPane, "leaflet-touching"), c.Util.cancelAnimFrame(this._animRequest), c.DomEvent.off(a, "touchmove", this._onTouchMove).off(a, "touchend", this._onTouchEnd);
                                var e = this._getScaleOrigin(),
                                    i = t.layerPointToLatLng(e),
                                    n = t.getZoom(),
                                    o = t.getScaleZoom(this._scale) - n,
                                    s = o > 0 ? Math.ceil(o) : Math.floor(o),
                                    r = t._limitZoom(n + s),
                                    h = t.getZoomScale(r) / this._scale;
                                t._animateZoom(i, r, e, h)
                            } else this._zooming = !1
                        },
                        _getScaleOrigin: function() {
                            var t = this._centerOffset.subtract(this._delta).divideBy(this._scale);
                            return this._startCenter.add(t)
                        }
                    }), c.Map.addInitHook("addHandler", "touchZoom", c.Map.TouchZoom), c.Map.mergeOptions({
                        tap: !0,
                        tapTolerance: 15
                    }), c.Map.Tap = c.Handler.extend({
                        addHooks: function() {
                            c.DomEvent.on(this._map._container, "touchstart", this._onDown, this)
                        },
                        removeHooks: function() {
                            c.DomEvent.off(this._map._container, "touchstart", this._onDown, this)
                        },
                        _onDown: function(t) {
                            if (t.touches) {
                                if (c.DomEvent.preventDefault(t), this._fireClick = !0, t.touches.length > 1) return this._fireClick = !1, void clearTimeout(this._holdTimeout);
                                var e = t.touches[0],
                                    i = e.target;
                                this._startPos = this._newPos = new c.Point(e.clientX, e.clientY), i.tagName && "a" === i.tagName.toLowerCase() && c.DomUtil.addClass(i, "leaflet-active"), this._holdTimeout = setTimeout(c.bind(function() {
                                    this._isTapValid() && (this._fireClick = !1, this._onUp(), this._simulateEvent("contextmenu", e))
                                }, this), 1e3), c.DomEvent.on(a, "touchmove", this._onMove, this).on(a, "touchend", this._onUp, this)
                            }
                        },
                        _onUp: function(t) {
                            if (clearTimeout(this._holdTimeout), c.DomEvent.off(a, "touchmove", this._onMove, this).off(a, "touchend", this._onUp, this), this._fireClick && t && t.changedTouches) {
                                var e = t.changedTouches[0],
                                    i = e.target;
                                i && i.tagName && "a" === i.tagName.toLowerCase() && c.DomUtil.removeClass(i, "leaflet-active"), this._isTapValid() && this._simulateEvent("click", e)
                            }
                        },
                        _isTapValid: function() {
                            return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance
                        },
                        _onMove: function(t) {
                            var e = t.touches[0];
                            this._newPos = new c.Point(e.clientX, e.clientY)
                        },
                        _simulateEvent: function(t, e) {
                            var i = a.createEvent("MouseEvents");
                            i._simulated = !0, e.target._simulatedClick = !0, i.initMouseEvent(t, !0, !0, s, 1, e.screenX, e.screenY, e.clientX, e.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(i)
                        }
                    }), c.Browser.touch && !c.Browser.pointer && c.Map.addInitHook("addHandler", "tap", c.Map.Tap), c.Map.mergeOptions({
                        boxZoom: !0
                    }), c.Map.BoxZoom = c.Handler.extend({
                        initialize: function(t) {
                            this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._moved = !1
                        },
                        addHooks: function() {
                            c.DomEvent.on(this._container, "mousedown", this._onMouseDown, this)
                        },
                        removeHooks: function() {
                            c.DomEvent.off(this._container, "mousedown", this._onMouseDown), this._moved = !1
                        },
                        moved: function() {
                            return this._moved
                        },
                        _onMouseDown: function(t) {
                            if (this._moved = !1, !t.shiftKey || 1 !== t.which && 1 !== t.button) return !1;
                            c.DomUtil.disableTextSelection(), c.DomUtil.disableImageDrag(), this._startLayerPoint = this._map.mouseEventToLayerPoint(t), c.DomEvent.on(a, "mousemove", this._onMouseMove, this).on(a, "mouseup", this._onMouseUp, this).on(a, "keydown", this._onKeyDown, this)
                        },
                        _onMouseMove: function(t) {
                            this._moved || (this._box = c.DomUtil.create("div", "leaflet-zoom-box", this._pane), c.DomUtil.setPosition(this._box, this._startLayerPoint), this._container.style.cursor = "crosshair", this._map.fire("boxzoomstart"));
                            var e = this._startLayerPoint,
                                i = this._box,
                                n = this._map.mouseEventToLayerPoint(t),
                                o = n.subtract(e),
                                s = new c.Point(Math.min(n.x, e.x), Math.min(n.y, e.y));
                            c.DomUtil.setPosition(i, s), this._moved = !0, i.style.width = Math.max(0, Math.abs(o.x) - 4) + "px", i.style.height = Math.max(0, Math.abs(o.y) - 4) + "px"
                        },
                        _finish: function() {
                            this._moved && (this._pane.removeChild(this._box), this._container.style.cursor = ""), c.DomUtil.enableTextSelection(), c.DomUtil.enableImageDrag(), c.DomEvent.off(a, "mousemove", this._onMouseMove).off(a, "mouseup", this._onMouseUp).off(a, "keydown", this._onKeyDown)
                        },
                        _onMouseUp: function(t) {
                            this._finish();
                            var e = this._map,
                                i = e.mouseEventToLayerPoint(t);
                            if (!this._startLayerPoint.equals(i)) {
                                var n = new c.LatLngBounds(e.layerPointToLatLng(this._startLayerPoint), e.layerPointToLatLng(i));
                                e.fitBounds(n), e.fire("boxzoomend", {
                                    boxZoomBounds: n
                                })
                            }
                        },
                        _onKeyDown: function(t) {
                            27 === t.keyCode && this._finish()
                        }
                    }), c.Map.addInitHook("addHandler", "boxZoom", c.Map.BoxZoom), c.Map.mergeOptions({
                        keyboard: !0,
                        keyboardPanOffset: 80,
                        keyboardZoomOffset: 1
                    }), c.Map.Keyboard = c.Handler.extend({
                        keyCodes: {
                            left: [37],
                            right: [39],
                            down: [40],
                            up: [38],
                            zoomIn: [187, 107, 61, 171],
                            zoomOut: [189, 109, 173]
                        },
                        initialize: function(t) {
                            this._map = t, this._setPanOffset(t.options.keyboardPanOffset), this._setZoomOffset(t.options.keyboardZoomOffset)
                        },
                        addHooks: function() {
                            var t = this._map._container; - 1 === t.tabIndex && (t.tabIndex = "0"), c.DomEvent.on(t, "focus", this._onFocus, this).on(t, "blur", this._onBlur, this).on(t, "mousedown", this._onMouseDown, this), this._map.on("focus", this._addHooks, this).on("blur", this._removeHooks, this)
                        },
                        removeHooks: function() {
                            this._removeHooks();
                            var t = this._map._container;
                            c.DomEvent.off(t, "focus", this._onFocus, this).off(t, "blur", this._onBlur, this).off(t, "mousedown", this._onMouseDown, this), this._map.off("focus", this._addHooks, this).off("blur", this._removeHooks, this)
                        },
                        _onMouseDown: function() {
                            if (!this._focused) {
                                var t = a.body,
                                    e = a.documentElement,
                                    i = t.scrollTop || e.scrollTop,
                                    n = t.scrollLeft || e.scrollLeft;
                                this._map._container.focus(), s.scrollTo(n, i)
                            }
                        },
                        _onFocus: function() {
                            this._focused = !0, this._map.fire("focus")
                        },
                        _onBlur: function() {
                            this._focused = !1, this._map.fire("blur")
                        },
                        _setPanOffset: function(t) {
                            var e, i, n = this._panKeys = {},
                                o = this.keyCodes;
                            for (e = 0, i = o.left.length; e < i; e++) n[o.left[e]] = [-1 * t, 0];
                            for (e = 0, i = o.right.length; e < i; e++) n[o.right[e]] = [t, 0];
                            for (e = 0, i = o.down.length; e < i; e++) n[o.down[e]] = [0, t];
                            for (e = 0, i = o.up.length; e < i; e++) n[o.up[e]] = [0, -1 * t]
                        },
                        _setZoomOffset: function(t) {
                            var e, i, n = this._zoomKeys = {},
                                o = this.keyCodes;
                            for (e = 0, i = o.zoomIn.length; e < i; e++) n[o.zoomIn[e]] = t;
                            for (e = 0, i = o.zoomOut.length; e < i; e++) n[o.zoomOut[e]] = -t
                        },
                        _addHooks: function() {
                            c.DomEvent.on(a, "keydown", this._onKeyDown, this)
                        },
                        _removeHooks: function() {
                            c.DomEvent.off(a, "keydown", this._onKeyDown, this)
                        },
                        _onKeyDown: function(t) {
                            var e = t.keyCode,
                                i = this._map;
                            if (e in this._panKeys) {
                                if (i._panAnim && i._panAnim._inProgress) return;
                                i.panBy(this._panKeys[e]), i.options.maxBounds && i.panInsideBounds(i.options.maxBounds)
                            } else {
                                if (!(e in this._zoomKeys)) return;
                                i.setZoom(i.getZoom() + this._zoomKeys[e])
                            }
                            c.DomEvent.stop(t)
                        }
                    }), c.Map.addInitHook("addHandler", "keyboard", c.Map.Keyboard), c.Handler.MarkerDrag = c.Handler.extend({
                        initialize: function(t) {
                            this._marker = t
                        },
                        addHooks: function() {
                            var t = this._marker._icon;
                            this._draggable || (this._draggable = new c.Draggable(t, t)), this._draggable.on("dragstart", this._onDragStart, this).on("drag", this._onDrag, this).on("dragend", this._onDragEnd, this), this._draggable.enable(), c.DomUtil.addClass(this._marker._icon, "leaflet-marker-draggable")
                        },
                        removeHooks: function() {
                            this._draggable.off("dragstart", this._onDragStart, this).off("drag", this._onDrag, this).off("dragend", this._onDragEnd, this), this._draggable.disable(), c.DomUtil.removeClass(this._marker._icon, "leaflet-marker-draggable")
                        },
                        moved: function() {
                            return this._draggable && this._draggable._moved
                        },
                        _onDragStart: function() {
                            this._marker.closePopup().fire("movestart").fire("dragstart")
                        },
                        _onDrag: function() {
                            var t = this._marker,
                                e = t._shadow,
                                i = c.DomUtil.getPosition(t._icon),
                                n = t._map.layerPointToLatLng(i);
                            e && c.DomUtil.setPosition(e, i), t._latlng = n, t.fire("move", {
                                latlng: n
                            }).fire("drag")
                        },
                        _onDragEnd: function(t) {
                            this._marker.fire("moveend").fire("dragend", t)
                        }
                    }), c.Control = c.Class.extend({
                        options: {
                            position: "topright"
                        },
                        initialize: function(t) {
                            c.setOptions(this, t)
                        },
                        getPosition: function() {
                            return this.options.position
                        },
                        setPosition: function(t) {
                            var e = this._map;
                            return e && e.removeControl(this), this.options.position = t, e && e.addControl(this), this
                        },
                        getContainer: function() {
                            return this._container
                        },
                        addTo: function(t) {
                            this._map = t;
                            var e = this._container = this.onAdd(t),
                                i = this.getPosition(),
                                n = t._controlCorners[i];
                            return c.DomUtil.addClass(e, "leaflet-control"), -1 !== i.indexOf("bottom") ? n.insertBefore(e, n.firstChild) : n.appendChild(e), this
                        },
                        removeFrom: function(t) {
                            var e = this.getPosition();
                            return t._controlCorners[e].removeChild(this._container), this._map = null, this.onRemove && this.onRemove(t), this
                        },
                        _refocusOnMap: function() {
                            this._map && this._map.getContainer().focus()
                        }
                    }), c.control = function(t) {
                        return new c.Control(t)
                    }, c.Map.include({
                        addControl: function(t) {
                            return t.addTo(this), this
                        },
                        removeControl: function(t) {
                            return t.removeFrom(this), this
                        },
                        _initControlPos: function() {
                            var t = this._controlCorners = {},
                                e = "leaflet-",
                                i = this._controlContainer = c.DomUtil.create("div", e + "control-container", this._container);

                            function n(n, o) {
                                t[n + o] = c.DomUtil.create("div", e + n + " " + e + o, i)
                            }
                            n("top", "left"), n("top", "right"), n("bottom", "left"), n("bottom", "right")
                        },
                        _clearControlPos: function() {
                            this._container.removeChild(this._controlContainer)
                        }
                    }), c.Control.Zoom = c.Control.extend({
                        options: {
                            position: "topleft",
                            zoomInText: "+",
                            zoomInTitle: "Zoom in",
                            zoomOutText: "-",
                            zoomOutTitle: "Zoom out"
                        },
                        onAdd: function(t) {
                            var e = "leaflet-control-zoom",
                                i = c.DomUtil.create("div", e + " leaflet-bar");
                            return this._map = t, this._zoomInButton = this._createButton(this.options.zoomInText, this.options.zoomInTitle, e + "-in", i, this._zoomIn, this), this._zoomOutButton = this._createButton(this.options.zoomOutText, this.options.zoomOutTitle, e + "-out", i, this._zoomOut, this), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), i
                        },
                        onRemove: function(t) {
                            t.off("zoomend zoomlevelschange", this._updateDisabled, this)
                        },
                        _zoomIn: function(t) {
                            this._map.zoomIn(t.shiftKey ? 3 : 1)
                        },
                        _zoomOut: function(t) {
                            this._map.zoomOut(t.shiftKey ? 3 : 1)
                        },
                        _createButton: function(t, e, i, n, o, s) {
                            var a = c.DomUtil.create("a", i, n);
                            a.innerHTML = t, a.href = "#", a.title = e;
                            var r = c.DomEvent.stopPropagation;
                            return c.DomEvent.on(a, "click", r).on(a, "mousedown", r).on(a, "dblclick", r).on(a, "click", c.DomEvent.preventDefault).on(a, "click", o, s).on(a, "click", this._refocusOnMap, s), a
                        },
                        _updateDisabled: function() {
                            var t = this._map,
                                e = "leaflet-disabled";
                            c.DomUtil.removeClass(this._zoomInButton, e), c.DomUtil.removeClass(this._zoomOutButton, e), t._zoom === t.getMinZoom() && c.DomUtil.addClass(this._zoomOutButton, e), t._zoom === t.getMaxZoom() && c.DomUtil.addClass(this._zoomInButton, e)
                        }
                    }), c.Map.mergeOptions({
                        zoomControl: !0
                    }), c.Map.addInitHook(function() {
                        this.options.zoomControl && (this.zoomControl = new c.Control.Zoom, this.addControl(this.zoomControl))
                    }), c.control.zoom = function(t) {
                        return new c.Control.Zoom(t)
                    }, c.Control.Attribution = c.Control.extend({
                        options: {
                            position: "bottomright",
                            prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
                        },
                        initialize: function(t) {
                            c.setOptions(this, t), this._attributions = {}
                        },
                        onAdd: function(t) {
                            for (var e in this._container = c.DomUtil.create("div", "leaflet-control-attribution"), c.DomEvent.disableClickPropagation(this._container), t._layers) t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
                            return t.on("layeradd", this._onLayerAdd, this).on("layerremove", this._onLayerRemove, this), this._update(), this._container
                        },
                        onRemove: function(t) {
                            t.off("layeradd", this._onLayerAdd).off("layerremove", this._onLayerRemove)
                        },
                        setPrefix: function(t) {
                            return this.options.prefix = t, this._update(), this
                        },
                        addAttribution: function(t) {
                            if (t) return this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update(), this
                        },
                        removeAttribution: function(t) {
                            if (t) return this._attributions[t] && (this._attributions[t]--, this._update()), this
                        },
                        _update: function() {
                            if (this._map) {
                                var t = [];
                                for (var e in this._attributions) this._attributions[e] && t.push(e);
                                var i = [];
                                this.options.prefix && i.push(this.options.prefix), t.length && i.push(t.join(", ")), this._container.innerHTML = i.join(" | ")
                            }
                        },
                        _onLayerAdd: function(t) {
                            t.layer.getAttribution && this.addAttribution(t.layer.getAttribution())
                        },
                        _onLayerRemove: function(t) {
                            t.layer.getAttribution && this.removeAttribution(t.layer.getAttribution())
                        }
                    }), c.Map.mergeOptions({
                        attributionControl: !0
                    }), c.Map.addInitHook(function() {
                        this.options.attributionControl && (this.attributionControl = (new c.Control.Attribution).addTo(this))
                    }), c.control.attribution = function(t) {
                        return new c.Control.Attribution(t)
                    }, c.Control.Scale = c.Control.extend({
                        options: {
                            position: "bottomleft",
                            maxWidth: 100,
                            metric: !0,
                            imperial: !0,
                            updateWhenIdle: !1
                        },
                        onAdd: function(t) {
                            this._map = t;
                            var e = c.DomUtil.create("div", "leaflet-control-scale"),
                                i = this.options;
                            return this._addScales(i, "leaflet-control-scale", e), t.on(i.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), e
                        },
                        onRemove: function(t) {
                            t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this)
                        },
                        _addScales: function(t, e, i) {
                            t.metric && (this._mScale = c.DomUtil.create("div", e + "-line", i)), t.imperial && (this._iScale = c.DomUtil.create("div", e + "-line", i))
                        },
                        _update: function() {
                            var t = this._map.getBounds(),
                                e = t.getCenter().lat,
                                i = 6378137 * Math.PI * Math.cos(e * Math.PI / 180) * (t.getNorthEast().lng - t.getSouthWest().lng) / 180,
                                n = this._map.getSize(),
                                o = this.options,
                                s = 0;
                            n.x > 0 && (s = i * (o.maxWidth / n.x)), this._updateScales(o, s)
                        },
                        _updateScales: function(t, e) {
                            t.metric && e && this._updateMetric(e), t.imperial && e && this._updateImperial(e)
                        },
                        _updateMetric: function(t) {
                            var e = this._getRoundNum(t);
                            this._mScale.style.width = this._getScaleWidth(e / t) + "px", this._mScale.innerHTML = e < 1e3 ? e + " m" : e / 1e3 + " km"
                        },
                        _updateImperial: function(t) {
                            var e, i, n, o = 3.2808399 * t,
                                s = this._iScale;
                            o > 5280 ? (i = this._getRoundNum(e = o / 5280), s.style.width = this._getScaleWidth(i / e) + "px", s.innerHTML = i + " mi") : (n = this._getRoundNum(o), s.style.width = this._getScaleWidth(n / o) + "px", s.innerHTML = n + " ft")
                        },
                        _getScaleWidth: function(t) {
                            return Math.round(this.options.maxWidth * t) - 10
                        },
                        _getRoundNum: function(t) {
                            var e = Math.pow(10, (Math.floor(t) + "").length - 1),
                                i = t / e;
                            return e * (i >= 10 ? 10 : i >= 5 ? 5 : i >= 3 ? 3 : i >= 2 ? 2 : 1)
                        }
                    }), c.control.scale = function(t) {
                        return new c.Control.Scale(t)
                    }, c.Control.Layers = c.Control.extend({
                        options: {
                            collapsed: !0,
                            position: "topright",
                            autoZIndex: !0
                        },
                        initialize: function(t, e, i) {
                            for (var n in c.setOptions(this, i), this._layers = {}, this._lastZIndex = 0, this._handlingClick = !1, t) this._addLayer(t[n], n);
                            for (n in e) this._addLayer(e[n], n, !0)
                        },
                        onAdd: function(t) {
                            return this._initLayout(), this._update(), t.on("layeradd", this._onLayerChange, this).on("layerremove", this._onLayerChange, this), this._container
                        },
                        onRemove: function(t) {
                            t.off("layeradd", this._onLayerChange, this).off("layerremove", this._onLayerChange, this)
                        },
                        addBaseLayer: function(t, e) {
                            return this._addLayer(t, e), this._update(), this
                        },
                        addOverlay: function(t, e) {
                            return this._addLayer(t, e, !0), this._update(), this
                        },
                        removeLayer: function(t) {
                            var e = c.stamp(t);
                            return delete this._layers[e], this._update(), this
                        },
                        _initLayout: function() {
                            var t = "leaflet-control-layers",
                                e = this._container = c.DomUtil.create("div", t);
                            e.setAttribute("aria-haspopup", !0), c.Browser.touch ? c.DomEvent.on(e, "click", c.DomEvent.stopPropagation) : c.DomEvent.disableClickPropagation(e).disableScrollPropagation(e);
                            var i = this._form = c.DomUtil.create("form", t + "-list");
                            if (this.options.collapsed) {
                                c.Browser.android || c.DomEvent.on(e, "mouseover", this._expand, this).on(e, "mouseout", this._collapse, this);
                                var n = this._layersLink = c.DomUtil.create("a", t + "-toggle", e);
                                n.href = "#", n.title = "Layers", c.Browser.touch ? c.DomEvent.on(n, "click", c.DomEvent.stop).on(n, "click", this._expand, this) : c.DomEvent.on(n, "focus", this._expand, this), c.DomEvent.on(i, "click", function() {
                                    setTimeout(c.bind(this._onInputClick, this), 0)
                                }, this), this._map.on("click", this._collapse, this)
                            } else this._expand();
                            this._baseLayersList = c.DomUtil.create("div", t + "-base", i), this._separator = c.DomUtil.create("div", t + "-separator", i), this._overlaysList = c.DomUtil.create("div", t + "-overlays", i), e.appendChild(i)
                        },
                        _addLayer: function(t, e, i) {
                            var n = c.stamp(t);
                            this._layers[n] = {
                                layer: t,
                                name: e,
                                overlay: i
                            }, this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex))
                        },
                        _update: function() {
                            if (this._container) {
                                this._baseLayersList.innerHTML = "", this._overlaysList.innerHTML = "";
                                var t, e, i = !1,
                                    n = !1;
                                for (t in this._layers) this._addItem(e = this._layers[t]), n = n || e.overlay, i = i || !e.overlay;
                                this._separator.style.display = n && i ? "" : "none"
                            }
                        },
                        _onLayerChange: function(t) {
                            var e = this._layers[c.stamp(t.layer)];
                            if (e) {
                                this._handlingClick || this._update();
                                var i = e.overlay ? "layeradd" === t.type ? "overlayadd" : "overlayremove" : "layeradd" === t.type ? "baselayerchange" : null;
                                i && this._map.fire(i, e)
                            }
                        },
                        _createRadioElement: function(t, e) {
                            var i = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"';
                            e && (i += ' checked="checked"'), i += "/>";
                            var n = a.createElement("div");
                            return n.innerHTML = i, n.firstChild
                        },
                        _addItem: function(t) {
                            var e, i = a.createElement("label"),
                                n = this._map.hasLayer(t.layer);
                            t.overlay ? ((e = a.createElement("input")).type = "checkbox", e.className = "leaflet-control-layers-selector", e.defaultChecked = n) : e = this._createRadioElement("leaflet-base-layers", n), e.layerId = c.stamp(t.layer), c.DomEvent.on(e, "click", this._onInputClick, this);
                            var o = a.createElement("span");
                            return o.innerHTML = " " + t.name, i.appendChild(e), i.appendChild(o), (t.overlay ? this._overlaysList : this._baseLayersList).appendChild(i), i
                        },
                        _onInputClick: function() {
                            var t, e, i, n = this._form.getElementsByTagName("input"),
                                o = n.length;
                            for (this._handlingClick = !0, t = 0; t < o; t++) i = this._layers[(e = n[t]).layerId], e.checked && !this._map.hasLayer(i.layer) ? this._map.addLayer(i.layer) : !e.checked && this._map.hasLayer(i.layer) && this._map.removeLayer(i.layer);
                            this._handlingClick = !1, this._refocusOnMap()
                        },
                        _expand: function() {
                            c.DomUtil.addClass(this._container, "leaflet-control-layers-expanded")
                        },
                        _collapse: function() {
                            this._container.className = this._container.className.replace(" leaflet-control-layers-expanded", "")
                        }
                    }), c.control.layers = function(t, e, i) {
                        return new c.Control.Layers(t, e, i)
                    }, c.PosAnimation = c.Class.extend({
                        includes: c.Mixin.Events,
                        run: function(t, e, i, n) {
                            this.stop(), this._el = t, this._inProgress = !0, this._newPos = e, this.fire("start"), t.style[c.DomUtil.TRANSITION] = "all " + (i || .25) + "s cubic-bezier(0,0," + (n || .5) + ",1)", c.DomEvent.on(t, c.DomUtil.TRANSITION_END, this._onTransitionEnd, this), c.DomUtil.setPosition(t, e), c.Util.falseFn(t.offsetWidth), this._stepTimer = setInterval(c.bind(this._onStep, this), 50)
                        },
                        stop: function() {
                            this._inProgress && (c.DomUtil.setPosition(this._el, this._getPos()), this._onTransitionEnd(), c.Util.falseFn(this._el.offsetWidth))
                        },
                        _onStep: function() {
                            var t = this._getPos();
                            t ? (this._el._leaflet_pos = t, this.fire("step")) : this._onTransitionEnd()
                        },
                        _transformRe: /([-+]?(?:\d*\.)?\d+)\D*, ([-+]?(?:\d*\.)?\d+)\D*\)/,
                        _getPos: function() {
                            var t, e, i, n = s.getComputedStyle(this._el);
                            if (c.Browser.any3d) {
                                if (!(i = n[c.DomUtil.TRANSFORM].match(this._transformRe))) return;
                                t = parseFloat(i[1]), e = parseFloat(i[2])
                            } else t = parseFloat(n.left), e = parseFloat(n.top);
                            return new c.Point(t, e, !0)
                        },
                        _onTransitionEnd: function() {
                            c.DomEvent.off(this._el, c.DomUtil.TRANSITION_END, this._onTransitionEnd, this), this._inProgress && (this._inProgress = !1, this._el.style[c.DomUtil.TRANSITION] = "", this._el._leaflet_pos = this._newPos, clearInterval(this._stepTimer), this.fire("step").fire("end"))
                        }
                    }), c.Map.include({
                        setView: function(t, e, i) {
                            return e = void 0 === e ? this._zoom : this._limitZoom(e), t = this._limitCenter(c.latLng(t), e, this.options.maxBounds), i = i || {}, this._panAnim && this._panAnim.stop(), this._loaded && !i.reset && !0 !== i && (void 0 !== i.animate && (i.zoom = c.extend({
                                animate: i.animate
                            }, i.zoom), i.pan = c.extend({
                                animate: i.animate
                            }, i.pan)), this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, i.zoom) : this._tryAnimatedPan(t, i.pan)) ? (clearTimeout(this._sizeTimer), this) : (this._resetView(t, e), this)
                        },
                        panBy: function(t, e) {
                            if (t = c.point(t).round(), e = e || {}, !t.x && !t.y) return this;
                            if (this._panAnim || (this._panAnim = new c.PosAnimation, this._panAnim.on({
                                    step: this._onPanTransitionStep,
                                    end: this._onPanTransitionEnd
                                }, this)), e.noMoveStart || this.fire("movestart"), !1 !== e.animate) {
                                c.DomUtil.addClass(this._mapPane, "leaflet-pan-anim");
                                var i = this._getMapPanePos().subtract(t);
                                this._panAnim.run(this._mapPane, i, e.duration || .25, e.easeLinearity)
                            } else this._rawPanBy(t), this.fire("move").fire("moveend");
                            return this
                        },
                        _onPanTransitionStep: function() {
                            this.fire("move")
                        },
                        _onPanTransitionEnd: function() {
                            c.DomUtil.removeClass(this._mapPane, "leaflet-pan-anim"), this.fire("moveend")
                        },
                        _tryAnimatedPan: function(t, e) {
                            var i = this._getCenterOffset(t)._floor();
                            return !(!0 !== (e && e.animate) && !this.getSize().contains(i) || (this.panBy(i, e), 0))
                        }
                    }), c.PosAnimation = c.DomUtil.TRANSITION ? c.PosAnimation : c.PosAnimation.extend({
                        run: function(t, e, i, n) {
                            this.stop(), this._el = t, this._inProgress = !0, this._duration = i || .25, this._easeOutPower = 1 / Math.max(n || .5, .2), this._startPos = c.DomUtil.getPosition(t), this._offset = e.subtract(this._startPos), this._startTime = +new Date, this.fire("start"), this._animate()
                        },
                        stop: function() {
                            this._inProgress && (this._step(), this._complete())
                        },
                        _animate: function() {
                            this._animId = c.Util.requestAnimFrame(this._animate, this), this._step()
                        },
                        _step: function() {
                            var t = +new Date - this._startTime,
                                e = 1e3 * this._duration;
                            t < e ? this._runFrame(this._easeOut(t / e)) : (this._runFrame(1), this._complete())
                        },
                        _runFrame: function(t) {
                            var e = this._startPos.add(this._offset.multiplyBy(t));
                            c.DomUtil.setPosition(this._el, e), this.fire("step")
                        },
                        _complete: function() {
                            c.Util.cancelAnimFrame(this._animId), this._inProgress = !1, this.fire("end")
                        },
                        _easeOut: function(t) {
                            return 1 - Math.pow(1 - t, this._easeOutPower)
                        }
                    }), c.Map.mergeOptions({
                        zoomAnimation: !0,
                        zoomAnimationThreshold: 4
                    }), c.DomUtil.TRANSITION && c.Map.addInitHook(function() {
                        this._zoomAnimated = this.options.zoomAnimation && c.DomUtil.TRANSITION && c.Browser.any3d && !c.Browser.android23 && !c.Browser.mobileOpera, this._zoomAnimated && c.DomEvent.on(this._mapPane, c.DomUtil.TRANSITION_END, this._catchTransitionEnd, this)
                    }), c.Map.include(c.DomUtil.TRANSITION ? {
                        _catchTransitionEnd: function(t) {
                            this._animatingZoom && t.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd()
                        },
                        _nothingToAnimate: function() {
                            return !this._container.getElementsByClassName("leaflet-zoom-animated").length
                        },
                        _tryAnimatedZoom: function(t, e, i) {
                            if (this._animatingZoom) return !0;
                            if (i = i || {}, !this._zoomAnimated || !1 === i.animate || this._nothingToAnimate() || Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold) return !1;
                            var n = this.getZoomScale(e),
                                o = this._getCenterOffset(t)._divideBy(1 - 1 / n),
                                s = this._getCenterLayerPoint()._add(o);
                            return !(!0 !== i.animate && !this.getSize().contains(o) || (this.fire("movestart").fire("zoomstart"), this._animateZoom(t, e, s, n, null, !0), 0))
                        },
                        _animateZoom: function(t, e, i, n, o, s, a) {
                            a || (this._animatingZoom = !0), c.DomUtil.addClass(this._mapPane, "leaflet-zoom-anim"), this._animateToCenter = t, this._animateToZoom = e, c.Draggable && (c.Draggable._disabled = !0), c.Util.requestAnimFrame(function() {
                                this.fire("zoomanim", {
                                    center: t,
                                    zoom: e,
                                    origin: i,
                                    scale: n,
                                    delta: o,
                                    backwards: s
                                }), setTimeout(c.bind(this._onZoomTransitionEnd, this), 250)
                            }, this)
                        },
                        _onZoomTransitionEnd: function() {
                            this._animatingZoom && (this._animatingZoom = !1, c.DomUtil.removeClass(this._mapPane, "leaflet-zoom-anim"), c.Util.requestAnimFrame(function() {
                                this._resetView(this._animateToCenter, this._animateToZoom, !0, !0), c.Draggable && (c.Draggable._disabled = !1)
                            }, this))
                        }
                    } : {}), c.TileLayer.include({
                        _animateZoom: function(t) {
                            this._animating || (this._animating = !0, this._prepareBgBuffer());
                            var e = this._bgBuffer,
                                i = c.DomUtil.TRANSFORM,
                                n = t.delta ? c.DomUtil.getTranslateString(t.delta) : e.style[i],
                                o = c.DomUtil.getScaleString(t.scale, t.origin);
                            e.style[i] = t.backwards ? o + " " + n : n + " " + o
                        },
                        _endZoomAnim: function() {
                            var t = this._tileContainer,
                                e = this._bgBuffer;
                            t.style.visibility = "", t.parentNode.appendChild(t), c.Util.falseFn(e.offsetWidth);
                            var i = this._map.getZoom();
                            (i > this.options.maxZoom || i < this.options.minZoom) && this._clearBgBuffer(), this._animating = !1
                        },
                        _clearBgBuffer: function() {
                            var t = this._map;
                            !t || t._animatingZoom || t.touchZoom._zooming || (this._bgBuffer.innerHTML = "", this._bgBuffer.style[c.DomUtil.TRANSFORM] = "")
                        },
                        _prepareBgBuffer: function() {
                            var t = this._tileContainer,
                                e = this._bgBuffer,
                                i = this._getLoadedTilesPercentage(e),
                                n = this._getLoadedTilesPercentage(t);
                            if (e && i > .5 && n < .5) return t.style.visibility = "hidden", void this._stopLoadingImages(t);
                            e.style.visibility = "hidden", e.style[c.DomUtil.TRANSFORM] = "", this._tileContainer = e, e = this._bgBuffer = t, this._stopLoadingImages(e), clearTimeout(this._clearBgBufferTimer)
                        },
                        _getLoadedTilesPercentage: function(t) {
                            var e, i, n = t.getElementsByTagName("img"),
                                o = 0;
                            for (e = 0, i = n.length; e < i; e++) n[e].complete && o++;
                            return o / i
                        },
                        _stopLoadingImages: function(t) {
                            var e, i, n, o = Array.prototype.slice.call(t.getElementsByTagName("img"));
                            for (e = 0, i = o.length; e < i; e++)(n = o[e]).complete || (n.onload = c.Util.falseFn, n.onerror = c.Util.falseFn, n.src = c.Util.emptyImageUrl, n.parentNode.removeChild(n))
                        }
                    }), c.Map.include({
                        _defaultLocateOptions: {
                            watch: !1,
                            setView: !1,
                            maxZoom: 1 / 0,
                            timeout: 1e4,
                            maximumAge: 0,
                            enableHighAccuracy: !1
                        },
                        locate: function(t) {
                            if (t = this._locateOptions = c.extend(this._defaultLocateOptions, t), !navigator.geolocation) return this._handleGeolocationError({
                                code: 0,
                                message: "Geolocation not supported."
                            }), this;
                            var e = c.bind(this._handleGeolocationResponse, this),
                                i = c.bind(this._handleGeolocationError, this);
                            return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(e, i, t) : navigator.geolocation.getCurrentPosition(e, i, t), this
                        },
                        stopLocate: function() {
                            return navigator.geolocation && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this
                        },
                        _handleGeolocationError: function(t) {
                            var e = t.code,
                                i = t.message || (1 === e ? "permission denied" : 2 === e ? "position unavailable" : "timeout");
                            this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
                                code: e,
                                message: "Geolocation error: " + i + "."
                            })
                        },
                        _handleGeolocationResponse: function(t) {
                            var e = t.coords.latitude,
                                i = t.coords.longitude,
                                n = new c.LatLng(e, i),
                                o = 180 * t.coords.accuracy / 40075017,
                                s = o / Math.cos(c.LatLng.DEG_TO_RAD * e),
                                a = c.latLngBounds([e - o, i - s], [e + o, i + s]),
                                r = this._locateOptions;
                            if (r.setView) {
                                var h = Math.min(this.getBoundsZoom(a), r.maxZoom);
                                this.setView(n, h)
                            }
                            var l = {
                                latlng: n,
                                bounds: a,
                                timestamp: t.timestamp
                            };
                            for (var u in t.coords) "number" == typeof t.coords[u] && (l[u] = t.coords[u]);
                            this.fire("locationfound", l)
                        }
                    })
            }(window, document)
        }
    }
]);