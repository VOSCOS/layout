!function t(e, n, r) {
    function o(s, a) {
        if (!n[s]) {
            if (!e[s]) {
                var u = "function" == typeof require && require;
                if (!a && u)
                    return u(s, !0);
                if (i)
                    return i(s, !0);
                throw new Error("Cannot find module '" + s + "'")
            }
            var l = n[s] = {
                exports: {}
            };
            e[s][0].call(l.exports, function(t) {
                var n = e[s][1][t];
                return o(n ? n : t)
            }, l, l.exports, t, e, n, r)
        }
        return n[s].exports
    }
    for (var i = "function" == typeof require && require, s = 0; s < r.length; s++)
        o(r[s]);
    return o
}({
    1: [function(t, e) {
        (function() {
            (function() {
                var t;
                e.exports = t = function() {
                    function t() {
                        _.bindAll(this), _.extend(this, Backbone.Events), this._bindAllInternalLinks(), this.listenTo(App.getRouter(), "unhandled_route", this._onRoute)
                    }
                    return t.prototype._bindAllInternalLinks = function() {
                        var t, e;
                        return e = document.location, t = 'a[href^="' + e.protocol + "//" + e.host + '"], a[href^="/"]', $(document).on("click", t, this._onInternalLinkClick)
                    }, t.prototype._onInternalLinkClick = function(t) {
                        var e;
                        if (!t.isDefaultPrevented())
                            return t.preventDefault(), e = $(t.currentTarget).attr("href"), App.getRouter().navigate(App.getRelativeURL(e), {
                                trigger: !0
                            })
                    }, t.prototype._onRoute = function() {
                        return $.ajax({
                            url: document.location.href,
                            data: {
                                ajax: !0
                            },
                            success: this._onData,
                            error: function() {
                                return document.location.reload()
                            }
                        }), $("body").addClass("loading")
                    }, t.prototype._onData = function(t) {
                        var e, n, r;
                        return t = t.replace("<body", "<div").replace("</body", "</div"), n = $(t), r = 'meta[property^="og:"]', $(r).remove(), $("head").append(n.find(r)), n = n.not("#ajax-head"), $("main").replaceWith(n.html()), $("html, body").scrollTop(0), e = $("body"), e.attr("class", n.attr("class")), e.addClass("loading"), _.defer(function() {
                            return e.removeClass("loading")
                        }), this.trigger("content_updated")
                    }, t
                }()
            }).call(this)
        }).call(this, t("U7R4QW"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/ajax-controller.js", "/")
    }, {
        U7R4QW: 25,
        buffer: 22
    }
    ],
    2: [function(t, e) {
        (function() {
            (function() {
                var n, r, o, i, s = {}.hasOwnProperty, a = function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e)
                        s.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
                r = t("./carousel"), o = t("./list-section"), i = t("./state"), e.exports = n = function(t) {
                    function e() {
                        return e.__super__.constructor.apply(this, arguments)
                    }
                    return a(e, t), e.prototype.initialize = function() {
                        return e.__super__.initialize.apply(this, arguments), this.listenTo(i, "change:device", this._onDeviceChange), this._onDeviceChange(), this._initCarousel()
                    }, e.prototype.remove = function() {
                        return this._carousel && this._carousel.remove(), this._carousel = null, e.__super__.remove.apply(this, arguments)
                    }, e.prototype._initCarousel = function() {
                        return this._carousel ? void 0 : this._carousel = new r({
                            el: this.$(".brand-marks .carousel"),
                            $nextButton: this.$(".brand-marks .next"),
                            $prevButton: this.$(".brand-marks .prev"),
                            $count: this.$(".brand-marks .count")
                        })
                    }, e.prototype._onDeviceChange = function() {
                        return i.get("isDesktop") ? _.defer(function() {
                            return App.getRouter().navigate("/", {
                                trigger: !0
                            })
                        }) : void 0
                    }, e
                }(o)
            }).call(this)
        }).call(this, t("U7R4QW"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/all-work-mobile-section.js", "/")
    }, {
        "./carousel": 7,
        "./list-section": 13,
        "./state": 21,
        U7R4QW: 25,
        buffer: 22
    }
    ],
    3: [function(t, e) {
        (function() {
            (function() {
                var n, r, o, i, s, a = {}.hasOwnProperty, u = function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e)
                        a.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
                r = t("./carousel"), o = t("./grid-section"), i = t("./reporter"), s = t("./state"), e.exports = n = function(t) {
                    function e() {
                        return e.__super__.constructor.apply(this, arguments)
                    }
                    return u(e, t), e.prototype.events = _.extend({}, o.prototype.events, {
                        "click .brand-marks > a": "_onBrandMarksClick",
                        "click .brand-marks .close": "_onBrandMarksCloseClick"
                    }), e.prototype.initialize = function() {
                        return e.__super__.initialize.apply(this, arguments), this.$brandMarks = this.$(".brand-marks"), this.$brandMarksCarousel = this.$(".brand-marks .carousel"), this.listenTo(s, "change:device", this._updateCarousel), this._updateCarousel(), $(window).on("hashchange", this._onHashChange).trigger("hashchange").on("scroll", this._onScroll).trigger("scroll")
                    }, e.prototype.remove = function() {
                        return $(window).off("hashchange", this._onHashChange), this._removeCarousel(), e.__super__.remove.apply(this, arguments)
                    }, e.prototype._initCarousel = function() {
                        return this._carousel ? void 0 : this._carousel = new r({
                            el: this.$brandMarksCarousel,
                            $nextButton: this.$(".brand-marks .next"),
                            $prevButton: this.$(".brand-marks .prev"),
                            $count: this.$(".brand-marks .count")
                        })
                    }, e.prototype._removeCarousel = function() {
                        return this._carousel && this._carousel.remove(), this._carousel = null
                    }, e.prototype._updateCarousel = function() {
                        return (s.get("isTablet") || s.get("isMobile")) && this._removeCarousel(), s.get("isDesktop") && this.$brandMarks.hasClass("open") ? this._initCarousel() : void 0
                    }, e.prototype._openBrandMarks = function() {
                        var t;
                        return i.reportEvent("Brand-marks-carousel open"), t = 300, this.$brandMarks.addClass("in-transition"), setTimeout(function(t) {
                            return function() {
                                return t.$brandMarks.addClass("open"), t._initCarousel(), t._updateIsotope()
                            }
                        }(this), t), setTimeout(function(t) {
                            return function() {
                                return t.$brandMarks.removeClass("in-transition")
                            }
                        }(this), 2 * t), $("html, body").animate({
                            scrollTop: this.$brandMarks.offset().top - 10
                        }, {
                            easing: "easeInOutCubic",
                            duration: t
                        })
                    }, e.prototype._closeBrandMarks = function() {
                        var t;
                        return i.reportEvent("Brand-marks-carousel close"), t = 300, this.$brandMarks.addClass("in-transition"), setTimeout(function(t) {
                            return function() {
                                return t.$brandMarks.removeClass("open"), t._updateIsotope()
                            }
                        }(this), t), setTimeout(function(t) {
                            return function() {
                                return t.$brandMarks.removeClass("in-transition")
                            }
                        }(this), 2 * t)
                    }, e.prototype._scrollIntoView = function() {
                        return $("html, body").animate({
                            scrollTop: this.$el.offset().top + 1
                        }, {
                            easing: "easeInOutCubic",
                            duration: 1e3
                        })
                    }, e.prototype._onBrandMarksClick = function(t) {
                        return this.$brandMarks.hasClass("open") ? void 0 : (t.preventDefault(), this._openBrandMarks())
                    }, e.prototype._onBrandMarksCloseClick = function(t) {
                        return t.stopPropagation(), this._closeBrandMarks()
                    }, e.prototype._onHashChange = function() {
                        var t;
                        return t = document.location.hash.slice(1), 0 === t.indexOf("work") ? this._scrollIntoView() : void 0
                    }, e.prototype._onScroll = _.throttle(function() {
                        var t, e;
                        return t = 100, e = $(window).scrollTop() > this.$el.offset().top - t, $("body").toggleClass("work", e)
                    }, 500), e
                }(o)
            }).call(this)
        }).call(this, t("U7R4QW"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/all-work-section.js", "/")
    }, {
        "./carousel": 7,
        "./grid-section": 11,
        "./reporter": 16,
        "./state": 21,
        U7R4QW: 25,
        buffer: 22
    }
    ],
    4: [function(t, e) {
        (function() {
            (function() {
                var n, r, o, i, s, a, u, l, c, f, h, p, d, g, y, m, w = {}.hasOwnProperty, v = function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e)
                        w.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
                p = t("./router"), n = t("./ajax-controller"), c = t("./header"), l = t("./footer"), s = t("./best-work-section"), o = t("./all-work-section"), r = t("./all-work-mobile-section"), f = t("./news-section"), g = t("./single-article-section"), y = t("./single-project-section"), d = t("./section-with-subsections"), u = t("./contact-section"), a = t("./brand-marks-mobile-section"), h = t("./reporter"), m = t("./state"), e.exports = i = function(t) {
                    function e() {
                        return e.__super__.constructor.apply(this, arguments)
                    }
                    return v(e, t), e.prototype.el = "html", e.prototype.viewMap = {
                        header: c,
                        "body.home .best-work": s,
                        "body.home section.all-work": o,
                        "body.work:not(.home) section.all-work, body.tax-work-categories section.all-work": r,
                        "section.all-news": f,
                        "body.single-article main": g,
                        "body.single-project main": y,
                        "body.profile main.with-subsections": d,
                        "body.contact main.with-subsections": u,
                        "body.brand-marks section.brand-marks": a,
                        footer: l
                    }, e.prototype._views = null, e.prototype._isAddThisInitialized=!1, e.prototype.initialize = function() {
                        return _.bindAll(this), this._views = [], this.listenTo(m, "change:device", this._updateContainerClass), this._updateContainerClass(), this._router = new p, this.listenToOnce(this._router, "route", this._onFirstRoute), this.$("header").headroom({
                            offset: 50
                        }), this._updateShareObject(), window.viewportUnitsBuggyfill.init()
                    }, e.prototype.getRouter = function() {
                        return this._router
                    }, e.prototype.getRelativeURL = function(t) {
                        return null == t && (t = ""), t.replace(/^(?:\/\/|[^\/]+)*\//, "")
                    }, e.prototype._updateViews = function() {
                        var t, e, n, r, o, i;
                        this.$(".loading img, .slide img, .bg-asset").each(function(t, e) {
                            var n, r, o;
                            return n = $(e), o = n.attr("src") || n.attr("data-bg"), r = $('<img src="' + o + '">'), n.is("img") && n.parent().addClass("loading"), r.bind("load", function() {
                                return n.is("img") || n.css("background-image", "url(" + o + ")"), n.parent().addClass("revealed"), setTimeout(function() {
                                    return n.parent().removeClass("loading revealed")
                                }, 500)
                            }), r[0].width ? r.trigger("load") : void 0
                        }), this.$(".news article p").dotdotdot({
                            ellipsis: "...",
                            after: ".more,span",
                            watch: !0
                        }), this._removeDetachedViews(), o = this.viewMap, i = [];
                        for (n in o)
                            e = o[n], t = this.$(n), t.length && (t.data("view") || (r = new e({
                                el: t
                            }), this._views.push(r), i.push(t.data("view", r))));
                        return i
                    }, e.prototype._removeDetachedViews = function() {
                        var t, e, n, r, o, i;
                        for (o = _.clone(this._views), i = [], t = n = 0, r = o.length; r > n; t=++n)
                            e = o[t], document.body.contains(e.el) || (e.remove(), i.push(this._views.splice(t, 1)));
                        return i
                    }, e.prototype._updateContainerClass = function() {
                        return this.$el.removeClass(m.getAllDeviceNames().join(" ")), this.$el.addClass(m.get("device"))
                    }, e.prototype._updateShareObject = function() {
                        return this._isAddThisInitialized || (window.addthis_share = {
                            url: "",
                            description: "",
                            title: "",
                            templates: {}
                        }, "undefined" != typeof addthis && null !== addthis && addthis.init(), this._isAddThisInitialized=!0), window.addthis_share.url = this._getOG("url"), window.addthis_share.title = this._getOG("title"), window.addthis_share.description = this._getOG("description"), window.addthis_share.templates.twitter = this._getOG("title") + " {{url}}"
                    }, e.prototype._getOG = function(t) {
                        return $.trim($('meta[property="og:' + t + '"]').attr("content"))
                    }, e.prototype._onFirstRoute = function() {
                        return this._updateViews(), this._ajaxController = new n, this.listenTo(this._ajaxController, "content_updated", this._onContentUpdated)
                    }, e.prototype._onContentUpdated = function() {
                        return h.reportPageView(), this._updateShareObject(), this._updateViews()
                    }, e
                }(Backbone.View)
            }).call(this)
        }).call(this, t("U7R4QW"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/app.js", "/")
    }, {
        "./ajax-controller": 1,
        "./all-work-mobile-section": 2,
        "./all-work-section": 3,
        "./best-work-section": 5,
        "./brand-marks-mobile-section": 6,
        "./contact-section": 8,
        "./footer": 10,
        "./header": 12,
        "./news-section": 14,
        "./reporter": 16,
        "./router": 17,
        "./section-with-subsections": 18,
        "./single-article-section": 19,
        "./single-project-section": 20,
        "./state": 21,
        U7R4QW: 25,
        buffer: 22
    }
    ],
    5: [function(t, e) {
        (function() {
            (function() {
                var n, r, o, i = {}.hasOwnProperty, s = function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e)
                        i.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
                r = t("./carousel"), o = t("./state"), e.exports = n = function(t) {
                    function e() {
                        return e.__super__.constructor.apply(this, arguments)
                    }
                    return s(e, t), e.prototype._carousel = null, e.prototype.events = {
                        "click .carousel > div": "_onClick"
                    }, e.prototype.initialize = function() {
                        return _.bindAll(this), this.$carousel = this.$(".carousel"), this.listenTo(o, "change:device", this._updateCarousel), this._updateCarousel()
                    }, e.prototype.remove = function() {
                        var t;
                        return null != (t = this._carousel) && t.remove(), e.__super__.remove.apply(this, arguments)
                    }, e.prototype._onClick = function() {}, e.prototype._initCarousel = function() {
                        return this._carousel ? void 0 : this._carousel = new r({
                            el: this.$carousel,
                            $nextButton: this.$(".next"),
                            $prevButton: this.$(".prev"),
                            $count: this.$(".count"),
                            owlOptions: {
                                autoplay: !0,
                                autoplayTimeout: 5e3
                            }
                        })
                    }, e.prototype._removeCarousel = function() {
                        return this._carousel && this._carousel.remove(), this._carousel = null
                    }, e.prototype._updateCarousel = function() {
                        return (o.get("isTablet") || o.get("isMobile")) && this._removeCarousel(), o.get("isDesktop") ? this._initCarousel() : void 0
                    }, e
                }(Backbone.View)
            }).call(this)
        }).call(this, t("U7R4QW"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/best-work-section.js", "/")
    }, {
        "./carousel": 7,
        "./state": 21,
        U7R4QW: 25,
        buffer: 22
    }
    ],
    6: [function(t, e) {
        (function() {
            (function() {
                var n, r, o = {}.hasOwnProperty, i = function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e)
                        o.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
                r = t("./state"), e.exports = n = function(t) {
                    function e() {
                        return e.__super__.constructor.apply(this, arguments)
                    }
                    return i(e, t), e.prototype.initialize = function() {
                        return this.listenTo(r, "change:device", this._onDeviceChange), this._onDeviceChange()
                    }, e.prototype._onDeviceChange = function() {
                        return r.get("isDesktop") ? _.defer(function() {
                            return App.getRouter().navigate("/", {
                                trigger: !0
                            })
                        }) : void 0
                    }, e
                }(Backbone.View)
            }).call(this)
        }).call(this, t("U7R4QW"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/brand-marks-mobile-section.js", "/")
    }, {
        "./state": 21,
        U7R4QW: 25,
        buffer: 22
    }
    ],
    7: [function(t, e) {
        (function() {
            (function() {
                var n, r, o = {}.hasOwnProperty, i = function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e)
                        o.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
                r = t("./state"), e.exports = n = function(t) {
                    function e() {
                        return e.__super__.constructor.apply(this, arguments)
                    }
                    return i(e, t), e._isCarouselFixed=!1, e.prototype._hasOwl=!0, e.prototype._mc = null, e.prototype._defaultOwlOptions = {
                        items: 1,
                        loop: !0,
                        URLhashListener: !1,
                        smartSpeed: 600,
                        dots: !1
                    }, e.prototype.events = {
                        mousemove: "_onMouseMove"
                    }, e.prototype.initialize = function(t) {
                        var e, n, o;
                        return this.options = t, this.constructor._isCarouselFixed || this.constructor._fixCarousel(), _.bindAll(this), !this.el || this.$el.children().length < 2 ? (this._hasOwl=!1, null != (e = this.options.$count) && e.hide(), this) : (this.$el.addClass("owl-carousel").on("changed.owl.carousel initialized.owl.carousel", _.debounce(this._onCarouselChanged, 100)).on("initialized.owl.carousel", _.debounce(this._onCarouselInitialized, 0)).owlCarousel(_.defaults(this.options.owlOptions || {}, this._defaultOwlOptions)), null != (n = this.options.$nextButton) && n.on("click", this.next), null != (o = this.options.$prevButton) && o.on("click", this.prev), $(window).on("resize", this._cacheMethods), this._cacheMethods(), this.options.hasCursorArrows && (this.listenTo(r, "change:device", this._updateCursorArrows), this._updateCursorArrows()), this._addKeyboardListeners())
                    }, e._fixCarousel = function() {
                        var t, e;
                        return t = $.fn.owlCarousel.Constructor, e = t.prototype.onThrottledResize, t.prototype.onThrottledResize = function() {
                            try {
                                return e.apply(this)
                            } catch (t) {}
                        }, this._isCarouselFixed=!0
                    }, e.prototype.next = function() {
                        return this.$el.trigger("next.owl.carousel")
                    }, e.prototype.prev = function() {
                        return this.$el.trigger("prev.owl.carousel")
                    }, e.prototype.remove = function() {
                        var t, e;
                        if (this._hasOwl)
                            return null != (t = this.options.$nextButton) && t.off("click", this.next), null != (e = this.options.$prevButton) && e.off("click", this.prev), this.$el.trigger("destroy.owl.carousel"), this.$(".owl-stage-outer > :first-child").unwrap(), this.$el.removeClass("owl-loaded owl-carousel"), $(window).off("resize", this._cacheMethods), this._hideCursorArrows(), this._removeKeyboardListeners(), this.stopListening()
                    }, e.prototype._updateCursorArrows = function() {
                        return r.get("isDesktop") ? this._showCursorArrows() : this._hideCursorArrows()
                    }, e.prototype._showCursorArrows = function() {
                        return this._mc ? void 0 : (this._mc = Hammer(this.el), this._mc.on("tap", this._onTap))
                    }, e.prototype._hideCursorArrows = function() {
                        return this._mc ? (this.$el.attr("data-arrow", ""), this._mc.off("tap", this._onTap), this._mc.destroy(), this._mc = null) : void 0
                    }, e.prototype._addKeyboardListeners = function() {
                        return $(window).on("keyup", this._onKey)
                    }, e.prototype._removeKeyboardListeners = function() {
                        return $(window).off("keyup", this._onKey)
                    }, e.prototype._cacheMethods = function() {
                        return this._getWidthCached = _.memoize(this._getWidth)
                    }, e.prototype._getCurrentSlideIndex = function() {
                        var t, e, n;
                        return e = this.$(".owl-item:not(.cloned)").index(), t = this.$(".owl-item.active").index(), n = this.$(".owl-item:not(.cloned)").length, (n + (t - e))%n + 1
                    }, e.prototype._getWidth = function() {
                        return this.$el.width()
                    }, e.prototype._onCarouselChanged = function() {
                        var t, e;
                        return this.$(".owl-item.cloned .loading").removeClass("loading"), this.options.$count ? (e = this._getCurrentSlideIndex(), this.options.$count.find(".current").text(e), t = this.$(".owl-item.active .caption").html() || "", this.options.$count.children(".caption").html(t), this.options.$count.toggleClass("light-text", this.$(".active img,.active .slide").hasClass("dark"))) : void 0
                    }, e.prototype._onCarouselInitialized = function() {
                        return this.trigger("initialized"), this.$el.one("changed.owl.carousel", function(t) {
                            return function() {
                                return t.$el.parent().addClass("carousel-active")
                            }
                        }(this))
                    }, e.prototype._onMouseMove = function(t) {
                        var e;
                        if (this._mc)
                            return e = t.offsetX / this._getWidthCached(), this.$el.attr("data-arrow", e > .5 ? "right" : "left")
                    }, e.prototype._onTap = function() {
                        var t;
                        return t = this.$el.attr("data-arrow"), "left" === t ? this.prev() : "right" === t ? this.next() : void 0
                    }, e.prototype._onKey = function(t) {
                        return 37 === t.which && this.prev(), 39 === t.which ? this.next() : void 0
                    }, e
                }(Backbone.View)
            }).call(this)
        }).call(this, t("U7R4QW"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/carousel.js", "/")
    }, {
        "./state": 21,
        U7R4QW: 25,
        buffer: 22
    }
    ],
    8: [function(t, e) {
        (function() {
            (function() {
                var n, r, o, i = {}.hasOwnProperty, s = function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e)
                        i.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
                o = t("./section-with-subsections"), r = t("./reporter"), e.exports = n = function(t) {
                    function e() {
                        return e.__super__.constructor.apply(this, arguments)
                    }
                    return s(e, t), e.prototype.events = _.extend({}, o.prototype.events, {
                        "click .studio-image": "_onStudioImageClick",
                        "click .gallery .close": "_hideOverlay"
                    }), e.prototype._isOverlayOpen=!1, e.prototype.initialize = function() {
                        return e.__super__.initialize.apply(this, arguments), this.$overlay = this.$(".gallery"), this.$body = $("body")
                    }, e.prototype._showOverlay = function() {
                        return this._isOverlayOpen=!0, this.$overlay.removeClass("hidden").stop().hide().fadeIn(400, function(t) {
                            return function() {
                                return t.$overlay.css("display", ""), t.$body.addClass("gallery-open"), t.$overlay.parent().addClass("gallery-open")
                            }
                        }(this))
                    }, e.prototype._hideOverlay = function() {
                        return this._isOverlayOpen=!1, this.$overlay.stop().show().fadeOut(400, function(t) {
                            return function() {
                                return t.$body.removeClass("gallery-open"), t.$overlay.css("display", "").addClass("hidden").parent().removeClass("gallery-open")
                            }
                        }(this))
                    }, e.prototype._onStudioImageClick = function(t) {
                        return t.preventDefault(), r.reportEvent("studio-image click"), this._isOverlayOpen ? this._hideOverlay() : this._showOverlay()
                    }, e
                }(o)
            }).call(this)
        }).call(this, t("U7R4QW"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/contact-section.js", "/")
    }, {
        "./reporter": 16,
        "./section-with-subsections": 18,
        U7R4QW: 25,
        buffer: 22
    }
    ],
    9: [function(t) {
        (function() {
            (function() {
                var e;
                e = t("./app"), $(function() {
                    return window.App = new e, Backbone.history.start({
                        pushState: !0,
                        hashChange: !1
                    })
                })
            }).call(this)
        }).call(this, t("U7R4QW"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/fake_1f5efa54.js", "/")
    }, {
        "./app": 4,
        U7R4QW: 25,
        buffer: 22
    }
    ],
    10: [function(t, e) {
        (function() {
            (function() {
                var n, r, o = {}.hasOwnProperty, i = function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e)
                        o.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
                r = t("./newsletter-form"), e.exports = n = function(t) {
                    function e() {
                        return e.__super__.constructor.apply(this, arguments)
                    }
                    return i(e, t), e.prototype.events = {
                        "click .newsletter-signup-button": "_showForm",
                        "click .newsletter-form-container .close": "_hideForm"
                    }, e.prototype.initialize = function() {
                        return _.bindAll(this), this.$form = this.$(".newsletter-form-container"), this._form = new r({
                            el: this.$form
                        }), this.listenTo(this._form, "subscribe-animation-complete", this._hideForm)
                    }, e.prototype._showForm = function() {
                        return this.$form.removeClass("hidden")
                    }, e.prototype._hideForm = function() {
                        return this.$form.addClass("hidden")
                    }, e
                }(Backbone.View)
            }).call(this)
        }).call(this, t("U7R4QW"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/footer.js", "/")
    }, {
        "./newsletter-form": 15,
        U7R4QW: 25,
        buffer: 22
    }
    ],
    11: [function(t, e) {
        (function() {
            (function() {
                var n, r, o, i, s = {}.hasOwnProperty, a = function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e)
                        s.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
                n = t("./carousel"), o = t("./reporter"), i = t("./state"), e.exports = r = function(t) {
                    function e() {
                        return e.__super__.constructor.apply(this, arguments)
                    }
                    return a(e, t), e.prototype.events = {
                        "mouseenter .filter-dropdown": "_expandDropdown",
                        "mouseleave .filter-dropdown": "_collapseDropdown",
                        "click .selected-filter": "_onSelectedFilterClick",
                        "click .all-filters a": "_onFilterClick"
                    }, e.prototype._carousel = null, e.prototype._filterRoute = null, e.prototype._unfilterRoute = null, e.prototype.initialize = function() {
                        return _.bindAll(this), this.$grid = this.$("> ul"), this.$filters = this.$(".all-filters"), this.$selectedFilterLabel = this.$(".selected-filter"), this.listenTo(i, "change:device", this._updateIsotopeStatus), this._updateIsotopeStatus(), this.$filters.removeClass("hidden").animate({
                            height: "hide"
                        }, 0)
                    }, e.prototype.remove = function() {
                        return this._destroyIsotope(), e.__super__.remove.apply(this, arguments)
                    }, e.prototype._initIsotope = function() {
                        return this.$grid.isotope(), this._showCurrentCategory()
                    }, e.prototype._updateIsotope = function() {
                        return this._hasIsotope() ? this.$grid.isotope("layout") : void 0
                    }, e.prototype._updateIsotopeStatus = function() {
                        return i.get("isMobile") || i.get("isTablet") ? this._destroyIsotope() : this._initIsotope()
                    }, e.prototype._destroyIsotope = function() {
                        return this._hasIsotope() ? this.$grid.isotope("destroy") : void 0
                    }, e.prototype._hasIsotope = function() {
                        return !!this.$grid.data("isotope")
                    }, e.prototype._showCategory = function(t) {
                        var e;
                        return this.$filters.find(".current").removeClass("current"), e = this.$filters.find('[data-slug="' + t + '"]'), e.addClass("current"), this.$selectedFilterLabel.text(e.text()), this.$grid.isotope({
                            filter: "all" !== t && '[data-categories*="' + t + '"]'
                        })
                    }, e.prototype._showCurrentCategory = function() {
                        return this._showCategory(this.$filters.find(".current").data("slug"))
                    }, e.prototype._expandDropdown = function() {
                        return Modernizr.touch ? void 0 : this.$filters.removeClass("hidden").animate({
                            height: "show"
                        }, {
                            easing: "easeOutCubic",
                            duration: 200
                        })
                    }, e.prototype._collapseDropdown = function() {
                        return Modernizr.touch ? void 0 : this.$filters.removeClass("hidden").animate({
                            height: "hide"
                        }, {
                            easing: "easeOutCubic",
                            duration: 200
                        })
                    }, e.prototype._onSelectedFilterClick = function() {
                        return this.$filters.removeClass("hidden").animate({
                            height: "toggle"
                        }, {
                            easing: "easeOutCubic",
                            duration: 200
                        })
                    }, e.prototype._onFilterClick = function(t) {
                        var e;
                        return t.preventDefault(), e = $(t.currentTarget).closest("li").data("slug"), o.reportEvent("home-page-filter click " + e), this._showCategory(e), this._onSelectedFilterClick()
                    }, e
                }(Backbone.View)
            }).call(this)
        }).call(this, t("U7R4QW"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/grid-section.js", "/")
    }, {
        "./carousel": 7,
        "./reporter": 16,
        "./state": 21,
        U7R4QW: 25,
        buffer: 22
    }
    ],
    12: [function(t, e) {
        (function() {
            (function() {
                var t, n = {}.hasOwnProperty, r = function(t, e) {
                    function r() {
                        this.constructor = t
                    }
                    for (var o in e)
                        n.call(e, o) && (t[o] = e[o]);
                    return r.prototype = e.prototype, t.prototype = new r, t.__super__ = e.prototype, t
                };
                e.exports = t = function(t) {
                    function e() {
                        return e.__super__.constructor.apply(this, arguments)
                    }
                    return r(e, t), e.prototype.events = {
                        "click h1 a": "_onLogoClick",
                        "click nav a": "_onNavLinkClick",
                        'click a[href^="/#"]': "_onRootHashLinkClick",
                        "click #label-menu-toggle": "_onToggleMenu"
                    }, e.prototype.initialize = function() {
                        return this.$menuToggle = this.$("#menu-toggle")
                    }, e.prototype._onRootHashLinkClick = function(t) {
                        var e;
                        if (!Backbone.history.fragment || "/" === Backbone.history.fragment)
                            return t.preventDefault(), e = $(t.currentTarget).attr("href").slice(2), window.location.hash !== "#" + e ? window.location.hash = e : $(window).trigger("hashchange")
                    }, e.prototype._onNavLinkClick = function() {
                        return this.$menuToggle.prop("checked", !1)
                    }, e.prototype._onToggleMenu = function(t) {
                        return t.preventDefault(), this.$menuToggle.prop("checked", !this.$menuToggle.prop("checked"))
                    }, e.prototype._onLogoClick = function() {
                        return $("body").hasClass("work") ? (window.location.hash = "/", $("html, body").animate({
                            scrollTop: 0
                        }, {
                            easing: "easeInOutCubic",
                            duration: 700
                        })) : void 0
                    }, e
                }(Backbone.View)
            }).call(this)
        }).call(this, t("U7R4QW"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/header.js", "/")
    }, {
        U7R4QW: 25,
        buffer: 22
    }
    ],
    13: [function(t, e) {
        (function() {
            (function() {
                var n, r, o = {}.hasOwnProperty, i = function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e)
                        o.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
                r = t("./reporter"), e.exports = n = function(t) {
                    function e() {
                        return e.__super__.constructor.apply(this, arguments)
                    }
                    return i(e, t), e.prototype.events = {
                        "mouseenter .filter-dropdown": "_expandDropdown",
                        "mouseleave .filter-dropdown": "_collapseDropdown",
                        "click .selected-filter": "_onSelectedFilterClick",
                        "click .load-more": "_onLoadMoreClick"
                    }, e.prototype.initialize = function() {
                        return _.bindAll(this), this.$grid = this.$("> ul"), this.$loadMoreButton = this.$(".load-more"), this.$filters = this.$(".all-filters"), this._currentPage = parseInt(this.$loadMoreButton.data("current-page"), 10) || 1, this._updateLoadMoreButton(), this.$filters.removeClass("hidden").animate({
                            height: "hide"
                        }, 0)
                    }, e.prototype._updateLoadMoreButton = function() {
                        var t;
                        return t = this.$grid.children("li").length >= this.$filters.find(".current").data("post-count"), t ? this._hideLoadMoreButton() : this._showLoadMoreButton()
                    }, e.prototype._hideLoadMoreButton = function() {
                        return this.$loadMoreButton.addClass("hidden")
                    }, e.prototype._showLoadMoreButton = function() {
                        return this.$loadMoreButton.removeClass("hidden")
                    }, e.prototype._getBaseURL = function() {
                        return document.location.href.replace(/(page.*)$/, "")
                    }, e.prototype._onLoadMoreClick = function() {
                        return r.reportEvent("load-more click " + App.getRelativeURL(window.location.href)), this.$el.hasClass("loading") ? void 0 : (this.$el.addClass("loading"), $.ajax({
                            url: this._getBaseURL() + "page/" + (this._currentPage + 1) + "/",
                            data: {
                                load_more: !0
                            },
                            success: this._onLoadMoreSuccess,
                            error: this._onLoadMoreError
                        }))
                    }, e.prototype._onLoadMoreSuccess = function(t) {
                        return this.$el.removeClass("loading"), this._currentPage++, $(t).appendTo(this.$grid), $(".news article p").dotdotdot({
                            ellipsis: "...",
                            after: ".more,span",
                            watch: !0
                        }), this._updateLoadMoreButton()
                    }, e.prototype._onLoadMoreError = function() {
                        return this.$el.removeClass("loading"), this._hideLoadMoreButton()
                    }, e.prototype._expandDropdown = function() {
                        return Modernizr.touch ? void 0 : this.$filters.removeClass("hidden").animate({
                            height: "show"
                        }, {
                            easing: "easeOutCubic",
                            duration: 200
                        })
                    }, e.prototype._collapseDropdown = function() {
                        return Modernizr.touch ? void 0 : this.$filters.removeClass("hidden").animate({
                            height: "hide"
                        }, {
                            easing: "easeOutCubic",
                            duration: 200
                        })
                    }, e.prototype._onSelectedFilterClick = function() {
                        return this.$filters.removeClass("hidden").animate({
                            height: "toggle"
                        }, {
                            easing: "easeOutCubic",
                            duration: 200
                        })
                    }, e
                }(Backbone.View)
            }).call(this)
        }).call(this, t("U7R4QW"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/list-section.js", "/")
    }, {
        "./reporter": 16,
        U7R4QW: 25,
        buffer: 22
    }
    ],
    14: [function(t, e) {
        (function() {
            (function() {
                var n, r, o = {}.hasOwnProperty, i = function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e)
                        o.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
                n = t("./list-section"), e.exports = r = function(t) {
                    function e() {
                        return e.__super__.constructor.apply(this, arguments)
                    }
                    return i(e, t), e
                }(n)
            }).call(this)
        }).call(this, t("U7R4QW"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/news-section.js", "/")
    }, {
        "./list-section": 13,
        U7R4QW: 25,
        buffer: 22
    }
    ],
    15: [function(t, e) {
        (function() {
            (function() {
                var n, r, o = {}.hasOwnProperty, i = function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e)
                        o.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
                r = t("./reporter"), e.exports = n = function(t) {
                    function e() {
                        return e.__super__.constructor.apply(this, arguments)
                    }
                    return i(e, t), e.prototype.events = function() {
                        return {
                            submit: "_onSubmit",
                            "submit form": "_onSubmit"
                        }
                    }, e.prototype.initialize = function() {
                        return _.bindAll(this), this.$form = this.$el.is("form") ? this.$el : this.$el.find("form"), this.$confirmation = this.$form.next(".confirmation"), this.$confirmation.hide()
                    }, e.prototype._onSubmit = function(t) {
                        return t.preventDefault(), r.reportEvent("newsletter-form submit"), this.$el.addClass("loading"), $.ajax({
                            url: this.$form.attr("action"),
                            type: this.$form.attr("method"),
                            data: this.$form.serialize(),
                            complete: function(t) {
                                return function() {
                                    return t.$el.removeClass("loading")
                                }
                            }(this),
                            error: this._onError,
                            success: this._onSuccess
                        })
                    }, e.prototype._onError = function() {
                        var t;
                        return t = this.$form === this.$el ? this.$form.children("div") : this.$form, t.addClass("animated shake").one("animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd", function() {
                            return function() {
                                return t.removeClass("animated shake")
                            }
                        }(this))
                    }, e.prototype._onSuccess = function() {
                        var t;
                        return this.trigger("subscribed"), this.$form === this.$el && this.$form.parent().height(this.$form.parent().height()), this.$form.fadeOut(300), this.$el.find(".close").fadeOut(300), setTimeout(function(t) {
                            return function() {
                                return t.$confirmation.fadeIn(300)
                            }
                        }(this), 300), t = 6e3, setTimeout(function(t) {
                            return function() {
                                return t.$el === t.$form ? (t.$confirmation.fadeOut(300), setTimeout(function() {
                                    return t.$form.fadeIn(300).parent().height("auto")
                                }, 300)) : t.$el.addClass("hidden"), t.trigger("subscribe-animation-complete")
                            }
                        }(this), t), setTimeout(function(t) {
                            return function() {
                                return t.$confirmation.fadeOut(0), t.$form.fadeIn(0), t.$el.find(".close").fadeIn(0)
                            }
                        }(this), t + 500)
                    }, e
                }(Backbone.View)
            }).call(this)
        }).call(this, t("U7R4QW"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/newsletter-form.js", "/")
    }, {
        "./reporter": 16,
        U7R4QW: 25,
        buffer: 22
    }
    ],
    16: [function(t, e) {
        (function() {
            (function() {
                var t;
                e.exports = t = {
                    reportPageView: function() {
                        return "function" == typeof ga ? ga("send", "pageview", window.location.href) : void 0
                    },
                    reportEvent: function(t) {
                        var e;
                        return null == t && (t = ""), e = t.split(" "), "function" == typeof ga ? ga("send", "event", e[0], e[1], e[2]) : void 0
                    }
                }
            }).call(this)
        }).call(this, t("U7R4QW"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/reporter.js", "/")
    }, {
        U7R4QW: 25,
        buffer: 22
    }
    ],
    17: [function(t, e) {
        (function() {
            (function() {
                var t, n = {}.hasOwnProperty, r = function(t, e) {
                    function r() {
                        this.constructor = t
                    }
                    for (var o in e)
                        n.call(e, o) && (t[o] = e[o]);
                    return r.prototype = e.prototype, t.prototype = new r, t.__super__ = e.prototype, t
                };
                e.exports = t = function(t) {
                    function e() {
                        return e.__super__.constructor.apply(this, arguments)
                    }
                    return r(e, t), e.prototype.routes = {
                        "*path": "_defaultRoute"
                    }, e.prototype.resetRoutes = function() {
                        return Backbone.history.handlers = [], this._bindRoutes()
                    }, e.prototype.removeRoute = function() {
                        return this.resetRoutes()
                    }, e.prototype.navigate = function() {
                        return 0 === arguments[0].indexOf("#") && (arguments[0] = "#" + arguments[0] + "/"), e.__super__.navigate.apply(this, arguments)
                    }, e.prototype._defaultRoute = function(t) {
                        return this.trigger("unhandled_route", t)
                    }, e
                }(Backbone.Router)
            }).call(this)
        }).call(this, t("U7R4QW"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/router.js", "/")
    }, {
        U7R4QW: 25,
        buffer: 22
    }
    ],
    18: [function(t, e) {
        (function() {
            (function() {
                var n, r, o, i, s, a = {}.hasOwnProperty, u = function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e)
                        a.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
                n = t("./carousel"), r = t("./newsletter-form"), o = t("./reporter"), s = t("./state"), e.exports = i = function(t) {
                    function e() {
                        return e.__super__.constructor.apply(this, arguments)
                    }
                    return u(e, t), e.prototype.events = {
                        "click nav a": "_onSubsectionClick",
                        "click .js-toggle-subsection": "_onSubsectionClick",
                        "click .next.subsection": "_onNextSubsectionClick",
                        "click .prev.subsection": "_onPrevSubsectionClick"
                    }, e.prototype._route = null, e.prototype._$currentSection = null, e.prototype.initialize = function() {
                        return _.bindAll(this), this._listenToSubroute(), this._initSubsectionContentSizes(), 0 === this.$(".current-menu-item").length && this.$("nav li").first().addClass("current-menu-item"), this._$currentSection = this.$("section.selected"), new r({
                            el: this.$("form.newsletter")
                        })
                    }, e.prototype.remove = function() {
                        return $(window).off("resize", this._updateSubsectionContentHeights), App.getRouter().removeRoute(this._route), e.__super__.remove.apply(this, arguments)
                    }, e.prototype._initSubsectionContentSizes = function() {
                        return this._updateSubsectionContentHeights = _.debounce(this._updateSubsectionContentHeights, 200), $(window).on("resize", this._updateSubsectionContentHeights), this._updateSubsectionContentHeights(), _.delay(this._updateSubsectionContentHeights, 1e3), _.delay(this._updateSubsectionContentHeights, 2e3), _.delay(this._updateSubsectionContentHeights, 3e3)
                    }, e.prototype._listenToSubroute = function() {
                        var t, e;
                        return e = this.$("section").first().data("href"), t = App.getRelativeURL(e).replace(/[^\/]+\/?$/, ""), this._route = t + ":subsection/", App.getRouter().route(this._route, "subsection", this._setCurrentSubsection)
                    }, e.prototype._setCurrentSubsection = function() {
                        var t;
                        return t = document.location.href.slice(0, - (null != document.location.hash.length)), o.reportEvent("subsection open " + t), this._$currentSection = this.$('section[data-href^="' + t + '"]'), this._$currentSection.length || (this._$currentSection = this.$("section").eq(0)), this.$(".current-menu-item").removeClass("current-menu-item"), this.$('nav a[href^="' + t + '"]').parent().addClass("current-menu-item"), s.get("isMobile") || s.get("isTablet") ? (s.get("isMobile") && _.delay(this._scrollTo, this.$("section:not(.closed)").length && 300, this._$currentSection), this.$("section.selected").removeClass("selected"), this.$("section").addClass("closed"), this._$currentSection.addClass("selected").removeClass("closed")) : (this.$("section.selected").addClass("in-transition"), setTimeout(function(t) {
                            return function() {
                                return t.$("section.selected").removeClass("selected in-transition"), t._$currentSection.addClass("selected"), t._ensure3ColumnsPerRow()
                            }
                        }(this), 300))
                    }, e.prototype._scrollTo = function(t) {
                        return $("html, body").animate({
                            scrollTop: t.offset().top,
                            easing: "easeInOutCubic",
                            duration: 500
                        })
                    }, e.prototype._updateSubsectionContentHeights = function() {
                        var t, e, n, r, o, i;
                        for (e = 30, n = .5 * ($(window).width() - $(".sections").outerWidth()), this.$(".arrow.subsection").width(n), i = this.$("section .content"), r = 0, o = i.length; o > r; r++)
                            t = i[r], t.style.height = "", t.style.height = $(t).children("div").actual("outerHeight") + e + "px";
                        return this._ensure3ColumnsPerRow()
                    }, e.prototype._ensure3ColumnsPerRow = function() {
                        var t, e, n, r, o, i, s, a, u, l, c, f, h, p;
                        for (f = this.$("section .content"), p = [], s = 0, l = f.length; l > s; s++)
                            if (r = f[s], t = t = $(r).find(".columns-many > div"), t.length) {
                                if (n = 0, t.length%3 && (n = 3 - t.length%3), n && n > 0)
                                    for (o = a = 0, h = n - 1; h >= 0 ? h >= a : a >= h; o = h >= 0?++a : --a)
                                        t.parent().append($("<div />"));
                                        for ($(r)
                                            .find('.columns-many > div[style*="width:"]').css("width", ""), i = 0, t = $(r).find(".columns-many > div:nth-child(3n)"), u = 0, c = t.length;
                                            c > u;
                                            u++)e = t[u], i = Math.max(i, $(e).width());
                                            p.push(t.length ? t.css("width", i) : void 0)
                            } else 
                                p.push(void 0);
                        return p
                    }, e.prototype._navigateToSubsection = function(t) {
                        var e;
                        return e = App.getRelativeURL(t), App.getRouter().navigate(e, {
                            trigger: !0
                        })
                    }, e.prototype._onSubsectionClick = function(t) {
                        var e;
                        return t.preventDefault(), e = $(t.currentTarget).closest("section"), e.is(".selected") ? (e.toggleClass("closed"), void $("html, body").animate({
                            scrollTop: 0,
                            easing: "easeInOutCubic",
                            duration: 300
                        })) : this._navigateToSubsection($(t.currentTarget).attr("href"))
                    }, e.prototype._onNextSubsectionClick = function() {
                        var t;
                        return t = this._$currentSection.next("section"), t.length || (t = this._$currentSection.siblings("section").first()), this._navigateToSubsection(t.data("href"))
                    }, e.prototype._onPrevSubsectionClick = function() {
                        var t;
                        return t = this._$currentSection.prev("section"), t.length || (t = this._$currentSection.siblings("section").last()), this._navigateToSubsection(t.data("href"))
                    }, e
                }(Backbone.View)
            }).call(this)
        }).call(this, t("U7R4QW"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/section-with-subsections.js", "/")
    }, {
        "./carousel": 7,
        "./newsletter-form": 15,
        "./reporter": 16,
        "./state": 21,
        U7R4QW: 25,
        buffer: 22
    }
    ],
    19: [function(t, e) {
        (function() {
            (function() {
                var n, r, o = {}.hasOwnProperty, i = function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e)
                        o.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
                n = t("./carousel"), e.exports = r = function(t) {
                    function e() {
                        return e.__super__.constructor.apply(this, arguments)
                    }
                    return i(e, t), e.prototype._carousel = null, e.prototype.initialize = function() {
                        return _.bindAll(this), this.initCarousel(), "undefined" != typeof addthis && null !== addthis ? addthis.toolbox(".share") : void 0
                    }, e.prototype.remove = function() {
                        var t;
                        return null != (t = this._carousel) && t.remove(), e.__super__.remove.apply(this, arguments)
                    }, e.prototype.initCarousel = function() {
                        var t;
                        return t = this.$(".slide img").height(), t > 10 ? this._carousel = new n({
                            el: this.$(".owl-carousel"),
                            $count: this.$(".count"),
                            hasCursorArrows: !0,
                            owlOptions: {
                                dots: !0
                            }
                        }) : setTimeout(this.initCarousel, 500)
                    }, e
                }(Backbone.View)
            }).call(this)
        }).call(this, t("U7R4QW"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/single-article-section.js", "/")
    }, {
        "./carousel": 7,
        U7R4QW: 25,
        buffer: 22
    }
    ],
    20: [function(t, e) {
        (function() {
            (function() {
                var n, r, o, i = {}.hasOwnProperty, s = function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var r in e)
                        i.call(e, r) && (t[r] = e[r]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
                n = t("./carousel"), o = t("./state"), e.exports = r = function(t) {
                    function e() {
                        return e.__super__.constructor.apply(this, arguments)
                    }
                    return s(e, t), e.prototype.events = {
                        "click .project-info-button.show": "_showProjectInfo",
                        "click .project-info-button.hide": "_hideProjectInfo"
                    }, e.prototype._galleryCarousel = null, e.prototype.initialize = function() {
                        return _.bindAll(this), this.$showProjectInfoButton = this.$(".project-info-button.show"), this.$hideProjectInfoButton = this.$(".project-info-button.hide"), this.$projectInfo = this.$(".project-info"), this.$gallery = this.$(".gallery"), this.$galleryCarousel = this.$gallery.find(".carousel"), this.$body = $("body"), this.$projectInfo.removeClass("hidden").animate({
                            height: "hide"
                        }, 0), $(window).on("hashchange", this._onHashChange).trigger("hashchange"), this.listenTo(o, "change:device", this._onDeviceChange), this._onDeviceChange(), "undefined" != typeof addthis && null !== addthis ? addthis.toolbox(".share") : void 0
                    }, e.prototype.remove = function() {
                        var t;
                        return $(window).off("hashchange", this._onHashChange), null != (t = this._galleryCarousel) && t.remove(), e.__super__.remove.apply(this, arguments)
                    }, e.prototype._showProjectInfo = function() {
                        return this.$showProjectInfoButton.removeClass("show"), this.$showProjectInfoButton.addClass("hide"), this.$projectInfo.removeClass("hidden").addClass("open").stop().delay(300).animate({
                            height: "show"
                        }, {
                            easing: "easeInOutCubic",
                            duration: 700
                        })
                    }, e.prototype._hideProjectInfo = function() {
                        return this.$showProjectInfoButton.removeClass("hide"), this.$showProjectInfoButton.addClass("show"), this.$projectInfo.removeClass("open").stop().delay(300).animate({
                            height: "hide"
                        }, {
                            easing: "easeInOutCubic",
                            duration: 700
                        })
                    }, e.prototype._showGallery = function() {
                        return this.$gallery.removeClass("hidden").stop().hide().fadeIn(400, function(t) {
                            return function() {
                                return t.$gallery.css("display", ""), t.$body.addClass("gallery-open"), t.$gallery.parent().addClass("gallery-open"), t._initGalleryCarousel(), t.$galleryCarousel.hide().fadeIn(400, function() {
                                    return t.$galleryCarousel.css("display", "")
                                })
                            }
                        }(this))
                    }, e.prototype._hideGallery = function() {
                        return this.$gallery.stop().show().fadeOut(400, function(t) {
                            return function() {
                                return t.$body.removeClass("gallery-open"), t.$gallery.css("display", "").addClass("hidden").parent().removeClass("gallery-open"), t._removeGalleryCarousel()
                            }
                        }(this))
                    }, e.prototype._initGalleryCarousel = function() {
                        return this._galleryCarousel ? void 0 : this._galleryCarousel = new n({
                            el: this.$galleryCarousel,
                            $nextButton: this.$gallery.find(".next"),
                            $prevButton: this.$gallery.find(".prev"),
                            $count: this.$gallery.find(".count"),
                            hasCursorArrows: !1
                        })
                    }, e.prototype._removeGalleryCarousel = function() {
                        return this._galleryCarousel && this._galleryCarousel.remove(), this._galleryCarousel = null
                    }, e.prototype._isGalleryOpen = function() {
                        return !this.$gallery.hasClass("hidden")
                    }, e.prototype._onHashChange = function() {
                        var t;
                        return t = document.location.hash.slice(1), 0 === t.indexOf("gallery") ? this._showGallery() : this._hideGallery()
                    }, e.prototype._onDeviceChange = function() {
                        return this._isGalleryOpen() && o.get("isMobile") ? document.location.hash = "#" : void 0
                    }, e
                }(Backbone.View)
            }).call(this)
        }).call(this, t("U7R4QW"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/single-project-section.js", "/")
    }, {
        "./carousel": 7,
        "./state": 21,
        U7R4QW: 25,
        buffer: 22
    }
    ],
    21: [function(t, e) {
        (function() {
            (function() {
                var t, n, r = {}.hasOwnProperty, o = function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var o in e)
                        r.call(e, o) && (t[o] = e[o]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
                t = function(t) {
                    function e() {
                        return e.__super__.constructor.apply(this, arguments)
                    }
                    return o(e, t), e.prototype._devices = {
                        zero: 0,
                        phone: 480,
                        iphone5: 568,
                        "small-tablet": 600,
                        "tablet-portrait": 768,
                        "tablet-landscape-desktop": 1024,
                        "large-desktop": 1245,
                        widescreen: 99999
                    }, e.prototype.initialize = function() {
                        return _.bindAll(this), this._initMediaQueries()
                    }, e.prototype.getAllDeviceNames = function() {
                        return _.without(_.keys(this._devices), "zero")
                    }, e.prototype._initMediaQueries = function() {
                        var t, e, n, r, o, i, s, a;
                        e=!0, s = this._devices, a = [];
                        for (t in s)
                            i = s[t], e || (o = "screen and (min-width: " + r + "px) and (max-width: " + i + "px)", enquire.register(o, {
                                match: _.partial(this._onDeviceMatch, t)
                            })), n = t, r = i, a.push(e=!1);
                        return a
                    }, e.prototype._onDeviceMatch = function(t) {
                        var e, n, r, o;
                        return o = this._devices[t], n = o <= this._devices.iphone5, r = o > this._devices.iphone5 && o <= this._devices["tablet-portrait"], e = o > this._devices["tablet-portrait"], this.set({
                            device: t,
                            breakpointWidth: o,
                            isMobile: n,
                            isTablet: r,
                            isDesktop: e
                        })
                    }, e
                }(Backbone.Model), n = new t, e.exports = n
            }).call(this)
        }).call(this, t("U7R4QW"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/state.js", "/")
    }, {
        U7R4QW: 25,
        buffer: 22
    }
    ],
    22: [function(t, e, n) {
        (function(e, r, o) {
            function o(t, e, n) {
                if (!(this instanceof o))
                    return new o(t, e, n);
                var r = typeof t;
                if ("base64" === e && "string" === r)
                    for (t = A(t); t.length%4 !== 0;)
                        t += "=";
                var i;
                if ("number" === r)
                    i = S(t);
                else if ("string" === r)
                    i = o.byteLength(t, e);
                else {
                    if ("object" !== r)
                        throw new Error("First argument needs to be a number, array or string.");
                    i = S(t.length)
                }
                var s;
                o._useTypedArrays ? s = o._augment(new Uint8Array(i)) : (s = this, s.length = i, s._isBuffer=!0);
                var a;
                if (o._useTypedArrays && "number" == typeof t.byteLength)
                    s._set(t);
                else if (M(t))
                    for (a = 0; i > a; a++)
                        s[a] = o.isBuffer(t) ? t.readUInt8(a) : t[a];
                else if ("string" === r)
                    s.write(t, 0, e);
                else if ("number" === r&&!o._useTypedArrays&&!n)
                    for (a = 0; i > a; a++)
                        s[a] = 0;
                return s
            }
            function i(t, e, n, r) {
                n = Number(n) || 0;
                var i = t.length - n;
                r ? (r = Number(r), r > i && (r = i)) : r = i;
                var s = e.length;
                N(s%2 === 0, "Invalid hex string"), r > s / 2 && (r = s / 2);
                for (var a = 0; r > a; a++) {
                    var u = parseInt(e.substr(2 * a, 2), 16);
                    N(!isNaN(u), "Invalid hex string"), t[n + a] = u
                }
                return o._charsWritten = 2 * a, a
            }
            function s(t, e, n, r) {
                var i = o._charsWritten = D(T(e), t, n, r);
                return i
            }
            function a(t, e, n, r) {
                var i = o._charsWritten = D(O(e), t, n, r);
                return i
            }
            function u(t, e, n, r) {
                return a(t, e, n, r)
            }
            function l(t, e, n, r) {
                var i = o._charsWritten = D(W(e), t, n, r);
                return i
            }
            function c(t, e, n, r) {
                var i = o._charsWritten = D(j(e), t, n, r);
                return i
            }
            function f(t, e, n) {
                return V.fromByteArray(0 === e && n === t.length ? t : t.slice(e, n))
            }
            function h(t, e, n) {
                var r = "", o = "";
                n = Math.min(t.length, n);
                for (var i = e; n > i; i++)
                    t[i] <= 127 ? (r += Q(o) + String.fromCharCode(t[i]), o = "") : o += "%" + t[i].toString(16);
                return r + Q(o)
            }
            function p(t, e, n) {
                var r = "";
                n = Math.min(t.length, n);
                for (var o = e; n > o; o++)
                    r += String.fromCharCode(t[o]);
                return r
            }
            function d(t, e, n) {
                return p(t, e, n)
            }
            function g(t, e, n) {
                var r = t.length;
                (!e || 0 > e) && (e = 0), (!n || 0 > n || n > r) && (n = r);
                for (var o = "", i = e; n > i; i++)
                    o += L(t[i]);
                return o
            }
            function y(t, e, n) {
                for (var r = t.slice(e, n), o = "", i = 0; i < r.length; i += 2)
                    o += String.fromCharCode(r[i] + 256 * r[i + 1]);
                return o
            }
            function _(t, e, n, r) {
                r || (N("boolean" == typeof n, "missing or invalid endian"), N(void 0 !== e && null !== e, "missing offset"), N(e + 1 < t.length, "Trying to read beyond buffer length"));
                var o = t.length;
                if (!(e >= o)) {
                    var i;
                    return n ? (i = t[e], o > e + 1 && (i|=t[e + 1]<<8)) : (i = t[e]<<8, o > e + 1 && (i|=t[e + 1])), i
                }
            }
            function m(t, e, n, r) {
                r || (N("boolean" == typeof n, "missing or invalid endian"), N(void 0 !== e && null !== e, "missing offset"), N(e + 3 < t.length, "Trying to read beyond buffer length"));
                var o = t.length;
                if (!(e >= o)) {
                    var i;
                    return n ? (o > e + 2 && (i = t[e + 2]<<16), o > e + 1 && (i|=t[e + 1]<<8), i|=t[e], o > e + 3 && (i += t[e + 3]<<24>>>0)) : (o > e + 1 && (i = t[e + 1]<<16), o > e + 2 && (i|=t[e + 2]<<8), o > e + 3 && (i|=t[e + 3]), i += t[e]<<24>>>0), i
                }
            }
            function w(t, e, n, r) {
                r || (N("boolean" == typeof n, "missing or invalid endian"), N(void 0 !== e && null !== e, "missing offset"), N(e + 1 < t.length, "Trying to read beyond buffer length"));
                var o = t.length;
                if (!(e >= o)) {
                    var i = _(t, e, n, !0), s = 32768 & i;
                    return s?-1 * (65535 - i + 1) : i
                }
            }
            function v(t, e, n, r) {
                r || (N("boolean" == typeof n, "missing or invalid endian"), N(void 0 !== e && null !== e, "missing offset"), N(e + 3 < t.length, "Trying to read beyond buffer length"));
                var o = t.length;
                if (!(e >= o)) {
                    var i = m(t, e, n, !0), s = 2147483648 & i;
                    return s?-1 * (4294967295 - i + 1) : i
                }
            }
            function b(t, e, n, r) {
                return r || (N("boolean" == typeof n, "missing or invalid endian"), N(e + 3 < t.length, "Trying to read beyond buffer length")), H.read(t, e, n, 23, 4)
            }
            function $(t, e, n, r) {
                return r || (N("boolean" == typeof n, "missing or invalid endian"), N(e + 7 < t.length, "Trying to read beyond buffer length")), H.read(t, e, n, 52, 8)
            }
            function C(t, e, n, r, o) {
                o || (N(void 0 !== e && null !== e, "missing value"), N("boolean" == typeof r, "missing or invalid endian"), N(void 0 !== n && null !== n, "missing offset"), N(n + 1 < t.length, "trying to write beyond buffer length"), z(e, 65535));
                var i = t.length;
                if (!(n >= i))
                    for (var s = 0, a = Math.min(i - n, 2); a > s; s++)
                        t[n + s] = (e & 255<<8 * (r ? s : 1 - s))>>>8 * (r ? s : 1 - s)
            }
            function k(t, e, n, r, o) {
                o || (N(void 0 !== e && null !== e, "missing value"), N("boolean" == typeof r, "missing or invalid endian"), N(void 0 !== n && null !== n, "missing offset"), N(n + 3 < t.length, "trying to write beyond buffer length"), z(e, 4294967295));
                var i = t.length;
                if (!(n >= i))
                    for (var s = 0, a = Math.min(i - n, 4); a > s; s++)
                        t[n + s] = e>>>8 * (r ? s : 3 - s) & 255
            }
            function B(t, e, n, r, o) {
                o || (N(void 0 !== e && null !== e, "missing value"), N("boolean" == typeof r, "missing or invalid endian"), N(void 0 !== n && null !== n, "missing offset"), N(n + 1 < t.length, "Trying to write beyond buffer length"), P(e, 32767, - 32768));
                var i = t.length;
                n >= i || (e >= 0 ? C(t, e, n, r, o) : C(t, 65535 + e + 1, n, r, o))
            }
            function I(t, e, n, r, o) {
                o || (N(void 0 !== e && null !== e, "missing value"), N("boolean" == typeof r, "missing or invalid endian"), N(void 0 !== n && null !== n, "missing offset"), N(n + 3 < t.length, "Trying to write beyond buffer length"), P(e, 2147483647, - 2147483648));
                var i = t.length;
                n >= i || (e >= 0 ? k(t, e, n, r, o) : k(t, 4294967295 + e + 1, n, r, o))
            }
            function U(t, e, n, r, o) {
                o || (N(void 0 !== e && null !== e, "missing value"), N("boolean" == typeof r, "missing or invalid endian"), N(void 0 !== n && null !== n, "missing offset"), N(n + 3 < t.length, "Trying to write beyond buffer length"), F(e, 3.4028234663852886e38, - 3.4028234663852886e38));
                var i = t.length;
                n >= i || H.write(t, e, n, r, 23, 4)
            }
            function E(t, e, n, r, o) {
                o || (N(void 0 !== e && null !== e, "missing value"), N("boolean" == typeof r, "missing or invalid endian"), N(void 0 !== n && null !== n, "missing offset"), N(n + 7 < t.length, "Trying to write beyond buffer length"), F(e, 1.7976931348623157e308, - 1.7976931348623157e308));
                var i = t.length;
                n >= i || H.write(t, e, n, r, 52, 8)
            }
            function A(t) {
                return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
            }
            function x(t, e, n) {
                return "number" != typeof t ? n : (t=~~t, t >= e ? e : t >= 0 ? t : (t += e, t >= 0 ? t : 0))
            }
            function S(t) {
                return t=~~Math.ceil( + t), 0 > t ? 0 : t
            }
            function R(t) {
                return (Array.isArray || function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                })(t)
            }
            function M(t) {
                return R(t) || o.isBuffer(t) || t && "object" == typeof t && "number" == typeof t.length
            }
            function L(t) {
                return 16 > t ? "0" + t.toString(16) : t.toString(16)
            }
            function T(t) {
                for (var e = [], n = 0; n < t.length; n++) {
                    var r = t.charCodeAt(n);
                    if (127 >= r)
                        e.push(t.charCodeAt(n));
                    else {
                        var o = n;
                        r >= 55296 && 57343 >= r && n++;
                        for (var i = encodeURIComponent(t.slice(o, n + 1)).substr(1).split("%"), s = 0; s < i.length; s++)
                            e.push(parseInt(i[s], 16))
                        }
                }
                return e
            }
            function O(t) {
                for (var e = [], n = 0; n < t.length; n++)
                    e.push(255 & t.charCodeAt(n));
                return e
            }
            function j(t) {
                for (var e, n, r, o = [], i = 0; i < t.length; i++)
                    e = t.charCodeAt(i), n = e>>8, r = e%256, o.push(r), o.push(n);
                return o
            }
            function W(t) {
                return V.toByteArray(t)
            }
            function D(t, e, n, r) {
                for (var o = 0; r > o&&!(o + n >= e.length || o >= t.length); o++)
                    e[o + n] = t[o];
                return o
            }
            function Q(t) {
                try {
                    return decodeURIComponent(t)
                } catch (e) {
                    return String.fromCharCode(65533)
                }
            }
            function z(t, e) {
                N("number" == typeof t, "cannot write a non-number as a number"), N(t >= 0, "specified a negative value for writing an unsigned value"), N(e >= t, "value is larger than maximum value for type"), N(Math.floor(t) === t, "value has a fractional component")
            }
            function P(t, e, n) {
                N("number" == typeof t, "cannot write a non-number as a number"), N(e >= t, "value larger than maximum allowed value"), N(t >= n, "value smaller than minimum allowed value"), N(Math.floor(t) === t, "value has a fractional component")
            }
            function F(t, e, n) {
                N("number" == typeof t, "cannot write a non-number as a number"), N(e >= t, "value larger than maximum allowed value"), N(t >= n, "value smaller than minimum allowed value")
            }
            function N(t, e) {
                if (!t)
                    throw new Error(e || "Failed assertion")
            }
            var V = t("base64-js"), H = t("ieee754");
            n.Buffer = o, n.SlowBuffer = o, n.INSPECT_MAX_BYTES = 50, o.poolSize = 8192, o._useTypedArrays = function() {
                try {
                    var t = new ArrayBuffer(0), e = new Uint8Array(t);
                    return e.foo = function() {
                        return 42
                    }, 42 === e.foo() && "function" == typeof e.subarray
                } catch (n) {
                    return !1
                }
            }(), o.isEncoding = function(t) {
                switch (String(t).toLowerCase()) {
                case"hex":
                case"utf8":
                case"utf-8":
                case"ascii":
                case"binary":
                case"base64":
                case"raw":
                case"ucs2":
                case"ucs-2":
                case"utf16le":
                case"utf-16le":
                    return !0;
                default:
                    return !1
                }
            }, o.isBuffer = function(t) {
                return !(null === t || void 0 === t ||!t._isBuffer)
            }, o.byteLength = function(t, e) {
                var n;
                switch (t += "", e || "utf8") {
                case"hex":
                    n = t.length / 2;
                    break;
                case"utf8":
                case"utf-8":
                    n = T(t).length;
                    break;
                case"ascii":
                case"binary":
                case"raw":
                    n = t.length;
                    break;
                case"base64":
                    n = W(t).length;
                    break;
                case"ucs2":
                case"ucs-2":
                case"utf16le":
                case"utf-16le":
                    n = 2 * t.length;
                    break;
                default:
                    throw new Error("Unknown encoding")
                }
                return n
            }, o.concat = function(t, e) {
                if (N(R(t), "Usage: Buffer.concat(list, [totalLength])\nlist should be an Array."), 0 === t.length)
                    return new o(0);
                if (1 === t.length)
                    return t[0];
                var n;
                if ("number" != typeof e)
                    for (e = 0, n = 0; n < t.length; n++)
                        e += t[n].length;
                var r = new o(e), i = 0;
                for (n = 0; n < t.length; n++) {
                    var s = t[n];
                    s.copy(r, i), i += s.length
                }
                return r
            }, o.prototype.write = function(t, e, n, r) {
                if (isFinite(e))
                    isFinite(n) || (r = n, n = void 0);
                else {
                    var o = r;
                    r = e, e = n, n = o
                }
                e = Number(e) || 0;
                var f = this.length - e;
                n ? (n = Number(n), n > f && (n = f)) : n = f, r = String(r || "utf8").toLowerCase();
                var h;
                switch (r) {
                case"hex":
                    h = i(this, t, e, n);
                    break;
                case"utf8":
                case"utf-8":
                    h = s(this, t, e, n);
                    break;
                case"ascii":
                    h = a(this, t, e, n);
                    break;
                case"binary":
                    h = u(this, t, e, n);
                    break;
                case"base64":
                    h = l(this, t, e, n);
                    break;
                case"ucs2":
                case"ucs-2":
                case"utf16le":
                case"utf-16le":
                    h = c(this, t, e, n);
                    break;
                default:
                    throw new Error("Unknown encoding")
                }
                return h
            }, o.prototype.toString = function(t, e, n) {
                var r = this;
                if (t = String(t || "utf8").toLowerCase(), e = Number(e) || 0, n = void 0 !== n ? Number(n) 
                    : n = r.length, n === e)return "";
                var o;
                switch (t) {
                case"hex":
                    o = g(r, e, n);
                    break;
                case"utf8":
                case"utf-8":
                    o = h(r, e, n);
                    break;
                case"ascii":
                    o = p(r, e, n);
                    break;
                case"binary":
                    o = d(r, e, n);
                    break;
                case"base64":
                    o = f(r, e, n);
                    break;
                case"ucs2":
                case"ucs-2":
                case"utf16le":
                case"utf-16le":
                    o = y(r, e, n);
                    break;
                default:
                    throw new Error("Unknown encoding")
                }
                return o
            }, o.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            }, o.prototype.copy = function(t, e, n, r) {
                var i = this;
                if (n || (n = 0), r || 0 === r || (r = this.length), e || (e = 0), r !== n && 0 !== t.length && 0 !== i.length) {
                    N(r >= n, "sourceEnd < sourceStart"), N(e >= 0 && e < t.length, "targetStart out of bounds"), N(n >= 0 && n < i.length, "sourceStart out of bounds"), N(r >= 0 && r <= i.length, "sourceEnd out of bounds"), r > this.length && (r = this.length), t.length - e < r - n && (r = t.length - e + n);
                    var s = r - n;
                    if (100 > s ||!o._useTypedArrays)
                        for (var a = 0; s > a; a++)
                            t[a + e] = this[a + n];
                    else 
                        t._set(this.subarray(n, n + s), e)
                }
            }, o.prototype.slice = function(t, e) {
                var n = this.length;
                if (t = x(t, n, 0), e = x(e, n, n), o._useTypedArrays)
                    return o._augment(this.subarray(t, e));
                for (var r = e - t, i = new o(r, void 0, !0), s = 0; r > s; s++)
                    i[s] = this[s + t];
                return i
            }, o.prototype.get = function(t) {
                return console.log(".get() is deprecated. Access using array indexes instead."), this.readUInt8(t)
            }, o.prototype.set = function(t, e) {
                return console.log(".set() is deprecated. Access using array indexes instead."), this.writeUInt8(t, e)
            }, o.prototype.readUInt8 = function(t, e) {
                return e || (N(void 0 !== t && null !== t, "missing offset"), N(t < this.length, "Trying to read beyond buffer length")), t >= this.length ? void 0 : this[t]
            }, o.prototype.readUInt16LE = function(t, e) {
                return _(this, t, !0, e)
            }, o.prototype.readUInt16BE = function(t, e) {
                return _(this, t, !1, e)
            }, o.prototype.readUInt32LE = function(t, e) {
                return m(this, t, !0, e)
            }, o.prototype.readUInt32BE = function(t, e) {
                return m(this, t, !1, e)
            }, o.prototype.readInt8 = function(t, e) {
                if (e || (N(void 0 !== t && null !== t, "missing offset"), N(t < this.length, "Trying to read beyond buffer length")), !(t >= this.length)) {
                    var n = 128 & this[t];
                    return n?-1 * (255 - this[t] + 1) : this[t]
                }
            }, o.prototype.readInt16LE = function(t, e) {
                return w(this, t, !0, e)
            }, o.prototype.readInt16BE = function(t, e) {
                return w(this, t, !1, e)
            }, o.prototype.readInt32LE = function(t, e) {
                return v(this, t, !0, e)
            }, o.prototype.readInt32BE = function(t, e) {
                return v(this, t, !1, e)
            }, o.prototype.readFloatLE = function(t, e) {
                return b(this, t, !0, e)
            }, o.prototype.readFloatBE = function(t, e) {
                return b(this, t, !1, e)
            }, o.prototype.readDoubleLE = function(t, e) {
                return $(this, t, !0, e)
            }, o.prototype.readDoubleBE = function(t, e) {
                return $(this, t, !1, e)
            }, o.prototype.writeUInt8 = function(t, e, n) {
                n || (N(void 0 !== t && null !== t, "missing value"), N(void 0 !== e && null !== e, "missing offset"), N(e < this.length, "trying to write beyond buffer length"), z(t, 255)), e >= this.length || (this[e] = t)
            }, o.prototype.writeUInt16LE = function(t, e, n) {
                C(this, t, e, !0, n)
            }, o.prototype.writeUInt16BE = function(t, e, n) {
                C(this, t, e, !1, n)
            }, o.prototype.writeUInt32LE = function(t, e, n) {
                k(this, t, e, !0, n)
            }, o.prototype.writeUInt32BE = function(t, e, n) {
                k(this, t, e, !1, n)
            }, o.prototype.writeInt8 = function(t, e, n) {
                n || (N(void 0 !== t && null !== t, "missing value"), N(void 0 !== e && null !== e, "missing offset"), N(e < this.length, "Trying to write beyond buffer length"), P(t, 127, - 128)), e >= this.length || (t >= 0 ? this.writeUInt8(t, e, n) : this.writeUInt8(255 + t + 1, e, n))
            }, o.prototype.writeInt16LE = function(t, e, n) {
                B(this, t, e, !0, n)
            }, o.prototype.writeInt16BE = function(t, e, n) {
                B(this, t, e, !1, n)
            }, o.prototype.writeInt32LE = function(t, e, n) {
                I(this, t, e, !0, n)
            }, o.prototype.writeInt32BE = function(t, e, n) {
                I(this, t, e, !1, n)
            }, o.prototype.writeFloatLE = function(t, e, n) {
                U(this, t, e, !0, n)
            }, o.prototype.writeFloatBE = function(t, e, n) {
                U(this, t, e, !1, n)
            }, o.prototype.writeDoubleLE = function(t, e, n) {
                E(this, t, e, !0, n)
            }, o.prototype.writeDoubleBE = function(t, e, n) {
                E(this, t, e, !1, n)
            }, o.prototype.fill = function(t, e, n) {
                if (t || (t = 0), e || (e = 0), n || (n = this.length), "string" == typeof t && (t = t.charCodeAt(0)), N("number" == typeof t&&!isNaN(t), "value is not a number"), N(n >= e, "end < start"), n !== e && 0 !== this.length) {
                    N(e >= 0 && e < this.length, "start out of bounds"), N(n >= 0 && n <= this.length, "end out of bounds");
                    for (var r = e; n > r; r++)
                        this[r] = t
                }
            }, o.prototype.inspect = function() {
                for (var t = [], e = this.length, r = 0; e > r; r++)
                    if (t[r] = L(this[r]), r === n.INSPECT_MAX_BYTES) {
                        t[r + 1] = "...";
                        break
                    }
                return "<Buffer " + t.join(" ") + ">"
            }, o.prototype.toArrayBuffer = function() {
                if ("undefined" != typeof Uint8Array) {
                    if (o._useTypedArrays)
                        return new o(this).buffer;
                    for (var t = new Uint8Array(this.length), e = 0, n = t.length; n > e; e += 1)
                        t[e] = this[e];
                    return t.buffer
                }
                throw new Error("Buffer.toArrayBuffer not supported in this browser")
            };
            var G = o.prototype;
            o._augment = function(t) {
                return t._isBuffer=!0, t._get = t.get, t._set = t.set, t.get = G.get, t.set = G.set, t.write = G.write, t.toString = G.toString, t.toLocaleString = G.toString, t.toJSON = G.toJSON, t.copy = G.copy, t.slice = G.slice, t.readUInt8 = G.readUInt8, t.readUInt16LE = G.readUInt16LE, t.readUInt16BE = G.readUInt16BE, t.readUInt32LE = G.readUInt32LE, t.readUInt32BE = G.readUInt32BE, t.readInt8 = G.readInt8, t.readInt16LE = G.readInt16LE, t.readInt16BE = G.readInt16BE, t.readInt32LE = G.readInt32LE, t.readInt32BE = G.readInt32BE, t.readFloatLE = G.readFloatLE, t.readFloatBE = G.readFloatBE, t.readDoubleLE = G.readDoubleLE, t.readDoubleBE = G.readDoubleBE, t.writeUInt8 = G.writeUInt8, t.writeUInt16LE = G.writeUInt16LE, t.writeUInt16BE = G.writeUInt16BE, t.writeUInt32LE = G.writeUInt32LE, t.writeUInt32BE = G.writeUInt32BE, t.writeInt8 = G.writeInt8, t.writeInt16LE = G.writeInt16LE, t.writeInt16BE = G.writeInt16BE, t.writeInt32LE = G.writeInt32LE, t.writeInt32BE = G.writeInt32BE, t.writeFloatLE = G.writeFloatLE, t.writeFloatBE = G.writeFloatBE, t.writeDoubleLE = G.writeDoubleLE, t.writeDoubleBE = G.writeDoubleBE, t.fill = G.fill, t.inspect = G.inspect, t.toArrayBuffer = G.toArrayBuffer, t
            }
        }).call(this, t("U7R4QW"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../../../../../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/index.js", "/../../../../../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer")
    }, {
        U7R4QW: 25,
        "base64-js": 23,
        buffer: 22,
        ieee754: 24
    }
    ],
    23: [function(t, e, n) {
        (function() {
            var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
            !function(e) {
                "use strict";
                function n(t) {
                    var e = t.charCodeAt(0);
                    return e === s ? 62 : e === a ? 63 : u > e?-1 : u + 10 > e ? e - u + 26 + 26 : c + 26 > e ? e - c : l + 26 > e ? e - l + 26 : void 0
                }
                function r(t) {
                    function e(t) {
                        l[f++] = t
                    }
                    var r, o, s, a, u, l;
                    if (t.length%4 > 0)
                        throw new Error("Invalid string. Length must be a multiple of 4");
                    var c = t.length;
                    u = "=" === t.charAt(c - 2) ? 2 : "=" === t.charAt(c - 1) ? 1 : 0, l = new i(3 * t.length / 4 - u), s = u > 0 ? t.length - 4 : t.length;
                    var f = 0;
                    for (r = 0, o = 0; s > r; r += 4, o += 3)
                        a = n(t.charAt(r))<<18 | n(t.charAt(r + 1))<<12 | n(t.charAt(r + 2))<<6 | n(t.charAt(r + 3)), e((16711680 & a)>>16), e((65280 & a)>>8), e(255 & a);
                    return 2 === u ? (a = n(t.charAt(r))<<2 | n(t.charAt(r + 1))>>4, e(255 & a)) : 1 === u && (a = n(t.charAt(r))<<10 | n(t.charAt(r + 1))<<4 | n(t.charAt(r + 2))>>2, e(a>>8 & 255), e(255 & a)), l
                }
                function o(e) {
                    function n(e) {
                        return t.charAt(e)
                    }
                    function r(t) {
                        return n(t>>18 & 63) + n(t>>12 & 63) + n(t>>6 & 63) + n(63 & t)
                    }
                    var o, i, s, a = e.length%3, u = "";
                    for (o = 0, s = e.length - a; s > o; o += 3)
                        i = (e[o]<<16) + (e[o + 1]<<8) + e[o + 2], u += r(i);
                    switch (a) {
                    case 1:
                        i = e[e.length - 1], u += n(i>>2), u += n(i<<4 & 63), u += "==";
                        break;
                    case 2:
                        i = (e[e.length - 2]<<8) + e[e.length - 1], u += n(i>>10), u += n(i>>4 & 63), u += n(i<<2 & 63), u += "="
                    }
                    return u
                }
                var i = "undefined" != typeof Uint8Array ? Uint8Array: Array, s = "+".charCodeAt(0), a = "/".charCodeAt(0), u = "0".charCodeAt(0), l = "a".charCodeAt(0), c = "A".charCodeAt(0);
                e.toByteArray = r, e.fromByteArray = o
            }("undefined" == typeof n ? this.base64js = {} : n)
        }).call(this, t("U7R4QW"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../../../../../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib/b64.js", "/../../../../../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib")
    }, {
        U7R4QW: 25,
        buffer: 22
    }
    ],
    24: [function(t, e, n) {
        (function() {
            n.read = function(t, e, n, r, o) {
                var i, s, a = 8 * o - r - 1, u = (1<<a) - 1, l = u>>1, c =- 7, f = n ? o - 1 : 0, h = n?-1 : 1, p = t[e + f];
                for (f += h, i = p & (1<<-c) - 1, p>>=-c, c += a; c > 0; i = 256 * i + t[e + f], f += h, c -= 8);
                for (s = i & (1<<-c) - 1, i>>=-c, c += r; c > 0; s = 256 * s + t[e + f], f += h, c -= 8);
                if (0 === i)
                    i = 1 - l;
                else {
                    if (i === u)
                        return s ? 0 / 0 : 1 / 0 * (p?-1 : 1);
                    s += Math.pow(2, r), i -= l
                }
                return (p?-1 : 1) * s * Math.pow(2, i - r)
            }, n.write = function(t, e, n, r, o, i) {
                var s, a, u, l = 8 * i - o - 1, c = (1<<l) - 1, f = c>>1, h = 23 === o ? Math.pow(2, - 24) - Math.pow(2, - 77): 0, p = r ? 0: i - 1, d = r ? 1: - 1, g = 0 > e || 0 === e && 0 > 1 / e ? 1: 0;
                for (e = Math.abs(e), isNaN(e) || 1 / 0 === e ? (a = isNaN(e) ? 1 : 0, s = c) : (s = Math.floor(Math.log(e) / Math.LN2), e * (u = Math.pow(2, - s)) < 1 && (s--, u*=2), e += s + f >= 1 ? h / u : h * Math.pow(2, 1 - f), e * u >= 2 && (s++, u/=2), s + f >= c ? (a = 0, s = c) : s + f >= 1 ? (a = (e * u - 1) * Math.pow(2, o), s += f) : (a = e * Math.pow(2, f - 1) * Math.pow(2, o), s = 0)); o >= 8; t[n + p] = 255 & a, p += d, a/=256, o -= 8);
                for (s = s<<o | a, l += o; l > 0; t[n + p] = 255 & s, p += d, s/=256, l -= 8);
                t[n + p - d]|=128 * g
            }
        }).call(this, t("U7R4QW"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../../../../../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/ieee754/index.js", "/../../../../../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/ieee754")
    }, {
        U7R4QW: 25,
        buffer: 22
    }
    ],
    25: [function(t, e) {
        (function(t) {
            function n() {}
            var t = e.exports = {};
            t.nextTick = function() {
                var t = "undefined" != typeof window && window.setImmediate, e = "undefined" != typeof window && window.postMessage && window.addEventListener;
                if (t)
                    return function(t) {
                        return window.setImmediate(t)
                    };
                if (e) {
                    var n = [];
                    return window.addEventListener("message", function(t) {
                        var e = t.source;
                        if ((e === window || null === e) && "process-tick" === t.data && (t.stopPropagation(), n.length > 0)) {
                            var r = n.shift();
                            r()
                        }
                    }, !0), function(t) {
                        n.push(t), window.postMessage("process-tick", "*")
                    }
                }
                return function(t) {
                    setTimeout(t, 0)
                }
            }(), t.title = "browser", t.browser=!0, t.env = {}, t.argv = [], t.on = n, t.addListener = n, t.once = n, t.off = n, t.removeListener = n, t.removeAllListeners = n, t.emit = n, t.binding = function() {
                throw new Error("process.binding is not supported")
            }, t.cwd = function() {
                return "/"
            }, t.chdir = function() {
                throw new Error("process.chdir is not supported")
            }
        }).call(this, t("U7R4QW"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../../../../../../node_modules/gulp-browserify/node_modules/browserify/node_modules/process/browser.js", "/../../../../../../node_modules/gulp-browserify/node_modules/browserify/node_modules/process")
    }, {
        U7R4QW: 25,
        buffer: 22
    }
    ]
}, {}, [9]);

