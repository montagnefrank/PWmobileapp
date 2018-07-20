(window.webpackJsonp = window.webpackJsonp || []).push([
    [29], {
        "5zjZ": function(l, n, u) {
            "use strict";
            u.r(n);
            var e = u("CcnG"),
                t = function() {},
                d = u("pMnS"),
                s = u("c+eF"),
                a = function() {
                    function l(l) {
                        this.pageTitleService = l, this.chatopened = !1, this.chatmode = "push"
                    }
                    return l.prototype._toggleChatSidebar = function() {
                        this.chatopened = !this.chatopened
                    }, l.prototype.ngOnInit = function() {
                        this.pageTitleService.setTitle("Chat")
                    }, l
                }(),
                i = e["\u0275crt"]({
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

            function c(l) {
                return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 304, "div", [
                    ["class", "chat-wrapper fade-in-up"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](1, 0, null, null, 303, "div", [
                    ["class", "row no-gutters bg-grey"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](2, 0, null, null, 69, "div", [
                    ["class", "col-xs-12 col-sm-5 col-md-5 col-xl-4"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](3, 0, null, null, 68, "div", [
                    ["class", "inner-tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](4, 0, null, null, 10, "ul", [
                    ["class", "list-group list-unstyled"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](5, 0, null, null, 2, "li", [
                    ["class", "list-group-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](6, 0, null, null, 1, "h3", [
                    ["class", "text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Contact"])), (l()(), e["\u0275eld"](8, 0, null, null, 6, "li", [
                    ["class", "list-group-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](9, 0, null, null, 5, "div", [
                    ["class", "search-list w-100"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](10, 0, null, null, 4, "div", [
                    ["class", "input-group"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](11, 0, null, null, 0, "input", [
                    ["class", "form-control"],
                    ["placeholder", "Search for..."],
                    ["type", "text"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](12, 0, null, null, 2, "span", [
                    ["class", "input-group-btn"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](13, 0, null, null, 1, "button", [
                    ["class", "btn btn-primary"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](14, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-search"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](15, 0, null, null, 56, "div", [
                    ["class", "chk-inbox-sidebar"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](16, 0, null, null, 55, "ul", [
                    ["class", "nav nav-tabs"],
                    ["role", "tablist"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](17, 0, null, null, 10, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](18, 0, null, null, 9, "a", [
                    ["class", "nav-link active ripple"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-1"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](19, 0, null, null, 8, "div", [
                    ["class", "d-flex justify-content-start"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](20, 0, null, null, 2, "div", [
                    ["class", "d-flex align-items-start flex-column mr-3 pos-relative"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](21, 0, null, null, 0, "img", [
                    ["alt", "user thumb"],
                    ["class", "rounded-circle"],
                    ["height", "55"],
                    ["src", "assets/img/user-1.jpg"],
                    ["width", "55"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](22, 0, null, null, 0, "span", [
                    ["class", "badge badge-success square-10 top-right-badge fa-notify"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](23, 0, null, null, 4, "div", [
                    ["class", "d-flex align-items-start flex-column m-w-160"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](24, 0, null, null, 1, "h5", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Raymond Barrett"])), (l()(), e["\u0275eld"](26, 0, null, null, 1, "p", [
                    ["class", "text-muted text-over mb-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["What is going on, are we..."])), (l()(), e["\u0275eld"](28, 0, null, null, 10, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](29, 0, null, null, 9, "a", [
                    ["class", "nav-link ripple"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-2"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](30, 0, null, null, 8, "div", [
                    ["class", "d-flex justify-content-start"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](31, 0, null, null, 2, "div", [
                    ["class", "d-flex align-items-start flex-column mr-3 pos-relative"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](32, 0, null, null, 0, "img", [
                    ["alt", "user thumb"],
                    ["class", "rounded-circle"],
                    ["height", "55"],
                    ["src", "assets/img/user-2.jpg"],
                    ["width", "55"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](33, 0, null, null, 0, "span", [
                    ["class", "badge badge-danger square-10 top-right-badge fa-notify"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](34, 0, null, null, 4, "div", [
                    ["class", "d-flex align-items-start flex-column m-w-160"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](35, 0, null, null, 1, "h5", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Barry Ellis"])), (l()(), e["\u0275eld"](37, 0, null, null, 1, "p", [
                    ["class", "text-muted text-over mb-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Yes, I've sent you details..."])), (l()(), e["\u0275eld"](39, 0, null, null, 10, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](40, 0, null, null, 9, "a", [
                    ["class", "nav-link ripple"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-3"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](41, 0, null, null, 8, "div", [
                    ["class", "d-flex justify-content-start"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](42, 0, null, null, 2, "div", [
                    ["class", "d-flex align-items-start flex-column mr-3 pos-relative"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](43, 0, null, null, 0, "img", [
                    ["alt", "user thumb"],
                    ["class", "rounded-circle"],
                    ["height", "55"],
                    ["src", "assets/img/user-3.jpg"],
                    ["width", "55"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](44, 0, null, null, 0, "span", [
                    ["class", "badge badge-success square-10 top-right-badge fa-notify"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](45, 0, null, null, 4, "div", [
                    ["class", "d-flex align-items-start flex-column m-w-160"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](46, 0, null, null, 1, "h5", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Matilda Miles"])), (l()(), e["\u0275eld"](48, 0, null, null, 1, "p", [
                    ["class", "text-muted text-over mb-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["What is going on, are we..."])), (l()(), e["\u0275eld"](50, 0, null, null, 10, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](51, 0, null, null, 9, "a", [
                    ["class", "nav-link ripple"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-4"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](52, 0, null, null, 8, "div", [
                    ["class", "d-flex justify-content-start"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](53, 0, null, null, 2, "div", [
                    ["class", "d-flex align-items-start flex-column mr-3 pos-relative"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](54, 0, null, null, 0, "img", [
                    ["alt", "user thumb"],
                    ["class", "rounded-circle"],
                    ["height", "55"],
                    ["src", "assets/img/user-4.jpg"],
                    ["width", "55"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](55, 0, null, null, 0, "span", [
                    ["class", "badge badge-success square-10 top-right-badge fa-notify"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](56, 0, null, null, 4, "div", [
                    ["class", "d-flex align-items-start flex-column m-w-160"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](57, 0, null, null, 1, "h5", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Ella Fletcher"])), (l()(), e["\u0275eld"](59, 0, null, null, 1, "p", [
                    ["class", "text-muted text-over mb-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Can you send me this..."])), (l()(), e["\u0275eld"](61, 0, null, null, 10, "li", [
                    ["class", "nav-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](62, 0, null, null, 9, "a", [
                    ["class", "nav-link ripple"],
                    ["data-toggle", "tab"],
                    ["href", "#tab-5"],
                    ["role", "tab"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](63, 0, null, null, 8, "div", [
                    ["class", "d-flex justify-content-start"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](64, 0, null, null, 2, "div", [
                    ["class", "d-flex align-items-start flex-column mr-3 pos-relative"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](65, 0, null, null, 0, "img", [
                    ["alt", "user thumb"],
                    ["class", "rounded-circle"],
                    ["height", "55"],
                    ["src", "assets/img/user-5.jpg"],
                    ["width", "55"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](66, 0, null, null, 0, "span", [
                    ["class", "badge badge-warning square-10 top-right-badge fa-notify"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](67, 0, null, null, 4, "div", [
                    ["class", "d-flex align-items-start flex-column m-w-160"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](68, 0, null, null, 1, "h5", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Harvey Newton"])), (l()(), e["\u0275eld"](70, 0, null, null, 1, "p", [
                    ["class", "text-muted text-over mb-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["What is going on, are we..."])), (l()(), e["\u0275eld"](72, 0, null, null, 232, "div", [
                    ["class", "col-xs-12 col-sm-7 col-md-7 col-xl-8"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](73, 0, null, null, 231, "div", [
                    ["class", "chk-block mb-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](74, 0, null, null, 12, "div", [
                    ["class", "chk-block-title bg-light"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](75, 0, null, null, 11, "div", [
                    ["class", "d-flex justify-content-between"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](76, 0, null, null, 2, "div", [
                    ["class", "d-flex align-content-start"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](77, 0, null, null, 1, "h3", [
                    ["class", "mb-0 text-capitalize"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["To:John Mayers"])), (l()(), e["\u0275eld"](79, 0, null, null, 7, "div", [
                    ["class", "d-flex align-content-end"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](80, 0, null, null, 6, "ul", [
                    ["class", "inbox-action list-inline mb-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](81, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](82, 0, null, null, 1, "a", [], null, null, null, null, null)), (l()(), e["\u0275eld"](83, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-video-camera fa-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](84, 0, null, null, 2, "li", [
                    ["class", "list-inline-item"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](85, 0, null, null, 1, "a", [], null, null, null, null, null)), (l()(), e["\u0275eld"](86, 0, null, null, 0, "i", [
                    ["aria-hidden", "true"],
                    ["class", "fa fa-phone fa-lg"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](87, 0, null, null, 211, "div", [
                    ["class", "chk-block-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](88, 0, null, null, 210, "div", [
                    ["class", "tab-content"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](89, 0, null, null, 41, "div", [
                    ["class", "tab-pane fade show active"],
                    ["id", "tab-1"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](90, 0, null, null, 40, "div", [
                    ["class", "chat-wrapper"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](91, 0, null, null, 9, "div", [
                    ["class", "media"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](92, 0, null, null, 0, "img", [
                    ["alt", "thumb image"],
                    ["class", "d-flex mr-3 img-fluid rounded-circle"],
                    ["height", "60"],
                    ["src", "assets/img/user-1.jpg"],
                    ["width", "60"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](93, 0, null, null, 7, "div", [
                    ["class", "media-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](94, 0, null, null, 1, "span", [
                    ["class", "text-muted small d-block mb-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Beatrice Ward"])), (l()(), e["\u0275eld"](96, 0, null, null, 2, "div", [
                    ["class", "chat-content odd"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](97, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This is exactly I needed. You guys did a great job."])), (l()(), e["\u0275eld"](99, 0, null, null, 1, "p", [
                    ["class", "text-muted small mt-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["3 Min ago"])), (l()(), e["\u0275eld"](101, 0, null, null, 9, "div", [
                    ["class", "media"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](102, 0, null, null, 7, "div", [
                    ["class", "media-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](103, 0, null, null, 1, "span", [
                    ["class", "text-muted small text-right d-block mb-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Estella Marsh"])), (l()(), e["\u0275eld"](105, 0, null, null, 2, "div", [
                    ["class", "chat-content even"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](106, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["We are always here to help you. Our customer care service is 24X7."])), (l()(), e["\u0275eld"](108, 0, null, null, 1, "p", [
                    ["class", "text-muted small text-right mt-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["4 Min ago"])), (l()(), e["\u0275eld"](110, 0, null, null, 0, "img", [
                    ["alt", "thumb image"],
                    ["class", "d-flex ml-3 img-fluid rounded-circle"],
                    ["height", "60"],
                    ["src", "assets/img/user-3.jpg"],
                    ["width", "60"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](111, 0, null, null, 9, "div", [
                    ["class", "media"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](112, 0, null, null, 0, "img", [
                    ["alt", "thumb image"],
                    ["class", "d-flex mr-3 img-fluid rounded-circle"],
                    ["height", "60"],
                    ["src", "assets/img/user-1.jpg"],
                    ["width", "60"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](113, 0, null, null, 7, "div", [
                    ["class", "media-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](114, 0, null, null, 1, "span", [
                    ["class", "text-muted small d-block mb-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Beatrice Ward"])), (l()(), e["\u0275eld"](116, 0, null, null, 2, "div", [
                    ["class", "chat-content odd"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](117, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["I got it fixed with your guidelines. Great and quick support !"])), (l()(), e["\u0275eld"](119, 0, null, null, 1, "p", [
                    ["class", "text-muted small mt-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["5 Min ago"])), (l()(), e["\u0275eld"](121, 0, null, null, 9, "div", [
                    ["class", "media"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](122, 0, null, null, 7, "div", [
                    ["class", "media-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](123, 0, null, null, 1, "span", [
                    ["class", "text-muted small text-right d-block mb-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Estella Marsh"])), (l()(), e["\u0275eld"](125, 0, null, null, 2, "div", [
                    ["class", "chat-content even"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](126, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["You can go through the documentation for style customization."])), (l()(), e["\u0275eld"](128, 0, null, null, 1, "p", [
                    ["class", "text-muted small text-right mt-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["5 Min ago"])), (l()(), e["\u0275eld"](130, 0, null, null, 0, "img", [
                    ["alt", "thumb image"],
                    ["class", "d-flex ml-3 img-fluid rounded-circle"],
                    ["height", "60"],
                    ["src", "assets/img/user-3.jpg"],
                    ["width", "60"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](131, 0, null, null, 41, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-2"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](132, 0, null, null, 40, "div", [
                    ["class", "chat-wrapper"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](133, 0, null, null, 9, "div", [
                    ["class", "media"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](134, 0, null, null, 0, "img", [
                    ["alt", "thumb image"],
                    ["class", "d-flex mr-3 img-fluid rounded-circle"],
                    ["height", "60"],
                    ["src", "assets/img/user-1.jpg"],
                    ["width", "60"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](135, 0, null, null, 7, "div", [
                    ["class", "media-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](136, 0, null, null, 1, "span", [
                    ["class", "text-muted small d-block mb-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Beatrice Ward"])), (l()(), e["\u0275eld"](138, 0, null, null, 2, "div", [
                    ["class", "chat-content odd"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](139, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This is exactly I needed. You guys did a great job."])), (l()(), e["\u0275eld"](141, 0, null, null, 1, "p", [
                    ["class", "text-muted small mt-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["3 Min ago"])), (l()(), e["\u0275eld"](143, 0, null, null, 9, "div", [
                    ["class", "media"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](144, 0, null, null, 7, "div", [
                    ["class", "media-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](145, 0, null, null, 1, "span", [
                    ["class", "text-muted small text-right d-block mb-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Estella Marsh"])), (l()(), e["\u0275eld"](147, 0, null, null, 2, "div", [
                    ["class", "chat-content even"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](148, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["We are always here to help you. Our customer care service is 24X7."])), (l()(), e["\u0275eld"](150, 0, null, null, 1, "p", [
                    ["class", "text-muted small text-right mt-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["4 Min ago"])), (l()(), e["\u0275eld"](152, 0, null, null, 0, "img", [
                    ["alt", "thumb image"],
                    ["class", "d-flex ml-3 img-fluid rounded-circle"],
                    ["height", "60"],
                    ["src", "assets/img/user-3.jpg"],
                    ["width", "60"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](153, 0, null, null, 9, "div", [
                    ["class", "media"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](154, 0, null, null, 0, "img", [
                    ["alt", "thumb image"],
                    ["class", "d-flex mr-3 img-fluid rounded-circle"],
                    ["height", "60"],
                    ["src", "assets/img/user-1.jpg"],
                    ["width", "60"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](155, 0, null, null, 7, "div", [
                    ["class", "media-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](156, 0, null, null, 1, "span", [
                    ["class", "text-muted small d-block mb-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Beatrice Ward"])), (l()(), e["\u0275eld"](158, 0, null, null, 2, "div", [
                    ["class", "chat-content odd"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](159, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["I got it fixed with your guidelines. Great and quick support !"])), (l()(), e["\u0275eld"](161, 0, null, null, 1, "p", [
                    ["class", "text-muted small mt-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["5 Min ago"])), (l()(), e["\u0275eld"](163, 0, null, null, 9, "div", [
                    ["class", "media"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](164, 0, null, null, 7, "div", [
                    ["class", "media-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](165, 0, null, null, 1, "span", [
                    ["class", "text-muted small text-right d-block mb-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Estella Marsh"])), (l()(), e["\u0275eld"](167, 0, null, null, 2, "div", [
                    ["class", "chat-content even"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](168, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["You can go through the documentation for style customization."])), (l()(), e["\u0275eld"](170, 0, null, null, 1, "p", [
                    ["class", "text-muted small text-right mt-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["5 Min ago"])), (l()(), e["\u0275eld"](172, 0, null, null, 0, "img", [
                    ["alt", "thumb image"],
                    ["class", "d-flex ml-3 img-fluid rounded-circle"],
                    ["height", "60"],
                    ["src", "assets/img/user-3.jpg"],
                    ["width", "60"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](173, 0, null, null, 41, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-3"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](174, 0, null, null, 40, "div", [
                    ["class", "chat-wrapper"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](175, 0, null, null, 9, "div", [
                    ["class", "media"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](176, 0, null, null, 0, "img", [
                    ["alt", "thumb image"],
                    ["class", "d-flex mr-3 img-fluid rounded-circle"],
                    ["height", "60"],
                    ["src", "assets/img/user-1.jpg"],
                    ["width", "60"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](177, 0, null, null, 7, "div", [
                    ["class", "media-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](178, 0, null, null, 1, "span", [
                    ["class", "text-muted small d-block mb-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Beatrice Ward"])), (l()(), e["\u0275eld"](180, 0, null, null, 2, "div", [
                    ["class", "chat-content odd"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](181, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This is exactly I needed. You guys did a great job."])), (l()(), e["\u0275eld"](183, 0, null, null, 1, "p", [
                    ["class", "text-muted small mt-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["3 Min ago"])), (l()(), e["\u0275eld"](185, 0, null, null, 9, "div", [
                    ["class", "media"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](186, 0, null, null, 7, "div", [
                    ["class", "media-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](187, 0, null, null, 1, "span", [
                    ["class", "text-muted small text-right d-block mb-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Estella Marsh"])), (l()(), e["\u0275eld"](189, 0, null, null, 2, "div", [
                    ["class", "chat-content even"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](190, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["We are always here to help you. Our customer care service is 24X7."])), (l()(), e["\u0275eld"](192, 0, null, null, 1, "p", [
                    ["class", "text-muted small text-right mt-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["4 Min ago"])), (l()(), e["\u0275eld"](194, 0, null, null, 0, "img", [
                    ["alt", "thumb image"],
                    ["class", "d-flex ml-3 img-fluid rounded-circle"],
                    ["height", "60"],
                    ["src", "assets/img/user-3.jpg"],
                    ["width", "60"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](195, 0, null, null, 9, "div", [
                    ["class", "media"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](196, 0, null, null, 0, "img", [
                    ["alt", "thumb image"],
                    ["class", "d-flex mr-3 img-fluid rounded-circle"],
                    ["height", "60"],
                    ["src", "assets/img/user-1.jpg"],
                    ["width", "60"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](197, 0, null, null, 7, "div", [
                    ["class", "media-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](198, 0, null, null, 1, "span", [
                    ["class", "text-muted small d-block mb-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Beatrice Ward"])), (l()(), e["\u0275eld"](200, 0, null, null, 2, "div", [
                    ["class", "chat-content odd"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](201, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["I got it fixed with your guidelines. Great and quick support !"])), (l()(), e["\u0275eld"](203, 0, null, null, 1, "p", [
                    ["class", "text-muted small mt-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["5 Min ago"])), (l()(), e["\u0275eld"](205, 0, null, null, 9, "div", [
                    ["class", "media"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](206, 0, null, null, 7, "div", [
                    ["class", "media-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](207, 0, null, null, 1, "span", [
                    ["class", "text-muted small text-right d-block mb-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Estella Marsh"])), (l()(), e["\u0275eld"](209, 0, null, null, 2, "div", [
                    ["class", "chat-content even"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](210, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["You can go through the documentation for style customization."])), (l()(), e["\u0275eld"](212, 0, null, null, 1, "p", [
                    ["class", "text-muted small text-right mt-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["5 Min ago"])), (l()(), e["\u0275eld"](214, 0, null, null, 0, "img", [
                    ["alt", "thumb image"],
                    ["class", "d-flex ml-3 img-fluid rounded-circle"],
                    ["height", "60"],
                    ["src", "assets/img/user-3.jpg"],
                    ["width", "60"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](215, 0, null, null, 41, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-4"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](216, 0, null, null, 40, "div", [
                    ["class", "chat-wrapper"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](217, 0, null, null, 9, "div", [
                    ["class", "media"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](218, 0, null, null, 0, "img", [
                    ["alt", "thumb image"],
                    ["class", "d-flex mr-3 img-fluid rounded-circle"],
                    ["height", "60"],
                    ["src", "assets/img/user-1.jpg"],
                    ["width", "60"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](219, 0, null, null, 7, "div", [
                    ["class", "media-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](220, 0, null, null, 1, "span", [
                    ["class", "text-muted small d-block mb-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Beatrice Ward"])), (l()(), e["\u0275eld"](222, 0, null, null, 2, "div", [
                    ["class", "chat-content odd"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](223, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This is exactly I needed. You guys did a great job."])), (l()(), e["\u0275eld"](225, 0, null, null, 1, "p", [
                    ["class", "text-muted small mt-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["3 Min ago"])), (l()(), e["\u0275eld"](227, 0, null, null, 9, "div", [
                    ["class", "media"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](228, 0, null, null, 7, "div", [
                    ["class", "media-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](229, 0, null, null, 1, "span", [
                    ["class", "text-muted small text-right d-block mb-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Estella Marsh"])), (l()(), e["\u0275eld"](231, 0, null, null, 2, "div", [
                    ["class", "chat-content even"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](232, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["We are always here to help you. Our customer care service is 24X7."])), (l()(), e["\u0275eld"](234, 0, null, null, 1, "p", [
                    ["class", "text-muted small text-right mt-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["4 Min ago"])), (l()(), e["\u0275eld"](236, 0, null, null, 0, "img", [
                    ["alt", "thumb image"],
                    ["class", "d-flex ml-3 img-fluid rounded-circle"],
                    ["height", "60"],
                    ["src", "assets/img/user-3.jpg"],
                    ["width", "60"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](237, 0, null, null, 9, "div", [
                    ["class", "media"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](238, 0, null, null, 0, "img", [
                    ["alt", "thumb image"],
                    ["class", "d-flex mr-3 img-fluid rounded-circle"],
                    ["height", "60"],
                    ["src", "assets/img/user-1.jpg"],
                    ["width", "60"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](239, 0, null, null, 7, "div", [
                    ["class", "media-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](240, 0, null, null, 1, "span", [
                    ["class", "text-muted small d-block mb-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Beatrice Ward"])), (l()(), e["\u0275eld"](242, 0, null, null, 2, "div", [
                    ["class", "chat-content odd"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](243, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["I got it fixed with your guidelines. Great and quick support !"])), (l()(), e["\u0275eld"](245, 0, null, null, 1, "p", [
                    ["class", "text-muted small mt-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["5 Min ago"])), (l()(), e["\u0275eld"](247, 0, null, null, 9, "div", [
                    ["class", "media"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](248, 0, null, null, 7, "div", [
                    ["class", "media-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](249, 0, null, null, 1, "span", [
                    ["class", "text-muted small text-right d-block mb-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Estella Marsh"])), (l()(), e["\u0275eld"](251, 0, null, null, 2, "div", [
                    ["class", "chat-content even"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](252, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["You can go through the documentation for style customization."])), (l()(), e["\u0275eld"](254, 0, null, null, 1, "p", [
                    ["class", "text-muted small text-right mt-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["5 Min ago"])), (l()(), e["\u0275eld"](256, 0, null, null, 0, "img", [
                    ["alt", "thumb image"],
                    ["class", "d-flex ml-3 img-fluid rounded-circle"],
                    ["height", "60"],
                    ["src", "assets/img/user-3.jpg"],
                    ["width", "60"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](257, 0, null, null, 41, "div", [
                    ["class", "tab-pane fade"],
                    ["id", "tab-5"],
                    ["role", "tabpanel"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](258, 0, null, null, 40, "div", [
                    ["class", "chat-wrapper"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](259, 0, null, null, 9, "div", [
                    ["class", "media"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](260, 0, null, null, 0, "img", [
                    ["alt", "thumb image"],
                    ["class", "d-flex mr-3 img-fluid rounded-circle"],
                    ["height", "60"],
                    ["src", "assets/img/user-1.jpg"],
                    ["width", "60"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](261, 0, null, null, 7, "div", [
                    ["class", "media-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](262, 0, null, null, 1, "span", [
                    ["class", "text-muted small d-block mb-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Beatrice Ward"])), (l()(), e["\u0275eld"](264, 0, null, null, 2, "div", [
                    ["class", "chat-content odd"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](265, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["This is exactly I needed. You guys did a great job."])), (l()(), e["\u0275eld"](267, 0, null, null, 1, "p", [
                    ["class", "text-muted small mt-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["3 Min ago"])), (l()(), e["\u0275eld"](269, 0, null, null, 9, "div", [
                    ["class", "media"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](270, 0, null, null, 7, "div", [
                    ["class", "media-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](271, 0, null, null, 1, "span", [
                    ["class", "text-muted small text-right d-block mb-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Estella Marsh"])), (l()(), e["\u0275eld"](273, 0, null, null, 2, "div", [
                    ["class", "chat-content even"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](274, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["We are always here to help you. Our customer care service is 24X7."])), (l()(), e["\u0275eld"](276, 0, null, null, 1, "p", [
                    ["class", "text-muted small text-right mt-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["4 Min ago"])), (l()(), e["\u0275eld"](278, 0, null, null, 0, "img", [
                    ["alt", "thumb image"],
                    ["class", "d-flex ml-3 img-fluid rounded-circle"],
                    ["height", "60"],
                    ["src", "assets/img/user-3.jpg"],
                    ["width", "60"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](279, 0, null, null, 9, "div", [
                    ["class", "media"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](280, 0, null, null, 0, "img", [
                    ["alt", "thumb image"],
                    ["class", "d-flex mr-3 img-fluid rounded-circle"],
                    ["height", "60"],
                    ["src", "assets/img/user-1.jpg"],
                    ["width", "60"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](281, 0, null, null, 7, "div", [
                    ["class", "media-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](282, 0, null, null, 1, "span", [
                    ["class", "text-muted small d-block mb-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Beatrice Ward"])), (l()(), e["\u0275eld"](284, 0, null, null, 2, "div", [
                    ["class", "chat-content odd"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](285, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["I got it fixed with your guidelines. Great and quick support !"])), (l()(), e["\u0275eld"](287, 0, null, null, 1, "p", [
                    ["class", "text-muted small mt-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["5 Min ago"])), (l()(), e["\u0275eld"](289, 0, null, null, 9, "div", [
                    ["class", "media"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](290, 0, null, null, 7, "div", [
                    ["class", "media-body"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](291, 0, null, null, 1, "span", [
                    ["class", "text-muted small text-right d-block mb-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Estella Marsh"])), (l()(), e["\u0275eld"](293, 0, null, null, 2, "div", [
                    ["class", "chat-content even"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](294, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["You can go through the documentation for style customization."])), (l()(), e["\u0275eld"](296, 0, null, null, 1, "p", [
                    ["class", "text-muted small text-right mt-1"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["5 Min ago"])), (l()(), e["\u0275eld"](298, 0, null, null, 0, "img", [
                    ["alt", "thumb image"],
                    ["class", "d-flex ml-3 img-fluid rounded-circle"],
                    ["height", "60"],
                    ["src", "assets/img/user-3.jpg"],
                    ["width", "60"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](299, 0, null, null, 5, "div", [
                    ["class", "send-msg  p-4 bg-light m-0"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](300, 0, null, null, 4, "div", [
                    ["class", "input-group"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](301, 0, null, null, 0, "input", [
                    ["class", "form-control"],
                    ["placeholder", "Type message..."],
                    ["type", "text"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](302, 0, null, null, 2, "span", [
                    ["class", "input-group-btn"]
                ], null, null, null, null, null)), (l()(), e["\u0275eld"](303, 0, null, null, 1, "button", [
                    ["class", "btn btn-primary btn-square btn-lg"],
                    ["type", "button"]
                ], null, null, null, null, null)), (l()(), e["\u0275ted"](-1, null, ["Reply"]))], null, null)
            }
            var m = e["\u0275ccf"]("ms-chat", a, function(l) {
                    return e["\u0275vid"](0, [(l()(), e["\u0275eld"](0, 0, null, null, 1, "ms-chat", [], [
                        [40, "@fadeInAnimation", 0]
                    ], null, null, c, i)), e["\u0275did"](1, 114688, null, 0, a, [s.a], null, null)], function(l, n) {
                        l(n, 1, 0)
                    }, function(l, n) {
                        l(n, 0, 0, !0)
                    })
                }, {}, {}, []),
                o = u("Ip0R"),
                r = u("gIcY"),
                g = u("ZYCi");
            u.d(n, "ChatModuleNgFactory", function() {
                return h
            });
            var h = e["\u0275cmf"](t, [], function(l) {
                return e["\u0275mod"]([e["\u0275mpd"](512, e.ComponentFactoryResolver, e["\u0275CodegenComponentFactoryResolver"], [
                    [8, [d.a, m]],
                    [3, e.ComponentFactoryResolver], e.NgModuleRef
                ]), e["\u0275mpd"](4608, o.NgLocalization, o.NgLocaleLocalization, [e.LOCALE_ID, [2, o["\u0275angular_packages_common_common_a"]]]), e["\u0275mpd"](4608, r["\u0275angular_packages_forms_forms_i"], r["\u0275angular_packages_forms_forms_i"], []), e["\u0275mpd"](1073742336, o.CommonModule, o.CommonModule, []), e["\u0275mpd"](1073742336, r["\u0275angular_packages_forms_forms_bb"], r["\u0275angular_packages_forms_forms_bb"], []), e["\u0275mpd"](1073742336, r.FormsModule, r.FormsModule, []), e["\u0275mpd"](1073742336, g.p, g.p, [
                    [2, g.v],
                    [2, g.m]
                ]), e["\u0275mpd"](1073742336, t, t, []), e["\u0275mpd"](1024, g.k, function() {
                    return [
                        [{
                            path: "",
                            component: a
                        }]
                    ]
                }, [])])
            })
        }
    }
]);