(window.webpackJsonp = window.webpackJsonp || []).push([
    [24], {
        "+6XX": function(n, l, e) {
            var t = e("y1pI");
            n.exports = function(n) {
                return t(this.__data__, n) > -1
            }
        },
        "+K+b": function(n, l, e) {
            var t = e("JHRd");
            n.exports = function(n) {
                var l = new n.constructor(n.byteLength);
                return new t(l).set(new t(n)), l
            }
        },
        "+Qka": function(n, l, e) {
            var t = e("fmRc"),
                o = e("t2Dn"),
                u = e("cq/+"),
                r = e("T1AV"),
                i = e("GoyQ"),
                a = e("mTTR"),
                d = e("itsj");
            n.exports = function n(l, e, s, c, p) {
                l !== e && u(e, function(u, a) {
                    if (i(u)) p || (p = new t), r(l, e, a, s, n, c, p);
                    else {
                        var f = c ? c(d(l, a), u, a + "", l, e, p) : void 0;
                        void 0 === f && (f = u), o(l, a, f)
                    }
                }, a)
            }
        },
        "+Vid": function(n, l, e) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            });
            var t = e("CcnG"),
                o = e("gIcY"),
                u = e("COG4"),
                r = {
                    provide: o.NG_VALIDATORS,
                    useExisting: t.forwardRef(function() {
                        return i
                    }),
                    multi: !0
                },
                i = function() {
                    function n() {}
                    return n.prototype.validate = function(n) {
                        return u.digits(n)
                    }, n.decorators = [{
                        type: t.Directive,
                        args: [{
                            selector: "[digits][formControlName],[digits][formControl],[digits][ngModel]",
                            providers: [r]
                        }]
                    }], n
                }();
            l.DigitsValidator = i
        },
        "+W5N": function(n, l, e) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            });
            var t = e("gIcY"),
                o = e("PoRY"),
                u = e("m9Vx");
            l.phone = function(n) {
                return function(l) {
                    return u.isPresent(t.Validators.required(l)) ? null : o.isValidNumber({
                        phone: l.value,
                        country: n
                    }) ? null : {
                        phone: !0
                    }
                }
            }
        },
        "+c4W": function(n, l, e) {
            var t = e("711d"),
                o = e("4/ic"),
                u = e("9ggG"),
                r = e("9Nap");
            n.exports = function(n) {
                return u(n) ? t(r(n)) : o(n)
            }
        },
        "+h4i": function(n, l, e) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            });
            var t = e("CcnG"),
                o = e("gIcY"),
                u = e("rKjJ"),
                r = {
                    provide: o.NG_VALIDATORS,
                    useExisting: t.forwardRef(function() {
                        return i
                    }),
                    multi: !0
                },
                i = function() {
                    function n() {}
                    return n.prototype.ngOnInit = function() {
                        this.validator = u.lt(this.lt)
                    }, n.prototype.ngOnChanges = function(n) {
                        for (var l in n) "lt" === l && (this.validator = u.lt(n[l].currentValue), this.onChange && this.onChange())
                    }, n.prototype.validate = function(n) {
                        return this.validator(n)
                    }, n.prototype.registerOnValidatorChange = function(n) {
                        this.onChange = n
                    }, n.decorators = [{
                        type: t.Directive,
                        args: [{
                            selector: "[lt][formControlName],[lt][formControl],[lt][ngModel]",
                            providers: [r]
                        }]
                    }], n.propDecorators = {
                        lt: [{
                            type: t.Input
                        }]
                    }, n
                }();
            l.LessThanValidator = i
        },
        "+iFO": function(n, l, e) {
            var t = e("dTAl"),
                o = e("LcsW"),
                u = e("6sVZ");
            n.exports = function(n) {
                return "function" != typeof n.constructor || u(n) ? {} : t(o(n))
            }
        },
        "/6Iq": function(n, l, e) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            });
            var t = e("CcnG"),
                o = e("gIcY"),
                u = e("3+at"),
                r = {
                    provide: o.NG_VALIDATORS,
                    useExisting: t.forwardRef(function() {
                        return i
                    }),
                    multi: !0
                },
                i = function() {
                    function n() {}
                    return n.prototype.ngOnInit = function() {
                        this.validator = u.notEqualTo(this.notEqualTo)
                    }, n.prototype.validate = function(n) {
                        return this.validator(n)
                    }, n.decorators = [{
                        type: t.Directive,
                        args: [{
                            selector: "[notEqualTo][formControlName],[notEqualTo][formControl],[notEqualTo][ngModel]",
                            providers: [r]
                        }]
                    }], n.propDecorators = {
                        notEqualTo: [{
                            type: t.Input
                        }]
                    }, n
                }();
            l.NotEqualToValidator = i
        },
        "/9aa": function(n, l, e) {
            var t = e("NykK"),
                o = e("ExA7");
            n.exports = function(n) {
                return "symbol" == typeof n || o(n) && "[object Symbol]" == t(n)
            }
        },
        "/g4C": function(n, l, e) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            });
            var t = e("CcnG"),
                o = e("gIcY"),
                u = e("pvmI"),
                r = {
                    provide: o.NG_VALIDATORS,
                    useExisting: t.forwardRef(function() {
                        return i
                    }),
                    multi: !0
                },
                i = function() {
                    function n() {}
                    return n.prototype.validate = function(n) {
                        return u.date(n)
                    }, n.decorators = [{
                        type: t.Directive,
                        args: [{
                            selector: "[date][formControlName],[date][formControl],[date][ngModel]",
                            providers: [r]
                        }]
                    }], n
                }();
            l.DateValidator = i
        },
        "03A+": function(n, l, e) {
            var t = e("JTzB"),
                o = e("ExA7"),
                u = Object.prototype,
                r = u.hasOwnProperty,
                i = u.propertyIsEnumerable,
                a = t(function() {
                    return arguments
                }()) ? t : function(n) {
                    return o(n) && r.call(n, "callee") && !i.call(n, "callee")
                };
            n.exports = a
        },
        "0Cz8": function(n, l, e) {
            var t = e("Xi7e"),
                o = e("ebwN"),
                u = e("e4Nc");
            n.exports = function(n, l) {
                var e = this.__data__;
                if (e instanceof t) {
                    var r = e.__data__;
                    if (!o || r.length < 199) return r.push([n, l]), this.size = ++e.size, this;
                    e = this.__data__ = new u(r)
                }
                return e.set(n, l), this.size = e.size, this
            }
        },
        "0DCV": function(n, l, e) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            });
            var t = e("gIcY"),
                o = e("m9Vx");
            l.dateISO = function(n) {
                return o.isPresent(t.Validators.required(n)) ? null : /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(n.value) ? null : {
                    dateISO: !0
                }
            }
        },
        "0RTF": function(n, l, e) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            });
            var t = e("CcnG"),
                o = e("gIcY"),
                u = e("5YF4"),
                r = {
                    provide: o.NG_VALIDATORS,
                    useExisting: t.forwardRef(function() {
                        return i
                    }),
                    multi: !0
                },
                i = function() {
                    function n() {}
                    return n.prototype.ngOnInit = function() {
                        this.validator = u.gte(this.gte)
                    }, n.prototype.ngOnChanges = function(n) {
                        for (var l in n) "gte" === l && (this.validator = u.gte(n[l].currentValue), this.onChange && this.onChange())
                    }, n.prototype.validate = function(n) {
                        return this.validator(n)
                    }, n.prototype.registerOnValidatorChange = function(n) {
                        this.onChange = n
                    }, n.decorators = [{
                        type: t.Directive,
                        args: [{
                            selector: "[gte][formControlName],[gte][formControl],[gte][ngModel]",
                            providers: [r]
                        }]
                    }], n.propDecorators = {
                        gte: [{
                            type: t.Input
                        }]
                    }, n
                }();
            l.GreaterThanEqualValidator = i
        },
        "0UZX": function(n, l, e) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            });
            var t = e("CcnG"),
                o = e("gIcY"),
                u = e("ghU1"),
                r = {
                    provide: o.NG_VALIDATORS,
                    useExisting: t.forwardRef(function() {
                        return i
                    }),
                    multi: !0
                },
                i = function() {
                    function n() {}
                    return n.prototype.ngOnInit = function() {
                        this.validator = u.equalTo(this.equalTo)
                    }, n.prototype.validate = function(n) {
                        return this.validator(n)
                    }, n.decorators = [{
                        type: t.Directive,
                        args: [{
                            selector: "[equalTo][formControlName],[equalTo][formControl],[equalTo][ngModel]",
                            providers: [r]
                        }]
                    }], n.propDecorators = {
                        equalTo: [{
                            type: t.Input
                        }]
                    }, n
                }();
            l.EqualToValidator = i
        },
        "0ycA": function(n, l) {
            n.exports = function() {
                return []
            }
        },
        "1+5i": function(n, l, e) {
            var t = e("w/wX"),
                o = e("sEf8"),
                u = e("mdPL"),
                r = u && u.isSet,
                i = r ? o(r) : t;
            n.exports = i
        },
        "14R3": function(n, l) {
            "undefined" != typeof Element && ("function" != typeof Element.prototype.matches && (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.webkitMatchesSelector || function(n) {
                for (var l = (this.document || this.ownerDocument).querySelectorAll(n), e = 0; l[e] && l[e] !== this;) ++e;
                return Boolean(l[e])
            }), "function" != typeof Element.prototype.closest && (Element.prototype.closest = function(n) {
                for (var l = this; l && 1 === l.nodeType;) {
                    if (l.matches(n)) return l;
                    l = l.parentNode
                }
                return null
            }))
        },
        "15yF": function(n, l, e) {
            "use strict";

            function t(n) {
                for (var e in n) l.hasOwnProperty(e) || (l[e] = n[e])
            }
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), t(e("kVrb")), t(e("lRys"))
        },
        "177e": function(n, l, e) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            });
            var t = e("gIcY"),
                o = e("m9Vx");
            l.json = function(n) {
                if (o.isPresent(t.Validators.required(n))) return null;
                var l = n.value;
                try {
                    var e = JSON.parse(l);
                    if (Boolean(e) && "object" == typeof e) return null
                } catch (n) {}
                return {
                    json: !0
                }
            }
        },
        "1b/I": function(n, l, e) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            });
            var t = e("gIcY"),
                o = e("m9Vx");
            l.lte = function(n) {
                return function(l) {
                    return o.isPresent(n) ? o.isPresent(t.Validators.required(l)) ? null : +l.value <= +n ? null : {
                        lte: !0
                    } : null
                }
            }
        },
        "1gqn": function(n, l) {
            n.exports = function(n) {
                return n && "object" == typeof n && "function" == typeof n.copy && "function" == typeof n.fill && "function" == typeof n.readUInt8
            }
        },
        "1hJj": function(n, l, e) {
            var t = e("e4Nc"),
                o = e("ftKO"),
                u = e("3A9y");

            function r(n) {
                var l = -1,
                    e = null == n ? 0 : n.length;
                for (this.__data__ = new t; ++l < e;) this.add(n[l])
            }
            r.prototype.add = r.prototype.push = o, r.prototype.has = u, n.exports = r
        },
        "29s/": function(n, l, e) {
            var t = e("WEpk"),
                o = e("5T2Y"),
                u = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
            (n.exports = function(n, l) {
                return u[n] || (u[n] = void 0 !== l ? l : {})
            })("versions", []).push({
                version: t.version,
                mode: e("uOPS") ? "pure" : "global",
                copyright: "\xa9 2018 Denis Pushkarev (zloirock.ru)"
            })
        },
        "2GTP": function(n, l, e) {
            var t = e("eaoh");
            n.exports = function(n, l, e) {
                if (t(n), void 0 === l) return n;
                switch (e) {
                    case 1:
                        return function(e) {
                            return n.call(l, e)
                        };
                    case 2:
                        return function(e, t) {
                            return n.call(l, e, t)
                        };
                    case 3:
                        return function(e, t, o) {
                            return n.call(l, e, t, o)
                        }
                }
                return function() {
                    return n.apply(l, arguments)
                }
            }
        },
        "2Gh/": function(n, l, e) {
            "use strict";

            function t(n) {
                for (var e in n) l.hasOwnProperty(e) || (l[e] = n[e])
            }
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), t(e("AHKl")), t(e("5QUp"))
        },
        "2ajD": function(n, l) {
            n.exports = function(n) {
                return n != n
            }
        },
        "2faE": function(n, l, e) {
            var t = e("5K7Z"),
                o = e("eUtF"),
                u = e("G8Mo"),
                r = Object.defineProperty;
            l.f = e("jmDH") ? Object.defineProperty : function(n, l, e) {
                if (t(n), l = u(l, !0), t(e), o) try {
                    return r(n, l, e)
                } catch (n) {}
                if ("get" in e || "set" in e) throw TypeError("Accessors not supported!");
                return "value" in e && (n[l] = e.value), n
            }
        },
        "2gN3": function(n, l, e) {
            var t = e("Kz5y");
            n.exports = t["__core-js_shared__"]
        },
        "3+at": function(n, l, e) {
            "use strict";

            function t(n) {
                for (var e in n) l.hasOwnProperty(e) || (l[e] = n[e])
            }
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), t(e("/6Iq")), t(e("nPu3"))
        },
        "3A9y": function(n, l) {
            n.exports = function(n) {
                return this.__data__.has(n)
            }
        },
        "3ELE": function(n, l, e) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            });
            var t = e("gIcY"),
                o = e("m9Vx");
            l.gt = function(n) {
                return function(l) {
                    return o.isPresent(n) ? o.isPresent(t.Validators.required(l)) ? null : +l.value > +n ? null : {
                        gt: !0
                    } : null
                }
            }
        },
        "3Fdi": function(n, l) {
            var e = Function.prototype.toString;
            n.exports = function(n) {
                if (null != n) {
                    try {
                        return e.call(n)
                    } catch (n) {}
                    try {
                        return n + ""
                    } catch (n) {}
                }
                return ""
            }
        },
        "3L66": function(n, l, e) {
            var t = e("MMmD"),
                o = e("ExA7");
            n.exports = function(n) {
                return o(n) && t(n)
            }
        },
        "4/ic": function(n, l, e) {
            var t = e("ZWtO");
            n.exports = function(n) {
                return function(l) {
                    return t(l, n)
                }
            }
        },
        "44Ds": function(n, l, e) {
            var t = e("e4Nc"),
                o = "Expected a function";

            function u(n, l) {
                if ("function" != typeof n || null != l && "function" != typeof l) throw new TypeError(o);
                var e = function() {
                    var t = arguments,
                        o = l ? l.apply(this, t) : t[0],
                        u = e.cache;
                    if (u.has(o)) return u.get(o);
                    var r = n.apply(this, t);
                    return e.cache = u.set(o, r) || u, r
                };
                return e.cache = new(u.Cache || t), e
            }
            u.Cache = t, n.exports = u
        },
        "4DFU": function(n, l, e) {
            var t = e("+Qka"),
                o = e("GoyQ");
            n.exports = function n(l, e, u, r, i, a) {
                return o(l) && o(e) && (a.set(e, l), t(l, e, void 0, n, a), a.delete(e)), l
            }
        },
        "4Oe1": function(n, l, e) {
            var t = e("YO3V");
            n.exports = function(n) {
                return t(n) ? void 0 : n
            }
        },
        "4kuk": function(n, l, e) {
            var t = e("SfRM"),
                o = e("Hvzi"),
                u = e("u8Dt"),
                r = e("ekgI"),
                i = e("JSQU");

            function a(n) {
                var l = -1,
                    e = null == n ? 0 : n.length;
                for (this.clear(); ++l < e;) {
                    var t = n[l];
                    this.set(t[0], t[1])
                }
            }
            a.prototype.clear = t, a.prototype.delete = o, a.prototype.get = u, a.prototype.has = r, a.prototype.set = i, n.exports = a
        },
        "4qC0": function(n, l, e) {
            var t = e("NykK"),
                o = e("Z0cm"),
                u = e("ExA7");
            n.exports = function(n) {
                return "string" == typeof n || !o(n) && u(n) && "[object String]" == t(n)
            }
        },
        "4sDh": function(n, l, e) {
            var t = e("4uTw"),
                o = e("03A+"),
                u = e("Z0cm"),
                r = e("wJg7"),
                i = e("shjB"),
                a = e("9Nap");
            n.exports = function(n, l, e) {
                for (var d = -1, s = (l = t(l, n)).length, c = !1; ++d < s;) {
                    var p = a(l[d]);
                    if (!(c = null != n && e(n, p))) break;
                    n = n[p]
                }
                return c || ++d != s ? c : !!(s = null == n ? 0 : n.length) && i(s) && r(p, s) && (u(n) || o(n))
            }
        },
        "4uTw": function(n, l, e) {
            var t = e("Z0cm"),
                o = e("9ggG"),
                u = e("GNiM"),
                r = e("dt0z");
            n.exports = function(n, l) {
                return t(n) ? n : o(n, l) ? [n] : u(r(n))
            }
        },
        "5K7Z": function(n, l, e) {
            var t = e("93I4");
            n.exports = function(n) {
                if (!t(n)) throw TypeError(n + " is not an object!");
                return n
            }
        },
        "5OUi": function(n, l, e) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            });
            var t = e("gIcY"),
                o = e("m9Vx");
            l.minDate = function(n) {
                if (!(o.isDate(n) || n instanceof Function)) throw Error("minDate value must be or return a formatted date");
                return function(l) {
                    if (o.isPresent(t.Validators.required(l))) return null;
                    var e = new Date(l.value);
                    return o.isDate(e) ? (n instanceof Function && (n = n()), e >= new Date(n) ? null : {
                        minDate: !0
                    }) : {
                        minDate: !0
                    }
                }
            }
        },
        "5QUp": function(n, l, e) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            });
            var t = e("gIcY"),
                o = e("m9Vx"),
                u = {
                    3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
                    4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
                    5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
                    all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
                };
            l.uuid = function(n) {
                return function(l) {
                    if (o.isPresent(t.Validators.required(l))) return null;
                    var e = l.value;
                    return new RegExp(u[n] || u.all).test(e) ? null : {
                        uuid: !0
                    }
                }
            }
        },
        "5T2Y": function(n, l) {
            var e = n.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
            "number" == typeof __g && (__g = e)
        },
        "5Tg0": function(n, l, e) {
            (function(n) {
                var t = e("Kz5y"),
                    o = "object" == typeof l && l && !l.nodeType && l,
                    u = o && "object" == typeof n && n && !n.nodeType && n,
                    r = u && u.exports === o ? t.Buffer : void 0,
                    i = r ? r.allocUnsafe : void 0;
                n.exports = function(n, l) {
                    if (l) return n.slice();
                    var e = n.length,
                        t = i ? i(e) : new n.constructor(e);
                    return n.copy(t), t
                }
            }).call(this, e("YuTi")(n))
        },
        "5YF4": function(n, l, e) {
            "use strict";

            function t(n) {
                for (var e in n) l.hasOwnProperty(e) || (l[e] = n[e])
            }
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), t(e("0RTF")), t(e("u46e"))
        },
        "5vMV": function(n, l, e) {
            var t = e("B+OT"),
                o = e("NsO/"),
                u = e("W070")(!1),
                r = e("VVlx")("IE_PROTO");
            n.exports = function(n, l) {
                var e, i = o(n),
                    a = 0,
                    d = [];
                for (e in i) e != r && t(i, e) && d.push(e);
                for (; l.length > a;) t(i, e = l[a++]) && (~u(d, e) || d.push(e));
                return d
            }
        },
        "5xlC": function(n, l, e) {
            "use strict";
            var t = e("mrSG").__decorate,
                o = e("mrSG").__metadata,
                u = e("CcnG"),
                r = e("UpIn"),
                i = function() {
                    function n(n) {
                        this.onFileSelected = new u.EventEmitter, this.element = n
                    }
                    return n.prototype.getOptions = function() {
                        return this.uploader.options
                    }, n.prototype.getFilters = function() {
                        return {}
                    }, n.prototype.isEmptyAfterSelection = function() {
                        return !!this.element.nativeElement.attributes.multiple
                    }, n.prototype.onChange = function() {
                        var n = this.element.nativeElement.files,
                            l = this.getOptions(),
                            e = this.getFilters();
                        this.uploader.addToQueue(n, l, e), this.onFileSelected.emit(n), this.isEmptyAfterSelection() && (this.element.nativeElement.value = "")
                    }, n
                }();
            t([u.Input(), o("design:type", r.FileUploader)], i.prototype, "uploader", void 0), t([u.Output(), o("design:type", u.EventEmitter)], i.prototype, "onFileSelected", void 0), t([u.HostListener("change"), o("design:type", Function), o("design:paramtypes", []), o("design:returntype", Object)], i.prototype, "onChange", null), i = t([u.Directive({
                selector: "[ng2FileSelect]"
            })], i), l.FileSelectDirective = i
        },
        "6sVZ": function(n, l) {
            var e = Object.prototype;
            n.exports = function(n) {
                var l = n && n.constructor;
                return n === ("function" == typeof l && l.prototype || e)
            }
        },
        "711d": function(n, l) {
            n.exports = function(n) {
                return function(l) {
                    return null == l ? void 0 : l[n]
                }
            }
        },
        "77Zs": function(n, l, e) {
            var t = e("Xi7e");
            n.exports = function() {
                this.__data__ = new t, this.size = 0
            }
        },
        "7GkX": function(n, l, e) {
            var t = e("b80T"),
                o = e("A90E"),
                u = e("MMmD");
            n.exports = function(n) {
                return u(n) ? t(n) : o(n)
            }
        },
        "7Ix3": function(n, l) {
            n.exports = function(n) {
                var l = [];
                if (null != n)
                    for (var e in Object(n)) l.push(e);
                return l
            }
        },
        "7NRU": function(n, l, e) {
            "use strict";
            e.r(l);
            var t = e("CcnG"),
                o = function() {},
                u = e("pMnS"),
                r = e("gIcY"),
                i = e("c+eF"),
                a = function() {
                    function n(n) {
                        this.pageTitleService = n
                    }
                    return n.prototype.ngOnInit = function() {
                        this.pageTitleService.setTitle("Form Elements")
                    }, n
                }(),
                d = t["\u0275crt"]({
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

            function s(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 668, "div", [
                    ["class", "form-wrapper"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 667, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](2, 0, null, null, 345, "div", [
                    ["class", "col-lg-12 col-xl-6"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](3, 0, null, null, 98, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](4, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](5, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Default Bootstrap elements "])), (n()(), t["\u0275eld"](7, 0, null, null, 94, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](8, 0, null, null, 93, "form", [
                    ["novalidate", ""]
                ], [
                    [2, "ng-untouched", null],
                    [2, "ng-touched", null],
                    [2, "ng-pristine", null],
                    [2, "ng-dirty", null],
                    [2, "ng-valid", null],
                    [2, "ng-invalid", null],
                    [2, "ng-pending", null]
                ], [
                    [null, "submit"],
                    [null, "reset"]
                ], function(n, l, e) {
                    var o = !0;
                    return "submit" === l && (o = !1 !== t["\u0275nov"](n, 10).onSubmit(e) && o), "reset" === l && (o = !1 !== t["\u0275nov"](n, 10).onReset() && o), o
                }, null, null)), t["\u0275did"](9, 16384, null, 0, r["\u0275angular_packages_forms_forms_bg"], [], null, null), t["\u0275did"](10, 4210688, null, 0, r.NgForm, [
                    [8, null],
                    [8, null]
                ], null, null), t["\u0275prd"](2048, null, r.ControlContainer, null, [r.NgForm]), t["\u0275did"](12, 16384, null, 0, r.NgControlStatusGroup, [
                    [4, r.ControlContainer]
                ], null, null), (n()(), t["\u0275eld"](13, 0, null, null, 5, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](14, 0, null, null, 1, "label", [
                    ["for", "formInputEmail1"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Email address"])), (n()(), t["\u0275eld"](16, 0, null, null, 0, "input", [
                    ["aria-describedby", "emailHelp"],
                    ["class", "form-control"],
                    ["id", "formInputEmail1"],
                    ["placeholder", "Enter email"],
                    ["type", "email"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](17, 0, null, null, 1, "small", [
                    ["class", "form-text text-muted"],
                    ["id", "emailHelp"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["We'll never share your email with anyone else."])), (n()(), t["\u0275eld"](19, 0, null, null, 3, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](20, 0, null, null, 1, "label", [
                    ["for", "formInputPassword1"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Password"])), (n()(), t["\u0275eld"](22, 0, null, null, 0, "input", [
                    ["class", "form-control"],
                    ["id", "formInputPassword1"],
                    ["placeholder", "Password"],
                    ["type", "password"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](23, 0, null, null, 23, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](24, 0, null, null, 1, "label", [
                    ["for", "formSelect1"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Example select"])), (n()(), t["\u0275eld"](26, 0, null, null, 20, "select", [
                    ["class", "form-control"],
                    ["id", "formSelect1"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](27, 0, null, null, 3, "option", [], null, null, null, null, null)), t["\u0275did"](28, 147456, null, 0, r.NgSelectOption, [t.ElementRef, t.Renderer2, [8, null]], null, null), t["\u0275did"](29, 147456, null, 0, r["\u0275angular_packages_forms_forms_r"], [t.ElementRef, t.Renderer2, [8, null]], null, null), (n()(), t["\u0275ted"](-1, null, ["1"])), (n()(), t["\u0275eld"](31, 0, null, null, 3, "option", [], null, null, null, null, null)), t["\u0275did"](32, 147456, null, 0, r.NgSelectOption, [t.ElementRef, t.Renderer2, [8, null]], null, null), t["\u0275did"](33, 147456, null, 0, r["\u0275angular_packages_forms_forms_r"], [t.ElementRef, t.Renderer2, [8, null]], null, null), (n()(), t["\u0275ted"](-1, null, ["2"])), (n()(), t["\u0275eld"](35, 0, null, null, 3, "option", [], null, null, null, null, null)), t["\u0275did"](36, 147456, null, 0, r.NgSelectOption, [t.ElementRef, t.Renderer2, [8, null]], null, null), t["\u0275did"](37, 147456, null, 0, r["\u0275angular_packages_forms_forms_r"], [t.ElementRef, t.Renderer2, [8, null]], null, null), (n()(), t["\u0275ted"](-1, null, ["3"])), (n()(), t["\u0275eld"](39, 0, null, null, 3, "option", [], null, null, null, null, null)), t["\u0275did"](40, 147456, null, 0, r.NgSelectOption, [t.ElementRef, t.Renderer2, [8, null]], null, null), t["\u0275did"](41, 147456, null, 0, r["\u0275angular_packages_forms_forms_r"], [t.ElementRef, t.Renderer2, [8, null]], null, null), (n()(), t["\u0275ted"](-1, null, ["4"])), (n()(), t["\u0275eld"](43, 0, null, null, 3, "option", [], null, null, null, null, null)), t["\u0275did"](44, 147456, null, 0, r.NgSelectOption, [t.ElementRef, t.Renderer2, [8, null]], null, null), t["\u0275did"](45, 147456, null, 0, r["\u0275angular_packages_forms_forms_r"], [t.ElementRef, t.Renderer2, [8, null]], null, null), (n()(), t["\u0275ted"](-1, null, ["5"])), (n()(), t["\u0275eld"](47, 0, null, null, 23, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](48, 0, null, null, 1, "label", [
                    ["for", "formSelect2"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Example multiple select"])), (n()(), t["\u0275eld"](50, 0, null, null, 20, "select", [
                    ["class", "form-control"],
                    ["id", "formSelect2"],
                    ["multiple", ""]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](51, 0, null, null, 3, "option", [], null, null, null, null, null)), t["\u0275did"](52, 147456, null, 0, r.NgSelectOption, [t.ElementRef, t.Renderer2, [8, null]], null, null), t["\u0275did"](53, 147456, null, 0, r["\u0275angular_packages_forms_forms_r"], [t.ElementRef, t.Renderer2, [8, null]], null, null), (n()(), t["\u0275ted"](-1, null, ["1"])), (n()(), t["\u0275eld"](55, 0, null, null, 3, "option", [], null, null, null, null, null)), t["\u0275did"](56, 147456, null, 0, r.NgSelectOption, [t.ElementRef, t.Renderer2, [8, null]], null, null), t["\u0275did"](57, 147456, null, 0, r["\u0275angular_packages_forms_forms_r"], [t.ElementRef, t.Renderer2, [8, null]], null, null), (n()(), t["\u0275ted"](-1, null, ["2"])), (n()(), t["\u0275eld"](59, 0, null, null, 3, "option", [], null, null, null, null, null)), t["\u0275did"](60, 147456, null, 0, r.NgSelectOption, [t.ElementRef, t.Renderer2, [8, null]], null, null), t["\u0275did"](61, 147456, null, 0, r["\u0275angular_packages_forms_forms_r"], [t.ElementRef, t.Renderer2, [8, null]], null, null), (n()(), t["\u0275ted"](-1, null, ["3"])), (n()(), t["\u0275eld"](63, 0, null, null, 3, "option", [], null, null, null, null, null)), t["\u0275did"](64, 147456, null, 0, r.NgSelectOption, [t.ElementRef, t.Renderer2, [8, null]], null, null), t["\u0275did"](65, 147456, null, 0, r["\u0275angular_packages_forms_forms_r"], [t.ElementRef, t.Renderer2, [8, null]], null, null), (n()(), t["\u0275ted"](-1, null, ["4"])), (n()(), t["\u0275eld"](67, 0, null, null, 3, "option", [], null, null, null, null, null)), t["\u0275did"](68, 147456, null, 0, r.NgSelectOption, [t.ElementRef, t.Renderer2, [8, null]], null, null), t["\u0275did"](69, 147456, null, 0, r["\u0275angular_packages_forms_forms_r"], [t.ElementRef, t.Renderer2, [8, null]], null, null), (n()(), t["\u0275ted"](-1, null, ["5"])), (n()(), t["\u0275eld"](71, 0, null, null, 3, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](72, 0, null, null, 1, "label", [
                    ["for", "formTextarea"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Example textarea"])), (n()(), t["\u0275eld"](74, 0, null, null, 0, "textarea", [
                    ["class", "form-control"],
                    ["id", "formTextarea"],
                    ["rows", "3"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](75, 0, null, null, 5, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](76, 0, null, null, 1, "label", [
                    ["for", "formInputFile"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["File input"])), (n()(), t["\u0275eld"](78, 0, null, null, 0, "input", [
                    ["aria-describedby", "fileHelp"],
                    ["class", "form-control-file"],
                    ["id", "formInputFile"],
                    ["type", "file"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](79, 0, null, null, 1, "small", [
                    ["class", "form-text text-muted"],
                    ["id", "fileHelp"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line."])), (n()(), t["\u0275eld"](81, 0, null, null, 14, "fieldset", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](82, 0, null, null, 1, "legend", [], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Radio buttons"])), (n()(), t["\u0275eld"](84, 0, null, null, 3, "div", [
                    ["class", "form-check"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](85, 0, null, null, 2, "label", [
                    ["class", "form-check-label"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](86, 0, null, null, 0, "input", [
                    ["checked", ""],
                    ["class", "form-check-input"],
                    ["id", "optionsRadios1"],
                    ["name", "optionsRadios"],
                    ["type", "radio"],
                    ["value", "option1"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, [" Option one is this and that\u2014be sure to include why it's great "])), (n()(), t["\u0275eld"](88, 0, null, null, 3, "div", [
                    ["class", "form-check"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](89, 0, null, null, 2, "label", [
                    ["class", "form-check-label"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](90, 0, null, null, 0, "input", [
                    ["class", "form-check-input"],
                    ["id", "optionsRadios2"],
                    ["name", "optionsRadios"],
                    ["type", "radio"],
                    ["value", "option2"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, [" Option two can be something else and selecting it will deselect option one "])), (n()(), t["\u0275eld"](92, 0, null, null, 3, "div", [
                    ["class", "form-check disabled"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](93, 0, null, null, 2, "label", [
                    ["class", "form-check-label"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](94, 0, null, null, 0, "input", [
                    ["class", "form-check-input"],
                    ["disabled", ""],
                    ["id", "optionsRadios3"],
                    ["name", "optionsRadios"],
                    ["type", "radio"],
                    ["value", "option3"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, [" Option three is disabled "])), (n()(), t["\u0275eld"](96, 0, null, null, 3, "div", [
                    ["class", "form-check"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](97, 0, null, null, 2, "label", [
                    ["class", "form-check-label"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](98, 0, null, null, 0, "input", [
                    ["class", "form-check-input"],
                    ["type", "checkbox"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, [" Check me out "])), (n()(), t["\u0275eld"](100, 0, null, null, 1, "button", [
                    ["class", "btn btn-primary btn-lg btn-square"],
                    ["type", "submit"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Submit"])), (n()(), t["\u0275eld"](102, 0, null, null, 74, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](103, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](104, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Textual inputs"])), (n()(), t["\u0275eld"](106, 0, null, null, 70, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](107, 0, null, null, 69, "form", [
                    ["novalidate", ""]
                ], [
                    [2, "ng-untouched", null],
                    [2, "ng-touched", null],
                    [2, "ng-pristine", null],
                    [2, "ng-dirty", null],
                    [2, "ng-valid", null],
                    [2, "ng-invalid", null],
                    [2, "ng-pending", null]
                ], [
                    [null, "submit"],
                    [null, "reset"]
                ], function(n, l, e) {
                    var o = !0;
                    return "submit" === l && (o = !1 !== t["\u0275nov"](n, 109).onSubmit(e) && o), "reset" === l && (o = !1 !== t["\u0275nov"](n, 109).onReset() && o), o
                }, null, null)), t["\u0275did"](108, 16384, null, 0, r["\u0275angular_packages_forms_forms_bg"], [], null, null), t["\u0275did"](109, 4210688, null, 0, r.NgForm, [
                    [8, null],
                    [8, null]
                ], null, null), t["\u0275prd"](2048, null, r.ControlContainer, null, [r.NgForm]), t["\u0275did"](111, 16384, null, 0, r.NgControlStatusGroup, [
                    [4, r.ControlContainer]
                ], null, null), (n()(), t["\u0275eld"](112, 0, null, null, 4, "div", [
                    ["class", "form-group row"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](113, 0, null, null, 1, "label", [
                    ["class", "col-12 col-md-2 col-xl-2 col-form-label"],
                    ["for", "text-input"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Text"])), (n()(), t["\u0275eld"](115, 0, null, null, 1, "div", [
                    ["class", "col-12 col-md-10 col-xl-10"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](116, 0, null, null, 0, "input", [
                    ["class", "form-control"],
                    ["id", "text-input"],
                    ["type", "text"],
                    ["value", "Artisanal kale"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](117, 0, null, null, 4, "div", [
                    ["class", "form-group row"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](118, 0, null, null, 1, "label", [
                    ["class", "col-12 col-md-2 col-xl-2 col-form-label"],
                    ["for", "search-input"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Search"])), (n()(), t["\u0275eld"](120, 0, null, null, 1, "div", [
                    ["class", "col-12 col-md-10 col-xl-10"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](121, 0, null, null, 0, "input", [
                    ["class", "form-control"],
                    ["id", "search-input"],
                    ["type", "search"],
                    ["value", "How do I shoot web"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](122, 0, null, null, 4, "div", [
                    ["class", "form-group row"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](123, 0, null, null, 1, "label", [
                    ["class", "col-12 col-md-2 col-xl-2 col-form-label"],
                    ["for", "email-input"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Email"])), (n()(), t["\u0275eld"](125, 0, null, null, 1, "div", [
                    ["class", "col-12 col-md-10 col-xl-10"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](126, 0, null, null, 0, "input", [
                    ["class", "form-control"],
                    ["id", "email-input"],
                    ["type", "email"],
                    ["value", "bootstrap@example.com"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](127, 0, null, null, 4, "div", [
                    ["class", "form-group row"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](128, 0, null, null, 1, "label", [
                    ["class", "col-12 col-md-2 col-xl-2 col-form-label"],
                    ["for", "url-input"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["URL"])), (n()(), t["\u0275eld"](130, 0, null, null, 1, "div", [
                    ["class", "col-12 col-md-10 col-xl-10"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](131, 0, null, null, 0, "input", [
                    ["class", "form-control"],
                    ["id", "url-input"],
                    ["type", "url"],
                    ["value", "https://getbootstrap.com"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](132, 0, null, null, 4, "div", [
                    ["class", "form-group row"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](133, 0, null, null, 1, "label", [
                    ["class", "col-12 col-md-2 col-xl-2 col-form-label"],
                    ["for", "tel-input"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Telephone"])), (n()(), t["\u0275eld"](135, 0, null, null, 1, "div", [
                    ["class", "col-12 col-md-10 col-xl-10"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](136, 0, null, null, 0, "input", [
                    ["class", "form-control"],
                    ["id", "tel-input"],
                    ["type", "tel"],
                    ["value", "1-(555)-555-5555"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](137, 0, null, null, 4, "div", [
                    ["class", "form-group row"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](138, 0, null, null, 1, "label", [
                    ["class", "col-12 col-md-2 col-xl-2 col-form-label"],
                    ["for", "password-input"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Password"])), (n()(), t["\u0275eld"](140, 0, null, null, 1, "div", [
                    ["class", "col-12 col-md-10 col-xl-10"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](141, 0, null, null, 0, "input", [
                    ["class", "form-control"],
                    ["id", "password-input"],
                    ["type", "password"],
                    ["value", "hunter2"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](142, 0, null, null, 4, "div", [
                    ["class", "form-group row"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](143, 0, null, null, 1, "label", [
                    ["class", "col-12 col-md-2 col-xl-2 col-form-label"],
                    ["for", "number-input"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Number"])), (n()(), t["\u0275eld"](145, 0, null, null, 1, "div", [
                    ["class", "col-12 col-md-10 col-xl-10"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](146, 0, null, null, 0, "input", [
                    ["class", "form-control"],
                    ["id", "number-input"],
                    ["type", "number"],
                    ["value", "42"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](147, 0, null, null, 4, "div", [
                    ["class", "form-group row"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](148, 0, null, null, 1, "label", [
                    ["class", "col-12 col-md-2 col-xl-2 col-form-label"],
                    ["for", "datetime-local-input"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Date and time"])), (n()(), t["\u0275eld"](150, 0, null, null, 1, "div", [
                    ["class", "col-12 col-md-10 col-xl-10"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](151, 0, null, null, 0, "input", [
                    ["class", "form-control"],
                    ["id", "datetime-local-input"],
                    ["type", "datetime-local"],
                    ["value", "2011-08-19T13:45:00"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](152, 0, null, null, 4, "div", [
                    ["class", "form-group row"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](153, 0, null, null, 1, "label", [
                    ["class", "col-12 col-md-2 col-xl-2 col-form-label"],
                    ["for", "date-input"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Date"])), (n()(), t["\u0275eld"](155, 0, null, null, 1, "div", [
                    ["class", "col-12 col-md-10 col-xl-10"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](156, 0, null, null, 0, "input", [
                    ["class", "form-control"],
                    ["id", "date-input"],
                    ["type", "date"],
                    ["value", "2011-08-19"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](157, 0, null, null, 4, "div", [
                    ["class", "form-group row"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](158, 0, null, null, 1, "label", [
                    ["class", "col-12 col-md-2 col-xl-2 col-form-label"],
                    ["for", "month-input"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Month"])), (n()(), t["\u0275eld"](160, 0, null, null, 1, "div", [
                    ["class", "col-12 col-md-10 col-xl-10"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](161, 0, null, null, 0, "input", [
                    ["class", "form-control"],
                    ["id", "month-input"],
                    ["type", "month"],
                    ["value", "2011-08"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](162, 0, null, null, 4, "div", [
                    ["class", "form-group row"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](163, 0, null, null, 1, "label", [
                    ["class", "col-12 col-md-2 col-xl-2 col-form-label"],
                    ["for", "week-input"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Week"])), (n()(), t["\u0275eld"](165, 0, null, null, 1, "div", [
                    ["class", "col-12 col-md-10 col-xl-10"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](166, 0, null, null, 0, "input", [
                    ["class", "form-control"],
                    ["id", "week-input"],
                    ["type", "week"],
                    ["value", "2011-W33"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](167, 0, null, null, 4, "div", [
                    ["class", "form-group row"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](168, 0, null, null, 1, "label", [
                    ["class", "col-12 col-md-2 col-xl-2 col-form-label"],
                    ["for", "time-input"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Time"])), (n()(), t["\u0275eld"](170, 0, null, null, 1, "div", [
                    ["class", "col-12 col-md-10 col-xl-10"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](171, 0, null, null, 0, "input", [
                    ["class", "form-control"],
                    ["id", "time-input"],
                    ["type", "time"],
                    ["value", "13:45:00"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](172, 0, null, null, 4, "div", [
                    ["class", "form-group row"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](173, 0, null, null, 1, "label", [
                    ["class", "col-12 col-md-2 col-xl-2 col-form-label"],
                    ["for", "color-input"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Color"])), (n()(), t["\u0275eld"](175, 0, null, null, 1, "div", [
                    ["class", "col-12 col-md-10 col-xl-10"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](176, 0, null, null, 0, "input", [
                    ["class", "form-control"],
                    ["id", "color-input"],
                    ["type", "color"],
                    ["value", "#563d7c"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](177, 0, null, null, 17, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](178, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](179, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Form Group"])), (n()(), t["\u0275eld"](181, 0, null, null, 13, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](182, 0, null, null, 12, "form", [
                    ["novalidate", ""]
                ], [
                    [2, "ng-untouched", null],
                    [2, "ng-touched", null],
                    [2, "ng-pristine", null],
                    [2, "ng-dirty", null],
                    [2, "ng-valid", null],
                    [2, "ng-invalid", null],
                    [2, "ng-pending", null]
                ], [
                    [null, "submit"],
                    [null, "reset"]
                ], function(n, l, e) {
                    var o = !0;
                    return "submit" === l && (o = !1 !== t["\u0275nov"](n, 184).onSubmit(e) && o), "reset" === l && (o = !1 !== t["\u0275nov"](n, 184).onReset() && o), o
                }, null, null)), t["\u0275did"](183, 16384, null, 0, r["\u0275angular_packages_forms_forms_bg"], [], null, null), t["\u0275did"](184, 4210688, null, 0, r.NgForm, [
                    [8, null],
                    [8, null]
                ], null, null), t["\u0275prd"](2048, null, r.ControlContainer, null, [r.NgForm]), t["\u0275did"](186, 16384, null, 0, r.NgControlStatusGroup, [
                    [4, r.ControlContainer]
                ], null, null), (n()(), t["\u0275eld"](187, 0, null, null, 3, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](188, 0, null, null, 1, "label", [
                    ["for", "formGroupExampleInput"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Example label"])), (n()(), t["\u0275eld"](190, 0, null, null, 0, "input", [
                    ["class", "form-control"],
                    ["id", "formGroupExampleInput"],
                    ["placeholder", "Example input"],
                    ["type", "text"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](191, 0, null, null, 3, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](192, 0, null, null, 1, "label", [
                    ["for", "formGroupExampleInput2"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Another label"])), (n()(), t["\u0275eld"](194, 0, null, null, 0, "input", [
                    ["class", "form-control"],
                    ["id", "formGroupExampleInput2"],
                    ["placeholder", "Another input"],
                    ["type", "text"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](195, 0, null, null, 24, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](196, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](197, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Inline forms"])), (n()(), t["\u0275eld"](199, 0, null, null, 20, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](200, 0, null, null, 19, "form", [
                    ["class", "form-inline"],
                    ["novalidate", ""]
                ], [
                    [2, "ng-untouched", null],
                    [2, "ng-touched", null],
                    [2, "ng-pristine", null],
                    [2, "ng-dirty", null],
                    [2, "ng-valid", null],
                    [2, "ng-invalid", null],
                    [2, "ng-pending", null]
                ], [
                    [null, "submit"],
                    [null, "reset"]
                ], function(n, l, e) {
                    var o = !0;
                    return "submit" === l && (o = !1 !== t["\u0275nov"](n, 202).onSubmit(e) && o), "reset" === l && (o = !1 !== t["\u0275nov"](n, 202).onReset() && o), o
                }, null, null)), t["\u0275did"](201, 16384, null, 0, r["\u0275angular_packages_forms_forms_bg"], [], null, null), t["\u0275did"](202, 4210688, null, 0, r.NgForm, [
                    [8, null],
                    [8, null]
                ], null, null), t["\u0275prd"](2048, null, r.ControlContainer, null, [r.NgForm]), t["\u0275did"](204, 16384, null, 0, r.NgControlStatusGroup, [
                    [4, r.ControlContainer]
                ], null, null), (n()(), t["\u0275eld"](205, 0, null, null, 1, "label", [
                    ["class", "sr-only"],
                    ["for", "inlineFormInput"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Name"])), (n()(), t["\u0275eld"](207, 0, null, null, 0, "input", [
                    ["class", "form-control mb-2 mr-sm-2 mb-sm-0"],
                    ["id", "inlineFormInput"],
                    ["placeholder", "Jane Doe"],
                    ["type", "text"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](208, 0, null, null, 1, "label", [
                    ["class", "sr-only"],
                    ["for", "inlineFormInputGroup"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Username"])), (n()(), t["\u0275eld"](210, 0, null, null, 3, "div", [
                    ["class", "input-group mb-2 mr-sm-2 mb-sm-0"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](211, 0, null, null, 1, "div", [
                    ["class", "input-group-addon"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["@"])), (n()(), t["\u0275eld"](213, 0, null, null, 0, "input", [
                    ["class", "form-control"],
                    ["id", "inlineFormInputGroup"],
                    ["placeholder", "Username"],
                    ["type", "text"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](214, 0, null, null, 3, "div", [
                    ["class", "form-check mb-2 mr-sm-2 mb-sm-0"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](215, 0, null, null, 2, "label", [
                    ["class", "form-check-label"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](216, 0, null, null, 0, "input", [
                    ["class", "form-check-input"],
                    ["type", "checkbox"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, [" Remember me "])), (n()(), t["\u0275eld"](218, 0, null, null, 1, "button", [
                    ["class", "btn btn-primary btn-lg btn-square"],
                    ["type", "submit"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Submit"])), (n()(), t["\u0275eld"](220, 0, null, null, 32, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](221, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](222, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Custom Controls"])), (n()(), t["\u0275eld"](224, 0, null, null, 28, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](225, 0, null, null, 1, "p", [], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Custom form controls and selects are also supported. "])), (n()(), t["\u0275eld"](227, 0, null, null, 1, "label", [
                    ["class", "mr-sm-2"],
                    ["for", "inlineFormCustomSelect"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Preference"])), (n()(), t["\u0275eld"](229, 0, null, null, 16, "select", [
                    ["class", "custom-select mb-2 mr-sm-2 mb-sm-0"],
                    ["id", "inlineFormCustomSelect"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](230, 0, null, null, 3, "option", [
                    ["selected", ""]
                ], null, null, null, null, null)), t["\u0275did"](231, 147456, null, 0, r.NgSelectOption, [t.ElementRef, t.Renderer2, [8, null]], null, null), t["\u0275did"](232, 147456, null, 0, r["\u0275angular_packages_forms_forms_r"], [t.ElementRef, t.Renderer2, [8, null]], null, null), (n()(), t["\u0275ted"](-1, null, ["Choose..."])), (n()(), t["\u0275eld"](234, 0, null, null, 3, "option", [
                    ["value", "1"]
                ], null, null, null, null, null)), t["\u0275did"](235, 147456, null, 0, r.NgSelectOption, [t.ElementRef, t.Renderer2, [8, null]], {
                    value: [0, "value"]
                }, null), t["\u0275did"](236, 147456, null, 0, r["\u0275angular_packages_forms_forms_r"], [t.ElementRef, t.Renderer2, [8, null]], {
                    value: [0, "value"]
                }, null), (n()(), t["\u0275ted"](-1, null, ["One"])), (n()(), t["\u0275eld"](238, 0, null, null, 3, "option", [
                    ["value", "2"]
                ], null, null, null, null, null)), t["\u0275did"](239, 147456, null, 0, r.NgSelectOption, [t.ElementRef, t.Renderer2, [8, null]], {
                    value: [0, "value"]
                }, null), t["\u0275did"](240, 147456, null, 0, r["\u0275angular_packages_forms_forms_r"], [t.ElementRef, t.Renderer2, [8, null]], {
                    value: [0, "value"]
                }, null), (n()(), t["\u0275ted"](-1, null, ["Two"])), (n()(), t["\u0275eld"](242, 0, null, null, 3, "option", [
                    ["value", "3"]
                ], null, null, null, null, null)), t["\u0275did"](243, 147456, null, 0, r.NgSelectOption, [t.ElementRef, t.Renderer2, [8, null]], {
                    value: [0, "value"]
                }, null), t["\u0275did"](244, 147456, null, 0, r["\u0275angular_packages_forms_forms_r"], [t.ElementRef, t.Renderer2, [8, null]], {
                    value: [0, "value"]
                }, null), (n()(), t["\u0275ted"](-1, null, ["Three"])), (n()(), t["\u0275eld"](246, 0, null, null, 4, "label", [
                    ["class", "custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](247, 0, null, null, 0, "input", [
                    ["class", "custom-control-input"],
                    ["type", "checkbox"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](248, 0, null, null, 0, "span", [
                    ["class", "custom-control-indicator"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](249, 0, null, null, 1, "span", [
                    ["class", "custom-control-description"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Remember my preference"])), (n()(), t["\u0275eld"](251, 0, null, null, 1, "button", [
                    ["class", "btn btn-primary"],
                    ["type", "submit"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Submit"])), (n()(), t["\u0275eld"](253, 0, null, null, 57, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](254, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](255, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Checkboxes and radios "])), (n()(), t["\u0275eld"](257, 0, null, null, 53, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](258, 0, null, null, 10, "div", [
                    ["class", "mb-3"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](259, 0, null, null, 1, "h3", [
                    ["class", "chk-ui-heading"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Default (stacked)"])), (n()(), t["\u0275eld"](261, 0, null, null, 3, "div", [
                    ["class", "form-check"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](262, 0, null, null, 2, "label", [
                    ["class", "form-check-label"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](263, 0, null, null, 0, "input", [
                    ["class", "form-check-input"],
                    ["type", "checkbox"],
                    ["value", ""]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, [" Option one is this and that\u2014be sure to include why it's great "])), (n()(), t["\u0275eld"](265, 0, null, null, 3, "div", [
                    ["class", "form-check disabled"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](266, 0, null, null, 2, "label", [
                    ["class", "form-check-label"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](267, 0, null, null, 0, "input", [
                    ["class", "form-check-input"],
                    ["disabled", ""],
                    ["type", "checkbox"],
                    ["value", ""]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, [" Option two is disabled "])), (n()(), t["\u0275eld"](269, 0, null, null, 13, "div", [
                    ["class", "mb-3"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](270, 0, null, null, 0, "h3", [
                    ["class", "chk-ui-heading"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](271, 0, null, null, 3, "div", [
                    ["class", "form-check"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](272, 0, null, null, 2, "label", [
                    ["class", "form-check-label"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](273, 0, null, null, 0, "input", [
                    ["checked", ""],
                    ["class", "form-check-input"],
                    ["id", "exampleRadios1"],
                    ["name", "exampleRadios"],
                    ["type", "radio"],
                    ["value", "option1"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, [" Option one is this and that\u2014be sure to include why it's great "])), (n()(), t["\u0275eld"](275, 0, null, null, 3, "div", [
                    ["class", "form-check"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](276, 0, null, null, 2, "label", [
                    ["class", "form-check-label"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](277, 0, null, null, 0, "input", [
                    ["class", "form-check-input"],
                    ["id", "exampleRadios2"],
                    ["name", "exampleRadios"],
                    ["type", "radio"],
                    ["value", "option2"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, [" Option two can be something else and selecting it will deselect option one "])), (n()(), t["\u0275eld"](279, 0, null, null, 3, "div", [
                    ["class", "form-check disabled"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](280, 0, null, null, 2, "label", [
                    ["class", "form-check-label"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](281, 0, null, null, 0, "input", [
                    ["class", "form-check-input"],
                    ["disabled", ""],
                    ["id", "exampleRadios3"],
                    ["name", "exampleRadios"],
                    ["type", "radio"],
                    ["value", "option3"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, [" Option three is disabled "])), (n()(), t["\u0275eld"](283, 0, null, null, 14, "div", [
                    ["class", "mb-3"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](284, 0, null, null, 1, "h3", [
                    ["class", "chk-ui-heading"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Inline"])), (n()(), t["\u0275eld"](286, 0, null, null, 3, "div", [
                    ["class", "form-check form-check-inline"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](287, 0, null, null, 2, "label", [
                    ["class", "form-check-label"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](288, 0, null, null, 0, "input", [
                    ["class", "form-check-input"],
                    ["id", "inlineCheckbox1"],
                    ["type", "checkbox"],
                    ["value", "option1"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, [" 1 "])), (n()(), t["\u0275eld"](290, 0, null, null, 3, "div", [
                    ["class", "form-check form-check-inline"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](291, 0, null, null, 2, "label", [
                    ["class", "form-check-label"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](292, 0, null, null, 0, "input", [
                    ["class", "form-check-input"],
                    ["id", "inlineCheckbox2"],
                    ["type", "checkbox"],
                    ["value", "option2"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, [" 2 "])), (n()(), t["\u0275eld"](294, 0, null, null, 3, "div", [
                    ["class", "form-check form-check-inline disabled"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](295, 0, null, null, 2, "label", [
                    ["class", "form-check-label"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](296, 0, null, null, 0, "input", [
                    ["class", "form-check-input"],
                    ["disabled", ""],
                    ["id", "inlineCheckbox3"],
                    ["type", "checkbox"],
                    ["value", "option3"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, [" 3 "])), (n()(), t["\u0275eld"](298, 0, null, null, 12, "div", [
                    ["class", "mb-3"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](299, 0, null, null, 3, "div", [
                    ["class", "form-check form-check-inline"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](300, 0, null, null, 2, "label", [
                    ["class", "form-check-label"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](301, 0, null, null, 0, "input", [
                    ["class", "form-check-input"],
                    ["id", "inlineRadio1"],
                    ["name", "inlineRadioOptions"],
                    ["type", "radio"],
                    ["value", "option1"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, [" 1 "])), (n()(), t["\u0275eld"](303, 0, null, null, 3, "div", [
                    ["class", "form-check form-check-inline"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](304, 0, null, null, 2, "label", [
                    ["class", "form-check-label"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](305, 0, null, null, 0, "input", [
                    ["class", "form-check-input"],
                    ["id", "inlineRadio2"],
                    ["name", "inlineRadioOptions"],
                    ["type", "radio"],
                    ["value", "option2"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, [" 2 "])), (n()(), t["\u0275eld"](307, 0, null, null, 3, "div", [
                    ["class", "form-check form-check-inline disabled"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](308, 0, null, null, 2, "label", [
                    ["class", "form-check-label"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](309, 0, null, null, 0, "input", [
                    ["class", "form-check-input"],
                    ["disabled", ""],
                    ["id", "inlineRadio3"],
                    ["name", "inlineRadioOptions"],
                    ["type", "radio"],
                    ["value", "option3"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, [" 3 "])), (n()(), t["\u0275eld"](311, 0, null, null, 36, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](312, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](313, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Static controls"])), (n()(), t["\u0275eld"](315, 0, null, null, 32, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](316, 0, null, null, 15, "form", [
                    ["novalidate", ""]
                ], [
                    [2, "ng-untouched", null],
                    [2, "ng-touched", null],
                    [2, "ng-pristine", null],
                    [2, "ng-dirty", null],
                    [2, "ng-valid", null],
                    [2, "ng-invalid", null],
                    [2, "ng-pending", null]
                ], [
                    [null, "submit"],
                    [null, "reset"]
                ], function(n, l, e) {
                    var o = !0;
                    return "submit" === l && (o = !1 !== t["\u0275nov"](n, 318).onSubmit(e) && o), "reset" === l && (o = !1 !== t["\u0275nov"](n, 318).onReset() && o), o
                }, null, null)), t["\u0275did"](317, 16384, null, 0, r["\u0275angular_packages_forms_forms_bg"], [], null, null), t["\u0275did"](318, 4210688, null, 0, r.NgForm, [
                    [8, null],
                    [8, null]
                ], null, null), t["\u0275prd"](2048, null, r.ControlContainer, null, [r.NgForm]), t["\u0275did"](320, 16384, null, 0, r.NgControlStatusGroup, [
                    [4, r.ControlContainer]
                ], null, null), (n()(), t["\u0275eld"](321, 0, null, null, 5, "div", [
                    ["class", "form-group row"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](322, 0, null, null, 1, "label", [
                    ["class", "col-sm-2 col-form-label"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Email"])), (n()(), t["\u0275eld"](324, 0, null, null, 2, "div", [
                    ["class", "col-sm-10"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](325, 0, null, null, 1, "p", [
                    ["class", "form-control-static"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["email@example.com"])), (n()(), t["\u0275eld"](327, 0, null, null, 4, "div", [
                    ["class", "form-group row"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](328, 0, null, null, 1, "label", [
                    ["class", "col-sm-2 col-form-label"],
                    ["for", "inputPassword"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Password"])), (n()(), t["\u0275eld"](330, 0, null, null, 1, "div", [
                    ["class", "col-sm-10"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](331, 0, null, null, 0, "input", [
                    ["class", "form-control"],
                    ["id", "inputPassword"],
                    ["placeholder", "Password"],
                    ["type", "password"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](332, 0, null, null, 15, "form", [
                    ["class", "form-inline"],
                    ["novalidate", ""]
                ], [
                    [2, "ng-untouched", null],
                    [2, "ng-touched", null],
                    [2, "ng-pristine", null],
                    [2, "ng-dirty", null],
                    [2, "ng-valid", null],
                    [2, "ng-invalid", null],
                    [2, "ng-pending", null]
                ], [
                    [null, "submit"],
                    [null, "reset"]
                ], function(n, l, e) {
                    var o = !0;
                    return "submit" === l && (o = !1 !== t["\u0275nov"](n, 334).onSubmit(e) && o), "reset" === l && (o = !1 !== t["\u0275nov"](n, 334).onReset() && o), o
                }, null, null)), t["\u0275did"](333, 16384, null, 0, r["\u0275angular_packages_forms_forms_bg"], [], null, null), t["\u0275did"](334, 4210688, null, 0, r.NgForm, [
                    [8, null],
                    [8, null]
                ], null, null), t["\u0275prd"](2048, null, r.ControlContainer, null, [r.NgForm]), t["\u0275did"](336, 16384, null, 0, r.NgControlStatusGroup, [
                    [4, r.ControlContainer]
                ], null, null), (n()(), t["\u0275eld"](337, 0, null, null, 4, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](338, 0, null, null, 1, "label", [
                    ["class", "sr-only"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Email"])), (n()(), t["\u0275eld"](340, 0, null, null, 1, "p", [
                    ["class", "form-control-static"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["email@example.com"])), (n()(), t["\u0275eld"](342, 0, null, null, 3, "div", [
                    ["class", "form-group mx-sm-3"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](343, 0, null, null, 1, "label", [
                    ["class", "sr-only"],
                    ["for", "inputPassword2"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Password"])), (n()(), t["\u0275eld"](345, 0, null, null, 0, "input", [
                    ["class", "form-control"],
                    ["id", "inputPassword2"],
                    ["placeholder", "Password"],
                    ["type", "password"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](346, 0, null, null, 1, "button", [
                    ["class", "btn btn-primary btn-lg btn-square"],
                    ["type", "submit"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Confirm identity"])), (n()(), t["\u0275eld"](348, 0, null, null, 320, "div", [
                    ["class", "col-lg-12 col-xl-6"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](349, 0, null, null, 28, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](350, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](351, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Disabled states"])), (n()(), t["\u0275eld"](353, 0, null, null, 24, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](354, 0, null, null, 23, "form", [
                    ["novalidate", ""]
                ], [
                    [2, "ng-untouched", null],
                    [2, "ng-touched", null],
                    [2, "ng-pristine", null],
                    [2, "ng-dirty", null],
                    [2, "ng-valid", null],
                    [2, "ng-invalid", null],
                    [2, "ng-pending", null]
                ], [
                    [null, "submit"],
                    [null, "reset"]
                ], function(n, l, e) {
                    var o = !0;
                    return "submit" === l && (o = !1 !== t["\u0275nov"](n, 356).onSubmit(e) && o), "reset" === l && (o = !1 !== t["\u0275nov"](n, 356).onReset() && o), o
                }, null, null)), t["\u0275did"](355, 16384, null, 0, r["\u0275angular_packages_forms_forms_bg"], [], null, null), t["\u0275did"](356, 4210688, null, 0, r.NgForm, [
                    [8, null],
                    [8, null]
                ], null, null), t["\u0275prd"](2048, null, r.ControlContainer, null, [r.NgForm]), t["\u0275did"](358, 16384, null, 0, r.NgControlStatusGroup, [
                    [4, r.ControlContainer]
                ], null, null), (n()(), t["\u0275eld"](359, 0, null, null, 18, "fieldset", [
                    ["disabled", ""]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](360, 0, null, null, 3, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](361, 0, null, null, 1, "label", [
                    ["for", "disabledTextInput"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Disabled input"])), (n()(), t["\u0275eld"](363, 0, null, null, 0, "input", [
                    ["class", "form-control"],
                    ["id", "disabledTextInput"],
                    ["placeholder", "Disabled input"],
                    ["type", "text"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](364, 0, null, null, 7, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](365, 0, null, null, 1, "label", [
                    ["for", "disabledSelect"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Disabled select menu"])), (n()(), t["\u0275eld"](367, 0, null, null, 4, "select", [
                    ["class", "form-control"],
                    ["id", "disabledSelect"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](368, 0, null, null, 3, "option", [], null, null, null, null, null)), t["\u0275did"](369, 147456, null, 0, r.NgSelectOption, [t.ElementRef, t.Renderer2, [8, null]], null, null), t["\u0275did"](370, 147456, null, 0, r["\u0275angular_packages_forms_forms_r"], [t.ElementRef, t.Renderer2, [8, null]], null, null), (n()(), t["\u0275ted"](-1, null, ["Disabled select"])), (n()(), t["\u0275eld"](372, 0, null, null, 3, "div", [
                    ["class", "checkbox"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](373, 0, null, null, 2, "label", [], null, null, null, null, null)), (n()(), t["\u0275eld"](374, 0, null, null, 0, "input", [
                    ["type", "checkbox"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, [" Can't check this "])), (n()(), t["\u0275eld"](376, 0, null, null, 1, "button", [
                    ["class", "btn btn-primary btn-square"],
                    ["type", "submit"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Submit"])), (n()(), t["\u0275eld"](378, 0, null, null, 16, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](379, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](380, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Readonly inputs"])), (n()(), t["\u0275eld"](382, 0, null, null, 12, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](383, 0, null, null, 4, "p", [
                    ["class", "small text-muted"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Add the "])), (n()(), t["\u0275eld"](385, 0, null, null, 1, "code", [], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["readonly"])), (n()(), t["\u0275ted"](-1, null, [" boolean attribute on an input to prevent modification of the input\u2019s value. Read-only inputs appear lighter (just like disabled inputs), but retain the standard cursor."])), (n()(), t["\u0275eld"](388, 0, null, null, 6, "form", [
                    ["novalidate", ""]
                ], [
                    [2, "ng-untouched", null],
                    [2, "ng-touched", null],
                    [2, "ng-pristine", null],
                    [2, "ng-dirty", null],
                    [2, "ng-valid", null],
                    [2, "ng-invalid", null],
                    [2, "ng-pending", null]
                ], [
                    [null, "submit"],
                    [null, "reset"]
                ], function(n, l, e) {
                    var o = !0;
                    return "submit" === l && (o = !1 !== t["\u0275nov"](n, 390).onSubmit(e) && o), "reset" === l && (o = !1 !== t["\u0275nov"](n, 390).onReset() && o), o
                }, null, null)), t["\u0275did"](389, 16384, null, 0, r["\u0275angular_packages_forms_forms_bg"], [], null, null), t["\u0275did"](390, 4210688, null, 0, r.NgForm, [
                    [8, null],
                    [8, null]
                ], null, null), t["\u0275prd"](2048, null, r.ControlContainer, null, [r.NgForm]), t["\u0275did"](392, 16384, null, 0, r.NgControlStatusGroup, [
                    [4, r.ControlContainer]
                ], null, null), (n()(), t["\u0275eld"](393, 0, null, null, 1, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](394, 0, null, null, 0, "input", [
                    ["class", "form-control"],
                    ["placeholder", "Readonly input here\u2026"],
                    ["readonly", ""],
                    ["type", "text"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](395, 0, null, null, 33, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](396, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](397, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Control sizing"])), (n()(), t["\u0275eld"](399, 0, null, null, 29, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](400, 0, null, null, 28, "form", [
                    ["novalidate", ""]
                ], [
                    [2, "ng-untouched", null],
                    [2, "ng-touched", null],
                    [2, "ng-pristine", null],
                    [2, "ng-dirty", null],
                    [2, "ng-valid", null],
                    [2, "ng-invalid", null],
                    [2, "ng-pending", null]
                ], [
                    [null, "submit"],
                    [null, "reset"]
                ], function(n, l, e) {
                    var o = !0;
                    return "submit" === l && (o = !1 !== t["\u0275nov"](n, 402).onSubmit(e) && o), "reset" === l && (o = !1 !== t["\u0275nov"](n, 402).onReset() && o), o
                }, null, null)), t["\u0275did"](401, 16384, null, 0, r["\u0275angular_packages_forms_forms_bg"], [], null, null), t["\u0275did"](402, 4210688, null, 0, r.NgForm, [
                    [8, null],
                    [8, null]
                ], null, null), t["\u0275prd"](2048, null, r.ControlContainer, null, [r.NgForm]), t["\u0275did"](404, 16384, null, 0, r.NgControlStatusGroup, [
                    [4, r.ControlContainer]
                ], null, null), (n()(), t["\u0275eld"](405, 0, null, null, 1, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](406, 0, null, null, 0, "input", [
                    ["class", "form-control form-control-lg"],
                    ["placeholder", ".form-control-lg"],
                    ["type", "text"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](407, 0, null, null, 1, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](408, 0, null, null, 0, "input", [
                    ["class", "form-control"],
                    ["placeholder", "Default input"],
                    ["type", "text"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](409, 0, null, null, 1, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](410, 0, null, null, 0, "input", [
                    ["class", "form-control form-control-sm"],
                    ["placeholder", ".form-control-sm"],
                    ["type", "text"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](411, 0, null, null, 5, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](412, 0, null, null, 4, "select", [
                    ["class", "form-control form-control-lg"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](413, 0, null, null, 3, "option", [], null, null, null, null, null)), t["\u0275did"](414, 147456, null, 0, r.NgSelectOption, [t.ElementRef, t.Renderer2, [8, null]], null, null), t["\u0275did"](415, 147456, null, 0, r["\u0275angular_packages_forms_forms_r"], [t.ElementRef, t.Renderer2, [8, null]], null, null), (n()(), t["\u0275ted"](-1, null, ["Large select"])), (n()(), t["\u0275eld"](417, 0, null, null, 5, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](418, 0, null, null, 4, "select", [
                    ["class", "form-control"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](419, 0, null, null, 3, "option", [], null, null, null, null, null)), t["\u0275did"](420, 147456, null, 0, r.NgSelectOption, [t.ElementRef, t.Renderer2, [8, null]], null, null), t["\u0275did"](421, 147456, null, 0, r["\u0275angular_packages_forms_forms_r"], [t.ElementRef, t.Renderer2, [8, null]], null, null), (n()(), t["\u0275ted"](-1, null, ["Default select"])), (n()(), t["\u0275eld"](423, 0, null, null, 5, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](424, 0, null, null, 4, "select", [
                    ["class", "form-control form-control-sm"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](425, 0, null, null, 3, "option", [], null, null, null, null, null)), t["\u0275did"](426, 147456, null, 0, r.NgSelectOption, [t.ElementRef, t.Renderer2, [8, null]], null, null), t["\u0275did"](427, 147456, null, 0, r["\u0275angular_packages_forms_forms_r"], [t.ElementRef, t.Renderer2, [8, null]], null, null), (n()(), t["\u0275ted"](-1, null, ["Small select"])), (n()(), t["\u0275eld"](429, 0, null, null, 11, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](430, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](431, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Column sizing"])), (n()(), t["\u0275eld"](433, 0, null, null, 7, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](434, 0, null, null, 6, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](435, 0, null, null, 1, "div", [
                    ["class", "col-2"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](436, 0, null, null, 0, "input", [
                    ["class", "form-control"],
                    ["placeholder", ".col-2"],
                    ["type", "text"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](437, 0, null, null, 1, "div", [
                    ["class", "col-3"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](438, 0, null, null, 0, "input", [
                    ["class", "form-control"],
                    ["placeholder", ".col-3"],
                    ["type", "text"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](439, 0, null, null, 1, "div", [
                    ["class", "col-4"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](440, 0, null, null, 0, "input", [
                    ["class", "form-control"],
                    ["placeholder", ".col-4"],
                    ["type", "text"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](441, 0, null, null, 25, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](442, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](443, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Help text"])), (n()(), t["\u0275eld"](445, 0, null, null, 21, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](446, 0, null, null, 9, "form", [
                    ["class", "mb-4"],
                    ["novalidate", ""]
                ], [
                    [2, "ng-untouched", null],
                    [2, "ng-touched", null],
                    [2, "ng-pristine", null],
                    [2, "ng-dirty", null],
                    [2, "ng-valid", null],
                    [2, "ng-invalid", null],
                    [2, "ng-pending", null]
                ], [
                    [null, "submit"],
                    [null, "reset"]
                ], function(n, l, e) {
                    var o = !0;
                    return "submit" === l && (o = !1 !== t["\u0275nov"](n, 448).onSubmit(e) && o), "reset" === l && (o = !1 !== t["\u0275nov"](n, 448).onReset() && o), o
                }, null, null)), t["\u0275did"](447, 16384, null, 0, r["\u0275angular_packages_forms_forms_bg"], [], null, null), t["\u0275did"](448, 4210688, null, 0, r.NgForm, [
                    [8, null],
                    [8, null]
                ], null, null), t["\u0275prd"](2048, null, r.ControlContainer, null, [r.NgForm]), t["\u0275did"](450, 16384, null, 0, r.NgControlStatusGroup, [
                    [4, r.ControlContainer]
                ], null, null), (n()(), t["\u0275eld"](451, 0, null, null, 1, "label", [
                    ["for", "inputPassword5"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Password"])), (n()(), t["\u0275eld"](453, 0, null, null, 0, "input", [
                    ["aria-describedby", "passwordHelpBlock"],
                    ["class", "form-control"],
                    ["id", "inputPassword5"],
                    ["type", "password"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](454, 0, null, null, 1, "p", [
                    ["class", "form-text text-muted"],
                    ["id", "passwordHelpBlock"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, [" Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji. "])), (n()(), t["\u0275eld"](456, 0, null, null, 10, "form", [
                    ["class", "form-inline"],
                    ["novalidate", ""]
                ], [
                    [2, "ng-untouched", null],
                    [2, "ng-touched", null],
                    [2, "ng-pristine", null],
                    [2, "ng-dirty", null],
                    [2, "ng-valid", null],
                    [2, "ng-invalid", null],
                    [2, "ng-pending", null]
                ], [
                    [null, "submit"],
                    [null, "reset"]
                ], function(n, l, e) {
                    var o = !0;
                    return "submit" === l && (o = !1 !== t["\u0275nov"](n, 458).onSubmit(e) && o), "reset" === l && (o = !1 !== t["\u0275nov"](n, 458).onReset() && o), o
                }, null, null)), t["\u0275did"](457, 16384, null, 0, r["\u0275angular_packages_forms_forms_bg"], [], null, null), t["\u0275did"](458, 4210688, null, 0, r.NgForm, [
                    [8, null],
                    [8, null]
                ], null, null), t["\u0275prd"](2048, null, r.ControlContainer, null, [r.NgForm]), t["\u0275did"](460, 16384, null, 0, r.NgControlStatusGroup, [
                    [4, r.ControlContainer]
                ], null, null), (n()(), t["\u0275eld"](461, 0, null, null, 5, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](462, 0, null, null, 1, "label", [
                    ["for", "inputPassword4"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Password"])), (n()(), t["\u0275eld"](464, 0, null, null, 0, "input", [
                    ["aria-describedby", "passwordHelpInline"],
                    ["class", "form-control mx-sm-3"],
                    ["id", "inputPassword4"],
                    ["type", "password"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](465, 0, null, null, 1, "small", [
                    ["class", "text-muted"],
                    ["id", "passwordHelpInline"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, [" Must be 8-20 characters long. "])), (n()(), t["\u0275eld"](467, 0, null, null, 33, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](468, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](469, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Validation"])), (n()(), t["\u0275eld"](471, 0, null, null, 29, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](472, 0, null, null, 28, "form", [
                    ["novalidate", ""]
                ], [
                    [2, "ng-untouched", null],
                    [2, "ng-touched", null],
                    [2, "ng-pristine", null],
                    [2, "ng-dirty", null],
                    [2, "ng-valid", null],
                    [2, "ng-invalid", null],
                    [2, "ng-pending", null]
                ], [
                    [null, "submit"],
                    [null, "reset"]
                ], function(n, l, e) {
                    var o = !0;
                    return "submit" === l && (o = !1 !== t["\u0275nov"](n, 474).onSubmit(e) && o), "reset" === l && (o = !1 !== t["\u0275nov"](n, 474).onReset() && o), o
                }, null, null)), t["\u0275did"](473, 16384, null, 0, r["\u0275angular_packages_forms_forms_bg"], [], null, null), t["\u0275did"](474, 4210688, null, 0, r.NgForm, [
                    [8, null],
                    [8, null]
                ], null, null), t["\u0275prd"](2048, null, r.ControlContainer, null, [r.NgForm]), t["\u0275did"](476, 16384, null, 0, r.NgControlStatusGroup, [
                    [4, r.ControlContainer]
                ], null, null), (n()(), t["\u0275eld"](477, 0, null, null, 7, "div", [
                    ["class", "form-group has-success"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](478, 0, null, null, 1, "label", [
                    ["class", "form-control-label"],
                    ["for", "inputSuccess1"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Input with success"])), (n()(), t["\u0275eld"](480, 0, null, null, 0, "input", [
                    ["class", "form-control form-control-success"],
                    ["id", "inputSuccess1"],
                    ["type", "text"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](481, 0, null, null, 1, "div", [
                    ["class", "form-control-feedback"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Success! You've done it."])), (n()(), t["\u0275eld"](483, 0, null, null, 1, "small", [
                    ["class", "form-text text-muted"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Example help text that remains unchanged."])), (n()(), t["\u0275eld"](485, 0, null, null, 7, "div", [
                    ["class", "form-group has-warning"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](486, 0, null, null, 1, "label", [
                    ["class", "form-control-label"],
                    ["for", "inputWarning1"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Input with warning"])), (n()(), t["\u0275eld"](488, 0, null, null, 0, "input", [
                    ["class", "form-control form-control-warning"],
                    ["id", "inputWarning1"],
                    ["type", "text"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](489, 0, null, null, 1, "div", [
                    ["class", "form-control-feedback"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Shucks, check the formatting of that and try again."])), (n()(), t["\u0275eld"](491, 0, null, null, 1, "small", [
                    ["class", "form-text text-muted"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Example help text that remains unchanged."])), (n()(), t["\u0275eld"](493, 0, null, null, 7, "div", [
                    ["class", "form-group has-danger"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](494, 0, null, null, 1, "label", [
                    ["class", "form-control-label"],
                    ["for", "inputDanger1"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Input with danger"])), (n()(), t["\u0275eld"](496, 0, null, null, 0, "input", [
                    ["class", "form-control form-control-danger"],
                    ["id", "inputDanger1"],
                    ["type", "text"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](497, 0, null, null, 1, "div", [
                    ["class", "form-control-feedback"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Sorry, that username's taken. Try another?"])), (n()(), t["\u0275eld"](499, 0, null, null, 1, "small", [
                    ["class", "form-text text-muted"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Example help text that remains unchanged."])), (n()(), t["\u0275eld"](501, 0, null, null, 36, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](502, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](503, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Horizontal Validation"])), (n()(), t["\u0275eld"](505, 0, null, null, 32, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](506, 0, null, null, 31, "form", [
                    ["novalidate", ""]
                ], [
                    [2, "ng-untouched", null],
                    [2, "ng-touched", null],
                    [2, "ng-pristine", null],
                    [2, "ng-dirty", null],
                    [2, "ng-valid", null],
                    [2, "ng-invalid", null],
                    [2, "ng-pending", null]
                ], [
                    [null, "submit"],
                    [null, "reset"]
                ], function(n, l, e) {
                    var o = !0;
                    return "submit" === l && (o = !1 !== t["\u0275nov"](n, 508).onSubmit(e) && o), "reset" === l && (o = !1 !== t["\u0275nov"](n, 508).onReset() && o), o
                }, null, null)), t["\u0275did"](507, 16384, null, 0, r["\u0275angular_packages_forms_forms_bg"], [], null, null), t["\u0275did"](508, 4210688, null, 0, r.NgForm, [
                    [8, null],
                    [8, null]
                ], null, null), t["\u0275prd"](2048, null, r.ControlContainer, null, [r.NgForm]), t["\u0275did"](510, 16384, null, 0, r.NgControlStatusGroup, [
                    [4, r.ControlContainer]
                ], null, null), (n()(), t["\u0275eld"](511, 0, null, null, 8, "div", [
                    ["class", "form-group row has-success"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](512, 0, null, null, 1, "label", [
                    ["class", "col-sm-2 col-form-label"],
                    ["for", "inputHorizontalSuccess"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Email"])), (n()(), t["\u0275eld"](514, 0, null, null, 5, "div", [
                    ["class", "col-sm-10"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](515, 0, null, null, 0, "input", [
                    ["class", "form-control form-control-success"],
                    ["id", "inputHorizontalSuccess"],
                    ["placeholder", "name@example.com"],
                    ["type", "email"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](516, 0, null, null, 1, "div", [
                    ["class", "form-control-feedback"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Success! You've done it."])), (n()(), t["\u0275eld"](518, 0, null, null, 1, "small", [
                    ["class", "form-text text-muted"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Example help text that remains unchanged."])), (n()(), t["\u0275eld"](520, 0, null, null, 8, "div", [
                    ["class", "form-group row has-warning"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](521, 0, null, null, 1, "label", [
                    ["class", "col-sm-2 col-form-label"],
                    ["for", "inputHorizontalWarning"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Email"])), (n()(), t["\u0275eld"](523, 0, null, null, 5, "div", [
                    ["class", "col-sm-10"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](524, 0, null, null, 0, "input", [
                    ["class", "form-control form-control-warning"],
                    ["id", "inputHorizontalWarning"],
                    ["placeholder", "name@example.com"],
                    ["type", "email"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](525, 0, null, null, 1, "div", [
                    ["class", "form-control-feedback"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Shucks, check the formatting of that and try again."])), (n()(), t["\u0275eld"](527, 0, null, null, 1, "small", [
                    ["class", "form-text text-muted"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Example help text that remains unchanged."])), (n()(), t["\u0275eld"](529, 0, null, null, 8, "div", [
                    ["class", "form-group row has-danger"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](530, 0, null, null, 1, "label", [
                    ["class", "col-sm-2 col-form-label"],
                    ["for", "inputHorizontalDnger"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Email"])), (n()(), t["\u0275eld"](532, 0, null, null, 5, "div", [
                    ["class", "col-sm-10"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](533, 0, null, null, 0, "input", [
                    ["class", "form-control form-control-danger"],
                    ["id", "inputHorizontalDnger"],
                    ["placeholder", "name@example.com"],
                    ["type", "email"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](534, 0, null, null, 1, "div", [
                    ["class", "form-control-feedback"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Sorry, that username's taken. Try another?"])), (n()(), t["\u0275eld"](536, 0, null, null, 1, "small", [
                    ["class", "form-text text-muted"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Example help text that remains unchanged."])), (n()(), t["\u0275eld"](538, 0, null, null, 16, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](539, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](540, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Checkboxes & radios"])), (n()(), t["\u0275eld"](542, 0, null, null, 12, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](543, 0, null, null, 3, "div", [
                    ["class", "form-check has-success"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](544, 0, null, null, 2, "label", [
                    ["class", "form-check-label"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](545, 0, null, null, 0, "input", [
                    ["class", "form-check-input"],
                    ["id", "checkboxSuccess"],
                    ["type", "checkbox"],
                    ["value", "option1"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, [" Checkbox with success "])), (n()(), t["\u0275eld"](547, 0, null, null, 3, "div", [
                    ["class", "form-check has-warning"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](548, 0, null, null, 2, "label", [
                    ["class", "form-check-label"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](549, 0, null, null, 0, "input", [
                    ["class", "form-check-input"],
                    ["id", "checkboxWarning"],
                    ["type", "checkbox"],
                    ["value", "option1"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, [" Checkbox with warning "])), (n()(), t["\u0275eld"](551, 0, null, null, 3, "div", [
                    ["class", "form-check has-danger"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](552, 0, null, null, 2, "label", [
                    ["class", "form-check-label"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](553, 0, null, null, 0, "input", [
                    ["class", "form-check-input"],
                    ["id", "checkboxDanger"],
                    ["type", "checkbox"],
                    ["value", "option1"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, [" Checkbox with danger "])), (n()(), t["\u0275eld"](555, 0, null, null, 43, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](556, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](557, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Custom forms"])), (n()(), t["\u0275eld"](559, 0, null, null, 39, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](560, 0, null, null, 38, "form", [
                    ["novalidate", ""]
                ], [
                    [2, "ng-untouched", null],
                    [2, "ng-touched", null],
                    [2, "ng-pristine", null],
                    [2, "ng-dirty", null],
                    [2, "ng-valid", null],
                    [2, "ng-invalid", null],
                    [2, "ng-pending", null]
                ], [
                    [null, "submit"],
                    [null, "reset"]
                ], function(n, l, e) {
                    var o = !0;
                    return "submit" === l && (o = !1 !== t["\u0275nov"](n, 562).onSubmit(e) && o), "reset" === l && (o = !1 !== t["\u0275nov"](n, 562).onReset() && o), o
                }, null, null)), t["\u0275did"](561, 16384, null, 0, r["\u0275angular_packages_forms_forms_bg"], [], null, null), t["\u0275did"](562, 4210688, null, 0, r.NgForm, [
                    [8, null],
                    [8, null]
                ], null, null), t["\u0275prd"](2048, null, r.ControlContainer, null, [r.NgForm]), t["\u0275did"](564, 16384, null, 0, r.NgControlStatusGroup, [
                    [4, r.ControlContainer]
                ], null, null), (n()(), t["\u0275eld"](565, 0, null, null, 2, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](566, 0, null, null, 1, "p", [
                    ["class", "text-muted"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Checkboxes"])), (n()(), t["\u0275eld"](568, 0, null, null, 4, "label", [
                    ["class", "custom-control custom-checkbox"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](569, 0, null, null, 0, "input", [
                    ["class", "custom-control-input"],
                    ["type", "checkbox"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](570, 0, null, null, 0, "span", [
                    ["class", "custom-control-indicator"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](571, 0, null, null, 1, "span", [
                    ["class", "custom-control-description"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Check this custom checkbox"])), (n()(), t["\u0275eld"](573, 0, null, null, 2, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](574, 0, null, null, 1, "p", [
                    ["class", "text-muted"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Radios"])), (n()(), t["\u0275eld"](576, 0, null, null, 4, "label", [
                    ["class", "custom-control custom-radio"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](577, 0, null, null, 0, "input", [
                    ["class", "custom-control-input"],
                    ["id", "radio1"],
                    ["name", "radio"],
                    ["type", "radio"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](578, 0, null, null, 0, "span", [
                    ["class", "custom-control-indicator"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](579, 0, null, null, 1, "span", [
                    ["class", "custom-control-description"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Toggle this custom radio"])), (n()(), t["\u0275eld"](581, 0, null, null, 4, "label", [
                    ["class", "custom-control custom-radio"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](582, 0, null, null, 0, "input", [
                    ["class", "custom-control-input"],
                    ["id", "radio2"],
                    ["name", "radio"],
                    ["type", "radio"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](583, 0, null, null, 0, "span", [
                    ["class", "custom-control-indicator"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](584, 0, null, null, 1, "span", [
                    ["class", "custom-control-description"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Or toggle this other custom radio"])), (n()(), t["\u0275eld"](586, 0, null, null, 12, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](587, 0, null, null, 1, "p", [], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Disabled"])), (n()(), t["\u0275eld"](589, 0, null, null, 4, "label", [
                    ["class", "custom-control custom-checkbox"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](590, 0, null, null, 0, "input", [
                    ["class", "custom-control-input"],
                    ["disabled", ""],
                    ["type", "checkbox"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](591, 0, null, null, 0, "span", [
                    ["class", "custom-control-indicator"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](592, 0, null, null, 1, "span", [
                    ["class", "custom-control-description"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Check this custom checkbox"])), (n()(), t["\u0275eld"](594, 0, null, null, 4, "label", [
                    ["class", "custom-control custom-radio"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](595, 0, null, null, 0, "input", [
                    ["class", "custom-control-input"],
                    ["disabled", ""],
                    ["id", "radio3"],
                    ["name", "radioDisabled"],
                    ["type", "radio"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](596, 0, null, null, 0, "span", [
                    ["class", "custom-control-indicator"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](597, 0, null, null, 1, "span", [
                    ["class", "custom-control-description"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Toggle this custom radio"])), (n()(), t["\u0275eld"](599, 0, null, null, 27, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](600, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](601, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Custom Validation states"])), (n()(), t["\u0275eld"](603, 0, null, null, 23, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](604, 0, null, null, 22, "form", [
                    ["novalidate", ""]
                ], [
                    [2, "ng-untouched", null],
                    [2, "ng-touched", null],
                    [2, "ng-pristine", null],
                    [2, "ng-dirty", null],
                    [2, "ng-valid", null],
                    [2, "ng-invalid", null],
                    [2, "ng-pending", null]
                ], [
                    [null, "submit"],
                    [null, "reset"]
                ], function(n, l, e) {
                    var o = !0;
                    return "submit" === l && (o = !1 !== t["\u0275nov"](n, 606).onSubmit(e) && o), "reset" === l && (o = !1 !== t["\u0275nov"](n, 606).onReset() && o), o
                }, null, null)), t["\u0275did"](605, 16384, null, 0, r["\u0275angular_packages_forms_forms_bg"], [], null, null), t["\u0275did"](606, 4210688, null, 0, r.NgForm, [
                    [8, null],
                    [8, null]
                ], null, null), t["\u0275prd"](2048, null, r.ControlContainer, null, [r.NgForm]), t["\u0275did"](608, 16384, null, 0, r.NgControlStatusGroup, [
                    [4, r.ControlContainer]
                ], null, null), (n()(), t["\u0275eld"](609, 0, null, null, 5, "div", [
                    ["class", "form-group has-success"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](610, 0, null, null, 4, "label", [
                    ["class", "custom-control custom-checkbox"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](611, 0, null, null, 0, "input", [
                    ["class", "custom-control-input"],
                    ["type", "checkbox"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](612, 0, null, null, 0, "span", [
                    ["class", "custom-control-indicator"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](613, 0, null, null, 1, "span", [
                    ["class", "custom-control-description"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Check this custom checkbox"])), (n()(), t["\u0275eld"](615, 0, null, null, 5, "div", [
                    ["class", "form-group has-warning"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](616, 0, null, null, 4, "label", [
                    ["class", "custom-control custom-checkbox"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](617, 0, null, null, 0, "input", [
                    ["class", "custom-control-input"],
                    ["type", "checkbox"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](618, 0, null, null, 0, "span", [
                    ["class", "custom-control-indicator"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](619, 0, null, null, 1, "span", [
                    ["class", "custom-control-description"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Check this custom checkbox"])), (n()(), t["\u0275eld"](621, 0, null, null, 5, "div", [
                    ["class", "form-group has-danger mb-0"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](622, 0, null, null, 4, "label", [
                    ["class", "custom-control custom-checkbox"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](623, 0, null, null, 0, "input", [
                    ["class", "custom-control-input"],
                    ["type", "checkbox"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](624, 0, null, null, 0, "span", [
                    ["class", "custom-control-indicator"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](625, 0, null, null, 1, "span", [
                    ["class", "custom-control-description"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Check this custom checkbox"])), (n()(), t["\u0275eld"](627, 0, null, null, 41, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](628, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](629, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Stacked"])), (n()(), t["\u0275eld"](631, 0, null, null, 37, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](632, 0, null, null, 36, "form", [
                    ["novalidate", ""]
                ], [
                    [2, "ng-untouched", null],
                    [2, "ng-touched", null],
                    [2, "ng-pristine", null],
                    [2, "ng-dirty", null],
                    [2, "ng-valid", null],
                    [2, "ng-invalid", null],
                    [2, "ng-pending", null]
                ], [
                    [null, "submit"],
                    [null, "reset"]
                ], function(n, l, e) {
                    var o = !0;
                    return "submit" === l && (o = !1 !== t["\u0275nov"](n, 634).onSubmit(e) && o), "reset" === l && (o = !1 !== t["\u0275nov"](n, 634).onReset() && o), o
                }, null, null)), t["\u0275did"](633, 16384, null, 0, r["\u0275angular_packages_forms_forms_bg"], [], null, null), t["\u0275did"](634, 4210688, null, 0, r.NgForm, [
                    [8, null],
                    [8, null]
                ], null, null), t["\u0275prd"](2048, null, r.ControlContainer, null, [r.NgForm]), t["\u0275did"](636, 16384, null, 0, r.NgControlStatusGroup, [
                    [4, r.ControlContainer]
                ], null, null), (n()(), t["\u0275eld"](637, 0, null, null, 10, "div", [
                    ["class", "custom-controls-stacked mb-4"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](638, 0, null, null, 4, "label", [
                    ["class", "custom-control custom-radio"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](639, 0, null, null, 0, "input", [
                    ["class", "custom-control-input"],
                    ["id", "radioStacked1"],
                    ["name", "radio-stacked"],
                    ["type", "radio"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](640, 0, null, null, 0, "span", [
                    ["class", "custom-control-indicator"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](641, 0, null, null, 1, "span", [
                    ["class", "custom-control-description"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Toggle this custom radio"])), (n()(), t["\u0275eld"](643, 0, null, null, 4, "label", [
                    ["class", "custom-control custom-radio"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](644, 0, null, null, 0, "input", [
                    ["class", "custom-control-input"],
                    ["id", "radioStacked2"],
                    ["name", "radio-stacked"],
                    ["type", "radio"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](645, 0, null, null, 0, "span", [
                    ["class", "custom-control-indicator"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](646, 0, null, null, 1, "span", [
                    ["class", "custom-control-description"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Or toggle this other custom radio"])), (n()(), t["\u0275eld"](648, 0, null, null, 20, "div", [
                    ["class", "mb-3"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](649, 0, null, null, 1, "p", [
                    ["class", "text-muted"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Select menu"])), (n()(), t["\u0275eld"](651, 0, null, null, 17, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](652, 0, null, null, 16, "select", [
                    ["class", "custom-select"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](653, 0, null, null, 3, "option", [
                    ["selected", ""]
                ], null, null, null, null, null)), t["\u0275did"](654, 147456, null, 0, r.NgSelectOption, [t.ElementRef, t.Renderer2, [8, null]], null, null), t["\u0275did"](655, 147456, null, 0, r["\u0275angular_packages_forms_forms_r"], [t.ElementRef, t.Renderer2, [8, null]], null, null), (n()(), t["\u0275ted"](-1, null, ["Open this select menu"])), (n()(), t["\u0275eld"](657, 0, null, null, 3, "option", [
                    ["value", "1"]
                ], null, null, null, null, null)), t["\u0275did"](658, 147456, null, 0, r.NgSelectOption, [t.ElementRef, t.Renderer2, [8, null]], {
                    value: [0, "value"]
                }, null), t["\u0275did"](659, 147456, null, 0, r["\u0275angular_packages_forms_forms_r"], [t.ElementRef, t.Renderer2, [8, null]], {
                    value: [0, "value"]
                }, null), (n()(), t["\u0275ted"](-1, null, ["One"])), (n()(), t["\u0275eld"](661, 0, null, null, 3, "option", [
                    ["value", "2"]
                ], null, null, null, null, null)), t["\u0275did"](662, 147456, null, 0, r.NgSelectOption, [t.ElementRef, t.Renderer2, [8, null]], {
                    value: [0, "value"]
                }, null), t["\u0275did"](663, 147456, null, 0, r["\u0275angular_packages_forms_forms_r"], [t.ElementRef, t.Renderer2, [8, null]], {
                    value: [0, "value"]
                }, null), (n()(), t["\u0275ted"](-1, null, ["Two"])), (n()(), t["\u0275eld"](665, 0, null, null, 3, "option", [
                    ["value", "3"]
                ], null, null, null, null, null)), t["\u0275did"](666, 147456, null, 0, r.NgSelectOption, [t.ElementRef, t.Renderer2, [8, null]], {
                    value: [0, "value"]
                }, null), t["\u0275did"](667, 147456, null, 0, r["\u0275angular_packages_forms_forms_r"], [t.ElementRef, t.Renderer2, [8, null]], {
                    value: [0, "value"]
                }, null), (n()(), t["\u0275ted"](-1, null, ["Three"]))], function(n, l) {
                    n(l, 235, 0, "1"), n(l, 236, 0, "1"), n(l, 239, 0, "2"), n(l, 240, 0, "2"), n(l, 243, 0, "3"), n(l, 244, 0, "3"), n(l, 658, 0, "1"), n(l, 659, 0, "1"), n(l, 662, 0, "2"), n(l, 663, 0, "2"), n(l, 666, 0, "3"), n(l, 667, 0, "3")
                }, function(n, l) {
                    n(l, 8, 0, t["\u0275nov"](l, 12).ngClassUntouched, t["\u0275nov"](l, 12).ngClassTouched, t["\u0275nov"](l, 12).ngClassPristine, t["\u0275nov"](l, 12).ngClassDirty, t["\u0275nov"](l, 12).ngClassValid, t["\u0275nov"](l, 12).ngClassInvalid, t["\u0275nov"](l, 12).ngClassPending), n(l, 107, 0, t["\u0275nov"](l, 111).ngClassUntouched, t["\u0275nov"](l, 111).ngClassTouched, t["\u0275nov"](l, 111).ngClassPristine, t["\u0275nov"](l, 111).ngClassDirty, t["\u0275nov"](l, 111).ngClassValid, t["\u0275nov"](l, 111).ngClassInvalid, t["\u0275nov"](l, 111).ngClassPending), n(l, 182, 0, t["\u0275nov"](l, 186).ngClassUntouched, t["\u0275nov"](l, 186).ngClassTouched, t["\u0275nov"](l, 186).ngClassPristine, t["\u0275nov"](l, 186).ngClassDirty, t["\u0275nov"](l, 186).ngClassValid, t["\u0275nov"](l, 186).ngClassInvalid, t["\u0275nov"](l, 186).ngClassPending), n(l, 200, 0, t["\u0275nov"](l, 204).ngClassUntouched, t["\u0275nov"](l, 204).ngClassTouched, t["\u0275nov"](l, 204).ngClassPristine, t["\u0275nov"](l, 204).ngClassDirty, t["\u0275nov"](l, 204).ngClassValid, t["\u0275nov"](l, 204).ngClassInvalid, t["\u0275nov"](l, 204).ngClassPending), n(l, 316, 0, t["\u0275nov"](l, 320).ngClassUntouched, t["\u0275nov"](l, 320).ngClassTouched, t["\u0275nov"](l, 320).ngClassPristine, t["\u0275nov"](l, 320).ngClassDirty, t["\u0275nov"](l, 320).ngClassValid, t["\u0275nov"](l, 320).ngClassInvalid, t["\u0275nov"](l, 320).ngClassPending), n(l, 332, 0, t["\u0275nov"](l, 336).ngClassUntouched, t["\u0275nov"](l, 336).ngClassTouched, t["\u0275nov"](l, 336).ngClassPristine, t["\u0275nov"](l, 336).ngClassDirty, t["\u0275nov"](l, 336).ngClassValid, t["\u0275nov"](l, 336).ngClassInvalid, t["\u0275nov"](l, 336).ngClassPending), n(l, 354, 0, t["\u0275nov"](l, 358).ngClassUntouched, t["\u0275nov"](l, 358).ngClassTouched, t["\u0275nov"](l, 358).ngClassPristine, t["\u0275nov"](l, 358).ngClassDirty, t["\u0275nov"](l, 358).ngClassValid, t["\u0275nov"](l, 358).ngClassInvalid, t["\u0275nov"](l, 358).ngClassPending), n(l, 388, 0, t["\u0275nov"](l, 392).ngClassUntouched, t["\u0275nov"](l, 392).ngClassTouched, t["\u0275nov"](l, 392).ngClassPristine, t["\u0275nov"](l, 392).ngClassDirty, t["\u0275nov"](l, 392).ngClassValid, t["\u0275nov"](l, 392).ngClassInvalid, t["\u0275nov"](l, 392).ngClassPending), n(l, 400, 0, t["\u0275nov"](l, 404).ngClassUntouched, t["\u0275nov"](l, 404).ngClassTouched, t["\u0275nov"](l, 404).ngClassPristine, t["\u0275nov"](l, 404).ngClassDirty, t["\u0275nov"](l, 404).ngClassValid, t["\u0275nov"](l, 404).ngClassInvalid, t["\u0275nov"](l, 404).ngClassPending), n(l, 446, 0, t["\u0275nov"](l, 450).ngClassUntouched, t["\u0275nov"](l, 450).ngClassTouched, t["\u0275nov"](l, 450).ngClassPristine, t["\u0275nov"](l, 450).ngClassDirty, t["\u0275nov"](l, 450).ngClassValid, t["\u0275nov"](l, 450).ngClassInvalid, t["\u0275nov"](l, 450).ngClassPending), n(l, 456, 0, t["\u0275nov"](l, 460).ngClassUntouched, t["\u0275nov"](l, 460).ngClassTouched, t["\u0275nov"](l, 460).ngClassPristine, t["\u0275nov"](l, 460).ngClassDirty, t["\u0275nov"](l, 460).ngClassValid, t["\u0275nov"](l, 460).ngClassInvalid, t["\u0275nov"](l, 460).ngClassPending), n(l, 472, 0, t["\u0275nov"](l, 476).ngClassUntouched, t["\u0275nov"](l, 476).ngClassTouched, t["\u0275nov"](l, 476).ngClassPristine, t["\u0275nov"](l, 476).ngClassDirty, t["\u0275nov"](l, 476).ngClassValid, t["\u0275nov"](l, 476).ngClassInvalid, t["\u0275nov"](l, 476).ngClassPending), n(l, 506, 0, t["\u0275nov"](l, 510).ngClassUntouched, t["\u0275nov"](l, 510).ngClassTouched, t["\u0275nov"](l, 510).ngClassPristine, t["\u0275nov"](l, 510).ngClassDirty, t["\u0275nov"](l, 510).ngClassValid, t["\u0275nov"](l, 510).ngClassInvalid, t["\u0275nov"](l, 510).ngClassPending), n(l, 560, 0, t["\u0275nov"](l, 564).ngClassUntouched, t["\u0275nov"](l, 564).ngClassTouched, t["\u0275nov"](l, 564).ngClassPristine, t["\u0275nov"](l, 564).ngClassDirty, t["\u0275nov"](l, 564).ngClassValid, t["\u0275nov"](l, 564).ngClassInvalid, t["\u0275nov"](l, 564).ngClassPending), n(l, 604, 0, t["\u0275nov"](l, 608).ngClassUntouched, t["\u0275nov"](l, 608).ngClassTouched, t["\u0275nov"](l, 608).ngClassPristine, t["\u0275nov"](l, 608).ngClassDirty, t["\u0275nov"](l, 608).ngClassValid, t["\u0275nov"](l, 608).ngClassInvalid, t["\u0275nov"](l, 608).ngClassPending), n(l, 632, 0, t["\u0275nov"](l, 636).ngClassUntouched, t["\u0275nov"](l, 636).ngClassTouched, t["\u0275nov"](l, 636).ngClassPristine, t["\u0275nov"](l, 636).ngClassDirty, t["\u0275nov"](l, 636).ngClassValid, t["\u0275nov"](l, 636).ngClassInvalid, t["\u0275nov"](l, 636).ngClassPending)
                })
            }
            var c = t["\u0275ccf"]("ms-form-elements", a, function(n) {
                    return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "ms-form-elements", [], [
                        [40, "@fadeInAnimation", 0]
                    ], null, null, s, d)), t["\u0275did"](1, 114688, null, 0, a, [i.a], null, null)], function(n, l) {
                        n(l, 1, 0)
                    }, function(n, l) {
                        n(l, 0, 0, !0)
                    })
                }, {}, {}, []),
                p = function() {
                    function n(n) {
                        this.pageTitleService = n
                    }
                    return n.prototype.ngOnInit = function() {
                        this.pageTitleService.setTitle("Form Group")
                    }, n
                }(),
                f = t["\u0275crt"]({
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

            function h(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 205, "div", [
                    ["class", "input-group-wrapper"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 204, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](2, 0, null, null, 94, "div", [
                    ["class", "col-lg-12 col-xl-6"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](3, 0, null, null, 35, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](4, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](5, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Basic"])), (n()(), t["\u0275eld"](7, 0, null, null, 31, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](8, 0, null, null, 30, "form", [
                    ["novalidate", ""]
                ], [
                    [2, "ng-untouched", null],
                    [2, "ng-touched", null],
                    [2, "ng-pristine", null],
                    [2, "ng-dirty", null],
                    [2, "ng-valid", null],
                    [2, "ng-invalid", null],
                    [2, "ng-pending", null]
                ], [
                    [null, "submit"],
                    [null, "reset"]
                ], function(n, l, e) {
                    var o = !0;
                    return "submit" === l && (o = !1 !== t["\u0275nov"](n, 10).onSubmit(e) && o), "reset" === l && (o = !1 !== t["\u0275nov"](n, 10).onReset() && o), o
                }, null, null)), t["\u0275did"](9, 16384, null, 0, r["\u0275angular_packages_forms_forms_bg"], [], null, null), t["\u0275did"](10, 4210688, null, 0, r.NgForm, [
                    [8, null],
                    [8, null]
                ], null, null), t["\u0275prd"](2048, null, r.ControlContainer, null, [r.NgForm]), t["\u0275did"](12, 16384, null, 0, r.NgControlStatusGroup, [
                    [4, r.ControlContainer]
                ], null, null), (n()(), t["\u0275eld"](13, 0, null, null, 3, "div", [
                    ["class", "input-group form-group"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](14, 0, null, null, 1, "span", [
                    ["class", "input-group-addon"],
                    ["id", "basic-addon1"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["@"])), (n()(), t["\u0275eld"](16, 0, null, null, 0, "input", [
                    ["aria-describedby", "basic-addon1"],
                    ["class", "form-control"],
                    ["placeholder", "Username"],
                    ["type", "text"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](17, 0, null, null, 3, "div", [
                    ["class", "input-group form-group"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](18, 0, null, null, 0, "input", [
                    ["aria-describedby", "basic-addon2"],
                    ["class", "form-control"],
                    ["placeholder", "Recipient's username"],
                    ["type", "text"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](19, 0, null, null, 1, "span", [
                    ["class", "input-group-addon"],
                    ["id", "basic-addon2"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["@example.com"])), (n()(), t["\u0275eld"](21, 0, null, null, 1, "label", [
                    ["for", "basic-url"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Your vanity URL"])), (n()(), t["\u0275eld"](23, 0, null, null, 3, "div", [
                    ["class", "input-group form-group"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](24, 0, null, null, 1, "span", [
                    ["class", "input-group-addon"],
                    ["id", "basic-addon3"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["https://example.com"])), (n()(), t["\u0275eld"](26, 0, null, null, 0, "input", [
                    ["aria-describedby", "basic-addon3"],
                    ["class", "form-control"],
                    ["id", "basic-url"],
                    ["type", "text"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](27, 0, null, null, 5, "div", [
                    ["class", "input-group form-group"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](28, 0, null, null, 1, "span", [
                    ["class", "input-group-addon"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["$"])), (n()(), t["\u0275eld"](30, 0, null, null, 0, "input", [
                    ["aria-label", "Amount (to the nearest dollar)"],
                    ["class", "form-control"],
                    ["type", "text"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](31, 0, null, null, 1, "span", [
                    ["class", "input-group-addon"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, [".00"])), (n()(), t["\u0275eld"](33, 0, null, null, 5, "div", [
                    ["class", "input-group form-group"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](34, 0, null, null, 1, "span", [
                    ["class", "input-group-addon"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["$"])), (n()(), t["\u0275eld"](36, 0, null, null, 1, "span", [
                    ["class", "input-group-addon"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["0.00"])), (n()(), t["\u0275eld"](38, 0, null, null, 0, "input", [
                    ["aria-label", "Amount (to the nearest dollar)"],
                    ["class", "form-control"],
                    ["type", "text"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](39, 0, null, null, 19, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](40, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](41, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Sizing"])), (n()(), t["\u0275eld"](43, 0, null, null, 15, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](44, 0, null, null, 14, "form", [
                    ["novalidate", ""]
                ], [
                    [2, "ng-untouched", null],
                    [2, "ng-touched", null],
                    [2, "ng-pristine", null],
                    [2, "ng-dirty", null],
                    [2, "ng-valid", null],
                    [2, "ng-invalid", null],
                    [2, "ng-pending", null]
                ], [
                    [null, "submit"],
                    [null, "reset"]
                ], function(n, l, e) {
                    var o = !0;
                    return "submit" === l && (o = !1 !== t["\u0275nov"](n, 46).onSubmit(e) && o), "reset" === l && (o = !1 !== t["\u0275nov"](n, 46).onReset() && o), o
                }, null, null)), t["\u0275did"](45, 16384, null, 0, r["\u0275angular_packages_forms_forms_bg"], [], null, null), t["\u0275did"](46, 4210688, null, 0, r.NgForm, [
                    [8, null],
                    [8, null]
                ], null, null), t["\u0275prd"](2048, null, r.ControlContainer, null, [r.NgForm]), t["\u0275did"](48, 16384, null, 0, r.NgControlStatusGroup, [
                    [4, r.ControlContainer]
                ], null, null), (n()(), t["\u0275eld"](49, 0, null, null, 4, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](50, 0, null, null, 3, "div", [
                    ["class", "input-group input-group-lg"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](51, 0, null, null, 1, "span", [
                    ["class", "input-group-addon"],
                    ["id", "sizing-addon1"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["@"])), (n()(), t["\u0275eld"](53, 0, null, null, 0, "input", [
                    ["aria-describedby", "sizing-addon1"],
                    ["class", "form-control"],
                    ["placeholder", "Username"],
                    ["type", "text"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](54, 0, null, null, 4, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](55, 0, null, null, 3, "div", [
                    ["class", "input-group"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](56, 0, null, null, 1, "span", [
                    ["class", "input-group-addon"],
                    ["id", "sizing-addon2"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["@"])), (n()(), t["\u0275eld"](58, 0, null, null, 0, "input", [
                    ["aria-describedby", "sizing-addon2"],
                    ["class", "form-control"],
                    ["placeholder", "Username"],
                    ["type", "text"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](59, 0, null, null, 37, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](60, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](61, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Buttons with dropdowns"])), (n()(), t["\u0275eld"](63, 0, null, null, 33, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](64, 0, null, null, 32, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](65, 0, null, null, 15, "div", [
                    ["class", "col-lg-12 col-xl-6"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](66, 0, null, null, 14, "div", [
                    ["class", "input-group form-group"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](67, 0, null, null, 12, "div", [
                    ["class", "input-group-btn"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](68, 0, null, null, 1, "button", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "btn btn-secondary dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, [" Action "])), (n()(), t["\u0275eld"](70, 0, null, null, 9, "div", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](71, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Action"])), (n()(), t["\u0275eld"](73, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Another action"])), (n()(), t["\u0275eld"](75, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Something else here"])), (n()(), t["\u0275eld"](77, 0, null, null, 0, "div", [
                    ["class", "dropdown-divider"],
                    ["role", "separator"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](78, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Separated link"])), (n()(), t["\u0275eld"](80, 0, null, null, 0, "input", [
                    ["aria-label", "Text input with dropdown button"],
                    ["class", "form-control"],
                    ["type", "text"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](81, 0, null, null, 15, "div", [
                    ["class", "col-lg-12 col-xl-6"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](82, 0, null, null, 14, "div", [
                    ["class", "input-group form-group"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](83, 0, null, null, 0, "input", [
                    ["aria-label", "Text input with dropdown button"],
                    ["class", "form-control"],
                    ["type", "text"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](84, 0, null, null, 12, "div", [
                    ["class", "input-group-btn"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](85, 0, null, null, 1, "button", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "btn btn-secondary dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, [" Action "])), (n()(), t["\u0275eld"](87, 0, null, null, 9, "div", [
                    ["class", "dropdown-menu dropdown-menu-right"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](88, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Action"])), (n()(), t["\u0275eld"](90, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Another action"])), (n()(), t["\u0275eld"](92, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Something else here"])), (n()(), t["\u0275eld"](94, 0, null, null, 0, "div", [
                    ["class", "dropdown-divider"],
                    ["role", "separator"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](95, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Separated link"])), (n()(), t["\u0275eld"](97, 0, null, null, 108, "div", [
                    ["class", "col-lg-12 col-xl-6"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](98, 0, null, null, 15, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](99, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](100, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Checkboxes & radio addons"])), (n()(), t["\u0275eld"](102, 0, null, null, 11, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](103, 0, null, null, 10, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](104, 0, null, null, 4, "div", [
                    ["class", "col-lg-12 col-xl-6"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](105, 0, null, null, 3, "div", [
                    ["class", "input-group form-group"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](106, 0, null, null, 1, "span", [
                    ["class", "input-group-addon"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](107, 0, null, null, 0, "input", [
                    ["aria-label", "Checkbox for following text input"],
                    ["type", "checkbox"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](108, 0, null, null, 0, "input", [
                    ["aria-label", "Text input with checkbox"],
                    ["class", "form-control"],
                    ["type", "text"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](109, 0, null, null, 4, "div", [
                    ["class", "col-lg-12 col-xl-6"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](110, 0, null, null, 3, "div", [
                    ["class", "input-group form-group"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](111, 0, null, null, 1, "span", [
                    ["class", "input-group-addon"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](112, 0, null, null, 0, "input", [
                    ["aria-label", "Radio button for following text input"],
                    ["type", "radio"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](113, 0, null, null, 0, "input", [
                    ["aria-label", "Text input with radio button"],
                    ["class", "form-control"],
                    ["type", "text"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](114, 0, null, null, 19, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](115, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](116, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Multiple addons"])), (n()(), t["\u0275eld"](118, 0, null, null, 15, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](119, 0, null, null, 14, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](120, 0, null, null, 6, "div", [
                    ["class", "col-lg-12 col-xl-6"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](121, 0, null, null, 5, "div", [
                    ["class", "input-group form-group"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](122, 0, null, null, 1, "span", [
                    ["class", "input-group-addon"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](123, 0, null, null, 0, "input", [
                    ["aria-label", "Checkbox for following text input"],
                    ["type", "checkbox"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](124, 0, null, null, 1, "span", [
                    ["class", "input-group-addon"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["$"])), (n()(), t["\u0275eld"](126, 0, null, null, 0, "input", [
                    ["aria-label", "Text input with checkbox"],
                    ["class", "form-control"],
                    ["type", "text"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](127, 0, null, null, 6, "div", [
                    ["class", "col-lg-12 col-xl-6"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](128, 0, null, null, 5, "div", [
                    ["class", "input-group form-group"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](129, 0, null, null, 1, "span", [
                    ["class", "input-group-addon"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["$"])), (n()(), t["\u0275eld"](131, 0, null, null, 1, "span", [
                    ["class", "input-group-addon"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["0.00"])), (n()(), t["\u0275eld"](133, 0, null, null, 0, "input", [
                    ["aria-label", "Text input with radio button"],
                    ["class", "form-control"],
                    ["type", "text"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](134, 0, null, null, 27, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](135, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](136, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Button addons"])), (n()(), t["\u0275eld"](138, 0, null, null, 23, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](139, 0, null, null, 12, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](140, 0, null, null, 5, "div", [
                    ["class", "col-lg-12 col-xl-6 mb-2"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](141, 0, null, null, 4, "div", [
                    ["class", "input-group"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](142, 0, null, null, 2, "span", [
                    ["class", "input-group-btn"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](143, 0, null, null, 1, "button", [
                    ["class", "btn btn-primary"],
                    ["type", "button"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Go!"])), (n()(), t["\u0275eld"](145, 0, null, null, 0, "input", [
                    ["class", "form-control"],
                    ["placeholder", "Search for..."],
                    ["type", "text"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](146, 0, null, null, 5, "div", [
                    ["class", "col-lg-12 col-xl-6 mb-2"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](147, 0, null, null, 4, "div", [
                    ["class", "input-group"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](148, 0, null, null, 0, "input", [
                    ["class", "form-control"],
                    ["placeholder", "Search for..."],
                    ["type", "text"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](149, 0, null, null, 2, "span", [
                    ["class", "input-group-btn"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](150, 0, null, null, 1, "button", [
                    ["class", "btn btn-success"],
                    ["type", "button"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Go!"])), (n()(), t["\u0275eld"](152, 0, null, null, 9, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](153, 0, null, null, 8, "div", [
                    ["class", "col-lg-offset-3 col-lg-6"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](154, 0, null, null, 7, "div", [
                    ["class", "input-group"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](155, 0, null, null, 2, "span", [
                    ["class", "input-group-btn"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](156, 0, null, null, 1, "button", [
                    ["class", "btn btn-primary"],
                    ["type", "button"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Hate it"])), (n()(), t["\u0275eld"](158, 0, null, null, 0, "input", [
                    ["class", "form-control"],
                    ["placeholder", "Product name"],
                    ["type", "text"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](159, 0, null, null, 2, "span", [
                    ["class", "input-group-btn"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](160, 0, null, null, 1, "button", [
                    ["class", "btn btn-danger"],
                    ["type", "button"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Love it"])), (n()(), t["\u0275eld"](162, 0, null, null, 43, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](163, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](164, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Segmented buttons"])), (n()(), t["\u0275eld"](166, 0, null, null, 39, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](167, 0, null, null, 38, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](168, 0, null, null, 18, "div", [
                    ["class", "col-lg-12 col-xl-6 mb-2"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](169, 0, null, null, 17, "div", [
                    ["class", "input-group"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](170, 0, null, null, 15, "div", [
                    ["class", "input-group-btn"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](171, 0, null, null, 1, "button", [
                    ["class", "btn btn-secondary"],
                    ["type", "button"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Action"])), (n()(), t["\u0275eld"](173, 0, null, null, 2, "button", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "btn btn-secondary dropdown-toggle dropdown-toggle-split"],
                    ["data-toggle", "dropdown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](174, 0, null, null, 1, "span", [
                    ["class", "sr-only"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Toggle Dropdown"])), (n()(), t["\u0275eld"](176, 0, null, null, 9, "div", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](177, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Action"])), (n()(), t["\u0275eld"](179, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Another action"])), (n()(), t["\u0275eld"](181, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Something else here"])), (n()(), t["\u0275eld"](183, 0, null, null, 0, "div", [
                    ["class", "dropdown-divider"],
                    ["role", "separator"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](184, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Separated link"])), (n()(), t["\u0275eld"](186, 0, null, null, 0, "input", [
                    ["aria-label", "Text input with segmented button dropdown"],
                    ["class", "form-control"],
                    ["type", "text"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](187, 0, null, null, 18, "div", [
                    ["class", "col-lg-12 col-xl-6 mb-2"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](188, 0, null, null, 17, "div", [
                    ["class", "input-group"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](189, 0, null, null, 0, "input", [
                    ["aria-label", "Text input with segmented button dropdown"],
                    ["class", "form-control"],
                    ["type", "text"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](190, 0, null, null, 15, "div", [
                    ["class", "input-group-btn"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](191, 0, null, null, 1, "button", [
                    ["class", "btn btn-secondary"],
                    ["type", "button"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Action"])), (n()(), t["\u0275eld"](193, 0, null, null, 2, "button", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "btn btn-secondary dropdown-toggle dropdown-toggle-split"],
                    ["data-toggle", "dropdown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](194, 0, null, null, 1, "span", [
                    ["class", "sr-only"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Toggle Dropdown"])), (n()(), t["\u0275eld"](196, 0, null, null, 9, "div", [
                    ["class", "dropdown-menu dropdown-menu-right"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](197, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Action"])), (n()(), t["\u0275eld"](199, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Another action"])), (n()(), t["\u0275eld"](201, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Something else here"])), (n()(), t["\u0275eld"](203, 0, null, null, 0, "div", [
                    ["class", "dropdown-divider"],
                    ["role", "separator"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](204, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Separated link"]))], null, function(n, l) {
                    n(l, 8, 0, t["\u0275nov"](l, 12).ngClassUntouched, t["\u0275nov"](l, 12).ngClassTouched, t["\u0275nov"](l, 12).ngClassPristine, t["\u0275nov"](l, 12).ngClassDirty, t["\u0275nov"](l, 12).ngClassValid, t["\u0275nov"](l, 12).ngClassInvalid, t["\u0275nov"](l, 12).ngClassPending), n(l, 44, 0, t["\u0275nov"](l, 48).ngClassUntouched, t["\u0275nov"](l, 48).ngClassTouched, t["\u0275nov"](l, 48).ngClassPristine, t["\u0275nov"](l, 48).ngClassDirty, t["\u0275nov"](l, 48).ngClassValid, t["\u0275nov"](l, 48).ngClassInvalid, t["\u0275nov"](l, 48).ngClassPending)
                })
            }
            var g = t["\u0275ccf"]("ms-form-group", p, function(n) {
                    return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "ms-form-group", [], [
                        [40, "@fadeInAnimation", 0]
                    ], null, null, h, f)), t["\u0275did"](1, 114688, null, 0, p, [i.a], null, null)], function(n, l) {
                        n(l, 1, 0)
                    }, function(n, l) {
                        n(l, 0, 0, !0)
                    })
                }, {}, {}, []),
                m = e("Ip0R"),
                v = e("MCLT"),
                b = function() {
                    function n() {
                        this.navigationSymbol = "", this.completed = !1, this.selected = !1, this.defaultSelected = !1, this.optional = !1, this.canEnter = !0, this.canExit = !0, this.stepEnter = new t.EventEmitter, this.stepExit = new t.EventEmitter
                    }
                    return Object.defineProperty(n.prototype, "hidden", {
                        get: function() {
                            return !this.selected
                        },
                        enumerable: !0,
                        configurable: !0
                    }), n.canTransitionStep = function(n, l) {
                        return Object(v.isBoolean)(n) ? Promise.resolve(n) : n instanceof Function ? Promise.resolve(n(l)) : Promise.reject(new Error("Input value '" + n + "' is neither a boolean nor a function"))
                    }, n.prototype.enter = function(n) {
                        this.stepEnter.emit(n)
                    }, n.prototype.exit = function(n) {
                        this.stepExit.emit(n)
                    }, n.prototype.canEnterStep = function(l) {
                        return n.canTransitionStep(this.canEnter, l)
                    }, n.prototype.canExitStep = function(l) {
                        return n.canTransitionStep(this.canExit, l)
                    }, n
                }(),
                y = function(n) {
                    return n[n.Forwards = 0] = "Forwards", n[n.Backwards = 1] = "Backwards", n[n.Stay = 2] = "Stay", n
                }({}),
                $ = e("mrSG"),
                _ = function() {
                    function n(n) {
                        this.wizardState = n
                    }
                    return n.prototype.goToPreviousStep = function(n, l) {
                        this.wizardState.hasPreviousStep() && this.goToStep(this.wizardState.currentStepIndex - 1, n, l)
                    }, n.prototype.goToNextStep = function(n, l) {
                        this.wizardState.hasNextStep() && this.goToStep(this.wizardState.currentStepIndex + 1, n, l)
                    }, n
                }(),
                x = function(n) {
                    function l(l) {
                        return n.call(this, l) || this
                    }
                    return Object($.__extends)(l, n), l.prototype.canGoToStep = function(n) {
                        var l = this,
                            e = this.wizardState.hasStep(n),
                            t = this.wizardState.getMovingDirection(n);
                        return Promise.resolve(e).then(function(n) {
                            return n ? l.wizardState.currentStep.canExitStep(t) : Promise.resolve(!1)
                        }).then(function(e) {
                            return e ? l.wizardState.getStepAtIndex(n).canEnterStep(t) : Promise.resolve(!1)
                        })
                    }, l.prototype.goToStep = function(n, l, e) {
                        var t = this;
                        this.canGoToStep(n).then(function(o) {
                            if (o) {
                                var u = t.wizardState.getMovingDirection(n);
                                l && l.emit(), t.wizardState.currentStep.completed = !0, t.wizardState.currentStep.exit(u), t.wizardState.currentStep.selected = !1, t.wizardState.currentStepIndex = n, t.wizardState.currentStep.enter(u), t.wizardState.currentStep.selected = !0, e && e.emit()
                            } else t.wizardState.currentStep.exit(y.Stay), t.wizardState.currentStep.enter(y.Stay)
                        })
                    }, l.prototype.isNavigable = function(n) {
                        return !0
                    }, l.prototype.reset = function() {
                        if (!this.wizardState.hasStep(this.wizardState.defaultStepIndex)) throw new Error("The wizard doesn't contain a step with index " + this.wizardState.defaultStepIndex);
                        this.wizardState.wizardSteps.forEach(function(n) {
                            n.completed = !1, n.selected = !1
                        }), this.wizardState.currentStepIndex = this.wizardState.defaultStepIndex, this.wizardState.currentStep.selected = !0, this.wizardState.currentStep.enter(y.Forwards)
                    }, l
                }(_),
                O = function(n) {
                    function l() {
                        var l = null !== n && n.apply(this, arguments) || this;
                        return l.stepExit = new t.EventEmitter, l.canExit = !1, l
                    }
                    return Object($.__extends)(l, n), l.prototype.enter = function(n) {
                        this.completed = !0, this.stepEnter.emit(n)
                    }, l.prototype.exit = function(n) {
                        this.completed = !1, this.stepExit.emit(n)
                    }, l
                }(b),
                C = function(n) {
                    function l(l) {
                        return n.call(this, l) || this
                    }
                    return Object($.__extends)(l, n), l.prototype.canGoToStep = function(n) {
                        var l = this,
                            e = this.wizardState.hasStep(n),
                            t = this.wizardState.getMovingDirection(n);
                        return Promise.resolve(e).then(function(n) {
                            return n ? l.wizardState.currentStep.canExitStep(t) : Promise.resolve(!1)
                        }).then(function(e) {
                            return e ? l.wizardState.getStepAtIndex(n).canEnterStep(t) : Promise.resolve(!1)
                        }).then(function(e) {
                            if (e) {
                                var t = l.wizardState.wizardSteps.filter(function(l, e) {
                                    return e < n
                                }).every(function(n) {
                                    return n.completed || n.optional || n.selected
                                });
                                return Promise.resolve(!(l.wizardState.getStepAtIndex(n) instanceof O) || t)
                            }
                            return Promise.resolve(!1)
                        })
                    }, l.prototype.goToStep = function(n, l, e) {
                        var t = this;
                        this.canGoToStep(n).then(function(o) {
                            if (o) {
                                var u = t.wizardState.getMovingDirection(n);
                                l && l.emit(), t.wizardState.currentStep.completed = !0, t.wizardState.currentStep.exit(u), t.wizardState.currentStep.selected = !1, t.wizardState.currentStepIndex = n, t.wizardState.currentStep.enter(u), t.wizardState.currentStep.selected = !0, e && e.emit()
                            } else t.wizardState.currentStep.exit(y.Stay), t.wizardState.currentStep.enter(y.Stay)
                        })
                    }, l.prototype.isNavigable = function(n) {
                        return !(this.wizardState.getStepAtIndex(n) instanceof O) || this.wizardState.wizardSteps.filter(function(l, e) {
                            return e < n
                        }).every(function(n) {
                            return n.completed || n.optional || n.selected
                        })
                    }, l.prototype.reset = function() {
                        if (!this.wizardState.hasStep(this.wizardState.defaultStepIndex)) throw new Error("The wizard doesn't contain a step with index " + this.wizardState.defaultStepIndex);
                        if (this.wizardState.getStepAtIndex(this.wizardState.defaultStepIndex) instanceof O && 1 !== this.wizardState.wizardSteps.length) throw new Error("The default step index " + this.wizardState.defaultStepIndex + " references a completion step");
                        this.wizardState.wizardSteps.forEach(function(n) {
                            n.completed = !1, n.selected = !1
                        }), this.wizardState.currentStepIndex = this.wizardState.defaultStepIndex, this.wizardState.currentStep.selected = !0, this.wizardState.currentStep.enter(y.Forwards)
                    }, l
                }(_),
                w = function(n) {
                    function l(l) {
                        return n.call(this, l) || this
                    }
                    return Object($.__extends)(l, n), l.prototype.canGoToStep = function(n) {
                        var l = this,
                            e = this.wizardState.hasStep(n),
                            t = this.wizardState.getMovingDirection(n);
                        return Promise.resolve(e).then(function(n) {
                            return n ? l.wizardState.currentStep.canExitStep(t) : Promise.resolve(!1)
                        }).then(function(e) {
                            return e ? l.wizardState.getStepAtIndex(n).canEnterStep(t) : Promise.resolve(!1)
                        }).then(function(e) {
                            return e ? Promise.resolve(l.wizardState.wizardSteps.filter(function(e, t) {
                                return t < n && t !== l.wizardState.currentStepIndex
                            }).every(function(n) {
                                return n.completed || n.optional
                            })) : Promise.resolve(!1)
                        })
                    }, l.prototype.goToStep = function(n, l, e) {
                        var t = this;
                        this.canGoToStep(n).then(function(o) {
                            if (o) {
                                var u = t.wizardState.getMovingDirection(n);
                                l && l.emit(), t.wizardState.currentStep.completed = !0, t.wizardState.currentStep.exit(u), t.wizardState.currentStep.selected = !1, t.wizardState.wizardSteps.filter(function(l, e) {
                                    return t.wizardState.currentStepIndex > n && e > n
                                }).forEach(function(n) {
                                    return n.completed = !1
                                }), t.wizardState.currentStepIndex = n, t.wizardState.currentStep.enter(u), t.wizardState.currentStep.selected = !0, e && e.emit()
                            } else t.wizardState.currentStep.exit(y.Stay), t.wizardState.currentStep.enter(y.Stay)
                        })
                    }, l.prototype.isNavigable = function(n) {
                        return n < this.wizardState.currentStepIndex
                    }, l.prototype.reset = function() {
                        var n = this;
                        if (!this.wizardState.hasStep(this.wizardState.defaultStepIndex)) throw new Error("The wizard doesn't contain a step with index " + this.wizardState.defaultStepIndex);
                        if (this.wizardState.wizardSteps.filter(function(l, e) {
                                return e < n.wizardState.defaultStepIndex
                            }).some(function(n) {
                                return !n.optional
                            })) throw new Error("The default step index " + this.wizardState.defaultStepIndex + " is located after a non optional step");
                        this.wizardState.wizardSteps.forEach(function(n) {
                            n.completed = !1, n.selected = !1
                        }), this.wizardState.currentStepIndex = this.wizardState.defaultStepIndex, this.wizardState.currentStep.selected = !0, this.wizardState.currentStep.enter(y.Forwards)
                    }, l
                }(_),
                S = function() {
                    function n() {
                        this._defaultStepIndex = 0, this.currentStepIndex = -1
                    }
                    return Object.defineProperty(n.prototype, "wizardSteps", {
                        get: function() {
                            return this._wizardSteps ? this._wizardSteps.toArray() : []
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(n.prototype, "defaultStepIndex", {
                        get: function() {
                            var n = this.wizardSteps.find(function(n) {
                                return n.defaultSelected
                            });
                            return n ? this.getIndexOfStep(n) : this._defaultStepIndex
                        },
                        set: function(n) {
                            this._defaultStepIndex = n
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(n.prototype, "currentStep", {
                        get: function() {
                            return this.hasStep(this.currentStepIndex) ? this.wizardSteps[this.currentStepIndex] : null
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(n.prototype, "completed", {
                        get: function() {
                            return this.wizardSteps.every(function(n) {
                                return n.completed || n.optional
                            })
                        },
                        enumerable: !0,
                        configurable: !0
                    }), n.prototype.initialize = function(n, l, e, t) {
                        this._wizardSteps = n, this._defaultStepIndex = e, this.disableNavigationBar = t, this.navigationMode = function(n, l) {
                            switch (n) {
                                case "free":
                                    return new x(l);
                                case "semi-strict":
                                    return new C(l);
                                case "strict":
                                default:
                                    return new w(l)
                            }
                        }(l, this), this.navigationMode.reset()
                    }, n.prototype.hasStep = function(n) {
                        return this.wizardSteps.length > 0 && 0 <= n && n < this.wizardSteps.length
                    }, n.prototype.hasPreviousStep = function() {
                        return this.hasStep(this.currentStepIndex - 1)
                    }, n.prototype.hasNextStep = function() {
                        return this.hasStep(this.currentStepIndex + 1)
                    }, n.prototype.isLastStep = function() {
                        return this.wizardSteps.length > 0 && this.currentStepIndex === this.wizardSteps.length - 1
                    }, n.prototype.getStepAtIndex = function(n) {
                        if (!this.hasStep(n)) throw new Error("Expected a known step, but got stepIndex: " + n + ".");
                        return this.wizardSteps[n]
                    }, n.prototype.getIndexOfStep = function(n) {
                        return this.wizardSteps.indexOf(n)
                    }, n.prototype.getMovingDirection = function(n) {
                        return n > this.currentStepIndex ? y.Forwards : n < this.currentStepIndex ? y.Backwards : y.Stay
                    }, n
                }(),
                E = function() {
                    function n(n, l) {
                        this.wizardState = n, this.wizardStep = l, this.preFinalize = new t.EventEmitter, this.postFinalize = new t.EventEmitter
                    }
                    return Object.defineProperty(n.prototype, "finalize", {
                        get: function() {
                            return this.preFinalize
                        },
                        set: function(n) {
                            this.preFinalize = n
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(n.prototype, "navigationMode", {
                        get: function() {
                            return this.wizardState.navigationMode
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(n.prototype, "destinationStep", {
                        get: function() {
                            var n;
                            if (Object(v.isNumber)(this.goToStep)) n = this.goToStep;
                            else if (Object(v.isString)(this.goToStep)) n = parseInt(this.goToStep, 10);
                            else if (this.goToStep.hasOwnProperty("stepOffset") && null !== this.wizardStep) n = this.wizardState.getIndexOfStep(this.wizardStep) + this.goToStep.stepOffset;
                            else {
                                if (!(this.goToStep instanceof b)) throw new Error("Input 'goToStep' is neither a WizardStep, StepOffset, number or string");
                                n = this.wizardState.getIndexOfStep(this.goToStep)
                            }
                            return n
                        },
                        enumerable: !0,
                        configurable: !0
                    }), n.prototype.onClick = function() {
                        this.navigationMode.goToStep(this.destinationStep, this.preFinalize, this.postFinalize)
                    }, n
                }(),
                P = function() {
                    function n(n) {
                        this.wizardState = n, this.direction = "left-to-right"
                    }
                    return Object.defineProperty(n.prototype, "navigationMode", {
                        get: function() {
                            return this.wizardState.navigationMode
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(n.prototype, "wizardSteps", {
                        get: function() {
                            switch (this.direction) {
                                case "right-to-left":
                                    return this.wizardState.wizardSteps.reverse();
                                case "left-to-right":
                                default:
                                    return this.wizardState.wizardSteps
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(n.prototype, "numberOfWizardSteps", {
                        get: function() {
                            return this.wizardState.wizardSteps.length
                        },
                        enumerable: !0,
                        configurable: !0
                    }), n.prototype.isCurrent = function(n) {
                        return n.selected && !n.completed && !this.wizardState.completed
                    }, n.prototype.isDone = function(n) {
                        return n.completed && !n.selected || this.wizardState.completed
                    }, n.prototype.isDefault = function(n) {
                        return !(n.optional || n.completed || n.selected || this.wizardState.completed)
                    }, n.prototype.isEditing = function(n) {
                        return n.selected && n.completed && !this.wizardState.completed
                    }, n.prototype.isOptional = function(n) {
                        return n.optional && !n.completed && !n.selected && !this.wizardState.completed
                    }, n.prototype.isNavigable = function(n) {
                        return !n.selected && !this.wizardState.disableNavigationBar && this.navigationMode.isNavigable(this.wizardState.getIndexOfStep(n))
                    }, n
                }(),
                M = t["\u0275crt"]({
                    encapsulation: 0,
                    styles: [".horizontal.small[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%] {\n      padding: 24px 0 10px 0;\n    }\n    .horizontal.small[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child):before {\n      background-color: #E6E6E6;\n      content: '';\n      position: absolute;\n      height: 1px;\n      width: calc(100% - 14px);\n      top: -7px;\n      left: calc(50% + 7px);\n    }\n    .horizontal.small[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after {\n      position: absolute;\n      top: -14px;\n      left: calc(50% - 7px);\n      width: 14px;\n      height: 14px;\n      content: '';\n      text-align: center;\n      vertical-align: middle;\n      line-height: 14px;\n      transition: 0.25s;\n      border-radius: 100%;\n      background-color: #E6E6E6;\n    }\n    .horizontal.small[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.default[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n      color: #808080;\n    }\n    .horizontal.small[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.current[_ngcontent-%COMP%]:after {\n      background-color: #808080;\n    }\n    .horizontal.small[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.done[_ngcontent-%COMP%]:after {\n      background-color: #339933;\n    }\n    .horizontal.small[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.optional[_ngcontent-%COMP%]:after {\n      background-color: #38ef38;\n    }\n    .horizontal.small[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.editing[_ngcontent-%COMP%]:after {\n      background-color: #FF0000;\n    }\n    .horizontal.large-filled[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%] {\n      padding: 60px 0 10px 0;\n    }\n    .horizontal.large-filled[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child):before {\n      background-color: #E6E6E6;\n      content: '';\n      position: absolute;\n      height: 1px;\n      width: calc(100% - 50px);\n      top: -25px;\n      left: calc(50% + 25px);\n    }\n    .horizontal.large-filled[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after {\n      position: absolute;\n      top: -50px;\n      left: calc(50% - 25px);\n      width: 50px;\n      height: 50px;\n      content: '';\n      text-align: center;\n      vertical-align: middle;\n      line-height: 50px;\n      transition: 0.25s;\n      border-radius: 100%;\n      background-color: #E6E6E6;\n    }\n    .horizontal.large-filled[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.default[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n      color: #808080;\n    }\n    .horizontal.large-filled[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.current[_ngcontent-%COMP%]:after {\n      background-color: #808080;\n    }\n    .horizontal.large-filled[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.done[_ngcontent-%COMP%]:after {\n      background-color: #339933;\n    }\n    .horizontal.large-filled[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.optional[_ngcontent-%COMP%]:after {\n      background-color: #38ef38;\n    }\n    .horizontal.large-filled[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.editing[_ngcontent-%COMP%]:after {\n      background-color: #FF0000;\n    }\n    .horizontal.large-empty[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%] {\n      padding: 60px 0 10px 0;\n    }\n    .horizontal.large-empty[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child):before {\n      background-color: #E6E6E6;\n      content: '';\n      position: absolute;\n      height: 1px;\n      width: calc(100% - 50px);\n      top: -25px;\n      left: calc(50% + 25px);\n    }\n    .horizontal.large-empty[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after {\n      position: absolute;\n      top: -50px;\n      left: calc(50% - 25px);\n      width: 50px;\n      height: 50px;\n      content: '';\n      text-align: center;\n      vertical-align: middle;\n      line-height: 46px;\n      transition: 0.25s;\n      border-radius: 100%;\n      border-width: 2px;\n      border-style: solid;\n      border-color: #E6E6E6;\n    }\n    .horizontal.large-empty[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.default[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n      color: #808080;\n    }\n    .horizontal.large-empty[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.current[_ngcontent-%COMP%]:after {\n      border-width: 2px;\n      border-style: solid;\n      border-color: #808080;\n    }\n    .horizontal.large-empty[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.done[_ngcontent-%COMP%]:after {\n      border-width: 2px;\n      border-style: solid;\n      border-color: #339933;\n    }\n    .horizontal.large-empty[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.optional[_ngcontent-%COMP%]:after {\n      border-width: 2px;\n      border-style: solid;\n      border-color: #38ef38;\n    }\n    .horizontal.large-empty[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.editing[_ngcontent-%COMP%]:after {\n      border-width: 2px;\n      border-style: solid;\n      border-color: #FF0000;\n    }\n    .horizontal.large-filled-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%] {\n      padding: 60px 0 10px 0;\n    }\n    .horizontal.large-filled-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child):before {\n      background-color: #E6E6E6;\n      content: '';\n      position: absolute;\n      height: 1px;\n      width: calc(100% - 50px);\n      top: -25px;\n      left: calc(50% + 25px);\n    }\n    .horizontal.large-filled-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after {\n      position: absolute;\n      top: -50px;\n      left: calc(50% - 25px);\n      width: 50px;\n      height: 50px;\n      content: '';\n      text-align: center;\n      vertical-align: middle;\n      line-height: 50px;\n      transition: 0.25s;\n      border-radius: 100%;\n      background-color: #E6E6E6;\n      color: black;\n      content: attr(step-symbol);\n    }\n    .horizontal.large-filled-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.default[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n      color: #808080;\n    }\n    .horizontal.large-filled-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.current[_ngcontent-%COMP%]:after {\n      background-color: #808080;\n      color: black;\n    }\n    .horizontal.large-filled-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.done[_ngcontent-%COMP%]:after {\n      background-color: #339933;\n      color: black;\n    }\n    .horizontal.large-filled-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.optional[_ngcontent-%COMP%]:after {\n      background-color: #38ef38;\n      color: black;\n    }\n    .horizontal.large-filled-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.editing[_ngcontent-%COMP%]:after {\n      background-color: #FF0000;\n      color: black;\n    }\n    .horizontal.large-empty-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%] {\n      padding: 60px 0 10px 0;\n    }\n    .horizontal.large-empty-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child):before {\n      background-color: #E6E6E6;\n      content: '';\n      position: absolute;\n      height: 1px;\n      width: calc(100% - 50px);\n      top: -25px;\n      left: calc(50% + 25px);\n    }\n    .horizontal.large-empty-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after {\n      position: absolute;\n      top: -50px;\n      left: calc(50% - 25px);\n      width: 50px;\n      height: 50px;\n      content: '';\n      text-align: center;\n      vertical-align: middle;\n      line-height: 46px;\n      transition: 0.25s;\n      border-radius: 100%;\n      border-width: 2px;\n      border-style: solid;\n      border-color: #E6E6E6;\n      color: #E6E6E6;\n      content: attr(step-symbol);\n    }\n    .horizontal.large-empty-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.default[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n      color: #808080;\n    }\n    .horizontal.large-empty-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.current[_ngcontent-%COMP%]:after {\n      border-width: 2px;\n      border-style: solid;\n      border-color: #808080;\n      color: #808080;\n    }\n    .horizontal.large-empty-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.done[_ngcontent-%COMP%]:after {\n      border-width: 2px;\n      border-style: solid;\n      border-color: #339933;\n      color: #339933;\n    }\n    .horizontal.large-empty-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.optional[_ngcontent-%COMP%]:after {\n      border-width: 2px;\n      border-style: solid;\n      border-color: #38ef38;\n      color: #38ef38;\n    }\n    .horizontal.large-empty-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.editing[_ngcontent-%COMP%]:after {\n      border-width: 2px;\n      border-style: solid;\n      border-color: #FF0000;\n      color: #FF0000;\n    }\n    .horizontal[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      margin: 0;\n      width: 100%;\n      list-style: none;\n      \n    }\n    .horizontal[_nghost-%COMP%]   ul.steps-indicator.steps-2[_ngcontent-%COMP%]:before {\n      left: 25%;\n      right: 25%;\n    }\n    .horizontal[_nghost-%COMP%]   ul.steps-indicator.steps-2[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n      width: 50%;\n    }\n    .horizontal[_nghost-%COMP%]   ul.steps-indicator.steps-3[_ngcontent-%COMP%]:before {\n      left: 16.66666667%;\n      right: 16.66666667%;\n    }\n    .horizontal[_nghost-%COMP%]   ul.steps-indicator.steps-3[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n      width: 33.33333333%;\n    }\n    .horizontal[_nghost-%COMP%]   ul.steps-indicator.steps-4[_ngcontent-%COMP%]:before {\n      left: 12.5%;\n      right: 12.5%;\n    }\n    .horizontal[_nghost-%COMP%]   ul.steps-indicator.steps-4[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n      width: 25%;\n    }\n    .horizontal[_nghost-%COMP%]   ul.steps-indicator.steps-5[_ngcontent-%COMP%]:before {\n      left: 10%;\n      right: 10%;\n    }\n    .horizontal[_nghost-%COMP%]   ul.steps-indicator.steps-5[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n      width: 20%;\n    }\n    .horizontal[_nghost-%COMP%]   ul.steps-indicator.steps-6[_ngcontent-%COMP%]:before {\n      left: 8.33333333%;\n      right: 8.33333333%;\n    }\n    .horizontal[_nghost-%COMP%]   ul.steps-indicator.steps-6[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n      width: 16.66666667%;\n    }\n    .horizontal[_nghost-%COMP%]   ul.steps-indicator.steps-7[_ngcontent-%COMP%]:before {\n      left: 7.14285714%;\n      right: 7.14285714%;\n    }\n    .horizontal[_nghost-%COMP%]   ul.steps-indicator.steps-7[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n      width: 14.28571429%;\n    }\n    .horizontal[_nghost-%COMP%]   ul.steps-indicator.steps-8[_ngcontent-%COMP%]:before {\n      left: 6.25%;\n      right: 6.25%;\n    }\n    .horizontal[_nghost-%COMP%]   ul.steps-indicator.steps-8[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n      width: 12.5%;\n    }\n    .horizontal[_nghost-%COMP%]   ul.steps-indicator.steps-9[_ngcontent-%COMP%]:before {\n      left: 5.55555556%;\n      right: 5.55555556%;\n    }\n    .horizontal[_nghost-%COMP%]   ul.steps-indicator.steps-9[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n      width: 11.11111111%;\n    }\n    .horizontal[_nghost-%COMP%]   ul.steps-indicator.steps-10[_ngcontent-%COMP%]:before {\n      left: 5%;\n      right: 5%;\n    }\n    .horizontal[_nghost-%COMP%]   ul.steps-indicator.steps-10[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n      width: 10%;\n    }\n    .horizontal[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n      -webkit-box-sizing: border-box;\n      -moz-box-sizing: border-box;\n      box-sizing: border-box;\n    }\n    .horizontal[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n      position: relative;\n      margin: 0;\n      padding: 10px 0 0 0;\n      pointer-events: none;\n    }\n    .horizontal[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n    }\n    .horizontal[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n      color: #808080;\n      line-height: 14px;\n      font-size: 14px;\n      text-decoration: none;\n      text-transform: uppercase;\n      text-align: center;\n      font-weight: bold;\n      transition: 0.25s;\n      cursor: pointer;\n    }\n    .horizontal[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n      color: #4d4d4d;\n    }\n    .horizontal[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.navigable[_ngcontent-%COMP%] {\n      pointer-events: auto;\n    }\n    \n    \n    \n    .vertical[_nghost-%COMP%] {\n      max-width: 280px;\n      width: 20%;\n      height: 100%;\n      position: sticky;\n      top: 0;\n    }\n    .vertical.small[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%] {\n      padding: 5px 5px 5px 19px;\n    }\n    .vertical.small[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child):before {\n      background-color: #E6E6E6;\n      content: '';\n      position: absolute;\n      left: -7px;\n      top: 14px;\n      height: calc(100% - 14px);\n      width: 1px;\n    }\n    .vertical.small[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after {\n      position: absolute;\n      top: 0;\n      left: -14px;\n      width: 14px;\n      height: 14px;\n      content: '';\n      text-align: center;\n      vertical-align: middle;\n      line-height: 14px;\n      transition: 0.25s;\n      border-radius: 100%;\n      background-color: #E6E6E6;\n    }\n    .vertical.small[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n      min-height: 14px;\n    }\n    .vertical.small[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.default[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n      color: #808080;\n    }\n    .vertical.small[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.current[_ngcontent-%COMP%]:after {\n      background-color: #808080;\n    }\n    .vertical.small[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.done[_ngcontent-%COMP%]:after {\n      background-color: #339933;\n    }\n    .vertical.small[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.optional[_ngcontent-%COMP%]:after {\n      background-color: #38ef38;\n    }\n    .vertical.small[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.editing[_ngcontent-%COMP%]:after {\n      background-color: #FF0000;\n    }\n    .vertical.large-filled[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%] {\n      padding: 5px 5px 5px 55px;\n    }\n    .vertical.large-filled[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child):before {\n      background-color: #E6E6E6;\n      content: '';\n      position: absolute;\n      left: -25px;\n      top: 50px;\n      height: calc(100% - 50px);\n      width: 1px;\n    }\n    .vertical.large-filled[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after {\n      position: absolute;\n      top: 0;\n      left: -50px;\n      width: 50px;\n      height: 50px;\n      content: '';\n      text-align: center;\n      vertical-align: middle;\n      line-height: 50px;\n      transition: 0.25s;\n      border-radius: 100%;\n      background-color: #E6E6E6;\n    }\n    .vertical.large-filled[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n      min-height: 50px;\n    }\n    .vertical.large-filled[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.default[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n      color: #808080;\n    }\n    .vertical.large-filled[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.current[_ngcontent-%COMP%]:after {\n      background-color: #808080;\n    }\n    .vertical.large-filled[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.done[_ngcontent-%COMP%]:after {\n      background-color: #339933;\n    }\n    .vertical.large-filled[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.optional[_ngcontent-%COMP%]:after {\n      background-color: #38ef38;\n    }\n    .vertical.large-filled[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.editing[_ngcontent-%COMP%]:after {\n      background-color: #FF0000;\n    }\n    .vertical.large-empty[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%] {\n      padding: 5px 5px 5px 55px;\n    }\n    .vertical.large-empty[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child):before {\n      background-color: #E6E6E6;\n      content: '';\n      position: absolute;\n      left: -25px;\n      top: 50px;\n      height: calc(100% - 50px);\n      width: 1px;\n    }\n    .vertical.large-empty[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after {\n      position: absolute;\n      top: 0;\n      left: -50px;\n      width: 50px;\n      height: 50px;\n      content: '';\n      text-align: center;\n      vertical-align: middle;\n      line-height: 46px;\n      transition: 0.25s;\n      border-radius: 100%;\n      border-width: 2px;\n      border-style: solid;\n      border-color: #E6E6E6;\n    }\n    .vertical.large-empty[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n      min-height: 54px;\n    }\n    .vertical.large-empty[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.default[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n      color: #808080;\n    }\n    .vertical.large-empty[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.current[_ngcontent-%COMP%]:after {\n      border-width: 2px;\n      border-style: solid;\n      border-color: #808080;\n    }\n    .vertical.large-empty[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.done[_ngcontent-%COMP%]:after {\n      border-width: 2px;\n      border-style: solid;\n      border-color: #339933;\n    }\n    .vertical.large-empty[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.optional[_ngcontent-%COMP%]:after {\n      border-width: 2px;\n      border-style: solid;\n      border-color: #38ef38;\n    }\n    .vertical.large-empty[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.editing[_ngcontent-%COMP%]:after {\n      border-width: 2px;\n      border-style: solid;\n      border-color: #FF0000;\n    }\n    .vertical.large-filled-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%] {\n      padding: 5px 5px 5px 55px;\n    }\n    .vertical.large-filled-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child):before {\n      background-color: #E6E6E6;\n      content: '';\n      position: absolute;\n      left: -25px;\n      top: 50px;\n      height: calc(100% - 50px);\n      width: 1px;\n    }\n    .vertical.large-filled-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after {\n      position: absolute;\n      top: 0;\n      left: -50px;\n      width: 50px;\n      height: 50px;\n      content: '';\n      text-align: center;\n      vertical-align: middle;\n      line-height: 50px;\n      transition: 0.25s;\n      border-radius: 100%;\n      background-color: #E6E6E6;\n      color: black;\n      content: attr(step-symbol);\n    }\n    .vertical.large-filled-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n      min-height: 50px;\n    }\n    .vertical.large-filled-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.default[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n      color: #808080;\n    }\n    .vertical.large-filled-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.current[_ngcontent-%COMP%]:after {\n      background-color: #808080;\n      color: black;\n    }\n    .vertical.large-filled-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.done[_ngcontent-%COMP%]:after {\n      background-color: #339933;\n      color: black;\n    }\n    .vertical.large-filled-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.optional[_ngcontent-%COMP%]:after {\n      background-color: #38ef38;\n      color: black;\n    }\n    .vertical.large-filled-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.editing[_ngcontent-%COMP%]:after {\n      background-color: #FF0000;\n      color: black;\n    }\n    .vertical.large-empty-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%] {\n      padding: 5px 5px 5px 55px;\n    }\n    .vertical.large-empty-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child):before {\n      background-color: #E6E6E6;\n      content: '';\n      position: absolute;\n      left: -25px;\n      top: 50px;\n      height: calc(100% - 50px);\n      width: 1px;\n    }\n    .vertical.large-empty-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after {\n      position: absolute;\n      top: 0;\n      left: -50px;\n      width: 50px;\n      height: 50px;\n      content: '';\n      text-align: center;\n      vertical-align: middle;\n      line-height: 46px;\n      transition: 0.25s;\n      border-radius: 100%;\n      border-width: 2px;\n      border-style: solid;\n      border-color: #E6E6E6;\n      color: #E6E6E6;\n      content: attr(step-symbol);\n    }\n    .vertical.large-empty-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n      min-height: 54px;\n    }\n    .vertical.large-empty-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.default[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n      color: #808080;\n    }\n    .vertical.large-empty-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.current[_ngcontent-%COMP%]:after {\n      border-width: 2px;\n      border-style: solid;\n      border-color: #808080;\n      color: #808080;\n    }\n    .vertical.large-empty-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.done[_ngcontent-%COMP%]:after {\n      border-width: 2px;\n      border-style: solid;\n      border-color: #339933;\n      color: #339933;\n    }\n    .vertical.large-empty-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.optional[_ngcontent-%COMP%]:after {\n      border-width: 2px;\n      border-style: solid;\n      border-color: #38ef38;\n      color: #38ef38;\n    }\n    .vertical.large-empty-symbols[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.editing[_ngcontent-%COMP%]:after {\n      border-width: 2px;\n      border-style: solid;\n      border-color: #FF0000;\n      color: #FF0000;\n    }\n    .vertical[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      list-style: none;\n      margin: auto;\n      \n    }\n    .vertical[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n      -webkit-box-sizing: border-box;\n      -moz-box-sizing: border-box;\n      box-sizing: border-box;\n    }\n    .vertical[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n      position: relative;\n      pointer-events: none;\n    }\n    .vertical[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child) {\n      margin-bottom: 0;\n      padding-bottom: 10px;\n    }\n    .vertical[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n    }\n    .vertical[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n      color: #808080;\n      margin-left: 15px;\n      line-height: 14px;\n      font-size: 14px;\n      text-decoration: none;\n      text-transform: uppercase;\n      text-align: left;\n      font-weight: bold;\n      transition: 0.25s;\n      cursor: pointer;\n    }\n    .vertical[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n      color: #4d4d4d;\n    }\n    .vertical[_nghost-%COMP%]   ul.steps-indicator[_ngcontent-%COMP%]   li.navigable[_ngcontent-%COMP%] {\n      pointer-events: auto;\n    }"],
                    data: {}
                });

            function j(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 16777216, null, null, 1, null, null, null, null, null, null, null)), t["\u0275did"](1, 540672, null, 0, m.NgTemplateOutlet, [t.ViewContainerRef], {
                    ngTemplateOutlet: [0, "ngTemplateOutlet"]
                }, null), (n()(), t["\u0275and"](0, null, null, 0))], function(n, l) {
                    n(l, 1, 0, l.parent.context.$implicit.stepTitleTemplate.templateRef)
                }, null)
            }

            function k(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (n()(), t["\u0275ted"](1, null, ["", ""]))], null, function(n, l) {
                    n(l, 1, 0, l.parent.context.$implicit.stepTitle)
                })
            }

            function I(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 11, "li", [], [
                    [1, "step-symbol", 0]
                ], null, null, null, null)), t["\u0275did"](1, 278528, null, 0, m.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                    ngClass: [0, "ngClass"]
                }, null), t["\u0275pod"](2, {
                    default: 0,
                    current: 1,
                    done: 2,
                    editing: 3,
                    optional: 4,
                    navigable: 5
                }), t["\u0275did"](3, 278528, null, 0, m.NgStyle, [t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                    ngStyle: [0, "ngStyle"]
                }, null), t["\u0275pod"](4, {
                    "font-family": 0
                }), (n()(), t["\u0275eld"](5, 0, null, null, 6, "div", [], null, null, null, null, null)), (n()(), t["\u0275eld"](6, 0, null, null, 5, "a", [], null, [
                    [null, "click"]
                ], function(n, l, e) {
                    var o = !0;
                    return "click" === l && (o = !1 !== t["\u0275nov"](n, 7).onClick(e) && o), o
                }, null, null)), t["\u0275did"](7, 16384, null, 0, E, [S, [2, b]], {
                    goToStep: [0, "goToStep"]
                }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, j)), t["\u0275did"](9, 16384, null, 0, m.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, k)), t["\u0275did"](11, 16384, null, 0, m.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(n, l) {
                    var e = l.component;
                    n(l, 1, 0, n(l, 2, 0, e.isDefault(l.context.$implicit), e.isCurrent(l.context.$implicit), e.isDone(l.context.$implicit), e.isEditing(l.context.$implicit), e.isOptional(l.context.$implicit), e.isNavigable(l.context.$implicit))), n(l, 3, 0, n(l, 4, 0, l.context.$implicit.navigationSymbolFontFamily)), n(l, 7, 0, l.context.$implicit), n(l, 9, 0, l.context.$implicit.stepTitleTemplate), n(l, 11, 0, !l.context.$implicit.stepTitleTemplate)
                }, function(n, l) {
                    n(l, 0, 0, l.context.$implicit.navigationSymbol)
                })
            }

            function N(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "ul", [], [
                    [8, "className", 0]
                ], null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, I)), t["\u0275did"](2, 802816, null, 0, m.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                    ngForOf: [0, "ngForOf"]
                }, null)], function(n, l) {
                    n(l, 2, 0, l.component.wizardSteps)
                }, function(n, l) {
                    n(l, 0, 0, t["\u0275inlineInterpolate"](1, "steps-indicator steps-", l.component.numberOfWizardSteps, ""))
                })
            }
            var T = function() {
                    function n(n) {
                        this.model = n, this.navBarLocation = "top", this.navBarLayout = "small", this.navBarDirection = "left-to-right", this.navigationMode = "strict", this.defaultStepIndex = 0, this.disableNavigationBar = !1
                    }
                    return Object.defineProperty(n.prototype, "horizontalOrientation", {
                        get: function() {
                            return "top" === this.navBarLocation || "bottom" === this.navBarLocation
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(n.prototype, "verticalOrientation", {
                        get: function() {
                            return "left" === this.navBarLocation || "right" === this.navBarLocation
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(n.prototype, "navigation", {
                        get: function() {
                            return this.model.navigationMode
                        },
                        enumerable: !0,
                        configurable: !0
                    }), n.prototype.ngAfterContentInit = function() {
                        this.model.initialize(this.wizardSteps, this.navigationMode, this.defaultStepIndex, this.disableNavigationBar)
                    }, n
                }(),
                A = t["\u0275crt"]({
                    encapsulation: 0,
                    styles: ["[_nghost-%COMP%] {\n      display: flex;\n      justify-content: flex-start;\n    }\n    .vertical[_nghost-%COMP%] {\n      flex-direction: row;\n    }\n    .horizontal[_nghost-%COMP%] {\n      flex-direction: column;\n    }\n    [_nghost-%COMP%]   .wizard-steps[_ngcontent-%COMP%] {\n      top: 0;\n      display: flex;\n    }\n    [_nghost-%COMP%]   .wizard-steps.vertical[_ngcontent-%COMP%] {\n      min-width: calc(100% - 280px);\n      width: 80%;\n      height: 100%;\n      flex-direction: column;\n    }\n    [_nghost-%COMP%]   .wizard-steps.horizontal[_ngcontent-%COMP%] {\n      width: 100%;\n      flex-direction: row;\n    }"],
                    data: {}
                });

            function D(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 3, "wizard-navigation-bar", [], null, null, null, N, M)), t["\u0275did"](1, 278528, null, 0, m.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                    ngClass: [0, "ngClass"]
                }, null), t["\u0275pod"](2, {
                    vertical: 0,
                    horizontal: 1,
                    small: 2,
                    "large-filled": 3,
                    "large-filled-symbols": 4,
                    "large-empty": 5,
                    "large-empty-symbols": 6
                }), t["\u0275did"](3, 49152, null, 0, P, [S], {
                    direction: [0, "direction"]
                }, null)], function(n, l) {
                    var e = l.component;
                    n(l, 1, 0, n(l, 2, 0, "left" == e.navBarLocation, "top" == e.navBarLocation, "small" == e.navBarLayout, "large-filled" == e.navBarLayout, "large-filled-symbols" == e.navBarLayout, "large-empty" == e.navBarLayout, "large-empty-symbols" == e.navBarLayout)), n(l, 3, 0, e.navBarDirection)
                }, null)
            }

            function R(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 3, "wizard-navigation-bar", [], null, null, null, N, M)), t["\u0275did"](1, 278528, null, 0, m.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                    ngClass: [0, "ngClass"]
                }, null), t["\u0275pod"](2, {
                    vertical: 0,
                    horizontal: 1,
                    small: 2,
                    "large-filled": 3,
                    "large-filled-symbols": 4,
                    "large-empty": 5,
                    "large-empty-symbols": 6
                }), t["\u0275did"](3, 49152, null, 0, P, [S], {
                    direction: [0, "direction"]
                }, null)], function(n, l) {
                    var e = l.component;
                    n(l, 1, 0, n(l, 2, 0, "right" == e.navBarLocation, "bottom" == e.navBarLocation, "small" == e.navBarLayout, "large-filled" == e.navBarLayout, "large-filled-symbols" == e.navBarLayout, "large-empty" == e.navBarLayout, "large-empty-symbols" == e.navBarLayout)), n(l, 3, 0, e.navBarDirection)
                }, null)
            }

            function F(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275and"](16777216, null, null, 1, null, D)), t["\u0275did"](1, 16384, null, 0, m.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (n()(), t["\u0275eld"](2, 0, null, null, 3, "div", [], null, null, null, null, null)), t["\u0275did"](3, 278528, null, 0, m.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                    ngClass: [0, "ngClass"]
                }, null), t["\u0275pod"](4, {
                    "wizard-steps": 0,
                    vertical: 1,
                    horizontal: 2
                }), t["\u0275ncd"](null, 0), (n()(), t["\u0275and"](16777216, null, null, 1, null, R)), t["\u0275did"](7, 16384, null, 0, m.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(n, l) {
                    var e = l.component;
                    n(l, 1, 0, "top" == e.navBarLocation || "left" == e.navBarLocation), n(l, 3, 0, n(l, 4, 0, !0, "left" == e.navBarLocation || "right" == e.navBarLocation, "top" == e.navBarLocation || "bottom" == e.navBarLocation)), n(l, 7, 0, "bottom" == e.navBarLocation || "right" == e.navBarLocation)
                }, null)
            }
            var V = function() {
                    var n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(n, l) {
                        n.__proto__ = l
                    } || function(n, l) {
                        for (var e in l) l.hasOwnProperty(e) && (n[e] = l[e])
                    };
                    return function(l, e) {
                        function t() {
                            this.constructor = l
                        }
                        n(l, e), l.prototype = null === e ? Object.create(e) : (t.prototype = e.prototype, new t)
                    }
                }(),
                z = function(n) {
                    function l() {
                        return null !== n && n.apply(this, arguments) || this
                    }
                    return V(l, n), l
                }(b),
                L = t["\u0275crt"]({
                    encapsulation: 0,
                    styles: ["[_nghost-%COMP%] {\n      height: auto;\n      width: 100%;\n    }"],
                    data: {}
                });

            function G(n) {
                return t["\u0275vid"](0, [t["\u0275ncd"](null, 0)], null, null)
            }
            var U = function() {
                    function n(n) {
                        this.wizardState = n, this.preFinalize = new t.EventEmitter, this.postFinalize = new t.EventEmitter
                    }
                    return Object.defineProperty(n.prototype, "finalize", {
                        get: function() {
                            return this.preFinalize
                        },
                        set: function(n) {
                            this.preFinalize = n
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(n.prototype, "navigationMode", {
                        get: function() {
                            return this.wizardState.navigationMode
                        },
                        enumerable: !0,
                        configurable: !0
                    }), n.prototype.onClick = function() {
                        this.navigationMode.goToNextStep(this.preFinalize, this.postFinalize)
                    }, n
                }(),
                B = function() {
                    function n(n) {
                        this.wizardStep = n
                    }
                    return n.prototype.ngOnInit = function() {
                        this.wizardStep.optional = !0
                    }, n
                }(),
                q = function() {
                    function n(n) {
                        this.wizardState = n, this.preFinalize = new t.EventEmitter, this.postFinalize = new t.EventEmitter
                    }
                    return Object.defineProperty(n.prototype, "finalize", {
                        get: function() {
                            return this.preFinalize
                        },
                        set: function(n) {
                            this.preFinalize = n
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(n.prototype, "navigationMode", {
                        get: function() {
                            return this.wizardState.navigationMode
                        },
                        enumerable: !0,
                        configurable: !0
                    }), n.prototype.onClick = function() {
                        this.navigationMode.goToPreviousStep(this.preFinalize, this.postFinalize)
                    }, n
                }(),
                H = function() {
                    function n(n) {
                        this.pageTitleService = n
                    }
                    return n.prototype.ngOnInit = function() {
                        this.pageTitleService.setTitle("Form Wizard")
                    }, n.prototype.finishFunction = function() {}, n
                }(),
                Y = t["\u0275crt"]({
                    encapsulation: 2,
                    styles: [
                        ["@media (max-width:560px){wizard-step .btn.btn-primary{margin:.2rem 0}}"]
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

            function K(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 137, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](2, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](3, 0, null, null, 2, "div", [], null, null, null, null, null)), (n()(), t["\u0275eld"](4, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Form Wizard"])), (n()(), t["\u0275eld"](6, 0, null, null, 131, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](7, 0, null, null, 130, "wizard", [], [
                    [2, "horizontal", null],
                    [2, "vertical", null]
                ], null, null, F, A)), t["\u0275prd"](512, null, S, S, []), t["\u0275did"](9, 1097728, null, 1, T, [S], null, null), t["\u0275qud"](603979776, 1, {
                    wizardSteps: 1
                }), (n()(), t["\u0275eld"](11, 0, null, 0, 54, "wizard-step", [
                    ["stepTitle", "Step 1 - Make Profile"]
                ], [
                    [8, "hidden", 0]
                ], null, null, G, L)), t["\u0275did"](12, 49152, null, 1, z, [], {
                    stepTitle: [0, "stepTitle"]
                }, null), t["\u0275qud"](335544320, 2, {
                    stepTitleTemplate: 0
                }), t["\u0275prd"](2048, [
                    [1, 4]
                ], b, null, [z]), (n()(), t["\u0275eld"](15, 0, null, 0, 1, "h2", [
                    ["class", "text-primary"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Step 1"])), (n()(), t["\u0275eld"](17, 0, null, 0, 42, "form", [
                    ["class", "mb-4"],
                    ["novalidate", ""]
                ], [
                    [2, "ng-untouched", null],
                    [2, "ng-touched", null],
                    [2, "ng-pristine", null],
                    [2, "ng-dirty", null],
                    [2, "ng-valid", null],
                    [2, "ng-invalid", null],
                    [2, "ng-pending", null]
                ], [
                    [null, "submit"],
                    [null, "reset"]
                ], function(n, l, e) {
                    var o = !0;
                    return "submit" === l && (o = !1 !== t["\u0275nov"](n, 19).onSubmit(e) && o), "reset" === l && (o = !1 !== t["\u0275nov"](n, 19).onReset() && o), o
                }, null, null)), t["\u0275did"](18, 16384, null, 0, r["\u0275angular_packages_forms_forms_bg"], [], null, null), t["\u0275did"](19, 4210688, null, 0, r.NgForm, [
                    [8, null],
                    [8, null]
                ], null, null), t["\u0275prd"](2048, null, r.ControlContainer, null, [r.NgForm]), t["\u0275did"](21, 16384, null, 0, r.NgControlStatusGroup, [
                    [4, r.ControlContainer]
                ], null, null), (n()(), t["\u0275eld"](22, 0, null, null, 8, "div", [
                    ["class", "form-row"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](23, 0, null, null, 3, "div", [
                    ["class", "form-group col-md-6"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](24, 0, null, null, 1, "label", [
                    ["class", "col-form-label"],
                    ["for", "inputEmail4"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Email"])), (n()(), t["\u0275eld"](26, 0, null, null, 0, "input", [
                    ["class", "form-control"],
                    ["id", "inputEmail4"],
                    ["placeholder", "Email"],
                    ["type", "email"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](27, 0, null, null, 3, "div", [
                    ["class", "form-group col-md-6"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](28, 0, null, null, 1, "label", [
                    ["class", "col-form-label"],
                    ["for", "inputPassword4"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Password"])), (n()(), t["\u0275eld"](30, 0, null, null, 0, "input", [
                    ["class", "form-control"],
                    ["id", "inputPassword4"],
                    ["placeholder", "Password"],
                    ["type", "password"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](31, 0, null, null, 3, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](32, 0, null, null, 1, "label", [
                    ["class", "col-form-label"],
                    ["for", "inputAddress"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Address"])), (n()(), t["\u0275eld"](34, 0, null, null, 0, "input", [
                    ["class", "form-control"],
                    ["id", "inputAddress"],
                    ["placeholder", "1234 Main St"],
                    ["type", "text"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](35, 0, null, null, 3, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](36, 0, null, null, 1, "label", [
                    ["class", "col-form-label"],
                    ["for", "inputAddress2"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Address 2"])), (n()(), t["\u0275eld"](38, 0, null, null, 0, "input", [
                    ["class", "form-control"],
                    ["id", "inputAddress2"],
                    ["placeholder", "Apartment, studio, or floor"],
                    ["type", "text"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](39, 0, null, null, 13, "div", [
                    ["class", "form-row"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](40, 0, null, null, 3, "div", [
                    ["class", "form-group col-md-6"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](41, 0, null, null, 1, "label", [
                    ["class", "col-form-label"],
                    ["for", "inputCity"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["City"])), (n()(), t["\u0275eld"](43, 0, null, null, 0, "input", [
                    ["class", "form-control"],
                    ["id", "inputCity"],
                    ["type", "text"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](44, 0, null, null, 4, "div", [
                    ["class", "form-group col-md-4"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](45, 0, null, null, 1, "label", [
                    ["class", "col-form-label"],
                    ["for", "inputState"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["State"])), (n()(), t["\u0275eld"](47, 0, null, null, 1, "select", [
                    ["class", "form-control"],
                    ["id", "inputState"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Choose"])), (n()(), t["\u0275eld"](49, 0, null, null, 3, "div", [
                    ["class", "form-group col-md-2"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](50, 0, null, null, 1, "label", [
                    ["class", "col-form-label"],
                    ["for", "inputZip"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Zip"])), (n()(), t["\u0275eld"](52, 0, null, null, 0, "input", [
                    ["class", "form-control"],
                    ["id", "inputZip"],
                    ["type", "text"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](53, 0, null, null, 4, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](54, 0, null, null, 3, "div", [
                    ["class", "form-check"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](55, 0, null, null, 2, "label", [
                    ["class", "form-check-label"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](56, 0, null, null, 0, "input", [
                    ["class", "form-check-input"],
                    ["type", "checkbox"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, [" Check me out "])), (n()(), t["\u0275eld"](58, 0, null, null, 1, "button", [
                    ["class", "btn btn-primary"],
                    ["type", "submit"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Sign in"])), (n()(), t["\u0275eld"](60, 0, null, 0, 2, "button", [
                    ["class", "btn btn-primary"],
                    ["nextStep", ""],
                    ["type", "button"]
                ], null, [
                    [null, "click"]
                ], function(n, l, e) {
                    var o = !0;
                    return "click" === l && (o = !1 !== t["\u0275nov"](n, 61).onClick(e) && o), o
                }, null, null)), t["\u0275did"](61, 16384, null, 0, U, [S], null, null), (n()(), t["\u0275ted"](-1, null, ["Next Step"])), (n()(), t["\u0275eld"](63, 0, null, 0, 2, "button", [
                    ["class", "btn btn-primary"],
                    ["goToStep", "2"],
                    ["type", "button"]
                ], null, [
                    [null, "click"]
                ], function(n, l, e) {
                    var o = !0;
                    return "click" === l && (o = !1 !== t["\u0275nov"](n, 64).onClick(e) && o), o
                }, null, null)), t["\u0275did"](64, 16384, null, 0, E, [S, [2, b]], {
                    goToStep: [0, "goToStep"]
                }, null), (n()(), t["\u0275ted"](-1, null, ["Go directly to third Step"])), (n()(), t["\u0275eld"](66, 0, null, 0, 55, "wizard-step", [
                    ["optionalStep", ""],
                    ["stepTitle", "Company Info"]
                ], [
                    [8, "hidden", 0]
                ], null, null, G, L)), t["\u0275did"](67, 49152, null, 1, z, [], {
                    stepTitle: [0, "stepTitle"]
                }, null), t["\u0275qud"](335544320, 3, {
                    stepTitleTemplate: 0
                }), t["\u0275prd"](2048, [
                    [1, 4]
                ], b, null, [z]), t["\u0275did"](70, 81920, null, 0, B, [b], null, null), (n()(), t["\u0275eld"](71, 0, null, 0, 1, "h2", [
                    ["class", "text-primary"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Step 2"])), (n()(), t["\u0275eld"](73, 0, null, 0, 42, "form", [
                    ["class", "mb-4"],
                    ["novalidate", ""]
                ], [
                    [2, "ng-untouched", null],
                    [2, "ng-touched", null],
                    [2, "ng-pristine", null],
                    [2, "ng-dirty", null],
                    [2, "ng-valid", null],
                    [2, "ng-invalid", null],
                    [2, "ng-pending", null]
                ], [
                    [null, "submit"],
                    [null, "reset"]
                ], function(n, l, e) {
                    var o = !0;
                    return "submit" === l && (o = !1 !== t["\u0275nov"](n, 75).onSubmit(e) && o), "reset" === l && (o = !1 !== t["\u0275nov"](n, 75).onReset() && o), o
                }, null, null)), t["\u0275did"](74, 16384, null, 0, r["\u0275angular_packages_forms_forms_bg"], [], null, null), t["\u0275did"](75, 4210688, null, 0, r.NgForm, [
                    [8, null],
                    [8, null]
                ], null, null), t["\u0275prd"](2048, null, r.ControlContainer, null, [r.NgForm]), t["\u0275did"](77, 16384, null, 0, r.NgControlStatusGroup, [
                    [4, r.ControlContainer]
                ], null, null), (n()(), t["\u0275eld"](78, 0, null, null, 8, "div", [
                    ["class", "form-row"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](79, 0, null, null, 3, "div", [
                    ["class", "form-group col-md-6"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](80, 0, null, null, 1, "label", [
                    ["class", "col-form-label"],
                    ["for", "inputcname"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Company Name"])), (n()(), t["\u0275eld"](82, 0, null, null, 0, "input", [
                    ["class", "form-control"],
                    ["id", "inputcname"],
                    ["placeholder", "Enter Company Name"],
                    ["type", "text"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](83, 0, null, null, 3, "div", [
                    ["class", "form-group col-md-6"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](84, 0, null, null, 1, "label", [
                    ["class", "col-form-label"],
                    ["for", "inputd"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Desination"])), (n()(), t["\u0275eld"](86, 0, null, null, 0, "input", [
                    ["class", "form-control"],
                    ["id", "inputd"],
                    ["placeholder", "Desination"],
                    ["type", "text"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](87, 0, null, null, 3, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](88, 0, null, null, 1, "label", [
                    ["class", "col-form-label"],
                    ["for", "companyAddress"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Company Address"])), (n()(), t["\u0275eld"](90, 0, null, null, 0, "input", [
                    ["class", "form-control"],
                    ["id", "companyAddress"],
                    ["placeholder", "Address"],
                    ["type", "text"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](91, 0, null, null, 3, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](92, 0, null, null, 1, "label", [
                    ["class", "col-form-label"],
                    ["for", "companyAddress2"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Company H.Q. Address"])), (n()(), t["\u0275eld"](94, 0, null, null, 0, "input", [
                    ["class", "form-control"],
                    ["id", "companyAddress2"],
                    ["placeholder", "H.Q. Address"],
                    ["type", "text"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](95, 0, null, null, 13, "div", [
                    ["class", "form-row"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](96, 0, null, null, 3, "div", [
                    ["class", "form-group col-md-6"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](97, 0, null, null, 1, "label", [
                    ["class", "col-form-label"],
                    ["for", "inputCity2"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["City"])), (n()(), t["\u0275eld"](99, 0, null, null, 0, "input", [
                    ["class", "form-control"],
                    ["id", "inputCity2"],
                    ["type", "text"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](100, 0, null, null, 4, "div", [
                    ["class", "form-group col-md-4"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](101, 0, null, null, 1, "label", [
                    ["class", "col-form-label"],
                    ["for", "inputState2"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["State"])), (n()(), t["\u0275eld"](103, 0, null, null, 1, "select", [
                    ["class", "form-control"],
                    ["id", "inputState2"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Choose"])), (n()(), t["\u0275eld"](105, 0, null, null, 3, "div", [
                    ["class", "form-group col-md-2"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](106, 0, null, null, 1, "label", [
                    ["class", "col-form-label"],
                    ["for", "inputZip2"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Zip"])), (n()(), t["\u0275eld"](108, 0, null, null, 0, "input", [
                    ["class", "form-control"],
                    ["id", "inputZip2"],
                    ["type", "text"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](109, 0, null, null, 4, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](110, 0, null, null, 3, "div", [
                    ["class", "form-check"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](111, 0, null, null, 2, "label", [
                    ["class", "form-check-label"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](112, 0, null, null, 0, "input", [
                    ["class", "form-check-input"],
                    ["type", "checkbox"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, [" Check me out "])), (n()(), t["\u0275eld"](114, 0, null, null, 1, "button", [
                    ["class", "btn btn-primary"],
                    ["type", "submit"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Sign in"])), (n()(), t["\u0275eld"](116, 0, null, 0, 2, "button", [
                    ["class", "btn btn-primary"],
                    ["previousStep", ""],
                    ["type", "button"]
                ], null, [
                    [null, "click"]
                ], function(n, l, e) {
                    var o = !0;
                    return "click" === l && (o = !1 !== t["\u0275nov"](n, 117).onClick(e) && o), o
                }, null, null)), t["\u0275did"](117, 16384, null, 0, q, [S], null, null), (n()(), t["\u0275ted"](-1, null, ["Go to previous step"])), (n()(), t["\u0275eld"](119, 0, null, 0, 2, "button", [
                    ["class", "btn btn-primary"],
                    ["nextStep", ""],
                    ["type", "button"]
                ], null, [
                    [null, "click"]
                ], function(n, l, e) {
                    var o = !0;
                    return "click" === l && (o = !1 !== t["\u0275nov"](n, 120).onClick(e) && o), o
                }, null, null)), t["\u0275did"](120, 16384, null, 0, U, [S], null, null), (n()(), t["\u0275ted"](-1, null, ["Go to next step"])), (n()(), t["\u0275eld"](122, 0, null, 0, 15, "wizard-step", [
                    ["stepTitle", "Complete"]
                ], [
                    [8, "hidden", 0]
                ], null, null, G, L)), t["\u0275did"](123, 49152, null, 1, z, [], {
                    stepTitle: [0, "stepTitle"]
                }, null), t["\u0275qud"](335544320, 4, {
                    stepTitleTemplate: 0
                }), t["\u0275prd"](2048, [
                    [1, 4]
                ], b, null, [z]), (n()(), t["\u0275eld"](126, 0, null, 0, 1, "h2", [
                    ["class", "text-primary"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Step 3"])), (n()(), t["\u0275eld"](128, 0, null, 0, 4, "div", [
                    ["class", "mt-3 mb-3 col-xl-8 p-0"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](129, 0, null, null, 1, "h3", [], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Thanks for Resgistration"])), (n()(), t["\u0275eld"](131, 0, null, null, 1, "p", [], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, vero! Aliquid consequuntur in, praesentium nisi repellendus et cumque illo asperiores sunt odio dolorum ea repellat debitis hic necessitatibus dolore totam velit earum, eaque ut voluptates tempora illum magnam. Quibusdam, officiis aut nesciunt perferendis in iste cupiditate itaque earum excepturi molestiae."])), (n()(), t["\u0275eld"](133, 0, null, 0, 2, "button", [
                    ["class", "btn btn-primary"],
                    ["previousStep", ""],
                    ["type", "button"]
                ], null, [
                    [null, "click"]
                ], function(n, l, e) {
                    var o = !0;
                    return "click" === l && (o = !1 !== t["\u0275nov"](n, 134).onClick(e) && o), o
                }, null, null)), t["\u0275did"](134, 16384, null, 0, q, [S], null, null), (n()(), t["\u0275ted"](-1, null, ["Previous Step"])), (n()(), t["\u0275eld"](136, 0, null, 0, 1, "button", [
                    ["class", "btn btn-primary"],
                    ["type", "button"]
                ], null, [
                    [null, "click"]
                ], function(n, l, e) {
                    var t = !0;
                    return "click" === l && (t = !1 !== n.component.finishFunction() && t), t
                }, null, null)), (n()(), t["\u0275ted"](-1, null, ["Finish"]))], function(n, l) {
                    n(l, 12, 0, "Step 1 - Make Profile"), n(l, 64, 0, "2"), n(l, 67, 0, "Company Info"), n(l, 70, 0), n(l, 123, 0, "Complete")
                }, function(n, l) {
                    n(l, 7, 0, t["\u0275nov"](l, 9).horizontalOrientation, t["\u0275nov"](l, 9).verticalOrientation), n(l, 11, 0, t["\u0275nov"](l, 12).hidden), n(l, 17, 0, t["\u0275nov"](l, 21).ngClassUntouched, t["\u0275nov"](l, 21).ngClassTouched, t["\u0275nov"](l, 21).ngClassPristine, t["\u0275nov"](l, 21).ngClassDirty, t["\u0275nov"](l, 21).ngClassValid, t["\u0275nov"](l, 21).ngClassInvalid, t["\u0275nov"](l, 21).ngClassPending), n(l, 66, 0, t["\u0275nov"](l, 67).hidden), n(l, 73, 0, t["\u0275nov"](l, 77).ngClassUntouched, t["\u0275nov"](l, 77).ngClassTouched, t["\u0275nov"](l, 77).ngClassPristine, t["\u0275nov"](l, 77).ngClassDirty, t["\u0275nov"](l, 77).ngClassValid, t["\u0275nov"](l, 77).ngClassInvalid, t["\u0275nov"](l, 77).ngClassPending), n(l, 122, 0, t["\u0275nov"](l, 123).hidden)
                })
            }
            var W = t["\u0275ccf"]("ms-form-wizard", H, function(n) {
                    return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "ms-form-wizard", [], [
                        [40, "@fadeInAnimation", 0]
                    ], null, null, K, Y)), t["\u0275did"](1, 114688, null, 0, H, [i.a], null, null)], function(n, l) {
                        n(l, 1, 0)
                    }, function(n, l) {
                        n(l, 0, 0, !0)
                    })
                }, {}, {}, []),
                Z = e("JdLL"),
                J = new r.FormControl("", r.Validators.required),
                Q = new r.FormControl("", Z.CustomValidators.equalTo(J)),
                X = function() {
                    function n(n, l) {
                        this.fb = n, this.pageTitleService = l
                    }
                    return n.prototype.ngOnInit = function() {
                        this.pageTitleService.setTitle("Form Validation"), this.form = this.fb.group({
                            fname: [null, r.Validators.compose([r.Validators.required, r.Validators.minLength(5), r.Validators.maxLength(10)])],
                            email: [null, r.Validators.compose([r.Validators.required, Z.CustomValidators.email])],
                            range: [null, r.Validators.compose([r.Validators.required, Z.CustomValidators.range([5, 9])])],
                            url: [null, r.Validators.compose([r.Validators.required, Z.CustomValidators.url])],
                            date: [null, r.Validators.compose([r.Validators.required, Z.CustomValidators.date])],
                            creditCard: [null, r.Validators.compose([r.Validators.required, Z.CustomValidators.creditCard])],
                            phone: [null, r.Validators.compose([r.Validators.required, r.Validators.minLength(5), r.Validators.maxLength(10)])],
                            password: J,
                            confirmPassword: Q
                        })
                    }, n
                }(),
                nn = t["\u0275crt"]({
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

            function ln(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "small", [
                    ["class", "text-danger"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, [" You must include a first name. "]))], null, null)
            }

            function en(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "small", [
                    ["class", "text-danger"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, [" Your first name must be at least 5 characters long. "]))], null, null)
            }

            function tn(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "small", [
                    ["class", "text-danger"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, [" Your first name cannot exceed 10 characters. "]))], null, null)
            }

            function on(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "small", [
                    ["class", "text-danger"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, [" You must include an email address. "]))], null, null)
            }

            function un(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "small", [
                    ["class", "text-danger"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, [" You must include a valid email address. "]))], null, null)
            }

            function rn(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "small", [
                    ["class", "text-danger"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["You must include a web address. "]))], null, null)
            }

            function an(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "small", [
                    ["class", "text-danger"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, [" You must include a valid web address. "]))], null, null)
            }

            function dn(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "small", [
                    ["class", "text-danger"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, [" You must include a date. "]))], null, null)
            }

            function sn(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "small", [
                    ["class", "text-danger"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, [" You must include a valid date. "]))], null, null)
            }

            function cn(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "small", [
                    ["class", "text-danger"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, [" You must enter a number. "]))], null, null)
            }

            function pn(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "small", [
                    ["class", "text-danger"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, [" Number should be between 5 and 9. "]))], null, null)
            }

            function fn(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "small", [
                    ["class", "text-danger"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, [" You must enter a credit card. "]))], null, null)
            }

            function hn(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "small", [
                    ["class", "text-danger"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, [" You must enter a valid credit card number. "]))], null, null)
            }

            function gn(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "small", [
                    ["class", "text-danger"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, [" You must include phone number. "]))], null, null)
            }

            function mn(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "small", [
                    ["class", "text-danger"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, [" You must include a valid phone number. "]))], null, null)
            }

            function vn(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "small", [
                    ["class", "text-danger"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, [" You must include password. "]))], null, null)
            }

            function bn(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "small", [
                    ["class", "text-danger"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, [" You must include confirm password. "]))], null, null)
            }

            function yn(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "small", [
                    ["class", "text-danger"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, [" Passwords do not match. "]))], null, null)
            }

            function $n(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 114, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 113, "div", [
                    ["class", "col-sm-12 col-md-10 col-lg-8 mx-auto"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](2, 0, null, null, 112, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](3, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](4, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Form Validation"])), (n()(), t["\u0275eld"](6, 0, null, null, 108, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](7, 0, null, null, 107, "form", [
                    ["novalidate", ""]
                ], [
                    [2, "ng-untouched", null],
                    [2, "ng-touched", null],
                    [2, "ng-pristine", null],
                    [2, "ng-dirty", null],
                    [2, "ng-valid", null],
                    [2, "ng-invalid", null],
                    [2, "ng-pending", null]
                ], [
                    [null, "submit"],
                    [null, "reset"]
                ], function(n, l, e) {
                    var o = !0;
                    return "submit" === l && (o = !1 !== t["\u0275nov"](n, 9).onSubmit(e) && o), "reset" === l && (o = !1 !== t["\u0275nov"](n, 9).onReset() && o), o
                }, null, null)), t["\u0275did"](8, 16384, null, 0, r["\u0275angular_packages_forms_forms_bg"], [], null, null), t["\u0275did"](9, 540672, null, 0, r.FormGroupDirective, [
                    [8, null],
                    [8, null]
                ], {
                    form: [0, "form"]
                }, null), t["\u0275prd"](2048, null, r.ControlContainer, null, [r.FormGroupDirective]), t["\u0275did"](11, 16384, null, 0, r.NgControlStatusGroup, [
                    [4, r.ControlContainer]
                ], null, null), (n()(), t["\u0275eld"](12, 0, null, null, 6, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](13, 0, null, null, 5, "input", [
                    ["class", "form-control"],
                    ["placeholder", "First name"]
                ], [
                    [2, "ng-untouched", null],
                    [2, "ng-touched", null],
                    [2, "ng-pristine", null],
                    [2, "ng-dirty", null],
                    [2, "ng-valid", null],
                    [2, "ng-invalid", null],
                    [2, "ng-pending", null]
                ], [
                    [null, "input"],
                    [null, "blur"],
                    [null, "compositionstart"],
                    [null, "compositionend"]
                ], function(n, l, e) {
                    var o = !0;
                    return "input" === l && (o = !1 !== t["\u0275nov"](n, 14)._handleInput(e.target.value) && o), "blur" === l && (o = !1 !== t["\u0275nov"](n, 14).onTouched() && o), "compositionstart" === l && (o = !1 !== t["\u0275nov"](n, 14)._compositionStart() && o), "compositionend" === l && (o = !1 !== t["\u0275nov"](n, 14)._compositionEnd(e.target.value) && o), o
                }, null, null)), t["\u0275did"](14, 16384, null, 0, r.DefaultValueAccessor, [t.Renderer2, t.ElementRef, [2, r.COMPOSITION_BUFFER_MODE]], null, null), t["\u0275prd"](1024, null, r.NG_VALUE_ACCESSOR, function(n) {
                    return [n]
                }, [r.DefaultValueAccessor]), t["\u0275did"](16, 540672, null, 0, r.FormControlDirective, [
                    [8, null],
                    [8, null],
                    [6, r.NG_VALUE_ACCESSOR],
                    [2, r["\u0275angular_packages_forms_forms_j"]]
                ], {
                    form: [0, "form"]
                }, null), t["\u0275prd"](2048, null, r.NgControl, null, [r.FormControlDirective]), t["\u0275did"](18, 16384, null, 0, r.NgControlStatus, [
                    [4, r.NgControl]
                ], null, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, ln)), t["\u0275did"](20, 16384, null, 0, m.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, en)), t["\u0275did"](22, 16384, null, 0, m.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, tn)), t["\u0275did"](24, 16384, null, 0, m.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (n()(), t["\u0275eld"](25, 0, null, null, 6, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](26, 0, null, null, 5, "input", [
                    ["class", "form-control"],
                    ["placeholder", "Email address"],
                    ["type", "email"]
                ], [
                    [2, "ng-untouched", null],
                    [2, "ng-touched", null],
                    [2, "ng-pristine", null],
                    [2, "ng-dirty", null],
                    [2, "ng-valid", null],
                    [2, "ng-invalid", null],
                    [2, "ng-pending", null]
                ], [
                    [null, "input"],
                    [null, "blur"],
                    [null, "compositionstart"],
                    [null, "compositionend"]
                ], function(n, l, e) {
                    var o = !0;
                    return "input" === l && (o = !1 !== t["\u0275nov"](n, 27)._handleInput(e.target.value) && o), "blur" === l && (o = !1 !== t["\u0275nov"](n, 27).onTouched() && o), "compositionstart" === l && (o = !1 !== t["\u0275nov"](n, 27)._compositionStart() && o), "compositionend" === l && (o = !1 !== t["\u0275nov"](n, 27)._compositionEnd(e.target.value) && o), o
                }, null, null)), t["\u0275did"](27, 16384, null, 0, r.DefaultValueAccessor, [t.Renderer2, t.ElementRef, [2, r.COMPOSITION_BUFFER_MODE]], null, null), t["\u0275prd"](1024, null, r.NG_VALUE_ACCESSOR, function(n) {
                    return [n]
                }, [r.DefaultValueAccessor]), t["\u0275did"](29, 540672, null, 0, r.FormControlDirective, [
                    [8, null],
                    [8, null],
                    [6, r.NG_VALUE_ACCESSOR],
                    [2, r["\u0275angular_packages_forms_forms_j"]]
                ], {
                    form: [0, "form"]
                }, null), t["\u0275prd"](2048, null, r.NgControl, null, [r.FormControlDirective]), t["\u0275did"](31, 16384, null, 0, r.NgControlStatus, [
                    [4, r.NgControl]
                ], null, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, on)), t["\u0275did"](33, 16384, null, 0, m.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, un)), t["\u0275did"](35, 16384, null, 0, m.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (n()(), t["\u0275eld"](36, 0, null, null, 6, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](37, 0, null, null, 5, "input", [
                    ["class", "form-control"],
                    ["placeholder", "Website address (http://google.com)"],
                    ["type", "url"]
                ], [
                    [2, "ng-untouched", null],
                    [2, "ng-touched", null],
                    [2, "ng-pristine", null],
                    [2, "ng-dirty", null],
                    [2, "ng-valid", null],
                    [2, "ng-invalid", null],
                    [2, "ng-pending", null]
                ], [
                    [null, "input"],
                    [null, "blur"],
                    [null, "compositionstart"],
                    [null, "compositionend"]
                ], function(n, l, e) {
                    var o = !0;
                    return "input" === l && (o = !1 !== t["\u0275nov"](n, 38)._handleInput(e.target.value) && o), "blur" === l && (o = !1 !== t["\u0275nov"](n, 38).onTouched() && o), "compositionstart" === l && (o = !1 !== t["\u0275nov"](n, 38)._compositionStart() && o), "compositionend" === l && (o = !1 !== t["\u0275nov"](n, 38)._compositionEnd(e.target.value) && o), o
                }, null, null)), t["\u0275did"](38, 16384, null, 0, r.DefaultValueAccessor, [t.Renderer2, t.ElementRef, [2, r.COMPOSITION_BUFFER_MODE]], null, null), t["\u0275prd"](1024, null, r.NG_VALUE_ACCESSOR, function(n) {
                    return [n]
                }, [r.DefaultValueAccessor]), t["\u0275did"](40, 540672, null, 0, r.FormControlDirective, [
                    [8, null],
                    [8, null],
                    [6, r.NG_VALUE_ACCESSOR],
                    [2, r["\u0275angular_packages_forms_forms_j"]]
                ], {
                    form: [0, "form"]
                }, null), t["\u0275prd"](2048, null, r.NgControl, null, [r.FormControlDirective]), t["\u0275did"](42, 16384, null, 0, r.NgControlStatus, [
                    [4, r.NgControl]
                ], null, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, rn)), t["\u0275did"](44, 16384, null, 0, m.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, an)), t["\u0275did"](46, 16384, null, 0, m.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (n()(), t["\u0275eld"](47, 0, null, null, 6, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](48, 0, null, null, 5, "input", [
                    ["class", "form-control"],
                    ["placeholder", "DD/MM/YY"],
                    ["type", "date"]
                ], [
                    [2, "ng-untouched", null],
                    [2, "ng-touched", null],
                    [2, "ng-pristine", null],
                    [2, "ng-dirty", null],
                    [2, "ng-valid", null],
                    [2, "ng-invalid", null],
                    [2, "ng-pending", null]
                ], [
                    [null, "input"],
                    [null, "blur"],
                    [null, "compositionstart"],
                    [null, "compositionend"]
                ], function(n, l, e) {
                    var o = !0;
                    return "input" === l && (o = !1 !== t["\u0275nov"](n, 49)._handleInput(e.target.value) && o), "blur" === l && (o = !1 !== t["\u0275nov"](n, 49).onTouched() && o), "compositionstart" === l && (o = !1 !== t["\u0275nov"](n, 49)._compositionStart() && o), "compositionend" === l && (o = !1 !== t["\u0275nov"](n, 49)._compositionEnd(e.target.value) && o), o
                }, null, null)), t["\u0275did"](49, 16384, null, 0, r.DefaultValueAccessor, [t.Renderer2, t.ElementRef, [2, r.COMPOSITION_BUFFER_MODE]], null, null), t["\u0275prd"](1024, null, r.NG_VALUE_ACCESSOR, function(n) {
                    return [n]
                }, [r.DefaultValueAccessor]), t["\u0275did"](51, 540672, null, 0, r.FormControlDirective, [
                    [8, null],
                    [8, null],
                    [6, r.NG_VALUE_ACCESSOR],
                    [2, r["\u0275angular_packages_forms_forms_j"]]
                ], {
                    form: [0, "form"]
                }, null), t["\u0275prd"](2048, null, r.NgControl, null, [r.FormControlDirective]), t["\u0275did"](53, 16384, null, 0, r.NgControlStatus, [
                    [4, r.NgControl]
                ], null, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, dn)), t["\u0275did"](55, 16384, null, 0, m.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, sn)), t["\u0275did"](57, 16384, null, 0, m.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (n()(), t["\u0275eld"](58, 0, null, null, 6, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](59, 0, null, null, 5, "input", [
                    ["class", "form-control"],
                    ["placeholder", "Number range (between 5 and 9)"]
                ], [
                    [2, "ng-untouched", null],
                    [2, "ng-touched", null],
                    [2, "ng-pristine", null],
                    [2, "ng-dirty", null],
                    [2, "ng-valid", null],
                    [2, "ng-invalid", null],
                    [2, "ng-pending", null]
                ], [
                    [null, "input"],
                    [null, "blur"],
                    [null, "compositionstart"],
                    [null, "compositionend"]
                ], function(n, l, e) {
                    var o = !0;
                    return "input" === l && (o = !1 !== t["\u0275nov"](n, 60)._handleInput(e.target.value) && o), "blur" === l && (o = !1 !== t["\u0275nov"](n, 60).onTouched() && o), "compositionstart" === l && (o = !1 !== t["\u0275nov"](n, 60)._compositionStart() && o), "compositionend" === l && (o = !1 !== t["\u0275nov"](n, 60)._compositionEnd(e.target.value) && o), o
                }, null, null)), t["\u0275did"](60, 16384, null, 0, r.DefaultValueAccessor, [t.Renderer2, t.ElementRef, [2, r.COMPOSITION_BUFFER_MODE]], null, null), t["\u0275prd"](1024, null, r.NG_VALUE_ACCESSOR, function(n) {
                    return [n]
                }, [r.DefaultValueAccessor]), t["\u0275did"](62, 540672, null, 0, r.FormControlDirective, [
                    [8, null],
                    [8, null],
                    [6, r.NG_VALUE_ACCESSOR],
                    [2, r["\u0275angular_packages_forms_forms_j"]]
                ], {
                    form: [0, "form"]
                }, null), t["\u0275prd"](2048, null, r.NgControl, null, [r.FormControlDirective]), t["\u0275did"](64, 16384, null, 0, r.NgControlStatus, [
                    [4, r.NgControl]
                ], null, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, cn)), t["\u0275did"](66, 16384, null, 0, m.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, pn)), t["\u0275did"](68, 16384, null, 0, m.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (n()(), t["\u0275eld"](69, 0, null, null, 6, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](70, 0, null, null, 5, "input", [
                    ["class", "form-control"],
                    ["placeholder", "Credit card (4111 1111 1111 1111)"]
                ], [
                    [2, "ng-untouched", null],
                    [2, "ng-touched", null],
                    [2, "ng-pristine", null],
                    [2, "ng-dirty", null],
                    [2, "ng-valid", null],
                    [2, "ng-invalid", null],
                    [2, "ng-pending", null]
                ], [
                    [null, "input"],
                    [null, "blur"],
                    [null, "compositionstart"],
                    [null, "compositionend"]
                ], function(n, l, e) {
                    var o = !0;
                    return "input" === l && (o = !1 !== t["\u0275nov"](n, 71)._handleInput(e.target.value) && o), "blur" === l && (o = !1 !== t["\u0275nov"](n, 71).onTouched() && o), "compositionstart" === l && (o = !1 !== t["\u0275nov"](n, 71)._compositionStart() && o), "compositionend" === l && (o = !1 !== t["\u0275nov"](n, 71)._compositionEnd(e.target.value) && o), o
                }, null, null)), t["\u0275did"](71, 16384, null, 0, r.DefaultValueAccessor, [t.Renderer2, t.ElementRef, [2, r.COMPOSITION_BUFFER_MODE]], null, null), t["\u0275prd"](1024, null, r.NG_VALUE_ACCESSOR, function(n) {
                    return [n]
                }, [r.DefaultValueAccessor]), t["\u0275did"](73, 540672, null, 0, r.FormControlDirective, [
                    [8, null],
                    [8, null],
                    [6, r.NG_VALUE_ACCESSOR],
                    [2, r["\u0275angular_packages_forms_forms_j"]]
                ], {
                    form: [0, "form"]
                }, null), t["\u0275prd"](2048, null, r.NgControl, null, [r.FormControlDirective]), t["\u0275did"](75, 16384, null, 0, r.NgControlStatus, [
                    [4, r.NgControl]
                ], null, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, fn)), t["\u0275did"](77, 16384, null, 0, m.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, hn)), t["\u0275did"](79, 16384, null, 0, m.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (n()(), t["\u0275eld"](80, 0, null, null, 6, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](81, 0, null, null, 5, "input", [
                    ["class", "form-control"],
                    ["placeholder", "US Phone number (15417543010)"],
                    ["type", "text"]
                ], [
                    [2, "ng-untouched", null],
                    [2, "ng-touched", null],
                    [2, "ng-pristine", null],
                    [2, "ng-dirty", null],
                    [2, "ng-valid", null],
                    [2, "ng-invalid", null],
                    [2, "ng-pending", null]
                ], [
                    [null, "input"],
                    [null, "blur"],
                    [null, "compositionstart"],
                    [null, "compositionend"]
                ], function(n, l, e) {
                    var o = !0;
                    return "input" === l && (o = !1 !== t["\u0275nov"](n, 82)._handleInput(e.target.value) && o), "blur" === l && (o = !1 !== t["\u0275nov"](n, 82).onTouched() && o), "compositionstart" === l && (o = !1 !== t["\u0275nov"](n, 82)._compositionStart() && o), "compositionend" === l && (o = !1 !== t["\u0275nov"](n, 82)._compositionEnd(e.target.value) && o), o
                }, null, null)), t["\u0275did"](82, 16384, null, 0, r.DefaultValueAccessor, [t.Renderer2, t.ElementRef, [2, r.COMPOSITION_BUFFER_MODE]], null, null), t["\u0275prd"](1024, null, r.NG_VALUE_ACCESSOR, function(n) {
                    return [n]
                }, [r.DefaultValueAccessor]), t["\u0275did"](84, 540672, null, 0, r.FormControlDirective, [
                    [8, null],
                    [8, null],
                    [6, r.NG_VALUE_ACCESSOR],
                    [2, r["\u0275angular_packages_forms_forms_j"]]
                ], {
                    form: [0, "form"]
                }, null), t["\u0275prd"](2048, null, r.NgControl, null, [r.FormControlDirective]), t["\u0275did"](86, 16384, null, 0, r.NgControlStatus, [
                    [4, r.NgControl]
                ], null, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, gn)), t["\u0275did"](88, 16384, null, 0, m.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, mn)), t["\u0275did"](90, 16384, null, 0, m.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (n()(), t["\u0275eld"](91, 0, null, null, 6, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](92, 0, null, null, 5, "input", [
                    ["class", "form-control"],
                    ["placeholder", "Password"],
                    ["type", "password"]
                ], [
                    [2, "ng-untouched", null],
                    [2, "ng-touched", null],
                    [2, "ng-pristine", null],
                    [2, "ng-dirty", null],
                    [2, "ng-valid", null],
                    [2, "ng-invalid", null],
                    [2, "ng-pending", null]
                ], [
                    [null, "input"],
                    [null, "blur"],
                    [null, "compositionstart"],
                    [null, "compositionend"]
                ], function(n, l, e) {
                    var o = !0;
                    return "input" === l && (o = !1 !== t["\u0275nov"](n, 93)._handleInput(e.target.value) && o), "blur" === l && (o = !1 !== t["\u0275nov"](n, 93).onTouched() && o), "compositionstart" === l && (o = !1 !== t["\u0275nov"](n, 93)._compositionStart() && o), "compositionend" === l && (o = !1 !== t["\u0275nov"](n, 93)._compositionEnd(e.target.value) && o), o
                }, null, null)), t["\u0275did"](93, 16384, null, 0, r.DefaultValueAccessor, [t.Renderer2, t.ElementRef, [2, r.COMPOSITION_BUFFER_MODE]], null, null), t["\u0275prd"](1024, null, r.NG_VALUE_ACCESSOR, function(n) {
                    return [n]
                }, [r.DefaultValueAccessor]), t["\u0275did"](95, 540672, null, 0, r.FormControlDirective, [
                    [8, null],
                    [8, null],
                    [6, r.NG_VALUE_ACCESSOR],
                    [2, r["\u0275angular_packages_forms_forms_j"]]
                ], {
                    form: [0, "form"]
                }, null), t["\u0275prd"](2048, null, r.NgControl, null, [r.FormControlDirective]), t["\u0275did"](97, 16384, null, 0, r.NgControlStatus, [
                    [4, r.NgControl]
                ], null, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, vn)), t["\u0275did"](99, 16384, null, 0, m.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (n()(), t["\u0275eld"](100, 0, null, null, 6, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](101, 0, null, null, 5, "input", [
                    ["class", "form-control"],
                    ["placeholder", "Confirm Password"],
                    ["type", "password"]
                ], [
                    [2, "ng-untouched", null],
                    [2, "ng-touched", null],
                    [2, "ng-pristine", null],
                    [2, "ng-dirty", null],
                    [2, "ng-valid", null],
                    [2, "ng-invalid", null],
                    [2, "ng-pending", null]
                ], [
                    [null, "input"],
                    [null, "blur"],
                    [null, "compositionstart"],
                    [null, "compositionend"]
                ], function(n, l, e) {
                    var o = !0;
                    return "input" === l && (o = !1 !== t["\u0275nov"](n, 102)._handleInput(e.target.value) && o), "blur" === l && (o = !1 !== t["\u0275nov"](n, 102).onTouched() && o), "compositionstart" === l && (o = !1 !== t["\u0275nov"](n, 102)._compositionStart() && o), "compositionend" === l && (o = !1 !== t["\u0275nov"](n, 102)._compositionEnd(e.target.value) && o), o
                }, null, null)), t["\u0275did"](102, 16384, null, 0, r.DefaultValueAccessor, [t.Renderer2, t.ElementRef, [2, r.COMPOSITION_BUFFER_MODE]], null, null), t["\u0275prd"](1024, null, r.NG_VALUE_ACCESSOR, function(n) {
                    return [n]
                }, [r.DefaultValueAccessor]), t["\u0275did"](104, 540672, null, 0, r.FormControlDirective, [
                    [8, null],
                    [8, null],
                    [6, r.NG_VALUE_ACCESSOR],
                    [2, r["\u0275angular_packages_forms_forms_j"]]
                ], {
                    form: [0, "form"]
                }, null), t["\u0275prd"](2048, null, r.NgControl, null, [r.FormControlDirective]), t["\u0275did"](106, 16384, null, 0, r.NgControlStatus, [
                    [4, r.NgControl]
                ], null, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, bn)), t["\u0275did"](108, 16384, null, 0, m.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, yn)), t["\u0275did"](110, 16384, null, 0, m.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (n()(), t["\u0275eld"](111, 0, null, null, 3, "div", [
                    ["class", "pad-wrap"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](112, 0, null, null, 2, "div", [], null, null, null, null, null)), (n()(), t["\u0275eld"](113, 0, null, null, 1, "button", [
                    ["class", "btn btn-primary btn-lg btn-square"],
                    ["type", "submit"]
                ], [
                    [8, "disabled", 0]
                ], null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Submit"]))], function(n, l) {
                    var e = l.component;
                    n(l, 9, 0, e.form), n(l, 16, 0, e.form.controls.fname), n(l, 20, 0, e.form.controls.fname.hasError("required") && e.form.controls.fname.touched), n(l, 22, 0, e.form.controls.fname.hasError("minlength") && e.form.controls.fname.touched), n(l, 24, 0, e.form.controls.fname.hasError("maxlength") && e.form.controls.fname.touched), n(l, 29, 0, e.form.controls.email), n(l, 33, 0, e.form.controls.email.hasError("required") && e.form.controls.email.touched), n(l, 35, 0, e.form.controls.email.errors && !e.form.controls.email.hasError("required") && e.form.controls.email.touched), n(l, 40, 0, e.form.controls.url), n(l, 44, 0, e.form.controls.url.hasError("required") && e.form.controls.url.touched), n(l, 46, 0, e.form.controls.url.errors && !e.form.controls.url.hasError("required") && e.form.controls.url.touched), n(l, 51, 0, e.form.controls.date), n(l, 55, 0, e.form.controls.date.hasError("required") && e.form.controls.date.touched), n(l, 57, 0, e.form.controls.date.errors && !e.form.controls.date.hasError("required") && e.form.controls.date.touched), n(l, 62, 0, e.form.controls.range), n(l, 66, 0, e.form.controls.range.hasError("required") && e.form.controls.range.touched), n(l, 68, 0, e.form.controls.range.errors && !e.form.controls.range.hasError("required") && e.form.controls.range.touched), n(l, 73, 0, e.form.controls.creditCard), n(l, 77, 0, e.form.controls.creditCard.hasError("required") && e.form.controls.creditCard.touched), n(l, 79, 0, e.form.controls.creditCard.errors && !e.form.controls.creditCard.hasError("required") && e.form.controls.creditCard.touched), n(l, 84, 0, e.form.controls.phone), n(l, 88, 0, e.form.controls.phone.hasError("required") && e.form.controls.phone.touched), n(l, 90, 0, e.form.controls.phone.errors && !e.form.controls.phone.hasError("required") && e.form.controls.phone.touched), n(l, 95, 0, e.form.controls.password), n(l, 99, 0, e.form.controls.password.hasError("required") && e.form.controls.password.touched), n(l, 104, 0, e.form.controls.confirmPassword), n(l, 108, 0, e.form.controls.confirmPassword.hasError("required") && e.form.controls.confirmPassword.touched), n(l, 110, 0, e.form.controls.confirmPassword.errors && e.form.controls.confirmPassword.hasError("required"))
                }, function(n, l) {
                    var e = l.component;
                    n(l, 7, 0, t["\u0275nov"](l, 11).ngClassUntouched, t["\u0275nov"](l, 11).ngClassTouched, t["\u0275nov"](l, 11).ngClassPristine, t["\u0275nov"](l, 11).ngClassDirty, t["\u0275nov"](l, 11).ngClassValid, t["\u0275nov"](l, 11).ngClassInvalid, t["\u0275nov"](l, 11).ngClassPending), n(l, 13, 0, t["\u0275nov"](l, 18).ngClassUntouched, t["\u0275nov"](l, 18).ngClassTouched, t["\u0275nov"](l, 18).ngClassPristine, t["\u0275nov"](l, 18).ngClassDirty, t["\u0275nov"](l, 18).ngClassValid, t["\u0275nov"](l, 18).ngClassInvalid, t["\u0275nov"](l, 18).ngClassPending), n(l, 26, 0, t["\u0275nov"](l, 31).ngClassUntouched, t["\u0275nov"](l, 31).ngClassTouched, t["\u0275nov"](l, 31).ngClassPristine, t["\u0275nov"](l, 31).ngClassDirty, t["\u0275nov"](l, 31).ngClassValid, t["\u0275nov"](l, 31).ngClassInvalid, t["\u0275nov"](l, 31).ngClassPending), n(l, 37, 0, t["\u0275nov"](l, 42).ngClassUntouched, t["\u0275nov"](l, 42).ngClassTouched, t["\u0275nov"](l, 42).ngClassPristine, t["\u0275nov"](l, 42).ngClassDirty, t["\u0275nov"](l, 42).ngClassValid, t["\u0275nov"](l, 42).ngClassInvalid, t["\u0275nov"](l, 42).ngClassPending), n(l, 48, 0, t["\u0275nov"](l, 53).ngClassUntouched, t["\u0275nov"](l, 53).ngClassTouched, t["\u0275nov"](l, 53).ngClassPristine, t["\u0275nov"](l, 53).ngClassDirty, t["\u0275nov"](l, 53).ngClassValid, t["\u0275nov"](l, 53).ngClassInvalid, t["\u0275nov"](l, 53).ngClassPending), n(l, 59, 0, t["\u0275nov"](l, 64).ngClassUntouched, t["\u0275nov"](l, 64).ngClassTouched, t["\u0275nov"](l, 64).ngClassPristine, t["\u0275nov"](l, 64).ngClassDirty, t["\u0275nov"](l, 64).ngClassValid, t["\u0275nov"](l, 64).ngClassInvalid, t["\u0275nov"](l, 64).ngClassPending), n(l, 70, 0, t["\u0275nov"](l, 75).ngClassUntouched, t["\u0275nov"](l, 75).ngClassTouched, t["\u0275nov"](l, 75).ngClassPristine, t["\u0275nov"](l, 75).ngClassDirty, t["\u0275nov"](l, 75).ngClassValid, t["\u0275nov"](l, 75).ngClassInvalid, t["\u0275nov"](l, 75).ngClassPending), n(l, 81, 0, t["\u0275nov"](l, 86).ngClassUntouched, t["\u0275nov"](l, 86).ngClassTouched, t["\u0275nov"](l, 86).ngClassPristine, t["\u0275nov"](l, 86).ngClassDirty, t["\u0275nov"](l, 86).ngClassValid, t["\u0275nov"](l, 86).ngClassInvalid, t["\u0275nov"](l, 86).ngClassPending), n(l, 92, 0, t["\u0275nov"](l, 97).ngClassUntouched, t["\u0275nov"](l, 97).ngClassTouched, t["\u0275nov"](l, 97).ngClassPristine, t["\u0275nov"](l, 97).ngClassDirty, t["\u0275nov"](l, 97).ngClassValid, t["\u0275nov"](l, 97).ngClassInvalid, t["\u0275nov"](l, 97).ngClassPending), n(l, 101, 0, t["\u0275nov"](l, 106).ngClassUntouched, t["\u0275nov"](l, 106).ngClassTouched, t["\u0275nov"](l, 106).ngClassPristine, t["\u0275nov"](l, 106).ngClassDirty, t["\u0275nov"](l, 106).ngClassValid, t["\u0275nov"](l, 106).ngClassInvalid, t["\u0275nov"](l, 106).ngClassPending), n(l, 113, 0, !e.form.valid)
                })
            }
            var _n = t["\u0275ccf"]("ms-formvalidation", X, function(n) {
                    return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "ms-formvalidation", [], [
                        [40, "@fadeInAnimation", 0]
                    ], null, null, $n, nn)), t["\u0275did"](1, 114688, null, 0, X, [r.FormBuilder, i.a], null, null)], function(n, l) {
                        n(l, 1, 0)
                    }, function(n, l) {
                        n(l, 0, 0, !0)
                    })
                }, {}, {}, []),
                xn = e("pKD1"),
                On = e("5xlC"),
                Cn = e("RQ4W"),
                wn = function() {
                    function n(n) {
                        this.pageTitleService = n, this.uploader = new Cn.FileUploader({
                            url: "https://evening-anchorage-3159.herokuapp.com/api/"
                        }), this.hasBaseDropZoneOver = !1, this.hasAnotherDropZoneOver = !1
                    }
                    return n.prototype.ngOnInit = function() {
                        this.pageTitleService.setTitle("Upload")
                    }, n.prototype.fileOverBase = function(n) {
                        this.hasBaseDropZoneOver = n
                    }, n.prototype.fileOverAnother = function(n) {
                        this.hasAnotherDropZoneOver = n
                    }, n
                }(),
                Sn = t["\u0275crt"]({
                    encapsulation: 2,
                    styles: [
                        ['.file-type{background-color:#eee;border:3px dotted #c8c8c8;display:block;margin-bottom:1rem;padding:1rem;border-radius:8px}.chankya-file-upload button mat-button-ripple mat-ripple{opacity:.7!important;cursor:not-allowed!important}.chankya-file-upload [ng-reflect-trigger="[object HTMLButtonElement]"]{opacity:1!important;cursor:pointer!important}.app-dark .file-type{background-color:transparent}']
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

            function En(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "td", [
                    ["nowrap", ""]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](1, null, ["", " MB"])), t["\u0275ppd"](2, 2)], null, function(n, l) {
                    n(l, 1, 0, t["\u0275unv"](l, 1, 0, n(l, 2, 0, t["\u0275nov"](l.parent.parent.parent, 0), (null == l.parent.context.$implicit ? null : null == l.parent.context.$implicit.file ? null : l.parent.context.$implicit.file.size) / 1024 / 1024, ".2")))
                })
            }

            function Pn(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 4, "td", [], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 3, "div", [
                    ["class", "progress"],
                    ["style", "margin-bottom: 0;"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](2, 0, null, null, 2, "div", [
                    ["class", "progress-bar"],
                    ["role", "progressbar"]
                ], null, null, null, null, null)), t["\u0275did"](3, 278528, null, 0, m.NgStyle, [t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                    ngStyle: [0, "ngStyle"]
                }, null), t["\u0275pod"](4, {
                    width: 0
                })], function(n, l) {
                    n(l, 3, 0, n(l, 4, 0, l.parent.context.$implicit.progress + "%"))
                }, null)
            }

            function Mn(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-check text-success"]
                ], null, null, null, null, null))], null, null)
            }

            function jn(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-ban text-warning"]
                ], null, null, null, null, null))], null, null)
            }

            function kn(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-trash text-danger"]
                ], null, null, null, null, null))], null, null)
            }

            function In(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 24, "tr", [], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 2, "td", [], null, null, null, null, null)), (n()(), t["\u0275eld"](2, 0, null, null, 1, "strong", [], null, null, null, null, null)), (n()(), t["\u0275ted"](3, null, ["", ""])), (n()(), t["\u0275and"](16777216, null, null, 1, null, En)), t["\u0275did"](5, 16384, null, 0, m.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, Pn)), t["\u0275did"](7, 16384, null, 0, m.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (n()(), t["\u0275eld"](8, 0, null, null, 6, "td", [
                    ["class", "text-center"]
                ], null, null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, Mn)), t["\u0275did"](10, 16384, null, 0, m.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, jn)), t["\u0275did"](12, 16384, null, 0, m.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, kn)), t["\u0275did"](14, 16384, null, 0, m.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (n()(), t["\u0275eld"](15, 0, null, null, 9, "td", [
                    ["nowrap", ""]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](16, 0, null, null, 2, "button", [
                    ["class", "btn btn-success btn-xs"],
                    ["type", "button"]
                ], [
                    [8, "disabled", 0]
                ], [
                    [null, "click"]
                ], function(n, l, e) {
                    var t = !0;
                    return "click" === l && (t = !1 !== n.context.$implicit.upload() && t), t
                }, null, null)), (n()(), t["\u0275eld"](17, 0, null, null, 0, "span", [
                    ["class", "glyphicon glyphicon-upload"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, [" Upload "])), (n()(), t["\u0275eld"](19, 0, null, null, 2, "button", [
                    ["class", "btn btn-warning btn-xs"],
                    ["type", "button"]
                ], [
                    [8, "disabled", 0]
                ], [
                    [null, "click"]
                ], function(n, l, e) {
                    var t = !0;
                    return "click" === l && (t = !1 !== n.context.$implicit.cancel() && t), t
                }, null, null)), (n()(), t["\u0275eld"](20, 0, null, null, 0, "span", [
                    ["class", "glyphicon glyphicon-ban-circle"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, [" Cancel "])), (n()(), t["\u0275eld"](22, 0, null, null, 2, "button", [
                    ["class", "btn btn-danger btn-xs"],
                    ["type", "button"]
                ], null, [
                    [null, "click"]
                ], function(n, l, e) {
                    var t = !0;
                    return "click" === l && (t = !1 !== n.context.$implicit.remove() && t), t
                }, null, null)), (n()(), t["\u0275eld"](23, 0, null, null, 0, "span", [
                    ["class", "glyphicon glyphicon-trash"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, [" Remove "]))], function(n, l) {
                    var e = l.component;
                    n(l, 5, 0, e.uploader.options.isHTML5), n(l, 7, 0, e.uploader.options.isHTML5), n(l, 10, 0, l.context.$implicit.isSuccess), n(l, 12, 0, l.context.$implicit.isCancel), n(l, 14, 0, l.context.$implicit.isError)
                }, function(n, l) {
                    n(l, 3, 0, null == l.context.$implicit ? null : null == l.context.$implicit.file ? null : l.context.$implicit.file.name), n(l, 16, 0, l.context.$implicit.isReady || l.context.$implicit.isUploading || l.context.$implicit.isSuccess), n(l, 19, 0, !l.context.$implicit.isUploading)
                })
            }

            function Nn(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, In)), t["\u0275did"](2, 802816, null, 0, m.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                    ngForOf: [0, "ngForOf"]
                }, null), (n()(), t["\u0275and"](0, null, null, 0))], function(n, l) {
                    n(l, 2, 0, l.component.uploader.queue)
                }, null)
            }

            function Tn(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275ted"](-1, null, [" No data to display "]))], null, null)
            }

            function An(n) {
                return t["\u0275vid"](0, [t["\u0275pid"](0, m.DecimalPipe, [t.LOCALE_ID]), (n()(), t["\u0275eld"](1, 0, null, null, 60, "div", [
                    ["class", "form-upload-wrapper"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](2, 0, null, null, 59, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](3, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](4, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["File Upload"])), (n()(), t["\u0275eld"](6, 0, null, null, 55, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](7, 0, null, null, 54, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](8, 0, null, null, 23, "div", [
                    ["class", "col-md-12 col-lg-3 col-xl-3 mb-3"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](9, 0, null, null, 2, "div", [
                    ["class", "chk-ui-heading"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](10, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Select files"])), (n()(), t["\u0275eld"](12, 0, null, null, 4, "div", [
                    ["class", "file-type"],
                    ["ng2FileDrop", ""]
                ], null, [
                    [null, "fileOver"],
                    [null, "drop"],
                    [null, "dragover"],
                    [null, "dragleave"]
                ], function(n, l, e) {
                    var o = !0,
                        u = n.component;
                    return "drop" === l && (o = !1 !== t["\u0275nov"](n, 15).onDrop(e) && o), "dragover" === l && (o = !1 !== t["\u0275nov"](n, 15).onDragOver(e) && o), "dragleave" === l && (o = !1 !== t["\u0275nov"](n, 15).onDragLeave(e) && o), "fileOver" === l && (o = !1 !== u.fileOverBase(e) && o), o
                }, null, null)), t["\u0275did"](13, 278528, null, 0, m.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), t["\u0275pod"](14, {
                    "nv-file-over": 0
                }), t["\u0275did"](15, 16384, null, 0, xn.FileDropDirective, [t.ElementRef], {
                    uploader: [0, "uploader"]
                }, {
                    fileOver: "fileOver"
                }), (n()(), t["\u0275ted"](-1, null, ["Base drop zone"])), (n()(), t["\u0275eld"](17, 0, null, null, 4, "div", [
                    ["class", "file-type"],
                    ["ng2FileDrop", ""]
                ], null, [
                    [null, "fileOver"],
                    [null, "drop"],
                    [null, "dragover"],
                    [null, "dragleave"]
                ], function(n, l, e) {
                    var o = !0,
                        u = n.component;
                    return "drop" === l && (o = !1 !== t["\u0275nov"](n, 20).onDrop(e) && o), "dragover" === l && (o = !1 !== t["\u0275nov"](n, 20).onDragOver(e) && o), "dragleave" === l && (o = !1 !== t["\u0275nov"](n, 20).onDragLeave(e) && o), "fileOver" === l && (o = !1 !== u.fileOverAnother(e) && o), o
                }, null, null)), t["\u0275did"](18, 278528, null, 0, m.NgClass, [t.IterableDiffers, t.KeyValueDiffers, t.ElementRef, t.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), t["\u0275pod"](19, {
                    "another-file-over-class": 0
                }), t["\u0275did"](20, 16384, null, 0, xn.FileDropDirective, [t.ElementRef], {
                    uploader: [0, "uploader"]
                }, {
                    fileOver: "fileOver"
                }), (n()(), t["\u0275ted"](-1, null, ["Another drop zone"])), (n()(), t["\u0275eld"](22, 0, null, null, 2, "div", [
                    ["class", "chk-ui-heading"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](23, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Multiple files"])), (n()(), t["\u0275eld"](25, 0, null, null, 1, "input", [
                    ["class", "mb-3"],
                    ["multiple", ""],
                    ["ng2FileSelect", ""],
                    ["type", "file"]
                ], null, [
                    [null, "change"]
                ], function(n, l, e) {
                    var o = !0;
                    return "change" === l && (o = !1 !== t["\u0275nov"](n, 26).onChange() && o), o
                }, null, null)), t["\u0275did"](26, 16384, null, 0, On.FileSelectDirective, [t.ElementRef], {
                    uploader: [0, "uploader"]
                }, null), (n()(), t["\u0275eld"](27, 0, null, null, 2, "div", [
                    ["class", "chk-ui-heading"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](28, 0, null, null, 1, "h6", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Single files"])), (n()(), t["\u0275eld"](30, 0, null, null, 1, "input", [
                    ["ng2FileSelect", ""],
                    ["type", "file"]
                ], null, [
                    [null, "change"]
                ], function(n, l, e) {
                    var o = !0;
                    return "change" === l && (o = !1 !== t["\u0275nov"](n, 31).onChange() && o), o
                }, null, null)), t["\u0275did"](31, 16384, null, 0, On.FileSelectDirective, [t.ElementRef], {
                    uploader: [0, "uploader"]
                }, null), (n()(), t["\u0275eld"](32, 0, null, null, 29, "div", [
                    ["class", "col-md-12 col-lg-9 col-xl-9"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](33, 0, null, null, 28, "div", [
                    ["class", "chk-ui-heading"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](34, 0, null, null, 4, "h3", [], null, null, null, null, null)), (n()(), t["\u0275eld"](35, 0, null, null, 1, "span", [], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Upload queue"])), (n()(), t["\u0275eld"](37, 0, null, null, 1, "span", [], null, null, null, null, null)), (n()(), t["\u0275ted"](38, null, ["Queue length: ", ""])), (n()(), t["\u0275eld"](39, 0, null, null, 16, "table", [
                    ["class", "table mb-3 material ml-0 mr-0 mrgn-b-md"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](40, 0, null, null, 11, "thead", [], null, null, null, null, null)), (n()(), t["\u0275eld"](41, 0, null, null, 10, "tr", [], null, null, null, null, null)), (n()(), t["\u0275eld"](42, 0, null, null, 1, "th", [
                    ["width", "50%"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Name"])), (n()(), t["\u0275eld"](44, 0, null, null, 1, "th", [], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Size"])), (n()(), t["\u0275eld"](46, 0, null, null, 1, "th", [], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Progress"])), (n()(), t["\u0275eld"](48, 0, null, null, 1, "th", [], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Status"])), (n()(), t["\u0275eld"](50, 0, null, null, 1, "th", [], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Actions"])), (n()(), t["\u0275eld"](52, 0, null, null, 3, "tbody", [], null, null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, Nn)), t["\u0275did"](54, 16384, null, 0, m.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"],
                    ngIfElse: [1, "ngIfElse"]
                }, null), (n()(), t["\u0275and"](0, [
                    ["elseBlock", 2]
                ], null, 0, null, Tn)), (n()(), t["\u0275eld"](56, 0, null, null, 1, "button", [
                    ["class", "btn btn-square btn-success mb-1"],
                    ["type", "button"]
                ], [
                    [8, "disabled", 0]
                ], [
                    [null, "click"]
                ], function(n, l, e) {
                    var t = !0;
                    return "click" === l && (t = !1 !== n.component.uploader.uploadAll() && t), t
                }, null, null)), (n()(), t["\u0275ted"](-1, null, ["Upload all"])), (n()(), t["\u0275eld"](58, 0, null, null, 1, "button", [
                    ["class", "btn btn-square btn-warning mb-1"],
                    ["type", "button"]
                ], [
                    [8, "disabled", 0]
                ], [
                    [null, "click"]
                ], function(n, l, e) {
                    var t = !0;
                    return "click" === l && (t = !1 !== n.component.uploader.cancelAll() && t), t
                }, null, null)), (n()(), t["\u0275ted"](-1, null, ["Cancel all"])), (n()(), t["\u0275eld"](60, 0, null, null, 1, "button", [
                    ["class", "btn btn-square btn-danger mb-1"],
                    ["type", "button"]
                ], [
                    [8, "disabled", 0]
                ], [
                    [null, "click"]
                ], function(n, l, e) {
                    var t = !0;
                    return "click" === l && (t = !1 !== n.component.uploader.clearQueue() && t), t
                }, null, null)), (n()(), t["\u0275ted"](-1, null, ["Remove all"]))], function(n, l) {
                    var e = l.component;
                    n(l, 13, 0, "file-type", n(l, 14, 0, e.hasBaseDropZoneOver)), n(l, 15, 0, e.uploader), n(l, 18, 0, "file-type", n(l, 19, 0, e.hasAnotherDropZoneOver)), n(l, 20, 0, e.uploader), n(l, 26, 0, e.uploader), n(l, 31, 0, e.uploader), n(l, 54, 0, e.uploader.queue.length > 0, t["\u0275nov"](l, 55))
                }, function(n, l) {
                    var e = l.component;
                    n(l, 38, 0, null == e.uploader ? null : null == e.uploader.queue ? null : e.uploader.queue.length), n(l, 56, 0, !e.uploader.getNotUploadedItems().length), n(l, 58, 0, !e.uploader.isUploading), n(l, 60, 0, !e.uploader.queue.length)
                })
            }
            var Dn = t["\u0275ccf"]("ms-formupload", wn, function(n) {
                    return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "ms-formupload", [], [
                        [40, "@fadeInAnimation", 0]
                    ], null, null, An, Sn)), t["\u0275did"](1, 114688, null, 0, wn, [i.a], null, null)], function(n, l) {
                        n(l, 1, 0)
                    }, function(n, l) {
                        n(l, 0, 0, !0)
                    })
                }, {}, {}, []),
                Rn = function() {
                    function n() {
                        this._draggedElement = null
                    }
                    return n.prototype.set = function(n) {
                        this._draggedElement = n
                    }, n.prototype.get = function() {
                        return this._draggedElement
                    }, n.prototype.isDragging = function() {
                        return !!this.get()
                    }, n
                }(),
                Fn = function() {
                    function n(n, l, e, o) {
                        this.el = n, this.renderer = l, this.treeDraggedElement = e, this.ngZone = o, this.onDropCallback = new t.EventEmitter, this.onDragOverCallback = new t.EventEmitter, this.onDragLeaveCallback = new t.EventEmitter, this.onDragEnterCallback = new t.EventEmitter, this._allowDrop = function(n, l) {
                            return !0
                        }, this.dragOverEventHandler = this.onDragOver.bind(this), this.dragEnterEventHandler = this.onDragEnter.bind(this), this.dragLeaveEventHandler = this.onDragLeave.bind(this)
                    }
                    return Object.defineProperty(n.prototype, "treeAllowDrop", {
                        set: function(n) {
                            this._allowDrop = n instanceof Function ? n : function(l, e) {
                                return n
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }), n.prototype.allowDrop = function(n) {
                        return this._allowDrop(this.treeDraggedElement.get(), n)
                    }, n.prototype.ngAfterViewInit = function() {
                        var n = this,
                            l = this.el.nativeElement;
                        this.ngZone.runOutsideAngular(function() {
                            l.addEventListener("dragover", n.dragOverEventHandler), l.addEventListener("dragenter", n.dragEnterEventHandler), l.addEventListener("dragleave", n.dragLeaveEventHandler)
                        })
                    }, n.prototype.ngOnDestroy = function() {
                        var n = this.el.nativeElement;
                        n.removeEventListener("dragover", this.dragOverEventHandler), n.removeEventListener("dragenter", this.dragEnterEventHandler), n.removeEventListener("dragleave", this.dragLeaveEventHandler)
                    }, n.prototype.onDragOver = function(n) {
                        if (!this.allowDrop(n)) return this.addDisabledClass();
                        this.onDragOverCallback.emit({
                            event: n,
                            element: this.treeDraggedElement.get()
                        }), n.preventDefault(), this.addClass()
                    }, n.prototype.onDragEnter = function(n) {
                        this.allowDrop(n) && this.onDragEnterCallback.emit({
                            event: n,
                            element: this.treeDraggedElement.get()
                        })
                    }, n.prototype.onDragLeave = function(n) {
                        if (!this.allowDrop(n)) return this.removeDisabledClass();
                        this.onDragLeaveCallback.emit({
                            event: n,
                            element: this.treeDraggedElement.get()
                        }), this.removeClass()
                    }, n.prototype.onDrop = function(n) {
                        this.allowDrop(n) && (n.preventDefault(), this.onDropCallback.emit({
                            event: n,
                            element: this.treeDraggedElement.get()
                        }), this.removeClass(), this.treeDraggedElement.set(null))
                    }, n.prototype.addClass = function() {
                        this.renderer.setElementClass(this.el.nativeElement, "is-dragging-over", !0)
                    }, n.prototype.removeClass = function() {
                        this.renderer.setElementClass(this.el.nativeElement, "is-dragging-over", !1)
                    }, n.prototype.addDisabledClass = function() {
                        this.renderer.setElementClass(this.el.nativeElement, "is-dragging-over-disabled", !0)
                    }, n.prototype.removeDisabledClass = function() {
                        this.renderer.setElementClass(this.el.nativeElement, "is-dragging-over-disabled", !1)
                    }, n
                }(),
                Vn = function() {
                    function n() {}
                    return n.prototype.onDrop = function(n) {
                        this.node.mouseAction("drop", n.event, {
                            from: n.element,
                            to: {
                                parent: this.node,
                                index: this.dropIndex
                            }
                        })
                    }, n.prototype.allowDrop = function(n, l) {
                        return this.node.options.allowDrop(n, {
                            parent: this.node,
                            index: this.dropIndex
                        }, l)
                    }, n
                }(),
                zn = t["\u0275crt"]({
                    encapsulation: 2,
                    styles: [],
                    data: {}
                });

            function Ln(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "div", [
                    ["class", "node-drop-slot"]
                ], null, [
                    [null, "treeDrop"],
                    [null, "drop"]
                ], function(n, l, e) {
                    var o = !0,
                        u = n.component;
                    return "drop" === l && (o = !1 !== t["\u0275nov"](n, 1).onDrop(e) && o), "treeDrop" === l && (o = !1 !== u.onDrop(e) && o), o
                }, null, null)), t["\u0275did"](1, 4341760, null, 0, Fn, [t.ElementRef, t.Renderer, Rn, t.NgZone], {
                    treeAllowDrop: [0, "treeAllowDrop"]
                }, {
                    onDropCallback: "treeDrop"
                })], function(n, l) {
                    var e = l.component;
                    n(l, 1, 0, e.allowDrop.bind(e))
                }, null)
            }
            var Gn = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(n, l) {
                n.__proto__ = l
            } || function(n, l) {
                for (var e in l) l.hasOwnProperty(e) && (n[e] = l[e])
            };

            function Un(n, l) {
                function e() {
                    this.constructor = n
                }
                Gn(n, l), n.prototype = null === l ? Object.create(l) : (e.prototype = l.prototype, new e)
            }
            var Bn = function() {
                    function n(n) {
                        void 0 === n && (n = "Atom@" + Ne()), this.name = n, this.isPendingUnobservation = !0, this.observers = [], this.observersIndexes = {}, this.diffValue = 0, this.lastAccessedBy = 0, this.lowestObserverState = xt.NOT_TRACKING
                    }
                    return n.prototype.onBecomeUnobserved = function() {}, n.prototype.reportObserved = function() {
                        $t(this)
                    }, n.prototype.reportChanged = function() {
                        bt(),
                            function(n) {
                                if (n.lowestObserverState !== xt.STALE) {
                                    n.lowestObserverState = xt.STALE;
                                    for (var l = n.observers, e = l.length; e--;) {
                                        var t = l[e];
                                        t.dependenciesState === xt.UP_TO_DATE && (t.isTracing !== Ot.NONE && _t(t, n), t.onBecomeStale()), t.dependenciesState = xt.STALE
                                    }
                                }
                            }(this), yt()
                    }, n.prototype.toString = function() {
                        return this.name
                    }, n
                }(),
                qn = function(n) {
                    function l(l, e, t) {
                        void 0 === l && (l = "Atom@" + Ne()), void 0 === e && (e = Ve), void 0 === t && (t = Ve);
                        var o = n.call(this, l) || this;
                        return o.name = l, o.onBecomeObservedHandler = e, o.onBecomeUnobservedHandler = t, o.isPendingUnobservation = !1, o.isBeingTracked = !1, o
                    }
                    return Un(l, n), l.prototype.reportObserved = function() {
                        return bt(), n.prototype.reportObserved.call(this), this.isBeingTracked || (this.isBeingTracked = !0, this.onBecomeObservedHandler()), yt(), !!tt.trackingDerivation
                    }, l.prototype.onBecomeUnobserved = function() {
                        this.isBeingTracked = !1, this.onBecomeUnobservedHandler()
                    }, l
                }(Bn),
                Hn = Je("Atom", Bn);

            function Yn(n) {
                return n.interceptors && n.interceptors.length > 0
            }

            function Kn(n, l) {
                var e = n.interceptors || (n.interceptors = []);
                return e.push(l), Fe(function() {
                    var n = e.indexOf(l); - 1 !== n && e.splice(n, 1)
                })
            }

            function Wn(n, l) {
                var e = It();
                try {
                    var t = n.interceptors;
                    if (t)
                        for (var o = 0, u = t.length; o < u && (Ae(!(l = t[o](l)) || l.type, "Intercept handlers should return nothing or a change object"), l); o++);
                    return l
                } finally {
                    Nt(e)
                }
            }

            function Zn(n) {
                return n.changeListeners && n.changeListeners.length > 0
            }

            function Jn(n, l) {
                var e = n.changeListeners || (n.changeListeners = []);
                return e.push(l), Fe(function() {
                    var n = e.indexOf(l); - 1 !== n && e.splice(n, 1)
                })
            }

            function Qn(n, l) {
                var e = It(),
                    t = n.changeListeners;
                if (t) {
                    for (var o = 0, u = (t = t.slice()).length; o < u; o++) t[o](l);
                    Nt(e)
                }
            }

            function Xn() {
                return !!tt.spyListeners.length
            }

            function nl(n) {
                if (tt.spyListeners.length)
                    for (var l = tt.spyListeners, e = 0, t = l.length; e < t; e++) l[e](n)
            }

            function ll(n) {
                nl(Be({}, n, {
                    spyReportStart: !0
                }))
            }
            var el = {
                spyReportEnd: !0
            };

            function tl(n) {
                nl(n ? Be({}, n, el) : el)
            }

            function ol(n) {
                return tt.spyListeners.push(n), Fe(function() {
                    var l = tt.spyListeners.indexOf(n); - 1 !== l && tt.spyListeners.splice(l, 1)
                })
            }
            var ul = "__$$iterating";

            function rl(n) {
                Ae(!0 !== n[ul], "Illegal state: cannot recycle array as iterator"), Ke(n, ul, !0);
                var l = -1;
                return Ke(n, "next", function() {
                    return {
                        done: ++l >= this.length,
                        value: l < this.length ? this[l] : void 0
                    }
                }), n
            }

            function il(n, l) {
                Ke(n, "function" == typeof Symbol && Symbol.iterator || "@@iterator", l)
            }
            var al, dl, sl = function() {
                    var n = !1,
                        l = {};
                    return Object.defineProperty(l, "0", {
                        set: function() {
                            n = !0
                        }
                    }), Object.create(l)[0] = 1, !1 === n
                }(),
                cl = 0,
                pl = function() {};
            al = pl, dl = Array.prototype, void 0 !== Object.setPrototypeOf ? Object.setPrototypeOf(al.prototype, dl) : void 0 !== al.prototype.__proto__ ? al.prototype.__proto__ = dl : al.prototype = dl, Object.isFrozen(Array) && ["constructor", "push", "shift", "concat", "pop", "unshift", "replace", "find", "findIndex", "splice", "reverse", "sort"].forEach(function(n) {
                Object.defineProperty(pl.prototype, n, {
                    configurable: !0,
                    writable: !0,
                    value: Array.prototype[n]
                })
            });
            var fl = function() {
                    function n(n, l, e, t) {
                        this.array = e, this.owned = t, this.values = [], this.lastKnownLength = 0, this.interceptors = null, this.changeListeners = null, this.atom = new Bn(n || "ObservableArray@" + Ne()), this.enhancer = function(e, t) {
                            return l(e, t, n + "[..]")
                        }
                    }
                    return n.prototype.dehanceValue = function(n) {
                        return void 0 !== this.dehancer ? this.dehancer(n) : n
                    }, n.prototype.dehanceValues = function(n) {
                        return void 0 !== this.dehancer ? n.map(this.dehancer) : n
                    }, n.prototype.intercept = function(n) {
                        return Kn(this, n)
                    }, n.prototype.observe = function(n, l) {
                        return void 0 === l && (l = !1), l && n({
                            object: this.array,
                            type: "splice",
                            index: 0,
                            added: this.values.slice(),
                            addedCount: this.values.length,
                            removed: [],
                            removedCount: 0
                        }), Jn(this, n)
                    }, n.prototype.getArrayLength = function() {
                        return this.atom.reportObserved(), this.values.length
                    }, n.prototype.setArrayLength = function(n) {
                        if ("number" != typeof n || n < 0) throw new Error("[mobx.array] Out of range: " + n);
                        var l = this.values.length;
                        if (n !== l)
                            if (n > l) {
                                for (var e = new Array(n - l), t = 0; t < n - l; t++) e[t] = void 0;
                                this.spliceWithArray(l, 0, e)
                            } else this.spliceWithArray(n, l - n)
                    }, n.prototype.updateArrayLength = function(n, l) {
                        if (n !== this.lastKnownLength) throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed. Did you use peek() to change it?");
                        this.lastKnownLength += l, l > 0 && n + l + 1 > cl && bl(n + l + 1)
                    }, n.prototype.spliceWithArray = function(n, l, e) {
                        var t = this;
                        Pt(this.atom);
                        var o = this.values.length;
                        if (void 0 === n ? n = 0 : n > o ? n = o : n < 0 && (n = Math.max(0, o + n)), l = 1 === arguments.length ? o - n : void 0 === l || null === l ? 0 : Math.max(0, Math.min(l, o - n)), void 0 === e && (e = []), Yn(this)) {
                            var u = Wn(this, {
                                object: this.array,
                                type: "splice",
                                index: n,
                                removedCount: l,
                                added: e
                            });
                            if (!u) return ke;
                            l = u.removedCount, e = u.added
                        }
                        e = e.map(function(n) {
                            return t.enhancer(n, void 0)
                        }), this.updateArrayLength(o, e.length - l);
                        var r = this.spliceItemsIntoValues(n, l, e);
                        return 0 === l && 0 === e.length || this.notifyArraySplice(n, e, r), this.dehanceValues(r)
                    }, n.prototype.spliceItemsIntoValues = function(n, l, e) {
                        if (e.length < 1e4) return (t = this.values).splice.apply(t, [n, l].concat(e));
                        var t, o = this.values.slice(n, n + l);
                        return this.values = this.values.slice(0, n).concat(e, this.values.slice(n + l)), o
                    }, n.prototype.notifyArrayChildUpdate = function(n, l, e) {
                        var t = !this.owned && Xn(),
                            o = Zn(this),
                            u = o || t ? {
                                object: this.array,
                                type: "update",
                                index: n,
                                newValue: l,
                                oldValue: e
                            } : null;
                        t && ll(u), this.atom.reportChanged(), o && Qn(this, u), t && tl()
                    }, n.prototype.notifyArraySplice = function(n, l, e) {
                        var t = !this.owned && Xn(),
                            o = Zn(this),
                            u = o || t ? {
                                object: this.array,
                                type: "splice",
                                index: n,
                                removed: e,
                                added: l,
                                removedCount: e.length,
                                addedCount: l.length
                            } : null;
                        t && ll(u), this.atom.reportChanged(), o && Qn(this, u), t && tl()
                    }, n
                }(),
                hl = function(n) {
                    function l(l, e, t, o) {
                        void 0 === t && (t = "ObservableArray@" + Ne()), void 0 === o && (o = !1);
                        var u = n.call(this) || this,
                            r = new fl(t, e, u, o);
                        return Ke(u, "$mobx", r), l && l.length && u.spliceWithArray(0, 0, l), sl && Object.defineProperty(r.array, "0", gl), u
                    }
                    return Un(l, n), l.prototype.intercept = function(n) {
                        return this.$mobx.intercept(n)
                    }, l.prototype.observe = function(n, l) {
                        return void 0 === l && (l = !1), this.$mobx.observe(n, l)
                    }, l.prototype.clear = function() {
                        return this.splice(0)
                    }, l.prototype.concat = function() {
                        for (var n = [], l = 0; l < arguments.length; l++) n[l] = arguments[l];
                        return this.$mobx.atom.reportObserved(), Array.prototype.concat.apply(this.peek(), n.map(function(n) {
                            return $l(n) ? n.peek() : n
                        }))
                    }, l.prototype.replace = function(n) {
                        return this.$mobx.spliceWithArray(0, this.$mobx.values.length, n)
                    }, l.prototype.toJS = function() {
                        return this.slice()
                    }, l.prototype.toJSON = function() {
                        return this.toJS()
                    }, l.prototype.peek = function() {
                        return this.$mobx.atom.reportObserved(), this.$mobx.dehanceValues(this.$mobx.values)
                    }, l.prototype.find = function(n, l, e) {
                        void 0 === e && (e = 0);
                        var t = this.findIndex.apply(this, arguments);
                        return -1 === t ? void 0 : this.get(t)
                    }, l.prototype.findIndex = function(n, l, e) {
                        void 0 === e && (e = 0);
                        for (var t = this.peek(), o = t.length, u = e; u < o; u++)
                            if (n.call(l, t[u], u, this)) return u;
                        return -1
                    }, l.prototype.splice = function(n, l) {
                        for (var e = [], t = 2; t < arguments.length; t++) e[t - 2] = arguments[t];
                        switch (arguments.length) {
                            case 0:
                                return [];
                            case 1:
                                return this.$mobx.spliceWithArray(n);
                            case 2:
                                return this.$mobx.spliceWithArray(n, l)
                        }
                        return this.$mobx.spliceWithArray(n, l, e)
                    }, l.prototype.spliceWithArray = function(n, l, e) {
                        return this.$mobx.spliceWithArray(n, l, e)
                    }, l.prototype.push = function() {
                        for (var n = [], l = 0; l < arguments.length; l++) n[l] = arguments[l];
                        var e = this.$mobx;
                        return e.spliceWithArray(e.values.length, 0, n), e.values.length
                    }, l.prototype.pop = function() {
                        return this.splice(Math.max(this.$mobx.values.length - 1, 0), 1)[0]
                    }, l.prototype.shift = function() {
                        return this.splice(0, 1)[0]
                    }, l.prototype.unshift = function() {
                        for (var n = [], l = 0; l < arguments.length; l++) n[l] = arguments[l];
                        var e = this.$mobx;
                        return e.spliceWithArray(0, 0, n), e.values.length
                    }, l.prototype.reverse = function() {
                        var n = this.slice();
                        return n.reverse.apply(n, arguments)
                    }, l.prototype.sort = function(n) {
                        var l = this.slice();
                        return l.sort.apply(l, arguments)
                    }, l.prototype.remove = function(n) {
                        var l = this.$mobx.dehanceValues(this.$mobx.values).indexOf(n);
                        return l > -1 && (this.splice(l, 1), !0)
                    }, l.prototype.move = function(n, l) {
                        function e(n) {
                            if (n < 0) throw new Error("[mobx.array] Index out of bounds: " + n + " is negative");
                            var l = this.$mobx.values.length;
                            if (n >= l) throw new Error("[mobx.array] Index out of bounds: " + n + " is not smaller than " + l)
                        }
                        if (e.call(this, n), e.call(this, l), n !== l) {
                            var t, o = this.$mobx.values;
                            t = n < l ? o.slice(0, n).concat(o.slice(n + 1, l + 1), [o[n]], o.slice(l + 1)) : o.slice(0, l).concat([o[n]], o.slice(l, n), o.slice(n + 1)), this.replace(t)
                        }
                    }, l.prototype.get = function(n) {
                        var l = this.$mobx;
                        if (l) {
                            if (n < l.values.length) return l.atom.reportObserved(), l.dehanceValue(l.values[n]);
                            console.warn("[mobx.array] Attempt to read an array index (" + n + ") that is out of bounds (" + l.values.length + "). Please check length first. Out of bound indices will not be tracked by MobX")
                        }
                    }, l.prototype.set = function(n, l) {
                        var e = this.$mobx,
                            t = e.values;
                        if (n < t.length) {
                            Pt(e.atom);
                            var o = t[n];
                            if (Yn(e)) {
                                var u = Wn(e, {
                                    type: "update",
                                    object: this,
                                    index: n,
                                    newValue: l
                                });
                                if (!u) return;
                                l = u.newValue
                            }(l = e.enhancer(l, o)) !== o && (t[n] = l, e.notifyArrayChildUpdate(n, l, o))
                        } else {
                            if (n !== t.length) throw new Error("[mobx.array] Index out of bounds, " + n + " is larger than " + t.length);
                            e.spliceWithArray(n, 0, [l])
                        }
                    }, l
                }(pl);
            il(hl.prototype, function() {
                    return rl(this.slice())
                }), Object.defineProperty(hl.prototype, "length", {
                    enumerable: !1,
                    configurable: !0,
                    get: function() {
                        return this.$mobx.getArrayLength()
                    },
                    set: function(n) {
                        this.$mobx.setArrayLength(n)
                    }
                }), ["every", "filter", "forEach", "indexOf", "join", "lastIndexOf", "map", "reduce", "reduceRight", "slice", "some", "toString", "toLocaleString"].forEach(function(n) {
                    var l = Array.prototype[n];
                    Ae("function" == typeof l, "Base function not defined on Array prototype: '" + n + "'"), Ye(hl.prototype, n, function() {
                        return l.apply(this.peek(), arguments)
                    })
                }),
                function(n, l) {
                    for (var e = 0; e < l.length; e++) Ye(n, l[e], n[l[e]])
                }(hl.prototype, ["constructor", "intercept", "observe", "clear", "concat", "get", "replace", "toJS", "toJSON", "peek", "find", "findIndex", "splice", "spliceWithArray", "push", "pop", "set", "shift", "unshift", "reverse", "sort", "remove", "move", "toString", "toLocaleString"]);
            var gl = ml(0);

            function ml(n) {
                return {
                    enumerable: !1,
                    configurable: !1,
                    get: function() {
                        return this.get(n)
                    },
                    set: function(l) {
                        this.set(n, l)
                    }
                }
            }

            function vl(n) {
                Object.defineProperty(hl.prototype, "" + n, ml(n))
            }

            function bl(n) {
                for (var l = cl; l < n; l++) vl(l);
                cl = n
            }
            bl(1e3);
            var yl = Je("ObservableArrayAdministration", fl);

            function $l(n) {
                return Ge(n) && yl(n.$mobx)
            }
            var _l = {},
                xl = function(n) {
                    function l(l, e, t, o) {
                        void 0 === t && (t = "ObservableValue@" + Ne()), void 0 === o && (o = !0);
                        var u = n.call(this, t) || this;
                        return u.enhancer = e, u.hasUnreportedChange = !1, u.dehancer = void 0, u.value = e(l, void 0, t), o && Xn() && nl({
                            type: "create",
                            object: u,
                            newValue: u.value
                        }), u
                    }
                    return Un(l, n), l.prototype.dehanceValue = function(n) {
                        return void 0 !== this.dehancer ? this.dehancer(n) : n
                    }, l.prototype.set = function(n) {
                        var l = this.value;
                        if ((n = this.prepareNewValue(n)) !== _l) {
                            var e = Xn();
                            e && ll({
                                type: "update",
                                object: this,
                                newValue: n,
                                oldValue: l
                            }), this.setNewValue(n), e && tl()
                        }
                    }, l.prototype.prepareNewValue = function(n) {
                        if (Pt(this), Yn(this)) {
                            var l = Wn(this, {
                                object: this,
                                type: "update",
                                newValue: n
                            });
                            if (!l) return _l;
                            n = l.newValue
                        }
                        return n = this.enhancer(n, this.value, this.name), this.value !== n ? n : _l
                    }, l.prototype.setNewValue = function(n) {
                        var l = this.value;
                        this.value = n, this.reportChanged(), Zn(this) && Qn(this, {
                            type: "update",
                            object: this,
                            newValue: n,
                            oldValue: l
                        })
                    }, l.prototype.get = function() {
                        return this.reportObserved(), this.dehanceValue(this.value)
                    }, l.prototype.intercept = function(n) {
                        return Kn(this, n)
                    }, l.prototype.observe = function(n, l) {
                        return l && n({
                            object: this,
                            type: "update",
                            newValue: this.value,
                            oldValue: void 0
                        }), Jn(this, n)
                    }, l.prototype.toJSON = function() {
                        return this.get()
                    }, l.prototype.toString = function() {
                        return this.name + "[" + this.value + "]"
                    }, l.prototype.valueOf = function() {
                        return nt(this.get())
                    }, l
                }(Bn);
            xl.prototype[Xe()] = xl.prototype.valueOf;
            var Ol = Je("ObservableValue", xl),
                Cl = {
                    m001: "It is not allowed to assign new values to @action fields",
                    m002: "`runInAction` expects a function",
                    m003: "`runInAction` expects a function without arguments",
                    m004: "autorun expects a function",
                    m005: "Warning: attempted to pass an action to autorun. Actions are untracked and will not trigger on state changes. Use `reaction` or wrap only your state modification code in an action.",
                    m006: "Warning: attempted to pass an action to autorunAsync. Actions are untracked and will not trigger on state changes. Use `reaction` or wrap only your state modification code in an action.",
                    m007: "reaction only accepts 2 or 3 arguments. If migrating from MobX 2, please provide an options object",
                    m008: "wrapping reaction expression in `asReference` is no longer supported, use options object instead",
                    m009: "@computed can only be used on getter functions, like: '@computed get myProps() { return ...; }'. It looks like it was used on a property.",
                    m010: "@computed can only be used on getter functions, like: '@computed get myProps() { return ...; }'",
                    m011: "First argument to `computed` should be an expression. If using computed as decorator, don't pass it arguments",
                    m012: "computed takes one or two arguments if used as function",
                    m013: "[mobx.expr] 'expr' should only be used inside other reactive functions.",
                    m014: "extendObservable expected 2 or more arguments",
                    m015: "extendObservable expects an object as first argument",
                    m016: "extendObservable should not be used on maps, use map.merge instead",
                    m017: "all arguments of extendObservable should be objects",
                    m018: "extending an object with another observable (object) is not supported. Please construct an explicit propertymap, using `toJS` if need. See issue #540",
                    m019: "[mobx.isObservable] isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.",
                    m020: "modifiers can only be used for individual object properties",
                    m021: "observable expects zero or one arguments",
                    m022: "@observable can not be used on getters, use @computed instead",
                    m024: "whyRun() can only be used if a derivation is active, or by passing an computed value / reaction explicitly. If you invoked whyRun from inside a computation; the computation is currently suspended but re-evaluating because somebody requested its value.",
                    m025: "whyRun can only be used on reactions and computed values",
                    m026: "`action` can only be invoked on functions",
                    m028: "It is not allowed to set `useStrict` when a derivation is running",
                    m029: "INTERNAL ERROR only onBecomeUnobserved shouldn't be called twice in a row",
                    m030a: "Since strict-mode is enabled, changing observed observable values outside actions is not allowed. Please wrap the code in an `action` if this change is intended. Tried to modify: ",
                    m030b: "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, the render function of a React component? Tried to modify: ",
                    m031: "Computed values are not allowed to cause side effects by changing observables that are already being observed. Tried to modify: ",
                    m032: "* This computation is suspended (not in use by any reaction) and won't run automatically.\n\tDidn't expect this computation to be suspended at this point?\n\t  1. Make sure this computation is used by a reaction (reaction, autorun, observer).\n\t  2. Check whether you are using this computation synchronously (in the same stack as they reaction that needs it).",
                    m033: "`observe` doesn't support the fire immediately property for observable maps.",
                    m034: "`mobx.map` is deprecated, use `new ObservableMap` or `mobx.observable.map` instead",
                    m035: "Cannot make the designated object observable; it is not extensible",
                    m036: "It is not possible to get index atoms from arrays",
                    m037: 'Hi there! I\'m sorry you have just run into an exception.\nIf your debugger ends up here, know that some reaction (like the render() of an observer component, autorun or reaction)\nthrew an exception and that mobx caught it, to avoid that it brings the rest of your application down.\nThe original cause of the exception (the code that caused this reaction to run (again)), is still in the stack.\n\nHowever, more interesting is the actual stack trace of the error itself.\nHopefully the error is an instanceof Error, because in that case you can inspect the original stack of the error from where it was thrown.\nSee `error.stack` property, or press the very subtle "(...)" link you see near the console.error message that probably brought you here.\nThat stack is more interesting than the stack of this console.error itself.\n\nIf the exception you see is an exception you created yourself, make sure to use `throw new Error("Oops")` instead of `throw "Oops"`,\nbecause the javascript environment will only preserve the original stack trace in the first form.\n\nYou can also make sure the debugger pauses the next time this very same exception is thrown by enabling "Pause on caught exception".\n(Note that it might pause on many other, unrelated exception as well).\n\nIf that all doesn\'t help you out, feel free to open an issue https://github.com/mobxjs/mobx/issues!\n',
                    m038: "Missing items in this list?\n    1. Check whether all used values are properly marked as observable (use isObservable to verify)\n    2. Make sure you didn't dereference values too early. MobX observes props, not primitives. E.g: use 'person.name' instead of 'name' in your computation.\n"
                };

            function wl(n) {
                return Cl[n]
            }

            function Sl(n, l) {
                Ae("function" == typeof l, wl("m026")), Ae("string" == typeof n && n.length > 0, "actions should have valid names, got: '" + n + "'");
                var e = function() {
                    return El(n, l, this, arguments)
                };
                return e.originalFn = l, e.isMobxAction = !0, e
            }

            function El(n, l, e, t) {
                var o = function(n, l, e, t) {
                    var o = Xn() && !!n,
                        u = 0;
                    if (o) {
                        u = Date.now();
                        var r = t && t.length || 0,
                            i = new Array(r);
                        if (r > 0)
                            for (var a = 0; a < r; a++) i[a] = t[a];
                        ll({
                            type: "action",
                            name: n,
                            fn: l,
                            object: e,
                            arguments: i
                        })
                    }
                    var d = It();
                    return bt(), {
                        prevDerivation: d,
                        prevAllowStateChanges: Pl(!0),
                        notifySpy: o,
                        startTime: u
                    }
                }(n, l, e, t);
                try {
                    return l.apply(e, t)
                } finally {
                    ! function(n) {
                        Ml(n.prevAllowStateChanges), yt(), Nt(n.prevDerivation), n.notifySpy && tl({
                            time: Date.now() - n.startTime
                        })
                    }(o)
                }
            }

            function Pl(n) {
                var l = tt.allowStateChanges;
                return tt.allowStateChanges = n, l
            }

            function Ml(n) {
                tt.allowStateChanges = n
            }

            function jl(n, l, e, t, o) {
                function u(u, r, i, a, d) {
                    if (void 0 === d && (d = 0), Ae(o || Nl(arguments), "This function is a decorator, but it wasn't invoked like a decorator"), i) {
                        He(u, "__mobxLazyInitializers") || Ye(u, "__mobxLazyInitializers", u.__mobxLazyInitializers && u.__mobxLazyInitializers.slice() || []);
                        var s = i.value,
                            c = i.initializer;
                        return u.__mobxLazyInitializers.push(function(l) {
                            n(l, r, c ? c.call(l) : s, a, i)
                        }), {
                            enumerable: t,
                            configurable: !0,
                            get: function() {
                                return !0 !== this.__mobxDidRunLazyInitializers && Il(this), l.call(this, r)
                            },
                            set: function(n) {
                                !0 !== this.__mobxDidRunLazyInitializers && Il(this), e.call(this, r, n)
                            }
                        }
                    }
                    var p = {
                        enumerable: t,
                        configurable: !0,
                        get: function() {
                            return this.__mobxInitializedProps && !0 === this.__mobxInitializedProps[r] || kl(this, r, void 0, n, a, i), l.call(this, r)
                        },
                        set: function(l) {
                            this.__mobxInitializedProps && !0 === this.__mobxInitializedProps[r] ? e.call(this, r, l) : kl(this, r, l, n, a, i)
                        }
                    };
                    return (arguments.length < 3 || 5 === arguments.length && d < 3) && Object.defineProperty(u, r, p), p
                }
                return o ? function() {
                    if (Nl(arguments)) return u.apply(null, arguments);
                    var n = arguments,
                        l = arguments.length;
                    return function(e, t, o) {
                        return u(e, t, o, n, l)
                    }
                } : u
            }

            function kl(n, l, e, t, o, u) {
                He(n, "__mobxInitializedProps") || Ye(n, "__mobxInitializedProps", {}), n.__mobxInitializedProps[l] = !0, t(n, l, e, o, u)
            }

            function Il(n) {
                !0 !== n.__mobxDidRunLazyInitializers && n.__mobxLazyInitializers && (Ye(n, "__mobxDidRunLazyInitializers", !0), n.__mobxDidRunLazyInitializers && n.__mobxLazyInitializers.forEach(function(l) {
                    return l(n)
                }))
            }

            function Nl(n) {
                return (2 === n.length || 3 === n.length) && "string" == typeof n[1]
            }
            var Tl = jl(function(n, l, e, t, o) {
                    Ye(n, l, Dl(t && 1 === t.length ? t[0] : e.name || l || "<unnamed action>", e))
                }, function(n) {
                    return this[n]
                }, function() {
                    Ae(!1, wl("m001"))
                }, !1, !0),
                Al = jl(function(n, l, e) {
                    Vl(n, l, e)
                }, function(n) {
                    return this[n]
                }, function() {
                    Ae(!1, wl("m001"))
                }, !1, !1),
                Dl = function(n, l, e, t) {
                    return 1 === arguments.length && "function" == typeof n ? Sl(n.name || "<unnamed action>", n) : 2 === arguments.length && "function" == typeof l ? Sl(n, l) : 1 === arguments.length && "string" == typeof n ? Rl(n) : Rl(l).apply(null, arguments)
                };

            function Rl(n) {
                return function(l, e, t) {
                    if (t && "function" == typeof t.value) return t.value = Sl(n, t.value), t.enumerable = !1, t.configurable = !0, t;
                    if (void 0 !== t && void 0 !== t.get) throw new Error("[mobx] action is not expected to be used with getters");
                    return Tl(n).apply(this, arguments)
                }
            }

            function Fl(n) {
                return "function" == typeof n && !0 === n.isMobxAction
            }

            function Vl(n, l, e) {
                var t = function() {
                    return El(l, e, n, arguments)
                };
                t.isMobxAction = !0, Ye(n, l, t)
            }
            Dl.bound = function(n, l, e) {
                if ("function" == typeof n) {
                    var t = Sl("<not yet bound action>", n);
                    return t.autoBind = !0, t
                }
                return Al.apply(null, arguments)
            };
            var zl = Object.prototype.toString;

            function Ll(n, l) {
                return function n(l, e, t, o) {
                    if (l === e) return 0 !== l || 1 / l == 1 / e;
                    if (null == l || null == e) return !1;
                    if (l != l) return e != e;
                    var u = typeof l;
                    return ("function" === u || "object" === u || "object" == typeof e) && function(l, e, t, o) {
                        l = Gl(l), e = Gl(e);
                        var u = zl.call(l);
                        if (u !== zl.call(e)) return !1;
                        switch (u) {
                            case "[object RegExp]":
                            case "[object String]":
                                return "" + l == "" + e;
                            case "[object Number]":
                                return +l != +l ? +e != +e : 0 == +l ? 1 / +l == 1 / e : +l == +e;
                            case "[object Date]":
                            case "[object Boolean]":
                                return +l == +e;
                            case "[object Symbol]":
                                return "undefined" != typeof Symbol && Symbol.valueOf.call(l) === Symbol.valueOf.call(e)
                        }
                        var r = "[object Array]" === u;
                        if (!r) {
                            if ("object" != typeof l || "object" != typeof e) return !1;
                            var i = l.constructor,
                                a = e.constructor;
                            if (i !== a && !("function" == typeof i && i instanceof i && "function" == typeof a && a instanceof a) && "constructor" in l && "constructor" in e) return !1
                        }
                        t = t || [], o = o || [];
                        for (var d = t.length; d--;)
                            if (t[d] === l) return o[d] === e;
                        if (t.push(l), o.push(e), r) {
                            if ((d = l.length) !== e.length) return !1;
                            for (; d--;)
                                if (!n(l[d], e[d], t, o)) return !1
                        } else {
                            var s, c = Object.keys(l);
                            if (d = c.length, Object.keys(e).length !== d) return !1;
                            for (; d--;)
                                if (!Ul(e, s = c[d]) || !n(l[s], e[s], t, o)) return !1
                        }
                        return t.pop(), o.pop(), !0
                    }(l, e, t, o)
                }(n, l)
            }

            function Gl(n) {
                return $l(n) ? n.peek() : je(n) ? n.entries() : Qe(n) ? function(n) {
                    for (var l = [];;) {
                        var e = n.next();
                        if (e.done) break;
                        l.push(e.value)
                    }
                    return l
                }(n.entries()) : n
            }

            function Ul(n, l) {
                return Object.prototype.hasOwnProperty.call(n, l)
            }

            function Bl(n, l) {
                return n === l
            }
            var ql = {
                identity: Bl,
                structural: function(n, l) {
                    return Ll(n, l)
                },
                default: function(n, l) {
                    return function(n, l) {
                        return "number" == typeof n && "number" == typeof l && isNaN(n) && isNaN(l)
                    }(n, l) || Bl(n, l)
                }
            };

            function Hl(n, l, e) {
                var t, o, u;
                "string" == typeof n ? (t = n, o = l, u = e) : (t = n.name || "Autorun@" + Ne(), o = n, u = l), Ae("function" == typeof o, wl("m004")), Ae(!1 === Fl(o), wl("m005")), u && (o = o.bind(u));
                var r = new Rt(t, function() {
                    this.track(i)
                });

                function i() {
                    o(r)
                }
                return r.schedule(), r.getDisposer()
            }

            function Yl(n, l, e) {
                var t;
                arguments.length > 3 && Te(wl("m007")), $e(n) && Te(wl("m008")), (t = "object" == typeof e ? e : {}).name = t.name || n.name || l.name || "Reaction@" + Ne(), t.fireImmediately = !0 === e || !0 === t.fireImmediately, t.delay = t.delay || 0, t.compareStructural = t.compareStructural || t.struct || !1, l = Dl(t.name, t.context ? l.bind(t.context) : l), t.context && (n = n.bind(t.context));
                var o, u = !0,
                    r = !1,
                    i = t.equals ? t.equals : t.compareStructural || t.struct ? ql.structural : ql.default,
                    a = new Rt(t.name, function() {
                        u || t.delay < 1 ? d() : r || (r = !0, setTimeout(function() {
                            r = !1, d()
                        }, t.delay))
                    });

                function d() {
                    if (!a.isDisposed) {
                        var e = !1;
                        a.track(function() {
                            var l = n(a);
                            e = u || !i(o, l), o = l
                        }), u && t.fireImmediately && l(o, a), u || !0 !== e || l(o, a), u && (u = !1)
                    }
                }
                return a.schedule(), a.getDisposer()
            }
            var Kl = function() {
                function n(n, l, e, t, o) {
                    this.derivation = n, this.scope = l, this.equals = e, this.dependenciesState = xt.NOT_TRACKING, this.observing = [], this.newObserving = null, this.isPendingUnobservation = !1, this.observers = [], this.observersIndexes = {}, this.diffValue = 0, this.runId = 0, this.lastAccessedBy = 0, this.lowestObserverState = xt.UP_TO_DATE, this.unboundDepsCount = 0, this.__mapid = "#" + Ne(), this.value = new Ct(null), this.isComputing = !1, this.isRunningSetter = !1, this.isTracing = Ot.NONE, this.name = t || "ComputedValue@" + Ne(), o && (this.setter = Sl(t + "-setter", o))
                }
                return n.prototype.onBecomeStale = function() {
                    ! function(n) {
                        if (n.lowestObserverState === xt.UP_TO_DATE) {
                            n.lowestObserverState = xt.POSSIBLY_STALE;
                            for (var l = n.observers, e = l.length; e--;) {
                                var t = l[e];
                                t.dependenciesState === xt.UP_TO_DATE && (t.dependenciesState = xt.POSSIBLY_STALE, t.isTracing !== Ot.NONE && _t(t, n), t.onBecomeStale())
                            }
                        }
                    }(this)
                }, n.prototype.onBecomeUnobserved = function() {
                    jt(this), this.value = void 0
                }, n.prototype.get = function() {
                    Ae(!this.isComputing, "Cycle detected in computation " + this.name, this.derivation), 0 === tt.inBatch ? (bt(), St(this) && (this.isTracing !== Ot.NONE && console.log("[mobx.trace] '" + this.name + "' is being read outside a reactive context and doing a full recompute"), this.value = this.computeValue(!1)), yt()) : ($t(this), St(this) && this.trackAndCompute() && function(n) {
                        if (n.lowestObserverState !== xt.STALE) {
                            n.lowestObserverState = xt.STALE;
                            for (var l = n.observers, e = l.length; e--;) {
                                var t = l[e];
                                t.dependenciesState === xt.POSSIBLY_STALE ? t.dependenciesState = xt.STALE : t.dependenciesState === xt.UP_TO_DATE && (n.lowestObserverState = xt.UP_TO_DATE)
                            }
                        }
                    }(this));
                    var n = this.value;
                    if (wt(n)) throw n.cause;
                    return n
                }, n.prototype.peek = function() {
                    var n = this.computeValue(!1);
                    if (wt(n)) throw n.cause;
                    return n
                }, n.prototype.set = function(n) {
                    if (this.setter) {
                        Ae(!this.isRunningSetter, "The setter of computed value '" + this.name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?"), this.isRunningSetter = !0;
                        try {
                            this.setter.call(this.scope, n)
                        } finally {
                            this.isRunningSetter = !1
                        }
                    } else Ae(!1, "[ComputedValue '" + this.name + "'] It is not possible to assign a new value to a computed value.")
                }, n.prototype.trackAndCompute = function() {
                    Xn() && nl({
                        object: this.scope,
                        type: "compute",
                        fn: this.derivation
                    });
                    var n = this.value,
                        l = this.dependenciesState === xt.NOT_TRACKING,
                        e = this.value = this.computeValue(!0);
                    return l || wt(n) || wt(e) || !this.equals(n, e)
                }, n.prototype.computeValue = function(n) {
                    var l;
                    if (this.isComputing = !0, tt.computationDepth++, n) l = Mt(this, this.derivation, this.scope);
                    else try {
                        l = this.derivation.call(this.scope)
                    } catch (n) {
                        l = new Ct(n)
                    }
                    return tt.computationDepth--, this.isComputing = !1, l
                }, n.prototype.observe = function(n, l) {
                    var e = this,
                        t = !0,
                        o = void 0;
                    return Hl(function() {
                        var u = e.get();
                        if (!t || l) {
                            var r = It();
                            n({
                                type: "update",
                                object: e,
                                newValue: u,
                                oldValue: o
                            }), Nt(r)
                        }
                        t = !1, o = u
                    })
                }, n.prototype.toJSON = function() {
                    return this.get()
                }, n.prototype.toString = function() {
                    return this.name + "[" + this.derivation.toString() + "]"
                }, n.prototype.valueOf = function() {
                    return nt(this.get())
                }, n.prototype.whyRun = function() {
                    var n = Boolean(tt.trackingDerivation),
                        l = ze(this.isComputing ? this.newObserving : this.observing).map(function(n) {
                            return n.name
                        }),
                        e = ze(ht(this).map(function(n) {
                            return n.name
                        }));
                    return "\nWhyRun? computation '" + this.name + "':\n * Running because: " + (n ? "[active] the value of this computation is needed by a reaction" : this.isComputing ? "[get] The value of this computed was requested outside a reaction" : "[idle] not running at the moment") + "\n" + (this.dependenciesState === xt.NOT_TRACKING ? wl("m032") : " * This computation will re-run if any of the following observables changes:\n    " + Le(l) + "\n    " + (this.isComputing && n ? " (... or any observable accessed during the remainder of the current run)" : "") + "\n    " + wl("m038") + "\n\n  * If the outcome of this computation changes, the following observers will be re-run:\n    " + Le(e) + "\n")
                }, n
            }();
            Kl.prototype[Xe()] = Kl.prototype.valueOf;
            var Wl = Je("ComputedValue", Kl),
                Zl = function() {
                    function n(n, l) {
                        this.target = n, this.name = l, this.values = {}, this.changeListeners = null, this.interceptors = null
                    }
                    return n.prototype.observe = function(n, l) {
                        return Ae(!0 !== l, "`observe` doesn't support the fire immediately property for observable objects."), Jn(this, n)
                    }, n.prototype.intercept = function(n) {
                        return Kn(this, n)
                    }, n
                }();

            function Jl(n, l) {
                if (re(n) && n.hasOwnProperty("$mobx")) return n.$mobx;
                Ae(Object.isExtensible(n), wl("m035")), Ue(n) || (l = (n.constructor.name || "ObservableObject") + "@" + Ne()), l || (l = "ObservableObject@" + Ne());
                var e = new Zl(n, l);
                return Ke(n, "$mobx", e), e
            }

            function Ql(n, l, e, t) {
                if (n.values[l] && !Wl(n.values[l])) return Ae("value" in e, "The property " + l + " in " + n.name + " is already observable, cannot redefine it as computed property"), void(n.target[l] = e.value);
                if ("value" in e)
                    if ($e(e.value)) {
                        var o = e.value;
                        Xl(n, l, o.initialValue, o.enhancer)
                    } else Fl(e.value) && !0 === e.value.autoBind ? Vl(n.target, l, e.value.originalFn) : Wl(e.value) ? function(n, l, e) {
                        e.name = n.name + "." + l, e.scope || (e.scope = n.target), n.values[l] = e, Object.defineProperty(n.target, l, te(l))
                    }(n, l, e.value) : Xl(n, l, e.value, t);
                else ne(n, l, e.get, e.set, ql.default, !0)
            }

            function Xl(n, l, e, t) {
                if (Ze(n.target, l), Yn(n)) {
                    var o = Wn(n, {
                        object: n.target,
                        name: l,
                        type: "add",
                        newValue: e
                    });
                    if (!o) return;
                    e = o.newValue
                }
                e = (n.values[l] = new xl(e, t, n.name + "." + l, !1)).value, Object.defineProperty(n.target, l, function(n) {
                        return le[n] || (le[n] = {
                            configurable: !0,
                            enumerable: !0,
                            get: function() {
                                return this.$mobx.values[n].get()
                            },
                            set: function(l) {
                                oe(this, n, l)
                            }
                        })
                    }(l)),
                    function(n, l, e, t) {
                        var o = Zn(n),
                            u = Xn(),
                            r = o || u ? {
                                type: "add",
                                object: l,
                                name: e,
                                newValue: t
                            } : null;
                        u && ll(r), o && Qn(n, r), u && tl()
                    }(n, n.target, l, e)
            }

            function ne(n, l, e, t, o, u) {
                u && Ze(n.target, l), n.values[l] = new Kl(e, n.target, o, n.name + "." + l, t), u && Object.defineProperty(n.target, l, te(l))
            }
            var le = {},
                ee = {};

            function te(n) {
                return ee[n] || (ee[n] = {
                    configurable: !0,
                    enumerable: !1,
                    get: function() {
                        return this.$mobx.values[n].get()
                    },
                    set: function(l) {
                        return this.$mobx.values[n].set(l)
                    }
                })
            }

            function oe(n, l, e) {
                var t = n.$mobx,
                    o = t.values[l];
                if (Yn(t)) {
                    if (!(i = Wn(t, {
                            type: "update",
                            object: n,
                            name: l,
                            newValue: e
                        }))) return;
                    e = i.newValue
                }
                if ((e = o.prepareNewValue(e)) !== _l) {
                    var u = Zn(t),
                        r = Xn(),
                        i = u || r ? {
                            type: "update",
                            object: n,
                            oldValue: o.value,
                            name: l,
                            newValue: e
                        } : null;
                    r && ll(i), o.setNewValue(e), u && Qn(t, i), r && tl()
                }
            }
            var ue = Je("ObservableObjectAdministration", Zl);

            function re(n) {
                return !!Ge(n) && (Il(n), ue(n.$mobx))
            }

            function ie(n, l) {
                if (null === n || void 0 === n) return !1;
                if (void 0 !== l) {
                    if ($l(n) || je(n)) throw new Error(wl("m019"));
                    if (re(n)) {
                        var e = n.$mobx;
                        return e.values && !!e.values[l]
                    }
                    return !1
                }
                return re(n) || !!n.$mobx || Hn(n) || Ut(n) || Wl(n)
            }

            function ae(n) {
                return Ae(!!n, ":("), jl(function(l, e, t, o, u) {
                    Ze(l, e), Ae(!u || !u.get, wl("m022")), Xl(Jl(l, void 0), e, t, n)
                }, function(n) {
                    var l = this.$mobx.values[n];
                    if (void 0 !== l) return l.get()
                }, function(n, l) {
                    oe(this, n, l)
                }, !0, !1)
            }

            function de(n) {
                for (var l = [], e = 1; e < arguments.length; e++) l[e - 1] = arguments[e];
                return ce(n, xe, l)
            }

            function se(n) {
                for (var l = [], e = 1; e < arguments.length; e++) l[e - 1] = arguments[e];
                return ce(n, Ce, l)
            }

            function ce(n, l, e) {
                Ae(arguments.length >= 2, wl("m014")), Ae("object" == typeof n, wl("m015")), Ae(!je(n), wl("m016")), e.forEach(function(n) {
                    Ae("object" == typeof n, wl("m017")), Ae(!ie(n), wl("m018"))
                });
                for (var t = Jl(n), o = {}, u = e.length - 1; u >= 0; u--) {
                    var r = e[u];
                    for (var i in r)
                        if (!0 !== o[i] && He(r, i)) {
                            if (o[i] = !0, n === r && !We(n, i)) continue;
                            Ql(t, i, Object.getOwnPropertyDescriptor(r, i), l)
                        }
                }
                return n
            }
            var pe = ae(xe),
                fe = ae(Oe),
                he = ae(Ce),
                ge = ae(we),
                me = ae(Se),
                ve = {
                    box: function(n, l) {
                        return arguments.length > 2 && ye("box"), new xl(n, xe, l)
                    },
                    shallowBox: function(n, l) {
                        return arguments.length > 2 && ye("shallowBox"), new xl(n, Ce, l)
                    },
                    array: function(n, l) {
                        return arguments.length > 2 && ye("array"), new hl(n, xe, l)
                    },
                    shallowArray: function(n, l) {
                        return arguments.length > 2 && ye("shallowArray"), new hl(n, Ce, l)
                    },
                    map: function(n, l) {
                        return arguments.length > 2 && ye("map"), new Me(n, xe, l)
                    },
                    shallowMap: function(n, l) {
                        return arguments.length > 2 && ye("shallowMap"), new Me(n, Ce, l)
                    },
                    object: function(n, l) {
                        arguments.length > 2 && ye("object");
                        var e = {};
                        return Jl(e, l), de(e, n), e
                    },
                    shallowObject: function(n, l) {
                        arguments.length > 2 && ye("shallowObject");
                        var e = {};
                        return Jl(e, l), se(e, n), e
                    },
                    ref: function() {
                        return arguments.length < 2 ? _e(Ce, arguments[0]) : he.apply(null, arguments)
                    },
                    shallow: function() {
                        return arguments.length < 2 ? _e(Oe, arguments[0]) : fe.apply(null, arguments)
                    },
                    deep: function() {
                        return arguments.length < 2 ? _e(xe, arguments[0]) : pe.apply(null, arguments)
                    },
                    struct: function() {
                        return arguments.length < 2 ? _e(we, arguments[0]) : ge.apply(null, arguments)
                    }
                },
                be = function(n) {
                    if (void 0 === n && (n = void 0), "string" == typeof arguments[1]) return pe.apply(null, arguments);
                    if (Ae(arguments.length <= 1, wl("m021")), Ae(!$e(n), wl("m020")), ie(n)) return n;
                    var l = xe(n, 0, void 0);
                    return l !== n ? l : be.box(n)
                };

            function ye(n) {
                Te("Expected one or two arguments to observable." + n + ". Did you accidentally try to use observable." + n + " as decorator?")
            }

            function $e(n) {
                return "object" == typeof n && null !== n && !0 === n.isMobxModifierDescriptor
            }

            function _e(n, l) {
                return Ae(!$e(l), "Modifiers cannot be nested"), {
                    isMobxModifierDescriptor: !0,
                    initialValue: l,
                    enhancer: n
                }
            }

            function xe(n, l, e) {
                return $e(n) && Te("You tried to assign a modifier wrapped value to a collection, please define modifiers when creating the collection, not when modifying it"), ie(n) ? n : Array.isArray(n) ? be.array(n, e) : Ue(n) ? be.object(n, e) : Qe(n) ? be.map(n, e) : n
            }

            function Oe(n, l, e) {
                return $e(n) && Te("You tried to assign a modifier wrapped value to a collection, please define modifiers when creating the collection, not when modifying it"), void 0 === n || null === n ? n : re(n) || $l(n) || je(n) ? n : Array.isArray(n) ? be.shallowArray(n, e) : Ue(n) ? be.shallowObject(n, e) : Qe(n) ? be.shallowMap(n, e) : Te("The shallow modifier / decorator can only used in combination with arrays, objects and maps")
            }

            function Ce(n) {
                return n
            }

            function we(n, l, e) {
                if (Ll(n, l)) return l;
                if (ie(n)) return n;
                if (Array.isArray(n)) return new hl(n, we, e);
                if (Qe(n)) return new Me(n, we, e);
                if (Ue(n)) {
                    var t = {};
                    return Jl(t, e), ce(t, we, [n]), t
                }
                return n
            }

            function Se(n, l, e) {
                return Ll(n, l) ? l : n
            }

            function Ee(n, l) {
                void 0 === l && (l = void 0), bt();
                try {
                    return n.apply(l)
                } finally {
                    yt()
                }
            }
            Object.keys(ve).forEach(function(n) {
                return be[n] = ve[n]
            }), be.deep.struct = be.struct, be.ref.struct = function() {
                return arguments.length < 2 ? _e(Se, arguments[0]) : me.apply(null, arguments)
            };
            var Pe = {},
                Me = function() {
                    function n(n, l, e) {
                        void 0 === l && (l = xe), void 0 === e && (e = "ObservableMap@" + Ne()), this.enhancer = l, this.name = e, this.$mobx = Pe, this._data = Object.create(null), this._hasMap = Object.create(null), this._keys = new hl(void 0, Ce, this.name + ".keys()", !0), this.interceptors = null, this.changeListeners = null, this.dehancer = void 0, this.merge(n)
                    }
                    return n.prototype._has = function(n) {
                        return void 0 !== this._data[n]
                    }, n.prototype.has = function(n) {
                        return !!this.isValidKey(n) && (this._hasMap[n = "" + n] ? this._hasMap[n].get() : this._updateHasMapEntry(n, !1).get())
                    }, n.prototype.set = function(n, l) {
                        this.assertValidKey(n);
                        var e = this._has(n = "" + n);
                        if (Yn(this)) {
                            var t = Wn(this, {
                                type: e ? "update" : "add",
                                object: this,
                                newValue: l,
                                name: n
                            });
                            if (!t) return this;
                            l = t.newValue
                        }
                        return e ? this._updateValue(n, l) : this._addValue(n, l), this
                    }, n.prototype.delete = function(n) {
                        var l = this;
                        if (this.assertValidKey(n), n = "" + n, Yn(this) && !(o = Wn(this, {
                                type: "delete",
                                object: this,
                                name: n
                            }))) return !1;
                        if (this._has(n)) {
                            var e = Xn(),
                                t = Zn(this),
                                o = t || e ? {
                                    type: "delete",
                                    object: this,
                                    oldValue: this._data[n].value,
                                    name: n
                                } : null;
                            return e && ll(o), Ee(function() {
                                l._keys.remove(n), l._updateHasMapEntry(n, !1), l._data[n].setNewValue(void 0), l._data[n] = void 0
                            }), t && Qn(this, o), e && tl(), !0
                        }
                        return !1
                    }, n.prototype._updateHasMapEntry = function(n, l) {
                        var e = this._hasMap[n];
                        return e ? e.setNewValue(l) : e = this._hasMap[n] = new xl(l, Ce, this.name + "." + n + "?", !1), e
                    }, n.prototype._updateValue = function(n, l) {
                        var e = this._data[n];
                        if ((l = e.prepareNewValue(l)) !== _l) {
                            var t = Xn(),
                                o = Zn(this),
                                u = o || t ? {
                                    type: "update",
                                    object: this,
                                    oldValue: e.value,
                                    name: n,
                                    newValue: l
                                } : null;
                            t && ll(u), e.setNewValue(l), o && Qn(this, u), t && tl()
                        }
                    }, n.prototype._addValue = function(n, l) {
                        var e = this;
                        Ee(function() {
                            var t = e._data[n] = new xl(l, e.enhancer, e.name + "." + n, !1);
                            l = t.value, e._updateHasMapEntry(n, !0), e._keys.push(n)
                        });
                        var t = Xn(),
                            o = Zn(this),
                            u = o || t ? {
                                type: "add",
                                object: this,
                                name: n,
                                newValue: l
                            } : null;
                        t && ll(u), o && Qn(this, u), t && tl()
                    }, n.prototype.get = function(n) {
                        return this.has(n = "" + n) ? this.dehanceValue(this._data[n].get()) : this.dehanceValue(void 0)
                    }, n.prototype.dehanceValue = function(n) {
                        return void 0 !== this.dehancer ? this.dehancer(n) : n
                    }, n.prototype.keys = function() {
                        return rl(this._keys.slice())
                    }, n.prototype.values = function() {
                        return rl(this._keys.map(this.get, this))
                    }, n.prototype.entries = function() {
                        var n = this;
                        return rl(this._keys.map(function(l) {
                            return [l, n.get(l)]
                        }))
                    }, n.prototype.forEach = function(n, l) {
                        var e = this;
                        this.keys().forEach(function(t) {
                            return n.call(l, e.get(t), t, e)
                        })
                    }, n.prototype.merge = function(n) {
                        var l = this;
                        return je(n) && (n = n.toJS()), Ee(function() {
                            Ue(n) ? Object.keys(n).forEach(function(e) {
                                return l.set(e, n[e])
                            }) : Array.isArray(n) ? n.forEach(function(n) {
                                return l.set(n[0], n[1])
                            }) : Qe(n) ? n.forEach(function(n, e) {
                                return l.set(e, n)
                            }) : null !== n && void 0 !== n && Te("Cannot initialize map from " + n)
                        }), this
                    }, n.prototype.clear = function() {
                        var n = this;
                        Ee(function() {
                            kt(function() {
                                n.keys().forEach(n.delete, n)
                            })
                        })
                    }, n.prototype.replace = function(n) {
                        var l = this;
                        return Ee(function() {
                            var e, t = Ue(e = n) ? Object.keys(e) : Array.isArray(e) ? e.map(function(n) {
                                return n[0]
                            }) : Qe(e) ? Array.from(e.keys()) : je(e) ? e.keys() : Te("Cannot get keys from " + e);
                            l.keys().filter(function(n) {
                                return -1 === t.indexOf(n)
                            }).forEach(function(n) {
                                return l.delete(n)
                            }), l.merge(n)
                        }), this
                    }, Object.defineProperty(n.prototype, "size", {
                        get: function() {
                            return this._keys.length
                        },
                        enumerable: !0,
                        configurable: !0
                    }), n.prototype.toJS = function() {
                        var n = this,
                            l = {};
                        return this.keys().forEach(function(e) {
                            return l[e] = n.get(e)
                        }), l
                    }, n.prototype.toJSON = function() {
                        return this.toJS()
                    }, n.prototype.isValidKey = function(n) {
                        return null !== n && void 0 !== n && ("string" == typeof n || "number" == typeof n || "boolean" == typeof n)
                    }, n.prototype.assertValidKey = function(n) {
                        if (!this.isValidKey(n)) throw new Error("[mobx.map] Invalid key: '" + n + "', only strings, numbers and booleans are accepted as key in observable maps.")
                    }, n.prototype.toString = function() {
                        var n = this;
                        return this.name + "[{ " + this.keys().map(function(l) {
                            return l + ": " + n.get(l)
                        }).join(", ") + " }]"
                    }, n.prototype.observe = function(n, l) {
                        return Ae(!0 !== l, wl("m033")), Jn(this, n)
                    }, n.prototype.intercept = function(n) {
                        return Kn(this, n)
                    }, n
                }();
            il(Me.prototype, function() {
                return this.entries()
            });
            var je = Je("ObservableMap", Me),
                ke = [];

            function Ie() {
                return "undefined" != typeof window ? window : global
            }

            function Ne() {
                return ++tt.mobxGuid
            }

            function Te(n, l) {
                throw Ae(!1, n, l), "X"
            }

            function Ae(n, l, e) {
                if (!n) throw new Error("[mobx] Invariant failed: " + l + (e ? " in '" + e + "'" : ""))
            }
            Object.freeze(ke);
            var De = [];

            function Re(n) {
                return -1 === De.indexOf(n) && (De.push(n), console.error("[mobx] Deprecated: " + n), !0)
            }

            function Fe(n) {
                var l = !1;
                return function() {
                    if (!l) return l = !0, n.apply(this, arguments)
                }
            }
            var Ve = function() {};

            function ze(n) {
                var l = [];
                return n.forEach(function(n) {
                    -1 === l.indexOf(n) && l.push(n)
                }), l
            }

            function Le(n, l, e) {
                return void 0 === l && (l = 100), void 0 === e && (e = " - "), n ? n.slice(0, l).join(e) + (n.length > l ? " (... and " + (n.length - l) + "more)" : "") : ""
            }

            function Ge(n) {
                return null !== n && "object" == typeof n
            }

            function Ue(n) {
                if (null === n || "object" != typeof n) return !1;
                var l = Object.getPrototypeOf(n);
                return l === Object.prototype || null === l
            }

            function Be() {
                for (var n = arguments[0], l = 1, e = arguments.length; l < e; l++) {
                    var t = arguments[l];
                    for (var o in t) He(t, o) && (n[o] = t[o])
                }
                return n
            }
            var qe = Object.prototype.hasOwnProperty;

            function He(n, l) {
                return qe.call(n, l)
            }

            function Ye(n, l, e) {
                Object.defineProperty(n, l, {
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                    value: e
                })
            }

            function Ke(n, l, e) {
                Object.defineProperty(n, l, {
                    enumerable: !1,
                    writable: !1,
                    configurable: !0,
                    value: e
                })
            }

            function We(n, l) {
                var e = Object.getOwnPropertyDescriptor(n, l);
                return !e || !1 !== e.configurable && !1 !== e.writable
            }

            function Ze(n, l) {
                Ae(We(n, l), "Cannot make property '" + l + "' observable, it is not configurable and writable in the target object")
            }

            function Je(n, l) {
                var e = "isMobX" + n;
                return l.prototype[e] = !0,
                    function(n) {
                        return Ge(n) && !0 === n[e]
                    }
            }

            function Qe(n) {
                return void 0 !== Ie().Map && n instanceof Ie().Map
            }

            function Xe() {
                return "function" == typeof Symbol && Symbol.toPrimitive || "@@toPrimitive"
            }

            function nt(n) {
                return null === n ? null : "object" == typeof n ? "" + n : n
            }
            var lt = ["mobxGuid", "resetId", "spyListeners", "strictMode", "runId"],
                et = function() {
                    this.version = 5, this.trackingDerivation = null, this.computationDepth = 0, this.runId = 0, this.mobxGuid = 0, this.inBatch = 0, this.pendingUnobservations = [], this.pendingReactions = [], this.isRunningReactions = !1, this.allowStateChanges = !0, this.strictMode = !1, this.resetId = 0, this.spyListeners = [], this.globalReactionErrorHandlers = []
                },
                tt = new et,
                ot = !1,
                ut = !1,
                rt = !1,
                it = Ie();

            function at(n, l) {
                if ("object" == typeof n && null !== n) {
                    if ($l(n)) return Ae(void 0 === l, wl("m036")), n.$mobx.atom;
                    if (je(n)) {
                        var e = n;
                        return void 0 === l ? at(e._keys) : (Ae(!!(t = e._data[l] || e._hasMap[l]), "the entry '" + l + "' does not exist in the observable map '" + st(n) + "'"), t)
                    }
                    var t;
                    if (Il(n), re(n)) return l ? (Ae(!!(t = n.$mobx.values[l]), "no observable property '" + l + "' found on the observable object '" + st(n) + "'"), t) : Te("please specify a property");
                    if (Hn(n) || Wl(n) || Ut(n)) return n
                } else if ("function" == typeof n && Ut(n.$mobx)) return n.$mobx;
                return Te("Cannot obtain atom from " + n)
            }

            function dt(n, l) {
                return Ae(n, "Expecting some object"), void 0 !== l ? dt(at(n, l)) : Hn(n) || Wl(n) || Ut(n) ? n : je(n) ? n : (Il(n), n.$mobx ? n.$mobx : void Ae(!1, "Cannot obtain administration from " + n))
            }

            function st(n, l) {
                return (void 0 !== l ? at(n, l) : re(n) || je(n) ? dt(n) : at(n)).name
            }

            function ct(n, l) {
                return pt(at(n, l))
            }

            function pt(n) {
                var l = {
                    name: n.name
                };
                return n.observing && n.observing.length > 0 && (l.dependencies = ze(n.observing).map(pt)), l
            }

            function ft(n) {
                var l, e = {
                    name: n.name
                };
                return (l = n).observers && l.observers.length > 0 && (e.observers = ht(n).map(ft)), e
            }

            function ht(n) {
                return n.observers
            }

            function gt(n, l) {
                var e = n.observers.length;
                e && (n.observersIndexes[l.__mapid] = e), n.observers[e] = l, n.lowestObserverState > l.dependenciesState && (n.lowestObserverState = l.dependenciesState)
            }

            function mt(n, l) {
                if (1 === n.observers.length) n.observers.length = 0, vt(n);
                else {
                    var e = n.observers,
                        t = n.observersIndexes,
                        o = e.pop();
                    if (o !== l) {
                        var u = t[l.__mapid] || 0;
                        u ? t[o.__mapid] = u : delete t[o.__mapid], e[u] = o
                    }
                    delete t[l.__mapid]
                }
            }

            function vt(n) {
                n.isPendingUnobservation || (n.isPendingUnobservation = !0, tt.pendingUnobservations.push(n))
            }

            function bt() {
                tt.inBatch++
            }

            function yt() {
                if (0 == --tt.inBatch) {
                    Lt();
                    for (var n = tt.pendingUnobservations, l = 0; l < n.length; l++) {
                        var e = n[l];
                        e.isPendingUnobservation = !1, 0 === e.observers.length && e.onBecomeUnobserved()
                    }
                    tt.pendingUnobservations = []
                }
            }

            function $t(n) {
                var l = tt.trackingDerivation;
                null !== l ? l.runId !== n.lastAccessedBy && (n.lastAccessedBy = l.runId, l.newObserving[l.unboundDepsCount++] = n) : 0 === n.observers.length && vt(n)
            }

            function _t(n, l) {
                if (console.log("[mobx.trace] '" + n.name + "' is invalidated due to a change in: '" + l.name + "'"), n.isTracing === Ot.BREAK) {
                    var e = [];
                    ! function n(l, e, t) {
                        e.length >= 1e3 ? e.push("(and many more)") : (e.push("" + new Array(t).join("\t") + l.name), l.dependencies && l.dependencies.forEach(function(l) {
                            return n(l, e, t + 1)
                        }))
                    }(ct(n), e, 1), new Function("debugger;\n/*\nTracing '" + n.name + "'\n\nYou are entering this break point because derivation '" + n.name + "' is being traced and '" + l.name + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (n instanceof Kl ? n.derivation.toString() : "") + "\n\nThe dependencies for this derivation are:\n\n" + e.join("\n") + "\n*/\n    ")()
                }
            }
            it.__mobxInstanceCount ? (it.__mobxInstanceCount++, setTimeout(function() {
                ot || ut || rt || (rt = !0, console.warn("[mobx] Warning: there are multiple mobx instances active. This might lead to unexpected results. See https://github.com/mobxjs/mobx/issues/1082 for details."))
            }, 1)) : it.__mobxInstanceCount = 1;
            var xt = function(n) {
                    return n[n.NOT_TRACKING = -1] = "NOT_TRACKING", n[n.UP_TO_DATE = 0] = "UP_TO_DATE", n[n.POSSIBLY_STALE = 1] = "POSSIBLY_STALE", n[n.STALE = 2] = "STALE", n
                }({}),
                Ot = function(n) {
                    return n[n.NONE = 0] = "NONE", n[n.LOG = 1] = "LOG", n[n.BREAK = 2] = "BREAK", n
                }({}),
                Ct = function(n) {
                    this.cause = n
                };

            function wt(n) {
                return n instanceof Ct
            }

            function St(n) {
                switch (n.dependenciesState) {
                    case xt.UP_TO_DATE:
                        return !1;
                    case xt.NOT_TRACKING:
                    case xt.STALE:
                        return !0;
                    case xt.POSSIBLY_STALE:
                        for (var l = It(), e = n.observing, t = e.length, o = 0; o < t; o++) {
                            var u = e[o];
                            if (Wl(u)) {
                                try {
                                    u.get()
                                } catch (n) {
                                    return Nt(l), !0
                                }
                                if (n.dependenciesState === xt.STALE) return Nt(l), !0
                            }
                        }
                        return Tt(n), Nt(l), !1
                }
            }

            function Et() {
                return null !== tt.trackingDerivation
            }

            function Pt(n) {
                var l = n.observers.length > 0;
                tt.computationDepth > 0 && l && Te(wl("m031") + n.name), !tt.allowStateChanges && l && Te(wl(tt.strictMode ? "m030a" : "m030b") + n.name)
            }

            function Mt(n, l, e) {
                Tt(n), n.newObserving = new Array(n.observing.length + 100), n.unboundDepsCount = 0, n.runId = ++tt.runId;
                var t, o = tt.trackingDerivation;
                tt.trackingDerivation = n;
                try {
                    t = l.call(e)
                } catch (n) {
                    t = new Ct(n)
                }
                return tt.trackingDerivation = o,
                    function(n) {
                        for (var l = n.observing, e = n.observing = n.newObserving, t = xt.UP_TO_DATE, o = 0, u = n.unboundDepsCount, r = 0; r < u; r++) 0 === (i = e[r]).diffValue && (i.diffValue = 1, o !== r && (e[o] = i), o++), i.dependenciesState > t && (t = i.dependenciesState);
                        for (e.length = o, n.newObserving = null, u = l.length; u--;) 0 === (i = l[u]).diffValue && mt(i, n), i.diffValue = 0;
                        for (; o--;) {
                            var i;
                            1 === (i = e[o]).diffValue && (i.diffValue = 0, gt(i, n))
                        }
                        t !== xt.UP_TO_DATE && (n.dependenciesState = t, n.onBecomeStale())
                    }(n), t
            }

            function jt(n) {
                var l = n.observing;
                n.observing = [];
                for (var e = l.length; e--;) mt(l[e], n);
                n.dependenciesState = xt.NOT_TRACKING
            }

            function kt(n) {
                var l = It(),
                    e = n();
                return Nt(l), e
            }

            function It() {
                var n = tt.trackingDerivation;
                return tt.trackingDerivation = null, n
            }

            function Nt(n) {
                tt.trackingDerivation = n
            }

            function Tt(n) {
                if (n.dependenciesState !== xt.UP_TO_DATE) {
                    n.dependenciesState = xt.UP_TO_DATE;
                    for (var l = n.observing, e = l.length; e--;) l[e].lowestObserverState = xt.UP_TO_DATE
                }
            }

            function At(n) {
                return console.log(n), n
            }

            function Dt(n) {
                switch (n.length) {
                    case 0:
                        return tt.trackingDerivation;
                    case 1:
                        return at(n[0]);
                    case 2:
                        return at(n[0], n[1])
                }
            }
            var Rt = function() {
                function n(n, l) {
                    void 0 === n && (n = "Reaction@" + Ne()), this.name = n, this.onInvalidate = l, this.observing = [], this.newObserving = [], this.dependenciesState = xt.NOT_TRACKING, this.diffValue = 0, this.runId = 0, this.unboundDepsCount = 0, this.__mapid = "#" + Ne(), this.isDisposed = !1, this._isScheduled = !1, this._isTrackPending = !1, this._isRunning = !1, this.isTracing = Ot.NONE
                }
                return n.prototype.onBecomeStale = function() {
                    this.schedule()
                }, n.prototype.schedule = function() {
                    this._isScheduled || (this._isScheduled = !0, tt.pendingReactions.push(this), Lt())
                }, n.prototype.isScheduled = function() {
                    return this._isScheduled
                }, n.prototype.runReaction = function() {
                    this.isDisposed || (bt(), this._isScheduled = !1, St(this) && (this._isTrackPending = !0, this.onInvalidate(), this._isTrackPending && Xn() && nl({
                        object: this,
                        type: "scheduled-reaction"
                    })), yt())
                }, n.prototype.track = function(n) {
                    bt();
                    var l, e = Xn();
                    e && (l = Date.now(), ll({
                        object: this,
                        type: "reaction",
                        fn: n
                    })), this._isRunning = !0;
                    var t = Mt(this, n, void 0);
                    this._isRunning = !1, this._isTrackPending = !1, this.isDisposed && jt(this), wt(t) && this.reportExceptionInDerivation(t.cause), e && tl({
                        time: Date.now() - l
                    }), yt()
                }, n.prototype.reportExceptionInDerivation = function(n) {
                    var l = this;
                    if (this.errorHandler) this.errorHandler(n, this);
                    else {
                        var e = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this,
                            t = wl("m037");
                        console.error(e || t, n), Xn() && nl({
                            type: "error",
                            message: e,
                            error: n,
                            object: this
                        }), tt.globalReactionErrorHandlers.forEach(function(e) {
                            return e(n, l)
                        })
                    }
                }, n.prototype.dispose = function() {
                    this.isDisposed || (this.isDisposed = !0, this._isRunning || (bt(), jt(this), yt()))
                }, n.prototype.getDisposer = function() {
                    var n = this.dispose.bind(this);
                    return n.$mobx = this, n.onError = Ft, n
                }, n.prototype.toString = function() {
                    return "Reaction[" + this.name + "]"
                }, n.prototype.whyRun = function() {
                    var n = ze(this._isRunning ? this.newObserving : this.observing).map(function(n) {
                        return n.name
                    });
                    return "\nWhyRun? reaction '" + this.name + "':\n * Status: [" + (this.isDisposed ? "stopped" : this._isRunning ? "running" : this.isScheduled() ? "scheduled" : "idle") + "]\n * This reaction will re-run if any of the following observables changes:\n    " + Le(n) + "\n    " + (this._isRunning ? " (... or any observable accessed during the remainder of the current run)" : "") + "\n\t" + wl("m038") + "\n"
                }, n.prototype.trace = function(n) {
                    void 0 === n && (n = !1),
                        function() {
                            for (var n = [], l = 0; l < arguments.length; l++) n[l] = arguments[l];
                            var e = !1;
                            "boolean" == typeof n[n.length - 1] && (e = n.pop());
                            var t = Dt(n);
                            if (!t) return Te("'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
                            t.isTracing === Ot.NONE && console.log("[mobx.trace] '" + t.name + "' tracing enabled"), t.isTracing = e ? Ot.BREAK : Ot.LOG
                        }(this, n)
                }, n
            }();

            function Ft(n) {
                Ae(this && this.$mobx && Ut(this.$mobx), "Invalid `this`"), Ae(!this.$mobx.errorHandler, "Only one onErrorHandler can be registered"), this.$mobx.errorHandler = n
            }
            var Vt = 100,
                zt = function(n) {
                    return n()
                };

            function Lt() {
                tt.inBatch > 0 || tt.isRunningReactions || zt(Gt)
            }

            function Gt() {
                tt.isRunningReactions = !0;
                for (var n = tt.pendingReactions, l = 0; n.length > 0;) {
                    ++l === Vt && (console.error("Reaction doesn't converge to a stable state after " + Vt + " iterations. Probably there is a cycle in the reactive function: " + n[0]), n.splice(0));
                    for (var e = n.splice(0), t = 0, o = e.length; t < o; t++) e[t].runReaction()
                }
                tt.isRunningReactions = !1
            }
            var Ut = Je("Reaction", Rt);

            function Bt(n) {
                return jl(function(l, e, t, o, u) {
                    Ae(void 0 !== u, wl("m009")), Ae("function" == typeof u.get, wl("m010")), ne(Jl(l, ""), e, u.get, u.set, n, !1)
                }, function(n) {
                    var l = this.$mobx.values[n];
                    if (void 0 !== l) return l.get()
                }, function(n, l) {
                    this.$mobx.values[n].set(l)
                }, !1, !1)
            }
            var qt = Bt(ql.default),
                Ht = Bt(ql.structural),
                Yt = function(n, l, e) {
                    if ("string" == typeof l) return qt.apply(null, arguments);
                    Ae("function" == typeof n, wl("m011")), Ae(arguments.length < 3, wl("m012"));
                    var t = "object" == typeof l ? l : {};
                    return t.setter = "function" == typeof l ? l : t.setter, new Kl(n, t.context, t.equals ? t.equals : t.compareStructural || t.struct ? ql.structural : ql.default, t.name || n.name || "", t.setter)
                };
            Yt.struct = Ht, Yt.equals = Bt;
            var Kt = {
                    allowStateChanges: function(n, l) {
                        var e, t = Pl(n);
                        try {
                            e = l()
                        } finally {
                            Ml(t)
                        }
                        return e
                    },
                    deepEqual: Ll,
                    getAtom: at,
                    getDebugName: st,
                    getDependencyTree: ct,
                    getAdministration: dt,
                    getGlobalState: function() {
                        return tt
                    },
                    getObserverTree: function(n, l) {
                        return ft(at(n, l))
                    },
                    interceptReads: function(n, l, e) {
                        var t;
                        if (je(n) || $l(n) || Ol(n)) t = dt(n);
                        else {
                            if (!re(n)) return Te("Expected observable map, object or array as first array");
                            if ("string" != typeof l) return Te("InterceptReads can only be used with a specific property, not with an object in general");
                            t = dt(n, l)
                        }
                        return void 0 !== t.dehancer ? Te("An intercept reader was already established") : (t.dehancer = "function" == typeof l ? l : e, function() {
                            t.dehancer = void 0
                        })
                    },
                    isComputingDerivation: Et,
                    isSpyEnabled: Xn,
                    onReactionError: function(n) {
                        return tt.globalReactionErrorHandlers.push(n),
                            function() {
                                var l = tt.globalReactionErrorHandlers.indexOf(n);
                                l >= 0 && tt.globalReactionErrorHandlers.splice(l, 1)
                            }
                    },
                    reserveArrayBuffer: bl,
                    resetGlobalState: function() {
                        tt.resetId++;
                        var n = new et;
                        for (var l in n) - 1 === lt.indexOf(l) && (tt[l] = n[l]);
                        tt.allowStateChanges = !tt.strictMode
                    },
                    isolateGlobalState: function() {
                        ut = !0, Ie().__mobxInstanceCount--
                    },
                    shareGlobalState: function() {
                        Re("Using `shareGlobalState` is not recommended, use peer dependencies instead. See https://github.com/mobxjs/mobx/issues/1082 for details."), ot = !0;
                        var n = Ie(),
                            l = tt;
                        if (n.__mobservableTrackingStack || n.__mobservableViewStack) throw new Error("[mobx] An incompatible version of mobservable is already loaded.");
                        if (n.__mobxGlobal && n.__mobxGlobal.version !== l.version) throw new Error("[mobx] An incompatible version of mobx is already loaded.");
                        n.__mobxGlobal ? tt = n.__mobxGlobal : n.__mobxGlobal = l
                    },
                    spyReport: nl,
                    spyReportEnd: tl,
                    spyReportStart: ll,
                    setReactionScheduler: function(n) {
                        var l = zt;
                        zt = function(e) {
                            return n(function() {
                                return l(e)
                            })
                        }
                    }
                },
                Wt = {
                    Reaction: Rt,
                    untracked: kt,
                    Atom: qn,
                    BaseAtom: Bn,
                    useStrict: function(n) {
                        Ae(null === tt.trackingDerivation, wl("m028")), tt.strictMode = n, tt.allowStateChanges = !n
                    },
                    isStrictModeEnabled: function() {
                        return tt.strictMode
                    },
                    spy: ol,
                    comparer: ql,
                    asReference: function(n) {
                        return Re("asReference is deprecated, use observable.ref instead"), be.ref(n)
                    },
                    asFlat: function(n) {
                        return Re("asFlat is deprecated, use observable.shallow instead"), be.shallow(n)
                    },
                    asStructure: function(n) {
                        return Re("asStructure is deprecated. Use observable.struct, computed.struct or reaction options instead."), be.struct(n)
                    },
                    asMap: function(n) {
                        return Re("asMap is deprecated, use observable.map or observable.shallowMap instead"), be.map(n || {})
                    },
                    isModifierDescriptor: $e,
                    isObservableObject: re,
                    isBoxedObservable: Ol,
                    isObservableArray: $l,
                    ObservableMap: Me,
                    isObservableMap: je,
                    map: function(n) {
                        return Re("`mobx.map` is deprecated, use `new ObservableMap` or `mobx.observable.map` instead"), be.map(n)
                    },
                    transaction: Ee,
                    observable: be,
                    computed: Yt,
                    isObservable: ie,
                    isComputed: function(n, l) {
                        if (null === n || void 0 === n) return !1;
                        if (void 0 !== l) {
                            if (!1 === re(n)) return !1;
                            if (!n.$mobx.values[l]) return !1;
                            var e = at(n, l);
                            return Wl(e)
                        }
                        return Wl(n)
                    },
                    extendObservable: de,
                    extendShallowObservable: se,
                    observe: function(n, l, e, t) {
                        return "function" == typeof e ? function(n, e, t, o) {
                            return dt(n, l).observe(t, o)
                        }(n, 0, e, t) : function(n, l, e) {
                            return dt(n).observe(l, e)
                        }(n, l, e)
                    },
                    intercept: function(n, l, e) {
                        return "function" == typeof e ? function(n, e, t) {
                            return dt(n, l).intercept(t)
                        }(n, 0, e) : function(n, l) {
                            return dt(n).intercept(l)
                        }(n, l)
                    },
                    autorun: Hl,
                    autorunAsync: function(n, l, e, t) {
                        var o, u, r, i;
                        "string" == typeof n ? (o = n, u = l, r = e, i = t) : (o = n.name || "AutorunAsync@" + Ne(), u = n, r = l, i = e), Ae(!1 === Fl(u), wl("m006")), void 0 === r && (r = 1), i && (u = u.bind(i));
                        var a = !1,
                            d = new Rt(o, function() {
                                a || (a = !0, setTimeout(function() {
                                    a = !1, d.isDisposed || d.track(s)
                                }, r))
                            });

                        function s() {
                            u(d)
                        }
                        return d.schedule(), d.getDisposer()
                    },
                    when: function(n, l, e, t) {
                        var o, u, r, i;
                        return "string" == typeof n ? (o = n, u = l, r = e, i = t) : (o = "When@" + Ne(), u = n, r = l, i = e), Hl(o, function(n) {
                            if (u.call(i)) {
                                n.dispose();
                                var l = It();
                                r.call(i), Nt(l)
                            }
                        })
                    },
                    reaction: Yl,
                    action: Dl,
                    isAction: Fl,
                    runInAction: function(n, l, e) {
                        var t = "string" == typeof n ? n : n.name || "<unnamed action>",
                            o = "function" == typeof n ? n : l,
                            u = "function" == typeof n ? l : e;
                        return Ae("function" == typeof o, wl("m002")), Ae(0 === o.length, wl("m003")), Ae("string" == typeof t && t.length > 0, "actions should have valid names, got: '" + t + "'"), El(t, o, u, void 0)
                    },
                    expr: function(n, l) {
                        return Et() || console.warn(wl("m013")), Yt(n, {
                            context: l
                        }).get()
                    },
                    toJS: function n(l, e, t) {
                        function o(n) {
                            return e && t.push([l, n]), n
                        }
                        if (void 0 === e && (e = !0), void 0 === t && (t = []), ie(l)) {
                            if (e && null === t && (t = []), e && null !== l && "object" == typeof l)
                                for (var u = 0, r = t.length; u < r; u++)
                                    if (t[u][0] === l) return t[u][1];
                            if ($l(l)) {
                                var i = o([]),
                                    a = l.map(function(l) {
                                        return n(l, e, t)
                                    });
                                for (i.length = a.length, u = 0, r = a.length; u < r; u++) i[u] = a[u];
                                return i
                            }
                            if (re(l)) {
                                for (var d in i = o({}), l) i[d] = n(l[d], e, t);
                                return i
                            }
                            if (je(l)) {
                                var s = o({});
                                return l.forEach(function(l, o) {
                                    return s[o] = n(l, e, t)
                                }), s
                            }
                            if (Ol(l)) return n(l.get(), e, t)
                        }
                        return l
                    },
                    createTransformer: function(n, l) {
                        Ae("function" == typeof n && n.length < 2, "createTransformer expects a function that accepts one argument");
                        var e = {},
                            t = tt.resetId,
                            o = function(t) {
                                function o(l, e) {
                                    var o = t.call(this, function() {
                                        return n(e)
                                    }, void 0, ql.default, "Transformer-" + n.name + "-" + l, void 0) || this;
                                    return o.sourceIdentifier = l, o.sourceObject = e, o
                                }
                                return Un(o, t), o.prototype.onBecomeUnobserved = function() {
                                    var n = this.value;
                                    t.prototype.onBecomeUnobserved.call(this), delete e[this.sourceIdentifier], l && l(n, this.sourceObject)
                                }, o
                            }(Kl);
                        return function(n) {
                            t !== tt.resetId && (e = {}, t = tt.resetId);
                            var l = function(n) {
                                    if ("string" == typeof n || "number" == typeof n) return n;
                                    if (null === n || "object" != typeof n) throw new Error("[mobx] transform expected some kind of object or primitive value, got: " + n);
                                    var l = n.$transformId;
                                    return void 0 === l && Ye(n, "$transformId", l = Ne()), l
                                }(n),
                                u = e[l];
                            return u ? u.get() : (u = e[l] = new o(l, n)).get()
                        }
                    },
                    whyRun: function(n, l) {
                        return Re("`whyRun` is deprecated in favor of `trace`"), (n = Dt(arguments)) ? Wl(n) || Ut(n) ? At(n.whyRun()) : Te(wl("m025")) : At(wl("m024"))
                    },
                    isArrayLike: function(n) {
                        return Array.isArray(n) || $l(n)
                    },
                    extras: Kt
                },
                Zt = !1,
                Jt = function(n) {
                    var l = Wt[n];
                    Object.defineProperty(Wt, n, {
                        get: function() {
                            return Zt || (Zt = !0, console.warn("Using default export (`import mobx from 'mobx'`) is deprecated and won\u2019t work in mobx@4.0.0\nUse `import * as mobx from 'mobx'` instead")), l
                        }
                    })
                };
            for (var Qt in Wt) Jt(Qt);
            "object" == typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ && __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
                spy: ol,
                extras: Kt
            });
            var Xt = function() {
                    if ("undefined" == typeof localStorage || "undefined" == typeof console || "undefined" == typeof window) return function() {};
                    if (!localStorage || !console || !window) return function() {};
                    var n = "background: #222; color: #bada55";

                    function l() {
                        return localStorage["mobx-angular-debug"]
                    }
                    window.mobxAngularDebug = function(l) {
                        l ? (console.log("%c MobX will now log everything to the console", n), console.log("%c Right-click any element to see its dependency tree", n), localStorage["mobx-angular-debug"] = !0) : delete localStorage["mobx-angular-debug"]
                    }, ol(function(n) {
                        return l() && function(n, l) {
                            !1 === e && "undefined" != typeof navigator && -1 === navigator.userAgent.indexOf("Chrome") && (console.warn("The output of the MobX logger is optimized for Chrome"), e = !0);
                            var u, p = !0 === n.spyReportStart,
                                v = !0 === n.spyReportEnd;
                            if (0 === t ? (u = !0, p && !u && (o = !0)) : v && o && 1 === t ? (u = !1, o = !1) : u = !0 !== o, u && v) a(n.time);
                            else if (u) {
                                var b = p ? i : d;
                                switch (n.type) {
                                    case "action":
                                        b("%caction '%s' %s", "color:dodgerblue", n.name, f("(", m(n.target))), d(n.arguments), c();
                                        break;
                                    case "transaction":
                                        b("%ctransaction '%s' %s", "color:gray", n.name, f("(", m(n.target)));
                                        break;
                                    case "scheduled-reaction":
                                        b("%cscheduled async reaction '%s'", "color:#10a210", h(n.object));
                                        break;
                                    case "reaction":
                                        b("%creaction '%s'", "color:#10a210", h(n.object)), c();
                                        break;
                                    case "compute":
                                        i("%ccomputed '%s' %s", "color:#10a210", h(n.object), f("(", m(n.target))), a();
                                        break;
                                    case "error":
                                        b("%cerror: %s", "color:tomato", n.message), c(),
                                            function() {
                                                for (var n = 0, l = r; n < l; n++) a()
                                            }();
                                        break;
                                    case "update":
                                        $l(n.object) ? b("updated '%s[%s]': %s (was: %s)", h(n.object), n.index, g(n.newValue), g(n.oldValue)) : re(n.object) ? b("updated '%s.%s': %s (was: %s)", h(n.object), n.name, g(n.newValue), g(n.oldValue)) : b("updated '%s': %s (was: %s)", h(n.object), n.name, g(n.newValue), g(n.oldValue)), s({
                                            newValue: n.newValue,
                                            oldValue: n.oldValue
                                        }), c();
                                        break;
                                    case "splice":
                                        b("spliced '%s': index %d, added %d, removed %d", h(n.object), n.index, n.addedCount, n.removedCount), s({
                                            added: n.added,
                                            removed: n.removed
                                        }), c();
                                        break;
                                    case "add":
                                        b("set '%s.%s': %s", h(n.object), n.name, g(n.newValue)), s({
                                            newValue: n.newValue
                                        }), c();
                                        break;
                                    case "delete":
                                        b("removed '%s.%s' (was %s)", h(n.object), n.name, g(n.oldValue)), s({
                                            oldValue: n.oldValue
                                        }), c();
                                        break;
                                    case "create":
                                        b("set '%s': %s", h(n.object), g(n.newValue)), s({
                                            newValue: n.newValue
                                        }), c();
                                        break;
                                    default:
                                        b(n.type), s(n)
                                }
                            }
                            p && t++, v && t--
                        }(n)
                    });
                    var e = !1,
                        t = 0,
                        o = !1,
                        u = !1,
                        r = 0;

                    function i() {
                        for (var n = [], l = 0; l < arguments.length; l++) n[l] = arguments[l];
                        u ? console.groupCollapsed.apply(console, n) : console.log.apply(console, n), r++
                    }

                    function a(n) {
                        r--, "number" == typeof n && d("%ctotal time: %sms", "color:gray", n), u && console.groupEnd()
                    }

                    function d() {
                        for (var n = [], l = 0; l < arguments.length; l++) n[l] = arguments[l];
                        console.log.apply(console, n)
                    }

                    function s() {
                        for (var n = [], l = 0; l < arguments.length; l++) n[l] = arguments[l];
                        console.dir.apply(console, n)
                    }

                    function c() {
                        console.trace && console.trace("stack")
                    }
                    var p = {
                        '"': '"',
                        "'": "'",
                        "(": ")",
                        "[": "]",
                        "<": "]",
                        "#": ""
                    };

                    function f(n, l) {
                        return l ? (n || "") + l + (p[n] || "") : ""
                    }

                    function h(n) {
                        return Kt.getDebugName(n)
                    }

                    function g(n) {
                        return function(n) {
                            return null === n || void 0 === n || "string" == typeof n || "number" == typeof n || "boolean" == typeof n
                        }(n) ? "string" == typeof n && n.length > 100 ? n.substr(0, 97) + "..." : n : f("(", m(n))
                    }

                    function m(n) {
                        if (null === n || void 0 === n) return "";
                        if (n && "object" == typeof n) {
                            if (n && n.$mobx) return n.$mobx.name;
                            if (n.constructor) return n.constructor.name || "object"
                        }
                        return typeof n
                    }
                    return function(n, e, t) {
                        e.listen(n.rootNodes[0], "contextmenu", function() {
                            l() && console.log(Kt.getDependencyTree(t))
                        })
                    }
                }(),
                no = function() {
                    function n(n, l, e) {
                        this.templateRef = n, this.viewContainer = l, this.renderer = e, this.templateBindings = {}
                    }
                    return n.prototype.ngOnInit = function() {
                        this.view = this.viewContainer.createEmbeddedView(this.templateRef), this.dispose && this.dispose(), this.shouldDetach() && this.view.detach(), this.autoDetect(this.view), Xt(this.view, this.renderer, this.dispose)
                    }, n.prototype.shouldDetach = function() {
                        return this.mobxAutorun && this.mobxAutorun.detach
                    }, n.prototype.autoDetect = function(n) {
                        this.dispose = Hl(n._view.component ? n._view.component.constructor.name + ".detectChanges()" : n._view.parentView.context.constructor.name + ".detectChanges()", function() {
                            return n.detectChanges()
                        })
                    }, n.prototype.ngOnDestroy = function() {
                        this.dispose && this.dispose()
                    }, n
                }(),
                lo = function() {},
                eo = t["\u0275crt"]({
                    encapsulation: 2,
                    styles: [],
                    data: {}
                });

            function to(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 0, "input", [
                    ["class", "tree-node-checkbox"],
                    ["type", "checkbox"]
                ], [
                    [8, "checked", 0],
                    [8, "indeterminate", 0]
                ], [
                    [null, "click"]
                ], function(n, l, e) {
                    var t = !0;
                    return "click" === l && (t = !1 !== n.component.node.mouseAction("checkboxClick", e) && t), t
                }, null, null))], null, function(n, l) {
                    var e = l.component;
                    n(l, 1, 0, e.node.isSelected, e.node.isPartiallySelected)
                })
            }

            function oo(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275and"](16777216, null, null, 2, null, to)), t["\u0275did"](1, 212992, null, 0, no, [t.TemplateRef, t.ViewContainerRef, t.Renderer], {
                    mobxAutorun: [0, "mobxAutorun"]
                }, null), t["\u0275pod"](2, {
                    dontDetach: 0
                })], function(n, l) {
                    n(l, 1, 0, n(l, 2, 0, !0))
                }, null)
            }
            var uo = function() {},
                ro = t["\u0275crt"]({
                    encapsulation: 2,
                    styles: [],
                    data: {}
                });

            function io(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "span", [
                    ["class", "toggle-children-wrapper"]
                ], [
                    [2, "toggle-children-wrapper-expanded", null],
                    [2, "toggle-children-wrapper-collapsed", null]
                ], [
                    [null, "click"]
                ], function(n, l, e) {
                    var t = !0;
                    return "click" === l && (t = !1 !== n.component.node.mouseAction("expanderClick", e) && t), t
                }, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 0, "span", [
                    ["class", "toggle-children"]
                ], null, null, null, null, null))], null, function(n, l) {
                    var e = l.component;
                    n(l, 0, 0, e.node.isExpanded, e.node.isCollapsed)
                })
            }

            function ao(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 0, "span", [
                    ["class", "toggle-children-placeholder"]
                ], null, null, null, null, null))], null, null)
            }

            function so(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 4, null, null, null, null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, io)), t["\u0275did"](2, 16384, null, 0, m.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, ao)), t["\u0275did"](4, 16384, null, 0, m.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (n()(), t["\u0275and"](0, null, null, 0))], function(n, l) {
                    var e = l.component;
                    n(l, 2, 0, e.node.hasChildren), n(l, 4, 0, !e.node.hasChildren)
                }, null)
            }

            function co(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275and"](16777216, null, null, 2, null, so)), t["\u0275did"](1, 212992, null, 0, no, [t.TemplateRef, t.ViewContainerRef, t.Renderer], {
                    mobxAutorun: [0, "mobxAutorun"]
                }, null), t["\u0275pod"](2, {
                    dontDetach: 0
                })], function(n, l) {
                    n(l, 1, 0, n(l, 2, 0, !0))
                }, null)
            }
            var po = function() {
                    function n(n, l, e, t) {
                        this.el = n, this.renderer = l, this.treeDraggedElement = e, this.ngZone = t, this.dragEventHandler = this.onDrag.bind(this)
                    }
                    return n.prototype.ngAfterViewInit = function() {
                        var n = this,
                            l = this.el.nativeElement;
                        this.ngZone.runOutsideAngular(function() {
                            l.addEventListener("drag", n.dragEventHandler)
                        })
                    }, n.prototype.ngDoCheck = function() {
                        this.renderer.setElementAttribute(this.el.nativeElement, "draggable", this.treeDragEnabled ? "true" : "false")
                    }, n.prototype.ngOnDestroy = function() {
                        this.el.nativeElement.removeEventListener("drag", this.dragEventHandler)
                    }, n.prototype.onDragStart = function(n) {
                        n.dataTransfer.setData("text", n.target.id), this.treeDraggedElement.set(this.draggedElement), this.draggedElement.mouseAction && this.draggedElement.mouseAction("dragStart", n)
                    }, n.prototype.onDrag = function(n) {
                        this.draggedElement.mouseAction && this.draggedElement.mouseAction("drag", n)
                    }, n.prototype.onDragEnd = function() {
                        this.draggedElement.mouseAction && this.draggedElement.mouseAction("dragEnd"), this.treeDraggedElement.set(null)
                    }, n
                }(),
                fo = function() {},
                ho = t["\u0275crt"]({
                    encapsulation: 2,
                    styles: [],
                    data: {}
                });

            function go(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (n()(), t["\u0275ted"](1, null, ["", ""]))], null, function(n, l) {
                    n(l, 1, 0, l.component.node.displayField)
                })
            }

            function mo(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275and"](16777216, null, null, 1, null, go)), t["\u0275did"](1, 16384, null, 0, m.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (n()(), t["\u0275eld"](2, 16777216, null, null, 2, null, null, null, null, null, null, null)), t["\u0275did"](3, 540672, null, 0, m.NgTemplateOutlet, [t.ViewContainerRef], {
                    ngTemplateOutletContext: [0, "ngTemplateOutletContext"],
                    ngTemplateOutlet: [1, "ngTemplateOutlet"]
                }, null), t["\u0275pod"](4, {
                    $implicit: 0,
                    node: 1,
                    index: 2
                })], function(n, l) {
                    var e = l.component;
                    n(l, 1, 0, !e.template), n(l, 3, 0, n(l, 4, 0, e.node, e.node, e.index), e.template)
                }, null)
            }
            var vo = function() {},
                bo = t["\u0275crt"]({
                    encapsulation: 2,
                    styles: [],
                    data: {}
                });

            function yo(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "tree-node-checkbox", [], null, null, null, oo, eo)), t["\u0275did"](1, 49152, null, 0, lo, [], {
                    node: [0, "node"]
                }, null)], function(n, l) {
                    n(l, 1, 0, l.component.node)
                }, null)
            }

            function $o(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 9, "div", [
                    ["class", "node-wrapper"]
                ], [
                    [4, "padding-left", null]
                ], null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, yo)), t["\u0275did"](2, 16384, null, 0, m.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (n()(), t["\u0275eld"](3, 0, null, null, 1, "tree-node-expander", [], null, null, null, co, ro)), t["\u0275did"](4, 49152, null, 0, uo, [], {
                    node: [0, "node"]
                }, null), (n()(), t["\u0275eld"](5, 0, null, null, 4, "div", [
                    ["class", "node-content-wrapper"]
                ], [
                    [2, "node-content-wrapper-active", null],
                    [2, "node-content-wrapper-focused", null]
                ], [
                    [null, "click"],
                    [null, "dblclick"],
                    [null, "contextmenu"],
                    [null, "treeDrop"],
                    [null, "treeDropDragOver"],
                    [null, "treeDropDragLeave"],
                    [null, "treeDropDragEnter"],
                    [null, "drop"],
                    [null, "dragstart"],
                    [null, "dragend"]
                ], function(n, l, e) {
                    var o = !0,
                        u = n.component;
                    return "drop" === l && (o = !1 !== t["\u0275nov"](n, 6).onDrop(e) && o), "dragstart" === l && (o = !1 !== t["\u0275nov"](n, 7).onDragStart(e) && o), "dragend" === l && (o = !1 !== t["\u0275nov"](n, 7).onDragEnd() && o), "click" === l && (o = !1 !== u.node.mouseAction("click", e) && o), "dblclick" === l && (o = !1 !== u.node.mouseAction("dblClick", e) && o), "contextmenu" === l && (o = !1 !== u.node.mouseAction("contextMenu", e) && o), "treeDrop" === l && (o = !1 !== u.node.onDrop(e) && o), "treeDropDragOver" === l && (o = !1 !== u.node.mouseAction("dragOver", e) && o), "treeDropDragLeave" === l && (o = !1 !== u.node.mouseAction("dragLeave", e) && o), "treeDropDragEnter" === l && (o = !1 !== u.node.mouseAction("dragEnter", e) && o), o
                }, null, null)), t["\u0275did"](6, 4341760, null, 0, Fn, [t.ElementRef, t.Renderer, Rn, t.NgZone], {
                    treeAllowDrop: [0, "treeAllowDrop"]
                }, {
                    onDropCallback: "treeDrop",
                    onDragOverCallback: "treeDropDragOver",
                    onDragLeaveCallback: "treeDropDragLeave",
                    onDragEnterCallback: "treeDropDragEnter"
                }), t["\u0275did"](7, 4603904, null, 0, po, [t.ElementRef, t.Renderer, Rn, t.NgZone], {
                    draggedElement: [0, "draggedElement"],
                    treeDragEnabled: [1, "treeDragEnabled"]
                }, null), (n()(), t["\u0275eld"](8, 0, null, null, 1, "tree-node-content", [], null, null, null, mo, ho)), t["\u0275did"](9, 49152, null, 0, fo, [], {
                    node: [0, "node"],
                    index: [1, "index"],
                    template: [2, "template"]
                }, null)], function(n, l) {
                    var e = l.component;
                    n(l, 2, 0, e.node.options.useCheckbox), n(l, 4, 0, e.node), n(l, 6, 0, e.node.allowDrop), n(l, 7, 0, e.node, e.node.allowDrag()), n(l, 9, 0, e.node, e.index, e.templates.treeNodeTemplate)
                }, function(n, l) {
                    var e = l.component;
                    n(l, 0, 0, e.node.getNodePadding()), n(l, 5, 0, e.node.isActive, e.node.isFocused)
                })
            }

            function _o(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275and"](16777216, null, null, 1, null, $o)), t["\u0275did"](1, 16384, null, 0, m.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (n()(), t["\u0275eld"](2, 16777216, null, null, 2, null, null, null, null, null, null, null)), t["\u0275did"](3, 540672, null, 0, m.NgTemplateOutlet, [t.ViewContainerRef], {
                    ngTemplateOutletContext: [0, "ngTemplateOutletContext"],
                    ngTemplateOutlet: [1, "ngTemplateOutlet"]
                }, null), t["\u0275pod"](4, {
                    $implicit: 0,
                    node: 1,
                    index: 2,
                    templates: 3
                })], function(n, l) {
                    var e = l.component;
                    n(l, 1, 0, !e.templates.treeNodeWrapperTemplate), n(l, 3, 0, n(l, 4, 0, e.node, e.node, e.index, e.templates), e.templates.treeNodeWrapperTemplate)
                }, null)
            }
            Object.setPrototypeOf || Array, Object.setPrototypeOf || Array;
            var xo = function() {};

            function Oo() {
                for (var n = [], l = 0; l < arguments.length; l++) n[l] = arguments[l];
                return Dl.apply(void 0, n)
            }

            function Co() {
                for (var n = [], l = 0; l < arguments.length; l++) n[l] = arguments[l];
                return Yt.apply(void 0, n)
            }

            function wo() {
                for (var n = [], l = 0; l < arguments.length; l++) n[l] = arguments[l];
                return be.apply(void 0, n)
            }
            var So = function() {
                    function n() {
                        this._dispose = []
                    }
                    return Object.defineProperty(n.prototype, "nodes", {
                        get: function() {
                            return this._nodes
                        },
                        set: function(n) {
                            this.setNodes(n)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(n.prototype, "marginTop", {
                        get: function() {
                            var n = this.viewportNodes && this.viewportNodes.length && this.viewportNodes[0];
                            return (n ? n.position - n.parent.position - n.parent.getSelfHeight() : 0) + "px"
                        },
                        enumerable: !0,
                        configurable: !0
                    }), n.prototype.setNodes = function(n) {
                        this._nodes = n
                    }, n.prototype.ngOnInit = function() {
                        var n = this;
                        this.virtualScroll = this.treeModel.virtualScroll, this._dispose = [Yl(function() {
                            return n.virtualScroll.getViewportNodes(n.nodes).map(function(n) {
                                return n.index
                            })
                        }, function(l) {
                            n.viewportNodes = l.map(function(l) {
                                return n.nodes[l]
                            })
                        }, {
                            compareStructural: !0,
                            fireImmediately: !0
                        }), Yl(function() {
                            return n.nodes
                        }, function(l) {
                            n.viewportNodes = n.virtualScroll.getViewportNodes(l)
                        })]
                    }, n.prototype.ngOnDestroy = function() {
                        this._dispose.forEach(function(n) {
                            return n()
                        })
                    }, n.prototype.trackNode = function(n, l) {
                        return l.id
                    }, Object($.__decorate)([wo, Object($.__metadata)("design:type", Object)], n.prototype, "_nodes", void 0), Object($.__decorate)([wo, Object($.__metadata)("design:type", Array)], n.prototype, "viewportNodes", void 0), Object($.__decorate)([Co, Object($.__metadata)("design:type", String), Object($.__metadata)("design:paramtypes", [])], n.prototype, "marginTop", null), Object($.__decorate)([Oo, Object($.__metadata)("design:type", Function), Object($.__metadata)("design:paramtypes", [Object]), Object($.__metadata)("design:returntype", void 0)], n.prototype, "setNodes", null), n
                }(),
                Eo = function() {},
                Po = t["\u0275crt"]({
                    encapsulation: 2,
                    styles: [],
                    data: {}
                });

            function Mo(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["loading..."]))], null, null)
            }

            function jo(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275and"](16777216, null, null, 1, null, Mo)), t["\u0275did"](1, 16384, null, 0, m.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (n()(), t["\u0275eld"](2, 16777216, null, null, 2, null, null, null, null, null, null, null)), t["\u0275did"](3, 540672, null, 0, m.NgTemplateOutlet, [t.ViewContainerRef], {
                    ngTemplateOutletContext: [0, "ngTemplateOutletContext"],
                    ngTemplateOutlet: [1, "ngTemplateOutlet"]
                }, null), t["\u0275pod"](4, {
                    $implicit: 0
                })], function(n, l) {
                    var e = l.component;
                    n(l, 1, 0, !e.template), n(l, 3, 0, n(l, 4, 0, e.node), e.template)
                }, null)
            }
            var ko = function() {
                    function n(n, l, e) {
                        this.renderer = n, this.templateRef = l, this.viewContainerRef = e
                    }
                    return Object.defineProperty(n.prototype, "isOpen", {
                        set: function(n) {
                            n ? (this._show(), this.isEnabled && !1 === this._isOpen && this._animateOpen()) : this.isEnabled ? this._animateClose() : this._hide(), this._isOpen = !!n
                        },
                        enumerable: !0,
                        configurable: !0
                    }), n.prototype._show = function() {
                        this.innerElement || (this.innerElement = this.viewContainerRef.createEmbeddedView(this.templateRef).rootNodes[0])
                    }, n.prototype._hide = function() {
                        this.viewContainerRef.clear(), this.innerElement = null
                    }, n.prototype._animateOpen = function() {
                        var n = this,
                            l = this.animateSpeed,
                            e = this.animateAcceleration,
                            t = 0;
                        this.renderer.setElementStyle(this.innerElement, "max-height", "0"), setTimeout(function() {
                            var o = setInterval(function() {
                                if (!n._isOpen || !n.innerElement) return clearInterval(o);
                                var u = Math.round(t += l);
                                n.renderer.setElementStyle(n.innerElement, "max-height", u + "px");
                                var r = n.innerElement.getBoundingClientRect ? n.innerElement.getBoundingClientRect().height : 0;
                                l *= e, e *= 1.005, r < u && (n.renderer.setElementStyle(n.innerElement, "max-height", null), clearInterval(o))
                            }, 17)
                        })
                    }, n.prototype._animateClose = function() {
                        var n = this;
                        if (this.innerElement) var l = this.animateSpeed,
                            e = this.animateAcceleration,
                            t = this.innerElement.getBoundingClientRect().height,
                            o = setInterval(function() {
                                if (n._isOpen || !n.innerElement) return clearInterval(o);
                                n.renderer.setElementStyle(n.innerElement, "max-height", (t -= l) + "px"), l *= e, e *= 1.005, t <= 0 && (n.viewContainerRef.clear(), n.innerElement = null, clearInterval(o))
                            }, 17)
                    }, n
                }(),
                Io = function() {},
                No = t["\u0275crt"]({
                    encapsulation: 2,
                    styles: [],
                    data: {}
                });

            function To(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "tree-node-collection", [], null, null, null, Ko, qo)), t["\u0275did"](1, 245760, null, 0, So, [], {
                    nodes: [0, "nodes"],
                    treeModel: [1, "treeModel"],
                    templates: [2, "templates"]
                }, null)], function(n, l) {
                    var e = l.component;
                    n(l, 1, 0, e.node.children, e.node.treeModel, e.templates)
                }, null)
            }

            function Ao(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "tree-loading-component", [
                    ["class", "tree-node-loading"]
                ], [
                    [4, "padding-left", null]
                ], null, null, jo, Po)), t["\u0275did"](1, 49152, null, 0, Eo, [], {
                    template: [0, "template"],
                    node: [1, "node"]
                }, null)], function(n, l) {
                    var e = l.component;
                    n(l, 1, 0, e.templates.loadingTemplate, e.node)
                }, function(n, l) {
                    n(l, 0, 0, l.component.node.getNodePadding())
                })
            }

            function Do(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 4, "div", [], [
                    [2, "tree-children", null],
                    [2, "tree-children-no-padding", null]
                ], null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, To)), t["\u0275did"](2, 16384, null, 0, m.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, Ao)), t["\u0275did"](4, 16384, null, 0, m.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(n, l) {
                    var e = l.component;
                    n(l, 2, 0, e.node.children), n(l, 4, 0, !e.node.children)
                }, function(n, l) {
                    n(l, 0, 0, !0, l.component.node.options.levelPadding)
                })
            }

            function Ro(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, Do)), t["\u0275did"](2, 16384, null, 0, ko, [t.Renderer, t.TemplateRef, t.ViewContainerRef], {
                    animateSpeed: [0, "animateSpeed"],
                    animateAcceleration: [1, "animateAcceleration"],
                    isEnabled: [2, "isEnabled"],
                    isOpen: [3, "isOpen"]
                }, null), (n()(), t["\u0275and"](0, null, null, 0))], function(n, l) {
                    var e = l.component;
                    n(l, 2, 0, e.node.options.animateSpeed, e.node.options.animateAcceleration, e.node.options.animateExpand, e.node.isExpanded)
                }, null)
            }

            function Fo(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275and"](16777216, null, null, 2, null, Ro)), t["\u0275did"](1, 212992, null, 0, no, [t.TemplateRef, t.ViewContainerRef, t.Renderer], {
                    mobxAutorun: [0, "mobxAutorun"]
                }, null), t["\u0275pod"](2, {
                    dontDetach: 0
                })], function(n, l) {
                    n(l, 1, 0, n(l, 2, 0, !0))
                }, null)
            }
            var Vo = function() {},
                zo = t["\u0275crt"]({
                    encapsulation: 2,
                    styles: [],
                    data: {}
                });

            function Lo(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "tree-node-drop-slot", [], null, null, null, Ln, zn)), t["\u0275did"](1, 49152, null, 0, Vn, [], {
                    node: [0, "node"],
                    dropIndex: [1, "dropIndex"]
                }, null)], function(n, l) {
                    var e = l.component;
                    n(l, 1, 0, e.node.parent, e.node.index)
                }, null)
            }

            function Go(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 8, "div", [], [
                    [8, "className", 0],
                    [2, "tree-node", null],
                    [2, "tree-node-expanded", null],
                    [2, "tree-node-collapsed", null],
                    [2, "tree-node-leaf", null],
                    [2, "tree-node-active", null],
                    [2, "tree-node-focused", null]
                ], null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, Lo)), t["\u0275did"](2, 16384, null, 0, m.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (n()(), t["\u0275eld"](3, 0, null, null, 1, "tree-node-wrapper", [], null, null, null, _o, bo)), t["\u0275did"](4, 49152, null, 0, vo, [], {
                    node: [0, "node"],
                    index: [1, "index"],
                    templates: [2, "templates"]
                }, null), (n()(), t["\u0275eld"](5, 0, null, null, 1, "tree-node-children", [], null, null, null, Fo, No)), t["\u0275did"](6, 49152, null, 0, Io, [], {
                    node: [0, "node"],
                    templates: [1, "templates"]
                }, null), (n()(), t["\u0275eld"](7, 0, null, null, 1, "tree-node-drop-slot", [], null, null, null, Ln, zn)), t["\u0275did"](8, 49152, null, 0, Vn, [], {
                    node: [0, "node"],
                    dropIndex: [1, "dropIndex"]
                }, null)], function(n, l) {
                    var e = l.component;
                    n(l, 2, 0, 0 === e.index), n(l, 4, 0, e.node, e.index, e.templates), n(l, 6, 0, e.node, e.templates), n(l, 8, 0, e.node.parent, e.node.index + 1)
                }, function(n, l) {
                    var e = l.component;
                    n(l, 0, 0, e.node.getClass(), !0, e.node.isExpanded && e.node.hasChildren, e.node.isCollapsed && e.node.hasChildren, e.node.isLeaf, e.node.isActive, e.node.isFocused)
                })
            }

            function Uo(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 5, null, null, null, null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, Go)), t["\u0275did"](2, 16384, null, 0, m.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (n()(), t["\u0275eld"](3, 16777216, null, null, 2, null, null, null, null, null, null, null)), t["\u0275did"](4, 540672, null, 0, m.NgTemplateOutlet, [t.ViewContainerRef], {
                    ngTemplateOutletContext: [0, "ngTemplateOutletContext"],
                    ngTemplateOutlet: [1, "ngTemplateOutlet"]
                }, null), t["\u0275pod"](5, {
                    $implicit: 0,
                    node: 1,
                    index: 2,
                    templates: 3
                }), (n()(), t["\u0275and"](0, null, null, 0))], function(n, l) {
                    var e = l.component;
                    n(l, 2, 0, !e.templates.treeNodeFullTemplate), n(l, 4, 0, n(l, 5, 0, e.node, e.node, e.index, e.templates), e.templates.treeNodeFullTemplate)
                }, null)
            }

            function Bo(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275and"](16777216, null, null, 2, null, Uo)), t["\u0275did"](1, 212992, null, 0, no, [t.TemplateRef, t.ViewContainerRef, t.Renderer], {
                    mobxAutorun: [0, "mobxAutorun"]
                }, null), t["\u0275pod"](2, {
                    dontDetach: 0
                })], function(n, l) {
                    n(l, 1, 0, n(l, 2, 0, !0))
                }, null)
            }
            var qo = t["\u0275crt"]({
                encapsulation: 2,
                styles: [],
                data: {}
            });

            function Ho(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "tree-node", [], null, null, null, Bo, zo)), t["\u0275did"](1, 49152, null, 0, Vo, [], {
                    node: [0, "node"],
                    index: [1, "index"],
                    templates: [2, "templates"]
                }, null)], function(n, l) {
                    n(l, 1, 0, l.context.$implicit, l.context.index, l.component.templates)
                }, null)
            }

            function Yo(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 3, null, null, null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 2, "div", [], [
                    [4, "margin-top", null]
                ], null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, Ho)), t["\u0275did"](3, 802816, null, 0, m.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                    ngForOf: [0, "ngForOf"],
                    ngForTrackBy: [1, "ngForTrackBy"]
                }, null)], function(n, l) {
                    var e = l.component;
                    n(l, 3, 0, e.viewportNodes, e.trackNode)
                }, function(n, l) {
                    n(l, 1, 0, l.component.marginTop)
                })
            }

            function Ko(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275and"](16777216, null, null, 2, null, Yo)), t["\u0275did"](1, 212992, null, 0, no, [t.TemplateRef, t.ViewContainerRef, t.Renderer], {
                    mobxAutorun: [0, "mobxAutorun"]
                }, null), t["\u0275pod"](2, {
                    dontDetach: 0
                })], function(n, l) {
                    n(l, 1, 0, n(l, 2, 0, !0))
                }, null)
            }
            var Wo, Zo = {
                    toggleExpanded: "toggleExpanded",
                    activate: "activate",
                    deactivate: "deactivate",
                    nodeActivate: "nodeActivate",
                    nodeDeactivate: "nodeDeactivate",
                    select: "select",
                    deselect: "deselect",
                    focus: "focus",
                    blur: "blur",
                    initialized: "initialized",
                    updateData: "updateData",
                    moveNode: "moveNode",
                    copyNode: "copyNode",
                    event: "event",
                    loadNodeChildren: "loadNodeChildren",
                    changeFilter: "changeFilter",
                    stateChange: "stateChange"
                },
                Jo = e("afOK"),
                Qo = e.n(Jo),
                Xo = e("RBan"),
                nu = e.n(Xo),
                lu = e("MJIl"),
                eu = e.n(lu),
                tu = e("Jlc5"),
                ou = e.n(tu),
                uu = function() {
                    function n(n, l, e, t) {
                        var o = this;
                        this.data = n, this.parent = l, this.treeModel = e, this.position = 0, this.allowDrop = function(n, l) {
                            return o.options.allowDrop(n, {
                                parent: o,
                                index: 0
                            }, l)
                        }, void 0 !== this.id && null !== this.id || (this.id = Math.floor(1e13 * Math.random())), this.index = t, this.getField("children") && this._initChildren(), this.autoLoadChildren()
                    }
                    return Object.defineProperty(n.prototype, "isHidden", {
                        get: function() {
                            return this.treeModel.isHidden(this)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(n.prototype, "isExpanded", {
                        get: function() {
                            return this.treeModel.isExpanded(this)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(n.prototype, "isActive", {
                        get: function() {
                            return this.treeModel.isActive(this)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(n.prototype, "isFocused", {
                        get: function() {
                            return this.treeModel.isNodeFocused(this)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(n.prototype, "isSelected", {
                        get: function() {
                            return this.treeModel.options.useTriState ? this.isLeaf ? this.treeModel.isSelected(this) : eu()(this.children, function(n) {
                                return n.isSelected
                            }) : this.treeModel.isSelected(this)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(n.prototype, "isAllSelected", {
                        get: function() {
                            return this.treeModel.options.useTriState ? this.isLeaf ? this.isSelected : ou()(this.children, function(n) {
                                return n.isAllSelected
                            }) : this.isSelected
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(n.prototype, "isPartiallySelected", {
                        get: function() {
                            return this.isSelected && !this.isAllSelected
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(n.prototype, "level", {
                        get: function() {
                            return this.parent ? this.parent.level + 1 : 0
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(n.prototype, "path", {
                        get: function() {
                            return this.parent ? this.parent.path.concat([this.id]) : []
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(n.prototype, "elementRef", {
                        get: function() {
                            throw "Element Ref is no longer supported since introducing virtual scroll\n\n      You may use a template to obtain a reference to the element"
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(n.prototype, "originalNode", {
                        get: function() {
                            return this._originalNode
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(n.prototype, "hasChildren", {
                        get: function() {
                            return !!(this.getField("hasChildren") || this.children && this.children.length > 0)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(n.prototype, "isCollapsed", {
                        get: function() {
                            return !this.isExpanded
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(n.prototype, "isLeaf", {
                        get: function() {
                            return !this.hasChildren
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(n.prototype, "isRoot", {
                        get: function() {
                            return this.parent.data.virtual
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(n.prototype, "realParent", {
                        get: function() {
                            return this.isRoot ? null : this.parent
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(n.prototype, "options", {
                        get: function() {
                            return this.treeModel.options
                        },
                        enumerable: !0,
                        configurable: !0
                    }), n.prototype.fireEvent = function(n) {
                        this.treeModel.fireEvent(n)
                    }, Object.defineProperty(n.prototype, "displayField", {
                        get: function() {
                            return this.getField("display")
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(n.prototype, "id", {
                        get: function() {
                            return this.getField("id")
                        },
                        set: function(n) {
                            this.setField("id", n)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), n.prototype.getField = function(n) {
                        return this.data[this.options[n + "Field"]]
                    }, n.prototype.setField = function(n, l) {
                        this.data[this.options[n + "Field"]] = l
                    }, n.prototype._findAdjacentSibling = function(n, l) {
                        void 0 === l && (l = !1);
                        var e = this._getParentsChildren(l),
                            t = e.indexOf(this);
                        return e.length > t + n ? e[t + n] : null
                    }, n.prototype.findNextSibling = function(n) {
                        return void 0 === n && (n = !1), this._findAdjacentSibling(1, n)
                    }, n.prototype.findPreviousSibling = function(n) {
                        return void 0 === n && (n = !1), this._findAdjacentSibling(-1, n)
                    }, n.prototype.getVisibleChildren = function() {
                        return this.visibleChildren
                    }, Object.defineProperty(n.prototype, "visibleChildren", {
                        get: function() {
                            return (this.children || []).filter(function(n) {
                                return !n.isHidden
                            })
                        },
                        enumerable: !0,
                        configurable: !0
                    }), n.prototype.getFirstChild = function(n) {
                        void 0 === n && (n = !1);
                        var l = n ? this.visibleChildren : this.children;
                        return Qo()(l || [])
                    }, n.prototype.getLastChild = function(n) {
                        void 0 === n && (n = !1);
                        var l = n ? this.visibleChildren : this.children;
                        return nu()(l || [])
                    }, n.prototype.findNextNode = function(n, l) {
                        return void 0 === n && (n = !0), void 0 === l && (l = !1), n && this.isExpanded && this.getFirstChild(l) || this.findNextSibling(l) || this.parent && this.parent.findNextNode(!1, l)
                    }, n.prototype.findPreviousNode = function(n) {
                        void 0 === n && (n = !1);
                        var l = this.findPreviousSibling(n);
                        return l ? l._getLastOpenDescendant(n) : this.realParent
                    }, n.prototype._getLastOpenDescendant = function(n) {
                        void 0 === n && (n = !1);
                        var l = this.getLastChild(n);
                        return this.isCollapsed || !l ? this : l._getLastOpenDescendant(n)
                    }, n.prototype._getParentsChildren = function(n) {
                        return void 0 === n && (n = !1), this.parent && (n ? this.parent.getVisibleChildren() : this.parent.children) || []
                    }, n.prototype.getIndexInParent = function(n) {
                        return void 0 === n && (n = !1), this._getParentsChildren(n).indexOf(this)
                    }, n.prototype.isDescendantOf = function(n) {
                        return this === n || this.parent && this.parent.isDescendantOf(n)
                    }, n.prototype.getNodePadding = function() {
                        return this.options.levelPadding * (this.level - 1) + "px"
                    }, n.prototype.getClass = function() {
                        return [this.options.nodeClass(this), "tree-node-level-" + this.level].join(" ")
                    }, n.prototype.onDrop = function(n) {
                        this.mouseAction("drop", n.event, {
                            from: n.element,
                            to: {
                                parent: this,
                                index: 0,
                                dropOnNode: !0
                            }
                        })
                    }, n.prototype.allowDrag = function() {
                        return this.options.allowDrag(this)
                    }, n.prototype.loadNodeChildren = function() {
                        var n = this;
                        return this.options.getChildren ? Promise.resolve(this.options.getChildren(this)).then(function(l) {
                            l && (n.setField("children", l), n._initChildren(), n.children.forEach(function(n) {
                                n.getField("isExpanded") && n.hasChildren && n.expand()
                            }))
                        }).then(function() {
                            n.fireEvent({
                                eventName: Zo.loadNodeChildren,
                                node: n
                            })
                        }) : Promise.resolve()
                    }, n.prototype.expand = function() {
                        return this.isExpanded || this.toggleExpanded(), this
                    }, n.prototype.collapse = function() {
                        return this.isExpanded && this.toggleExpanded(), this
                    }, n.prototype.doForAll = function(n) {
                        var l = this;
                        Promise.resolve(n(this)).then(function() {
                            l.children && l.children.forEach(function(l) {
                                return l.doForAll(n)
                            })
                        })
                    }, n.prototype.expandAll = function() {
                        this.doForAll(function(n) {
                            return n.expand()
                        })
                    }, n.prototype.collapseAll = function() {
                        this.doForAll(function(n) {
                            return n.collapse()
                        })
                    }, n.prototype.ensureVisible = function() {
                        return this.realParent && (this.realParent.expand(), this.realParent.ensureVisible()), this
                    }, n.prototype.toggleExpanded = function() {
                        return this.setIsExpanded(!this.isExpanded), this
                    }, n.prototype.setIsExpanded = function(n) {
                        return this.hasChildren && this.treeModel.setExpandedNode(this, n), this
                    }, n.prototype.autoLoadChildren = function() {
                        var n = this;
                        this.handler = Yl(function() {
                            return n.isExpanded
                        }, function(l) {
                            !n.children && n.hasChildren && l && n.loadNodeChildren()
                        }, {
                            fireImmediately: !0
                        })
                    }, n.prototype.dispose = function() {
                        this.children && this.children.forEach(function(n) {
                            return n.dispose()
                        }), this.handler && this.handler()
                    }, n.prototype.setIsActive = function(n, l) {
                        return void 0 === l && (l = !1), this.treeModel.setActiveNode(this, n, l), n && this.focus(this.options.scrollOnActivate), this
                    }, n.prototype.setIsSelected = function(n) {
                        return this.treeModel.options.useTriState ? this.isLeaf ? this.treeModel.setSelectedNode(this, n) : this.visibleChildren.forEach(function(l) {
                            return l.setIsSelected(n)
                        }) : this.treeModel.setSelectedNode(this, n), this
                    }, n.prototype.toggleSelected = function() {
                        return this.setIsSelected(!this.isSelected), this
                    }, n.prototype.toggleActivated = function(n) {
                        return void 0 === n && (n = !1), this.setIsActive(!this.isActive, n), this
                    }, n.prototype.setActiveAndVisible = function(n) {
                        return void 0 === n && (n = !1), this.setIsActive(!0, n).ensureVisible(), setTimeout(this.scrollIntoView.bind(this)), this
                    }, n.prototype.scrollIntoView = function(n) {
                        void 0 === n && (n = !1), this.treeModel.virtualScroll.scrollIntoView(this, n)
                    }, n.prototype.focus = function(n) {
                        void 0 === n && (n = !0);
                        var l = this.treeModel.getFocusedNode();
                        return this.treeModel.setFocusedNode(this), n && this.scrollIntoView(), l && this.fireEvent({
                            eventName: Zo.blur,
                            node: l
                        }), this.fireEvent({
                            eventName: Zo.focus,
                            node: this
                        }), this
                    }, n.prototype.blur = function() {
                        var n = this.treeModel.getFocusedNode();
                        return this.treeModel.setFocusedNode(null), n && this.fireEvent({
                            eventName: Zo.blur,
                            node: this
                        }), this
                    }, n.prototype.setIsHidden = function(n) {
                        this.treeModel.setIsHidden(this, n)
                    }, n.prototype.hide = function() {
                        this.setIsHidden(!0)
                    }, n.prototype.show = function() {
                        this.setIsHidden(!1)
                    }, n.prototype.mouseAction = function(n, l, e) {
                        void 0 === e && (e = null), this.treeModel.setFocus(!0);
                        var t = this.options.actionMapping.mouse[n];
                        t && t(this.treeModel, this, l, e)
                    }, n.prototype.getSelfHeight = function() {
                        return this.options.nodeHeight(this)
                    }, n.prototype._initChildren = function() {
                        var l = this;
                        this.children = this.getField("children").map(function(e, t) {
                            return new n(e, l, l.treeModel, t)
                        })
                    }, Object($.__decorate)([Yt, Object($.__metadata)("design:type", Object), Object($.__metadata)("design:paramtypes", [])], n.prototype, "isHidden", null), Object($.__decorate)([Yt, Object($.__metadata)("design:type", Object), Object($.__metadata)("design:paramtypes", [])], n.prototype, "isExpanded", null), Object($.__decorate)([Yt, Object($.__metadata)("design:type", Object), Object($.__metadata)("design:paramtypes", [])], n.prototype, "isActive", null), Object($.__decorate)([Yt, Object($.__metadata)("design:type", Object), Object($.__metadata)("design:paramtypes", [])], n.prototype, "isFocused", null), Object($.__decorate)([Yt, Object($.__metadata)("design:type", Object), Object($.__metadata)("design:paramtypes", [])], n.prototype, "isSelected", null), Object($.__decorate)([Yt, Object($.__metadata)("design:type", Object), Object($.__metadata)("design:paramtypes", [])], n.prototype, "isAllSelected", null), Object($.__decorate)([Yt, Object($.__metadata)("design:type", Object), Object($.__metadata)("design:paramtypes", [])], n.prototype, "isPartiallySelected", null), Object($.__decorate)([be, Object($.__metadata)("design:type", Array)], n.prototype, "children", void 0), Object($.__decorate)([be, Object($.__metadata)("design:type", Number)], n.prototype, "index", void 0), Object($.__decorate)([be, Object($.__metadata)("design:type", Object)], n.prototype, "position", void 0), Object($.__decorate)([be, Object($.__metadata)("design:type", Number)], n.prototype, "height", void 0), Object($.__decorate)([Yt, Object($.__metadata)("design:type", Number), Object($.__metadata)("design:paramtypes", [])], n.prototype, "level", null), Object($.__decorate)([Yt, Object($.__metadata)("design:type", Array), Object($.__metadata)("design:paramtypes", [])], n.prototype, "path", null), Object($.__decorate)([Yt, Object($.__metadata)("design:type", Object), Object($.__metadata)("design:paramtypes", [])], n.prototype, "visibleChildren", null), Object($.__decorate)([Dl, Object($.__metadata)("design:type", Function), Object($.__metadata)("design:paramtypes", [Object]), Object($.__metadata)("design:returntype", void 0)], n.prototype, "setIsSelected", null), Object($.__decorate)([Dl, Object($.__metadata)("design:type", Function), Object($.__metadata)("design:paramtypes", []), Object($.__metadata)("design:returntype", void 0)], n.prototype, "_initChildren", null), n
                }(),
                ru = {
                    LEFT: 37,
                    UP: 38,
                    RIGHT: 39,
                    DOWN: 40,
                    ENTER: 13,
                    SPACE: 32,
                    CONTEXT_MENU: 32
                },
                iu = e("P4Tr"),
                au = e.n(iu),
                du = e("mwIZ"),
                su = e.n(du),
                cu = e("Puqe"),
                pu = e.n(cu),
                fu = e("UB5X"),
                hu = e.n(fu),
                gu = {
                    TOGGLE_ACTIVE: function(n, l, e) {
                        return l && l.toggleActivated()
                    },
                    TOGGLE_ACTIVE_MULTI: function(n, l, e) {
                        return l && l.toggleActivated(!0)
                    },
                    TOGGLE_SELECTED: function(n, l, e) {
                        return l && l.toggleSelected()
                    },
                    ACTIVATE: function(n, l, e) {
                        return l.setIsActive(!0)
                    },
                    DEACTIVATE: function(n, l, e) {
                        return l.setIsActive(!1)
                    },
                    SELECT: function(n, l, e) {
                        return l.setIsSelected(!0)
                    },
                    DESELECT: function(n, l, e) {
                        return l.setIsSelected(!1)
                    },
                    FOCUS: function(n, l, e) {
                        return l.focus()
                    },
                    TOGGLE_EXPANDED: function(n, l, e) {
                        return l.hasChildren && l.toggleExpanded()
                    },
                    EXPAND: function(n, l, e) {
                        return l.expand()
                    },
                    COLLAPSE: function(n, l, e) {
                        return l.collapse()
                    },
                    DRILL_DOWN: function(n, l, e) {
                        return n.focusDrillDown()
                    },
                    DRILL_UP: function(n, l, e) {
                        return n.focusDrillUp()
                    },
                    NEXT_NODE: function(n, l, e) {
                        return n.focusNextNode()
                    },
                    PREVIOUS_NODE: function(n, l, e) {
                        return n.focusPreviousNode()
                    },
                    MOVE_NODE: function(n, l, e, t) {
                        var o = t.from,
                            u = t.to;
                        e.ctrlKey ? n.copyNode(o, u) : n.moveNode(o, u)
                    }
                },
                mu = {
                    mouse: {
                        click: gu.TOGGLE_ACTIVE,
                        dblClick: null,
                        contextMenu: null,
                        expanderClick: gu.TOGGLE_EXPANDED,
                        checkboxClick: gu.TOGGLE_SELECTED,
                        drop: gu.MOVE_NODE
                    },
                    keys: (Wo = {}, Wo[ru.RIGHT] = gu.DRILL_DOWN, Wo[ru.LEFT] = gu.DRILL_UP, Wo[ru.DOWN] = gu.NEXT_NODE, Wo[ru.UP] = gu.PREVIOUS_NODE, Wo[ru.SPACE] = gu.TOGGLE_ACTIVE, Wo[ru.ENTER] = gu.TOGGLE_ACTIVE, Wo)
                },
                vu = function() {
                    function n(n) {
                        void 0 === n && (n = {}), this.options = n, this.actionMapping = au()({}, this.options.actionMapping, mu), n.rtl && (this.actionMapping.keys[ru.RIGHT] = su()(n, ["actionMapping", "keys", ru.RIGHT]) || gu.DRILL_UP, this.actionMapping.keys[ru.LEFT] = su()(n, ["actionMapping", "keys", ru.LEFT]) || gu.DRILL_DOWN)
                    }
                    return Object.defineProperty(n.prototype, "hasChildrenField", {
                        get: function() {
                            return this.options.hasChildrenField || "hasChildren"
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(n.prototype, "childrenField", {
                        get: function() {
                            return this.options.childrenField || "children"
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(n.prototype, "displayField", {
                        get: function() {
                            return this.options.displayField || "name"
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(n.prototype, "idField", {
                        get: function() {
                            return this.options.idField || "id"
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(n.prototype, "isExpandedField", {
                        get: function() {
                            return this.options.isExpandedField || "isExpanded"
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(n.prototype, "getChildren", {
                        get: function() {
                            return this.options.getChildren
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(n.prototype, "levelPadding", {
                        get: function() {
                            return this.options.levelPadding || 0
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(n.prototype, "useVirtualScroll", {
                        get: function() {
                            return this.options.useVirtualScroll
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(n.prototype, "animateExpand", {
                        get: function() {
                            return this.options.animateExpand
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(n.prototype, "animateSpeed", {
                        get: function() {
                            return this.options.animateSpeed || 1
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(n.prototype, "animateAcceleration", {
                        get: function() {
                            return this.options.animateAcceleration || 1.2
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(n.prototype, "scrollOnActivate", {
                        get: function() {
                            return void 0 === this.options.scrollOnActivate || this.options.scrollOnActivate
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(n.prototype, "rtl", {
                        get: function() {
                            return !!this.options.rtl
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(n.prototype, "rootId", {
                        get: function() {
                            return this.options.rootId
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(n.prototype, "useCheckbox", {
                        get: function() {
                            return this.options.useCheckbox
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(n.prototype, "useTriState", {
                        get: function() {
                            return void 0 === this.options.useTriState || this.options.useTriState
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(n.prototype, "scrollContainer", {
                        get: function() {
                            return this.options.scrollContainer
                        },
                        enumerable: !0,
                        configurable: !0
                    }), n.prototype.getNodeClone = function(n) {
                        return this.options.getNodeClone ? this.options.getNodeClone(n) : pu()(Object.assign({}, n.data), ["id"])
                    }, n.prototype.allowDrop = function(n, l, e) {
                        return this.options.allowDrop instanceof Function ? this.options.allowDrop(n, l, e) : void 0 === this.options.allowDrop || this.options.allowDrop
                    }, n.prototype.allowDrag = function(n) {
                        return this.options.allowDrag instanceof Function ? this.options.allowDrag(n) : this.options.allowDrag
                    }, n.prototype.nodeClass = function(n) {
                        return this.options.nodeClass ? this.options.nodeClass(n) : ""
                    }, n.prototype.nodeHeight = function(n) {
                        if (n.data.virtual) return 0;
                        var l = this.options.nodeHeight || 22;
                        return "function" == typeof l && (l = l(n)), l + (0 === n.index ? 2 : 1) * this.dropSlotHeight
                    }, Object.defineProperty(n.prototype, "dropSlotHeight", {
                        get: function() {
                            return hu()(this.options.dropSlotHeight) ? this.options.dropSlotHeight : 2
                        },
                        enumerable: !0,
                        configurable: !0
                    }), n
                }(),
                bu = e("wig9"),
                yu = e.n(bu),
                $u = e("J2m7"),
                _u = e.n($u),
                xu = e("4qC0"),
                Ou = e.n(xu),
                Cu = e("lSCD"),
                wu = e.n(Cu),
                Su = function() {
                    function n() {
                        this.options = new vu, this.eventNames = Object.keys(Zo), this.expandedNodeIds = {}, this.selectedLeafNodeIds = {}, this.activeNodeIds = {}, this.hiddenNodeIds = {}, this.focusedNodeId = null, this.firstUpdate = !0
                    }
                    return n.prototype.fireEvent = function(n) {
                        n.treeModel = this, this.events[n.eventName].emit(n), this.events.event.emit(n)
                    }, n.prototype.subscribe = function(n, l) {
                        this.events[n].subscribe(l)
                    }, n.prototype.getFocusedNode = function() {
                        return this.focusedNode
                    }, n.prototype.getActiveNode = function() {
                        return this.activeNodes[0]
                    }, n.prototype.getActiveNodes = function() {
                        return this.activeNodes
                    }, n.prototype.getVisibleRoots = function() {
                        return this.virtualRoot.visibleChildren
                    }, n.prototype.getFirstRoot = function(n) {
                        return void 0 === n && (n = !1), Qo()(n ? this.getVisibleRoots() : this.roots)
                    }, n.prototype.getLastRoot = function(n) {
                        return void 0 === n && (n = !1), nu()(n ? this.getVisibleRoots() : this.roots)
                    }, Object.defineProperty(n.prototype, "isFocused", {
                        get: function() {
                            return n.focusedTree === this
                        },
                        enumerable: !0,
                        configurable: !0
                    }), n.prototype.isNodeFocused = function(n) {
                        return this.focusedNode === n
                    }, n.prototype.isEmptyTree = function() {
                        return this.roots && 0 === this.roots.length
                    }, Object.defineProperty(n.prototype, "focusedNode", {
                        get: function() {
                            return this.focusedNodeId ? this.getNodeById(this.focusedNodeId) : null
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(n.prototype, "expandedNodes", {
                        get: function() {
                            var n = this,
                                l = Object.keys(this.expandedNodeIds).filter(function(l) {
                                    return n.expandedNodeIds[l]
                                }).map(function(l) {
                                    return n.getNodeById(l)
                                });
                            return yu()(l)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(n.prototype, "activeNodes", {
                        get: function() {
                            var n = this,
                                l = Object.keys(this.activeNodeIds).filter(function(l) {
                                    return n.activeNodeIds[l]
                                }).map(function(l) {
                                    return n.getNodeById(l)
                                });
                            return yu()(l)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), n.prototype.getNodeByPath = function(n, l) {
                        if (void 0 === l && (l = null), !n) return null;
                        if (l = l || this.virtualRoot, 0 === n.length) return l;
                        if (!l.children) return null;
                        var e = n.shift(),
                            t = _u()(l.children, {
                                id: e
                            });
                        return t ? this.getNodeByPath(n, t) : null
                    }, n.prototype.getNodeById = function(n) {
                        var l = n.toString();
                        return this.getNodeBy(function(n) {
                            return n.id.toString() === l
                        })
                    }, n.prototype.getNodeBy = function(n, l) {
                        if (void 0 === l && (l = null), !(l = l || this.virtualRoot).children) return null;
                        var e = _u()(l.children, n);
                        if (e) return e;
                        for (var t = 0, o = l.children; t < o.length; t++) {
                            var u = this.getNodeBy(n, o[t]);
                            if (u) return u
                        }
                    }, n.prototype.isExpanded = function(n) {
                        return this.expandedNodeIds[n.id]
                    }, n.prototype.isHidden = function(n) {
                        return this.hiddenNodeIds[n.id]
                    }, n.prototype.isActive = function(n) {
                        return this.activeNodeIds[n.id]
                    }, n.prototype.isSelected = function(n) {
                        return this.selectedLeafNodeIds[n.id]
                    }, n.prototype.ngOnDestroy = function() {
                        this.dispose()
                    }, n.prototype.dispose = function() {
                        this.virtualRoot && this.virtualRoot.dispose()
                    }, n.prototype.setData = function(n) {
                        var l = n.nodes,
                            e = n.options,
                            t = void 0 === e ? null : e,
                            o = n.events,
                            u = void 0 === o ? null : o;
                        t && (this.options = new vu(t)), u && (this.events = u), l && (this.nodes = l), this.update()
                    }, n.prototype.update = function() {
                        var n, l = ((n = {
                            id: this.options.rootId,
                            virtual: !0
                        })[this.options.childrenField] = this.nodes, n);
                        this.dispose(), this.virtualRoot = new uu(l, null, this, 0), this.roots = this.virtualRoot.children, this.firstUpdate ? this.roots && (this.firstUpdate = !1, this._calculateExpandedNodes()) : this.fireEvent({
                            eventName: Zo.updateData
                        })
                    }, n.prototype.setFocusedNode = function(n) {
                        this.focusedNodeId = n ? n.id : null
                    }, n.prototype.setFocus = function(l) {
                        n.focusedTree = l ? this : null
                    }, n.prototype.doForAll = function(n) {
                        this.roots.forEach(function(l) {
                            return l.doForAll(n)
                        })
                    }, n.prototype.focusNextNode = function() {
                        var n = this.getFocusedNode(),
                            l = n ? n.findNextNode(!0, !0) : this.getFirstRoot(!0);
                        l && l.focus()
                    }, n.prototype.focusPreviousNode = function() {
                        var n = this.getFocusedNode(),
                            l = n ? n.findPreviousNode(!0) : this.getLastRoot(!0);
                        l && l.focus()
                    }, n.prototype.focusDrillDown = function() {
                        var n = this.getFocusedNode();
                        if (n && n.isCollapsed && n.hasChildren) n.toggleExpanded();
                        else {
                            var l = n ? n.getFirstChild(!0) : this.getFirstRoot(!0);
                            l && l.focus()
                        }
                    }, n.prototype.focusDrillUp = function() {
                        var n = this.getFocusedNode();
                        if (n)
                            if (n.isExpanded) n.toggleExpanded();
                            else {
                                var l = n.realParent;
                                l && l.focus()
                            }
                    }, n.prototype.setActiveNode = function(n, l, e) {
                        void 0 === e && (e = !1), e ? this._setActiveNodeMulti(n, l) : this._setActiveNodeSingle(n, l), l ? (n.focus(), this.fireEvent({
                            eventName: Zo.activate,
                            node: n
                        }), this.fireEvent({
                            eventName: Zo.nodeActivate,
                            node: n
                        })) : (this.fireEvent({
                            eventName: Zo.deactivate,
                            node: n
                        }), this.fireEvent({
                            eventName: Zo.nodeDeactivate,
                            node: n
                        }))
                    }, n.prototype.setSelectedNode = function(n, l) {
                        var e;
                        this.selectedLeafNodeIds = Object.assign({}, this.selectedLeafNodeIds, ((e = {})[n.id] = l, e)), l ? (n.focus(), this.fireEvent({
                            eventName: Zo.select,
                            node: n
                        })) : this.fireEvent({
                            eventName: Zo.deselect,
                            node: n
                        })
                    }, n.prototype.setExpandedNode = function(n, l) {
                        var e;
                        this.expandedNodeIds = Object.assign({}, this.expandedNodeIds, ((e = {})[n.id] = l, e)), this.fireEvent({
                            eventName: Zo.toggleExpanded,
                            node: n,
                            isExpanded: l
                        })
                    }, n.prototype.expandAll = function() {
                        this.roots.forEach(function(n) {
                            return n.expandAll()
                        })
                    }, n.prototype.collapseAll = function() {
                        this.roots.forEach(function(n) {
                            return n.collapseAll()
                        })
                    }, n.prototype.setIsHidden = function(n, l) {
                        var e;
                        this.hiddenNodeIds = Object.assign({}, this.hiddenNodeIds, ((e = {})[n.id] = l, e))
                    }, n.prototype.setHiddenNodeIds = function(n) {
                        this.hiddenNodeIds = n.reduce(function(n, l) {
                            return Object.assign(n, ((e = {})[l] = !0, e));
                            var e
                        }, {})
                    }, n.prototype.performKeyAction = function(n, l) {
                        var e = this.options.actionMapping.keys[l.keyCode];
                        return !!e && (l.preventDefault(), e(this, n, l), !0)
                    }, n.prototype.filterNodes = function(n, l) {
                        var e, t = this;
                        if (void 0 === l && (l = !0), !n) return this.clearFilter();
                        if (Ou()(n)) e = function(l) {
                            return -1 !== l.displayField.toLowerCase().indexOf(n.toLowerCase())
                        };
                        else {
                            if (!wu()(n)) return console.error("Don't know what to do with filter", n), void console.error("Should be either a string or function");
                            e = n
                        }
                        var o = {};
                        this.roots.forEach(function(n) {
                            return t._filterNode(o, n, e, l)
                        }), this.hiddenNodeIds = o, this.fireEvent({
                            eventName: Zo.changeFilter
                        })
                    }, n.prototype.clearFilter = function() {
                        this.hiddenNodeIds = {}, this.fireEvent({
                            eventName: Zo.changeFilter
                        })
                    }, n.prototype.moveNode = function(n, l) {
                        var e = n.getIndexInParent(),
                            t = n.parent;
                        if (this._canMoveNode(n, e, l)) {
                            var o = t.getField("children");
                            l.parent.getField("children") || l.parent.setField("children", []);
                            var u = l.parent.getField("children"),
                                r = o.splice(e, 1)[0],
                                i = t === l.parent && l.index > e ? l.index - 1 : l.index;
                            u.splice(i, 0, r), t.treeModel.update(), l.parent.treeModel !== t.treeModel && l.parent.treeModel.update(), this.fireEvent({
                                eventName: Zo.moveNode,
                                node: r,
                                to: {
                                    parent: l.parent.data,
                                    index: i
                                }
                            })
                        }
                    }, n.prototype.copyNode = function(n, l) {
                        var e = n.getIndexInParent();
                        if (this._canMoveNode(n, e, l)) {
                            l.parent.getField("children") || l.parent.setField("children", []);
                            var t = l.parent.getField("children"),
                                o = this.options.getNodeClone(n);
                            t.splice(l.index, 0, o), n.treeModel.update(), l.parent.treeModel !== n.treeModel && l.parent.treeModel.update(), this.fireEvent({
                                eventName: Zo.copyNode,
                                node: o,
                                to: {
                                    parent: l.parent.data,
                                    index: l.index
                                }
                            })
                        }
                    }, n.prototype.getState = function() {
                        return {
                            expandedNodeIds: this.expandedNodeIds,
                            selectedLeafNodeIds: this.selectedLeafNodeIds,
                            activeNodeIds: this.activeNodeIds,
                            hiddenNodeIds: this.hiddenNodeIds,
                            focusedNodeId: this.focusedNodeId
                        }
                    }, n.prototype.setState = function(n) {
                        n && Object.assign(this, {
                            expandedNodeIds: n.expandedNodeIds || {},
                            selectedLeafNodeIds: n.selectedLeafNodeIds || {},
                            activeNodeIds: n.activeNodeIds || {},
                            hiddenNodeIds: n.hiddenNodeIds || {},
                            focusedNodeId: n.focusedNodeId
                        })
                    }, n.prototype.subscribeToState = function(n) {
                        var l = this;
                        Hl(function() {
                            return n(l.getState())
                        })
                    }, n.prototype._canMoveNode = function(n, l, e) {
                        return (n.parent !== e.parent || l !== e.index) && !e.parent.isDescendantOf(n)
                    }, n.prototype._filterNode = function(n, l, e, t) {
                        var o = this,
                            u = e(l);
                        return l.children && l.children.forEach(function(l) {
                            o._filterNode(n, l, e, t) && (u = !0)
                        }), u || (n[l.id] = !0), t && u && l.ensureVisible(), u
                    }, n.prototype._calculateExpandedNodes = function(n) {
                        var l, e = this;
                        void 0 === n && (n = null), (n = n || this.virtualRoot).data[this.options.isExpandedField] && (this.expandedNodeIds = Object.assign({}, this.expandedNodeIds, ((l = {})[n.id] = !0, l))), n.children && n.children.forEach(function(n) {
                            return e._calculateExpandedNodes(n)
                        })
                    }, n.prototype._setActiveNodeSingle = function(n, l) {
                        var e, t = this;
                        this.activeNodes.filter(function(l) {
                            return l !== n
                        }).forEach(function(n) {
                            t.fireEvent({
                                eventName: Zo.deactivate,
                                node: n
                            }), t.fireEvent({
                                eventName: Zo.nodeDeactivate,
                                node: n
                            })
                        }), this.activeNodeIds = l ? ((e = {})[n.id] = !0, e) : {}
                    }, n.prototype._setActiveNodeMulti = function(n, l) {
                        var e;
                        this.activeNodeIds = Object.assign({}, this.activeNodeIds, ((e = {})[n.id] = l, e))
                    }, n.focusedTree = null, Object($.__decorate)([be, Object($.__metadata)("design:type", Array)], n.prototype, "roots", void 0), Object($.__decorate)([be, Object($.__metadata)("design:type", Object)], n.prototype, "expandedNodeIds", void 0), Object($.__decorate)([be, Object($.__metadata)("design:type", Object)], n.prototype, "selectedLeafNodeIds", void 0), Object($.__decorate)([be, Object($.__metadata)("design:type", Object)], n.prototype, "activeNodeIds", void 0), Object($.__decorate)([be, Object($.__metadata)("design:type", Object)], n.prototype, "hiddenNodeIds", void 0), Object($.__decorate)([be, Object($.__metadata)("design:type", Object)], n.prototype, "focusedNodeId", void 0), Object($.__decorate)([be, Object($.__metadata)("design:type", uu)], n.prototype, "virtualRoot", void 0), Object($.__decorate)([Yt, Object($.__metadata)("design:type", Object), Object($.__metadata)("design:paramtypes", [])], n.prototype, "focusedNode", null), Object($.__decorate)([Yt, Object($.__metadata)("design:type", Object), Object($.__metadata)("design:paramtypes", [])], n.prototype, "expandedNodes", null), Object($.__decorate)([Yt, Object($.__metadata)("design:type", Object), Object($.__metadata)("design:paramtypes", [])], n.prototype, "activeNodes", null), Object($.__decorate)([Dl, Object($.__metadata)("design:type", Function), Object($.__metadata)("design:paramtypes", [Object]), Object($.__metadata)("design:returntype", void 0)], n.prototype, "setData", null), Object($.__decorate)([Dl, Object($.__metadata)("design:type", Function), Object($.__metadata)("design:paramtypes", []), Object($.__metadata)("design:returntype", void 0)], n.prototype, "update", null), Object($.__decorate)([Dl, Object($.__metadata)("design:type", Function), Object($.__metadata)("design:paramtypes", [Object]), Object($.__metadata)("design:returntype", void 0)], n.prototype, "setFocusedNode", null), Object($.__decorate)([Dl, Object($.__metadata)("design:type", Function), Object($.__metadata)("design:paramtypes", [Object]), Object($.__metadata)("design:returntype", void 0)], n.prototype, "setFocus", null), Object($.__decorate)([Dl, Object($.__metadata)("design:type", Function), Object($.__metadata)("design:paramtypes", [Object]), Object($.__metadata)("design:returntype", void 0)], n.prototype, "doForAll", null), Object($.__decorate)([Dl, Object($.__metadata)("design:type", Function), Object($.__metadata)("design:paramtypes", []), Object($.__metadata)("design:returntype", void 0)], n.prototype, "focusNextNode", null), Object($.__decorate)([Dl, Object($.__metadata)("design:type", Function), Object($.__metadata)("design:paramtypes", []), Object($.__metadata)("design:returntype", void 0)], n.prototype, "focusPreviousNode", null), Object($.__decorate)([Dl, Object($.__metadata)("design:type", Function), Object($.__metadata)("design:paramtypes", []), Object($.__metadata)("design:returntype", void 0)], n.prototype, "focusDrillDown", null), Object($.__decorate)([Dl, Object($.__metadata)("design:type", Function), Object($.__metadata)("design:paramtypes", []), Object($.__metadata)("design:returntype", void 0)], n.prototype, "focusDrillUp", null), Object($.__decorate)([Dl, Object($.__metadata)("design:type", Function), Object($.__metadata)("design:paramtypes", [Object, Object, Object]), Object($.__metadata)("design:returntype", void 0)], n.prototype, "setActiveNode", null), Object($.__decorate)([Dl, Object($.__metadata)("design:type", Function), Object($.__metadata)("design:paramtypes", [Object, Object]), Object($.__metadata)("design:returntype", void 0)], n.prototype, "setSelectedNode", null), Object($.__decorate)([Dl, Object($.__metadata)("design:type", Function), Object($.__metadata)("design:paramtypes", [Object, Object]), Object($.__metadata)("design:returntype", void 0)], n.prototype, "setExpandedNode", null), Object($.__decorate)([Dl, Object($.__metadata)("design:type", Function), Object($.__metadata)("design:paramtypes", []), Object($.__metadata)("design:returntype", void 0)], n.prototype, "expandAll", null), Object($.__decorate)([Dl, Object($.__metadata)("design:type", Function), Object($.__metadata)("design:paramtypes", []), Object($.__metadata)("design:returntype", void 0)], n.prototype, "collapseAll", null), Object($.__decorate)([Dl, Object($.__metadata)("design:type", Function), Object($.__metadata)("design:paramtypes", [Object, Object]), Object($.__metadata)("design:returntype", void 0)], n.prototype, "setIsHidden", null), Object($.__decorate)([Dl, Object($.__metadata)("design:type", Function), Object($.__metadata)("design:paramtypes", [Object]), Object($.__metadata)("design:returntype", void 0)], n.prototype, "setHiddenNodeIds", null), Object($.__decorate)([Dl, Object($.__metadata)("design:type", Function), Object($.__metadata)("design:paramtypes", [Object, Object]), Object($.__metadata)("design:returntype", void 0)], n.prototype, "filterNodes", null), Object($.__decorate)([Dl, Object($.__metadata)("design:type", Function), Object($.__metadata)("design:paramtypes", []), Object($.__metadata)("design:returntype", void 0)], n.prototype, "clearFilter", null), Object($.__decorate)([Dl, Object($.__metadata)("design:type", Function), Object($.__metadata)("design:paramtypes", [Object, Object]), Object($.__metadata)("design:returntype", void 0)], n.prototype, "moveNode", null), Object($.__decorate)([Dl, Object($.__metadata)("design:type", Function), Object($.__metadata)("design:paramtypes", [Object, Object]), Object($.__metadata)("design:returntype", void 0)], n.prototype, "copyNode", null), Object($.__decorate)([Dl, Object($.__metadata)("design:type", Function), Object($.__metadata)("design:paramtypes", [Object]), Object($.__metadata)("design:returntype", void 0)], n.prototype, "setState", null), n
                }(),
                Eu = function() {
                    function n(n) {
                        var l = this;
                        this.treeModel = n, this.yBlocks = 0, this.x = 0, this.viewportHeight = null, this.viewport = null, n.virtualScroll = this, this._dispose = [Hl(function() {
                            return l.fixScroll()
                        })]
                    }
                    return Object.defineProperty(n.prototype, "y", {
                        get: function() {
                            return 150 * this.yBlocks
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(n.prototype, "totalHeight", {
                        get: function() {
                            return this.treeModel.virtualRoot ? this.treeModel.virtualRoot.height : 0
                        },
                        enumerable: !0,
                        configurable: !0
                    }), n.prototype.fireEvent = function(n) {
                        this.treeModel.fireEvent(n)
                    }, n.prototype.init = function() {
                        var n = this,
                            l = this.recalcPositions.bind(this);
                        l(), this._dispose = this._dispose.concat([Yl(function() {
                            return n.treeModel.roots
                        }, l), Yl(function() {
                            return n.treeModel.expandedNodeIds
                        }, l), Yl(function() {
                            return n.treeModel.hiddenNodeIds
                        }, l)]), this.treeModel.subscribe(Zo.loadNodeChildren, l)
                    }, n.prototype.isEnabled = function() {
                        return this.treeModel.options.useVirtualScroll
                    }, n.prototype._setYBlocks = function(n) {
                        this.yBlocks = n
                    }, n.prototype.recalcPositions = function() {
                        this.treeModel.virtualRoot.height = this._getPositionAfter(this.treeModel.getVisibleRoots(), 0)
                    }, n.prototype._getPositionAfter = function(n, l) {
                        var e = this,
                            t = l;
                        return n.forEach(function(n) {
                            n.position = t, t = e._getPositionAfterNode(n, t)
                        }), t
                    }, n.prototype._getPositionAfterNode = function(n, l) {
                        var e = n.getSelfHeight() + l;
                        return n.children && n.isExpanded && (e = this._getPositionAfter(n.visibleChildren, e)), n.height = e - l, e
                    }, n.prototype.clear = function() {
                        this._dispose.forEach(function(n) {
                            return n()
                        })
                    }, n.prototype.setViewport = function(n) {
                        Object.assign(this, {
                            viewport: n,
                            x: n.scrollLeft,
                            yBlocks: Math.round(n.scrollTop / 150),
                            viewportHeight: n.getBoundingClientRect ? n.getBoundingClientRect().height : 0
                        })
                    }, n.prototype.scrollIntoView = function(n, l, e) {
                        if (void 0 === e && (e = !0), n.options.scrollContainer) {
                            var t = n.options.scrollContainer,
                                o = t.getBoundingClientRect().height,
                                u = t.getBoundingClientRect().top,
                                r = this.viewport.getBoundingClientRect().top + n.position - u;
                            (l || r < t.scrollTop || r + n.getSelfHeight() > t.scrollTop + o) && (t.scrollTop = e ? r - o / 2 : r)
                        } else(l || n.position < this.y || n.position + n.getSelfHeight() > this.y + this.viewportHeight) && this.viewport && (this.viewport.scrollTop = e ? n.position - this.viewportHeight / 2 : n.position, this._setYBlocks(Math.floor(this.viewport.scrollTop / 150)))
                    }, n.prototype.getViewportNodes = function(n) {
                        var l = this;
                        if (!n) return [];
                        var e = n.filter(function(n) {
                            return !n.isHidden
                        });
                        if (!this.isEnabled()) return e;
                        if (!this.viewportHeight || !e.length) return [];
                        for (var t = Pu(e, function(n) {
                                return n.position + 500 > l.y || n.position + n.height > l.y
                            }), o = Pu(e, function(n) {
                                return n.position - 500 > l.y + l.viewportHeight
                            }, t), u = [], r = t; r <= o; r++) u.push(e[r]);
                        return u
                    }, n.prototype.fixScroll = function() {
                        var n = Math.max(0, this.totalHeight - this.viewportHeight);
                        this.y < 0 && this._setYBlocks(0), this.y > n && this._setYBlocks(n / 150)
                    }, Object($.__decorate)([be, Object($.__metadata)("design:type", Object)], n.prototype, "yBlocks", void 0), Object($.__decorate)([be, Object($.__metadata)("design:type", Object)], n.prototype, "x", void 0), Object($.__decorate)([be, Object($.__metadata)("design:type", Object)], n.prototype, "viewportHeight", void 0), Object($.__decorate)([Yt, Object($.__metadata)("design:type", Object), Object($.__metadata)("design:paramtypes", [])], n.prototype, "y", null), Object($.__decorate)([Yt, Object($.__metadata)("design:type", Object), Object($.__metadata)("design:paramtypes", [])], n.prototype, "totalHeight", null), Object($.__decorate)([Dl, Object($.__metadata)("design:type", Function), Object($.__metadata)("design:paramtypes", [Object]), Object($.__metadata)("design:returntype", void 0)], n.prototype, "_setYBlocks", null), Object($.__decorate)([Dl, Object($.__metadata)("design:type", Function), Object($.__metadata)("design:paramtypes", []), Object($.__metadata)("design:returntype", void 0)], n.prototype, "recalcPositions", null), Object($.__decorate)([Dl, Object($.__metadata)("design:type", Function), Object($.__metadata)("design:paramtypes", [Object]), Object($.__metadata)("design:returntype", void 0)], n.prototype, "setViewport", null), Object($.__decorate)([Dl, Object($.__metadata)("design:type", Function), Object($.__metadata)("design:paramtypes", [Object, Object, Object]), Object($.__metadata)("design:returntype", void 0)], n.prototype, "scrollIntoView", null), n
                }();

            function Pu(n, l, e) {
                void 0 === e && (e = 0);
                for (var t = e, o = n.length - 1; t !== o;) {
                    var u = Math.floor((t + o) / 2);
                    l(n[u]) ? o = u : t = t === u ? o : u
                }
                return t
            }
            var Mu = e("DzJC"),
                ju = e.n(Mu),
                ku = function() {
                    function n(n, l) {
                        var e = this;
                        this.elementRef = n, this.virtualScroll = l, this.setViewport = ju()(function() {
                            e.virtualScroll.setViewport(e.elementRef.nativeElement)
                        }, 17)
                    }
                    return n.prototype.ngOnInit = function() {
                        this.virtualScroll.init()
                    }, n.prototype.ngAfterViewInit = function() {
                        var n = this;
                        setTimeout(function() {
                            n.setViewport(), n.virtualScroll.fireEvent({
                                eventName: Zo.initialized
                            })
                        })
                    }, n.prototype.ngOnDestroy = function() {
                        this.virtualScroll.clear()
                    }, n.prototype.getTotalHeight = function() {
                        return this.virtualScroll.isEnabled() && this.virtualScroll.totalHeight + "px" || "auto"
                    }, n.prototype.onScroll = function() {
                        this.setViewport()
                    }, n
                }(),
                Iu = t["\u0275crt"]({
                    encapsulation: 2,
                    styles: [],
                    data: {}
                });

            function Nu(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 1, "div", [], [
                    [4, "height", null]
                ], null, null, null, null)), t["\u0275ncd"](null, 0)], null, function(n, l) {
                    n(l, 1, 0, l.component.getTotalHeight())
                })
            }

            function Tu(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275and"](16777216, null, null, 2, null, Nu)), t["\u0275did"](1, 212992, null, 0, no, [t.TemplateRef, t.ViewContainerRef, t.Renderer], {
                    mobxAutorun: [0, "mobxAutorun"]
                }, null), t["\u0275pod"](2, {
                    dontDetach: 0
                })], function(n, l) {
                    n(l, 1, 0, n(l, 2, 0, !0))
                }, null)
            }
            var Au = e("ijCd"),
                Du = e.n(Au),
                Ru = e("JZM8"),
                Fu = e.n(Ru),
                Vu = function() {
                    function n(n, l, e) {
                        var o = this;
                        this.treeModel = n, this.treeDraggedElement = l, this.renderer = e, n.eventNames.forEach(function(n) {
                            return o[n] = new t.EventEmitter
                        }), n.subscribeToState(function(n) {
                            return o.stateChange.emit(n)
                        })
                    }
                    return Object.defineProperty(n.prototype, "nodes", {
                        set: function(n) {},
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(n.prototype, "options", {
                        set: function(n) {},
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(n.prototype, "focused", {
                        set: function(n) {
                            this.treeModel.setFocus(n)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(n.prototype, "state", {
                        set: function(n) {
                            this.treeModel.setState(n)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), n.prototype.onKeydown = function(n) {
                        if (this.treeModel.isFocused && !Du()(["input", "textarea"], document.activeElement.tagName.toLowerCase())) {
                            var l = this.treeModel.getFocusedNode();
                            this.treeModel.performKeyAction(l, n)
                        }
                    }, n.prototype.onMousedown = function(n) {
                        this.renderer.invokeElementMethod(n.target, "closest", ["Tree"]) || this.treeModel.setFocus(!1)
                    }, n.prototype.ngOnChanges = function(n) {
                        this.treeModel.setData({
                            options: n.options && n.options.currentValue,
                            nodes: n.nodes && n.nodes.currentValue,
                            events: Fu()(this, this.treeModel.eventNames)
                        })
                    }, n.prototype.sizeChanged = function() {
                        this.viewportComponent.setViewport()
                    }, n
                }(),
                zu = t["\u0275crt"]({
                    encapsulation: 2,
                    styles: [],
                    data: {}
                });

            function Lu(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 2, "tree-node-collection", [], null, null, null, Ko, qo)), t["\u0275did"](1, 245760, null, 0, So, [], {
                    nodes: [0, "nodes"],
                    treeModel: [1, "treeModel"],
                    templates: [2, "templates"]
                }, null), t["\u0275pod"](2, {
                    loadingTemplate: 0,
                    treeNodeTemplate: 1,
                    treeNodeWrapperTemplate: 2,
                    treeNodeFullTemplate: 3
                })], function(n, l) {
                    var e = l.component;
                    n(l, 1, 0, e.treeModel.roots, e.treeModel, n(l, 2, 0, e.loadingTemplate, e.treeNodeTemplate, e.treeNodeWrapperTemplate, e.treeNodeFullTemplate))
                }, null)
            }

            function Gu(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "tree-node-drop-slot", [
                    ["class", "empty-tree-drop-slot"]
                ], null, null, null, Ln, zn)), t["\u0275did"](1, 49152, null, 0, Vn, [], {
                    node: [0, "node"],
                    dropIndex: [1, "dropIndex"]
                }, null)], function(n, l) {
                    n(l, 1, 0, l.component.treeModel.virtualRoot, 0)
                }, null)
            }

            function Uu(n) {
                return t["\u0275vid"](0, [t["\u0275qud"](402653184, 1, {
                    viewportComponent: 0
                }), (n()(), t["\u0275eld"](1, 0, null, null, 7, "tree-viewport", [], null, [
                    [null, "scroll"]
                ], function(n, l, e) {
                    var o = !0;
                    return "scroll" === l && (o = !1 !== t["\u0275nov"](n, 3).onScroll(e) && o), o
                }, Tu, Iu)), t["\u0275prd"](512, null, Eu, Eu, [Su]), t["\u0275did"](3, 4440064, [
                    [1, 4],
                    ["viewport", 4]
                ], 0, ku, [t.ElementRef, Eu], null, null), (n()(), t["\u0275eld"](4, 0, null, 0, 4, "div", [
                    ["class", "angular-tree-component"]
                ], [
                    [2, "node-dragging", null],
                    [2, "angular-tree-component-rtl", null]
                ], null, null, null, null)), (n()(), t["\u0275and"](16777216, null, null, 1, null, Lu)), t["\u0275did"](6, 16384, null, 0, m.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (n()(), t["\u0275and"](16777216, null, null, 1, null, Gu)), t["\u0275did"](8, 16384, null, 0, m.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(n, l) {
                    var e = l.component;
                    n(l, 3, 0), n(l, 6, 0, e.treeModel.roots), n(l, 8, 0, e.treeModel.isEmptyTree())
                }, function(n, l) {
                    var e = l.component;
                    n(l, 4, 0, e.treeDraggedElement.isDragging(), e.treeModel.options.rtl)
                })
            }
            e("14R3");
            var Bu, qu = function() {},
                Hu = {
                    mouse: {
                        contextMenu: function(n, l, e) {
                            e.preventDefault(), alert("context menu for " + l.data.name)
                        },
                        dblClick: function(n, l, e) {
                            l.hasChildren && gu.TOGGLE_EXPANDED(n, l, e)
                        },
                        click: function(n, l, e) {
                            e.shiftKey ? gu.TOGGLE_ACTIVE_MULTI(n, l, e) : gu.TOGGLE_ACTIVE(n, l, e)
                        }
                    },
                    keys: (Bu = {}, Bu[ru.ENTER] = function(n, l, e) {
                        return alert("This is " + l.data.name)
                    }, Bu)
                },
                Yu = function() {
                    function n(n) {
                        this.pageTitleService = n, this.nodes2 = [{
                            name: "root"
                        }, {
                            name: "root2"
                        }], this.asyncChildren = [{
                            name: "child2.1",
                            subTitle: "new and improved"
                        }, {
                            name: "child2.2",
                            subTitle: "new and improved2"
                        }], this.customTemplateStringOptions = {
                            isExpandedField: "expanded",
                            idField: "uuid",
                            getChildren: this.getChildren.bind(this),
                            actionMapping: Hu,
                            nodeHeight: 23,
                            allowDrag: !0,
                            useVirtualScroll: !0
                        }
                    }
                    return n.prototype.ngOnInit = function() {
                        var n = this;
                        this.pageTitleService.setTitle("Tree"), setTimeout(function() {
                            n.nodes = [{
                                expanded: !0,
                                name: "root expanded",
                                subTitle: "the root",
                                children: [{
                                    name: "child1",
                                    subTitle: "a good child",
                                    hasChildren: !1
                                }, {
                                    name: "child2",
                                    subTitle: "a bad child",
                                    hasChildren: !1
                                }]
                            }, {
                                name: "root2",
                                subTitle: "the second root",
                                children: [{
                                    name: "child2.1",
                                    subTitle: "new and improved",
                                    hasChildren: !1
                                }, {
                                    name: "child2.2",
                                    subTitle: "new and improved2",
                                    children: [{
                                        uuid: 1001,
                                        name: "subsub",
                                        subTitle: "subsub",
                                        hasChildren: !1
                                    }]
                                }]
                            }, {
                                name: "asyncroot",
                                hasChildren: !0
                            }]
                        }, 1)
                    }, n.prototype.getChildren = function(n) {
                        var l = this;
                        return new Promise(function(e, t) {
                            setTimeout(function() {
                                return e(l.asyncChildren.map(function(l) {
                                    return Object.assign({}, l, {
                                        hasChildren: n.level < 5
                                    })
                                }))
                            }, 1e3)
                        })
                    }, n.prototype.addNode = function(n) {
                        this.nodes[0].children.push({
                            name: "a new child"
                        }), n.treeModel.update()
                    }, n.prototype.childrenCount = function(n) {
                        return n && n.children ? "(" + n.children.length + ")" : ""
                    }, n.prototype.filterNodes = function(n, l) {
                        l.treeModel.filterNodes(n)
                    }, n.prototype.activateSubSub = function(n) {
                        n.treeModel.getNodeById(1001).setActiveAndVisible()
                    }, n.prototype.onEvent = function(n) {
                        console.log(n)
                    }, n.prototype.go = function(n) {
                        n.stopPropagation(), alert("this method is on the app component")
                    }, n.prototype.activeNodes = function(n) {
                        console.log(n.activeNodes)
                    }, n
                }(),
                Ku = t["\u0275crt"]({
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

            function Wu(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "span", [], [
                    [8, "title", 0]
                ], null, null, null, null)), (n()(), t["\u0275ted"](1, null, ["", ""])), (n()(), t["\u0275eld"](2, 0, null, null, 1, "span", [
                    ["class", "pull-right"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](3, null, ["", ""])), (n()(), t["\u0275eld"](4, 0, null, null, 1, "button", [
                    ["class", "btn btn-square btn-primary mr-2"]
                ], null, [
                    [null, "click"]
                ], function(n, l, e) {
                    var t = !0;
                    return "click" === l && (t = !1 !== n.component.go(e) && t), t
                }, null, null)), (n()(), t["\u0275ted"](-1, null, ["Custom Action"]))], null, function(n, l) {
                    var e = l.component;
                    n(l, 0, 0, t["\u0275inlineInterpolate"](1, "", l.context.$implicit.data.subTitle, "")), n(l, 1, 0, l.context.$implicit.data.name), n(l, 3, 0, e.childrenCount(l.context.$implicit))
                })
            }

            function Zu(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275ted"](-1, null, ["Loading, please hold...."]))], null, null)
            }

            function Ju(n) {
                return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 55, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](1, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](2, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Form Tree"])), (n()(), t["\u0275eld"](4, 0, null, null, 51, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](5, 0, null, null, 50, "div", [
                    ["class", "box-inset pr-3"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](6, 0, null, null, 8, "form", [
                    ["novalidate", ""]
                ], [
                    [2, "ng-untouched", null],
                    [2, "ng-touched", null],
                    [2, "ng-pristine", null],
                    [2, "ng-dirty", null],
                    [2, "ng-valid", null],
                    [2, "ng-invalid", null],
                    [2, "ng-pending", null]
                ], [
                    [null, "submit"],
                    [null, "reset"]
                ], function(n, l, e) {
                    var o = !0;
                    return "submit" === l && (o = !1 !== t["\u0275nov"](n, 8).onSubmit(e) && o), "reset" === l && (o = !1 !== t["\u0275nov"](n, 8).onReset() && o), o
                }, null, null)), t["\u0275did"](7, 16384, null, 0, r["\u0275angular_packages_forms_forms_bg"], [], null, null), t["\u0275did"](8, 4210688, null, 0, r.NgForm, [
                    [8, null],
                    [8, null]
                ], null, null), t["\u0275prd"](2048, null, r.ControlContainer, null, [r.NgForm]), t["\u0275did"](10, 16384, null, 0, r.NgControlStatusGroup, [
                    [4, r.ControlContainer]
                ], null, null), (n()(), t["\u0275eld"](11, 0, null, null, 3, "div", [
                    ["class", "card"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](12, 0, null, null, 2, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](13, 0, null, null, 1, "div", [
                    ["class", ""]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](14, 0, [
                    ["filter", 1]
                ], null, 0, "input", [
                    ["class", "form-control input-square"],
                    ["placeholder", "Filter Nodes"]
                ], null, [
                    [null, "keyup"]
                ], function(n, l, e) {
                    var o = !0;
                    return "keyup" === l && (o = !1 !== n.component.filterNodes(t["\u0275nov"](n, 14).value, t["\u0275nov"](n, 18)) && o), o
                }, null, null)), (n()(), t["\u0275eld"](15, 0, null, null, 9, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](16, 0, null, null, 8, "tree-root", [], null, [
                    [null, "onEvent"],
                    ["body", "keydown"],
                    ["body", "mousedown"]
                ], function(n, l, e) {
                    var o = !0,
                        u = n.component;
                    return "body:keydown" === l && (o = !1 !== t["\u0275nov"](n, 18).onKeydown(e) && o), "body:mousedown" === l && (o = !1 !== t["\u0275nov"](n, 18).onMousedown(e) && o), "onEvent" === l && (o = !1 !== u.onEvent(e) && o), o
                }, Uu, zu)), t["\u0275prd"](131584, null, Su, Su, []), t["\u0275did"](18, 573440, [
                    ["tree", 4]
                ], 4, Vu, [Su, Rn, t.Renderer], {
                    nodes: [0, "nodes"],
                    options: [1, "options"],
                    focused: [2, "focused"]
                }, null), t["\u0275qud"](335544320, 1, {
                    loadingTemplate: 0
                }), t["\u0275qud"](335544320, 2, {
                    treeNodeTemplate: 0
                }), t["\u0275qud"](335544320, 3, {
                    treeNodeWrapperTemplate: 0
                }), t["\u0275qud"](335544320, 4, {
                    treeNodeFullTemplate: 0
                }), (n()(), t["\u0275and"](0, [
                    [2, 2],
                    ["treeNodeTemplate", 2]
                ], null, 0, null, Wu)), (n()(), t["\u0275and"](0, [
                    [1, 2],
                    ["loadingTemplate", 2]
                ], null, 0, null, Zu)), (n()(), t["\u0275eld"](25, 0, null, null, 30, "div", [
                    ["class", "card"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](26, 0, null, null, 29, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (n()(), t["\u0275eld"](27, 0, null, null, 1, "p", [], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Keys:"])), (n()(), t["\u0275ted"](-1, null, [" down | up | left | right | space | enter "])), (n()(), t["\u0275eld"](30, 0, null, null, 1, "p", [], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["Mouse:"])), (n()(), t["\u0275ted"](-1, null, [" click to select | shift+click to select multi "])), (n()(), t["\u0275eld"](33, 0, null, null, 1, "p", [], null, null, null, null, null)), (n()(), t["\u0275ted"](-1, null, ["API:"])), (n()(), t["\u0275eld"](35, 0, null, null, 1, "button", [
                    ["class", "btn btn-square btn-success mb-1"]
                ], null, [
                    [null, "click"]
                ], function(n, l, e) {
                    var o = !0;
                    return "click" === l && (o = !1 !== t["\u0275nov"](n, 18).treeModel.focusNextNode() && o), o
                }, null, null)), (n()(), t["\u0275ted"](-1, null, ["next node"])), (n()(), t["\u0275eld"](37, 0, null, null, 1, "button", [
                    ["class", "btn btn-square bg-yellow mb-1"]
                ], null, [
                    [null, "click"]
                ], function(n, l, e) {
                    var o = !0;
                    return "click" === l && (o = !1 !== t["\u0275nov"](n, 18).treeModel.focusPreviousNode() && o), o
                }, null, null)), (n()(), t["\u0275ted"](-1, null, ["previous node"])), (n()(), t["\u0275eld"](39, 0, null, null, 1, "button", [
                    ["class", "btn btn-square btn-warning mb-1"]
                ], null, [
                    [null, "click"]
                ], function(n, l, e) {
                    var o = !0;
                    return "click" === l && (o = !1 !== t["\u0275nov"](n, 18).treeModel.focusDrillDown() && o), o
                }, null, null)), (n()(), t["\u0275ted"](-1, null, ["drill down"])), (n()(), t["\u0275eld"](41, 0, null, null, 1, "button", [
                    ["class", "btn btn-square btn-info mb-1"]
                ], null, [
                    [null, "click"]
                ], function(n, l, e) {
                    var o = !0;
                    return "click" === l && (o = !1 !== t["\u0275nov"](n, 18).treeModel.focusDrillUp() && o), o
                }, null, null)), (n()(), t["\u0275ted"](-1, null, ["drill up"])), (n()(), t["\u0275eld"](43, 0, null, null, 1, "button", [
                    ["class", "btn btn-square btn-danger mb-1"]
                ], null, [
                    [null, "click"]
                ], function(n, l, e) {
                    var t = !0;
                    return "click" === l && (t = 0 != (n.component.customTemplateStringOptions.allowDrag = !0) && t), t
                }, null, null)), (n()(), t["\u0275ted"](-1, null, ["allowDrag"])), (n()(), t["\u0275eld"](45, 0, null, null, 0, "p", [], null, null, null, null, null)), (n()(), t["\u0275eld"](46, 0, null, null, 1, "button", [
                    ["class", "btn btn-square btn-secondary mb-1"]
                ], [
                    [8, "disabled", 0]
                ], [
                    [null, "click"]
                ], function(n, l, e) {
                    var o = !0;
                    return "click" === l && (o = !1 !== t["\u0275nov"](n, 18).treeModel.getFocusedNode().toggleActivated() && o), o
                }, null, null)), (n()(), t["\u0275ted"](47, null, [" ", " "])), (n()(), t["\u0275eld"](48, 0, null, null, 1, "button", [
                    ["class", "btn btn-square btn-secondary mb-1"]
                ], [
                    [8, "disabled", 0]
                ], [
                    [null, "click"]
                ], function(n, l, e) {
                    var o = !0;
                    return "click" === l && (o = !1 !== t["\u0275nov"](n, 18).treeModel.getFocusedNode().toggleExpanded() && o), o
                }, null, null)), (n()(), t["\u0275ted"](49, null, [" ", " "])), (n()(), t["\u0275eld"](50, 0, null, null, 1, "button", [
                    ["class", "btn btn-square btn-secondary mb-1"]
                ], [
                    [8, "disabled", 0]
                ], [
                    [null, "click"]
                ], function(n, l, e) {
                    var o = !0;
                    return "click" === l && (o = !1 !== t["\u0275nov"](n, 18).treeModel.getFocusedNode().blur() && o), o
                }, null, null)), (n()(), t["\u0275ted"](-1, null, ["blur"])), (n()(), t["\u0275eld"](52, 0, null, null, 1, "button", [
                    ["class", "btn btn-square btn-primary mb-1"]
                ], null, [
                    [null, "click"]
                ], function(n, l, e) {
                    var o = !0;
                    return "click" === l && (o = !1 !== n.component.addNode(t["\u0275nov"](n, 18)) && o), o
                }, null, null)), (n()(), t["\u0275ted"](-1, null, ["Add Node"])), (n()(), t["\u0275eld"](54, 0, null, null, 1, "button", [
                    ["class", "btn btn-square btn-success mb-1"]
                ], null, [
                    [null, "click"]
                ], function(n, l, e) {
                    var o = !0;
                    return "click" === l && (o = !1 !== n.component.activateSubSub(t["\u0275nov"](n, 18)) && o), o
                }, null, null)), (n()(), t["\u0275ted"](-1, null, ["Activate inner node"]))], function(n, l) {
                    var e = l.component;
                    n(l, 18, 0, e.nodes, e.customTemplateStringOptions, !0)
                }, function(n, l) {
                    var e, o;
                    n(l, 6, 0, t["\u0275nov"](l, 10).ngClassUntouched, t["\u0275nov"](l, 10).ngClassTouched, t["\u0275nov"](l, 10).ngClassPristine, t["\u0275nov"](l, 10).ngClassDirty, t["\u0275nov"](l, 10).ngClassValid, t["\u0275nov"](l, 10).ngClassInvalid, t["\u0275nov"](l, 10).ngClassPending), n(l, 46, 0, !t["\u0275nov"](l, 18).treeModel.getFocusedNode()), n(l, 47, 0, null != (e = t["\u0275nov"](l, 18).treeModel.getFocusedNode()) && e.isActive ? "deactivate" : "activate"), n(l, 48, 0, !t["\u0275nov"](l, 18).treeModel.getFocusedNode()), n(l, 49, 0, null != (o = t["\u0275nov"](l, 18).treeModel.getFocusedNode()) && o.isExpanded ? "collapse" : "expand"), n(l, 50, 0, !t["\u0275nov"](l, 18).treeModel.getFocusedNode())
                })
            }
            var Qu = t["\u0275ccf"]("ms-fulltree", Yu, function(n) {
                    return t["\u0275vid"](0, [(n()(), t["\u0275eld"](0, 0, null, null, 1, "ms-fulltree", [], [
                        [40, "@fadeInAnimation", 0]
                    ], null, null, Ju, Ku)), t["\u0275did"](1, 114688, null, 0, Yu, [i.a], null, null)], function(n, l) {
                        n(l, 1, 0)
                    }, function(n, l) {
                        n(l, 0, 0, !0)
                    })
                }, {}, {}, []),
                Xu = e("FO+L"),
                nr = e("ZYjt"),
                lr = e("nhM1"),
                er = e("BARL"),
                tr = e("S6T7"),
                or = e("F8xH"),
                ur = (Object.setPrototypeOf || Array, Object.setPrototypeOf || Array, Object.setPrototypeOf || Array, function() {
                    function n() {}
                    return n.forRoot = function() {
                        return {
                            ngModule: n,
                            providers: []
                        }
                    }, n
                }()),
                rr = e("ZYCi");
            e.d(l, "FormsDemoModuleNgFactory", function() {
                return ir
            });
            var ir = t["\u0275cmf"](o, [], function(n) {
                return t["\u0275mod"]([t["\u0275mpd"](512, t.ComponentFactoryResolver, t["\u0275CodegenComponentFactoryResolver"], [
                    [8, [u.a, c, g, W, _n, Dn, Qu]],
                    [3, t.ComponentFactoryResolver], t.NgModuleRef
                ]), t["\u0275mpd"](4608, m.NgLocalization, m.NgLocaleLocalization, [t.LOCALE_ID, [2, m["\u0275angular_packages_common_common_a"]]]), t["\u0275mpd"](4608, r["\u0275angular_packages_forms_forms_i"], r["\u0275angular_packages_forms_forms_i"], []), t["\u0275mpd"](4608, r.FormBuilder, r.FormBuilder, []), t["\u0275mpd"](4608, Xu.ScrollbarHelper, Xu.ScrollbarHelper, [nr.DOCUMENT]), t["\u0275mpd"](4608, lr.DimensionsHelper, lr.DimensionsHelper, []), t["\u0275mpd"](4608, er.ColumnChangesService, er.ColumnChangesService, []), t["\u0275mpd"](4608, Rn, Rn, []), t["\u0275mpd"](1073742336, m.CommonModule, m.CommonModule, []), t["\u0275mpd"](1073742336, r["\u0275angular_packages_forms_forms_bb"], r["\u0275angular_packages_forms_forms_bb"], []), t["\u0275mpd"](1073742336, r.FormsModule, r.FormsModule, []), t["\u0275mpd"](1073742336, r.ReactiveFormsModule, r.ReactiveFormsModule, []), t["\u0275mpd"](1073742336, tr.FileUploadModule, tr.FileUploadModule, []), t["\u0275mpd"](1073742336, or.NgxDatatableModule, or.NgxDatatableModule, []), t["\u0275mpd"](1073742336, xo, xo, []), t["\u0275mpd"](1073742336, qu, qu, []), t["\u0275mpd"](1073742336, ur, ur, []), t["\u0275mpd"](1073742336, rr.p, rr.p, [
                    [2, rr.v],
                    [2, rr.m]
                ]), t["\u0275mpd"](1073742336, o, o, []), t["\u0275mpd"](1024, rr.k, function() {
                    return [
                        [{
                            path: "",
                            redirectTo: "form-elements",
                            pathMatch: "full"
                        }, {
                            path: "",
                            children: [{
                                path: "form-elements",
                                component: a
                            }, {
                                path: "form-group",
                                component: p
                            }, {
                                path: "form-wizard",
                                component: H
                            }, {
                                path: "form-validation",
                                component: X
                            }, {
                                path: "form-upload",
                                component: wn
                            }, {
                                path: "form-tree",
                                component: Yu
                            }]
                        }]
                    ]
                }, [])])
            })
        },
        "7fqy": function(n, l) {
            n.exports = function(n) {
                var l = -1,
                    e = Array(n.size);
                return n.forEach(function(n, t) {
                    e[++l] = [t, n]
                }), e
            }
        },
        "7h4N": function(n, l, e) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            });
            var t = e("CcnG"),
                o = e("gIcY"),
                u = e("N2oW"),
                r = {
                    provide: o.NG_VALIDATORS,
                    useExisting: t.forwardRef(function() {
                        return i
                    }),
                    multi: !0
                },
                i = function() {
                    function n() {}
                    return n.prototype.ngOnInit = function() {
                        this.validator = u.max(this.max)
                    }, n.prototype.ngOnChanges = function(n) {
                        for (var l in n) "max" === l && (this.validator = u.max(n[l].currentValue), this.onChange && this.onChange())
                    }, n.prototype.validate = function(n) {
                        return this.validator(n)
                    }, n.prototype.registerOnValidatorChange = function(n) {
                        this.onChange = n
                    }, n.decorators = [{
                        type: t.Directive,
                        args: [{
                            selector: "[max][formControlName],[max][formControl],[max][ngModel]",
                            providers: [r]
                        }]
                    }], n.propDecorators = {
                        max: [{
                            type: t.Input
                        }]
                    }, n
                }();
            l.MaxValidator = i
        },
        "7yqV": function(n, l, e) {
            "use strict";

            function t(n) {
                for (var e in n) l.hasOwnProperty(e) || (l[e] = n[e])
            }
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), t(e("wrUr")), t(e("3ELE"))
        },
        "88Gu": function(n, l) {
            var e = Date.now;
            n.exports = function(n) {
                var l = 0,
                    t = 0;
                return function() {
                    var o = e(),
                        u = 16 - (o - t);
                    if (t = o, u > 0) {
                        if (++l >= 800) return arguments[0]
                    } else l = 0;
                    return n.apply(void 0, arguments)
                }
            }
        },
        "8r50": function(n, l, e) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            });
            var t = e("CcnG"),
                o = e("gIcY"),
                u = e("t1MI"),
                r = {
                    provide: o.NG_VALIDATORS,
                    useExisting: t.forwardRef(function() {
                        return i
                    }),
                    multi: !0
                },
                i = function() {
                    function n() {}
                    return n.prototype.validate = function(n) {
                        return u.url(n)
                    }, n.decorators = [{
                        type: t.Directive,
                        args: [{
                            selector: "[url][formControlName],[url][formControl],[url][ngModel]",
                            providers: [r]
                        }]
                    }], n
                }();
            l.UrlValidator = i
        },
        "93I4": function(n, l) {
            n.exports = function(n) {
                return "object" == typeof n ? null !== n : "function" == typeof n
            }
        },
        "9Nap": function(n, l, e) {
            var t = e("/9aa");
            n.exports = function(n) {
                if ("string" == typeof n || t(n)) return n;
                var l = n + "";
                return "0" == l && 1 / n == -1 / 0 ? "-0" : l
            }
        },
        "9eTs": function(n, l, e) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), l.equalTo = function(n) {
                var l = !1;
                return function(e) {
                    return l || (l = !0, n.valueChanges.subscribe(function() {
                        e.updateValueAndValidity()
                    })), n.value === e.value ? null : {
                        equalTo: !0
                    }
                }
            }
        },
        "9ggG": function(n, l, e) {
            var t = e("Z0cm"),
                o = e("/9aa"),
                u = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                r = /^\w*$/;
            n.exports = function(n, l) {
                if (t(n)) return !1;
                var e = typeof n;
                return !("number" != e && "symbol" != e && "boolean" != e && null != n && !o(n)) || r.test(n) || !u.test(n) || null != l && n in Object(l)
            }
        },
        A90E: function(n, l, e) {
            var t = e("6sVZ"),
                o = e("V6Ve"),
                u = Object.prototype.hasOwnProperty;
            n.exports = function(n) {
                if (!t(n)) return o(n);
                var l = [];
                for (var e in Object(n)) u.call(n, e) && "constructor" != e && l.push(e);
                return l
            }
        },
        AHKl: function(n, l, e) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            });
            var t = e("CcnG"),
                o = e("gIcY"),
                u = e("2Gh/"),
                r = {
                    provide: o.NG_VALIDATORS,
                    useExisting: t.forwardRef(function() {
                        return i
                    }),
                    multi: !0
                },
                i = function() {
                    function n() {}
                    return n.prototype.ngOnInit = function() {
                        this.validator = u.uuid(this.uuid)
                    }, n.prototype.ngOnChanges = function(n) {
                        for (var l in n) "uuid" === l && (this.validator = u.uuid(n[l].currentValue), this.onChange && this.onChange())
                    }, n.prototype.validate = function(n) {
                        return this.validator(n)
                    }, n.prototype.registerOnValidatorChange = function(n) {
                        this.onChange = n
                    }, n.decorators = [{
                        type: t.Directive,
                        args: [{
                            selector: "[uuid][formControlName],[uuid][formControl],[uuid][ngModel]",
                            providers: [r]
                        }]
                    }], n.propDecorators = {
                        uuid: [{
                            type: t.Input
                        }]
                    }, n
                }();
            l.UUIDValidator = i
        },
        AP2z: function(n, l, e) {
            var t = e("nmnc"),
                o = Object.prototype,
                u = o.hasOwnProperty,
                r = o.toString,
                i = t ? t.toStringTag : void 0;
            n.exports = function(n) {
                var l = u.call(n, i),
                    e = n[i];
                try {
                    n[i] = void 0;
                    var t = !0
                } catch (n) {}
                var o = r.call(n);
                return t && (l ? n[i] = e : delete n[i]), o
            }
        },
        "B+OT": function(n, l) {
            var e = {}.hasOwnProperty;
            n.exports = function(n, l) {
                return e.call(n, l)
            }
        },
        B8du: function(n, l) {
            n.exports = function() {
                return !1
            }
        },
        BiGR: function(n, l, e) {
            var t = e("nmnc"),
                o = e("03A+"),
                u = e("Z0cm"),
                r = t ? t.isConcatSpreadable : void 0;
            n.exports = function(n) {
                return u(n) || o(n) || !!(r && n && n[r])
            }
        },
        CH3K: function(n, l) {
            n.exports = function(n, l) {
                for (var e = -1, t = l.length, o = n.length; ++e < t;) n[o + e] = l[e];
                return n
            }
        },
        CMye: function(n, l, e) {
            var t = e("GoyQ");
            n.exports = function(n) {
                return n == n && !t(n)
            }
        },
        COG4: function(n, l, e) {
            "use strict";

            function t(n) {
                for (var e in n) l.hasOwnProperty(e) || (l[e] = n[e])
            }
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), t(e("+Vid")), t(e("VBAv"))
        },
        CSYt: function(n, l, e) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            });
            var t = e("gIcY"),
                o = e("m9Vx");
            l.range = function(n) {
                return function(l) {
                    if (!o.isPresent(n)) return null;
                    if (o.isPresent(t.Validators.required(l))) return null;
                    var e = +l.value;
                    return e >= n[0] && e <= n[1] ? null : {
                        actualValue: e,
                        requiredValue: n,
                        range: !0
                    }
                }
            }
        },
        CZoQ: function(n, l) {
            n.exports = function(n, l, e) {
                for (var t = e - 1, o = n.length; ++t < o;)
                    if (n[t] === l) return t;
                return -1
            }
        },
        Cwc5: function(n, l, e) {
            var t = e("NKxu"),
                o = e("Npjl");
            n.exports = function(n, l) {
                var e = o(n, l);
                return t(e) ? e : void 0
            }
        },
        D8kY: function(n, l, e) {
            var t = e("Ojgd"),
                o = Math.max,
                u = Math.min;
            n.exports = function(n, l) {
                return (n = t(n)) < 0 ? o(n + l, 0) : u(n, l)
            }
        },
        DSRE: function(n, l, e) {
            (function(n) {
                var t = e("Kz5y"),
                    o = e("B8du"),
                    u = "object" == typeof l && l && !l.nodeType && l,
                    r = u && "object" == typeof n && n && !n.nodeType && n,
                    i = r && r.exports === u ? t.Buffer : void 0;
                n.exports = (i ? i.isBuffer : void 0) || o
            }).call(this, e("YuTi")(n))
        },
        "Dw+G": function(n, l, e) {
            var t = e("juv8"),
                o = e("mTTR");
            n.exports = function(n, l) {
                return n && t(l, o(l), n)
            }
        },
        DzJC: function(n, l, e) {
            var t = e("sEfC"),
                o = e("GoyQ");
            n.exports = function(n, l, e) {
                var u = !0,
                    r = !0;
                if ("function" != typeof n) throw new TypeError("Expected a function");
                return o(e) && (u = "leading" in e ? !!e.leading : u, r = "trailing" in e ? !!e.trailing : r), t(n, l, {
                    leading: u,
                    maxWait: l,
                    trailing: r
                })
            }
        },
        E2jh: function(n, l, e) {
            var t, o = e("2gN3"),
                u = (t = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "")) ? "Symbol(src)_1." + t : "";
            n.exports = function(n) {
                return !!u && u in n
            }
        },
        EA7m: function(n, l, e) {
            var t = e("zZ0H"),
                o = e("Ioao"),
                u = e("wclG");
            n.exports = function(n, l) {
                return u(o(n, l, t), n + "")
            }
        },
        EEGq: function(n, l, e) {
            var t = e("juv8"),
                o = e("oCl/");
            n.exports = function(n, l) {
                return t(n, o(n), l)
            }
        },
        EpBk: function(n, l) {
            n.exports = function(n) {
                var l = typeof n;
                return "string" == l || "number" == l || "symbol" == l || "boolean" == l ? "__proto__" !== n : null === n
            }
        },
        ExA7: function(n, l) {
            n.exports = function(n) {
                return null != n && "object" == typeof n
            }
        },
        F2og: function(n, l, e) {
            "use strict";

            function t(n) {
                for (var e in n) l.hasOwnProperty(e) || (l[e] = n[e])
            }
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), t(e("gK5f")), t(e("+W5N"))
        },
        FZoo: function(n, l, e) {
            var t = e("MrPd"),
                o = e("4uTw"),
                u = e("wJg7"),
                r = e("GoyQ"),
                i = e("9Nap");
            n.exports = function(n, l, e, a) {
                if (!r(n)) return n;
                for (var d = -1, s = (l = o(l, n)).length, c = s - 1, p = n; null != p && ++d < s;) {
                    var f = i(l[d]),
                        h = e;
                    if (d != c) {
                        var g = p[f];
                        void 0 === (h = a ? a(g, f, p) : void 0) && (h = r(g) ? g : u(l[d + 1]) ? [] : {})
                    }
                    t(p, f, h), p = p[f]
                }
                return n
            }
        },
        FfPP: function(n, l, e) {
            var t = e("idmN"),
                o = e("hgQt");
            n.exports = function(n, l) {
                return t(n, l, function(l, e) {
                    return o(n, e)
                })
            }
        },
        FlQf: function(n, l, e) {
            "use strict";
            var t = e("ccE7")(!0);
            e("MPFp")(String, "String", function(n) {
                this._t = String(n), this._i = 0
            }, function() {
                var n, l = this._t,
                    e = this._i;
                return e >= l.length ? {
                    value: void 0,
                    done: !0
                } : (n = t(l, e), this._i += n.length, {
                    value: n,
                    done: !1
                })
            })
        },
        FpHa: function(n, l) {
            n.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
        },
        FyfS: function(n, l, e) {
            n.exports = {
                default: e("Rp86"),
                __esModule: !0
            }
        },
        G6z8: function(n, l, e) {
            var t = e("fR/l"),
                o = e("oCl/"),
                u = e("mTTR");
            n.exports = function(n) {
                return t(n, u, o)
            }
        },
        G8Mo: function(n, l, e) {
            var t = e("93I4");
            n.exports = function(n, l) {
                if (!t(n)) return n;
                var e, o;
                if (l && "function" == typeof(e = n.toString) && !t(o = e.call(n))) return o;
                if ("function" == typeof(e = n.valueOf) && !t(o = e.call(n))) return o;
                if (!l && "function" == typeof(e = n.toString) && !t(o = e.call(n))) return o;
                throw TypeError("Can't convert object to primitive value")
            }
        },
        GDhZ: function(n, l, e) {
            var t = e("wF/u"),
                o = e("mwIZ"),
                u = e("hgQt"),
                r = e("9ggG"),
                i = e("CMye"),
                a = e("IOzZ"),
                d = e("9Nap");
            n.exports = function(n, l) {
                return r(n) && i(l) ? a(d(n), l) : function(e) {
                    var r = o(e, n);
                    return void 0 === r && r === l ? u(e, n) : t(l, r, 3)
                }
            }
        },
        GNiM: function(n, l, e) {
            var t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                o = /\\(\\)?/g,
                u = e("I01J")(function(n) {
                    var l = [];
                    return 46 === n.charCodeAt(0) && l.push(""), n.replace(t, function(n, e, t, u) {
                        l.push(t ? u.replace(o, "$1") : e || n)
                    }), l
                });
            n.exports = u
        },
        Gi0A: function(n, l, e) {
            var t = e("QqLw"),
                o = e("ExA7");
            n.exports = function(n) {
                return o(n) && "[object Map]" == t(n)
            }
        },
        GoyQ: function(n, l) {
            n.exports = function(n) {
                var l = typeof n;
                return null != n && ("object" == l || "function" == l)
            }
        },
        H0h1: function(n, l, e) {
            var t = e("SKAX");
            n.exports = function(n, l) {
                var e = !0;
                return t(n, function(n, t, o) {
                    return e = !!l(n, t, o)
                }), e
            }
        },
        H8j4: function(n, l, e) {
            var t = e("QkVE");
            n.exports = function(n, l) {
                var e = t(this, n),
                    o = e.size;
                return e.set(n, l), this.size += e.size == o ? 0 : 1, this
            }
        },
        HDyB: function(n, l, e) {
            var t = e("nmnc"),
                o = e("JHRd"),
                u = e("ljhN"),
                r = e("or5M"),
                i = e("7fqy"),
                a = e("rEGp"),
                d = t ? t.prototype : void 0,
                s = d ? d.valueOf : void 0;
            n.exports = function(n, l, e, t, d, c, p) {
                switch (e) {
                    case "[object DataView]":
                        if (n.byteLength != l.byteLength || n.byteOffset != l.byteOffset) return !1;
                        n = n.buffer, l = l.buffer;
                    case "[object ArrayBuffer]":
                        return !(n.byteLength != l.byteLength || !c(new o(n), new o(l)));
                    case "[object Boolean]":
                    case "[object Date]":
                    case "[object Number]":
                        return u(+n, +l);
                    case "[object Error]":
                        return n.name == l.name && n.message == l.message;
                    case "[object RegExp]":
                    case "[object String]":
                        return n == l + "";
                    case "[object Map]":
                        var f = i;
                    case "[object Set]":
                        if (f || (f = a), n.size != l.size && !(1 & t)) return !1;
                        var h = p.get(n);
                        if (h) return h == l;
                        t |= 2, p.set(n, l);
                        var g = r(f(n), f(l), t, d, c, p);
                        return p.delete(n), g;
                    case "[object Symbol]":
                        if (s) return s.call(n) == s.call(l)
                }
                return !1
            }
        },
        HHWU: function(n, l, e) {
            "use strict";

            function t(n) {
                for (var e in n) l.hasOwnProperty(e) || (l[e] = n[e])
            }
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), t(e("NGZV")), t(e("m/yT"))
        },
        "HHX+": function(n, l, e) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            });
            var t = e("gIcY"),
                o = e("m9Vx");
            l.max = function(n) {
                return function(l) {
                    if (!o.isPresent(n)) return null;
                    if (o.isPresent(t.Validators.required(l))) return null;
                    var e = +l.value;
                    return e <= +n ? null : {
                        actualValue: e,
                        requiredValue: +n,
                        max: !0
                    }
                }
            }
        },
        HOxn: function(n, l, e) {
            var t = e("Cwc5")(e("Kz5y"), "Promise");
            n.exports = t
        },
        HT6E: function(n, l, e) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            });
            var t = e("CcnG"),
                o = e("gIcY"),
                u = e("r0XH"),
                r = {
                    provide: o.NG_VALIDATORS,
                    useExisting: t.forwardRef(function() {
                        return i
                    }),
                    multi: !0
                },
                i = function() {
                    function n() {}
                    return n.prototype.validate = function(n) {
                        return u.number(n)
                    }, n.decorators = [{
                        type: t.Directive,
                        args: [{
                            selector: "[number][formControlName],[number][formControl],[number][ngModel]",
                            providers: [r]
                        }]
                    }], n
                }();
            l.NumberValidator = i
        },
        HatN: function(n, l, e) {
            "use strict";

            function t(n) {
                for (var e in n) l.hasOwnProperty(e) || (l[e] = n[e])
            }
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), t(e("Lh+v")), t(e("inIq"))
        },
        Hsns: function(n, l, e) {
            var t = e("93I4"),
                o = e("5T2Y").document,
                u = t(o) && t(o.createElement);
            n.exports = function(n) {
                return u ? o.createElement(n) : {}
            }
        },
        Hvzi: function(n, l) {
            n.exports = function(n) {
                var l = this.has(n) && delete this.__data__[n];
                return this.size -= l ? 1 : 0, l
            }
        },
        I01J: function(n, l, e) {
            var t = e("44Ds");
            n.exports = function(n) {
                var l = t(n, function(n) {
                        return 500 === e.size && e.clear(), n
                    }),
                    e = l.cache;
                return l
            }
        },
        IOzZ: function(n, l) {
            n.exports = function(n, l) {
                return function(e) {
                    return null != e && e[n] === l && (void 0 !== l || n in Object(e))
                }
            }
        },
        Ioao: function(n, l, e) {
            var t = e("heNW"),
                o = Math.max;
            n.exports = function(n, l, e) {
                return l = o(void 0 === l ? n.length - 1 : l, 0),
                    function() {
                        for (var u = arguments, r = -1, i = o(u.length - l, 0), a = Array(i); ++r < i;) a[r] = u[l + r];
                        r = -1;
                        for (var d = Array(l + 1); ++r < l;) d[r] = u[r];
                        return d[l] = e(a), t(n, this, d)
                    }
            }
        },
        IvtZ: function(n, l, e) {
            "use strict";

            function t(n) {
                for (var e in n) l.hasOwnProperty(e) || (l[e] = n[e])
            }
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), t(e("c34Q")), t(e("h9za"))
        },
        J2m7: function(n, l, e) {
            var t = e("XKAG")(e("UfWW"));
            n.exports = t
        },
        JB68: function(n, l, e) {
            var t = e("Jes0");
            n.exports = function(n) {
                return Object(t(n))
            }
        },
        JBE3: function(n, l, e) {
            var t = e("+Qka"),
                o = e("LsHQ")(function(n, l, e, o) {
                    t(n, l, e, o)
                });
            n.exports = o
        },
        JC6p: function(n, l, e) {
            var t = e("cq/+"),
                o = e("7GkX");
            n.exports = function(n, l) {
                return n && t(n, l, o)
            }
        },
        JHRd: function(n, l, e) {
            var t = e("Kz5y");
            n.exports = t.Uint8Array
        },
        JHgL: function(n, l, e) {
            var t = e("QkVE");
            n.exports = function(n) {
                return t(this, n).get(n)
            }
        },
        JSQU: function(n, l, e) {
            var t = e("YESw");
            n.exports = function(n, l) {
                var e = this.__data__;
                return this.size += this.has(n) ? 0 : 1, e[n] = t && void 0 === l ? "__lodash_hash_undefined__" : l, this
            }
        },
        JTzB: function(n, l, e) {
            var t = e("NykK"),
                o = e("ExA7");
            n.exports = function(n) {
                return o(n) && "[object Arguments]" == t(n)
            }
        },
        JZM8: function(n, l, e) {
            var t = e("FfPP"),
                o = e("xs/l")(function(n, l) {
                    return null == n ? {} : t(n, l)
                });
            n.exports = o
        },
        JdLL: function(n, l, e) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            });
            var t = e("CcnG"),
                o = e("vdN6"),
                u = e("yak4"),
                r = e("pvmI"),
                i = e("pXYb"),
                a = e("COG4"),
                d = e("HHWU"),
                s = e("HatN"),
                c = e("ghU1"),
                p = e("7yqV"),
                f = e("5YF4"),
                h = e("jl4B"),
                g = e("rKjJ"),
                m = e("NCDA"),
                v = e("N2oW"),
                b = e("S8xG"),
                y = e("cI4K"),
                $ = e("Sm/R"),
                _ = e("15yF"),
                x = e("3+at"),
                O = e("r0XH"),
                C = e("F2og"),
                w = e("Tm9b"),
                S = e("IvtZ"),
                E = e("t1MI"),
                P = e("2Gh/");
            l.CustomValidators = {
                base64: o.base64,
                creditCard: u.creditCard,
                date: r.date,
                dateISO: i.dateISO,
                digits: a.digits,
                email: d.email,
                equal: s.equal,
                equalTo: c.equalTo,
                gt: p.gt,
                gte: f.gte,
                json: h.json,
                lt: g.lt,
                lte: m.lte,
                max: v.max,
                maxDate: b.maxDate,
                min: y.min,
                minDate: $.minDate,
                notEqual: _.notEqual,
                notEqualTo: x.notEqualTo,
                number: O.number,
                phone: C.phone,
                range: w.range,
                rangeLength: S.rangeLength,
                url: E.url,
                uuid: P.uuid
            };
            var M = [o.Base64Validator, u.CreditCardValidator, r.DateValidator, i.DateISOValidator, a.DigitsValidator, d.EmailValidator, s.EqualValidator, c.EqualToValidator, p.GreaterThanValidator, f.GreaterThanEqualValidator, h.JSONValidator, g.LessThanValidator, m.LessThanEqualValidator, v.MaxValidator, b.MaxDateValidator, y.MinValidator, $.MinDateValidator, _.NotEqualValidator, x.NotEqualToValidator, O.NumberValidator, C.PhoneValidator, w.RangeValidator, S.RangeLengthValidator, E.UrlValidator, P.UUIDValidator];
            l.CustomFormsModule = function() {
                function n() {}
                return n.decorators = [{
                    type: t.NgModule,
                    args: [{
                        declarations: [M],
                        exports: [M]
                    }]
                }], n
            }()
        },
        Jes0: function(n, l) {
            n.exports = function(n) {
                if (void 0 == n) throw TypeError("Can't call method on  " + n);
                return n
            }
        },
        Jlc5: function(n, l, e) {
            var t = e("ZirO"),
                o = e("H0h1"),
                u = e("ut/Y"),
                r = e("Z0cm"),
                i = e("mv/X");
            n.exports = function(n, l, e) {
                var a = r(n) ? t : o;
                return e && i(n, l, e) && (l = void 0), a(n, u(l, 3))
            }
        },
        JmpY: function(n, l, e) {
            var t = e("eUgh");
            n.exports = function(n, l) {
                return t(l, function(l) {
                    return n[l]
                })
            }
        },
        Juji: function(n, l) {
            n.exports = function(n, l) {
                return null != n && l in Object(n)
            }
        },
        KKCa: function(n, l) {
            n.exports = "function" == typeof Object.create ? function(n, l) {
                n.super_ = l, n.prototype = Object.create(l.prototype, {
                    constructor: {
                        value: n,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })
            } : function(n, l) {
                n.super_ = l;
                var e = function() {};
                e.prototype = l.prototype, n.prototype = new e, n.prototype.constructor = n
            }
        },
        KMkd: function(n, l) {
            n.exports = function() {
                this.__data__ = [], this.size = 0
            }
        },
        KNBz: function(n, l, e) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            });
            var t = e("gIcY"),
                o = e("m9Vx");
            l.number = function(n) {
                return o.isPresent(t.Validators.required(n)) ? null : /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(n.value) ? null : {
                    number: !0
                }
            }
        },
        KTXt: function(n, l, e) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            });
            var t = e("gIcY"),
                o = e("m9Vx");
            l.creditCard = function(n) {
                if (o.isPresent(t.Validators.required(n))) return null;
                var l = n.value.replace(/[^0-9]+/g, "");
                if (!/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/.test(l)) return {
                    creditCard: !0
                };
                for (var e, u, r, i = 0, a = l.length - 1; a >= 0; a--) e = l.substring(a, a + 1), u = parseInt(e, 10), i += r && (u *= 2) >= 10 ? u % 10 + 1 : u, r = !r;
                return Boolean(i % 10 == 0 && l) ? null : {
                    creditCard: !0
                }
            }
        },
        KUxP: function(n, l) {
            n.exports = function(n) {
                try {
                    return !!n()
                } catch (n) {
                    return !0
                }
            }
        },
        KfNM: function(n, l) {
            var e = Object.prototype.toString;
            n.exports = function(n) {
                return e.call(n)
            }
        },
        KwMD: function(n, l) {
            n.exports = function(n, l, e, t) {
                for (var o = n.length, u = e + (t ? 1 : -1); t ? u-- : ++u < o;)
                    if (l(n[u], u, n)) return u;
                return -1
            }
        },
        KxBF: function(n, l) {
            n.exports = function(n, l, e) {
                var t = -1,
                    o = n.length;
                l < 0 && (l = -l > o ? 0 : o + l), (e = e > o ? o : e) < 0 && (e += o), o = l > e ? 0 : e - l >>> 0, l >>>= 0;
                for (var u = Array(o); ++t < o;) u[t] = n[t + l];
                return u
            }
        },
        Kz5y: function(n, l, e) {
            var t = e("WFqU"),
                o = "object" == typeof self && self && self.Object === Object && self,
                u = t || o || Function("return this")();
            n.exports = u
        },
        L8xA: function(n, l) {
            n.exports = function(n) {
                var l = this.__data__,
                    e = l.delete(n);
                return this.size = l.size, e
            }
        },
        LXxW: function(n, l) {
            n.exports = function(n, l) {
                for (var e = -1, t = null == n ? 0 : n.length, o = 0, u = []; ++e < t;) {
                    var r = n[e];
                    l(r, e, n) && (u[o++] = r)
                }
                return u
            }
        },
        LcsW: function(n, l, e) {
            var t = e("kekF")(Object.getPrototypeOf, Object);
            n.exports = t
        },
        "Lh+v": function(n, l, e) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            });
            var t = e("CcnG"),
                o = e("gIcY"),
                u = e("HatN"),
                r = {
                    provide: o.NG_VALIDATORS,
                    useExisting: t.forwardRef(function() {
                        return i
                    }),
                    multi: !0
                },
                i = function() {
                    function n() {}
                    return n.prototype.ngOnInit = function() {
                        this.validator = u.equal(this.equal)
                    }, n.prototype.ngOnChanges = function(n) {
                        for (var l in n) "equal" === l && (this.validator = u.equal(n[l].currentValue), this.onChange && this.onChange())
                    }, n.prototype.validate = function(n) {
                        return this.validator(n)
                    }, n.prototype.registerOnValidatorChange = function(n) {
                        this.onChange = n
                    }, n.decorators = [{
                        type: t.Directive,
                        args: [{
                            selector: "[equal][formControlName],[equal][formControl],[equal][ngModel]",
                            providers: [r]
                        }]
                    }], n.propDecorators = {
                        equal: [{
                            type: t.Input
                        }]
                    }, n
                }();
            l.EqualValidator = i
        },
        LsHQ: function(n, l, e) {
            var t = e("EA7m"),
                o = e("mv/X");
            n.exports = function(n) {
                return t(function(l, e) {
                    var t = -1,
                        u = e.length,
                        r = u > 1 ? e[u - 1] : void 0,
                        i = u > 2 ? e[2] : void 0;
                    for (r = n.length > 3 && "function" == typeof r ? (u--, r) : void 0, i && o(e[0], e[1], i) && (r = u < 3 ? void 0 : r, u = 1), l = Object(l); ++t < u;) {
                        var a = e[t];
                        a && n(l, a, t, r)
                    }
                    return l
                })
            }
        },
        M1xp: function(n, l, e) {
            var t = e("a0xu");
            n.exports = Object("z").propertyIsEnumerable(0) ? Object : function(n) {
                return "String" == t(n) ? n.split("") : Object(n)
            }
        },
        MCLT: function(n, l, e) {
            var t = /%[sdj%]/g;
            l.format = function(n) {
                if (!m(n)) {
                    for (var l = [], e = 0; e < arguments.length; e++) l.push(r(arguments[e]));
                    return l.join(" ")
                }
                e = 1;
                for (var o = arguments, u = o.length, i = String(n).replace(t, function(n) {
                        if ("%%" === n) return "%";
                        if (e >= u) return n;
                        switch (n) {
                            case "%s":
                                return String(o[e++]);
                            case "%d":
                                return Number(o[e++]);
                            case "%j":
                                try {
                                    return JSON.stringify(o[e++])
                                } catch (n) {
                                    return "[Circular]"
                                }
                            default:
                                return n
                        }
                    }), a = o[e]; e < u; a = o[++e]) h(a) || !y(a) ? i += " " + a : i += " " + r(a);
                return i
            }, l.deprecate = function(n, e) {
                if (v(global.process)) return function() {
                    return l.deprecate(n, e).apply(this, arguments)
                };
                if (!0 === process.noDeprecation) return n;
                var t = !1;
                return function() {
                    if (!t) {
                        if (process.throwDeprecation) throw new Error(e);
                        process.traceDeprecation ? console.trace(e) : console.error(e), t = !0
                    }
                    return n.apply(this, arguments)
                }
            };
            var o, u = {};

            function r(n, e) {
                var t = {
                    seen: [],
                    stylize: a
                };
                return arguments.length >= 3 && (t.depth = arguments[2]), arguments.length >= 4 && (t.colors = arguments[3]), f(e) ? t.showHidden = e : e && l._extend(t, e), v(t.showHidden) && (t.showHidden = !1), v(t.depth) && (t.depth = 2), v(t.colors) && (t.colors = !1), v(t.customInspect) && (t.customInspect = !0), t.colors && (t.stylize = i), d(t, n, t.depth)
            }

            function i(n, l) {
                var e = r.styles[l];
                return e ? "\x1b[" + r.colors[e][0] + "m" + n + "\x1b[" + r.colors[e][1] + "m" : n
            }

            function a(n, l) {
                return n
            }

            function d(n, e, t) {
                if (n.customInspect && e && x(e.inspect) && e.inspect !== l.inspect && (!e.constructor || e.constructor.prototype !== e)) {
                    var o = e.inspect(t, n);
                    return m(o) || (o = d(n, o, t)), o
                }
                var u = function(n, l) {
                    if (v(l)) return n.stylize("undefined", "undefined");
                    if (m(l)) {
                        var e = "'" + JSON.stringify(l).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                        return n.stylize(e, "string")
                    }
                    return g(l) ? n.stylize("" + l, "number") : f(l) ? n.stylize("" + l, "boolean") : h(l) ? n.stylize("null", "null") : void 0
                }(n, e);
                if (u) return u;
                var r, i = Object.keys(e),
                    a = (r = {}, i.forEach(function(n, l) {
                        r[n] = !0
                    }), r);
                if (n.showHidden && (i = Object.getOwnPropertyNames(e)), _(e) && (i.indexOf("message") >= 0 || i.indexOf("description") >= 0)) return s(e);
                if (0 === i.length) {
                    if (x(e)) return n.stylize("[Function" + (e.name ? ": " + e.name : "") + "]", "special");
                    if (b(e)) return n.stylize(RegExp.prototype.toString.call(e), "regexp");
                    if ($(e)) return n.stylize(Date.prototype.toString.call(e), "date");
                    if (_(e)) return s(e)
                }
                var y, O = "",
                    C = !1,
                    w = ["{", "}"];
                return p(e) && (C = !0, w = ["[", "]"]), x(e) && (O = " [Function" + (e.name ? ": " + e.name : "") + "]"), b(e) && (O = " " + RegExp.prototype.toString.call(e)), $(e) && (O = " " + Date.prototype.toUTCString.call(e)), _(e) && (O = " " + s(e)), 0 !== i.length || C && 0 != e.length ? t < 0 ? b(e) ? n.stylize(RegExp.prototype.toString.call(e), "regexp") : n.stylize("[Object]", "special") : (n.seen.push(e), y = C ? function(n, l, e, t, o) {
                    for (var u = [], r = 0, i = l.length; r < i; ++r) S(l, String(r)) ? u.push(c(n, l, e, t, String(r), !0)) : u.push("");
                    return o.forEach(function(o) {
                        o.match(/^\d+$/) || u.push(c(n, l, e, t, o, !0))
                    }), u
                }(n, e, t, a, i) : i.map(function(l) {
                    return c(n, e, t, a, l, C)
                }), n.seen.pop(), function(n, l, e) {
                    return n.reduce(function(n, l) {
                        return l.indexOf("\n"), n + l.replace(/\u001b\[\d\d?m/g, "").length + 1
                    }, 0) > 60 ? e[0] + ("" === l ? "" : l + "\n ") + " " + n.join(",\n  ") + " " + e[1] : e[0] + l + " " + n.join(", ") + " " + e[1]
                }(y, O, w)) : w[0] + O + w[1]
            }

            function s(n) {
                return "[" + Error.prototype.toString.call(n) + "]"
            }

            function c(n, l, e, t, o, u) {
                var r, i, a;
                if ((a = Object.getOwnPropertyDescriptor(l, o) || {
                        value: l[o]
                    }).get ? i = n.stylize(a.set ? "[Getter/Setter]" : "[Getter]", "special") : a.set && (i = n.stylize("[Setter]", "special")), S(t, o) || (r = "[" + o + "]"), i || (n.seen.indexOf(a.value) < 0 ? (i = h(e) ? d(n, a.value, null) : d(n, a.value, e - 1)).indexOf("\n") > -1 && (i = u ? i.split("\n").map(function(n) {
                        return "  " + n
                    }).join("\n").substr(2) : "\n" + i.split("\n").map(function(n) {
                        return "   " + n
                    }).join("\n")) : i = n.stylize("[Circular]", "special")), v(r)) {
                    if (u && o.match(/^\d+$/)) return i;
                    (r = JSON.stringify("" + o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (r = r.substr(1, r.length - 2), r = n.stylize(r, "name")) : (r = r.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), r = n.stylize(r, "string"))
                }
                return r + ": " + i
            }

            function p(n) {
                return Array.isArray(n)
            }

            function f(n) {
                return "boolean" == typeof n
            }

            function h(n) {
                return null === n
            }

            function g(n) {
                return "number" == typeof n
            }

            function m(n) {
                return "string" == typeof n
            }

            function v(n) {
                return void 0 === n
            }

            function b(n) {
                return y(n) && "[object RegExp]" === O(n)
            }

            function y(n) {
                return "object" == typeof n && null !== n
            }

            function $(n) {
                return y(n) && "[object Date]" === O(n)
            }

            function _(n) {
                return y(n) && ("[object Error]" === O(n) || n instanceof Error)
            }

            function x(n) {
                return "function" == typeof n
            }

            function O(n) {
                return Object.prototype.toString.call(n)
            }

            function C(n) {
                return n < 10 ? "0" + n.toString(10) : n.toString(10)
            }
            l.debuglog = function(n) {
                if (v(o) && (o = process.env.NODE_DEBUG || ""), n = n.toUpperCase(), !u[n])
                    if (new RegExp("\\b" + n + "\\b", "i").test(o)) {
                        var e = process.pid;
                        u[n] = function() {
                            var t = l.format.apply(l, arguments);
                            console.error("%s %d: %s", n, e, t)
                        }
                    } else u[n] = function() {};
                return u[n]
            }, l.inspect = r, r.colors = {
                bold: [1, 22],
                italic: [3, 23],
                underline: [4, 24],
                inverse: [7, 27],
                white: [37, 39],
                grey: [90, 39],
                black: [30, 39],
                blue: [34, 39],
                cyan: [36, 39],
                green: [32, 39],
                magenta: [35, 39],
                red: [31, 39],
                yellow: [33, 39]
            }, r.styles = {
                special: "cyan",
                number: "yellow",
                boolean: "yellow",
                undefined: "grey",
                null: "bold",
                string: "green",
                date: "magenta",
                regexp: "red"
            }, l.isArray = p, l.isBoolean = f, l.isNull = h, l.isNullOrUndefined = function(n) {
                return null == n
            }, l.isNumber = g, l.isString = m, l.isSymbol = function(n) {
                return "symbol" == typeof n
            }, l.isUndefined = v, l.isRegExp = b, l.isObject = y, l.isDate = $, l.isError = _, l.isFunction = x, l.isPrimitive = function(n) {
                return null === n || "boolean" == typeof n || "number" == typeof n || "string" == typeof n || "symbol" == typeof n || void 0 === n
            }, l.isBuffer = e("1gqn");
            var w = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

            function S(n, l) {
                return Object.prototype.hasOwnProperty.call(n, l)
            }
            l.log = function() {
                var n, e;
                console.log("%s - %s", (e = [C((n = new Date).getHours()), C(n.getMinutes()), C(n.getSeconds())].join(":"), [n.getDate(), w[n.getMonth()], e].join(" ")), l.format.apply(l, arguments))
            }, l.inherits = e("KKCa"), l._extend = function(n, l) {
                if (!l || !y(l)) return n;
                for (var e = Object.keys(l), t = e.length; t--;) n[e[t]] = l[e[t]];
                return n
            }
        },
        MJIl: function(n, l, e) {
            var t = e("QoRX"),
                o = e("ut/Y"),
                u = e("Nh2a"),
                r = e("Z0cm"),
                i = e("mv/X");
            n.exports = function(n, l, e) {
                var a = r(n) ? t : u;
                return e && i(n, l, e) && (l = void 0), a(n, o(l, 3))
            }
        },
        MMmD: function(n, l, e) {
            var t = e("lSCD"),
                o = e("shjB");
            n.exports = function(n) {
                return null != n && o(n.length) && !t(n)
            }
        },
        MPFp: function(n, l, e) {
            "use strict";
            var t = e("uOPS"),
                o = e("Y7ZC"),
                u = e("kTiW"),
                r = e("NegM"),
                i = e("SBuE"),
                a = e("j2DC"),
                d = e("RfKB"),
                s = e("U+KD"),
                c = e("UWiX")("iterator"),
                p = !([].keys && "next" in [].keys()),
                f = function() {
                    return this
                };
            n.exports = function(n, l, e, h, g, m, v) {
                a(e, l, h);
                var b, y, $, _ = function(n) {
                        if (!p && n in w) return w[n];
                        switch (n) {
                            case "keys":
                            case "values":
                                return function() {
                                    return new e(this, n)
                                }
                        }
                        return function() {
                            return new e(this, n)
                        }
                    },
                    x = l + " Iterator",
                    O = "values" == g,
                    C = !1,
                    w = n.prototype,
                    S = w[c] || w["@@iterator"] || g && w[g],
                    E = S || _(g),
                    P = g ? O ? _("entries") : E : void 0,
                    M = "Array" == l && w.entries || S;
                if (M && ($ = s(M.call(new n))) !== Object.prototype && $.next && (d($, x, !0), t || "function" == typeof $[c] || r($, c, f)), O && S && "values" !== S.name && (C = !0, E = function() {
                        return S.call(this)
                    }), t && !v || !p && !C && w[c] || r(w, c, E), i[l] = E, i[x] = f, g)
                    if (b = {
                            values: O ? E : _("values"),
                            keys: m ? E : _("keys"),
                            entries: P
                        }, v)
                        for (y in b) y in w || u(w, y, b[y]);
                    else o(o.P + o.F * (p || C), l, b);
                return b
            }
        },
        MrPd: function(n, l, e) {
            var t = e("hypo"),
                o = e("ljhN"),
                u = Object.prototype.hasOwnProperty;
            n.exports = function(n, l, e) {
                var r = n[l];
                u.call(n, l) && o(r, e) && (void 0 !== e || l in n) || t(n, l, e)
            }
        },
        MvSz: function(n, l, e) {
            var t = e("LXxW"),
                o = e("0ycA"),
                u = Object.prototype.propertyIsEnumerable,
                r = Object.getOwnPropertySymbols;
            n.exports = r ? function(n) {
                return null == n ? [] : (n = Object(n), t(r(n), function(l) {
                    return u.call(n, l)
                }))
            } : o
        },
        MvwC: function(n, l, e) {
            var t = e("5T2Y").document;
            n.exports = t && t.documentElement
        },
        N2oW: function(n, l, e) {
            "use strict";

            function t(n) {
                for (var e in n) l.hasOwnProperty(e) || (l[e] = n[e])
            }
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), t(e("7h4N")), t(e("HHX+"))
        },
        NCDA: function(n, l, e) {
            "use strict";

            function t(n) {
                for (var e in n) l.hasOwnProperty(e) || (l[e] = n[e])
            }
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), t(e("dYSy")), t(e("1b/I"))
        },
        NGZV: function(n, l, e) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            });
            var t = e("CcnG"),
                o = e("gIcY"),
                u = e("HHWU"),
                r = {
                    provide: o.NG_VALIDATORS,
                    useExisting: t.forwardRef(function() {
                        return i
                    }),
                    multi: !0
                },
                i = function() {
                    function n() {}
                    return n.prototype.validate = function(n) {
                        return u.email(n)
                    }, n.decorators = [{
                        type: t.Directive,
                        args: [{
                            selector: "[email][formControlName],[email][formControl],[email][ngModel]",
                            providers: [r]
                        }]
                    }], n
                }();
            l.EmailValidator = i
        },
        NKxu: function(n, l, e) {
            var t = e("lSCD"),
                o = e("E2jh"),
                u = e("GoyQ"),
                r = e("3Fdi"),
                i = /^\[object .+?Constructor\]$/,
                a = Function.prototype,
                d = Object.prototype,
                s = RegExp("^" + a.toString.call(d.hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            n.exports = function(n) {
                return !(!u(n) || o(n)) && (t(n) ? s : i).test(r(n))
            }
        },
        NMws: function(n, l, e) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            });
            var t = e("CcnG"),
                o = e("gIcY"),
                u = e("vdN6"),
                r = {
                    provide: o.NG_VALIDATORS,
                    useExisting: t.forwardRef(function() {
                        return i
                    }),
                    multi: !0
                },
                i = function() {
                    function n() {}
                    return n.prototype.validate = function(n) {
                        return u.base64(n)
                    }, n.decorators = [{
                        type: t.Directive,
                        args: [{
                            selector: "[base64][formControlName],[base64][formControl],[base64][ngModel]",
                            providers: [r]
                        }]
                    }], n
                }();
            l.Base64Validator = i
        },
        NV0k: function(n, l) {
            l.f = {}.propertyIsEnumerable
        },
        NegM: function(n, l, e) {
            var t = e("2faE"),
                o = e("rr1i");
            n.exports = e("jmDH") ? function(n, l, e) {
                return t.f(n, l, o(1, e))
            } : function(n, l, e) {
                return n[l] = e, n
            }
        },
        Nh2a: function(n, l, e) {
            var t = e("SKAX");
            n.exports = function(n, l) {
                var e;
                return t(n, function(n, t, o) {
                    return !(e = l(n, t, o))
                }), !!e
            }
        },
        Npjl: function(n, l) {
            n.exports = function(n, l) {
                return null == n ? void 0 : n[l]
            }
        },
        "NsO/": function(n, l, e) {
            var t = e("M1xp"),
                o = e("Jes0");
            n.exports = function(n) {
                return t(o(n))
            }
        },
        NykK: function(n, l, e) {
            var t = e("nmnc"),
                o = e("AP2z"),
                u = e("KfNM"),
                r = t ? t.toStringTag : void 0;
            n.exports = function(n) {
                return null == n ? void 0 === n ? "[object Undefined]" : "[object Null]" : r && r in Object(n) ? o(n) : u(n)
            }
        },
        O0oS: function(n, l, e) {
            var t = e("Cwc5"),
                o = function() {
                    try {
                        var n = t(Object, "defineProperty");
                        return n({}, "", {}), n
                    } catch (n) {}
                }();
            n.exports = o
        },
        O7RO: function(n, l, e) {
            var t = e("CMye"),
                o = e("7GkX");
            n.exports = function(n) {
                for (var l = o(n), e = l.length; e--;) {
                    var u = l[e],
                        r = n[u];
                    l[e] = [u, r, t(r)]
                }
                return l
            }
        },
        OBhP: function(n, l, e) {
            var t = e("fmRc"),
                o = e("gFfm"),
                u = e("MrPd"),
                r = e("WwFo"),
                i = e("Dw+G"),
                a = e("5Tg0"),
                d = e("Q1l4"),
                s = e("VOtZ"),
                c = e("EEGq"),
                p = e("qZTm"),
                f = e("G6z8"),
                h = e("QqLw"),
                g = e("yHx3"),
                m = e("wrZu"),
                v = e("+iFO"),
                b = e("Z0cm"),
                y = e("DSRE"),
                $ = e("zEVN"),
                _ = e("GoyQ"),
                x = e("1+5i"),
                O = e("7GkX"),
                C = {};
            C["[object Arguments]"] = C["[object Array]"] = C["[object ArrayBuffer]"] = C["[object DataView]"] = C["[object Boolean]"] = C["[object Date]"] = C["[object Float32Array]"] = C["[object Float64Array]"] = C["[object Int8Array]"] = C["[object Int16Array]"] = C["[object Int32Array]"] = C["[object Map]"] = C["[object Number]"] = C["[object Object]"] = C["[object RegExp]"] = C["[object Set]"] = C["[object String]"] = C["[object Symbol]"] = C["[object Uint8Array]"] = C["[object Uint8ClampedArray]"] = C["[object Uint16Array]"] = C["[object Uint32Array]"] = !0, C["[object Error]"] = C["[object Function]"] = C["[object WeakMap]"] = !1, n.exports = function n(l, e, w, S, E, P) {
                var M, j = 1 & e,
                    k = 2 & e,
                    I = 4 & e;
                if (w && (M = E ? w(l, S, E, P) : w(l)), void 0 !== M) return M;
                if (!_(l)) return l;
                var N = b(l);
                if (N) {
                    if (M = g(l), !j) return d(l, M)
                } else {
                    var T = h(l),
                        A = "[object Function]" == T || "[object GeneratorFunction]" == T;
                    if (y(l)) return a(l, j);
                    if ("[object Object]" == T || "[object Arguments]" == T || A && !E) {
                        if (M = k || A ? {} : v(l), !j) return k ? c(l, i(M, l)) : s(l, r(M, l))
                    } else {
                        if (!C[T]) return E ? l : {};
                        M = m(l, T, j)
                    }
                }
                P || (P = new t);
                var D = P.get(l);
                if (D) return D;
                if (P.set(l, M), x(l)) return l.forEach(function(t) {
                    M.add(n(t, e, w, t, l, P))
                }), M;
                if ($(l)) return l.forEach(function(t, o) {
                    M.set(o, n(t, e, w, o, l, P))
                }), M;
                var R = I ? k ? f : p : k ? keysIn : O,
                    F = N ? void 0 : R(l);
                return o(F || l, function(t, o) {
                    F && (t = l[o = t]), u(M, o, n(t, e, w, o, l, P))
                }), M
            }
        },
        "Of+w": function(n, l, e) {
            var t = e("Cwc5")(e("Kz5y"), "WeakMap");
            n.exports = t
        },
        Ojgd: function(n, l) {
            var e = Math.ceil,
                t = Math.floor;
            n.exports = function(n) {
                return isNaN(n = +n) ? 0 : (n > 0 ? t : e)(n)
            }
        },
        "P/G1": function(n, l, e) {
            var t = e("JmpY"),
                o = e("7GkX");
            n.exports = function(n) {
                return null == n ? [] : t(n, o(n))
            }
        },
        P2sY: function(n, l, e) {
            n.exports = {
                default: e("UbbE"),
                __esModule: !0
            }
        },
        P4Tr: function(n, l, e) {
            var t = e("heNW"),
                o = e("EA7m"),
                u = e("4DFU"),
                r = e("JBE3"),
                i = o(function(n) {
                    return n.push(void 0, u), t(r, void 0, n)
                });
            n.exports = i
        },
        Pdpc: function(n, l, e) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            });
            var t = e("gIcY"),
                o = e("m9Vx");
            l.date = function(n) {
                return o.isPresent(t.Validators.required(n)) ? null : o.isDate(n.value) ? null : {
                    date: !0
                }
            }
        },
        PoRY: function(n, l, e) {
            "use strict";
            e.r(l);
            var t = e("YHbO"),
                o = e("QbLZ"),
                u = e.n(o),
                r = e("sk9p"),
                i = e.n(r),
                a = e("FyfS"),
                d = e.n(a);

            function s() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    l = arguments[1];
                "string" == typeof l && (l = "^(?:" + l + ")$");
                var e = n.match(l);
                return null !== e && e[0].length === n.length
            }

            function c(n) {
                return n[0]
            }

            function p(n) {
                return n[1]
            }

            function f(n) {
                return n[2] || []
            }

            function h(n) {
                return n[8]
            }

            function g(n) {
                return n[0]
            }

            function m(n) {
                return n[1]
            }

            function v(n) {
                return n[2] || []
            }

            function b(n, l) {
                return n[3] || function(n) {
                    return n[4]
                }(l)
            }

            function y(n, l) {
                return n[4] || function(n) {
                    return n[7]
                }(l)
            }

            function $(n) {
                return "$1" !== n && /\d/.test(n.replace("$1", ""))
            }

            function _(n) {
                return n[5] || m(n)
            }

            function x(n, l) {
                return l.countries[l.country_phone_code_to_countries[n][0]]
            }

            function O(n) {
                return n[9]
            }

            function C(n, l) {
                return O(n) ? O(n)[l] : void 0
            }

            function w(n) {
                return C(n, 1)
            }
            var S = {
                formatExtension: function(n, l) {
                    return n + " ext. " + l
                }
            };

            function E(n, l, e, t, o) {
                var r = function() {
                        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            l = arguments[1],
                            e = arguments[2],
                            t = arguments[3],
                            o = arguments[4],
                            r = void 0,
                            i = void 0,
                            a = void 0,
                            d = void 0;
                        if ("string" == typeof n)
                            if ("string" == typeof e) r = {
                                phone: n,
                                country: l
                            }, i = e, o ? (a = t, d = o) : d = t;
                            else {
                                if (r = {
                                        phone: n
                                    }, "string" != typeof l) throw new Error("Format type argument not passed for `format()`");
                                i = l, t ? (a = e, d = t) : d = e
                            }
                        else r = n, i = l, t ? (a = e, d = t) : d = e;
                        if (!d) throw new Error("Metadata is required");
                        switch (i) {
                            case "International":
                            case "E.164":
                            case "International_plaintext":
                            case "National":
                            case "RFC3966":
                                break;
                            default:
                                throw new Error('Unknown format type argument passed to "format()": "' + i + '"')
                        }
                        return {
                            input: r,
                            format_type: i,
                            options: a = a ? u()({}, S, a) : S,
                            metadata: d
                        }
                    }(n, l, e, t, o),
                    i = r.input,
                    a = r.format_type,
                    d = r.options,
                    s = r.metadata,
                    p = void 0;
                i.country && (p = s.countries[i.country]);
                var f = X(i.phone, s),
                    h = f.country_phone_code,
                    g = f.number;
                if (h) {
                    if (i.country && p && h !== c(p)) return i.phone;
                    p = x(h, s)
                }
                if (!p) return i.phone;
                switch (a) {
                    case "International":
                        if (!g) return "+" + c(p);
                        var m = j(g, "International", !1, p),
                            v = "+" + c(p) + " " + m;
                        return i.ext || 0 === i.ext ? d.formatExtension(v, i.ext) : v;
                    case "E.164":
                    case "International_plaintext":
                        return "+" + c(p) + i.phone;
                    case "RFC3966":
                        return "+" + c(p) + i.phone + (i.ext || 0 === i.ext ? ";ext=" + i.ext : "");
                    case "National":
                        if (!g) return "";
                        var b = j(g, "National", !1, p);
                        return i.ext || 0 === i.ext ? d.formatExtension(b, i.ext) : b
                }
            }
            var P = /(\$\d)/;

            function M(n, l, e, t, o) {
                var u = new RegExp(g(l)),
                    r = b(l, o),
                    i = !r || r && y(l, o) && !t;
                if (!e && !i) return n.replace(u, m(l).replace(P, r));
                var a = n.replace(u, e ? _(l) : m(l));
                return e ? k(a) : a
            }

            function j(n, l, e, t) {
                var o = function(n, l) {
                    var e = !0,
                        t = !1,
                        o = void 0;
                    try {
                        for (var u, r = d()(n); !(e = (u = r.next()).done); e = !0) {
                            var i = u.value;
                            if (v(i).length > 0) {
                                var a = v(i)[v(i).length - 1];
                                if (0 !== l.search(a)) continue
                            }
                            if (s(l, new RegExp(g(i)))) return i
                        }
                    } catch (n) {
                        t = !0, o = n
                    } finally {
                        try {
                            !e && r.return && r.return()
                        } finally {
                            if (t) throw o
                        }
                    }
                }(f(t), n);
                return o ? M(n, o, "International" === l, e, t) : n
            }

            function k(n) {
                return n.replace(new RegExp("[" + V + "]+", "g"), " ").trim()
            }

            function I(n, l, e) {
                var t = T(n, l, e),
                    o = t.input;
                if (o && o.country) {
                    var u = o.phone,
                        r = t.metadata.countries[o.country];
                    if (N(u, p(r))) return N(u, function(n) {
                        return C(n, 3)
                    }(r)) ? "PREMIUM_RATE" : N(u, function(n) {
                        return C(n, 2)
                    }(r)) ? "TOLL_FREE" : N(u, function(n) {
                        return C(n, 9)
                    }(r)) ? "SHARED_COST" : N(u, function(n) {
                        return C(n, 8)
                    }(r)) ? "VOIP" : N(u, function(n) {
                        return C(n, 4)
                    }(r)) ? "PERSONAL_NUMBER" : N(u, function(n) {
                        return C(n, 7)
                    }(r)) ? "PAGER" : N(u, function(n) {
                        return C(n, 6)
                    }(r)) ? "UAN" : N(u, function(n) {
                        return C(n, 5)
                    }(r)) ? "VOICEMAIL" : N(u, function(n) {
                        return C(n, 0)
                    }(r)) ? w(r) ? N(u, w(r)) ? "FIXED_LINE_OR_MOBILE" : "FIXED_LINE" : "FIXED_LINE_OR_MOBILE" : N(u, w(r)) ? "MOBILE" : void 0
                }
            }

            function N(n, l) {
                return s(n, l)
            }

            function T(n, l, e) {
                var t = void 0,
                    o = void 0;
                if ("number" == typeof n && (n = String(n)), "string" == typeof n ? "string" == typeof l || void 0 === l ? (o = e, Z(n) && (t = K(n, l, o))) : (o = l, Z(n) && (t = K(n, o))) : (n && n.phone && Z(n.phone) && (t = n), o = l), !o || !o.countries) throw new Error("Metadata is required");
                return {
                    input: t,
                    metadata: o
                }
            }
            var A = 3,
                D = 2,
                R = 17,
                F = 250,
                V = "-\u2010-\u2015\u2212\u30fc\uff0d\uff0f/\uff0e. \xa0\xad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d\\[\\]~\u2053\u223c\uff5e",
                z = ";ext=([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})|[ \xa0\\t,]*(?:e?xt(?:ensi(?:o\u0301?|\xf3))?n?|\uff45?\uff58\uff54\uff4e?|[;,x\uff58#\uff03~\uff5e]|int|anexo|\uff49\uff4e\uff54)[:\\.\uff0e]?[ \xa0\\t,-]*([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})#?|[- ]+([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,5})#",
                L = new RegExp("(?:" + z + ")$", "i"),
                G = new RegExp("^[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{" + D + "}$|^[+\uff0b]{0,1}(?:[" + V + "]*[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]){3,}[" + V + "0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]*(?:" + z + ")?$", "i"),
                U = new RegExp("[+\uff0b0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]"),
                B = new RegExp("[^0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]+$"),
                q = new RegExp("^[+\uff0b]+"),
                H = {
                    0: "0",
                    1: "1",
                    2: "2",
                    3: "3",
                    4: "4",
                    5: "5",
                    6: "6",
                    7: "7",
                    8: "8",
                    9: "9",
                    "\uff10": "0",
                    "\uff11": "1",
                    "\uff12": "2",
                    "\uff13": "3",
                    "\uff14": "4",
                    "\uff15": "5",
                    "\uff16": "6",
                    "\uff17": "7",
                    "\uff18": "8",
                    "\uff19": "9",
                    "\u0660": "0",
                    "\u0661": "1",
                    "\u0662": "2",
                    "\u0663": "3",
                    "\u0664": "4",
                    "\u0665": "5",
                    "\u0666": "6",
                    "\u0667": "7",
                    "\u0668": "8",
                    "\u0669": "9",
                    "\u06f0": "0",
                    "\u06f1": "1",
                    "\u06f2": "2",
                    "\u06f3": "3",
                    "\u06f4": "4",
                    "\u06f5": "5",
                    "\u06f6": "6",
                    "\u06f7": "7",
                    "\u06f8": "8",
                    "\u06f9": "9"
                },
                Y = {
                    country: {}
                };

            function K(n, l, e) {
                var t = function(n, l, e) {
                        var t = void 0,
                            o = void 0,
                            r = void 0;
                        if ("number" == typeof n && (n = String(n)), "string" == typeof n && (t = n), "string" == typeof l ? (o = {
                                country: {
                                    restrict: l
                                }
                            }, r = e) : e ? (o = l, r = e) : r = l, !r || !r.countries) throw new Error("Metadata is required");
                        return {
                            text: t,
                            options: o = o ? u()({}, Y, o) : Y,
                            metadata: r
                        }
                    }(n, l, e),
                    o = t.text,
                    r = t.options,
                    a = t.metadata;
                if (r.country.default && !a.countries[r.country.default]) throw new Error("Unknown country code: " + r.country.default);
                if (r.country.restrict && !a.countries[r.country.restrict]) throw new Error("Unknown country code: " + r.country.restrict);
                var f = void 0,
                    h = void 0;
                if (o && 0 === o.indexOf("tel:")) {
                    var g = !0,
                        m = !1,
                        v = void 0;
                    try {
                        for (var b, y = d()(o.split(";")); !(g = (b = y.next()).done); g = !0) {
                            var $ = b.value.split(":"),
                                _ = i()($, 2),
                                O = _[1];
                            switch (_[0]) {
                                case "tel":
                                    f = O;
                                    break;
                                case "ext":
                                    h = O;
                                    break;
                                case "phone-context":
                                    "+" === O[0] && (f = O + f)
                            }
                        }
                    } catch (n) {
                        m = !0, v = n
                    } finally {
                        try {
                            !g && y.return && y.return()
                        } finally {
                            if (m) throw v
                        }
                    }
                } else f = J(o);
                if (!Z(f)) return {};
                var C = function(n) {
                    var l = n.search(L);
                    if (l < 0) return {};
                    var e = n.slice(0, l);
                    if (!Z(e)) return {};
                    for (var t = n.match(L), o = 1; o < t.length;) {
                        if (null != t[o] && t[o].length > 0) return {
                            number: e,
                            extension: t[o]
                        };
                        o++
                    }
                }(f);
                C.extension && (f = C.number, h = C.extension);
                var w = X(f, a),
                    S = w.country_phone_code,
                    E = w.number;
                if (!E) return {};
                var P = void 0,
                    M = void 0,
                    j = !1;
                if (S) {
                    if (j = !0, r.country.restrict && S !== c(a.countries[r.country.restrict])) return {};
                    M = x(S, a)
                } else(r.country.restrict || r.country.default) && (M = a.countries[P = r.country.restrict || r.country.default], E = W(f));
                if (!M) return {};
                var k = E;
                if (j || (k = nn(E, M)), !P) {
                    if (!(P = ln(S, k, a))) return {};
                    M = a.countries[P]
                }
                if (k.length > R) return {};
                if (!s(k, new RegExp(p(M)))) return {};
                var I = {
                    country: P,
                    phone: k
                };
                return h && (I.ext = h), I
            }

            function W(n) {
                return function(n, l) {
                    var e = "",
                        t = !0,
                        o = !1,
                        u = void 0;
                    try {
                        for (var r, i = d()(n); !(t = (r = i.next()).done); t = !0) {
                            var a = l[r.value.toUpperCase()];
                            void 0 !== a && (e += a)
                        }
                    } catch (n) {
                        o = !0, u = n
                    } finally {
                        try {
                            !t && i.return && i.return()
                        } finally {
                            if (o) throw u
                        }
                    }
                    return e
                }(n, H)
            }

            function Z(n) {
                return n.length >= D && s(n, G)
            }

            function J(n) {
                if (!n || n.length > F) return "";
                var l = n.search(U);
                return l < 0 ? "" : n.slice(l).replace(B, "")
            }

            function Q(n) {
                if (!n) return "";
                var l = q.test(n);
                return n = W(n), l ? "+" + n : n
            }

            function X(n, l) {
                if (!(n = Q(n))) return {};
                if ("+" !== n[0]) return {
                    number: n
                };
                if ("0" === (n = n.slice(1))[0]) return {};
                for (var e = 1; e <= A && e <= n.length;) {
                    var t = n.slice(0, e);
                    if (l.country_phone_code_to_countries[t]) return {
                        country_phone_code: t,
                        number: n.slice(e)
                    };
                    e++
                }
                return {}
            }

            function nn(n, l) {
                var e = function(n) {
                    var l = n[5];
                    return l || (l = function(n) {
                        return n[3]
                    }(n)), l
                }(l);
                if (!n || !e) return n;
                var t = new RegExp("^(?:" + e + ")"),
                    o = t.exec(n);
                if (!o) return n;
                var u, r = o[o.length - 1],
                    i = function(n) {
                        return n[6]
                    }(l);
                u = i && r ? n.replace(t, i) : n.slice(o[0].length);
                var a = new RegExp(p(l));
                return s(n, a) && !s(u, a) ? n : u
            }

            function ln(n, l, e) {
                var t = e.country_phone_code_to_countries[n];
                if (1 === t.length) return t[0];
                var o = !0,
                    u = !1,
                    r = void 0;
                try {
                    for (var i, a = d()(t); !(o = (i = a.next()).done); o = !0) {
                        var s = i.value,
                            c = e.countries[s];
                        if (h(c)) {
                            if (l && 0 === l.search(h(c))) return s
                        } else if (I({
                                phone: l,
                                country: s
                            }, e)) return s
                    }
                } catch (n) {
                    u = !0, r = n
                } finally {
                    try {
                        !o && a.return && a.return()
                    } finally {
                        if (u) throw r
                    }
                }
            }

            function en(n, l, e) {
                var t = T(n, l, e),
                    o = t.input,
                    u = t.metadata;
                return !(!o || !o.country || O(u.countries[o.country]) && !I(o, u))
            }
            var tn = e("iCc5"),
                on = e.n(tn),
                un = e("V7oC"),
                rn = e.n(un),
                an = new RegExp("9", "g"),
                dn = bn("9", 15),
                sn = new RegExp("x"),
                cn = new RegExp("x", "g"),
                pn = /\[([^\[\]])*\]/g,
                fn = /\d(?=[^,}][^,}])/g,
                hn = new RegExp("^[" + V + "]*(\\$\\d[" + V + "]*)+$"),
                gn = new RegExp("^[+\uff0b]{0,1}[" + V + "0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]*$", "i"),
                mn = function() {
                    function n(l, e) {
                        if (on()(this, n), !e || !e.countries) throw new Error("Metadata is required");
                        l && e.countries[l] && (this.default_country = l), this.metadata = e, this.reset()
                    }
                    return rn()(n, [{
                        key: "input",
                        value: function(n) {
                            var l = J(n);
                            return l || n && n.indexOf("+") >= 0 && (l = "+"), s(l, gn) ? this.process_input(Q(l)) : this.current_output
                        }
                    }, {
                        key: "process_input",
                        value: function(n) {
                            if ("+" === n[0] && (this.parsed_input || (this.parsed_input += "+", this.reset_countriness()), n = n.slice(1)), this.parsed_input += n, this.national_number += n, this.is_international())
                                if (this.country_phone_code) this.country || this.determine_the_country();
                                else {
                                    if (!this.extract_country_phone_code()) return this.parsed_input;
                                    this.initialize_phone_number_formats_for_this_country_phone_code(), this.reset_format(), this.determine_the_country()
                                }
                            else {
                                var l = this.national_prefix;
                                this.national_number = this.national_prefix + this.national_number, this.extract_national_prefix(), this.national_prefix !== l && (this.matching_formats = this.available_formats, this.reset_format())
                            }
                            if (!this.should_format()) return this.format_as_non_formatted_number();
                            this.match_formats_by_leading_digits();
                            var e = this.format_national_phone_number(n);
                            return e ? this.full_phone_number(e) : this.parsed_input
                        }
                    }, {
                        key: "format_as_non_formatted_number",
                        value: function() {
                            return this.is_international() && this.country_phone_code ? this.national_number ? (this.template = "x" + bn("x", this.country_phone_code.length) + " " + bn("x", this.national_number.length), "+" + this.country_phone_code + " " + this.national_number) : "+" + this.country_phone_code : this.parsed_input
                        }
                    }, {
                        key: "format_national_phone_number",
                        value: function(n) {
                            var l = void 0;
                            return this.chosen_format && (l = this.format_next_national_number_digits(n)), this.attempt_to_format_complete_phone_number() || (this.choose_another_format() ? this.reformat_national_number() : l)
                        }
                    }, {
                        key: "reset",
                        value: function() {
                            return this.parsed_input = "", this.current_output = "", this.national_prefix = "", this.national_number = "", this.reset_countriness(), this.reset_format(), this
                        }
                    }, {
                        key: "reset_country",
                        value: function() {
                            this.country = this.default_country && !this.is_international() ? this.default_country : void 0
                        }
                    }, {
                        key: "reset_countriness",
                        value: function() {
                            this.reset_country(), this.default_country && !this.is_international() ? (this.country_metadata = this.metadata.countries[this.default_country], this.country_phone_code = c(this.country_metadata), this.initialize_phone_number_formats_for_this_country_phone_code()) : (this.country_metadata = void 0, this.country_phone_code = void 0, this.available_formats = [], this.matching_formats = this.available_formats)
                        }
                    }, {
                        key: "reset_format",
                        value: function() {
                            this.chosen_format = void 0, this.template = void 0, this.partially_populated_template = void 0, this.last_match_position = -1
                        }
                    }, {
                        key: "reformat_national_number",
                        value: function() {
                            return this.format_next_national_number_digits(this.national_number)
                        }
                    }, {
                        key: "initialize_phone_number_formats_for_this_country_phone_code",
                        value: function() {
                            this.available_formats = f(this.country_metadata).filter(function(n) {
                                return hn.test(_(n))
                            }), this.matching_formats = this.available_formats
                        }
                    }, {
                        key: "match_formats_by_leading_digits",
                        value: function() {
                            var n = this.national_number,
                                l = n.length - 3;
                            l < 0 && (l = 0), this.matching_formats = this.matching_formats.filter(function(e) {
                                var t = v(e).length;
                                if (0 === t) return !0;
                                var o = Math.min(l, t - 1),
                                    u = v(e)[o];
                                return new RegExp("^(" + u + ")").test(n)
                            }), this.chosen_format && -1 === this.matching_formats.indexOf(this.chosen_format) && this.reset_format()
                        }
                    }, {
                        key: "should_format",
                        value: function() {
                            return this.national_number >= 3
                        }
                    }, {
                        key: "attempt_to_format_complete_phone_number",
                        value: function() {
                            var n = !0,
                                l = !1,
                                e = void 0;
                            try {
                                for (var t, o = d()(this.matching_formats); !(n = (t = o.next()).done); n = !0) {
                                    var u = t.value;
                                    if (new RegExp("^(?:" + g(u) + ")$").test(this.national_number) && this.validate_format(u)) {
                                        this.reset_format(), this.chosen_format = u;
                                        var r = M(this.national_number, u, this.is_international(), this.national_prefix.length > 0, this.country_metadata);
                                        if (this.create_formatting_template(u)) this.reformat_national_number();
                                        else {
                                            var i = this.full_phone_number(r);
                                            this.template = i.replace(/[\d\+]/g, "x"), this.partially_populated_template = i
                                        }
                                        return r
                                    }
                                }
                            } catch (n) {
                                l = !0, e = n
                            } finally {
                                try {
                                    !n && o.return && o.return()
                                } finally {
                                    if (l) throw e
                                }
                            }
                        }
                    }, {
                        key: "full_phone_number",
                        value: function(n) {
                            return this.is_international() ? "+" + this.country_phone_code + " " + n : n
                        }
                    }, {
                        key: "extract_country_phone_code",
                        value: function() {
                            if (this.national_number) {
                                var n = X(this.parsed_input, this.metadata),
                                    l = n.country_phone_code,
                                    e = n.number;
                                if (l) return this.country_phone_code = l, this.national_number = e, this.country_metadata = x(l, this.metadata)
                            }
                        }
                    }, {
                        key: "extract_national_prefix",
                        value: function() {
                            if (this.national_prefix = "", this.country_metadata) {
                                var n = nn(this.national_number, this.country_metadata);
                                return n !== this.national_number && (this.national_prefix = this.national_number.slice(0, this.national_number.length - n.length), this.national_number = n), this.national_prefix
                            }
                        }
                    }, {
                        key: "choose_another_format",
                        value: function() {
                            var n = !0,
                                l = !1,
                                e = void 0;
                            try {
                                for (var t, o = d()(this.matching_formats); !(n = (t = o.next()).done); n = !0) {
                                    var u = t.value;
                                    if (this.chosen_format === u) return;
                                    if (this.validate_format(u) && this.create_formatting_template(u)) return this.chosen_format = u, this.last_match_position = -1, !0
                                }
                            } catch (n) {
                                l = !0, e = n
                            } finally {
                                try {
                                    !n && o.return && o.return()
                                } finally {
                                    if (l) throw e
                                }
                            }
                            this.reset_country(), this.reset_format()
                        }
                    }, {
                        key: "validate_format",
                        value: function(n) {
                            var l, e, t;
                            if (this.is_international() || this.national_prefix || !(t = b(l = n, e = this.country_metadata)) || !$(t) || y(l, e)) return !0
                        }
                    }, {
                        key: "create_formatting_template",
                        value: function(n) {
                            if (!(g(n).indexOf("|") >= 0)) {
                                var l = this.get_template_for_phone_number_format_pattern(n);
                                if (l) return this.partially_populated_template = l, this.template = this.is_international() ? "x" + bn("x", this.country_phone_code.length) + " " + l : l.replace(/\d/g, "x"), this.template
                            }
                        }
                    }, {
                        key: "get_template_for_phone_number_format_pattern",
                        value: function(n) {
                            var l = b(n, this.country_metadata),
                                e = g(n).replace(pn, "\\d").replace(fn, "\\d"),
                                t = dn.match(e)[0];
                            if (!(this.national_number.length > t.length)) {
                                var o = this.get_format_format(n, l),
                                    u = new RegExp("^" + e + "$"),
                                    r = this.national_number.replace(/\d/g, "9");
                                return u.test(r) && (t = r), t.replace(new RegExp(e), o).replace(an, "x")
                            }
                        }
                    }, {
                        key: "format_next_national_number_digits",
                        value: function(n) {
                            var l = !0,
                                e = !1,
                                t = void 0;
                            try {
                                for (var o, u = d()(n); !(l = (o = u.next()).done); l = !0) {
                                    var r = o.value;
                                    if (-1 === this.partially_populated_template.slice(this.last_match_position + 1).search(sn)) return this.chosen_format = void 0, this.template = void 0, void(this.partially_populated_template = void 0);
                                    this.last_match_position = this.partially_populated_template.search(sn), this.partially_populated_template = this.partially_populated_template.replace(sn, r)
                                }
                            } catch (n) {
                                e = !0, t = n
                            } finally {
                                try {
                                    !l && u.return && u.return()
                                } finally {
                                    if (e) throw t
                                }
                            }
                            return function(n, l) {
                                for (var e = n.slice(0, l), t = vn("(", e) - vn(")", e); t > 0 && l < n.length;) ")" === n[l] && t--, l++;
                                return n.slice(0, l)
                            }(this.partially_populated_template, this.last_match_position + 1).replace(cn, " ")
                        }
                    }, {
                        key: "is_international",
                        value: function() {
                            return this.parsed_input && "+" === this.parsed_input[0]
                        }
                    }, {
                        key: "get_format_format",
                        value: function(n, l) {
                            var e = this.is_international() ? _(n) : m(n);
                            return l && (!this.national_prefix && $(l) || (e = e.replace(P, l))), this.is_international() ? k(e) : e
                        }
                    }, {
                        key: "determine_the_country",
                        value: function() {
                            this.country = ln(this.country_phone_code, this.national_number, this.metadata)
                        }
                    }]), n
                }();

            function vn(n, l) {
                var e = 0,
                    t = !0,
                    o = !1,
                    u = void 0;
                try {
                    for (var r, i = d()(l); !(t = (r = i.next()).done); t = !0) r.value === n && e++
                } catch (n) {
                    o = !0, u = n
                } finally {
                    try {
                        !t && i.return && i.return()
                    } finally {
                        if (o) throw u
                    }
                }
                return e
            }

            function bn(n, l) {
                if (l < 1) return "";
                for (var e = ""; l > 1;) 1 & l && (e += n), l >>= 1, n += n;
                return e + n
            }

            function yn() {
                var n = Array.prototype.slice.call(arguments);
                return n.push(t), K.apply(this, n)
            }

            function $n() {
                var n = Array.prototype.slice.call(arguments);
                return n.push(t), E.apply(this, n)
            }

            function _n() {
                var n = Array.prototype.slice.call(arguments);
                return n.push(t), I.apply(this, n)
            }

            function xn() {
                return _n.apply(this, arguments)
            }

            function On() {
                var n = Array.prototype.slice.call(arguments);
                return n.push(t), en.apply(this, n)
            }

            function Cn() {
                return On.apply(this, arguments)
            }

            function wn(n) {
                mn.call(this, n, t)
            }

            function Sn(n) {
                mn.call(this, n, t)
            }

            function En(n) {
                mn.call(this, n, t)
            }

            function Pn(n) {
                return Mn(n, t)
            }

            function Mn(n, l) {
                if (!l.countries[n]) throw new Error('Unknown country: "' + n + '"');
                return c(l.countries[n])
            }
            e.d(l, "parse", function() {
                return yn
            }), e.d(l, "format", function() {
                return $n
            }), e.d(l, "getNumberType", function() {
                return _n
            }), e.d(l, "get_number_type", function() {
                return xn
            }), e.d(l, "isValidNumber", function() {
                return On
            }), e.d(l, "is_valid_number", function() {
                return Cn
            }), e.d(l, "AsYouType", function() {
                return wn
            }), e.d(l, "as_you_type", function() {
                return Sn
            }), e.d(l, "asYouType", function() {
                return En
            }), e.d(l, "getPhoneCode", function() {
                return Pn
            }), e.d(l, "getPhoneCodeCustom", function() {
                return Mn
            }), e.d(l, "parseCustom", function() {
                return K
            }), e.d(l, "DIGITS", function() {
                return H
            }), e.d(l, "formatCustom", function() {
                return E
            }), e.d(l, "isValidNumberCustom", function() {
                return en
            }), e.d(l, "getNumberTypeCustom", function() {
                return I
            }), e.d(l, "AsYouTypeCustom", function() {
                return mn
            }), e.d(l, "asYouTypeCustom", function() {
                return mn
            }), e.d(l, "DIGIT_PLACEHOLDER", function() {
                return "x"
            }), (wn.prototype = Object.create(mn.prototype, {})).constructor = wn, (Sn.prototype = Object.create(mn.prototype, {})).constructor = Sn, (En.prototype = Object.create(mn.prototype, {})).constructor = En
        },
        Puqe: function(n, l, e) {
            var t = e("eUgh"),
                o = e("OBhP"),
                u = e("S7Xf"),
                r = e("4uTw"),
                i = e("juv8"),
                a = e("4Oe1"),
                d = e("xs/l"),
                s = e("G6z8"),
                c = d(function(n, l) {
                    var e = {};
                    if (null == n) return e;
                    var d = !1;
                    l = t(l, function(l) {
                        return l = r(l, n), d || (d = l.length > 1), l
                    }), i(n, s(n), e), d && (e = o(e, 7, a));
                    for (var c = l.length; c--;) u(e, l[c]);
                    return e
                });
            n.exports = c
        },
        Q1l4: function(n, l) {
            n.exports = function(n, l) {
                var e = -1,
                    t = n.length;
                for (l || (l = Array(t)); ++e < t;) l[e] = n[e];
                return l
            }
        },
        QGqX: function(n, l, e) {
            "use strict";
            var t = function() {
                function n() {}
                return n.getMimeClass = function(n) {
                    var l = "application";
                    return -1 !== this.mime_psd.indexOf(n.type) ? l = "image" : n.type.match("image.*") ? l = "image" : n.type.match("video.*") ? l = "video" : n.type.match("audio.*") ? l = "audio" : "application/pdf" === n.type ? l = "pdf" : -1 !== this.mime_compress.indexOf(n.type) ? l = "compress" : -1 !== this.mime_doc.indexOf(n.type) ? l = "doc" : -1 !== this.mime_xsl.indexOf(n.type) ? l = "xls" : -1 !== this.mime_ppt.indexOf(n.type) && (l = "ppt"), "application" === l && (l = this.fileTypeDetection(n.name)), l
                }, n.fileTypeDetection = function(n) {
                    var l = {
                            jpg: "image",
                            jpeg: "image",
                            tif: "image",
                            psd: "image",
                            bmp: "image",
                            png: "image",
                            nef: "image",
                            tiff: "image",
                            cr2: "image",
                            dwg: "image",
                            cdr: "image",
                            ai: "image",
                            indd: "image",
                            pin: "image",
                            cdp: "image",
                            skp: "image",
                            stp: "image",
                            "3dm": "image",
                            mp3: "audio",
                            wav: "audio",
                            wma: "audio",
                            mod: "audio",
                            m4a: "audio",
                            compress: "compress",
                            zip: "compress",
                            rar: "compress",
                            "7z": "compress",
                            lz: "compress",
                            z01: "compress",
                            pdf: "pdf",
                            xls: "xls",
                            xlsx: "xls",
                            ods: "xls",
                            mp4: "video",
                            avi: "video",
                            wmv: "video",
                            mpg: "video",
                            mts: "video",
                            flv: "video",
                            "3gp": "video",
                            vob: "video",
                            m4v: "video",
                            mpeg: "video",
                            m2ts: "video",
                            mov: "video",
                            doc: "doc",
                            docx: "doc",
                            eps: "doc",
                            txt: "doc",
                            odt: "doc",
                            rtf: "doc",
                            ppt: "ppt",
                            pptx: "ppt",
                            pps: "ppt",
                            ppsx: "ppt",
                            odp: "ppt"
                        },
                        e = n.split(".");
                    if (e.length < 2) return "application";
                    var t = e[e.length - 1].toLowerCase();
                    return void 0 === l[t] ? "application" : l[t]
                }, n
            }();
            t.mime_doc = ["application/msword", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.openxmlformats-officedocument.wordprocessingml.template", "application/vnd.ms-word.document.macroEnabled.12", "application/vnd.ms-word.template.macroEnabled.12"], t.mime_xsl = ["application/vnd.ms-excel", "application/vnd.ms-excel", "application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.openxmlformats-officedocument.spreadsheetml.template", "application/vnd.ms-excel.sheet.macroEnabled.12", "application/vnd.ms-excel.template.macroEnabled.12", "application/vnd.ms-excel.addin.macroEnabled.12", "application/vnd.ms-excel.sheet.binary.macroEnabled.12"], t.mime_ppt = ["application/vnd.ms-powerpoint", "application/vnd.ms-powerpoint", "application/vnd.ms-powerpoint", "application/vnd.ms-powerpoint", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/vnd.openxmlformats-officedocument.presentationml.template", "application/vnd.openxmlformats-officedocument.presentationml.slideshow", "application/vnd.ms-powerpoint.addin.macroEnabled.12", "application/vnd.ms-powerpoint.presentation.macroEnabled.12", "application/vnd.ms-powerpoint.presentation.macroEnabled.12", "application/vnd.ms-powerpoint.slideshow.macroEnabled.12"], t.mime_psd = ["image/photoshop", "image/x-photoshop", "image/psd", "application/photoshop", "application/psd", "zz-application/zz-winassoc-psd"], t.mime_compress = ["application/x-gtar", "application/x-gcompress", "application/compress", "application/x-tar", "application/x-rar-compressed", "application/octet-stream"], l.FileType = t
        },
        QIyF: function(n, l, e) {
            var t = e("Kz5y");
            n.exports = function() {
                return t.Date.now()
            }
        },
        QMMT: function(n, l, e) {
            var t = e("a0xu"),
                o = e("UWiX")("toStringTag"),
                u = "Arguments" == t(function() {
                    return arguments
                }());
            n.exports = function(n) {
                var l, e, r;
                return void 0 === n ? "Undefined" : null === n ? "Null" : "string" == typeof(e = function(n, l) {
                    try {
                        return n[l]
                    } catch (n) {}
                }(l = Object(n), o)) ? e : u ? t(l) : "Object" == (r = t(l)) && "function" == typeof l.callee ? "Arguments" : r
            }
        },
        QbLZ: function(n, l, e) {
            "use strict";
            l.__esModule = !0;
            var t, o = (t = e("P2sY")) && t.__esModule ? t : {
                default: t
            };
            l.default = o.default || function(n) {
                for (var l = 1; l < arguments.length; l++) {
                    var e = arguments[l];
                    for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (n[t] = e[t])
                }
                return n
            }
        },
        QcOe: function(n, l, e) {
            var t = e("GoyQ"),
                o = e("6sVZ"),
                u = e("7Ix3"),
                r = Object.prototype.hasOwnProperty;
            n.exports = function(n) {
                if (!t(n)) return u(n);
                var l = o(n),
                    e = [];
                for (var i in n)("constructor" != i || !l && r.call(n, i)) && e.push(i);
                return e
            }
        },
        QjmD: function(n, l, e) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            });
            var t = e("gIcY"),
                o = e("m9Vx");
            l.maxDate = function(n) {
                if (!(o.isDate(n) || n instanceof Function)) throw Error("maxDate value must be or return a formatted date");
                return function(l) {
                    if (o.isPresent(t.Validators.required(l))) return null;
                    var e = new Date(l.value);
                    return o.isDate(e) ? (n instanceof Function && (n = n()), e <= new Date(n) ? null : {
                        maxDate: !0
                    }) : {
                        maxDate: !0
                    }
                }
            }
        },
        QkVE: function(n, l, e) {
            var t = e("EpBk");
            n.exports = function(n, l) {
                var e = n.__data__;
                return t(l) ? e["string" == typeof l ? "string" : "hash"] : e.map
            }
        },
        QoRX: function(n, l) {
            n.exports = function(n, l) {
                for (var e = -1, t = null == n ? 0 : n.length; ++e < t;)
                    if (l(n[e], e, n)) return !0;
                return !1
            }
        },
        QqLw: function(n, l, e) {
            var t = e("tadb"),
                o = e("ebwN"),
                u = e("HOxn"),
                r = e("yGk4"),
                i = e("Of+w"),
                a = e("NykK"),
                d = e("3Fdi"),
                s = d(t),
                c = d(o),
                p = d(u),
                f = d(r),
                h = d(i),
                g = a;
            (t && "[object DataView]" != g(new t(new ArrayBuffer(1))) || o && "[object Map]" != g(new o) || u && "[object Promise]" != g(u.resolve()) || r && "[object Set]" != g(new r) || i && "[object WeakMap]" != g(new i)) && (g = function(n) {
                var l = a(n),
                    e = "[object Object]" == l ? n.constructor : void 0,
                    t = e ? d(e) : "";
                if (t) switch (t) {
                    case s:
                        return "[object DataView]";
                    case c:
                        return "[object Map]";
                    case p:
                        return "[object Promise]";
                    case f:
                        return "[object Set]";
                    case h:
                        return "[object WeakMap]"
                }
                return l
            }), n.exports = g
        },
        Qyzf: function(n, l, e) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            });
            var t = e("CcnG"),
                o = e("gIcY"),
                u = e("yak4"),
                r = {
                    provide: o.NG_VALIDATORS,
                    useExisting: t.forwardRef(function() {
                        return i
                    }),
                    multi: !0
                },
                i = function() {
                    function n() {}
                    return n.prototype.validate = function(n) {
                        return u.creditCard(n)
                    }, n.decorators = [{
                        type: t.Directive,
                        args: [{
                            selector: "[creditCard][formControlName],[creditCard][formControl],[creditCard][ngModel]",
                            providers: [r]
                        }]
                    }], n
                }();
            l.CreditCardValidator = i
        },
        "R/W3": function(n, l, e) {
            var t = e("KwMD"),
                o = e("2ajD"),
                u = e("CZoQ");
            n.exports = function(n, l, e) {
                return l == l ? u(n, l, e) : t(n, o, e)
            }
        },
        RBan: function(n, l) {
            n.exports = function(n) {
                var l = null == n ? 0 : n.length;
                return l ? n[l - 1] : void 0
            }
        },
        RQ4W: function(n, l, e) {
            "use strict";
            ! function(n) {
                for (var e in n) l.hasOwnProperty(e) || (l[e] = n[e])
            }(e("YNBZ"))
        },
        "RU/L": function(n, l, e) {
            e("Rqdy");
            var t = e("WEpk").Object;
            n.exports = function(n, l, e) {
                return t.defineProperty(n, l, e)
            }
        },
        RfKB: function(n, l, e) {
            var t = e("2faE").f,
                o = e("B+OT"),
                u = e("UWiX")("toStringTag");
            n.exports = function(n, l, e) {
                n && !o(n = e ? n : n.prototype, u) && t(n, u, {
                    configurable: !0,
                    value: l
                })
            }
        },
        Rp86: function(n, l, e) {
            e("bBy9"), e("FlQf"), n.exports = e("fXsU")
        },
        Rqdy: function(n, l, e) {
            var t = e("Y7ZC");
            t(t.S + t.F * !e("jmDH"), "Object", {
                defineProperty: e("2faE").f
            })
        },
        S6T7: function(n, l, e) {
            "use strict";
            var t = e("mrSG").__decorate,
                o = e("Ip0R"),
                u = e("CcnG"),
                r = e("pKD1"),
                i = e("5xlC"),
                a = function() {};
            a = t([u.NgModule({
                imports: [o.CommonModule],
                declarations: [r.FileDropDirective, i.FileSelectDirective],
                exports: [r.FileDropDirective, i.FileSelectDirective]
            })], a), l.FileUploadModule = a
        },
        S7Xf: function(n, l, e) {
            var t = e("4uTw"),
                o = e("RBan"),
                u = e("gpbi"),
                r = e("9Nap");
            n.exports = function(n, l) {
                return l = t(l, n), null == (n = u(n, l)) || delete n[r(o(l))]
            }
        },
        S8xG: function(n, l, e) {
            "use strict";

            function t(n) {
                for (var e in n) l.hasOwnProperty(e) || (l[e] = n[e])
            }
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), t(e("umdh")), t(e("QjmD"))
        },
        SBuE: function(n, l) {
            n.exports = {}
        },
        SEkw: function(n, l, e) {
            n.exports = {
                default: e("RU/L"),
                __esModule: !0
            }
        },
        SKAX: function(n, l, e) {
            var t = e("JC6p"),
                o = e("lQqw")(t);
            n.exports = o
        },
        SfRM: function(n, l, e) {
            var t = e("YESw");
            n.exports = function() {
                this.__data__ = t ? t(null) : {}, this.size = 0
            }
        },
        "Sm/R": function(n, l, e) {
            "use strict";

            function t(n) {
                for (var e in n) l.hasOwnProperty(e) || (l[e] = n[e])
            }
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), t(e("Wp8D")), t(e("5OUi"))
        },
        Sxd8: function(n, l, e) {
            var t = e("ZCgT");
            n.exports = function(n) {
                var l = t(n),
                    e = l % 1;
                return l == l ? e ? l - e : l : 0
            }
        },
        T1AV: function(n, l, e) {
            var t = e("t2Dn"),
                o = e("5Tg0"),
                u = e("yP5f"),
                r = e("Q1l4"),
                i = e("+iFO"),
                a = e("03A+"),
                d = e("Z0cm"),
                s = e("3L66"),
                c = e("DSRE"),
                p = e("lSCD"),
                f = e("GoyQ"),
                h = e("YO3V"),
                g = e("c6wG"),
                m = e("itsj"),
                v = e("jeLo");
            n.exports = function(n, l, e, b, y, $, _) {
                var x = m(n, e),
                    O = m(l, e),
                    C = _.get(O);
                if (C) t(n, e, C);
                else {
                    var w = $ ? $(x, O, e + "", n, l, _) : void 0,
                        S = void 0 === w;
                    if (S) {
                        var E = d(O),
                            P = !E && c(O),
                            M = !E && !P && g(O);
                        w = O, E || P || M ? d(x) ? w = x : s(x) ? w = r(x) : P ? (S = !1, w = o(O, !0)) : M ? (S = !1, w = u(O, !0)) : w = [] : h(O) || a(O) ? (w = x, a(x) ? w = v(x) : (!f(x) || b && p(x)) && (w = i(O))) : S = !1
                    }
                    S && (_.set(O, w), y(w, O, b, $, _), _.delete(O)), t(n, e, w)
                }
            }
        },
        TYy9: function(n, l, e) {
            var t = e("XGnz");
            n.exports = function(n) {
                return null != n && n.length ? t(n, 1) : []
            }
        },
        Tm9b: function(n, l, e) {
            "use strict";

            function t(n) {
                for (var e in n) l.hasOwnProperty(e) || (l[e] = n[e])
            }
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), t(e("wYKn")), t(e("CSYt"))
        },
        "U+KD": function(n, l, e) {
            var t = e("B+OT"),
                o = e("JB68"),
                u = e("VVlx")("IE_PROTO"),
                r = Object.prototype;
            n.exports = Object.getPrototypeOf || function(n) {
                return n = o(n), t(n, u) ? n[u] : "function" == typeof n.constructor && n instanceof n.constructor ? n.constructor.prototype : n instanceof Object ? r : null
            }
        },
        UB5X: function(n, l, e) {
            var t = e("NykK"),
                o = e("ExA7");
            n.exports = function(n) {
                return "number" == typeof n || o(n) && "[object Number]" == t(n)
            }
        },
        "UNi/": function(n, l) {
            n.exports = function(n, l) {
                for (var e = -1, t = Array(n); ++e < n;) t[e] = l(e);
                return t
            }
        },
        UO39: function(n, l) {
            n.exports = function(n, l) {
                return {
                    value: l,
                    done: !!n
                }
            }
        },
        UWiX: function(n, l, e) {
            var t = e("29s/")("wks"),
                o = e("YqAc"),
                u = e("5T2Y").Symbol,
                r = "function" == typeof u;
            (n.exports = function(n) {
                return t[n] || (t[n] = r && u[n] || (r ? u : o)("Symbol." + n))
            }).store = t
        },
        UbbE: function(n, l, e) {
            e("o8NH"), n.exports = e("WEpk").Object.assign
        },
        UfWW: function(n, l, e) {
            var t = e("KwMD"),
                o = e("ut/Y"),
                u = e("Sxd8"),
                r = Math.max;
            n.exports = function(n, l, e) {
                var i = null == n ? 0 : n.length;
                if (!i) return -1;
                var a = null == e ? 0 : u(e);
                return a < 0 && (a = r(i + a, 0)), t(n, o(l, 3), a)
            }
        },
        UpIn: function(n, l, e) {
            "use strict";
            var t = e("CcnG"),
                o = e("oQam"),
                u = e("b6v0"),
                r = e("QGqX");
            l.FileUploader = function() {
                function n(n) {
                    this.isUploading = !1, this.queue = [], this.progress = 0, this._nextIndex = 0, this.options = {
                        autoUpload: !1,
                        isHTML5: !0,
                        filters: [],
                        removeAfterUpload: !1,
                        disableMultipart: !1,
                        formatDataFunction: function(n) {
                            return n._file
                        },
                        formatDataFunctionIsAsync: !1
                    }, this.setOptions(n), this.response = new t.EventEmitter
                }
                return n.prototype.setOptions = function(n) {
                    this.options = Object.assign(this.options, n), this.authToken = this.options.authToken, this.authTokenHeader = this.options.authTokenHeader || "Authorization", this.autoUpload = this.options.autoUpload, this.options.filters.unshift({
                        name: "queueLimit",
                        fn: this._queueLimitFilter
                    }), this.options.maxFileSize && this.options.filters.unshift({
                        name: "fileSize",
                        fn: this._fileSizeFilter
                    }), this.options.allowedFileType && this.options.filters.unshift({
                        name: "fileType",
                        fn: this._fileTypeFilter
                    }), this.options.allowedMimeType && this.options.filters.unshift({
                        name: "mimeType",
                        fn: this._mimeTypeFilter
                    });
                    for (var l = 0; l < this.queue.length; l++) this.queue[l].url = this.options.url
                }, n.prototype.addToQueue = function(n, l, e) {
                    for (var t = this, r = [], i = 0, a = n; i < a.length; i++) r.push(a[i]);
                    var d = this._getFilters(e),
                        s = this.queue.length,
                        c = [];
                    r.map(function(n) {
                        l || (l = t.options);
                        var e = new o.FileLikeObject(n);
                        if (t._isValidFile(e, d, l)) {
                            var r = new u.FileItem(t, n, l);
                            c.push(r), t.queue.push(r), t._onAfterAddingFile(r)
                        } else t._onWhenAddingFileFailed(e, d[t._failFilterIndex], l)
                    }), this.queue.length !== s && (this._onAfterAddingAll(c), this.progress = this._getTotalProgress()), this._render(), this.options.autoUpload && this.uploadAll()
                }, n.prototype.removeFromQueue = function(n) {
                    var l = this.getIndexOfItem(n),
                        e = this.queue[l];
                    e.isUploading && e.cancel(), this.queue.splice(l, 1), this.progress = this._getTotalProgress()
                }, n.prototype.clearQueue = function() {
                    for (; this.queue.length;) this.queue[0].remove();
                    this.progress = 0
                }, n.prototype.uploadItem = function(n) {
                    var l = this.getIndexOfItem(n),
                        e = this.queue[l],
                        t = this.options.isHTML5 ? "_xhrTransport" : "_iframeTransport";
                    e._prepareToUploading(), this.isUploading || (this.isUploading = !0, this[t](e))
                }, n.prototype.cancelItem = function(n) {
                    var l = this.getIndexOfItem(n),
                        e = this.queue[l];
                    e && e.isUploading && (this.options.isHTML5 ? e._xhr : e._form).abort()
                }, n.prototype.uploadAll = function() {
                    var n = this.getNotUploadedItems().filter(function(n) {
                        return !n.isUploading
                    });
                    n.length && (n.map(function(n) {
                        return n._prepareToUploading()
                    }), n[0].upload())
                }, n.prototype.cancelAll = function() {
                    this.getNotUploadedItems().map(function(n) {
                        return n.cancel()
                    })
                }, n.prototype.isFile = function(n) {
                    return function(n) {
                        return File && n instanceof File
                    }(n)
                }, n.prototype.isFileLikeObject = function(n) {
                    return n instanceof o.FileLikeObject
                }, n.prototype.getIndexOfItem = function(n) {
                    return "number" == typeof n ? n : this.queue.indexOf(n)
                }, n.prototype.getNotUploadedItems = function() {
                    return this.queue.filter(function(n) {
                        return !n.isUploaded
                    })
                }, n.prototype.getReadyItems = function() {
                    return this.queue.filter(function(n) {
                        return n.isReady && !n.isUploading
                    }).sort(function(n, l) {
                        return n.index - l.index
                    })
                }, n.prototype.destroy = function() {}, n.prototype.onAfterAddingAll = function(n) {
                    return {
                        fileItems: n
                    }
                }, n.prototype.onBuildItemForm = function(n, l) {
                    return {
                        fileItem: n,
                        form: l
                    }
                }, n.prototype.onAfterAddingFile = function(n) {
                    return {
                        fileItem: n
                    }
                }, n.prototype.onWhenAddingFileFailed = function(n, l, e) {
                    return {
                        item: n,
                        filter: l,
                        options: e
                    }
                }, n.prototype.onBeforeUploadItem = function(n) {
                    return {
                        fileItem: n
                    }
                }, n.prototype.onProgressItem = function(n, l) {
                    return {
                        fileItem: n,
                        progress: l
                    }
                }, n.prototype.onProgressAll = function(n) {
                    return {
                        progress: n
                    }
                }, n.prototype.onSuccessItem = function(n, l, e, t) {
                    return {
                        item: n,
                        response: l,
                        status: e,
                        headers: t
                    }
                }, n.prototype.onErrorItem = function(n, l, e, t) {
                    return {
                        item: n,
                        response: l,
                        status: e,
                        headers: t
                    }
                }, n.prototype.onCancelItem = function(n, l, e, t) {
                    return {
                        item: n,
                        response: l,
                        status: e,
                        headers: t
                    }
                }, n.prototype.onCompleteItem = function(n, l, e, t) {
                    return {
                        item: n,
                        response: l,
                        status: e,
                        headers: t
                    }
                }, n.prototype.onCompleteAll = function() {}, n.prototype._mimeTypeFilter = function(n) {
                    return !(this.options.allowedMimeType && -1 === this.options.allowedMimeType.indexOf(n.type))
                }, n.prototype._fileSizeFilter = function(n) {
                    return !(this.options.maxFileSize && n.size > this.options.maxFileSize)
                }, n.prototype._fileTypeFilter = function(n) {
                    return !(this.options.allowedFileType && -1 === this.options.allowedFileType.indexOf(r.FileType.getMimeClass(n)))
                }, n.prototype._onErrorItem = function(n, l, e, t) {
                    n._onError(l, e, t), this.onErrorItem(n, l, e, t)
                }, n.prototype._onCompleteItem = function(n, l, e, t) {
                    n._onComplete(l, e, t), this.onCompleteItem(n, l, e, t);
                    var o = this.getReadyItems()[0];
                    this.isUploading = !1, o ? o.upload() : (this.onCompleteAll(), this.progress = this._getTotalProgress(), this._render())
                }, n.prototype._headersGetter = function(n) {
                    return function(l) {
                        return l ? n[l.toLowerCase()] || void 0 : n
                    }
                }, n.prototype._xhrTransport = function(n) {
                    var l, e = this,
                        t = this,
                        o = n._xhr = new XMLHttpRequest;
                    if (this._onBeforeUploadItem(n), "number" != typeof n._file.size) throw new TypeError("The file specified is no longer valid");
                    if (this.options.disableMultipart) l = this.options.formatDataFunction(n);
                    else {
                        l = new FormData, this._onBuildItemForm(n, l);
                        var u = function() {
                            return l.append(n.alias, n._file, n.file.name)
                        };
                        this.options.parametersBeforeFiles || u(), void 0 !== this.options.additionalParameter && Object.keys(this.options.additionalParameter).forEach(function(t) {
                            var o = e.options.additionalParameter[t];
                            "string" == typeof o && o.indexOf("{{file_name}}") >= 0 && (o = o.replace("{{file_name}}", n.file.name)), l.append(t, o)
                        }), this.options.parametersBeforeFiles && u()
                    }
                    if (o.upload.onprogress = function(l) {
                            var t = Math.round(l.lengthComputable ? 100 * l.loaded / l.total : 0);
                            e._onProgressItem(n, t)
                        }, o.onload = function() {
                            var l = e._parseHeaders(o.getAllResponseHeaders()),
                                t = e._transformResponse(o.response, l),
                                u = e._isSuccessCode(o.status) ? "Success" : "Error";
                            e["_on" + u + "Item"](n, t, o.status, l), e._onCompleteItem(n, t, o.status, l)
                        }, o.onerror = function() {
                            var l = e._parseHeaders(o.getAllResponseHeaders()),
                                t = e._transformResponse(o.response, l);
                            e._onErrorItem(n, t, o.status, l), e._onCompleteItem(n, t, o.status, l)
                        }, o.onabort = function() {
                            var l = e._parseHeaders(o.getAllResponseHeaders()),
                                t = e._transformResponse(o.response, l);
                            e._onCancelItem(n, t, o.status, l), e._onCompleteItem(n, t, o.status, l)
                        }, o.open(n.method, n.url, !0), o.withCredentials = n.withCredentials, this.options.headers)
                        for (var r = 0, i = this.options.headers; r < i.length; r++) o.setRequestHeader((s = i[r]).name, s.value);
                    if (n.headers.length)
                        for (var a = 0, d = n.headers; a < d.length; a++) {
                            var s;
                            o.setRequestHeader((s = d[a]).name, s.value)
                        }
                    this.authToken && o.setRequestHeader(this.authTokenHeader, this.authToken), o.onreadystatechange = function() {
                        o.readyState == XMLHttpRequest.DONE && t.response.emit(o.responseText)
                    }, this.options.formatDataFunctionIsAsync ? l.then(function(n) {
                        return o.send(JSON.stringify(n))
                    }) : o.send(l), this._render()
                }, n.prototype._getTotalProgress = function(n) {
                    if (void 0 === n && (n = 0), this.options.removeAfterUpload) return n;
                    var l = this.getNotUploadedItems().length,
                        e = 100 / this.queue.length;
                    return Math.round((l ? this.queue.length - l : this.queue.length) * e + n * e / 100)
                }, n.prototype._getFilters = function(n) {
                    if (!n) return this.options.filters;
                    if (Array.isArray(n)) return n;
                    if ("string" == typeof n) {
                        var l = n.match(/[^\s,]+/g);
                        return this.options.filters.filter(function(n) {
                            return -1 !== l.indexOf(n.name)
                        })
                    }
                    return this.options.filters
                }, n.prototype._render = function() {}, n.prototype._queueLimitFilter = function() {
                    return void 0 === this.options.queueLimit || this.queue.length < this.options.queueLimit
                }, n.prototype._isValidFile = function(n, l, e) {
                    var t = this;
                    return this._failFilterIndex = -1, !l.length || l.every(function(l) {
                        return t._failFilterIndex++, l.fn.call(t, n, e)
                    })
                }, n.prototype._isSuccessCode = function(n) {
                    return n >= 200 && n < 300 || 304 === n
                }, n.prototype._transformResponse = function(n, l) {
                    return n
                }, n.prototype._parseHeaders = function(n) {
                    var l, e, t, o = {};
                    return n ? (n.split("\n").map(function(n) {
                        t = n.indexOf(":"), l = n.slice(0, t).trim().toLowerCase(), e = n.slice(t + 1).trim(), l && (o[l] = o[l] ? o[l] + ", " + e : e)
                    }), o) : o
                }, n.prototype._onWhenAddingFileFailed = function(n, l, e) {
                    this.onWhenAddingFileFailed(n, l, e)
                }, n.prototype._onAfterAddingFile = function(n) {
                    this.onAfterAddingFile(n)
                }, n.prototype._onAfterAddingAll = function(n) {
                    this.onAfterAddingAll(n)
                }, n.prototype._onBeforeUploadItem = function(n) {
                    n._onBeforeUpload(), this.onBeforeUploadItem(n)
                }, n.prototype._onBuildItemForm = function(n, l) {
                    n._onBuildForm(l), this.onBuildItemForm(n, l)
                }, n.prototype._onProgressItem = function(n, l) {
                    var e = this._getTotalProgress(l);
                    this.progress = e, n._onProgress(l), this.onProgressItem(n, l), this.onProgressAll(e), this._render()
                }, n.prototype._onSuccessItem = function(n, l, e, t) {
                    n._onSuccess(l, e, t), this.onSuccessItem(n, l, e, t)
                }, n.prototype._onCancelItem = function(n, l, e, t) {
                    n._onCancel(l, e, t), this.onCancelItem(n, l, e, t)
                }, n
            }()
        },
        V6Ve: function(n, l, e) {
            var t = e("kekF")(Object.keys, Object);
            n.exports = t
        },
        V7oC: function(n, l, e) {
            "use strict";
            l.__esModule = !0;
            var t, o = (t = e("SEkw")) && t.__esModule ? t : {
                default: t
            };
            l.default = function() {
                function n(n, l) {
                    for (var e = 0; e < l.length; e++) {
                        var t = l[e];
                        t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), (0, o.default)(n, t.key, t)
                    }
                }
                return function(l, e, t) {
                    return e && n(l.prototype, e), t && n(l, t), l
                }
            }()
        },
        VBAv: function(n, l, e) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            });
            var t = e("gIcY"),
                o = e("m9Vx");
            l.digits = function(n) {
                return o.isPresent(t.Validators.required(n)) ? null : /^\d+$/.test(n.value) ? null : {
                    digits: !0
                }
            }
        },
        VKFn: function(n, l, e) {
            e("bBy9"), e("FlQf"), n.exports = e("ldVq")
        },
        VOtZ: function(n, l, e) {
            var t = e("juv8"),
                o = e("MvSz");
            n.exports = function(n, l) {
                return t(n, o(n), l)
            }
        },
        VVlx: function(n, l, e) {
            var t = e("29s/")("keys"),
                o = e("YqAc");
            n.exports = function(n) {
                return t[n] || (t[n] = o(n))
            }
        },
        VaNO: function(n, l) {
            n.exports = function(n) {
                return this.__data__.has(n)
            }
        },
        W070: function(n, l, e) {
            var t = e("NsO/"),
                o = e("tEej"),
                u = e("D8kY");
            n.exports = function(n) {
                return function(l, e, r) {
                    var i, a = t(l),
                        d = o(a.length),
                        s = u(r, d);
                    if (n && e != e) {
                        for (; d > s;)
                            if ((i = a[s++]) != i) return !0
                    } else
                        for (; d > s; s++)
                            if ((n || s in a) && a[s] === e) return n || s || 0;
                    return !n && -1
                }
            }
        },
        WEpk: function(n, l) {
            var e = n.exports = {
                version: "2.5.7"
            };
            "number" == typeof __e && (__e = e)
        },
        WFqU: function(n, l) {
            var e = "object" == typeof global && global && global.Object === Object && global;
            n.exports = e
        },
        WcuY: function(n, l, e) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            });
            var t = e("CcnG"),
                o = e("gIcY"),
                u = e("cI4K"),
                r = {
                    provide: o.NG_VALIDATORS,
                    useExisting: t.forwardRef(function() {
                        return i
                    }),
                    multi: !0
                },
                i = function() {
                    function n() {}
                    return n.prototype.ngOnInit = function() {
                        this.validator = u.min(this.min)
                    }, n.prototype.ngOnChanges = function(n) {
                        for (var l in n) "min" === l && (this.validator = u.min(n[l].currentValue), this.onChange && this.onChange())
                    }, n.prototype.validate = function(n) {
                        return this.validator(n)
                    }, n.prototype.registerOnValidatorChange = function(n) {
                        this.onChange = n
                    }, n.decorators = [{
                        type: t.Directive,
                        args: [{
                            selector: "[min][formControlName],[min][formControl],[min][ngModel]",
                            providers: [r]
                        }]
                    }], n.propDecorators = {
                        min: [{
                            type: t.Input
                        }]
                    }, n
                }();
            l.MinValidator = i
        },
        Wp8D: function(n, l, e) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            });
            var t = e("CcnG"),
                o = e("gIcY"),
                u = e("Sm/R"),
                r = {
                    provide: o.NG_VALIDATORS,
                    useExisting: t.forwardRef(function() {
                        return i
                    }),
                    multi: !0
                },
                i = function() {
                    function n() {}
                    return n.prototype.ngOnInit = function() {
                        this.validator = u.minDate(this.minDate)
                    }, n.prototype.ngOnChanges = function(n) {
                        for (var l in n) "minDate" === l && (this.validator = u.minDate(n[l].currentValue), this.onChange && this.onChange())
                    }, n.prototype.validate = function(n) {
                        return this.validator(n)
                    }, n.prototype.registerOnValidatorChange = function(n) {
                        this.onChange = n
                    }, n.decorators = [{
                        type: t.Directive,
                        args: [{
                            selector: "[minDate][formControlName],[minDate][formControl],[minDate][ngModel]",
                            providers: [r]
                        }]
                    }], n.propDecorators = {
                        minDate: [{
                            type: t.Input
                        }]
                    }, n
                }();
            l.MinDateValidator = i
        },
        WwFo: function(n, l, e) {
            var t = e("juv8"),
                o = e("7GkX");
            n.exports = function(n, l) {
                return n && t(l, o(l), n)
            }
        },
        XGnz: function(n, l, e) {
            var t = e("CH3K"),
                o = e("BiGR");
            n.exports = function n(l, e, u, r, i) {
                var a = -1,
                    d = l.length;
                for (u || (u = o), i || (i = []); ++a < d;) {
                    var s = l[a];
                    e > 0 && u(s) ? e > 1 ? n(s, e - 1, u, r, i) : t(i, s) : r || (i[i.length] = s)
                }
                return i
            }
        },
        XKAG: function(n, l, e) {
            var t = e("ut/Y"),
                o = e("MMmD"),
                u = e("7GkX");
            n.exports = function(n) {
                return function(l, e, r) {
                    var i = Object(l);
                    if (!o(l)) {
                        var a = t(e, 3);
                        l = u(l), e = function(n) {
                            return a(i[n], n, i)
                        }
                    }
                    var d = n(l, e, r);
                    return d > -1 ? i[a ? l[d] : d] : void 0
                }
            }
        },
        XYm9: function(n, l, e) {
            var t = e("+K+b");
            n.exports = function(n, l) {
                var e = l ? t(n.buffer) : n.buffer;
                return new n.constructor(e, n.byteOffset, n.byteLength)
            }
        },
        Xi7e: function(n, l, e) {
            var t = e("KMkd"),
                o = e("adU4"),
                u = e("tMB7"),
                r = e("+6XX"),
                i = e("Z8oC");

            function a(n) {
                var l = -1,
                    e = null == n ? 0 : n.length;
                for (this.clear(); ++l < e;) {
                    var t = n[l];
                    this.set(t[0], t[1])
                }
            }
            a.prototype.clear = t, a.prototype.delete = o, a.prototype.get = u, a.prototype.has = r, a.prototype.set = i, n.exports = a
        },
        Y7ZC: function(n, l, e) {
            var t = e("5T2Y"),
                o = e("WEpk"),
                u = e("2GTP"),
                r = e("NegM"),
                i = e("B+OT"),
                a = function(n, l, e) {
                    var d, s, c, p = n & a.F,
                        f = n & a.G,
                        h = n & a.S,
                        g = n & a.P,
                        m = n & a.B,
                        v = n & a.W,
                        b = f ? o : o[l] || (o[l] = {}),
                        y = b.prototype,
                        $ = f ? t : h ? t[l] : (t[l] || {}).prototype;
                    for (d in f && (e = l), e)(s = !p && $ && void 0 !== $[d]) && i(b, d) || (c = s ? $[d] : e[d], b[d] = f && "function" != typeof $[d] ? e[d] : m && s ? u(c, t) : v && $[d] == c ? function(n) {
                        var l = function(l, e, t) {
                            if (this instanceof n) {
                                switch (arguments.length) {
                                    case 0:
                                        return new n;
                                    case 1:
                                        return new n(l);
                                    case 2:
                                        return new n(l, e)
                                }
                                return new n(l, e, t)
                            }
                            return n.apply(this, arguments)
                        };
                        return l.prototype = n.prototype, l
                    }(c) : g && "function" == typeof c ? u(Function.call, c) : c, g && ((b.virtual || (b.virtual = {}))[d] = c, n & a.R && y && !y[d] && r(y, d, c)))
                };
            a.F = 1, a.G = 2, a.S = 4, a.P = 8, a.B = 16, a.W = 32, a.U = 64, a.R = 128, n.exports = a
        },
        YESw: function(n, l, e) {
            var t = e("Cwc5")(Object, "create");
            n.exports = t
        },
        YHbO: function(n) {
            n.exports = {
                country_phone_code_to_countries: {
                    1: ["US", "AG", "AI", "AS", "BB", "BM", "BS", "CA", "DM", "DO", "GD", "GU", "JM", "KN", "KY", "LC", "MP", "MS", "PR", "SX", "TC", "TT", "VC", "VG", "VI"],
                    7: ["RU", "KZ"],
                    20: ["EG"],
                    27: ["ZA"],
                    30: ["GR"],
                    31: ["NL"],
                    32: ["BE"],
                    33: ["FR"],
                    34: ["ES"],
                    36: ["HU"],
                    39: ["IT", "VA"],
                    40: ["RO"],
                    41: ["CH"],
                    43: ["AT"],
                    44: ["GB", "GG", "IM", "JE"],
                    45: ["DK"],
                    46: ["SE"],
                    47: ["NO", "SJ"],
                    48: ["PL"],
                    49: ["DE"],
                    51: ["PE"],
                    52: ["MX"],
                    53: ["CU"],
                    54: ["AR"],
                    55: ["BR"],
                    56: ["CL"],
                    57: ["CO"],
                    58: ["VE"],
                    60: ["MY"],
                    61: ["AU", "CC", "CX"],
                    62: ["ID"],
                    63: ["PH"],
                    64: ["NZ"],
                    65: ["SG"],
                    66: ["TH"],
                    81: ["JP"],
                    82: ["KR"],
                    84: ["VN"],
                    86: ["CN"],
                    90: ["TR"],
                    91: ["IN"],
                    92: ["PK"],
                    93: ["AF"],
                    94: ["LK"],
                    95: ["MM"],
                    98: ["IR"],
                    211: ["SS"],
                    212: ["MA", "EH"],
                    213: ["DZ"],
                    216: ["TN"],
                    218: ["LY"],
                    220: ["GM"],
                    221: ["SN"],
                    222: ["MR"],
                    223: ["ML"],
                    224: ["GN"],
                    225: ["CI"],
                    226: ["BF"],
                    227: ["NE"],
                    228: ["TG"],
                    229: ["BJ"],
                    230: ["MU"],
                    231: ["LR"],
                    232: ["SL"],
                    233: ["GH"],
                    234: ["NG"],
                    235: ["TD"],
                    236: ["CF"],
                    237: ["CM"],
                    238: ["CV"],
                    239: ["ST"],
                    240: ["GQ"],
                    241: ["GA"],
                    242: ["CG"],
                    243: ["CD"],
                    244: ["AO"],
                    245: ["GW"],
                    246: ["IO"],
                    247: ["AC"],
                    248: ["SC"],
                    249: ["SD"],
                    250: ["RW"],
                    251: ["ET"],
                    252: ["SO"],
                    253: ["DJ"],
                    254: ["KE"],
                    255: ["TZ"],
                    256: ["UG"],
                    257: ["BI"],
                    258: ["MZ"],
                    260: ["ZM"],
                    261: ["MG"],
                    262: ["RE", "YT"],
                    263: ["ZW"],
                    264: ["NA"],
                    265: ["MW"],
                    266: ["LS"],
                    267: ["BW"],
                    268: ["SZ"],
                    269: ["KM"],
                    290: ["SH", "TA"],
                    291: ["ER"],
                    297: ["AW"],
                    298: ["FO"],
                    299: ["GL"],
                    350: ["GI"],
                    351: ["PT"],
                    352: ["LU"],
                    353: ["IE"],
                    354: ["IS"],
                    355: ["AL"],
                    356: ["MT"],
                    357: ["CY"],
                    358: ["FI", "AX"],
                    359: ["BG"],
                    370: ["LT"],
                    371: ["LV"],
                    372: ["EE"],
                    373: ["MD"],
                    374: ["AM"],
                    375: ["BY"],
                    376: ["AD"],
                    377: ["MC"],
                    378: ["SM"],
                    380: ["UA"],
                    381: ["RS"],
                    382: ["ME"],
                    385: ["HR"],
                    386: ["SI"],
                    387: ["BA"],
                    389: ["MK"],
                    420: ["CZ"],
                    421: ["SK"],
                    423: ["LI"],
                    500: ["FK"],
                    501: ["BZ"],
                    502: ["GT"],
                    503: ["SV"],
                    504: ["HN"],
                    505: ["NI"],
                    506: ["CR"],
                    507: ["PA"],
                    508: ["PM"],
                    509: ["HT"],
                    590: ["GP", "BL", "MF"],
                    591: ["BO"],
                    592: ["GY"],
                    593: ["EC"],
                    594: ["GF"],
                    595: ["PY"],
                    596: ["MQ"],
                    597: ["SR"],
                    598: ["UY"],
                    599: ["CW", "BQ"],
                    670: ["TL"],
                    672: ["NF"],
                    673: ["BN"],
                    674: ["NR"],
                    675: ["PG"],
                    676: ["TO"],
                    677: ["SB"],
                    678: ["VU"],
                    679: ["FJ"],
                    680: ["PW"],
                    681: ["WF"],
                    682: ["CK"],
                    683: ["NU"],
                    685: ["WS"],
                    686: ["KI"],
                    687: ["NC"],
                    688: ["TV"],
                    689: ["PF"],
                    690: ["TK"],
                    691: ["FM"],
                    692: ["MH"],
                    800: ["001"],
                    808: ["001"],
                    850: ["KP"],
                    852: ["HK"],
                    853: ["MO"],
                    855: ["KH"],
                    856: ["LA"],
                    870: ["001"],
                    878: ["001"],
                    880: ["BD"],
                    881: ["001"],
                    882: ["001"],
                    883: ["001"],
                    886: ["TW"],
                    888: ["001"],
                    960: ["MV"],
                    961: ["LB"],
                    962: ["JO"],
                    963: ["SY"],
                    964: ["IQ"],
                    965: ["KW"],
                    966: ["SA"],
                    967: ["YE"],
                    968: ["OM"],
                    970: ["PS"],
                    971: ["AE"],
                    972: ["IL"],
                    973: ["BH"],
                    974: ["QA"],
                    975: ["BT"],
                    976: ["MN"],
                    977: ["NP"],
                    979: ["001"],
                    992: ["TJ"],
                    993: ["TM"],
                    994: ["AZ"],
                    995: ["GE"],
                    996: ["KG"],
                    998: ["UZ"]
                },
                countries: {
                    AC: ["247", "[46]\\d{4}|[01589]\\d{5}"],
                    AD: ["376", "[16]\\d{5,8}|[37-9]\\d{5}", [
                        ["(\\d{3})(\\d{3})", "$1 $2", ["[137-9]|6[0-8]"]],
                        ["(\\d{4})(\\d{4})", "$1 $2", ["180", "180[02]"]],
                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["690"]]
                    ]],
                    AE: ["971", "[2-79]\\d{7,8}|800\\d{2,9}", [
                        ["([2-4679])(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-4679][2-8]"]],
                        ["(5\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["5"]],
                        ["([479]00)(\\d)(\\d{5})", "$1 $2 $3", ["[479]00"], "$1"],
                        ["([68]00)(\\d{2,9})", "$1 $2", ["[68]00"], "$1"]
                    ], "0", "0$1"],
                    AF: ["93", "[2-7]\\d{8}", [
                        ["([2-7]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"]]
                    ], "0", "0$1"],
                    AG: ["1", "[2589]\\d{9}", [
                        ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]
                    ], "1", null, null, null, null, "268"],
                    AI: ["1", "[2589]\\d{9}", [
                        ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]
                    ], "1", null, null, null, null, "264"],
                    AL: ["355", "[2-57]\\d{7}|6\\d{8}|8\\d{5,7}|9\\d{5}", [
                        ["(4)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[0-6]"]],
                        ["(6\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["6"]],
                        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4[7-9]"]],
                        ["(\\d{3})(\\d{3,5})", "$1 $2", ["[235][16-9]|[79]|8[016-9]"]]
                    ], "0", "0$1"],
                    AM: ["374", "[1-9]\\d{7}", [
                        ["(\\d{2})(\\d{6})", "$1 $2", ["1|47"]],
                        ["(\\d{2})(\\d{6})", "$1 $2", ["4[1349]|[5-7]|88|9[1-9]"], "0$1"],
                        ["(\\d{3})(\\d{5})", "$1 $2", ["[23]"]],
                        ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["8|90"], "0 $1"]
                    ], "0", "(0$1)"],
                    AO: ["244", "[29]\\d{8}", [
                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3"]
                    ]],
                    AR: ["54", "11\\d{8}|[2368]\\d{9}|9\\d{10}", [
                        ["([68]\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"]],
                        ["(9)(11)(\\d{4})(\\d{4})", "$2 15-$3-$4", ["911"], null, null, "$1 $2 $3-$4"],
                        ["(9)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9(?:2[2-4689]|3[3-8])", "9(?:2(?:2[013]|3[067]|49|6[01346]|8|9[147-9])|3(?:36|4[1-358]|5[138]|6|7[069]|8[013578]))", "9(?:2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3[4-6]|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45])))", "9(?:2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3(?:4|5[014]|6[1-39])|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45])))"], null, null, "$1 $2 $3-$4"],
                        ["(9)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", ["9[23]"], null, null, "$1 $2 $3-$4"],
                        ["(11)(\\d{4})(\\d{4})", "$1 $2-$3", ["11"], null, "true"],
                        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["2(?:2[013]|3[067]|49|6[01346]|8|9[147-9])|3(?:36|4[1-358]|5[138]|6|7[069]|8[013578])", "2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3[4-6]|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45]))", "2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3(?:4|5[014]|6[1-39])|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45]))"], null, "true"],
                        ["(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["[23]"], null, "true"]
                    ], "0", "0$1", "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))?15)?", "9$1"],
                    AS: ["1", "[5689]\\d{9}", [
                        ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]
                    ], "1", null, null, null, null, "684"],
                    AT: ["43", "[1-9]\\d{3,12}", [
                        ["(116\\d{3})", "$1", ["116"], "$1"],
                        ["(1)(\\d{3,12})", "$1 $2", ["1"]],
                        ["(5\\d)(\\d{3,5})", "$1 $2", ["5[079]"]],
                        ["(5\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5[079]"]],
                        ["(5\\d)(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5[079]"]],
                        ["(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:[28]0|32)|[89]"]],
                        ["(\\d{4})(\\d{3,9})", "$1 $2", ["2|3(?:1[1-578]|[3-8])|4[2378]|5[2-6]|6(?:[12]|4[1-9]|5[468])|7(?:[24][1-8]|35|[5-79])"]]
                    ], "0", "0$1"],
                    AU: ["61", "1\\d{4,9}|[2-578]\\d{8}", [
                        ["([2378])(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"],
                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|[45]"], "0$1"],
                        ["(16)(\\d{3,4})", "$1 $2", ["16"], "0$1"],
                        ["(16)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"],
                        ["(1[389]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[389]0", "1(?:[38]0|9)0"]],
                        ["(180)(2\\d{3})", "$1 $2", ["180", "1802"]],
                        ["(19\\d)(\\d{3})", "$1 $2", ["19[13]"]],
                        ["(19\\d{2})(\\d{4})", "$1 $2", ["19[679]"]],
                        ["(13)(\\d{2})(\\d{2})", "$1 $2 $3", ["13[1-9]"]]
                    ], "0", null, null, null, null, null, ["[237]\\d{8}|8(?:51(?:0(?:0[03-9]|[1247]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-6])|1(?:1[69]|[23]\\d|4[0-4]))|[6-8]\\d{4}|9(?:[02-9]\\d{3}|1(?:[0-57-9]\\d{2}|6[0135-9]\\d)))\\d{3}", "14(?:5\\d|71)\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[6-9]|7[02-9]|8[12457-9]|9[017-9])\\d{6}", "180(?:0\\d{3}|2)\\d{3}", "19(?:0[0126]\\d|[679])\\d{5}", "500\\d{6}", null, null, "16\\d{3,7}", "550\\d{6}", "13(?:00\\d{3}|45[0-4]|\\d)\\d{3}"]],
                    AW: ["297", "[25-9]\\d{6}", [
                        ["(\\d{3})(\\d{4})", "$1 $2"]
                    ]],
                    AX: ["358", "1\\d{5,11}|[35]\\d{5,9}|2\\d{4,9}|4\\d{5,10}|6\\d{7,9}|7\\d{4,9}|8\\d{6,9}", [
                        ["(\\d{3})(\\d{3,7})", "$1 $2", ["(?:[1-3]0|[6-8])0"]],
                        ["(75\\d{3})", "$1", ["75[12]"]],
                        ["(116\\d{3})", "$1", ["116"], "$1"],
                        ["(\\d{2})(\\d{4,10})", "$1 $2", ["[14]|2[09]|50|7[135]"]],
                        ["(\\d)(\\d{4,11})", "$1 $2", ["[25689][1-8]|3"]]
                    ], "0", null, null, null, null, null, ["18[1-8]\\d{3,9}", "4\\d{5,10}|50\\d{4,8}", "800\\d{4,7}", "[67]00\\d{5,6}", null, null, "[13]0\\d{4,8}|2(?:0(?:[016-8]\\d{3,7}|[2-59]\\d{2,7})|9\\d{4,8})|60(?:[12]\\d{5,6}|6\\d{7})|7(?:1\\d{7}|3\\d{8}|5[03-9]\\d{2,7})"]],
                    AZ: ["994", "[1-9]\\d{8}", [
                        ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[28]|2(?:[0-36]|[45]2)|365"]],
                        ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[4-8]"], "0$1"],
                        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"]
                    ], "0", "(0$1)"],
                    BA: ["387", "[3-9]\\d{7,8}", [
                        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]"]],
                        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-356]|[7-9]"]],
                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6[047]"]]
                    ], "0", "0$1"],
                    BB: ["1", "[2589]\\d{9}", [
                        ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]
                    ], "1", null, null, null, null, "246"],
                    BD: ["880", "[2-79]\\d{5,9}|1\\d{9}|8[0-7]\\d{4,8}", [
                        ["(2)(\\d{7,8})", "$1-$2", ["2"]],
                        ["(\\d{2})(\\d{4,6})", "$1-$2", ["[3-79]1"]],
                        ["(\\d{4})(\\d{3,6})", "$1-$2", ["1|3(?:0|[2-58]2)|4(?:0|[25]2|3[23]|[4689][25])|5(?:[02-578]2|6[25])|6(?:[0347-9]2|[26][25])|7[02-9]2|8(?:[023][23]|[4-7]2)|9(?:[02][23]|[458]2|6[016])"]],
                        ["(\\d{3})(\\d{3,7})", "$1-$2", ["[3-79][2-9]|8"]]
                    ], "0", "0$1"],
                    BE: ["32", "[1-9]\\d{7,8}", [
                        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4[6-9]"]],
                        ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[23]|4[23]|9[2-4]"]],
                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[156]|7[018]|8(?:0[1-9]|[1-79])"]],
                        ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"]]
                    ], "0", "0$1"],
                    BF: ["226", "[25-7]\\d{7}", [
                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]
                    ]],
                    BG: ["359", "[23567]\\d{5,7}|[489]\\d{6,8}", [
                        ["(2)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"]],
                        ["(2)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"]],
                        ["(\\d{3})(\\d{4})", "$1 $2", ["43[124-7]|70[1-9]"]],
                        ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[124-7]|70[1-9]"]],
                        ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[78]00"]],
                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["99[69]"]],
                        ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"]],
                        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["48|8[7-9]|9[08]"]]
                    ], "0", "0$1"],
                    BH: ["973", "[136-9]\\d{7}", [
                        ["(\\d{4})(\\d{4})", "$1 $2"]
                    ]],
                    BI: ["257", "[267]\\d{7}", [
                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]
                    ]],
                    BJ: ["229", "[2689]\\d{7}", [
                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2689]"]]
                    ]],
                    BL: ["590", "[56]\\d{8}", [
                        ["([56]\\d{2})(\\d{2})(\\d{4})", "$1 $2-$3", ["590|69[01]"]]
                    ], "0", null, null, null, null, null, ["590(?:2[7-9]|5[12]|87)\\d{4}", "69(?:0\\d{2}|1(?:2[29]|3[0-5]))\\d{4}"]],
                    BM: ["1", "[4589]\\d{9}", [
                        ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]
                    ], "1", null, null, null, null, "441"],
                    BN: ["673", "[2-578]\\d{6}", [
                        ["([2-578]\\d{2})(\\d{4})", "$1 $2", ["[2-578]"]]
                    ]],
                    BO: ["591", "[23467]\\d{7}|8\\d{8}", [
                        ["([234])(\\d{7})", "$1 $2", ["[2-4]"]],
                        ["([67]\\d{7})", "$1", ["[67]"]],
                        ["(800)(\\d{2})(\\d{4})", "$1 $2 $3", ["800"]]
                    ], "0", null, "0(1\\d)?"],
                    BQ: ["599", "[347]\\d{6}", [
                        ["(\\d{3})(\\d{4})", "$1 $2", ["[13-7]"]],
                        ["(9)(\\d{3})(\\d{4})", "$1 $2 $3", ["9"]]
                    ], null, null, null, null, null, null, ["(?:318[023]|41(?:6[023]|70)|7(?:1[578]|50)\\d)\\d{3}", "(?:31(?:8[14-8]|9[14578])|416[145-9]|7(?:0[01]|7[07]|8\\d|9[056])\\d)\\d{3}"]],
                    BR: ["55", "[1-46-9]\\d{7,10}|5(?:[0-4]\\d{7,9}|5(?:[2-8]\\d{7}|9\\d{7,8}))", [
                        ["(\\d{4})(\\d{4})", "$1-$2", ["300|40[02]", "300|40(?:0|20)"]],
                        ["([3589]00)(\\d{2,3})(\\d{4})", "$1 $2 $3", ["[3589]00"], "0$1"],
                        ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["[1-9][1-9]"], "($1)"],
                        ["(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[1-9][1-9]9"], "($1)"]
                    ], "0", null, "0(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2"],
                    BS: ["1", "[2589]\\d{9}", [
                        ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]
                    ], "1", null, null, null, null, "242"],
                    BT: ["975", "[1-8]\\d{6,7}", [
                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1|77"]],
                        ["([2-8])(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-68]|7[246]"]]
                    ]],
                    BW: ["267", "[2-79]\\d{6,7}", [
                        ["(\\d{3})(\\d{4})", "$1 $2", ["[2-6]"]],
                        ["(7\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["7"]],
                        ["(90)(\\d{5})", "$1 $2", ["90"]]
                    ]],
                    BY: ["375", "[1-4]\\d{8}|8(?:0(?:0\\d{3,7}|[13]\\d{7})|(?:10|20\\d)\\d{7})|9\\d{9,10}", [
                        ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["17[0-3589]|2[4-9]|[34]", "17(?:[02358]|1[0-2]|9[0189])|2[4-9]|[34]"], "8 0$1"],
                        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["1(?:5[24]|6[235]|7[467])|2(?:1[246]|2[25]|3[26])", "1(?:5[24]|6(?:2|3[04-9]|5[0346-9])|7(?:[46]|7[37-9]))|2(?:1[246]|2[25]|3[26])"], "8 0$1"],
                        ["(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", ["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"], "8 0$1"],
                        ["([89]\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8[01]|9"], "8 $1"],
                        ["(82\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["82"], "8 $1"],
                        ["(800)(\\d{3})", "$1 $2", ["800"], "8 $1"],
                        ["(800)(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"]
                    ], "8", null, "8?0?"],
                    BZ: ["501", "[2-8]\\d{6}|0\\d{10}", [
                        ["(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]],
                        ["(0)(800)(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["080", "0800"]]
                    ]],
                    CA: ["1", "[2-9]\\d{9}", [
                        ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]
                    ], "1", null, null, null, null, null, ["(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|65)|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|48|79|8[17])|6(?:0[04]|13|22|39|47)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}", null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", "900[2-9]\\d{6}", "5(?:(?:00|22|33|44|66|77|88)[2-9]|21[23])\\d{6}"]],
                    CC: ["61", "[1458]\\d{5,9}", [
                        ["([2378])(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"],
                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|[45]"], "0$1"],
                        ["(16)(\\d{3,4})", "$1 $2", ["16"], "0$1"],
                        ["(16)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"],
                        ["(1[389]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[389]0", "1(?:[38]0|9)0"]],
                        ["(180)(2\\d{3})", "$1 $2", ["180", "1802"]],
                        ["(19\\d)(\\d{3})", "$1 $2", ["19[13]"]],
                        ["(19\\d{2})(\\d{4})", "$1 $2", ["19[679]"]],
                        ["(13)(\\d{2})(\\d{2})", "$1 $2 $3", ["13[1-9]"]]
                    ], "0", null, null, null, null, null, ["8(?:51(?:0(?:02|31|60)|118)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:08|22|68)|4[29]8|62\\d|70[23]|959))\\d{3}", "14(?:5\\d|71)\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[6-9]|7[02-9]|8[12547-9]|9[017-9])\\d{6}", "180(?:0\\d{3}|2)\\d{3}", "19(?:0[0126]\\d|[679])\\d{5}", "500\\d{6}", null, null, null, "550\\d{6}", "13(?:00\\d{2})?\\d{4}"]],
                    CD: ["243", "[2-6]\\d{6}|[18]\\d{6,8}|9\\d{8}", [
                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["12"]],
                        ["([89]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[0-2459]|9"]],
                        ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"]],
                        ["(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"]]
                    ], "0", "0$1"],
                    CF: ["236", "[278]\\d{7}", [
                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]
                    ]],
                    CG: ["242", "[028]\\d{8}", [
                        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["801"]],
                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]],
                        ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["800"]]
                    ]],
                    CH: ["41", "[2-9]\\d{8}|860\\d{9}", [
                        ["([2-9]\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]|[89]1"]],
                        ["([89]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"]],
                        ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["860"]]
                    ], "0", "0$1"],
                    CI: ["225", "[02-8]\\d{7}", [
                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]
                    ]],
                    CK: ["682", "[2-8]\\d{4}", [
                        ["(\\d{2})(\\d{3})", "$1 $2"]
                    ]],
                    CL: ["56", "1230\\d{7}|[2-46-9]\\d{8,10}|5[1-3578]\\d{7}", [
                        ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[23]"], "($1)"],
                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[357]|4[1-35]|6[13-57]"], "($1)"],
                        ["(9)(\\d{4})(\\d{4})", "$1 $2 $3", ["9"]],
                        ["(44)(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]],
                        ["([68]00)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[68]00"], "$1"],
                        ["(600)(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["600"], "$1"],
                        ["(1230)(\\d{3})(\\d{4})", "$1 $2 $3", ["123", "1230"], "$1"],
                        ["(\\d{5})(\\d{4})", "$1 $2", ["219"], "($1)"]
                    ], "0", "0$1", "0|(1(?:1[0-69]|2[0-57]|5[13-58]|69|7[0167]|8[018]))"],
                    CM: ["237", "[2368]\\d{7,8}", [
                        ["([26])(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]"]],
                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[23]|88"]]
                    ]],
                    CN: ["86", "[1-7]\\d{6,11}|8[0-357-9]\\d{6,9}|9\\d{7,10}", [
                        ["([48]00)(\\d{3})(\\d{4})", "$1 $2 $3", ["[48]00"]],
                        ["(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2\\d)[19]", "(?:10|2\\d)(?:10|9[56])", "(?:10|2\\d)(?:100|9[56])"], "0$1"],
                        ["(\\d{3})(\\d{5,6})", "$1 $2", ["[3-9]", "[3-9]\\d\\d[19]", "[3-9]\\d\\d(?:10|9[56])"], "0$1"],
                        ["(21)(\\d{4})(\\d{4,6})", "$1 $2 $3", ["21"], "0$1", "true"],
                        ["([12]\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["10[1-9]|2[02-9]", "10[1-9]|2[02-9]", "10(?:[1-79]|8(?:0[1-9]|[1-9]))|2[02-9]"], "0$1", "true"],
                        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:1[02-9]|35|49|5|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|[35][2-9]|6[47-9]|7|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[04-9]|4[3-6]|6[2368])|8(?:1[236-8]|2[5-7]|3|5[1-9]|7[02-9]|8[36-8]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])"], "0$1", "true"],
                        ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["3(?:11|7[179])|4(?:[15]1|3[1-35])|5(?:1|2[37]|3[12]|51|7[13-79]|9[15])|7(?:[39]1|5[457]|6[09])|8(?:[57]1|98)"], "0$1", "true"],
                        ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["807", "8078"], "0$1", "true"],
                        ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1(?:[3-57-9]|66)"]],
                        ["(10800)(\\d{3})(\\d{4})", "$1 $2 $3", ["108", "1080", "10800"]],
                        ["(\\d{3})(\\d{7,8})", "$1 $2", ["950"]]
                    ], "0", null, "(1(?:[129]\\d{3}|79\\d{2}))|0"],
                    CO: ["57", "(?:[13]\\d{0,3}|[24-8])\\d{7}", [
                        ["(\\d)(\\d{7})", "$1 $2", ["1(?:[2-7]|8[2-9]|9[0-3])|[24-8]", "1(?:[2-7]|8[2-9]|9(?:09|[1-3]))|[24-8]"], "($1)"],
                        ["(\\d{3})(\\d{7})", "$1 $2", ["3"]],
                        ["(1)(\\d{3})(\\d{7})", "$1-$2-$3", ["1(?:80|9[04])", "1(?:800|9(?:0[01]|4[78]))"], "0$1", null, "$1 $2 $3"]
                    ], "0", null, "0([3579]|4(?:44|56))?"],
                    CR: ["506", "[24-9]\\d{7,9}", [
                        ["(\\d{4})(\\d{4})", "$1 $2", ["[24-7]|8[3-9]"]],
                        ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]0"]]
                    ], null, null, "(19(?:0[012468]|1[09]|20|66|77|99))"],
                    CU: ["53", "[2-57]\\d{5,7}", [
                        ["(\\d)(\\d{6,7})", "$1 $2", ["7"]],
                        ["(\\d{2})(\\d{4,6})", "$1 $2", ["[2-4]"]],
                        ["(\\d)(\\d{7})", "$1 $2", ["5"], "0$1"]
                    ], "0", "(0$1)"],
                    CV: ["238", "[259]\\d{6}", [
                        ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3"]
                    ]],
                    CW: ["599", "[134679]\\d{6,7}", [
                        ["(\\d{3})(\\d{4})", "$1 $2", ["[13-7]"]],
                        ["(9)(\\d{3})(\\d{4})", "$1 $2 $3", ["9"]]
                    ], null, null, null, null, null, null, ["9(?:[48]\\d{2}|50\\d|7(?:2[0-24]|[34]\\d|6[35-7]|77|8[7-9]))\\d{4}", "9(?:5(?:[12467]\\d|3[01])|6(?:[15-9]\\d|3[01]))\\d{4}", null, null, null, null, null, "955\\d{5}", null, "60[0-2]\\d{4}"]],
                    CX: ["61", "[1458]\\d{5,9}", [
                        ["([2378])(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"],
                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|[45]"], "0$1"],
                        ["(16)(\\d{3,4})", "$1 $2", ["16"], "0$1"],
                        ["(16)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"],
                        ["(1[389]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[389]0", "1(?:[38]0|9)0"]],
                        ["(180)(2\\d{3})", "$1 $2", ["180", "1802"]],
                        ["(19\\d)(\\d{3})", "$1 $2", ["19[13]"]],
                        ["(19\\d{2})(\\d{4})", "$1 $2", ["19[679]"]],
                        ["(13)(\\d{2})(\\d{2})", "$1 $2 $3", ["13[1-9]"]]
                    ], "0", null, null, null, null, null, ["8(?:51(?:0(?:01|30|59)|117)|91(?:00[6-9]|1(?:21|49|78|81)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}", "14(?:5\\d|71)\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[6-9]|7[02-9]|8[12547-9]|9[017-9])\\d{6}", "180(?:0\\d{3}|2)\\d{3}", "19(?:0[0126]\\d|[679])\\d{5}", "500\\d{6}", null, null, null, "550\\d{6}", "13(?:00\\d{2})?\\d{4}"]],
                    CY: ["357", "[257-9]\\d{7}", [
                        ["(\\d{2})(\\d{6})", "$1 $2"]
                    ]],
                    CZ: ["420", "[2-8]\\d{8}|9\\d{8,11}", [
                        ["([2-9]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]],
                        ["(96\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["96"]],
                        ["(9\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9[36]"]]
                    ]],
                    DE: ["49", "[1-35-9]\\d{3,14}|4(?:[0-8]\\d{3,12}|9(?:[0-37]\\d|4(?:[1-35-8]|4\\d?)|5\\d{1,2}|6[1-8]\\d?)\\d{2,8})", [
                        ["(1\\d{2})(\\d{7,8})", "$1 $2", ["1[67]"]],
                        ["(15\\d{3})(\\d{6})", "$1 $2", ["15[0568]"]],
                        ["(1\\d{3})(\\d{7})", "$1 $2", ["15"]],
                        ["(\\d{2})(\\d{3,11})", "$1 $2", ["3[02]|40|[68]9"]],
                        ["(\\d{3})(\\d{3,11})", "$1 $2", ["2(?:0[1-389]|1[124]|2[18]|3[14]|[4-9]1)|3(?:[35-9][15]|4[015])|[4-8][1-9]1|9(?:06|[1-9]1)"]],
                        ["(\\d{4})(\\d{2,11})", "$1 $2", ["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|[7-9](?:0[1-9]|[1-9])", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|[46][1246]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|3[1357]|4[13578]|6[1246]|7[1356]|9[1346])|5(?:0[14]|2[1-3589]|3[1357]|[49][1246]|6[1-4]|7[1346]|8[13568])|6(?:0[356]|2[1-489]|3[124-6]|4[1347]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|3[1357]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|4[1347]|6[0135-9]|7[1467]|8[136])|9(?:0[12479]|2[1358]|3[1357]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|[7-9](?:0[1-9]|[1-9])"]],
                        ["(3\\d{4})(\\d{1,10})", "$1 $2", ["3"]],
                        ["(800)(\\d{7,12})", "$1 $2", ["800"]],
                        ["(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:37|80)|900", "1(?:37|80)|900[1359]"]],
                        ["(1\\d{2})(\\d{5,11})", "$1 $2", ["181"]],
                        ["(18\\d{3})(\\d{6})", "$1 $2", ["185", "1850", "18500"]],
                        ["(18\\d{2})(\\d{7})", "$1 $2", ["18[68]"]],
                        ["(18\\d)(\\d{8})", "$1 $2", ["18[2-579]"]],
                        ["(700)(\\d{4})(\\d{4})", "$1 $2 $3", ["700"]],
                        ["(138)(\\d{4})", "$1 $2", ["138"]],
                        ["(15[013-68])(\\d{2})(\\d{8})", "$1 $2 $3", ["15[013-68]"]],
                        ["(15[279]\\d)(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"]],
                        ["(1[67]\\d)(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"]]
                    ], "0", "0$1"],
                    DJ: ["253", "[27]\\d{7}", [
                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]
                    ]],
                    DK: ["45", "[2-9]\\d{7}", [
                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]
                    ]],
                    DM: ["1", "[57-9]\\d{9}", [
                        ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]
                    ], "1", null, null, null, null, "767"],
                    DO: ["1", "[589]\\d{9}", [
                        ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]
                    ], "1", null, null, null, null, "8[024]9"],
                    DZ: ["213", "(?:[1-4]|[5-9]\\d)\\d{7}", [
                        ["([1-4]\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"]],
                        ["([5-8]\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"]],
                        ["(9\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"]]
                    ], "0", "0$1"],
                    EC: ["593", "1\\d{9,10}|[2-8]\\d{7}|9\\d{8}", [
                        ["(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[247]|[356][2-8]"], null, null, "$1-$2-$3"],
                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"],
                        ["(1800)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["180", "1800"], "$1"]
                    ], "0", "(0$1)"],
                    EE: ["372", "[3-9]\\d{6,7}|800\\d{6,7}", [
                        ["([3-79]\\d{2})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]"]],
                        ["(70)(\\d{2})(\\d{4})", "$1 $2 $3", ["70"]],
                        ["(8000)(\\d{3})(\\d{3})", "$1 $2 $3", ["800", "8000"]],
                        ["([458]\\d{3})(\\d{3,4})", "$1 $2", ["40|5|8(?:00|[1-5])", "40|5|8(?:00[1-9]|[1-5])"]]
                    ]],
                    EG: ["20", "1\\d{4,9}|[24-6]\\d{8}|3\\d{7}|[89]\\d{8,9}", [
                        ["(\\d)(\\d{7,8})", "$1 $2", ["[23]"]],
                        ["(\\d{2})(\\d{6,7})", "$1 $2", ["1(?:3|5[239])|[4-6]|[89][2-9]"]],
                        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1[0-25]|[89]00"]]
                    ], "0", "0$1"],
                    EH: ["212", "[5-9]\\d{8}", [
                        ["([5-7]\\d{2})(\\d{6})", "$1-$2", ["5(?:2[015-7]|3[0-4])|[67]"]],
                        ["([58]\\d{3})(\\d{5})", "$1-$2", ["5(?:2[2-489]|3[5-9]|92)|892", "5(?:2(?:[2-48]|9[0-7])|3(?:[5-79]|8[0-7])|924)|892"]],
                        ["(5\\d{4})(\\d{4})", "$1-$2", ["5(?:29|38)", "5(?:29|38)[89]"]],
                        ["([5]\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:4[067]|5[03])"]],
                        ["(8[09])(\\d{7})", "$1-$2", ["8(?:0|9[013-9])"]]
                    ], "0", null, null, null, null, "528[89]"],
                    ER: ["291", "[178]\\d{6}", [
                        ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3"]
                    ], "0", "0$1"],
                    ES: ["34", "[5-9]\\d{8}", [
                        ["([89]00)(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]],
                        ["([5-9]\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[568]|[79][0-8]"]]
                    ]],
                    ET: ["251", "[1-59]\\d{8}", [
                        ["([1-59]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-59]"]]
                    ], "0", "0$1"],
                    FI: ["358", "1\\d{4,11}|[2-9]\\d{4,10}", [
                        ["(\\d{3})(\\d{3,7})", "$1 $2", ["(?:[1-3]0|[6-8])0"]],
                        ["(75\\d{3})", "$1", ["75[12]"]],
                        ["(116\\d{3})", "$1", ["116"], "$1"],
                        ["(\\d{2})(\\d{4,10})", "$1 $2", ["[14]|2[09]|50|7[135]"]],
                        ["(\\d)(\\d{4,11})", "$1 $2", ["[25689][1-8]|3"]]
                    ], "0", "0$1", null, null, null, null, ["1(?:[3569][1-8]\\d{3,9}|[47]\\d{5,10})|2[1-8]\\d{3,9}|3(?:[1-8]\\d{3,9}|9\\d{4,8})|[5689][1-8]\\d{3,9}", "4(?:[0-8]\\d{4,9}|9\\d{3,8})|50\\d{4,8}", "800\\d{4,7}", "[67]00\\d{5,6}", null, null, "[13]0\\d{4,8}|2(?:0(?:[016-8]\\d{3,7}|[2-59]\\d{2,7})|9\\d{4,8})|60(?:[12]\\d{5,6}|6\\d{7})|7(?:1\\d{7}|3\\d{8}|5[03-9]\\d{3,7})"]],
                    FJ: ["679", "[2-9]\\d{6}|0\\d{10}", [
                        ["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]],
                        ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]
                    ]],
                    FK: ["500", "[2-7]\\d{4}"],
                    FM: ["691", "[39]\\d{6}", [
                        ["(\\d{3})(\\d{4})", "$1 $2"]
                    ]],
                    FO: ["298", "[2-9]\\d{5}", [
                        ["(\\d{6})", "$1"]
                    ], null, null, "(10(?:01|[12]0|88))"],
                    FR: ["33", "[1-9]\\d{8}", [
                        ["([1-79])(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"]],
                        ["(8\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"]
                    ], "0", "0$1"],
                    GA: ["241", "0?\\d{7}", [
                        ["(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"],
                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]]
                    ]],
                    GB: ["44", "\\d{7,10}", [
                        ["(7\\d{3})(\\d{6})", "$1 $2", ["7(?:[1-57-9]|62)", "7(?:[1-57-9]|624)"]],
                        ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2|5[56]|7[06]"]],
                        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:[02-9]1|1)|3|9[018]"]],
                        ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"]],
                        ["(1\\d{3})(\\d{5,6})", "$1 $2", ["1"]],
                        ["(800)(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"]],
                        ["(845)(46)(4\\d)", "$1 $2 $3", ["845", "8454", "84546", "845464"]],
                        ["(8\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8(?:4[2-5]|7[0-3])"]],
                        ["(80\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["80"]],
                        ["(800)(\\d{6})", "$1 $2", ["800"]]
                    ], "0", "0$1", null, null, null, null, ["2(?:0[01378]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{7}|1(?:1(?:3[0-48]|[46][0-4]|5[0-26-9]|[78][0-49])|21[0-7]|31[0-8]|[4-69]1\\d)\\d{6}|1(?:2(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)|3(?:0\\d|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[28][02-57-9]|[37]\\d|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|2[024-9]|3[015689]|4[02-9]|5[03-9]|6\\d|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0124578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|8\\d|9[2-57]))\\d{6}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[345])))|3(?:638[2-5]|647[23]|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[123]))|5(?:24(?:3[2-79]|6\\d)|276\\d|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[567]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|955[0-4])|7(?:26(?:6[13-9]|7[0-7])|442\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|84(?:3[2-58]))|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}|176888[2-46-8]\\d{2}|16977[23]\\d{3}", "7(?:[1-3]\\d{3}|4(?:[0-46-9]\\d{2}|5(?:[0-689]\\d|7[0-57-9]))|5(?:0[0-8]|[13-9]\\d|2[0-35-9])\\d|7(?:0(?:0[01]|[1-9]\\d)|[1-7]\\d{2}|8[02-9]\\d|9[0-689]\\d)|8(?:[014-9]\\d|[23][0-8])\\d|9(?:[024-9]\\d{2}|1(?:[02-9]\\d|1[028])|3[0-689]\\d))\\d{5}", "80(?:0(?:1111|\\d{6,7})|8\\d{7})", "(?:87[123]|9(?:[01]\\d|8[2349]))\\d{7}", "70\\d{8}", null, "(?:3[0347]|55)\\d{8}", "76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}", "56\\d{8}", "8(?:4(?:5464\\d|[2-5]\\d{7})|70\\d{7})"]],
                    GD: ["1", "[4589]\\d{9}", [
                        ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]
                    ], "1", null, null, null, null, "473"],
                    GE: ["995", "[34578]\\d{8}", [
                        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"],
                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"],
                        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5"]]
                    ], "0"],
                    GF: ["594", "[56]\\d{8}", [
                        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]
                    ], "0", "0$1"],
                    GG: ["44", "[135789]\\d{6,9}", [
                        ["(7\\d{3})(\\d{6})", "$1 $2", ["7(?:[1-57-9]|62)", "7(?:[1-57-9]|624)"]],
                        ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2|5[56]|7[06]"]],
                        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:[02-9]1|1)|3|9[018]"]],
                        ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"]],
                        ["(1\\d{3})(\\d{5,6})", "$1 $2", ["1"]],
                        ["(800)(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"]],
                        ["(845)(46)(4\\d)", "$1 $2 $3", ["845", "8454", "84546", "845464"]],
                        ["(8\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8(?:4[2-5]|7[0-3])"]],
                        ["(80\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["80"]],
                        ["(800)(\\d{6})", "$1 $2", ["800"]]
                    ], "0", null, null, null, null, null, ["1481[25-9]\\d{5}", "7(?:781\\d|839\\d|911[17])\\d{5}", "80(?:0(?:1111|\\d{6,7})|8\\d{7})", "(?:87[123]|9(?:[01]\\d|8[0-3]))\\d{7}", "70\\d{8}", null, "(?:3[0347]|55)\\d{8}", "76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}", "56\\d{8}", "8(?:4(?:5464\\d|[2-5]\\d{7})|70\\d{7})"]],
                    GH: ["233", "[235]\\d{8}|8\\d{7}", [
                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"]],
                        ["(\\d{3})(\\d{5})", "$1 $2", ["8"]]
                    ], "0", "0$1"],
                    GI: ["350", "[256]\\d{7}", [
                        ["(\\d{3})(\\d{5})", "$1 $2", ["2"]]
                    ]],
                    GL: ["299", "[1-689]\\d{5}", [
                        ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3"]
                    ]],
                    GM: ["220", "[2-9]\\d{6}", [
                        ["(\\d{3})(\\d{4})", "$1 $2"]
                    ]],
                    GN: ["224", "[367]\\d{7,8}", [
                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]],
                        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]]
                    ]],
                    GP: ["590", "[56]\\d{8}", [
                        ["([56]\\d{2})(\\d{2})(\\d{4})", "$1 $2-$3", ["590|69[01]"]]
                    ], "0", "0$1", null, null, null, null, ["590(?:0[1-68]|1[0-2]|2[0-68]|3[1289]|4[0-24-9]|5[3-579]|6[0189]|7[08]|8[0-689]|9\\d)\\d{4}", "69(?:0\\d{2}|1(?:2[29]|3[0-5]))\\d{4}"]],
                    GQ: ["240", "[23589]\\d{8}", [
                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]],
                        ["(\\d{3})(\\d{6})", "$1 $2", ["[89]"]]
                    ]],
                    GR: ["30", "[26-9]\\d{9}", [
                        ["([27]\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]],
                        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[2-9]1|[689]"]],
                        ["(2\\d{3})(\\d{6})", "$1 $2", ["2[2-9][02-9]"]]
                    ]],
                    GT: ["502", "[2-7]\\d{7}|1[89]\\d{9}", [
                        ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]"]],
                        ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]
                    ]],
                    GU: ["1", "[5689]\\d{9}", [
                        ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]
                    ], "1", null, null, null, null, "671"],
                    GW: ["245", "(?:4(?:0\\d{5}|4\\d{7})|9\\d{8})", [
                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["44|9[5-7]"]],
                        ["(\\d{3})(\\d{4})", "$1 $2", ["40"]]
                    ]],
                    GY: ["592", "[2-46-9]\\d{6}", [
                        ["(\\d{3})(\\d{4})", "$1 $2"]
                    ]],
                    HK: ["852", "[2-7]\\d{7}|8[0-3]\\d{6,7}|9\\d{4,10}", [
                        ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|[89](?:0[1-9]|[1-9])"]],
                        ["(800)(\\d{3})(\\d{3})", "$1 $2 $3", ["800"]],
                        ["(900)(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["900"]],
                        ["(900)(\\d{2,5})", "$1 $2", ["900"]]
                    ]],
                    HN: ["504", "[237-9]\\d{7}", [
                        ["(\\d{4})(\\d{4})", "$1-$2"]
                    ]],
                    HR: ["385", "[1-7]\\d{5,8}|[89]\\d{6,8}", [
                        ["(1)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"]],
                        ["([2-5]\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-5]"]],
                        ["(9\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"]],
                        ["(6[01])(\\d{2})(\\d{2,3})", "$1 $2 $3", ["6[01]"]],
                        ["([67]\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[67]"]],
                        ["(80[01])(\\d{2})(\\d{2,3})", "$1 $2 $3", ["80[01]"]],
                        ["(80[01])(\\d{3})(\\d{3})", "$1 $2 $3", ["80[01]"]]
                    ], "0", "0$1"],
                    HT: ["509", "[2-489]\\d{7}", [
                        ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3"]
                    ]],
                    HU: ["36", "[1-9]\\d{7,8}", [
                        ["(1)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]],
                        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"]]
                    ], "06", "($1)"],
                    ID: ["62", "(?:[1-79]\\d{6,10}|8\\d{7,11})", [
                        ["(\\d{2})(\\d{5,8})", "$1 $2", ["2[124]|[36]1"], "(0$1)"],
                        ["(\\d{3})(\\d{5,8})", "$1 $2", ["2[035-9]|[36][02-9]|[4579]"], "(0$1)"],
                        ["(8\\d{2})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"]],
                        ["(8\\d{2})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8[1-35-9]"]],
                        ["(1)(500)(\\d{3})", "$1 $2 $3", ["150", "1500"], "$1"],
                        ["(177)(\\d{6,8})", "$1 $2", ["177"]],
                        ["(800)(\\d{5,7})", "$1 $2", ["800"]],
                        ["(804)(\\d{3})(\\d{4})", "$1 $2 $3", ["804"]],
                        ["(80\\d)(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80[79]"]]
                    ], "0", "0$1"],
                    IE: ["353", "[124-9]\\d{6,9}", [
                        ["(1)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"]],
                        ["(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"]],
                        ["(\\d{3})(\\d{5})", "$1 $2", ["40[24]|50[45]"]],
                        ["(48)(\\d{4})(\\d{4})", "$1 $2 $3", ["48"]],
                        ["(818)(\\d{3})(\\d{3})", "$1 $2 $3", ["818"]],
                        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[24-69]|7[14]"]],
                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["76|8[35-9]"], "0$1"],
                        ["(8\\d)(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8[35-9]5"], "0$1"],
                        ["(700)(\\d{3})(\\d{3})", "$1 $2 $3", ["700"], "0$1"],
                        ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:5|8[059])", "1(?:5|8[059]0)"], "$1"]
                    ], "0", "(0$1)"],
                    IL: ["972", "1\\d{6,11}|[2-589]\\d{3}(?:\\d{3,6})?|6\\d{3}|7\\d{6,9}", [
                        ["([2-489])(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"],
                        ["([57]\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"],
                        ["(153)(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["153"]],
                        ["(1)([7-9]\\d{2})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]],
                        ["(1255)(\\d{3})", "$1-$2", ["125", "1255"]],
                        ["(1200)(\\d{3})(\\d{3})", "$1-$2-$3", ["120", "1200"]],
                        ["(1212)(\\d{2})(\\d{2})", "$1-$2-$3", ["121", "1212"]],
                        ["(1599)(\\d{6})", "$1-$2", ["159", "1599"]],
                        ["(151)(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["151"]],
                        ["(\\d{4})", "*$1", ["[2-689]"]]
                    ], "0"],
                    IM: ["44", "[135789]\\d{6,9}", [
                        ["(7\\d{3})(\\d{6})", "$1 $2", ["7(?:[1-57-9]|62)", "7(?:[1-57-9]|624)"]],
                        ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2|5[56]|7[06]"]],
                        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:[02-9]1|1)|3|9[018]"]],
                        ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"]],
                        ["(1\\d{3})(\\d{5,6})", "$1 $2", ["1"]],
                        ["(800)(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"]],
                        ["(845)(46)(4\\d)", "$1 $2 $3", ["845", "8454", "84546", "845464"]],
                        ["(8\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8(?:4[2-5]|7[0-3])"]],
                        ["(80\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["80"]],
                        ["(800)(\\d{6})", "$1 $2", ["800"]]
                    ], "0", null, null, null, null, null, ["1624[5-8]\\d{5}", "7(?:4576|[59]24\\d|624[0-4689])\\d{5}", "808162\\d{4}", "(?:872299|90[0167]624)\\d{4}", "70\\d{8}", null, "3(?:08162\\d|3\\d{5}|4(?:40[49]06|5624\\d)|7(?:0624\\d|2299\\d))\\d{3}|55\\d{8}", null, "56\\d{8}", "8(?:4(?:40[49]06|5624\\d)|70624\\d)\\d{3}"]],
                    IN: ["91", "008\\d{9}|1\\d{7,12}|[2-9]\\d{9,10}", [
                        ["(\\d{8})", "$1", ["561", "5616", "56161"], "$1"],
                        ["(\\d{5})(\\d{5})", "$1 $2", ["6(?:[09]0|2[03689]|3[05-9])|7(?:[02-8]|19|9[037-9])|8(?:0[015-9]|[1-9])|9", "6(?:[09]0|2(?:0[01]|39|60|8[0-2]|9[04])|3(?:0[01]|5[0-2]|60|7[05]|81|9[03-5]))|7(?:[07]|19[0-5]|2(?:[0235-9]|[14][017-9])|3(?:[025-9]|[134][017-9])|4(?:[0-35689]|[47][017-9])|5(?:[02-46-9]|[15][017-9])|6(?:[02-9]|1[0-257-9])|8(?:[0-79]|8[0189])|9(?:[089]|31|7[02-9]))|8(?:0(?:[01589]|6[67]|7[02-9])|1(?:[0-57-9]|6[07-9])|2(?:[014][07-9]|[235-9])|3(?:[03-57-9]|[126][07-9])|[45]|6(?:[02457-9]|[136][07-9])|7(?:[078][07-9]|[1-69])|8(?:[0-25-9]|3[07-9]|4[047-9])|9(?:[02-9]|1[027-9]))|9", "6(?:[09]0|2(?:0[01]|39|60|8[0-2]|9[04])|3(?:0[01]|5[0-2]|60|7[05]|81|9[03-5]))|7(?:0|19[0-5]|2(?:[0235-79]|[14][017-9]|8(?:[0-69]|[78][089]))|3(?:[05-8]|1(?:[0189]|7[5-9])|2(?:[0-49][089]|[5-8])|3[017-9]|4(?:[07-9]|11)|9(?:[01689]|[2-5][089]|7[0189]))|4(?:[056]|1(?:[0135-9]|[24][089])|[29](?:[0-7][089]|[89])|3(?:[0-8][089]|9)|[47](?:[089]|11|7[02-8])|8(?:[0-24-7][089]|[389]))|5(?:[0346-9]|[15][017-9]|2(?:[03-9]|[12][089]))|6(?:[0346-9]|1[0-257-9]|2(?:[0-4]|[5-9][089])|5(?:[0-367][089]|[4589]))|7(?:0(?:[02-9]|1[089])|[1-9])|8(?:[0-79]|8(?:0[0189]|11|8[013-9]|9))|9(?:[089]|313|7(?:[02-8]|9[07-9])))|8(?:0(?:[01589]|6[67]|7(?:[02-8]|9[05-9]))|1(?:[02-57-9]|1(?:[0-35-9]|4[0-46-9])|6(?:[089]|7[02-8]))|2(?:0(?:[089]|7[02])|[14](?:[089]|7[02-8])|[235-9])|3(?:[03-57-9]|1(?:[089]|7[02-6])|2(?:[09]|77|8[0-689])|6(?:[089]|7[02-7]))|[45]|6(?:[02457-9]|[136](?:[089]|7[02-8]))|7(?:0[07-9]|[1-69]|[78](?:[089]|7[02-8]))|8(?:[0-25-9]|3(?:[089]|7[02-8])|4(?:[0489]|7[02-68]))|9(?:[02-9]|1(?:[0289]|7[2-6])))|9"]],
                        ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-9]|80[2-46]"]],
                        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[59][14]|[68][1-9]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1|9[15])|6(?:12|[2-4]1|5[17]|6[13]|7[14]|80)|7(?:12|2[14]|3[134]|4[47]|5[15]|[67]1|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)"]],
                        ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[23579]|[468][1-9])|[2-8]"]],
                        ["(\\d{2})(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3 $4", ["008"]],
                        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], "$1"],
                        ["(\\d{4})(\\d{2})(\\d{4})", "$1 $2 $3", ["160", "1600"], "$1"],
                        ["(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], "$1"],
                        ["(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["180", "1800"], "$1"],
                        ["(\\d{4})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["186", "1860"], "$1"],
                        ["(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18[06]"], "$1"]
                    ], "0", "0$1", null, null, !0],
                    IO: ["246", "3\\d{6}", [
                        ["(\\d{3})(\\d{4})", "$1 $2"]
                    ]],
                    IQ: ["964", "[1-7]\\d{7,9}", [
                        ["(1)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]],
                        ["([2-6]\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"]],
                        ["(7\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"]]
                    ], "0", "0$1"],
                    IR: ["98", "[1-8]\\d{5,9}|9(?:[0-4]\\d{8}|9\\d{8})", [
                        ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"]],
                        ["(\\d{2})(\\d{4,5})", "$1 $2", ["[1-8]"]],
                        ["(\\d{4,5})", "$1", ["96"]],
                        ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"]]
                    ], "0", "0$1"],
                    IS: ["354", "[4-9]\\d{6}|38\\d{7}", [
                        ["(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]],
                        ["(3\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]]
                    ]],
                    IT: ["39", "[01589]\\d{5,10}|3(?:[12457-9]\\d{8}|[36]\\d{7,9})", [
                        ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|55"]],
                        ["(0[26])(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]],
                        ["(0[26])(\\d{4,6})", "$1 $2", ["0[26]"]],
                        ["(0\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]"]],
                        ["(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[245])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|[45][0-4]))"]],
                        ["(0\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["0[13-57-9][2-46-8]"]],
                        ["(0\\d{3})(\\d{2,6})", "$1 $2", ["0[13-57-9][2-46-8]"]],
                        ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13]|8(?:00|4[08]|9[59])", "[13]|8(?:00|4[08]|9(?:5[5-9]|9))"]],
                        ["(\\d{4})(\\d{4})", "$1 $2", ["894", "894[5-9]"]],
                        ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["3"]]
                    ], null, null, null, null, null, null, ["0(?:[26]\\d{4,9}|(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2346]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[34578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7})", "3(?:[12457-9]\\d{8}|6\\d{7,8}|3\\d{7,9})", "80(?:0\\d{6}|3\\d{3})", "0878\\d{5}|1(?:44|6[346])\\d{6}|89(?:2\\d{3}|4(?:[0-4]\\d{2}|[5-9]\\d{4})|5(?:[0-4]\\d{2}|[5-9]\\d{6})|9\\d{6})", "1(?:78\\d|99)\\d{6}", null, null, null, "55\\d{8}", "84(?:[08]\\d{6}|[17]\\d{3})"]],
                    JE: ["44", "[135789]\\d{6,9}", [
                        ["(7\\d{3})(\\d{6})", "$1 $2", ["7(?:[1-57-9]|62)", "7(?:[1-57-9]|624)"]],
                        ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2|5[56]|7[06]"]],
                        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:[02-9]1|1)|3|9[018]"]],
                        ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"]],
                        ["(1\\d{3})(\\d{5,6})", "$1 $2", ["1"]],
                        ["(800)(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"]],
                        ["(845)(46)(4\\d)", "$1 $2 $3", ["845", "8454", "84546", "845464"]],
                        ["(8\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8(?:4[2-5]|7[0-3])"]],
                        ["(80\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["80"]],
                        ["(800)(\\d{6})", "$1 $2", ["800"]]
                    ], "0", null, null, null, null, null, ["1534[0-24-8]\\d{5}", "7(?:509\\d|7(?:00[378]|97[7-9])|829\\d|937\\d)\\d{5}", "80(?:07(?:35|81)|8901)\\d{4}", "(?:871206|90(?:066[59]|1810|71(?:07|55)))\\d{4}", "701511\\d{4}", null, "3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))\\d{4}|55\\d{8}", "76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}", "56\\d{8}", "8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|70002)\\d{4}"]],
                    JM: ["1", "[589]\\d{9}", [
                        ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]
                    ], "1", null, null, null, null, "876"],
                    JO: ["962", "[235-9]\\d{7,8}", [
                        ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"],
                        ["(7)(\\d{4})(\\d{4})", "$1 $2 $3", ["7[457-9]"]],
                        ["(\\d{2})(\\d{7})", "$1 $2", ["70"]],
                        ["(\\d{3})(\\d{5,6})", "$1 $2", ["8[0158]|9"]]
                    ], "0", "0$1"],
                    JP: ["81", "[1-9]\\d{8,9}|00(?:[36]\\d{7,14}|7\\d{5,7}|8\\d{7})", [
                        ["(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"]],
                        ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"]],
                        ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[2579]0|80[1-9]"]],
                        ["(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51|63)|9(?:49|80|9[16])", "1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[78]|96)|477|51[24]|636)|9(?:496|802|9(?:1[23]|69))", "1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[78]|96[2457-9])|477|51[24]|636[2-57-9])|9(?:496|802|9(?:1[23]|69))"]],
                        ["(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["1(?:2[3-6]|3[3-9]|4[2-6]|5[2-8]|[68][2-7]|7[2-689]|9[1-578])|2(?:2[03-689]|3[3-58]|4[0-468]|5[04-8]|6[013-8]|7[06-9]|8[02-57-9]|9[13])|4(?:2[28]|3[689]|6[035-7]|7[05689]|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9[4-9])|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9[014-9])|8(?:2[49]|3[3-8]|4[5-8]|5[2-9]|6[35-9]|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9[3-7])", "1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9[2-8])|3(?:[3-6][2-9]|7[2-6]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5[4-7]|6[2-9]|8[2-8]|9[236-9])|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3[34]|4[2-69]|[5-7]))", "1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:20|[3578]|4[04-9]|6[56]))|3(?:[3-6][2-9]|7(?:[2-5]|6[0-59])|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))", "1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:20|[3578]|4[04-9]|6(?:5[25]|60)))|3(?:[3-6][2-9]|7(?:[2-5]|6[0-59])|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))"]],
                        ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1|2(?:2[37]|5[5-9]|64|78|8[39]|91)|4(?:2[2689]|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93)", "1|2(?:2[37]|5(?:[57]|[68]0|9[19])|64|78|8[39]|917)|4(?:2(?:20|[68]|9[178])|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93[34])", "1|2(?:2[37]|5(?:[57]|[68]0|9(?:17|99))|64|78|8[39]|917)|4(?:2(?:20|[68]|9[178])|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93(?:31|4))"]],
                        ["(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["2(?:[34]7|[56]9|74|9[14-79])|82|993"]],
                        ["(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["3|4(?:2[09]|7[01])|6[1-9]"]],
                        ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[2479][1-9]"]]
                    ], "0", "0$1"],
                    KE: ["254", "20\\d{6,7}|[4-9]\\d{6,9}", [
                        ["(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"]],
                        ["(\\d{3})(\\d{6})", "$1 $2", ["7"]],
                        ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"]]
                    ], "0", "0$1", "005|0"],
                    KG: ["996", "[235-8]\\d{8,9}", [
                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[25-7]|31[25]"]],
                        ["(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[36]|[2-9])"]],
                        ["(\\d{3})(\\d{3})(\\d)(\\d{3})", "$1 $2 $3 $4", ["8"]]
                    ], "0", "0$1"],
                    KH: ["855", "[1-9]\\d{7,9}", [
                        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1\\d[1-9]|[2-9]"], "0$1"],
                        ["(1[89]00)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[89]0", "1[89]00"]]
                    ], "0"],
                    KI: ["686", "[2458]\\d{4}|3\\d{4,7}|[67]\\d{7}", [], null, null, "0"],
                    KM: ["269", "[3478]\\d{6}", [
                        ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3"]
                    ]],
                    KN: ["1", "[589]\\d{9}", [
                        ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]
                    ], "1", null, null, null, null, "869"],
                    KP: ["850", "1\\d{9}|[28]\\d{7}", [
                        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]],
                        ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"]],
                        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]
                    ], "0", "0$1"],
                    KR: ["82", "00(?:3\\d{8,9}|7\\d{9,11})|[1-7]\\d{4,9}|8\\d{8}", [
                        ["(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"]],
                        ["(\\d{4})(\\d{4})", "$1-$2", ["1(?:5[246-9]|6[046-8]|8[03579])", "1(?:5(?:22|44|66|77|88|99)|6(?:[07]0|44|6[16]|88)|8(?:00|33|55|77|99))"], "$1"],
                        ["(\\d{5})", "$1", ["1[016-9]1", "1[016-9]11", "1[016-9]114"]],
                        ["(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2[1-9]"]],
                        ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60[2-9]|80"]],
                        ["(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["1[0-25-9]|(?:3[1-3]|[46][1-4]|5[1-5])[1-9]"]],
                        ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]0"]]
                    ], "0", "0$1", "0(8[1-46-8]|85\\d{2})?"],
                    KW: ["965", "[12569]\\d{6,7}", [
                        ["(\\d{4})(\\d{3,4})", "$1 $2", ["[16]|2(?:[0-35-9]|4[0-35-9])|52[25]|9[024-9]"]],
                        ["(\\d{3})(\\d{5})", "$1 $2", ["244|5(?:[015]|6[56])"]]
                    ]],
                    KY: ["1", "[3589]\\d{9}", [
                        ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]
                    ], "1", null, null, null, null, "345"],
                    KZ: ["7", "(?:33\\d|7\\d{2}|80[089])\\d{7}", [
                        ["([3489]\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[3489]"]],
                        ["(7\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"]]
                    ], "8", null, null, null, null, null, ["33622\\d{5}|7(?:1(?:0(?:[23]\\d|4[0-3]|59|63)|1(?:[23]\\d|4[0-79]|59)|2(?:[23]\\d|59)|3(?:2\\d|3[0-79]|4[0-35-9]|59)|4(?:[24]\\d|3[013-9]|5[1-9])|5(?:2\\d|3[1-9]|4[0-7]|59)|6(?:[234]\\d|5[19]|61)|72\\d|8(?:[27]\\d|3[1-46-9]|4[0-5]))|2(?:1(?:[23]\\d|4[46-9]|5[3469])|2(?:2\\d|3[0679]|46|5[12679])|3(?:[234]\\d|5[139])|4(?:2\\d|3[1235-9]|59)|5(?:[23]\\d|4[01246-8]|59|61)|6(?:2\\d|3[1-9]|4[0-4]|59)|7(?:[2379]\\d|40|5[279])|8(?:[23]\\d|4[0-3]|59)|9(?:2\\d|3[124578]|59)))\\d{5}", "7(?:0[012578]|47|6[02-4]|7[15-8]|85)\\d{7}", "800\\d{7}", "809\\d{7}", "808\\d{7}", null, null, null, "751\\d{7}"]],
                    LA: ["856", "[2-8]\\d{7,9}", [
                        ["(20)(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["20"]],
                        ["([2-8]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"]],
                        ["(30)(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["30"]]
                    ], "0", "0$1"],
                    LB: ["961", "[13-9]\\d{6,7}", [
                        ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"], "0$1"],
                        ["([7-9]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["7(?:[01]|6[013-9]|8[89]|9[1-3])|[89][01]"]]
                    ], "0"],
                    LC: ["1", "[5789]\\d{9}", [
                        ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]
                    ], "1", null, null, null, null, "758"],
                    LI: ["423", "6\\d{8}|[23789]\\d{6}", [
                        ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[237-9]"]],
                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[56]"]],
                        ["(69)(7\\d{2})(\\d{4})", "$1 $2 $3", ["697"]]
                    ], "0", null, "0|10(?:01|20|66)"],
                    LK: ["94", "[1-9]\\d{8}", [
                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"]],
                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"]]
                    ], "0", "0$1"],
                    LR: ["231", "2\\d{7,8}|[378]\\d{8}|4\\d{6}|5\\d{6,8}", [
                        ["(2\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]],
                        ["([4-5])(\\d{3})(\\d{3})", "$1 $2 $3", ["[45]"]],
                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23578]"]]
                    ], "0", "0$1"],
                    LS: ["266", "[2568]\\d{7}", [
                        ["(\\d{4})(\\d{4})", "$1 $2"]
                    ]],
                    LT: ["370", "[3-9]\\d{7}", [
                        ["([34]\\d)(\\d{6})", "$1 $2", ["37|4(?:1|5[45]|6[2-4])"]],
                        ["([3-6]\\d{2})(\\d{5})", "$1 $2", ["3[148]|4(?:[24]|6[09])|528|6"]],
                        ["([7-9]\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "8 $1"],
                        ["(5)(2\\d{2})(\\d{4})", "$1 $2 $3", ["52[0-79]"]]
                    ], "8", "(8-$1)", "[08]", null, !0],
                    LU: ["352", "[24-9]\\d{3,10}|3(?:[0-46-9]\\d{2,9}|5[013-9]\\d{1,8})", [
                        ["(\\d{2})(\\d{3})", "$1 $2", ["[2-5]|7[1-9]|[89](?:0[2-9]|[1-9])"]],
                        ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-5]|7[1-9]|[89](?:0[2-9]|[1-9])"]],
                        ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20"]],
                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["2(?:[0367]|4[3-8])"]],
                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"]],
                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["2(?:[0367]|4[3-8])"]],
                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,4})", "$1 $2 $3 $4", ["2(?:[12589]|4[12])|[3-5]|7[1-9]|8(?:0[2-9]|[1-9])|9(?:0[2-46-9]|[1-9])"]],
                        ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["70|80[01]|90[015]"]],
                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]
                    ], null, null, "(15(?:0[06]|1[12]|35|4[04]|55|6[26]|77|88|99)\\d)"],
                    LV: ["371", "[2689]\\d{7}", [
                        ["([2689]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2689]"]]
                    ]],
                    LY: ["218", "[25679]\\d{8}", [
                        ["([25-79]\\d)(\\d{7})", "$1-$2", ["[25-79]"]]
                    ], "0", "0$1"],
                    MA: ["212", "[5-9]\\d{8}", [
                        ["([5-7]\\d{2})(\\d{6})", "$1-$2", ["5(?:2[015-7]|3[0-4])|[67]"]],
                        ["([58]\\d{3})(\\d{5})", "$1-$2", ["5(?:2[2-489]|3[5-9]|92)|892", "5(?:2(?:[2-48]|9[0-7])|3(?:[5-79]|8[0-7])|924)|892"]],
                        ["(5\\d{4})(\\d{4})", "$1-$2", ["5(?:29|38)", "5(?:29|38)[89]"]],
                        ["([5]\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:4[067]|5[03])"]],
                        ["(8[09])(\\d{7})", "$1-$2", ["8(?:0|9[013-9])"]]
                    ], "0", "0$1", null, null, null, null, ["5(?:2(?:[015-79]\\d|2[02-9]|3[2-57]|4[2-8]|8[235-7])\\d|3(?:[0-48]\\d|[57][2-9]|6[2-8]|9[3-9])\\d|4[067]\\d{2}|5[03]\\d{2})\\d{4}", "(?:6(?:[0-79]\\d|8[0-247-9])|7(?:0[067]|6[1267]|7[07]))\\d{6}", "80\\d{7}", "89\\d{7}", null, null, null, null, "5924[01]\\d{4}"]],
                    MC: ["377", "[34689]\\d{7,8}", [
                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[39]"], "$1"],
                        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"]],
                        ["(6)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"]],
                        ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["8"], "$1"]
                    ], "0", "0$1"],
                    MD: ["373", "[235-9]\\d{7}", [
                        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"]],
                        ["([25-7]\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["2[13-9]|[5-7]"]],
                        ["([89]\\d{2})(\\d{5})", "$1 $2", ["[89]"]]
                    ], "0", "0$1"],
                    ME: ["382", "[2-9]\\d{7,8}", [
                        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]|6[036-9]"]]
                    ], "0", "0$1"],
                    MF: ["590", "[56]\\d{8}", [
                        ["([56]\\d{2})(\\d{2})(\\d{4})", "$1 $2-$3", ["590|69[01]"]]
                    ], "0", null, null, null, null, null, ["590(?:0[079]|13|2[79]|30|43|5[0-268]|7[79]|87)\\d{4}", "69(?:0\\d{2}|1(?:2[29]|3[0-5]))\\d{4}"]],
                    MG: ["261", "[23]\\d{8}", [
                        ["([23]\\d)(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["[23]"]]
                    ], "0", "0$1"],
                    MH: ["692", "[2-6]\\d{6}", [
                        ["(\\d{3})(\\d{4})", "$1-$2"]
                    ], "1"],
                    MK: ["389", "[2-578]\\d{7}", [
                        ["(2)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"]],
                        ["([347]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"]],
                        ["([58]\\d{2})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"]]
                    ], "0", "0$1"],
                    ML: ["223", "[246-9]\\d{7}", [
                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[246-9]"]]
                    ]],
                    MM: ["95", "[178]\\d{5,7}|[24-6]\\d{5,8}|9(?:[279]\\d{0,2}|5|[34]\\d{1,2}|6(?:\\d{1,2})?|8(?:\\d{2})?)\\d{6}", [
                        ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1|2[245]"]],
                        ["(2)(\\d{4})(\\d{4})", "$1 $2 $3", ["251"]],
                        ["(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"]],
                        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["432|67|81"]],
                        ["(\\d{2})(\\d{2})(\\d{3,4})", "$1 $2 $3", ["[4-8]"]],
                        ["(9)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[137-9])"]],
                        ["(9)([34]\\d{4})(\\d{4})", "$1 $2 $3", ["9(?:3[0-36]|4[0-57-9])"]],
                        ["(9)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92[56]"]],
                        ["(9)(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["93"]]
                    ], "0", "0$1"],
                    MN: ["976", "[12]\\d{7,9}|[57-9]\\d{7}", [
                        ["([12]\\d)(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"]],
                        ["([12]2\\d)(\\d{5,6})", "$1 $2", ["[12]2[1-3]"]],
                        ["([12]\\d{3})(\\d{5})", "$1 $2", ["[12](?:27|[3-5])", "[12](?:27|[3-5]\\d)2"]],
                        ["(\\d{4})(\\d{4})", "$1 $2", ["[57-9]"], "$1"],
                        ["([12]\\d{4})(\\d{4,5})", "$1 $2", ["[12](?:27|[3-5])", "[12](?:27|[3-5]\\d)[4-9]"]]
                    ], "0", "0$1"],
                    MO: ["853", "[268]\\d{7}", [
                        ["([268]\\d{3})(\\d{4})", "$1 $2", ["[268]"]]
                    ]],
                    MP: ["1", "[5689]\\d{9}", [
                        ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]
                    ], "1", null, null, null, null, "670"],
                    MQ: ["596", "[56]\\d{8}", [
                        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]
                    ], "0", "0$1"],
                    MR: ["222", "[2-48]\\d{7}", [
                        ["([2-48]\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]
                    ]],
                    MS: ["1", "[5689]\\d{9}", [
                        ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]
                    ], "1", null, null, null, null, "664"],
                    MT: ["356", "[2357-9]\\d{7}", [
                        ["(\\d{4})(\\d{4})", "$1 $2"]
                    ]],
                    MU: ["230", "[2-9]\\d{6,7}", [
                        ["([2-46-9]\\d{2})(\\d{4})", "$1 $2", ["[2-46-9]"]],
                        ["(5\\d{3})(\\d{4})", "$1 $2", ["5"]]
                    ]],
                    MV: ["960", "[346-8]\\d{6,9}|9(?:00\\d{7}|\\d{6})", [
                        ["(\\d{3})(\\d{4})", "$1-$2", ["[3467]|9(?:0[1-9]|[1-9])"]],
                        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]00"]]
                    ]],
                    MW: ["265", "(?:1(?:\\d{2})?|[2789]\\d{2})\\d{6}", [
                        ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]],
                        ["(2\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]],
                        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[17-9]"]]
                    ], "0", "0$1"],
                    MX: ["52", "[1-9]\\d{9,10}", [
                        ["([358]\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["33|55|81"]],
                        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2467]|3[0-2457-9]|5[089]|8[02-9]|9[0-35-9]"]],
                        ["(1)([358]\\d)(\\d{4})(\\d{4})", "044 $2 $3 $4", ["1(?:33|55|81)"], "$1", null, "$1 $2 $3 $4"],
                        ["(1)(\\d{3})(\\d{3})(\\d{4})", "044 $2 $3 $4", ["1(?:[2467]|3[0-2457-9]|5[089]|8[2-9]|9[1-35-9])"], "$1", null, "$1 $2 $3 $4"]
                    ], "01", "01 $1", "0[12]|04[45](\\d{10})", "1$1", !0],
                    MY: ["60", "[13-9]\\d{7,9}", [
                        ["([4-79])(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"],
                        ["(3)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"],
                        ["([18]\\d)(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1[02-46-9][1-9]|8"], "0$1"],
                        ["(1)([36-8]00)(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1[36-8]0", "1[36-8]00"]],
                        ["(11)(\\d{4})(\\d{4})", "$1-$2 $3", ["11"], "0$1"],
                        ["(15[49])(\\d{3})(\\d{4})", "$1-$2 $3", ["15[49]"], "0$1"]
                    ], "0"],
                    MZ: ["258", "[28]\\d{7,8}", [
                        ["([28]\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-7]"]],
                        ["(80\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["80"]]
                    ]],
                    NA: ["264", "[68]\\d{7,8}", [
                        ["(8\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["8[1-35]"]],
                        ["(6\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"]],
                        ["(88)(\\d{3})(\\d{3})", "$1 $2 $3", ["88"]],
                        ["(870)(\\d{3})(\\d{3})", "$1 $2 $3", ["870"]]
                    ], "0", "0$1"],
                    NC: ["687", "[2-57-9]\\d{5}", [
                        ["(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[2-46-9]|5[0-4]"]]
                    ]],
                    NE: ["227", "[0289]\\d{7}", [
                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["09|[289]"]],
                        ["(08)(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]]
                    ]],
                    NF: ["672", "[13]\\d{5}", [
                        ["(\\d{2})(\\d{4})", "$1 $2", ["1"]],
                        ["(\\d)(\\d{5})", "$1 $2", ["3"]]
                    ]],
                    NG: ["234", "[1-6]\\d{5,8}|9\\d{5,9}|[78]\\d{5,13}", [
                        ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|9(?:0[3-9]|[1-9])"]],
                        ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[3-6]|7(?:0[1-9]|[1-79])|8[2-9]"]],
                        ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["70|8[01]|90[235-9]"]],
                        ["([78]00)(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]00"]],
                        ["([78]00)(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]00"]],
                        ["(78)(\\d{2})(\\d{3})", "$1 $2 $3", ["78"]]
                    ], "0", "0$1"],
                    NI: ["505", "[125-8]\\d{7}", [
                        ["(\\d{4})(\\d{4})", "$1 $2"]
                    ]],
                    NL: ["31", "1\\d{4,8}|[2-7]\\d{8}|[89]\\d{6,9}", [
                        ["([1-578]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1[035]|2[0346]|3[03568]|4[0356]|5[0358]|7|8[4578]"]],
                        ["([1-5]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"]],
                        ["(6)(\\d{8})", "$1 $2", ["6[0-57-9]"]],
                        ["(66)(\\d{7})", "$1 $2", ["66"]],
                        ["(14)(\\d{3,4})", "$1 $2", ["14"], "$1"],
                        ["([89]0\\d)(\\d{4,7})", "$1 $2", ["[89]0"]]
                    ], "0", "0$1"],
                    NO: ["47", "0\\d{4}|[2-9]\\d{7}", [
                        ["([489]\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["[489]"]],
                        ["([235-7]\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-7]"]]
                    ], null, null, null, null, null, null, ["(?:2[1-4]|3[1-3578]|5[1-35-7]|6[1-4679]|7[0-8])\\d{6}", "(?:4[015-8]|5[89]|87|9\\d)\\d{6}", "80[01]\\d{5}", "82[09]\\d{5}", "880\\d{5}", null, "0\\d{4}|81(?:0(?:0[7-9]|1\\d)|5\\d{2})\\d{3}", null, "85[0-5]\\d{5}", "810(?:0[0-6]|[2-8]\\d)\\d{3}"]],
                    NP: ["977", "[1-8]\\d{7}|9(?:[1-69]\\d{6,8}|7[2-6]\\d{5,7}|8\\d{8})", [
                        ["(1)(\\d{7})", "$1-$2", ["1[2-6]"]],
                        ["(\\d{2})(\\d{6})", "$1-$2", ["1[01]|[2-8]|9(?:[1-69]|7[15-9])"]],
                        ["(9\\d{2})(\\d{7})", "$1-$2", ["9(?:6[013]|7[245]|8)"], "$1"]
                    ], "0", "0$1"],
                    NR: ["674", "[458]\\d{6}", [
                        ["(\\d{3})(\\d{4})", "$1 $2"]
                    ]],
                    NU: ["683", "[1-5]\\d{3}"],
                    NZ: ["64", "6[235-9]\\d{6}|[2-57-9]\\d{7,9}", [
                        ["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["240|[346]|7[2-57-9]|9[1-9]"]],
                        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["21"]],
                        ["(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", ["2(?:1[1-9]|[69]|7[0-35-9])|70|86"]],
                        ["(2\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["2[028]"]],
                        ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["90"]],
                        ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|5|[89]0"]]
                    ], "0", "0$1"],
                    OM: ["968", "(?:5|[279]\\d)\\d{6}|800\\d{5,6}", [
                        ["(2\\d)(\\d{6})", "$1 $2", ["2"]],
                        ["([79]\\d{3})(\\d{4})", "$1 $2", ["[79]"]],
                        ["([58]00)(\\d{4,6})", "$1 $2", ["[58]00"]]
                    ]],
                    PA: ["507", "[1-9]\\d{6,7}", [
                        ["(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]],
                        ["(\\d{4})(\\d{4})", "$1-$2", ["6"]]
                    ]],
                    PE: ["51", "[14-9]\\d{7,8}", [
                        ["(1)(\\d{7})", "$1 $2", ["1"]],
                        ["([4-8]\\d)(\\d{6})", "$1 $2", ["[4-7]|8[2-4]"]],
                        ["(\\d{3})(\\d{5})", "$1 $2", ["80"]],
                        ["(9\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "$1"]
                    ], "0", "(0$1)"],
                    PF: ["689", "4\\d{5,7}|8\\d{7}", [
                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4[09]|8[79]"]],
                        ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]]
                    ]],
                    PG: ["675", "[1-9]\\d{6,7}", [
                        ["(\\d{3})(\\d{4})", "$1 $2", ["[13-689]|27"]],
                        ["(\\d{4})(\\d{4})", "$1 $2", ["20|7"]]
                    ]],
                    PH: ["63", "1\\d{10,12}|2\\d{5,7}|[3-7]\\d{8}|8\\d{7,9}|9\\d{9}", [
                        ["(2)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"],
                        ["(2)(\\d{5})", "$1 $2", ["2"], "(0$1)"],
                        ["(\\d{4})(\\d{4,6})", "$1 $2", ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|5(?:22|44)|642|8(?:62|8[245])", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"], "(0$1)"],
                        ["(\\d{5})(\\d{4})", "$1 $2", ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"], "(0$1)"],
                        ["([3-8]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-8]"], "(0$1)"],
                        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["81|9"], "0$1"],
                        ["(1800)(\\d{3})(\\d{4})", "$1 $2 $3", ["180", "1800"]],
                        ["(1800)(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["180", "1800"]]
                    ], "0"],
                    PK: ["92", "1\\d{8}|[2-8]\\d{5,11}|9(?:[013-9]\\d{4,10}|2\\d(?:111\\d{6}|\\d{3,7}))", [
                        ["([89]00)(\\d{3})(\\d{2})", "$1 $2 $3", ["[89]00"], "0$1"],
                        ["(1\\d{3})(\\d{5})", "$1 $2", ["1"], "$1"],
                        ["(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"]],
                        ["(\\d{3})(\\d{6,7})", "$1 $2", ["2[349]|45|54|60|72|8[2-5]|9[2-469]", "(?:2[349]|45|54|60|72|8[2-5]|9[2-469])\\d[2-9]"]],
                        ["(58\\d{3})(\\d{5})", "$1 $2", ["58[126]"]],
                        ["(3\\d{2})(\\d{7})", "$1 $2", ["3"], "0$1"],
                        ["(\\d{2})(111)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)1", "(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)11", "(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)111"]],
                        ["(\\d{3})(111)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[349]|45|54|60|72|8[2-5]|9[2-9]", "(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d1", "(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d11", "(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d111"]]
                    ], "0", "(0$1)"],
                    PL: ["48", "[1-57-9]\\d{6,8}|6\\d{5,8}", [
                        ["(\\d{3})(\\d{3})", "$1 $2", ["11[68]|64"]],
                        ["(\\d{5})", "$1", ["19"]],
                        ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145]"]],
                        ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]],
                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["26|39|45|5[0137]|6[0469]|7[02389]|8[08]"]],
                        ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[14]|2[0-57-9]|3[2-4]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145]"]]
                    ]],
                    PM: ["508", "[45]\\d{5}", [
                        ["([45]\\d)(\\d{2})(\\d{2})", "$1 $2 $3", ["[45]"]]
                    ], "0", "0$1"],
                    PR: ["1", "[5789]\\d{9}", [
                        ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]
                    ], "1", null, null, null, null, "787|939"],
                    PS: ["970", "1\\d{9}|[24589]\\d{7,8}", [
                        ["([2489])(2\\d{2})(\\d{4})", "$1 $2 $3", ["[2489]2"]],
                        ["(5[69]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["5[69]"]],
                        ["(1[78]00)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[78]0", "1[78]00"], "$1"]
                    ], "0", "0$1"],
                    PT: ["351", "[2-46-9]\\d{8}", [
                        ["(2\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]],
                        ["([2-46-9]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[3-9]|[346-9]"]]
                    ]],
                    PW: ["680", "[2-8]\\d{6}", [
                        ["(\\d{3})(\\d{4})", "$1 $2"]
                    ]],
                    PY: ["595", "5[0-5]\\d{4,7}|[2-46-9]\\d{5,8}", [
                        ["(\\d{2})(\\d{5})", "$1 $2", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"],
                        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"],
                        ["(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"],
                        ["(\\d{3})(\\d{6})", "$1 $2", ["9[1-9]"], "0$1"],
                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["870", "8700"]],
                        ["(\\d{3})(\\d{4,5})", "$1 $2", ["[2-8][1-9]"], "(0$1)"],
                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8][1-9]"], "0$1"]
                    ], "0"],
                    QA: ["974", "[2-8]\\d{6,7}", [
                        ["([28]\\d{2})(\\d{4})", "$1 $2", ["[28]"]],
                        ["([3-7]\\d{3})(\\d{4})", "$1 $2", ["[3-7]"]]
                    ]],
                    RE: ["262", "[268]\\d{8}", [
                        ["([268]\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[268]"]]
                    ], "0", "0$1", null, null, null, "262|69|8"],
                    RO: ["40", "[23]\\d{5,8}|[7-9]\\d{8}", [
                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"]],
                        ["(\\d{2})(\\d{4})", "$1 $2", ["[23]1"]],
                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[23][3-7]|[7-9]"]],
                        ["(2\\d{2})(\\d{3})", "$1 $2", ["2[3-6]"]]
                    ], "0", "0$1"],
                    RS: ["381", "[126-9]\\d{4,11}|3(?:[0-79]\\d{3,10}|8[2-9]\\d{2,9})", [
                        ["([23]\\d{2})(\\d{4,9})", "$1 $2", ["(?:2[389]|39)0"]],
                        ["([1-3]\\d)(\\d{5,10})", "$1 $2", ["1|2(?:[0-24-7]|[389][1-9])|3(?:[0-8]|9[1-9])"]],
                        ["(6\\d)(\\d{6,8})", "$1 $2", ["6"]],
                        ["([89]\\d{2})(\\d{3,9})", "$1 $2", ["[89]"]],
                        ["(7[26])(\\d{4,9})", "$1 $2", ["7[26]"]],
                        ["(7[08]\\d)(\\d{4,9})", "$1 $2", ["7[08]"]]
                    ], "0", "0$1"],
                    RU: ["7", "[347-9]\\d{9}", [
                        ["([3489]\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[3489]"]],
                        ["(7\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"]]
                    ], "8", "8 ($1)", null, null, !0, null, ["(?:3(?:0[12]|4[1-35-79]|5[1-3]|65|8[1-58]|9[0145])|4(?:01|1[1356]|2[13467]|7[1-5]|8[1-7]|9[1-689])|8(?:1[1-8]|2[01]|3[13-6]|4[0-8]|5[15]|6[1-35-79]|7[1-37-9]))\\d{7}", "9\\d{9}", "80[04]\\d{7}", "80[39]\\d{7}", "808\\d{7}"]],
                    RW: ["250", "[027-9]\\d{7,8}", [
                        ["(2\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]],
                        ["([7-9]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"],
                        ["(0\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]]
                    ], "0"],
                    SA: ["966", "1\\d{7,8}|(?:[2-467]|92)\\d{7}|5\\d{8}|8\\d{9}", [
                        ["([1-467])(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-467]"]],
                        ["(1\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1[1-467]"]],
                        ["(5\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["5"]],
                        ["(92\\d{2})(\\d{5})", "$1 $2", ["92"], "$1"],
                        ["(800)(\\d{3})(\\d{4})", "$1 $2 $3", ["800"], "$1"],
                        ["(811)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["811"]]
                    ], "0", "0$1"],
                    SB: ["677", "[1-9]\\d{4,6}", [
                        ["(\\d{2})(\\d{5})", "$1 $2", ["[7-9]"]]
                    ]],
                    SC: ["248", "[24689]\\d{5,6}", [
                        ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]"]]
                    ]],
                    SD: ["249", "[19]\\d{8}", [
                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3"]
                    ], "0", "0$1"],
                    SE: ["46", "[1-35-9]\\d{5,11}|4\\d{6,8}", [
                        ["(8)(\\d{2,3})(\\d{2,3})(\\d{2})", "$1-$2 $3 $4", ["8"], null, null, "$1 $2 $3 $4"],
                        ["([1-69]\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[013689]|2[0136]|3[1356]|4[0246]|54|6[03]|90"], null, null, "$1 $2 $3 $4"],
                        ["([1-469]\\d)(\\d{3})(\\d{2})", "$1-$2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90"], null, null, "$1 $2 $3"],
                        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[0-5]|4[0-3])"], null, null, "$1 $2 $3 $4"],
                        ["(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[0-5]|4[0-3])"], null, null, "$1 $2 $3"],
                        ["(7\\d)(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["7"], null, null, "$1 $2 $3 $4"],
                        ["(77)(\\d{2})(\\d{2})", "$1-$2$3", ["77"], null, null, "$1 $2 $3"],
                        ["(20)(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], null, null, "$1 $2 $3"],
                        ["(9[034]\\d)(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9[034]"], null, null, "$1 $2 $3 $4"],
                        ["(9[034]\\d)(\\d{4})", "$1-$2", ["9[034]"], null, null, "$1 $2"],
                        ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", ["25[245]|67[3-6]"], null, null, "$1 $2 $3 $4 $5"]
                    ], "0", "0$1"],
                    SG: ["65", "[36]\\d{7}|[17-9]\\d{7,10}", [
                        ["([3689]\\d{3})(\\d{4})", "$1 $2", ["[369]|8[1-9]"]],
                        ["(1[89]00)(\\d{3})(\\d{4})", "$1 $2 $3", ["1[89]0", "1[89]00"]],
                        ["(7000)(\\d{4})(\\d{3})", "$1 $2 $3", ["700", "7000"]],
                        ["(800)(\\d{3})(\\d{4})", "$1 $2 $3", ["800"]]
                    ]],
                    SH: ["290", "[256]\\d{4}|8\\d{3}", [], null, null, null, null, null, null, ["2(?:[0-57-9]\\d|6[4-9])\\d{2}", "[56]\\d{4}", null, null, null, null, null, null, "262\\d{2}"]],
                    SI: ["386", "[1-7]\\d{6,7}|[89]\\d{4,7}", [
                        ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[12]|[34][24-8]|5[2-8]|7[3-8]"], "(0$1)"],
                        ["([3-7]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[37][01]|4[0139]|51|6"]],
                        ["([89][09])(\\d{3,6})", "$1 $2", ["[89][09]"]],
                        ["([58]\\d{2})(\\d{5})", "$1 $2", ["59|8[1-3]"]]
                    ], "0", "0$1"],
                    SJ: ["47", "0\\d{4}|[45789]\\d{7}", [
                        ["([489]\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["[489]"]],
                        ["([235-7]\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-7]"]]
                    ], null, null, null, null, null, null, ["79\\d{6}", "(?:4[015-8]|5[89]|9\\d)\\d{6}", "80[01]\\d{5}", "82[09]\\d{5}", "880\\d{5}", null, "0\\d{4}|81(?:0(?:0[7-9]|1\\d)|5\\d{2})\\d{3}", null, "85[0-5]\\d{5}", "810(?:0[0-6]|[2-8]\\d)\\d{3}"]],
                    SK: ["421", "(?:[2-68]\\d{5,8}|9\\d{6,8})", [
                        ["(2)(1[67])(\\d{3,4})", "$1 $2 $3", ["21[67]"]],
                        ["([3-5]\\d)(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5]"]],
                        ["(2)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"]],
                        ["([3-5]\\d)(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"]],
                        ["([689]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"]],
                        ["(9090)(\\d{3})", "$1 $2", ["909", "9090"]]
                    ], "0", "0$1"],
                    SL: ["232", "[2-9]\\d{7}", [
                        ["(\\d{2})(\\d{6})", "$1 $2"]
                    ], "0", "(0$1)"],
                    SM: ["378", "[05-7]\\d{7,9}", [
                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]],
                        ["(0549)(\\d{6})", "$1 $2", ["054", "0549"], null, null, "($1) $2"],
                        ["(\\d{6})", "0549 $1", ["[89]"], null, null, "(0549) $1"]
                    ], null, null, "([89]\\d{5})", "0549$1"],
                    SN: ["221", "[3789]\\d{8}", [
                        ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]],
                        ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]
                    ]],
                    SO: ["252", "[1-9]\\d{5,8}", [
                        ["(\\d{6})", "$1", ["[134]"]],
                        ["(\\d)(\\d{6})", "$1 $2", ["[13-5]|2[0-79]"]],
                        ["(\\d)(\\d{7})", "$1 $2", ["24|[67]"]],
                        ["(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]],
                        ["(\\d{2})(\\d{5,7})", "$1 $2", ["15|28|6[1-35-9]|799|9[2-9]"]],
                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3[59]|4[89]|6[24-6]|79|8[08]|90"]]
                    ], "0"],
                    SR: ["597", "[2-8]\\d{5,6}", [
                        ["(\\d{3})(\\d{3})", "$1-$2", ["[2-4]|5[2-58]"]],
                        ["(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]],
                        ["(\\d{3})(\\d{4})", "$1-$2", ["[6-8]"]]
                    ]],
                    SS: ["211", "[19]\\d{8}", [
                        ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", null, "0$1"]
                    ], "0"],
                    ST: ["239", "[29]\\d{6}", [
                        ["(\\d{3})(\\d{4})", "$1 $2"]
                    ]],
                    SV: ["503", "[267]\\d{7}|[89]\\d{6}(?:\\d{4})?", [
                        ["(\\d{4})(\\d{4})", "$1 $2", ["[267]"]],
                        ["(\\d{3})(\\d{4})", "$1 $2", ["[89]"]],
                        ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]]
                    ]],
                    SX: ["1", "[5789]\\d{9}", [
                        ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]
                    ], "1", null, null, null, null, "721"],
                    SY: ["963", "[1-59]\\d{7,8}", [
                        ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-5]"]],
                        ["(9\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]]
                    ], "0", "0$1", null, null, !0],
                    SZ: ["268", "[027]\\d{7}", [
                        ["(\\d{4})(\\d{4})", "$1 $2", ["[027]"]]
                    ]],
                    TA: ["290", "8\\d{3}", [], null, null, null, null, null, null, ["8\\d{3}"]],
                    TC: ["1", "[5689]\\d{9}", [
                        ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]
                    ], "1", null, null, null, null, "649"],
                    TD: ["235", "[2679]\\d{7}", [
                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]
                    ]],
                    TG: ["228", "[279]\\d{7}", [
                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]
                    ]],
                    TH: ["66", "1\\d{8,9}|[2-9]\\d{7,8}", [
                        ["(2)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"]],
                        ["([13-9]\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["14|[3-9]"]],
                        ["(1[89]00)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[89]0", "1[89]00"], "$1"]
                    ], "0", "0$1"],
                    TJ: ["992", "[3-57-9]\\d{8}", [
                        ["([349]\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[34]7|91[78]"]],
                        ["([457-9]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[148]|[578]|9(?:[0235-9]|1[59])"]],
                        ["(331700)(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317", "33170", "331700"]],
                        ["(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3[1-5]", "3(?:[1245]|3(?:[02-9]|1[0-589]))"]]
                    ], "8", null, null, null, !0],
                    TK: ["690", "[2-47]\\d{3,6}"],
                    TL: ["670", "[2-489]\\d{6}|7\\d{6,7}", [
                        ["(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]],
                        ["(\\d{4})(\\d{4})", "$1 $2", ["7[3-8]"]]
                    ]],
                    TM: ["993", "[1-6]\\d{7}", [
                        ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"]],
                        ["(\\d{2})(\\d{6})", "$1 $2", ["6"], "8 $1"],
                        ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["13|[2-5]"]]
                    ], "8", "(8 $1)"],
                    TN: ["216", "[2-57-9]\\d{7}", [
                        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3"]
                    ]],
                    TO: ["676", "[02-8]\\d{4,6}", [
                        ["(\\d{2})(\\d{3})", "$1-$2", ["[1-6]|7[0-4]|8[05]"]],
                        ["(\\d{3})(\\d{4})", "$1 $2", ["7[5-9]|8[47-9]"]],
                        ["(\\d{4})(\\d{3})", "$1 $2", ["0"]]
                    ]],
                    TR: ["90", "[2-589]\\d{9}|444\\d{4}", [
                        ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[23]|4(?:[0-35-9]|4[0-35-9])"], "(0$1)"],
                        ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5[02-69]"], "0$1"],
                        ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["51|[89]"], "0$1"],
                        ["(444)(\\d{1})(\\d{3})", "$1 $2 $3", ["444"]]
                    ], "0", null, null, null, !0],
                    TT: ["1", "[589]\\d{9}", [
                        ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]
                    ], "1", null, null, null, null, "868"],
                    TV: ["688", "[279]\\d{4,6}"],
                    TW: ["886", "2\\d{6,8}|[3-689]\\d{7,8}|7\\d{7,9}", [
                        ["(20)(\\d)(\\d{4})", "$1 $2 $3", ["202"]],
                        ["([258]0)(\\d{3})(\\d{4})", "$1 $2 $3", ["20[013-9]|50[0-46-9]|80[0-79]"]],
                        ["([2-8])(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[25][2-8]|[346]|[78][1-9]"]],
                        ["(9\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]],
                        ["(70)(\\d{4})(\\d{4})", "$1 $2 $3", ["70"]]
                    ], "0", "0$1"],
                    TZ: ["255", "\\d{9}", [
                        ["([24]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"]],
                        ["([67]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"]],
                        ["([89]\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"]]
                    ], "0", "0$1"],
                    UA: ["380", "[3-9]\\d{8}", [
                        ["([3-9]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[38]9|4(?:[45][0-5]|87)|5(?:0|[67][37])|6[36-8]|7|9[1-9]", "[38]9|4(?:[45][0-5]|87)|5(?:0|6(?:3[14-7]|7)|7[37])|6[36-8]|7|9[1-9]"]],
                        ["([3-689]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["(?:3[1-8]|4[136-8])2|5(?:[12457]2|6[24])|6(?:[12][29]|[49]2|5[24])|8[0-8]|90", "3(?:[1-46-8]2[013-9]|52)|4(?:[1378]2|62[013-9])|5(?:[12457]2|6[24])|6(?:[12][29]|[49]2|5[24])|8[0-8]|90"]],
                        ["([3-6]\\d{3})(\\d{5})", "$1 $2", ["3(?:[1-46-8]|5[013-9])|4(?:[137][013-9]|[45][6-9]|6|8[4-6])|5(?:[1245][013-9]|3|6[0135689]|7[4-6])|6(?:[12][13-8]|[49][013-9]|5[0135-9])", "3(?:[1-46-8](?:[013-9]|22)|5[013-9])|4(?:[137][013-9]|[45][6-9]|6(?:[013-9]|22)|8[4-6])|5(?:[1245][013-9]|3|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][13-8]|[49][013-9]|5[0135-9])"]]
                    ], "0", "0$1"],
                    UG: ["256", "\\d{9}", [
                        ["(\\d{3})(\\d{6})", "$1 $2", ["20[0-8]|4(?:6[45]|[7-9])|[7-9]", "20(?:[013-8]|2[5-9])|4(?:6[45]|[7-9])|[7-9]"]],
                        ["(\\d{2})(\\d{7})", "$1 $2", ["3|4(?:[1-5]|6[0-36-9])"]],
                        ["(2024)(\\d{5})", "$1 $2", ["202", "2024"]]
                    ], "0", "0$1"],
                    US: ["1", "[2-9]\\d{9}", [
                        ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]
                    ], "1", null, null, null, !0, null, ["(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[026]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[0-24679]|4[67]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|6[39]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[16]|5[017]|6[0-279]|78|8[012])|7(?:0[1-46-8]|1[02-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|28|3[0-258]|4[3578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[014678]|4[0179]|5[12469]|7[0-3589]|8[04-69]))[2-9]\\d{6}", null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", "900[2-9]\\d{6}", "5(?:(?:00|22|33|44|66|77|88)[2-9]|21[23])\\d{6}"]],
                    UY: ["598", "[2489]\\d{6,7}", [
                        ["(\\d{4})(\\d{4})", "$1 $2", ["[24]"]],
                        ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9[1-9]"], "0$1"],
                        ["(\\d{3})(\\d{4})", "$1 $2", ["[89]0"], "0$1"]
                    ], "0"],
                    UZ: ["998", "[679]\\d{8}", [
                        ["([679]\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[679]"]]
                    ], "8", "8 $1"],
                    VA: ["39", "(?:0(?:878\\d{5}|6698\\d{5})|[1589]\\d{5,10}|3(?:[12457-9]\\d{8}|[36]\\d{7,9}))", [
                        ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|55"]],
                        ["(0[26])(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]],
                        ["(0[26])(\\d{4,6})", "$1 $2", ["0[26]"]],
                        ["(0\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]"]],
                        ["(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[245])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|[45][0-4]))"]],
                        ["(0\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["0[13-57-9][2-46-8]"]],
                        ["(0\\d{3})(\\d{2,6})", "$1 $2", ["0[13-57-9][2-46-8]"]],
                        ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13]|8(?:00|4[08]|9[59])", "[13]|8(?:00|4[08]|9(?:5[5-9]|9))"]],
                        ["(\\d{4})(\\d{4})", "$1 $2", ["894", "894[5-9]"]],
                        ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["3"]]
                    ], null, null, null, null, null, null, ["06698\\d{5}", "3(?:[12457-9]\\d{8}|6\\d{7,8}|3\\d{7,9})", "80(?:0\\d{6}|3\\d{3})", "0878\\d{5}|1(?:44|6[346])\\d{6}|89(?:2\\d{3}|4(?:[0-4]\\d{2}|[5-9]\\d{4})|5(?:[0-4]\\d{2}|[5-9]\\d{6})|9\\d{6})", "1(?:78\\d|99)\\d{6}", null, null, null, "55\\d{8}", "84(?:[08]\\d{6}|[17]\\d{3})"]],
                    VC: ["1", "[5789]\\d{9}", [
                        ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]
                    ], "1", null, null, null, null, "784"],
                    VE: ["58", "[24589]\\d{9}", [
                        ["(\\d{3})(\\d{7})", "$1-$2"]
                    ], "0", "0$1"],
                    VG: ["1", "[2589]\\d{9}", [
                        ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]
                    ], "1", null, null, null, null, "284"],
                    VI: ["1", "[3589]\\d{9}", [
                        ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]
                    ], "1", null, null, null, null, "340"],
                    VN: ["84", "1\\d{6,9}|2\\d{9}|6\\d{6,7}|7\\d{6}|8\\d{6,8}|9\\d{8}", [
                        ["([17]99)(\\d{4})", "$1 $2", ["[17]99"]],
                        ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"]],
                        ["(80)(\\d{5})", "$1 $2", ["80"]],
                        ["(69\\d)(\\d{4,5})", "$1 $2", ["69"]],
                        ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2[0-35-79]"]],
                        ["([89]\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8(?:8|9[89])|9"]],
                        ["(1[2689]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:[26]|8[68]|99)"]],
                        ["(86[89])(\\d{3})(\\d{3})", "$1 $2 $3", ["86[89]"]],
                        ["(1[89]00)(\\d{4,6})", "$1 $2", ["1[89]0", "1[89]00"], "$1"]
                    ], "0", "0$1", null, null, !0],
                    VU: ["678", "[2-57-9]\\d{4,6}", [
                        ["(\\d{3})(\\d{4})", "$1 $2", ["[579]"]]
                    ]],
                    WF: ["681", "[4-8]\\d{5}", [
                        ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3"]
                    ]],
                    WS: ["685", "[2-8]\\d{4,6}", [
                        ["(8\\d{2})(\\d{3,4})", "$1 $2", ["8"]],
                        ["(7\\d)(\\d{5})", "$1 $2", ["7"]],
                        ["(\\d{5})", "$1", ["[2-6]"]]
                    ]],
                    YE: ["967", "[1-7]\\d{6,8}", [
                        ["([1-7])(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7[24-68]"]],
                        ["(7\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["7[0137]"]]
                    ], "0", "0$1"],
                    YT: ["262", "[268]\\d{8}", [
                        ["([268]\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[268]"]]
                    ], "0", null, null, null, null, "269|63"],
                    ZA: ["27", "[1-79]\\d{8}|8\\d{4,8}", [
                        ["(860)(\\d{3})(\\d{3})", "$1 $2 $3", ["860"]],
                        ["(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"]],
                        ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"]],
                        ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-79]|8(?:[0-57]|6[1-9])"]]
                    ], "0", "0$1"],
                    ZM: ["260", "[289]\\d{8}", [
                        ["(\\d{2})(\\d{4})", "$1 $2", null, "$1"],
                        ["([1-8])(\\d{2})(\\d{4})", "$1 $2 $3", ["[1-8]"], "$1"],
                        ["([29]\\d)(\\d{7})", "$1 $2", ["[29]"]],
                        ["(800)(\\d{3})(\\d{3})", "$1 $2 $3", ["800"]]
                    ], "0", "0$1"],
                    ZW: ["263", "2(?:[0-57-9]\\d{3,8}|6(?:[14]\\d{7}|\\d{4}))|[13-69]\\d{4,9}|7\\d{8}|8[06]\\d{5,8}", [
                        ["([49])(\\d{3})(\\d{2,4})", "$1 $2 $3", ["4|9[2-9]"]],
                        ["(7\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["7"]],
                        ["(86\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["86[24]"]],
                        ["([2356]\\d{2})(\\d{3,5})", "$1 $2", ["2(?:0[45]|2[278]|[49]8|[78])|3(?:[09]8|17|3[78]|7[1569]|8[37])|5[15][78]|6(?:[29]8|37|[68][78]|75)"]],
                        ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:1[39]|2[0157]|31|[56][14]|7[35]|84)|329"]],
                        ["([1-356]\\d)(\\d{3,5})", "$1 $2", ["1[3-9]|2[02569]|3[0-69]|5[05689]|6"]],
                        ["([235]\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[23]9|54"]],
                        ["([25]\\d{3})(\\d{3,5})", "$1 $2", ["(?:25|54)8", "258[23]|5483"]],
                        ["(8\\d{3})(\\d{6})", "$1 $2", ["86"]],
                        ["(80\\d)(\\d{4})", "$1 $2", ["80"]]
                    ], "0", "0$1"],
                    "001": ["979", "\\d{9}", [
                        ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3"]
                    ]]
                }
            }
        },
        YNBZ: function(n, l, e) {
            "use strict";

            function t(n) {
                for (var e in n) l.hasOwnProperty(e) || (l[e] = n[e])
            }
            t(e("5xlC")), t(e("pKD1")), t(e("UpIn")), t(e("b6v0")), t(e("oQam"));
            var o = e("S6T7");
            l.FileUploadModule = o.FileUploadModule
        },
        YO3V: function(n, l, e) {
            var t = e("NykK"),
                o = e("LcsW"),
                u = e("ExA7"),
                r = Function.prototype,
                i = Object.prototype,
                a = r.toString,
                d = i.hasOwnProperty,
                s = a.call(Object);
            n.exports = function(n) {
                if (!u(n) || "[object Object]" != t(n)) return !1;
                var l = o(n);
                if (null === l) return !0;
                var e = d.call(l, "constructor") && l.constructor;
                return "function" == typeof e && e instanceof e && a.call(e) == s
            }
        },
        YqAc: function(n, l) {
            var e = 0,
                t = Math.random();
            n.exports = function(n) {
                return "Symbol(".concat(void 0 === n ? "" : n, ")_", (++e + t).toString(36))
            }
        },
        YuTi: function(n, l) {
            n.exports = function(n) {
                return n.webpackPolyfill || (n.deprecate = function() {}, n.paths = [], n.children || (n.children = []), Object.defineProperty(n, "loaded", {
                    enumerable: !0,
                    get: function() {
                        return n.l
                    }
                }), Object.defineProperty(n, "id", {
                    enumerable: !0,
                    get: function() {
                        return n.i
                    }
                }), n.webpackPolyfill = 1), n
            }
        },
        Z0cm: function(n, l) {
            var e = Array.isArray;
            n.exports = e
        },
        Z8oC: function(n, l, e) {
            var t = e("y1pI");
            n.exports = function(n, l) {
                var e = this.__data__,
                    o = t(e, n);
                return o < 0 ? (++this.size, e.push([n, l])) : e[o][1] = l, this
            }
        },
        ZCgT: function(n, l, e) {
            var t = e("tLB3");
            n.exports = function(n) {
                return n ? (n = t(n)) === 1 / 0 || n === -1 / 0 ? 1.7976931348623157e308 * (n < 0 ? -1 : 1) : n == n ? n : 0 : 0 === n ? n : 0
            }
        },
        ZCpW: function(n, l, e) {
            var t = e("lm/5"),
                o = e("O7RO"),
                u = e("IOzZ");
            n.exports = function(n) {
                var l = o(n);
                return 1 == l.length && l[0][2] ? u(l[0][0], l[0][1]) : function(e) {
                    return e === n || t(e, n, l)
                }
            }
        },
        ZWtO: function(n, l, e) {
            var t = e("4uTw"),
                o = e("9Nap");
            n.exports = function(n, l) {
                for (var e = 0, u = (l = t(l, n)).length; null != n && e < u;) n = n[o(l[e++])];
                return e && e == u ? n : void 0
            }
        },
        ZirO: function(n, l) {
            n.exports = function(n, l) {
                for (var e = -1, t = null == n ? 0 : n.length; ++e < t;)
                    if (!l(n[e], e, n)) return !1;
                return !0
            }
        },
        a0xu: function(n, l) {
            var e = {}.toString;
            n.exports = function(n) {
                return e.call(n).slice(8, -1)
            }
        },
        adU4: function(n, l, e) {
            var t = e("y1pI"),
                o = Array.prototype.splice;
            n.exports = function(n) {
                var l = this.__data__,
                    e = t(l, n);
                return !(e < 0 || (e == l.length - 1 ? l.pop() : o.call(l, e, 1), --this.size, 0))
            }
        },
        afOK: function(n, l, e) {
            n.exports = e("pZt1")
        },
        b2z7: function(n, l) {
            var e = /\w*$/;
            n.exports = function(n) {
                var l = new n.constructor(n.source, e.exec(n));
                return l.lastIndex = n.lastIndex, l
            }
        },
        b6v0: function(n, l, e) {
            "use strict";
            var t = e("oQam");
            l.FileItem = function() {
                function n(n, l, e) {
                    this.url = "/", this.headers = [], this.withCredentials = !0, this.formData = [], this.isReady = !1, this.isUploading = !1, this.isUploaded = !1, this.isSuccess = !1, this.isCancel = !1, this.isError = !1, this.progress = 0, this.index = void 0, this.uploader = n, this.some = l, this.options = e, this.file = new t.FileLikeObject(l), this._file = l, n.options && (this.method = n.options.method || "POST", this.alias = n.options.itemAlias || "file"), this.url = n.options.url
                }
                return n.prototype.upload = function() {
                    try {
                        this.uploader.uploadItem(this)
                    } catch (n) {
                        this.uploader._onCompleteItem(this, "", 0, {}), this.uploader._onErrorItem(this, "", 0, {})
                    }
                }, n.prototype.cancel = function() {
                    this.uploader.cancelItem(this)
                }, n.prototype.remove = function() {
                    this.uploader.removeFromQueue(this)
                }, n.prototype.onBeforeUpload = function() {}, n.prototype.onBuildForm = function(n) {
                    return {
                        form: n
                    }
                }, n.prototype.onProgress = function(n) {
                    return {
                        progress: n
                    }
                }, n.prototype.onSuccess = function(n, l, e) {
                    return {
                        response: n,
                        status: l,
                        headers: e
                    }
                }, n.prototype.onError = function(n, l, e) {
                    return {
                        response: n,
                        status: l,
                        headers: e
                    }
                }, n.prototype.onCancel = function(n, l, e) {
                    return {
                        response: n,
                        status: l,
                        headers: e
                    }
                }, n.prototype.onComplete = function(n, l, e) {
                    return {
                        response: n,
                        status: l,
                        headers: e
                    }
                }, n.prototype._onBeforeUpload = function() {
                    this.isReady = !0, this.isUploading = !0, this.isUploaded = !1, this.isSuccess = !1, this.isCancel = !1, this.isError = !1, this.progress = 0, this.onBeforeUpload()
                }, n.prototype._onBuildForm = function(n) {
                    this.onBuildForm(n)
                }, n.prototype._onProgress = function(n) {
                    this.progress = n, this.onProgress(n)
                }, n.prototype._onSuccess = function(n, l, e) {
                    this.isReady = !1, this.isUploading = !1, this.isUploaded = !0, this.isSuccess = !0, this.isCancel = !1, this.isError = !1, this.progress = 100, this.index = void 0, this.onSuccess(n, l, e)
                }, n.prototype._onError = function(n, l, e) {
                    this.isReady = !1, this.isUploading = !1, this.isUploaded = !0, this.isSuccess = !1, this.isCancel = !1, this.isError = !0, this.progress = 0, this.index = void 0, this.onError(n, l, e)
                }, n.prototype._onCancel = function(n, l, e) {
                    this.isReady = !1, this.isUploading = !1, this.isUploaded = !1, this.isSuccess = !1, this.isCancel = !0, this.isError = !1, this.progress = 0, this.index = void 0, this.onCancel(n, l, e)
                }, n.prototype._onComplete = function(n, l, e) {
                    this.onComplete(n, l, e), this.uploader.options.removeAfterUpload && this.remove()
                }, n.prototype._prepareToUploading = function() {
                    this.index = this.index || ++this.uploader._nextIndex, this.isReady = !0
                }, n
            }()
        },
        b80T: function(n, l, e) {
            var t = e("UNi/"),
                o = e("03A+"),
                u = e("Z0cm"),
                r = e("DSRE"),
                i = e("wJg7"),
                a = e("c6wG"),
                d = Object.prototype.hasOwnProperty;
            n.exports = function(n, l) {
                var e = u(n),
                    s = !e && o(n),
                    c = !e && !s && r(n),
                    p = !e && !s && !c && a(n),
                    f = e || s || c || p,
                    h = f ? t(n.length, String) : [],
                    g = h.length;
                for (var m in n) !l && !d.call(n, m) || f && ("length" == m || c && ("offset" == m || "parent" == m) || p && ("buffer" == m || "byteLength" == m || "byteOffset" == m) || i(m, g)) || h.push(m);
                return h
            }
        },
        bBy9: function(n, l, e) {
            e("w2d+");
            for (var t = e("5T2Y"), o = e("NegM"), u = e("SBuE"), r = e("UWiX")("toStringTag"), i = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), a = 0; a < i.length; a++) {
                var d = i[a],
                    s = t[d],
                    c = s && s.prototype;
                c && !c[r] && o(c, r, d), u[d] = u.Array
            }
        },
        c34Q: function(n, l, e) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            });
            var t = e("CcnG"),
                o = e("gIcY"),
                u = e("IvtZ"),
                r = {
                    provide: o.NG_VALIDATORS,
                    useExisting: t.forwardRef(function() {
                        return i
                    }),
                    multi: !0
                },
                i = function() {
                    function n() {}
                    return n.prototype.ngOnInit = function() {
                        this.validator = u.rangeLength(this.rangeLength)
                    }, n.prototype.ngOnChanges = function(n) {
                        for (var l in n) "rangeLength" === l && (this.validator = u.rangeLength(n[l].currentValue), this.onChange && this.onChange())
                    }, n.prototype.validate = function(n) {
                        return this.validator(n)
                    }, n.prototype.registerOnValidatorChange = function(n) {
                        this.onChange = n
                    }, n.decorators = [{
                        type: t.Directive,
                        args: [{
                            selector: "[rangeLength][formControlName],[rangeLength][formControl],[rangeLength][ngModel]",
                            providers: [r]
                        }]
                    }], n.propDecorators = {
                        rangeLength: [{
                            type: t.Input
                        }]
                    }, n
                }();
            l.RangeLengthValidator = i
        },
        c6wG: function(n, l, e) {
            var t = e("dD9F"),
                o = e("sEf8"),
                u = e("mdPL"),
                r = u && u.isTypedArray,
                i = r ? o(r) : t;
            n.exports = i
        },
        cI4K: function(n, l, e) {
            "use strict";

            function t(n) {
                for (var e in n) l.hasOwnProperty(e) || (l[e] = n[e])
            }
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), t(e("WcuY")), t(e("kqoJ"))
        },
        ccE7: function(n, l, e) {
            var t = e("Ojgd"),
                o = e("Jes0");
            n.exports = function(n) {
                return function(l, e) {
                    var u, r, i = String(o(l)),
                        a = t(e),
                        d = i.length;
                    return a < 0 || a >= d ? n ? "" : void 0 : (u = i.charCodeAt(a)) < 55296 || u > 56319 || a + 1 === d || (r = i.charCodeAt(a + 1)) < 56320 || r > 57343 ? n ? i.charAt(a) : u : n ? i.slice(a, a + 2) : r - 56320 + (u - 55296 << 10) + 65536
                }
            }
        },
        "cq/+": function(n, l, e) {
            var t = e("mc0g")();
            n.exports = t
        },
        cvCv: function(n, l) {
            n.exports = function(n) {
                return function() {
                    return n
                }
            }
        },
        dD9F: function(n, l, e) {
            var t = e("NykK"),
                o = e("shjB"),
                u = e("ExA7"),
                r = {};
            r["[object Float32Array]"] = r["[object Float64Array]"] = r["[object Int8Array]"] = r["[object Int16Array]"] = r["[object Int32Array]"] = r["[object Uint8Array]"] = r["[object Uint8ClampedArray]"] = r["[object Uint16Array]"] = r["[object Uint32Array]"] = !0, r["[object Arguments]"] = r["[object Array]"] = r["[object ArrayBuffer]"] = r["[object Boolean]"] = r["[object DataView]"] = r["[object Date]"] = r["[object Error]"] = r["[object Function]"] = r["[object Map]"] = r["[object Number]"] = r["[object Object]"] = r["[object RegExp]"] = r["[object Set]"] = r["[object String]"] = r["[object WeakMap]"] = !1, n.exports = function(n) {
                return u(n) && o(n.length) && !!r[t(n)]
            }
        },
        dTAl: function(n, l, e) {
            var t = e("GoyQ"),
                o = Object.create,
                u = function() {
                    function n() {}
                    return function(l) {
                        if (!t(l)) return {};
                        if (o) return o(l);
                        n.prototype = l;
                        var e = new n;
                        return n.prototype = void 0, e
                    }
                }();
            n.exports = u
        },
        dYSy: function(n, l, e) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            });
            var t = e("CcnG"),
                o = e("gIcY"),
                u = e("NCDA"),
                r = {
                    provide: o.NG_VALIDATORS,
                    useExisting: t.forwardRef(function() {
                        return i
                    }),
                    multi: !0
                },
                i = function() {
                    function n() {}
                    return n.prototype.ngOnInit = function() {
                        this.validator = u.lte(this.lte)
                    }, n.prototype.ngOnChanges = function(n) {
                        for (var l in n) "lte" === l && (this.validator = u.lte(n[l].currentValue), this.onChange && this.onChange())
                    }, n.prototype.validate = function(n) {
                        return this.validator(n)
                    }, n.prototype.registerOnValidatorChange = function(n) {
                        this.onChange = n
                    }, n.decorators = [{
                        type: t.Directive,
                        args: [{
                            selector: "[lte][formControlName],[lte][formControl],[lte][ngModel]",
                            providers: [r]
                        }]
                    }], n.propDecorators = {
                        lte: [{
                            type: t.Input
                        }]
                    }, n
                }();
            l.LessThanEqualValidator = i
        },
        dt0z: function(n, l, e) {
            var t = e("zoYe");
            n.exports = function(n) {
                return null == n ? "" : t(n)
            }
        },
        e4Nc: function(n, l, e) {
            var t = e("fGT3"),
                o = e("k+1r"),
                u = e("JHgL"),
                r = e("pSRY"),
                i = e("H8j4");

            function a(n) {
                var l = -1,
                    e = null == n ? 0 : n.length;
                for (this.clear(); ++l < e;) {
                    var t = n[l];
                    this.set(t[0], t[1])
                }
            }
            a.prototype.clear = t, a.prototype.delete = o, a.prototype.get = u, a.prototype.has = r, a.prototype.set = i, n.exports = a
        },
        e5cp: function(n, l, e) {
            var t = e("fmRc"),
                o = e("or5M"),
                u = e("HDyB"),
                r = e("seXi"),
                i = e("QqLw"),
                a = e("Z0cm"),
                d = e("DSRE"),
                s = e("c6wG"),
                c = "[object Object]",
                p = Object.prototype.hasOwnProperty;
            n.exports = function(n, l, e, f, h, g) {
                var m = a(n),
                    v = a(l),
                    b = m ? "[object Array]" : i(n),
                    y = v ? "[object Array]" : i(l),
                    $ = (b = "[object Arguments]" == b ? c : b) == c,
                    _ = (y = "[object Arguments]" == y ? c : y) == c,
                    x = b == y;
                if (x && d(n)) {
                    if (!d(l)) return !1;
                    m = !0, $ = !1
                }
                if (x && !$) return g || (g = new t), m || s(n) ? o(n, l, e, f, h, g) : u(n, l, b, e, f, h, g);
                if (!(1 & e)) {
                    var O = $ && p.call(n, "__wrapped__"),
                        C = _ && p.call(l, "__wrapped__");
                    if (O || C) {
                        var w = O ? n.value() : n,
                            S = C ? l.value() : l;
                        return g || (g = new t), h(w, S, e, f, g)
                    }
                }
                return !!x && (g || (g = new t), r(n, l, e, f, h, g))
            }
        },
        eUgh: function(n, l) {
            n.exports = function(n, l) {
                for (var e = -1, t = null == n ? 0 : n.length, o = Array(t); ++e < t;) o[e] = l(n[e], e, n);
                return o
            }
        },
        eUtF: function(n, l, e) {
            n.exports = !e("jmDH") && !e("KUxP")(function() {
                return 7 != Object.defineProperty(e("Hsns")("div"), "a", {
                    get: function() {
                        return 7
                    }
                }).a
            })
        },
        eaoh: function(n, l) {
            n.exports = function(n) {
                if ("function" != typeof n) throw TypeError(n + " is not a function!");
                return n
            }
        },
        ebwN: function(n, l, e) {
            var t = e("Cwc5")(e("Kz5y"), "Map");
            n.exports = t
        },
        ekgI: function(n, l, e) {
            var t = e("YESw"),
                o = Object.prototype.hasOwnProperty;
            n.exports = function(n) {
                var l = this.__data__;
                return t ? void 0 !== l[n] : o.call(l, n)
            }
        },
        fGT3: function(n, l, e) {
            var t = e("4kuk"),
                o = e("Xi7e"),
                u = e("ebwN");
            n.exports = function() {
                this.size = 0, this.__data__ = {
                    hash: new t,
                    map: new(u || o),
                    string: new t
                }
            }
        },
        fNZA: function(n, l, e) {
            var t = e("QMMT"),
                o = e("UWiX")("iterator"),
                u = e("SBuE");
            n.exports = e("WEpk").getIteratorMethod = function(n) {
                if (void 0 != n) return n[o] || n["@@iterator"] || u[t(n)]
            }
        },
        "fR/l": function(n, l, e) {
            var t = e("CH3K"),
                o = e("Z0cm");
            n.exports = function(n, l, e) {
                var u = l(n);
                return o(n) ? u : t(u, e(n))
            }
        },
        fXsU: function(n, l, e) {
            var t = e("5K7Z"),
                o = e("fNZA");
            n.exports = e("WEpk").getIterator = function(n) {
                var l = o(n);
                if ("function" != typeof l) throw TypeError(n + " is not iterable!");
                return t(l.call(n))
            }
        },
        fmRc: function(n, l, e) {
            var t = e("Xi7e"),
                o = e("77Zs"),
                u = e("L8xA"),
                r = e("gCq4"),
                i = e("VaNO"),
                a = e("0Cz8");

            function d(n) {
                var l = this.__data__ = new t(n);
                this.size = l.size
            }
            d.prototype.clear = o, d.prototype.delete = u, d.prototype.get = r, d.prototype.has = i, d.prototype.set = a, n.exports = d
        },
        fpC5: function(n, l, e) {
            var t = e("2faE"),
                o = e("5K7Z"),
                u = e("w6GO");
            n.exports = e("jmDH") ? Object.defineProperties : function(n, l) {
                o(n);
                for (var e, r = u(l), i = r.length, a = 0; i > a;) t.f(n, e = r[a++], l[e]);
                return n
            }
        },
        ftKO: function(n, l) {
            n.exports = function(n) {
                return this.__data__.set(n, "__lodash_hash_undefined__"), this
            }
        },
        gCq4: function(n, l) {
            n.exports = function(n) {
                return this.__data__.get(n)
            }
        },
        gFfm: function(n, l) {
            n.exports = function(n, l) {
                for (var e = -1, t = null == n ? 0 : n.length; ++e < t && !1 !== l(n[e], e, n););
                return n
            }
        },
        gK5f: function(n, l, e) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            });
            var t = e("CcnG"),
                o = e("gIcY"),
                u = e("F2og"),
                r = {
                    provide: o.NG_VALIDATORS,
                    useExisting: t.forwardRef(function() {
                        return i
                    }),
                    multi: !0
                },
                i = function() {
                    function n() {}
                    return n.prototype.ngOnInit = function() {
                        this.validator = u.phone(this.phone)
                    }, n.prototype.ngOnChanges = function(n) {
                        for (var l in n) "phone" === l && (this.validator = u.phone(n[l].currentValue), this.onChange && this.onChange())
                    }, n.prototype.validate = function(n) {
                        return this.validator(n)
                    }, n.prototype.registerOnValidatorChange = function(n) {
                        this.onChange = n
                    }, n.decorators = [{
                        type: t.Directive,
                        args: [{
                            selector: "[phone][formControlName],[phone][formControl],[phone][ngModel]",
                            providers: [r]
                        }]
                    }], n.propDecorators = {
                        phone: [{
                            type: t.Input
                        }]
                    }, n
                }();
            l.PhoneValidator = i
        },
        ghU1: function(n, l, e) {
            "use strict";

            function t(n) {
                for (var e in n) l.hasOwnProperty(e) || (l[e] = n[e])
            }
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), t(e("0UZX")), t(e("9eTs"))
        },
        gpbi: function(n, l, e) {
            var t = e("ZWtO"),
                o = e("KxBF");
            n.exports = function(n, l) {
                return l.length < 2 ? n : t(n, o(l, 0, -1))
            }
        },
        h9za: function(n, l, e) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            });
            var t = e("gIcY"),
                o = e("m9Vx");
            l.rangeLength = function(n) {
                return function(l) {
                    if (!o.isPresent(n)) return null;
                    if (o.isPresent(t.Validators.required(l))) return null;
                    var e = l.value;
                    return e.length >= n[0] && e.length <= n[1] ? null : {
                        rangeLength: !0
                    }
                }
            }
        },
        hDam: function(n, l) {
            n.exports = function() {}
        },
        heNW: function(n, l) {
            n.exports = function(n, l, e) {
                switch (e.length) {
                    case 0:
                        return n.call(l);
                    case 1:
                        return n.call(l, e[0]);
                    case 2:
                        return n.call(l, e[0], e[1]);
                    case 3:
                        return n.call(l, e[0], e[1], e[2])
                }
                return n.apply(l, e)
            }
        },
        hgQt: function(n, l, e) {
            var t = e("Juji"),
                o = e("4sDh");
            n.exports = function(n, l) {
                return null != n && o(n, l, t)
            }
        },
        hypo: function(n, l, e) {
            var t = e("O0oS");
            n.exports = function(n, l, e) {
                "__proto__" == l && t ? t(n, l, {
                    configurable: !0,
                    enumerable: !0,
                    value: e,
                    writable: !0
                }) : n[l] = e
            }
        },
        iCc5: function(n, l, e) {
            "use strict";
            l.__esModule = !0, l.default = function(n, l) {
                if (!(n instanceof l)) throw new TypeError("Cannot call a class as a function")
            }
        },
        idmN: function(n, l, e) {
            var t = e("ZWtO"),
                o = e("FZoo"),
                u = e("4uTw");
            n.exports = function(n, l, e) {
                for (var r = -1, i = l.length, a = {}; ++r < i;) {
                    var d = l[r],
                        s = t(n, d);
                    e(s, d) && o(a, u(d, n), s)
                }
                return a
            }
        },
        ijCd: function(n, l, e) {
            var t = e("R/W3"),
                o = e("MMmD"),
                u = e("4qC0"),
                r = e("Sxd8"),
                i = e("P/G1"),
                a = Math.max;
            n.exports = function(n, l, e, d) {
                n = o(n) ? n : i(n), e = e && !d ? r(e) : 0;
                var s = n.length;
                return e < 0 && (e = a(s + e, 0)), u(n) ? e <= s && n.indexOf(l, e) > -1 : !!s && t(n, l, e) > -1
            }
        },
        inIq: function(n, l, e) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            });
            var t = e("gIcY"),
                o = e("m9Vx");
            l.equal = function(n) {
                return function(l) {
                    return o.isPresent(t.Validators.required(l)) ? null : n === l.value ? null : {
                        equal: !0
                    }
                }
            }
        },
        itsj: function(n, l) {
            n.exports = function(n, l) {
                return "__proto__" == l ? void 0 : n[l]
            }
        },
        j2DC: function(n, l, e) {
            "use strict";
            var t = e("oVml"),
                o = e("rr1i"),
                u = e("RfKB"),
                r = {};
            e("NegM")(r, e("UWiX")("iterator"), function() {
                return this
            }), n.exports = function(n, l, e) {
                n.prototype = t(r, {
                    next: o(1, e)
                }), u(n, l + " Iterator")
            }
        },
        jeLo: function(n, l, e) {
            var t = e("juv8"),
                o = e("mTTR");
            n.exports = function(n) {
                return t(n, o(n))
            }
        },
        jl4B: function(n, l, e) {
            "use strict";

            function t(n) {
                for (var e in n) l.hasOwnProperty(e) || (l[e] = n[e])
            }
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), t(e("mJH7")), t(e("177e"))
        },
        jmDH: function(n, l, e) {
            n.exports = !e("KUxP")(function() {
                return 7 != Object.defineProperty({}, "a", {
                    get: function() {
                        return 7
                    }
                }).a
            })
        },
        juv8: function(n, l, e) {
            var t = e("MrPd"),
                o = e("hypo");
            n.exports = function(n, l, e, u) {
                var r = !e;
                e || (e = {});
                for (var i = -1, a = l.length; ++i < a;) {
                    var d = l[i],
                        s = u ? u(e[d], n[d], d, e, n) : void 0;
                    void 0 === s && (s = n[d]), r ? o(e, d, s) : t(e, d, s)
                }
                return e
            }
        },
        "k+1r": function(n, l, e) {
            var t = e("QkVE");
            n.exports = function(n) {
                var l = t(this, n).delete(n);
                return this.size -= l ? 1 : 0, l
            }
        },
        "k/8l": function(n, l, e) {
            n.exports = {
                default: e("VKFn"),
                __esModule: !0
            }
        },
        kTiW: function(n, l, e) {
            n.exports = e("NegM")
        },
        kVrb: function(n, l, e) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            });
            var t = e("CcnG"),
                o = e("gIcY"),
                u = e("15yF"),
                r = {
                    provide: o.NG_VALIDATORS,
                    useExisting: t.forwardRef(function() {
                        return i
                    }),
                    multi: !0
                },
                i = function() {
                    function n() {}
                    return n.prototype.ngOnInit = function() {
                        this.validator = u.notEqual(this.notEqual)
                    }, n.prototype.ngOnChanges = function(n) {
                        for (var l in n) "notEqual" === l && (this.validator = u.notEqual(n[l].currentValue), this.onChange && this.onChange())
                    }, n.prototype.validate = function(n) {
                        return this.validator(n)
                    }, n.prototype.registerOnValidatorChange = function(n) {
                        this.onChange = n
                    }, n.decorators = [{
                        type: t.Directive,
                        args: [{
                            selector: "[notEqual][formControlName],[notEqual][formControl],[notEqual][ngModel]",
                            providers: [r]
                        }]
                    }], n.propDecorators = {
                        notEqual: [{
                            type: t.Input
                        }]
                    }, n
                }();
            l.NotEqualValidator = i
        },
        kekF: function(n, l) {
            n.exports = function(n, l) {
                return function(e) {
                    return n(l(e))
                }
            }
        },
        kqoJ: function(n, l, e) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            });
            var t = e("gIcY"),
                o = e("m9Vx");
            l.min = function(n) {
                return function(l) {
                    if (!o.isPresent(n)) return null;
                    if (o.isPresent(t.Validators.required(l))) return null;
                    var e = +l.value;
                    return e >= +n ? null : {
                        actualValue: e,
                        requiredValue: +n,
                        min: !0
                    }
                }
            }
        },
        kwZ1: function(n, l, e) {
            "use strict";
            var t = e("w6GO"),
                o = e("mqlF"),
                u = e("NV0k"),
                r = e("JB68"),
                i = e("M1xp"),
                a = Object.assign;
            n.exports = !a || e("KUxP")(function() {
                var n = {},
                    l = {},
                    e = Symbol(),
                    t = "abcdefghijklmnopqrst";
                return n[e] = 7, t.split("").forEach(function(n) {
                    l[n] = n
                }), 7 != a({}, n)[e] || Object.keys(a({}, l)).join("") != t
            }) ? function(n, l) {
                for (var e = r(n), a = arguments.length, d = 1, s = o.f, c = u.f; a > d;)
                    for (var p, f = i(arguments[d++]), h = s ? t(f).concat(s(f)) : t(f), g = h.length, m = 0; g > m;) c.call(f, p = h[m++]) && (e[p] = f[p]);
                return e
            } : a
        },
        lQqw: function(n, l, e) {
            var t = e("MMmD");
            n.exports = function(n, l) {
                return function(e, o) {
                    if (null == e) return e;
                    if (!t(e)) return n(e, o);
                    for (var u = e.length, r = l ? u : -1, i = Object(e);
                        (l ? r-- : ++r < u) && !1 !== o(i[r], r, i););
                    return e
                }
            }
        },
        lRys: function(n, l, e) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            });
            var t = e("gIcY"),
                o = e("m9Vx");
            l.notEqual = function(n) {
                return function(l) {
                    return o.isPresent(t.Validators.required(l)) ? null : n !== l.value ? null : {
                        notEqual: !0
                    }
                }
            }
        },
        lSCD: function(n, l, e) {
            var t = e("NykK"),
                o = e("GoyQ");
            n.exports = function(n) {
                if (!o(n)) return !1;
                var l = t(n);
                return "[object Function]" == l || "[object GeneratorFunction]" == l || "[object AsyncFunction]" == l || "[object Proxy]" == l
            }
        },
        ldVq: function(n, l, e) {
            var t = e("QMMT"),
                o = e("UWiX")("iterator"),
                u = e("SBuE");
            n.exports = e("WEpk").isIterable = function(n) {
                var l = Object(n);
                return void 0 !== l[o] || "@@iterator" in l || u.hasOwnProperty(t(l))
            }
        },
        ljhN: function(n, l) {
            n.exports = function(n, l) {
                return n === l || n != n && l != l
            }
        },
        "lm/5": function(n, l, e) {
            var t = e("fmRc"),
                o = e("wF/u");
            n.exports = function(n, l, e, u) {
                var r = e.length,
                    i = r,
                    a = !u;
                if (null == n) return !i;
                for (n = Object(n); r--;) {
                    var d = e[r];
                    if (a && d[2] ? d[1] !== n[d[0]] : !(d[0] in n)) return !1
                }
                for (; ++r < i;) {
                    var s = (d = e[r])[0],
                        c = n[s],
                        p = d[1];
                    if (a && d[2]) {
                        if (void 0 === c && !(s in n)) return !1
                    } else {
                        var f = new t;
                        if (u) var h = u(c, p, s, n, l, f);
                        if (!(void 0 === h ? o(p, c, 3, u, f) : h)) return !1
                    }
                }
                return !0
            }
        },
        "m/yT": function(n, l, e) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            });
            var t = e("gIcY"),
                o = e("m9Vx");
            l.email = function(n) {
                return o.isPresent(t.Validators.required(n)) ? null : /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(n.value) ? null : {
                    email: !0
                }
            }
        },
        m9Vx: function(n, l, e) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), l.isPresent = function(n) {
                return void 0 !== n && null !== n
            }, l.isDate = function(n) {
                return !/Invalid|NaN/.test(new Date(n).toString())
            }
        },
        mJH7: function(n, l, e) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            });
            var t = e("CcnG"),
                o = e("gIcY"),
                u = e("jl4B"),
                r = {
                    provide: o.NG_VALIDATORS,
                    useExisting: t.forwardRef(function() {
                        return i
                    }),
                    multi: !0
                },
                i = function() {
                    function n() {}
                    return n.prototype.validate = function(n) {
                        return u.json(n)
                    }, n.decorators = [{
                        type: t.Directive,
                        args: [{
                            selector: "[json][formControlName],[json][formControl],[json][ngModel]",
                            providers: [r]
                        }]
                    }], n
                }();
            l.JSONValidator = i
        },
        mTTR: function(n, l, e) {
            var t = e("b80T"),
                o = e("QcOe"),
                u = e("MMmD");
            n.exports = function(n) {
                return u(n) ? t(n, !0) : o(n)
            }
        },
        mc0g: function(n, l) {
            n.exports = function(n) {
                return function(l, e, t) {
                    for (var o = -1, u = Object(l), r = t(l), i = r.length; i--;) {
                        var a = r[n ? i : ++o];
                        if (!1 === e(u[a], a, u)) break
                    }
                    return l
                }
            }
        },
        mdPL: function(n, l, e) {
            (function(n) {
                var t = e("WFqU"),
                    o = "object" == typeof l && l && !l.nodeType && l,
                    u = o && "object" == typeof n && n && !n.nodeType && n,
                    r = u && u.exports === o && t.process,
                    i = function() {
                        try {
                            return r && r.binding && r.binding("util")
                        } catch (n) {}
                    }();
                n.exports = i
            }).call(this, e("YuTi")(n))
        },
        mqlF: function(n, l) {
            l.f = Object.getOwnPropertySymbols
        },
        "mv/X": function(n, l, e) {
            var t = e("ljhN"),
                o = e("MMmD"),
                u = e("wJg7"),
                r = e("GoyQ");
            n.exports = function(n, l, e) {
                if (!r(e)) return !1;
                var i = typeof l;
                return !!("number" == i ? o(e) && u(l, e.length) : "string" == i && l in e) && t(e[l], n)
            }
        },
        mwIZ: function(n, l, e) {
            var t = e("ZWtO");
            n.exports = function(n, l, e) {
                var o = null == n ? void 0 : t(n, l);
                return void 0 === o ? e : o
            }
        },
        nPu3: function(n, l, e) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), l.notEqualTo = function(n) {
                var l = !1;
                return function(e) {
                    return l || (l = !0, n.valueChanges.subscribe(function() {
                        e.updateValueAndValidity()
                    })), n.value !== e.value ? null : {
                        notEqualTo: !0
                    }
                }
            }
        },
        nmnc: function(n, l, e) {
            var t = e("Kz5y");
            n.exports = t.Symbol
        },
        o8NH: function(n, l, e) {
            var t = e("Y7ZC");
            t(t.S + t.F, "Object", {
                assign: e("kwZ1")
            })
        },
        "oCl/": function(n, l, e) {
            var t = e("CH3K"),
                o = e("LcsW"),
                u = e("MvSz"),
                r = e("0ycA"),
                i = Object.getOwnPropertySymbols;
            n.exports = i ? function(n) {
                for (var l = []; n;) t(l, u(n)), n = o(n);
                return l
            } : r
        },
        oQam: function(n, l, e) {
            "use strict";
            l.FileLikeObject = function() {
                function n(n) {
                    this.rawFile = n;
                    var l, e = (l = n) && (l.nodeName || l.prop && l.attr && l.find) ? n.value : n;
                    this["_createFrom" + ("string" == typeof e ? "FakePath" : "Object")](e)
                }
                return n.prototype._createFromFakePath = function(n) {
                    this.lastModifiedDate = void 0, this.size = void 0, this.type = "like/" + n.slice(n.lastIndexOf(".") + 1).toLowerCase(), this.name = n.slice(n.lastIndexOf("/") + n.lastIndexOf("\\") + 2)
                }, n.prototype._createFromObject = function(n) {
                    this.size = n.size, this.type = n.type, this.name = n.name
                }, n
            }()
        },
        oVml: function(n, l, e) {
            var t = e("5K7Z"),
                o = e("fpC5"),
                u = e("FpHa"),
                r = e("VVlx")("IE_PROTO"),
                i = function() {},
                a = function() {
                    var n, l = e("Hsns")("iframe"),
                        t = u.length;
                    for (l.style.display = "none", e("MvwC").appendChild(l), l.src = "javascript:", (n = l.contentWindow.document).open(), n.write("<script>document.F=Object<\/script>"), n.close(), a = n.F; t--;) delete a.prototype[u[t]];
                    return a()
                };
            n.exports = Object.create || function(n, l) {
                var e;
                return null !== n ? (i.prototype = t(n), e = new i, i.prototype = null, e[r] = n) : e = a(), void 0 === l ? e : o(e, l)
            }
        },
        or5M: function(n, l, e) {
            var t = e("1hJj"),
                o = e("QoRX"),
                u = e("xYSL");
            n.exports = function(n, l, e, r, i, a) {
                var d = 1 & e,
                    s = n.length,
                    c = l.length;
                if (s != c && !(d && c > s)) return !1;
                var p = a.get(n);
                if (p && a.get(l)) return p == l;
                var f = -1,
                    h = !0,
                    g = 2 & e ? new t : void 0;
                for (a.set(n, l), a.set(l, n); ++f < s;) {
                    var m = n[f],
                        v = l[f];
                    if (r) var b = d ? r(v, m, f, l, n, a) : r(m, v, f, n, l, a);
                    if (void 0 !== b) {
                        if (b) continue;
                        h = !1;
                        break
                    }
                    if (g) {
                        if (!o(l, function(n, l) {
                                if (!u(g, l) && (m === n || i(m, n, e, r, a))) return g.push(l)
                            })) {
                            h = !1;
                            break
                        }
                    } else if (m !== v && !i(m, v, e, r, a)) {
                        h = !1;
                        break
                    }
                }
                return a.delete(n), a.delete(l), h
            }
        },
        "otv/": function(n, l, e) {
            var t = e("nmnc"),
                o = t ? t.prototype : void 0,
                u = o ? o.valueOf : void 0;
            n.exports = function(n) {
                return u ? Object(u.call(n)) : {}
            }
        },
        pFRH: function(n, l, e) {
            var t = e("cvCv"),
                o = e("O0oS"),
                u = e("zZ0H");
            n.exports = o ? function(n, l) {
                return o(n, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: t(l),
                    writable: !0
                })
            } : u
        },
        pKD1: function(n, l, e) {
            "use strict";
            var t = e("mrSG").__decorate,
                o = e("mrSG").__metadata,
                u = e("CcnG"),
                r = e("UpIn"),
                i = function() {
                    function n(n) {
                        this.fileOver = new u.EventEmitter, this.onFileDrop = new u.EventEmitter, this.element = n
                    }
                    return n.prototype.getOptions = function() {
                        return this.uploader.options
                    }, n.prototype.getFilters = function() {
                        return {}
                    }, n.prototype.onDrop = function(n) {
                        var l = this._getTransfer(n);
                        if (l) {
                            var e = this.getOptions(),
                                t = this.getFilters();
                            this._preventAndStop(n), this.uploader.addToQueue(l.files, e, t), this.fileOver.emit(!1), this.onFileDrop.emit(l.files)
                        }
                    }, n.prototype.onDragOver = function(n) {
                        var l = this._getTransfer(n);
                        this._haveFiles(l.types) && (l.dropEffect = "copy", this._preventAndStop(n), this.fileOver.emit(!0))
                    }, n.prototype.onDragLeave = function(n) {
                        this.element && n.currentTarget === this.element[0] || (this._preventAndStop(n), this.fileOver.emit(!1))
                    }, n.prototype._getTransfer = function(n) {
                        return n.dataTransfer ? n.dataTransfer : n.originalEvent.dataTransfer
                    }, n.prototype._preventAndStop = function(n) {
                        n.preventDefault(), n.stopPropagation()
                    }, n.prototype._haveFiles = function(n) {
                        return !!n && (n.indexOf ? -1 !== n.indexOf("Files") : !!n.contains && n.contains("Files"))
                    }, n
                }();
            t([u.Input(), o("design:type", r.FileUploader)], i.prototype, "uploader", void 0), t([u.Output(), o("design:type", u.EventEmitter)], i.prototype, "fileOver", void 0), t([u.Output(), o("design:type", u.EventEmitter)], i.prototype, "onFileDrop", void 0), t([u.HostListener("drop", ["$event"]), o("design:type", Function), o("design:paramtypes", [Object]), o("design:returntype", void 0)], i.prototype, "onDrop", null), t([u.HostListener("dragover", ["$event"]), o("design:type", Function), o("design:paramtypes", [Object]), o("design:returntype", void 0)], i.prototype, "onDragOver", null), t([u.HostListener("dragleave", ["$event"]), o("design:type", Function), o("design:paramtypes", [Object]), o("design:returntype", Object)], i.prototype, "onDragLeave", null), i = t([u.Directive({
                selector: "[ng2FileDrop]"
            })], i), l.FileDropDirective = i
        },
        pSRY: function(n, l, e) {
            var t = e("QkVE");
            n.exports = function(n) {
                return t(this, n).has(n)
            }
        },
        pXYb: function(n, l, e) {
            "use strict";

            function t(n) {
                for (var e in n) l.hasOwnProperty(e) || (l[e] = n[e])
            }
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), t(e("ug6e")), t(e("0DCV"))
        },
        pZt1: function(n, l) {
            n.exports = function(n) {
                return n && n.length ? n[0] : void 0
            }
        },
        pvmI: function(n, l, e) {
            "use strict";

            function t(n) {
                for (var e in n) l.hasOwnProperty(e) || (l[e] = n[e])
            }
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), t(e("/g4C")), t(e("Pdpc"))
        },
        q5o6: function(n, l, e) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            });
            var t = e("gIcY"),
                o = e("m9Vx");
            l.base64 = function(n) {
                return o.isPresent(t.Validators.required(n)) ? null : /^(?:[A-Z0-9+\/]{4})*(?:[A-Z0-9+\/]{2}==|[A-Z0-9+\/]{3}=|[A-Z0-9+\/]{4})$/i.test(n.value) ? null : {
                    base64: !0
                }
            }
        },
        qZTm: function(n, l, e) {
            var t = e("fR/l"),
                o = e("MvSz"),
                u = e("7GkX");
            n.exports = function(n) {
                return t(n, u, o)
            }
        },
        r0XH: function(n, l, e) {
            "use strict";

            function t(n) {
                for (var e in n) l.hasOwnProperty(e) || (l[e] = n[e])
            }
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), t(e("HT6E")), t(e("KNBz"))
        },
        rEGp: function(n, l) {
            n.exports = function(n) {
                var l = -1,
                    e = Array(n.size);
                return n.forEach(function(n) {
                    e[++l] = n
                }), e
            }
        },
        rKjJ: function(n, l, e) {
            "use strict";

            function t(n) {
                for (var e in n) l.hasOwnProperty(e) || (l[e] = n[e])
            }
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), t(e("+h4i")), t(e("wp3W"))
        },
        rr1i: function(n, l) {
            n.exports = function(n, l) {
                return {
                    enumerable: !(1 & n),
                    configurable: !(2 & n),
                    writable: !(4 & n),
                    value: l
                }
            }
        },
        sEf8: function(n, l) {
            n.exports = function(n) {
                return function(l) {
                    return n(l)
                }
            }
        },
        sEfC: function(n, l, e) {
            var t = e("GoyQ"),
                o = e("QIyF"),
                u = e("tLB3"),
                r = Math.max,
                i = Math.min;
            n.exports = function(n, l, e) {
                var a, d, s, c, p, f, h = 0,
                    g = !1,
                    m = !1,
                    v = !0;
                if ("function" != typeof n) throw new TypeError("Expected a function");

                function b(l) {
                    var e = a,
                        t = d;
                    return a = d = void 0, h = l, c = n.apply(t, e)
                }

                function y(n) {
                    var e = n - f;
                    return void 0 === f || e >= l || e < 0 || m && n - h >= s
                }

                function $() {
                    var n = o();
                    if (y(n)) return _(n);
                    p = setTimeout($, function(n) {
                        var e = l - (n - f);
                        return m ? i(e, s - (n - h)) : e
                    }(n))
                }

                function _(n) {
                    return p = void 0, v && a ? b(n) : (a = d = void 0, c)
                }

                function x() {
                    var n = o(),
                        e = y(n);
                    if (a = arguments, d = this, f = n, e) {
                        if (void 0 === p) return function(n) {
                            return h = n, p = setTimeout($, l), g ? b(n) : c
                        }(f);
                        if (m) return p = setTimeout($, l), b(f)
                    }
                    return void 0 === p && (p = setTimeout($, l)), c
                }
                return l = u(l) || 0, t(e) && (g = !!e.leading, s = (m = "maxWait" in e) ? r(u(e.maxWait) || 0, l) : s, v = "trailing" in e ? !!e.trailing : v), x.cancel = function() {
                    void 0 !== p && clearTimeout(p), h = 0, a = f = d = p = void 0
                }, x.flush = function() {
                    return void 0 === p ? c : _(o())
                }, x
            }
        },
        seXi: function(n, l, e) {
            var t = e("qZTm"),
                o = Object.prototype.hasOwnProperty;
            n.exports = function(n, l, e, u, r, i) {
                var a = 1 & e,
                    d = t(n),
                    s = d.length;
                if (s != t(l).length && !a) return !1;
                for (var c = s; c--;) {
                    var p = d[c];
                    if (!(a ? p in l : o.call(l, p))) return !1
                }
                var f = i.get(n);
                if (f && i.get(l)) return f == l;
                var h = !0;
                i.set(n, l), i.set(l, n);
                for (var g = a; ++c < s;) {
                    var m = n[p = d[c]],
                        v = l[p];
                    if (u) var b = a ? u(v, m, p, l, n, i) : u(m, v, p, n, l, i);
                    if (!(void 0 === b ? m === v || r(m, v, e, u, i) : b)) {
                        h = !1;
                        break
                    }
                    g || (g = "constructor" == p)
                }
                if (h && !g) {
                    var y = n.constructor,
                        $ = l.constructor;
                    y != $ && "constructor" in n && "constructor" in l && !("function" == typeof y && y instanceof y && "function" == typeof $ && $ instanceof $) && (h = !1)
                }
                return i.delete(n), i.delete(l), h
            }
        },
        shjB: function(n, l) {
            n.exports = function(n) {
                return "number" == typeof n && n > -1 && n % 1 == 0 && n <= 9007199254740991
            }
        },
        sk9p: function(n, l, e) {
            "use strict";
            l.__esModule = !0;
            var t = u(e("k/8l")),
                o = u(e("FyfS"));

            function u(n) {
                return n && n.__esModule ? n : {
                    default: n
                }
            }
            l.default = function(n, l) {
                if (Array.isArray(n)) return n;
                if ((0, t.default)(Object(n))) return function(n, l) {
                    var e = [],
                        t = !0,
                        u = !1,
                        r = void 0;
                    try {
                        for (var i, a = (0, o.default)(n); !(t = (i = a.next()).done) && (e.push(i.value), !l || e.length !== l); t = !0);
                    } catch (n) {
                        u = !0, r = n
                    } finally {
                        try {
                            !t && a.return && a.return()
                        } finally {
                            if (u) throw r
                        }
                    }
                    return e
                }(n, l);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        },
        t1MI: function(n, l, e) {
            "use strict";

            function t(n) {
                for (var e in n) l.hasOwnProperty(e) || (l[e] = n[e])
            }
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), t(e("8r50")), t(e("yazQ"))
        },
        t2Dn: function(n, l, e) {
            var t = e("hypo"),
                o = e("ljhN");
            n.exports = function(n, l, e) {
                (void 0 === e || o(n[l], e)) && (void 0 !== e || l in n) || t(n, l, e)
            }
        },
        tEej: function(n, l, e) {
            var t = e("Ojgd"),
                o = Math.min;
            n.exports = function(n) {
                return n > 0 ? o(t(n), 9007199254740991) : 0
            }
        },
        tLB3: function(n, l, e) {
            var t = e("GoyQ"),
                o = e("/9aa"),
                u = /^\s+|\s+$/g,
                r = /^[-+]0x[0-9a-f]+$/i,
                i = /^0b[01]+$/i,
                a = /^0o[0-7]+$/i,
                d = parseInt;
            n.exports = function(n) {
                if ("number" == typeof n) return n;
                if (o(n)) return NaN;
                if (t(n)) {
                    var l = "function" == typeof n.valueOf ? n.valueOf() : n;
                    n = t(l) ? l + "" : l
                }
                if ("string" != typeof n) return 0 === n ? n : +n;
                n = n.replace(u, "");
                var e = i.test(n);
                return e || a.test(n) ? d(n.slice(2), e ? 2 : 8) : r.test(n) ? NaN : +n
            }
        },
        tMB7: function(n, l, e) {
            var t = e("y1pI");
            n.exports = function(n) {
                var l = this.__data__,
                    e = t(l, n);
                return e < 0 ? void 0 : l[e][1]
            }
        },
        tadb: function(n, l, e) {
            var t = e("Cwc5")(e("Kz5y"), "DataView");
            n.exports = t
        },
        u46e: function(n, l, e) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            });
            var t = e("gIcY"),
                o = e("m9Vx");
            l.gte = function(n) {
                return function(l) {
                    return o.isPresent(n) ? o.isPresent(t.Validators.required(l)) ? null : +l.value >= +n ? null : {
                        gte: !0
                    } : null
                }
            }
        },
        u8Dt: function(n, l, e) {
            var t = e("YESw"),
                o = Object.prototype.hasOwnProperty;
            n.exports = function(n) {
                var l = this.__data__;
                if (t) {
                    var e = l[n];
                    return "__lodash_hash_undefined__" === e ? void 0 : e
                }
                return o.call(l, n) ? l[n] : void 0
            }
        },
        uOPS: function(n, l) {
            n.exports = !0
        },
        ug6e: function(n, l, e) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            });
            var t = e("CcnG"),
                o = e("gIcY"),
                u = e("pXYb"),
                r = {
                    provide: o.NG_VALIDATORS,
                    useExisting: t.forwardRef(function() {
                        return i
                    }),
                    multi: !0
                },
                i = function() {
                    function n() {}
                    return n.prototype.validate = function(n) {
                        return u.dateISO(n)
                    }, n.decorators = [{
                        type: t.Directive,
                        args: [{
                            selector: "[dateISO][formControlName],[dateISO][formControl],[dateISO][ngModel]",
                            providers: [r]
                        }]
                    }], n
                }();
            l.DateISOValidator = i
        },
        umdh: function(n, l, e) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            });
            var t = e("CcnG"),
                o = e("gIcY"),
                u = e("S8xG"),
                r = {
                    provide: o.NG_VALIDATORS,
                    useExisting: t.forwardRef(function() {
                        return i
                    }),
                    multi: !0
                },
                i = function() {
                    function n() {}
                    return n.prototype.ngOnInit = function() {
                        this.validator = u.maxDate(this.maxDate)
                    }, n.prototype.ngOnChanges = function(n) {
                        for (var l in n) "maxDate" === l && (this.validator = u.maxDate(n[l].currentValue), this.onChange && this.onChange())
                    }, n.prototype.validate = function(n) {
                        return this.validator(n)
                    }, n.prototype.registerOnValidatorChange = function(n) {
                        this.onChange = n
                    }, n.decorators = [{
                        type: t.Directive,
                        args: [{
                            selector: "[maxDate][formControlName],[maxDate][formControl],[maxDate][ngModel]",
                            providers: [r]
                        }]
                    }], n.propDecorators = {
                        maxDate: [{
                            type: t.Input
                        }]
                    }, n
                }();
            l.MaxDateValidator = i
        },
        "ut/Y": function(n, l, e) {
            var t = e("ZCpW"),
                o = e("GDhZ"),
                u = e("zZ0H"),
                r = e("Z0cm"),
                i = e("+c4W");
            n.exports = function(n) {
                return "function" == typeof n ? n : null == n ? u : "object" == typeof n ? r(n) ? o(n[0], n[1]) : t(n) : i(n)
            }
        },
        vdN6: function(n, l, e) {
            "use strict";

            function t(n) {
                for (var e in n) l.hasOwnProperty(e) || (l[e] = n[e])
            }
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), t(e("NMws")), t(e("q5o6"))
        },
        "w/wX": function(n, l, e) {
            var t = e("QqLw"),
                o = e("ExA7");
            n.exports = function(n) {
                return o(n) && "[object Set]" == t(n)
            }
        },
        "w2d+": function(n, l, e) {
            "use strict";
            var t = e("hDam"),
                o = e("UO39"),
                u = e("SBuE"),
                r = e("NsO/");
            n.exports = e("MPFp")(Array, "Array", function(n, l) {
                this._t = r(n), this._i = 0, this._k = l
            }, function() {
                var n = this._t,
                    l = this._k,
                    e = this._i++;
                return !n || e >= n.length ? (this._t = void 0, o(1)) : o(0, "keys" == l ? e : "values" == l ? n[e] : [e, n[e]])
            }, "values"), u.Arguments = u.Array, t("keys"), t("values"), t("entries")
        },
        w6GO: function(n, l, e) {
            var t = e("5vMV"),
                o = e("FpHa");
            n.exports = Object.keys || function(n) {
                return t(n, o)
            }
        },
        "wF/u": function(n, l, e) {
            var t = e("e5cp"),
                o = e("ExA7");
            n.exports = function n(l, e, u, r, i) {
                return l === e || (null == l || null == e || !o(l) && !o(e) ? l != l && e != e : t(l, e, u, r, n, i))
            }
        },
        wJg7: function(n, l) {
            var e = /^(?:0|[1-9]\d*)$/;
            n.exports = function(n, l) {
                var t = typeof n;
                return !!(l = null == l ? 9007199254740991 : l) && ("number" == t || "symbol" != t && e.test(n)) && n > -1 && n % 1 == 0 && n < l
            }
        },
        wYKn: function(n, l, e) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            });
            var t = e("CcnG"),
                o = e("gIcY"),
                u = e("Tm9b"),
                r = {
                    provide: o.NG_VALIDATORS,
                    useExisting: t.forwardRef(function() {
                        return i
                    }),
                    multi: !0
                },
                i = function() {
                    function n() {}
                    return n.prototype.ngOnInit = function() {
                        this.validator = u.range(this.range)
                    }, n.prototype.ngOnChanges = function(n) {
                        for (var l in n) "range" === l && (this.validator = u.range(n[l].currentValue), this.onChange && this.onChange())
                    }, n.prototype.validate = function(n) {
                        return this.validator(n)
                    }, n.prototype.registerOnValidatorChange = function(n) {
                        this.onChange = n
                    }, n.decorators = [{
                        type: t.Directive,
                        args: [{
                            selector: "[range][formControlName],[range][formControl],[range][ngModel]",
                            providers: [r]
                        }]
                    }], n.propDecorators = {
                        range: [{
                            type: t.Input
                        }]
                    }, n
                }();
            l.RangeValidator = i
        },
        wclG: function(n, l, e) {
            var t = e("pFRH"),
                o = e("88Gu")(t);
            n.exports = o
        },
        wig9: function(n, l) {
            n.exports = function(n) {
                for (var l = -1, e = null == n ? 0 : n.length, t = 0, o = []; ++l < e;) {
                    var u = n[l];
                    u && (o[t++] = u)
                }
                return o
            }
        },
        wp3W: function(n, l, e) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            });
            var t = e("gIcY"),
                o = e("m9Vx");
            l.lt = function(n) {
                return function(l) {
                    return o.isPresent(n) ? o.isPresent(t.Validators.required(l)) ? null : +l.value < +n ? null : {
                        lt: !0
                    } : null
                }
            }
        },
        wrUr: function(n, l, e) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            });
            var t = e("CcnG"),
                o = e("gIcY"),
                u = e("7yqV"),
                r = {
                    provide: o.NG_VALIDATORS,
                    useExisting: t.forwardRef(function() {
                        return i
                    }),
                    multi: !0
                },
                i = function() {
                    function n() {}
                    return n.prototype.ngOnInit = function() {
                        this.validator = u.gt(this.gt)
                    }, n.prototype.ngOnChanges = function(n) {
                        for (var l in n) "gt" === l && (this.validator = u.gt(n[l].currentValue), this.onChange && this.onChange())
                    }, n.prototype.validate = function(n) {
                        return this.validator(n)
                    }, n.prototype.registerOnValidatorChange = function(n) {
                        this.onChange = n
                    }, n.decorators = [{
                        type: t.Directive,
                        args: [{
                            selector: "[gt][formControlName],[gt][formControl],[gt][ngModel]",
                            providers: [r]
                        }]
                    }], n.propDecorators = {
                        gt: [{
                            type: t.Input
                        }]
                    }, n
                }();
            l.GreaterThanValidator = i
        },
        wrZu: function(n, l, e) {
            var t = e("+K+b"),
                o = e("XYm9"),
                u = e("b2z7"),
                r = e("otv/"),
                i = e("yP5f");
            n.exports = function(n, l, e) {
                var a = n.constructor;
                switch (l) {
                    case "[object ArrayBuffer]":
                        return t(n);
                    case "[object Boolean]":
                    case "[object Date]":
                        return new a(+n);
                    case "[object DataView]":
                        return o(n, e);
                    case "[object Float32Array]":
                    case "[object Float64Array]":
                    case "[object Int8Array]":
                    case "[object Int16Array]":
                    case "[object Int32Array]":
                    case "[object Uint8Array]":
                    case "[object Uint8ClampedArray]":
                    case "[object Uint16Array]":
                    case "[object Uint32Array]":
                        return i(n, e);
                    case "[object Map]":
                        return new a;
                    case "[object Number]":
                    case "[object String]":
                        return new a(n);
                    case "[object RegExp]":
                        return u(n);
                    case "[object Set]":
                        return new a;
                    case "[object Symbol]":
                        return r(n)
                }
            }
        },
        xYSL: function(n, l) {
            n.exports = function(n, l) {
                return n.has(l)
            }
        },
        "xs/l": function(n, l, e) {
            var t = e("TYy9"),
                o = e("Ioao"),
                u = e("wclG");
            n.exports = function(n) {
                return u(o(n, void 0, t), n + "")
            }
        },
        y1pI: function(n, l, e) {
            var t = e("ljhN");
            n.exports = function(n, l) {
                for (var e = n.length; e--;)
                    if (t(n[e][0], l)) return e;
                return -1
            }
        },
        yGk4: function(n, l, e) {
            var t = e("Cwc5")(e("Kz5y"), "Set");
            n.exports = t
        },
        yHx3: function(n, l) {
            var e = Object.prototype.hasOwnProperty;
            n.exports = function(n) {
                var l = n.length,
                    t = new n.constructor(l);
                return l && "string" == typeof n[0] && e.call(n, "index") && (t.index = n.index, t.input = n.input), t
            }
        },
        yP5f: function(n, l, e) {
            var t = e("+K+b");
            n.exports = function(n, l) {
                var e = l ? t(n.buffer) : n.buffer;
                return new n.constructor(e, n.byteOffset, n.length)
            }
        },
        yak4: function(n, l, e) {
            "use strict";

            function t(n) {
                for (var e in n) l.hasOwnProperty(e) || (l[e] = n[e])
            }
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), t(e("Qyzf")), t(e("KTXt"))
        },
        yazQ: function(n, l, e) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            });
            var t = e("gIcY"),
                o = e("m9Vx");
            l.url = function(n) {
                return o.isPresent(t.Validators.required(n)) ? null : /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(n.value) ? null : {
                    url: !0
                }
            }
        },
        zEVN: function(n, l, e) {
            var t = e("Gi0A"),
                o = e("sEf8"),
                u = e("mdPL"),
                r = u && u.isMap,
                i = r ? o(r) : t;
            n.exports = i
        },
        zZ0H: function(n, l) {
            n.exports = function(n) {
                return n
            }
        },
        zoYe: function(n, l, e) {
            var t = e("nmnc"),
                o = e("eUgh"),
                u = e("Z0cm"),
                r = e("/9aa"),
                i = t ? t.prototype : void 0,
                a = i ? i.toString : void 0;
            n.exports = function n(l) {
                if ("string" == typeof l) return l;
                if (u(l)) return o(l, n) + "";
                if (r(l)) return a ? a.call(l) : "";
                var e = l + "";
                return "0" == e && 1 / l == -1 / 0 ? "-0" : e
            }
        }
    }
]);