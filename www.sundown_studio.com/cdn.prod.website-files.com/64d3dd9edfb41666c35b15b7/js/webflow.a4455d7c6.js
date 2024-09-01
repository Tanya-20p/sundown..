/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
    var qE = Object.create;
    var Rr = Object.defineProperty;
    var kE = Object.getOwnPropertyDescriptor;
    var XE = Object.getOwnPropertyNames;
    var GE = Object.getPrototypeOf,
        VE = Object.prototype.hasOwnProperty;
    var Ee = (e, t) => () => (e && (t = e(e = 0)), t);
    var f = (e, t) => () => (t || e((t = {
            exports: {}
        }).exports, t), t.exports),
        Ce = (e, t) => {
            for (var r in t) Rr(e, r, {
                get: t[r],
                enumerable: !0
            })
        },
        sa = (e, t, r, n) => {
            if (t && typeof t == "object" || typeof t == "function")
                for (let i of XE(t)) !VE.call(e, i) && i !== r && Rr(e, i, {
                    get: () => t[i],
                    enumerable: !(n = kE(t, i)) || n.enumerable
                });
            return e
        };
    var ue = (e, t, r) => (r = e != null ? qE(GE(e)) : {}, sa(t || !e || !e.__esModule ? Rr(r, "default", {
            value: e,
            enumerable: !0
        }) : r, e)),
        ze = e => sa(Rr({}, "__esModule", {
            value: !0
        }), e);
    var Hn = f(() => {
        "use strict";
        window.tram = function(e) {
            function t(c, y) {
                var b = new X.Bare;
                return b.init(c, y)
            }

            function r(c) {
                return c.replace(/[A-Z]/g, function(y) {
                    return "-" + y.toLowerCase()
                })
            }

            function n(c) {
                var y = parseInt(c.slice(1), 16),
                    b = y >> 16 & 255,
                    S = y >> 8 & 255,
                    T = 255 & y;
                return [b, S, T]
            }

            function i(c, y, b) {
                return "#" + (1 << 24 | c << 16 | y << 8 | b).toString(16).slice(1)
            }

            function o() {}

            function a(c, y) {
                l("Type warning: Expected: [" + c + "] Got: [" + typeof y + "] " + y)
            }

            function s(c, y, b) {
                l("Units do not match [" + c + "]: " + y + ", " + b)
            }

            function u(c, y, b) {
                if (y !== void 0 && (b = y), c === void 0) return b;
                var S = b;
                return ht.test(c) || !tt.test(c) ? S = parseInt(c, 10) : tt.test(c) && (S = 1e3 * parseFloat(c)), 0 > S && (S = 0), S === S ? S : b
            }

            function l(c) {
                ce.debug && window && window.console.warn(c)
            }

            function v(c) {
                for (var y = -1, b = c ? c.length : 0, S = []; ++y < b;) {
                    var T = c[y];
                    T && S.push(T)
                }
                return S
            }
            var d = function(c, y, b) {
                    function S(ne) {
                        return typeof ne == "object"
                    }

                    function T(ne) {
                        return typeof ne == "function"
                    }

                    function O() {}

                    function $(ne, pe) {
                        function U() {
                            var we = new oe;
                            return T(we.init) && we.init.apply(we, arguments), we
                        }

                        function oe() {}
                        pe === b && (pe = ne, ne = Object), U.Bare = oe;
                        var ae, me = O[c] = ne[c],
                            We = oe[c] = U[c] = new O;
                        return We.constructor = U, U.mixin = function(we) {
                            return oe[c] = U[c] = $(U, we)[c], U
                        }, U.open = function(we) {
                            if (ae = {}, T(we) ? ae = we.call(U, We, me, U, ne) : S(we) && (ae = we), S(ae))
                                for (var Jt in ae) y.call(ae, Jt) && (We[Jt] = ae[Jt]);
                            return T(We.init) || (We.init = ne), U
                        }, U.open(pe)
                    }
                    return $
                }("prototype", {}.hasOwnProperty),
                p = {
                    ease: ["ease", function(c, y, b, S) {
                        var T = (c /= S) * c,
                            O = T * c;
                        return y + b * (-2.75 * O * T + 11 * T * T + -15.5 * O + 8 * T + .25 * c)
                    }],
                    "ease-in": ["ease-in", function(c, y, b, S) {
                        var T = (c /= S) * c,
                            O = T * c;
                        return y + b * (-1 * O * T + 3 * T * T + -3 * O + 2 * T)
                    }],
                    "ease-out": ["ease-out", function(c, y, b, S) {
                        var T = (c /= S) * c,
                            O = T * c;
                        return y + b * (.3 * O * T + -1.6 * T * T + 2.2 * O + -1.8 * T + 1.9 * c)
                    }],
                    "ease-in-out": ["ease-in-out", function(c, y, b, S) {
                        var T = (c /= S) * c,
                            O = T * c;
                        return y + b * (2 * O * T + -5 * T * T + 2 * O + 2 * T)
                    }],
                    linear: ["linear", function(c, y, b, S) {
                        return b * c / S + y
                    }],
                    "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(c, y, b, S) {
                        return b * (c /= S) * c + y
                    }],
                    "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(c, y, b, S) {
                        return -b * (c /= S) * (c - 2) + y
                    }],
                    "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(c, y, b, S) {
                        return (c /= S / 2) < 1 ? b / 2 * c * c + y : -b / 2 * (--c * (c - 2) - 1) + y
                    }],
                    "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(c, y, b, S) {
                        return b * (c /= S) * c * c + y
                    }],
                    "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(c, y, b, S) {
                        return b * ((c = c / S - 1) * c * c + 1) + y
                    }],
                    "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(c, y, b, S) {
                        return (c /= S / 2) < 1 ? b / 2 * c * c * c + y : b / 2 * ((c -= 2) * c * c + 2) + y
                    }],
                    "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(c, y, b, S) {
                        return b * (c /= S) * c * c * c + y
                    }],
                    "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(c, y, b, S) {
                        return -b * ((c = c / S - 1) * c * c * c - 1) + y
                    }],
                    "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(c, y, b, S) {
                        return (c /= S / 2) < 1 ? b / 2 * c * c * c * c + y : -b / 2 * ((c -= 2) * c * c * c - 2) + y
                    }],
                    "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(c, y, b, S) {
                        return b * (c /= S) * c * c * c * c + y
                    }],
                    "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(c, y, b, S) {
                        return b * ((c = c / S - 1) * c * c * c * c + 1) + y
                    }],
                    "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(c, y, b, S) {
                        return (c /= S / 2) < 1 ? b / 2 * c * c * c * c * c + y : b / 2 * ((c -= 2) * c * c * c * c + 2) + y
                    }],
                    "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(c, y, b, S) {
                        return -b * Math.cos(c / S * (Math.PI / 2)) + b + y
                    }],
                    "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(c, y, b, S) {
                        return b * Math.sin(c / S * (Math.PI / 2)) + y
                    }],
                    "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(c, y, b, S) {
                        return -b / 2 * (Math.cos(Math.PI * c / S) - 1) + y
                    }],
                    "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(c, y, b, S) {
                        return c === 0 ? y : b * Math.pow(2, 10 * (c / S - 1)) + y
                    }],
                    "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(c, y, b, S) {
                        return c === S ? y + b : b * (-Math.pow(2, -10 * c / S) + 1) + y
                    }],
                    "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(c, y, b, S) {
                        return c === 0 ? y : c === S ? y + b : (c /= S / 2) < 1 ? b / 2 * Math.pow(2, 10 * (c - 1)) + y : b / 2 * (-Math.pow(2, -10 * --c) + 2) + y
                    }],
                    "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(c, y, b, S) {
                        return -b * (Math.sqrt(1 - (c /= S) * c) - 1) + y
                    }],
                    "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(c, y, b, S) {
                        return b * Math.sqrt(1 - (c = c / S - 1) * c) + y
                    }],
                    "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(c, y, b, S) {
                        return (c /= S / 2) < 1 ? -b / 2 * (Math.sqrt(1 - c * c) - 1) + y : b / 2 * (Math.sqrt(1 - (c -= 2) * c) + 1) + y
                    }],
                    "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(c, y, b, S, T) {
                        return T === void 0 && (T = 1.70158), b * (c /= S) * c * ((T + 1) * c - T) + y
                    }],
                    "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(c, y, b, S, T) {
                        return T === void 0 && (T = 1.70158), b * ((c = c / S - 1) * c * ((T + 1) * c + T) + 1) + y
                    }],
                    "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(c, y, b, S, T) {
                        return T === void 0 && (T = 1.70158), (c /= S / 2) < 1 ? b / 2 * c * c * (((T *= 1.525) + 1) * c - T) + y : b / 2 * ((c -= 2) * c * (((T *= 1.525) + 1) * c + T) + 2) + y
                    }]
                },
                h = {
                    "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                    "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                    "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
                },
                I = document,
                _ = window,
                A = "bkwld-tram",
                m = /[\-\.0-9]/g,
                R = /[A-Z]/,
                w = "number",
                P = /^(rgb|#)/,
                N = /(em|cm|mm|in|pt|pc|px)$/,
                L = /(em|cm|mm|in|pt|pc|px|%)$/,
                B = /(deg|rad|turn)$/,
                W = "unitless",
                K = /(all|none) 0s ease 0s/,
                Q = /^(width|height)$/,
                k = " ",
                x = I.createElement("a"),
                g = ["Webkit", "Moz", "O", "ms"],
                C = ["-webkit-", "-moz-", "-o-", "-ms-"],
                M = function(c) {
                    if (c in x.style) return {
                        dom: c,
                        css: c
                    };
                    var y, b, S = "",
                        T = c.split("-");
                    for (y = 0; y < T.length; y++) S += T[y].charAt(0).toUpperCase() + T[y].slice(1);
                    for (y = 0; y < g.length; y++)
                        if (b = g[y] + S, b in x.style) return {
                            dom: b,
                            css: C[y] + c
                        }
                },
                q = t.support = {
                    bind: Function.prototype.bind,
                    transform: M("transform"),
                    transition: M("transition"),
                    backface: M("backface-visibility"),
                    timing: M("transition-timing-function")
                };
            if (q.transition) {
                var Z = q.timing.dom;
                if (x.style[Z] = p["ease-in-back"][0], !x.style[Z])
                    for (var J in h) p[J][0] = h[J]
            }
            var D = t.frame = function() {
                    var c = _.requestAnimationFrame || _.webkitRequestAnimationFrame || _.mozRequestAnimationFrame || _.oRequestAnimationFrame || _.msRequestAnimationFrame;
                    return c && q.bind ? c.bind(_) : function(y) {
                        _.setTimeout(y, 16)
                    }
                }(),
                G = t.now = function() {
                    var c = _.performance,
                        y = c && (c.now || c.webkitNow || c.msNow || c.mozNow);
                    return y && q.bind ? y.bind(c) : Date.now || function() {
                        return +new Date
                    }
                }(),
                j = d(function(c) {
                    function y(ee, se) {
                        var ve = v(("" + ee).split(k)),
                            le = ve[0];
                        se = se || {};
                        var Se = H[le];
                        if (!Se) return l("Unsupported property: " + le);
                        if (!se.weak || !this.props[le]) {
                            var ke = Se[0],
                                Re = this.props[le];
                            return Re || (Re = this.props[le] = new ke.Bare), Re.init(this.$el, ve, Se, se), Re
                        }
                    }

                    function b(ee, se, ve) {
                        if (ee) {
                            var le = typeof ee;
                            if (se || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), le == "number" && se) return this.timer = new de({
                                duration: ee,
                                context: this,
                                complete: O
                            }), void(this.active = !0);
                            if (le == "string" && se) {
                                switch (ee) {
                                    case "hide":
                                        U.call(this);
                                        break;
                                    case "stop":
                                        $.call(this);
                                        break;
                                    case "redraw":
                                        oe.call(this);
                                        break;
                                    default:
                                        y.call(this, ee, ve && ve[1])
                                }
                                return O.call(this)
                            }
                            if (le == "function") return void ee.call(this, this);
                            if (le == "object") {
                                var Se = 0;
                                We.call(this, ee, function(_e, FE) {
                                    _e.span > Se && (Se = _e.span), _e.stop(), _e.animate(FE)
                                }, function(_e) {
                                    "wait" in _e && (Se = u(_e.wait, 0))
                                }), me.call(this), Se > 0 && (this.timer = new de({
                                    duration: Se,
                                    context: this
                                }), this.active = !0, se && (this.timer.complete = O));
                                var ke = this,
                                    Re = !1,
                                    xr = {};
                                D(function() {
                                    We.call(ke, ee, function(_e) {
                                        _e.active && (Re = !0, xr[_e.name] = _e.nextStyle)
                                    }), Re && ke.$el.css(xr)
                                })
                            }
                        }
                    }

                    function S(ee) {
                        ee = u(ee, 0), this.active ? this.queue.push({
                            options: ee
                        }) : (this.timer = new de({
                            duration: ee,
                            context: this,
                            complete: O
                        }), this.active = !0)
                    }

                    function T(ee) {
                        return this.active ? (this.queue.push({
                            options: ee,
                            args: arguments
                        }), void(this.timer.complete = O)) : l("No active transition timer. Use start() or wait() before then().")
                    }

                    function O() {
                        if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                            var ee = this.queue.shift();
                            b.call(this, ee.options, !0, ee.args)
                        }
                    }

                    function $(ee) {
                        this.timer && this.timer.destroy(), this.queue = [], this.active = !1;
                        var se;
                        typeof ee == "string" ? (se = {}, se[ee] = 1) : se = typeof ee == "object" && ee != null ? ee : this.props, We.call(this, se, we), me.call(this)
                    }

                    function ne(ee) {
                        $.call(this, ee), We.call(this, ee, Jt, DE)
                    }

                    function pe(ee) {
                        typeof ee != "string" && (ee = "block"), this.el.style.display = ee
                    }

                    function U() {
                        $.call(this), this.el.style.display = "none"
                    }

                    function oe() {
                        this.el.offsetHeight
                    }

                    function ae() {
                        $.call(this), e.removeData(this.el, A), this.$el = this.el = null
                    }

                    function me() {
                        var ee, se, ve = [];
                        this.upstream && ve.push(this.upstream);
                        for (ee in this.props) se = this.props[ee], se.active && ve.push(se.string);
                        ve = ve.join(","), this.style !== ve && (this.style = ve, this.el.style[q.transition.dom] = ve)
                    }

                    function We(ee, se, ve) {
                        var le, Se, ke, Re, xr = se !== we,
                            _e = {};
                        for (le in ee) ke = ee[le], le in ge ? (_e.transform || (_e.transform = {}), _e.transform[le] = ke) : (R.test(le) && (le = r(le)), le in H ? _e[le] = ke : (Re || (Re = {}), Re[le] = ke));
                        for (le in _e) {
                            if (ke = _e[le], Se = this.props[le], !Se) {
                                if (!xr) continue;
                                Se = y.call(this, le)
                            }
                            se.call(this, Se, ke)
                        }
                        ve && Re && ve.call(this, Re)
                    }

                    function we(ee) {
                        ee.stop()
                    }

                    function Jt(ee, se) {
                        ee.set(se)
                    }

                    function DE(ee) {
                        this.$el.css(ee)
                    }

                    function qe(ee, se) {
                        c[ee] = function() {
                            return this.children ? ME.call(this, se, arguments) : (this.el && se.apply(this, arguments), this)
                        }
                    }

                    function ME(ee, se) {
                        var ve, le = this.children.length;
                        for (ve = 0; le > ve; ve++) ee.apply(this.children[ve], se);
                        return this
                    }
                    c.init = function(ee) {
                        if (this.$el = e(ee), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, ce.keepInherited && !ce.fallback) {
                            var se = V(this.el, "transition");
                            se && !K.test(se) && (this.upstream = se)
                        }
                        q.backface && ce.hideBackface && E(this.el, q.backface.css, "hidden")
                    }, qe("add", y), qe("start", b), qe("wait", S), qe("then", T), qe("next", O), qe("stop", $), qe("set", ne), qe("show", pe), qe("hide", U), qe("redraw", oe), qe("destroy", ae)
                }),
                X = d(j, function(c) {
                    function y(b, S) {
                        var T = e.data(b, A) || e.data(b, A, new j.Bare);
                        return T.el || T.init(b), S ? T.start(S) : T
                    }
                    c.init = function(b, S) {
                        var T = e(b);
                        if (!T.length) return this;
                        if (T.length === 1) return y(T[0], S);
                        var O = [];
                        return T.each(function($, ne) {
                            O.push(y(ne, S))
                        }), this.children = O, this
                    }
                }),
                F = d(function(c) {
                    function y() {
                        var O = this.get();
                        this.update("auto");
                        var $ = this.get();
                        return this.update(O), $
                    }

                    function b(O, $, ne) {
                        return $ !== void 0 && (ne = $), O in p ? O : ne
                    }

                    function S(O) {
                        var $ = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(O);
                        return ($ ? i($[1], $[2], $[3]) : O).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                    }
                    var T = {
                        duration: 500,
                        ease: "ease",
                        delay: 0
                    };
                    c.init = function(O, $, ne, pe) {
                        this.$el = O, this.el = O[0];
                        var U = $[0];
                        ne[2] && (U = ne[2]), Y[U] && (U = Y[U]), this.name = U, this.type = ne[1], this.duration = u($[1], this.duration, T.duration), this.ease = b($[2], this.ease, T.ease), this.delay = u($[3], this.delay, T.delay), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = Q.test(this.name), this.unit = pe.unit || this.unit || ce.defaultUnit, this.angle = pe.angle || this.angle || ce.defaultAngle, ce.fallback || pe.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + k + this.duration + "ms" + (this.ease != "ease" ? k + p[this.ease][0] : "") + (this.delay ? k + this.delay + "ms" : ""))
                    }, c.set = function(O) {
                        O = this.convert(O, this.type), this.update(O), this.redraw()
                    }, c.transition = function(O) {
                        this.active = !0, O = this.convert(O, this.type), this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()), this.redraw()), O == "auto" && (O = y.call(this))), this.nextStyle = O
                    }, c.fallback = function(O) {
                        var $ = this.el.style[this.name] || this.convert(this.get(), this.type);
                        O = this.convert(O, this.type), this.auto && ($ == "auto" && ($ = this.convert(this.get(), this.type)), O == "auto" && (O = y.call(this))), this.tween = new te({
                            from: $,
                            to: O,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease,
                            update: this.update,
                            context: this
                        })
                    }, c.get = function() {
                        return V(this.el, this.name)
                    }, c.update = function(O) {
                        E(this.el, this.name, O)
                    }, c.stop = function() {
                        (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, E(this.el, this.name, this.get()));
                        var O = this.tween;
                        O && O.context && O.destroy()
                    }, c.convert = function(O, $) {
                        if (O == "auto" && this.auto) return O;
                        var ne, pe = typeof O == "number",
                            U = typeof O == "string";
                        switch ($) {
                            case w:
                                if (pe) return O;
                                if (U && O.replace(m, "") === "") return +O;
                                ne = "number(unitless)";
                                break;
                            case P:
                                if (U) {
                                    if (O === "" && this.original) return this.original;
                                    if ($.test(O)) return O.charAt(0) == "#" && O.length == 7 ? O : S(O)
                                }
                                ne = "hex or rgb string";
                                break;
                            case N:
                                if (pe) return O + this.unit;
                                if (U && $.test(O)) return O;
                                ne = "number(px) or string(unit)";
                                break;
                            case L:
                                if (pe) return O + this.unit;
                                if (U && $.test(O)) return O;
                                ne = "number(px) or string(unit or %)";
                                break;
                            case B:
                                if (pe) return O + this.angle;
                                if (U && $.test(O)) return O;
                                ne = "number(deg) or string(angle)";
                                break;
                            case W:
                                if (pe || U && L.test(O)) return O;
                                ne = "number(unitless) or string(unit or %)"
                        }
                        return a(ne, O), O
                    }, c.redraw = function() {
                        this.el.offsetHeight
                    }
                }),
                z = d(F, function(c, y) {
                    c.init = function() {
                        y.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), P))
                    }
                }),
                ie = d(F, function(c, y) {
                    c.init = function() {
                        y.init.apply(this, arguments), this.animate = this.fallback
                    }, c.get = function() {
                        return this.$el[this.name]()
                    }, c.update = function(b) {
                        this.$el[this.name](b)
                    }
                }),
                re = d(F, function(c, y) {
                    function b(S, T) {
                        var O, $, ne, pe, U;
                        for (O in S) pe = ge[O], ne = pe[0], $ = pe[1] || O, U = this.convert(S[O], ne), T.call(this, $, U, ne)
                    }
                    c.init = function() {
                        y.init.apply(this, arguments), this.current || (this.current = {}, ge.perspective && ce.perspective && (this.current.perspective = ce.perspective, E(this.el, this.name, this.style(this.current)), this.redraw()))
                    }, c.set = function(S) {
                        b.call(this, S, function(T, O) {
                            this.current[T] = O
                        }), E(this.el, this.name, this.style(this.current)), this.redraw()
                    }, c.transition = function(S) {
                        var T = this.values(S);
                        this.tween = new et({
                            current: this.current,
                            values: T,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease
                        });
                        var O, $ = {};
                        for (O in this.current) $[O] = O in T ? T[O] : this.current[O];
                        this.active = !0, this.nextStyle = this.style($)
                    }, c.fallback = function(S) {
                        var T = this.values(S);
                        this.tween = new et({
                            current: this.current,
                            values: T,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease,
                            update: this.update,
                            context: this
                        })
                    }, c.update = function() {
                        E(this.el, this.name, this.style(this.current))
                    }, c.style = function(S) {
                        var T, O = "";
                        for (T in S) O += T + "(" + S[T] + ") ";
                        return O
                    }, c.values = function(S) {
                        var T, O = {};
                        return b.call(this, S, function($, ne, pe) {
                            O[$] = ne, this.current[$] === void 0 && (T = 0, ~$.indexOf("scale") && (T = 1), this.current[$] = this.convert(T, pe))
                        }), O
                    }
                }),
                te = d(function(c) {
                    function y(U) {
                        ne.push(U) === 1 && D(b)
                    }

                    function b() {
                        var U, oe, ae, me = ne.length;
                        if (me)
                            for (D(b), oe = G(), U = me; U--;) ae = ne[U], ae && ae.render(oe)
                    }

                    function S(U) {
                        var oe, ae = e.inArray(U, ne);
                        ae >= 0 && (oe = ne.slice(ae + 1), ne.length = ae, oe.length && (ne = ne.concat(oe)))
                    }

                    function T(U) {
                        return Math.round(U * pe) / pe
                    }

                    function O(U, oe, ae) {
                        return i(U[0] + ae * (oe[0] - U[0]), U[1] + ae * (oe[1] - U[1]), U[2] + ae * (oe[2] - U[2]))
                    }
                    var $ = {
                        ease: p.ease[1],
                        from: 0,
                        to: 1
                    };
                    c.init = function(U) {
                        this.duration = U.duration || 0, this.delay = U.delay || 0;
                        var oe = U.ease || $.ease;
                        p[oe] && (oe = p[oe][1]), typeof oe != "function" && (oe = $.ease), this.ease = oe, this.update = U.update || o, this.complete = U.complete || o, this.context = U.context || this, this.name = U.name;
                        var ae = U.from,
                            me = U.to;
                        ae === void 0 && (ae = $.from), me === void 0 && (me = $.to), this.unit = U.unit || "", typeof ae == "number" && typeof me == "number" ? (this.begin = ae, this.change = me - ae) : this.format(me, ae), this.value = this.begin + this.unit, this.start = G(), U.autoplay !== !1 && this.play()
                    }, c.play = function() {
                        this.active || (this.start || (this.start = G()), this.active = !0, y(this))
                    }, c.stop = function() {
                        this.active && (this.active = !1, S(this))
                    }, c.render = function(U) {
                        var oe, ae = U - this.start;
                        if (this.delay) {
                            if (ae <= this.delay) return;
                            ae -= this.delay
                        }
                        if (ae < this.duration) {
                            var me = this.ease(ae, 0, 1, this.duration);
                            return oe = this.startRGB ? O(this.startRGB, this.endRGB, me) : T(this.begin + me * this.change), this.value = oe + this.unit, void this.update.call(this.context, this.value)
                        }
                        oe = this.endHex || this.begin + this.change, this.value = oe + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
                    }, c.format = function(U, oe) {
                        if (oe += "", U += "", U.charAt(0) == "#") return this.startRGB = n(oe), this.endRGB = n(U), this.endHex = U, this.begin = 0, void(this.change = 1);
                        if (!this.unit) {
                            var ae = oe.replace(m, ""),
                                me = U.replace(m, "");
                            ae !== me && s("tween", oe, U), this.unit = ae
                        }
                        oe = parseFloat(oe), U = parseFloat(U), this.begin = this.value = oe, this.change = U - oe
                    }, c.destroy = function() {
                        this.stop(), this.context = null, this.ease = this.update = this.complete = o
                    };
                    var ne = [],
                        pe = 1e3
                }),
                de = d(te, function(c) {
                    c.init = function(y) {
                        this.duration = y.duration || 0, this.complete = y.complete || o, this.context = y.context, this.play()
                    }, c.render = function(y) {
                        var b = y - this.start;
                        b < this.duration || (this.complete.call(this.context), this.destroy())
                    }
                }),
                et = d(te, function(c, y) {
                    c.init = function(b) {
                        this.context = b.context, this.update = b.update, this.tweens = [], this.current = b.current;
                        var S, T;
                        for (S in b.values) T = b.values[S], this.current[S] !== T && this.tweens.push(new te({
                            name: S,
                            from: this.current[S],
                            to: T,
                            duration: b.duration,
                            delay: b.delay,
                            ease: b.ease,
                            autoplay: !1
                        }));
                        this.play()
                    }, c.render = function(b) {
                        var S, T, O = this.tweens.length,
                            $ = !1;
                        for (S = O; S--;) T = this.tweens[S], T.context && (T.render(b), this.current[T.name] = T.value, $ = !0);
                        return $ ? void(this.update && this.update.call(this.context)) : this.destroy()
                    }, c.destroy = function() {
                        if (y.destroy.call(this), this.tweens) {
                            var b, S = this.tweens.length;
                            for (b = S; b--;) this.tweens[b].destroy();
                            this.tweens = null, this.current = null
                        }
                    }
                }),
                ce = t.config = {
                    debug: !1,
                    defaultUnit: "px",
                    defaultAngle: "deg",
                    keepInherited: !1,
                    hideBackface: !1,
                    perspective: "",
                    fallback: !q.transition,
                    agentTests: []
                };
            t.fallback = function(c) {
                if (!q.transition) return ce.fallback = !0;
                ce.agentTests.push("(" + c + ")");
                var y = new RegExp(ce.agentTests.join("|"), "i");
                ce.fallback = y.test(navigator.userAgent)
            }, t.fallback("6.0.[2-5] Safari"), t.tween = function(c) {
                return new te(c)
            }, t.delay = function(c, y, b) {
                return new de({
                    complete: y,
                    duration: c,
                    context: b
                })
            }, e.fn.tram = function(c) {
                return t.call(null, this, c)
            };
            var E = e.style,
                V = e.css,
                Y = {
                    transform: q.transform && q.transform.css
                },
                H = {
                    color: [z, P],
                    background: [z, P, "background-color"],
                    "outline-color": [z, P],
                    "border-color": [z, P],
                    "border-top-color": [z, P],
                    "border-right-color": [z, P],
                    "border-bottom-color": [z, P],
                    "border-left-color": [z, P],
                    "border-width": [F, N],
                    "border-top-width": [F, N],
                    "border-right-width": [F, N],
                    "border-bottom-width": [F, N],
                    "border-left-width": [F, N],
                    "border-spacing": [F, N],
                    "letter-spacing": [F, N],
                    margin: [F, N],
                    "margin-top": [F, N],
                    "margin-right": [F, N],
                    "margin-bottom": [F, N],
                    "margin-left": [F, N],
                    padding: [F, N],
                    "padding-top": [F, N],
                    "padding-right": [F, N],
                    "padding-bottom": [F, N],
                    "padding-left": [F, N],
                    "outline-width": [F, N],
                    opacity: [F, w],
                    top: [F, L],
                    right: [F, L],
                    bottom: [F, L],
                    left: [F, L],
                    "font-size": [F, L],
                    "text-indent": [F, L],
                    "word-spacing": [F, L],
                    width: [F, L],
                    "min-width": [F, L],
                    "max-width": [F, L],
                    height: [F, L],
                    "min-height": [F, L],
                    "max-height": [F, L],
                    "line-height": [F, W],
                    "scroll-top": [ie, w, "scrollTop"],
                    "scroll-left": [ie, w, "scrollLeft"]
                },
                ge = {};
            q.transform && (H.transform = [re], ge = {
                x: [L, "translateX"],
                y: [L, "translateY"],
                rotate: [B],
                rotateX: [B],
                rotateY: [B],
                scale: [w],
                scaleX: [w],
                scaleY: [w],
                skew: [B],
                skewX: [B],
                skewY: [B]
            }), q.transform && q.backface && (ge.z = [L, "translateZ"], ge.rotateZ = [B], ge.scaleZ = [w], ge.perspective = [N]);
            var ht = /ms/,
                tt = /s|\./;
            return e.tram = t
        }(window.jQuery)
    });
    var ca = f((lF, ua) => {
        "use strict";
        var UE = window.$,
            BE = Hn() && UE.tram;
        ua.exports = function() {
            var e = {};
            e.VERSION = "1.6.0-Webflow";
            var t = {},
                r = Array.prototype,
                n = Object.prototype,
                i = Function.prototype,
                o = r.push,
                a = r.slice,
                s = r.concat,
                u = n.toString,
                l = n.hasOwnProperty,
                v = r.forEach,
                d = r.map,
                p = r.reduce,
                h = r.reduceRight,
                I = r.filter,
                _ = r.every,
                A = r.some,
                m = r.indexOf,
                R = r.lastIndexOf,
                w = Array.isArray,
                P = Object.keys,
                N = i.bind,
                L = e.each = e.forEach = function(g, C, M) {
                    if (g == null) return g;
                    if (v && g.forEach === v) g.forEach(C, M);
                    else if (g.length === +g.length) {
                        for (var q = 0, Z = g.length; q < Z; q++)
                            if (C.call(M, g[q], q, g) === t) return
                    } else
                        for (var J = e.keys(g), q = 0, Z = J.length; q < Z; q++)
                            if (C.call(M, g[J[q]], J[q], g) === t) return;
                    return g
                };
            e.map = e.collect = function(g, C, M) {
                var q = [];
                return g == null ? q : d && g.map === d ? g.map(C, M) : (L(g, function(Z, J, D) {
                    q.push(C.call(M, Z, J, D))
                }), q)
            }, e.find = e.detect = function(g, C, M) {
                var q;
                return B(g, function(Z, J, D) {
                    if (C.call(M, Z, J, D)) return q = Z, !0
                }), q
            }, e.filter = e.select = function(g, C, M) {
                var q = [];
                return g == null ? q : I && g.filter === I ? g.filter(C, M) : (L(g, function(Z, J, D) {
                    C.call(M, Z, J, D) && q.push(Z)
                }), q)
            };
            var B = e.some = e.any = function(g, C, M) {
                C || (C = e.identity);
                var q = !1;
                return g == null ? q : A && g.some === A ? g.some(C, M) : (L(g, function(Z, J, D) {
                    if (q || (q = C.call(M, Z, J, D))) return t
                }), !!q)
            };
            e.contains = e.include = function(g, C) {
                return g == null ? !1 : m && g.indexOf === m ? g.indexOf(C) != -1 : B(g, function(M) {
                    return M === C
                })
            }, e.delay = function(g, C) {
                var M = a.call(arguments, 2);
                return setTimeout(function() {
                    return g.apply(null, M)
                }, C)
            }, e.defer = function(g) {
                return e.delay.apply(e, [g, 1].concat(a.call(arguments, 1)))
            }, e.throttle = function(g) {
                var C, M, q;
                return function() {
                    C || (C = !0, M = arguments, q = this, BE.frame(function() {
                        C = !1, g.apply(q, M)
                    }))
                }
            }, e.debounce = function(g, C, M) {
                var q, Z, J, D, G, j = function() {
                    var X = e.now() - D;
                    X < C ? q = setTimeout(j, C - X) : (q = null, M || (G = g.apply(J, Z), J = Z = null))
                };
                return function() {
                    J = this, Z = arguments, D = e.now();
                    var X = M && !q;
                    return q || (q = setTimeout(j, C)), X && (G = g.apply(J, Z), J = Z = null), G
                }
            }, e.defaults = function(g) {
                if (!e.isObject(g)) return g;
                for (var C = 1, M = arguments.length; C < M; C++) {
                    var q = arguments[C];
                    for (var Z in q) g[Z] === void 0 && (g[Z] = q[Z])
                }
                return g
            }, e.keys = function(g) {
                if (!e.isObject(g)) return [];
                if (P) return P(g);
                var C = [];
                for (var M in g) e.has(g, M) && C.push(M);
                return C
            }, e.has = function(g, C) {
                return l.call(g, C)
            }, e.isObject = function(g) {
                return g === Object(g)
            }, e.now = Date.now || function() {
                return new Date().getTime()
            }, e.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var W = /(.)^/,
                K = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                Q = /\\|'|\r|\n|\u2028|\u2029/g,
                k = function(g) {
                    return "\\" + K[g]
                },
                x = /^\s*(\w|\$)+\s*$/;
            return e.template = function(g, C, M) {
                !C && M && (C = M), C = e.defaults({}, C, e.templateSettings);
                var q = RegExp([(C.escape || W).source, (C.interpolate || W).source, (C.evaluate || W).source].join("|") + "|$", "g"),
                    Z = 0,
                    J = "__p+='";
                g.replace(q, function(X, F, z, ie, re) {
                    return J += g.slice(Z, re).replace(Q, k), Z = re + X.length, F ? J += `'+
((__t=(` + F + `))==null?'':_.escape(__t))+
'` : z ? J += `'+
((__t=(` + z + `))==null?'':__t)+
'` : ie && (J += `';
` + ie + `
__p+='`), X
                }), J += `';
`;
                var D = C.variable;
                if (D) {
                    if (!x.test(D)) throw new Error("variable is not a bare identifier: " + D)
                } else J = `with(obj||{}){
` + J + `}
`, D = "obj";
                J = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + J + `return __p;
`;
                var G;
                try {
                    G = new Function(C.variable || "obj", "_", J)
                } catch (X) {
                    throw X.source = J, X
                }
                var j = function(X) {
                    return G.call(this, X, e)
                };
                return j.source = "function(" + D + `){
` + J + "}", j
            }, e
        }()
    });
    var Me = f((fF, va) => {
        "use strict";
        var fe = {},
            At = {},
            wt = [],
            zn = window.Webflow || [],
            st = window.jQuery,
            Ge = st(window),
            HE = st(document),
            Ke = st.isFunction,
            Xe = fe._ = ca(),
            fa = fe.tram = Hn() && st.tram,
            Lr = !1,
            Kn = !1;
        fa.config.hideBackface = !1;
        fa.config.keepInherited = !0;
        fe.define = function(e, t, r) {
            At[e] && pa(At[e]);
            var n = At[e] = t(st, Xe, r) || {};
            return da(n), n
        };
        fe.require = function(e) {
            return At[e]
        };

        function da(e) {
            fe.env() && (Ke(e.design) && Ge.on("__wf_design", e.design), Ke(e.preview) && Ge.on("__wf_preview", e.preview)), Ke(e.destroy) && Ge.on("__wf_destroy", e.destroy), e.ready && Ke(e.ready) && WE(e)
        }

        function WE(e) {
            if (Lr) {
                e.ready();
                return
            }
            Xe.contains(wt, e.ready) || wt.push(e.ready)
        }

        function pa(e) {
            Ke(e.design) && Ge.off("__wf_design", e.design), Ke(e.preview) && Ge.off("__wf_preview", e.preview), Ke(e.destroy) && Ge.off("__wf_destroy", e.destroy), e.ready && Ke(e.ready) && zE(e)
        }

        function zE(e) {
            wt = Xe.filter(wt, function(t) {
                return t !== e.ready
            })
        }
        fe.push = function(e) {
            if (Lr) {
                Ke(e) && e();
                return
            }
            zn.push(e)
        };
        fe.env = function(e) {
            var t = window.__wf_design,
                r = typeof t < "u";
            if (!e) return r;
            if (e === "design") return r && t;
            if (e === "preview") return r && !t;
            if (e === "slug") return r && window.__wf_slug;
            if (e === "editor") return window.WebflowEditor;
            if (e === "test") return window.__wf_test;
            if (e === "frame") return window !== window.top
        };
        var Cr = navigator.userAgent.toLowerCase(),
            ga = fe.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
            KE = fe.env.chrome = /chrome/.test(Cr) && /Google/.test(navigator.vendor) && parseInt(Cr.match(/chrome\/(\d+)\./)[1], 10),
            jE = fe.env.ios = /(ipod|iphone|ipad)/.test(Cr);
        fe.env.safari = /safari/.test(Cr) && !KE && !jE;
        var Wn;
        ga && HE.on("touchstart mousedown", function(e) {
            Wn = e.target
        });
        fe.validClick = ga ? function(e) {
            return e === Wn || st.contains(e, Wn)
        } : function() {
            return !0
        };
        var ha = "resize.webflow orientationchange.webflow load.webflow",
            YE = "scroll.webflow " + ha;
        fe.resize = jn(Ge, ha);
        fe.scroll = jn(Ge, YE);
        fe.redraw = jn();

        function jn(e, t) {
            var r = [],
                n = {};
            return n.up = Xe.throttle(function(i) {
                Xe.each(r, function(o) {
                    o(i)
                })
            }), e && t && e.on(t, n.up), n.on = function(i) {
                typeof i == "function" && (Xe.contains(r, i) || r.push(i))
            }, n.off = function(i) {
                if (!arguments.length) {
                    r = [];
                    return
                }
                r = Xe.filter(r, function(o) {
                    return o !== i
                })
            }, n
        }
        fe.location = function(e) {
            window.location = e
        };
        fe.env() && (fe.location = function() {});
        fe.ready = function() {
            Lr = !0, Kn ? $E() : Xe.each(wt, la), Xe.each(zn, la), fe.resize.up()
        };

        function la(e) {
            Ke(e) && e()
        }

        function $E() {
            Kn = !1, Xe.each(At, da)
        }
        var Et;
        fe.load = function(e) {
            Et.then(e)
        };

        function Ea() {
            Et && (Et.reject(), Ge.off("load", Et.resolve)), Et = new st.Deferred, Ge.on("load", Et.resolve)
        }
        fe.destroy = function(e) {
            e = e || {}, Kn = !0, Ge.triggerHandler("__wf_destroy"), e.domready != null && (Lr = e.domready), Xe.each(At, pa), fe.resize.off(), fe.scroll.off(), fe.redraw.off(), wt = [], zn = [], Et.state() === "pending" && Ea()
        };
        st(fe.ready);
        Ea();
        va.exports = window.Webflow = fe
    });
    var _a = f((dF, ma) => {
        "use strict";
        var ya = Me();
        ya.define("brand", ma.exports = function(e) {
            var t = {},
                r = document,
                n = e("html"),
                i = e("body"),
                o = ".w-webflow-badge",
                a = window.location,
                s = /PhantomJS/i.test(navigator.userAgent),
                u = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
                l;
            t.ready = function() {
                var h = n.attr("data-wf-status"),
                    I = n.attr("data-wf-domain") || "";
                /\.webflow\.io$/i.test(I) && a.hostname !== I && (h = !0), h && !s && (l = l || d(), p(), setTimeout(p, 500), e(r).off(u, v).on(u, v))
            };

            function v() {
                var h = r.fullScreen || r.mozFullScreen || r.webkitIsFullScreen || r.msFullscreenElement || !!r.webkitFullscreenElement;
                e(l).attr("style", h ? "display: none !important;" : "")
            }

            function d() {
                var h = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"),
                    I = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
                        marginRight: "4px",
                        width: "26px"
                    }),
                    _ = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow");
                return h.append(I, _), h[0]
            }

            function p() {
                var h = i.children(o),
                    I = h.length && h.get(0) === l,
                    _ = ya.env("editor");
                if (I) {
                    _ && h.remove();
                    return
                }
                h.length && h.remove(), _ || i.append(l)
            }
            return t
        })
    });
    var Ta = f((pF, Ia) => {
        "use strict";
        var Yn = Me();
        Yn.define("edit", Ia.exports = function(e, t, r) {
            if (r = r || {}, (Yn.env("test") || Yn.env("frame")) && !r.fixture && !QE()) return {
                exit: 1
            };
            var n = {},
                i = e(window),
                o = e(document.documentElement),
                a = document.location,
                s = "hashchange",
                u, l = r.load || p,
                v = !1;
            try {
                v = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
            } catch {}
            v ? l() : a.search ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) || /\?edit$/.test(a.href)) && l() : i.on(s, d).triggerHandler(s);

            function d() {
                u || /\?edit/.test(a.hash) && l()
            }

            function p() {
                u = !0, window.WebflowEditor = !0, i.off(s, d), R(function(P) {
                    e.ajax({
                        url: m("https://editor-api.webflow.com/api/editor/view"),
                        data: {
                            siteId: o.attr("data-wf-site")
                        },
                        xhrFields: {
                            withCredentials: !0
                        },
                        dataType: "json",
                        crossDomain: !0,
                        success: h(P)
                    })
                })
            }

            function h(P) {
                return function(N) {
                    if (!N) {
                        console.error("Could not load editor data");
                        return
                    }
                    N.thirdPartyCookiesSupported = P, I(A(N.scriptPath), function() {
                        window.WebflowEditor(N)
                    })
                }
            }

            function I(P, N) {
                e.ajax({
                    type: "GET",
                    url: P,
                    dataType: "script",
                    cache: !0
                }).then(N, _)
            }

            function _(P, N, L) {
                throw console.error("Could not load editor script: " + N), L
            }

            function A(P) {
                return P.indexOf("//") >= 0 ? P : m("https://editor-api.webflow.com" + P)
            }

            function m(P) {
                return P.replace(/([^:])\/\//g, "$1/")
            }

            function R(P) {
                var N = window.document.createElement("iframe");
                N.src = "https://webflow.com/site/third-party-cookie-check.html", N.style.display = "none", N.sandbox = "allow-scripts allow-same-origin";
                var L = function(B) {
                    B.data === "WF_third_party_cookies_unsupported" ? (w(N, L), P(!1)) : B.data === "WF_third_party_cookies_supported" && (w(N, L), P(!0))
                };
                N.onerror = function() {
                    w(N, L), P(!1)
                }, window.addEventListener("message", L, !1), window.document.body.appendChild(N)
            }

            function w(P, N) {
                window.removeEventListener("message", N, !1), P.remove()
            }
            return n
        });

        function QE() {
            try {
                return window.top.__Cypress__
            } catch {
                return !1
            }
        }
    });
    var Aa = f((gF, ba) => {
        "use strict";
        var ZE = Me();
        ZE.define("focus-visible", ba.exports = function() {
            function e(r) {
                var n = !0,
                    i = !1,
                    o = null,
                    a = {
                        text: !0,
                        search: !0,
                        url: !0,
                        tel: !0,
                        email: !0,
                        password: !0,
                        number: !0,
                        date: !0,
                        month: !0,
                        week: !0,
                        time: !0,
                        datetime: !0,
                        "datetime-local": !0
                    };

                function s(w) {
                    return !!(w && w !== document && w.nodeName !== "HTML" && w.nodeName !== "BODY" && "classList" in w && "contains" in w.classList)
                }

                function u(w) {
                    var P = w.type,
                        N = w.tagName;
                    return !!(N === "INPUT" && a[P] && !w.readOnly || N === "TEXTAREA" && !w.readOnly || w.isContentEditable)
                }

                function l(w) {
                    w.getAttribute("data-wf-focus-visible") || w.setAttribute("data-wf-focus-visible", "true")
                }

                function v(w) {
                    w.getAttribute("data-wf-focus-visible") && w.removeAttribute("data-wf-focus-visible")
                }

                function d(w) {
                    w.metaKey || w.altKey || w.ctrlKey || (s(r.activeElement) && l(r.activeElement), n = !0)
                }

                function p() {
                    n = !1
                }

                function h(w) {
                    s(w.target) && (n || u(w.target)) && l(w.target)
                }

                function I(w) {
                    s(w.target) && w.target.hasAttribute("data-wf-focus-visible") && (i = !0, window.clearTimeout(o), o = window.setTimeout(function() {
                        i = !1
                    }, 100), v(w.target))
                }

                function _() {
                    document.visibilityState === "hidden" && (i && (n = !0), A())
                }

                function A() {
                    document.addEventListener("mousemove", R), document.addEventListener("mousedown", R), document.addEventListener("mouseup", R), document.addEventListener("pointermove", R), document.addEventListener("pointerdown", R), document.addEventListener("pointerup", R), document.addEventListener("touchmove", R), document.addEventListener("touchstart", R), document.addEventListener("touchend", R)
                }

                function m() {
                    document.removeEventListener("mousemove", R), document.removeEventListener("mousedown", R), document.removeEventListener("mouseup", R), document.removeEventListener("pointermove", R), document.removeEventListener("pointerdown", R), document.removeEventListener("pointerup", R), document.removeEventListener("touchmove", R), document.removeEventListener("touchstart", R), document.removeEventListener("touchend", R)
                }

                function R(w) {
                    w.target.nodeName && w.target.nodeName.toLowerCase() === "html" || (n = !1, m())
                }
                document.addEventListener("keydown", d, !0), document.addEventListener("mousedown", p, !0), document.addEventListener("pointerdown", p, !0), document.addEventListener("touchstart", p, !0), document.addEventListener("visibilitychange", _, !0), A(), r.addEventListener("focus", h, !0), r.addEventListener("blur", I, !0)
            }

            function t() {
                if (typeof document < "u") try {
                    document.querySelector(":focus-visible")
                } catch {
                    e(document)
                }
            }
            return {
                ready: t
            }
        })
    });
    var Oa = f((hF, Sa) => {
        "use strict";
        var wa = Me();
        wa.define("focus", Sa.exports = function() {
            var e = [],
                t = !1;

            function r(a) {
                t && (a.preventDefault(), a.stopPropagation(), a.stopImmediatePropagation(), e.unshift(a))
            }

            function n(a) {
                var s = a.target,
                    u = s.tagName;
                return /^a$/i.test(u) && s.href != null || /^(button|textarea)$/i.test(u) && s.disabled !== !0 || /^input$/i.test(u) && /^(button|reset|submit|radio|checkbox)$/i.test(s.type) && !s.disabled || !/^(button|input|textarea|select|a)$/i.test(u) && !Number.isNaN(Number.parseFloat(s.tabIndex)) || /^audio$/i.test(u) || /^video$/i.test(u) && s.controls === !0
            }

            function i(a) {
                n(a) && (t = !0, setTimeout(() => {
                    for (t = !1, a.target.focus(); e.length > 0;) {
                        var s = e.pop();
                        s.target.dispatchEvent(new MouseEvent(s.type, s))
                    }
                }, 0))
            }

            function o() {
                typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && wa.env.safari && (document.addEventListener("mousedown", i, !0), document.addEventListener("mouseup", r, !0), document.addEventListener("click", r, !0))
            }
            return {
                ready: o
            }
        })
    });
    var Ca = f((EF, Ra) => {
        "use strict";
        var $n = window.jQuery,
            je = {},
            Pr = [],
            xa = ".w-ix",
            Nr = {
                reset: function(e, t) {
                    t.__wf_intro = null
                },
                intro: function(e, t) {
                    t.__wf_intro || (t.__wf_intro = !0, $n(t).triggerHandler(je.types.INTRO))
                },
                outro: function(e, t) {
                    t.__wf_intro && (t.__wf_intro = null, $n(t).triggerHandler(je.types.OUTRO))
                }
            };
        je.triggers = {};
        je.types = {
            INTRO: "w-ix-intro" + xa,
            OUTRO: "w-ix-outro" + xa
        };
        je.init = function() {
            for (var e = Pr.length, t = 0; t < e; t++) {
                var r = Pr[t];
                r[0](0, r[1])
            }
            Pr = [], $n.extend(je.triggers, Nr)
        };
        je.async = function() {
            for (var e in Nr) {
                var t = Nr[e];
                Nr.hasOwnProperty(e) && (je.triggers[e] = function(r, n) {
                    Pr.push([t, n])
                })
            }
        };
        je.async();
        Ra.exports = je
    });
    var Mr = f((vF, Na) => {
        "use strict";
        var Qn = Ca();

        function La(e, t) {
            var r = document.createEvent("CustomEvent");
            r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r)
        }
        var JE = window.jQuery,
            Dr = {},
            Pa = ".w-ix",
            ev = {
                reset: function(e, t) {
                    Qn.triggers.reset(e, t)
                },
                intro: function(e, t) {
                    Qn.triggers.intro(e, t), La(t, "COMPONENT_ACTIVE")
                },
                outro: function(e, t) {
                    Qn.triggers.outro(e, t), La(t, "COMPONENT_INACTIVE")
                }
            };
        Dr.triggers = {};
        Dr.types = {
            INTRO: "w-ix-intro" + Pa,
            OUTRO: "w-ix-outro" + Pa
        };
        JE.extend(Dr.triggers, ev);
        Na.exports = Dr
    });
    var Zn = f((yF, Da) => {
        var tv = typeof global == "object" && global && global.Object === Object && global;
        Da.exports = tv
    });
    var Ve = f((mF, Ma) => {
        var rv = Zn(),
            nv = typeof self == "object" && self && self.Object === Object && self,
            iv = rv || nv || Function("return this")();
        Ma.exports = iv
    });
    var St = f((_F, Fa) => {
        var ov = Ve(),
            av = ov.Symbol;
        Fa.exports = av
    });
    var Ga = f((IF, Xa) => {
        var qa = St(),
            ka = Object.prototype,
            sv = ka.hasOwnProperty,
            uv = ka.toString,
            er = qa ? qa.toStringTag : void 0;

        function cv(e) {
            var t = sv.call(e, er),
                r = e[er];
            try {
                e[er] = void 0;
                var n = !0
            } catch {}
            var i = uv.call(e);
            return n && (t ? e[er] = r : delete e[er]), i
        }
        Xa.exports = cv
    });
    var Ua = f((TF, Va) => {
        var lv = Object.prototype,
            fv = lv.toString;

        function dv(e) {
            return fv.call(e)
        }
        Va.exports = dv
    });
    var ut = f((bF, Wa) => {
        var Ba = St(),
            pv = Ga(),
            gv = Ua(),
            hv = "[object Null]",
            Ev = "[object Undefined]",
            Ha = Ba ? Ba.toStringTag : void 0;

        function vv(e) {
            return e == null ? e === void 0 ? Ev : hv : Ha && Ha in Object(e) ? pv(e) : gv(e)
        }
        Wa.exports = vv
    });
    var Jn = f((AF, za) => {
        function yv(e, t) {
            return function(r) {
                return e(t(r))
            }
        }
        za.exports = yv
    });
    var ei = f((wF, Ka) => {
        var mv = Jn(),
            _v = mv(Object.getPrototypeOf, Object);
        Ka.exports = _v
    });
    var rt = f((SF, ja) => {
        function Iv(e) {
            return e != null && typeof e == "object"
        }
        ja.exports = Iv
    });
    var ti = f((OF, $a) => {
        var Tv = ut(),
            bv = ei(),
            Av = rt(),
            wv = "[object Object]",
            Sv = Function.prototype,
            Ov = Object.prototype,
            Ya = Sv.toString,
            xv = Ov.hasOwnProperty,
            Rv = Ya.call(Object);

        function Cv(e) {
            if (!Av(e) || Tv(e) != wv) return !1;
            var t = bv(e);
            if (t === null) return !0;
            var r = xv.call(t, "constructor") && t.constructor;
            return typeof r == "function" && r instanceof r && Ya.call(r) == Rv
        }
        $a.exports = Cv
    });
    var Qa = f(ri => {
        "use strict";
        Object.defineProperty(ri, "__esModule", {
            value: !0
        });
        ri.default = Lv;

        function Lv(e) {
            var t, r = e.Symbol;
            return typeof r == "function" ? r.observable ? t = r.observable : (t = r("observable"), r.observable = t) : t = "@@observable", t
        }
    });
    var Za = f((ii, ni) => {
        "use strict";
        Object.defineProperty(ii, "__esModule", {
            value: !0
        });
        var Pv = Qa(),
            Nv = Dv(Pv);

        function Dv(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var Ot;
        typeof self < "u" ? Ot = self : typeof window < "u" ? Ot = window : typeof global < "u" ? Ot = global : typeof ni < "u" ? Ot = ni : Ot = Function("return this")();
        var Mv = (0, Nv.default)(Ot);
        ii.default = Mv
    });
    var oi = f(tr => {
        "use strict";
        tr.__esModule = !0;
        tr.ActionTypes = void 0;
        tr.default = rs;
        var Fv = ti(),
            qv = ts(Fv),
            kv = Za(),
            Ja = ts(kv);

        function ts(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var es = tr.ActionTypes = {
            INIT: "@@redux/INIT"
        };

        function rs(e, t, r) {
            var n;
            if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
                if (typeof r != "function") throw new Error("Expected the enhancer to be a function.");
                return r(rs)(e, t)
            }
            if (typeof e != "function") throw new Error("Expected the reducer to be a function.");
            var i = e,
                o = t,
                a = [],
                s = a,
                u = !1;

            function l() {
                s === a && (s = a.slice())
            }

            function v() {
                return o
            }

            function d(_) {
                if (typeof _ != "function") throw new Error("Expected listener to be a function.");
                var A = !0;
                return l(), s.push(_),
                    function() {
                        if (A) {
                            A = !1, l();
                            var R = s.indexOf(_);
                            s.splice(R, 1)
                        }
                    }
            }

            function p(_) {
                if (!(0, qv.default)(_)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if (typeof _.type > "u") throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (u) throw new Error("Reducers may not dispatch actions.");
                try {
                    u = !0, o = i(o, _)
                } finally {
                    u = !1
                }
                for (var A = a = s, m = 0; m < A.length; m++) A[m]();
                return _
            }

            function h(_) {
                if (typeof _ != "function") throw new Error("Expected the nextReducer to be a function.");
                i = _, p({
                    type: es.INIT
                })
            }

            function I() {
                var _, A = d;
                return _ = {
                    subscribe: function(R) {
                        if (typeof R != "object") throw new TypeError("Expected the observer to be an object.");

                        function w() {
                            R.next && R.next(v())
                        }
                        w();
                        var P = A(w);
                        return {
                            unsubscribe: P
                        }
                    }
                }, _[Ja.default] = function() {
                    return this
                }, _
            }
            return p({
                type: es.INIT
            }), n = {
                dispatch: p,
                subscribe: d,
                getState: v,
                replaceReducer: h
            }, n[Ja.default] = I, n
        }
    });
    var si = f(ai => {
        "use strict";
        ai.__esModule = !0;
        ai.default = Xv;

        function Xv(e) {
            typeof console < "u" && typeof console.error == "function" && console.error(e);
            try {
                throw new Error(e)
            } catch {}
        }
    });
    var os = f(ui => {
        "use strict";
        ui.__esModule = !0;
        ui.default = Hv;
        var ns = oi(),
            Gv = ti(),
            LF = is(Gv),
            Vv = si(),
            PF = is(Vv);

        function is(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function Uv(e, t) {
            var r = t && t.type,
                n = r && '"' + r.toString() + '"' || "an action";
            return "Given action " + n + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
        }

        function Bv(e) {
            Object.keys(e).forEach(function(t) {
                var r = e[t],
                    n = r(void 0, {
                        type: ns.ActionTypes.INIT
                    });
                if (typeof n > "u") throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
                var i = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
                if (typeof r(void 0, {
                        type: i
                    }) > "u") throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + ns.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
            })
        }

        function Hv(e) {
            for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
                var i = t[n];
                typeof e[i] == "function" && (r[i] = e[i])
            }
            var o = Object.keys(r);
            if (!1) var a;
            var s;
            try {
                Bv(r)
            } catch (u) {
                s = u
            }
            return function() {
                var l = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0],
                    v = arguments[1];
                if (s) throw s;
                if (!1) var d;
                for (var p = !1, h = {}, I = 0; I < o.length; I++) {
                    var _ = o[I],
                        A = r[_],
                        m = l[_],
                        R = A(m, v);
                    if (typeof R > "u") {
                        var w = Uv(_, v);
                        throw new Error(w)
                    }
                    h[_] = R, p = p || R !== m
                }
                return p ? h : l
            }
        }
    });
    var ss = f(ci => {
        "use strict";
        ci.__esModule = !0;
        ci.default = Wv;

        function as(e, t) {
            return function() {
                return t(e.apply(void 0, arguments))
            }
        }

        function Wv(e, t) {
            if (typeof e == "function") return as(e, t);
            if (typeof e != "object" || e === null) throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
            for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
                var o = r[i],
                    a = e[o];
                typeof a == "function" && (n[o] = as(a, t))
            }
            return n
        }
    });
    var fi = f(li => {
        "use strict";
        li.__esModule = !0;
        li.default = zv;

        function zv() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            if (t.length === 0) return function(o) {
                return o
            };
            if (t.length === 1) return t[0];
            var n = t[t.length - 1],
                i = t.slice(0, -1);
            return function() {
                return i.reduceRight(function(o, a) {
                    return a(o)
                }, n.apply(void 0, arguments))
            }
        }
    });
    var us = f(di => {
        "use strict";
        di.__esModule = !0;
        var Kv = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        };
        di.default = Qv;
        var jv = fi(),
            Yv = $v(jv);

        function $v(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function Qv() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return function(n) {
                return function(i, o, a) {
                    var s = n(i, o, a),
                        u = s.dispatch,
                        l = [],
                        v = {
                            getState: s.getState,
                            dispatch: function(p) {
                                return u(p)
                            }
                        };
                    return l = t.map(function(d) {
                        return d(v)
                    }), u = Yv.default.apply(void 0, l)(s.dispatch), Kv({}, s, {
                        dispatch: u
                    })
                }
            }
        }
    });
    var pi = f(Fe => {
        "use strict";
        Fe.__esModule = !0;
        Fe.compose = Fe.applyMiddleware = Fe.bindActionCreators = Fe.combineReducers = Fe.createStore = void 0;
        var Zv = oi(),
            Jv = xt(Zv),
            ey = os(),
            ty = xt(ey),
            ry = ss(),
            ny = xt(ry),
            iy = us(),
            oy = xt(iy),
            ay = fi(),
            sy = xt(ay),
            uy = si(),
            qF = xt(uy);

        function xt(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Fe.createStore = Jv.default;
        Fe.combineReducers = ty.default;
        Fe.bindActionCreators = ny.default;
        Fe.applyMiddleware = oy.default;
        Fe.compose = sy.default
    });
    var Ue, gi, Ye, cy, ly, Fr, fy, hi = Ee(() => {
        "use strict";
        Ue = {
            NAVBAR_OPEN: "NAVBAR_OPEN",
            NAVBAR_CLOSE: "NAVBAR_CLOSE",
            TAB_ACTIVE: "TAB_ACTIVE",
            TAB_INACTIVE: "TAB_INACTIVE",
            SLIDER_ACTIVE: "SLIDER_ACTIVE",
            SLIDER_INACTIVE: "SLIDER_INACTIVE",
            DROPDOWN_OPEN: "DROPDOWN_OPEN",
            DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
            MOUSE_CLICK: "MOUSE_CLICK",
            MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
            MOUSE_DOWN: "MOUSE_DOWN",
            MOUSE_UP: "MOUSE_UP",
            MOUSE_OVER: "MOUSE_OVER",
            MOUSE_OUT: "MOUSE_OUT",
            MOUSE_MOVE: "MOUSE_MOVE",
            MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
            SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
            SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
            SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
            ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
            ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
            PAGE_START: "PAGE_START",
            PAGE_FINISH: "PAGE_FINISH",
            PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
            PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
            PAGE_SCROLL: "PAGE_SCROLL"
        }, gi = {
            ELEMENT: "ELEMENT",
            CLASS: "CLASS",
            PAGE: "PAGE"
        }, Ye = {
            ELEMENT: "ELEMENT",
            VIEWPORT: "VIEWPORT"
        }, cy = {
            X_AXIS: "X_AXIS",
            Y_AXIS: "Y_AXIS"
        }, ly = {
            CHILDREN: "CHILDREN",
            SIBLINGS: "SIBLINGS",
            IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
        }, Fr = {
            FADE_EFFECT: "FADE_EFFECT",
            SLIDE_EFFECT: "SLIDE_EFFECT",
            GROW_EFFECT: "GROW_EFFECT",
            SHRINK_EFFECT: "SHRINK_EFFECT",
            SPIN_EFFECT: "SPIN_EFFECT",
            FLY_EFFECT: "FLY_EFFECT",
            POP_EFFECT: "POP_EFFECT",
            FLIP_EFFECT: "FLIP_EFFECT",
            JIGGLE_EFFECT: "JIGGLE_EFFECT",
            PULSE_EFFECT: "PULSE_EFFECT",
            DROP_EFFECT: "DROP_EFFECT",
            BLINK_EFFECT: "BLINK_EFFECT",
            BOUNCE_EFFECT: "BOUNCE_EFFECT",
            FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
            FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
            RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
            JELLO_EFFECT: "JELLO_EFFECT",
            GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
            SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
            PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
        }, fy = {
            LEFT: "LEFT",
            RIGHT: "RIGHT",
            BOTTOM: "BOTTOM",
            TOP: "TOP",
            BOTTOM_LEFT: "BOTTOM_LEFT",
            BOTTOM_RIGHT: "BOTTOM_RIGHT",
            TOP_RIGHT: "TOP_RIGHT",
            TOP_LEFT: "TOP_LEFT",
            CLOCKWISE: "CLOCKWISE",
            COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
        }
    });
    var Le, dy, qr = Ee(() => {
        "use strict";
        Le = {
            TRANSFORM_MOVE: "TRANSFORM_MOVE",
            TRANSFORM_SCALE: "TRANSFORM_SCALE",
            TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
            TRANSFORM_SKEW: "TRANSFORM_SKEW",
            STYLE_OPACITY: "STYLE_OPACITY",
            STYLE_SIZE: "STYLE_SIZE",
            STYLE_FILTER: "STYLE_FILTER",
            STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
            STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
            STYLE_BORDER: "STYLE_BORDER",
            STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
            OBJECT_VALUE: "OBJECT_VALUE",
            PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
            PLUGIN_SPLINE: "PLUGIN_SPLINE",
            PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
            GENERAL_DISPLAY: "GENERAL_DISPLAY",
            GENERAL_START_ACTION: "GENERAL_START_ACTION",
            GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
            GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
            GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
            GENERAL_LOOP: "GENERAL_LOOP",
            STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
        }, dy = {
            ELEMENT: "ELEMENT",
            ELEMENT_CLASS: "ELEMENT_CLASS",
            TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
        }
    });
    var py, cs = Ee(() => {
        "use strict";
        py = {
            MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
            MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
            MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
            SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
            SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
            MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
            PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
            PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
            PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
            NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
            DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
            ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
            TAB_INTERACTION: "TAB_INTERACTION",
            SLIDER_INTERACTION: "SLIDER_INTERACTION"
        }
    });
    var gy, hy, Ey, vy, yy, my, _y, Ei, ls = Ee(() => {
        "use strict";
        qr();
        ({
            TRANSFORM_MOVE: gy,
            TRANSFORM_SCALE: hy,
            TRANSFORM_ROTATE: Ey,
            TRANSFORM_SKEW: vy,
            STYLE_SIZE: yy,
            STYLE_FILTER: my,
            STYLE_FONT_VARIATION: _y
        } = Le), Ei = {
            [gy]: !0,
            [hy]: !0,
            [Ey]: !0,
            [vy]: !0,
            [yy]: !0,
            [my]: !0,
            [_y]: !0
        }
    });
    var Ie = {};
    Ce(Ie, {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: () => qy,
        IX2_ANIMATION_FRAME_CHANGED: () => Ly,
        IX2_CLEAR_REQUESTED: () => xy,
        IX2_ELEMENT_STATE_CHANGED: () => Fy,
        IX2_EVENT_LISTENER_ADDED: () => Ry,
        IX2_EVENT_STATE_CHANGED: () => Cy,
        IX2_INSTANCE_ADDED: () => Ny,
        IX2_INSTANCE_REMOVED: () => My,
        IX2_INSTANCE_STARTED: () => Dy,
        IX2_MEDIA_QUERIES_DEFINED: () => Xy,
        IX2_PARAMETER_CHANGED: () => Py,
        IX2_PLAYBACK_REQUESTED: () => Sy,
        IX2_PREVIEW_REQUESTED: () => wy,
        IX2_RAW_DATA_IMPORTED: () => Iy,
        IX2_SESSION_INITIALIZED: () => Ty,
        IX2_SESSION_STARTED: () => by,
        IX2_SESSION_STOPPED: () => Ay,
        IX2_STOP_REQUESTED: () => Oy,
        IX2_TEST_FRAME_RENDERED: () => Gy,
        IX2_VIEWPORT_WIDTH_CHANGED: () => ky
    });
    var Iy, Ty, by, Ay, wy, Sy, Oy, xy, Ry, Cy, Ly, Py, Ny, Dy, My, Fy, qy, ky, Xy, Gy, fs = Ee(() => {
        "use strict";
        Iy = "IX2_RAW_DATA_IMPORTED", Ty = "IX2_SESSION_INITIALIZED", by = "IX2_SESSION_STARTED", Ay = "IX2_SESSION_STOPPED", wy = "IX2_PREVIEW_REQUESTED", Sy = "IX2_PLAYBACK_REQUESTED", Oy = "IX2_STOP_REQUESTED", xy = "IX2_CLEAR_REQUESTED", Ry = "IX2_EVENT_LISTENER_ADDED", Cy = "IX2_EVENT_STATE_CHANGED", Ly = "IX2_ANIMATION_FRAME_CHANGED", Py = "IX2_PARAMETER_CHANGED", Ny = "IX2_INSTANCE_ADDED", Dy = "IX2_INSTANCE_STARTED", My = "IX2_INSTANCE_REMOVED", Fy = "IX2_ELEMENT_STATE_CHANGED", qy = "IX2_ACTION_LIST_PLAYBACK_CHANGED", ky = "IX2_VIEWPORT_WIDTH_CHANGED", Xy = "IX2_MEDIA_QUERIES_DEFINED", Gy = "IX2_TEST_FRAME_RENDERED"
    });
    var Ae = {};
    Ce(Ae, {
        ABSTRACT_NODE: () => km,
        AUTO: () => Om,
        BACKGROUND: () => Im,
        BACKGROUND_COLOR: () => _m,
        BAR_DELIMITER: () => Cm,
        BORDER_COLOR: () => Tm,
        BOUNDARY_SELECTOR: () => Wy,
        CHILDREN: () => Lm,
        COLON_DELIMITER: () => Rm,
        COLOR: () => bm,
        COMMA_DELIMITER: () => xm,
        CONFIG_UNIT: () => Jy,
        CONFIG_VALUE: () => Yy,
        CONFIG_X_UNIT: () => $y,
        CONFIG_X_VALUE: () => zy,
        CONFIG_Y_UNIT: () => Qy,
        CONFIG_Y_VALUE: () => Ky,
        CONFIG_Z_UNIT: () => Zy,
        CONFIG_Z_VALUE: () => jy,
        DISPLAY: () => Am,
        FILTER: () => Em,
        FLEX: () => wm,
        FONT_VARIATION_SETTINGS: () => vm,
        HEIGHT: () => mm,
        HTML_ELEMENT: () => Fm,
        IMMEDIATE_CHILDREN: () => Pm,
        IX2_ID_DELIMITER: () => Vy,
        OPACITY: () => hm,
        PARENT: () => Dm,
        PLAIN_OBJECT: () => qm,
        PRESERVE_3D: () => Mm,
        RENDER_GENERAL: () => Gm,
        RENDER_PLUGIN: () => Um,
        RENDER_STYLE: () => Vm,
        RENDER_TRANSFORM: () => Xm,
        ROTATE_X: () => cm,
        ROTATE_Y: () => lm,
        ROTATE_Z: () => fm,
        SCALE_3D: () => um,
        SCALE_X: () => om,
        SCALE_Y: () => am,
        SCALE_Z: () => sm,
        SIBLINGS: () => Nm,
        SKEW: () => dm,
        SKEW_X: () => pm,
        SKEW_Y: () => gm,
        TRANSFORM: () => em,
        TRANSLATE_3D: () => im,
        TRANSLATE_X: () => tm,
        TRANSLATE_Y: () => rm,
        TRANSLATE_Z: () => nm,
        WF_PAGE: () => Uy,
        WIDTH: () => ym,
        WILL_CHANGE: () => Sm,
        W_MOD_IX: () => Hy,
        W_MOD_JS: () => By
    });
    var Vy, Uy, By, Hy, Wy, zy, Ky, jy, Yy, $y, Qy, Zy, Jy, em, tm, rm, nm, im, om, am, sm, um, cm, lm, fm, dm, pm, gm, hm, Em, vm, ym, mm, _m, Im, Tm, bm, Am, wm, Sm, Om, xm, Rm, Cm, Lm, Pm, Nm, Dm, Mm, Fm, qm, km, Xm, Gm, Vm, Um, ds = Ee(() => {
        "use strict";
        Vy = "|", Uy = "data-wf-page", By = "w-mod-js", Hy = "w-mod-ix", Wy = ".w-dyn-item", zy = "xValue", Ky = "yValue", jy = "zValue", Yy = "value", $y = "xUnit", Qy = "yUnit", Zy = "zUnit", Jy = "unit", em = "transform", tm = "translateX", rm = "translateY", nm = "translateZ", im = "translate3d", om = "scaleX", am = "scaleY", sm = "scaleZ", um = "scale3d", cm = "rotateX", lm = "rotateY", fm = "rotateZ", dm = "skew", pm = "skewX", gm = "skewY", hm = "opacity", Em = "filter", vm = "font-variation-settings", ym = "width", mm = "height", _m = "backgroundColor", Im = "background", Tm = "borderColor", bm = "color", Am = "display", wm = "flex", Sm = "willChange", Om = "AUTO", xm = ",", Rm = ":", Cm = "|", Lm = "CHILDREN", Pm = "IMMEDIATE_CHILDREN", Nm = "SIBLINGS", Dm = "PARENT", Mm = "preserve-3d", Fm = "HTML_ELEMENT", qm = "PLAIN_OBJECT", km = "ABSTRACT_NODE", Xm = "RENDER_TRANSFORM", Gm = "RENDER_GENERAL", Vm = "RENDER_STYLE", Um = "RENDER_PLUGIN"
    });
    var ps = {};
    Ce(ps, {
        ActionAppliesTo: () => dy,
        ActionTypeConsts: () => Le,
        EventAppliesTo: () => gi,
        EventBasedOn: () => Ye,
        EventContinuousMouseAxes: () => cy,
        EventLimitAffectedElements: () => ly,
        EventTypeConsts: () => Ue,
        IX2EngineActionTypes: () => Ie,
        IX2EngineConstants: () => Ae,
        InteractionTypeConsts: () => py,
        QuickEffectDirectionConsts: () => fy,
        QuickEffectIds: () => Fr,
        ReducedMotionTypes: () => Ei
    });
    var Pe = Ee(() => {
        "use strict";
        hi();
        qr();
        cs();
        ls();
        fs();
        ds();
        qr();
        hi()
    });
    var Bm, gs, hs = Ee(() => {
        "use strict";
        Pe();
        ({
            IX2_RAW_DATA_IMPORTED: Bm
        } = Ie), gs = (e = Object.freeze({}), t) => {
            switch (t.type) {
                case Bm:
                    return t.payload.ixData || Object.freeze({});
                default:
                    return e
            }
        }
    });
    var Rt = f(ye => {
        "use strict";
        Object.defineProperty(ye, "__esModule", {
            value: !0
        });
        var Hm = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
            return typeof e
        } : function(e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        ye.clone = Xr;
        ye.addLast = ys;
        ye.addFirst = ms;
        ye.removeLast = _s;
        ye.removeFirst = Is;
        ye.insert = Ts;
        ye.removeAt = bs;
        ye.replaceAt = As;
        ye.getIn = Gr;
        ye.set = Vr;
        ye.setIn = Ur;
        ye.update = Ss;
        ye.updateIn = Os;
        ye.merge = xs;
        ye.mergeDeep = Rs;
        ye.mergeIn = Cs;
        ye.omit = Ls;
        ye.addDefaults = Ps;
        var Es = "INVALID_ARGS";

        function vs(e) {
            throw new Error(e)
        }

        function vi(e) {
            var t = Object.keys(e);
            return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
        }
        var Wm = {}.hasOwnProperty;

        function Xr(e) {
            if (Array.isArray(e)) return e.slice();
            for (var t = vi(e), r = {}, n = 0; n < t.length; n++) {
                var i = t[n];
                r[i] = e[i]
            }
            return r
        }

        function Ne(e, t, r) {
            var n = r;
            n == null && vs(Es);
            for (var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3; s < o; s++) a[s - 3] = arguments[s];
            for (var u = 0; u < a.length; u++) {
                var l = a[u];
                if (l != null) {
                    var v = vi(l);
                    if (v.length)
                        for (var d = 0; d <= v.length; d++) {
                            var p = v[d];
                            if (!(e && n[p] !== void 0)) {
                                var h = l[p];
                                t && kr(n[p]) && kr(h) && (h = Ne(e, t, n[p], h)), !(h === void 0 || h === n[p]) && (i || (i = !0, n = Xr(n)), n[p] = h)
                            }
                        }
                }
            }
            return n
        }

        function kr(e) {
            var t = typeof e > "u" ? "undefined" : Hm(e);
            return e != null && (t === "object" || t === "function")
        }

        function ys(e, t) {
            return Array.isArray(t) ? e.concat(t) : e.concat([t])
        }

        function ms(e, t) {
            return Array.isArray(t) ? t.concat(e) : [t].concat(e)
        }

        function _s(e) {
            return e.length ? e.slice(0, e.length - 1) : e
        }

        function Is(e) {
            return e.length ? e.slice(1) : e
        }

        function Ts(e, t, r) {
            return e.slice(0, t).concat(Array.isArray(r) ? r : [r]).concat(e.slice(t))
        }

        function bs(e, t) {
            return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1))
        }

        function As(e, t, r) {
            if (e[t] === r) return e;
            for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
            return i[t] = r, i
        }

        function Gr(e, t) {
            if (!Array.isArray(t) && vs(Es), e != null) {
                for (var r = e, n = 0; n < t.length; n++) {
                    var i = t[n];
                    if (r = r ? .[i], r === void 0) return r
                }
                return r
            }
        }

        function Vr(e, t, r) {
            var n = typeof t == "number" ? [] : {},
                i = e ? ? n;
            if (i[t] === r) return i;
            var o = Xr(i);
            return o[t] = r, o
        }

        function ws(e, t, r, n) {
            var i = void 0,
                o = t[n];
            if (n === t.length - 1) i = r;
            else {
                var a = kr(e) && kr(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
                i = ws(a, t, r, n + 1)
            }
            return Vr(e, o, i)
        }

        function Ur(e, t, r) {
            return t.length ? ws(e, t, r, 0) : r
        }

        function Ss(e, t, r) {
            var n = e ? .[t],
                i = r(n);
            return Vr(e, t, i)
        }

        function Os(e, t, r) {
            var n = Gr(e, t),
                i = r(n);
            return Ur(e, t, i)
        }

        function xs(e, t, r, n, i, o) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++) s[u - 6] = arguments[u];
            return s.length ? Ne.call.apply(Ne, [null, !1, !1, e, t, r, n, i, o].concat(s)) : Ne(!1, !1, e, t, r, n, i, o)
        }

        function Rs(e, t, r, n, i, o) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++) s[u - 6] = arguments[u];
            return s.length ? Ne.call.apply(Ne, [null, !1, !0, e, t, r, n, i, o].concat(s)) : Ne(!1, !0, e, t, r, n, i, o)
        }

        function Cs(e, t, r, n, i, o, a) {
            var s = Gr(e, t);
            s == null && (s = {});
            for (var u = void 0, l = arguments.length, v = Array(l > 7 ? l - 7 : 0), d = 7; d < l; d++) v[d - 7] = arguments[d];
            return v.length ? u = Ne.call.apply(Ne, [null, !1, !1, s, r, n, i, o, a].concat(v)) : u = Ne(!1, !1, s, r, n, i, o, a), Ur(e, t, u)
        }

        function Ls(e, t) {
            for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
                if (Wm.call(e, r[i])) {
                    n = !0;
                    break
                }
            if (!n) return e;
            for (var o = {}, a = vi(e), s = 0; s < a.length; s++) {
                var u = a[s];
                r.indexOf(u) >= 0 || (o[u] = e[u])
            }
            return o
        }

        function Ps(e, t, r, n, i, o) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++) s[u - 6] = arguments[u];
            return s.length ? Ne.call.apply(Ne, [null, !0, !1, e, t, r, n, i, o].concat(s)) : Ne(!0, !1, e, t, r, n, i, o)
        }
        var zm = {
            clone: Xr,
            addLast: ys,
            addFirst: ms,
            removeLast: _s,
            removeFirst: Is,
            insert: Ts,
            removeAt: bs,
            replaceAt: As,
            getIn: Gr,
            set: Vr,
            setIn: Ur,
            update: Ss,
            updateIn: Os,
            merge: xs,
            mergeDeep: Rs,
            mergeIn: Cs,
            omit: Ls,
            addDefaults: Ps
        };
        ye.default = zm
    });
    var Ds, Km, jm, Ym, $m, Qm, Ns, Ms, Fs = Ee(() => {
        "use strict";
        Pe();
        Ds = ue(Rt()), {
            IX2_PREVIEW_REQUESTED: Km,
            IX2_PLAYBACK_REQUESTED: jm,
            IX2_STOP_REQUESTED: Ym,
            IX2_CLEAR_REQUESTED: $m
        } = Ie, Qm = {
            preview: {},
            playback: {},
            stop: {},
            clear: {}
        }, Ns = Object.create(null, {
            [Km]: {
                value: "preview"
            },
            [jm]: {
                value: "playback"
            },
            [Ym]: {
                value: "stop"
            },
            [$m]: {
                value: "clear"
            }
        }), Ms = (e = Qm, t) => {
            if (t.type in Ns) {
                let r = [Ns[t.type]];
                return (0, Ds.setIn)(e, [r], { ...t.payload
                })
            }
            return e
        }
    });
    var Oe, Zm, Jm, e_, t_, r_, n_, i_, o_, a_, s_, qs, u_, ks, Xs = Ee(() => {
        "use strict";
        Pe();
        Oe = ue(Rt()), {
            IX2_SESSION_INITIALIZED: Zm,
            IX2_SESSION_STARTED: Jm,
            IX2_TEST_FRAME_RENDERED: e_,
            IX2_SESSION_STOPPED: t_,
            IX2_EVENT_LISTENER_ADDED: r_,
            IX2_EVENT_STATE_CHANGED: n_,
            IX2_ANIMATION_FRAME_CHANGED: i_,
            IX2_ACTION_LIST_PLAYBACK_CHANGED: o_,
            IX2_VIEWPORT_WIDTH_CHANGED: a_,
            IX2_MEDIA_QUERIES_DEFINED: s_
        } = Ie, qs = {
            active: !1,
            tick: 0,
            eventListeners: [],
            eventState: {},
            playbackState: {},
            viewportWidth: 0,
            mediaQueryKey: null,
            hasBoundaryNodes: !1,
            hasDefinedMediaQueries: !1,
            reducedMotion: !1
        }, u_ = 20, ks = (e = qs, t) => {
            switch (t.type) {
                case Zm:
                    {
                        let {
                            hasBoundaryNodes: r,
                            reducedMotion: n
                        } = t.payload;
                        return (0, Oe.merge)(e, {
                            hasBoundaryNodes: r,
                            reducedMotion: n
                        })
                    }
                case Jm:
                    return (0, Oe.set)(e, "active", !0);
                case e_:
                    {
                        let {
                            payload: {
                                step: r = u_
                            }
                        } = t;
                        return (0, Oe.set)(e, "tick", e.tick + r)
                    }
                case t_:
                    return qs;
                case i_:
                    {
                        let {
                            payload: {
                                now: r
                            }
                        } = t;
                        return (0, Oe.set)(e, "tick", r)
                    }
                case r_:
                    {
                        let r = (0, Oe.addLast)(e.eventListeners, t.payload);
                        return (0, Oe.set)(e, "eventListeners", r)
                    }
                case n_:
                    {
                        let {
                            stateKey: r,
                            newState: n
                        } = t.payload;
                        return (0, Oe.setIn)(e, ["eventState", r], n)
                    }
                case o_:
                    {
                        let {
                            actionListId: r,
                            isPlaying: n
                        } = t.payload;
                        return (0, Oe.setIn)(e, ["playbackState", r], n)
                    }
                case a_:
                    {
                        let {
                            width: r,
                            mediaQueries: n
                        } = t.payload,
                        i = n.length,
                        o = null;
                        for (let a = 0; a < i; a++) {
                            let {
                                key: s,
                                min: u,
                                max: l
                            } = n[a];
                            if (r >= u && r <= l) {
                                o = s;
                                break
                            }
                        }
                        return (0, Oe.merge)(e, {
                            viewportWidth: r,
                            mediaQueryKey: o
                        })
                    }
                case s_:
                    return (0, Oe.set)(e, "hasDefinedMediaQueries", !0);
                default:
                    return e
            }
        }
    });
    var Vs = f((n2, Gs) => {
        function c_() {
            this.__data__ = [], this.size = 0
        }
        Gs.exports = c_
    });
    var Br = f((i2, Us) => {
        function l_(e, t) {
            return e === t || e !== e && t !== t
        }
        Us.exports = l_
    });
    var rr = f((o2, Bs) => {
        var f_ = Br();

        function d_(e, t) {
            for (var r = e.length; r--;)
                if (f_(e[r][0], t)) return r;
            return -1
        }
        Bs.exports = d_
    });
    var Ws = f((a2, Hs) => {
        var p_ = rr(),
            g_ = Array.prototype,
            h_ = g_.splice;

        function E_(e) {
            var t = this.__data__,
                r = p_(t, e);
            if (r < 0) return !1;
            var n = t.length - 1;
            return r == n ? t.pop() : h_.call(t, r, 1), --this.size, !0
        }
        Hs.exports = E_
    });
    var Ks = f((s2, zs) => {
        var v_ = rr();

        function y_(e) {
            var t = this.__data__,
                r = v_(t, e);
            return r < 0 ? void 0 : t[r][1]
        }
        zs.exports = y_
    });
    var Ys = f((u2, js) => {
        var m_ = rr();

        function __(e) {
            return m_(this.__data__, e) > -1
        }
        js.exports = __
    });
    var Qs = f((c2, $s) => {
        var I_ = rr();

        function T_(e, t) {
            var r = this.__data__,
                n = I_(r, e);
            return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
        }
        $s.exports = T_
    });
    var nr = f((l2, Zs) => {
        var b_ = Vs(),
            A_ = Ws(),
            w_ = Ks(),
            S_ = Ys(),
            O_ = Qs();

        function Ct(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        Ct.prototype.clear = b_;
        Ct.prototype.delete = A_;
        Ct.prototype.get = w_;
        Ct.prototype.has = S_;
        Ct.prototype.set = O_;
        Zs.exports = Ct
    });
    var eu = f((f2, Js) => {
        var x_ = nr();

        function R_() {
            this.__data__ = new x_, this.size = 0
        }
        Js.exports = R_
    });
    var ru = f((d2, tu) => {
        function C_(e) {
            var t = this.__data__,
                r = t.delete(e);
            return this.size = t.size, r
        }
        tu.exports = C_
    });
    var iu = f((p2, nu) => {
        function L_(e) {
            return this.__data__.get(e)
        }
        nu.exports = L_
    });
    var au = f((g2, ou) => {
        function P_(e) {
            return this.__data__.has(e)
        }
        ou.exports = P_
    });
    var $e = f((h2, su) => {
        function N_(e) {
            var t = typeof e;
            return e != null && (t == "object" || t == "function")
        }
        su.exports = N_
    });
    var yi = f((E2, uu) => {
        var D_ = ut(),
            M_ = $e(),
            F_ = "[object AsyncFunction]",
            q_ = "[object Function]",
            k_ = "[object GeneratorFunction]",
            X_ = "[object Proxy]";

        function G_(e) {
            if (!M_(e)) return !1;
            var t = D_(e);
            return t == q_ || t == k_ || t == F_ || t == X_
        }
        uu.exports = G_
    });
    var lu = f((v2, cu) => {
        var V_ = Ve(),
            U_ = V_["__core-js_shared__"];
        cu.exports = U_
    });
    var pu = f((y2, du) => {
        var mi = lu(),
            fu = function() {
                var e = /[^.]+$/.exec(mi && mi.keys && mi.keys.IE_PROTO || "");
                return e ? "Symbol(src)_1." + e : ""
            }();

        function B_(e) {
            return !!fu && fu in e
        }
        du.exports = B_
    });
    var _i = f((m2, gu) => {
        var H_ = Function.prototype,
            W_ = H_.toString;

        function z_(e) {
            if (e != null) {
                try {
                    return W_.call(e)
                } catch {}
                try {
                    return e + ""
                } catch {}
            }
            return ""
        }
        gu.exports = z_
    });
    var Eu = f((_2, hu) => {
        var K_ = yi(),
            j_ = pu(),
            Y_ = $e(),
            $_ = _i(),
            Q_ = /[\\^$.*+?()[\]{}|]/g,
            Z_ = /^\[object .+?Constructor\]$/,
            J_ = Function.prototype,
            eI = Object.prototype,
            tI = J_.toString,
            rI = eI.hasOwnProperty,
            nI = RegExp("^" + tI.call(rI).replace(Q_, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

        function iI(e) {
            if (!Y_(e) || j_(e)) return !1;
            var t = K_(e) ? nI : Z_;
            return t.test($_(e))
        }
        hu.exports = iI
    });
    var yu = f((I2, vu) => {
        function oI(e, t) {
            return e ? .[t]
        }
        vu.exports = oI
    });
    var ct = f((T2, mu) => {
        var aI = Eu(),
            sI = yu();

        function uI(e, t) {
            var r = sI(e, t);
            return aI(r) ? r : void 0
        }
        mu.exports = uI
    });
    var Hr = f((b2, _u) => {
        var cI = ct(),
            lI = Ve(),
            fI = cI(lI, "Map");
        _u.exports = fI
    });
    var ir = f((A2, Iu) => {
        var dI = ct(),
            pI = dI(Object, "create");
        Iu.exports = pI
    });
    var Au = f((w2, bu) => {
        var Tu = ir();

        function gI() {
            this.__data__ = Tu ? Tu(null) : {}, this.size = 0
        }
        bu.exports = gI
    });
    var Su = f((S2, wu) => {
        function hI(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0, t
        }
        wu.exports = hI
    });
    var xu = f((O2, Ou) => {
        var EI = ir(),
            vI = "__lodash_hash_undefined__",
            yI = Object.prototype,
            mI = yI.hasOwnProperty;

        function _I(e) {
            var t = this.__data__;
            if (EI) {
                var r = t[e];
                return r === vI ? void 0 : r
            }
            return mI.call(t, e) ? t[e] : void 0
        }
        Ou.exports = _I
    });
    var Cu = f((x2, Ru) => {
        var II = ir(),
            TI = Object.prototype,
            bI = TI.hasOwnProperty;

        function AI(e) {
            var t = this.__data__;
            return II ? t[e] !== void 0 : bI.call(t, e)
        }
        Ru.exports = AI
    });
    var Pu = f((R2, Lu) => {
        var wI = ir(),
            SI = "__lodash_hash_undefined__";

        function OI(e, t) {
            var r = this.__data__;
            return this.size += this.has(e) ? 0 : 1, r[e] = wI && t === void 0 ? SI : t, this
        }
        Lu.exports = OI
    });
    var Du = f((C2, Nu) => {
        var xI = Au(),
            RI = Su(),
            CI = xu(),
            LI = Cu(),
            PI = Pu();

        function Lt(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        Lt.prototype.clear = xI;
        Lt.prototype.delete = RI;
        Lt.prototype.get = CI;
        Lt.prototype.has = LI;
        Lt.prototype.set = PI;
        Nu.exports = Lt
    });
    var qu = f((L2, Fu) => {
        var Mu = Du(),
            NI = nr(),
            DI = Hr();

        function MI() {
            this.size = 0, this.__data__ = {
                hash: new Mu,
                map: new(DI || NI),
                string: new Mu
            }
        }
        Fu.exports = MI
    });
    var Xu = f((P2, ku) => {
        function FI(e) {
            var t = typeof e;
            return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
        }
        ku.exports = FI
    });
    var or = f((N2, Gu) => {
        var qI = Xu();

        function kI(e, t) {
            var r = e.__data__;
            return qI(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
        }
        Gu.exports = kI
    });
    var Uu = f((D2, Vu) => {
        var XI = or();

        function GI(e) {
            var t = XI(this, e).delete(e);
            return this.size -= t ? 1 : 0, t
        }
        Vu.exports = GI
    });
    var Hu = f((M2, Bu) => {
        var VI = or();

        function UI(e) {
            return VI(this, e).get(e)
        }
        Bu.exports = UI
    });
    var zu = f((F2, Wu) => {
        var BI = or();

        function HI(e) {
            return BI(this, e).has(e)
        }
        Wu.exports = HI
    });
    var ju = f((q2, Ku) => {
        var WI = or();

        function zI(e, t) {
            var r = WI(this, e),
                n = r.size;
            return r.set(e, t), this.size += r.size == n ? 0 : 1, this
        }
        Ku.exports = zI
    });
    var Wr = f((k2, Yu) => {
        var KI = qu(),
            jI = Uu(),
            YI = Hu(),
            $I = zu(),
            QI = ju();

        function Pt(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        Pt.prototype.clear = KI;
        Pt.prototype.delete = jI;
        Pt.prototype.get = YI;
        Pt.prototype.has = $I;
        Pt.prototype.set = QI;
        Yu.exports = Pt
    });
    var Qu = f((X2, $u) => {
        var ZI = nr(),
            JI = Hr(),
            eT = Wr(),
            tT = 200;

        function rT(e, t) {
            var r = this.__data__;
            if (r instanceof ZI) {
                var n = r.__data__;
                if (!JI || n.length < tT - 1) return n.push([e, t]), this.size = ++r.size, this;
                r = this.__data__ = new eT(n)
            }
            return r.set(e, t), this.size = r.size, this
        }
        $u.exports = rT
    });
    var Ii = f((G2, Zu) => {
        var nT = nr(),
            iT = eu(),
            oT = ru(),
            aT = iu(),
            sT = au(),
            uT = Qu();

        function Nt(e) {
            var t = this.__data__ = new nT(e);
            this.size = t.size
        }
        Nt.prototype.clear = iT;
        Nt.prototype.delete = oT;
        Nt.prototype.get = aT;
        Nt.prototype.has = sT;
        Nt.prototype.set = uT;
        Zu.exports = Nt
    });
    var ec = f((V2, Ju) => {
        var cT = "__lodash_hash_undefined__";

        function lT(e) {
            return this.__data__.set(e, cT), this
        }
        Ju.exports = lT
    });
    var rc = f((U2, tc) => {
        function fT(e) {
            return this.__data__.has(e)
        }
        tc.exports = fT
    });
    var ic = f((B2, nc) => {
        var dT = Wr(),
            pT = ec(),
            gT = rc();

        function zr(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.__data__ = new dT; ++t < r;) this.add(e[t])
        }
        zr.prototype.add = zr.prototype.push = pT;
        zr.prototype.has = gT;
        nc.exports = zr
    });
    var ac = f((H2, oc) => {
        function hT(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n;)
                if (t(e[r], r, e)) return !0;
            return !1
        }
        oc.exports = hT
    });
    var uc = f((W2, sc) => {
        function ET(e, t) {
            return e.has(t)
        }
        sc.exports = ET
    });
    var Ti = f((z2, cc) => {
        var vT = ic(),
            yT = ac(),
            mT = uc(),
            _T = 1,
            IT = 2;

        function TT(e, t, r, n, i, o) {
            var a = r & _T,
                s = e.length,
                u = t.length;
            if (s != u && !(a && u > s)) return !1;
            var l = o.get(e),
                v = o.get(t);
            if (l && v) return l == t && v == e;
            var d = -1,
                p = !0,
                h = r & IT ? new vT : void 0;
            for (o.set(e, t), o.set(t, e); ++d < s;) {
                var I = e[d],
                    _ = t[d];
                if (n) var A = a ? n(_, I, d, t, e, o) : n(I, _, d, e, t, o);
                if (A !== void 0) {
                    if (A) continue;
                    p = !1;
                    break
                }
                if (h) {
                    if (!yT(t, function(m, R) {
                            if (!mT(h, R) && (I === m || i(I, m, r, n, o))) return h.push(R)
                        })) {
                        p = !1;
                        break
                    }
                } else if (!(I === _ || i(I, _, r, n, o))) {
                    p = !1;
                    break
                }
            }
            return o.delete(e), o.delete(t), p
        }
        cc.exports = TT
    });
    var fc = f((K2, lc) => {
        var bT = Ve(),
            AT = bT.Uint8Array;
        lc.exports = AT
    });
    var pc = f((j2, dc) => {
        function wT(e) {
            var t = -1,
                r = Array(e.size);
            return e.forEach(function(n, i) {
                r[++t] = [i, n]
            }), r
        }
        dc.exports = wT
    });
    var hc = f((Y2, gc) => {
        function ST(e) {
            var t = -1,
                r = Array(e.size);
            return e.forEach(function(n) {
                r[++t] = n
            }), r
        }
        gc.exports = ST
    });
    var _c = f(($2, mc) => {
        var Ec = St(),
            vc = fc(),
            OT = Br(),
            xT = Ti(),
            RT = pc(),
            CT = hc(),
            LT = 1,
            PT = 2,
            NT = "[object Boolean]",
            DT = "[object Date]",
            MT = "[object Error]",
            FT = "[object Map]",
            qT = "[object Number]",
            kT = "[object RegExp]",
            XT = "[object Set]",
            GT = "[object String]",
            VT = "[object Symbol]",
            UT = "[object ArrayBuffer]",
            BT = "[object DataView]",
            yc = Ec ? Ec.prototype : void 0,
            bi = yc ? yc.valueOf : void 0;

        function HT(e, t, r, n, i, o, a) {
            switch (r) {
                case BT:
                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                    e = e.buffer, t = t.buffer;
                case UT:
                    return !(e.byteLength != t.byteLength || !o(new vc(e), new vc(t)));
                case NT:
                case DT:
                case qT:
                    return OT(+e, +t);
                case MT:
                    return e.name == t.name && e.message == t.message;
                case kT:
                case GT:
                    return e == t + "";
                case FT:
                    var s = RT;
                case XT:
                    var u = n & LT;
                    if (s || (s = CT), e.size != t.size && !u) return !1;
                    var l = a.get(e);
                    if (l) return l == t;
                    n |= PT, a.set(e, t);
                    var v = xT(s(e), s(t), n, i, o, a);
                    return a.delete(e), v;
                case VT:
                    if (bi) return bi.call(e) == bi.call(t)
            }
            return !1
        }
        mc.exports = HT
    });
    var Kr = f((Q2, Ic) => {
        function WT(e, t) {
            for (var r = -1, n = t.length, i = e.length; ++r < n;) e[i + r] = t[r];
            return e
        }
        Ic.exports = WT
    });
    var Te = f((Z2, Tc) => {
        var zT = Array.isArray;
        Tc.exports = zT
    });
    var Ai = f((J2, bc) => {
        var KT = Kr(),
            jT = Te();

        function YT(e, t, r) {
            var n = t(e);
            return jT(e) ? n : KT(n, r(e))
        }
        bc.exports = YT
    });
    var wc = f((e1, Ac) => {
        function $T(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n;) {
                var a = e[r];
                t(a, r, e) && (o[i++] = a)
            }
            return o
        }
        Ac.exports = $T
    });
    var wi = f((t1, Sc) => {
        function QT() {
            return []
        }
        Sc.exports = QT
    });
    var Si = f((r1, xc) => {
        var ZT = wc(),
            JT = wi(),
            eb = Object.prototype,
            tb = eb.propertyIsEnumerable,
            Oc = Object.getOwnPropertySymbols,
            rb = Oc ? function(e) {
                return e == null ? [] : (e = Object(e), ZT(Oc(e), function(t) {
                    return tb.call(e, t)
                }))
            } : JT;
        xc.exports = rb
    });
    var Cc = f((n1, Rc) => {
        function nb(e, t) {
            for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
            return n
        }
        Rc.exports = nb
    });
    var Pc = f((i1, Lc) => {
        var ib = ut(),
            ob = rt(),
            ab = "[object Arguments]";

        function sb(e) {
            return ob(e) && ib(e) == ab
        }
        Lc.exports = sb
    });
    var ar = f((o1, Mc) => {
        var Nc = Pc(),
            ub = rt(),
            Dc = Object.prototype,
            cb = Dc.hasOwnProperty,
            lb = Dc.propertyIsEnumerable,
            fb = Nc(function() {
                return arguments
            }()) ? Nc : function(e) {
                return ub(e) && cb.call(e, "callee") && !lb.call(e, "callee")
            };
        Mc.exports = fb
    });
    var qc = f((a1, Fc) => {
        function db() {
            return !1
        }
        Fc.exports = db
    });
    var jr = f((sr, Dt) => {
        var pb = Ve(),
            gb = qc(),
            Gc = typeof sr == "object" && sr && !sr.nodeType && sr,
            kc = Gc && typeof Dt == "object" && Dt && !Dt.nodeType && Dt,
            hb = kc && kc.exports === Gc,
            Xc = hb ? pb.Buffer : void 0,
            Eb = Xc ? Xc.isBuffer : void 0,
            vb = Eb || gb;
        Dt.exports = vb
    });
    var Yr = f((s1, Vc) => {
        var yb = 9007199254740991,
            mb = /^(?:0|[1-9]\d*)$/;

        function _b(e, t) {
            var r = typeof e;
            return t = t ? ? yb, !!t && (r == "number" || r != "symbol" && mb.test(e)) && e > -1 && e % 1 == 0 && e < t
        }
        Vc.exports = _b
    });
    var $r = f((u1, Uc) => {
        var Ib = 9007199254740991;

        function Tb(e) {
            return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Ib
        }
        Uc.exports = Tb
    });
    var Hc = f((c1, Bc) => {
        var bb = ut(),
            Ab = $r(),
            wb = rt(),
            Sb = "[object Arguments]",
            Ob = "[object Array]",
            xb = "[object Boolean]",
            Rb = "[object Date]",
            Cb = "[object Error]",
            Lb = "[object Function]",
            Pb = "[object Map]",
            Nb = "[object Number]",
            Db = "[object Object]",
            Mb = "[object RegExp]",
            Fb = "[object Set]",
            qb = "[object String]",
            kb = "[object WeakMap]",
            Xb = "[object ArrayBuffer]",
            Gb = "[object DataView]",
            Vb = "[object Float32Array]",
            Ub = "[object Float64Array]",
            Bb = "[object Int8Array]",
            Hb = "[object Int16Array]",
            Wb = "[object Int32Array]",
            zb = "[object Uint8Array]",
            Kb = "[object Uint8ClampedArray]",
            jb = "[object Uint16Array]",
            Yb = "[object Uint32Array]",
            he = {};
        he[Vb] = he[Ub] = he[Bb] = he[Hb] = he[Wb] = he[zb] = he[Kb] = he[jb] = he[Yb] = !0;
        he[Sb] = he[Ob] = he[Xb] = he[xb] = he[Gb] = he[Rb] = he[Cb] = he[Lb] = he[Pb] = he[Nb] = he[Db] = he[Mb] = he[Fb] = he[qb] = he[kb] = !1;

        function $b(e) {
            return wb(e) && Ab(e.length) && !!he[bb(e)]
        }
        Bc.exports = $b
    });
    var zc = f((l1, Wc) => {
        function Qb(e) {
            return function(t) {
                return e(t)
            }
        }
        Wc.exports = Qb
    });
    var jc = f((ur, Mt) => {
        var Zb = Zn(),
            Kc = typeof ur == "object" && ur && !ur.nodeType && ur,
            cr = Kc && typeof Mt == "object" && Mt && !Mt.nodeType && Mt,
            Jb = cr && cr.exports === Kc,
            Oi = Jb && Zb.process,
            eA = function() {
                try {
                    var e = cr && cr.require && cr.require("util").types;
                    return e || Oi && Oi.binding && Oi.binding("util")
                } catch {}
            }();
        Mt.exports = eA
    });
    var Qr = f((f1, Qc) => {
        var tA = Hc(),
            rA = zc(),
            Yc = jc(),
            $c = Yc && Yc.isTypedArray,
            nA = $c ? rA($c) : tA;
        Qc.exports = nA
    });
    var xi = f((d1, Zc) => {
        var iA = Cc(),
            oA = ar(),
            aA = Te(),
            sA = jr(),
            uA = Yr(),
            cA = Qr(),
            lA = Object.prototype,
            fA = lA.hasOwnProperty;

        function dA(e, t) {
            var r = aA(e),
                n = !r && oA(e),
                i = !r && !n && sA(e),
                o = !r && !n && !i && cA(e),
                a = r || n || i || o,
                s = a ? iA(e.length, String) : [],
                u = s.length;
            for (var l in e)(t || fA.call(e, l)) && !(a && (l == "length" || i && (l == "offset" || l == "parent") || o && (l == "buffer" || l == "byteLength" || l == "byteOffset") || uA(l, u))) && s.push(l);
            return s
        }
        Zc.exports = dA
    });
    var Zr = f((p1, Jc) => {
        var pA = Object.prototype;

        function gA(e) {
            var t = e && e.constructor,
                r = typeof t == "function" && t.prototype || pA;
            return e === r
        }
        Jc.exports = gA
    });
    var tl = f((g1, el) => {
        var hA = Jn(),
            EA = hA(Object.keys, Object);
        el.exports = EA
    });
    var Jr = f((h1, rl) => {
        var vA = Zr(),
            yA = tl(),
            mA = Object.prototype,
            _A = mA.hasOwnProperty;

        function IA(e) {
            if (!vA(e)) return yA(e);
            var t = [];
            for (var r in Object(e)) _A.call(e, r) && r != "constructor" && t.push(r);
            return t
        }
        rl.exports = IA
    });
    var vt = f((E1, nl) => {
        var TA = yi(),
            bA = $r();

        function AA(e) {
            return e != null && bA(e.length) && !TA(e)
        }
        nl.exports = AA
    });
    var lr = f((v1, il) => {
        var wA = xi(),
            SA = Jr(),
            OA = vt();

        function xA(e) {
            return OA(e) ? wA(e) : SA(e)
        }
        il.exports = xA
    });
    var al = f((y1, ol) => {
        var RA = Ai(),
            CA = Si(),
            LA = lr();

        function PA(e) {
            return RA(e, LA, CA)
        }
        ol.exports = PA
    });
    var cl = f((m1, ul) => {
        var sl = al(),
            NA = 1,
            DA = Object.prototype,
            MA = DA.hasOwnProperty;

        function FA(e, t, r, n, i, o) {
            var a = r & NA,
                s = sl(e),
                u = s.length,
                l = sl(t),
                v = l.length;
            if (u != v && !a) return !1;
            for (var d = u; d--;) {
                var p = s[d];
                if (!(a ? p in t : MA.call(t, p))) return !1
            }
            var h = o.get(e),
                I = o.get(t);
            if (h && I) return h == t && I == e;
            var _ = !0;
            o.set(e, t), o.set(t, e);
            for (var A = a; ++d < u;) {
                p = s[d];
                var m = e[p],
                    R = t[p];
                if (n) var w = a ? n(R, m, p, t, e, o) : n(m, R, p, e, t, o);
                if (!(w === void 0 ? m === R || i(m, R, r, n, o) : w)) {
                    _ = !1;
                    break
                }
                A || (A = p == "constructor")
            }
            if (_ && !A) {
                var P = e.constructor,
                    N = t.constructor;
                P != N && "constructor" in e && "constructor" in t && !(typeof P == "function" && P instanceof P && typeof N == "function" && N instanceof N) && (_ = !1)
            }
            return o.delete(e), o.delete(t), _
        }
        ul.exports = FA
    });
    var fl = f((_1, ll) => {
        var qA = ct(),
            kA = Ve(),
            XA = qA(kA, "DataView");
        ll.exports = XA
    });
    var pl = f((I1, dl) => {
        var GA = ct(),
            VA = Ve(),
            UA = GA(VA, "Promise");
        dl.exports = UA
    });
    var hl = f((T1, gl) => {
        var BA = ct(),
            HA = Ve(),
            WA = BA(HA, "Set");
        gl.exports = WA
    });
    var Ri = f((b1, El) => {
        var zA = ct(),
            KA = Ve(),
            jA = zA(KA, "WeakMap");
        El.exports = jA
    });
    var en = f((A1, bl) => {
        var Ci = fl(),
            Li = Hr(),
            Pi = pl(),
            Ni = hl(),
            Di = Ri(),
            Tl = ut(),
            Ft = _i(),
            vl = "[object Map]",
            YA = "[object Object]",
            yl = "[object Promise]",
            ml = "[object Set]",
            _l = "[object WeakMap]",
            Il = "[object DataView]",
            $A = Ft(Ci),
            QA = Ft(Li),
            ZA = Ft(Pi),
            JA = Ft(Ni),
            e0 = Ft(Di),
            yt = Tl;
        (Ci && yt(new Ci(new ArrayBuffer(1))) != Il || Li && yt(new Li) != vl || Pi && yt(Pi.resolve()) != yl || Ni && yt(new Ni) != ml || Di && yt(new Di) != _l) && (yt = function(e) {
            var t = Tl(e),
                r = t == YA ? e.constructor : void 0,
                n = r ? Ft(r) : "";
            if (n) switch (n) {
                case $A:
                    return Il;
                case QA:
                    return vl;
                case ZA:
                    return yl;
                case JA:
                    return ml;
                case e0:
                    return _l
            }
            return t
        });
        bl.exports = yt
    });
    var Ll = f((w1, Cl) => {
        var Mi = Ii(),
            t0 = Ti(),
            r0 = _c(),
            n0 = cl(),
            Al = en(),
            wl = Te(),
            Sl = jr(),
            i0 = Qr(),
            o0 = 1,
            Ol = "[object Arguments]",
            xl = "[object Array]",
            tn = "[object Object]",
            a0 = Object.prototype,
            Rl = a0.hasOwnProperty;

        function s0(e, t, r, n, i, o) {
            var a = wl(e),
                s = wl(t),
                u = a ? xl : Al(e),
                l = s ? xl : Al(t);
            u = u == Ol ? tn : u, l = l == Ol ? tn : l;
            var v = u == tn,
                d = l == tn,
                p = u == l;
            if (p && Sl(e)) {
                if (!Sl(t)) return !1;
                a = !0, v = !1
            }
            if (p && !v) return o || (o = new Mi), a || i0(e) ? t0(e, t, r, n, i, o) : r0(e, t, u, r, n, i, o);
            if (!(r & o0)) {
                var h = v && Rl.call(e, "__wrapped__"),
                    I = d && Rl.call(t, "__wrapped__");
                if (h || I) {
                    var _ = h ? e.value() : e,
                        A = I ? t.value() : t;
                    return o || (o = new Mi), i(_, A, r, n, o)
                }
            }
            return p ? (o || (o = new Mi), n0(e, t, r, n, i, o)) : !1
        }
        Cl.exports = s0
    });
    var Fi = f((S1, Dl) => {
        var u0 = Ll(),
            Pl = rt();

        function Nl(e, t, r, n, i) {
            return e === t ? !0 : e == null || t == null || !Pl(e) && !Pl(t) ? e !== e && t !== t : u0(e, t, r, n, Nl, i)
        }
        Dl.exports = Nl
    });
    var Fl = f((O1, Ml) => {
        var c0 = Ii(),
            l0 = Fi(),
            f0 = 1,
            d0 = 2;

        function p0(e, t, r, n) {
            var i = r.length,
                o = i,
                a = !n;
            if (e == null) return !o;
            for (e = Object(e); i--;) {
                var s = r[i];
                if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1
            }
            for (; ++i < o;) {
                s = r[i];
                var u = s[0],
                    l = e[u],
                    v = s[1];
                if (a && s[2]) {
                    if (l === void 0 && !(u in e)) return !1
                } else {
                    var d = new c0;
                    if (n) var p = n(l, v, u, e, t, d);
                    if (!(p === void 0 ? l0(v, l, f0 | d0, n, d) : p)) return !1
                }
            }
            return !0
        }
        Ml.exports = p0
    });
    var qi = f((x1, ql) => {
        var g0 = $e();

        function h0(e) {
            return e === e && !g0(e)
        }
        ql.exports = h0
    });
    var Xl = f((R1, kl) => {
        var E0 = qi(),
            v0 = lr();

        function y0(e) {
            for (var t = v0(e), r = t.length; r--;) {
                var n = t[r],
                    i = e[n];
                t[r] = [n, i, E0(i)]
            }
            return t
        }
        kl.exports = y0
    });
    var ki = f((C1, Gl) => {
        function m0(e, t) {
            return function(r) {
                return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
            }
        }
        Gl.exports = m0
    });
    var Ul = f((L1, Vl) => {
        var _0 = Fl(),
            I0 = Xl(),
            T0 = ki();

        function b0(e) {
            var t = I0(e);
            return t.length == 1 && t[0][2] ? T0(t[0][0], t[0][1]) : function(r) {
                return r === e || _0(r, e, t)
            }
        }
        Vl.exports = b0
    });
    var fr = f((P1, Bl) => {
        var A0 = ut(),
            w0 = rt(),
            S0 = "[object Symbol]";

        function O0(e) {
            return typeof e == "symbol" || w0(e) && A0(e) == S0
        }
        Bl.exports = O0
    });
    var rn = f((N1, Hl) => {
        var x0 = Te(),
            R0 = fr(),
            C0 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            L0 = /^\w*$/;

        function P0(e, t) {
            if (x0(e)) return !1;
            var r = typeof e;
            return r == "number" || r == "symbol" || r == "boolean" || e == null || R0(e) ? !0 : L0.test(e) || !C0.test(e) || t != null && e in Object(t)
        }
        Hl.exports = P0
    });
    var Kl = f((D1, zl) => {
        var Wl = Wr(),
            N0 = "Expected a function";

        function Xi(e, t) {
            if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(N0);
            var r = function() {
                var n = arguments,
                    i = t ? t.apply(this, n) : n[0],
                    o = r.cache;
                if (o.has(i)) return o.get(i);
                var a = e.apply(this, n);
                return r.cache = o.set(i, a) || o, a
            };
            return r.cache = new(Xi.Cache || Wl), r
        }
        Xi.Cache = Wl;
        zl.exports = Xi
    });
    var Yl = f((M1, jl) => {
        var D0 = Kl(),
            M0 = 500;

        function F0(e) {
            var t = D0(e, function(n) {
                    return r.size === M0 && r.clear(), n
                }),
                r = t.cache;
            return t
        }
        jl.exports = F0
    });
    var Ql = f((F1, $l) => {
        var q0 = Yl(),
            k0 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            X0 = /\\(\\)?/g,
            G0 = q0(function(e) {
                var t = [];
                return e.charCodeAt(0) === 46 && t.push(""), e.replace(k0, function(r, n, i, o) {
                    t.push(i ? o.replace(X0, "$1") : n || r)
                }), t
            });
        $l.exports = G0
    });
    var Gi = f((q1, Zl) => {
        function V0(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n;) i[r] = t(e[r], r, e);
            return i
        }
        Zl.exports = V0
    });
    var of = f((k1, nf) => {
        var Jl = St(),
            U0 = Gi(),
            B0 = Te(),
            H0 = fr(),
            W0 = 1 / 0,
            ef = Jl ? Jl.prototype : void 0,
            tf = ef ? ef.toString : void 0;

        function rf(e) {
            if (typeof e == "string") return e;
            if (B0(e)) return U0(e, rf) + "";
            if (H0(e)) return tf ? tf.call(e) : "";
            var t = e + "";
            return t == "0" && 1 / e == -W0 ? "-0" : t
        }
        nf.exports = rf
    });
    var sf = f((X1, af) => {
        var z0 = of ();

        function K0(e) {
            return e == null ? "" : z0(e)
        }
        af.exports = K0
    });
    var dr = f((G1, uf) => {
        var j0 = Te(),
            Y0 = rn(),
            $0 = Ql(),
            Q0 = sf();

        function Z0(e, t) {
            return j0(e) ? e : Y0(e, t) ? [e] : $0(Q0(e))
        }
        uf.exports = Z0
    });
    var qt = f((V1, cf) => {
        var J0 = fr(),
            ew = 1 / 0;

        function tw(e) {
            if (typeof e == "string" || J0(e)) return e;
            var t = e + "";
            return t == "0" && 1 / e == -ew ? "-0" : t
        }
        cf.exports = tw
    });
    var nn = f((U1, lf) => {
        var rw = dr(),
            nw = qt();

        function iw(e, t) {
            t = rw(t, e);
            for (var r = 0, n = t.length; e != null && r < n;) e = e[nw(t[r++])];
            return r && r == n ? e : void 0
        }
        lf.exports = iw
    });
    var on = f((B1, ff) => {
        var ow = nn();

        function aw(e, t, r) {
            var n = e == null ? void 0 : ow(e, t);
            return n === void 0 ? r : n
        }
        ff.exports = aw
    });
    var pf = f((H1, df) => {
        function sw(e, t) {
            return e != null && t in Object(e)
        }
        df.exports = sw
    });
    var hf = f((W1, gf) => {
        var uw = dr(),
            cw = ar(),
            lw = Te(),
            fw = Yr(),
            dw = $r(),
            pw = qt();

        function gw(e, t, r) {
            t = uw(t, e);
            for (var n = -1, i = t.length, o = !1; ++n < i;) {
                var a = pw(t[n]);
                if (!(o = e != null && r(e, a))) break;
                e = e[a]
            }
            return o || ++n != i ? o : (i = e == null ? 0 : e.length, !!i && dw(i) && fw(a, i) && (lw(e) || cw(e)))
        }
        gf.exports = gw
    });
    var vf = f((z1, Ef) => {
        var hw = pf(),
            Ew = hf();

        function vw(e, t) {
            return e != null && Ew(e, t, hw)
        }
        Ef.exports = vw
    });
    var mf = f((K1, yf) => {
        var yw = Fi(),
            mw = on(),
            _w = vf(),
            Iw = rn(),
            Tw = qi(),
            bw = ki(),
            Aw = qt(),
            ww = 1,
            Sw = 2;

        function Ow(e, t) {
            return Iw(e) && Tw(t) ? bw(Aw(e), t) : function(r) {
                var n = mw(r, e);
                return n === void 0 && n === t ? _w(r, e) : yw(t, n, ww | Sw)
            }
        }
        yf.exports = Ow
    });
    var an = f((j1, _f) => {
        function xw(e) {
            return e
        }
        _f.exports = xw
    });
    var Vi = f((Y1, If) => {
        function Rw(e) {
            return function(t) {
                return t ? .[e]
            }
        }
        If.exports = Rw
    });
    var bf = f(($1, Tf) => {
        var Cw = nn();

        function Lw(e) {
            return function(t) {
                return Cw(t, e)
            }
        }
        Tf.exports = Lw
    });
    var wf = f((Q1, Af) => {
        var Pw = Vi(),
            Nw = bf(),
            Dw = rn(),
            Mw = qt();

        function Fw(e) {
            return Dw(e) ? Pw(Mw(e)) : Nw(e)
        }
        Af.exports = Fw
    });
    var lt = f((Z1, Sf) => {
        var qw = Ul(),
            kw = mf(),
            Xw = an(),
            Gw = Te(),
            Vw = wf();

        function Uw(e) {
            return typeof e == "function" ? e : e == null ? Xw : typeof e == "object" ? Gw(e) ? kw(e[0], e[1]) : qw(e) : Vw(e)
        }
        Sf.exports = Uw
    });
    var Ui = f((J1, Of) => {
        var Bw = lt(),
            Hw = vt(),
            Ww = lr();

        function zw(e) {
            return function(t, r, n) {
                var i = Object(t);
                if (!Hw(t)) {
                    var o = Bw(r, 3);
                    t = Ww(t), r = function(s) {
                        return o(i[s], s, i)
                    }
                }
                var a = e(t, r, n);
                return a > -1 ? i[o ? t[a] : a] : void 0
            }
        }
        Of.exports = zw
    });
    var Bi = f((eq, xf) => {
        function Kw(e, t, r, n) {
            for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i;)
                if (t(e[o], o, e)) return o;
            return -1
        }
        xf.exports = Kw
    });
    var Cf = f((tq, Rf) => {
        var jw = /\s/;

        function Yw(e) {
            for (var t = e.length; t-- && jw.test(e.charAt(t)););
            return t
        }
        Rf.exports = Yw
    });
    var Pf = f((rq, Lf) => {
        var $w = Cf(),
            Qw = /^\s+/;

        function Zw(e) {
            return e && e.slice(0, $w(e) + 1).replace(Qw, "")
        }
        Lf.exports = Zw
    });
    var sn = f((nq, Mf) => {
        var Jw = Pf(),
            Nf = $e(),
            eS = fr(),
            Df = 0 / 0,
            tS = /^[-+]0x[0-9a-f]+$/i,
            rS = /^0b[01]+$/i,
            nS = /^0o[0-7]+$/i,
            iS = parseInt;

        function oS(e) {
            if (typeof e == "number") return e;
            if (eS(e)) return Df;
            if (Nf(e)) {
                var t = typeof e.valueOf == "function" ? e.valueOf() : e;
                e = Nf(t) ? t + "" : t
            }
            if (typeof e != "string") return e === 0 ? e : +e;
            e = Jw(e);
            var r = rS.test(e);
            return r || nS.test(e) ? iS(e.slice(2), r ? 2 : 8) : tS.test(e) ? Df : +e
        }
        Mf.exports = oS
    });
    var kf = f((iq, qf) => {
        var aS = sn(),
            Ff = 1 / 0,
            sS = 17976931348623157e292;

        function uS(e) {
            if (!e) return e === 0 ? e : 0;
            if (e = aS(e), e === Ff || e === -Ff) {
                var t = e < 0 ? -1 : 1;
                return t * sS
            }
            return e === e ? e : 0
        }
        qf.exports = uS
    });
    var Hi = f((oq, Xf) => {
        var cS = kf();

        function lS(e) {
            var t = cS(e),
                r = t % 1;
            return t === t ? r ? t - r : t : 0
        }
        Xf.exports = lS
    });
    var Vf = f((aq, Gf) => {
        var fS = Bi(),
            dS = lt(),
            pS = Hi(),
            gS = Math.max;

        function hS(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n) return -1;
            var i = r == null ? 0 : pS(r);
            return i < 0 && (i = gS(n + i, 0)), fS(e, dS(t, 3), i)
        }
        Gf.exports = hS
    });
    var Wi = f((sq, Uf) => {
        var ES = Ui(),
            vS = Vf(),
            yS = ES(vS);
        Uf.exports = yS
    });
    var Wf = {};
    Ce(Wf, {
        ELEMENT_MATCHES: () => mS,
        FLEX_PREFIXED: () => zi,
        IS_BROWSER_ENV: () => Be,
        TRANSFORM_PREFIXED: () => ft,
        TRANSFORM_STYLE_PREFIXED: () => cn,
        withBrowser: () => un
    });
    var Hf, Be, un, mS, zi, ft, Bf, cn, ln = Ee(() => {
        "use strict";
        Hf = ue(Wi()), Be = typeof window < "u", un = (e, t) => Be ? e() : t, mS = un(() => (0, Hf.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype)), zi = un(() => {
            let e = document.createElement("i"),
                t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"],
                r = "";
            try {
                let {
                    length: n
                } = t;
                for (let i = 0; i < n; i++) {
                    let o = t[i];
                    if (e.style.display = o, e.style.display === o) return o
                }
                return r
            } catch {
                return r
            }
        }, "flex"), ft = un(() => {
            let e = document.createElement("i");
            if (e.style.transform == null) {
                let t = ["Webkit", "Moz", "ms"],
                    r = "Transform",
                    {
                        length: n
                    } = t;
                for (let i = 0; i < n; i++) {
                    let o = t[i] + r;
                    if (e.style[o] !== void 0) return o
                }
            }
            return "transform"
        }, "transform"), Bf = ft.split("transform")[0], cn = Bf ? Bf + "TransformStyle" : "transformStyle"
    });
    var Ki = f((uq, $f) => {
        var _S = 4,
            IS = .001,
            TS = 1e-7,
            bS = 10,
            pr = 11,
            fn = 1 / (pr - 1),
            AS = typeof Float32Array == "function";

        function zf(e, t) {
            return 1 - 3 * t + 3 * e
        }

        function Kf(e, t) {
            return 3 * t - 6 * e
        }

        function jf(e) {
            return 3 * e
        }

        function dn(e, t, r) {
            return ((zf(t, r) * e + Kf(t, r)) * e + jf(t)) * e
        }

        function Yf(e, t, r) {
            return 3 * zf(t, r) * e * e + 2 * Kf(t, r) * e + jf(t)
        }

        function wS(e, t, r, n, i) {
            var o, a, s = 0;
            do a = t + (r - t) / 2, o = dn(a, n, i) - e, o > 0 ? r = a : t = a; while (Math.abs(o) > TS && ++s < bS);
            return a
        }

        function SS(e, t, r, n) {
            for (var i = 0; i < _S; ++i) {
                var o = Yf(t, r, n);
                if (o === 0) return t;
                var a = dn(t, r, n) - e;
                t -= a / o
            }
            return t
        }
        $f.exports = function(t, r, n, i) {
            if (!(0 <= t && t <= 1 && 0 <= n && n <= 1)) throw new Error("bezier x values must be in [0, 1] range");
            var o = AS ? new Float32Array(pr) : new Array(pr);
            if (t !== r || n !== i)
                for (var a = 0; a < pr; ++a) o[a] = dn(a * fn, t, n);

            function s(u) {
                for (var l = 0, v = 1, d = pr - 1; v !== d && o[v] <= u; ++v) l += fn;
                --v;
                var p = (u - o[v]) / (o[v + 1] - o[v]),
                    h = l + p * fn,
                    I = Yf(h, t, n);
                return I >= IS ? SS(u, h, t, n) : I === 0 ? h : wS(u, l, l + fn, t, n)
            }
            return function(l) {
                return t === r && n === i ? l : l === 0 ? 0 : l === 1 ? 1 : dn(s(l), r, i)
            }
        }
    });
    var hr = {};
    Ce(hr, {
        bounce: () => uO,
        bouncePast: () => cO,
        ease: () => OS,
        easeIn: () => xS,
        easeInOut: () => CS,
        easeOut: () => RS,
        inBack: () => JS,
        inCirc: () => YS,
        inCubic: () => DS,
        inElastic: () => rO,
        inExpo: () => zS,
        inOutBack: () => tO,
        inOutCirc: () => QS,
        inOutCubic: () => FS,
        inOutElastic: () => iO,
        inOutExpo: () => jS,
        inOutQuad: () => NS,
        inOutQuart: () => XS,
        inOutQuint: () => US,
        inOutSine: () => WS,
        inQuad: () => LS,
        inQuart: () => qS,
        inQuint: () => GS,
        inSine: () => BS,
        outBack: () => eO,
        outBounce: () => ZS,
        outCirc: () => $S,
        outCubic: () => MS,
        outElastic: () => nO,
        outExpo: () => KS,
        outQuad: () => PS,
        outQuart: () => kS,
        outQuint: () => VS,
        outSine: () => HS,
        swingFrom: () => aO,
        swingFromTo: () => oO,
        swingTo: () => sO
    });

    function LS(e) {
        return Math.pow(e, 2)
    }

    function PS(e) {
        return -(Math.pow(e - 1, 2) - 1)
    }

    function NS(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
    }

    function DS(e) {
        return Math.pow(e, 3)
    }

    function MS(e) {
        return Math.pow(e - 1, 3) + 1
    }

    function FS(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
    }

    function qS(e) {
        return Math.pow(e, 4)
    }

    function kS(e) {
        return -(Math.pow(e - 1, 4) - 1)
    }

    function XS(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
    }

    function GS(e) {
        return Math.pow(e, 5)
    }

    function VS(e) {
        return Math.pow(e - 1, 5) + 1
    }

    function US(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
    }

    function BS(e) {
        return -Math.cos(e * (Math.PI / 2)) + 1
    }

    function HS(e) {
        return Math.sin(e * (Math.PI / 2))
    }

    function WS(e) {
        return -.5 * (Math.cos(Math.PI * e) - 1)
    }

    function zS(e) {
        return e === 0 ? 0 : Math.pow(2, 10 * (e - 1))
    }

    function KS(e) {
        return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1
    }

    function jS(e) {
        return e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
    }

    function YS(e) {
        return -(Math.sqrt(1 - e * e) - 1)
    }

    function $S(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2))
    }

    function QS(e) {
        return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
    }

    function ZS(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }

    function JS(e) {
        let t = nt;
        return e * e * ((t + 1) * e - t)
    }

    function eO(e) {
        let t = nt;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }

    function tO(e) {
        let t = nt;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }

    function rO(e) {
        let t = nt,
            r = 0,
            n = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)))
    }

    function nO(e) {
        let t = nt,
            r = 0,
            n = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / r) + 1)
    }

    function iO(e) {
        let t = nt,
            r = 0,
            n = 1;
        return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (r || (r = .3 * 1.5), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), e < 1 ? -.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r) * .5 + 1)
    }

    function oO(e) {
        let t = nt;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }

    function aO(e) {
        let t = nt;
        return e * e * ((t + 1) * e - t)
    }

    function sO(e) {
        let t = nt;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }

    function uO(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }

    function cO(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
    }
    var gr, nt, OS, xS, RS, CS, ji = Ee(() => {
        "use strict";
        gr = ue(Ki()), nt = 1.70158, OS = (0, gr.default)(.25, .1, .25, 1), xS = (0, gr.default)(.42, 0, 1, 1), RS = (0, gr.default)(0, 0, .58, 1), CS = (0, gr.default)(.42, 0, .58, 1)
    });
    var Zf = {};
    Ce(Zf, {
        applyEasing: () => fO,
        createBezierEasing: () => lO,
        optimizeFloat: () => Er
    });

    function Er(e, t = 5, r = 10) {
        let n = Math.pow(r, t),
            i = Number(Math.round(e * n) / n);
        return Math.abs(i) > 1e-4 ? i : 0
    }

    function lO(e) {
        return (0, Qf.default)(...e)
    }

    function fO(e, t, r) {
        return t === 0 ? 0 : t === 1 ? 1 : Er(r ? t > 0 ? r(t) : t : t > 0 && e && hr[e] ? hr[e](t) : t)
    }
    var Qf, Yi = Ee(() => {
        "use strict";
        ji();
        Qf = ue(Ki())
    });
    var td = {};
    Ce(td, {
        createElementState: () => ed,
        ixElements: () => wO,
        mergeActionState: () => $i
    });

    function ed(e, t, r, n, i) {
        let o = r === dO ? (0, kt.getIn)(i, ["config", "target", "objectId"]) : null;
        return (0, kt.mergeIn)(e, [n], {
            id: n,
            ref: t,
            refId: o,
            refType: r
        })
    }

    function $i(e, t, r, n, i) {
        let o = OO(i);
        return (0, kt.mergeIn)(e, [t, AO, r], n, o)
    }

    function OO(e) {
        let {
            config: t
        } = e;
        return SO.reduce((r, n) => {
            let i = n[0],
                o = n[1],
                a = t[i],
                s = t[o];
            return a != null && s != null && (r[o] = s), r
        }, {})
    }
    var kt, lq, dO, fq, pO, gO, hO, EO, vO, yO, mO, _O, IO, TO, bO, Jf, AO, wO, SO, rd = Ee(() => {
        "use strict";
        kt = ue(Rt());
        Pe();
        ({
            HTML_ELEMENT: lq,
            PLAIN_OBJECT: dO,
            ABSTRACT_NODE: fq,
            CONFIG_X_VALUE: pO,
            CONFIG_Y_VALUE: gO,
            CONFIG_Z_VALUE: hO,
            CONFIG_VALUE: EO,
            CONFIG_X_UNIT: vO,
            CONFIG_Y_UNIT: yO,
            CONFIG_Z_UNIT: mO,
            CONFIG_UNIT: _O
        } = Ae), {
            IX2_SESSION_STOPPED: IO,
            IX2_INSTANCE_ADDED: TO,
            IX2_ELEMENT_STATE_CHANGED: bO
        } = Ie, Jf = {}, AO = "refState", wO = (e = Jf, t = {}) => {
            switch (t.type) {
                case IO:
                    return Jf;
                case TO:
                    {
                        let {
                            elementId: r,
                            element: n,
                            origin: i,
                            actionItem: o,
                            refType: a
                        } = t.payload,
                        {
                            actionTypeId: s
                        } = o,
                        u = e;
                        return (0, kt.getIn)(u, [r, n]) !== n && (u = ed(u, n, a, r, o)),
                        $i(u, r, s, i, o)
                    }
                case bO:
                    {
                        let {
                            elementId: r,
                            actionTypeId: n,
                            current: i,
                            actionItem: o
                        } = t.payload;
                        return $i(e, r, n, i, o)
                    }
                default:
                    return e
            }
        };
        SO = [
            [pO, vO],
            [gO, yO],
            [hO, mO],
            [EO, _O]
        ]
    });
    var nd = f(Qi => {
        "use strict";
        Object.defineProperty(Qi, "__esModule", {
            value: !0
        });

        function xO(e, t) {
            for (var r in t) Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
        }
        xO(Qi, {
            clearPlugin: function() {
                return MO
            },
            createPluginInstance: function() {
                return NO
            },
            getPluginConfig: function() {
                return RO
            },
            getPluginDestination: function() {
                return PO
            },
            getPluginDuration: function() {
                return CO
            },
            getPluginOrigin: function() {
                return LO
            },
            renderPlugin: function() {
                return DO
            }
        });
        var RO = e => e.value,
            CO = (e, t) => {
                if (t.config.duration !== "auto") return null;
                let r = parseFloat(e.getAttribute("data-duration"));
                return r > 0 ? r * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3
            },
            LO = e => e || {
                value: 0
            },
            PO = e => ({
                value: e.value
            }),
            NO = e => {
                let t = window.Webflow.require("lottie").createInstance(e);
                return t.stop(), t.setSubframe(!0), t
            },
            DO = (e, t, r) => {
                if (!e) return;
                let n = t[r.actionTypeId].value / 100;
                e.goToFrame(e.frames * n)
            },
            MO = e => {
                window.Webflow.require("lottie").createInstance(e).stop()
            }
    });
    var od = f(Zi => {
        "use strict";
        Object.defineProperty(Zi, "__esModule", {
            value: !0
        });

        function FO(e, t) {
            for (var r in t) Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
        }
        FO(Zi, {
            clearPlugin: function() {
                return zO
            },
            createPluginInstance: function() {
                return HO
            },
            getPluginConfig: function() {
                return GO
            },
            getPluginDestination: function() {
                return BO
            },
            getPluginDuration: function() {
                return VO
            },
            getPluginOrigin: function() {
                return UO
            },
            renderPlugin: function() {
                return WO
            }
        });
        var qO = e => document.querySelector(`[data-w-id="${e}"]`),
            kO = () => window.Webflow.require("spline"),
            XO = (e, t) => e.filter(r => !t.includes(r)),
            GO = (e, t) => e.value[t],
            VO = () => null,
            id = Object.freeze({
                positionX: 0,
                positionY: 0,
                positionZ: 0,
                rotationX: 0,
                rotationY: 0,
                rotationZ: 0,
                scaleX: 1,
                scaleY: 1,
                scaleZ: 1
            }),
            UO = (e, t) => {
                let r = t.config.value,
                    n = Object.keys(r);
                if (e) {
                    let o = Object.keys(e),
                        a = XO(n, o);
                    return a.length ? a.reduce((u, l) => (u[l] = id[l], u), e) : e
                }
                return n.reduce((o, a) => (o[a] = id[a], o), {})
            },
            BO = e => e.value,
            HO = (e, t) => {
                let r = t ? .config ? .target ? .pluginElement;
                return r ? qO(r) : null
            },
            WO = (e, t, r) => {
                let n = kO(),
                    i = n.getInstance(e),
                    o = r.config.target.objectId,
                    a = s => {
                        if (!s) throw new Error("Invalid spline app passed to renderSpline");
                        let u = o && s.findObjectById(o);
                        if (!u) return;
                        let {
                            PLUGIN_SPLINE: l
                        } = t;
                        l.positionX != null && (u.position.x = l.positionX), l.positionY != null && (u.position.y = l.positionY), l.positionZ != null && (u.position.z = l.positionZ), l.rotationX != null && (u.rotation.x = l.rotationX), l.rotationY != null && (u.rotation.y = l.rotationY), l.rotationZ != null && (u.rotation.z = l.rotationZ), l.scaleX != null && (u.scale.x = l.scaleX), l.scaleY != null && (u.scale.y = l.scaleY), l.scaleZ != null && (u.scale.z = l.scaleZ)
                    };
                i ? a(i.spline) : n.setLoadHandler(e, a)
            },
            zO = () => null
    });
    var eo = f(Ji => {
        "use strict";
        Object.defineProperty(Ji, "__esModule", {
            value: !0
        });
        Object.defineProperty(Ji, "normalizeColor", {
            enumerable: !0,
            get: function() {
                return KO
            }
        });
        var ad = {
            aliceblue: "#F0F8FF",
            antiquewhite: "#FAEBD7",
            aqua: "#00FFFF",
            aquamarine: "#7FFFD4",
            azure: "#F0FFFF",
            beige: "#F5F5DC",
            bisque: "#FFE4C4",
            black: "#000000",
            blanchedalmond: "#FFEBCD",
            blue: "#0000FF",
            blueviolet: "#8A2BE2",
            brown: "#A52A2A",
            burlywood: "#DEB887",
            cadetblue: "#5F9EA0",
            chartreuse: "#7FFF00",
            chocolate: "#D2691E",
            coral: "#FF7F50",
            cornflowerblue: "#6495ED",
            cornsilk: "#FFF8DC",
            crimson: "#DC143C",
            cyan: "#00FFFF",
            darkblue: "#00008B",
            darkcyan: "#008B8B",
            darkgoldenrod: "#B8860B",
            darkgray: "#A9A9A9",
            darkgreen: "#006400",
            darkgrey: "#A9A9A9",
            darkkhaki: "#BDB76B",
            darkmagenta: "#8B008B",
            darkolivegreen: "#556B2F",
            darkorange: "#FF8C00",
            darkorchid: "#9932CC",
            darkred: "#8B0000",
            darksalmon: "#E9967A",
            darkseagreen: "#8FBC8F",
            darkslateblue: "#483D8B",
            darkslategray: "#2F4F4F",
            darkslategrey: "#2F4F4F",
            darkturquoise: "#00CED1",
            darkviolet: "#9400D3",
            deeppink: "#FF1493",
            deepskyblue: "#00BFFF",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1E90FF",
            firebrick: "#B22222",
            floralwhite: "#FFFAF0",
            forestgreen: "#228B22",
            fuchsia: "#FF00FF",
            gainsboro: "#DCDCDC",
            ghostwhite: "#F8F8FF",
            gold: "#FFD700",
            goldenrod: "#DAA520",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#ADFF2F",
            grey: "#808080",
            honeydew: "#F0FFF0",
            hotpink: "#FF69B4",
            indianred: "#CD5C5C",
            indigo: "#4B0082",
            ivory: "#FFFFF0",
            khaki: "#F0E68C",
            lavender: "#E6E6FA",
            lavenderblush: "#FFF0F5",
            lawngreen: "#7CFC00",
            lemonchiffon: "#FFFACD",
            lightblue: "#ADD8E6",
            lightcoral: "#F08080",
            lightcyan: "#E0FFFF",
            lightgoldenrodyellow: "#FAFAD2",
            lightgray: "#D3D3D3",
            lightgreen: "#90EE90",
            lightgrey: "#D3D3D3",
            lightpink: "#FFB6C1",
            lightsalmon: "#FFA07A",
            lightseagreen: "#20B2AA",
            lightskyblue: "#87CEFA",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#B0C4DE",
            lightyellow: "#FFFFE0",
            lime: "#00FF00",
            limegreen: "#32CD32",
            linen: "#FAF0E6",
            magenta: "#FF00FF",
            maroon: "#800000",
            mediumaquamarine: "#66CDAA",
            mediumblue: "#0000CD",
            mediumorchid: "#BA55D3",
            mediumpurple: "#9370DB",
            mediumseagreen: "#3CB371",
            mediumslateblue: "#7B68EE",
            mediumspringgreen: "#00FA9A",
            mediumturquoise: "#48D1CC",
            mediumvioletred: "#C71585",
            midnightblue: "#191970",
            mintcream: "#F5FFFA",
            mistyrose: "#FFE4E1",
            moccasin: "#FFE4B5",
            navajowhite: "#FFDEAD",
            navy: "#000080",
            oldlace: "#FDF5E6",
            olive: "#808000",
            olivedrab: "#6B8E23",
            orange: "#FFA500",
            orangered: "#FF4500",
            orchid: "#DA70D6",
            palegoldenrod: "#EEE8AA",
            palegreen: "#98FB98",
            paleturquoise: "#AFEEEE",
            palevioletred: "#DB7093",
            papayawhip: "#FFEFD5",
            peachpuff: "#FFDAB9",
            peru: "#CD853F",
            pink: "#FFC0CB",
            plum: "#DDA0DD",
            powderblue: "#B0E0E6",
            purple: "#800080",
            rebeccapurple: "#663399",
            red: "#FF0000",
            rosybrown: "#BC8F8F",
            royalblue: "#4169E1",
            saddlebrown: "#8B4513",
            salmon: "#FA8072",
            sandybrown: "#F4A460",
            seagreen: "#2E8B57",
            seashell: "#FFF5EE",
            sienna: "#A0522D",
            silver: "#C0C0C0",
            skyblue: "#87CEEB",
            slateblue: "#6A5ACD",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#FFFAFA",
            springgreen: "#00FF7F",
            steelblue: "#4682B4",
            tan: "#D2B48C",
            teal: "#008080",
            thistle: "#D8BFD8",
            tomato: "#FF6347",
            turquoise: "#40E0D0",
            violet: "#EE82EE",
            wheat: "#F5DEB3",
            white: "#FFFFFF",
            whitesmoke: "#F5F5F5",
            yellow: "#FFFF00",
            yellowgreen: "#9ACD32"
        };

        function KO(e) {
            let t, r, n, i = 1,
                o = e.replace(/\s/g, "").toLowerCase(),
                s = (typeof ad[o] == "string" ? ad[o].toLowerCase() : null) || o;
            if (s.startsWith("#")) {
                let u = s.substring(1);
                u.length === 3 || u.length === 4 ? (t = parseInt(u[0] + u[0], 16), r = parseInt(u[1] + u[1], 16), n = parseInt(u[2] + u[2], 16), u.length === 4 && (i = parseInt(u[3] + u[3], 16) / 255)) : (u.length === 6 || u.length === 8) && (t = parseInt(u.substring(0, 2), 16), r = parseInt(u.substring(2, 4), 16), n = parseInt(u.substring(4, 6), 16), u.length === 8 && (i = parseInt(u.substring(6, 8), 16) / 255))
            } else if (s.startsWith("rgba")) {
                let u = s.match(/rgba\(([^)]+)\)/)[1].split(",");
                t = parseInt(u[0], 10), r = parseInt(u[1], 10), n = parseInt(u[2], 10), i = parseFloat(u[3])
            } else if (s.startsWith("rgb")) {
                let u = s.match(/rgb\(([^)]+)\)/)[1].split(",");
                t = parseInt(u[0], 10), r = parseInt(u[1], 10), n = parseInt(u[2], 10)
            } else if (s.startsWith("hsla")) {
                let u = s.match(/hsla\(([^)]+)\)/)[1].split(","),
                    l = parseFloat(u[0]),
                    v = parseFloat(u[1].replace("%", "")) / 100,
                    d = parseFloat(u[2].replace("%", "")) / 100;
                i = parseFloat(u[3]);
                let p = (1 - Math.abs(2 * d - 1)) * v,
                    h = p * (1 - Math.abs(l / 60 % 2 - 1)),
                    I = d - p / 2,
                    _, A, m;
                l >= 0 && l < 60 ? (_ = p, A = h, m = 0) : l >= 60 && l < 120 ? (_ = h, A = p, m = 0) : l >= 120 && l < 180 ? (_ = 0, A = p, m = h) : l >= 180 && l < 240 ? (_ = 0, A = h, m = p) : l >= 240 && l < 300 ? (_ = h, A = 0, m = p) : (_ = p, A = 0, m = h), t = Math.round((_ + I) * 255), r = Math.round((A + I) * 255), n = Math.round((m + I) * 255)
            } else if (s.startsWith("hsl")) {
                let u = s.match(/hsl\(([^)]+)\)/)[1].split(","),
                    l = parseFloat(u[0]),
                    v = parseFloat(u[1].replace("%", "")) / 100,
                    d = parseFloat(u[2].replace("%", "")) / 100,
                    p = (1 - Math.abs(2 * d - 1)) * v,
                    h = p * (1 - Math.abs(l / 60 % 2 - 1)),
                    I = d - p / 2,
                    _, A, m;
                l >= 0 && l < 60 ? (_ = p, A = h, m = 0) : l >= 60 && l < 120 ? (_ = h, A = p, m = 0) : l >= 120 && l < 180 ? (_ = 0, A = p, m = h) : l >= 180 && l < 240 ? (_ = 0, A = h, m = p) : l >= 240 && l < 300 ? (_ = h, A = 0, m = p) : (_ = p, A = 0, m = h), t = Math.round((_ + I) * 255), r = Math.round((A + I) * 255), n = Math.round((m + I) * 255)
            }
            if (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n)) throw new Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`);
            return {
                red: t,
                green: r,
                blue: n,
                alpha: i
            }
        }
    });
    var sd = f(to => {
        "use strict";
        Object.defineProperty(to, "__esModule", {
            value: !0
        });

        function jO(e, t) {
            for (var r in t) Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
        }
        jO(to, {
            clearPlugin: function() {
                return rx
            },
            createPluginInstance: function() {
                return ex
            },
            getPluginConfig: function() {
                return $O
            },
            getPluginDestination: function() {
                return JO
            },
            getPluginDuration: function() {
                return QO
            },
            getPluginOrigin: function() {
                return ZO
            },
            renderPlugin: function() {
                return tx
            }
        });
        var YO = eo(),
            $O = (e, t) => e.value[t],
            QO = () => null,
            ZO = (e, t) => {
                if (e) return e;
                let r = t.config.value,
                    n = t.config.target.objectId,
                    i = getComputedStyle(document.documentElement).getPropertyValue(n);
                if (r.size != null) return {
                    size: parseInt(i, 10)
                };
                if (r.red != null && r.green != null && r.blue != null) return (0, YO.normalizeColor)(i)
            },
            JO = e => e.value,
            ex = () => null,
            tx = (e, t, r) => {
                let n = r.config.target.objectId,
                    i = r.config.value.unit,
                    {
                        PLUGIN_VARIABLE: o
                    } = t,
                    {
                        size: a,
                        red: s,
                        green: u,
                        blue: l,
                        alpha: v
                    } = o,
                    d;
                a != null && (d = a + i), s != null && l != null && u != null && v != null && (d = `rgba(${s}, ${u}, ${l}, ${v})`), d != null && document.documentElement.style.setProperty(n, d)
            },
            rx = (e, t) => {
                let r = t.config.target.objectId;
                document.documentElement.style.removeProperty(r)
            }
    });
    var cd = f(io => {
        "use strict";
        Object.defineProperty(io, "__esModule", {
            value: !0
        });
        Object.defineProperty(io, "pluginMethodMap", {
            enumerable: !0,
            get: function() {
                return ax
            }
        });
        var ro = (Pe(), ze(ps)),
            nx = no(nd()),
            ix = no(od()),
            ox = no(sd());

        function ud(e) {
            if (typeof WeakMap != "function") return null;
            var t = new WeakMap,
                r = new WeakMap;
            return (ud = function(n) {
                return n ? r : t
            })(e)
        }

        function no(e, t) {
            if (!t && e && e.__esModule) return e;
            if (e === null || typeof e != "object" && typeof e != "function") return {
                default: e
            };
            var r = ud(t);
            if (r && r.has(e)) return r.get(e);
            var n = {
                    __proto__: null
                },
                i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
                }
            return n.default = e, r && r.set(e, n), n
        }
        var ax = new Map([
            [ro.ActionTypeConsts.PLUGIN_LOTTIE, { ...nx
            }],
            [ro.ActionTypeConsts.PLUGIN_SPLINE, { ...ix
            }],
            [ro.ActionTypeConsts.PLUGIN_VARIABLE, { ...ox
            }]
        ])
    });
    var ld = {};
    Ce(ld, {
        clearPlugin: () => lo,
        createPluginInstance: () => ux,
        getPluginConfig: () => ao,
        getPluginDestination: () => uo,
        getPluginDuration: () => sx,
        getPluginOrigin: () => so,
        isPluginType: () => mt,
        renderPlugin: () => co
    });

    function mt(e) {
        return oo.pluginMethodMap.has(e)
    }
    var oo, _t, ao, so, sx, uo, ux, co, lo, fo = Ee(() => {
        "use strict";
        ln();
        oo = ue(cd());
        _t = e => t => {
            if (!Be) return () => null;
            let r = oo.pluginMethodMap.get(t);
            if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
            let n = r[e];
            if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
            return n
        }, ao = _t("getPluginConfig"), so = _t("getPluginOrigin"), sx = _t("getPluginDuration"), uo = _t("getPluginDestination"), ux = _t("createPluginInstance"), co = _t("renderPlugin"), lo = _t("clearPlugin")
    });
    var dd = f((yq, fd) => {
        function cx(e, t) {
            return e == null || e !== e ? t : e
        }
        fd.exports = cx
    });
    var gd = f((mq, pd) => {
        function lx(e, t, r, n) {
            var i = -1,
                o = e == null ? 0 : e.length;
            for (n && o && (r = e[++i]); ++i < o;) r = t(r, e[i], i, e);
            return r
        }
        pd.exports = lx
    });
    var Ed = f((_q, hd) => {
        function fx(e) {
            return function(t, r, n) {
                for (var i = -1, o = Object(t), a = n(t), s = a.length; s--;) {
                    var u = a[e ? s : ++i];
                    if (r(o[u], u, o) === !1) break
                }
                return t
            }
        }
        hd.exports = fx
    });
    var yd = f((Iq, vd) => {
        var dx = Ed(),
            px = dx();
        vd.exports = px
    });
    var po = f((Tq, md) => {
        var gx = yd(),
            hx = lr();

        function Ex(e, t) {
            return e && gx(e, t, hx)
        }
        md.exports = Ex
    });
    var Id = f((bq, _d) => {
        var vx = vt();

        function yx(e, t) {
            return function(r, n) {
                if (r == null) return r;
                if (!vx(r)) return e(r, n);
                for (var i = r.length, o = t ? i : -1, a = Object(r);
                    (t ? o-- : ++o < i) && n(a[o], o, a) !== !1;);
                return r
            }
        }
        _d.exports = yx
    });
    var go = f((Aq, Td) => {
        var mx = po(),
            _x = Id(),
            Ix = _x(mx);
        Td.exports = Ix
    });
    var Ad = f((wq, bd) => {
        function Tx(e, t, r, n, i) {
            return i(e, function(o, a, s) {
                r = n ? (n = !1, o) : t(r, o, a, s)
            }), r
        }
        bd.exports = Tx
    });
    var Sd = f((Sq, wd) => {
        var bx = gd(),
            Ax = go(),
            wx = lt(),
            Sx = Ad(),
            Ox = Te();

        function xx(e, t, r) {
            var n = Ox(e) ? bx : Sx,
                i = arguments.length < 3;
            return n(e, wx(t, 4), r, i, Ax)
        }
        wd.exports = xx
    });
    var xd = f((Oq, Od) => {
        var Rx = Bi(),
            Cx = lt(),
            Lx = Hi(),
            Px = Math.max,
            Nx = Math.min;

        function Dx(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n) return -1;
            var i = n - 1;
            return r !== void 0 && (i = Lx(r), i = r < 0 ? Px(n + i, 0) : Nx(i, n - 1)), Rx(e, Cx(t, 3), i, !0)
        }
        Od.exports = Dx
    });
    var Cd = f((xq, Rd) => {
        var Mx = Ui(),
            Fx = xd(),
            qx = Mx(Fx);
        Rd.exports = qx
    });

    function Ld(e, t) {
        return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
    }

    function kx(e, t) {
        if (Ld(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        let r = Object.keys(e),
            n = Object.keys(t);
        if (r.length !== n.length) return !1;
        for (let i = 0; i < r.length; i++)
            if (!Object.hasOwn(t, r[i]) || !Ld(e[r[i]], t[r[i]])) return !1;
        return !0
    }
    var ho, Pd = Ee(() => {
        "use strict";
        ho = kx
    });
    var $d = {};
    Ce($d, {
        cleanupHTMLElement: () => MR,
        clearAllStyles: () => DR,
        clearObjectCache: () => tR,
        getActionListProgress: () => qR,
        getAffectedElements: () => _o,
        getComputedStyle: () => cR,
        getDestinationValues: () => ER,
        getElementId: () => oR,
        getInstanceId: () => nR,
        getInstanceOrigin: () => dR,
        getItemConfigByKey: () => hR,
        getMaxDurationItemIndex: () => Yd,
        getNamespacedParameterId: () => GR,
        getRenderType: () => zd,
        getStyleProp: () => vR,
        mediaQueriesEqual: () => UR,
        observeStore: () => uR,
        reduceListToGroup: () => kR,
        reifyState: () => aR,
        renderHTMLElement: () => yR,
        shallowEqual: () => ho,
        shouldAllowMediaQuery: () => VR,
        shouldNamespaceEventParameter: () => XR,
        stringifyTarget: () => BR
    });

    function tR() {
        pn.clear()
    }

    function nR() {
        return "i" + rR++
    }

    function oR(e, t) {
        for (let r in e) {
            let n = e[r];
            if (n && n.ref === t) return n.id
        }
        return "e" + iR++
    }

    function aR({
        events: e,
        actionLists: t,
        site: r
    } = {}) {
        let n = (0, vn.default)(e, (a, s) => {
                let {
                    eventTypeId: u
                } = s;
                return a[u] || (a[u] = {}), a[u][s.id] = s, a
            }, {}),
            i = r && r.mediaQueries,
            o = [];
        return i ? o = i.map(a => a.key) : (i = [], console.warn("IX2 missing mediaQueries in site data")), {
            ixData: {
                events: e,
                actionLists: t,
                eventTypeMap: n,
                mediaQueries: i,
                mediaQueryKeys: o
            }
        }
    }

    function uR({
        store: e,
        select: t,
        onChange: r,
        comparator: n = sR
    }) {
        let {
            getState: i,
            subscribe: o
        } = e, a = o(u), s = t(i());

        function u() {
            let l = t(i());
            if (l == null) {
                a();
                return
            }
            n(l, s) || (s = l, r(s, e))
        }
        return a
    }

    function Md(e) {
        let t = typeof e;
        if (t === "string") return {
            id: e
        };
        if (e != null && t === "object") {
            let {
                id: r,
                objectId: n,
                selector: i,
                selectorGuids: o,
                appliesTo: a,
                useEventTarget: s
            } = e;
            return {
                id: r,
                objectId: n,
                selector: i,
                selectorGuids: o,
                appliesTo: a,
                useEventTarget: s
            }
        }
        return {}
    }

    function _o({
        config: e,
        event: t,
        eventTarget: r,
        elementRoot: n,
        elementApi: i
    }) {
        if (!i) throw new Error("IX2 missing elementApi");
        let {
            targets: o
        } = e;
        if (Array.isArray(o) && o.length > 0) return o.reduce((x, g) => x.concat(_o({
            config: {
                target: g
            },
            event: t,
            eventTarget: r,
            elementRoot: n,
            elementApi: i
        })), []);
        let {
            getValidDocument: a,
            getQuerySelector: s,
            queryDocument: u,
            getChildElements: l,
            getSiblingElements: v,
            matchSelector: d,
            elementContains: p,
            isSiblingNode: h
        } = i, {
            target: I
        } = e;
        if (!I) return [];
        let {
            id: _,
            objectId: A,
            selector: m,
            selectorGuids: R,
            appliesTo: w,
            useEventTarget: P
        } = Md(I);
        if (A) return [pn.has(A) ? pn.get(A) : pn.set(A, {}).get(A)];
        if (w === gi.PAGE) {
            let x = a(_);
            return x ? [x] : []
        }
        let L = (t ? .action ? .config ? .affectedElements ? ? {})[_ || m] || {},
            B = !!(L.id || L.selector),
            W, K, Q, k = t && s(Md(t.target));
        if (B ? (W = L.limitAffectedElements, K = k, Q = s(L)) : K = Q = s({
                id: _,
                selector: m,
                selectorGuids: R
            }), t && P) {
            let x = r && (Q || P === !0) ? [r] : u(k);
            if (Q) {
                if (P === Zx) return u(Q).filter(g => x.some(C => p(g, C)));
                if (P === Nd) return u(Q).filter(g => x.some(C => p(C, g)));
                if (P === Dd) return u(Q).filter(g => x.some(C => h(C, g)))
            }
            return x
        }
        return K == null || Q == null ? [] : Be && n ? u(Q).filter(x => n.contains(x)) : W === Nd ? u(K, Q) : W === Qx ? l(u(K)).filter(d(Q)) : W === Dd ? v(u(K)).filter(d(Q)) : u(Q)
    }

    function cR({
        element: e,
        actionItem: t
    }) {
        if (!Be) return {};
        let {
            actionTypeId: r
        } = t;
        switch (r) {
            case Bt:
            case Ht:
            case Wt:
            case zt:
            case mn:
                return window.getComputedStyle(e);
            default:
                return {}
        }
    }

    function dR(e, t = {}, r = {}, n, i) {
        let {
            getStyle: o
        } = i, {
            actionTypeId: a
        } = n;
        if (mt(a)) return so(a)(t[a], n);
        switch (n.actionTypeId) {
            case Gt:
            case Vt:
            case Ut:
            case _r:
                return t[n.actionTypeId] || Io[n.actionTypeId];
            case Ir:
                return lR(t[n.actionTypeId], n.config.filters);
            case Tr:
                return fR(t[n.actionTypeId], n.config.fontVariations);
            case Bd:
                return {
                    value: (0, it.default)(parseFloat(o(e, hn)), 1)
                };
            case Bt:
                {
                    let s = o(e, Qe),
                        u = o(e, Ze),
                        l, v;
                    return n.config.widthUnit === dt ? l = Fd.test(s) ? parseFloat(s) : parseFloat(r.width) : l = (0, it.default)(parseFloat(s), parseFloat(r.width)),
                    n.config.heightUnit === dt ? v = Fd.test(u) ? parseFloat(u) : parseFloat(r.height) : v = (0, it.default)(parseFloat(u), parseFloat(r.height)),
                    {
                        widthValue: l,
                        heightValue: v
                    }
                }
            case Ht:
            case Wt:
            case zt:
                return LR({
                    element: e,
                    actionTypeId: n.actionTypeId,
                    computedStyle: r,
                    getStyle: o
                });
            case mn:
                return {
                    value: (0, it.default)(o(e, En), r.display)
                };
            case eR:
                return t[n.actionTypeId] || {
                    value: 0
                };
            default:
                return
        }
    }

    function ER({
        element: e,
        actionItem: t,
        elementApi: r
    }) {
        if (mt(t.actionTypeId)) return uo(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
            case Gt:
            case Vt:
            case Ut:
            case _r:
                {
                    let {
                        xValue: n,
                        yValue: i,
                        zValue: o
                    } = t.config;
                    return {
                        xValue: n,
                        yValue: i,
                        zValue: o
                    }
                }
            case Bt:
                {
                    let {
                        getStyle: n,
                        setStyle: i,
                        getProperty: o
                    } = r,
                    {
                        widthUnit: a,
                        heightUnit: s
                    } = t.config,
                    {
                        widthValue: u,
                        heightValue: l
                    } = t.config;
                    if (!Be) return {
                        widthValue: u,
                        heightValue: l
                    };
                    if (a === dt) {
                        let v = n(e, Qe);
                        i(e, Qe, ""), u = o(e, "offsetWidth"), i(e, Qe, v)
                    }
                    if (s === dt) {
                        let v = n(e, Ze);
                        i(e, Ze, ""), l = o(e, "offsetHeight"), i(e, Ze, v)
                    }
                    return {
                        widthValue: u,
                        heightValue: l
                    }
                }
            case Ht:
            case Wt:
            case zt:
                {
                    let {
                        rValue: n,
                        gValue: i,
                        bValue: o,
                        aValue: a,
                        globalSwatchId: s
                    } = t.config;
                    if (s && s.startsWith("--")) {
                        let {
                            getStyle: u
                        } = r, l = u(e, s), v = (0, Xd.normalizeColor)(l);
                        return {
                            rValue: v.red,
                            gValue: v.green,
                            bValue: v.blue,
                            aValue: v.alpha
                        }
                    }
                    return {
                        rValue: n,
                        gValue: i,
                        bValue: o,
                        aValue: a
                    }
                }
            case Ir:
                return t.config.filters.reduce(pR, {});
            case Tr:
                return t.config.fontVariations.reduce(gR, {});
            default:
                {
                    let {
                        value: n
                    } = t.config;
                    return {
                        value: n
                    }
                }
        }
    }

    function zd(e) {
        if (/^TRANSFORM_/.test(e)) return Vd;
        if (/^STYLE_/.test(e)) return yo;
        if (/^GENERAL_/.test(e)) return vo;
        if (/^PLUGIN_/.test(e)) return Ud
    }

    function vR(e, t) {
        return e === yo ? t.replace("STYLE_", "").toLowerCase() : null
    }

    function yR(e, t, r, n, i, o, a, s, u) {
        switch (s) {
            case Vd:
                return bR(e, t, r, i, a);
            case yo:
                return PR(e, t, r, i, o, a);
            case vo:
                return NR(e, i, a);
            case Ud:
                {
                    let {
                        actionTypeId: l
                    } = i;
                    if (mt(l)) return co(l)(u, t, i)
                }
        }
    }

    function bR(e, t, r, n, i) {
        let o = TR.map(s => {
                let u = Io[s],
                    {
                        xValue: l = u.xValue,
                        yValue: v = u.yValue,
                        zValue: d = u.zValue,
                        xUnit: p = "",
                        yUnit: h = "",
                        zUnit: I = ""
                    } = t[s] || {};
                switch (s) {
                    case Gt:
                        return `${Vx}(${l}${p}, ${v}${h}, ${d}${I})`;
                    case Vt:
                        return `${Ux}(${l}${p}, ${v}${h}, ${d}${I})`;
                    case Ut:
                        return `${Bx}(${l}${p}) ${Hx}(${v}${h}) ${Wx}(${d}${I})`;
                    case _r:
                        return `${zx}(${l}${p}, ${v}${h})`;
                    default:
                        return ""
                }
            }).join(" "),
            {
                setStyle: a
            } = i;
        It(e, ft, i), a(e, ft, o), SR(n, r) && a(e, cn, Kx)
    }

    function AR(e, t, r, n) {
        let i = (0, vn.default)(t, (a, s, u) => `${a} ${u}(${s}${IR(u,r)})`, ""),
            {
                setStyle: o
            } = n;
        It(e, vr, n), o(e, vr, i)
    }

    function wR(e, t, r, n) {
        let i = (0, vn.default)(t, (a, s, u) => (a.push(`"${u}" ${s}`), a), []).join(", "),
            {
                setStyle: o
            } = n;
        It(e, yr, n), o(e, yr, i)
    }

    function SR({
        actionTypeId: e
    }, {
        xValue: t,
        yValue: r,
        zValue: n
    }) {
        return e === Gt && n !== void 0 || e === Vt && n !== void 0 || e === Ut && (t !== void 0 || r !== void 0)
    }

    function CR(e, t) {
        let r = e.exec(t);
        return r ? r[1] : ""
    }

    function LR({
        element: e,
        actionTypeId: t,
        computedStyle: r,
        getStyle: n
    }) {
        let i = mo[t],
            o = n(e, i),
            a = xR.test(o) ? o : r[i],
            s = CR(RR, a).split(mr);
        return {
            rValue: (0, it.default)(parseInt(s[0], 10), 255),
            gValue: (0, it.default)(parseInt(s[1], 10), 255),
            bValue: (0, it.default)(parseInt(s[2], 10), 255),
            aValue: (0, it.default)(parseFloat(s[3]), 1)
        }
    }

    function PR(e, t, r, n, i, o) {
        let {
            setStyle: a
        } = o;
        switch (n.actionTypeId) {
            case Bt:
                {
                    let {
                        widthUnit: s = "",
                        heightUnit: u = ""
                    } = n.config,
                    {
                        widthValue: l,
                        heightValue: v
                    } = r;l !== void 0 && (s === dt && (s = "px"), It(e, Qe, o), a(e, Qe, l + s)),
                    v !== void 0 && (u === dt && (u = "px"), It(e, Ze, o), a(e, Ze, v + u));
                    break
                }
            case Ir:
                {
                    AR(e, r, n.config, o);
                    break
                }
            case Tr:
                {
                    wR(e, r, n.config, o);
                    break
                }
            case Ht:
            case Wt:
            case zt:
                {
                    let s = mo[n.actionTypeId],
                        u = Math.round(r.rValue),
                        l = Math.round(r.gValue),
                        v = Math.round(r.bValue),
                        d = r.aValue;It(e, s, o),
                    a(e, s, d >= 1 ? `rgb(${u},${l},${v})` : `rgba(${u},${l},${v},${d})`);
                    break
                }
            default:
                {
                    let {
                        unit: s = ""
                    } = n.config;It(e, i, o),
                    a(e, i, r.value + s);
                    break
                }
        }
    }

    function NR(e, t, r) {
        let {
            setStyle: n
        } = r;
        switch (t.actionTypeId) {
            case mn:
                {
                    let {
                        value: i
                    } = t.config;i === jx && Be ? n(e, En, zi) : n(e, En, i);
                    return
                }
        }
    }

    function It(e, t, r) {
        if (!Be) return;
        let n = Wd[t];
        if (!n) return;
        let {
            getStyle: i,
            setStyle: o
        } = r, a = i(e, Xt);
        if (!a) {
            o(e, Xt, n);
            return
        }
        let s = a.split(mr).map(Hd);
        s.indexOf(n) === -1 && o(e, Xt, s.concat(n).join(mr))
    }

    function Kd(e, t, r) {
        if (!Be) return;
        let n = Wd[t];
        if (!n) return;
        let {
            getStyle: i,
            setStyle: o
        } = r, a = i(e, Xt);
        !a || a.indexOf(n) === -1 || o(e, Xt, a.split(mr).map(Hd).filter(s => s !== n).join(mr))
    }

    function DR({
        store: e,
        elementApi: t
    }) {
        let {
            ixData: r
        } = e.getState(), {
            events: n = {},
            actionLists: i = {}
        } = r;
        Object.keys(n).forEach(o => {
            let a = n[o],
                {
                    config: s
                } = a.action,
                {
                    actionListId: u
                } = s,
                l = i[u];
            l && qd({
                actionList: l,
                event: a,
                elementApi: t
            })
        }), Object.keys(i).forEach(o => {
            qd({
                actionList: i[o],
                elementApi: t
            })
        })
    }

    function qd({
        actionList: e = {},
        event: t,
        elementApi: r
    }) {
        let {
            actionItemGroups: n,
            continuousParameterGroups: i
        } = e;
        n && n.forEach(o => {
            kd({
                actionGroup: o,
                event: t,
                elementApi: r
            })
        }), i && i.forEach(o => {
            let {
                continuousActionGroups: a
            } = o;
            a.forEach(s => {
                kd({
                    actionGroup: s,
                    event: t,
                    elementApi: r
                })
            })
        })
    }

    function kd({
        actionGroup: e,
        event: t,
        elementApi: r
    }) {
        let {
            actionItems: n
        } = e;
        n.forEach(i => {
            let {
                actionTypeId: o,
                config: a
            } = i, s;
            mt(o) ? s = u => lo(o)(u, i) : s = jd({
                effect: FR,
                actionTypeId: o,
                elementApi: r
            }), _o({
                config: a,
                event: t,
                elementApi: r
            }).forEach(s)
        })
    }

    function MR(e, t, r) {
        let {
            setStyle: n,
            getStyle: i
        } = r, {
            actionTypeId: o
        } = t;
        if (o === Bt) {
            let {
                config: a
            } = t;
            a.widthUnit === dt && n(e, Qe, ""), a.heightUnit === dt && n(e, Ze, "")
        }
        i(e, Xt) && jd({
            effect: Kd,
            actionTypeId: o,
            elementApi: r
        })(e)
    }

    function FR(e, t, r) {
        let {
            setStyle: n
        } = r;
        Kd(e, t, r), n(e, t, ""), t === ft && n(e, cn, "")
    }

    function Yd(e) {
        let t = 0,
            r = 0;
        return e.forEach((n, i) => {
            let {
                config: o
            } = n, a = o.delay + o.duration;
            a >= t && (t = a, r = i)
        }), r
    }

    function qR(e, t) {
        let {
            actionItemGroups: r,
            useFirstGroupAsInitialState: n
        } = e, {
            actionItem: i,
            verboseTimeElapsed: o = 0
        } = t, a = 0, s = 0;
        return r.forEach((u, l) => {
            if (n && l === 0) return;
            let {
                actionItems: v
            } = u, d = v[Yd(v)], {
                config: p,
                actionTypeId: h
            } = d;
            i.id === d.id && (s = a + o);
            let I = zd(h) === vo ? 0 : p.duration;
            a += p.delay + I
        }), a > 0 ? Er(s / a) : 0
    }

    function kR({
        actionList: e,
        actionItemId: t,
        rawData: r
    }) {
        let {
            actionItemGroups: n,
            continuousParameterGroups: i
        } = e, o = [], a = s => (o.push((0, yn.mergeIn)(s, ["config"], {
            delay: 0,
            duration: 0
        })), s.id === t);
        return n && n.some(({
            actionItems: s
        }) => s.some(a)), i && i.some(s => {
            let {
                continuousActionGroups: u
            } = s;
            return u.some(({
                actionItems: l
            }) => l.some(a))
        }), (0, yn.setIn)(r, ["actionLists"], {
            [e.id]: {
                id: e.id,
                actionItemGroups: [{
                    actionItems: o
                }]
            }
        })
    }

    function XR(e, {
        basedOn: t
    }) {
        return e === Ue.SCROLLING_IN_VIEW && (t === Ye.ELEMENT || t == null) || e === Ue.MOUSE_MOVE && t === Ye.ELEMENT
    }

    function GR(e, t) {
        return e + Jx + t
    }

    function VR(e, t) {
        return t == null ? !0 : e.indexOf(t) !== -1
    }

    function UR(e, t) {
        return ho(e && e.sort(), t && t.sort())
    }

    function BR(e) {
        if (typeof e == "string") return e;
        if (e.pluginElement && e.objectId) return e.pluginElement + Eo + e.objectId;
        if (e.objectId) return e.objectId;
        let {
            id: t = "",
            selector: r = "",
            useEventTarget: n = ""
        } = e;
        return t + Eo + r + Eo + n
    }
    var it, vn, gn, yn, Xd, Xx, Gx, Vx, Ux, Bx, Hx, Wx, zx, Kx, jx, hn, vr, yr, Qe, Ze, Gd, Yx, $x, Nd, Qx, Dd, Zx, En, Xt, dt, mr, Jx, Eo, Vd, vo, yo, Ud, Gt, Vt, Ut, _r, Bd, Ir, Tr, Bt, Ht, Wt, zt, mn, eR, Hd, mo, Wd, pn, rR, iR, sR, Fd, lR, fR, pR, gR, hR, Io, mR, _R, IR, TR, OR, xR, RR, jd, Qd = Ee(() => {
        "use strict";
        it = ue(dd()), vn = ue(Sd()), gn = ue(Cd()), yn = ue(Rt());
        Pe();
        Pd();
        Yi();
        Xd = ue(eo());
        fo();
        ln();
        ({
            BACKGROUND: Xx,
            TRANSFORM: Gx,
            TRANSLATE_3D: Vx,
            SCALE_3D: Ux,
            ROTATE_X: Bx,
            ROTATE_Y: Hx,
            ROTATE_Z: Wx,
            SKEW: zx,
            PRESERVE_3D: Kx,
            FLEX: jx,
            OPACITY: hn,
            FILTER: vr,
            FONT_VARIATION_SETTINGS: yr,
            WIDTH: Qe,
            HEIGHT: Ze,
            BACKGROUND_COLOR: Gd,
            BORDER_COLOR: Yx,
            COLOR: $x,
            CHILDREN: Nd,
            IMMEDIATE_CHILDREN: Qx,
            SIBLINGS: Dd,
            PARENT: Zx,
            DISPLAY: En,
            WILL_CHANGE: Xt,
            AUTO: dt,
            COMMA_DELIMITER: mr,
            COLON_DELIMITER: Jx,
            BAR_DELIMITER: Eo,
            RENDER_TRANSFORM: Vd,
            RENDER_GENERAL: vo,
            RENDER_STYLE: yo,
            RENDER_PLUGIN: Ud
        } = Ae), {
            TRANSFORM_MOVE: Gt,
            TRANSFORM_SCALE: Vt,
            TRANSFORM_ROTATE: Ut,
            TRANSFORM_SKEW: _r,
            STYLE_OPACITY: Bd,
            STYLE_FILTER: Ir,
            STYLE_FONT_VARIATION: Tr,
            STYLE_SIZE: Bt,
            STYLE_BACKGROUND_COLOR: Ht,
            STYLE_BORDER: Wt,
            STYLE_TEXT_COLOR: zt,
            GENERAL_DISPLAY: mn,
            OBJECT_VALUE: eR
        } = Le, Hd = e => e.trim(), mo = Object.freeze({
            [Ht]: Gd,
            [Wt]: Yx,
            [zt]: $x
        }), Wd = Object.freeze({
            [ft]: Gx,
            [Gd]: Xx,
            [hn]: hn,
            [vr]: vr,
            [Qe]: Qe,
            [Ze]: Ze,
            [yr]: yr
        }), pn = new Map;
        rR = 1;
        iR = 1;
        sR = (e, t) => e === t;
        Fd = /px/, lR = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = mR[n.type]), r), e || {}), fR = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = _R[n.type] || n.defaultValue || 0), r), e || {});
        pR = (e, t) => (t && (e[t.type] = t.value || 0), e), gR = (e, t) => (t && (e[t.type] = t.value || 0), e), hR = (e, t, r) => {
            if (mt(e)) return ao(e)(r, t);
            switch (e) {
                case Ir:
                    {
                        let n = (0, gn.default)(r.filters, ({
                            type: i
                        }) => i === t);
                        return n ? n.value : 0
                    }
                case Tr:
                    {
                        let n = (0, gn.default)(r.fontVariations, ({
                            type: i
                        }) => i === t);
                        return n ? n.value : 0
                    }
                default:
                    return r[t]
            }
        };
        Io = {
            [Gt]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [Vt]: Object.freeze({
                xValue: 1,
                yValue: 1,
                zValue: 1
            }),
            [Ut]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [_r]: Object.freeze({
                xValue: 0,
                yValue: 0
            })
        }, mR = Object.freeze({
            blur: 0,
            "hue-rotate": 0,
            invert: 0,
            grayscale: 0,
            saturate: 100,
            sepia: 0,
            contrast: 100,
            brightness: 100
        }), _R = Object.freeze({
            wght: 0,
            opsz: 0,
            wdth: 0,
            slnt: 0
        }), IR = (e, t) => {
            let r = (0, gn.default)(t.filters, ({
                type: n
            }) => n === e);
            if (r && r.unit) return r.unit;
            switch (e) {
                case "blur":
                    return "px";
                case "hue-rotate":
                    return "deg";
                default:
                    return "%"
            }
        }, TR = Object.keys(Io);
        OR = "\\(([^)]+)\\)", xR = /^rgb/, RR = RegExp(`rgba?${OR}`);
        jd = ({
            effect: e,
            actionTypeId: t,
            elementApi: r
        }) => n => {
            switch (t) {
                case Gt:
                case Vt:
                case Ut:
                case _r:
                    e(n, ft, r);
                    break;
                case Ir:
                    e(n, vr, r);
                    break;
                case Tr:
                    e(n, yr, r);
                    break;
                case Bd:
                    e(n, hn, r);
                    break;
                case Bt:
                    e(n, Qe, r), e(n, Ze, r);
                    break;
                case Ht:
                case Wt:
                case zt:
                    e(n, mo[t], r);
                    break;
                case mn:
                    e(n, En, r);
                    break
            }
        }
    });
    var Tt = f(To => {
        "use strict";
        Object.defineProperty(To, "__esModule", {
            value: !0
        });

        function HR(e, t) {
            for (var r in t) Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
        }
        HR(To, {
            IX2BrowserSupport: function() {
                return WR
            },
            IX2EasingUtils: function() {
                return KR
            },
            IX2Easings: function() {
                return zR
            },
            IX2ElementsReducer: function() {
                return jR
            },
            IX2VanillaPlugins: function() {
                return YR
            },
            IX2VanillaUtils: function() {
                return $R
            }
        });
        var WR = Kt((ln(), ze(Wf))),
            zR = Kt((ji(), ze(hr))),
            KR = Kt((Yi(), ze(Zf))),
            jR = Kt((rd(), ze(td))),
            YR = Kt((fo(), ze(ld))),
            $R = Kt((Qd(), ze($d)));

        function Zd(e) {
            if (typeof WeakMap != "function") return null;
            var t = new WeakMap,
                r = new WeakMap;
            return (Zd = function(n) {
                return n ? r : t
            })(e)
        }

        function Kt(e, t) {
            if (!t && e && e.__esModule) return e;
            if (e === null || typeof e != "object" && typeof e != "function") return {
                default: e
            };
            var r = Zd(t);
            if (r && r.has(e)) return r.get(e);
            var n = {
                    __proto__: null
                },
                i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
                }
            return n.default = e, r && r.set(e, n), n
        }
    });
    var In, ot, QR, ZR, JR, eC, tC, rC, _n, Jd, nC, iC, bo, oC, aC, sC, uC, ep, tp = Ee(() => {
        "use strict";
        Pe();
        In = ue(Tt()), ot = ue(Rt()), {
            IX2_RAW_DATA_IMPORTED: QR,
            IX2_SESSION_STOPPED: ZR,
            IX2_INSTANCE_ADDED: JR,
            IX2_INSTANCE_STARTED: eC,
            IX2_INSTANCE_REMOVED: tC,
            IX2_ANIMATION_FRAME_CHANGED: rC
        } = Ie, {
            optimizeFloat: _n,
            applyEasing: Jd,
            createBezierEasing: nC
        } = In.IX2EasingUtils, {
            RENDER_GENERAL: iC
        } = Ae, {
            getItemConfigByKey: bo,
            getRenderType: oC,
            getStyleProp: aC
        } = In.IX2VanillaUtils, sC = (e, t) => {
            let {
                position: r,
                parameterId: n,
                actionGroups: i,
                destinationKeys: o,
                smoothing: a,
                restingValue: s,
                actionTypeId: u,
                customEasingFn: l,
                skipMotion: v,
                skipToValue: d
            } = e, {
                parameters: p
            } = t.payload, h = Math.max(1 - a, .01), I = p[n];
            I == null && (h = 1, I = s);
            let _ = Math.max(I, 0) || 0,
                A = _n(_ - r),
                m = v ? d : _n(r + A * h),
                R = m * 100;
            if (m === r && e.current) return e;
            let w, P, N, L;
            for (let W = 0, {
                    length: K
                } = i; W < K; W++) {
                let {
                    keyframe: Q,
                    actionItems: k
                } = i[W];
                if (W === 0 && (w = k[0]), R >= Q) {
                    w = k[0];
                    let x = i[W + 1],
                        g = x && R !== Q;
                    P = g ? x.actionItems[0] : null, g && (N = Q / 100, L = (x.keyframe - Q) / 100)
                }
            }
            let B = {};
            if (w && !P)
                for (let W = 0, {
                        length: K
                    } = o; W < K; W++) {
                    let Q = o[W];
                    B[Q] = bo(u, Q, w.config)
                } else if (w && P && N !== void 0 && L !== void 0) {
                    let W = (m - N) / L,
                        K = w.config.easing,
                        Q = Jd(K, W, l);
                    for (let k = 0, {
                            length: x
                        } = o; k < x; k++) {
                        let g = o[k],
                            C = bo(u, g, w.config),
                            Z = (bo(u, g, P.config) - C) * Q + C;
                        B[g] = Z
                    }
                }
            return (0, ot.merge)(e, {
                position: m,
                current: B
            })
        }, uC = (e, t) => {
            let {
                active: r,
                origin: n,
                start: i,
                immediate: o,
                renderType: a,
                verbose: s,
                actionItem: u,
                destination: l,
                destinationKeys: v,
                pluginDuration: d,
                instanceDelay: p,
                customEasingFn: h,
                skipMotion: I
            } = e, _ = u.config.easing, {
                duration: A,
                delay: m
            } = u.config;
            d != null && (A = d), m = p ? ? m, a === iC ? A = 0 : (o || I) && (A = m = 0);
            let {
                now: R
            } = t.payload;
            if (r && n) {
                let w = R - (i + m);
                if (s) {
                    let W = R - i,
                        K = A + m,
                        Q = _n(Math.min(Math.max(0, W / K), 1));
                    e = (0, ot.set)(e, "verboseTimeElapsed", K * Q)
                }
                if (w < 0) return e;
                let P = _n(Math.min(Math.max(0, w / A), 1)),
                    N = Jd(_, P, h),
                    L = {},
                    B = null;
                return v.length && (B = v.reduce((W, K) => {
                    let Q = l[K],
                        k = parseFloat(n[K]) || 0,
                        g = (parseFloat(Q) - k) * N + k;
                    return W[K] = g, W
                }, {})), L.current = B, L.position = P, P === 1 && (L.active = !1, L.complete = !0), (0, ot.merge)(e, L)
            }
            return e
        }, ep = (e = Object.freeze({}), t) => {
            switch (t.type) {
                case QR:
                    return t.payload.ixInstances || Object.freeze({});
                case ZR:
                    return Object.freeze({});
                case JR:
                    {
                        let {
                            instanceId: r,
                            elementId: n,
                            actionItem: i,
                            eventId: o,
                            eventTarget: a,
                            eventStateKey: s,
                            actionListId: u,
                            groupIndex: l,
                            isCarrier: v,
                            origin: d,
                            destination: p,
                            immediate: h,
                            verbose: I,
                            continuous: _,
                            parameterId: A,
                            actionGroups: m,
                            smoothing: R,
                            restingValue: w,
                            pluginInstance: P,
                            pluginDuration: N,
                            instanceDelay: L,
                            skipMotion: B,
                            skipToValue: W
                        } = t.payload,
                        {
                            actionTypeId: K
                        } = i,
                        Q = oC(K),
                        k = aC(Q, K),
                        x = Object.keys(p).filter(C => p[C] != null && typeof p[C] != "string"),
                        {
                            easing: g
                        } = i.config;
                        return (0, ot.set)(e, r, {
                            id: r,
                            elementId: n,
                            active: !1,
                            position: 0,
                            start: 0,
                            origin: d,
                            destination: p,
                            destinationKeys: x,
                            immediate: h,
                            verbose: I,
                            current: null,
                            actionItem: i,
                            actionTypeId: K,
                            eventId: o,
                            eventTarget: a,
                            eventStateKey: s,
                            actionListId: u,
                            groupIndex: l,
                            renderType: Q,
                            isCarrier: v,
                            styleProp: k,
                            continuous: _,
                            parameterId: A,
                            actionGroups: m,
                            smoothing: R,
                            restingValue: w,
                            pluginInstance: P,
                            pluginDuration: N,
                            instanceDelay: L,
                            skipMotion: B,
                            skipToValue: W,
                            customEasingFn: Array.isArray(g) && g.length === 4 ? nC(g) : void 0
                        })
                    }
                case eC:
                    {
                        let {
                            instanceId: r,
                            time: n
                        } = t.payload;
                        return (0, ot.mergeIn)(e, [r], {
                            active: !0,
                            complete: !1,
                            start: n
                        })
                    }
                case tC:
                    {
                        let {
                            instanceId: r
                        } = t.payload;
                        if (!e[r]) return e;
                        let n = {},
                            i = Object.keys(e),
                            {
                                length: o
                            } = i;
                        for (let a = 0; a < o; a++) {
                            let s = i[a];
                            s !== r && (n[s] = e[s])
                        }
                        return n
                    }
                case rC:
                    {
                        let r = e,
                            n = Object.keys(e),
                            {
                                length: i
                            } = n;
                        for (let o = 0; o < i; o++) {
                            let a = n[o],
                                s = e[a],
                                u = s.continuous ? sC : uC;
                            r = (0, ot.set)(r, a, u(s, t))
                        }
                        return r
                    }
                default:
                    return e
            }
        }
    });
    var cC, lC, fC, rp, np = Ee(() => {
        "use strict";
        Pe();
        ({
            IX2_RAW_DATA_IMPORTED: cC,
            IX2_SESSION_STOPPED: lC,
            IX2_PARAMETER_CHANGED: fC
        } = Ie), rp = (e = {}, t) => {
            switch (t.type) {
                case cC:
                    return t.payload.ixParameters || {};
                case lC:
                    return {};
                case fC:
                    {
                        let {
                            key: r,
                            value: n
                        } = t.payload;
                        return e[r] = n,
                        e
                    }
                default:
                    return e
            }
        }
    });
    var ap = {};
    Ce(ap, {
        default: () => pC
    });
    var ip, op, dC, pC, sp = Ee(() => {
        "use strict";
        ip = ue(pi());
        hs();
        Fs();
        Xs();
        op = ue(Tt());
        tp();
        np();
        ({
            ixElements: dC
        } = op.IX2ElementsReducer), pC = (0, ip.combineReducers)({
            ixData: gs,
            ixRequest: Ms,
            ixSession: ks,
            ixElements: dC,
            ixInstances: ep,
            ixParameters: rp
        })
    });
    var cp = f((zq, up) => {
        var gC = ut(),
            hC = Te(),
            EC = rt(),
            vC = "[object String]";

        function yC(e) {
            return typeof e == "string" || !hC(e) && EC(e) && gC(e) == vC
        }
        up.exports = yC
    });
    var fp = f((Kq, lp) => {
        var mC = Vi(),
            _C = mC("length");
        lp.exports = _C
    });
    var pp = f((jq, dp) => {
        var IC = "\\ud800-\\udfff",
            TC = "\\u0300-\\u036f",
            bC = "\\ufe20-\\ufe2f",
            AC = "\\u20d0-\\u20ff",
            wC = TC + bC + AC,
            SC = "\\ufe0e\\ufe0f",
            OC = "\\u200d",
            xC = RegExp("[" + OC + IC + wC + SC + "]");

        function RC(e) {
            return xC.test(e)
        }
        dp.exports = RC
    });
    var Tp = f((Yq, Ip) => {
        var hp = "\\ud800-\\udfff",
            CC = "\\u0300-\\u036f",
            LC = "\\ufe20-\\ufe2f",
            PC = "\\u20d0-\\u20ff",
            NC = CC + LC + PC,
            DC = "\\ufe0e\\ufe0f",
            MC = "[" + hp + "]",
            Ao = "[" + NC + "]",
            wo = "\\ud83c[\\udffb-\\udfff]",
            FC = "(?:" + Ao + "|" + wo + ")",
            Ep = "[^" + hp + "]",
            vp = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            yp = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            qC = "\\u200d",
            mp = FC + "?",
            _p = "[" + DC + "]?",
            kC = "(?:" + qC + "(?:" + [Ep, vp, yp].join("|") + ")" + _p + mp + ")*",
            XC = _p + mp + kC,
            GC = "(?:" + [Ep + Ao + "?", Ao, vp, yp, MC].join("|") + ")",
            gp = RegExp(wo + "(?=" + wo + ")|" + GC + XC, "g");

        function VC(e) {
            for (var t = gp.lastIndex = 0; gp.test(e);) ++t;
            return t
        }
        Ip.exports = VC
    });
    var Ap = f(($q, bp) => {
        var UC = fp(),
            BC = pp(),
            HC = Tp();

        function WC(e) {
            return BC(e) ? HC(e) : UC(e)
        }
        bp.exports = WC
    });
    var Sp = f((Qq, wp) => {
        var zC = Jr(),
            KC = en(),
            jC = vt(),
            YC = cp(),
            $C = Ap(),
            QC = "[object Map]",
            ZC = "[object Set]";

        function JC(e) {
            if (e == null) return 0;
            if (jC(e)) return YC(e) ? $C(e) : e.length;
            var t = KC(e);
            return t == QC || t == ZC ? e.size : zC(e).length
        }
        wp.exports = JC
    });
    var xp = f((Zq, Op) => {
        var eL = "Expected a function";

        function tL(e) {
            if (typeof e != "function") throw new TypeError(eL);
            return function() {
                var t = arguments;
                switch (t.length) {
                    case 0:
                        return !e.call(this);
                    case 1:
                        return !e.call(this, t[0]);
                    case 2:
                        return !e.call(this, t[0], t[1]);
                    case 3:
                        return !e.call(this, t[0], t[1], t[2])
                }
                return !e.apply(this, t)
            }
        }
        Op.exports = tL
    });
    var So = f((Jq, Rp) => {
        var rL = ct(),
            nL = function() {
                try {
                    var e = rL(Object, "defineProperty");
                    return e({}, "", {}), e
                } catch {}
            }();
        Rp.exports = nL
    });
    var Oo = f((ek, Lp) => {
        var Cp = So();

        function iL(e, t, r) {
            t == "__proto__" && Cp ? Cp(e, t, {
                configurable: !0,
                enumerable: !0,
                value: r,
                writable: !0
            }) : e[t] = r
        }
        Lp.exports = iL
    });
    var Np = f((tk, Pp) => {
        var oL = Oo(),
            aL = Br(),
            sL = Object.prototype,
            uL = sL.hasOwnProperty;

        function cL(e, t, r) {
            var n = e[t];
            (!(uL.call(e, t) && aL(n, r)) || r === void 0 && !(t in e)) && oL(e, t, r)
        }
        Pp.exports = cL
    });
    var Fp = f((rk, Mp) => {
        var lL = Np(),
            fL = dr(),
            dL = Yr(),
            Dp = $e(),
            pL = qt();

        function gL(e, t, r, n) {
            if (!Dp(e)) return e;
            t = fL(t, e);
            for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o;) {
                var u = pL(t[i]),
                    l = r;
                if (u === "__proto__" || u === "constructor" || u === "prototype") return e;
                if (i != a) {
                    var v = s[u];
                    l = n ? n(v, u, s) : void 0, l === void 0 && (l = Dp(v) ? v : dL(t[i + 1]) ? [] : {})
                }
                lL(s, u, l), s = s[u]
            }
            return e
        }
        Mp.exports = gL
    });
    var kp = f((nk, qp) => {
        var hL = nn(),
            EL = Fp(),
            vL = dr();

        function yL(e, t, r) {
            for (var n = -1, i = t.length, o = {}; ++n < i;) {
                var a = t[n],
                    s = hL(e, a);
                r(s, a) && EL(o, vL(a, e), s)
            }
            return o
        }
        qp.exports = yL
    });
    var Gp = f((ik, Xp) => {
        var mL = Kr(),
            _L = ei(),
            IL = Si(),
            TL = wi(),
            bL = Object.getOwnPropertySymbols,
            AL = bL ? function(e) {
                for (var t = []; e;) mL(t, IL(e)), e = _L(e);
                return t
            } : TL;
        Xp.exports = AL
    });
    var Up = f((ok, Vp) => {
        function wL(e) {
            var t = [];
            if (e != null)
                for (var r in Object(e)) t.push(r);
            return t
        }
        Vp.exports = wL
    });
    var Hp = f((ak, Bp) => {
        var SL = $e(),
            OL = Zr(),
            xL = Up(),
            RL = Object.prototype,
            CL = RL.hasOwnProperty;

        function LL(e) {
            if (!SL(e)) return xL(e);
            var t = OL(e),
                r = [];
            for (var n in e) n == "constructor" && (t || !CL.call(e, n)) || r.push(n);
            return r
        }
        Bp.exports = LL
    });
    var zp = f((sk, Wp) => {
        var PL = xi(),
            NL = Hp(),
            DL = vt();

        function ML(e) {
            return DL(e) ? PL(e, !0) : NL(e)
        }
        Wp.exports = ML
    });
    var jp = f((uk, Kp) => {
        var FL = Ai(),
            qL = Gp(),
            kL = zp();

        function XL(e) {
            return FL(e, kL, qL)
        }
        Kp.exports = XL
    });
    var $p = f((ck, Yp) => {
        var GL = Gi(),
            VL = lt(),
            UL = kp(),
            BL = jp();

        function HL(e, t) {
            if (e == null) return {};
            var r = GL(BL(e), function(n) {
                return [n]
            });
            return t = VL(t), UL(e, r, function(n, i) {
                return t(n, i[0])
            })
        }
        Yp.exports = HL
    });
    var Zp = f((lk, Qp) => {
        var WL = lt(),
            zL = xp(),
            KL = $p();

        function jL(e, t) {
            return KL(e, zL(WL(t)))
        }
        Qp.exports = jL
    });
    var eg = f((fk, Jp) => {
        var YL = Jr(),
            $L = en(),
            QL = ar(),
            ZL = Te(),
            JL = vt(),
            eP = jr(),
            tP = Zr(),
            rP = Qr(),
            nP = "[object Map]",
            iP = "[object Set]",
            oP = Object.prototype,
            aP = oP.hasOwnProperty;

        function sP(e) {
            if (e == null) return !0;
            if (JL(e) && (ZL(e) || typeof e == "string" || typeof e.splice == "function" || eP(e) || rP(e) || QL(e))) return !e.length;
            var t = $L(e);
            if (t == nP || t == iP) return !e.size;
            if (tP(e)) return !YL(e).length;
            for (var r in e)
                if (aP.call(e, r)) return !1;
            return !0
        }
        Jp.exports = sP
    });
    var rg = f((dk, tg) => {
        var uP = Oo(),
            cP = po(),
            lP = lt();

        function fP(e, t) {
            var r = {};
            return t = lP(t, 3), cP(e, function(n, i, o) {
                uP(r, i, t(n, i, o))
            }), r
        }
        tg.exports = fP
    });
    var ig = f((pk, ng) => {
        function dP(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1;);
            return e
        }
        ng.exports = dP
    });
    var ag = f((gk, og) => {
        var pP = an();

        function gP(e) {
            return typeof e == "function" ? e : pP
        }
        og.exports = gP
    });
    var ug = f((hk, sg) => {
        var hP = ig(),
            EP = go(),
            vP = ag(),
            yP = Te();

        function mP(e, t) {
            var r = yP(e) ? hP : EP;
            return r(e, vP(t))
        }
        sg.exports = mP
    });
    var lg = f((Ek, cg) => {
        var _P = Ve(),
            IP = function() {
                return _P.Date.now()
            };
        cg.exports = IP
    });
    var pg = f((vk, dg) => {
        var TP = $e(),
            xo = lg(),
            fg = sn(),
            bP = "Expected a function",
            AP = Math.max,
            wP = Math.min;

        function SP(e, t, r) {
            var n, i, o, a, s, u, l = 0,
                v = !1,
                d = !1,
                p = !0;
            if (typeof e != "function") throw new TypeError(bP);
            t = fg(t) || 0, TP(r) && (v = !!r.leading, d = "maxWait" in r, o = d ? AP(fg(r.maxWait) || 0, t) : o, p = "trailing" in r ? !!r.trailing : p);

            function h(L) {
                var B = n,
                    W = i;
                return n = i = void 0, l = L, a = e.apply(W, B), a
            }

            function I(L) {
                return l = L, s = setTimeout(m, t), v ? h(L) : a
            }

            function _(L) {
                var B = L - u,
                    W = L - l,
                    K = t - B;
                return d ? wP(K, o - W) : K
            }

            function A(L) {
                var B = L - u,
                    W = L - l;
                return u === void 0 || B >= t || B < 0 || d && W >= o
            }

            function m() {
                var L = xo();
                if (A(L)) return R(L);
                s = setTimeout(m, _(L))
            }

            function R(L) {
                return s = void 0, p && n ? h(L) : (n = i = void 0, a)
            }

            function w() {
                s !== void 0 && clearTimeout(s), l = 0, n = u = i = s = void 0
            }

            function P() {
                return s === void 0 ? a : R(xo())
            }

            function N() {
                var L = xo(),
                    B = A(L);
                if (n = arguments, i = this, u = L, B) {
                    if (s === void 0) return I(u);
                    if (d) return clearTimeout(s), s = setTimeout(m, t), h(u)
                }
                return s === void 0 && (s = setTimeout(m, t)), a
            }
            return N.cancel = w, N.flush = P, N
        }
        dg.exports = SP
    });
    var hg = f((yk, gg) => {
        var OP = pg(),
            xP = $e(),
            RP = "Expected a function";

        function CP(e, t, r) {
            var n = !0,
                i = !0;
            if (typeof e != "function") throw new TypeError(RP);
            return xP(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), OP(e, t, {
                leading: n,
                maxWait: t,
                trailing: i
            })
        }
        gg.exports = CP
    });
    var vg = {};
    Ce(vg, {
        actionListPlaybackChanged: () => Yt,
        animationFrameChanged: () => bn,
        clearRequested: () => tN,
        elementStateChanged: () => Fo,
        eventListenerAdded: () => Tn,
        eventStateChanged: () => No,
        instanceAdded: () => Do,
        instanceRemoved: () => Mo,
        instanceStarted: () => An,
        mediaQueriesDefined: () => ko,
        parameterChanged: () => jt,
        playbackRequested: () => JP,
        previewRequested: () => ZP,
        rawDataImported: () => Ro,
        sessionInitialized: () => Co,
        sessionStarted: () => Lo,
        sessionStopped: () => Po,
        stopRequested: () => eN,
        testFrameRendered: () => rN,
        viewportWidthChanged: () => qo
    });
    var Eg, LP, PP, NP, DP, MP, FP, qP, kP, XP, GP, VP, UP, BP, HP, WP, zP, KP, jP, YP, $P, QP, Ro, Co, Lo, Po, ZP, JP, eN, tN, Tn, rN, No, bn, jt, Do, An, Mo, Fo, Yt, qo, ko, wn = Ee(() => {
        "use strict";
        Pe();
        Eg = ue(Tt()), {
            IX2_RAW_DATA_IMPORTED: LP,
            IX2_SESSION_INITIALIZED: PP,
            IX2_SESSION_STARTED: NP,
            IX2_SESSION_STOPPED: DP,
            IX2_PREVIEW_REQUESTED: MP,
            IX2_PLAYBACK_REQUESTED: FP,
            IX2_STOP_REQUESTED: qP,
            IX2_CLEAR_REQUESTED: kP,
            IX2_EVENT_LISTENER_ADDED: XP,
            IX2_TEST_FRAME_RENDERED: GP,
            IX2_EVENT_STATE_CHANGED: VP,
            IX2_ANIMATION_FRAME_CHANGED: UP,
            IX2_PARAMETER_CHANGED: BP,
            IX2_INSTANCE_ADDED: HP,
            IX2_INSTANCE_STARTED: WP,
            IX2_INSTANCE_REMOVED: zP,
            IX2_ELEMENT_STATE_CHANGED: KP,
            IX2_ACTION_LIST_PLAYBACK_CHANGED: jP,
            IX2_VIEWPORT_WIDTH_CHANGED: YP,
            IX2_MEDIA_QUERIES_DEFINED: $P
        } = Ie, {
            reifyState: QP
        } = Eg.IX2VanillaUtils, Ro = e => ({
            type: LP,
            payload: { ...QP(e)
            }
        }), Co = ({
            hasBoundaryNodes: e,
            reducedMotion: t
        }) => ({
            type: PP,
            payload: {
                hasBoundaryNodes: e,
                reducedMotion: t
            }
        }), Lo = () => ({
            type: NP
        }), Po = () => ({
            type: DP
        }), ZP = ({
            rawData: e,
            defer: t
        }) => ({
            type: MP,
            payload: {
                defer: t,
                rawData: e
            }
        }), JP = ({
            actionTypeId: e = Le.GENERAL_START_ACTION,
            actionListId: t,
            actionItemId: r,
            eventId: n,
            allowEvents: i,
            immediate: o,
            testManual: a,
            verbose: s,
            rawData: u
        }) => ({
            type: FP,
            payload: {
                actionTypeId: e,
                actionListId: t,
                actionItemId: r,
                testManual: a,
                eventId: n,
                allowEvents: i,
                immediate: o,
                verbose: s,
                rawData: u
            }
        }), eN = e => ({
            type: qP,
            payload: {
                actionListId: e
            }
        }), tN = () => ({
            type: kP
        }), Tn = (e, t) => ({
            type: XP,
            payload: {
                target: e,
                listenerParams: t
            }
        }), rN = (e = 1) => ({
            type: GP,
            payload: {
                step: e
            }
        }), No = (e, t) => ({
            type: VP,
            payload: {
                stateKey: e,
                newState: t
            }
        }), bn = (e, t) => ({
            type: UP,
            payload: {
                now: e,
                parameters: t
            }
        }), jt = (e, t) => ({
            type: BP,
            payload: {
                key: e,
                value: t
            }
        }), Do = e => ({
            type: HP,
            payload: { ...e
            }
        }), An = (e, t) => ({
            type: WP,
            payload: {
                instanceId: e,
                time: t
            }
        }), Mo = e => ({
            type: zP,
            payload: {
                instanceId: e
            }
        }), Fo = (e, t, r, n) => ({
            type: KP,
            payload: {
                elementId: e,
                actionTypeId: t,
                current: r,
                actionItem: n
            }
        }), Yt = ({
            actionListId: e,
            isPlaying: t
        }) => ({
            type: jP,
            payload: {
                actionListId: e,
                isPlaying: t
            }
        }), qo = ({
            width: e,
            mediaQueries: t
        }) => ({
            type: YP,
            payload: {
                width: e,
                mediaQueries: t
            }
        }), ko = () => ({
            type: $P
        })
    });
    var xe = {};
    Ce(xe, {
        elementContains: () => Vo,
        getChildElements: () => dN,
        getClosestElement: () => br,
        getProperty: () => sN,
        getQuerySelector: () => Go,
        getRefType: () => Uo,
        getSiblingElements: () => pN,
        getStyle: () => aN,
        getValidDocument: () => cN,
        isSiblingNode: () => fN,
        matchSelector: () => uN,
        queryDocument: () => lN,
        setStyle: () => oN
    });

    function oN(e, t, r) {
        e.style[t] = r
    }

    function aN(e, t) {
        return t.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(t) : e.style[t]
    }

    function sN(e, t) {
        return e[t]
    }

    function uN(e) {
        return t => t[Xo](e)
    }

    function Go({
        id: e,
        selector: t
    }) {
        if (e) {
            let r = e;
            if (e.indexOf(yg) !== -1) {
                let n = e.split(yg),
                    i = n[0];
                if (r = n[1], i !== document.documentElement.getAttribute(_g)) return null
            }
            return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`
        }
        return t
    }

    function cN(e) {
        return e == null || e === document.documentElement.getAttribute(_g) ? document : null
    }

    function lN(e, t) {
        return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
    }

    function Vo(e, t) {
        return e.contains(t)
    }

    function fN(e, t) {
        return e !== t && e.parentNode === t.parentNode
    }

    function dN(e) {
        let t = [];
        for (let r = 0, {
                length: n
            } = e || []; r < n; r++) {
            let {
                children: i
            } = e[r], {
                length: o
            } = i;
            if (o)
                for (let a = 0; a < o; a++) t.push(i[a])
        }
        return t
    }

    function pN(e = []) {
        let t = [],
            r = [];
        for (let n = 0, {
                length: i
            } = e; n < i; n++) {
            let {
                parentNode: o
            } = e[n];
            if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1) continue;
            r.push(o);
            let a = o.firstElementChild;
            for (; a != null;) e.indexOf(a) === -1 && t.push(a), a = a.nextElementSibling
        }
        return t
    }

    function Uo(e) {
        return e != null && typeof e == "object" ? e instanceof Element ? nN : iN : null
    }
    var mg, Xo, yg, nN, iN, _g, br, Ig = Ee(() => {
        "use strict";
        mg = ue(Tt());
        Pe();
        ({
            ELEMENT_MATCHES: Xo
        } = mg.IX2BrowserSupport), {
            IX2_ID_DELIMITER: yg,
            HTML_ELEMENT: nN,
            PLAIN_OBJECT: iN,
            WF_PAGE: _g
        } = Ae;
        br = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let r = e;
            do {
                if (r[Xo] && r[Xo](t)) return r;
                r = r.parentNode
            } while (r != null);
            return null
        }
    });
    var Bo = f((Ik, bg) => {
        var gN = $e(),
            Tg = Object.create,
            hN = function() {
                function e() {}
                return function(t) {
                    if (!gN(t)) return {};
                    if (Tg) return Tg(t);
                    e.prototype = t;
                    var r = new e;
                    return e.prototype = void 0, r
                }
            }();
        bg.exports = hN
    });
    var Sn = f((Tk, Ag) => {
        function EN() {}
        Ag.exports = EN
    });
    var xn = f((bk, wg) => {
        var vN = Bo(),
            yN = Sn();

        function On(e, t) {
            this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
        }
        On.prototype = vN(yN.prototype);
        On.prototype.constructor = On;
        wg.exports = On
    });
    var Rg = f((Ak, xg) => {
        var Sg = St(),
            mN = ar(),
            _N = Te(),
            Og = Sg ? Sg.isConcatSpreadable : void 0;

        function IN(e) {
            return _N(e) || mN(e) || !!(Og && e && e[Og])
        }
        xg.exports = IN
    });
    var Pg = f((wk, Lg) => {
        var TN = Kr(),
            bN = Rg();

        function Cg(e, t, r, n, i) {
            var o = -1,
                a = e.length;
            for (r || (r = bN), i || (i = []); ++o < a;) {
                var s = e[o];
                t > 0 && r(s) ? t > 1 ? Cg(s, t - 1, r, n, i) : TN(i, s) : n || (i[i.length] = s)
            }
            return i
        }
        Lg.exports = Cg
    });
    var Dg = f((Sk, Ng) => {
        var AN = Pg();

        function wN(e) {
            var t = e == null ? 0 : e.length;
            return t ? AN(e, 1) : []
        }
        Ng.exports = wN
    });
    var Fg = f((Ok, Mg) => {
        function SN(e, t, r) {
            switch (r.length) {
                case 0:
                    return e.call(t);
                case 1:
                    return e.call(t, r[0]);
                case 2:
                    return e.call(t, r[0], r[1]);
                case 3:
                    return e.call(t, r[0], r[1], r[2])
            }
            return e.apply(t, r)
        }
        Mg.exports = SN
    });
    var Xg = f((xk, kg) => {
        var ON = Fg(),
            qg = Math.max;

        function xN(e, t, r) {
            return t = qg(t === void 0 ? e.length - 1 : t, 0),
                function() {
                    for (var n = arguments, i = -1, o = qg(n.length - t, 0), a = Array(o); ++i < o;) a[i] = n[t + i];
                    i = -1;
                    for (var s = Array(t + 1); ++i < t;) s[i] = n[i];
                    return s[t] = r(a), ON(e, this, s)
                }
        }
        kg.exports = xN
    });
    var Vg = f((Rk, Gg) => {
        function RN(e) {
            return function() {
                return e
            }
        }
        Gg.exports = RN
    });
    var Hg = f((Ck, Bg) => {
        var CN = Vg(),
            Ug = So(),
            LN = an(),
            PN = Ug ? function(e, t) {
                return Ug(e, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: CN(t),
                    writable: !0
                })
            } : LN;
        Bg.exports = PN
    });
    var zg = f((Lk, Wg) => {
        var NN = 800,
            DN = 16,
            MN = Date.now;

        function FN(e) {
            var t = 0,
                r = 0;
            return function() {
                var n = MN(),
                    i = DN - (n - r);
                if (r = n, i > 0) {
                    if (++t >= NN) return arguments[0]
                } else t = 0;
                return e.apply(void 0, arguments)
            }
        }
        Wg.exports = FN
    });
    var jg = f((Pk, Kg) => {
        var qN = Hg(),
            kN = zg(),
            XN = kN(qN);
        Kg.exports = XN
    });
    var $g = f((Nk, Yg) => {
        var GN = Dg(),
            VN = Xg(),
            UN = jg();

        function BN(e) {
            return UN(VN(e, void 0, GN), e + "")
        }
        Yg.exports = BN
    });
    var Jg = f((Dk, Zg) => {
        var Qg = Ri(),
            HN = Qg && new Qg;
        Zg.exports = HN
    });
    var th = f((Mk, eh) => {
        function WN() {}
        eh.exports = WN
    });
    var Ho = f((Fk, nh) => {
        var rh = Jg(),
            zN = th(),
            KN = rh ? function(e) {
                return rh.get(e)
            } : zN;
        nh.exports = KN
    });
    var oh = f((qk, ih) => {
        var jN = {};
        ih.exports = jN
    });
    var Wo = f((kk, sh) => {
        var ah = oh(),
            YN = Object.prototype,
            $N = YN.hasOwnProperty;

        function QN(e) {
            for (var t = e.name + "", r = ah[t], n = $N.call(ah, t) ? r.length : 0; n--;) {
                var i = r[n],
                    o = i.func;
                if (o == null || o == e) return i.name
            }
            return t
        }
        sh.exports = QN
    });
    var Cn = f((Xk, uh) => {
        var ZN = Bo(),
            JN = Sn(),
            eD = 4294967295;

        function Rn(e) {
            this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = eD, this.__views__ = []
        }
        Rn.prototype = ZN(JN.prototype);
        Rn.prototype.constructor = Rn;
        uh.exports = Rn
    });
    var lh = f((Gk, ch) => {
        function tD(e, t) {
            var r = -1,
                n = e.length;
            for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
            return t
        }
        ch.exports = tD
    });
    var dh = f((Vk, fh) => {
        var rD = Cn(),
            nD = xn(),
            iD = lh();

        function oD(e) {
            if (e instanceof rD) return e.clone();
            var t = new nD(e.__wrapped__, e.__chain__);
            return t.__actions__ = iD(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
        }
        fh.exports = oD
    });
    var hh = f((Uk, gh) => {
        var aD = Cn(),
            ph = xn(),
            sD = Sn(),
            uD = Te(),
            cD = rt(),
            lD = dh(),
            fD = Object.prototype,
            dD = fD.hasOwnProperty;

        function Ln(e) {
            if (cD(e) && !uD(e) && !(e instanceof aD)) {
                if (e instanceof ph) return e;
                if (dD.call(e, "__wrapped__")) return lD(e)
            }
            return new ph(e)
        }
        Ln.prototype = sD.prototype;
        Ln.prototype.constructor = Ln;
        gh.exports = Ln
    });
    var vh = f((Bk, Eh) => {
        var pD = Cn(),
            gD = Ho(),
            hD = Wo(),
            ED = hh();

        function vD(e) {
            var t = hD(e),
                r = ED[t];
            if (typeof r != "function" || !(t in pD.prototype)) return !1;
            if (e === r) return !0;
            var n = gD(r);
            return !!n && e === n[0]
        }
        Eh.exports = vD
    });
    var Ih = f((Hk, _h) => {
        var yh = xn(),
            yD = $g(),
            mD = Ho(),
            zo = Wo(),
            _D = Te(),
            mh = vh(),
            ID = "Expected a function",
            TD = 8,
            bD = 32,
            AD = 128,
            wD = 256;

        function SD(e) {
            return yD(function(t) {
                var r = t.length,
                    n = r,
                    i = yh.prototype.thru;
                for (e && t.reverse(); n--;) {
                    var o = t[n];
                    if (typeof o != "function") throw new TypeError(ID);
                    if (i && !a && zo(o) == "wrapper") var a = new yh([], !0)
                }
                for (n = a ? n : r; ++n < r;) {
                    o = t[n];
                    var s = zo(o),
                        u = s == "wrapper" ? mD(o) : void 0;
                    u && mh(u[0]) && u[1] == (AD | TD | bD | wD) && !u[4].length && u[9] == 1 ? a = a[zo(u[0])].apply(a, u[3]) : a = o.length == 1 && mh(o) ? a[s]() : a.thru(o)
                }
                return function() {
                    var l = arguments,
                        v = l[0];
                    if (a && l.length == 1 && _D(v)) return a.plant(v).value();
                    for (var d = 0, p = r ? t[d].apply(this, l) : v; ++d < r;) p = t[d].call(this, p);
                    return p
                }
            })
        }
        _h.exports = SD
    });
    var bh = f((Wk, Th) => {
        var OD = Ih(),
            xD = OD();
        Th.exports = xD
    });
    var wh = f((zk, Ah) => {
        function RD(e, t, r) {
            return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e
        }
        Ah.exports = RD
    });
    var Oh = f((Kk, Sh) => {
        var CD = wh(),
            Ko = sn();

        function LD(e, t, r) {
            return r === void 0 && (r = t, t = void 0), r !== void 0 && (r = Ko(r), r = r === r ? r : 0), t !== void 0 && (t = Ko(t), t = t === t ? t : 0), CD(Ko(e), t, r)
        }
        Sh.exports = LD
    });
    var Fh, qh, kh, Xh, PD, ND, DD, MD, FD, qD, kD, XD, GD, VD, UD, BD, HD, WD, zD, Gh, Vh, KD, jD, YD, Uh, $D, QD, Bh, ZD, jo, Hh, xh, Rh, Wh, wr, JD, Je, zh, eM, De, He, Sr, Kh, Yo, Ch, $o, tM, Ar, rM, nM, iM, jh, Lh, oM, Ph, aM, sM, uM, Nh, Pn, Nn, Dh, Mh, Yh, $h = Ee(() => {
        "use strict";
        Fh = ue(bh()), qh = ue(on()), kh = ue(Oh());
        Pe();
        Qo();
        wn();
        Xh = ue(Tt()), {
            MOUSE_CLICK: PD,
            MOUSE_SECOND_CLICK: ND,
            MOUSE_DOWN: DD,
            MOUSE_UP: MD,
            MOUSE_OVER: FD,
            MOUSE_OUT: qD,
            DROPDOWN_CLOSE: kD,
            DROPDOWN_OPEN: XD,
            SLIDER_ACTIVE: GD,
            SLIDER_INACTIVE: VD,
            TAB_ACTIVE: UD,
            TAB_INACTIVE: BD,
            NAVBAR_CLOSE: HD,
            NAVBAR_OPEN: WD,
            MOUSE_MOVE: zD,
            PAGE_SCROLL_DOWN: Gh,
            SCROLL_INTO_VIEW: Vh,
            SCROLL_OUT_OF_VIEW: KD,
            PAGE_SCROLL_UP: jD,
            SCROLLING_IN_VIEW: YD,
            PAGE_FINISH: Uh,
            ECOMMERCE_CART_CLOSE: $D,
            ECOMMERCE_CART_OPEN: QD,
            PAGE_START: Bh,
            PAGE_SCROLL: ZD
        } = Ue, jo = "COMPONENT_ACTIVE", Hh = "COMPONENT_INACTIVE", {
            COLON_DELIMITER: xh
        } = Ae, {
            getNamespacedParameterId: Rh
        } = Xh.IX2VanillaUtils, Wh = e => t => typeof t == "object" && e(t) ? !0 : t, wr = Wh(({
            element: e,
            nativeEvent: t
        }) => e === t.target), JD = Wh(({
            element: e,
            nativeEvent: t
        }) => e.contains(t.target)), Je = (0, Fh.default)([wr, JD]), zh = (e, t) => {
            if (t) {
                let {
                    ixData: r
                } = e.getState(), {
                    events: n
                } = r, i = n[t];
                if (i && !tM[i.eventTypeId]) return i
            }
            return null
        }, eM = ({
            store: e,
            event: t
        }) => {
            let {
                action: r
            } = t, {
                autoStopEventId: n
            } = r.config;
            return !!zh(e, n)
        }, De = ({
            store: e,
            event: t,
            element: r,
            eventStateKey: n
        }, i) => {
            let {
                action: o,
                id: a
            } = t, {
                actionListId: s,
                autoStopEventId: u
            } = o.config, l = zh(e, u);
            return l && $t({
                store: e,
                eventId: u,
                eventTarget: r,
                eventStateKey: u + xh + n.split(xh)[1],
                actionListId: (0, qh.default)(l, "action.config.actionListId")
            }), $t({
                store: e,
                eventId: a,
                eventTarget: r,
                eventStateKey: n,
                actionListId: s
            }), Or({
                store: e,
                eventId: a,
                eventTarget: r,
                eventStateKey: n,
                actionListId: s
            }), i
        }, He = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n, Sr = {
            handler: He(Je, De)
        }, Kh = { ...Sr,
            types: [jo, Hh].join(" ")
        }, Yo = [{
            target: window,
            types: "resize orientationchange",
            throttle: !0
        }, {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0
        }], Ch = "mouseover mouseout", $o = {
            types: Yo
        }, tM = {
            PAGE_START: Bh,
            PAGE_FINISH: Uh
        }, Ar = (() => {
            let e = window.pageXOffset !== void 0,
                r = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
            return () => ({
                scrollLeft: e ? window.pageXOffset : r.scrollLeft,
                scrollTop: e ? window.pageYOffset : r.scrollTop,
                stiffScrollTop: (0, kh.default)(e ? window.pageYOffset : r.scrollTop, 0, r.scrollHeight - window.innerHeight),
                scrollWidth: r.scrollWidth,
                scrollHeight: r.scrollHeight,
                clientWidth: r.clientWidth,
                clientHeight: r.clientHeight,
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
            })
        })(), rM = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top), nM = ({
            element: e,
            nativeEvent: t
        }) => {
            let {
                type: r,
                target: n,
                relatedTarget: i
            } = t, o = e.contains(n);
            if (r === "mouseover" && o) return !0;
            let a = e.contains(i);
            return !!(r === "mouseout" && o && a)
        }, iM = e => {
            let {
                element: t,
                event: {
                    config: r
                }
            } = e, {
                clientWidth: n,
                clientHeight: i
            } = Ar(), o = r.scrollOffsetValue, u = r.scrollOffsetUnit === "PX" ? o : i * (o || 0) / 100;
            return rM(t.getBoundingClientRect(), {
                left: 0,
                top: u,
                right: n,
                bottom: i - u
            })
        }, jh = e => (t, r) => {
            let {
                type: n
            } = t.nativeEvent, i = [jo, Hh].indexOf(n) !== -1 ? n === jo : r.isActive, o = { ...r,
                isActive: i
            };
            return (!r || o.isActive !== r.isActive) && e(t, o) || o
        }, Lh = e => (t, r) => {
            let n = {
                elementHovered: nM(t)
            };
            return (r ? n.elementHovered !== r.elementHovered : n.elementHovered) && e(t, n) || n
        }, oM = e => (t, r) => {
            let n = { ...r,
                elementVisible: iM(t)
            };
            return (r ? n.elementVisible !== r.elementVisible : n.elementVisible) && e(t, n) || n
        }, Ph = e => (t, r = {}) => {
            let {
                stiffScrollTop: n,
                scrollHeight: i,
                innerHeight: o
            } = Ar(), {
                event: {
                    config: a,
                    eventTypeId: s
                }
            } = t, {
                scrollOffsetValue: u,
                scrollOffsetUnit: l
            } = a, v = l === "PX", d = i - o, p = Number((n / d).toFixed(2));
            if (r && r.percentTop === p) return r;
            let h = (v ? u : o * (u || 0) / 100) / d,
                I, _, A = 0;
            r && (I = p > r.percentTop, _ = r.scrollingDown !== I, A = _ ? p : r.anchorTop);
            let m = s === Gh ? p >= A + h : p <= A - h,
                R = { ...r,
                    percentTop: p,
                    inBounds: m,
                    anchorTop: A,
                    scrollingDown: I
                };
            return r && m && (_ || R.inBounds !== r.inBounds) && e(t, R) || R
        }, aM = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom, sM = e => (t, r) => {
            let n = {
                finished: document.readyState === "complete"
            };
            return n.finished && !(r && r.finshed) && e(t), n
        }, uM = e => (t, r) => {
            let n = {
                started: !0
            };
            return r || e(t), n
        }, Nh = e => (t, r = {
            clickCount: 0
        }) => {
            let n = {
                clickCount: r.clickCount % 2 + 1
            };
            return n.clickCount !== r.clickCount && e(t, n) || n
        }, Pn = (e = !0) => ({ ...Kh,
            handler: He(e ? Je : wr, jh((t, r) => r.isActive ? Sr.handler(t, r) : r))
        }), Nn = (e = !0) => ({ ...Kh,
            handler: He(e ? Je : wr, jh((t, r) => r.isActive ? r : Sr.handler(t, r)))
        }), Dh = { ...$o,
            handler: oM((e, t) => {
                let {
                    elementVisible: r
                } = t, {
                    event: n,
                    store: i
                } = e, {
                    ixData: o
                } = i.getState(), {
                    events: a
                } = o;
                return !a[n.action.config.autoStopEventId] && t.triggered ? t : n.eventTypeId === Vh === r ? (De(e), { ...t,
                    triggered: !0
                }) : t
            })
        }, Mh = .05, Yh = {
            [GD]: Pn(),
            [VD]: Nn(),
            [XD]: Pn(),
            [kD]: Nn(),
            [WD]: Pn(!1),
            [HD]: Nn(!1),
            [UD]: Pn(),
            [BD]: Nn(),
            [QD]: {
                types: "ecommerce-cart-open",
                handler: He(Je, De)
            },
            [$D]: {
                types: "ecommerce-cart-close",
                handler: He(Je, De)
            },
            [PD]: {
                types: "click",
                handler: He(Je, Nh((e, {
                    clickCount: t
                }) => {
                    eM(e) ? t === 1 && De(e) : De(e)
                }))
            },
            [ND]: {
                types: "click",
                handler: He(Je, Nh((e, {
                    clickCount: t
                }) => {
                    t === 2 && De(e)
                }))
            },
            [DD]: { ...Sr,
                types: "mousedown"
            },
            [MD]: { ...Sr,
                types: "mouseup"
            },
            [FD]: {
                types: Ch,
                handler: He(Je, Lh((e, t) => {
                    t.elementHovered && De(e)
                }))
            },
            [qD]: {
                types: Ch,
                handler: He(Je, Lh((e, t) => {
                    t.elementHovered || De(e)
                }))
            },
            [zD]: {
                types: "mousemove mouseout scroll",
                handler: ({
                    store: e,
                    element: t,
                    eventConfig: r,
                    nativeEvent: n,
                    eventStateKey: i
                }, o = {
                    clientX: 0,
                    clientY: 0,
                    pageX: 0,
                    pageY: 0
                }) => {
                    let {
                        basedOn: a,
                        selectedAxis: s,
                        continuousParameterGroupId: u,
                        reverse: l,
                        restingState: v = 0
                    } = r, {
                        clientX: d = o.clientX,
                        clientY: p = o.clientY,
                        pageX: h = o.pageX,
                        pageY: I = o.pageY
                    } = n, _ = s === "X_AXIS", A = n.type === "mouseout", m = v / 100, R = u, w = !1;
                    switch (a) {
                        case Ye.VIEWPORT:
                            {
                                m = _ ? Math.min(d, window.innerWidth) / window.innerWidth : Math.min(p, window.innerHeight) / window.innerHeight;
                                break
                            }
                        case Ye.PAGE:
                            {
                                let {
                                    scrollLeft: P,
                                    scrollTop: N,
                                    scrollWidth: L,
                                    scrollHeight: B
                                } = Ar();m = _ ? Math.min(P + h, L) / L : Math.min(N + I, B) / B;
                                break
                            }
                        case Ye.ELEMENT:
                        default:
                            {
                                R = Rh(i, u);
                                let P = n.type.indexOf("mouse") === 0;
                                if (P && Je({
                                        element: t,
                                        nativeEvent: n
                                    }) !== !0) break;
                                let N = t.getBoundingClientRect(),
                                    {
                                        left: L,
                                        top: B,
                                        width: W,
                                        height: K
                                    } = N;
                                if (!P && !aM({
                                        left: d,
                                        top: p
                                    }, N)) break;w = !0,
                                m = _ ? (d - L) / W : (p - B) / K;
                                break
                            }
                    }
                    return A && (m > 1 - Mh || m < Mh) && (m = Math.round(m)), (a !== Ye.ELEMENT || w || w !== o.elementHovered) && (m = l ? 1 - m : m, e.dispatch(jt(R, m))), {
                        elementHovered: w,
                        clientX: d,
                        clientY: p,
                        pageX: h,
                        pageY: I
                    }
                }
            },
            [ZD]: {
                types: Yo,
                handler: ({
                    store: e,
                    eventConfig: t
                }) => {
                    let {
                        continuousParameterGroupId: r,
                        reverse: n
                    } = t, {
                        scrollTop: i,
                        scrollHeight: o,
                        clientHeight: a
                    } = Ar(), s = i / (o - a);
                    s = n ? 1 - s : s, e.dispatch(jt(r, s))
                }
            },
            [YD]: {
                types: Yo,
                handler: ({
                    element: e,
                    store: t,
                    eventConfig: r,
                    eventStateKey: n
                }, i = {
                    scrollPercent: 0
                }) => {
                    let {
                        scrollLeft: o,
                        scrollTop: a,
                        scrollWidth: s,
                        scrollHeight: u,
                        clientHeight: l
                    } = Ar(), {
                        basedOn: v,
                        selectedAxis: d,
                        continuousParameterGroupId: p,
                        startsEntering: h,
                        startsExiting: I,
                        addEndOffset: _,
                        addStartOffset: A,
                        addOffsetValue: m = 0,
                        endOffsetValue: R = 0
                    } = r, w = d === "X_AXIS";
                    if (v === Ye.VIEWPORT) {
                        let P = w ? o / s : a / u;
                        return P !== i.scrollPercent && t.dispatch(jt(p, P)), {
                            scrollPercent: P
                        }
                    } else {
                        let P = Rh(n, p),
                            N = e.getBoundingClientRect(),
                            L = (A ? m : 0) / 100,
                            B = (_ ? R : 0) / 100;
                        L = h ? L : 1 - L, B = I ? B : 1 - B;
                        let W = N.top + Math.min(N.height * L, l),
                            Q = N.top + N.height * B - W,
                            k = Math.min(l + Q, u),
                            g = Math.min(Math.max(0, l - W), k) / k;
                        return g !== i.scrollPercent && t.dispatch(jt(P, g)), {
                            scrollPercent: g
                        }
                    }
                }
            },
            [Vh]: Dh,
            [KD]: Dh,
            [Gh]: { ...$o,
                handler: Ph((e, t) => {
                    t.scrollingDown && De(e)
                })
            },
            [jD]: { ...$o,
                handler: Ph((e, t) => {
                    t.scrollingDown || De(e)
                })
            },
            [Uh]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: He(wr, sM(De))
            },
            [Bh]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: He(wr, uM(De))
            }
        }
    });
    var pE = {};
    Ce(pE, {
        observeRequests: () => xM,
        startActionGroup: () => Or,
        startEngine: () => Xn,
        stopActionGroup: () => $t,
        stopAllActionGroups: () => lE,
        stopEngine: () => Gn
    });

    function xM(e) {
        bt({
            store: e,
            select: ({
                ixRequest: t
            }) => t.preview,
            onChange: LM
        }), bt({
            store: e,
            select: ({
                ixRequest: t
            }) => t.playback,
            onChange: PM
        }), bt({
            store: e,
            select: ({
                ixRequest: t
            }) => t.stop,
            onChange: NM
        }), bt({
            store: e,
            select: ({
                ixRequest: t
            }) => t.clear,
            onChange: DM
        })
    }

    function RM(e) {
        bt({
            store: e,
            select: ({
                ixSession: t
            }) => t.mediaQueryKey,
            onChange: () => {
                Gn(e), aE({
                    store: e,
                    elementApi: xe
                }), Xn({
                    store: e,
                    allowEvents: !0
                }), sE()
            }
        })
    }

    function CM(e, t) {
        let r = bt({
            store: e,
            select: ({
                ixSession: n
            }) => n.tick,
            onChange: n => {
                t(n), r()
            }
        })
    }

    function LM({
        rawData: e,
        defer: t
    }, r) {
        let n = () => {
            Xn({
                store: r,
                rawData: e,
                allowEvents: !0
            }), sE()
        };
        t ? setTimeout(n, 0) : n()
    }

    function sE() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
    }

    function PM(e, t) {
        let {
            actionTypeId: r,
            actionListId: n,
            actionItemId: i,
            eventId: o,
            allowEvents: a,
            immediate: s,
            testManual: u,
            verbose: l = !0
        } = e, {
            rawData: v
        } = e;
        if (n && i && v && s) {
            let d = v.actionLists[n];
            d && (v = vM({
                actionList: d,
                actionItemId: i,
                rawData: v
            }))
        }
        if (Xn({
                store: t,
                rawData: v,
                allowEvents: a,
                testManual: u
            }), n && r === Le.GENERAL_START_ACTION || Zo(r)) {
            $t({
                store: t,
                actionListId: n
            }), cE({
                store: t,
                actionListId: n,
                eventId: o
            });
            let d = Or({
                store: t,
                eventId: o,
                actionListId: n,
                immediate: s,
                verbose: l
            });
            l && d && t.dispatch(Yt({
                actionListId: n,
                isPlaying: !s
            }))
        }
    }

    function NM({
        actionListId: e
    }, t) {
        e ? $t({
            store: t,
            actionListId: e
        }) : lE({
            store: t
        }), Gn(t)
    }

    function DM(e, t) {
        Gn(t), aE({
            store: t,
            elementApi: xe
        })
    }

    function Xn({
        store: e,
        rawData: t,
        allowEvents: r,
        testManual: n
    }) {
        let {
            ixSession: i
        } = e.getState();
        t && e.dispatch(Ro(t)), i.active || (e.dispatch(Co({
            hasBoundaryNodes: !!document.querySelector(Mn),
            reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
        })), r && (GM(e), MM(), e.getState().ixSession.hasDefinedMediaQueries && RM(e)), e.dispatch(Lo()), FM(e, n))
    }

    function MM() {
        let {
            documentElement: e
        } = document;
        e.className.indexOf(Qh) === -1 && (e.className += ` ${Qh}`)
    }

    function FM(e, t) {
        let r = n => {
            let {
                ixSession: i,
                ixParameters: o
            } = e.getState();
            i.active && (e.dispatch(bn(n, o)), t ? CM(e, r) : requestAnimationFrame(r))
        };
        r(window.performance.now())
    }

    function Gn(e) {
        let {
            ixSession: t
        } = e.getState();
        if (t.active) {
            let {
                eventListeners: r
            } = t;
            r.forEach(qM), IM(), e.dispatch(Po())
        }
    }

    function qM({
        target: e,
        listenerParams: t
    }) {
        e.removeEventListener.apply(e, t)
    }

    function kM({
        store: e,
        eventStateKey: t,
        eventTarget: r,
        eventId: n,
        eventConfig: i,
        actionListId: o,
        parameterGroup: a,
        smoothing: s,
        restingValue: u
    }) {
        let {
            ixData: l,
            ixSession: v
        } = e.getState(), {
            events: d
        } = l, p = d[n], {
            eventTypeId: h
        } = p, I = {}, _ = {}, A = [], {
            continuousActionGroups: m
        } = a, {
            id: R
        } = a;
        yM(h, i) && (R = mM(t, R));
        let w = v.hasBoundaryNodes && r ? br(r, Mn) : null;
        m.forEach(P => {
            let {
                keyframe: N,
                actionItems: L
            } = P;
            L.forEach(B => {
                let {
                    actionTypeId: W
                } = B, {
                    target: K
                } = B.config;
                if (!K) return;
                let Q = K.boundaryMode ? w : null,
                    k = TM(K) + Jo + W;
                if (_[k] = XM(_[k], N, B), !I[k]) {
                    I[k] = !0;
                    let {
                        config: x
                    } = B;
                    Fn({
                        config: x,
                        event: p,
                        eventTarget: r,
                        elementRoot: Q,
                        elementApi: xe
                    }).forEach(g => {
                        A.push({
                            element: g,
                            key: k
                        })
                    })
                }
            })
        }), A.forEach(({
            element: P,
            key: N
        }) => {
            let L = _[N],
                B = (0, at.default)(L, "[0].actionItems[0]", {}),
                {
                    actionTypeId: W
                } = B,
                K = kn(W) ? ta(W)(P, B) : null,
                Q = ea({
                    element: P,
                    actionItem: B,
                    elementApi: xe
                }, K);
            ra({
                store: e,
                element: P,
                eventId: n,
                actionListId: o,
                actionItem: B,
                destination: Q,
                continuous: !0,
                parameterId: R,
                actionGroups: L,
                smoothing: s,
                restingValue: u,
                pluginInstance: K
            })
        })
    }

    function XM(e = [], t, r) {
        let n = [...e],
            i;
        return n.some((o, a) => o.keyframe === t ? (i = a, !0) : !1), i == null && (i = n.length, n.push({
            keyframe: t,
            actionItems: []
        })), n[i].actionItems.push(r), n
    }

    function GM(e) {
        let {
            ixData: t
        } = e.getState(), {
            eventTypeMap: r
        } = t;
        uE(e), (0, Qt.default)(r, (i, o) => {
            let a = Yh[o];
            if (!a) {
                console.warn(`IX2 event type not configured: ${o}`);
                return
            }
            zM({
                logic: a,
                store: e,
                events: i
            })
        });
        let {
            ixSession: n
        } = e.getState();
        n.eventListeners.length && UM(e)
    }

    function UM(e) {
        let t = () => {
            uE(e)
        };
        VM.forEach(r => {
            window.addEventListener(r, t), e.dispatch(Tn(window, [r, t]))
        }), t()
    }

    function uE(e) {
        let {
            ixSession: t,
            ixData: r
        } = e.getState(), n = window.innerWidth;
        if (n !== t.viewportWidth) {
            let {
                mediaQueries: i
            } = r;
            e.dispatch(qo({
                width: n,
                mediaQueries: i
            }))
        }
    }

    function zM({
        logic: e,
        store: t,
        events: r
    }) {
        KM(r);
        let {
            types: n,
            handler: i
        } = e, {
            ixData: o
        } = t.getState(), {
            actionLists: a
        } = o, s = BM(r, WM);
        if (!(0, eE.default)(s)) return;
        (0, Qt.default)(s, (d, p) => {
            let h = r[p],
                {
                    action: I,
                    id: _,
                    mediaQueries: A = o.mediaQueryKeys
                } = h,
                {
                    actionListId: m
                } = I.config;
            bM(A, o.mediaQueryKeys) || t.dispatch(ko()), I.actionTypeId === Le.GENERAL_CONTINUOUS_ACTION && (Array.isArray(h.config) ? h.config : [h.config]).forEach(w => {
                let {
                    continuousParameterGroupId: P
                } = w, N = (0, at.default)(a, `${m}.continuousParameterGroups`, []), L = (0, Jh.default)(N, ({
                    id: K
                }) => K === P), B = (w.smoothing || 0) / 100, W = (w.restingState || 0) / 100;
                L && d.forEach((K, Q) => {
                    let k = _ + Jo + Q;
                    kM({
                        store: t,
                        eventStateKey: k,
                        eventTarget: K,
                        eventId: _,
                        eventConfig: w,
                        actionListId: m,
                        parameterGroup: L,
                        smoothing: B,
                        restingValue: W
                    })
                })
            }), (I.actionTypeId === Le.GENERAL_START_ACTION || Zo(I.actionTypeId)) && cE({
                store: t,
                actionListId: m,
                eventId: _
            })
        });
        let u = d => {
                let {
                    ixSession: p
                } = t.getState();
                HM(s, (h, I, _) => {
                    let A = r[I],
                        m = p.eventState[_],
                        {
                            action: R,
                            mediaQueries: w = o.mediaQueryKeys
                        } = A;
                    if (!qn(w, p.mediaQueryKey)) return;
                    let P = (N = {}) => {
                        let L = i({
                            store: t,
                            element: h,
                            event: A,
                            eventConfig: N,
                            nativeEvent: d,
                            eventStateKey: _
                        }, m);
                        AM(L, m) || t.dispatch(No(_, L))
                    };
                    R.actionTypeId === Le.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(A.config) ? A.config : [A.config]).forEach(P) : P()
                })
            },
            l = (0, iE.default)(u, OM),
            v = ({
                target: d = document,
                types: p,
                throttle: h
            }) => {
                p.split(" ").filter(Boolean).forEach(I => {
                    let _ = h ? l : u;
                    d.addEventListener(I, _), t.dispatch(Tn(d, [I, _]))
                })
            };
        Array.isArray(n) ? n.forEach(v) : typeof n == "string" && v(e)
    }

    function KM(e) {
        if (!SM) return;
        let t = {},
            r = "";
        for (let n in e) {
            let {
                eventTypeId: i,
                target: o
            } = e[n], a = Go(o);
            t[a] || (i === Ue.MOUSE_CLICK || i === Ue.MOUSE_SECOND_CLICK) && (t[a] = !0, r += a + "{cursor: pointer;touch-action: manipulation;}")
        }
        if (r) {
            let n = document.createElement("style");
            n.textContent = r, document.body.appendChild(n)
        }
    }

    function cE({
        store: e,
        actionListId: t,
        eventId: r
    }) {
        let {
            ixData: n,
            ixSession: i
        } = e.getState(), {
            actionLists: o,
            events: a
        } = n, s = a[r], u = o[t];
        if (u && u.useFirstGroupAsInitialState) {
            let l = (0, at.default)(u, "actionItemGroups[0].actionItems", []),
                v = (0, at.default)(s, "mediaQueries", n.mediaQueryKeys);
            if (!qn(v, i.mediaQueryKey)) return;
            l.forEach(d => {
                let {
                    config: p,
                    actionTypeId: h
                } = d, I = p ? .target ? .useEventTarget === !0 && p ? .target ? .objectId == null ? {
                    target: s.target,
                    targets: s.targets
                } : p, _ = Fn({
                    config: I,
                    event: s,
                    elementApi: xe
                }), A = kn(h);
                _.forEach(m => {
                    let R = A ? ta(h)(m, d) : null;
                    ra({
                        destination: ea({
                            element: m,
                            actionItem: d,
                            elementApi: xe
                        }, R),
                        immediate: !0,
                        store: e,
                        element: m,
                        eventId: r,
                        actionItem: d,
                        actionListId: t,
                        pluginInstance: R
                    })
                })
            })
        }
    }

    function lE({
        store: e
    }) {
        let {
            ixInstances: t
        } = e.getState();
        (0, Qt.default)(t, r => {
            if (!r.continuous) {
                let {
                    actionListId: n,
                    verbose: i
                } = r;
                na(r, e), i && e.dispatch(Yt({
                    actionListId: n,
                    isPlaying: !1
                }))
            }
        })
    }

    function $t({
        store: e,
        eventId: t,
        eventTarget: r,
        eventStateKey: n,
        actionListId: i
    }) {
        let {
            ixInstances: o,
            ixSession: a
        } = e.getState(), s = a.hasBoundaryNodes && r ? br(r, Mn) : null;
        (0, Qt.default)(o, u => {
            let l = (0, at.default)(u, "actionItem.config.target.boundaryMode"),
                v = n ? u.eventStateKey === n : !0;
            if (u.actionListId === i && u.eventId === t && v) {
                if (s && l && !Vo(s, u.element)) return;
                na(u, e), u.verbose && e.dispatch(Yt({
                    actionListId: i,
                    isPlaying: !1
                }))
            }
        })
    }

    function Or({
        store: e,
        eventId: t,
        eventTarget: r,
        eventStateKey: n,
        actionListId: i,
        groupIndex: o = 0,
        immediate: a,
        verbose: s
    }) {
        let {
            ixData: u,
            ixSession: l
        } = e.getState(), {
            events: v
        } = u, d = v[t] || {}, {
            mediaQueries: p = u.mediaQueryKeys
        } = d, h = (0, at.default)(u, `actionLists.${i}`, {}), {
            actionItemGroups: I,
            useFirstGroupAsInitialState: _
        } = h;
        if (!I || !I.length) return !1;
        o >= I.length && (0, at.default)(d, "config.loop") && (o = 0), o === 0 && _ && o++;
        let m = (o === 0 || o === 1 && _) && Zo(d.action ? .actionTypeId) ? d.config.delay : void 0,
            R = (0, at.default)(I, [o, "actionItems"], []);
        if (!R.length || !qn(p, l.mediaQueryKey)) return !1;
        let w = l.hasBoundaryNodes && r ? br(r, Mn) : null,
            P = gM(R),
            N = !1;
        return R.forEach((L, B) => {
            let {
                config: W,
                actionTypeId: K
            } = L, Q = kn(K), {
                target: k
            } = W;
            if (!k) return;
            let x = k.boundaryMode ? w : null;
            Fn({
                config: W,
                event: d,
                eventTarget: r,
                elementRoot: x,
                elementApi: xe
            }).forEach((C, M) => {
                let q = Q ? ta(K)(C, L) : null,
                    Z = Q ? wM(K)(C, L) : null;
                N = !0;
                let J = P === B && M === 0,
                    D = hM({
                        element: C,
                        actionItem: L
                    }),
                    G = ea({
                        element: C,
                        actionItem: L,
                        elementApi: xe
                    }, q);
                ra({
                    store: e,
                    element: C,
                    actionItem: L,
                    eventId: t,
                    eventTarget: r,
                    eventStateKey: n,
                    actionListId: i,
                    groupIndex: o,
                    isCarrier: J,
                    computedStyle: D,
                    destination: G,
                    immediate: a,
                    verbose: s,
                    pluginInstance: q,
                    pluginDuration: Z,
                    instanceDelay: m
                })
            })
        }), N
    }

    function ra(e) {
        let {
            store: t,
            computedStyle: r,
            ...n
        } = e, {
            element: i,
            actionItem: o,
            immediate: a,
            pluginInstance: s,
            continuous: u,
            restingValue: l,
            eventId: v
        } = n, d = !u, p = dM(), {
            ixElements: h,
            ixSession: I,
            ixData: _
        } = t.getState(), A = fM(h, i), {
            refState: m
        } = h[A] || {}, R = Uo(i), w = I.reducedMotion && Ei[o.actionTypeId], P;
        if (w && u) switch (_.events[v] ? .eventTypeId) {
            case Ue.MOUSE_MOVE:
            case Ue.MOUSE_MOVE_IN_VIEWPORT:
                P = l;
                break;
            default:
                P = .5;
                break
        }
        let N = EM(i, m, r, o, xe, s);
        if (t.dispatch(Do({
                instanceId: p,
                elementId: A,
                origin: N,
                refType: R,
                skipMotion: w,
                skipToValue: P,
                ...n
            })), fE(document.body, "ix2-animation-started", p), a) {
            jM(t, p);
            return
        }
        bt({
            store: t,
            select: ({
                ixInstances: L
            }) => L[p],
            onChange: dE
        }), d && t.dispatch(An(p, I.tick))
    }

    function na(e, t) {
        fE(document.body, "ix2-animation-stopping", {
            instanceId: e.id,
            state: t.getState()
        });
        let {
            elementId: r,
            actionItem: n
        } = e, {
            ixElements: i
        } = t.getState(), {
            ref: o,
            refType: a
        } = i[r] || {};
        a === oE && _M(o, n, xe), t.dispatch(Mo(e.id))
    }

    function fE(e, t, r) {
        let n = document.createEvent("CustomEvent");
        n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n)
    }

    function jM(e, t) {
        let {
            ixParameters: r
        } = e.getState();
        e.dispatch(An(t, 0)), e.dispatch(bn(performance.now(), r));
        let {
            ixInstances: n
        } = e.getState();
        dE(n[t], e)
    }

    function dE(e, t) {
        let {
            active: r,
            continuous: n,
            complete: i,
            elementId: o,
            actionItem: a,
            actionTypeId: s,
            renderType: u,
            current: l,
            groupIndex: v,
            eventId: d,
            eventTarget: p,
            eventStateKey: h,
            actionListId: I,
            isCarrier: _,
            styleProp: A,
            verbose: m,
            pluginInstance: R
        } = e, {
            ixData: w,
            ixSession: P
        } = t.getState(), {
            events: N
        } = w, L = N && N[d] ? N[d] : {}, {
            mediaQueries: B = w.mediaQueryKeys
        } = L;
        if (qn(B, P.mediaQueryKey) && (n || r || i)) {
            if (l || u === lM && i) {
                t.dispatch(Fo(o, s, l, a));
                let {
                    ixElements: W
                } = t.getState(), {
                    ref: K,
                    refType: Q,
                    refState: k
                } = W[o] || {}, x = k && k[s];
                (Q === oE || kn(s)) && pM(K, k, x, d, a, A, xe, u, R)
            }
            if (i) {
                if (_) {
                    let W = Or({
                        store: t,
                        eventId: d,
                        eventTarget: p,
                        eventStateKey: h,
                        actionListId: I,
                        groupIndex: v + 1,
                        verbose: m
                    });
                    m && !W && t.dispatch(Yt({
                        actionListId: I,
                        isPlaying: !1
                    }))
                }
                na(e, t)
            }
        }
    }
    var Jh, at, eE, tE, rE, nE, Qt, iE, Dn, cM, Zo, Jo, Mn, oE, lM, Qh, Fn, fM, ea, bt, dM, pM, aE, gM, hM, EM, vM, yM, mM, qn, _M, IM, TM, bM, AM, kn, ta, wM, Zh, SM, OM, VM, BM, HM, WM, Qo = Ee(() => {
        "use strict";
        Jh = ue(Wi()), at = ue(on()), eE = ue(Sp()), tE = ue(Zp()), rE = ue(eg()), nE = ue(rg()), Qt = ue(ug()), iE = ue(hg());
        Pe();
        Dn = ue(Tt());
        wn();
        Ig();
        $h();
        cM = Object.keys(Fr), Zo = e => cM.includes(e), {
            COLON_DELIMITER: Jo,
            BOUNDARY_SELECTOR: Mn,
            HTML_ELEMENT: oE,
            RENDER_GENERAL: lM,
            W_MOD_IX: Qh
        } = Ae, {
            getAffectedElements: Fn,
            getElementId: fM,
            getDestinationValues: ea,
            observeStore: bt,
            getInstanceId: dM,
            renderHTMLElement: pM,
            clearAllStyles: aE,
            getMaxDurationItemIndex: gM,
            getComputedStyle: hM,
            getInstanceOrigin: EM,
            reduceListToGroup: vM,
            shouldNamespaceEventParameter: yM,
            getNamespacedParameterId: mM,
            shouldAllowMediaQuery: qn,
            cleanupHTMLElement: _M,
            clearObjectCache: IM,
            stringifyTarget: TM,
            mediaQueriesEqual: bM,
            shallowEqual: AM
        } = Dn.IX2VanillaUtils, {
            isPluginType: kn,
            createPluginInstance: ta,
            getPluginDuration: wM
        } = Dn.IX2VanillaPlugins, Zh = navigator.userAgent, SM = Zh.match(/iPad/i) || Zh.match(/iPhone/), OM = 12;
        VM = ["resize", "orientationchange"];
        BM = (e, t) => (0, tE.default)((0, nE.default)(e, t), rE.default), HM = (e, t) => {
            (0, Qt.default)(e, (r, n) => {
                r.forEach((i, o) => {
                    let a = n + Jo + o;
                    t(i, n, a)
                })
            })
        }, WM = e => {
            let t = {
                target: e.target,
                targets: e.targets
            };
            return Fn({
                config: t,
                elementApi: xe
            })
        }
    });
    var EE = f(oa => {
        "use strict";
        Object.defineProperty(oa, "__esModule", {
            value: !0
        });

        function YM(e, t) {
            for (var r in t) Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
        }
        YM(oa, {
            actions: function() {
                return ZM
            },
            destroy: function() {
                return hE
            },
            init: function() {
                return rF
            },
            setEnv: function() {
                return tF
            },
            store: function() {
                return Vn
            }
        });
        var $M = pi(),
            QM = JM((sp(), ze(ap))),
            ia = (Qo(), ze(pE)),
            ZM = eF((wn(), ze(vg)));

        function JM(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function gE(e) {
            if (typeof WeakMap != "function") return null;
            var t = new WeakMap,
                r = new WeakMap;
            return (gE = function(n) {
                return n ? r : t
            })(e)
        }

        function eF(e, t) {
            if (!t && e && e.__esModule) return e;
            if (e === null || typeof e != "object" && typeof e != "function") return {
                default: e
            };
            var r = gE(t);
            if (r && r.has(e)) return r.get(e);
            var n = {
                    __proto__: null
                },
                i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
                }
            return n.default = e, r && r.set(e, n), n
        }
        var Vn = (0, $M.createStore)(QM.default);

        function tF(e) {
            e() && (0, ia.observeRequests)(Vn)
        }

        function rF(e) {
            hE(), (0, ia.startEngine)({
                store: Vn,
                rawData: e,
                allowEvents: !0
            })
        }

        function hE() {
            (0, ia.stopEngine)(Vn)
        }
    });
    var _E = f((nX, mE) => {
        "use strict";
        var vE = Me(),
            yE = EE();
        yE.setEnv(vE.env);
        vE.define("ix2", mE.exports = function() {
            return yE
        })
    });
    var TE = f((iX, IE) => {
        "use strict";
        var Zt = Me();
        Zt.define("links", IE.exports = function(e, t) {
            var r = {},
                n = e(window),
                i, o = Zt.env(),
                a = window.location,
                s = document.createElement("a"),
                u = "w--current",
                l = /index\.(html|php)$/,
                v = /\/$/,
                d, p;
            r.ready = r.design = r.preview = h;

            function h() {
                i = o && Zt.env("design"), p = Zt.env("slug") || a.pathname || "", Zt.scroll.off(_), d = [];
                for (var m = document.links, R = 0; R < m.length; ++R) I(m[R]);
                d.length && (Zt.scroll.on(_), _())
            }

            function I(m) {
                if (!m.getAttribute("hreflang")) {
                    var R = i && m.getAttribute("href-disabled") || m.getAttribute("href");
                    if (s.href = R, !(R.indexOf(":") >= 0)) {
                        var w = e(m);
                        if (s.hash.length > 1 && s.host + s.pathname === a.host + a.pathname) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                            var P = e(s.hash);
                            P.length && d.push({
                                link: w,
                                sec: P,
                                active: !1
                            });
                            return
                        }
                        if (!(R === "#" || R === "")) {
                            var N = s.href === a.href || R === p || l.test(R) && v.test(p);
                            A(w, u, N)
                        }
                    }
                }
            }

            function _() {
                var m = n.scrollTop(),
                    R = n.height();
                t.each(d, function(w) {
                    if (!w.link.attr("hreflang")) {
                        var P = w.link,
                            N = w.sec,
                            L = N.offset().top,
                            B = N.outerHeight(),
                            W = R * .5,
                            K = N.is(":visible") && L + B - W >= m && L + W <= m + R;
                        w.active !== K && (w.active = K, A(P, u, K))
                    }
                })
            }

            function A(m, R, w) {
                var P = m.hasClass(R);
                w && P || !w && !P || (w ? m.addClass(R) : m.removeClass(R))
            }
            return r
        })
    });
    var AE = f((oX, bE) => {
        "use strict";
        var Un = Me();
        Un.define("scroll", bE.exports = function(e) {
            var t = {
                    WF_CLICK_EMPTY: "click.wf-empty-link",
                    WF_CLICK_SCROLL: "click.wf-scroll"
                },
                r = window.location,
                n = I() ? null : window.history,
                i = e(window),
                o = e(document),
                a = e(document.body),
                s = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(x) {
                    window.setTimeout(x, 15)
                },
                u = Un.env("editor") ? ".w-editor-body" : "body",
                l = "header, " + u + " > .header, " + u + " > .w-nav:not([data-no-scroll])",
                v = 'a[href="#"]',
                d = 'a[href*="#"]:not(.w-tab-link):not(' + v + ")",
                p = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
                h = document.createElement("style");
            h.appendChild(document.createTextNode(p));

            function I() {
                try {
                    return !!window.frameElement
                } catch {
                    return !0
                }
            }
            var _ = /^#[a-zA-Z0-9][\w:.-]*$/;

            function A(x) {
                return _.test(x.hash) && x.host + x.pathname === r.host + r.pathname
            }
            let m = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");

            function R() {
                return document.body.getAttribute("data-wf-scroll-motion") === "none" || m.matches
            }

            function w(x, g) {
                var C;
                switch (g) {
                    case "add":
                        C = x.attr("tabindex"), C ? x.attr("data-wf-tabindex-swap", C) : x.attr("tabindex", "-1");
                        break;
                    case "remove":
                        C = x.attr("data-wf-tabindex-swap"), C ? (x.attr("tabindex", C), x.removeAttr("data-wf-tabindex-swap")) : x.removeAttr("tabindex");
                        break
                }
                x.toggleClass("wf-force-outline-none", g === "add")
            }

            function P(x) {
                var g = x.currentTarget;
                if (!(Un.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(g.className))) {
                    var C = A(g) ? g.hash : "";
                    if (C !== "") {
                        var M = e(C);
                        M.length && (x && (x.preventDefault(), x.stopPropagation()), N(C, x), window.setTimeout(function() {
                            L(M, function() {
                                w(M, "add"), M.get(0).focus({
                                    preventScroll: !0
                                }), w(M, "remove")
                            })
                        }, x ? 0 : 300))
                    }
                }
            }

            function N(x) {
                if (r.hash !== x && n && n.pushState && !(Un.env.chrome && r.protocol === "file:")) {
                    var g = n.state && n.state.hash;
                    g !== x && n.pushState({
                        hash: x
                    }, "", x)
                }
            }

            function L(x, g) {
                var C = i.scrollTop(),
                    M = B(x);
                if (C !== M) {
                    var q = W(x, C, M),
                        Z = Date.now(),
                        J = function() {
                            var D = Date.now() - Z;
                            window.scroll(0, K(C, M, D, q)), D <= q ? s(J) : typeof g == "function" && g()
                        };
                    s(J)
                }
            }

            function B(x) {
                var g = e(l),
                    C = g.css("position") === "fixed" ? g.outerHeight() : 0,
                    M = x.offset().top - C;
                if (x.data("scroll") === "mid") {
                    var q = i.height() - C,
                        Z = x.outerHeight();
                    Z < q && (M -= Math.round((q - Z) / 2))
                }
                return M
            }

            function W(x, g, C) {
                if (R()) return 0;
                var M = 1;
                return a.add(x).each(function(q, Z) {
                    var J = parseFloat(Z.getAttribute("data-scroll-time"));
                    !isNaN(J) && J >= 0 && (M = J)
                }), (472.143 * Math.log(Math.abs(g - C) + 125) - 2e3) * M
            }

            function K(x, g, C, M) {
                return C > M ? g : x + (g - x) * Q(C / M)
            }

            function Q(x) {
                return x < .5 ? 4 * x * x * x : (x - 1) * (2 * x - 2) * (2 * x - 2) + 1
            }

            function k() {
                var {
                    WF_CLICK_EMPTY: x,
                    WF_CLICK_SCROLL: g
                } = t;
                o.on(g, d, P), o.on(x, v, function(C) {
                    C.preventDefault()
                }), document.head.insertBefore(h, document.head.firstChild)
            }
            return {
                ready: k
            }
        })
    });
    var SE = f((aX, wE) => {
        "use strict";
        var nF = Me();
        nF.define("touch", wE.exports = function(e) {
            var t = {},
                r = window.getSelection;
            e.event.special.tap = {
                bindType: "click",
                delegateType: "click"
            }, t.init = function(o) {
                return o = typeof o == "string" ? e(o).get(0) : o, o ? new n(o) : null
            };

            function n(o) {
                var a = !1,
                    s = !1,
                    u = Math.min(Math.round(window.innerWidth * .04), 40),
                    l, v;
                o.addEventListener("touchstart", d, !1), o.addEventListener("touchmove", p, !1), o.addEventListener("touchend", h, !1), o.addEventListener("touchcancel", I, !1), o.addEventListener("mousedown", d, !1), o.addEventListener("mousemove", p, !1), o.addEventListener("mouseup", h, !1), o.addEventListener("mouseout", I, !1);

                function d(A) {
                    var m = A.touches;
                    m && m.length > 1 || (a = !0, m ? (s = !0, l = m[0].clientX) : l = A.clientX, v = l)
                }

                function p(A) {
                    if (a) {
                        if (s && A.type === "mousemove") {
                            A.preventDefault(), A.stopPropagation();
                            return
                        }
                        var m = A.touches,
                            R = m ? m[0].clientX : A.clientX,
                            w = R - v;
                        v = R, Math.abs(w) > u && r && String(r()) === "" && (i("swipe", A, {
                            direction: w > 0 ? "right" : "left"
                        }), I())
                    }
                }

                function h(A) {
                    if (a && (a = !1, s && A.type === "mouseup")) {
                        A.preventDefault(), A.stopPropagation(), s = !1;
                        return
                    }
                }

                function I() {
                    a = !1
                }

                function _() {
                    o.removeEventListener("touchstart", d, !1), o.removeEventListener("touchmove", p, !1), o.removeEventListener("touchend", h, !1), o.removeEventListener("touchcancel", I, !1), o.removeEventListener("mousedown", d, !1), o.removeEventListener("mousemove", p, !1), o.removeEventListener("mouseup", h, !1), o.removeEventListener("mouseout", I, !1), o = null
                }
                this.destroy = _
            }

            function i(o, a, s) {
                var u = e.Event(o, {
                    originalEvent: a
                });
                e(a.target).trigger(u, s)
            }
            return t.instance = t.init(document), t
        })
    });
    var OE = f(aa => {
        "use strict";
        Object.defineProperty(aa, "__esModule", {
            value: !0
        });
        Object.defineProperty(aa, "default", {
            enumerable: !0,
            get: function() {
                return iF
            }
        });

        function iF(e, t, r, n, i, o, a, s, u, l, v, d, p) {
            return function(h) {
                e(h);
                var I = h.form,
                    _ = {
                        name: I.attr("data-name") || I.attr("name") || "Untitled Form",
                        pageId: I.attr("data-wf-page-id") || "",
                        elementId: I.attr("data-wf-element-id") || "",
                        source: t.href,
                        test: r.env(),
                        fields: {},
                        fileUploads: {},
                        dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(I.html()),
                        trackingCookies: n()
                    };
                let A = I.attr("data-wf-flow");
                A && (_.wfFlow = A), i(h);
                var m = o(I, _.fields);
                if (m) return a(m);
                if (_.fileUploads = s(I), u(h), !l) {
                    v(h);
                    return
                }
                d.ajax({
                    url: p,
                    type: "POST",
                    data: _,
                    dataType: "json",
                    crossDomain: !0
                }).done(function(R) {
                    R && R.code === 200 && (h.success = !0), v(h)
                }).fail(function() {
                    v(h)
                })
            }
        }
    });
    var RE = f((uX, xE) => {
        "use strict";
        var Bn = Me();
        Bn.define("forms", xE.exports = function(e, t) {
            var r = {},
                n = e(document),
                i, o = window.location,
                a = window.XDomainRequest && !window.atob,
                s = ".w-form",
                u, l = /e(-)?mail/i,
                v = /^\S+@\S+$/,
                d = window.alert,
                p = Bn.env(),
                h, I, _, A = /list-manage[1-9]?.com/i,
                m = t.debounce(function() {
                    d("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
                }, 100);
            r.ready = r.design = r.preview = function() {
                R(), !p && !h && P()
            };

            function R() {
                u = e("html").attr("data-wf-site"), I = "https://webflow.com/api/v1/form/" + u, a && I.indexOf("https://webflow.com") >= 0 && (I = I.replace("https://webflow.com", "https://formdata.webflow.com")), _ = `${I}/signFile`, i = e(s + " form"), i.length && i.each(w)
            }

            function w(D, G) {
                var j = e(G),
                    X = e.data(G, s);
                X || (X = e.data(G, s, {
                    form: j
                })), N(X);
                var F = j.closest("div.w-form");
                X.done = F.find("> .w-form-done"), X.fail = F.find("> .w-form-fail"), X.fileUploads = F.find(".w-file-upload"), X.fileUploads.each(function(re) {
                    q(re, X)
                });
                var z = X.form.attr("aria-label") || X.form.attr("data-name") || "Form";
                X.done.attr("aria-label") || X.form.attr("aria-label", z), X.done.attr("tabindex", "-1"), X.done.attr("role", "region"), X.done.attr("aria-label") || X.done.attr("aria-label", z + " success"), X.fail.attr("tabindex", "-1"), X.fail.attr("role", "region"), X.fail.attr("aria-label") || X.fail.attr("aria-label", z + " failure");
                var ie = X.action = j.attr("action");
                if (X.handler = null, X.redirect = j.attr("data-redirect"), A.test(ie)) {
                    X.handler = g;
                    return
                }
                if (!ie) {
                    if (u) {
                        X.handler = (() => {
                            let re = OE().default;
                            return re(N, o, Bn, Q, M, B, d, W, L, u, C, e, I)
                        })();
                        return
                    }
                    m()
                }
            }

            function P() {
                h = !0, n.on("submit", s + " form", function(re) {
                    var te = e.data(this, s);
                    te.handler && (te.evt = re, te.handler(te))
                });
                let D = ".w-checkbox-input",
                    G = ".w-radio-input",
                    j = "w--redirected-checked",
                    X = "w--redirected-focus",
                    F = "w--redirected-focus-visible",
                    z = ":focus-visible, [data-wf-focus-visible]",
                    ie = [
                        ["checkbox", D],
                        ["radio", G]
                    ];
                n.on("change", s + ' form input[type="checkbox"]:not(' + D + ")", re => {
                    e(re.target).siblings(D).toggleClass(j)
                }), n.on("change", s + ' form input[type="radio"]', re => {
                    e(`input[name="${re.target.name}"]:not(${D})`).map((de, et) => e(et).siblings(G).removeClass(j));
                    let te = e(re.target);
                    te.hasClass("w-radio-input") || te.siblings(G).addClass(j)
                }), ie.forEach(([re, te]) => {
                    n.on("focus", s + ` form input[type="${re}"]:not(` + te + ")", de => {
                        e(de.target).siblings(te).addClass(X), e(de.target).filter(z).siblings(te).addClass(F)
                    }), n.on("blur", s + ` form input[type="${re}"]:not(` + te + ")", de => {
                        e(de.target).siblings(te).removeClass(`${X} ${F}`)
                    })
                })
            }

            function N(D) {
                var G = D.btn = D.form.find(':input[type="submit"]');
                D.wait = D.btn.attr("data-wait") || null, D.success = !1, G.prop("disabled", !1), D.label && G.val(D.label)
            }

            function L(D) {
                var G = D.btn,
                    j = D.wait;
                G.prop("disabled", !0), j && (D.label = G.val(), G.val(j))
            }

            function B(D, G) {
                var j = null;
                return G = G || {}, D.find(':input:not([type="submit"]):not([type="file"])').each(function(X, F) {
                    var z = e(F),
                        ie = z.attr("type"),
                        re = z.attr("data-name") || z.attr("name") || "Field " + (X + 1);
                    re = encodeURIComponent(re);
                    var te = z.val();
                    if (ie === "checkbox") te = z.is(":checked");
                    else if (ie === "radio") {
                        if (G[re] === null || typeof G[re] == "string") return;
                        te = D.find('input[name="' + z.attr("name") + '"]:checked').val() || null
                    }
                    typeof te == "string" && (te = e.trim(te)), G[re] = te, j = j || k(z, ie, re, te)
                }), j
            }

            function W(D) {
                var G = {};
                return D.find(':input[type="file"]').each(function(j, X) {
                    var F = e(X),
                        z = F.attr("data-name") || F.attr("name") || "File " + (j + 1),
                        ie = F.attr("data-value");
                    typeof ie == "string" && (ie = e.trim(ie)), G[z] = ie
                }), G
            }
            let K = {
                _mkto_trk: "marketo"
            };

            function Q() {
                return document.cookie.split("; ").reduce(function(G, j) {
                    let X = j.split("="),
                        F = X[0];
                    if (F in K) {
                        let z = K[F],
                            ie = X.slice(1).join("=");
                        G[z] = ie
                    }
                    return G
                }, {})
            }

            function k(D, G, j, X) {
                var F = null;
                return G === "password" ? F = "Passwords cannot be submitted." : D.attr("required") ? X ? l.test(D.attr("type")) && (v.test(X) || (F = "Please enter a valid email address for: " + j)) : F = "Please fill out the required field: " + j : j === "g-recaptcha-response" && !X && (F = "Please confirm you\u2019re not a robot."), F
            }

            function x(D) {
                M(D), C(D)
            }

            function g(D) {
                N(D);
                var G = D.form,
                    j = {};
                if (/^https/.test(o.href) && !/^https/.test(D.action)) {
                    G.attr("method", "post");
                    return
                }
                M(D);
                var X = B(G, j);
                if (X) return d(X);
                L(D);
                var F;
                t.each(j, function(te, de) {
                    l.test(de) && (j.EMAIL = te), /^((full[ _-]?)?name)$/i.test(de) && (F = te), /^(first[ _-]?name)$/i.test(de) && (j.FNAME = te), /^(last[ _-]?name)$/i.test(de) && (j.LNAME = te)
                }), F && !j.FNAME && (F = F.split(" "), j.FNAME = F[0], j.LNAME = j.LNAME || F[1]);
                var z = D.action.replace("/post?", "/post-json?") + "&c=?",
                    ie = z.indexOf("u=") + 2;
                ie = z.substring(ie, z.indexOf("&", ie));
                var re = z.indexOf("id=") + 3;
                re = z.substring(re, z.indexOf("&", re)), j["b_" + ie + "_" + re] = "", e.ajax({
                    url: z,
                    data: j,
                    dataType: "jsonp"
                }).done(function(te) {
                    D.success = te.result === "success" || /already/.test(te.msg), D.success || console.info("MailChimp error: " + te.msg), C(D)
                }).fail(function() {
                    C(D)
                })
            }

            function C(D) {
                var G = D.form,
                    j = D.redirect,
                    X = D.success;
                if (X && j) {
                    Bn.location(j);
                    return
                }
                D.done.toggle(X), D.fail.toggle(!X), X ? D.done.focus() : D.fail.focus(), G.toggle(!X), N(D)
            }

            function M(D) {
                D.evt && D.evt.preventDefault(), D.evt = null
            }

            function q(D, G) {
                if (!G.fileUploads || !G.fileUploads[D]) return;
                var j, X = e(G.fileUploads[D]),
                    F = X.find("> .w-file-upload-default"),
                    z = X.find("> .w-file-upload-uploading"),
                    ie = X.find("> .w-file-upload-success"),
                    re = X.find("> .w-file-upload-error"),
                    te = F.find(".w-file-upload-input"),
                    de = F.find(".w-file-upload-label"),
                    et = de.children(),
                    ce = re.find(".w-file-upload-error-msg"),
                    E = ie.find(".w-file-upload-file"),
                    V = ie.find(".w-file-remove-link"),
                    Y = E.find(".w-file-upload-file-name"),
                    H = ce.attr("data-w-size-error"),
                    ge = ce.attr("data-w-type-error"),
                    ht = ce.attr("data-w-generic-error");
                if (p || de.on("click keydown", function(T) {
                        T.type === "keydown" && T.which !== 13 && T.which !== 32 || (T.preventDefault(), te.click())
                    }), de.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"), V.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"), p) te.on("click", function(T) {
                    T.preventDefault()
                }), de.on("click", function(T) {
                    T.preventDefault()
                }), et.on("click", function(T) {
                    T.preventDefault()
                });
                else {
                    V.on("click keydown", function(T) {
                        if (T.type === "keydown") {
                            if (T.which !== 13 && T.which !== 32) return;
                            T.preventDefault()
                        }
                        te.removeAttr("data-value"), te.val(""), Y.html(""), F.toggle(!0), ie.toggle(!1), de.focus()
                    }), te.on("change", function(T) {
                        j = T.target && T.target.files && T.target.files[0], j && (F.toggle(!1), re.toggle(!1), z.toggle(!0), z.focus(), Y.text(j.name), S() || L(G), G.fileUploads[D].uploading = !0, Z(j, y))
                    });
                    var tt = de.outerHeight();
                    te.height(tt), te.width(1)
                }

                function c(T) {
                    var O = T.responseJSON && T.responseJSON.msg,
                        $ = ht;
                    typeof O == "string" && O.indexOf("InvalidFileTypeError") === 0 ? $ = ge : typeof O == "string" && O.indexOf("MaxFileSizeError") === 0 && ($ = H), ce.text($), te.removeAttr("data-value"), te.val(""), z.toggle(!1), F.toggle(!0), re.toggle(!0), re.focus(), G.fileUploads[D].uploading = !1, S() || N(G)
                }

                function y(T, O) {
                    if (T) return c(T);
                    var $ = O.fileName,
                        ne = O.postData,
                        pe = O.fileId,
                        U = O.s3Url;
                    te.attr("data-value", pe), J(U, ne, j, $, b)
                }

                function b(T) {
                    if (T) return c(T);
                    z.toggle(!1), ie.css("display", "inline-block"), ie.focus(), G.fileUploads[D].uploading = !1, S() || N(G)
                }

                function S() {
                    var T = G.fileUploads && G.fileUploads.toArray() || [];
                    return T.some(function(O) {
                        return O.uploading
                    })
                }
            }

            function Z(D, G) {
                var j = new URLSearchParams({
                    name: D.name,
                    size: D.size
                });
                e.ajax({
                    type: "GET",
                    url: `${_}?${j}`,
                    crossDomain: !0
                }).done(function(X) {
                    G(null, X)
                }).fail(function(X) {
                    G(X)
                })
            }

            function J(D, G, j, X, F) {
                var z = new FormData;
                for (var ie in G) z.append(ie, G[ie]);
                z.append("file", j, X), e.ajax({
                    type: "POST",
                    url: D,
                    data: z,
                    processData: !1,
                    contentType: !1
                }).done(function() {
                    F(null)
                }).fail(function(re) {
                    F(re)
                })
            }
            return r
        })
    });
    var LE = f((cX, CE) => {
        "use strict";
        var pt = Me(),
            oF = Mr(),
            be = {
                ARROW_LEFT: 37,
                ARROW_UP: 38,
                ARROW_RIGHT: 39,
                ARROW_DOWN: 40,
                ESCAPE: 27,
                SPACE: 32,
                ENTER: 13,
                HOME: 36,
                END: 35
            };
        pt.define("navbar", CE.exports = function(e, t) {
            var r = {},
                n = e.tram,
                i = e(window),
                o = e(document),
                a = t.debounce,
                s, u, l, v, d = pt.env(),
                p = '<div class="w-nav-overlay" data-wf-ignore />',
                h = ".w-nav",
                I = "w--open",
                _ = "w--nav-dropdown-open",
                A = "w--nav-dropdown-toggle-open",
                m = "w--nav-dropdown-list-open",
                R = "w--nav-link-open",
                w = oF.triggers,
                P = e();
            r.ready = r.design = r.preview = N, r.destroy = function() {
                P = e(), L(), u && u.length && u.each(Q)
            };

            function N() {
                l = d && pt.env("design"), v = pt.env("editor"), s = e(document.body), u = o.find(h), u.length && (u.each(K), L(), B())
            }

            function L() {
                pt.resize.off(W)
            }

            function B() {
                pt.resize.on(W)
            }

            function W() {
                u.each(F)
            }

            function K(E, V) {
                var Y = e(V),
                    H = e.data(V, h);
                H || (H = e.data(V, h, {
                    open: !1,
                    el: Y,
                    config: {},
                    selectedIdx: -1
                })), H.menu = Y.find(".w-nav-menu"), H.links = H.menu.find(".w-nav-link"), H.dropdowns = H.menu.find(".w-dropdown"), H.dropdownToggle = H.menu.find(".w-dropdown-toggle"), H.dropdownList = H.menu.find(".w-dropdown-list"), H.button = Y.find(".w-nav-button"), H.container = Y.find(".w-container"), H.overlayContainerId = "w-nav-overlay-" + E, H.outside = j(H);
                var ge = Y.find(".w-nav-brand");
                ge && ge.attr("href") === "/" && ge.attr("aria-label") == null && ge.attr("aria-label", "home"), H.button.attr("style", "-webkit-user-select: text;"), H.button.attr("aria-label") == null && H.button.attr("aria-label", "menu"), H.button.attr("role", "button"), H.button.attr("tabindex", "0"), H.button.attr("aria-controls", H.overlayContainerId), H.button.attr("aria-haspopup", "menu"), H.button.attr("aria-expanded", "false"), H.el.off(h), H.button.off(h), H.menu.off(h), g(H), l ? (k(H), H.el.on("setting" + h, C(H))) : (x(H), H.button.on("click" + h, D(H)), H.menu.on("click" + h, "a", G(H)), H.button.on("keydown" + h, M(H)), H.el.on("keydown" + h, q(H))), F(E, V)
            }

            function Q(E, V) {
                var Y = e.data(V, h);
                Y && (k(Y), e.removeData(V, h))
            }

            function k(E) {
                E.overlay && (ce(E, !0), E.overlay.remove(), E.overlay = null)
            }

            function x(E) {
                E.overlay || (E.overlay = e(p).appendTo(E.el), E.overlay.attr("id", E.overlayContainerId), E.parent = E.menu.parent(), ce(E, !0))
            }

            function g(E) {
                var V = {},
                    Y = E.config || {},
                    H = V.animation = E.el.attr("data-animation") || "default";
                V.animOver = /^over/.test(H), V.animDirect = /left$/.test(H) ? -1 : 1, Y.animation !== H && E.open && t.defer(J, E), V.easing = E.el.attr("data-easing") || "ease", V.easing2 = E.el.attr("data-easing2") || "ease";
                var ge = E.el.attr("data-duration");
                V.duration = ge != null ? Number(ge) : 400, V.docHeight = E.el.attr("data-doc-height"), E.config = V
            }

            function C(E) {
                return function(V, Y) {
                    Y = Y || {};
                    var H = i.width();
                    g(E), Y.open === !0 && de(E, !0), Y.open === !1 && ce(E, !0), E.open && t.defer(function() {
                        H !== i.width() && J(E)
                    })
                }
            }

            function M(E) {
                return function(V) {
                    switch (V.keyCode) {
                        case be.SPACE:
                        case be.ENTER:
                            return D(E)(), V.preventDefault(), V.stopPropagation();
                        case be.ESCAPE:
                            return ce(E), V.preventDefault(), V.stopPropagation();
                        case be.ARROW_RIGHT:
                        case be.ARROW_DOWN:
                        case be.HOME:
                        case be.END:
                            return E.open ? (V.keyCode === be.END ? E.selectedIdx = E.links.length - 1 : E.selectedIdx = 0, Z(E), V.preventDefault(), V.stopPropagation()) : (V.preventDefault(), V.stopPropagation())
                    }
                }
            }

            function q(E) {
                return function(V) {
                    if (E.open) switch (E.selectedIdx = E.links.index(document.activeElement), V.keyCode) {
                        case be.HOME:
                        case be.END:
                            return V.keyCode === be.END ? E.selectedIdx = E.links.length - 1 : E.selectedIdx = 0, Z(E), V.preventDefault(), V.stopPropagation();
                        case be.ESCAPE:
                            return ce(E), E.button.focus(), V.preventDefault(), V.stopPropagation();
                        case be.ARROW_LEFT:
                        case be.ARROW_UP:
                            return E.selectedIdx = Math.max(-1, E.selectedIdx - 1), Z(E), V.preventDefault(), V.stopPropagation();
                        case be.ARROW_RIGHT:
                        case be.ARROW_DOWN:
                            return E.selectedIdx = Math.min(E.links.length - 1, E.selectedIdx + 1), Z(E), V.preventDefault(), V.stopPropagation()
                    }
                }
            }

            function Z(E) {
                if (E.links[E.selectedIdx]) {
                    var V = E.links[E.selectedIdx];
                    V.focus(), G(V)
                }
            }

            function J(E) {
                E.open && (ce(E, !0), de(E, !0))
            }

            function D(E) {
                return a(function() {
                    E.open ? ce(E) : de(E)
                })
            }

            function G(E) {
                return function(V) {
                    var Y = e(this),
                        H = Y.attr("href");
                    if (!pt.validClick(V.currentTarget)) {
                        V.preventDefault();
                        return
                    }
                    H && H.indexOf("#") === 0 && E.open && ce(E)
                }
            }

            function j(E) {
                return E.outside && o.off("click" + h, E.outside),
                    function(V) {
                        var Y = e(V.target);
                        v && Y.closest(".w-editor-bem-EditorOverlay").length || X(E, Y)
                    }
            }
            var X = a(function(E, V) {
                if (E.open) {
                    var Y = V.closest(".w-nav-menu");
                    E.menu.is(Y) || ce(E)
                }
            });

            function F(E, V) {
                var Y = e.data(V, h),
                    H = Y.collapsed = Y.button.css("display") !== "none";
                if (Y.open && !H && !l && ce(Y, !0), Y.container.length) {
                    var ge = ie(Y);
                    Y.links.each(ge), Y.dropdowns.each(ge)
                }
                Y.open && et(Y)
            }
            var z = "max-width";

            function ie(E) {
                var V = E.container.css(z);
                return V === "none" && (V = ""),
                    function(Y, H) {
                        H = e(H), H.css(z, ""), H.css(z) === "none" && H.css(z, V)
                    }
            }

            function re(E, V) {
                V.setAttribute("data-nav-menu-open", "")
            }

            function te(E, V) {
                V.removeAttribute("data-nav-menu-open")
            }

            function de(E, V) {
                if (E.open) return;
                E.open = !0, E.menu.each(re), E.links.addClass(R), E.dropdowns.addClass(_), E.dropdownToggle.addClass(A), E.dropdownList.addClass(m), E.button.addClass(I);
                var Y = E.config,
                    H = Y.animation;
                (H === "none" || !n.support.transform || Y.duration <= 0) && (V = !0);
                var ge = et(E),
                    ht = E.menu.outerHeight(!0),
                    tt = E.menu.outerWidth(!0),
                    c = E.el.height(),
                    y = E.el[0];
                if (F(0, y), w.intro(0, y), pt.redraw.up(), l || o.on("click" + h, E.outside), V) {
                    T();
                    return
                }
                var b = "transform " + Y.duration + "ms " + Y.easing;
                if (E.overlay && (P = E.menu.prev(), E.overlay.show().append(E.menu)), Y.animOver) {
                    n(E.menu).add(b).set({
                        x: Y.animDirect * tt,
                        height: ge
                    }).start({
                        x: 0
                    }).then(T), E.overlay && E.overlay.width(tt);
                    return
                }
                var S = c + ht;
                n(E.menu).add(b).set({
                    y: -S
                }).start({
                    y: 0
                }).then(T);

                function T() {
                    E.button.attr("aria-expanded", "true")
                }
            }

            function et(E) {
                var V = E.config,
                    Y = V.docHeight ? o.height() : s.height();
                return V.animOver ? E.menu.height(Y) : E.el.css("position") !== "fixed" && (Y -= E.el.outerHeight(!0)), E.overlay && E.overlay.height(Y), Y
            }

            function ce(E, V) {
                if (!E.open) return;
                E.open = !1, E.button.removeClass(I);
                var Y = E.config;
                if ((Y.animation === "none" || !n.support.transform || Y.duration <= 0) && (V = !0), w.outro(0, E.el[0]), o.off("click" + h, E.outside), V) {
                    n(E.menu).stop(), y();
                    return
                }
                var H = "transform " + Y.duration + "ms " + Y.easing2,
                    ge = E.menu.outerHeight(!0),
                    ht = E.menu.outerWidth(!0),
                    tt = E.el.height();
                if (Y.animOver) {
                    n(E.menu).add(H).start({
                        x: ht * Y.animDirect
                    }).then(y);
                    return
                }
                var c = tt + ge;
                n(E.menu).add(H).start({
                    y: -c
                }).then(y);

                function y() {
                    E.menu.height(""), n(E.menu).set({
                        x: 0,
                        y: 0
                    }), E.menu.each(te), E.links.removeClass(R), E.dropdowns.removeClass(_), E.dropdownToggle.removeClass(A), E.dropdownList.removeClass(m), E.overlay && E.overlay.children().length && (P.length ? E.menu.insertAfter(P) : E.menu.prependTo(E.parent), E.overlay.attr("style", "").hide()), E.el.triggerHandler("w-close"), E.button.attr("aria-expanded", "false")
                }
            }
            return r
        })
    });
    var NE = f((lX, PE) => {
        "use strict";
        var gt = Me(),
            aF = Mr();
        gt.define("tabs", PE.exports = function(e) {
            var t = {},
                r = e.tram,
                n = e(document),
                i, o, a = gt.env,
                s = a.safari,
                u = a(),
                l = "data-w-tab",
                v = "data-w-pane",
                d = ".w-tabs",
                p = "w--current",
                h = "w--tab-active",
                I = aF.triggers,
                _ = !1;
            t.ready = t.design = t.preview = A, t.redraw = function() {
                _ = !0, A(), _ = !1
            }, t.destroy = function() {
                i = n.find(d), i.length && (i.each(w), m())
            };

            function A() {
                o = u && gt.env("design"), i = n.find(d), i.length && (i.each(P), gt.env("preview") && !_ && i.each(w), m(), R())
            }

            function m() {
                gt.redraw.off(t.redraw)
            }

            function R() {
                gt.redraw.on(t.redraw)
            }

            function w(k, x) {
                var g = e.data(x, d);
                g && (g.links && g.links.each(I.reset), g.panes && g.panes.each(I.reset))
            }

            function P(k, x) {
                var g = d.substr(1) + "-" + k,
                    C = e(x),
                    M = e.data(x, d);
                if (M || (M = e.data(x, d, {
                        el: C,
                        config: {}
                    })), M.current = null, M.tabIdentifier = g + "-" + l, M.paneIdentifier = g + "-" + v, M.menu = C.children(".w-tab-menu"), M.links = M.menu.children(".w-tab-link"), M.content = C.children(".w-tab-content"), M.panes = M.content.children(".w-tab-pane"), M.el.off(d), M.links.off(d), M.menu.attr("role", "tablist"), M.links.attr("tabindex", "-1"), N(M), !o) {
                    M.links.on("click" + d, B(M)), M.links.on("keydown" + d, W(M));
                    var q = M.links.filter("." + p),
                        Z = q.attr(l);
                    Z && K(M, {
                        tab: Z,
                        immediate: !0
                    })
                }
            }

            function N(k) {
                var x = {};
                x.easing = k.el.attr("data-easing") || "ease";
                var g = parseInt(k.el.attr("data-duration-in"), 10);
                g = x.intro = g === g ? g : 0;
                var C = parseInt(k.el.attr("data-duration-out"), 10);
                C = x.outro = C === C ? C : 0, x.immediate = !g && !C, k.config = x
            }

            function L(k) {
                var x = k.current;
                return Array.prototype.findIndex.call(k.links, g => g.getAttribute(l) === x, null)
            }

            function B(k) {
                return function(x) {
                    x.preventDefault();
                    var g = x.currentTarget.getAttribute(l);
                    g && K(k, {
                        tab: g
                    })
                }
            }

            function W(k) {
                return function(x) {
                    var g = L(k),
                        C = x.key,
                        M = {
                            ArrowLeft: g - 1,
                            ArrowUp: g - 1,
                            ArrowRight: g + 1,
                            ArrowDown: g + 1,
                            End: k.links.length - 1,
                            Home: 0
                        };
                    if (C in M) {
                        x.preventDefault();
                        var q = M[C];
                        q === -1 && (q = k.links.length - 1), q === k.links.length && (q = 0);
                        var Z = k.links[q],
                            J = Z.getAttribute(l);
                        J && K(k, {
                            tab: J
                        })
                    }
                }
            }

            function K(k, x) {
                x = x || {};
                var g = k.config,
                    C = g.easing,
                    M = x.tab;
                if (M !== k.current) {
                    k.current = M;
                    var q;
                    k.links.each(function(F, z) {
                        var ie = e(z);
                        if (x.immediate || g.immediate) {
                            var re = k.panes[F];
                            z.id || (z.id = k.tabIdentifier + "-" + F), re.id || (re.id = k.paneIdentifier + "-" + F), z.href = "#" + re.id, z.setAttribute("role", "tab"), z.setAttribute("aria-controls", re.id), z.setAttribute("aria-selected", "false"), re.setAttribute("role", "tabpanel"), re.setAttribute("aria-labelledby", z.id)
                        }
                        z.getAttribute(l) === M ? (q = z, ie.addClass(p).removeAttr("tabindex").attr({
                            "aria-selected": "true"
                        }).each(I.intro)) : ie.hasClass(p) && ie.removeClass(p).attr({
                            tabindex: "-1",
                            "aria-selected": "false"
                        }).each(I.outro)
                    });
                    var Z = [],
                        J = [];
                    k.panes.each(function(F, z) {
                        var ie = e(z);
                        z.getAttribute(l) === M ? Z.push(z) : ie.hasClass(h) && J.push(z)
                    });
                    var D = e(Z),
                        G = e(J);
                    if (x.immediate || g.immediate) {
                        D.addClass(h).each(I.intro), G.removeClass(h), _ || gt.redraw.up();
                        return
                    } else {
                        var j = window.scrollX,
                            X = window.scrollY;
                        q.focus(), window.scrollTo(j, X)
                    }
                    G.length && g.outro ? (G.each(I.outro), r(G).add("opacity " + g.outro + "ms " + C, {
                        fallback: s
                    }).start({
                        opacity: 0
                    }).then(() => Q(g, G, D))) : Q(g, G, D)
                }
            }

            function Q(k, x, g) {
                if (x.removeClass(h).css({
                        opacity: "",
                        transition: "",
                        transform: "",
                        width: "",
                        height: ""
                    }), g.addClass(h).each(I.intro), gt.redraw.up(), !k.intro) return r(g).set({
                    opacity: 1
                });
                r(g).set({
                    opacity: 0
                }).redraw().add("opacity " + k.intro + "ms " + k.easing, {
                    fallback: s
                }).start({
                    opacity: 1
                })
            }
            return t
        })
    });
    _a();
    Ta();
    Aa();
    Oa();
    Mr();
    _E();
    TE();
    AE();
    SE();
    RE();
    LE();
    NE();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
    "events": {
        "e": {
            "id": "e",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-17"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b2|edc09b21-7043-e0a3-721c-e8d02348a8e0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b2|edc09b21-7043-e0a3-721c-e8d02348a8e0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1651457275398
        },
        "e-3": {
            "id": "e-3",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-4"
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b2|edc09b21-7043-e0a3-721c-e8d02348a8e0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b2|edc09b21-7043-e0a3-721c-e8d02348a8e0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1651457993759
        },
        "e-9": {
            "id": "e-9",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-10"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".slider-main_component",
                "originalId": "64d3dd9edfb41666c35b15b2|b8fa81c6-4d14-4e48-3b43-84e374a67647",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".slider-main_component",
                "originalId": "64d3dd9edfb41666c35b15b2|b8fa81c6-4d14-4e48-3b43-84e374a67647",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683015537281
        },
        "e-10": {
            "id": "e-10",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-9"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".slider-main_component",
                "originalId": "64d3dd9edfb41666c35b15b2|b8fa81c6-4d14-4e48-3b43-84e374a67647",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".slider-main_component",
                "originalId": "64d3dd9edfb41666c35b15b2|b8fa81c6-4d14-4e48-3b43-84e374a67647",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683015537281
        },
        "e-11": {
            "id": "e-11",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b2",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b2",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-6-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-6-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1683016303511
        },
        "e-15": {
            "id": "e-15",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-14"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b2",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b2",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683022664298
        },
        "e-28": {
            "id": "e-28",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-29"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b2|092b5699-f94e-b35d-a2de-3284e4643ceb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b2|092b5699-f94e-b35d-a2de-3284e4643ceb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683197517455
        },
        "e-30": {
            "id": "e-30",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-9",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-31"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b2|74aef034-0e4a-9b9c-0164-4a4bb479fddb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b2|74aef034-0e4a-9b9c-0164-4a4bb479fddb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683207579686
        },
        "e-32": {
            "id": "e-32",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-33"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b2|5b59c855-1aa9-c633-57ad-1120b6949844",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b2|5b59c855-1aa9-c633-57ad-1120b6949844",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683212040117
        },
        "e-34": {
            "id": "e-34",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-35"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b2|10f4d6c5-36b2-ddf4-66ea-a72d8b611107",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b2|10f4d6c5-36b2-ddf4-66ea-a72d8b611107",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 30,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683233184104
        },
        "e-36": {
            "id": "e-36",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-37"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b2|031aa6c4-b4a2-fbaf-0974-f720840d73fa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b2|031aa6c4-b4a2-fbaf-0974-f720840d73fa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 30,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683235056302
        },
        "e-38": {
            "id": "e-38",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-39"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "64d3dd9edfb41666c35b15ab|edc09b21-7043-e0a3-721c-e8d02348a8e0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15ab|edc09b21-7043-e0a3-721c-e8d02348a8e0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683619708152
        },
        "e-40": {
            "id": "e-40",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-41"
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15ab|edc09b21-7043-e0a3-721c-e8d02348a8e0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15ab|edc09b21-7043-e0a3-721c-e8d02348a8e0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683619708152
        },
        "e-42": {
            "id": "e-42",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64d3dd9edfb41666c35b15ab",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15ab",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-6-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-6-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1683619708152
        },
        "e-44": {
            "id": "e-44",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-43"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15ab",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15ab",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683619708152
        },
        "e-45": {
            "id": "e-45",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-46"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15ab|092b5699-f94e-b35d-a2de-3284e4643ceb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15ab|092b5699-f94e-b35d-a2de-3284e4643ceb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683619708152
        },
        "e-47": {
            "id": "e-47",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-9",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-48"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15ab|74aef034-0e4a-9b9c-0164-4a4bb479fddb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15ab|74aef034-0e4a-9b9c-0164-4a4bb479fddb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683619708152
        },
        "e-49": {
            "id": "e-49",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-50"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "626ff2cb-0fc6-2b3c-7abf-541026a7f82f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "626ff2cb-0fc6-2b3c-7abf-541026a7f82f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683619708152
        },
        "e-55": {
            "id": "e-55",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-56"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b2|a79fd27e-ad28-0dd3-3673-de2c4071c458",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b2|a79fd27e-ad28-0dd3-3673-de2c4071c458",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683885449647
        },
        "e-56": {
            "id": "e-56",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-55"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b2|a79fd27e-ad28-0dd3-3673-de2c4071c458",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b2|a79fd27e-ad28-0dd3-3673-de2c4071c458",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1683885449648
        },
        "e-57": {
            "id": "e-57",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "NAVBAR_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-407"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "489064cb-9577-b618-a8e4-54da4629fd67",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "489064cb-9577-b618-a8e4-54da4629fd67",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1626227992075
        },
        "e-58": {
            "id": "e-58",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "NAVBAR_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-590"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "489064cb-9577-b618-a8e4-54da4629fd67",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "489064cb-9577-b618-a8e4-54da4629fd67",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1626227992075
        },
        "e-89": {
            "id": "e-89",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-90"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b3|031aa6c4-b4a2-fbaf-0974-f720840d73fa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b3|031aa6c4-b4a2-fbaf-0974-f720840d73fa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 30,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1684918330468
        },
        "e-108": {
            "id": "e-108",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "NAVBAR_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-34",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-109"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b0|4ac4f81a-b45c-3fd0-f444-424b76426983",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b0|4ac4f81a-b45c-3fd0-f444-424b76426983",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1684929901538
        },
        "e-109": {
            "id": "e-109",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "NAVBAR_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-35",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-108"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b0|4ac4f81a-b45c-3fd0-f444-424b76426983",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b0|4ac4f81a-b45c-3fd0-f444-424b76426983",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1684929901538
        },
        "e-114": {
            "id": "e-114",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-33",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-115"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b0|78b939b8-be22-eba2-5011-2000ae3d1959",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b0|78b939b8-be22-eba2-5011-2000ae3d1959",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1684931632263
        },
        "e-116": {
            "id": "e-116",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-117"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b0|913c8ed9-fed6-8bf9-33d7-f9a1a87bfb15",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b0|913c8ed9-fed6-8bf9-33d7-f9a1a87bfb15",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1684931841688
        },
        "e-118": {
            "id": "e-118",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-119"
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b0|913c8ed9-fed6-8bf9-33d7-f9a1a87bfb15",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b0|913c8ed9-fed6-8bf9-33d7-f9a1a87bfb15",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1684931841688
        },
        "e-123": {
            "id": "e-123",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-124"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b0|63a0afa2-368d-3979-17e6-14006407e665",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b0|63a0afa2-368d-3979-17e6-14006407e665",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1684943796560
        },
        "e-126": {
            "id": "e-126",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-32",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".horizontal-trigger",
                "originalId": "64d3dd9edfb41666c35b15b0|b83a5a79-3b81-c97e-ffc2-553572233ad6",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".horizontal-trigger",
                "originalId": "64d3dd9edfb41666c35b15b0|b83a5a79-3b81-c97e-ffc2-553572233ad6",
                "appliesTo": "CLASS"
            }],
            "config": [{
                "continuousParameterGroupId": "a-32-p",
                "smoothing": 80,
                "startsEntering": false,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1622340741076
        },
        "e-133": {
            "id": "e-133",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b3",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b3",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-6-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-6-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1685460440534
        },
        "e-134": {
            "id": "e-134",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-135"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b3|f31ef841-cb39-df5f-8702-97394fae26f8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b3|f31ef841-cb39-df5f-8702-97394fae26f8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1685461766905
        },
        "e-138": {
            "id": "e-138",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-139"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15ab|82934544-a6bb-643b-837c-ae74d9acad2e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15ab|82934544-a6bb-643b-837c-ae74d9acad2e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 600,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1685517953217
        },
        "e-140": {
            "id": "e-140",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-141"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15ab|fbc72031-5a2f-6ebc-b87a-acaff1037eae",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15ab|fbc72031-5a2f-6ebc-b87a-acaff1037eae",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 600,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1685518015754
        },
        "e-142": {
            "id": "e-142",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-143"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15ab|b8fa81c6-4d14-4e48-3b43-84e374a67647",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15ab|b8fa81c6-4d14-4e48-3b43-84e374a67647",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 600,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1685518033150
        },
        "e-144": {
            "id": "e-144",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-36",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-145"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15ab|5974a0b1-45ad-8c58-76cb-435ab5b5e29a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15ab|5974a0b1-45ad-8c58-76cb-435ab5b5e29a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1685518178256
        },
        "e-146": {
            "id": "e-146",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15ab|82934544-a6bb-643b-837c-ae74d9acad2e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15ab|82934544-a6bb-643b-837c-ae74d9acad2e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-37-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1685520075631
        },
        "e-152": {
            "id": "e-152",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-151"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b3",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b3",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1685521328876
        },
        "e-153": {
            "id": "e-153",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-39",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b3|647443d6-fc7a-6d84-c497-8e112eed3af5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b3|647443d6-fc7a-6d84-c497-8e112eed3af5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-39-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1685522090692
        },
        "e-154": {
            "id": "e-154",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-40",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-155"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b3|601a4f0e-bb5a-82e3-f273-88812c6983ec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b3|601a4f0e-bb5a-82e3-f273-88812c6983ec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1685522527581
        },
        "e-156": {
            "id": "e-156",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-40",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-157"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b3|14d5255b-f6f7-0135-e75e-0aa49a888ee8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b3|14d5255b-f6f7-0135-e75e-0aa49a888ee8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1685522640371
        },
        "e-158": {
            "id": "e-158",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-40",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-159"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b3|7a467aa9-8761-40f6-e0fc-e0e987cf1bf5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b3|7a467aa9-8761-40f6-e0fc-e0e987cf1bf5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1685522662458
        },
        "e-160": {
            "id": "e-160",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-41",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-161"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".service_item",
                "originalId": "64d3dd9edfb41666c35b15b3|7f5f8bed-9945-7b52-ee2f-df227c5dc7eb",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".service_item",
                "originalId": "64d3dd9edfb41666c35b15b3|7f5f8bed-9945-7b52-ee2f-df227c5dc7eb",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1685522982517
        },
        "e-163": {
            "id": "e-163",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-42",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-162"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b0",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b0",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1685523727470
        },
        "e-164": {
            "id": "e-164",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-165"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b0|8a801147-6444-5431-5cf7-590bb79a4298",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b0|8a801147-6444-5431-5cf7-590bb79a4298",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 600,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1685524092896
        },
        "e-166": {
            "id": "e-166",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-167"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b0|ea927001-76a6-24c2-4c1b-66fe6c8ba8b6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b0|ea927001-76a6-24c2-4c1b-66fe6c8ba8b6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 600,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1685524118521
        },
        "e-170": {
            "id": "e-170",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-171"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15ae|3f0509ab-4c14-a874-d63c-6f5e2aa34bff",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15ae|3f0509ab-4c14-a874-d63c-6f5e2aa34bff",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1685526993346
        },
        "e-178": {
            "id": "e-178",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-179"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b3|2c034968-5ffb-f62c-7af5-1141d9287ad8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b3|2c034968-5ffb-f62c-7af5-1141d9287ad8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 400,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1685564201195
        },
        "e-180": {
            "id": "e-180",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-181"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b3|14d5255b-f6f7-0135-e75e-0aa49a888eec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b3|14d5255b-f6f7-0135-e75e-0aa49a888eec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 400,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1685564285340
        },
        "e-182": {
            "id": "e-182",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-183"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b3|7a467aa9-8761-40f6-e0fc-e0e987cf1bf9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b3|7a467aa9-8761-40f6-e0fc-e0e987cf1bf9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 400,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1685564297233
        },
        "e-186": {
            "id": "e-186",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "DROPDOWN_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-50",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-195"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b6|405713b1-29cf-464b-d4b3-f1ea6f80956b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b6|405713b1-29cf-464b-d4b3-f1ea6f80956b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1653369412854
        },
        "e-187": {
            "id": "e-187",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-46",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-194"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b6|405713b1-29cf-464b-d4b3-f1ea6f80954f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b6|405713b1-29cf-464b-d4b3-f1ea6f80954f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1648714724964
        },
        "e-188": {
            "id": "e-188",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-48",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-190"
                }
            },
            "mediaQueries": ["medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b6|405713b1-29cf-464b-d4b3-f1ea6f809560",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b6|405713b1-29cf-464b-d4b3-f1ea6f809560",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1648651697930
        },
        "e-191": {
            "id": "e-191",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-47",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-193"
                }
            },
            "mediaQueries": ["medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b6|405713b1-29cf-464b-d4b3-f1ea6f80955e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b6|405713b1-29cf-464b-d4b3-f1ea6f80955e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1671583599021
        },
        "e-192": {
            "id": "e-192",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-47",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-189"
                }
            },
            "mediaQueries": ["medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b6|405713b1-29cf-464b-d4b3-f1ea6f809557",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b6|405713b1-29cf-464b-d4b3-f1ea6f809557",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1671579471939
        },
        "e-194": {
            "id": "e-194",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-45",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-187"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b6|405713b1-29cf-464b-d4b3-f1ea6f80954f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b6|405713b1-29cf-464b-d4b3-f1ea6f80954f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1648714724963
        },
        "e-195": {
            "id": "e-195",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "DROPDOWN_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-49",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-186"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b6|405713b1-29cf-464b-d4b3-f1ea6f80956b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b6|405713b1-29cf-464b-d4b3-f1ea6f80956b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1653369412807
        },
        "e-196": {
            "id": "e-196",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-57",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-197"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b6|5e3b4457-8433-cf0f-d49e-14c624f41f09",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b6|5e3b4457-8433-cf0f-d49e-14c624f41f09",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1685624128733
        },
        "e-198": {
            "id": "e-198",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-58",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-199"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b6|cf7865d7-f2e3-2fc0-ff56-0cdfd5d14352",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b6|cf7865d7-f2e3-2fc0-ff56-0cdfd5d14352",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1685627484080
        },
        "e-201": {
            "id": "e-201",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-59",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-200"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15ae",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15ae",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686568172130
        },
        "e-203": {
            "id": "e-203",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-60",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-202"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b6",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b6",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1686573150230
        },
        "e-204": {
            "id": "e-204",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-205"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64d3dd9edfb41666c35b15b0|235815de-32e7-e394-f77d-677a969ef2fb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64d3dd9edfb41666c35b15b0|235815de-32e7-e394-f77d-677a969ef2fb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 25,
                "scrollOffsetUnit": "%",
                "delay": 400,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1686936101336
        }
    },
    "actionLists": {
        "a": {
            "id": "a",
            "title": "Home marquee [Loop] [Desktop]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 25000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".home-marquee_marquee",
                            "selectorGuids": ["ed8a13a9-78b8-e43d-eb72-3169945520cb"]
                        },
                        "xValue": -100,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".home-marquee_marquee",
                            "selectorGuids": ["ed8a13a9-78b8-e43d-eb72-3169945520cb"]
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1651457286764
        },
        "a-2": {
            "id": "a-2",
            "title": "Home marquee [Loop] [Mobile]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-2-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 10000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".home-marquee_marquee",
                            "selectorGuids": ["ed8a13a9-78b8-e43d-eb72-3169945520cb"]
                        },
                        "xValue": -100,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-2-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".home-marquee_marquee",
                            "selectorGuids": ["ed8a13a9-78b8-e43d-eb72-3169945520cb"]
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1651457286764
        },
        "a-4": {
            "id": "a-4",
            "title": "Clients Pointer [IN]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-4-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".pointer",
                            "selectorGuids": ["6012363d-a7e1-17be-7c82-90da8feb7982"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-4-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "swingTo",
                        "duration": 400,
                        "target": {
                            "selector": ".pointer",
                            "selectorGuids": ["6012363d-a7e1-17be-7c82-90da8feb7982"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1683015565373
        },
        "a-5": {
            "id": "a-5",
            "title": "Clients Pointer [OUT]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-5-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "selector": ".pointer",
                            "selectorGuids": ["6012363d-a7e1-17be-7c82-90da8feb7982"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1683015713462
        },
        "a-6": {
            "id": "a-6",
            "title": "Clients Pointer",
            "continuousParameterGroups": [{
                "id": "a-6-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-6-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".pointer---wrap",
                                "selectorGuids": ["27b3d686-1ce3-28d0-297c-266a33002a70"]
                            },
                            "xValue": -50,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-6-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".pointer---wrap",
                                "selectorGuids": ["27b3d686-1ce3-28d0-297c-266a33002a70"]
                            },
                            "xValue": 50,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-6-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-6-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".pointer---wrap",
                                "selectorGuids": ["27b3d686-1ce3-28d0-297c-266a33002a70"]
                            },
                            "yValue": -50,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-6-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".pointer---wrap",
                                "selectorGuids": ["27b3d686-1ce3-28d0-297c-266a33002a70"]
                            },
                            "yValue": 50,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1683016333358
        },
        "a-7": {
            "id": "a-7",
            "title": "Loader-1 [Hide]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-7-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".loader-1",
                            "selectorGuids": ["49ce995a-df04-b74c-bcc2-1088a2dd1fd2"]
                        },
                        "value": "flex"
                    }
                }, {
                    "id": "a-7-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".loader-1-wrapper",
                            "selectorGuids": ["49ce995a-df04-b74c-bcc2-1088a2dd1fd3"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-7-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".loader_1_text.is-first",
                            "selectorGuids": ["49ce995a-df04-b74c-bcc2-1088a2dd1fd4", "49ce995a-df04-b74c-bcc2-1088a2dd1fd7"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-7-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".loader_1_text.is-second",
                            "selectorGuids": ["49ce995a-df04-b74c-bcc2-1088a2dd1fd4", "49ce995a-df04-b74c-bcc2-1088a2dd1fd8"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-7-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".loader_1_text.is-third",
                            "selectorGuids": ["49ce995a-df04-b74c-bcc2-1088a2dd1fd4", "49ce995a-df04-b74c-bcc2-1088a2dd1fd9"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-7-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".loader_1_background",
                            "selectorGuids": ["49ce995a-df04-b74c-bcc2-1088a2dd1fd5"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-7-n-17",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".loader_1_text.is-first",
                            "selectorGuids": ["49ce995a-df04-b74c-bcc2-1088a2dd1fd4", "49ce995a-df04-b74c-bcc2-1088a2dd1fd7"]
                        },
                        "value": "block"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-7-n-8",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".loader_1_text.is-second",
                            "selectorGuids": ["49ce995a-df04-b74c-bcc2-1088a2dd1fd4", "49ce995a-df04-b74c-bcc2-1088a2dd1fd8"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-7-n-9",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".loader_1_text.is-first",
                            "selectorGuids": ["49ce995a-df04-b74c-bcc2-1088a2dd1fd4", "49ce995a-df04-b74c-bcc2-1088a2dd1fd7"]
                        },
                        "value": "none"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-7-n-10",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".loader_1_text.is-second",
                            "selectorGuids": ["49ce995a-df04-b74c-bcc2-1088a2dd1fd4", "49ce995a-df04-b74c-bcc2-1088a2dd1fd8"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-7-n-11",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".loader_1_text.is-third",
                            "selectorGuids": ["49ce995a-df04-b74c-bcc2-1088a2dd1fd4", "49ce995a-df04-b74c-bcc2-1088a2dd1fd9"]
                        },
                        "value": "block"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-7-n-14",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 500,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "selector": ".loader-1-wrapper",
                            "selectorGuids": ["49ce995a-df04-b74c-bcc2-1088a2dd1fd3"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-7-n-15",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "selector": ".loader_1_background",
                            "selectorGuids": ["49ce995a-df04-b74c-bcc2-1088a2dd1fd5"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-7-n-16",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 1000,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".loader-1",
                            "selectorGuids": ["49ce995a-df04-b74c-bcc2-1088a2dd1fd2"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1680078417278
        },
        "a-8": {
            "id": "a-8",
            "title": "Gradient Animation [RADIAL]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-8-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".who-shape-1",
                            "selectorGuids": ["c25c39f7-40fc-f36d-6bfc-c155f0778122"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-8-n-13",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".who-shape-1",
                            "selectorGuids": ["c25c39f7-40fc-f36d-6bfc-c155f0778122"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-8-n-9",
                    "actionTypeId": "TRANSFORM_SKEW",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".who-shape-1",
                            "selectorGuids": ["c25c39f7-40fc-f36d-6bfc-c155f0778122"]
                        },
                        "xValue": 0,
                        "xUnit": "deg",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-8-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".who-shape-2",
                            "selectorGuids": ["f6da58fa-fe7d-f51c-eee0-1691650e4f11"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-8-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".who-shape-2",
                            "selectorGuids": ["f6da58fa-fe7d-f51c-eee0-1691650e4f11"]
                        },
                        "xValue": -6,
                        "yValue": 10,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-8-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".who-shape-1",
                            "selectorGuids": ["c25c39f7-40fc-f36d-6bfc-c155f0778122"]
                        },
                        "xValue": -9,
                        "yValue": 7,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-8-n-11",
                    "actionTypeId": "TRANSFORM_SKEW",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".who-shape-1",
                            "selectorGuids": ["c25c39f7-40fc-f36d-6bfc-c155f0778122"]
                        },
                        "xValue": 10,
                        "xUnit": "deg",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-8-n-15",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".who-shape-1",
                            "selectorGuids": ["c25c39f7-40fc-f36d-6bfc-c155f0778122"]
                        },
                        "zValue": 90,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-8-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".who-shape-2",
                            "selectorGuids": ["f6da58fa-fe7d-f51c-eee0-1691650e4f11"]
                        },
                        "xValue": 10,
                        "yValue": -14,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-8-n-8",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".who-shape-1",
                            "selectorGuids": ["c25c39f7-40fc-f36d-6bfc-c155f0778122"]
                        },
                        "xValue": 2,
                        "yValue": -9,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-8-n-12",
                    "actionTypeId": "TRANSFORM_SKEW",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".who-shape-1",
                            "selectorGuids": ["c25c39f7-40fc-f36d-6bfc-c155f0778122"]
                        },
                        "xValue": 6,
                        "xUnit": "deg",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-8-n-16",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".who-shape-1",
                            "selectorGuids": ["c25c39f7-40fc-f36d-6bfc-c155f0778122"]
                        },
                        "zValue": 45,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-8-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".who-shape-2",
                            "selectorGuids": ["f6da58fa-fe7d-f51c-eee0-1691650e4f11"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-8-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".who-shape-1",
                            "selectorGuids": ["c25c39f7-40fc-f36d-6bfc-c155f0778122"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-8-n-10",
                    "actionTypeId": "TRANSFORM_SKEW",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".who-shape-1",
                            "selectorGuids": ["c25c39f7-40fc-f36d-6bfc-c155f0778122"]
                        },
                        "xValue": 0,
                        "xUnit": "deg",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-8-n-14",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".who-shape-1",
                            "selectorGuids": ["c25c39f7-40fc-f36d-6bfc-c155f0778122"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1665137535236
        },
        "a-9": {
            "id": "a-9",
            "title": "Gradient Animation [HOME]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-9-n-8",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hero-shape-2",
                            "selectorGuids": ["d413cddd-c72b-7c73-69a7-b290a895bf92"]
                        },
                        "zValue": 72,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-9-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hero-shape-2",
                            "selectorGuids": ["d413cddd-c72b-7c73-69a7-b290a895bf92"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-9-n-4",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hero-shape-1",
                            "selectorGuids": ["40d387a1-19d9-44b3-d5e8-f15da39d779c"]
                        },
                        "zValue": -78,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-9-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hero-shape-1",
                            "selectorGuids": ["40d387a1-19d9-44b3-d5e8-f15da39d779c"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-9-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hero-shape-1",
                            "selectorGuids": ["40d387a1-19d9-44b3-d5e8-f15da39d779c"]
                        },
                        "xValue": -4,
                        "yValue": 4,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-9-n-6",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hero-shape-1",
                            "selectorGuids": ["40d387a1-19d9-44b3-d5e8-f15da39d779c"]
                        },
                        "zValue": -42,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-9-n-10",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hero-shape-2",
                            "selectorGuids": ["d413cddd-c72b-7c73-69a7-b290a895bf92"]
                        },
                        "zValue": 96,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-9-n-12",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hero-shape-2",
                            "selectorGuids": ["d413cddd-c72b-7c73-69a7-b290a895bf92"]
                        },
                        "xValue": -10,
                        "yValue": 0,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-9-n-13",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hero-shape-2",
                            "selectorGuids": ["d413cddd-c72b-7c73-69a7-b290a895bf92"]
                        },
                        "zValue": 88,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-9-n-14",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hero-shape-2",
                            "selectorGuids": ["d413cddd-c72b-7c73-69a7-b290a895bf92"]
                        },
                        "xValue": -7,
                        "yValue": 0,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-9-n-15",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hero-shape-1",
                            "selectorGuids": ["40d387a1-19d9-44b3-d5e8-f15da39d779c"]
                        },
                        "zValue": -68,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-9-n-16",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hero-shape-1",
                            "selectorGuids": ["40d387a1-19d9-44b3-d5e8-f15da39d779c"]
                        },
                        "xValue": -1,
                        "yValue": -6,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-9-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hero-shape-1",
                            "selectorGuids": ["40d387a1-19d9-44b3-d5e8-f15da39d779c"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-9-n-5",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hero-shape-1",
                            "selectorGuids": ["40d387a1-19d9-44b3-d5e8-f15da39d779c"]
                        },
                        "zValue": -78,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-9-n-9",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hero-shape-2",
                            "selectorGuids": ["d413cddd-c72b-7c73-69a7-b290a895bf92"]
                        },
                        "zValue": 72,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-9-n-11",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hero-shape-2",
                            "selectorGuids": ["d413cddd-c72b-7c73-69a7-b290a895bf92"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1683207653903
        },
        "a-10": {
            "id": "a-10",
            "title": "Gradient Animation [FOOTER]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-10-n-10",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-shape-3",
                            "selectorGuids": ["fb7b1de5-515c-b207-bd7a-a1b03030071b"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-10-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-shape-2",
                            "selectorGuids": ["d15928a8-a231-0233-cfc0-4bb412107818"]
                        },
                        "zValue": 47,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-10-n-9",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-shape-3",
                            "selectorGuids": ["fb7b1de5-515c-b207-bd7a-a1b03030071b"]
                        },
                        "zValue": 98,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-10-n-14",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-shape-3",
                            "selectorGuids": ["fb7b1de5-515c-b207-bd7a-a1b03030071b"]
                        },
                        "xValue": 1.3,
                        "yValue": 1.3,
                        "locked": true
                    }
                }, {
                    "id": "a-10-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-shape-1",
                            "selectorGuids": ["a75cc6fb-a5f1-5de6-37ed-e0616cbc1736"]
                        },
                        "zValue": -13,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-10-n-5",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-shape-1",
                            "selectorGuids": ["a75cc6fb-a5f1-5de6-37ed-e0616cbc1736"]
                        },
                        "zValue": -22,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-10-n-6",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-shape-2",
                            "selectorGuids": ["d15928a8-a231-0233-cfc0-4bb412107818"]
                        },
                        "zValue": 27,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-10-n-7",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-shape-3",
                            "selectorGuids": ["fb7b1de5-515c-b207-bd7a-a1b03030071b"]
                        },
                        "zValue": 94,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-10-n-11",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-shape-3",
                            "selectorGuids": ["fb7b1de5-515c-b207-bd7a-a1b03030071b"]
                        },
                        "xValue": -100,
                        "yValue": 10,
                        "zValue": null,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "px"
                    }
                }, {
                    "id": "a-10-n-12",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-shape-3",
                            "selectorGuids": ["fb7b1de5-515c-b207-bd7a-a1b03030071b"]
                        },
                        "xValue": 1.3,
                        "yValue": 1.3,
                        "locked": true
                    }
                }, {
                    "id": "a-10-n-18",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-shape-2",
                            "selectorGuids": ["d15928a8-a231-0233-cfc0-4bb412107818"]
                        },
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "zValue": null,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-10-n-15",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-shape-1",
                            "selectorGuids": ["a75cc6fb-a5f1-5de6-37ed-e0616cbc1736"]
                        },
                        "zValue": -7,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-10-n-16",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-shape-2",
                            "selectorGuids": ["d15928a8-a231-0233-cfc0-4bb412107818"]
                        },
                        "zValue": 33,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-10-n-17",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-shape-3",
                            "selectorGuids": ["fb7b1de5-515c-b207-bd7a-a1b03030071b"]
                        },
                        "xValue": -39,
                        "yValue": 2,
                        "zValue": null,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "px"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-10-n-3",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-shape-2",
                            "selectorGuids": ["d15928a8-a231-0233-cfc0-4bb412107818"]
                        },
                        "zValue": 47,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-10-n-4",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-shape-1",
                            "selectorGuids": ["a75cc6fb-a5f1-5de6-37ed-e0616cbc1736"]
                        },
                        "zValue": -13,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-10-n-8",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-shape-3",
                            "selectorGuids": ["fb7b1de5-515c-b207-bd7a-a1b03030071b"]
                        },
                        "zValue": 98,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-10-n-13",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".footer-shape-3",
                            "selectorGuids": ["fb7b1de5-515c-b207-bd7a-a1b03030071b"]
                        },
                        "xValue": 1.3,
                        "yValue": 1.3,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1683212057412
        },
        "a-11": {
            "id": "a-11",
            "title": "Fade Up",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-11-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 700,
                        "target": {
                            "selector": ".fade-up",
                            "selectorGuids": ["4fb8c73b-04a3-3ad0-4aef-a60b5436970f"]
                        },
                        "xValue": 0,
                        "yValue": 5,
                        "xUnit": "em",
                        "yUnit": "em",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-11-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".fade-up",
                            "selectorGuids": ["4fb8c73b-04a3-3ad0-4aef-a60b5436970f"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-11-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outSine",
                        "duration": 700,
                        "target": {
                            "selector": ".fade-up",
                            "selectorGuids": ["4fb8c73b-04a3-3ad0-4aef-a60b5436970f"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "em",
                        "yUnit": "em",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-11-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 700,
                        "target": {
                            "selector": ".fade-up",
                            "selectorGuids": ["4fb8c73b-04a3-3ad0-4aef-a60b5436970f"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1683233199926
        },
        "a-12": {
            "id": "a-12",
            "title": "Fade Up [CLIENTS]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-12-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "64d3dd9edfb41666c35b15b2|031aa6c4-b4a2-fbaf-0974-f720840d73fa"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-12-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "64d3dd9edfb41666c35b15b2|031aa6c4-b4a2-fbaf-0974-f720840d73fa"
                        },
                        "xValue": 0,
                        "yValue": 5,
                        "xUnit": "em",
                        "yUnit": "em",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-12-n-9",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outSine",
                        "duration": 700,
                        "target": {
                            "useEventTarget": true,
                            "id": "64d3dd9edfb41666c35b15b2|031aa6c4-b4a2-fbaf-0974-f720840d73fa"
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "em",
                        "yUnit": "em",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-12-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outSine",
                        "duration": 700,
                        "target": {
                            "useEventTarget": true,
                            "id": "64d3dd9edfb41666c35b15b2|031aa6c4-b4a2-fbaf-0974-f720840d73fa"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1683233199926
        },
        "a-14": {
            "id": "a-14",
            "title": "Header Menu [CLOSE]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-14-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-icon_line-bottom",
                            "selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec73"]
                        },
                        "xValue": 0,
                        "yValue": -0.125,
                        "zValue": 0,
                        "xUnit": "rem",
                        "yUnit": "rem",
                        "zUnit": "rem"
                    }
                }, {
                    "id": "a-14-n-13",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-icon_line-bottom",
                            "selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec73"]
                        },
                        "globalSwatchId": "7ef5d505",
                        "rValue": 11,
                        "bValue": 0,
                        "gValue": 5,
                        "aValue": 1
                    }
                }, {
                    "id": "a-14-n-12",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-icon_line-top",
                            "selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec70"]
                        },
                        "globalSwatchId": "7ef5d505",
                        "rValue": 11,
                        "bValue": 0,
                        "gValue": 5,
                        "aValue": 1
                    }
                }, {
                    "id": "a-14-n-10",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu_link_text",
                            "selectorGuids": ["939b366e-1ebc-bf9e-5caf-13d4b37bf3d7"]
                        },
                        "globalSwatchId": "7ef5d505",
                        "rValue": 11,
                        "bValue": 0,
                        "gValue": 5,
                        "aValue": 1
                    }
                }, {
                    "id": "a-14-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-icon_line-top",
                            "selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec70"]
                        },
                        "xValue": 0,
                        "yValue": 0.125,
                        "zValue": 0,
                        "xUnit": "rem",
                        "yUnit": "rem",
                        "zUnit": "rem"
                    }
                }, {
                    "id": "a-14-n-4",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-icon_line-top",
                            "selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec70"]
                        },
                        "zValue": -45,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-14-n-5",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-icon_line-bottom",
                            "selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec73"]
                        },
                        "zValue": 45,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-14-n-7",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".header_overlay",
                            "selectorGuids": ["481256b4-1de5-047f-cb75-010f177a989b"]
                        },
                        "heightValue": 100,
                        "widthUnit": "PX",
                        "heightUnit": "vh",
                        "locked": false
                    }
                }, {
                    "id": "a-14-n-8",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".header_container",
                            "selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec62"]
                        },
                        "globalSwatchId": "d2fecc19",
                        "rValue": 239,
                        "bValue": 227,
                        "gValue": 234,
                        "aValue": 1
                    }
                }, {
                    "id": "a-14-n-9",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".header_logo",
                            "selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec64"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-14-n-11",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu_link",
                            "selectorGuids": ["531ac0ab-8f7b-7382-3bc3-61ae106d0c7c"]
                        },
                        "globalSwatchId": "",
                        "rValue": 11,
                        "bValue": 0,
                        "gValue": 5,
                        "aValue": 0.2
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1626168378054
        },
        "a-15": {
            "id": "a-15",
            "title": "Header Menu [OPEN]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-15-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-icon_line-bottom",
                            "selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec73"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "zValue": 0,
                        "xUnit": "rem",
                        "yUnit": "rem",
                        "zUnit": "rem"
                    }
                }, {
                    "id": "a-15-n-5",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".header_overlay",
                            "selectorGuids": ["481256b4-1de5-047f-cb75-010f177a989b"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "vh",
                        "locked": false
                    }
                }, {
                    "id": "a-15-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-icon_line-top",
                            "selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec70"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "zValue": 0,
                        "xUnit": "rem",
                        "yUnit": "rem",
                        "zUnit": "rem"
                    }
                }, {
                    "id": "a-15-n-3",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-icon_line-bottom",
                            "selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec73"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-15-n-4",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-icon_line-top",
                            "selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec70"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-15-n-6",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 300,
                        "easing": "ease",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".header_container",
                            "selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec62"]
                        },
                        "globalSwatchId": "",
                        "rValue": 0,
                        "bValue": 0,
                        "gValue": 0,
                        "aValue": 0
                    }
                }, {
                    "id": "a-15-n-7",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 300,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".header_logo",
                            "selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec64"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1626168766736
        },
        "a-34": {
            "id": "a-34",
            "title": "Header Menu_White [CLOSE]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-34-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-icon_line-bottom",
                            "selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec73"]
                        },
                        "xValue": 0,
                        "yValue": -0.125,
                        "zValue": 0,
                        "xUnit": "rem",
                        "yUnit": "rem",
                        "zUnit": "rem"
                    }
                }, {
                    "id": "a-34-n-2",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-icon_line-bottom",
                            "selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec73"]
                        },
                        "globalSwatchId": "7ef5d505",
                        "rValue": 11,
                        "bValue": 0,
                        "gValue": 5,
                        "aValue": 1
                    }
                }, {
                    "id": "a-34-n-3",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-icon_line-top",
                            "selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec70"]
                        },
                        "globalSwatchId": "7ef5d505",
                        "rValue": 11,
                        "bValue": 0,
                        "gValue": 5,
                        "aValue": 1
                    }
                }, {
                    "id": "a-34-n-4",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu_link_text",
                            "selectorGuids": ["939b366e-1ebc-bf9e-5caf-13d4b37bf3d7"]
                        },
                        "globalSwatchId": "7ef5d505",
                        "rValue": 11,
                        "bValue": 0,
                        "gValue": 5,
                        "aValue": 1
                    }
                }, {
                    "id": "a-34-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-icon_line-top",
                            "selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec70"]
                        },
                        "xValue": 0,
                        "yValue": 0.125,
                        "zValue": 0,
                        "xUnit": "rem",
                        "yUnit": "rem",
                        "zUnit": "rem"
                    }
                }, {
                    "id": "a-34-n-6",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-icon_line-top",
                            "selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec70"]
                        },
                        "zValue": -45,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-34-n-7",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-icon_line-bottom",
                            "selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec73"]
                        },
                        "zValue": 45,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-34-n-8",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".header_overlay",
                            "selectorGuids": ["481256b4-1de5-047f-cb75-010f177a989b"]
                        },
                        "heightValue": 100,
                        "widthUnit": "PX",
                        "heightUnit": "vh",
                        "locked": false
                    }
                }, {
                    "id": "a-34-n-9",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".header_container",
                            "selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec62"]
                        },
                        "globalSwatchId": "d2fecc19",
                        "rValue": 239,
                        "bValue": 227,
                        "gValue": 234,
                        "aValue": 1
                    }
                }, {
                    "id": "a-34-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".header_logo",
                            "selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec64"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-34-n-11",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu_link",
                            "selectorGuids": ["531ac0ab-8f7b-7382-3bc3-61ae106d0c7c"]
                        },
                        "globalSwatchId": "",
                        "rValue": 11,
                        "bValue": 0,
                        "gValue": 5,
                        "aValue": 0.2
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1626168378054
        },
        "a-35": {
            "id": "a-35",
            "title": "Header Menu_White [OPEN]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-35-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-icon_line-bottom",
                            "selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec73"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "zValue": 0,
                        "xUnit": "rem",
                        "yUnit": "rem",
                        "zUnit": "rem"
                    }
                }, {
                    "id": "a-35-n-11",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-icon_line-top.project",
                            "selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec70", "6a282478-1143-7602-c87d-082beca34746"]
                        },
                        "globalSwatchId": "d2fecc19",
                        "rValue": 239,
                        "bValue": 227,
                        "gValue": 234,
                        "aValue": 1
                    }
                }, {
                    "id": "a-35-n-8",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu_link_text.project",
                            "selectorGuids": ["939b366e-1ebc-bf9e-5caf-13d4b37bf3d7", "8a74cdb9-345a-682e-b576-639d88d77353"]
                        },
                        "globalSwatchId": "d2fecc19",
                        "rValue": 239,
                        "bValue": 227,
                        "gValue": 234,
                        "aValue": 1
                    }
                }, {
                    "id": "a-35-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".header_overlay",
                            "selectorGuids": ["481256b4-1de5-047f-cb75-010f177a989b"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "vh",
                        "locked": false
                    }
                }, {
                    "id": "a-35-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-icon_line-top",
                            "selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec70"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "zValue": 0,
                        "xUnit": "rem",
                        "yUnit": "rem",
                        "zUnit": "rem"
                    }
                }, {
                    "id": "a-35-n-4",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-icon_line-bottom",
                            "selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec73"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-35-n-5",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuint",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-icon_line-top",
                            "selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec70"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-35-n-9",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu_link.projects",
                            "selectorGuids": ["531ac0ab-8f7b-7382-3bc3-61ae106d0c7c", "7ed18b20-afa9-67b0-a0f6-fec9d3d59cbe"]
                        },
                        "globalSwatchId": "",
                        "rValue": 239,
                        "bValue": 227,
                        "gValue": 234,
                        "aValue": 0.2
                    }
                }, {
                    "id": "a-35-n-10",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-icon_line-bottom.project",
                            "selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec73", "d597a6d8-0a76-ca41-e0bb-cf6c092913f0"]
                        },
                        "globalSwatchId": "d2fecc19",
                        "rValue": 239,
                        "bValue": 227,
                        "gValue": 234,
                        "aValue": 1
                    }
                }, {
                    "id": "a-35-n-7",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 300,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".header_logo",
                            "selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec64"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-35-n-6",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 300,
                        "easing": "ease",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".header_container",
                            "selectorGuids": ["6dcabe0c-b6ba-c42e-9ab7-2d059bd5ec62"]
                        },
                        "globalSwatchId": "",
                        "rValue": 0,
                        "bValue": 0,
                        "gValue": 0,
                        "aValue": 0
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1626168766736
        },
        "a-33": {
            "id": "a-33",
            "title": "Gradient Animation [PROJECTS]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-33-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hero-shape-2.is-projects",
                            "selectorGuids": ["d413cddd-c72b-7c73-69a7-b290a895bf92", "10206b04-7846-d048-4852-1b07f883e7ed"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-33-n-3",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hero-shape-1.is-projects",
                            "selectorGuids": ["40d387a1-19d9-44b3-d5e8-f15da39d779c", "9a1761a2-2c94-b6f0-cd16-085930b98316"]
                        },
                        "zValue": -78,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-33-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hero-shape-1.is-projects",
                            "selectorGuids": ["40d387a1-19d9-44b3-d5e8-f15da39d779c", "9a1761a2-2c94-b6f0-cd16-085930b98316"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-33-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hero-shape-2.is-projects",
                            "selectorGuids": ["d413cddd-c72b-7c73-69a7-b290a895bf92", "10206b04-7846-d048-4852-1b07f883e7ed"]
                        },
                        "zValue": 72,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-33-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hero-shape-1.is-projects",
                            "selectorGuids": ["40d387a1-19d9-44b3-d5e8-f15da39d779c", "9a1761a2-2c94-b6f0-cd16-085930b98316"]
                        },
                        "xValue": -4,
                        "yValue": -6,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-33-n-6",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hero-shape-1.is-projects",
                            "selectorGuids": ["40d387a1-19d9-44b3-d5e8-f15da39d779c", "9a1761a2-2c94-b6f0-cd16-085930b98316"]
                        },
                        "zValue": -73,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-33-n-7",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hero-shape-2.is-projects",
                            "selectorGuids": ["d413cddd-c72b-7c73-69a7-b290a895bf92", "10206b04-7846-d048-4852-1b07f883e7ed"]
                        },
                        "zValue": 76,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-33-n-8",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hero-shape-2.is-projects",
                            "selectorGuids": ["d413cddd-c72b-7c73-69a7-b290a895bf92", "10206b04-7846-d048-4852-1b07f883e7ed"]
                        },
                        "xValue": -31,
                        "yValue": 4,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-33-n-9",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hero-shape-2.is-projects",
                            "selectorGuids": ["d413cddd-c72b-7c73-69a7-b290a895bf92", "10206b04-7846-d048-4852-1b07f883e7ed"]
                        },
                        "zValue": 79,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-33-n-10",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hero-shape-2.is-projects",
                            "selectorGuids": ["d413cddd-c72b-7c73-69a7-b290a895bf92", "10206b04-7846-d048-4852-1b07f883e7ed"]
                        },
                        "xValue": -7,
                        "yValue": 0,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-33-n-11",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hero-shape-1.is-projects",
                            "selectorGuids": ["40d387a1-19d9-44b3-d5e8-f15da39d779c", "9a1761a2-2c94-b6f0-cd16-085930b98316"]
                        },
                        "zValue": -68,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-33-n-12",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hero-shape-1.is-projects",
                            "selectorGuids": ["40d387a1-19d9-44b3-d5e8-f15da39d779c", "9a1761a2-2c94-b6f0-cd16-085930b98316"]
                        },
                        "xValue": 1,
                        "yValue": -1,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-33-n-13",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hero-shape-1.is-projects",
                            "selectorGuids": ["40d387a1-19d9-44b3-d5e8-f15da39d779c", "9a1761a2-2c94-b6f0-cd16-085930b98316"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-33-n-14",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hero-shape-1.is-projects",
                            "selectorGuids": ["40d387a1-19d9-44b3-d5e8-f15da39d779c", "9a1761a2-2c94-b6f0-cd16-085930b98316"]
                        },
                        "zValue": -78,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-33-n-15",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hero-shape-2.is-projects",
                            "selectorGuids": ["d413cddd-c72b-7c73-69a7-b290a895bf92", "10206b04-7846-d048-4852-1b07f883e7ed"]
                        },
                        "zValue": 72,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-33-n-16",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".hero-shape-2.is-projects",
                            "selectorGuids": ["d413cddd-c72b-7c73-69a7-b290a895bf92", "10206b04-7846-d048-4852-1b07f883e7ed"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1683207653903
        },
        "a-28": {
            "id": "a-28",
            "title": "Project marquee [Loop] [Desktop]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-28-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 25000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-marquee_marquee",
                            "selectorGuids": ["1c42e287-92a0-76d9-892a-9b3b18044a5c"]
                        },
                        "xValue": -100,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-28-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-marquee_marquee",
                            "selectorGuids": ["1c42e287-92a0-76d9-892a-9b3b18044a5c"]
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1651457286764
        },
        "a-29": {
            "id": "a-29",
            "title": "Project marquee [Loop] [Mobile]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-29-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 10000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-marquee_marquee",
                            "selectorGuids": ["1c42e287-92a0-76d9-892a-9b3b18044a5c"]
                        },
                        "xValue": -100,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-29-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-marquee_marquee",
                            "selectorGuids": ["1c42e287-92a0-76d9-892a-9b3b18044a5c"]
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1651457286764
        },
        "a-30": {
            "id": "a-30",
            "title": "Gradient Animation [RADIAL] 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-30-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-shape-1",
                            "selectorGuids": ["31a0f383-8c80-6a5e-1a92-c9c1d2b6e0be"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-30-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-shape-1",
                            "selectorGuids": ["31a0f383-8c80-6a5e-1a92-c9c1d2b6e0be"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-30-n-3",
                    "actionTypeId": "TRANSFORM_SKEW",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-shape-1",
                            "selectorGuids": ["31a0f383-8c80-6a5e-1a92-c9c1d2b6e0be"]
                        },
                        "xValue": 0,
                        "xUnit": "deg",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-30-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-shape-2",
                            "selectorGuids": ["919768f0-c0b6-1bd7-1cb5-299a4b5281ae"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-30-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-shape-2",
                            "selectorGuids": ["919768f0-c0b6-1bd7-1cb5-299a4b5281ae"]
                        },
                        "xValue": -6,
                        "yValue": 10,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-30-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-shape-1",
                            "selectorGuids": ["31a0f383-8c80-6a5e-1a92-c9c1d2b6e0be"]
                        },
                        "xValue": -9,
                        "yValue": 7,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-30-n-7",
                    "actionTypeId": "TRANSFORM_SKEW",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-shape-1",
                            "selectorGuids": ["31a0f383-8c80-6a5e-1a92-c9c1d2b6e0be"]
                        },
                        "xValue": 10,
                        "xUnit": "deg",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-30-n-8",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-shape-1",
                            "selectorGuids": ["31a0f383-8c80-6a5e-1a92-c9c1d2b6e0be"]
                        },
                        "zValue": 90,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-30-n-9",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-shape-2",
                            "selectorGuids": ["919768f0-c0b6-1bd7-1cb5-299a4b5281ae"]
                        },
                        "xValue": 10,
                        "yValue": -14,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-30-n-10",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-shape-1",
                            "selectorGuids": ["31a0f383-8c80-6a5e-1a92-c9c1d2b6e0be"]
                        },
                        "xValue": 2,
                        "yValue": -9,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-30-n-11",
                    "actionTypeId": "TRANSFORM_SKEW",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-shape-1",
                            "selectorGuids": ["31a0f383-8c80-6a5e-1a92-c9c1d2b6e0be"]
                        },
                        "xValue": 6,
                        "xUnit": "deg",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-30-n-12",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-shape-1",
                            "selectorGuids": ["31a0f383-8c80-6a5e-1a92-c9c1d2b6e0be"]
                        },
                        "zValue": 45,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-30-n-13",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-shape-2",
                            "selectorGuids": ["919768f0-c0b6-1bd7-1cb5-299a4b5281ae"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-30-n-14",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-shape-1",
                            "selectorGuids": ["31a0f383-8c80-6a5e-1a92-c9c1d2b6e0be"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-30-n-15",
                    "actionTypeId": "TRANSFORM_SKEW",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-shape-1",
                            "selectorGuids": ["31a0f383-8c80-6a5e-1a92-c9c1d2b6e0be"]
                        },
                        "xValue": 0,
                        "xUnit": "deg",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-30-n-16",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-shape-1",
                            "selectorGuids": ["31a0f383-8c80-6a5e-1a92-c9c1d2b6e0be"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1665137535236
        },
        "a-32": {
            "id": "a-32",
            "title": "Scrolling",
            "continuousParameterGroups": [{
                "id": "a-32-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-32-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".list",
                                "selectorGuids": ["bbfbc0a1-be26-c9a2-538b-9dddb728a6df"]
                            },
                            "xValue": 0,
                            "xUnit": "rem",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-32-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".list",
                                "selectorGuids": ["bbfbc0a1-be26-c9a2-538b-9dddb728a6df"]
                            },
                            "xValue": -1,
                            "xUnit": "rem",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1622340751326
        },
        "a-36": {
            "id": "a-36",
            "title": "Ft Project [IN]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-36-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".ft-line",
                            "selectorGuids": ["dfda3c59-2db7-bb65-4f41-2b7b45d633c9"]
                        },
                        "xValue": 0,
                        "locked": false
                    }
                }, {
                    "id": "a-36-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".featured_category.text-size-small",
                            "selectorGuids": ["71821199-8825-240f-c8e6-c62168492d43", "0b8efd6c-896d-28fc-326b-97a29b219bbe"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-36-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".featured_client.heading-style-h6",
                            "selectorGuids": ["41ec7d51-8d2b-1e82-e631-4e360726aee7", "5fdd147c-90dd-c434-1925-5d347bc5afb2"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-36-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".featured_name.heading-style-h2",
                            "selectorGuids": ["ab2f1319-321b-85ca-5500-2ea298193add", "5bdfa2f7-c115-9c93-edf4-b385123eb85e"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-36-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuint",
                        "duration": 1400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".ft-line",
                            "selectorGuids": ["dfda3c59-2db7-bb65-4f41-2b7b45d633c9"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-36-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".featured_client.heading-style-h6",
                            "selectorGuids": ["41ec7d51-8d2b-1e82-e631-4e360726aee7", "5fdd147c-90dd-c434-1925-5d347bc5afb2"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-36-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".featured_name.heading-style-h2",
                            "selectorGuids": ["ab2f1319-321b-85ca-5500-2ea298193add", "5bdfa2f7-c115-9c93-edf4-b385123eb85e"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-36-n-8",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 100,
                        "easing": "outCubic",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".featured_category.text-size-small",
                            "selectorGuids": ["71821199-8825-240f-c8e6-c62168492d43", "0b8efd6c-896d-28fc-326b-97a29b219bbe"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1685518185051
        },
        "a-37": {
            "id": "a-37",
            "title": "Services Parallax",
            "continuousParameterGroups": [{
                "id": "a-37-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-37-n",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".image.radius-20",
                                "selectorGuids": ["64421f16-566a-3db2-0a44-94b00decfe3d", "7cd369c4-ae28-837a-ee20-87e59a175d77"]
                            },
                            "xValue": 1.1,
                            "yValue": 1.1,
                            "locked": true
                        }
                    }, {
                        "id": "a-37-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".image.radius-20",
                                "selectorGuids": ["64421f16-566a-3db2-0a44-94b00decfe3d", "7cd369c4-ae28-837a-ee20-87e59a175d77"]
                            },
                            "yValue": -10,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-37-n-2",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".image.radius-20",
                                "selectorGuids": ["64421f16-566a-3db2-0a44-94b00decfe3d", "7cd369c4-ae28-837a-ee20-87e59a175d77"]
                            },
                            "xValue": 1.1,
                            "yValue": 1.1,
                            "locked": true
                        }
                    }, {
                        "id": "a-37-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".image.radius-20",
                                "selectorGuids": ["64421f16-566a-3db2-0a44-94b00decfe3d", "7cd369c4-ae28-837a-ee20-87e59a175d77"]
                            },
                            "yValue": 10,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1685520108543
        },
        "a-38": {
            "id": "a-38",
            "title": "Studio Slide Up",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-38-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".heading-style-display",
                            "selectorGuids": ["e234f6e0-20ab-df40-067a-922710bdc5eb"]
                        },
                        "yValue": 105,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-38-n-7",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15b3|f31ef841-cb39-df5f-8702-97394fae26f8"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-38-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".studio_content",
                            "selectorGuids": ["30a49588-b1de-c11e-23ce-0f178c1ffae1"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-38-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".studio_content",
                            "selectorGuids": ["30a49588-b1de-c11e-23ce-0f178c1ffae1"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-38-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 200,
                        "easing": "ease",
                        "duration": 2000,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15b3|f31ef841-cb39-df5f-8702-97394fae26f8"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-38-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 500,
                        "easing": "outQuart",
                        "duration": 1400,
                        "target": {
                            "selector": ".heading-style-display",
                            "selectorGuids": ["e234f6e0-20ab-df40-067a-922710bdc5eb"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-38-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 1000,
                        "easing": "outCirc",
                        "duration": 1000,
                        "target": {
                            "selector": ".studio_content",
                            "selectorGuids": ["30a49588-b1de-c11e-23ce-0f178c1ffae1"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-38-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 1000,
                        "easing": "ease",
                        "duration": 2000,
                        "target": {
                            "selector": ".studio_content",
                            "selectorGuids": ["30a49588-b1de-c11e-23ce-0f178c1ffae1"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1685521087228
        },
        "a-39": {
            "id": "a-39",
            "title": "Studio Parallax",
            "continuousParameterGroups": [{
                "id": "a-39-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-39-n",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".image.radius-16",
                                "selectorGuids": ["64421f16-566a-3db2-0a44-94b00decfe3d", "f2d2ac4d-e6ac-4e46-03b1-def669b4f957"]
                            },
                            "xValue": 1.1,
                            "yValue": 1.1,
                            "locked": true
                        }
                    }, {
                        "id": "a-39-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".image.radius-16",
                                "selectorGuids": ["64421f16-566a-3db2-0a44-94b00decfe3d", "f2d2ac4d-e6ac-4e46-03b1-def669b4f957"]
                            },
                            "yValue": -10,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-39-n-2",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".image.radius-16",
                                "selectorGuids": ["64421f16-566a-3db2-0a44-94b00decfe3d", "f2d2ac4d-e6ac-4e46-03b1-def669b4f957"]
                            },
                            "xValue": 1.1,
                            "yValue": 1.1,
                            "locked": true
                        }
                    }, {
                        "id": "a-39-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".image.radius-16",
                                "selectorGuids": ["64421f16-566a-3db2-0a44-94b00decfe3d", "f2d2ac4d-e6ac-4e46-03b1-def669b4f957"]
                            },
                            "yValue": 10,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1685522102857
        },
        "a-40": {
            "id": "a-40",
            "title": "Header Slide Up",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-40-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "64d3dd9edfb41666c35b15b3|601a4f0e-bb5a-82e3-f273-88812c6983ec"
                        },
                        "yValue": 105,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-40-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1400,
                        "target": {
                            "useEventTarget": true,
                            "id": "64d3dd9edfb41666c35b15b3|601a4f0e-bb5a-82e3-f273-88812c6983ec"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1685522542435
        },
        "a-41": {
            "id": "a-41",
            "title": "Service Item",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-41-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".service_line",
                            "selectorGuids": ["39521ea0-e265-33a4-35f5-dcf613151d43"]
                        },
                        "xValue": 0,
                        "locked": false
                    }
                }, {
                    "id": "a-41-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".si_wrapper",
                            "selectorGuids": ["2d932d05-bedc-d287-daf8-d0f98d177ed1"]
                        },
                        "yValue": 200,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-41-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuint",
                        "duration": 1400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".service_line",
                            "selectorGuids": ["39521ea0-e265-33a4-35f5-dcf613151d43"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": false
                    }
                }, {
                    "id": "a-41-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".si_wrapper",
                            "selectorGuids": ["2d932d05-bedc-d287-daf8-d0f98d177ed1"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1685523004283
        },
        "a-42": {
            "id": "a-42",
            "title": "Project Page Load",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-42-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15b0|e85fcc1d-577f-c69f-c838-3955b102efa5"
                        },
                        "yValue": 105,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-42-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15b0|b961cd08-52b7-86f4-c1df-fa1ebfa1b250"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-42-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15b0|732b6be9-2f0e-becd-855d-67eabe634b9a"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-42-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 1000,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15b0|b961cd08-52b7-86f4-c1df-fa1ebfa1b250"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-42-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 500,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15b0|e85fcc1d-577f-c69f-c838-3955b102efa5"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-42-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 1000,
                        "easing": "outCirc",
                        "duration": 1500,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15b0|732b6be9-2f0e-becd-855d-67eabe634b9a"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1685523750532
        },
        "a-50": {
            "id": "a-50",
            "title": "Filters 2 sort dropdown [Close]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-50-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {},
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-50-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {},
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-50-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 0,
                        "target": {},
                        "yValue": 3,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1626161607847
        },
        "a-46": {
            "id": "a-46",
            "title": "Filter 2 toggle button [Off]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-46-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {},
                        "xValue": 0,
                        "xUnit": "rem",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-46-n-2",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 0,
                        "target": {},
                        "globalSwatchId": "",
                        "rValue": 198,
                        "bValue": 198,
                        "gValue": 198,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1638537122270
        },
        "a-48": {
            "id": "a-48",
            "title": "Filters 2 modal [Open] [Tablet]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-48-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "yValue": 120,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-48-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 500,
                        "target": {},
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1646959718287
        },
        "a-47": {
            "id": "a-47",
            "title": "Filters 2 modal [Close] [Tablet]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-47-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 500,
                        "target": {},
                        "yValue": 120,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1646959718287
        },
        "a-45": {
            "id": "a-45",
            "title": "Filter 2 toggle button [On]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-45-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {},
                        "xValue": 1,
                        "xUnit": "rem",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-45-n-2",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 0,
                        "target": {},
                        "globalSwatchId": "dccb7db6",
                        "rValue": 0,
                        "bValue": 0,
                        "gValue": 0,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1638537122270
        },
        "a-49": {
            "id": "a-49",
            "title": "Filters 2 sort dropdown [Open]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-49-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "yValue": 3,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-49-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-49-n-3",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {},
                        "zValue": 180,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-49-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {},
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "rem",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-49-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {},
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1626161607847
        },
        "a-57": {
            "id": "a-57",
            "title": "Work Gradient",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-57-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".work-shapes-1",
                            "selectorGuids": ["acb4a734-dde3-bad1-f584-536e9fa39a1b"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-57-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".work-shapes-1",
                            "selectorGuids": ["acb4a734-dde3-bad1-f584-536e9fa39a1b"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-57-n-3",
                    "actionTypeId": "TRANSFORM_SKEW",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".work-shapes-1",
                            "selectorGuids": ["acb4a734-dde3-bad1-f584-536e9fa39a1b"]
                        },
                        "xValue": 0,
                        "xUnit": "deg",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-57-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".work-shapes-2",
                            "selectorGuids": ["23000641-d55d-8150-785a-926280cfe54b"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-57-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".work-shapes-2",
                            "selectorGuids": ["23000641-d55d-8150-785a-926280cfe54b"]
                        },
                        "xValue": -6,
                        "yValue": 10,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-57-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".work-shapes-1",
                            "selectorGuids": ["acb4a734-dde3-bad1-f584-536e9fa39a1b"]
                        },
                        "xValue": -9,
                        "yValue": 7,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-57-n-7",
                    "actionTypeId": "TRANSFORM_SKEW",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".work-shapes-1",
                            "selectorGuids": ["acb4a734-dde3-bad1-f584-536e9fa39a1b"]
                        },
                        "xValue": 10,
                        "xUnit": "deg",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-57-n-8",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".work-shapes-1",
                            "selectorGuids": ["acb4a734-dde3-bad1-f584-536e9fa39a1b"]
                        },
                        "zValue": 90,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-57-n-9",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".work-shapes-2",
                            "selectorGuids": ["23000641-d55d-8150-785a-926280cfe54b"]
                        },
                        "xValue": 10,
                        "yValue": -14,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-57-n-10",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".work-shapes-1",
                            "selectorGuids": ["acb4a734-dde3-bad1-f584-536e9fa39a1b"]
                        },
                        "xValue": 2,
                        "yValue": -9,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-57-n-11",
                    "actionTypeId": "TRANSFORM_SKEW",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".work-shapes-1",
                            "selectorGuids": ["acb4a734-dde3-bad1-f584-536e9fa39a1b"]
                        },
                        "xValue": 6,
                        "xUnit": "deg",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-57-n-12",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".work-shapes-1",
                            "selectorGuids": ["acb4a734-dde3-bad1-f584-536e9fa39a1b"]
                        },
                        "zValue": 45,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-57-n-13",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".work-shapes-2",
                            "selectorGuids": ["23000641-d55d-8150-785a-926280cfe54b"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-57-n-14",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 2000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".work-shapes-1",
                            "selectorGuids": ["acb4a734-dde3-bad1-f584-536e9fa39a1b"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "%",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-57-n-15",
                    "actionTypeId": "TRANSFORM_SKEW",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".work-shapes-1",
                            "selectorGuids": ["acb4a734-dde3-bad1-f584-536e9fa39a1b"]
                        },
                        "xValue": 0,
                        "xUnit": "deg",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-57-n-16",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".work-shapes-1",
                            "selectorGuids": ["acb4a734-dde3-bad1-f584-536e9fa39a1b"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1665137535236
        },
        "a-58": {
            "id": "a-58",
            "title": "Work Grid",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-58-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "64d3dd9edfb41666c35b15b6|cf7865d7-f2e3-2fc0-ff56-0cdfd5d14352"
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-58-n-5",
                    "actionTypeId": "TRANSFORM_SKEW",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "64d3dd9edfb41666c35b15b6|cf7865d7-f2e3-2fc0-ff56-0cdfd5d14352"
                        },
                        "xValue": 0,
                        "yValue": 5,
                        "xUnit": "deg",
                        "yUnit": "deg",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-58-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "64d3dd9edfb41666c35b15b6|cf7865d7-f2e3-2fc0-ff56-0cdfd5d14352"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-58-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 1200,
                        "target": {
                            "useEventTarget": true,
                            "id": "64d3dd9edfb41666c35b15b6|cf7865d7-f2e3-2fc0-ff56-0cdfd5d14352"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-58-n-6",
                    "actionTypeId": "TRANSFORM_SKEW",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 1200,
                        "target": {
                            "useEventTarget": true,
                            "id": "64d3dd9edfb41666c35b15b6|cf7865d7-f2e3-2fc0-ff56-0cdfd5d14352"
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "deg",
                        "yUnit": "deg",
                        "zUnit": "DEG"
                    }
                }, {
                    "id": "a-58-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inOutQuart",
                        "duration": 1200,
                        "target": {
                            "useEventTarget": true,
                            "id": "64d3dd9edfb41666c35b15b6|cf7865d7-f2e3-2fc0-ff56-0cdfd5d14352"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1685627490451
        },
        "a-59": {
            "id": "a-59",
            "title": "Contact Page Load",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-59-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15ae|ddba9ebc-9bd6-7f35-e142-2bb812d04d08"
                        },
                        "yValue": 50,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-59-n-21",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15ae|cb2c5d14-49bb-25f5-def1-b8c539429dc9"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-59-n-19",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15ae|182dfed7-cc10-fd19-6f8d-c103263c7725"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-59-n-17",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15ae|780020fa-1ade-f99d-bc6c-25d020158dc1"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-59-n-15",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15ae|5c5dd414-5310-069b-d87b-884fb76edf4d"
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "locked": true
                    }
                }, {
                    "id": "a-59-n-13",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15ae|a8296101-f5be-d9b4-b845-5a6a897e2b38"
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "locked": true
                    }
                }, {
                    "id": "a-59-n-11",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15ae|3f0509ab-4c14-a874-d63c-6f5e2aa34bff"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-59-n-9",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15ae|2f45e20d-b739-a10f-342c-1d8394a74b5b"
                        },
                        "yValue": 150,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-59-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15ae|075545f0-e48b-1949-8279-20169f4b8d40"
                        },
                        "yValue": 105,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-59-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15ae|2df42a85-0274-06a1-2caa-21263af942a5"
                        },
                        "yValue": 105,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-59-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15ae|ddba9ebc-9bd6-7f35-e142-2bb812d04d08"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-59-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 1500,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15ae|ddba9ebc-9bd6-7f35-e142-2bb812d04d08"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-59-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 1000,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15ae|ddba9ebc-9bd6-7f35-e142-2bb812d04d08"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-59-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 400,
                        "easing": "outCirc",
                        "duration": 1000,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15ae|2df42a85-0274-06a1-2caa-21263af942a5"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-59-n-8",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 600,
                        "easing": "outCirc",
                        "duration": 1000,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15ae|075545f0-e48b-1949-8279-20169f4b8d40"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-59-n-10",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 800,
                        "easing": "outCirc",
                        "duration": 1000,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15ae|2f45e20d-b739-a10f-342c-1d8394a74b5b"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-59-n-12",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 1000,
                        "easing": "ease",
                        "duration": 1000,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15ae|3f0509ab-4c14-a874-d63c-6f5e2aa34bff"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-59-n-14",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 1500,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15ae|a8296101-f5be-d9b4-b845-5a6a897e2b38"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-59-n-22",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 1500,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15ae|cb2c5d14-49bb-25f5-def1-b8c539429dc9"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-59-n-18",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 1500,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15ae|780020fa-1ade-f99d-bc6c-25d020158dc1"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-59-n-16",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 1500,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15ae|5c5dd414-5310-069b-d87b-884fb76edf4d"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-59-n-20",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 1500,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15ae|182dfed7-cc10-fd19-6f8d-c103263c7725"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1686568176329
        },
        "a-60": {
            "id": "a-60",
            "title": "Work Page Load",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-60-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15b6|5079f2f0-8656-ce1c-3497-05ea9dc1e952"
                        },
                        "yValue": 105,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-60-n-9",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15b6|cf7865d7-f2e3-2fc0-ff56-0cdfd5d14351"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-60-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15b6|cf7865d7-f2e3-2fc0-ff56-0cdfd5d14351"
                        },
                        "yValue": 200,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-60-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15b6|13b13d25-91e1-dace-fbd8-10b8247f13b7"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-60-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15b6|b8351c1d-e232-ce31-b5e2-c07b9c812f77"
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-60-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15b6|5079f2f0-8656-ce1c-3497-05ea9dc1e952"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-60-n-8",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 200,
                        "easing": "outQuad",
                        "duration": 1500,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15b6|cf7865d7-f2e3-2fc0-ff56-0cdfd5d14351"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-60-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 200,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15b6|cf7865d7-f2e3-2fc0-ff56-0cdfd5d14351"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-60-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 400,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15b6|b8351c1d-e232-ce31-b5e2-c07b9c812f77"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-60-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 400,
                        "easing": "ease",
                        "duration": 2000,
                        "target": {
                            "id": "64d3dd9edfb41666c35b15b6|13b13d25-91e1-dace-fbd8-10b8247f13b7"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1686573157642
        },
        "slideInBottom": {
            "id": "slideInBottom",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }]
            }]
        }
    },
    "site": {
        "mediaQueries": [{
            "key": "main",
            "min": 992,
            "max": 10000
        }, {
            "key": "medium",
            "min": 768,
            "max": 991
        }, {
            "key": "small",
            "min": 480,
            "max": 767
        }, {
            "key": "tiny",
            "min": 0,
            "max": 479
        }]
    }
});