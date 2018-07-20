(window.webpackJsonp = window.webpackJsonp || []).push([
    [27], {
        U2OH: function(l, n, u) {
            "use strict";
            u.r(n);
            var e = u("CcnG"),
                a = function() {},
                t = u("Ip0R"),
                d = function() {
                    function l(l, n) {
                        this.el = l, this.renderer = n
                    }
                    return l.prototype.ngAfterViewInit = function() {
                        "0" !== this.value && this.renderer.invokeElementMethod(this.el.nativeElement, "focus", [])
                    }, l.ctorParameters = [{
                        type: e.ElementRef
                    }, {
                        type: e.Renderer
                    }], l
                }(),
                s = function() {
                    function l() {
                        this.weekDays = ["su", "mo", "tu", "we", "th", "fr", "sa"]
                    }
                    return l.prototype.isDateValid = function(l, n, u, e, a, t, d, s, i, o, r, c) {
                        var p = {
                                day: 0,
                                month: 0,
                                year: 0
                            },
                            b = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                            g = -1 !== n.indexOf("mmm"),
                            h = n.match(/[^(dmy)]{1,}/g),
                            m = this.getDateValue(l, n, h),
                            v = this.getNumberByValue(m[0]),
                            f = g ? this.getMonthNumberByMonthName(m[1], r) : this.getNumberByValue(m[1]),
                            A = this.getNumberByValue(m[2]);
                        if (-1 !== f && -1 !== A && -1 !== v) {
                            if (v < u || v > e || f < 1 || f > 12) return p;
                            var w = {
                                year: v,
                                month: f,
                                day: A
                            };
                            return this.isDisabledDate(w, u, e, a, t, d, s, i, o, c) ? p : ((v % 400 == 0 || v % 100 != 0 && v % 4 == 0) && (b[1] = 29), A < 1 || A > b[f - 1] ? p : w)
                        }
                        return p
                    }, l.prototype.getDateValue = function(l, n, u) {
                        var e = u[0];
                        u[0] !== u[1] && (e = u[0] + u[1]);
                        for (var a = new RegExp("[" + e + "]"), t = l.split(a), d = n.split(a), s = [], i = 0; i < d.length; i++) - 1 !== d[i].indexOf("yyyy") && (s[0] = {
                            value: t[i],
                            format: d[i]
                        }), -1 !== d[i].indexOf("m") && (s[1] = {
                            value: t[i],
                            format: d[i]
                        }), -1 !== d[i].indexOf("d") && (s[2] = {
                            value: t[i],
                            format: d[i]
                        });
                        return s
                    }, l.prototype.getMonthNumberByMonthName = function(l, n) {
                        if (l.value)
                            for (var u = 1; u <= 12; u++)
                                if (l.value.toLowerCase() === n[u].toLowerCase()) return u;
                        return -1
                    }, l.prototype.getNumberByValue = function(l) {
                        if (!/^\d+$/.test(l.value)) return -1;
                        var n = Number(l.value);
                        return 1 === l.format.length && 1 !== l.value.length && n < 10 || 1 === l.format.length && 2 !== l.value.length && n >= 10 ? n = -1 : 2 === l.format.length && l.value.length > 2 && (n = -1), n
                    }, l.prototype.parseDefaultMonth = function(l) {
                        var n = {
                            monthTxt: "",
                            monthNbr: 0,
                            year: 0
                        };
                        if ("" !== l) {
                            var u = l.split(l.match(/[^0-9]/)[0]);
                            n.monthNbr = 2 === u[0].length ? parseInt(u[0]) : parseInt(u[1]), n.year = 2 === u[0].length ? parseInt(u[1]) : parseInt(u[0])
                        }
                        return n
                    }, l.prototype.isDisabledDate = function(l, n, u, e, a, t, d, s, i, o) {
                        for (var r = 0, c = o; r < c.length; r++)
                            if ((y = c[r]).year === l.year && y.month === l.month && y.day === l.day) return !1;
                        if (l.year < n && 12 === l.month || l.year > u && 1 === l.month) return !0;
                        var p = this.getTimeInMilliseconds(l);
                        if (this.isInitializedDate(e) && p <= this.getTimeInMilliseconds(e)) return !0;
                        if (this.isInitializedDate(a) && p >= this.getTimeInMilliseconds(a)) return !0;
                        if (t) {
                            var b = this.getDayNumber(l);
                            if (0 === b || 6 === b) return !0
                        }
                        var g = this.getDayNumber(l);
                        if (i.length > 0)
                            for (var h = 0, m = i; h < m.length; h++)
                                if (g === this.getWeekdayIndex(m[h])) return !0;
                        for (var v = 0, f = d; v < f.length; v++)
                            if ((y = f[v]).year === l.year && y.month === l.month && y.day === l.day) return !0;
                        for (var A = 0, w = s; A < w.length; A++) {
                            var y;
                            if (this.isInitializedDate((y = w[A]).begin) && this.isInitializedDate(y.end) && p >= this.getTimeInMilliseconds(y.begin) && p <= this.getTimeInMilliseconds(y.end)) return !0
                        }
                        return !1
                    }, l.prototype.isMarkedDate = function(l, n, u) {
                        for (var e = 0, a = n; e < a.length; e++)
                            for (var t = a[e], d = 0, s = t.dates; d < s.length; d++) {
                                var i = s[d];
                                if (i.year === l.year && i.month === l.month && i.day === l.day) return {
                                    marked: !0,
                                    color: t.color
                                }
                            }
                        if (u && u.marked) {
                            var o = this.getDayNumber(l);
                            if (0 === o || 6 === o) return {
                                marked: !0,
                                color: u.color
                            }
                        }
                        return {
                            marked: !1,
                            color: ""
                        }
                    }, l.prototype.isHighlightedDate = function(l, n, u, e) {
                        var a = this.getDayNumber(l);
                        if (n && 0 === a || u && 6 === a) return !0;
                        for (var t = 0, d = e; t < d.length; t++) {
                            var s = d[t];
                            if (s.year === l.year && s.month === l.month && s.day === l.day) return !0
                        }
                        return !1
                    }, l.prototype.getWeekNumber = function(l) {
                        var n = new Date(l.year, l.month - 1, l.day, 0, 0, 0, 0);
                        return n.setDate(n.getDate() + (0 === n.getDay() ? -3 : 4 - n.getDay())), Math.round((n.getTime() - new Date(n.getFullYear(), 0, 4).getTime()) / 864e5 / 7) + 1
                    }, l.prototype.isMonthDisabledByDisableUntil = function(l, n) {
                        return this.isInitializedDate(n) && this.getTimeInMilliseconds(l) <= this.getTimeInMilliseconds(n)
                    }, l.prototype.isMonthDisabledByDisableSince = function(l, n) {
                        return this.isInitializedDate(n) && this.getTimeInMilliseconds(l) >= this.getTimeInMilliseconds(n)
                    }, l.prototype.getDateModel = function(l, n, u, e) {
                        return void 0 === e && (e = ""), {
                            date: l,
                            jsdate: this.getDate(l),
                            formatted: e.length ? e : this.formatDate(l, n, u),
                            epoc: Math.round(this.getTimeInMilliseconds(l) / 1e3)
                        }
                    }, l.prototype.formatDate = function(l, n, u) {
                        var e = n.replace("yyyy", String(l.year));
                        return e = -1 !== n.indexOf("mmm") ? e.replace("mmm", u[l.month]) : -1 !== n.indexOf("mm") ? e.replace("mm", this.preZero(l.month)) : e.replace("m", String(l.month)), -1 !== n.indexOf("dd") ? e.replace("dd", this.preZero(l.day)) : e.replace("d", String(l.day))
                    }, l.prototype.preZero = function(l) {
                        return l < 10 ? "0" + l : String(l)
                    }, l.prototype.isInitializedDate = function(l) {
                        return 0 !== l.year && 0 !== l.month && 0 !== l.day
                    }, l.prototype.getTimeInMilliseconds = function(l) {
                        return this.getDate(l).getTime()
                    }, l.prototype.getDate = function(l) {
                        return new Date(l.year, l.month - 1, l.day, 0, 0, 0, 0)
                    }, l.prototype.getDayNumber = function(l) {
                        return new Date(l.year, l.month - 1, l.day, 0, 0, 0, 0).getDay()
                    }, l.prototype.getWeekdayIndex = function(l) {
                        return this.weekDays.indexOf(l)
                    }, l.ctorParameters = [], l
                }(),
                i = function(l) {
                    return l[l.enter = 13] = "enter", l[l.esc = 27] = "esc", l[l.space = 32] = "space", l[l.leftArrow = 37] = "leftArrow", l[l.upArrow = 38] = "upArrow", l[l.rightArrow = 39] = "rightArrow", l[l.downArrow = 40] = "downArrow", l[l.tab = 9] = "tab", l[l.shift = 16] = "shift", l
                }({}),
                o = function(l) {
                    return l[l.prev = 1] = "prev", l[l.curr = 2] = "curr", l[l.next = 3] = "next", l
                }({}),
                r = function() {
                    function l(l, n, u, e) {
                        var a = this;
                        this.elem = l, this.renderer = n, this.cdr = u, this.utilService = e, this.visibleMonth = {
                            monthTxt: "",
                            monthNbr: 0,
                            year: 0
                        }, this.selectedMonth = {
                            monthTxt: "",
                            monthNbr: 0,
                            year: 0
                        }, this.selectedDate = {
                            year: 0,
                            month: 0,
                            day: 0
                        }, this.weekDays = [], this.dates = [], this.months = [], this.years = [], this.disableTodayBtn = !1, this.dayIdx = 0, this.weekDayOpts = ["su", "mo", "tu", "we", "th", "fr", "sa"], this.selectMonth = !1, this.selectYear = !1, this.selectorPos = null, this.prevMonthDisabled = !1, this.nextMonthDisabled = !1, this.prevYearDisabled = !1, this.nextYearDisabled = !1, this.prevYearsDisabled = !1, this.nextYearsDisabled = !1, this.prevMonthId = o.prev, this.currMonthId = o.curr, this.nextMonthId = o.next, this.clickListener = n.listen(l.nativeElement, "click", function(l) {
                            (a.opts.monthSelector || a.opts.yearSelector) && l.target && a.resetMonthYearSelect()
                        })
                    }
                    return l.prototype.ngOnDestroy = function() {
                        this.clickListener()
                    }, l.prototype.initialize = function(l, n, u, e, a, t, d) {
                        if (this.opts = l, this.selectorPos = u, this.weekDays.length = 0, this.isTodayDisabled(), this.dayIdx = this.weekDayOpts.indexOf(this.opts.firstDayOfWeek), -1 !== this.dayIdx)
                            for (var s = this.dayIdx, i = 0; i < this.weekDayOpts.length; i++) this.weekDays.push(this.opts.dayLabels[this.weekDayOpts[s]]), s = "sa" === this.weekDayOpts[s] ? 0 : s + 1;
                        var o = this.utilService.isDateValid(e, this.opts.dateFormat, this.opts.minYear, this.opts.maxYear, this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableDates, this.opts.disableDateRanges, this.opts.disableWeekdays, this.opts.monthLabels, this.opts.enableDates);
                        0 !== o.day && 0 !== o.month && 0 !== o.year ? this.selectedDate = o : null !== n && void 0 !== n && "" !== n && (this.selectedMonth = this.utilService.parseDefaultMonth(n)), this.dateChanged = a, this.calendarViewChanged = t, this.closedByEsc = d, this.setVisibleMonth()
                    }, l.prototype.setCalendarView = function(l) {
                        this.selectedDate = l, this.setVisibleMonth()
                    }, l.prototype.resetMonthYearSelect = function() {
                        this.selectMonth = !1, this.selectYear = !1
                    }, l.prototype.onSelectMonthClicked = function(l) {
                        if (l.stopPropagation(), this.selectMonth = !this.selectMonth, this.selectYear = !1, this.cdr.detectChanges(), this.selectMonth) {
                            var n = this.getToday();
                            this.months.length = 0;
                            for (var u = 1; u <= 12; u += 3) {
                                for (var e = [], a = u; a < u + 3; a++) {
                                    var t = this.utilService.isMonthDisabledByDisableUntil({
                                        year: this.visibleMonth.year,
                                        month: a,
                                        day: this.daysInMonth(a, this.visibleMonth.year)
                                    }, this.opts.disableUntil) || this.utilService.isMonthDisabledByDisableSince({
                                        year: this.visibleMonth.year,
                                        month: a,
                                        day: 1
                                    }, this.opts.disableSince);
                                    e.push({
                                        nbr: a,
                                        name: this.opts.monthLabels[a],
                                        currMonth: a === n.month && this.visibleMonth.year === n.year,
                                        selected: a === this.visibleMonth.monthNbr,
                                        disabled: t
                                    })
                                }
                                this.months.push(e)
                            }
                        }
                    }, l.prototype.onMonthCellClicked = function(l) {
                        var n = l.nbr !== this.visibleMonth.monthNbr;
                        this.visibleMonth = {
                            monthTxt: this.opts.monthLabels[l.nbr],
                            monthNbr: l.nbr,
                            year: this.visibleMonth.year
                        }, this.generateCalendar(l.nbr, this.visibleMonth.year, n), this.selectMonth = !1, this.selectorEl.nativeElement.focus()
                    }, l.prototype.onMonthCellKeyDown = function(l, n) {
                        l.keyCode !== i.enter && l.keyCode !== i.space || n.disabled || (l.preventDefault(), this.onMonthCellClicked(n))
                    }, l.prototype.onSelectYearClicked = function(l) {
                        l.stopPropagation(), this.selectYear = !this.selectYear, this.selectMonth = !1, this.cdr.detectChanges(), this.selectYear && this.generateYears(this.visibleMonth.year)
                    }, l.prototype.onYearCellClicked = function(l) {
                        var n = l.year !== this.visibleMonth.year;
                        this.visibleMonth = {
                            monthTxt: this.visibleMonth.monthTxt,
                            monthNbr: this.visibleMonth.monthNbr,
                            year: l.year
                        }, this.generateCalendar(this.visibleMonth.monthNbr, l.year, n), this.selectYear = !1, this.selectorEl.nativeElement.focus()
                    }, l.prototype.onPrevYears = function(l, n) {
                        l.stopPropagation(), this.generateYears(n - 25)
                    }, l.prototype.onNextYears = function(l, n) {
                        l.stopPropagation(), this.generateYears(n + 25)
                    }, l.prototype.generateYears = function(l) {
                        this.years.length = 0;
                        for (var n = this.getToday(), u = l; u <= 20 + l; u += 5) {
                            for (var e = [], a = u; a < u + 5; a++) {
                                var t = this.utilService.isMonthDisabledByDisableUntil({
                                    year: a,
                                    month: this.visibleMonth.monthNbr,
                                    day: this.daysInMonth(this.visibleMonth.monthNbr, a)
                                }, this.opts.disableUntil) || this.utilService.isMonthDisabledByDisableSince({
                                    year: a,
                                    month: this.visibleMonth.monthNbr,
                                    day: 1
                                }, this.opts.disableSince);
                                e.push({
                                    year: a,
                                    currYear: a === n.year,
                                    selected: a === this.visibleMonth.year,
                                    disabled: t || a < this.opts.minYear || a > this.opts.maxYear
                                })
                            }
                            this.years.push(e)
                        }
                        this.prevYearsDisabled = this.years[0][0].year <= this.opts.minYear || this.utilService.isMonthDisabledByDisableUntil({
                            year: this.years[0][0].year - 1,
                            month: this.visibleMonth.monthNbr,
                            day: this.daysInMonth(this.visibleMonth.monthNbr, this.years[0][0].year - 1)
                        }, this.opts.disableUntil), this.nextYearsDisabled = this.years[4][4].year >= this.opts.maxYear || this.utilService.isMonthDisabledByDisableSince({
                            year: this.years[4][4].year + 1,
                            month: this.visibleMonth.monthNbr,
                            day: 1
                        }, this.opts.disableSince)
                    }, l.prototype.onYearCellKeyDown = function(l, n) {
                        l.keyCode !== i.enter && l.keyCode !== i.space || n.disabled || (l.preventDefault(), this.onYearCellClicked(n))
                    }, l.prototype.isTodayDisabled = function() {
                        this.disableTodayBtn = this.utilService.isDisabledDate(this.getToday(), this.opts.minYear, this.opts.maxYear, this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableDates, this.opts.disableDateRanges, this.opts.disableWeekdays, this.opts.enableDates)
                    }, l.prototype.setVisibleMonth = function() {
                        var l = 0,
                            n = 0;
                        if (0 === this.selectedDate.year && 0 === this.selectedDate.month && 0 === this.selectedDate.day)
                            if (0 === this.selectedMonth.year && 0 === this.selectedMonth.monthNbr) {
                                var u = this.getToday();
                                l = u.year, n = u.month
                            } else l = this.selectedMonth.year, n = this.selectedMonth.monthNbr;
                        else l = this.selectedDate.year, n = this.selectedDate.month;
                        this.visibleMonth = {
                            monthTxt: this.opts.monthLabels[n],
                            monthNbr: n,
                            year: l
                        }, this.generateCalendar(n, l, !0)
                    }, l.prototype.onPrevMonth = function() {
                        var l = this.getDate(this.visibleMonth.year, this.visibleMonth.monthNbr, 1);
                        l.setMonth(l.getMonth() - 1);
                        var n = l.getFullYear(),
                            u = l.getMonth() + 1;
                        this.visibleMonth = {
                            monthTxt: this.opts.monthLabels[u],
                            monthNbr: u,
                            year: n
                        }, this.generateCalendar(u, n, !0)
                    }, l.prototype.onNextMonth = function() {
                        var l = this.getDate(this.visibleMonth.year, this.visibleMonth.monthNbr, 1);
                        l.setMonth(l.getMonth() + 1);
                        var n = l.getFullYear(),
                            u = l.getMonth() + 1;
                        this.visibleMonth = {
                            monthTxt: this.opts.monthLabels[u],
                            monthNbr: u,
                            year: n
                        }, this.generateCalendar(u, n, !0)
                    }, l.prototype.onPrevYear = function() {
                        this.visibleMonth.year--, this.generateCalendar(this.visibleMonth.monthNbr, this.visibleMonth.year, !0)
                    }, l.prototype.onNextYear = function() {
                        this.visibleMonth.year++, this.generateCalendar(this.visibleMonth.monthNbr, this.visibleMonth.year, !0)
                    }, l.prototype.onCloseSelector = function(l) {
                        l.keyCode === i.esc && this.closedByEsc()
                    }, l.prototype.onTodayClicked = function() {
                        var l = this.getToday();
                        this.selectDate(l), this.opts.closeSelectorOnDateSelect || this.setVisibleMonth()
                    }, l.prototype.onCellClicked = function(l) {
                        l.cmo === this.prevMonthId ? (this.onPrevMonth(), this.opts.allowSelectionOnlyInCurrentMonth || this.selectDate(l.dateObj)) : l.cmo === this.currMonthId ? this.selectDate(l.dateObj) : l.cmo === this.nextMonthId && (this.onNextMonth(), this.opts.allowSelectionOnlyInCurrentMonth || this.selectDate(l.dateObj)), this.resetMonthYearSelect()
                    }, l.prototype.onCellKeyDown = function(l, n) {
                        l.keyCode !== i.enter && l.keyCode !== i.space || n.disabled || (l.preventDefault(), this.onCellClicked(n))
                    }, l.prototype.selectDate = function(l) {
                        this.selectedDate = l, this.dateChanged(this.utilService.getDateModel(l, this.opts.dateFormat, this.opts.monthLabels), this.opts.closeSelectorOnDateSelect)
                    }, l.prototype.monthStartIdx = function(l, n) {
                        var u = new Date;
                        u.setDate(1), u.setMonth(n - 1), u.setFullYear(l);
                        var e = u.getDay() + this.sundayIdx();
                        return e >= 7 ? e - 7 : e
                    }, l.prototype.daysInMonth = function(l, n) {
                        return new Date(n, l, 0).getDate()
                    }, l.prototype.daysInPrevMonth = function(l, n) {
                        var u = this.getDate(n, l, 1);
                        return u.setMonth(u.getMonth() - 1), this.daysInMonth(u.getMonth() + 1, u.getFullYear())
                    }, l.prototype.isCurrDay = function(l, n, u, e, a) {
                        return l === a.day && n === a.month && u === a.year && e === this.currMonthId
                    }, l.prototype.getToday = function() {
                        var l = new Date;
                        return {
                            year: l.getFullYear(),
                            month: l.getMonth() + 1,
                            day: l.getDate()
                        }
                    }, l.prototype.getDayNumber = function(l) {
                        return this.getDate(l.year, l.month, l.day).getDay()
                    }, l.prototype.getWeekday = function(l) {
                        return this.weekDayOpts[this.getDayNumber(l)]
                    }, l.prototype.getDate = function(l, n, u) {
                        return new Date(l, n - 1, u, 0, 0, 0, 0)
                    }, l.prototype.sundayIdx = function() {
                        return this.dayIdx > 0 ? 7 - this.dayIdx : 0
                    }, l.prototype.generateCalendar = function(l, n, u) {
                        this.dates.length = 0;
                        for (var e = this.getToday(), a = this.monthStartIdx(n, l), t = this.daysInMonth(l, n), d = this.daysInPrevMonth(l, n), s = 1, i = this.prevMonthId, o = 1; o < 7; o++) {
                            var r = [];
                            if (1 === o) {
                                for (var c = d - a + 1; c <= d; c++) r.push({
                                    dateObj: b = {
                                        year: 1 === l ? n - 1 : n,
                                        month: 1 === l ? 12 : l - 1,
                                        day: c
                                    },
                                    cmo: i,
                                    currDay: this.isCurrDay(c, l, n, i, e),
                                    disabled: this.utilService.isDisabledDate(b, this.opts.minYear, this.opts.maxYear, this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableDates, this.opts.disableDateRanges, this.opts.disableWeekdays, this.opts.enableDates),
                                    markedDate: this.utilService.isMarkedDate(b, this.opts.markDates, this.opts.markWeekends),
                                    highlight: this.utilService.isHighlightedDate(b, this.opts.sunHighlight, this.opts.satHighlight, this.opts.highlightDates)
                                });
                                i = this.currMonthId;
                                var p = 7 - r.length;
                                for (c = 0; c < p; c++) r.push({
                                    dateObj: b = {
                                        year: n,
                                        month: l,
                                        day: s
                                    },
                                    cmo: i,
                                    currDay: this.isCurrDay(s, l, n, i, e),
                                    disabled: this.utilService.isDisabledDate(b, this.opts.minYear, this.opts.maxYear, this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableDates, this.opts.disableDateRanges, this.opts.disableWeekdays, this.opts.enableDates),
                                    markedDate: this.utilService.isMarkedDate(b, this.opts.markDates, this.opts.markWeekends),
                                    highlight: this.utilService.isHighlightedDate(b, this.opts.sunHighlight, this.opts.satHighlight, this.opts.highlightDates)
                                }), s++
                            } else
                                for (c = 1; c < 8; c++) {
                                    var b;
                                    s > t && (s = 1, i = this.nextMonthId), r.push({
                                        dateObj: b = {
                                            year: i === this.nextMonthId && 12 === l ? n + 1 : n,
                                            month: i === this.currMonthId ? l : i === this.nextMonthId && l < 12 ? l + 1 : 1,
                                            day: s
                                        },
                                        cmo: i,
                                        currDay: this.isCurrDay(s, l, n, i, e),
                                        disabled: this.utilService.isDisabledDate(b, this.opts.minYear, this.opts.maxYear, this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableDates, this.opts.disableDateRanges, this.opts.disableWeekdays, this.opts.enableDates),
                                        markedDate: this.utilService.isMarkedDate(b, this.opts.markDates, this.opts.markWeekends),
                                        highlight: this.utilService.isHighlightedDate(b, this.opts.sunHighlight, this.opts.satHighlight, this.opts.highlightDates)
                                    }), s++
                                }
                            var g = this.opts.showWeekNumbers && "mo" === this.opts.firstDayOfWeek ? this.utilService.getWeekNumber(r[0].dateObj) : 0;
                            this.dates.push({
                                week: r,
                                weekNbr: g
                            })
                        }
                        this.setHeaderBtnDisabledState(l, n), u && this.calendarViewChanged({
                            year: n,
                            month: l,
                            first: {
                                number: 1,
                                weekday: this.getWeekday({
                                    year: n,
                                    month: l,
                                    day: 1
                                })
                            },
                            last: {
                                number: t,
                                weekday: this.getWeekday({
                                    year: n,
                                    month: l,
                                    day: t
                                })
                            }
                        })
                    }, l.prototype.setHeaderBtnDisabledState = function(l, n) {
                        var u = !1,
                            e = !1,
                            a = !1,
                            t = !1;
                        this.opts.disableHeaderButtons && (u = this.utilService.isMonthDisabledByDisableUntil({
                            year: 1 === l ? n - 1 : n,
                            month: 1 === l ? 12 : l - 1,
                            day: this.daysInMonth(1 === l ? 12 : l - 1, 1 === l ? n - 1 : n)
                        }, this.opts.disableUntil), e = this.utilService.isMonthDisabledByDisableUntil({
                            year: n - 1,
                            month: l,
                            day: this.daysInMonth(l, n - 1)
                        }, this.opts.disableUntil), a = this.utilService.isMonthDisabledByDisableSince({
                            year: 12 === l ? n + 1 : n,
                            month: 12 === l ? 1 : l + 1,
                            day: 1
                        }, this.opts.disableSince), t = this.utilService.isMonthDisabledByDisableSince({
                            year: n + 1,
                            month: l,
                            day: 1
                        }, this.opts.disableSince)), this.prevMonthDisabled = 1 === l && n === this.opts.minYear || u, this.prevYearDisabled = n - 1 < this.opts.minYear || e, this.nextMonthDisabled = 12 === l && n === this.opts.maxYear || a, this.nextYearDisabled = n + 1 > this.opts.maxYear || t
                    }, l.ctorParameters = [{
                        type: e.ElementRef
                    }, {
                        type: e.Renderer
                    }, {
                        type: e.ChangeDetectorRef
                    }, {
                        type: s
                    }], l
                }(),
                c = e["\u0275crt"]({
                    encapsulation: 2,
                    styles: ['.ngxmdp .headertodaybtn,.ngxmdp .monthcell,.ngxmdp .weekdaytitle{overflow:hidden;white-space:nowrap}.ngxmdp *{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:Arial,Helvetica,sans-serif;padding:0;margin:0}.ngxmdp .selector{position:absolute;padding:0;border:1px solid #CCC;border-radius:4px;z-index:100000;animation:selectorfadein 60ms}.ngxmdp .selector:focus{border:1px solid #ADD8E6;outline:0}@keyframes selectorfadein{from{opacity:0}to{opacity:1}}.ngxmdp .selectorarrow{background:#FAFAFA;padding:0}.ngxmdp .selectorarrow:after,.ngxmdp .selectorarrow:before{bottom:100%;border:solid transparent;content:" ";height:0;width:0;position:absolute}.ngxmdp .selectorarrow:after{border-color:rgba(250,250,250,0);border-bottom-color:#FAFAFA;border-width:10px;margin-left:-10px}.ngxmdp .selectorarrow:before{border-color:rgba(204,204,204,0);border-bottom-color:#CCC;border-width:11px;margin-left:-11px}.ngxmdp .selectorarrow:focus:before{border-bottom-color:#ADD8E6}.ngxmdp .selectorarrowleft:after,.ngxmdp .selectorarrowleft:before{left:24px}.ngxmdp .selectorarrowright:after,.ngxmdp .selectorarrowright:before{left:86%}.ngxmdp ::-ms-clear{display:none}.ngxmdp .headerbtnenabled,.ngxmdp .headertodaybtnenabled,.ngxmdp .yearchangebtnenabled{cursor:pointer}.ngxmdp .headerbtndisabled,.ngxmdp .headertodaybtndisabled,.ngxmdp .yearchangebtndisabled{cursor:not-allowed;opacity:.65}.ngxmdp .headertodaybtn{background:#FFF}.ngxmdp .header{width:100%;height:30px;border-radius:4px 4px 0 0;background-color:#FAFAFA}.ngxmdp .header td{vertical-align:middle;border:none;line-height:0}.ngxmdp .header td:nth-child(1){padding-left:4px}.ngxmdp .header td:nth-child(2){text-align:center}.ngxmdp .header td:nth-child(3){padding-right:4px}.ngxmdp .caltable,.ngxmdp .monthtable,.ngxmdp .yeartable{border-radius:0 0 4px 4px;table-layout:fixed;width:100%;height:calc(100% - 30px);background-color:#FFF;font-size:14px}.ngxmdp .caltable tbody tr:nth-child(6) td:first-child,.ngxmdp .monthtable tbody tr:nth-child(4) td:first-child,.ngxmdp .yeartable tbody tr:nth-child(7) td:first-child{border-bottom-left-radius:4px}.ngxmdp .caltable tbody tr:nth-child(6) td:last-child,.ngxmdp .monthtable tbody tr:nth-child(4) td:last-child,.ngxmdp .yeartable tbody tr:nth-child(7) td:last-child{border-bottom-right-radius:4px}.ngxmdp .caltable,.ngxmdp .daycell,.ngxmdp .monthcell,.ngxmdp .monthtable,.ngxmdp .weekdaytitle,.ngxmdp .yearcell,.ngxmdp .yeartable{border-collapse:collapse;color:#036;line-height:1.1}.ngxmdp .daycell,.ngxmdp .monthcell,.ngxmdp .weekdaytitle,.ngxmdp .yearcell{padding:4px;text-align:center}.ngxmdp .weekdaytitle{background-color:#DDD;font-size:11px;font-weight:400;vertical-align:middle;max-width:36px}.ngxmdp .weekdaytitleweeknbr{width:20px;border-right:1px solid #BBB}.ngxmdp .monthcell{background-color:#FAFAFA}.ngxmdp .yearcell{background-color:#FAFAFA;width:20%}.ngxmdp .daycell .datevalue{background-color:inherit;vertical-align:middle}.ngxmdp .daycell .datevalue span{vertical-align:middle}.ngxmdp .daycellweeknbr{font-size:10px;border-right:1px solid #CCC;cursor:default;color:#000}.ngxmdp .nextmonth,.ngxmdp .prevmonth{color:#999}.ngxmdp .disabled{cursor:default!important;color:#CCC!important;background:#FBEFEF!important}.ngxmdp .highlight{color:#C30000}.ngxmdp .dimday{opacity:.5}.ngxmdp .currmonth{background-color:#F6F6F6;font-weight:400}.ngxmdp .markdate{position:absolute;width:4px;height:4px;border-radius:4px}.ngxmdp .markcurrday,.ngxmdp .markcurrmonth,.ngxmdp .markcurryear{text-decoration:underline}.ngxmdp .selectedday .datevalue,.ngxmdp .selectedmonth .monthvalue,.ngxmdp .selectedyear .yearvalue{border:none;background-color:#8EBFFF;border-radius:2px}.ngxmdp .headerbtncell{background-color:#FAFAFA;display:table-cell;vertical-align:middle}.ngxmdp .yearchangebtncell{text-align:center;background-color:#FAFAFA}.ngxmdp .headerbtn,.ngxmdp .headerlabelbtn,.ngxmdp .yearchangebtn{background:#FAFAFA;border:none;height:22px}.ngxmdp .headerbtn{width:16px}.ngxmdp .headerlabelbtn{font-size:14px;outline:0;cursor:default}.ngxmdp .headerlabelbtnnotedit{cursor:default}.ngxmdp .headertodaybtn{border:1px solid #CCC;padding:0 4px;border-radius:4px;font-size:11px;height:22px;min-width:60px;max-width:84px}.ngxmdp .headerbtn,.ngxmdp .headermonthtxt,.ngxmdp .headertodaybtn,.ngxmdp .headeryeartxt,.ngxmdp .yearchangebtn{color:#000}.ngxmdp button::-moz-focus-inner{border:0}.ngxmdp .headermonthtxt,.ngxmdp .headeryeartxt{text-align:center;display:table-cell;vertical-align:middle;font-size:14px;height:26px;width:40px;max-width:40px;overflow:hidden;white-space:nowrap}.ngxmdp .headertodaybtn:focus{background:#ADD8E6}.ngxmdp .headerbtn:focus,.ngxmdp .monthlabel:focus,.ngxmdp .yearchangebtn:focus,.ngxmdp .yearlabel:focus{color:#ADD8E6;outline:0}.ngxmdp .daycell:focus,.ngxmdp .monthcell:focus,.ngxmdp .yearcell:focus{outline:#CCC solid 1px}.ngxmdp .icon-ngxmydpdown,.ngxmdp .icon-ngxmydpleft,.ngxmdp .icon-ngxmydpright,.ngxmdp .icon-ngxmydpup{color:#222;font-size:20px}.ngxmdp .icon-ngxmydptoday{color:#222;font-size:11px}.ngxmdp table{display:table;border-spacing:0}.ngxmdp table td{padding:0}.ngxmdp table,.ngxmdp td,.ngxmdp th{border:none}.ngxmdp .headertodaybtnenabled:hover{background-color:#E6E6E6}.ngxmdp .tablesingleday:hover,.ngxmdp .tablesinglemonth:hover,.ngxmdp .tablesingleyear:hover{background-color:#DDD}.ngxmdp .daycell,.ngxmdp .monthcell,.ngxmdp .monthlabel,.ngxmdp .yearcell,.ngxmdp .yearlabel{cursor:pointer}.ngxmdp .headerbtnenabled:hover,.ngxmdp .monthlabel:hover,.ngxmdp .yearchangebtnenabled:hover,.ngxmdp .yearlabel:hover{color:#777}@font-face{font-family:ngx-mydatepicker;src:url(data:application/octet-stream;base64,AAEAAAAPAIAAAwBwR1NVQiCMJXkAAAD8AAAAVE9TLzI+IEgWAAABUAAAAFZjbWFw6Tf8KgAAAagAAAGoY3Z0IAbV/wQAAAqIAAAAIGZwZ22KkZBZAAAKqAAAC3BnYXNwAAAAEAAACoAAAAAIZ2x5ZqGIXIsAAANQAAAC7GhlYWQNYnQXAAAGPAAAADZoaGVhBzwDVwAABnQAAAAkaG10eA8Q//8AAAaYAAAAGGxvY2ECwAGYAAAGsAAAAA5tYXhwARkL/QAABsAAAAAgbmFtZQ1Ae+cAAAbgAAADLXBvc3ThKGW3AAAKEAAAAG1wcmVw5UErvAAAFhgAAACGAAEAAAAKADAAPgACbGF0bgAOREZMVAAaAAQAAAAAAAAAAQAAAAQAAAAAAAAAAQAAAAFsaWdhAAgAAAABAAAAAQAEAAQAAAABAAgAAQAGAAAAAQAAAAECgwGQAAUAAAJ6ArwAAACMAnoCvAAAAeAAMQECAAACAAUDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFBmRWQAQOgA6AQDUv9qAFoDUgCWAAAAAQAAAAAAAAAAAAUAAAADAAAALAAAAAQAAAFcAAEAAAAAAFYAAwABAAAALAADAAoAAAFcAAQAKgAAAAQABAABAADoBP//AADoAP//AAAAAQAEAAAAAQACAAMABAAFAAABBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAABMAAAAAAAAAAUAAOgAAADoAAAAAAEAAOgBAADoAQAAAAIAAOgCAADoAgAAAAMAAOgDAADoAwAAAAQAAOgEAADoBAAAAAUAAQAAAAABQQJ9AA4ACrcAAABmFAEFFSsBFA8BBiImNRE0PgEfARYBQQr6CxwWFhwL+goBXg4L+gsWDgH0DxQCDPoKAAABAAAAAAFnAnwADQAXQBQAAQABAUcAAQABbwAAAGYXEwIFFisBERQGIi8BJjQ/ATYyFgFlFCAJ+goK+gscGAJY/gwOFgv6CxwL+gsWAAAAAAUAAP9qA6EDUgAUABgAKAA4AFwAt0AQKhoCCgUyIgIGCg0BAAEDR0uwClBYQD8ODAIKBQYGCmUAAgQBBAIBbQABAAQBAGsAAAMEAANrCAEGAAQCBgRfBwEFBQtYDQELCwxIAAMDCVgACQkNCUkbQEAODAIKBQYFCgZtAAIEAQQCAW0AAQAEAQBrAAADBAADawgBBgAEAgYEXwcBBQULWA0BCwsMSAADAwlYAAkJDQlJWUAYW1lWU1BPTElGRD88JiYmJBEVFBcSDwUdKwkBBiIvASY0PwE2Mh8BNzYyHwEWFAEhESE3NTQmKwEiBh0BFBY7ATI2JTU0JisBIgYdARQWOwEyNjcRFAYjISImNRE0NjsBNTQ2OwEyFh0BMzU0NjsBMhYHFTMyFgLX/uIFDgahBQUaBQ4Ge/cGDgYZBf1rAxL87tcKCCQICgoIJAgKAawKCCMICgoIIwgK1ywc/O4dKiodSDQlJCU01jYkIyU2AUcdKgE4/uIFBaEGDgUaBQV7+AUFGgUO/nMCPGuhCAoKCKEICgoIoQgKCgihCAoKLP01HSoqHQLLHSo2JTQ0JTY2JTQ0JTYqAAAAAAH//wAAAjsByQAOABFADgABAAFvAAAAZhUyAgUWKyUUBichIi4BPwE2Mh8BFgI7FA/+DA8UAgz6Ch4K+gqrDhYBFB4L+goK+gsAAAABAAAAAAI8Ae0ADgAXQBQAAQABAUcAAQABbwAAAGY1FAIFFisBFA8BBiIvASY0NjMhMhYCOwr6CxwL+gsWDgH0DhYByQ4L+gsL+gscFhYAAAEAAAABAADQdvwYXw889QALA+gAAAAA1S4YOwAAAADVLhg7////agPoA1IAAAAIAAIAAAAAAAAAAQAAA1L/agAAA+j////+A+gAAQAAAAAAAAAAAAAAAAAAAAYD6AAAAWUAAAFlAAAD6AAAAjv//wI7AAAAAAAAACIASgEoAU4BdgAAAAEAAAAGAF0ABQAAAAAAAgAeAC4AcwAAAHwLcAAAAAAAAAASAN4AAQAAAAAAAAA1AAAAAQAAAAAAAQAQADUAAQAAAAAAAgAHAEUAAQAAAAAAAwAQAEwAAQAAAAAABAAQAFwAAQAAAAAABQALAGwAAQAAAAAABgAQAHcAAQAAAAAACgArAIcAAQAAAAAACwATALIAAwABBAkAAABqAMUAAwABBAkAAQAgAS8AAwABBAkAAgAOAU8AAwABBAkAAwAgAV0AAwABBAkABAAgAX0AAwABBAkABQAWAZ0AAwABBAkABgAgAbMAAwABBAkACgBWAdMAAwABBAkACwAmAilDb3B5cmlnaHQgKEMpIDIwMTcgYnkgb3JpZ2luYWwgYXV0aG9ycyBAIGZvbnRlbGxvLmNvbW5neC1teWRhdGVwaWNrZXJSZWd1bGFybmd4LW15ZGF0ZXBpY2tlcm5neC1teWRhdGVwaWNrZXJWZXJzaW9uIDEuMG5neC1teWRhdGVwaWNrZXJHZW5lcmF0ZWQgYnkgc3ZnMnR0ZiBmcm9tIEZvbnRlbGxvIHByb2plY3QuaHR0cDovL2ZvbnRlbGxvLmNvbQBDAG8AcAB5AHIAaQBnAGgAdAAgACgAQwApACAAMgAwADEANwAgAGIAeQAgAG8AcgBpAGcAaQBuAGEAbAAgAGEAdQB0AGgAbwByAHMAIABAACAAZgBvAG4AdABlAGwAbABvAC4AYwBvAG0AbgBnAHgALQBtAHkAZABhAHQAZQBwAGkAYwBrAGUAcgBSAGUAZwB1AGwAYQByAG4AZwB4AC0AbQB5AGQAYQB0AGUAcABpAGMAawBlAHIAbgBnAHgALQBtAHkAZABhAHQAZQBwAGkAYwBrAGUAcgBWAGUAcgBzAGkAbwBuACAAMQAuADAAbgBnAHgALQBtAHkAZABhAHQAZQBwAGkAYwBrAGUAcgBHAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAHMAdgBnADIAdAB0AGYAIABmAHIAbwBtACAARgBvAG4AdABlAGwAbABvACAAcAByAG8AagBlAGMAdAAuAGgAdAB0AHAAOgAvAC8AZgBvAG4AdABlAGwAbABvAC4AYwBvAG0AAAAAAgAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAQIBAwEEAQUBBgEHAAxuZ3hteWRwcmlnaHQLbmd4bXlkcGxlZnQMbmd4bXlkcHRvZGF5CW5neG15ZHB1cAtuZ3hteWRwZG93bgAAAAAAAAEAAf//AA8AAAAAAAAAAAAAAAAAAAAAABgAGAAYABgDUv9qA1L/arAALCCwAFVYRVkgIEu4AA5RS7AGU1pYsDQbsChZYGYgilVYsAIlYbkIAAgAY2MjYhshIbAAWbAAQyNEsgABAENgQi2wASywIGBmLbACLCBkILDAULAEJlqyKAEKQ0VjRVJbWCEjIRuKWCCwUFBYIbBAWRsgsDhQWCGwOFlZILEBCkNFY0VhZLAoUFghsQEKQ0VjRSCwMFBYIbAwWRsgsMBQWCBmIIqKYSCwClBYYBsgsCBQWCGwCmAbILA2UFghsDZgG2BZWVkbsAErWVkjsABQWGVZWS2wAywgRSCwBCVhZCCwBUNQWLAFI0KwBiNCGyEhWbABYC2wBCwjISMhIGSxBWJCILAGI0KxAQpDRWOxAQpDsAFgRWOwAyohILAGQyCKIIqwASuxMAUlsAQmUVhgUBthUllYI1khILBAU1iwASsbIbBAWSOwAFBYZVktsAUssAdDK7IAAgBDYEItsAYssAcjQiMgsAAjQmGwAmJmsAFjsAFgsAUqLbAHLCAgRSCwC0NjuAQAYiCwAFBYsEBgWWawAWNgRLABYC2wCCyyBwsAQ0VCKiGyAAEAQ2BCLbAJLLAAQyNEsgABAENgQi2wCiwgIEUgsAErI7AAQ7AEJWAgRYojYSBkILAgUFghsAAbsDBQWLAgG7BAWVkjsABQWGVZsAMlI2FERLABYC2wCywgIEUgsAErI7AAQ7AEJWAgRYojYSBksCRQWLAAG7BAWSOwAFBYZVmwAyUjYUREsAFgLbAMLCCwACNCsgsKA0VYIRsjIVkqIS2wDSyxAgJFsGRhRC2wDiywAWAgILAMQ0qwAFBYILAMI0JZsA1DSrAAUlggsA0jQlktsA8sILAQYmawAWMguAQAY4ojYbAOQ2AgimAgsA4jQiMtsBAsS1RYsQRkRFkksA1lI3gtsBEsS1FYS1NYsQRkRFkbIVkksBNlI3gtsBIssQAPQ1VYsQ8PQ7ABYUKwDytZsABDsAIlQrEMAiVCsQ0CJUKwARYjILADJVBYsQEAQ2CwBCVCioogiiNhsA4qISOwAWEgiiNhsA4qIRuxAQBDYLACJUKwAiVhsA4qIVmwDENHsA1DR2CwAmIgsABQWLBAYFlmsAFjILALQ2O4BABiILAAUFiwQGBZZrABY2CxAAATI0SwAUOwAD6yAQEBQ2BCLbATLACxAAJFVFiwDyNCIEWwCyNCsAojsAFgQiBgsAFhtRAQAQAOAEJCimCxEgYrsHIrGyJZLbAULLEAEystsBUssQETKy2wFiyxAhMrLbAXLLEDEystsBgssQQTKy2wGSyxBRMrLbAaLLEGEystsBsssQcTKy2wHCyxCBMrLbAdLLEJEystsB4sALANK7EAAkVUWLAPI0IgRbALI0KwCiOwAWBCIGCwAWG1EBABAA4AQkKKYLESBiuwcisbIlktsB8ssQAeKy2wICyxAR4rLbAhLLECHistsCIssQMeKy2wIyyxBB4rLbAkLLEFHistsCUssQYeKy2wJiyxBx4rLbAnLLEIHistsCgssQkeKy2wKSwgPLABYC2wKiwgYLAQYCBDI7ABYEOwAiVhsAFgsCkqIS2wKyywKiuwKiotsCwsICBHICCwC0NjuAQAYiCwAFBYsEBgWWawAWNgI2E4IyCKVVggRyAgsAtDY7gEAGIgsABQWLBAYFlmsAFjYCNhOBshWS2wLSwAsQACRVRYsAEWsCwqsAEVMBsiWS2wLiwAsA0rsQACRVRYsAEWsCwqsAEVMBsiWS2wLywgNbABYC2wMCwAsAFFY7gEAGIgsABQWLBAYFlmsAFjsAErsAtDY7gEAGIgsABQWLBAYFlmsAFjsAErsAAWtAAAAAAARD4jOLEvARUqLbAxLCA8IEcgsAtDY7gEAGIgsABQWLBAYFlmsAFjYLAAQ2E4LbAyLC4XPC2wMywgPCBHILALQ2O4BABiILAAUFiwQGBZZrABY2CwAENhsAFDYzgtsDQssQIAFiUgLiBHsAAjQrACJUmKikcjRyNhIFhiGyFZsAEjQrIzAQEVFCotsDUssAAWsAQlsAQlRyNHI2GwCUMrZYouIyAgPIo4LbA2LLAAFrAEJbAEJSAuRyNHI2EgsAQjQrAJQysgsGBQWCCwQFFYswIgAyAbswImAxpZQkIjILAIQyCKI0cjRyNhI0ZgsARDsAJiILAAUFiwQGBZZrABY2AgsAErIIqKYSCwAkNgZCOwA0NhZFBYsAJDYRuwA0NgWbADJbACYiCwAFBYsEBgWWawAWNhIyAgsAQmI0ZhOBsjsAhDRrACJbAIQ0cjRyNhYCCwBEOwAmIgsABQWLBAYFlmsAFjYCMgsAErI7AEQ2CwASuwBSVhsAUlsAJiILAAUFiwQGBZZrABY7AEJmEgsAQlYGQjsAMlYGRQWCEbIyFZIyAgsAQmI0ZhOFktsDcssAAWICAgsAUmIC5HI0cjYSM8OC2wOCywABYgsAgjQiAgIEYjR7ABKyNhOC2wOSywABawAyWwAiVHI0cjYbAAVFguIDwjIRuwAiWwAiVHI0cjYSCwBSWwBCVHI0cjYbAGJbAFJUmwAiVhuQgACABjYyMgWGIbIVljuAQAYiCwAFBYsEBgWWawAWNgIy4jICA8ijgjIVktsDossAAWILAIQyAuRyNHI2EgYLAgYGawAmIgsABQWLBAYFlmsAFjIyAgPIo4LbA7LCMgLkawAiVGUlggPFkusSsBFCstsDwsIyAuRrACJUZQWCA8WS6xKwEUKy2wPSwjIC5GsAIlRlJYIDxZIyAuRrACJUZQWCA8WS6xKwEUKy2wPiywNSsjIC5GsAIlRlJYIDxZLrErARQrLbA/LLA2K4ogIDywBCNCijgjIC5GsAIlRlJYIDxZLrErARQrsARDLrArKy2wQCywABawBCWwBCYgLkcjRyNhsAlDKyMgPCAuIzixKwEUKy2wQSyxCAQlQrAAFrAEJbAEJSAuRyNHI2EgsAQjQrAJQysgsGBQWCCwQFFYswIgAyAbswImAxpZQkIjIEewBEOwAmIgsABQWLBAYFlmsAFjYCCwASsgiophILACQ2BkI7ADQ2FkUFiwAkNhG7ADQ2BZsAMlsAJiILAAUFiwQGBZZrABY2GwAiVGYTgjIDwjOBshICBGI0ewASsjYTghWbErARQrLbBCLLA1Ky6xKwEUKy2wQyywNishIyAgPLAEI0IjOLErARQrsARDLrArKy2wRCywABUgR7AAI0KyAAEBFRQTLrAxKi2wRSywABUgR7AAI0KyAAEBFRQTLrAxKi2wRiyxAAEUE7AyKi2wRyywNCotsEgssAAWRSMgLiBGiiNhOLErARQrLbBJLLAII0KwSCstsEossgAAQSstsEsssgABQSstsEwssgEAQSstsE0ssgEBQSstsE4ssgAAQistsE8ssgABQistsFAssgEAQistsFEssgEBQistsFIssgAAPistsFMssgABPistsFQssgEAPistsFUssgEBPistsFYssgAAQCstsFcssgABQCstsFgssgEAQCstsFkssgEBQCstsFossgAAQystsFsssgABQystsFwssgEAQystsF0ssgEBQystsF4ssgAAPystsF8ssgABPystsGAssgEAPystsGEssgEBPystsGIssDcrLrErARQrLbBjLLA3K7A7Ky2wZCywNyuwPCstsGUssAAWsDcrsD0rLbBmLLA4Ky6xKwEUKy2wZyywOCuwOystsGgssDgrsDwrLbBpLLA4K7A9Ky2waiywOSsusSsBFCstsGsssDkrsDsrLbBsLLA5K7A8Ky2wbSywOSuwPSstsG4ssDorLrErARQrLbBvLLA6K7A7Ky2wcCywOiuwPCstsHEssDorsD0rLbByLLMJBAIDRVghGyMhWUIrsAhlsAMkUHiwARUwLQBLuADIUlixAQGOWbABuQgACABjcLEABUKyAAEAKrEABUKzCgIBCCqxAAVCsw4AAQgqsQAGQroCwAABAAkqsQAHQroAQAABAAkqsQMARLEkAYhRWLBAiFixA2REsSYBiFFYugiAAAEEQIhjVFixAwBEWVlZWbMMAgEMKrgB/4WwBI2xAgBEAAA=) format(\'truetype\');font-weight:400;font-style:normal}.ngxmdp .ngxmdpicon{font-family:ngx-mydatepicker;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.ngxmdp .icon-ngxmydpright:before{content:"\\e800"}.ngxmdp .icon-ngxmydpleft:before{content:"\\e801"}.ngxmdp .icon-ngxmydptoday:before{content:"\\e802"}.ngxmdp .icon-ngxmydpup:before{content:"\\e803"}.ngxmdp .icon-ngxmydpdown:before{content:"\\e804"}'],
                    data: {}
                });

            function p(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 5, "button", [
                    ["class", "headertodaybtn"],
                    ["type", "button"]
                ], [
                    [8, "disabled", 0]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var e = !0;
                    return "click" === n && (e = !1 !== l.component.onTodayClicked() && e), e
                }, null, null)), e["\u0275did"](1, 278528, null, 0, t.NgClass, [e.IterableDiffers, e.KeyValueDiffers, e.ElementRef, e.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), e["\u0275pod"](2, {
                    headertodaybtnenabled: 0,
                    headertodaybtndisabled: 1
                }), (l()(), e["\u0275eld"](3, 0, null, null, 0, "span", [
                    ["class", "ngxmdpicon icon-ngxmydptoday"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](4, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275ted"](5, null, ["", ""]))], function(l, n) {
                    var u = n.component;
                    l(n, 1, 0, "headertodaybtn", l(n, 2, 0, !u.disableTodayBtn, u.disableTodayBtn))
                }, function(l, n) {
                    var u = n.component;
                    l(n, 0, 0, u.disableTodayBtn), l(n, 5, 0, u.opts.todayBtnTxt)
                })
            }

            function b(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 1, "th", [
                    ["class", "weekdaytitle weekdaytitleweeknbr"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["#"]))], null, null)
            }

            function g(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 1, "th", [
                    ["class", "weekdaytitle"],
                    ["scope", "col"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](1, null, ["", ""]))], null, function(l, n) {
                    l(n, 1, 0, n.context.$implicit)
                })
            }

            function h(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 1, "td", [
                    ["class", "daycell daycellweeknbr"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](1, null, ["", ""]))], null, function(l, n) {
                    l(n, 1, 0, n.parent.context.$implicit.weekNbr)
                })
            }

            function m(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 2, "div", [
                    ["class", "markdate"]
                ], null, null, null, null, null)), e["\u0275did"](1, 278528, null, 0, t.NgStyle, [e.KeyValueDiffers, e.ElementRef, e.Renderer2], {
                    ngStyle: [0, "ngStyle"]
                }, null), e["\u0275pod"](2, {
                    "background-color": 0
                })], function(l, n) {
                    l(n, 1, 0, l(n, 2, 0, n.parent.context.$implicit.markedDate.color))
                }, null)
            }

            function v(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 11, "td", [
                    ["class", "daycell"],
                    ["tabindex", "0"]
                ], null, [
                    [null, "click"],
                    [null, "keydown"]
                ], function(l, n, u) {
                    var e = !0,
                        a = l.component;
                    return "click" === n && (!l.context.$implicit.disabled && a.onCellClicked(l.context.$implicit), e = !1 !== u.stopPropagation() && e), "keydown" === n && (e = !1 !== a.onCellKeyDown(u, l.context.$implicit) && e), e
                }, null, null)), e["\u0275did"](1, 278528, null, 0, t.NgClass, [e.IterableDiffers, e.KeyValueDiffers, e.ElementRef, e.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), e["\u0275pod"](2, {
                    currmonth: 0,
                    selectedday: 1,
                    disabled: 2,
                    tablesingleday: 3
                }), (l()(), e["\u0275and"](16777216, null, null, 1, null, m)), e["\u0275did"](4, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275eld"](5, 0, null, null, 6, "div", [
                    ["class", "datevalue"]
                ], null, null, null, null, null)), e["\u0275did"](6, 278528, null, 0, t.NgClass, [e.IterableDiffers, e.KeyValueDiffers, e.ElementRef, e.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), e["\u0275pod"](7, {
                    prevmonth: 0,
                    currmonth: 1,
                    nextmonth: 2,
                    highlight: 3
                }), (l()(), e["\u0275eld"](8, 0, null, null, 3, "span", [], null, null, null, null, null)), e["\u0275did"](9, 278528, null, 0, t.NgClass, [e.IterableDiffers, e.KeyValueDiffers, e.ElementRef, e.Renderer2], {
                    ngClass: [0, "ngClass"]
                }, null), e["\u0275pod"](10, {
                    markcurrday: 0,
                    dimday: 1
                }), (l()(), e["\u0275ted"](11, null, ["", ""]))], function(l, n) {
                    var u = n.component;
                    l(n, 1, 0, "daycell", l(n, 2, 0, n.context.$implicit.cmo === u.currMonthId && !n.context.$implicit.disabled, u.selectedDate.day === n.context.$implicit.dateObj.day && u.selectedDate.month === n.context.$implicit.dateObj.month && u.selectedDate.year === n.context.$implicit.dateObj.year && n.context.$implicit.cmo === u.currMonthId, n.context.$implicit.disabled, (!u.opts.allowSelectionOnlyInCurrentMonth || n.context.$implicit.cmo === u.currMonthId && u.opts.allowSelectionOnlyInCurrentMonth) && !n.context.$implicit.disabled)), l(n, 4, 0, n.context.$implicit.markedDate.marked), l(n, 6, 0, "datevalue", l(n, 7, 0, n.context.$implicit.cmo === u.prevMonthId, n.context.$implicit.cmo === u.currMonthId, n.context.$implicit.cmo === u.nextMonthId, n.context.$implicit.highlight)), l(n, 9, 0, l(n, 10, 0, n.context.$implicit.currDay && u.opts.markCurrentDay, n.context.$implicit.highlight && (n.context.$implicit.cmo === u.prevMonthId || n.context.$implicit.cmo === u.nextMonthId || n.context.$implicit.disabled)))
                }, function(l, n) {
                    l(n, 11, 0, n.context.$implicit.dateObj.day)
                })
            }

            function f(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 4, "tr", [], null, null, null, null, null)), (l()(), e["\u0275and"](16777216, null, null, 1, null, h)), e["\u0275did"](2, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, v)), e["\u0275did"](4, 802816, null, 0, t.NgForOf, [e.ViewContainerRef, e.TemplateRef, e.IterableDiffers], {
                    ngForOf: [0, "ngForOf"]
                }, null)], function(l, n) {
                    var u = n.component;
                    l(n, 2, 0, u.opts.showWeekNumbers && "mo" === u.opts.firstDayOfWeek), l(n, 4, 0, n.context.$implicit.week)
                }, null)
            }

            function A(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 9, "table", [
                    ["class", "caltable"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 5, "thead", [], null, null, null, null, null)), (l()(), e["\u0275eld"](2, 0, null, null, 4, "tr", [], null, null, null, null, null)), (l()(), e["\u0275and"](16777216, null, null, 1, null, b)), e["\u0275did"](4, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, g)), e["\u0275did"](6, 802816, null, 0, t.NgForOf, [e.ViewContainerRef, e.TemplateRef, e.IterableDiffers], {
                    ngForOf: [0, "ngForOf"]
                }, null), (l()(), e["\u0275eld"](7, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (l()(), e["\u0275and"](16777216, null, null, 1, null, f)), e["\u0275did"](9, 802816, null, 0, t.NgForOf, [e.ViewContainerRef, e.TemplateRef, e.IterableDiffers], {
                    ngForOf: [0, "ngForOf"]
                }, null)], function(l, n) {
                    var u = n.component;
                    l(n, 4, 0, u.opts.showWeekNumbers && "mo" === u.opts.firstDayOfWeek), l(n, 6, 0, u.weekDays), l(n, 9, 0, u.dates)
                }, null)
            }

            function w(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 6, "td", [
                    ["class", "monthcell tablesinglemonth"],
                    ["tabindex", "0"]
                ], null, [
                    [null, "click"],
                    [null, "keydown"]
                ], function(l, n, u) {
                    var e = !0,
                        a = l.component;
                    return "click" === n && (!l.context.$implicit.disabled && a.onMonthCellClicked(l.context.$implicit), e = !1 !== u.stopPropagation() && e), "keydown" === n && (e = !1 !== a.onMonthCellKeyDown(u, l.context.$implicit) && e), e
                }, null, null)), e["\u0275did"](1, 278528, null, 0, t.NgClass, [e.IterableDiffers, e.KeyValueDiffers, e.ElementRef, e.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), e["\u0275pod"](2, {
                    selectedmonth: 0,
                    disabled: 1
                }), (l()(), e["\u0275eld"](3, 0, null, null, 3, "div", [
                    ["class", "monthvalue"]
                ], null, null, null, null, null)), e["\u0275did"](4, 278528, null, 0, t.NgClass, [e.IterableDiffers, e.KeyValueDiffers, e.ElementRef, e.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), e["\u0275pod"](5, {
                    markcurrmonth: 0
                }), (l()(), e["\u0275ted"](6, null, ["", ""]))], function(l, n) {
                    var u = n.component;
                    l(n, 1, 0, "monthcell tablesinglemonth", l(n, 2, 0, n.context.$implicit.selected, n.context.$implicit.disabled)), l(n, 4, 0, "monthvalue", l(n, 5, 0, n.context.$implicit.currMonth && u.opts.markCurrentMonth))
                }, function(l, n) {
                    l(n, 6, 0, n.context.$implicit.name)
                })
            }

            function y(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 2, "tr", [], null, null, null, null, null)), (l()(), e["\u0275and"](16777216, null, null, 1, null, w)), e["\u0275did"](2, 802816, null, 0, t.NgForOf, [e.ViewContainerRef, e.TemplateRef, e.IterableDiffers], {
                    ngForOf: [0, "ngForOf"]
                }, null)], function(l, n) {
                    l(n, 2, 0, n.context.$implicit)
                }, null)
            }

            function k(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 3, "table", [
                    ["class", "monthtable"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (l()(), e["\u0275and"](16777216, null, null, 1, null, y)), e["\u0275did"](3, 802816, null, 0, t.NgForOf, [e.ViewContainerRef, e.TemplateRef, e.IterableDiffers], {
                    ngForOf: [0, "ngForOf"]
                }, null)], function(l, n) {
                    l(n, 3, 0, n.component.months)
                }, null)
            }

            function x(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 6, "td", [
                    ["class", "yearcell tablesingleyear"],
                    ["tabindex", "0"]
                ], null, [
                    [null, "click"],
                    [null, "keydown"]
                ], function(l, n, u) {
                    var e = !0,
                        a = l.component;
                    return "click" === n && (!l.context.$implicit.disabled && a.onYearCellClicked(l.context.$implicit), e = !1 !== u.stopPropagation() && e), "keydown" === n && (e = !1 !== a.onYearCellKeyDown(u, l.context.$implicit) && e), e
                }, null, null)), e["\u0275did"](1, 278528, null, 0, t.NgClass, [e.IterableDiffers, e.KeyValueDiffers, e.ElementRef, e.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), e["\u0275pod"](2, {
                    selectedyear: 0,
                    disabled: 1
                }), (l()(), e["\u0275eld"](3, 0, null, null, 3, "div", [
                    ["class", "yearvalue"]
                ], null, null, null, null, null)), e["\u0275did"](4, 278528, null, 0, t.NgClass, [e.IterableDiffers, e.KeyValueDiffers, e.ElementRef, e.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), e["\u0275pod"](5, {
                    markcurryear: 0
                }), (l()(), e["\u0275ted"](6, null, ["", ""]))], function(l, n) {
                    var u = n.component;
                    l(n, 1, 0, "yearcell tablesingleyear", l(n, 2, 0, n.context.$implicit.selected, n.context.$implicit.disabled)), l(n, 4, 0, "yearvalue", l(n, 5, 0, n.context.$implicit.currYear && u.opts.markCurrentYear))
                }, function(l, n) {
                    l(n, 6, 0, n.context.$implicit.year)
                })
            }

            function C(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 2, "tr", [], null, null, null, null, null)), (l()(), e["\u0275and"](16777216, null, null, 1, null, x)), e["\u0275did"](2, 802816, null, 0, t.NgForOf, [e.ViewContainerRef, e.TemplateRef, e.IterableDiffers], {
                    ngForOf: [0, "ngForOf"]
                }, null)], function(l, n) {
                    l(n, 2, 0, n.context.$implicit)
                }, null)
            }

            function D(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 13, "table", [
                    ["class", "yeartable"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 12, "tbody", [], null, null, null, null, null)), (l()(), e["\u0275eld"](2, 0, null, null, 4, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](3, 0, null, null, 3, "td", [
                    ["class", "yearchangebtncell"],
                    ["colspan", "5"]
                ], null, [
                    [null, "click"]
                ], function(l, n, u) {
                    var e = !0;
                    return "click" === n && (e = !1 !== u.stopPropagation() && e), e
                }, null, null)), (l()(), e["\u0275eld"](4, 0, null, null, 2, "button", [
                    ["class", "yearchangebtn ngxmdpicon icon-ngxmydpup"],
                    ["type", "button"]
                ], [
                    [8, "disabled", 0]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var e = !0,
                        a = l.component;
                    return "click" === n && (e = !1 !== a.onPrevYears(u, a.years[0][0].year) && e), e
                }, null, null)), e["\u0275did"](5, 278528, null, 0, t.NgClass, [e.IterableDiffers, e.KeyValueDiffers, e.ElementRef, e.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), e["\u0275pod"](6, {
                    yearchangebtnenabled: 0,
                    yearchangebtndisabled: 1
                }), (l()(), e["\u0275and"](16777216, null, null, 1, null, C)), e["\u0275did"](8, 802816, null, 0, t.NgForOf, [e.ViewContainerRef, e.TemplateRef, e.IterableDiffers], {
                    ngForOf: [0, "ngForOf"]
                }, null), (l()(), e["\u0275eld"](9, 0, null, null, 4, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](10, 0, null, null, 3, "td", [
                    ["class", "yearchangebtncell"],
                    ["colspan", "5"]
                ], null, [
                    [null, "click"]
                ], function(l, n, u) {
                    var e = !0;
                    return "click" === n && (e = !1 !== u.stopPropagation() && e), e
                }, null, null)), (l()(), e["\u0275eld"](11, 0, null, null, 2, "button", [
                    ["class", "yearchangebtn ngxmdpicon icon-ngxmydpdown"],
                    ["type", "button"]
                ], [
                    [8, "disabled", 0]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var e = !0,
                        a = l.component;
                    return "click" === n && (e = !1 !== a.onNextYears(u, a.years[0][0].year) && e), e
                }, null, null)), e["\u0275did"](12, 278528, null, 0, t.NgClass, [e.IterableDiffers, e.KeyValueDiffers, e.ElementRef, e.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), e["\u0275pod"](13, {
                    yearchangebtnenabled: 0,
                    yearchangebtndisabled: 1
                })], function(l, n) {
                    var u = n.component;
                    l(n, 5, 0, "yearchangebtn ngxmdpicon icon-ngxmydpup", l(n, 6, 0, !u.prevYearsDisabled, u.prevYearsDisabled)), l(n, 8, 0, u.years), l(n, 12, 0, "yearchangebtn ngxmdpicon icon-ngxmydpdown", l(n, 13, 0, !u.nextYearsDisabled, u.nextYearsDisabled))
                }, function(l, n) {
                    var u = n.component;
                    l(n, 4, 0, u.prevYearsDisabled), l(n, 11, 0, u.nextYearsDisabled)
                })
            }

            function B(l) {
                return e["\u0275vid"](0, [e["\u0275qud"](402653184, 1, {
                    selectorEl: 0
                }), (l()(), e["\u0275eld"](1, 0, null, null, 48, "div", [
                    ["class", "ngxmdp"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](2, 0, [
                    [1, 0],
                    ["selectorEl", 1]
                ], null, 47, "div", [
                    ["class", "selector"],
                    ["tabindex", "0"]
                ], null, [
                    [null, "keyup"]
                ], function(l, n, u) {
                    var e = !0;
                    return "keyup" === n && (e = !1 !== l.component.onCloseSelector(u) && e), e
                }, null, null)), e["\u0275did"](3, 278528, null, 0, t.NgClass, [e.IterableDiffers, e.KeyValueDiffers, e.ElementRef, e.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), e["\u0275pod"](4, {
                    selectorarrow: 0,
                    selectorarrowleft: 1,
                    selectorarrowright: 2
                }), e["\u0275did"](5, 278528, null, 0, t.NgStyle, [e.KeyValueDiffers, e.ElementRef, e.Renderer2], {
                    ngStyle: [0, "ngStyle"]
                }, null), e["\u0275pod"](6, {
                    width: 0,
                    height: 1,
                    top: 2,
                    left: 3
                }), e["\u0275did"](7, 4210688, null, 0, d, [e.ElementRef, e.Renderer], {
                    value: [0, "value"]
                }, null), (l()(), e["\u0275eld"](8, 0, null, null, 35, "table", [
                    ["class", "header"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](9, 0, null, null, 34, "tbody", [], null, null, null, null, null)), (l()(), e["\u0275eld"](10, 0, null, null, 33, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](11, 0, null, null, 14, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](12, 0, null, null, 13, "div", [
                    ["style", "float:left"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](13, 0, null, null, 3, "div", [
                    ["class", "headerbtncell"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](14, 0, null, null, 2, "button", [
                    ["class", "headerbtn ngxmdpicon icon-ngxmydpleft"],
                    ["type", "button"]
                ], [
                    [1, "aria-label", 0],
                    [8, "disabled", 0]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var e = !0;
                    return "click" === n && (e = !1 !== l.component.onPrevMonth() && e), e
                }, null, null)), e["\u0275did"](15, 278528, null, 0, t.NgClass, [e.IterableDiffers, e.KeyValueDiffers, e.ElementRef, e.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), e["\u0275pod"](16, {
                    headerbtnenabled: 0,
                    headerbtndisabled: 1
                }), (l()(), e["\u0275eld"](17, 0, null, null, 4, "div", [
                    ["class", "headermonthtxt"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](18, 0, null, null, 3, "button", [
                    ["class", "headerlabelbtn"],
                    ["type", "button"]
                ], [
                    [8, "tabIndex", 0]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var e = !0,
                        a = l.component;
                    return "click" === n && (e = !1 !== (a.opts.monthSelector && a.onSelectMonthClicked(u)) && e), e
                }, null, null)), e["\u0275did"](19, 278528, null, 0, t.NgClass, [e.IterableDiffers, e.KeyValueDiffers, e.ElementRef, e.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), e["\u0275pod"](20, {
                    monthlabel: 0,
                    headerlabelbtnnotedit: 1
                }), (l()(), e["\u0275ted"](21, null, ["", ""])), (l()(), e["\u0275eld"](22, 0, null, null, 3, "div", [
                    ["class", "headerbtncell"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](23, 0, null, null, 2, "button", [
                    ["class", "headerbtn ngxmdpicon icon-ngxmydpright"],
                    ["type", "button"]
                ], [
                    [1, "aria-label", 0],
                    [8, "disabled", 0]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var e = !0;
                    return "click" === n && (e = !1 !== l.component.onNextMonth() && e), e
                }, null, null)), e["\u0275did"](24, 278528, null, 0, t.NgClass, [e.IterableDiffers, e.KeyValueDiffers, e.ElementRef, e.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), e["\u0275pod"](25, {
                    headerbtnenabled: 0,
                    headerbtndisabled: 1
                }), (l()(), e["\u0275eld"](26, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275and"](16777216, null, null, 1, null, p)), e["\u0275did"](28, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275eld"](29, 0, null, null, 14, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](30, 0, null, null, 13, "div", [
                    ["style", "float:right"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](31, 0, null, null, 3, "div", [
                    ["class", "headerbtncell"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](32, 0, null, null, 2, "button", [
                    ["class", "headerbtn ngxmdpicon icon-ngxmydpleft"],
                    ["type", "button"]
                ], [
                    [1, "aria-label", 0],
                    [8, "disabled", 0]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var e = !0;
                    return "click" === n && (e = !1 !== l.component.onPrevYear() && e), e
                }, null, null)), e["\u0275did"](33, 278528, null, 0, t.NgClass, [e.IterableDiffers, e.KeyValueDiffers, e.ElementRef, e.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), e["\u0275pod"](34, {
                    headerbtnenabled: 0,
                    headerbtndisabled: 1
                }), (l()(), e["\u0275eld"](35, 0, null, null, 4, "div", [
                    ["class", "headeryeartxt"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](36, 0, null, null, 3, "button", [
                    ["class", "headerlabelbtn"],
                    ["type", "button"]
                ], [
                    [8, "tabIndex", 0]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var e = !0,
                        a = l.component;
                    return "click" === n && (e = !1 !== (a.opts.yearSelector && a.onSelectYearClicked(u)) && e), e
                }, null, null)), e["\u0275did"](37, 278528, null, 0, t.NgClass, [e.IterableDiffers, e.KeyValueDiffers, e.ElementRef, e.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), e["\u0275pod"](38, {
                    yearlabel: 0,
                    headerlabelbtnnotedit: 1
                }), (l()(), e["\u0275ted"](39, null, ["", ""])), (l()(), e["\u0275eld"](40, 0, null, null, 3, "div", [
                    ["class", "headerbtncell"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](41, 0, null, null, 2, "button", [
                    ["class", "headerbtn ngxmdpicon icon-ngxmydpright"],
                    ["type", "button"]
                ], [
                    [1, "aria-label", 0],
                    [8, "disabled", 0]
                ], [
                    [null, "click"]
                ], function(l, n, u) {
                    var e = !0;
                    return "click" === n && (e = !1 !== l.component.onNextYear() && e), e
                }, null, null)), e["\u0275did"](42, 278528, null, 0, t.NgClass, [e.IterableDiffers, e.KeyValueDiffers, e.ElementRef, e.Renderer2], {
                    klass: [0, "klass"],
                    ngClass: [1, "ngClass"]
                }, null), e["\u0275pod"](43, {
                    headerbtnenabled: 0,
                    headerbtndisabled: 1
                }), (l()(), e["\u0275and"](16777216, null, null, 1, null, A)), e["\u0275did"](45, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, k)), e["\u0275did"](47, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), e["\u0275and"](16777216, null, null, 1, null, D)), e["\u0275did"](49, 16384, null, 0, t.NgIf, [e.ViewContainerRef, e.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(l, n) {
                    var u = n.component;
                    l(n, 3, 0, "selector", l(n, 4, 0, u.opts.showSelectorArrow, u.opts.showSelectorArrow && !u.opts.alignSelectorRight, u.opts.showSelectorArrow && u.opts.alignSelectorRight)), l(n, 5, 0, l(n, 6, 0, u.opts.selectorWidth, u.opts.selectorHeight, u.selectorPos.top, u.selectorPos.left)), l(n, 7, 0, 1), l(n, 15, 0, "headerbtn ngxmdpicon icon-ngxmydpleft", l(n, 16, 0, !u.prevMonthDisabled, u.prevMonthDisabled)), l(n, 19, 0, "headerlabelbtn", l(n, 20, 0, u.opts.monthSelector, !u.opts.monthSelector)), l(n, 24, 0, "headerbtn ngxmdpicon icon-ngxmydpright", l(n, 25, 0, !u.nextMonthDisabled, u.nextMonthDisabled)), l(n, 28, 0, u.opts.showTodayBtn), l(n, 33, 0, "headerbtn ngxmdpicon icon-ngxmydpleft", l(n, 34, 0, !u.prevYearDisabled, u.prevYearDisabled)), l(n, 37, 0, "headerlabelbtn", l(n, 38, 0, u.opts.yearSelector, !u.opts.yearSelector)), l(n, 42, 0, "headerbtn ngxmdpicon icon-ngxmydpright", l(n, 43, 0, !u.nextYearDisabled, u.nextYearDisabled)), l(n, 45, 0, !u.selectMonth && !u.selectYear), l(n, 47, 0, u.selectMonth), l(n, 49, 0, u.selectYear)
                }, function(l, n) {
                    var u = n.component;
                    l(n, 14, 0, u.opts.ariaLabelPrevMonth, u.prevMonthDisabled), l(n, 18, 0, e["\u0275inlineInterpolate"](1, "", u.opts.monthSelector ? "0" : "-1", "")), l(n, 21, 0, u.visibleMonth.monthTxt), l(n, 23, 0, u.opts.ariaLabelNextMonth, u.nextMonthDisabled), l(n, 32, 0, u.opts.ariaLabelPrevYear, u.prevYearDisabled), l(n, 36, 0, e["\u0275inlineInterpolate"](1, "", u.opts.yearSelector ? "0" : "-1", "")), l(n, 39, 0, u.visibleMonth.year), l(n, 41, 0, u.opts.ariaLabelNextYear, u.nextYearDisabled)
                })
            }
            var S = e["\u0275ccf"]("ngx-my-date-picker", r, function(l) {
                    return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 2, "ngx-my-date-picker", [], null, null, null, B, c)), e["\u0275prd"](512, null, s, s, []), e["\u0275did"](2, 180224, null, 0, r, [e.ElementRef, e.Renderer, e.ChangeDetectorRef, s], null, null)], null, null)
                }, {}, {}, []),
                I = u("pMnS"),
                j = u("c+eF"),
                T = function() {
                    function l(l) {
                        this.pageTitleService = l
                    }
                    return l.prototype.ngOnInit = function() {
                        this.pageTitleService.setTitle("Buttons")
                    }, l
                }(),
                E = e["\u0275crt"]({
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

            function M(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 651, "div", [
                    ["class", "button-wrapper"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 650, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](2, 0, null, null, 280, "div", [
                    ["class", "col-lg-12 col-xl-12"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](3, 0, null, null, 178, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](4, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](5, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](6, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](7, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Predefined button styles"])), (l()(), e["\u0275eld"](9, 0, null, null, 172, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](10, 0, null, null, 24, "div", [
                    ["class", "mb-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](11, 0, null, null, 1, "span", [
                    ["class", "ui-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Default Buttons"])), (l()(), e["\u0275eld"](13, 0, null, null, 6, "p", [
                    ["class", "text-muted mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Simply use a classes "])), (l()(), e["\u0275eld"](15, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".btn "])), (l()(), e["\u0275eld"](17, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".btn-secondary"])), (l()(), e["\u0275ted"](-1, null, [" quickly create a general button "])), (l()(), e["\u0275eld"](20, 0, null, null, 14, "div", [
                    ["class", "btn-style"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](21, 0, null, null, 1, "button", [
                    ["class", "btn btn-primary mr-2 mb-3"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".btn-primary"])), (l()(), e["\u0275eld"](23, 0, null, null, 1, "button", [
                    ["class", "btn btn-secondary mr-2 mb-3"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".btn-secondary"])), (l()(), e["\u0275eld"](25, 0, null, null, 1, "button", [
                    ["class", "btn btn-success mr-2 mb-3"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".btn-sucess"])), (l()(), e["\u0275eld"](27, 0, null, null, 1, "button", [
                    ["class", "btn btn-info mr-2 mb-3"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".btn-info"])), (l()(), e["\u0275eld"](29, 0, null, null, 1, "button", [
                    ["class", "btn btn-warning mr-2 mb-3"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".btn-warning"])), (l()(), e["\u0275eld"](31, 0, null, null, 1, "button", [
                    ["class", "btn btn-danger mr-2 mb-3"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".btn-danger"])), (l()(), e["\u0275eld"](33, 0, null, null, 1, "button", [
                    ["class", "btn btn-link mr-2 mb-3"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".btn-link"])), (l()(), e["\u0275eld"](35, 0, null, null, 26, "div", [
                    ["class", "mb-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](36, 0, null, null, 1, "span", [
                    ["class", "ui-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Rounded buttons"])), (l()(), e["\u0275eld"](38, 0, null, null, 8, "p", [
                    ["class", "text-muted mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Simply use a classes "])), (l()(), e["\u0275eld"](40, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".btn"])), (l()(), e["\u0275eld"](42, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".btn-secondary"])), (l()(), e["\u0275eld"](44, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".btn-pill"])), (l()(), e["\u0275ted"](-1, null, [" and quickly create a general button "])), (l()(), e["\u0275eld"](47, 0, null, null, 14, "div", [
                    ["class", "btn-style"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](48, 0, null, null, 1, "button", [
                    ["class", "btn btn-primary btn-pill mr-2 mb-3"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".btn-primary"])), (l()(), e["\u0275eld"](50, 0, null, null, 1, "button", [
                    ["class", "btn btn-secondary btn-pill mr-2 mb-3"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".btn-secondary"])), (l()(), e["\u0275eld"](52, 0, null, null, 1, "button", [
                    ["class", "btn btn-success btn-pill mr-2 mb-3"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".btn-sucess"])), (l()(), e["\u0275eld"](54, 0, null, null, 1, "button", [
                    ["class", "btn btn-info btn-pill mr-2 mb-3"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".btn-info"])), (l()(), e["\u0275eld"](56, 0, null, null, 1, "button", [
                    ["class", "btn btn-warning btn-pill mr-2 mb-3"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".btn-warning"])), (l()(), e["\u0275eld"](58, 0, null, null, 1, "button", [
                    ["class", "btn btn-danger btn-pill mr-2 mb-3"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".btn-danger"])), (l()(), e["\u0275eld"](60, 0, null, null, 1, "button", [
                    ["class", "btn btn-link btn-pill mr-2 mb-3"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".btn-link"])), (l()(), e["\u0275eld"](62, 0, null, null, 26, "div", [
                    ["class", "mb-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](63, 0, null, null, 1, "span", [
                    ["class", "ui-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Square buttons"])), (l()(), e["\u0275eld"](65, 0, null, null, 8, "p", [
                    ["class", "text-muted mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Simply use a classes "])), (l()(), e["\u0275eld"](67, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".btn"])), (l()(), e["\u0275eld"](69, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".btn-secondary"])), (l()(), e["\u0275eld"](71, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".btn-square"])), (l()(), e["\u0275ted"](-1, null, [" and quickly create a general button "])), (l()(), e["\u0275eld"](74, 0, null, null, 14, "div", [
                    ["class", "btn-style"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](75, 0, null, null, 1, "button", [
                    ["class", "btn btn-primary btn-square mr-2 mb-3"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".btn-primary"])), (l()(), e["\u0275eld"](77, 0, null, null, 1, "button", [
                    ["class", "btn btn-secondary btn-square mr-2 mb-3"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".btn-secondary"])), (l()(), e["\u0275eld"](79, 0, null, null, 1, "button", [
                    ["class", "btn btn-success btn-square mr-2 mb-3"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".btn-sucess"])), (l()(), e["\u0275eld"](81, 0, null, null, 1, "button", [
                    ["class", "btn btn-info btn-square mr-2 mb-3"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".btn-info"])), (l()(), e["\u0275eld"](83, 0, null, null, 1, "button", [
                    ["class", "btn btn-warning btn-square mr-2 mb-3"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".btn-warning"])), (l()(), e["\u0275eld"](85, 0, null, null, 1, "button", [
                    ["class", "btn btn-danger btn-square mr-2 mb-3"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".btn-danger"])), (l()(), e["\u0275eld"](87, 0, null, null, 1, "button", [
                    ["class", "btn btn-link btn-square mr-2 mb-3"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".btn-link"])), (l()(), e["\u0275eld"](89, 0, null, null, 92, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](90, 0, null, null, 44, "div", [
                    ["class", "col-sm-12 col-md-12 col-lg-12"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](91, 0, null, null, 43, "div", [
                    ["class", "mb-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](92, 0, null, null, 1, "span", [
                    ["class", "ui-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Buttons with icon style"])), (l()(), e["\u0275eld"](94, 0, null, null, 4, "p", [
                    ["class", "text-muted mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Just add icon in "])), (l()(), e["\u0275eld"](96, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["i tag"])), (l()(), e["\u0275ted"](-1, null, [" and text in span thats it "])), (l()(), e["\u0275eld"](99, 0, null, null, 9, "div", [
                    ["class", "btn-style"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](100, 0, null, null, 2, "button", [
                    ["class", "btn btn-primary mr-2 mb-3"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](101, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-headphones"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Primary "])), (l()(), e["\u0275eld"](103, 0, null, null, 2, "button", [
                    ["class", "btn btn-success btn-pill mr-2 mb-3"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](104, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-headphones"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Primary "])), (l()(), e["\u0275eld"](106, 0, null, null, 2, "button", [
                    ["class", "btn btn-warning mr-2 mb-3"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](107, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-headphones"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Primary "])), (l()(), e["\u0275eld"](109, 0, null, null, 12, "div", [
                    ["class", "btn-style"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](110, 0, null, null, 3, "button", [
                    ["class", "btn btn-primary btn-labeled mr-2 mb-3"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](111, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), e["\u0275eld"](112, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-headphones"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Primary "])), (l()(), e["\u0275eld"](114, 0, null, null, 3, "button", [
                    ["class", "btn btn-success btn-pill btn-labeled mr-2 mb-3"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](115, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), e["\u0275eld"](116, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-headphones"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Primary "])), (l()(), e["\u0275eld"](118, 0, null, null, 3, "button", [
                    ["class", "btn btn-warning btn-labeled mr-2 mb-3"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](119, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), e["\u0275eld"](120, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-headphones"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Primary "])), (l()(), e["\u0275eld"](122, 0, null, null, 12, "div", [
                    ["class", "btn-style"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](123, 0, null, null, 3, "button", [
                    ["class", "btn btn-secondary btn-labeled mr-2 mb-3"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](124, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), e["\u0275eld"](125, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-headphones"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Primary "])), (l()(), e["\u0275eld"](127, 0, null, null, 3, "button", [
                    ["class", "btn btn-secondary btn-pill btn-labeled mr-2 mb-3"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](128, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), e["\u0275eld"](129, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-headphones"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Primary "])), (l()(), e["\u0275eld"](131, 0, null, null, 3, "button", [
                    ["class", "btn btn-secondary btn-labeled mr-2 mb-3"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](132, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), e["\u0275eld"](133, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-headphones"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Primary "])), (l()(), e["\u0275eld"](135, 0, null, null, 46, "div", [
                    ["class", "col-sm-12 col-md-12 col-lg-12"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](136, 0, null, null, 45, "div", [
                    ["class", "mb-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](137, 0, null, null, 1, "span", [
                    ["class", "ui-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Buttons with icon style"])), (l()(), e["\u0275eld"](139, 0, null, null, 4, "p", [
                    ["class", "text-muted mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Just add icon in "])), (l()(), e["\u0275eld"](141, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["i tag"])), (l()(), e["\u0275ted"](-1, null, [" and text in span thats it "])), (l()(), e["\u0275eld"](144, 0, null, null, 18, "div", [
                    ["class", "btn-style"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](145, 0, null, null, 1, "button", [
                    ["class", "btn btn-warning  mr-2 mb-3 btn-square"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](146, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-headphones"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](147, 0, null, null, 1, "button", [
                    ["class", "btn btn-primary btn-circle square-40  mr-2 mb-3"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](148, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-headphones"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](149, 0, null, null, 1, "button", [
                    ["class", "btn btn-danger  mr-2 mb-3"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](150, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-headphones"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](151, 0, null, null, 11, "div", [
                    ["class", "dropdown btn-group mr-2 mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](152, 0, null, null, 1, "button", [
                    ["class", "btn btn-info btn-square"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](153, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-gear"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](154, 0, null, null, 0, "button", [
                    ["aria-expanded", "false"],
                    ["class", "btn btn-info dropdown-toggle btn-square"],
                    ["data-toggle", "dropdown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](155, 0, null, null, 7, "div", [
                    ["class", "dropdown-menu"],
                    ["role", "menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](156, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Action"])), (l()(), e["\u0275eld"](158, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Another action"])), (l()(), e["\u0275eld"](160, 0, null, null, 0, "div", [
                    ["class", "dropdown-divider"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](161, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Separated link"])), (l()(), e["\u0275eld"](163, 0, null, null, 18, "div", [
                    ["class", "btn-style"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](164, 0, null, null, 1, "button", [
                    ["class", "btn btn-outline-warning mr-2 mb-3 btn-square"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](165, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-headphones"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](166, 0, null, null, 1, "button", [
                    ["class", "btn btn-outline-primary btn-circle square-40 mr-2 mb-3"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](167, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-headphones"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](168, 0, null, null, 1, "button", [
                    ["class", "btn btn-outline-success mr-2 mb-3"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](169, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-headphones"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](170, 0, null, null, 11, "div", [
                    ["class", "dropdown btn-group mr-2 mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](171, 0, null, null, 1, "button", [
                    ["class", "btn btn-outline-danger btn-square"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](172, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-gear"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](173, 0, null, null, 0, "button", [
                    ["aria-expanded", "false"],
                    ["class", "btn btn-outline-danger dropdown-toggle btn-square"],
                    ["data-toggle", "dropdown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](174, 0, null, null, 7, "div", [
                    ["class", "dropdown-menu"],
                    ["role", "menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](175, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Action"])), (l()(), e["\u0275eld"](177, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Another action"])), (l()(), e["\u0275eld"](179, 0, null, null, 0, "div", [
                    ["class", "dropdown-divider"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](180, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Separated link"])), (l()(), e["\u0275eld"](182, 0, null, null, 14, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](183, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](184, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](185, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](186, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Button Tags"])), (l()(), e["\u0275eld"](188, 0, null, null, 8, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](189, 0, null, null, 7, "div", [
                    ["class", "btn-style"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](190, 0, null, null, 1, "a", [
                    ["class", "btn btn-primary mr-2 mb-3 btn-square"],
                    ["href", "javascript:;"],
                    ["role", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Link"])), (l()(), e["\u0275eld"](192, 0, null, null, 1, "button", [
                    ["class", "btn btn-primary mr-2 mb-3 btn-square"],
                    ["type", "submit"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Button"])), (l()(), e["\u0275eld"](194, 0, null, null, 0, "input", [
                    ["class", "btn btn-primary mr-2 mb-3 btn-square"],
                    ["type", "button"],
                    ["value", "Input"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](195, 0, null, null, 0, "input", [
                    ["class", "btn btn-primary mr-2 mb-3 btn-square"],
                    ["type", "submit"],
                    ["value", "Submit"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](196, 0, null, null, 0, "input", [
                    ["class", "btn btn-primary mr-2 mb-3 btn-square"],
                    ["type", "reset"],
                    ["value", "Reset"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](197, 0, null, null, 28, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](198, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](199, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](200, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](201, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Outline Buttons"])), (l()(), e["\u0275eld"](203, 0, null, null, 22, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](204, 0, null, null, 6, "p", [
                    ["class", "text-muted mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Simply use a class "])), (l()(), e["\u0275eld"](206, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".btn"])), (l()(), e["\u0275eld"](208, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".btn-outline-secondary"])), (l()(), e["\u0275ted"](-1, null, [" and quickly create a rounded button."])), (l()(), e["\u0275eld"](211, 0, null, null, 14, "div", [
                    ["class", "btn-style"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](212, 0, null, null, 1, "button", [
                    ["class", "btn btn-outline-primary mr-2 mb-3"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".btn-primary"])), (l()(), e["\u0275eld"](214, 0, null, null, 1, "button", [
                    ["class", "btn btn-outline-secondary mr-2 mb-3"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".btn-secondary"])), (l()(), e["\u0275eld"](216, 0, null, null, 1, "button", [
                    ["class", "btn btn-outline-success mr-2 mb-3"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".btn-sucess"])), (l()(), e["\u0275eld"](218, 0, null, null, 1, "button", [
                    ["class", "btn btn-outline-info mr-2 mb-3"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".btn-info"])), (l()(), e["\u0275eld"](220, 0, null, null, 1, "button", [
                    ["class", "btn btn-outline-warning mr-2 mb-3"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".btn-warning"])), (l()(), e["\u0275eld"](222, 0, null, null, 1, "button", [
                    ["class", "btn btn-outline-danger mr-2 mb-3"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".btn-danger"])), (l()(), e["\u0275eld"](224, 0, null, null, 1, "button", [
                    ["class", "btn btn-link mr-2 mb-3"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".btn-link"])), (l()(), e["\u0275eld"](226, 0, null, null, 37, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](227, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](228, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](229, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](230, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Button Sizes"])), (l()(), e["\u0275eld"](232, 0, null, null, 31, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](233, 0, null, null, 8, "p", [
                    ["class", "text-muted mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Simply use a classes "])), (l()(), e["\u0275eld"](235, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".btn-lg"])), (l()(), e["\u0275eld"](237, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".btn-sm"])), (l()(), e["\u0275eld"](239, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".btn-xs"])), (l()(), e["\u0275ted"](-1, null, [" and quickly create a different size buttons. "])), (l()(), e["\u0275eld"](242, 0, null, null, 10, "div", [
                    ["class", "btn-style"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](243, 0, null, null, 9, "ul", [
                    ["class", "list-inline"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](244, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](245, 0, null, null, 1, "button", [
                    ["class", "btn btn-primary btn-lg mb-2"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Large Button"])), (l()(), e["\u0275eld"](247, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](248, 0, null, null, 1, "button", [
                    ["class", "btn btn-primary mb-2"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Medium Button"])), (l()(), e["\u0275eld"](250, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](251, 0, null, null, 1, "button", [
                    ["class", "btn btn-primary btn-sm mb-2"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Small Button"])), (l()(), e["\u0275eld"](253, 0, null, null, 10, "div", [
                    ["class", "btn-style"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](254, 0, null, null, 9, "ul", [
                    ["class", "list-inline"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](255, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](256, 0, null, null, 1, "button", [
                    ["class", "btn btn-outline-primary btn-lg mb-2"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Large Button"])), (l()(), e["\u0275eld"](258, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](259, 0, null, null, 1, "button", [
                    ["class", "btn btn-outline-primary mb-2"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Medium Button"])), (l()(), e["\u0275eld"](261, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](262, 0, null, null, 1, "button", [
                    ["class", "btn btn-outline-primary btn-sm mb-2"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Small Button"])), (l()(), e["\u0275eld"](264, 0, null, null, 18, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](265, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](266, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](267, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](268, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Predefined button styles"])), (l()(), e["\u0275eld"](270, 0, null, null, 12, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](271, 0, null, null, 1, "button", [
                    ["class", "btn btn-primary mr-2 mb-3"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Normal"])), (l()(), e["\u0275eld"](273, 0, null, null, 1, "button", [
                    ["class", "btn btn-primary mr-2 mb-3"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Hover"])), (l()(), e["\u0275eld"](275, 0, null, null, 1, "button", [
                    ["class", "btn btn-primary mr-2 mb-3"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Click"])), (l()(), e["\u0275eld"](277, 0, null, null, 1, "button", [
                    ["class", "btn btn-secondary mr-2 mb-3"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Normal"])), (l()(), e["\u0275eld"](279, 0, null, null, 1, "button", [
                    ["class", "btn btn-secondary mr-2 mb-3"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Hover"])), (l()(), e["\u0275eld"](281, 0, null, null, 1, "button", [
                    ["class", "btn btn-secondary mr-2 mb-3"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Click"])), (l()(), e["\u0275eld"](283, 0, null, null, 368, "div", [
                    ["class", "col-lg-12 col-xl-12"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](284, 0, null, null, 15, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](285, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](286, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](287, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](288, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Predefined button styles"])), (l()(), e["\u0275eld"](290, 0, null, null, 9, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](291, 0, null, null, 4, "p", [
                    ["class", "text-muted"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Simply use a class "])), (l()(), e["\u0275eld"](293, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".btn-block"])), (l()(), e["\u0275ted"](-1, null, [" and quickly create a full size button."])), (l()(), e["\u0275eld"](296, 0, null, null, 1, "button", [
                    ["class", "btn btn-primary btn-lg btn-block mb-3"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Block level button"])), (l()(), e["\u0275eld"](298, 0, null, null, 1, "button", [
                    ["class", "btn btn-secondary btn-lg btn-block mb-3"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Block level button"])), (l()(), e["\u0275eld"](300, 0, null, null, 272, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](301, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](302, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](303, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](304, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dropdown & Dropup"])), (l()(), e["\u0275eld"](306, 0, null, null, 266, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](307, 0, null, null, 188, "div", [
                    ["class", "mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](308, 0, null, null, 1, "span", [
                    ["class", "ui-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dropdown style"])), (l()(), e["\u0275eld"](310, 0, null, null, 3, "p", [
                    ["class", "text-muted"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Use a class .dropdown-toggle and also add "])), (l()(), e["\u0275eld"](312, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ['data-toggle="dropdown"'])), (l()(), e["\u0275eld"](314, 0, null, null, 78, "div", [
                    ["class", "btn-style mb-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](315, 0, null, null, 12, "div", [
                    ["class", "dropdown btn-group mr-2 mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](316, 0, null, null, 1, "button", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "btn btn-secondary dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Dropdown"])), (l()(), e["\u0275eld"](318, 0, null, null, 9, "div", [
                    ["class", "dropdown-menu"],
                    ["role", "menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](319, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Action"])), (l()(), e["\u0275eld"](321, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Another action"])), (l()(), e["\u0275eld"](323, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Something else here"])), (l()(), e["\u0275eld"](325, 0, null, null, 0, "div", [
                    ["class", "dropdown-divider"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](326, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Separated link"])), (l()(), e["\u0275eld"](328, 0, null, null, 12, "div", [
                    ["class", "dropdown btn-group mr-2 mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](329, 0, null, null, 1, "button", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "btn btn-primary dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Dropdown"])), (l()(), e["\u0275eld"](331, 0, null, null, 9, "div", [
                    ["class", "dropdown-menu"],
                    ["role", "menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](332, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Action"])), (l()(), e["\u0275eld"](334, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Another action"])), (l()(), e["\u0275eld"](336, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Something else here"])), (l()(), e["\u0275eld"](338, 0, null, null, 0, "div", [
                    ["class", "dropdown-divider"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](339, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Separated link"])), (l()(), e["\u0275eld"](341, 0, null, null, 12, "div", [
                    ["class", "dropdown btn-group mr-2 mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](342, 0, null, null, 1, "button", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "btn btn-success dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Dropdown"])), (l()(), e["\u0275eld"](344, 0, null, null, 9, "div", [
                    ["class", "dropdown-menu"],
                    ["role", "menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](345, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Action"])), (l()(), e["\u0275eld"](347, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Another action"])), (l()(), e["\u0275eld"](349, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Something else here"])), (l()(), e["\u0275eld"](351, 0, null, null, 0, "div", [
                    ["class", "dropdown-divider"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](352, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Separated link"])), (l()(), e["\u0275eld"](354, 0, null, null, 12, "div", [
                    ["class", "dropdown btn-group mr-2 mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](355, 0, null, null, 1, "button", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "btn btn-info dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Dropdown"])), (l()(), e["\u0275eld"](357, 0, null, null, 9, "div", [
                    ["class", "dropdown-menu"],
                    ["role", "menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](358, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Action"])), (l()(), e["\u0275eld"](360, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Another action"])), (l()(), e["\u0275eld"](362, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Something else here"])), (l()(), e["\u0275eld"](364, 0, null, null, 0, "div", [
                    ["class", "dropdown-divider"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](365, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Separated link"])), (l()(), e["\u0275eld"](367, 0, null, null, 12, "div", [
                    ["class", "dropdown btn-group mr-2 mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](368, 0, null, null, 1, "button", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "btn btn-danger dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Dropdown"])), (l()(), e["\u0275eld"](370, 0, null, null, 9, "div", [
                    ["class", "dropdown-menu"],
                    ["role", "menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](371, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Action"])), (l()(), e["\u0275eld"](373, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Another action"])), (l()(), e["\u0275eld"](375, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Something else here"])), (l()(), e["\u0275eld"](377, 0, null, null, 0, "div", [
                    ["class", "dropdown-divider"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](378, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Separated link"])), (l()(), e["\u0275eld"](380, 0, null, null, 12, "div", [
                    ["class", "dropdown btn-group mr-2 mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](381, 0, null, null, 1, "button", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "btn btn-warning dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Dropdown"])), (l()(), e["\u0275eld"](383, 0, null, null, 9, "div", [
                    ["class", "dropdown-menu"],
                    ["role", "menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](384, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Action"])), (l()(), e["\u0275eld"](386, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Another action"])), (l()(), e["\u0275eld"](388, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Something else here"])), (l()(), e["\u0275eld"](390, 0, null, null, 0, "div", [
                    ["class", "dropdown-divider"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](391, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Separated link"])), (l()(), e["\u0275eld"](393, 0, null, null, 1, "span", [
                    ["class", "ui-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Split button dropdowns"])), (l()(), e["\u0275eld"](395, 0, null, null, 3, "p", [
                    ["class", "text-muted"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Use a class .dropdown-toggle and also add "])), (l()(), e["\u0275eld"](397, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ['data-toggle="dropdown"'])), (l()(), e["\u0275eld"](399, 0, null, null, 96, "div", [
                    ["class", "btn-style mb-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](400, 0, null, null, 15, "div", [
                    ["class", "dropdown btn-group mr-2 mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](401, 0, null, null, 1, "button", [
                    ["class", "btn btn-secondary"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dropdown"])), (l()(), e["\u0275eld"](403, 0, null, null, 2, "button", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "btn btn-secondary dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](404, 0, null, null, 1, "span", [
                    ["class", "sr-only"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Toggle Dropdown"])), (l()(), e["\u0275eld"](406, 0, null, null, 9, "div", [
                    ["class", "dropdown-menu"],
                    ["role", "menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](407, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Action"])), (l()(), e["\u0275eld"](409, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Another action"])), (l()(), e["\u0275eld"](411, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Something else here"])), (l()(), e["\u0275eld"](413, 0, null, null, 0, "div", [
                    ["class", "dropdown-divider"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](414, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Separated link"])), (l()(), e["\u0275eld"](416, 0, null, null, 15, "div", [
                    ["class", "dropdown btn-group mr-2 mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](417, 0, null, null, 1, "button", [
                    ["class", "btn btn-primary"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dropdown"])), (l()(), e["\u0275eld"](419, 0, null, null, 2, "button", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "btn btn-primary dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](420, 0, null, null, 1, "span", [
                    ["class", "sr-only"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Toggle Dropdown"])), (l()(), e["\u0275eld"](422, 0, null, null, 9, "div", [
                    ["class", "dropdown-menu"],
                    ["role", "menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](423, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Action"])), (l()(), e["\u0275eld"](425, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Another action"])), (l()(), e["\u0275eld"](427, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Something else here"])), (l()(), e["\u0275eld"](429, 0, null, null, 0, "div", [
                    ["class", "dropdown-divider"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](430, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Separated link"])), (l()(), e["\u0275eld"](432, 0, null, null, 15, "div", [
                    ["class", "dropdown btn-group mr-2 mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](433, 0, null, null, 1, "button", [
                    ["class", "btn btn-success"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dropdown"])), (l()(), e["\u0275eld"](435, 0, null, null, 2, "button", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "btn btn-success dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](436, 0, null, null, 1, "span", [
                    ["class", "sr-only"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Toggle Dropdown"])), (l()(), e["\u0275eld"](438, 0, null, null, 9, "div", [
                    ["class", "dropdown-menu"],
                    ["role", "menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](439, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Action"])), (l()(), e["\u0275eld"](441, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Another action"])), (l()(), e["\u0275eld"](443, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Something else here"])), (l()(), e["\u0275eld"](445, 0, null, null, 0, "div", [
                    ["class", "dropdown-divider"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](446, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Separated link"])), (l()(), e["\u0275eld"](448, 0, null, null, 15, "div", [
                    ["class", "dropdown btn-group mr-2 mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](449, 0, null, null, 1, "button", [
                    ["class", "btn btn-info"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dropdown"])), (l()(), e["\u0275eld"](451, 0, null, null, 2, "button", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "btn btn-info dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](452, 0, null, null, 1, "span", [
                    ["class", "sr-only"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Toggle Dropdown"])), (l()(), e["\u0275eld"](454, 0, null, null, 9, "div", [
                    ["class", "dropdown-menu"],
                    ["role", "menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](455, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Action"])), (l()(), e["\u0275eld"](457, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Another action"])), (l()(), e["\u0275eld"](459, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Something else here"])), (l()(), e["\u0275eld"](461, 0, null, null, 0, "div", [
                    ["class", "dropdown-divider"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](462, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Separated link"])), (l()(), e["\u0275eld"](464, 0, null, null, 15, "div", [
                    ["class", "dropdown btn-group mr-2 mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](465, 0, null, null, 1, "button", [
                    ["class", "btn btn-danger"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dropdown"])), (l()(), e["\u0275eld"](467, 0, null, null, 2, "button", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "btn btn-danger dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](468, 0, null, null, 1, "span", [
                    ["class", "sr-only"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Toggle Dropdown"])), (l()(), e["\u0275eld"](470, 0, null, null, 9, "div", [
                    ["class", "dropdown-menu"],
                    ["role", "menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](471, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Action"])), (l()(), e["\u0275eld"](473, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Another action"])), (l()(), e["\u0275eld"](475, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Something else here"])), (l()(), e["\u0275eld"](477, 0, null, null, 0, "div", [
                    ["class", "dropdown-divider"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](478, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Separated link"])), (l()(), e["\u0275eld"](480, 0, null, null, 15, "div", [
                    ["class", "dropdown btn-group mr-2 mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](481, 0, null, null, 1, "button", [
                    ["class", "btn btn-warning"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dropdown"])), (l()(), e["\u0275eld"](483, 0, null, null, 2, "button", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "btn btn-warning dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](484, 0, null, null, 1, "span", [
                    ["class", "sr-only"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Toggle Dropdown"])), (l()(), e["\u0275eld"](486, 0, null, null, 9, "div", [
                    ["class", "dropdown-menu"],
                    ["role", "menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](487, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Action"])), (l()(), e["\u0275eld"](489, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Another action"])), (l()(), e["\u0275eld"](491, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Something else here"])), (l()(), e["\u0275eld"](493, 0, null, null, 0, "div", [
                    ["class", "dropdown-divider"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](494, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Separated link"])), (l()(), e["\u0275eld"](496, 0, null, null, 76, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](497, 0, null, null, 46, "div", [
                    ["class", "col-lg-12 col-xl-12 mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](498, 0, null, null, 1, "span", [
                    ["class", "ui-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dropdown style"])), (l()(), e["\u0275eld"](500, 0, null, null, 3, "p", [
                    ["class", "text-muted mrgn-b-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Use a class .dropdown-toggle and also add "])), (l()(), e["\u0275eld"](502, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ['data-toggle="dropdown"'])), (l()(), e["\u0275eld"](504, 0, null, null, 39, "div", [
                    ["class", "btn-style"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](505, 0, null, null, 12, "div", [
                    ["class", "dropdown btn-group d-block mr-2 mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](506, 0, null, null, 1, "button", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "btn btn-secondary btn-lg dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Large button"])), (l()(), e["\u0275eld"](508, 0, null, null, 9, "div", [
                    ["class", "dropdown-menu"],
                    ["role", "menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](509, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Action"])), (l()(), e["\u0275eld"](511, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Another action"])), (l()(), e["\u0275eld"](513, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Something else here"])), (l()(), e["\u0275eld"](515, 0, null, null, 0, "div", [
                    ["class", "dropdown-divider"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](516, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Separated link"])), (l()(), e["\u0275eld"](518, 0, null, null, 12, "div", [
                    ["class", "dropdown btn-group d-block mr-2 mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](519, 0, null, null, 1, "button", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "btn btn-secondary dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Medium button"])), (l()(), e["\u0275eld"](521, 0, null, null, 9, "div", [
                    ["class", "dropdown-menu"],
                    ["role", "menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](522, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Action"])), (l()(), e["\u0275eld"](524, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Another action"])), (l()(), e["\u0275eld"](526, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Something else here"])), (l()(), e["\u0275eld"](528, 0, null, null, 0, "div", [
                    ["class", "dropdown-divider"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](529, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Separated link"])), (l()(), e["\u0275eld"](531, 0, null, null, 12, "div", [
                    ["class", "dropdown btn-group d-block mr-2 mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](532, 0, null, null, 1, "button", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "btn btn-secondary btn-sm dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Small button"])), (l()(), e["\u0275eld"](534, 0, null, null, 9, "div", [
                    ["class", "dropdown-menu"],
                    ["role", "menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](535, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Action"])), (l()(), e["\u0275eld"](537, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Another action"])), (l()(), e["\u0275eld"](539, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Something else here"])), (l()(), e["\u0275eld"](541, 0, null, null, 0, "div", [
                    ["class", "dropdown-divider"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](542, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Separated link"])), (l()(), e["\u0275eld"](544, 0, null, null, 28, "div", [
                    ["class", "col-lg-12 col-xl-12 mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](545, 0, null, null, 1, "span", [
                    ["class", "ui-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Button Groups"])), (l()(), e["\u0275eld"](547, 0, null, null, 3, "p", [
                    ["class", "text-muted mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Use a class "])), (l()(), e["\u0275eld"](549, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".btn-group-justified"])), (l()(), e["\u0275eld"](551, 0, null, null, 21, "div", [
                    ["class", "btn-style"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](552, 0, null, null, 6, "div", [
                    ["aria-label", "Large button group"],
                    ["class", "btn-group btn-group-lg mr-2 mb-3"],
                    ["role", "group"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](553, 0, null, null, 1, "button", [
                    ["class", "btn btn-secondary"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Left"])), (l()(), e["\u0275eld"](555, 0, null, null, 1, "button", [
                    ["class", "btn btn-secondary"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Middle"])), (l()(), e["\u0275eld"](557, 0, null, null, 1, "button", [
                    ["class", "btn btn-secondary"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Right"])), (l()(), e["\u0275eld"](559, 0, null, null, 6, "div", [
                    ["aria-label", "Large button group"],
                    ["class", "btn-group mr-2 mb-3"],
                    ["role", "group"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](560, 0, null, null, 1, "button", [
                    ["class", "btn btn-secondary"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Left"])), (l()(), e["\u0275eld"](562, 0, null, null, 1, "button", [
                    ["class", "btn btn-secondary"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Middle"])), (l()(), e["\u0275eld"](564, 0, null, null, 1, "button", [
                    ["class", "btn btn-secondary"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Right"])), (l()(), e["\u0275eld"](566, 0, null, null, 6, "div", [
                    ["aria-label", "Large button group"],
                    ["class", "btn-group btn-group-sm mr-2 mb-3"],
                    ["role", "group"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](567, 0, null, null, 1, "button", [
                    ["class", "btn btn-secondary"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Left"])), (l()(), e["\u0275eld"](569, 0, null, null, 1, "button", [
                    ["class", "btn btn-secondary"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Middle"])), (l()(), e["\u0275eld"](571, 0, null, null, 1, "button", [
                    ["class", "btn btn-secondary"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Right"])), (l()(), e["\u0275eld"](573, 0, null, null, 78, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](574, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](575, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](576, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](577, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Additional Options"])), (l()(), e["\u0275eld"](579, 0, null, null, 72, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](580, 0, null, null, 36, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](581, 0, null, null, 18, "div", [
                    ["class", "col-sm-12 col-md-12 col-lg-12"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](582, 0, null, null, 17, "div", [
                    ["class", "mb-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](583, 0, null, null, 1, "span", [
                    ["class", "ui-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Button Toolbar"])), (l()(), e["\u0275eld"](585, 0, null, null, 14, "div", [
                    ["aria-label", "Toolbar with button groups"],
                    ["class", "btn-toolbar"],
                    ["role", "toolbar"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](586, 0, null, null, 8, "div", [
                    ["aria-label", "First group"],
                    ["class", "btn-group mr-2"],
                    ["role", "group"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](587, 0, null, null, 1, "button", [
                    ["class", "btn btn-secondary"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["1"])), (l()(), e["\u0275eld"](589, 0, null, null, 1, "button", [
                    ["class", "btn btn-secondary"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["2"])), (l()(), e["\u0275eld"](591, 0, null, null, 1, "button", [
                    ["class", "btn btn-secondary"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["3"])), (l()(), e["\u0275eld"](593, 0, null, null, 1, "button", [
                    ["class", "btn btn-secondary"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["4"])), (l()(), e["\u0275eld"](595, 0, null, null, 4, "div", [
                    ["aria-label", "Second group"],
                    ["class", "btn-group mr-2"],
                    ["role", "group"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](596, 0, null, null, 1, "button", [
                    ["class", "btn btn-secondary"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["5"])), (l()(), e["\u0275eld"](598, 0, null, null, 1, "button", [
                    ["class", "btn btn-secondary"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["6"])), (l()(), e["\u0275eld"](600, 0, null, null, 16, "div", [
                    ["class", "col-sm-12 col-md-12 col-lg-6"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](601, 0, null, null, 15, "div", [
                    ["class", "mb-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](602, 0, null, null, 1, "span", [
                    ["class", "ui-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Button group nesting"])), (l()(), e["\u0275eld"](604, 0, null, null, 12, "div", [
                    ["aria-label", "..."],
                    ["class", "dropdown btn-group"],
                    ["role", "group"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](605, 0, null, null, 1, "button", [
                    ["class", "btn btn-primary"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["1"])), (l()(), e["\u0275eld"](607, 0, null, null, 1, "button", [
                    ["class", "btn btn-primary"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["2"])), (l()(), e["\u0275eld"](609, 0, null, null, 7, "div", [
                    ["class", "btn-group"],
                    ["role", "group"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](610, 0, null, null, 1, "button", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "btn btn-primary dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Dropdown"])), (l()(), e["\u0275eld"](612, 0, null, null, 4, "div", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](613, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dropdown link"])), (l()(), e["\u0275eld"](615, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dropdown link"])), (l()(), e["\u0275eld"](617, 0, null, null, 28, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](618, 0, null, null, 13, "div", [
                    ["class", "col-sm-12 col-md-12 col-lg-6"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](619, 0, null, null, 12, "div", [
                    ["class", "mb-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](620, 0, null, null, 1, "span", [
                    ["class", "ui-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Radio button group"])), (l()(), e["\u0275eld"](622, 0, null, null, 9, "div", [
                    ["class", "btn-group"],
                    ["data-toggle", "buttons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](623, 0, null, null, 2, "label", [
                    ["class", "btn btn-primary"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](624, 0, null, null, 0, "input", [
                    ["id", "option1"],
                    ["name", "options"],
                    ["type", "radio"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Option 1 "])), (l()(), e["\u0275eld"](626, 0, null, null, 2, "label", [
                    ["class", "btn btn-primary active"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](627, 0, null, null, 0, "input", [
                    ["id", "option2"],
                    ["name", "options"],
                    ["type", "radio"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Option 2 "])), (l()(), e["\u0275eld"](629, 0, null, null, 2, "label", [
                    ["class", "btn btn-primary"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](630, 0, null, null, 0, "input", [
                    ["id", "option3"],
                    ["name", "options"],
                    ["type", "radio"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Option 3 "])), (l()(), e["\u0275eld"](632, 0, null, null, 13, "div", [
                    ["class", "col-sm-12 col-md-12 col-lg-6"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](633, 0, null, null, 12, "div", [
                    ["class", "mb-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](634, 0, null, null, 1, "span", [
                    ["class", "ui-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Checkbox button group"])), (l()(), e["\u0275eld"](636, 0, null, null, 9, "div", [
                    ["class", "btn-group"],
                    ["data-toggle", "buttons"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](637, 0, null, null, 2, "label", [
                    ["class", "btn btn-primary"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](638, 0, null, null, 0, "input", [
                    ["type", "checkbox"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Option 1 "])), (l()(), e["\u0275eld"](640, 0, null, null, 2, "label", [
                    ["class", "btn btn-primary"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](641, 0, null, null, 0, "input", [
                    ["type", "checkbox"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Option 2 "])), (l()(), e["\u0275eld"](643, 0, null, null, 2, "label", [
                    ["class", "btn btn-primary"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](644, 0, null, null, 0, "input", [
                    ["type", "checkbox"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Option 3 "])), (l()(), e["\u0275eld"](646, 0, null, null, 5, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](647, 0, null, null, 4, "div", [
                    ["class", "col-sm-12 col-md-12 col-lg-12"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](648, 0, null, null, 1, "span", [
                    ["class", "ui-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Single toggle button"])), (l()(), e["\u0275eld"](650, 0, null, null, 1, "button", [
                    ["aria-pressed", "false"],
                    ["autocomplete", "off"],
                    ["class", "btn btn-warning"],
                    ["data-toggle", "button"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Single toggle "]))], null, null)
            }
            var F = e["\u0275ccf"]("ms-buttons", T, function(l) {
                    return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 1, "ms-buttons", [], [
                        [40, "@fadeInAnimation", 0]
                    ], null, null, M, E)), e["\u0275did"](1, 114688, null, 0, T, [j.a], null, null)], function(l, n) {
                        l(n, 1, 0)
                    }, function(l, n) {
                        l(n, 0, 0, !0)
                    })
                }, {}, {}, []),
                R = function() {
                    function l(l) {
                        this.pageTitleService = l
                    }
                    return l.prototype.ngOnInit = function() {
                        this.pageTitleService.setTitle("Progress Bar")
                    }, l
                }(),
                Q = e["\u0275crt"]({
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

            function Y(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 251, "div", [
                    ["class", "progressbar-wrapper"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 250, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](2, 0, null, null, 146, "div", [
                    ["class", "col-lg-12 col-xl-6"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](3, 0, null, null, 23, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](4, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](5, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](6, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](7, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Simple Progress bar"])), (l()(), e["\u0275eld"](9, 0, null, null, 17, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](10, 0, null, null, 6, "p", [
                    ["class", "text-muted mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Simply use a classes "])), (l()(), e["\u0275eld"](12, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".progress"])), (l()(), e["\u0275eld"](14, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".progress-bar"])), (l()(), e["\u0275ted"](-1, null, [" and create a progress bar. "])), (l()(), e["\u0275eld"](17, 0, null, null, 1, "div", [
                    ["class", "progress"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](18, 0, null, null, 0, "div", [
                    ["aria-valuemax", "100"],
                    ["aria-valuemin", "0"],
                    ["aria-valuenow", "0"],
                    ["class", "progress-bar"],
                    ["role", "progressbar"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](19, 0, null, null, 1, "div", [
                    ["class", "progress"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](20, 0, null, null, 0, "div", [
                    ["aria-valuemax", "100"],
                    ["aria-valuemin", "0"],
                    ["aria-valuenow", "25"],
                    ["class", "progress-bar"],
                    ["role", "progressbar"],
                    ["style", "width: 25%"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](21, 0, null, null, 1, "div", [
                    ["class", "progress"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](22, 0, null, null, 0, "div", [
                    ["aria-valuemax", "100"],
                    ["aria-valuemin", "0"],
                    ["aria-valuenow", "50"],
                    ["class", "progress-bar"],
                    ["role", "progressbar"],
                    ["style", "width: 50%"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](23, 0, null, null, 1, "div", [
                    ["class", "progress"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](24, 0, null, null, 0, "div", [
                    ["aria-valuemax", "100"],
                    ["aria-valuemin", "0"],
                    ["aria-valuenow", "75"],
                    ["class", "progress-bar"],
                    ["role", "progressbar"],
                    ["style", "width: 75%"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](25, 0, null, null, 1, "div", [
                    ["class", "progress"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](26, 0, null, null, 0, "div", [
                    ["aria-valuemax", "100"],
                    ["aria-valuemin", "0"],
                    ["aria-valuenow", "100"],
                    ["class", "progress-bar"],
                    ["role", "progressbar"],
                    ["style", "width: 100%"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](27, 0, null, null, 25, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](28, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](29, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](30, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](31, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Colored Progress bars"])), (l()(), e["\u0275eld"](33, 0, null, null, 19, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](34, 0, null, null, 8, "p", [
                    ["class", "text-muted mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Simply use a classes "])), (l()(), e["\u0275eld"](36, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".progress"])), (l()(), e["\u0275eld"](38, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".progress-bar"])), (l()(), e["\u0275eld"](40, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".bg-success"])), (l()(), e["\u0275ted"](-1, null, [" and create a progress bar. "])), (l()(), e["\u0275eld"](43, 0, null, null, 1, "div", [
                    ["class", "progress"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](44, 0, null, null, 0, "div", [
                    ["aria-valuemax", "100"],
                    ["aria-valuemin", "0"],
                    ["aria-valuenow", "55"],
                    ["class", "progress-bar"],
                    ["role", "progressbar"],
                    ["style", "width: 55%;"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](45, 0, null, null, 1, "div", [
                    ["class", "progress"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](46, 0, null, null, 0, "div", [
                    ["aria-valuemax", "100"],
                    ["aria-valuemin", "0"],
                    ["aria-valuenow", "30"],
                    ["class", "progress-bar bg-warning"],
                    ["role", "progressbar"],
                    ["style", "width: 30%;"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](47, 0, null, null, 1, "div", [
                    ["class", "progress"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](48, 0, null, null, 0, "div", [
                    ["aria-valuemax", "100"],
                    ["aria-valuemin", "0"],
                    ["aria-valuenow", "50"],
                    ["class", "progress-bar bg-success"],
                    ["role", "progressbar"],
                    ["style", "width: 50%;"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](49, 0, null, null, 1, "div", [
                    ["class", "progress"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](50, 0, null, null, 0, "div", [
                    ["aria-valuemax", "100"],
                    ["aria-valuemin", "0"],
                    ["aria-valuenow", "75"],
                    ["class", "progress-bar bg-danger"],
                    ["role", "progressbar"],
                    ["style", "width: 75%;"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](51, 0, null, null, 1, "div", [
                    ["class", "progress"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](52, 0, null, null, 0, "div", [
                    ["aria-valuemax", "100"],
                    ["aria-valuemin", "0"],
                    ["aria-valuenow", "95"],
                    ["class", "progress-bar bg-info"],
                    ["role", "progressbar"],
                    ["style", "width: 95%;"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](53, 0, null, null, 21, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](54, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](55, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](56, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](57, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Animated progress bar"])), (l()(), e["\u0275eld"](59, 0, null, null, 15, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](60, 0, null, null, 8, "p", [
                    ["class", "text-muted mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Simply use a classes "])), (l()(), e["\u0275eld"](62, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".progress"])), (l()(), e["\u0275eld"](64, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".progress-bar"])), (l()(), e["\u0275eld"](66, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".gradient-animate"])), (l()(), e["\u0275ted"](-1, null, [" and create a progress bar. "])), (l()(), e["\u0275eld"](69, 0, null, null, 1, "div", [
                    ["class", "progress"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](70, 0, null, null, 0, "div", [
                    ["aria-valuemax", "100"],
                    ["aria-valuemin", "0"],
                    ["aria-valuenow", "75"],
                    ["class", "progress-bar progress-gradient-success gradient-animate"],
                    ["role", "progressbar"],
                    ["style", "width: 65%;"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](71, 0, null, null, 1, "div", [
                    ["class", "progress"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](72, 0, null, null, 0, "div", [
                    ["aria-valuemax", "100"],
                    ["aria-valuemin", "0"],
                    ["aria-valuenow", "75"],
                    ["class", "progress-bar progress-gradient-danger gradient-animate"],
                    ["role", "progressbar"],
                    ["style", "width: 75%;"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](73, 0, null, null, 1, "div", [
                    ["class", "progress"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](74, 0, null, null, 0, "div", [
                    ["aria-valuemax", "100"],
                    ["aria-valuemin", "0"],
                    ["aria-valuenow", "75"],
                    ["class", "progress-bar progress-gradient-green gradient-animate"],
                    ["role", "progressbar"],
                    ["style", "width: 95%;"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](75, 0, null, null, 16, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](76, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](77, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](78, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](79, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Stacked Bars"])), (l()(), e["\u0275eld"](81, 0, null, null, 10, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](82, 0, null, null, 9, "div", [
                    ["class", "progress"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](83, 0, null, null, 2, "div", [
                    ["class", "progress-bar bg-warning"],
                    ["style", "width: 25%"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](84, 0, null, null, 1, "span", [
                    ["class", "sr-only"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["25% Complete (success)"])), (l()(), e["\u0275eld"](86, 0, null, null, 2, "div", [
                    ["class", "progress-bar"],
                    ["style", "width: 40%"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](87, 0, null, null, 1, "span", [
                    ["class", "sr-only"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["40% Complete (warning)"])), (l()(), e["\u0275eld"](89, 0, null, null, 2, "div", [
                    ["class", "progress-bar bg-success"],
                    ["style", "width: 20%"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](90, 0, null, null, 1, "span", [
                    ["class", "sr-only"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["20% Complete (danger)"])), (l()(), e["\u0275eld"](92, 0, null, null, 25, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](93, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](94, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](95, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](96, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["With label"])), (l()(), e["\u0275eld"](98, 0, null, null, 19, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](99, 0, null, null, 1, "span", [
                    ["class", "ui-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Filled Percentage"])), (l()(), e["\u0275eld"](101, 0, null, null, 2, "div", [
                    ["class", "progress"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](102, 0, null, null, 1, "div", [
                    ["aria-valuemax", "100"],
                    ["aria-valuemin", "0"],
                    ["aria-valuenow", "78"],
                    ["class", "progress-bar bg-warning"],
                    ["role", "progressbar"],
                    ["style", "width: 78%;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["78%"])), (l()(), e["\u0275eld"](104, 0, null, null, 1, "span", [
                    ["class", "ui-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Filled Custom Text"])), (l()(), e["\u0275eld"](106, 0, null, null, 2, "div", [
                    ["class", "progress"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](107, 0, null, null, 1, "div", [
                    ["aria-valuemax", "100"],
                    ["aria-valuemin", "0"],
                    ["aria-valuenow", "78"],
                    ["class", "progress-bar"],
                    ["role", "progressbar"],
                    ["style", "width: 78%;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["78% Complete "])), (l()(), e["\u0275eld"](109, 0, null, null, 1, "span", [
                    ["class", "ui-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Skill progress bar"])), (l()(), e["\u0275eld"](111, 0, null, null, 4, "div", [
                    ["class", "d-flex justify-content-between mb-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](112, 0, null, null, 1, "span", [
                    ["class", "d-flex align-self-start"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Photoshop"])), (l()(), e["\u0275eld"](114, 0, null, null, 1, "span", [
                    ["class", "d-flex align-self-end"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["70%"])), (l()(), e["\u0275eld"](116, 0, null, null, 1, "div", [
                    ["class", "progress"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](117, 0, null, null, 0, "div", [
                    ["aria-valuemax", "100"],
                    ["aria-valuemin", "0"],
                    ["aria-valuenow", "78"],
                    ["class", "progress-bar bg-success"],
                    ["role", "progressbar"],
                    ["style", "width: 70%;"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](118, 0, null, null, 30, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](119, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](120, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](121, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](122, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Customize bootstrap progress bar"])), (l()(), e["\u0275eld"](124, 0, null, null, 24, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](125, 0, null, null, 4, "div", [
                    ["class", "alert alert-info"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](126, 0, null, null, 3, "p", [
                    ["class", "m-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["If you want to see reference link for more info please check out "])), (l()(), e["\u0275eld"](128, 0, null, null, 1, "a", [
                    ["class", "btn btn-danger btn-sm"],
                    ["href", "http://codepen.io/CSWApps/pen/LVqqYL"],
                    ["target", "_blank"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Click Me"])), (l()(), e["\u0275eld"](130, 0, null, null, 6, "p", [
                    ["class", "text-muted mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Make sure wrap your text percentage with a "])), (l()(), e["\u0275eld"](132, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["<span>"])), (l()(), e["\u0275ted"](-1, null, [" tag like so: "])), (l()(), e["\u0275eld"](135, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["<span>25%</span>"])), (l()(), e["\u0275eld"](137, 0, null, null, 3, "div", [
                    ["class", "progress over-visible mb-4"],
                    ["style", "height: 5px"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](138, 0, null, null, 2, "div", [
                    ["aria-valuemax", "100"],
                    ["aria-valuemin", "0"],
                    ["aria-valuenow", "0"],
                    ["class", "progress-bar customize-progress-bar"],
                    ["role", "progressbar"],
                    ["style", "width: 1%"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](139, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["1%"])), (l()(), e["\u0275eld"](141, 0, null, null, 3, "div", [
                    ["class", "progress over-visible mb-4"],
                    ["style", "height: 5px"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](142, 0, null, null, 2, "div", [
                    ["aria-valuemax", "100"],
                    ["aria-valuemin", "0"],
                    ["aria-valuenow", "50"],
                    ["class", "progress-bar customize-progress-bar"],
                    ["role", "progressbar"],
                    ["style", "width: 50%"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](143, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["50%"])), (l()(), e["\u0275eld"](145, 0, null, null, 3, "div", [
                    ["class", "progress over-visible mb-4"],
                    ["style", "height: 5px"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](146, 0, null, null, 2, "div", [
                    ["aria-valuemax", "100"],
                    ["aria-valuemin", "0"],
                    ["aria-valuenow", "100"],
                    ["class", "progress-bar customize-progress-bar"],
                    ["role", "progressbar"],
                    ["style", "width: 100%"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](147, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["100%"])), (l()(), e["\u0275eld"](149, 0, null, null, 102, "div", [
                    ["class", "col-lg-12 col-xl-6"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](150, 0, null, null, 23, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](151, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](152, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](153, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](154, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Sizing progress bar"])), (l()(), e["\u0275eld"](156, 0, null, null, 17, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](157, 0, null, null, 8, "p", [
                    ["class", "text-muted mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Simply use a classes "])), (l()(), e["\u0275eld"](159, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".progress"])), (l()(), e["\u0275eld"](161, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".progress-bar"])), (l()(), e["\u0275eld"](163, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["height:5px"])), (l()(), e["\u0275ted"](-1, null, [" and create a progress bar. "])), (l()(), e["\u0275eld"](166, 0, null, null, 1, "div", [
                    ["class", "progress"],
                    ["style", "height: 5px"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](167, 0, null, null, 0, "div", [
                    ["aria-valuemax", "100"],
                    ["aria-valuemin", "0"],
                    ["aria-valuenow", "90"],
                    ["class", "progress-bar"],
                    ["role", "progressbar"],
                    ["style", "width: 90%"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](168, 0, null, null, 1, "div", [
                    ["class", "progress"],
                    ["style", "height: 8px"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](169, 0, null, null, 0, "div", [
                    ["aria-valuemax", "100"],
                    ["aria-valuemin", "0"],
                    ["aria-valuenow", "60"],
                    ["class", "progress-bar"],
                    ["role", "progressbar"],
                    ["style", "width: 60%"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](170, 0, null, null, 1, "div", [
                    ["class", "progress"],
                    ["style", "height: 12px"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](171, 0, null, null, 0, "div", [
                    ["aria-valuemax", "100"],
                    ["aria-valuemin", "0"],
                    ["aria-valuenow", "80"],
                    ["class", "progress-bar"],
                    ["role", "progressbar"],
                    ["style", "width: 80%"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](172, 0, null, null, 1, "div", [
                    ["class", "progress"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](173, 0, null, null, 0, "div", [
                    ["aria-valuemax", "100"],
                    ["aria-valuemin", "0"],
                    ["aria-valuenow", "40"],
                    ["class", "progress-bar"],
                    ["role", "progressbar"],
                    ["style", "width: 40%"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](174, 0, null, null, 27, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](175, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](176, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](177, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](178, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Striped progress bar"])), (l()(), e["\u0275eld"](180, 0, null, null, 21, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](181, 0, null, null, 10, "p", [
                    ["class", "text-muted mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Simply use a classes "])), (l()(), e["\u0275eld"](183, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".progress"])), (l()(), e["\u0275eld"](185, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".progress-bar"])), (l()(), e["\u0275eld"](187, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".progress-bar-striped"])), (l()(), e["\u0275eld"](189, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".progress-bar-animated"])), (l()(), e["\u0275ted"](-1, null, [" and create a progress bar. "])), (l()(), e["\u0275eld"](192, 0, null, null, 1, "div", [
                    ["class", "progress"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](193, 0, null, null, 0, "div", [
                    ["aria-valuemax", "100"],
                    ["aria-valuemin", "0"],
                    ["aria-valuenow", "10"],
                    ["class", "progress-bar progress-bar-striped progress-bar-animated"],
                    ["role", "progressbar"],
                    ["style", "width: 10%"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](194, 0, null, null, 1, "div", [
                    ["class", "progress"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](195, 0, null, null, 0, "div", [
                    ["aria-valuemax", "100"],
                    ["aria-valuemin", "0"],
                    ["aria-valuenow", "25"],
                    ["class", "progress-bar progress-bar-striped bg-success progress-bar-animated"],
                    ["role", "progressbar"],
                    ["style", "width: 25%"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](196, 0, null, null, 1, "div", [
                    ["class", "progress"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](197, 0, null, null, 0, "div", [
                    ["aria-valuemax", "100"],
                    ["aria-valuemin", "0"],
                    ["aria-valuenow", "50"],
                    ["class", "progress-bar progress-bar-striped bg-info progress-bar-animated"],
                    ["role", "progressbar"],
                    ["style", "width: 50%"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](198, 0, null, null, 1, "div", [
                    ["class", "progress"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](199, 0, null, null, 0, "div", [
                    ["aria-valuemax", "100"],
                    ["aria-valuemin", "0"],
                    ["aria-valuenow", "75"],
                    ["class", "progress-bar progress-bar-striped bg-warning progress-bar-animated"],
                    ["role", "progressbar"],
                    ["style", "width: 75%"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](200, 0, null, null, 1, "div", [
                    ["class", "progress"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](201, 0, null, null, 0, "div", [
                    ["aria-valuemax", "100"],
                    ["aria-valuemin", "0"],
                    ["aria-valuenow", "100"],
                    ["class", "progress-bar progress-bar-striped bg-danger progress-bar-animated"],
                    ["role", "progressbar"],
                    ["style", "width: 100%"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](202, 0, null, null, 14, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](203, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](204, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](205, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](206, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Square & Rounded"])), (l()(), e["\u0275eld"](208, 0, null, null, 8, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](209, 0, null, null, 1, "div", [
                    ["class", "progress progress-square"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](210, 0, null, null, 0, "div", [
                    ["aria-valuemax", "100"],
                    ["aria-valuemin", "0"],
                    ["aria-valuenow", "30"],
                    ["class", "progress-bar bg-warning"],
                    ["role", "progressbar"],
                    ["style", "width: 30%;"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](211, 0, null, null, 1, "div", [
                    ["class", "progress"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](212, 0, null, null, 0, "div", [
                    ["aria-valuemax", "100"],
                    ["aria-valuemin", "0"],
                    ["aria-valuenow", "30"],
                    ["class", "progress-bar bg-success"],
                    ["role", "progressbar"],
                    ["style", "width: 55%;"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](213, 0, null, null, 1, "div", [
                    ["class", "progress"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](214, 0, null, null, 0, "div", [
                    ["aria-valuemax", "100"],
                    ["aria-valuemin", "0"],
                    ["aria-valuenow", "30"],
                    ["class", "progress-bar bg-danger progress-base-rounded"],
                    ["role", "progressbar"],
                    ["style", "width: 75%;"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](215, 0, null, null, 1, "div", [
                    ["class", "progress progress-rounded"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](216, 0, null, null, 0, "div", [
                    ["aria-valuemax", "100"],
                    ["aria-valuemin", "0"],
                    ["aria-valuenow", "30"],
                    ["class", "progress-bar bg-primary progress-rounded"],
                    ["role", "progressbar"],
                    ["style", "width: 90%;"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](217, 0, null, null, 34, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](218, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](219, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](220, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](221, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Circle Progress bars"])), (l()(), e["\u0275eld"](223, 0, null, null, 28, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](224, 0, null, null, 27, "div", [
                    ["class", "mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](225, 0, null, null, 4, "div", [
                    ["class", "alert alert-info"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](226, 0, null, null, 3, "p", [
                    ["class", "m-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["If you want to see reference link for more info please check out "])), (l()(), e["\u0275eld"](228, 0, null, null, 1, "a", [
                    ["class", "btn btn-danger btn-sm"],
                    ["href", "http://codepen.io/keithpickering/pen/glkzC"],
                    ["target", "_blank"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Click Me"])), (l()(), e["\u0275eld"](230, 0, null, null, 1, "span", [
                    ["class", "ui-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Circular Progress bar"])), (l()(), e["\u0275eld"](232, 0, null, null, 2, "div", [
                    ["class", "progress--circle progress--75"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](233, 0, null, null, 1, "div", [
                    ["class", "progress__number"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["75%"])), (l()(), e["\u0275eld"](235, 0, null, null, 2, "div", [
                    ["class", "progress--circle progress--50"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](236, 0, null, null, 1, "div", [
                    ["class", "progress__number"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["50%"])), (l()(), e["\u0275eld"](238, 0, null, null, 2, "div", [
                    ["class", "progress--circle progress--25"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](239, 0, null, null, 1, "div", [
                    ["class", "progress__number"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["25%"])), (l()(), e["\u0275eld"](241, 0, null, null, 1, "span", [
                    ["class", "ui-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Pie Style Progress bar"])), (l()(), e["\u0275eld"](243, 0, null, null, 2, "div", [
                    ["class", "progress--circle  progress--pie progress--75"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](244, 0, null, null, 1, "div", [
                    ["class", "progress__number"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["75%"])), (l()(), e["\u0275eld"](246, 0, null, null, 2, "div", [
                    ["class", "progress--circle  progress--pie progress--50"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](247, 0, null, null, 1, "div", [
                    ["class", "progress__number"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["50%"])), (l()(), e["\u0275eld"](249, 0, null, null, 2, "div", [
                    ["class", "progress--circle  progress--pie progress--25"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](250, 0, null, null, 1, "div", [
                    ["class", "progress__number"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["25%"]))], null, null)
            }
            var L = e["\u0275ccf"]("ms-progress-bar", R, function(l) {
                    return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 1, "ms-progress-bar", [], [
                        [40, "@fadeInAnimation", 0]
                    ], null, null, Y, Q)), e["\u0275did"](1, 114688, null, 0, R, [j.a], null, null)], function(l, n) {
                        l(n, 1, 0)
                    }, function(l, n) {
                        l(n, 0, 0, !0)
                    })
                }, {}, {}, []),
                q = function() {
                    function l(l) {
                        this.pageTitleService = l
                    }
                    return l.prototype.ngOnInit = function() {
                        this.pageTitleService.setTitle("Tabs")
                    }, l
                }(),
                N = e["\u0275crt"]({
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

            function W(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 1636, "div", [
                    ["class", "tab-block-wrappers"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 2, "div", [
                    ["class", "chk-ui-heading"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](2, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Default Tab Styled"])), (l()(), e["\u0275eld"](4, 0, null, null, 95, "div", [
                    ["class", "row mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](5, 0, null, null, 48, "div", [
                    ["class", "col-md-12 col-lg-12 col-xl-6"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](6, 0, null, null, 47, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](7, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](8, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](9, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](10, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Basic tabs"])), (l()(), e["\u0275eld"](12, 0, null, null, 41, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](13, 0, null, null, 40, "div", [
                    ["class", "tab-wrappers"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](14, 0, null, null, 14, "ul", [
                    ["class", "nav nav-tabs mb-4"],
                    ["role", "tablist"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](15, 0, null, null, 2, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](16, 0, null, null, 1, "a", [
                    ["aria-controls", "active"],
                    ["aria-expanded", "true"],
                    ["class", "nav-link active"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-1"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Active"])), (l()(), e["\u0275eld"](18, 0, null, null, 2, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](19, 0, null, null, 1, "a", [
                    ["aria-controls", "inactive"],
                    ["class", "nav-link"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-2"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Inactive"])), (l()(), e["\u0275eld"](21, 0, null, null, 7, "li", [
                    ["class", "nav-item dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](22, 0, null, null, 1, "a", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "nav-link dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["href", "#"],
                    ["role", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Dropdown "])), (l()(), e["\u0275eld"](24, 0, null, null, 4, "div", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](25, 0, null, null, 1, "a", [
                    ["aria-controls", "dropdown1"],
                    ["class", "dropdown-item"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-3"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dropdown tab"])), (l()(), e["\u0275eld"](27, 0, null, null, 1, "a", [
                    ["aria-controls", "dropdown2"],
                    ["class", "dropdown-item"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-4"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another tab"])), (l()(), e["\u0275eld"](29, 0, null, null, 24, "div", [
                    ["class", "tab-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](30, 0, null, null, 8, "div", [
                    ["class", "tab-pane fade show active"],
                    ["id", "tab-1"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](31, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic tabs example using "])), (l()(), e["\u0275eld"](33, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-tabs"])), (l()(), e["\u0275ted"](-1, null, [" class. Also requires base "])), (l()(), e["\u0275eld"](36, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav"])), (l()(), e["\u0275ted"](-1, null, [" class. "])), (l()(), e["\u0275eld"](39, 0, null, null, 2, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-2"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](40, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This style Should Apply same for all the possible variations of this sections."])), (l()(), e["\u0275eld"](42, 0, null, null, 8, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-3"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](43, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic tabs example using "])), (l()(), e["\u0275eld"](45, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-tabs"])), (l()(), e["\u0275ted"](-1, null, [" class. Also requires base "])), (l()(), e["\u0275eld"](48, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav"])), (l()(), e["\u0275ted"](-1, null, [" class."])), (l()(), e["\u0275eld"](51, 0, null, null, 2, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-4"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](52, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This style Should Apply same for all the possible variations of this sections."])), (l()(), e["\u0275eld"](54, 0, null, null, 45, "div", [
                    ["class", "col-md-12 col-lg-12 col-xl-6"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](55, 0, null, null, 44, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](56, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](57, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](58, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](59, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Full Width Tabs"])), (l()(), e["\u0275eld"](61, 0, null, null, 38, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](62, 0, null, null, 37, "div", [
                    ["class", "tab-wrappers"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](63, 0, null, null, 14, "ul", [
                    ["class", "nav nav-tabs nav-justified mb-4"],
                    ["role", "tablist"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](64, 0, null, null, 2, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](65, 0, null, null, 1, "a", [
                    ["aria-controls", "active"],
                    ["aria-expanded", "true"],
                    ["class", "nav-link active"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-5"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Active"])), (l()(), e["\u0275eld"](67, 0, null, null, 2, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](68, 0, null, null, 1, "a", [
                    ["aria-controls", "inactive"],
                    ["class", "nav-link"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-6"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Inactive"])), (l()(), e["\u0275eld"](70, 0, null, null, 7, "li", [
                    ["class", "nav-item dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](71, 0, null, null, 1, "a", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "nav-link dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["href", "#"],
                    ["role", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Dropdown "])), (l()(), e["\u0275eld"](73, 0, null, null, 4, "div", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](74, 0, null, null, 1, "a", [
                    ["aria-controls", "dropdown1"],
                    ["class", "dropdown-item"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-7"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dropdown tab"])), (l()(), e["\u0275eld"](76, 0, null, null, 1, "a", [
                    ["aria-controls", "dropdown2"],
                    ["class", "dropdown-item"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-8"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another tab"])), (l()(), e["\u0275eld"](78, 0, null, null, 21, "div", [
                    ["class", "tab-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](79, 0, null, null, 5, "div", [
                    ["class", "tab-pane fade show active"],
                    ["id", "tab-5"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](80, 0, null, null, 4, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Easily make tabs equal widths of their parent with "])), (l()(), e["\u0275eld"](82, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-justified"])), (l()(), e["\u0275ted"](-1, null, [" class."])), (l()(), e["\u0275eld"](85, 0, null, null, 2, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-6"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](86, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This style Should Apply same for all the possible variations of this sections."])), (l()(), e["\u0275eld"](88, 0, null, null, 8, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-7"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](89, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic tabs example using "])), (l()(), e["\u0275eld"](91, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-tabs"])), (l()(), e["\u0275ted"](-1, null, [" class. Also requires base "])), (l()(), e["\u0275eld"](94, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav"])), (l()(), e["\u0275ted"](-1, null, [" class."])), (l()(), e["\u0275eld"](97, 0, null, null, 2, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-8"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](98, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This style Should Apply same for all the possible variations of this sections."])), (l()(), e["\u0275eld"](100, 0, null, null, 538, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](101, 0, null, null, 255, "div", [
                    ["class", "col-lg-12 col-xl-6"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](102, 0, null, null, 44, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](103, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](104, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](105, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](106, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Default tab Boxed style"])), (l()(), e["\u0275eld"](108, 0, null, null, 38, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](109, 0, null, null, 37, "div", [
                    ["class", "tab-wrappers tab-content-bordered"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](110, 0, null, null, 14, "ul", [
                    ["class", "nav nav-tabs"],
                    ["role", "tablist"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](111, 0, null, null, 2, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](112, 0, null, null, 1, "a", [
                    ["aria-controls", "active"],
                    ["aria-expanded", "true"],
                    ["class", "nav-link active"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-13"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Active"])), (l()(), e["\u0275eld"](114, 0, null, null, 2, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](115, 0, null, null, 1, "a", [
                    ["aria-controls", "inactive"],
                    ["class", "nav-link"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-14"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Inactive"])), (l()(), e["\u0275eld"](117, 0, null, null, 7, "li", [
                    ["class", "nav-item dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](118, 0, null, null, 1, "a", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "nav-link dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["href", "#"],
                    ["role", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Dropdown "])), (l()(), e["\u0275eld"](120, 0, null, null, 4, "div", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](121, 0, null, null, 1, "a", [
                    ["aria-controls", "dropdown1"],
                    ["class", "dropdown-item"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-15"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dropdown tab"])), (l()(), e["\u0275eld"](123, 0, null, null, 1, "a", [
                    ["aria-controls", "dropdown2"],
                    ["class", "dropdown-item"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-16"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another tab"])), (l()(), e["\u0275eld"](125, 0, null, null, 21, "div", [
                    ["class", "tab-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](126, 0, null, null, 5, "div", [
                    ["class", "tab-pane fade show active"],
                    ["id", "tab-13"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](127, 0, null, null, 4, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" To apply border and padding to the tab content, add "])), (l()(), e["\u0275eld"](129, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".tab-content-bordered"])), (l()(), e["\u0275ted"](-1, null, [" to the parent container"])), (l()(), e["\u0275eld"](132, 0, null, null, 2, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-14"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](133, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This style Should Apply same for all the possible variations of this sections."])), (l()(), e["\u0275eld"](135, 0, null, null, 8, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-15"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](136, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic tabs example using "])), (l()(), e["\u0275eld"](138, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-tabs"])), (l()(), e["\u0275ted"](-1, null, [" class. Also requires base "])), (l()(), e["\u0275eld"](141, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav"])), (l()(), e["\u0275ted"](-1, null, [" class."])), (l()(), e["\u0275eld"](144, 0, null, null, 2, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-16"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](145, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This style Should Apply same for all the possible variations of this sections."])), (l()(), e["\u0275eld"](147, 0, null, null, 50, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](148, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](149, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](150, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](151, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Basic tabs left icon"])), (l()(), e["\u0275eld"](153, 0, null, null, 44, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](154, 0, null, null, 43, "div", [
                    ["class", "tab-wrappers"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](155, 0, null, null, 17, "ul", [
                    ["class", "nav nav-tabs mb-4"],
                    ["role", "tablist"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](156, 0, null, null, 3, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](157, 0, null, null, 2, "a", [
                    ["aria-controls", "active"],
                    ["aria-expanded", "true"],
                    ["class", "nav-link active"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-17"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](158, 0, null, null, 0, "i", [
                    ["class", "la la-user la-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" \xa0 Active"])), (l()(), e["\u0275eld"](160, 0, null, null, 3, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](161, 0, null, null, 2, "a", [
                    ["aria-controls", "inactive"],
                    ["class", "nav-link"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-18"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](162, 0, null, null, 0, "i", [
                    ["class", "la la-gear la-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" \xa0 Inactive"])), (l()(), e["\u0275eld"](164, 0, null, null, 8, "li", [
                    ["class", "nav-item dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](165, 0, null, null, 2, "a", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "nav-link dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["href", "#"],
                    ["role", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](166, 0, null, null, 0, "i", [
                    ["class", "la la-bars la-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" \xa0 Dropdown "])), (l()(), e["\u0275eld"](168, 0, null, null, 4, "div", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](169, 0, null, null, 1, "a", [
                    ["aria-controls", "dropdown1"],
                    ["class", "dropdown-item"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-19"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dropdown tab"])), (l()(), e["\u0275eld"](171, 0, null, null, 1, "a", [
                    ["aria-controls", "dropdown2"],
                    ["class", "dropdown-item"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-20"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another tab"])), (l()(), e["\u0275eld"](173, 0, null, null, 24, "div", [
                    ["class", "tab-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](174, 0, null, null, 8, "div", [
                    ["class", "tab-pane fade show active"],
                    ["id", "tab-17"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](175, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic tabs example using "])), (l()(), e["\u0275eld"](177, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-tabs"])), (l()(), e["\u0275ted"](-1, null, [" class. Also requires base "])), (l()(), e["\u0275eld"](180, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav"])), (l()(), e["\u0275ted"](-1, null, [" class. "])), (l()(), e["\u0275eld"](183, 0, null, null, 2, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-18"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](184, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This style Should Apply same for all the possible variations of this sections."])), (l()(), e["\u0275eld"](186, 0, null, null, 8, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-19"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](187, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic tabs example using "])), (l()(), e["\u0275eld"](189, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-tabs"])), (l()(), e["\u0275ted"](-1, null, [" class. Also requires base "])), (l()(), e["\u0275eld"](192, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav"])), (l()(), e["\u0275ted"](-1, null, [" class."])), (l()(), e["\u0275eld"](195, 0, null, null, 2, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-20"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](196, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This style Should Apply same for all the possible variations of this sections."])), (l()(), e["\u0275eld"](198, 0, null, null, 50, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](199, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](200, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](201, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](202, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Basic tabs right icon"])), (l()(), e["\u0275eld"](204, 0, null, null, 44, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](205, 0, null, null, 43, "div", [
                    ["class", "tab-wrappers"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](206, 0, null, null, 17, "ul", [
                    ["class", "nav nav-tabs mb-4"],
                    ["role", "tablist"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](207, 0, null, null, 3, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](208, 0, null, null, 2, "a", [
                    ["aria-controls", "active"],
                    ["aria-expanded", "true"],
                    ["class", "nav-link active"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-21"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Active \xa0"])), (l()(), e["\u0275eld"](210, 0, null, null, 0, "i", [
                    ["class", "la la-user la-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](211, 0, null, null, 3, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](212, 0, null, null, 2, "a", [
                    ["aria-controls", "inactive"],
                    ["class", "nav-link"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-22"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Inactive \xa0"])), (l()(), e["\u0275eld"](214, 0, null, null, 0, "i", [
                    ["class", "la la-gear la-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](215, 0, null, null, 8, "li", [
                    ["class", "nav-item dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](216, 0, null, null, 2, "a", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "nav-link dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["href", "#"],
                    ["role", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Dropdown \xa0 "])), (l()(), e["\u0275eld"](218, 0, null, null, 0, "i", [
                    ["class", "la la-bars la-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](219, 0, null, null, 4, "div", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](220, 0, null, null, 1, "a", [
                    ["aria-controls", "dropdown1"],
                    ["class", "dropdown-item"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-23"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dropdown tab"])), (l()(), e["\u0275eld"](222, 0, null, null, 1, "a", [
                    ["aria-controls", "dropdown2"],
                    ["class", "dropdown-item"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-24"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another tab"])), (l()(), e["\u0275eld"](224, 0, null, null, 24, "div", [
                    ["class", "tab-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](225, 0, null, null, 8, "div", [
                    ["class", "tab-pane fade show active"],
                    ["id", "tab-21"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](226, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic tabs example using "])), (l()(), e["\u0275eld"](228, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-tabs"])), (l()(), e["\u0275ted"](-1, null, [" class. Also requires base "])), (l()(), e["\u0275eld"](231, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav"])), (l()(), e["\u0275ted"](-1, null, [" class. "])), (l()(), e["\u0275eld"](234, 0, null, null, 2, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-22"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](235, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This style Should Apply same for all the possible variations of this sections."])), (l()(), e["\u0275eld"](237, 0, null, null, 8, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-23"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](238, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic tabs example using "])), (l()(), e["\u0275eld"](240, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-tabs"])), (l()(), e["\u0275ted"](-1, null, [" class. Also requires base "])), (l()(), e["\u0275eld"](243, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav"])), (l()(), e["\u0275ted"](-1, null, [" class."])), (l()(), e["\u0275eld"](246, 0, null, null, 2, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-24"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](247, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This style Should Apply same for all the possible variations of this sections."])), (l()(), e["\u0275eld"](249, 0, null, null, 53, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](250, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](251, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](252, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](253, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Tabs with multiple elements"])), (l()(), e["\u0275eld"](255, 0, null, null, 47, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](256, 0, null, null, 46, "div", [
                    ["class", "tab-wrappers"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](257, 0, null, null, 20, "ul", [
                    ["class", "nav nav-tabs mb-4"],
                    ["role", "tablist"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](258, 0, null, null, 4, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](259, 0, null, null, 3, "a", [
                    ["aria-controls", "active"],
                    ["aria-expanded", "true"],
                    ["class", "nav-link active"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-25"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](260, 0, null, null, 1, "span", [
                    ["class", "badge badge-primary"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["35"])), (l()(), e["\u0275ted"](-1, null, [" \xa0Active"])), (l()(), e["\u0275eld"](263, 0, null, null, 4, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](264, 0, null, null, 3, "a", [
                    ["aria-controls", "inactive"],
                    ["class", "nav-link"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-26"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](265, 0, null, null, 1, "span", [
                    ["class", "badge badge-danger"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Urgent"])), (l()(), e["\u0275ted"](-1, null, [" \xa0Inactive"])), (l()(), e["\u0275eld"](268, 0, null, null, 9, "li", [
                    ["class", "nav-item dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](269, 0, null, null, 3, "a", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "nav-link dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["href", "#"],
                    ["role", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Dropdown"])), (l()(), e["\u0275eld"](271, 0, null, null, 0, "i", [
                    ["class", "la la-bars la-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["\xa0 "])), (l()(), e["\u0275eld"](273, 0, null, null, 4, "div", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](274, 0, null, null, 1, "a", [
                    ["aria-controls", "dropdown1"],
                    ["class", "dropdown-item"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-27"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dropdown tab"])), (l()(), e["\u0275eld"](276, 0, null, null, 1, "a", [
                    ["aria-controls", "dropdown2"],
                    ["class", "dropdown-item"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-28"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another tab"])), (l()(), e["\u0275eld"](278, 0, null, null, 24, "div", [
                    ["class", "tab-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](279, 0, null, null, 8, "div", [
                    ["class", "tab-pane fade show active"],
                    ["id", "tab-25"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](280, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic tabs example using "])), (l()(), e["\u0275eld"](282, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-tabs"])), (l()(), e["\u0275ted"](-1, null, [" class. Also requires base "])), (l()(), e["\u0275eld"](285, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav"])), (l()(), e["\u0275ted"](-1, null, [" class. "])), (l()(), e["\u0275eld"](288, 0, null, null, 2, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-26"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](289, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This style Should Apply same for all the possible variations of this sections."])), (l()(), e["\u0275eld"](291, 0, null, null, 8, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-27"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](292, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic tabs example using "])), (l()(), e["\u0275eld"](294, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-tabs"])), (l()(), e["\u0275ted"](-1, null, [" class. Also requires base "])), (l()(), e["\u0275eld"](297, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav"])), (l()(), e["\u0275ted"](-1, null, [" class."])), (l()(), e["\u0275eld"](300, 0, null, null, 2, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-28"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](301, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This style Should Apply same for all the possible variations of this sections."])), (l()(), e["\u0275eld"](303, 0, null, null, 53, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](304, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](305, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](306, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](307, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Bottom Tabs"])), (l()(), e["\u0275eld"](309, 0, null, null, 47, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](310, 0, null, null, 46, "div", [
                    ["class", "tab-wrappers tabs-below"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](311, 0, null, null, 24, "div", [
                    ["class", "tab-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](312, 0, null, null, 8, "div", [
                    ["class", "tab-pane fade show active"],
                    ["id", "tab-29"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](313, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic tabs example using "])), (l()(), e["\u0275eld"](315, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-tabs"])), (l()(), e["\u0275ted"](-1, null, [" class. Also requires base "])), (l()(), e["\u0275eld"](318, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav"])), (l()(), e["\u0275ted"](-1, null, [" class. "])), (l()(), e["\u0275eld"](321, 0, null, null, 2, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-30"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](322, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This style Should Apply same for all the possible variations of this sections."])), (l()(), e["\u0275eld"](324, 0, null, null, 8, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-31"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](325, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic tabs example using "])), (l()(), e["\u0275eld"](327, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-tabs"])), (l()(), e["\u0275ted"](-1, null, [" class. Also requires base "])), (l()(), e["\u0275eld"](330, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav"])), (l()(), e["\u0275ted"](-1, null, [" class."])), (l()(), e["\u0275eld"](333, 0, null, null, 2, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-32"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](334, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This style Should Apply same for all the possible variations of this sections."])), (l()(), e["\u0275eld"](336, 0, null, null, 20, "ul", [
                    ["class", "nav nav-tabs mb-4"],
                    ["role", "tablist"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](337, 0, null, null, 4, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](338, 0, null, null, 3, "a", [
                    ["aria-controls", "active"],
                    ["aria-expanded", "true"],
                    ["class", "nav-link active"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-29"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](339, 0, null, null, 1, "span", [
                    ["class", "badge badge-primary"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["35"])), (l()(), e["\u0275ted"](-1, null, [" \xa0Active"])), (l()(), e["\u0275eld"](342, 0, null, null, 4, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](343, 0, null, null, 3, "a", [
                    ["aria-controls", "inactive"],
                    ["class", "nav-link"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-30"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](344, 0, null, null, 1, "span", [
                    ["class", "badge badge-danger"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Urgent"])), (l()(), e["\u0275ted"](-1, null, [" \xa0Inactive"])), (l()(), e["\u0275eld"](347, 0, null, null, 9, "li", [
                    ["class", "nav-item dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](348, 0, null, null, 3, "a", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "nav-link dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["href", "#"],
                    ["role", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Dropdown"])), (l()(), e["\u0275eld"](350, 0, null, null, 0, "i", [
                    ["class", "la la-bars la-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["\xa0 "])), (l()(), e["\u0275eld"](352, 0, null, null, 4, "div", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](353, 0, null, null, 1, "a", [
                    ["aria-controls", "dropdown1"],
                    ["class", "dropdown-item"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-31"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dropdown tab"])), (l()(), e["\u0275eld"](355, 0, null, null, 1, "a", [
                    ["aria-controls", "dropdown2"],
                    ["class", "dropdown-item"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-32"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another tab"])), (l()(), e["\u0275eld"](357, 0, null, null, 281, "div", [
                    ["class", "col-lg-12 col-xl-6"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](358, 0, null, null, 178, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](359, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](360, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](361, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](362, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Different sizes"])), (l()(), e["\u0275eld"](364, 0, null, null, 172, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](365, 0, null, null, 42, "div", [
                    ["class", "tab-wrappers mb-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](366, 0, null, null, 1, "span", [
                    ["class", "ui-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Larger Size"])), (l()(), e["\u0275eld"](368, 0, null, null, 14, "ul", [
                    ["class", "nav nav-lg nav-tabs mb-4"],
                    ["role", "tablist"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](369, 0, null, null, 2, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](370, 0, null, null, 1, "a", [
                    ["aria-controls", "active"],
                    ["aria-expanded", "true"],
                    ["class", "nav-link active"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-33"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Active"])), (l()(), e["\u0275eld"](372, 0, null, null, 2, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](373, 0, null, null, 1, "a", [
                    ["aria-controls", "inactive"],
                    ["class", "nav-link"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-34"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Inactive"])), (l()(), e["\u0275eld"](375, 0, null, null, 7, "li", [
                    ["class", "nav-item dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](376, 0, null, null, 1, "a", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "nav-link dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["href", "#"],
                    ["role", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Dropdown "])), (l()(), e["\u0275eld"](378, 0, null, null, 4, "div", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](379, 0, null, null, 1, "a", [
                    ["aria-controls", "dropdown1"],
                    ["class", "dropdown-item"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-35"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dropdown tab"])), (l()(), e["\u0275eld"](381, 0, null, null, 1, "a", [
                    ["aria-controls", "dropdown2"],
                    ["class", "dropdown-item"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-36"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another tab"])), (l()(), e["\u0275eld"](383, 0, null, null, 24, "div", [
                    ["class", "tab-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](384, 0, null, null, 8, "div", [
                    ["class", "tab-pane fade show active"],
                    ["id", "tab-33"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](385, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic tabs example using "])), (l()(), e["\u0275eld"](387, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-tabs"])), (l()(), e["\u0275ted"](-1, null, [" class. Also requires base "])), (l()(), e["\u0275eld"](390, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-lg"])), (l()(), e["\u0275ted"](-1, null, [" class. "])), (l()(), e["\u0275eld"](393, 0, null, null, 2, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-34"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](394, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This style Should Apply same for all the possible variations of this sections."])), (l()(), e["\u0275eld"](396, 0, null, null, 8, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-35"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](397, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic tabs example using "])), (l()(), e["\u0275eld"](399, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-tabs"])), (l()(), e["\u0275ted"](-1, null, [" class. Also requires base "])), (l()(), e["\u0275eld"](402, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav"])), (l()(), e["\u0275ted"](-1, null, [" class."])), (l()(), e["\u0275eld"](405, 0, null, null, 2, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-36"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](406, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This style Should Apply same for all the possible variations of this sections."])), (l()(), e["\u0275eld"](408, 0, null, null, 42, "div", [
                    ["class", "tab-wrappers mb-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](409, 0, null, null, 1, "span", [
                    ["class", "ui-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Default Size"])), (l()(), e["\u0275eld"](411, 0, null, null, 14, "ul", [
                    ["class", "nav nav-tabs mb-4"],
                    ["role", "tablist"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](412, 0, null, null, 2, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](413, 0, null, null, 1, "a", [
                    ["aria-controls", "active"],
                    ["aria-expanded", "true"],
                    ["class", "nav-link active"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-37"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Active"])), (l()(), e["\u0275eld"](415, 0, null, null, 2, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](416, 0, null, null, 1, "a", [
                    ["aria-controls", "inactive"],
                    ["class", "nav-link"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-38"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Inactive"])), (l()(), e["\u0275eld"](418, 0, null, null, 7, "li", [
                    ["class", "nav-item dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](419, 0, null, null, 1, "a", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "nav-link dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["href", "#"],
                    ["role", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Dropdown "])), (l()(), e["\u0275eld"](421, 0, null, null, 4, "div", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](422, 0, null, null, 1, "a", [
                    ["aria-controls", "dropdown1"],
                    ["class", "dropdown-item"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-39"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dropdown tab"])), (l()(), e["\u0275eld"](424, 0, null, null, 1, "a", [
                    ["aria-controls", "dropdown2"],
                    ["class", "dropdown-item"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-40"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another tab"])), (l()(), e["\u0275eld"](426, 0, null, null, 24, "div", [
                    ["class", "tab-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](427, 0, null, null, 8, "div", [
                    ["class", "tab-pane fade show active"],
                    ["id", "tab-37"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](428, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic tabs example using "])), (l()(), e["\u0275eld"](430, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-tabs"])), (l()(), e["\u0275ted"](-1, null, [" class. Also requires base "])), (l()(), e["\u0275eld"](433, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-sm"])), (l()(), e["\u0275ted"](-1, null, [" class. "])), (l()(), e["\u0275eld"](436, 0, null, null, 2, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-38"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](437, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This style Should Apply same for all the possible variations of this sections."])), (l()(), e["\u0275eld"](439, 0, null, null, 8, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-39"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](440, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic tabs example using "])), (l()(), e["\u0275eld"](442, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-tabs"])), (l()(), e["\u0275ted"](-1, null, [" class. Also requires base "])), (l()(), e["\u0275eld"](445, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav"])), (l()(), e["\u0275ted"](-1, null, [" class."])), (l()(), e["\u0275eld"](448, 0, null, null, 2, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-40"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](449, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This style Should Apply same for all the possible variations of this sections."])), (l()(), e["\u0275eld"](451, 0, null, null, 42, "div", [
                    ["class", "tab-wrappers mb-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](452, 0, null, null, 1, "span", [
                    ["class", "ui-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Small Size"])), (l()(), e["\u0275eld"](454, 0, null, null, 14, "ul", [
                    ["class", "nav nav-sm nav-tabs mb-4"],
                    ["role", "tablist"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](455, 0, null, null, 2, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](456, 0, null, null, 1, "a", [
                    ["aria-controls", "active"],
                    ["aria-expanded", "true"],
                    ["class", "nav-link active"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-41"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Active"])), (l()(), e["\u0275eld"](458, 0, null, null, 2, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](459, 0, null, null, 1, "a", [
                    ["aria-controls", "inactive"],
                    ["class", "nav-link"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-42"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Inactive"])), (l()(), e["\u0275eld"](461, 0, null, null, 7, "li", [
                    ["class", "nav-item dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](462, 0, null, null, 1, "a", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "nav-link dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["href", "#"],
                    ["role", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Dropdown "])), (l()(), e["\u0275eld"](464, 0, null, null, 4, "div", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](465, 0, null, null, 1, "a", [
                    ["aria-controls", "dropdown1"],
                    ["class", "dropdown-item"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-43"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dropdown tab"])), (l()(), e["\u0275eld"](467, 0, null, null, 1, "a", [
                    ["aria-controls", "dropdown2"],
                    ["class", "dropdown-item"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-44"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another tab"])), (l()(), e["\u0275eld"](469, 0, null, null, 24, "div", [
                    ["class", "tab-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](470, 0, null, null, 8, "div", [
                    ["class", "tab-pane fade show active"],
                    ["id", "tab-41"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](471, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic tabs example using "])), (l()(), e["\u0275eld"](473, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-tabs"])), (l()(), e["\u0275ted"](-1, null, [" class. Also requires base "])), (l()(), e["\u0275eld"](476, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-sm"])), (l()(), e["\u0275ted"](-1, null, [" class. "])), (l()(), e["\u0275eld"](479, 0, null, null, 2, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-42"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](480, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This style Should Apply same for all the possible variations of this sections."])), (l()(), e["\u0275eld"](482, 0, null, null, 8, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-43"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](483, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic tabs example using "])), (l()(), e["\u0275eld"](485, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-tabs"])), (l()(), e["\u0275ted"](-1, null, [" class. Also requires base "])), (l()(), e["\u0275eld"](488, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav"])), (l()(), e["\u0275ted"](-1, null, [" class."])), (l()(), e["\u0275eld"](491, 0, null, null, 2, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-44"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](492, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This style Should Apply same for all the possible variations of this sections."])), (l()(), e["\u0275eld"](494, 0, null, null, 42, "div", [
                    ["class", "tab-wrappers mb-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](495, 0, null, null, 1, "span", [
                    ["class", "ui-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Extra Small Size"])), (l()(), e["\u0275eld"](497, 0, null, null, 14, "ul", [
                    ["class", "nav nav-xs nav-tabs mb-4"],
                    ["role", "tablist"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](498, 0, null, null, 2, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](499, 0, null, null, 1, "a", [
                    ["aria-controls", "active"],
                    ["aria-expanded", "true"],
                    ["class", "nav-link active"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-45"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Active"])), (l()(), e["\u0275eld"](501, 0, null, null, 2, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](502, 0, null, null, 1, "a", [
                    ["aria-controls", "inactive"],
                    ["class", "nav-link"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-46"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Inactive"])), (l()(), e["\u0275eld"](504, 0, null, null, 7, "li", [
                    ["class", "nav-item dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](505, 0, null, null, 1, "a", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "nav-link dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["href", "#"],
                    ["role", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Dropdown "])), (l()(), e["\u0275eld"](507, 0, null, null, 4, "div", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](508, 0, null, null, 1, "a", [
                    ["aria-controls", "dropdown1"],
                    ["class", "dropdown-item"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-47"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dropdown tab"])), (l()(), e["\u0275eld"](510, 0, null, null, 1, "a", [
                    ["aria-controls", "dropdown2"],
                    ["class", "dropdown-item"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-48"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another tab"])), (l()(), e["\u0275eld"](512, 0, null, null, 24, "div", [
                    ["class", "tab-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](513, 0, null, null, 8, "div", [
                    ["class", "tab-pane fade show active"],
                    ["id", "tab-45"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](514, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic tabs example using "])), (l()(), e["\u0275eld"](516, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-tabs"])), (l()(), e["\u0275ted"](-1, null, [" class. Also requires base "])), (l()(), e["\u0275eld"](519, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-xs"])), (l()(), e["\u0275ted"](-1, null, [" class. "])), (l()(), e["\u0275eld"](522, 0, null, null, 2, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-46"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](523, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This style Should Apply same for all the possible variations of this sections."])), (l()(), e["\u0275eld"](525, 0, null, null, 8, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-47"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](526, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic tabs example using "])), (l()(), e["\u0275eld"](528, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-tabs"])), (l()(), e["\u0275ted"](-1, null, [" class. Also requires base "])), (l()(), e["\u0275eld"](531, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav"])), (l()(), e["\u0275ted"](-1, null, [" class."])), (l()(), e["\u0275eld"](534, 0, null, null, 2, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-48"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](535, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This style Should Apply same for all the possible variations of this sections."])), (l()(), e["\u0275eld"](537, 0, null, null, 50, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](538, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](539, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](540, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](541, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Alternet Version of thie series"])), (l()(), e["\u0275eld"](543, 0, null, null, 44, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](544, 0, null, null, 43, "div", [
                    ["class", "tab-wrappers"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](545, 0, null, null, 17, "ul", [
                    ["class", "nav nav-tabs nav-tabs-highlight mb-4"],
                    ["role", "tablist"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](546, 0, null, null, 3, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](547, 0, null, null, 2, "a", [
                    ["aria-controls", "active"],
                    ["aria-expanded", "true"],
                    ["class", "nav-link active"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-49"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Active \xa0"])), (l()(), e["\u0275eld"](549, 0, null, null, 0, "i", [
                    ["class", "la la-user la-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](550, 0, null, null, 3, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](551, 0, null, null, 2, "a", [
                    ["aria-controls", "inactive"],
                    ["class", "nav-link"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-50"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Inactive \xa0"])), (l()(), e["\u0275eld"](553, 0, null, null, 0, "i", [
                    ["class", "la la-gear la-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](554, 0, null, null, 8, "li", [
                    ["class", "nav-item dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](555, 0, null, null, 2, "a", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "nav-link dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["href", "#"],
                    ["role", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Dropdown \xa0"])), (l()(), e["\u0275eld"](557, 0, null, null, 0, "i", [
                    ["class", "la la-bars la-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](558, 0, null, null, 4, "div", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](559, 0, null, null, 1, "a", [
                    ["aria-controls", "dropdown1"],
                    ["class", "dropdown-item"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-51"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dropdown tab"])), (l()(), e["\u0275eld"](561, 0, null, null, 1, "a", [
                    ["aria-controls", "dropdown2"],
                    ["class", "dropdown-item"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-52"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another tab"])), (l()(), e["\u0275eld"](563, 0, null, null, 24, "div", [
                    ["class", "tab-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](564, 0, null, null, 8, "div", [
                    ["class", "tab-pane fade show active"],
                    ["id", "tab-49"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](565, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic tabs example using "])), (l()(), e["\u0275eld"](567, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-tabs"])), (l()(), e["\u0275ted"](-1, null, [" class. Also requires base "])), (l()(), e["\u0275eld"](570, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-tabs-highlight"])), (l()(), e["\u0275ted"](-1, null, [" class. "])), (l()(), e["\u0275eld"](573, 0, null, null, 2, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-50"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](574, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This style Should Apply same for all the possible variations of this sections."])), (l()(), e["\u0275eld"](576, 0, null, null, 8, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-51"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](577, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic tabs example using "])), (l()(), e["\u0275eld"](579, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-tabs"])), (l()(), e["\u0275ted"](-1, null, [" class. Also requires base "])), (l()(), e["\u0275eld"](582, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav"])), (l()(), e["\u0275ted"](-1, null, [" class."])), (l()(), e["\u0275eld"](585, 0, null, null, 2, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-52"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](586, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This style Should Apply same for all the possible variations of this sections."])), (l()(), e["\u0275eld"](588, 0, null, null, 50, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](589, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](590, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](591, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](592, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Bottom Tabs With Line"])), (l()(), e["\u0275eld"](594, 0, null, null, 44, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](595, 0, null, null, 43, "div", [
                    ["class", "tab-wrappers tabs-below"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](596, 0, null, null, 24, "div", [
                    ["class", "tab-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](597, 0, null, null, 8, "div", [
                    ["class", "tab-pane fade show active"],
                    ["id", "tab-53"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](598, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic tabs example using "])), (l()(), e["\u0275eld"](600, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-tabs"])), (l()(), e["\u0275ted"](-1, null, [" class. Also requires base "])), (l()(), e["\u0275eld"](603, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-tabs-bottom-highlight"])), (l()(), e["\u0275ted"](-1, null, [" class. "])), (l()(), e["\u0275eld"](606, 0, null, null, 2, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-54"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](607, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This style Should Apply same for all the possible variations of this sections."])), (l()(), e["\u0275eld"](609, 0, null, null, 8, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-55"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](610, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic tabs example using "])), (l()(), e["\u0275eld"](612, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-tabs"])), (l()(), e["\u0275ted"](-1, null, [" class. Also requires base "])), (l()(), e["\u0275eld"](615, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav"])), (l()(), e["\u0275ted"](-1, null, [" class."])), (l()(), e["\u0275eld"](618, 0, null, null, 2, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-56"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](619, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This style Should Apply same for all the possible variations of this sections."])), (l()(), e["\u0275eld"](621, 0, null, null, 17, "ul", [
                    ["class", "nav nav-tabs nav-tabs-bottom-highlight mb-4"],
                    ["role", "tablist"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](622, 0, null, null, 3, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](623, 0, null, null, 2, "a", [
                    ["aria-controls", "active"],
                    ["aria-expanded", "true"],
                    ["class", "nav-link active"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-53"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Active \xa0"])), (l()(), e["\u0275eld"](625, 0, null, null, 0, "i", [
                    ["class", "la la-user la-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](626, 0, null, null, 3, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](627, 0, null, null, 2, "a", [
                    ["aria-controls", "inactive"],
                    ["class", "nav-link"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-54"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Inactive \xa0"])), (l()(), e["\u0275eld"](629, 0, null, null, 0, "i", [
                    ["class", "la la-gear la-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](630, 0, null, null, 8, "li", [
                    ["class", "nav-item dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](631, 0, null, null, 2, "a", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "nav-link dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["href", "#"],
                    ["role", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Dropdown \xa0"])), (l()(), e["\u0275eld"](633, 0, null, null, 0, "i", [
                    ["class", "la la-bars la-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](634, 0, null, null, 4, "div", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](635, 0, null, null, 1, "a", [
                    ["aria-controls", "dropdown1"],
                    ["class", "dropdown-item"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-55"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dropdown tab"])), (l()(), e["\u0275eld"](637, 0, null, null, 1, "a", [
                    ["aria-controls", "dropdown2"],
                    ["class", "dropdown-item"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-56"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another tab"])), (l()(), e["\u0275eld"](639, 0, null, null, 2, "div", [
                    ["class", "chk-ui-heading"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](640, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Line Styled Tabs"])), (l()(), e["\u0275eld"](642, 0, null, null, 312, "div", [
                    ["class", "row mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](643, 0, null, null, 51, "div", [
                    ["class", "col-md-12 col-lg-12 col-xl-6"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](644, 0, null, null, 50, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](645, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](646, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](647, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](648, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Basic tabs"])), (l()(), e["\u0275eld"](650, 0, null, null, 44, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](651, 0, null, null, 43, "div", [
                    ["class", "tab-wrappers"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](652, 0, null, null, 17, "ul", [
                    ["class", "nav nav-tabs nav-tabs-bottom mb-4"],
                    ["role", "tablist"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](653, 0, null, null, 3, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](654, 0, null, null, 2, "a", [
                    ["aria-controls", "active"],
                    ["aria-expanded", "true"],
                    ["class", "nav-link active"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-57"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Active \xa0"])), (l()(), e["\u0275eld"](656, 0, null, null, 0, "i", [
                    ["class", "la la-user la-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](657, 0, null, null, 3, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](658, 0, null, null, 2, "a", [
                    ["aria-controls", "inactive"],
                    ["class", "nav-link"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-58"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Inactive \xa0"])), (l()(), e["\u0275eld"](660, 0, null, null, 0, "i", [
                    ["class", "la la-gear la-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](661, 0, null, null, 8, "li", [
                    ["class", "nav-item dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](662, 0, null, null, 2, "a", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "nav-link dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["href", "#"],
                    ["role", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Dropdown \xa0"])), (l()(), e["\u0275eld"](664, 0, null, null, 0, "i", [
                    ["class", "la la-bars la-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](665, 0, null, null, 4, "div", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](666, 0, null, null, 1, "a", [
                    ["aria-controls", "dropdown1"],
                    ["class", "dropdown-item"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-59"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dropdown tab"])), (l()(), e["\u0275eld"](668, 0, null, null, 1, "a", [
                    ["aria-controls", "dropdown2"],
                    ["class", "dropdown-item"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-60"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another tab"])), (l()(), e["\u0275eld"](670, 0, null, null, 24, "div", [
                    ["class", "tab-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](671, 0, null, null, 8, "div", [
                    ["class", "tab-pane fade show active"],
                    ["id", "tab-57"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](672, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic tabs example using "])), (l()(), e["\u0275eld"](674, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-tabs"])), (l()(), e["\u0275ted"](-1, null, [" class. Also requires base "])), (l()(), e["\u0275eld"](677, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-tabs-bottom-highlight"])), (l()(), e["\u0275ted"](-1, null, [" class. "])), (l()(), e["\u0275eld"](680, 0, null, null, 2, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-58"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](681, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This style Should Apply same for all the possible variations of this sections."])), (l()(), e["\u0275eld"](683, 0, null, null, 8, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-59"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](684, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic tabs example using "])), (l()(), e["\u0275eld"](686, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-tabs"])), (l()(), e["\u0275ted"](-1, null, [" class. Also requires base "])), (l()(), e["\u0275eld"](689, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav"])), (l()(), e["\u0275ted"](-1, null, [" class."])), (l()(), e["\u0275eld"](692, 0, null, null, 2, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-60"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](693, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This style Should Apply same for all the possible variations of this sections."])), (l()(), e["\u0275eld"](695, 0, null, null, 51, "div", [
                    ["class", "col-md-12 col-lg-12 col-xl-6"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](696, 0, null, null, 50, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](697, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](698, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](699, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](700, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Full Width Tabs"])), (l()(), e["\u0275eld"](702, 0, null, null, 44, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](703, 0, null, null, 43, "div", [
                    ["class", "tab-wrappers"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](704, 0, null, null, 17, "ul", [
                    ["class", "nav nav-tabs nav-tabs-bottom nav-justified mb-4"],
                    ["role", "tablist"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](705, 0, null, null, 3, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](706, 0, null, null, 2, "a", [
                    ["aria-controls", "active"],
                    ["aria-expanded", "true"],
                    ["class", "nav-link active"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-65"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Active \xa0"])), (l()(), e["\u0275eld"](708, 0, null, null, 0, "i", [
                    ["class", "la la-user la-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](709, 0, null, null, 3, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](710, 0, null, null, 2, "a", [
                    ["aria-controls", "inactive"],
                    ["class", "nav-link"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-66"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Inactive \xa0"])), (l()(), e["\u0275eld"](712, 0, null, null, 0, "i", [
                    ["class", "la la-gear la-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](713, 0, null, null, 8, "li", [
                    ["class", "nav-item dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](714, 0, null, null, 2, "a", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "nav-link dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["href", "#"],
                    ["role", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Dropdown \xa0"])), (l()(), e["\u0275eld"](716, 0, null, null, 0, "i", [
                    ["class", "la la-bars la-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](717, 0, null, null, 4, "div", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](718, 0, null, null, 1, "a", [
                    ["aria-controls", "dropdown1"],
                    ["class", "dropdown-item"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-67"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dropdown tab"])), (l()(), e["\u0275eld"](720, 0, null, null, 1, "a", [
                    ["aria-controls", "dropdown2"],
                    ["class", "dropdown-item"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-68"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another tab"])), (l()(), e["\u0275eld"](722, 0, null, null, 24, "div", [
                    ["class", "tab-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](723, 0, null, null, 8, "div", [
                    ["class", "tab-pane fade show active"],
                    ["id", "tab-65"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](724, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic tabs example using "])), (l()(), e["\u0275eld"](726, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-tabs"])), (l()(), e["\u0275ted"](-1, null, [" class. Also requires base "])), (l()(), e["\u0275eld"](729, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-tabs-bottom-highlight"])), (l()(), e["\u0275ted"](-1, null, [" class. "])), (l()(), e["\u0275eld"](732, 0, null, null, 2, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-66"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](733, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This style Should Apply same for all the possible variations of this sections."])), (l()(), e["\u0275eld"](735, 0, null, null, 8, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-67"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](736, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic tabs example using "])), (l()(), e["\u0275eld"](738, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-tabs"])), (l()(), e["\u0275ted"](-1, null, [" class. Also requires base "])), (l()(), e["\u0275eld"](741, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav"])), (l()(), e["\u0275ted"](-1, null, [" class."])), (l()(), e["\u0275eld"](744, 0, null, null, 2, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-68"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](745, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This style Should Apply same for all the possible variations of this sections."])), (l()(), e["\u0275eld"](747, 0, null, null, 51, "div", [
                    ["class", "col-md-12 col-lg-12 col-xl-6"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](748, 0, null, null, 50, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](749, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](750, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](751, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](752, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Right align with popup"])), (l()(), e["\u0275eld"](754, 0, null, null, 44, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](755, 0, null, null, 43, "div", [
                    ["class", "tab-wrappers"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](756, 0, null, null, 17, "ul", [
                    ["class", "nav nav-tabs nav-tabs-bottom justify-content-end mb-4"],
                    ["role", "tablist"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](757, 0, null, null, 3, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](758, 0, null, null, 2, "a", [
                    ["aria-controls", "active"],
                    ["aria-expanded", "true"],
                    ["class", "nav-link active"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-69"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Active \xa0"])), (l()(), e["\u0275eld"](760, 0, null, null, 0, "i", [
                    ["class", "la la-user la-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](761, 0, null, null, 3, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](762, 0, null, null, 2, "a", [
                    ["aria-controls", "inactive"],
                    ["class", "nav-link"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-70"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Inactive \xa0"])), (l()(), e["\u0275eld"](764, 0, null, null, 0, "i", [
                    ["class", "la la-gear la-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](765, 0, null, null, 8, "li", [
                    ["class", "nav-item dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](766, 0, null, null, 2, "a", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "nav-link dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["href", "#"],
                    ["role", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Dropdown \xa0"])), (l()(), e["\u0275eld"](768, 0, null, null, 0, "i", [
                    ["class", "la la-bars la-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](769, 0, null, null, 4, "div", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](770, 0, null, null, 1, "a", [
                    ["aria-controls", "dropdown1"],
                    ["class", "dropdown-item"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-71"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dropdown tab"])), (l()(), e["\u0275eld"](772, 0, null, null, 1, "a", [
                    ["aria-controls", "dropdown2"],
                    ["class", "dropdown-item"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-72"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another tab"])), (l()(), e["\u0275eld"](774, 0, null, null, 24, "div", [
                    ["class", "tab-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](775, 0, null, null, 8, "div", [
                    ["class", "tab-pane fade show active"],
                    ["id", "tab-69"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](776, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic tabs example using "])), (l()(), e["\u0275eld"](778, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-tabs"])), (l()(), e["\u0275ted"](-1, null, [" class. Also requires base "])), (l()(), e["\u0275eld"](781, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-tabs-bottom-highlight"])), (l()(), e["\u0275ted"](-1, null, [" class. "])), (l()(), e["\u0275eld"](784, 0, null, null, 2, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-70"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](785, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This style Should Apply same for all the possible variations of this sections."])), (l()(), e["\u0275eld"](787, 0, null, null, 8, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-71"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](788, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic tabs example using "])), (l()(), e["\u0275eld"](790, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-tabs"])), (l()(), e["\u0275ted"](-1, null, [" class. Also requires base "])), (l()(), e["\u0275eld"](793, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav"])), (l()(), e["\u0275ted"](-1, null, [" class."])), (l()(), e["\u0275eld"](796, 0, null, null, 2, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-72"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](797, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This style Should Apply same for all the possible variations of this sections."])), (l()(), e["\u0275eld"](799, 0, null, null, 51, "div", [
                    ["class", "col-md-12 col-lg-12 col-xl-6"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](800, 0, null, null, 50, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](801, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](802, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](803, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](804, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Default tab Boxed style"])), (l()(), e["\u0275eld"](806, 0, null, null, 44, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](807, 0, null, null, 43, "div", [
                    ["class", "tab-wrappers nav-tabs-box"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](808, 0, null, null, 17, "ul", [
                    ["class", "nav nav-tabs nav-tabs-highlight nav-tabs-bottom"],
                    ["role", "tablist"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](809, 0, null, null, 3, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](810, 0, null, null, 2, "a", [
                    ["aria-controls", "active"],
                    ["aria-expanded", "true"],
                    ["class", "nav-link active"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-73"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Active \xa0"])), (l()(), e["\u0275eld"](812, 0, null, null, 0, "i", [
                    ["class", "la la-user la-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](813, 0, null, null, 3, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](814, 0, null, null, 2, "a", [
                    ["aria-controls", "inactive"],
                    ["class", "nav-link"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-74"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Inactive \xa0"])), (l()(), e["\u0275eld"](816, 0, null, null, 0, "i", [
                    ["class", "la la-gear la-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](817, 0, null, null, 8, "li", [
                    ["class", "nav-item dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](818, 0, null, null, 2, "a", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "nav-link dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["href", "#"],
                    ["role", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Dropdown \xa0"])), (l()(), e["\u0275eld"](820, 0, null, null, 0, "i", [
                    ["class", "la la-bars la-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](821, 0, null, null, 4, "div", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](822, 0, null, null, 1, "a", [
                    ["aria-controls", "dropdown1"],
                    ["class", "dropdown-item"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-75"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dropdown tab"])), (l()(), e["\u0275eld"](824, 0, null, null, 1, "a", [
                    ["aria-controls", "dropdown2"],
                    ["class", "dropdown-item"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-76"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another tab"])), (l()(), e["\u0275eld"](826, 0, null, null, 24, "div", [
                    ["class", "tab-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](827, 0, null, null, 8, "div", [
                    ["class", "tab-pane fade show active"],
                    ["id", "tab-73"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](828, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic tabs example using "])), (l()(), e["\u0275eld"](830, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-tabs"])), (l()(), e["\u0275ted"](-1, null, [" class. Also requires base "])), (l()(), e["\u0275eld"](833, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-tabs-box"])), (l()(), e["\u0275ted"](-1, null, [" class. "])), (l()(), e["\u0275eld"](836, 0, null, null, 2, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-74"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](837, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This style Should Apply same for all the possible variations of this sections."])), (l()(), e["\u0275eld"](839, 0, null, null, 8, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-75"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](840, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic tabs example using "])), (l()(), e["\u0275eld"](842, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-tabs"])), (l()(), e["\u0275ted"](-1, null, [" class. Also requires base "])), (l()(), e["\u0275eld"](845, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav"])), (l()(), e["\u0275ted"](-1, null, [" class."])), (l()(), e["\u0275eld"](848, 0, null, null, 2, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-76"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](849, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This style Should Apply same for all the possible variations of this sections."])), (l()(), e["\u0275eld"](851, 0, null, null, 51, "div", [
                    ["class", "col-md-12 col-lg-12 col-xl-6"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](852, 0, null, null, 50, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](853, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](854, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](855, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](856, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Basic tabs right icon"])), (l()(), e["\u0275eld"](858, 0, null, null, 44, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](859, 0, null, null, 43, "div", [
                    ["class", "tab-wrappers"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](860, 0, null, null, 17, "ul", [
                    ["class", "nav nav-tabs nav-tabs-highlight nav-tabs-bottom mb-4"],
                    ["role", "tablist"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](861, 0, null, null, 3, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](862, 0, null, null, 2, "a", [
                    ["aria-controls", "active"],
                    ["aria-expanded", "true"],
                    ["class", "nav-link active"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-77"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Active \xa0"])), (l()(), e["\u0275eld"](864, 0, null, null, 0, "i", [
                    ["class", "la la-user la-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](865, 0, null, null, 3, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](866, 0, null, null, 2, "a", [
                    ["aria-controls", "inactive"],
                    ["class", "nav-link"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-78"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Inactive \xa0"])), (l()(), e["\u0275eld"](868, 0, null, null, 0, "i", [
                    ["class", "la la-gear la-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](869, 0, null, null, 8, "li", [
                    ["class", "nav-item dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](870, 0, null, null, 2, "a", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "nav-link dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["href", "#"],
                    ["role", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Dropdown \xa0"])), (l()(), e["\u0275eld"](872, 0, null, null, 0, "i", [
                    ["class", "la la-bars la-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](873, 0, null, null, 4, "div", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](874, 0, null, null, 1, "a", [
                    ["aria-controls", "dropdown1"],
                    ["class", "dropdown-item"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-79"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dropdown tab"])), (l()(), e["\u0275eld"](876, 0, null, null, 1, "a", [
                    ["aria-controls", "dropdown2"],
                    ["class", "dropdown-item"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-80"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another tab"])), (l()(), e["\u0275eld"](878, 0, null, null, 24, "div", [
                    ["class", "tab-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](879, 0, null, null, 8, "div", [
                    ["class", "tab-pane fade show active"],
                    ["id", "tab-77"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](880, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic tabs example using "])), (l()(), e["\u0275eld"](882, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-tabs"])), (l()(), e["\u0275ted"](-1, null, [" class. Also requires base "])), (l()(), e["\u0275eld"](885, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-tabs-box"])), (l()(), e["\u0275ted"](-1, null, [" class. "])), (l()(), e["\u0275eld"](888, 0, null, null, 2, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-78"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](889, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This style Should Apply same for all the possible variations of this sections."])), (l()(), e["\u0275eld"](891, 0, null, null, 8, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-79"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](892, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic tabs example using "])), (l()(), e["\u0275eld"](894, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-tabs"])), (l()(), e["\u0275ted"](-1, null, [" class. Also requires base "])), (l()(), e["\u0275eld"](897, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav"])), (l()(), e["\u0275ted"](-1, null, [" class."])), (l()(), e["\u0275eld"](900, 0, null, null, 2, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-80"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](901, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This style Should Apply same for all the possible variations of this sections."])), (l()(), e["\u0275eld"](903, 0, null, null, 51, "div", [
                    ["class", "col-md-12 col-lg-12 col-xl-6"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](904, 0, null, null, 50, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](905, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](906, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](907, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](908, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Basic tabs left icon"])), (l()(), e["\u0275eld"](910, 0, null, null, 44, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](911, 0, null, null, 43, "div", [
                    ["class", "tab-wrappers"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](912, 0, null, null, 17, "ul", [
                    ["class", "nav nav-tabs nav-tabs-highlight nav-tabs-bottom mb-4"],
                    ["role", "tablist"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](913, 0, null, null, 3, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](914, 0, null, null, 2, "a", [
                    ["aria-controls", "active"],
                    ["aria-expanded", "true"],
                    ["class", "nav-link active"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-81"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](915, 0, null, null, 0, "i", [
                    ["class", "la la-user la-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" \xa0Active"])), (l()(), e["\u0275eld"](917, 0, null, null, 3, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](918, 0, null, null, 2, "a", [
                    ["aria-controls", "inactive"],
                    ["class", "nav-link"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-82"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](919, 0, null, null, 0, "i", [
                    ["class", "la la-gear la-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" \xa0Inactive"])), (l()(), e["\u0275eld"](921, 0, null, null, 8, "li", [
                    ["class", "nav-item dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](922, 0, null, null, 2, "a", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "nav-link dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["href", "#"],
                    ["role", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](923, 0, null, null, 0, "i", [
                    ["class", "la la-bars la-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" \xa0Dropdown "])), (l()(), e["\u0275eld"](925, 0, null, null, 4, "div", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](926, 0, null, null, 1, "a", [
                    ["aria-controls", "dropdown1"],
                    ["class", "dropdown-item"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-83"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dropdown tab"])), (l()(), e["\u0275eld"](928, 0, null, null, 1, "a", [
                    ["aria-controls", "dropdown2"],
                    ["class", "dropdown-item"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-84"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another tab"])), (l()(), e["\u0275eld"](930, 0, null, null, 24, "div", [
                    ["class", "tab-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](931, 0, null, null, 8, "div", [
                    ["class", "tab-pane fade show active"],
                    ["id", "tab-81"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](932, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic tabs example using "])), (l()(), e["\u0275eld"](934, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-tabs"])), (l()(), e["\u0275ted"](-1, null, [" class. Also requires base "])), (l()(), e["\u0275eld"](937, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-tabs-box"])), (l()(), e["\u0275ted"](-1, null, [" class. "])), (l()(), e["\u0275eld"](940, 0, null, null, 2, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-82"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](941, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This style Should Apply same for all the possible variations of this sections."])), (l()(), e["\u0275eld"](943, 0, null, null, 8, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-83"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](944, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic tabs example using "])), (l()(), e["\u0275eld"](946, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-tabs"])), (l()(), e["\u0275ted"](-1, null, [" class. Also requires base "])), (l()(), e["\u0275eld"](949, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav"])), (l()(), e["\u0275ted"](-1, null, [" class."])), (l()(), e["\u0275eld"](952, 0, null, null, 2, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-84"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](953, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This style Should Apply same for all the possible variations of this sections."])), (l()(), e["\u0275eld"](955, 0, null, null, 214, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](956, 0, null, null, 110, "div", [
                    ["class", "col-lg-12 col-xl-6"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](957, 0, null, null, 54, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](958, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](959, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](960, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](961, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Tabs with multiple elements"])), (l()(), e["\u0275eld"](963, 0, null, null, 48, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](964, 0, null, null, 47, "div", [
                    ["class", "tab-wrappers"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](965, 0, null, null, 21, "ul", [
                    ["class", "nav nav-tabs nav-tabs-highlight nav-tabs-bottom mb-4"],
                    ["role", "tablist"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](966, 0, null, null, 5, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](967, 0, null, null, 4, "a", [
                    ["aria-controls", "active"],
                    ["aria-expanded", "true"],
                    ["class", "nav-link active"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-85"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](968, 0, null, null, 1, "span", [
                    ["class", "badge badge-primary circle square-20"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["35"])), (l()(), e["\u0275ted"](-1, null, [" Active \xa0"])), (l()(), e["\u0275eld"](971, 0, null, null, 0, "i", [
                    ["class", "la la-user la-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](972, 0, null, null, 5, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](973, 0, null, null, 4, "a", [
                    ["aria-controls", "inactive"],
                    ["class", "nav-link"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-86"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](974, 0, null, null, 1, "span", [
                    ["class", "badge badge-danger"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Urgent"])), (l()(), e["\u0275ted"](-1, null, [" \xa0Inactive \xa0"])), (l()(), e["\u0275eld"](977, 0, null, null, 0, "i", [
                    ["class", "la la-gear la-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](978, 0, null, null, 8, "li", [
                    ["class", "nav-item dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](979, 0, null, null, 2, "a", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "nav-link dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["href", "#"],
                    ["role", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Dropdown \xa0"])), (l()(), e["\u0275eld"](981, 0, null, null, 0, "i", [
                    ["class", "la la-bars la-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](982, 0, null, null, 4, "div", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](983, 0, null, null, 1, "a", [
                    ["aria-controls", "dropdown1"],
                    ["class", "dropdown-item"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-87"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dropdown tab"])), (l()(), e["\u0275eld"](985, 0, null, null, 1, "a", [
                    ["aria-controls", "dropdown2"],
                    ["class", "dropdown-item"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-88"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another tab"])), (l()(), e["\u0275eld"](987, 0, null, null, 24, "div", [
                    ["class", "tab-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](988, 0, null, null, 8, "div", [
                    ["class", "tab-pane fade show active"],
                    ["id", "tab-85"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](989, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic tabs example using "])), (l()(), e["\u0275eld"](991, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-tabs"])), (l()(), e["\u0275ted"](-1, null, [" class. Also requires base "])), (l()(), e["\u0275eld"](994, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-tabs-box"])), (l()(), e["\u0275ted"](-1, null, [" class. "])), (l()(), e["\u0275eld"](997, 0, null, null, 2, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-86"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](998, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This style Should Apply same for all the possible variations of this sections."])), (l()(), e["\u0275eld"](1e3, 0, null, null, 8, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-87"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1001, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic tabs example using "])), (l()(), e["\u0275eld"](1003, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-tabs"])), (l()(), e["\u0275ted"](-1, null, [" class. Also requires base "])), (l()(), e["\u0275eld"](1006, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav"])), (l()(), e["\u0275ted"](-1, null, [" class."])), (l()(), e["\u0275eld"](1009, 0, null, null, 2, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-88"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1010, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This style Should Apply same for all the possible variations of this sections."])), (l()(), e["\u0275eld"](1012, 0, null, null, 54, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1013, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1014, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1015, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1016, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Bottom Tabs with elements"])), (l()(), e["\u0275eld"](1018, 0, null, null, 48, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1019, 0, null, null, 47, "div", [
                    ["class", "tab-wrappers tabs-below"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1020, 0, null, null, 24, "div", [
                    ["class", "tab-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1021, 0, null, null, 8, "div", [
                    ["class", "tab-pane fade show active"],
                    ["id", "tab-89"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1022, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic tabs example using "])), (l()(), e["\u0275eld"](1024, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-tabs"])), (l()(), e["\u0275ted"](-1, null, [" class. Also requires base "])), (l()(), e["\u0275eld"](1027, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-tabs-box"])), (l()(), e["\u0275ted"](-1, null, [" class. "])), (l()(), e["\u0275eld"](1030, 0, null, null, 2, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-90"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1031, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This style Should Apply same for all the possible variations of this sections."])), (l()(), e["\u0275eld"](1033, 0, null, null, 8, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-91"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1034, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic tabs example using "])), (l()(), e["\u0275eld"](1036, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-tabs"])), (l()(), e["\u0275ted"](-1, null, [" class. Also requires base "])), (l()(), e["\u0275eld"](1039, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav"])), (l()(), e["\u0275ted"](-1, null, [" class."])), (l()(), e["\u0275eld"](1042, 0, null, null, 2, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-92"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1043, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This style Should Apply same for all the possible variations of this sections."])), (l()(), e["\u0275eld"](1045, 0, null, null, 21, "ul", [
                    ["class", "nav nav-tabs nav-tabs-highlight nav-tabs-top"],
                    ["role", "tablist"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1046, 0, null, null, 5, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1047, 0, null, null, 4, "a", [
                    ["aria-controls", "active"],
                    ["aria-expanded", "true"],
                    ["class", "nav-link active"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-89"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1048, 0, null, null, 1, "span", [
                    ["class", "badge badge-primary circle square-20"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["35"])), (l()(), e["\u0275ted"](-1, null, [" Active \xa0"])), (l()(), e["\u0275eld"](1051, 0, null, null, 0, "i", [
                    ["class", "la la-user la-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1052, 0, null, null, 5, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1053, 0, null, null, 4, "a", [
                    ["aria-controls", "inactive"],
                    ["class", "nav-link"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-90"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1054, 0, null, null, 1, "span", [
                    ["class", "badge badge-danger"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Urgent"])), (l()(), e["\u0275ted"](-1, null, [" \xa0Inactive \xa0"])), (l()(), e["\u0275eld"](1057, 0, null, null, 0, "i", [
                    ["class", "la la-gear la-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1058, 0, null, null, 8, "li", [
                    ["class", "nav-item dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1059, 0, null, null, 2, "a", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "nav-link dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["href", "#"],
                    ["role", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Dropdown \xa0"])), (l()(), e["\u0275eld"](1061, 0, null, null, 0, "i", [
                    ["class", "la la-bars la-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1062, 0, null, null, 4, "div", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1063, 0, null, null, 1, "a", [
                    ["aria-controls", "dropdown1"],
                    ["class", "dropdown-item"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-91"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dropdown tab"])), (l()(), e["\u0275eld"](1065, 0, null, null, 1, "a", [
                    ["aria-controls", "dropdown2"],
                    ["class", "dropdown-item"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-92"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another tab"])), (l()(), e["\u0275eld"](1067, 0, null, null, 102, "div", [
                    ["class", "col-lg-12 col-xl-6"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1068, 0, null, null, 50, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1069, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1070, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1071, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1072, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Alternet Version of thie series"])), (l()(), e["\u0275eld"](1074, 0, null, null, 44, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1075, 0, null, null, 43, "div", [
                    ["class", "tab-wrappers"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1076, 0, null, null, 17, "ul", [
                    ["class", "nav nav-tabs nav-tabs-highlight nav-tabs-bottom mb-4"],
                    ["role", "tablist"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1077, 0, null, null, 3, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1078, 0, null, null, 2, "a", [
                    ["aria-controls", "active"],
                    ["aria-expanded", "true"],
                    ["class", "nav-link active"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-93"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Active \xa0"])), (l()(), e["\u0275eld"](1080, 0, null, null, 0, "i", [
                    ["class", "la la-user la-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1081, 0, null, null, 3, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1082, 0, null, null, 2, "a", [
                    ["aria-controls", "inactive"],
                    ["class", "nav-link"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-94"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Inactive \xa0"])), (l()(), e["\u0275eld"](1084, 0, null, null, 0, "i", [
                    ["class", "la la-gear la-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1085, 0, null, null, 8, "li", [
                    ["class", "nav-item dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1086, 0, null, null, 2, "a", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "nav-link dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["href", "#"],
                    ["role", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Dropdown \xa0"])), (l()(), e["\u0275eld"](1088, 0, null, null, 0, "i", [
                    ["class", "la la-bars la-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1089, 0, null, null, 4, "div", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1090, 0, null, null, 1, "a", [
                    ["aria-controls", "dropdown1"],
                    ["class", "dropdown-item"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-95"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dropdown tab"])), (l()(), e["\u0275eld"](1092, 0, null, null, 1, "a", [
                    ["aria-controls", "dropdown2"],
                    ["class", "dropdown-item"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-96"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another tab"])), (l()(), e["\u0275eld"](1094, 0, null, null, 24, "div", [
                    ["class", "tab-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1095, 0, null, null, 8, "div", [
                    ["class", "tab-pane fade show active"],
                    ["id", "tab-93"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1096, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic tabs example using "])), (l()(), e["\u0275eld"](1098, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-tabs"])), (l()(), e["\u0275ted"](-1, null, [" class. Also requires base "])), (l()(), e["\u0275eld"](1101, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-tabs-box"])), (l()(), e["\u0275ted"](-1, null, [" class. "])), (l()(), e["\u0275eld"](1104, 0, null, null, 2, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-94"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1105, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This style Should Apply same for all the possible variations of this sections."])), (l()(), e["\u0275eld"](1107, 0, null, null, 8, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-95"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1108, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic tabs example using "])), (l()(), e["\u0275eld"](1110, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-tabs"])), (l()(), e["\u0275ted"](-1, null, [" class. Also requires base "])), (l()(), e["\u0275eld"](1113, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav"])), (l()(), e["\u0275ted"](-1, null, [" class."])), (l()(), e["\u0275eld"](1116, 0, null, null, 2, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-96"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1117, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This style Should Apply same for all the possible variations of this sections."])), (l()(), e["\u0275eld"](1119, 0, null, null, 50, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1120, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1121, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1122, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1123, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Bottom Tabs with line"])), (l()(), e["\u0275eld"](1125, 0, null, null, 44, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1126, 0, null, null, 43, "div", [
                    ["class", "tab-wrappers"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1127, 0, null, null, 24, "div", [
                    ["class", "tab-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1128, 0, null, null, 8, "div", [
                    ["class", "tab-pane fade show active"],
                    ["id", "tab-97"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1129, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic tabs example using "])), (l()(), e["\u0275eld"](1131, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-tabs"])), (l()(), e["\u0275ted"](-1, null, [" class. Also requires base "])), (l()(), e["\u0275eld"](1134, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-tabs-box"])), (l()(), e["\u0275ted"](-1, null, [" class. "])), (l()(), e["\u0275eld"](1137, 0, null, null, 2, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-98"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1138, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This style Should Apply same for all the possible variations of this sections."])), (l()(), e["\u0275eld"](1140, 0, null, null, 8, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-99"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1141, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic tabs example using "])), (l()(), e["\u0275eld"](1143, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-tabs"])), (l()(), e["\u0275ted"](-1, null, [" class. Also requires base "])), (l()(), e["\u0275eld"](1146, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav"])), (l()(), e["\u0275ted"](-1, null, [" class."])), (l()(), e["\u0275eld"](1149, 0, null, null, 2, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-100"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1150, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This style Should Apply same for all the possible variations of this sections."])), (l()(), e["\u0275eld"](1152, 0, null, null, 17, "ul", [
                    ["class", "nav nav-tabs nav-tabs-highlight nav-tabs-top mt-4"],
                    ["role", "tablist"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1153, 0, null, null, 3, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1154, 0, null, null, 2, "a", [
                    ["aria-controls", "active"],
                    ["aria-expanded", "true"],
                    ["class", "nav-link active"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-97"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Active \xa0"])), (l()(), e["\u0275eld"](1156, 0, null, null, 0, "i", [
                    ["class", "la la-user la-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1157, 0, null, null, 3, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1158, 0, null, null, 2, "a", [
                    ["aria-controls", "inactive"],
                    ["class", "nav-link"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-98"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Inactive \xa0"])), (l()(), e["\u0275eld"](1160, 0, null, null, 0, "i", [
                    ["class", "la la-gear la-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1161, 0, null, null, 8, "li", [
                    ["class", "nav-item dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1162, 0, null, null, 2, "a", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "nav-link dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["href", "#"],
                    ["role", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Dropdown \xa0"])), (l()(), e["\u0275eld"](1164, 0, null, null, 0, "i", [
                    ["class", "la la-bars la-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1165, 0, null, null, 4, "div", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1166, 0, null, null, 1, "a", [
                    ["aria-controls", "dropdown1"],
                    ["class", "dropdown-item"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-99"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dropdown tab"])), (l()(), e["\u0275eld"](1168, 0, null, null, 1, "a", [
                    ["aria-controls", "dropdown2"],
                    ["class", "dropdown-item"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-100"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another tab"])), (l()(), e["\u0275eld"](1170, 0, null, null, 104, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1171, 0, null, null, 51, "div", [
                    ["class", "col-lg-12 col-xl-6"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1172, 0, null, null, 50, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1173, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1174, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1175, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1176, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Basic Tabs"])), (l()(), e["\u0275eld"](1178, 0, null, null, 44, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1179, 0, null, null, 43, "div", [
                    ["class", "tab-wrappers colored-nav-tabs"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1180, 0, null, null, 17, "ul", [
                    ["class", "nav nav-pills bg-primary mb-4"],
                    ["role", "tablist"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1181, 0, null, null, 3, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1182, 0, null, null, 2, "a", [
                    ["aria-controls", "active"],
                    ["aria-expanded", "true"],
                    ["class", "nav-link active"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-101"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Active \xa0"])), (l()(), e["\u0275eld"](1184, 0, null, null, 0, "i", [
                    ["class", "la la-user la-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1185, 0, null, null, 3, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1186, 0, null, null, 2, "a", [
                    ["aria-controls", "inactive"],
                    ["class", "nav-link"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-102"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Inactive \xa0"])), (l()(), e["\u0275eld"](1188, 0, null, null, 0, "i", [
                    ["class", "la la-gear la-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1189, 0, null, null, 8, "li", [
                    ["class", "nav-item dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1190, 0, null, null, 2, "a", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "nav-link dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["href", "#"],
                    ["role", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Dropdown \xa0"])), (l()(), e["\u0275eld"](1192, 0, null, null, 0, "i", [
                    ["class", "la la-bars la-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1193, 0, null, null, 4, "div", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1194, 0, null, null, 1, "a", [
                    ["aria-controls", "dropdown1"],
                    ["class", "dropdown-item"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-103"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dropdown tab"])), (l()(), e["\u0275eld"](1196, 0, null, null, 1, "a", [
                    ["aria-controls", "dropdown2"],
                    ["class", "dropdown-item"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-104"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another tab"])), (l()(), e["\u0275eld"](1198, 0, null, null, 24, "div", [
                    ["class", "tab-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1199, 0, null, null, 8, "div", [
                    ["class", "tab-pane fade show active"],
                    ["id", "tab-101"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1200, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic pills example using "])), (l()(), e["\u0275eld"](1202, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-pills"])), (l()(), e["\u0275ted"](-1, null, [" class. Also requires base "])), (l()(), e["\u0275eld"](1205, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-pills-box"])), (l()(), e["\u0275ted"](-1, null, [" class. "])), (l()(), e["\u0275eld"](1208, 0, null, null, 2, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-102"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1209, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This style Should Apply same for all the possible variations of this sections."])), (l()(), e["\u0275eld"](1211, 0, null, null, 8, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-103"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1212, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic pills example using "])), (l()(), e["\u0275eld"](1214, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-pills"])), (l()(), e["\u0275ted"](-1, null, [" class. Also requires base "])), (l()(), e["\u0275eld"](1217, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav"])), (l()(), e["\u0275ted"](-1, null, [" class."])), (l()(), e["\u0275eld"](1220, 0, null, null, 2, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-104"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1221, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This style Should Apply same for all the possible variations of this sections."])), (l()(), e["\u0275eld"](1223, 0, null, null, 51, "div", [
                    ["class", "col-lg-12 col-xl-6"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1224, 0, null, null, 50, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1225, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1226, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1227, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1228, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Basic Tabs"])), (l()(), e["\u0275eld"](1230, 0, null, null, 44, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1231, 0, null, null, 43, "div", [
                    ["class", "tab-wrappers colored-nav-tabs"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1232, 0, null, null, 17, "ul", [
                    ["class", "nav nav-pills bg-warning mb-4"],
                    ["role", "tablist"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1233, 0, null, null, 3, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1234, 0, null, null, 2, "a", [
                    ["aria-controls", "active"],
                    ["aria-expanded", "true"],
                    ["class", "nav-link active"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-105"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Active \xa0"])), (l()(), e["\u0275eld"](1236, 0, null, null, 0, "i", [
                    ["class", "la la-user la-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1237, 0, null, null, 3, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1238, 0, null, null, 2, "a", [
                    ["aria-controls", "inactive"],
                    ["class", "nav-link"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-106"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Inactive \xa0"])), (l()(), e["\u0275eld"](1240, 0, null, null, 0, "i", [
                    ["class", "la la-gear la-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1241, 0, null, null, 8, "li", [
                    ["class", "nav-item dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1242, 0, null, null, 2, "a", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "nav-link dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["href", "#"],
                    ["role", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Dropdown \xa0"])), (l()(), e["\u0275eld"](1244, 0, null, null, 0, "i", [
                    ["class", "la la-bars la-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1245, 0, null, null, 4, "div", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1246, 0, null, null, 1, "a", [
                    ["aria-controls", "dropdown1"],
                    ["class", "dropdown-item"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-107"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dropdown tab"])), (l()(), e["\u0275eld"](1248, 0, null, null, 1, "a", [
                    ["aria-controls", "dropdown2"],
                    ["class", "dropdown-item"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-108"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another tab"])), (l()(), e["\u0275eld"](1250, 0, null, null, 24, "div", [
                    ["class", "tab-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1251, 0, null, null, 8, "div", [
                    ["class", "tab-pane fade show active"],
                    ["id", "tab-105"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1252, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic pills example using "])), (l()(), e["\u0275eld"](1254, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-pills"])), (l()(), e["\u0275ted"](-1, null, [" class. Also requires base "])), (l()(), e["\u0275eld"](1257, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-pills-box"])), (l()(), e["\u0275ted"](-1, null, [" class. "])), (l()(), e["\u0275eld"](1260, 0, null, null, 2, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-106"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1261, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This style Should Apply same for all the possible variations of this sections."])), (l()(), e["\u0275eld"](1263, 0, null, null, 8, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-107"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1264, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic pills example using "])), (l()(), e["\u0275eld"](1266, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-pills"])), (l()(), e["\u0275ted"](-1, null, [" class. Also requires base "])), (l()(), e["\u0275eld"](1269, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav"])), (l()(), e["\u0275ted"](-1, null, [" class."])), (l()(), e["\u0275eld"](1272, 0, null, null, 2, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-108"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1273, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This style Should Apply same for all the possible variations of this sections."])), (l()(), e["\u0275eld"](1275, 0, null, null, 2, "div", [
                    ["class", "chk-ui-heading"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1276, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Rounded Button Tabs"])), (l()(), e["\u0275eld"](1278, 0, null, null, 358, "div", [
                    ["class", "row mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1279, 0, null, null, 48, "div", [
                    ["class", "col-md-12 col-lg-12 col-xl-6"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1280, 0, null, null, 47, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1281, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1282, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1283, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1284, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Basic tabs"])), (l()(), e["\u0275eld"](1286, 0, null, null, 41, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1287, 0, null, null, 40, "div", [
                    ["class", "tab-wrappers"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1288, 0, null, null, 14, "ul", [
                    ["class", "nav nav-pills mb-4"],
                    ["role", "tablist"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1289, 0, null, null, 2, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1290, 0, null, null, 1, "a", [
                    ["aria-controls", "active"],
                    ["aria-expanded", "true"],
                    ["class", "nav-link active"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-109"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Active"])), (l()(), e["\u0275eld"](1292, 0, null, null, 2, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1293, 0, null, null, 1, "a", [
                    ["aria-controls", "inactive"],
                    ["class", "nav-link"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-110"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Inactive"])), (l()(), e["\u0275eld"](1295, 0, null, null, 7, "li", [
                    ["class", "nav-item dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1296, 0, null, null, 1, "a", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "nav-link dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["href", "#"],
                    ["role", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Dropdown "])), (l()(), e["\u0275eld"](1298, 0, null, null, 4, "div", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1299, 0, null, null, 1, "a", [
                    ["aria-controls", "dropdown1"],
                    ["class", "dropdown-item"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-111"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dropdown tab"])), (l()(), e["\u0275eld"](1301, 0, null, null, 1, "a", [
                    ["aria-controls", "dropdown2"],
                    ["class", "dropdown-item"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-112"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another tab"])), (l()(), e["\u0275eld"](1303, 0, null, null, 24, "div", [
                    ["class", "tab-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1304, 0, null, null, 8, "div", [
                    ["class", "tab-pane fade show active"],
                    ["id", "tab-109"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1305, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic pills example using "])), (l()(), e["\u0275eld"](1307, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-pills"])), (l()(), e["\u0275ted"](-1, null, [" class. Also requires base "])), (l()(), e["\u0275eld"](1310, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav"])), (l()(), e["\u0275ted"](-1, null, [" class. "])), (l()(), e["\u0275eld"](1313, 0, null, null, 2, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-110"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1314, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This style Should Apply same for all the possible variations of this sections."])), (l()(), e["\u0275eld"](1316, 0, null, null, 8, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-111"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1317, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic pills example using "])), (l()(), e["\u0275eld"](1319, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-pills"])), (l()(), e["\u0275ted"](-1, null, [" class. Also requires base "])), (l()(), e["\u0275eld"](1322, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav"])), (l()(), e["\u0275ted"](-1, null, [" class."])), (l()(), e["\u0275eld"](1325, 0, null, null, 2, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-112"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1326, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This style Should Apply same for all the possible variations of this sections."])), (l()(), e["\u0275eld"](1328, 0, null, null, 51, "div", [
                    ["class", "col-md-12 col-lg-12 col-xl-6"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1329, 0, null, null, 50, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1330, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1331, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1332, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1333, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Basic tabs left icon"])), (l()(), e["\u0275eld"](1335, 0, null, null, 44, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1336, 0, null, null, 43, "div", [
                    ["class", "tab-wrappers"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1337, 0, null, null, 17, "ul", [
                    ["class", "nav nav-pills mb-4"],
                    ["role", "tablist"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1338, 0, null, null, 3, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1339, 0, null, null, 2, "a", [
                    ["aria-controls", "active"],
                    ["aria-expanded", "true"],
                    ["class", "nav-link active"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-113"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1340, 0, null, null, 0, "i", [
                    ["class", "la la-user la-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" \xa0 Active "])), (l()(), e["\u0275eld"](1342, 0, null, null, 3, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1343, 0, null, null, 2, "a", [
                    ["aria-controls", "inactive"],
                    ["class", "nav-link"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-114"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1344, 0, null, null, 0, "i", [
                    ["class", "la la-gear la-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" \xa0 Inactive "])), (l()(), e["\u0275eld"](1346, 0, null, null, 8, "li", [
                    ["class", "nav-item dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1347, 0, null, null, 2, "a", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "nav-link dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["href", "#"],
                    ["role", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1348, 0, null, null, 0, "i", [
                    ["class", "la la-bars la-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" \xa0Dropdown "])), (l()(), e["\u0275eld"](1350, 0, null, null, 4, "div", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1351, 0, null, null, 1, "a", [
                    ["aria-controls", "dropdown1"],
                    ["class", "dropdown-item"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-115"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dropdown tab"])), (l()(), e["\u0275eld"](1353, 0, null, null, 1, "a", [
                    ["aria-controls", "dropdown2"],
                    ["class", "dropdown-item"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-116"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another tab"])), (l()(), e["\u0275eld"](1355, 0, null, null, 24, "div", [
                    ["class", "tab-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1356, 0, null, null, 8, "div", [
                    ["class", "tab-pane fade show active"],
                    ["id", "tab-113"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1357, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic pills example using "])), (l()(), e["\u0275eld"](1359, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-pills"])), (l()(), e["\u0275ted"](-1, null, [" class. Also requires base "])), (l()(), e["\u0275eld"](1362, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav"])), (l()(), e["\u0275ted"](-1, null, [" class. "])), (l()(), e["\u0275eld"](1365, 0, null, null, 2, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-114"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1366, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This style Should Apply same for all the possible variations of this sections."])), (l()(), e["\u0275eld"](1368, 0, null, null, 8, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-115"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1369, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic pills example using "])), (l()(), e["\u0275eld"](1371, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-pills"])), (l()(), e["\u0275ted"](-1, null, [" class. Also requires base "])), (l()(), e["\u0275eld"](1374, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav"])), (l()(), e["\u0275ted"](-1, null, [" class."])), (l()(), e["\u0275eld"](1377, 0, null, null, 2, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-116"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1378, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This style Should Apply same for all the possible variations of this sections."])), (l()(), e["\u0275eld"](1380, 0, null, null, 51, "div", [
                    ["class", "col-md-12 col-lg-12 col-xl-6"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1381, 0, null, null, 50, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1382, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1383, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1384, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1385, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Full Width Tabs"])), (l()(), e["\u0275eld"](1387, 0, null, null, 44, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1388, 0, null, null, 43, "div", [
                    ["class", "tab-wrappers"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1389, 0, null, null, 17, "ul", [
                    ["class", "nav nav-pills nav-justified mb-4"],
                    ["role", "tablist"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1390, 0, null, null, 3, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1391, 0, null, null, 2, "a", [
                    ["aria-controls", "active"],
                    ["aria-expanded", "true"],
                    ["class", "nav-link active"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-117"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1392, 0, null, null, 0, "i", [
                    ["class", "la la-user la-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" \xa0 Active "])), (l()(), e["\u0275eld"](1394, 0, null, null, 3, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1395, 0, null, null, 2, "a", [
                    ["aria-controls", "inactive"],
                    ["class", "nav-link"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-118"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1396, 0, null, null, 0, "i", [
                    ["class", "la la-gear la-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" \xa0 Inactive "])), (l()(), e["\u0275eld"](1398, 0, null, null, 8, "li", [
                    ["class", "nav-item dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1399, 0, null, null, 2, "a", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "nav-link dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["href", "#"],
                    ["role", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1400, 0, null, null, 0, "i", [
                    ["class", "la la-bars la-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" \xa0Dropdown "])), (l()(), e["\u0275eld"](1402, 0, null, null, 4, "div", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1403, 0, null, null, 1, "a", [
                    ["aria-controls", "dropdown1"],
                    ["class", "dropdown-item"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-119"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dropdown tab"])), (l()(), e["\u0275eld"](1405, 0, null, null, 1, "a", [
                    ["aria-controls", "dropdown2"],
                    ["class", "dropdown-item"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-120"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another tab"])), (l()(), e["\u0275eld"](1407, 0, null, null, 24, "div", [
                    ["class", "tab-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1408, 0, null, null, 8, "div", [
                    ["class", "tab-pane fade show active"],
                    ["id", "tab-117"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1409, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic pills example using "])), (l()(), e["\u0275eld"](1411, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-pills"])), (l()(), e["\u0275ted"](-1, null, [" class. Also requires base "])), (l()(), e["\u0275eld"](1414, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav"])), (l()(), e["\u0275ted"](-1, null, [" class. "])), (l()(), e["\u0275eld"](1417, 0, null, null, 2, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-118"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1418, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This style Should Apply same for all the possible variations of this sections."])), (l()(), e["\u0275eld"](1420, 0, null, null, 8, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-119"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1421, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic pills example using "])), (l()(), e["\u0275eld"](1423, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-pills"])), (l()(), e["\u0275ted"](-1, null, [" class. Also requires base "])), (l()(), e["\u0275eld"](1426, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav"])), (l()(), e["\u0275ted"](-1, null, [" class."])), (l()(), e["\u0275eld"](1429, 0, null, null, 2, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-120"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1430, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This style Should Apply same for all the possible variations of this sections."])), (l()(), e["\u0275eld"](1432, 0, null, null, 51, "div", [
                    ["class", "col-md-12 col-lg-12 col-xl-6"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1433, 0, null, null, 50, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1434, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1435, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1436, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1437, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Basic tabs"])), (l()(), e["\u0275eld"](1439, 0, null, null, 44, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1440, 0, null, null, 43, "div", [
                    ["class", "tab-wrappers"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1441, 0, null, null, 42, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1442, 0, null, null, 15, "div", [
                    ["class", "col-md-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1443, 0, null, null, 14, "ul", [
                    ["class", "nav nav-pills flex-column mb-4"],
                    ["role", "tablist"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1444, 0, null, null, 2, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1445, 0, null, null, 1, "a", [
                    ["aria-controls", "active"],
                    ["aria-expanded", "true"],
                    ["class", "nav-link active"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-121"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Active"])), (l()(), e["\u0275eld"](1447, 0, null, null, 2, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1448, 0, null, null, 1, "a", [
                    ["aria-controls", "inactive"],
                    ["class", "nav-link"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-122"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Inactive"])), (l()(), e["\u0275eld"](1450, 0, null, null, 7, "li", [
                    ["class", "nav-item dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1451, 0, null, null, 1, "a", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "nav-link dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["href", "#"],
                    ["role", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Dropdown "])), (l()(), e["\u0275eld"](1453, 0, null, null, 4, "div", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1454, 0, null, null, 1, "a", [
                    ["aria-controls", "dropdown1"],
                    ["class", "dropdown-item"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-123"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dropdown tab"])), (l()(), e["\u0275eld"](1456, 0, null, null, 1, "a", [
                    ["aria-controls", "dropdown2"],
                    ["class", "dropdown-item"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-124"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another tab"])), (l()(), e["\u0275eld"](1458, 0, null, null, 25, "div", [
                    ["class", "col-md-8"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1459, 0, null, null, 24, "div", [
                    ["class", "tab-content flex-column"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1460, 0, null, null, 8, "div", [
                    ["class", "tab-pane fade show active"],
                    ["id", "tab-121"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1461, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic pills example using "])), (l()(), e["\u0275eld"](1463, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-pills"])), (l()(), e["\u0275ted"](-1, null, [" class. Also requires base "])), (l()(), e["\u0275eld"](1466, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav"])), (l()(), e["\u0275ted"](-1, null, [" class. "])), (l()(), e["\u0275eld"](1469, 0, null, null, 2, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-122"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1470, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This style Should Apply same for all the possible variations of this sections."])), (l()(), e["\u0275eld"](1472, 0, null, null, 8, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-123"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1473, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic pills example using "])), (l()(), e["\u0275eld"](1475, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-pills"])), (l()(), e["\u0275ted"](-1, null, [" class. Also requires base "])), (l()(), e["\u0275eld"](1478, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav"])), (l()(), e["\u0275ted"](-1, null, [" class."])), (l()(), e["\u0275eld"](1481, 0, null, null, 2, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-124"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1482, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This style Should Apply same for all the possible variations of this sections."])), (l()(), e["\u0275eld"](1484, 0, null, null, 51, "div", [
                    ["class", "col-md-12 col-lg-12 col-xl-6"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1485, 0, null, null, 50, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1486, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1487, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1488, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1489, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Basic tabs"])), (l()(), e["\u0275eld"](1491, 0, null, null, 44, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1492, 0, null, null, 43, "div", [
                    ["class", "tab-wrappers tabs-left"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1493, 0, null, null, 42, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1494, 0, null, null, 15, "div", [
                    ["class", "col-md-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1495, 0, null, null, 14, "ul", [
                    ["class", "nav nav-tabs flex-column m-0"],
                    ["role", "tablist"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1496, 0, null, null, 2, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1497, 0, null, null, 1, "a", [
                    ["aria-controls", "active"],
                    ["aria-expanded", "true"],
                    ["class", "nav-link active"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-125"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Active"])), (l()(), e["\u0275eld"](1499, 0, null, null, 2, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1500, 0, null, null, 1, "a", [
                    ["aria-controls", "inactive"],
                    ["class", "nav-link"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-126"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Inactive"])), (l()(), e["\u0275eld"](1502, 0, null, null, 7, "li", [
                    ["class", "nav-item dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1503, 0, null, null, 1, "a", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "nav-link dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["href", "#"],
                    ["role", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Dropdown "])), (l()(), e["\u0275eld"](1505, 0, null, null, 4, "div", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1506, 0, null, null, 1, "a", [
                    ["aria-controls", "dropdown1"],
                    ["class", "dropdown-item"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-127"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dropdown tab"])), (l()(), e["\u0275eld"](1508, 0, null, null, 1, "a", [
                    ["aria-controls", "dropdown2"],
                    ["class", "dropdown-item"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-128"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another tab"])), (l()(), e["\u0275eld"](1510, 0, null, null, 25, "div", [
                    ["class", "col-md-8"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1511, 0, null, null, 24, "div", [
                    ["class", "tab-content flex-column"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1512, 0, null, null, 8, "div", [
                    ["class", "tab-pane fade show active"],
                    ["id", "tab-125"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1513, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic tabs example using "])), (l()(), e["\u0275eld"](1515, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-tabs"])), (l()(), e["\u0275ted"](-1, null, [" class. Also requires base "])), (l()(), e["\u0275eld"](1518, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav"])), (l()(), e["\u0275ted"](-1, null, [" class. "])), (l()(), e["\u0275eld"](1521, 0, null, null, 2, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-126"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1522, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This style Should Apply same for all the possible variations of this sections."])), (l()(), e["\u0275eld"](1524, 0, null, null, 8, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-127"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1525, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic tabs example using "])), (l()(), e["\u0275eld"](1527, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-tabs"])), (l()(), e["\u0275ted"](-1, null, [" class. Also requires base "])), (l()(), e["\u0275eld"](1530, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav"])), (l()(), e["\u0275ted"](-1, null, [" class."])), (l()(), e["\u0275eld"](1533, 0, null, null, 2, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-128"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1534, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This style Should Apply same for all the possible variations of this sections."])), (l()(), e["\u0275eld"](1536, 0, null, null, 51, "div", [
                    ["class", "col-md-12 col-lg-12 col-xl-6"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1537, 0, null, null, 50, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1538, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1539, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1540, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1541, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Basic tabs"])), (l()(), e["\u0275eld"](1543, 0, null, null, 44, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1544, 0, null, null, 43, "div", [
                    ["class", "tab-wrappers tabs-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1545, 0, null, null, 42, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1546, 0, null, null, 25, "div", [
                    ["class", "col-md-8"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1547, 0, null, null, 24, "div", [
                    ["class", "tab-content flex-column"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1548, 0, null, null, 8, "div", [
                    ["class", "tab-pane fade show active"],
                    ["id", "tab-125"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1549, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic tabs example using "])), (l()(), e["\u0275eld"](1551, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-tabs"])), (l()(), e["\u0275ted"](-1, null, [" class. Also requires base "])), (l()(), e["\u0275eld"](1554, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav"])), (l()(), e["\u0275ted"](-1, null, [" class. "])), (l()(), e["\u0275eld"](1557, 0, null, null, 2, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-126"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1558, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This style Should Apply same for all the possible variations of this sections."])), (l()(), e["\u0275eld"](1560, 0, null, null, 8, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-127"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1561, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic tabs example using "])), (l()(), e["\u0275eld"](1563, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-tabs"])), (l()(), e["\u0275ted"](-1, null, [" class. Also requires base "])), (l()(), e["\u0275eld"](1566, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav"])), (l()(), e["\u0275ted"](-1, null, [" class."])), (l()(), e["\u0275eld"](1569, 0, null, null, 2, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-128"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1570, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This style Should Apply same for all the possible variations of this sections."])), (l()(), e["\u0275eld"](1572, 0, null, null, 15, "div", [
                    ["class", "col-md-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1573, 0, null, null, 14, "ul", [
                    ["class", "nav nav-tabs flex-column m-0"],
                    ["role", "tablist"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1574, 0, null, null, 2, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1575, 0, null, null, 1, "a", [
                    ["aria-controls", "active"],
                    ["aria-expanded", "true"],
                    ["class", "nav-link active"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-125"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Active"])), (l()(), e["\u0275eld"](1577, 0, null, null, 2, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1578, 0, null, null, 1, "a", [
                    ["aria-controls", "inactive"],
                    ["class", "nav-link"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-126"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Inactive"])), (l()(), e["\u0275eld"](1580, 0, null, null, 7, "li", [
                    ["class", "nav-item dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1581, 0, null, null, 1, "a", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "nav-link dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["href", "#"],
                    ["role", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Dropdown "])), (l()(), e["\u0275eld"](1583, 0, null, null, 4, "div", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1584, 0, null, null, 1, "a", [
                    ["aria-controls", "dropdown1"],
                    ["class", "dropdown-item"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-127"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dropdown tab"])), (l()(), e["\u0275eld"](1586, 0, null, null, 1, "a", [
                    ["aria-controls", "dropdown2"],
                    ["class", "dropdown-item"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-128"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another tab"])), (l()(), e["\u0275eld"](1588, 0, null, null, 48, "div", [
                    ["class", "col-sm-12 col-md-12 col-lg-12"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1589, 0, null, null, 47, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1590, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1591, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1592, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1593, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Right align with popup"])), (l()(), e["\u0275eld"](1595, 0, null, null, 41, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1596, 0, null, null, 40, "div", [
                    ["class", "tab-wrappers"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1597, 0, null, null, 14, "ul", [
                    ["class", "nav nav-tabs justify-content-end mb-4"],
                    ["role", "tablist"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1598, 0, null, null, 2, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1599, 0, null, null, 1, "a", [
                    ["aria-controls", "active"],
                    ["aria-expanded", "true"],
                    ["class", "nav-link active"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-9"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Active"])), (l()(), e["\u0275eld"](1601, 0, null, null, 2, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1602, 0, null, null, 1, "a", [
                    ["aria-controls", "inactive"],
                    ["class", "nav-link"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-10"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Inactive"])), (l()(), e["\u0275eld"](1604, 0, null, null, 7, "li", [
                    ["class", "nav-item dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1605, 0, null, null, 1, "a", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "nav-link dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["href", "#"],
                    ["role", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Dropdown "])), (l()(), e["\u0275eld"](1607, 0, null, null, 4, "div", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1608, 0, null, null, 1, "a", [
                    ["aria-controls", "dropdown1"],
                    ["class", "dropdown-item"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-11"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dropdown tab"])), (l()(), e["\u0275eld"](1610, 0, null, null, 1, "a", [
                    ["aria-controls", "dropdown2"],
                    ["class", "dropdown-item"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-12"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another tab"])), (l()(), e["\u0275eld"](1612, 0, null, null, 24, "div", [
                    ["class", "tab-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1613, 0, null, null, 8, "div", [
                    ["class", "tab-pane fade show active"],
                    ["id", "tab-9"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1614, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic tabs example using "])), (l()(), e["\u0275eld"](1616, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-tabs"])), (l()(), e["\u0275ted"](-1, null, [" class. Also requires base "])), (l()(), e["\u0275eld"](1619, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav"])), (l()(), e["\u0275ted"](-1, null, [" class. "])), (l()(), e["\u0275eld"](1622, 0, null, null, 2, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-10"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1623, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This style Should Apply same for all the possible variations of this sections."])), (l()(), e["\u0275eld"](1625, 0, null, null, 8, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-11"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1626, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic tabs example using "])), (l()(), e["\u0275eld"](1628, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav-tabs"])), (l()(), e["\u0275ted"](-1, null, [" class. Also requires base "])), (l()(), e["\u0275eld"](1631, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".nav"])), (l()(), e["\u0275ted"](-1, null, [" class."])), (l()(), e["\u0275eld"](1634, 0, null, null, 2, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-12"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1635, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This style Should Apply same for all the possible variations of this sections."]))], null, null)
            }
            var O = e["\u0275ccf"]("ms-buttons", q, function(l) {
                    return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 1, "ms-buttons", [], [
                        [40, "@fadeInAnimation", 0]
                    ], null, null, W, N)), e["\u0275did"](1, 114688, null, 0, q, [j.a], null, null)], function(l, n) {
                        l(n, 1, 0)
                    }, function(l, n) {
                        l(n, 0, 0, !0)
                    })
                }, {}, {}, []),
                z = function() {
                    function l(l) {
                        this.pageTitleService = l
                    }
                    return l.prototype.ngOnInit = function() {
                        this.pageTitleService.setTitle("Accordions")
                    }, l
                }(),
                P = e["\u0275crt"]({
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

            function V(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 133, "div", [
                    ["class", "accordion-wrapper"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 65, "div", [
                    ["class", "row mb-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](2, 0, null, null, 31, "div", [
                    ["class", "col-lg-12 col-xl-6"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](3, 0, null, null, 2, "div", [
                    ["class", "chk-ui-heading"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](4, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Basic Accordion"])), (l()(), e["\u0275eld"](6, 0, null, null, 27, "div", [
                    ["aria-multiselectable", "true"],
                    ["id", "accordion-1"],
                    ["role", "tablist"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](7, 0, null, null, 8, "div", [
                    ["class", "card card-white"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](8, 0, null, null, 3, "div", [
                    ["class", "card-header"],
                    ["id", "heading-1"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](9, 0, null, null, 2, "h5", [
                    ["class", "mb-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](10, 0, null, null, 1, "a", [
                    ["aria-controls", "collapse-1"],
                    ["aria-expanded", "true"],
                    ["data-parent", "#accordion"],
                    ["data-toggle", "collapse"],
                    ["href", "#collapse-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic tabs "])), (l()(), e["\u0275eld"](12, 0, null, null, 3, "div", [
                    ["aria-labelledby", "heading-1"],
                    ["class", "collapse show"],
                    ["id", "collapse-1"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](13, 0, null, null, 2, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](14, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it."])), (l()(), e["\u0275eld"](16, 0, null, null, 8, "div", [
                    ["class", "card card-white"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](17, 0, null, null, 3, "div", [
                    ["class", "card-header"],
                    ["id", "heading-2"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](18, 0, null, null, 2, "h5", [
                    ["class", "mb-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](19, 0, null, null, 1, "a", [
                    ["aria-controls", "collapse-2"],
                    ["aria-expanded", "false"],
                    ["class", "collapsed"],
                    ["data-parent", "#accordion"],
                    ["data-toggle", "collapse"],
                    ["href", "#collapse-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Closed item "])), (l()(), e["\u0275eld"](21, 0, null, null, 3, "div", [
                    ["aria-labelledby", "heading-2"],
                    ["class", "collapse"],
                    ["id", "collapse-2"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](22, 0, null, null, 2, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](23, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it."])), (l()(), e["\u0275eld"](25, 0, null, null, 8, "div", [
                    ["class", "card card-white"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](26, 0, null, null, 3, "div", [
                    ["class", "card-header"],
                    ["id", "heading-3"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](27, 0, null, null, 2, "h5", [
                    ["class", "mb-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](28, 0, null, null, 1, "a", [
                    ["aria-controls", "collapse-3"],
                    ["aria-expanded", "false"],
                    ["class", "collapsed"],
                    ["data-parent", "#accordion"],
                    ["data-toggle", "collapse"],
                    ["href", "#collapse-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Closed item 2 "])), (l()(), e["\u0275eld"](30, 0, null, null, 3, "div", [
                    ["aria-labelledby", "heading-3"],
                    ["class", "collapse"],
                    ["id", "collapse-3"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](31, 0, null, null, 2, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](32, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it."])), (l()(), e["\u0275eld"](34, 0, null, null, 32, "div", [
                    ["class", "col-lg-12 col-xl-6"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](35, 0, null, null, 2, "div", [
                    ["class", "chk-ui-heading"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](36, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["With Control icons"])), (l()(), e["\u0275eld"](38, 0, null, null, 28, "div", [
                    ["aria-multiselectable", "true"],
                    ["id", "accordion-4"],
                    ["role", "tablist"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](39, 0, null, null, 27, "div", [
                    ["class", "basic-icon-accordion"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](40, 0, null, null, 8, "div", [
                    ["class", "card card-white"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](41, 0, null, null, 3, "div", [
                    ["class", "card-header"],
                    ["id", "heading-10"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](42, 0, null, null, 2, "h5", [
                    ["class", "mb-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](43, 0, null, null, 1, "a", [
                    ["aria-controls", "collapse-10"],
                    ["aria-expanded", "true"],
                    ["class", "accordion-toggle"],
                    ["data-parent", "#accordion"],
                    ["data-toggle", "collapse"],
                    ["href", "#collapse-10"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic tabs "])), (l()(), e["\u0275eld"](45, 0, null, null, 3, "div", [
                    ["aria-labelledby", "heading-10"],
                    ["class", "collapse show"],
                    ["id", "collapse-10"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](46, 0, null, null, 2, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](47, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it."])), (l()(), e["\u0275eld"](49, 0, null, null, 8, "div", [
                    ["class", "card card-white"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](50, 0, null, null, 3, "div", [
                    ["class", "card-header"],
                    ["id", "heading-11"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](51, 0, null, null, 2, "h5", [
                    ["class", "mb-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](52, 0, null, null, 1, "a", [
                    ["aria-controls", "collapse-11"],
                    ["aria-expanded", "false"],
                    ["class", "collapsed accordion-toggle"],
                    ["data-parent", "#accordion"],
                    ["data-toggle", "collapse"],
                    ["href", "#collapse-11"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Closed item "])), (l()(), e["\u0275eld"](54, 0, null, null, 3, "div", [
                    ["aria-labelledby", "heading-11"],
                    ["class", "collapse"],
                    ["id", "collapse-11"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](55, 0, null, null, 2, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](56, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it."])), (l()(), e["\u0275eld"](58, 0, null, null, 8, "div", [
                    ["class", "card card-white"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](59, 0, null, null, 3, "div", [
                    ["class", "card-header"],
                    ["id", "heading-12"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](60, 0, null, null, 2, "h5", [
                    ["class", "mb-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](61, 0, null, null, 1, "a", [
                    ["aria-controls", "collapse-12"],
                    ["aria-expanded", "false"],
                    ["class", "collapsed accordion-toggle"],
                    ["data-parent", "#accordion"],
                    ["data-toggle", "collapse"],
                    ["href", "#collapse-12"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Closed item 2 "])), (l()(), e["\u0275eld"](63, 0, null, null, 3, "div", [
                    ["aria-labelledby", "heading-12"],
                    ["class", "collapse"],
                    ["id", "collapse-12"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](64, 0, null, null, 2, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](65, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it."])), (l()(), e["\u0275eld"](67, 0, null, null, 66, "div", [
                    ["class", "row mb-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](68, 0, null, null, 32, "div", [
                    ["class", "col-lg-12 col-xl-6"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](69, 0, null, null, 2, "div", [
                    ["class", "chk-ui-heading"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](70, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Bright Colors with icons"])), (l()(), e["\u0275eld"](72, 0, null, null, 28, "div", [
                    ["aria-multiselectable", "true"],
                    ["id", "accordion-5"],
                    ["role", "tablist"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](73, 0, null, null, 27, "div", [
                    ["class", "accordion-with-arrow"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](74, 0, null, null, 8, "div", [
                    ["class", "card border-primary"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](75, 0, null, null, 3, "div", [
                    ["class", "card-header bg-primary"],
                    ["id", "heading-13"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](76, 0, null, null, 2, "h5", [
                    ["class", "mb-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](77, 0, null, null, 1, "a", [
                    ["aria-controls", "collapse-13"],
                    ["aria-expanded", "true"],
                    ["class", "accordion-toggle"],
                    ["data-parent", "#accordion"],
                    ["data-toggle", "collapse"],
                    ["href", "#collapse-13"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic tabs "])), (l()(), e["\u0275eld"](79, 0, null, null, 3, "div", [
                    ["aria-labelledby", "heading-13"],
                    ["class", "collapse show"],
                    ["id", "collapse-13"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](80, 0, null, null, 2, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](81, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it."])), (l()(), e["\u0275eld"](83, 0, null, null, 8, "div", [
                    ["class", "card border-primary"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](84, 0, null, null, 3, "div", [
                    ["class", "card-header bg-primary"],
                    ["id", "heading-14"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](85, 0, null, null, 2, "h5", [
                    ["class", "mb-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](86, 0, null, null, 1, "a", [
                    ["aria-controls", "collapse-14"],
                    ["aria-expanded", "false"],
                    ["class", "collapsed accordion-toggle"],
                    ["data-parent", "#accordion"],
                    ["data-toggle", "collapse"],
                    ["href", "#collapse-14"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Closed item "])), (l()(), e["\u0275eld"](88, 0, null, null, 3, "div", [
                    ["aria-labelledby", "heading-14"],
                    ["class", "collapse"],
                    ["id", "collapse-14"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](89, 0, null, null, 2, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](90, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it."])), (l()(), e["\u0275eld"](92, 0, null, null, 8, "div", [
                    ["class", "card border-primary"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](93, 0, null, null, 3, "div", [
                    ["class", "card-header bg-primary"],
                    ["id", "heading-15"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](94, 0, null, null, 2, "h5", [
                    ["class", "mb-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](95, 0, null, null, 1, "a", [
                    ["aria-controls", "collapse-15"],
                    ["aria-expanded", "false"],
                    ["class", "collapsed accordion-toggle"],
                    ["data-parent", "#accordion"],
                    ["data-toggle", "collapse"],
                    ["href", "#collapse-15"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Closed item 2 "])), (l()(), e["\u0275eld"](97, 0, null, null, 3, "div", [
                    ["aria-labelledby", "heading-15"],
                    ["class", "collapse"],
                    ["id", "collapse-15"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](98, 0, null, null, 2, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](99, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it."])), (l()(), e["\u0275eld"](101, 0, null, null, 32, "div", [
                    ["class", "col-lg-12 col-xl-6"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](102, 0, null, null, 2, "div", [
                    ["class", "chk-ui-heading"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](103, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Multiple Colors"])), (l()(), e["\u0275eld"](105, 0, null, null, 28, "div", [
                    ["aria-multiselectable", "true"],
                    ["id", "accordion-6"],
                    ["role", "tablist"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](106, 0, null, null, 27, "div", [
                    ["class", "basic-icon-accordion"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](107, 0, null, null, 8, "div", [
                    ["class", "card border-success"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](108, 0, null, null, 3, "div", [
                    ["class", "card-header bg-success"],
                    ["id", "heading-16"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](109, 0, null, null, 2, "h5", [
                    ["class", "mb-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](110, 0, null, null, 1, "a", [
                    ["aria-controls", "collapse-16"],
                    ["aria-expanded", "true"],
                    ["class", "accordion-toggle"],
                    ["data-parent", "#accordion"],
                    ["data-toggle", "collapse"],
                    ["href", "#collapse-16"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Basic tabs "])), (l()(), e["\u0275eld"](112, 0, null, null, 3, "div", [
                    ["aria-labelledby", "heading-16"],
                    ["class", "collapse show"],
                    ["id", "collapse-16"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](113, 0, null, null, 2, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](114, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it."])), (l()(), e["\u0275eld"](116, 0, null, null, 8, "div", [
                    ["class", "card border-danger"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](117, 0, null, null, 3, "div", [
                    ["class", "card-header bg-danger"],
                    ["id", "heading-17"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](118, 0, null, null, 2, "h5", [
                    ["class", "mb-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](119, 0, null, null, 1, "a", [
                    ["aria-controls", "collapse-17"],
                    ["aria-expanded", "false"],
                    ["class", "collapsed accordion-toggle"],
                    ["data-parent", "#accordion"],
                    ["data-toggle", "collapse"],
                    ["href", "#collapse-17"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Closed item "])), (l()(), e["\u0275eld"](121, 0, null, null, 3, "div", [
                    ["aria-labelledby", "heading-17"],
                    ["class", "collapse"],
                    ["id", "collapse-17"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](122, 0, null, null, 2, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](123, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it."])), (l()(), e["\u0275eld"](125, 0, null, null, 8, "div", [
                    ["class", "card border-info"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](126, 0, null, null, 3, "div", [
                    ["class", "card-header bg-info"],
                    ["id", "heading-18"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](127, 0, null, null, 2, "h5", [
                    ["class", "mb-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](128, 0, null, null, 1, "a", [
                    ["aria-controls", "collapse-18"],
                    ["aria-expanded", "false"],
                    ["class", "collapsed accordion-toggle"],
                    ["data-parent", "#accordion"],
                    ["data-toggle", "collapse"],
                    ["href", "#collapse-18"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Closed item 2 "])), (l()(), e["\u0275eld"](130, 0, null, null, 3, "div", [
                    ["aria-labelledby", "heading-18"],
                    ["class", "collapse"],
                    ["id", "collapse-18"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](131, 0, null, null, 2, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](132, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it."]))], null, null)
            }
            var U = e["\u0275ccf"]("ms-accordions", z, function(l) {
                    return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 1, "ms-accordions", [], [
                        [40, "@fadeInAnimation", 0]
                    ], null, null, V, P)), e["\u0275did"](1, 114688, null, 0, z, [j.a], null, null)], function(l, n) {
                        l(n, 1, 0)
                    }, function(l, n) {
                        l(n, 0, 0, !0)
                    })
                }, {}, {}, []),
                G = function() {
                    function l(l) {
                        this.pageTitleService = l
                    }
                    return l.prototype.ngOnInit = function() {
                        this.pageTitleService.setTitle("Pagination")
                    }, l
                }(),
                K = e["\u0275crt"]({
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

            function H(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 370, "div", [
                    ["class", "pagination-wrapper"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 369, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](2, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](3, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](4, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](5, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Paginations"])), (l()(), e["\u0275eld"](7, 0, null, null, 363, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](8, 0, null, null, 89, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](9, 0, null, null, 28, "div", [
                    ["class", "col-lg-12 col-xl-4 mb-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](10, 0, null, null, 2, "div", [
                    ["class", "chk-ui-heading"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](11, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Basic Style"])), (l()(), e["\u0275eld"](13, 0, null, null, 24, "nav", [
                    ["aria-label", "Page navigation"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](14, 0, null, null, 23, "ul", [
                    ["class", "pagination"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](15, 0, null, null, 3, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](16, 0, null, null, 2, "a", [
                    ["aria-label", "Previous"],
                    ["class", "page-link"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](17, 0, null, null, 1, "span", [
                    ["aria-hidden", "true"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](18, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-angle-double-left fa-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](19, 0, null, null, 2, "li", [
                    ["class", "active page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](20, 0, null, null, 1, "a", [
                    ["class", "page-link"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["1"])), (l()(), e["\u0275eld"](22, 0, null, null, 2, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](23, 0, null, null, 1, "a", [
                    ["class", "page-link"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["2"])), (l()(), e["\u0275eld"](25, 0, null, null, 2, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](26, 0, null, null, 1, "a", [
                    ["class", "page-link"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["3"])), (l()(), e["\u0275eld"](28, 0, null, null, 2, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](29, 0, null, null, 1, "a", [
                    ["class", "page-link"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["4"])), (l()(), e["\u0275eld"](31, 0, null, null, 2, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](32, 0, null, null, 1, "a", [
                    ["class", "page-link"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["5"])), (l()(), e["\u0275eld"](34, 0, null, null, 3, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](35, 0, null, null, 2, "a", [
                    ["aria-label", "Next"],
                    ["class", "page-link"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](36, 0, null, null, 1, "span", [
                    ["aria-hidden", "true"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](37, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-angle-double-right fa-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](38, 0, null, null, 29, "div", [
                    ["class", "col-lg-12 col-xl-4 mb-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](39, 0, null, null, 2, "div", [
                    ["class", "chk-ui-heading"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](40, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Rounded box"])), (l()(), e["\u0275eld"](42, 0, null, null, 25, "div", [
                    ["class", "pagination-rounded"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](43, 0, null, null, 24, "nav", [
                    ["aria-label", "Page navigation"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](44, 0, null, null, 23, "ul", [
                    ["class", "pagination"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](45, 0, null, null, 3, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](46, 0, null, null, 2, "a", [
                    ["aria-label", "Previous"],
                    ["class", "page-link"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](47, 0, null, null, 1, "span", [
                    ["aria-hidden", "true"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](48, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-angle-double-left fa-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](49, 0, null, null, 2, "li", [
                    ["class", "active page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](50, 0, null, null, 1, "a", [
                    ["class", "page-link"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["1"])), (l()(), e["\u0275eld"](52, 0, null, null, 2, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](53, 0, null, null, 1, "a", [
                    ["class", "page-link"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["2"])), (l()(), e["\u0275eld"](55, 0, null, null, 2, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](56, 0, null, null, 1, "a", [
                    ["class", "page-link"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["3"])), (l()(), e["\u0275eld"](58, 0, null, null, 2, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](59, 0, null, null, 1, "a", [
                    ["class", "page-link"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["4"])), (l()(), e["\u0275eld"](61, 0, null, null, 2, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](62, 0, null, null, 1, "a", [
                    ["class", "page-link"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["5"])), (l()(), e["\u0275eld"](64, 0, null, null, 3, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](65, 0, null, null, 2, "a", [
                    ["aria-label", "Next"],
                    ["class", "page-link"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](66, 0, null, null, 1, "span", [
                    ["aria-hidden", "true"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](67, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-angle-double-right fa-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](68, 0, null, null, 29, "div", [
                    ["class", "col-lg-12 col-xl-4 mb-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](69, 0, null, null, 2, "div", [
                    ["class", "chk-ui-heading"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](70, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["No Border Square"])), (l()(), e["\u0275eld"](72, 0, null, null, 25, "div", [
                    ["class", "no-border-square"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](73, 0, null, null, 24, "nav", [
                    ["aria-label", "Page navigation"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](74, 0, null, null, 23, "ul", [
                    ["class", "pagination"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](75, 0, null, null, 3, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](76, 0, null, null, 2, "a", [
                    ["aria-label", "Previous"],
                    ["class", "page-link"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](77, 0, null, null, 1, "span", [
                    ["aria-hidden", "true"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](78, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-angle-double-left fa-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](79, 0, null, null, 2, "li", [
                    ["class", "active page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](80, 0, null, null, 1, "a", [
                    ["class", "page-link"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["1"])), (l()(), e["\u0275eld"](82, 0, null, null, 2, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](83, 0, null, null, 1, "a", [
                    ["class", "page-link"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["2"])), (l()(), e["\u0275eld"](85, 0, null, null, 2, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](86, 0, null, null, 1, "a", [
                    ["class", "page-link"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["3"])), (l()(), e["\u0275eld"](88, 0, null, null, 2, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](89, 0, null, null, 1, "a", [
                    ["class", "page-link"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["4"])), (l()(), e["\u0275eld"](91, 0, null, null, 2, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](92, 0, null, null, 1, "a", [
                    ["class", "page-link"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["5"])), (l()(), e["\u0275eld"](94, 0, null, null, 3, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](95, 0, null, null, 2, "a", [
                    ["aria-label", "Next"],
                    ["class", "page-link"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](96, 0, null, null, 1, "span", [
                    ["aria-hidden", "true"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](97, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-angle-double-right fa-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](98, 0, null, null, 90, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](99, 0, null, null, 29, "div", [
                    ["class", "col-lg-12 col-xl-4 mb-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](100, 0, null, null, 2, "div", [
                    ["class", "chk-ui-heading"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](101, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["No Border Circled"])), (l()(), e["\u0275eld"](103, 0, null, null, 25, "div", [
                    ["class", "no-border-circle"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](104, 0, null, null, 24, "nav", [
                    ["aria-label", "Page navigation"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](105, 0, null, null, 23, "ul", [
                    ["class", "pagination"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](106, 0, null, null, 3, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](107, 0, null, null, 2, "a", [
                    ["aria-label", "Previous"],
                    ["class", "page-link"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](108, 0, null, null, 1, "span", [
                    ["aria-hidden", "true"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](109, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-angle-double-left fa-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](110, 0, null, null, 2, "li", [
                    ["class", "active page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](111, 0, null, null, 1, "a", [
                    ["class", "page-link"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["1"])), (l()(), e["\u0275eld"](113, 0, null, null, 2, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](114, 0, null, null, 1, "a", [
                    ["class", "page-link"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["2"])), (l()(), e["\u0275eld"](116, 0, null, null, 2, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](117, 0, null, null, 1, "a", [
                    ["class", "page-link"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["3"])), (l()(), e["\u0275eld"](119, 0, null, null, 2, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](120, 0, null, null, 1, "a", [
                    ["class", "page-link"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["4"])), (l()(), e["\u0275eld"](122, 0, null, null, 2, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](123, 0, null, null, 1, "a", [
                    ["class", "page-link"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["5"])), (l()(), e["\u0275eld"](125, 0, null, null, 3, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](126, 0, null, null, 2, "a", [
                    ["aria-label", "Next"],
                    ["class", "page-link"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](127, 0, null, null, 1, "span", [
                    ["aria-hidden", "true"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](128, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-angle-double-right fa-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](129, 0, null, null, 29, "div", [
                    ["class", "col-lg-12 col-xl-4 mb-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](130, 0, null, null, 2, "div", [
                    ["class", "chk-ui-heading"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](131, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Active bottom line"])), (l()(), e["\u0275eld"](133, 0, null, null, 25, "div", [
                    ["class", "active-bottom-line"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](134, 0, null, null, 24, "nav", [
                    ["aria-label", "Page navigation"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](135, 0, null, null, 23, "ul", [
                    ["class", "pagination"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](136, 0, null, null, 3, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](137, 0, null, null, 2, "a", [
                    ["aria-label", "Previous"],
                    ["class", "page-link"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](138, 0, null, null, 1, "span", [
                    ["aria-hidden", "true"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](139, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-angle-double-left fa-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](140, 0, null, null, 2, "li", [
                    ["class", "active"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](141, 0, null, null, 1, "a", [
                    ["class", "page-link"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["1"])), (l()(), e["\u0275eld"](143, 0, null, null, 2, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](144, 0, null, null, 1, "a", [
                    ["class", "page-link"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["2"])), (l()(), e["\u0275eld"](146, 0, null, null, 2, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](147, 0, null, null, 1, "a", [
                    ["class", "page-link"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["3"])), (l()(), e["\u0275eld"](149, 0, null, null, 2, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](150, 0, null, null, 1, "a", [
                    ["class", "page-link"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["4"])), (l()(), e["\u0275eld"](152, 0, null, null, 2, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](153, 0, null, null, 1, "a", [
                    ["class", "page-link"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["5"])), (l()(), e["\u0275eld"](155, 0, null, null, 3, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](156, 0, null, null, 2, "a", [
                    ["aria-label", "Next"],
                    ["class", "page-link"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](157, 0, null, null, 1, "span", [
                    ["aria-hidden", "true"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](158, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-angle-double-right fa-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](159, 0, null, null, 29, "div", [
                    ["class", "col-lg-12 col-xl-4 mb-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](160, 0, null, null, 2, "div", [
                    ["class", "chk-ui-heading"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](161, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Separated Line only"])), (l()(), e["\u0275eld"](163, 0, null, null, 25, "div", [
                    ["class", "seprated-line-pagination"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](164, 0, null, null, 24, "nav", [
                    ["aria-label", "Page navigation"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](165, 0, null, null, 23, "ul", [
                    ["class", "pagination"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](166, 0, null, null, 3, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](167, 0, null, null, 2, "a", [
                    ["aria-label", "Previous"],
                    ["class", "page-link"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](168, 0, null, null, 1, "span", [
                    ["aria-hidden", "true"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](169, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-angle-double-left fa-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](170, 0, null, null, 2, "li", [
                    ["class", "active"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](171, 0, null, null, 1, "a", [
                    ["class", "page-link"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["1"])), (l()(), e["\u0275eld"](173, 0, null, null, 2, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](174, 0, null, null, 1, "a", [
                    ["class", "page-link"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["2"])), (l()(), e["\u0275eld"](176, 0, null, null, 2, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](177, 0, null, null, 1, "a", [
                    ["class", "page-link"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["3"])), (l()(), e["\u0275eld"](179, 0, null, null, 2, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](180, 0, null, null, 1, "a", [
                    ["class", "page-link"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["4"])), (l()(), e["\u0275eld"](182, 0, null, null, 2, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](183, 0, null, null, 1, "a", [
                    ["class", "page-link"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["5"])), (l()(), e["\u0275eld"](185, 0, null, null, 3, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](186, 0, null, null, 2, "a", [
                    ["aria-label", "Next"],
                    ["class", "page-link"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](187, 0, null, null, 1, "span", [
                    ["aria-hidden", "true"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](188, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-angle-double-right fa-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](189, 0, null, null, 90, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](190, 0, null, null, 29, "div", [
                    ["class", "col-lg-12 col-xl-4 mb-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](191, 0, null, null, 2, "div", [
                    ["class", "chk-ui-heading"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](192, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Colored Pagination"])), (l()(), e["\u0275eld"](194, 0, null, null, 25, "div", [
                    ["class", "colored-pagination"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](195, 0, null, null, 24, "nav", [
                    ["aria-label", "Page navigation"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](196, 0, null, null, 23, "ul", [
                    ["class", "pagination"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](197, 0, null, null, 3, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](198, 0, null, null, 2, "a", [
                    ["aria-label", "Previous"],
                    ["class", "page-link"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](199, 0, null, null, 1, "span", [
                    ["aria-hidden", "true"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](200, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-angle-double-left fa-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](201, 0, null, null, 2, "li", [
                    ["class", "active page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](202, 0, null, null, 1, "a", [
                    ["class", "page-link"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["1"])), (l()(), e["\u0275eld"](204, 0, null, null, 2, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](205, 0, null, null, 1, "a", [
                    ["class", "page-link"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["2"])), (l()(), e["\u0275eld"](207, 0, null, null, 2, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](208, 0, null, null, 1, "a", [
                    ["class", "page-link"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["3"])), (l()(), e["\u0275eld"](210, 0, null, null, 2, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](211, 0, null, null, 1, "a", [
                    ["class", "page-link"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["4"])), (l()(), e["\u0275eld"](213, 0, null, null, 2, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](214, 0, null, null, 1, "a", [
                    ["class", "page-link"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["5"])), (l()(), e["\u0275eld"](216, 0, null, null, 3, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](217, 0, null, null, 2, "a", [
                    ["aria-label", "Next"],
                    ["class", "page-link"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](218, 0, null, null, 1, "span", [
                    ["aria-hidden", "true"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](219, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-angle-double-right fa-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](220, 0, null, null, 29, "div", [
                    ["class", "col-lg-12 col-xl-4 mb-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](221, 0, null, null, 2, "div", [
                    ["class", "chk-ui-heading"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](222, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Colored Pagination"])), (l()(), e["\u0275eld"](224, 0, null, null, 25, "div", [
                    ["class", "colored-pagination-primary"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](225, 0, null, null, 24, "nav", [
                    ["aria-label", "Page navigation"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](226, 0, null, null, 23, "ul", [
                    ["class", "pagination"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](227, 0, null, null, 3, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](228, 0, null, null, 2, "a", [
                    ["aria-label", "Previous"],
                    ["class", "page-link"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](229, 0, null, null, 1, "span", [
                    ["aria-hidden", "true"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](230, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-angle-double-left fa-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](231, 0, null, null, 2, "li", [
                    ["class", "active page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](232, 0, null, null, 1, "a", [
                    ["class", "page-link"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["1"])), (l()(), e["\u0275eld"](234, 0, null, null, 2, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](235, 0, null, null, 1, "a", [
                    ["class", "page-link"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["2"])), (l()(), e["\u0275eld"](237, 0, null, null, 2, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](238, 0, null, null, 1, "a", [
                    ["class", "page-link"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["3"])), (l()(), e["\u0275eld"](240, 0, null, null, 2, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](241, 0, null, null, 1, "a", [
                    ["class", "page-link"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["4"])), (l()(), e["\u0275eld"](243, 0, null, null, 2, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](244, 0, null, null, 1, "a", [
                    ["class", "page-link"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["5"])), (l()(), e["\u0275eld"](246, 0, null, null, 3, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](247, 0, null, null, 2, "a", [
                    ["aria-label", "Next"],
                    ["class", "page-link"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](248, 0, null, null, 1, "span", [
                    ["aria-hidden", "true"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](249, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-angle-double-right fa-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](250, 0, null, null, 29, "div", [
                    ["class", "col-lg-12 col-xl-4 mb-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](251, 0, null, null, 2, "div", [
                    ["class", "chk-ui-heading"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](252, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Gap In-Between"])), (l()(), e["\u0275eld"](254, 0, null, null, 25, "div", [
                    ["class", "seprated-pagination-default"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](255, 0, null, null, 24, "nav", [
                    ["aria-label", "Page navigation"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](256, 0, null, null, 23, "ul", [
                    ["class", "pagination"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](257, 0, null, null, 3, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](258, 0, null, null, 2, "a", [
                    ["aria-label", "Previous"],
                    ["class", "page-link"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](259, 0, null, null, 1, "span", [
                    ["aria-hidden", "true"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](260, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-angle-double-left fa-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](261, 0, null, null, 2, "li", [
                    ["class", "active page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](262, 0, null, null, 1, "a", [
                    ["class", "page-link"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["1"])), (l()(), e["\u0275eld"](264, 0, null, null, 2, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](265, 0, null, null, 1, "a", [
                    ["class", "page-link"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["2"])), (l()(), e["\u0275eld"](267, 0, null, null, 2, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](268, 0, null, null, 1, "a", [
                    ["class", "page-link"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["3"])), (l()(), e["\u0275eld"](270, 0, null, null, 2, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](271, 0, null, null, 1, "a", [
                    ["class", "page-link"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["4"])), (l()(), e["\u0275eld"](273, 0, null, null, 2, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](274, 0, null, null, 1, "a", [
                    ["class", "page-link"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["5"])), (l()(), e["\u0275eld"](276, 0, null, null, 3, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](277, 0, null, null, 2, "a", [
                    ["aria-label", "Next"],
                    ["class", "page-link"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](278, 0, null, null, 1, "span", [
                    ["aria-hidden", "true"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](279, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-angle-double-right fa-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](280, 0, null, null, 90, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](281, 0, null, null, 29, "div", [
                    ["class", "col-lg-12 col-xl-4 mb-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](282, 0, null, null, 2, "div", [
                    ["class", "chk-ui-heading"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](283, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Rounded Gap In-Between"])), (l()(), e["\u0275eld"](285, 0, null, null, 25, "div", [
                    ["class", "seprated-pagination-rounded"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](286, 0, null, null, 24, "nav", [
                    ["aria-label", "Page navigation"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](287, 0, null, null, 23, "ul", [
                    ["class", "pagination"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](288, 0, null, null, 3, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](289, 0, null, null, 2, "a", [
                    ["aria-label", "Previous"],
                    ["class", "page-link"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](290, 0, null, null, 1, "span", [
                    ["aria-hidden", "true"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](291, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-angle-double-left fa-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](292, 0, null, null, 2, "li", [
                    ["class", "active page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](293, 0, null, null, 1, "a", [
                    ["class", "page-link"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["1"])), (l()(), e["\u0275eld"](295, 0, null, null, 2, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](296, 0, null, null, 1, "a", [
                    ["class", "page-link"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["2"])), (l()(), e["\u0275eld"](298, 0, null, null, 2, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](299, 0, null, null, 1, "a", [
                    ["class", "page-link"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["3"])), (l()(), e["\u0275eld"](301, 0, null, null, 2, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](302, 0, null, null, 1, "a", [
                    ["class", "page-link"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["4"])), (l()(), e["\u0275eld"](304, 0, null, null, 2, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](305, 0, null, null, 1, "a", [
                    ["class", "page-link"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["5"])), (l()(), e["\u0275eld"](307, 0, null, null, 3, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](308, 0, null, null, 2, "a", [
                    ["aria-label", "Next"],
                    ["class", "page-link"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](309, 0, null, null, 1, "span", [
                    ["aria-hidden", "true"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](310, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-angle-double-right fa-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](311, 0, null, null, 29, "div", [
                    ["class", "col-lg-12 col-xl-4 mb-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](312, 0, null, null, 2, "div", [
                    ["class", "chk-ui-heading"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](313, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Colored With Gap"])), (l()(), e["\u0275eld"](315, 0, null, null, 25, "div", [
                    ["class", "seprated-pagination-warning"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](316, 0, null, null, 24, "nav", [
                    ["aria-label", "Page navigation"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](317, 0, null, null, 23, "ul", [
                    ["class", "pagination"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](318, 0, null, null, 3, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](319, 0, null, null, 2, "a", [
                    ["aria-label", "Previous"],
                    ["class", "page-link"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](320, 0, null, null, 1, "span", [
                    ["aria-hidden", "true"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](321, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-angle-double-left fa-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](322, 0, null, null, 2, "li", [
                    ["class", "active page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](323, 0, null, null, 1, "a", [
                    ["class", "page-link"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["1"])), (l()(), e["\u0275eld"](325, 0, null, null, 2, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](326, 0, null, null, 1, "a", [
                    ["class", "page-link"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["2"])), (l()(), e["\u0275eld"](328, 0, null, null, 2, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](329, 0, null, null, 1, "a", [
                    ["class", "page-link"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["3"])), (l()(), e["\u0275eld"](331, 0, null, null, 2, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](332, 0, null, null, 1, "a", [
                    ["class", "page-link"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["4"])), (l()(), e["\u0275eld"](334, 0, null, null, 2, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](335, 0, null, null, 1, "a", [
                    ["class", "page-link"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["5"])), (l()(), e["\u0275eld"](337, 0, null, null, 3, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](338, 0, null, null, 2, "a", [
                    ["aria-label", "Next"],
                    ["class", "page-link"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](339, 0, null, null, 1, "span", [
                    ["aria-hidden", "true"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](340, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-angle-double-right fa-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](341, 0, null, null, 29, "div", [
                    ["class", "col-lg-12 col-xl-4 mb-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](342, 0, null, null, 28, "div", [
                    ["class", "seprated-color-pagination-rounded"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](343, 0, null, null, 2, "div", [
                    ["class", "chk-ui-heading"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](344, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Colored rounded with gap"])), (l()(), e["\u0275eld"](346, 0, null, null, 24, "nav", [
                    ["aria-label", "Page navigation"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](347, 0, null, null, 23, "ul", [
                    ["class", "pagination"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](348, 0, null, null, 3, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](349, 0, null, null, 2, "a", [
                    ["aria-label", "Previous"],
                    ["class", "page-link"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](350, 0, null, null, 1, "span", [
                    ["aria-hidden", "true"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](351, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-angle-double-left fa-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](352, 0, null, null, 2, "li", [
                    ["class", "active page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](353, 0, null, null, 1, "a", [
                    ["class", "page-link"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["1"])), (l()(), e["\u0275eld"](355, 0, null, null, 2, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](356, 0, null, null, 1, "a", [
                    ["class", "page-link"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["2"])), (l()(), e["\u0275eld"](358, 0, null, null, 2, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](359, 0, null, null, 1, "a", [
                    ["class", "page-link"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["3"])), (l()(), e["\u0275eld"](361, 0, null, null, 2, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](362, 0, null, null, 1, "a", [
                    ["class", "page-link"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["4"])), (l()(), e["\u0275eld"](364, 0, null, null, 2, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](365, 0, null, null, 1, "a", [
                    ["class", "page-link"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["5"])), (l()(), e["\u0275eld"](367, 0, null, null, 3, "li", [
                    ["class", "page-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](368, 0, null, null, 2, "a", [
                    ["aria-label", "Next"],
                    ["class", "page-link"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](369, 0, null, null, 1, "span", [
                    ["aria-hidden", "true"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](370, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-angle-double-right fa-lg"]
                ], null, null, null, null, null))], null, null)
            }
            var Z = e["\u0275ccf"]("ms-pagination", G, function(l) {
                    return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 1, "ms-pagination", [], [
                        [40, "@fadeInAnimation", 0]
                    ], null, null, H, K)), e["\u0275did"](1, 114688, null, 0, G, [j.a], null, null)], function(l, n) {
                        l(n, 1, 0)
                    }, function(l, n) {
                        l(n, 0, 0, !0)
                    })
                }, {}, {}, []),
                J = function() {
                    function l(l) {
                        this.pageTitleService = l
                    }
                    return l.prototype.ngOnInit = function() {
                        this.pageTitleService.setTitle("Tooltip"), $('[data-toggle="tooltip"]').tooltip(), $('[data-toggle="popover"]').popover()
                    }, l
                }(),
                _ = e["\u0275crt"]({
                    encapsulation: 2,
                    styles: [
                        [".tooltip-static .tooltip{position:relative;display:block;opacity:1;z-index:1}.tooltip-static .tooltip .tooltip-inner{max-width:100%}.popover-static .popover{position:relative;display:block;margin:0;max-width:100%;z-index:1}.bs-tooltip-bottom-docs .arrow,.bs-tooltip-top-docs .arrow{left:50%}.bs-tooltip-left-docs .arrow,.bs-tooltip-right-docs .arrow{top:50%}.bs-popover-bottom-docs .arrow,.bs-popover-top-docs .arrow{left:50%}.bs-popover-left-docs .arrow,.bs-popover-right-docs .arrow{top:50%}"]
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

            function X(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 110, "div", [
                    ["class", "tooltip-wrapper"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 41, "div", [
                    ["class", "row mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](2, 0, null, null, 26, "div", [
                    ["class", "col-sm-12 col-md-12 col-lg-12"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](3, 0, null, null, 25, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](4, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](5, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Static demo"])), (l()(), e["\u0275eld"](7, 0, null, null, 21, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](8, 0, null, null, 20, "div", [
                    ["class", "row align-items-center tooltip-static"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](9, 0, null, null, 4, "div", [
                    ["class", "col-xl-3 col-lg-6 col-xs-6 mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](10, 0, null, null, 3, "div", [
                    ["class", "tooltip bs-tooltip-top bs-tooltip-top-docs"],
                    ["role", "tooltip"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](11, 0, null, null, 0, "div", [
                    ["class", "arrow"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](12, 0, null, null, 1, "div", [
                    ["class", "tooltip-inner"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Tooltip on the top "])), (l()(), e["\u0275eld"](14, 0, null, null, 4, "div", [
                    ["class", "col-xl-3 col-lg-6 col-xs-6 mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](15, 0, null, null, 3, "div", [
                    ["class", "tooltip bs-tooltip-right bs-tooltip-right-docs"],
                    ["role", "tooltip"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](16, 0, null, null, 0, "div", [
                    ["class", "arrow"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](17, 0, null, null, 1, "div", [
                    ["class", "tooltip-inner"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Tooltip on the right "])), (l()(), e["\u0275eld"](19, 0, null, null, 4, "div", [
                    ["class", "col-xl-3 col-lg-6 col-xs-6 mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](20, 0, null, null, 3, "div", [
                    ["class", "tooltip bs-tooltip-bottom bs-tooltip-bottom-docs"],
                    ["role", "tooltip"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](21, 0, null, null, 0, "div", [
                    ["class", "arrow"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](22, 0, null, null, 1, "div", [
                    ["class", "tooltip-inner"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Tooltip on the bottom "])), (l()(), e["\u0275eld"](24, 0, null, null, 4, "div", [
                    ["class", "col-xl-3 col-lg-6 col-xs-6 mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](25, 0, null, null, 3, "div", [
                    ["class", "tooltip bs-tooltip-left bs-tooltip-left-docs"],
                    ["role", "tooltip"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](26, 0, null, null, 0, "div", [
                    ["class", "arrow"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](27, 0, null, null, 1, "div", [
                    ["class", "tooltip-inner"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Tooltip on the left "])), (l()(), e["\u0275eld"](29, 0, null, null, 13, "div", [
                    ["class", "col-sm-12 col-md-12 col-lg-12"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](30, 0, null, null, 12, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](31, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](32, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Interactive demo"])), (l()(), e["\u0275eld"](34, 0, null, null, 8, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](35, 0, null, null, 1, "button", [
                    ["class", "btn btn-primary btn-square mb-2"],
                    ["data-placement", "top"],
                    ["data-toggle", "tooltip"],
                    ["title", "Tooltip on top"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Tooltip on top "])), (l()(), e["\u0275eld"](37, 0, null, null, 1, "button", [
                    ["class", "btn btn-primary btn-square mb-2"],
                    ["data-placement", "right"],
                    ["data-toggle", "tooltip"],
                    ["title", "Tooltip on right"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Tooltip on right "])), (l()(), e["\u0275eld"](39, 0, null, null, 1, "button", [
                    ["class", "btn btn-primary btn-square mb-2"],
                    ["data-placement", "bottom"],
                    ["data-toggle", "tooltip"],
                    ["title", "Tooltip on bottom"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Tooltip on bottom "])), (l()(), e["\u0275eld"](41, 0, null, null, 1, "button", [
                    ["class", "btn btn-primary btn-square mb-2"],
                    ["data-placement", "left"],
                    ["data-toggle", "tooltip"],
                    ["title", "Tooltip on left"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Tooltip on left "])), (l()(), e["\u0275eld"](43, 0, null, null, 37, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](44, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](45, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Static popover"])), (l()(), e["\u0275eld"](47, 0, null, null, 33, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](48, 0, null, null, 32, "div", [
                    ["class", "row popover-static"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](49, 0, null, null, 7, "div", [
                    ["class", "col-md-6 col-lg-3 mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](50, 0, null, null, 6, "div", [
                    ["class", "popover bs-popover-top bs-popover-top-docs"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](51, 0, null, null, 0, "div", [
                    ["class", "arrow"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](52, 0, null, null, 1, "h3", [
                    ["class", "popover-header"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Popover top"])), (l()(), e["\u0275eld"](54, 0, null, null, 2, "div", [
                    ["class", "popover-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](55, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."])), (l()(), e["\u0275eld"](57, 0, null, null, 7, "div", [
                    ["class", "col-md-6 col-lg-3 mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](58, 0, null, null, 6, "div", [
                    ["class", "popover bs-popover-right bs-popover-right-docs"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](59, 0, null, null, 0, "div", [
                    ["class", "arrow"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](60, 0, null, null, 1, "h3", [
                    ["class", "popover-header"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Popover right"])), (l()(), e["\u0275eld"](62, 0, null, null, 2, "div", [
                    ["class", "popover-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](63, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."])), (l()(), e["\u0275eld"](65, 0, null, null, 7, "div", [
                    ["class", "col-md-6 col-lg-3 mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](66, 0, null, null, 6, "div", [
                    ["class", "popover bs-popover-bottom bs-popover-bottom-docs"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](67, 0, null, null, 0, "div", [
                    ["class", "arrow"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](68, 0, null, null, 1, "h3", [
                    ["class", "popover-header"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Popover bottom"])), (l()(), e["\u0275eld"](70, 0, null, null, 2, "div", [
                    ["class", "popover-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](71, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."])), (l()(), e["\u0275eld"](73, 0, null, null, 7, "div", [
                    ["class", "col-md-6 col-lg-3 mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](74, 0, null, null, 6, "div", [
                    ["class", "popover bs-popover-left bs-popover-left-docs"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](75, 0, null, null, 0, "div", [
                    ["class", "arrow"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](76, 0, null, null, 1, "h3", [
                    ["class", "popover-header"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Popover left"])), (l()(), e["\u0275eld"](78, 0, null, null, 2, "div", [
                    ["class", "popover-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](79, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."])), (l()(), e["\u0275eld"](81, 0, null, null, 12, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](82, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](83, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Four directions"])), (l()(), e["\u0275eld"](85, 0, null, null, 8, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](86, 0, null, null, 1, "button", [
                    ["class", "btn btn-secondary mb-2"],
                    ["data-container", "body"],
                    ["data-content", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus."],
                    ["data-placement", "top"],
                    ["data-toggle", "popover"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Popover on top "])), (l()(), e["\u0275eld"](88, 0, null, null, 1, "button", [
                    ["class", "btn btn-secondary mb-2"],
                    ["data-container", "body"],
                    ["data-content", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus."],
                    ["data-placement", "right"],
                    ["data-toggle", "popover"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Popover on right "])), (l()(), e["\u0275eld"](90, 0, null, null, 1, "button", [
                    ["class", "btn btn-secondary mb-2"],
                    ["data-container", "body"],
                    ["data-content", "Vivamus\n            sagittis lacus vel augue laoreet rutrum faucibus."],
                    ["data-placement", "bottom"],
                    ["data-toggle", "popover"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Popover on bottom "])), (l()(), e["\u0275eld"](92, 0, null, null, 1, "button", [
                    ["class", "btn btn-secondary mb-2"],
                    ["data-container", "body"],
                    ["data-content", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus."],
                    ["data-placement", "left"],
                    ["data-toggle", "popover"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Popover on left "])), (l()(), e["\u0275eld"](94, 0, null, null, 16, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](95, 0, null, null, 7, "div", [
                    ["class", "col-sm-12 col-lg-6"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](96, 0, null, null, 6, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](97, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](98, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Toggled popover"])), (l()(), e["\u0275eld"](100, 0, null, null, 2, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](101, 0, null, null, 1, "button", [
                    ["class", "btn btn-large btn-danger"],
                    ["data-content", "And here's some amazing content. It's very engaging. Right?"],
                    ["data-toggle", "popover"],
                    ["title", "Popover title"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Click to toggle popover"])), (l()(), e["\u0275eld"](103, 0, null, null, 7, "div", [
                    ["class", "col-sm-12 col-lg-6"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](104, 0, null, null, 6, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](105, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](106, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dismiss on next click"])), (l()(), e["\u0275eld"](108, 0, null, null, 2, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](109, 0, null, null, 1, "a", [
                    ["class", "btn btn-large btn-danger"],
                    ["data-content", "And here's some amazing content. It's very engaging. Right?"],
                    ["data-toggle", "popover"],
                    ["data-trigger", "focus"],
                    ["role", "button"],
                    ["tabindex", "0"],
                    ["title", "Dismissible popover"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dismissible popover"]))], null, null)
            }
            var ll = e["\u0275ccf"]("ms-tooltip", J, function(l) {
                    return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 1, "ms-tooltip", [], [
                        [40, "@fadeInAnimation", 0]
                    ], null, null, X, _)), e["\u0275did"](1, 114688, null, 0, J, [j.a], null, null)], function(l, n) {
                        l(n, 1, 0)
                    }, function(l, n) {
                        l(n, 0, 0, !0)
                    })
                }, {}, {}, []),
                nl = function() {
                    function l(l) {
                        this.pageTitleService = l
                    }
                    return l.prototype.ngOnInit = function() {
                        this.pageTitleService.setTitle("Cards")
                    }, l
                }(),
                ul = e["\u0275crt"]({
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

            function el(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 99, "div", [
                    ["class", "card-wrapper"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 42, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](2, 0, null, null, 13, "div", [
                    ["class", "col-lg-12 col-xl-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](3, 0, null, null, 12, "div", [
                    ["class", "card card-white"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](4, 0, null, null, 1, "div", [
                    ["class", "card-header"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Card Heading "])), (l()(), e["\u0275eld"](6, 0, null, null, 9, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](7, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Body Heading"])), (l()(), e["\u0275eld"](9, 0, null, null, 4, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Easily add a heading container to your Card with .Card-heading. You may also include any "])), (l()(), e["\u0275eld"](11, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["<h1>-<h6>"])), (l()(), e["\u0275ted"](-1, null, [" with a .card-title class to add a pre-styled heading."])), (l()(), e["\u0275eld"](14, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["For proper link coloring, be sure to place links in headings within .Card-title."])), (l()(), e["\u0275eld"](16, 0, null, null, 13, "div", [
                    ["class", "col-lg-12 col-xl-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](17, 0, null, null, 12, "div", [
                    ["class", "card card-white"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](18, 0, null, null, 1, "div", [
                    ["class", "card-header"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Card Heading "])), (l()(), e["\u0275eld"](20, 0, null, null, 9, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](21, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Body Heading"])), (l()(), e["\u0275eld"](23, 0, null, null, 4, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Easily add a heading container to your Card with .Card-heading. You may also include any "])), (l()(), e["\u0275eld"](25, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["<h1>-<h6>"])), (l()(), e["\u0275ted"](-1, null, [" with a .Card-title class to add a pre-styled heading."])), (l()(), e["\u0275eld"](28, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["For proper link coloring, be sure to place links in headings within .Card-title."])), (l()(), e["\u0275eld"](30, 0, null, null, 13, "div", [
                    ["class", "col-lg-12 col-xl-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](31, 0, null, null, 12, "div", [
                    ["class", "card card-white"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](32, 0, null, null, 1, "div", [
                    ["class", "card-header"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Card Heading "])), (l()(), e["\u0275eld"](34, 0, null, null, 7, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](35, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Body Heading"])), (l()(), e["\u0275eld"](37, 0, null, null, 4, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Easily add a heading container to your Card with .Card-heading. You may also include any "])), (l()(), e["\u0275eld"](39, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["<h1>-<h6>"])), (l()(), e["\u0275ted"](-1, null, [" with a .card-title class to add a pre-styled heading."])), (l()(), e["\u0275eld"](42, 0, null, null, 1, "div", [
                    ["class", "card-footer"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Card footer "])), (l()(), e["\u0275eld"](44, 0, null, null, 24, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](45, 0, null, null, 7, "div", [
                    ["class", "col-lg-12 col-xl-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](46, 0, null, null, 6, "div", [
                    ["class", "card card-default"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](47, 0, null, null, 2, "div", [
                    ["class", "card-header"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](48, 0, null, null, 1, "h4", [
                    ["class", "card-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Card Heading"])), (l()(), e["\u0275eld"](50, 0, null, null, 2, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](51, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Lorem ipsum Magna qui labore amet qui id consequat adipisicing irure consectetur qui minim eu nulla deserunt aliquip et sed anim proident culpa ad aliquip consequat minim reprehenderit proident cupidatat velit in eiusmod laborum aliqua in."])), (l()(), e["\u0275eld"](53, 0, null, null, 7, "div", [
                    ["class", "col-lg-12 col-xl-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](54, 0, null, null, 6, "div", [
                    ["class", "card card-outline-primary"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](55, 0, null, null, 2, "div", [
                    ["class", "card-header bg-primary"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](56, 0, null, null, 1, "h4", [
                    ["class", "card-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Card Heading"])), (l()(), e["\u0275eld"](58, 0, null, null, 2, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](59, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Lorem ipsum Magna qui labore amet qui id consequat adipisicing irure consectetur qui minim eu nulla deserunt aliquip et sed anim proident culpa ad aliquip consequat minim reprehenderit proident cupidatat velit in eiusmod laborum aliqua in."])), (l()(), e["\u0275eld"](61, 0, null, null, 7, "div", [
                    ["class", "col-lg-12 col-xl-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](62, 0, null, null, 6, "div", [
                    ["class", "card card-outline-warning"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](63, 0, null, null, 2, "div", [
                    ["class", "card-header bg-warning"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](64, 0, null, null, 1, "h4", [
                    ["class", "card-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Warning card"])), (l()(), e["\u0275eld"](66, 0, null, null, 2, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](67, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Lorem ipsum Magna qui labore amet qui id consequat adipisicing irure consectetur qui minim eu nulla deserunt aliquip et sed anim proident culpa ad aliquip consequat minim reprehenderit proident cupidatat velit in eiusmod laborum aliqua in."])), (l()(), e["\u0275eld"](69, 0, null, null, 30, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](70, 0, null, null, 9, "div", [
                    ["class", "col-lg-12 col-xl-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](71, 0, null, null, 8, "div", [
                    ["class", "card card-outline-success"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](72, 0, null, null, 4, "div", [
                    ["class", "card-header bg-success"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](73, 0, null, null, 3, "h4", [
                    ["class", "card-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](74, 0, null, null, 1, "span", [
                    ["class", "mr-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](75, 0, null, null, 0, "i", [
                    ["class", "fa fa-check fa-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Success card"])), (l()(), e["\u0275eld"](77, 0, null, null, 2, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](78, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Lorem ipsum Magna qui labore amet qui id consequat adipisicing irure consectetur qui minim eu nulla deserunt aliquip et sed anim proident culpa ad aliquip consequat minim reprehenderit proident cupidatat velit in eiusmod laborum aliqua in."])), (l()(), e["\u0275eld"](80, 0, null, null, 9, "div", [
                    ["class", "col-lg-12 col-xl-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](81, 0, null, null, 8, "div", [
                    ["class", "card card-outline-danger"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](82, 0, null, null, 4, "div", [
                    ["class", "card-header bg-danger"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](83, 0, null, null, 3, "h4", [
                    ["class", "card-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](84, 0, null, null, 1, "span", [
                    ["class", "mr-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](85, 0, null, null, 0, "i", [
                    ["class", "fa fa-ban fa-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Error card"])), (l()(), e["\u0275eld"](87, 0, null, null, 2, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](88, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Lorem ipsum Magna qui labore amet qui id consequat adipisicing irure consectetur qui minim eu nulla deserunt aliquip et sed anim proident culpa ad aliquip consequat minim reprehenderit proident cupidatat velit in eiusmod laborum aliqua in."])), (l()(), e["\u0275eld"](90, 0, null, null, 9, "div", [
                    ["class", "col-lg-12 col-xl-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](91, 0, null, null, 8, "div", [
                    ["class", "card card-outline-info"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](92, 0, null, null, 4, "div", [
                    ["class", "card-header bg-info"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](93, 0, null, null, 3, "h4", [
                    ["class", "card-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](94, 0, null, null, 1, "span", [
                    ["class", "mr-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](95, 0, null, null, 0, "i", [
                    ["class", "fa fa-exclamation-triangle fa-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Info card"])), (l()(), e["\u0275eld"](97, 0, null, null, 2, "div", [
                    ["class", "card-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](98, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Lorem ipsum Magna qui labore amet qui id consequat adipisicing irure consectetur qui minim eu nulla deserunt aliquip et sed anim proident culpa ad aliquip consequat minim reprehenderit proident cupidatat velit in eiusmod laborum aliqua in."]))], null, null)
            }
            var al = e["\u0275ccf"]("ms-cards", nl, function(l) {
                    return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 1, "ms-cards", [], [
                        [40, "@fadeInAnimation", 0]
                    ], null, null, el, ul)), e["\u0275did"](1, 114688, null, 0, nl, [j.a], null, null)], function(l, n) {
                        l(n, 1, 0)
                    }, function(l, n) {
                        l(n, 0, 0, !0)
                    })
                }, {}, {}, []),
                tl = function() {
                    function l(l) {
                        this.pageTitleService = l
                    }
                    return l.prototype.ngOnInit = function() {
                        this.pageTitleService.setTitle("Social Icons")
                    }, l
                }(),
                dl = e["\u0275crt"]({
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

            function sl(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 113, "div", [
                    ["class", "social-btn-wrapper"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 46, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](2, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](3, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["social buttons"])), (l()(), e["\u0275eld"](5, 0, null, null, 42, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](6, 0, null, null, 2, "button", [
                    ["class", "btn btn-fb mb-2 mr-2 btn-square"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](7, 0, null, null, 0, "i", [
                    ["class", "fa fa-facebook left"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Facebook"])), (l()(), e["\u0275eld"](9, 0, null, null, 2, "button", [
                    ["class", "btn btn-tw mb-2 mr-2 btn-square"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](10, 0, null, null, 0, "i", [
                    ["class", "fa fa-twitter left"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Twitter"])), (l()(), e["\u0275eld"](12, 0, null, null, 2, "button", [
                    ["class", "btn btn-gplus mb-2 mr-2 btn-square"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](13, 0, null, null, 0, "i", [
                    ["class", "fa fa-google-plus left"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Google +"])), (l()(), e["\u0275eld"](15, 0, null, null, 2, "button", [
                    ["class", "btn btn-li mb-2 mr-2 btn-square"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](16, 0, null, null, 0, "i", [
                    ["class", "fa fa-linkedin left"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Linkedin"])), (l()(), e["\u0275eld"](18, 0, null, null, 2, "button", [
                    ["class", "btn btn-ins mb-2 mr-2 btn-square"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](19, 0, null, null, 0, "i", [
                    ["class", "fa fa-instagram left"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Instagram"])), (l()(), e["\u0275eld"](21, 0, null, null, 2, "button", [
                    ["class", "btn btn-pin mb-2 mr-2 btn-square"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](22, 0, null, null, 0, "i", [
                    ["class", "fa fa-pinterest left"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Pinterest"])), (l()(), e["\u0275eld"](24, 0, null, null, 2, "button", [
                    ["class", "btn btn-yt mb-2 mr-2 btn-square"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](25, 0, null, null, 0, "i", [
                    ["class", "fa fa-youtube left"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Youtube"])), (l()(), e["\u0275eld"](27, 0, null, null, 2, "button", [
                    ["class", "btn btn-vk mb-2 mr-2 btn-square"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](28, 0, null, null, 0, "i", [
                    ["class", "fa fa-vk left"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Vkontakte"])), (l()(), e["\u0275eld"](30, 0, null, null, 2, "button", [
                    ["class", "btn btn-so mb-2 mr-2 btn-square"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](31, 0, null, null, 0, "i", [
                    ["class", "fa fa-stack-overflow left"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Stack Overflow"])), (l()(), e["\u0275eld"](33, 0, null, null, 2, "button", [
                    ["class", "btn btn-slack mb-2 mr-2 btn-square"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](34, 0, null, null, 0, "i", [
                    ["class", "fa fa-slack left"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Slack"])), (l()(), e["\u0275eld"](36, 0, null, null, 2, "button", [
                    ["class", "btn btn-git mb-2 mr-2 btn-square"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](37, 0, null, null, 0, "i", [
                    ["class", "fa fa-github left"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Github"])), (l()(), e["\u0275eld"](39, 0, null, null, 2, "button", [
                    ["class", "btn btn-comm mb-2 mr-2 btn-square"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](40, 0, null, null, 0, "i", [
                    ["class", "fa fa-comments left"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Comments"])), (l()(), e["\u0275eld"](42, 0, null, null, 2, "button", [
                    ["class", "btn btn-email mb-2 mr-2 btn-square"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](43, 0, null, null, 0, "i", [
                    ["class", "fa fa-envelope left"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Email"])), (l()(), e["\u0275eld"](45, 0, null, null, 2, "button", [
                    ["class", "btn btn-dribbble mb-2 mr-2 btn-square"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](46, 0, null, null, 0, "i", [
                    ["class", "fa fa-dribbble left"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Dribbble"])), (l()(), e["\u0275eld"](48, 0, null, null, 32, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](49, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](50, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Social Button With Icon"])), (l()(), e["\u0275eld"](52, 0, null, null, 28, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](53, 0, null, null, 1, "button", [
                    ["class", "btn btn-fb mb-2 mr-2 btn-square"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](54, 0, null, null, 0, "i", [
                    ["class", "fa fa-facebook"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](55, 0, null, null, 1, "button", [
                    ["class", "btn btn-tw mb-2 mr-2 btn-square"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](56, 0, null, null, 0, "i", [
                    ["class", "fa fa-twitter"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](57, 0, null, null, 1, "button", [
                    ["class", "btn btn-gplus mb-2 mr-2 btn-square"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](58, 0, null, null, 0, "i", [
                    ["class", "fa fa-google-plus"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](59, 0, null, null, 1, "button", [
                    ["class", "btn btn-li mb-2 mr-2 btn-square"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](60, 0, null, null, 0, "i", [
                    ["class", "fa fa-linkedin"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](61, 0, null, null, 1, "button", [
                    ["class", "btn btn-ins mb-2 mr-2 btn-square"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](62, 0, null, null, 0, "i", [
                    ["class", "fa fa-instagram"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](63, 0, null, null, 1, "button", [
                    ["class", "btn btn-pin mb-2 mr-2 btn-square"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](64, 0, null, null, 0, "i", [
                    ["class", "fa fa-pinterest"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](65, 0, null, null, 1, "button", [
                    ["class", "btn btn-yt mb-2 mr-2 btn-square"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](66, 0, null, null, 0, "i", [
                    ["class", "fa fa-youtube"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](67, 0, null, null, 1, "button", [
                    ["class", "btn btn-dribbble mb-2 mr-2 btn-square"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](68, 0, null, null, 0, "i", [
                    ["class", "fa fa-dribbble left"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](69, 0, null, null, 1, "button", [
                    ["class", "btn btn-vk mb-2 mr-2 btn-square"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](70, 0, null, null, 0, "i", [
                    ["class", "fa fa-vk"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](71, 0, null, null, 1, "button", [
                    ["class", "btn btn-so mb-2 mr-2 btn-square"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](72, 0, null, null, 0, "i", [
                    ["class", "fa fa-stack-overflow"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](73, 0, null, null, 1, "button", [
                    ["class", "btn btn-slack mb-2 mr-2 btn-square"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](74, 0, null, null, 0, "i", [
                    ["class", "fa fa-slack"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](75, 0, null, null, 1, "button", [
                    ["class", "btn btn-git mb-2 mr-2 btn-square"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](76, 0, null, null, 0, "i", [
                    ["class", "fa fa-github"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](77, 0, null, null, 1, "button", [
                    ["class", "btn btn-comm mb-2 mr-2 btn-square"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](78, 0, null, null, 0, "i", [
                    ["class", "fa fa-comments"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](79, 0, null, null, 1, "button", [
                    ["class", "btn btn-email mb-2 mr-2 btn-square"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](80, 0, null, null, 0, "i", [
                    ["class", "fa fa-envelope"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](81, 0, null, null, 32, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](82, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](83, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Rounded Button"])), (l()(), e["\u0275eld"](85, 0, null, null, 28, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](86, 0, null, null, 1, "a", [
                    ["class", "btn-circle btn-fb mr-2 mb-2"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](87, 0, null, null, 0, "i", [
                    ["class", "fa fa-facebook"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](88, 0, null, null, 1, "a", [
                    ["class", "btn-circle btn-tw mr-2 mb-2"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](89, 0, null, null, 0, "i", [
                    ["class", "fa fa-twitter"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](90, 0, null, null, 1, "a", [
                    ["class", "btn-circle btn-gplus mr-2 mb-2"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](91, 0, null, null, 0, "i", [
                    ["class", "fa fa-google-plus"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](92, 0, null, null, 1, "a", [
                    ["class", "btn-circle btn-li mr-2 mb-2"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](93, 0, null, null, 0, "i", [
                    ["class", "fa fa-linkedin"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](94, 0, null, null, 1, "a", [
                    ["class", "btn-circle btn-ins mr-2 mb-2"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](95, 0, null, null, 0, "i", [
                    ["class", "fa fa-instagram"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](96, 0, null, null, 1, "a", [
                    ["class", "btn-circle btn-pin mr-2 mb-2"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](97, 0, null, null, 0, "i", [
                    ["class", "fa fa-pinterest"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](98, 0, null, null, 1, "a", [
                    ["class", "btn-circle btn-yt mr-2 mb-2"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](99, 0, null, null, 0, "i", [
                    ["class", "fa fa-youtube"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](100, 0, null, null, 1, "a", [
                    ["class", "btn-circle btn-dribbble mr-2 mb-2"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](101, 0, null, null, 0, "i", [
                    ["class", "fa fa-dribbble"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](102, 0, null, null, 1, "a", [
                    ["class", "btn-circle btn-vk mr-2 mb-2"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](103, 0, null, null, 0, "i", [
                    ["class", "fa fa-vk"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](104, 0, null, null, 1, "a", [
                    ["class", "btn-circle btn-so mr-2 mb-2"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](105, 0, null, null, 0, "i", [
                    ["class", "fa fa-stack-overflow"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](106, 0, null, null, 1, "a", [
                    ["class", "btn-circle btn-slack mr-2 mb-2"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](107, 0, null, null, 0, "i", [
                    ["class", "fa fa-slack"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](108, 0, null, null, 1, "a", [
                    ["class", "btn-circle btn-git mr-2 mb-2"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](109, 0, null, null, 0, "i", [
                    ["class", "fa fa-github"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](110, 0, null, null, 1, "a", [
                    ["class", "btn-circle btn-comm mr-2 mb-2"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](111, 0, null, null, 0, "i", [
                    ["class", "fa fa-comments"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](112, 0, null, null, 1, "a", [
                    ["class", "btn-circle btn-email mr-2 mb-2"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](113, 0, null, null, 0, "i", [
                    ["class", "fa fa-envelope"]
                ], null, null, null, null, null))], null, null)
            }
            var il = e["\u0275ccf"]("ms-social-icons", tl, function(l) {
                    return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 1, "ms-social-icons", [], [
                        [40, "@fadeInAnimation", 0]
                    ], null, null, sl, dl)), e["\u0275did"](1, 114688, null, 0, tl, [j.a], null, null)], function(l, n) {
                        l(n, 1, 0)
                    }, function(l, n) {
                        l(n, 0, 0, !0)
                    })
                }, {}, {}, []),
                ol = function() {
                    function l(l) {
                        this.pageTitleService = l
                    }
                    return l.prototype.ngOnInit = function() {
                        this.pageTitleService.setTitle("Typography")
                    }, l
                }(),
                rl = e["\u0275crt"]({
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

            function cl(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 644, "div", [
                    ["class", "typography-wrapper"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 54, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](2, 0, null, null, 20, "div", [
                    ["class", "col-sm-12 col-md-12 col-lg-6"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](3, 0, null, null, 19, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](4, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](5, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](6, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](7, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Headings"])), (l()(), e["\u0275eld"](9, 0, null, null, 13, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](10, 0, null, null, 12, "div", [
                    ["class", "typography-heading"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](11, 0, null, null, 1, "h1", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["h1. Bootstrap heading"])), (l()(), e["\u0275eld"](13, 0, null, null, 1, "h2", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["h2. Bootstrap heading"])), (l()(), e["\u0275eld"](15, 0, null, null, 1, "h3", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["h3. Bootstrap heading"])), (l()(), e["\u0275eld"](17, 0, null, null, 1, "h4", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["h4. Bootstrap heading"])), (l()(), e["\u0275eld"](19, 0, null, null, 1, "h5", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["h5. Bootstrap heading"])), (l()(), e["\u0275eld"](21, 0, null, null, 1, "h6", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["h6. Bootstrap heading"])), (l()(), e["\u0275eld"](23, 0, null, null, 32, "div", [
                    ["class", "col-sm-12 col-md-12 col-lg-6"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](24, 0, null, null, 31, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](25, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](26, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](27, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](28, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Headings With Secondary Text"])), (l()(), e["\u0275eld"](30, 0, null, null, 25, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](31, 0, null, null, 24, "div", [
                    ["class", "typography-heading"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](32, 0, null, null, 3, "h1", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["h1. Bootstrap heading "])), (l()(), e["\u0275eld"](34, 0, null, null, 1, "small", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Secondary text"])), (l()(), e["\u0275eld"](36, 0, null, null, 3, "h2", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["h2. Bootstrap heading "])), (l()(), e["\u0275eld"](38, 0, null, null, 1, "small", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Secondary text"])), (l()(), e["\u0275eld"](40, 0, null, null, 3, "h3", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["h3. Bootstrap heading "])), (l()(), e["\u0275eld"](42, 0, null, null, 1, "small", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Secondary text"])), (l()(), e["\u0275eld"](44, 0, null, null, 3, "h4", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["h4. Bootstrap heading "])), (l()(), e["\u0275eld"](46, 0, null, null, 1, "small", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Secondary text"])), (l()(), e["\u0275eld"](48, 0, null, null, 3, "h5", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["h5. Bootstrap heading "])), (l()(), e["\u0275eld"](50, 0, null, null, 1, "small", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Secondary text"])), (l()(), e["\u0275eld"](52, 0, null, null, 3, "h6", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["h6. Bootstrap heading "])), (l()(), e["\u0275eld"](54, 0, null, null, 1, "small", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Secondary text"])), (l()(), e["\u0275eld"](56, 0, null, null, 65, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](57, 0, null, null, 16, "div", [
                    ["class", "col-md-12 col-lg-6 col-xl-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](58, 0, null, null, 15, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](59, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](60, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](61, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](62, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Headings Elements"])), (l()(), e["\u0275eld"](64, 0, null, null, 9, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](65, 0, null, null, 8, "div", [
                    ["class", "d-flex justify-content-start"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](66, 0, null, null, 2, "div", [
                    ["class", "d-flex align-items-start flex-column"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](67, 0, null, null, 1, "span", [
                    ["class", "left-icon"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](68, 0, null, null, 0, "i", [
                    ["class", "fa fa-wrench"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](69, 0, null, null, 4, "div", [
                    ["class", "d-flex align-items-start flex-column"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](70, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Left Icons"])), (l()(), e["\u0275eld"](72, 0, null, null, 1, "p", [
                    ["class", "text-muted"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Left positioned heading icon"])), (l()(), e["\u0275eld"](74, 0, null, null, 13, "div", [
                    ["class", "col-md-12 col-lg-6 col-xl-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](75, 0, null, null, 12, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](76, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](77, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](78, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](79, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Headings Elements"])), (l()(), e["\u0275eld"](81, 0, null, null, 6, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](82, 0, null, null, 3, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Right Icons"])), (l()(), e["\u0275eld"](84, 0, null, null, 1, "span", [
                    ["class", "right-icon"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](85, 0, null, null, 0, "i", [
                    ["class", "fa fa-exclamation-circle fa-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](86, 0, null, null, 1, "p", [
                    ["class", "text-muted"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Left positioned heading icon"])), (l()(), e["\u0275eld"](88, 0, null, null, 16, "div", [
                    ["class", "col-md-12 col-lg-6 col-xl-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](89, 0, null, null, 15, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](90, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](91, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](92, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](93, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Headings Elements"])), (l()(), e["\u0275eld"](95, 0, null, null, 9, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](96, 0, null, null, 8, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](97, 0, null, null, 4, "div", [
                    ["class", "d-flex align-content-start flex-column"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](98, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Right Aligned icon"])), (l()(), e["\u0275eld"](100, 0, null, null, 1, "p", [
                    ["class", "text-muted"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Left positioned heading icon"])), (l()(), e["\u0275eld"](102, 0, null, null, 2, "div", [
                    ["class", "d-flex align-content-end flex-column"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](103, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275eld"](104, 0, null, null, 0, "i", [
                    ["class", "fa fa-ellipsis-h fa-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](105, 0, null, null, 16, "div", [
                    ["class", "col-md-12 col-lg-6 col-xl-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](106, 0, null, null, 15, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](107, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](108, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](109, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](110, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Headings Elements"])), (l()(), e["\u0275eld"](112, 0, null, null, 9, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](113, 0, null, null, 8, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](114, 0, null, null, 4, "div", [
                    ["class", "d-flex align-items-start flex-column"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](115, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Header With Label"])), (l()(), e["\u0275eld"](117, 0, null, null, 1, "p", [
                    ["class", "text-muted"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Left positioned heading icon"])), (l()(), e["\u0275eld"](119, 0, null, null, 2, "div", [
                    ["class", "d-flex align-items-end flex-column"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](120, 0, null, null, 1, "span", [
                    ["class", "badge badge-success"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Paid"])), (l()(), e["\u0275eld"](122, 0, null, null, 68, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](123, 0, null, null, 16, "div", [
                    ["class", "col-md-12 col-lg-6 col-xl-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](124, 0, null, null, 15, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](125, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](126, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](127, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](128, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Headings Elements"])), (l()(), e["\u0275eld"](130, 0, null, null, 9, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](131, 0, null, null, 8, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](132, 0, null, null, 4, "div", [
                    ["class", "d-flex align-items-start flex-column"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](133, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Left Icons"])), (l()(), e["\u0275eld"](135, 0, null, null, 1, "p", [
                    ["class", "text-muted"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Left positioned heading icon"])), (l()(), e["\u0275eld"](137, 0, null, null, 2, "div", [
                    ["class", "d-flex align-items-end flex-column"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](138, 0, null, null, 1, "span", [
                    ["class", "badge badge-success square-30"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["35"])), (l()(), e["\u0275eld"](140, 0, null, null, 16, "div", [
                    ["class", "col-md-12 col-lg-6 col-xl-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](141, 0, null, null, 15, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](142, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](143, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](144, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](145, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Headings Elements"])), (l()(), e["\u0275eld"](147, 0, null, null, 9, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](148, 0, null, null, 8, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](149, 0, null, null, 4, "div", [
                    ["class", "d-flex align-items-start flex-column"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](150, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Right Icons"])), (l()(), e["\u0275eld"](152, 0, null, null, 1, "p", [
                    ["class", "text-muted"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Left positioned heading icon"])), (l()(), e["\u0275eld"](154, 0, null, null, 2, "div", [
                    ["class", "d-flex align-items-end flex-column"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](155, 0, null, null, 1, "button", [
                    ["class", "btn btn-outline-primary btn-circle square-40"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](156, 0, null, null, 0, "i", [
                    ["class", "fa fa-file-image-o fa-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](157, 0, null, null, 16, "div", [
                    ["class", "col-md-12 col-lg-6 col-xl-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](158, 0, null, null, 15, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](159, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](160, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](161, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](162, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Headings Elements"])), (l()(), e["\u0275eld"](164, 0, null, null, 9, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](165, 0, null, null, 8, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](166, 0, null, null, 4, "div", [
                    ["class", "d-flex align-items-start flex-column"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](167, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Header with button"])), (l()(), e["\u0275eld"](169, 0, null, null, 1, "p", [
                    ["class", "text-muted"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Left positioned heading icon"])), (l()(), e["\u0275eld"](171, 0, null, null, 2, "div", [
                    ["class", "d-flex align-items-end flex-column"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](172, 0, null, null, 1, "button", [
                    ["class", "btn btn-primary btn-sm"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Button"])), (l()(), e["\u0275eld"](174, 0, null, null, 16, "div", [
                    ["class", "col-md-12 col-lg-6 col-xl-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](175, 0, null, null, 15, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](176, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](177, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](178, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](179, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Headings Elements"])), (l()(), e["\u0275eld"](181, 0, null, null, 9, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](182, 0, null, null, 8, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](183, 0, null, null, 4, "div", [
                    ["class", "d-flex align-items-start flex-column"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](184, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Header with button"])), (l()(), e["\u0275eld"](186, 0, null, null, 1, "p", [
                    ["class", "text-muted"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Left positioned heading icon"])), (l()(), e["\u0275eld"](188, 0, null, null, 2, "div", [
                    ["class", "d-flex align-items-end flex-column"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](189, 0, null, null, 1, "span", [
                    ["class", "badge badge-warning"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["COD"])), (l()(), e["\u0275eld"](191, 0, null, null, 42, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](192, 0, null, null, 20, "div", [
                    ["class", "col-lg-12 col-xl-6"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](193, 0, null, null, 19, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](194, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](195, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](196, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](197, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Paragraph Small Text"])), (l()(), e["\u0275eld"](199, 0, null, null, 13, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](200, 0, null, null, 1, "p", [
                    ["class", "small"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra metus a augue pellentesque aliquet. Duis id elit dolor. Pellentesque gravida molestie egestas. Phasellus neque leo, fermentum at lobortis nec, efficitur in ante."])), (l()(), e["\u0275eld"](202, 0, null, null, 1, "p", [
                    ["class", "small"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Vestibulum enim diam, facilisis eu luctus vel, rhoncus in lectus. Vestibulum faucibus nec elit sed mollis. Vestibulum convallis tellus quis dictum convallis. Vivamus euismod nunc ut dolor finibus, eget gravida eros porta. Suspendisse eu lorem vel ex iaculis venenatis a ut lorem. "])), (l()(), e["\u0275eld"](204, 0, null, null, 2, "p", [], null, null, null, null, null)), (l()(), e["\u0275eld"](205, 0, null, null, 1, "strong", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Vestibulum sed vestibulum neque,"])), (l()(), e["\u0275eld"](207, 0, null, null, 2, "p", [], null, null, null, null, null)), (l()(), e["\u0275eld"](208, 0, null, null, 1, "u", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["sed vehicula lectus. Nam a diam sollicitudin, gravida nisi quis, ultrices dolor."])), (l()(), e["\u0275eld"](210, 0, null, null, 2, "p", [], null, null, null, null, null)), (l()(), e["\u0275eld"](211, 0, null, null, 1, "del", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Vestibulum viverra dignissim mollis."])), (l()(), e["\u0275eld"](213, 0, null, null, 20, "div", [
                    ["class", "col-lg-12 col-xl-6"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](214, 0, null, null, 19, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](215, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](216, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](217, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](218, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Paragraph"])), (l()(), e["\u0275eld"](220, 0, null, null, 13, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](221, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra metus a augue pellentesque aliquet. Duis id elit dolor. Pellentesque gravida molestie egestas. Phasellus neque leo, fermentum at lobortis nec, efficitur in ante."])), (l()(), e["\u0275eld"](223, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Vestibulum enim diam, facilisis eu luctus vel, rhoncus in lectus. Vestibulum faucibus nec elit sed mollis. Vestibulum convallis tellus quis dictum convallis. Vivamus euismod nunc ut dolor finibus, eget gravida eros porta. Suspendisse eu lorem vel ex iaculis venenatis a ut lorem. "])), (l()(), e["\u0275eld"](225, 0, null, null, 2, "p", [], null, null, null, null, null)), (l()(), e["\u0275eld"](226, 0, null, null, 1, "strong", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Vestibulum sed vestibulum neque,"])), (l()(), e["\u0275eld"](228, 0, null, null, 2, "p", [], null, null, null, null, null)), (l()(), e["\u0275eld"](229, 0, null, null, 1, "u", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["sed vehicula lectus. Nam a diam sollicitudin, gravida nisi quis, ultrices dolor."])), (l()(), e["\u0275eld"](231, 0, null, null, 2, "p", [], null, null, null, null, null)), (l()(), e["\u0275eld"](232, 0, null, null, 1, "del", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Vestibulum viverra dignissim mollis."])), (l()(), e["\u0275eld"](234, 0, null, null, 93, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](235, 0, null, null, 30, "div", [
                    ["class", "col-lg-12 col-xl-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](236, 0, null, null, 29, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](237, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](238, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](239, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](240, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["unordered List"])), (l()(), e["\u0275eld"](242, 0, null, null, 23, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](243, 0, null, null, 4, "p", [
                    ["class", "text-muted mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Default unordered list using "])), (l()(), e["\u0275eld"](245, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".list"])), (l()(), e["\u0275ted"](-1, null, [" class"])), (l()(), e["\u0275eld"](248, 0, null, null, 17, "ul", [
                    ["class", "list m-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](249, 0, null, null, 1, "li", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Home"])), (l()(), e["\u0275eld"](251, 0, null, null, 1, "li", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["About Us"])), (l()(), e["\u0275eld"](253, 0, null, null, 1, "li", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Works"])), (l()(), e["\u0275eld"](255, 0, null, null, 8, "li", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Jobs "])), (l()(), e["\u0275eld"](257, 0, null, null, 6, "ul", [
                    ["class", "list"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](258, 0, null, null, 1, "li", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Designer"])), (l()(), e["\u0275eld"](260, 0, null, null, 1, "li", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Front-end Developer"])), (l()(), e["\u0275eld"](262, 0, null, null, 1, "li", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["IOS Developer"])), (l()(), e["\u0275eld"](264, 0, null, null, 1, "li", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Contact"])), (l()(), e["\u0275eld"](266, 0, null, null, 30, "div", [
                    ["class", "col-lg-12 col-xl-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](267, 0, null, null, 29, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](268, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](269, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](270, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](271, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Ordered List"])), (l()(), e["\u0275eld"](273, 0, null, null, 23, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](274, 0, null, null, 4, "p", [
                    ["class", "text-muted mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Default unordered list using "])), (l()(), e["\u0275eld"](276, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".list"])), (l()(), e["\u0275ted"](-1, null, [" class"])), (l()(), e["\u0275eld"](279, 0, null, null, 17, "ol", [
                    ["class", "list m-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](280, 0, null, null, 1, "li", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Home"])), (l()(), e["\u0275eld"](282, 0, null, null, 1, "li", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["About Us"])), (l()(), e["\u0275eld"](284, 0, null, null, 1, "li", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Works"])), (l()(), e["\u0275eld"](286, 0, null, null, 8, "li", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Jobs "])), (l()(), e["\u0275eld"](288, 0, null, null, 6, "ol", [
                    ["class", "list"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](289, 0, null, null, 1, "li", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Designer"])), (l()(), e["\u0275eld"](291, 0, null, null, 1, "li", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Front-end Developer"])), (l()(), e["\u0275eld"](293, 0, null, null, 1, "li", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["IOS Developer"])), (l()(), e["\u0275eld"](295, 0, null, null, 1, "li", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Contact"])), (l()(), e["\u0275eld"](297, 0, null, null, 30, "div", [
                    ["class", "col-lg-12 col-xl-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](298, 0, null, null, 29, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](299, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](300, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](301, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](302, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Unstyled List"])), (l()(), e["\u0275eld"](304, 0, null, null, 23, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](305, 0, null, null, 4, "p", [
                    ["class", "text-muted mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Unstyled list using "])), (l()(), e["\u0275eld"](307, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".list-unstyled"])), (l()(), e["\u0275ted"](-1, null, [" class."])), (l()(), e["\u0275eld"](310, 0, null, null, 17, "ul", [
                    ["class", "list list-unstyled m-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](311, 0, null, null, 1, "li", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Home"])), (l()(), e["\u0275eld"](313, 0, null, null, 1, "li", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["About Us"])), (l()(), e["\u0275eld"](315, 0, null, null, 1, "li", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Works"])), (l()(), e["\u0275eld"](317, 0, null, null, 8, "li", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Jobs "])), (l()(), e["\u0275eld"](319, 0, null, null, 6, "ul", [
                    ["class", "list"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](320, 0, null, null, 1, "li", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Designer"])), (l()(), e["\u0275eld"](322, 0, null, null, 1, "li", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Front-end Developer"])), (l()(), e["\u0275eld"](324, 0, null, null, 1, "li", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["IOS Developer"])), (l()(), e["\u0275eld"](326, 0, null, null, 1, "li", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Contact"])), (l()(), e["\u0275eld"](328, 0, null, null, 142, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](329, 0, null, null, 49, "div", [
                    ["class", "col-lg-12 col-xl-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](330, 0, null, null, 48, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](331, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](332, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](333, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](334, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["List with custom icons"])), (l()(), e["\u0275eld"](336, 0, null, null, 42, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](337, 0, null, null, 7, "p", [
                    ["class", "text-muted mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["List with icon list using "])), (l()(), e["\u0275eld"](339, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".list-unstyled"])), (l()(), e["\u0275ted"](-1, null, [" & "])), (l()(), e["\u0275eld"](342, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".list "])), (l()(), e["\u0275ted"](-1, null, [" class."])), (l()(), e["\u0275eld"](345, 0, null, null, 33, "ul", [
                    ["class", "list list-unstyled list-icons m-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](346, 0, null, null, 3, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](347, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275eld"](348, 0, null, null, 0, "i", [
                    ["class", "fa fa-check"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Home"])), (l()(), e["\u0275eld"](350, 0, null, null, 3, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](351, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275eld"](352, 0, null, null, 0, "i", [
                    ["class", "fa fa-check"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" About Us"])), (l()(), e["\u0275eld"](354, 0, null, null, 3, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](355, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275eld"](356, 0, null, null, 0, "i", [
                    ["class", "fa fa-check"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Works"])), (l()(), e["\u0275eld"](358, 0, null, null, 16, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](359, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275eld"](360, 0, null, null, 0, "i", [
                    ["class", "fa fa-check"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Jobs "])), (l()(), e["\u0275eld"](362, 0, null, null, 12, "ul", [
                    ["class", "list list-unstyled"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](363, 0, null, null, 3, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](364, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275eld"](365, 0, null, null, 0, "i", [
                    ["class", "fa fa-arrow-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Designer"])), (l()(), e["\u0275eld"](367, 0, null, null, 3, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](368, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275eld"](369, 0, null, null, 0, "i", [
                    ["class", "fa fa-arrow-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Front-end Developer"])), (l()(), e["\u0275eld"](371, 0, null, null, 3, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](372, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275eld"](373, 0, null, null, 0, "i", [
                    ["class", "fa fa-arrow-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" IOS Developer"])), (l()(), e["\u0275eld"](375, 0, null, null, 3, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](376, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275eld"](377, 0, null, null, 0, "i", [
                    ["class", "fa fa-check"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Contact"])), (l()(), e["\u0275eld"](379, 0, null, null, 51, "div", [
                    ["class", "col-lg-12 col-xl-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](380, 0, null, null, 50, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](381, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](382, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](383, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](384, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Collapsible Submenu"])), (l()(), e["\u0275eld"](386, 0, null, null, 44, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](387, 0, null, null, 43, "div", [
                    ["class", "list-Collapsible-icon"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](388, 0, null, null, 42, "ul", [
                    ["class", "list list-unstyled"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](389, 0, null, null, 12, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](390, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275eld"](391, 0, null, null, 0, "i", [
                    ["class", "la la-caret-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Home "])), (l()(), e["\u0275eld"](393, 0, null, null, 8, "ul", [
                    ["class", "list list-unstyled"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](394, 0, null, null, 3, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](395, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275eld"](396, 0, null, null, 0, "i", [
                    ["class", "fa fa-check"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" List 1"])), (l()(), e["\u0275eld"](398, 0, null, null, 3, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](399, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275eld"](400, 0, null, null, 0, "i", [
                    ["class", "fa fa-check"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" List 2"])), (l()(), e["\u0275eld"](402, 0, null, null, 3, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](403, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275eld"](404, 0, null, null, 0, "i", [
                    ["class", "fa fa-caret-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" About Us"])), (l()(), e["\u0275eld"](406, 0, null, null, 3, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](407, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275eld"](408, 0, null, null, 0, "i", [
                    ["class", "fa fa-caret-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Works"])), (l()(), e["\u0275eld"](410, 0, null, null, 16, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](411, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275eld"](412, 0, null, null, 0, "i", [
                    ["class", "fa fa-caret-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Jobs "])), (l()(), e["\u0275eld"](414, 0, null, null, 12, "ul", [
                    ["class", "list list-unstyled"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](415, 0, null, null, 3, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](416, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275eld"](417, 0, null, null, 0, "i", [
                    ["class", "fa fa-check"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Designer"])), (l()(), e["\u0275eld"](419, 0, null, null, 3, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](420, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275eld"](421, 0, null, null, 0, "i", [
                    ["class", "fa fa-check"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Front-end Developer"])), (l()(), e["\u0275eld"](423, 0, null, null, 3, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](424, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275eld"](425, 0, null, null, 0, "i", [
                    ["class", "fa fa-check"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" IOS Developer"])), (l()(), e["\u0275eld"](427, 0, null, null, 3, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](428, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275eld"](429, 0, null, null, 0, "i", [
                    ["class", "fa fa-caret-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Contact"])), (l()(), e["\u0275eld"](431, 0, null, null, 39, "div", [
                    ["class", "col-lg-12 col-xl-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](432, 0, null, null, 38, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](433, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](434, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](435, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](436, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Lists - Inline"])), (l()(), e["\u0275eld"](438, 0, null, null, 32, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](439, 0, null, null, 4, "p", [
                    ["class", "text-muted mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["List with icon list using "])), (l()(), e["\u0275eld"](441, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".list-inline"])), (l()(), e["\u0275ted"](-1, null, [" class."])), (l()(), e["\u0275eld"](444, 0, null, null, 6, "ul", [
                    ["class", "list-inline mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](445, 0, null, null, 1, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["1. Lorem ipsum"])), (l()(), e["\u0275eld"](447, 0, null, null, 1, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["2. Phasellus iaculis "])), (l()(), e["\u0275eld"](449, 0, null, null, 1, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["3. Nulla volutpat"])), (l()(), e["\u0275eld"](451, 0, null, null, 9, "ul", [
                    ["class", "list-inline mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](452, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](453, 0, null, null, 0, "i", [
                    ["class", "fa fa-circle"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [". Lorem ipsum"])), (l()(), e["\u0275eld"](455, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](456, 0, null, null, 0, "i", [
                    ["class", "fa fa-circle"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [". Phasellus iaculis "])), (l()(), e["\u0275eld"](458, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](459, 0, null, null, 0, "i", [
                    ["class", "fa fa-circle"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [". Nulla volutpat"])), (l()(), e["\u0275eld"](461, 0, null, null, 9, "ul", [
                    ["class", "list-inline mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](462, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](463, 0, null, null, 0, "i", [
                    ["class", "fa fa-square"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Lorem ipsum"])), (l()(), e["\u0275eld"](465, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](466, 0, null, null, 0, "i", [
                    ["class", "fa fa-square"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Phasellus iaculis "])), (l()(), e["\u0275eld"](468, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](469, 0, null, null, 0, "i", [
                    ["class", "fa fa-square"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Nulla volutpat"])), (l()(), e["\u0275eld"](471, 0, null, null, 52, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](472, 0, null, null, 23, "div", [
                    ["class", "col-lg-12 col-xl-6"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](473, 0, null, null, 22, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](474, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](475, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](476, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](477, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Vertical discription List"])), (l()(), e["\u0275eld"](479, 0, null, null, 16, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](480, 0, null, null, 15, "div", [
                    ["class", "vertical-list"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](481, 0, null, null, 14, "dl", [], null, null, null, null, null)), (l()(), e["\u0275eld"](482, 0, null, null, 1, "dt", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Description lists"])), (l()(), e["\u0275eld"](484, 0, null, null, 1, "dd", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["A description list is perfect for defining terms."])), (l()(), e["\u0275eld"](486, 0, null, null, 1, "dt", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Euismod"])), (l()(), e["\u0275eld"](488, 0, null, null, 1, "dd", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit."])), (l()(), e["\u0275eld"](490, 0, null, null, 1, "dd", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Donec id elit non mi porta gravida at eget metus."])), (l()(), e["\u0275eld"](492, 0, null, null, 1, "dt", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Malesuada porta"])), (l()(), e["\u0275eld"](494, 0, null, null, 1, "dd", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Etiam porta sem malesuada magna mollis euismod."])), (l()(), e["\u0275eld"](496, 0, null, null, 27, "div", [
                    ["class", "col-lg-12 col-xl-6"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](497, 0, null, null, 26, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](498, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](499, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](500, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](501, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Horizontal discription List"])), (l()(), e["\u0275eld"](503, 0, null, null, 20, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](504, 0, null, null, 19, "div", [
                    ["class", "horizontal-list"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](505, 0, null, null, 18, "dl", [
                    ["class", "dl-horizontal"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](506, 0, null, null, 1, "dt", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Description lists"])), (l()(), e["\u0275eld"](508, 0, null, null, 1, "dd", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["A description list is perfect for defining terms."])), (l()(), e["\u0275eld"](510, 0, null, null, 1, "dt", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Euismod"])), (l()(), e["\u0275eld"](512, 0, null, null, 1, "dd", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit."])), (l()(), e["\u0275eld"](514, 0, null, null, 1, "dd", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Donec id elit non mi porta gravida at eget metus."])), (l()(), e["\u0275eld"](516, 0, null, null, 1, "dt", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Malesuada porta"])), (l()(), e["\u0275eld"](518, 0, null, null, 1, "dd", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Etiam porta sem malesuada magna mollis euismod."])), (l()(), e["\u0275eld"](520, 0, null, null, 1, "dt", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Felis euismod semper eget lacinia"])), (l()(), e["\u0275eld"](522, 0, null, null, 1, "dd", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."])), (l()(), e["\u0275eld"](524, 0, null, null, 120, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](525, 0, null, null, 37, "div", [
                    ["class", "col-sm-12 col-md-12 col-lg-12 col-xl-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](526, 0, null, null, 20, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](527, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](528, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](529, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](530, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Text State"])), (l()(), e["\u0275eld"](532, 0, null, null, 14, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](533, 0, null, null, 13, "div", [
                    ["class", "text-color"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](534, 0, null, null, 12, "ul", [
                    ["class", "list-unstyled"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](535, 0, null, null, 1, "li", [
                    ["class", "text-muted"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Muted text here "])), (l()(), e["\u0275eld"](537, 0, null, null, 1, "li", [
                    ["class", "text-primary"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Primary text here "])), (l()(), e["\u0275eld"](539, 0, null, null, 1, "li", [
                    ["class", "text-success"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Success text here "])), (l()(), e["\u0275eld"](541, 0, null, null, 1, "li", [
                    ["class", "text-info"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Info text here "])), (l()(), e["\u0275eld"](543, 0, null, null, 1, "li", [
                    ["class", "text-warning"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Warning text here "])), (l()(), e["\u0275eld"](545, 0, null, null, 1, "li", [
                    ["class", "text-danger"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Danger text here "])), (l()(), e["\u0275eld"](547, 0, null, null, 15, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](548, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](549, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](550, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](551, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Transformation classes"])), (l()(), e["\u0275eld"](553, 0, null, null, 9, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](554, 0, null, null, 8, "div", [
                    ["class", "transform-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](555, 0, null, null, 1, "p", [
                    ["class", "text-muted"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Transform text in components with text capitalization classes."])), (l()(), e["\u0275eld"](557, 0, null, null, 1, "p", [
                    ["class", "text-lowercase"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["lowercased text."])), (l()(), e["\u0275eld"](559, 0, null, null, 1, "p", [
                    ["class", "text-uppercase"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Uppercased text."])), (l()(), e["\u0275eld"](561, 0, null, null, 1, "p", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Capitalized Text."])), (l()(), e["\u0275eld"](563, 0, null, null, 40, "div", [
                    ["class", "col-sm-12 col-md-12 col-lg-12 col-xl-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](564, 0, null, null, 13, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](565, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](566, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](567, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](568, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Text Alignments"])), (l()(), e["\u0275eld"](570, 0, null, null, 7, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](571, 0, null, null, 6, "div", [
                    ["class", "list-alignment"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](572, 0, null, null, 1, "p", [
                    ["class", "mb-4 text-muted text-left"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Left align to block"])), (l()(), e["\u0275eld"](574, 0, null, null, 1, "p", [
                    ["class", "mb-4 text-muted text-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Center align to block"])), (l()(), e["\u0275eld"](576, 0, null, null, 1, "p", [
                    ["class", "mb-4 text-muted text-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Right align to block"])), (l()(), e["\u0275eld"](578, 0, null, null, 25, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](579, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](580, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](581, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](582, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Code & User Input"])), (l()(), e["\u0275eld"](584, 0, null, null, 19, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](585, 0, null, null, 18, "div", [
                    ["class", "user-input-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](586, 0, null, null, 4, "p", [
                    ["class", "mb-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["For example, "])), (l()(), e["\u0275eld"](588, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["<section>"])), (l()(), e["\u0275ted"](-1, null, [" should be wrapped as inline. "])), (l()(), e["\u0275eld"](591, 0, null, null, 4, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["To switch directories, type "])), (l()(), e["\u0275eld"](593, 0, null, null, 1, "kbd", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["cd"])), (l()(), e["\u0275ted"](-1, null, [" followed by the name of the directory."])), (l()(), e["\u0275eld"](596, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["To edit settings, press "])), (l()(), e["\u0275eld"](598, 0, null, null, 5, "kbd", [], null, null, null, null, null)), (l()(), e["\u0275eld"](599, 0, null, null, 1, "kbd", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["ctrl"])), (l()(), e["\u0275ted"](-1, null, [" + "])), (l()(), e["\u0275eld"](602, 0, null, null, 1, "kbd", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [","])), (l()(), e["\u0275eld"](604, 0, null, null, 40, "div", [
                    ["class", "col-sm-12 col-md-12 col-lg-12 col-xl-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](605, 0, null, null, 24, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](606, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](607, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](608, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](609, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Address"])), (l()(), e["\u0275eld"](611, 0, null, null, 18, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](612, 0, null, null, 11, "address", [], null, null, null, null, null)), (l()(), e["\u0275eld"](613, 0, null, null, 2, "span", [
                    ["class", "d-block mb-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](614, 0, null, null, 1, "strong", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Loop, Inc."])), (l()(), e["\u0275eld"](616, 0, null, null, 1, "span", [
                    ["class", "d-block text-muted"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["795 Park Ave, Suite 120"])), (l()(), e["\u0275eld"](618, 0, null, null, 1, "span", [
                    ["class", "d-block text-muted"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["San Francisco, CA 94107"])), (l()(), e["\u0275eld"](620, 0, null, null, 3, "span", [
                    ["class", "d-block text-muted"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](621, 0, null, null, 1, "abbr", [
                    ["title", "Phone"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["P:"])), (l()(), e["\u0275ted"](-1, null, [" (123) 456-7890"])), (l()(), e["\u0275eld"](624, 0, null, null, 5, "address", [], null, null, null, null, null)), (l()(), e["\u0275eld"](625, 0, null, null, 2, "span", [
                    ["class", "d-block mb-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](626, 0, null, null, 1, "strong", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Email Address"])), (l()(), e["\u0275eld"](628, 0, null, null, 1, "a", [
                    ["href", "mailto:#"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["first.last@example.com"])), (l()(), e["\u0275eld"](630, 0, null, null, 14, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](631, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](632, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](633, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](634, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Basic Block"])), (l()(), e["\u0275eld"](636, 0, null, null, 8, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](637, 0, null, null, 7, "div", [
                    ["class", "basic-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](638, 0, null, null, 4, "p", [
                    ["class", "mrgn-b-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Use "])), (l()(), e["\u0275eld"](640, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["<pre>"])), (l()(), e["\u0275ted"](-1, null, [" for multiple lines of code. Be sure to escape any angle brackets in the code for proper rendering."])), (l()(), e["\u0275eld"](643, 0, null, null, 1, "pre", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["<p> Sample text here...</p>"]))], null, null)
            }
            var pl = e["\u0275ccf"]("ms-typography", ol, function(l) {
                    return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 1, "ms-typography", [], [
                        [40, "@fadeInAnimation", 0]
                    ], null, null, cl, rl)), e["\u0275did"](1, 114688, null, 0, ol, [j.a], null, null)], function(l, n) {
                        l(n, 1, 0)
                    }, function(l, n) {
                        l(n, 0, 0, !0)
                    })
                }, {}, {}, []),
                bl = function() {
                    function l(l) {
                        this.pageTitleService = l
                    }
                    return l.prototype.ngOnInit = function() {
                        this.pageTitleService.setTitle("Badges")
                    }, l
                }(),
                gl = e["\u0275crt"]({
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

            function hl(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 1057, "div", [
                    ["class", "badge-wrapper"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 142, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](2, 0, null, null, 32, "div", [
                    ["class", "col-sm-12 col-md-12 col-lg-4 col-full-lg-down"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](3, 0, null, null, 31, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](4, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](5, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](6, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](7, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Badge Size"])), (l()(), e["\u0275eld"](9, 0, null, null, 25, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](10, 0, null, null, 24, "div", [
                    ["class", "heading"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](11, 0, null, null, 3, "h1", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["h1. Bootstrap heading "])), (l()(), e["\u0275eld"](13, 0, null, null, 1, "span", [
                    ["class", "badge bg-dark"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["New"])), (l()(), e["\u0275eld"](15, 0, null, null, 3, "h2", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["h2. Bootstrap heading "])), (l()(), e["\u0275eld"](17, 0, null, null, 1, "span", [
                    ["class", "badge bg-dark"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["New"])), (l()(), e["\u0275eld"](19, 0, null, null, 3, "h3", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["h3. Bootstrap heading "])), (l()(), e["\u0275eld"](21, 0, null, null, 1, "span", [
                    ["class", "badge bg-dark"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["New"])), (l()(), e["\u0275eld"](23, 0, null, null, 3, "h4", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["h4. Bootstrap heading "])), (l()(), e["\u0275eld"](25, 0, null, null, 1, "span", [
                    ["class", "badge bg-dark"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["New"])), (l()(), e["\u0275eld"](27, 0, null, null, 3, "h5", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["h5. Bootstrap heading "])), (l()(), e["\u0275eld"](29, 0, null, null, 1, "span", [
                    ["class", "badge bg-dark"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["New"])), (l()(), e["\u0275eld"](31, 0, null, null, 3, "h6", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["h6. Bootstrap heading "])), (l()(), e["\u0275eld"](33, 0, null, null, 1, "span", [
                    ["class", "badge bg-dark"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["New"])), (l()(), e["\u0275eld"](35, 0, null, null, 108, "div", [
                    ["class", "col-sm-12 col-md-12 col-lg-8 col-full-lg-down"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](36, 0, null, null, 107, "div", [
                    ["class", "chk-full-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](37, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](38, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](39, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](40, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Basic Bagde Style"])), (l()(), e["\u0275eld"](42, 0, null, null, 101, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](43, 0, null, null, 100, "div", [
                    ["class", "table-responsive"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](44, 0, null, null, 99, "table", [
                    ["class", "table table-middle"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](45, 0, null, null, 98, "tbody", [], null, null, null, null, null)), (l()(), e["\u0275eld"](46, 0, null, null, 13, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](47, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Inverse badge"])), (l()(), e["\u0275eld"](49, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](50, 0, null, null, 1, "span", [
                    ["class", "badge badge-secondary"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Secondary"])), (l()(), e["\u0275eld"](52, 0, null, null, 7, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Inverse badge styling. To use, add "])), (l()(), e["\u0275eld"](54, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge-secondary"])), (l()(), e["\u0275ted"](-1, null, [" to the base "])), (l()(), e["\u0275eld"](57, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge"])), (l()(), e["\u0275ted"](-1, null, [" class"])), (l()(), e["\u0275eld"](60, 0, null, null, 13, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](61, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Primary badge"])), (l()(), e["\u0275eld"](63, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](64, 0, null, null, 1, "span", [
                    ["class", "badge badge-primary"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Primary"])), (l()(), e["\u0275eld"](66, 0, null, null, 7, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Primary contextual alternative. To use, add "])), (l()(), e["\u0275eld"](68, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge-primary"])), (l()(), e["\u0275ted"](-1, null, [" to the base "])), (l()(), e["\u0275eld"](71, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge"])), (l()(), e["\u0275ted"](-1, null, [" class"])), (l()(), e["\u0275eld"](74, 0, null, null, 13, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](75, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Danger badge"])), (l()(), e["\u0275eld"](77, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](78, 0, null, null, 1, "span", [
                    ["class", "badge badge-danger"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Danger"])), (l()(), e["\u0275eld"](80, 0, null, null, 7, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Danger contextual alternative. To use, add "])), (l()(), e["\u0275eld"](82, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge-danger"])), (l()(), e["\u0275ted"](-1, null, [" to the base "])), (l()(), e["\u0275eld"](85, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge"])), (l()(), e["\u0275ted"](-1, null, [" class"])), (l()(), e["\u0275eld"](88, 0, null, null, 13, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](89, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Success badge"])), (l()(), e["\u0275eld"](91, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](92, 0, null, null, 1, "span", [
                    ["class", "badge badge-success"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Success"])), (l()(), e["\u0275eld"](94, 0, null, null, 7, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Success contextual alternative. To use, add "])), (l()(), e["\u0275eld"](96, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge-success"])), (l()(), e["\u0275ted"](-1, null, [" to the base "])), (l()(), e["\u0275eld"](99, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge"])), (l()(), e["\u0275ted"](-1, null, [" class"])), (l()(), e["\u0275eld"](102, 0, null, null, 13, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](103, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Warning badge"])), (l()(), e["\u0275eld"](105, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](106, 0, null, null, 1, "span", [
                    ["class", "badge badge-warning"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Warning"])), (l()(), e["\u0275eld"](108, 0, null, null, 7, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Warning contextual alternative. To use, add "])), (l()(), e["\u0275eld"](110, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge-warning"])), (l()(), e["\u0275ted"](-1, null, [" to the base "])), (l()(), e["\u0275eld"](113, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge"])), (l()(), e["\u0275ted"](-1, null, [" class"])), (l()(), e["\u0275eld"](116, 0, null, null, 13, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](117, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Info badge"])), (l()(), e["\u0275eld"](119, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](120, 0, null, null, 1, "span", [
                    ["class", "badge badge-info"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Infomation"])), (l()(), e["\u0275eld"](122, 0, null, null, 7, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Info contextual alternative. To use, add "])), (l()(), e["\u0275eld"](124, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge-info"])), (l()(), e["\u0275ted"](-1, null, [" to the base "])), (l()(), e["\u0275eld"](127, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge"])), (l()(), e["\u0275ted"](-1, null, [" class"])), (l()(), e["\u0275eld"](130, 0, null, null, 13, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](131, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Custom badge color"])), (l()(), e["\u0275eld"](133, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](134, 0, null, null, 1, "span", [
                    ["class", "badge bg-yellow"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Custome"])), (l()(), e["\u0275eld"](136, 0, null, null, 7, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["To use, add "])), (l()(), e["\u0275eld"](138, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".bg-*"])), (l()(), e["\u0275ted"](-1, null, [" color class to the "])), (l()(), e["\u0275eld"](141, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge"])), (l()(), e["\u0275ted"](-1, null, [" element"])), (l()(), e["\u0275eld"](144, 0, null, null, 109, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](145, 0, null, null, 108, "div", [
                    ["class", "col-sm-12 col-md-12 col-lg-12"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](146, 0, null, null, 107, "div", [
                    ["class", "chk-full-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](147, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](148, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](149, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](150, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Outline Badge"])), (l()(), e["\u0275eld"](152, 0, null, null, 101, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](153, 0, null, null, 100, "div", [
                    ["class", "table-responsive"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](154, 0, null, null, 99, "table", [
                    ["class", "table table-middle"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](155, 0, null, null, 98, "tbody", [], null, null, null, null, null)), (l()(), e["\u0275eld"](156, 0, null, null, 13, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](157, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Inverse badge"])), (l()(), e["\u0275eld"](159, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](160, 0, null, null, 1, "span", [
                    ["class", "badge badge-outline-inverse"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Inverse"])), (l()(), e["\u0275eld"](162, 0, null, null, 7, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Inverse badge styling. To use, add "])), (l()(), e["\u0275eld"](164, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge-dark"])), (l()(), e["\u0275ted"](-1, null, [" to the base "])), (l()(), e["\u0275eld"](167, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge"])), (l()(), e["\u0275ted"](-1, null, [" class"])), (l()(), e["\u0275eld"](170, 0, null, null, 13, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](171, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Primary badge"])), (l()(), e["\u0275eld"](173, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](174, 0, null, null, 1, "span", [
                    ["class", "badge badge-outline-primary"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Primary"])), (l()(), e["\u0275eld"](176, 0, null, null, 7, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Primary contextual alternative. To use, add "])), (l()(), e["\u0275eld"](178, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge-primary"])), (l()(), e["\u0275ted"](-1, null, [" to the base "])), (l()(), e["\u0275eld"](181, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge"])), (l()(), e["\u0275ted"](-1, null, [" class"])), (l()(), e["\u0275eld"](184, 0, null, null, 13, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](185, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Danger badge"])), (l()(), e["\u0275eld"](187, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](188, 0, null, null, 1, "span", [
                    ["class", "badge badge-outline-danger"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Danger"])), (l()(), e["\u0275eld"](190, 0, null, null, 7, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Danger contextual alternative. To use, add "])), (l()(), e["\u0275eld"](192, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge-danger"])), (l()(), e["\u0275ted"](-1, null, [" to the base "])), (l()(), e["\u0275eld"](195, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge"])), (l()(), e["\u0275ted"](-1, null, [" class"])), (l()(), e["\u0275eld"](198, 0, null, null, 13, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](199, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Success badge"])), (l()(), e["\u0275eld"](201, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](202, 0, null, null, 1, "span", [
                    ["class", "badge badge-outline-success"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Success"])), (l()(), e["\u0275eld"](204, 0, null, null, 7, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Success contextual alternative. To use, add "])), (l()(), e["\u0275eld"](206, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge-success"])), (l()(), e["\u0275ted"](-1, null, [" to the base "])), (l()(), e["\u0275eld"](209, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge"])), (l()(), e["\u0275ted"](-1, null, [" class"])), (l()(), e["\u0275eld"](212, 0, null, null, 13, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](213, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Warning badge"])), (l()(), e["\u0275eld"](215, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](216, 0, null, null, 1, "span", [
                    ["class", "badge badge-outline-warning"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Warning"])), (l()(), e["\u0275eld"](218, 0, null, null, 7, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Warning contextual alternative. To use, add "])), (l()(), e["\u0275eld"](220, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge-warning"])), (l()(), e["\u0275ted"](-1, null, [" to the base "])), (l()(), e["\u0275eld"](223, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge"])), (l()(), e["\u0275ted"](-1, null, [" class"])), (l()(), e["\u0275eld"](226, 0, null, null, 13, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](227, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Info badge"])), (l()(), e["\u0275eld"](229, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](230, 0, null, null, 1, "span", [
                    ["class", "badge badge-outline-info"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Infomation"])), (l()(), e["\u0275eld"](232, 0, null, null, 7, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Info contextual alternative. To use, add "])), (l()(), e["\u0275eld"](234, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge-info"])), (l()(), e["\u0275ted"](-1, null, [" to the base "])), (l()(), e["\u0275eld"](237, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge"])), (l()(), e["\u0275ted"](-1, null, [" class"])), (l()(), e["\u0275eld"](240, 0, null, null, 13, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](241, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Custom badge color"])), (l()(), e["\u0275eld"](243, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](244, 0, null, null, 1, "span", [
                    ["class", "badge badge-outline-yellow"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Custome"])), (l()(), e["\u0275eld"](246, 0, null, null, 7, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["To use, add "])), (l()(), e["\u0275eld"](248, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".bg-*"])), (l()(), e["\u0275ted"](-1, null, [" color class to the "])), (l()(), e["\u0275eld"](251, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge"])), (l()(), e["\u0275ted"](-1, null, [" element"])), (l()(), e["\u0275eld"](254, 0, null, null, 109, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](255, 0, null, null, 108, "div", [
                    ["class", "col-sm-12 col-md-12 col-lg-12"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](256, 0, null, null, 107, "div", [
                    ["class", "chk-full-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](257, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](258, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](259, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](260, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Badge pill"])), (l()(), e["\u0275eld"](262, 0, null, null, 101, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](263, 0, null, null, 100, "div", [
                    ["class", "table-responsive"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](264, 0, null, null, 99, "table", [
                    ["class", "table table-middle"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](265, 0, null, null, 98, "tbody", [], null, null, null, null, null)), (l()(), e["\u0275eld"](266, 0, null, null, 13, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](267, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Inverse badge"])), (l()(), e["\u0275eld"](269, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](270, 0, null, null, 1, "span", [
                    ["class", "badge badge-outline-inverse badge-pill"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Inverse"])), (l()(), e["\u0275eld"](272, 0, null, null, 7, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Inverse badge styling. To use, add "])), (l()(), e["\u0275eld"](274, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge-dark"])), (l()(), e["\u0275ted"](-1, null, [" to the base "])), (l()(), e["\u0275eld"](277, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge"])), (l()(), e["\u0275ted"](-1, null, [" class"])), (l()(), e["\u0275eld"](280, 0, null, null, 13, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](281, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Primary badge"])), (l()(), e["\u0275eld"](283, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](284, 0, null, null, 1, "span", [
                    ["class", "badge badge-outline-primary badge-pill"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Primary"])), (l()(), e["\u0275eld"](286, 0, null, null, 7, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Primary contextual alternative. To use, add "])), (l()(), e["\u0275eld"](288, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge-primary"])), (l()(), e["\u0275ted"](-1, null, [" to the base "])), (l()(), e["\u0275eld"](291, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge"])), (l()(), e["\u0275ted"](-1, null, [" class"])), (l()(), e["\u0275eld"](294, 0, null, null, 13, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](295, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Danger badge"])), (l()(), e["\u0275eld"](297, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](298, 0, null, null, 1, "span", [
                    ["class", "badge badge-outline-danger badge-pill"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Danger"])), (l()(), e["\u0275eld"](300, 0, null, null, 7, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Danger contextual alternative. To use, add "])), (l()(), e["\u0275eld"](302, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge-danger"])), (l()(), e["\u0275ted"](-1, null, [" to the base "])), (l()(), e["\u0275eld"](305, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge"])), (l()(), e["\u0275ted"](-1, null, [" class"])), (l()(), e["\u0275eld"](308, 0, null, null, 13, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](309, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Success badge"])), (l()(), e["\u0275eld"](311, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](312, 0, null, null, 1, "span", [
                    ["class", "badge badge-outline-success badge-pill"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Success"])), (l()(), e["\u0275eld"](314, 0, null, null, 7, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Success contextual alternative. To use, add "])), (l()(), e["\u0275eld"](316, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge-success"])), (l()(), e["\u0275ted"](-1, null, [" to the base "])), (l()(), e["\u0275eld"](319, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge"])), (l()(), e["\u0275ted"](-1, null, [" class"])), (l()(), e["\u0275eld"](322, 0, null, null, 13, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](323, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Warning badge"])), (l()(), e["\u0275eld"](325, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](326, 0, null, null, 1, "span", [
                    ["class", "badge badge-outline-warning badge-pill"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Warning"])), (l()(), e["\u0275eld"](328, 0, null, null, 7, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Warning contextual alternative. To use, add "])), (l()(), e["\u0275eld"](330, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge-warning"])), (l()(), e["\u0275ted"](-1, null, [" to the base "])), (l()(), e["\u0275eld"](333, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge"])), (l()(), e["\u0275ted"](-1, null, [" class"])), (l()(), e["\u0275eld"](336, 0, null, null, 13, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](337, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Info badge"])), (l()(), e["\u0275eld"](339, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](340, 0, null, null, 1, "span", [
                    ["class", "badge badge-outline-info badge-pill"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Infomation"])), (l()(), e["\u0275eld"](342, 0, null, null, 7, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Info contextual alternative. To use, add "])), (l()(), e["\u0275eld"](344, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge-info"])), (l()(), e["\u0275ted"](-1, null, [" to the base "])), (l()(), e["\u0275eld"](347, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge"])), (l()(), e["\u0275ted"](-1, null, [" class"])), (l()(), e["\u0275eld"](350, 0, null, null, 13, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](351, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Custom badge color"])), (l()(), e["\u0275eld"](353, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](354, 0, null, null, 1, "span", [
                    ["class", "badge badge-outline-yellow badge-pill"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Custome"])), (l()(), e["\u0275eld"](356, 0, null, null, 7, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["To use, add "])), (l()(), e["\u0275eld"](358, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".bg-*"])), (l()(), e["\u0275ted"](-1, null, [" color class to the "])), (l()(), e["\u0275eld"](361, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge"])), (l()(), e["\u0275ted"](-1, null, [" element"])), (l()(), e["\u0275eld"](364, 0, null, null, 204, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](365, 0, null, null, 203, "div", [
                    ["class", "col-sm-12 col-md-12 col-lg-12"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](366, 0, null, null, 202, "div", [
                    ["class", "chk-full-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](367, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](368, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](369, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](370, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Basic Badge Style"])), (l()(), e["\u0275eld"](372, 0, null, null, 196, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](373, 0, null, null, 195, "div", [
                    ["class", "table-responsive"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](374, 0, null, null, 194, "table", [
                    ["class", "table table-middle"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](375, 0, null, null, 193, "tbody", [], null, null, null, null, null)), (l()(), e["\u0275eld"](376, 0, null, null, 16, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](377, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Inverse badge"])), (l()(), e["\u0275eld"](379, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](380, 0, null, null, 1, "span", [
                    ["class", "badge bg-dark"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Inverse"])), (l()(), e["\u0275eld"](382, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](383, 0, null, null, 1, "span", [
                    ["class", "badge badge-outline-inverse"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Inverse"])), (l()(), e["\u0275eld"](385, 0, null, null, 7, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Inverse badge styling. To use, add "])), (l()(), e["\u0275eld"](387, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge-dark"])), (l()(), e["\u0275ted"](-1, null, [" to the base "])), (l()(), e["\u0275eld"](390, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge"])), (l()(), e["\u0275ted"](-1, null, [" class"])), (l()(), e["\u0275eld"](393, 0, null, null, 16, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](394, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Rounded Rect."])), (l()(), e["\u0275eld"](396, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](397, 0, null, null, 1, "span", [
                    ["class", "badge badge-primary"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Default"])), (l()(), e["\u0275eld"](399, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](400, 0, null, null, 1, "span", [
                    ["class", "badge badge-outline-primary"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Default"])), (l()(), e["\u0275eld"](402, 0, null, null, 7, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Default badge styling. To use, add "])), (l()(), e["\u0275eld"](404, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge-primary"])), (l()(), e["\u0275ted"](-1, null, [" to the base "])), (l()(), e["\u0275eld"](407, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge"])), (l()(), e["\u0275ted"](-1, null, [" class"])), (l()(), e["\u0275eld"](410, 0, null, null, 16, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](411, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Badge Pill"])), (l()(), e["\u0275eld"](413, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](414, 0, null, null, 1, "span", [
                    ["class", "badge bg-warning badge-pill"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Default"])), (l()(), e["\u0275eld"](416, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](417, 0, null, null, 1, "span", [
                    ["class", "badge badge-outline-warning badge-pill"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Default"])), (l()(), e["\u0275eld"](419, 0, null, null, 7, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["To use, add "])), (l()(), e["\u0275eld"](421, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".bg-*"])), (l()(), e["\u0275ted"](-1, null, [" color class to the "])), (l()(), e["\u0275eld"](424, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge"])), (l()(), e["\u0275ted"](-1, null, [" element"])), (l()(), e["\u0275eld"](427, 0, null, null, 16, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](428, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Full Width"])), (l()(), e["\u0275eld"](430, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](431, 0, null, null, 1, "span", [
                    ["class", "badge bg-success badge-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Block Width"])), (l()(), e["\u0275eld"](433, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](434, 0, null, null, 1, "span", [
                    ["class", "badge badge-outline-success badge-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Block Width"])), (l()(), e["\u0275eld"](436, 0, null, null, 7, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["To use, add "])), (l()(), e["\u0275eld"](438, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".bg-*"])), (l()(), e["\u0275ted"](-1, null, [" color class to the "])), (l()(), e["\u0275eld"](441, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge"])), (l()(), e["\u0275ted"](-1, null, [" element"])), (l()(), e["\u0275eld"](444, 0, null, null, 42, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](445, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dropdown"])), (l()(), e["\u0275eld"](447, 0, null, null, 15, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](448, 0, null, null, 14, "div", [
                    ["class", "btn-group"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](449, 0, null, null, 3, "a", [
                    ["class", "badge badge-dark dropdown-toggle badge-block"],
                    ["data-toggle", "dropdown"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dropdown "])), (l()(), e["\u0275eld"](451, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275eld"](452, 0, null, null, 0, "i", [
                    ["class", "la la-angle-down"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](453, 0, null, null, 9, "ul", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](454, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](455, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["High priority"])), (l()(), e["\u0275eld"](457, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](458, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Normal priority"])), (l()(), e["\u0275eld"](460, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](461, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Low priority"])), (l()(), e["\u0275eld"](463, 0, null, null, 15, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](464, 0, null, null, 14, "div", [
                    ["class", "btn-group"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](465, 0, null, null, 3, "a", [
                    ["class", "badge badge-outline-inverse dropdown-toggle badge-block"],
                    ["data-toggle", "dropdown"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dropdown "])), (l()(), e["\u0275eld"](467, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275eld"](468, 0, null, null, 0, "i", [
                    ["class", "la la-angle-down"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](469, 0, null, null, 9, "ul", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](470, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](471, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["High priority"])), (l()(), e["\u0275eld"](473, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](474, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Normal priority"])), (l()(), e["\u0275eld"](476, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](477, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Low priority"])), (l()(), e["\u0275eld"](479, 0, null, null, 7, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["To use, add "])), (l()(), e["\u0275eld"](481, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".bg-*"])), (l()(), e["\u0275ted"](-1, null, [" color class to the "])), (l()(), e["\u0275eld"](484, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge"])), (l()(), e["\u0275ted"](-1, null, [" element "])), (l()(), e["\u0275eld"](487, 0, null, null, 21, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](488, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Icon + Text"])), (l()(), e["\u0275eld"](490, 0, null, null, 3, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](491, 0, null, null, 2, "span", [
                    ["class", "badge badge-info"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](492, 0, null, null, 0, "i", [
                    ["class", "fa fa-bell fa-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Infomation"])), (l()(), e["\u0275eld"](494, 0, null, null, 3, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](495, 0, null, null, 2, "span", [
                    ["class", "badge badge-outline-info"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](496, 0, null, null, 0, "i", [
                    ["class", "fa fa-bell fa-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Infomation"])), (l()(), e["\u0275eld"](498, 0, null, null, 10, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Add "])), (l()(), e["\u0275eld"](500, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["<i>"])), (l()(), e["\u0275ted"](-1, null, [" into default badge and To use, add "])), (l()(), e["\u0275eld"](503, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge-info"])), (l()(), e["\u0275ted"](-1, null, [" to the base "])), (l()(), e["\u0275eld"](506, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge"])), (l()(), e["\u0275ted"](-1, null, [" class"])), (l()(), e["\u0275eld"](509, 0, null, null, 19, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](510, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Icon Square"])), (l()(), e["\u0275eld"](512, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](513, 0, null, null, 1, "span", [
                    ["class", "badge badge-info"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](514, 0, null, null, 0, "i", [
                    ["class", "fa fa-comments fa-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](515, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](516, 0, null, null, 1, "span", [
                    ["class", "badge badge-outline-info"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](517, 0, null, null, 0, "i", [
                    ["class", "fa fa-comments fa-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](518, 0, null, null, 10, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Add "])), (l()(), e["\u0275eld"](520, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["<i>"])), (l()(), e["\u0275ted"](-1, null, [" into default badge and To use, add "])), (l()(), e["\u0275eld"](523, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge-info"])), (l()(), e["\u0275ted"](-1, null, [" to the base "])), (l()(), e["\u0275eld"](526, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge"])), (l()(), e["\u0275ted"](-1, null, [" class"])), (l()(), e["\u0275eld"](529, 0, null, null, 19, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](530, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Icon Rounded"])), (l()(), e["\u0275eld"](532, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](533, 0, null, null, 1, "span", [
                    ["class", "badge badge-warning badge-rounded"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](534, 0, null, null, 0, "i", [
                    ["class", "fa fa-comments fa-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](535, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](536, 0, null, null, 1, "span", [
                    ["class", "badge badge-outline-warning badge-rounded"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](537, 0, null, null, 0, "i", [
                    ["class", "fa fa-comments fa-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](538, 0, null, null, 10, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Add "])), (l()(), e["\u0275eld"](540, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["<i>"])), (l()(), e["\u0275ted"](-1, null, [" into default badge and To use, add "])), (l()(), e["\u0275eld"](543, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge-warning"])), (l()(), e["\u0275ted"](-1, null, [" to the base "])), (l()(), e["\u0275eld"](546, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge"])), (l()(), e["\u0275ted"](-1, null, [" class"])), (l()(), e["\u0275eld"](549, 0, null, null, 19, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](550, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Icon linked"])), (l()(), e["\u0275eld"](552, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](553, 0, null, null, 1, "span", [
                    ["class", "badge badge-dark badge-base-round"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](554, 0, null, null, 0, "i", [
                    ["class", "fa fa-comments fa-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](555, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](556, 0, null, null, 1, "span", [
                    ["class", "badge badge-outline-dark badge-base-round"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](557, 0, null, null, 0, "i", [
                    ["class", "fa fa-comments fa-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](558, 0, null, null, 10, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Add "])), (l()(), e["\u0275eld"](560, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["<i>"])), (l()(), e["\u0275ted"](-1, null, [" into default badge and To use, add "])), (l()(), e["\u0275eld"](563, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge-dark"])), (l()(), e["\u0275ted"](-1, null, [" to the base "])), (l()(), e["\u0275eld"](566, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge"])), (l()(), e["\u0275ted"](-1, null, [" class"])), (l()(), e["\u0275eld"](569, 0, null, null, 91, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](570, 0, null, null, 90, "div", [
                    ["class", "col-sm-12 col-md-12 col-lg-12"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](571, 0, null, null, 89, "div", [
                    ["class", "chk-full-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](572, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](573, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](574, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](575, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Basic Badge"])), (l()(), e["\u0275eld"](577, 0, null, null, 83, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](578, 0, null, null, 82, "div", [
                    ["class", "table-responsive"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](579, 0, null, null, 81, "table", [
                    ["class", "table table-middle"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](580, 0, null, null, 80, "tbody", [], null, null, null, null, null)), (l()(), e["\u0275eld"](581, 0, null, null, 10, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](582, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Inverse badge"])), (l()(), e["\u0275eld"](584, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](585, 0, null, null, 1, "span", [
                    ["class", "badge badge-dark badge-circle"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["78"])), (l()(), e["\u0275eld"](587, 0, null, null, 4, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Basic badge. To use, add "])), (l()(), e["\u0275eld"](589, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge-dark"])), (l()(), e["\u0275ted"](-1, null, [" to the badge element"])), (l()(), e["\u0275eld"](592, 0, null, null, 10, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](593, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Primary badge"])), (l()(), e["\u0275eld"](595, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](596, 0, null, null, 1, "span", [
                    ["class", "badge badge-primary badge-circle"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["32"])), (l()(), e["\u0275eld"](598, 0, null, null, 4, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Primary contextual alternative. To use, add "])), (l()(), e["\u0275eld"](600, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge-primary"])), (l()(), e["\u0275ted"](-1, null, [" to the badge element"])), (l()(), e["\u0275eld"](603, 0, null, null, 10, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](604, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Danger badge"])), (l()(), e["\u0275eld"](606, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](607, 0, null, null, 1, "span", [
                    ["class", "badge badge-danger badge-circle"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["34"])), (l()(), e["\u0275eld"](609, 0, null, null, 4, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Danger contextual alternative. To use, add "])), (l()(), e["\u0275eld"](611, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge-danger"])), (l()(), e["\u0275ted"](-1, null, [" to the badge element"])), (l()(), e["\u0275eld"](614, 0, null, null, 10, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](615, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Success badge"])), (l()(), e["\u0275eld"](617, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](618, 0, null, null, 1, "span", [
                    ["class", "badge badge-success badge-circle"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["65"])), (l()(), e["\u0275eld"](620, 0, null, null, 4, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Success contextual alternative. To use, add "])), (l()(), e["\u0275eld"](622, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge-success"])), (l()(), e["\u0275ted"](-1, null, [" to the badge element"])), (l()(), e["\u0275eld"](625, 0, null, null, 10, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](626, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Warning badge"])), (l()(), e["\u0275eld"](628, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](629, 0, null, null, 1, "span", [
                    ["class", "badge badge-warning badge-circle"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["76"])), (l()(), e["\u0275eld"](631, 0, null, null, 4, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Warning contextual alternative. To use, add "])), (l()(), e["\u0275eld"](633, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge-warning"])), (l()(), e["\u0275ted"](-1, null, [" to the badge element"])), (l()(), e["\u0275eld"](636, 0, null, null, 10, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](637, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Info badge"])), (l()(), e["\u0275eld"](639, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](640, 0, null, null, 1, "span", [
                    ["class", "badge badge-info badge-circle"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["98"])), (l()(), e["\u0275eld"](642, 0, null, null, 4, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Info contextual alternative. To use, add "])), (l()(), e["\u0275eld"](644, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge-info"])), (l()(), e["\u0275ted"](-1, null, [" to the badge element"])), (l()(), e["\u0275eld"](647, 0, null, null, 13, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](648, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Custom badge color"])), (l()(), e["\u0275eld"](650, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](651, 0, null, null, 1, "span", [
                    ["class", "badge bg-yellow badge-circle"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["83"])), (l()(), e["\u0275eld"](653, 0, null, null, 7, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Badge with one of "])), (l()(), e["\u0275eld"](655, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["custom"])), (l()(), e["\u0275ted"](-1, null, [" background colors. To use, add "])), (l()(), e["\u0275eld"](658, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".bg-*"])), (l()(), e["\u0275ted"](-1, null, [" color class"])), (l()(), e["\u0275eld"](661, 0, null, null, 91, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](662, 0, null, null, 90, "div", [
                    ["class", "col-sm-12 col-md-12 col-lg-12"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](663, 0, null, null, 89, "div", [
                    ["class", "chk-full-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](664, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](665, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](666, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](667, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Outline Badge"])), (l()(), e["\u0275eld"](669, 0, null, null, 83, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](670, 0, null, null, 82, "div", [
                    ["class", "table-responsive"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](671, 0, null, null, 81, "table", [
                    ["class", "table table-middle"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](672, 0, null, null, 80, "tbody", [], null, null, null, null, null)), (l()(), e["\u0275eld"](673, 0, null, null, 10, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](674, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Inverse badge"])), (l()(), e["\u0275eld"](676, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](677, 0, null, null, 1, "span", [
                    ["class", "badge badge-outline-inverse badge-circle"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["78"])), (l()(), e["\u0275eld"](679, 0, null, null, 4, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Basic badge. To use, add "])), (l()(), e["\u0275eld"](681, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge-dark"])), (l()(), e["\u0275ted"](-1, null, [" to the badge element"])), (l()(), e["\u0275eld"](684, 0, null, null, 10, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](685, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Primary badge"])), (l()(), e["\u0275eld"](687, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](688, 0, null, null, 1, "span", [
                    ["class", "badge badge-outline-primary badge-circle"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["32"])), (l()(), e["\u0275eld"](690, 0, null, null, 4, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Primary contextual alternative. To use, add "])), (l()(), e["\u0275eld"](692, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge-primary"])), (l()(), e["\u0275ted"](-1, null, [" to the badge element"])), (l()(), e["\u0275eld"](695, 0, null, null, 10, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](696, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Danger badge"])), (l()(), e["\u0275eld"](698, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](699, 0, null, null, 1, "span", [
                    ["class", "badge badge-outline-danger badge-circle"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["34"])), (l()(), e["\u0275eld"](701, 0, null, null, 4, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Danger contextual alternative. To use, add "])), (l()(), e["\u0275eld"](703, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge-danger"])), (l()(), e["\u0275ted"](-1, null, [" to the badge element"])), (l()(), e["\u0275eld"](706, 0, null, null, 10, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](707, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Success badge"])), (l()(), e["\u0275eld"](709, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](710, 0, null, null, 1, "span", [
                    ["class", "badge badge-outline-success badge-circle"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["65"])), (l()(), e["\u0275eld"](712, 0, null, null, 4, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Success contextual alternative. To use, add "])), (l()(), e["\u0275eld"](714, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge-success"])), (l()(), e["\u0275ted"](-1, null, [" to the badge element"])), (l()(), e["\u0275eld"](717, 0, null, null, 10, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](718, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Warning badge"])), (l()(), e["\u0275eld"](720, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](721, 0, null, null, 1, "span", [
                    ["class", "badge badge-outline-warning badge-circle"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["76"])), (l()(), e["\u0275eld"](723, 0, null, null, 4, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Warning contextual alternative. To use, add "])), (l()(), e["\u0275eld"](725, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge-warning"])), (l()(), e["\u0275ted"](-1, null, [" to the badge element"])), (l()(), e["\u0275eld"](728, 0, null, null, 10, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](729, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Info badge"])), (l()(), e["\u0275eld"](731, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](732, 0, null, null, 1, "span", [
                    ["class", "badge badge-outline-info badge-circle"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["98"])), (l()(), e["\u0275eld"](734, 0, null, null, 4, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Info contextual alternative. To use, add "])), (l()(), e["\u0275eld"](736, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge-info"])), (l()(), e["\u0275ted"](-1, null, [" to the badge element"])), (l()(), e["\u0275eld"](739, 0, null, null, 13, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](740, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Custom badge color"])), (l()(), e["\u0275eld"](742, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](743, 0, null, null, 1, "span", [
                    ["class", "badge badge-outline-yellow badge-circle"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["83"])), (l()(), e["\u0275eld"](745, 0, null, null, 7, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Badge with one of "])), (l()(), e["\u0275eld"](747, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["custom"])), (l()(), e["\u0275ted"](-1, null, [" background colors. To use, add "])), (l()(), e["\u0275eld"](750, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".bg-*"])), (l()(), e["\u0275ted"](-1, null, [" color class"])), (l()(), e["\u0275eld"](753, 0, null, null, 91, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](754, 0, null, null, 90, "div", [
                    ["class", "col-sm-12 col-md-12 col-lg-12"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](755, 0, null, null, 89, "div", [
                    ["class", "chk-full-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](756, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](757, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](758, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](759, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Rounded Recangle Badge"])), (l()(), e["\u0275eld"](761, 0, null, null, 83, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](762, 0, null, null, 82, "div", [
                    ["class", "table-responsive"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](763, 0, null, null, 81, "table", [
                    ["class", "table table-middle"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](764, 0, null, null, 80, "tbody", [], null, null, null, null, null)), (l()(), e["\u0275eld"](765, 0, null, null, 10, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](766, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Inverse badge"])), (l()(), e["\u0275eld"](768, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](769, 0, null, null, 1, "span", [
                    ["class", "badge bg-dark"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["78"])), (l()(), e["\u0275eld"](771, 0, null, null, 4, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Basic badge. To use, add "])), (l()(), e["\u0275eld"](773, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge-dark"])), (l()(), e["\u0275ted"](-1, null, [" to the badge element"])), (l()(), e["\u0275eld"](776, 0, null, null, 10, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](777, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Primary badge"])), (l()(), e["\u0275eld"](779, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](780, 0, null, null, 1, "span", [
                    ["class", "badge badge-primary"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["32"])), (l()(), e["\u0275eld"](782, 0, null, null, 4, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Primary contextual alternative. To use, add "])), (l()(), e["\u0275eld"](784, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge-primary"])), (l()(), e["\u0275ted"](-1, null, [" to the badge element"])), (l()(), e["\u0275eld"](787, 0, null, null, 10, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](788, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Danger badge"])), (l()(), e["\u0275eld"](790, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](791, 0, null, null, 1, "span", [
                    ["class", "badge badge-danger "]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["34"])), (l()(), e["\u0275eld"](793, 0, null, null, 4, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Danger contextual alternative. To use, add "])), (l()(), e["\u0275eld"](795, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge-danger"])), (l()(), e["\u0275ted"](-1, null, [" to the badge element"])), (l()(), e["\u0275eld"](798, 0, null, null, 10, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](799, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Success badge"])), (l()(), e["\u0275eld"](801, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](802, 0, null, null, 1, "span", [
                    ["class", "badge badge-success"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["65"])), (l()(), e["\u0275eld"](804, 0, null, null, 4, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Success contextual alternative. To use, add "])), (l()(), e["\u0275eld"](806, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge-success"])), (l()(), e["\u0275ted"](-1, null, [" to the badge element"])), (l()(), e["\u0275eld"](809, 0, null, null, 10, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](810, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Warning badge"])), (l()(), e["\u0275eld"](812, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](813, 0, null, null, 1, "span", [
                    ["class", "badge badge-warning"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["76"])), (l()(), e["\u0275eld"](815, 0, null, null, 4, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Warning contextual alternative. To use, add "])), (l()(), e["\u0275eld"](817, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge-warning"])), (l()(), e["\u0275ted"](-1, null, [" to the badge element"])), (l()(), e["\u0275eld"](820, 0, null, null, 10, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](821, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Info badge"])), (l()(), e["\u0275eld"](823, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](824, 0, null, null, 1, "span", [
                    ["class", "badge badge-info ba"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["78"])), (l()(), e["\u0275eld"](826, 0, null, null, 4, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Info contextual alternative. To use, add "])), (l()(), e["\u0275eld"](828, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".badge-info"])), (l()(), e["\u0275ted"](-1, null, [" to the badge element"])), (l()(), e["\u0275eld"](831, 0, null, null, 13, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](832, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Custom badge color"])), (l()(), e["\u0275eld"](834, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](835, 0, null, null, 1, "span", [
                    ["class", "badge bg-yellow"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["83"])), (l()(), e["\u0275eld"](837, 0, null, null, 7, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Badge with one of "])), (l()(), e["\u0275eld"](839, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["custom"])), (l()(), e["\u0275ted"](-1, null, [" background colors. To use, add "])), (l()(), e["\u0275eld"](842, 0, null, null, 1, "code", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [".bg-*"])), (l()(), e["\u0275ted"](-1, null, [" color class"])), (l()(), e["\u0275eld"](845, 0, null, null, 177, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](846, 0, null, null, 76, "div", [
                    ["class", "col-sm-12 col-md-12 col-lg-4 col-full-lg-down"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](847, 0, null, null, 75, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](848, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](849, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](850, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](851, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Badges Combination"])), (l()(), e["\u0275eld"](853, 0, null, null, 69, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](854, 0, null, null, 33, "div", [
                    ["class", "combination-badge mb-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](855, 0, null, null, 32, "ul", [
                    ["class", "list-inline"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](856, 0, null, null, 4, "li", [
                    ["class", "list-inline-item pos-relative"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](857, 0, null, null, 1, "span", [
                    ["class", "badge badge-success badge-sm badge-top-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["35"])), (l()(), e["\u0275eld"](859, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275eld"](860, 0, null, null, 0, "i", [
                    ["class", "fa fa-coffee fa-2x"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](861, 0, null, null, 4, "li", [
                    ["class", "list-inline-item pos-relative"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](862, 0, null, null, 1, "span", [
                    ["class", "badge badge-warning badge-sm badge-top-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["35"])), (l()(), e["\u0275eld"](864, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275eld"](865, 0, null, null, 0, "i", [
                    ["class", "fa fa-filter fa-2x"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](866, 0, null, null, 5, "li", [
                    ["class", "list-inline-item pos-relative"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](867, 0, null, null, 1, "span", [
                    ["class", "badge badge-info badge-sm badge-top-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["35"])), (l()(), e["\u0275eld"](869, 0, null, null, 2, "span", [
                    ["class", "badge bg-dark"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](870, 0, null, null, 0, "i", [
                    ["class", "fa fa-envelope fa-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" \xa0Inbox"])), (l()(), e["\u0275eld"](872, 0, null, null, 15, "li", [
                    ["class", "list-inline-item pos-relative"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](873, 0, null, null, 14, "div", [
                    ["class", "btn-group"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](874, 0, null, null, 3, "a", [
                    ["class", "badge bg-success dropdown-toggle badge-block"],
                    ["data-toggle", "dropdown"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["80 "])), (l()(), e["\u0275eld"](876, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275eld"](877, 0, null, null, 0, "i", [
                    ["class", "la la-angle-down"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](878, 0, null, null, 9, "ul", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](879, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](880, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["High priority"])), (l()(), e["\u0275eld"](882, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](883, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Normal priority"])), (l()(), e["\u0275eld"](885, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](886, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Low priority"])), (l()(), e["\u0275eld"](888, 0, null, null, 5, "div", [
                    ["class", "block-notification mb-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](889, 0, null, null, 4, "button", [
                    ["class", "btn btn-primary btn-lg btn-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](890, 0, null, null, 1, "span", [
                    ["class", "pull-left"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Notification"])), (l()(), e["\u0275eld"](892, 0, null, null, 1, "span", [
                    ["class", "badge badge-danger badge-lg pull-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["42"])), (l()(), e["\u0275eld"](894, 0, null, null, 16, "div", [
                    ["class", "inline-badges mb-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](895, 0, null, null, 15, "ul", [
                    ["class", "list-inline"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](896, 0, null, null, 4, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](897, 0, null, null, 3, "a", [
                    ["class", "btn btn-primary btn-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Active "])), (l()(), e["\u0275eld"](899, 0, null, null, 1, "span", [
                    ["class", "badge badge-warning ml-2 badge-sm"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["35"])), (l()(), e["\u0275eld"](901, 0, null, null, 4, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](902, 0, null, null, 3, "a", [
                    ["class", "btn btn-outline-primary btn-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](903, 0, null, null, 1, "span", [
                    ["class", "badge badge-primary badge-sm"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["35"])), (l()(), e["\u0275ted"](-1, null, [" \xa0Active "])), (l()(), e["\u0275eld"](906, 0, null, null, 4, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](907, 0, null, null, 3, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Active "])), (l()(), e["\u0275eld"](909, 0, null, null, 1, "span", [
                    ["class", "badge badge-success badge-sm"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["42"])), (l()(), e["\u0275eld"](911, 0, null, null, 11, "div", [
                    ["class", "badge-img"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](912, 0, null, null, 10, "ul", [
                    ["class", "list-inline"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](913, 0, null, null, 4, "li", [
                    ["class", "list-inline-item pos-relative"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](914, 0, null, null, 1, "span", [
                    ["class", "badge badge-danger badge-circle badge-top-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["35"])), (l()(), e["\u0275eld"](916, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275eld"](917, 0, null, null, 0, "img", [
                    ["alt", "user image"],
                    ["class", "img-fluid"],
                    ["height", "100"],
                    ["src", "assets/img/user-1.jpg"],
                    ["width", "100"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](918, 0, null, null, 4, "li", [
                    ["class", "list-inline-item pos-relative"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](919, 0, null, null, 1, "span", [
                    ["class", "badge bg-success badge-circle badge-bottom-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["35"])), (l()(), e["\u0275eld"](921, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275eld"](922, 0, null, null, 0, "img", [
                    ["alt", "user image"],
                    ["class", "img-fluid rounded-circle"],
                    ["height", "100"],
                    ["src", "assets/img/user-2.jpg"],
                    ["width", "100"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](923, 0, null, null, 46, "div", [
                    ["class", "col-sm-12 col-md-12 col-lg-4 col-full-lg-down"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](924, 0, null, null, 45, "div", [
                    ["class", "chk-full-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](925, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](926, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](927, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](928, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Badges Size"])), (l()(), e["\u0275eld"](930, 0, null, null, 39, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](931, 0, null, null, 38, "div", [
                    ["class", "table-responsive"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](932, 0, null, null, 37, "table", [
                    ["class", "table table-middle"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](933, 0, null, null, 36, "tbody", [], null, null, null, null, null)), (l()(), e["\u0275eld"](934, 0, null, null, 11, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](935, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Small"])), (l()(), e["\u0275eld"](937, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](938, 0, null, null, 1, "span", [
                    ["class", "badge badge-danger badge-sm"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["53"])), (l()(), e["\u0275eld"](940, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](941, 0, null, null, 1, "span", [
                    ["class", "badge badge-danger badge-base-round"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["53"])), (l()(), e["\u0275eld"](943, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](944, 0, null, null, 1, "span", [
                    ["class", "badge badge-danger"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["145"])), (l()(), e["\u0275eld"](946, 0, null, null, 11, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](947, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Default"])), (l()(), e["\u0275eld"](949, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](950, 0, null, null, 1, "span", [
                    ["class", "badge badge-primary badge-circle"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["53"])), (l()(), e["\u0275eld"](952, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](953, 0, null, null, 1, "span", [
                    ["class", "badge badge-primary badge-base-round"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["53"])), (l()(), e["\u0275eld"](955, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](956, 0, null, null, 1, "span", [
                    ["class", "badge badge-primary"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["145"])), (l()(), e["\u0275eld"](958, 0, null, null, 11, "tr", [], null, null, null, null, null)), (l()(), e["\u0275eld"](959, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Default"])), (l()(), e["\u0275eld"](961, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](962, 0, null, null, 1, "span", [
                    ["class", "badge bg-warning badge-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["53"])), (l()(), e["\u0275eld"](964, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](965, 0, null, null, 1, "span", [
                    ["class", "badge bg-warning badge-base-round badge-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["53"])), (l()(), e["\u0275eld"](967, 0, null, null, 2, "td", [], null, null, null, null, null)), (l()(), e["\u0275eld"](968, 0, null, null, 1, "span", [
                    ["class", "badge bg-warning badge-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["145"])), (l()(), e["\u0275eld"](970, 0, null, null, 52, "div", [
                    ["class", "col-sm-12 col-md-12 col-lg-4 col-full-lg-down"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](971, 0, null, null, 51, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](972, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](973, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](974, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](975, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Different Tags"])), (l()(), e["\u0275eld"](977, 0, null, null, 45, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](978, 0, null, null, 14, "div", [
                    ["class", "different-tag mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](979, 0, null, null, 1, "span", [
                    ["class", "ui-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Square tags"])), (l()(), e["\u0275eld"](981, 0, null, null, 2, "a", [
                    ["class", "btn btn-secondary btn-sm"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](982, 0, null, null, 1, "small", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Impression"])), (l()(), e["\u0275eld"](984, 0, null, null, 2, "a", [
                    ["class", "btn btn-secondary btn-sm"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](985, 0, null, null, 1, "small", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Hello World"])), (l()(), e["\u0275eld"](987, 0, null, null, 2, "a", [
                    ["class", "btn btn-secondary btn-sm"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](988, 0, null, null, 1, "small", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["25 Inch"])), (l()(), e["\u0275eld"](990, 0, null, null, 2, "a", [
                    ["class", "btn btn-secondary btn-sm"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](991, 0, null, null, 1, "small", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Iron Network"])), (l()(), e["\u0275eld"](993, 0, null, null, 18, "div", [
                    ["class", "different-tag-icon mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](994, 0, null, null, 1, "span", [
                    ["class", "ui-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Tag With Icon"])), (l()(), e["\u0275eld"](996, 0, null, null, 3, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](997, 0, null, null, 2, "small", [], null, null, null, null, null)), (l()(), e["\u0275eld"](998, 0, null, null, 0, "i", [
                    ["class", "fa fa-tag"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Impression"])), (l()(), e["\u0275eld"](1e3, 0, null, null, 3, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1001, 0, null, null, 2, "small", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1002, 0, null, null, 0, "i", [
                    ["class", "fa fa-tag"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Hello World"])), (l()(), e["\u0275eld"](1004, 0, null, null, 3, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1005, 0, null, null, 2, "small", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1006, 0, null, null, 0, "i", [
                    ["class", "fa fa-tag"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" 25 Inch"])), (l()(), e["\u0275eld"](1008, 0, null, null, 3, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1009, 0, null, null, 2, "small", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1010, 0, null, null, 0, "i", [
                    ["class", "fa fa-tag"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Iron Network"])), (l()(), e["\u0275eld"](1012, 0, null, null, 10, "div", [
                    ["class", "styled-tag-icon mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1013, 0, null, null, 1, "span", [
                    ["class", "ui-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Styled Tags"])), (l()(), e["\u0275eld"](1015, 0, null, null, 1, "a", [
                    ["class", "btn btn-sm primary-border"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Tag Item 1"])), (l()(), e["\u0275eld"](1017, 0, null, null, 1, "a", [
                    ["class", "btn btn-sm primary-border"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Tag Item 2"])), (l()(), e["\u0275eld"](1019, 0, null, null, 1, "a", [
                    ["class", "btn btn-sm warning-border"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Tag Item 3"])), (l()(), e["\u0275eld"](1021, 0, null, null, 1, "a", [
                    ["class", "btn btn-sm success-border"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Tag Item 4"])), (l()(), e["\u0275eld"](1023, 0, null, null, 34, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1024, 0, null, null, 33, "div", [
                    ["class", "col-sm-12 col-md-12 col-lg-4 col-full-lg-down"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1025, 0, null, null, 32, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1026, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1027, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1028, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1029, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Status Badge"])), (l()(), e["\u0275eld"](1031, 0, null, null, 26, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1032, 0, null, null, 12, "ul", [
                    ["class", "list-inline"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1033, 0, null, null, 3, "li", [
                    ["class", "list-inline-item pos-relative"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1034, 0, null, null, 0, "span", [
                    ["class", "badge badge-success square-20 status-bottom-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1035, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1036, 0, null, null, 0, "img", [
                    ["alt", "user image"],
                    ["class", "img-fluid rounded-circle mb-4"],
                    ["height", "100"],
                    ["src", "assets/img/user-1.jpg"],
                    ["width", "100"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1037, 0, null, null, 3, "li", [
                    ["class", "list-inline-item pos-relative"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1038, 0, null, null, 0, "span", [
                    ["class", "badge badge-warning square-20 status-top-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1039, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1040, 0, null, null, 0, "img", [
                    ["alt", "user image"],
                    ["class", "img-fluid rounded-circle mb-4"],
                    ["height", "100"],
                    ["src", "assets/img/user-2.jpg"],
                    ["width", "100"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1041, 0, null, null, 3, "li", [
                    ["class", "list-inline-item pos-relative"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1042, 0, null, null, 0, "span", [
                    ["class", "badge badge-default square-20 status-bottom-left"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1043, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1044, 0, null, null, 0, "img", [
                    ["alt", "user image"],
                    ["class", "img-fluid rounded-circle mb-4"],
                    ["height", "100"],
                    ["src", "assets/img/user-3.jpg"],
                    ["width", "100"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1045, 0, null, null, 12, "ul", [
                    ["class", "list-inline"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1046, 0, null, null, 3, "li", [
                    ["class", "list-inline-item pos-relative"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1047, 0, null, null, 0, "span", [
                    ["class", "badge badge-danger square-20 status-top-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1048, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1049, 0, null, null, 0, "img", [
                    ["alt", "user image"],
                    ["class", "img-fluid rounded-circle mb-4\n                            "],
                    ["height", "100"],
                    ["src", "assets/img/user-4.jpg"],
                    ["width", "100"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1050, 0, null, null, 3, "li", [
                    ["class", "list-inline-item pos-relative"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1051, 0, null, null, 0, "span", [
                    ["class", "badge badge-primary square-20 status-bottom-right"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1052, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1053, 0, null, null, 0, "img", [
                    ["alt", "user image"],
                    ["class", "img-fluid rounded-circle mb-4\n                            "],
                    ["height", "100"],
                    ["src", "assets/img/user-5.jpg"],
                    ["width", "100"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1054, 0, null, null, 3, "li", [
                    ["class", "list-inline-item pos-relative"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1055, 0, null, null, 0, "span", [
                    ["class", "badge badge-info square-20 status-top-left"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1056, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275eld"](1057, 0, null, null, 0, "img", [
                    ["alt", "user image"],
                    ["class", "img-fluid rounded-circle mb-4\n                            "],
                    ["height", "100"],
                    ["src", "assets/img/user-6.jpg"],
                    ["width", "100"]
                ], null, null, null, null, null))], null, null)
            }
            var ml = e["\u0275ccf"]("ms-badges", bl, function(l) {
                    return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 1, "ms-badges", [], [
                        [40, "@fadeInAnimation", 0]
                    ], null, null, hl, gl)), e["\u0275did"](1, 114688, null, 0, bl, [j.a], null, null)], function(l, n) {
                        l(n, 1, 0)
                    }, function(l, n) {
                        l(n, 0, 0, !0)
                    })
                }, {}, {}, []),
                vl = function() {
                    function l(l) {
                        this.pageTitleService = l
                    }
                    return l.prototype.ngOnInit = function() {
                        this.pageTitleService.setTitle("Dropdown")
                    }, l
                }(),
                fl = e["\u0275crt"]({
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

            function Al(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 803, "div", [
                    ["class", "Dropdown-wrapper"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 123, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](2, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](3, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](4, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](5, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Basic"])), (l()(), e["\u0275eld"](7, 0, null, null, 117, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](8, 0, null, null, 116, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](9, 0, null, null, 10, "div", [
                    ["class", "col-sm-6 col-md-2 col-lg-2 mb-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](10, 0, null, null, 9, "div", [
                    ["class", "dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](11, 0, null, null, 1, "button", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "btn btn-secondary dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["id", "dropdownMenuButton"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Dropdown "])), (l()(), e["\u0275eld"](13, 0, null, null, 6, "div", [
                    ["aria-labelledby", "dropdownMenuButton"],
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](14, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "#"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Action"])), (l()(), e["\u0275eld"](16, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "#"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another action"])), (l()(), e["\u0275eld"](18, 0, null, null, 1, "a", [
                    ["class", "dropdown-item"],
                    ["href", "#"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Something else here"])), (l()(), e["\u0275eld"](20, 0, null, null, 23, "div", [
                    ["class", "col-sm-6 col-md-2 col-lg-2 mb-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](21, 0, null, null, 22, "div", [
                    ["class", "dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](22, 0, null, null, 1, "button", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "btn btn-secondary dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Dropdown "])), (l()(), e["\u0275eld"](24, 0, null, null, 19, "ul", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](25, 0, null, null, 1, "li", [
                    ["class", "dropdown-header dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Default With heading"])), (l()(), e["\u0275eld"](27, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](28, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Action"])), (l()(), e["\u0275eld"](30, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](31, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another action"])), (l()(), e["\u0275eld"](33, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](34, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Something else here"])), (l()(), e["\u0275eld"](36, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](37, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Separated link"])), (l()(), e["\u0275eld"](39, 0, null, null, 1, "li", [
                    ["class", "dropdown-header dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Second Header"])), (l()(), e["\u0275eld"](41, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](42, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another link"])), (l()(), e["\u0275eld"](44, 0, null, null, 17, "div", [
                    ["class", "col-sm-6 col-md-2 col-lg-2 mb-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](45, 0, null, null, 16, "div", [
                    ["class", "dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](46, 0, null, null, 1, "button", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "btn btn-secondary dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Dropdown "])), (l()(), e["\u0275eld"](48, 0, null, null, 13, "ul", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](49, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](50, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Action"])), (l()(), e["\u0275eld"](52, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](53, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another action"])), (l()(), e["\u0275eld"](55, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](56, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Something else here"])), (l()(), e["\u0275eld"](58, 0, null, null, 0, "li", [
                    ["class", "dropdown-divider"],
                    ["role", "separator"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](59, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](60, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Separated link"])), (l()(), e["\u0275eld"](62, 0, null, null, 23, "div", [
                    ["class", "col-sm-6 col-md-2 col-lg-2 mb-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](63, 0, null, null, 22, "div", [
                    ["class", "dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](64, 0, null, null, 1, "button", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "btn btn-secondary dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Dropdown "])), (l()(), e["\u0275eld"](66, 0, null, null, 19, "ul", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](67, 0, null, null, 1, "li", [
                    ["class", "dropdown-header dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Default With heading"])), (l()(), e["\u0275eld"](69, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](70, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Action"])), (l()(), e["\u0275eld"](72, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](73, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another action"])), (l()(), e["\u0275eld"](75, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](76, 0, null, null, 1, "a", [
                    ["class", "active"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Something else here"])), (l()(), e["\u0275eld"](78, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](79, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Separated link"])), (l()(), e["\u0275eld"](81, 0, null, null, 1, "li", [
                    ["class", "dropdown-header dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Second Header"])), (l()(), e["\u0275eld"](83, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](84, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another link"])), (l()(), e["\u0275eld"](86, 0, null, null, 14, "div", [
                    ["class", "col-sm-6 col-md-2 col-lg-2 mb-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](87, 0, null, null, 13, "div", [
                    ["class", "dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](88, 0, null, null, 1, "button", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "btn btn-secondary dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Dropdown "])), (l()(), e["\u0275eld"](90, 0, null, null, 10, "ul", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](91, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](92, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Action"])), (l()(), e["\u0275eld"](94, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](95, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another action"])), (l()(), e["\u0275eld"](97, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](98, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Something else here"])), (l()(), e["\u0275eld"](100, 0, null, null, 0, "li", [
                    ["class", "dropdown-divider"],
                    ["role", "separator"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](101, 0, null, null, 23, "div", [
                    ["class", "col-sm-6 col-md-2 col-lg-2 mb-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](102, 0, null, null, 22, "div", [
                    ["class", "dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](103, 0, null, null, 1, "button", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "btn btn-secondary dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Dropdown "])), (l()(), e["\u0275eld"](105, 0, null, null, 19, "ul", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](106, 0, null, null, 1, "li", [
                    ["class", "dropdown-header dropdown-item dropdown-heading-bg"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Default With heading"])), (l()(), e["\u0275eld"](108, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](109, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Action"])), (l()(), e["\u0275eld"](111, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](112, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another action"])), (l()(), e["\u0275eld"](114, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](115, 0, null, null, 1, "a", [
                    ["class", "active"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Something else here"])), (l()(), e["\u0275eld"](117, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](118, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Separated link"])), (l()(), e["\u0275eld"](120, 0, null, null, 1, "li", [
                    ["class", "dropdown-header dropdown-heading-bg dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Second Header"])), (l()(), e["\u0275eld"](122, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](123, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another link"])), (l()(), e["\u0275eld"](125, 0, null, null, 97, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](126, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](127, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](128, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](129, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Color Options"])), (l()(), e["\u0275eld"](131, 0, null, null, 91, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](132, 0, null, null, 90, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](133, 0, null, null, 17, "div", [
                    ["class", "col-sm-12 col-md-2 col-lg-2 mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](134, 0, null, null, 16, "div", [
                    ["class", "dropdown primary-dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](135, 0, null, null, 2, "button", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "btn btn-primary dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Dropdown "])), (l()(), e["\u0275eld"](137, 0, null, null, 0, "span", [
                    ["class", "caret"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](138, 0, null, null, 12, "ul", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](139, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](140, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Action"])), (l()(), e["\u0275eld"](142, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](143, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another action"])), (l()(), e["\u0275eld"](145, 0, null, null, 2, "li", [
                    ["class", "dropdown-item active"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](146, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Something else here"])), (l()(), e["\u0275eld"](148, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](149, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Separated link"])), (l()(), e["\u0275eld"](151, 0, null, null, 17, "div", [
                    ["class", "col-sm-12 col-md-2 col-lg-2 mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](152, 0, null, null, 16, "div", [
                    ["class", "dropdown success-dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](153, 0, null, null, 2, "button", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "btn btn-success dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Dropdown "])), (l()(), e["\u0275eld"](155, 0, null, null, 0, "span", [
                    ["class", "caret"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](156, 0, null, null, 12, "ul", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](157, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](158, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Action"])), (l()(), e["\u0275eld"](160, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](161, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another action"])), (l()(), e["\u0275eld"](163, 0, null, null, 2, "li", [
                    ["class", "dropdown-item active"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](164, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Something else here"])), (l()(), e["\u0275eld"](166, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](167, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Separated link"])), (l()(), e["\u0275eld"](169, 0, null, null, 17, "div", [
                    ["class", "col-sm-12 col-md-2 col-lg-2 mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](170, 0, null, null, 16, "div", [
                    ["class", "dropdown danger-dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](171, 0, null, null, 2, "button", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "btn btn-danger dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Dropdown "])), (l()(), e["\u0275eld"](173, 0, null, null, 0, "span", [
                    ["class", "caret"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](174, 0, null, null, 12, "ul", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](175, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](176, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Action"])), (l()(), e["\u0275eld"](178, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](179, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another action"])), (l()(), e["\u0275eld"](181, 0, null, null, 2, "li", [
                    ["class", "dropdown-item active"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](182, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Something else here"])), (l()(), e["\u0275eld"](184, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](185, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Separated link"])), (l()(), e["\u0275eld"](187, 0, null, null, 17, "div", [
                    ["class", "col-sm-12 col-md-2 col-lg-2 mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](188, 0, null, null, 16, "div", [
                    ["class", "dropdown warning-dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](189, 0, null, null, 2, "button", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "btn btn-warning dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Dropdown "])), (l()(), e["\u0275eld"](191, 0, null, null, 0, "span", [
                    ["class", "caret"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](192, 0, null, null, 12, "ul", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](193, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](194, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Action"])), (l()(), e["\u0275eld"](196, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](197, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another action"])), (l()(), e["\u0275eld"](199, 0, null, null, 2, "li", [
                    ["class", "dropdown-item active"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](200, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Something else here"])), (l()(), e["\u0275eld"](202, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](203, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Separated link"])), (l()(), e["\u0275eld"](205, 0, null, null, 17, "div", [
                    ["class", "col-sm-12 col-md-2 col-lg-2 mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](206, 0, null, null, 16, "div", [
                    ["class", "dropdown info-dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](207, 0, null, null, 2, "button", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "btn btn-info dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Dropdown "])), (l()(), e["\u0275eld"](209, 0, null, null, 0, "span", [
                    ["class", "caret"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](210, 0, null, null, 12, "ul", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](211, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](212, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Action"])), (l()(), e["\u0275eld"](214, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](215, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another action"])), (l()(), e["\u0275eld"](217, 0, null, null, 2, "li", [
                    ["class", "dropdown-item active"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](218, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Something else here"])), (l()(), e["\u0275eld"](220, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](221, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Separated link"])), (l()(), e["\u0275eld"](223, 0, null, null, 580, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](224, 0, null, null, 448, "div", [
                    ["class", "col-sm-12 col-md-12 col-lg-12"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](225, 0, null, null, 447, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](226, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](227, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](228, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](229, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dropdown Button Design"])), (l()(), e["\u0275eld"](231, 0, null, null, 441, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](232, 0, null, null, 123, "div", [
                    ["class", "mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](233, 0, null, null, 1, "span", [
                    ["class", "ui-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Button with dark dropdown arrow"])), (l()(), e["\u0275eld"](235, 0, null, null, 120, "ul", [
                    ["class", "list-inline dropdown-listing"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](236, 0, null, null, 19, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](237, 0, null, null, 18, "div", [
                    ["class", "btn-group dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](238, 0, null, null, 1, "button", [
                    ["class", "btn btn-primary"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dropdown"])), (l()(), e["\u0275eld"](240, 0, null, null, 1, "button", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "btn btn-primary dropdown-toggle btn-label-primary"],
                    ["data-toggle", "dropdown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](241, 0, null, null, 0, "span", [
                    ["class", "caret"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](242, 0, null, null, 13, "ul", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](243, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](244, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Action"])), (l()(), e["\u0275eld"](246, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](247, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another action"])), (l()(), e["\u0275eld"](249, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](250, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Something else here"])), (l()(), e["\u0275eld"](252, 0, null, null, 0, "li", [
                    ["class", "dropdown-divider"],
                    ["role", "separator"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](253, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](254, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Separated link"])), (l()(), e["\u0275eld"](256, 0, null, null, 19, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](257, 0, null, null, 18, "div", [
                    ["class", "btn-group dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](258, 0, null, null, 1, "button", [
                    ["class", "btn btn-success"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dropdown"])), (l()(), e["\u0275eld"](260, 0, null, null, 1, "button", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "btn btn-success dropdown-toggle btn-label-success"],
                    ["data-toggle", "dropdown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](261, 0, null, null, 0, "span", [
                    ["class", "caret"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](262, 0, null, null, 13, "ul", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](263, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](264, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Action"])), (l()(), e["\u0275eld"](266, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](267, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another action"])), (l()(), e["\u0275eld"](269, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](270, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Something else here"])), (l()(), e["\u0275eld"](272, 0, null, null, 0, "li", [
                    ["class", "dropdown-divider"],
                    ["role", "separator"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](273, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](274, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Separated link"])), (l()(), e["\u0275eld"](276, 0, null, null, 19, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](277, 0, null, null, 18, "div", [
                    ["class", "btn-group  dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](278, 0, null, null, 1, "button", [
                    ["class", "btn btn-warning"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dropdown"])), (l()(), e["\u0275eld"](280, 0, null, null, 1, "button", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "btn btn-warning dropdown-toggle btn-label-warning"],
                    ["data-toggle", "dropdown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](281, 0, null, null, 0, "span", [
                    ["class", "caret"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](282, 0, null, null, 13, "ul", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](283, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](284, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Action"])), (l()(), e["\u0275eld"](286, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](287, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another action"])), (l()(), e["\u0275eld"](289, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](290, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Something else here"])), (l()(), e["\u0275eld"](292, 0, null, null, 0, "li", [
                    ["class", "dropdown-divider"],
                    ["role", "separator"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](293, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](294, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Separated link"])), (l()(), e["\u0275eld"](296, 0, null, null, 19, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](297, 0, null, null, 18, "div", [
                    ["class", "btn-group  dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](298, 0, null, null, 1, "button", [
                    ["class", "btn btn-info"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dropdown"])), (l()(), e["\u0275eld"](300, 0, null, null, 1, "button", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "btn btn-info dropdown-toggle btn-label-info"],
                    ["data-toggle", "dropdown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](301, 0, null, null, 0, "span", [
                    ["class", "caret"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](302, 0, null, null, 13, "ul", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](303, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](304, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Action"])), (l()(), e["\u0275eld"](306, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](307, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another action"])), (l()(), e["\u0275eld"](309, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](310, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Something else here"])), (l()(), e["\u0275eld"](312, 0, null, null, 0, "li", [
                    ["class", "dropdown-divider"],
                    ["role", "separator"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](313, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](314, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Separated link"])), (l()(), e["\u0275eld"](316, 0, null, null, 19, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](317, 0, null, null, 18, "div", [
                    ["class", "btn-group dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](318, 0, null, null, 1, "button", [
                    ["class", "btn btn-danger"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dropdown"])), (l()(), e["\u0275eld"](320, 0, null, null, 1, "button", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "btn btn-danger dropdown-toggle btn-label-danger"],
                    ["data-toggle", "dropdown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](321, 0, null, null, 0, "span", [
                    ["class", "caret"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](322, 0, null, null, 13, "ul", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](323, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](324, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Action"])), (l()(), e["\u0275eld"](326, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](327, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another action"])), (l()(), e["\u0275eld"](329, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](330, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Something else here"])), (l()(), e["\u0275eld"](332, 0, null, null, 0, "li", [
                    ["class", "dropdown-divider"],
                    ["role", "separator"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](333, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](334, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Separated link"])), (l()(), e["\u0275eld"](336, 0, null, null, 19, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](337, 0, null, null, 18, "div", [
                    ["class", "btn-group dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](338, 0, null, null, 1, "button", [
                    ["class", "btn btn-secondary"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dropdown"])), (l()(), e["\u0275eld"](340, 0, null, null, 1, "button", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "btn btn-secondary dropdown-toggle btn-label-secondary"],
                    ["data-toggle", "dropdown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](341, 0, null, null, 0, "span", [
                    ["class", "caret"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](342, 0, null, null, 13, "ul", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](343, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](344, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Action"])), (l()(), e["\u0275eld"](346, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](347, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another action"])), (l()(), e["\u0275eld"](349, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](350, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Something else here"])), (l()(), e["\u0275eld"](352, 0, null, null, 0, "li", [
                    ["class", "dropdown-divider"],
                    ["role", "separator"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](353, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](354, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Separated link"])), (l()(), e["\u0275eld"](356, 0, null, null, 123, "div", [
                    ["class", "mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](357, 0, null, null, 1, "span", [
                    ["class", "ui-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Button with split dropdown arrow"])), (l()(), e["\u0275eld"](359, 0, null, null, 120, "ul", [
                    ["class", "list-inline dropdown-listing"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](360, 0, null, null, 19, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](361, 0, null, null, 18, "div", [
                    ["class", "btn-group dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](362, 0, null, null, 1, "button", [
                    ["class", "btn btn-primary"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dropdown"])), (l()(), e["\u0275eld"](364, 0, null, null, 1, "button", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "btn btn-primary dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](365, 0, null, null, 0, "span", [
                    ["class", "caret"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](366, 0, null, null, 13, "ul", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](367, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](368, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Action"])), (l()(), e["\u0275eld"](370, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](371, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another action"])), (l()(), e["\u0275eld"](373, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](374, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Something else here"])), (l()(), e["\u0275eld"](376, 0, null, null, 0, "li", [
                    ["class", "dropdown-divider"],
                    ["role", "separator"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](377, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](378, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Separated link"])), (l()(), e["\u0275eld"](380, 0, null, null, 19, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](381, 0, null, null, 18, "div", [
                    ["class", "btn-group dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](382, 0, null, null, 1, "button", [
                    ["class", "btn btn-success"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dropdown"])), (l()(), e["\u0275eld"](384, 0, null, null, 1, "button", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "btn btn-success dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](385, 0, null, null, 0, "span", [
                    ["class", "caret"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](386, 0, null, null, 13, "ul", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](387, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](388, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Action"])), (l()(), e["\u0275eld"](390, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](391, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another action"])), (l()(), e["\u0275eld"](393, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](394, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Something else here"])), (l()(), e["\u0275eld"](396, 0, null, null, 0, "li", [
                    ["class", "dropdown-divider"],
                    ["role", "separator"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](397, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](398, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Separated link"])), (l()(), e["\u0275eld"](400, 0, null, null, 19, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](401, 0, null, null, 18, "div", [
                    ["class", "btn-group dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](402, 0, null, null, 1, "button", [
                    ["class", "btn btn-warning"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dropdown"])), (l()(), e["\u0275eld"](404, 0, null, null, 1, "button", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "btn btn-warning dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](405, 0, null, null, 0, "span", [
                    ["class", "caret"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](406, 0, null, null, 13, "ul", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](407, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](408, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Action"])), (l()(), e["\u0275eld"](410, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](411, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another action"])), (l()(), e["\u0275eld"](413, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](414, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Something else here"])), (l()(), e["\u0275eld"](416, 0, null, null, 0, "li", [
                    ["class", "dropdown-divider"],
                    ["role", "separator"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](417, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](418, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Separated link"])), (l()(), e["\u0275eld"](420, 0, null, null, 19, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](421, 0, null, null, 18, "div", [
                    ["class", "btn-group dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](422, 0, null, null, 1, "button", [
                    ["class", "btn btn-info"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dropdown"])), (l()(), e["\u0275eld"](424, 0, null, null, 1, "button", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "btn btn-info dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](425, 0, null, null, 0, "span", [
                    ["class", "caret"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](426, 0, null, null, 13, "ul", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](427, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](428, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Action"])), (l()(), e["\u0275eld"](430, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](431, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another action"])), (l()(), e["\u0275eld"](433, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](434, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Something else here"])), (l()(), e["\u0275eld"](436, 0, null, null, 0, "li", [
                    ["class", "dropdown-divider"],
                    ["role", "separator"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](437, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](438, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Separated link"])), (l()(), e["\u0275eld"](440, 0, null, null, 19, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](441, 0, null, null, 18, "div", [
                    ["class", "btn-group dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](442, 0, null, null, 1, "button", [
                    ["class", "btn btn-danger"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dropdown"])), (l()(), e["\u0275eld"](444, 0, null, null, 1, "button", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "btn btn-danger dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](445, 0, null, null, 0, "span", [
                    ["class", "caret"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](446, 0, null, null, 13, "ul", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](447, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](448, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Action"])), (l()(), e["\u0275eld"](450, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](451, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another action"])), (l()(), e["\u0275eld"](453, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](454, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Something else here"])), (l()(), e["\u0275eld"](456, 0, null, null, 0, "li", [
                    ["class", "dropdown-divider"],
                    ["role", "separator"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](457, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](458, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Separated link"])), (l()(), e["\u0275eld"](460, 0, null, null, 19, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](461, 0, null, null, 18, "div", [
                    ["class", "btn-group dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](462, 0, null, null, 1, "button", [
                    ["class", "btn btn-secondary"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Dropdown"])), (l()(), e["\u0275eld"](464, 0, null, null, 1, "button", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "btn btn-secondary dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](465, 0, null, null, 0, "span", [
                    ["class", "caret"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](466, 0, null, null, 13, "ul", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](467, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](468, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Action"])), (l()(), e["\u0275eld"](470, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](471, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another action"])), (l()(), e["\u0275eld"](473, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](474, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Something else here"])), (l()(), e["\u0275eld"](476, 0, null, null, 0, "li", [
                    ["class", "dropdown-divider"],
                    ["role", "separator"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](477, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](478, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Separated link"])), (l()(), e["\u0275eld"](480, 0, null, null, 98, "div", [
                    ["class", "mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](481, 0, null, null, 1, "span", [
                    ["class", "ui-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Button With Icon Left side"])), (l()(), e["\u0275eld"](483, 0, null, null, 95, "ul", [
                    ["class", "list-inline dropdown-listing"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](484, 0, null, null, 18, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](485, 0, null, null, 17, "div", [
                    ["class", "dropdown primary-dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](486, 0, null, null, 3, "button", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "btn btn-primary dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](487, 0, null, null, 0, "i", [
                    ["class", "fa fa-home mrgn-r-xs"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Dropdown "])), (l()(), e["\u0275eld"](489, 0, null, null, 0, "span", [
                    ["class", "caret"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](490, 0, null, null, 12, "ul", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](491, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](492, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Action"])), (l()(), e["\u0275eld"](494, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](495, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another action"])), (l()(), e["\u0275eld"](497, 0, null, null, 2, "li", [
                    ["class", "dropdown-item active"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](498, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Something else here"])), (l()(), e["\u0275eld"](500, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](501, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Separated link"])), (l()(), e["\u0275eld"](503, 0, null, null, 18, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](504, 0, null, null, 17, "div", [
                    ["class", "dropdown warning-dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](505, 0, null, null, 3, "button", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "btn btn-warning dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](506, 0, null, null, 0, "i", [
                    ["class", "fa fa-sliders mrgn-r-xs"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Dropdown "])), (l()(), e["\u0275eld"](508, 0, null, null, 0, "span", [
                    ["class", "caret"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](509, 0, null, null, 12, "ul", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](510, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](511, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Action"])), (l()(), e["\u0275eld"](513, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](514, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another action"])), (l()(), e["\u0275eld"](516, 0, null, null, 2, "li", [
                    ["class", "dropdown-item active"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](517, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Something else here"])), (l()(), e["\u0275eld"](519, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](520, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Separated link"])), (l()(), e["\u0275eld"](522, 0, null, null, 18, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](523, 0, null, null, 17, "div", [
                    ["class", "dropdown danger-dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](524, 0, null, null, 3, "button", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "btn btn-danger dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](525, 0, null, null, 0, "i", [
                    ["class", "fa fa-edit mrgn-r-xs"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Dropdown "])), (l()(), e["\u0275eld"](527, 0, null, null, 0, "span", [
                    ["class", "caret"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](528, 0, null, null, 12, "ul", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](529, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](530, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Action"])), (l()(), e["\u0275eld"](532, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](533, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another action"])), (l()(), e["\u0275eld"](535, 0, null, null, 2, "li", [
                    ["class", "dropdown-item active"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](536, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Something else here"])), (l()(), e["\u0275eld"](538, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](539, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Separated link"])), (l()(), e["\u0275eld"](541, 0, null, null, 18, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](542, 0, null, null, 17, "div", [
                    ["class", "dropdown success-dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](543, 0, null, null, 3, "button", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "btn btn-success dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](544, 0, null, null, 0, "i", [
                    ["class", "fa fa-support mrgn-r-xs"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Dropdown "])), (l()(), e["\u0275eld"](546, 0, null, null, 0, "span", [
                    ["class", "caret"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](547, 0, null, null, 12, "ul", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](548, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](549, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Action"])), (l()(), e["\u0275eld"](551, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](552, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another action"])), (l()(), e["\u0275eld"](554, 0, null, null, 2, "li", [
                    ["class", "dropdown-item active"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](555, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Something else here"])), (l()(), e["\u0275eld"](557, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](558, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Separated link"])), (l()(), e["\u0275eld"](560, 0, null, null, 18, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](561, 0, null, null, 17, "div", [
                    ["class", "dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](562, 0, null, null, 3, "button", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "btn btn-secondary dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](563, 0, null, null, 0, "i", [
                    ["class", "fa fa-support mrgn-r-xs"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Dropdown "])), (l()(), e["\u0275eld"](565, 0, null, null, 0, "span", [
                    ["class", "caret"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](566, 0, null, null, 12, "ul", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](567, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](568, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Action"])), (l()(), e["\u0275eld"](570, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](571, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another action"])), (l()(), e["\u0275eld"](573, 0, null, null, 2, "li", [
                    ["class", "dropdown-item active"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](574, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Something else here"])), (l()(), e["\u0275eld"](576, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](577, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Separated link"])), (l()(), e["\u0275eld"](579, 0, null, null, 93, "div", [
                    ["class", "mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](580, 0, null, null, 1, "span", [
                    ["class", "ui-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Only Icon Dropdown"])), (l()(), e["\u0275eld"](582, 0, null, null, 90, "ul", [
                    ["class", "list-inline dropdown-listing"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](583, 0, null, null, 17, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](584, 0, null, null, 16, "div", [
                    ["class", "dropdown primary-dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](585, 0, null, null, 2, "button", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "btn btn-primary dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](586, 0, null, null, 0, "i", [
                    ["class", "fa fa-home mr-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](587, 0, null, null, 0, "span", [
                    ["class", "caret"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](588, 0, null, null, 12, "ul", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](589, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](590, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Action"])), (l()(), e["\u0275eld"](592, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](593, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another action"])), (l()(), e["\u0275eld"](595, 0, null, null, 2, "li", [
                    ["class", "dropdown-item active"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](596, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Something else here"])), (l()(), e["\u0275eld"](598, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](599, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Separated link"])), (l()(), e["\u0275eld"](601, 0, null, null, 17, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](602, 0, null, null, 16, "div", [
                    ["class", "dropdown warning-dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](603, 0, null, null, 2, "button", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "btn btn-warning dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](604, 0, null, null, 0, "i", [
                    ["class", "fa fa-sliders mr-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](605, 0, null, null, 0, "span", [
                    ["class", "caret"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](606, 0, null, null, 12, "ul", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](607, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](608, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Action"])), (l()(), e["\u0275eld"](610, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](611, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another action"])), (l()(), e["\u0275eld"](613, 0, null, null, 2, "li", [
                    ["class", "dropdown-item active"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](614, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Something else here"])), (l()(), e["\u0275eld"](616, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](617, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Separated link"])), (l()(), e["\u0275eld"](619, 0, null, null, 17, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](620, 0, null, null, 16, "div", [
                    ["class", "dropdown danger-dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](621, 0, null, null, 2, "button", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "btn btn-danger dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](622, 0, null, null, 0, "i", [
                    ["class", "fa fa-edit mr-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](623, 0, null, null, 0, "span", [
                    ["class", "caret"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](624, 0, null, null, 12, "ul", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](625, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](626, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Action"])), (l()(), e["\u0275eld"](628, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](629, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another action"])), (l()(), e["\u0275eld"](631, 0, null, null, 2, "li", [
                    ["class", "dropdown-item active"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](632, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Something else here"])), (l()(), e["\u0275eld"](634, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](635, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Separated link"])), (l()(), e["\u0275eld"](637, 0, null, null, 17, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](638, 0, null, null, 16, "div", [
                    ["class", "dropdown success-dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](639, 0, null, null, 2, "button", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "btn btn-success dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](640, 0, null, null, 0, "i", [
                    ["class", "fa fa-support mr-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](641, 0, null, null, 0, "span", [
                    ["class", "caret"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](642, 0, null, null, 12, "ul", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](643, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](644, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Action"])), (l()(), e["\u0275eld"](646, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](647, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another action"])), (l()(), e["\u0275eld"](649, 0, null, null, 2, "li", [
                    ["class", "dropdown-item active"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](650, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Something else here"])), (l()(), e["\u0275eld"](652, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](653, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Separated link"])), (l()(), e["\u0275eld"](655, 0, null, null, 17, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](656, 0, null, null, 16, "div", [
                    ["class", "dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](657, 0, null, null, 2, "button", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "btn btn-secondary dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](658, 0, null, null, 0, "i", [
                    ["class", "fa fa-support mr-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](659, 0, null, null, 0, "span", [
                    ["class", "caret"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](660, 0, null, null, 12, "ul", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](661, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](662, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Action"])), (l()(), e["\u0275eld"](664, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](665, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another action"])), (l()(), e["\u0275eld"](667, 0, null, null, 2, "li", [
                    ["class", "dropdown-item active"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](668, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Something else here"])), (l()(), e["\u0275eld"](670, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](671, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Separated link"])), (l()(), e["\u0275eld"](673, 0, null, null, 130, "div", [
                    ["class", "col-sm-12 col-md-12 col-lg-12"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](674, 0, null, null, 129, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](675, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](676, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](677, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](678, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Sizing"])), (l()(), e["\u0275eld"](680, 0, null, null, 123, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](681, 0, null, null, 1, "p", [
                    ["class", "text-muted small mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Button dropdowns work with buttons of all sizes."])), (l()(), e["\u0275eld"](683, 0, null, null, 120, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](684, 0, null, null, 59, "div", [
                    ["class", "col-xs-12 col-sm-6 col-md-6 col-lg-6"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](685, 0, null, null, 58, "div", [
                    ["class", "btn-style"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](686, 0, null, null, 57, "ul", [
                    ["class", "list-unstyled"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](687, 0, null, null, 18, "li", [
                    ["class", "list-inline-item mb-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](688, 0, null, null, 17, "div", [
                    ["class", "dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](689, 0, null, null, 2, "button", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "btn btn-primary btn-lg dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" dropdown button "])), (l()(), e["\u0275eld"](691, 0, null, null, 0, "span", [
                    ["class", "caret"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](692, 0, null, null, 13, "ul", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](693, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](694, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Action"])), (l()(), e["\u0275eld"](696, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](697, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another action"])), (l()(), e["\u0275eld"](699, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](700, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Something else here"])), (l()(), e["\u0275eld"](702, 0, null, null, 0, "li", [
                    ["class", "dropdown-divider"],
                    ["role", "separator"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](703, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](704, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Separated link"])), (l()(), e["\u0275eld"](706, 0, null, null, 18, "li", [
                    ["class", "list-inline-item mb-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](707, 0, null, null, 17, "div", [
                    ["class", "dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](708, 0, null, null, 2, "button", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "btn btn-primary dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" dropdown button "])), (l()(), e["\u0275eld"](710, 0, null, null, 0, "span", [
                    ["class", "caret"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](711, 0, null, null, 13, "ul", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](712, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](713, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Action"])), (l()(), e["\u0275eld"](715, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](716, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another action"])), (l()(), e["\u0275eld"](718, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](719, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Something else here"])), (l()(), e["\u0275eld"](721, 0, null, null, 0, "li", [
                    ["class", "dropdown-divider"],
                    ["role", "separator"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](722, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](723, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Separated link"])), (l()(), e["\u0275eld"](725, 0, null, null, 18, "li", [
                    ["class", "list-inline-item mb-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](726, 0, null, null, 17, "div", [
                    ["class", "dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](727, 0, null, null, 2, "button", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "btn btn-primary btn-sm dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" dropdown button "])), (l()(), e["\u0275eld"](729, 0, null, null, 0, "span", [
                    ["class", "caret"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](730, 0, null, null, 13, "ul", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](731, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](732, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Action"])), (l()(), e["\u0275eld"](734, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](735, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another action"])), (l()(), e["\u0275eld"](737, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](738, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Something else here"])), (l()(), e["\u0275eld"](740, 0, null, null, 0, "li", [
                    ["class", "dropdown-divider"],
                    ["role", "separator"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](741, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](742, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Separated link"])), (l()(), e["\u0275eld"](744, 0, null, null, 59, "div", [
                    ["class", "col-xs-12 col-sm-6 col-md-6 col-lg-6"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](745, 0, null, null, 58, "div", [
                    ["class", "btn-style"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](746, 0, null, null, 57, "ul", [
                    ["class", "list-unstyled"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](747, 0, null, null, 18, "li", [
                    ["class", "list-inline-item mb-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](748, 0, null, null, 17, "div", [
                    ["class", "dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](749, 0, null, null, 2, "button", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "btn btn-secondary btn-lg dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" dropdown button "])), (l()(), e["\u0275eld"](751, 0, null, null, 0, "span", [
                    ["class", "caret"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](752, 0, null, null, 13, "ul", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](753, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](754, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Action"])), (l()(), e["\u0275eld"](756, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](757, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another action"])), (l()(), e["\u0275eld"](759, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](760, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Something else here"])), (l()(), e["\u0275eld"](762, 0, null, null, 0, "li", [
                    ["class", "dropdown-divider"],
                    ["role", "separator"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](763, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](764, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Separated link"])), (l()(), e["\u0275eld"](766, 0, null, null, 18, "li", [
                    ["class", "list-inline-item mb-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](767, 0, null, null, 17, "div", [
                    ["class", "dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](768, 0, null, null, 2, "button", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "btn btn-secondary dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" dropdown button "])), (l()(), e["\u0275eld"](770, 0, null, null, 0, "span", [
                    ["class", "caret"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](771, 0, null, null, 13, "ul", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](772, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](773, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Action"])), (l()(), e["\u0275eld"](775, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](776, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another action"])), (l()(), e["\u0275eld"](778, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](779, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Something else here"])), (l()(), e["\u0275eld"](781, 0, null, null, 0, "li", [
                    ["class", "dropdown-divider"],
                    ["role", "separator"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](782, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](783, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Separated link"])), (l()(), e["\u0275eld"](785, 0, null, null, 18, "li", [
                    ["class", "list-inline-item mb-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](786, 0, null, null, 17, "div", [
                    ["class", "dropdown"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](787, 0, null, null, 2, "button", [
                    ["aria-expanded", "false"],
                    ["aria-haspopup", "true"],
                    ["class", "btn btn-secondary btn-sm dropdown-toggle"],
                    ["data-toggle", "dropdown"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" dropdown button "])), (l()(), e["\u0275eld"](789, 0, null, null, 0, "span", [
                    ["class", "caret"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](790, 0, null, null, 13, "ul", [
                    ["class", "dropdown-menu"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](791, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](792, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Action"])), (l()(), e["\u0275eld"](794, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](795, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Another action"])), (l()(), e["\u0275eld"](797, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](798, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Something else here"])), (l()(), e["\u0275eld"](800, 0, null, null, 0, "li", [
                    ["class", "dropdown-divider"],
                    ["role", "separator"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](801, 0, null, null, 2, "li", [
                    ["class", "dropdown-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](802, 0, null, null, 1, "a", [
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Separated link"]))], null, null)
            }
            var wl = e["\u0275ccf"]("ms-dropdown", vl, function(l) {
                    return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 1, "ms-dropdown", [], [
                        [40, "@fadeInAnimation", 0]
                    ], null, null, Al, fl)), e["\u0275did"](1, 114688, null, 0, vl, [j.a], null, null)], function(l, n) {
                        l(n, 1, 0)
                    }, function(l, n) {
                        l(n, 0, 0, !0)
                    })
                }, {}, {}, []),
                yl = function() {
                    function l(l) {
                        this.pageTitleService = l
                    }
                    return l.prototype.ngOnInit = function() {
                        this.pageTitleService.setTitle("Alert")
                    }, l
                }(),
                kl = e["\u0275crt"]({
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

            function xl(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 132, "div", [
                    ["class", "alerts-wrapper"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 95, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](2, 0, null, null, 41, "div", [
                    ["class", "col-lg-12 col-xl-6"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](3, 0, null, null, 40, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](4, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](5, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](6, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](7, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Link color"])), (l()(), e["\u0275eld"](9, 0, null, null, 34, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](10, 0, null, null, 6, "div", [
                    ["class", "alert alert-primary"],
                    ["role", "alert"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](11, 0, null, null, 1, "strong", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Well done!"])), (l()(), e["\u0275ted"](-1, null, [" You successfully read "])), (l()(), e["\u0275eld"](14, 0, null, null, 1, "a", [
                    ["class", "alert-link"],
                    ["href", "#"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["this important alert message"])), (l()(), e["\u0275ted"](-1, null, [". "])), (l()(), e["\u0275eld"](17, 0, null, null, 6, "div", [
                    ["class", "alert alert-success"],
                    ["role", "alert"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](18, 0, null, null, 1, "strong", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Well done!"])), (l()(), e["\u0275ted"](-1, null, [" You successfully read "])), (l()(), e["\u0275eld"](21, 0, null, null, 1, "a", [
                    ["class", "alert-link"],
                    ["href", "#"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["this important alert message"])), (l()(), e["\u0275ted"](-1, null, [". "])), (l()(), e["\u0275eld"](24, 0, null, null, 6, "div", [
                    ["class", "alert alert-info"],
                    ["role", "alert"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](25, 0, null, null, 1, "strong", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Heads up!"])), (l()(), e["\u0275ted"](-1, null, [" This "])), (l()(), e["\u0275eld"](28, 0, null, null, 1, "a", [
                    ["class", "alert-link"],
                    ["href", "#"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["alert needs your attention"])), (l()(), e["\u0275ted"](-1, null, [", but it's not super important. "])), (l()(), e["\u0275eld"](31, 0, null, null, 6, "div", [
                    ["class", "alert alert-warning"],
                    ["role", "alert"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](32, 0, null, null, 1, "strong", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Warning!"])), (l()(), e["\u0275ted"](-1, null, [" Better check yourself, you're "])), (l()(), e["\u0275eld"](35, 0, null, null, 1, "a", [
                    ["class", "alert-link"],
                    ["href", "#"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["not looking too good"])), (l()(), e["\u0275ted"](-1, null, [". "])), (l()(), e["\u0275eld"](38, 0, null, null, 5, "div", [
                    ["class", "alert alert-danger"],
                    ["role", "alert"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](39, 0, null, null, 1, "strong", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Oh snap!"])), (l()(), e["\u0275eld"](41, 0, null, null, 1, "a", [
                    ["class", "alert-link"],
                    ["href", "#"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Change a few things up"])), (l()(), e["\u0275ted"](-1, null, [" and try submitting again. "])), (l()(), e["\u0275eld"](44, 0, null, null, 52, "div", [
                    ["class", "col-lg-12 col-xl-6"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](45, 0, null, null, 51, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](46, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](47, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](48, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](49, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Normal Alerts with dismiss"])), (l()(), e["\u0275eld"](51, 0, null, null, 45, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](52, 0, null, null, 8, "div", [
                    ["class", "alert bg-success alert-dismissible fade show"],
                    ["role", "alert"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](53, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275eld"](54, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-bell fa-lg mr-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](55, 0, null, null, 2, "button", [
                    ["aria-label", "Close"],
                    ["class", "close"],
                    ["data-dismiss", "alert"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](56, 0, null, null, 1, "span", [
                    ["aria-hidden", "true"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["\xd7"])), (l()(), e["\u0275eld"](58, 0, null, null, 1, "strong", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Holy guacamole!"])), (l()(), e["\u0275ted"](-1, null, [" You should check in on some of those fields below. "])), (l()(), e["\u0275eld"](61, 0, null, null, 8, "div", [
                    ["class", "alert bg-info alert-dismissible fade show"],
                    ["role", "alert"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](62, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275eld"](63, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-bell fa-lg mr-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](64, 0, null, null, 2, "button", [
                    ["aria-label", "Close"],
                    ["class", "close"],
                    ["data-dismiss", "alert"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](65, 0, null, null, 1, "span", [
                    ["aria-hidden", "true"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["\xd7"])), (l()(), e["\u0275eld"](67, 0, null, null, 1, "strong", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Holy guacamole!"])), (l()(), e["\u0275ted"](-1, null, [" You should check in on some of those fields below. "])), (l()(), e["\u0275eld"](70, 0, null, null, 8, "div", [
                    ["class", "alert bg-warning alert-dismissible fade show"],
                    ["role", "alert"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](71, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275eld"](72, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-bell fa-lg mr-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](73, 0, null, null, 2, "button", [
                    ["aria-label", "Close"],
                    ["class", "close"],
                    ["data-dismiss", "alert"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](74, 0, null, null, 1, "span", [
                    ["aria-hidden", "true"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["\xd7"])), (l()(), e["\u0275eld"](76, 0, null, null, 1, "strong", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Holy guacamole!"])), (l()(), e["\u0275ted"](-1, null, [" You should check in on some of those fields below. "])), (l()(), e["\u0275eld"](79, 0, null, null, 8, "div", [
                    ["class", "alert bg-danger alert-dismissible fade show"],
                    ["role", "alert"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](80, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275eld"](81, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-bell fa-lg mr-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](82, 0, null, null, 2, "button", [
                    ["aria-label", "Close"],
                    ["class", "close"],
                    ["data-dismiss", "alert"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](83, 0, null, null, 1, "span", [
                    ["aria-hidden", "true"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["\xd7"])), (l()(), e["\u0275eld"](85, 0, null, null, 1, "strong", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Holy guacamole!"])), (l()(), e["\u0275ted"](-1, null, [" You should check in on some of those fields below. "])), (l()(), e["\u0275eld"](88, 0, null, null, 8, "div", [
                    ["class", "alert bg-primary alert-dismissible fade show"],
                    ["role", "alert"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](89, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275eld"](90, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-bell fa-lg mr-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](91, 0, null, null, 2, "button", [
                    ["aria-label", "Close"],
                    ["class", "close"],
                    ["data-dismiss", "alert"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](92, 0, null, null, 1, "span", [
                    ["aria-hidden", "true"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["\xd7"])), (l()(), e["\u0275eld"](94, 0, null, null, 1, "strong", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Holy guacamole!"])), (l()(), e["\u0275ted"](-1, null, [" You should check in on some of those fields below. "])), (l()(), e["\u0275eld"](97, 0, null, null, 35, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](98, 0, null, null, 34, "div", [
                    ["class", "col-sm-12 col-md-12 col-lg-12"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](99, 0, null, null, 33, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](100, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](101, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](102, 0, null, null, 2, "div", [
                    ["class", "d-flex align-self-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](103, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Responsive Full width Alerts"])), (l()(), e["\u0275eld"](105, 0, null, null, 27, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](106, 0, null, null, 6, "div", [
                    ["class", "alert alert-success"],
                    ["role", "alert"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](107, 0, null, null, 1, "strong", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Well done!"])), (l()(), e["\u0275ted"](-1, null, [" You successfully read "])), (l()(), e["\u0275eld"](110, 0, null, null, 1, "a", [
                    ["class", "alert-link"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["this important alert message"])), (l()(), e["\u0275ted"](-1, null, [". "])), (l()(), e["\u0275eld"](113, 0, null, null, 6, "div", [
                    ["class", "alert alert-info"],
                    ["role", "alert"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](114, 0, null, null, 1, "strong", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Heads up!"])), (l()(), e["\u0275ted"](-1, null, [" This "])), (l()(), e["\u0275eld"](117, 0, null, null, 1, "a", [
                    ["class", "alert-link"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["alert needs your attention"])), (l()(), e["\u0275ted"](-1, null, [", but it's not super important. "])), (l()(), e["\u0275eld"](120, 0, null, null, 6, "div", [
                    ["class", "alert alert-warning"],
                    ["role", "alert"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](121, 0, null, null, 1, "strong", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Warning!"])), (l()(), e["\u0275ted"](-1, null, [" Better check yourself, you're "])), (l()(), e["\u0275eld"](124, 0, null, null, 1, "a", [
                    ["class", "alert-link"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["not looking too good"])), (l()(), e["\u0275ted"](-1, null, [". "])), (l()(), e["\u0275eld"](127, 0, null, null, 5, "div", [
                    ["class", "alert alert-danger"],
                    ["role", "alert"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](128, 0, null, null, 1, "strong", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Oh snap!"])), (l()(), e["\u0275eld"](130, 0, null, null, 1, "a", [
                    ["class", "alert-link"],
                    ["href", "javascript:;"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Change a few things up"])), (l()(), e["\u0275ted"](-1, null, [" and try submitting again. "]))], null, null)
            }
            var Cl = e["\u0275ccf"]("ms-alert", yl, function(l) {
                    return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 1, "ms-alert", [], [
                        [40, "@fadeInAnimation", 0]
                    ], null, null, xl, kl)), e["\u0275did"](1, 114688, null, 0, yl, [j.a], null, null)], function(l, n) {
                        l(n, 1, 0)
                    }, function(l, n) {
                        l(n, 0, 0, !0)
                    })
                }, {}, {}, []),
                Dl = function() {
                    function l(l) {
                        this.pageTitleService = l
                    }
                    return l.prototype.ngOnInit = function() {
                        this.pageTitleService.setTitle("Carousel")
                    }, l
                }(),
                Bl = e["\u0275crt"]({
                    encapsulation: 2,
                    styles: [
                        [".carousel-item img{height:100%}"]
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

            function Sl(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 99, "div", [
                    ["class", " carousel-wrapper"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 12, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](2, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](3, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Slides only"])), (l()(), e["\u0275eld"](5, 0, null, null, 8, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](6, 0, null, null, 7, "div", [
                    ["class", "carousel slide"],
                    ["data-ride", "carousel"],
                    ["id", "carouselExampleSlidesOnly"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](7, 0, null, null, 6, "div", [
                    ["class", "carousel-inner"],
                    ["role", "listbox"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](8, 0, null, null, 1, "div", [
                    ["class", "carousel-item active"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](9, 0, null, null, 0, "img", [
                    ["alt", "First slide"],
                    ["class", "w-100 img-fluid"],
                    ["height", "833"],
                    ["src", "assets/img/carousel-slider-1.jpg"],
                    ["width", "1920"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](10, 0, null, null, 1, "div", [
                    ["class", "carousel-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](11, 0, null, null, 0, "img", [
                    ["alt", "Second slide"],
                    ["class", "w-100 img-fluid"],
                    ["height", "833"],
                    ["src", "assets/img/carousel-slider-2.jpg"],
                    ["width", "1920"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](12, 0, null, null, 1, "div", [
                    ["class", "carousel-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](13, 0, null, null, 0, "img", [
                    ["alt", "Third slide"],
                    ["class", "w-100 img-fluid"],
                    ["height", "833"],
                    ["src", "assets/img/carousel-slider-3.jpg"],
                    ["width", "1920"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](14, 0, null, null, 20, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](15, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](16, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["With controls"])), (l()(), e["\u0275eld"](18, 0, null, null, 16, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](19, 0, null, null, 15, "div", [
                    ["class", "carousel slide"],
                    ["data-ride", "carousel"],
                    ["id", "carouselExampleControls"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](20, 0, null, null, 6, "div", [
                    ["class", "carousel-inner"],
                    ["role", "listbox"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](21, 0, null, null, 1, "div", [
                    ["class", "carousel-item active"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](22, 0, null, null, 0, "img", [
                    ["alt", "First slide"],
                    ["class", "img-fluid w-100"],
                    ["height", "833"],
                    ["src", "assets/img/carousel-slider-2.jpg"],
                    ["width", "1920"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](23, 0, null, null, 1, "div", [
                    ["class", "carousel-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](24, 0, null, null, 0, "img", [
                    ["alt", "Second slide"],
                    ["class", "img-fluid w-100"],
                    ["height", "833"],
                    ["src", "assets/img/carousel-slider-3.jpg"],
                    ["width", "1920"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](25, 0, null, null, 1, "div", [
                    ["class", "carousel-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](26, 0, null, null, 0, "img", [
                    ["alt", "Third slide"],
                    ["class", "img-fluid w-100"],
                    ["height", "833"],
                    ["src", "assets/img/carousel-slider-1.jpg"],
                    ["width", "1920"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](27, 0, null, null, 3, "a", [
                    ["class", "carousel-control-prev"],
                    ["data-slide", "prev"],
                    ["href", "#carouselExampleControls"],
                    ["role", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](28, 0, null, null, 0, "span", [
                    ["aria-hidden", "true"],
                    ["class", "carousel-control-prev-icon"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](29, 0, null, null, 1, "span", [
                    ["class", "sr-only"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Previous"])), (l()(), e["\u0275eld"](31, 0, null, null, 3, "a", [
                    ["class", "carousel-control-next"],
                    ["data-slide", "next"],
                    ["href", "#carouselExampleControls"],
                    ["role", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](32, 0, null, null, 0, "span", [
                    ["aria-hidden", "true"],
                    ["class", "carousel-control-next-icon"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](33, 0, null, null, 1, "span", [
                    ["class", "sr-only"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Next"])), (l()(), e["\u0275eld"](35, 0, null, null, 24, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](36, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](37, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["With indicators"])), (l()(), e["\u0275eld"](39, 0, null, null, 20, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](40, 0, null, null, 19, "div", [
                    ["class", "carousel slide"],
                    ["data-ride", "carousel"],
                    ["id", "carouselExampleIndicators"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](41, 0, null, null, 3, "ol", [
                    ["class", "carousel-indicators"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](42, 0, null, null, 0, "li", [
                    ["class", "active"],
                    ["data-slide-to", "0"],
                    ["data-target", "#carouselExampleIndicators"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](43, 0, null, null, 0, "li", [
                    ["data-slide-to", "1"],
                    ["data-target", "#carouselExampleIndicators"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](44, 0, null, null, 0, "li", [
                    ["data-slide-to", "2"],
                    ["data-target", "#carouselExampleIndicators"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](45, 0, null, null, 6, "div", [
                    ["class", "carousel-inner"],
                    ["role", "listbox"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](46, 0, null, null, 1, "div", [
                    ["class", "carousel-item active"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](47, 0, null, null, 0, "img", [
                    ["alt", "First slide"],
                    ["class", "w-100 img-fluid"],
                    ["height", "833"],
                    ["src", "assets/img/carousel-slider-3.jpg"],
                    ["width", "1920"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](48, 0, null, null, 1, "div", [
                    ["class", "carousel-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](49, 0, null, null, 0, "img", [
                    ["alt", "second slide"],
                    ["class", "w-100 img-fluid"],
                    ["height", "833"],
                    ["src", "assets/img/carousel-slider-1.jpg"],
                    ["width", "1920"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](50, 0, null, null, 1, "div", [
                    ["class", "carousel-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](51, 0, null, null, 0, "img", [
                    ["alt", "Third slide"],
                    ["class", "w-100 img-fluid"],
                    ["height", "833"],
                    ["src", "assets/img/carousel-slider-2.jpg"],
                    ["width", "1920"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](52, 0, null, null, 3, "a", [
                    ["class", "carousel-control-prev"],
                    ["data-slide", "prev"],
                    ["href", "#carouselExampleIndicators"],
                    ["role", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](53, 0, null, null, 0, "span", [
                    ["aria-hidden", "true"],
                    ["class", "carousel-control-prev-icon"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](54, 0, null, null, 1, "span", [
                    ["class", "sr-only"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Previous"])), (l()(), e["\u0275eld"](56, 0, null, null, 3, "a", [
                    ["class", "carousel-control-next"],
                    ["data-slide", "next"],
                    ["href", "#carouselExampleIndicators"],
                    ["role", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](57, 0, null, null, 0, "span", [
                    ["aria-hidden", "true"],
                    ["class", "carousel-control-next-icon"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](58, 0, null, null, 1, "span", [
                    ["class", "sr-only"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Next"])), (l()(), e["\u0275eld"](60, 0, null, null, 39, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](61, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](62, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["With captions"])), (l()(), e["\u0275eld"](64, 0, null, null, 35, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](65, 0, null, null, 34, "div", [
                    ["class", "carousel slide"],
                    ["data-ride", "carousel"],
                    ["id", "carouselExampleIndicatorss"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](66, 0, null, null, 3, "ol", [
                    ["class", "carousel-indicators"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](67, 0, null, null, 0, "li", [
                    ["class", "active"],
                    ["data-slide-to", "0"],
                    ["data-target", "#carouselExampleIndicatorss"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](68, 0, null, null, 0, "li", [
                    ["data-slide-to", "1"],
                    ["data-target", "#carouselExampleIndicatorss"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](69, 0, null, null, 0, "li", [
                    ["data-slide-to", "2"],
                    ["data-target", "#carouselExampleIndicatorss"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](70, 0, null, null, 21, "div", [
                    ["class", "carousel-inner"],
                    ["role", "listbox"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](71, 0, null, null, 6, "div", [
                    ["class", "carousel-item active"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](72, 0, null, null, 0, "img", [
                    ["alt", "First slide"],
                    ["class", "w-100 img-fluid"],
                    ["height", "833"],
                    ["src", "assets/img/carousel-slider-2.jpg"],
                    ["width", "1920"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](73, 0, null, null, 4, "div", [
                    ["class", "carousel-caption d-none d-md-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](74, 0, null, null, 1, "h3", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["First Slide Label"])), (l()(), e["\u0275eld"](76, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Praesent commodo cursus magna, vel scelerisque nisl consectetur."])), (l()(), e["\u0275eld"](78, 0, null, null, 6, "div", [
                    ["class", "carousel-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](79, 0, null, null, 0, "img", [
                    ["alt", "second slide"],
                    ["class", "w-100 img-fluid"],
                    ["height", "833"],
                    ["src", "assets/img/carousel-slider-1.jpg"],
                    ["width", "1920"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](80, 0, null, null, 4, "div", [
                    ["class", "carousel-caption d-none d-md-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](81, 0, null, null, 1, "h3", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Second Slide Label"])), (l()(), e["\u0275eld"](83, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Praesent commodo cursus magna, vel scelerisque nisl consectetur."])), (l()(), e["\u0275eld"](85, 0, null, null, 6, "div", [
                    ["class", "carousel-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](86, 0, null, null, 0, "img", [
                    ["alt", "Third slide"],
                    ["class", "w-100 img-fluid"],
                    ["height", "833"],
                    ["src", "assets/img/carousel-slider-3.jpg"],
                    ["width", "1920"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](87, 0, null, null, 4, "div", [
                    ["class", "carousel-caption d-none d-md-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](88, 0, null, null, 1, "h3", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Third Slide Label"])), (l()(), e["\u0275eld"](90, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Praesent commodo cursus magna, vel scelerisque nisl consectetur."])), (l()(), e["\u0275eld"](92, 0, null, null, 3, "a", [
                    ["class", "carousel-control-prev"],
                    ["data-slide", "prev"],
                    ["href", "#carouselExampleIndicatorss"],
                    ["role", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](93, 0, null, null, 0, "span", [
                    ["aria-hidden", "true"],
                    ["class", "carousel-control-prev-icon"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](94, 0, null, null, 1, "span", [
                    ["class", "sr-only"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Previous"])), (l()(), e["\u0275eld"](96, 0, null, null, 3, "a", [
                    ["class", "carousel-control-next"],
                    ["data-slide", "next"],
                    ["href", "#carouselExampleIndicatorss"],
                    ["role", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](97, 0, null, null, 0, "span", [
                    ["aria-hidden", "true"],
                    ["class", "carousel-control-next-icon"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](98, 0, null, null, 1, "span", [
                    ["class", "sr-only"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Next"]))], null, null)
            }
            var Il = e["\u0275ccf"]("ms-carousel", Dl, function(l) {
                    return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 1, "ms-carousel", [], [
                        [40, "@fadeInAnimation", 0]
                    ], null, null, Sl, Bl)), e["\u0275did"](1, 114688, null, 0, Dl, [j.a], null, null)], function(l, n) {
                        l(n, 1, 0)
                    }, function(l, n) {
                        l(n, 0, 0, !0)
                    })
                }, {}, {}, []),
                jl = u("gIcY"),
                Tl = function(l) {
                    return l[l.min = 1e3] = "min", l[l.max = 9999] = "max", l
                }({}),
                El = function() {
                    function l() {
                        this.dayLabels = {
                            su: "Sun",
                            mo: "Mon",
                            tu: "Tue",
                            we: "Wed",
                            th: "Thu",
                            fr: "Fri",
                            sa: "Sat"
                        }, this.monthLabels = {
                            1: "Jan",
                            2: "Feb",
                            3: "Mar",
                            4: "Apr",
                            5: "May",
                            6: "Jun",
                            7: "Jul",
                            8: "Aug",
                            9: "Sep",
                            10: "Oct",
                            11: "Nov",
                            12: "Dec"
                        }, this.dateFormat = "yyyy-mm-dd", this.showTodayBtn = !0, this.todayBtnTxt = "Today", this.firstDayOfWeek = "mo", this.satHighlight = !1, this.sunHighlight = !0, this.highlightDates = [], this.markCurrentDay = !0, this.markCurrentMonth = !0, this.markCurrentYear = !0, this.monthSelector = !0, this.yearSelector = !0, this.disableHeaderButtons = !0, this.showWeekNumbers = !1, this.selectorHeight = "232px", this.selectorWidth = "252px", this.disableUntil = {
                            year: 0,
                            month: 0,
                            day: 0
                        }, this.disableSince = {
                            year: 0,
                            month: 0,
                            day: 0
                        }, this.disableDates = [], this.enableDates = [], this.markDates = [], this.markWeekends = {}, this.disableDateRanges = [], this.disableWeekends = !1, this.disableWeekdays = [], this.alignSelectorRight = !1, this.openSelectorTopOfInput = !1, this.closeSelectorOnDateSelect = !0, this.closeSelectorOnDocumentClick = !0, this.minYear = Tl.min, this.maxYear = Tl.max, this.showSelectorArrow = !0, this.allowSelectionOnlyInCurrentMonth = !0, this.appendSelectorToBody = !1, this.ariaLabelPrevMonth = "Previous Month", this.ariaLabelNextMonth = "Next Month", this.ariaLabelPrevYear = "Previous Year", this.ariaLabelNextYear = "Next Year"
                    }
                    return l.ctorParameters = [], l
                }(),
                Ml = function(l) {
                    return l[l.Open = 1] = "Open", l[l.CloseByDateSel = 2] = "CloseByDateSel", l[l.CloseByCalBtn = 3] = "CloseByCalBtn", l[l.CloseByOutClick = 4] = "CloseByOutClick", l[l.CloseByEsc = 5] = "CloseByEsc", l
                }({}),
                Fl = (Object(e.forwardRef)(function() {
                    return Fl
                }), Object(e.forwardRef)(function() {
                    return Fl
                }), function() {
                    function l(l, n, u, a, t, d, s) {
                        var i = this;
                        this.utilService = l, this.vcRef = n, this.cfr = u, this.renderer = a, this.cdr = t, this.elem = d, this.config = s, this.dateChanged = new e.EventEmitter, this.inputFieldChanged = new e.EventEmitter, this.calendarViewChanged = new e.EventEmitter, this.calendarToggle = new e.EventEmitter, this.cRef = null, this.inputText = "", this.preventClose = !1, this.disabled = !1, this.onChangeCb = function() {}, this.onTouchedCb = function() {}, this.onClickWrapper = function(l) {
                            i.onClick(l)
                        }, this.opts = Object.assign({}, s), this.parseOptions(s)
                    }
                    return l.prototype.onKeyUp = function(l) {
                        if (!this.ignoreKeyPress(l.keyCode))
                            if (l.keyCode === i.esc) this.closeSelector(Ml.CloseByEsc);
                            else {
                                var n = this.utilService.isDateValid(this.elem.nativeElement.value, this.opts.dateFormat, this.opts.minYear, this.opts.maxYear, this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableDates, this.opts.disableDateRanges, this.opts.disableWeekdays, this.opts.monthLabels, this.opts.enableDates);
                                if (this.utilService.isInitializedDate(n)) {
                                    var u = this.utilService.getDateModel(n, this.opts.dateFormat, this.opts.monthLabels, this.elem.nativeElement.value);
                                    this.emitDateChanged(u), this.updateModel(u), this.emitInputFieldChanged(u.formatted, !0), this.opts.closeSelectorOnDateSelect ? this.closeSelector(Ml.CloseByDateSel) : null !== this.cRef && this.cRef.instance.setCalendarView(n)
                                } else this.inputText !== this.elem.nativeElement.value && ("" === this.elem.nativeElement.value ? this.clearDate() : (this.onChangeCb(null), this.emitInputFieldChanged(this.elem.nativeElement.value, !1)));
                                this.inputText = this.elem.nativeElement.value
                            }
                    }, l.prototype.onBlur = function() {
                        this.onTouchedCb()
                    }, l.prototype.onClick = function(l) {
                        !this.opts.closeSelectorOnDocumentClick || this.preventClose || !l.target || null === this.cRef || this.elem.nativeElement === l.target || this.cRef.location.nativeElement.contains(l.target) || this.disabled || this.closeSelector(Ml.CloseByOutClick)
                    }, l.prototype.ngOnChanges = function(l) {
                        if (l.hasOwnProperty("options") && this.parseOptions(l.options.currentValue), l.hasOwnProperty("defaultMonth")) {
                            var n = l.defaultMonth.currentValue;
                            "object" == typeof n && (n = n.defMonth), this.defaultMonth = n
                        }
                    }, l.prototype.ngOnDestroy = function() {
                        this.closeCalendar()
                    }, l.prototype.parseOptions = function(l) {
                        var n = this;
                        void 0 !== l && Object.keys(l).forEach(function(u) {
                            n.opts[u] = l[u]
                        }), this.opts.minYear < Tl.min && (this.opts.minYear = Tl.min), this.opts.maxYear > Tl.max && (this.opts.maxYear = Tl.max)
                    }, l.prototype.writeValue = function(l) {
                        if (!this.disabled)
                            if (l && (l.date || l.jsdate)) {
                                var n = this.utilService.formatDate(l.date ? l.date : this.jsDateToMyDate(l.jsdate), this.opts.dateFormat, this.opts.monthLabels),
                                    u = this.utilService.isDateValid(n, this.opts.dateFormat, this.opts.minYear, this.opts.maxYear, this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableDates, this.opts.disableDateRanges, this.opts.disableWeekdays, this.opts.monthLabels, this.opts.enableDates);
                                this.setInputValue(n), this.emitInputFieldChanged(n, this.utilService.isInitializedDate(u))
                            } else null !== l && "" !== l || (this.setInputValue(""), this.emitInputFieldChanged("", !1))
                    }, l.prototype.registerOnChange = function(l) {
                        this.onChangeCb = l
                    }, l.prototype.registerOnTouched = function(l) {
                        this.onTouchedCb = l
                    }, l.prototype.setDisabledState = function(l) {
                        this.disabled = l, this.renderer.setElementProperty(this.elem.nativeElement, "disabled", l), l && this.closeCalendar()
                    }, l.prototype.validate = function(l) {
                        if (null === this.elem.nativeElement.value || "" === this.elem.nativeElement.value) return null;
                        var n = this.utilService.isDateValid(this.elem.nativeElement.value, this.opts.dateFormat, this.opts.minYear, this.opts.maxYear, this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableDates, this.opts.disableDateRanges, this.opts.disableWeekdays, this.opts.monthLabels, this.opts.enableDates);
                        return this.utilService.isInitializedDate(n) ? null : {
                            invalidDateFormat: !0
                        }
                    }, l.prototype.openCalendar = function() {
                        var l = this;
                        this.disabled || (this.preventClose = !0, this.cdr.detectChanges(), null === this.cRef && (this.cRef = this.vcRef.createComponent(this.cfr.resolveComponentFactory(r)), this.appendSelector(this.cRef.location.nativeElement), this.cRef.instance.initialize(this.opts, this.defaultMonth, this.getSelectorPosition(this.elem.nativeElement), this.elem.nativeElement.value, function(n, u) {
                            l.focusToInput(), l.emitDateChanged(n), l.emitInputFieldChanged(n.formatted, !0), l.updateModel(n), u && l.closeSelector(Ml.CloseByDateSel)
                        }, function(n) {
                            l.emitCalendarChanged(n)
                        }, function() {
                            l.closeSelector(Ml.CloseByEsc)
                        }), this.emitCalendarToggle(Ml.Open)), setTimeout(function() {
                            l.preventClose = !1
                        }, 50))
                    }, l.prototype.closeCalendar = function() {
                        this.closeSelector(Ml.CloseByCalBtn)
                    }, l.prototype.toggleCalendar = function() {
                        this.disabled || (null === this.cRef ? (document.addEventListener("click", this.onClickWrapper), this.openCalendar()) : (document.removeEventListener("click", this.onClickWrapper), this.closeSelector(Ml.CloseByCalBtn)))
                    }, l.prototype.clearDate = function() {
                        this.disabled || (this.setInputValue(""), this.emitInputFieldChanged("", !1), this.emitDateChanged({
                            date: {
                                year: 0,
                                month: 0,
                                day: 0
                            },
                            jsdate: null,
                            formatted: "",
                            epoc: 0
                        }), this.onChangeCb(null), this.onTouchedCb(), this.closeSelector(Ml.CloseByCalBtn))
                    }, l.prototype.isDateValid = function() {
                        if ("" !== this.elem.nativeElement.value) {
                            var l = this.utilService.isDateValid(this.elem.nativeElement.value, this.opts.dateFormat, this.opts.minYear, this.opts.maxYear, this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableDates, this.opts.disableDateRanges, this.opts.disableWeekdays, this.opts.monthLabels, this.opts.enableDates);
                            if (this.utilService.isInitializedDate(l)) return this.emitInputFieldChanged(this.elem.nativeElement.value, !0), !0
                        }
                        return this.emitInputFieldChanged(this.elem.nativeElement.value, !1), !1
                    }, l.prototype.ignoreKeyPress = function(l) {
                        return l === i.leftArrow || l === i.rightArrow || l === i.upArrow || l === i.downArrow || l === i.tab || l === i.shift
                    }, l.prototype.closeSelector = function(l) {
                        null !== this.cRef && (this.vcRef.remove(this.vcRef.indexOf(this.cRef.hostView)), this.cRef = null, this.emitCalendarToggle(l))
                    }, l.prototype.updateModel = function(l) {
                        this.setInputValue(l.formatted), this.onChangeCb(l), this.onTouchedCb()
                    }, l.prototype.setInputValue = function(l) {
                        this.inputText = l, this.renderer.setElementProperty(this.elem.nativeElement, "value", l)
                    }, l.prototype.focusToInput = function() {
                        var l = this;
                        setTimeout(function() {
                            l.elem.nativeElement.focus()
                        })
                    }, l.prototype.emitDateChanged = function(l) {
                        this.dateChanged.emit(l)
                    }, l.prototype.emitInputFieldChanged = function(l, n) {
                        this.inputFieldChanged.emit({
                            value: l,
                            dateFormat: this.opts.dateFormat,
                            valid: n
                        })
                    }, l.prototype.emitCalendarChanged = function(l) {
                        this.calendarViewChanged.emit(l)
                    }, l.prototype.emitCalendarToggle = function(l) {
                        this.calendarToggle.emit(l)
                    }, l.prototype.jsDateToMyDate = function(l) {
                        return {
                            year: l.getFullYear(),
                            month: l.getMonth() + 1,
                            day: l.getDate()
                        }
                    }, l.prototype.appendSelector = function(l) {
                        this.opts.appendSelectorToBody && document.querySelector("body").appendChild(l)
                    }, l.prototype.getSelectorPosition = function(l) {
                        var n = 0,
                            u = 0;
                        if (this.opts.appendSelectorToBody) {
                            var e = document.body.getBoundingClientRect(),
                                a = l.getBoundingClientRect();
                            n = a.top - e.top, u = a.left - e.left
                        }
                        return n = this.opts.openSelectorTopOfInput ? n - this.getSelectorDimension(this.opts.selectorHeight) - 2 : n + l.offsetHeight + (this.opts.showSelectorArrow ? 12 : 2), this.opts.alignSelectorRight && (u = u + l.offsetWidth - this.getSelectorDimension(this.opts.selectorWidth)), {
                            top: n + "px",
                            left: u + "px"
                        }
                    }, l.prototype.getSelectorDimension = function(l) {
                        return Number(l.replace("px", ""))
                    }, l.ctorParameters = [{
                        type: s
                    }, {
                        type: e.ViewContainerRef
                    }, {
                        type: e.ComponentFactoryResolver
                    }, {
                        type: e.Renderer
                    }, {
                        type: e.ChangeDetectorRef
                    }, {
                        type: e.ElementRef
                    }, {
                        type: El
                    }], l
                }()),
                Rl = function() {
                    function l(l) {
                        this.pageTitleService = l, this.dateOptions = {
                            dateFormat: "dd.mm.yyyy"
                        }, this.dateOptions2 = {
                            dateFormat: "mm.dd.yyyy"
                        }, this.dateOptions3 = {
                            dateFormat: "yyyy.mm.dd"
                        }, this.model = {
                            date: {
                                year: 2018,
                                month: 10,
                                day: 9
                            }
                        }, this.model2 = {
                            date: {
                                year: 2018,
                                month: 11,
                                day: 10
                            }
                        }, this.model3 = {
                            date: {
                                year: 2018,
                                month: 12,
                                day: 11
                            }
                        }
                    }
                    return l.prototype.ngOnInit = function() {
                        this.pageTitleService.setTitle("Datepicker")
                    }, l.prototype.onDateChanged = function(l) {}, l
                }(),
                Ql = e["\u0275crt"]({
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

            function Yl(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 72, "div", [
                    ["class", "datepicker-wrapper"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 71, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](2, 0, null, null, 26, "div", [
                    ["class", "col-lg-5"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](3, 0, null, null, 25, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](4, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](5, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Datepicker DD/MM/YY"])), (l()(), e["\u0275eld"](7, 0, null, null, 21, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](8, 0, null, null, 20, "form", [
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
                ], function(l, n, u) {
                    var a = !0;
                    return "submit" === n && (a = !1 !== e["\u0275nov"](l, 10).onSubmit(u) && a), "reset" === n && (a = !1 !== e["\u0275nov"](l, 10).onReset() && a), a
                }, null, null)), e["\u0275did"](9, 16384, null, 0, jl["\u0275angular_packages_forms_forms_bg"], [], null, null), e["\u0275did"](10, 4210688, null, 0, jl.NgForm, [
                    [8, null],
                    [8, null]
                ], null, null), e["\u0275prd"](2048, null, jl.ControlContainer, null, [jl.NgForm]), e["\u0275did"](12, 16384, null, 0, jl.NgControlStatusGroup, [
                    [4, jl.ControlContainer]
                ], null, null), (l()(), e["\u0275eld"](13, 0, null, null, 15, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](14, 0, null, null, 14, "div", [
                    ["class", "input-group"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](15, 16777216, null, null, 8, "input", [
                    ["class", "form-control"],
                    ["name", "datepicker"],
                    ["ngx-mydatepicker", ""],
                    ["placeholder", "Select a date"]
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
                    [null, "dateChanged"],
                    [null, "input"],
                    [null, "blur"],
                    [null, "compositionstart"],
                    [null, "compositionend"],
                    [null, "keyup"]
                ], function(l, n, u) {
                    var a = !0,
                        t = l.component;
                    return "input" === n && (a = !1 !== e["\u0275nov"](l, 16)._handleInput(u.target.value) && a), "blur" === n && (a = !1 !== e["\u0275nov"](l, 16).onTouched() && a), "compositionstart" === n && (a = !1 !== e["\u0275nov"](l, 16)._compositionStart() && a), "compositionend" === n && (a = !1 !== e["\u0275nov"](l, 16)._compositionEnd(u.target.value) && a), "keyup" === n && (a = !1 !== e["\u0275nov"](l, 18).onKeyUp(u) && a), "blur" === n && (a = !1 !== e["\u0275nov"](l, 18).onBlur() && a), "ngModelChange" === n && (a = !1 !== (t.model = u) && a), "dateChanged" === n && (a = !1 !== t.onDateChanged(u) && a), a
                }, null, null)), e["\u0275did"](16, 16384, null, 0, jl.DefaultValueAccessor, [e.Renderer2, e.ElementRef, [2, jl.COMPOSITION_BUFFER_MODE]], null, null), e["\u0275prd"](512, null, s, s, []), e["\u0275did"](18, 671744, [
                    ["dp", 4]
                ], 0, Fl, [s, e.ViewContainerRef, e.ComponentFactoryResolver, e.Renderer, e.ChangeDetectorRef, e.ElementRef, El], {
                    options: [0, "options"]
                }, {
                    dateChanged: "dateChanged"
                }), e["\u0275prd"](1024, null, jl.NG_VALIDATORS, function(l) {
                    return [l]
                }, [Fl]), e["\u0275prd"](1024, null, jl.NG_VALUE_ACCESSOR, function(l, n) {
                    return [l, n]
                }, [jl.DefaultValueAccessor, Fl]), e["\u0275did"](21, 671744, null, 0, jl.NgModel, [
                    [2, jl.ControlContainer],
                    [6, jl.NG_VALIDATORS],
                    [8, null],
                    [6, jl.NG_VALUE_ACCESSOR]
                ], {
                    name: [0, "name"],
                    model: [1, "model"]
                }, {
                    update: "ngModelChange"
                }), e["\u0275prd"](2048, null, jl.NgControl, null, [jl.NgModel]), e["\u0275did"](23, 16384, null, 0, jl.NgControlStatus, [
                    [4, jl.NgControl]
                ], null, null), (l()(), e["\u0275eld"](24, 0, null, null, 4, "span", [
                    ["class", "input-group-btn"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](25, 0, null, null, 1, "button", [
                    ["class", "btn btn-primary"],
                    ["type", "button"]
                ], null, [
                    [null, "click"]
                ], function(l, n, u) {
                    var a = !0;
                    return "click" === n && (a = !1 !== e["\u0275nov"](l, 18).clearDate() && a), a
                }, null, null)), (l()(), e["\u0275eld"](26, 0, null, null, 0, "i", [
                    ["class", "glyphicon glyphicon-remove"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](27, 0, null, null, 1, "button", [
                    ["class", "btn btn-primary"],
                    ["type", "button"]
                ], null, [
                    [null, "click"]
                ], function(l, n, u) {
                    var a = !0;
                    return "click" === n && (a = !1 !== e["\u0275nov"](l, 18).toggleCalendar() && a), a
                }, null, null)), (l()(), e["\u0275eld"](28, 0, null, null, 0, "i", [
                    ["class", "glyphicon glyphicon-calendar"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](29, 0, null, null, 21, "div", [
                    ["class", "col-lg-5"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](30, 0, null, null, 20, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](31, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](32, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Datepicker MM/DD/YY"])), (l()(), e["\u0275eld"](34, 0, null, null, 16, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](35, 0, null, null, 15, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](36, 0, null, null, 14, "div", [
                    ["class", "input-group"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](37, 16777216, null, null, 8, "input", [
                    ["class", "form-control"],
                    ["name", "datepicker2"],
                    ["ngx-mydatepicker", ""],
                    ["placeholder", "Select a date"]
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
                    [null, "dateChanged"],
                    [null, "input"],
                    [null, "blur"],
                    [null, "compositionstart"],
                    [null, "compositionend"],
                    [null, "keyup"]
                ], function(l, n, u) {
                    var a = !0,
                        t = l.component;
                    return "input" === n && (a = !1 !== e["\u0275nov"](l, 38)._handleInput(u.target.value) && a), "blur" === n && (a = !1 !== e["\u0275nov"](l, 38).onTouched() && a), "compositionstart" === n && (a = !1 !== e["\u0275nov"](l, 38)._compositionStart() && a), "compositionend" === n && (a = !1 !== e["\u0275nov"](l, 38)._compositionEnd(u.target.value) && a), "keyup" === n && (a = !1 !== e["\u0275nov"](l, 40).onKeyUp(u) && a), "blur" === n && (a = !1 !== e["\u0275nov"](l, 40).onBlur() && a), "ngModelChange" === n && (a = !1 !== (t.model2 = u) && a), "dateChanged" === n && (a = !1 !== t.onDateChanged(u) && a), a
                }, null, null)), e["\u0275did"](38, 16384, null, 0, jl.DefaultValueAccessor, [e.Renderer2, e.ElementRef, [2, jl.COMPOSITION_BUFFER_MODE]], null, null), e["\u0275prd"](512, null, s, s, []), e["\u0275did"](40, 671744, [
                    ["dp2", 4]
                ], 0, Fl, [s, e.ViewContainerRef, e.ComponentFactoryResolver, e.Renderer, e.ChangeDetectorRef, e.ElementRef, El], {
                    options: [0, "options"]
                }, {
                    dateChanged: "dateChanged"
                }), e["\u0275prd"](1024, null, jl.NG_VALIDATORS, function(l) {
                    return [l]
                }, [Fl]), e["\u0275prd"](1024, null, jl.NG_VALUE_ACCESSOR, function(l, n) {
                    return [l, n]
                }, [jl.DefaultValueAccessor, Fl]), e["\u0275did"](43, 671744, null, 0, jl.NgModel, [
                    [8, null],
                    [6, jl.NG_VALIDATORS],
                    [8, null],
                    [6, jl.NG_VALUE_ACCESSOR]
                ], {
                    name: [0, "name"],
                    model: [1, "model"]
                }, {
                    update: "ngModelChange"
                }), e["\u0275prd"](2048, null, jl.NgControl, null, [jl.NgModel]), e["\u0275did"](45, 16384, null, 0, jl.NgControlStatus, [
                    [4, jl.NgControl]
                ], null, null), (l()(), e["\u0275eld"](46, 0, null, null, 4, "span", [
                    ["class", "input-group-btn"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](47, 0, null, null, 1, "button", [
                    ["class", "btn btn-success"],
                    ["type", "button"]
                ], null, [
                    [null, "click"]
                ], function(l, n, u) {
                    var a = !0;
                    return "click" === n && (a = !1 !== e["\u0275nov"](l, 40).clearDate() && a), a
                }, null, null)), (l()(), e["\u0275eld"](48, 0, null, null, 0, "i", [
                    ["class", "glyphicon glyphicon-remove"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](49, 0, null, null, 1, "button", [
                    ["class", "btn btn-success"],
                    ["type", "button"]
                ], null, [
                    [null, "click"]
                ], function(l, n, u) {
                    var a = !0;
                    return "click" === n && (a = !1 !== e["\u0275nov"](l, 40).toggleCalendar() && a), a
                }, null, null)), (l()(), e["\u0275eld"](50, 0, null, null, 0, "i", [
                    ["class", "glyphicon glyphicon-calendar"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](51, 0, null, null, 21, "div", [
                    ["class", "col-lg-5"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](52, 0, null, null, 20, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](53, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](54, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Datepicker YY/MM/DD"])), (l()(), e["\u0275eld"](56, 0, null, null, 16, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](57, 0, null, null, 15, "div", [
                    ["class", "form-group"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](58, 0, null, null, 14, "div", [
                    ["class", "input-group"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](59, 16777216, null, null, 8, "input", [
                    ["class", "form-control"],
                    ["name", "datepicker3"],
                    ["ngx-mydatepicker", ""],
                    ["placeholder", "Select a date"]
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
                    [null, "dateChanged"],
                    [null, "input"],
                    [null, "blur"],
                    [null, "compositionstart"],
                    [null, "compositionend"],
                    [null, "keyup"]
                ], function(l, n, u) {
                    var a = !0,
                        t = l.component;
                    return "input" === n && (a = !1 !== e["\u0275nov"](l, 60)._handleInput(u.target.value) && a), "blur" === n && (a = !1 !== e["\u0275nov"](l, 60).onTouched() && a), "compositionstart" === n && (a = !1 !== e["\u0275nov"](l, 60)._compositionStart() && a), "compositionend" === n && (a = !1 !== e["\u0275nov"](l, 60)._compositionEnd(u.target.value) && a), "keyup" === n && (a = !1 !== e["\u0275nov"](l, 62).onKeyUp(u) && a), "blur" === n && (a = !1 !== e["\u0275nov"](l, 62).onBlur() && a), "ngModelChange" === n && (a = !1 !== (t.model3 = u) && a), "dateChanged" === n && (a = !1 !== t.onDateChanged(u) && a), a
                }, null, null)), e["\u0275did"](60, 16384, null, 0, jl.DefaultValueAccessor, [e.Renderer2, e.ElementRef, [2, jl.COMPOSITION_BUFFER_MODE]], null, null), e["\u0275prd"](512, null, s, s, []), e["\u0275did"](62, 671744, [
                    ["dp3", 4]
                ], 0, Fl, [s, e.ViewContainerRef, e.ComponentFactoryResolver, e.Renderer, e.ChangeDetectorRef, e.ElementRef, El], {
                    options: [0, "options"]
                }, {
                    dateChanged: "dateChanged"
                }), e["\u0275prd"](1024, null, jl.NG_VALIDATORS, function(l) {
                    return [l]
                }, [Fl]), e["\u0275prd"](1024, null, jl.NG_VALUE_ACCESSOR, function(l, n) {
                    return [l, n]
                }, [jl.DefaultValueAccessor, Fl]), e["\u0275did"](65, 671744, null, 0, jl.NgModel, [
                    [8, null],
                    [6, jl.NG_VALIDATORS],
                    [8, null],
                    [6, jl.NG_VALUE_ACCESSOR]
                ], {
                    name: [0, "name"],
                    model: [1, "model"]
                }, {
                    update: "ngModelChange"
                }), e["\u0275prd"](2048, null, jl.NgControl, null, [jl.NgModel]), e["\u0275did"](67, 16384, null, 0, jl.NgControlStatus, [
                    [4, jl.NgControl]
                ], null, null), (l()(), e["\u0275eld"](68, 0, null, null, 4, "span", [
                    ["class", "input-group-btn"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](69, 0, null, null, 1, "button", [
                    ["class", "btn btn-warning"],
                    ["type", "button"]
                ], null, [
                    [null, "click"]
                ], function(l, n, u) {
                    var a = !0;
                    return "click" === n && (a = !1 !== e["\u0275nov"](l, 62).clearDate() && a), a
                }, null, null)), (l()(), e["\u0275eld"](70, 0, null, null, 0, "i", [
                    ["class", "glyphicon glyphicon-remove"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](71, 0, null, null, 1, "button", [
                    ["class", "btn btn-warning"],
                    ["type", "button"]
                ], null, [
                    [null, "click"]
                ], function(l, n, u) {
                    var a = !0;
                    return "click" === n && (a = !1 !== e["\u0275nov"](l, 62).toggleCalendar() && a), a
                }, null, null)), (l()(), e["\u0275eld"](72, 0, null, null, 0, "i", [
                    ["class", "glyphicon glyphicon-calendar"]
                ], null, null, null, null, null))], function(l, n) {
                    var u = n.component;
                    l(n, 18, 0, u.dateOptions), l(n, 21, 0, "datepicker", u.model), l(n, 40, 0, u.dateOptions2), l(n, 43, 0, "datepicker2", u.model2), l(n, 62, 0, u.dateOptions3), l(n, 65, 0, "datepicker3", u.model3)
                }, function(l, n) {
                    l(n, 8, 0, e["\u0275nov"](n, 12).ngClassUntouched, e["\u0275nov"](n, 12).ngClassTouched, e["\u0275nov"](n, 12).ngClassPristine, e["\u0275nov"](n, 12).ngClassDirty, e["\u0275nov"](n, 12).ngClassValid, e["\u0275nov"](n, 12).ngClassInvalid, e["\u0275nov"](n, 12).ngClassPending), l(n, 15, 0, e["\u0275nov"](n, 23).ngClassUntouched, e["\u0275nov"](n, 23).ngClassTouched, e["\u0275nov"](n, 23).ngClassPristine, e["\u0275nov"](n, 23).ngClassDirty, e["\u0275nov"](n, 23).ngClassValid, e["\u0275nov"](n, 23).ngClassInvalid, e["\u0275nov"](n, 23).ngClassPending), l(n, 37, 0, e["\u0275nov"](n, 45).ngClassUntouched, e["\u0275nov"](n, 45).ngClassTouched, e["\u0275nov"](n, 45).ngClassPristine, e["\u0275nov"](n, 45).ngClassDirty, e["\u0275nov"](n, 45).ngClassValid, e["\u0275nov"](n, 45).ngClassInvalid, e["\u0275nov"](n, 45).ngClassPending), l(n, 59, 0, e["\u0275nov"](n, 67).ngClassUntouched, e["\u0275nov"](n, 67).ngClassTouched, e["\u0275nov"](n, 67).ngClassPristine, e["\u0275nov"](n, 67).ngClassDirty, e["\u0275nov"](n, 67).ngClassValid, e["\u0275nov"](n, 67).ngClassInvalid, e["\u0275nov"](n, 67).ngClassPending)
                })
            }
            var Ll = e["\u0275ccf"]("ms-datepicker", Rl, function(l) {
                    return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 1, "ms-datepicker", [], [
                        [40, "@fadeInAnimation", 0]
                    ], null, null, Yl, Ql)), e["\u0275did"](1, 114688, null, 0, Rl, [j.a], null, null)], function(l, n) {
                        l(n, 1, 0)
                    }, function(l, n) {
                        l(n, 0, 0, !0)
                    })
                }, {}, {}, []),
                ql = function() {
                    function l() {}
                    return l.forRoot = function() {
                        return {
                            ngModule: l,
                            providers: [El]
                        }
                    }, l.ctorParameters = [], l
                }(),
                Nl = u("ZYCi");
            u.d(n, "UiElementsModuleNgFactory", function() {
                return Wl
            });
            var Wl = e["\u0275cmf"](a, [], function(l) {
                return e["\u0275mod"]([e["\u0275mpd"](512, e.ComponentFactoryResolver, e["\u0275CodegenComponentFactoryResolver"], [
                    [8, [S, I.a, F, L, O, U, Z, ll, al, il, pl, ml, wl, Cl, Il, Ll]],
                    [3, e.ComponentFactoryResolver], e.NgModuleRef
                ]), e["\u0275mpd"](4608, t.NgLocalization, t.NgLocaleLocalization, [e.LOCALE_ID, [2, t["\u0275angular_packages_common_common_a"]]]), e["\u0275mpd"](4608, jl["\u0275angular_packages_forms_forms_i"], jl["\u0275angular_packages_forms_forms_i"], []), e["\u0275mpd"](4608, jl.FormBuilder, jl.FormBuilder, []), e["\u0275mpd"](4608, El, El, []), e["\u0275mpd"](1073742336, t.CommonModule, t.CommonModule, []), e["\u0275mpd"](1073742336, jl["\u0275angular_packages_forms_forms_bb"], jl["\u0275angular_packages_forms_forms_bb"], []), e["\u0275mpd"](1073742336, jl.FormsModule, jl.FormsModule, []), e["\u0275mpd"](1073742336, jl.ReactiveFormsModule, jl.ReactiveFormsModule, []), e["\u0275mpd"](1073742336, ql, ql, []), e["\u0275mpd"](1073742336, Nl.p, Nl.p, [
                    [2, Nl.v],
                    [2, Nl.m]
                ]), e["\u0275mpd"](1073742336, a, a, []), e["\u0275mpd"](1024, Nl.k, function() {
                    return [
                        [{
                            path: "",
                            children: [{
                                path: "buttons",
                                component: T
                            }, {
                                path: "progressbar",
                                component: R
                            }, {
                                path: "tabs",
                                component: q
                            }, {
                                path: "accordions",
                                component: z
                            }, {
                                path: "tabs",
                                component: q
                            }, {
                                path: "pagination",
                                component: G
                            }, {
                                path: "tooltip",
                                component: J
                            }, {
                                path: "cards",
                                component: nl
                            }, {
                                path: "social-icons",
                                component: tl
                            }, {
                                path: "typography",
                                component: ol
                            }, {
                                path: "badges",
                                component: bl
                            }, {
                                path: "dropdown",
                                component: vl
                            }, {
                                path: "alert",
                                component: yl
                            }, {
                                path: "carousel",
                                component: Dl
                            }, {
                                path: "datepicker",
                                component: Rl
                            }]
                        }]
                    ]
                }, [])])
            })
        }
    }
]);