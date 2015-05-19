!function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document)
            throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    function n(t) {
        var e = t.length, n = K.type(t);
        return "function" === n || K.isWindow(t)?!1 : 1 === t.nodeType && e?!0 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }
    function i(t, e, n) {
        if (K.isFunction(e))
            return K.grep(t, function(t, i) {
                return !!e.call(t, i, t) !== n
            });
        if (e.nodeType)
            return K.grep(t, function(t) {
                return t === e !== n
            });
        if ("string" == typeof e) {
            if (ae.test(e))
                return K.filter(e, t, n);
            e = K.filter(e, t)
        }
        return K.grep(t, function(t) {
            return Y.call(e, t) >= 0 !== n
        })
    }
    function r(t, e) {
        for (; (t = t[e]) && 1 !== t.nodeType;);
        return t
    }
    function o(t) {
        var e = de[t] = {};
        return K.each(t.match(fe) || [], function(t, n) {
            e[n]=!0
        }), e
    }
    function s() {
        J.removeEventListener("DOMContentLoaded", s, !1), t.removeEventListener("load", s, !1), K.ready()
    }
    function a() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = K.expando + Math.random()
    }
    function u(t, e, n) {
        var i;
        if (void 0 === n && 1 === t.nodeType)
            if (i = "data-" + e.replace(be, "-$1").toLowerCase(), n = t.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n?!0 : "false" === n?!1 : "null" === n ? null : + n + "" === n?+n : we.test(n) ? K.parseJSON(n) : n
                } catch (r) {}
                ye.set(t, e, n)
            } else 
                n = void 0;
        return n
    }
    function l() {
        return !0
    }
    function c() {
        return !1
    }
    function h() {
        try {
            return J.activeElement
        } catch (t) {}
    }
    function p(t, e) {
        return K.nodeName(t, "table") && K.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }
    function f(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }
    function d(t) {
        var e = ze.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }
    function g(t, e) {
        for (var n = 0, i = t.length; i > n; n++)
            ve.set(t[n], "globalEval", !e || ve.get(e[n], "globalEval"))
    }
    function m(t, e) {
        var n, i, r, o, s, a, u, l;
        if (1 === e.nodeType) {
            if (ve.hasData(t) && (o = ve.access(t), s = ve.set(e, o), l = o.events)) {
                delete s.handle, s.events = {};
                for (r in l)
                    for (n = 0, i = l[r].length; i > n; n++)
                        K.event.add(e, r, l[r][n])
                    }
            ye.hasData(t) && (a = ye.access(t), u = K.extend({}, a), ye.set(e, u))
        }
    }
    function v(t, e) {
        var n = t.getElementsByTagName ? t.getElementsByTagName(e || "*"): t.querySelectorAll ? t.querySelectorAll(e || "*"): [];
        return void 0 === e || e && K.nodeName(t, e) ? K.merge([t], n) : n
    }
    function y(t, e) {
        var n = e.nodeName.toLowerCase();
        "input" === n && Ee.test(t.type) ? e.checked = t.checked : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
    }
    function w(e, n) {
        var i, r = K(n.createElement(e)).appendTo(n.body), o = t.getDefaultComputedStyle && (i = t.getDefaultComputedStyle(r[0])) ? i.display: K.css(r[0], "display");
        return r.detach(), o
    }
    function b(t) {
        var e = J, n = He[t];
        return n || (n = w(t, e), "none" !== n && n || ($e = ($e || K("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = $e[0].contentDocument, e.write(), e.close(), n = w(t, e), $e.detach()), He[t] = n), n
    }
    function _(t, e, n) {
        var i, r, o, s, a = t.style;
        return n = n || Fe(t), n && (s = n.getPropertyValue(e) || n[e]), n && ("" !== s || K.contains(t.ownerDocument, t) || (s = K.style(t, e)), We.test(s) && qe.test(e) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
    }
    function x(t, e) {
        return {
            get: function() {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }
    function T(t, e) {
        if (e in t)
            return e;
        for (var n = e[0].toUpperCase() + e.slice(1), i = e, r = Qe.length; r--;)
            if (e = Qe[r] + n, e in t)
                return e;
        return i
    }
    function E(t, e, n) {
        var i = Xe.exec(e);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
    }
    function C(t, e, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > o; o += 2)
            "margin" === n && (s += K.css(t, n + xe[o], !0, r)), i ? ("content" === n && (s -= K.css(t, "padding" + xe[o], !0, r)), "margin" !== n && (s -= K.css(t, "border" + xe[o] + "Width", !0, r))) : (s += K.css(t, "padding" + xe[o], !0, r), "padding" !== n && (s += K.css(t, "border" + xe[o] + "Width", !0, r)));
        return s
    }
    function S(t, e, n) {
        var i=!0, r = "width" === e ? t.offsetWidth : t.offsetHeight, o = Fe(t), s = "border-box" === K.css(t, "boxSizing", !1, o);
        if (0 >= r || null == r) {
            if (r = _(t, e, o), (0 > r || null == r) && (r = t.style[e]), We.test(r))
                return r;
            i = s && (G.boxSizingReliable() || r === t.style[e]), r = parseFloat(r) || 0
        }
        return r + C(t, e, n || (s ? "border" : "content"), i, o) + "px"
    }
    function I(t, e) {
        for (var n, i, r, o = [], s = 0, a = t.length; a > s; s++)
            i = t[s], i.style && (o[s] = ve.get(i, "olddisplay"), n = i.style.display, e ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && Te(i) && (o[s] = ve.access(i, "olddisplay", b(i.nodeName)))) : (r = Te(i), "none" === n && r || ve.set(i, "olddisplay", r ? n : K.css(i, "display"))));
        for (s = 0; a > s; s++)
            i = t[s], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? o[s] || "" : "none"));
        return t
    }
    function k(t, e, n, i, r) {
        return new k.prototype.init(t, e, n, i, r)
    }
    function L() {
        return setTimeout(function() {
            Ge = void 0
        }), Ge = K.now()
    }
    function j(t, e) {
        var n, i = 0, r = {
            height: t
        };
        for (e = e ? 1 : 0; 4 > i; i += 2 - e)
            n = xe[i], r["margin" + n] = r["padding" + n] = t;
        return e && (r.opacity = r.width = t), r
    }
    function D(t, e, n) {
        for (var i, r = (nn[e] || []).concat(nn["*"]), o = 0, s = r.length; s > o; o++)
            if (i = r[o].call(n, e, t))
                return i
    }
    function N(t, e, n) {
        var i, r, o, s, a, u, l, c, h = this, p = {}, f = t.style, d = t.nodeType && Te(t), g = ve.get(t, "fxshow");
        n.queue || (a = K._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function() {
            a.unqueued || u()
        }), a.unqueued++, h.always(function() {
            h.always(function() {
                a.unqueued--, K.queue(t, "fx").length || a.empty.fire()
            })
        })), 1 === t.nodeType && ("height"in e || "width"in e) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], l = K.css(t, "display"), c = "none" === l ? ve.get(t, "olddisplay") || b(t.nodeName) : l, "inline" === c && "none" === K.css(t, "float") && (f.display = "inline-block")), n.overflow && (f.overflow = "hidden", h.always(function() {
            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
        }));
        for (i in e)
            if (r = e[i], Ze.exec(r)) {
                if (delete e[i], o = o || "toggle" === r, r === (d ? "hide" : "show")) {
                    if ("show" !== r ||!g || void 0 === g[i])
                        continue;
                        d=!0
                }
                p[i] = g && g[i] || K.style(t, i)
            } else 
                l = void 0;
        if (K.isEmptyObject(p))
            "inline" === ("none" === l ? b(t.nodeName) : l) && (f.display = l);
        else {
            g ? "hidden"in g && (d = g.hidden) : g = ve.access(t, "fxshow", {}), o && (g.hidden=!d), d ? K(t).show() : h.done(function() {
                K(t).hide()
            }), h.done(function() {
                var e;
                ve.remove(t, "fxshow");
                for (e in p)
                    K.style(t, e, p[e])
            });
            for (i in p)
                s = D(d ? g[i] : 0, i, h), i in g || (g[i] = s.start, d && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
        }
    }
    function A(t, e) {
        var n, i, r, o, s;
        for (n in t)
            if (i = K.camelCase(n), r = e[i], o = t[n], K.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), s = K.cssHooks[i], s && "expand"in s) {
                o = s.expand(o), delete t[i];
                for (n in o)
                    n in t || (t[n] = o[n], e[n] = r)
            } else 
                e[i] = r
    }
    function O(t, e, n) {
        var i, r, o = 0, s = en.length, a = K.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if (r)
                return !1;
            for (var e = Ge || L(), n = Math.max(0, l.startTime + l.duration - e), i = n / l.duration || 0, o = 1 - i, s = 0, u = l.tweens.length; u > s; s++)
                l.tweens[s].run(o);
            return a.notifyWith(t, [l, o, n]), 1 > o && u ? n : (a.resolveWith(t, [l]), !1)
        }, l = a.promise({
            elem: t,
            props: K.extend({}, e),
            opts: K.extend(!0, {
                specialEasing: {}
            }, n),
            originalProperties: e,
            originalOptions: n,
            startTime: Ge || L(),
            duration: n.duration,
            tweens: [],
            createTween: function(e, n) {
                var i = K.Tween(t, l.opts, e, n, l.opts.specialEasing[e] || l.opts.easing);
                return l.tweens.push(i), i
            },
            stop: function(e) {
                var n = 0, i = e ? l.tweens.length: 0;
                if (r)
                    return this;
                for (r=!0; i > n; n++)
                    l.tweens[n].run(1);
                return e ? a.resolveWith(t, [l, e]) : a.rejectWith(t, [l, e]), this
            }
        }), c = l.props;
        for (A(c, l.opts.specialEasing);
        s > o;
        o++)if (i = en[o].call(l, t, c, l.opts))
            return i;
        return K.map(c, D, l), K.isFunction(l.opts.start) && l.opts.start.call(t, l), K.fx.timer(K.extend(u, {
            elem: t,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }
    function M(t) {
        return function(e, n) {
            "string" != typeof e && (n = e, e = "*");
            var i, r = 0, o = e.toLowerCase().match(fe) || [];
            if (K.isFunction(n))
                for (; i = o[r++];)
                    "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }
    function z(t, e, n, i) {
        function r(a) {
            var u;
            return o[a]=!0, K.each(t[a] || [], function(t, a) {
                var l = a(e, n, i);
                return "string" != typeof l || s || o[l] ? s?!(u = l) : void 0 : (e.dataTypes.unshift(l), r(l), !1)
            }), u
        }
        var o = {}, s = t === xn;
        return r(e.dataTypes[0]) ||!o["*"] && r("*")
    }
    function P(t, e) {
        var n, i, r = K.ajaxSettings.flatOptions || {};
        for (n in e)
            void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
        return i && K.extend(!0, t, i), t
    }
    function R(t, e, n) {
        for (var i, r, o, s, a = t.contents, u = t.dataTypes; "*" === u[0];)
            u.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
        if (i)
            for (r in a)
                if (a[r] && a[r].test(i)) {
                    u.unshift(r);
                    break
                }
        if (u[0]in n)
            o = u[0];
        else {
            for (r in n) {
                if (!u[0] || t.converters[r + " " + u[0]]) {
                    o = r;
                    break
                }
                s || (s = r)
            }
            o = o || s
        }
        return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
    }
    function $(t, e, n, i) {
        var r, o, s, a, u, l = {}, c = t.dataTypes.slice();
        if (c[1])
            for (s in t.converters)
                l[s.toLowerCase()] = t.converters[s];
        for (o = c.shift(); o;)
            if (t.responseFields[o] && (n[t.responseFields[o]] = e), !u && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), u = o, o = c.shift())
                if ("*" === o)
                    o = u;
                else if ("*" !== u && u !== o) {
                    if (s = l[u + " " + o] || l["* " + o], !s)
                        for (r in l)
                            if (a = r.split(" "), a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                                s===!0 ? s = l[r] : l[r]!==!0 && (o = a[0], c.unshift(a[1]));
                                break
                            }
                            if (s!==!0)
                                if (s && t["throws"])
                                    e = s(e);
                                else 
                                    try {
                                        e = s(e)
                                    } catch (h) {
                                        return {
                                            state: "parsererror",
                                            error: s ? h: "No conversion from " + u + " to " + o
                                        }
                                    }
                                }
        return {
            state: "success",
            data: e
        }
    }
    function H(t, e, n, i) {
        var r;
        if (K.isArray(e))
            K.each(e, function(e, r) {
                n || Sn.test(t) ? i(t, r) : H(t + "[" + ("object" == typeof r ? e : "") + "]", r, n, i)
            });
        else if (n || "object" !== K.type(e))
            i(t, e);
        else 
            for (r in e)
                H(t + "[" + r + "]", e[r], n, i)
            }
    function q(t) {
        return K.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
    }
    var W = [], F = W.slice, B = W.concat, X = W.push, Y = W.indexOf, U = {}, V = U.toString, Q = U.hasOwnProperty, G = {}, J = t.document, Z = "2.1.1", K = function(t, e) {
        return new K.fn.init(t, e)
    }, te = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ee = /^-ms-/, ne = /-([\da-z])/gi, ie = function(t, e) {
        return e.toUpperCase()
    };
    K.fn = K.prototype = {
        jquery: Z,
        constructor: K,
        selector: "",
        length: 0,
        toArray: function() {
            return F.call(this)
        },
        get: function(t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : F.call(this)
        },
        pushStack: function(t) {
            var e = K.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function(t, e) {
            return K.each(this, t, e)
        },
        map: function(t) {
            return this.pushStack(K.map(this, function(e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function() {
            return this.pushStack(F.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq( - 1)
        },
        eq: function(t) {
            var e = this.length, n =+ t + (0 > t ? e : 0);
            return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: X,
        sort: W.sort,
        splice: W.splice
    }, K.extend = K.fn.extend = function() {
        var t, e, n, i, r, o, s = arguments[0] || {}, a = 1, u = arguments.length, l=!1;
        for ("boolean" == typeof s && (l = s, s = arguments[a] || {}, a++), "object" == typeof s || K.isFunction(s) || (s = {}), a === u && (s = this, a--); u > a; a++)
            if (null != (t = arguments[a]))
                for (e in t)
                    n = s[e], i = t[e], s !== i && (l && i && (K.isPlainObject(i) || (r = K.isArray(i))) ? (r ? (r=!1, o = n && K.isArray(n) ? n : []) : o = n && K.isPlainObject(n) ? n : {}, s[e] = K.extend(l, o, i)) : void 0 !== i && (s[e] = i));
        return s
    }, K.extend({
        expando: "jQuery" + (Z + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === K.type(t)
        },
        isArray: Array.isArray,
        isWindow: function(t) {
            return null != t && t === t.window
        },
        isNumeric: function(t) {
            return !K.isArray(t) && t - parseFloat(t) >= 0
        },
        isPlainObject: function(t) {
            return "object" !== K.type(t) || t.nodeType || K.isWindow(t)?!1 : t.constructor&&!Q.call(t.constructor.prototype, "isPrototypeOf")?!1 : !0
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t)
                return !1;
            return !0
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? U[V.call(t)] || "object" : typeof t
        },
        globalEval: function(t) {
            var e, n = eval;
            t = K.trim(t), t && (1 === t.indexOf("use strict") ? (e = J.createElement("script"), e.text = t, J.head.appendChild(e).parentNode.removeChild(e)) : n(t))
        },
        camelCase: function(t) {
            return t.replace(ee, "ms-").replace(ne, ie)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e, i) {
            var r, o = 0, s = t.length, a = n(t);
            if (i) {
                if (a)
                    for (; s > o && (r = e.apply(t[o], i), r!==!1); o++);
                else 
                    for (o in t)
                        if (r = e.apply(t[o], i), r===!1)
                            break
            } else if (a)
                for (; s > o && (r = e.call(t[o], o, t[o]), r!==!1); o++);
            else 
                for (o in t)
                    if (r = e.call(t[o], o, t[o]), r===!1)
                        break;
            return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(te, "")
        },
        makeArray: function(t, e) {
            var i = e || [];
            return null != t && (n(Object(t)) ? K.merge(i, "string" == typeof t ? [t] : t) : X.call(i, t)), i
        },
        inArray: function(t, e, n) {
            return null == e?-1 : Y.call(e, t, n)
        },
        merge: function(t, e) {
            for (var n =+ e.length, i = 0, r = t.length; n > i; i++)
                t[r++] = e[i];
            return t.length = r, t
        },
        grep: function(t, e, n) {
            for (var i, r = [], o = 0, s = t.length, a=!n; s > o; o++)
                i=!e(t[o], o), i !== a && r.push(t[o]);
            return r
        },
        map: function(t, e, i) {
            var r, o = 0, s = t.length, a = n(t), u = [];
            if (a)
                for (; s > o; o++)
                    r = e(t[o], o, i), null != r && u.push(r);
            else 
                for (o in t)
                    r = e(t[o], o, i), null != r && u.push(r);
            return B.apply([], u)
        },
        guid: 1,
        proxy: function(t, e) {
            var n, i, r;
            return "string" == typeof e && (n = t[e], e = t, t = n), K.isFunction(t) ? (i = F.call(arguments, 2), r = function() {
                return t.apply(e || this, i.concat(F.call(arguments)))
            }, r.guid = t.guid = t.guid || K.guid++, r) : void 0
        },
        now: Date.now,
        support: G
    }), K.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
        U["[object " + e + "]"] = e.toLowerCase()
    });
    var re = function(t) {
        function e(t, e, n, i) {
            var r, o, s, a, u, l, h, f, d, g;
            if ((e ? e.ownerDocument || e : H) !== N && D(e), e = e || N, n = n || [], !t || "string" != typeof t)
                return n;
            if (1 !== (a = e.nodeType) && 9 !== a)
                return [];
            if (O&&!i) {
                if (r = ye.exec(t))
                    if (s = r[1]) {
                        if (9 === a) {
                            if (o = e.getElementById(s), !o ||!o.parentNode)
                                return n;
                                if (o.id === s)
                                    return n.push(o), n
                        } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(s)) && R(e, o) && o.id === s)
                            return n.push(o), n
                    } else {
                        if (r[2])
                            return K.apply(n, e.getElementsByTagName(t)), n;
                            if ((s = r[3]) && _.getElementsByClassName && e.getElementsByClassName)
                                return K.apply(n, e.getElementsByClassName(s)), n
                    }
                if (_.qsa && (!M ||!M.test(t))) {
                    if (f = h = $, d = e, g = 9 === a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                        for (l = C(t), (h = e.getAttribute("id")) ? f = h.replace(be, "\\$&") : e.setAttribute("id", f), f = "[id='" + f + "'] ", u = l.length; u--;)
                            l[u] = f + p(l[u]);
                        d = we.test(t) && c(e.parentNode) || e, g = l.join(",")
                    }
                    if (g)
                        try {
                            return K.apply(n, d.querySelectorAll(g)), n
                    } catch (m) {} finally {
                        h || e.removeAttribute("id")
                    }
                }
            }
            return I(t.replace(ue, "$1"), e, n, i)
        }
        function n() {
            function t(n, i) {
                return e.push(n + " ") > x.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
            var e = [];
            return t
        }
        function i(t) {
            return t[$]=!0, t
        }
        function r(t) {
            var e = N.createElement("div");
            try {
                return !!t(e)
            } catch (n) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }
        function o(t, e) {
            for (var n = t.split("|"), i = t.length; i--;)
                x.attrHandle[n[i]] = e
        }
        function s(t, e) {
            var n = e && t, i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || V) - (~t.sourceIndex || V);
            if (i)
                return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === e)
                        return - 1;
            return t ? 1 : - 1
        }
        function a(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return "input" === n && e.type === t
            }
        }
        function u(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }
        function l(t) {
            return i(function(e) {
                return e =+ e, i(function(n, i) {
                    for (var r, o = t([], n.length, e), s = o.length; s--;)
                        n[r = o[s]] && (n[r]=!(i[r] = n[r]))
                })
            })
        }
        function c(t) {
            return t && typeof t.getElementsByTagName !== U && t
        }
        function h() {}
        function p(t) {
            for (var e = 0, n = t.length, i = ""; n > e; e++)
                i += t[e].value;
            return i
        }
        function f(t, e, n) {
            var i = e.dir, r = n && "parentNode" === i, o = W++;
            return e.first ? function(e, n, o) {
                for (; e = e[i];)
                    if (1 === e.nodeType || r)
                        return t(e, n, o)
            } : function(e, n, s) {
                var a, u, l = [q, o];
                if (s) {
                    for (; e = e[i];)
                        if ((1 === e.nodeType || r) && t(e, n, s))
                            return !0
                } else 
                    for (; e = e[i];)
                        if (1 === e.nodeType || r) {
                            if (u = e[$] || (e[$] = {}), (a = u[i]) && a[0] === q && a[1] === o)
                                return l[2] = a[2];
                                if (u[i] = l, l[2] = t(e, n, s))
                                    return !0
                        }
            }
        }
        function d(t) {
            return t.length > 1 ? function(e, n, i) {
                for (var r = t.length; r--;)
                    if (!t[r](e, n, i))
                        return !1;
                return !0
            } : t[0]
        }
        function g(t, n, i) {
            for (var r = 0, o = n.length; o > r; r++)
                e(t, n[r], i);
            return i
        }
        function m(t, e, n, i, r) {
            for (var o, s = [], a = 0, u = t.length, l = null != e; u > a; a++)(o = t[a]) 
                && (!n || n(o, i, r)) && (s.push(o), l && e.push(a));
            return s
        }
        function v(t, e, n, r, o, s) {
            return r&&!r[$] && (r = v(r)), o&&!o[$] && (o = v(o, s)), i(function(i, s, a, u) {
                var l, c, h, p = [], f = [], d = s.length, v = i || g(e || "*", a.nodeType ? [a] : a, []), y=!t ||!i && e ? v : m(v, p, t, a, u), w = n ? o || (i ? t : d || r) ? [] : s : y;
                if (n && n(y, w, a, u), r)
                    for (l = m(w, f), r(l, [], a, u), c = l.length; c--;)(h = l[c]) 
                        && (w[f[c]]=!(y[f[c]] = h));
                if (i) {
                    if (o || t) {
                        if (o) {
                            for (l = [], c = w.length; c--;)(h = w[c]) 
                                && l.push(y[c] = h);
                            o(null, w = [], l, u)
                        }
                        for (c = w.length; c--;)(h = w[c]) 
                            && (l = o ? ee.call(i, h) : p[c])>-1 && (i[l]=!(s[l] = h))
                        }
                } else 
                    w = m(w === s ? w.splice(d, w.length) : w), o ? o(null, s, w, u) : K.apply(s, w)
            })
        }
        function y(t) {
            for (var e, n, i, r = t.length, o = x.relative[t[0].type], s = o || x.relative[" "], a = o ? 1 : 0, u = f(function(t) {
                return t === e
            }, s, !0), l = f(function(t) {
                return ee.call(e, t)>-1
            }, s, !0), c = [function(t, n, i) {
                return !o && (i || n !== k) || ((e = n).nodeType ? u(t, n, i) : l(t, n, i))
            }
            ]; r > a; a++)
                if (n = x.relative[t[a].type])
                    c = [f(d(c), n)];
                else {
                    if (n = x.filter[t[a].type].apply(null, t[a].matches), n[$]) {
                        for (i=++a; r > i&&!x.relative[t[i].type]; i++);
                        return v(a > 1 && d(c), a > 1 && p(t.slice(0, a - 1).concat({
                            value: " " === t[a - 2].type ? "*": ""
                        })).replace(ue, "$1"), n, i > a && y(t.slice(a, i)), r > i && y(t = t.slice(i)), r > i && p(t))
                    }
                    c.push(n)
                }
            return d(c)
        }
        function w(t, n) {
            var r = n.length > 0, o = t.length > 0, s = function(i, s, a, u, l) {
                var c, h, p, f = 0, d = "0", g = i && [], v = [], y = k, w = i || o && x.find.TAG("*", l), b = q += null == y ? 1: Math.random() || .1, _ = w.length;
                for (l && (k = s !== N && s); d !== _ && null != (c = w[d]); d++) {
                    if (o && c) {
                        for (h = 0; p = t[h++];)
                            if (p(c, s, a)) {
                                u.push(c);
                                break
                            }
                        l && (q = b)
                    }
                    r && ((c=!p && c) && f--, i && g.push(c))
                }
                if (f += d, r && d !== f) {
                    for (h = 0; p = n[h++];)
                        p(g, v, s, a);
                    if (i) {
                        if (f > 0)
                            for (; d--;)
                                g[d] || v[d] || (v[d] = J.call(u));
                        v = m(v)
                    }
                    K.apply(u, v), l&&!i && v.length > 0 && f + n.length > 1 && e.uniqueSort(u)
                }
                return l && (q = b, k = y), g
            };
            return r ? i(s) : s
        }
        var b, _, x, T, E, C, S, I, k, L, j, D, N, A, O, M, z, P, R, $ = "sizzle" +- new Date, H = t.document, q = 0, W = 0, F = n(), B = n(), X = n(), Y = function(t, e) {
            return t === e && (j=!0), 0
        }, U = "undefined", V = 1<<31, Q = {}.hasOwnProperty, G = [], J = G.pop, Z = G.push, K = G.push, te = G.slice, ee = G.indexOf || function(t) {
            for (var e = 0, n = this.length; n > e; e++)
                if (this[e] === t)
                    return e;
            return - 1
        }, ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ie = "[\\x20\\t\\r\\n\\f]", re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", oe = re.replace("w", "w#"), se = "\\[" + ie + "*(" + re + ")(?:" + ie + "*([*^$|!~]?=)" + ie + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + ie + "*\\]", ae = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + se + ")*)|.*)\\)|)", ue = new RegExp("^" + ie + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ie + "+$", "g"), le = new RegExp("^" + ie + "*," + ie + "*"), ce = new RegExp("^" + ie + "*([>+~]|" + ie + ")" + ie + "*"), he = new RegExp("=" + ie + "*([^\\]'\"]*?)" + ie + "*\\]", "g"), pe = new RegExp(ae), fe = new RegExp("^" + oe + "$"), de = {
            ID: new RegExp("^#(" + re + ")"),
            CLASS: new RegExp("^\\.(" + re + ")"),
            TAG: new RegExp("^(" + re.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + se),
            PSEUDO: new RegExp("^" + ae),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ie + "*(even|odd|(([+-]|)(\\d*)n|)" + ie + "*(?:([+-]|)" + ie + "*(\\d+)|))" + ie + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + ne + ")$", "i"),
            needsContext: new RegExp("^" + ie + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ie + "*((?:-\\d)?\\d*)" + ie + "*\\)|)(?=[^-]|$)", "i")
        }, ge = /^(?:input|select|textarea|button)$/i, me = /^h\d$/i, ve = /^[^{]+\{\s*\[native \w/, ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, we = /[+~]/, be = /'|\\/g, _e = new RegExp("\\\\([\\da-f]{1,6}" + ie + "?|(" + ie + ")|.)", "ig"), xe = function(t, e, n) {
            var i = "0x" + e - 65536;
            return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i>>10 | 55296, 1023 & i | 56320)
        };
        try {
            K.apply(G = te.call(H.childNodes), H.childNodes), G[H.childNodes.length].nodeType
        } catch (Te) {
            K = {
                apply: G.length ? function(t, e) {
                    Z.apply(t, te.call(e))
                }
                : function(t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++];);
                    t.length = n - 1
                }
            }
        }
        _ = e.support = {}, E = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return e ? "HTML" !== e.nodeName : !1
        }, D = e.setDocument = function(t) {
            var e, n = t ? t.ownerDocument || t: H, i = n.defaultView;
            return n !== N && 9 === n.nodeType && n.documentElement ? (N = n, A = n.documentElement, O=!E(n), i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", function() {
                D()
            }, !1) : i.attachEvent && i.attachEvent("onunload", function() {
                D()
            })), _.attributes = r(function(t) {
                return t.className = "i", !t.getAttribute("className")
            }), _.getElementsByTagName = r(function(t) {
                return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length
            }), _.getElementsByClassName = ve.test(n.getElementsByClassName) && r(function(t) {
                return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length
            }), _.getById = r(function(t) {
                return A.appendChild(t).id = $, !n.getElementsByName ||!n.getElementsByName($).length
            }), _.getById ? (x.find.ID = function(t, e) {
                if (typeof e.getElementById !== U && O) {
                    var n = e.getElementById(t);
                    return n && n.parentNode ? [n] : []
                }
            }, x.filter.ID = function(t) {
                var e = t.replace(_e, xe);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete x.find.ID, x.filter.ID = function(t) {
                var e = t.replace(_e, xe);
                return function(t) {
                    var n = typeof t.getAttributeNode !== U && t.getAttributeNode("id");
                    return n && n.value === e
                }
            }), x.find.TAG = _.getElementsByTagName ? function(t, e) {
                return typeof e.getElementsByTagName !== U ? e.getElementsByTagName(t) : void 0
            } : function(t, e) {
                var n, i = [], r = 0, o = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = o[r++];)
                        1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }, x.find.CLASS = _.getElementsByClassName && function(t, e) {
                return typeof e.getElementsByClassName !== U && O ? e.getElementsByClassName(t) : void 0
            }, z = [], M = [], (_.qsa = ve.test(n.querySelectorAll)) && (r(function(t) {
                t.innerHTML = "<select msallowclip=''><option selected=''></option></select>", t.querySelectorAll("[msallowclip^='']").length && M.push("[*^$]=" + ie + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || M.push("\\[" + ie + "*(?:value|" + ne + ")"), t.querySelectorAll(":checked").length || M.push(":checked")
            }), r(function(t) {
                var e = n.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && M.push("name" + ie + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), M.push(",.*:")
            })), (_.matchesSelector = ve.test(P = A.matches || A.webkitMatchesSelector || A.mozMatchesSelector || A.oMatchesSelector || A.msMatchesSelector)) && r(function(t) {
                _.disconnectedMatch = P.call(t, "div"), P.call(t, "[s!='']:x"), z.push("!=", ae)
            }), M = M.length && new RegExp(M.join("|")), z = z.length && new RegExp(z.join("|")), e = ve.test(A.compareDocumentPosition), R = e || ve.test(A.contains) ? function(t, e) {
                var n = 9 === t.nodeType ? t.documentElement: t, i = e && e.parentNode;
                return t === i ||!(!i || 1 !== i.nodeType ||!(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
            } : function(t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t)
                            return !0;
                return !1
            }, Y = e ? function(t, e) {
                if (t === e)
                    return j=!0, 0;
                var i=!t.compareDocumentPosition-!e.compareDocumentPosition;
                return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i ||!_.sortDetached && e.compareDocumentPosition(t) === i ? t === n || t.ownerDocument === H && R(H, t)?-1 : e === n || e.ownerDocument === H && R(H, e) ? 1 : L ? ee.call(L, t) - ee.call(L, e) : 0 : 4 & i?-1 : 1)
            } : function(t, e) {
                if (t === e)
                    return j=!0, 0;
                var i, r = 0, o = t.parentNode, a = e.parentNode, u = [t], l = [e];
                if (!o ||!a)
                    return t === n?-1 : e === n ? 1 : o?-1 : a ? 1 : L ? ee.call(L, t) - ee.call(L, e) : 0;
                if (o === a)
                    return s(t, e);
                for (i = t; i = i.parentNode;)
                    u.unshift(i);
                for (i = e; i = i.parentNode;)
                    l.unshift(i);
                for (; u[r] === l[r];)
                    r++;
                return r ? s(u[r], l[r]) : u[r] === H?-1 : l[r] === H ? 1 : 0
            }, n) : N
        }, e.matches = function(t, n) {
            return e(t, null, null, n)
        }, e.matchesSelector = function(t, n) {
            if ((t.ownerDocument || t) !== N && D(t), n = n.replace(he, "='$1']"), !(!_.matchesSelector ||!O || z && z.test(n) || M && M.test(n)))
                try {
                    var i = P.call(t, n);
                    if (i || _.disconnectedMatch || t.document && 11 !== t.document.nodeType)
                        return i
            } catch (r) {}
            return e(n, N, null, [t]).length > 0
        }, e.contains = function(t, e) {
            return (t.ownerDocument || t) !== N && D(t), R(t, e)
        }, e.attr = function(t, e) {
            (t.ownerDocument || t) !== N && D(t);
            var n = x.attrHandle[e.toLowerCase()], i = n && Q.call(x.attrHandle, e.toLowerCase()) ? n(t, e, !O): void 0;
            return void 0 !== i ? i : _.attributes ||!O ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }, e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function(t) {
            var e, n = [], i = 0, r = 0;
            if (j=!_.detectDuplicates, L=!_.sortStable && t.slice(0), t.sort(Y), j) {
                for (; e = t[r++];)
                    e === t[r] && (i = n.push(r));
                for (; i--;)
                    t.splice(n[i], 1)
            }
            return L = null, t
        }, T = e.getText = function(t) {
            var e, n = "", i = 0, r = t.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof t.textContent)
                        return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling)
                        n += T(t)
                    } else if (3 === r || 4 === r)
                    return t.nodeValue
            } else 
                for (; e = t[i++];)
                    n += T(e);
            return n
        }, x = e.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: de,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(_e, xe), t[3] = (t[3] || t[4] || t[5] || "").replace(_e, xe), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] =+ (t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] =+ (t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                },
                PSEUDO: function(t) {
                    var e, n=!t[6] && t[2];
                    return de.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && pe.test(n) && (e = C(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(_e, xe).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    } : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = F[t + " "];
                    return e || (e = new RegExp("(^|" + ie + ")" + t + "(" + ie + "|$)")) && F(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== U && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, n, i) {
                    return function(r) {
                        var o = e.attr(r, t);
                        return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i)>-1 : "$=" === n ? i && o.slice( - i.length) === i : "~=" === n ? (" " + o + " ").indexOf(i)>-1 : "|=" === n ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function(t, e, n, i, r) {
                    var o = "nth" !== t.slice(0, 3), s = "last" !== t.slice( - 4), a = "of-type" === e;
                    return 1 === i && 0 === r ? function(t) {
                        return !!t.parentNode
                    } : function(e, n, u) {
                        var l, c, h, p, f, d, g = o !== s ? "nextSibling": "previousSibling", m = e.parentNode, v = a && e.nodeName.toLowerCase(), y=!u&&!a;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (h = e; h = h[g];)
                                        if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType)
                                            return !1;
                                    d = g = "only" === t&&!d && "nextSibling"
                                }
                                return !0
                            }
                            if (d = [s ? m.firstChild: m.lastChild], s && y) {
                                for (c = m[$] || (m[$] = {}), l = c[t] || [], f = l[0] === q && l[1], p = l[0] === q && l[2], h = f && m.childNodes[f]; h=++f && h && h[g] || (p = f = 0) 
                                    || d.pop();
                                )if (1 === h.nodeType&&++p && h === e) {
                                    c[t] = [q, f, p];
                                    break
                                }
                            } else if (y && (l = (e[$] || (e[$] = {}))[t]) && l[0] === q)
                                p = l[1];
                            else 
                                for (; (h=++f && h && h[g] || (p = f = 0) || d.pop()) 
                                    && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType)||!++p || (y && ((h[$] || (h[$] = {}))[t] = [q, p]), h !== e));
                            );
                            return p -= r, p === i || p%i === 0 && p / i >= 0
                        }
                    }
                },
                PSEUDO: function(t, n) {
                    var r, o = x.pseudos[t] || x.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return o[$] ? o(n) : o.length > 1 ? (r = [t, t, "", n], x.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                        for (var i, r = o(t, n), s = r.length; s--;)
                            i = ee.call(t, r[s]), t[i]=!(e[i] = r[s])
                    }) : function(t) {
                        return o(t, 0, r)
                    }) : o
                }
            },
            pseudos: {
                not: i(function(t) {
                    var e = [], n = [], r = S(t.replace(ue, "$1"));
                    return r[$] ? i(function(t, e, n, i) {
                        for (var o, s = r(t, null, i, []), a = t.length; a--;)(o = s[a]) 
                            && (t[a]=!(e[a] = o))
                    }) : function(t, i, o) {
                        return e[0] = t, r(e, null, o, n), !n.pop()
                    }
                }),
                has: i(function(t) {
                    return function(n) {
                        return e(t, n).length > 0
                    }
                }),
                contains: i(function(t) {
                    return function(e) {
                        return (e.textContent || e.innerText || T(e)).indexOf(t)>-1
                    }
                }),
                lang: i(function(t) {
                    return fe.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(_e, xe).toLowerCase(), function(e) {
                        var n;
                        do 
                            if (n = O ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-");
                        while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }),
                target: function(e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id
                },
                root: function(t) {
                    return t === A
                },
                focus: function(t) {
                    return t === N.activeElement && (!N.hasFocus || N.hasFocus())&&!!(t.type || t.href||~t.tabIndex)
                },
                enabled: function(t) {
                    return t.disabled===!1
                },
                disabled: function(t) {
                    return t.disabled===!0
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e&&!!t.checked || "option" === e&&!!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected===!0
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(t) {
                    return !x.pseudos.empty(t)
                },
                header: function(t) {
                    return me.test(t.nodeName)
                },
                input: function(t) {
                    return ge.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: l(function() {
                    return [0]
                }),
                last: l(function(t, e) {
                    return [e - 1]
                }),
                eq: l(function(t, e, n) {
                    return [0 > n ? n + e: n]
                }),
                even: l(function(t, e) {
                    for (var n = 0; e > n; n += 2)
                        t.push(n);
                    return t
                }),
                odd: l(function(t, e) {
                    for (var n = 1; e > n; n += 2)
                        t.push(n);
                    return t
                }),
                lt: l(function(t, e, n) {
                    for (var i = 0 > n ? n + e : n; --i >= 0;)
                        t.push(i);
                    return t
                }),
                gt: l(function(t, e, n) {
                    for (var i = 0 > n ? n + e : n; ++i < e;)
                        t.push(i);
                    return t
                })
            }
        }, x.pseudos.nth = x.pseudos.eq;
        for (b in{
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            x.pseudos[b] = a(b);
        for (b in{
            submit: !0,
            reset: !0
        })
            x.pseudos[b] = u(b);
        return h.prototype = x.filters = x.pseudos, x.setFilters = new h, C = e.tokenize = function(t, n) {
            var i, r, o, s, a, u, l, c = B[t + " "];
            if (c)
                return n ? 0 : c.slice(0);
            for (a = t, u = [], l = x.preFilter; a;) {
                (!i || (r = le.exec(a))) && (r && (a = a.slice(r[0].length) || a), u.push(o = [])), i=!1, (r = ce.exec(a)) && (i = r.shift(), o.push({
                    value: i,
                    type: r[0].replace(ue, " ")
                }), a = a.slice(i.length));
                for (s in x.filter)
                    !(r = de[s].exec(a)) || l[s]&&!(r = l[s](r)) || (i = r.shift(), o.push({
                        value: i,
                        type: s,
                        matches: r
                    }), a = a.slice(i.length));
                if (!i)
                    break
            }
            return n ? a.length : a ? e.error(t) : B(t, u).slice(0)
        }, S = e.compile = function(t, e) {
            var n, i = [], r = [], o = X[t + " "];
            if (!o) {
                for (e || (e = C(t)), n = e.length; n--;)
                    o = y(e[n]), o[$] ? i.push(o) : r.push(o);
                o = X(t, w(r, i)), o.selector = t
            }
            return o
        }, I = e.select = function(t, e, n, i) {
            var r, o, s, a, u, l = "function" == typeof t && t, h=!i && C(t = l.selector || t);
            if (n = n || [], 1 === h.length) {
                if (o = h[0] = h[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && _.getById && 9 === e.nodeType && O && x.relative[o[1].type]) {
                    if (e = (x.find.ID(s.matches[0].replace(_e, xe), e) || [])[0], !e)
                        return n;
                    l && (e = e.parentNode), t = t.slice(o.shift().value.length)
                }
                for (r = de.needsContext.test(t) ? 0 : o.length; r--&&(s = o[r], !x.relative[a = s.type]);)
                    if ((u = x.find[a]) && (i = u(s.matches[0].replace(_e, xe), we.test(o[0].type) && c(e.parentNode) || e))) {
                        if (o.splice(r, 1), t = i.length && p(o), !t)
                            return K.apply(n, i), n;
                            break
                    }
            }
            return (l || S(t, h))(i, e, !O, n, we.test(t) && c(e.parentNode) || e), n
        }, _.sortStable = $.split("").sort(Y).join("") === $, _.detectDuplicates=!!j, D(), _.sortDetached = r(function(t) {
            return 1 & t.compareDocumentPosition(N.createElement("div"))
        }), r(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(t, e, n) {
            return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), _.attributes && r(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || o("value", function(t, e, n) {
            return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }), r(function(t) {
            return null == t.getAttribute("disabled")
        }) || o(ne, function(t, e, n) {
            var i;
            return n ? void 0 : t[e]===!0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }), e
    }(t);
    K.find = re, K.expr = re.selectors, K.expr[":"] = K.expr.pseudos, K.unique = re.uniqueSort, K.text = re.getText, K.isXMLDoc = re.isXML, K.contains = re.contains;
    var oe = K.expr.match.needsContext, se = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, ae = /^.[^:#\[\.,]*$/;
    K.filter = function(t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? K.find.matchesSelector(i, t) ? [i] : [] : K.find.matches(t, K.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, K.fn.extend({
        find: function(t) {
            var e, n = this.length, i = [], r = this;
            if ("string" != typeof t)
                return this.pushStack(K(t).filter(function() {
                    for (e = 0; n > e; e++)
                        if (K.contains(r[e], this))
                            return !0
                        }));
            for (e = 0; n > e; e++)
                K.find(t, r[e], i);
            return i = this.pushStack(n > 1 ? K.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, i
        },
        filter: function(t) {
            return this.pushStack(i(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(i(this, t || [], !0))
        },
        is: function(t) {
            return !!i(this, "string" == typeof t && oe.test(t) ? K(t) : t || [], !1).length
        }
    });
    var ue, le = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ce = K.fn.init = function(t, e) {
        var n, i;
        if (!t)
            return this;
        if ("string" == typeof t) {
            if (n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : le.exec(t), !n ||!n[1] && e)
                return !e || e.jquery ? (e || ue).find(t) : this.constructor(e).find(t);
            if (n[1]) {
                if (e = e instanceof K ? e[0] : e, K.merge(this, K.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : J, !0)), se.test(n[1]) && K.isPlainObject(e))
                    for (n in e)
                        K.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                return this
            }
            return i = J.getElementById(n[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = J, this.selector = t, this
        }
        return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : K.isFunction(t) ? "undefined" != typeof ue.ready ? ue.ready(t) : t(K) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), K.makeArray(t, this))
    };
    ce.prototype = K.fn, ue = K(J);
    var he = /^(?:parents|prev(?:Until|All))/, pe = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    K.extend({
        dir: function(t, e, n) {
            for (var i = [], r = void 0 !== n; (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (r && K(t).is(n))
                        break;
                        i.push(t)
                }
            return i
        },
        sibling: function(t, e) {
            for (var n = []; t; t = t.nextSibling)
                1 === t.nodeType && t !== e && n.push(t);
            return n
        }
    }), K.fn.extend({
        has: function(t) {
            var e = K(t, this), n = e.length;
            return this.filter(function() {
                for (var t = 0; n > t; t++)
                    if (K.contains(this, e[t]))
                        return !0
            })
        },
        closest: function(t, e) {
            for (var n, i = 0, r = this.length, o = [], s = oe.test(t) || "string" != typeof t ? K(t, e || this.context) : 0; r > i; i++)
                for (n = this[i]; n && n !== e; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n)>-1 : 1 === n.nodeType && K.find.matchesSelector(n, t))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? K.unique(o) : o)
        },
        index: function(t) {
            return t ? "string" == typeof t ? Y.call(K(t), this[0]) : Y.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : - 1
        },
        add: function(t, e) {
            return this.pushStack(K.unique(K.merge(this.get(), K(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), K.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return K.dir(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return K.dir(t, "parentNode", n)
        },
        next: function(t) {
            return r(t, "nextSibling")
        },
        prev: function(t) {
            return r(t, "previousSibling")
        },
        nextAll: function(t) {
            return K.dir(t, "nextSibling")
        },
        prevAll: function(t) {
            return K.dir(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return K.dir(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return K.dir(t, "previousSibling", n)
        },
        siblings: function(t) {
            return K.sibling((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return K.sibling(t.firstChild)
        },
        contents: function(t) {
            return t.contentDocument || K.merge([], t.childNodes)
        }
    }, function(t, e) {
        K.fn[t] = function(n, i) {
            var r = K.map(this, e, n);
            return "Until" !== t.slice( - 5) && (i = n), i && "string" == typeof i && (r = K.filter(i, r)), this.length > 1 && (pe[t] || K.unique(r), he.test(t) && r.reverse()), this.pushStack(r)
        }
    });
    var fe = /\S+/g, de = {};
    K.Callbacks = function(t) {
        t = "string" == typeof t ? de[t] || o(t) : K.extend({}, t);
        var e, n, i, r, s, a, u = [], l=!t.once && [], c = function(o) {
            for (e = t.memory && o, n=!0, a = r || 0, r = 0, s = u.length, i=!0; u && s > a; a++)
                if (u[a].apply(o[0], o[1])===!1 && t.stopOnFalse) {
                    e=!1;
                    break
                }
            i=!1, u && (l ? l.length && c(l.shift()) : e ? u = [] : h.disable())
        }, h = {
            add: function() {
                if (u) {
                    var n = u.length;
                    !function o(e) {
                        K.each(e, function(e, n) {
                            var i = K.type(n);
                            "function" === i ? t.unique && h.has(n) || u.push(n) : n && n.length && "string" !== i && o(n)
                        })
                    }(arguments), i ? s = u.length : e && (r = n, c(e))
                }
                return this
            },
            remove: function() {
                return u && K.each(arguments, function(t, e) {
                    for (var n; (n = K.inArray(e, u, n))>-1;)
                        u.splice(n, 1), i && (s >= n && s--, a >= n && a--)
                }), this
            },
            has: function(t) {
                return t ? K.inArray(t, u)>-1 : !(!u ||!u.length)
            },
            empty: function() {
                return u = [], s = 0, this
            },
            disable: function() {
                return u = l = e = void 0, this
            },
            disabled: function() {
                return !u
            },
            lock: function() {
                return l = void 0, e || h.disable(), this
            },
            locked: function() {
                return !l
            },
            fireWith: function(t, e) {
                return !u || n&&!l || (e = e || [], e = [t, e.slice ? e.slice(): e], i ? l.push(e) : c(e)), this
            },
            fire: function() {
                return h.fireWith(this, arguments), this
            },
            fired: function() {
                return !!n
            }
        };
        return h
    }, K.extend({
        Deferred: function(t) {
            var e = [["resolve", "done", K.Callbacks("once memory"), "resolved"], ["reject", "fail", K.Callbacks("once memory"), "rejected"], ["notify", "progress", K.Callbacks("memory")]], n = "pending", i = {
                state: function() {
                    return n
                },
                always: function() {
                    return r.done(arguments).fail(arguments), this
                },
                then: function() {
                    var t = arguments;
                    return K.Deferred(function(n) {
                        K.each(e, function(e, o) {
                            var s = K.isFunction(t[e]) && t[e];
                            r[o[1]](function() {
                                var t = s && s.apply(this, arguments);
                                t && K.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === i ? n.promise() : this, s ? [t] : arguments)
                            })
                        }), t = null
                    }).promise()
                },
                promise: function(t) {
                    return null != t ? K.extend(t, i) : i
                }
            }, r = {};
            return i.pipe = i.then, K.each(e, function(t, o) {
                var s = o[2], a = o[3];
                i[o[1]] = s.add, a && s.add(function() {
                    n = a
                }, e[1^t][2].disable, e[2][2].lock), r[o[0]] = function() {
                    return r[o[0] + "With"](this === r ? i : this, arguments), this
                }, r[o[0] + "With"] = s.fireWith
            }), i.promise(r), t && t.call(r, r), r
        },
        when: function(t) {
            var e, n, i, r = 0, o = F.call(arguments), s = o.length, a = 1 !== s || t && K.isFunction(t.promise) ? s: 0, u = 1 === a ? t: K.Deferred(), l = function(t, n, i) {
                return function(r) {
                    n[t] = this, i[t] = arguments.length > 1 ? F.call(arguments) : r, i === e ? u.notifyWith(n, i) : --a || u.resolveWith(n, i)
                }
            };
            if (s > 1)
                for (e = new Array(s), n = new Array(s), i = new Array(s); s > r; r++)
                    o[r] && K.isFunction(o[r].promise) ? o[r].promise().done(l(r, i, o)).fail(u.reject).progress(l(r, n, e)) : --a;
            return a || u.resolveWith(i, o), u.promise()
        }
    });
    var ge;
    K.fn.ready = function(t) {
        return K.ready.promise().done(t), this
    }, K.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? K.readyWait++ : K.ready(!0)
        },
        ready: function(t) {
            (t===!0?--K.readyWait : K.isReady) || (K.isReady=!0, t!==!0&&--K.readyWait > 0 || (ge.resolveWith(J, [K]), K.fn.triggerHandler && (K(J).triggerHandler("ready"), K(J).off("ready"))))
        }
    }), K.ready.promise = function(e) {
        return ge || (ge = K.Deferred(), "complete" === J.readyState ? setTimeout(K.ready) : (J.addEventListener("DOMContentLoaded", s, !1), t.addEventListener("load", s, !1))), ge.promise(e)
    }, K.ready.promise();
    var me = K.access = function(t, e, n, i, r, o, s) {
        var a = 0, u = t.length, l = null == n;
        if ("object" === K.type(n)) {
            r=!0;
            for (a in n)
                K.access(t, e, a, n[a], !0, o, s)
        } else if (void 0 !== i && (r=!0, K.isFunction(i) || (s=!0), l && (s ? (e.call(t, i), e = null) : (l = e, e = function(t, e, n) {
            return l.call(K(t), n)
        })), e))for (; u > a; a++)
            e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
        return r ? t : l ? e.call(t) : u ? e(t[0], n) : o
    };
    K.acceptData = function(t) {
        return 1 === t.nodeType || 9 === t.nodeType||!+t.nodeType
    }, a.uid = 1, a.accepts = K.acceptData, a.prototype = {
        key: function(t) {
            if (!a.accepts(t))
                return 0;
            var e = {}, n = t[this.expando];
            if (!n) {
                n = a.uid++;
                try {
                    e[this.expando] = {
                        value: n
                    }, Object.defineProperties(t, e)
                } catch (i) {
                    e[this.expando] = n, K.extend(t, e)
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n
        },
        set: function(t, e, n) {
            var i, r = this.key(t), o = this.cache[r];
            if ("string" == typeof e)
                o[e] = n;
            else if (K.isEmptyObject(o))
                K.extend(this.cache[r], e);
            else 
                for (i in e)
                    o[i] = e[i];
            return o
        },
        get: function(t, e) {
            var n = this.cache[this.key(t)];
            return void 0 === e ? n : n[e]
        },
        access: function(t, e, n) {
            var i;
            return void 0 === e || e && "string" == typeof e && void 0 === n ? (i = this.get(t, e), void 0 !== i ? i : this.get(t, K.camelCase(e))) : (this.set(t, e, n), void 0 !== n ? n : e)
        },
        remove: function(t, e) {
            var n, i, r, o = this.key(t), s = this.cache[o];
            if (void 0 === e)
                this.cache[o] = {};
            else {
                K.isArray(e) ? i = e.concat(e.map(K.camelCase)) : (r = K.camelCase(e), e in s ? i = [e, r] : (i = r, i = i in s ? [i] : i.match(fe) || [])), n = i.length;
                for (; n--;)
                    delete s[i[n]]
            }
        },
        hasData: function(t) {
            return !K.isEmptyObject(this.cache[t[this.expando]] || {})
        },
        discard: function(t) {
            t[this.expando] && delete this.cache[t[this.expando]]
        }
    };
    var ve = new a, ye = new a, we = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, be = /([A-Z])/g;
    K.extend({
        hasData: function(t) {
            return ye.hasData(t) || ve.hasData(t)
        },
        data: function(t, e, n) {
            return ye.access(t, e, n)
        },
        removeData: function(t, e) {
            ye.remove(t, e)
        },
        _data: function(t, e, n) {
            return ve.access(t, e, n)
        },
        _removeData: function(t, e) {
            ve.remove(t, e)
        }
    }), K.fn.extend({
        data: function(t, e) {
            var n, i, r, o = this[0], s = o && o.attributes;
            if (void 0 === t) {
                if (this.length && (r = ye.get(o), 1 === o.nodeType&&!ve.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;)
                        s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = K.camelCase(i.slice(5)), u(o, i, r[i])));
                    ve.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof t ? this.each(function() {
                ye.set(this, t)
            }) : me(this, function(e) {
                var n, i = K.camelCase(t);
                if (o && void 0 === e) {
                    if (n = ye.get(o, t), void 0 !== n)
                        return n;
                    if (n = ye.get(o, i), void 0 !== n)
                        return n;
                    if (n = u(o, i, void 0), void 0 !== n)
                        return n
                } else 
                    this.each(function() {
                        var n = ye.get(this, i);
                        ye.set(this, i, e), - 1 !== t.indexOf("-") && void 0 !== n && ye.set(this, t, e)
                    })
            }, null, e, arguments.length > 1, null, !0)
        },
        removeData: function(t) {
            return this.each(function() {
                ye.remove(this, t)
            })
        }
    }), K.extend({
        queue: function(t, e, n) {
            var i;
            return t ? (e = (e || "fx") + "queue", i = ve.get(t, e), n && (!i || K.isArray(n) ? i = ve.access(t, e, K.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = K.queue(t, e), i = n.length, r = n.shift(), o = K._queueHooks(t, e), s = function() {
                K.dequeue(t, e)
            };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete o.stop, r.call(t, s, o)), !i && o && o.empty.fire()
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return ve.get(t, n) || ve.access(t, n, {
                empty: K.Callbacks("once memory").add(function() {
                    ve.remove(t, [e + "queue", n])
                })
            })
        }
    }), K.fn.extend({
        queue: function(t, e) {
            var n = 2;
            return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? K.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var n = K.queue(this, t, e);
                K._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && K.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                K.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var n, i = 1, r = K.Deferred(), o = this, s = this.length, a = function() {
                --i || r.resolveWith(o, [o])
            };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;)
                n = ve.get(o[s], t + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
            return a(), r.promise(e)
        }
    });
    var _e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, xe = ["Top", "Right", "Bottom", "Left"], Te = function(t, e) {
        return t = e || t, "none" === K.css(t, "display") ||!K.contains(t.ownerDocument, t)
    }, Ee = /^(?:checkbox|radio)$/i;
    !function() {
        var t = J.createDocumentFragment(), e = t.appendChild(J.createElement("div")), n = J.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), G.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", G.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue
    }();
    var Ce = "undefined";
    G.focusinBubbles = "onfocusin"in t;
    var Se = /^key/, Ie = /^(?:mouse|pointer|contextmenu)|click/, ke = /^(?:focusinfocus|focusoutblur)$/, Le = /^([^.]*)(?:\.(.+)|)$/;
    K.event = {
        global: {},
        add: function(t, e, n, i, r) {
            var o, s, a, u, l, c, h, p, f, d, g, m = ve.get(t);
            if (m)
                for (n.handler && (o = n, n = o.handler, r = o.selector), n.guid || (n.guid = K.guid++), (u = m.events) || (u = m.events = {}), (s = m.handle) || (s = m.handle = function(e) {
                    return typeof K !== Ce && K.event.triggered !== e.type ? K.event.dispatch.apply(t, arguments) : void 0
                }), e = (e || "").match(fe) || [""], l = e.length; l--;)
                    a = Le.exec(e[l]) || [], f = g = a[1], d = (a[2] || "").split(".").sort(), f && (h = K.event.special[f] || {}, f = (r ? h.delegateType : h.bindType) || f, h = K.event.special[f] || {}, c = K.extend({
                        type: f,
                        origType: g,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && K.expr.match.needsContext.test(r),
                        namespace: d.join(".")
                    }, o), (p = u[f]) || (p = u[f] = [], p.delegateCount = 0, h.setup && h.setup.call(t, i, d, s)!==!1 || t.addEventListener && t.addEventListener(f, s, !1)), h.add && (h.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), r ? p.splice(p.delegateCount++, 0, c) : p.push(c), K.event.global[f]=!0)
        },
        remove: function(t, e, n, i, r) {
            var o, s, a, u, l, c, h, p, f, d, g, m = ve.hasData(t) && ve.get(t);
            if (m && (u = m.events)) {
                for (e = (e || "").match(fe) || [""], l = e.length; l--;)
                    if (a = Le.exec(e[l]) || [], f = g = a[1], d = (a[2] || "").split(".").sort(), f) {
                        for (h = K.event.special[f] || {}, f = (i ? h.delegateType : h.bindType) || f, p = u[f] || [], a = a[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;)
                            c = p[o], !r && g !== c.origType || n && n.guid !== c.guid || a&&!a.test(c.namespace) || i && i !== c.selector && ("**" !== i ||!c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, h.remove && h.remove.call(t, c));
                            s&&!p.length && (h.teardown && h.teardown.call(t, d, m.handle)!==!1 || K.removeEvent(t, f, m.handle), delete u[f])
                    } else 
                        for (f in u)
                            K.event.remove(t, f + e[l], n, i, !0);
                K.isEmptyObject(u) && (delete m.handle, ve.remove(t, "events"))
            }
        },
        trigger: function(e, n, i, r) {
            var o, s, a, u, l, c, h, p = [i || J], f = Q.call(e, "type") ? e.type: e, d = Q.call(e, "namespace") ? e.namespace.split("."): [];
            if (s = a = i = i || J, 3 !== i.nodeType && 8 !== i.nodeType&&!ke.test(f + K.event.triggered) && (f.indexOf(".") >= 0 && (d = f.split("."), f = d.shift(), d.sort()), l = f.indexOf(":") < 0 && "on" + f, e = e[K.expando] ? e : new K.Event(f, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = d.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : K.makeArray(n, [e]), h = K.event.special[f] || {}, r ||!h.trigger || h.trigger.apply(i, n)!==!1)
                ) {
                if (!r&&!h.noBubble&&!K.isWindow(i)) {
                    for (u = h.delegateType || f, ke.test(u + f) || (s = s.parentNode); s; s = s.parentNode)
                        p.push(s), a = s;
                    a === (i.ownerDocument || J) && p.push(a.defaultView || a.parentWindow || t)
                }
                for (o = 0; (s = p[o++])&&!e.isPropagationStopped();)
                    e.type = o > 1 ? u : h.bindType || f, c = (ve.get(s, "events") || {})[e.type] && ve.get(s, "handle"), c && c.apply(s, n), c = l && s[l], c && c.apply && K.acceptData(s) && (e.result = c.apply(s, n), e.result===!1 && e.preventDefault());
                return e.type = f, r || e.isDefaultPrevented() || h._default && h._default.apply(p.pop(), n)!==!1 ||!K.acceptData(i) || l && K.isFunction(i[f])&&!K.isWindow(i) && (a = i[l], a && (i[l] = null), K.event.triggered = f, i[f](), K.event.triggered = void 0, a && (i[l] = a)), e.result
            }
        },
        dispatch: function(t) {
            t = K.event.fix(t);
            var e, n, i, r, o, s = [], a = F.call(arguments), u = (ve.get(this, "events") || {})[t.type] || [], l = K.event.special[t.type] || {};
            if (a[0] = t, t.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, t)!==!1) {
                for (s = K.event.handlers.call(this, t, u), e = 0; (r = s[e++])&&!t.isPropagationStopped();)
                    for (t.currentTarget = r.elem, n = 0; (o = r.handlers[n++])&&!t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(o.namespace)
                        ) && (t.handleObj = o, t.data = o.data, i = ((K.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a), void 0 !== i && (t.result = i)===!1 && (t.preventDefault(), t.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(t, e) {
            var n, i, r, o, s = [], a = e.delegateCount, u = t.target;
            if (a && u.nodeType && (!t.button || "click" !== t.type))
                for (; u !== this; u = u.parentNode || this)
                    if (u.disabled!==!0 || "click" !== t.type) {
                        for (i = [], n = 0; a > n; n++)
                            o = e[n], r = o.selector + " ", void 0 === i[r] && (i[r] = o.needsContext ? K(r, this).index(u) >= 0 : K.find(r, this, null, [u]).length), i[r] && i.push(o);
                            i.length && s.push({
                                elem: u,
                                handlers: i
                            })
                    }
            return a < e.length && s.push({
                elem: this,
                handlers: e.slice(a)
            }), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var n, i, r, o = e.button;
                return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || J, i = n.documentElement, r = n.body, t.pageX = e.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), t.pageY = e.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
            }
        },
        fix: function(t) {
            if (t[K.expando])
                return t;
            var e, n, i, r = t.type, o = t, s = this.fixHooks[r];
            for (s || (this.fixHooks[r] = s = Ie.test(r) ? this.mouseHooks : Se.test(r) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, t = new K.Event(o), e = i.length; e--;)
                n = i[e], t[n] = o[n];
            return t.target || (t.target = J), 3 === t.target.nodeType && (t.target = t.target.parentNode), s.filter ? s.filter(t, o) : t
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== h() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === h() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && K.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(t) {
                    return K.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, n, i) {
            var r = K.extend(new K.Event, n, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? K.event.trigger(r, null, e) : K.event.dispatch.call(e, r), r.isDefaultPrevented() && n.preventDefault()
        }
    }, K.removeEvent = function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n, !1)
    }, K.Event = function(t, e) {
        return this instanceof K.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue===!1 ? l : c) : this.type = t, e && K.extend(this, e), this.timeStamp = t && t.timeStamp || K.now(), void(this[K.expando]=!0)) : new K.Event(t, e)
    }, K.Event.prototype = {
        isDefaultPrevented: c,
        isPropagationStopped: c,
        isImmediatePropagationStopped: c,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = l, t && t.preventDefault && t.preventDefault()
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = l, t && t.stopPropagation && t.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = l, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, K.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        K.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var n, i = this, r = t.relatedTarget, o = t.handleObj;
                return (!r || r !== i&&!K.contains(i, r)) && (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
            }
        }
    }), G.focusinBubbles || K.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var n = function(t) {
            K.event.simulate(e, t.target, K.event.fix(t), !0)
        };
        K.event.special[e] = {
            setup: function() {
                var i = this.ownerDocument || this, r = ve.access(i, e);
                r || i.addEventListener(t, n, !0), ve.access(i, e, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this, r = ve.access(i, e) - 1;
                r ? ve.access(i, e, r) : (i.removeEventListener(t, n, !0), ve.remove(i, e))
            }
        }
    }), K.fn.extend({
        on: function(t, e, n, i, r) {
            var o, s;
            if ("object" == typeof t) {
                "string" != typeof e && (n = n || e, e = void 0);
                for (s in t)
                    this.on(s, e, n, t[s], r);
                return this
            }
            if (null == n && null == i ? (i = e, n = e = void 0) : null == i && ("string" == typeof e ? (i = n, n = void 0) : (i = n, n = e, e = void 0)), i===!1)
                i = c;
            else if (!i)
                return this;
            return 1 === r && (o = i, i = function(t) {
                return K().off(t), o.apply(this, arguments)
            }, i.guid = o.guid || (o.guid = K.guid++)), this.each(function() {
                K.event.add(this, t, i, n, e)
            })
        },
        one: function(t, e, n, i) {
            return this.on(t, e, n, i, 1)
        },
        off: function(t, e, n) {
            var i, r;
            if (t && t.preventDefault && t.handleObj)
                return i = t.handleObj, K(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof t) {
                for (r in t)
                    this.off(r, e, t[r]);
                return this
            }
            return (e===!1 || "function" == typeof e) && (n = e, e = void 0), n===!1 && (n = c), this.each(function() {
                K.event.remove(this, t, n, e)
            })
        },
        trigger: function(t, e) {
            return this.each(function() {
                K.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var n = this[0];
            return n ? K.event.trigger(t, e, n, !0) : void 0
        }
    });
    var je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, De = /<([\w:]+)/, Ne = /<|&#?\w+;/, Ae = /<(?:script|style|link)/i, Oe = /checked\s*(?:[^=]|=\s*.checked.)/i, Me = /^$|\/(?:java|ecma)script/i, ze = /^true\/(.*)/, Pe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Re = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    Re.optgroup = Re.option, Re.tbody = Re.tfoot = Re.colgroup = Re.caption = Re.thead, Re.th = Re.td, K.extend({
        clone: function(t, e, n) {
            var i, r, o, s, a = t.cloneNode(!0), u = K.contains(t.ownerDocument, t);
            if (!(G.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || K.isXMLDoc(t)))
                for (s = v(a), o = v(t), i = 0, r = o.length; r > i; i++)
                    y(o[i], s[i]);
            if (e)
                if (n)
                    for (o = o || v(t), s = s || v(a), i = 0, r = o.length; r > i; i++)
                        m(o[i], s[i]);
                else 
                    m(t, a);
            return s = v(a, "script"), s.length > 0 && g(s, !u && v(t, "script")), a
        },
        buildFragment: function(t, e, n, i) {
            for (var r, o, s, a, u, l, c = e.createDocumentFragment(), h = [], p = 0, f = t.length; f > p; p++)
                if (r = t[p], r || 0 === r)
                    if ("object" === K.type(r))
                        K.merge(h, r.nodeType ? [r] : r);
                    else if (Ne.test(r)) {
                        for (o = o || c.appendChild(e.createElement("div")), s = (De.exec(r) || ["", ""])[1].toLowerCase(), a = Re[s] || Re._default, o.innerHTML = a[1] + r.replace(je, "<$1></$2>") + a[2], l = a[0]; l--;)
                            o = o.lastChild;
                            K.merge(h, o.childNodes), o = c.firstChild, o.textContent = ""
                    } else 
                        h.push(e.createTextNode(r));
            for (c.textContent = "", p = 0; r = h[p++];)
                if ((!i||-1 === K.inArray(r, i)) && (u = K.contains(r.ownerDocument, r), o = v(c.appendChild(r), "script"), u && g(o), n))
                    for (l = 0; r = o[l++];)
                        Me.test(r.type || "") && n.push(r);
            return c
        },
        cleanData: function(t) {
            for (var e, n, i, r, o = K.event.special, s = 0; void 0 !== (n = t[s]); s++) {
                if (K.acceptData(n) && (r = n[ve.expando], r && (e = ve.cache[r]))) {
                    if (e.events)
                        for (i in e.events)
                            o[i] ? K.event.remove(n, i) : K.removeEvent(n, i, e.handle);
                    ve.cache[r] && delete ve.cache[r]
                }
                delete ye.cache[n[ye.expando]]
            }
        }
    }), K.fn.extend({
        text: function(t) {
            return me(this, function(t) {
                return void 0 === t ? K.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = p(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = p(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        remove: function(t, e) {
            for (var n, i = t ? K.filter(t, this) : this, r = 0; null != (n = i[r]); r++)
                e || 1 !== n.nodeType || K.cleanData(v(n)), n.parentNode && (e && K.contains(n.ownerDocument, n) && g(v(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++)
                1 === t.nodeType && (K.cleanData(v(t, !1)), t.textContent = "");
            return this
        },
        clone: function(t, e) {
            return t = null == t?!1 : t, e = null == e ? t : e, this.map(function() {
                return K.clone(this, t, e)
            })
        },
        html: function(t) {
            return me(this, function(t) {
                var e = this[0] || {}, n = 0, i = this.length;
                if (void 0 === t && 1 === e.nodeType)
                    return e.innerHTML;
                if ("string" == typeof t&&!Ae.test(t)&&!Re[(De.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = t.replace(je, "<$1></$2>");
                    try {
                        for (; i > n; n++)
                            e = this[n] || {}, 1 === e.nodeType && (K.cleanData(v(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (r) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = arguments[0];
            return this.domManip(arguments, function(e) {
                t = this.parentNode, K.cleanData(v(this)), t && t.replaceChild(e, this)
            }), t && (t.length || t.nodeType) ? this : this.remove()
        },
        detach: function(t) {
            return this.remove(t, !0)
        },
        domManip: function(t, e) {
            t = B.apply([], t);
            var n, i, r, o, s, a, u = 0, l = this.length, c = this, h = l - 1, p = t[0], g = K.isFunction(p);
            if (g || l > 1 && "string" == typeof p&&!G.checkClone && Oe.test(p))
                return this.each(function(n) {
                    var i = c.eq(n);
                    g && (t[0] = p.call(this, n, i.html())), i.domManip(t, e)
                });
            if (l && (n = K.buildFragment(t, this[0].ownerDocument, !1, this), i = n.firstChild, 1 === n.childNodes.length && (n = i), i)) {
                for (r = K.map(v(n, "script"), f), o = r.length; l > u; u++)
                    s = n, u !== h && (s = K.clone(s, !0, !0), o && K.merge(r, v(s, "script"))), e.call(this[u], s, u);
                if (o)
                    for (a = r[r.length - 1].ownerDocument, K.map(r, d), u = 0; o > u; u++)
                        s = r[u], Me.test(s.type || "")&&!ve.access(s, "globalEval") && K.contains(a, s) && (s.src ? K._evalUrl && K._evalUrl(s.src) : K.globalEval(s.textContent.replace(Pe, "")))
            }
            return this
        }
    }), K.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        K.fn[t] = function(t) {
            for (var n, i = [], r = K(t), o = r.length - 1, s = 0; o >= s; s++)
                n = s === o ? this : this.clone(!0), K(r[s])[e](n), X.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var $e, He = {}, qe = /^margin/, We = new RegExp("^(" + _e + ")(?!px)[a-z%]+$", "i"), Fe = function(t) {
        return t.ownerDocument.defaultView.getComputedStyle(t, null)
    };
    !function() {
        function e() {
            s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s.innerHTML = "", r.appendChild(o);
            var e = t.getComputedStyle(s, null);
            n = "1%" !== e.top, i = "4px" === e.width, r.removeChild(o)
        }
        var n, i, r = J.documentElement, o = J.createElement("div"), s = J.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", G.clearCloneStyle = "content-box" === s.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(s), t.getComputedStyle && K.extend(G, {
            pixelPosition: function() {
                return e(), n
            },
            boxSizingReliable: function() {
                return null == i && e(), i
            },
            reliableMarginRight: function() {
                var e, n = s.appendChild(J.createElement("div"));
                return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", r.appendChild(o), e=!parseFloat(t.getComputedStyle(n, null).marginRight), r.removeChild(o), e
            }
        }))
    }(), K.swap = function(t, e, n, i) {
        var r, o, s = {};
        for (o in e)
            s[o] = t.style[o], t.style[o] = e[o];
        r = n.apply(t, i || []);
        for (o in e)
            t.style[o] = s[o];
        return r
    };
    var Be = /^(none|table(?!-c[ea]).+)/, Xe = new RegExp("^(" + _e + ")(.*)$", "i"), Ye = new RegExp("^([+-])=(" + _e + ")", "i"), Ue = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Ve = {
        letterSpacing: "0",
        fontWeight: "400"
    }, Qe = ["Webkit", "O", "Moz", "ms"];
    K.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = _(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, o, s, a = K.camelCase(e), u = t.style;
                return e = K.cssProps[a] || (K.cssProps[a] = T(u, a)), s = K.cssHooks[e] || K.cssHooks[a], void 0 === n ? s && "get"in s && void 0 !== (r = s.get(t, !1, i)) ? r : u[e] : (o = typeof n, "string" === o && (r = Ye.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(K.css(t, e)), o = "number"), null != n && n === n && ("number" !== o || K.cssNumber[a] || (n += "px"), G.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (u[e] = "inherit"), s && "set"in s && void 0 === (n = s.set(t, n, i)) || (u[e] = n)), void 0)
            }
        },
        css: function(t, e, n, i) {
            var r, o, s, a = K.camelCase(e);
            return e = K.cssProps[a] || (K.cssProps[a] = T(t.style, a)), s = K.cssHooks[e] || K.cssHooks[a], s && "get"in s && (r = s.get(t, !0, n)), void 0 === r && (r = _(t, e, i)), "normal" === r && e in Ve && (r = Ve[e]), "" === n || n ? (o = parseFloat(r), n===!0 || K.isNumeric(o) ? o || 0 : r) : r
        }
    }), K.each(["height", "width"], function(t, e) {
        K.cssHooks[e] = {
            get: function(t, n, i) {
                return n ? Be.test(K.css(t, "display")) && 0 === t.offsetWidth ? K.swap(t, Ue, function() {
                    return S(t, e, i)
                }) : S(t, e, i) : void 0
            },
            set: function(t, n, i) {
                var r = i && Fe(t);
                return E(t, n, i ? C(t, e, i, "border-box" === K.css(t, "boxSizing", !1, r), r) : 0)
            }
        }
    }), K.cssHooks.marginRight = x(G.reliableMarginRight, function(t, e) {
        return e ? K.swap(t, {
            display: "inline-block"
        }, _, [t, "marginRight"]) : void 0
    }), K.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        K.cssHooks[t + e] = {
            expand: function(n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++)
                    r[t + xe[i] + e] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, qe.test(t) || (K.cssHooks[t + e].set = E)
    }), K.fn.extend({
        css: function(t, e) {
            return me(this, function(t, e, n) {
                var i, r, o = {}, s = 0;
                if (K.isArray(e)) {
                    for (i = Fe(t), r = e.length; r > s; s++)
                        o[e[s]] = K.css(t, e[s], !1, i);
                    return o
                }
                return void 0 !== n ? K.style(t, e, n) : K.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function() {
            return I(this, !0)
        },
        hide: function() {
            return I(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                Te(this) ? K(this).show() : K(this).hide()
            })
        }
    }), K.Tween = k, k.prototype = {
        constructor: k,
        init: function(t, e, n, i, r, o) {
            this.elem = t, this.prop = n, this.easing = r || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (K.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var t = k.propHooks[this.prop];
            return t && t.get ? t.get(this) : k.propHooks._default.get(this)
        },
        run: function(t) {
            var e, n = k.propHooks[this.prop];
            return this.pos = e = this.options.duration ? K.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : k.propHooks._default.set(this), this
        }
    }, k.prototype.init.prototype = k.prototype, k.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = K.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
            },
            set: function(t) {
                K.fx.step[t.prop] ? K.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[K.cssProps[t.prop]] || K.cssHooks[t.prop]) ? K.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    }, k.propHooks.scrollTop = k.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, K.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
    }, K.fx = k.prototype.init, K.fx.step = {};
    var Ge, Je, Ze = /^(?:toggle|show|hide)$/, Ke = new RegExp("^(?:([+-])=|)(" + _e + ")([a-z%]*)$", "i"), tn = /queueHooks$/, en = [N], nn = {
        "*": [function(t, e) {
            var n = this.createTween(t, e), i = n.cur(), r = Ke.exec(e), o = r && r[3] || (K.cssNumber[t] ? "" : "px"), s = (K.cssNumber[t] || "px" !== o&&+i) && Ke.exec(K.css(n.elem, t)), a = 1, u = 20;
            if (s && s[3] !== o) {
                o = o || s[3], r = r || [], s =+ i || 1;
                do 
                    a = a || ".5", s/=a, K.style(n.elem, t, s + o);
                while (a !== (a = n.cur() / i) && 1 !== a&&--u)
                }
            return r && (s = n.start =+ s||+i || 0, n.unit = o, n.end = r[1] ? s + (r[1] + 1) * r[2] : + r[2]), n
        }
        ]
    };
    K.Animation = K.extend(O, {
        tweener: function(t, e) {
            K.isFunction(t) ? (e = t, t = ["*"]): t = t.split(" ");
            for (var n,
            i = 0,
            r = t.length;
            r > i;
            i++)n = t[i],
            nn[n] = nn[n] || [],
            nn[n].unshift(e)
        }, prefilter : function(t, e) {
            e ? en.unshift(t) : en.push(t)
        }
    }), K.speed = function(t, e, n) {
        var i = t && "object" == typeof t ? K.extend({}, t): {
            complete: n ||!n && e || K.isFunction(t) && t,
            duration: t,
            easing: n && e || e&&!K.isFunction(e) && e
        };
        return i.duration = K.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in K.fx.speeds ? K.fx.speeds[i.duration] : K.fx.speeds._default, (null == i.queue || i.queue===!0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            K.isFunction(i.old) && i.old.call(this), i.queue && K.dequeue(this, i.queue)
        }, i
    }, K.fn.extend({
        fadeTo: function(t, e, n, i) {
            return this.filter(Te).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, n, i)
        },
        animate: function(t, e, n, i) {
            var r = K.isEmptyObject(t), o = K.speed(e, n, i), s = function() {
                var e = O(this, K.extend({}, t), o);
                (r || ve.get(this, "finish")) && e.stop(!0)
            };
            return s.finish = s, r || o.queue===!1 ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function(t, e, n) {
            var i = function(t) {
                var e = t.stop;
                delete t.stop, e(n)
            };
            return "string" != typeof t && (n = e, e = t, t = void 0), e && t!==!1 && this.queue(t || "fx", []), this.each(function() {
                var e=!0, r = null != t && t + "queueHooks", o = K.timers, s = ve.get(this);
                if (r)
                    s[r] && s[r].stop && i(s[r]);
                else 
                    for (r in s)
                        s[r] && s[r].stop && tn.test(r) && i(s[r]);
                for (r = o.length; r--;)
                    o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(n), e=!1, o.splice(r, 1));
                (e ||!n) && K.dequeue(this, t)
            })
        },
        finish: function(t) {
            return t!==!1 && (t = t || "fx"), this.each(function() {
                var e, n = ve.get(this), i = n[t + "queue"], r = n[t + "queueHooks"], o = K.timers, s = i ? i.length: 0;
                for (n.finish=!0, K.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;)
                    o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                for (e = 0; s > e; e++)
                    i[e] && i[e].finish && i[e].finish.call(this);
                delete n.finish
            })
        }
    }), K.each(["toggle", "show", "hide"], function(t, e) {
        var n = K.fn[e];
        K.fn[e] = function(t, i, r) {
            return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(j(e, !0), t, i, r)
        }
    }), K.each({
        slideDown: j("show"),
        slideUp: j("hide"),
        slideToggle: j("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, e) {
        K.fn[t] = function(t, n, i) {
            return this.animate(e, t, n, i)
        }
    }), K.timers = [], K.fx.tick = function() {
        var t, e = 0, n = K.timers;
        for (Ge = K.now(); e < n.length; e++)
            t = n[e], t() || n[e] !== t || n.splice(e--, 1);
        n.length || K.fx.stop(), Ge = void 0
    }, K.fx.timer = function(t) {
        K.timers.push(t), t() ? K.fx.start() : K.timers.pop()
    }, K.fx.interval = 13, K.fx.start = function() {
        Je || (Je = setInterval(K.fx.tick, K.fx.interval))
    }, K.fx.stop = function() {
        clearInterval(Je), Je = null
    }, K.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, K.fn.delay = function(t, e) {
        return t = K.fx ? K.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, n) {
            var i = setTimeout(e, t);
            n.stop = function() {
                clearTimeout(i)
            }
        })
    }, function() {
        var t = J.createElement("input"), e = J.createElement("select"), n = e.appendChild(J.createElement("option"));
        t.type = "checkbox", G.checkOn = "" !== t.value, G.optSelected = n.selected, e.disabled=!0, G.optDisabled=!n.disabled, t = J.createElement("input"), t.value = "t", t.type = "radio", G.radioValue = "t" === t.value
    }();
    var rn, on, sn = K.expr.attrHandle;
    K.fn.extend({
        attr: function(t, e) {
            return me(this, K.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                K.removeAttr(this, t)
            })
        }
    }), K.extend({
        attr: function(t, e, n) {
            var i, r, o = t.nodeType;
            if (t && 3 !== o && 8 !== o && 2 !== o)
                return typeof t.getAttribute === Ce ? K.prop(t, e, n) : (1 === o && K.isXMLDoc(t) || (e = e.toLowerCase(), i = K.attrHooks[e] || (K.expr.match.bool.test(e) ? on : rn)), void 0 === n ? i && "get"in i && null !== (r = i.get(t, e)) ? r : (r = K.find.attr(t, e), null == r ? void 0 : r) : null !== n ? i && "set"in i && void 0 !== (r = i.set(t, n, e)) ? r : (t.setAttribute(e, n + ""), n) : void K.removeAttr(t, e))
        },
        removeAttr: function(t, e) {
            var n, i, r = 0, o = e && e.match(fe);
            if (o && 1 === t.nodeType)
                for (; n = o[r++];)
                    i = K.propFix[n] || n, K.expr.match.bool.test(n) && (t[i]=!1), t.removeAttribute(n)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!G.radioValue && "radio" === e && K.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        }
    }), on = {
        set: function(t, e, n) {
            return e===!1 ? K.removeAttr(t, n) : t.setAttribute(n, n), n
        }
    }, K.each(K.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var n = sn[e] || K.find.attr;
        sn[e] = function(t, e, i) {
            var r, o;
            return i || (o = sn[e], sn[e] = r, r = null != n(t, e, i) ? e.toLowerCase() : null, sn[e] = o), r
        }
    });
    var an = /^(?:input|select|textarea|button)$/i;
    K.fn.extend({
        prop: function(t, e) {
            return me(this, K.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return this.each(function() {
                delete this[K.propFix[t] || t]
            })
        }
    }), K.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(t, e, n) {
            var i, r, o, s = t.nodeType;
            if (t && 3 !== s && 8 !== s && 2 !== s)
                return o = 1 !== s ||!K.isXMLDoc(t), o && (e = K.propFix[e] || e, r = K.propHooks[e]), void 0 !== n ? r && "set"in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get"in r && null !== (i = r.get(t, e)) ? i : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    return t.hasAttribute("tabindex") || an.test(t.nodeName) || t.href ? t.tabIndex : - 1
                }
            }
        }
    }), G.optSelected || (K.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        }
    }), K.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        K.propFix[this.toLowerCase()] = this
    });
    var un = /[\t\r\n\f]/g;
    K.fn.extend({
        addClass: function(t) {
            var e, n, i, r, o, s, a = "string" == typeof t && t, u = 0, l = this.length;
            if (K.isFunction(t))
                return this.each(function(e) {
                    K(this).addClass(t.call(this, e, this.className))
                });
            if (a)
                for (e = (t || "").match(fe) || []; l > u; u++)
                    if (n = this[u], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(un, " ") : " ")) {
                        for (o = 0; r = e[o++];)
                            i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                            s = K.trim(i), n.className !== s && (n.className = s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, i, r, o, s, a = 0 === arguments.length || "string" == typeof t && t, u = 0, l = this.length;
            if (K.isFunction(t))
                return this.each(function(e) {
                    K(this).removeClass(t.call(this, e, this.className))
                });
            if (a)
                for (e = (t || "").match(fe) || []; l > u; u++)
                    if (n = this[u], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(un, " ") : "")) {
                        for (o = 0; r = e[o++];)
                            for (; i.indexOf(" " + r + " ") >= 0;)
                                i = i.replace(" " + r + " ", " ");
                                s = t ? K.trim(i) : "", n.className !== s && (n.className = s)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : this.each(K.isFunction(t) ? function(n) {
                K(this).toggleClass(t.call(this, n, this.className, e), e)
            } : function() {
                if ("string" === n)
                    for (var e, i = 0, r = K(this), o = t.match(fe) || []; e = o[i++];)
                        r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                else (n === Ce || "boolean" === n) 
                    && (this.className && ve.set(this, "__className__", this.className), this.className = this.className || t===!1 ? "" : ve.get(this, "__className__") || "")
            })
        },
        hasClass: function(t) {
            for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(un, " ").indexOf(e) >= 0)
                    return !0;
            return !1
        }
    });
    var ln = /\r/g;
    K.fn.extend({
        val: function(t) {
            var e, n, i, r = this[0];
            {
                if (arguments.length)
                    return i = K.isFunction(t), this.each(function(n) {
                        var r;
                        1 === this.nodeType && (r = i ? t.call(this, n, K(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : K.isArray(r) && (r = K.map(r, function(t) {
                            return null == t ? "" : t + ""
                        })), e = K.valHooks[this.type] || K.valHooks[this.nodeName.toLowerCase()], e && "set"in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                    });
                if (r)
                    return e = K.valHooks[r.type] || K.valHooks[r.nodeName.toLowerCase()], e && "get"in e && void 0 !== (n = e.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(ln, "") : null == n ? "" : n)
            }
        }
    }), K.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = K.find.attr(t, "value");
                    return null != e ? e : K.trim(K.text(t))
                }
            },
            select: {
                get: function(t) {
                    for (var e, n, i = t.options, r = t.selectedIndex, o = "select-one" === t.type || 0 > r, s = o ? null : [], a = o ? r + 1 : i.length, u = 0 > r ? a : o ? r : 0; a > u; u++)
                        if (n = i[u], !(!n.selected && u !== r || (G.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && K.nodeName(n.parentNode, "optgroup"))) {
                            if (e = K(n).val(), o)
                                return e;
                                s.push(e)
                        }
                    return s
                },
                set: function(t, e) {
                    for (var n, i, r = t.options, o = K.makeArray(e), s = r.length; s--;)
                        i = r[s], (i.selected = K.inArray(i.value, o) >= 0) && (n=!0);
                    return n || (t.selectedIndex =- 1), o
                }
            }
        }
    }), K.each(["radio", "checkbox"], function() {
        K.valHooks[this] = {
            set: function(t, e) {
                return K.isArray(e) ? t.checked = K.inArray(K(t).val(), e) >= 0 : void 0
            }
        }, G.checkOn || (K.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    }), K.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        K.fn[e] = function(t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }), K.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        },
        bind: function(t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, n, i) {
            return this.on(e, t, n, i)
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    });
    var cn = K.now(), hn = /\?/;
    K.parseJSON = function(t) {
        return JSON.parse(t + "")
    }, K.parseXML = function(t) {
        var e, n;
        if (!t || "string" != typeof t)
            return null;
        try {
            n = new DOMParser, e = n.parseFromString(t, "text/xml")
        } catch (i) {
            e = void 0
        }
        return (!e || e.getElementsByTagName("parsererror").length) && K.error("Invalid XML: " + t), e
    };
    var pn, fn, dn = /#.*$/, gn = /([?&])_=[^&]*/, mn = /^(.*?):[ \t]*([^\r\n]*)$/gm, vn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, yn = /^(?:GET|HEAD)$/, wn = /^\/\//, bn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, _n = {}, xn = {}, Tn = "*/".concat("*");
    try {
        fn = location.href
    } catch (En) {
        fn = J.createElement("a"), fn.href = "", fn = fn.href
    }
    pn = bn.exec(fn.toLowerCase()) || [], K.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: fn,
            type: "GET",
            isLocal: vn.test(pn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Tn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": K.parseJSON,
                "text xml": K.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? P(P(t, K.ajaxSettings), e) : P(K.ajaxSettings, t)
        },
        ajaxPrefilter: M(_n),
        ajaxTransport: M(xn),
        ajax: function(t, e) {
            function n(t, e, n, s) {
                var u, c, v, y, b, x = e;
                2 !== w && (w = 2, a && clearTimeout(a), i = void 0, o = s || "", _.readyState = t > 0 ? 4 : 0, u = t >= 200 && 300 > t || 304 === t, n && (y = R(h, _, n)), y = $(h, y, _, u), u ? (h.ifModified && (b = _.getResponseHeader("Last-Modified"), b && (K.lastModified[r] = b), b = _.getResponseHeader("etag"), b && (K.etag[r] = b)), 204 === t || "HEAD" === h.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = y.state, c = y.data, v = y.error, u=!v)) : (v = x, (t ||!x) && (x = "error", 0 > t && (t = 0))), _.status = t, _.statusText = (e || x) + "", u ? d.resolveWith(p, [c, x, _]) : d.rejectWith(p, [_, x, v]), _.statusCode(m), m = void 0, l && f.trigger(u ? "ajaxSuccess" : "ajaxError", [_, h, u ? c: v]), g.fireWith(p, [_, x]), l && (f.trigger("ajaxComplete", [_, h]), --K.active || K.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var i, r, o, s, a, u, l, c, h = K.ajaxSetup({}, e), p = h.context || h, f = h.context && (p.nodeType || p.jquery) ? K(p): K.event, d = K.Deferred(), g = K.Callbacks("once memory"), m = h.statusCode || {}, v = {}, y = {}, w = 0, b = "canceled", _ = {
                readyState: 0,
                getResponseHeader: function(t) {
                    var e;
                    if (2 === w) {
                        if (!s)
                            for (s = {}; e = mn.exec(o);)
                                s[e[1].toLowerCase()] = e[2];
                        e = s[t.toLowerCase()]
                    }
                    return null == e ? null : e
                },
                getAllResponseHeaders: function() {
                    return 2 === w ? o : null
                },
                setRequestHeader: function(t, e) {
                    var n = t.toLowerCase();
                    return w || (t = y[n] = y[n] || t, v[t] = e), this
                },
                overrideMimeType: function(t) {
                    return w || (h.mimeType = t), this
                },
                statusCode: function(t) {
                    var e;
                    if (t)
                        if (2 > w)
                            for (e in t)
                                m[e] = [m[e], t[e]];
                        else 
                            _.always(t[_.status]);
                    return this
                },
                abort: function(t) {
                    var e = t || b;
                    return i && i.abort(e), n(0, e), this
                }
            };
            if (d.promise(_).complete = g.add, _.success = _.done, _.error = _.fail, h.url = ((t || h.url || fn) + "").replace(dn, "").replace(wn, pn[1] + "//"), h.type = e.method || e.type || h.method || h.type, h.dataTypes = K.trim(h.dataType || "*").toLowerCase().match(fe) || [""], null == h.crossDomain && (u = bn.exec(h.url.toLowerCase()), h.crossDomain=!(!u || u[1] === pn[1] && u[2] === pn[2] && (u[3] || ("http:" === u[1] ? "80" : "443")) === (pn[3] || ("http:" === pn[1] ? "80" : "443")))), h.data && h.processData && "string" != typeof h.data && (h.data = K.param(h.data, h.traditional)), z(_n, h, e, _), 2 === w)
                return _;
            l = h.global, l && 0 === K.active++&&K.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent=!yn.test(h.type), r = h.url, h.hasContent || (h.data && (r = h.url += (hn.test(r) ? "&" : "?") + h.data, delete h.data), h.cache===!1 && (h.url = gn.test(r) ? r.replace(gn, "$1_=" + cn++) : r + (hn.test(r) ? "&" : "?") + "_=" + cn++)), h.ifModified && (K.lastModified[r] && _.setRequestHeader("If-Modified-Since", K.lastModified[r]), K.etag[r] && _.setRequestHeader("If-None-Match", K.etag[r])), (h.data && h.hasContent && h.contentType!==!1 || e.contentType) && _.setRequestHeader("Content-Type", h.contentType), _.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Tn + "; q=0.01" : "") : h.accepts["*"]);
            for (c in h.headers)
                _.setRequestHeader(c, h.headers[c]);
            if (h.beforeSend && (h.beforeSend.call(p, _, h)===!1 || 2 === w))
                return _.abort();
            b = "abort";
            for (c in{
                success: 1,
                error: 1,
                complete: 1
            })
                _[c](h[c]);
            if (i = z(xn, h, e, _)) {
                _.readyState = 1, l && f.trigger("ajaxSend", [_, h]), h.async && h.timeout > 0 && (a = setTimeout(function() {
                    _.abort("timeout")
                }, h.timeout));
                try {
                    w = 1, i.send(v, n)
                } catch (x) {
                    if (!(2 > w))
                        throw x;
                    n( - 1, x)
                }
            } else 
                n( - 1, "No Transport");
            return _
        },
        getJSON: function(t, e, n) {
            return K.get(t, e, n, "json")
        },
        getScript: function(t, e) {
            return K.get(t, void 0, e, "script")
        }
    }), K.each(["get", "post"], function(t, e) {
        K[e] = function(t, n, i, r) {
            return K.isFunction(n) && (r = r || i, i = n, n = void 0), K.ajax({
                url: t,
                type: e,
                dataType: r,
                data: n,
                success: i
            })
        }
    }), K.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        K.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), K._evalUrl = function(t) {
        return K.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, K.fn.extend({
        wrapAll: function(t) {
            var e;
            return K.isFunction(t) ? this.each(function(e) {
                K(this).wrapAll(t.call(this, e))
            }) : (this[0] && (e = K(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var t = this; t.firstElementChild;)
                    t = t.firstElementChild;
                return t
            }).append(this)), this)
        },
        wrapInner: function(t) {
            return this.each(K.isFunction(t) ? function(e) {
                K(this).wrapInner(t.call(this, e))
            } : function() {
                var e = K(this), n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = K.isFunction(t);
            return this.each(function(n) {
                K(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                K.nodeName(this, "body") || K(this).replaceWith(this.childNodes)
            }).end()
        }
    }), K.expr.filters.hidden = function(t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0
    }, K.expr.filters.visible = function(t) {
        return !K.expr.filters.hidden(t)
    };
    var Cn = /%20/g, Sn = /\[\]$/, In = /\r?\n/g, kn = /^(?:submit|button|image|reset|file)$/i, Ln = /^(?:input|select|textarea|keygen)/i;
    K.param = function(t, e) {
        var n, i = [], r = function(t, e) {
            e = K.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
        };
        if (void 0 === e && (e = K.ajaxSettings && K.ajaxSettings.traditional), K.isArray(t) || t.jquery&&!K.isPlainObject(t)
            )K.each(t, function() {
            r(this.name, this.value)
        });
        else 
            for (n in t)
                H(n, t[n], e, r);
        return i.join("&").replace(Cn, "+")
    }, K.fn.extend({
        serialize: function() {
            return K.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = K.prop(this, "elements");
                return t ? K.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name&&!K(this).is(":disabled") && Ln.test(this.nodeName)&&!kn.test(t) && (this.checked ||!Ee.test(t))
            }).map(function(t, e) {
                var n = K(this).val();
                return null == n ? null : K.isArray(n) ? K.map(n, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(In, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(In, "\r\n")
                }
            }).get()
        }
    }), K.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (t) {}
    };
    var jn = 0, Dn = {}, Nn = {
        0: 200,
        1223: 204
    }, An = K.ajaxSettings.xhr();
    t.ActiveXObject && K(t).on("unload", function() {
        for (var t in Dn)
            Dn[t]()
    }), G.cors=!!An && "withCredentials"in An, G.ajax = An=!!An, K.ajaxTransport(function(t) {
        var e;
        return G.cors || An&&!t.crossDomain ? {
            send: function(n, i) {
                var r, o = t.xhr(), s=++jn;
                if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (r in t.xhrFields)
                        o[r] = t.xhrFields[r];
                t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                for (r in n)
                    o.setRequestHeader(r, n[r]);
                e = function(t) {
                    return function() {
                        e && (delete Dn[s], e = o.onload = o.onerror = null, "abort" === t ? o.abort() : "error" === t ? i(o.status, o.statusText) : i(Nn[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
                            text: o.responseText
                        } : void 0, o.getAllResponseHeaders()))
                    }
                }, o.onload = e(), o.onerror = e("error"), e = Dn[s] = e("abort");
                try {
                    o.send(t.hasContent && t.data || null)
                } catch (a) {
                    if (e)
                        throw a
                }
            },
            abort: function() {
                e && e()
            }
        } : void 0
    }), K.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(t) {
                return K.globalEval(t), t
            }
        }
    }), K.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache=!1), t.crossDomain && (t.type = "GET")
    }), K.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, n;
            return {
                send: function(i, r) {
                    e = K("<script>").prop({
                        async: !0,
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", n = function(t) {
                        e.remove(), n = null, t && r("error" === t.type ? 404 : 200, t.type)
                    }), J.head.appendChild(e[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var On = [], Mn = /(=)\?(?=&|$)|\?\?/;
    K.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = On.pop() || K.expando + "_" + cn++;
            return this[t]=!0, t
        }
    }), K.ajaxPrefilter("json jsonp", function(e, n, i) {
        var r, o, s, a = e.jsonp!==!1 && (Mn.test(e.url) ? "url" : "string" == typeof e.data&&!(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Mn.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = K.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Mn, "$1" + r) : e.jsonp!==!1 && (e.url += (hn.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return s || K.error(r + " was not called"), s[0]
        }, e.dataTypes[0] = "json", o = t[r], t[r] = function() {
            s = arguments
        }, i.always(function() {
            t[r] = o, e[r] && (e.jsonpCallback = n.jsonpCallback, On.push(r)), s && K.isFunction(o) && o(s[0]), s = o = void 0
        }), "script") : void 0
    }), K.parseHTML = function(t, e, n) {
        if (!t || "string" != typeof t)
            return null;
        "boolean" == typeof e && (n = e, e=!1), e = e || J;
        var i = se.exec(t), r=!n && [];
        return i ? [e.createElement(i[1])] : (i = K.buildFragment([t], e, r), r && r.length && K(r).remove(), K.merge([], i.childNodes))
    };
    var zn = K.fn.load;
    K.fn.load = function(t, e, n) {
        if ("string" != typeof t && zn)
            return zn.apply(this, arguments);
        var i, r, o, s = this, a = t.indexOf(" ");
        return a >= 0 && (i = K.trim(t.slice(a)), t = t.slice(0, a)), K.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), s.length > 0 && K.ajax({
            url: t,
            type: r,
            dataType: "html",
            data: e
        }).done(function(t) {
            o = arguments, s.html(i ? K("<div>").append(K.parseHTML(t)).find(i) : t)
        }).complete(n && function(t, e) {
            s.each(n, o || [t.responseText, e, t])
        }), this
    }, K.expr.filters.animated = function(t) {
        return K.grep(K.timers, function(e) {
            return t === e.elem
        }).length
    };
    var Pn = t.document.documentElement;
    K.offset = {
        setOffset: function(t, e, n) {
            var i, r, o, s, a, u, l, c = K.css(t, "position"), h = K(t), p = {};
            "static" === c && (t.style.position = "relative"), a = h.offset(), o = K.css(t, "top"), u = K.css(t, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto")>-1, l ? (i = h.position(), s = i.top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(u) || 0), K.isFunction(e) && (e = e.call(t, n, a)), null != e.top && (p.top = e.top - a.top + s), null != e.left && (p.left = e.left - a.left + r), "using"in e ? e.using.call(t, p) : h.css(p)
        }
    }, K.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function(e) {
                K.offset.setOffset(this, t, e)
            });
            var e, n, i = this[0], r = {
                top: 0,
                left: 0
            }, o = i && i.ownerDocument;
            if (o)
                return e = o.documentElement, K.contains(e, i) ? (typeof i.getBoundingClientRect !== Ce && (r = i.getBoundingClientRect()), n = q(o), {
                    top: r.top + n.pageYOffset - e.clientTop,
                    left: r.left + n.pageXOffset - e.clientLeft
                }) : r
        },
        position: function() {
            if (this[0]) {
                var t, e, n = this[0], i = {
                    top: 0,
                    left: 0
                };
                return "fixed" === K.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), K.nodeName(t[0], "html") || (i = t.offset()), i.top += K.css(t[0], "borderTopWidth", !0), i.left += K.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - i.top - K.css(n, "marginTop", !0),
                    left: e.left - i.left - K.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || Pn; t&&!K.nodeName(t, "html") && "static" === K.css(t, "position");)
                    t = t.offsetParent;
                return t || Pn
            })
        }
    }), K.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, n) {
        var i = "pageYOffset" === n;
        K.fn[e] = function(r) {
            return me(this, function(e, r, o) {
                var s = q(e);
                return void 0 === o ? s ? s[n] : e[r] : void(s ? s.scrollTo(i ? t.pageXOffset : o, i ? o : t.pageYOffset) : e[r] = o)
            }, e, r, arguments.length, null)
        }
    }), K.each(["top", "left"], function(t, e) {
        K.cssHooks[e] = x(G.pixelPosition, function(t, n) {
            return n ? (n = _(t, e), We.test(n) ? K(t).position()[e] + "px" : n) : void 0
        })
    }), K.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        K.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(n, i) {
            K.fn[i] = function(i, r) {
                var o = arguments.length && (n || "boolean" != typeof i), s = n || (i===!0 || r===!0 ? "margin" : "border");
                return me(this, function(e, n, i) {
                    var r;
                    return K.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === i ? K.css(e, n, s) : K.style(e, n, i, s)
                }, e, o ? i : void 0, o, null)
            }
        })
    }), K.fn.size = function() {
        return this.length
    }, K.fn.andSelf = K.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return K
    });
    var Rn = t.jQuery, $n = t.$;
    return K.noConflict = function(e) {
        return t.$ === K && (t.$ = $n), e && t.jQuery === K && (t.jQuery = Rn), K
    }, typeof e === Ce && (t.jQuery = t.$ = K), K
}), window.matchMedia || (window.matchMedia = function() {
    "use strict";
    var t = window.styleMedia || window.media;
    if (!t) {
        var e = document.createElement("style"), n = document.getElementsByTagName("script")[0], i = null;
        e.type = "text/css", e.id = "matchmediajs-test", n.parentNode.insertBefore(e, n), i = "getComputedStyle"in window && window.getComputedStyle(e, null) || e.currentStyle, t = {
            matchMedium: function(t) {
                var n = "@media " + t + "{ #matchmediajs-test { width: 1px; } }";
                return e.styleSheet ? e.styleSheet.cssText = n : e.textContent = n, "1px" === i.width
            }
        }
    }
    return function(e) {
        return {
            matches: t.matchMedium(e || "all"),
            media: e || "all"
        }
    }
}()), function() {
    if (window.matchMedia && window.matchMedia("all").addListener)
        return !1;
    var t = window.matchMedia, e = t("only all").matches, n=!1, i = 0, r = [], o = function() {
        clearTimeout(i), i = setTimeout(function() {
            for (var e = 0, n = r.length; n > e; e++) {
                var i = r[e].mql, o = r[e].listeners || [], s = t(i.media).matches;
                if (s !== i.matches) {
                    i.matches = s;
                    for (var a = 0, u = o.length; u > a; a++)
                        o[a].call(window, i)
                    }
            }
        }, 30)
    };
    window.matchMedia = function(i) {
        var s = t(i), a = [], u = 0;
        return s.addListener = function(t) {
            e && (n || (n=!0, window.addEventListener("resize", o, !0)), 0 === u && (u = r.push({
                mql: s,
                listeners: a
            })), a.push(t))
        }, s.removeListener = function(t) {
            for (var e = 0, n = a.length; n > e; e++)
                a[e] === t && a.splice(e, 1)
        }, s
    }
}(), function() {
    function t(t, e, n) {
        for (var i = (n || 0) - 1, r = t ? t.length : 0; ++i < r;)
            if (t[i] === e)
                return i;
        return - 1
    }
    function e(e, n) {
        var i = typeof n;
        if (e = e.cache, "boolean" == i || null == n)
            return e[n] ? 0 : - 1;
        "number" != i && "string" != i && (i = "object");
        var r = "number" == i ? n: v + n;
        return e = (e = e[i]) && e[r], "object" == i ? e && t(e, n)>-1 ? 0 : - 1 : e ? 0 : - 1
    }
    function n(t) {
        var e = this.cache, n = typeof t;
        if ("boolean" == n || null == t)
            e[t]=!0;
        else {
            "number" != n && "string" != n && (n = "object");
            var i = "number" == n ? t: v + t, r = e[n] || (e[n] = {});
            "object" == n ? (r[i] || (r[i] = [])).push(t) : r[i]=!0
        }
    }
    function i(t) {
        return t.charCodeAt(0)
    }
    function r(t, e) {
        for (var n = t.criteria, i = e.criteria, r =- 1, o = n.length; ++r < o;) {
            var s = n[r], a = i[r];
            if (s !== a) {
                if (s > a || "undefined" == typeof s)
                    return 1;
                if (a > s || "undefined" == typeof a)
                    return - 1
            }
        }
        return t.index - e.index
    }
    function o(t) {
        var e =- 1, i = t.length, r = t[0], o = t[i / 2 | 0], s = t[i - 1];
        if (r && "object" == typeof r && o && "object" == typeof o && s && "object" == typeof s)
            return !1;
        var a = u();
        a["false"] = a["null"] = a["true"] = a.undefined=!1;
        var l = u();
        for (l.array = t, l.cache = a, l.push = n; ++e < i;)
            l.push(t[e]);
        return l
    }
    function s(t) {
        return "\\" + U[t]
    }
    function a() {
        return d.pop() || []
    }
    function u() {
        return g.pop() || {
            array: null,
            cache: null,
            criteria: null,
            "false": !1,
            index: 0,
            "null": !1,
            number: null,
            object: null,
            push: null,
            string: null,
            "true": !1,
            undefined: !1,
            value: null
        }
    }
    function l(t) {
        t.length = 0, d.length < w && d.push(t)
    }
    function c(t) {
        var e = t.cache;
        e && c(e), t.array = t.cache = t.criteria = t.object = t.number = t.string = t.value = null, g.length < w && g.push(t)
    }
    function h(t, e, n) {
        e || (e = 0), "undefined" == typeof n && (n = t ? t.length : 0);
        for (var i =- 1, r = n - e || 0, o = Array(0 > r ? 0 : r); ++i < r;)
            o[i] = t[e + i];
        return o
    }
    function p(n) {
        function d(t) {
            return t && "object" == typeof t&&!Zi(t) && Oi.call(t, "__wrapped__") ? t : new g(t)
        }
        function g(t, e) {
            this.__chain__=!!e, this.__wrapped__ = t
        }
        function w(t) {
            function e() {
                if (i) {
                    var t = h(i);
                    Mi.apply(t, arguments)
                }
                if (this instanceof e) {
                    var o = Q(n.prototype), s = n.apply(o, t || arguments);
                    return je(s) ? s : o
                }
                return n.apply(r, t || arguments)
            }
            var n = t[0], i = t[2], r = t[4];
            return Ji(e, t), e
        }
        function U(t, e, n, i, r) {
            if (n) {
                var o = n(t);
                if ("undefined" != typeof o)
                    return o
            }
            var s = je(t);
            if (!s)
                return t;
            var u = Ii.call(t);
            if (!F[u])
                return t;
            var c = Qi[u];
            switch (u) {
            case z:
            case P:
                return new c( + t);
            case $:
            case W:
                return new c(t);
            case q:
                return o = c(t.source, C.exec(t)), o.lastIndex = t.lastIndex, o
            }
            var p = Zi(t);
            if (e) {
                var f=!i;
                i || (i = a()), r || (r = a());
                for (var d = i.length; d--;)
                    if (i[d] == t)
                        return r[d];
                o = p ? c(t.length) : {}
            } else 
                o = p ? h(t) : or({}, t);
            return p && (Oi.call(t, "index") && (o.index = t.index), Oi.call(t, "input") && (o.input = t.input)), e ? (i.push(t), r.push(o), (p ? Ge : ur)(t, function(t, s) {
                o[s] = U(t, e, n, i, r)
            }), f && (l(i), l(r)), o) : o
        }
        function Q(t) {
            return je(t) ? Hi(t) : {}
        }
        function G(t, e, n) {
            if ("function" != typeof t)
                return Zn;
            if ("undefined" == typeof e ||!("prototype"in t))
                return t;
            var i = t.__bindData__;
            if ("undefined" == typeof i && (Gi.funcNames && (i=!t.name), i = i ||!Gi.funcDecomp, !i)) {
                var r = Ni.call(t);
                Gi.funcNames || (i=!S.test(r)), i || (i = j.test(r), Ji(t, i))
            }
            if (i===!1 || i!==!0 && 1 & i[1])
                return t;
            switch (n) {
            case 1:
                return function(n) {
                    return t.call(e, n)
                };
            case 2:
                return function(n, i) {
                    return t.call(e, n, i)
                };
            case 3:
                return function(n, i, r) {
                    return t.call(e, n, i, r)
                };
            case 4:
                return function(n, i, r, o) {
                    return t.call(e, n, i, r, o)
                }
            }
            return Mn(t, e)
        }
        function J(t) {
            function e() {
                var t = u ? s: this;
                if (r) {
                    var d = h(r);
                    Mi.apply(d, arguments)
                }
                if ((o || c) && (d || (d = h(arguments)), o && Mi.apply(d, o), c && d.length < a))
                    return i|=16, J([n, p ? i: - 4 & i, d, null, s, a]);
                if (d || (d = arguments), l && (n = t[f]), this instanceof e) {
                    t = Q(n.prototype);
                    var g = n.apply(t, d);
                    return je(g) ? g : t
                }
                return n.apply(t, d)
            }
            var n = t[0], i = t[1], r = t[2], o = t[3], s = t[4], a = t[5], u = 1 & i, l = 2 & i, c = 4 & i, p = 8 & i, f = n;
            return Ji(e, t), e
        }
        function Z(n, i) {
            var r =- 1, s = ue(), a = n ? n.length : 0, u = a >= y && s === t, l = [];
            if (u) {
                var h = o(i);
                h ? (s = e, i = h) : u=!1
            }
            for (; ++r < a;) {
                var p = n[r];
                s(i, p) < 0 && l.push(p)
            }
            return u && c(i), l
        }
        function te(t, e, n, i) {
            for (var r = (i || 0) - 1, o = t ? t.length : 0, s = []; ++r < o;) {
                var a = t[r];
                if (a && "object" == typeof a && "number" == typeof a.length && (Zi(a) || pe(a))) {
                    e || (a = te(a, e, n));
                    var u =- 1, l = a.length, c = s.length;
                    for (s.length += l; ++u < l;)
                        s[c++] = a[u]
                } else 
                    n || s.push(a)
            }
            return s
        }
        function ee(t, e, n, i, r, o) {
            if (n) {
                var s = n(t, e);
                if ("undefined" != typeof s)
                    return !!s
            }
            if (t === e)
                return 0 !== t || 1 / t == 1 / e;
            var u = typeof t, c = typeof e;
            if (!(t !== t || t && Y[u] || e && Y[c]))
                return !1;
            if (null == t || null == e)
                return t === e;
            var h = Ii.call(t), p = Ii.call(e);
            if (h == O && (h = H), p == O && (p = H), h != p)
                return !1;
            switch (h) {
            case z:
            case P:
                return + t ==+ e;
            case $:
                return t!=+t ? e!=+e : 0 == t ? 1 / t == 1 / e : t ==+ e;
            case q:
            case W:
                return t == xi(e)
            }
            var f = h == M;
            if (!f) {
                var d = Oi.call(t, "__wrapped__"), g = Oi.call(e, "__wrapped__");
                if (d || g)
                    return ee(d ? t.__wrapped__ : t, g ? e.__wrapped__ : e, n, i, r, o);
                if (h != H)
                    return !1;
                var m = t.constructor, v = e.constructor;
                if (m != v&&!(Le(m) && m instanceof m && Le(v) && v instanceof v) && "constructor"in t && "constructor"in e)
                    return !1
            }
            var y=!r;
            r || (r = a()), o || (o = a());
            for (var w = r.length; w--;)
                if (r[w] == t)
                    return o[w] == e;
            var b = 0;
            if (s=!0, r.push(t), o.push(e), f) {
                if (w = t.length, b = e.length, s = b == w, s || i)
                    for (; b--;) {
                        var _ = w, x = e[b];
                        if (i)
                            for (; _--&&!(s = ee(t[_], x, n, i, r, o)););
                        else if (!(s = ee(t[b], x, n, i, r, o)))
                            break
                    }
            } else 
                ar(e, function(e, a, u) {
                    return Oi.call(u, a) ? (b++, s = Oi.call(t, a) && ee(t[a], e, n, i, r, o)) : void 0
                }), s&&!i && ar(t, function(t, e, n) {
                    return Oi.call(n, e) ? s=--b>-1 : void 0
                });
            return r.pop(), o.pop(), y && (l(r), l(o)), s
        }
        function ne(t, e, n, i, r) {
            (Zi(e) ? Ge : ur)(e, function(e, o) {
                var s, a, u = e, l = t[o];
                if (e && ((a = Zi(e)) || lr(e))) {
                    for (var c = i.length; c--;)
                        if (s = i[c] == e) {
                            l = r[c];
                            break
                        }
                    if (!s) {
                        var h;
                        n && (u = n(l, e), (h = "undefined" != typeof u) && (l = u)), h || (l = a ? Zi(l) ? l : [] : lr(l) ? l : {}), i.push(e), r.push(l), h || ne(l, e, n, i, r)
                    }
                } else 
                    n && (u = n(l, e), "undefined" == typeof u && (u = e)), "undefined" != typeof u && (l = u);
                t[o] = l
            })
        }
        function ie(t, e) {
            return t + Di(Vi() * (e - t + 1))
        }
        function re(n, i, r) {
            var s =- 1, u = ue(), h = n ? n.length : 0, p = [], f=!i && h >= y && u === t, d = r || f ? a() : p;
            if (f) {
                var g = o(d);
                u = e, d = g
            }
            for (; ++s < h;) {
                var m = n[s], v = r ? r(m, s, n): m;
                (i?!s || d[d.length - 1] !== v : u(d, v) < 0) && ((r || f) && d.push(v), p.push(m))
            }
            return f ? (l(d.array), c(d)) : r && l(d), p
        }
        function oe(t) {
            return function(e, n, i) {
                var r = {};
                n = d.createCallback(n, i, 3);
                var o =- 1, s = e ? e.length : 0;
                if ("number" == typeof s)
                    for (; ++o < s;) {
                        var a = e[o];
                        t(r, a, n(a, o, e), e)
                    } else 
                        ur(e, function(e, i, o) {
                            t(r, e, n(e, i, o), o)
                        });
                return r
            }
        }
        function se(t, e, n, i, r, o) {
            var s = 1 & e, a = 2 & e, u = 4 & e, l = 16 & e, c = 32 & e;
            if (!a&&!Le(t))
                throw new Ti;
            l&&!n.length && (e&=-17, l = n=!1), c&&!i.length && (e&=-33, c = i=!1);
            var p = t && t.__bindData__;
            if (p && p!==!0)
                return p = h(p), p[2] && (p[2] = h(p[2])), p[3] && (p[3] = h(p[3])), !s || 1 & p[1] || (p[4] = r), !s && 1 & p[1] && (e|=8), !u || 4 & p[1] || (p[5] = o), l && Mi.apply(p[2] || (p[2] = []), n), c && Ri.apply(p[3] || (p[3] = []), i), p[1]|=e, se.apply(null, p);
            var f = 1 == e || 17 === e ? w: J;
            return f([t, e, n, i, r, o])
        }
        function ae(t) {
            return er[t]
        }
        function ue() {
            var e = (e = d.indexOf) === yn ? t: e;
            return e
        }
        function le(t) {
            return "function" == typeof t && ki.test(t)
        }
        function ce(t) {
            var e, n;
            return t && Ii.call(t) == H && (e = t.constructor, !Le(e) || e instanceof e) ? (ar(t, function(t, e) {
                n = e
            }), "undefined" == typeof n || Oi.call(t, n)) : !1
        }
        function he(t) {
            return nr[t]
        }
        function pe(t) {
            return t && "object" == typeof t && "number" == typeof t.length && Ii.call(t) == O ||!1
        }
        function fe(t, e, n, i) {
            return "boolean" != typeof e && null != e && (i = n, n = e, e=!1), U(t, e, "function" == typeof n && G(n, i, 1))
        }
        function de(t, e, n) {
            return U(t, !0, "function" == typeof e && G(e, n, 1))
        }
        function ge(t, e) {
            var n = Q(t);
            return e ? or(n, e) : n
        }
        function me(t, e, n) {
            var i;
            return e = d.createCallback(e, n, 3), ur(t, function(t, n, r) {
                return e(t, n, r) ? (i = n, !1) : void 0
            }), i
        }
        function ve(t, e, n) {
            var i;
            return e = d.createCallback(e, n, 3), we(t, function(t, n, r) {
                return e(t, n, r) ? (i = n, !1) : void 0
            }), i
        }
        function ye(t, e, n) {
            var i = [];
            ar(t, function(t, e) {
                i.push(e, t)
            });
            var r = i.length;
            for (e = G(e, n, 3); r--&&e(i[r--], i[r], t)
                !==!1;
            );
            return t
        }
        function we(t, e, n) {
            var i = tr(t), r = i.length;
            for (e = G(e, n, 3); r--;) {
                var o = i[r];
                if (e(t[o], o, t)===!1)
                    break
            }
            return t
        }
        function be(t) {
            var e = [];
            return ar(t, function(t, n) {
                Le(t) && e.push(n)
            }), e.sort()
        }
        function _e(t, e) {
            return t ? Oi.call(t, e) : !1
        }
        function xe(t) {
            for (var e =- 1, n = tr(t), i = n.length, r = {}; ++e < i;) {
                var o = n[e];
                r[t[o]] = o
            }
            return r
        }
        function Te(t) {
            return t===!0 || t===!1 || t && "object" == typeof t && Ii.call(t) == z ||!1
        }
        function Ee(t) {
            return t && "object" == typeof t && Ii.call(t) == P ||!1
        }
        function Ce(t) {
            return t && 1 === t.nodeType ||!1
        }
        function Se(t) {
            var e=!0;
            if (!t)
                return e;
            var n = Ii.call(t), i = t.length;
            return n == M || n == W || n == O || n == H && "number" == typeof i && Le(t.splice)?!i : (ur(t, function() {
                return e=!1
            }), e)
        }
        function Ie(t, e, n, i) {
            return ee(t, e, "function" == typeof n && G(n, i, 2))
        }
        function ke(t) {
            return Wi(t)&&!Fi(parseFloat(t))
        }
        function Le(t) {
            return "function" == typeof t
        }
        function je(t) {
            return !(!t ||!Y[typeof t])
        }
        function De(t) {
            return Ae(t) && t!=+t
        }
        function Ne(t) {
            return null === t
        }
        function Ae(t) {
            return "number" == typeof t || t && "object" == typeof t && Ii.call(t) == $ ||!1
        }
        function Oe(t) {
            return t && "object" == typeof t && Ii.call(t) == q ||!1
        }
        function Me(t) {
            return "string" == typeof t || t && "object" == typeof t && Ii.call(t) == W ||!1
        }
        function ze(t) {
            return "undefined" == typeof t
        }
        function Pe(t, e, n) {
            var i = {};
            return e = d.createCallback(e, n, 3), ur(t, function(t, n, r) {
                i[n] = e(t, n, r)
            }), i
        }
        function Re(t) {
            var e = arguments, n = 2;
            if (!je(t))
                return t;
            if ("number" != typeof e[2] && (n = e.length), n > 3 && "function" == typeof e[n - 2])
                var i = G(e[--n - 1], e[n--], 2);
            else 
                n > 2 && "function" == typeof e[n - 1] && (i = e[--n]);
            for (var r = h(arguments, 1, n), o =- 1, s = a(), u = a(); ++o < n;)
                ne(t, r[o], i, s, u);
            return l(s), l(u), t
        }
        function $e(t, e, n) {
            var i = {};
            if ("function" != typeof e) {
                var r = [];
                ar(t, function(t, e) {
                    r.push(e)
                }), r = Z(r, te(arguments, !0, !1, 1));
                for (var o =- 1, s = r.length; ++o < s;) {
                    var a = r[o];
                    i[a] = t[a]
                }
            } else 
                e = d.createCallback(e, n, 3), ar(t, function(t, n, r) {
                    e(t, n, r) || (i[n] = t)
                });
            return i
        }
        function He(t) {
            for (var e =- 1, n = tr(t), i = n.length, r = di(i); ++e < i;) {
                var o = n[e];
                r[e] = [o, t[o]]
            }
            return r
        }
        function qe(t, e, n) {
            var i = {};
            if ("function" != typeof e)
                for (var r =- 1, o = te(arguments, !0, !1, 1), s = je(t) ? o.length : 0; ++r < s;) {
                    var a = o[r];
                    a in t && (i[a] = t[a])
                } else 
                    e = d.createCallback(e, n, 3), ar(t, function(t, n, r) {
                        e(t, n, r) && (i[n] = t)
                    });
            return i
        }
        function We(t, e, n, i) {
            var r = Zi(t);
            if (null == n)
                if (r)
                    n = [];
                else {
                    var o = t && t.constructor, s = o && o.prototype;
                    n = Q(s)
                }
            return e && (e = d.createCallback(e, i, 4), (r ? Ge : ur)(t, function(t, i, r) {
                return e(n, t, i, r)
            })), n
        }
        function Fe(t) {
            for (var e =- 1, n = tr(t), i = n.length, r = di(i); ++e < i;)
                r[e] = t[n[e]];
            return r
        }
        function Be(t) {
            for (var e = arguments, n =- 1, i = te(e, !0, !1, 1), r = e[2] && e[2][e[1]] === t ? 1 : i.length, o = di(r); ++n < r;)
                o[n] = t[i[n]];
            return o
        }
        function Xe(t, e, n) {
            var i =- 1, r = ue(), o = t ? t.length : 0, s=!1;
            return n = (0 > n ? Xi(0, o + n) : n) || 0, Zi(t) ? s = r(t, e, n)>-1 : "number" == typeof o ? s = (Me(t) ? t.indexOf(e, n) : r(t, e, n))>-1 : ur(t, function(t) {
                return ++i >= n?!(s = t === e) : void 0
            }), s
        }
        function Ye(t, e, n) {
            var i=!0;
            e = d.createCallback(e, n, 3);
            var r =- 1, o = t ? t.length : 0;
            if ("number" == typeof o)
                for (; ++r < o && (i=!!e(t[r], r, t)););
            else 
                ur(t, function(t, n, r) {
                    return i=!!e(t, n, r)
                });
            return i
        }
        function Ue(t, e, n) {
            var i = [];
            e = d.createCallback(e, n, 3);
            var r =- 1, o = t ? t.length : 0;
            if ("number" == typeof o)
                for (; ++r < o;) {
                    var s = t[r];
                    e(s, r, t) && i.push(s)
                } else 
                    ur(t, function(t, n, r) {
                        e(t, n, r) && i.push(t)
                    });
            return i
        }
        function Ve(t, e, n) {
            e = d.createCallback(e, n, 3);
            var i =- 1, r = t ? t.length : 0;
            if ("number" != typeof r) {
                var o;
                return ur(t, function(t, n, i) {
                    return e(t, n, i) ? (o = t, !1) : void 0
                }), o
            }
            for (; ++i < r;) {
                var s = t[i];
                if (e(s, i, t))
                    return s
            }
        }
        function Qe(t, e, n) {
            var i;
            return e = d.createCallback(e, n, 3), Je(t, function(t, n, r) {
                return e(t, n, r) ? (i = t, !1) : void 0
            }), i
        }
        function Ge(t, e, n) {
            var i =- 1, r = t ? t.length : 0;
            if (e = e && "undefined" == typeof n ? e : G(e, n, 3), "number" == typeof r)
                for (; ++i < r && e(t[i], i, t)!==!1;);
            else 
                ur(t, e);
            return t
        }
        function Je(t, e, n) {
            var i = t ? t.length: 0;
            if (e = e && "undefined" == typeof n ? e : G(e, n, 3), "number" == typeof i)
                for (; i--&&e(t[i], i, t)!==!1;);
            else {
                var r = tr(t);
                i = r.length, ur(t, function(t, n, o) {
                    return n = r ? r[--i] : --i, e(o[n], n, o)
                })
            }
            return t
        }
        function Ze(t, e) {
            var n = h(arguments, 2), i =- 1, r = "function" == typeof e, o = t ? t.length : 0, s = di("number" == typeof o ? o : 0);
            return Ge(t, function(t) {
                s[++i] = (r ? e : t[e]).apply(t, n)
            }), s
        }
        function Ke(t, e, n) {
            var i =- 1, r = t ? t.length : 0;
            if (e = d.createCallback(e, n, 3), "number" == typeof r)
                for (var o = di(r); ++i < r;)
                    o[i] = e(t[i], i, t);
            else 
                o = [], ur(t, function(t, n, r) {
                    o[++i] = e(t, n, r)
                });
            return o
        }
        function tn(t, e, n) {
            var r =- 1 / 0, o = r;
            if ("function" != typeof e && n && n[e] === t && (e = null), null == e && Zi(t))
                for (var s =- 1, a = t.length; ++s < a;) {
                    var u = t[s];
                    u > o && (o = u)
                } else 
                    e = null == e && Me(t) ? i : d.createCallback(e, n, 3), Ge(t, function(t, n, i) {
                        var s = e(t, n, i);
                        s > r && (r = s, o = t)
                    });
            return o
        }
        function en(t, e, n) {
            var r = 1 / 0, o = r;
            if ("function" != typeof e && n && n[e] === t && (e = null), null == e && Zi(t))
                for (var s =- 1, a = t.length; ++s < a;) {
                    var u = t[s];
                    o > u && (o = u)
                } else 
                    e = null == e && Me(t) ? i : d.createCallback(e, n, 3), Ge(t, function(t, n, i) {
                        var s = e(t, n, i);
                        r > s && (r = s, o = t)
                    });
            return o
        }
        function nn(t, e, n, i) {
            if (!t)
                return n;
            var r = arguments.length < 3;
            e = d.createCallback(e, i, 4);
            var o =- 1, s = t.length;
            if ("number" == typeof s)
                for (r && (n = t[++o]); ++o < s;)
                    n = e(n, t[o], o, t);
            else 
                ur(t, function(t, i, o) {
                    n = r ? (r=!1, t) : e(n, t, i, o)
                });
            return n
        }
        function rn(t, e, n, i) {
            var r = arguments.length < 3;
            return e = d.createCallback(e, i, 4), Je(t, function(t, i, o) {
                n = r ? (r=!1, t) : e(n, t, i, o)
            }), n
        }
        function on(t, e, n) {
            return e = d.createCallback(e, n, 3), Ue(t, function(t, n, i) {
                return !e(t, n, i)
            })
        }
        function sn(t, e, n) {
            if (t && "number" != typeof t.length && (t = Fe(t)), null == e || n)
                return t ? t[ie(0, t.length - 1)] : f;
            var i = an(t);
            return i.length = Yi(Xi(0, e), i.length), i
        }
        function an(t) {
            var e =- 1, n = t ? t.length : 0, i = di("number" == typeof n ? n : 0);
            return Ge(t, function(t) {
                var n = ie(0, ++e);
                i[e] = i[n], i[n] = t
            }), i
        }
        function un(t) {
            var e = t ? t.length: 0;
            return "number" == typeof e ? e : tr(t).length
        }
        function ln(t, e, n) {
            var i;
            e = d.createCallback(e, n, 3);
            var r =- 1, o = t ? t.length : 0;
            if ("number" == typeof o)
                for (; ++r < o&&!(i = e(t[r], r, t)););
            else 
                ur(t, function(t, n, r) {
                    return !(i = e(t, n, r))
                });
            return !!i
        }
        function cn(t, e, n) {
            var i =- 1, o = Zi(e), s = t ? t.length : 0, h = di("number" == typeof s ? s : 0);
            for (o || (e = d.createCallback(e, n, 3)), Ge(t, function(t, n, r) {
                var s = h[++i] = u();
                o ? s.criteria = Ke(e, function(e) {
                    return t[e]
                }) : (s.criteria = a())[0] = e(t, n, r), s.index = i, s.value = t
            }), s = h.length, h.sort(r); s--;) {
                var p = h[s];
                h[s] = p.value, o || l(p.criteria), c(p)
            }
            return h
        }
        function hn(t) {
            return t && "number" == typeof t.length ? h(t) : Fe(t)
        }
        function pn(t) {
            for (var e =- 1, n = t ? t.length : 0, i = []; ++e < n;) {
                var r = t[e];
                r && i.push(r)
            }
            return i
        }
        function fn(t) {
            return Z(t, te(arguments, !0, !0, 1))
        }
        function dn(t, e, n) {
            var i =- 1, r = t ? t.length : 0;
            for (e = d.createCallback(e, n, 3); ++i < r;)
                if (e(t[i], i, t))
                    return i;
            return - 1
        }
        function gn(t, e, n) {
            var i = t ? t.length: 0;
            for (e = d.createCallback(e, n, 3); i--;)
                if (e(t[i], i, t))
                    return i;
            return - 1
        }
        function mn(t, e, n) {
            var i = 0, r = t ? t.length: 0;
            if ("number" != typeof e && null != e) {
                var o =- 1;
                for (e = d.createCallback(e, n, 3); ++o < r && e(t[o], o, t);)
                    i++
            } else if (i = e, null == i || n)
                return t ? t[0] : f;
            return h(t, 0, Yi(Xi(0, i), r))
        }
        function vn(t, e, n, i) {
            return "boolean" != typeof e && null != e && (i = n, n = "function" != typeof e && i && i[e] === t ? null : e, e=!1), null != n && (t = Ke(t, n, i)), te(t, e)
        }
        function yn(e, n, i) {
            if ("number" == typeof i) {
                var r = e ? e.length: 0;
                i = 0 > i ? Xi(0, r + i) : i || 0
            } else if (i) {
                var o = In(e, n);
                return e[o] === n ? o : - 1
            }
            return t(e, n, i)
        }
        function wn(t, e, n) {
            var i = 0, r = t ? t.length: 0;
            if ("number" != typeof e && null != e) {
                var o = r;
                for (e = d.createCallback(e, n, 3); o--&&e(t[o], o, t);
                )i++
            } else 
                i = null == e || n ? 1 : e || i;
            return h(t, 0, Yi(Xi(0, r - i), r))
        }
        function bn() {
            for (var n = [], i =- 1, r = arguments.length, s = a(), u = ue(), h = u === t, p = a(); ++i < r;) {
                var f = arguments[i];
                (Zi(f) || pe(f)) && (n.push(f), s.push(h && f.length >= y && o(i ? n[i] : p)))
            }
            var d = n[0], g =- 1, m = d ? d.length : 0, v = [];
            t: for (; ++g < m;) {
                var w = s[0];
                if (f = d[g], (w ? e(w, f) : u(p, f)) < 0) {
                    for (i = r, (w || p).push(f); --i;)
                        if (w = s[i], (w ? e(w, f) : u(n[i], f)) < 0)
                            continue t;
                    v.push(f)
                }
            }
            for (; r--;)
                w = s[r], w && c(w);
            return l(s), l(p), v
        }
        function _n(t, e, n) {
            var i = 0, r = t ? t.length: 0;
            if ("number" != typeof e && null != e) {
                var o = r;
                for (e = d.createCallback(e, n, 3); o--&&e(t[o], o, t);
                )i++
            } else if (i = e, null == i || n)
                return t ? t[r - 1] : f;
            return h(t, Xi(0, r - i))
        }
        function xn(t, e, n) {
            var i = t ? t.length: 0;
            for ("number" == typeof n && (i = (0 > n ? Xi(0, i + n) : Yi(n, i - 1)) + 1); i--;)
                if (t[i] === e)
                    return i;
            return - 1
        }
        function Tn(t) {
            for (var e = arguments, n = 0, i = e.length, r = t ? t.length : 0; ++n < i;)
                for (var o =- 1, s = e[n]; ++o < r;)
                    t[o] === s && (Pi.call(t, o--, 1), r--);
            return t
        }
        function En(t, e, n) {
            t =+ t || 0, n = "number" == typeof n ? n : + n || 1, null == e && (e = t, t = 0);
            for (var i =- 1, r = Xi(0, Li((e - t) / (n || 1))), o = di(r); ++i < r;)
                o[i] = t, t += n;
            return o
        }
        function Cn(t, e, n) {
            var i =- 1, r = t ? t.length : 0, o = [];
            for (e = d.createCallback(e, n, 3); ++i < r;) {
                var s = t[i];
                e(s, i, t) && (o.push(s), Pi.call(t, i--, 1), r--)
            }
            return o
        }
        function Sn(t, e, n) {
            if ("number" != typeof e && null != e) {
                var i = 0, r =- 1, o = t ? t.length : 0;
                for (e = d.createCallback(e, n, 3); ++r < o && e(t[r], r, t);)
                    i++
            } else 
                i = null == e || n ? 1 : Xi(0, e);
            return h(t, i)
        }
        function In(t, e, n, i) {
            var r = 0, o = t ? t.length: r;
            for (n = n ? d.createCallback(n, i, 1) : Zn, e = n(e); o > r;) {
                var s = r + o>>>1;
                n(t[s]) < e ? r = s + 1 : o = s
            }
            return r
        }
        function kn() {
            return re(te(arguments, !0, !0))
        }
        function Ln(t, e, n, i) {
            return "boolean" != typeof e && null != e && (i = n, n = "function" != typeof e && i && i[e] === t ? null : e, e=!1), null != n && (n = d.createCallback(n, i, 3)), re(t, e, n)
        }
        function jn(t) {
            return Z(t, h(arguments, 1))
        }
        function Dn() {
            for (var t =- 1, e = arguments.length; ++t < e;) {
                var n = arguments[t];
                if (Zi(n) || pe(n))
                    var i = i ? re(Z(i, n).concat(Z(n, i))): n
            }
            return i || []
        }
        function Nn() {
            for (var t = arguments.length > 1 ? arguments : arguments[0], e =- 1, n = t ? tn(fr(t, "length")) : 0, i = di(0 > n ? 0 : n); ++e < n;)
                i[e] = fr(t, e);
            return i
        }
        function An(t, e) {
            var n =- 1, i = t ? t.length : 0, r = {};
            for (e ||!i || Zi(t[0]) || (e = []); ++n < i;) {
                var o = t[n];
                e ? r[o] = e[n] : o && (r[o[0]] = o[1])
            }
            return r
        }
        function On(t, e) {
            if (!Le(e))
                throw new Ti;
            return function() {
                return --t < 1 ? e.apply(this, arguments) : void 0
            }
        }
        function Mn(t, e) {
            return arguments.length > 2 ? se(t, 17, h(arguments, 2), null, e) : se(t, 1, null, null, e)
        }
        function zn(t) {
            for (var e = arguments.length > 1 ? te(arguments, !0, !1, 1) : be(t), n =- 1, i = e.length; ++n < i;) {
                var r = e[n];
                t[r] = se(t[r], 1, null, null, t)
            }
            return t
        }
        function Pn(t, e) {
            return arguments.length > 2 ? se(e, 19, h(arguments, 2), null, t) : se(e, 3, null, null, t)
        }
        function Rn() {
            for (var t = arguments, e = t.length; e--;)
                if (!Le(t[e]))
                    throw new Ti;
            return function() {
                for (var e = arguments, n = t.length; n--;)
                    e = [t[n].apply(this, e)];
                return e[0]
            }
        }
        function $n(t, e) {
            return e = "number" == typeof e ? e : + e || t.length, se(t, 4, null, null, null, e)
        }
        function Hn(t, e, n) {
            var i, r, o, s, a, u, l, c = 0, h=!1, p=!0;
            if (!Le(t))
                throw new Ti;
            if (e = Xi(0, e) || 0, n===!0) {
                var d=!0;
                p=!1
            } else 
                je(n) && (d = n.leading, h = "maxWait"in n && (Xi(e, n.maxWait) || 0), p = "trailing"in n ? n.trailing : p);
            var g = function() {
                var n = e - (gr() - s);
                if (0 >= n) {
                    r && ji(r);
                    var h = l;
                    r = u = l = f, h && (c = gr(), o = t.apply(a, i), u || r || (i = a = null))
                } else 
                    u = zi(g, n)
            }, m = function() {
                u && ji(u), r = u = l = f, (p || h !== e) && (c = gr(), o = t.apply(a, i), u || r || (i = a = null))
            };
            return function() {
                if (i = arguments, s = gr(), a = this, l = p && (u ||!d), h===!1)
                    var n = d&&!u;
                else {
                    r || d || (c = s);
                    var f = h - (s - c), v = 0 >= f;
                    v ? (r && (r = ji(r)), c = s, o = t.apply(a, i)) : r || (r = zi(m, f))
                }
                return v && u ? u = ji(u) : u || e === h || (u = zi(g, e)), n && (v=!0, o = t.apply(a, i)), !v || u || r || (i = a = null), o
            }
        }
        function qn(t) {
            if (!Le(t))
                throw new Ti;
            var e = h(arguments, 1);
            return zi(function() {
                t.apply(f, e)
            }, 1)
        }
        function Wn(t, e) {
            if (!Le(t))
                throw new Ti;
            var n = h(arguments, 2);
            return zi(function() {
                t.apply(f, n)
            }, e)
        }
        function Fn(t, e) {
            if (!Le(t))
                throw new Ti;
            var n = function() {
                var i = n.cache, r = e ? e.apply(this, arguments): v + arguments[0];
                return Oi.call(i, r) ? i[r] : i[r] = t.apply(this, arguments)
            };
            return n.cache = {}, n
        }
        function Bn(t) {
            var e, n;
            if (!Le(t))
                throw new Ti;
            return function() {
                return e ? n : (e=!0, n = t.apply(this, arguments), t = null, n)
            }
        }
        function Xn(t) {
            return se(t, 16, h(arguments, 1))
        }
        function Yn(t) {
            return se(t, 32, null, h(arguments, 1))
        }
        function Un(t, e, n) {
            var i=!0, r=!0;
            if (!Le(t))
                throw new Ti;
            return n===!1 ? i=!1 : je(n) && (i = "leading"in n ? n.leading : i, r = "trailing"in n ? n.trailing : r), B.leading = i, B.maxWait = e, B.trailing = r, Hn(t, e, B)
        }
        function Vn(t, e) {
            return se(e, 16, [t])
        }
        function Qn(t) {
            return function() {
                return t
            }
        }
        function Gn(t, e, n) {
            var i = typeof t;
            if (null == t || "function" == i)
                return G(t, e, n);
            if ("object" != i)
                return ni(t);
            var r = tr(t), o = r[0], s = t[o];
            return 1 != r.length || s !== s || je(s) ? function(e) {
                for (var n = r.length, i=!1; n--&&(i = ee(e[r[n]], t[r[n]], null, !0)););
                return i
            } : function(t) {
                var e = t[o];
                return s === e && (0 !== s || 1 / s == 1 / e)
            }
        }
        function Jn(t) {
            return null == t ? "" : xi(t).replace(rr, ae)
        }
        function Zn(t) {
            return t
        }
        function Kn(t, e, n) {
            var i=!0, r = e && be(e);
            e && (n || r.length) || (null == n && (n = e), o = g, e = t, t = d, r = be(e)), n===!1 ? i=!1 : je(n) && "chain"in n && (i = n.chain);
            var o = t, s = Le(o);
            Ge(r, function(n) {
                var r = t[n] = e[n];
                s && (o.prototype[n] = function() {
                    var e = this.__chain__, n = this.__wrapped__, s = [n];
                    Mi.apply(s, arguments);
                    var a = r.apply(t, s);
                    if (i || e) {
                        if (n === a && je(a))
                            return this;
                        a = new o(a), a.__chain__ = e
                    }
                    return a
                })
            })
        }
        function ti() {
            return n._ = Si, this
        }
        function ei() {}
        function ni(t) {
            return function(e) {
                return e[t]
            }
        }
        function ii(t, e, n) {
            var i = null == t, r = null == e;
            if (null == n && ("boolean" == typeof t && r ? (n = t, t = 1) : r || "boolean" != typeof e || (n = e, r=!0)), i && r && (e = 1), t =+ t || 0, r ? (e = t, t = 0) : e =+ e || 0, n || t%1 || e%1) {
                var o = Vi();
                return Yi(t + o * (e - t + parseFloat("1e-" + ((o + "").length - 1))), e)
            }
            return ie(t, e)
        }
        function ri(t, e) {
            if (t) {
                var n = t[e];
                return Le(n) ? t[e]() : n
            }
        }
        function oi(t, e, n) {
            var i = d.templateSettings;
            t = xi(t || ""), n = sr({}, n, i);
            var r, o = sr({}, n.imports, i.imports), a = tr(o), u = Fe(o), l = 0, c = n.interpolate || L, h = "__p += '", p = _i((n.escape || L).source + "|" + c.source + "|" + (c === I ? E : L).source + "|" + (n.evaluate || L).source + "|$", "g");
            t.replace(p, function(e, n, i, o, a, u) {
                return i || (i = o), h += t.slice(l, u).replace(D, s), n && (h += "' +\n__e(" + n + ") +\n'"), a && (r=!0, h += "';\n" + a + ";\n__p += '"), i && (h += "' +\n((__t = (" + i + ")) == null ? '' : __t) +\n'"), l = u + e.length, e
            }), h += "';\n";
            var g = n.variable, m = g;
            m || (g = "obj", h = "with (" + g + ") {\n" + h + "\n}\n"), h = (r ? h.replace(_, "") : h).replace(x, "$1").replace(T, "$1;"), h = "function(" + g + ") {\n" + (m ? "" : g + " || (" + g + " = {});\n") + "var __t, __p = '', __e = _.escape" + (r ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + h + "return __p\n}";
            var v = "\n/*\n//# sourceURL=" + (n.sourceURL || "/lodash/template/source[" + A++ + "]") + "\n*/";
            try {
                var y = vi(a, "return " + h + v).apply(f, u)
            } catch (w) {
                throw w.source = h, w
            }
            return e ? y(e) : (y.source = h, y)
        }
        function si(t, e, n) {
            t = (t =+ t)>-1 ? t : 0;
            var i =- 1, r = di(t);
            for (e = G(e, n, 1); ++i < t;)
                r[i] = e(i);
            return r
        }
        function ai(t) {
            return null == t ? "" : xi(t).replace(ir, he)
        }
        function ui(t) {
            var e=++m;
            return xi(null == t ? "" : t) + e
        }
        function li(t) {
            return t = new g(t), t.__chain__=!0, t
        }
        function ci(t, e) {
            return e(t), t
        }
        function hi() {
            return this.__chain__=!0, this
        }
        function pi() {
            return xi(this.__wrapped__)
        }
        function fi() {
            return this.__wrapped__
        }
        n = n ? K.defaults(V.Object(), n, K.pick(V, N)) : V;
        var di = n.Array, gi = n.Boolean, mi = n.Date, vi = n.Function, yi = n.Math, wi = n.Number, bi = n.Object, _i = n.RegExp, xi = n.String, Ti = n.TypeError, Ei = [], Ci = bi.prototype, Si = n._, Ii = Ci.toString, ki = _i("^" + xi(Ii).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/toString| for [^\]]+/g, ".*?") + "$"), Li = yi.ceil, ji = n.clearTimeout, Di = yi.floor, Ni = vi.prototype.toString, Ai = le(Ai = bi.getPrototypeOf) && Ai, Oi = Ci.hasOwnProperty, Mi = Ei.push, zi = n.setTimeout, Pi = Ei.splice, Ri = Ei.unshift, $i = function() {
            try {
                var t = {}, e = le(e = bi.defineProperty) && e, n = e(t, t, t) && e
            } catch (i) {}
            return n
        }(), Hi = le(Hi = bi.create) && Hi, qi = le(qi = di.isArray) && qi, Wi = n.isFinite, Fi = n.isNaN, Bi = le(Bi = bi.keys) && Bi, Xi = yi.max, Yi = yi.min, Ui = n.parseInt, Vi = yi.random, Qi = {};
        Qi[M] = di, Qi[z] = gi, Qi[P] = mi, Qi[R] = vi, Qi[H] = bi, Qi[$] = wi, Qi[q] = _i, Qi[W] = xi, g.prototype = d.prototype;
        var Gi = d.support = {};
        Gi.funcDecomp=!le(n.WinRTError) && j.test(p), Gi.funcNames = "string" == typeof vi.name, d.templateSettings = {
            escape: /<%-([\s\S]+?)%>/g,
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: I,
            variable: "",
            imports: {
                _: d
            }
        }, Hi || (Q = function() {
            function t() {}
            return function(e) {
                if (je(e)) {
                    t.prototype = e;
                    var i = new t;
                    t.prototype = null
                }
                return i || n.Object()
            }
        }());
        var Ji = $i ? function(t, e) {
            X.value = e, $i(t, "__bindData__", X)
        }
        : ei, Zi = qi || function(t) {
            return t && "object" == typeof t && "number" == typeof t.length && Ii.call(t) == M ||!1
        }, Ki = function(t) {
            var e, n = t, i = [];
            if (!n)
                return i;
            if (!Y[typeof t])
                return i;
            for (e in n)
                Oi.call(n, e) && i.push(e);
            return i
        }, tr = Bi ? function(t) {
            return je(t) ? Bi(t) : []
        }
        : Ki, er = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }, nr = xe(er), ir = _i("(" + tr(nr).join("|") + ")", "g"), rr = _i("[" + tr(er).join("") + "]", "g"), or = function(t, e, n) {
            var i, r = t, o = r;
            if (!r)
                return o;
            var s = arguments, a = 0, u = "number" == typeof n ? 2: s.length;
            if (u > 3 && "function" == typeof s[u - 2])
                var l = G(s[--u - 1], s[u--], 2);
            else 
                u > 2 && "function" == typeof s[u - 1] && (l = s[--u]);
            for (; ++a < u;)
                if (r = s[a], r && Y[typeof r])
                    for (var c =- 1, h = Y[typeof r] && tr(r), p = h ? h.length : 0; ++c < p;)
                        i = h[c], o[i] = l ? l(o[i], r[i]) : r[i];
            return o
        }, sr = function(t, e, n) {
            var i, r = t, o = r;
            if (!r)
                return o;
            for (var s = arguments, a = 0, u = "number" == typeof n ? 2 : s.length; ++a < u;)
                if (r = s[a], r && Y[typeof r])
                    for (var l =- 1, c = Y[typeof r] && tr(r), h = c ? c.length : 0; ++l < h;)
                        i = c[l], "undefined" == typeof o[i] && (o[i] = r[i]);
            return o
        }, ar = function(t, e, n) {
            var i, r = t, o = r;
            if (!r)
                return o;
            if (!Y[typeof r])
                return o;
            e = e && "undefined" == typeof n ? e : G(e, n, 3);
            for (i in r)
                if (e(r[i], i, t)===!1)
                    return o;
            return o
        }, ur = function(t, e, n) {
            var i, r = t, o = r;
            if (!r)
                return o;
            if (!Y[typeof r])
                return o;
            e = e && "undefined" == typeof n ? e : G(e, n, 3);
            for (var s =- 1, a = Y[typeof r] && tr(r), u = a ? a.length : 0; ++s < u;)
                if (i = a[s], e(r[i], i, t)===!1)
                    return o;
            return o
        }, lr = Ai ? function(t) {
            if (!t || Ii.call(t) != H)
                return !1;
            var e = t.valueOf, n = le(e) && (n = Ai(e)) && Ai(n);
            return n ? t == n || Ai(t) == n : ce(t)
        }
        : ce, cr = oe(function(t, e, n) {
            Oi.call(t, n) ? t[n]++ : t[n] = 1
        }), hr = oe(function(t, e, n) {
            (Oi.call(t, n) ? t[n] : t[n] = []).push(e)
        }), pr = oe(function(t, e, n) {
            t[n] = e
        }), fr = Ke, dr = Ue, gr = le(gr = mi.now) && gr || function() {
            return (new mi).getTime()
        }, mr = 8 == Ui(b + "08") ? Ui: function(t, e) {
            return Ui(Me(t) ? t.replace(k, "") : t, e || 0)
        };
        return d.after = On, d.assign = or, d.at = Be, d.bind = Mn, d.bindAll = zn, d.bindKey = Pn, d.chain = li, d.compact = pn, d.compose = Rn, d.constant = Qn, d.countBy = cr, d.create = ge, d.createCallback = Gn, d.curry = $n, d.debounce = Hn, d.defaults = sr, d.defer = qn, d.delay = Wn, d.difference = fn, d.filter = Ue, d.flatten = vn, d.forEach = Ge, d.forEachRight = Je, d.forIn = ar, d.forInRight = ye, d.forOwn = ur, d.forOwnRight = we, d.functions = be, d.groupBy = hr, d.indexBy = pr, d.initial = wn, d.intersection = bn, d.invert = xe, d.invoke = Ze, d.keys = tr, d.map = Ke, d.mapValues = Pe, d.max = tn, d.memoize = Fn, d.merge = Re, d.min = en, d.omit = $e, d.once = Bn, d.pairs = He, d.partial = Xn, d.partialRight = Yn, d.pick = qe, d.pluck = fr, d.property = ni, d.pull = Tn, d.range = En, d.reject = on, d.remove = Cn, d.rest = Sn, d.shuffle = an, d.sortBy = cn, d.tap = ci, d.throttle = Un, d.times = si, d.toArray = hn, d.transform = We, d.union = kn, d.uniq = Ln, d.values = Fe, d.where = dr, d.without = jn, d.wrap = Vn, d.xor = Dn, d.zip = Nn, d.zipObject = An, d.collect = Ke, d.drop = Sn, d.each = Ge, d.eachRight = Je, d.extend = or, d.methods = be, d.object = An, d.select = Ue, d.tail = Sn, d.unique = Ln, d.unzip = Nn, Kn(d), d.clone = fe, d.cloneDeep = de, d.contains = Xe, d.escape = Jn, d.every = Ye, d.find = Ve, d.findIndex = dn, d.findKey = me, d.findLast = Qe, d.findLastIndex = gn, d.findLastKey = ve, d.has = _e, d.identity = Zn, d.indexOf = yn, d.isArguments = pe, d.isArray = Zi, d.isBoolean = Te, d.isDate = Ee, d.isElement = Ce, d.isEmpty = Se, d.isEqual = Ie, d.isFinite = ke, d.isFunction = Le, d.isNaN = De, d.isNull = Ne, d.isNumber = Ae, d.isObject = je, d.isPlainObject = lr, d.isRegExp = Oe, d.isString = Me, d.isUndefined = ze, d.lastIndexOf = xn, d.mixin = Kn, d.noConflict = ti, d.noop = ei, d.now = gr, d.parseInt = mr, d.random = ii, d.reduce = nn, d.reduceRight = rn, d.result = ri, d.runInContext = p, d.size = un, d.some = ln, d.sortedIndex = In, d.template = oi, d.unescape = ai, d.uniqueId = ui, d.all = Ye, d.any = ln, d.detect = Ve, d.findWhere = Ve, d.foldl = nn, d.foldr = rn, d.include = Xe, d.inject = nn, Kn(function() {
            var t = {};
            return ur(d, function(e, n) {
                d.prototype[n] || (t[n] = e)
            }), t
        }(), !1), d.first = mn, d.last = _n, d.sample = sn, d.take = mn, d.head = mn, ur(d, function(t, e) {
            var n = "sample" !== e;
            d.prototype[e] || (d.prototype[e] = function(e, i) {
                var r = this.__chain__, o = t(this.__wrapped__, e, i);
                return r || null != e && (!i || n && "function" == typeof e) ? new g(o, r) : o
            })
        }), d.VERSION = "2.4.1", d.prototype.chain = hi, d.prototype.toString = pi, d.prototype.value = fi, d.prototype.valueOf = fi, Ge(["join", "pop", "shift"], function(t) {
            var e = Ei[t];
            d.prototype[t] = function() {
                var t = this.__chain__, n = e.apply(this.__wrapped__, arguments);
                return t ? new g(n, t) : n
            }
        }), Ge(["push", "reverse", "sort", "unshift"], function(t) {
            var e = Ei[t];
            d.prototype[t] = function() {
                return e.apply(this.__wrapped__, arguments), this
            }
        }), Ge(["concat", "slice", "splice"], function(t) {
            var e = Ei[t];
            d.prototype[t] = function() {
                return new g(e.apply(this.__wrapped__, arguments), this.__chain__)
            }
        }), d
    }
    var f, d = [], g = [], m = 0, v =+ new Date + "", y = 75, w = 40, b = " 	\f ﻿\n\r\u2028\u2029 ᠎             　", _ = /\b__p \+= '';/g, x = /\b(__p \+=) '' \+/g, T = /(__e\(.*?\)|\b__t\)) \+\n'';/g, E = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, C = /\w*$/, S = /^\s*function[ \n\r\t]+\w/, I = /<%=([\s\S]+?)%>/g, k = RegExp("^[" + b + "]*0+(?=.$)"), L = /($^)/, j = /\bthis\b/, D = /['\n\r\t\u2028\u2029\\]/g, N = ["Array", "Boolean", "Date", "Function", "Math", "Number", "Object", "RegExp", "String", "_", "attachEvent", "clearTimeout", "isFinite", "isNaN", "parseInt", "setTimeout"], A = 0, O = "[object Arguments]", M = "[object Array]", z = "[object Boolean]", P = "[object Date]", R = "[object Function]", $ = "[object Number]", H = "[object Object]", q = "[object RegExp]", W = "[object String]", F = {};
    F[R]=!1, F[O] = F[M] = F[z] = F[P] = F[$] = F[H] = F[q] = F[W]=!0;
    var B = {
        leading: !1,
        maxWait: 0,
        trailing: !1
    }, X = {
        configurable: !1,
        enumerable: !1,
        value: null,
        writable: !1
    }, Y = {
        "boolean": !1,
        "function": !0,
        object: !0,
        number: !1,
        string: !1,
        undefined: !1
    }, U = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "	": "t",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }, V = Y[typeof window] && window || this, Q = Y[typeof exports] && exports&&!exports.nodeType && exports, G = Y[typeof module] && module&&!module.nodeType && module, J = G && G.exports === Q && Q, Z = Y[typeof global] && global;
    !Z || Z.global !== Z && Z.window !== Z || (V = Z);
    var K = p();
    "function" == typeof define && "object" == typeof define.amd && define.amd ? (V._ = K, define(function() {
        return K
    })) : Q && G ? J ? (G.exports = K)._ = K : Q._ = K : V._ = K
}.call(this), function(t, e) {
    if ("function" == typeof define && define.amd)
        define(["underscore", "jquery", "exports"], function(n, i, r) {
            t.Backbone = e(t, r, n, i)
        });
    else if ("undefined" != typeof exports) {
        var n = require("underscore");
        e(t, exports, n)
    } else 
        t.Backbone = e(t, {}, t._, t.jQuery || t.Zepto || t.ender || t.$)
}(this, function(t, e, n, i) {
    {
        var r = t.Backbone, o = [], s = (o.push, o.slice);
        o.splice
    }
    e.VERSION = "1.1.2", e.$ = i, e.noConflict = function() {
        return t.Backbone = r, this
    }, e.emulateHTTP=!1, e.emulateJSON=!1;
    var a = e.Events = {
        on: function(t, e, n) {
            if (!l(this, "on", t, [e, n]) ||!e)
                return this;
            this._events || (this._events = {});
            var i = this._events[t] || (this._events[t] = []);
            return i.push({
                callback: e,
                context: n,
                ctx: n || this
            }), this
        },
        once: function(t, e, i) {
            if (!l(this, "once", t, [e, i]) ||!e)
                return this;
            var r = this, o = n.once(function() {
                r.off(t, o), e.apply(this, arguments)
            });
            return o._callback = e, this.on(t, o, i)
        },
        off: function(t, e, i) {
            var r, o, s, a, u, c, h, p;
            if (!this._events ||!l(this, "off", t, [e, i]))
                return this;
            if (!t&&!e&&!i)
                return this._events = void 0, this;
            for (a = t ? [t] : n.keys(this._events), u = 0, c = a.length; c > u; u++)
                if (t = a[u], s = this._events[t]) {
                    if (this._events[t] = r = [], e || i)
                        for (h = 0, p = s.length; p > h; h++)
                            o = s[h], (e && e !== o.callback && e !== o.callback._callback || i && i !== o.context) && r.push(o);
                            r.length || delete this._events[t]
                }
            return this
        },
        trigger: function(t) {
            if (!this._events)
                return this;
            var e = s.call(arguments, 1);
            if (!l(this, "trigger", t, e))
                return this;
            var n = this._events[t], i = this._events.all;
            return n && c(n, e), i && c(i, arguments), this
        },
        stopListening: function(t, e, i) {
            var r = this._listeningTo;
            if (!r)
                return this;
            var o=!e&&!i;
            i || "object" != typeof e || (i = this), t && ((r = {})[t._listenId] = t);
            for (var s in r)
                t = r[s], t.off(e, i, this), (o || n.isEmpty(t._events)) && delete this._listeningTo[s];
            return this
        }
    }, u = /\s+/, l = function(t, e, n, i) {
        if (!n)
            return !0;
        if ("object" == typeof n) {
            for (var r in n)
                t[e].apply(t, [r, n[r]].concat(i));
            return !1
        }
        if (u.test(n)) {
            for (var o = n.split(u), s = 0, a = o.length; a > s; s++)
                t[e].apply(t, [o[s]].concat(i));
            return !1
        }
        return !0
    }, c = function(t, e) {
        var n, i =- 1, r = t.length, o = e[0], s = e[1], a = e[2];
        switch (e.length) {
        case 0:
            for (; ++i < r;)(n = t[i])
                .callback.call(n.ctx);
            return;
        case 1:
            for (; ++i < r;)(n = t[i])
                .callback.call(n.ctx, o);
            return;
        case 2:
            for (; ++i < r;)(n = t[i])
                .callback.call(n.ctx, o, s);
            return;
        case 3:
            for (; ++i < r;)(n = t[i])
                .callback.call(n.ctx, o, s, a);
            return;
        default:
            for (; ++i < r;)(n = t[i])
                .callback.apply(n.ctx, e);
            return 
        }
    }, h = {
        listenTo: "on",
        listenToOnce: "once"
    };
    n.each(h, function(t, e) {
        a[e] = function(e, i, r) {
            var o = this._listeningTo || (this._listeningTo = {}), s = e._listenId || (e._listenId = n.uniqueId("l"));
            return o[s] = e, r || "object" != typeof i || (r = this), e[t](i, r, this), this
        }
    }), a.bind = a.on, a.unbind = a.off, n.extend(e, a);
    var p = e.Model = function(t, e) {
        var i = t || {};
        e || (e = {}), this.cid = n.uniqueId("c"), this.attributes = {}, e.collection && (this.collection = e.collection), e.parse && (i = this.parse(i, e) || {}), i = n.defaults({}, i, n.result(this, "defaults")), this.set(i, e), this.changed = {}, this.initialize.apply(this, arguments)
    };
    n.extend(p.prototype, a, {
        changed: null,
        validationError: null,
        idAttribute: "id",
        initialize: function() {},
        toJSON: function() {
            return n.clone(this.attributes)
        },
        sync: function() {
            return e.sync.apply(this, arguments)
        },
        get: function(t) {
            return this.attributes[t]
        },
        escape: function(t) {
            return n.escape(this.get(t))
        },
        has: function(t) {
            return null != this.get(t)
        },
        set: function(t, e, i) {
            var r, o, s, a, u, l, c, h;
            if (null == t)
                return this;
            if ("object" == typeof t ? (o = t, i = e) : (o = {})[t] = e, i || (i = {}), !this._validate(o, i))
                return !1;
            s = i.unset, u = i.silent, a = [], l = this._changing, this._changing=!0, l || (this._previousAttributes = n.clone(this.attributes), this.changed = {}), h = this.attributes, c = this._previousAttributes, this.idAttribute in o && (this.id = o[this.idAttribute]);
            for (r in o)
                e = o[r], n.isEqual(h[r], e) || a.push(r), n.isEqual(c[r], e) ? delete this.changed[r] : this.changed[r] = e, s ? delete h[r] : h[r] = e;
            if (!u) {
                a.length && (this._pending = i);
                for (var p = 0, f = a.length; f > p; p++)
                    this.trigger("change:" + a[p], this, h[a[p]], i)
            }
            if (l)
                return this;
            if (!u)
                for (; this._pending;)
                    i = this._pending, this._pending=!1, this.trigger("change", this, i);
            return this._pending=!1, this._changing=!1, this
        },
        unset: function(t, e) {
            return this.set(t, void 0, n.extend({}, e, {
                unset : !0
            }))
        },
        clear: function(t) {
            var e = {};
            for (var i in this.attributes)
                e[i] = void 0;
            return this.set(e, n.extend({}, t, {
                unset: !0
            }))
        },
        hasChanged: function(t) {
            return null == t?!n.isEmpty(this.changed) : n.has(this.changed, t)
        },
        changedAttributes: function(t) {
            if (!t)
                return this.hasChanged() ? n.clone(this.changed) : !1;
            var e, i=!1, r = this._changing ? this._previousAttributes : this.attributes;
            for (var o in t)
                n.isEqual(r[o], e = t[o]) || ((i || (i = {}))[o] = e);
            return i
        },
        previous: function(t) {
            return null != t && this._previousAttributes ? this._previousAttributes[t] : null
        },
        previousAttributes: function() {
            return n.clone(this._previousAttributes)
        },
        fetch: function(t) {
            t = t ? n.clone(t) : {}, void 0 === t.parse && (t.parse=!0);
            var e = this, i = t.success;
            return t.success = function(n) {
                return e.set(e.parse(n, t), t) ? (i && i(e, n, t), void e.trigger("sync", e, n, t)) : !1
            }, P(this, t), this.sync("read", this, t)
        },
        save: function(t, e, i) {
            var r, o, s, a = this.attributes;
            if (null == t || "object" == typeof t ? (r = t, i = e) : (r = {})[t] = e, i = n.extend({
                validate: !0
            }, i), r&&!i.wait) {
                if (!this.set(r, i))
                    return !1
            } else if (!this._validate(r, i))
                return !1;
            r && i.wait && (this.attributes = n.extend({}, a, r)), void 0 === i.parse && (i.parse=!0);
            var u = this, l = i.success;
            return i.success = function(t) {
                u.attributes = a;
                var e = u.parse(t, i);
                return i.wait && (e = n.extend(r || {}, e)), n.isObject(e)&&!u.set(e, i)?!1 : (l && l(u, t, i), void u.trigger("sync", u, t, i))
            }, P(this, i), o = this.isNew() ? "create" : i.patch ? "patch" : "update", "patch" === o && (i.attrs = r), s = this.sync(o, this, i), r && i.wait && (this.attributes = a), s
        },
        destroy: function(t) {
            t = t ? n.clone(t) : {};
            var e = this, i = t.success, r = function() {
                e.trigger("destroy", e, e.collection, t)
            };
            if (t.success = function(n) {
                (t.wait || e.isNew()) && r(), i && i(e, n, t), e.isNew() || e.trigger("sync", e, n, t)
            }, this.isNew())
                return t.success(), !1;
            P(this, t);
            var o = this.sync("delete", this, t);
            return t.wait || r(), o
        },
        url: function() {
            var t = n.result(this, "urlRoot") || n.result(this.collection, "url") || z();
            return this.isNew() ? t : t.replace(/([^\/])$/, "$1/") + encodeURIComponent(this.id)
        },
        parse: function(t) {
            return t
        },
        clone: function() {
            return new this.constructor(this.attributes)
        },
        isNew: function() {
            return !this.has(this.idAttribute)
        },
        isValid: function(t) {
            return this._validate({}, n.extend(t || {}, {
                validate: !0
            }))
        },
        _validate: function(t, e) {
            if (!e.validate ||!this.validate)
                return !0;
            t = n.extend({}, this.attributes, t);
            var i = this.validationError = this.validate(t, e) || null;
            return i ? (this.trigger("invalid", this, i, n.extend(e, {
                validationError: i
            })), !1) : !0
        }
    });
    var f = ["keys", "values", "pairs", "invert", "pick", "omit"];
    n.each(f, function(t) {
        p.prototype[t] = function() {
            var e = s.call(arguments);
            return e.unshift(this.attributes), n[t].apply(n, e)
        }
    });
    var d = e.Collection = function(t, e) {
        e || (e = {}), e.model && (this.model = e.model), void 0 !== e.comparator && (this.comparator = e.comparator), this._reset(), this.initialize.apply(this, arguments), t && this.reset(t, n.extend({
            silent: !0
        }, e))
    }, g = {
        add: !0,
        remove: !0,
        merge: !0
    }, m = {
        add: !0,
        remove: !1
    };
    n.extend(d.prototype, a, {
        model: p,
        initialize: function() {},
        toJSON: function(t) {
            return this.map(function(e) {
                return e.toJSON(t)
            })
        },
        sync: function() {
            return e.sync.apply(this, arguments)
        },
        add: function(t, e) {
            return this.set(t, n.extend({
                merge: !1
            }, e, m))
        },
        remove: function(t, e) {
            var i=!n.isArray(t);
            t = i ? [t] : n.clone(t), e || (e = {});
            var r, o, s, a;
            for (r = 0, o = t.length; o > r; r++)
                a = t[r] = this.get(t[r]), a && (delete this._byId[a.id], delete this._byId[a.cid], s = this.indexOf(a), this.models.splice(s, 1), this.length--, e.silent || (e.index = s, a.trigger("remove", a, this, e)), this._removeReference(a, e));
            return i ? t[0] : t
        },
        set: function(t, e) {
            e = n.defaults({}, e, g), e.parse && (t = this.parse(t, e));
            var i=!n.isArray(t);
            t = i ? t ? [t] : [] : n.clone(t);
            var r, o, s, a, u, l, c, h = e.at, f = this.model, d = this.comparator && null == h && e.sort!==!1, m = n.isString(this.comparator) ? this.comparator: null, v = [], y = [], w = {}, b = e.add, _ = e.merge, x = e.remove, T=!d && b && x ? [] : !1;
            for (r = 0, o = t.length; o > r; r++) {
                if (u = t[r] || {}, s = u instanceof p ? a = u : u[f.prototype.idAttribute || "id"], l = this.get(s))
                    x && (w[l.cid]=!0), _ && (u = u === a ? a.attributes : u, e.parse && (u = l.parse(u, e)), l.set(u, e), d&&!c && l.hasChanged(m) && (c=!0)), t[r] = l;
                else if (b) {
                    if (a = t[r] = this._prepareModel(u, e), !a)
                        continue;
                    v.push(a), this._addReference(a, e)
                }
                a = l || a, !T ||!a.isNew() && w[a.id] || T.push(a), w[a.id]=!0
            }
            if (x) {
                for (r = 0, o = this.length; o > r; ++r)
                    w[(a = this.models[r]).cid] || y.push(a);
                y.length && this.remove(y, e)
            }
            if (v.length || T && T.length)
                if (d && (c=!0), this.length += v.length, null != h)
                    for (r = 0, o = v.length; o > r; r++)
                        this.models.splice(h + r, 0, v[r]);
                else {
                    T && (this.models.length = 0);
                    var E = T || v;
                    for (r = 0, o = E.length; o > r; r++)
                        this.models.push(E[r])
                }
            if (c && this.sort({
                silent: !0
            }), !e.silent) {
                for (r = 0, o = v.length; o > r; r++)(a = v[r])
                    .trigger("add", a, this, e);
                (c || T && T.length) && this.trigger("sort", this, e)
            }
            return i ? t[0] : t
        },
        reset: function(t, e) {
            e || (e = {});
            for (var i = 0, r = this.models.length; r > i; i++)
                this._removeReference(this.models[i], e);
            return e.previousModels = this.models, this._reset(), t = this.add(t, n.extend({
                silent: !0
            }, e)), e.silent || this.trigger("reset", this, e), t
        },
        push: function(t, e) {
            return this.add(t, n.extend({
                at: this.length
            }, e))
        },
        pop: function(t) {
            var e = this.at(this.length - 1);
            return this.remove(e, t), e
        },
        unshift: function(t, e) {
            return this.add(t, n.extend({
                at: 0
            }, e))
        },
        shift: function(t) {
            var e = this.at(0);
            return this.remove(e, t), e
        },
        slice: function() {
            return s.apply(this.models, arguments)
        },
        get: function(t) {
            return null == t ? void 0 : this._byId[t] || this._byId[t.id] || this._byId[t.cid]
        },
        at: function(t) {
            return this.models[t]
        },
        where: function(t, e) {
            return n.isEmpty(t) ? e ? void 0 : [] : this[e ? "find": "filter"](function(e) {
                for (var n in t)
                    if (t[n] !== e.get(n))
                        return !1;
                return !0
            })
        },
        findWhere: function(t) {
            return this.where(t, !0)
        },
        sort: function(t) {
            if (!this.comparator)
                throw new Error("Cannot sort a set without a comparator");
            return t || (t = {}), n.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(n.bind(this.comparator, this)), t.silent || this.trigger("sort", this, t), this
        },
        pluck: function(t) {
            return n.invoke(this.models, "get", t)
        },
        fetch: function(t) {
            t = t ? n.clone(t) : {}, void 0 === t.parse && (t.parse=!0);
            var e = t.success, i = this;
            return t.success = function(n) {
                var r = t.reset ? "reset": "set";
                i[r](n, t), e && e(i, n, t), i.trigger("sync", i, n, t)
            }, P(this, t), this.sync("read", this, t)
        },
        create: function(t, e) {
            if (e = e ? n.clone(e) : {}, !(t = this._prepareModel(t, e)))
                return !1;
            e.wait || this.add(t, e);
            var i = this, r = e.success;
            return e.success = function(t, n) {
                e.wait && i.add(t, e), r && r(t, n, e)
            }, t.save(null, e), t
        },
        parse: function(t) {
            return t
        },
        clone: function() {
            return new this.constructor(this.models)
        },
        _reset: function() {
            this.length = 0, this.models = [], this._byId = {}
        },
        _prepareModel: function(t, e) {
            if (t instanceof p)
                return t;
            e = e ? n.clone(e) : {}, e.collection = this;
            var i = new this.model(t, e);
            return i.validationError ? (this.trigger("invalid", this, i.validationError, e), !1) : i
        },
        _addReference: function(t) {
            this._byId[t.cid] = t, null != t.id && (this._byId[t.id] = t), t.collection || (t.collection = this), t.on("all", this._onModelEvent, this)
        },
        _removeReference: function(t) {
            this === t.collection && delete t.collection, t.off("all", this._onModelEvent, this)
        },
        _onModelEvent: function(t, e, n, i) {
            ("add" !== t && "remove" !== t || n === this) && ("destroy" === t && this.remove(e, i), e && t === "change:" + e.idAttribute && (delete this._byId[e.previous(e.idAttribute)], null != e.id && (this._byId[e.id] = e)), this.trigger.apply(this, arguments))
        }
    });
    var v = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain", "sample"];
    n.each(v, function(t) {
        d.prototype[t] = function() {
            var e = s.call(arguments);
            return e.unshift(this.models), n[t].apply(n, e)
        }
    });
    var y = ["groupBy", "countBy", "sortBy", "indexBy"];
    n.each(y, function(t) {
        d.prototype[t] = function(e, i) {
            var r = n.isFunction(e) ? e: function(t) {
                return t.get(e)
            };
            return n[t](this.models, r, i)
        }
    });
    var w = e.View = function(t) {
        this.cid = n.uniqueId("view"), t || (t = {}), n.extend(this, n.pick(t, _)), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
    }, b = /^(\S+)\s*(.*)$/, _ = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
    n.extend(w.prototype, a, {
        tagName: "div",
        $: function(t) {
            return this.$el.find(t)
        },
        initialize: function() {},
        render: function() {
            return this
        },
        remove: function() {
            return this.$el.remove(), this.stopListening(), this
        },
        setElement: function(t, n) {
            return this.$el && this.undelegateEvents(), this.$el = t instanceof e.$ ? t : e.$(t), this.el = this.$el[0], n!==!1 && this.delegateEvents(), this
        },
        delegateEvents: function(t) {
            if (!t&&!(t = n.result(this, "events")))
                return this;
            this.undelegateEvents();
            for (var e in t) {
                var i = t[e];
                if (n.isFunction(i) || (i = this[t[e]]), i) {
                    var r = e.match(b), o = r[1], s = r[2];
                    i = n.bind(i, this), o += ".delegateEvents" + this.cid, "" === s ? this.$el.on(o, i) : this.$el.on(o, s, i)
                }
            }
            return this
        },
        undelegateEvents: function() {
            return this.$el.off(".delegateEvents" + this.cid), this
        },
        _ensureElement: function() {
            if (this.el)
                this.setElement(n.result(this, "el"), !1);
            else {
                var t = n.extend({}, n.result(this, "attributes"));
                this.id && (t.id = n.result(this, "id")), this.className && (t["class"] = n.result(this, "className"));
                var i = e.$("<" + n.result(this, "tagName") + ">").attr(t);
                this.setElement(i, !1)
            }
        }
    }), e.sync = function(t, i, r) {
        var o = T[t];
        n.defaults(r || (r = {}), {
            emulateHTTP: e.emulateHTTP,
            emulateJSON: e.emulateJSON
        });
        var s = {
            type: o,
            dataType: "json"
        };
        if (r.url || (s.url = n.result(i, "url") || z()), null != r.data ||!i || "create" !== t && "update" !== t && "patch" !== t || (s.contentType = "application/json", s.data = JSON.stringify(r.attrs || i.toJSON(r))), r.emulateJSON && (s.contentType = "application/x-www-form-urlencoded", s.data = s.data ? {
            model: s.data
        } : {}), r.emulateHTTP && ("PUT" === o || "DELETE" === o || "PATCH" === o)) {
            s.type = "POST", r.emulateJSON && (s.data._method = o);
            var a = r.beforeSend;
            r.beforeSend = function(t) {
                return t.setRequestHeader("X-HTTP-Method-Override", o), a ? a.apply(this, arguments) : void 0
            }
        }
        "GET" === s.type || r.emulateJSON || (s.processData=!1), "PATCH" === s.type && x && (s.xhr = function() {
            return new ActiveXObject("Microsoft.XMLHTTP")
        });
        var u = r.xhr = e.ajax(n.extend(s, r));
        return i.trigger("request", i, u, r), u
    };
    var x=!("undefined" == typeof window ||!window.ActiveXObject || window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent), T = {
        create: "POST",
        update: "PUT",
        patch: "PATCH",
        "delete": "DELETE",
        read: "GET"
    };
    e.ajax = function() {
        return e.$.ajax.apply(e.$, arguments)
    };
    var E = e.Router = function(t) {
        t || (t = {}), t.routes && (this.routes = t.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
    }, C = /\((.*?)\)/g, S = /(\(\?)?:\w+/g, I = /\*\w+/g, k = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    n.extend(E.prototype, a, {
        initialize: function() {},
        route: function(t, i, r) {
            n.isRegExp(t) || (t = this._routeToRegExp(t)), n.isFunction(i) && (r = i, i = ""), r || (r = this[i]);
            var o = this;
            return e.history.route(t, function(n) {
                var s = o._extractParameters(t, n);
                o.execute(r, s), o.trigger.apply(o, ["route:" + i].concat(s)), o.trigger("route", i, s), e.history.trigger("route", o, i, s)
            }), this
        },
        execute: function(t, e) {
            t && t.apply(this, e)
        },
        navigate: function(t, n) {
            return e.history.navigate(t, n), this
        },
        _bindRoutes: function() {
            if (this.routes) {
                this.routes = n.result(this, "routes");
                for (var t, e = n.keys(this.routes); null != (t = e.pop());)
                    this.route(t, this.routes[t])
            }
        },
        _routeToRegExp: function(t) {
            return t = t.replace(k, "\\$&").replace(C, "(?:$1)?").replace(S, function(t, e) {
                return e ? t : "([^/?]+)"
            }).replace(I, "([^?]*?)"), new RegExp("^" + t + "(?:\\?([\\s\\S]*))?$")
        },
        _extractParameters: function(t, e) {
            var i = t.exec(e).slice(1);
            return n.map(i, function(t, e) {
                return e === i.length - 1 ? t || null : t ? decodeURIComponent(t) : null
            })
        }
    });
    var L = e.History = function() {
        this.handlers = [], n.bindAll(this, "checkUrl"), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
    }, j = /^[#\/]|\s+$/g, D = /^\/+|\/+$/g, N = /msie [\w.]+/, A = /\/$/, O = /#.*$/;
    L.started=!1, n.extend(L.prototype, a, {
        interval: 50,
        atRoot: function() {
            return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root
        },
        getHash: function(t) {
            var e = (t || this).location.href.match(/#(.*)$/);
            return e ? e[1] : ""
        },
        getFragment: function(t, e) {
            if (null == t)
                if (this._hasPushState ||!this._wantsHashChange || e) {
                    t = decodeURI(this.location.pathname + this.location.search);
                    var n = this.root.replace(A, "");
                    t.indexOf(n) || (t = t.slice(n.length))
                } else 
                    t = this.getHash();
            return t.replace(j, "")
        },
        start: function(t) {
            if (L.started)
                throw new Error("Backbone.history has already been started");
            L.started=!0, this.options = n.extend({
                root: "/"
            }, this.options, t), this.root = this.options.root, this._wantsHashChange = this.options.hashChange!==!1, this._wantsPushState=!!this.options.pushState, this._hasPushState=!!(this.options.pushState && this.history && this.history.pushState);
            var i = this.getFragment(), r = document.documentMode, o = N.exec(navigator.userAgent.toLowerCase()) && (!r || 7 >= r);
            if (this.root = ("/" + this.root + "/").replace(D, "/"), o && this._wantsHashChange) {
                var s = e.$('<iframe src="javascript:0" tabindex="-1">');
                this.iframe = s.hide().appendTo("body")[0].contentWindow, this.navigate(i)
            }
            this._hasPushState ? e.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange"in window&&!o ? e.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = i;
            var a = this.location;
            if (this._wantsHashChange && this._wantsPushState) {
                if (!this._hasPushState&&!this.atRoot())
                    return this.fragment = this.getFragment(null, !0), this.location.replace(this.root + "#" + this.fragment), !0;
                this._hasPushState && this.atRoot() && a.hash && (this.fragment = this.getHash().replace(j, ""), this.history.replaceState({}, document.title, this.root + this.fragment))
            }
            return this.options.silent ? void 0 : this.loadUrl()
        },
        stop: function() {
            e.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), this._checkUrlInterval && clearInterval(this._checkUrlInterval), L.started=!1
        },
        route: function(t, e) {
            this.handlers.unshift({
                route: t,
                callback: e
            })
        },
        checkUrl: function() {
            var t = this.getFragment();
            return t === this.fragment && this.iframe && (t = this.getFragment(this.getHash(this.iframe))), t === this.fragment?!1 : (this.iframe && this.navigate(t), void this.loadUrl())
        },
        loadUrl: function(t) {
            return t = this.fragment = this.getFragment(t), n.any(this.handlers, function(e) {
                return e.route.test(t) ? (e.callback(t), !0) : void 0
            })
        },
        navigate: function(t, e) {
            if (!L.started)
                return !1;
            e && e!==!0 || (e = {
                trigger: !!e
            });
            var n = this.root + (t = this.getFragment(t || ""));
            if (t = t.replace(O, ""), this.fragment !== t) {
                if (this.fragment = t, "" === t && "/" !== n && (n = n.slice(0, - 1)), this._hasPushState)
                    this.history[e.replace ? "replaceState": "pushState"]({}, document.title, n);
                else {
                    if (!this._wantsHashChange)
                        return this.location.assign(n);
                    this._updateHash(this.location, t, e.replace), this.iframe && t !== this.getFragment(this.getHash(this.iframe)) && (e.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, t, e.replace))
                }
                return e.trigger ? this.loadUrl(t) : void 0
            }
        },
        _updateHash: function(t, e, n) {
            if (n) {
                var i = t.href.replace(/(javascript:|#).*$/, "");
                t.replace(i + "#" + e)
            } else 
                t.hash = "#" + e
        }
    }), e.history = new L;
    var M = function(t, e) {
        var i, r = this;
        i = t && n.has(t, "constructor") ? t.constructor : function() {
            return r.apply(this, arguments)
        }, n.extend(i, r, e);
        var o = function() {
            this.constructor = i
        };
        return o.prototype = r.prototype, i.prototype = new o, t && n.extend(i.prototype, t), i.__super__ = r.prototype, i
    };
    p.extend = d.extend = E.extend = w.extend = L.extend = M;
    var z = function() {
        throw new Error('A "url" property or function must be specified')
    }, P = function(t, e) {
        var n = e.error;
        e.error = function(i) {
            n && n(t, i, e), t.trigger("error", t, i, e)
        }
    };
    return e
}), function(t) {
    "use strict";
    function e(t) {
        if (t) {
            if ("string" == typeof i[t])
                return t;
            t = t.charAt(0).toUpperCase() + t.slice(1);
            for (var e, r = 0, o = n.length; o > r; r++)
                if (e = n[r] + t, "string" == typeof i[e])
                    return e
        }
    }
    var n = "Webkit Moz ms Ms O".split(" "), i = document.documentElement.style;
    "function" == typeof define && define.amd ? define(function() {
        return e
    }) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e
}(window), function(t) {
    "use strict";
    function e(t) {
        var e = parseFloat(t), n =- 1 === t.indexOf("%")&&!isNaN(e);
        return n && e
    }
    function n() {
        for (var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        }, e = 0, n = s.length; n > e; e++) {
            var i = s[e];
            t[i] = 0
        }
        return t
    }
    function i(t) {
        function i(t) {
            if ("string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
                var i = o(t);
                if ("none" === i.display)
                    return n();
                var r = {};
                r.width = t.offsetWidth, r.height = t.offsetHeight;
                for (var c = r.isBorderBox=!(!l ||!i[l] || "border-box" !== i[l]), h = 0, p = s.length; p > h; h++) {
                    var f = s[h], d = i[f];
                    d = a(t, d);
                    var g = parseFloat(d);
                    r[f] = isNaN(g) ? 0 : g
                }
                var m = r.paddingLeft + r.paddingRight, v = r.paddingTop + r.paddingBottom, y = r.marginLeft + r.marginRight, w = r.marginTop + r.marginBottom, b = r.borderLeftWidth + r.borderRightWidth, _ = r.borderTopWidth + r.borderBottomWidth, x = c && u, T = e(i.width);
                T!==!1 && (r.width = T + (x ? 0 : m + b));
                var E = e(i.height);
                return E!==!1 && (r.height = E + (x ? 0 : v + _)), r.innerWidth = r.width - (m + b), r.innerHeight = r.height - (v + _), r.outerWidth = r.width + y, r.outerHeight = r.height + w, r
            }
        }
        function a(t, e) {
            if (r||-1 === e.indexOf("%"))
                return e;
            var n = t.style, i = n.left, o = t.runtimeStyle, s = o && o.left;
            return s && (o.left = t.currentStyle.left), n.left = e, e = n.pixelLeft, n.left = i, s && (o.left = s), e
        }
        var u, l = t("boxSizing");
        return function() {
            if (l) {
                var t = document.createElement("div");
                t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style[l] = "border-box";
                var n = document.body || document.documentElement;
                n.appendChild(t);
                var i = o(t);
                u = 200 === e(i.width), n.removeChild(t)
            }
        }(), i
    }
    var r = t.getComputedStyle, o = r ? function(t) {
        return r(t, null)
    }
    : function(t) {
        return t.currentStyle
    }, s = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
    "function" == typeof define && define.amd ? define(["get-style-property/get-style-property"], i) : "object" == typeof exports ? module.exports = i(require("get-style-property")) : t.getSize = i(t.getStyleProperty)
}(window), function(t) {
    "use strict";
    function e(t, e) {
        return t[s](e)
    }
    function n(t) {
        if (!t.parentNode) {
            var e = document.createDocumentFragment();
            e.appendChild(t)
        }
    }
    function i(t, e) {
        n(t);
        for (var i = t.parentNode.querySelectorAll(e), r = 0, o = i.length; o > r; r++)
            if (i[r] === t)
                return !0;
        return !1
    }
    function r(t, i) {
        return n(t), e(t, i)
    }
    var o, s = function() {
        if (t.matchesSelector)
            return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], n = 0, i = e.length; i > n; n++) {
            var r = e[n], o = r + "MatchesSelector";
            if (t[o])
                return o
        }
    }();
    if (s) {
        var a = document.createElement("div"), u = e(a, "div");
        o = u ? e : r
    } else 
        o = i;
    "function" == typeof define && define.amd ? define(function() {
        return o
    }) : "object" == typeof exports ? module.exports = o : window.matchesSelector = o
}(Element.prototype), function(t) {
    "use strict";
    function e(e) {
        var n = t.event;
        return n.target = n.target || n.srcElement || e, n
    }
    var n = document.documentElement, i = function() {};
    n.addEventListener ? i = function(t, e, n) {
        t.addEventListener(e, n, !1)
    } : n.attachEvent && (i = function(t, n, i) {
        t[n + i] = i.handleEvent ? function() {
            var n = e(t);
            i.handleEvent.call(i, n)
        } : function() {
            var n = e(t);
            i.call(t, n)
        }, t.attachEvent("on" + n, t[n + i])
    });
    var r = function() {};
    n.removeEventListener ? r = function(t, e, n) {
        t.removeEventListener(e, n, !1)
    } : n.detachEvent && (r = function(t, e, n) {
        t.detachEvent("on" + e, t[e + n]);
        try {
            delete t[e + n]
        } catch (i) {
            t[e + n] = void 0
        }
    });
    var o = {
        bind: i,
        unbind: r
    };
    "function" == typeof define && define.amd ? define(o) : "object" == typeof exports ? module.exports = o : t.eventie = o
}(this), function(t) {
    "use strict";
    function e(t) {
        "function" == typeof t && (e.isReady ? t() : o.push(t))
    }
    function n(t) {
        var n = "readystatechange" === t.type && "complete" !== r.readyState;
        if (!e.isReady&&!n) {
            e.isReady=!0;
            for (var i = 0, s = o.length; s > i; i++) {
                var a = o[i];
                a()
            }
        }
    }
    function i(i) {
        return i.bind(r, "DOMContentLoaded", n), i.bind(r, "readystatechange", n), i.bind(t, "load", n), e
    }
    var r = t.document, o = [];
    e.isReady=!1, "function" == typeof define && define.amd ? (e.isReady = "function" == typeof requirejs, define(["eventie/eventie"], i)) : "object" == typeof exports ? module.exports = i(require("eventie")) : t.docReady = i(t.eventie)
}(window), function() {
    "use strict";
    function t() {}
    function e(t, e) {
        for (var n = t.length; n--;)
            if (t[n].listener === e)
                return n;
        return - 1
    }
    function n(t) {
        return function() {
            return this[t].apply(this, arguments)
        }
    }
    var i = t.prototype, r = this, o = r.EventEmitter;
    i.getListeners = function(t) {
        var e, n, i = this._getEvents();
        if (t instanceof RegExp) {
            e = {};
            for (n in i)
                i.hasOwnProperty(n) && t.test(n) && (e[n] = i[n])
        } else 
            e = i[t] || (i[t] = []);
        return e
    }, i.flattenListeners = function(t) {
        var e, n = [];
        for (e = 0; e < t.length; e += 1)
            n.push(t[e].listener);
        return n
    }, i.getListenersAsObject = function(t) {
        var e, n = this.getListeners(t);
        return n instanceof Array && (e = {}, e[t] = n), e || n
    }, i.addListener = function(t, n) {
        var i, r = this.getListenersAsObject(t), o = "object" == typeof n;
        for (i in r)
            r.hasOwnProperty(i)&&-1 === e(r[i], n) && r[i].push(o ? n : {
                listener: n,
                once: !1
            });
        return this
    }, i.on = n("addListener"), i.addOnceListener = function(t, e) {
        return this.addListener(t, {
            listener: e,
            once: !0
        })
    }, i.once = n("addOnceListener"), i.defineEvent = function(t) {
        return this.getListeners(t), this
    }, i.defineEvents = function(t) {
        for (var e = 0; e < t.length; e += 1)
            this.defineEvent(t[e]);
        return this
    }, i.removeListener = function(t, n) {
        var i, r, o = this.getListenersAsObject(t);
        for (r in o)
            o.hasOwnProperty(r) && (i = e(o[r], n), - 1 !== i && o[r].splice(i, 1));
        return this
    }, i.off = n("removeListener"), i.addListeners = function(t, e) {
        return this.manipulateListeners(!1, t, e)
    }, i.removeListeners = function(t, e) {
        return this.manipulateListeners(!0, t, e)
    }, i.manipulateListeners = function(t, e, n) {
        var i, r, o = t ? this.removeListener: this.addListener, s = t ? this.removeListeners: this.addListeners;
        if ("object" != typeof e || e instanceof RegExp)
            for (i = n.length; i--;)
                o.call(this, e, n[i]);
        else 
            for (i in e)
                e.hasOwnProperty(i) && (r = e[i]) && ("function" == typeof r ? o.call(this, i, r) : s.call(this, i, r));
        return this
    }, i.removeEvent = function(t) {
        var e, n = typeof t, i = this._getEvents();
        if ("string" === n)
            delete i[t];
        else if (t instanceof RegExp)
            for (e in i)
                i.hasOwnProperty(e) && t.test(e) && delete i[e];
        else 
            delete this._events;
        return this
    }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function(t, e) {
        var n, i, r, o, s = this.getListenersAsObject(t);
        for (r in s)
            if (s.hasOwnProperty(r))
                for (i = s[r].length; i--;)
                    n = s[r][i], n.once===!0 && this.removeListener(t, n.listener), o = n.listener.apply(this, e || []), o === this._getOnceReturnValue() && this.removeListener(t, n.listener);
        return this
    }, i.trigger = n("emitEvent"), i.emit = function(t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(t, e)
    }, i.setOnceReturnValue = function(t) {
        return this._onceReturnValue = t, this
    }, i._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, i._getEvents = function() {
        return this._events || (this._events = {})
    }, t.noConflict = function() {
        return r.EventEmitter = o, t
    }, "function" == typeof define && define.amd ? define(function() {
        return t
    }) : "object" == typeof module && module.exports ? module.exports = t : this.EventEmitter = t
}.call(this), function(t) {
    "use strict";
    function e() {}
    function n(t) {
        function n(e) {
            e.prototype.option || (e.prototype.option = function(e) {
                t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
            })
        }
        function r(e, n) {
            t.fn[e] = function(r) {
                if ("string" == typeof r) {
                    for (var s = i.call(arguments, 1), a = 0, u = this.length; u > a; a++) {
                        var l = this[a], c = t.data(l, e);
                        if (c)
                            if (t.isFunction(c[r]) && "_" !== r.charAt(0)) {
                                var h = c[r].apply(c, s);
                                if (void 0 !== h)
                                    return h
                            } else 
                                o("no such method '" + r + "' for " + e + " instance");
                            else 
                                o("cannot call methods on " + e + " prior to initialization; attempted to call '" + r + "'")
                            }
                    return this
                }
                return this.each(function() {
                    var i = t.data(this, e);
                    i ? (i.option(r), i._init()) : (i = new n(this, r), t.data(this, e, i))
                })
            }
        }
        if (t) {
            var o = "undefined" == typeof console ? e: function(t) {
                console.error(t)
            };
            return t.bridget = function(t, e) {
                n(e), r(t, e)
            }, t.bridget
        }
    }
    var i = Array.prototype.slice;
    "function" == typeof define && define.amd ? define(["jquery"], n) : n(t.jQuery)
}(window), function(t) {
    "use strict";
    function e(t, e) {
        for (var n in e)
            t[n] = e[n];
        return t
    }
    function n(t) {
        for (var e in t)
            return !1;
        return e = null, !0
    }
    function i(t) {
        return t.replace(/([A-Z])/g, function(t) {
            return "-" + t.toLowerCase()
        })
    }
    function r(t, r, o) {
        function a(t, e) {
            t && (this.element = t, this.layout = e, this.position = {
                x: 0,
                y: 0
            }, this._create())
        }
        var u = o("transition"), l = o("transform"), c = u && l, h=!!o("perspective"), p = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "otransitionend",
            transition: "transitionend"
        }
        [u], f = ["transform", "transition", "transitionDuration", "transitionProperty"], d = function() {
            for (var t = {}, e = 0, n = f.length; n > e; e++) {
                var i = f[e], r = o(i);
                r && r !== i && (t[i] = r)
            }
            return t
        }();
        e(a.prototype, t.prototype), a.prototype._create = function() {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            }, this.css({
                position: "absolute"
            })
        }, a.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, a.prototype.getSize = function() {
            this.size = r(this.element)
        }, a.prototype.css = function(t) {
            var e = this.element.style;
            for (var n in t) {
                var i = d[n] || n;
                e[i] = t[n]
            }
        }, a.prototype.getPosition = function() {
            var t = s(this.element), e = this.layout.options, n = e.isOriginLeft, i = e.isOriginTop, r = parseInt(t[n ? "left": "right"], 10), o = parseInt(t[i ? "top": "bottom"], 10);
            r = isNaN(r) ? 0 : r, o = isNaN(o) ? 0 : o;
            var a = this.layout.size;
            r -= n ? a.paddingLeft : a.paddingRight, o -= i ? a.paddingTop : a.paddingBottom, this.position.x = r, this.position.y = o
        }, a.prototype.layoutPosition = function() {
            var t = this.layout.size, e = this.layout.options, n = {};
            e.isOriginLeft ? (n.left = this.position.x + t.paddingLeft + "px", n.right = "") : (n.right = this.position.x + t.paddingRight + "px", n.left = ""), e.isOriginTop ? (n.top = this.position.y + t.paddingTop + "px", n.bottom = "") : (n.bottom = this.position.y + t.paddingBottom + "px", n.top = ""), this.css(n), this.emitEvent("layout", [this])
        };
        var g = h ? function(t, e) {
            return "translate3d(" + t + "px, " + e + "px, 0)"
        }
        : function(t, e) {
            return "translate(" + t + "px, " + e + "px)"
        };
        a.prototype._transitionTo = function(t, e) {
            this.getPosition();
            var n = this.position.x, i = this.position.y, r = parseInt(t, 10), o = parseInt(e, 10), s = r === this.position.x && o === this.position.y;
            if (this.setPosition(t, e), s&&!this.isTransitioning)
                return void this.layoutPosition();
            var a = t - n, u = e - i, l = {}, c = this.layout.options;
            a = c.isOriginLeft ? a : - a, u = c.isOriginTop ? u : - u, l.transform = g(a, u), this.transition({
                to: l,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        }, a.prototype.goTo = function(t, e) {
            this.setPosition(t, e), this.layoutPosition()
        }, a.prototype.moveTo = c ? a.prototype._transitionTo : a.prototype.goTo, a.prototype.setPosition = function(t, e) {
            this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
        }, a.prototype._nonTransition = function(t) {
            this.css(t.to), t.isCleaning && this._removeStyles(t.to);
            for (var e in t.onTransitionEnd)
                t.onTransitionEnd[e].call(this)
        }, a.prototype._transition = function(t) {
            if (!parseFloat(this.layout.options.transitionDuration))
                return void this._nonTransition(t);
            var e = this._transn;
            for (var n in t.onTransitionEnd)
                e.onEnd[n] = t.onTransitionEnd[n];
            for (n in t.to)
                e.ingProperties[n]=!0, t.isCleaning && (e.clean[n]=!0);
            if (t.from) {
                this.css(t.from);
                var i = this.element.offsetHeight;
                i = null
            }
            this.enableTransition(t.to), this.css(t.to), this.isTransitioning=!0
        };
        var m = l && i(l) + ",opacity";
        a.prototype.enableTransition = function() {
            this.isTransitioning || (this.css({
                transitionProperty: m,
                transitionDuration: this.layout.options.transitionDuration
            }), this.element.addEventListener(p, this, !1))
        }, a.prototype.transition = a.prototype[u ? "_transition": "_nonTransition"], a.prototype.onwebkitTransitionEnd = function(t) {
            this.ontransitionend(t)
        }, a.prototype.onotransitionend = function(t) {
            this.ontransitionend(t)
        };
        var v = {
            "-webkit-transform": "transform",
            "-moz-transform": "transform",
            "-o-transform": "transform"
        };
        a.prototype.ontransitionend = function(t) {
            if (t.target === this.element) {
                var e = this._transn, i = v[t.propertyName] || t.propertyName;
                if (delete e.ingProperties[i], n(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd) {
                    var r = e.onEnd[i];
                    r.call(this), delete e.onEnd[i]
                }
                this.emitEvent("transitionEnd", [this])
            }
        }, a.prototype.disableTransition = function() {
            this.removeTransitionStyles(), this.element.removeEventListener(p, this, !1), this.isTransitioning=!1
        }, a.prototype._removeStyles = function(t) {
            var e = {};
            for (var n in t)
                e[n] = "";
            this.css(e)
        };
        var y = {
            transitionProperty: "",
            transitionDuration: ""
        };
        return a.prototype.removeTransitionStyles = function() {
            this.css(y)
        }, a.prototype.removeElem = function() {
            this.element.parentNode.removeChild(this.element), this.emitEvent("remove", [this])
        }, a.prototype.remove = function() {
            if (!u ||!parseFloat(this.layout.options.transitionDuration))
                return void this.removeElem();
            var t = this;
            this.on("transitionEnd", function() {
                return t.removeElem(), !0
            }), this.hide()
        }, a.prototype.reveal = function() {
            delete this.isHidden, this.css({
                display: ""
            });
            var t = this.layout.options;
            this.transition({
                from: t.hiddenStyle,
                to: t.visibleStyle,
                isCleaning: !0
            })
        }, a.prototype.hide = function() {
            this.isHidden=!0, this.css({
                display: ""
            });
            var t = this.layout.options;
            this.transition({
                from: t.visibleStyle,
                to: t.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: {
                    opacity: function() {
                        this.isHidden && this.css({
                            display: "none"
                        })
                    }
                }
            })
        }, a.prototype.destroy = function() {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }, a
    }
    var o = t.getComputedStyle, s = o ? function(t) {
        return o(t, null)
    }
    : function(t) {
        return t.currentStyle
    };
    "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], r) : (t.Outlayer = {}, t.Outlayer.Item = r(t.EventEmitter, t.getSize, t.getStyleProperty))
}(window), function(t) {
    "use strict";
    function e(t, e) {
        for (var n in e)
            t[n] = e[n];
        return t
    }
    function n(t) {
        return "[object Array]" === h.call(t)
    }
    function i(t) {
        var e = [];
        if (n(t))
            e = t;
        else if (t && "number" == typeof t.length)
            for (var i = 0, r = t.length; r > i; i++)
                e.push(t[i]);
        else 
            e.push(t);
        return e
    }
    function r(t, e) {
        var n = f(e, t);
        - 1 !== n && e.splice(n, 1)
    }
    function o(t) {
        return t.replace(/(.)([A-Z])/g, function(t, e, n) {
            return e + "-" + n
        }).toLowerCase()
    }
    function s(n, s, h, f, d, g) {
        function m(t, n) {
            if ("string" == typeof t && (t = a.querySelector(t)), !t ||!p(t))
                return void(u && u.error("Bad " + this.constructor.namespace + " element: " + t));
            this.element = t, this.options = e({}, this.constructor.defaults), this.option(n);
            var i=++v;
            this.element.outlayerGUID = i, y[i] = this, this._create(), this.options.isInitLayout && this.layout()
        }
        var v = 0, y = {};
        return m.namespace = "outlayer", m.Item = g, m.defaults = {
            containerStyle: {
                position: "relative"
            },
            isInitLayout: !0,
            isOriginLeft: !0,
            isOriginTop: !0,
            isResizeBound: !0,
            isResizingContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        }, e(m.prototype, h.prototype), m.prototype.option = function(t) {
            e(this.options, t)
        }, m.prototype._create = function() {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), e(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
        }, m.prototype.reloadItems = function() {
            this.items = this._itemize(this.element.children)
        }, m.prototype._itemize = function(t) {
            for (var e = this._filterFindItemElements(t), n = this.constructor.Item, i = [], r = 0, o = e.length; o > r; r++) {
                var s = e[r], a = new n(s, this);
                i.push(a)
            }
            return i
        }, m.prototype._filterFindItemElements = function(t) {
            t = i(t);
            for (var e = this.options.itemSelector, n = [], r = 0, o = t.length; o > r; r++) {
                var s = t[r];
                if (p(s))
                    if (e) {
                        d(s, e) && n.push(s);
                        for (var a = s.querySelectorAll(e), u = 0, l = a.length; l > u; u++)
                            n.push(a[u])
                    } else 
                        n.push(s)
            }
            return n
        }, m.prototype.getItemElements = function() {
            for (var t = [], e = 0, n = this.items.length; n > e; e++)
                t.push(this.items[e].element);
            return t
        }, m.prototype.layout = function() {
            this._resetLayout(), this._manageStamps();
            var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            this.layoutItems(this.items, t), this._isLayoutInited=!0
        }, m.prototype._init = m.prototype.layout, m.prototype._resetLayout = function() {
            this.getSize()
        }, m.prototype.getSize = function() {
            this.size = f(this.element)
        }, m.prototype._getMeasurement = function(t, e) {
            var n, i = this.options[t];
            i ? ("string" == typeof i ? n = this.element.querySelector(i) : p(i) && (n = i), this[t] = n ? f(n)[e] : i) : this[t] = 0
        }, m.prototype.layoutItems = function(t, e) {
            t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
        }, m.prototype._getItemsForLayout = function(t) {
            for (var e = [], n = 0, i = t.length; i > n; n++) {
                var r = t[n];
                r.isIgnored || e.push(r)
            }
            return e
        }, m.prototype._layoutItems = function(t, e) {
            function n() {
                i.emitEvent("layoutComplete", [i, t])
            }
            var i = this;
            if (!t ||!t.length)
                return void n();
            this._itemsOn(t, "layout", n);
            for (var r = [], o = 0, s = t.length; s > o; o++) {
                var a = t[o], u = this._getItemLayoutPosition(a);
                u.item = a, u.isInstant = e || a.isLayoutInstant, r.push(u)
            }
            this._processLayoutQueue(r)
        }, m.prototype._getItemLayoutPosition = function() {
            return {
                x: 0,
                y: 0
            }
        }, m.prototype._processLayoutQueue = function(t) {
            for (var e = 0, n = t.length; n > e; e++) {
                var i = t[e];
                this._positionItem(i.item, i.x, i.y, i.isInstant)
            }
        }, m.prototype._positionItem = function(t, e, n, i) {
            i ? t.goTo(e, n) : t.moveTo(e, n)
        }, m.prototype._postLayout = function() {
            this.resizeContainer()
        }, m.prototype.resizeContainer = function() {
            if (this.options.isResizingContainer) {
                var t = this._getContainerSize();
                t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
            }
        }, m.prototype._getContainerSize = c, m.prototype._setContainerMeasure = function(t, e) {
            if (void 0 !== t) {
                var n = this.size;
                n.isBorderBox && (t += e ? n.paddingLeft + n.paddingRight + n.borderLeftWidth + n.borderRightWidth : n.paddingBottom + n.paddingTop + n.borderTopWidth + n.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width": "height"] = t + "px"
            }
        }, m.prototype._itemsOn = function(t, e, n) {
            function i() {
                return r++, r === o && n.call(s), !0
            }
            for (var r = 0, o = t.length, s = this, a = 0, u = t.length; u > a; a++) {
                var l = t[a];
                l.on(e, i)
            }
        }, m.prototype.ignore = function(t) {
            var e = this.getItem(t);
            e && (e.isIgnored=!0)
        }, m.prototype.unignore = function(t) {
            var e = this.getItem(t);
            e && delete e.isIgnored
        }, m.prototype.stamp = function(t) {
            if (t = this._find(t)) {
                this.stamps = this.stamps.concat(t);
                for (var e = 0, n = t.length; n > e; e++) {
                    var i = t[e];
                    this.ignore(i)
                }
            }
        }, m.prototype.unstamp = function(t) {
            if (t = this._find(t))
                for (var e = 0, n = t.length; n > e; e++) {
                    var i = t[e];
                    r(i, this.stamps), this.unignore(i)
                }
        }, m.prototype._find = function(t) {
            return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = i(t)) : void 0
        }, m.prototype._manageStamps = function() {
            if (this.stamps && this.stamps.length) {
                this._getBoundingRect();
                for (var t = 0, e = this.stamps.length; e > t; t++) {
                    var n = this.stamps[t];
                    this._manageStamp(n)
                }
            }
        }, m.prototype._getBoundingRect = function() {
            var t = this.element.getBoundingClientRect(), e = this.size;
            this._boundingRect = {
                left: t.left + e.paddingLeft + e.borderLeftWidth,
                top: t.top + e.paddingTop + e.borderTopWidth,
                right: t.right - (e.paddingRight + e.borderRightWidth),
                bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
            }
        }, m.prototype._manageStamp = c, m.prototype._getElementOffset = function(t) {
            var e = t.getBoundingClientRect(), n = this._boundingRect, i = f(t), r = {
                left: e.left - n.left - i.marginLeft,
                top: e.top - n.top - i.marginTop,
                right: n.right - e.right - i.marginRight,
                bottom: n.bottom - e.bottom - i.marginBottom
            };
            return r
        }, m.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, m.prototype.bindResize = function() {
            this.isResizeBound || (n.bind(t, "resize", this), this.isResizeBound=!0)
        }, m.prototype.unbindResize = function() {
            this.isResizeBound && n.unbind(t, "resize", this), this.isResizeBound=!1
        }, m.prototype.onresize = function() {
            function t() {
                e.resize(), delete e.resizeTimeout
            }
            this.resizeTimeout && clearTimeout(this.resizeTimeout);
            var e = this;
            this.resizeTimeout = setTimeout(t, 100)
        }, m.prototype.resize = function() {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, m.prototype.needsResizeLayout = function() {
            var t = f(this.element), e = this.size && t;
            return e && t.innerWidth !== this.size.innerWidth
        }, m.prototype.addItems = function(t) {
            var e = this._itemize(t);
            return e.length && (this.items = this.items.concat(e)), e
        }, m.prototype.appended = function(t) {
            var e = this.addItems(t);
            e.length && (this.layoutItems(e, !0), this.reveal(e))
        }, m.prototype.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
                var n = this.items.slice(0);
                this.items = e.concat(n), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(n)
            }
        }, m.prototype.reveal = function(t) {
            var e = t && t.length;
            if (e)
                for (var n = 0; e > n; n++) {
                    var i = t[n];
                    i.reveal()
                }
        }, m.prototype.hide = function(t) {
            var e = t && t.length;
            if (e)
                for (var n = 0; e > n; n++) {
                    var i = t[n];
                    i.hide()
                }
        }, m.prototype.getItem = function(t) {
            for (var e = 0, n = this.items.length; n > e; e++) {
                var i = this.items[e];
                if (i.element === t)
                    return i
            }
        }, m.prototype.getItems = function(t) {
            if (t && t.length) {
                for (var e = [], n = 0, i = t.length; i > n; n++) {
                    var r = t[n], o = this.getItem(r);
                    o && e.push(o)
                }
                return e
            }
        }, m.prototype.remove = function(t) {
            t = i(t);
            var e = this.getItems(t);
            if (e && e.length) {
                this._itemsOn(e, "remove", function() {
                    this.emitEvent("removeComplete", [this, e])
                });
                for (var n = 0, o = e.length; o > n; n++) {
                    var s = e[n];
                    s.remove(), r(s, this.items)
                }
            }
        }, m.prototype.destroy = function() {
            var t = this.element.style;
            t.height = "", t.position = "", t.width = "";
            for (var e = 0, n = this.items.length; n > e; e++) {
                var i = this.items[e];
                i.destroy()
            }
            this.unbindResize(), delete this.element.outlayerGUID, l && l.removeData(this.element, this.constructor.namespace)
        }, m.data = function(t) {
            var e = t && t.outlayerGUID;
            return e && y[e]
        }, m.create = function(t, n) {
            function i() {
                m.apply(this, arguments)
            }
            return Object.create ? i.prototype = Object.create(m.prototype) : e(i.prototype, m.prototype), i.prototype.constructor = i, i.defaults = e({}, m.defaults), e(i.defaults, n), i.prototype.settings = {}, i.namespace = t, i.data = m.data, i.Item = function() {
                g.apply(this, arguments)
            }, i.Item.prototype = new g, s(function() {
                for (var e = o(t), n = a.querySelectorAll(".js-" + e), r = "data-" + e + "-options", s = 0, c = n.length; c > s; s++) {
                    var h, p = n[s], f = p.getAttribute(r);
                    try {
                        h = f && JSON.parse(f)
                    } catch (d) {
                        u && u.error("Error parsing " + r + " on " + p.nodeName.toLowerCase() + (p.id ? "#" + p.id : "") + ": " + d);
                        continue
                    }
                    var g = new i(p, h);
                    l && l.data(p, t, g)
                }
            }), l && l.bridget && l.bridget(t, i), i
        }, m.Item = g, m
    }
    var a = t.document, u = t.console, l = t.jQuery, c = function() {}, h = Object.prototype.toString, p = "object" == typeof HTMLElement ? function(t) {
        return t instanceof HTMLElement
    }
    : function(t) {
        return t && "object" == typeof t && 1 === t.nodeType && "string" == typeof t.nodeName
    }, f = Array.prototype.indexOf ? function(t, e) {
        return t.indexOf(e)
    }
    : function(t, e) {
        for (var n = 0, i = t.length; i > n; n++)
            if (t[n] === e)
                return n;
        return - 1
    };
    "function" == typeof define && define.amd ? define(["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], s) : t.Outlayer = s(t.eventie, t.docReady, t.EventEmitter, t.getSize, t.matchesSelector, t.Outlayer.Item)
}(window), function(t) {
    "use strict";
    function e(t, e) {
        var i = t.create("masonry");
        return i.prototype._resetLayout = function() {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
            var t = this.cols;
            for (this.colYs = []; t--;)
                this.colYs.push(0);
            this.maxY = 0
        }, i.prototype.measureColumns = function() {
            if (this.getContainerWidth(), !this.columnWidth) {
                var t = this.items[0], n = t && t.element;
                this.columnWidth = n && e(n).outerWidth || this.containerWidth
            }
            this.columnWidth += this.gutter, this.cols = Math.floor((this.containerWidth + this.gutter) / this.columnWidth), this.cols = Math.max(this.cols, 1)
        }, i.prototype.getContainerWidth = function() {
            var t = this.options.isFitWidth ? this.element.parentNode: this.element, n = e(t);
            this.containerWidth = n && n.innerWidth
        }, i.prototype._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = t.size.outerWidth%this.columnWidth, i = e && 1 > e ? "round": "ceil", r = Math[i](t.size.outerWidth / this.columnWidth);
            r = Math.min(r, this.cols);
            for (var o = this._getColGroup(r), s = Math.min.apply(Math, o), a = n(o, s), u = {
                x: this.columnWidth * a,
                y: s
            }, l = s + t.size.outerHeight, c = this.cols + 1 - o.length, h = 0; c > h; h++)
                this.colYs[a + h] = l;
            return u
        }, i.prototype._getColGroup = function(t) {
            if (2 > t)
                return this.colYs;
            for (var e = [], n = this.cols + 1 - t, i = 0; n > i; i++) {
                var r = this.colYs.slice(i, i + t);
                e[i] = Math.max.apply(Math, r)
            }
            return e
        }, i.prototype._manageStamp = function(t) {
            var n = e(t), i = this._getElementOffset(t), r = this.options.isOriginLeft ? i.left: i.right, o = r + n.outerWidth, s = Math.floor(r / this.columnWidth);
            s = Math.max(0, s);
            var a = Math.floor(o / this.columnWidth);
            a -= o%this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
            for (var u = (this.options.isOriginTop ? i.top : i.bottom) + n.outerHeight, l = s; a >= l; l++)
                this.colYs[l] = Math.max(u, this.colYs[l])
        }, i.prototype._getContainerSize = function() {
            this.maxY = Math.max.apply(Math, this.colYs);
            var t = {
                height: this.maxY
            };
            return this.options.isFitWidth && (t.width = this._getContainerFitWidth()), t
        }, i.prototype._getContainerFitWidth = function() {
            for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];)
                t++;
            return (this.cols - t) * this.columnWidth - this.gutter
        }, i.prototype.needsResizeLayout = function() {
            var t = this.containerWidth;
            return this.getContainerWidth(), t !== this.containerWidth
        }, i
    }
    var n = Array.prototype.indexOf ? function(t, e) {
        return t.indexOf(e)
    }
    : function(t, e) {
        for (var n = 0, i = t.length; i > n; n++) {
            var r = t[n];
            if (r === e)
                return n
        }
        return - 1
    };
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size"], e) : t.Masonry = e(t.Outlayer, t.getSize)
}(window), function(t) {
    "use strict";
    function e(t) {
        function e() {
            t.Item.apply(this, arguments)
        }
        return e.prototype = new t.Item, e.prototype._create = function() {
            this.id = this.layout.itemGUID++, t.Item.prototype._create.call(this), this.sortData = {}
        }, e.prototype.updateSortData = function() {
            if (!this.isIgnored) {
                this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                var t = this.layout.options.getSortData, e = this.layout._sorters;
                for (var n in t) {
                    var i = e[n];
                    this.sortData[n] = i(this.element, this)
                }
            }
        }, e
    }
    "function" == typeof define && define.amd ? define(["outlayer/outlayer"], e) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
}(window), function(t) {
    "use strict";
    function e(t, e) {
        function n(t) {
            this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
        }
        return function() {
            function t(t) {
                return function() {
                    return e.prototype[t].apply(this.isotope, arguments)
                }
            }
            for (var i = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], r = 0, o = i.length; o > r; r++) {
                var s = i[r];
                n.prototype[s] = t(s)
            }
        }(), n.prototype.needsVerticalResizeLayout = function() {
            var e = t(this.isotope.element), n = this.isotope.size && e;
            return n && e.innerHeight !== this.isotope.size.innerHeight
        }, n.prototype._getMeasurement = function() {
            this.isotope._getMeasurement.apply(this, arguments)
        }, n.prototype.getColumnWidth = function() {
            this.getSegmentSize("column", "Width")
        }, n.prototype.getRowHeight = function() {
            this.getSegmentSize("row", "Height")
        }, n.prototype.getSegmentSize = function(t, e) {
            var n = t + e, i = "outer" + e;
            if (this._getMeasurement(n, i), !this[n]) {
                var r = this.getFirstItemSize();
                this[n] = r && r[i] || this.isotope.size["inner" + e]
            }
        }, n.prototype.getFirstItemSize = function() {
            var e = this.isotope.filteredItems[0];
            return e && e.element && t(e.element)
        }, n.prototype.layout = function() {
            this.isotope.layout.apply(this.isotope, arguments)
        }, n.prototype.getSize = function() {
            this.isotope.getSize(), this.size = this.isotope.size
        }, n.modes = {}, n.create = function(t, e) {
            function i() {
                n.apply(this, arguments)
            }
            return i.prototype = new n, e && (i.options = e), i.prototype.namespace = t, n.modes[t] = i, i
        }, n
    }
    "function" == typeof define && define.amd ? define(["get-size/get-size", "outlayer/outlayer"], e) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window), function(t) {
    "use strict";
    function e(t, e) {
        for (var n in e)
            t[n] = e[n];
        return t
    }
    function n(t) {
        return "[object Array]" === c.call(t)
    }
    function i(t) {
        var e = [];
        if (n(t))
            e = t;
        else if (t && "number" == typeof t.length)
            for (var i = 0, r = t.length; r > i; i++)
                e.push(t[i]);
        else 
            e.push(t);
        return e
    }
    function r(t, e) {
        var n = h(e, t);
        - 1 !== n && e.splice(n, 1)
    }
    function o(t, n, o, u, c) {
        function h(t, e) {
            return function(n, i) {
                for (var r = 0, o = t.length; o > r; r++) {
                    var s = t[r], a = n.sortData[s], u = i.sortData[s];
                    if (a > u || u > a) {
                        var l = void 0 !== e[s] ? e[s] : e, c = l ? 1 : - 1;
                        return (a > u ? 1 : - 1) * c
                    }
                }
                return 0
            }
        }
        var p = t.create("isotope", {
            layoutMode: "masonry",
            isJQueryFiltering: !0,
            sortAscending: !0
        });
        p.Item = u, p.LayoutMode = c, p.prototype._create = function() {
            this.itemGUID = 0, this._sorters = {}, this._getSorters(), t.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
            for (var e in c.modes)
                this._initLayoutMode(e)
        }, p.prototype.reloadItems = function() {
            this.itemGUID = 0, t.prototype.reloadItems.call(this)
        }, p.prototype._itemize = function() {
            for (var e = t.prototype._itemize.apply(this, arguments), n = 0, i = e.length; i > n; n++) {
                var r = e[n];
                r.id = this.itemGUID++
            }
            return this._updateItemsSortData(e), e
        }, p.prototype._initLayoutMode = function(t) {
            var n = c.modes[t], i = this.options[t] || {};
            this.options[t] = n.options ? e(n.options, i) : i, this.modes[t] = new n(this)
        }, p.prototype.layout = function() {
            return !this._isLayoutInited && this.options.isInitLayout ? void this.arrange() : void this._layout()
        }, p.prototype._layout = function() {
            var t = this._getIsInstant();
            this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited=!0
        }, p.prototype.arrange = function(t) {
            this.option(t), this._getIsInstant(), this.filteredItems = this._filter(this.items), this._sort(), this._layout()
        }, p.prototype._init = p.prototype.arrange, p.prototype._getIsInstant = function() {
            var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            return this._isInstant = t, t
        }, p.prototype._filter = function(t) {
            function e() {
                h.reveal(r), h.hide(o)
            }
            var n = this.options.filter;
            n = n || "*";
            for (var i = [], r = [], o = [], s = this._getFilterTest(n), a = 0, u = t.length; u > a; a++) {
                var l = t[a];
                if (!l.isIgnored) {
                    var c = s(l);
                    c && i.push(l), c && l.isHidden ? r.push(l) : c || l.isHidden || o.push(l)
                }
            }
            var h = this;
            return this._isInstant ? this._noTransition(e) : e(), i
        }, p.prototype._getFilterTest = function(t) {
            return s && this.options.isJQueryFiltering ? function(e) {
                return s(e.element).is(t)
            } : "function" == typeof t ? function(e) {
                return t(e.element)
            } : function(e) {
                return o(e.element, t)
            }
        }, p.prototype.updateSortData = function(t) {
            this._getSorters(), t = i(t);
            var e = this.getItems(t);
            e = e.length ? e : this.items, this._updateItemsSortData(e)
        }, p.prototype._getSorters = function() {
            var t = this.options.getSortData;
            for (var e in t) {
                var n = t[e];
                this._sorters[e] = f(n)
            }
        }, p.prototype._updateItemsSortData = function(t) {
            for (var e = 0, n = t.length; n > e; e++) {
                var i = t[e];
                i.updateSortData()
            }
        };
        var f = function() {
            function t(t) {
                if ("string" != typeof t)
                    return t;
                var n = a(t).split(" "), i = n[0], r = i.match(/^\[(.+)\]$/), o = r && r[1], s = e(o, i), u = p.sortDataParsers[n[1]];
                return t = u ? function(t) {
                    return t && u(s(t))
                } : function(t) {
                    return t && s(t)
                }
            }
            function e(t, e) {
                var n;
                return n = t ? function(e) {
                    return e.getAttribute(t)
                } : function(t) {
                    var n = t.querySelector(e);
                    return n && l(n)
                }
            }
            return t
        }();
        p.sortDataParsers = {
            parseInt: function(t) {
                return parseInt(t, 10)
            },
            parseFloat: function(t) {
                return parseFloat(t)
            }
        }, p.prototype._sort = function() {
            var t = this.options.sortBy;
            if (t) {
                var e = [].concat.apply(t, this.sortHistory), n = h(e, this.options.sortAscending);
                this.filteredItems.sort(n), t !== this.sortHistory[0] && this.sortHistory.unshift(t)
            }
        }, p.prototype._mode = function() {
            var t = this.options.layoutMode, e = this.modes[t];
            if (!e)
                throw new Error("No layout mode: " + t);
            return e.options = this.options[t], e
        }, p.prototype._resetLayout = function() {
            t.prototype._resetLayout.call(this), this._mode()._resetLayout()
        }, p.prototype._getItemLayoutPosition = function(t) {
            return this._mode()._getItemLayoutPosition(t)
        }, p.prototype._manageStamp = function(t) {
            this._mode()._manageStamp(t)
        }, p.prototype._getContainerSize = function() {
            return this._mode()._getContainerSize()
        }, p.prototype.needsResizeLayout = function() {
            return this._mode().needsResizeLayout()
        }, p.prototype.appended = function(t) {
            var e = this.addItems(t);
            if (e.length) {
                var n = this._filterRevealAdded(e);
                this.filteredItems = this.filteredItems.concat(n)
            }
        }, p.prototype.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
                var n = this.items.slice(0);
                this.items = e.concat(n), this._resetLayout(), this._manageStamps();
                var i = this._filterRevealAdded(e);
                this.layoutItems(n), this.filteredItems = i.concat(this.filteredItems)
            }
        }, p.prototype._filterRevealAdded = function(t) {
            var e = this._noTransition(function() {
                return this._filter(t)
            });
            return this.layoutItems(e, !0), this.reveal(e), t
        }, p.prototype.insert = function(t) {
            var e = this.addItems(t);
            if (e.length) {
                var n, i, r = e.length;
                for (n = 0; r > n; n++)
                    i = e[n], this.element.appendChild(i.element);
                var o = this._filter(e);
                for (this._noTransition(function() {
                    this.hide(o)
                }), n = 0; r > n; n++)
                    e[n].isLayoutInstant=!0;
                for (this.arrange(), n = 0; r > n; n++)
                    delete e[n].isLayoutInstant;
                this.reveal(o)
            }
        };
        var d = p.prototype.remove;
        return p.prototype.remove = function(t) {
            t = i(t);
            var e = this.getItems(t);
            if (d.call(this, t), e && e.length)
                for (var n = 0, o = e.length; o > n; n++) {
                    var s = e[n];
                    r(s, this.filteredItems)
                }
        }, p.prototype._noTransition = function(t) {
            var e = this.options.transitionDuration;
            this.options.transitionDuration = 0;
            var n = t.call(this);
            return this.options.transitionDuration = e, n
        }, p
    }
    var s = t.jQuery, a = String.prototype.trim ? function(t) {
        return t.trim()
    }
    : function(t) {
        return t.replace(/^\s+|\s+$/g, "")
    }, u = document.documentElement, l = u.textContent ? function(t) {
        return t.textContent
    }
    : function(t) {
        return t.innerText
    }, c = Object.prototype.toString, h = Array.prototype.indexOf ? function(t, e) {
        return t.indexOf(e)
    }
    : function(t, e) {
        for (var n = 0, i = t.length; i > n; n++)
            if (t[n] === e)
                return n;
        return - 1
    };
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "./item", "./layout-mode", "./layout-modes/masonry", "./layout-modes/fit-rows", "./layout-modes/vertical"], o) : t.Isotope = o(t.Outlayer, t.getSize, t.matchesSelector, t.Isotope.Item, t.Isotope.LayoutMode)
}(window), function(t) {
    "use strict";
    function e(t) {
        var e = t.create("vertical", {
            horizontalAlignment: 0
        });
        return e.prototype._resetLayout = function() {
            this.y = 0
        }, e.prototype._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment, n = this.y;
            return this.y += t.size.outerHeight, {
                x: e,
                y: n
            }
        }, e.prototype._getContainerSize = function() {
            return {
                height: this.y
            }
        }, e
    }
    "function" == typeof define && define.amd ? define(["../layout-mode"], e) : e(t.Isotope.LayoutMode)
}(window), function(t) {
    "use strict";
    function e(t) {
        var e = t.create("fitRows");
        return e.prototype._resetLayout = function() {
            this.x = 0, this.y = 0, this.maxY = 0
        }, e.prototype._getItemLayoutPosition = function(t) {
            t.getSize(), 0 !== this.x && t.size.outerWidth + this.x > this.isotope.size.innerWidth && (this.x = 0, this.y = this.maxY);
            var e = {
                x: this.x,
                y: this.y
            };
            return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += t.size.outerWidth, e
        }, e.prototype._getContainerSize = function() {
            return {
                height: this.maxY
            }
        }, e
    }
    "function" == typeof define && define.amd ? define(["../layout-mode"], e) : e(t.Isotope.LayoutMode)
}(window), function(t) {
    "use strict";
    function e(t, e) {
        for (var n in e)
            t[n] = e[n];
        return t
    }
    function n(t, n) {
        var i = t.create("masonry"), r = i.prototype._getElementOffset, o = i.prototype.layout, s = i.prototype._getMeasurement;
        e(i.prototype, n.prototype), i.prototype._getElementOffset = r, i.prototype.layout = o, i.prototype._getMeasurement = s;
        var a = i.prototype.measureColumns;
        i.prototype.measureColumns = function() {
            this.items = this.isotope.filteredItems, a.call(this)
        };
        var u = i.prototype._manageStamp;
        return i.prototype._manageStamp = function() {
            this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, u.apply(this, arguments)
        }, i
    }
    "function" == typeof define && define.amd ? define(["../layout-mode", "masonry/masonry"], n) : n(t.Isotope.LayoutMode, t.Masonry)
}(window), function(t, e, n, i) {
    function r(e, n) {
        this.settings = null, this.options = t.extend({}, r.Defaults, n), this.$element = t(e), this.drag = t.extend({}, p), this.state = t.extend({}, f), this.e = t.extend({}, d), this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._invalidated = {}, this._pipe = [], t.each(r.Plugins, t.proxy(function(t, e) {
            this._plugins[t[0].toLowerCase() + t.slice(1)] = new e(this)
        }, this)), t.each(r.Pipe, t.proxy(function(e, n) {
            this._pipe.push({
                filter: n.filter,
                run: t.proxy(n.run, this)
            })
        }, this)), this.setup(), this.initialize()
    }
    function o(t) {
        if (t.touches !== i)
            return {
                x: t.touches[0].pageX,
                y: t.touches[0].pageY
            };
        if (t.touches === i) {
            if (t.pageX !== i)
                return {
                    x: t.pageX,
                    y: t.pageY
                };
            if (t.pageX === i)
                return {
                    x: t.clientX,
                    y: t.clientY
                }
        }
    }
    function s(t) {
        var e, i, r = n.createElement("div"), o = t;
        for (e in o)
            if (i = o[e], "undefined" != typeof r.style[i])
                return r = null, [i, e];
        return [!1]
    }
    function a() {
        return s(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1]
    }
    function u() {
        return s(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0]
    }
    function l() {
        return s(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0]
    }
    function c() {
        return "ontouchstart"in e||!!navigator.msMaxTouchPoints
    }
    function h() {
        return e.navigator.msPointerEnabled
    }
    var p, f, d;
    p = {
        start: 0,
        startX: 0,
        startY: 0,
        current: 0,
        currentX: 0,
        currentY: 0,
        offsetX: 0,
        offsetY: 0,
        distance: null,
        startTime: 0,
        endTime: 0,
        updatedX: 0,
        targetEl: null
    }, f = {
        isTouch: !1,
        isScrolling: !1,
        isSwiping: !1,
        direction: !1,
        inMotion: !1
    }, d = {
        _onDragStart: null,
        _onDragMove: null,
        _onDragEnd: null,
        _transitionEnd: null,
        _resizer: null,
        _responsiveCall: null,
        _goToLoop: null,
        _checkVisibile: null
    }, r.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: e,
        responsiveClass: !1,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        themeClass: "owl-theme",
        baseClass: "owl-carousel",
        itemClass: "owl-item",
        centerClass: "center",
        activeClass: "active"
    }, r.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    }, r.Plugins = {}, r.Pipe = [{
        filter: ["width", "items", "settings"],
        run: function(t) {
            t.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var t = this._clones, e = this.$stage.children(".cloned");
            (e.length !== t.length ||!this.settings.loop && t.length > 0) && (this.$stage.children(".cloned").remove(), this._clones = [])
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var t, e, n = this._clones, i = this._items, r = this.settings.loop ? n.length - Math.max(2 * this.settings.items, 4): 0;
            for (t = 0, e = Math.abs(r / 2); e > t; t++)
                r > 0 ? (this.$stage.children().eq(i.length + n.length - 1).remove(), n.pop(), this.$stage.children().eq(0).remove(), n.pop()) : (n.push(n.length / 2), this.$stage.append(i[n[n.length - 1]].clone().addClass("cloned")), n.push(i.length - 1 - (n.length - 1) / 2), this.$stage.prepend(i[n[n.length - 1]].clone().addClass("cloned")))
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var t, e, n, i = this.settings.rtl ? 1: - 1, r = (this.width() / this.settings.items).toFixed(3), o = 0;
            for (this._coordinates = [], e = 0, n = this._clones.length + this._items.length; n > e; e++)
                t = this._mergers[this.relative(e)], t = this.settings.mergeFit && Math.min(t, this.settings.items) || t, o += (this.settings.autoWidth ? this._items[this.relative(e)].width() + this.settings.margin : r * t) * i, this._coordinates.push(o)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var e, n, i = (this.width() / this.settings.items).toFixed(3), r = {
                width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding,
                "padding-left": this.settings.stagePadding || "",
                "padding-right": this.settings.stagePadding || ""
            };
            if (this.$stage.css(r), r = {
                width: this.settings.autoWidth ? "auto": i - this.settings.margin
            }, r[this.settings.rtl ? "margin-left": "margin-right"] = this.settings.margin, !this.settings.autoWidth && t.grep(this._mergers, function(t) {
                return t > 1
            }).length > 0)
                for (e = 0, n = this._coordinates.length; n > e; e++)
                    r.width = Math.abs(this._coordinates[e]) - Math.abs(this._coordinates[e - 1] || 0) - this.settings.margin, this.$stage.children().eq(e).css(r);
            else 
                this.$stage.children().css(r)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            t.current && this.reset(this.$stage.children().index(t.current))
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            var t, e, n, i, r = this.settings.rtl ? 1: - 1, o = 2 * this.settings.stagePadding, s = this.coordinates(this.current()) + o, a = s + this.width() * r, u = [];
            for (n = 0, i = this._coordinates.length; i > n; n++)
                t = this._coordinates[n - 1] || 0, e = Math.abs(this._coordinates[n]) + o * r, (this.op(t, "<=", s) && this.op(t, ">", a) || this.op(e, "<", s) && this.op(e, ">", a)) && u.push(n);
            this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass), this.$stage.children(":eq(" + u.join("), :eq(") + ")").addClass(this.settings.activeClass), this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass), this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))
        }
    }
    ], r.prototype.initialize = function() {
        if (this.trigger("initialize"), this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl), this.browserSupport(), this.settings.autoWidth && this.state.imagesLoaded!==!0) {
            var e, n, r;
            if (e = this.$element.find("img"), n = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : i, r = this.$element.children(n).width(), e.length && 0 >= r)
                return this.preloadAutoWidthImages(e), !1
        }
        this.$element.addClass("owl-loading"), this.$stage = t("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this._width = this.$element.width(), this.refresh(), this.$element.removeClass("owl-loading").addClass("owl-loaded"), this.eventsCall(), this.internalEvents(), this.addTriggerableEvents(), this.trigger("initialized")
    }, r.prototype.setup = function() {
        var e = this.viewport(), n = this.options.responsive, i =- 1, r = null;
        n ? (t.each(n, function(t) {
            e >= t && t > i && (i = Number(t))
        }), r = t.extend({}, this.options, n[i]), delete r.responsive, r.responsiveClass && this.$element.attr("class", function(t, e) {
            return e.replace(/\b owl-responsive-\S+/g, "")
        }).addClass("owl-responsive-" + i)) : r = t.extend({}, this.options), (null === this.settings || this._breakpoint !== i) && (this.trigger("change", {
            property: {
                name: "settings",
                value: r
            }
        }), this._breakpoint = i, this.settings = r, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        }))
    }, r.prototype.optionsLogic = function() {
        this.$element.toggleClass("owl-center", this.settings.center), this.settings.loop && this._items.length < this.settings.items && (this.settings.loop=!1), this.settings.autoWidth && (this.settings.stagePadding=!1, this.settings.merge=!1)
    }, r.prototype.prepare = function(e) {
        var n = this.trigger("prepare", {
            content: e
        });
        return n.data || (n.data = t("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(e)), this.trigger("prepared", {
            content: n.data
        }), n.data
    }, r.prototype.update = function() {
        for (var e = 0, n = this._pipe.length, i = t.proxy(function(t) {
            return this[t]
        }, this._invalidated), r = {}; n > e;)(this._invalidated.all || t.grep(this._pipe[e].filter, i).length > 0) 
            && this._pipe[e].run(r), e++;
        this._invalidated = {}
    }, r.prototype.width = function(t) {
        switch (t = t || r.Width.Default) {
        case r.Width.Inner:
        case r.Width.Outer:
            return this._width;
        default:
            return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, r.prototype.refresh = function() {
        if (0 === this._items.length)
            return !1;
        (new Date).getTime();
        this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$stage.addClass("owl-refresh"), this.update(), this.$stage.removeClass("owl-refresh"), this.state.orientation = e.orientation, this.watchVisibility(), this.trigger("refreshed")
    }, r.prototype.eventsCall = function() {
        this.e._onDragStart = t.proxy(function(t) {
            this.onDragStart(t)
        }, this), this.e._onDragMove = t.proxy(function(t) {
            this.onDragMove(t)
        }, this), this.e._onDragEnd = t.proxy(function(t) {
            this.onDragEnd(t)
        }, this), this.e._onResize = t.proxy(function(t) {
            this.onResize(t)
        }, this), this.e._transitionEnd = t.proxy(function(t) {
            this.transitionEnd(t)
        }, this), this.e._preventClick = t.proxy(function(t) {
            this.preventClick(t)
        }, this)
    }, r.prototype.onThrottledResize = function() {
        e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate)
    }, r.prototype.onResize = function() {
        return this._items.length ? this._width === this.$element.width()?!1 : this.trigger("resize").isDefaultPrevented()?!1 : (this._width = this.$element.width(), this.invalidate("width"), this.refresh(), void this.trigger("resized")) : !1
    }, r.prototype.eventsRouter = function(t) {
        var e = t.type;
        "mousedown" === e || "touchstart" === e ? this.onDragStart(t) : "mousemove" === e || "touchmove" === e ? this.onDragMove(t) : "mouseup" === e || "touchend" === e ? this.onDragEnd(t) : "touchcancel" === e && this.onDragEnd(t)
    }, r.prototype.internalEvents = function() {
        var n = (c(), h());
        this.settings.mouseDrag ? (this.$stage.on("mousedown", t.proxy(function(t) {
            this.eventsRouter(t)
        }, this)), this.$stage.on("dragstart", function() {
            return !1
        }), this.$stage.get(0).onselectstart = function() {
            return !1
        }) : this.$element.addClass("owl-text-select-on"), this.settings.touchDrag&&!n && this.$stage.on("touchstart touchcancel", t.proxy(function(t) {
            this.eventsRouter(t)
        }, this)), this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1), this.settings.responsive!==!1 && this.on(e, "resize", t.proxy(this.onThrottledResize, this))
    }, r.prototype.onDragStart = function(i) {
        var r, s, a, u;
        if (r = i.originalEvent || i || e.event, 3 === r.which || this.state.isTouch)
            return !1;
        if ("mousedown" === r.type && this.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = (new Date).getTime(), this.speed(0), this.state.isTouch=!0, this.state.isScrolling=!1, this.state.isSwiping=!1, this.drag.distance = 0, s = o(r).x, a = o(r).y, this.drag.offsetX = this.$stage.position().left, this.drag.offsetY = this.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin), this.state.inMotion && this.support3d)
            u = this.getTransformProperty(), this.drag.offsetX = u, this.animate(u), this.state.inMotion=!0;
        else if (this.state.inMotion&&!this.support3d)
            return this.state.inMotion=!1, !1;
        this.drag.startX = s - this.drag.offsetX, this.drag.startY = a - this.drag.offsetY, this.drag.start = s - this.drag.startX, this.drag.targetEl = r.target || r.srcElement, this.drag.updatedX = this.drag.start, ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable=!1), t(n).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", t.proxy(function(t) {
            this.eventsRouter(t)
        }, this))
    }, r.prototype.onDragMove = function(t) {
        var n, r, s, a, u, l;
        this.state.isTouch && (this.state.isScrolling || (n = t.originalEvent || t || e.event, r = o(n).x, s = o(n).y, this.drag.currentX = r - this.drag.startX, this.drag.currentY = s - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)) : (a = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()), u = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()), l = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, a + l), u + l)), (this.drag.distance > 8 || this.drag.distance<-8) && (n.preventDefault !== i ? n.preventDefault() : n.returnValue=!1, this.state.isSwiping=!0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY<-16) && this.state.isSwiping===!1 && (this.state.isScrolling=!0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX)))
    }, r.prototype.onDragEnd = function(e) {
        var i, r, o;
        if (this.state.isTouch) {
            if ("mouseup" === e.type && this.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch=!1, this.state.isScrolling=!1, this.state.isSwiping=!1, 0 === this.drag.distance && this.state.inMotion!==!0)
                return this.state.inMotion=!1, !1;
            this.drag.endTime = (new Date).getTime(), i = this.drag.endTime - this.drag.startTime, r = Math.abs(this.drag.distance), (r > 3 || i > 300) && this.removeClick(this.drag.targetEl), o = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(o), this.invalidate("position"), this.update(), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(o) || this.transitionEnd(), this.drag.distance = 0, t(n).off(".owl.dragEvents")
        }
    }, r.prototype.removeClick = function(n) {
        this.drag.targetEl = n, t(n).on("click.preventClick", this.e._preventClick), e.setTimeout(function() {
            t(n).off("click.preventClick")
        }, 300)
    }, r.prototype.preventClick = function(e) {
        e.preventDefault ? e.preventDefault() : e.returnValue=!1, e.stopPropagation && e.stopPropagation(), t(e.target).off("click.preventClick")
    }, r.prototype.getTransformProperty = function() {
        var t, n;
        return t = e.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform"), t = t.replace(/matrix(3d)?\(|\)/g, "").split(","), n = 16 === t.length, n!==!0 ? t[4] : t[12]
    }, r.prototype.closest = function(e) {
        var n =- 1, i = 30, r = this.width(), o = this.coordinates();
        return this.settings.freeDrag || t.each(o, t.proxy(function(t, s) {
            return e > s - i && s + i > e ? n = t : this.op(e, "<", s) && this.op(e, ">", o[t + 1] || s - r) && (n = "left" === this.state.direction ? t + 1 : t), - 1 === n
        }, this)), this.settings.loop || (this.op(e, ">", o[this.minimum()]) ? n = e = this.minimum() : this.op(e, "<", o[this.maximum()]) && (n = e = this.maximum())), n
    }, r.prototype.animate = function(e) {
        this.trigger("translate"), this.state.inMotion = this.speed() > 0, this.support3d ? this.$stage.css({
            transform: "translate3d(" + e + "px,0px, 0px)",
            transition: this.speed() / 1e3 + "s"
        }) : this.state.isTouch ? this.$stage.css({
            left: e + "px"
        }) : this.$stage.animate({
            left: e
        }, this.speed() / 1e3, this.settings.fallbackEasing, t.proxy(function() {
            this.state.inMotion && this.transitionEnd()
        }, this))
    }, r.prototype.current = function(t) {
        if (t === i)
            return this._current;
        if (0 === this._items.length)
            return i;
        if (t = this.normalize(t), this._current !== t) {
            var e = this.trigger("change", {
                property: {
                    name: "position",
                    value: t
                }
            });
            e.data !== i && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, r.prototype.invalidate = function(t) {
        this._invalidated[t]=!0
    }, r.prototype.reset = function(t) {
        t = this.normalize(t), t !== i && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
    }, r.prototype.normalize = function(e, n) {
        var r = n ? this._items.length: this._items.length + this._clones.length;
        return !t.isNumeric(e) || 1 > r ? i : e = this._clones.length ? (e%r + r)%r : Math.max(this.minimum(n), Math.min(this.maximum(n), e))
    }, r.prototype.relative = function(t) {
        return t = this.normalize(t), t -= this._clones.length / 2, this.normalize(t, !0)
    }, r.prototype.maximum = function(t) {
        var e, n, i, r = 0, o = this.settings;
        if (t)
            return this._items.length - 1;
        if (!o.loop && o.center)
            e = this._items.length - 1;
        else if (o.loop || o.center)
            if (o.loop || o.center)
                e = this._items.length + o.items;
            else {
                if (!o.autoWidth&&!o.merge)
                    throw "Can not detect maximum absolute position.";
                    for (revert = o.rtl ? 1 : - 1, n = this.$stage.width() - this.$element.width(); (i = this.coordinates(r))&&!(i * revert >= n);)
                        e=++r
            } else 
                e = this._items.length - o.items;
        return e
    }, r.prototype.minimum = function(t) {
        return t ? 0 : this._clones.length / 2
    }, r.prototype.items = function(t) {
        return t === i ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
    }, r.prototype.mergers = function(t) {
        return t === i ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
    }, r.prototype.clones = function(e) {
        var n = this._clones.length / 2, r = n + this._items.length, o = function(t) {
            return t%2 === 0 ? r + t / 2 : n - (t + 1) / 2
        };
        return e === i ? t.map(this._clones, function(t, e) {
            return o(e)
        }) : t.map(this._clones, function(t, n) {
            return t === e ? o(n) : null
        })
    }, r.prototype.speed = function(t) {
        return t !== i && (this._speed = t), this._speed
    }, r.prototype.coordinates = function(e) {
        var n = null;
        return e === i ? t.map(this._coordinates, t.proxy(function(t, e) {
            return this.coordinates(e)
        }, this)) : (this.settings.center ? (n = this._coordinates[e], n += (this.width() - n + (this._coordinates[e - 1] || 0)) / 2 * (this.settings.rtl?-1 : 1)) : n = this._coordinates[e - 1] || 0, n)
    }, r.prototype.duration = function(t, e, n) {
        return Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(n || this.settings.smartSpeed)
    }, r.prototype.to = function(n, i) {
        if (this.settings.loop) {
            var r = n - this.relative(this.current()), o = this.current(), s = this.current(), a = this.current() + r, u = 0 > s - a?!0 : !1, l = this._clones.length + this._items.length;
            a < this.settings.items && u===!1 ? (o = s + this._items.length, this.reset(o)) : a >= l - this.settings.items && u===!0 && (o = s - this._items.length, this.reset(o)), e.clearTimeout(this.e._goToLoop), this.e._goToLoop = e.setTimeout(t.proxy(function() {
                this.speed(this.duration(this.current(), o + r, i)), this.current(o + r), this.update()
            }, this), 30)
        } else 
            this.speed(this.duration(this.current(), n, i)), this.current(n), this.update()
    }, r.prototype.next = function(t) {
        t = t ||!1, this.to(this.relative(this.current()) + 1, t)
    }, r.prototype.prev = function(t) {
        t = t ||!1, this.to(this.relative(this.current()) - 1, t)
    }, r.prototype.transitionEnd = function(t) {
        return t !== i && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))?!1 : (this.state.inMotion=!1, void this.trigger("translated"))
    }, r.prototype.viewport = function() {
        var i;
        if (this.options.responsiveBaseElement !== e)
            i = t(this.options.responsiveBaseElement).width();
        else if (e.innerWidth)
            i = e.innerWidth;
        else {
            if (!n.documentElement ||!n.documentElement.clientWidth)
                throw "Can not detect viewport width.";
            i = n.documentElement.clientWidth
        }
        return i
    }, r.prototype.replace = function(e) {
        this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function() {
            return 1 === this.nodeType
        }).each(t.proxy(function(t, e) {
            e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(t.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, r.prototype.add = function(t, e) {
        e = e === i ? this._items.length : this.normalize(e, !0), this.trigger("add", {
            content: t,
            position: e
        }), 0 === this._items.length || e === this._items.length ? (this.$stage.append(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[e].before(t), this._items.splice(e, 0, t), this._mergers.splice(e, 0, 1 * t.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this.invalidate("items"), this.trigger("added", {
            content: t,
            position: e
        })
    }, r.prototype.remove = function(t) {
        t = this.normalize(t, !0), t !== i && (this.trigger("remove", {
            content: this._items[t],
            position: t
        }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: t
        }))
    }, r.prototype.addTriggerableEvents = function() {
        var e = t.proxy(function(e, n) {
            return t.proxy(function(t) {
                t.relatedTarget !== this && (this.suppress([n]), e.apply(this, [].slice.call(arguments, 1)), this.release([n]))
            }, this)
        }, this);
        t.each({
            next: this.next,
            prev: this.prev,
            to: this.to,
            destroy: this.destroy,
            refresh: this.refresh,
            replace: this.replace,
            add: this.add,
            remove: this.remove
        }, t.proxy(function(t, n) {
            this.$element.on(t + ".owl.carousel", e(n, t + ".owl.carousel"))
        }, this))
    }, r.prototype.watchVisibility = function() {
        function n(t) {
            return t.offsetWidth > 0 && t.offsetHeight > 0
        }
        function i() {
            n(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"), this.refresh(), e.clearInterval(this.e._checkVisibile))
        }
        n(this.$element.get(0)) || (this.$element.addClass("owl-hidden"), e.clearInterval(this.e._checkVisibile), this.e._checkVisibile = e.setInterval(t.proxy(i, this), 500))
    }, r.prototype.preloadAutoWidthImages = function(e) {
        var n, i, r, o;
        n = 0, i = this, e.each(function(s, a) {
            r = t(a), o = new Image, o.onload = function() {
                n++, r.attr("src", o.src), r.css("opacity", 1), n >= e.length && (i.state.imagesLoaded=!0, i.initialize())
            }, o.src = r.attr("src") || r.attr("data-src") || r.attr("data-src-retina")
        })
    }, r.prototype.destroy = function() {
        this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass), this.settings.responsive!==!1 && t(e).off("resize.owl.carousel"), this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
        for (var i in this._plugins)
            this._plugins[i].destroy();
        (this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"), t(n).off(".owl.dragEvents"), this.$stage.get(0).onselectstart = function() {}, this.$stage.off("dragstart", function() {
            return !1
        })), this.$element.off(".owl"), this.$stage.children(".cloned").remove(), this.e = null, this.$element.removeData("owlCarousel"), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.unwrap()
    }, r.prototype.op = function(t, e, n) {
        var i = this.settings.rtl;
        switch (e) {
        case"<":
            return i ? t > n : n > t;
        case">":
            return i ? n > t : t > n;
        case">=":
            return i ? n >= t : t >= n;
        case"<=":
            return i ? t >= n : n >= t
        }
    }, r.prototype.on = function(t, e, n, i) {
        t.addEventListener ? t.addEventListener(e, n, i) : t.attachEvent && t.attachEvent("on" + e, n)
    }, r.prototype.off = function(t, e, n, i) {
        t.removeEventListener ? t.removeEventListener(e, n, i) : t.detachEvent && t.detachEvent("on" + e, n)
    }, r.prototype.trigger = function(e, n, i) {
        var r = {
            item: {
                count: this._items.length,
                index: this.current()
            }
        }, o = t.camelCase(t.grep(["on", e, i], function(t) {
            return t
        }).join("-").toLowerCase()), s = t.Event([e, "owl", i || "carousel"].join(".").toLowerCase(), t.extend({
            relatedTarget: this
        }, r, n));
        return this._supress[e] || (t.each(this._plugins, function(t, e) {
            e.onTrigger && e.onTrigger(s)
        }), this.$element.trigger(s), this.settings && "function" == typeof this.settings[o] && this.settings[o].apply(this, s)), s
    }, r.prototype.suppress = function(e) {
        t.each(e, t.proxy(function(t, e) {
            this._supress[e]=!0
        }, this))
    }, r.prototype.release = function(e) {
        t.each(e, t.proxy(function(t, e) {
            delete this._supress[e]
        }, this))
    }, r.prototype.browserSupport = function() {
        if (this.support3d = l(), this.support3d) {
            this.transformVendor = u();
            var t = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"];
            this.transitionEndVendor = t[a()], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : ""
        }
        this.state.orientation = e.orientation
    }, t.fn.owlCarousel = function(e) {
        return this.each(function() {
            t(this).data("owlCarousel") || t(this).data("owlCarousel", new r(this, e))
        })
    }, t.fn.owlCarousel.Constructor = r
}(window.Zepto || window.jQuery, window, document), function(t, e) {
    var n = function(e) {
        this._core = e, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel": t.proxy(function(e) {
                if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type))
                    for (var n = this._core.settings, i = n.center && Math.ceil(n.items / 2) || n.items, r = n.center&&-1 * i || 0, o = (e.property && e.property.value || this._core.current()) + r, s = this._core.clones().length, a = t.proxy(function(t, e) {
                        this.load(e)
                    }, this); r++<i;)
                        this.load(s / 2 + this._core.relative(o)), s && t.each(this._core.clones(this._core.relative(o++)), a)
            }, this)
        }, this._core.options = t.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    n.Defaults = {
        lazyLoad: !1
    }, n.prototype.load = function(n) {
        var i = this._core.$stage.children().eq(n), r = i && i.find(".owl-lazy");
        !r || t.inArray(i.get(0), this._loaded)>-1 || (r.each(t.proxy(function(n, i) {
            var r, o = t(i), s = e.devicePixelRatio > 1 && o.attr("data-src-retina") || o.attr("data-src");
            this._core.trigger("load", {
                element: o,
                url: s
            }, "lazy"), o.is("img") ? o.one("load.owl.lazy", t.proxy(function() {
                o.css("opacity", 1), this._core.trigger("loaded", {
                    element: o,
                    url: s
                }, "lazy")
            }, this)).attr("src", s) : (r = new Image, r.onload = t.proxy(function() {
                o.css({
                    "background-image": "url(" + s + ")",
                    opacity: "1"
                }), this._core.trigger("loaded", {
                    element: o,
                    url: s
                }, "lazy")
            }, this), r.src = s)
        }, this)), this._loaded.push(i.get(0)))
    }, n.prototype.destroy = function() {
        var t, e;
        for (t in this.handlers)
            this._core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
            "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Lazy = n
}(window.Zepto || window.jQuery, window, document), function(t) {
    var e = function(n) {
        this._core = n, this._handlers = {
            "initialized.owl.carousel": t.proxy(function() {
                this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": t.proxy(function(t) {
                this._core.settings.autoHeight && "position" == t.property.name && this.update()
            }, this),
            "loaded.owl.lazy": t.proxy(function(t) {
                this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update()
            }, this)
        }, this._core.options = t.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    e.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    }, e.prototype.update = function() {
        this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)
    }, e.prototype.destroy = function() {
        var t, e;
        for (t in this._handlers)
            this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
            "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
}(window.Zepto || window.jQuery, window, document), function(t, e, n) {
    var i = function(e) {
        this._core = e, this._videos = {}, this._playing = null, this._fullscreen=!1, this._handlers = {
            "resize.owl.carousel": t.proxy(function(t) {
                this._core.settings.video&&!this.isInFullScreen() && t.preventDefault()
            }, this),
            "refresh.owl.carousel changed.owl.carousel": t.proxy(function() {
                this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": t.proxy(function(e) {
                var n = t(e.content).find(".owl-video");
                n.length && (n.css("display", "none"), this.fetch(n, t(e.content)))
            }, this)
        }, this._core.options = t.extend({}, i.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function(t) {
            this.play(t)
        }, this))
    };
    i.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    }, i.prototype.fetch = function(t, e) {
        var n = t.attr("data-vimeo-id") ? "vimeo": "youtube", i = t.attr("data-vimeo-id") || t.attr("data-youtube-id"), r = t.attr("data-width") || this._core.settings.videoWidth, o = t.attr("data-height") || this._core.settings.videoHeight, s = t.attr("href");
        if (!s)
            throw new Error("Missing video URL.");
        if (i = s.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), i[3].indexOf("youtu")>-1)
            n = "youtube";
        else {
            if (!(i[3].indexOf("vimeo")>-1))
                throw new Error("Video URL not supported.");
            n = "vimeo"
        }
        i = i[6], this._videos[s] = {
            type: n,
            id: i,
            width: r,
            height: o
        }, e.attr("data-video", s), this.thumbnail(t, this._videos[s])
    }, i.prototype.thumbnail = function(e, n) {
        var i, r, o, s = n.width && n.height ? 'style="width:' + n.width + "px;height:" + n.height + 'px;"': "", a = e.find("img"), u = "src", l = "", c = this._core.settings, h = function(t) {
            r = '<div class="owl-video-play-icon"></div>', i = c.lazyLoad ? '<div class="owl-video-tn ' + l + '" ' + u + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>', e.after(i), e.after(r)
        };
        return e.wrap('<div class="owl-video-wrapper"' + s + "></div>"), this._core.settings.lazyLoad && (u = "data-src", l = "owl-lazy"), a.length ? (h(a.attr(u)), a.remove(), !1) : void("youtube" === n.type ? (o = "http://img.youtube.com/vi/" + n.id + "/hqdefault.jpg", h(o)) : "vimeo" === n.type && t.ajax({
            type: "GET",
            url: "http://vimeo.com/api/v2/video/" + n.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(t) {
                o = t[0].thumbnail_large, h(o)
            }
        }))
    }, i.prototype.stop = function() {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null
    }, i.prototype.play = function(e) {
        this._core.trigger("play", null, "video"), this._playing && this.stop();
        var n, i, r = t(e.target || e.srcElement), o = r.closest("." + this._core.settings.itemClass), s = this._videos[o.attr("data-video")], a = s.width || "100%", u = s.height || this._core.$stage.height();
        "youtube" === s.type ? n = '<iframe width="' + a + '" height="' + u + '" src="http://www.youtube.com/embed/' + s.id + "?autoplay=1&v=" + s.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === s.type && (n = '<iframe src="http://player.vimeo.com/video/' + s.id + '?autoplay=1" width="' + a + '" height="' + u + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), o.addClass("owl-video-playing"), this._playing = o, i = t('<div style="height:' + u + "px; width:" + a + 'px" class="owl-video-frame">' + n + "</div>"), r.after(i)
    }, i.prototype.isInFullScreen = function() {
        var i = n.fullscreenElement || n.mozFullScreenElement || n.webkitFullscreenElement;
        return i && t(i).parent().hasClass("owl-video-frame") && (this._core.speed(0), this._fullscreen=!0), i && this._fullscreen && this._playing?!1 : this._fullscreen ? (this._fullscreen=!1, !1) : this._playing && this._core.state.orientation !== e.orientation ? (this._core.state.orientation = e.orientation, !1) : !0
    }, i.prototype.destroy = function() {
        var t, e;
        this._core.$element.off("click.owl.video");
        for (t in this._handlers)
            this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
            "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Video = i
}(window.Zepto || window.jQuery, window, document), function(t, e, n, i) {
    var r = function(e) {
        this.core = e, this.core.options = t.extend({}, r.Defaults, this.core.options), this.swapping=!0, this.previous = i, this.next = i, this.handlers = {
            "change.owl.carousel": t.proxy(function(t) {
                "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function(t) {
                this.swapping = "translated" == t.type
            }, this),
            "translate.owl.carousel": t.proxy(function() {
                this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    r.Defaults = {
        animateOut: !1,
        animateIn: !1
    }, r.prototype.swap = function() {
        if (1 === this.core.settings.items && this.core.support3d) {
            this.core.speed(0);
            var e, n = t.proxy(this.clear, this), i = this.core.$stage.children().eq(this.previous), r = this.core.$stage.children().eq(this.next), o = this.core.settings.animateIn, s = this.core.settings.animateOut;
            this.core.current() !== this.previous && (s && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), i.css({
                left: e + "px"
            }).addClass("animated owl-animated-out").addClass(s).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", n)), o && r.addClass("animated owl-animated-in").addClass(o).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", n))
        }
    }, r.prototype.clear = function(e) {
        t(e.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd()
    }, r.prototype.destroy = function() {
        var t, e;
        for (t in this.handlers)
            this.core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
            "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Animate = r
}(window.Zepto || window.jQuery, window, document), function(t, e, n) {
    var i = function(e) {
        this.core = e, this.core.options = t.extend({}, i.Defaults, this.core.options), this.handlers = {
            "translated.owl.carousel refreshed.owl.carousel": t.proxy(function() {
                this.autoplay()
            }, this),
            "play.owl.autoplay": t.proxy(function(t, e, n) {
                this.play(e, n)
            }, this),
            "stop.owl.autoplay": t.proxy(function() {
                this.stop()
            }, this),
            "mouseover.owl.autoplay": t.proxy(function() {
                this.core.settings.autoplayHoverPause && this.pause()
            }, this),
            "mouseleave.owl.autoplay": t.proxy(function() {
                this.core.settings.autoplayHoverPause && this.autoplay()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    i.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, i.prototype.autoplay = function() {
        this.core.settings.autoplay&&!this.core.state.videoPlay ? (e.clearInterval(this.interval), this.interval = e.setInterval(t.proxy(function() {
            this.play()
        }, this), this.core.settings.autoplayTimeout)) : e.clearInterval(this.interval)
    }, i.prototype.play = function() {
        return n.hidden===!0 || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : this.core.settings.autoplay===!1 ? void e.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed)
    }, i.prototype.stop = function() {
        e.clearInterval(this.interval)
    }, i.prototype.pause = function() {
        e.clearInterval(this.interval)
    }, i.prototype.destroy = function() {
        var t, n;
        e.clearInterval(this.interval);
        for (t in this.handlers)
            this.core.$element.off(t, this.handlers[t]);
        for (n in Object.getOwnPropertyNames(this))
            "function" != typeof this[n] && (this[n] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.autoplay = i
}(window.Zepto || window.jQuery, window, document), function(t) {
    "use strict";
    var e = function(n) {
        this._core = n, this._initialized=!1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": t.proxy(function(e) {
                this._core.settings.dotsData && this._templates.push(t(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
            }, this),
            "add.owl.carousel": t.proxy(function(e) {
                this._core.settings.dotsData && this._templates.splice(e.position, 0, t(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
            }, this),
            "remove.owl.carousel prepared.owl.carousel": t.proxy(function(t) {
                this._core.settings.dotsData && this._templates.splice(t.position, 1)
            }, this),
            "change.owl.carousel": t.proxy(function(t) {
                if ("position" == t.property.name&&!this._core.state.revert&&!this._core.settings.loop && this._core.settings.navRewind) {
                    var e = this._core.current(), n = this._core.maximum(), i = this._core.minimum();
                    t.data = t.property.value > n ? e >= n ? i : n : t.property.value < i ? n : t.property.value
                }
            }, this),
            "changed.owl.carousel": t.proxy(function(t) {
                "position" == t.property.name && this.draw()
            }, this),
            "refreshed.owl.carousel": t.proxy(function() {
                this._initialized || (this.initialize(), this._initialized=!0), this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")
            }, this)
        }, this._core.options = t.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    e.Defaults = {
        nav: !1,
        navRewind: !0,
        navText: ["prev", "next"],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotData: !1,
        dotsSpeed: !1,
        dotsContainer: !1,
        controlsClass: "owl-controls"
    }, e.prototype.initialize = function() {
        var e, n, i = this._core.settings;
        i.dotsData || (this._templates = [t("<div>").addClass(i.dotClass).append(t("<span>")).prop("outerHTML")]), i.navContainer && i.dotsContainer || (this._controls.$container = t("<div>").addClass(i.controlsClass).appendTo(this.$element)), this._controls.$indicators = i.dotsContainer ? t(i.dotsContainer) : t("<div>").hide().addClass(i.dotsClass).appendTo(this._controls.$container), this._controls.$indicators.on("click", "div", t.proxy(function(e) {
            var n = t(e.target).parent().is(this._controls.$indicators) ? t(e.target).index(): t(e.target).parent().index();
            e.preventDefault(), this.to(n, i.dotsSpeed)
        }, this)), e = i.navContainer ? t(i.navContainer) : t("<div>").addClass(i.navContainerClass).prependTo(this._controls.$container), this._controls.$next = t("<" + i.navElement + ">"), this._controls.$previous = this._controls.$next.clone(), this._controls.$previous.addClass(i.navClass[0]).html(i.navText[0]).hide().prependTo(e).on("click", t.proxy(function() {
            this.prev(i.navSpeed)
        }, this)), this._controls.$next.addClass(i.navClass[1]).html(i.navText[1]).hide().appendTo(e).on("click", t.proxy(function() {
            this.next(i.navSpeed)
        }, this));
        for (n in this._overrides)
            this._core[n] = t.proxy(this[n], this)
    }, e.prototype.destroy = function() {
        var t, e, n, i;
        for (t in this._handlers)
            this.$element.off(t, this._handlers[t]);
        for (e in this._controls)
            this._controls[e].remove();
        for (i in this.overides)
            this._core[i] = this._overrides[i];
        for (n in Object.getOwnPropertyNames(this))
            "function" != typeof this[n] && (this[n] = null)
    }, e.prototype.update = function() {
        var t, e, n, i = this._core.settings, r = this._core.clones().length / 2, o = r + this._core.items().length, s = i.center || i.autoWidth || i.dotData ? 1: i.dotsEach || i.items;
        if ("page" !== i.slideBy && (i.slideBy = Math.min(i.slideBy, i.items)), i.dots || "page" == i.slideBy)
            for (this._pages = [], t = r, e = 0, n = 0; o > t; t++)(e >= s || 0 === e) 
                && (this._pages.push({
                    start: t - r,
                    end: t - r + s - 1
                }), e = 0, ++n), e += this._core.mergers(this._core.relative(t))
    }, e.prototype.draw = function() {
        var e, n, i = "", r = this._core.settings, o = (this._core.$stage.children(), this._core.relative(this._core.current()));
        if (!r.nav || r.loop || r.navRewind || (this._controls.$previous.toggleClass("disabled", 0 >= o), this._controls.$next.toggleClass("disabled", o >= this._core.maximum())), this._controls.$previous.toggle(r.nav), this._controls.$next.toggle(r.nav), r.dots) {
            if (e = this._pages.length - this._controls.$indicators.children().length, r.dotData && 0 !== e) {
                for (n = 0; n < this._controls.$indicators.children().length; n++)
                    i += this._templates[this._core.relative(n)];
                this._controls.$indicators.html(i)
            } else 
                e > 0 ? (i = new Array(e + 1).join(this._templates[0]), this._controls.$indicators.append(i)) : 0 > e && this._controls.$indicators.children().slice(e).remove();
            this._controls.$indicators.find(".active").removeClass("active"), this._controls.$indicators.children().eq(t.inArray(this.current(), this._pages)).addClass("active")
        }
        this._controls.$indicators.toggle(r.dots)
    }, e.prototype.onTrigger = function(e) {
        var n = this._core.settings;
        e.page = {
            index: t.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: n && (n.center || n.autoWidth || n.dotData ? 1 : n.dotsEach || n.items)
        }
    }, e.prototype.current = function() {
        var e = this._core.relative(this._core.current());
        return t.grep(this._pages, function(t) {
            return t.start <= e && t.end >= e
        }).pop()
    }, e.prototype.getPosition = function(e) {
        var n, i, r = this._core.settings;
        return "page" == r.slideBy ? (n = t.inArray(this.current(), this._pages), i = this._pages.length, e?++n : --n, n = this._pages[(n%i + i)%i].start) : (n = this._core.relative(this._core.current()), i = this._core.items().length, e ? n += r.slideBy : n -= r.slideBy), n
    }, e.prototype.next = function(e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
    }, e.prototype.prev = function(e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
    }, e.prototype.to = function(e, n, i) {
        var r;
        i ? t.proxy(this._overrides.to, this._core)(e, n) : (r = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e%r + r)%r].start, n))
    }, t.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, window, document), function(t, e) {
    "use strict";
    var n = function(i) {
        this._core = i, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": t.proxy(function() {
                "URLHash" == this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": t.proxy(function(e) {
                var n = t(e.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
                this._hashes[n] = e.content
            }, this)
        }, this._core.options = t.extend({}, n.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function() {
            var t = e.location.hash.substring(1), n = this._core.$stage.children(), i = this._hashes[t] && n.index(this._hashes[t]) || 0;
            return t ? void this._core.to(i, !1, !0) : !1
        }, this))
    };
    n.Defaults = {
        URLhashListener: !1
    }, n.prototype.destroy = function() {
        var n, i;
        t(e).off("hashchange.owl.navigation");
        for (n in this._handlers)
            this._core.$element.off(n, this._handlers[n]);
        for (i in Object.getOwnPropertyNames(this))
            "function" != typeof this[i] && (this[i] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Hash = n
}(window.Zepto || window.jQuery, window, document), function(t, e, n) {
    var i = window.matchMedia;
    "undefined" != typeof module && module.exports ? module.exports = n(i) : "function" == typeof define && define.amd ? define(function() {
        return e[t] = n(i)
    }) : e[t] = n(i)
}("enquire", this, function(t) {
    "use strict";
    function e(t, e) {
        var n, i = 0, r = t.length;
        for (i; r > i && (n = e(t[i], i), n!==!1); i++);
    }
    function n(t) {
        return "[object Array]" === Object.prototype.toString.apply(t)
    }
    function i(t) {
        return "function" == typeof t
    }
    function r(t) {
        this.options = t, !t.deferSetup && this.setup()
    }
    function o(e, n) {
        this.query = e, this.isUnconditional = n, this.handlers = [], this.mql = t(e);
        var i = this;
        this.listener = function(t) {
            i.mql = t, i.assess()
        }, this.mql.addListener(this.listener)
    }
    function s() {
        if (!t)
            throw new Error("matchMedia not present, legacy browsers require a polyfill");
        this.queries = {}, this.browserIsIncapable=!t("only all").matches
    }
    return r.prototype = {
        setup: function() {
            this.options.setup && this.options.setup(), this.initialised=!0
        },
        on: function() {
            !this.initialised && this.setup(), this.options.match && this.options.match()
        },
        off: function() {
            this.options.unmatch && this.options.unmatch()
        },
        destroy: function() {
            this.options.destroy ? this.options.destroy() : this.off()
        },
        equals: function(t) {
            return this.options === t || this.options.match === t
        }
    }, o.prototype = {
        addHandler: function(t) {
            var e = new r(t);
            this.handlers.push(e), this.matches() && e.on()
        },
        removeHandler: function(t) {
            var n = this.handlers;
            e(n, function(e, i) {
                return e.equals(t) ? (e.destroy(), !n.splice(i, 1)) : void 0
            })
        },
        matches: function() {
            return this.mql.matches || this.isUnconditional
        },
        clear: function() {
            e(this.handlers, function(t) {
                t.destroy()
            }), this.mql.removeListener(this.listener), this.handlers.length = 0
        },
        assess: function() {
            var t = this.matches() ? "on": "off";
            e(this.handlers, function(e) {
                e[t]()
            })
        }
    }, s.prototype = {
        register: function(t, r, s) {
            var a = this.queries, u = s && this.browserIsIncapable;
            return a[t] || (a[t] = new o(t, u)), i(r) && (r = {
                match: r
            }), n(r) || (r = [r]), e(r, function(e) {
                i(e) && (e = {
                    match: e
                }), a[t].addHandler(e)
            }), this
        },
        unregister: function(t, e) {
            var n = this.queries[t];
            return n && (e ? n.removeHandler(e) : (n.clear(), delete this.queries[t])), this
        }
    }, new s
}), function(t, e) {
    "use strict";
    function n(t) {
        this.callback = t, this.ticking=!1
    }
    function i(e) {
        return e && "undefined" != typeof t && (e === t || e.nodeType)
    }
    function r(t) {
        if (arguments.length <= 0)
            throw new Error("Missing arguments in extend function");
        var e, n, o = t || {};
        for (n = 1; n < arguments.length; n++) {
            var s = arguments[n] || {};
            for (e in s)
                o[e] = "object" != typeof o[e] || i(o[e]) ? o[e] || s[e] : r(o[e], s[e])
        }
        return o
    }
    function o(t) {
        return t === Object(t) ? t : {
            down: t,
            up: t
        }
    }
    function s(t, e) {
        e = r(e, s.options), this.lastKnownScrollY = 0, this.elem = t, this.debouncer = new n(this.update.bind(this)), this.tolerance = o(e.tolerance), this.classes = e.classes, this.offset = e.offset, this.scroller = e.scroller, this.initialised=!1, this.onPin = e.onPin, this.onUnpin = e.onUnpin, this.onTop = e.onTop, this.onNotTop = e.onNotTop
    }
    var a = {
        bind: !!function() {}.bind,
        classList: "classList"in e.documentElement,
        rAF: !!(t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame)
    };
    t.requestAnimationFrame = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame, n.prototype = {
        constructor: n,
        update: function() {
            this.callback && this.callback(), this.ticking=!1
        },
        requestTick: function() {
            this.ticking || (requestAnimationFrame(this.rafCallback || (this.rafCallback = this.update.bind(this))), this.ticking=!0)
        },
        handleEvent: function() {
            this.requestTick()
        }
    }, s.prototype = {
        constructor: s,
        init: function() {
            return s.cutsTheMustard ? (this.elem.classList.add(this.classes.initial), setTimeout(this.attachEvent.bind(this), 100), this) : void 0
        },
        destroy: function() {
            var t = this.classes;
            this.initialised=!1, this.elem.classList.remove(t.unpinned, t.pinned, t.top, t.initial), this.scroller.removeEventListener("scroll", this.debouncer, !1)
        },
        attachEvent: function() {
            this.initialised || (this.lastKnownScrollY = this.getScrollY(), this.initialised=!0, this.scroller.addEventListener("scroll", this.debouncer, !1), this.debouncer.handleEvent())
        },
        unpin: function() {
            var t = this.elem.classList, e = this.classes;
            (t.contains(e.pinned) ||!t.contains(e.unpinned)) && (t.add(e.unpinned), t.remove(e.pinned), this.onUnpin && this.onUnpin.call(this))
        },
        pin: function() {
            var t = this.elem.classList, e = this.classes;
            t.contains(e.unpinned) && (t.remove(e.unpinned), t.add(e.pinned), this.onPin && this.onPin.call(this))
        },
        top: function() {
            var t = this.elem.classList, e = this.classes;
            t.contains(e.top) || (t.add(e.top), t.remove(e.notTop), this.onTop && this.onTop.call(this))
        },
        notTop: function() {
            var t = this.elem.classList, e = this.classes;
            t.contains(e.notTop) || (t.add(e.notTop), t.remove(e.top), this.onNotTop && this.onNotTop.call(this))
        },
        getScrollY: function() {
            return void 0 !== this.scroller.pageYOffset ? this.scroller.pageYOffset : void 0 !== this.scroller.scrollTop ? this.scroller.scrollTop : (e.documentElement || e.body.parentNode || e.body).scrollTop
        },
        getViewportHeight: function() {
            return t.innerHeight || e.documentElement.clientHeight || e.body.clientHeight
        },
        getDocumentHeight: function() {
            var t = e.body, n = e.documentElement;
            return Math.max(t.scrollHeight, n.scrollHeight, t.offsetHeight, n.offsetHeight, t.clientHeight, n.clientHeight)
        },
        getElementHeight: function(t) {
            return Math.max(t.scrollHeight, t.offsetHeight, t.clientHeight)
        },
        getScrollerHeight: function() {
            return this.scroller === t || this.scroller === e.body ? this.getDocumentHeight() : this.getElementHeight(this.scroller)
        },
        isOutOfBounds: function(t) {
            var e = 0 > t, n = t + this.getViewportHeight() > this.getScrollerHeight();
            return e || n
        },
        toleranceExceeded: function(t, e) {
            return Math.abs(t - this.lastKnownScrollY) >= this.tolerance[e]
        },
        shouldUnpin: function(t, e) {
            var n = t > this.lastKnownScrollY, i = t >= this.offset;
            return n && i && e
        },
        shouldPin: function(t, e) {
            var n = t < this.lastKnownScrollY, i = t <= this.offset;
            return n && e || i
        },
        update: function() {
            var t = this.getScrollY(), e = t > this.lastKnownScrollY ? "down": "up", n = this.toleranceExceeded(t, e);
            this.isOutOfBounds(t) || (t <= this.offset ? this.top() : this.notTop(), this.shouldUnpin(t, n) ? this.unpin() : this.shouldPin(t, n) && this.pin(), this.lastKnownScrollY = t)
        }
    }, s.options = {
        tolerance: {
            up: 0,
            down: 0
        },
        offset: 0,
        scroller: t,
        classes: {
            pinned: "headroom--pinned",
            unpinned: "headroom--unpinned",
            top: "headroom--top",
            notTop: "headroom--not-top",
            initial: "headroom"
        }
    }, s.cutsTheMustard = "undefined" != typeof a && a.rAF && a.bind && a.classList, t.Headroom = s
}(window, document), function(t) {
    t && (t.fn.headroom = function(e) {
        return this.each(function() {
            var n = t(this), i = n.data("headroom"), r = "object" == typeof e && e;
            r = t.extend(!0, {}, Headroom.options, r), i || (i = new Headroom(this, r), i.init(), n.data("headroom", i)), "string" == typeof e && i[e]()
        })
    }, t("[data-headroom]").each(function() {
        var e = t(this);
        e.headroom(e.data())
    }))
}(window.Zepto || window.jQuery), function(t) {
    t && t.module("headroom", []).directive("headroom", function() {
        return {
            restrict: "EA",
            scope: {
                tolerance: "=",
                offset: "=",
                classes: "=",
                scroller: "@"
            },
            link: function(e, n) {
                var i = {};
                t.forEach(Headroom.options, function(t, n) {
                    i[n] = e[n] || Headroom.options[n]
                }), i.scroller && (i.scroller = t.element(i.scroller)[0]);
                var r = new Headroom(n[0], i);
                r.init(), e.$on("destroy", function() {
                    r.destroy()
                })
            }
        }
    })
}(window.angular), function(t) {
    t.fn.addBack = t.fn.addBack || t.fn.andSelf, t.fn.extend({
        actual: function(e, n) {
            if (!this[e])
                throw '$.actual => The jQuery method "' + e + '" you called does not exist';
            var i, r, o = {
                absolute: !1,
                clone: !1,
                includeMargin: !1
            }, s = t.extend(o, n), a = this.eq(0);
            if (s.clone===!0)
                i = function() {
                    var t = "position: absolute !important; top: -1000 !important; ";
                    a = a.clone().attr("style", t).appendTo("body")
                }, r = function() {
                    a.remove()
                };
            else {
                var u, l = [], c = "";
                i = function() {
                    u = a.parents().addBack().filter(":hidden"), c += "visibility: hidden !important; display: block !important; ", s.absolute===!0 && (c += "position: absolute !important; "), u.each(function() {
                        var e = t(this), n = e.attr("style");
                        l.push(n), e.attr("style", n ? n + ";" + c : c)
                    })
                }, r = function() {
                    u.each(function(e) {
                        var n = t(this), i = l[e];
                        void 0 === i ? n.removeAttr("style") : n.attr("style", i)
                    })
                }
            }
            i();
            var h = /(outer)/.test(e) ? a[e](s.includeMargin): a[e]();
            return r(), h
        }
    })
}(jQuery), function(t, e, n, i) {
    "use strict";
    function r(t, e, n) {
        return setTimeout(c(t, n), e)
    }
    function o(t, e, n) {
        return Array.isArray(t) ? (s(t, n[e], n), !0) : !1
    }
    function s(t, e, n) {
        var r, o;
        if (t)
            if (t.forEach)
                t.forEach(e, n);
            else if (t.length !== i)
                for (r = 0, o = t.length; o > r; r++)
                    e.call(n, t[r], r, t);
            else 
                for (r in t)
                    t.hasOwnProperty(r) && e.call(n, t[r], r, t)
    }
    function a(t, e, n) {
        for (var r = Object.keys(e), o = 0, s = r.length; s > o; o++)(!n || n && t[r[o]] === i) 
            && (t[r[o]] = e[r[o]]);
        return t
    }
    function u(t, e) {
        return a(t, e, !0)
    }
    function l(t, e, n) {
        var i, r = e.prototype;
        i = t.prototype = Object.create(r), i.constructor = t, i._super = r, n && a(i, n)
    }
    function c(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }
    function h(t, e) {
        return typeof t == ae ? t.apply(e ? e[0] || i : i, e) : t
    }
    function p(t, e) {
        return t === i ? e : t
    }
    function f(t, e, n) {
        s(v(e), function(e) {
            t.addEventListener(e, n, !1)
        })
    }
    function d(t, e, n) {
        s(v(e), function(e) {
            t.removeEventListener(e, n, !1)
        })
    }
    function g(t, e) {
        for (; t;) {
            if (t == e)
                return !0;
            t = t.parentNode
        }
        return !1
    }
    function m(t, e) {
        return t.indexOf(e)>-1
    }
    function v(t) {
        return t.trim().split(/\s+/g)
    }
    function y(t, e, n) {
        if (t.indexOf&&!n)
            return t.indexOf(e);
        for (var i = 0, r = t.length; r > i; i++)
            if (n && t[i][n] == e ||!n && t[i] === e)
                return i;
        return - 1
    }
    function w(t) {
        return Array.prototype.slice.call(t, 0)
    }
    function b(t, e, n) {
        for (var i = [], r = [], o = 0, s = t.length; s > o; o++) {
            var a = e ? t[o][e]: t[o];
            y(r, a) < 0 && i.push(t[o]), r[o] = a
        }
        return n && (i = e ? i.sort(function(t, n) {
            return t[e] > n[e]
        }) : i.sort()), i
    }
    function _(t, e) {
        for (var n, r, o = e[0].toUpperCase() + e.slice(1), s = 0, a = oe.length; a > s; s++)
            if (n = oe[s], r = n ? n + o : e, r in t)
                return r;
        return i
    }
    function x() {
        return he++
    }
    function T(e, n) {
        var i = this;
        this.manager = e, this.callback = n, this.element = e.element, this.target = e.options.inputTarget, this.domHandler = function(t) {
            h(e.options.enable, [e]) && i.handler(t)
        }, this.evEl && f(this.element, this.evEl, this.domHandler), this.evTarget && f(this.target, this.evTarget, this.domHandler), this.evWin && f(t, this.evWin, this.domHandler)
    }
    function E(t) {
        var e;
        return new (e = de ? R : ge ? $ : fe ? q : P)(t, C)
    }
    function C(t, e, n) {
        var i = n.pointers.length, r = n.changedPointers.length, o = e & _e && i - r === 0, s = e & (Te | Ee) && i - r === 0;
        n.isFirst=!!o, n.isFinal=!!s, o && (t.session = {}), n.eventType = e, S(t, n), t.emit("hammer.input", n), t.recognize(n), t.session.prevInput = n
    }
    function S(t, e) {
        var n = t.session, i = e.pointers, r = i.length;
        n.firstInput || (n.firstInput = L(e)), r > 1&&!n.firstMultiple ? n.firstMultiple = L(e) : 1 === r && (n.firstMultiple=!1);
        var o = n.firstInput, s = n.firstMultiple, a = s ? s.center: o.center, u = e.center = j(i);
        e.timeStamp = ce(), e.deltaTime = e.timeStamp - o.timeStamp, e.angle = O(a, u), e.distance = A(a, u), I(n, e), e.offsetDirection = N(e.deltaX, e.deltaY), e.scale = s ? z(s.pointers, i) : 1, e.rotation = s ? M(s.pointers, i) : 0, k(n, e);
        var l = t.element;
        g(e.srcEvent.target, l) && (l = e.srcEvent.target), e.target = l
    }
    function I(t, e) {
        var n = e.center, i = t.offsetDelta || {}, r = t.prevDelta || {}, o = t.prevInput || {};
        (e.eventType === _e || o.eventType === Te) && (r = t.prevDelta = {
            x: o.deltaX || 0,
            y: o.deltaY || 0
        }, i = t.offsetDelta = {
            x: n.x,
            y: n.y
        }), e.deltaX = r.x + (n.x - i.x), e.deltaY = r.y + (n.y - i.y)
    }
    function k(t, e) {
        var n, r, o, s, a = t.lastInterval || e, u = e.timeStamp - a.timeStamp;
        if (e.eventType != Ee && (u > be || a.velocity === i)) {
            var l = a.deltaX - e.deltaX, c = a.deltaY - e.deltaY, h = D(u, l, c);
            r = h.x, o = h.y, n = le(h.x) > le(h.y) ? h.x : h.y, s = N(l, c), t.lastInterval = e
        } else 
            n = a.velocity, r = a.velocityX, o = a.velocityY, s = a.direction;
        e.velocity = n, e.velocityX = r, e.velocityY = o, e.direction = s
    }
    function L(t) {
        for (var e = [], n = 0; n < t.pointers.length; n++)
            e[n] = {
                clientX: ue(t.pointers[n].clientX),
                clientY: ue(t.pointers[n].clientY)
            };
        return {
            timeStamp: ce(),
            pointers: e,
            center: j(e),
            deltaX: t.deltaX,
            deltaY: t.deltaY
        }
    }
    function j(t) {
        var e = t.length;
        if (1 === e)
            return {
                x: ue(t[0].clientX),
                y: ue(t[0].clientY)
            };
        for (var n = 0, i = 0, r = 0; e > r; r++)
            n += t[r].clientX, i += t[r].clientY;
        return {
            x: ue(n / e),
            y: ue(i / e)
        }
    }
    function D(t, e, n) {
        return {
            x: e / t || 0,
            y: n / t || 0
        }
    }
    function N(t, e) {
        return t === e ? Ce : le(t) >= le(e) ? t > 0 ? Se : Ie : e > 0 ? ke : Le
    }
    function A(t, e, n) {
        n || (n = Ae);
        var i = e[n[0]] - t[n[0]], r = e[n[1]] - t[n[1]];
        return Math.sqrt(i * i + r * r)
    }
    function O(t, e, n) {
        n || (n = Ae);
        var i = e[n[0]] - t[n[0]], r = e[n[1]] - t[n[1]];
        return 180 * Math.atan2(r, i) / Math.PI
    }
    function M(t, e) {
        return O(e[1], e[0], Oe) - O(t[1], t[0], Oe)
    }
    function z(t, e) {
        return A(e[0], e[1], Oe) / A(t[0], t[1], Oe)
    }
    function P() {
        this.evEl = ze, this.evWin = Pe, this.allow=!0, this.pressed=!1, T.apply(this, arguments)
    }
    function R() {
        this.evEl = He, this.evWin = qe, T.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
    }
    function $() {
        this.evTarget = Fe, this.targetIds = {}, T.apply(this, arguments)
    }
    function H(t, e) {
        var n = w(t.touches), i = this.targetIds;
        if (e & (_e | xe) && 1 === n.length)
            return i[n[0].identifier]=!0, [n, n];
        var r, o, s = w(t.targetTouches), a = w(t.changedTouches), u = [];
        if (e === _e)
            for (r = 0, o = s.length; o > r; r++)
                i[s[r].identifier]=!0;
        for (r = 0, o = a.length; o > r; r++)
            i[a[r].identifier] && u.push(a[r]), e & (Te | Ee) && delete i[a[r].identifier];
        return u.length ? [b(s.concat(u), "identifier", !0), u] : void 0
    }
    function q() {
        T.apply(this, arguments);
        var t = c(this.handler, this);
        this.touch = new $(this.manager, t), this.mouse = new P(this.manager, t)
    }
    function W(t, e) {
        this.manager = t, this.set(e)
    }
    function F(t) {
        if (m(t, Qe))
            return Qe;
        var e = m(t, Ge), n = m(t, Je);
        return e && n ? Ge + " " + Je : e || n ? e ? Ge : Je : m(t, Ve) ? Ve : Ue
    }
    function B(t) {
        this.id = x(), this.manager = null, this.options = u(t || {}, this.defaults), this.options.enable = p(this.options.enable, !0), this.state = Ze, this.simultaneous = {}, this.requireFail = []
    }
    function X(t) {
        return t & rn ? "cancel" : t & en ? "end" : t & tn ? "move" : t & Ke ? "start" : ""
    }
    function Y(t) {
        return t == Le ? "down" : t == ke ? "up" : t == Se ? "left" : t == Ie ? "right" : ""
    }
    function U(t, e) {
        var n = e.manager;
        return n ? n.get(t) : t
    }
    function V() {
        B.apply(this, arguments)
    }
    function Q() {
        V.apply(this, arguments), this.pX = null, this.pY = null
    }
    function G() {
        V.apply(this, arguments)
    }
    function J() {
        B.apply(this, arguments), this._timer = null, this._input = null
    }
    function Z() {
        V.apply(this, arguments)
    }
    function K() {
        V.apply(this, arguments)
    }
    function te() {
        B.apply(this, arguments), this.pTime=!1, this.pCenter=!1, this._timer = null, this._input = null, this.count = 0
    }
    function ee(t, e) {
        return e = e || {}, e.recognizers = p(e.recognizers, ee.defaults.preset), new ne(t, e)
    }
    function ne(t, e) {
        e = e || {}, this.options = u(e, ee.defaults), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.element = t, this.input = E(this), this.touchAction = new W(this, this.options.touchAction), ie(this, !0), s(e.recognizers, function(t) {
            var e = this.add(new t[0](t[1]));
            t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[2])
        }, this)
    }
    function ie(t, e) {
        var n = t.element;
        s(t.options.cssProps, function(t, i) {
            n.style[_(n.style, i)] = e ? t : ""
        })
    }
    function re(t, n) {
        var i = e.createEvent("Event");
        i.initEvent(t, !0, !0), i.gesture = n, n.target.dispatchEvent(i)
    }
    var oe = ["", "webkit", "moz", "MS", "ms", "o"], se = e.createElement("div"), ae = "function", ue = Math.round, le = Math.abs, ce = Date.now, he = 1, pe = /mobile|tablet|ip(ad|hone|od)|android/i, fe = "ontouchstart"in t, de = _(t, "PointerEvent") !== i, ge = fe && pe.test(navigator.userAgent), me = "touch", ve = "pen", ye = "mouse", we = "kinect", be = 25, _e = 1, xe = 2, Te = 4, Ee = 8, Ce = 1, Se = 2, Ie = 4, ke = 8, Le = 16, je = Se | Ie, De = ke | Le, Ne = je | De, Ae = ["x", "y"], Oe = ["clientX", "clientY"];
    T.prototype = {
        handler: function() {},
        destroy: function() {
            this.evEl && d(this.element, this.evEl, this.domHandler), this.evTarget && d(this.target, this.evTarget, this.domHandler), this.evWin && d(t, this.evWin, this.domHandler)
        }
    };
    var Me = {
        mousedown: _e,
        mousemove: xe,
        mouseup: Te
    }, ze = "mousedown", Pe = "mousemove mouseup";
    l(P, T, {
        handler: function(t) {
            var e = Me[t.type];
            e & _e && 0 === t.button && (this.pressed=!0), e & xe && 1 !== t.which && (e = Te), this.pressed && this.allow && (e & Te && (this.pressed=!1), this.callback(this.manager, e, {
                pointers: [t],
                changedPointers: [t],
                pointerType: ye,
                srcEvent: t
            }))
        }
    });
    var Re = {
        pointerdown: _e,
        pointermove: xe,
        pointerup: Te,
        pointercancel: Ee,
        pointerout: Ee
    }, $e = {
        2: me,
        3: ve,
        4: ye,
        5: we
    }, He = "pointerdown", qe = "pointermove pointerup pointercancel";
    t.MSPointerEvent && (He = "MSPointerDown", qe = "MSPointerMove MSPointerUp MSPointerCancel"), l(R, T, {
        handler: function(t) {
            var e = this.store, n=!1, i = t.type.toLowerCase().replace("ms", ""), r = Re[i], o = $e[t.pointerType] || t.pointerType, s = o == me;
            r & _e && (0 === t.button || s) ? e.push(t) : r & (Te | Ee) && (n=!0);
            var a = y(e, t.pointerId, "pointerId");
            0 > a || (e[a] = t, this.callback(this.manager, r, {
                pointers: e,
                changedPointers: [t],
                pointerType: o,
                srcEvent: t
            }), n && e.splice(a, 1))
        }
    });
    var We = {
        touchstart: _e,
        touchmove: xe,
        touchend: Te,
        touchcancel: Ee
    }, Fe = "touchstart touchmove touchend touchcancel";
    l($, T, {
        handler: function(t) {
            var e = We[t.type], n = H.call(this, t, e);
            n && this.callback(this.manager, e, {
                pointers: n[0],
                changedPointers: n[1],
                pointerType: me,
                srcEvent: t
            })
        }
    }), l(q, T, {
        handler: function(t, e, n) {
            var i = n.pointerType == me, r = n.pointerType == ye;
            if (i)
                this.mouse.allow=!1;
            else if (r&&!this.mouse.allow)
                return;
            e & (Te | Ee) && (this.mouse.allow=!0), this.callback(t, e, n)
        },
        destroy: function() {
            this.touch.destroy(), this.mouse.destroy()
        }
    });
    var Be = _(se.style, "touchAction"), Xe = Be !== i, Ye = "compute", Ue = "auto", Ve = "manipulation", Qe = "none", Ge = "pan-x", Je = "pan-y";
    W.prototype = {
        set: function(t) {
            t == Ye && (t = this.compute()), Xe && (this.manager.element.style[Be] = t), this.actions = t.toLowerCase().trim()
        },
        update: function() {
            this.set(this.manager.options.touchAction)
        },
        compute: function() {
            var t = [];
            return s(this.manager.recognizers, function(e) {
                h(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
            }), F(t.join(" "))
        },
        preventDefaults: function(t) {
            if (!Xe) {
                var e = t.srcEvent, n = t.offsetDirection;
                if (this.manager.session.prevented)
                    return void e.preventDefault();
                var i = this.actions, r = m(i, Qe), o = m(i, Je), s = m(i, Ge);
                return r || o && s || o && n & je || s && n & De ? this.preventSrc(e) : void 0
            }
        },
        preventSrc: function(t) {
            this.manager.session.prevented=!0, t.preventDefault()
        }
    };
    var Ze = 1, Ke = 2, tn = 4, en = 8, nn = en, rn = 16, on = 32;
    B.prototype = {
        defaults: {},
        set: function(t) {
            return a(this.options, t), this.manager && this.manager.touchAction.update(), this
        },
        recognizeWith: function(t) {
            if (o(t, "recognizeWith", this))
                return this;
            var e = this.simultaneous;
            return t = U(t, this), e[t.id] || (e[t.id] = t, t.recognizeWith(this)), this
        },
        dropRecognizeWith: function(t) {
            return o(t, "dropRecognizeWith", this) ? this : (t = U(t, this), delete this.simultaneous[t.id], this)
        },
        requireFailure: function(t) {
            if (o(t, "requireFailure", this))
                return this;
            var e = this.requireFail;
            return t = U(t, this), - 1 === y(e, t) && (e.push(t), t.requireFailure(this)), this
        },
        dropRequireFailure: function(t) {
            if (o(t, "dropRequireFailure", this))
                return this;
            t = U(t, this);
            var e = y(this.requireFail, t);
            return e>-1 && this.requireFail.splice(e, 1), this
        },
        hasRequireFailures: function() {
            return this.requireFail.length > 0
        },
        canRecognizeWith: function(t) {
            return !!this.simultaneous[t.id]
        },
        emit: function(t) {
            function e(e) {
                n.manager.emit(n.options.event + (e ? X(i) : ""), t)
            }
            var n = this, i = this.state;
            en > i && e(!0), e(), i >= en && e(!0)
        },
        tryEmit: function(t) {
            return this.canEmit() ? this.emit(t) : void(this.state = on)
        },
        canEmit: function() {
            for (var t = 0; t < this.requireFail.length; t++)
                if (!(this.requireFail[t].state & (on | Ze)))
                    return !1;
            return !0
        },
        recognize: function(t) {
            var e = a({}, t);
            return h(this.options.enable, [this, e]) ? (this.state & (nn | rn | on) && (this.state = Ze), this.state = this.process(e), void(this.state & (Ke | tn | en | rn) && this.tryEmit(e))) : (this.reset(), void(this.state = on))
        },
        process: function() {},
        getTouchAction: function() {},
        reset: function() {}
    }, l(V, B, {
        defaults: {
            pointers: 1
        },
        attrTest: function(t) {
            var e = this.options.pointers;
            return 0 === e || t.pointers.length === e
        },
        process: function(t) {
            var e = this.state, n = t.eventType, i = e & (Ke | tn), r = this.attrTest(t);
            return i && (n & Ee ||!r) ? e | rn : i || r ? n & Te ? e | en : e & Ke ? e | tn : Ke : on
        }
    }), l(Q, V, {
        defaults: {
            event: "pan",
            threshold: 10,
            pointers: 1,
            direction: Ne
        },
        getTouchAction: function() {
            var t = this.options.direction;
            if (t === Ne)
                return [Qe];
            var e = [];
            return t & je && e.push(Je), t & De && e.push(Ge), e
        },
        directionTest: function(t) {
            var e = this.options, n=!0, i = t.distance, r = t.direction, o = t.deltaX, s = t.deltaY;
            return r & e.direction || (e.direction & je ? (r = 0 === o ? Ce : 0 > o ? Se : Ie, n = o != this.pX, i = Math.abs(t.deltaX)) : (r = 0 === s ? Ce : 0 > s ? ke : Le, n = s != this.pY, i = Math.abs(t.deltaY))), t.direction = r, n && i > e.threshold && r & e.direction
        },
        attrTest: function(t) {
            return V.prototype.attrTest.call(this, t) && (this.state & Ke ||!(this.state & Ke) && this.directionTest(t))
        },
        emit: function(t) {
            this.pX = t.deltaX, this.pY = t.deltaY;
            var e = Y(t.direction);
            e && this.manager.emit(this.options.event + e, t), this._super.emit.call(this, t)
        }
    }), l(G, V, {
        defaults: {
            event: "pinch",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [Qe]
        },
        attrTest: function(t) {
            return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & Ke)
        },
        emit: function(t) {
            if (this._super.emit.call(this, t), 1 !== t.scale) {
                var e = t.scale < 1 ? "in": "out";
                this.manager.emit(this.options.event + e, t)
            }
        }
    }), l(J, B, {
        defaults: {
            event: "press",
            pointers: 1,
            time: 500,
            threshold: 5
        },
        getTouchAction: function() {
            return [Ue]
        },
        process: function(t) {
            var e = this.options, n = t.pointers.length === e.pointers, i = t.distance < e.threshold, o = t.deltaTime > e.time;
            if (this._input = t, !i ||!n || t.eventType & (Te | Ee)&&!o)
                this.reset();
            else if (t.eventType & _e)
                this.reset(), this._timer = r(function() {
                    this.state = nn, this.tryEmit()
                }, e.time, this);
            else if (t.eventType & Te)
                return nn;
            return on
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function(t) {
            this.state === nn && (t && t.eventType & Te ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = ce(), this.manager.emit(this.options.event, this._input)))
        }
    }), l(Z, V, {
        defaults: {
            event: "rotate",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [Qe]
        },
        attrTest: function(t) {
            return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & Ke)
        }
    }), l(K, V, {
        defaults: {
            event: "swipe",
            threshold: 10,
            velocity: .65,
            direction: je | De,
            pointers: 1
        },
        getTouchAction: function() {
            return Q.prototype.getTouchAction.call(this)
        },
        attrTest: function(t) {
            var e, n = this.options.direction;
            return n & (je | De) ? e = t.velocity : n & je ? e = t.velocityX : n & De && (e = t.velocityY), this._super.attrTest.call(this, t) && n & t.direction && le(e) > this.options.velocity && t.eventType & Te
        },
        emit: function(t) {
            var e = Y(t.direction);
            e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
        }
    }), l(te, B, {
        defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 2,
            posThreshold: 10
        },
        getTouchAction: function() {
            return [Ve]
        },
        process: function(t) {
            var e = this.options, n = t.pointers.length === e.pointers, i = t.distance < e.threshold, o = t.deltaTime < e.time;
            if (this.reset(), t.eventType & _e && 0 === this.count)
                return this.failTimeout();
            if (i && o && n) {
                if (t.eventType != Te)
                    return this.failTimeout();
                var s = this.pTime ? t.timeStamp - this.pTime < e.interval: !0, a=!this.pCenter || A(this.pCenter, t.center) < e.posThreshold;
                this.pTime = t.timeStamp, this.pCenter = t.center, a && s ? this.count += 1 : this.count = 1, this._input = t;
                var u = this.count%e.taps;
                if (0 === u)
                    return this.hasRequireFailures() ? (this._timer = r(function() {
                        this.state = nn, this.tryEmit()
                    }, e.interval, this), Ke) : nn
            }
            return on
        },
        failTimeout: function() {
            return this._timer = r(function() {
                this.state = on
            }, this.options.interval, this), on
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function() {
            this.state == nn && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
        }
    }), ee.VERSION = "2.0.2", ee.defaults = {
        domEvents: !1,
        touchAction: Ye,
        inputTarget: null,
        enable: !0,
        preset: [[Z, {
            enable: !1
        }
        ], [G, {
            enable: !1
        }, ["rotate"]], [K, {
            direction: je
        }
        ], [Q, {
            direction: je
        }, ["swipe"]], [te], [te, {
            event: "doubletap",
            taps: 2
        }, ["tap"]], [J]],
        cssProps: {
            userSelect: "none",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    };
    var sn = 1, an = 2;
    ne.prototype = {
        set: function(t) {
            return a(this.options, t), this
        },
        stop: function(t) {
            this.session.stopped = t ? an : sn
        },
        recognize: function(t) {
            var e = this.session;
            if (!e.stopped) {
                this.touchAction.preventDefaults(t);
                var n, i = this.recognizers, r = e.curRecognizer;
                (!r || r && r.state & nn) && (r = e.curRecognizer = null);
                for (var o = 0, s = i.length; s > o; o++)
                    n = i[o], e.stopped === an || r && n != r&&!n.canRecognizeWith(r) ? n.reset() : n.recognize(t), !r && n.state & (Ke | tn | en) && (r = e.curRecognizer = n)
            }
        },
        get: function(t) {
            if (t instanceof B)
                return t;
            for (var e = this.recognizers, n = 0; n < e.length; n++)
                if (e[n].options.event == t)
                    return e[n];
            return null
        },
        add: function(t) {
            if (o(t, "add", this))
                return this;
            var e = this.get(t.options.event);
            return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t
        },
        remove: function(t) {
            if (o(t, "remove", this))
                return this;
            var e = this.recognizers;
            return t = this.get(t), e.splice(y(e, t), 1), this.touchAction.update(), this
        },
        on: function(t, e) {
            var n = this.handlers;
            return s(v(t), function(t) {
                n[t] = n[t] || [], n[t].push(e)
            }), this
        },
        off: function(t, e) {
            var n = this.handlers;
            return s(v(t), function(t) {
                e ? n[t].splice(y(n[t], e), 1) : delete n[t]
            }), this
        },
        emit: function(t, e) {
            this.options.domEvents && re(t, e);
            var n = this.handlers[t] && this.handlers[t].slice();
            if (n && n.length) {
                e.type = t, e.preventDefault = function() {
                    e.srcEvent.preventDefault()
                };
                for (var i = 0, r = n.length; r > i; i++)
                    n[i](e)
            }
        },
        destroy: function() {
            this.element && ie(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
        }
    }, a(ee, {
        INPUT_START: _e,
        INPUT_MOVE: xe,
        INPUT_END: Te,
        INPUT_CANCEL: Ee,
        STATE_POSSIBLE: Ze,
        STATE_BEGAN: Ke,
        STATE_CHANGED: tn,
        STATE_ENDED: en,
        STATE_RECOGNIZED: nn,
        STATE_CANCELLED: rn,
        STATE_FAILED: on,
        DIRECTION_NONE: Ce,
        DIRECTION_LEFT: Se,
        DIRECTION_RIGHT: Ie,
        DIRECTION_UP: ke,
        DIRECTION_DOWN: Le,
        DIRECTION_HORIZONTAL: je,
        DIRECTION_VERTICAL: De,
        DIRECTION_ALL: Ne,
        Manager: ne,
        Input: T,
        TouchAction: W,
        Recognizer: B,
        AttrRecognizer: V,
        Tap: te,
        Pan: Q,
        Swipe: K,
        Pinch: G,
        Rotate: Z,
        Press: J,
        on: f,
        off: d,
        each: s,
        merge: u,
        extend: a,
        inherit: l,
        bindFn: c,
        prefixed: _
    }), typeof define == ae && define.amd ? define(function() {
        return ee
    }) : "undefined" != typeof module && module.exports ? module.exports = ee : t[n] = ee
}(window, document, "Hammer"), function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? module.exports = e() : t.viewportUnitsBuggyfill = e()
}(this, function() {
    "use strict";
    function t(t) {
        m ||!t&&!b || (m=!0, g = document.createElement("style"), g.id = "patched-viewport", document.head.appendChild(g), l(function() {
            window.addEventListener("orientationchange", n, !0), n()
        }))
    }
    function e() {
        g.textContent = o()
    }
    function n() {
        m && (i(), e())
    }
    function i() {
        return d = [], y.call(document.styleSheets, function(t) {
            "patched-viewport" !== t.ownerNode.id && t.cssRules && (!t.media.mediaText || window.matchMedia(t.media.mediaText).matches) && y.call(t.cssRules, r)
        }), d
    }
    function r(t) {
        if (7 === t.type) {
            var e = t.cssText;
            return v.lastIndex = 0, void(v.test(e) && d.push([t, null, e]))
        }
        if (!t.style) {
            if (!t.cssRules)
                return;
            return void y.call(t.cssRules, function(t) {
                r(t)
            })
        }
        y.call(t.style, function(e) {
            var n = t.style.getPropertyValue(e);
            v.lastIndex = 0, v.test(n) && d.push([t, e, n])
        })
    }
    function o() {
        f = u();
        var t, e, n = [], i = [];
        return d.forEach(function(r) {
            var o = s.apply(null, r), a = o.selector.length ? o.selector.join(" {\n") + " {\n": "", u = new Array(o.selector.length + 1).join("\n}");
            return a && a === t ? (a&&!t && (t = a, e = u), void i.push(o.content)) : (i.length && (n.push(t + i.join("\n") + e), i.length = 0), void(a ? (t = a, e = u, i.push(o.content)) : (n.push(o.content), t = null, e = null)))
        }), i.length && n.push(t + i.join("\n") + e), n.join("\n\n")
    }
    function s(t, e, n) {
        var i = n.replace(v, a), r = [];
        e && (r.push(t.selectorText), i = e + ": " + i + ";");
        for (var o = t.parentRule; o;)
            r.unshift("@media " + w.call(o.media, ", ")), o = o.parentRule;
        return {
            selector: r,
            content: i
        }
    }
    function a(t, e, n) {
        var i = f[n], r = parseFloat(e) / 100;
        return r * i + "px"
    }
    function u() {
        var t = window.innerHeight, e = window.innerWidth;
        return {
            vh: t,
            vw: e,
            vmax: Math.max(e, t),
            vmin: Math.min(e, t)
        }
    }
    function l(t) {
        var e = 0, n = function() {
            e--, e || t()
        };
        y.call(document.styleSheets, function(t) {
            t.href && c(t.href) !== c(location.href) && (e++, h(t.ownerNode, n))
        }), e || t()
    }
    function c(t) {
        return t.slice(0, t.indexOf("/", t.indexOf("://") + 3))
    }
    function h(t, e) {
        p(t.href, function() {
            var n = document.createElement("style");
            n.media = t.media, n.textContent = this.responseText, t.parentNode.replaceChild(n, t), e()
        }, e)
    }
    function p(t, e, n) {
        var i = new XMLHttpRequest;
        if ("withCredentials"in i)
            i.open("GET", t, !0);
        else {
            if ("undefined" == typeof XDomainRequest)
                throw new Error("cross-domain XHR not supported");
            i = new XDomainRequest, i.open("GET", t)
        }
        return i.onload = e, i.onerror = n, i.send(), i
    }
    var f, d, g, m=!1, v = /([0-9.-]+)(vh|vw|vmin|vmax)/g, y = [].forEach, w = [].join, b = /(iPhone|iPod|iPad).+AppleWebKit/i.test(window.navigator.userAgent);
    return {
        version: "0.3.1",
        findProperties: i,
        getCss: o,
        init: t,
        refresh: n
    }
}), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(t, e, n, i, r) {
        return jQuery.easing[jQuery.easing.def](t, e, n, i, r)
    },
    easeInQuad: function(t, e, n, i, r) {
        return i * (e/=r) * e + n
    },
    easeOutQuad: function(t, e, n, i, r) {
        return - i * (e/=r) * (e - 2) + n
    },
    easeInOutQuad: function(t, e, n, i, r) {
        return (e/=r / 2) < 1 ? i / 2 * e * e + n : - i / 2 * (--e * (e - 2) - 1) + n
    },
    easeInCubic: function(t, e, n, i, r) {
        return i * (e/=r) * e * e + n
    },
    easeOutCubic: function(t, e, n, i, r) {
        return i * ((e = e / r - 1) * e * e + 1) + n
    },
    easeInOutCubic: function(t, e, n, i, r) {
        return (e/=r / 2) < 1 ? i / 2 * e * e * e + n : i / 2 * ((e -= 2) * e * e + 2) + n
    },
    easeInQuart: function(t, e, n, i, r) {
        return i * (e/=r) * e * e * e + n
    },
    easeOutQuart: function(t, e, n, i, r) {
        return - i * ((e = e / r - 1) * e * e * e - 1) + n
    },
    easeInOutQuart: function(t, e, n, i, r) {
        return (e/=r / 2) < 1 ? i / 2 * e * e * e * e + n : - i / 2 * ((e -= 2) * e * e * e - 2) + n
    },
    easeInQuint: function(t, e, n, i, r) {
        return i * (e/=r) * e * e * e * e + n
    },
    easeOutQuint: function(t, e, n, i, r) {
        return i * ((e = e / r - 1) * e * e * e * e + 1) + n
    },
    easeInOutQuint: function(t, e, n, i, r) {
        return (e/=r / 2) < 1 ? i / 2 * e * e * e * e * e + n : i / 2 * ((e -= 2) * e * e * e * e + 2) + n
    },
    easeInSine: function(t, e, n, i, r) {
        return - i * Math.cos(e / r * (Math.PI / 2)) + i + n
    },
    easeOutSine: function(t, e, n, i, r) {
        return i * Math.sin(e / r * (Math.PI / 2)) + n
    },
    easeInOutSine: function(t, e, n, i, r) {
        return - i / 2 * (Math.cos(Math.PI * e / r) - 1) + n
    },
    easeInExpo: function(t, e, n, i, r) {
        return 0 == e ? n : i * Math.pow(2, 10 * (e / r - 1)) + n
    },
    easeOutExpo: function(t, e, n, i, r) {
        return e == r ? n + i : i * ( - Math.pow(2, - 10 * e / r) + 1) + n
    },
    easeInOutExpo: function(t, e, n, i, r) {
        return 0 == e ? n : e == r ? n + i : (e/=r / 2) < 1 ? i / 2 * Math.pow(2, 10 * (e - 1)) + n : i / 2 * ( - Math.pow(2, - 10*--e) + 2) + n
    },
    easeInCirc: function(t, e, n, i, r) {
        return - i * (Math.sqrt(1 - (e/=r) * e) - 1) + n
    },
    easeOutCirc: function(t, e, n, i, r) {
        return i * Math.sqrt(1 - (e = e / r - 1) * e) + n
    },
    easeInOutCirc: function(t, e, n, i, r) {
        return (e/=r / 2) < 1?-i / 2 * (Math.sqrt(1 - e * e) - 1) + n : i / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + n
    },
    easeInElastic: function(t, e, n, i, r) {
        var o = 1.70158, s = 0, a = i;
        if (0 == e)
            return n;
        if (1 == (e/=r))
            return n + i;
        if (s || (s = .3 * r), a < Math.abs(i)) {
            a = i;
            var o = s / 4
        } else 
            var o = s / (2 * Math.PI) * Math.asin(i / a);
        return - (a * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * r - o) * Math.PI / s)) + n
    },
    easeOutElastic: function(t, e, n, i, r) {
        var o = 1.70158, s = 0, a = i;
        if (0 == e)
            return n;
        if (1 == (e/=r))
            return n + i;
        if (s || (s = .3 * r), a < Math.abs(i)) {
            a = i;
            var o = s / 4
        } else 
            var o = s / (2 * Math.PI) * Math.asin(i / a);
        return a * Math.pow(2, - 10 * e) * Math.sin(2 * (e * r - o) * Math.PI / s) + i + n
    },
    easeInOutElastic: function(t, e, n, i, r) {
        var o = 1.70158, s = 0, a = i;
        if (0 == e)
            return n;
        if (2 == (e/=r / 2))
            return n + i;
        if (s || (s = .3 * r * 1.5), a < Math.abs(i)) {
            a = i;
            var o = s / 4
        } else 
            var o = s / (2 * Math.PI) * Math.asin(i / a);
        return 1 > e?-.5 * a * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * r - o) * Math.PI / s) + n : a * Math.pow(2, - 10 * (e -= 1)) * Math.sin(2 * (e * r - o) * Math.PI / s) * .5 + i + n
    },
    easeInBack: function(t, e, n, i, r, o) {
        return void 0 == o && (o = 1.70158), i * (e/=r) * e * ((o + 1) * e - o) + n
    },
    easeOutBack: function(t, e, n, i, r, o) {
        return void 0 == o && (o = 1.70158), i * ((e = e / r - 1) * e * ((o + 1) * e + o) + 1) + n
    },
    easeInOutBack: function(t, e, n, i, r, o) {
        return void 0 == o && (o = 1.70158), (e/=r / 2) < 1 ? i / 2 * e * e * (((o*=1.525) + 1) * e - o) + n : i / 2 * ((e -= 2) * e * (((o*=1.525) + 1) * e + o) + 2) + n
    },
    easeInBounce: function(t, e, n, i, r) {
        return i - jQuery.easing.easeOutBounce(t, r - e, 0, i, r) + n
    },
    easeOutBounce: function(t, e, n, i, r) {
        return (e/=r) < 1 / 2.75 ? 7.5625 * i * e * e + n : 2 / 2.75 > e ? i * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + n : 2.5 / 2.75 > e ? i * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + n : i * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + n
    },
    easeInOutBounce: function(t, e, n, i, r) {
        return r / 2 > e ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, i, r) + n : .5 * jQuery.easing.easeOutBounce(t, 2 * e - r, 0, i, r) + .5 * i + n
    }
}), function(t, e) {
    function n(t, e, n) {
        var i = t.children(), r=!1;
        t.empty();
        for (var s = 0, a = i.length; a > s; s++) {
            var u = i.eq(s);
            if (t.append(u), n && t.append(n), o(t, e)) {
                u.remove(), r=!0;
                break
            }
            n && n.detach()
        }
        return r
    }
    function i(e, n, s, a, u) {
        var l=!1, c = "table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, blockquote, select, optgroup, option, textarea, script, style", h = "script, .dotdotdot-keep";
        return e.contents().detach().each(function() {
            var p = this, f = t(p);
            if ("undefined" == typeof p || 3 == p.nodeType && 0 == t.trim(p.data).length)
                return !0;
            if (f.is(h))
                e.append(f);
            else {
                if (l)
                    return !0;
                e.append(f), u && e[e.is(c) ? "after": "append"](u), o(s, a) && (l = 3 == p.nodeType ? r(f, n, s, a, u) : i(f, n, s, a, u), l || (f.detach(), l=!0)), l || u && u.detach()
            }
        }), l
    }
    function r(e, n, i, r, a) {
        var c = e[0];
        if (!c)
            return !1;
        var p = l(c), f =- 1 !== p.indexOf(" ") ? " " : "　", d = "letter" == r.wrap ? "" : f, g = p.split(d), m =- 1, v =- 1, y = 0, w = g.length - 1;
        for (r.fallbackToLetter && 0 == y && 0 == w && (d = "", g = p.split(d), w = g.length - 1); w >= y && (0 != y || 0 != w);) {
            var b = Math.floor((y + w) / 2);
            if (b == v)
                break;
            v = b, u(c, g.slice(0, v + 1).join(d) + r.ellipsis), o(i, r) ? (w = v, r.fallbackToLetter && 0 == y && 0 == w && (d = "", g = g[0].split(d), m =- 1, v =- 1, y = 0, w = g.length - 1)) : (m = v, y = v)
        }
        if ( - 1 == m || 1 == g.length && 0 == g[0].length) {
            var _ = e.parent();
            e.detach();
            var x = a && a.closest(_).length ? a.length: 0;
            _.contents().length > x ? c = h(_.contents().eq( - 1 - x), n) : (c = h(_, n, !0), x || _.detach()), c && (p = s(l(c), r), u(c, p), x && a && t(c).parent().append(a))
        } else 
            p = s(g.slice(0, m + 1).join(d), r), u(c, p);
        return !0
    }
    function o(t, e) {
        return t.innerHeight() > e.maxHeight
    }
    function s(e, n) {
        for (; t.inArray(e.slice( - 1), n.lastCharacter.remove)>-1;)
            e = e.slice(0, - 1);
        return t.inArray(e.slice( - 1), n.lastCharacter.noEllipsis) < 0 && (e += n.ellipsis), e
    }
    function a(t) {
        return {
            width: t.innerWidth(),
            height: t.innerHeight()
        }
    }
    function u(t, e) {
        t.innerText ? t.innerText = e : t.nodeValue ? t.nodeValue = e : t.textContent && (t.textContent = e)
    }
    function l(t) {
        return t.innerText ? t.innerText : t.nodeValue ? t.nodeValue : t.textContent ? t.textContent : ""
    }
    function c(t) {
        do 
            t = t.previousSibling;
        while (t && 1 !== t.nodeType && 3 !== t.nodeType);
        return t
    }
    function h(e, n, i) {
        var r, o = e && e[0];
        if (o) {
            if (!i) {
                if (3 === o.nodeType)
                    return o;
                if (t.trim(e.text()))
                    return h(e.contents().last(), n)
                }
            for (r = c(o); !r;) {
                if (e = e.parent(), e.is(n) ||!e.length)
                    return !1;
                r = c(e[0])
            }
            if (r)
                return h(t(r), n)
        }
        return !1
    }
    function p(e, n) {
        return e ? "string" == typeof e ? (e = t(e, n), e.length ? e : !1) : e.jquery ? e : !1 : !1
    }
    function f(t) {
        for (var e = t.innerHeight(), n = ["paddingTop", "paddingBottom"], i = 0, r = n.length; r > i; i++) {
            var o = parseInt(t.css(n[i]), 10);
            isNaN(o) && (o = 0), e -= o
        }
        return e
    }
    if (!t.fn.dotdotdot) {
        t.fn.dotdotdot = function(e) {
            if (0 == this.length)
                return t.fn.dotdotdot.debug('No element found for "' + this.selector + '".'), this;
            if (this.length > 1)
                return this.each(function() {
                    t(this).dotdotdot(e)
                });
            var r = this;
            r.data("dotdotdot") && r.trigger("destroy.dot"), r.data("dotdotdot-style", r.attr("style") || ""), r.css("word-wrap", "break-word"), "nowrap" === r.css("white-space") && r.css("white-space", "normal"), r.bind_events = function() {
                return r.bind("update.dot", function(e, a) {
                    e.preventDefault(), e.stopPropagation(), u.maxHeight = "number" == typeof u.height ? u.height : f(r), u.maxHeight += u.tolerance, "undefined" != typeof a && (("string" == typeof a || a instanceof HTMLElement) && (a = t("<div />").append(a).contents()), a instanceof t && (s = a)), g = r.wrapInner('<div class="dotdotdot" />').children(), g.contents().detach().end().append(s.clone(!0)).find("br").replaceWith("  <br />  ").end().css({
                        height: "auto",
                        width: "auto",
                        border: "none",
                        padding: 0,
                        margin: 0
                    });
                    var c=!1, h=!1;
                    return l.afterElement && (c = l.afterElement.clone(!0), c.show(), l.afterElement.detach()), o(g, u) && (h = "children" == u.wrap ? n(g, u, c) : i(g, r, g, u, c)), g.replaceWith(g.contents()), g = null, t.isFunction(u.callback) && u.callback.call(r[0], h, s), l.isTruncated = h, h
                }).bind("isTruncated.dot", function(t, e) {
                    return t.preventDefault(), t.stopPropagation(), "function" == typeof e && e.call(r[0], l.isTruncated), l.isTruncated
                }).bind("originalContent.dot", function(t, e) {
                    return t.preventDefault(), t.stopPropagation(), "function" == typeof e && e.call(r[0], s), s
                }).bind("destroy.dot", function(t) {
                    t.preventDefault(), t.stopPropagation(), r.unwatch().unbind_events().contents().detach().end().append(s).attr("style", r.data("dotdotdot-style") || "").data("dotdotdot", !1)
                }), r
            }, r.unbind_events = function() {
                return r.unbind(".dot"), r
            }, r.watch = function() {
                if (r.unwatch(), "window" == u.watch) {
                    var e = t(window), n = e.width(), i = e.height();
                    e.bind("resize.dot" + l.dotId, function() {
                        n == e.width() && i == e.height() && u.windowResizeFix || (n = e.width(), i = e.height(), h && clearInterval(h), h = setTimeout(function() {
                            r.trigger("update.dot")
                        }, 100))
                    })
                } else 
                    c = a(r), h = setInterval(function() {
                        if (r.is(":visible")) {
                            var t = a(r);
                            (c.width != t.width || c.height != t.height) && (r.trigger("update.dot"), c = t)
                        }
                    }, 500);
                return r
            }, r.unwatch = function() {
                return t(window).unbind("resize.dot" + l.dotId), h && clearInterval(h), r
            };
            var s = r.contents(), u = t.extend(!0, {}, t.fn.dotdotdot.defaults, e), l = {}, c = {}, h = null, g = null;
            return u.lastCharacter.remove instanceof Array || (u.lastCharacter.remove = t.fn.dotdotdot.defaultArrays.lastCharacter.remove), u.lastCharacter.noEllipsis instanceof Array || (u.lastCharacter.noEllipsis = t.fn.dotdotdot.defaultArrays.lastCharacter.noEllipsis), l.afterElement = p(u.after, r), l.isTruncated=!1, l.dotId = d++, r.data("dotdotdot", !0).bind_events().trigger("update.dot"), u.watch && r.watch(), r
        }, t.fn.dotdotdot.defaults = {
            ellipsis: "... ",
            wrap: "word",
            fallbackToLetter: !0,
            lastCharacter: {},
            tolerance: 0,
            callback: null,
            after: null,
            height: null,
            watch: !1,
            windowResizeFix: !0
        }, t.fn.dotdotdot.defaultArrays = {
            lastCharacter: {
                remove: [" ", "　", ",", ";", ".", "!", "?"],
                noEllipsis: []
            }
        }, t.fn.dotdotdot.debug = function() {};
        var d = 1, g = t.fn.html;
        t.fn.html = function(n) {
            return n != e&&!t.isFunction(n) && this.data("dotdotdot") ? this.trigger("update", [n]) : g.apply(this, arguments)
        };
        var m = t.fn.text;
        t.fn.text = function(n) {
            return n != e&&!t.isFunction(n) && this.data("dotdotdot") ? (n = t("<div />").text(n).html(), this.trigger("update", [n])) : m.apply(this, arguments)
        }
    }
}(jQuery);

