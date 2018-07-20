(window.webpackJsonp = window.webpackJsonp || []).push([
    [21], {
        rviB: function(l, n, e) {
            "use strict";
            e.r(n);
            var t = e("CcnG"),
                a = function() {},
                i = e("7Z8E"),
                u = e("pMnS"),
                o = e("xdbM"),
                s = e("c+eF"),
                c = function() {
                    function l(l) {
                        this.pageTitleService = l, this.barChartOptions = {
                            scaleShowVerticalLines: !1,
                            responsive: !0
                        }, this.barChartColors = [{
                            backgroundColor: "#0066eb",
                            borderColor: "#0066eb",
                            pointBackgroundColor: "#0066eb",
                            pointBorderColor: "#fff",
                            pointHoverBackgroundColor: "#fff",
                            pointHoverBorderColor: "#0066eb"
                        }, {
                            backgroundColor: "#00caac",
                            borderColor: "#00caac",
                            pointBackgroundColor: "#00caac",
                            pointBorderColor: "#fff",
                            pointHoverBackgroundColor: "#fff",
                            pointHoverBorderColor: "#00caac"
                        }, {
                            backgroundColor: "#ff5723",
                            borderColor: "#ff5723",
                            pointBackgroundColor: "#ff5723",
                            pointBorderColor: "#fff",
                            pointHoverBackgroundColor: "#fff",
                            pointHoverBorderColor: "#ff5723"
                        }], this.barChartLabels = ["2006", "2007", "2008", "2009", "2010", "2011", "2012"], this.barChartType = "bar", this.barChartLegend = !1, this.barChartData = [{
                            data: [65, 59, 80, 81, 56, 55, 40],
                            label: "Series A"
                        }, {
                            data: [28, 48, 40, 19, 86, 27, 90],
                            label: "Series B"
                        }], this.barHorizontalChartOptions = {
                            scaleShowVerticalLines: !1,
                            responsive: !0
                        }, this.barHorizontalChartType = "horizontalBar", this.barHorizontalChartLegend = !1, this.barStackChartOptions = {
                            scaleShowVerticalLines: !1,
                            responsive: !0,
                            scales: {
                                xAxes: [{
                                    stacked: !0
                                }],
                                yAxes: [{
                                    stacked: !0
                                }]
                            }
                        }, this.lineChartData = [{
                            data: [65, 59, 80, 81, 56, 55, 40],
                            label: "Series A"
                        }, {
                            data: [28, 48, 40, 19, 86, 27, 90],
                            label: "Series B"
                        }, {
                            data: [18, 48, 77, 9, 100, 27, 40],
                            label: "Series C"
                        }], this.lineChartColors = [{
                            backgroundColor: "rgba(0, 102, 235, 0.3)",
                            borderColor: "rgba(0, 102, 235, 1)",
                            pointBackgroundColor: "rgba(0, 102, 235, 1)",
                            pointBorderColor: "#0066eb",
                            pointHoverBackgroundColor: "#fff",
                            pointHoverBorderColor: "rgba(0, 102, 235, 0.4)"
                        }, {
                            backgroundColor: "rgba(235, 78, 54, 0.2)",
                            borderColor: "rgba(235, 78, 54, 1)",
                            pointBackgroundColor: "rgba(235, 78, 54, 1)",
                            pointBorderColor: "#fff",
                            pointHoverBackgroundColor: "#fff",
                            pointHoverBorderColor: "rgba(235, 78, 54, 0.8)"
                        }, {
                            backgroundColor: "rgba(67, 210, 158, 0.2)",
                            borderColor: "rgba(67, 210, 158, 1)",
                            pointBackgroundColor: "rgba(67, 210, 158, 1)",
                            pointBorderColor: "#fff",
                            pointHoverBackgroundColor: "#fff",
                            pointHoverBorderColor: "rgba(67, 210, 158, 0.8)"
                        }], this.lineChartLabels = ["January", "February", "March", "April", "May", "June", "July"], this.lineChartOptions = {
                            responsive: !0
                        }, this.lineChartLegend = !1, this.lineChartType = "line", this.lineChartSteppedData = [{
                            data: [65, 59, 80, 81, 56, 55, 40],
                            label: "Series A",
                            borderWidth: 1,
                            fill: !1,
                            steppedLine: !0
                        }, {
                            data: [28, 48, 40, 19, 86, 27, 90],
                            label: "Series B",
                            borderWidth: 1,
                            fill: !1,
                            steppedLine: !0
                        }, {
                            data: [18, 48, 77, 9, 100, 27, 40],
                            label: "Series C",
                            borderWidth: 1,
                            fill: !1,
                            steppedLine: !0
                        }], this.linePointChartData = [{
                            data: [65, 59, 80, 81, 56, 55, 40],
                            label: "Series A",
                            borderWidth: 1,
                            fill: !1,
                            pointRadius: 10,
                            pointHoverRadius: 15,
                            showLine: !1
                        }, {
                            data: [28, 48, 40, 19, 86, 27, 90],
                            label: "Series B",
                            borderWidth: 1,
                            fill: !1,
                            pointRadius: 10,
                            pointHoverRadius: 15,
                            showLine: !1
                        }, {
                            data: [18, 48, 77, 9, 100, 27, 40],
                            label: "Series C",
                            borderWidth: 1,
                            fill: !1,
                            pointRadius: 10,
                            pointHoverRadius: 15,
                            showLine: !1
                        }], this.linePointChartOptions = {
                            elements: {
                                point: {
                                    pointStyle: "rectRot"
                                }
                            }
                        }, this.pieChartData = [300, 500, 100], this.pieChartType = "pie", this.pieChartColors = [{
                            backgroundColor: ["#0066eb", "#00caac", "#ff5723", "#414658", "#F8C51C"]
                        }], this.PieChartOptions = {
                            elements: {
                                arc: {
                                    borderWidth: 0
                                }
                            }
                        }, this.doughnutChartData = [350, 450, 100], this.doughnutChartType = "doughnut", this.polarAreaChartLabels = ["Download Sales", "In-Store Sales", "Mail Sales", "Telesales", "Corporate Sales"], this.polarAreaChartData = [300, 500, 100, 40, 120], this.polarAreaLegend = !1, this.polarAreaChartType = "polarArea", this.radarChartLabels = ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"], this.radarChartData = [{
                            data: [65, 59, 90, 81, 56, 55, 40],
                            label: "Series A"
                        }, {
                            data: [28, 48, 40, 19, 96, 27, 100],
                            label: "Series B"
                        }], this.radarChartType = "radar", this.bubbleChartData = [{
                            data: [{
                                x: 6,
                                y: 5,
                                r: 15
                            }, {
                                x: 5,
                                y: 4,
                                r: 10
                            }, {
                                x: 8,
                                y: 4,
                                r: 6
                            }, {
                                x: 8,
                                y: 4,
                                r: 6
                            }, {
                                x: 5,
                                y: 14,
                                r: 14
                            }, {
                                x: 5,
                                y: 6,
                                r: 8
                            }, {
                                x: 4,
                                y: 2,
                                r: 10
                            }],
                            label: "Series A",
                            borderWidth: 1
                        }], this.bubbleChartType = "bubble", this.bubbleChartOptions = {
                            responsive: !0,
                            elements: {
                                points: {
                                    borderWidth: 1,
                                    borderColor: "rgb(0, 0, 0)"
                                }
                            }
                        }, this.mixedPointChartData = [{
                            data: [6, 5, 8, 8, 5, 5, 4],
                            label: "Series A",
                            borderWidth: 1,
                            type: "line",
                            fill: !1
                        }, {
                            data: [5, 4, 4, 2, 6, 2, 5],
                            label: "Series B",
                            borderWidth: 1,
                            type: "bar"
                        }], this.mixedChartOptions = {
                            responsive: !0,
                            scales: {
                                xAxes: [{
                                    gridLines: {
                                        color: "rgba(0,0,0,0.02)",
                                        zeroLineColor: "rgba(0,0,0,0.02)"
                                    }
                                }],
                                yAxes: [{
                                    gridLines: {
                                        color: "rgba(0,0,0,0.02)",
                                        zeroLineColor: "rgba(0,0,0,0.02)"
                                    },
                                    ticks: {
                                        beginAtZero: !0,
                                        suggestedMax: 9
                                    }
                                }]
                            }
                        }
                    }
                    return l.prototype.ngOnInit = function() {
                        this.pageTitleService.setTitle("Ng2Charts")
                    }, l
                }(),
                r = t["\u0275crt"]({
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

            function d(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 120, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](1, 0, null, null, 9, "div", [
                    ["class", "col-xs-12 col-sm-6 col-md-6 col-lg-6"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](2, 0, null, null, 8, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](3, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](4, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](5, 0, null, null, 2, "div", [
                    ["class", "d-flex align-items-start flex-row"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](6, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["Bar"])), (l()(), t["\u0275eld"](8, 0, null, null, 2, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](9, 0, null, null, 1, "canvas", [
                    ["baseChart", ""],
                    ["height", "100"]
                ], null, null, null, null, null)), t["\u0275did"](10, 737280, null, 0, o.BaseChartDirective, [t.ElementRef], {
                    datasets: [0, "datasets"],
                    labels: [1, "labels"],
                    options: [2, "options"],
                    chartType: [3, "chartType"],
                    colors: [4, "colors"],
                    legend: [5, "legend"]
                }, null), (l()(), t["\u0275eld"](11, 0, null, null, 9, "div", [
                    ["class", "col-xs-12 col-sm-6 col-md-6 col-lg-6"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](12, 0, null, null, 8, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](13, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](14, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](15, 0, null, null, 2, "div", [
                    ["class", "d-flex align-items-start flex-row"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](16, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["Horizontal Bar"])), (l()(), t["\u0275eld"](18, 0, null, null, 2, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](19, 0, null, null, 1, "canvas", [
                    ["baseChart", ""],
                    ["height", "100"]
                ], null, null, null, null, null)), t["\u0275did"](20, 737280, null, 0, o.BaseChartDirective, [t.ElementRef], {
                    datasets: [0, "datasets"],
                    labels: [1, "labels"],
                    options: [2, "options"],
                    chartType: [3, "chartType"],
                    colors: [4, "colors"],
                    legend: [5, "legend"]
                }, null), (l()(), t["\u0275eld"](21, 0, null, null, 9, "div", [
                    ["class", "col-xs-12 col-sm-6 col-md-6 col-lg-6"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](22, 0, null, null, 8, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](23, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](24, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](25, 0, null, null, 2, "div", [
                    ["class", "d-flex align-items-start flex-row"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](26, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["Stacked Bar"])), (l()(), t["\u0275eld"](28, 0, null, null, 2, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](29, 0, null, null, 1, "canvas", [
                    ["baseChart", ""],
                    ["height", "100"]
                ], null, null, null, null, null)), t["\u0275did"](30, 737280, null, 0, o.BaseChartDirective, [t.ElementRef], {
                    datasets: [0, "datasets"],
                    labels: [1, "labels"],
                    options: [2, "options"],
                    chartType: [3, "chartType"],
                    colors: [4, "colors"],
                    legend: [5, "legend"]
                }, null), (l()(), t["\u0275eld"](31, 0, null, null, 9, "div", [
                    ["class", "col-xs-12 col-sm-6 col-md-6 col-lg-6"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](32, 0, null, null, 8, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](33, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](34, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](35, 0, null, null, 2, "div", [
                    ["class", "d-flex align-items-start flex-row"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](36, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["Line Chart"])), (l()(), t["\u0275eld"](38, 0, null, null, 2, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](39, 0, null, null, 1, "canvas", [
                    ["baseChart", ""],
                    ["height", "100"]
                ], null, null, null, null, null)), t["\u0275did"](40, 737280, null, 0, o.BaseChartDirective, [t.ElementRef], {
                    datasets: [0, "datasets"],
                    labels: [1, "labels"],
                    options: [2, "options"],
                    chartType: [3, "chartType"],
                    colors: [4, "colors"],
                    legend: [5, "legend"]
                }, null), (l()(), t["\u0275eld"](41, 0, null, null, 9, "div", [
                    ["class", "col-xs-12 col-sm-6 col-md-6 col-lg-6"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](42, 0, null, null, 8, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](43, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](44, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](45, 0, null, null, 2, "div", [
                    ["class", "d-flex align-items-start flex-row"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](46, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["Stepped Line Chart"])), (l()(), t["\u0275eld"](48, 0, null, null, 2, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](49, 0, null, null, 1, "canvas", [
                    ["baseChart", ""],
                    ["height", "100"]
                ], null, null, null, null, null)), t["\u0275did"](50, 737280, null, 0, o.BaseChartDirective, [t.ElementRef], {
                    datasets: [0, "datasets"],
                    labels: [1, "labels"],
                    options: [2, "options"],
                    chartType: [3, "chartType"],
                    colors: [4, "colors"],
                    legend: [5, "legend"]
                }, null), (l()(), t["\u0275eld"](51, 0, null, null, 9, "div", [
                    ["class", "col-xs-12 col-sm-6 col-md-6 col-lg-6"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](52, 0, null, null, 8, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](53, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](54, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](55, 0, null, null, 2, "div", [
                    ["class", "d-flex align-items-start flex-row"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](56, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["Points Line Chart"])), (l()(), t["\u0275eld"](58, 0, null, null, 2, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](59, 0, null, null, 1, "canvas", [
                    ["baseChart", ""],
                    ["height", "100"]
                ], null, null, null, null, null)), t["\u0275did"](60, 737280, null, 0, o.BaseChartDirective, [t.ElementRef], {
                    datasets: [0, "datasets"],
                    labels: [1, "labels"],
                    options: [2, "options"],
                    chartType: [3, "chartType"],
                    colors: [4, "colors"],
                    legend: [5, "legend"]
                }, null), (l()(), t["\u0275eld"](61, 0, null, null, 9, "div", [
                    ["class", "col-xs-12 col-sm-6 col-md-6 col-lg-6"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](62, 0, null, null, 8, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](63, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](64, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](65, 0, null, null, 2, "div", [
                    ["class", "d-flex align-items-start flex-row"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](66, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["Pie Chart"])), (l()(), t["\u0275eld"](68, 0, null, null, 2, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](69, 0, null, null, 1, "canvas", [
                    ["baseChart", ""],
                    ["height", "100"]
                ], null, null, null, null, null)), t["\u0275did"](70, 737280, null, 0, o.BaseChartDirective, [t.ElementRef], {
                    data: [0, "data"],
                    options: [1, "options"],
                    chartType: [2, "chartType"],
                    colors: [3, "colors"]
                }, null), (l()(), t["\u0275eld"](71, 0, null, null, 9, "div", [
                    ["class", "col-xs-12 col-sm-6 col-md-6 col-lg-6"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](72, 0, null, null, 8, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](73, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](74, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](75, 0, null, null, 2, "div", [
                    ["class", "d-flex align-items-start flex-row"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](76, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["Doughnut Chart"])), (l()(), t["\u0275eld"](78, 0, null, null, 2, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](79, 0, null, null, 1, "canvas", [
                    ["baseChart", ""],
                    ["height", "100"]
                ], null, null, null, null, null)), t["\u0275did"](80, 737280, null, 0, o.BaseChartDirective, [t.ElementRef], {
                    data: [0, "data"],
                    options: [1, "options"],
                    chartType: [2, "chartType"],
                    colors: [3, "colors"]
                }, null), (l()(), t["\u0275eld"](81, 0, null, null, 9, "div", [
                    ["class", "col-xs-12 col-sm-6 col-md-6 col-lg-6"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](82, 0, null, null, 8, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](83, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](84, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](85, 0, null, null, 2, "div", [
                    ["class", "d-flex align-items-start flex-row"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](86, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["Polar Area Chart"])), (l()(), t["\u0275eld"](88, 0, null, null, 2, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](89, 0, null, null, 1, "canvas", [
                    ["baseChart", ""],
                    ["height", "100"]
                ], null, null, null, null, null)), t["\u0275did"](90, 737280, null, 0, o.BaseChartDirective, [t.ElementRef], {
                    data: [0, "data"],
                    labels: [1, "labels"],
                    chartType: [2, "chartType"],
                    colors: [3, "colors"],
                    legend: [4, "legend"]
                }, null), (l()(), t["\u0275eld"](91, 0, null, null, 9, "div", [
                    ["class", "col-xs-12 col-sm-6 col-md-6 col-lg-6"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](92, 0, null, null, 8, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](93, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](94, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](95, 0, null, null, 2, "div", [
                    ["class", "d-flex align-items-start flex-row"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](96, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["Radar Chart"])), (l()(), t["\u0275eld"](98, 0, null, null, 2, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](99, 0, null, null, 1, "canvas", [
                    ["baseChart", ""],
                    ["height", "100"]
                ], null, null, null, null, null)), t["\u0275did"](100, 737280, null, 0, o.BaseChartDirective, [t.ElementRef], {
                    datasets: [0, "datasets"],
                    labels: [1, "labels"],
                    chartType: [2, "chartType"],
                    colors: [3, "colors"],
                    legend: [4, "legend"]
                }, null), (l()(), t["\u0275eld"](101, 0, null, null, 9, "div", [
                    ["class", "col-xs-12 col-sm-6 col-md-6 col-lg-6"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](102, 0, null, null, 8, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](103, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](104, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](105, 0, null, null, 2, "div", [
                    ["class", "d-flex align-items-start flex-row"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](106, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["Bubble Chart"])), (l()(), t["\u0275eld"](108, 0, null, null, 2, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](109, 0, null, null, 1, "canvas", [
                    ["baseChart", ""],
                    ["height", "100"]
                ], null, null, null, null, null)), t["\u0275did"](110, 737280, null, 0, o.BaseChartDirective, [t.ElementRef], {
                    datasets: [0, "datasets"],
                    labels: [1, "labels"],
                    options: [2, "options"],
                    chartType: [3, "chartType"],
                    colors: [4, "colors"],
                    legend: [5, "legend"]
                }, null), (l()(), t["\u0275eld"](111, 0, null, null, 9, "div", [
                    ["class", "col-xs-12 col-sm-6 col-md-6 col-lg-6"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](112, 0, null, null, 8, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](113, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](114, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](115, 0, null, null, 2, "div", [
                    ["class", "d-flex align-items-start flex-row"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](116, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["Mixed Chart"])), (l()(), t["\u0275eld"](118, 0, null, null, 2, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](119, 0, null, null, 1, "canvas", [
                    ["baseChart", ""],
                    ["height", "100"]
                ], null, null, null, null, null)), t["\u0275did"](120, 737280, null, 0, o.BaseChartDirective, [t.ElementRef], {
                    datasets: [0, "datasets"],
                    labels: [1, "labels"],
                    options: [2, "options"],
                    chartType: [3, "chartType"],
                    colors: [4, "colors"],
                    legend: [5, "legend"]
                }, null)], function(l, n) {
                    var e = n.component;
                    l(n, 10, 0, e.barChartData, e.barChartLabels, e.barChartOptions, e.barChartType, e.barChartColors, e.barChartLegend), l(n, 20, 0, e.barChartData, e.barChartLabels, e.barHorizontalChartOptions, e.barHorizontalChartType, e.barChartColors, e.barHorizontalChartLegend), l(n, 30, 0, e.barChartData, e.barChartLabels, e.barStackChartOptions, e.barChartType, e.barChartColors, e.barChartLegend), l(n, 40, 0, e.lineChartData, e.lineChartLabels, e.lineChartOptions, e.lineChartType, e.lineChartColors, e.lineChartLegend), l(n, 50, 0, e.lineChartSteppedData, e.lineChartLabels, e.lineChartOptions, e.lineChartType, e.lineChartColors, e.lineChartLegend), l(n, 60, 0, e.linePointChartData, e.lineChartLabels, e.linePointChartOptions, e.lineChartType, e.lineChartColors, e.lineChartLegend), l(n, 70, 0, e.pieChartData, e.PieChartOptions, e.pieChartType, e.pieChartColors), l(n, 80, 0, e.doughnutChartData, e.PieChartOptions, e.doughnutChartType, e.pieChartColors), l(n, 90, 0, e.polarAreaChartData, e.polarAreaChartLabels, e.polarAreaChartType, e.pieChartColors, e.polarAreaLegend), l(n, 100, 0, e.radarChartData, e.radarChartLabels, e.radarChartType, e.lineChartColors, e.polarAreaLegend), l(n, 110, 0, e.bubbleChartData, e.lineChartLabels, e.bubbleChartOptions, e.bubbleChartType, e.lineChartColors, e.lineChartLegend), l(n, 120, 0, e.mixedPointChartData, e.lineChartLabels, e.mixedChartOptions, e.barChartType, e.barChartColors, e.lineChartLegend)
                }, null)
            }
            var g = t["\u0275ccf"]("ms-charts", c, function(l) {
                    return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 1, "ms-charts", [], [
                        [40, "@fadeInAnimation", 0]
                    ], null, null, d, r)), t["\u0275did"](1, 114688, null, 0, c, [s.a], null, null)], function(l, n) {
                        l(n, 1, 0)
                    }, function(l, n) {
                        l(n, 0, 0, !0)
                    })
                }, {}, {}, []),
                h = e("Wnl8"),
                m = e("LKRB"),
                p = e("8ubM"),
                v = e("AHdH"),
                x = e("Ywhj"),
                f = e("R+s0"),
                b = e("k79+"),
                y = e("Vug8"),
                C = e("k/Rj"),
                k = e("Se1k"),
                w = e("nJx2"),
                L = e("Ip0R"),
                A = e("yH0T"),
                T = e("+vzl"),
                S = e("wLzX"),
                D = e("RRcI"),
                R = e("lTBp"),
                F = e("N7ko"),
                E = t["\u0275crt"]({
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
                });

            function I(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 16777216, null, null, 2, ":svg:g", [
                    ["ngx-charts-bar", ""],
                    ["ngx-tooltip", ""]
                ], [
                    [24, "@animationState", 0]
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
                    var a = !0,
                        i = l.component;
                    return "focusin" === n && (a = !1 !== t["\u0275nov"](l, 1).onFocus() && a), "blur" === n && (a = !1 !== t["\u0275nov"](l, 1).onBlur() && a), "mouseenter" === n && (a = !1 !== t["\u0275nov"](l, 1).onMouseEnter() && a), "mouseleave" === n && (a = !1 !== t["\u0275nov"](l, 1).onMouseLeave(e.target) && a), "click" === n && (a = !1 !== t["\u0275nov"](l, 1).onMouseClick() && a), "mouseenter" === n && (a = !1 !== t["\u0275nov"](l, 2).onMouseEnter() && a), "mouseleave" === n && (a = !1 !== t["\u0275nov"](l, 2).onMouseLeave() && a), "select" === n && (a = !1 !== i.click(e) && a), "activate" === n && (a = !1 !== i.activate.emit(e) && a), "deactivate" === n && (a = !1 !== i.deactivate.emit(e) && a), a
                }, A.b, A.a)), t["\u0275did"](1, 147456, null, 0, T.a, [C.a, t.ViewContainerRef, t.Renderer], {
                    tooltipTitle: [0, "tooltipTitle"],
                    tooltipDisabled: [1, "tooltipDisabled"],
                    tooltipPlacement: [2, "tooltipPlacement"],
                    tooltipType: [3, "tooltipType"],
                    tooltipTemplate: [4, "tooltipTemplate"],
                    tooltipContext: [5, "tooltipContext"]
                }, null), t["\u0275did"](2, 573440, null, 0, S.a, [t.ElementRef], {
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
                    l(n, 1, 0, e.tooltipTemplate ? void 0 : n.context.$implicit.tooltipText, e.tooltipDisabled, e.tooltipPlacement, e.tooltipType, e.tooltipTemplate, n.context.$implicit.data), l(n, 2, 1, [n.context.$implicit.color, n.context.$implicit.data, n.context.$implicit.width, n.context.$implicit.height, n.context.$implicit.x, n.context.$implicit.y, "horizontal", n.context.$implicit.roundEdges, e.gradient, e.isActive(n.context.$implicit.data), n.context.$implicit.gradientStops, e.animations])
                }, function(l, n) {
                    l(n, 0, 0, "active")
                })
            }

            function O(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-bar-label", ""]
                ], null, [
                    [null, "dimensionsChanged"]
                ], function(l, n, e) {
                    var t = !0;
                    return "dimensionsChanged" === n && (t = !1 !== l.component.dataLabelWidthChanged.emit({
                        size: e,
                        index: l.context.index
                    }) && t), t
                }, D.b, D.a)), t["\u0275did"](1, 4767744, null, 0, R.a, [t.ElementRef], {
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
                    l(n, 1, 0, n.context.$implicit.total, n.component.dataLabelFormatting, n.context.$implicit.x, n.context.$implicit.y, n.context.$implicit.width, n.context.$implicit.height, "horizontal")
                }, null)
            }

            function $(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 2, ":svg:g", [], null, null, null, null, null)), (l()(), t["\u0275and"](16777216, null, null, 1, null, O)), t["\u0275did"](2, 802816, null, 0, L.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                    ngForOf: [0, "ngForOf"],
                    ngForTrackBy: [1, "ngForTrackBy"]
                }, null)], function(l, n) {
                    var e = n.component;
                    l(n, 2, 0, e.barsForDataLabels, e.trackDataLabelBy)
                }, null)
            }

            function B(l) {
                return t["\u0275vid"](2, [(l()(), t["\u0275and"](16777216, null, null, 1, null, I)), t["\u0275did"](1, 802816, null, 0, L.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                    ngForOf: [0, "ngForOf"],
                    ngForTrackBy: [1, "ngForTrackBy"]
                }, null), (l()(), t["\u0275and"](16777216, null, null, 1, null, $)), t["\u0275did"](3, 16384, null, 0, L.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(l, n) {
                    var e = n.component;
                    l(n, 1, 0, e.bars, e.trackBy), l(n, 3, 0, e.showDataLabel)
                }, null)
            }
            var N = e("R3sY"),
                z = t["\u0275crt"]({
                    encapsulation: 2,
                    styles: [p.a],
                    data: {}
                });

            function V(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-x-axis", ""]
                ], null, [
                    [null, "dimensionsChanged"]
                ], function(l, n, e) {
                    var t = !0;
                    return "dimensionsChanged" === n && (t = !1 !== l.component.updateXAxisHeight(e) && t), t
                }, v.b, v.a)), t["\u0275did"](1, 573440, null, 0, x.a, [], {
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

            function Y(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-y-axis", ""]
                ], null, [
                    [null, "dimensionsChanged"]
                ], function(l, n, e) {
                    var t = !0;
                    return "dimensionsChanged" === n && (t = !1 !== l.component.updateYAxisWidth(e) && t), t
                }, f.b, f.a)), t["\u0275did"](1, 573440, null, 0, b.a, [], {
                    yScale: [0, "yScale"],
                    dims: [1, "dims"],
                    tickFormatting: [2, "tickFormatting"],
                    ticks: [3, "ticks"],
                    showLabel: [4, "showLabel"],
                    labelText: [5, "labelText"],
                    yAxisOffset: [6, "yAxisOffset"]
                }, {
                    dimensionsChanged: "dimensionsChanged"
                })], function(l, n) {
                    var e = n.component;
                    l(n, 1, 0, e.yScale, e.dims, e.yAxisTickFormatting, e.yAxisTicks, e.showYAxisLabel, e.yAxisLabel, e.dataLabelMaxWidth.negative)
                }, null)
            }

            function X(l) {
                return t["\u0275vid"](2, [(l()(), t["\u0275eld"](0, 16777216, null, null, 10, "ngx-charts-chart", [], null, [
                    [null, "legendLabelClick"],
                    [null, "legendLabelActivate"],
                    [null, "legendLabelDeactivate"]
                ], function(l, n, e) {
                    var t = !0,
                        a = l.component;
                    return "legendLabelClick" === n && (t = !1 !== a.onClick(e) && t), "legendLabelActivate" === n && (t = !1 !== a.onActivate(e) && t), "legendLabelDeactivate" === n && (t = !1 !== a.onDeactivate(e) && t), t
                }, y.b, y.a)), t["\u0275prd"](512, null, C.a, C.a, [k.a]), t["\u0275did"](2, 573440, null, 0, w.a, [t.ViewContainerRef, C.a], {
                    view: [0, "view"],
                    showLegend: [1, "showLegend"],
                    legendOptions: [2, "legendOptions"],
                    activeEntries: [3, "activeEntries"],
                    animations: [4, "animations"]
                }, {
                    legendLabelClick: "legendLabelClick",
                    legendLabelActivate: "legendLabelActivate",
                    legendLabelDeactivate: "legendLabelDeactivate"
                }), t["\u0275pad"](3, 2), (l()(), t["\u0275eld"](4, 0, null, 0, 6, ":svg:g", [
                    ["class", "bar-chart chart"]
                ], [
                    [1, "transform", 0]
                ], null, null, null, null)), (l()(), t["\u0275and"](16777216, null, null, 1, null, V)), t["\u0275did"](6, 16384, null, 0, L.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), t["\u0275and"](16777216, null, null, 1, null, Y)), t["\u0275did"](8, 16384, null, 0, L.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), t["\u0275eld"](9, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-series-horizontal", ""]
                ], null, [
                    [null, "select"],
                    [null, "activate"],
                    [null, "deactivate"],
                    [null, "dataLabelWidthChanged"]
                ], function(l, n, e) {
                    var t = !0,
                        a = l.component;
                    return "select" === n && (t = !1 !== a.onClick(e) && t), "activate" === n && (t = !1 !== a.onActivate(e) && t), "deactivate" === n && (t = !1 !== a.onDeactivate(e) && t), "dataLabelWidthChanged" === n && (t = !1 !== a.onDataLabelMaxWidthChanged(e) && t), t
                }, B, E)), t["\u0275did"](10, 573440, null, 0, F.a, [], {
                    dims: [0, "dims"],
                    series: [1, "series"],
                    xScale: [2, "xScale"],
                    yScale: [3, "yScale"],
                    colors: [4, "colors"],
                    tooltipDisabled: [5, "tooltipDisabled"],
                    gradient: [6, "gradient"],
                    activeEntries: [7, "activeEntries"],
                    tooltipTemplate: [8, "tooltipTemplate"],
                    roundEdges: [9, "roundEdges"],
                    animations: [10, "animations"],
                    showDataLabel: [11, "showDataLabel"],
                    dataLabelFormatting: [12, "dataLabelFormatting"]
                }, {
                    select: "select",
                    activate: "activate",
                    deactivate: "deactivate",
                    dataLabelWidthChanged: "dataLabelWidthChanged"
                })], function(l, n) {
                    var e = n.component;
                    l(n, 2, 0, l(n, 3, 0, e.width, e.height), e.legend, e.legendOptions, e.activeEntries, e.animations), l(n, 6, 0, e.xAxis), l(n, 8, 0, e.yAxis), l(n, 10, 1, [e.dims, e.results, e.xScale, e.yScale, e.colors, e.tooltipDisabled, e.gradient, e.activeEntries, e.tooltipTemplate, e.roundEdges, e.animations, e.showDataLabel, e.dataLabelFormatting])
                }, function(l, n) {
                    l(n, 4, 0, n.component.transform)
                })
            }
            var P = e("Nx8C"),
                H = e("dP00"),
                M = e("u51M"),
                W = t["\u0275crt"]({
                    encapsulation: 2,
                    styles: [],
                    data: {}
                });

            function G(l) {
                return t["\u0275vid"](2, [(l()(), t["\u0275eld"](0, 0, null, null, 0, ":svg:rect", [
                    ["class", "gridpanel"],
                    ["stroke", "none"]
                ], [
                    [1, "height", 0],
                    [1, "width", 0],
                    [1, "x", 0],
                    [1, "y", 0]
                ], null, null, null, null))], null, function(l, n) {
                    var e = n.component;
                    l(n, 0, 0, e.height, e.width, e.x, e.y)
                })
            }
            var j = e("agxj"),
                Z = t["\u0275crt"]({
                    encapsulation: 2,
                    styles: [],
                    data: {}
                });

            function q(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-grid-panel", ""]
                ], [
                    [2, "grid-panel", null],
                    [2, "odd", null],
                    [2, "even", null]
                ], null, null, G, W)), t["\u0275did"](1, 49152, null, 0, M.a, [], {
                    width: [0, "width"],
                    height: [1, "height"],
                    x: [2, "x"],
                    y: [3, "y"]
                }, null)], function(l, n) {
                    l(n, 1, 0, n.context.$implicit.width, n.context.$implicit.height, n.context.$implicit.x, n.context.$implicit.y)
                }, function(l, n) {
                    l(n, 0, 0, !0, "odd" === n.context.$implicit.class, "even" === n.context.$implicit.class)
                })
            }

            function _(l) {
                return t["\u0275vid"](2, [(l()(), t["\u0275and"](16777216, null, null, 1, null, q)), t["\u0275did"](1, 802816, null, 0, L.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                    ngForOf: [0, "ngForOf"]
                }, null)], function(l, n) {
                    l(n, 1, 0, n.component.gridPanels)
                }, null)
            }
            var U = e("Rv0o"),
                J = t["\u0275crt"]({
                    encapsulation: 2,
                    styles: [p.a],
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
                                        opacity: 1,
                                        transform: "*"
                                    },
                                    offset: null
                                }, {
                                    type: 4,
                                    styles: {
                                        type: 6,
                                        styles: {
                                            opacity: 0,
                                            transform: "scale(0)"
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

            function K(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-x-axis", ""]
                ], null, [
                    [null, "dimensionsChanged"]
                ], function(l, n, e) {
                    var t = !0;
                    return "dimensionsChanged" === n && (t = !1 !== l.component.updateXAxisHeight(e) && t), t
                }, v.b, v.a)), t["\u0275did"](1, 573440, null, 0, x.a, [], {
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
                    l(n, 1, 0, e.groupScale, e.dims, e.xAxisTickFormatting, e.showXAxisLabel, e.xAxisLabel, e.xAxisTicks, e.dataLabelMaxHeight.negative)
                }, null)
            }

            function Q(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-y-axis", ""]
                ], null, [
                    [null, "dimensionsChanged"]
                ], function(l, n, e) {
                    var t = !0;
                    return "dimensionsChanged" === n && (t = !1 !== l.component.updateYAxisWidth(e) && t), t
                }, f.b, f.a)), t["\u0275did"](1, 573440, null, 0, b.a, [], {
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
                    l(n, 1, 0, e.valueScale, e.dims, e.yAxisTickFormatting, e.yAxisTicks, e.showGridLines, e.showYAxisLabel, e.yAxisLabel)
                }, null)
            }

            function ll(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-series-vertical", ""]
                ], [
                    [24, "@animationState", 0],
                    [1, "transform", 0]
                ], [
                    [null, "select"],
                    [null, "activate"],
                    [null, "deactivate"],
                    [null, "dataLabelHeightChanged"]
                ], function(l, n, e) {
                    var t = !0,
                        a = l.component;
                    return "select" === n && (t = !1 !== a.onClick(e, l.context.$implicit) && t), "activate" === n && (t = !1 !== a.onActivate(e, l.context.$implicit) && t), "deactivate" === n && (t = !1 !== a.onDeactivate(e, l.context.$implicit) && t), "dataLabelHeightChanged" === n && (t = !1 !== a.onDataLabelMaxHeightChanged(e, l.context.index) && t), t
                }, P.b, P.a)), t["\u0275did"](1, 573440, null, 0, H.b, [], {
                    dims: [0, "dims"],
                    series: [1, "series"],
                    xScale: [2, "xScale"],
                    yScale: [3, "yScale"],
                    colors: [4, "colors"],
                    gradient: [5, "gradient"],
                    activeEntries: [6, "activeEntries"],
                    seriesName: [7, "seriesName"],
                    tooltipDisabled: [8, "tooltipDisabled"],
                    tooltipTemplate: [9, "tooltipTemplate"],
                    roundEdges: [10, "roundEdges"],
                    animations: [11, "animations"],
                    showDataLabel: [12, "showDataLabel"],
                    dataLabelFormatting: [13, "dataLabelFormatting"]
                }, {
                    select: "select",
                    activate: "activate",
                    deactivate: "deactivate",
                    dataLabelHeightChanged: "dataLabelHeightChanged"
                })], function(l, n) {
                    var e = n.component;
                    l(n, 1, 1, [e.dims, n.context.$implicit.series, e.innerScale, e.valueScale, e.colors, e.gradient, e.activeEntries, n.context.$implicit.name, e.tooltipDisabled, e.tooltipTemplate, e.roundEdges, e.animations, e.showDataLabel, e.dataLabelFormatting])
                }, function(l, n) {
                    l(n, 0, 0, "active", n.component.groupTransform(n.context.$implicit))
                })
            }

            function nl(l) {
                return t["\u0275vid"](2, [(l()(), t["\u0275eld"](0, 16777216, null, null, 12, "ngx-charts-chart", [], null, [
                    [null, "legendLabelActivate"],
                    [null, "legendLabelDeactivate"],
                    [null, "legendLabelClick"]
                ], function(l, n, e) {
                    var t = !0,
                        a = l.component;
                    return "legendLabelActivate" === n && (t = !1 !== a.onActivate(e) && t), "legendLabelDeactivate" === n && (t = !1 !== a.onDeactivate(e) && t), "legendLabelClick" === n && (t = !1 !== a.onClick(e) && t), t
                }, y.b, y.a)), t["\u0275prd"](512, null, C.a, C.a, [k.a]), t["\u0275did"](2, 573440, null, 0, w.a, [t.ViewContainerRef, C.a], {
                    view: [0, "view"],
                    showLegend: [1, "showLegend"],
                    legendOptions: [2, "legendOptions"],
                    activeEntries: [3, "activeEntries"],
                    animations: [4, "animations"]
                }, {
                    legendLabelClick: "legendLabelClick",
                    legendLabelActivate: "legendLabelActivate",
                    legendLabelDeactivate: "legendLabelDeactivate"
                }), t["\u0275pad"](3, 2), (l()(), t["\u0275eld"](4, 0, null, 0, 8, ":svg:g", [
                    ["class", "bar-chart chart"]
                ], [
                    [1, "transform", 0]
                ], null, null, null, null)), (l()(), t["\u0275eld"](5, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-grid-panel-series", ""],
                    ["orient", "vertical"]
                ], null, null, null, _, Z)), t["\u0275did"](6, 573440, null, 0, j.a, [], {
                    data: [0, "data"],
                    dims: [1, "dims"],
                    xScale: [2, "xScale"],
                    yScale: [3, "yScale"],
                    orient: [4, "orient"]
                }, null), (l()(), t["\u0275and"](16777216, null, null, 1, null, K)), t["\u0275did"](8, 16384, null, 0, L.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), t["\u0275and"](16777216, null, null, 1, null, Q)), t["\u0275did"](10, 16384, null, 0, L.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), t["\u0275and"](16777216, null, null, 1, null, ll)), t["\u0275did"](12, 802816, null, 0, L.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                    ngForOf: [0, "ngForOf"],
                    ngForTrackBy: [1, "ngForTrackBy"]
                }, null)], function(l, n) {
                    var e = n.component;
                    l(n, 2, 0, l(n, 3, 0, e.width, e.height), e.legend, e.legendOptions, e.activeEntries, e.animations), l(n, 6, 0, e.results, e.dims, e.groupScale, e.valueScale, "vertical"), l(n, 8, 0, e.xAxis), l(n, 10, 0, e.yAxis), l(n, 12, 0, e.results, e.trackBy)
                }, function(l, n) {
                    l(n, 4, 0, n.component.transform)
                })
            }
            var el = e("iu5E"),
                tl = t["\u0275crt"]({
                    encapsulation: 2,
                    styles: [p.a],
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
                                        opacity: 1,
                                        transform: "*"
                                    },
                                    offset: null
                                }, {
                                    type: 4,
                                    styles: {
                                        type: 6,
                                        styles: {
                                            opacity: 0,
                                            transform: "scale(0)"
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

            function al(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-x-axis", ""]
                ], null, [
                    [null, "dimensionsChanged"]
                ], function(l, n, e) {
                    var t = !0;
                    return "dimensionsChanged" === n && (t = !1 !== l.component.updateXAxisHeight(e) && t), t
                }, v.b, v.a)), t["\u0275did"](1, 573440, null, 0, x.a, [], {
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
                    l(n, 1, 0, e.valueScale, e.dims, e.xAxisTickFormatting, e.showGridLines, e.showXAxisLabel, e.xAxisLabel, e.xAxisTicks)
                }, null)
            }

            function il(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-y-axis", ""]
                ], null, [
                    [null, "dimensionsChanged"]
                ], function(l, n, e) {
                    var t = !0;
                    return "dimensionsChanged" === n && (t = !1 !== l.component.updateYAxisWidth(e) && t), t
                }, f.b, f.a)), t["\u0275did"](1, 573440, null, 0, b.a, [], {
                    yScale: [0, "yScale"],
                    dims: [1, "dims"],
                    tickFormatting: [2, "tickFormatting"],
                    ticks: [3, "ticks"],
                    showLabel: [4, "showLabel"],
                    labelText: [5, "labelText"],
                    yAxisOffset: [6, "yAxisOffset"]
                }, {
                    dimensionsChanged: "dimensionsChanged"
                })], function(l, n) {
                    var e = n.component;
                    l(n, 1, 0, e.groupScale, e.dims, e.yAxisTickFormatting, e.yAxisTicks, e.showYAxisLabel, e.yAxisLabel, e.dataLabelMaxWidth.negative)
                }, null)
            }

            function ul(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 2, ":svg:g", [], [
                    [24, "@animationState", 0],
                    [1, "transform", 0]
                ], null, null, null, null)), (l()(), t["\u0275eld"](1, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-series-horizontal", ""]
                ], null, [
                    [null, "select"],
                    [null, "activate"],
                    [null, "deactivate"],
                    [null, "dataLabelWidthChanged"]
                ], function(l, n, e) {
                    var t = !0,
                        a = l.component;
                    return "select" === n && (t = !1 !== a.onClick(e, l.context.$implicit) && t), "activate" === n && (t = !1 !== a.onActivate(e, l.context.$implicit) && t), "deactivate" === n && (t = !1 !== a.onDeactivate(e, l.context.$implicit) && t), "dataLabelWidthChanged" === n && (t = !1 !== a.onDataLabelMaxWidthChanged(e, l.context.index) && t), t
                }, B, E)), t["\u0275did"](2, 573440, null, 0, F.a, [], {
                    dims: [0, "dims"],
                    series: [1, "series"],
                    xScale: [2, "xScale"],
                    yScale: [3, "yScale"],
                    colors: [4, "colors"],
                    tooltipDisabled: [5, "tooltipDisabled"],
                    gradient: [6, "gradient"],
                    activeEntries: [7, "activeEntries"],
                    seriesName: [8, "seriesName"],
                    tooltipTemplate: [9, "tooltipTemplate"],
                    roundEdges: [10, "roundEdges"],
                    animations: [11, "animations"],
                    showDataLabel: [12, "showDataLabel"],
                    dataLabelFormatting: [13, "dataLabelFormatting"]
                }, {
                    select: "select",
                    activate: "activate",
                    deactivate: "deactivate",
                    dataLabelWidthChanged: "dataLabelWidthChanged"
                })], function(l, n) {
                    var e = n.component;
                    l(n, 2, 1, [e.dims, n.context.$implicit.series, e.valueScale, e.innerScale, e.colors, e.tooltipDisabled, e.gradient, e.activeEntries, n.context.$implicit.name, e.tooltipTemplate, e.roundEdges, e.animations, e.showDataLabel, e.dataLabelFormatting])
                }, function(l, n) {
                    l(n, 0, 0, "active", n.component.groupTransform(n.context.$implicit))
                })
            }

            function ol(l) {
                return t["\u0275vid"](2, [(l()(), t["\u0275eld"](0, 16777216, null, null, 12, "ngx-charts-chart", [], null, [
                    [null, "legendLabelActivate"],
                    [null, "legendLabelDeactivate"],
                    [null, "legendLabelClick"]
                ], function(l, n, e) {
                    var t = !0,
                        a = l.component;
                    return "legendLabelActivate" === n && (t = !1 !== a.onActivate(e) && t), "legendLabelDeactivate" === n && (t = !1 !== a.onDeactivate(e) && t), "legendLabelClick" === n && (t = !1 !== a.onClick(e) && t), t
                }, y.b, y.a)), t["\u0275prd"](512, null, C.a, C.a, [k.a]), t["\u0275did"](2, 573440, null, 0, w.a, [t.ViewContainerRef, C.a], {
                    view: [0, "view"],
                    showLegend: [1, "showLegend"],
                    legendOptions: [2, "legendOptions"],
                    activeEntries: [3, "activeEntries"],
                    animations: [4, "animations"]
                }, {
                    legendLabelClick: "legendLabelClick",
                    legendLabelActivate: "legendLabelActivate",
                    legendLabelDeactivate: "legendLabelDeactivate"
                }), t["\u0275pad"](3, 2), (l()(), t["\u0275eld"](4, 0, null, 0, 8, ":svg:g", [
                    ["class", "bar-chart chart"]
                ], [
                    [1, "transform", 0]
                ], null, null, null, null)), (l()(), t["\u0275eld"](5, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-grid-panel-series", ""],
                    ["orient", "horizontal"]
                ], null, null, null, _, Z)), t["\u0275did"](6, 573440, null, 0, j.a, [], {
                    data: [0, "data"],
                    dims: [1, "dims"],
                    xScale: [2, "xScale"],
                    yScale: [3, "yScale"],
                    orient: [4, "orient"]
                }, null), (l()(), t["\u0275and"](16777216, null, null, 1, null, al)), t["\u0275did"](8, 16384, null, 0, L.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), t["\u0275and"](16777216, null, null, 1, null, il)), t["\u0275did"](10, 16384, null, 0, L.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), t["\u0275and"](16777216, null, null, 1, null, ul)), t["\u0275did"](12, 802816, null, 0, L.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                    ngForOf: [0, "ngForOf"],
                    ngForTrackBy: [1, "ngForTrackBy"]
                }, null)], function(l, n) {
                    var e = n.component;
                    l(n, 2, 0, l(n, 3, 0, e.width, e.height), e.legend, e.legendOptions, e.activeEntries, e.animations), l(n, 6, 0, e.results, e.dims, e.valueScale, e.groupScale, "horizontal"), l(n, 8, 0, e.xAxis), l(n, 10, 0, e.yAxis), l(n, 12, 0, e.results, e.trackBy)
                }, function(l, n) {
                    l(n, 4, 0, n.component.transform)
                })
            }
            var sl = e("QIkk"),
                cl = t["\u0275crt"]({
                    encapsulation: 2,
                    styles: [p.a],
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
                                        opacity: 1,
                                        transform: "*"
                                    },
                                    offset: null
                                }, {
                                    type: 4,
                                    styles: {
                                        type: 6,
                                        styles: {
                                            opacity: 0,
                                            transform: "scale(0)"
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

            function rl(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-x-axis", ""]
                ], null, [
                    [null, "dimensionsChanged"]
                ], function(l, n, e) {
                    var t = !0;
                    return "dimensionsChanged" === n && (t = !1 !== l.component.updateXAxisHeight(e) && t), t
                }, v.b, v.a)), t["\u0275did"](1, 573440, null, 0, x.a, [], {
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

            function dl(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-y-axis", ""]
                ], null, [
                    [null, "dimensionsChanged"]
                ], function(l, n, e) {
                    var t = !0;
                    return "dimensionsChanged" === n && (t = !1 !== l.component.updateYAxisWidth(e) && t), t
                }, f.b, f.a)), t["\u0275did"](1, 573440, null, 0, b.a, [], {
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

            function gl(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 2, ":svg:g", [], [
                    [24, "@animationState", 0],
                    [1, "transform", 0]
                ], null, null, null, null)), (l()(), t["\u0275eld"](1, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-series-vertical", ""],
                    ["type", "stacked"]
                ], null, [
                    [null, "select"],
                    [null, "activate"],
                    [null, "deactivate"],
                    [null, "dataLabelHeightChanged"]
                ], function(l, n, e) {
                    var t = !0,
                        a = l.component;
                    return "select" === n && (t = !1 !== a.onClick(e, l.context.$implicit) && t), "activate" === n && (t = !1 !== a.onActivate(e, l.context.$implicit) && t), "deactivate" === n && (t = !1 !== a.onDeactivate(e, l.context.$implicit) && t), "dataLabelHeightChanged" === n && (t = !1 !== a.onDataLabelMaxHeightChanged(e, l.context.index) && t), t
                }, P.b, P.a)), t["\u0275did"](2, 573440, null, 0, H.b, [], {
                    dims: [0, "dims"],
                    type: [1, "type"],
                    series: [2, "series"],
                    xScale: [3, "xScale"],
                    yScale: [4, "yScale"],
                    colors: [5, "colors"],
                    gradient: [6, "gradient"],
                    activeEntries: [7, "activeEntries"],
                    seriesName: [8, "seriesName"],
                    tooltipDisabled: [9, "tooltipDisabled"],
                    tooltipTemplate: [10, "tooltipTemplate"],
                    animations: [11, "animations"],
                    showDataLabel: [12, "showDataLabel"],
                    dataLabelFormatting: [13, "dataLabelFormatting"]
                }, {
                    select: "select",
                    activate: "activate",
                    deactivate: "deactivate",
                    dataLabelHeightChanged: "dataLabelHeightChanged"
                })], function(l, n) {
                    var e = n.component;
                    l(n, 2, 1, [e.dims, "stacked", n.context.$implicit.series, e.xScale, e.yScale, e.colors, e.gradient, e.activeEntries, n.context.$implicit.name, e.tooltipDisabled, e.tooltipTemplate, e.animations, e.showDataLabel, e.dataLabelFormatting])
                }, function(l, n) {
                    l(n, 0, 0, "active", n.component.groupTransform(n.context.$implicit))
                })
            }

            function hl(l) {
                return t["\u0275vid"](2, [(l()(), t["\u0275eld"](0, 16777216, null, null, 10, "ngx-charts-chart", [], null, [
                    [null, "legendLabelActivate"],
                    [null, "legendLabelDeactivate"],
                    [null, "legendLabelClick"]
                ], function(l, n, e) {
                    var t = !0,
                        a = l.component;
                    return "legendLabelActivate" === n && (t = !1 !== a.onActivate(e) && t), "legendLabelDeactivate" === n && (t = !1 !== a.onDeactivate(e) && t), "legendLabelClick" === n && (t = !1 !== a.onClick(e) && t), t
                }, y.b, y.a)), t["\u0275prd"](512, null, C.a, C.a, [k.a]), t["\u0275did"](2, 573440, null, 0, w.a, [t.ViewContainerRef, C.a], {
                    view: [0, "view"],
                    showLegend: [1, "showLegend"],
                    legendOptions: [2, "legendOptions"],
                    activeEntries: [3, "activeEntries"],
                    animations: [4, "animations"]
                }, {
                    legendLabelClick: "legendLabelClick",
                    legendLabelActivate: "legendLabelActivate",
                    legendLabelDeactivate: "legendLabelDeactivate"
                }), t["\u0275pad"](3, 2), (l()(), t["\u0275eld"](4, 0, null, 0, 6, ":svg:g", [
                    ["class", "bar-chart chart"]
                ], [
                    [1, "transform", 0]
                ], null, null, null, null)), (l()(), t["\u0275and"](16777216, null, null, 1, null, rl)), t["\u0275did"](6, 16384, null, 0, L.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), t["\u0275and"](16777216, null, null, 1, null, dl)), t["\u0275did"](8, 16384, null, 0, L.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), t["\u0275and"](16777216, null, null, 1, null, gl)), t["\u0275did"](10, 802816, null, 0, L.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                    ngForOf: [0, "ngForOf"],
                    ngForTrackBy: [1, "ngForTrackBy"]
                }, null)], function(l, n) {
                    var e = n.component;
                    l(n, 2, 0, l(n, 3, 0, e.width, e.height), e.legend, e.legendOptions, e.activeEntries, e.animations), l(n, 6, 0, e.xAxis), l(n, 8, 0, e.yAxis), l(n, 10, 0, e.results, e.trackBy)
                }, function(l, n) {
                    l(n, 4, 0, n.component.transform)
                })
            }
            var ml = e("MWdn"),
                pl = t["\u0275crt"]({
                    encapsulation: 2,
                    styles: [p.a],
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
                                        opacity: 1,
                                        transform: "*"
                                    },
                                    offset: null
                                }, {
                                    type: 4,
                                    styles: {
                                        type: 6,
                                        styles: {
                                            opacity: 0,
                                            transform: "scale(0)"
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

            function vl(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-x-axis", ""]
                ], null, [
                    [null, "dimensionsChanged"]
                ], function(l, n, e) {
                    var t = !0;
                    return "dimensionsChanged" === n && (t = !1 !== l.component.updateXAxisHeight(e) && t), t
                }, v.b, v.a)), t["\u0275did"](1, 573440, null, 0, x.a, [], {
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

            function xl(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-y-axis", ""]
                ], null, [
                    [null, "dimensionsChanged"]
                ], function(l, n, e) {
                    var t = !0;
                    return "dimensionsChanged" === n && (t = !1 !== l.component.updateYAxisWidth(e) && t), t
                }, f.b, f.a)), t["\u0275did"](1, 573440, null, 0, b.a, [], {
                    yScale: [0, "yScale"],
                    dims: [1, "dims"],
                    tickFormatting: [2, "tickFormatting"],
                    ticks: [3, "ticks"],
                    showLabel: [4, "showLabel"],
                    labelText: [5, "labelText"],
                    yAxisOffset: [6, "yAxisOffset"]
                }, {
                    dimensionsChanged: "dimensionsChanged"
                })], function(l, n) {
                    var e = n.component;
                    l(n, 1, 0, e.yScale, e.dims, e.yAxisTickFormatting, e.yAxisTicks, e.showYAxisLabel, e.yAxisLabel, e.dataLabelMaxWidth.negative)
                }, null)
            }

            function fl(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 2, ":svg:g", [], [
                    [24, "@animationState", 0],
                    [1, "transform", 0]
                ], null, null, null, null)), (l()(), t["\u0275eld"](1, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-series-horizontal", ""],
                    ["type", "stacked"]
                ], null, [
                    [null, "select"],
                    [null, "activate"],
                    [null, "deactivate"],
                    [null, "dataLabelWidthChanged"]
                ], function(l, n, e) {
                    var t = !0,
                        a = l.component;
                    return "select" === n && (t = !1 !== a.onClick(e, l.context.$implicit) && t), "activate" === n && (t = !1 !== a.onActivate(e, l.context.$implicit) && t), "deactivate" === n && (t = !1 !== a.onDeactivate(e, l.context.$implicit) && t), "dataLabelWidthChanged" === n && (t = !1 !== a.onDataLabelMaxWidthChanged(e, l.context.index) && t), t
                }, B, E)), t["\u0275did"](2, 573440, null, 0, F.a, [], {
                    dims: [0, "dims"],
                    type: [1, "type"],
                    series: [2, "series"],
                    xScale: [3, "xScale"],
                    yScale: [4, "yScale"],
                    colors: [5, "colors"],
                    tooltipDisabled: [6, "tooltipDisabled"],
                    gradient: [7, "gradient"],
                    activeEntries: [8, "activeEntries"],
                    seriesName: [9, "seriesName"],
                    tooltipTemplate: [10, "tooltipTemplate"],
                    animations: [11, "animations"],
                    showDataLabel: [12, "showDataLabel"],
                    dataLabelFormatting: [13, "dataLabelFormatting"]
                }, {
                    select: "select",
                    activate: "activate",
                    deactivate: "deactivate",
                    dataLabelWidthChanged: "dataLabelWidthChanged"
                })], function(l, n) {
                    var e = n.component;
                    l(n, 2, 1, [e.dims, "stacked", n.context.$implicit.series, e.xScale, e.yScale, e.colors, e.tooltipDisabled, e.gradient, e.activeEntries, n.context.$implicit.name, e.tooltipTemplate, e.animations, e.showDataLabel, e.dataLabelFormatting])
                }, function(l, n) {
                    l(n, 0, 0, "active", n.component.groupTransform(n.context.$implicit))
                })
            }

            function bl(l) {
                return t["\u0275vid"](2, [(l()(), t["\u0275eld"](0, 16777216, null, null, 10, "ngx-charts-chart", [], null, [
                    [null, "legendLabelActivate"],
                    [null, "legendLabelDeactivate"],
                    [null, "legendLabelClick"]
                ], function(l, n, e) {
                    var t = !0,
                        a = l.component;
                    return "legendLabelActivate" === n && (t = !1 !== a.onActivate(e) && t), "legendLabelDeactivate" === n && (t = !1 !== a.onDeactivate(e) && t), "legendLabelClick" === n && (t = !1 !== a.onClick(e) && t), t
                }, y.b, y.a)), t["\u0275prd"](512, null, C.a, C.a, [k.a]), t["\u0275did"](2, 573440, null, 0, w.a, [t.ViewContainerRef, C.a], {
                    view: [0, "view"],
                    showLegend: [1, "showLegend"],
                    legendOptions: [2, "legendOptions"],
                    activeEntries: [3, "activeEntries"],
                    animations: [4, "animations"]
                }, {
                    legendLabelClick: "legendLabelClick",
                    legendLabelActivate: "legendLabelActivate",
                    legendLabelDeactivate: "legendLabelDeactivate"
                }), t["\u0275pad"](3, 2), (l()(), t["\u0275eld"](4, 0, null, 0, 6, ":svg:g", [
                    ["class", "bar-chart chart"]
                ], [
                    [1, "transform", 0]
                ], null, null, null, null)), (l()(), t["\u0275and"](16777216, null, null, 1, null, vl)), t["\u0275did"](6, 16384, null, 0, L.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), t["\u0275and"](16777216, null, null, 1, null, xl)), t["\u0275did"](8, 16384, null, 0, L.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), t["\u0275and"](16777216, null, null, 1, null, fl)), t["\u0275did"](10, 802816, null, 0, L.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                    ngForOf: [0, "ngForOf"],
                    ngForTrackBy: [1, "ngForTrackBy"]
                }, null)], function(l, n) {
                    var e = n.component;
                    l(n, 2, 0, l(n, 3, 0, e.width, e.height), e.legend, e.legendOptions, e.activeEntries, e.animations), l(n, 6, 0, e.xAxis), l(n, 8, 0, e.yAxis), l(n, 10, 0, e.results, e.trackBy)
                }, function(l, n) {
                    l(n, 4, 0, n.component.transform)
                })
            }
            var yl = e("t/dr"),
                Cl = t["\u0275crt"]({
                    encapsulation: 2,
                    styles: [p.a],
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
                                        opacity: 1,
                                        transform: "*"
                                    },
                                    offset: null
                                }, {
                                    type: 4,
                                    styles: {
                                        type: 6,
                                        styles: {
                                            opacity: 0,
                                            transform: "scale(0)"
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

            function kl(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-x-axis", ""]
                ], null, [
                    [null, "dimensionsChanged"]
                ], function(l, n, e) {
                    var t = !0;
                    return "dimensionsChanged" === n && (t = !1 !== l.component.updateXAxisHeight(e) && t), t
                }, v.b, v.a)), t["\u0275did"](1, 573440, null, 0, x.a, [], {
                    xScale: [0, "xScale"],
                    dims: [1, "dims"],
                    tickFormatting: [2, "tickFormatting"],
                    showLabel: [3, "showLabel"],
                    labelText: [4, "labelText"],
                    ticks: [5, "ticks"]
                }, {
                    dimensionsChanged: "dimensionsChanged"
                })], function(l, n) {
                    var e = n.component;
                    l(n, 1, 0, e.xScale, e.dims, e.xAxisTickFormatting, e.showXAxisLabel, e.xAxisLabel, e.xAxisTicks)
                }, null)
            }

            function wl(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-y-axis", ""]
                ], null, [
                    [null, "dimensionsChanged"]
                ], function(l, n, e) {
                    var t = !0;
                    return "dimensionsChanged" === n && (t = !1 !== l.component.updateYAxisWidth(e) && t), t
                }, f.b, f.a)), t["\u0275did"](1, 573440, null, 0, b.a, [], {
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

            function Ll(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 2, ":svg:g", [], [
                    [24, "@animationState", 0],
                    [1, "transform", 0]
                ], null, null, null, null)), (l()(), t["\u0275eld"](1, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-series-vertical", ""],
                    ["type", "normalized"]
                ], null, [
                    [null, "select"],
                    [null, "activate"],
                    [null, "deactivate"]
                ], function(l, n, e) {
                    var t = !0,
                        a = l.component;
                    return "select" === n && (t = !1 !== a.onClick(e, l.context.$implicit) && t), "activate" === n && (t = !1 !== a.onActivate(e, l.context.$implicit) && t), "deactivate" === n && (t = !1 !== a.onDeactivate(e, l.context.$implicit) && t), t
                }, P.b, P.a)), t["\u0275did"](2, 573440, null, 0, H.b, [], {
                    dims: [0, "dims"],
                    type: [1, "type"],
                    series: [2, "series"],
                    xScale: [3, "xScale"],
                    yScale: [4, "yScale"],
                    colors: [5, "colors"],
                    gradient: [6, "gradient"],
                    activeEntries: [7, "activeEntries"],
                    seriesName: [8, "seriesName"],
                    tooltipDisabled: [9, "tooltipDisabled"],
                    tooltipTemplate: [10, "tooltipTemplate"],
                    animations: [11, "animations"]
                }, {
                    select: "select",
                    activate: "activate",
                    deactivate: "deactivate"
                })], function(l, n) {
                    var e = n.component;
                    l(n, 2, 1, [e.dims, "normalized", n.context.$implicit.series, e.xScale, e.yScale, e.colors, e.gradient, e.activeEntries, n.context.$implicit.name, e.tooltipDisabled, e.tooltipTemplate, e.animations])
                }, function(l, n) {
                    l(n, 0, 0, "active", n.component.groupTransform(n.context.$implicit))
                })
            }

            function Al(l) {
                return t["\u0275vid"](2, [(l()(), t["\u0275eld"](0, 16777216, null, null, 10, "ngx-charts-chart", [], null, [
                    [null, "legendLabelActivate"],
                    [null, "legendLabelDeactivate"],
                    [null, "legendLabelClick"]
                ], function(l, n, e) {
                    var t = !0,
                        a = l.component;
                    return "legendLabelActivate" === n && (t = !1 !== a.onActivate(e) && t), "legendLabelDeactivate" === n && (t = !1 !== a.onDeactivate(e) && t), "legendLabelClick" === n && (t = !1 !== a.onClick(e) && t), t
                }, y.b, y.a)), t["\u0275prd"](512, null, C.a, C.a, [k.a]), t["\u0275did"](2, 573440, null, 0, w.a, [t.ViewContainerRef, C.a], {
                    view: [0, "view"],
                    showLegend: [1, "showLegend"],
                    legendOptions: [2, "legendOptions"],
                    activeEntries: [3, "activeEntries"],
                    animations: [4, "animations"]
                }, {
                    legendLabelClick: "legendLabelClick",
                    legendLabelActivate: "legendLabelActivate",
                    legendLabelDeactivate: "legendLabelDeactivate"
                }), t["\u0275pad"](3, 2), (l()(), t["\u0275eld"](4, 0, null, 0, 6, ":svg:g", [
                    ["class", "bar-chart chart"]
                ], [
                    [1, "transform", 0]
                ], null, null, null, null)), (l()(), t["\u0275and"](16777216, null, null, 1, null, kl)), t["\u0275did"](6, 16384, null, 0, L.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), t["\u0275and"](16777216, null, null, 1, null, wl)), t["\u0275did"](8, 16384, null, 0, L.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), t["\u0275and"](16777216, null, null, 1, null, Ll)), t["\u0275did"](10, 802816, null, 0, L.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                    ngForOf: [0, "ngForOf"],
                    ngForTrackBy: [1, "ngForTrackBy"]
                }, null)], function(l, n) {
                    var e = n.component;
                    l(n, 2, 0, l(n, 3, 0, e.width, e.height), e.legend, e.legendOptions, e.activeEntries, e.animations), l(n, 6, 0, e.xAxis), l(n, 8, 0, e.yAxis), l(n, 10, 0, e.results, e.trackBy)
                }, function(l, n) {
                    l(n, 4, 0, n.component.transform)
                })
            }
            var Tl = e("/lE0"),
                Sl = t["\u0275crt"]({
                    encapsulation: 2,
                    styles: [p.a],
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
                                        opacity: 1,
                                        transform: "*"
                                    },
                                    offset: null
                                }, {
                                    type: 4,
                                    styles: {
                                        type: 6,
                                        styles: {
                                            opacity: 0,
                                            transform: "scale(0)"
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

            function Dl(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-x-axis", ""]
                ], null, [
                    [null, "dimensionsChanged"]
                ], function(l, n, e) {
                    var t = !0;
                    return "dimensionsChanged" === n && (t = !1 !== l.component.updateXAxisHeight(e) && t), t
                }, v.b, v.a)), t["\u0275did"](1, 573440, null, 0, x.a, [], {
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

            function Rl(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-y-axis", ""]
                ], null, [
                    [null, "dimensionsChanged"]
                ], function(l, n, e) {
                    var t = !0;
                    return "dimensionsChanged" === n && (t = !1 !== l.component.updateYAxisWidth(e) && t), t
                }, f.b, f.a)), t["\u0275did"](1, 573440, null, 0, b.a, [], {
                    yScale: [0, "yScale"],
                    dims: [1, "dims"],
                    tickFormatting: [2, "tickFormatting"],
                    ticks: [3, "ticks"],
                    showLabel: [4, "showLabel"],
                    labelText: [5, "labelText"]
                }, {
                    dimensionsChanged: "dimensionsChanged"
                })], function(l, n) {
                    var e = n.component;
                    l(n, 1, 0, e.yScale, e.dims, e.yAxisTickFormatting, e.yAxisTicks, e.showYAxisLabel, e.yAxisLabel)
                }, null)
            }

            function Fl(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 2, ":svg:g", [], [
                    [24, "@animationState", 0],
                    [1, "transform", 0]
                ], null, null, null, null)), (l()(), t["\u0275eld"](1, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-series-horizontal", ""],
                    ["type", "normalized"]
                ], null, [
                    [null, "select"],
                    [null, "activate"],
                    [null, "deactivate"]
                ], function(l, n, e) {
                    var t = !0,
                        a = l.component;
                    return "select" === n && (t = !1 !== a.onClick(e, l.context.$implicit) && t), "activate" === n && (t = !1 !== a.onActivate(e, l.context.$implicit) && t), "deactivate" === n && (t = !1 !== a.onDeactivate(e, l.context.$implicit) && t), t
                }, B, E)), t["\u0275did"](2, 573440, null, 0, F.a, [], {
                    dims: [0, "dims"],
                    type: [1, "type"],
                    series: [2, "series"],
                    xScale: [3, "xScale"],
                    yScale: [4, "yScale"],
                    colors: [5, "colors"],
                    tooltipDisabled: [6, "tooltipDisabled"],
                    gradient: [7, "gradient"],
                    activeEntries: [8, "activeEntries"],
                    seriesName: [9, "seriesName"],
                    tooltipTemplate: [10, "tooltipTemplate"],
                    animations: [11, "animations"]
                }, {
                    select: "select",
                    activate: "activate",
                    deactivate: "deactivate"
                })], function(l, n) {
                    var e = n.component;
                    l(n, 2, 1, [e.dims, "normalized", n.context.$implicit.series, e.xScale, e.yScale, e.colors, e.tooltipDisabled, e.gradient, e.activeEntries, n.context.$implicit.name, e.tooltipTemplate, e.animations])
                }, function(l, n) {
                    l(n, 0, 0, "active", n.component.groupTransform(n.context.$implicit))
                })
            }

            function El(l) {
                return t["\u0275vid"](2, [(l()(), t["\u0275eld"](0, 16777216, null, null, 10, "ngx-charts-chart", [], null, [
                    [null, "legendLabelActivate"],
                    [null, "legendLabelDeactivate"],
                    [null, "legendLabelClick"]
                ], function(l, n, e) {
                    var t = !0,
                        a = l.component;
                    return "legendLabelActivate" === n && (t = !1 !== a.onActivate(e) && t), "legendLabelDeactivate" === n && (t = !1 !== a.onDeactivate(e) && t), "legendLabelClick" === n && (t = !1 !== a.onClick(e) && t), t
                }, y.b, y.a)), t["\u0275prd"](512, null, C.a, C.a, [k.a]), t["\u0275did"](2, 573440, null, 0, w.a, [t.ViewContainerRef, C.a], {
                    view: [0, "view"],
                    showLegend: [1, "showLegend"],
                    legendOptions: [2, "legendOptions"],
                    activeEntries: [3, "activeEntries"],
                    animations: [4, "animations"]
                }, {
                    legendLabelClick: "legendLabelClick",
                    legendLabelActivate: "legendLabelActivate",
                    legendLabelDeactivate: "legendLabelDeactivate"
                }), t["\u0275pad"](3, 2), (l()(), t["\u0275eld"](4, 0, null, 0, 6, ":svg:g", [
                    ["class", "bar-chart chart"]
                ], [
                    [1, "transform", 0]
                ], null, null, null, null)), (l()(), t["\u0275and"](16777216, null, null, 1, null, Dl)), t["\u0275did"](6, 16384, null, 0, L.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), t["\u0275and"](16777216, null, null, 1, null, Rl)), t["\u0275did"](8, 16384, null, 0, L.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), t["\u0275and"](16777216, null, null, 1, null, Fl)), t["\u0275did"](10, 802816, null, 0, L.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                    ngForOf: [0, "ngForOf"],
                    ngForTrackBy: [1, "ngForTrackBy"]
                }, null)], function(l, n) {
                    var e = n.component;
                    l(n, 2, 0, l(n, 3, 0, e.width, e.height), e.legend, e.legendOptions, e.activeEntries, e.animations), l(n, 6, 0, e.xAxis), l(n, 8, 0, e.yAxis), l(n, 10, 0, e.results, e.trackBy)
                }, function(l, n) {
                    l(n, 4, 0, n.component.transform)
                })
            }
            var Il = e("afy3"),
                Ol = e("7lyt"),
                $l = e("8rwn"),
                Bl = e("eZ3f"),
                Nl = e("bmvy"),
                zl = e("FfNM"),
                Vl = e("7W4y"),
                Yl = e("J6WN"),
                Xl = e("6fCZ"),
                Pl = t["\u0275crt"]({
                    encapsulation: 2,
                    styles: [],
                    data: {}
                });

            function Hl(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-pie-arc", ""]
                ], [
                    [1, "class", 0]
                ], [
                    [null, "select"]
                ], function(l, n, e) {
                    var t = !0;
                    return "select" === n && (t = !1 !== l.component.onClick(e) && t), t
                }, Vl.b, Vl.a)), t["\u0275did"](1, 573440, null, 0, Yl.a, [t.ElementRef], {
                    fill: [0, "fill"],
                    startAngle: [1, "startAngle"],
                    endAngle: [2, "endAngle"],
                    innerRadius: [3, "innerRadius"],
                    outerRadius: [4, "outerRadius"],
                    value: [5, "value"],
                    data: [6, "data"],
                    gradient: [7, "gradient"],
                    animate: [8, "animate"],
                    pointerEvents: [9, "pointerEvents"]
                }, {
                    select: "select"
                })], function(l, n) {
                    var e = n.component;
                    l(n, 1, 0, e.color(n.context.$implicit), n.context.$implicit.startAngle, n.context.$implicit.endAngle, e.innerRadius, e.outerRadius, n.context.$implicit.data.value, n.context.$implicit.data, !1, n.context.$implicit.animate, n.context.$implicit.pointerEvents)
                }, function(l, n) {
                    l(n, 0, 0, n.context.$implicit.class)
                })
            }

            function Ml(l) {
                return t["\u0275vid"](2, [(l()(), t["\u0275eld"](0, 0, null, null, 2, ":svg:g", [
                    ["class", "pie-grid-arcs"]
                ], null, null, null, null, null)), (l()(), t["\u0275and"](16777216, null, null, 1, null, Hl)), t["\u0275did"](2, 802816, null, 0, L.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                    ngForOf: [0, "ngForOf"],
                    ngForTrackBy: [1, "ngForTrackBy"]
                }, null)], function(l, n) {
                    var e = n.component;
                    l(n, 2, 0, e.arcs, e.trackBy)
                }, null)
            }
            var Wl = e("ZRd5"),
                Gl = t["\u0275crt"]({
                    encapsulation: 2,
                    styles: [p.a, [".pie-grid .arc1{opacity:.4}.pie-grid .percent-label{font-size:16px;font-weight:400}"]],
                    data: {}
                });

            function jl(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 1, ":svg:text", [
                    ["class", "label percent-label"],
                    ["dy", "-0.5em"],
                    ["ngx-charts-count-up", ""],
                    ["text-anchor", "middle"],
                    ["x", "0"],
                    ["y", "5"]
                ], null, null, null, Nl.b, Nl.a)), t["\u0275did"](1, 180224, null, 0, zl.a, [t.ChangeDetectorRef, t.ElementRef], {
                    countSuffix: [0, "countSuffix"],
                    countTo: [1, "countTo"]
                }, null)], function(l, n) {
                    l(n, 1, 0, "%", n.parent.context.$implicit.percent)
                }, null)
            }

            function Zl(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 1, ":svg:text", [
                    ["class", "label percent-label"],
                    ["dy", "-0.5em"],
                    ["text-anchor", "middle"],
                    ["x", "0"],
                    ["y", "5"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](1, null, [" ", " "]))], null, function(l, n) {
                    l(n, 1, 0, n.parent.context.$implicit.percent.toLocaleString())
                })
            }

            function ql(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 1, ":svg:text", [
                    ["class", "label"],
                    ["dy", "1.23em"],
                    ["ngx-charts-count-up", ""],
                    ["text-anchor", "middle"],
                    ["x", "0"]
                ], [
                    [1, "y", 0]
                ], null, null, Nl.b, Nl.a)), t["\u0275did"](1, 180224, null, 0, zl.a, [t.ChangeDetectorRef, t.ElementRef], {
                    countPrefix: [0, "countPrefix"],
                    countTo: [1, "countTo"]
                }, null)], function(l, n) {
                    l(n, 1, 0, n.component.label + ": ", n.parent.context.$implicit.total)
                }, function(l, n) {
                    l(n, 0, 0, n.parent.context.$implicit.outerRadius)
                })
            }

            function _l(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 1, ":svg:text", [
                    ["class", "label"],
                    ["dy", "1.23em"],
                    ["text-anchor", "middle"],
                    ["x", "0"]
                ], [
                    [1, "y", 0]
                ], null, null, null, null)), (l()(), t["\u0275ted"](1, null, [" ", ": ", " "]))], null, function(l, n) {
                    var e = n.component;
                    l(n, 0, 0, n.parent.context.$implicit.outerRadius), l(n, 1, 0, e.label, n.parent.context.$implicit.total.toLocaleString())
                })
            }

            function Ul(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 14, ":svg:g", [
                    ["class", "pie-grid-item"]
                ], [
                    [1, "transform", 0]
                ], null, null, null, null)), (l()(), t["\u0275eld"](1, 16777216, null, null, 3, ":svg:g", [
                    ["ngx-charts-pie-grid-series", ""],
                    ["ngx-tooltip", ""]
                ], null, [
                    [null, "select"],
                    [null, "focusin"],
                    [null, "blur"],
                    [null, "mouseenter"],
                    [null, "mouseleave"],
                    [null, "click"]
                ], function(l, n, e) {
                    var a = !0,
                        i = l.component;
                    return "focusin" === n && (a = !1 !== t["\u0275nov"](l, 2).onFocus() && a), "blur" === n && (a = !1 !== t["\u0275nov"](l, 2).onBlur() && a), "mouseenter" === n && (a = !1 !== t["\u0275nov"](l, 2).onMouseEnter() && a), "mouseleave" === n && (a = !1 !== t["\u0275nov"](l, 2).onMouseLeave(e.target) && a), "click" === n && (a = !1 !== t["\u0275nov"](l, 2).onMouseClick() && a), "select" === n && (a = !1 !== i.onClick(e) && a), a
                }, Ml, Pl)), t["\u0275did"](2, 147456, null, 0, T.a, [C.a, t.ViewContainerRef, t.Renderer], {
                    tooltipTitle: [0, "tooltipTitle"],
                    tooltipDisabled: [1, "tooltipDisabled"],
                    tooltipPlacement: [2, "tooltipPlacement"],
                    tooltipType: [3, "tooltipType"],
                    tooltipTemplate: [4, "tooltipTemplate"],
                    tooltipContext: [5, "tooltipContext"]
                }, null), t["\u0275pod"](3, {
                    data: 0
                }), t["\u0275did"](4, 573440, null, 0, Xl.a, [t.ElementRef], {
                    colors: [0, "colors"],
                    data: [1, "data"],
                    innerRadius: [2, "innerRadius"],
                    outerRadius: [3, "outerRadius"],
                    animations: [4, "animations"]
                }, {
                    select: "select"
                }), (l()(), t["\u0275and"](16777216, null, null, 1, null, jl)), t["\u0275did"](6, 16384, null, 0, L.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), t["\u0275and"](16777216, null, null, 1, null, Zl)), t["\u0275did"](8, 16384, null, 0, L.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), t["\u0275eld"](9, 0, null, null, 1, ":svg:text", [
                    ["class", "label"],
                    ["dy", "0.5em"],
                    ["text-anchor", "middle"],
                    ["x", "0"],
                    ["y", "5"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](10, null, [" ", " "])), (l()(), t["\u0275and"](16777216, null, null, 1, null, ql)), t["\u0275did"](12, 16384, null, 0, L.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), t["\u0275and"](16777216, null, null, 1, null, _l)), t["\u0275did"](14, 16384, null, 0, L.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(l, n) {
                    var e = n.component;
                    l(n, 2, 0, e.tooltipTemplate ? void 0 : e.tooltipText(l(n, 3, 0, n.context.$implicit)), e.tooltipDisabled, "top", "tooltip", e.tooltipTemplate, n.context.$implicit.data[0].data), l(n, 4, 0, n.context.$implicit.colors, n.context.$implicit.data, n.context.$implicit.innerRadius, n.context.$implicit.outerRadius, e.animations), l(n, 6, 0, e.animations), l(n, 8, 0, !e.animations), l(n, 12, 0, e.animations), l(n, 14, 0, !e.animations)
                }, function(l, n) {
                    l(n, 0, 0, n.context.$implicit.transform), l(n, 10, 0, n.context.$implicit.label)
                })
            }

            function Jl(l) {
                return t["\u0275vid"](2, [(l()(), t["\u0275eld"](0, 16777216, null, null, 6, "ngx-charts-chart", [], null, null, null, y.b, y.a)), t["\u0275prd"](512, null, C.a, C.a, [k.a]), t["\u0275did"](2, 573440, null, 0, w.a, [t.ViewContainerRef, C.a], {
                    view: [0, "view"],
                    showLegend: [1, "showLegend"],
                    animations: [2, "animations"]
                }, null), t["\u0275pad"](3, 2), (l()(), t["\u0275eld"](4, 0, null, 0, 2, ":svg:g", [
                    ["class", "pie-grid chart"]
                ], [
                    [1, "transform", 0]
                ], null, null, null, null)), (l()(), t["\u0275and"](16777216, null, null, 1, null, Ul)), t["\u0275did"](6, 802816, null, 0, L.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                    ngForOf: [0, "ngForOf"]
                }, null)], function(l, n) {
                    var e = n.component;
                    l(n, 2, 0, l(n, 3, 0, e.width, e.height), !1, e.animations), l(n, 6, 0, e.series)
                }, function(l, n) {
                    l(n, 4, 0, n.component.transform)
                })
            }
            var Kl = e("e5Md"),
                Ql = e("l/X3"),
                ln = e("14xD"),
                nn = e("ikwa"),
                en = e("Xy94"),
                tn = e("MP4t"),
                an = e("ek82"),
                un = e("t6FG"),
                on = e("Mkm6"),
                sn = e("H8yg"),
                cn = e("QoYF"),
                rn = e("U3KO"),
                dn = e("Vghg"),
                gn = t["\u0275crt"]({
                    encapsulation: 2,
                    styles: [p.a],
                    data: {}
                });

            function hn(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-x-axis", ""]
                ], null, [
                    [null, "dimensionsChanged"]
                ], function(l, n, e) {
                    var t = !0;
                    return "dimensionsChanged" === n && (t = !1 !== l.component.updateXAxisHeight(e) && t), t
                }, v.b, v.a)), t["\u0275did"](1, 573440, null, 0, x.a, [], {
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

            function mn(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-y-axis", ""]
                ], null, [
                    [null, "dimensionsChanged"]
                ], function(l, n, e) {
                    var t = !0;
                    return "dimensionsChanged" === n && (t = !1 !== l.component.updateYAxisWidth(e) && t), t
                }, f.b, f.a)), t["\u0275did"](1, 573440, null, 0, b.a, [], {
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

            function pn(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 2, ":svg:g", [], null, null, null, null, null)), (l()(), t["\u0275eld"](1, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-area-series", ""],
                    ["stacked", "true"]
                ], null, null, null, en.b, en.a)), t["\u0275did"](2, 573440, null, 0, tn.a, [], {
                    data: [0, "data"],
                    xScale: [1, "xScale"],
                    yScale: [2, "yScale"],
                    colors: [3, "colors"],
                    scaleType: [4, "scaleType"],
                    stacked: [5, "stacked"],
                    gradient: [6, "gradient"],
                    curve: [7, "curve"],
                    activeEntries: [8, "activeEntries"],
                    animations: [9, "animations"]
                }, null)], function(l, n) {
                    var e = n.component;
                    l(n, 2, 0, n.context.$implicit, e.xScale, e.yScale, e.colors, e.scaleType, "true", e.gradient, e.curve, e.activeEntries, e.animations)
                }, null)
            }

            function vn(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 2, ":svg:g", [], null, null, null, null, null)), (l()(), t["\u0275eld"](1, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-circle-series", ""],
                    ["type", "stacked"]
                ], null, [
                    [null, "select"],
                    [null, "activate"],
                    [null, "deactivate"]
                ], function(l, n, e) {
                    var t = !0,
                        a = l.component;
                    return "select" === n && (t = !1 !== a.onClick(e, l.context.$implicit) && t), "activate" === n && (t = !1 !== a.onActivate(e) && t), "deactivate" === n && (t = !1 !== a.onDeactivate(e) && t), t
                }, an.b, an.a)), t["\u0275did"](2, 638976, null, 0, un.a, [], {
                    data: [0, "data"],
                    type: [1, "type"],
                    xScale: [2, "xScale"],
                    yScale: [3, "yScale"],
                    colors: [4, "colors"],
                    scaleType: [5, "scaleType"],
                    visibleValue: [6, "visibleValue"],
                    activeEntries: [7, "activeEntries"],
                    tooltipDisabled: [8, "tooltipDisabled"],
                    tooltipTemplate: [9, "tooltipTemplate"]
                }, {
                    select: "select",
                    activate: "activate",
                    deactivate: "deactivate"
                })], function(l, n) {
                    var e = n.component;
                    l(n, 2, 0, n.context.$implicit, "stacked", e.xScale, e.yScale, e.colors, e.scaleType, e.hoveredVertical, e.activeEntries, e.tooltipDisabled, e.tooltipTemplate)
                }, null)
            }

            function xn(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 4, ":svg:g", [], null, [
                    [null, "mouseleave"]
                ], function(l, n, e) {
                    var t = !0;
                    return "mouseleave" === n && (t = !1 !== l.component.hideCircles() && t), t
                }, null, null)), (l()(), t["\u0275eld"](1, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-tooltip-area", ""]
                ], null, [
                    [null, "hover"]
                ], function(l, n, e) {
                    var t = !0;
                    return "hover" === n && (t = !1 !== l.component.updateHoveredVertical(e) && t), t
                }, on.b, on.a)), t["\u0275did"](2, 49152, null, 0, sn.a, [t.Renderer], {
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
                }), (l()(), t["\u0275and"](16777216, null, null, 1, null, vn)), t["\u0275did"](4, 802816, null, 0, L.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                    ngForOf: [0, "ngForOf"],
                    ngForTrackBy: [1, "ngForTrackBy"]
                }, null)], function(l, n) {
                    var e = n.component;
                    l(n, 2, 0, e.dims, e.xSet, e.xScale, e.yScale, e.results, e.colors, e.tooltipDisabled, e.seriesTooltipTemplate), l(n, 4, 0, e.results, e.trackBy)
                }, null)
            }

            function fn(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 2, ":svg:g", [], null, null, null, null, null)), (l()(), t["\u0275eld"](1, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-area-series", ""],
                    ["stacked", "true"]
                ], null, null, null, en.b, en.a)), t["\u0275did"](2, 573440, null, 0, tn.a, [], {
                    data: [0, "data"],
                    xScale: [1, "xScale"],
                    yScale: [2, "yScale"],
                    colors: [3, "colors"],
                    scaleType: [4, "scaleType"],
                    stacked: [5, "stacked"],
                    gradient: [6, "gradient"],
                    curve: [7, "curve"],
                    animations: [8, "animations"]
                }, null)], function(l, n) {
                    var e = n.component;
                    l(n, 2, 0, n.context.$implicit, e.timelineXScale, e.timelineYScale, e.colors, e.scaleType, "true", e.gradient, e.curve, e.animations)
                }, null)
            }

            function bn(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 4, ":svg:g", [
                    ["ngx-charts-timeline", ""]
                ], [
                    [1, "transform", 0]
                ], [
                    [null, "onDomainChange"]
                ], function(l, n, e) {
                    var t = !0;
                    return "onDomainChange" === n && (t = !1 !== l.component.updateDomain(e) && t), t
                }, cn.b, cn.a)), t["\u0275did"](1, 573440, null, 0, rn.a, [t.ElementRef, t.ChangeDetectorRef], {
                    view: [0, "view"],
                    results: [1, "results"],
                    scheme: [2, "scheme"],
                    customColors: [3, "customColors"],
                    legend: [4, "legend"],
                    scaleType: [5, "scaleType"],
                    height: [6, "height"]
                }, {
                    onDomainChange: "onDomainChange"
                }), t["\u0275pad"](2, 2), (l()(), t["\u0275and"](16777216, null, 0, 1, null, fn)), t["\u0275did"](4, 802816, null, 0, L.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                    ngForOf: [0, "ngForOf"],
                    ngForTrackBy: [1, "ngForTrackBy"]
                }, null)], function(l, n) {
                    var e = n.component;
                    l(n, 1, 0, l(n, 2, 0, e.timelineWidth, e.height), e.results, e.scheme, e.customColors, e.legend, e.scaleType, e.timelineHeight), l(n, 4, 0, e.results, e.trackBy)
                }, function(l, n) {
                    l(n, 0, 0, n.component.timelineTransform)
                })
            }

            function yn(l) {
                return t["\u0275vid"](2, [(l()(), t["\u0275eld"](0, 16777216, null, null, 18, "ngx-charts-chart", [], null, [
                    [null, "legendLabelClick"],
                    [null, "legendLabelActivate"],
                    [null, "legendLabelDeactivate"]
                ], function(l, n, e) {
                    var t = !0,
                        a = l.component;
                    return "legendLabelClick" === n && (t = !1 !== a.onClick(e) && t), "legendLabelActivate" === n && (t = !1 !== a.onActivate(e) && t), "legendLabelDeactivate" === n && (t = !1 !== a.onDeactivate(e) && t), t
                }, y.b, y.a)), t["\u0275prd"](512, null, C.a, C.a, [k.a]), t["\u0275did"](2, 573440, null, 0, w.a, [t.ViewContainerRef, C.a], {
                    view: [0, "view"],
                    showLegend: [1, "showLegend"],
                    legendOptions: [2, "legendOptions"],
                    activeEntries: [3, "activeEntries"],
                    animations: [4, "animations"]
                }, {
                    legendLabelClick: "legendLabelClick",
                    legendLabelActivate: "legendLabelActivate",
                    legendLabelDeactivate: "legendLabelDeactivate"
                }), t["\u0275pad"](3, 2), (l()(), t["\u0275eld"](4, 0, null, 0, 2, ":svg:defs", [], null, null, null, null, null)), (l()(), t["\u0275eld"](5, 0, null, null, 1, ":svg:clipPath", [], [
                    [1, "id", 0]
                ], null, null, null, null)), (l()(), t["\u0275eld"](6, 0, null, null, 0, ":svg:rect", [], [
                    [1, "width", 0],
                    [1, "height", 0],
                    [1, "transform", 0]
                ], null, null, null, null)), (l()(), t["\u0275eld"](7, 0, null, 0, 9, ":svg:g", [
                    ["class", "area-chart chart"]
                ], [
                    [1, "transform", 0]
                ], null, null, null, null)), (l()(), t["\u0275and"](16777216, null, null, 1, null, hn)), t["\u0275did"](9, 16384, null, 0, L.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), t["\u0275and"](16777216, null, null, 1, null, mn)), t["\u0275did"](11, 16384, null, 0, L.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), t["\u0275eld"](12, 0, null, null, 4, ":svg:g", [], [
                    [1, "clip-path", 0]
                ], null, null, null, null)), (l()(), t["\u0275and"](16777216, null, null, 1, null, pn)), t["\u0275did"](14, 802816, null, 0, L.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                    ngForOf: [0, "ngForOf"],
                    ngForTrackBy: [1, "ngForTrackBy"]
                }, null), (l()(), t["\u0275and"](16777216, null, null, 1, null, xn)), t["\u0275did"](16, 16384, null, 0, L.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), t["\u0275and"](16777216, null, 0, 1, null, bn)), t["\u0275did"](18, 16384, null, 0, L.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(l, n) {
                    var e = n.component;
                    l(n, 2, 0, l(n, 3, 0, e.width, e.height), e.legend, e.legendOptions, e.activeEntries, e.animations), l(n, 9, 0, e.xAxis), l(n, 11, 0, e.yAxis), l(n, 14, 0, e.results, e.trackBy), l(n, 16, 0, !e.tooltipDisabled), l(n, 18, 0, e.timeline && "ordinal" != e.scaleType)
                }, function(l, n) {
                    var e = n.component;
                    l(n, 5, 0, e.clipPathId), l(n, 6, 0, e.dims.width + 10, e.dims.height + 10, "translate(-5, -5)"), l(n, 7, 0, e.transform), l(n, 12, 0, e.clipPath)
                })
            }
            var Cn = e("WS8K"),
                kn = t["\u0275crt"]({
                    encapsulation: 2,
                    styles: [p.a],
                    data: {}
                });

            function wn(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-x-axis", ""]
                ], null, [
                    [null, "dimensionsChanged"]
                ], function(l, n, e) {
                    var t = !0;
                    return "dimensionsChanged" === n && (t = !1 !== l.component.updateXAxisHeight(e) && t), t
                }, v.b, v.a)), t["\u0275did"](1, 573440, null, 0, x.a, [], {
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

            function Ln(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-y-axis", ""]
                ], null, [
                    [null, "dimensionsChanged"]
                ], function(l, n, e) {
                    var t = !0;
                    return "dimensionsChanged" === n && (t = !1 !== l.component.updateYAxisWidth(e) && t), t
                }, f.b, f.a)), t["\u0275did"](1, 573440, null, 0, b.a, [], {
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

            function An(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 2, ":svg:g", [], null, null, null, null, null)), (l()(), t["\u0275eld"](1, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-area-series", ""],
                    ["normalized", "true"]
                ], null, null, null, en.b, en.a)), t["\u0275did"](2, 573440, null, 0, tn.a, [], {
                    data: [0, "data"],
                    xScale: [1, "xScale"],
                    yScale: [2, "yScale"],
                    colors: [3, "colors"],
                    scaleType: [4, "scaleType"],
                    normalized: [5, "normalized"],
                    gradient: [6, "gradient"],
                    curve: [7, "curve"],
                    activeEntries: [8, "activeEntries"],
                    animations: [9, "animations"]
                }, null)], function(l, n) {
                    var e = n.component;
                    l(n, 2, 0, n.context.$implicit, e.xScale, e.yScale, e.colors, e.scaleType, "true", e.gradient, e.curve, e.activeEntries, e.animations)
                }, null)
            }

            function Tn(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 2, ":svg:g", [], null, null, null, null, null)), (l()(), t["\u0275eld"](1, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-circle-series", ""],
                    ["type", "stacked"]
                ], null, [
                    [null, "select"],
                    [null, "activate"],
                    [null, "deactivate"]
                ], function(l, n, e) {
                    var t = !0,
                        a = l.component;
                    return "select" === n && (t = !1 !== a.onClick(e, l.context.$implicit) && t), "activate" === n && (t = !1 !== a.onActivate(e) && t), "deactivate" === n && (t = !1 !== a.onDeactivate(e) && t), t
                }, an.b, an.a)), t["\u0275did"](2, 638976, null, 0, un.a, [], {
                    data: [0, "data"],
                    type: [1, "type"],
                    xScale: [2, "xScale"],
                    yScale: [3, "yScale"],
                    colors: [4, "colors"],
                    scaleType: [5, "scaleType"],
                    visibleValue: [6, "visibleValue"],
                    activeEntries: [7, "activeEntries"],
                    tooltipDisabled: [8, "tooltipDisabled"],
                    tooltipTemplate: [9, "tooltipTemplate"]
                }, {
                    select: "select",
                    activate: "activate",
                    deactivate: "deactivate"
                })], function(l, n) {
                    var e = n.component;
                    l(n, 2, 0, n.context.$implicit, "stacked", e.xScale, e.yScale, e.colors, e.scaleType, e.hoveredVertical, e.activeEntries, e.tooltipDisabled, e.tooltipTemplate)
                }, null)
            }

            function Sn(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 4, ":svg:g", [], null, [
                    [null, "mouseleave"]
                ], function(l, n, e) {
                    var t = !0;
                    return "mouseleave" === n && (t = !1 !== l.component.hideCircles() && t), t
                }, null, null)), (l()(), t["\u0275eld"](1, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-tooltip-area", ""]
                ], null, [
                    [null, "hover"]
                ], function(l, n, e) {
                    var t = !0;
                    return "hover" === n && (t = !1 !== l.component.updateHoveredVertical(e) && t), t
                }, on.b, on.a)), t["\u0275did"](2, 49152, null, 0, sn.a, [t.Renderer], {
                    dims: [0, "dims"],
                    xSet: [1, "xSet"],
                    xScale: [2, "xScale"],
                    yScale: [3, "yScale"],
                    results: [4, "results"],
                    colors: [5, "colors"],
                    showPercentage: [6, "showPercentage"],
                    tooltipDisabled: [7, "tooltipDisabled"],
                    tooltipTemplate: [8, "tooltipTemplate"]
                }, {
                    hover: "hover"
                }), (l()(), t["\u0275and"](16777216, null, null, 1, null, Tn)), t["\u0275did"](4, 802816, null, 0, L.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                    ngForOf: [0, "ngForOf"]
                }, null)], function(l, n) {
                    var e = n.component;
                    l(n, 2, 0, e.dims, e.xSet, e.xScale, e.yScale, e.results, e.colors, !0, e.tooltipDisabled, e.seriesTooltipTemplate), l(n, 4, 0, e.results)
                }, null)
            }

            function Dn(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 2, ":svg:g", [], null, null, null, null, null)), (l()(), t["\u0275eld"](1, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-area-series", ""],
                    ["normalized", "true"]
                ], null, null, null, en.b, en.a)), t["\u0275did"](2, 573440, null, 0, tn.a, [], {
                    data: [0, "data"],
                    xScale: [1, "xScale"],
                    yScale: [2, "yScale"],
                    colors: [3, "colors"],
                    scaleType: [4, "scaleType"],
                    normalized: [5, "normalized"],
                    gradient: [6, "gradient"],
                    curve: [7, "curve"],
                    animations: [8, "animations"]
                }, null)], function(l, n) {
                    var e = n.component;
                    l(n, 2, 0, n.context.$implicit, e.timelineXScale, e.timelineYScale, e.colors, e.scaleType, "true", e.gradient, e.curve, e.animations)
                }, null)
            }

            function Rn(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 4, ":svg:g", [
                    ["ngx-charts-timeline", ""]
                ], [
                    [1, "transform", 0]
                ], [
                    [null, "onDomainChange"]
                ], function(l, n, e) {
                    var t = !0;
                    return "onDomainChange" === n && (t = !1 !== l.component.updateDomain(e) && t), t
                }, cn.b, cn.a)), t["\u0275did"](1, 573440, null, 0, rn.a, [t.ElementRef, t.ChangeDetectorRef], {
                    view: [0, "view"],
                    results: [1, "results"],
                    scheme: [2, "scheme"],
                    customColors: [3, "customColors"],
                    legend: [4, "legend"],
                    scaleType: [5, "scaleType"],
                    height: [6, "height"]
                }, {
                    onDomainChange: "onDomainChange"
                }), t["\u0275pad"](2, 2), (l()(), t["\u0275and"](16777216, null, 0, 1, null, Dn)), t["\u0275did"](4, 802816, null, 0, L.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                    ngForOf: [0, "ngForOf"],
                    ngForTrackBy: [1, "ngForTrackBy"]
                }, null)], function(l, n) {
                    var e = n.component;
                    l(n, 1, 0, l(n, 2, 0, e.timelineWidth, e.height), e.results, e.scheme, e.customColors, e.legend, e.scaleType, e.timelineHeight), l(n, 4, 0, e.results, e.trackBy)
                }, function(l, n) {
                    l(n, 0, 0, n.component.timelineTransform)
                })
            }

            function Fn(l) {
                return t["\u0275vid"](2, [(l()(), t["\u0275eld"](0, 16777216, null, null, 18, "ngx-charts-chart", [], null, [
                    [null, "legendLabelClick"],
                    [null, "legendLabelActivate"],
                    [null, "legendLabelDeactivate"]
                ], function(l, n, e) {
                    var t = !0,
                        a = l.component;
                    return "legendLabelClick" === n && (t = !1 !== a.onClick(e) && t), "legendLabelActivate" === n && (t = !1 !== a.onActivate(e) && t), "legendLabelDeactivate" === n && (t = !1 !== a.onDeactivate(e) && t), t
                }, y.b, y.a)), t["\u0275prd"](512, null, C.a, C.a, [k.a]), t["\u0275did"](2, 573440, null, 0, w.a, [t.ViewContainerRef, C.a], {
                    view: [0, "view"],
                    showLegend: [1, "showLegend"],
                    legendOptions: [2, "legendOptions"],
                    activeEntries: [3, "activeEntries"],
                    animations: [4, "animations"]
                }, {
                    legendLabelClick: "legendLabelClick",
                    legendLabelActivate: "legendLabelActivate",
                    legendLabelDeactivate: "legendLabelDeactivate"
                }), t["\u0275pad"](3, 2), (l()(), t["\u0275eld"](4, 0, null, 0, 2, ":svg:defs", [], null, null, null, null, null)), (l()(), t["\u0275eld"](5, 0, null, null, 1, ":svg:clipPath", [], [
                    [1, "id", 0]
                ], null, null, null, null)), (l()(), t["\u0275eld"](6, 0, null, null, 0, ":svg:rect", [], [
                    [1, "width", 0],
                    [1, "height", 0],
                    [1, "transform", 0]
                ], null, null, null, null)), (l()(), t["\u0275eld"](7, 0, null, 0, 9, ":svg:g", [
                    ["class", "area-chart chart"]
                ], [
                    [1, "transform", 0]
                ], null, null, null, null)), (l()(), t["\u0275and"](16777216, null, null, 1, null, wn)), t["\u0275did"](9, 16384, null, 0, L.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), t["\u0275and"](16777216, null, null, 1, null, Ln)), t["\u0275did"](11, 16384, null, 0, L.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), t["\u0275eld"](12, 0, null, null, 4, ":svg:g", [], [
                    [1, "clip-path", 0]
                ], null, null, null, null)), (l()(), t["\u0275and"](16777216, null, null, 1, null, An)), t["\u0275did"](14, 802816, null, 0, L.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                    ngForOf: [0, "ngForOf"],
                    ngForTrackBy: [1, "ngForTrackBy"]
                }, null), (l()(), t["\u0275and"](16777216, null, null, 1, null, Sn)), t["\u0275did"](16, 16384, null, 0, L.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), t["\u0275and"](16777216, null, 0, 1, null, Rn)), t["\u0275did"](18, 16384, null, 0, L.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(l, n) {
                    var e = n.component;
                    l(n, 2, 0, l(n, 3, 0, e.width, e.height), e.legend, e.legendOptions, e.activeEntries, e.animations), l(n, 9, 0, e.xAxis), l(n, 11, 0, e.yAxis), l(n, 14, 0, e.results, e.trackBy), l(n, 16, 0, !e.tooltipDisabled), l(n, 18, 0, e.timeline && "ordinal" != e.scaleType)
                }, function(l, n) {
                    var e = n.component;
                    l(n, 5, 0, e.clipPathId), l(n, 6, 0, e.dims.width + 10, e.dims.height + 10, "translate(-5, -5)"), l(n, 7, 0, e.transform), l(n, 12, 0, e.clipPath)
                })
            }
            var En = e("I3BX"),
                In = e("IU+9"),
                On = e("wAet"),
                $n = t["\u0275crt"]({
                    encapsulation: 2,
                    styles: [],
                    data: {}
                });

            function Bn(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 2, ":svg:defs", [], null, null, null, null, null)), (l()(), t["\u0275eld"](1, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-svg-linear-gradient", ""],
                    ["orientation", "vertical"]
                ], null, null, null, En.b, En.a)), t["\u0275did"](2, 573440, null, 0, In.a, [], {
                    orientation: [0, "orientation"],
                    name: [1, "name"],
                    stops: [2, "stops"]
                }, null)], function(l, n) {
                    var e = n.component;
                    l(n, 2, 0, "vertical", e.gradientId, e.gradientStops)
                }, null)
            }

            function Nn(l) {
                return t["\u0275vid"](2, [(l()(), t["\u0275eld"](0, 0, null, null, 3, ":svg:g", [
                    ["class", "cell"]
                ], [
                    [1, "transform", 0]
                ], null, null, null, null)), (l()(), t["\u0275and"](16777216, null, null, 1, null, Bn)), t["\u0275did"](2, 16384, null, 0, L.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), t["\u0275eld"](3, 0, null, null, 0, ":svg:rect", [
                    ["class", "cell"],
                    ["rx", "3"],
                    ["style", "cursor: pointer"]
                ], [
                    [1, "fill", 0],
                    [1, "width", 0],
                    [1, "height", 0]
                ], [
                    [null, "click"]
                ], function(l, n, e) {
                    var t = !0;
                    return "click" === n && (t = !1 !== l.component.onClick() && t), t
                }, null, null))], function(l, n) {
                    l(n, 2, 0, n.component.gradient)
                }, function(l, n) {
                    var e = n.component;
                    l(n, 0, 0, e.transform), l(n, 3, 0, e.gradient ? e.gradientUrl : e.fill, e.width, e.height)
                })
            }
            var zn = e("fEkD"),
                Vn = t["\u0275crt"]({
                    encapsulation: 2,
                    styles: [],
                    data: {}
                });

            function Yn(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 16777216, null, null, 3, ":svg:g", [
                    ["ngx-charts-heat-map-cell", ""],
                    ["ngx-tooltip", ""]
                ], null, [
                    [null, "select"],
                    [null, "focusin"],
                    [null, "blur"],
                    [null, "mouseenter"],
                    [null, "mouseleave"],
                    [null, "click"]
                ], function(l, n, e) {
                    var a = !0,
                        i = l.component;
                    return "focusin" === n && (a = !1 !== t["\u0275nov"](l, 1).onFocus() && a), "blur" === n && (a = !1 !== t["\u0275nov"](l, 1).onBlur() && a), "mouseenter" === n && (a = !1 !== t["\u0275nov"](l, 1).onMouseEnter() && a), "mouseleave" === n && (a = !1 !== t["\u0275nov"](l, 1).onMouseLeave(e.target) && a), "click" === n && (a = !1 !== t["\u0275nov"](l, 1).onMouseClick() && a), "select" === n && (a = !1 !== i.onClick(e, l.context.$implicit.label, l.context.$implicit.series) && a), a
                }, Nn, $n)), t["\u0275did"](1, 147456, null, 0, T.a, [C.a, t.ViewContainerRef, t.Renderer], {
                    tooltipTitle: [0, "tooltipTitle"],
                    tooltipDisabled: [1, "tooltipDisabled"],
                    tooltipPlacement: [2, "tooltipPlacement"],
                    tooltipType: [3, "tooltipType"],
                    tooltipTemplate: [4, "tooltipTemplate"],
                    tooltipContext: [5, "tooltipContext"]
                }, null), t["\u0275pod"](2, {
                    series: 0,
                    name: 1,
                    value: 2
                }), t["\u0275did"](3, 573440, null, 0, On.a, [t.ElementRef], {
                    fill: [0, "fill"],
                    x: [1, "x"],
                    y: [2, "y"],
                    width: [3, "width"],
                    height: [4, "height"],
                    data: [5, "data"],
                    gradient: [6, "gradient"],
                    animations: [7, "animations"]
                }, {
                    select: "select"
                }), (l()(), t["\u0275and"](0, null, null, 0))], function(l, n) {
                    var e = n.component;
                    l(n, 1, 0, e.tooltipTemplate ? void 0 : e.tooltipText(n.context.$implicit), e.tooltipDisabled, "top", "tooltip", e.tooltipTemplate, l(n, 2, 0, n.context.$implicit.series, n.context.$implicit.label, n.context.$implicit.data)), l(n, 3, 0, n.context.$implicit.fill, n.context.$implicit.x, n.context.$implicit.y, n.context.$implicit.width, n.context.$implicit.height, n.context.$implicit.data, e.gradient, e.animations)
                }, null)
            }

            function Xn(l) {
                return t["\u0275vid"](2, [(l()(), t["\u0275and"](16777216, null, null, 1, null, Yn)), t["\u0275did"](1, 802816, null, 0, L.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                    ngForOf: [0, "ngForOf"],
                    ngForTrackBy: [1, "ngForTrackBy"]
                }, null)], function(l, n) {
                    var e = n.component;
                    l(n, 1, 0, e.cells, e.trackBy)
                }, null)
            }
            var Pn = e("kHoU"),
                Hn = t["\u0275crt"]({
                    encapsulation: 2,
                    styles: [p.a],
                    data: {}
                });

            function Mn(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-x-axis", ""]
                ], null, [
                    [null, "dimensionsChanged"]
                ], function(l, n, e) {
                    var t = !0;
                    return "dimensionsChanged" === n && (t = !1 !== l.component.updateXAxisHeight(e) && t), t
                }, v.b, v.a)), t["\u0275did"](1, 573440, null, 0, x.a, [], {
                    xScale: [0, "xScale"],
                    dims: [1, "dims"],
                    tickFormatting: [2, "tickFormatting"],
                    showLabel: [3, "showLabel"],
                    labelText: [4, "labelText"],
                    ticks: [5, "ticks"]
                }, {
                    dimensionsChanged: "dimensionsChanged"
                })], function(l, n) {
                    var e = n.component;
                    l(n, 1, 0, e.xScale, e.dims, e.xAxisTickFormatting, e.showXAxisLabel, e.xAxisLabel, e.xAxisTicks)
                }, null)
            }

            function Wn(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-y-axis", ""]
                ], null, [
                    [null, "dimensionsChanged"]
                ], function(l, n, e) {
                    var t = !0;
                    return "dimensionsChanged" === n && (t = !1 !== l.component.updateYAxisWidth(e) && t), t
                }, f.b, f.a)), t["\u0275did"](1, 573440, null, 0, b.a, [], {
                    yScale: [0, "yScale"],
                    dims: [1, "dims"],
                    tickFormatting: [2, "tickFormatting"],
                    ticks: [3, "ticks"],
                    showLabel: [4, "showLabel"],
                    labelText: [5, "labelText"]
                }, {
                    dimensionsChanged: "dimensionsChanged"
                })], function(l, n) {
                    var e = n.component;
                    l(n, 1, 0, e.yScale, e.dims, e.yAxisTickFormatting, e.yAxisTicks, e.showYAxisLabel, e.yAxisLabel)
                }, null)
            }

            function Gn(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 0, ":svg:rect", [], [
                    [1, "x", 0],
                    [1, "y", 0],
                    [1, "rx", 0],
                    [1, "width", 0],
                    [1, "height", 0],
                    [1, "fill", 0]
                ], null, null, null, null))], null, function(l, n) {
                    l(n, 0, 0, n.context.$implicit.x, n.context.$implicit.y, n.context.$implicit.rx, n.context.$implicit.width, n.context.$implicit.height, n.context.$implicit.fill)
                })
            }

            function jn(l) {
                return t["\u0275vid"](2, [(l()(), t["\u0275eld"](0, 16777216, null, null, 12, "ngx-charts-chart", [], null, [
                    [null, "legendLabelClick"]
                ], function(l, n, e) {
                    var t = !0;
                    return "legendLabelClick" === n && (t = !1 !== l.component.onClick(e) && t), t
                }, y.b, y.a)), t["\u0275prd"](512, null, C.a, C.a, [k.a]), t["\u0275did"](2, 573440, null, 0, w.a, [t.ViewContainerRef, C.a], {
                    view: [0, "view"],
                    showLegend: [1, "showLegend"],
                    legendOptions: [2, "legendOptions"],
                    animations: [3, "animations"]
                }, {
                    legendLabelClick: "legendLabelClick"
                }), t["\u0275pad"](3, 2), (l()(), t["\u0275eld"](4, 0, null, 0, 8, ":svg:g", [
                    ["class", "heat-map chart"]
                ], [
                    [1, "transform", 0]
                ], null, null, null, null)), (l()(), t["\u0275and"](16777216, null, null, 1, null, Mn)), t["\u0275did"](6, 16384, null, 0, L.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), t["\u0275and"](16777216, null, null, 1, null, Wn)), t["\u0275did"](8, 16384, null, 0, L.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), t["\u0275and"](16777216, null, null, 1, null, Gn)), t["\u0275did"](10, 802816, null, 0, L.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                    ngForOf: [0, "ngForOf"]
                }, null), (l()(), t["\u0275eld"](11, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-heat-map-cell-series", ""]
                ], null, [
                    [null, "select"]
                ], function(l, n, e) {
                    var t = !0;
                    return "select" === n && (t = !1 !== l.component.onClick(e) && t), t
                }, Xn, Vn)), t["\u0275did"](12, 638976, null, 0, zn.a, [], {
                    data: [0, "data"],
                    colors: [1, "colors"],
                    xScale: [2, "xScale"],
                    yScale: [3, "yScale"],
                    gradient: [4, "gradient"],
                    tooltipDisabled: [5, "tooltipDisabled"],
                    tooltipText: [6, "tooltipText"],
                    tooltipTemplate: [7, "tooltipTemplate"],
                    animations: [8, "animations"]
                }, {
                    select: "select"
                })], function(l, n) {
                    var e = n.component;
                    l(n, 2, 0, l(n, 3, 0, e.width, e.height), e.legend, e.legendOptions, e.animations), l(n, 6, 0, e.xAxis), l(n, 8, 0, e.yAxis), l(n, 10, 0, e.rects), l(n, 12, 0, e.results, e.colors, e.xScale, e.yScale, e.gradient, e.tooltipDisabled, e.tooltipText, e.tooltipTemplate, e.animations)
                }, function(l, n) {
                    l(n, 4, 0, n.component.transform)
                })
            }
            var Zn = e("zPjm"),
                qn = t["\u0275crt"]({
                    encapsulation: 2,
                    styles: [],
                    data: {}
                });

            function _n(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 2, ":svg:defs", [], null, null, null, null, null)), (l()(), t["\u0275eld"](1, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-svg-linear-gradient", ""],
                    ["orientation", "vertical"]
                ], null, null, null, En.b, En.a)), t["\u0275did"](2, 573440, null, 0, In.a, [], {
                    orientation: [0, "orientation"],
                    name: [1, "name"],
                    stops: [2, "stops"]
                }, null)], function(l, n) {
                    var e = n.component;
                    l(n, 2, 0, "vertical", e.gradientId, e.gradientStops)
                }, null)
            }

            function Un(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 1, ":xhtml:span", [
                    ["class", "treemap-val"],
                    ["ngx-charts-count-up", ""]
                ], null, null, null, Nl.b, Nl.a)), t["\u0275did"](1, 180224, null, 0, zl.a, [t.ChangeDetectorRef, t.ElementRef], {
                    valueFormatting: [0, "valueFormatting"],
                    countTo: [1, "countTo"]
                }, null)], function(l, n) {
                    var e = n.component;
                    l(n, 1, 0, e.valueFormatting, e.value)
                }, null)
            }

            function Jn(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 1, ":xhtml:span", [
                    ["class", "treemap-val"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](1, null, [" ", " "]))], null, function(l, n) {
                    l(n, 1, 0, n.component.formattedValue)
                })
            }

            function Kn(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 7, ":svg:foreignObject", [
                    ["class", "label"]
                ], [
                    [1, "x", 0],
                    [1, "y", 0],
                    [1, "width", 0],
                    [1, "height", 0],
                    [4, "pointer-events", null]
                ], null, null, null, null)), (l()(), t["\u0275eld"](1, 0, null, null, 6, ":xhtml:p", [], [
                    [4, "color", null],
                    [4, "height", null],
                    [4, "width", null]
                ], null, null, null, null)), (l()(), t["\u0275eld"](2, 0, null, null, 0, ":xhtml:span", [
                    ["class", "treemap-label"]
                ], [
                    [8, "innerHTML", 1]
                ], null, null, null, null)), (l()(), t["\u0275eld"](3, 0, null, null, 0, ":xhtml:br", [], null, null, null, null, null)), (l()(), t["\u0275and"](16777216, null, null, 1, null, Un)), t["\u0275did"](5, 16384, null, 0, L.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), t["\u0275and"](16777216, null, null, 1, null, Jn)), t["\u0275did"](7, 16384, null, 0, L.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(l, n) {
                    var e = n.component;
                    l(n, 5, 0, e.animations), l(n, 7, 0, !e.animations)
                }, function(l, n) {
                    var e = n.component;
                    l(n, 0, 0, e.x, e.y, e.width, e.height, "none"), l(n, 1, 0, e.getTextColor(), e.height + "px", e.width + "px"), l(n, 2, 0, e.formattedLabel)
                })
            }

            function Qn(l) {
                return t["\u0275vid"](2, [(l()(), t["\u0275eld"](0, 0, null, null, 5, ":svg:g", [], null, null, null, null, null)), (l()(), t["\u0275and"](16777216, null, null, 1, null, _n)), t["\u0275did"](2, 16384, null, 0, L.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), t["\u0275eld"](3, 0, null, null, 0, ":svg:rect", [
                    ["class", "cell"]
                ], [
                    [1, "fill", 0],
                    [1, "width", 0],
                    [1, "height", 0],
                    [1, "x", 0],
                    [1, "y", 0],
                    [4, "cursor", null]
                ], [
                    [null, "click"]
                ], function(l, n, e) {
                    var t = !0;
                    return "click" === n && (t = !1 !== l.component.onClick() && t), t
                }, null, null)), (l()(), t["\u0275and"](16777216, null, null, 1, null, Kn)), t["\u0275did"](5, 16384, null, 0, L.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null)], function(l, n) {
                    var e = n.component;
                    l(n, 2, 0, e.gradient), l(n, 5, 0, e.width >= 70 && e.height >= 35)
                }, function(l, n) {
                    var e = n.component;
                    l(n, 3, 0, e.gradient ? e.gradientUrl : e.fill, e.width, e.height, e.x, e.y, "pointer")
                })
            }
            var le = e("EW8a"),
                ne = t["\u0275crt"]({
                    encapsulation: 2,
                    styles: [],
                    data: {}
                });

            function ee(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 16777216, null, null, 2, ":svg:g", [
                    ["ngx-charts-tree-map-cell", ""],
                    ["ngx-tooltip", ""]
                ], null, [
                    [null, "select"],
                    [null, "focusin"],
                    [null, "blur"],
                    [null, "mouseenter"],
                    [null, "mouseleave"],
                    [null, "click"]
                ], function(l, n, e) {
                    var a = !0,
                        i = l.component;
                    return "focusin" === n && (a = !1 !== t["\u0275nov"](l, 1).onFocus() && a), "blur" === n && (a = !1 !== t["\u0275nov"](l, 1).onBlur() && a), "mouseenter" === n && (a = !1 !== t["\u0275nov"](l, 1).onMouseEnter() && a), "mouseleave" === n && (a = !1 !== t["\u0275nov"](l, 1).onMouseLeave(e.target) && a), "click" === n && (a = !1 !== t["\u0275nov"](l, 1).onMouseClick() && a), "select" === n && (a = !1 !== i.onClick(e) && a), a
                }, Qn, qn)), t["\u0275did"](1, 147456, null, 0, T.a, [C.a, t.ViewContainerRef, t.Renderer], {
                    tooltipTitle: [0, "tooltipTitle"],
                    tooltipDisabled: [1, "tooltipDisabled"],
                    tooltipPlacement: [2, "tooltipPlacement"],
                    tooltipType: [3, "tooltipType"],
                    tooltipTemplate: [4, "tooltipTemplate"],
                    tooltipContext: [5, "tooltipContext"]
                }, null), t["\u0275did"](2, 573440, null, 0, Zn.a, [t.ElementRef], {
                    data: [0, "data"],
                    fill: [1, "fill"],
                    x: [2, "x"],
                    y: [3, "y"],
                    width: [4, "width"],
                    height: [5, "height"],
                    label: [6, "label"],
                    value: [7, "value"],
                    valueType: [8, "valueType"],
                    valueFormatting: [9, "valueFormatting"],
                    labelFormatting: [10, "labelFormatting"],
                    gradient: [11, "gradient"],
                    animations: [12, "animations"]
                }, {
                    select: "select"
                }), (l()(), t["\u0275and"](0, null, null, 0))], function(l, n) {
                    var e = n.component;
                    l(n, 1, 0, e.tooltipTemplate ? void 0 : e.getTooltipText(n.context.$implicit), e.tooltipDisabled, "top", "tooltip", e.tooltipTemplate, n.context.$implicit.data), l(n, 2, 1, [n.context.$implicit, n.context.$implicit.fill, n.context.$implicit.x, n.context.$implicit.y, n.context.$implicit.width, n.context.$implicit.height, n.context.$implicit.label, n.context.$implicit.value, n.context.$implicit.valueType, e.valueFormatting, e.labelFormatting, e.gradient, e.animations])
                }, null)
            }

            function te(l) {
                return t["\u0275vid"](2, [(l()(), t["\u0275and"](16777216, null, null, 1, null, ee)), t["\u0275did"](1, 802816, null, 0, L.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                    ngForOf: [0, "ngForOf"],
                    ngForTrackBy: [1, "ngForTrackBy"]
                }, null)], function(l, n) {
                    var e = n.component;
                    l(n, 1, 0, e.cells, e.trackBy)
                }, null)
            }
            var ae = e("HdwL"),
                ie = t["\u0275crt"]({
                    encapsulation: 2,
                    styles: [
                        [".tree-map .treemap-val{font-size:1.3em;padding-top:5px;display:inline-block}.tree-map .label p{display:table-cell;text-align:center;line-height:1.2em;vertical-align:middle}"]
                    ],
                    data: {}
                });

            function ue(l) {
                return t["\u0275vid"](2, [(l()(), t["\u0275eld"](0, 16777216, null, null, 6, "ngx-charts-chart", [], null, null, null, y.b, y.a)), t["\u0275prd"](512, null, C.a, C.a, [k.a]), t["\u0275did"](2, 573440, null, 0, w.a, [t.ViewContainerRef, C.a], {
                    view: [0, "view"],
                    showLegend: [1, "showLegend"],
                    animations: [2, "animations"]
                }, null), t["\u0275pad"](3, 2), (l()(), t["\u0275eld"](4, 0, null, 0, 2, ":svg:g", [
                    ["class", "tree-map chart"]
                ], [
                    [1, "transform", 0]
                ], null, null, null, null)), (l()(), t["\u0275eld"](5, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-tree-map-cell-series", ""]
                ], null, [
                    [null, "select"]
                ], function(l, n, e) {
                    var t = !0;
                    return "select" === n && (t = !1 !== l.component.onClick(e) && t), t
                }, te, ne)), t["\u0275did"](6, 573440, null, 0, le.a, [], {
                    data: [0, "data"],
                    dims: [1, "dims"],
                    colors: [2, "colors"],
                    valueFormatting: [3, "valueFormatting"],
                    labelFormatting: [4, "labelFormatting"],
                    gradient: [5, "gradient"],
                    tooltipDisabled: [6, "tooltipDisabled"],
                    tooltipTemplate: [7, "tooltipTemplate"],
                    animations: [8, "animations"]
                }, {
                    select: "select"
                })], function(l, n) {
                    var e = n.component;
                    l(n, 2, 0, l(n, 3, 0, e.width, e.height), !1, e.animations), l(n, 6, 0, e.data, e.dims, e.colors, e.valueFormatting, e.labelFormatting, e.gradient, e.tooltipDisabled, e.tooltipTemplate, e.animations)
                }, function(l, n) {
                    l(n, 4, 0, n.component.transform)
                })
            }
            var oe = e("kUEE"),
                se = t["\u0275crt"]({
                    encapsulation: 2,
                    styles: [],
                    data: {}
                });

            function ce(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 0, ":svg:path", [
                    ["class", "card-band"],
                    ["stroke", "none"]
                ], [
                    [1, "fill", 0],
                    [1, "transform", 0],
                    [1, "d", 0]
                ], null, null, null, null))], null, function(l, n) {
                    var e = n.component;
                    l(n, 0, 0, e.bandColor, e.transformBand, e.bandPath)
                })
            }

            function re(l) {
                return t["\u0275vid"](2, [t["\u0275qud"](402653184, 1, {
                    textEl: 0
                }), (l()(), t["\u0275eld"](1, 0, null, null, 9, ":svg:g", [
                    ["class", "cell"]
                ], [
                    [1, "transform", 0]
                ], [
                    [null, "click"]
                ], function(l, n, e) {
                    var t = !0;
                    return "click" === n && (t = !1 !== l.component.onClick() && t), t
                }, null, null)), (l()(), t["\u0275eld"](2, 0, null, null, 0, ":svg:rect", [
                    ["class", "card"],
                    ["rx", "3"],
                    ["ry", "3"]
                ], [
                    [4, "fill", null],
                    [1, "width", 0],
                    [1, "height", 0]
                ], null, null, null, null)), (l()(), t["\u0275and"](16777216, null, null, 1, null, ce)), t["\u0275did"](4, 16384, null, 0, L.NgIf, [t.ViewContainerRef, t.TemplateRef], {
                    ngIf: [0, "ngIf"]
                }, null), (l()(), t["\u0275eld"](5, 0, null, null, 1, ":svg:title", [], null, null, null, null, null)), (l()(), t["\u0275ted"](6, null, ["", ""])), (l()(), t["\u0275eld"](7, 0, null, null, 1, ":svg:foreignObject", [
                    ["alignment-baseline", "hanging"],
                    ["class", "trimmed-label"],
                    ["x", "5"]
                ], [
                    [1, "x", 0],
                    [1, "y", 0],
                    [1, "width", 0],
                    [1, "height", 0]
                ], null, null, null, null)), (l()(), t["\u0275eld"](8, 0, null, null, 0, ":xhtml:p", [], [
                    [4, "color", null],
                    [4, "fontSize", "px"],
                    [4, "lineHeight", "px"],
                    [8, "innerHTML", 1]
                ], null, null, null, null)), (l()(), t["\u0275eld"](9, 0, [
                    [1, 0],
                    ["textEl", 1]
                ], null, 1, ":svg:text", [
                    ["alignment-baseline", "hanging"],
                    ["class", "value-text"],
                    ["text-anchor", "start"]
                ], [
                    [1, "x", 0],
                    [1, "y", 0],
                    [4, "fill", null],
                    [4, "font-size", "pt"]
                ], null, null, null, null)), (l()(), t["\u0275ted"](10, null, [" ", " "]))], function(l, n) {
                    var e = n.component;
                    l(n, 4, 0, e.bandColor && e.bandColor !== e.color)
                }, function(l, n) {
                    var e = n.component;
                    l(n, 1, 0, e.transform), l(n, 2, 0, e.color, e.cardWidth, e.cardHeight), l(n, 6, 0, e.label), l(n, 7, 0, e.textPadding[3], e.cardHeight - e.textPadding[2], e.textWidth, e.labelFontSize + e.textPadding[2]), l(n, 8, 0, e.textColor, e.labelFontSize, e.labelFontSize, e.formattedLabel), l(n, 9, 0, e.textPadding[3], e.textPadding[0], e.textColor, e.textFontSize), l(n, 10, 0, e.value)
                })
            }
            var de = e("aUPb"),
                ge = t["\u0275crt"]({
                    encapsulation: 2,
                    styles: [],
                    data: {}
                });

            function he(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 0, ":svg:rect", [
                    ["class", "card-empty"],
                    ["rx", "3"],
                    ["ry", "3"]
                ], [
                    [1, "x", 0],
                    [1, "y", 0],
                    [4, "fill", null],
                    [1, "width", 0],
                    [1, "height", 0]
                ], null, null, null, null))], null, function(l, n) {
                    l(n, 0, 0, n.context.$implicit.x, n.context.$implicit.y, n.component.emptyColor, n.context.$implicit.width, n.context.$implicit.height)
                })
            }

            function me(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-card", ""]
                ], null, [
                    [null, "select"]
                ], function(l, n, e) {
                    var t = !0;
                    return "select" === n && (t = !1 !== l.component.onClick(e) && t), t
                }, re, se)), t["\u0275did"](1, 704512, null, 0, oe.a, [t.ElementRef, t.ChangeDetectorRef, t.NgZone], {
                    color: [0, "color"],
                    bandColor: [1, "bandColor"],
                    textColor: [2, "textColor"],
                    x: [3, "x"],
                    y: [4, "y"],
                    width: [5, "width"],
                    height: [6, "height"],
                    data: [7, "data"],
                    medianSize: [8, "medianSize"],
                    valueFormatting: [9, "valueFormatting"],
                    labelFormatting: [10, "labelFormatting"],
                    animations: [11, "animations"]
                }, {
                    select: "select"
                })], function(l, n) {
                    var e = n.component;
                    l(n, 1, 1, [n.context.$implicit.color, n.context.$implicit.bandColor, n.context.$implicit.textColor, n.context.$implicit.x, n.context.$implicit.y, n.context.$implicit.width, n.context.$implicit.height, n.context.$implicit.data, e.medianSize, e.valueFormatting, e.labelFormatting, e.animations])
                }, null)
            }

            function pe(l) {
                return t["\u0275vid"](2, [(l()(), t["\u0275and"](16777216, null, null, 1, null, he)), t["\u0275did"](1, 802816, null, 0, L.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                    ngForOf: [0, "ngForOf"],
                    ngForTrackBy: [1, "ngForTrackBy"]
                }, null), (l()(), t["\u0275and"](16777216, null, null, 1, null, me)), t["\u0275did"](3, 802816, null, 0, L.NgForOf, [t.ViewContainerRef, t.TemplateRef, t.IterableDiffers], {
                    ngForOf: [0, "ngForOf"],
                    ngForTrackBy: [1, "ngForTrackBy"]
                }, null)], function(l, n) {
                    var e = n.component;
                    l(n, 1, 0, e.emptySlots, e.trackBy), l(n, 3, 0, e.cards, e.trackBy)
                }, null)
            }
            var ve = e("WPE4"),
                xe = t["\u0275crt"]({
                    encapsulation: 2,
                    styles: [p.a, ["ngx-charts-number-card .cell .trimmed-label{font-size:12px;pointer-events:none;overflow:hidden;text-align:left;line-height:1em}ngx-charts-number-card .cell .trimmed-label p{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;width:100%;padding:0;margin:0}ngx-charts-number-card .cell .value-text{pointer-events:none}ngx-charts-number-card .number-card.clickable .cell .card,ngx-charts-number-card .number-card.clickable .cell .card-band{cursor:pointer}"]],
                    data: {}
                });

            function fe(l) {
                return t["\u0275vid"](2, [(l()(), t["\u0275eld"](0, 16777216, null, null, 6, "ngx-charts-chart", [], null, null, null, y.b, y.a)), t["\u0275prd"](512, null, C.a, C.a, [k.a]), t["\u0275did"](2, 573440, null, 0, w.a, [t.ViewContainerRef, C.a], {
                    view: [0, "view"],
                    showLegend: [1, "showLegend"],
                    animations: [2, "animations"]
                }, null), t["\u0275pad"](3, 2), (l()(), t["\u0275eld"](4, 0, null, 0, 2, ":svg:g", [
                    ["class", "number-card chart"]
                ], [
                    [1, "transform", 0],
                    [2, "clickable", null]
                ], null, null, null, null)), (l()(), t["\u0275eld"](5, 0, null, null, 1, ":svg:g", [
                    ["ngx-charts-card-series", ""]
                ], null, [
                    [null, "select"]
                ], function(l, n, e) {
                    var t = !0;
                    return "select" === n && (t = !1 !== l.component.onClick(e) && t), t
                }, pe, ge)), t["\u0275did"](6, 573440, null, 0, de.a, [], {
                    data: [0, "data"],
                    dims: [1, "dims"],
                    colors: [2, "colors"],
                    innerPadding: [3, "innerPadding"],
                    cardColor: [4, "cardColor"],
                    bandColor: [5, "bandColor"],
                    emptyColor: [6, "emptyColor"],
                    textColor: [7, "textColor"],
                    valueFormatting: [8, "valueFormatting"],
                    labelFormatting: [9, "labelFormatting"],
                    animations: [10, "animations"]
                }, {
                    select: "select"
                })], function(l, n) {
                    var e = n.component;
                    l(n, 2, 0, l(n, 3, 0, e.width, e.height), !1, e.animations), l(n, 6, 1, [e.data, e.dims, e.colors, e.innerPadding, e.cardColor, e.bandColor, e.emptyColor, e.textColor, e.valueFormatting, e.labelFormatting, e.animations])
                }, function(l, n) {
                    var e = n.component;
                    l(n, 4, 0, e.transform, e.clickable)
                })
            }
            var be = function() {
                    function l(l) {
                        this.pageTitleService = l, this.single = [{
                            name: "Germany",
                            value: 894e4
                        }, {
                            name: "USA",
                            value: 5e6
                        }, {
                            name: "France",
                            value: 72e5
                        }], this.multi = [{
                            name: "Germany",
                            series: [{
                                name: "2010",
                                value: 73e5
                            }, {
                                name: "2011",
                                value: 894e4
                            }]
                        }, {
                            name: "USA",
                            series: [{
                                name: "2010",
                                value: 787e4
                            }, {
                                name: "2011",
                                value: 827e4
                            }]
                        }, {
                            name: "France",
                            series: [{
                                name: "2010",
                                value: 5000002
                            }, {
                                name: "2011",
                                value: 58e5
                            }]
                        }], this.view = [700, 400], this.showXAxis = !0, this.showYAxis = !0, this.gradient = !1, this.showLegend = !0, this.showXAxisLabel = !0, this.xAxisLabel = "Country", this.showYAxisLabel = !0, this.yAxisLabel = "Population", this.showLabels = !0, this.explodeSlices = !1, this.doughnut = !1, this.autoScale = !0, this.colorScheme = {
                            domain: ["#0066eb", "#00caac", "#ff5723", "#414658"]
                        }
                    }
                    return l.prototype.ngOnInit = function() {
                        this.pageTitleService.setTitle("Ngx Charts")
                    }, l.prototype.onSelect = function(l) {
                        console.log(l)
                    }, l
                }(),
                ye = t["\u0275crt"]({
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

            function Ce(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 174, "div", [
                    ["class", "ngx-chart-wrapper"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](1, 0, null, null, 18, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](2, 0, null, null, 8, "div", [
                    ["class", "col-md-12 col-lg-6"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](3, 0, null, null, 7, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](4, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](5, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["Vertical Bar Chart"])), (l()(), t["\u0275eld"](7, 0, null, null, 3, "div", [
                    ["class", "chk-block-content over-hidden"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](8, 0, null, null, 2, "ngx-charts-bar-vertical", [], null, [
                    [null, "select"]
                ], function(l, n, e) {
                    var t = !0;
                    return "select" === n && (t = !1 !== l.component.onSelect(e) && t), t
                }, h.b, h.a)), t["\u0275did"](9, 4898816, null, 1, m.a, [t.ElementRef, t.NgZone, t.ChangeDetectorRef], {
                    results: [0, "results"],
                    view: [1, "view"],
                    scheme: [2, "scheme"],
                    legend: [3, "legend"],
                    xAxis: [4, "xAxis"],
                    yAxis: [5, "yAxis"],
                    showXAxisLabel: [6, "showXAxisLabel"],
                    showYAxisLabel: [7, "showYAxisLabel"],
                    xAxisLabel: [8, "xAxisLabel"],
                    yAxisLabel: [9, "yAxisLabel"],
                    gradient: [10, "gradient"]
                }, {
                    select: "select"
                }), t["\u0275qud"](335544320, 1, {
                    tooltipTemplate: 0
                }), (l()(), t["\u0275eld"](11, 0, null, null, 8, "div", [
                    ["class", "col-md-12 col-lg-6"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](12, 0, null, null, 7, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](13, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](14, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["Horizontal Bar Chart"])), (l()(), t["\u0275eld"](16, 0, null, null, 3, "div", [
                    ["class", "chk-block-content over-hidden"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](17, 0, null, null, 2, "ngx-charts-bar-horizontal", [], null, [
                    [null, "select"]
                ], function(l, n, e) {
                    var t = !0;
                    return "select" === n && (t = !1 !== l.component.onSelect(e) && t), t
                }, X, z)), t["\u0275did"](18, 4898816, null, 1, N.a, [t.ElementRef, t.NgZone, t.ChangeDetectorRef], {
                    results: [0, "results"],
                    view: [1, "view"],
                    scheme: [2, "scheme"],
                    legend: [3, "legend"],
                    xAxis: [4, "xAxis"],
                    yAxis: [5, "yAxis"],
                    showXAxisLabel: [6, "showXAxisLabel"],
                    showYAxisLabel: [7, "showYAxisLabel"],
                    xAxisLabel: [8, "xAxisLabel"],
                    yAxisLabel: [9, "yAxisLabel"],
                    gradient: [10, "gradient"]
                }, {
                    select: "select"
                }), t["\u0275qud"](335544320, 2, {
                    tooltipTemplate: 0
                }), (l()(), t["\u0275eld"](20, 0, null, null, 18, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](21, 0, null, null, 8, "div", [
                    ["class", "col-md-12 col-lg-6"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](22, 0, null, null, 7, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](23, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](24, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["Grouped Vertical Bar Chart"])), (l()(), t["\u0275eld"](26, 0, null, null, 3, "div", [
                    ["class", "chk-block-content over-hidden"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](27, 0, null, null, 2, "ngx-charts-bar-vertical-2d", [], null, [
                    [null, "select"]
                ], function(l, n, e) {
                    var t = !0;
                    return "select" === n && (t = !1 !== l.component.onSelect(e) && t), t
                }, nl, J)), t["\u0275did"](28, 4898816, null, 1, U.a, [t.ElementRef, t.NgZone, t.ChangeDetectorRef], {
                    results: [0, "results"],
                    view: [1, "view"],
                    scheme: [2, "scheme"],
                    legend: [3, "legend"],
                    xAxis: [4, "xAxis"],
                    yAxis: [5, "yAxis"],
                    showXAxisLabel: [6, "showXAxisLabel"],
                    showYAxisLabel: [7, "showYAxisLabel"],
                    xAxisLabel: [8, "xAxisLabel"],
                    yAxisLabel: [9, "yAxisLabel"],
                    gradient: [10, "gradient"]
                }, {
                    select: "select"
                }), t["\u0275qud"](335544320, 3, {
                    tooltipTemplate: 0
                }), (l()(), t["\u0275eld"](30, 0, null, null, 8, "div", [
                    ["class", "col-md-12 col-lg-6"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](31, 0, null, null, 7, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](32, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](33, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["Grouped Horizontal Bar Chart"])), (l()(), t["\u0275eld"](35, 0, null, null, 3, "div", [
                    ["class", "chk-block-content over-hidden"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](36, 0, null, null, 2, "ngx-charts-bar-horizontal-2d", [], null, [
                    [null, "select"]
                ], function(l, n, e) {
                    var t = !0;
                    return "select" === n && (t = !1 !== l.component.onSelect(e) && t), t
                }, ol, tl)), t["\u0275did"](37, 4898816, null, 1, el.a, [t.ElementRef, t.NgZone, t.ChangeDetectorRef], {
                    results: [0, "results"],
                    view: [1, "view"],
                    scheme: [2, "scheme"],
                    legend: [3, "legend"],
                    xAxis: [4, "xAxis"],
                    yAxis: [5, "yAxis"],
                    showXAxisLabel: [6, "showXAxisLabel"],
                    showYAxisLabel: [7, "showYAxisLabel"],
                    xAxisLabel: [8, "xAxisLabel"],
                    yAxisLabel: [9, "yAxisLabel"],
                    gradient: [10, "gradient"]
                }, {
                    select: "select"
                }), t["\u0275qud"](335544320, 4, {
                    tooltipTemplate: 0
                }), (l()(), t["\u0275eld"](39, 0, null, null, 18, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](40, 0, null, null, 8, "div", [
                    ["class", "col-md-12 col-lg-6"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](41, 0, null, null, 7, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](42, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](43, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["Stacked Vertical Bar Chart"])), (l()(), t["\u0275eld"](45, 0, null, null, 3, "div", [
                    ["class", "chk-block-content over-hidden"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](46, 0, null, null, 2, "ngx-charts-bar-vertical-stacked", [], null, [
                    [null, "select"]
                ], function(l, n, e) {
                    var t = !0;
                    return "select" === n && (t = !1 !== l.component.onSelect(e) && t), t
                }, hl, cl)), t["\u0275did"](47, 4898816, null, 1, sl.a, [t.ElementRef, t.NgZone, t.ChangeDetectorRef], {
                    results: [0, "results"],
                    view: [1, "view"],
                    scheme: [2, "scheme"],
                    legend: [3, "legend"],
                    xAxis: [4, "xAxis"],
                    yAxis: [5, "yAxis"],
                    showXAxisLabel: [6, "showXAxisLabel"],
                    showYAxisLabel: [7, "showYAxisLabel"],
                    xAxisLabel: [8, "xAxisLabel"],
                    yAxisLabel: [9, "yAxisLabel"],
                    gradient: [10, "gradient"]
                }, {
                    select: "select"
                }), t["\u0275qud"](335544320, 5, {
                    tooltipTemplate: 0
                }), (l()(), t["\u0275eld"](49, 0, null, null, 8, "div", [
                    ["class", "col-md-12 col-lg-6"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](50, 0, null, null, 7, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](51, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](52, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["Stacked Horizontal Bar Chart"])), (l()(), t["\u0275eld"](54, 0, null, null, 3, "div", [
                    ["class", "chk-block-content over-hidden"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](55, 0, null, null, 2, "ngx-charts-bar-horizontal-stacked", [], null, [
                    [null, "select"]
                ], function(l, n, e) {
                    var t = !0;
                    return "select" === n && (t = !1 !== l.component.onSelect(e) && t), t
                }, bl, pl)), t["\u0275did"](56, 4898816, null, 1, ml.a, [t.ElementRef, t.NgZone, t.ChangeDetectorRef], {
                    results: [0, "results"],
                    view: [1, "view"],
                    scheme: [2, "scheme"],
                    legend: [3, "legend"],
                    xAxis: [4, "xAxis"],
                    yAxis: [5, "yAxis"],
                    showXAxisLabel: [6, "showXAxisLabel"],
                    showYAxisLabel: [7, "showYAxisLabel"],
                    xAxisLabel: [8, "xAxisLabel"],
                    yAxisLabel: [9, "yAxisLabel"],
                    gradient: [10, "gradient"]
                }, {
                    select: "select"
                }), t["\u0275qud"](335544320, 6, {
                    tooltipTemplate: 0
                }), (l()(), t["\u0275eld"](58, 0, null, null, 18, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](59, 0, null, null, 8, "div", [
                    ["class", "col-md-12 col-lg-6"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](60, 0, null, null, 7, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](61, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](62, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["Normalized Vertical Bar"])), (l()(), t["\u0275eld"](64, 0, null, null, 3, "div", [
                    ["class", "chk-block-content over-hidden"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](65, 0, null, null, 2, "ngx-charts-bar-vertical-normalized", [], null, [
                    [null, "select"]
                ], function(l, n, e) {
                    var t = !0;
                    return "select" === n && (t = !1 !== l.component.onSelect(e) && t), t
                }, Al, Cl)), t["\u0275did"](66, 4898816, null, 1, yl.a, [t.ElementRef, t.NgZone, t.ChangeDetectorRef], {
                    results: [0, "results"],
                    view: [1, "view"],
                    scheme: [2, "scheme"],
                    legend: [3, "legend"],
                    xAxis: [4, "xAxis"],
                    yAxis: [5, "yAxis"],
                    showXAxisLabel: [6, "showXAxisLabel"],
                    showYAxisLabel: [7, "showYAxisLabel"],
                    xAxisLabel: [8, "xAxisLabel"],
                    yAxisLabel: [9, "yAxisLabel"],
                    gradient: [10, "gradient"]
                }, {
                    select: "select"
                }), t["\u0275qud"](335544320, 7, {
                    tooltipTemplate: 0
                }), (l()(), t["\u0275eld"](68, 0, null, null, 8, "div", [
                    ["class", "col-md-12 col-lg-6"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](69, 0, null, null, 7, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](70, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](71, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["Normalized Horizontal Bar"])), (l()(), t["\u0275eld"](73, 0, null, null, 3, "div", [
                    ["class", "chk-block-content over-hidden"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](74, 0, null, null, 2, "ngx-charts-bar-horizontal-normalized", [], null, [
                    [null, "select"]
                ], function(l, n, e) {
                    var t = !0;
                    return "select" === n && (t = !1 !== l.component.onSelect(e) && t), t
                }, El, Sl)), t["\u0275did"](75, 4898816, null, 1, Tl.a, [t.ElementRef, t.NgZone, t.ChangeDetectorRef], {
                    results: [0, "results"],
                    view: [1, "view"],
                    scheme: [2, "scheme"],
                    legend: [3, "legend"],
                    xAxis: [4, "xAxis"],
                    yAxis: [5, "yAxis"],
                    showXAxisLabel: [6, "showXAxisLabel"],
                    showYAxisLabel: [7, "showYAxisLabel"],
                    xAxisLabel: [8, "xAxisLabel"],
                    yAxisLabel: [9, "yAxisLabel"],
                    gradient: [10, "gradient"]
                }, {
                    select: "select"
                }), t["\u0275qud"](335544320, 8, {
                    tooltipTemplate: 0
                }), (l()(), t["\u0275eld"](77, 0, null, null, 18, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](78, 0, null, null, 8, "div", [
                    ["class", "col-md-12 col-lg-6"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](79, 0, null, null, 7, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](80, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](81, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["Pie Chart"])), (l()(), t["\u0275eld"](83, 0, null, null, 3, "div", [
                    ["class", "chk-block-content over-hidden"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](84, 0, null, null, 2, "ngx-charts-pie-chart", [], null, [
                    [null, "select"]
                ], function(l, n, e) {
                    var t = !0;
                    return "select" === n && (t = !1 !== l.component.onSelect(e) && t), t
                }, Il.b, Il.a)), t["\u0275did"](85, 4898816, null, 1, Ol.a, [t.ElementRef, t.NgZone, t.ChangeDetectorRef], {
                    results: [0, "results"],
                    view: [1, "view"],
                    scheme: [2, "scheme"],
                    labels: [3, "labels"],
                    legend: [4, "legend"],
                    explodeSlices: [5, "explodeSlices"],
                    doughnut: [6, "doughnut"],
                    gradient: [7, "gradient"]
                }, {
                    select: "select"
                }), t["\u0275qud"](335544320, 9, {
                    tooltipTemplate: 0
                }), (l()(), t["\u0275eld"](87, 0, null, null, 8, "div", [
                    ["class", "col-md-12 col-lg-6"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](88, 0, null, null, 7, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](89, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](90, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["Advanced Pie Chart"])), (l()(), t["\u0275eld"](92, 0, null, null, 3, "div", [
                    ["class", "chk-block-content over-hidden"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](93, 0, null, null, 2, "ngx-charts-advanced-pie-chart", [], null, [
                    [null, "select"]
                ], function(l, n, e) {
                    var t = !0;
                    return "select" === n && (t = !1 !== l.component.onSelect(e) && t), t
                }, $l.b, $l.a)), t["\u0275did"](94, 4898816, null, 1, Bl.a, [t.ElementRef, t.NgZone, t.ChangeDetectorRef], {
                    results: [0, "results"],
                    view: [1, "view"],
                    scheme: [2, "scheme"],
                    gradient: [3, "gradient"]
                }, {
                    select: "select"
                }), t["\u0275qud"](335544320, 10, {
                    tooltipTemplate: 0
                }), (l()(), t["\u0275eld"](96, 0, null, null, 19, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](97, 0, null, null, 8, "div", [
                    ["class", "col-md-12 col-lg-6"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](98, 0, null, null, 7, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](99, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](100, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["Pie Grid Chart"])), (l()(), t["\u0275eld"](102, 0, null, null, 3, "div", [
                    ["class", "chk-block-content over-hidden"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](103, 0, null, null, 2, "ngx-charts-pie-grid", [], null, [
                    [null, "select"]
                ], function(l, n, e) {
                    var t = !0;
                    return "select" === n && (t = !1 !== l.component.onSelect(e) && t), t
                }, Jl, Gl)), t["\u0275did"](104, 4898816, null, 1, Wl.a, [t.ElementRef, t.NgZone, t.ChangeDetectorRef], {
                    results: [0, "results"],
                    view: [1, "view"],
                    scheme: [2, "scheme"]
                }, {
                    select: "select"
                }), t["\u0275qud"](335544320, 11, {
                    tooltipTemplate: 0
                }), (l()(), t["\u0275eld"](106, 0, null, null, 9, "div", [
                    ["class", "col-md-12 col-lg-6"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](107, 0, null, null, 8, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](108, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](109, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["Line Chart"])), (l()(), t["\u0275eld"](111, 0, null, null, 4, "div", [
                    ["class", "chk-block-content over-hidden"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](112, 0, null, null, 3, "ngx-charts-line-chart", [], null, [
                    [null, "select"],
                    [null, "mouseleave"]
                ], function(l, n, e) {
                    var a = !0,
                        i = l.component;
                    return "mouseleave" === n && (a = !1 !== t["\u0275nov"](l, 113).hideCircles() && a), "select" === n && (a = !1 !== i.onSelect(e) && a), a
                }, Kl.b, Kl.a)), t["\u0275did"](113, 4898816, null, 2, Ql.a, [t.ElementRef, t.NgZone, t.ChangeDetectorRef], {
                    results: [0, "results"],
                    view: [1, "view"],
                    scheme: [2, "scheme"],
                    legend: [3, "legend"],
                    xAxis: [4, "xAxis"],
                    yAxis: [5, "yAxis"],
                    showXAxisLabel: [6, "showXAxisLabel"],
                    showYAxisLabel: [7, "showYAxisLabel"],
                    xAxisLabel: [8, "xAxisLabel"],
                    yAxisLabel: [9, "yAxisLabel"],
                    autoScale: [10, "autoScale"],
                    gradient: [11, "gradient"]
                }, {
                    select: "select"
                }), t["\u0275qud"](335544320, 12, {
                    tooltipTemplate: 0
                }), t["\u0275qud"](335544320, 13, {
                    seriesTooltipTemplate: 0
                }), (l()(), t["\u0275eld"](116, 0, null, null, 20, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](117, 0, null, null, 9, "div", [
                    ["class", "col-md-12 col-lg-6"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](118, 0, null, null, 8, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](119, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](120, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["Area Chart"])), (l()(), t["\u0275eld"](122, 0, null, null, 4, "div", [
                    ["class", "chk-block-content over-hidden"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](123, 0, null, null, 3, "ngx-charts-area-chart", [], null, [
                    [null, "select"],
                    [null, "mouseleave"]
                ], function(l, n, e) {
                    var a = !0,
                        i = l.component;
                    return "mouseleave" === n && (a = !1 !== t["\u0275nov"](l, 124).hideCircles() && a), "select" === n && (a = !1 !== i.onSelect(e) && a), a
                }, ln.b, ln.a)), t["\u0275did"](124, 4898816, null, 2, nn.a, [t.ElementRef, t.NgZone, t.ChangeDetectorRef], {
                    results: [0, "results"],
                    view: [1, "view"],
                    scheme: [2, "scheme"],
                    legend: [3, "legend"],
                    xAxis: [4, "xAxis"],
                    yAxis: [5, "yAxis"],
                    autoScale: [6, "autoScale"],
                    showXAxisLabel: [7, "showXAxisLabel"],
                    showYAxisLabel: [8, "showYAxisLabel"],
                    xAxisLabel: [9, "xAxisLabel"],
                    yAxisLabel: [10, "yAxisLabel"],
                    gradient: [11, "gradient"]
                }, {
                    select: "select"
                }), t["\u0275qud"](335544320, 14, {
                    tooltipTemplate: 0
                }), t["\u0275qud"](335544320, 15, {
                    seriesTooltipTemplate: 0
                }), (l()(), t["\u0275eld"](127, 0, null, null, 9, "div", [
                    ["class", "col-md-12 col-lg-6"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](128, 0, null, null, 8, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](129, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](130, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["Stacked Area Chart"])), (l()(), t["\u0275eld"](132, 0, null, null, 4, "div", [
                    ["class", "chk-block-content over-hidden"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](133, 0, null, null, 3, "ngx-charts-area-chart-stacked", [], null, [
                    [null, "select"],
                    [null, "mouseleave"]
                ], function(l, n, e) {
                    var a = !0,
                        i = l.component;
                    return "mouseleave" === n && (a = !1 !== t["\u0275nov"](l, 134).hideCircles() && a), "select" === n && (a = !1 !== i.onSelect(e) && a), a
                }, yn, gn)), t["\u0275did"](134, 4898816, null, 2, dn.a, [t.ElementRef, t.NgZone, t.ChangeDetectorRef], {
                    results: [0, "results"],
                    view: [1, "view"],
                    scheme: [2, "scheme"],
                    legend: [3, "legend"],
                    xAxis: [4, "xAxis"],
                    yAxis: [5, "yAxis"],
                    showXAxisLabel: [6, "showXAxisLabel"],
                    showYAxisLabel: [7, "showYAxisLabel"],
                    xAxisLabel: [8, "xAxisLabel"],
                    yAxisLabel: [9, "yAxisLabel"],
                    gradient: [10, "gradient"]
                }, {
                    select: "select"
                }), t["\u0275qud"](335544320, 16, {
                    tooltipTemplate: 0
                }), t["\u0275qud"](335544320, 17, {
                    seriesTooltipTemplate: 0
                }), (l()(), t["\u0275eld"](137, 0, null, null, 19, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](138, 0, null, null, 9, "div", [
                    ["class", "col-md-12 col-lg-6"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](139, 0, null, null, 8, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](140, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](141, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["Normalized Area Chart"])), (l()(), t["\u0275eld"](143, 0, null, null, 4, "div", [
                    ["class", "chk-block-content over-hidden"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](144, 0, null, null, 3, "ngx-charts-area-chart-normalized", [], null, [
                    [null, "select"],
                    [null, "mouseleave"]
                ], function(l, n, e) {
                    var a = !0,
                        i = l.component;
                    return "mouseleave" === n && (a = !1 !== t["\u0275nov"](l, 145).hideCircles() && a), "select" === n && (a = !1 !== i.onSelect(e) && a), a
                }, Fn, kn)), t["\u0275did"](145, 4898816, null, 2, Cn.a, [t.ElementRef, t.NgZone, t.ChangeDetectorRef], {
                    results: [0, "results"],
                    view: [1, "view"],
                    scheme: [2, "scheme"],
                    legend: [3, "legend"],
                    xAxis: [4, "xAxis"],
                    yAxis: [5, "yAxis"],
                    showXAxisLabel: [6, "showXAxisLabel"],
                    showYAxisLabel: [7, "showYAxisLabel"],
                    xAxisLabel: [8, "xAxisLabel"],
                    yAxisLabel: [9, "yAxisLabel"],
                    gradient: [10, "gradient"]
                }, {
                    select: "select"
                }), t["\u0275qud"](335544320, 18, {
                    tooltipTemplate: 0
                }), t["\u0275qud"](335544320, 19, {
                    seriesTooltipTemplate: 0
                }), (l()(), t["\u0275eld"](148, 0, null, null, 8, "div", [
                    ["class", "col-md-12 col-lg-6"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](149, 0, null, null, 7, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](150, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](151, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["Heat Map Chart"])), (l()(), t["\u0275eld"](153, 0, null, null, 3, "div", [
                    ["class", "chk-block-content over-hidden"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](154, 0, null, null, 2, "ngx-charts-heat-map", [], null, [
                    [null, "select"]
                ], function(l, n, e) {
                    var t = !0;
                    return "select" === n && (t = !1 !== l.component.onSelect(e) && t), t
                }, jn, Hn)), t["\u0275did"](155, 4898816, null, 1, Pn.a, [t.ElementRef, t.NgZone, t.ChangeDetectorRef], {
                    results: [0, "results"],
                    view: [1, "view"],
                    scheme: [2, "scheme"],
                    legend: [3, "legend"],
                    xAxis: [4, "xAxis"],
                    yAxis: [5, "yAxis"],
                    showXAxisLabel: [6, "showXAxisLabel"],
                    showYAxisLabel: [7, "showYAxisLabel"],
                    xAxisLabel: [8, "xAxisLabel"],
                    yAxisLabel: [9, "yAxisLabel"],
                    gradient: [10, "gradient"]
                }, {
                    select: "select"
                }), t["\u0275qud"](335544320, 20, {
                    tooltipTemplate: 0
                }), (l()(), t["\u0275eld"](157, 0, null, null, 17, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](158, 0, null, null, 8, "div", [
                    ["class", "col-md-12 col-lg-6"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](159, 0, null, null, 7, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](160, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](161, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["Tree Map Chart"])), (l()(), t["\u0275eld"](163, 0, null, null, 3, "div", [
                    ["class", "chk-block-content over-hidden"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](164, 0, null, null, 2, "ngx-charts-tree-map", [], null, [
                    [null, "select"]
                ], function(l, n, e) {
                    var t = !0;
                    return "select" === n && (t = !1 !== l.component.onSelect(e) && t), t
                }, ue, ie)), t["\u0275did"](165, 4898816, null, 1, ae.a, [t.ElementRef, t.NgZone, t.ChangeDetectorRef], {
                    results: [0, "results"],
                    view: [1, "view"],
                    scheme: [2, "scheme"]
                }, {
                    select: "select"
                }), t["\u0275qud"](335544320, 21, {
                    tooltipTemplate: 0
                }), (l()(), t["\u0275eld"](167, 0, null, null, 7, "div", [
                    ["class", "col-md-12 col-lg-6"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](168, 0, null, null, 6, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](169, 0, null, null, 2, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](170, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["Number Card Chart"])), (l()(), t["\u0275eld"](172, 0, null, null, 2, "div", [
                    ["class", "chk-block-content over-hidden"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](173, 0, null, null, 1, "ngx-charts-number-card", [], null, [
                    [null, "select"]
                ], function(l, n, e) {
                    var t = !0;
                    return "select" === n && (t = !1 !== l.component.onSelect(e) && t), t
                }, fe, xe)), t["\u0275did"](174, 4898816, null, 0, ve.a, [t.ElementRef, t.NgZone, t.ChangeDetectorRef], {
                    results: [0, "results"],
                    view: [1, "view"],
                    scheme: [2, "scheme"]
                }, {
                    select: "select"
                })], function(l, n) {
                    var e = n.component;
                    l(n, 9, 1, [e.single, e.view, e.colorScheme, e.showLegend, e.showXAxis, e.showYAxis, e.showXAxisLabel, e.showYAxisLabel, e.xAxisLabel, e.yAxisLabel, e.gradient]), l(n, 18, 1, [e.single, e.view, e.colorScheme, e.showLegend, e.showXAxis, e.showYAxis, e.showXAxisLabel, e.showYAxisLabel, e.xAxisLabel, e.yAxisLabel, e.gradient]), l(n, 28, 1, [e.multi, e.view, e.colorScheme, e.showLegend, e.showXAxis, e.showYAxis, e.showXAxisLabel, e.showYAxisLabel, e.xAxisLabel, e.yAxisLabel, e.gradient]), l(n, 37, 1, [e.multi, e.view, e.colorScheme, e.showLegend, e.showXAxis, e.showYAxis, e.showXAxisLabel, e.showYAxisLabel, e.xAxisLabel, e.yAxisLabel, e.gradient]), l(n, 47, 1, [e.multi, e.view, e.colorScheme, e.showLegend, e.showXAxis, e.showYAxis, e.showXAxisLabel, e.showYAxisLabel, e.xAxisLabel, e.yAxisLabel, e.gradient]), l(n, 56, 1, [e.multi, e.view, e.colorScheme, e.showLegend, e.showXAxis, e.showYAxis, e.showXAxisLabel, e.showYAxisLabel, e.xAxisLabel, e.yAxisLabel, e.gradient]), l(n, 66, 1, [e.multi, e.view, e.colorScheme, e.showLegend, e.showXAxis, e.showYAxis, e.showXAxisLabel, e.showYAxisLabel, e.xAxisLabel, e.yAxisLabel, e.gradient]), l(n, 75, 1, [e.multi, e.view, e.colorScheme, e.showLegend, e.showXAxis, e.showYAxis, e.showXAxisLabel, e.showYAxisLabel, e.xAxisLabel, e.yAxisLabel, e.gradient]), l(n, 85, 0, e.single, e.view, e.colorScheme, e.showLabels, e.showLegend, e.explodeSlices, e.doughnut, e.gradient), l(n, 94, 0, e.single, e.view, e.colorScheme, e.gradient), l(n, 104, 0, e.single, e.view, e.colorScheme), l(n, 113, 1, [e.multi, e.view, e.colorScheme, e.showLegend, e.showXAxis, e.showYAxis, e.showXAxisLabel, e.showYAxisLabel, e.xAxisLabel, e.yAxisLabel, e.autoScale, e.gradient]), l(n, 124, 1, [e.multi, e.view, e.colorScheme, e.showLegend, e.showXAxis, e.showYAxis, e.autoScale, e.showXAxisLabel, e.showYAxisLabel, e.xAxisLabel, e.yAxisLabel, e.gradient]), l(n, 134, 1, [e.multi, e.view, e.colorScheme, e.showLegend, e.showXAxis, e.showYAxis, e.showXAxisLabel, e.showYAxisLabel, e.xAxisLabel, e.yAxisLabel, e.gradient]), l(n, 145, 1, [e.multi, e.view, e.colorScheme, e.showLegend, e.showXAxis, e.showYAxis, e.showXAxisLabel, e.showYAxisLabel, e.xAxisLabel, e.yAxisLabel, e.gradient]), l(n, 155, 1, [e.multi, e.view, e.colorScheme, e.showLegend, e.showXAxis, e.showYAxis, e.showXAxisLabel, e.showYAxisLabel, e.xAxisLabel, e.yAxisLabel, e.gradient]), l(n, 165, 0, e.single, e.view, e.colorScheme), l(n, 174, 0, e.single, e.view, e.colorScheme)
                }, null)
            }
            var ke = t["\u0275ccf"]("ms-ngx-charts", be, function(l) {
                    return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 1, "ms-ngx-charts", [], [
                        [40, "@fadeInAnimation", 0]
                    ], null, null, Ce, ye)), t["\u0275did"](1, 114688, null, 0, be, [s.a], null, null)], function(l, n) {
                        l(n, 1, 0)
                    }, function(l, n) {
                        l(n, 0, 0, !0)
                    })
                }, {}, {}, []),
                we = e("lBHd"),
                Le = t["\u0275crt"]({
                    encapsulation: 2,
                    styles: [],
                    data: {}
                });

            function Ae(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 1, "div", [], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["Loading..."]))], null, null)
            }
            var Te = function() {
                    function l(l) {
                        this.pageTitleService = l, this.percent = 80, this.options = {
                            barColor: "#0066eb",
                            trackColor: "#dee4e8",
                            scaleColor: !1,
                            scaleLength: 5,
                            lineCap: "round",
                            lineWidth: 3,
                            size: 300,
                            rotate: 0,
                            animate: {
                                duration: 3e3,
                                enabled: !0
                            }
                        }, this.percent2 = 70, this.options2 = {
                            barColor: "#00caac",
                            trackColor: "#dee4e8",
                            scaleColor: "#dee4e8",
                            scaleLength: 5,
                            lineCap: "round",
                            lineWidth: 3,
                            size: 300,
                            rotate: 0,
                            animate: {
                                duration: 3e3,
                                enabled: !0
                            }
                        }, this.percent3 = 100, this.options3 = {
                            barColor: "#ff5723",
                            trackColor: "#dee4e8",
                            scaleColor: "#dee4e8",
                            scaleLength: 5,
                            lineCap: "round",
                            lineWidth: 10,
                            size: 300,
                            rotate: 0,
                            animate: {
                                duration: 3e3,
                                enabled: !0
                            }
                        }, this.percent4 = 90, this.options4 = {
                            barColor: "#414658",
                            trackColor: "#dee4e8",
                            scaleColor: "#dee4e8",
                            scaleLength: 5,
                            lineCap: "round",
                            lineWidth: 20,
                            size: 300,
                            rotate: 0,
                            animate: {
                                duration: 3e3,
                                enabled: !0
                            }
                        }
                    }
                    return l.prototype.ngOnInit = function() {
                        this.pageTitleService.setTitle("Easy Pie")
                    }, l
                }(),
                Se = t["\u0275crt"]({
                    encapsulation: 2,
                    styles: [
                        [".chankya-easy-page .chankya-absolute{font-weight:700;left:0;position:absolute;right:0;text-align:center;top:45%}@media (max-width:580px){canvas{width:100%}}pre{overflow-x:auto}"]
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

            function De(l) {
                return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 26, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](1, 0, null, null, 11, "div", [
                    ["class", "col-sm-6 col-md-6 col-lg-6"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](2, 0, null, null, 10, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](3, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](4, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](5, 0, null, null, 2, "div", [
                    ["class", "d-flex align-items-start flex-row"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](6, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["Easy Pie Chart"])), (l()(), t["\u0275eld"](8, 0, null, null, 4, "div", [
                    ["class", "chk-block-content text-center"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](9, 0, null, null, 3, "easy-pie-chart", [], null, null, null, Ae, Le)), t["\u0275did"](10, 638976, null, 0, we.EasyPieChartComponent, [t.ElementRef], {
                    percent: [0, "percent"],
                    options: [1, "options"]
                }, null), (l()(), t["\u0275eld"](11, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["70"])), (l()(), t["\u0275eld"](13, 0, null, null, 13, "div", [
                    ["class", "col-sm-6 col-md-6 col-lg-6"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](14, 0, null, null, 12, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](15, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](16, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](17, 0, null, null, 2, "div", [
                    ["class", "d-flex align-items-start flex-row"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](18, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["Easy Pie Chart"])), (l()(), t["\u0275eld"](20, 0, null, null, 6, "div", [
                    ["class", "chk-block-content text-center"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](21, 0, null, null, 1, "span", [
                    ["class", "chankya-absolute"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["70"])), (l()(), t["\u0275eld"](23, 0, null, null, 3, "easy-pie-chart", [], null, null, null, Ae, Le)), t["\u0275did"](24, 638976, null, 0, we.EasyPieChartComponent, [t.ElementRef], {
                    percent: [0, "percent"],
                    options: [1, "options"]
                }, null), (l()(), t["\u0275eld"](25, 0, null, null, 1, "span", [
                    ["class", "percent"],
                    ["ng-bind", "percent"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["70"])), (l()(), t["\u0275eld"](27, 0, null, null, 28, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](28, 0, null, null, 13, "div", [
                    ["class", "col-sm-6 col-md-6 col-lg-6"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](29, 0, null, null, 12, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](30, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](31, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](32, 0, null, null, 2, "div", [
                    ["class", "d-flex align-items-start flex-row"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](33, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["Easy Pie Chart"])), (l()(), t["\u0275eld"](35, 0, null, null, 6, "div", [
                    ["class", "chk-block-content text-center"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](36, 0, null, null, 1, "span", [
                    ["class", "chankya-absolute"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["100"])), (l()(), t["\u0275eld"](38, 0, null, null, 3, "easy-pie-chart", [], null, null, null, Ae, Le)), t["\u0275did"](39, 638976, null, 0, we.EasyPieChartComponent, [t.ElementRef], {
                    percent: [0, "percent"],
                    options: [1, "options"]
                }, null), (l()(), t["\u0275eld"](40, 0, null, null, 1, "span", [
                    ["class", "percent"],
                    ["ng-bind", "percent"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["100"])), (l()(), t["\u0275eld"](42, 0, null, null, 13, "div", [
                    ["class", "col-sm-6 col-md-6 col-lg-6"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](43, 0, null, null, 12, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](44, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](45, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](46, 0, null, null, 2, "div", [
                    ["class", "d-flex align-items-start flex-row"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](47, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["Easy Pie Chart"])), (l()(), t["\u0275eld"](49, 0, null, null, 6, "div", [
                    ["class", "chk-block-content text-center"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](50, 0, null, null, 1, "span", [
                    ["class", "chankya-absolute"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["90"])), (l()(), t["\u0275eld"](52, 0, null, null, 3, "easy-pie-chart", [], null, null, null, Ae, Le)), t["\u0275did"](53, 638976, null, 0, we.EasyPieChartComponent, [t.ElementRef], {
                    percent: [0, "percent"],
                    options: [1, "options"]
                }, null), (l()(), t["\u0275eld"](54, 0, null, null, 1, "span", [
                    ["class", "percent"],
                    ["ng-bind", "percent"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["90"]))], function(l, n) {
                    var e = n.component;
                    l(n, 10, 0, e.percent, e.options), l(n, 24, 0, e.percent2, e.options2), l(n, 39, 0, e.percent3, e.options3), l(n, 53, 0, e.percent4, e.options4)
                }, null)
            }
            var Re = t["\u0275ccf"]("ms-easy-pie", Te, function(l) {
                    return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 1, "ms-easy-pie", [], [
                        [40, "@fadeInAnimation", 0]
                    ], null, null, De, Se)), t["\u0275did"](1, 114688, null, 0, Te, [s.a], null, null)], function(l, n) {
                        l(n, 1, 0)
                    }, function(l, n) {
                        l(n, 0, 0, !0)
                    })
                }, {}, {}, []),
                Fe = e("TX0D"),
                Ee = e("HlEa"),
                Ie = t["\u0275crt"]({
                    encapsulation: 2,
                    styles: [],
                    data: {}
                });

            function Oe(l) {
                return t["\u0275vid"](2, [(l()(), t["\u0275eld"](0, 0, null, null, 0, "div", [], null, null, null, null, null))], null, null)
            }
            var $e = function() {
                    function l(l) {
                        this.pageTitleService = l, this.columnChartData = {
                            chartType: "ColumnChart",
                            dataTable: [
                                ["Country", "Performance", "Profits"],
                                ["Germany", 700, 1200],
                                ["USA", 300, 600],
                                ["Brazil", 400, 500],
                                ["Canada", 500, 1e3],
                                ["France", 600, 1100],
                                ["RU", 800, 1e3]
                            ],
                            options: {
                                title: "Countries",
                                colors: ["#0066eb", "#00caac", "#ff5723"]
                            }
                        }, this.columnChartData2 = {
                            chartType: "ColumnChart",
                            dataTable: [
                                ["Country", "Performance", "Profits"],
                                ["Germany", 0, 0],
                                ["USA", 0, 0],
                                ["Brazil", 0, 0],
                                ["Canada", 0, 0],
                                ["France", 0, 0],
                                ["RU", 0, 0]
                            ],
                            options: {
                                title: "Countries",
                                colors: ["#0066eb", "#00caac", "#ff5723"],
                                animation: {
                                    duration: 1e3,
                                    easing: "out",
                                    startup: !0
                                }
                            }
                        }, this.pieChartData = {
                            chartType: "PieChart",
                            dataTable: [
                                ["Task", "Hours per Day"],
                                ["Work", 11],
                                ["Eat", 2],
                                ["Commute", 2],
                                ["Watch TV", 2],
                                ["Sleep", 7]
                            ],
                            options: {
                                title: "Tasks",
                                colors: ["#0066eb", "#00caac", "#ff5723"],
                                slices: {
                                    0: {
                                        offset: .3
                                    },
                                    1: {
                                        offset: .2
                                    }
                                }
                            }
                        }, this.gaugeChartData = {
                            chartType: "Gauge",
                            dataTable: [
                                ["Label", "Value"],
                                ["Value", 1.78]
                            ],
                            options: {
                                animation: {
                                    easing: "out"
                                },
                                colors: ["#0066eb", "#00caac", "#ff5723"],
                                width: 150,
                                height: 150,
                                greenFrom: 1,
                                greenTo: 4,
                                minorTicks: 5,
                                min: 0,
                                max: 5,
                                majorTicks: ["0", "1", "2", "3", "4", "5"],
                                greenColor: "#00caac"
                            }
                        }, this.scatterChartData = {
                            chartType: "ScatterChart",
                            dataTable: [
                                ["Age", "Weight"],
                                [8, 12],
                                [4, 5.5],
                                [11, 14],
                                [4, 5],
                                [3, 3.5],
                                [6.5, 7]
                            ],
                            options: {
                                title: "Age vs. Weight comparison",
                                colors: ["#0066eb", "#00caac", "#ff5723"],
                                hAxis: {
                                    title: "Age",
                                    minValue: 0,
                                    maxValue: 15
                                },
                                vAxis: {
                                    title: "Weight",
                                    minValue: 0,
                                    maxValue: 15
                                },
                                legend: "none"
                            }
                        }, this.timelineChartData = {
                            chartType: "Timeline",
                            dataTable: [
                                ["Name", "From", "To"],
                                ["Washington", new Date(1789, 3, 30), new Date(1797, 2, 4)],
                                ["Adams", new Date(1797, 2, 4), new Date(1801, 2, 4)],
                                ["Jefferson", new Date(1801, 2, 4), new Date(1809, 2, 4)]
                            ]
                        }, this.lineChartData = {
                            chartType: "LineChart",
                            dataTable: [
                                ["Year", "Sales", "Expenses"],
                                ["2004", 1e3, 400],
                                ["2005", 1170, 460],
                                ["2006", 660, 1120],
                                ["2007", 1030, 540]
                            ],
                            options: {
                                title: "Company Performance",
                                colors: ["#0066eb", "#00caac", "#ff5723"]
                            }
                        }, this.comboChartData = {
                            chartType: "ComboChart",
                            dataTable: [
                                ["Month", "Bolivia", "Ecuador", "Madagascar", "Papua New Guinea", "Rwanda", "Average"],
                                ["2004/05", 165, 938, 522, 998, 450, 614.6],
                                ["2005/06", 135, 1120, 599, 1268, 288, 682],
                                ["2006/07", 157, 1167, 587, 807, 397, 623],
                                ["2007/08", 139, 1110, 615, 968, 215, 609.4],
                                ["2008/09", 136, 691, 629, 1026, 366, 569.6]
                            ],
                            options: {
                                title: "Monthly Coffee Production by Country",
                                colors: ["#0066eb", "#00caac", "#ff5723"],
                                vAxis: {
                                    title: "Cups"
                                },
                                hAxis: {
                                    title: "Month"
                                },
                                seriesType: "bars",
                                series: {
                                    5: {
                                        type: "line"
                                    }
                                }
                            }
                        }, this.tableChartData = {
                            chartType: "Table",
                            dataTable: [
                                ["Department", "Revenues", "Another column"],
                                ["Shoes", 10700, -100],
                                ["Sports", -15400, 25],
                                ["Toys", 12500, 40],
                                ["Electronics", -2100, 889],
                                ["Food", 22600, 78],
                                ["Art", 1100, 42]
                            ],
                            formatters: [{
                                columns: [1, 2],
                                type: "NumberFormat",
                                options: {
                                    prefix: "&euro;",
                                    negativeColor: "red",
                                    negativeParens: !0
                                }
                            }],
                            options: {
                                title: "Countries",
                                colors: ["#0066eb", "#00caac", "#ff5723"],
                                allowHtml: !0
                            }
                        }, this.geoChartData = {
                            chartType: "GeoChart",
                            dataTable: [
                                ["City", "Population", "Area"],
                                ["Rome", 2761477, 1285.31],
                                ["Milan", 1324110, 181.76],
                                ["Naples", 959574, 117.27],
                                ["Turin", 907563, 130.17],
                                ["Palermo", 655875, 158.9],
                                ["Genoa", 607906, 243.6],
                                ["Bologna", 380181, 140.7],
                                ["Florence", 371282, 102.41],
                                ["Fiumicino", 67370, 213.44],
                                ["Anzio", 52192, 43.43],
                                ["Ciampino", 38262, 11]
                            ],
                            options: {
                                region: "IT",
                                colors: ["#0066eb", "#00caac", "#ff5723"],
                                displayMode: "markers",
                                colorAxis: {
                                    colors: ["#00caac", "#0066eb"]
                                }
                            }
                        }
                    }
                    return l.prototype.ngOnInit = function() {
                        this.pageTitleService.setTitle("Google Charts");
                        for (var l = 1; l < 7; l++) this.columnChartData2.dataTable[l][1] = Math.round(1e3 * Math.random()), this.columnChartData2.dataTable[l][2] = Math.round(1e3 * Math.random())
                    }, l.prototype.changeData2 = function() {
                        for (var l = this.cchart.wrapper.getDataTable(), n = 0; n < 6; n++) l.setValue(n, 1, Math.round(1e3 * Math.random())), l.setValue(n, 2, Math.round(1e3 * Math.random()));
                        this.cchart.redraw()
                    }, l.prototype.changeData = function() {
                        this.columnChartData = Object.create(this.columnChartData);
                        for (var l = 1; l < 7; l++) this.columnChartData.dataTable[l][1] = Math.round(1e3 * Math.random()), this.columnChartData.dataTable[l][2] = Math.round(1e3 * Math.random())
                    }, l.prototype.changeChartType = function() {
                        this.columnChartData = Object.create(this.columnChartData), this.columnChartData.chartType = "ColumnChart" == this.columnChartData.chartType ? "PieChart" : "ColumnChart"
                    }, l.prototype.ready = function(l) {
                        console.log(l.message)
                    }, l.prototype.error = function(l) {
                        console.error(l)
                    }, l.prototype.select = function(l) {
                        this.selectEvent = l
                    }, l.prototype.mouseOver = function(l) {
                        console.log("bb: " + JSON.stringify(l.boundingBox)), console.log("pos: " + JSON.stringify(l.position)), console.log("type: " + JSON.stringify(l.columnType)), console.log("label: " + JSON.stringify(l.columnLabel)), console.log("value: " + JSON.stringify(l.value))
                    }, l
                }(),
                Be = t["\u0275crt"]({
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

            function Ne(l) {
                return t["\u0275vid"](0, [t["\u0275qud"](402653184, 1, {
                    cchart: 0
                }), (l()(), t["\u0275eld"](1, 0, null, null, 82, "div", [
                    ["class", "row"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](2, 0, null, null, 11, "div", [
                    ["class", "col-xs-12 col-sm-12 col-md-12 col-lg-12"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](3, 0, null, null, 10, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](4, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](5, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](6, 0, null, null, 2, "div", [
                    ["class", "d-flex align-items-start flex-row"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](7, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["Line"])), (l()(), t["\u0275eld"](9, 0, null, null, 4, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](10, 0, null, null, 1, "google-chart", [], null, null, null, Oe, Ie)), t["\u0275did"](11, 573440, null, 0, Fe.a, [t.ElementRef, Ee.a], {
                    data: [0, "data"]
                }, null), (l()(), t["\u0275eld"](12, 0, null, null, 0, "input", [
                    ["type", "button"],
                    ["value", "Change data"]
                ], null, [
                    [null, "click"]
                ], function(l, n, e) {
                    var t = !0;
                    return "click" === n && (t = !1 !== l.component.changeData() && t), t
                }, null, null)), (l()(), t["\u0275eld"](13, 0, null, null, 0, "input", [
                    ["type", "button"],
                    ["value", "Change chart type"]
                ], null, [
                    [null, "click"]
                ], function(l, n, e) {
                    var t = !0;
                    return "click" === n && (t = !1 !== l.component.changeChartType() && t), t
                }, null, null)), (l()(), t["\u0275eld"](14, 0, null, null, 9, "div", [
                    ["class", "col-xs-12 col-sm-12 col-md-12 col-lg-12"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](15, 0, null, null, 8, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](16, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](17, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](18, 0, null, null, 2, "div", [
                    ["class", "d-flex align-items-start flex-row"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](19, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["Animated chart"])), (l()(), t["\u0275eld"](21, 0, null, null, 2, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](22, 0, null, null, 1, "google-chart", [], null, null, null, Oe, Ie)), t["\u0275did"](23, 573440, [
                    [1, 4],
                    ["cchart", 4]
                ], 0, Fe.a, [t.ElementRef, Ee.a], {
                    data: [0, "data"]
                }, null), (l()(), t["\u0275eld"](24, 0, null, null, 9, "div", [
                    ["class", "col-xs-12 col-sm-12 col-md-6 col-lg-6"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](25, 0, null, null, 8, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](26, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](27, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](28, 0, null, null, 2, "div", [
                    ["class", "d-flex align-items-start flex-row"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](29, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["Pie chart"])), (l()(), t["\u0275eld"](31, 0, null, null, 2, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](32, 0, null, null, 1, "google-chart", [], null, null, null, Oe, Ie)), t["\u0275did"](33, 573440, null, 0, Fe.a, [t.ElementRef, Ee.a], {
                    data: [0, "data"]
                }, null), (l()(), t["\u0275eld"](34, 0, null, null, 9, "div", [
                    ["class", "col-xs-12 col-sm-12 col-md-6 col-lg-6"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](35, 0, null, null, 8, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](36, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](37, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](38, 0, null, null, 2, "div", [
                    ["class", "d-flex align-items-start flex-row"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](39, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["Gauge chart"])), (l()(), t["\u0275eld"](41, 0, null, null, 2, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](42, 0, null, null, 1, "google-chart", [], null, null, null, Oe, Ie)), t["\u0275did"](43, 573440, null, 0, Fe.a, [t.ElementRef, Ee.a], {
                    data: [0, "data"]
                }, null), (l()(), t["\u0275eld"](44, 0, null, null, 9, "div", [
                    ["class", "col-xs-12 col-sm-12 col-md-12 col-lg-12"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](45, 0, null, null, 8, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](46, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](47, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](48, 0, null, null, 2, "div", [
                    ["class", "d-flex align-items-start flex-row"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](49, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["Scatter chart"])), (l()(), t["\u0275eld"](51, 0, null, null, 2, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](52, 0, null, null, 1, "google-chart", [], null, null, null, Oe, Ie)), t["\u0275did"](53, 573440, null, 0, Fe.a, [t.ElementRef, Ee.a], {
                    data: [0, "data"]
                }, null), (l()(), t["\u0275eld"](54, 0, null, null, 9, "div", [
                    ["class", "col-xs-12 col-sm-12 col-md-12 col-lg-12"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](55, 0, null, null, 8, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](56, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](57, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](58, 0, null, null, 2, "div", [
                    ["class", "d-flex align-items-start flex-row"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](59, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["Timeline chart"])), (l()(), t["\u0275eld"](61, 0, null, null, 2, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](62, 0, null, null, 1, "google-chart", [], null, null, null, Oe, Ie)), t["\u0275did"](63, 573440, null, 0, Fe.a, [t.ElementRef, Ee.a], {
                    data: [0, "data"]
                }, null), (l()(), t["\u0275eld"](64, 0, null, null, 9, "div", [
                    ["class", "col-xs-12 col-sm-12 col-md-12 col-lg-12"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](65, 0, null, null, 8, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](66, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](67, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](68, 0, null, null, 2, "div", [
                    ["class", "d-flex align-items-start flex-row"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](69, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["Line chart with events"])), (l()(), t["\u0275eld"](71, 0, null, null, 2, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](72, 0, null, null, 1, "google-chart", [], null, [
                    [null, "chartReady"],
                    [null, "chartError"],
                    [null, "chartSelect"]
                ], function(l, n, e) {
                    var t = !0,
                        a = l.component;
                    return "chartReady" === n && (t = !1 !== a.ready(e) && t), "chartError" === n && (t = !1 !== a.error(e) && t), "chartSelect" === n && (t = !1 !== a.select(e) && t), t
                }, Oe, Ie)), t["\u0275did"](73, 573440, null, 0, Fe.a, [t.ElementRef, Ee.a], {
                    data: [0, "data"]
                }, {
                    chartReady: "chartReady",
                    chartError: "chartError",
                    chartSelect: "chartSelect"
                }), (l()(), t["\u0275eld"](74, 0, null, null, 9, "div", [
                    ["class", "col-xs-12 col-sm-12 col-md-12 col-lg-12"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](75, 0, null, null, 8, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](76, 0, null, null, 4, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](77, 0, null, null, 3, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](78, 0, null, null, 2, "div", [
                    ["class", "d-flex align-items-start flex-row"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](79, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), t["\u0275ted"](-1, null, ["Combo chart"])), (l()(), t["\u0275eld"](81, 0, null, null, 2, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), t["\u0275eld"](82, 0, null, null, 1, "google-chart", [], null, [
                    [null, "mouseOver"]
                ], function(l, n, e) {
                    var t = !0;
                    return "mouseOver" === n && (t = !1 !== l.component.mouseOver(e) && t), t
                }, Oe, Ie)), t["\u0275did"](83, 573440, null, 0, Fe.a, [t.ElementRef, Ee.a], {
                    data: [0, "data"]
                }, {
                    mouseOver: "mouseOver"
                })], function(l, n) {
                    var e = n.component;
                    l(n, 11, 0, e.columnChartData), l(n, 23, 0, e.columnChartData2), l(n, 33, 0, e.pieChartData), l(n, 43, 0, e.gaugeChartData), l(n, 53, 0, e.scatterChartData), l(n, 63, 0, e.timelineChartData), l(n, 73, 0, e.lineChartData), l(n, 83, 0, e.comboChartData)
                }, null)
            }
            var ze = t["\u0275ccf"]("ms-google-charts", $e, function(l) {
                    return t["\u0275vid"](0, [(l()(), t["\u0275eld"](0, 0, null, null, 1, "ms-google-charts", [], [
                        [40, "@fadeInAnimation", 0]
                    ], null, null, Ne, Be)), t["\u0275did"](1, 114688, null, 0, $e, [s.a], null, null)], function(l, n) {
                        l(n, 1, 0)
                    }, function(l, n) {
                        l(n, 0, 0, !0)
                    })
                }, {}, {}, []),
                Ve = e("gIcY"),
                Ye = e("LtGu"),
                Xe = e("/qvy"),
                Pe = e("b3E/"),
                He = e("w6+6"),
                Me = e("IZET"),
                We = e("1jDe"),
                Ge = e("T8sE"),
                je = e("skic"),
                Ze = e("KeWI"),
                qe = e("UsZU"),
                _e = e("50k4"),
                Ue = e("o56U"),
                Je = e("U3vz"),
                Ke = e("r6ye"),
                Qe = e("KktT"),
                lt = e("eby4"),
                nt = e("hmAI"),
                et = e("ZYCi");
            e.d(n, "ChartDemoModuleNgFactory", function() {
                return tt
            });
            var tt = t["\u0275cmf"](a, [], function(l) {
                return t["\u0275mod"]([t["\u0275mpd"](512, t.ComponentFactoryResolver, t["\u0275CodegenComponentFactoryResolver"], [
                    [8, [i.a, u.a, g, ke, Re, ze]],
                    [3, t.ComponentFactoryResolver], t.NgModuleRef
                ]), t["\u0275mpd"](4608, L.NgLocalization, L.NgLocaleLocalization, [t.LOCALE_ID, [2, L["\u0275angular_packages_common_common_a"]]]), t["\u0275mpd"](4608, Ve["\u0275angular_packages_forms_forms_i"], Ve["\u0275angular_packages_forms_forms_i"], []), t["\u0275mpd"](4608, Ee.a, Ee.a, [t.LOCALE_ID]), t["\u0275mpd"](4608, k.a, k.a, [t.ApplicationRef, t.ComponentFactoryResolver, t.Injector]), t["\u0275mpd"](4608, C.a, C.a, [k.a]), t["\u0275mpd"](4608, L.LocationStrategy, L.PathLocationStrategy, [L.PlatformLocation, [2, L.APP_BASE_HREF]]), t["\u0275mpd"](4608, L.Location, L.Location, [L.LocationStrategy]), t["\u0275mpd"](1073742336, L.CommonModule, L.CommonModule, []), t["\u0275mpd"](1073742336, Ve["\u0275angular_packages_forms_forms_bb"], Ve["\u0275angular_packages_forms_forms_bb"], []), t["\u0275mpd"](1073742336, Ve.FormsModule, Ve.FormsModule, []), t["\u0275mpd"](1073742336, Ye.a, Ye.a, []), t["\u0275mpd"](1073742336, Xe.a, Xe.a, []), t["\u0275mpd"](1073742336, Pe.a, Pe.a, []), t["\u0275mpd"](1073742336, He.a, He.a, []), t["\u0275mpd"](1073742336, Me.a, Me.a, []), t["\u0275mpd"](1073742336, We.a, We.a, []), t["\u0275mpd"](1073742336, Ge.a, Ge.a, []), t["\u0275mpd"](1073742336, je.a, je.a, []), t["\u0275mpd"](1073742336, Ze.a, Ze.a, []), t["\u0275mpd"](1073742336, qe.a, qe.a, []), t["\u0275mpd"](1073742336, _e.a, _e.a, []), t["\u0275mpd"](1073742336, Ue.a, Ue.a, []), t["\u0275mpd"](1073742336, Je.a, Je.a, []), t["\u0275mpd"](1073742336, Ke.a, Ke.a, []), t["\u0275mpd"](1073742336, Qe.a, Qe.a, []), t["\u0275mpd"](1073742336, lt.a, lt.a, []), t["\u0275mpd"](1073742336, o.ChartsModule, o.ChartsModule, []), t["\u0275mpd"](1073742336, nt.EasyPieChartModule, nt.EasyPieChartModule, []), t["\u0275mpd"](1073742336, et.p, et.p, [
                    [2, et.v],
                    [2, et.m]
                ]), t["\u0275mpd"](1073742336, a, a, []), t["\u0275mpd"](1024, et.k, function() {
                    return [
                        [{
                            path: "",
                            redirectTo: "ng2-charts",
                            pathMatch: "full"
                        }, {
                            path: "",
                            children: [{
                                path: "ng2-charts",
                                component: c
                            }, {
                                path: "ngx-charts",
                                component: be
                            }, {
                                path: "easy-pie-chart",
                                component: Te
                            }, {
                                path: "google-chart",
                                component: $e
                            }]
                        }]
                    ]
                }, [])])
            })
        }
    }
]);