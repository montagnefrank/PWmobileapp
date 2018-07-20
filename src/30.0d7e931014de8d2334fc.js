(window.webpackJsonp = window.webpackJsonp || []).push([
    [30], {
        JybH: function(l, n, u) {
            "use strict";
            u.r(n);
            var e = u("CcnG"),
                s = function() {},
                a = u("pMnS"),
                t = u("c+eF"),
                i = function() {
                    function l(l) {
                        this.pageTitleService = l, this.ckeditorContent = "<p>Hello CKEditor</p>", this.config = {
                            uiColor: "#dee4e8",
                            height: "500"
                        }
                    }
                    return l.prototype.ngOnInit = function() {
                        this.pageTitleService.setTitle("Inbox")
                    }, l.prototype.ngAfterViewChecked = function() {}, l.prototype.ngOnDestroy = function() {}, l
                }(),
                d = e["\u0275crt"]({
                    encapsulation: 0,
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

            function r(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 459, "div", [
                    ["class", "inbox-wrapper fade-in-up"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 458, "div", [
                    ["class", "row no-gutters bg-grey"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](2, 0, null, null, 46, "div", [
                    ["class", "col-xs-12 col-sm-4 col-md-4 col-lg-4 col-xl-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](3, 0, null, null, 45, "div", [
                    ["class", "inner-tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](4, 0, null, null, 22, "ul", [
                    ["class", "list-group mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](5, 0, null, null, 6, "li", [
                    ["class", "list-group-item active ripple"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](6, 0, null, null, 5, "a", [
                    ["class", "d-flex justify-content-between w-100"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](7, 0, null, null, 2, "span", [], null, null, null, null, null)), (l()(), e["\u0275eld"](8, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-inbox fa-inverse mr-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Index"])), (l()(), e["\u0275eld"](10, 0, null, null, 1, "span", [
                    ["class", "badge badge-danger"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["20"])), (l()(), e["\u0275eld"](12, 0, null, null, 4, "li", [
                    ["class", "list-group-item ripple"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](13, 0, null, null, 3, "a", [], null, null, null, null, null)), (l()(), e["\u0275eld"](14, 0, null, null, 2, "span", [], null, null, null, null, null)), (l()(), e["\u0275eld"](15, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-send mr-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Sent"])), (l()(), e["\u0275eld"](17, 0, null, null, 4, "li", [
                    ["class", "list-group-item ripple"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](18, 0, null, null, 3, "a", [], null, null, null, null, null)), (l()(), e["\u0275eld"](19, 0, null, null, 2, "span", [], null, null, null, null, null)), (l()(), e["\u0275eld"](20, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-envelope-open mr-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Draft"])), (l()(), e["\u0275eld"](22, 0, null, null, 4, "li", [
                    ["class", "list-group-item ripple"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](23, 0, null, null, 3, "a", [], null, null, null, null, null)), (l()(), e["\u0275eld"](24, 0, null, null, 2, "span", [], null, null, null, null, null)), (l()(), e["\u0275eld"](25, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-trash mr-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" Trash"])), (l()(), e["\u0275eld"](27, 0, null, null, 21, "div", [
                    ["class", "labels"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](28, 0, null, null, 20, "ul", [
                    ["class", "list-unstyled"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](29, 0, null, null, 3, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](30, 0, null, null, 2, "span", [], null, null, null, null, null)), (l()(), e["\u0275eld"](31, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-tags mr-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Labels"])), (l()(), e["\u0275eld"](33, 0, null, null, 3, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](34, 0, null, null, 0, "span", [
                    ["class", "square-10 badge badge-success mr-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](35, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Corporate"])), (l()(), e["\u0275eld"](37, 0, null, null, 3, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](38, 0, null, null, 0, "span", [
                    ["class", "square-10 badge badge-warning mr-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](39, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Personal"])), (l()(), e["\u0275eld"](41, 0, null, null, 3, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](42, 0, null, null, 0, "span", [
                    ["class", "square-10 badge badge-primary mr-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](43, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Statements"])), (l()(), e["\u0275eld"](45, 0, null, null, 3, "li", [], null, null, null, null, null)), (l()(), e["\u0275eld"](46, 0, null, null, 0, "span", [
                    ["class", "square-10 badge badge-danger mr-2"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](47, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Projects"])), (l()(), e["\u0275eld"](49, 0, null, null, 98, "div", [
                    ["class", "col-xs-12 col-sm-8 col-md-8 col-lg-8 col-xl-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](50, 0, null, null, 97, "div", [
                    ["class", "inner-tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](51, 0, null, null, 14, "ul", [
                    ["class", "list-group list-unstyled"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](52, 0, null, null, 6, "li", [
                    ["class", "list-group-item d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](53, 0, null, null, 2, "div", [
                    ["class", "d-flex align-content-start"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](54, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Inbox"])), (l()(), e["\u0275eld"](56, 0, null, null, 2, "div", [
                    ["class", "d-flex align-content-end"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](57, 0, null, null, 1, "a", [], null, null, null, null, null)), (l()(), e["\u0275eld"](58, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-refresh fa-spin"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](59, 0, null, null, 6, "li", [
                    ["class", "list-group-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](60, 0, null, null, 5, "div", [
                    ["class", "search-list w-100"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](61, 0, null, null, 4, "div", [
                    ["class", "input-group"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](62, 0, null, null, 0, "input", [
                    ["class", "form-control"],
                    ["placeholder", "Search for..."],
                    ["type", "text"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](63, 0, null, null, 2, "span", [
                    ["class", "input-group-btn"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](64, 0, null, null, 1, "button", [
                    ["class", "btn btn-primary"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](65, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-search"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](66, 0, null, null, 81, "div", [
                    ["class", "chk-inbox-sidebar"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](67, 0, null, null, 80, "ul", [
                    ["class", "nav nav-tabs"],
                    ["role", "tablist"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](68, 0, null, null, 15, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](69, 0, null, null, 14, "a", [
                    ["class", "nav-link active ripple"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-1"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](70, 0, null, null, 13, "div", [
                    ["class", "d-flex justify-content-start"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](71, 0, null, null, 2, "div", [
                    ["class", "d-flex align-items-start flex-column mr-3 pos-relative"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](72, 0, null, null, 0, "img", [
                    ["alt", "user thumb"],
                    ["class", "rounded-circle"],
                    ["height", "65"],
                    ["src", "assets/img/user-1.jpg"],
                    ["width", "65"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](73, 0, null, null, 0, "span", [
                    ["class", "badge badge-success square-10 top-right-badge fa-notify"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](74, 0, null, null, 9, "div", [
                    ["class", "d-flex align-items-start flex-column"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](75, 0, null, null, 4, "div", [
                    ["class", "clearfix w-100"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](76, 0, null, null, 1, "h5", [
                    ["class", "pull-left"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["John Brett"])), (l()(), e["\u0275eld"](78, 0, null, null, 1, "span", [
                    ["class", "pull-right small"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["1:25"])), (l()(), e["\u0275eld"](80, 0, null, null, 1, "p", [
                    ["class", "text-primary mb-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Create new profile request"])), (l()(), e["\u0275eld"](82, 0, null, null, 1, "p", [
                    ["class", "text-muted mb-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["When the equation, first to ability the forwards, the a but travelling"])), (l()(), e["\u0275eld"](84, 0, null, null, 15, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](85, 0, null, null, 14, "a", [
                    ["class", "nav-link ripple"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-2"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](86, 0, null, null, 13, "div", [
                    ["class", "d-flex justify-content-start"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](87, 0, null, null, 2, "div", [
                    ["class", "d-flex align-items-start flex-column mr-3 pos-relative"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](88, 0, null, null, 0, "img", [
                    ["alt", "user thumb"],
                    ["class", "rounded-circle"],
                    ["height", "65"],
                    ["src", "assets/img/user-2.jpg"],
                    ["width", "65"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](89, 0, null, null, 0, "span", [
                    ["class", "badge badge-danger square-10 top-right-badge fa-notify"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](90, 0, null, null, 9, "div", [
                    ["class", "d-flex align-items-start flex-column"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](91, 0, null, null, 4, "div", [
                    ["class", "clearfix w-100"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](92, 0, null, null, 1, "h5", [
                    ["class", "pull-left"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Vecky Brett"])), (l()(), e["\u0275eld"](94, 0, null, null, 1, "span", [
                    ["class", "pull-right small"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["1:25"])), (l()(), e["\u0275eld"](96, 0, null, null, 1, "p", [
                    ["class", "text-primary mb-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Create new profile request"])), (l()(), e["\u0275eld"](98, 0, null, null, 1, "p", [
                    ["class", "text-muted mb-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["When the equation, first to ability the forwards, the a but travelling"])), (l()(), e["\u0275eld"](100, 0, null, null, 15, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](101, 0, null, null, 14, "a", [
                    ["class", "nav-link ripple"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-3"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](102, 0, null, null, 13, "div", [
                    ["class", "d-flex justify-content-start"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](103, 0, null, null, 2, "div", [
                    ["class", "d-flex align-items-start flex-column mr-3 pos-relative"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](104, 0, null, null, 0, "img", [
                    ["alt", "user thumb"],
                    ["class", "rounded-circle"],
                    ["height", "65"],
                    ["src", "assets/img/user-3.jpg"],
                    ["width", "65"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](105, 0, null, null, 0, "span", [
                    ["class", "badge badge-success square-10 top-right-badge fa-notify"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](106, 0, null, null, 9, "div", [
                    ["class", "d-flex align-items-start flex-column"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](107, 0, null, null, 4, "div", [
                    ["class", "clearfix w-100"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](108, 0, null, null, 1, "h5", [
                    ["class", "pull-left"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Ray Gold"])), (l()(), e["\u0275eld"](110, 0, null, null, 1, "span", [
                    ["class", "pull-right small"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["1:25"])), (l()(), e["\u0275eld"](112, 0, null, null, 1, "p", [
                    ["class", "text-primary mb-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Create new profile request"])), (l()(), e["\u0275eld"](114, 0, null, null, 1, "p", [
                    ["class", "text-muted mb-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["When the equation, first to ability the forwards, the a but travelling"])), (l()(), e["\u0275eld"](116, 0, null, null, 15, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](117, 0, null, null, 14, "a", [
                    ["class", "nav-link ripple"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-4"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](118, 0, null, null, 13, "div", [
                    ["class", "d-flex justify-content-start"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](119, 0, null, null, 2, "div", [
                    ["class", "d-flex align-items-start flex-column mr-3 pos-relative"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](120, 0, null, null, 0, "img", [
                    ["alt", "user thumb"],
                    ["class", "rounded-circle"],
                    ["height", "65"],
                    ["src", "assets/img/user-4.jpg"],
                    ["width", "65"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](121, 0, null, null, 0, "span", [
                    ["class", "badge badge-success square-10 top-right-badge fa-notify"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](122, 0, null, null, 9, "div", [
                    ["class", "d-flex align-items-start flex-column"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](123, 0, null, null, 4, "div", [
                    ["class", "clearfix w-100"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](124, 0, null, null, 1, "h5", [
                    ["class", "pull-left"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Hugh Nion"])), (l()(), e["\u0275eld"](126, 0, null, null, 1, "span", [
                    ["class", "pull-right small"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["1:25"])), (l()(), e["\u0275eld"](128, 0, null, null, 1, "p", [
                    ["class", "text-primary mb-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Create new profile request"])), (l()(), e["\u0275eld"](130, 0, null, null, 1, "p", [
                    ["class", "text-muted mb-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["When the equation, first to ability the forwards, the a but travelling"])), (l()(), e["\u0275eld"](132, 0, null, null, 15, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](133, 0, null, null, 14, "a", [
                    ["class", "nav-link ripple"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-5"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](134, 0, null, null, 13, "div", [
                    ["class", "d-flex justify-content-start"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](135, 0, null, null, 2, "div", [
                    ["class", "d-flex align-items-start flex-column mr-3 pos-relative"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](136, 0, null, null, 0, "img", [
                    ["alt", "user thumb"],
                    ["class", "rounded-circle"],
                    ["height", "65"],
                    ["src", "assets/img/user-5.jpg"],
                    ["width", "65"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](137, 0, null, null, 0, "span", [
                    ["class", "badge badge-warning square-10 top-right-badge fa-notify"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](138, 0, null, null, 9, "div", [
                    ["class", "d-flex align-items-start flex-column"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](139, 0, null, null, 4, "div", [
                    ["class", "clearfix w-100"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](140, 0, null, null, 1, "h5", [
                    ["class", "pull-left"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Monen Duke"])), (l()(), e["\u0275eld"](142, 0, null, null, 1, "span", [
                    ["class", "pull-right small"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["1:25"])), (l()(), e["\u0275eld"](144, 0, null, null, 1, "p", [
                    ["class", "text-primary mb-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Create new profile request"])), (l()(), e["\u0275eld"](146, 0, null, null, 1, "p", [
                    ["class", "text-muted mb-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["When the equation, first to ability the forwards, the a but travelling"])), (l()(), e["\u0275eld"](148, 0, null, null, 311, "div", [
                    ["class", "col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](149, 0, null, null, 310, "div", [
                    ["class", "chk-inbox-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](150, 0, null, null, 309, "div", [
                    ["class", "chk-block"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](151, 0, null, null, 21, "div", [
                    ["class", "chk-block-title"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](152, 0, null, null, 20, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](153, 0, null, null, 2, "div", [
                    ["class", "d-flex align-content-start"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](154, 0, null, null, 1, "h3", [
                    ["class", "mb-0 text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["To:John Mayers"])), (l()(), e["\u0275eld"](156, 0, null, null, 16, "div", [
                    ["class", "d-flex align-content-end"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](157, 0, null, null, 15, "ul", [
                    ["class", "inbox-action list-inline mb-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](158, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](159, 0, null, null, 1, "a", [], null, null, null, null, null)), (l()(), e["\u0275eld"](160, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-reply"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](161, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](162, 0, null, null, 1, "a", [], null, null, null, null, null)), (l()(), e["\u0275eld"](163, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-reply-all"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](164, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](165, 0, null, null, 1, "a", [], null, null, null, null, null)), (l()(), e["\u0275eld"](166, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-exclamation-triangle"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](167, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](168, 0, null, null, 1, "a", [], null, null, null, null, null)), (l()(), e["\u0275eld"](169, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-print"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](170, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](171, 0, null, null, 1, "a", [], null, null, null, null, null)), (l()(), e["\u0275eld"](172, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-trash"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](173, 0, null, null, 286, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](174, 0, null, null, 285, "div", [
                    ["class", "tab-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](175, 0, null, null, 56, "div", [
                    ["class", "tab-pane fade show active"],
                    ["id", "tab-1"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](176, 0, null, null, 13, "div", [
                    ["class", "d-flex justify-content-start"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](177, 0, null, null, 2, "div", [
                    ["class", "d-flex align-items-start flex-column mr-3 pos-relative"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](178, 0, null, null, 0, "img", [
                    ["alt", "user thumb"],
                    ["class", "rounded-circle"],
                    ["height", "65"],
                    ["src", "assets/img/user-1.jpg"],
                    ["width", "65"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](179, 0, null, null, 0, "span", [
                    ["class", "badge badge-success square-15 top-right-badge fa-notify"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](180, 0, null, null, 9, "div", [
                    ["class", "d-flex align-items-start flex-column w-100"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](181, 0, null, null, 4, "div", [
                    ["class", "clearfix w-100"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](182, 0, null, null, 1, "h5", [
                    ["class", "pull-left"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Raymond Barrett"])), (l()(), e["\u0275eld"](184, 0, null, null, 1, "span", [
                    ["class", "pull-right small inbox-time"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["February 7th, 2018"])), (l()(), e["\u0275eld"](186, 0, null, null, 3, "p", [
                    ["class", "mb-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Registration Question "])), (l()(), e["\u0275eld"](188, 0, null, null, 1, "span", [
                    ["class", "text-muted"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["<bryan@solutions.com>"])), (l()(), e["\u0275eld"](190, 0, null, null, 0, "div", [
                    ["class", "dropdown-divider my-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](191, 0, null, null, 6, "div", [
                    ["class", "mb-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](192, 0, null, null, 1, "p", [
                    ["class", "mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Hi Mike,"])), (l()(), e["\u0275eld"](194, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["When the equation, first to ability the forwards, the a but travelling, outlines sentinels bad expand to goodness. Behind if have at the even I and how work, completely deference who boss actually designer; Monstrous with geared from far and these, morals, phase rome; Class. Called get amidst of next."])), (l()(), e["\u0275eld"](196, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Monstrous with geared from far and these, morals, phase rome; Class. Called get amidst of next.Monstrous with geared from far and these, morals, phase rome; Class. Called get amidst of next."])), (l()(), e["\u0275eld"](198, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Regards,"])), (l()(), e["\u0275eld"](200, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Mike Mayers"])), (l()(), e["\u0275eld"](202, 0, null, null, 0, "div", [
                    ["class", "dropdown-divider my-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](203, 0, null, null, 28, "div", [
                    ["class", "attachments"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](204, 0, null, null, 2, "p", [], null, null, null, null, null)), (l()(), e["\u0275eld"](205, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-paperclip"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" 2 Attachments"])), (l()(), e["\u0275eld"](207, 0, null, null, 24, "ul", [
                    ["class", "list-inline"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](208, 0, null, null, 11, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](209, 0, null, null, 10, "div", [
                    ["class", "overlay-wrap"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](210, 0, null, null, 0, "img", [
                    ["alt", "attachments"],
                    ["class", "img-fluid img-thumbnail"],
                    ["height", "180"],
                    ["src", "assets/img/project-1.jpg"],
                    ["width", "180"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](211, 0, null, null, 8, "div", [
                    ["class", "card-img-overlay primary-tp-layer pos-center text-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](212, 0, null, null, 7, "div", [
                    ["class", "center-holder"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](213, 0, null, null, 6, "ul", [
                    ["class", "list-inline"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](214, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](215, 0, null, null, 1, "a", [
                    ["class", "mx-1 mb-1"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](216, 0, null, null, 0, "i", [
                    ["class", "fa fa-eye fa-inverse"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](217, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](218, 0, null, null, 1, "a", [
                    ["class", "mx-1 mb-1"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](219, 0, null, null, 0, "i", [
                    ["class", "fa fa-download fa-inverse"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](220, 0, null, null, 11, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](221, 0, null, null, 10, "div", [
                    ["class", "overlay-wrap"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](222, 0, null, null, 0, "img", [
                    ["alt", "attachments"],
                    ["class", "img-fluid img-thumbnail"],
                    ["height", "180"],
                    ["src", "assets/img/project-2.jpg"],
                    ["width", "180"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](223, 0, null, null, 8, "div", [
                    ["class", "card-img-overlay primary-tp-layer pos-center text-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](224, 0, null, null, 7, "div", [
                    ["class", "center-holder"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](225, 0, null, null, 6, "ul", [
                    ["class", "list-inline"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](226, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](227, 0, null, null, 1, "a", [
                    ["class", "mx-1 mb-1"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](228, 0, null, null, 0, "i", [
                    ["class", "fa fa-eye fa-inverse"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](229, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](230, 0, null, null, 1, "a", [
                    ["class", "mx-1 mb-1"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](231, 0, null, null, 0, "i", [
                    ["class", "fa fa-download fa-inverse"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](232, 0, null, null, 56, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-2"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](233, 0, null, null, 13, "div", [
                    ["class", "d-flex justify-content-start"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](234, 0, null, null, 2, "div", [
                    ["class", "d-flex align-items-start flex-column mr-3 pos-relative"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](235, 0, null, null, 0, "img", [
                    ["alt", "user thumb"],
                    ["class", "rounded-circle"],
                    ["height", "65"],
                    ["src", "assets/img/user-2.jpg"],
                    ["width", "65"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](236, 0, null, null, 0, "span", [
                    ["class", "badge badge-success square-15 top-right-badge fa-notify"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](237, 0, null, null, 9, "div", [
                    ["class", "d-flex align-items-start flex-column w-100"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](238, 0, null, null, 4, "div", [
                    ["class", "clearfix w-100"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](239, 0, null, null, 1, "h5", [
                    ["class", "pull-left"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Raymond Barrett"])), (l()(), e["\u0275eld"](241, 0, null, null, 1, "span", [
                    ["class", "pull-right small inbox-time"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["February 7th, 2018"])), (l()(), e["\u0275eld"](243, 0, null, null, 3, "p", [
                    ["class", "mb-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Registration Question "])), (l()(), e["\u0275eld"](245, 0, null, null, 1, "span", [
                    ["class", "text-muted"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["< bryan@solutions.com >"])), (l()(), e["\u0275eld"](247, 0, null, null, 0, "div", [
                    ["class", "dropdown-divider my-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](248, 0, null, null, 6, "div", [
                    ["class", "mb-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](249, 0, null, null, 1, "p", [
                    ["class", "mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Hi Lisa,"])), (l()(), e["\u0275eld"](251, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["When the equation, first to ability the forwards, the a but travelling, outlines sentinels bad expand to goodness. Behind if have at the even I and how work, completely deference who boss actually designer; Monstrous with geared from far and these, morals, phase rome; Class. Called get amidst of next."])), (l()(), e["\u0275eld"](253, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Monstrous with geared from far and these, morals, phase rome; Class. Called get amidst of next.Monstrous with geared from far and these, morals, phase rome; Class. Called get amidst of next."])), (l()(), e["\u0275eld"](255, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Regards,"])), (l()(), e["\u0275eld"](257, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Lisa Mayers"])), (l()(), e["\u0275eld"](259, 0, null, null, 0, "div", [
                    ["class", "dropdown-divider my-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](260, 0, null, null, 28, "div", [
                    ["class", "attachments"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](261, 0, null, null, 2, "p", [], null, null, null, null, null)), (l()(), e["\u0275eld"](262, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-paperclip"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" 2 Attachments"])), (l()(), e["\u0275eld"](264, 0, null, null, 24, "ul", [
                    ["class", "list-inline"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](265, 0, null, null, 11, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](266, 0, null, null, 10, "div", [
                    ["class", "overlay-wrap"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](267, 0, null, null, 0, "img", [
                    ["alt", "attachments"],
                    ["class", "img-fluid img-thumbnail"],
                    ["height", "180"],
                    ["src", "assets/img/project-3.jpg"],
                    ["width", "180"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](268, 0, null, null, 8, "div", [
                    ["class", "card-img-overlay primary-tp-layer pos-center text-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](269, 0, null, null, 7, "div", [
                    ["class", "center-holder"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](270, 0, null, null, 6, "ul", [
                    ["class", "list-inline"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](271, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](272, 0, null, null, 1, "a", [
                    ["class", "mx-1 mb-1"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](273, 0, null, null, 0, "i", [
                    ["class", "fa fa-eye fa-inverse"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](274, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](275, 0, null, null, 1, "a", [
                    ["class", "mx-1 mb-1"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](276, 0, null, null, 0, "i", [
                    ["class", "fa fa-download fa-inverse"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](277, 0, null, null, 11, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](278, 0, null, null, 10, "div", [
                    ["class", "overlay-wrap"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](279, 0, null, null, 0, "img", [
                    ["alt", "attachments"],
                    ["class", "img-fluid img-thumbnail"],
                    ["height", "180"],
                    ["src", "assets/img/project-4.jpg"],
                    ["width", "180"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](280, 0, null, null, 8, "div", [
                    ["class", "card-img-overlay primary-tp-layer pos-center text-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](281, 0, null, null, 7, "div", [
                    ["class", "center-holder"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](282, 0, null, null, 6, "ul", [
                    ["class", "list-inline"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](283, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](284, 0, null, null, 1, "a", [
                    ["class", "mx-1 mb-1"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](285, 0, null, null, 0, "i", [
                    ["class", "fa fa-eye fa-inverse"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](286, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](287, 0, null, null, 1, "a", [
                    ["class", "mx-1 mb-1"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](288, 0, null, null, 0, "i", [
                    ["class", "fa fa-download fa-inverse"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](289, 0, null, null, 56, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-3"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](290, 0, null, null, 13, "div", [
                    ["class", "d-flex justify-content-start"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](291, 0, null, null, 2, "div", [
                    ["class", "d-flex align-items-start flex-column mr-3 pos-relative"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](292, 0, null, null, 0, "img", [
                    ["alt", "user thumb"],
                    ["class", "rounded-circle"],
                    ["height", "65"],
                    ["src", "assets/img/user-3.jpg"],
                    ["width", "65"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](293, 0, null, null, 0, "span", [
                    ["class", "badge badge-success square-15 top-right-badge fa-notify"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](294, 0, null, null, 9, "div", [
                    ["class", "d-flex align-items-start flex-column w-100"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](295, 0, null, null, 4, "div", [
                    ["class", "clearfix w-100"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](296, 0, null, null, 1, "h5", [
                    ["class", "pull-left"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Raymond Barrett"])), (l()(), e["\u0275eld"](298, 0, null, null, 1, "span", [
                    ["class", "pull-right small inbox-time"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["February 7th, 2018"])), (l()(), e["\u0275eld"](300, 0, null, null, 3, "p", [
                    ["class", "mb-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Registration Question "])), (l()(), e["\u0275eld"](302, 0, null, null, 1, "span", [
                    ["class", "text-muted"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["< bryan@solutions.com >"])), (l()(), e["\u0275eld"](304, 0, null, null, 0, "div", [
                    ["class", "dropdown-divider my-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](305, 0, null, null, 6, "div", [
                    ["class", "mb-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](306, 0, null, null, 1, "p", [
                    ["class", "mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Hi Juliya,"])), (l()(), e["\u0275eld"](308, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["When the equation, first to ability the forwards, the a but travelling, outlines sentinels bad expand to goodness. Behind if have at the even I and how work, completely deference who boss actually designer; Monstrous with geared from far and these, morals, phase rome; Class. Called get amidst of next."])), (l()(), e["\u0275eld"](310, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Monstrous with geared from far and these, morals, phase rome; Class. Called get amidst of next.Monstrous with geared from far and these, morals, phase rome; Class. Called get amidst of next."])), (l()(), e["\u0275eld"](312, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Regards,"])), (l()(), e["\u0275eld"](314, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Juliya Mayers"])), (l()(), e["\u0275eld"](316, 0, null, null, 0, "div", [
                    ["class", "dropdown-divider my-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](317, 0, null, null, 28, "div", [
                    ["class", "attachments"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](318, 0, null, null, 2, "p", [], null, null, null, null, null)), (l()(), e["\u0275eld"](319, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-paperclip"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" 2 Attachments"])), (l()(), e["\u0275eld"](321, 0, null, null, 24, "ul", [
                    ["class", "list-inline"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](322, 0, null, null, 11, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](323, 0, null, null, 10, "div", [
                    ["class", "overlay-wrap"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](324, 0, null, null, 0, "img", [
                    ["alt", "attachments"],
                    ["class", "img-fluid img-thumbnail"],
                    ["height", "180"],
                    ["src", "assets/img/project-5.jpg"],
                    ["width", "180"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](325, 0, null, null, 8, "div", [
                    ["class", "card-img-overlay primary-tp-layer pos-center text-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](326, 0, null, null, 7, "div", [
                    ["class", "center-holder"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](327, 0, null, null, 6, "ul", [
                    ["class", "list-inline"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](328, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](329, 0, null, null, 1, "a", [
                    ["class", "mx-1 mb-1"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](330, 0, null, null, 0, "i", [
                    ["class", "fa fa-eye fa-inverse"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](331, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](332, 0, null, null, 1, "a", [
                    ["class", "mx-1 mb-1"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](333, 0, null, null, 0, "i", [
                    ["class", "fa fa-download fa-inverse"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](334, 0, null, null, 11, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](335, 0, null, null, 10, "div", [
                    ["class", "overlay-wrap"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](336, 0, null, null, 0, "img", [
                    ["alt", "attachments"],
                    ["class", "img-fluid img-thumbnail"],
                    ["height", "180"],
                    ["src", "assets/img/project-6.jpg"],
                    ["width", "180"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](337, 0, null, null, 8, "div", [
                    ["class", "card-img-overlay primary-tp-layer pos-center text-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](338, 0, null, null, 7, "div", [
                    ["class", "center-holder"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](339, 0, null, null, 6, "ul", [
                    ["class", "list-inline"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](340, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](341, 0, null, null, 1, "a", [
                    ["class", "mx-1 mb-1"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](342, 0, null, null, 0, "i", [
                    ["class", "fa fa-eye fa-inverse"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](343, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](344, 0, null, null, 1, "a", [
                    ["class", "mx-1 mb-1"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](345, 0, null, null, 0, "i", [
                    ["class", "fa fa-download fa-inverse"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](346, 0, null, null, 56, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-4"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](347, 0, null, null, 13, "div", [
                    ["class", "d-flex justify-content-start"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](348, 0, null, null, 2, "div", [
                    ["class", "d-flex align-items-start flex-column mr-3 pos-relative"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](349, 0, null, null, 0, "img", [
                    ["alt", "user thumb"],
                    ["class", "rounded-circle"],
                    ["height", "65"],
                    ["src", "assets/img/user-4.jpg"],
                    ["width", "65"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](350, 0, null, null, 0, "span", [
                    ["class", "badge badge-success square-15 top-right-badge fa-notify"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](351, 0, null, null, 9, "div", [
                    ["class", "d-flex align-items-start flex-column w-100"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](352, 0, null, null, 4, "div", [
                    ["class", "clearfix w-100"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](353, 0, null, null, 1, "h5", [
                    ["class", "pull-left"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Raymond Barrett"])), (l()(), e["\u0275eld"](355, 0, null, null, 1, "span", [
                    ["class", "pull-right small inbox-time"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["February 7th, 2018"])), (l()(), e["\u0275eld"](357, 0, null, null, 3, "p", [
                    ["class", "mb-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Registration Question "])), (l()(), e["\u0275eld"](359, 0, null, null, 1, "span", [
                    ["class", "text-muted small"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["< bryan@solutions.com >"])), (l()(), e["\u0275eld"](361, 0, null, null, 0, "div", [
                    ["class", "dropdown-divider my-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](362, 0, null, null, 6, "div", [
                    ["class", "mb-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](363, 0, null, null, 1, "p", [
                    ["class", "mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Hi Rosa,"])), (l()(), e["\u0275eld"](365, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["When the equation, first to ability the forwards, the a but travelling, outlines sentinels bad expand to goodness. Behind if have at the even I and how work, completely deference who boss actually designer; Monstrous with geared from far and these, morals, phase rome; Class. Called get amidst of next."])), (l()(), e["\u0275eld"](367, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Monstrous with geared from far and these, morals, phase rome; Class. Called get amidst of next.Monstrous with geared from far and these, morals, phase rome; Class. Called get amidst of next."])), (l()(), e["\u0275eld"](369, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Regards,"])), (l()(), e["\u0275eld"](371, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Rosa Mayers"])), (l()(), e["\u0275eld"](373, 0, null, null, 0, "div", [
                    ["class", "dropdown-divider my-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](374, 0, null, null, 28, "div", [
                    ["class", "attachments"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](375, 0, null, null, 2, "p", [], null, null, null, null, null)), (l()(), e["\u0275eld"](376, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-paperclip"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" 2 Attachments"])), (l()(), e["\u0275eld"](378, 0, null, null, 24, "ul", [
                    ["class", "list-inline"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](379, 0, null, null, 11, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](380, 0, null, null, 10, "div", [
                    ["class", "overlay-wrap"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](381, 0, null, null, 0, "img", [
                    ["alt", "attachments"],
                    ["class", "img-fluid img-thumbnail"],
                    ["height", "180"],
                    ["src", "assets/img/project-7.jpg"],
                    ["width", "180"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](382, 0, null, null, 8, "div", [
                    ["class", "card-img-overlay primary-tp-layer pos-center text-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](383, 0, null, null, 7, "div", [
                    ["class", "center-holder"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](384, 0, null, null, 6, "ul", [
                    ["class", "list-inline"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](385, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](386, 0, null, null, 1, "a", [
                    ["class", "mx-1 mb-1"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](387, 0, null, null, 0, "i", [
                    ["class", "fa fa-eye fa-inverse"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](388, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](389, 0, null, null, 1, "a", [
                    ["class", "mx-1 mb-1"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](390, 0, null, null, 0, "i", [
                    ["class", "fa fa-download fa-inverse"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](391, 0, null, null, 11, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](392, 0, null, null, 10, "div", [
                    ["class", "overlay-wrap"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](393, 0, null, null, 0, "img", [
                    ["alt", "attachments"],
                    ["class", "img-fluid img-thumbnail"],
                    ["height", "180"],
                    ["src", "assets/img/project-8.jpg"],
                    ["width", "180"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](394, 0, null, null, 8, "div", [
                    ["class", "card-img-overlay primary-tp-layer pos-center text-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](395, 0, null, null, 7, "div", [
                    ["class", "center-holder"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](396, 0, null, null, 6, "ul", [
                    ["class", "list-inline"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](397, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](398, 0, null, null, 1, "a", [
                    ["class", "mx-1 mb-1"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](399, 0, null, null, 0, "i", [
                    ["class", "fa fa-eye fa-inverse"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](400, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](401, 0, null, null, 1, "a", [
                    ["class", "mx-1 mb-1"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](402, 0, null, null, 0, "i", [
                    ["class", "fa fa-download fa-inverse"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](403, 0, null, null, 56, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-5"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](404, 0, null, null, 13, "div", [
                    ["class", "d-flex justify-content-start"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](405, 0, null, null, 2, "div", [
                    ["class", "d-flex align-items-start flex-column mr-3 pos-relative"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](406, 0, null, null, 0, "img", [
                    ["alt", "user thumb"],
                    ["class", "rounded-circle"],
                    ["height", "65"],
                    ["src", "assets/img/user-5.jpg"],
                    ["width", "65"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](407, 0, null, null, 0, "span", [
                    ["class", "badge badge-success square-15 top-right-badge fa-notify"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](408, 0, null, null, 9, "div", [
                    ["class", "d-flex align-items-start flex-column w-100"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](409, 0, null, null, 4, "div", [
                    ["class", "clearfix w-100"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](410, 0, null, null, 1, "h5", [
                    ["class", "pull-left"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Raymond Barrett"])), (l()(), e["\u0275eld"](412, 0, null, null, 1, "span", [
                    ["class", "pull-right small inbox-time"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["February 7th, 2018"])), (l()(), e["\u0275eld"](414, 0, null, null, 3, "p", [
                    ["class", "mb-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Registration Question "])), (l()(), e["\u0275eld"](416, 0, null, null, 1, "span", [
                    ["class", "text-muted"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["< bryan@solutions.com >"])), (l()(), e["\u0275eld"](418, 0, null, null, 0, "div", [
                    ["class", "dropdown-divider my-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](419, 0, null, null, 6, "div", [
                    ["class", "mb-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](420, 0, null, null, 1, "p", [
                    ["class", "mb-3"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Hi Rosa,"])), (l()(), e["\u0275eld"](422, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["When the equation, first to ability the forwards, the a but travelling, outlines sentinels bad expand to goodness. Behind if have at the even I and how work, completely deference who boss actually designer; Monstrous with geared from far and these, morals, phase rome; Class. Called get amidst of next."])), (l()(), e["\u0275eld"](424, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Monstrous with geared from far and these, morals, phase rome; Class. Called get amidst of next.Monstrous with geared from far and these, morals, phase rome; Class. Called get amidst of next."])), (l()(), e["\u0275eld"](426, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Regards,"])), (l()(), e["\u0275eld"](428, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Rosa Mayers"])), (l()(), e["\u0275eld"](430, 0, null, null, 0, "div", [
                    ["class", "dropdown-divider my-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](431, 0, null, null, 28, "div", [
                    ["class", "attachments"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](432, 0, null, null, 2, "p", [], null, null, null, null, null)), (l()(), e["\u0275eld"](433, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-paperclip"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, [" 2 Attachments"])), (l()(), e["\u0275eld"](435, 0, null, null, 24, "ul", [
                    ["class", "list-inline"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](436, 0, null, null, 11, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](437, 0, null, null, 10, "div", [
                    ["class", "overlay-wrap"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](438, 0, null, null, 0, "img", [
                    ["alt", "attachments"],
                    ["class", "img-fluid img-thumbnail"],
                    ["height", "180"],
                    ["src", "assets/img/project-1.jpg"],
                    ["width", "180"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](439, 0, null, null, 8, "div", [
                    ["class", "card-img-overlay primary-tp-layer pos-center text-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](440, 0, null, null, 7, "div", [
                    ["class", "center-holder"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](441, 0, null, null, 6, "ul", [
                    ["class", "list-inline"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](442, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](443, 0, null, null, 1, "a", [
                    ["class", "mx-1 mb-1"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](444, 0, null, null, 0, "i", [
                    ["class", "fa fa-eye fa-inverse"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](445, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](446, 0, null, null, 1, "a", [
                    ["class", "mx-1 mb-1"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](447, 0, null, null, 0, "i", [
                    ["class", "fa fa-download fa-inverse"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](448, 0, null, null, 11, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](449, 0, null, null, 10, "div", [
                    ["class", "overlay-wrap"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](450, 0, null, null, 0, "img", [
                    ["alt", "attachments"],
                    ["class", "img-fluid img-thumbnail"],
                    ["height", "180"],
                    ["src", "assets/img/project-2.jpg"],
                    ["width", "180"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](451, 0, null, null, 8, "div", [
                    ["class", "card-img-overlay primary-tp-layer pos-center text-center"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](452, 0, null, null, 7, "div", [
                    ["class", "center-holder"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](453, 0, null, null, 6, "ul", [
                    ["class", "list-inline"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](454, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](455, 0, null, null, 1, "a", [
                    ["class", "mx-1 mb-1"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](456, 0, null, null, 0, "i", [
                    ["class", "fa fa-eye fa-inverse"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](457, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](458, 0, null, null, 1, "a", [
                    ["class", "mx-1 mb-1"],
                    ["href", "javascript:void(0)"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](459, 0, null, null, 0, "i", [
                    ["class", "fa fa-download fa-inverse"]
                ], null, null, null, null, null))], null, null)
            }
            var c = e["\u0275ccf"]("ms-inbox", i, function(l) {
                    return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 1, "ms-inbox", [], [
                        [40, "@fadeInAnimation", 0]
                    ], null, null, r, d)), e["\u0275did"](1, 8634368, null, 0, i, [t.a], null, null)], function(l, n) {
                        l(n, 1, 0)
                    }, function(l, n) {
                        l(n, 0, 0, !0)
                    })
                }, {}, {}, []),
                o = u("Ip0R"),
                m = u("gIcY"),
                p = u("ZYCi");
            u.d(n, "InboxModuleNgFactory", function() {
                return f
            });
            var f = e["\u0275cmf"](s, [], function(l) {
                return e["\u0275mod"]([e["\u0275mpd"](512, e.ComponentFactoryResolver, e["\u0275CodegenComponentFactoryResolver"], [
                    [8, [a.a, c]],
                    [3, e.ComponentFactoryResolver], e.NgModuleRef
                ]), e["\u0275mpd"](4608, o.NgLocalization, o.NgLocaleLocalization, [e.LOCALE_ID, [2, o["\u0275angular_packages_common_common_a"]]]), e["\u0275mpd"](4608, m["\u0275angular_packages_forms_forms_i"], m["\u0275angular_packages_forms_forms_i"], []), e["\u0275mpd"](1073742336, o.CommonModule, o.CommonModule, []), e["\u0275mpd"](1073742336, m["\u0275angular_packages_forms_forms_bb"], m["\u0275angular_packages_forms_forms_bb"], []), e["\u0275mpd"](1073742336, m.FormsModule, m.FormsModule, []), e["\u0275mpd"](1073742336, p.p, p.p, [
                    [2, p.v],
                    [2, p.m]
                ]), e["\u0275mpd"](1073742336, s, s, []), e["\u0275mpd"](1024, p.k, function() {
                    return [
                        [{
                            path: "",
                            component: i
                        }]
                    ]
                }, [])])
            })
        }
    }
]);