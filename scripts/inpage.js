!function e(t, r, n) {
    function i(s, a) {
        if (!r[s]) {
            if (!t[s]) {
                var u = "function" == typeof require && require;
                if (!a && u)
                    return u(s, !0);
                if (o)
                    return o(s, !0);
                var c = new Error("Cannot find module '" + s + "'");
                throw c.code = "MODULE_NOT_FOUND",
                c
            }
            var l = r[s] = {
                exports: {}
            };
            t[s][0].call(l.exports, (function(e) {
                return i(t[s][1][e] || e)
            }
            ), l, l.exports, e, t, r, n)
        }
        return r[s].exports
    }
    for (var o = "function" == typeof require && require, s = 0; s < n.length; s++)
        i(n[s]);
    return i
}({
    1: [function(e, t, r) {
        (function(t) {
            (function() {
                "use strict";
                var r = a(e("loglevel"))
                  , n = e("uuid")
                  , i = e("@metamask/post-message-stream")
                  , o = e("@metamask/providers/dist/initializeInpageProvider")
                  , s = a(e("../../shared/modules/provider-injection"));
                function a(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                let u;
                (()=>{
                    u = t.define;
                    try {
                        t.define = void 0
                    } catch (e) {
                        console.warn("MetaMask - global.define could not be deleted.")
                    }
                }
                )();
                if ((()=>{
                    try {
                        t.define = u
                    } catch (e) {
                        console.warn("MetaMask - global.define could not be overwritten.")
                    }
                }
                )(),
                r.default.setDefaultLevel("warn"),
                (0,
                s.default)()) {
                    const e = new i.WindowPostMessageStream({
                        name: "metamask-inpage",
                        target: "metamask-contentscript"
                    });
                    (0,
                    o.initializeProvider)({
                        connectionStream: e,
                        logger: r.default,
                        shouldShimWeb3: !0,
                        providerInfo: {
                            uuid: (0,
                            n.v4)(),
                            name: "MetaMask",
                            icon: "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMzIiB2aWV3Qm94PSIwIDAgMzUgMzMiIHdpZHRoPSIzNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iLjI1Ij48cGF0aCBkPSJtMzIuOTU4MiAxLTEzLjEzNDEgOS43MTgzIDIuNDQyNC01LjcyNzMxeiIgZmlsbD0iI2UxNzcyNiIgc3Ryb2tlPSIjZTE3NzI2Ii8+PGcgZmlsbD0iI2UyNzYyNSIgc3Ryb2tlPSIjZTI3NjI1Ij48cGF0aCBkPSJtMi42NjI5NiAxIDEzLjAxNzE0IDkuODA5LTIuMzI1NC01LjgxODAyeiIvPjxwYXRoIGQ9Im0yOC4yMjk1IDIzLjUzMzUtMy40OTQ3IDUuMzM4NiA3LjQ4MjkgMi4wNjAzIDIuMTQzNi03LjI4MjN6Ii8+PHBhdGggZD0ibTEuMjcyODEgMjMuNjUwMSAyLjEzMDU1IDcuMjgyMyA3LjQ2OTk0LTIuMDYwMy0zLjQ4MTY2LTUuMzM4NnoiLz48cGF0aCBkPSJtMTAuNDcwNiAxNC41MTQ5LTIuMDc4NiAzLjEzNTggNy40MDUuMzM2OS0uMjQ2OS03Ljk2OXoiLz48cGF0aCBkPSJtMjUuMTUwNSAxNC41MTQ5LTUuMTU3NS00LjU4NzA0LS4xNjg4IDguMDU5NzQgNy40MDQ5LS4zMzY5eiIvPjxwYXRoIGQ9Im0xMC44NzMzIDI4Ljg3MjEgNC40ODE5LTIuMTYzOS0zLjg1ODMtMy4wMDYyeiIvPjxwYXRoIGQ9Im0yMC4yNjU5IDI2LjcwODIgNC40Njg5IDIuMTYzOS0uNjEwNS01LjE3MDF6Ii8+PC9nPjxwYXRoIGQ9Im0yNC43MzQ4IDI4Ljg3MjEtNC40NjktMi4xNjM5LjM2MzggMi45MDI1LS4wMzkgMS4yMzF6IiBmaWxsPSIjZDViZmIyIiBzdHJva2U9IiNkNWJmYjIiLz48cGF0aCBkPSJtMTAuODczMiAyOC44NzIxIDQuMTU3MiAxLjk2OTYtLjAyNi0xLjIzMS4zNTA4LTIuOTAyNXoiIGZpbGw9IiNkNWJmYjIiIHN0cm9rZT0iI2Q1YmZiMiIvPjxwYXRoIGQ9Im0xNS4xMDg0IDIxLjc4NDItMy43MTU1LTEuMDg4NCAyLjYyNDMtMS4yMDUxeiIgZmlsbD0iIzIzMzQ0NyIgc3Ryb2tlPSIjMjMzNDQ3Ii8+PHBhdGggZD0ibTIwLjUxMjYgMjEuNzg0MiAxLjA5MTMtMi4yOTM1IDIuNjM3MiAxLjIwNTF6IiBmaWxsPSIjMjMzNDQ3IiBzdHJva2U9IiMyMzM0NDciLz48cGF0aCBkPSJtMTAuODczMyAyOC44NzIxLjY0OTUtNS4zMzg2LTQuMTMxMTcuMTE2N3oiIGZpbGw9IiNjYzYyMjgiIHN0cm9rZT0iI2NjNjIyOCIvPjxwYXRoIGQ9Im0yNC4wOTgyIDIzLjUzMzUuNjM2NiA1LjMzODYgMy40OTQ2LTUuMjIxOXoiIGZpbGw9IiNjYzYyMjgiIHN0cm9rZT0iI2NjNjIyOCIvPjxwYXRoIGQ9Im0yNy4yMjkxIDE3LjY1MDctNy40MDUuMzM2OS42ODg1IDMuNzk2NiAxLjA5MTMtMi4yOTM1IDIuNjM3MiAxLjIwNTF6IiBmaWxsPSIjY2M2MjI4IiBzdHJva2U9IiNjYzYyMjgiLz48cGF0aCBkPSJtMTEuMzkyOSAyMC42OTU4IDIuNjI0Mi0xLjIwNTEgMS4wOTEzIDIuMjkzNS42ODg1LTMuNzk2Ni03LjQwNDk1LS4zMzY5eiIgZmlsbD0iI2NjNjIyOCIgc3Ryb2tlPSIjY2M2MjI4Ii8+PHBhdGggZD0ibTguMzkyIDE3LjY1MDcgMy4xMDQ5IDYuMDUxMy0uMTAzOS0zLjAwNjJ6IiBmaWxsPSIjZTI3NTI1IiBzdHJva2U9IiNlMjc1MjUiLz48cGF0aCBkPSJtMjQuMjQxMiAyMC42OTU4LS4xMTY5IDMuMDA2MiAzLjEwNDktNi4wNTEzeiIgZmlsbD0iI2UyNzUyNSIgc3Ryb2tlPSIjZTI3NTI1Ii8+PHBhdGggZD0ibTE1Ljc5NyAxNy45ODc2LS42ODg2IDMuNzk2Ny44NzA0IDQuNDgzMy4xOTQ5LTUuOTA4N3oiIGZpbGw9IiNlMjc1MjUiIHN0cm9rZT0iI2UyNzUyNSIvPjxwYXRoIGQ9Im0xOS44MjQyIDE3Ljk4NzYtLjM2MzggMi4zNTg0LjE4MTkgNS45MjE2Ljg3MDQtNC40ODMzeiIgZmlsbD0iI2UyNzUyNSIgc3Ryb2tlPSIjZTI3NTI1Ii8+PHBhdGggZD0ibTIwLjUxMjcgMjEuNzg0Mi0uODcwNCA0LjQ4MzQuNjIzNi40NDA2IDMuODU4NC0zLjAwNjIuMTE2OS0zLjAwNjJ6IiBmaWxsPSIjZjU4NDFmIiBzdHJva2U9IiNmNTg0MWYiLz48cGF0aCBkPSJtMTEuMzkyOSAyMC42OTU4LjEwNCAzLjAwNjIgMy44NTgzIDMuMDA2Mi42MjM2LS40NDA2LS44NzA0LTQuNDgzNHoiIGZpbGw9IiNmNTg0MWYiIHN0cm9rZT0iI2Y1ODQxZiIvPjxwYXRoIGQ9Im0yMC41OTA2IDMwLjg0MTcuMDM5LTEuMjMxLS4zMzc4LS4yODUxaC00Ljk2MjZsLS4zMjQ4LjI4NTEuMDI2IDEuMjMxLTQuMTU3Mi0xLjk2OTYgMS40NTUxIDEuMTkyMSAyLjk0ODkgMi4wMzQ0aDUuMDUzNmwyLjk2Mi0yLjAzNDQgMS40NDItMS4xOTIxeiIgZmlsbD0iI2MwYWM5ZCIgc3Ryb2tlPSIjYzBhYzlkIi8+PHBhdGggZD0ibTIwLjI2NTkgMjYuNzA4Mi0uNjIzNi0uNDQwNmgtMy42NjM1bC0uNjIzNi40NDA2LS4zNTA4IDIuOTAyNS4zMjQ4LS4yODUxaDQuOTYyNmwuMzM3OC4yODUxeiIgZmlsbD0iIzE2MTYxNiIgc3Ryb2tlPSIjMTYxNjE2Ii8+PHBhdGggZD0ibTMzLjUxNjggMTEuMzUzMiAxLjEwNDMtNS4zNjQ0Ny0xLjY2MjktNC45ODg3My0xMi42OTIzIDkuMzk0NCA0Ljg4NDYgNC4xMjA1IDYuODk4MyAyLjAwODUgMS41Mi0xLjc3NTItLjY2MjYtLjQ3OTUgMS4wNTIzLS45NTg4LS44MDU0LS42MjIgMS4wNTIzLS44MDM0eiIgZmlsbD0iIzc2M2UxYSIgc3Ryb2tlPSIjNzYzZTFhIi8+PHBhdGggZD0ibTEgNS45ODg3MyAxLjExNzI0IDUuMzY0NDctLjcxNDUxLjUzMTMgMS4wNjUyNy44MDM0LS44MDU0NS42MjIgMS4wNTIyOC45NTg4LS42NjI1NS40Nzk1IDEuNTE5OTcgMS43NzUyIDYuODk4MzUtMi4wMDg1IDQuODg0Ni00LjEyMDUtMTIuNjkyMzMtOS4zOTQ0eiIgZmlsbD0iIzc2M2UxYSIgc3Ryb2tlPSIjNzYzZTFhIi8+PHBhdGggZD0ibTMyLjA0ODkgMTYuNTIzNC02Ljg5ODMtMi4wMDg1IDIuMDc4NiAzLjEzNTgtMy4xMDQ5IDYuMDUxMyA0LjEwNTItLjA1MTloNi4xMzE4eiIgZmlsbD0iI2Y1ODQxZiIgc3Ryb2tlPSIjZjU4NDFmIi8+PHBhdGggZD0ibTEwLjQ3MDUgMTQuNTE0OS02Ljg5ODI4IDIuMDA4NS0yLjI5OTQ0IDcuMTI2N2g2LjExODgzbDQuMTA1MTkuMDUxOS0zLjEwNDg3LTYuMDUxM3oiIGZpbGw9IiNmNTg0MWYiIHN0cm9rZT0iI2Y1ODQxZiIvPjxwYXRoIGQ9Im0xOS44MjQxIDE3Ljk4NzYuNDQxNy03LjU5MzIgMi4wMDA3LTUuNDAzNGgtOC45MTE5bDIuMDAwNiA1LjQwMzQuNDQxNyA3LjU5MzIuMTY4OSAyLjM4NDIuMDEzIDUuODk1OGgzLjY2MzVsLjAxMy01Ljg5NTh6IiBmaWxsPSIjZjU4NDFmIiBzdHJva2U9IiNmNTg0MWYiLz48L2c+PC9zdmc+",
                            rdns: "io.metamask"
                        }
                    })
                }
            }
            ).call(this)
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {
        "../../shared/modules/provider-injection": 210,
        "@metamask/post-message-stream": 23,
        "@metamask/providers/dist/initializeInpageProvider": 47,
        loglevel: 139,
        uuid: 194
    }],
    2: [function(e, t, r) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.ObjectMultiplex = void 0;
        const i = e("readable-stream")
          , o = n(e("once"))
          , s = e("./Substream")
          , a = Symbol("IGNORE_SUBSTREAM");
        class u extends i.Duplex {
            constructor(e={}) {
                super(Object.assign(Object.assign({}, e), {
                    objectMode: !0
                })),
                this._substreams = {}
            }
            createStream(e) {
                if (this.destroyed)
                    throw new Error(`ObjectMultiplex - parent stream for name "${e}" already destroyed`);
                if (this._readableState.ended || this._writableState.ended)
                    throw new Error(`ObjectMultiplex - parent stream for name "${e}" already ended`);
                if (!e)
                    throw new Error("ObjectMultiplex - name must not be empty");
                if (this._substreams[e])
                    throw new Error(`ObjectMultiplex - Substream for name "${e}" already exists`);
                const t = new s.Substream({
                    parent: this,
                    name: e
                });
                return this._substreams[e] = t,
                function(e, t) {
                    const r = (0,
                    o.default)(t);
                    (0,
                    i.finished)(e, {
                        readable: !1
                    }, r),
                    (0,
                    i.finished)(e, {
                        writable: !1
                    }, r)
                }(this, (e=>t.destroy(e || void 0))),
                t
            }
            ignoreStream(e) {
                if (!e)
                    throw new Error("ObjectMultiplex - name must not be empty");
                if (this._substreams[e])
                    throw new Error(`ObjectMultiplex - Substream for name "${e}" already exists`);
                this._substreams[e] = a
            }
            _read() {}
            _write(e, t, r) {
                const {name: n, data: i} = e;
                if (!n)
                    return console.warn(`ObjectMultiplex - malformed chunk without name "${e}"`),
                    r();
                const o = this._substreams[n];
                return o ? (o !== a && o.push(i),
                r()) : (console.warn(`ObjectMultiplex - orphaned data for stream "${n}"`),
                r())
            }
        }
        r.ObjectMultiplex = u
    }
    , {
        "./Substream": 3,
        once: 140,
        "readable-stream": 19
    }],
    3: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.Substream = void 0;
        const n = e("readable-stream");
        class i extends n.Duplex {
            constructor({parent: e, name: t}) {
                super({
                    objectMode: !0
                }),
                this._parent = e,
                this._name = t
            }
            _read() {}
            _write(e, t, r) {
                this._parent.push({
                    name: this._name,
                    data: e
                }),
                r()
            }
        }
        r.Substream = i
    }
    , {
        "readable-stream": 19
    }],
    4: [function(e, t, r) {
        "use strict";
        const n = e("./ObjectMultiplex");
        t.exports = n.ObjectMultiplex
    }
    , {
        "./ObjectMultiplex": 2
    }],
    5: [function(e, t, r) {
        "use strict";
        var n = {};
        function i(e, t, r) {
            r || (r = Error);
            var i = function(e) {
                var r, n;
                function i(r, n, i) {
                    return e.call(this, function(e, r, n) {
                        return "string" == typeof t ? t : t(e, r, n)
                    }(r, n, i)) || this
                }
                return n = e,
                (r = i).prototype = Object.create(n.prototype),
                r.prototype.constructor = r,
                r.__proto__ = n,
                i
            }(r);
            i.prototype.name = r.name,
            i.prototype.code = e,
            n[e] = i
        }
        function o(e, t) {
            if (Array.isArray(e)) {
                var r = e.length;
                return e = e.map((function(e) {
                    return String(e)
                }
                )),
                r > 2 ? "one of ".concat(t, " ").concat(e.slice(0, r - 1).join(", "), ", or ") + e[r - 1] : 2 === r ? "one of ".concat(t, " ").concat(e[0], " or ").concat(e[1]) : "of ".concat(t, " ").concat(e[0])
            }
            return "of ".concat(t, " ").concat(String(e))
        }
        i("ERR_INVALID_OPT_VALUE", (function(e, t) {
            return 'The value "' + t + '" is invalid for option "' + e + '"'
        }
        ), TypeError),
        i("ERR_INVALID_ARG_TYPE", (function(e, t, r) {
            var n, i, s, a;
            if ("string" == typeof t && (i = "not ",
            t.substr(!s || s < 0 ? 0 : +s, i.length) === i) ? (n = "must not be",
            t = t.replace(/^not /, "")) : n = "must be",
            function(e, t, r) {
                return (void 0 === r || r > e.length) && (r = e.length),
                e.substring(r - t.length, r) === t
            }(e, " argument"))
                a = "The ".concat(e, " ").concat(n, " ").concat(o(t, "type"));
            else {
                var u = function(e, t, r) {
                    return "number" != typeof r && (r = 0),
                    !(r + t.length > e.length) && -1 !== e.indexOf(t, r)
                }(e, ".") ? "property" : "argument";
                a = 'The "'.concat(e, '" ').concat(u, " ").concat(n, " ").concat(o(t, "type"))
            }
            return a += ". Received type ".concat(typeof r)
        }
        ), TypeError),
        i("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"),
        i("ERR_METHOD_NOT_IMPLEMENTED", (function(e) {
            return "The " + e + " method is not implemented"
        }
        )),
        i("ERR_STREAM_PREMATURE_CLOSE", "Premature close"),
        i("ERR_STREAM_DESTROYED", (function(e) {
            return "Cannot call " + e + " after a stream was destroyed"
        }
        )),
        i("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"),
        i("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"),
        i("ERR_STREAM_WRITE_AFTER_END", "write after end"),
        i("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError),
        i("ERR_UNKNOWN_ENCODING", (function(e) {
            return "Unknown encoding: " + e
        }
        ), TypeError),
        i("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event"),
        t.exports.codes = n
    }
    , {}],
    6: [function(e, t, r) {
        (function(r) {
            (function() {
                "use strict";
                var n = Object.keys || function(e) {
                    var t = [];
                    for (var r in e)
                        t.push(r);
                    return t
                }
                ;
                t.exports = c;
                var i = e("./_stream_readable")
                  , o = e("./_stream_writable");
                e("inherits")(c, i);
                for (var s = n(o.prototype), a = 0; a < s.length; a++) {
                    var u = s[a];
                    c.prototype[u] || (c.prototype[u] = o.prototype[u])
                }
                function c(e) {
                    if (!(this instanceof c))
                        return new c(e);
                    i.call(this, e),
                    o.call(this, e),
                    this.allowHalfOpen = !0,
                    e && (!1 === e.readable && (this.readable = !1),
                    !1 === e.writable && (this.writable = !1),
                    !1 === e.allowHalfOpen && (this.allowHalfOpen = !1,
                    this.once("end", l)))
                }
                function l() {
                    this._writableState.ended || r.nextTick(d, this)
                }
                function d(e) {
                    e.end()
                }
                Object.defineProperty(c.prototype, "writableHighWaterMark", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState.highWaterMark
                    }
                }),
                Object.defineProperty(c.prototype, "writableBuffer", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState && this._writableState.getBuffer()
                    }
                }),
                Object.defineProperty(c.prototype, "writableLength", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState.length
                    }
                }),
                Object.defineProperty(c.prototype, "destroyed", {
                    enumerable: !1,
                    get: function() {
                        return void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed && this._writableState.destroyed)
                    },
                    set: function(e) {
                        void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e,
                        this._writableState.destroyed = e)
                    }
                })
            }
            ).call(this)
        }
        ).call(this, e("_process"))
    }
    , {
        "./_stream_readable": 8,
        "./_stream_writable": 10,
        _process: 144,
        inherits: 119
    }],
    7: [function(e, t, r) {
        "use strict";
        t.exports = i;
        var n = e("./_stream_transform");
        function i(e) {
            if (!(this instanceof i))
                return new i(e);
            n.call(this, e)
        }
        e("inherits")(i, n),
        i.prototype._transform = function(e, t, r) {
            r(null, e)
        }
    }
    , {
        "./_stream_transform": 9,
        inherits: 119
    }],
    8: [function(e, t, r) {
        (function(r, n) {
            (function() {
                "use strict";
                var i;
                t.exports = R,
                R.ReadableState = M;
                e("events").EventEmitter;
                var o = function(e, t) {
                    return e.listeners(t).length
                }
                  , s = e("./internal/streams/stream")
                  , a = e("buffer").Buffer
                  , u = (void 0 !== n ? n : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}).Uint8Array || function() {}
                ;
                var c, l = e("util");
                c = l && l.debuglog ? l.debuglog("stream") : function() {}
                ;
                var d, f, h, p = e("./internal/streams/buffer_list"), g = e("./internal/streams/destroy"), b = e("./internal/streams/state").getHighWaterMark, m = e("../errors").codes, y = m.ERR_INVALID_ARG_TYPE, v = m.ERR_STREAM_PUSH_AFTER_EOF, w = m.ERR_METHOD_NOT_IMPLEMENTED, _ = m.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
                e("inherits")(R, s);
                var E = g.errorOrDestroy
                  , S = ["error", "close", "destroy", "pause", "resume"];
                function M(t, r, n) {
                    i = i || e("./_stream_duplex"),
                    t = t || {},
                    "boolean" != typeof n && (n = r instanceof i),
                    this.objectMode = !!t.objectMode,
                    n && (this.objectMode = this.objectMode || !!t.readableObjectMode),
                    this.highWaterMark = b(this, t, "readableHighWaterMark", n),
                    this.buffer = new p,
                    this.length = 0,
                    this.pipes = null,
                    this.pipesCount = 0,
                    this.flowing = null,
                    this.ended = !1,
                    this.endEmitted = !1,
                    this.reading = !1,
                    this.sync = !0,
                    this.needReadable = !1,
                    this.emittedReadable = !1,
                    this.readableListening = !1,
                    this.resumeScheduled = !1,
                    this.paused = !0,
                    this.emitClose = !1 !== t.emitClose,
                    this.autoDestroy = !!t.autoDestroy,
                    this.destroyed = !1,
                    this.defaultEncoding = t.defaultEncoding || "utf8",
                    this.awaitDrain = 0,
                    this.readingMore = !1,
                    this.decoder = null,
                    this.encoding = null,
                    t.encoding && (d || (d = e("string_decoder/").StringDecoder),
                    this.decoder = new d(t.encoding),
                    this.encoding = t.encoding)
                }
                function R(t) {
                    if (i = i || e("./_stream_duplex"),
                    !(this instanceof R))
                        return new R(t);
                    var r = this instanceof i;
                    this._readableState = new M(t,this,r),
                    this.readable = !0,
                    t && ("function" == typeof t.read && (this._read = t.read),
                    "function" == typeof t.destroy && (this._destroy = t.destroy)),
                    s.call(this)
                }
                function j(e, t, r, n, i) {
                    c("readableAddChunk", t);
                    var o, s = e._readableState;
                    if (null === t)
                        s.reading = !1,
                        function(e, t) {
                            if (c("onEofChunk"),
                            t.ended)
                                return;
                            if (t.decoder) {
                                var r = t.decoder.end();
                                r && r.length && (t.buffer.push(r),
                                t.length += t.objectMode ? 1 : r.length)
                            }
                            t.ended = !0,
                            t.sync ? x(e) : (t.needReadable = !1,
                            t.emittedReadable || (t.emittedReadable = !0,
                            O(e)))
                        }(e, s);
                    else if (i || (o = function(e, t) {
                        var r;
                        n = t,
                        a.isBuffer(n) || n instanceof u || "string" == typeof t || void 0 === t || e.objectMode || (r = new y("chunk",["string", "Buffer", "Uint8Array"],t));
                        var n;
                        return r
                    }(s, t)),
                    o)
                        E(e, o);
                    else if (s.objectMode || t && t.length > 0)
                        if ("string" == typeof t || s.objectMode || Object.getPrototypeOf(t) === a.prototype || (t = function(e) {
                            return a.from(e)
                        }(t)),
                        n)
                            s.endEmitted ? E(e, new _) : I(e, s, t, !0);
                        else if (s.ended)
                            E(e, new v);
                        else {
                            if (s.destroyed)
                                return !1;
                            s.reading = !1,
                            s.decoder && !r ? (t = s.decoder.write(t),
                            s.objectMode || 0 !== t.length ? I(e, s, t, !1) : A(e, s)) : I(e, s, t, !1)
                        }
                    else
                        n || (s.reading = !1,
                        A(e, s));
                    return !s.ended && (s.length < s.highWaterMark || 0 === s.length)
                }
                function I(e, t, r, n) {
                    t.flowing && 0 === t.length && !t.sync ? (t.awaitDrain = 0,
                    e.emit("data", r)) : (t.length += t.objectMode ? 1 : r.length,
                    n ? t.buffer.unshift(r) : t.buffer.push(r),
                    t.needReadable && x(e)),
                    A(e, t)
                }
                Object.defineProperty(R.prototype, "destroyed", {
                    enumerable: !1,
                    get: function() {
                        return void 0 !== this._readableState && this._readableState.destroyed
                    },
                    set: function(e) {
                        this._readableState && (this._readableState.destroyed = e)
                    }
                }),
                R.prototype.destroy = g.destroy,
                R.prototype._undestroy = g.undestroy,
                R.prototype._destroy = function(e, t) {
                    t(e)
                }
                ,
                R.prototype.push = function(e, t) {
                    var r, n = this._readableState;
                    return n.objectMode ? r = !0 : "string" == typeof e && ((t = t || n.defaultEncoding) !== n.encoding && (e = a.from(e, t),
                    t = ""),
                    r = !0),
                    j(this, e, t, !1, r)
                }
                ,
                R.prototype.unshift = function(e) {
                    return j(this, e, null, !0, !1)
                }
                ,
                R.prototype.isPaused = function() {
                    return !1 === this._readableState.flowing
                }
                ,
                R.prototype.setEncoding = function(t) {
                    d || (d = e("string_decoder/").StringDecoder);
                    var r = new d(t);
                    this._readableState.decoder = r,
                    this._readableState.encoding = this._readableState.decoder.encoding;
                    for (var n = this._readableState.buffer.head, i = ""; null !== n; )
                        i += r.write(n.data),
                        n = n.next;
                    return this._readableState.buffer.clear(),
                    "" !== i && this._readableState.buffer.push(i),
                    this._readableState.length = i.length,
                    this
                }
                ;
                var k = 1073741824;
                function C(e, t) {
                    return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e != e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = function(e) {
                        return e >= k ? e = k : (e--,
                        e |= e >>> 1,
                        e |= e >>> 2,
                        e |= e >>> 4,
                        e |= e >>> 8,
                        e |= e >>> 16,
                        e++),
                        e
                    }(e)),
                    e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0,
                    0))
                }
                function x(e) {
                    var t = e._readableState;
                    c("emitReadable", t.needReadable, t.emittedReadable),
                    t.needReadable = !1,
                    t.emittedReadable || (c("emitReadable", t.flowing),
                    t.emittedReadable = !0,
                    r.nextTick(O, e))
                }
                function O(e) {
                    var t = e._readableState;
                    c("emitReadable_", t.destroyed, t.length, t.ended),
                    t.destroyed || !t.length && !t.ended || (e.emit("readable"),
                    t.emittedReadable = !1),
                    t.needReadable = !t.flowing && !t.ended && t.length <= t.highWaterMark,
                    D(e)
                }
                function A(e, t) {
                    t.readingMore || (t.readingMore = !0,
                    r.nextTick(T, e, t))
                }
                function T(e, t) {
                    for (; !t.reading && !t.ended && (t.length < t.highWaterMark || t.flowing && 0 === t.length); ) {
                        var r = t.length;
                        if (c("maybeReadMore read 0"),
                        e.read(0),
                        r === t.length)
                            break
                    }
                    t.readingMore = !1
                }
                function P(e) {
                    var t = e._readableState;
                    t.readableListening = e.listenerCount("readable") > 0,
                    t.resumeScheduled && !t.paused ? t.flowing = !0 : e.listenerCount("data") > 0 && e.resume()
                }
                function L(e) {
                    c("readable nexttick read 0"),
                    e.read(0)
                }
                function N(e, t) {
                    c("resume", t.reading),
                    t.reading || e.read(0),
                    t.resumeScheduled = !1,
                    e.emit("resume"),
                    D(e),
                    t.flowing && !t.reading && e.read(0)
                }
                function D(e) {
                    var t = e._readableState;
                    for (c("flow", t.flowing); t.flowing && null !== e.read(); )
                        ;
                }
                function B(e, t) {
                    return 0 === t.length ? null : (t.objectMode ? r = t.buffer.shift() : !e || e >= t.length ? (r = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.first() : t.buffer.concat(t.length),
                    t.buffer.clear()) : r = t.buffer.consume(e, t.decoder),
                    r);
                    var r
                }
                function U(e) {
                    var t = e._readableState;
                    c("endReadable", t.endEmitted),
                    t.endEmitted || (t.ended = !0,
                    r.nextTick($, t, e))
                }
                function $(e, t) {
                    if (c("endReadableNT", e.endEmitted, e.length),
                    !e.endEmitted && 0 === e.length && (e.endEmitted = !0,
                    t.readable = !1,
                    t.emit("end"),
                    e.autoDestroy)) {
                        var r = t._writableState;
                        (!r || r.autoDestroy && r.finished) && t.destroy()
                    }
                }
                function F(e, t) {
                    for (var r = 0, n = e.length; r < n; r++)
                        if (e[r] === t)
                            return r;
                    return -1
                }
                R.prototype.read = function(e) {
                    c("read", e),
                    e = parseInt(e, 10);
                    var t = this._readableState
                      , r = e;
                    if (0 !== e && (t.emittedReadable = !1),
                    0 === e && t.needReadable && ((0 !== t.highWaterMark ? t.length >= t.highWaterMark : t.length > 0) || t.ended))
                        return c("read: emitReadable", t.length, t.ended),
                        0 === t.length && t.ended ? U(this) : x(this),
                        null;
                    if (0 === (e = C(e, t)) && t.ended)
                        return 0 === t.length && U(this),
                        null;
                    var n, i = t.needReadable;
                    return c("need readable", i),
                    (0 === t.length || t.length - e < t.highWaterMark) && c("length less than watermark", i = !0),
                    t.ended || t.reading ? c("reading or ended", i = !1) : i && (c("do read"),
                    t.reading = !0,
                    t.sync = !0,
                    0 === t.length && (t.needReadable = !0),
                    this._read(t.highWaterMark),
                    t.sync = !1,
                    t.reading || (e = C(r, t))),
                    null === (n = e > 0 ? B(e, t) : null) ? (t.needReadable = t.length <= t.highWaterMark,
                    e = 0) : (t.length -= e,
                    t.awaitDrain = 0),
                    0 === t.length && (t.ended || (t.needReadable = !0),
                    r !== e && t.ended && U(this)),
                    null !== n && this.emit("data", n),
                    n
                }
                ,
                R.prototype._read = function(e) {
                    E(this, new w("_read()"))
                }
                ,
                R.prototype.pipe = function(e, t) {
                    var n = this
                      , i = this._readableState;
                    switch (i.pipesCount) {
                    case 0:
                        i.pipes = e;
                        break;
                    case 1:
                        i.pipes = [i.pipes, e];
                        break;
                    default:
                        i.pipes.push(e)
                    }
                    i.pipesCount += 1,
                    c("pipe count=%d opts=%j", i.pipesCount, t);
                    var s = (!t || !1 !== t.end) && e !== r.stdout && e !== r.stderr ? u : b;
                    function a(t, r) {
                        c("onunpipe"),
                        t === n && r && !1 === r.hasUnpiped && (r.hasUnpiped = !0,
                        c("cleanup"),
                        e.removeListener("close", p),
                        e.removeListener("finish", g),
                        e.removeListener("drain", l),
                        e.removeListener("error", h),
                        e.removeListener("unpipe", a),
                        n.removeListener("end", u),
                        n.removeListener("end", b),
                        n.removeListener("data", f),
                        d = !0,
                        !i.awaitDrain || e._writableState && !e._writableState.needDrain || l())
                    }
                    function u() {
                        c("onend"),
                        e.end()
                    }
                    i.endEmitted ? r.nextTick(s) : n.once("end", s),
                    e.on("unpipe", a);
                    var l = function(e) {
                        return function() {
                            var t = e._readableState;
                            c("pipeOnDrain", t.awaitDrain),
                            t.awaitDrain && t.awaitDrain--,
                            0 === t.awaitDrain && o(e, "data") && (t.flowing = !0,
                            D(e))
                        }
                    }(n);
                    e.on("drain", l);
                    var d = !1;
                    function f(t) {
                        c("ondata");
                        var r = e.write(t);
                        c("dest.write", r),
                        !1 === r && ((1 === i.pipesCount && i.pipes === e || i.pipesCount > 1 && -1 !== F(i.pipes, e)) && !d && (c("false write response, pause", i.awaitDrain),
                        i.awaitDrain++),
                        n.pause())
                    }
                    function h(t) {
                        c("onerror", t),
                        b(),
                        e.removeListener("error", h),
                        0 === o(e, "error") && E(e, t)
                    }
                    function p() {
                        e.removeListener("finish", g),
                        b()
                    }
                    function g() {
                        c("onfinish"),
                        e.removeListener("close", p),
                        b()
                    }
                    function b() {
                        c("unpipe"),
                        n.unpipe(e)
                    }
                    return n.on("data", f),
                    function(e, t, r) {
                        if ("function" == typeof e.prependListener)
                            return e.prependListener(t, r);
                        e._events && e._events[t] ? Array.isArray(e._events[t]) ? e._events[t].unshift(r) : e._events[t] = [r, e._events[t]] : e.on(t, r)
                    }(e, "error", h),
                    e.once("close", p),
                    e.once("finish", g),
                    e.emit("pipe", n),
                    i.flowing || (c("pipe resume"),
                    n.resume()),
                    e
                }
                ,
                R.prototype.unpipe = function(e) {
                    var t = this._readableState
                      , r = {
                        hasUnpiped: !1
                    };
                    if (0 === t.pipesCount)
                        return this;
                    if (1 === t.pipesCount)
                        return e && e !== t.pipes || (e || (e = t.pipes),
                        t.pipes = null,
                        t.pipesCount = 0,
                        t.flowing = !1,
                        e && e.emit("unpipe", this, r)),
                        this;
                    if (!e) {
                        var n = t.pipes
                          , i = t.pipesCount;
                        t.pipes = null,
                        t.pipesCount = 0,
                        t.flowing = !1;
                        for (var o = 0; o < i; o++)
                            n[o].emit("unpipe", this, {
                                hasUnpiped: !1
                            });
                        return this
                    }
                    var s = F(t.pipes, e);
                    return -1 === s || (t.pipes.splice(s, 1),
                    t.pipesCount -= 1,
                    1 === t.pipesCount && (t.pipes = t.pipes[0]),
                    e.emit("unpipe", this, r)),
                    this
                }
                ,
                R.prototype.on = function(e, t) {
                    var n = s.prototype.on.call(this, e, t)
                      , i = this._readableState;
                    return "data" === e ? (i.readableListening = this.listenerCount("readable") > 0,
                    !1 !== i.flowing && this.resume()) : "readable" === e && (i.endEmitted || i.readableListening || (i.readableListening = i.needReadable = !0,
                    i.flowing = !1,
                    i.emittedReadable = !1,
                    c("on readable", i.length, i.reading),
                    i.length ? x(this) : i.reading || r.nextTick(L, this))),
                    n
                }
                ,
                R.prototype.addListener = R.prototype.on,
                R.prototype.removeListener = function(e, t) {
                    var n = s.prototype.removeListener.call(this, e, t);
                    return "readable" === e && r.nextTick(P, this),
                    n
                }
                ,
                R.prototype.removeAllListeners = function(e) {
                    var t = s.prototype.removeAllListeners.apply(this, arguments);
                    return "readable" !== e && void 0 !== e || r.nextTick(P, this),
                    t
                }
                ,
                R.prototype.resume = function() {
                    var e = this._readableState;
                    return e.flowing || (c("resume"),
                    e.flowing = !e.readableListening,
                    function(e, t) {
                        t.resumeScheduled || (t.resumeScheduled = !0,
                        r.nextTick(N, e, t))
                    }(this, e)),
                    e.paused = !1,
                    this
                }
                ,
                R.prototype.pause = function() {
                    return c("call pause flowing=%j", this._readableState.flowing),
                    !1 !== this._readableState.flowing && (c("pause"),
                    this._readableState.flowing = !1,
                    this.emit("pause")),
                    this._readableState.paused = !0,
                    this
                }
                ,
                R.prototype.wrap = function(e) {
                    var t = this
                      , r = this._readableState
                      , n = !1;
                    for (var i in e.on("end", (function() {
                        if (c("wrapped end"),
                        r.decoder && !r.ended) {
                            var e = r.decoder.end();
                            e && e.length && t.push(e)
                        }
                        t.push(null)
                    }
                    )),
                    e.on("data", (function(i) {
                        (c("wrapped data"),
                        r.decoder && (i = r.decoder.write(i)),
                        r.objectMode && null == i) || (r.objectMode || i && i.length) && (t.push(i) || (n = !0,
                        e.pause()))
                    }
                    )),
                    e)
                        void 0 === this[i] && "function" == typeof e[i] && (this[i] = function(t) {
                            return function() {
                                return e[t].apply(e, arguments)
                            }
                        }(i));
                    for (var o = 0; o < S.length; o++)
                        e.on(S[o], this.emit.bind(this, S[o]));
                    return this._read = function(t) {
                        c("wrapped _read", t),
                        n && (n = !1,
                        e.resume())
                    }
                    ,
                    this
                }
                ,
                "function" == typeof Symbol && (R.prototype[Symbol.asyncIterator] = function() {
                    return void 0 === f && (f = e("./internal/streams/async_iterator")),
                    f(this)
                }
                ),
                Object.defineProperty(R.prototype, "readableHighWaterMark", {
                    enumerable: !1,
                    get: function() {
                        return this._readableState.highWaterMark
                    }
                }),
                Object.defineProperty(R.prototype, "readableBuffer", {
                    enumerable: !1,
                    get: function() {
                        return this._readableState && this._readableState.buffer
                    }
                }),
                Object.defineProperty(R.prototype, "readableFlowing", {
                    enumerable: !1,
                    get: function() {
                        return this._readableState.flowing
                    },
                    set: function(e) {
                        this._readableState && (this._readableState.flowing = e)
                    }
                }),
                R._fromList = B,
                Object.defineProperty(R.prototype, "readableLength", {
                    enumerable: !1,
                    get: function() {
                        return this._readableState.length
                    }
                }),
                "function" == typeof Symbol && (R.from = function(t, r) {
                    return void 0 === h && (h = e("./internal/streams/from")),
                    h(R, t, r)
                }
                )
            }
            ).call(this)
        }
        ).call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {
        "../errors": 5,
        "./_stream_duplex": 6,
        "./internal/streams/async_iterator": 11,
        "./internal/streams/buffer_list": 12,
        "./internal/streams/destroy": 13,
        "./internal/streams/from": 15,
        "./internal/streams/state": 17,
        "./internal/streams/stream": 18,
        _process: 144,
        buffer: 111,
        events: 115,
        inherits: 119,
        "string_decoder/": 191,
        util: 110
    }],
    9: [function(e, t, r) {
        "use strict";
        t.exports = l;
        var n = e("../errors").codes
          , i = n.ERR_METHOD_NOT_IMPLEMENTED
          , o = n.ERR_MULTIPLE_CALLBACK
          , s = n.ERR_TRANSFORM_ALREADY_TRANSFORMING
          , a = n.ERR_TRANSFORM_WITH_LENGTH_0
          , u = e("./_stream_duplex");
        function c(e, t) {
            var r = this._transformState;
            r.transforming = !1;
            var n = r.writecb;
            if (null === n)
                return this.emit("error", new o);
            r.writechunk = null,
            r.writecb = null,
            null != t && this.push(t),
            n(e);
            var i = this._readableState;
            i.reading = !1,
            (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
        }
        function l(e) {
            if (!(this instanceof l))
                return new l(e);
            u.call(this, e),
            this._transformState = {
                afterTransform: c.bind(this),
                needTransform: !1,
                transforming: !1,
                writecb: null,
                writechunk: null,
                writeencoding: null
            },
            this._readableState.needReadable = !0,
            this._readableState.sync = !1,
            e && ("function" == typeof e.transform && (this._transform = e.transform),
            "function" == typeof e.flush && (this._flush = e.flush)),
            this.on("prefinish", d)
        }
        function d() {
            var e = this;
            "function" != typeof this._flush || this._readableState.destroyed ? f(this, null, null) : this._flush((function(t, r) {
                f(e, t, r)
            }
            ))
        }
        function f(e, t, r) {
            if (t)
                return e.emit("error", t);
            if (null != r && e.push(r),
            e._writableState.length)
                throw new a;
            if (e._transformState.transforming)
                throw new s;
            return e.push(null)
        }
        e("inherits")(l, u),
        l.prototype.push = function(e, t) {
            return this._transformState.needTransform = !1,
            u.prototype.push.call(this, e, t)
        }
        ,
        l.prototype._transform = function(e, t, r) {
            r(new i("_transform()"))
        }
        ,
        l.prototype._write = function(e, t, r) {
            var n = this._transformState;
            if (n.writecb = r,
            n.writechunk = e,
            n.writeencoding = t,
            !n.transforming) {
                var i = this._readableState;
                (n.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
            }
        }
        ,
        l.prototype._read = function(e) {
            var t = this._transformState;
            null === t.writechunk || t.transforming ? t.needTransform = !0 : (t.transforming = !0,
            this._transform(t.writechunk, t.writeencoding, t.afterTransform))
        }
        ,
        l.prototype._destroy = function(e, t) {
            u.prototype._destroy.call(this, e, (function(e) {
                t(e)
            }
            ))
        }
    }
    , {
        "../errors": 5,
        "./_stream_duplex": 6,
        inherits: 119
    }],
    10: [function(e, t, r) {
        (function(r, n) {
            (function() {
                "use strict";
                function i(e) {
                    var t = this;
                    this.next = null,
                    this.entry = null,
                    this.finish = function() {
                        !function(e, t, r) {
                            var n = e.entry;
                            e.entry = null;
                            for (; n; ) {
                                var i = n.callback;
                                t.pendingcb--,
                                i(r),
                                n = n.next
                            }
                            t.corkedRequestsFree.next = e
                        }(t, e)
                    }
                }
                var o;
                t.exports = R,
                R.WritableState = M;
                var s = {
                    deprecate: e("util-deprecate")
                }
                  , a = e("./internal/streams/stream")
                  , u = e("buffer").Buffer
                  , c = (void 0 !== n ? n : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}).Uint8Array || function() {}
                ;
                var l, d = e("./internal/streams/destroy"), f = e("./internal/streams/state").getHighWaterMark, h = e("../errors").codes, p = h.ERR_INVALID_ARG_TYPE, g = h.ERR_METHOD_NOT_IMPLEMENTED, b = h.ERR_MULTIPLE_CALLBACK, m = h.ERR_STREAM_CANNOT_PIPE, y = h.ERR_STREAM_DESTROYED, v = h.ERR_STREAM_NULL_VALUES, w = h.ERR_STREAM_WRITE_AFTER_END, _ = h.ERR_UNKNOWN_ENCODING, E = d.errorOrDestroy;
                function S() {}
                function M(t, n, s) {
                    o = o || e("./_stream_duplex"),
                    t = t || {},
                    "boolean" != typeof s && (s = n instanceof o),
                    this.objectMode = !!t.objectMode,
                    s && (this.objectMode = this.objectMode || !!t.writableObjectMode),
                    this.highWaterMark = f(this, t, "writableHighWaterMark", s),
                    this.finalCalled = !1,
                    this.needDrain = !1,
                    this.ending = !1,
                    this.ended = !1,
                    this.finished = !1,
                    this.destroyed = !1;
                    var a = !1 === t.decodeStrings;
                    this.decodeStrings = !a,
                    this.defaultEncoding = t.defaultEncoding || "utf8",
                    this.length = 0,
                    this.writing = !1,
                    this.corked = 0,
                    this.sync = !0,
                    this.bufferProcessing = !1,
                    this.onwrite = function(e) {
                        !function(e, t) {
                            var n = e._writableState
                              , i = n.sync
                              , o = n.writecb;
                            if ("function" != typeof o)
                                throw new b;
                            if (function(e) {
                                e.writing = !1,
                                e.writecb = null,
                                e.length -= e.writelen,
                                e.writelen = 0
                            }(n),
                            t)
                                !function(e, t, n, i, o) {
                                    --t.pendingcb,
                                    n ? (r.nextTick(o, i),
                                    r.nextTick(O, e, t),
                                    e._writableState.errorEmitted = !0,
                                    E(e, i)) : (o(i),
                                    e._writableState.errorEmitted = !0,
                                    E(e, i),
                                    O(e, t))
                                }(e, n, i, t, o);
                            else {
                                var s = C(n) || e.destroyed;
                                s || n.corked || n.bufferProcessing || !n.bufferedRequest || k(e, n),
                                i ? r.nextTick(I, e, n, s, o) : I(e, n, s, o)
                            }
                        }(n, e)
                    }
                    ,
                    this.writecb = null,
                    this.writelen = 0,
                    this.bufferedRequest = null,
                    this.lastBufferedRequest = null,
                    this.pendingcb = 0,
                    this.prefinished = !1,
                    this.errorEmitted = !1,
                    this.emitClose = !1 !== t.emitClose,
                    this.autoDestroy = !!t.autoDestroy,
                    this.bufferedRequestCount = 0,
                    this.corkedRequestsFree = new i(this)
                }
                function R(t) {
                    var r = this instanceof (o = o || e("./_stream_duplex"));
                    if (!r && !l.call(R, this))
                        return new R(t);
                    this._writableState = new M(t,this,r),
                    this.writable = !0,
                    t && ("function" == typeof t.write && (this._write = t.write),
                    "function" == typeof t.writev && (this._writev = t.writev),
                    "function" == typeof t.destroy && (this._destroy = t.destroy),
                    "function" == typeof t.final && (this._final = t.final)),
                    a.call(this)
                }
                function j(e, t, r, n, i, o, s) {
                    t.writelen = n,
                    t.writecb = s,
                    t.writing = !0,
                    t.sync = !0,
                    t.destroyed ? t.onwrite(new y("write")) : r ? e._writev(i, t.onwrite) : e._write(i, o, t.onwrite),
                    t.sync = !1
                }
                function I(e, t, r, n) {
                    r || function(e, t) {
                        0 === t.length && t.needDrain && (t.needDrain = !1,
                        e.emit("drain"))
                    }(e, t),
                    t.pendingcb--,
                    n(),
                    O(e, t)
                }
                function k(e, t) {
                    t.bufferProcessing = !0;
                    var r = t.bufferedRequest;
                    if (e._writev && r && r.next) {
                        var n = t.bufferedRequestCount
                          , o = new Array(n)
                          , s = t.corkedRequestsFree;
                        s.entry = r;
                        for (var a = 0, u = !0; r; )
                            o[a] = r,
                            r.isBuf || (u = !1),
                            r = r.next,
                            a += 1;
                        o.allBuffers = u,
                        j(e, t, !0, t.length, o, "", s.finish),
                        t.pendingcb++,
                        t.lastBufferedRequest = null,
                        s.next ? (t.corkedRequestsFree = s.next,
                        s.next = null) : t.corkedRequestsFree = new i(t),
                        t.bufferedRequestCount = 0
                    } else {
                        for (; r; ) {
                            var c = r.chunk
                              , l = r.encoding
                              , d = r.callback;
                            if (j(e, t, !1, t.objectMode ? 1 : c.length, c, l, d),
                            r = r.next,
                            t.bufferedRequestCount--,
                            t.writing)
                                break
                        }
                        null === r && (t.lastBufferedRequest = null)
                    }
                    t.bufferedRequest = r,
                    t.bufferProcessing = !1
                }
                function C(e) {
                    return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing
                }
                function x(e, t) {
                    e._final((function(r) {
                        t.pendingcb--,
                        r && E(e, r),
                        t.prefinished = !0,
                        e.emit("prefinish"),
                        O(e, t)
                    }
                    ))
                }
                function O(e, t) {
                    var n = C(t);
                    if (n && (function(e, t) {
                        t.prefinished || t.finalCalled || ("function" != typeof e._final || t.destroyed ? (t.prefinished = !0,
                        e.emit("prefinish")) : (t.pendingcb++,
                        t.finalCalled = !0,
                        r.nextTick(x, e, t)))
                    }(e, t),
                    0 === t.pendingcb && (t.finished = !0,
                    e.emit("finish"),
                    t.autoDestroy))) {
                        var i = e._readableState;
                        (!i || i.autoDestroy && i.endEmitted) && e.destroy()
                    }
                    return n
                }
                e("inherits")(R, a),
                M.prototype.getBuffer = function() {
                    for (var e = this.bufferedRequest, t = []; e; )
                        t.push(e),
                        e = e.next;
                    return t
                }
                ,
                function() {
                    try {
                        Object.defineProperty(M.prototype, "buffer", {
                            get: s.deprecate((function() {
                                return this.getBuffer()
                            }
                            ), "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                        })
                    } catch (e) {}
                }(),
                "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (l = Function.prototype[Symbol.hasInstance],
                Object.defineProperty(R, Symbol.hasInstance, {
                    value: function(e) {
                        return !!l.call(this, e) || this === R && (e && e._writableState instanceof M)
                    }
                })) : l = function(e) {
                    return e instanceof this
                }
                ,
                R.prototype.pipe = function() {
                    E(this, new m)
                }
                ,
                R.prototype.write = function(e, t, n) {
                    var i, o = this._writableState, s = !1, a = !o.objectMode && (i = e,
                    u.isBuffer(i) || i instanceof c);
                    return a && !u.isBuffer(e) && (e = function(e) {
                        return u.from(e)
                    }(e)),
                    "function" == typeof t && (n = t,
                    t = null),
                    a ? t = "buffer" : t || (t = o.defaultEncoding),
                    "function" != typeof n && (n = S),
                    o.ending ? function(e, t) {
                        var n = new w;
                        E(e, n),
                        r.nextTick(t, n)
                    }(this, n) : (a || function(e, t, n, i) {
                        var o;
                        return null === n ? o = new v : "string" == typeof n || t.objectMode || (o = new p("chunk",["string", "Buffer"],n)),
                        !o || (E(e, o),
                        r.nextTick(i, o),
                        !1)
                    }(this, o, e, n)) && (o.pendingcb++,
                    s = function(e, t, r, n, i, o) {
                        if (!r) {
                            var s = function(e, t, r) {
                                e.objectMode || !1 === e.decodeStrings || "string" != typeof t || (t = u.from(t, r));
                                return t
                            }(t, n, i);
                            n !== s && (r = !0,
                            i = "buffer",
                            n = s)
                        }
                        var a = t.objectMode ? 1 : n.length;
                        t.length += a;
                        var c = t.length < t.highWaterMark;
                        c || (t.needDrain = !0);
                        if (t.writing || t.corked) {
                            var l = t.lastBufferedRequest;
                            t.lastBufferedRequest = {
                                chunk: n,
                                encoding: i,
                                isBuf: r,
                                callback: o,
                                next: null
                            },
                            l ? l.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest,
                            t.bufferedRequestCount += 1
                        } else
                            j(e, t, !1, a, n, i, o);
                        return c
                    }(this, o, a, e, t, n)),
                    s
                }
                ,
                R.prototype.cork = function() {
                    this._writableState.corked++
                }
                ,
                R.prototype.uncork = function() {
                    var e = this._writableState;
                    e.corked && (e.corked--,
                    e.writing || e.corked || e.bufferProcessing || !e.bufferedRequest || k(this, e))
                }
                ,
                R.prototype.setDefaultEncoding = function(e) {
                    if ("string" == typeof e && (e = e.toLowerCase()),
                    !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1))
                        throw new _(e);
                    return this._writableState.defaultEncoding = e,
                    this
                }
                ,
                Object.defineProperty(R.prototype, "writableBuffer", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState && this._writableState.getBuffer()
                    }
                }),
                Object.defineProperty(R.prototype, "writableHighWaterMark", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState.highWaterMark
                    }
                }),
                R.prototype._write = function(e, t, r) {
                    r(new g("_write()"))
                }
                ,
                R.prototype._writev = null,
                R.prototype.end = function(e, t, n) {
                    var i = this._writableState;
                    return "function" == typeof e ? (n = e,
                    e = null,
                    t = null) : "function" == typeof t && (n = t,
                    t = null),
                    null != e && this.write(e, t),
                    i.corked && (i.corked = 1,
                    this.uncork()),
                    i.ending || function(e, t, n) {
                        t.ending = !0,
                        O(e, t),
                        n && (t.finished ? r.nextTick(n) : e.once("finish", n));
                        t.ended = !0,
                        e.writable = !1
                    }(this, i, n),
                    this
                }
                ,
                Object.defineProperty(R.prototype, "writableLength", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState.length
                    }
                }),
                Object.defineProperty(R.prototype, "destroyed", {
                    enumerable: !1,
                    get: function() {
                        return void 0 !== this._writableState && this._writableState.destroyed
                    },
                    set: function(e) {
                        this._writableState && (this._writableState.destroyed = e)
                    }
                }),
                R.prototype.destroy = d.destroy,
                R.prototype._undestroy = d.undestroy,
                R.prototype._destroy = function(e, t) {
                    t(e)
                }
            }
            ).call(this)
        }
        ).call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {
        "../errors": 5,
        "./_stream_duplex": 6,
        "./internal/streams/destroy": 13,
        "./internal/streams/state": 17,
        "./internal/streams/stream": 18,
        _process: 144,
        buffer: 111,
        inherits: 119,
        "util-deprecate": 193
    }],
    11: [function(e, t, r) {
        (function(r) {
            (function() {
                "use strict";
                var n;
                function i(e, t, r) {
                    return (t = function(e) {
                        var t = function(e, t) {
                            if ("object" != typeof e || null === e)
                                return e;
                            var r = e[Symbol.toPrimitive];
                            if (void 0 !== r) {
                                var n = r.call(e, t || "default");
                                if ("object" != typeof n)
                                    return n;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return ("string" === t ? String : Number)(e)
                        }(e, "string");
                        return "symbol" == typeof t ? t : String(t)
                    }(t))in e ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = r,
                    e
                }
                var o = e("./end-of-stream")
                  , s = Symbol("lastResolve")
                  , a = Symbol("lastReject")
                  , u = Symbol("error")
                  , c = Symbol("ended")
                  , l = Symbol("lastPromise")
                  , d = Symbol("handlePromise")
                  , f = Symbol("stream");
                function h(e, t) {
                    return {
                        value: e,
                        done: t
                    }
                }
                function p(e) {
                    var t = e[s];
                    if (null !== t) {
                        var r = e[f].read();
                        null !== r && (e[l] = null,
                        e[s] = null,
                        e[a] = null,
                        t(h(r, !1)))
                    }
                }
                function g(e) {
                    r.nextTick(p, e)
                }
                var b = Object.getPrototypeOf((function() {}
                ))
                  , m = Object.setPrototypeOf((i(n = {
                    get stream() {
                        return this[f]
                    },
                    next: function() {
                        var e = this
                          , t = this[u];
                        if (null !== t)
                            return Promise.reject(t);
                        if (this[c])
                            return Promise.resolve(h(void 0, !0));
                        if (this[f].destroyed)
                            return new Promise((function(t, n) {
                                r.nextTick((function() {
                                    e[u] ? n(e[u]) : t(h(void 0, !0))
                                }
                                ))
                            }
                            ));
                        var n, i = this[l];
                        if (i)
                            n = new Promise(function(e, t) {
                                return function(r, n) {
                                    e.then((function() {
                                        t[c] ? r(h(void 0, !0)) : t[d](r, n)
                                    }
                                    ), n)
                                }
                            }(i, this));
                        else {
                            var o = this[f].read();
                            if (null !== o)
                                return Promise.resolve(h(o, !1));
                            n = new Promise(this[d])
                        }
                        return this[l] = n,
                        n
                    }
                }, Symbol.asyncIterator, (function() {
                    return this
                }
                )),
                i(n, "return", (function() {
                    var e = this;
                    return new Promise((function(t, r) {
                        e[f].destroy(null, (function(e) {
                            e ? r(e) : t(h(void 0, !0))
                        }
                        ))
                    }
                    ))
                }
                )),
                n), b);
                t.exports = function(e) {
                    var t, r = Object.create(m, (i(t = {}, f, {
                        value: e,
                        writable: !0
                    }),
                    i(t, s, {
                        value: null,
                        writable: !0
                    }),
                    i(t, a, {
                        value: null,
                        writable: !0
                    }),
                    i(t, u, {
                        value: null,
                        writable: !0
                    }),
                    i(t, c, {
                        value: e._readableState.endEmitted,
                        writable: !0
                    }),
                    i(t, d, {
                        value: function(e, t) {
                            var n = r[f].read();
                            n ? (r[l] = null,
                            r[s] = null,
                            r[a] = null,
                            e(h(n, !1))) : (r[s] = e,
                            r[a] = t)
                        },
                        writable: !0
                    }),
                    t));
                    return r[l] = null,
                    o(e, (function(e) {
                        if (e && "ERR_STREAM_PREMATURE_CLOSE" !== e.code) {
                            var t = r[a];
                            return null !== t && (r[l] = null,
                            r[s] = null,
                            r[a] = null,
                            t(e)),
                            void (r[u] = e)
                        }
                        var n = r[s];
                        null !== n && (r[l] = null,
                        r[s] = null,
                        r[a] = null,
                        n(h(void 0, !0))),
                        r[c] = !0
                    }
                    )),
                    e.on("readable", g.bind(null, r)),
                    r
                }
            }
            ).call(this)
        }
        ).call(this, e("_process"))
    }
    , {
        "./end-of-stream": 14,
        _process: 144
    }],
    12: [function(e, t, r) {
        "use strict";
        function n(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }
        function i(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? n(Object(r), !0).forEach((function(t) {
                    o(e, t, r[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }
                ))
            }
            return e
        }
        function o(e, t, r) {
            return (t = a(t))in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        function s(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, a(n.key), n)
            }
        }
        function a(e) {
            var t = function(e, t) {
                if ("object" != typeof e || null === e)
                    return e;
                var r = e[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(e, t || "default");
                    if ("object" != typeof n)
                        return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" == typeof t ? t : String(t)
        }
        var u = e("buffer").Buffer
          , c = e("util").inspect
          , l = c && c.custom || "inspect";
        t.exports = function() {
            function e() {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this.head = null,
                this.tail = null,
                this.length = 0
            }
            var t, r, n;
            return t = e,
            (r = [{
                key: "push",
                value: function(e) {
                    var t = {
                        data: e,
                        next: null
                    };
                    this.length > 0 ? this.tail.next = t : this.head = t,
                    this.tail = t,
                    ++this.length
                }
            }, {
                key: "unshift",
                value: function(e) {
                    var t = {
                        data: e,
                        next: this.head
                    };
                    0 === this.length && (this.tail = t),
                    this.head = t,
                    ++this.length
                }
            }, {
                key: "shift",
                value: function() {
                    if (0 !== this.length) {
                        var e = this.head.data;
                        return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next,
                        --this.length,
                        e
                    }
                }
            }, {
                key: "clear",
                value: function() {
                    this.head = this.tail = null,
                    this.length = 0
                }
            }, {
                key: "join",
                value: function(e) {
                    if (0 === this.length)
                        return "";
                    for (var t = this.head, r = "" + t.data; t = t.next; )
                        r += e + t.data;
                    return r
                }
            }, {
                key: "concat",
                value: function(e) {
                    if (0 === this.length)
                        return u.alloc(0);
                    for (var t, r, n, i = u.allocUnsafe(e >>> 0), o = this.head, s = 0; o; )
                        t = o.data,
                        r = i,
                        n = s,
                        u.prototype.copy.call(t, r, n),
                        s += o.data.length,
                        o = o.next;
                    return i
                }
            }, {
                key: "consume",
                value: function(e, t) {
                    var r;
                    return e < this.head.data.length ? (r = this.head.data.slice(0, e),
                    this.head.data = this.head.data.slice(e)) : r = e === this.head.data.length ? this.shift() : t ? this._getString(e) : this._getBuffer(e),
                    r
                }
            }, {
                key: "first",
                value: function() {
                    return this.head.data
                }
            }, {
                key: "_getString",
                value: function(e) {
                    var t = this.head
                      , r = 1
                      , n = t.data;
                    for (e -= n.length; t = t.next; ) {
                        var i = t.data
                          , o = e > i.length ? i.length : e;
                        if (o === i.length ? n += i : n += i.slice(0, e),
                        0 == (e -= o)) {
                            o === i.length ? (++r,
                            t.next ? this.head = t.next : this.head = this.tail = null) : (this.head = t,
                            t.data = i.slice(o));
                            break
                        }
                        ++r
                    }
                    return this.length -= r,
                    n
                }
            }, {
                key: "_getBuffer",
                value: function(e) {
                    var t = u.allocUnsafe(e)
                      , r = this.head
                      , n = 1;
                    for (r.data.copy(t),
                    e -= r.data.length; r = r.next; ) {
                        var i = r.data
                          , o = e > i.length ? i.length : e;
                        if (i.copy(t, t.length - e, 0, o),
                        0 == (e -= o)) {
                            o === i.length ? (++n,
                            r.next ? this.head = r.next : this.head = this.tail = null) : (this.head = r,
                            r.data = i.slice(o));
                            break
                        }
                        ++n
                    }
                    return this.length -= n,
                    t
                }
            }, {
                key: l,
                value: function(e, t) {
                    return c(this, i(i({}, t), {}, {
                        depth: 0,
                        customInspect: !1
                    }))
                }
            }]) && s(t.prototype, r),
            n && s(t, n),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            e
        }()
    }
    , {
        buffer: 111,
        util: 110
    }],
    13: [function(e, t, r) {
        (function(e) {
            (function() {
                "use strict";
                function r(e, t) {
                    i(e, t),
                    n(e)
                }
                function n(e) {
                    e._writableState && !e._writableState.emitClose || e._readableState && !e._readableState.emitClose || e.emit("close")
                }
                function i(e, t) {
                    e.emit("error", t)
                }
                t.exports = {
                    destroy: function(t, o) {
                        var s = this
                          , a = this._readableState && this._readableState.destroyed
                          , u = this._writableState && this._writableState.destroyed;
                        return a || u ? (o ? o(t) : t && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0,
                        e.nextTick(i, this, t)) : e.nextTick(i, this, t)),
                        this) : (this._readableState && (this._readableState.destroyed = !0),
                        this._writableState && (this._writableState.destroyed = !0),
                        this._destroy(t || null, (function(t) {
                            !o && t ? s._writableState ? s._writableState.errorEmitted ? e.nextTick(n, s) : (s._writableState.errorEmitted = !0,
                            e.nextTick(r, s, t)) : e.nextTick(r, s, t) : o ? (e.nextTick(n, s),
                            o(t)) : e.nextTick(n, s)
                        }
                        )),
                        this)
                    },
                    undestroy: function() {
                        this._readableState && (this._readableState.destroyed = !1,
                        this._readableState.reading = !1,
                        this._readableState.ended = !1,
                        this._readableState.endEmitted = !1),
                        this._writableState && (this._writableState.destroyed = !1,
                        this._writableState.ended = !1,
                        this._writableState.ending = !1,
                        this._writableState.finalCalled = !1,
                        this._writableState.prefinished = !1,
                        this._writableState.finished = !1,
                        this._writableState.errorEmitted = !1)
                    },
                    errorOrDestroy: function(e, t) {
                        var r = e._readableState
                          , n = e._writableState;
                        r && r.autoDestroy || n && n.autoDestroy ? e.destroy(t) : e.emit("error", t)
                    }
                }
            }
            ).call(this)
        }
        ).call(this, e("_process"))
    }
    , {
        _process: 144
    }],
    14: [function(e, t, r) {
        "use strict";
        var n = e("../../../errors").codes.ERR_STREAM_PREMATURE_CLOSE;
        function i() {}
        t.exports = function e(t, r, o) {
            if ("function" == typeof r)
                return e(t, null, r);
            r || (r = {}),
            o = function(e) {
                var t = !1;
                return function() {
                    if (!t) {
                        t = !0;
                        for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++)
                            n[i] = arguments[i];
                        e.apply(this, n)
                    }
                }
            }(o || i);
            var s = r.readable || !1 !== r.readable && t.readable
              , a = r.writable || !1 !== r.writable && t.writable
              , u = function() {
                t.writable || l()
            }
              , c = t._writableState && t._writableState.finished
              , l = function() {
                a = !1,
                c = !0,
                s || o.call(t)
            }
              , d = t._readableState && t._readableState.endEmitted
              , f = function() {
                s = !1,
                d = !0,
                a || o.call(t)
            }
              , h = function(e) {
                o.call(t, e)
            }
              , p = function() {
                var e;
                return s && !d ? (t._readableState && t._readableState.ended || (e = new n),
                o.call(t, e)) : a && !c ? (t._writableState && t._writableState.ended || (e = new n),
                o.call(t, e)) : void 0
            }
              , g = function() {
                t.req.on("finish", l)
            };
            return !function(e) {
                return e.setHeader && "function" == typeof e.abort
            }(t) ? a && !t._writableState && (t.on("end", u),
            t.on("close", u)) : (t.on("complete", l),
            t.on("abort", p),
            t.req ? g() : t.on("request", g)),
            t.on("end", f),
            t.on("finish", l),
            !1 !== r.error && t.on("error", h),
            t.on("close", p),
            function() {
                t.removeListener("complete", l),
                t.removeListener("abort", p),
                t.removeListener("request", g),
                t.req && t.req.removeListener("finish", l),
                t.removeListener("end", u),
                t.removeListener("close", u),
                t.removeListener("finish", l),
                t.removeListener("end", f),
                t.removeListener("error", h),
                t.removeListener("close", p)
            }
        }
    }
    , {
        "../../../errors": 5
    }],
    15: [function(e, t, r) {
        t.exports = function() {
            throw new Error("Readable.from is not available in the browser")
        }
    }
    , {}],
    16: [function(e, t, r) {
        "use strict";
        var n;
        var i = e("../../../errors").codes
          , o = i.ERR_MISSING_ARGS
          , s = i.ERR_STREAM_DESTROYED;
        function a(e) {
            if (e)
                throw e
        }
        function u(e) {
            e()
        }
        function c(e, t) {
            return e.pipe(t)
        }
        t.exports = function() {
            for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
                r[i] = arguments[i];
            var l, d = function(e) {
                return e.length ? "function" != typeof e[e.length - 1] ? a : e.pop() : a
            }(r);
            if (Array.isArray(r[0]) && (r = r[0]),
            r.length < 2)
                throw new o("streams");
            var f = r.map((function(t, i) {
                var o = i < r.length - 1;
                return function(t, r, i, o) {
                    o = function(e) {
                        var t = !1;
                        return function() {
                            t || (t = !0,
                            e.apply(void 0, arguments))
                        }
                    }(o);
                    var a = !1;
                    t.on("close", (function() {
                        a = !0
                    }
                    )),
                    void 0 === n && (n = e("./end-of-stream")),
                    n(t, {
                        readable: r,
                        writable: i
                    }, (function(e) {
                        if (e)
                            return o(e);
                        a = !0,
                        o()
                    }
                    ));
                    var u = !1;
                    return function(e) {
                        if (!a && !u)
                            return u = !0,
                            function(e) {
                                return e.setHeader && "function" == typeof e.abort
                            }(t) ? t.abort() : "function" == typeof t.destroy ? t.destroy() : void o(e || new s("pipe"))
                    }
                }(t, o, i > 0, (function(e) {
                    l || (l = e),
                    e && f.forEach(u),
                    o || (f.forEach(u),
                    d(l))
                }
                ))
            }
            ));
            return r.reduce(c)
        }
    }
    , {
        "../../../errors": 5,
        "./end-of-stream": 14
    }],
    17: [function(e, t, r) {
        "use strict";
        var n = e("../../../errors").codes.ERR_INVALID_OPT_VALUE;
        t.exports = {
            getHighWaterMark: function(e, t, r, i) {
                var o = function(e, t, r) {
                    return null != e.highWaterMark ? e.highWaterMark : t ? e[r] : null
                }(t, i, r);
                if (null != o) {
                    if (!isFinite(o) || Math.floor(o) !== o || o < 0)
                        throw new n(i ? r : "highWaterMark",o);
                    return Math.floor(o)
                }
                return e.objectMode ? 16 : 16384
            }
        }
    }
    , {
        "../../../errors": 5
    }],
    18: [function(e, t, r) {
        t.exports = e("events").EventEmitter
    }
    , {
        events: 115
    }],
    19: [function(e, t, r) {
        (r = t.exports = e("./lib/_stream_readable.js")).Stream = r,
        r.Readable = r,
        r.Writable = e("./lib/_stream_writable.js"),
        r.Duplex = e("./lib/_stream_duplex.js"),
        r.Transform = e("./lib/_stream_transform.js"),
        r.PassThrough = e("./lib/_stream_passthrough.js"),
        r.finished = e("./lib/internal/streams/end-of-stream.js"),
        r.pipeline = e("./lib/internal/streams/pipeline.js")
    }
    , {
        "./lib/_stream_duplex.js": 6,
        "./lib/_stream_passthrough.js": 7,
        "./lib/_stream_readable.js": 8,
        "./lib/_stream_transform.js": 9,
        "./lib/_stream_writable.js": 10,
        "./lib/internal/streams/end-of-stream.js": 14,
        "./lib/internal/streams/pipeline.js": 16
    }],
    20: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.BasePostMessageStream = void 0;
        const n = e("readable-stream")
          , i = ()=>{}
          , o = "SYN"
          , s = "ACK";
        class a extends n.Duplex {
            constructor() {
                super({
                    objectMode: !0
                }),
                this._init = !1,
                this._haveSyn = !1,
                this._log = ()=>null
            }
            _handshake() {
                this._write(o, null, i),
                this.cork()
            }
            _onData(e) {
                if (this._init)
                    try {
                        this.push(e),
                        this._log(e, !1)
                    } catch (e) {
                        this.emit("error", e)
                    }
                else
                    e === o ? (this._haveSyn = !0,
                    this._write(s, null, i)) : e === s && (this._init = !0,
                    this._haveSyn || this._write(s, null, i),
                    this.uncork())
            }
            _read() {}
            _write(e, t, r) {
                e !== s && e !== o && this._log(e, !0),
                this._postMessage(e),
                r()
            }
            _setLogger(e) {
                this._log = e
            }
        }
        r.BasePostMessageStream = a
    }
    , {
        "readable-stream": 41
    }],
    21: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.WebWorkerParentPostMessageStream = void 0;
        const n = e("../BasePostMessageStream")
          , i = e("../utils");
        class o extends n.BasePostMessageStream {
            constructor({worker: e}) {
                super(),
                this._target = i.DEDICATED_WORKER_NAME,
                this._worker = e,
                this._worker.onmessage = this._onMessage.bind(this),
                this._handshake()
            }
            _postMessage(e) {
                this._worker.postMessage({
                    target: this._target,
                    data: e
                })
            }
            _onMessage(e) {
                const t = e.data;
                (0,
                i.isValidStreamMessage)(t) && this._onData(t.data)
            }
            _destroy() {
                this._worker.onmessage = null,
                this._worker = null
            }
        }
        r.WebWorkerParentPostMessageStream = o
    }
    , {
        "../BasePostMessageStream": 20,
        "../utils": 25
    }],
    22: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.WebWorkerPostMessageStream = void 0;
        const n = e("../BasePostMessageStream")
          , i = e("../utils");
        class o extends n.BasePostMessageStream {
            constructor() {
                if ("undefined" == typeof self || "undefined" == typeof WorkerGlobalScope)
                    throw new Error("WorkerGlobalScope not found. This class should only be instantiated in a WebWorker.");
                super(),
                this._name = i.DEDICATED_WORKER_NAME,
                self.addEventListener("message", this._onMessage.bind(this)),
                this._handshake()
            }
            _postMessage(e) {
                self.postMessage({
                    data: e
                })
            }
            _onMessage(e) {
                const t = e.data;
                (0,
                i.isValidStreamMessage)(t) && t.target === this._name && this._onData(t.data)
            }
            _destroy() {}
        }
        r.WebWorkerPostMessageStream = o
    }
    , {
        "../BasePostMessageStream": 20,
        "../utils": 25
    }],
    23: [function(e, t, r) {
        "use strict";
        var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
            void 0 === n && (n = r),
            Object.defineProperty(e, n, {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            })
        }
        : function(e, t, r, n) {
            void 0 === n && (n = r),
            e[n] = t[r]
        }
        )
          , i = this && this.__exportStar || function(e, t) {
            for (var r in e)
                "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r)
        }
        ;
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        i(e("./window/WindowPostMessageStream"), r),
        i(e("./WebWorker/WebWorkerPostMessageStream"), r),
        i(e("./WebWorker/WebWorkerParentPostMessageStream"), r),
        i(e("./runtime/BrowserRuntimePostMessageStream"), r),
        i(e("./BasePostMessageStream"), r)
    }
    , {
        "./BasePostMessageStream": 20,
        "./WebWorker/WebWorkerParentPostMessageStream": 21,
        "./WebWorker/WebWorkerPostMessageStream": 22,
        "./runtime/BrowserRuntimePostMessageStream": 24,
        "./window/WindowPostMessageStream": 26
    }],
    24: [function(e, t, r) {
        "use strict";
        var n, i, o = this && this.__classPrivateFieldSet || function(e, t, r, n, i) {
            if ("m" === n)
                throw new TypeError("Private method is not writable");
            if ("a" === n && !i)
                throw new TypeError("Private accessor was defined without a setter");
            if ("function" == typeof t ? e !== t || !i : !t.has(e))
                throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r),
            r
        }
        , s = this && this.__classPrivateFieldGet || function(e, t, r, n) {
            if ("a" === r && !n)
                throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !n : !t.has(e))
                throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
        }
        ;
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.BrowserRuntimePostMessageStream = void 0;
        const a = e("../BasePostMessageStream")
          , u = e("../utils");
        class c extends a.BasePostMessageStream {
            constructor({name: e, target: t}) {
                super(),
                n.set(this, void 0),
                i.set(this, void 0),
                o(this, n, e, "f"),
                o(this, i, t, "f"),
                this._onMessage = this._onMessage.bind(this),
                this._getRuntime().onMessage.addListener(this._onMessage),
                this._handshake()
            }
            _postMessage(e) {
                this._getRuntime().sendMessage({
                    target: s(this, i, "f"),
                    data: e
                })
            }
            _onMessage(e) {
                (0,
                u.isValidStreamMessage)(e) && e.target === s(this, n, "f") && this._onData(e.data)
            }
            _getRuntime() {
                var e, t;
                if ("chrome"in globalThis && "function" == typeof (null === (e = null === chrome || void 0 === chrome ? void 0 : chrome.runtime) || void 0 === e ? void 0 : e.sendMessage))
                    return chrome.runtime;
                if ("browser"in globalThis && "function" == typeof (null === (t = null === browser || void 0 === browser ? void 0 : browser.runtime) || void 0 === t ? void 0 : t.sendMessage))
                    return browser.runtime;
                throw new Error("browser.runtime.sendMessage is not a function. This class should only be instantiated in a web extension.")
            }
            _destroy() {
                this._getRuntime().onMessage.removeListener(this._onMessage)
            }
        }
        r.BrowserRuntimePostMessageStream = c,
        n = new WeakMap,
        i = new WeakMap
    }
    , {
        "../BasePostMessageStream": 20,
        "../utils": 25
    }],
    25: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.isValidStreamMessage = r.DEDICATED_WORKER_NAME = void 0;
        const n = e("@metamask/utils");
        r.DEDICATED_WORKER_NAME = "dedicatedWorker",
        r.isValidStreamMessage = function(e) {
            return (0,
            n.isObject)(e) && Boolean(e.data) && ("number" == typeof e.data || "object" == typeof e.data || "string" == typeof e.data)
        }
    }
    , {
        "@metamask/utils": 102
    }],
    26: [function(e, t, r) {
        "use strict";
        var n, i;
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.WindowPostMessageStream = void 0;
        const o = e("@metamask/utils")
          , s = e("../BasePostMessageStream")
          , a = e("../utils")
          , u = null === (n = Object.getOwnPropertyDescriptor(MessageEvent.prototype, "source")) || void 0 === n ? void 0 : n.get;
        (0,
        o.assert)(u, "MessageEvent.prototype.source getter is not defined.");
        const c = null === (i = Object.getOwnPropertyDescriptor(MessageEvent.prototype, "origin")) || void 0 === i ? void 0 : i.get;
        (0,
        o.assert)(c, "MessageEvent.prototype.origin getter is not defined.");
        class l extends s.BasePostMessageStream {
            constructor({name: e, target: t, targetOrigin: r=location.origin, targetWindow: n=window}) {
                if (super(),
                "undefined" == typeof window || "function" != typeof window.postMessage)
                    throw new Error("window.postMessage is not a function. This class should only be instantiated in a Window.");
                this._name = e,
                this._target = t,
                this._targetOrigin = r,
                this._targetWindow = n,
                this._onMessage = this._onMessage.bind(this),
                window.addEventListener("message", this._onMessage, !1),
                this._handshake()
            }
            _postMessage(e) {
                this._targetWindow.postMessage({
                    target: this._target,
                    data: e
                }, this._targetOrigin)
            }
            _onMessage(e) {
                const t = e.data;
                "*" !== this._targetOrigin && c.call(e) !== this._targetOrigin || u.call(e) !== this._targetWindow || !(0,
                a.isValidStreamMessage)(t) || t.target !== this._name || this._onData(t.data)
            }
            _destroy() {
                window.removeEventListener("message", this._onMessage, !1)
            }
        }
        r.WindowPostMessageStream = l
    }
    , {
        "../BasePostMessageStream": 20,
        "../utils": 25,
        "@metamask/utils": 102
    }],
    27: [function(e, t, r) {
        arguments[4][5][0].apply(r, arguments)
    }
    , {
        dup: 5
    }],
    28: [function(e, t, r) {
        (function(r) {
            (function() {
                "use strict";
                var n = Object.keys || function(e) {
                    var t = [];
                    for (var r in e)
                        t.push(r);
                    return t
                }
                ;
                t.exports = c;
                var i = e("./_stream_readable")
                  , o = e("./_stream_writable");
                e("inherits")(c, i);
                for (var s = n(o.prototype), a = 0; a < s.length; a++) {
                    var u = s[a];
                    c.prototype[u] || (c.prototype[u] = o.prototype[u])
                }
                function c(e) {
                    if (!(this instanceof c))
                        return new c(e);
                    i.call(this, e),
                    o.call(this, e),
                    this.allowHalfOpen = !0,
                    e && (!1 === e.readable && (this.readable = !1),
                    !1 === e.writable && (this.writable = !1),
                    !1 === e.allowHalfOpen && (this.allowHalfOpen = !1,
                    this.once("end", l)))
                }
                function l() {
                    this._writableState.ended || r.nextTick(d, this)
                }
                function d(e) {
                    e.end()
                }
                Object.defineProperty(c.prototype, "writableHighWaterMark", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState.highWaterMark
                    }
                }),
                Object.defineProperty(c.prototype, "writableBuffer", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState && this._writableState.getBuffer()
                    }
                }),
                Object.defineProperty(c.prototype, "writableLength", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState.length
                    }
                }),
                Object.defineProperty(c.prototype, "destroyed", {
                    enumerable: !1,
                    get: function() {
                        return void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed && this._writableState.destroyed)
                    },
                    set: function(e) {
                        void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e,
                        this._writableState.destroyed = e)
                    }
                })
            }
            ).call(this)
        }
        ).call(this, e("_process"))
    }
    , {
        "./_stream_readable": 30,
        "./_stream_writable": 32,
        _process: 144,
        inherits: 119
    }],
    29: [function(e, t, r) {
        arguments[4][7][0].apply(r, arguments)
    }
    , {
        "./_stream_transform": 31,
        dup: 7,
        inherits: 119
    }],
    30: [function(e, t, r) {
        (function(r, n) {
            (function() {
                "use strict";
                var i;
                t.exports = R,
                R.ReadableState = M;
                e("events").EventEmitter;
                var o = function(e, t) {
                    return e.listeners(t).length
                }
                  , s = e("./internal/streams/stream")
                  , a = e("buffer").Buffer
                  , u = (void 0 !== n ? n : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}).Uint8Array || function() {}
                ;
                var c, l = e("util");
                c = l && l.debuglog ? l.debuglog("stream") : function() {}
                ;
                var d, f, h, p = e("./internal/streams/buffer_list"), g = e("./internal/streams/destroy"), b = e("./internal/streams/state").getHighWaterMark, m = e("../errors").codes, y = m.ERR_INVALID_ARG_TYPE, v = m.ERR_STREAM_PUSH_AFTER_EOF, w = m.ERR_METHOD_NOT_IMPLEMENTED, _ = m.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
                e("inherits")(R, s);
                var E = g.errorOrDestroy
                  , S = ["error", "close", "destroy", "pause", "resume"];
                function M(t, r, n) {
                    i = i || e("./_stream_duplex"),
                    t = t || {},
                    "boolean" != typeof n && (n = r instanceof i),
                    this.objectMode = !!t.objectMode,
                    n && (this.objectMode = this.objectMode || !!t.readableObjectMode),
                    this.highWaterMark = b(this, t, "readableHighWaterMark", n),
                    this.buffer = new p,
                    this.length = 0,
                    this.pipes = null,
                    this.pipesCount = 0,
                    this.flowing = null,
                    this.ended = !1,
                    this.endEmitted = !1,
                    this.reading = !1,
                    this.sync = !0,
                    this.needReadable = !1,
                    this.emittedReadable = !1,
                    this.readableListening = !1,
                    this.resumeScheduled = !1,
                    this.paused = !0,
                    this.emitClose = !1 !== t.emitClose,
                    this.autoDestroy = !!t.autoDestroy,
                    this.destroyed = !1,
                    this.defaultEncoding = t.defaultEncoding || "utf8",
                    this.awaitDrain = 0,
                    this.readingMore = !1,
                    this.decoder = null,
                    this.encoding = null,
                    t.encoding && (d || (d = e("string_decoder/").StringDecoder),
                    this.decoder = new d(t.encoding),
                    this.encoding = t.encoding)
                }
                function R(t) {
                    if (i = i || e("./_stream_duplex"),
                    !(this instanceof R))
                        return new R(t);
                    var r = this instanceof i;
                    this._readableState = new M(t,this,r),
                    this.readable = !0,
                    t && ("function" == typeof t.read && (this._read = t.read),
                    "function" == typeof t.destroy && (this._destroy = t.destroy)),
                    s.call(this)
                }
                function j(e, t, r, n, i) {
                    c("readableAddChunk", t);
                    var o, s = e._readableState;
                    if (null === t)
                        s.reading = !1,
                        function(e, t) {
                            if (c("onEofChunk"),
                            t.ended)
                                return;
                            if (t.decoder) {
                                var r = t.decoder.end();
                                r && r.length && (t.buffer.push(r),
                                t.length += t.objectMode ? 1 : r.length)
                            }
                            t.ended = !0,
                            t.sync ? x(e) : (t.needReadable = !1,
                            t.emittedReadable || (t.emittedReadable = !0,
                            O(e)))
                        }(e, s);
                    else if (i || (o = function(e, t) {
                        var r;
                        n = t,
                        a.isBuffer(n) || n instanceof u || "string" == typeof t || void 0 === t || e.objectMode || (r = new y("chunk",["string", "Buffer", "Uint8Array"],t));
                        var n;
                        return r
                    }(s, t)),
                    o)
                        E(e, o);
                    else if (s.objectMode || t && t.length > 0)
                        if ("string" == typeof t || s.objectMode || Object.getPrototypeOf(t) === a.prototype || (t = function(e) {
                            return a.from(e)
                        }(t)),
                        n)
                            s.endEmitted ? E(e, new _) : I(e, s, t, !0);
                        else if (s.ended)
                            E(e, new v);
                        else {
                            if (s.destroyed)
                                return !1;
                            s.reading = !1,
                            s.decoder && !r ? (t = s.decoder.write(t),
                            s.objectMode || 0 !== t.length ? I(e, s, t, !1) : A(e, s)) : I(e, s, t, !1)
                        }
                    else
                        n || (s.reading = !1,
                        A(e, s));
                    return !s.ended && (s.length < s.highWaterMark || 0 === s.length)
                }
                function I(e, t, r, n) {
                    t.flowing && 0 === t.length && !t.sync ? (t.awaitDrain = 0,
                    e.emit("data", r)) : (t.length += t.objectMode ? 1 : r.length,
                    n ? t.buffer.unshift(r) : t.buffer.push(r),
                    t.needReadable && x(e)),
                    A(e, t)
                }
                Object.defineProperty(R.prototype, "destroyed", {
                    enumerable: !1,
                    get: function() {
                        return void 0 !== this._readableState && this._readableState.destroyed
                    },
                    set: function(e) {
                        this._readableState && (this._readableState.destroyed = e)
                    }
                }),
                R.prototype.destroy = g.destroy,
                R.prototype._undestroy = g.undestroy,
                R.prototype._destroy = function(e, t) {
                    t(e)
                }
                ,
                R.prototype.push = function(e, t) {
                    var r, n = this._readableState;
                    return n.objectMode ? r = !0 : "string" == typeof e && ((t = t || n.defaultEncoding) !== n.encoding && (e = a.from(e, t),
                    t = ""),
                    r = !0),
                    j(this, e, t, !1, r)
                }
                ,
                R.prototype.unshift = function(e) {
                    return j(this, e, null, !0, !1)
                }
                ,
                R.prototype.isPaused = function() {
                    return !1 === this._readableState.flowing
                }
                ,
                R.prototype.setEncoding = function(t) {
                    d || (d = e("string_decoder/").StringDecoder);
                    var r = new d(t);
                    this._readableState.decoder = r,
                    this._readableState.encoding = this._readableState.decoder.encoding;
                    for (var n = this._readableState.buffer.head, i = ""; null !== n; )
                        i += r.write(n.data),
                        n = n.next;
                    return this._readableState.buffer.clear(),
                    "" !== i && this._readableState.buffer.push(i),
                    this._readableState.length = i.length,
                    this
                }
                ;
                var k = 1073741824;
                function C(e, t) {
                    return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e != e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = function(e) {
                        return e >= k ? e = k : (e--,
                        e |= e >>> 1,
                        e |= e >>> 2,
                        e |= e >>> 4,
                        e |= e >>> 8,
                        e |= e >>> 16,
                        e++),
                        e
                    }(e)),
                    e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0,
                    0))
                }
                function x(e) {
                    var t = e._readableState;
                    c("emitReadable", t.needReadable, t.emittedReadable),
                    t.needReadable = !1,
                    t.emittedReadable || (c("emitReadable", t.flowing),
                    t.emittedReadable = !0,
                    r.nextTick(O, e))
                }
                function O(e) {
                    var t = e._readableState;
                    c("emitReadable_", t.destroyed, t.length, t.ended),
                    t.destroyed || !t.length && !t.ended || (e.emit("readable"),
                    t.emittedReadable = !1),
                    t.needReadable = !t.flowing && !t.ended && t.length <= t.highWaterMark,
                    D(e)
                }
                function A(e, t) {
                    t.readingMore || (t.readingMore = !0,
                    r.nextTick(T, e, t))
                }
                function T(e, t) {
                    for (; !t.reading && !t.ended && (t.length < t.highWaterMark || t.flowing && 0 === t.length); ) {
                        var r = t.length;
                        if (c("maybeReadMore read 0"),
                        e.read(0),
                        r === t.length)
                            break
                    }
                    t.readingMore = !1
                }
                function P(e) {
                    var t = e._readableState;
                    t.readableListening = e.listenerCount("readable") > 0,
                    t.resumeScheduled && !t.paused ? t.flowing = !0 : e.listenerCount("data") > 0 && e.resume()
                }
                function L(e) {
                    c("readable nexttick read 0"),
                    e.read(0)
                }
                function N(e, t) {
                    c("resume", t.reading),
                    t.reading || e.read(0),
                    t.resumeScheduled = !1,
                    e.emit("resume"),
                    D(e),
                    t.flowing && !t.reading && e.read(0)
                }
                function D(e) {
                    var t = e._readableState;
                    for (c("flow", t.flowing); t.flowing && null !== e.read(); )
                        ;
                }
                function B(e, t) {
                    return 0 === t.length ? null : (t.objectMode ? r = t.buffer.shift() : !e || e >= t.length ? (r = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.first() : t.buffer.concat(t.length),
                    t.buffer.clear()) : r = t.buffer.consume(e, t.decoder),
                    r);
                    var r
                }
                function U(e) {
                    var t = e._readableState;
                    c("endReadable", t.endEmitted),
                    t.endEmitted || (t.ended = !0,
                    r.nextTick($, t, e))
                }
                function $(e, t) {
                    if (c("endReadableNT", e.endEmitted, e.length),
                    !e.endEmitted && 0 === e.length && (e.endEmitted = !0,
                    t.readable = !1,
                    t.emit("end"),
                    e.autoDestroy)) {
                        var r = t._writableState;
                        (!r || r.autoDestroy && r.finished) && t.destroy()
                    }
                }
                function F(e, t) {
                    for (var r = 0, n = e.length; r < n; r++)
                        if (e[r] === t)
                            return r;
                    return -1
                }
                R.prototype.read = function(e) {
                    c("read", e),
                    e = parseInt(e, 10);
                    var t = this._readableState
                      , r = e;
                    if (0 !== e && (t.emittedReadable = !1),
                    0 === e && t.needReadable && ((0 !== t.highWaterMark ? t.length >= t.highWaterMark : t.length > 0) || t.ended))
                        return c("read: emitReadable", t.length, t.ended),
                        0 === t.length && t.ended ? U(this) : x(this),
                        null;
                    if (0 === (e = C(e, t)) && t.ended)
                        return 0 === t.length && U(this),
                        null;
                    var n, i = t.needReadable;
                    return c("need readable", i),
                    (0 === t.length || t.length - e < t.highWaterMark) && c("length less than watermark", i = !0),
                    t.ended || t.reading ? c("reading or ended", i = !1) : i && (c("do read"),
                    t.reading = !0,
                    t.sync = !0,
                    0 === t.length && (t.needReadable = !0),
                    this._read(t.highWaterMark),
                    t.sync = !1,
                    t.reading || (e = C(r, t))),
                    null === (n = e > 0 ? B(e, t) : null) ? (t.needReadable = t.length <= t.highWaterMark,
                    e = 0) : (t.length -= e,
                    t.awaitDrain = 0),
                    0 === t.length && (t.ended || (t.needReadable = !0),
                    r !== e && t.ended && U(this)),
                    null !== n && this.emit("data", n),
                    n
                }
                ,
                R.prototype._read = function(e) {
                    E(this, new w("_read()"))
                }
                ,
                R.prototype.pipe = function(e, t) {
                    var n = this
                      , i = this._readableState;
                    switch (i.pipesCount) {
                    case 0:
                        i.pipes = e;
                        break;
                    case 1:
                        i.pipes = [i.pipes, e];
                        break;
                    default:
                        i.pipes.push(e)
                    }
                    i.pipesCount += 1,
                    c("pipe count=%d opts=%j", i.pipesCount, t);
                    var s = (!t || !1 !== t.end) && e !== r.stdout && e !== r.stderr ? u : b;
                    function a(t, r) {
                        c("onunpipe"),
                        t === n && r && !1 === r.hasUnpiped && (r.hasUnpiped = !0,
                        c("cleanup"),
                        e.removeListener("close", p),
                        e.removeListener("finish", g),
                        e.removeListener("drain", l),
                        e.removeListener("error", h),
                        e.removeListener("unpipe", a),
                        n.removeListener("end", u),
                        n.removeListener("end", b),
                        n.removeListener("data", f),
                        d = !0,
                        !i.awaitDrain || e._writableState && !e._writableState.needDrain || l())
                    }
                    function u() {
                        c("onend"),
                        e.end()
                    }
                    i.endEmitted ? r.nextTick(s) : n.once("end", s),
                    e.on("unpipe", a);
                    var l = function(e) {
                        return function() {
                            var t = e._readableState;
                            c("pipeOnDrain", t.awaitDrain),
                            t.awaitDrain && t.awaitDrain--,
                            0 === t.awaitDrain && o(e, "data") && (t.flowing = !0,
                            D(e))
                        }
                    }(n);
                    e.on("drain", l);
                    var d = !1;
                    function f(t) {
                        c("ondata");
                        var r = e.write(t);
                        c("dest.write", r),
                        !1 === r && ((1 === i.pipesCount && i.pipes === e || i.pipesCount > 1 && -1 !== F(i.pipes, e)) && !d && (c("false write response, pause", i.awaitDrain),
                        i.awaitDrain++),
                        n.pause())
                    }
                    function h(t) {
                        c("onerror", t),
                        b(),
                        e.removeListener("error", h),
                        0 === o(e, "error") && E(e, t)
                    }
                    function p() {
                        e.removeListener("finish", g),
                        b()
                    }
                    function g() {
                        c("onfinish"),
                        e.removeListener("close", p),
                        b()
                    }
                    function b() {
                        c("unpipe"),
                        n.unpipe(e)
                    }
                    return n.on("data", f),
                    function(e, t, r) {
                        if ("function" == typeof e.prependListener)
                            return e.prependListener(t, r);
                        e._events && e._events[t] ? Array.isArray(e._events[t]) ? e._events[t].unshift(r) : e._events[t] = [r, e._events[t]] : e.on(t, r)
                    }(e, "error", h),
                    e.once("close", p),
                    e.once("finish", g),
                    e.emit("pipe", n),
                    i.flowing || (c("pipe resume"),
                    n.resume()),
                    e
                }
                ,
                R.prototype.unpipe = function(e) {
                    var t = this._readableState
                      , r = {
                        hasUnpiped: !1
                    };
                    if (0 === t.pipesCount)
                        return this;
                    if (1 === t.pipesCount)
                        return e && e !== t.pipes || (e || (e = t.pipes),
                        t.pipes = null,
                        t.pipesCount = 0,
                        t.flowing = !1,
                        e && e.emit("unpipe", this, r)),
                        this;
                    if (!e) {
                        var n = t.pipes
                          , i = t.pipesCount;
                        t.pipes = null,
                        t.pipesCount = 0,
                        t.flowing = !1;
                        for (var o = 0; o < i; o++)
                            n[o].emit("unpipe", this, {
                                hasUnpiped: !1
                            });
                        return this
                    }
                    var s = F(t.pipes, e);
                    return -1 === s || (t.pipes.splice(s, 1),
                    t.pipesCount -= 1,
                    1 === t.pipesCount && (t.pipes = t.pipes[0]),
                    e.emit("unpipe", this, r)),
                    this
                }
                ,
                R.prototype.on = function(e, t) {
                    var n = s.prototype.on.call(this, e, t)
                      , i = this._readableState;
                    return "data" === e ? (i.readableListening = this.listenerCount("readable") > 0,
                    !1 !== i.flowing && this.resume()) : "readable" === e && (i.endEmitted || i.readableListening || (i.readableListening = i.needReadable = !0,
                    i.flowing = !1,
                    i.emittedReadable = !1,
                    c("on readable", i.length, i.reading),
                    i.length ? x(this) : i.reading || r.nextTick(L, this))),
                    n
                }
                ,
                R.prototype.addListener = R.prototype.on,
                R.prototype.removeListener = function(e, t) {
                    var n = s.prototype.removeListener.call(this, e, t);
                    return "readable" === e && r.nextTick(P, this),
                    n
                }
                ,
                R.prototype.removeAllListeners = function(e) {
                    var t = s.prototype.removeAllListeners.apply(this, arguments);
                    return "readable" !== e && void 0 !== e || r.nextTick(P, this),
                    t
                }
                ,
                R.prototype.resume = function() {
                    var e = this._readableState;
                    return e.flowing || (c("resume"),
                    e.flowing = !e.readableListening,
                    function(e, t) {
                        t.resumeScheduled || (t.resumeScheduled = !0,
                        r.nextTick(N, e, t))
                    }(this, e)),
                    e.paused = !1,
                    this
                }
                ,
                R.prototype.pause = function() {
                    return c("call pause flowing=%j", this._readableState.flowing),
                    !1 !== this._readableState.flowing && (c("pause"),
                    this._readableState.flowing = !1,
                    this.emit("pause")),
                    this._readableState.paused = !0,
                    this
                }
                ,
                R.prototype.wrap = function(e) {
                    var t = this
                      , r = this._readableState
                      , n = !1;
                    for (var i in e.on("end", (function() {
                        if (c("wrapped end"),
                        r.decoder && !r.ended) {
                            var e = r.decoder.end();
                            e && e.length && t.push(e)
                        }
                        t.push(null)
                    }
                    )),
                    e.on("data", (function(i) {
                        (c("wrapped data"),
                        r.decoder && (i = r.decoder.write(i)),
                        r.objectMode && null == i) || (r.objectMode || i && i.length) && (t.push(i) || (n = !0,
                        e.pause()))
                    }
                    )),
                    e)
                        void 0 === this[i] && "function" == typeof e[i] && (this[i] = function(t) {
                            return function() {
                                return e[t].apply(e, arguments)
                            }
                        }(i));
                    for (var o = 0; o < S.length; o++)
                        e.on(S[o], this.emit.bind(this, S[o]));
                    return this._read = function(t) {
                        c("wrapped _read", t),
                        n && (n = !1,
                        e.resume())
                    }
                    ,
                    this
                }
                ,
                "function" == typeof Symbol && (R.prototype[Symbol.asyncIterator] = function() {
                    return void 0 === f && (f = e("./internal/streams/async_iterator")),
                    f(this)
                }
                ),
                Object.defineProperty(R.prototype, "readableHighWaterMark", {
                    enumerable: !1,
                    get: function() {
                        return this._readableState.highWaterMark
                    }
                }),
                Object.defineProperty(R.prototype, "readableBuffer", {
                    enumerable: !1,
                    get: function() {
                        return this._readableState && this._readableState.buffer
                    }
                }),
                Object.defineProperty(R.prototype, "readableFlowing", {
                    enumerable: !1,
                    get: function() {
                        return this._readableState.flowing
                    },
                    set: function(e) {
                        this._readableState && (this._readableState.flowing = e)
                    }
                }),
                R._fromList = B,
                Object.defineProperty(R.prototype, "readableLength", {
                    enumerable: !1,
                    get: function() {
                        return this._readableState.length
                    }
                }),
                "function" == typeof Symbol && (R.from = function(t, r) {
                    return void 0 === h && (h = e("./internal/streams/from")),
                    h(R, t, r)
                }
                )
            }
            ).call(this)
        }
        ).call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {
        "../errors": 27,
        "./_stream_duplex": 28,
        "./internal/streams/async_iterator": 33,
        "./internal/streams/buffer_list": 34,
        "./internal/streams/destroy": 35,
        "./internal/streams/from": 37,
        "./internal/streams/state": 39,
        "./internal/streams/stream": 40,
        _process: 144,
        buffer: 111,
        events: 115,
        inherits: 119,
        "string_decoder/": 191,
        util: 110
    }],
    31: [function(e, t, r) {
        arguments[4][9][0].apply(r, arguments)
    }
    , {
        "../errors": 27,
        "./_stream_duplex": 28,
        dup: 9,
        inherits: 119
    }],
    32: [function(e, t, r) {
        (function(r, n) {
            (function() {
                "use strict";
                function i(e) {
                    var t = this;
                    this.next = null,
                    this.entry = null,
                    this.finish = function() {
                        !function(e, t, r) {
                            var n = e.entry;
                            e.entry = null;
                            for (; n; ) {
                                var i = n.callback;
                                t.pendingcb--,
                                i(r),
                                n = n.next
                            }
                            t.corkedRequestsFree.next = e
                        }(t, e)
                    }
                }
                var o;
                t.exports = R,
                R.WritableState = M;
                var s = {
                    deprecate: e("util-deprecate")
                }
                  , a = e("./internal/streams/stream")
                  , u = e("buffer").Buffer
                  , c = (void 0 !== n ? n : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}).Uint8Array || function() {}
                ;
                var l, d = e("./internal/streams/destroy"), f = e("./internal/streams/state").getHighWaterMark, h = e("../errors").codes, p = h.ERR_INVALID_ARG_TYPE, g = h.ERR_METHOD_NOT_IMPLEMENTED, b = h.ERR_MULTIPLE_CALLBACK, m = h.ERR_STREAM_CANNOT_PIPE, y = h.ERR_STREAM_DESTROYED, v = h.ERR_STREAM_NULL_VALUES, w = h.ERR_STREAM_WRITE_AFTER_END, _ = h.ERR_UNKNOWN_ENCODING, E = d.errorOrDestroy;
                function S() {}
                function M(t, n, s) {
                    o = o || e("./_stream_duplex"),
                    t = t || {},
                    "boolean" != typeof s && (s = n instanceof o),
                    this.objectMode = !!t.objectMode,
                    s && (this.objectMode = this.objectMode || !!t.writableObjectMode),
                    this.highWaterMark = f(this, t, "writableHighWaterMark", s),
                    this.finalCalled = !1,
                    this.needDrain = !1,
                    this.ending = !1,
                    this.ended = !1,
                    this.finished = !1,
                    this.destroyed = !1;
                    var a = !1 === t.decodeStrings;
                    this.decodeStrings = !a,
                    this.defaultEncoding = t.defaultEncoding || "utf8",
                    this.length = 0,
                    this.writing = !1,
                    this.corked = 0,
                    this.sync = !0,
                    this.bufferProcessing = !1,
                    this.onwrite = function(e) {
                        !function(e, t) {
                            var n = e._writableState
                              , i = n.sync
                              , o = n.writecb;
                            if ("function" != typeof o)
                                throw new b;
                            if (function(e) {
                                e.writing = !1,
                                e.writecb = null,
                                e.length -= e.writelen,
                                e.writelen = 0
                            }(n),
                            t)
                                !function(e, t, n, i, o) {
                                    --t.pendingcb,
                                    n ? (r.nextTick(o, i),
                                    r.nextTick(O, e, t),
                                    e._writableState.errorEmitted = !0,
                                    E(e, i)) : (o(i),
                                    e._writableState.errorEmitted = !0,
                                    E(e, i),
                                    O(e, t))
                                }(e, n, i, t, o);
                            else {
                                var s = C(n) || e.destroyed;
                                s || n.corked || n.bufferProcessing || !n.bufferedRequest || k(e, n),
                                i ? r.nextTick(I, e, n, s, o) : I(e, n, s, o)
                            }
                        }(n, e)
                    }
                    ,
                    this.writecb = null,
                    this.writelen = 0,
                    this.bufferedRequest = null,
                    this.lastBufferedRequest = null,
                    this.pendingcb = 0,
                    this.prefinished = !1,
                    this.errorEmitted = !1,
                    this.emitClose = !1 !== t.emitClose,
                    this.autoDestroy = !!t.autoDestroy,
                    this.bufferedRequestCount = 0,
                    this.corkedRequestsFree = new i(this)
                }
                function R(t) {
                    var r = this instanceof (o = o || e("./_stream_duplex"));
                    if (!r && !l.call(R, this))
                        return new R(t);
                    this._writableState = new M(t,this,r),
                    this.writable = !0,
                    t && ("function" == typeof t.write && (this._write = t.write),
                    "function" == typeof t.writev && (this._writev = t.writev),
                    "function" == typeof t.destroy && (this._destroy = t.destroy),
                    "function" == typeof t.final && (this._final = t.final)),
                    a.call(this)
                }
                function j(e, t, r, n, i, o, s) {
                    t.writelen = n,
                    t.writecb = s,
                    t.writing = !0,
                    t.sync = !0,
                    t.destroyed ? t.onwrite(new y("write")) : r ? e._writev(i, t.onwrite) : e._write(i, o, t.onwrite),
                    t.sync = !1
                }
                function I(e, t, r, n) {
                    r || function(e, t) {
                        0 === t.length && t.needDrain && (t.needDrain = !1,
                        e.emit("drain"))
                    }(e, t),
                    t.pendingcb--,
                    n(),
                    O(e, t)
                }
                function k(e, t) {
                    t.bufferProcessing = !0;
                    var r = t.bufferedRequest;
                    if (e._writev && r && r.next) {
                        var n = t.bufferedRequestCount
                          , o = new Array(n)
                          , s = t.corkedRequestsFree;
                        s.entry = r;
                        for (var a = 0, u = !0; r; )
                            o[a] = r,
                            r.isBuf || (u = !1),
                            r = r.next,
                            a += 1;
                        o.allBuffers = u,
                        j(e, t, !0, t.length, o, "", s.finish),
                        t.pendingcb++,
                        t.lastBufferedRequest = null,
                        s.next ? (t.corkedRequestsFree = s.next,
                        s.next = null) : t.corkedRequestsFree = new i(t),
                        t.bufferedRequestCount = 0
                    } else {
                        for (; r; ) {
                            var c = r.chunk
                              , l = r.encoding
                              , d = r.callback;
                            if (j(e, t, !1, t.objectMode ? 1 : c.length, c, l, d),
                            r = r.next,
                            t.bufferedRequestCount--,
                            t.writing)
                                break
                        }
                        null === r && (t.lastBufferedRequest = null)
                    }
                    t.bufferedRequest = r,
                    t.bufferProcessing = !1
                }
                function C(e) {
                    return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing
                }
                function x(e, t) {
                    e._final((function(r) {
                        t.pendingcb--,
                        r && E(e, r),
                        t.prefinished = !0,
                        e.emit("prefinish"),
                        O(e, t)
                    }
                    ))
                }
                function O(e, t) {
                    var n = C(t);
                    if (n && (function(e, t) {
                        t.prefinished || t.finalCalled || ("function" != typeof e._final || t.destroyed ? (t.prefinished = !0,
                        e.emit("prefinish")) : (t.pendingcb++,
                        t.finalCalled = !0,
                        r.nextTick(x, e, t)))
                    }(e, t),
                    0 === t.pendingcb && (t.finished = !0,
                    e.emit("finish"),
                    t.autoDestroy))) {
                        var i = e._readableState;
                        (!i || i.autoDestroy && i.endEmitted) && e.destroy()
                    }
                    return n
                }
                e("inherits")(R, a),
                M.prototype.getBuffer = function() {
                    for (var e = this.bufferedRequest, t = []; e; )
                        t.push(e),
                        e = e.next;
                    return t
                }
                ,
                function() {
                    try {
                        Object.defineProperty(M.prototype, "buffer", {
                            get: s.deprecate((function() {
                                return this.getBuffer()
                            }
                            ), "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                        })
                    } catch (e) {}
                }(),
                "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (l = Function.prototype[Symbol.hasInstance],
                Object.defineProperty(R, Symbol.hasInstance, {
                    value: function(e) {
                        return !!l.call(this, e) || this === R && (e && e._writableState instanceof M)
                    }
                })) : l = function(e) {
                    return e instanceof this
                }
                ,
                R.prototype.pipe = function() {
                    E(this, new m)
                }
                ,
                R.prototype.write = function(e, t, n) {
                    var i, o = this._writableState, s = !1, a = !o.objectMode && (i = e,
                    u.isBuffer(i) || i instanceof c);
                    return a && !u.isBuffer(e) && (e = function(e) {
                        return u.from(e)
                    }(e)),
                    "function" == typeof t && (n = t,
                    t = null),
                    a ? t = "buffer" : t || (t = o.defaultEncoding),
                    "function" != typeof n && (n = S),
                    o.ending ? function(e, t) {
                        var n = new w;
                        E(e, n),
                        r.nextTick(t, n)
                    }(this, n) : (a || function(e, t, n, i) {
                        var o;
                        return null === n ? o = new v : "string" == typeof n || t.objectMode || (o = new p("chunk",["string", "Buffer"],n)),
                        !o || (E(e, o),
                        r.nextTick(i, o),
                        !1)
                    }(this, o, e, n)) && (o.pendingcb++,
                    s = function(e, t, r, n, i, o) {
                        if (!r) {
                            var s = function(e, t, r) {
                                e.objectMode || !1 === e.decodeStrings || "string" != typeof t || (t = u.from(t, r));
                                return t
                            }(t, n, i);
                            n !== s && (r = !0,
                            i = "buffer",
                            n = s)
                        }
                        var a = t.objectMode ? 1 : n.length;
                        t.length += a;
                        var c = t.length < t.highWaterMark;
                        c || (t.needDrain = !0);
                        if (t.writing || t.corked) {
                            var l = t.lastBufferedRequest;
                            t.lastBufferedRequest = {
                                chunk: n,
                                encoding: i,
                                isBuf: r,
                                callback: o,
                                next: null
                            },
                            l ? l.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest,
                            t.bufferedRequestCount += 1
                        } else
                            j(e, t, !1, a, n, i, o);
                        return c
                    }(this, o, a, e, t, n)),
                    s
                }
                ,
                R.prototype.cork = function() {
                    this._writableState.corked++
                }
                ,
                R.prototype.uncork = function() {
                    var e = this._writableState;
                    e.corked && (e.corked--,
                    e.writing || e.corked || e.bufferProcessing || !e.bufferedRequest || k(this, e))
                }
                ,
                R.prototype.setDefaultEncoding = function(e) {
                    if ("string" == typeof e && (e = e.toLowerCase()),
                    !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1))
                        throw new _(e);
                    return this._writableState.defaultEncoding = e,
                    this
                }
                ,
                Object.defineProperty(R.prototype, "writableBuffer", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState && this._writableState.getBuffer()
                    }
                }),
                Object.defineProperty(R.prototype, "writableHighWaterMark", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState.highWaterMark
                    }
                }),
                R.prototype._write = function(e, t, r) {
                    r(new g("_write()"))
                }
                ,
                R.prototype._writev = null,
                R.prototype.end = function(e, t, n) {
                    var i = this._writableState;
                    return "function" == typeof e ? (n = e,
                    e = null,
                    t = null) : "function" == typeof t && (n = t,
                    t = null),
                    null != e && this.write(e, t),
                    i.corked && (i.corked = 1,
                    this.uncork()),
                    i.ending || function(e, t, n) {
                        t.ending = !0,
                        O(e, t),
                        n && (t.finished ? r.nextTick(n) : e.once("finish", n));
                        t.ended = !0,
                        e.writable = !1
                    }(this, i, n),
                    this
                }
                ,
                Object.defineProperty(R.prototype, "writableLength", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState.length
                    }
                }),
                Object.defineProperty(R.prototype, "destroyed", {
                    enumerable: !1,
                    get: function() {
                        return void 0 !== this._writableState && this._writableState.destroyed
                    },
                    set: function(e) {
                        this._writableState && (this._writableState.destroyed = e)
                    }
                }),
                R.prototype.destroy = d.destroy,
                R.prototype._undestroy = d.undestroy,
                R.prototype._destroy = function(e, t) {
                    t(e)
                }
            }
            ).call(this)
        }
        ).call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {
        "../errors": 27,
        "./_stream_duplex": 28,
        "./internal/streams/destroy": 35,
        "./internal/streams/state": 39,
        "./internal/streams/stream": 40,
        _process: 144,
        buffer: 111,
        inherits: 119,
        "util-deprecate": 193
    }],
    33: [function(e, t, r) {
        (function(r) {
            (function() {
                "use strict";
                var n;
                function i(e, t, r) {
                    return (t = function(e) {
                        var t = function(e, t) {
                            if ("object" != typeof e || null === e)
                                return e;
                            var r = e[Symbol.toPrimitive];
                            if (void 0 !== r) {
                                var n = r.call(e, t || "default");
                                if ("object" != typeof n)
                                    return n;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return ("string" === t ? String : Number)(e)
                        }(e, "string");
                        return "symbol" == typeof t ? t : String(t)
                    }(t))in e ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = r,
                    e
                }
                var o = e("./end-of-stream")
                  , s = Symbol("lastResolve")
                  , a = Symbol("lastReject")
                  , u = Symbol("error")
                  , c = Symbol("ended")
                  , l = Symbol("lastPromise")
                  , d = Symbol("handlePromise")
                  , f = Symbol("stream");
                function h(e, t) {
                    return {
                        value: e,
                        done: t
                    }
                }
                function p(e) {
                    var t = e[s];
                    if (null !== t) {
                        var r = e[f].read();
                        null !== r && (e[l] = null,
                        e[s] = null,
                        e[a] = null,
                        t(h(r, !1)))
                    }
                }
                function g(e) {
                    r.nextTick(p, e)
                }
                var b = Object.getPrototypeOf((function() {}
                ))
                  , m = Object.setPrototypeOf((i(n = {
                    get stream() {
                        return this[f]
                    },
                    next: function() {
                        var e = this
                          , t = this[u];
                        if (null !== t)
                            return Promise.reject(t);
                        if (this[c])
                            return Promise.resolve(h(void 0, !0));
                        if (this[f].destroyed)
                            return new Promise((function(t, n) {
                                r.nextTick((function() {
                                    e[u] ? n(e[u]) : t(h(void 0, !0))
                                }
                                ))
                            }
                            ));
                        var n, i = this[l];
                        if (i)
                            n = new Promise(function(e, t) {
                                return function(r, n) {
                                    e.then((function() {
                                        t[c] ? r(h(void 0, !0)) : t[d](r, n)
                                    }
                                    ), n)
                                }
                            }(i, this));
                        else {
                            var o = this[f].read();
                            if (null !== o)
                                return Promise.resolve(h(o, !1));
                            n = new Promise(this[d])
                        }
                        return this[l] = n,
                        n
                    }
                }, Symbol.asyncIterator, (function() {
                    return this
                }
                )),
                i(n, "return", (function() {
                    var e = this;
                    return new Promise((function(t, r) {
                        e[f].destroy(null, (function(e) {
                            e ? r(e) : t(h(void 0, !0))
                        }
                        ))
                    }
                    ))
                }
                )),
                n), b);
                t.exports = function(e) {
                    var t, r = Object.create(m, (i(t = {}, f, {
                        value: e,
                        writable: !0
                    }),
                    i(t, s, {
                        value: null,
                        writable: !0
                    }),
                    i(t, a, {
                        value: null,
                        writable: !0
                    }),
                    i(t, u, {
                        value: null,
                        writable: !0
                    }),
                    i(t, c, {
                        value: e._readableState.endEmitted,
                        writable: !0
                    }),
                    i(t, d, {
                        value: function(e, t) {
                            var n = r[f].read();
                            n ? (r[l] = null,
                            r[s] = null,
                            r[a] = null,
                            e(h(n, !1))) : (r[s] = e,
                            r[a] = t)
                        },
                        writable: !0
                    }),
                    t));
                    return r[l] = null,
                    o(e, (function(e) {
                        if (e && "ERR_STREAM_PREMATURE_CLOSE" !== e.code) {
                            var t = r[a];
                            return null !== t && (r[l] = null,
                            r[s] = null,
                            r[a] = null,
                            t(e)),
                            void (r[u] = e)
                        }
                        var n = r[s];
                        null !== n && (r[l] = null,
                        r[s] = null,
                        r[a] = null,
                        n(h(void 0, !0))),
                        r[c] = !0
                    }
                    )),
                    e.on("readable", g.bind(null, r)),
                    r
                }
            }
            ).call(this)
        }
        ).call(this, e("_process"))
    }
    , {
        "./end-of-stream": 36,
        _process: 144
    }],
    34: [function(e, t, r) {
        arguments[4][12][0].apply(r, arguments)
    }
    , {
        buffer: 111,
        dup: 12,
        util: 110
    }],
    35: [function(e, t, r) {
        (function(e) {
            (function() {
                "use strict";
                function r(e, t) {
                    i(e, t),
                    n(e)
                }
                function n(e) {
                    e._writableState && !e._writableState.emitClose || e._readableState && !e._readableState.emitClose || e.emit("close")
                }
                function i(e, t) {
                    e.emit("error", t)
                }
                t.exports = {
                    destroy: function(t, o) {
                        var s = this
                          , a = this._readableState && this._readableState.destroyed
                          , u = this._writableState && this._writableState.destroyed;
                        return a || u ? (o ? o(t) : t && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0,
                        e.nextTick(i, this, t)) : e.nextTick(i, this, t)),
                        this) : (this._readableState && (this._readableState.destroyed = !0),
                        this._writableState && (this._writableState.destroyed = !0),
                        this._destroy(t || null, (function(t) {
                            !o && t ? s._writableState ? s._writableState.errorEmitted ? e.nextTick(n, s) : (s._writableState.errorEmitted = !0,
                            e.nextTick(r, s, t)) : e.nextTick(r, s, t) : o ? (e.nextTick(n, s),
                            o(t)) : e.nextTick(n, s)
                        }
                        )),
                        this)
                    },
                    undestroy: function() {
                        this._readableState && (this._readableState.destroyed = !1,
                        this._readableState.reading = !1,
                        this._readableState.ended = !1,
                        this._readableState.endEmitted = !1),
                        this._writableState && (this._writableState.destroyed = !1,
                        this._writableState.ended = !1,
                        this._writableState.ending = !1,
                        this._writableState.finalCalled = !1,
                        this._writableState.prefinished = !1,
                        this._writableState.finished = !1,
                        this._writableState.errorEmitted = !1)
                    },
                    errorOrDestroy: function(e, t) {
                        var r = e._readableState
                          , n = e._writableState;
                        r && r.autoDestroy || n && n.autoDestroy ? e.destroy(t) : e.emit("error", t)
                    }
                }
            }
            ).call(this)
        }
        ).call(this, e("_process"))
    }
    , {
        _process: 144
    }],
    36: [function(e, t, r) {
        arguments[4][14][0].apply(r, arguments)
    }
    , {
        "../../../errors": 27,
        dup: 14
    }],
    37: [function(e, t, r) {
        arguments[4][15][0].apply(r, arguments)
    }
    , {
        dup: 15
    }],
    38: [function(e, t, r) {
        arguments[4][16][0].apply(r, arguments)
    }
    , {
        "../../../errors": 27,
        "./end-of-stream": 36,
        dup: 16
    }],
    39: [function(e, t, r) {
        arguments[4][17][0].apply(r, arguments)
    }
    , {
        "../../../errors": 27,
        dup: 17
    }],
    40: [function(e, t, r) {
        arguments[4][18][0].apply(r, arguments)
    }
    , {
        dup: 18,
        events: 115
    }],
    41: [function(e, t, r) {
        arguments[4][19][0].apply(r, arguments)
    }
    , {
        "./lib/_stream_duplex.js": 28,
        "./lib/_stream_passthrough.js": 29,
        "./lib/_stream_readable.js": 30,
        "./lib/_stream_transform.js": 31,
        "./lib/_stream_writable.js": 32,
        "./lib/internal/streams/end-of-stream.js": 36,
        "./lib/internal/streams/pipeline.js": 38,
        dup: 19
    }],
    42: [function(e, t, r) {
        "use strict";
        var n, i, o = this && this.__classPrivateFieldSet || function(e, t, r, n, i) {
            if ("m" === n)
                throw new TypeError("Private method is not writable");
            if ("a" === n && !i)
                throw new TypeError("Private accessor was defined without a setter");
            if ("function" == typeof t ? e !== t || !i : !t.has(e))
                throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r),
            r
        }
        , s = this && this.__classPrivateFieldGet || function(e, t, r, n) {
            if ("a" === r && !n)
                throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !n : !t.has(e))
                throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
        }
        , a = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.BaseProvider = void 0;
        const u = e("@metamask/json-rpc-engine")
          , c = e("@metamask/rpc-errors")
          , l = a(e("@metamask/safe-event-emitter"))
          , d = a(e("fast-deep-equal"))
          , f = a(e("./messages"))
          , h = e("./utils");
        class p extends l.default {
            constructor({logger: e=console, maxEventListeners: t=100, rpcMiddleware: r=[]}={}) {
                super(),
                n.set(this, void 0),
                i.set(this, void 0),
                this._log = e,
                this.setMaxListeners(t),
                this._state = {
                    ...p._defaultState
                },
                o(this, i, null, "f"),
                o(this, n, null, "f"),
                this._handleAccountsChanged = this._handleAccountsChanged.bind(this),
                this._handleConnect = this._handleConnect.bind(this),
                this._handleChainChanged = this._handleChainChanged.bind(this),
                this._handleDisconnect = this._handleDisconnect.bind(this),
                this._handleUnlockStateChanged = this._handleUnlockStateChanged.bind(this),
                this._rpcRequest = this._rpcRequest.bind(this),
                this.request = this.request.bind(this);
                const s = new u.JsonRpcEngine;
                r.forEach((e=>s.push(e))),
                this._rpcEngine = s
            }
            get chainId() {
                return s(this, n, "f")
            }
            get selectedAddress() {
                return s(this, i, "f")
            }
            isConnected() {
                return this._state.isConnected
            }
            async request(e) {
                if (!e || "object" != typeof e || Array.isArray(e))
                    throw c.rpcErrors.invalidRequest({
                        message: f.default.errors.invalidRequestArgs(),
                        data: e
                    });
                const {method: t, params: r} = e;
                if ("string" != typeof t || 0 === t.length)
                    throw c.rpcErrors.invalidRequest({
                        message: f.default.errors.invalidRequestMethod(),
                        data: e
                    });
                if (void 0 !== r && !Array.isArray(r) && ("object" != typeof r || null === r))
                    throw c.rpcErrors.invalidRequest({
                        message: f.default.errors.invalidRequestParams(),
                        data: e
                    });
                const n = null == r ? {
                    method: t
                } : {
                    method: t,
                    params: r
                };
                return new Promise(((e,t)=>{
                    this._rpcRequest(n, (0,
                    h.getRpcPromiseCallback)(e, t))
                }
                ))
            }
            _initializeState(e) {
                if (this._state.initialized)
                    throw new Error("Provider already initialized.");
                if (e) {
                    const {accounts: t, chainId: r, isUnlocked: n, networkVersion: i} = e;
                    this._handleConnect(r),
                    this._handleChainChanged({
                        chainId: r,
                        networkVersion: i
                    }),
                    this._handleUnlockStateChanged({
                        accounts: t,
                        isUnlocked: n
                    }),
                    this._handleAccountsChanged(t)
                }
                this._state.initialized = !0,
                this.emit("_initialized")
            }
            _rpcRequest(e, t) {
                let r = t;
                return Array.isArray(e) || (e.jsonrpc || (e.jsonrpc = "2.0"),
                "eth_accounts" !== e.method && "eth_requestAccounts" !== e.method || (r = (r,n)=>{
                    this._handleAccountsChanged(n.result ?? [], "eth_accounts" === e.method),
                    t(r, n)
                }
                )),
                this._rpcEngine.handle(e, r)
            }
            _handleConnect(e) {
                this._state.isConnected || (this._state.isConnected = !0,
                this.emit("connect", {
                    chainId: e
                }),
                this._log.debug(f.default.info.connected(e)))
            }
            _handleDisconnect(e, t) {
                if (this._state.isConnected || !this._state.isPermanentlyDisconnected && !e) {
                    let r;
                    this._state.isConnected = !1,
                    e ? (r = new c.JsonRpcError(1013,t ?? f.default.errors.disconnected()),
                    this._log.debug(r)) : (r = new c.JsonRpcError(1011,t ?? f.default.errors.permanentlyDisconnected()),
                    this._log.error(r),
                    o(this, n, null, "f"),
                    this._state.accounts = null,
                    o(this, i, null, "f"),
                    this._state.isUnlocked = !1,
                    this._state.isPermanentlyDisconnected = !0),
                    this.emit("disconnect", r)
                }
            }
            _handleChainChanged({chainId: e}={}) {
                (0,
                h.isValidChainId)(e) ? (this._handleConnect(e),
                e !== s(this, n, "f") && (o(this, n, e, "f"),
                this._state.initialized && this.emit("chainChanged", s(this, n, "f")))) : this._log.error(f.default.errors.invalidNetworkParams(), {
                    chainId: e
                })
            }
            _handleAccountsChanged(e, t=!1) {
                let r = e;
                Array.isArray(e) || (this._log.error("MetaMask: Received invalid accounts parameter. Please report this bug.", e),
                r = []);
                for (const t of e)
                    if ("string" != typeof t) {
                        this._log.error("MetaMask: Received non-string account. Please report this bug.", e),
                        r = [];
                        break
                    }
                if (!(0,
                d.default)(this._state.accounts, r) && (t && null !== this._state.accounts && this._log.error("MetaMask: 'eth_accounts' unexpectedly updated accounts. Please report this bug.", r),
                this._state.accounts = r,
                s(this, i, "f") !== r[0] && o(this, i, r[0] || null, "f"),
                this._state.initialized)) {
                    const e = [...r];
                    this.emit("accountsChanged", e)
                }
            }
            _handleUnlockStateChanged({accounts: e, isUnlocked: t}={}) {
                "boolean" == typeof t ? t !== this._state.isUnlocked && (this._state.isUnlocked = t,
                this._handleAccountsChanged(e ?? [])) : this._log.error("MetaMask: Received invalid isUnlocked parameter. Please report this bug.")
            }
        }
        r.BaseProvider = p,
        n = new WeakMap,
        i = new WeakMap,
        p._defaultState = {
            accounts: null,
            isConnected: !1,
            isUnlocked: !1,
            initialized: !1,
            isPermanentlyDisconnected: !1
        }
    }
    , {
        "./messages": 48,
        "./utils": 52,
        "@metamask/json-rpc-engine": 58,
        "@metamask/rpc-errors": 79,
        "@metamask/safe-event-emitter": 80,
        "fast-deep-equal": 116
    }],
    43: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.announceProvider = r.requestProvider = void 0;
        const n = e("@metamask/utils");
        var i;
        !function(e) {
            e.Announce = "eip6963:announceProvider",
            e.Request = "eip6963:requestProvider"
        }(i || (i = {}));
        const o = /(?:^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}$)|(?:^0{8}-0{4}-0{4}-0{4}-0{12}$)/u
          , s = /(?=^.{4,253}$)(^((?!-)[a-zA-Z0-9-]{0,62}[a-zA-Z0-9]\.)+[a-zA-Z]{2,63}$)/u;
        function a(e) {
            if (!(0,
            n.isObject)(e) || !(0,
            n.isObject)(e.info) || !(0,
            n.isObject)(e.provider))
                return !1;
            const {info: t} = e;
            return "string" == typeof t.uuid && o.test(t.uuid) && "string" == typeof t.name && Boolean(t.name) && "string" == typeof t.icon && t.icon.startsWith("data:image") && "string" == typeof t.rdns && s.test(t.rdns)
        }
        function u(e) {
            throw new Error(`${e} See https://eips.ethereum.org/EIPS/eip-6963 for requirements.`)
        }
        r.requestProvider = function(e) {
            window.addEventListener(i.Announce, (t=>{
                (function(e) {
                    return e instanceof CustomEvent && e.type === i.Announce && Object.isFrozen(e.detail) && a(e.detail)
                }
                )(t) || u(`Invalid EIP-6963 AnnounceProviderEvent object received from ${i.Announce} event.`),
                e(t.detail)
            }
            )),
            window.dispatchEvent(new Event(i.Request))
        }
        ,
        r.announceProvider = function(e) {
            a(e) || u("Invalid EIP-6963 ProviderDetail object.");
            const {info: t, provider: r} = e
              , n = ()=>window.dispatchEvent(new CustomEvent(i.Announce,{
                detail: Object.freeze({
                    info: {
                        ...t
                    },
                    provider: r
                })
            }));
            n(),
            window.addEventListener(i.Request, (e=>{
                (function(e) {
                    return e instanceof Event && e.type === i.Request
                }
                )(e) || u(`Invalid EIP-6963 RequestProviderEvent object received from ${i.Request} event.`),
                n()
            }
            ))
        }
    }
    , {
        "@metamask/utils": 102
    }],
    44: [function(e, t, r) {
        "use strict";
        var n, i = this && this.__classPrivateFieldSet || function(e, t, r, n, i) {
            if ("m" === n)
                throw new TypeError("Private method is not writable");
            if ("a" === n && !i)
                throw new TypeError("Private accessor was defined without a setter");
            if ("function" == typeof t ? e !== t || !i : !t.has(e))
                throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r),
            r
        }
        , o = this && this.__classPrivateFieldGet || function(e, t, r, n) {
            if ("a" === r && !n)
                throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !n : !t.has(e))
                throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
        }
        , s = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.MetaMaskInpageProvider = r.MetaMaskInpageProviderStreamName = void 0;
        const a = e("@metamask/rpc-errors")
          , u = s(e("./messages"))
          , c = e("./siteMetadata")
          , l = e("./StreamProvider")
          , d = e("./utils");
        r.MetaMaskInpageProviderStreamName = "metamask-provider";
        class f extends l.AbstractStreamProvider {
            constructor(e, {jsonRpcStreamName: t=r.MetaMaskInpageProviderStreamName, logger: o=console, maxEventListeners: s=100, shouldSendMetadata: a}={}) {
                if (super(e, {
                    jsonRpcStreamName: t,
                    logger: o,
                    maxEventListeners: s,
                    rpcMiddleware: (0,
                    d.getDefaultExternalMiddleware)(o)
                }),
                this._sentWarnings = {
                    chainId: !1,
                    networkVersion: !1,
                    selectedAddress: !1,
                    enable: !1,
                    experimentalMethods: !1,
                    send: !1,
                    events: {
                        close: !1,
                        data: !1,
                        networkChanged: !1,
                        notification: !1
                    }
                },
                n.set(this, void 0),
                this._initializeStateAsync(),
                i(this, n, null, "f"),
                this.isMetaMask = !0,
                this._sendSync = this._sendSync.bind(this),
                this.enable = this.enable.bind(this),
                this.send = this.send.bind(this),
                this.sendAsync = this.sendAsync.bind(this),
                this._warnOfDeprecation = this._warnOfDeprecation.bind(this),
                this._metamask = this._getExperimentalApi(),
                this._jsonRpcConnection.events.on("notification", (e=>{
                    const {method: t} = e;
                    d.EMITTED_NOTIFICATIONS.includes(t) && (this.emit("data", e),
                    this.emit("notification", e.params.result))
                }
                )),
                a)
                    if ("complete" === document.readyState)
                        (0,
                        c.sendSiteMetadata)(this._rpcEngine, this._log);
                    else {
                        const e = ()=>{
                            (0,
                            c.sendSiteMetadata)(this._rpcEngine, this._log),
                            window.removeEventListener("DOMContentLoaded", e)
                        }
                        ;
                        window.addEventListener("DOMContentLoaded", e)
                    }
            }
            get chainId() {
                return this._sentWarnings.chainId || (this._log.warn(u.default.warnings.chainIdDeprecation),
                this._sentWarnings.chainId = !0),
                super.chainId
            }
            get networkVersion() {
                return this._sentWarnings.networkVersion || (this._log.warn(u.default.warnings.networkVersionDeprecation),
                this._sentWarnings.networkVersion = !0),
                o(this, n, "f")
            }
            get selectedAddress() {
                return this._sentWarnings.selectedAddress || (this._log.warn(u.default.warnings.selectedAddressDeprecation),
                this._sentWarnings.selectedAddress = !0),
                super.selectedAddress
            }
            sendAsync(e, t) {
                this._rpcRequest(e, t)
            }
            addListener(e, t) {
                return this._warnOfDeprecation(e),
                super.addListener(e, t)
            }
            on(e, t) {
                return this._warnOfDeprecation(e),
                super.on(e, t)
            }
            once(e, t) {
                return this._warnOfDeprecation(e),
                super.once(e, t)
            }
            prependListener(e, t) {
                return this._warnOfDeprecation(e),
                super.prependListener(e, t)
            }
            prependOnceListener(e, t) {
                return this._warnOfDeprecation(e),
                super.prependOnceListener(e, t)
            }
            _handleDisconnect(e, t) {
                super._handleDisconnect(e, t),
                o(this, n, "f") && !e && i(this, n, null, "f")
            }
            _warnOfDeprecation(e) {
                !1 === this._sentWarnings?.events[e] && (this._log.warn(u.default.warnings.events[e]),
                this._sentWarnings.events[e] = !0)
            }
            async enable() {
                return this._sentWarnings.enable || (this._log.warn(u.default.warnings.enableDeprecation),
                this._sentWarnings.enable = !0),
                new Promise(((e,t)=>{
                    try {
                        this._rpcRequest({
                            method: "eth_requestAccounts",
                            params: []
                        }, (0,
                        d.getRpcPromiseCallback)(e, t))
                    } catch (e) {
                        t(e)
                    }
                }
                ))
            }
            send(e, t) {
                return this._sentWarnings.send || (this._log.warn(u.default.warnings.sendDeprecation),
                this._sentWarnings.send = !0),
                "string" != typeof e || t && !Array.isArray(t) ? e && "object" == typeof e && "function" == typeof t ? this._rpcRequest(e, t) : this._sendSync(e) : new Promise(((r,n)=>{
                    try {
                        this._rpcRequest({
                            method: e,
                            params: t
                        }, (0,
                        d.getRpcPromiseCallback)(r, n, !1))
                    } catch (e) {
                        n(e)
                    }
                }
                ))
            }
            _sendSync(e) {
                let t;
                switch (e.method) {
                case "eth_accounts":
                    t = this.selectedAddress ? [this.selectedAddress] : [];
                    break;
                case "eth_coinbase":
                    t = this.selectedAddress ?? null;
                    break;
                case "eth_uninstallFilter":
                    this._rpcRequest(e, d.NOOP),
                    t = !0;
                    break;
                case "net_version":
                    t = o(this, n, "f") ?? null;
                    break;
                default:
                    throw new Error(u.default.errors.unsupportedSync(e.method))
                }
                return {
                    id: e.id,
                    jsonrpc: e.jsonrpc,
                    result: t
                }
            }
            _getExperimentalApi() {
                return new Proxy({
                    isUnlocked: async()=>(this._state.initialized || await new Promise((e=>{
                        this.on("_initialized", (()=>e()))
                    }
                    )),
                    this._state.isUnlocked),
                    requestBatch: async e=>{
                        if (!Array.isArray(e))
                            throw a.rpcErrors.invalidRequest({
                                message: "Batch requests must be made with an array of request objects.",
                                data: e
                            });
                        return new Promise(((t,r)=>{
                            this._rpcRequest(e, (0,
                            d.getRpcPromiseCallback)(t, r))
                        }
                        ))
                    }
                },{
                    get: (e,t,...r)=>(this._sentWarnings.experimentalMethods || (this._log.warn(u.default.warnings.experimentalMethods),
                    this._sentWarnings.experimentalMethods = !0),
                    Reflect.get(e, t, ...r))
                })
            }
            _handleChainChanged({chainId: e, networkVersion: t}={}) {
                super._handleChainChanged({
                    chainId: e,
                    networkVersion: t
                }),
                this._state.isConnected && t !== o(this, n, "f") && (i(this, n, t, "f"),
                this._state.initialized && this.emit("networkChanged", o(this, n, "f")))
            }
        }
        r.MetaMaskInpageProvider = f,
        n = new WeakMap
    }
    , {
        "./StreamProvider": 45,
        "./messages": 48,
        "./siteMetadata": 51,
        "./utils": 52,
        "@metamask/rpc-errors": 79
    }],
    45: [function(e, t, r) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.StreamProvider = r.AbstractStreamProvider = void 0;
        const i = n(e("@metamask/object-multiplex"))
          , o = e("is-stream")
          , s = e("json-rpc-middleware-stream")
          , a = e("readable-stream")
          , u = e("./BaseProvider")
          , c = n(e("./messages"))
          , l = e("./utils");
        class d extends u.BaseProvider {
            constructor(e, {jsonRpcStreamName: t, logger: r=console, maxEventListeners: n=100, rpcMiddleware: u=[]}) {
                if (super({
                    logger: r,
                    maxEventListeners: n,
                    rpcMiddleware: u
                }),
                !(0,
                o.duplex)(e))
                    throw new Error(c.default.errors.invalidDuplexStream());
                this._handleStreamDisconnect = this._handleStreamDisconnect.bind(this);
                const d = new i.default;
                (0,
                a.pipeline)(e, d, e, this._handleStreamDisconnect.bind(this, "MetaMask")),
                this._jsonRpcConnection = (0,
                s.createStreamMiddleware)({
                    retryOnMessage: "METAMASK_EXTENSION_CONNECT_CAN_RETRY"
                }),
                (0,
                a.pipeline)(this._jsonRpcConnection.stream, d.createStream(t), this._jsonRpcConnection.stream, this._handleStreamDisconnect.bind(this, "MetaMask RpcProvider")),
                this._rpcEngine.push(this._jsonRpcConnection.middleware),
                this._jsonRpcConnection.events.on("notification", (t=>{
                    const {method: r, params: n} = t;
                    "metamask_accountsChanged" === r ? this._handleAccountsChanged(n) : "metamask_unlockStateChanged" === r ? this._handleUnlockStateChanged(n) : "metamask_chainChanged" === r ? this._handleChainChanged(n) : l.EMITTED_NOTIFICATIONS.includes(r) ? this.emit("message", {
                        type: r,
                        data: n
                    }) : "METAMASK_STREAM_FAILURE" === r && e.destroy(new Error(c.default.errors.permanentlyDisconnected()))
                }
                ))
            }
            async _initializeStateAsync() {
                let e;
                try {
                    e = await this.request({
                        method: "metamask_getProviderState"
                    })
                } catch (e) {
                    this._log.error("MetaMask: Failed to get initial state. Please report this bug.", e)
                }
                this._initializeState(e)
            }
            _handleStreamDisconnect(e, t) {
                let r = `MetaMask: Lost connection to "${e}".`;
                t?.stack && (r += `\n${t.stack}`),
                this._log.warn(r),
                this.listenerCount("error") > 0 && this.emit("error", r),
                this._handleDisconnect(!1, t ? t.message : void 0)
            }
            _handleChainChanged({chainId: e, networkVersion: t}={}) {
                (0,
                l.isValidChainId)(e) && (0,
                l.isValidNetworkVersion)(t) ? "loading" === t ? this._handleDisconnect(!0) : super._handleChainChanged({
                    chainId: e
                }) : this._log.error(c.default.errors.invalidNetworkParams(), {
                    chainId: e,
                    networkVersion: t
                })
            }
        }
        r.AbstractStreamProvider = d;
        r.StreamProvider = class extends d {
            async initialize() {
                return this._initializeStateAsync()
            }
        }
    }
    , {
        "./BaseProvider": 42,
        "./messages": 48,
        "./utils": 52,
        "@metamask/object-multiplex": 4,
        "is-stream": 120,
        "json-rpc-middleware-stream": 123,
        "readable-stream": 74
    }],
    46: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.ERC20 = r.ERC1155 = r.ERC721 = void 0,
        r.ERC721 = "ERC721",
        r.ERC1155 = "ERC1155",
        r.ERC20 = "ERC20"
    }
    , {}],
    47: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.setGlobalProvider = r.initializeProvider = void 0;
        const n = e("./EIP6963")
          , i = e("./MetaMaskInpageProvider")
          , o = e("./shimWeb3");
        function s(e) {
            window.ethereum = e,
            window.dispatchEvent(new Event("ethereum#initialized"))
        }
        r.initializeProvider = function({connectionStream: e, jsonRpcStreamName: t, logger: r=console, maxEventListeners: a=100, providerInfo: u, shouldSendMetadata: c=!0, shouldSetOnWindow: l=!0, shouldShimWeb3: d=!1}) {
            const f = new i.MetaMaskInpageProvider(e,{
                jsonRpcStreamName: t,
                logger: r,
                maxEventListeners: a,
                shouldSendMetadata: c
            })
              , h = new Proxy(f,{
                deleteProperty: ()=>!0,
                get: (e,t)=>e[t]
            });
            return u && (0,
            n.announceProvider)({
                info: u,
                provider: h
            }),
            l && s(h),
            d && (0,
            o.shimWeb3)(h, r),
            h
        }
        ,
        r.setGlobalProvider = s
    }
    , {
        "./EIP6963": 43,
        "./MetaMaskInpageProvider": 44,
        "./shimWeb3": 50
    }],
    48: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        const n = {
            errors: {
                disconnected: ()=>"MetaMask: Disconnected from chain. Attempting to connect.",
                permanentlyDisconnected: ()=>"MetaMask: Disconnected from MetaMask background. Page reload required.",
                sendSiteMetadata: ()=>"MetaMask: Failed to send site metadata. This is an internal error, please report this bug.",
                unsupportedSync: e=>`MetaMask: The MetaMask Ethereum provider does not support synchronous methods like ${e} without a callback parameter.`,
                invalidDuplexStream: ()=>"Must provide a Node.js-style duplex stream.",
                invalidNetworkParams: ()=>"MetaMask: Received invalid network parameters. Please report this bug.",
                invalidRequestArgs: ()=>"Expected a single, non-array, object argument.",
                invalidRequestMethod: ()=>"'args.method' must be a non-empty string.",
                invalidRequestParams: ()=>"'args.params' must be an object or array if provided.",
                invalidLoggerObject: ()=>"'args.logger' must be an object if provided.",
                invalidLoggerMethod: e=>`'args.logger' must include required method '${e}'.`
            },
            info: {
                connected: e=>`MetaMask: Connected to chain with ID "${e}".`
            },
            warnings: {
                chainIdDeprecation: "MetaMask: 'ethereum.chainId' is deprecated and may be removed in the future. Please use the 'eth_chainId' RPC method instead.\nFor more information, see: https://github.com/MetaMask/metamask-improvement-proposals/discussions/23",
                networkVersionDeprecation: "MetaMask: 'ethereum.networkVersion' is deprecated and may be removed in the future. Please use the 'net_version' RPC method instead.\nFor more information, see: https://github.com/MetaMask/metamask-improvement-proposals/discussions/23",
                selectedAddressDeprecation: "MetaMask: 'ethereum.selectedAddress' is deprecated and may be removed in the future. Please use the 'eth_accounts' RPC method instead.\nFor more information, see: https://github.com/MetaMask/metamask-improvement-proposals/discussions/23",
                enableDeprecation: "MetaMask: 'ethereum.enable()' is deprecated and may be removed in the future. Please use the 'eth_requestAccounts' RPC method instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1102",
                sendDeprecation: "MetaMask: 'ethereum.send(...)' is deprecated and may be removed in the future. Please use 'ethereum.sendAsync(...)' or 'ethereum.request(...)' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193",
                events: {
                    close: "MetaMask: The event 'close' is deprecated and may be removed in the future. Please use 'disconnect' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193#disconnect",
                    data: "MetaMask: The event 'data' is deprecated and will be removed in the future. Use 'message' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193#message",
                    networkChanged: "MetaMask: The event 'networkChanged' is deprecated and may be removed in the future. Use 'chainChanged' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193#chainchanged",
                    notification: "MetaMask: The event 'notification' is deprecated and may be removed in the future. Use 'message' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193#message"
                },
                rpc: {
                    ethDecryptDeprecation: "MetaMask: The RPC method 'eth_decrypt' is deprecated and may be removed in the future.\nFor more information, see: https://medium.com/metamask/metamask-api-method-deprecation-2b0564a84686",
                    ethGetEncryptionPublicKeyDeprecation: "MetaMask: The RPC method 'eth_getEncryptionPublicKey' is deprecated and may be removed in the future.\nFor more information, see: https://medium.com/metamask/metamask-api-method-deprecation-2b0564a84686",
                    walletWatchAssetNFTExperimental: "MetaMask: The RPC method 'wallet_watchAsset' is experimental for ERC721/ERC1155 assets and may change in the future.\nFor more information, see: https://github.com/MetaMask/metamask-improvement-proposals/blob/main/MIPs/mip-1.md and https://github.com/MetaMask/metamask-improvement-proposals/blob/main/PROCESS-GUIDE.md#proposal-lifecycle"
                },
                experimentalMethods: "MetaMask: 'ethereum._metamask' exposes non-standard, experimental methods. They may be removed or changed without warning."
            }
        };
        r.default = n
    }
    , {}],
    49: [function(e, t, r) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.createRpcWarningMiddleware = void 0;
        const i = e("../constants")
          , o = n(e("../messages"));
        r.createRpcWarningMiddleware = function(e) {
            const t = {
                ethDecryptDeprecation: !1,
                ethGetEncryptionPublicKeyDeprecation: !1,
                walletWatchAssetNFTExperimental: !1
            };
            return (r,n,s)=>{
                t.ethDecryptDeprecation || "eth_decrypt" !== r.method ? t.ethGetEncryptionPublicKeyDeprecation || "eth_getEncryptionPublicKey" !== r.method ? !t.walletWatchAssetNFTExperimental && "wallet_watchAsset" === r.method && [i.ERC721, i.ERC1155].includes(r.params?.type || "") && (e.warn(o.default.warnings.rpc.walletWatchAssetNFTExperimental),
                t.walletWatchAssetNFTExperimental = !0) : (e.warn(o.default.warnings.rpc.ethGetEncryptionPublicKeyDeprecation),
                t.ethGetEncryptionPublicKeyDeprecation = !0) : (e.warn(o.default.warnings.rpc.ethDecryptDeprecation),
                t.ethDecryptDeprecation = !0),
                s()
            }
        }
    }
    , {
        "../constants": 46,
        "../messages": 48
    }],
    50: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.shimWeb3 = void 0,
        r.shimWeb3 = function(e, t=console) {
            let r = !1
              , n = !1;
            if (!window.web3) {
                const i = "__isMetaMaskShim__";
                let o = {
                    currentProvider: e
                };
                Object.defineProperty(o, i, {
                    value: !0,
                    enumerable: !0,
                    configurable: !1,
                    writable: !1
                }),
                o = new Proxy(o,{
                    get: (o,s,...a)=>("currentProvider" !== s || r ? "currentProvider" === s || s === i || n || (n = !0,
                    t.error("MetaMask no longer injects web3. For details, see: https://docs.metamask.io/guide/provider-migration.html#replacing-window-web3"),
                    e.request({
                        method: "metamask_logWeb3ShimUsage"
                    }).catch((e=>{
                        t.debug("MetaMask: Failed to log web3 shim usage.", e)
                    }
                    ))) : (r = !0,
                    t.warn("You are accessing the MetaMask window.web3.currentProvider shim. This property is deprecated; use window.ethereum instead. For details, see: https://docs.metamask.io/guide/provider-migration.html#replacing-window-web3")),
                    Reflect.get(o, s, ...a)),
                    set: (...e)=>(t.warn("You are accessing the MetaMask window.web3 shim. This object is deprecated; use window.ethereum instead. For details, see: https://docs.metamask.io/guide/provider-migration.html#replacing-window-web3"),
                    Reflect.set(...e))
                }),
                Object.defineProperty(window, "web3", {
                    value: o,
                    enumerable: !1,
                    configurable: !0,
                    writable: !0
                })
            }
        }
    }
    , {}],
    51: [function(e, t, r) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.sendSiteMetadata = void 0;
        const i = n(e("./messages"))
          , o = e("./utils");
        function s(e) {
            const {document: t} = e
              , r = t.querySelector('head > meta[property="og:site_name"]');
            if (r)
                return r.content;
            const n = t.querySelector('head > meta[name="title"]');
            return n ? n.content : t.title && t.title.length > 0 ? t.title : window.location.hostname
        }
        async function a(e) {
            const {document: t} = e
              , r = t.querySelectorAll('head > link[rel~="icon"]');
            for (const e of Array.from(r))
                if (e && await u(e.href))
                    return e.href;
            return null
        }
        async function u(e) {
            return new Promise(((t,r)=>{
                try {
                    const r = document.createElement("img");
                    r.onload = ()=>t(!0),
                    r.onerror = ()=>t(!1),
                    r.src = e
                } catch (e) {
                    r(e)
                }
            }
            ))
        }
        r.sendSiteMetadata = async function(e, t) {
            try {
                const t = await async function() {
                    return {
                        name: s(window),
                        icon: await a(window)
                    }
                }();
                e.handle({
                    jsonrpc: "2.0",
                    id: 1,
                    method: "metamask_sendDomainMetadata",
                    params: t
                }, o.NOOP)
            } catch (e) {
                t.error({
                    message: i.default.errors.sendSiteMetadata(),
                    originalError: e
                })
            }
        }
    }
    , {
        "./messages": 48,
        "./utils": 52
    }],
    52: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.NOOP = r.isValidNetworkVersion = r.isValidChainId = r.getRpcPromiseCallback = r.getDefaultExternalMiddleware = r.EMITTED_NOTIFICATIONS = void 0;
        const n = e("@metamask/json-rpc-engine")
          , i = e("@metamask/rpc-errors")
          , o = e("./middleware/createRpcWarningMiddleware");
        r.EMITTED_NOTIFICATIONS = Object.freeze(["eth_subscription"]);
        r.getDefaultExternalMiddleware = (e=console)=>{
            return [(0,
            n.createIdRemapMiddleware)(), (t = e,
            (e,r,n)=>{
                "string" == typeof e.method && e.method || (r.error = i.rpcErrors.invalidRequest({
                    message: "The request 'method' must be a non-empty string.",
                    data: e
                })),
                n((e=>{
                    const {error: n} = r;
                    return n ? (t.error(`MetaMask - RPC Error: ${n.message}`, n),
                    e()) : e()
                }
                ))
            }
            ), (0,
            o.createRpcWarningMiddleware)(e)];
            var t
        }
        ;
        r.getRpcPromiseCallback = (e,t,r=!0)=>(n,i)=>{
            n || i.error ? t(n || i.error) : !r || Array.isArray(i) ? e(i) : e(i.result)
        }
        ;
        r.isValidChainId = e=>Boolean(e) && "string" == typeof e && e.startsWith("0x");
        r.isValidNetworkVersion = e=>Boolean(e) && "string" == typeof e;
        r.NOOP = ()=>{}
    }
    , {
        "./middleware/createRpcWarningMiddleware": 49,
        "@metamask/json-rpc-engine": 58,
        "@metamask/rpc-errors": 79
    }],
    53: [function(e, t, r) {
        "use strict";
        var n, i, o, s, a, u, c, l, d, f, h, p, g, b = this && this.__awaiter || function(e, t, r, n) {
            return new (r || (r = Promise))((function(i, o) {
                function s(e) {
                    try {
                        u(n.next(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function a(e) {
                    try {
                        u(n.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function u(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value,
                    t instanceof r ? t : new r((function(e) {
                        e(t)
                    }
                    ))).then(s, a)
                }
                u((n = n.apply(e, t || [])).next())
            }
            ))
        }
        , m = this && this.__classPrivateFieldSet || function(e, t, r, n, i) {
            if ("m" === n)
                throw new TypeError("Private method is not writable");
            if ("a" === n && !i)
                throw new TypeError("Private accessor was defined without a setter");
            if ("function" == typeof t ? e !== t || !i : !t.has(e))
                throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return "a" === n ? i.call(e, r) : i ? i.value = r : t.set(e, r),
            r
        }
        , y = this && this.__classPrivateFieldGet || function(e, t, r, n) {
            if ("a" === r && !n)
                throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !n : !t.has(e))
                throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
        }
        , v = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.JsonRpcEngine = void 0;
        const w = e("@metamask/rpc-errors")
          , _ = v(e("@metamask/safe-event-emitter"))
          , E = e("@metamask/utils");
        class S extends _.default {
            constructor({notificationHandler: e}={}) {
                super(),
                n.add(this),
                o.set(this, !1),
                s.set(this, void 0),
                a.set(this, void 0),
                m(this, s, [], "f"),
                m(this, a, e, "f")
            }
            destroy() {
                y(this, s, "f").forEach((e=>{
                    "destroy"in e && "function" == typeof e.destroy && e.destroy()
                }
                )),
                m(this, s, [], "f"),
                m(this, o, !0, "f")
            }
            push(e) {
                y(this, n, "m", u).call(this),
                y(this, s, "f").push(e)
            }
            handle(e, t) {
                if (y(this, n, "m", u).call(this),
                t && "function" != typeof t)
                    throw new Error('"callback" must be a function if provided.');
                return Array.isArray(e) ? t ? y(this, n, "m", c).call(this, e, t) : y(this, n, "m", c).call(this, e) : t ? y(this, n, "m", l).call(this, e, t) : this._promiseHandle(e)
            }
            asMiddleware() {
                return y(this, n, "m", u).call(this),
                (e,t,r,n)=>b(this, void 0, void 0, (function*() {
                    try {
                        const [o,a,u] = yield y(S, i, "m", f).call(S, e, t, y(this, s, "f"));
                        return a ? (yield y(S, i, "m", p).call(S, u),
                        n(o)) : r((e=>b(this, void 0, void 0, (function*() {
                            try {
                                yield y(S, i, "m", p).call(S, u)
                            } catch (t) {
                                return e(t)
                            }
                            return e()
                        }
                        ))))
                    } catch (e) {
                        return n(e)
                    }
                }
                ))
            }
            _promiseHandle(e) {
                return b(this, void 0, void 0, (function*() {
                    return new Promise(((t,r)=>{
                        y(this, n, "m", l).call(this, e, ((e,n)=>{
                            e && void 0 === n ? r(e) : t(n)
                        }
                        )).catch(r)
                    }
                    ))
                }
                ))
            }
        }
        function M(e) {
            return JSON.stringify(e, null, 2)
        }
        r.JsonRpcEngine = S,
        i = S,
        o = new WeakMap,
        s = new WeakMap,
        a = new WeakMap,
        n = new WeakSet,
        u = function() {
            if (y(this, o, "f"))
                throw new Error("This engine is destroyed and can no longer be used.")
        }
        ,
        c = function(e, t) {
            return b(this, void 0, void 0, (function*() {
                try {
                    if (0 === e.length) {
                        const e = [{
                            id: null,
                            jsonrpc: "2.0",
                            error: new w.JsonRpcError(w.errorCodes.rpc.invalidRequest,"Request batch must contain plain objects. Received an empty array")
                        }];
                        return t ? t(null, e) : e
                    }
                    const r = (yield Promise.all(e.map(this._promiseHandle.bind(this)))).filter((e=>void 0 !== e));
                    return t ? t(null, r) : r
                } catch (e) {
                    if (t)
                        return t(e);
                    throw e
                }
            }
            ))
        }
        ,
        l = function(e, t) {
            var r;
            return b(this, void 0, void 0, (function*() {
                if (!e || Array.isArray(e) || "object" != typeof e) {
                    const r = new w.JsonRpcError(w.errorCodes.rpc.invalidRequest,"Requests must be plain objects. Received: " + typeof e,{
                        request: e
                    });
                    return t(r, {
                        id: null,
                        jsonrpc: "2.0",
                        error: r
                    })
                }
                if ("string" != typeof e.method) {
                    const n = new w.JsonRpcError(w.errorCodes.rpc.invalidRequest,"Must specify a string method. Received: " + typeof e.method,{
                        request: e
                    });
                    return y(this, a, "f") && !(0,
                    E.isJsonRpcRequest)(e) ? t(null) : t(n, {
                        id: null !== (r = e.id) && void 0 !== r ? r : null,
                        jsonrpc: "2.0",
                        error: n
                    })
                }
                if (y(this, a, "f") && !(0,
                E.isJsonRpcRequest)(e)) {
                    try {
                        yield y(this, a, "f").call(this, e)
                    } catch (n) {
                        return t(n)
                    }
                    return t(null)
                }
                let n = null;
                const o = Object.assign({}, e)
                  , u = {
                    id: o.id,
                    jsonrpc: o.jsonrpc
                };
                try {
                    yield y(S, i, "m", d).call(S, o, u, y(this, s, "f"))
                } catch (e) {
                    n = e
                }
                return n && (delete u.result,
                u.error || (u.error = (0,
                w.serializeError)(n))),
                t(n, u)
            }
            ))
        }
        ,
        d = function(e, t, r) {
            return b(this, void 0, void 0, (function*() {
                const [n,o,s] = yield y(S, i, "m", f).call(S, e, t, r);
                if (y(S, i, "m", g).call(S, e, t, o),
                yield y(S, i, "m", p).call(S, s),
                n)
                    throw n
            }
            ))
        }
        ,
        f = function(e, t, r) {
            return b(this, void 0, void 0, (function*() {
                const n = [];
                let o = null
                  , s = !1;
                for (const a of r)
                    if ([o,s] = yield y(S, i, "m", h).call(S, e, t, a, n),
                    s)
                        break;
                return [o, s, n.reverse()]
            }
            ))
        }
        ,
        h = function(e, t, r, n) {
            return b(this, void 0, void 0, (function*() {
                return new Promise((i=>{
                    const o = e=>{
                        const r = e || t.error;
                        r && (t.error = (0,
                        w.serializeError)(r)),
                        i([r, !0])
                    }
                      , s = r=>{
                        t.error ? o(t.error) : (r && ("function" != typeof r && o(new w.JsonRpcError(w.errorCodes.rpc.internal,`JsonRpcEngine: "next" return handlers must be functions. Received "${typeof r}" for request:\n${M(e)}`,{
                            request: e
                        })),
                        n.push(r)),
                        i([null, !1]))
                    }
                    ;
                    try {
                        r(e, t, s, o)
                    } catch (e) {
                        o(e)
                    }
                }
                ))
            }
            ))
        }
        ,
        p = function(e) {
            return b(this, void 0, void 0, (function*() {
                for (const t of e)
                    yield new Promise(((e,r)=>{
                        t((t=>t ? r(t) : e()))
                    }
                    ))
            }
            ))
        }
        ,
        g = function(e, t, r) {
            if (!(0,
            E.hasProperty)(t, "result") && !(0,
            E.hasProperty)(t, "error"))
                throw new w.JsonRpcError(w.errorCodes.rpc.internal,`JsonRpcEngine: Response has no error or result for request:\n${M(e)}`,{
                    request: e
                });
            if (!r)
                throw new w.JsonRpcError(w.errorCodes.rpc.internal,`JsonRpcEngine: Nothing ended request:\n${M(e)}`,{
                    request: e
                })
        }
    }
    , {
        "@metamask/rpc-errors": 79,
        "@metamask/safe-event-emitter": 80,
        "@metamask/utils": 102
    }],
    54: [function(e, t, r) {
        "use strict";
        var n = this && this.__awaiter || function(e, t, r, n) {
            return new (r || (r = Promise))((function(i, o) {
                function s(e) {
                    try {
                        u(n.next(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function a(e) {
                    try {
                        u(n.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }
                function u(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value,
                    t instanceof r ? t : new r((function(e) {
                        e(t)
                    }
                    ))).then(s, a)
                }
                u((n = n.apply(e, t || [])).next())
            }
            ))
        }
        ;
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.createAsyncMiddleware = void 0,
        r.createAsyncMiddleware = function(e) {
            return (t,r,i,o)=>n(this, void 0, void 0, (function*() {
                let s;
                const a = new Promise((e=>{
                    s = e
                }
                ));
                let u = null
                  , c = !1;
                const l = ()=>n(this, void 0, void 0, (function*() {
                    return c = !0,
                    i((e=>{
                        u = e,
                        s()
                    }
                    )),
                    a
                }
                ));
                try {
                    yield e(t, r, l),
                    c ? (yield a,
                    u(null)) : o(null)
                } catch (e) {
                    u ? u(e) : o(e)
                }
            }
            ))
        }
    }
    , {}],
    55: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.createScaffoldMiddleware = void 0,
        r.createScaffoldMiddleware = function(e) {
            return (t,r,n,i)=>{
                const o = e[t.method];
                return void 0 === o ? n() : "function" == typeof o ? o(t, r, n, i) : (r.result = o,
                i())
            }
        }
    }
    , {}],
    56: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.getUniqueId = void 0;
        const n = 4294967295;
        let i = Math.floor(Math.random() * n);
        r.getUniqueId = function() {
            return i = (i + 1) % n,
            i
        }
    }
    , {}],
    57: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.createIdRemapMiddleware = void 0;
        const n = e("./getUniqueId");
        r.createIdRemapMiddleware = function() {
            return (e,t,r,i)=>{
                const o = e.id
                  , s = (0,
                n.getUniqueId)();
                e.id = s,
                t.id = s,
                r((r=>{
                    e.id = o,
                    t.id = o,
                    r()
                }
                ))
            }
        }
    }
    , {
        "./getUniqueId": 56
    }],
    58: [function(e, t, r) {
        "use strict";
        var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
            void 0 === n && (n = r);
            var i = Object.getOwnPropertyDescriptor(t, r);
            i && !("get"in i ? !t.__esModule : i.writable || i.configurable) || (i = {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            }),
            Object.defineProperty(e, n, i)
        }
        : function(e, t, r, n) {
            void 0 === n && (n = r),
            e[n] = t[r]
        }
        )
          , i = this && this.__exportStar || function(e, t) {
            for (var r in e)
                "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r)
        }
        ;
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        i(e("./createAsyncMiddleware"), r),
        i(e("./createScaffoldMiddleware"), r),
        i(e("./getUniqueId"), r),
        i(e("./idRemapMiddleware"), r),
        i(e("./JsonRpcEngine"), r),
        i(e("./mergeMiddleware"), r)
    }
    , {
        "./JsonRpcEngine": 53,
        "./createAsyncMiddleware": 54,
        "./createScaffoldMiddleware": 55,
        "./getUniqueId": 56,
        "./idRemapMiddleware": 57,
        "./mergeMiddleware": 59
    }],
    59: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.mergeMiddleware = void 0;
        const n = e("./JsonRpcEngine");
        r.mergeMiddleware = function(e) {
            const t = new n.JsonRpcEngine;
            return e.forEach((e=>t.push(e))),
            t.asMiddleware()
        }
    }
    , {
        "./JsonRpcEngine": 53
    }],
    60: [function(e, t, r) {
        arguments[4][5][0].apply(r, arguments)
    }
    , {
        dup: 5
    }],
    61: [function(e, t, r) {
        (function(r) {
            (function() {
                "use strict";
                var n = Object.keys || function(e) {
                    var t = [];
                    for (var r in e)
                        t.push(r);
                    return t
                }
                ;
                t.exports = c;
                var i = e("./_stream_readable")
                  , o = e("./_stream_writable");
                e("inherits")(c, i);
                for (var s = n(o.prototype), a = 0; a < s.length; a++) {
                    var u = s[a];
                    c.prototype[u] || (c.prototype[u] = o.prototype[u])
                }
                function c(e) {
                    if (!(this instanceof c))
                        return new c(e);
                    i.call(this, e),
                    o.call(this, e),
                    this.allowHalfOpen = !0,
                    e && (!1 === e.readable && (this.readable = !1),
                    !1 === e.writable && (this.writable = !1),
                    !1 === e.allowHalfOpen && (this.allowHalfOpen = !1,
                    this.once("end", l)))
                }
                function l() {
                    this._writableState.ended || r.nextTick(d, this)
                }
                function d(e) {
                    e.end()
                }
                Object.defineProperty(c.prototype, "writableHighWaterMark", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState.highWaterMark
                    }
                }),
                Object.defineProperty(c.prototype, "writableBuffer", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState && this._writableState.getBuffer()
                    }
                }),
                Object.defineProperty(c.prototype, "writableLength", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState.length
                    }
                }),
                Object.defineProperty(c.prototype, "destroyed", {
                    enumerable: !1,
                    get: function() {
                        return void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed && this._writableState.destroyed)
                    },
                    set: function(e) {
                        void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e,
                        this._writableState.destroyed = e)
                    }
                })
            }
            ).call(this)
        }
        ).call(this, e("_process"))
    }
    , {
        "./_stream_readable": 63,
        "./_stream_writable": 65,
        _process: 144,
        inherits: 119
    }],
    62: [function(e, t, r) {
        arguments[4][7][0].apply(r, arguments)
    }
    , {
        "./_stream_transform": 64,
        dup: 7,
        inherits: 119
    }],
    63: [function(e, t, r) {
        (function(r, n) {
            (function() {
                "use strict";
                var i;
                t.exports = R,
                R.ReadableState = M;
                e("events").EventEmitter;
                var o = function(e, t) {
                    return e.listeners(t).length
                }
                  , s = e("./internal/streams/stream")
                  , a = e("buffer").Buffer
                  , u = (void 0 !== n ? n : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}).Uint8Array || function() {}
                ;
                var c, l = e("util");
                c = l && l.debuglog ? l.debuglog("stream") : function() {}
                ;
                var d, f, h, p = e("./internal/streams/buffer_list"), g = e("./internal/streams/destroy"), b = e("./internal/streams/state").getHighWaterMark, m = e("../errors").codes, y = m.ERR_INVALID_ARG_TYPE, v = m.ERR_STREAM_PUSH_AFTER_EOF, w = m.ERR_METHOD_NOT_IMPLEMENTED, _ = m.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
                e("inherits")(R, s);
                var E = g.errorOrDestroy
                  , S = ["error", "close", "destroy", "pause", "resume"];
                function M(t, r, n) {
                    i = i || e("./_stream_duplex"),
                    t = t || {},
                    "boolean" != typeof n && (n = r instanceof i),
                    this.objectMode = !!t.objectMode,
                    n && (this.objectMode = this.objectMode || !!t.readableObjectMode),
                    this.highWaterMark = b(this, t, "readableHighWaterMark", n),
                    this.buffer = new p,
                    this.length = 0,
                    this.pipes = null,
                    this.pipesCount = 0,
                    this.flowing = null,
                    this.ended = !1,
                    this.endEmitted = !1,
                    this.reading = !1,
                    this.sync = !0,
                    this.needReadable = !1,
                    this.emittedReadable = !1,
                    this.readableListening = !1,
                    this.resumeScheduled = !1,
                    this.paused = !0,
                    this.emitClose = !1 !== t.emitClose,
                    this.autoDestroy = !!t.autoDestroy,
                    this.destroyed = !1,
                    this.defaultEncoding = t.defaultEncoding || "utf8",
                    this.awaitDrain = 0,
                    this.readingMore = !1,
                    this.decoder = null,
                    this.encoding = null,
                    t.encoding && (d || (d = e("string_decoder/").StringDecoder),
                    this.decoder = new d(t.encoding),
                    this.encoding = t.encoding)
                }
                function R(t) {
                    if (i = i || e("./_stream_duplex"),
                    !(this instanceof R))
                        return new R(t);
                    var r = this instanceof i;
                    this._readableState = new M(t,this,r),
                    this.readable = !0,
                    t && ("function" == typeof t.read && (this._read = t.read),
                    "function" == typeof t.destroy && (this._destroy = t.destroy)),
                    s.call(this)
                }
                function j(e, t, r, n, i) {
                    c("readableAddChunk", t);
                    var o, s = e._readableState;
                    if (null === t)
                        s.reading = !1,
                        function(e, t) {
                            if (c("onEofChunk"),
                            t.ended)
                                return;
                            if (t.decoder) {
                                var r = t.decoder.end();
                                r && r.length && (t.buffer.push(r),
                                t.length += t.objectMode ? 1 : r.length)
                            }
                            t.ended = !0,
                            t.sync ? x(e) : (t.needReadable = !1,
                            t.emittedReadable || (t.emittedReadable = !0,
                            O(e)))
                        }(e, s);
                    else if (i || (o = function(e, t) {
                        var r;
                        n = t,
                        a.isBuffer(n) || n instanceof u || "string" == typeof t || void 0 === t || e.objectMode || (r = new y("chunk",["string", "Buffer", "Uint8Array"],t));
                        var n;
                        return r
                    }(s, t)),
                    o)
                        E(e, o);
                    else if (s.objectMode || t && t.length > 0)
                        if ("string" == typeof t || s.objectMode || Object.getPrototypeOf(t) === a.prototype || (t = function(e) {
                            return a.from(e)
                        }(t)),
                        n)
                            s.endEmitted ? E(e, new _) : I(e, s, t, !0);
                        else if (s.ended)
                            E(e, new v);
                        else {
                            if (s.destroyed)
                                return !1;
                            s.reading = !1,
                            s.decoder && !r ? (t = s.decoder.write(t),
                            s.objectMode || 0 !== t.length ? I(e, s, t, !1) : A(e, s)) : I(e, s, t, !1)
                        }
                    else
                        n || (s.reading = !1,
                        A(e, s));
                    return !s.ended && (s.length < s.highWaterMark || 0 === s.length)
                }
                function I(e, t, r, n) {
                    t.flowing && 0 === t.length && !t.sync ? (t.awaitDrain = 0,
                    e.emit("data", r)) : (t.length += t.objectMode ? 1 : r.length,
                    n ? t.buffer.unshift(r) : t.buffer.push(r),
                    t.needReadable && x(e)),
                    A(e, t)
                }
                Object.defineProperty(R.prototype, "destroyed", {
                    enumerable: !1,
                    get: function() {
                        return void 0 !== this._readableState && this._readableState.destroyed
                    },
                    set: function(e) {
                        this._readableState && (this._readableState.destroyed = e)
                    }
                }),
                R.prototype.destroy = g.destroy,
                R.prototype._undestroy = g.undestroy,
                R.prototype._destroy = function(e, t) {
                    t(e)
                }
                ,
                R.prototype.push = function(e, t) {
                    var r, n = this._readableState;
                    return n.objectMode ? r = !0 : "string" == typeof e && ((t = t || n.defaultEncoding) !== n.encoding && (e = a.from(e, t),
                    t = ""),
                    r = !0),
                    j(this, e, t, !1, r)
                }
                ,
                R.prototype.unshift = function(e) {
                    return j(this, e, null, !0, !1)
                }
                ,
                R.prototype.isPaused = function() {
                    return !1 === this._readableState.flowing
                }
                ,
                R.prototype.setEncoding = function(t) {
                    d || (d = e("string_decoder/").StringDecoder);
                    var r = new d(t);
                    this._readableState.decoder = r,
                    this._readableState.encoding = this._readableState.decoder.encoding;
                    for (var n = this._readableState.buffer.head, i = ""; null !== n; )
                        i += r.write(n.data),
                        n = n.next;
                    return this._readableState.buffer.clear(),
                    "" !== i && this._readableState.buffer.push(i),
                    this._readableState.length = i.length,
                    this
                }
                ;
                var k = 1073741824;
                function C(e, t) {
                    return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e != e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = function(e) {
                        return e >= k ? e = k : (e--,
                        e |= e >>> 1,
                        e |= e >>> 2,
                        e |= e >>> 4,
                        e |= e >>> 8,
                        e |= e >>> 16,
                        e++),
                        e
                    }(e)),
                    e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0,
                    0))
                }
                function x(e) {
                    var t = e._readableState;
                    c("emitReadable", t.needReadable, t.emittedReadable),
                    t.needReadable = !1,
                    t.emittedReadable || (c("emitReadable", t.flowing),
                    t.emittedReadable = !0,
                    r.nextTick(O, e))
                }
                function O(e) {
                    var t = e._readableState;
                    c("emitReadable_", t.destroyed, t.length, t.ended),
                    t.destroyed || !t.length && !t.ended || (e.emit("readable"),
                    t.emittedReadable = !1),
                    t.needReadable = !t.flowing && !t.ended && t.length <= t.highWaterMark,
                    D(e)
                }
                function A(e, t) {
                    t.readingMore || (t.readingMore = !0,
                    r.nextTick(T, e, t))
                }
                function T(e, t) {
                    for (; !t.reading && !t.ended && (t.length < t.highWaterMark || t.flowing && 0 === t.length); ) {
                        var r = t.length;
                        if (c("maybeReadMore read 0"),
                        e.read(0),
                        r === t.length)
                            break
                    }
                    t.readingMore = !1
                }
                function P(e) {
                    var t = e._readableState;
                    t.readableListening = e.listenerCount("readable") > 0,
                    t.resumeScheduled && !t.paused ? t.flowing = !0 : e.listenerCount("data") > 0 && e.resume()
                }
                function L(e) {
                    c("readable nexttick read 0"),
                    e.read(0)
                }
                function N(e, t) {
                    c("resume", t.reading),
                    t.reading || e.read(0),
                    t.resumeScheduled = !1,
                    e.emit("resume"),
                    D(e),
                    t.flowing && !t.reading && e.read(0)
                }
                function D(e) {
                    var t = e._readableState;
                    for (c("flow", t.flowing); t.flowing && null !== e.read(); )
                        ;
                }
                function B(e, t) {
                    return 0 === t.length ? null : (t.objectMode ? r = t.buffer.shift() : !e || e >= t.length ? (r = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.first() : t.buffer.concat(t.length),
                    t.buffer.clear()) : r = t.buffer.consume(e, t.decoder),
                    r);
                    var r
                }
                function U(e) {
                    var t = e._readableState;
                    c("endReadable", t.endEmitted),
                    t.endEmitted || (t.ended = !0,
                    r.nextTick($, t, e))
                }
                function $(e, t) {
                    if (c("endReadableNT", e.endEmitted, e.length),
                    !e.endEmitted && 0 === e.length && (e.endEmitted = !0,
                    t.readable = !1,
                    t.emit("end"),
                    e.autoDestroy)) {
                        var r = t._writableState;
                        (!r || r.autoDestroy && r.finished) && t.destroy()
                    }
                }
                function F(e, t) {
                    for (var r = 0, n = e.length; r < n; r++)
                        if (e[r] === t)
                            return r;
                    return -1
                }
                R.prototype.read = function(e) {
                    c("read", e),
                    e = parseInt(e, 10);
                    var t = this._readableState
                      , r = e;
                    if (0 !== e && (t.emittedReadable = !1),
                    0 === e && t.needReadable && ((0 !== t.highWaterMark ? t.length >= t.highWaterMark : t.length > 0) || t.ended))
                        return c("read: emitReadable", t.length, t.ended),
                        0 === t.length && t.ended ? U(this) : x(this),
                        null;
                    if (0 === (e = C(e, t)) && t.ended)
                        return 0 === t.length && U(this),
                        null;
                    var n, i = t.needReadable;
                    return c("need readable", i),
                    (0 === t.length || t.length - e < t.highWaterMark) && c("length less than watermark", i = !0),
                    t.ended || t.reading ? c("reading or ended", i = !1) : i && (c("do read"),
                    t.reading = !0,
                    t.sync = !0,
                    0 === t.length && (t.needReadable = !0),
                    this._read(t.highWaterMark),
                    t.sync = !1,
                    t.reading || (e = C(r, t))),
                    null === (n = e > 0 ? B(e, t) : null) ? (t.needReadable = t.length <= t.highWaterMark,
                    e = 0) : (t.length -= e,
                    t.awaitDrain = 0),
                    0 === t.length && (t.ended || (t.needReadable = !0),
                    r !== e && t.ended && U(this)),
                    null !== n && this.emit("data", n),
                    n
                }
                ,
                R.prototype._read = function(e) {
                    E(this, new w("_read()"))
                }
                ,
                R.prototype.pipe = function(e, t) {
                    var n = this
                      , i = this._readableState;
                    switch (i.pipesCount) {
                    case 0:
                        i.pipes = e;
                        break;
                    case 1:
                        i.pipes = [i.pipes, e];
                        break;
                    default:
                        i.pipes.push(e)
                    }
                    i.pipesCount += 1,
                    c("pipe count=%d opts=%j", i.pipesCount, t);
                    var s = (!t || !1 !== t.end) && e !== r.stdout && e !== r.stderr ? u : b;
                    function a(t, r) {
                        c("onunpipe"),
                        t === n && r && !1 === r.hasUnpiped && (r.hasUnpiped = !0,
                        c("cleanup"),
                        e.removeListener("close", p),
                        e.removeListener("finish", g),
                        e.removeListener("drain", l),
                        e.removeListener("error", h),
                        e.removeListener("unpipe", a),
                        n.removeListener("end", u),
                        n.removeListener("end", b),
                        n.removeListener("data", f),
                        d = !0,
                        !i.awaitDrain || e._writableState && !e._writableState.needDrain || l())
                    }
                    function u() {
                        c("onend"),
                        e.end()
                    }
                    i.endEmitted ? r.nextTick(s) : n.once("end", s),
                    e.on("unpipe", a);
                    var l = function(e) {
                        return function() {
                            var t = e._readableState;
                            c("pipeOnDrain", t.awaitDrain),
                            t.awaitDrain && t.awaitDrain--,
                            0 === t.awaitDrain && o(e, "data") && (t.flowing = !0,
                            D(e))
                        }
                    }(n);
                    e.on("drain", l);
                    var d = !1;
                    function f(t) {
                        c("ondata");
                        var r = e.write(t);
                        c("dest.write", r),
                        !1 === r && ((1 === i.pipesCount && i.pipes === e || i.pipesCount > 1 && -1 !== F(i.pipes, e)) && !d && (c("false write response, pause", i.awaitDrain),
                        i.awaitDrain++),
                        n.pause())
                    }
                    function h(t) {
                        c("onerror", t),
                        b(),
                        e.removeListener("error", h),
                        0 === o(e, "error") && E(e, t)
                    }
                    function p() {
                        e.removeListener("finish", g),
                        b()
                    }
                    function g() {
                        c("onfinish"),
                        e.removeListener("close", p),
                        b()
                    }
                    function b() {
                        c("unpipe"),
                        n.unpipe(e)
                    }
                    return n.on("data", f),
                    function(e, t, r) {
                        if ("function" == typeof e.prependListener)
                            return e.prependListener(t, r);
                        e._events && e._events[t] ? Array.isArray(e._events[t]) ? e._events[t].unshift(r) : e._events[t] = [r, e._events[t]] : e.on(t, r)
                    }(e, "error", h),
                    e.once("close", p),
                    e.once("finish", g),
                    e.emit("pipe", n),
                    i.flowing || (c("pipe resume"),
                    n.resume()),
                    e
                }
                ,
                R.prototype.unpipe = function(e) {
                    var t = this._readableState
                      , r = {
                        hasUnpiped: !1
                    };
                    if (0 === t.pipesCount)
                        return this;
                    if (1 === t.pipesCount)
                        return e && e !== t.pipes || (e || (e = t.pipes),
                        t.pipes = null,
                        t.pipesCount = 0,
                        t.flowing = !1,
                        e && e.emit("unpipe", this, r)),
                        this;
                    if (!e) {
                        var n = t.pipes
                          , i = t.pipesCount;
                        t.pipes = null,
                        t.pipesCount = 0,
                        t.flowing = !1;
                        for (var o = 0; o < i; o++)
                            n[o].emit("unpipe", this, {
                                hasUnpiped: !1
                            });
                        return this
                    }
                    var s = F(t.pipes, e);
                    return -1 === s || (t.pipes.splice(s, 1),
                    t.pipesCount -= 1,
                    1 === t.pipesCount && (t.pipes = t.pipes[0]),
                    e.emit("unpipe", this, r)),
                    this
                }
                ,
                R.prototype.on = function(e, t) {
                    var n = s.prototype.on.call(this, e, t)
                      , i = this._readableState;
                    return "data" === e ? (i.readableListening = this.listenerCount("readable") > 0,
                    !1 !== i.flowing && this.resume()) : "readable" === e && (i.endEmitted || i.readableListening || (i.readableListening = i.needReadable = !0,
                    i.flowing = !1,
                    i.emittedReadable = !1,
                    c("on readable", i.length, i.reading),
                    i.length ? x(this) : i.reading || r.nextTick(L, this))),
                    n
                }
                ,
                R.prototype.addListener = R.prototype.on,
                R.prototype.removeListener = function(e, t) {
                    var n = s.prototype.removeListener.call(this, e, t);
                    return "readable" === e && r.nextTick(P, this),
                    n
                }
                ,
                R.prototype.removeAllListeners = function(e) {
                    var t = s.prototype.removeAllListeners.apply(this, arguments);
                    return "readable" !== e && void 0 !== e || r.nextTick(P, this),
                    t
                }
                ,
                R.prototype.resume = function() {
                    var e = this._readableState;
                    return e.flowing || (c("resume"),
                    e.flowing = !e.readableListening,
                    function(e, t) {
                        t.resumeScheduled || (t.resumeScheduled = !0,
                        r.nextTick(N, e, t))
                    }(this, e)),
                    e.paused = !1,
                    this
                }
                ,
                R.prototype.pause = function() {
                    return c("call pause flowing=%j", this._readableState.flowing),
                    !1 !== this._readableState.flowing && (c("pause"),
                    this._readableState.flowing = !1,
                    this.emit("pause")),
                    this._readableState.paused = !0,
                    this
                }
                ,
                R.prototype.wrap = function(e) {
                    var t = this
                      , r = this._readableState
                      , n = !1;
                    for (var i in e.on("end", (function() {
                        if (c("wrapped end"),
                        r.decoder && !r.ended) {
                            var e = r.decoder.end();
                            e && e.length && t.push(e)
                        }
                        t.push(null)
                    }
                    )),
                    e.on("data", (function(i) {
                        (c("wrapped data"),
                        r.decoder && (i = r.decoder.write(i)),
                        r.objectMode && null == i) || (r.objectMode || i && i.length) && (t.push(i) || (n = !0,
                        e.pause()))
                    }
                    )),
                    e)
                        void 0 === this[i] && "function" == typeof e[i] && (this[i] = function(t) {
                            return function() {
                                return e[t].apply(e, arguments)
                            }
                        }(i));
                    for (var o = 0; o < S.length; o++)
                        e.on(S[o], this.emit.bind(this, S[o]));
                    return this._read = function(t) {
                        c("wrapped _read", t),
                        n && (n = !1,
                        e.resume())
                    }
                    ,
                    this
                }
                ,
                "function" == typeof Symbol && (R.prototype[Symbol.asyncIterator] = function() {
                    return void 0 === f && (f = e("./internal/streams/async_iterator")),
                    f(this)
                }
                ),
                Object.defineProperty(R.prototype, "readableHighWaterMark", {
                    enumerable: !1,
                    get: function() {
                        return this._readableState.highWaterMark
                    }
                }),
                Object.defineProperty(R.prototype, "readableBuffer", {
                    enumerable: !1,
                    get: function() {
                        return this._readableState && this._readableState.buffer
                    }
                }),
                Object.defineProperty(R.prototype, "readableFlowing", {
                    enumerable: !1,
                    get: function() {
                        return this._readableState.flowing
                    },
                    set: function(e) {
                        this._readableState && (this._readableState.flowing = e)
                    }
                }),
                R._fromList = B,
                Object.defineProperty(R.prototype, "readableLength", {
                    enumerable: !1,
                    get: function() {
                        return this._readableState.length
                    }
                }),
                "function" == typeof Symbol && (R.from = function(t, r) {
                    return void 0 === h && (h = e("./internal/streams/from")),
                    h(R, t, r)
                }
                )
            }
            ).call(this)
        }
        ).call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {
        "../errors": 60,
        "./_stream_duplex": 61,
        "./internal/streams/async_iterator": 66,
        "./internal/streams/buffer_list": 67,
        "./internal/streams/destroy": 68,
        "./internal/streams/from": 70,
        "./internal/streams/state": 72,
        "./internal/streams/stream": 73,
        _process: 144,
        buffer: 111,
        events: 115,
        inherits: 119,
        "string_decoder/": 191,
        util: 110
    }],
    64: [function(e, t, r) {
        arguments[4][9][0].apply(r, arguments)
    }
    , {
        "../errors": 60,
        "./_stream_duplex": 61,
        dup: 9,
        inherits: 119
    }],
    65: [function(e, t, r) {
        (function(r, n) {
            (function() {
                "use strict";
                function i(e) {
                    var t = this;
                    this.next = null,
                    this.entry = null,
                    this.finish = function() {
                        !function(e, t, r) {
                            var n = e.entry;
                            e.entry = null;
                            for (; n; ) {
                                var i = n.callback;
                                t.pendingcb--,
                                i(r),
                                n = n.next
                            }
                            t.corkedRequestsFree.next = e
                        }(t, e)
                    }
                }
                var o;
                t.exports = R,
                R.WritableState = M;
                var s = {
                    deprecate: e("util-deprecate")
                }
                  , a = e("./internal/streams/stream")
                  , u = e("buffer").Buffer
                  , c = (void 0 !== n ? n : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}).Uint8Array || function() {}
                ;
                var l, d = e("./internal/streams/destroy"), f = e("./internal/streams/state").getHighWaterMark, h = e("../errors").codes, p = h.ERR_INVALID_ARG_TYPE, g = h.ERR_METHOD_NOT_IMPLEMENTED, b = h.ERR_MULTIPLE_CALLBACK, m = h.ERR_STREAM_CANNOT_PIPE, y = h.ERR_STREAM_DESTROYED, v = h.ERR_STREAM_NULL_VALUES, w = h.ERR_STREAM_WRITE_AFTER_END, _ = h.ERR_UNKNOWN_ENCODING, E = d.errorOrDestroy;
                function S() {}
                function M(t, n, s) {
                    o = o || e("./_stream_duplex"),
                    t = t || {},
                    "boolean" != typeof s && (s = n instanceof o),
                    this.objectMode = !!t.objectMode,
                    s && (this.objectMode = this.objectMode || !!t.writableObjectMode),
                    this.highWaterMark = f(this, t, "writableHighWaterMark", s),
                    this.finalCalled = !1,
                    this.needDrain = !1,
                    this.ending = !1,
                    this.ended = !1,
                    this.finished = !1,
                    this.destroyed = !1;
                    var a = !1 === t.decodeStrings;
                    this.decodeStrings = !a,
                    this.defaultEncoding = t.defaultEncoding || "utf8",
                    this.length = 0,
                    this.writing = !1,
                    this.corked = 0,
                    this.sync = !0,
                    this.bufferProcessing = !1,
                    this.onwrite = function(e) {
                        !function(e, t) {
                            var n = e._writableState
                              , i = n.sync
                              , o = n.writecb;
                            if ("function" != typeof o)
                                throw new b;
                            if (function(e) {
                                e.writing = !1,
                                e.writecb = null,
                                e.length -= e.writelen,
                                e.writelen = 0
                            }(n),
                            t)
                                !function(e, t, n, i, o) {
                                    --t.pendingcb,
                                    n ? (r.nextTick(o, i),
                                    r.nextTick(O, e, t),
                                    e._writableState.errorEmitted = !0,
                                    E(e, i)) : (o(i),
                                    e._writableState.errorEmitted = !0,
                                    E(e, i),
                                    O(e, t))
                                }(e, n, i, t, o);
                            else {
                                var s = C(n) || e.destroyed;
                                s || n.corked || n.bufferProcessing || !n.bufferedRequest || k(e, n),
                                i ? r.nextTick(I, e, n, s, o) : I(e, n, s, o)
                            }
                        }(n, e)
                    }
                    ,
                    this.writecb = null,
                    this.writelen = 0,
                    this.bufferedRequest = null,
                    this.lastBufferedRequest = null,
                    this.pendingcb = 0,
                    this.prefinished = !1,
                    this.errorEmitted = !1,
                    this.emitClose = !1 !== t.emitClose,
                    this.autoDestroy = !!t.autoDestroy,
                    this.bufferedRequestCount = 0,
                    this.corkedRequestsFree = new i(this)
                }
                function R(t) {
                    var r = this instanceof (o = o || e("./_stream_duplex"));
                    if (!r && !l.call(R, this))
                        return new R(t);
                    this._writableState = new M(t,this,r),
                    this.writable = !0,
                    t && ("function" == typeof t.write && (this._write = t.write),
                    "function" == typeof t.writev && (this._writev = t.writev),
                    "function" == typeof t.destroy && (this._destroy = t.destroy),
                    "function" == typeof t.final && (this._final = t.final)),
                    a.call(this)
                }
                function j(e, t, r, n, i, o, s) {
                    t.writelen = n,
                    t.writecb = s,
                    t.writing = !0,
                    t.sync = !0,
                    t.destroyed ? t.onwrite(new y("write")) : r ? e._writev(i, t.onwrite) : e._write(i, o, t.onwrite),
                    t.sync = !1
                }
                function I(e, t, r, n) {
                    r || function(e, t) {
                        0 === t.length && t.needDrain && (t.needDrain = !1,
                        e.emit("drain"))
                    }(e, t),
                    t.pendingcb--,
                    n(),
                    O(e, t)
                }
                function k(e, t) {
                    t.bufferProcessing = !0;
                    var r = t.bufferedRequest;
                    if (e._writev && r && r.next) {
                        var n = t.bufferedRequestCount
                          , o = new Array(n)
                          , s = t.corkedRequestsFree;
                        s.entry = r;
                        for (var a = 0, u = !0; r; )
                            o[a] = r,
                            r.isBuf || (u = !1),
                            r = r.next,
                            a += 1;
                        o.allBuffers = u,
                        j(e, t, !0, t.length, o, "", s.finish),
                        t.pendingcb++,
                        t.lastBufferedRequest = null,
                        s.next ? (t.corkedRequestsFree = s.next,
                        s.next = null) : t.corkedRequestsFree = new i(t),
                        t.bufferedRequestCount = 0
                    } else {
                        for (; r; ) {
                            var c = r.chunk
                              , l = r.encoding
                              , d = r.callback;
                            if (j(e, t, !1, t.objectMode ? 1 : c.length, c, l, d),
                            r = r.next,
                            t.bufferedRequestCount--,
                            t.writing)
                                break
                        }
                        null === r && (t.lastBufferedRequest = null)
                    }
                    t.bufferedRequest = r,
                    t.bufferProcessing = !1
                }
                function C(e) {
                    return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing
                }
                function x(e, t) {
                    e._final((function(r) {
                        t.pendingcb--,
                        r && E(e, r),
                        t.prefinished = !0,
                        e.emit("prefinish"),
                        O(e, t)
                    }
                    ))
                }
                function O(e, t) {
                    var n = C(t);
                    if (n && (function(e, t) {
                        t.prefinished || t.finalCalled || ("function" != typeof e._final || t.destroyed ? (t.prefinished = !0,
                        e.emit("prefinish")) : (t.pendingcb++,
                        t.finalCalled = !0,
                        r.nextTick(x, e, t)))
                    }(e, t),
                    0 === t.pendingcb && (t.finished = !0,
                    e.emit("finish"),
                    t.autoDestroy))) {
                        var i = e._readableState;
                        (!i || i.autoDestroy && i.endEmitted) && e.destroy()
                    }
                    return n
                }
                e("inherits")(R, a),
                M.prototype.getBuffer = function() {
                    for (var e = this.bufferedRequest, t = []; e; )
                        t.push(e),
                        e = e.next;
                    return t
                }
                ,
                function() {
                    try {
                        Object.defineProperty(M.prototype, "buffer", {
                            get: s.deprecate((function() {
                                return this.getBuffer()
                            }
                            ), "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                        })
                    } catch (e) {}
                }(),
                "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (l = Function.prototype[Symbol.hasInstance],
                Object.defineProperty(R, Symbol.hasInstance, {
                    value: function(e) {
                        return !!l.call(this, e) || this === R && (e && e._writableState instanceof M)
                    }
                })) : l = function(e) {
                    return e instanceof this
                }
                ,
                R.prototype.pipe = function() {
                    E(this, new m)
                }
                ,
                R.prototype.write = function(e, t, n) {
                    var i, o = this._writableState, s = !1, a = !o.objectMode && (i = e,
                    u.isBuffer(i) || i instanceof c);
                    return a && !u.isBuffer(e) && (e = function(e) {
                        return u.from(e)
                    }(e)),
                    "function" == typeof t && (n = t,
                    t = null),
                    a ? t = "buffer" : t || (t = o.defaultEncoding),
                    "function" != typeof n && (n = S),
                    o.ending ? function(e, t) {
                        var n = new w;
                        E(e, n),
                        r.nextTick(t, n)
                    }(this, n) : (a || function(e, t, n, i) {
                        var o;
                        return null === n ? o = new v : "string" == typeof n || t.objectMode || (o = new p("chunk",["string", "Buffer"],n)),
                        !o || (E(e, o),
                        r.nextTick(i, o),
                        !1)
                    }(this, o, e, n)) && (o.pendingcb++,
                    s = function(e, t, r, n, i, o) {
                        if (!r) {
                            var s = function(e, t, r) {
                                e.objectMode || !1 === e.decodeStrings || "string" != typeof t || (t = u.from(t, r));
                                return t
                            }(t, n, i);
                            n !== s && (r = !0,
                            i = "buffer",
                            n = s)
                        }
                        var a = t.objectMode ? 1 : n.length;
                        t.length += a;
                        var c = t.length < t.highWaterMark;
                        c || (t.needDrain = !0);
                        if (t.writing || t.corked) {
                            var l = t.lastBufferedRequest;
                            t.lastBufferedRequest = {
                                chunk: n,
                                encoding: i,
                                isBuf: r,
                                callback: o,
                                next: null
                            },
                            l ? l.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest,
                            t.bufferedRequestCount += 1
                        } else
                            j(e, t, !1, a, n, i, o);
                        return c
                    }(this, o, a, e, t, n)),
                    s
                }
                ,
                R.prototype.cork = function() {
                    this._writableState.corked++
                }
                ,
                R.prototype.uncork = function() {
                    var e = this._writableState;
                    e.corked && (e.corked--,
                    e.writing || e.corked || e.bufferProcessing || !e.bufferedRequest || k(this, e))
                }
                ,
                R.prototype.setDefaultEncoding = function(e) {
                    if ("string" == typeof e && (e = e.toLowerCase()),
                    !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1))
                        throw new _(e);
                    return this._writableState.defaultEncoding = e,
                    this
                }
                ,
                Object.defineProperty(R.prototype, "writableBuffer", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState && this._writableState.getBuffer()
                    }
                }),
                Object.defineProperty(R.prototype, "writableHighWaterMark", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState.highWaterMark
                    }
                }),
                R.prototype._write = function(e, t, r) {
                    r(new g("_write()"))
                }
                ,
                R.prototype._writev = null,
                R.prototype.end = function(e, t, n) {
                    var i = this._writableState;
                    return "function" == typeof e ? (n = e,
                    e = null,
                    t = null) : "function" == typeof t && (n = t,
                    t = null),
                    null != e && this.write(e, t),
                    i.corked && (i.corked = 1,
                    this.uncork()),
                    i.ending || function(e, t, n) {
                        t.ending = !0,
                        O(e, t),
                        n && (t.finished ? r.nextTick(n) : e.once("finish", n));
                        t.ended = !0,
                        e.writable = !1
                    }(this, i, n),
                    this
                }
                ,
                Object.defineProperty(R.prototype, "writableLength", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState.length
                    }
                }),
                Object.defineProperty(R.prototype, "destroyed", {
                    enumerable: !1,
                    get: function() {
                        return void 0 !== this._writableState && this._writableState.destroyed
                    },
                    set: function(e) {
                        this._writableState && (this._writableState.destroyed = e)
                    }
                }),
                R.prototype.destroy = d.destroy,
                R.prototype._undestroy = d.undestroy,
                R.prototype._destroy = function(e, t) {
                    t(e)
                }
            }
            ).call(this)
        }
        ).call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {
        "../errors": 60,
        "./_stream_duplex": 61,
        "./internal/streams/destroy": 68,
        "./internal/streams/state": 72,
        "./internal/streams/stream": 73,
        _process: 144,
        buffer: 111,
        inherits: 119,
        "util-deprecate": 193
    }],
    66: [function(e, t, r) {
        (function(r) {
            (function() {
                "use strict";
                var n;
                function i(e, t, r) {
                    return (t = function(e) {
                        var t = function(e, t) {
                            if ("object" != typeof e || null === e)
                                return e;
                            var r = e[Symbol.toPrimitive];
                            if (void 0 !== r) {
                                var n = r.call(e, t || "default");
                                if ("object" != typeof n)
                                    return n;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return ("string" === t ? String : Number)(e)
                        }(e, "string");
                        return "symbol" == typeof t ? t : String(t)
                    }(t))in e ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = r,
                    e
                }
                var o = e("./end-of-stream")
                  , s = Symbol("lastResolve")
                  , a = Symbol("lastReject")
                  , u = Symbol("error")
                  , c = Symbol("ended")
                  , l = Symbol("lastPromise")
                  , d = Symbol("handlePromise")
                  , f = Symbol("stream");
                function h(e, t) {
                    return {
                        value: e,
                        done: t
                    }
                }
                function p(e) {
                    var t = e[s];
                    if (null !== t) {
                        var r = e[f].read();
                        null !== r && (e[l] = null,
                        e[s] = null,
                        e[a] = null,
                        t(h(r, !1)))
                    }
                }
                function g(e) {
                    r.nextTick(p, e)
                }
                var b = Object.getPrototypeOf((function() {}
                ))
                  , m = Object.setPrototypeOf((i(n = {
                    get stream() {
                        return this[f]
                    },
                    next: function() {
                        var e = this
                          , t = this[u];
                        if (null !== t)
                            return Promise.reject(t);
                        if (this[c])
                            return Promise.resolve(h(void 0, !0));
                        if (this[f].destroyed)
                            return new Promise((function(t, n) {
                                r.nextTick((function() {
                                    e[u] ? n(e[u]) : t(h(void 0, !0))
                                }
                                ))
                            }
                            ));
                        var n, i = this[l];
                        if (i)
                            n = new Promise(function(e, t) {
                                return function(r, n) {
                                    e.then((function() {
                                        t[c] ? r(h(void 0, !0)) : t[d](r, n)
                                    }
                                    ), n)
                                }
                            }(i, this));
                        else {
                            var o = this[f].read();
                            if (null !== o)
                                return Promise.resolve(h(o, !1));
                            n = new Promise(this[d])
                        }
                        return this[l] = n,
                        n
                    }
                }, Symbol.asyncIterator, (function() {
                    return this
                }
                )),
                i(n, "return", (function() {
                    var e = this;
                    return new Promise((function(t, r) {
                        e[f].destroy(null, (function(e) {
                            e ? r(e) : t(h(void 0, !0))
                        }
                        ))
                    }
                    ))
                }
                )),
                n), b);
                t.exports = function(e) {
                    var t, r = Object.create(m, (i(t = {}, f, {
                        value: e,
                        writable: !0
                    }),
                    i(t, s, {
                        value: null,
                        writable: !0
                    }),
                    i(t, a, {
                        value: null,
                        writable: !0
                    }),
                    i(t, u, {
                        value: null,
                        writable: !0
                    }),
                    i(t, c, {
                        value: e._readableState.endEmitted,
                        writable: !0
                    }),
                    i(t, d, {
                        value: function(e, t) {
                            var n = r[f].read();
                            n ? (r[l] = null,
                            r[s] = null,
                            r[a] = null,
                            e(h(n, !1))) : (r[s] = e,
                            r[a] = t)
                        },
                        writable: !0
                    }),
                    t));
                    return r[l] = null,
                    o(e, (function(e) {
                        if (e && "ERR_STREAM_PREMATURE_CLOSE" !== e.code) {
                            var t = r[a];
                            return null !== t && (r[l] = null,
                            r[s] = null,
                            r[a] = null,
                            t(e)),
                            void (r[u] = e)
                        }
                        var n = r[s];
                        null !== n && (r[l] = null,
                        r[s] = null,
                        r[a] = null,
                        n(h(void 0, !0))),
                        r[c] = !0
                    }
                    )),
                    e.on("readable", g.bind(null, r)),
                    r
                }
            }
            ).call(this)
        }
        ).call(this, e("_process"))
    }
    , {
        "./end-of-stream": 69,
        _process: 144
    }],
    67: [function(e, t, r) {
        arguments[4][12][0].apply(r, arguments)
    }
    , {
        buffer: 111,
        dup: 12,
        util: 110
    }],
    68: [function(e, t, r) {
        (function(e) {
            (function() {
                "use strict";
                function r(e, t) {
                    i(e, t),
                    n(e)
                }
                function n(e) {
                    e._writableState && !e._writableState.emitClose || e._readableState && !e._readableState.emitClose || e.emit("close")
                }
                function i(e, t) {
                    e.emit("error", t)
                }
                t.exports = {
                    destroy: function(t, o) {
                        var s = this
                          , a = this._readableState && this._readableState.destroyed
                          , u = this._writableState && this._writableState.destroyed;
                        return a || u ? (o ? o(t) : t && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0,
                        e.nextTick(i, this, t)) : e.nextTick(i, this, t)),
                        this) : (this._readableState && (this._readableState.destroyed = !0),
                        this._writableState && (this._writableState.destroyed = !0),
                        this._destroy(t || null, (function(t) {
                            !o && t ? s._writableState ? s._writableState.errorEmitted ? e.nextTick(n, s) : (s._writableState.errorEmitted = !0,
                            e.nextTick(r, s, t)) : e.nextTick(r, s, t) : o ? (e.nextTick(n, s),
                            o(t)) : e.nextTick(n, s)
                        }
                        )),
                        this)
                    },
                    undestroy: function() {
                        this._readableState && (this._readableState.destroyed = !1,
                        this._readableState.reading = !1,
                        this._readableState.ended = !1,
                        this._readableState.endEmitted = !1),
                        this._writableState && (this._writableState.destroyed = !1,
                        this._writableState.ended = !1,
                        this._writableState.ending = !1,
                        this._writableState.finalCalled = !1,
                        this._writableState.prefinished = !1,
                        this._writableState.finished = !1,
                        this._writableState.errorEmitted = !1)
                    },
                    errorOrDestroy: function(e, t) {
                        var r = e._readableState
                          , n = e._writableState;
                        r && r.autoDestroy || n && n.autoDestroy ? e.destroy(t) : e.emit("error", t)
                    }
                }
            }
            ).call(this)
        }
        ).call(this, e("_process"))
    }
    , {
        _process: 144
    }],
    69: [function(e, t, r) {
        arguments[4][14][0].apply(r, arguments)
    }
    , {
        "../../../errors": 60,
        dup: 14
    }],
    70: [function(e, t, r) {
        arguments[4][15][0].apply(r, arguments)
    }
    , {
        dup: 15
    }],
    71: [function(e, t, r) {
        arguments[4][16][0].apply(r, arguments)
    }
    , {
        "../../../errors": 60,
        "./end-of-stream": 69,
        dup: 16
    }],
    72: [function(e, t, r) {
        arguments[4][17][0].apply(r, arguments)
    }
    , {
        "../../../errors": 60,
        dup: 17
    }],
    73: [function(e, t, r) {
        arguments[4][18][0].apply(r, arguments)
    }
    , {
        dup: 18,
        events: 115
    }],
    74: [function(e, t, r) {
        arguments[4][19][0].apply(r, arguments)
    }
    , {
        "./lib/_stream_duplex.js": 61,
        "./lib/_stream_passthrough.js": 62,
        "./lib/_stream_readable.js": 63,
        "./lib/_stream_transform.js": 64,
        "./lib/_stream_writable.js": 65,
        "./lib/internal/streams/end-of-stream.js": 69,
        "./lib/internal/streams/pipeline.js": 71,
        dup: 19
    }],
    75: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n, i = e("./chunk-LIUXO4DW.js"), o = e("@metamask/utils"), s = e("fast-safe-stringify"), a = (n = s) && n.__esModule ? n : {
            default: n
        }, u = class extends Error {
            constructor(e, t, r) {
                if (!Number.isInteger(e))
                    throw new Error('"code" must be an integer.');
                if (!t || "string" != typeof t)
                    throw new Error('"message" must be a non-empty string.');
                super(t),
                this.code = e,
                void 0 !== r && (this.data = r)
            }
            serialize() {
                const e = {
                    code: this.code,
                    message: this.message
                };
                return void 0 !== this.data && (e.data = this.data,
                o.isPlainObject.call(void 0, this.data) && (e.data.cause = i.serializeCause.call(void 0, this.data.cause))),
                this.stack && (e.stack = this.stack),
                e
            }
            toString() {
                return a.default.call(void 0, this.serialize(), c, 2)
            }
        }
        ;
        function c(e, t) {
            if ("[Circular]" !== t)
                return t
        }
        r.JsonRpcError = u,
        r.EthereumProviderError = class extends u {
            constructor(e, t, r) {
                if (!function(e) {
                    return Number.isInteger(e) && e >= 1e3 && e <= 4999
                }(e))
                    throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
                super(e, t, r)
            }
        }
    }
    , {
        "./chunk-LIUXO4DW.js": 78,
        "@metamask/utils": 102,
        "fast-safe-stringify": 117
    }],
    76: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        r.errorCodes = {
            rpc: {
                invalidInput: -32e3,
                resourceNotFound: -32001,
                resourceUnavailable: -32002,
                transactionRejected: -32003,
                methodNotSupported: -32004,
                limitExceeded: -32005,
                parse: -32700,
                invalidRequest: -32600,
                methodNotFound: -32601,
                invalidParams: -32602,
                internal: -32603
            },
            provider: {
                userRejectedRequest: 4001,
                unauthorized: 4100,
                unsupportedMethod: 4200,
                disconnected: 4900,
                chainDisconnected: 4901
            }
        },
        r.errorValues = {
            "-32700": {
                standard: "JSON RPC 2.0",
                message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
            },
            "-32600": {
                standard: "JSON RPC 2.0",
                message: "The JSON sent is not a valid Request object."
            },
            "-32601": {
                standard: "JSON RPC 2.0",
                message: "The method does not exist / is not available."
            },
            "-32602": {
                standard: "JSON RPC 2.0",
                message: "Invalid method parameter(s)."
            },
            "-32603": {
                standard: "JSON RPC 2.0",
                message: "Internal JSON-RPC error."
            },
            "-32000": {
                standard: "EIP-1474",
                message: "Invalid input."
            },
            "-32001": {
                standard: "EIP-1474",
                message: "Resource not found."
            },
            "-32002": {
                standard: "EIP-1474",
                message: "Resource unavailable."
            },
            "-32003": {
                standard: "EIP-1474",
                message: "Transaction rejected."
            },
            "-32004": {
                standard: "EIP-1474",
                message: "Method not supported."
            },
            "-32005": {
                standard: "EIP-1474",
                message: "Request limit exceeded."
            },
            4001: {
                standard: "EIP-1193",
                message: "User rejected the request."
            },
            4100: {
                standard: "EIP-1193",
                message: "The requested account and/or method has not been authorized by the user."
            },
            4200: {
                standard: "EIP-1193",
                message: "The requested method is not supported by this Ethereum provider."
            },
            4900: {
                standard: "EIP-1193",
                message: "The provider is disconnected from all chains."
            },
            4901: {
                standard: "EIP-1193",
                message: "The provider is disconnected from the specified chain."
            }
        }
    }
    , {}],
    77: [function(e, t, r) {
        "use strict";
        function n(e, t) {
            return null != e ? e : t()
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var i = e("./chunk-77LIU62I.js")
          , o = e("./chunk-LIUXO4DW.js")
          , s = e("./chunk-FBHPY3A4.js")
          , a = {
            parse: e=>c(s.errorCodes.rpc.parse, e),
            invalidRequest: e=>c(s.errorCodes.rpc.invalidRequest, e),
            invalidParams: e=>c(s.errorCodes.rpc.invalidParams, e),
            methodNotFound: e=>c(s.errorCodes.rpc.methodNotFound, e),
            internal: e=>c(s.errorCodes.rpc.internal, e),
            server: e=>{
                if (!e || "object" != typeof e || Array.isArray(e))
                    throw new Error("Ethereum RPC Server errors must provide single object argument.");
                const {code: t} = e;
                if (!Number.isInteger(t) || t > -32005 || t < -32099)
                    throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
                return c(t, e)
            }
            ,
            invalidInput: e=>c(s.errorCodes.rpc.invalidInput, e),
            resourceNotFound: e=>c(s.errorCodes.rpc.resourceNotFound, e),
            resourceUnavailable: e=>c(s.errorCodes.rpc.resourceUnavailable, e),
            transactionRejected: e=>c(s.errorCodes.rpc.transactionRejected, e),
            methodNotSupported: e=>c(s.errorCodes.rpc.methodNotSupported, e),
            limitExceeded: e=>c(s.errorCodes.rpc.limitExceeded, e)
        }
          , u = {
            userRejectedRequest: e=>l(s.errorCodes.provider.userRejectedRequest, e),
            unauthorized: e=>l(s.errorCodes.provider.unauthorized, e),
            unsupportedMethod: e=>l(s.errorCodes.provider.unsupportedMethod, e),
            disconnected: e=>l(s.errorCodes.provider.disconnected, e),
            chainDisconnected: e=>l(s.errorCodes.provider.chainDisconnected, e),
            custom: e=>{
                if (!e || "object" != typeof e || Array.isArray(e))
                    throw new Error("Ethereum Provider custom errors must provide single object argument.");
                const {code: t, message: r, data: n} = e;
                if (!r || "string" != typeof r)
                    throw new Error('"message" must be a nonempty string');
                return new (0,
                i.EthereumProviderError)(t,r,n)
            }
        };
        function c(e, t) {
            const [r,s] = d(t);
            return new (0,
            i.JsonRpcError)(e,n(r, (()=>o.getMessageFromCode.call(void 0, e))),s)
        }
        function l(e, t) {
            const [r,s] = d(t);
            return new (0,
            i.EthereumProviderError)(e,n(r, (()=>o.getMessageFromCode.call(void 0, e))),s)
        }
        function d(e) {
            if (e) {
                if ("string" == typeof e)
                    return [e];
                if ("object" == typeof e && !Array.isArray(e)) {
                    const {message: t, data: r} = e;
                    if (t && "string" != typeof t)
                        throw new Error("Must specify string message.");
                    return [n(t, (()=>{}
                    )), r]
                }
            }
            return []
        }
        r.rpcErrors = a,
        r.providerErrors = u
    }
    , {
        "./chunk-77LIU62I.js": 75,
        "./chunk-FBHPY3A4.js": 76,
        "./chunk-LIUXO4DW.js": 78
    }],
    78: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("./chunk-FBHPY3A4.js")
          , i = e("@metamask/utils")
          , o = n.errorCodes.rpc.internal
          , s = {
            code: o,
            message: u(o)
        }
          , a = "Unspecified server error.";
        function u(e, t="Unspecified error message. This is a bug, please report it.") {
            if (c(e)) {
                const t = e.toString();
                if (i.hasProperty.call(void 0, n.errorValues, t))
                    return n.errorValues[t].message;
                if (function(e) {
                    return e >= -32099 && e <= -32e3
                }(e))
                    return a
            }
            return t
        }
        function c(e) {
            return Number.isInteger(e)
        }
        function l(e) {
            return Array.isArray(e) ? e.map((e=>i.isValidJson.call(void 0, e) ? e : i.isObject.call(void 0, e) ? d(e) : null)) : i.isObject.call(void 0, e) ? d(e) : i.isValidJson.call(void 0, e) ? e : null
        }
        function d(e) {
            return Object.getOwnPropertyNames(e).reduce(((t,r)=>{
                const n = e[r];
                return i.isValidJson.call(void 0, n) && (t[r] = n),
                t
            }
            ), {})
        }
        r.JSON_RPC_SERVER_ERROR_MESSAGE = a,
        r.getMessageFromCode = u,
        r.isValidCode = c,
        r.serializeError = function(e, {fallbackError: t=s, shouldIncludeStack: r=!0}={}) {
            if (!i.isJsonRpcError.call(void 0, t))
                throw new Error("Must provide fallback error with integer number code and string message.");
            const n = function(e, t) {
                if (e && "object" == typeof e && "serialize"in e && "function" == typeof e.serialize)
                    return e.serialize();
                if (i.isJsonRpcError.call(void 0, e))
                    return e;
                const r = l(e)
                  , n = {
                    ...t,
                    data: {
                        cause: r
                    }
                };
                return n
            }(e, t);
            return r || delete n.stack,
            n
        }
        ,
        r.serializeCause = l
    }
    , {
        "./chunk-FBHPY3A4.js": 76,
        "@metamask/utils": 102
    }],
    79: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("./chunk-I3KUC4QQ.js")
          , i = e("./chunk-77LIU62I.js")
          , o = e("./chunk-LIUXO4DW.js")
          , s = e("./chunk-FBHPY3A4.js");
        r.EthereumProviderError = i.EthereumProviderError,
        r.JsonRpcError = i.JsonRpcError,
        r.errorCodes = s.errorCodes,
        r.getMessageFromCode = o.getMessageFromCode,
        r.providerErrors = n.providerErrors,
        r.rpcErrors = n.rpcErrors,
        r.serializeCause = o.serializeCause,
        r.serializeError = o.serializeError
    }
    , {
        "./chunk-77LIU62I.js": 75,
        "./chunk-FBHPY3A4.js": 76,
        "./chunk-I3KUC4QQ.js": 77,
        "./chunk-LIUXO4DW.js": 78
    }],
    80: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        const n = e("events");
        function i(e, t, r) {
            try {
                Reflect.apply(e, t, r)
            } catch (e) {
                setTimeout((()=>{
                    throw e
                }
                ))
            }
        }
        class o extends n.EventEmitter {
            emit(e, ...t) {
                let r = "error" === e;
                const n = this._events;
                if (void 0 !== n)
                    r = r && void 0 === n.error;
                else if (!r)
                    return !1;
                if (r) {
                    let e;
                    if (t.length > 0 && ([e] = t),
                    e instanceof Error)
                        throw e;
                    const r = new Error("Unhandled error." + (e ? ` (${e.message})` : ""));
                    throw r.context = e,
                    r
                }
                const o = n[e];
                if (void 0 === o)
                    return !1;
                if ("function" == typeof o)
                    i(o, this, t);
                else {
                    const e = o.length
                      , r = function(e) {
                        const t = e.length
                          , r = new Array(t);
                        for (let n = 0; n < t; n += 1)
                            r[n] = e[n];
                        return r
                    }(o);
                    for (let n = 0; n < e; n += 1)
                        i(r[n], this, t)
                }
                return !0
            }
        }
        r.default = o
    }
    , {
        events: 115
    }],
    81: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n, i = e("debug"), o = ((n = i) && n.__esModule ? n : {
            default: n
        }).default.call(void 0, "metamask");
        r.createProjectLogger = function(e) {
            return o.extend(e)
        }
        ,
        r.createModuleLogger = function(e, t) {
            return e.extend(t)
        }
    }
    , {
        debug: 113
    }],
    82: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = (e,t,r)=>{
            if (!t.has(e))
                throw TypeError("Cannot " + r)
        }
        ;
        r.__privateGet = (e,t,r)=>(n(e, t, "read from private field"),
        r ? r.call(e) : t.get(e)),
        r.__privateAdd = (e,t,r)=>{
            if (t.has(e))
                throw TypeError("Cannot add the same private member more than once");
            t instanceof WeakSet ? t.add(e) : t.set(e, r)
        }
        ,
        r.__privateSet = (e,t,r,i)=>(n(e, t, "write to private field"),
        i ? i.call(e, r) : t.set(e, r),
        r)
    }
    , {}],
    83: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("./chunk-6ZDHSOUV.js")
          , i = e("semver")
          , o = e("superstruct")
          , s = o.refine.call(void 0, o.string.call(void 0), "Version", (e=>null !== i.valid.call(void 0, e) || `Expected SemVer version, got "${e}"`))
          , a = o.refine.call(void 0, o.string.call(void 0), "Version range", (e=>null !== i.validRange.call(void 0, e) || `Expected SemVer range, got "${e}"`));
        r.VersionStruct = s,
        r.VersionRangeStruct = a,
        r.isValidSemVerVersion = function(e) {
            return o.is.call(void 0, e, s)
        }
        ,
        r.isValidSemVerRange = function(e) {
            return o.is.call(void 0, e, a)
        }
        ,
        r.assertIsSemVerVersion = function(e) {
            n.assertStruct.call(void 0, e, s)
        }
        ,
        r.assertIsSemVerRange = function(e) {
            n.assertStruct.call(void 0, e, a)
        }
        ,
        r.gtVersion = function(e, t) {
            return i.gt.call(void 0, e, t)
        }
        ,
        r.gtRange = function(e, t) {
            return i.gtr.call(void 0, e, t)
        }
        ,
        r.satisfiesVersionRange = function(e, t) {
            return i.satisfies.call(void 0, e, t, {
                includePrerelease: !0
            })
        }
    }
    , {
        "./chunk-6ZDHSOUV.js": 87,
        semver: 173,
        superstruct: 192
    }],
    84: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = (e=>(e[e.Millisecond = 1] = "Millisecond",
        e[e.Second = 1e3] = "Second",
        e[e.Minute = 6e4] = "Minute",
        e[e.Hour = 36e5] = "Hour",
        e[e.Day = 864e5] = "Day",
        e[e.Week = 6048e5] = "Week",
        e[e.Year = 31536e6] = "Year",
        e))(n || {})
          , i = (e,t)=>{
            if (!(e=>Number.isInteger(e) && e >= 0)(e))
                throw new Error(`"${t}" must be a non-negative integer. Received: "${e}".`)
        }
        ;
        r.Duration = n,
        r.inMilliseconds = function(e, t) {
            return i(e, "count"),
            e * t
        }
        ,
        r.timeSince = function(e) {
            return i(e, "timestamp"),
            Date.now() - e
        }
    }
    , {}],
    85: [function(e, t, r) {}
    , {}],
    86: [function(e, t, r) {
        "use strict";
        function n(e, t) {
            return null != e ? e : t()
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var i = e("./chunk-6ZDHSOUV.js")
          , o = e("superstruct");
        r.base64 = (e,t={})=>{
            const r = n(t.paddingRequired, (()=>!1))
              , s = n(t.characterSet, (()=>"base64"));
            let a, u;
            return "base64" === s ? a = String.raw`[A-Za-z0-9+\/]` : (i.assert.call(void 0, "base64url" === s),
            a = String.raw`[-_A-Za-z0-9]`),
            u = r ? new RegExp(`^(?:${a}{4})*(?:${a}{3}=|${a}{2}==)?$`,"u") : new RegExp(`^(?:${a}{4})*(?:${a}{2,3}|${a}{3}=|${a}{2}==)?$`,"u"),
            o.pattern.call(void 0, e, u)
        }
    }
    , {
        "./chunk-6ZDHSOUV.js": 87,
        superstruct: 192
    }],
    87: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("./chunk-IZC266HS.js")
          , i = e("superstruct");
        function o(e, t) {
            return Boolean("string" == typeof function(e) {
                let t, r = e[0], n = 1;
                for (; n < e.length; ) {
                    const i = e[n]
                      , o = e[n + 1];
                    if (n += 2,
                    ("optionalAccess" === i || "optionalCall" === i) && null == r)
                        return;
                    "access" === i || "optionalAccess" === i ? (t = r,
                    r = o(r)) : "call" !== i && "optionalCall" !== i || (r = o(((...e)=>r.call(t, ...e))),
                    t = void 0)
                }
                return r
            }([e, "optionalAccess", e=>e.prototype, "optionalAccess", e=>e.constructor, "optionalAccess", e=>e.name])) ? new e({
                message: t
            }) : e({
                message: t
            })
        }
        var s = class extends Error {
            constructor(e) {
                super(e.message),
                this.code = "ERR_ASSERTION"
            }
        }
        ;
        r.AssertionError = s,
        r.assert = function(e, t="Assertion failed.", r=s) {
            if (!e) {
                if (t instanceof Error)
                    throw t;
                throw o(r, t)
            }
        }
        ,
        r.assertStruct = function(e, t, r="Assertion failed", a=s) {
            try {
                i.assert.call(void 0, e, t)
            } catch (e) {
                throw o(a, `${r}: ${function(e) {
                    return n.getErrorMessage.call(void 0, e).replace(/\.$/u, "")
                }(e)}.`)
            }
        }
        ,
        r.assertExhaustive = function(e) {
            throw new Error("Invalid branch reached. Should be detected during compilation.")
        }
    }
    , {
        "./chunk-IZC266HS.js": 92,
        superstruct: 192
    }],
    88: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.createDeferredPromise = function({suppressUnhandledRejection: e=!1}={}) {
            let t, r;
            const n = new Promise(((e,n)=>{
                t = e,
                r = n
            }
            ));
            return e && n.catch((e=>{}
            )),
            {
                promise: n,
                resolve: t,
                reject: r
            }
        }
    }
    , {}],
    89: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("./chunk-QEPVHEP7.js")
          , i = e("./chunk-6ZDHSOUV.js")
          , o = e("superstruct")
          , s = o.union.call(void 0, [o.number.call(void 0), o.bigint.call(void 0), o.string.call(void 0), n.StrictHexStruct])
          , a = o.coerce.call(void 0, o.number.call(void 0), s, Number)
          , u = o.coerce.call(void 0, o.bigint.call(void 0), s, BigInt)
          , c = (o.union.call(void 0, [n.StrictHexStruct, o.instance.call(void 0, Uint8Array)]),
        o.coerce.call(void 0, o.instance.call(void 0, Uint8Array), o.union.call(void 0, [n.StrictHexStruct]), n.hexToBytes))
          , l = o.coerce.call(void 0, n.StrictHexStruct, o.instance.call(void 0, Uint8Array), n.bytesToHex);
        r.createNumber = function(e) {
            try {
                const t = o.create.call(void 0, e, a);
                return i.assert.call(void 0, Number.isFinite(t), `Expected a number-like value, got "${e}".`),
                t
            } catch (t) {
                if (t instanceof o.StructError)
                    throw new Error(`Expected a number-like value, got "${e}".`);
                throw t
            }
        }
        ,
        r.createBigInt = function(e) {
            try {
                return o.create.call(void 0, e, u)
            } catch (e) {
                if (e instanceof o.StructError)
                    throw new Error(`Expected a number-like value, got "${String(e.value)}".`);
                throw e
            }
        }
        ,
        r.createBytes = function(e) {
            if ("string" == typeof e && "0x" === e.toLowerCase())
                return new Uint8Array;
            try {
                return o.create.call(void 0, e, c)
            } catch (e) {
                if (e instanceof o.StructError)
                    throw new Error(`Expected a bytes-like value, got "${String(e.value)}".`);
                throw e
            }
        }
        ,
        r.createHex = function(e) {
            if (e instanceof Uint8Array && 0 === e.length || "string" == typeof e && "0x" === e.toLowerCase())
                return "0x";
            try {
                return o.create.call(void 0, e, l)
            } catch (e) {
                if (e instanceof o.StructError)
                    throw new Error(`Expected a bytes-like value, got "${String(e.value)}".`);
                throw e
            }
        }
    }
    , {
        "./chunk-6ZDHSOUV.js": 87,
        "./chunk-QEPVHEP7.js": 95,
        superstruct: 192
    }],
    90: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("./chunk-6NZW4WK4.js")
          , i = e("superstruct")
          , o = i.size.call(void 0, n.base64.call(void 0, i.string.call(void 0), {
            paddingRequired: !0
        }), 44, 44);
        r.ChecksumStruct = o
    }
    , {
        "./chunk-6NZW4WK4.js": 86,
        superstruct: 192
    }],
    91: [function(e, t, r) {}
    , {}],
    92: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("./chunk-QVEKZRZ2.js")
          , i = e("pony-cause");
        function o(e) {
            return "object" == typeof e && null !== e && "code"in e
        }
        function s(e) {
            return "object" == typeof e && null !== e && "message"in e
        }
        r.isErrorWithCode = o,
        r.isErrorWithMessage = s,
        r.isErrorWithStack = function(e) {
            return "object" == typeof e && null !== e && "stack"in e
        }
        ,
        r.getErrorMessage = function(e) {
            return s(e) && "string" == typeof e.message ? e.message : n.isNullOrUndefined.call(void 0, e) ? "" : String(e)
        }
        ,
        r.wrapError = function(e, t) {
            if ((r = e)instanceof Error || n.isObject.call(void 0, r) && "Error" === r.constructor.name) {
                let r;
                return r = 2 === Error.length ? new Error(t,{
                    cause: e
                }) : new (0,
                i.ErrorWithCause)(t,{
                    cause: e
                }),
                o(e) && (r.code = e.code),
                r
            }
            var r;
            return t.length > 0 ? new Error(`${String(e)}: ${t}`) : new Error(String(e))
        }
    }
    , {
        "./chunk-QVEKZRZ2.js": 96,
        "pony-cause": 141
    }],
    93: [function(e, t, r) {}
    , {}],
    94: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("./chunk-6ZDHSOUV.js")
          , i = e("./chunk-QVEKZRZ2.js")
          , o = e("superstruct")
          , s = e=>o.object.call(void 0, e);
        function a({path: e, branch: t}) {
            const r = e[e.length - 1];
            return i.hasProperty.call(void 0, t[t.length - 2], r)
        }
        function u(e) {
            return new (0,
            o.Struct)({
                ...e,
                type: `optional ${e.type}`,
                validator: (t,r)=>!a(r) || e.validator(t, r),
                refiner: (t,r)=>!a(r) || e.refiner(t, r)
            })
        }
        var c = o.union.call(void 0, [o.literal.call(void 0, null), o.boolean.call(void 0), o.define.call(void 0, "finite number", (e=>o.is.call(void 0, e, o.number.call(void 0)) && Number.isFinite(e))), o.string.call(void 0), o.array.call(void 0, o.lazy.call(void 0, (()=>c))), o.record.call(void 0, o.string.call(void 0), o.lazy.call(void 0, (()=>c)))])
          , l = o.coerce.call(void 0, c, o.any.call(void 0), (e=>(n.assertStruct.call(void 0, e, c),
        JSON.parse(JSON.stringify(e, ((e,t)=>{
            if ("__proto__" !== e && "constructor" !== e)
                return t
        }
        ))))));
        function d(e) {
            return o.create.call(void 0, e, l)
        }
        var f = o.literal.call(void 0, "2.0")
          , h = o.nullable.call(void 0, o.union.call(void 0, [o.number.call(void 0), o.string.call(void 0)]))
          , p = s({
            code: o.integer.call(void 0),
            message: o.string.call(void 0),
            data: u(l),
            stack: u(o.string.call(void 0))
        })
          , g = o.union.call(void 0, [o.record.call(void 0, o.string.call(void 0), l), o.array.call(void 0, l)])
          , b = s({
            id: h,
            jsonrpc: f,
            method: o.string.call(void 0),
            params: u(g)
        })
          , m = s({
            jsonrpc: f,
            method: o.string.call(void 0),
            params: u(g)
        });
        var y = o.object.call(void 0, {
            id: h,
            jsonrpc: f,
            result: o.optional.call(void 0, o.unknown.call(void 0)),
            error: o.optional.call(void 0, p)
        })
          , v = s({
            id: h,
            jsonrpc: f,
            result: l
        })
          , w = s({
            id: h,
            jsonrpc: f,
            error: p
        })
          , _ = o.union.call(void 0, [v, w]);
        r.object = s,
        r.exactOptional = u,
        r.UnsafeJsonStruct = c,
        r.JsonStruct = l,
        r.isValidJson = function(e) {
            try {
                return d(e),
                !0
            } catch (e) {
                return !1
            }
        }
        ,
        r.getSafeJson = d,
        r.getJsonSize = function(e) {
            n.assertStruct.call(void 0, e, l, "Invalid JSON value");
            const t = JSON.stringify(e);
            return (new TextEncoder).encode(t).byteLength
        }
        ,
        r.jsonrpc2 = "2.0",
        r.JsonRpcVersionStruct = f,
        r.JsonRpcIdStruct = h,
        r.JsonRpcErrorStruct = p,
        r.JsonRpcParamsStruct = g,
        r.JsonRpcRequestStruct = b,
        r.JsonRpcNotificationStruct = m,
        r.isJsonRpcNotification = function(e) {
            return o.is.call(void 0, e, m)
        }
        ,
        r.assertIsJsonRpcNotification = function(e, t) {
            n.assertStruct.call(void 0, e, m, "Invalid JSON-RPC notification", t)
        }
        ,
        r.isJsonRpcRequest = function(e) {
            return o.is.call(void 0, e, b)
        }
        ,
        r.assertIsJsonRpcRequest = function(e, t) {
            n.assertStruct.call(void 0, e, b, "Invalid JSON-RPC request", t)
        }
        ,
        r.PendingJsonRpcResponseStruct = y,
        r.JsonRpcSuccessStruct = v,
        r.JsonRpcFailureStruct = w,
        r.JsonRpcResponseStruct = _,
        r.isPendingJsonRpcResponse = function(e) {
            return o.is.call(void 0, e, y)
        }
        ,
        r.assertIsPendingJsonRpcResponse = function(e, t) {
            n.assertStruct.call(void 0, e, y, "Invalid pending JSON-RPC response", t)
        }
        ,
        r.isJsonRpcResponse = function(e) {
            return o.is.call(void 0, e, _)
        }
        ,
        r.assertIsJsonRpcResponse = function(e, t) {
            n.assertStruct.call(void 0, e, _, "Invalid JSON-RPC response", t)
        }
        ,
        r.isJsonRpcSuccess = function(e) {
            return o.is.call(void 0, e, v)
        }
        ,
        r.assertIsJsonRpcSuccess = function(e, t) {
            n.assertStruct.call(void 0, e, v, "Invalid JSON-RPC success response", t)
        }
        ,
        r.isJsonRpcFailure = function(e) {
            return o.is.call(void 0, e, w)
        }
        ,
        r.assertIsJsonRpcFailure = function(e, t) {
            n.assertStruct.call(void 0, e, w, "Invalid JSON-RPC failure response", t)
        }
        ,
        r.isJsonRpcError = function(e) {
            return o.is.call(void 0, e, p)
        }
        ,
        r.assertIsJsonRpcError = function(e, t) {
            n.assertStruct.call(void 0, e, p, "Invalid JSON-RPC error", t)
        }
        ,
        r.getJsonRpcIdValidator = function(e) {
            const {permitEmptyString: t, permitFractions: r, permitNull: n} = {
                permitEmptyString: !0,
                permitFractions: !1,
                permitNull: !0,
                ...e
            };
            return e=>Boolean("number" == typeof e && (r || Number.isInteger(e)) || "string" == typeof e && (t || e.length > 0) || n && null === e)
        }
    }
    , {
        "./chunk-6ZDHSOUV.js": 87,
        "./chunk-QVEKZRZ2.js": 96,
        superstruct: 192
    }],
    95: [function(e, t, r) {
        (function(t) {
            (function() {
                "use strict";
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var n = e("./chunk-6ZDHSOUV.js")
                  , i = e("@noble/hashes/sha3")
                  , o = e("superstruct")
                  , s = e("@scure/base")
                  , a = 48
                  , u = 58
                  , c = 87;
                var l = function() {
                    const e = [];
                    return ()=>{
                        if (0 === e.length)
                            for (let t = 0; t < 256; t++)
                                e.push(t.toString(16).padStart(2, "0"));
                        return e
                    }
                }();
                function d(e) {
                    return e instanceof Uint8Array
                }
                function f(e) {
                    n.assert.call(void 0, d(e), "Value must be a Uint8Array.")
                }
                function h(e) {
                    if (f(e),
                    0 === e.length)
                        return "0x";
                    const t = l()
                      , r = new Array(e.length);
                    for (let n = 0; n < e.length; n++)
                        r[n] = t[e[n]];
                    return C(r.join(""))
                }
                function p(e) {
                    f(e);
                    const t = h(e);
                    return BigInt(t)
                }
                function g(e) {
                    if ("0x" === function(e) {
                        let t, r = e[0], n = 1;
                        for (; n < e.length; ) {
                            const i = e[n]
                              , o = e[n + 1];
                            if (n += 2,
                            ("optionalAccess" === i || "optionalCall" === i) && null == r)
                                return;
                            "access" === i || "optionalAccess" === i ? (t = r,
                            r = o(r)) : "call" !== i && "optionalCall" !== i || (r = o(((...e)=>r.call(t, ...e))),
                            t = void 0)
                        }
                        return r
                    }([e, "optionalAccess", e=>e.toLowerCase, "optionalCall", e=>e()]))
                        return new Uint8Array;
                    j(e);
                    const t = x(e).toLowerCase()
                      , r = t.length % 2 == 0 ? t : `0${t}`
                      , n = new Uint8Array(r.length / 2);
                    for (let e = 0; e < n.length; e++) {
                        const t = r.charCodeAt(2 * e)
                          , i = r.charCodeAt(2 * e + 1)
                          , o = t - (t < u ? a : c)
                          , s = i - (i < u ? a : c);
                        n[e] = 16 * o + s
                    }
                    return n
                }
                function b(e) {
                    n.assert.call(void 0, "bigint" == typeof e, "Value must be a bigint."),
                    n.assert.call(void 0, e >= BigInt(0), "Value must be a non-negative bigint.");
                    return g(e.toString(16))
                }
                function m(e) {
                    n.assert.call(void 0, "number" == typeof e, "Value must be a number."),
                    n.assert.call(void 0, e >= 0, "Value must be a non-negative number."),
                    n.assert.call(void 0, Number.isSafeInteger(e), "Value is not a safe integer. Use `bigIntToBytes` instead.");
                    return g(e.toString(16))
                }
                function y(e) {
                    return n.assert.call(void 0, "string" == typeof e, "Value must be a string."),
                    (new TextEncoder).encode(e)
                }
                function v(e) {
                    if ("bigint" == typeof e)
                        return b(e);
                    if ("number" == typeof e)
                        return m(e);
                    if ("string" == typeof e)
                        return e.startsWith("0x") ? g(e) : y(e);
                    if (d(e))
                        return e;
                    throw new TypeError(`Unsupported value type: "${typeof e}".`)
                }
                var w = o.pattern.call(void 0, o.string.call(void 0), /^(?:0x)?[0-9a-f]+$/iu)
                  , _ = o.pattern.call(void 0, o.string.call(void 0), /^0x[0-9a-f]+$/iu)
                  , E = o.pattern.call(void 0, o.string.call(void 0), /^0x[0-9a-f]{40}$/u)
                  , S = o.pattern.call(void 0, o.string.call(void 0), /^0x[0-9a-fA-F]{40}$/u);
                function M(e) {
                    return o.is.call(void 0, e, w)
                }
                function R(e) {
                    return o.is.call(void 0, e, _)
                }
                function j(e) {
                    n.assert.call(void 0, M(e), "Value must be a hexadecimal string.")
                }
                function I(e) {
                    n.assert.call(void 0, o.is.call(void 0, e, S), "Invalid hex address.");
                    const t = x(e.toLowerCase())
                      , r = x(h(i.keccak_256.call(void 0, t)));
                    return `0x${t.split("").map(((e,t)=>{
                        const i = r[t];
                        return n.assert.call(void 0, o.is.call(void 0, i, o.string.call(void 0)), "Hash shorter than address."),
                        parseInt(i, 16) > 7 ? e.toUpperCase() : e
                    }
                    )).join("")}`
                }
                function k(e) {
                    return !!o.is.call(void 0, e, S) && I(e) === e
                }
                function C(e) {
                    return e.startsWith("0x") ? e : e.startsWith("0X") ? `0x${e.substring(2)}` : `0x${e}`
                }
                function x(e) {
                    return e.startsWith("0x") || e.startsWith("0X") ? e.substring(2) : e
                }
                r.HexStruct = w,
                r.StrictHexStruct = _,
                r.HexAddressStruct = E,
                r.HexChecksumAddressStruct = S,
                r.isHexString = M,
                r.isStrictHexString = R,
                r.assertIsHexString = j,
                r.assertIsStrictHexString = function(e) {
                    n.assert.call(void 0, R(e), 'Value must be a hexadecimal string, starting with "0x".')
                }
                ,
                r.isValidHexAddress = function(e) {
                    return o.is.call(void 0, e, E) || k(e)
                }
                ,
                r.getChecksumAddress = I,
                r.isValidChecksumAddress = k,
                r.add0x = C,
                r.remove0x = x,
                r.isBytes = d,
                r.assertIsBytes = f,
                r.bytesToHex = h,
                r.bytesToBigInt = p,
                r.bytesToSignedBigInt = function(e) {
                    f(e);
                    let t = BigInt(0);
                    for (const r of e)
                        t = (t << BigInt(8)) + BigInt(r);
                    return BigInt.asIntN(8 * e.length, t)
                }
                ,
                r.bytesToNumber = function(e) {
                    f(e);
                    const t = p(e);
                    return n.assert.call(void 0, t <= BigInt(Number.MAX_SAFE_INTEGER), "Number is not a safe integer. Use `bytesToBigInt` instead."),
                    Number(t)
                }
                ,
                r.bytesToString = function(e) {
                    return f(e),
                    (new TextDecoder).decode(e)
                }
                ,
                r.bytesToBase64 = function(e) {
                    return f(e),
                    s.base64.encode(e)
                }
                ,
                r.hexToBytes = g,
                r.bigIntToBytes = b,
                r.signedBigIntToBytes = function(e, t) {
                    n.assert.call(void 0, "bigint" == typeof e, "Value must be a bigint."),
                    n.assert.call(void 0, "number" == typeof t, "Byte length must be a number."),
                    n.assert.call(void 0, t > 0, "Byte length must be greater than 0."),
                    n.assert.call(void 0, function(e, t) {
                        n.assert.call(void 0, t > 0);
                        const r = e >> BigInt(31);
                        return !((~e & r) + (e & ~r) >> BigInt(8 * t - 1))
                    }(e, t), "Byte length is too small to represent the given value.");
                    let r = e;
                    const i = new Uint8Array(t);
                    for (let e = 0; e < i.length; e++)
                        i[e] = Number(BigInt.asUintN(8, r)),
                        r >>= BigInt(8);
                    return i.reverse()
                }
                ,
                r.numberToBytes = m,
                r.stringToBytes = y,
                r.base64ToBytes = function(e) {
                    return n.assert.call(void 0, "string" == typeof e, "Value must be a string."),
                    s.base64.decode(e)
                }
                ,
                r.valueToBytes = v,
                r.concatBytes = function(e) {
                    const t = new Array(e.length);
                    let r = 0;
                    for (let n = 0; n < e.length; n++) {
                        const i = v(e[n]);
                        t[n] = i,
                        r += i.length
                    }
                    const n = new Uint8Array(r);
                    for (let e = 0, r = 0; e < t.length; e++)
                        n.set(t[e], r),
                        r += t[e].length;
                    return n
                }
                ,
                r.createDataView = function(e) {
                    if (void 0 !== t && e instanceof t) {
                        const t = e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
                        return new DataView(t)
                    }
                    return new DataView(e.buffer,e.byteOffset,e.byteLength)
                }
            }
            ).call(this)
        }
        ).call(this, e("buffer").Buffer)
    }
    , {
        "./chunk-6ZDHSOUV.js": 87,
        "@noble/hashes/sha3": 106,
        "@scure/base": 108,
        buffer: 111,
        superstruct: 192
    }],
    96: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = (e=>(e[e.Null = 4] = "Null",
        e[e.Comma = 1] = "Comma",
        e[e.Wrapper = 1] = "Wrapper",
        e[e.True = 4] = "True",
        e[e.False = 5] = "False",
        e[e.Quote = 1] = "Quote",
        e[e.Colon = 1] = "Colon",
        e[e.Date = 24] = "Date",
        e))(n || {})
          , i = /"|\\|\n|\r|\t/gu;
        function o(e) {
            return e.charCodeAt(0) <= 127
        }
        r.isNonEmptyArray = function(e) {
            return Array.isArray(e) && e.length > 0
        }
        ,
        r.isNullOrUndefined = function(e) {
            return null == e
        }
        ,
        r.isObject = function(e) {
            return Boolean(e) && "object" == typeof e && !Array.isArray(e)
        }
        ,
        r.hasProperty = (e,t)=>Object.hasOwnProperty.call(e, t),
        r.getKnownPropertyNames = function(e) {
            return Object.getOwnPropertyNames(e)
        }
        ,
        r.JsonSize = n,
        r.ESCAPE_CHARACTERS_REGEXP = i,
        r.isPlainObject = function(e) {
            if ("object" != typeof e || null === e)
                return !1;
            try {
                let t = e;
                for (; null !== Object.getPrototypeOf(t); )
                    t = Object.getPrototypeOf(t);
                return Object.getPrototypeOf(e) === t
            } catch (e) {
                return !1
            }
        }
        ,
        r.isASCII = o,
        r.calculateStringSize = function(e) {
            return e.split("").reduce(((e,t)=>o(t) ? e + 1 : e + 2), 0) + (t = e.match(i),
            r = ()=>[],
            null != t ? t : r()).length;
            var t, r
        }
        ,
        r.calculateNumberSize = function(e) {
            return e.toString().length
        }
    }
    , {}],
    97: [function(e, t, r) {}
    , {}],
    98: [function(e, t, r) {}
    , {}],
    99: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = e("./chunk-QEPVHEP7.js")
          , i = e("./chunk-6ZDHSOUV.js");
        r.numberToHex = e=>(i.assert.call(void 0, "number" == typeof e, "Value must be a number."),
        i.assert.call(void 0, e >= 0, "Value must be a non-negative number."),
        i.assert.call(void 0, Number.isSafeInteger(e), "Value is not a safe integer. Use `bigIntToHex` instead."),
        n.add0x.call(void 0, e.toString(16))),
        r.bigIntToHex = e=>(i.assert.call(void 0, "bigint" == typeof e, "Value must be a bigint."),
        i.assert.call(void 0, e >= 0, "Value must be a non-negative bigint."),
        n.add0x.call(void 0, e.toString(16))),
        r.hexToNumber = e=>{
            n.assertIsHexString.call(void 0, e);
            const t = parseInt(e, 16);
            return i.assert.call(void 0, Number.isSafeInteger(t), "Value is not a safe integer. Use `hexToBigInt` instead."),
            t
        }
        ,
        r.hexToBigInt = e=>(n.assertIsHexString.call(void 0, e),
        BigInt(n.add0x.call(void 0, e)))
    }
    , {
        "./chunk-6ZDHSOUV.js": 87,
        "./chunk-QEPVHEP7.js": 95
    }],
    100: [function(e, t, r) {
        "use strict";
        function n(e) {
            let t, r = e[0], n = 1;
            for (; n < e.length; ) {
                const i = e[n]
                  , o = e[n + 1];
                if (n += 2,
                ("optionalAccess" === i || "optionalCall" === i) && null == r)
                    return;
                "access" === i || "optionalAccess" === i ? (t = r,
                r = o(r)) : "call" !== i && "optionalCall" !== i || (r = o(((...e)=>r.call(t, ...e))),
                t = void 0)
            }
            return r
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var i = e("superstruct")
          , o = /^(?<namespace>[-a-z0-9]{3,8}):(?<reference>[-_a-zA-Z0-9]{1,32})$/u
          , s = /^[-a-z0-9]{3,8}$/u
          , a = /^[-_a-zA-Z0-9]{1,32}$/u
          , u = /^(?<chainId>(?<namespace>[-a-z0-9]{3,8}):(?<reference>[-_a-zA-Z0-9]{1,32})):(?<accountAddress>[-.%a-zA-Z0-9]{1,128})$/u
          , c = /^[-.%a-zA-Z0-9]{1,128}$/u
          , l = i.pattern.call(void 0, i.string.call(void 0), o)
          , d = i.pattern.call(void 0, i.string.call(void 0), s)
          , f = i.pattern.call(void 0, i.string.call(void 0), a)
          , h = i.pattern.call(void 0, i.string.call(void 0), u)
          , p = i.pattern.call(void 0, i.string.call(void 0), c)
          , g = (e=>(e.Eip155 = "eip155",
        e))(g || {});
        function b(e) {
            return i.is.call(void 0, e, d)
        }
        function m(e) {
            return i.is.call(void 0, e, f)
        }
        r.CAIP_CHAIN_ID_REGEX = o,
        r.CAIP_NAMESPACE_REGEX = s,
        r.CAIP_REFERENCE_REGEX = a,
        r.CAIP_ACCOUNT_ID_REGEX = u,
        r.CAIP_ACCOUNT_ADDRESS_REGEX = c,
        r.CaipChainIdStruct = l,
        r.CaipNamespaceStruct = d,
        r.CaipReferenceStruct = f,
        r.CaipAccountIdStruct = h,
        r.CaipAccountAddressStruct = p,
        r.KnownCaipNamespace = g,
        r.isCaipChainId = function(e) {
            return i.is.call(void 0, e, l)
        }
        ,
        r.isCaipNamespace = b,
        r.isCaipReference = m,
        r.isCaipAccountId = function(e) {
            return i.is.call(void 0, e, h)
        }
        ,
        r.isCaipAccountAddress = function(e) {
            return i.is.call(void 0, e, p)
        }
        ,
        r.parseCaipChainId = function(e) {
            const t = o.exec(e);
            if (!n([t, "optionalAccess", e=>e.groups]))
                throw new Error("Invalid CAIP chain ID.");
            return {
                namespace: t.groups.namespace,
                reference: t.groups.reference
            }
        }
        ,
        r.parseCaipAccountId = function(e) {
            const t = u.exec(e);
            if (!n([t, "optionalAccess", e=>e.groups]))
                throw new Error("Invalid CAIP account ID.");
            return {
                address: t.groups.accountAddress,
                chainId: t.groups.chainId,
                chain: {
                    namespace: t.groups.namespace,
                    reference: t.groups.reference
                }
            }
        }
        ,
        r.toCaipChainId = function(e, t) {
            if (!b(e))
                throw new Error(`Invalid "namespace", must match: ${s.toString()}`);
            if (!m(t))
                throw new Error(`Invalid "reference", must match: ${a.toString()}`);
            return `${e}:${t}`
        }
    }
    , {
        superstruct: 192
    }],
    101: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n, i, o = e("./chunk-3W5G4CYI.js"), s = class {
            constructor(e) {
                o.__privateAdd.call(void 0, this, n, void 0),
                o.__privateSet.call(void 0, this, n, new Map(e)),
                Object.freeze(this)
            }
            get size() {
                return o.__privateGet.call(void 0, this, n).size
            }
            [Symbol.iterator]() {
                return o.__privateGet.call(void 0, this, n)[Symbol.iterator]()
            }
            entries() {
                return o.__privateGet.call(void 0, this, n).entries()
            }
            forEach(e, t) {
                return o.__privateGet.call(void 0, this, n).forEach(((r,n,i)=>e.call(t, r, n, this)))
            }
            get(e) {
                return o.__privateGet.call(void 0, this, n).get(e)
            }
            has(e) {
                return o.__privateGet.call(void 0, this, n).has(e)
            }
            keys() {
                return o.__privateGet.call(void 0, this, n).keys()
            }
            values() {
                return o.__privateGet.call(void 0, this, n).values()
            }
            toString() {
                return `FrozenMap(${this.size}) {${this.size > 0 ? ` ${[...this.entries()].map((([e,t])=>`${String(e)} => ${String(t)}`)).join(", ")} ` : ""}}`
            }
        }
        ;
        n = new WeakMap;
        var a = class {
            constructor(e) {
                o.__privateAdd.call(void 0, this, i, void 0),
                o.__privateSet.call(void 0, this, i, new Set(e)),
                Object.freeze(this)
            }
            get size() {
                return o.__privateGet.call(void 0, this, i).size
            }
            [Symbol.iterator]() {
                return o.__privateGet.call(void 0, this, i)[Symbol.iterator]()
            }
            entries() {
                return o.__privateGet.call(void 0, this, i).entries()
            }
            forEach(e, t) {
                return o.__privateGet.call(void 0, this, i).forEach(((r,n,i)=>e.call(t, r, n, this)))
            }
            has(e) {
                return o.__privateGet.call(void 0, this, i).has(e)
            }
            keys() {
                return o.__privateGet.call(void 0, this, i).keys()
            }
            values() {
                return o.__privateGet.call(void 0, this, i).values()
            }
            toString() {
                return `FrozenSet(${this.size}) {${this.size > 0 ? ` ${[...this.values()].map((e=>String(e))).join(", ")} ` : ""}}`
            }
        }
        ;
        i = new WeakMap,
        Object.freeze(s),
        Object.freeze(s.prototype),
        Object.freeze(a),
        Object.freeze(a.prototype),
        r.FrozenMap = s,
        r.FrozenSet = a
    }
    , {
        "./chunk-3W5G4CYI.js": 82
    }],
    102: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        e("./chunk-5AVWINSB.js");
        var n = e("./chunk-VFXTVNXN.js");
        e("./chunk-LC2CRSWD.js");
        var i = e("./chunk-C6HGFEYL.js")
          , o = e("./chunk-4RMX5YWE.js");
        e("./chunk-UOTVU7OQ.js");
        var s = e("./chunk-4D6XQBHA.js")
          , a = e("./chunk-OLLG4H35.js");
        e("./chunk-RKRGAFXY.js");
        var u = e("./chunk-2LBGT4GH.js")
          , c = e("./chunk-YWAID473.js")
          , l = e("./chunk-E4C7EW4R.js")
          , d = e("./chunk-6NZW4WK4.js")
          , f = e("./chunk-DHVKFDHQ.js")
          , h = e("./chunk-QEPVHEP7.js")
          , p = e("./chunk-6ZDHSOUV.js")
          , g = e("./chunk-IZC266HS.js")
          , b = e("./chunk-QVEKZRZ2.js")
          , m = e("./chunk-Z2RGWDD7.js");
        e("./chunk-3W5G4CYI.js"),
        e("./chunk-EQMZL4XU.js"),
        r.AssertionError = p.AssertionError,
        r.CAIP_ACCOUNT_ADDRESS_REGEX = c.CAIP_ACCOUNT_ADDRESS_REGEX,
        r.CAIP_ACCOUNT_ID_REGEX = c.CAIP_ACCOUNT_ID_REGEX,
        r.CAIP_CHAIN_ID_REGEX = c.CAIP_CHAIN_ID_REGEX,
        r.CAIP_NAMESPACE_REGEX = c.CAIP_NAMESPACE_REGEX,
        r.CAIP_REFERENCE_REGEX = c.CAIP_REFERENCE_REGEX,
        r.CaipAccountAddressStruct = c.CaipAccountAddressStruct,
        r.CaipAccountIdStruct = c.CaipAccountIdStruct,
        r.CaipChainIdStruct = c.CaipChainIdStruct,
        r.CaipNamespaceStruct = c.CaipNamespaceStruct,
        r.CaipReferenceStruct = c.CaipReferenceStruct,
        r.ChecksumStruct = l.ChecksumStruct,
        r.Duration = o.Duration,
        r.ESCAPE_CHARACTERS_REGEXP = b.ESCAPE_CHARACTERS_REGEXP,
        r.FrozenMap = m.FrozenMap,
        r.FrozenSet = m.FrozenSet,
        r.HexAddressStruct = h.HexAddressStruct,
        r.HexChecksumAddressStruct = h.HexChecksumAddressStruct,
        r.HexStruct = h.HexStruct,
        r.JsonRpcErrorStruct = a.JsonRpcErrorStruct,
        r.JsonRpcFailureStruct = a.JsonRpcFailureStruct,
        r.JsonRpcIdStruct = a.JsonRpcIdStruct,
        r.JsonRpcNotificationStruct = a.JsonRpcNotificationStruct,
        r.JsonRpcParamsStruct = a.JsonRpcParamsStruct,
        r.JsonRpcRequestStruct = a.JsonRpcRequestStruct,
        r.JsonRpcResponseStruct = a.JsonRpcResponseStruct,
        r.JsonRpcSuccessStruct = a.JsonRpcSuccessStruct,
        r.JsonRpcVersionStruct = a.JsonRpcVersionStruct,
        r.JsonSize = b.JsonSize,
        r.JsonStruct = a.JsonStruct,
        r.KnownCaipNamespace = c.KnownCaipNamespace,
        r.PendingJsonRpcResponseStruct = a.PendingJsonRpcResponseStruct,
        r.StrictHexStruct = h.StrictHexStruct,
        r.UnsafeJsonStruct = a.UnsafeJsonStruct,
        r.VersionRangeStruct = s.VersionRangeStruct,
        r.VersionStruct = s.VersionStruct,
        r.add0x = h.add0x,
        r.assert = p.assert,
        r.assertExhaustive = p.assertExhaustive,
        r.assertIsBytes = h.assertIsBytes,
        r.assertIsHexString = h.assertIsHexString,
        r.assertIsJsonRpcError = a.assertIsJsonRpcError,
        r.assertIsJsonRpcFailure = a.assertIsJsonRpcFailure,
        r.assertIsJsonRpcNotification = a.assertIsJsonRpcNotification,
        r.assertIsJsonRpcRequest = a.assertIsJsonRpcRequest,
        r.assertIsJsonRpcResponse = a.assertIsJsonRpcResponse,
        r.assertIsJsonRpcSuccess = a.assertIsJsonRpcSuccess,
        r.assertIsPendingJsonRpcResponse = a.assertIsPendingJsonRpcResponse,
        r.assertIsSemVerRange = s.assertIsSemVerRange,
        r.assertIsSemVerVersion = s.assertIsSemVerVersion,
        r.assertIsStrictHexString = h.assertIsStrictHexString,
        r.assertStruct = p.assertStruct,
        r.base64 = d.base64,
        r.base64ToBytes = h.base64ToBytes,
        r.bigIntToBytes = h.bigIntToBytes,
        r.bigIntToHex = n.bigIntToHex,
        r.bytesToBase64 = h.bytesToBase64,
        r.bytesToBigInt = h.bytesToBigInt,
        r.bytesToHex = h.bytesToHex,
        r.bytesToNumber = h.bytesToNumber,
        r.bytesToSignedBigInt = h.bytesToSignedBigInt,
        r.bytesToString = h.bytesToString,
        r.calculateNumberSize = b.calculateNumberSize,
        r.calculateStringSize = b.calculateStringSize,
        r.concatBytes = h.concatBytes,
        r.createBigInt = f.createBigInt,
        r.createBytes = f.createBytes,
        r.createDataView = h.createDataView,
        r.createDeferredPromise = i.createDeferredPromise,
        r.createHex = f.createHex,
        r.createModuleLogger = u.createModuleLogger,
        r.createNumber = f.createNumber,
        r.createProjectLogger = u.createProjectLogger,
        r.exactOptional = a.exactOptional,
        r.getChecksumAddress = h.getChecksumAddress,
        r.getErrorMessage = g.getErrorMessage,
        r.getJsonRpcIdValidator = a.getJsonRpcIdValidator,
        r.getJsonSize = a.getJsonSize,
        r.getKnownPropertyNames = b.getKnownPropertyNames,
        r.getSafeJson = a.getSafeJson,
        r.gtRange = s.gtRange,
        r.gtVersion = s.gtVersion,
        r.hasProperty = b.hasProperty,
        r.hexToBigInt = n.hexToBigInt,
        r.hexToBytes = h.hexToBytes,
        r.hexToNumber = n.hexToNumber,
        r.inMilliseconds = o.inMilliseconds,
        r.isASCII = b.isASCII,
        r.isBytes = h.isBytes,
        r.isCaipAccountAddress = c.isCaipAccountAddress,
        r.isCaipAccountId = c.isCaipAccountId,
        r.isCaipChainId = c.isCaipChainId,
        r.isCaipNamespace = c.isCaipNamespace,
        r.isCaipReference = c.isCaipReference,
        r.isErrorWithCode = g.isErrorWithCode,
        r.isErrorWithMessage = g.isErrorWithMessage,
        r.isErrorWithStack = g.isErrorWithStack,
        r.isHexString = h.isHexString,
        r.isJsonRpcError = a.isJsonRpcError,
        r.isJsonRpcFailure = a.isJsonRpcFailure,
        r.isJsonRpcNotification = a.isJsonRpcNotification,
        r.isJsonRpcRequest = a.isJsonRpcRequest,
        r.isJsonRpcResponse = a.isJsonRpcResponse,
        r.isJsonRpcSuccess = a.isJsonRpcSuccess,
        r.isNonEmptyArray = b.isNonEmptyArray,
        r.isNullOrUndefined = b.isNullOrUndefined,
        r.isObject = b.isObject,
        r.isPendingJsonRpcResponse = a.isPendingJsonRpcResponse,
        r.isPlainObject = b.isPlainObject,
        r.isStrictHexString = h.isStrictHexString,
        r.isValidChecksumAddress = h.isValidChecksumAddress,
        r.isValidHexAddress = h.isValidHexAddress,
        r.isValidJson = a.isValidJson,
        r.isValidSemVerRange = s.isValidSemVerRange,
        r.isValidSemVerVersion = s.isValidSemVerVersion,
        r.jsonrpc2 = a.jsonrpc2,
        r.numberToBytes = h.numberToBytes,
        r.numberToHex = n.numberToHex,
        r.object = a.object,
        r.parseCaipAccountId = c.parseCaipAccountId,
        r.parseCaipChainId = c.parseCaipChainId,
        r.remove0x = h.remove0x,
        r.satisfiesVersionRange = s.satisfiesVersionRange,
        r.signedBigIntToBytes = h.signedBigIntToBytes,
        r.stringToBytes = h.stringToBytes,
        r.timeSince = o.timeSince,
        r.toCaipChainId = c.toCaipChainId,
        r.valueToBytes = h.valueToBytes,
        r.wrapError = g.wrapError
    }
    , {
        "./chunk-2LBGT4GH.js": 81,
        "./chunk-3W5G4CYI.js": 82,
        "./chunk-4D6XQBHA.js": 83,
        "./chunk-4RMX5YWE.js": 84,
        "./chunk-5AVWINSB.js": 85,
        "./chunk-6NZW4WK4.js": 86,
        "./chunk-6ZDHSOUV.js": 87,
        "./chunk-C6HGFEYL.js": 88,
        "./chunk-DHVKFDHQ.js": 89,
        "./chunk-E4C7EW4R.js": 90,
        "./chunk-EQMZL4XU.js": 91,
        "./chunk-IZC266HS.js": 92,
        "./chunk-LC2CRSWD.js": 93,
        "./chunk-OLLG4H35.js": 94,
        "./chunk-QEPVHEP7.js": 95,
        "./chunk-QVEKZRZ2.js": 96,
        "./chunk-RKRGAFXY.js": 97,
        "./chunk-UOTVU7OQ.js": 98,
        "./chunk-VFXTVNXN.js": 99,
        "./chunk-YWAID473.js": 100,
        "./chunk-Z2RGWDD7.js": 101
    }],
    103: [function(e, t, r) {
        "use strict";
        function n(e) {
            if (!Number.isSafeInteger(e) || e < 0)
                throw new Error(`positive integer expected, not ${e}`)
        }
        function i(e) {
            if ("boolean" != typeof e)
                throw new Error(`boolean expected, not ${e}`)
        }
        function o(e) {
            return e instanceof Uint8Array || null != e && "object" == typeof e && "Uint8Array" === e.constructor.name
        }
        function s(e, ...t) {
            if (!o(e))
                throw new Error("Uint8Array expected");
            if (t.length > 0 && !t.includes(e.length))
                throw new Error(`Uint8Array expected of length ${t}, not of length=${e.length}`)
        }
        function a(e) {
            if ("function" != typeof e || "function" != typeof e.create)
                throw new Error("Hash should be wrapped by utils.wrapConstructor");
            n(e.outputLen),
            n(e.blockLen)
        }
        function u(e, t=!0) {
            if (e.destroyed)
                throw new Error("Hash instance has been destroyed");
            if (t && e.finished)
                throw new Error("Hash#digest() has already been called")
        }
        function c(e, t) {
            s(e);
            const r = t.outputLen;
            if (e.length < r)
                throw new Error(`digestInto() expects output buffer of length at least ${r}`)
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.output = r.exists = r.hash = r.bytes = r.bool = r.number = r.isBytes = void 0,
        r.number = n,
        r.bool = i,
        r.isBytes = o,
        r.bytes = s,
        r.hash = a,
        r.exists = u,
        r.output = c;
        const l = {
            number: n,
            bool: i,
            bytes: s,
            hash: a,
            exists: u,
            output: c
        };
        r.default = l
    }
    , {}],
    104: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.add5L = r.add5H = r.add4H = r.add4L = r.add3H = r.add3L = r.add = r.rotlBL = r.rotlBH = r.rotlSL = r.rotlSH = r.rotr32L = r.rotr32H = r.rotrBL = r.rotrBH = r.rotrSL = r.rotrSH = r.shrSL = r.shrSH = r.toBig = r.split = r.fromBig = void 0;
        const n = BigInt(2 ** 32 - 1)
          , i = BigInt(32);
        function o(e, t=!1) {
            return t ? {
                h: Number(e & n),
                l: Number(e >> i & n)
            } : {
                h: 0 | Number(e >> i & n),
                l: 0 | Number(e & n)
            }
        }
        function s(e, t=!1) {
            let r = new Uint32Array(e.length)
              , n = new Uint32Array(e.length);
            for (let i = 0; i < e.length; i++) {
                const {h: s, l: a} = o(e[i], t);
                [r[i],n[i]] = [s, a]
            }
            return [r, n]
        }
        r.fromBig = o,
        r.split = s;
        const a = (e,t)=>BigInt(e >>> 0) << i | BigInt(t >>> 0);
        r.toBig = a;
        const u = (e,t,r)=>e >>> r;
        r.shrSH = u;
        const c = (e,t,r)=>e << 32 - r | t >>> r;
        r.shrSL = c;
        const l = (e,t,r)=>e >>> r | t << 32 - r;
        r.rotrSH = l;
        const d = (e,t,r)=>e << 32 - r | t >>> r;
        r.rotrSL = d;
        const f = (e,t,r)=>e << 64 - r | t >>> r - 32;
        r.rotrBH = f;
        const h = (e,t,r)=>e >>> r - 32 | t << 64 - r;
        r.rotrBL = h;
        const p = (e,t)=>t;
        r.rotr32H = p;
        const g = (e,t)=>e;
        r.rotr32L = g;
        const b = (e,t,r)=>e << r | t >>> 32 - r;
        r.rotlSH = b;
        const m = (e,t,r)=>t << r | e >>> 32 - r;
        r.rotlSL = m;
        const y = (e,t,r)=>t << r - 32 | e >>> 64 - r;
        r.rotlBH = y;
        const v = (e,t,r)=>e << r - 32 | t >>> 64 - r;
        function w(e, t, r, n) {
            const i = (t >>> 0) + (n >>> 0);
            return {
                h: e + r + (i / 2 ** 32 | 0) | 0,
                l: 0 | i
            }
        }
        r.rotlBL = v,
        r.add = w;
        const _ = (e,t,r)=>(e >>> 0) + (t >>> 0) + (r >>> 0);
        r.add3L = _;
        const E = (e,t,r,n)=>t + r + n + (e / 2 ** 32 | 0) | 0;
        r.add3H = E;
        const S = (e,t,r,n)=>(e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0);
        r.add4L = S;
        const M = (e,t,r,n,i)=>t + r + n + i + (e / 2 ** 32 | 0) | 0;
        r.add4H = M;
        const R = (e,t,r,n,i)=>(e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0) + (i >>> 0);
        r.add5L = R;
        const j = (e,t,r,n,i,o)=>t + r + n + i + o + (e / 2 ** 32 | 0) | 0;
        r.add5H = j;
        const I = {
            fromBig: o,
            split: s,
            toBig: a,
            shrSH: u,
            shrSL: c,
            rotrSH: l,
            rotrSL: d,
            rotrBH: f,
            rotrBL: h,
            rotr32H: p,
            rotr32L: g,
            rotlSH: b,
            rotlSL: m,
            rotlBH: y,
            rotlBL: v,
            add: w,
            add3L: _,
            add3H: E,
            add4L: S,
            add4H: M,
            add5H: j,
            add5L: R
        };
        r.default = I
    }
    , {}],
    105: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.crypto = void 0,
        r.crypto = "object" == typeof globalThis && "crypto"in globalThis ? globalThis.crypto : void 0
    }
    , {}],
    106: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.shake256 = r.shake128 = r.keccak_512 = r.keccak_384 = r.keccak_256 = r.keccak_224 = r.sha3_512 = r.sha3_384 = r.sha3_256 = r.sha3_224 = r.Keccak = r.keccakP = void 0;
        const n = e("./_assert.js")
          , i = e("./_u64.js")
          , o = e("./utils.js")
          , s = []
          , a = []
          , u = []
          , c = BigInt(0)
          , l = BigInt(1)
          , d = BigInt(2)
          , f = BigInt(7)
          , h = BigInt(256)
          , p = BigInt(113);
        for (let e = 0, t = l, r = 1, n = 0; e < 24; e++) {
            [r,n] = [n, (2 * r + 3 * n) % 5],
            s.push(2 * (5 * n + r)),
            a.push((e + 1) * (e + 2) / 2 % 64);
            let i = c;
            for (let e = 0; e < 7; e++)
                t = (t << l ^ (t >> f) * p) % h,
                t & d && (i ^= l << (l << BigInt(e)) - l);
            u.push(i)
        }
        const [g,b] = (0,
        i.split)(u, !0)
          , m = (e,t,r)=>r > 32 ? (0,
        i.rotlBH)(e, t, r) : (0,
        i.rotlSH)(e, t, r)
          , y = (e,t,r)=>r > 32 ? (0,
        i.rotlBL)(e, t, r) : (0,
        i.rotlSL)(e, t, r);
        function v(e, t=24) {
            const r = new Uint32Array(10);
            for (let n = 24 - t; n < 24; n++) {
                for (let t = 0; t < 10; t++)
                    r[t] = e[t] ^ e[t + 10] ^ e[t + 20] ^ e[t + 30] ^ e[t + 40];
                for (let t = 0; t < 10; t += 2) {
                    const n = (t + 8) % 10
                      , i = (t + 2) % 10
                      , o = r[i]
                      , s = r[i + 1]
                      , a = m(o, s, 1) ^ r[n]
                      , u = y(o, s, 1) ^ r[n + 1];
                    for (let r = 0; r < 50; r += 10)
                        e[t + r] ^= a,
                        e[t + r + 1] ^= u
                }
                let t = e[2]
                  , i = e[3];
                for (let r = 0; r < 24; r++) {
                    const n = a[r]
                      , o = m(t, i, n)
                      , u = y(t, i, n)
                      , c = s[r];
                    t = e[c],
                    i = e[c + 1],
                    e[c] = o,
                    e[c + 1] = u
                }
                for (let t = 0; t < 50; t += 10) {
                    for (let n = 0; n < 10; n++)
                        r[n] = e[t + n];
                    for (let n = 0; n < 10; n++)
                        e[t + n] ^= ~r[(n + 2) % 10] & r[(n + 4) % 10]
                }
                e[0] ^= g[n],
                e[1] ^= b[n]
            }
            r.fill(0)
        }
        r.keccakP = v;
        class w extends o.Hash {
            constructor(e, t, r, i=!1, s=24) {
                if (super(),
                this.blockLen = e,
                this.suffix = t,
                this.outputLen = r,
                this.enableXOF = i,
                this.rounds = s,
                this.pos = 0,
                this.posOut = 0,
                this.finished = !1,
                this.destroyed = !1,
                (0,
                n.number)(r),
                0 >= this.blockLen || this.blockLen >= 200)
                    throw new Error("Sha3 supports only keccak-f1600 function");
                this.state = new Uint8Array(200),
                this.state32 = (0,
                o.u32)(this.state)
            }
            keccak() {
                o.isLE || (0,
                o.byteSwap32)(this.state32),
                v(this.state32, this.rounds),
                o.isLE || (0,
                o.byteSwap32)(this.state32),
                this.posOut = 0,
                this.pos = 0
            }
            update(e) {
                (0,
                n.exists)(this);
                const {blockLen: t, state: r} = this
                  , i = (e = (0,
                o.toBytes)(e)).length;
                for (let n = 0; n < i; ) {
                    const o = Math.min(t - this.pos, i - n);
                    for (let t = 0; t < o; t++)
                        r[this.pos++] ^= e[n++];
                    this.pos === t && this.keccak()
                }
                return this
            }
            finish() {
                if (this.finished)
                    return;
                this.finished = !0;
                const {state: e, suffix: t, pos: r, blockLen: n} = this;
                e[r] ^= t,
                128 & t && r === n - 1 && this.keccak(),
                e[n - 1] ^= 128,
                this.keccak()
            }
            writeInto(e) {
                (0,
                n.exists)(this, !1),
                (0,
                n.bytes)(e),
                this.finish();
                const t = this.state
                  , {blockLen: r} = this;
                for (let n = 0, i = e.length; n < i; ) {
                    this.posOut >= r && this.keccak();
                    const o = Math.min(r - this.posOut, i - n);
                    e.set(t.subarray(this.posOut, this.posOut + o), n),
                    this.posOut += o,
                    n += o
                }
                return e
            }
            xofInto(e) {
                if (!this.enableXOF)
                    throw new Error("XOF is not possible for this instance");
                return this.writeInto(e)
            }
            xof(e) {
                return (0,
                n.number)(e),
                this.xofInto(new Uint8Array(e))
            }
            digestInto(e) {
                if ((0,
                n.output)(e, this),
                this.finished)
                    throw new Error("digest() was already called");
                return this.writeInto(e),
                this.destroy(),
                e
            }
            digest() {
                return this.digestInto(new Uint8Array(this.outputLen))
            }
            destroy() {
                this.destroyed = !0,
                this.state.fill(0)
            }
            _cloneInto(e) {
                const {blockLen: t, suffix: r, outputLen: n, rounds: i, enableXOF: o} = this;
                return e || (e = new w(t,r,n,o,i)),
                e.state32.set(this.state32),
                e.pos = this.pos,
                e.posOut = this.posOut,
                e.finished = this.finished,
                e.rounds = i,
                e.suffix = r,
                e.outputLen = n,
                e.enableXOF = o,
                e.destroyed = this.destroyed,
                e
            }
        }
        r.Keccak = w;
        const _ = (e,t,r)=>(0,
        o.wrapConstructor)((()=>new w(t,e,r)));
        r.sha3_224 = _(6, 144, 28),
        r.sha3_256 = _(6, 136, 32),
        r.sha3_384 = _(6, 104, 48),
        r.sha3_512 = _(6, 72, 64),
        r.keccak_224 = _(1, 144, 28),
        r.keccak_256 = _(1, 136, 32),
        r.keccak_384 = _(1, 104, 48),
        r.keccak_512 = _(1, 72, 64);
        const E = (e,t,r)=>(0,
        o.wrapXOFConstructorWithOpts)(((n={})=>new w(t,e,void 0 === n.dkLen ? r : n.dkLen,!0)));
        r.shake128 = E(31, 168, 16),
        r.shake256 = E(31, 136, 32)
    }
    , {
        "./_assert.js": 103,
        "./_u64.js": 104,
        "./utils.js": 107
    }],
    107: [function(e, t, r) {
        "use strict";
        /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.randomBytes = r.wrapXOFConstructorWithOpts = r.wrapConstructorWithOpts = r.wrapConstructor = r.checkOpts = r.Hash = r.concatBytes = r.toBytes = r.utf8ToBytes = r.asyncLoop = r.nextTick = r.hexToBytes = r.bytesToHex = r.byteSwap32 = r.byteSwapIfBE = r.byteSwap = r.isLE = r.rotl = r.rotr = r.createView = r.u32 = r.u8 = r.isBytes = void 0;
        const n = e("@noble/hashes/crypto")
          , i = e("./_assert.js");
        r.isBytes = function(e) {
            return e instanceof Uint8Array || null != e && "object" == typeof e && "Uint8Array" === e.constructor.name
        }
        ;
        r.u8 = e=>new Uint8Array(e.buffer,e.byteOffset,e.byteLength);
        r.u32 = e=>new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength / 4));
        r.createView = e=>new DataView(e.buffer,e.byteOffset,e.byteLength);
        r.rotr = (e,t)=>e << 32 - t | e >>> t;
        r.rotl = (e,t)=>e << t | e >>> 32 - t >>> 0,
        r.isLE = 68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0];
        r.byteSwap = e=>e << 24 & 4278190080 | e << 8 & 16711680 | e >>> 8 & 65280 | e >>> 24 & 255,
        r.byteSwapIfBE = r.isLE ? e=>e : e=>(0,
        r.byteSwap)(e),
        r.byteSwap32 = function(e) {
            for (let t = 0; t < e.length; t++)
                e[t] = (0,
                r.byteSwap)(e[t])
        }
        ;
        const o = Array.from({
            length: 256
        }, ((e,t)=>t.toString(16).padStart(2, "0")));
        r.bytesToHex = function(e) {
            (0,
            i.bytes)(e);
            let t = "";
            for (let r = 0; r < e.length; r++)
                t += o[e[r]];
            return t
        }
        ;
        const s = {
            _0: 48,
            _9: 57,
            _A: 65,
            _F: 70,
            _a: 97,
            _f: 102
        };
        function a(e) {
            return e >= s._0 && e <= s._9 ? e - s._0 : e >= s._A && e <= s._F ? e - (s._A - 10) : e >= s._a && e <= s._f ? e - (s._a - 10) : void 0
        }
        r.hexToBytes = function(e) {
            if ("string" != typeof e)
                throw new Error("hex string expected, got " + typeof e);
            const t = e.length
              , r = t / 2;
            if (t % 2)
                throw new Error("padded hex string expected, got unpadded hex of length " + t);
            const n = new Uint8Array(r);
            for (let t = 0, i = 0; t < r; t++,
            i += 2) {
                const r = a(e.charCodeAt(i))
                  , o = a(e.charCodeAt(i + 1));
                if (void 0 === r || void 0 === o) {
                    const t = e[i] + e[i + 1];
                    throw new Error('hex string expected, got non-hex character "' + t + '" at index ' + i)
                }
                n[t] = 16 * r + o
            }
            return n
        }
        ;
        function u(e) {
            if ("string" != typeof e)
                throw new Error("utf8ToBytes expected string, got " + typeof e);
            return new Uint8Array((new TextEncoder).encode(e))
        }
        function c(e) {
            return "string" == typeof e && (e = u(e)),
            (0,
            i.bytes)(e),
            e
        }
        r.nextTick = async()=>{}
        ,
        r.asyncLoop = async function(e, t, n) {
            let i = Date.now();
            for (let o = 0; o < e; o++) {
                n(o);
                const e = Date.now() - i;
                e >= 0 && e < t || (await (0,
                r.nextTick)(),
                i += e)
            }
        }
        ,
        r.utf8ToBytes = u,
        r.toBytes = c,
        r.concatBytes = function(...e) {
            let t = 0;
            for (let r = 0; r < e.length; r++) {
                const n = e[r];
                (0,
                i.bytes)(n),
                t += n.length
            }
            const r = new Uint8Array(t);
            for (let t = 0, n = 0; t < e.length; t++) {
                const i = e[t];
                r.set(i, n),
                n += i.length
            }
            return r
        }
        ;
        r.Hash = class {
            clone() {
                return this._cloneInto()
            }
        }
        ;
        const l = {}.toString;
        r.checkOpts = function(e, t) {
            if (void 0 !== t && "[object Object]" !== l.call(t))
                throw new Error("Options should be object or undefined");
            return Object.assign(e, t)
        }
        ,
        r.wrapConstructor = function(e) {
            const t = t=>e().update(c(t)).digest()
              , r = e();
            return t.outputLen = r.outputLen,
            t.blockLen = r.blockLen,
            t.create = ()=>e(),
            t
        }
        ,
        r.wrapConstructorWithOpts = function(e) {
            const t = (t,r)=>e(r).update(c(t)).digest()
              , r = e({});
            return t.outputLen = r.outputLen,
            t.blockLen = r.blockLen,
            t.create = t=>e(t),
            t
        }
        ,
        r.wrapXOFConstructorWithOpts = function(e) {
            const t = (t,r)=>e(r).update(c(t)).digest()
              , r = e({});
            return t.outputLen = r.outputLen,
            t.blockLen = r.blockLen,
            t.create = t=>e(t),
            t
        }
        ,
        r.randomBytes = function(e=32) {
            if (n.crypto && "function" == typeof n.crypto.getRandomValues)
                return n.crypto.getRandomValues(new Uint8Array(e));
            throw new Error("crypto.getRandomValues must be defined")
        }
    }
    , {
        "./_assert.js": 103,
        "@noble/hashes/crypto": 105
    }],
    108: [function(e, t, r) {
        "use strict";
        /*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */
        function n(e) {
            if (!Number.isSafeInteger(e))
                throw new Error(`Wrong integer: ${e}`)
        }
        function i(e) {
            return e instanceof Uint8Array || null != e && "object" == typeof e && "Uint8Array" === e.constructor.name
        }
        function o(...e) {
            const t = e=>e
              , r = (e,t)=>r=>e(t(r));
            return {
                encode: e.map((e=>e.encode)).reduceRight(r, t),
                decode: e.map((e=>e.decode)).reduce(r, t)
            }
        }
        function s(e) {
            return {
                encode: t=>{
                    if (!Array.isArray(t) || t.length && "number" != typeof t[0])
                        throw new Error("alphabet.encode input should be an array of numbers");
                    return t.map((t=>{
                        if (n(t),
                        t < 0 || t >= e.length)
                            throw new Error(`Digit index outside alphabet: ${t} (alphabet: ${e.length})`);
                        return e[t]
                    }
                    ))
                }
                ,
                decode: t=>{
                    if (!Array.isArray(t) || t.length && "string" != typeof t[0])
                        throw new Error("alphabet.decode input should be array of strings");
                    return t.map((t=>{
                        if ("string" != typeof t)
                            throw new Error(`alphabet.decode: not string element=${t}`);
                        const r = e.indexOf(t);
                        if (-1 === r)
                            throw new Error(`Unknown letter: "${t}". Allowed: ${e}`);
                        return r
                    }
                    ))
                }
            }
        }
        function a(e="") {
            if ("string" != typeof e)
                throw new Error("join separator should be string");
            return {
                encode: t=>{
                    if (!Array.isArray(t) || t.length && "string" != typeof t[0])
                        throw new Error("join.encode input should be array of strings");
                    for (let e of t)
                        if ("string" != typeof e)
                            throw new Error(`join.encode: non-string input=${e}`);
                    return t.join(e)
                }
                ,
                decode: t=>{
                    if ("string" != typeof t)
                        throw new Error("join.decode input should be string");
                    return t.split(e)
                }
            }
        }
        function u(e, t="=") {
            if (n(e),
            "string" != typeof t)
                throw new Error("padding chr should be string");
            return {
                encode(r) {
                    if (!Array.isArray(r) || r.length && "string" != typeof r[0])
                        throw new Error("padding.encode input should be array of strings");
                    for (let e of r)
                        if ("string" != typeof e)
                            throw new Error(`padding.encode: non-string input=${e}`);
                    for (; r.length * e % 8; )
                        r.push(t);
                    return r
                },
                decode(r) {
                    if (!Array.isArray(r) || r.length && "string" != typeof r[0])
                        throw new Error("padding.encode input should be array of strings");
                    for (let e of r)
                        if ("string" != typeof e)
                            throw new Error(`padding.decode: non-string input=${e}`);
                    let n = r.length;
                    if (n * e % 8)
                        throw new Error("Invalid padding: string should have whole number of bytes");
                    for (; n > 0 && r[n - 1] === t; n--)
                        if (!((n - 1) * e % 8))
                            throw new Error("Invalid padding: string has too much padding");
                    return r.slice(0, n)
                }
            }
        }
        function c(e) {
            if ("function" != typeof e)
                throw new Error("normalize fn should be function");
            return {
                encode: e=>e,
                decode: t=>e(t)
            }
        }
        function l(e, t, r) {
            if (t < 2)
                throw new Error(`convertRadix: wrong from=${t}, base cannot be less than 2`);
            if (r < 2)
                throw new Error(`convertRadix: wrong to=${r}, base cannot be less than 2`);
            if (!Array.isArray(e))
                throw new Error("convertRadix: data should be array");
            if (!e.length)
                return [];
            let i = 0;
            const o = []
              , s = Array.from(e);
            for (s.forEach((e=>{
                if (n(e),
                e < 0 || e >= t)
                    throw new Error(`Wrong integer: ${e}`)
            }
            )); ; ) {
                let e = 0
                  , n = !0;
                for (let o = i; o < s.length; o++) {
                    const a = s[o]
                      , u = t * e + a;
                    if (!Number.isSafeInteger(u) || t * e / t !== e || u - a != t * e)
                        throw new Error("convertRadix: carry overflow");
                    e = u % r;
                    const c = Math.floor(u / r);
                    if (s[o] = c,
                    !Number.isSafeInteger(c) || c * r + e !== u)
                        throw new Error("convertRadix: carry overflow");
                    n && (c ? n = !1 : i = o)
                }
                if (o.push(e),
                n)
                    break
            }
            for (let t = 0; t < e.length - 1 && 0 === e[t]; t++)
                o.push(0);
            return o.reverse()
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.bytes = r.stringToBytes = r.str = r.bytesToString = r.hex = r.utf8 = r.bech32m = r.bech32 = r.base58check = r.createBase58check = r.base58xmr = r.base58xrp = r.base58flickr = r.base58 = r.base64urlnopad = r.base64url = r.base64 = r.base32crockford = r.base32hex = r.base32 = r.base16 = r.utils = r.assertNumber = void 0,
        r.assertNumber = n;
        const d = (e,t)=>t ? d(t, e % t) : e
          , f = (e,t)=>e + (t - d(e, t));
        function h(e, t, r, i) {
            if (!Array.isArray(e))
                throw new Error("convertRadix2: data should be array");
            if (t <= 0 || t > 32)
                throw new Error(`convertRadix2: wrong from=${t}`);
            if (r <= 0 || r > 32)
                throw new Error(`convertRadix2: wrong to=${r}`);
            if (f(t, r) > 32)
                throw new Error(`convertRadix2: carry overflow from=${t} to=${r} carryBits=${f(t, r)}`);
            let o = 0
              , s = 0;
            const a = 2 ** r - 1
              , u = [];
            for (const i of e) {
                if (n(i),
                i >= 2 ** t)
                    throw new Error(`convertRadix2: invalid data word=${i} from=${t}`);
                if (o = o << t | i,
                s + t > 32)
                    throw new Error(`convertRadix2: carry overflow pos=${s} from=${t}`);
                for (s += t; s >= r; s -= r)
                    u.push((o >> s - r & a) >>> 0);
                o &= 2 ** s - 1
            }
            if (o = o << r - s & a,
            !i && s >= t)
                throw new Error("Excess padding");
            if (!i && o)
                throw new Error(`Non-zero padding: ${o}`);
            return i && s > 0 && u.push(o >>> 0),
            u
        }
        function p(e) {
            return n(e),
            {
                encode: t=>{
                    if (!i(t))
                        throw new Error("radix.encode input should be Uint8Array");
                    return l(Array.from(t), 256, e)
                }
                ,
                decode: t=>{
                    if (!Array.isArray(t) || t.length && "number" != typeof t[0])
                        throw new Error("radix.decode input should be array of numbers");
                    return Uint8Array.from(l(t, e, 256))
                }
            }
        }
        function g(e, t=!1) {
            if (n(e),
            e <= 0 || e > 32)
                throw new Error("radix2: bits should be in (0..32]");
            if (f(8, e) > 32 || f(e, 8) > 32)
                throw new Error("radix2: carry overflow");
            return {
                encode: r=>{
                    if (!i(r))
                        throw new Error("radix2.encode input should be Uint8Array");
                    return h(Array.from(r), 8, e, !t)
                }
                ,
                decode: r=>{
                    if (!Array.isArray(r) || r.length && "number" != typeof r[0])
                        throw new Error("radix2.decode input should be array of numbers");
                    return Uint8Array.from(h(r, e, 8, t))
                }
            }
        }
        function b(e) {
            if ("function" != typeof e)
                throw new Error("unsafeWrapper fn should be function");
            return function(...t) {
                try {
                    return e.apply(null, t)
                } catch (e) {}
            }
        }
        function m(e, t) {
            if (n(e),
            "function" != typeof t)
                throw new Error("checksum fn should be function");
            return {
                encode(r) {
                    if (!i(r))
                        throw new Error("checksum.encode: input should be Uint8Array");
                    const n = t(r).slice(0, e)
                      , o = new Uint8Array(r.length + e);
                    return o.set(r),
                    o.set(n, r.length),
                    o
                },
                decode(r) {
                    if (!i(r))
                        throw new Error("checksum.decode: input should be Uint8Array");
                    const n = r.slice(0, -e)
                      , o = t(n).slice(0, e)
                      , s = r.slice(-e);
                    for (let t = 0; t < e; t++)
                        if (o[t] !== s[t])
                            throw new Error("Invalid checksum");
                    return n
                }
            }
        }
        r.utils = {
            alphabet: s,
            chain: o,
            checksum: m,
            convertRadix: l,
            convertRadix2: h,
            radix: p,
            radix2: g,
            join: a,
            padding: u
        },
        r.base16 = o(g(4), s("0123456789ABCDEF"), a("")),
        r.base32 = o(g(5), s("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"), u(5), a("")),
        r.base32hex = o(g(5), s("0123456789ABCDEFGHIJKLMNOPQRSTUV"), u(5), a("")),
        r.base32crockford = o(g(5), s("0123456789ABCDEFGHJKMNPQRSTVWXYZ"), a(""), c((e=>e.toUpperCase().replace(/O/g, "0").replace(/[IL]/g, "1")))),
        r.base64 = o(g(6), s("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"), u(6), a("")),
        r.base64url = o(g(6), s("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"), u(6), a("")),
        r.base64urlnopad = o(g(6), s("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"), a(""));
        const y = e=>o(p(58), s(e), a(""));
        r.base58 = y("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"),
        r.base58flickr = y("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"),
        r.base58xrp = y("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz");
        const v = [0, 2, 3, 5, 6, 7, 9, 10, 11];
        r.base58xmr = {
            encode(e) {
                let t = "";
                for (let n = 0; n < e.length; n += 8) {
                    const i = e.subarray(n, n + 8);
                    t += r.base58.encode(i).padStart(v[i.length], "1")
                }
                return t
            },
            decode(e) {
                let t = [];
                for (let n = 0; n < e.length; n += 11) {
                    const i = e.slice(n, n + 11)
                      , o = v.indexOf(i.length)
                      , s = r.base58.decode(i);
                    for (let e = 0; e < s.length - o; e++)
                        if (0 !== s[e])
                            throw new Error("base58xmr: wrong padding");
                    t = t.concat(Array.from(s.slice(s.length - o)))
                }
                return Uint8Array.from(t)
            }
        };
        r.createBase58check = e=>o(m(4, (t=>e(e(t)))), r.base58),
        r.base58check = r.createBase58check;
        const w = o(s("qpzry9x8gf2tvdw0s3jn54khce6mua7l"), a(""))
          , _ = [996825010, 642813549, 513874426, 1027748829, 705979059];
        function E(e) {
            const t = e >> 25;
            let r = (33554431 & e) << 5;
            for (let e = 0; e < _.length; e++)
                1 == (t >> e & 1) && (r ^= _[e]);
            return r
        }
        function S(e, t, r=1) {
            const n = e.length;
            let i = 1;
            for (let t = 0; t < n; t++) {
                const r = e.charCodeAt(t);
                if (r < 33 || r > 126)
                    throw new Error(`Invalid prefix (${e})`);
                i = E(i) ^ r >> 5
            }
            i = E(i);
            for (let t = 0; t < n; t++)
                i = E(i) ^ 31 & e.charCodeAt(t);
            for (let e of t)
                i = E(i) ^ e;
            for (let e = 0; e < 6; e++)
                i = E(i);
            return i ^= r,
            w.encode(h([i % 2 ** 30], 30, 5, !1))
        }
        function M(e) {
            const t = "bech32" === e ? 1 : 734539939
              , r = g(5)
              , n = r.decode
              , i = r.encode
              , o = b(n);
            function s(e, r=90) {
                if ("string" != typeof e)
                    throw new Error("bech32.decode input should be string, not " + typeof e);
                if (e.length < 8 || !1 !== r && e.length > r)
                    throw new TypeError(`Wrong string length: ${e.length} (${e}). Expected (8..${r})`);
                const n = e.toLowerCase();
                if (e !== n && e !== e.toUpperCase())
                    throw new Error("String must be lowercase or uppercase");
                const i = (e = n).lastIndexOf("1");
                if (0 === i || -1 === i)
                    throw new Error('Letter "1" must be present between prefix and data only');
                const o = e.slice(0, i)
                  , s = e.slice(i + 1);
                if (s.length < 6)
                    throw new Error("Data must be at least 6 characters long");
                const a = w.decode(s).slice(0, -6)
                  , u = S(o, a, t);
                if (!s.endsWith(u))
                    throw new Error(`Invalid checksum in ${e}: expected "${u}"`);
                return {
                    prefix: o,
                    words: a
                }
            }
            return {
                encode: function(e, r, n=90) {
                    if ("string" != typeof e)
                        throw new Error("bech32.encode prefix should be string, not " + typeof e);
                    if (!Array.isArray(r) || r.length && "number" != typeof r[0])
                        throw new Error("bech32.encode words should be array of numbers, not " + typeof r);
                    const i = e.length + 7 + r.length;
                    if (!1 !== n && i > n)
                        throw new TypeError(`Length ${i} exceeds limit ${n}`);
                    const o = e.toLowerCase()
                      , s = S(o, r, t);
                    return `${o}1${w.encode(r)}${s}`
                },
                decode: s,
                decodeToBytes: function(e) {
                    const {prefix: t, words: r} = s(e, !1);
                    return {
                        prefix: t,
                        words: r,
                        bytes: n(r)
                    }
                },
                decodeUnsafe: b(s),
                fromWords: n,
                fromWordsUnsafe: o,
                toWords: i
            }
        }
        r.bech32 = M("bech32"),
        r.bech32m = M("bech32m"),
        r.utf8 = {
            encode: e=>(new TextDecoder).decode(e),
            decode: e=>(new TextEncoder).encode(e)
        },
        r.hex = o(g(4), s("0123456789abcdef"), a(""), c((e=>{
            if ("string" != typeof e || e.length % 2)
                throw new TypeError(`hex.decode: expected string, got ${typeof e} with length ${e.length}`);
            return e.toLowerCase()
        }
        )));
        const R = {
            utf8: r.utf8,
            hex: r.hex,
            base16: r.base16,
            base32: r.base32,
            base64: r.base64,
            base64url: r.base64url,
            base58: r.base58,
            base58xmr: r.base58xmr
        }
          , j = "Invalid encoding type. Available types: utf8, hex, base16, base32, base64, base64url, base58, base58xmr";
        r.bytesToString = (e,t)=>{
            if ("string" != typeof e || !R.hasOwnProperty(e))
                throw new TypeError(j);
            if (!i(t))
                throw new TypeError("bytesToString() expects Uint8Array");
            return R[e].encode(t)
        }
        ,
        r.str = r.bytesToString;
        r.stringToBytes = (e,t)=>{
            if (!R.hasOwnProperty(e))
                throw new TypeError(j);
            if ("string" != typeof t)
                throw new TypeError("stringToBytes() expects string");
            return R[e].decode(t)
        }
        ,
        r.bytes = r.stringToBytes
    }
    , {}],
    109: [function(e, t, r) {
        "use strict";
        r.byteLength = function(e) {
            var t = u(e)
              , r = t[0]
              , n = t[1];
            return 3 * (r + n) / 4 - n
        }
        ,
        r.toByteArray = function(e) {
            var t, r, n = u(e), s = n[0], a = n[1], c = new o(function(e, t, r) {
                return 3 * (t + r) / 4 - r
            }(0, s, a)), l = 0, d = a > 0 ? s - 4 : s;
            for (r = 0; r < d; r += 4)
                t = i[e.charCodeAt(r)] << 18 | i[e.charCodeAt(r + 1)] << 12 | i[e.charCodeAt(r + 2)] << 6 | i[e.charCodeAt(r + 3)],
                c[l++] = t >> 16 & 255,
                c[l++] = t >> 8 & 255,
                c[l++] = 255 & t;
            2 === a && (t = i[e.charCodeAt(r)] << 2 | i[e.charCodeAt(r + 1)] >> 4,
            c[l++] = 255 & t);
            1 === a && (t = i[e.charCodeAt(r)] << 10 | i[e.charCodeAt(r + 1)] << 4 | i[e.charCodeAt(r + 2)] >> 2,
            c[l++] = t >> 8 & 255,
            c[l++] = 255 & t);
            return c
        }
        ,
        r.fromByteArray = function(e) {
            for (var t, r = e.length, i = r % 3, o = [], s = 16383, a = 0, u = r - i; a < u; a += s)
                o.push(c(e, a, a + s > u ? u : a + s));
            1 === i ? (t = e[r - 1],
            o.push(n[t >> 2] + n[t << 4 & 63] + "==")) : 2 === i && (t = (e[r - 2] << 8) + e[r - 1],
            o.push(n[t >> 10] + n[t >> 4 & 63] + n[t << 2 & 63] + "="));
            return o.join("")
        }
        ;
        for (var n = [], i = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0; a < 64; ++a)
            n[a] = s[a],
            i[s.charCodeAt(a)] = a;
        function u(e) {
            var t = e.length;
            if (t % 4 > 0)
                throw new Error("Invalid string. Length must be a multiple of 4");
            var r = e.indexOf("=");
            return -1 === r && (r = t),
            [r, r === t ? 0 : 4 - r % 4]
        }
        function c(e, t, r) {
            for (var i, o, s = [], a = t; a < r; a += 3)
                i = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (255 & e[a + 2]),
                s.push(n[(o = i) >> 18 & 63] + n[o >> 12 & 63] + n[o >> 6 & 63] + n[63 & o]);
            return s.join("")
        }
        i["-".charCodeAt(0)] = 62,
        i["_".charCodeAt(0)] = 63
    }
    , {}],
    110: [function(e, t, r) {}
    , {}],
    111: [function(e, t, r) {
        /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
        "use strict";
        var n = e("base64-js")
          , i = e("ieee754");
        r.Buffer = a,
        r.SlowBuffer = function(e) {
            +e != e && (e = 0);
            return a.alloc(+e)
        }
        ,
        r.INSPECT_MAX_BYTES = 50;
        var o = 2147483647;
        function s(e) {
            if (e > o)
                throw new RangeError('The value "' + e + '" is invalid for option "size"');
            var t = new Uint8Array(e);
            return t.__proto__ = a.prototype,
            t
        }
        function a(e, t, r) {
            if ("number" == typeof e) {
                if ("string" == typeof t)
                    throw new TypeError('The "string" argument must be of type string. Received type number');
                return l(e)
            }
            return u(e, t, r)
        }
        function u(e, t, r) {
            if ("string" == typeof e)
                return function(e, t) {
                    "string" == typeof t && "" !== t || (t = "utf8");
                    if (!a.isEncoding(t))
                        throw new TypeError("Unknown encoding: " + t);
                    var r = 0 | h(e, t)
                      , n = s(r)
                      , i = n.write(e, t);
                    i !== r && (n = n.slice(0, i));
                    return n
                }(e, t);
            if (ArrayBuffer.isView(e))
                return d(e);
            if (null == e)
                throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
            if (F(e, ArrayBuffer) || e && F(e.buffer, ArrayBuffer))
                return function(e, t, r) {
                    if (t < 0 || e.byteLength < t)
                        throw new RangeError('"offset" is outside of buffer bounds');
                    if (e.byteLength < t + (r || 0))
                        throw new RangeError('"length" is outside of buffer bounds');
                    var n;
                    n = void 0 === t && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e,t) : new Uint8Array(e,t,r);
                    return n.__proto__ = a.prototype,
                    n
                }(e, t, r);
            if ("number" == typeof e)
                throw new TypeError('The "value" argument must not be of type number. Received type number');
            var n = e.valueOf && e.valueOf();
            if (null != n && n !== e)
                return a.from(n, t, r);
            var i = function(e) {
                if (a.isBuffer(e)) {
                    var t = 0 | f(e.length)
                      , r = s(t);
                    return 0 === r.length || e.copy(r, 0, 0, t),
                    r
                }
                if (void 0 !== e.length)
                    return "number" != typeof e.length || W(e.length) ? s(0) : d(e);
                if ("Buffer" === e.type && Array.isArray(e.data))
                    return d(e.data)
            }(e);
            if (i)
                return i;
            if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive])
                return a.from(e[Symbol.toPrimitive]("string"), t, r);
            throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e)
        }
        function c(e) {
            if ("number" != typeof e)
                throw new TypeError('"size" argument must be of type number');
            if (e < 0)
                throw new RangeError('The value "' + e + '" is invalid for option "size"')
        }
        function l(e) {
            return c(e),
            s(e < 0 ? 0 : 0 | f(e))
        }
        function d(e) {
            for (var t = e.length < 0 ? 0 : 0 | f(e.length), r = s(t), n = 0; n < t; n += 1)
                r[n] = 255 & e[n];
            return r
        }
        function f(e) {
            if (e >= o)
                throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o.toString(16) + " bytes");
            return 0 | e
        }
        function h(e, t) {
            if (a.isBuffer(e))
                return e.length;
            if (ArrayBuffer.isView(e) || F(e, ArrayBuffer))
                return e.byteLength;
            if ("string" != typeof e)
                throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
            var r = e.length
              , n = arguments.length > 2 && !0 === arguments[2];
            if (!n && 0 === r)
                return 0;
            for (var i = !1; ; )
                switch (t) {
                case "ascii":
                case "latin1":
                case "binary":
                    return r;
                case "utf8":
                case "utf-8":
                    return B(e).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return 2 * r;
                case "hex":
                    return r >>> 1;
                case "base64":
                    return U(e).length;
                default:
                    if (i)
                        return n ? -1 : B(e).length;
                    t = ("" + t).toLowerCase(),
                    i = !0
                }
        }
        function p(e, t, r) {
            var n = !1;
            if ((void 0 === t || t < 0) && (t = 0),
            t > this.length)
                return "";
            if ((void 0 === r || r > this.length) && (r = this.length),
            r <= 0)
                return "";
            if ((r >>>= 0) <= (t >>>= 0))
                return "";
            for (e || (e = "utf8"); ; )
                switch (e) {
                case "hex":
                    return C(this, t, r);
                case "utf8":
                case "utf-8":
                    return R(this, t, r);
                case "ascii":
                    return I(this, t, r);
                case "latin1":
                case "binary":
                    return k(this, t, r);
                case "base64":
                    return M(this, t, r);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return x(this, t, r);
                default:
                    if (n)
                        throw new TypeError("Unknown encoding: " + e);
                    e = (e + "").toLowerCase(),
                    n = !0
                }
        }
        function g(e, t, r) {
            var n = e[t];
            e[t] = e[r],
            e[r] = n
        }
        function b(e, t, r, n, i) {
            if (0 === e.length)
                return -1;
            if ("string" == typeof r ? (n = r,
            r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648),
            W(r = +r) && (r = i ? 0 : e.length - 1),
            r < 0 && (r = e.length + r),
            r >= e.length) {
                if (i)
                    return -1;
                r = e.length - 1
            } else if (r < 0) {
                if (!i)
                    return -1;
                r = 0
            }
            if ("string" == typeof t && (t = a.from(t, n)),
            a.isBuffer(t))
                return 0 === t.length ? -1 : m(e, t, r, n, i);
            if ("number" == typeof t)
                return t &= 255,
                "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : m(e, [t], r, n, i);
            throw new TypeError("val must be string, number or Buffer")
        }
        function m(e, t, r, n, i) {
            var o, s = 1, a = e.length, u = t.length;
            if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                if (e.length < 2 || t.length < 2)
                    return -1;
                s = 2,
                a /= 2,
                u /= 2,
                r /= 2
            }
            function c(e, t) {
                return 1 === s ? e[t] : e.readUInt16BE(t * s)
            }
            if (i) {
                var l = -1;
                for (o = r; o < a; o++)
                    if (c(e, o) === c(t, -1 === l ? 0 : o - l)) {
                        if (-1 === l && (l = o),
                        o - l + 1 === u)
                            return l * s
                    } else
                        -1 !== l && (o -= o - l),
                        l = -1
            } else
                for (r + u > a && (r = a - u),
                o = r; o >= 0; o--) {
                    for (var d = !0, f = 0; f < u; f++)
                        if (c(e, o + f) !== c(t, f)) {
                            d = !1;
                            break
                        }
                    if (d)
                        return o
                }
            return -1
        }
        function y(e, t, r, n) {
            r = Number(r) || 0;
            var i = e.length - r;
            n ? (n = Number(n)) > i && (n = i) : n = i;
            var o = t.length;
            n > o / 2 && (n = o / 2);
            for (var s = 0; s < n; ++s) {
                var a = parseInt(t.substr(2 * s, 2), 16);
                if (W(a))
                    return s;
                e[r + s] = a
            }
            return s
        }
        function v(e, t, r, n) {
            return $(B(t, e.length - r), e, r, n)
        }
        function w(e, t, r, n) {
            return $(function(e) {
                for (var t = [], r = 0; r < e.length; ++r)
                    t.push(255 & e.charCodeAt(r));
                return t
            }(t), e, r, n)
        }
        function _(e, t, r, n) {
            return w(e, t, r, n)
        }
        function E(e, t, r, n) {
            return $(U(t), e, r, n)
        }
        function S(e, t, r, n) {
            return $(function(e, t) {
                for (var r, n, i, o = [], s = 0; s < e.length && !((t -= 2) < 0); ++s)
                    n = (r = e.charCodeAt(s)) >> 8,
                    i = r % 256,
                    o.push(i),
                    o.push(n);
                return o
            }(t, e.length - r), e, r, n)
        }
        function M(e, t, r) {
            return 0 === t && r === e.length ? n.fromByteArray(e) : n.fromByteArray(e.slice(t, r))
        }
        function R(e, t, r) {
            r = Math.min(e.length, r);
            for (var n = [], i = t; i < r; ) {
                var o, s, a, u, c = e[i], l = null, d = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
                if (i + d <= r)
                    switch (d) {
                    case 1:
                        c < 128 && (l = c);
                        break;
                    case 2:
                        128 == (192 & (o = e[i + 1])) && (u = (31 & c) << 6 | 63 & o) > 127 && (l = u);
                        break;
                    case 3:
                        o = e[i + 1],
                        s = e[i + 2],
                        128 == (192 & o) && 128 == (192 & s) && (u = (15 & c) << 12 | (63 & o) << 6 | 63 & s) > 2047 && (u < 55296 || u > 57343) && (l = u);
                        break;
                    case 4:
                        o = e[i + 1],
                        s = e[i + 2],
                        a = e[i + 3],
                        128 == (192 & o) && 128 == (192 & s) && 128 == (192 & a) && (u = (15 & c) << 18 | (63 & o) << 12 | (63 & s) << 6 | 63 & a) > 65535 && u < 1114112 && (l = u)
                    }
                null === l ? (l = 65533,
                d = 1) : l > 65535 && (l -= 65536,
                n.push(l >>> 10 & 1023 | 55296),
                l = 56320 | 1023 & l),
                n.push(l),
                i += d
            }
            return function(e) {
                var t = e.length;
                if (t <= j)
                    return String.fromCharCode.apply(String, e);
                var r = ""
                  , n = 0;
                for (; n < t; )
                    r += String.fromCharCode.apply(String, e.slice(n, n += j));
                return r
            }(n)
        }
        r.kMaxLength = o,
        a.TYPED_ARRAY_SUPPORT = function() {
            try {
                var e = new Uint8Array(1);
                return e.__proto__ = {
                    __proto__: Uint8Array.prototype,
                    foo: function() {
                        return 42
                    }
                },
                42 === e.foo()
            } catch (e) {
                return !1
            }
        }(),
        a.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),
        Object.defineProperty(a.prototype, "parent", {
            enumerable: !0,
            get: function() {
                if (a.isBuffer(this))
                    return this.buffer
            }
        }),
        Object.defineProperty(a.prototype, "offset", {
            enumerable: !0,
            get: function() {
                if (a.isBuffer(this))
                    return this.byteOffset
            }
        }),
        "undefined" != typeof Symbol && null != Symbol.species && a[Symbol.species] === a && Object.defineProperty(a, Symbol.species, {
            value: null,
            configurable: !0,
            enumerable: !1,
            writable: !1
        }),
        a.poolSize = 8192,
        a.from = function(e, t, r) {
            return u(e, t, r)
        }
        ,
        a.prototype.__proto__ = Uint8Array.prototype,
        a.__proto__ = Uint8Array,
        a.alloc = function(e, t, r) {
            return function(e, t, r) {
                return c(e),
                e <= 0 ? s(e) : void 0 !== t ? "string" == typeof r ? s(e).fill(t, r) : s(e).fill(t) : s(e)
            }(e, t, r)
        }
        ,
        a.allocUnsafe = function(e) {
            return l(e)
        }
        ,
        a.allocUnsafeSlow = function(e) {
            return l(e)
        }
        ,
        a.isBuffer = function(e) {
            return null != e && !0 === e._isBuffer && e !== a.prototype
        }
        ,
        a.compare = function(e, t) {
            if (F(e, Uint8Array) && (e = a.from(e, e.offset, e.byteLength)),
            F(t, Uint8Array) && (t = a.from(t, t.offset, t.byteLength)),
            !a.isBuffer(e) || !a.isBuffer(t))
                throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
            if (e === t)
                return 0;
            for (var r = e.length, n = t.length, i = 0, o = Math.min(r, n); i < o; ++i)
                if (e[i] !== t[i]) {
                    r = e[i],
                    n = t[i];
                    break
                }
            return r < n ? -1 : n < r ? 1 : 0
        }
        ,
        a.isEncoding = function(e) {
            switch (String(e).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return !0;
            default:
                return !1
            }
        }
        ,
        a.concat = function(e, t) {
            if (!Array.isArray(e))
                throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === e.length)
                return a.alloc(0);
            var r;
            if (void 0 === t)
                for (t = 0,
                r = 0; r < e.length; ++r)
                    t += e[r].length;
            var n = a.allocUnsafe(t)
              , i = 0;
            for (r = 0; r < e.length; ++r) {
                var o = e[r];
                if (F(o, Uint8Array) && (o = a.from(o)),
                !a.isBuffer(o))
                    throw new TypeError('"list" argument must be an Array of Buffers');
                o.copy(n, i),
                i += o.length
            }
            return n
        }
        ,
        a.byteLength = h,
        a.prototype._isBuffer = !0,
        a.prototype.swap16 = function() {
            var e = this.length;
            if (e % 2 != 0)
                throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var t = 0; t < e; t += 2)
                g(this, t, t + 1);
            return this
        }
        ,
        a.prototype.swap32 = function() {
            var e = this.length;
            if (e % 4 != 0)
                throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var t = 0; t < e; t += 4)
                g(this, t, t + 3),
                g(this, t + 1, t + 2);
            return this
        }
        ,
        a.prototype.swap64 = function() {
            var e = this.length;
            if (e % 8 != 0)
                throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var t = 0; t < e; t += 8)
                g(this, t, t + 7),
                g(this, t + 1, t + 6),
                g(this, t + 2, t + 5),
                g(this, t + 3, t + 4);
            return this
        }
        ,
        a.prototype.toString = function() {
            var e = this.length;
            return 0 === e ? "" : 0 === arguments.length ? R(this, 0, e) : p.apply(this, arguments)
        }
        ,
        a.prototype.toLocaleString = a.prototype.toString,
        a.prototype.equals = function(e) {
            if (!a.isBuffer(e))
                throw new TypeError("Argument must be a Buffer");
            return this === e || 0 === a.compare(this, e)
        }
        ,
        a.prototype.inspect = function() {
            var e = ""
              , t = r.INSPECT_MAX_BYTES;
            return e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim(),
            this.length > t && (e += " ... "),
            "<Buffer " + e + ">"
        }
        ,
        a.prototype.compare = function(e, t, r, n, i) {
            if (F(e, Uint8Array) && (e = a.from(e, e.offset, e.byteLength)),
            !a.isBuffer(e))
                throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
            if (void 0 === t && (t = 0),
            void 0 === r && (r = e ? e.length : 0),
            void 0 === n && (n = 0),
            void 0 === i && (i = this.length),
            t < 0 || r > e.length || n < 0 || i > this.length)
                throw new RangeError("out of range index");
            if (n >= i && t >= r)
                return 0;
            if (n >= i)
                return -1;
            if (t >= r)
                return 1;
            if (this === e)
                return 0;
            for (var o = (i >>>= 0) - (n >>>= 0), s = (r >>>= 0) - (t >>>= 0), u = Math.min(o, s), c = this.slice(n, i), l = e.slice(t, r), d = 0; d < u; ++d)
                if (c[d] !== l[d]) {
                    o = c[d],
                    s = l[d];
                    break
                }
            return o < s ? -1 : s < o ? 1 : 0
        }
        ,
        a.prototype.includes = function(e, t, r) {
            return -1 !== this.indexOf(e, t, r)
        }
        ,
        a.prototype.indexOf = function(e, t, r) {
            return b(this, e, t, r, !0)
        }
        ,
        a.prototype.lastIndexOf = function(e, t, r) {
            return b(this, e, t, r, !1)
        }
        ,
        a.prototype.write = function(e, t, r, n) {
            if (void 0 === t)
                n = "utf8",
                r = this.length,
                t = 0;
            else if (void 0 === r && "string" == typeof t)
                n = t,
                r = this.length,
                t = 0;
            else {
                if (!isFinite(t))
                    throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                t >>>= 0,
                isFinite(r) ? (r >>>= 0,
                void 0 === n && (n = "utf8")) : (n = r,
                r = void 0)
            }
            var i = this.length - t;
            if ((void 0 === r || r > i) && (r = i),
            e.length > 0 && (r < 0 || t < 0) || t > this.length)
                throw new RangeError("Attempt to write outside buffer bounds");
            n || (n = "utf8");
            for (var o = !1; ; )
                switch (n) {
                case "hex":
                    return y(this, e, t, r);
                case "utf8":
                case "utf-8":
                    return v(this, e, t, r);
                case "ascii":
                    return w(this, e, t, r);
                case "latin1":
                case "binary":
                    return _(this, e, t, r);
                case "base64":
                    return E(this, e, t, r);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return S(this, e, t, r);
                default:
                    if (o)
                        throw new TypeError("Unknown encoding: " + n);
                    n = ("" + n).toLowerCase(),
                    o = !0
                }
        }
        ,
        a.prototype.toJSON = function() {
            return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0)
            }
        }
        ;
        var j = 4096;
        function I(e, t, r) {
            var n = "";
            r = Math.min(e.length, r);
            for (var i = t; i < r; ++i)
                n += String.fromCharCode(127 & e[i]);
            return n
        }
        function k(e, t, r) {
            var n = "";
            r = Math.min(e.length, r);
            for (var i = t; i < r; ++i)
                n += String.fromCharCode(e[i]);
            return n
        }
        function C(e, t, r) {
            var n = e.length;
            (!t || t < 0) && (t = 0),
            (!r || r < 0 || r > n) && (r = n);
            for (var i = "", o = t; o < r; ++o)
                i += D(e[o]);
            return i
        }
        function x(e, t, r) {
            for (var n = e.slice(t, r), i = "", o = 0; o < n.length; o += 2)
                i += String.fromCharCode(n[o] + 256 * n[o + 1]);
            return i
        }
        function O(e, t, r) {
            if (e % 1 != 0 || e < 0)
                throw new RangeError("offset is not uint");
            if (e + t > r)
                throw new RangeError("Trying to access beyond buffer length")
        }
        function A(e, t, r, n, i, o) {
            if (!a.isBuffer(e))
                throw new TypeError('"buffer" argument must be a Buffer instance');
            if (t > i || t < o)
                throw new RangeError('"value" argument is out of bounds');
            if (r + n > e.length)
                throw new RangeError("Index out of range")
        }
        function T(e, t, r, n, i, o) {
            if (r + n > e.length)
                throw new RangeError("Index out of range");
            if (r < 0)
                throw new RangeError("Index out of range")
        }
        function P(e, t, r, n, o) {
            return t = +t,
            r >>>= 0,
            o || T(e, 0, r, 4),
            i.write(e, t, r, n, 23, 4),
            r + 4
        }
        function L(e, t, r, n, o) {
            return t = +t,
            r >>>= 0,
            o || T(e, 0, r, 8),
            i.write(e, t, r, n, 52, 8),
            r + 8
        }
        a.prototype.slice = function(e, t) {
            var r = this.length;
            (e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
            (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
            t < e && (t = e);
            var n = this.subarray(e, t);
            return n.__proto__ = a.prototype,
            n
        }
        ,
        a.prototype.readUIntLE = function(e, t, r) {
            e >>>= 0,
            t >>>= 0,
            r || O(e, t, this.length);
            for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256); )
                n += this[e + o] * i;
            return n
        }
        ,
        a.prototype.readUIntBE = function(e, t, r) {
            e >>>= 0,
            t >>>= 0,
            r || O(e, t, this.length);
            for (var n = this[e + --t], i = 1; t > 0 && (i *= 256); )
                n += this[e + --t] * i;
            return n
        }
        ,
        a.prototype.readUInt8 = function(e, t) {
            return e >>>= 0,
            t || O(e, 1, this.length),
            this[e]
        }
        ,
        a.prototype.readUInt16LE = function(e, t) {
            return e >>>= 0,
            t || O(e, 2, this.length),
            this[e] | this[e + 1] << 8
        }
        ,
        a.prototype.readUInt16BE = function(e, t) {
            return e >>>= 0,
            t || O(e, 2, this.length),
            this[e] << 8 | this[e + 1]
        }
        ,
        a.prototype.readUInt32LE = function(e, t) {
            return e >>>= 0,
            t || O(e, 4, this.length),
            (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
        }
        ,
        a.prototype.readUInt32BE = function(e, t) {
            return e >>>= 0,
            t || O(e, 4, this.length),
            16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
        }
        ,
        a.prototype.readIntLE = function(e, t, r) {
            e >>>= 0,
            t >>>= 0,
            r || O(e, t, this.length);
            for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256); )
                n += this[e + o] * i;
            return n >= (i *= 128) && (n -= Math.pow(2, 8 * t)),
            n
        }
        ,
        a.prototype.readIntBE = function(e, t, r) {
            e >>>= 0,
            t >>>= 0,
            r || O(e, t, this.length);
            for (var n = t, i = 1, o = this[e + --n]; n > 0 && (i *= 256); )
                o += this[e + --n] * i;
            return o >= (i *= 128) && (o -= Math.pow(2, 8 * t)),
            o
        }
        ,
        a.prototype.readInt8 = function(e, t) {
            return e >>>= 0,
            t || O(e, 1, this.length),
            128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
        }
        ,
        a.prototype.readInt16LE = function(e, t) {
            e >>>= 0,
            t || O(e, 2, this.length);
            var r = this[e] | this[e + 1] << 8;
            return 32768 & r ? 4294901760 | r : r
        }
        ,
        a.prototype.readInt16BE = function(e, t) {
            e >>>= 0,
            t || O(e, 2, this.length);
            var r = this[e + 1] | this[e] << 8;
            return 32768 & r ? 4294901760 | r : r
        }
        ,
        a.prototype.readInt32LE = function(e, t) {
            return e >>>= 0,
            t || O(e, 4, this.length),
            this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
        }
        ,
        a.prototype.readInt32BE = function(e, t) {
            return e >>>= 0,
            t || O(e, 4, this.length),
            this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
        }
        ,
        a.prototype.readFloatLE = function(e, t) {
            return e >>>= 0,
            t || O(e, 4, this.length),
            i.read(this, e, !0, 23, 4)
        }
        ,
        a.prototype.readFloatBE = function(e, t) {
            return e >>>= 0,
            t || O(e, 4, this.length),
            i.read(this, e, !1, 23, 4)
        }
        ,
        a.prototype.readDoubleLE = function(e, t) {
            return e >>>= 0,
            t || O(e, 8, this.length),
            i.read(this, e, !0, 52, 8)
        }
        ,
        a.prototype.readDoubleBE = function(e, t) {
            return e >>>= 0,
            t || O(e, 8, this.length),
            i.read(this, e, !1, 52, 8)
        }
        ,
        a.prototype.writeUIntLE = function(e, t, r, n) {
            (e = +e,
            t >>>= 0,
            r >>>= 0,
            n) || A(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
            var i = 1
              , o = 0;
            for (this[t] = 255 & e; ++o < r && (i *= 256); )
                this[t + o] = e / i & 255;
            return t + r
        }
        ,
        a.prototype.writeUIntBE = function(e, t, r, n) {
            (e = +e,
            t >>>= 0,
            r >>>= 0,
            n) || A(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
            var i = r - 1
              , o = 1;
            for (this[t + i] = 255 & e; --i >= 0 && (o *= 256); )
                this[t + i] = e / o & 255;
            return t + r
        }
        ,
        a.prototype.writeUInt8 = function(e, t, r) {
            return e = +e,
            t >>>= 0,
            r || A(this, e, t, 1, 255, 0),
            this[t] = 255 & e,
            t + 1
        }
        ,
        a.prototype.writeUInt16LE = function(e, t, r) {
            return e = +e,
            t >>>= 0,
            r || A(this, e, t, 2, 65535, 0),
            this[t] = 255 & e,
            this[t + 1] = e >>> 8,
            t + 2
        }
        ,
        a.prototype.writeUInt16BE = function(e, t, r) {
            return e = +e,
            t >>>= 0,
            r || A(this, e, t, 2, 65535, 0),
            this[t] = e >>> 8,
            this[t + 1] = 255 & e,
            t + 2
        }
        ,
        a.prototype.writeUInt32LE = function(e, t, r) {
            return e = +e,
            t >>>= 0,
            r || A(this, e, t, 4, 4294967295, 0),
            this[t + 3] = e >>> 24,
            this[t + 2] = e >>> 16,
            this[t + 1] = e >>> 8,
            this[t] = 255 & e,
            t + 4
        }
        ,
        a.prototype.writeUInt32BE = function(e, t, r) {
            return e = +e,
            t >>>= 0,
            r || A(this, e, t, 4, 4294967295, 0),
            this[t] = e >>> 24,
            this[t + 1] = e >>> 16,
            this[t + 2] = e >>> 8,
            this[t + 3] = 255 & e,
            t + 4
        }
        ,
        a.prototype.writeIntLE = function(e, t, r, n) {
            if (e = +e,
            t >>>= 0,
            !n) {
                var i = Math.pow(2, 8 * r - 1);
                A(this, e, t, r, i - 1, -i)
            }
            var o = 0
              , s = 1
              , a = 0;
            for (this[t] = 255 & e; ++o < r && (s *= 256); )
                e < 0 && 0 === a && 0 !== this[t + o - 1] && (a = 1),
                this[t + o] = (e / s | 0) - a & 255;
            return t + r
        }
        ,
        a.prototype.writeIntBE = function(e, t, r, n) {
            if (e = +e,
            t >>>= 0,
            !n) {
                var i = Math.pow(2, 8 * r - 1);
                A(this, e, t, r, i - 1, -i)
            }
            var o = r - 1
              , s = 1
              , a = 0;
            for (this[t + o] = 255 & e; --o >= 0 && (s *= 256); )
                e < 0 && 0 === a && 0 !== this[t + o + 1] && (a = 1),
                this[t + o] = (e / s | 0) - a & 255;
            return t + r
        }
        ,
        a.prototype.writeInt8 = function(e, t, r) {
            return e = +e,
            t >>>= 0,
            r || A(this, e, t, 1, 127, -128),
            e < 0 && (e = 255 + e + 1),
            this[t] = 255 & e,
            t + 1
        }
        ,
        a.prototype.writeInt16LE = function(e, t, r) {
            return e = +e,
            t >>>= 0,
            r || A(this, e, t, 2, 32767, -32768),
            this[t] = 255 & e,
            this[t + 1] = e >>> 8,
            t + 2
        }
        ,
        a.prototype.writeInt16BE = function(e, t, r) {
            return e = +e,
            t >>>= 0,
            r || A(this, e, t, 2, 32767, -32768),
            this[t] = e >>> 8,
            this[t + 1] = 255 & e,
            t + 2
        }
        ,
        a.prototype.writeInt32LE = function(e, t, r) {
            return e = +e,
            t >>>= 0,
            r || A(this, e, t, 4, 2147483647, -2147483648),
            this[t] = 255 & e,
            this[t + 1] = e >>> 8,
            this[t + 2] = e >>> 16,
            this[t + 3] = e >>> 24,
            t + 4
        }
        ,
        a.prototype.writeInt32BE = function(e, t, r) {
            return e = +e,
            t >>>= 0,
            r || A(this, e, t, 4, 2147483647, -2147483648),
            e < 0 && (e = 4294967295 + e + 1),
            this[t] = e >>> 24,
            this[t + 1] = e >>> 16,
            this[t + 2] = e >>> 8,
            this[t + 3] = 255 & e,
            t + 4
        }
        ,
        a.prototype.writeFloatLE = function(e, t, r) {
            return P(this, e, t, !0, r)
        }
        ,
        a.prototype.writeFloatBE = function(e, t, r) {
            return P(this, e, t, !1, r)
        }
        ,
        a.prototype.writeDoubleLE = function(e, t, r) {
            return L(this, e, t, !0, r)
        }
        ,
        a.prototype.writeDoubleBE = function(e, t, r) {
            return L(this, e, t, !1, r)
        }
        ,
        a.prototype.copy = function(e, t, r, n) {
            if (!a.isBuffer(e))
                throw new TypeError("argument should be a Buffer");
            if (r || (r = 0),
            n || 0 === n || (n = this.length),
            t >= e.length && (t = e.length),
            t || (t = 0),
            n > 0 && n < r && (n = r),
            n === r)
                return 0;
            if (0 === e.length || 0 === this.length)
                return 0;
            if (t < 0)
                throw new RangeError("targetStart out of bounds");
            if (r < 0 || r >= this.length)
                throw new RangeError("Index out of range");
            if (n < 0)
                throw new RangeError("sourceEnd out of bounds");
            n > this.length && (n = this.length),
            e.length - t < n - r && (n = e.length - t + r);
            var i = n - r;
            if (this === e && "function" == typeof Uint8Array.prototype.copyWithin)
                this.copyWithin(t, r, n);
            else if (this === e && r < t && t < n)
                for (var o = i - 1; o >= 0; --o)
                    e[o + t] = this[o + r];
            else
                Uint8Array.prototype.set.call(e, this.subarray(r, n), t);
            return i
        }
        ,
        a.prototype.fill = function(e, t, r, n) {
            if ("string" == typeof e) {
                if ("string" == typeof t ? (n = t,
                t = 0,
                r = this.length) : "string" == typeof r && (n = r,
                r = this.length),
                void 0 !== n && "string" != typeof n)
                    throw new TypeError("encoding must be a string");
                if ("string" == typeof n && !a.isEncoding(n))
                    throw new TypeError("Unknown encoding: " + n);
                if (1 === e.length) {
                    var i = e.charCodeAt(0);
                    ("utf8" === n && i < 128 || "latin1" === n) && (e = i)
                }
            } else
                "number" == typeof e && (e &= 255);
            if (t < 0 || this.length < t || this.length < r)
                throw new RangeError("Out of range index");
            if (r <= t)
                return this;
            var o;
            if (t >>>= 0,
            r = void 0 === r ? this.length : r >>> 0,
            e || (e = 0),
            "number" == typeof e)
                for (o = t; o < r; ++o)
                    this[o] = e;
            else {
                var s = a.isBuffer(e) ? e : a.from(e, n)
                  , u = s.length;
                if (0 === u)
                    throw new TypeError('The value "' + e + '" is invalid for argument "value"');
                for (o = 0; o < r - t; ++o)
                    this[o + t] = s[o % u]
            }
            return this
        }
        ;
        var N = /[^+/0-9A-Za-z-_]/g;
        function D(e) {
            return e < 16 ? "0" + e.toString(16) : e.toString(16)
        }
        function B(e, t) {
            var r;
            t = t || 1 / 0;
            for (var n = e.length, i = null, o = [], s = 0; s < n; ++s) {
                if ((r = e.charCodeAt(s)) > 55295 && r < 57344) {
                    if (!i) {
                        if (r > 56319) {
                            (t -= 3) > -1 && o.push(239, 191, 189);
                            continue
                        }
                        if (s + 1 === n) {
                            (t -= 3) > -1 && o.push(239, 191, 189);
                            continue
                        }
                        i = r;
                        continue
                    }
                    if (r < 56320) {
                        (t -= 3) > -1 && o.push(239, 191, 189),
                        i = r;
                        continue
                    }
                    r = 65536 + (i - 55296 << 10 | r - 56320)
                } else
                    i && (t -= 3) > -1 && o.push(239, 191, 189);
                if (i = null,
                r < 128) {
                    if ((t -= 1) < 0)
                        break;
                    o.push(r)
                } else if (r < 2048) {
                    if ((t -= 2) < 0)
                        break;
                    o.push(r >> 6 | 192, 63 & r | 128)
                } else if (r < 65536) {
                    if ((t -= 3) < 0)
                        break;
                    o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                } else {
                    if (!(r < 1114112))
                        throw new Error("Invalid code point");
                    if ((t -= 4) < 0)
                        break;
                    o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                }
            }
            return o
        }
        function U(e) {
            return n.toByteArray(function(e) {
                if ((e = (e = e.split("=")[0]).trim().replace(N, "")).length < 2)
                    return "";
                for (; e.length % 4 != 0; )
                    e += "=";
                return e
            }(e))
        }
        function $(e, t, r, n) {
            for (var i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i)
                t[i + r] = e[i];
            return i
        }
        function F(e, t) {
            return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name
        }
        function W(e) {
            return e != e
        }
    }
    , {
        "base64-js": 109,
        ieee754: 118
    }],
    112: [function(e, t, r) {
        var n = 1e3
          , i = 60 * n
          , o = 60 * i
          , s = 24 * o
          , a = 7 * s
          , u = 365.25 * s;
        function c(e, t, r, n) {
            var i = t >= 1.5 * r;
            return Math.round(e / r) + " " + n + (i ? "s" : "")
        }
        t.exports = function(e, t) {
            t = t || {};
            var r = typeof e;
            if ("string" === r && e.length > 0)
                return function(e) {
                    if ((e = String(e)).length > 100)
                        return;
                    var t = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
                    if (!t)
                        return;
                    var r = parseFloat(t[1]);
                    switch ((t[2] || "ms").toLowerCase()) {
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                        return r * u;
                    case "weeks":
                    case "week":
                    case "w":
                        return r * a;
                    case "days":
                    case "day":
                    case "d":
                        return r * s;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                        return r * o;
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                        return r * i;
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                        return r * n;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                        return r;
                    default:
                        return
                    }
                }(e);
            if ("number" === r && isFinite(e))
                return t.long ? function(e) {
                    var t = Math.abs(e);
                    if (t >= s)
                        return c(e, t, s, "day");
                    if (t >= o)
                        return c(e, t, o, "hour");
                    if (t >= i)
                        return c(e, t, i, "minute");
                    if (t >= n)
                        return c(e, t, n, "second");
                    return e + " ms"
                }(e) : function(e) {
                    var t = Math.abs(e);
                    if (t >= s)
                        return Math.round(e / s) + "d";
                    if (t >= o)
                        return Math.round(e / o) + "h";
                    if (t >= i)
                        return Math.round(e / i) + "m";
                    if (t >= n)
                        return Math.round(e / n) + "s";
                    return e + "ms"
                }(e);
            throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
        }
    }
    , {}],
    113: [function(e, t, r) {
        (function(n) {
            (function() {
                r.formatArgs = function(e) {
                    if (e[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + e[0] + (this.useColors ? "%c " : " ") + "+" + t.exports.humanize(this.diff),
                    !this.useColors)
                        return;
                    const r = "color: " + this.color;
                    e.splice(1, 0, r, "color: inherit");
                    let n = 0
                      , i = 0;
                    e[0].replace(/%[a-zA-Z%]/g, (e=>{
                        "%%" !== e && (n++,
                        "%c" === e && (i = n))
                    }
                    )),
                    e.splice(i, 0, r)
                }
                ,
                r.save = function(e) {
                    try {
                        e ? r.storage.setItem("debug", e) : r.storage.removeItem("debug")
                    } catch (e) {}
                }
                ,
                r.load = function() {
                    let e;
                    try {
                        e = r.storage.getItem("debug")
                    } catch (e) {}
                    !e && void 0 !== n && "env"in n && (e = n.env.DEBUG);
                    return e
                }
                ,
                r.useColors = function() {
                    if ("undefined" != typeof window && window.process && ("renderer" === window.process.type || window.process.__nwjs))
                        return !0;
                    if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))
                        return !1;
                    return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
                }
                ,
                r.storage = function() {
                    try {
                        return localStorage
                    } catch (e) {}
                }(),
                r.destroy = (()=>{
                    let e = !1;
                    return ()=>{
                        e || (e = !0,
                        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))
                    }
                }
                )(),
                r.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"],
                r.log = console.debug || console.log || (()=>{}
                ),
                t.exports = e("./common")(r);
                const {formatters: i} = t.exports;
                i.j = function(e) {
                    try {
                        return JSON.stringify(e)
                    } catch (e) {
                        return "[UnexpectedJSONParseError]: " + e.message
                    }
                }
            }
            ).call(this)
        }
        ).call(this, e("_process"))
    }
    , {
        "./common": 114,
        _process: 144
    }],
    114: [function(e, t, r) {
        t.exports = function(t) {
            function r(e) {
                let t, i, o, s = null;
                function a(...e) {
                    if (!a.enabled)
                        return;
                    const n = a
                      , i = Number(new Date)
                      , o = i - (t || i);
                    n.diff = o,
                    n.prev = t,
                    n.curr = i,
                    t = i,
                    e[0] = r.coerce(e[0]),
                    "string" != typeof e[0] && e.unshift("%O");
                    let s = 0;
                    e[0] = e[0].replace(/%([a-zA-Z%])/g, ((t,i)=>{
                        if ("%%" === t)
                            return "%";
                        s++;
                        const o = r.formatters[i];
                        if ("function" == typeof o) {
                            const r = e[s];
                            t = o.call(n, r),
                            e.splice(s, 1),
                            s--
                        }
                        return t
                    }
                    )),
                    r.formatArgs.call(n, e);
                    (n.log || r.log).apply(n, e)
                }
                return a.namespace = e,
                a.useColors = r.useColors(),
                a.color = r.selectColor(e),
                a.extend = n,
                a.destroy = r.destroy,
                Object.defineProperty(a, "enabled", {
                    enumerable: !0,
                    configurable: !1,
                    get: ()=>null !== s ? s : (i !== r.namespaces && (i = r.namespaces,
                    o = r.enabled(e)),
                    o),
                    set: e=>{
                        s = e
                    }
                }),
                "function" == typeof r.init && r.init(a),
                a
            }
            function n(e, t) {
                const n = r(this.namespace + (void 0 === t ? ":" : t) + e);
                return n.log = this.log,
                n
            }
            function i(e) {
                return e.toString().substring(2, e.toString().length - 2).replace(/\.\*\?$/, "*")
            }
            return r.debug = r,
            r.default = r,
            r.coerce = function(e) {
                if (e instanceof Error)
                    return e.stack || e.message;
                return e
            }
            ,
            r.disable = function() {
                const e = [...r.names.map(i), ...r.skips.map(i).map((e=>"-" + e))].join(",");
                return r.enable(""),
                e
            }
            ,
            r.enable = function(e) {
                let t;
                r.save(e),
                r.namespaces = e,
                r.names = [],
                r.skips = [];
                const n = ("string" == typeof e ? e : "").split(/[\s,]+/)
                  , i = n.length;
                for (t = 0; t < i; t++)
                    n[t] && ("-" === (e = n[t].replace(/\*/g, ".*?"))[0] ? r.skips.push(new RegExp("^" + e.slice(1) + "$")) : r.names.push(new RegExp("^" + e + "$")))
            }
            ,
            r.enabled = function(e) {
                if ("*" === e[e.length - 1])
                    return !0;
                let t, n;
                for (t = 0,
                n = r.skips.length; t < n; t++)
                    if (r.skips[t].test(e))
                        return !1;
                for (t = 0,
                n = r.names.length; t < n; t++)
                    if (r.names[t].test(e))
                        return !0;
                return !1
            }
            ,
            r.humanize = e("ms"),
            r.destroy = function() {
                console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")
            }
            ,
            Object.keys(t).forEach((e=>{
                r[e] = t[e]
            }
            )),
            r.names = [],
            r.skips = [],
            r.formatters = {},
            r.selectColor = function(e) {
                let t = 0;
                for (let r = 0; r < e.length; r++)
                    t = (t << 5) - t + e.charCodeAt(r),
                    t |= 0;
                return r.colors[Math.abs(t) % r.colors.length]
            }
            ,
            r.enable(r.load()),
            r
        }
    }
    , {
        ms: 112
    }],
    115: [function(e, t, r) {
        "use strict";
        var n, i = "object" == typeof Reflect ? Reflect : null, o = i && "function" == typeof i.apply ? i.apply : function(e, t, r) {
            return Function.prototype.apply.call(e, t, r)
        }
        ;
        n = i && "function" == typeof i.ownKeys ? i.ownKeys : Object.getOwnPropertySymbols ? function(e) {
            return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
        }
        : function(e) {
            return Object.getOwnPropertyNames(e)
        }
        ;
        var s = Number.isNaN || function(e) {
            return e != e
        }
        ;
        function a() {
            a.init.call(this)
        }
        t.exports = a,
        t.exports.once = function(e, t) {
            return new Promise((function(r, n) {
                function i(r) {
                    e.removeListener(t, o),
                    n(r)
                }
                function o() {
                    "function" == typeof e.removeListener && e.removeListener("error", i),
                    r([].slice.call(arguments))
                }
                m(e, t, o, {
                    once: !0
                }),
                "error" !== t && function(e, t, r) {
                    "function" == typeof e.on && m(e, "error", t, r)
                }(e, i, {
                    once: !0
                })
            }
            ))
        }
        ,
        a.EventEmitter = a,
        a.prototype._events = void 0,
        a.prototype._eventsCount = 0,
        a.prototype._maxListeners = void 0;
        var u = 10;
        function c(e) {
            if ("function" != typeof e)
                throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
        }
        function l(e) {
            return void 0 === e._maxListeners ? a.defaultMaxListeners : e._maxListeners
        }
        function d(e, t, r, n) {
            var i, o, s, a;
            if (c(r),
            void 0 === (o = e._events) ? (o = e._events = Object.create(null),
            e._eventsCount = 0) : (void 0 !== o.newListener && (e.emit("newListener", t, r.listener ? r.listener : r),
            o = e._events),
            s = o[t]),
            void 0 === s)
                s = o[t] = r,
                ++e._eventsCount;
            else if ("function" == typeof s ? s = o[t] = n ? [r, s] : [s, r] : n ? s.unshift(r) : s.push(r),
            (i = l(e)) > 0 && s.length > i && !s.warned) {
                s.warned = !0;
                var u = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                u.name = "MaxListenersExceededWarning",
                u.emitter = e,
                u.type = t,
                u.count = s.length,
                a = u,
                console && console.warn && console.warn(a)
            }
            return e
        }
        function f() {
            if (!this.fired)
                return this.target.removeListener(this.type, this.wrapFn),
                this.fired = !0,
                0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
        }
        function h(e, t, r) {
            var n = {
                fired: !1,
                wrapFn: void 0,
                target: e,
                type: t,
                listener: r
            }
              , i = f.bind(n);
            return i.listener = r,
            n.wrapFn = i,
            i
        }
        function p(e, t, r) {
            var n = e._events;
            if (void 0 === n)
                return [];
            var i = n[t];
            return void 0 === i ? [] : "function" == typeof i ? r ? [i.listener || i] : [i] : r ? function(e) {
                for (var t = new Array(e.length), r = 0; r < t.length; ++r)
                    t[r] = e[r].listener || e[r];
                return t
            }(i) : b(i, i.length)
        }
        function g(e) {
            var t = this._events;
            if (void 0 !== t) {
                var r = t[e];
                if ("function" == typeof r)
                    return 1;
                if (void 0 !== r)
                    return r.length
            }
            return 0
        }
        function b(e, t) {
            for (var r = new Array(t), n = 0; n < t; ++n)
                r[n] = e[n];
            return r
        }
        function m(e, t, r, n) {
            if ("function" == typeof e.on)
                n.once ? e.once(t, r) : e.on(t, r);
            else {
                if ("function" != typeof e.addEventListener)
                    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
                e.addEventListener(t, (function i(o) {
                    n.once && e.removeEventListener(t, i),
                    r(o)
                }
                ))
            }
        }
        Object.defineProperty(a, "defaultMaxListeners", {
            enumerable: !0,
            get: function() {
                return u
            },
            set: function(e) {
                if ("number" != typeof e || e < 0 || s(e))
                    throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
                u = e
            }
        }),
        a.init = function() {
            void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null),
            this._eventsCount = 0),
            this._maxListeners = this._maxListeners || void 0
        }
        ,
        a.prototype.setMaxListeners = function(e) {
            if ("number" != typeof e || e < 0 || s(e))
                throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
            return this._maxListeners = e,
            this
        }
        ,
        a.prototype.getMaxListeners = function() {
            return l(this)
        }
        ,
        a.prototype.emit = function(e) {
            for (var t = [], r = 1; r < arguments.length; r++)
                t.push(arguments[r]);
            var n = "error" === e
              , i = this._events;
            if (void 0 !== i)
                n = n && void 0 === i.error;
            else if (!n)
                return !1;
            if (n) {
                var s;
                if (t.length > 0 && (s = t[0]),
                s instanceof Error)
                    throw s;
                var a = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
                throw a.context = s,
                a
            }
            var u = i[e];
            if (void 0 === u)
                return !1;
            if ("function" == typeof u)
                o(u, this, t);
            else {
                var c = u.length
                  , l = b(u, c);
                for (r = 0; r < c; ++r)
                    o(l[r], this, t)
            }
            return !0
        }
        ,
        a.prototype.addListener = function(e, t) {
            return d(this, e, t, !1)
        }
        ,
        a.prototype.on = a.prototype.addListener,
        a.prototype.prependListener = function(e, t) {
            return d(this, e, t, !0)
        }
        ,
        a.prototype.once = function(e, t) {
            return c(t),
            this.on(e, h(this, e, t)),
            this
        }
        ,
        a.prototype.prependOnceListener = function(e, t) {
            return c(t),
            this.prependListener(e, h(this, e, t)),
            this
        }
        ,
        a.prototype.removeListener = function(e, t) {
            var r, n, i, o, s;
            if (c(t),
            void 0 === (n = this._events))
                return this;
            if (void 0 === (r = n[e]))
                return this;
            if (r === t || r.listener === t)
                0 == --this._eventsCount ? this._events = Object.create(null) : (delete n[e],
                n.removeListener && this.emit("removeListener", e, r.listener || t));
            else if ("function" != typeof r) {
                for (i = -1,
                o = r.length - 1; o >= 0; o--)
                    if (r[o] === t || r[o].listener === t) {
                        s = r[o].listener,
                        i = o;
                        break
                    }
                if (i < 0)
                    return this;
                0 === i ? r.shift() : function(e, t) {
                    for (; t + 1 < e.length; t++)
                        e[t] = e[t + 1];
                    e.pop()
                }(r, i),
                1 === r.length && (n[e] = r[0]),
                void 0 !== n.removeListener && this.emit("removeListener", e, s || t)
            }
            return this
        }
        ,
        a.prototype.off = a.prototype.removeListener,
        a.prototype.removeAllListeners = function(e) {
            var t, r, n;
            if (void 0 === (r = this._events))
                return this;
            if (void 0 === r.removeListener)
                return 0 === arguments.length ? (this._events = Object.create(null),
                this._eventsCount = 0) : void 0 !== r[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete r[e]),
                this;
            if (0 === arguments.length) {
                var i, o = Object.keys(r);
                for (n = 0; n < o.length; ++n)
                    "removeListener" !== (i = o[n]) && this.removeAllListeners(i);
                return this.removeAllListeners("removeListener"),
                this._events = Object.create(null),
                this._eventsCount = 0,
                this
            }
            if ("function" == typeof (t = r[e]))
                this.removeListener(e, t);
            else if (void 0 !== t)
                for (n = t.length - 1; n >= 0; n--)
                    this.removeListener(e, t[n]);
            return this
        }
        ,
        a.prototype.listeners = function(e) {
            return p(this, e, !0)
        }
        ,
        a.prototype.rawListeners = function(e) {
            return p(this, e, !1)
        }
        ,
        a.listenerCount = function(e, t) {
            return "function" == typeof e.listenerCount ? e.listenerCount(t) : g.call(e, t)
        }
        ,
        a.prototype.listenerCount = g,
        a.prototype.eventNames = function() {
            return this._eventsCount > 0 ? n(this._events) : []
        }
    }
    , {}],
    116: [function(e, t, r) {
        "use strict";
        t.exports = function e(t, r) {
            if (t === r)
                return !0;
            if (t && r && "object" == typeof t && "object" == typeof r) {
                if (t.constructor !== r.constructor)
                    return !1;
                var n, i, o;
                if (Array.isArray(t)) {
                    if ((n = t.length) != r.length)
                        return !1;
                    for (i = n; 0 != i--; )
                        if (!e(t[i], r[i]))
                            return !1;
                    return !0
                }
                if (t.constructor === RegExp)
                    return t.source === r.source && t.flags === r.flags;
                if (t.valueOf !== Object.prototype.valueOf)
                    return t.valueOf() === r.valueOf();
                if (t.toString !== Object.prototype.toString)
                    return t.toString() === r.toString();
                if ((n = (o = Object.keys(t)).length) !== Object.keys(r).length)
                    return !1;
                for (i = n; 0 != i--; )
                    if (!Object.prototype.hasOwnProperty.call(r, o[i]))
                        return !1;
                for (i = n; 0 != i--; ) {
                    var s = o[i];
                    if (!e(t[s], r[s]))
                        return !1
                }
                return !0
            }
            return t != t && r != r
        }
    }
    , {}],
    117: [function(e, t, r) {
        t.exports = u,
        u.default = u,
        u.stable = f,
        u.stableStringify = f;
        var n = "[...]"
          , i = "[Circular]"
          , o = []
          , s = [];
        function a() {
            return {
                depthLimit: Number.MAX_SAFE_INTEGER,
                edgesLimit: Number.MAX_SAFE_INTEGER
            }
        }
        function u(e, t, r, n) {
            var i;
            void 0 === n && (n = a()),
            l(e, "", 0, [], void 0, 0, n);
            try {
                i = 0 === s.length ? JSON.stringify(e, t, r) : JSON.stringify(e, p(t), r)
            } catch (e) {
                return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")
            } finally {
                for (; 0 !== o.length; ) {
                    var u = o.pop();
                    4 === u.length ? Object.defineProperty(u[0], u[1], u[3]) : u[0][u[1]] = u[2]
                }
            }
            return i
        }
        function c(e, t, r, n) {
            var i = Object.getOwnPropertyDescriptor(n, r);
            void 0 !== i.get ? i.configurable ? (Object.defineProperty(n, r, {
                value: e
            }),
            o.push([n, r, t, i])) : s.push([t, r, e]) : (n[r] = e,
            o.push([n, r, t]))
        }
        function l(e, t, r, o, s, a, u) {
            var d;
            if (a += 1,
            "object" == typeof e && null !== e) {
                for (d = 0; d < o.length; d++)
                    if (o[d] === e)
                        return void c(i, e, t, s);
                if (void 0 !== u.depthLimit && a > u.depthLimit)
                    return void c(n, e, t, s);
                if (void 0 !== u.edgesLimit && r + 1 > u.edgesLimit)
                    return void c(n, e, t, s);
                if (o.push(e),
                Array.isArray(e))
                    for (d = 0; d < e.length; d++)
                        l(e[d], d, d, o, e, a, u);
                else {
                    var f = Object.keys(e);
                    for (d = 0; d < f.length; d++) {
                        var h = f[d];
                        l(e[h], h, d, o, e, a, u)
                    }
                }
                o.pop()
            }
        }
        function d(e, t) {
            return e < t ? -1 : e > t ? 1 : 0
        }
        function f(e, t, r, n) {
            void 0 === n && (n = a());
            var i, u = h(e, "", 0, [], void 0, 0, n) || e;
            try {
                i = 0 === s.length ? JSON.stringify(u, t, r) : JSON.stringify(u, p(t), r)
            } catch (e) {
                return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")
            } finally {
                for (; 0 !== o.length; ) {
                    var c = o.pop();
                    4 === c.length ? Object.defineProperty(c[0], c[1], c[3]) : c[0][c[1]] = c[2]
                }
            }
            return i
        }
        function h(e, t, r, s, a, u, l) {
            var f;
            if (u += 1,
            "object" == typeof e && null !== e) {
                for (f = 0; f < s.length; f++)
                    if (s[f] === e)
                        return void c(i, e, t, a);
                try {
                    if ("function" == typeof e.toJSON)
                        return
                } catch (e) {
                    return
                }
                if (void 0 !== l.depthLimit && u > l.depthLimit)
                    return void c(n, e, t, a);
                if (void 0 !== l.edgesLimit && r + 1 > l.edgesLimit)
                    return void c(n, e, t, a);
                if (s.push(e),
                Array.isArray(e))
                    for (f = 0; f < e.length; f++)
                        h(e[f], f, f, s, e, u, l);
                else {
                    var p = {}
                      , g = Object.keys(e).sort(d);
                    for (f = 0; f < g.length; f++) {
                        var b = g[f];
                        h(e[b], b, f, s, e, u, l),
                        p[b] = e[b]
                    }
                    if (void 0 === a)
                        return p;
                    o.push([a, t, e]),
                    a[t] = p
                }
                s.pop()
            }
        }
        function p(e) {
            return e = void 0 !== e ? e : function(e, t) {
                return t
            }
            ,
            function(t, r) {
                if (s.length > 0)
                    for (var n = 0; n < s.length; n++) {
                        var i = s[n];
                        if (i[1] === t && i[0] === r) {
                            r = i[2],
                            s.splice(n, 1);
                            break
                        }
                    }
                return e.call(this, t, r)
            }
        }
    }
    , {}],
    118: [function(e, t, r) {
        /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
        r.read = function(e, t, r, n, i) {
            var o, s, a = 8 * i - n - 1, u = (1 << a) - 1, c = u >> 1, l = -7, d = r ? i - 1 : 0, f = r ? -1 : 1, h = e[t + d];
            for (d += f,
            o = h & (1 << -l) - 1,
            h >>= -l,
            l += a; l > 0; o = 256 * o + e[t + d],
            d += f,
            l -= 8)
                ;
            for (s = o & (1 << -l) - 1,
            o >>= -l,
            l += n; l > 0; s = 256 * s + e[t + d],
            d += f,
            l -= 8)
                ;
            if (0 === o)
                o = 1 - c;
            else {
                if (o === u)
                    return s ? NaN : 1 / 0 * (h ? -1 : 1);
                s += Math.pow(2, n),
                o -= c
            }
            return (h ? -1 : 1) * s * Math.pow(2, o - n)
        }
        ,
        r.write = function(e, t, r, n, i, o) {
            var s, a, u, c = 8 * o - i - 1, l = (1 << c) - 1, d = l >> 1, f = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0, h = n ? 0 : o - 1, p = n ? 1 : -1, g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
            for (t = Math.abs(t),
            isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0,
            s = l) : (s = Math.floor(Math.log(t) / Math.LN2),
            t * (u = Math.pow(2, -s)) < 1 && (s--,
            u *= 2),
            (t += s + d >= 1 ? f / u : f * Math.pow(2, 1 - d)) * u >= 2 && (s++,
            u /= 2),
            s + d >= l ? (a = 0,
            s = l) : s + d >= 1 ? (a = (t * u - 1) * Math.pow(2, i),
            s += d) : (a = t * Math.pow(2, d - 1) * Math.pow(2, i),
            s = 0)); i >= 8; e[r + h] = 255 & a,
            h += p,
            a /= 256,
            i -= 8)
                ;
            for (s = s << i | a,
            c += i; c > 0; e[r + h] = 255 & s,
            h += p,
            s /= 256,
            c -= 8)
                ;
            e[r + h - p] |= 128 * g
        }
    }
    , {}],
    119: [function(e, t, r) {
        "function" == typeof Object.create ? t.exports = function(e, t) {
            t && (e.super_ = t,
            e.prototype = Object.create(t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }))
        }
        : t.exports = function(e, t) {
            if (t) {
                e.super_ = t;
                var r = function() {};
                r.prototype = t.prototype,
                e.prototype = new r,
                e.prototype.constructor = e
            }
        }
    }
    , {}],
    120: [function(e, t, r) {
        "use strict";
        const n = e=>null !== e && "object" == typeof e && "function" == typeof e.pipe;
        n.writable = e=>n(e) && !1 !== e.writable && "function" == typeof e._write && "object" == typeof e._writableState,
        n.readable = e=>n(e) && !1 !== e.readable && "function" == typeof e._read && "object" == typeof e._readableState,
        n.duplex = e=>n.writable(e) && n.readable(e),
        n.transform = e=>n.duplex(e) && "function" == typeof e._transform && "object" == typeof e._transformState,
        t.exports = n
    }
    , {}],
    121: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        const n = e("readable-stream");
        r.default = function(e) {
            if (!(null == e ? void 0 : e.engine))
                throw new Error("Missing engine parameter!");
            const {engine: t} = e
              , r = new n.Duplex({
                objectMode: !0,
                read: ()=>{}
                ,
                write: function(e, n, i) {
                    t.handle(e, ((e,t)=>{
                        r.push(t)
                    }
                    )),
                    i()
                }
            });
            return t.on && t.on("notification", (e=>{
                r.push(e)
            }
            )),
            r
        }
    }
    , {
        "readable-stream": 138
    }],
    122: [function(e, t, r) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        const i = n(e("@metamask/safe-event-emitter"))
          , o = e("readable-stream");
        r.default = function(e={}) {
            const t = {}
              , r = new o.Duplex({
                objectMode: !0,
                read: ()=>{}
                ,
                write: function(r, i, o) {
                    let a = null;
                    try {
                        !r.id ? function(r) {
                            (null == e ? void 0 : e.retryOnMessage) && r.method === e.retryOnMessage && Object.values(t).forEach((({req: e, retryCount: r=0})=>{
                                if (e.id) {
                                    if (r >= 3)
                                        throw new Error(`StreamMiddleware - Retry limit exceeded for request id "${e.id}"`);
                                    t[e.id].retryCount = r + 1,
                                    s(e)
                                }
                            }
                            ));
                            n.emit("notification", r)
                        }(r) : function(e) {
                            const r = e.id
                              , n = t[r];
                            if (!n)
                                return void console.warn(`StreamMiddleware - Unknown response id "${r}"`);
                            delete t[r],
                            Object.assign(n.res, e),
                            setTimeout(n.end)
                        }(r)
                    } catch (e) {
                        a = e
                    }
                    o(a)
                }
            })
              , n = new i.default;
            return {
                events: n,
                middleware: (e,r,n,i)=>{
                    t[e.id] = {
                        req: e,
                        res: r,
                        next: n,
                        end: i
                    },
                    s(e)
                }
                ,
                stream: r
            };
            function s(e) {
                r.push(e)
            }
        }
    }
    , {
        "@metamask/safe-event-emitter": 80,
        "readable-stream": 138
    }],
    123: [function(e, t, r) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.createStreamMiddleware = r.createEngineStream = void 0;
        const i = n(e("./createEngineStream"));
        r.createEngineStream = i.default;
        const o = n(e("./createStreamMiddleware"));
        r.createStreamMiddleware = o.default
    }
    , {
        "./createEngineStream": 121,
        "./createStreamMiddleware": 122
    }],
    124: [function(e, t, r) {
        arguments[4][5][0].apply(r, arguments)
    }
    , {
        dup: 5
    }],
    125: [function(e, t, r) {
        (function(r) {
            (function() {
                "use strict";
                var n = Object.keys || function(e) {
                    var t = [];
                    for (var r in e)
                        t.push(r);
                    return t
                }
                ;
                t.exports = c;
                var i = e("./_stream_readable")
                  , o = e("./_stream_writable");
                e("inherits")(c, i);
                for (var s = n(o.prototype), a = 0; a < s.length; a++) {
                    var u = s[a];
                    c.prototype[u] || (c.prototype[u] = o.prototype[u])
                }
                function c(e) {
                    if (!(this instanceof c))
                        return new c(e);
                    i.call(this, e),
                    o.call(this, e),
                    this.allowHalfOpen = !0,
                    e && (!1 === e.readable && (this.readable = !1),
                    !1 === e.writable && (this.writable = !1),
                    !1 === e.allowHalfOpen && (this.allowHalfOpen = !1,
                    this.once("end", l)))
                }
                function l() {
                    this._writableState.ended || r.nextTick(d, this)
                }
                function d(e) {
                    e.end()
                }
                Object.defineProperty(c.prototype, "writableHighWaterMark", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState.highWaterMark
                    }
                }),
                Object.defineProperty(c.prototype, "writableBuffer", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState && this._writableState.getBuffer()
                    }
                }),
                Object.defineProperty(c.prototype, "writableLength", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState.length
                    }
                }),
                Object.defineProperty(c.prototype, "destroyed", {
                    enumerable: !1,
                    get: function() {
                        return void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed && this._writableState.destroyed)
                    },
                    set: function(e) {
                        void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e,
                        this._writableState.destroyed = e)
                    }
                })
            }
            ).call(this)
        }
        ).call(this, e("_process"))
    }
    , {
        "./_stream_readable": 127,
        "./_stream_writable": 129,
        _process: 144,
        inherits: 119
    }],
    126: [function(e, t, r) {
        arguments[4][7][0].apply(r, arguments)
    }
    , {
        "./_stream_transform": 128,
        dup: 7,
        inherits: 119
    }],
    127: [function(e, t, r) {
        (function(r, n) {
            (function() {
                "use strict";
                var i;
                t.exports = R,
                R.ReadableState = M;
                e("events").EventEmitter;
                var o = function(e, t) {
                    return e.listeners(t).length
                }
                  , s = e("./internal/streams/stream")
                  , a = e("buffer").Buffer
                  , u = (void 0 !== n ? n : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}).Uint8Array || function() {}
                ;
                var c, l = e("util");
                c = l && l.debuglog ? l.debuglog("stream") : function() {}
                ;
                var d, f, h, p = e("./internal/streams/buffer_list"), g = e("./internal/streams/destroy"), b = e("./internal/streams/state").getHighWaterMark, m = e("../errors").codes, y = m.ERR_INVALID_ARG_TYPE, v = m.ERR_STREAM_PUSH_AFTER_EOF, w = m.ERR_METHOD_NOT_IMPLEMENTED, _ = m.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
                e("inherits")(R, s);
                var E = g.errorOrDestroy
                  , S = ["error", "close", "destroy", "pause", "resume"];
                function M(t, r, n) {
                    i = i || e("./_stream_duplex"),
                    t = t || {},
                    "boolean" != typeof n && (n = r instanceof i),
                    this.objectMode = !!t.objectMode,
                    n && (this.objectMode = this.objectMode || !!t.readableObjectMode),
                    this.highWaterMark = b(this, t, "readableHighWaterMark", n),
                    this.buffer = new p,
                    this.length = 0,
                    this.pipes = null,
                    this.pipesCount = 0,
                    this.flowing = null,
                    this.ended = !1,
                    this.endEmitted = !1,
                    this.reading = !1,
                    this.sync = !0,
                    this.needReadable = !1,
                    this.emittedReadable = !1,
                    this.readableListening = !1,
                    this.resumeScheduled = !1,
                    this.paused = !0,
                    this.emitClose = !1 !== t.emitClose,
                    this.autoDestroy = !!t.autoDestroy,
                    this.destroyed = !1,
                    this.defaultEncoding = t.defaultEncoding || "utf8",
                    this.awaitDrain = 0,
                    this.readingMore = !1,
                    this.decoder = null,
                    this.encoding = null,
                    t.encoding && (d || (d = e("string_decoder/").StringDecoder),
                    this.decoder = new d(t.encoding),
                    this.encoding = t.encoding)
                }
                function R(t) {
                    if (i = i || e("./_stream_duplex"),
                    !(this instanceof R))
                        return new R(t);
                    var r = this instanceof i;
                    this._readableState = new M(t,this,r),
                    this.readable = !0,
                    t && ("function" == typeof t.read && (this._read = t.read),
                    "function" == typeof t.destroy && (this._destroy = t.destroy)),
                    s.call(this)
                }
                function j(e, t, r, n, i) {
                    c("readableAddChunk", t);
                    var o, s = e._readableState;
                    if (null === t)
                        s.reading = !1,
                        function(e, t) {
                            if (c("onEofChunk"),
                            t.ended)
                                return;
                            if (t.decoder) {
                                var r = t.decoder.end();
                                r && r.length && (t.buffer.push(r),
                                t.length += t.objectMode ? 1 : r.length)
                            }
                            t.ended = !0,
                            t.sync ? x(e) : (t.needReadable = !1,
                            t.emittedReadable || (t.emittedReadable = !0,
                            O(e)))
                        }(e, s);
                    else if (i || (o = function(e, t) {
                        var r;
                        n = t,
                        a.isBuffer(n) || n instanceof u || "string" == typeof t || void 0 === t || e.objectMode || (r = new y("chunk",["string", "Buffer", "Uint8Array"],t));
                        var n;
                        return r
                    }(s, t)),
                    o)
                        E(e, o);
                    else if (s.objectMode || t && t.length > 0)
                        if ("string" == typeof t || s.objectMode || Object.getPrototypeOf(t) === a.prototype || (t = function(e) {
                            return a.from(e)
                        }(t)),
                        n)
                            s.endEmitted ? E(e, new _) : I(e, s, t, !0);
                        else if (s.ended)
                            E(e, new v);
                        else {
                            if (s.destroyed)
                                return !1;
                            s.reading = !1,
                            s.decoder && !r ? (t = s.decoder.write(t),
                            s.objectMode || 0 !== t.length ? I(e, s, t, !1) : A(e, s)) : I(e, s, t, !1)
                        }
                    else
                        n || (s.reading = !1,
                        A(e, s));
                    return !s.ended && (s.length < s.highWaterMark || 0 === s.length)
                }
                function I(e, t, r, n) {
                    t.flowing && 0 === t.length && !t.sync ? (t.awaitDrain = 0,
                    e.emit("data", r)) : (t.length += t.objectMode ? 1 : r.length,
                    n ? t.buffer.unshift(r) : t.buffer.push(r),
                    t.needReadable && x(e)),
                    A(e, t)
                }
                Object.defineProperty(R.prototype, "destroyed", {
                    enumerable: !1,
                    get: function() {
                        return void 0 !== this._readableState && this._readableState.destroyed
                    },
                    set: function(e) {
                        this._readableState && (this._readableState.destroyed = e)
                    }
                }),
                R.prototype.destroy = g.destroy,
                R.prototype._undestroy = g.undestroy,
                R.prototype._destroy = function(e, t) {
                    t(e)
                }
                ,
                R.prototype.push = function(e, t) {
                    var r, n = this._readableState;
                    return n.objectMode ? r = !0 : "string" == typeof e && ((t = t || n.defaultEncoding) !== n.encoding && (e = a.from(e, t),
                    t = ""),
                    r = !0),
                    j(this, e, t, !1, r)
                }
                ,
                R.prototype.unshift = function(e) {
                    return j(this, e, null, !0, !1)
                }
                ,
                R.prototype.isPaused = function() {
                    return !1 === this._readableState.flowing
                }
                ,
                R.prototype.setEncoding = function(t) {
                    d || (d = e("string_decoder/").StringDecoder);
                    var r = new d(t);
                    this._readableState.decoder = r,
                    this._readableState.encoding = this._readableState.decoder.encoding;
                    for (var n = this._readableState.buffer.head, i = ""; null !== n; )
                        i += r.write(n.data),
                        n = n.next;
                    return this._readableState.buffer.clear(),
                    "" !== i && this._readableState.buffer.push(i),
                    this._readableState.length = i.length,
                    this
                }
                ;
                var k = 1073741824;
                function C(e, t) {
                    return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e != e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = function(e) {
                        return e >= k ? e = k : (e--,
                        e |= e >>> 1,
                        e |= e >>> 2,
                        e |= e >>> 4,
                        e |= e >>> 8,
                        e |= e >>> 16,
                        e++),
                        e
                    }(e)),
                    e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0,
                    0))
                }
                function x(e) {
                    var t = e._readableState;
                    c("emitReadable", t.needReadable, t.emittedReadable),
                    t.needReadable = !1,
                    t.emittedReadable || (c("emitReadable", t.flowing),
                    t.emittedReadable = !0,
                    r.nextTick(O, e))
                }
                function O(e) {
                    var t = e._readableState;
                    c("emitReadable_", t.destroyed, t.length, t.ended),
                    t.destroyed || !t.length && !t.ended || (e.emit("readable"),
                    t.emittedReadable = !1),
                    t.needReadable = !t.flowing && !t.ended && t.length <= t.highWaterMark,
                    D(e)
                }
                function A(e, t) {
                    t.readingMore || (t.readingMore = !0,
                    r.nextTick(T, e, t))
                }
                function T(e, t) {
                    for (; !t.reading && !t.ended && (t.length < t.highWaterMark || t.flowing && 0 === t.length); ) {
                        var r = t.length;
                        if (c("maybeReadMore read 0"),
                        e.read(0),
                        r === t.length)
                            break
                    }
                    t.readingMore = !1
                }
                function P(e) {
                    var t = e._readableState;
                    t.readableListening = e.listenerCount("readable") > 0,
                    t.resumeScheduled && !t.paused ? t.flowing = !0 : e.listenerCount("data") > 0 && e.resume()
                }
                function L(e) {
                    c("readable nexttick read 0"),
                    e.read(0)
                }
                function N(e, t) {
                    c("resume", t.reading),
                    t.reading || e.read(0),
                    t.resumeScheduled = !1,
                    e.emit("resume"),
                    D(e),
                    t.flowing && !t.reading && e.read(0)
                }
                function D(e) {
                    var t = e._readableState;
                    for (c("flow", t.flowing); t.flowing && null !== e.read(); )
                        ;
                }
                function B(e, t) {
                    return 0 === t.length ? null : (t.objectMode ? r = t.buffer.shift() : !e || e >= t.length ? (r = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.first() : t.buffer.concat(t.length),
                    t.buffer.clear()) : r = t.buffer.consume(e, t.decoder),
                    r);
                    var r
                }
                function U(e) {
                    var t = e._readableState;
                    c("endReadable", t.endEmitted),
                    t.endEmitted || (t.ended = !0,
                    r.nextTick($, t, e))
                }
                function $(e, t) {
                    if (c("endReadableNT", e.endEmitted, e.length),
                    !e.endEmitted && 0 === e.length && (e.endEmitted = !0,
                    t.readable = !1,
                    t.emit("end"),
                    e.autoDestroy)) {
                        var r = t._writableState;
                        (!r || r.autoDestroy && r.finished) && t.destroy()
                    }
                }
                function F(e, t) {
                    for (var r = 0, n = e.length; r < n; r++)
                        if (e[r] === t)
                            return r;
                    return -1
                }
                R.prototype.read = function(e) {
                    c("read", e),
                    e = parseInt(e, 10);
                    var t = this._readableState
                      , r = e;
                    if (0 !== e && (t.emittedReadable = !1),
                    0 === e && t.needReadable && ((0 !== t.highWaterMark ? t.length >= t.highWaterMark : t.length > 0) || t.ended))
                        return c("read: emitReadable", t.length, t.ended),
                        0 === t.length && t.ended ? U(this) : x(this),
                        null;
                    if (0 === (e = C(e, t)) && t.ended)
                        return 0 === t.length && U(this),
                        null;
                    var n, i = t.needReadable;
                    return c("need readable", i),
                    (0 === t.length || t.length - e < t.highWaterMark) && c("length less than watermark", i = !0),
                    t.ended || t.reading ? c("reading or ended", i = !1) : i && (c("do read"),
                    t.reading = !0,
                    t.sync = !0,
                    0 === t.length && (t.needReadable = !0),
                    this._read(t.highWaterMark),
                    t.sync = !1,
                    t.reading || (e = C(r, t))),
                    null === (n = e > 0 ? B(e, t) : null) ? (t.needReadable = t.length <= t.highWaterMark,
                    e = 0) : (t.length -= e,
                    t.awaitDrain = 0),
                    0 === t.length && (t.ended || (t.needReadable = !0),
                    r !== e && t.ended && U(this)),
                    null !== n && this.emit("data", n),
                    n
                }
                ,
                R.prototype._read = function(e) {
                    E(this, new w("_read()"))
                }
                ,
                R.prototype.pipe = function(e, t) {
                    var n = this
                      , i = this._readableState;
                    switch (i.pipesCount) {
                    case 0:
                        i.pipes = e;
                        break;
                    case 1:
                        i.pipes = [i.pipes, e];
                        break;
                    default:
                        i.pipes.push(e)
                    }
                    i.pipesCount += 1,
                    c("pipe count=%d opts=%j", i.pipesCount, t);
                    var s = (!t || !1 !== t.end) && e !== r.stdout && e !== r.stderr ? u : b;
                    function a(t, r) {
                        c("onunpipe"),
                        t === n && r && !1 === r.hasUnpiped && (r.hasUnpiped = !0,
                        c("cleanup"),
                        e.removeListener("close", p),
                        e.removeListener("finish", g),
                        e.removeListener("drain", l),
                        e.removeListener("error", h),
                        e.removeListener("unpipe", a),
                        n.removeListener("end", u),
                        n.removeListener("end", b),
                        n.removeListener("data", f),
                        d = !0,
                        !i.awaitDrain || e._writableState && !e._writableState.needDrain || l())
                    }
                    function u() {
                        c("onend"),
                        e.end()
                    }
                    i.endEmitted ? r.nextTick(s) : n.once("end", s),
                    e.on("unpipe", a);
                    var l = function(e) {
                        return function() {
                            var t = e._readableState;
                            c("pipeOnDrain", t.awaitDrain),
                            t.awaitDrain && t.awaitDrain--,
                            0 === t.awaitDrain && o(e, "data") && (t.flowing = !0,
                            D(e))
                        }
                    }(n);
                    e.on("drain", l);
                    var d = !1;
                    function f(t) {
                        c("ondata");
                        var r = e.write(t);
                        c("dest.write", r),
                        !1 === r && ((1 === i.pipesCount && i.pipes === e || i.pipesCount > 1 && -1 !== F(i.pipes, e)) && !d && (c("false write response, pause", i.awaitDrain),
                        i.awaitDrain++),
                        n.pause())
                    }
                    function h(t) {
                        c("onerror", t),
                        b(),
                        e.removeListener("error", h),
                        0 === o(e, "error") && E(e, t)
                    }
                    function p() {
                        e.removeListener("finish", g),
                        b()
                    }
                    function g() {
                        c("onfinish"),
                        e.removeListener("close", p),
                        b()
                    }
                    function b() {
                        c("unpipe"),
                        n.unpipe(e)
                    }
                    return n.on("data", f),
                    function(e, t, r) {
                        if ("function" == typeof e.prependListener)
                            return e.prependListener(t, r);
                        e._events && e._events[t] ? Array.isArray(e._events[t]) ? e._events[t].unshift(r) : e._events[t] = [r, e._events[t]] : e.on(t, r)
                    }(e, "error", h),
                    e.once("close", p),
                    e.once("finish", g),
                    e.emit("pipe", n),
                    i.flowing || (c("pipe resume"),
                    n.resume()),
                    e
                }
                ,
                R.prototype.unpipe = function(e) {
                    var t = this._readableState
                      , r = {
                        hasUnpiped: !1
                    };
                    if (0 === t.pipesCount)
                        return this;
                    if (1 === t.pipesCount)
                        return e && e !== t.pipes || (e || (e = t.pipes),
                        t.pipes = null,
                        t.pipesCount = 0,
                        t.flowing = !1,
                        e && e.emit("unpipe", this, r)),
                        this;
                    if (!e) {
                        var n = t.pipes
                          , i = t.pipesCount;
                        t.pipes = null,
                        t.pipesCount = 0,
                        t.flowing = !1;
                        for (var o = 0; o < i; o++)
                            n[o].emit("unpipe", this, {
                                hasUnpiped: !1
                            });
                        return this
                    }
                    var s = F(t.pipes, e);
                    return -1 === s || (t.pipes.splice(s, 1),
                    t.pipesCount -= 1,
                    1 === t.pipesCount && (t.pipes = t.pipes[0]),
                    e.emit("unpipe", this, r)),
                    this
                }
                ,
                R.prototype.on = function(e, t) {
                    var n = s.prototype.on.call(this, e, t)
                      , i = this._readableState;
                    return "data" === e ? (i.readableListening = this.listenerCount("readable") > 0,
                    !1 !== i.flowing && this.resume()) : "readable" === e && (i.endEmitted || i.readableListening || (i.readableListening = i.needReadable = !0,
                    i.flowing = !1,
                    i.emittedReadable = !1,
                    c("on readable", i.length, i.reading),
                    i.length ? x(this) : i.reading || r.nextTick(L, this))),
                    n
                }
                ,
                R.prototype.addListener = R.prototype.on,
                R.prototype.removeListener = function(e, t) {
                    var n = s.prototype.removeListener.call(this, e, t);
                    return "readable" === e && r.nextTick(P, this),
                    n
                }
                ,
                R.prototype.removeAllListeners = function(e) {
                    var t = s.prototype.removeAllListeners.apply(this, arguments);
                    return "readable" !== e && void 0 !== e || r.nextTick(P, this),
                    t
                }
                ,
                R.prototype.resume = function() {
                    var e = this._readableState;
                    return e.flowing || (c("resume"),
                    e.flowing = !e.readableListening,
                    function(e, t) {
                        t.resumeScheduled || (t.resumeScheduled = !0,
                        r.nextTick(N, e, t))
                    }(this, e)),
                    e.paused = !1,
                    this
                }
                ,
                R.prototype.pause = function() {
                    return c("call pause flowing=%j", this._readableState.flowing),
                    !1 !== this._readableState.flowing && (c("pause"),
                    this._readableState.flowing = !1,
                    this.emit("pause")),
                    this._readableState.paused = !0,
                    this
                }
                ,
                R.prototype.wrap = function(e) {
                    var t = this
                      , r = this._readableState
                      , n = !1;
                    for (var i in e.on("end", (function() {
                        if (c("wrapped end"),
                        r.decoder && !r.ended) {
                            var e = r.decoder.end();
                            e && e.length && t.push(e)
                        }
                        t.push(null)
                    }
                    )),
                    e.on("data", (function(i) {
                        (c("wrapped data"),
                        r.decoder && (i = r.decoder.write(i)),
                        r.objectMode && null == i) || (r.objectMode || i && i.length) && (t.push(i) || (n = !0,
                        e.pause()))
                    }
                    )),
                    e)
                        void 0 === this[i] && "function" == typeof e[i] && (this[i] = function(t) {
                            return function() {
                                return e[t].apply(e, arguments)
                            }
                        }(i));
                    for (var o = 0; o < S.length; o++)
                        e.on(S[o], this.emit.bind(this, S[o]));
                    return this._read = function(t) {
                        c("wrapped _read", t),
                        n && (n = !1,
                        e.resume())
                    }
                    ,
                    this
                }
                ,
                "function" == typeof Symbol && (R.prototype[Symbol.asyncIterator] = function() {
                    return void 0 === f && (f = e("./internal/streams/async_iterator")),
                    f(this)
                }
                ),
                Object.defineProperty(R.prototype, "readableHighWaterMark", {
                    enumerable: !1,
                    get: function() {
                        return this._readableState.highWaterMark
                    }
                }),
                Object.defineProperty(R.prototype, "readableBuffer", {
                    enumerable: !1,
                    get: function() {
                        return this._readableState && this._readableState.buffer
                    }
                }),
                Object.defineProperty(R.prototype, "readableFlowing", {
                    enumerable: !1,
                    get: function() {
                        return this._readableState.flowing
                    },
                    set: function(e) {
                        this._readableState && (this._readableState.flowing = e)
                    }
                }),
                R._fromList = B,
                Object.defineProperty(R.prototype, "readableLength", {
                    enumerable: !1,
                    get: function() {
                        return this._readableState.length
                    }
                }),
                "function" == typeof Symbol && (R.from = function(t, r) {
                    return void 0 === h && (h = e("./internal/streams/from")),
                    h(R, t, r)
                }
                )
            }
            ).call(this)
        }
        ).call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {
        "../errors": 124,
        "./_stream_duplex": 125,
        "./internal/streams/async_iterator": 130,
        "./internal/streams/buffer_list": 131,
        "./internal/streams/destroy": 132,
        "./internal/streams/from": 134,
        "./internal/streams/state": 136,
        "./internal/streams/stream": 137,
        _process: 144,
        buffer: 111,
        events: 115,
        inherits: 119,
        "string_decoder/": 191,
        util: 110
    }],
    128: [function(e, t, r) {
        arguments[4][9][0].apply(r, arguments)
    }
    , {
        "../errors": 124,
        "./_stream_duplex": 125,
        dup: 9,
        inherits: 119
    }],
    129: [function(e, t, r) {
        (function(r, n) {
            (function() {
                "use strict";
                function i(e) {
                    var t = this;
                    this.next = null,
                    this.entry = null,
                    this.finish = function() {
                        !function(e, t, r) {
                            var n = e.entry;
                            e.entry = null;
                            for (; n; ) {
                                var i = n.callback;
                                t.pendingcb--,
                                i(r),
                                n = n.next
                            }
                            t.corkedRequestsFree.next = e
                        }(t, e)
                    }
                }
                var o;
                t.exports = R,
                R.WritableState = M;
                var s = {
                    deprecate: e("util-deprecate")
                }
                  , a = e("./internal/streams/stream")
                  , u = e("buffer").Buffer
                  , c = (void 0 !== n ? n : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}).Uint8Array || function() {}
                ;
                var l, d = e("./internal/streams/destroy"), f = e("./internal/streams/state").getHighWaterMark, h = e("../errors").codes, p = h.ERR_INVALID_ARG_TYPE, g = h.ERR_METHOD_NOT_IMPLEMENTED, b = h.ERR_MULTIPLE_CALLBACK, m = h.ERR_STREAM_CANNOT_PIPE, y = h.ERR_STREAM_DESTROYED, v = h.ERR_STREAM_NULL_VALUES, w = h.ERR_STREAM_WRITE_AFTER_END, _ = h.ERR_UNKNOWN_ENCODING, E = d.errorOrDestroy;
                function S() {}
                function M(t, n, s) {
                    o = o || e("./_stream_duplex"),
                    t = t || {},
                    "boolean" != typeof s && (s = n instanceof o),
                    this.objectMode = !!t.objectMode,
                    s && (this.objectMode = this.objectMode || !!t.writableObjectMode),
                    this.highWaterMark = f(this, t, "writableHighWaterMark", s),
                    this.finalCalled = !1,
                    this.needDrain = !1,
                    this.ending = !1,
                    this.ended = !1,
                    this.finished = !1,
                    this.destroyed = !1;
                    var a = !1 === t.decodeStrings;
                    this.decodeStrings = !a,
                    this.defaultEncoding = t.defaultEncoding || "utf8",
                    this.length = 0,
                    this.writing = !1,
                    this.corked = 0,
                    this.sync = !0,
                    this.bufferProcessing = !1,
                    this.onwrite = function(e) {
                        !function(e, t) {
                            var n = e._writableState
                              , i = n.sync
                              , o = n.writecb;
                            if ("function" != typeof o)
                                throw new b;
                            if (function(e) {
                                e.writing = !1,
                                e.writecb = null,
                                e.length -= e.writelen,
                                e.writelen = 0
                            }(n),
                            t)
                                !function(e, t, n, i, o) {
                                    --t.pendingcb,
                                    n ? (r.nextTick(o, i),
                                    r.nextTick(O, e, t),
                                    e._writableState.errorEmitted = !0,
                                    E(e, i)) : (o(i),
                                    e._writableState.errorEmitted = !0,
                                    E(e, i),
                                    O(e, t))
                                }(e, n, i, t, o);
                            else {
                                var s = C(n) || e.destroyed;
                                s || n.corked || n.bufferProcessing || !n.bufferedRequest || k(e, n),
                                i ? r.nextTick(I, e, n, s, o) : I(e, n, s, o)
                            }
                        }(n, e)
                    }
                    ,
                    this.writecb = null,
                    this.writelen = 0,
                    this.bufferedRequest = null,
                    this.lastBufferedRequest = null,
                    this.pendingcb = 0,
                    this.prefinished = !1,
                    this.errorEmitted = !1,
                    this.emitClose = !1 !== t.emitClose,
                    this.autoDestroy = !!t.autoDestroy,
                    this.bufferedRequestCount = 0,
                    this.corkedRequestsFree = new i(this)
                }
                function R(t) {
                    var r = this instanceof (o = o || e("./_stream_duplex"));
                    if (!r && !l.call(R, this))
                        return new R(t);
                    this._writableState = new M(t,this,r),
                    this.writable = !0,
                    t && ("function" == typeof t.write && (this._write = t.write),
                    "function" == typeof t.writev && (this._writev = t.writev),
                    "function" == typeof t.destroy && (this._destroy = t.destroy),
                    "function" == typeof t.final && (this._final = t.final)),
                    a.call(this)
                }
                function j(e, t, r, n, i, o, s) {
                    t.writelen = n,
                    t.writecb = s,
                    t.writing = !0,
                    t.sync = !0,
                    t.destroyed ? t.onwrite(new y("write")) : r ? e._writev(i, t.onwrite) : e._write(i, o, t.onwrite),
                    t.sync = !1
                }
                function I(e, t, r, n) {
                    r || function(e, t) {
                        0 === t.length && t.needDrain && (t.needDrain = !1,
                        e.emit("drain"))
                    }(e, t),
                    t.pendingcb--,
                    n(),
                    O(e, t)
                }
                function k(e, t) {
                    t.bufferProcessing = !0;
                    var r = t.bufferedRequest;
                    if (e._writev && r && r.next) {
                        var n = t.bufferedRequestCount
                          , o = new Array(n)
                          , s = t.corkedRequestsFree;
                        s.entry = r;
                        for (var a = 0, u = !0; r; )
                            o[a] = r,
                            r.isBuf || (u = !1),
                            r = r.next,
                            a += 1;
                        o.allBuffers = u,
                        j(e, t, !0, t.length, o, "", s.finish),
                        t.pendingcb++,
                        t.lastBufferedRequest = null,
                        s.next ? (t.corkedRequestsFree = s.next,
                        s.next = null) : t.corkedRequestsFree = new i(t),
                        t.bufferedRequestCount = 0
                    } else {
                        for (; r; ) {
                            var c = r.chunk
                              , l = r.encoding
                              , d = r.callback;
                            if (j(e, t, !1, t.objectMode ? 1 : c.length, c, l, d),
                            r = r.next,
                            t.bufferedRequestCount--,
                            t.writing)
                                break
                        }
                        null === r && (t.lastBufferedRequest = null)
                    }
                    t.bufferedRequest = r,
                    t.bufferProcessing = !1
                }
                function C(e) {
                    return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing
                }
                function x(e, t) {
                    e._final((function(r) {
                        t.pendingcb--,
                        r && E(e, r),
                        t.prefinished = !0,
                        e.emit("prefinish"),
                        O(e, t)
                    }
                    ))
                }
                function O(e, t) {
                    var n = C(t);
                    if (n && (function(e, t) {
                        t.prefinished || t.finalCalled || ("function" != typeof e._final || t.destroyed ? (t.prefinished = !0,
                        e.emit("prefinish")) : (t.pendingcb++,
                        t.finalCalled = !0,
                        r.nextTick(x, e, t)))
                    }(e, t),
                    0 === t.pendingcb && (t.finished = !0,
                    e.emit("finish"),
                    t.autoDestroy))) {
                        var i = e._readableState;
                        (!i || i.autoDestroy && i.endEmitted) && e.destroy()
                    }
                    return n
                }
                e("inherits")(R, a),
                M.prototype.getBuffer = function() {
                    for (var e = this.bufferedRequest, t = []; e; )
                        t.push(e),
                        e = e.next;
                    return t
                }
                ,
                function() {
                    try {
                        Object.defineProperty(M.prototype, "buffer", {
                            get: s.deprecate((function() {
                                return this.getBuffer()
                            }
                            ), "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                        })
                    } catch (e) {}
                }(),
                "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (l = Function.prototype[Symbol.hasInstance],
                Object.defineProperty(R, Symbol.hasInstance, {
                    value: function(e) {
                        return !!l.call(this, e) || this === R && (e && e._writableState instanceof M)
                    }
                })) : l = function(e) {
                    return e instanceof this
                }
                ,
                R.prototype.pipe = function() {
                    E(this, new m)
                }
                ,
                R.prototype.write = function(e, t, n) {
                    var i, o = this._writableState, s = !1, a = !o.objectMode && (i = e,
                    u.isBuffer(i) || i instanceof c);
                    return a && !u.isBuffer(e) && (e = function(e) {
                        return u.from(e)
                    }(e)),
                    "function" == typeof t && (n = t,
                    t = null),
                    a ? t = "buffer" : t || (t = o.defaultEncoding),
                    "function" != typeof n && (n = S),
                    o.ending ? function(e, t) {
                        var n = new w;
                        E(e, n),
                        r.nextTick(t, n)
                    }(this, n) : (a || function(e, t, n, i) {
                        var o;
                        return null === n ? o = new v : "string" == typeof n || t.objectMode || (o = new p("chunk",["string", "Buffer"],n)),
                        !o || (E(e, o),
                        r.nextTick(i, o),
                        !1)
                    }(this, o, e, n)) && (o.pendingcb++,
                    s = function(e, t, r, n, i, o) {
                        if (!r) {
                            var s = function(e, t, r) {
                                e.objectMode || !1 === e.decodeStrings || "string" != typeof t || (t = u.from(t, r));
                                return t
                            }(t, n, i);
                            n !== s && (r = !0,
                            i = "buffer",
                            n = s)
                        }
                        var a = t.objectMode ? 1 : n.length;
                        t.length += a;
                        var c = t.length < t.highWaterMark;
                        c || (t.needDrain = !0);
                        if (t.writing || t.corked) {
                            var l = t.lastBufferedRequest;
                            t.lastBufferedRequest = {
                                chunk: n,
                                encoding: i,
                                isBuf: r,
                                callback: o,
                                next: null
                            },
                            l ? l.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest,
                            t.bufferedRequestCount += 1
                        } else
                            j(e, t, !1, a, n, i, o);
                        return c
                    }(this, o, a, e, t, n)),
                    s
                }
                ,
                R.prototype.cork = function() {
                    this._writableState.corked++
                }
                ,
                R.prototype.uncork = function() {
                    var e = this._writableState;
                    e.corked && (e.corked--,
                    e.writing || e.corked || e.bufferProcessing || !e.bufferedRequest || k(this, e))
                }
                ,
                R.prototype.setDefaultEncoding = function(e) {
                    if ("string" == typeof e && (e = e.toLowerCase()),
                    !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1))
                        throw new _(e);
                    return this._writableState.defaultEncoding = e,
                    this
                }
                ,
                Object.defineProperty(R.prototype, "writableBuffer", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState && this._writableState.getBuffer()
                    }
                }),
                Object.defineProperty(R.prototype, "writableHighWaterMark", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState.highWaterMark
                    }
                }),
                R.prototype._write = function(e, t, r) {
                    r(new g("_write()"))
                }
                ,
                R.prototype._writev = null,
                R.prototype.end = function(e, t, n) {
                    var i = this._writableState;
                    return "function" == typeof e ? (n = e,
                    e = null,
                    t = null) : "function" == typeof t && (n = t,
                    t = null),
                    null != e && this.write(e, t),
                    i.corked && (i.corked = 1,
                    this.uncork()),
                    i.ending || function(e, t, n) {
                        t.ending = !0,
                        O(e, t),
                        n && (t.finished ? r.nextTick(n) : e.once("finish", n));
                        t.ended = !0,
                        e.writable = !1
                    }(this, i, n),
                    this
                }
                ,
                Object.defineProperty(R.prototype, "writableLength", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState.length
                    }
                }),
                Object.defineProperty(R.prototype, "destroyed", {
                    enumerable: !1,
                    get: function() {
                        return void 0 !== this._writableState && this._writableState.destroyed
                    },
                    set: function(e) {
                        this._writableState && (this._writableState.destroyed = e)
                    }
                }),
                R.prototype.destroy = d.destroy,
                R.prototype._undestroy = d.undestroy,
                R.prototype._destroy = function(e, t) {
                    t(e)
                }
            }
            ).call(this)
        }
        ).call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {
        "../errors": 124,
        "./_stream_duplex": 125,
        "./internal/streams/destroy": 132,
        "./internal/streams/state": 136,
        "./internal/streams/stream": 137,
        _process: 144,
        buffer: 111,
        inherits: 119,
        "util-deprecate": 193
    }],
    130: [function(e, t, r) {
        (function(r) {
            (function() {
                "use strict";
                var n;
                function i(e, t, r) {
                    return (t = function(e) {
                        var t = function(e, t) {
                            if ("object" != typeof e || null === e)
                                return e;
                            var r = e[Symbol.toPrimitive];
                            if (void 0 !== r) {
                                var n = r.call(e, t || "default");
                                if ("object" != typeof n)
                                    return n;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return ("string" === t ? String : Number)(e)
                        }(e, "string");
                        return "symbol" == typeof t ? t : String(t)
                    }(t))in e ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = r,
                    e
                }
                var o = e("./end-of-stream")
                  , s = Symbol("lastResolve")
                  , a = Symbol("lastReject")
                  , u = Symbol("error")
                  , c = Symbol("ended")
                  , l = Symbol("lastPromise")
                  , d = Symbol("handlePromise")
                  , f = Symbol("stream");
                function h(e, t) {
                    return {
                        value: e,
                        done: t
                    }
                }
                function p(e) {
                    var t = e[s];
                    if (null !== t) {
                        var r = e[f].read();
                        null !== r && (e[l] = null,
                        e[s] = null,
                        e[a] = null,
                        t(h(r, !1)))
                    }
                }
                function g(e) {
                    r.nextTick(p, e)
                }
                var b = Object.getPrototypeOf((function() {}
                ))
                  , m = Object.setPrototypeOf((i(n = {
                    get stream() {
                        return this[f]
                    },
                    next: function() {
                        var e = this
                          , t = this[u];
                        if (null !== t)
                            return Promise.reject(t);
                        if (this[c])
                            return Promise.resolve(h(void 0, !0));
                        if (this[f].destroyed)
                            return new Promise((function(t, n) {
                                r.nextTick((function() {
                                    e[u] ? n(e[u]) : t(h(void 0, !0))
                                }
                                ))
                            }
                            ));
                        var n, i = this[l];
                        if (i)
                            n = new Promise(function(e, t) {
                                return function(r, n) {
                                    e.then((function() {
                                        t[c] ? r(h(void 0, !0)) : t[d](r, n)
                                    }
                                    ), n)
                                }
                            }(i, this));
                        else {
                            var o = this[f].read();
                            if (null !== o)
                                return Promise.resolve(h(o, !1));
                            n = new Promise(this[d])
                        }
                        return this[l] = n,
                        n
                    }
                }, Symbol.asyncIterator, (function() {
                    return this
                }
                )),
                i(n, "return", (function() {
                    var e = this;
                    return new Promise((function(t, r) {
                        e[f].destroy(null, (function(e) {
                            e ? r(e) : t(h(void 0, !0))
                        }
                        ))
                    }
                    ))
                }
                )),
                n), b);
                t.exports = function(e) {
                    var t, r = Object.create(m, (i(t = {}, f, {
                        value: e,
                        writable: !0
                    }),
                    i(t, s, {
                        value: null,
                        writable: !0
                    }),
                    i(t, a, {
                        value: null,
                        writable: !0
                    }),
                    i(t, u, {
                        value: null,
                        writable: !0
                    }),
                    i(t, c, {
                        value: e._readableState.endEmitted,
                        writable: !0
                    }),
                    i(t, d, {
                        value: function(e, t) {
                            var n = r[f].read();
                            n ? (r[l] = null,
                            r[s] = null,
                            r[a] = null,
                            e(h(n, !1))) : (r[s] = e,
                            r[a] = t)
                        },
                        writable: !0
                    }),
                    t));
                    return r[l] = null,
                    o(e, (function(e) {
                        if (e && "ERR_STREAM_PREMATURE_CLOSE" !== e.code) {
                            var t = r[a];
                            return null !== t && (r[l] = null,
                            r[s] = null,
                            r[a] = null,
                            t(e)),
                            void (r[u] = e)
                        }
                        var n = r[s];
                        null !== n && (r[l] = null,
                        r[s] = null,
                        r[a] = null,
                        n(h(void 0, !0))),
                        r[c] = !0
                    }
                    )),
                    e.on("readable", g.bind(null, r)),
                    r
                }
            }
            ).call(this)
        }
        ).call(this, e("_process"))
    }
    , {
        "./end-of-stream": 133,
        _process: 144
    }],
    131: [function(e, t, r) {
        arguments[4][12][0].apply(r, arguments)
    }
    , {
        buffer: 111,
        dup: 12,
        util: 110
    }],
    132: [function(e, t, r) {
        (function(e) {
            (function() {
                "use strict";
                function r(e, t) {
                    i(e, t),
                    n(e)
                }
                function n(e) {
                    e._writableState && !e._writableState.emitClose || e._readableState && !e._readableState.emitClose || e.emit("close")
                }
                function i(e, t) {
                    e.emit("error", t)
                }
                t.exports = {
                    destroy: function(t, o) {
                        var s = this
                          , a = this._readableState && this._readableState.destroyed
                          , u = this._writableState && this._writableState.destroyed;
                        return a || u ? (o ? o(t) : t && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0,
                        e.nextTick(i, this, t)) : e.nextTick(i, this, t)),
                        this) : (this._readableState && (this._readableState.destroyed = !0),
                        this._writableState && (this._writableState.destroyed = !0),
                        this._destroy(t || null, (function(t) {
                            !o && t ? s._writableState ? s._writableState.errorEmitted ? e.nextTick(n, s) : (s._writableState.errorEmitted = !0,
                            e.nextTick(r, s, t)) : e.nextTick(r, s, t) : o ? (e.nextTick(n, s),
                            o(t)) : e.nextTick(n, s)
                        }
                        )),
                        this)
                    },
                    undestroy: function() {
                        this._readableState && (this._readableState.destroyed = !1,
                        this._readableState.reading = !1,
                        this._readableState.ended = !1,
                        this._readableState.endEmitted = !1),
                        this._writableState && (this._writableState.destroyed = !1,
                        this._writableState.ended = !1,
                        this._writableState.ending = !1,
                        this._writableState.finalCalled = !1,
                        this._writableState.prefinished = !1,
                        this._writableState.finished = !1,
                        this._writableState.errorEmitted = !1)
                    },
                    errorOrDestroy: function(e, t) {
                        var r = e._readableState
                          , n = e._writableState;
                        r && r.autoDestroy || n && n.autoDestroy ? e.destroy(t) : e.emit("error", t)
                    }
                }
            }
            ).call(this)
        }
        ).call(this, e("_process"))
    }
    , {
        _process: 144
    }],
    133: [function(e, t, r) {
        arguments[4][14][0].apply(r, arguments)
    }
    , {
        "../../../errors": 124,
        dup: 14
    }],
    134: [function(e, t, r) {
        arguments[4][15][0].apply(r, arguments)
    }
    , {
        dup: 15
    }],
    135: [function(e, t, r) {
        arguments[4][16][0].apply(r, arguments)
    }
    , {
        "../../../errors": 124,
        "./end-of-stream": 133,
        dup: 16
    }],
    136: [function(e, t, r) {
        arguments[4][17][0].apply(r, arguments)
    }
    , {
        "../../../errors": 124,
        dup: 17
    }],
    137: [function(e, t, r) {
        arguments[4][18][0].apply(r, arguments)
    }
    , {
        dup: 18,
        events: 115
    }],
    138: [function(e, t, r) {
        arguments[4][19][0].apply(r, arguments)
    }
    , {
        "./lib/_stream_duplex.js": 125,
        "./lib/_stream_passthrough.js": 126,
        "./lib/_stream_readable.js": 127,
        "./lib/_stream_transform.js": 128,
        "./lib/_stream_writable.js": 129,
        "./lib/internal/streams/end-of-stream.js": 133,
        "./lib/internal/streams/pipeline.js": 135,
        dup: 19
    }],
    139: [function(e, t, r) {
        !function(e, r) {
            "use strict";
            "function" == typeof define && define.amd ? define(r) : "object" == typeof t && t.exports ? t.exports = r() : e.log = r()
        }(this, (function() {
            "use strict";
            var e = function() {}
              , t = "undefined"
              , r = typeof window !== t && typeof window.navigator !== t && /Trident\/|MSIE /.test(window.navigator.userAgent)
              , n = ["trace", "debug", "info", "warn", "error"]
              , i = {}
              , o = null;
            function s(e, t) {
                var r = e[t];
                if ("function" == typeof r.bind)
                    return r.bind(e);
                try {
                    return Function.prototype.bind.call(r, e)
                } catch (t) {
                    return function() {
                        return Function.prototype.apply.apply(r, [e, arguments])
                    }
                }
            }
            function a() {
                console.log && (console.log.apply ? console.log.apply(console, arguments) : Function.prototype.apply.apply(console.log, [console, arguments])),
                console.trace && console.trace()
            }
            function u() {
                for (var r = this.getLevel(), i = 0; i < n.length; i++) {
                    var o = n[i];
                    this[o] = i < r ? e : this.methodFactory(o, r, this.name)
                }
                if (this.log = this.debug,
                typeof console === t && r < this.levels.SILENT)
                    return "No console available for logging"
            }
            function c(e) {
                return function() {
                    typeof console !== t && (u.call(this),
                    this[e].apply(this, arguments))
                }
            }
            function l(n, i, o) {
                return function(n) {
                    return "debug" === n && (n = "log"),
                    typeof console !== t && ("trace" === n && r ? a : void 0 !== console[n] ? s(console, n) : void 0 !== console.log ? s(console, "log") : e)
                }(n) || c.apply(this, arguments)
            }
            function d(e, r) {
                var s, a, c, d = this, f = "loglevel";
                function h() {
                    var e;
                    if (typeof window !== t && f) {
                        try {
                            e = window.localStorage[f]
                        } catch (e) {}
                        if (typeof e === t)
                            try {
                                var r = window.document.cookie
                                  , n = encodeURIComponent(f)
                                  , i = r.indexOf(n + "=");
                                -1 !== i && (e = /^([^;]+)/.exec(r.slice(i + n.length + 1))[1])
                            } catch (e) {}
                        return void 0 === d.levels[e] && (e = void 0),
                        e
                    }
                }
                function p(e) {
                    var t = e;
                    if ("string" == typeof t && void 0 !== d.levels[t.toUpperCase()] && (t = d.levels[t.toUpperCase()]),
                    "number" == typeof t && t >= 0 && t <= d.levels.SILENT)
                        return t;
                    throw new TypeError("log.setLevel() called with invalid level: " + e)
                }
                "string" == typeof e ? f += ":" + e : "symbol" == typeof e && (f = void 0),
                d.name = e,
                d.levels = {
                    TRACE: 0,
                    DEBUG: 1,
                    INFO: 2,
                    WARN: 3,
                    ERROR: 4,
                    SILENT: 5
                },
                d.methodFactory = r || l,
                d.getLevel = function() {
                    return null != c ? c : null != a ? a : s
                }
                ,
                d.setLevel = function(e, r) {
                    return c = p(e),
                    !1 !== r && function(e) {
                        var r = (n[e] || "silent").toUpperCase();
                        if (typeof window !== t && f) {
                            try {
                                return void (window.localStorage[f] = r)
                            } catch (e) {}
                            try {
                                window.document.cookie = encodeURIComponent(f) + "=" + r + ";"
                            } catch (e) {}
                        }
                    }(c),
                    u.call(d)
                }
                ,
                d.setDefaultLevel = function(e) {
                    a = p(e),
                    h() || d.setLevel(e, !1)
                }
                ,
                d.resetLevel = function() {
                    c = null,
                    function() {
                        if (typeof window !== t && f) {
                            try {
                                window.localStorage.removeItem(f)
                            } catch (e) {}
                            try {
                                window.document.cookie = encodeURIComponent(f) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC"
                            } catch (e) {}
                        }
                    }(),
                    u.call(d)
                }
                ,
                d.enableAll = function(e) {
                    d.setLevel(d.levels.TRACE, e)
                }
                ,
                d.disableAll = function(e) {
                    d.setLevel(d.levels.SILENT, e)
                }
                ,
                d.rebuild = function() {
                    if (o !== d && (s = p(o.getLevel())),
                    u.call(d),
                    o === d)
                        for (var e in i)
                            i[e].rebuild()
                }
                ,
                s = p(o ? o.getLevel() : "WARN");
                var g = h();
                null != g && (c = p(g)),
                u.call(d)
            }
            (o = new d).getLogger = function(e) {
                if ("symbol" != typeof e && "string" != typeof e || "" === e)
                    throw new TypeError("You must supply a name when creating a logger.");
                var t = i[e];
                return t || (t = i[e] = new d(e,o.methodFactory)),
                t
            }
            ;
            var f = typeof window !== t ? window.log : void 0;
            return o.noConflict = function() {
                return typeof window !== t && window.log === o && (window.log = f),
                o
            }
            ,
            o.getLoggers = function() {
                return i
            }
            ,
            o.default = o,
            o
        }
        ))
    }
    , {}],
    140: [function(e, t, r) {
        var n = e("wrappy");
        function i(e) {
            var t = function() {
                return t.called ? t.value : (t.called = !0,
                t.value = e.apply(this, arguments))
            };
            return t.called = !1,
            t
        }
        function o(e) {
            var t = function() {
                if (t.called)
                    throw new Error(t.onceError);
                return t.called = !0,
                t.value = e.apply(this, arguments)
            }
              , r = e.name || "Function wrapped with `once`";
            return t.onceError = r + " shouldn't be called more than once",
            t.called = !1,
            t
        }
        t.exports = n(i),
        t.exports.strict = n(o),
        i.proto = i((function() {
            Object.defineProperty(Function.prototype, "once", {
                value: function() {
                    return i(this)
                },
                configurable: !0
            }),
            Object.defineProperty(Function.prototype, "onceStrict", {
                value: function() {
                    return o(this)
                },
                configurable: !0
            })
        }
        ))
    }
    , {
        wrappy: 209
    }],
    141: [function(e, t, r) {
        "use strict";
        const {ErrorWithCause: n} = e("./lib/error-with-cause")
          , {findCauseByReference: i, getErrorCause: o, messageWithCauses: s, stackWithCauses: a} = e("./lib/helpers");
        t.exports = {
            ErrorWithCause: n,
            findCauseByReference: i,
            getErrorCause: o,
            stackWithCauses: a,
            messageWithCauses: s
        }
    }
    , {
        "./lib/error-with-cause": 142,
        "./lib/helpers": 143
    }],
    142: [function(e, t, r) {
        "use strict";
        class n extends Error {
            constructor(e, {cause: t}={}) {
                super(e),
                this.name = n.name,
                t && (this.cause = t),
                this.message = e
            }
        }
        t.exports = {
            ErrorWithCause: n
        }
    }
    , {}],
    143: [function(e, t, r) {
        "use strict";
        const n = e=>{
            if (e && "object" == typeof e && "cause"in e) {
                if ("function" == typeof e.cause) {
                    const t = e.cause();
                    return t instanceof Error ? t : void 0
                }
                return e.cause instanceof Error ? e.cause : void 0
            }
        }
          , i = (e,t)=>{
            if (!(e instanceof Error))
                return "";
            const r = e.stack || "";
            if (t.has(e))
                return r + "\ncauses have become circular...";
            const o = n(e);
            return o ? (t.add(e),
            r + "\ncaused by: " + i(o, t)) : r
        }
          , o = (e,t,r)=>{
            if (!(e instanceof Error))
                return "";
            const i = r ? "" : e.message || "";
            if (t.has(e))
                return i + ": ...";
            const s = n(e);
            if (s) {
                t.add(e);
                const r = "cause"in e && "function" == typeof e.cause;
                return i + (r ? "" : ": ") + o(s, t, r)
            }
            return i
        }
        ;
        t.exports = {
            findCauseByReference: (e,t)=>{
                if (!e || !t)
                    return;
                if (!(e instanceof Error))
                    return;
                if (!(t.prototype instanceof Error) && t !== Error)
                    return;
                const r = new Set;
                let i = e;
                for (; i && !r.has(i); ) {
                    if (r.add(i),
                    i instanceof t)
                        return i;
                    i = n(i)
                }
            }
            ,
            getErrorCause: n,
            stackWithCauses: e=>i(e, new Set),
            messageWithCauses: e=>o(e, new Set)
        }
    }
    , {}],
    144: [function(e, t, r) {
        var n, i, o = t.exports = {};
        function s() {
            throw new Error("setTimeout has not been defined")
        }
        function a() {
            throw new Error("clearTimeout has not been defined")
        }
        function u(e) {
            if (n === setTimeout)
                return setTimeout(e, 0);
            if ((n === s || !n) && setTimeout)
                return n = setTimeout,
                setTimeout(e, 0);
            try {
                return n(e, 0)
            } catch (t) {
                try {
                    return n.call(null, e, 0)
                } catch (t) {
                    return n.call(this, e, 0)
                }
            }
        }
        !function() {
            try {
                n = "function" == typeof setTimeout ? setTimeout : s
            } catch (e) {
                n = s
            }
            try {
                i = "function" == typeof clearTimeout ? clearTimeout : a
            } catch (e) {
                i = a
            }
        }();
        var c, l = [], d = !1, f = -1;
        function h() {
            d && c && (d = !1,
            c.length ? l = c.concat(l) : f = -1,
            l.length && p())
        }
        function p() {
            if (!d) {
                var e = u(h);
                d = !0;
                for (var t = l.length; t; ) {
                    for (c = l,
                    l = []; ++f < t; )
                        c && c[f].run();
                    f = -1,
                    t = l.length
                }
                c = null,
                d = !1,
                function(e) {
                    if (i === clearTimeout)
                        return clearTimeout(e);
                    if ((i === a || !i) && clearTimeout)
                        return i = clearTimeout,
                        clearTimeout(e);
                    try {
                        return i(e)
                    } catch (t) {
                        try {
                            return i.call(null, e)
                        } catch (t) {
                            return i.call(this, e)
                        }
                    }
                }(e)
            }
        }
        function g(e, t) {
            this.fun = e,
            this.array = t
        }
        function b() {}
        o.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var r = 1; r < arguments.length; r++)
                    t[r - 1] = arguments[r];
            l.push(new g(e,t)),
            1 !== l.length || d || u(p)
        }
        ,
        g.prototype.run = function() {
            this.fun.apply(null, this.array)
        }
        ,
        o.title = "browser",
        o.browser = !0,
        o.env = {},
        o.argv = [],
        o.version = "",
        o.versions = {},
        o.on = b,
        o.addListener = b,
        o.once = b,
        o.off = b,
        o.removeListener = b,
        o.removeAllListeners = b,
        o.emit = b,
        o.prependListener = b,
        o.prependOnceListener = b,
        o.listeners = function(e) {
            return []
        }
        ,
        o.binding = function(e) {
            throw new Error("process.binding is not supported")
        }
        ,
        o.cwd = function() {
            return "/"
        }
        ,
        o.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }
        ,
        o.umask = function() {
            return 0
        }
    }
    , {}],
    145: [function(e, t, r) {
        /*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
        var n = e("buffer")
          , i = n.Buffer;
        function o(e, t) {
            for (var r in e)
                t[r] = e[r]
        }
        function s(e, t, r) {
            return i(e, t, r)
        }
        i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? t.exports = n : (o(n, r),
        r.Buffer = s),
        s.prototype = Object.create(i.prototype),
        o(i, s),
        s.from = function(e, t, r) {
            if ("number" == typeof e)
                throw new TypeError("Argument must not be a number");
            return i(e, t, r)
        }
        ,
        s.alloc = function(e, t, r) {
            if ("number" != typeof e)
                throw new TypeError("Argument must be a number");
            var n = i(e);
            return void 0 !== t ? "string" == typeof r ? n.fill(t, r) : n.fill(t) : n.fill(0),
            n
        }
        ,
        s.allocUnsafe = function(e) {
            if ("number" != typeof e)
                throw new TypeError("Argument must be a number");
            return i(e)
        }
        ,
        s.allocUnsafeSlow = function(e) {
            if ("number" != typeof e)
                throw new TypeError("Argument must be a number");
            return n.SlowBuffer(e)
        }
    }
    , {
        buffer: 111
    }],
    146: [function(e, t, r) {
        const n = Symbol("SemVer ANY");
        class i {
            static get ANY() {
                return n
            }
            constructor(e, t) {
                if (t = o(t),
                e instanceof i) {
                    if (e.loose === !!t.loose)
                        return e;
                    e = e.value
                }
                e = e.trim().split(/\s+/).join(" "),
                c("comparator", e, t),
                this.options = t,
                this.loose = !!t.loose,
                this.parse(e),
                this.semver === n ? this.value = "" : this.value = this.operator + this.semver.version,
                c("comp", this)
            }
            parse(e) {
                const t = this.options.loose ? s[a.COMPARATORLOOSE] : s[a.COMPARATOR]
                  , r = e.match(t);
                if (!r)
                    throw new TypeError(`Invalid comparator: ${e}`);
                this.operator = void 0 !== r[1] ? r[1] : "",
                "=" === this.operator && (this.operator = ""),
                r[2] ? this.semver = new l(r[2],this.options.loose) : this.semver = n
            }
            toString() {
                return this.value
            }
            test(e) {
                if (c("Comparator.test", e, this.options.loose),
                this.semver === n || e === n)
                    return !0;
                if ("string" == typeof e)
                    try {
                        e = new l(e,this.options)
                    } catch (e) {
                        return !1
                    }
                return u(e, this.operator, this.semver, this.options)
            }
            intersects(e, t) {
                if (!(e instanceof i))
                    throw new TypeError("a Comparator is required");
                return "" === this.operator ? "" === this.value || new d(e.value,t).test(this.value) : "" === e.operator ? "" === e.value || new d(this.value,t).test(e.semver) : (!(t = o(t)).includePrerelease || "<0.0.0-0" !== this.value && "<0.0.0-0" !== e.value) && (!(!t.includePrerelease && (this.value.startsWith("<0.0.0") || e.value.startsWith("<0.0.0"))) && (!(!this.operator.startsWith(">") || !e.operator.startsWith(">")) || (!(!this.operator.startsWith("<") || !e.operator.startsWith("<")) || (!(this.semver.version !== e.semver.version || !this.operator.includes("=") || !e.operator.includes("=")) || (!!(u(this.semver, "<", e.semver, t) && this.operator.startsWith(">") && e.operator.startsWith("<")) || !!(u(this.semver, ">", e.semver, t) && this.operator.startsWith("<") && e.operator.startsWith(">")))))))
            }
        }
        t.exports = i;
        const o = e("../internal/parse-options")
          , {safeRe: s, t: a} = e("../internal/re")
          , u = e("../functions/cmp")
          , c = e("../internal/debug")
          , l = e("./semver")
          , d = e("./range")
    }
    , {
        "../functions/cmp": 150,
        "../internal/debug": 175,
        "../internal/parse-options": 178,
        "../internal/re": 179,
        "./range": 147,
        "./semver": 148
    }],
    147: [function(e, t, r) {
        class n {
            constructor(e, t) {
                if (t = o(t),
                e instanceof n)
                    return e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease ? e : new n(e.raw,t);
                if (e instanceof s)
                    return this.raw = e.value,
                    this.set = [[e]],
                    this.format(),
                    this;
                if (this.options = t,
                this.loose = !!t.loose,
                this.includePrerelease = !!t.includePrerelease,
                this.raw = e.trim().split(/\s+/).join(" "),
                this.set = this.raw.split("||").map((e=>this.parseRange(e.trim()))).filter((e=>e.length)),
                !this.set.length)
                    throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
                if (this.set.length > 1) {
                    const e = this.set[0];
                    if (this.set = this.set.filter((e=>!b(e[0]))),
                    0 === this.set.length)
                        this.set = [e];
                    else if (this.set.length > 1)
                        for (const e of this.set)
                            if (1 === e.length && m(e[0])) {
                                this.set = [e];
                                break
                            }
                }
                this.format()
            }
            format() {
                return this.range = this.set.map((e=>e.join(" ").trim())).join("||").trim(),
                this.range
            }
            toString() {
                return this.range
            }
            parseRange(e) {
                const t = ((this.options.includePrerelease && p) | (this.options.loose && g)) + ":" + e
                  , r = i.get(t);
                if (r)
                    return r;
                const n = this.options.loose
                  , o = n ? c[l.HYPHENRANGELOOSE] : c[l.HYPHENRANGE];
                e = e.replace(o, C(this.options.includePrerelease)),
                a("hyphen replace", e),
                e = e.replace(c[l.COMPARATORTRIM], d),
                a("comparator trim", e),
                e = e.replace(c[l.TILDETRIM], f),
                a("tilde trim", e),
                e = e.replace(c[l.CARETTRIM], h),
                a("caret trim", e);
                let u = e.split(" ").map((e=>v(e, this.options))).join(" ").split(/\s+/).map((e=>k(e, this.options)));
                n && (u = u.filter((e=>(a("loose invalid filter", e, this.options),
                !!e.match(c[l.COMPARATORLOOSE]))))),
                a("range list", u);
                const m = new Map
                  , y = u.map((e=>new s(e,this.options)));
                for (const e of y) {
                    if (b(e))
                        return [e];
                    m.set(e.value, e)
                }
                m.size > 1 && m.has("") && m.delete("");
                const w = [...m.values()];
                return i.set(t, w),
                w
            }
            intersects(e, t) {
                if (!(e instanceof n))
                    throw new TypeError("a Range is required");
                return this.set.some((r=>y(r, t) && e.set.some((e=>y(e, t) && r.every((r=>e.every((e=>r.intersects(e, t)))))))))
            }
            test(e) {
                if (!e)
                    return !1;
                if ("string" == typeof e)
                    try {
                        e = new u(e,this.options)
                    } catch (e) {
                        return !1
                    }
                for (let t = 0; t < this.set.length; t++)
                    if (x(this.set[t], e, this.options))
                        return !0;
                return !1
            }
        }
        t.exports = n;
        const i = new (e("../internal/lrucache"))
          , o = e("../internal/parse-options")
          , s = e("./comparator")
          , a = e("../internal/debug")
          , u = e("./semver")
          , {safeRe: c, t: l, comparatorTrimReplace: d, tildeTrimReplace: f, caretTrimReplace: h} = e("../internal/re")
          , {FLAG_INCLUDE_PRERELEASE: p, FLAG_LOOSE: g} = e("../internal/constants")
          , b = e=>"<0.0.0-0" === e.value
          , m = e=>"" === e.value
          , y = (e,t)=>{
            let r = !0;
            const n = e.slice();
            let i = n.pop();
            for (; r && n.length; )
                r = n.every((e=>i.intersects(e, t))),
                i = n.pop();
            return r
        }
          , v = (e,t)=>(a("comp", e, t),
        e = S(e, t),
        a("caret", e),
        e = _(e, t),
        a("tildes", e),
        e = R(e, t),
        a("xrange", e),
        e = I(e, t),
        a("stars", e),
        e)
          , w = e=>!e || "x" === e.toLowerCase() || "*" === e
          , _ = (e,t)=>e.trim().split(/\s+/).map((e=>E(e, t))).join(" ")
          , E = (e,t)=>{
            const r = t.loose ? c[l.TILDELOOSE] : c[l.TILDE];
            return e.replace(r, ((t,r,n,i,o)=>{
                let s;
                return a("tilde", e, t, r, n, i, o),
                w(r) ? s = "" : w(n) ? s = `>=${r}.0.0 <${+r + 1}.0.0-0` : w(i) ? s = `>=${r}.${n}.0 <${r}.${+n + 1}.0-0` : o ? (a("replaceTilde pr", o),
                s = `>=${r}.${n}.${i}-${o} <${r}.${+n + 1}.0-0`) : s = `>=${r}.${n}.${i} <${r}.${+n + 1}.0-0`,
                a("tilde return", s),
                s
            }
            ))
        }
          , S = (e,t)=>e.trim().split(/\s+/).map((e=>M(e, t))).join(" ")
          , M = (e,t)=>{
            a("caret", e, t);
            const r = t.loose ? c[l.CARETLOOSE] : c[l.CARET]
              , n = t.includePrerelease ? "-0" : "";
            return e.replace(r, ((t,r,i,o,s)=>{
                let u;
                return a("caret", e, t, r, i, o, s),
                w(r) ? u = "" : w(i) ? u = `>=${r}.0.0${n} <${+r + 1}.0.0-0` : w(o) ? u = "0" === r ? `>=${r}.${i}.0${n} <${r}.${+i + 1}.0-0` : `>=${r}.${i}.0${n} <${+r + 1}.0.0-0` : s ? (a("replaceCaret pr", s),
                u = "0" === r ? "0" === i ? `>=${r}.${i}.${o}-${s} <${r}.${i}.${+o + 1}-0` : `>=${r}.${i}.${o}-${s} <${r}.${+i + 1}.0-0` : `>=${r}.${i}.${o}-${s} <${+r + 1}.0.0-0`) : (a("no pr"),
                u = "0" === r ? "0" === i ? `>=${r}.${i}.${o}${n} <${r}.${i}.${+o + 1}-0` : `>=${r}.${i}.${o}${n} <${r}.${+i + 1}.0-0` : `>=${r}.${i}.${o} <${+r + 1}.0.0-0`),
                a("caret return", u),
                u
            }
            ))
        }
          , R = (e,t)=>(a("replaceXRanges", e, t),
        e.split(/\s+/).map((e=>j(e, t))).join(" "))
          , j = (e,t)=>{
            e = e.trim();
            const r = t.loose ? c[l.XRANGELOOSE] : c[l.XRANGE];
            return e.replace(r, ((r,n,i,o,s,u)=>{
                a("xRange", e, r, n, i, o, s, u);
                const c = w(i)
                  , l = c || w(o)
                  , d = l || w(s)
                  , f = d;
                return "=" === n && f && (n = ""),
                u = t.includePrerelease ? "-0" : "",
                c ? r = ">" === n || "<" === n ? "<0.0.0-0" : "*" : n && f ? (l && (o = 0),
                s = 0,
                ">" === n ? (n = ">=",
                l ? (i = +i + 1,
                o = 0,
                s = 0) : (o = +o + 1,
                s = 0)) : "<=" === n && (n = "<",
                l ? i = +i + 1 : o = +o + 1),
                "<" === n && (u = "-0"),
                r = `${n + i}.${o}.${s}${u}`) : l ? r = `>=${i}.0.0${u} <${+i + 1}.0.0-0` : d && (r = `>=${i}.${o}.0${u} <${i}.${+o + 1}.0-0`),
                a("xRange return", r),
                r
            }
            ))
        }
          , I = (e,t)=>(a("replaceStars", e, t),
        e.trim().replace(c[l.STAR], ""))
          , k = (e,t)=>(a("replaceGTE0", e, t),
        e.trim().replace(c[t.includePrerelease ? l.GTE0PRE : l.GTE0], ""))
          , C = e=>(t,r,n,i,o,s,a,u,c,l,d,f)=>`${r = w(n) ? "" : w(i) ? `>=${n}.0.0${e ? "-0" : ""}` : w(o) ? `>=${n}.${i}.0${e ? "-0" : ""}` : s ? `>=${r}` : `>=${r}${e ? "-0" : ""}`} ${u = w(c) ? "" : w(l) ? `<${+c + 1}.0.0-0` : w(d) ? `<${c}.${+l + 1}.0-0` : f ? `<=${c}.${l}.${d}-${f}` : e ? `<${c}.${l}.${+d + 1}-0` : `<=${u}`}`.trim()
          , x = (e,t,r)=>{
            for (let r = 0; r < e.length; r++)
                if (!e[r].test(t))
                    return !1;
            if (t.prerelease.length && !r.includePrerelease) {
                for (let r = 0; r < e.length; r++)
                    if (a(e[r].semver),
                    e[r].semver !== s.ANY && e[r].semver.prerelease.length > 0) {
                        const n = e[r].semver;
                        if (n.major === t.major && n.minor === t.minor && n.patch === t.patch)
                            return !0
                    }
                return !1
            }
            return !0
        }
    }
    , {
        "../internal/constants": 174,
        "../internal/debug": 175,
        "../internal/lrucache": 177,
        "../internal/parse-options": 178,
        "../internal/re": 179,
        "./comparator": 146,
        "./semver": 148
    }],
    148: [function(e, t, r) {
        const n = e("../internal/debug")
          , {MAX_LENGTH: i, MAX_SAFE_INTEGER: o} = e("../internal/constants")
          , {safeRe: s, t: a} = e("../internal/re")
          , u = e("../internal/parse-options")
          , {compareIdentifiers: c} = e("../internal/identifiers");
        class l {
            constructor(e, t) {
                if (t = u(t),
                e instanceof l) {
                    if (e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease)
                        return e;
                    e = e.version
                } else if ("string" != typeof e)
                    throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);
                if (e.length > i)
                    throw new TypeError(`version is longer than ${i} characters`);
                n("SemVer", e, t),
                this.options = t,
                this.loose = !!t.loose,
                this.includePrerelease = !!t.includePrerelease;
                const r = e.trim().match(t.loose ? s[a.LOOSE] : s[a.FULL]);
                if (!r)
                    throw new TypeError(`Invalid Version: ${e}`);
                if (this.raw = e,
                this.major = +r[1],
                this.minor = +r[2],
                this.patch = +r[3],
                this.major > o || this.major < 0)
                    throw new TypeError("Invalid major version");
                if (this.minor > o || this.minor < 0)
                    throw new TypeError("Invalid minor version");
                if (this.patch > o || this.patch < 0)
                    throw new TypeError("Invalid patch version");
                r[4] ? this.prerelease = r[4].split(".").map((e=>{
                    if (/^[0-9]+$/.test(e)) {
                        const t = +e;
                        if (t >= 0 && t < o)
                            return t
                    }
                    return e
                }
                )) : this.prerelease = [],
                this.build = r[5] ? r[5].split(".") : [],
                this.format()
            }
            format() {
                return this.version = `${this.major}.${this.minor}.${this.patch}`,
                this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`),
                this.version
            }
            toString() {
                return this.version
            }
            compare(e) {
                if (n("SemVer.compare", this.version, this.options, e),
                !(e instanceof l)) {
                    if ("string" == typeof e && e === this.version)
                        return 0;
                    e = new l(e,this.options)
                }
                return e.version === this.version ? 0 : this.compareMain(e) || this.comparePre(e)
            }
            compareMain(e) {
                return e instanceof l || (e = new l(e,this.options)),
                c(this.major, e.major) || c(this.minor, e.minor) || c(this.patch, e.patch)
            }
            comparePre(e) {
                if (e instanceof l || (e = new l(e,this.options)),
                this.prerelease.length && !e.prerelease.length)
                    return -1;
                if (!this.prerelease.length && e.prerelease.length)
                    return 1;
                if (!this.prerelease.length && !e.prerelease.length)
                    return 0;
                let t = 0;
                do {
                    const r = this.prerelease[t]
                      , i = e.prerelease[t];
                    if (n("prerelease compare", t, r, i),
                    void 0 === r && void 0 === i)
                        return 0;
                    if (void 0 === i)
                        return 1;
                    if (void 0 === r)
                        return -1;
                    if (r !== i)
                        return c(r, i)
                } while (++t)
            }
            compareBuild(e) {
                e instanceof l || (e = new l(e,this.options));
                let t = 0;
                do {
                    const r = this.build[t]
                      , i = e.build[t];
                    if (n("build compare", t, r, i),
                    void 0 === r && void 0 === i)
                        return 0;
                    if (void 0 === i)
                        return 1;
                    if (void 0 === r)
                        return -1;
                    if (r !== i)
                        return c(r, i)
                } while (++t)
            }
            inc(e, t, r) {
                switch (e) {
                case "premajor":
                    this.prerelease.length = 0,
                    this.patch = 0,
                    this.minor = 0,
                    this.major++,
                    this.inc("pre", t, r);
                    break;
                case "preminor":
                    this.prerelease.length = 0,
                    this.patch = 0,
                    this.minor++,
                    this.inc("pre", t, r);
                    break;
                case "prepatch":
                    this.prerelease.length = 0,
                    this.inc("patch", t, r),
                    this.inc("pre", t, r);
                    break;
                case "prerelease":
                    0 === this.prerelease.length && this.inc("patch", t, r),
                    this.inc("pre", t, r);
                    break;
                case "major":
                    0 === this.minor && 0 === this.patch && 0 !== this.prerelease.length || this.major++,
                    this.minor = 0,
                    this.patch = 0,
                    this.prerelease = [];
                    break;
                case "minor":
                    0 === this.patch && 0 !== this.prerelease.length || this.minor++,
                    this.patch = 0,
                    this.prerelease = [];
                    break;
                case "patch":
                    0 === this.prerelease.length && this.patch++,
                    this.prerelease = [];
                    break;
                case "pre":
                    {
                        const e = Number(r) ? 1 : 0;
                        if (!t && !1 === r)
                            throw new Error("invalid increment argument: identifier is empty");
                        if (0 === this.prerelease.length)
                            this.prerelease = [e];
                        else {
                            let n = this.prerelease.length;
                            for (; --n >= 0; )
                                "number" == typeof this.prerelease[n] && (this.prerelease[n]++,
                                n = -2);
                            if (-1 === n) {
                                if (t === this.prerelease.join(".") && !1 === r)
                                    throw new Error("invalid increment argument: identifier already exists");
                                this.prerelease.push(e)
                            }
                        }
                        if (t) {
                            let n = [t, e];
                            !1 === r && (n = [t]),
                            0 === c(this.prerelease[0], t) ? isNaN(this.prerelease[1]) && (this.prerelease = n) : this.prerelease = n
                        }
                        break
                    }
                default:
                    throw new Error(`invalid increment argument: ${e}`)
                }
                return this.raw = this.format(),
                this.build.length && (this.raw += `+${this.build.join(".")}`),
                this
            }
        }
        t.exports = l
    }
    , {
        "../internal/constants": 174,
        "../internal/debug": 175,
        "../internal/identifiers": 176,
        "../internal/parse-options": 178,
        "../internal/re": 179
    }],
    149: [function(e, t, r) {
        const n = e("./parse");
        t.exports = (e,t)=>{
            const r = n(e.trim().replace(/^[=v]+/, ""), t);
            return r ? r.version : null
        }
    }
    , {
        "./parse": 165
    }],
    150: [function(e, t, r) {
        const n = e("./eq")
          , i = e("./neq")
          , o = e("./gt")
          , s = e("./gte")
          , a = e("./lt")
          , u = e("./lte");
        t.exports = (e,t,r,c)=>{
            switch (t) {
            case "===":
                return "object" == typeof e && (e = e.version),
                "object" == typeof r && (r = r.version),
                e === r;
            case "!==":
                return "object" == typeof e && (e = e.version),
                "object" == typeof r && (r = r.version),
                e !== r;
            case "":
            case "=":
            case "==":
                return n(e, r, c);
            case "!=":
                return i(e, r, c);
            case ">":
                return o(e, r, c);
            case ">=":
                return s(e, r, c);
            case "<":
                return a(e, r, c);
            case "<=":
                return u(e, r, c);
            default:
                throw new TypeError(`Invalid operator: ${t}`)
            }
        }
    }
    , {
        "./eq": 156,
        "./gt": 157,
        "./gte": 158,
        "./lt": 160,
        "./lte": 161,
        "./neq": 164
    }],
    151: [function(e, t, r) {
        const n = e("../classes/semver")
          , i = e("./parse")
          , {safeRe: o, t: s} = e("../internal/re");
        t.exports = (e,t)=>{
            if (e instanceof n)
                return e;
            if ("number" == typeof e && (e = String(e)),
            "string" != typeof e)
                return null;
            let r = null;
            if ((t = t || {}).rtl) {
                const n = t.includePrerelease ? o[s.COERCERTLFULL] : o[s.COERCERTL];
                let i;
                for (; (i = n.exec(e)) && (!r || r.index + r[0].length !== e.length); )
                    r && i.index + i[0].length === r.index + r[0].length || (r = i),
                    n.lastIndex = i.index + i[1].length + i[2].length;
                n.lastIndex = -1
            } else
                r = e.match(t.includePrerelease ? o[s.COERCEFULL] : o[s.COERCE]);
            if (null === r)
                return null;
            const a = r[2]
              , u = r[3] || "0"
              , c = r[4] || "0"
              , l = t.includePrerelease && r[5] ? `-${r[5]}` : ""
              , d = t.includePrerelease && r[6] ? `+${r[6]}` : "";
            return i(`${a}.${u}.${c}${l}${d}`, t)
        }
    }
    , {
        "../classes/semver": 148,
        "../internal/re": 179,
        "./parse": 165
    }],
    152: [function(e, t, r) {
        const n = e("../classes/semver");
        t.exports = (e,t,r)=>{
            const i = new n(e,r)
              , o = new n(t,r);
            return i.compare(o) || i.compareBuild(o)
        }
    }
    , {
        "../classes/semver": 148
    }],
    153: [function(e, t, r) {
        const n = e("./compare");
        t.exports = (e,t)=>n(e, t, !0)
    }
    , {
        "./compare": 154
    }],
    154: [function(e, t, r) {
        const n = e("../classes/semver");
        t.exports = (e,t,r)=>new n(e,r).compare(new n(t,r))
    }
    , {
        "../classes/semver": 148
    }],
    155: [function(e, t, r) {
        const n = e("./parse.js");
        t.exports = (e,t)=>{
            const r = n(e, null, !0)
              , i = n(t, null, !0)
              , o = r.compare(i);
            if (0 === o)
                return null;
            const s = o > 0
              , a = s ? r : i
              , u = s ? i : r
              , c = !!a.prerelease.length;
            if (!!u.prerelease.length && !c)
                return u.patch || u.minor ? a.patch ? "patch" : a.minor ? "minor" : "major" : "major";
            const l = c ? "pre" : "";
            return r.major !== i.major ? l + "major" : r.minor !== i.minor ? l + "minor" : r.patch !== i.patch ? l + "patch" : "prerelease"
        }
    }
    , {
        "./parse.js": 165
    }],
    156: [function(e, t, r) {
        const n = e("./compare");
        t.exports = (e,t,r)=>0 === n(e, t, r)
    }
    , {
        "./compare": 154
    }],
    157: [function(e, t, r) {
        const n = e("./compare");
        t.exports = (e,t,r)=>n(e, t, r) > 0
    }
    , {
        "./compare": 154
    }],
    158: [function(e, t, r) {
        const n = e("./compare");
        t.exports = (e,t,r)=>n(e, t, r) >= 0
    }
    , {
        "./compare": 154
    }],
    159: [function(e, t, r) {
        const n = e("../classes/semver");
        t.exports = (e,t,r,i,o)=>{
            "string" == typeof r && (o = i,
            i = r,
            r = void 0);
            try {
                return new n(e instanceof n ? e.version : e,r).inc(t, i, o).version
            } catch (e) {
                return null
            }
        }
    }
    , {
        "../classes/semver": 148
    }],
    160: [function(e, t, r) {
        const n = e("./compare");
        t.exports = (e,t,r)=>n(e, t, r) < 0
    }
    , {
        "./compare": 154
    }],
    161: [function(e, t, r) {
        const n = e("./compare");
        t.exports = (e,t,r)=>n(e, t, r) <= 0
    }
    , {
        "./compare": 154
    }],
    162: [function(e, t, r) {
        const n = e("../classes/semver");
        t.exports = (e,t)=>new n(e,t).major
    }
    , {
        "../classes/semver": 148
    }],
    163: [function(e, t, r) {
        const n = e("../classes/semver");
        t.exports = (e,t)=>new n(e,t).minor
    }
    , {
        "../classes/semver": 148
    }],
    164: [function(e, t, r) {
        const n = e("./compare");
        t.exports = (e,t,r)=>0 !== n(e, t, r)
    }
    , {
        "./compare": 154
    }],
    165: [function(e, t, r) {
        const n = e("../classes/semver");
        t.exports = (e,t,r=!1)=>{
            if (e instanceof n)
                return e;
            try {
                return new n(e,t)
            } catch (e) {
                if (!r)
                    return null;
                throw e
            }
        }
    }
    , {
        "../classes/semver": 148
    }],
    166: [function(e, t, r) {
        const n = e("../classes/semver");
        t.exports = (e,t)=>new n(e,t).patch
    }
    , {
        "../classes/semver": 148
    }],
    167: [function(e, t, r) {
        const n = e("./parse");
        t.exports = (e,t)=>{
            const r = n(e, t);
            return r && r.prerelease.length ? r.prerelease : null
        }
    }
    , {
        "./parse": 165
    }],
    168: [function(e, t, r) {
        const n = e("./compare");
        t.exports = (e,t,r)=>n(t, e, r)
    }
    , {
        "./compare": 154
    }],
    169: [function(e, t, r) {
        const n = e("./compare-build");
        t.exports = (e,t)=>e.sort(((e,r)=>n(r, e, t)))
    }
    , {
        "./compare-build": 152
    }],
    170: [function(e, t, r) {
        const n = e("../classes/range");
        t.exports = (e,t,r)=>{
            try {
                t = new n(t,r)
            } catch (e) {
                return !1
            }
            return t.test(e)
        }
    }
    , {
        "../classes/range": 147
    }],
    171: [function(e, t, r) {
        const n = e("./compare-build");
        t.exports = (e,t)=>e.sort(((e,r)=>n(e, r, t)))
    }
    , {
        "./compare-build": 152
    }],
    172: [function(e, t, r) {
        const n = e("./parse");
        t.exports = (e,t)=>{
            const r = n(e, t);
            return r ? r.version : null
        }
    }
    , {
        "./parse": 165
    }],
    173: [function(e, t, r) {
        const n = e("./internal/re")
          , i = e("./internal/constants")
          , o = e("./classes/semver")
          , s = e("./internal/identifiers")
          , a = e("./functions/parse")
          , u = e("./functions/valid")
          , c = e("./functions/clean")
          , l = e("./functions/inc")
          , d = e("./functions/diff")
          , f = e("./functions/major")
          , h = e("./functions/minor")
          , p = e("./functions/patch")
          , g = e("./functions/prerelease")
          , b = e("./functions/compare")
          , m = e("./functions/rcompare")
          , y = e("./functions/compare-loose")
          , v = e("./functions/compare-build")
          , w = e("./functions/sort")
          , _ = e("./functions/rsort")
          , E = e("./functions/gt")
          , S = e("./functions/lt")
          , M = e("./functions/eq")
          , R = e("./functions/neq")
          , j = e("./functions/gte")
          , I = e("./functions/lte")
          , k = e("./functions/cmp")
          , C = e("./functions/coerce")
          , x = e("./classes/comparator")
          , O = e("./classes/range")
          , A = e("./functions/satisfies")
          , T = e("./ranges/to-comparators")
          , P = e("./ranges/max-satisfying")
          , L = e("./ranges/min-satisfying")
          , N = e("./ranges/min-version")
          , D = e("./ranges/valid")
          , B = e("./ranges/outside")
          , U = e("./ranges/gtr")
          , $ = e("./ranges/ltr")
          , F = e("./ranges/intersects")
          , W = e("./ranges/simplify")
          , z = e("./ranges/subset");
        t.exports = {
            parse: a,
            valid: u,
            clean: c,
            inc: l,
            diff: d,
            major: f,
            minor: h,
            patch: p,
            prerelease: g,
            compare: b,
            rcompare: m,
            compareLoose: y,
            compareBuild: v,
            sort: w,
            rsort: _,
            gt: E,
            lt: S,
            eq: M,
            neq: R,
            gte: j,
            lte: I,
            cmp: k,
            coerce: C,
            Comparator: x,
            Range: O,
            satisfies: A,
            toComparators: T,
            maxSatisfying: P,
            minSatisfying: L,
            minVersion: N,
            validRange: D,
            outside: B,
            gtr: U,
            ltr: $,
            intersects: F,
            simplifyRange: W,
            subset: z,
            SemVer: o,
            re: n.re,
            src: n.src,
            tokens: n.t,
            SEMVER_SPEC_VERSION: i.SEMVER_SPEC_VERSION,
            RELEASE_TYPES: i.RELEASE_TYPES,
            compareIdentifiers: s.compareIdentifiers,
            rcompareIdentifiers: s.rcompareIdentifiers
        }
    }
    , {
        "./classes/comparator": 146,
        "./classes/range": 147,
        "./classes/semver": 148,
        "./functions/clean": 149,
        "./functions/cmp": 150,
        "./functions/coerce": 151,
        "./functions/compare": 154,
        "./functions/compare-build": 152,
        "./functions/compare-loose": 153,
        "./functions/diff": 155,
        "./functions/eq": 156,
        "./functions/gt": 157,
        "./functions/gte": 158,
        "./functions/inc": 159,
        "./functions/lt": 160,
        "./functions/lte": 161,
        "./functions/major": 162,
        "./functions/minor": 163,
        "./functions/neq": 164,
        "./functions/parse": 165,
        "./functions/patch": 166,
        "./functions/prerelease": 167,
        "./functions/rcompare": 168,
        "./functions/rsort": 169,
        "./functions/satisfies": 170,
        "./functions/sort": 171,
        "./functions/valid": 172,
        "./internal/constants": 174,
        "./internal/identifiers": 176,
        "./internal/re": 179,
        "./ranges/gtr": 180,
        "./ranges/intersects": 181,
        "./ranges/ltr": 182,
        "./ranges/max-satisfying": 183,
        "./ranges/min-satisfying": 184,
        "./ranges/min-version": 185,
        "./ranges/outside": 186,
        "./ranges/simplify": 187,
        "./ranges/subset": 188,
        "./ranges/to-comparators": 189,
        "./ranges/valid": 190
    }],
    174: [function(e, t, r) {
        const n = Number.MAX_SAFE_INTEGER || 9007199254740991;
        t.exports = {
            MAX_LENGTH: 256,
            MAX_SAFE_COMPONENT_LENGTH: 16,
            MAX_SAFE_BUILD_LENGTH: 250,
            MAX_SAFE_INTEGER: n,
            RELEASE_TYPES: ["major", "premajor", "minor", "preminor", "patch", "prepatch", "prerelease"],
            SEMVER_SPEC_VERSION: "2.0.0",
            FLAG_INCLUDE_PRERELEASE: 1,
            FLAG_LOOSE: 2
        }
    }
    , {}],
    175: [function(e, t, r) {
        (function(e) {
            (function() {
                const r = ("object" == typeof e && e.env,
                ()=>{}
                );
                t.exports = r
            }
            ).call(this)
        }
        ).call(this, e("_process"))
    }
    , {
        _process: 144
    }],
    176: [function(e, t, r) {
        const n = /^[0-9]+$/
          , i = (e,t)=>{
            const r = n.test(e)
              , i = n.test(t);
            return r && i && (e = +e,
            t = +t),
            e === t ? 0 : r && !i ? -1 : i && !r ? 1 : e < t ? -1 : 1
        }
        ;
        t.exports = {
            compareIdentifiers: i,
            rcompareIdentifiers: (e,t)=>i(t, e)
        }
    }
    , {}],
    177: [function(e, t, r) {
        t.exports = class {
            constructor() {
                this.max = 1e3,
                this.map = new Map
            }
            get(e) {
                const t = this.map.get(e);
                return void 0 === t ? void 0 : (this.map.delete(e),
                this.map.set(e, t),
                t)
            }
            delete(e) {
                return this.map.delete(e)
            }
            set(e, t) {
                if (!this.delete(e) && void 0 !== t) {
                    if (this.map.size >= this.max) {
                        const e = this.map.keys().next().value;
                        this.delete(e)
                    }
                    this.map.set(e, t)
                }
                return this
            }
        }
    }
    , {}],
    178: [function(e, t, r) {
        const n = Object.freeze({
            loose: !0
        })
          , i = Object.freeze({});
        t.exports = e=>e ? "object" != typeof e ? n : e : i
    }
    , {}],
    179: [function(e, t, r) {
        const {MAX_SAFE_COMPONENT_LENGTH: n, MAX_SAFE_BUILD_LENGTH: i, MAX_LENGTH: o} = e("./constants")
          , s = e("./debug")
          , a = (r = t.exports = {}).re = []
          , u = r.safeRe = []
          , c = r.src = []
          , l = r.t = {};
        let d = 0;
        const f = "[a-zA-Z0-9-]"
          , h = [["\\s", 1], ["\\d", o], [f, i]]
          , p = (e,t,r)=>{
            const n = (e=>{
                for (const [t,r] of h)
                    e = e.split(`${t}*`).join(`${t}{0,${r}}`).split(`${t}+`).join(`${t}{1,${r}}`);
                return e
            }
            )(t)
              , i = d++;
            s(e, i, t),
            l[e] = i,
            c[i] = t,
            a[i] = new RegExp(t,r ? "g" : void 0),
            u[i] = new RegExp(n,r ? "g" : void 0)
        }
        ;
        p("NUMERICIDENTIFIER", "0|[1-9]\\d*"),
        p("NUMERICIDENTIFIERLOOSE", "\\d+"),
        p("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${f}*`),
        p("MAINVERSION", `(${c[l.NUMERICIDENTIFIER]})\\.(${c[l.NUMERICIDENTIFIER]})\\.(${c[l.NUMERICIDENTIFIER]})`),
        p("MAINVERSIONLOOSE", `(${c[l.NUMERICIDENTIFIERLOOSE]})\\.(${c[l.NUMERICIDENTIFIERLOOSE]})\\.(${c[l.NUMERICIDENTIFIERLOOSE]})`),
        p("PRERELEASEIDENTIFIER", `(?:${c[l.NUMERICIDENTIFIER]}|${c[l.NONNUMERICIDENTIFIER]})`),
        p("PRERELEASEIDENTIFIERLOOSE", `(?:${c[l.NUMERICIDENTIFIERLOOSE]}|${c[l.NONNUMERICIDENTIFIER]})`),
        p("PRERELEASE", `(?:-(${c[l.PRERELEASEIDENTIFIER]}(?:\\.${c[l.PRERELEASEIDENTIFIER]})*))`),
        p("PRERELEASELOOSE", `(?:-?(${c[l.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${c[l.PRERELEASEIDENTIFIERLOOSE]})*))`),
        p("BUILDIDENTIFIER", `${f}+`),
        p("BUILD", `(?:\\+(${c[l.BUILDIDENTIFIER]}(?:\\.${c[l.BUILDIDENTIFIER]})*))`),
        p("FULLPLAIN", `v?${c[l.MAINVERSION]}${c[l.PRERELEASE]}?${c[l.BUILD]}?`),
        p("FULL", `^${c[l.FULLPLAIN]}$`),
        p("LOOSEPLAIN", `[v=\\s]*${c[l.MAINVERSIONLOOSE]}${c[l.PRERELEASELOOSE]}?${c[l.BUILD]}?`),
        p("LOOSE", `^${c[l.LOOSEPLAIN]}$`),
        p("GTLT", "((?:<|>)?=?)"),
        p("XRANGEIDENTIFIERLOOSE", `${c[l.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),
        p("XRANGEIDENTIFIER", `${c[l.NUMERICIDENTIFIER]}|x|X|\\*`),
        p("XRANGEPLAIN", `[v=\\s]*(${c[l.XRANGEIDENTIFIER]})(?:\\.(${c[l.XRANGEIDENTIFIER]})(?:\\.(${c[l.XRANGEIDENTIFIER]})(?:${c[l.PRERELEASE]})?${c[l.BUILD]}?)?)?`),
        p("XRANGEPLAINLOOSE", `[v=\\s]*(${c[l.XRANGEIDENTIFIERLOOSE]})(?:\\.(${c[l.XRANGEIDENTIFIERLOOSE]})(?:\\.(${c[l.XRANGEIDENTIFIERLOOSE]})(?:${c[l.PRERELEASELOOSE]})?${c[l.BUILD]}?)?)?`),
        p("XRANGE", `^${c[l.GTLT]}\\s*${c[l.XRANGEPLAIN]}$`),
        p("XRANGELOOSE", `^${c[l.GTLT]}\\s*${c[l.XRANGEPLAINLOOSE]}$`),
        p("COERCEPLAIN", `(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?`),
        p("COERCE", `${c[l.COERCEPLAIN]}(?:$|[^\\d])`),
        p("COERCEFULL", c[l.COERCEPLAIN] + `(?:${c[l.PRERELEASE]})?` + `(?:${c[l.BUILD]})?(?:$|[^\\d])`),
        p("COERCERTL", c[l.COERCE], !0),
        p("COERCERTLFULL", c[l.COERCEFULL], !0),
        p("LONETILDE", "(?:~>?)"),
        p("TILDETRIM", `(\\s*)${c[l.LONETILDE]}\\s+`, !0),
        r.tildeTrimReplace = "$1~",
        p("TILDE", `^${c[l.LONETILDE]}${c[l.XRANGEPLAIN]}$`),
        p("TILDELOOSE", `^${c[l.LONETILDE]}${c[l.XRANGEPLAINLOOSE]}$`),
        p("LONECARET", "(?:\\^)"),
        p("CARETTRIM", `(\\s*)${c[l.LONECARET]}\\s+`, !0),
        r.caretTrimReplace = "$1^",
        p("CARET", `^${c[l.LONECARET]}${c[l.XRANGEPLAIN]}$`),
        p("CARETLOOSE", `^${c[l.LONECARET]}${c[l.XRANGEPLAINLOOSE]}$`),
        p("COMPARATORLOOSE", `^${c[l.GTLT]}\\s*(${c[l.LOOSEPLAIN]})$|^$`),
        p("COMPARATOR", `^${c[l.GTLT]}\\s*(${c[l.FULLPLAIN]})$|^$`),
        p("COMPARATORTRIM", `(\\s*)${c[l.GTLT]}\\s*(${c[l.LOOSEPLAIN]}|${c[l.XRANGEPLAIN]})`, !0),
        r.comparatorTrimReplace = "$1$2$3",
        p("HYPHENRANGE", `^\\s*(${c[l.XRANGEPLAIN]})\\s+-\\s+(${c[l.XRANGEPLAIN]})\\s*$`),
        p("HYPHENRANGELOOSE", `^\\s*(${c[l.XRANGEPLAINLOOSE]})\\s+-\\s+(${c[l.XRANGEPLAINLOOSE]})\\s*$`),
        p("STAR", "(<|>)?=?\\s*\\*"),
        p("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"),
        p("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$")
    }
    , {
        "./constants": 174,
        "./debug": 175
    }],
    180: [function(e, t, r) {
        const n = e("./outside");
        t.exports = (e,t,r)=>n(e, t, ">", r)
    }
    , {
        "./outside": 186
    }],
    181: [function(e, t, r) {
        const n = e("../classes/range");
        t.exports = (e,t,r)=>(e = new n(e,r),
        t = new n(t,r),
        e.intersects(t, r))
    }
    , {
        "../classes/range": 147
    }],
    182: [function(e, t, r) {
        const n = e("./outside");
        t.exports = (e,t,r)=>n(e, t, "<", r)
    }
    , {
        "./outside": 186
    }],
    183: [function(e, t, r) {
        const n = e("../classes/semver")
          , i = e("../classes/range");
        t.exports = (e,t,r)=>{
            let o = null
              , s = null
              , a = null;
            try {
                a = new i(t,r)
            } catch (e) {
                return null
            }
            return e.forEach((e=>{
                a.test(e) && (o && -1 !== s.compare(e) || (o = e,
                s = new n(o,r)))
            }
            )),
            o
        }
    }
    , {
        "../classes/range": 147,
        "../classes/semver": 148
    }],
    184: [function(e, t, r) {
        const n = e("../classes/semver")
          , i = e("../classes/range");
        t.exports = (e,t,r)=>{
            let o = null
              , s = null
              , a = null;
            try {
                a = new i(t,r)
            } catch (e) {
                return null
            }
            return e.forEach((e=>{
                a.test(e) && (o && 1 !== s.compare(e) || (o = e,
                s = new n(o,r)))
            }
            )),
            o
        }
    }
    , {
        "../classes/range": 147,
        "../classes/semver": 148
    }],
    185: [function(e, t, r) {
        const n = e("../classes/semver")
          , i = e("../classes/range")
          , o = e("../functions/gt");
        t.exports = (e,t)=>{
            e = new i(e,t);
            let r = new n("0.0.0");
            if (e.test(r))
                return r;
            if (r = new n("0.0.0-0"),
            e.test(r))
                return r;
            r = null;
            for (let t = 0; t < e.set.length; ++t) {
                const i = e.set[t];
                let s = null;
                i.forEach((e=>{
                    const t = new n(e.semver.version);
                    switch (e.operator) {
                    case ">":
                        0 === t.prerelease.length ? t.patch++ : t.prerelease.push(0),
                        t.raw = t.format();
                    case "":
                    case ">=":
                        s && !o(t, s) || (s = t);
                        break;
                    case "<":
                    case "<=":
                        break;
                    default:
                        throw new Error(`Unexpected operation: ${e.operator}`)
                    }
                }
                )),
                !s || r && !o(r, s) || (r = s)
            }
            return r && e.test(r) ? r : null
        }
    }
    , {
        "../classes/range": 147,
        "../classes/semver": 148,
        "../functions/gt": 157
    }],
    186: [function(e, t, r) {
        const n = e("../classes/semver")
          , i = e("../classes/comparator")
          , {ANY: o} = i
          , s = e("../classes/range")
          , a = e("../functions/satisfies")
          , u = e("../functions/gt")
          , c = e("../functions/lt")
          , l = e("../functions/lte")
          , d = e("../functions/gte");
        t.exports = (e,t,r,f)=>{
            let h, p, g, b, m;
            switch (e = new n(e,f),
            t = new s(t,f),
            r) {
            case ">":
                h = u,
                p = l,
                g = c,
                b = ">",
                m = ">=";
                break;
            case "<":
                h = c,
                p = d,
                g = u,
                b = "<",
                m = "<=";
                break;
            default:
                throw new TypeError('Must provide a hilo val of "<" or ">"')
            }
            if (a(e, t, f))
                return !1;
            for (let r = 0; r < t.set.length; ++r) {
                const n = t.set[r];
                let s = null
                  , a = null;
                if (n.forEach((e=>{
                    e.semver === o && (e = new i(">=0.0.0")),
                    s = s || e,
                    a = a || e,
                    h(e.semver, s.semver, f) ? s = e : g(e.semver, a.semver, f) && (a = e)
                }
                )),
                s.operator === b || s.operator === m)
                    return !1;
                if ((!a.operator || a.operator === b) && p(e, a.semver))
                    return !1;
                if (a.operator === m && g(e, a.semver))
                    return !1
            }
            return !0
        }
    }
    , {
        "../classes/comparator": 146,
        "../classes/range": 147,
        "../classes/semver": 148,
        "../functions/gt": 157,
        "../functions/gte": 158,
        "../functions/lt": 160,
        "../functions/lte": 161,
        "../functions/satisfies": 170
    }],
    187: [function(e, t, r) {
        const n = e("../functions/satisfies.js")
          , i = e("../functions/compare.js");
        t.exports = (e,t,r)=>{
            const o = [];
            let s = null
              , a = null;
            const u = e.sort(((e,t)=>i(e, t, r)));
            for (const e of u) {
                n(e, t, r) ? (a = e,
                s || (s = e)) : (a && o.push([s, a]),
                a = null,
                s = null)
            }
            s && o.push([s, null]);
            const c = [];
            for (const [e,t] of o)
                e === t ? c.push(e) : t || e !== u[0] ? t ? e === u[0] ? c.push(`<=${t}`) : c.push(`${e} - ${t}`) : c.push(`>=${e}`) : c.push("*");
            const l = c.join(" || ")
              , d = "string" == typeof t.raw ? t.raw : String(t);
            return l.length < d.length ? l : t
        }
    }
    , {
        "../functions/compare.js": 154,
        "../functions/satisfies.js": 170
    }],
    188: [function(e, t, r) {
        const n = e("../classes/range.js")
          , i = e("../classes/comparator.js")
          , {ANY: o} = i
          , s = e("../functions/satisfies.js")
          , a = e("../functions/compare.js")
          , u = [new i(">=0.0.0-0")]
          , c = [new i(">=0.0.0")]
          , l = (e,t,r)=>{
            if (e === t)
                return !0;
            if (1 === e.length && e[0].semver === o) {
                if (1 === t.length && t[0].semver === o)
                    return !0;
                e = r.includePrerelease ? u : c
            }
            if (1 === t.length && t[0].semver === o) {
                if (r.includePrerelease)
                    return !0;
                t = c
            }
            const n = new Set;
            let i, l, h, p, g, b, m;
            for (const t of e)
                ">" === t.operator || ">=" === t.operator ? i = d(i, t, r) : "<" === t.operator || "<=" === t.operator ? l = f(l, t, r) : n.add(t.semver);
            if (n.size > 1)
                return null;
            if (i && l) {
                if (h = a(i.semver, l.semver, r),
                h > 0)
                    return null;
                if (0 === h && (">=" !== i.operator || "<=" !== l.operator))
                    return null
            }
            for (const e of n) {
                if (i && !s(e, String(i), r))
                    return null;
                if (l && !s(e, String(l), r))
                    return null;
                for (const n of t)
                    if (!s(e, String(n), r))
                        return !1;
                return !0
            }
            let y = !(!l || r.includePrerelease || !l.semver.prerelease.length) && l.semver
              , v = !(!i || r.includePrerelease || !i.semver.prerelease.length) && i.semver;
            y && 1 === y.prerelease.length && "<" === l.operator && 0 === y.prerelease[0] && (y = !1);
            for (const e of t) {
                if (m = m || ">" === e.operator || ">=" === e.operator,
                b = b || "<" === e.operator || "<=" === e.operator,
                i)
                    if (v && e.semver.prerelease && e.semver.prerelease.length && e.semver.major === v.major && e.semver.minor === v.minor && e.semver.patch === v.patch && (v = !1),
                    ">" === e.operator || ">=" === e.operator) {
                        if (p = d(i, e, r),
                        p === e && p !== i)
                            return !1
                    } else if (">=" === i.operator && !s(i.semver, String(e), r))
                        return !1;
                if (l)
                    if (y && e.semver.prerelease && e.semver.prerelease.length && e.semver.major === y.major && e.semver.minor === y.minor && e.semver.patch === y.patch && (y = !1),
                    "<" === e.operator || "<=" === e.operator) {
                        if (g = f(l, e, r),
                        g === e && g !== l)
                            return !1
                    } else if ("<=" === l.operator && !s(l.semver, String(e), r))
                        return !1;
                if (!e.operator && (l || i) && 0 !== h)
                    return !1
            }
            return !(i && b && !l && 0 !== h) && (!(l && m && !i && 0 !== h) && (!v && !y))
        }
          , d = (e,t,r)=>{
            if (!e)
                return t;
            const n = a(e.semver, t.semver, r);
            return n > 0 ? e : n < 0 || ">" === t.operator && ">=" === e.operator ? t : e
        }
          , f = (e,t,r)=>{
            if (!e)
                return t;
            const n = a(e.semver, t.semver, r);
            return n < 0 ? e : n > 0 || "<" === t.operator && "<=" === e.operator ? t : e
        }
        ;
        t.exports = (e,t,r={})=>{
            if (e === t)
                return !0;
            e = new n(e,r),
            t = new n(t,r);
            let i = !1;
            e: for (const n of e.set) {
                for (const e of t.set) {
                    const t = l(n, e, r);
                    if (i = i || null !== t,
                    t)
                        continue e
                }
                if (i)
                    return !1
            }
            return !0
        }
    }
    , {
        "../classes/comparator.js": 146,
        "../classes/range.js": 147,
        "../functions/compare.js": 154,
        "../functions/satisfies.js": 170
    }],
    189: [function(e, t, r) {
        const n = e("../classes/range");
        t.exports = (e,t)=>new n(e,t).set.map((e=>e.map((e=>e.value)).join(" ").trim().split(" ")))
    }
    , {
        "../classes/range": 147
    }],
    190: [function(e, t, r) {
        const n = e("../classes/range");
        t.exports = (e,t)=>{
            try {
                return new n(e,t).range || "*"
            } catch (e) {
                return null
            }
        }
    }
    , {
        "../classes/range": 147
    }],
    191: [function(e, t, r) {
        "use strict";
        var n = e("safe-buffer").Buffer
          , i = n.isEncoding || function(e) {
            switch ((e = "" + e) && e.toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
            case "raw":
                return !0;
            default:
                return !1
            }
        }
        ;
        function o(e) {
            var t;
            switch (this.encoding = function(e) {
                var t = function(e) {
                    if (!e)
                        return "utf8";
                    for (var t; ; )
                        switch (e) {
                        case "utf8":
                        case "utf-8":
                            return "utf8";
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return "utf16le";
                        case "latin1":
                        case "binary":
                            return "latin1";
                        case "base64":
                        case "ascii":
                        case "hex":
                            return e;
                        default:
                            if (t)
                                return;
                            e = ("" + e).toLowerCase(),
                            t = !0
                        }
                }(e);
                if ("string" != typeof t && (n.isEncoding === i || !i(e)))
                    throw new Error("Unknown encoding: " + e);
                return t || e
            }(e),
            this.encoding) {
            case "utf16le":
                this.text = u,
                this.end = c,
                t = 4;
                break;
            case "utf8":
                this.fillLast = a,
                t = 4;
                break;
            case "base64":
                this.text = l,
                this.end = d,
                t = 3;
                break;
            default:
                return this.write = f,
                void (this.end = h)
            }
            this.lastNeed = 0,
            this.lastTotal = 0,
            this.lastChar = n.allocUnsafe(t)
        }
        function s(e) {
            return e <= 127 ? 0 : e >> 5 == 6 ? 2 : e >> 4 == 14 ? 3 : e >> 3 == 30 ? 4 : e >> 6 == 2 ? -1 : -2
        }
        function a(e) {
            var t = this.lastTotal - this.lastNeed
              , r = function(e, t, r) {
                if (128 != (192 & t[0]))
                    return e.lastNeed = 0,
                    "�";
                if (e.lastNeed > 1 && t.length > 1) {
                    if (128 != (192 & t[1]))
                        return e.lastNeed = 1,
                        "�";
                    if (e.lastNeed > 2 && t.length > 2 && 128 != (192 & t[2]))
                        return e.lastNeed = 2,
                        "�"
                }
            }(this, e);
            return void 0 !== r ? r : this.lastNeed <= e.length ? (e.copy(this.lastChar, t, 0, this.lastNeed),
            this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (e.copy(this.lastChar, t, 0, e.length),
            void (this.lastNeed -= e.length))
        }
        function u(e, t) {
            if ((e.length - t) % 2 == 0) {
                var r = e.toString("utf16le", t);
                if (r) {
                    var n = r.charCodeAt(r.length - 1);
                    if (n >= 55296 && n <= 56319)
                        return this.lastNeed = 2,
                        this.lastTotal = 4,
                        this.lastChar[0] = e[e.length - 2],
                        this.lastChar[1] = e[e.length - 1],
                        r.slice(0, -1)
                }
                return r
            }
            return this.lastNeed = 1,
            this.lastTotal = 2,
            this.lastChar[0] = e[e.length - 1],
            e.toString("utf16le", t, e.length - 1)
        }
        function c(e) {
            var t = e && e.length ? this.write(e) : "";
            if (this.lastNeed) {
                var r = this.lastTotal - this.lastNeed;
                return t + this.lastChar.toString("utf16le", 0, r)
            }
            return t
        }
        function l(e, t) {
            var r = (e.length - t) % 3;
            return 0 === r ? e.toString("base64", t) : (this.lastNeed = 3 - r,
            this.lastTotal = 3,
            1 === r ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2],
            this.lastChar[1] = e[e.length - 1]),
            e.toString("base64", t, e.length - r))
        }
        function d(e) {
            var t = e && e.length ? this.write(e) : "";
            return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t
        }
        function f(e) {
            return e.toString(this.encoding)
        }
        function h(e) {
            return e && e.length ? this.write(e) : ""
        }
        r.StringDecoder = o,
        o.prototype.write = function(e) {
            if (0 === e.length)
                return "";
            var t, r;
            if (this.lastNeed) {
                if (void 0 === (t = this.fillLast(e)))
                    return "";
                r = this.lastNeed,
                this.lastNeed = 0
            } else
                r = 0;
            return r < e.length ? t ? t + this.text(e, r) : this.text(e, r) : t || ""
        }
        ,
        o.prototype.end = function(e) {
            var t = e && e.length ? this.write(e) : "";
            return this.lastNeed ? t + "�" : t
        }
        ,
        o.prototype.text = function(e, t) {
            var r = function(e, t, r) {
                var n = t.length - 1;
                if (n < r)
                    return 0;
                var i = s(t[n]);
                if (i >= 0)
                    return i > 0 && (e.lastNeed = i - 1),
                    i;
                if (--n < r || -2 === i)
                    return 0;
                if (i = s(t[n]),
                i >= 0)
                    return i > 0 && (e.lastNeed = i - 2),
                    i;
                if (--n < r || -2 === i)
                    return 0;
                if (i = s(t[n]),
                i >= 0)
                    return i > 0 && (2 === i ? i = 0 : e.lastNeed = i - 3),
                    i;
                return 0
            }(this, e, t);
            if (!this.lastNeed)
                return e.toString("utf8", t);
            this.lastTotal = r;
            var n = e.length - (r - this.lastNeed);
            return e.copy(this.lastChar, 0, n),
            e.toString("utf8", t, n)
        }
        ,
        o.prototype.fillLast = function(e) {
            if (this.lastNeed <= e.length)
                return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed),
                this.lastChar.toString(this.encoding, 0, this.lastTotal);
            e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length),
            this.lastNeed -= e.length
        }
    }
    , {
        "safe-buffer": 145
    }],
    192: [function(e, t, r) {
        !function(e, n) {
            "object" == typeof r && void 0 !== t ? n(r) : "function" == typeof define && define.amd ? define(["exports"], n) : n((e = "undefined" != typeof globalThis ? globalThis : e || self).Superstruct = {})
        }(this, (function(e) {
            "use strict";
            class t extends TypeError {
                constructor(e, t) {
                    let r;
                    const {message: n, explanation: i, ...o} = e
                      , {path: s} = e
                      , a = 0 === s.length ? n : `At path: ${s.join(".")} -- ${n}`;
                    super(i ?? a),
                    null != i && (this.cause = a),
                    Object.assign(this, o),
                    this.name = this.constructor.name,
                    this.failures = ()=>r ?? (r = [e, ...t()])
                }
            }
            function r(e) {
                return "object" == typeof e && null != e
            }
            function n(e) {
                if ("[object Object]" !== Object.prototype.toString.call(e))
                    return !1;
                const t = Object.getPrototypeOf(e);
                return null === t || t === Object.prototype
            }
            function i(e) {
                return "symbol" == typeof e ? e.toString() : "string" == typeof e ? JSON.stringify(e) : `${e}`
            }
            function o(e, t, r, n) {
                if (!0 === e)
                    return;
                !1 === e ? e = {} : "string" == typeof e && (e = {
                    message: e
                });
                const {path: o, branch: s} = t
                  , {type: a} = r
                  , {refinement: u, message: c=`Expected a value of type \`${a}\`${u ? ` with refinement \`${u}\`` : ""}, but received: \`${i(n)}\``} = e;
                return {
                    value: n,
                    type: a,
                    refinement: u,
                    key: o[o.length - 1],
                    path: o,
                    branch: s,
                    ...e,
                    message: c
                }
            }
            function *s(e, t, n, i) {
                var s;
                r(s = e) && "function" == typeof s[Symbol.iterator] || (e = [e]);
                for (const r of e) {
                    const e = o(r, t, n, i);
                    e && (yield e)
                }
            }
            function *a(e, t, n={}) {
                const {path: i=[], branch: o=[e], coerce: s=!1, mask: u=!1} = n
                  , c = {
                    path: i,
                    branch: o
                };
                if (s && (e = t.coercer(e, c),
                u && "type" !== t.type && r(t.schema) && r(e) && !Array.isArray(e)))
                    for (const r in e)
                        void 0 === t.schema[r] && delete e[r];
                let l = "valid";
                for (const r of t.validator(e, c))
                    r.explanation = n.message,
                    l = "not_valid",
                    yield[r, void 0];
                for (let[d,f,h] of t.entries(e, c)) {
                    const t = a(f, h, {
                        path: void 0 === d ? i : [...i, d],
                        branch: void 0 === d ? o : [...o, f],
                        coerce: s,
                        mask: u,
                        message: n.message
                    });
                    for (const n of t)
                        n[0] ? (l = null != n[0].refinement ? "not_refined" : "not_valid",
                        yield[n[0], void 0]) : s && (f = n[1],
                        void 0 === d ? e = f : e instanceof Map ? e.set(d, f) : e instanceof Set ? e.add(f) : r(e) && (void 0 !== f || d in e) && (e[d] = f))
                }
                if ("not_valid" !== l)
                    for (const r of t.refiner(e, c))
                        r.explanation = n.message,
                        l = "not_refined",
                        yield[r, void 0];
                "valid" === l && (yield[void 0, e])
            }
            class u {
                constructor(e) {
                    const {type: t, schema: r, validator: n, refiner: i, coercer: o=(e=>e), entries: a=function*() {}
                    } = e;
                    this.type = t,
                    this.schema = r,
                    this.entries = a,
                    this.coercer = o,
                    this.validator = n ? (e,t)=>s(n(e, t), t, this, e) : ()=>[],
                    this.refiner = i ? (e,t)=>s(i(e, t), t, this, e) : ()=>[]
                }
                assert(e, t) {
                    return c(e, this, t)
                }
                create(e, t) {
                    return l(e, this, t)
                }
                is(e) {
                    return f(e, this)
                }
                mask(e, t) {
                    return d(e, this, t)
                }
                validate(e, t={}) {
                    return h(e, this, t)
                }
            }
            function c(e, t, r) {
                const n = h(e, t, {
                    message: r
                });
                if (n[0])
                    throw n[0]
            }
            function l(e, t, r) {
                const n = h(e, t, {
                    coerce: !0,
                    message: r
                });
                if (n[0])
                    throw n[0];
                return n[1]
            }
            function d(e, t, r) {
                const n = h(e, t, {
                    coerce: !0,
                    mask: !0,
                    message: r
                });
                if (n[0])
                    throw n[0];
                return n[1]
            }
            function f(e, t) {
                return !h(e, t)[0]
            }
            function h(e, r, n={}) {
                const i = a(e, r, n)
                  , o = function(e) {
                    const {done: t, value: r} = e.next();
                    return t ? void 0 : r
                }(i);
                if (o[0]) {
                    return [new t(o[0],(function*() {
                        for (const e of i)
                            e[0] && (yield e[0])
                    }
                    )), void 0]
                }
                return [void 0, o[1]]
            }
            function p(e, t) {
                return new u({
                    type: e,
                    schema: null,
                    validator: t
                })
            }
            function g() {
                return p("never", (()=>!1))
            }
            function b(e) {
                const t = e ? Object.keys(e) : []
                  , n = g();
                return new u({
                    type: "object",
                    schema: e || null,
                    *entries(i) {
                        if (e && r(i)) {
                            const r = new Set(Object.keys(i));
                            for (const n of t)
                                r.delete(n),
                                yield[n, i[n], e[n]];
                            for (const e of r)
                                yield[e, i[e], n]
                        }
                    },
                    validator: e=>r(e) || `Expected an object, but received: ${i(e)}`,
                    coercer: e=>r(e) ? {
                        ...e
                    } : e
                })
            }
            function m(e) {
                return new u({
                    ...e,
                    validator: (t,r)=>void 0 === t || e.validator(t, r),
                    refiner: (t,r)=>void 0 === t || e.refiner(t, r)
                })
            }
            function y() {
                return p("string", (e=>"string" == typeof e || `Expected a string, but received: ${i(e)}`))
            }
            function v(e) {
                const t = Object.keys(e);
                return new u({
                    type: "type",
                    schema: e,
                    *entries(n) {
                        if (r(n))
                            for (const r of t)
                                yield[r, n[r], e[r]]
                    },
                    validator: e=>r(e) || `Expected an object, but received: ${i(e)}`,
                    coercer: e=>r(e) ? {
                        ...e
                    } : e
                })
            }
            function w() {
                return p("unknown", (()=>!0))
            }
            function _(e, t, r) {
                return new u({
                    ...e,
                    coercer: (n,i)=>f(n, t) ? e.coercer(r(n, i), i) : e.coercer(n, i)
                })
            }
            function E(e) {
                return e instanceof Map || e instanceof Set ? e.size : e.length
            }
            function S(e, t, r) {
                return new u({
                    ...e,
                    *refiner(n, i) {
                        yield*e.refiner(n, i);
                        const o = s(r(n, i), i, e, n);
                        for (const e of o)
                            yield{
                                ...e,
                                refinement: t
                            }
                    }
                })
            }
            e.Struct = u,
            e.StructError = t,
            e.any = function() {
                return p("any", (()=>!0))
            }
            ,
            e.array = function(e) {
                return new u({
                    type: "array",
                    schema: e,
                    *entries(t) {
                        if (e && Array.isArray(t))
                            for (const [r,n] of t.entries())
                                yield[r, n, e]
                    },
                    coercer: e=>Array.isArray(e) ? e.slice() : e,
                    validator: e=>Array.isArray(e) || `Expected an array value, but received: ${i(e)}`
                })
            }
            ,
            e.assert = c,
            e.assign = function(...e) {
                const t = "type" === e[0].type
                  , r = e.map((e=>e.schema))
                  , n = Object.assign({}, ...r);
                return t ? v(n) : b(n)
            }
            ,
            e.bigint = function() {
                return p("bigint", (e=>"bigint" == typeof e))
            }
            ,
            e.boolean = function() {
                return p("boolean", (e=>"boolean" == typeof e))
            }
            ,
            e.coerce = _,
            e.create = l,
            e.date = function() {
                return p("date", (e=>e instanceof Date && !isNaN(e.getTime()) || `Expected a valid \`Date\` object, but received: ${i(e)}`))
            }
            ,
            e.defaulted = function(e, t, r={}) {
                return _(e, w(), (e=>{
                    const i = "function" == typeof t ? t() : t;
                    if (void 0 === e)
                        return i;
                    if (!r.strict && n(e) && n(i)) {
                        const t = {
                            ...e
                        };
                        let r = !1;
                        for (const e in i)
                            void 0 === t[e] && (t[e] = i[e],
                            r = !0);
                        if (r)
                            return t
                    }
                    return e
                }
                ))
            }
            ,
            e.define = p,
            e.deprecated = function(e, t) {
                return new u({
                    ...e,
                    refiner: (t,r)=>void 0 === t || e.refiner(t, r),
                    validator: (r,n)=>void 0 === r || (t(r, n),
                    e.validator(r, n))
                })
            }
            ,
            e.dynamic = function(e) {
                return new u({
                    type: "dynamic",
                    schema: null,
                    *entries(t, r) {
                        const n = e(t, r);
                        yield*n.entries(t, r)
                    },
                    validator: (t,r)=>e(t, r).validator(t, r),
                    coercer: (t,r)=>e(t, r).coercer(t, r),
                    refiner: (t,r)=>e(t, r).refiner(t, r)
                })
            }
            ,
            e.empty = function(e) {
                return S(e, "empty", (t=>{
                    const r = E(t);
                    return 0 === r || `Expected an empty ${e.type} but received one with a size of \`${r}\``
                }
                ))
            }
            ,
            e.enums = function(e) {
                const t = {}
                  , r = e.map((e=>i(e))).join();
                for (const r of e)
                    t[r] = r;
                return new u({
                    type: "enums",
                    schema: t,
                    validator: t=>e.includes(t) || `Expected one of \`${r}\`, but received: ${i(t)}`
                })
            }
            ,
            e.func = function() {
                return p("func", (e=>"function" == typeof e || `Expected a function, but received: ${i(e)}`))
            }
            ,
            e.instance = function(e) {
                return p("instance", (t=>t instanceof e || `Expected a \`${e.name}\` instance, but received: ${i(t)}`))
            }
            ,
            e.integer = function() {
                return p("integer", (e=>"number" == typeof e && !isNaN(e) && Number.isInteger(e) || `Expected an integer, but received: ${i(e)}`))
            }
            ,
            e.intersection = function(e) {
                return new u({
                    type: "intersection",
                    schema: null,
                    *entries(t, r) {
                        for (const n of e)
                            yield*n.entries(t, r)
                    },
                    *validator(t, r) {
                        for (const n of e)
                            yield*n.validator(t, r)
                    },
                    *refiner(t, r) {
                        for (const n of e)
                            yield*n.refiner(t, r)
                    }
                })
            }
            ,
            e.is = f,
            e.lazy = function(e) {
                let t;
                return new u({
                    type: "lazy",
                    schema: null,
                    *entries(r, n) {
                        t ?? (t = e()),
                        yield*t.entries(r, n)
                    },
                    validator: (r,n)=>(t ?? (t = e()),
                    t.validator(r, n)),
                    coercer: (r,n)=>(t ?? (t = e()),
                    t.coercer(r, n)),
                    refiner: (r,n)=>(t ?? (t = e()),
                    t.refiner(r, n))
                })
            }
            ,
            e.literal = function(e) {
                const t = i(e)
                  , r = typeof e;
                return new u({
                    type: "literal",
                    schema: "string" === r || "number" === r || "boolean" === r ? e : null,
                    validator: r=>r === e || `Expected the literal \`${t}\`, but received: ${i(r)}`
                })
            }
            ,
            e.map = function(e, t) {
                return new u({
                    type: "map",
                    schema: null,
                    *entries(r) {
                        if (e && t && r instanceof Map)
                            for (const [n,i] of r.entries())
                                yield[n, n, e],
                                yield[n, i, t]
                    },
                    coercer: e=>e instanceof Map ? new Map(e) : e,
                    validator: e=>e instanceof Map || `Expected a \`Map\` object, but received: ${i(e)}`
                })
            }
            ,
            e.mask = d,
            e.max = function(e, t, r={}) {
                const {exclusive: n} = r;
                return S(e, "max", (r=>n ? r < t : r <= t || `Expected a ${e.type} less than ${n ? "" : "or equal to "}${t} but received \`${r}\``))
            }
            ,
            e.min = function(e, t, r={}) {
                const {exclusive: n} = r;
                return S(e, "min", (r=>n ? r > t : r >= t || `Expected a ${e.type} greater than ${n ? "" : "or equal to "}${t} but received \`${r}\``))
            }
            ,
            e.never = g,
            e.nonempty = function(e) {
                return S(e, "nonempty", (t=>E(t) > 0 || `Expected a nonempty ${e.type} but received an empty one`))
            }
            ,
            e.nullable = function(e) {
                return new u({
                    ...e,
                    validator: (t,r)=>null === t || e.validator(t, r),
                    refiner: (t,r)=>null === t || e.refiner(t, r)
                })
            }
            ,
            e.number = function() {
                return p("number", (e=>"number" == typeof e && !isNaN(e) || `Expected a number, but received: ${i(e)}`))
            }
            ,
            e.object = b,
            e.omit = function(e, t) {
                const {schema: r} = e
                  , n = {
                    ...r
                };
                for (const e of t)
                    delete n[e];
                return "type" === e.type ? v(n) : b(n)
            }
            ,
            e.optional = m,
            e.partial = function(e) {
                const t = e instanceof u ? {
                    ...e.schema
                } : {
                    ...e
                };
                for (const e in t)
                    t[e] = m(t[e]);
                return b(t)
            }
            ,
            e.pattern = function(e, t) {
                return S(e, "pattern", (r=>t.test(r) || `Expected a ${e.type} matching \`/${t.source}/\` but received "${r}"`))
            }
            ,
            e.pick = function(e, t) {
                const {schema: r} = e
                  , n = {};
                for (const e of t)
                    n[e] = r[e];
                return b(n)
            }
            ,
            e.record = function(e, t) {
                return new u({
                    type: "record",
                    schema: null,
                    *entries(n) {
                        if (r(n))
                            for (const r in n) {
                                const i = n[r];
                                yield[r, r, e],
                                yield[r, i, t]
                            }
                    },
                    validator: e=>r(e) || `Expected an object, but received: ${i(e)}`
                })
            }
            ,
            e.refine = S,
            e.regexp = function() {
                return p("regexp", (e=>e instanceof RegExp))
            }
            ,
            e.set = function(e) {
                return new u({
                    type: "set",
                    schema: null,
                    *entries(t) {
                        if (e && t instanceof Set)
                            for (const r of t)
                                yield[r, r, e]
                    },
                    coercer: e=>e instanceof Set ? new Set(e) : e,
                    validator: e=>e instanceof Set || `Expected a \`Set\` object, but received: ${i(e)}`
                })
            }
            ,
            e.size = function(e, t, r=t) {
                const n = `Expected a ${e.type}`
                  , i = t === r ? `of \`${t}\`` : `between \`${t}\` and \`${r}\``;
                return S(e, "size", (e=>{
                    if ("number" == typeof e || e instanceof Date)
                        return t <= e && e <= r || `${n} ${i} but received \`${e}\``;
                    if (e instanceof Map || e instanceof Set) {
                        const {size: o} = e;
                        return t <= o && o <= r || `${n} with a size ${i} but received one with a size of \`${o}\``
                    }
                    {
                        const {length: o} = e;
                        return t <= o && o <= r || `${n} with a length ${i} but received one with a length of \`${o}\``
                    }
                }
                ))
            }
            ,
            e.string = y,
            e.struct = function(e, t) {
                return console.warn("superstruct@0.11 - The `struct` helper has been renamed to `define`."),
                p(e, t)
            }
            ,
            e.trimmed = function(e) {
                return _(e, y(), (e=>e.trim()))
            }
            ,
            e.tuple = function(e) {
                const t = g();
                return new u({
                    type: "tuple",
                    schema: null,
                    *entries(r) {
                        if (Array.isArray(r)) {
                            const n = Math.max(e.length, r.length);
                            for (let i = 0; i < n; i++)
                                yield[i, r[i], e[i] || t]
                        }
                    },
                    validator: e=>Array.isArray(e) || `Expected an array, but received: ${i(e)}`
                })
            }
            ,
            e.type = v,
            e.union = function(e) {
                const t = e.map((e=>e.type)).join(" | ");
                return new u({
                    type: "union",
                    schema: null,
                    coercer(t) {
                        for (const r of e) {
                            const [e,n] = r.validate(t, {
                                coerce: !0
                            });
                            if (!e)
                                return n
                        }
                        return t
                    },
                    validator(r, n) {
                        const o = [];
                        for (const t of e) {
                            const [...e] = a(r, t, n)
                              , [i] = e;
                            if (!i[0])
                                return [];
                            for (const [t] of e)
                                t && o.push(t)
                        }
                        return [`Expected the value to satisfy a union of \`${t}\`, but received: ${i(r)}`, ...o]
                    }
                })
            }
            ,
            e.unknown = w,
            e.validate = h
        }
        ))
    }
    , {}],
    193: [function(e, t, r) {
        (function(e) {
            (function() {
                function r(t) {
                    try {
                        if (!e.localStorage)
                            return !1
                    } catch (e) {
                        return !1
                    }
                    var r = e.localStorage[t];
                    return null != r && "true" === String(r).toLowerCase()
                }
                t.exports = function(e, t) {
                    if (r("noDeprecation"))
                        return e;
                    var n = !1;
                    return function() {
                        if (!n) {
                            if (r("throwDeprecation"))
                                throw new Error(t);
                            r("traceDeprecation") ? console.trace(t) : console.warn(t),
                            n = !0
                        }
                        return e.apply(this, arguments)
                    }
                }
            }
            ).call(this)
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {}],
    194: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        Object.defineProperty(r, "v1", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        }),
        Object.defineProperty(r, "v3", {
            enumerable: !0,
            get: function() {
                return i.default
            }
        }),
        Object.defineProperty(r, "v4", {
            enumerable: !0,
            get: function() {
                return o.default
            }
        }),
        Object.defineProperty(r, "v5", {
            enumerable: !0,
            get: function() {
                return s.default
            }
        }),
        Object.defineProperty(r, "NIL", {
            enumerable: !0,
            get: function() {
                return a.default
            }
        }),
        Object.defineProperty(r, "version", {
            enumerable: !0,
            get: function() {
                return u.default
            }
        }),
        Object.defineProperty(r, "validate", {
            enumerable: !0,
            get: function() {
                return c.default
            }
        }),
        Object.defineProperty(r, "stringify", {
            enumerable: !0,
            get: function() {
                return l.default
            }
        }),
        Object.defineProperty(r, "parse", {
            enumerable: !0,
            get: function() {
                return d.default
            }
        });
        var n = f(e("./v1.js"))
          , i = f(e("./v3.js"))
          , o = f(e("./v4.js"))
          , s = f(e("./v5.js"))
          , a = f(e("./nil.js"))
          , u = f(e("./version.js"))
          , c = f(e("./validate.js"))
          , l = f(e("./stringify.js"))
          , d = f(e("./parse.js"));
        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
    }
    , {
        "./nil.js": 196,
        "./parse.js": 197,
        "./stringify.js": 201,
        "./v1.js": 202,
        "./v3.js": 203,
        "./v4.js": 205,
        "./v5.js": 206,
        "./validate.js": 207,
        "./version.js": 208
    }],
    195: [function(e, t, r) {
        "use strict";
        function n(e) {
            return 14 + (e + 64 >>> 9 << 4) + 1
        }
        function i(e, t) {
            const r = (65535 & e) + (65535 & t);
            return (e >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r
        }
        function o(e, t, r, n, o, s) {
            return i((a = i(i(t, e), i(n, s))) << (u = o) | a >>> 32 - u, r);
            var a, u
        }
        function s(e, t, r, n, i, s, a) {
            return o(t & r | ~t & n, e, t, i, s, a)
        }
        function a(e, t, r, n, i, s, a) {
            return o(t & n | r & ~n, e, t, i, s, a)
        }
        function u(e, t, r, n, i, s, a) {
            return o(t ^ r ^ n, e, t, i, s, a)
        }
        function c(e, t, r, n, i, s, a) {
            return o(r ^ (t | ~n), e, t, i, s, a)
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.default = void 0;
        var l = function(e) {
            if ("string" == typeof e) {
                const t = unescape(encodeURIComponent(e));
                e = new Uint8Array(t.length);
                for (let r = 0; r < t.length; ++r)
                    e[r] = t.charCodeAt(r)
            }
            return function(e) {
                const t = []
                  , r = 32 * e.length
                  , n = "0123456789abcdef";
                for (let i = 0; i < r; i += 8) {
                    const r = e[i >> 5] >>> i % 32 & 255
                      , o = parseInt(n.charAt(r >>> 4 & 15) + n.charAt(15 & r), 16);
                    t.push(o)
                }
                return t
            }(function(e, t) {
                e[t >> 5] |= 128 << t % 32,
                e[n(t) - 1] = t;
                let r = 1732584193
                  , o = -271733879
                  , l = -1732584194
                  , d = 271733878;
                for (let t = 0; t < e.length; t += 16) {
                    const n = r
                      , f = o
                      , h = l
                      , p = d;
                    r = s(r, o, l, d, e[t], 7, -680876936),
                    d = s(d, r, o, l, e[t + 1], 12, -389564586),
                    l = s(l, d, r, o, e[t + 2], 17, 606105819),
                    o = s(o, l, d, r, e[t + 3], 22, -1044525330),
                    r = s(r, o, l, d, e[t + 4], 7, -176418897),
                    d = s(d, r, o, l, e[t + 5], 12, 1200080426),
                    l = s(l, d, r, o, e[t + 6], 17, -1473231341),
                    o = s(o, l, d, r, e[t + 7], 22, -45705983),
                    r = s(r, o, l, d, e[t + 8], 7, 1770035416),
                    d = s(d, r, o, l, e[t + 9], 12, -1958414417),
                    l = s(l, d, r, o, e[t + 10], 17, -42063),
                    o = s(o, l, d, r, e[t + 11], 22, -1990404162),
                    r = s(r, o, l, d, e[t + 12], 7, 1804603682),
                    d = s(d, r, o, l, e[t + 13], 12, -40341101),
                    l = s(l, d, r, o, e[t + 14], 17, -1502002290),
                    o = s(o, l, d, r, e[t + 15], 22, 1236535329),
                    r = a(r, o, l, d, e[t + 1], 5, -165796510),
                    d = a(d, r, o, l, e[t + 6], 9, -1069501632),
                    l = a(l, d, r, o, e[t + 11], 14, 643717713),
                    o = a(o, l, d, r, e[t], 20, -373897302),
                    r = a(r, o, l, d, e[t + 5], 5, -701558691),
                    d = a(d, r, o, l, e[t + 10], 9, 38016083),
                    l = a(l, d, r, o, e[t + 15], 14, -660478335),
                    o = a(o, l, d, r, e[t + 4], 20, -405537848),
                    r = a(r, o, l, d, e[t + 9], 5, 568446438),
                    d = a(d, r, o, l, e[t + 14], 9, -1019803690),
                    l = a(l, d, r, o, e[t + 3], 14, -187363961),
                    o = a(o, l, d, r, e[t + 8], 20, 1163531501),
                    r = a(r, o, l, d, e[t + 13], 5, -1444681467),
                    d = a(d, r, o, l, e[t + 2], 9, -51403784),
                    l = a(l, d, r, o, e[t + 7], 14, 1735328473),
                    o = a(o, l, d, r, e[t + 12], 20, -1926607734),
                    r = u(r, o, l, d, e[t + 5], 4, -378558),
                    d = u(d, r, o, l, e[t + 8], 11, -2022574463),
                    l = u(l, d, r, o, e[t + 11], 16, 1839030562),
                    o = u(o, l, d, r, e[t + 14], 23, -35309556),
                    r = u(r, o, l, d, e[t + 1], 4, -1530992060),
                    d = u(d, r, o, l, e[t + 4], 11, 1272893353),
                    l = u(l, d, r, o, e[t + 7], 16, -155497632),
                    o = u(o, l, d, r, e[t + 10], 23, -1094730640),
                    r = u(r, o, l, d, e[t + 13], 4, 681279174),
                    d = u(d, r, o, l, e[t], 11, -358537222),
                    l = u(l, d, r, o, e[t + 3], 16, -722521979),
                    o = u(o, l, d, r, e[t + 6], 23, 76029189),
                    r = u(r, o, l, d, e[t + 9], 4, -640364487),
                    d = u(d, r, o, l, e[t + 12], 11, -421815835),
                    l = u(l, d, r, o, e[t + 15], 16, 530742520),
                    o = u(o, l, d, r, e[t + 2], 23, -995338651),
                    r = c(r, o, l, d, e[t], 6, -198630844),
                    d = c(d, r, o, l, e[t + 7], 10, 1126891415),
                    l = c(l, d, r, o, e[t + 14], 15, -1416354905),
                    o = c(o, l, d, r, e[t + 5], 21, -57434055),
                    r = c(r, o, l, d, e[t + 12], 6, 1700485571),
                    d = c(d, r, o, l, e[t + 3], 10, -1894986606),
                    l = c(l, d, r, o, e[t + 10], 15, -1051523),
                    o = c(o, l, d, r, e[t + 1], 21, -2054922799),
                    r = c(r, o, l, d, e[t + 8], 6, 1873313359),
                    d = c(d, r, o, l, e[t + 15], 10, -30611744),
                    l = c(l, d, r, o, e[t + 6], 15, -1560198380),
                    o = c(o, l, d, r, e[t + 13], 21, 1309151649),
                    r = c(r, o, l, d, e[t + 4], 6, -145523070),
                    d = c(d, r, o, l, e[t + 11], 10, -1120210379),
                    l = c(l, d, r, o, e[t + 2], 15, 718787259),
                    o = c(o, l, d, r, e[t + 9], 21, -343485551),
                    r = i(r, n),
                    o = i(o, f),
                    l = i(l, h),
                    d = i(d, p)
                }
                return [r, o, l, d]
            }(function(e) {
                if (0 === e.length)
                    return [];
                const t = 8 * e.length
                  , r = new Uint32Array(n(t));
                for (let n = 0; n < t; n += 8)
                    r[n >> 5] |= (255 & e[n / 8]) << n % 32;
                return r
            }(e), 8 * e.length))
        };
        r.default = l
    }
    , {}],
    196: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.default = void 0;
        r.default = "00000000-0000-0000-0000-000000000000"
    }
    , {}],
    197: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.default = void 0;
        var n, i = (n = e("./validate.js")) && n.__esModule ? n : {
            default: n
        };
        var o = function(e) {
            if (!(0,
            i.default)(e))
                throw TypeError("Invalid UUID");
            let t;
            const r = new Uint8Array(16);
            return r[0] = (t = parseInt(e.slice(0, 8), 16)) >>> 24,
            r[1] = t >>> 16 & 255,
            r[2] = t >>> 8 & 255,
            r[3] = 255 & t,
            r[4] = (t = parseInt(e.slice(9, 13), 16)) >>> 8,
            r[5] = 255 & t,
            r[6] = (t = parseInt(e.slice(14, 18), 16)) >>> 8,
            r[7] = 255 & t,
            r[8] = (t = parseInt(e.slice(19, 23), 16)) >>> 8,
            r[9] = 255 & t,
            r[10] = (t = parseInt(e.slice(24, 36), 16)) / 1099511627776 & 255,
            r[11] = t / 4294967296 & 255,
            r[12] = t >>> 24 & 255,
            r[13] = t >>> 16 & 255,
            r[14] = t >>> 8 & 255,
            r[15] = 255 & t,
            r
        };
        r.default = o
    }
    , {
        "./validate.js": 207
    }],
    198: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.default = void 0;
        r.default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i
    }
    , {}],
    199: [function(e, t, r) {
        "use strict";
        let n;
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.default = function() {
            if (!n && (n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto),
            !n))
                throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
            return n(i)
        }
        ;
        const i = new Uint8Array(16)
    }
    , {}],
    200: [function(e, t, r) {
        "use strict";
        function n(e, t, r, n) {
            switch (e) {
            case 0:
                return t & r ^ ~t & n;
            case 1:
            case 3:
                return t ^ r ^ n;
            case 2:
                return t & r ^ t & n ^ r & n
            }
        }
        function i(e, t) {
            return e << t | e >>> 32 - t
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.default = void 0;
        var o = function(e) {
            const t = [1518500249, 1859775393, 2400959708, 3395469782]
              , r = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
            if ("string" == typeof e) {
                const t = unescape(encodeURIComponent(e));
                e = [];
                for (let r = 0; r < t.length; ++r)
                    e.push(t.charCodeAt(r))
            } else
                Array.isArray(e) || (e = Array.prototype.slice.call(e));
            e.push(128);
            const o = e.length / 4 + 2
              , s = Math.ceil(o / 16)
              , a = new Array(s);
            for (let t = 0; t < s; ++t) {
                const r = new Uint32Array(16);
                for (let n = 0; n < 16; ++n)
                    r[n] = e[64 * t + 4 * n] << 24 | e[64 * t + 4 * n + 1] << 16 | e[64 * t + 4 * n + 2] << 8 | e[64 * t + 4 * n + 3];
                a[t] = r
            }
            a[s - 1][14] = 8 * (e.length - 1) / Math.pow(2, 32),
            a[s - 1][14] = Math.floor(a[s - 1][14]),
            a[s - 1][15] = 8 * (e.length - 1) & 4294967295;
            for (let e = 0; e < s; ++e) {
                const o = new Uint32Array(80);
                for (let t = 0; t < 16; ++t)
                    o[t] = a[e][t];
                for (let e = 16; e < 80; ++e)
                    o[e] = i(o[e - 3] ^ o[e - 8] ^ o[e - 14] ^ o[e - 16], 1);
                let s = r[0]
                  , u = r[1]
                  , c = r[2]
                  , l = r[3]
                  , d = r[4];
                for (let e = 0; e < 80; ++e) {
                    const r = Math.floor(e / 20)
                      , a = i(s, 5) + n(r, u, c, l) + d + t[r] + o[e] >>> 0;
                    d = l,
                    l = c,
                    c = i(u, 30) >>> 0,
                    u = s,
                    s = a
                }
                r[0] = r[0] + s >>> 0,
                r[1] = r[1] + u >>> 0,
                r[2] = r[2] + c >>> 0,
                r[3] = r[3] + l >>> 0,
                r[4] = r[4] + d >>> 0
            }
            return [r[0] >> 24 & 255, r[0] >> 16 & 255, r[0] >> 8 & 255, 255 & r[0], r[1] >> 24 & 255, r[1] >> 16 & 255, r[1] >> 8 & 255, 255 & r[1], r[2] >> 24 & 255, r[2] >> 16 & 255, r[2] >> 8 & 255, 255 & r[2], r[3] >> 24 & 255, r[3] >> 16 & 255, r[3] >> 8 & 255, 255 & r[3], r[4] >> 24 & 255, r[4] >> 16 & 255, r[4] >> 8 & 255, 255 & r[4]]
        };
        r.default = o
    }
    , {}],
    201: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.default = void 0;
        var n, i = (n = e("./validate.js")) && n.__esModule ? n : {
            default: n
        };
        const o = [];
        for (let e = 0; e < 256; ++e)
            o.push((e + 256).toString(16).substr(1));
        var s = function(e, t=0) {
            const r = (o[e[t + 0]] + o[e[t + 1]] + o[e[t + 2]] + o[e[t + 3]] + "-" + o[e[t + 4]] + o[e[t + 5]] + "-" + o[e[t + 6]] + o[e[t + 7]] + "-" + o[e[t + 8]] + o[e[t + 9]] + "-" + o[e[t + 10]] + o[e[t + 11]] + o[e[t + 12]] + o[e[t + 13]] + o[e[t + 14]] + o[e[t + 15]]).toLowerCase();
            if (!(0,
            i.default)(r))
                throw TypeError("Stringified UUID is invalid");
            return r
        };
        r.default = s
    }
    , {
        "./validate.js": 207
    }],
    202: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.default = void 0;
        var n = o(e("./rng.js"))
          , i = o(e("./stringify.js"));
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        let s, a, u = 0, c = 0;
        var l = function(e, t, r) {
            let o = t && r || 0;
            const l = t || new Array(16);
            let d = (e = e || {}).node || s
              , f = void 0 !== e.clockseq ? e.clockseq : a;
            if (null == d || null == f) {
                const t = e.random || (e.rng || n.default)();
                null == d && (d = s = [1 | t[0], t[1], t[2], t[3], t[4], t[5]]),
                null == f && (f = a = 16383 & (t[6] << 8 | t[7]))
            }
            let h = void 0 !== e.msecs ? e.msecs : Date.now()
              , p = void 0 !== e.nsecs ? e.nsecs : c + 1;
            const g = h - u + (p - c) / 1e4;
            if (g < 0 && void 0 === e.clockseq && (f = f + 1 & 16383),
            (g < 0 || h > u) && void 0 === e.nsecs && (p = 0),
            p >= 1e4)
                throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
            u = h,
            c = p,
            a = f,
            h += 122192928e5;
            const b = (1e4 * (268435455 & h) + p) % 4294967296;
            l[o++] = b >>> 24 & 255,
            l[o++] = b >>> 16 & 255,
            l[o++] = b >>> 8 & 255,
            l[o++] = 255 & b;
            const m = h / 4294967296 * 1e4 & 268435455;
            l[o++] = m >>> 8 & 255,
            l[o++] = 255 & m,
            l[o++] = m >>> 24 & 15 | 16,
            l[o++] = m >>> 16 & 255,
            l[o++] = f >>> 8 | 128,
            l[o++] = 255 & f;
            for (let e = 0; e < 6; ++e)
                l[o + e] = d[e];
            return t || (0,
            i.default)(l)
        };
        r.default = l
    }
    , {
        "./rng.js": 199,
        "./stringify.js": 201
    }],
    203: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.default = void 0;
        var n = o(e("./v35.js"))
          , i = o(e("./md5.js"));
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var s = (0,
        n.default)("v3", 48, i.default);
        r.default = s
    }
    , {
        "./md5.js": 195,
        "./v35.js": 204
    }],
    204: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.default = function(e, t, r) {
            function o(e, o, s, a) {
                if ("string" == typeof e && (e = function(e) {
                    e = unescape(encodeURIComponent(e));
                    const t = [];
                    for (let r = 0; r < e.length; ++r)
                        t.push(e.charCodeAt(r));
                    return t
                }(e)),
                "string" == typeof o && (o = (0,
                i.default)(o)),
                16 !== o.length)
                    throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
                let u = new Uint8Array(16 + e.length);
                if (u.set(o),
                u.set(e, o.length),
                u = r(u),
                u[6] = 15 & u[6] | t,
                u[8] = 63 & u[8] | 128,
                s) {
                    a = a || 0;
                    for (let e = 0; e < 16; ++e)
                        s[a + e] = u[e];
                    return s
                }
                return (0,
                n.default)(u)
            }
            try {
                o.name = e
            } catch (e) {}
            return o.DNS = s,
            o.URL = a,
            o
        }
        ,
        r.URL = r.DNS = void 0;
        var n = o(e("./stringify.js"))
          , i = o(e("./parse.js"));
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const s = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
        r.DNS = s;
        const a = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
        r.URL = a
    }
    , {
        "./parse.js": 197,
        "./stringify.js": 201
    }],
    205: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.default = void 0;
        var n = o(e("./rng.js"))
          , i = o(e("./stringify.js"));
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var s = function(e, t, r) {
            const o = (e = e || {}).random || (e.rng || n.default)();
            if (o[6] = 15 & o[6] | 64,
            o[8] = 63 & o[8] | 128,
            t) {
                r = r || 0;
                for (let e = 0; e < 16; ++e)
                    t[r + e] = o[e];
                return t
            }
            return (0,
            i.default)(o)
        };
        r.default = s
    }
    , {
        "./rng.js": 199,
        "./stringify.js": 201
    }],
    206: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.default = void 0;
        var n = o(e("./v35.js"))
          , i = o(e("./sha1.js"));
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var s = (0,
        n.default)("v5", 80, i.default);
        r.default = s
    }
    , {
        "./sha1.js": 200,
        "./v35.js": 204
    }],
    207: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.default = void 0;
        var n, i = (n = e("./regex.js")) && n.__esModule ? n : {
            default: n
        };
        var o = function(e) {
            return "string" == typeof e && i.default.test(e)
        };
        r.default = o
    }
    , {
        "./regex.js": 198
    }],
    208: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.default = void 0;
        var n, i = (n = e("./validate.js")) && n.__esModule ? n : {
            default: n
        };
        var o = function(e) {
            if (!(0,
            i.default)(e))
                throw TypeError("Invalid UUID");
            return parseInt(e.substr(14, 1), 16)
        };
        r.default = o
    }
    , {
        "./validate.js": 207
    }],
    209: [function(e, t, r) {
        t.exports = function e(t, r) {
            if (t && r)
                return e(t)(r);
            if ("function" != typeof t)
                throw new TypeError("need wrapper function");
            return Object.keys(t).forEach((function(e) {
                n[e] = t[e]
            }
            )),
            n;
            function n() {
                for (var e = new Array(arguments.length), r = 0; r < e.length; r++)
                    e[r] = arguments[r];
                var n = t.apply(this, e)
                  , i = e[e.length - 1];
                return "function" == typeof n && n !== i && Object.keys(i).forEach((function(e) {
                    n[e] = i[e]
                }
                )),
                n
            }
        }
    }
    , {}],
    210: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.default = function() {
            return function() {
                const {doctype: e} = window.document;
                if (e)
                    return "html" === e.name;
                return !0
            }() && function() {
                const e = [/\.xml$/u, /\.pdf$/u]
                  , t = window.location.pathname;
                for (let r = 0; r < e.length; r++)
                    if (e[r].test(t))
                        return !1;
                return !0
            }() && function() {
                const e = document.documentElement.nodeName;
                if (e)
                    return "html" === e.toLowerCase();
                return !0
            }() && !function() {
                const e = ["execution.consensys.io", "execution.metamask.io", "uscourts.gov", "dropbox.com", "webbyawards.com", "adyen.com", "gravityforms.com", "harbourair.com", "ani.gamer.com.tw", "blueskybooking.com", "sharefile.com", "battle.net"]
                  , t = ["cdn.shopify.com/s/javascripts/tricorder/xtld-read-only-frame.html"]
                  , {hostname: r, pathname: n} = window.location
                  , i = e=>e.endsWith("/") ? e.slice(0, -1) : e;
                return e.some((e=>e === r || r.endsWith(`.${e}`))) || t.some((e=>i(e) === i(r + n)))
            }()
        }
    }
    , {}]
}, {}, [1]);
