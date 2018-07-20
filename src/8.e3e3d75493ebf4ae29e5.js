(window.webpackJsonp = window.webpackJsonp || []).push([
    [8], {
        "+s0g": function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
                    a = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
                    n = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
                    i = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
                e.defineLocale("nl", {
                    months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
                    monthsShort: function(e, n) {
                        return e ? /-MMM-/.test(n) ? a[e.month()] : t[e.month()] : t
                    },
                    monthsRegex: i,
                    monthsShortRegex: i,
                    monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
                    monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
                    monthsParse: n,
                    longMonthsParse: n,
                    shortMonthsParse: n,
                    weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
                    weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
                    weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD-MM-YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[vandaag om] LT",
                        nextDay: "[morgen om] LT",
                        nextWeek: "dddd [om] LT",
                        lastDay: "[gisteren om] LT",
                        lastWeek: "[afgelopen] dddd [om] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "over %s",
                        past: "%s geleden",
                        s: "een paar seconden",
                        ss: "%d seconden",
                        m: "\xe9\xe9n minuut",
                        mm: "%d minuten",
                        h: "\xe9\xe9n uur",
                        hh: "%d uur",
                        d: "\xe9\xe9n dag",
                        dd: "%d dagen",
                        M: "\xe9\xe9n maand",
                        MM: "%d maanden",
                        y: "\xe9\xe9n jaar",
                        yy: "%d jaar"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
                    ordinal: function(e) {
                        return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(a("wd/R"))
        },
        "//9w": function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("se", {
                    months: "o\u0111\u0111ajagem\xe1nnu_guovvam\xe1nnu_njuk\u010dam\xe1nnu_cuo\u014bom\xe1nnu_miessem\xe1nnu_geassem\xe1nnu_suoidnem\xe1nnu_borgem\xe1nnu_\u010dak\u010dam\xe1nnu_golggotm\xe1nnu_sk\xe1bmam\xe1nnu_juovlam\xe1nnu".split("_"),
                    monthsShort: "o\u0111\u0111j_guov_njuk_cuo_mies_geas_suoi_borg_\u010dak\u010d_golg_sk\xe1b_juov".split("_"),
                    weekdays: "sotnabeaivi_vuoss\xe1rga_ma\u014b\u014beb\xe1rga_gaskavahkku_duorastat_bearjadat_l\xe1vvardat".split("_"),
                    weekdaysShort: "sotn_vuos_ma\u014b_gask_duor_bear_l\xe1v".split("_"),
                    weekdaysMin: "s_v_m_g_d_b_L".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "MMMM D. [b.] YYYY",
                        LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
                        LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm"
                    },
                    calendar: {
                        sameDay: "[otne ti] LT",
                        nextDay: "[ihttin ti] LT",
                        nextWeek: "dddd [ti] LT",
                        lastDay: "[ikte ti] LT",
                        lastWeek: "[ovddit] dddd [ti] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s gea\u017ees",
                        past: "ma\u014bit %s",
                        s: "moadde sekunddat",
                        ss: "%d sekunddat",
                        m: "okta minuhta",
                        mm: "%d minuhtat",
                        h: "okta diimmu",
                        hh: "%d diimmut",
                        d: "okta beaivi",
                        dd: "%d beaivvit",
                        M: "okta m\xe1nnu",
                        MM: "%d m\xe1nut",
                        y: "okta jahki",
                        yy: "%d jagit"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(a("wd/R"))
        },
        "/X5v": function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("x-pseudo", {
                    months: "J~\xe1\xf1\xfa\xe1~r\xfd_F~\xe9br\xfa~\xe1r\xfd_~M\xe1rc~h_\xc1p~r\xedl_~M\xe1\xfd_~J\xfa\xf1\xe9~_J\xfal~\xfd_\xc1\xfa~g\xfast~_S\xe9p~t\xe9mb~\xe9r_\xd3~ct\xf3b~\xe9r_\xd1~\xf3v\xe9m~b\xe9r_~D\xe9c\xe9~mb\xe9r".split("_"),
                    monthsShort: "J~\xe1\xf1_~F\xe9b_~M\xe1r_~\xc1pr_~M\xe1\xfd_~J\xfa\xf1_~J\xfal_~\xc1\xfag_~S\xe9p_~\xd3ct_~\xd1\xf3v_~D\xe9c".split("_"),
                    monthsParseExact: !0,
                    weekdays: "S~\xfa\xf1d\xe1~\xfd_M\xf3~\xf1d\xe1\xfd~_T\xfa\xe9~sd\xe1\xfd~_W\xe9d~\xf1\xe9sd~\xe1\xfd_T~h\xfars~d\xe1\xfd_~Fr\xedd~\xe1\xfd_S~\xe1t\xfar~d\xe1\xfd".split("_"),
                    weekdaysShort: "S~\xfa\xf1_~M\xf3\xf1_~T\xfa\xe9_~W\xe9d_~Th\xfa_~Fr\xed_~S\xe1t".split("_"),
                    weekdaysMin: "S~\xfa_M\xf3~_T\xfa_~W\xe9_T~h_Fr~_S\xe1".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[T~\xf3d\xe1~\xfd \xe1t] LT",
                        nextDay: "[T~\xf3m\xf3~rr\xf3~w \xe1t] LT",
                        nextWeek: "dddd [\xe1t] LT",
                        lastDay: "[\xdd~\xe9st~\xe9rd\xe1~\xfd \xe1t] LT",
                        lastWeek: "[L~\xe1st] dddd [\xe1t] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "\xed~\xf1 %s",
                        past: "%s \xe1~g\xf3",
                        s: "\xe1 ~f\xe9w ~s\xe9c\xf3~\xf1ds",
                        ss: "%d s~\xe9c\xf3\xf1~ds",
                        m: "\xe1 ~m\xed\xf1~\xfat\xe9",
                        mm: "%d m~\xed\xf1\xfa~t\xe9s",
                        h: "\xe1~\xf1 h\xf3~\xfar",
                        hh: "%d h~\xf3\xfars",
                        d: "\xe1 ~d\xe1\xfd",
                        dd: "%d d~\xe1\xfds",
                        M: "\xe1 ~m\xf3\xf1~th",
                        MM: "%d m~\xf3\xf1t~hs",
                        y: "\xe1 ~\xfd\xe9\xe1r",
                        yy: "%d \xfd~\xe9\xe1rs"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                    ordinal: function(e) {
                        var t = e % 10;
                        return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(a("wd/R"))
        },
        "0mo+": function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = {
                        1: "\u0f21",
                        2: "\u0f22",
                        3: "\u0f23",
                        4: "\u0f24",
                        5: "\u0f25",
                        6: "\u0f26",
                        7: "\u0f27",
                        8: "\u0f28",
                        9: "\u0f29",
                        0: "\u0f20"
                    },
                    a = {
                        "\u0f21": "1",
                        "\u0f22": "2",
                        "\u0f23": "3",
                        "\u0f24": "4",
                        "\u0f25": "5",
                        "\u0f26": "6",
                        "\u0f27": "7",
                        "\u0f28": "8",
                        "\u0f29": "9",
                        "\u0f20": "0"
                    };
                e.defineLocale("bo", {
                    months: "\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0f44\u0f0b\u0f54\u0f7c_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f49\u0f72\u0f66\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f66\u0f74\u0f58\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f5e\u0f72\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f63\u0f94\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0fb2\u0f74\u0f42\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f51\u0f74\u0f53\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f62\u0f92\u0fb1\u0f51\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0f42\u0f74\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f42\u0f45\u0f72\u0f42\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f42\u0f49\u0f72\u0f66\u0f0b\u0f54".split("_"),
                    monthsShort: "\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0f44\u0f0b\u0f54\u0f7c_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f49\u0f72\u0f66\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f66\u0f74\u0f58\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f5e\u0f72\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f63\u0f94\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0fb2\u0f74\u0f42\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f51\u0f74\u0f53\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f62\u0f92\u0fb1\u0f51\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0f42\u0f74\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f42\u0f45\u0f72\u0f42\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f42\u0f49\u0f72\u0f66\u0f0b\u0f54".split("_"),
                    weekdays: "\u0f42\u0f5f\u0f60\u0f0b\u0f49\u0f72\u0f0b\u0f58\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f5f\u0fb3\u0f0b\u0f56\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f58\u0f72\u0f42\u0f0b\u0f51\u0f58\u0f62\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f63\u0fb7\u0f42\u0f0b\u0f54\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f55\u0f74\u0f62\u0f0b\u0f56\u0f74_\u0f42\u0f5f\u0f60\u0f0b\u0f54\u0f0b\u0f66\u0f44\u0f66\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f66\u0fa4\u0f7a\u0f53\u0f0b\u0f54\u0f0b".split("_"),
                    weekdaysShort: "\u0f49\u0f72\u0f0b\u0f58\u0f0b_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b_\u0f58\u0f72\u0f42\u0f0b\u0f51\u0f58\u0f62\u0f0b_\u0f63\u0fb7\u0f42\u0f0b\u0f54\u0f0b_\u0f55\u0f74\u0f62\u0f0b\u0f56\u0f74_\u0f54\u0f0b\u0f66\u0f44\u0f66\u0f0b_\u0f66\u0fa4\u0f7a\u0f53\u0f0b\u0f54\u0f0b".split("_"),
                    weekdaysMin: "\u0f49\u0f72\u0f0b\u0f58\u0f0b_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b_\u0f58\u0f72\u0f42\u0f0b\u0f51\u0f58\u0f62\u0f0b_\u0f63\u0fb7\u0f42\u0f0b\u0f54\u0f0b_\u0f55\u0f74\u0f62\u0f0b\u0f56\u0f74_\u0f54\u0f0b\u0f66\u0f44\u0f66\u0f0b_\u0f66\u0fa4\u0f7a\u0f53\u0f0b\u0f54\u0f0b".split("_"),
                    longDateFormat: {
                        LT: "A h:mm",
                        LTS: "A h:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, A h:mm",
                        LLLL: "dddd, D MMMM YYYY, A h:mm"
                    },
                    calendar: {
                        sameDay: "[\u0f51\u0f72\u0f0b\u0f62\u0f72\u0f44] LT",
                        nextDay: "[\u0f66\u0f44\u0f0b\u0f49\u0f72\u0f53] LT",
                        nextWeek: "[\u0f56\u0f51\u0f74\u0f53\u0f0b\u0f55\u0fb2\u0f42\u0f0b\u0f62\u0f97\u0f7a\u0f66\u0f0b\u0f58], LT",
                        lastDay: "[\u0f41\u0f0b\u0f66\u0f44] LT",
                        lastWeek: "[\u0f56\u0f51\u0f74\u0f53\u0f0b\u0f55\u0fb2\u0f42\u0f0b\u0f58\u0f50\u0f60\u0f0b\u0f58] dddd, LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s \u0f63\u0f0b",
                        past: "%s \u0f66\u0f94\u0f53\u0f0b\u0f63",
                        s: "\u0f63\u0f58\u0f0b\u0f66\u0f44",
                        ss: "%d \u0f66\u0f90\u0f62\u0f0b\u0f46\u0f0d",
                        m: "\u0f66\u0f90\u0f62\u0f0b\u0f58\u0f0b\u0f42\u0f45\u0f72\u0f42",
                        mm: "%d \u0f66\u0f90\u0f62\u0f0b\u0f58",
                        h: "\u0f46\u0f74\u0f0b\u0f5a\u0f7c\u0f51\u0f0b\u0f42\u0f45\u0f72\u0f42",
                        hh: "%d \u0f46\u0f74\u0f0b\u0f5a\u0f7c\u0f51",
                        d: "\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f45\u0f72\u0f42",
                        dd: "%d \u0f49\u0f72\u0f53\u0f0b",
                        M: "\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f45\u0f72\u0f42",
                        MM: "%d \u0f5f\u0fb3\u0f0b\u0f56",
                        y: "\u0f63\u0f7c\u0f0b\u0f42\u0f45\u0f72\u0f42",
                        yy: "%d \u0f63\u0f7c"
                    },
                    preparse: function(e) {
                        return e.replace(/[\u0f21\u0f22\u0f23\u0f24\u0f25\u0f26\u0f27\u0f28\u0f29\u0f20]/g, function(e) {
                            return a[e]
                        })
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, function(e) {
                            return t[e]
                        })
                    },
                    meridiemParse: /\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c|\u0f5e\u0f7c\u0f42\u0f66\u0f0b\u0f40\u0f66|\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f74\u0f44|\u0f51\u0f42\u0f7c\u0f44\u0f0b\u0f51\u0f42|\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c/,
                    meridiemHour: function(e, t) {
                        return 12 === e && (e = 0), "\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c" === t && e >= 4 || "\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f74\u0f44" === t && e < 5 || "\u0f51\u0f42\u0f7c\u0f44\u0f0b\u0f51\u0f42" === t ? e + 12 : e
                    },
                    meridiem: function(e, t, a) {
                        return e < 4 ? "\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c" : e < 10 ? "\u0f5e\u0f7c\u0f42\u0f66\u0f0b\u0f40\u0f66" : e < 17 ? "\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f74\u0f44" : e < 20 ? "\u0f51\u0f42\u0f7c\u0f44\u0f0b\u0f51\u0f42" : "\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c"
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                })
            }(a("wd/R"))
        },
        "0tRk": function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("pt-br", {
                    months: "janeiro_fevereiro_mar\xe7o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
                    monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
                    weekdays: "Domingo_Segunda-feira_Ter\xe7a-feira_Quarta-feira_Quinta-feira_Sexta-feira_S\xe1bado".split("_"),
                    weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_S\xe1b".split("_"),
                    weekdaysMin: "Do_2\xaa_3\xaa_4\xaa_5\xaa_6\xaa_S\xe1".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D [de] MMMM [de] YYYY",
                        LLL: "D [de] MMMM [de] YYYY [\xe0s] HH:mm",
                        LLLL: "dddd, D [de] MMMM [de] YYYY [\xe0s] HH:mm"
                    },
                    calendar: {
                        sameDay: "[Hoje \xe0s] LT",
                        nextDay: "[Amanh\xe3 \xe0s] LT",
                        nextWeek: "dddd [\xe0s] LT",
                        lastDay: "[Ontem \xe0s] LT",
                        lastWeek: function() {
                            return 0 === this.day() || 6 === this.day() ? "[\xdaltimo] dddd [\xe0s] LT" : "[\xdaltima] dddd [\xe0s] LT"
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "em %s",
                        past: "h\xe1 %s",
                        s: "poucos segundos",
                        ss: "%d segundos",
                        m: "um minuto",
                        mm: "%d minutos",
                        h: "uma hora",
                        hh: "%d horas",
                        d: "um dia",
                        dd: "%d dias",
                        M: "um m\xeas",
                        MM: "%d meses",
                        y: "um ano",
                        yy: "%d anos"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\xba/,
                    ordinal: "%d\xba"
                })
            }(a("wd/R"))
        },
        "1rYy": function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("hy-am", {
                    months: {
                        format: "\u0570\u0578\u0582\u0576\u057e\u0561\u0580\u056b_\u0583\u0565\u057f\u0580\u057e\u0561\u0580\u056b_\u0574\u0561\u0580\u057f\u056b_\u0561\u057a\u0580\u056b\u056c\u056b_\u0574\u0561\u0575\u056b\u057d\u056b_\u0570\u0578\u0582\u0576\u056b\u057d\u056b_\u0570\u0578\u0582\u056c\u056b\u057d\u056b_\u0585\u0563\u0578\u057d\u057f\u0578\u057d\u056b_\u057d\u0565\u057a\u057f\u0565\u0574\u0562\u0565\u0580\u056b_\u0570\u0578\u056f\u057f\u0565\u0574\u0562\u0565\u0580\u056b_\u0576\u0578\u0575\u0565\u0574\u0562\u0565\u0580\u056b_\u0564\u0565\u056f\u057f\u0565\u0574\u0562\u0565\u0580\u056b".split("_"),
                        standalone: "\u0570\u0578\u0582\u0576\u057e\u0561\u0580_\u0583\u0565\u057f\u0580\u057e\u0561\u0580_\u0574\u0561\u0580\u057f_\u0561\u057a\u0580\u056b\u056c_\u0574\u0561\u0575\u056b\u057d_\u0570\u0578\u0582\u0576\u056b\u057d_\u0570\u0578\u0582\u056c\u056b\u057d_\u0585\u0563\u0578\u057d\u057f\u0578\u057d_\u057d\u0565\u057a\u057f\u0565\u0574\u0562\u0565\u0580_\u0570\u0578\u056f\u057f\u0565\u0574\u0562\u0565\u0580_\u0576\u0578\u0575\u0565\u0574\u0562\u0565\u0580_\u0564\u0565\u056f\u057f\u0565\u0574\u0562\u0565\u0580".split("_")
                    },
                    monthsShort: "\u0570\u0576\u057e_\u0583\u057f\u0580_\u0574\u0580\u057f_\u0561\u057a\u0580_\u0574\u0575\u057d_\u0570\u0576\u057d_\u0570\u056c\u057d_\u0585\u0563\u057d_\u057d\u057a\u057f_\u0570\u056f\u057f_\u0576\u0574\u0562_\u0564\u056f\u057f".split("_"),
                    weekdays: "\u056f\u056b\u0580\u0561\u056f\u056b_\u0565\u0580\u056f\u0578\u0582\u0577\u0561\u0562\u0569\u056b_\u0565\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056b_\u0579\u0578\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056b_\u0570\u056b\u0576\u0563\u0577\u0561\u0562\u0569\u056b_\u0578\u0582\u0580\u0562\u0561\u0569_\u0577\u0561\u0562\u0561\u0569".split("_"),
                    weekdaysShort: "\u056f\u0580\u056f_\u0565\u0580\u056f_\u0565\u0580\u0584_\u0579\u0580\u0584_\u0570\u0576\u0563_\u0578\u0582\u0580\u0562_\u0577\u0562\u0569".split("_"),
                    weekdaysMin: "\u056f\u0580\u056f_\u0565\u0580\u056f_\u0565\u0580\u0584_\u0579\u0580\u0584_\u0570\u0576\u0563_\u0578\u0582\u0580\u0562_\u0577\u0562\u0569".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY \u0569.",
                        LLL: "D MMMM YYYY \u0569., HH:mm",
                        LLLL: "dddd, D MMMM YYYY \u0569., HH:mm"
                    },
                    calendar: {
                        sameDay: "[\u0561\u0575\u057d\u0585\u0580] LT",
                        nextDay: "[\u057e\u0561\u0572\u0568] LT",
                        lastDay: "[\u0565\u0580\u0565\u056f] LT",
                        nextWeek: function() {
                            return "dddd [\u0585\u0580\u0568 \u056a\u0561\u0574\u0568] LT"
                        },
                        lastWeek: function() {
                            return "[\u0561\u0576\u0581\u0561\u056e] dddd [\u0585\u0580\u0568 \u056a\u0561\u0574\u0568] LT"
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s \u0570\u0565\u057f\u0578",
                        past: "%s \u0561\u057c\u0561\u057b",
                        s: "\u0574\u056b \u0584\u0561\u0576\u056b \u057e\u0561\u0575\u0580\u056f\u0575\u0561\u0576",
                        ss: "%d \u057e\u0561\u0575\u0580\u056f\u0575\u0561\u0576",
                        m: "\u0580\u0578\u057a\u0565",
                        mm: "%d \u0580\u0578\u057a\u0565",
                        h: "\u056a\u0561\u0574",
                        hh: "%d \u056a\u0561\u0574",
                        d: "\u0585\u0580",
                        dd: "%d \u0585\u0580",
                        M: "\u0561\u0574\u056b\u057d",
                        MM: "%d \u0561\u0574\u056b\u057d",
                        y: "\u057f\u0561\u0580\u056b",
                        yy: "%d \u057f\u0561\u0580\u056b"
                    },
                    meridiemParse: /\u0563\u056b\u0577\u0565\u0580\u057e\u0561|\u0561\u057c\u0561\u057e\u0578\u057f\u057e\u0561|\u0581\u0565\u0580\u0565\u056f\u057e\u0561|\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576/,
                    isPM: function(e) {
                        return /^(\u0581\u0565\u0580\u0565\u056f\u057e\u0561|\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576)$/.test(e)
                    },
                    meridiem: function(e) {
                        return e < 4 ? "\u0563\u056b\u0577\u0565\u0580\u057e\u0561" : e < 12 ? "\u0561\u057c\u0561\u057e\u0578\u057f\u057e\u0561" : e < 17 ? "\u0581\u0565\u0580\u0565\u056f\u057e\u0561" : "\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(\u056b\u0576|\u0580\u0564)/,
                    ordinal: function(e, t) {
                        switch (t) {
                            case "DDD":
                            case "w":
                            case "W":
                            case "DDDo":
                                return 1 === e ? e + "-\u056b\u0576" : e + "-\u0580\u0564";
                            default:
                                return e
                        }
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(a("wd/R"))
        },
        "1xZ4": function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("ca", {
                    months: {
                        standalone: "gener_febrer_mar\xe7_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
                        format: "de gener_de febrer_de mar\xe7_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"),
                        isFormat: /D[oD]?(\s)+MMMM/
                    },
                    monthsShort: "gen._febr._mar\xe7_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
                    weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
                    weekdaysMin: "dg_dl_dt_dc_dj_dv_ds".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM [de] YYYY",
                        ll: "D MMM YYYY",
                        LLL: "D MMMM [de] YYYY [a les] H:mm",
                        lll: "D MMM YYYY, H:mm",
                        LLLL: "dddd D MMMM [de] YYYY [a les] H:mm",
                        llll: "ddd D MMM YYYY, H:mm"
                    },
                    calendar: {
                        sameDay: function() {
                            return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                        },
                        nextDay: function() {
                            return "[dem\xe0 a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                        },
                        nextWeek: function() {
                            return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                        },
                        lastDay: function() {
                            return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                        },
                        lastWeek: function() {
                            return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "d'aqu\xed %s",
                        past: "fa %s",
                        s: "uns segons",
                        ss: "%d segons",
                        m: "un minut",
                        mm: "%d minuts",
                        h: "una hora",
                        hh: "%d hores",
                        d: "un dia",
                        dd: "%d dies",
                        M: "un mes",
                        MM: "%d mesos",
                        y: "un any",
                        yy: "%d anys"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|\xe8|a)/,
                    ordinal: function(e, t) {
                        var a = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "\xe8";
                        return "w" !== t && "W" !== t || (a = "a"), e + a
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(a("wd/R"))
        },
        "2UWG": function(e, t, a) {
            "use strict";
            var n = a("CDJp"),
                i = a("K2E3");

            function r(e) {
                return void 0 !== e._view.width
            }

            function s(e) {
                var t, a, n, i, s = e._view;
                if (r(e)) {
                    var o = s.width / 2;
                    t = s.x - o, a = s.x + o, n = Math.min(s.y, s.base), i = Math.max(s.y, s.base)
                } else {
                    var d = s.height / 2;
                    t = Math.min(s.x, s.base), a = Math.max(s.x, s.base), n = s.y - d, i = s.y + d
                }
                return {
                    left: t,
                    top: n,
                    right: a,
                    bottom: i
                }
            }
            n._set("global", {
                elements: {
                    rectangle: {
                        backgroundColor: n.global.defaultColor,
                        borderColor: n.global.defaultColor,
                        borderSkipped: "bottom",
                        borderWidth: 0
                    }
                }
            }), e.exports = i.extend({
                draw: function() {
                    var e, t, a, n, i, r, s, o = this._chart.ctx,
                        d = this._view,
                        l = d.borderWidth;
                    if (d.horizontal ? (a = d.y - d.height / 2, n = d.y + d.height / 2, i = (t = d.x) > (e = d.base) ? 1 : -1, r = 1, s = d.borderSkipped || "left") : (e = d.x - d.width / 2, t = d.x + d.width / 2, i = 1, r = (n = d.base) > (a = d.y) ? 1 : -1, s = d.borderSkipped || "bottom"), l) {
                        var u = Math.min(Math.abs(e - t), Math.abs(a - n)),
                            _ = (l = l > u ? u : l) / 2,
                            m = e + ("left" !== s ? _ * i : 0),
                            h = t + ("right" !== s ? -_ * i : 0),
                            c = a + ("top" !== s ? _ * r : 0),
                            f = n + ("bottom" !== s ? -_ * r : 0);
                        m !== h && (a = c, n = f), c !== f && (e = m, t = h)
                    }
                    o.beginPath(), o.fillStyle = d.backgroundColor, o.strokeStyle = d.borderColor, o.lineWidth = l;
                    var p = [
                            [e, n],
                            [e, a],
                            [t, a],
                            [t, n]
                        ],
                        M = ["bottom", "left", "top", "right"].indexOf(s, 0);

                    function y(e) {
                        return p[(M + e) % 4]
                    } - 1 === M && (M = 0);
                    var g = y(0);
                    o.moveTo(g[0], g[1]);
                    for (var L = 1; L < 4; L++) g = y(L), o.lineTo(g[0], g[1]);
                    o.fill(), l && o.stroke()
                },
                height: function() {
                    var e = this._view;
                    return e.base - e.y
                },
                inRange: function(e, t) {
                    var a = !1;
                    if (this._view) {
                        var n = s(this);
                        a = e >= n.left && e <= n.right && t >= n.top && t <= n.bottom
                    }
                    return a
                },
                inLabelRange: function(e, t) {
                    if (!this._view) return !1;
                    var a = s(this);
                    return r(this) ? e >= a.left && e <= a.right : t >= a.top && t <= a.bottom
                },
                inXRange: function(e) {
                    var t = s(this);
                    return e >= t.left && e <= t.right
                },
                inYRange: function(e) {
                    var t = s(this);
                    return e >= t.top && e <= t.bottom
                },
                getCenterPoint: function() {
                    var e, t, a = this._view;
                    return r(this) ? (e = a.x, t = (a.y + a.base) / 2) : (e = (a.x + a.base) / 2, t = a.y), {
                        x: e,
                        y: t
                    }
                },
                getArea: function() {
                    var e = this._view;
                    return e.width * Math.abs(e.y - e.base)
                },
                tooltipPosition: function() {
                    var e = this._view;
                    return {
                        x: e.x,
                        y: e.y
                    }
                }
            })
        },
        "2fjn": function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("fr-ca", {
                    months: "janvier_f\xe9vrier_mars_avril_mai_juin_juillet_ao\xfbt_septembre_octobre_novembre_d\xe9cembre".split("_"),
                    monthsShort: "janv._f\xe9vr._mars_avr._mai_juin_juil._ao\xfbt_sept._oct._nov._d\xe9c.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
                    weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
                    weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "YYYY-MM-DD",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[Aujourd\u2019hui \xe0] LT",
                        nextDay: "[Demain \xe0] LT",
                        nextWeek: "dddd [\xe0] LT",
                        lastDay: "[Hier \xe0] LT",
                        lastWeek: "dddd [dernier \xe0] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "dans %s",
                        past: "il y a %s",
                        s: "quelques secondes",
                        ss: "%d secondes",
                        m: "une minute",
                        mm: "%d minutes",
                        h: "une heure",
                        hh: "%d heures",
                        d: "un jour",
                        dd: "%d jours",
                        M: "un mois",
                        MM: "%d mois",
                        y: "un an",
                        yy: "%d ans"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
                    ordinal: function(e, t) {
                        switch (t) {
                            default:
                                case "M":
                                case "Q":
                                case "D":
                                case "DDD":
                                case "d":
                                return e + (1 === e ? "er" : "e");
                            case "w":
                                    case "W":
                                    return e + (1 === e ? "re" : "e")
                        }
                    }
                })
            }(a("wd/R"))
        },
        "2ykv": function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
                    a = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
                    n = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
                    i = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
                e.defineLocale("nl-be", {
                    months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
                    monthsShort: function(e, n) {
                        return e ? /-MMM-/.test(n) ? a[e.month()] : t[e.month()] : t
                    },
                    monthsRegex: i,
                    monthsShortRegex: i,
                    monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
                    monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
                    monthsParse: n,
                    longMonthsParse: n,
                    shortMonthsParse: n,
                    weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
                    weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
                    weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[vandaag om] LT",
                        nextDay: "[morgen om] LT",
                        nextWeek: "dddd [om] LT",
                        lastDay: "[gisteren om] LT",
                        lastWeek: "[afgelopen] dddd [om] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "over %s",
                        past: "%s geleden",
                        s: "een paar seconden",
                        ss: "%d seconden",
                        m: "\xe9\xe9n minuut",
                        mm: "%d minuten",
                        h: "\xe9\xe9n uur",
                        hh: "%d uur",
                        d: "\xe9\xe9n dag",
                        dd: "%d dagen",
                        M: "\xe9\xe9n maand",
                        MM: "%d maanden",
                        y: "\xe9\xe9n jaar",
                        yy: "%d jaar"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
                    ordinal: function(e) {
                        return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(a("wd/R"))
        },
        "35yf": function(e, t, a) {
            "use strict";
            a("CDJp")._set("scatter", {
                hover: {
                    mode: "single"
                },
                scales: {
                    xAxes: [{
                        id: "x-axis-1",
                        type: "linear",
                        position: "bottom"
                    }],
                    yAxes: [{
                        id: "y-axis-1",
                        type: "linear",
                        position: "left"
                    }]
                },
                showLines: !1,
                tooltips: {
                    callbacks: {
                        title: function() {
                            return ""
                        },
                        label: function(e) {
                            return "(" + e.xLabel + ", " + e.yLabel + ")"
                        }
                    }
                }
            }), e.exports = function(e) {
                e.controllers.scatter = e.controllers.line
            }
        },
        "3E1r": function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = {
                        1: "\u0967",
                        2: "\u0968",
                        3: "\u0969",
                        4: "\u096a",
                        5: "\u096b",
                        6: "\u096c",
                        7: "\u096d",
                        8: "\u096e",
                        9: "\u096f",
                        0: "\u0966"
                    },
                    a = {
                        "\u0967": "1",
                        "\u0968": "2",
                        "\u0969": "3",
                        "\u096a": "4",
                        "\u096b": "5",
                        "\u096c": "6",
                        "\u096d": "7",
                        "\u096e": "8",
                        "\u096f": "9",
                        "\u0966": "0"
                    };
                e.defineLocale("hi", {
                    months: "\u091c\u0928\u0935\u0930\u0940_\u092b\u093c\u0930\u0935\u0930\u0940_\u092e\u093e\u0930\u094d\u091a_\u0905\u092a\u094d\u0930\u0948\u0932_\u092e\u0908_\u091c\u0942\u0928_\u091c\u0941\u0932\u093e\u0908_\u0905\u0917\u0938\u094d\u0924_\u0938\u093f\u0924\u092e\u094d\u092c\u0930_\u0905\u0915\u094d\u091f\u0942\u092c\u0930_\u0928\u0935\u092e\u094d\u092c\u0930_\u0926\u093f\u0938\u092e\u094d\u092c\u0930".split("_"),
                    monthsShort: "\u091c\u0928._\u092b\u093c\u0930._\u092e\u093e\u0930\u094d\u091a_\u0905\u092a\u094d\u0930\u0948._\u092e\u0908_\u091c\u0942\u0928_\u091c\u0941\u0932._\u0905\u0917._\u0938\u093f\u0924._\u0905\u0915\u094d\u091f\u0942._\u0928\u0935._\u0926\u093f\u0938.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "\u0930\u0935\u093f\u0935\u093e\u0930_\u0938\u094b\u092e\u0935\u093e\u0930_\u092e\u0902\u0917\u0932\u0935\u093e\u0930_\u092c\u0941\u0927\u0935\u093e\u0930_\u0917\u0941\u0930\u0942\u0935\u093e\u0930_\u0936\u0941\u0915\u094d\u0930\u0935\u093e\u0930_\u0936\u0928\u093f\u0935\u093e\u0930".split("_"),
                    weekdaysShort: "\u0930\u0935\u093f_\u0938\u094b\u092e_\u092e\u0902\u0917\u0932_\u092c\u0941\u0927_\u0917\u0941\u0930\u0942_\u0936\u0941\u0915\u094d\u0930_\u0936\u0928\u093f".split("_"),
                    weekdaysMin: "\u0930_\u0938\u094b_\u092e\u0902_\u092c\u0941_\u0917\u0941_\u0936\u0941_\u0936".split("_"),
                    longDateFormat: {
                        LT: "A h:mm \u092c\u091c\u0947",
                        LTS: "A h:mm:ss \u092c\u091c\u0947",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, A h:mm \u092c\u091c\u0947",
                        LLLL: "dddd, D MMMM YYYY, A h:mm \u092c\u091c\u0947"
                    },
                    calendar: {
                        sameDay: "[\u0906\u091c] LT",
                        nextDay: "[\u0915\u0932] LT",
                        nextWeek: "dddd, LT",
                        lastDay: "[\u0915\u0932] LT",
                        lastWeek: "[\u092a\u093f\u091b\u0932\u0947] dddd, LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s \u092e\u0947\u0902",
                        past: "%s \u092a\u0939\u0932\u0947",
                        s: "\u0915\u0941\u091b \u0939\u0940 \u0915\u094d\u0937\u0923",
                        ss: "%d \u0938\u0947\u0915\u0902\u0921",
                        m: "\u090f\u0915 \u092e\u093f\u0928\u091f",
                        mm: "%d \u092e\u093f\u0928\u091f",
                        h: "\u090f\u0915 \u0918\u0902\u091f\u093e",
                        hh: "%d \u0918\u0902\u091f\u0947",
                        d: "\u090f\u0915 \u0926\u093f\u0928",
                        dd: "%d \u0926\u093f\u0928",
                        M: "\u090f\u0915 \u092e\u0939\u0940\u0928\u0947",
                        MM: "%d \u092e\u0939\u0940\u0928\u0947",
                        y: "\u090f\u0915 \u0935\u0930\u094d\u0937",
                        yy: "%d \u0935\u0930\u094d\u0937"
                    },
                    preparse: function(e) {
                        return e.replace(/[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g, function(e) {
                            return a[e]
                        })
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, function(e) {
                            return t[e]
                        })
                    },
                    meridiemParse: /\u0930\u093e\u0924|\u0938\u0941\u092c\u0939|\u0926\u094b\u092a\u0939\u0930|\u0936\u093e\u092e/,
                    meridiemHour: function(e, t) {
                        return 12 === e && (e = 0), "\u0930\u093e\u0924" === t ? e < 4 ? e : e + 12 : "\u0938\u0941\u092c\u0939" === t ? e : "\u0926\u094b\u092a\u0939\u0930" === t ? e >= 10 ? e : e + 12 : "\u0936\u093e\u092e" === t ? e + 12 : void 0
                    },
                    meridiem: function(e, t, a) {
                        return e < 4 ? "\u0930\u093e\u0924" : e < 10 ? "\u0938\u0941\u092c\u0939" : e < 17 ? "\u0926\u094b\u092a\u0939\u0930" : e < 20 ? "\u0936\u093e\u092e" : "\u0930\u093e\u0924"
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                })
            }(a("wd/R"))
        },
        "4MV3": function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = {
                        1: "\u0ae7",
                        2: "\u0ae8",
                        3: "\u0ae9",
                        4: "\u0aea",
                        5: "\u0aeb",
                        6: "\u0aec",
                        7: "\u0aed",
                        8: "\u0aee",
                        9: "\u0aef",
                        0: "\u0ae6"
                    },
                    a = {
                        "\u0ae7": "1",
                        "\u0ae8": "2",
                        "\u0ae9": "3",
                        "\u0aea": "4",
                        "\u0aeb": "5",
                        "\u0aec": "6",
                        "\u0aed": "7",
                        "\u0aee": "8",
                        "\u0aef": "9",
                        "\u0ae6": "0"
                    };
                e.defineLocale("gu", {
                    months: "\u0a9c\u0abe\u0aa8\u0acd\u0aaf\u0ac1\u0a86\u0ab0\u0ac0_\u0aab\u0ac7\u0aac\u0acd\u0ab0\u0ac1\u0a86\u0ab0\u0ac0_\u0aae\u0abe\u0ab0\u0acd\u0a9a_\u0a8f\u0aaa\u0acd\u0ab0\u0abf\u0ab2_\u0aae\u0ac7_\u0a9c\u0ac2\u0aa8_\u0a9c\u0ac1\u0ab2\u0abe\u0a88_\u0a91\u0a97\u0ab8\u0acd\u0a9f_\u0ab8\u0aaa\u0acd\u0a9f\u0ac7\u0aae\u0acd\u0aac\u0ab0_\u0a91\u0a95\u0acd\u0a9f\u0acd\u0aac\u0ab0_\u0aa8\u0ab5\u0ac7\u0aae\u0acd\u0aac\u0ab0_\u0aa1\u0abf\u0ab8\u0ac7\u0aae\u0acd\u0aac\u0ab0".split("_"),
                    monthsShort: "\u0a9c\u0abe\u0aa8\u0acd\u0aaf\u0ac1._\u0aab\u0ac7\u0aac\u0acd\u0ab0\u0ac1._\u0aae\u0abe\u0ab0\u0acd\u0a9a_\u0a8f\u0aaa\u0acd\u0ab0\u0abf._\u0aae\u0ac7_\u0a9c\u0ac2\u0aa8_\u0a9c\u0ac1\u0ab2\u0abe._\u0a91\u0a97._\u0ab8\u0aaa\u0acd\u0a9f\u0ac7._\u0a91\u0a95\u0acd\u0a9f\u0acd._\u0aa8\u0ab5\u0ac7._\u0aa1\u0abf\u0ab8\u0ac7.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "\u0ab0\u0ab5\u0abf\u0ab5\u0abe\u0ab0_\u0ab8\u0acb\u0aae\u0ab5\u0abe\u0ab0_\u0aae\u0a82\u0a97\u0ab3\u0ab5\u0abe\u0ab0_\u0aac\u0ac1\u0aa7\u0acd\u0ab5\u0abe\u0ab0_\u0a97\u0ac1\u0ab0\u0ac1\u0ab5\u0abe\u0ab0_\u0ab6\u0ac1\u0a95\u0acd\u0ab0\u0ab5\u0abe\u0ab0_\u0ab6\u0aa8\u0abf\u0ab5\u0abe\u0ab0".split("_"),
                    weekdaysShort: "\u0ab0\u0ab5\u0abf_\u0ab8\u0acb\u0aae_\u0aae\u0a82\u0a97\u0ab3_\u0aac\u0ac1\u0aa7\u0acd_\u0a97\u0ac1\u0ab0\u0ac1_\u0ab6\u0ac1\u0a95\u0acd\u0ab0_\u0ab6\u0aa8\u0abf".split("_"),
                    weekdaysMin: "\u0ab0_\u0ab8\u0acb_\u0aae\u0a82_\u0aac\u0ac1_\u0a97\u0ac1_\u0ab6\u0ac1_\u0ab6".split("_"),
                    longDateFormat: {
                        LT: "A h:mm \u0ab5\u0abe\u0a97\u0acd\u0aaf\u0ac7",
                        LTS: "A h:mm:ss \u0ab5\u0abe\u0a97\u0acd\u0aaf\u0ac7",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, A h:mm \u0ab5\u0abe\u0a97\u0acd\u0aaf\u0ac7",
                        LLLL: "dddd, D MMMM YYYY, A h:mm \u0ab5\u0abe\u0a97\u0acd\u0aaf\u0ac7"
                    },
                    calendar: {
                        sameDay: "[\u0a86\u0a9c] LT",
                        nextDay: "[\u0a95\u0abe\u0ab2\u0ac7] LT",
                        nextWeek: "dddd, LT",
                        lastDay: "[\u0a97\u0a87\u0a95\u0abe\u0ab2\u0ac7] LT",
                        lastWeek: "[\u0aaa\u0abe\u0a9b\u0ab2\u0abe] dddd, LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s \u0aae\u0abe",
                        past: "%s \u0aaa\u0ac7\u0ab9\u0ab2\u0abe",
                        s: "\u0a85\u0aae\u0ac1\u0a95 \u0aaa\u0ab3\u0acb",
                        ss: "%d \u0ab8\u0ac7\u0a95\u0a82\u0aa1",
                        m: "\u0a8f\u0a95 \u0aae\u0abf\u0aa8\u0abf\u0a9f",
                        mm: "%d \u0aae\u0abf\u0aa8\u0abf\u0a9f",
                        h: "\u0a8f\u0a95 \u0a95\u0ab2\u0abe\u0a95",
                        hh: "%d \u0a95\u0ab2\u0abe\u0a95",
                        d: "\u0a8f\u0a95 \u0aa6\u0abf\u0ab5\u0ab8",
                        dd: "%d \u0aa6\u0abf\u0ab5\u0ab8",
                        M: "\u0a8f\u0a95 \u0aae\u0ab9\u0abf\u0aa8\u0acb",
                        MM: "%d \u0aae\u0ab9\u0abf\u0aa8\u0acb",
                        y: "\u0a8f\u0a95 \u0ab5\u0ab0\u0acd\u0ab7",
                        yy: "%d \u0ab5\u0ab0\u0acd\u0ab7"
                    },
                    preparse: function(e) {
                        return e.replace(/[\u0ae7\u0ae8\u0ae9\u0aea\u0aeb\u0aec\u0aed\u0aee\u0aef\u0ae6]/g, function(e) {
                            return a[e]
                        })
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, function(e) {
                            return t[e]
                        })
                    },
                    meridiemParse: /\u0ab0\u0abe\u0aa4|\u0aac\u0aaa\u0acb\u0ab0|\u0ab8\u0ab5\u0abe\u0ab0|\u0ab8\u0abe\u0a82\u0a9c/,
                    meridiemHour: function(e, t) {
                        return 12 === e && (e = 0), "\u0ab0\u0abe\u0aa4" === t ? e < 4 ? e : e + 12 : "\u0ab8\u0ab5\u0abe\u0ab0" === t ? e : "\u0aac\u0aaa\u0acb\u0ab0" === t ? e >= 10 ? e : e + 12 : "\u0ab8\u0abe\u0a82\u0a9c" === t ? e + 12 : void 0
                    },
                    meridiem: function(e, t, a) {
                        return e < 4 ? "\u0ab0\u0abe\u0aa4" : e < 10 ? "\u0ab8\u0ab5\u0abe\u0ab0" : e < 17 ? "\u0aac\u0aaa\u0acb\u0ab0" : e < 20 ? "\u0ab8\u0abe\u0a82\u0a9c" : "\u0ab0\u0abe\u0aa4"
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                })
            }(a("wd/R"))
        },
        "4dOw": function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("en-ie", {
                    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                    monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                    weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                    weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD-MM-YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[Today at] LT",
                        nextDay: "[Tomorrow at] LT",
                        nextWeek: "dddd [at] LT",
                        lastDay: "[Yesterday at] LT",
                        lastWeek: "[Last] dddd [at] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "in %s",
                        past: "%s ago",
                        s: "a few seconds",
                        ss: "%d seconds",
                        m: "a minute",
                        mm: "%d minutes",
                        h: "an hour",
                        hh: "%d hours",
                        d: "a day",
                        dd: "%d days",
                        M: "a month",
                        MM: "%d months",
                        y: "a year",
                        yy: "%d years"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                    ordinal: function(e) {
                        var t = e % 10;
                        return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(a("wd/R"))
        },
        "5ZZ7": function(e, t, a) {
            "use strict";
            var n = a("CDJp"),
                i = a("vvH+"),
                r = a("RDha");
            n._set("polarArea", {
                scale: {
                    type: "radialLinear",
                    angleLines: {
                        display: !1
                    },
                    gridLines: {
                        circular: !0
                    },
                    pointLabels: {
                        display: !1
                    },
                    ticks: {
                        beginAtZero: !0
                    }
                },
                animation: {
                    animateRotate: !0,
                    animateScale: !0
                },
                startAngle: -.5 * Math.PI,
                legendCallback: function(e) {
                    var t = [];
                    t.push('<ul class="' + e.id + '-legend">');
                    var a = e.data,
                        n = a.datasets,
                        i = a.labels;
                    if (n.length)
                        for (var r = 0; r < n[0].data.length; ++r) t.push('<li><span style="background-color:' + n[0].backgroundColor[r] + '"></span>'), i[r] && t.push(i[r]), t.push("</li>");
                    return t.push("</ul>"), t.join("")
                },
                legend: {
                    labels: {
                        generateLabels: function(e) {
                            var t = e.data;
                            return t.labels.length && t.datasets.length ? t.labels.map(function(a, n) {
                                var i = e.getDatasetMeta(0),
                                    s = t.datasets[0],
                                    o = i.data[n].custom || {},
                                    d = r.valueAtIndexOrDefault,
                                    l = e.options.elements.arc;
                                return {
                                    text: a,
                                    fillStyle: o.backgroundColor ? o.backgroundColor : d(s.backgroundColor, n, l.backgroundColor),
                                    strokeStyle: o.borderColor ? o.borderColor : d(s.borderColor, n, l.borderColor),
                                    lineWidth: o.borderWidth ? o.borderWidth : d(s.borderWidth, n, l.borderWidth),
                                    hidden: isNaN(s.data[n]) || i.data[n].hidden,
                                    index: n
                                }
                            }) : []
                        }
                    },
                    onClick: function(e, t) {
                        var a, n, i, r = t.index,
                            s = this.chart;
                        for (a = 0, n = (s.data.datasets || []).length; a < n; ++a)(i = s.getDatasetMeta(a)).data[r].hidden = !i.data[r].hidden;
                        s.update()
                    }
                },
                tooltips: {
                    callbacks: {
                        title: function() {
                            return ""
                        },
                        label: function(e, t) {
                            return t.labels[e.index] + ": " + e.yLabel
                        }
                    }
                }
            }), e.exports = function(e) {
                e.controllers.polarArea = e.DatasetController.extend({
                    dataElementType: i.Arc,
                    linkScales: r.noop,
                    update: function(e) {
                        var t = this,
                            a = t.chart,
                            n = a.chartArea,
                            i = t.getMeta(),
                            s = a.options,
                            o = s.elements.arc,
                            d = Math.min(n.right - n.left, n.bottom - n.top);
                        a.outerRadius = Math.max((d - o.borderWidth / 2) / 2, 0), a.innerRadius = Math.max(s.cutoutPercentage ? a.outerRadius / 100 * s.cutoutPercentage : 1, 0), a.radiusLength = (a.outerRadius - a.innerRadius) / a.getVisibleDatasetCount(), t.outerRadius = a.outerRadius - a.radiusLength * t.index, t.innerRadius = t.outerRadius - a.radiusLength, i.count = t.countVisibleElements(), r.each(i.data, function(a, n) {
                            t.updateElement(a, n, e)
                        })
                    },
                    updateElement: function(e, t, a) {
                        for (var n = this, i = n.chart, s = n.getDataset(), o = i.options, d = o.animation, l = i.scale, u = i.data.labels, _ = n.calculateCircumference(s.data[t]), m = l.xCenter, h = l.yCenter, c = 0, f = n.getMeta(), p = 0; p < t; ++p) isNaN(s.data[p]) || f.data[p].hidden || ++c;
                        var M = o.startAngle,
                            y = e.hidden ? 0 : l.getDistanceFromCenterForValue(s.data[t]),
                            g = M + _ * c,
                            L = g + (e.hidden ? 0 : _),
                            v = d.animateScale ? 0 : l.getDistanceFromCenterForValue(s.data[t]);
                        r.extend(e, {
                            _datasetIndex: n.index,
                            _index: t,
                            _scale: l,
                            _model: {
                                x: m,
                                y: h,
                                innerRadius: 0,
                                outerRadius: a ? v : y,
                                startAngle: a && d.animateRotate ? M : g,
                                endAngle: a && d.animateRotate ? M : L,
                                label: r.valueAtIndexOrDefault(u, t, u[t])
                            }
                        }), n.removeHoverStyle(e), e.pivot()
                    },
                    removeHoverStyle: function(t) {
                        e.DatasetController.prototype.removeHoverStyle.call(this, t, this.chart.options.elements.arc)
                    },
                    countVisibleElements: function() {
                        var e = this.getDataset(),
                            t = this.getMeta(),
                            a = 0;
                        return r.each(t.data, function(t, n) {
                            isNaN(e.data[n]) || t.hidden || a++
                        }), a
                    },
                    calculateCircumference: function(e) {
                        var t = this.getMeta().count;
                        return t > 0 && !isNaN(e) ? 2 * Math.PI / t : 0
                    }
                })
            }
        },
        "6+QB": function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("ms", {
                    months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
                    monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
                    weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
                    weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
                    weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
                    longDateFormat: {
                        LT: "HH.mm",
                        LTS: "HH.mm.ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY [pukul] HH.mm",
                        LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
                    },
                    meridiemParse: /pagi|tengahari|petang|malam/,
                    meridiemHour: function(e, t) {
                        return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
                    },
                    meridiem: function(e, t, a) {
                        return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
                    },
                    calendar: {
                        sameDay: "[Hari ini pukul] LT",
                        nextDay: "[Esok pukul] LT",
                        nextWeek: "dddd [pukul] LT",
                        lastDay: "[Kelmarin pukul] LT",
                        lastWeek: "dddd [lepas pukul] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "dalam %s",
                        past: "%s yang lepas",
                        s: "beberapa saat",
                        ss: "%d saat",
                        m: "seminit",
                        mm: "%d minit",
                        h: "sejam",
                        hh: "%d jam",
                        d: "sehari",
                        dd: "%d hari",
                        M: "sebulan",
                        MM: "%d bulan",
                        y: "setahun",
                        yy: "%d tahun"
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(a("wd/R"))
        },
        "6B0Y": function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = {
                        1: "\u17e1",
                        2: "\u17e2",
                        3: "\u17e3",
                        4: "\u17e4",
                        5: "\u17e5",
                        6: "\u17e6",
                        7: "\u17e7",
                        8: "\u17e8",
                        9: "\u17e9",
                        0: "\u17e0"
                    },
                    a = {
                        "\u17e1": "1",
                        "\u17e2": "2",
                        "\u17e3": "3",
                        "\u17e4": "4",
                        "\u17e5": "5",
                        "\u17e6": "6",
                        "\u17e7": "7",
                        "\u17e8": "8",
                        "\u17e9": "9",
                        "\u17e0": "0"
                    };
                e.defineLocale("km", {
                    months: "\u1798\u1780\u179a\u17b6_\u1780\u17bb\u1798\u17d2\u1797\u17c8_\u1798\u17b8\u1793\u17b6_\u1798\u17c1\u179f\u17b6_\u17a7\u179f\u1797\u17b6_\u1798\u17b7\u1790\u17bb\u1793\u17b6_\u1780\u1780\u17d2\u1780\u178a\u17b6_\u179f\u17b8\u17a0\u17b6_\u1780\u1789\u17d2\u1789\u17b6_\u178f\u17bb\u179b\u17b6_\u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6_\u1792\u17d2\u1793\u17bc".split("_"),
                    monthsShort: "\u1798\u1780\u179a\u17b6_\u1780\u17bb\u1798\u17d2\u1797\u17c8_\u1798\u17b8\u1793\u17b6_\u1798\u17c1\u179f\u17b6_\u17a7\u179f\u1797\u17b6_\u1798\u17b7\u1790\u17bb\u1793\u17b6_\u1780\u1780\u17d2\u1780\u178a\u17b6_\u179f\u17b8\u17a0\u17b6_\u1780\u1789\u17d2\u1789\u17b6_\u178f\u17bb\u179b\u17b6_\u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6_\u1792\u17d2\u1793\u17bc".split("_"),
                    weekdays: "\u17a2\u17b6\u1791\u17b7\u178f\u17d2\u1799_\u1785\u17d0\u1793\u17d2\u1791_\u17a2\u1784\u17d2\u1782\u17b6\u179a_\u1796\u17bb\u1792_\u1796\u17d2\u179a\u17a0\u179f\u17d2\u1794\u178f\u17b7\u17cd_\u179f\u17bb\u1780\u17d2\u179a_\u179f\u17c5\u179a\u17cd".split("_"),
                    weekdaysShort: "\u17a2\u17b6_\u1785_\u17a2_\u1796_\u1796\u17d2\u179a_\u179f\u17bb_\u179f".split("_"),
                    weekdaysMin: "\u17a2\u17b6_\u1785_\u17a2_\u1796_\u1796\u17d2\u179a_\u179f\u17bb_\u179f".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    meridiemParse: /\u1796\u17d2\u179a\u17b9\u1780|\u179b\u17d2\u1784\u17b6\u1785/,
                    isPM: function(e) {
                        return "\u179b\u17d2\u1784\u17b6\u1785" === e
                    },
                    meridiem: function(e, t, a) {
                        return e < 12 ? "\u1796\u17d2\u179a\u17b9\u1780" : "\u179b\u17d2\u1784\u17b6\u1785"
                    },
                    calendar: {
                        sameDay: "[\u1790\u17d2\u1784\u17c3\u1793\u17c1\u17c7 \u1798\u17c9\u17c4\u1784] LT",
                        nextDay: "[\u179f\u17d2\u17a2\u17c2\u1780 \u1798\u17c9\u17c4\u1784] LT",
                        nextWeek: "dddd [\u1798\u17c9\u17c4\u1784] LT",
                        lastDay: "[\u1798\u17d2\u179f\u17b7\u179b\u1798\u17b7\u1789 \u1798\u17c9\u17c4\u1784] LT",
                        lastWeek: "dddd [\u179f\u1794\u17d2\u178f\u17b6\u17a0\u17cd\u1798\u17bb\u1793] [\u1798\u17c9\u17c4\u1784] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s\u1791\u17c0\u178f",
                        past: "%s\u1798\u17bb\u1793",
                        s: "\u1794\u17c9\u17bb\u1793\u17d2\u1798\u17b6\u1793\u179c\u17b7\u1793\u17b6\u1791\u17b8",
                        ss: "%d \u179c\u17b7\u1793\u17b6\u1791\u17b8",
                        m: "\u1798\u17bd\u1799\u1793\u17b6\u1791\u17b8",
                        mm: "%d \u1793\u17b6\u1791\u17b8",
                        h: "\u1798\u17bd\u1799\u1798\u17c9\u17c4\u1784",
                        hh: "%d \u1798\u17c9\u17c4\u1784",
                        d: "\u1798\u17bd\u1799\u1790\u17d2\u1784\u17c3",
                        dd: "%d \u1790\u17d2\u1784\u17c3",
                        M: "\u1798\u17bd\u1799\u1781\u17c2",
                        MM: "%d \u1781\u17c2",
                        y: "\u1798\u17bd\u1799\u1786\u17d2\u1793\u17b6\u17c6",
                        yy: "%d \u1786\u17d2\u1793\u17b6\u17c6"
                    },
                    dayOfMonthOrdinalParse: /\u1791\u17b8\d{1,2}/,
                    ordinal: "\u1791\u17b8%d",
                    preparse: function(e) {
                        return e.replace(/[\u17e1\u17e2\u17e3\u17e4\u17e5\u17e6\u17e7\u17e8\u17e9\u17e0]/g, function(e) {
                            return a[e]
                        })
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, function(e) {
                            return t[e]
                        })
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(a("wd/R"))
        },
        "6rqY": function(e, t, a) {
            "use strict";
            var n = a("CDJp"),
                i = a("RDha"),
                r = a("mlr9"),
                s = a("fELs"),
                o = a("iM7B"),
                d = a("VgNv");
            e.exports = function(e) {
                function t(e) {
                    return "top" === e || "bottom" === e
                }
                e.types = {}, e.instances = {}, e.controllers = {}, i.extend(e.prototype, {
                    construct: function(t, a) {
                        var r = this;
                        a = function(e) {
                            var t = (e = e || {}).data = e.data || {};
                            return t.datasets = t.datasets || [], t.labels = t.labels || [], e.options = i.configMerge(n.global, n[e.type], e.options || {}), e
                        }(a);
                        var s = o.acquireContext(t, a),
                            d = s && s.canvas,
                            l = d && d.height,
                            u = d && d.width;
                        r.id = i.uid(), r.ctx = s, r.canvas = d, r.config = a, r.width = u, r.height = l, r.aspectRatio = l ? u / l : null, r.options = a.options, r._bufferedRender = !1, r.chart = r, r.controller = r, e.instances[r.id] = r, Object.defineProperty(r, "data", {
                            get: function() {
                                return r.config.data
                            },
                            set: function(e) {
                                r.config.data = e
                            }
                        }), s && d ? (r.initialize(), r.update()) : console.error("Failed to create chart: can't acquire context from the given item")
                    },
                    initialize: function() {
                        var e = this;
                        return d.notify(e, "beforeInit"), i.retinaScale(e, e.options.devicePixelRatio), e.bindEvents(), e.options.responsive && e.resize(!0), e.ensureScalesHaveIDs(), e.buildOrUpdateScales(), e.initToolTip(), d.notify(e, "afterInit"), e
                    },
                    clear: function() {
                        return i.canvas.clear(this), this
                    },
                    stop: function() {
                        return e.animationService.cancelAnimation(this), this
                    },
                    resize: function(e) {
                        var t = this,
                            a = t.options,
                            n = t.canvas,
                            r = a.maintainAspectRatio && t.aspectRatio || null,
                            s = Math.max(0, Math.floor(i.getMaximumWidth(n))),
                            o = Math.max(0, Math.floor(r ? s / r : i.getMaximumHeight(n)));
                        if ((t.width !== s || t.height !== o) && (n.width = t.width = s, n.height = t.height = o, n.style.width = s + "px", n.style.height = o + "px", i.retinaScale(t, a.devicePixelRatio), !e)) {
                            var l = {
                                width: s,
                                height: o
                            };
                            d.notify(t, "resize", [l]), t.options.onResize && t.options.onResize(t, l), t.stop(), t.update(t.options.responsiveAnimationDuration)
                        }
                    },
                    ensureScalesHaveIDs: function() {
                        var e = this.options,
                            t = e.scales || {},
                            a = e.scale;
                        i.each(t.xAxes, function(e, t) {
                            e.id = e.id || "x-axis-" + t
                        }), i.each(t.yAxes, function(e, t) {
                            e.id = e.id || "y-axis-" + t
                        }), a && (a.id = a.id || "scale")
                    },
                    buildOrUpdateScales: function() {
                        var a = this,
                            n = a.options,
                            r = a.scales || {},
                            s = [],
                            o = Object.keys(r).reduce(function(e, t) {
                                return e[t] = !1, e
                            }, {});
                        n.scales && (s = s.concat((n.scales.xAxes || []).map(function(e) {
                            return {
                                options: e,
                                dtype: "category",
                                dposition: "bottom"
                            }
                        }), (n.scales.yAxes || []).map(function(e) {
                            return {
                                options: e,
                                dtype: "linear",
                                dposition: "left"
                            }
                        }))), n.scale && s.push({
                            options: n.scale,
                            dtype: "radialLinear",
                            isDefault: !0,
                            dposition: "chartArea"
                        }), i.each(s, function(n) {
                            var s = n.options,
                                d = s.id,
                                l = i.valueOrDefault(s.type, n.dtype);
                            t(s.position) !== t(n.dposition) && (s.position = n.dposition), o[d] = !0;
                            var u = null;
                            if (d in r && r[d].type === l)(u = r[d]).options = s, u.ctx = a.ctx, u.chart = a;
                            else {
                                var _ = e.scaleService.getScaleConstructor(l);
                                if (!_) return;
                                u = new _({
                                    id: d,
                                    type: l,
                                    options: s,
                                    ctx: a.ctx,
                                    chart: a
                                }), r[u.id] = u
                            }
                            u.mergeTicksOptions(), n.isDefault && (a.scale = u)
                        }), i.each(o, function(e, t) {
                            e || delete r[t]
                        }), a.scales = r, e.scaleService.addScalesToLayout(this)
                    },
                    buildOrUpdateControllers: function() {
                        var t = this,
                            a = [],
                            n = [];
                        return i.each(t.data.datasets, function(i, r) {
                            var s = t.getDatasetMeta(r),
                                o = i.type || t.config.type;
                            if (s.type && s.type !== o && (t.destroyDatasetMeta(r), s = t.getDatasetMeta(r)), s.type = o, a.push(s.type), s.controller) s.controller.updateIndex(r), s.controller.linkScales();
                            else {
                                var d = e.controllers[s.type];
                                if (void 0 === d) throw new Error('"' + s.type + '" is not a chart type.');
                                s.controller = new d(t, r), n.push(s.controller)
                            }
                        }, t), n
                    },
                    resetElements: function() {
                        var e = this;
                        i.each(e.data.datasets, function(t, a) {
                            e.getDatasetMeta(a).controller.reset()
                        }, e)
                    },
                    reset: function() {
                        this.resetElements(), this.tooltip.initialize()
                    },
                    update: function(t) {
                        var a, n, r = this;
                        if (t && "object" == typeof t || (t = {
                                duration: t,
                                lazy: arguments[1]
                            }), n = (a = r).options, i.each(a.scales, function(e) {
                                s.removeBox(a, e)
                            }), n = i.configMerge(e.defaults.global, e.defaults[a.config.type], n), a.options = a.config.options = n, a.ensureScalesHaveIDs(), a.buildOrUpdateScales(), a.tooltip._options = n.tooltips, a.tooltip.initialize(), d._invalidate(r), !1 !== d.notify(r, "beforeUpdate")) {
                            r.tooltip._data = r.data;
                            var o = r.buildOrUpdateControllers();
                            i.each(r.data.datasets, function(e, t) {
                                r.getDatasetMeta(t).controller.buildOrUpdateElements()
                            }, r), r.updateLayout(), r.options.animation && r.options.animation.duration && i.each(o, function(e) {
                                e.reset()
                            }), r.updateDatasets(), r.tooltip.initialize(), r.lastActive = [], d.notify(r, "afterUpdate"), r._bufferedRender ? r._bufferedRequest = {
                                duration: t.duration,
                                easing: t.easing,
                                lazy: t.lazy
                            } : r.render(t)
                        }
                    },
                    updateLayout: function() {
                        !1 !== d.notify(this, "beforeLayout") && (s.update(this, this.width, this.height), d.notify(this, "afterScaleUpdate"), d.notify(this, "afterLayout"))
                    },
                    updateDatasets: function() {
                        if (!1 !== d.notify(this, "beforeDatasetsUpdate")) {
                            for (var e = 0, t = this.data.datasets.length; e < t; ++e) this.updateDataset(e);
                            d.notify(this, "afterDatasetsUpdate")
                        }
                    },
                    updateDataset: function(e) {
                        var t = this.getDatasetMeta(e),
                            a = {
                                meta: t,
                                index: e
                            };
                        !1 !== d.notify(this, "beforeDatasetUpdate", [a]) && (t.controller.update(), d.notify(this, "afterDatasetUpdate", [a]))
                    },
                    render: function(t) {
                        var a = this;
                        t && "object" == typeof t || (t = {
                            duration: t,
                            lazy: arguments[1]
                        });
                        var n = t.duration,
                            r = t.lazy;
                        if (!1 !== d.notify(a, "beforeRender")) {
                            var s = a.options.animation,
                                o = function(e) {
                                    d.notify(a, "afterRender"), i.callback(s && s.onComplete, [e], a)
                                };
                            if (s && (void 0 !== n && 0 !== n || void 0 === n && 0 !== s.duration)) {
                                var l = new e.Animation({
                                    numSteps: (n || s.duration) / 16.66,
                                    easing: t.easing || s.easing,
                                    render: function(e, t) {
                                        var a = t.currentStep,
                                            n = a / t.numSteps;
                                        e.draw((0, i.easing.effects[t.easing])(n), n, a)
                                    },
                                    onAnimationProgress: s.onProgress,
                                    onAnimationComplete: o
                                });
                                e.animationService.addAnimation(a, l, n, r)
                            } else a.draw(), o(new e.Animation({
                                numSteps: 0,
                                chart: a
                            }));
                            return a
                        }
                    },
                    draw: function(e) {
                        var t = this;
                        t.clear(), i.isNullOrUndef(e) && (e = 1), t.transition(e), !1 !== d.notify(t, "beforeDraw", [e]) && (i.each(t.boxes, function(e) {
                            e.draw(t.chartArea)
                        }, t), t.scale && t.scale.draw(), t.drawDatasets(e), t._drawTooltip(e), d.notify(t, "afterDraw", [e]))
                    },
                    transition: function(e) {
                        for (var t = 0, a = (this.data.datasets || []).length; t < a; ++t) this.isDatasetVisible(t) && this.getDatasetMeta(t).controller.transition(e);
                        this.tooltip.transition(e)
                    },
                    drawDatasets: function(e) {
                        var t = this;
                        if (!1 !== d.notify(t, "beforeDatasetsDraw", [e])) {
                            for (var a = (t.data.datasets || []).length - 1; a >= 0; --a) t.isDatasetVisible(a) && t.drawDataset(a, e);
                            d.notify(t, "afterDatasetsDraw", [e])
                        }
                    },
                    drawDataset: function(e, t) {
                        var a = this.getDatasetMeta(e),
                            n = {
                                meta: a,
                                index: e,
                                easingValue: t
                            };
                        !1 !== d.notify(this, "beforeDatasetDraw", [n]) && (a.controller.draw(t), d.notify(this, "afterDatasetDraw", [n]))
                    },
                    _drawTooltip: function(e) {
                        var t = this.tooltip,
                            a = {
                                tooltip: t,
                                easingValue: e
                            };
                        !1 !== d.notify(this, "beforeTooltipDraw", [a]) && (t.draw(), d.notify(this, "afterTooltipDraw", [a]))
                    },
                    getElementAtEvent: function(e) {
                        return r.modes.single(this, e)
                    },
                    getElementsAtEvent: function(e) {
                        return r.modes.label(this, e, {
                            intersect: !0
                        })
                    },
                    getElementsAtXAxis: function(e) {
                        return r.modes["x-axis"](this, e, {
                            intersect: !0
                        })
                    },
                    getElementsAtEventForMode: function(e, t, a) {
                        var n = r.modes[t];
                        return "function" == typeof n ? n(this, e, a) : []
                    },
                    getDatasetAtEvent: function(e) {
                        return r.modes.dataset(this, e, {
                            intersect: !0
                        })
                    },
                    getDatasetMeta: function(e) {
                        var t = this.data.datasets[e];
                        t._meta || (t._meta = {});
                        var a = t._meta[this.id];
                        return a || (a = t._meta[this.id] = {
                            type: null,
                            data: [],
                            dataset: null,
                            controller: null,
                            hidden: null,
                            xAxisID: null,
                            yAxisID: null
                        }), a
                    },
                    getVisibleDatasetCount: function() {
                        for (var e = 0, t = 0, a = this.data.datasets.length; t < a; ++t) this.isDatasetVisible(t) && e++;
                        return e
                    },
                    isDatasetVisible: function(e) {
                        var t = this.getDatasetMeta(e);
                        return "boolean" == typeof t.hidden ? !t.hidden : !this.data.datasets[e].hidden
                    },
                    generateLegend: function() {
                        return this.options.legendCallback(this)
                    },
                    destroyDatasetMeta: function(e) {
                        var t = this.id,
                            a = this.data.datasets[e],
                            n = a._meta && a._meta[t];
                        n && (n.controller.destroy(), delete a._meta[t])
                    },
                    destroy: function() {
                        var t, a, n = this,
                            r = n.canvas;
                        for (n.stop(), t = 0, a = n.data.datasets.length; t < a; ++t) n.destroyDatasetMeta(t);
                        r && (n.unbindEvents(), i.canvas.clear(n), o.releaseContext(n.ctx), n.canvas = null, n.ctx = null), d.notify(n, "destroy"), delete e.instances[n.id]
                    },
                    toBase64Image: function() {
                        return this.canvas.toDataURL.apply(this.canvas, arguments)
                    },
                    initToolTip: function() {
                        var t = this;
                        t.tooltip = new e.Tooltip({
                            _chart: t,
                            _chartInstance: t,
                            _data: t.data,
                            _options: t.options.tooltips
                        }, t)
                    },
                    bindEvents: function() {
                        var e = this,
                            t = e._listeners = {},
                            a = function() {
                                e.eventHandler.apply(e, arguments)
                            };
                        i.each(e.options.events, function(n) {
                            o.addEventListener(e, n, a), t[n] = a
                        }), e.options.responsive && (o.addEventListener(e, "resize", a = function() {
                            e.resize()
                        }), t.resize = a)
                    },
                    unbindEvents: function() {
                        var e = this,
                            t = e._listeners;
                        t && (delete e._listeners, i.each(t, function(t, a) {
                            o.removeEventListener(e, a, t)
                        }))
                    },
                    updateHoverStyle: function(e, t, a) {
                        var n, i, r, s = a ? "setHoverStyle" : "removeHoverStyle";
                        for (i = 0, r = e.length; i < r; ++i)(n = e[i]) && this.getDatasetMeta(n._datasetIndex).controller[s](n)
                    },
                    eventHandler: function(e) {
                        var t = this,
                            a = t.tooltip;
                        if (!1 !== d.notify(t, "beforeEvent", [e])) {
                            t._bufferedRender = !0, t._bufferedRequest = null;
                            var n = t.handleEvent(e);
                            a && (n = a._start ? a.handleEvent(e) : n | a.handleEvent(e)), d.notify(t, "afterEvent", [e]);
                            var i = t._bufferedRequest;
                            return i ? t.render(i) : n && !t.animating && (t.stop(), t.render(t.options.hover.animationDuration, !0)), t._bufferedRender = !1, t._bufferedRequest = null, t
                        }
                    },
                    handleEvent: function(e) {
                        var t, a = this,
                            n = a.options || {},
                            r = n.hover;
                        return a.lastActive = a.lastActive || [], a.active = "mouseout" === e.type ? [] : a.getElementsAtEventForMode(e, r.mode, r), i.callback(n.onHover || n.hover.onHover, [e.native, a.active], a), "mouseup" !== e.type && "click" !== e.type || n.onClick && n.onClick.call(a, e.native, a.active), a.lastActive.length && a.updateHoverStyle(a.lastActive, r.mode, !1), a.active.length && r.mode && a.updateHoverStyle(a.active, r.mode, !0), t = !i.arrayEquals(a.active, a.lastActive), a.lastActive = a.active, t
                    }
                }), e.Controller = e
            }
        },
        "6ww4": function(e, t, a) {
            var n = a("uxXc"),
                i = a("mgIt"),
                r = function(e) {
                    return e instanceof r ? e : this instanceof r ? (this.valid = !1, this.values = {
                        rgb: [0, 0, 0],
                        hsl: [0, 0, 0],
                        hsv: [0, 0, 0],
                        hwb: [0, 0, 0],
                        cmyk: [0, 0, 0, 0],
                        alpha: 1
                    }, void("string" == typeof e ? (t = i.getRgba(e)) ? this.setValues("rgb", t) : (t = i.getHsla(e)) ? this.setValues("hsl", t) : (t = i.getHwb(e)) && this.setValues("hwb", t) : "object" == typeof e && (void 0 !== (t = e).r || void 0 !== t.red ? this.setValues("rgb", t) : void 0 !== t.l || void 0 !== t.lightness ? this.setValues("hsl", t) : void 0 !== t.v || void 0 !== t.value ? this.setValues("hsv", t) : void 0 !== t.w || void 0 !== t.whiteness ? this.setValues("hwb", t) : void 0 === t.c && void 0 === t.cyan || this.setValues("cmyk", t)))) : new r(e);
                    var t
                };
            r.prototype = {
                isValid: function() {
                    return this.valid
                },
                rgb: function() {
                    return this.setSpace("rgb", arguments)
                },
                hsl: function() {
                    return this.setSpace("hsl", arguments)
                },
                hsv: function() {
                    return this.setSpace("hsv", arguments)
                },
                hwb: function() {
                    return this.setSpace("hwb", arguments)
                },
                cmyk: function() {
                    return this.setSpace("cmyk", arguments)
                },
                rgbArray: function() {
                    return this.values.rgb
                },
                hslArray: function() {
                    return this.values.hsl
                },
                hsvArray: function() {
                    return this.values.hsv
                },
                hwbArray: function() {
                    var e = this.values;
                    return 1 !== e.alpha ? e.hwb.concat([e.alpha]) : e.hwb
                },
                cmykArray: function() {
                    return this.values.cmyk
                },
                rgbaArray: function() {
                    var e = this.values;
                    return e.rgb.concat([e.alpha])
                },
                hslaArray: function() {
                    var e = this.values;
                    return e.hsl.concat([e.alpha])
                },
                alpha: function(e) {
                    return void 0 === e ? this.values.alpha : (this.setValues("alpha", e), this)
                },
                red: function(e) {
                    return this.setChannel("rgb", 0, e)
                },
                green: function(e) {
                    return this.setChannel("rgb", 1, e)
                },
                blue: function(e) {
                    return this.setChannel("rgb", 2, e)
                },
                hue: function(e) {
                    return e && (e = (e %= 360) < 0 ? 360 + e : e), this.setChannel("hsl", 0, e)
                },
                saturation: function(e) {
                    return this.setChannel("hsl", 1, e)
                },
                lightness: function(e) {
                    return this.setChannel("hsl", 2, e)
                },
                saturationv: function(e) {
                    return this.setChannel("hsv", 1, e)
                },
                whiteness: function(e) {
                    return this.setChannel("hwb", 1, e)
                },
                blackness: function(e) {
                    return this.setChannel("hwb", 2, e)
                },
                value: function(e) {
                    return this.setChannel("hsv", 2, e)
                },
                cyan: function(e) {
                    return this.setChannel("cmyk", 0, e)
                },
                magenta: function(e) {
                    return this.setChannel("cmyk", 1, e)
                },
                yellow: function(e) {
                    return this.setChannel("cmyk", 2, e)
                },
                black: function(e) {
                    return this.setChannel("cmyk", 3, e)
                },
                hexString: function() {
                    return i.hexString(this.values.rgb)
                },
                rgbString: function() {
                    return i.rgbString(this.values.rgb, this.values.alpha)
                },
                rgbaString: function() {
                    return i.rgbaString(this.values.rgb, this.values.alpha)
                },
                percentString: function() {
                    return i.percentString(this.values.rgb, this.values.alpha)
                },
                hslString: function() {
                    return i.hslString(this.values.hsl, this.values.alpha)
                },
                hslaString: function() {
                    return i.hslaString(this.values.hsl, this.values.alpha)
                },
                hwbString: function() {
                    return i.hwbString(this.values.hwb, this.values.alpha)
                },
                keyword: function() {
                    return i.keyword(this.values.rgb, this.values.alpha)
                },
                rgbNumber: function() {
                    var e = this.values.rgb;
                    return e[0] << 16 | e[1] << 8 | e[2]
                },
                luminosity: function() {
                    for (var e = this.values.rgb, t = [], a = 0; a < e.length; a++) {
                        var n = e[a] / 255;
                        t[a] = n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4)
                    }
                    return .2126 * t[0] + .7152 * t[1] + .0722 * t[2]
                },
                contrast: function(e) {
                    var t = this.luminosity(),
                        a = e.luminosity();
                    return t > a ? (t + .05) / (a + .05) : (a + .05) / (t + .05)
                },
                level: function(e) {
                    var t = this.contrast(e);
                    return t >= 7.1 ? "AAA" : t >= 4.5 ? "AA" : ""
                },
                dark: function() {
                    var e = this.values.rgb;
                    return (299 * e[0] + 587 * e[1] + 114 * e[2]) / 1e3 < 128
                },
                light: function() {
                    return !this.dark()
                },
                negate: function() {
                    for (var e = [], t = 0; t < 3; t++) e[t] = 255 - this.values.rgb[t];
                    return this.setValues("rgb", e), this
                },
                lighten: function(e) {
                    var t = this.values.hsl;
                    return t[2] += t[2] * e, this.setValues("hsl", t), this
                },
                darken: function(e) {
                    var t = this.values.hsl;
                    return t[2] -= t[2] * e, this.setValues("hsl", t), this
                },
                saturate: function(e) {
                    var t = this.values.hsl;
                    return t[1] += t[1] * e, this.setValues("hsl", t), this
                },
                desaturate: function(e) {
                    var t = this.values.hsl;
                    return t[1] -= t[1] * e, this.setValues("hsl", t), this
                },
                whiten: function(e) {
                    var t = this.values.hwb;
                    return t[1] += t[1] * e, this.setValues("hwb", t), this
                },
                blacken: function(e) {
                    var t = this.values.hwb;
                    return t[2] += t[2] * e, this.setValues("hwb", t), this
                },
                greyscale: function() {
                    var e = this.values.rgb,
                        t = .3 * e[0] + .59 * e[1] + .11 * e[2];
                    return this.setValues("rgb", [t, t, t]), this
                },
                clearer: function(e) {
                    var t = this.values.alpha;
                    return this.setValues("alpha", t - t * e), this
                },
                opaquer: function(e) {
                    var t = this.values.alpha;
                    return this.setValues("alpha", t + t * e), this
                },
                rotate: function(e) {
                    var t = this.values.hsl,
                        a = (t[0] + e) % 360;
                    return t[0] = a < 0 ? 360 + a : a, this.setValues("hsl", t), this
                },
                mix: function(e, t) {
                    var a = e,
                        n = void 0 === t ? .5 : t,
                        i = 2 * n - 1,
                        r = this.alpha() - a.alpha(),
                        s = ((i * r == -1 ? i : (i + r) / (1 + i * r)) + 1) / 2,
                        o = 1 - s;
                    return this.rgb(s * this.red() + o * a.red(), s * this.green() + o * a.green(), s * this.blue() + o * a.blue()).alpha(this.alpha() * n + a.alpha() * (1 - n))
                },
                toJSON: function() {
                    return this.rgb()
                },
                clone: function() {
                    var e, t, a = new r,
                        n = this.values,
                        i = a.values;
                    for (var s in n) n.hasOwnProperty(s) && ("[object Array]" === (t = {}.toString.call(e = n[s])) ? i[s] = e.slice(0) : "[object Number]" === t ? i[s] = e : console.error("unexpected color value:", e));
                    return a
                }
            }, r.prototype.spaces = {
                rgb: ["red", "green", "blue"],
                hsl: ["hue", "saturation", "lightness"],
                hsv: ["hue", "saturation", "value"],
                hwb: ["hue", "whiteness", "blackness"],
                cmyk: ["cyan", "magenta", "yellow", "black"]
            }, r.prototype.maxes = {
                rgb: [255, 255, 255],
                hsl: [360, 100, 100],
                hsv: [360, 100, 100],
                hwb: [360, 100, 100],
                cmyk: [100, 100, 100, 100]
            }, r.prototype.getValues = function(e) {
                for (var t = this.values, a = {}, n = 0; n < e.length; n++) a[e.charAt(n)] = t[e][n];
                return 1 !== t.alpha && (a.a = t.alpha), a
            }, r.prototype.setValues = function(e, t) {
                var a, i, r = this.values,
                    s = this.spaces,
                    o = this.maxes,
                    d = 1;
                if (this.valid = !0, "alpha" === e) d = t;
                else if (t.length) r[e] = t.slice(0, e.length), d = t[e.length];
                else if (void 0 !== t[e.charAt(0)]) {
                    for (a = 0; a < e.length; a++) r[e][a] = t[e.charAt(a)];
                    d = t.a
                } else if (void 0 !== t[s[e][0]]) {
                    var l = s[e];
                    for (a = 0; a < e.length; a++) r[e][a] = t[l[a]];
                    d = t.alpha
                }
                if (r.alpha = Math.max(0, Math.min(1, void 0 === d ? r.alpha : d)), "alpha" === e) return !1;
                for (a = 0; a < e.length; a++) i = Math.max(0, Math.min(o[e][a], r[e][a])), r[e][a] = Math.round(i);
                for (var u in s) u !== e && (r[u] = n[e][u](r[e]));
                return !0
            }, r.prototype.setSpace = function(e, t) {
                var a = t[0];
                return void 0 === a ? this.getValues(e) : ("number" == typeof a && (a = Array.prototype.slice.call(t)), this.setValues(e, a), this)
            }, r.prototype.setChannel = function(e, t, a) {
                var n = this.values[e];
                return void 0 === a ? n[t] : a === n[t] ? this : (n[t] = a, this.setValues(e, n), this)
            }, "undefined" != typeof window && (window.Color = r), e.exports = r
        },
        "7BjC": function(e, t, a) {
            ! function(e) {
                "use strict";

                function t(e, t, a, n) {
                    var i = {
                        s: ["m\xf5ne sekundi", "m\xf5ni sekund", "paar sekundit"],
                        ss: [e + "sekundi", e + "sekundit"],
                        m: ["\xfche minuti", "\xfcks minut"],
                        mm: [e + " minuti", e + " minutit"],
                        h: ["\xfche tunni", "tund aega", "\xfcks tund"],
                        hh: [e + " tunni", e + " tundi"],
                        d: ["\xfche p\xe4eva", "\xfcks p\xe4ev"],
                        M: ["kuu aja", "kuu aega", "\xfcks kuu"],
                        MM: [e + " kuu", e + " kuud"],
                        y: ["\xfche aasta", "aasta", "\xfcks aasta"],
                        yy: [e + " aasta", e + " aastat"]
                    };
                    return t ? i[a][2] ? i[a][2] : i[a][1] : n ? i[a][0] : i[a][1]
                }
                e.defineLocale("et", {
                    months: "jaanuar_veebruar_m\xe4rts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
                    monthsShort: "jaan_veebr_m\xe4rts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
                    weekdays: "p\xfchap\xe4ev_esmasp\xe4ev_teisip\xe4ev_kolmap\xe4ev_neljap\xe4ev_reede_laup\xe4ev".split("_"),
                    weekdaysShort: "P_E_T_K_N_R_L".split("_"),
                    weekdaysMin: "P_E_T_K_N_R_L".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY H:mm",
                        LLLL: "dddd, D. MMMM YYYY H:mm"
                    },
                    calendar: {
                        sameDay: "[T\xe4na,] LT",
                        nextDay: "[Homme,] LT",
                        nextWeek: "[J\xe4rgmine] dddd LT",
                        lastDay: "[Eile,] LT",
                        lastWeek: "[Eelmine] dddd LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s p\xe4rast",
                        past: "%s tagasi",
                        s: t,
                        ss: t,
                        m: t,
                        mm: t,
                        h: t,
                        hh: t,
                        d: t,
                        dd: "%d p\xe4eva",
                        M: t,
                        MM: t,
                        y: t,
                        yy: t
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(a("wd/R"))
        },
        "7O6V": function(e, t, a) {
            "use strict";
            e.exports = function(e) {
                e.Line = function(t, a) {
                    return a.type = "line", new e(t, a)
                }
            }
        },
        "7aV9": function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("si", {
                    months: "\u0da2\u0db1\u0dc0\u0dcf\u0dbb\u0dd2_\u0db4\u0dd9\u0db6\u0dbb\u0dc0\u0dcf\u0dbb\u0dd2_\u0db8\u0dcf\u0dbb\u0dca\u0dad\u0dd4_\u0d85\u0db4\u0dca\u200d\u0dbb\u0dda\u0dbd\u0dca_\u0db8\u0dd0\u0dba\u0dd2_\u0da2\u0dd6\u0db1\u0dd2_\u0da2\u0dd6\u0dbd\u0dd2_\u0d85\u0d9c\u0ddd\u0dc3\u0dca\u0dad\u0dd4_\u0dc3\u0dd0\u0db4\u0dca\u0dad\u0dd0\u0db8\u0dca\u0db6\u0dbb\u0dca_\u0d94\u0d9a\u0dca\u0dad\u0ddd\u0db6\u0dbb\u0dca_\u0db1\u0ddc\u0dc0\u0dd0\u0db8\u0dca\u0db6\u0dbb\u0dca_\u0daf\u0dd9\u0dc3\u0dd0\u0db8\u0dca\u0db6\u0dbb\u0dca".split("_"),
                    monthsShort: "\u0da2\u0db1_\u0db4\u0dd9\u0db6_\u0db8\u0dcf\u0dbb\u0dca_\u0d85\u0db4\u0dca_\u0db8\u0dd0\u0dba\u0dd2_\u0da2\u0dd6\u0db1\u0dd2_\u0da2\u0dd6\u0dbd\u0dd2_\u0d85\u0d9c\u0ddd_\u0dc3\u0dd0\u0db4\u0dca_\u0d94\u0d9a\u0dca_\u0db1\u0ddc\u0dc0\u0dd0_\u0daf\u0dd9\u0dc3\u0dd0".split("_"),
                    weekdays: "\u0d89\u0dbb\u0dd2\u0daf\u0dcf_\u0dc3\u0db3\u0dd4\u0daf\u0dcf_\u0d85\u0d9f\u0dc4\u0dbb\u0dd4\u0dc0\u0dcf\u0daf\u0dcf_\u0db6\u0daf\u0dcf\u0daf\u0dcf_\u0db6\u0dca\u200d\u0dbb\u0dc4\u0dc3\u0dca\u0db4\u0dad\u0dd2\u0db1\u0dca\u0daf\u0dcf_\u0dc3\u0dd2\u0d9a\u0dd4\u0dbb\u0dcf\u0daf\u0dcf_\u0dc3\u0dd9\u0db1\u0dc3\u0dd4\u0dbb\u0dcf\u0daf\u0dcf".split("_"),
                    weekdaysShort: "\u0d89\u0dbb\u0dd2_\u0dc3\u0db3\u0dd4_\u0d85\u0d9f_\u0db6\u0daf\u0dcf_\u0db6\u0dca\u200d\u0dbb\u0dc4_\u0dc3\u0dd2\u0d9a\u0dd4_\u0dc3\u0dd9\u0db1".split("_"),
                    weekdaysMin: "\u0d89_\u0dc3_\u0d85_\u0db6_\u0db6\u0dca\u200d\u0dbb_\u0dc3\u0dd2_\u0dc3\u0dd9".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "a h:mm",
                        LTS: "a h:mm:ss",
                        L: "YYYY/MM/DD",
                        LL: "YYYY MMMM D",
                        LLL: "YYYY MMMM D, a h:mm",
                        LLLL: "YYYY MMMM D [\u0dc0\u0dd0\u0db1\u0dd2] dddd, a h:mm:ss"
                    },
                    calendar: {
                        sameDay: "[\u0d85\u0daf] LT[\u0da7]",
                        nextDay: "[\u0dc4\u0dd9\u0da7] LT[\u0da7]",
                        nextWeek: "dddd LT[\u0da7]",
                        lastDay: "[\u0d8a\u0dba\u0dda] LT[\u0da7]",
                        lastWeek: "[\u0db4\u0dc3\u0dd4\u0d9c\u0dd2\u0dba] dddd LT[\u0da7]",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s\u0d9a\u0dd2\u0db1\u0dca",
                        past: "%s\u0d9a\u0da7 \u0db4\u0dd9\u0dbb",
                        s: "\u0dad\u0dad\u0dca\u0db4\u0dbb \u0d9a\u0dd2\u0dc4\u0dd2\u0db4\u0dba",
                        ss: "\u0dad\u0dad\u0dca\u0db4\u0dbb %d",
                        m: "\u0db8\u0dd2\u0db1\u0dd2\u0dad\u0dca\u0dad\u0dd4\u0dc0",
                        mm: "\u0db8\u0dd2\u0db1\u0dd2\u0dad\u0dca\u0dad\u0dd4 %d",
                        h: "\u0db4\u0dd0\u0dba",
                        hh: "\u0db4\u0dd0\u0dba %d",
                        d: "\u0daf\u0dd2\u0db1\u0dba",
                        dd: "\u0daf\u0dd2\u0db1 %d",
                        M: "\u0db8\u0dcf\u0dc3\u0dba",
                        MM: "\u0db8\u0dcf\u0dc3 %d",
                        y: "\u0dc0\u0dc3\u0dbb",
                        yy: "\u0dc0\u0dc3\u0dbb %d"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2} \u0dc0\u0dd0\u0db1\u0dd2/,
                    ordinal: function(e) {
                        return e + " \u0dc0\u0dd0\u0db1\u0dd2"
                    },
                    meridiemParse: /\u0db4\u0dd9\u0dbb \u0dc0\u0dbb\u0dd4|\u0db4\u0dc3\u0dca \u0dc0\u0dbb\u0dd4|\u0db4\u0dd9.\u0dc0|\u0db4.\u0dc0./,
                    isPM: function(e) {
                        return "\u0db4.\u0dc0." === e || "\u0db4\u0dc3\u0dca \u0dc0\u0dbb\u0dd4" === e
                    },
                    meridiem: function(e, t, a) {
                        return e > 11 ? a ? "\u0db4.\u0dc0." : "\u0db4\u0dc3\u0dca \u0dc0\u0dbb\u0dd4" : a ? "\u0db4\u0dd9.\u0dc0." : "\u0db4\u0dd9\u0dbb \u0dc0\u0dbb\u0dd4"
                    }
                })
            }(a("wd/R"))
        },
        "8/+R": function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = {
                        1: "\u0a67",
                        2: "\u0a68",
                        3: "\u0a69",
                        4: "\u0a6a",
                        5: "\u0a6b",
                        6: "\u0a6c",
                        7: "\u0a6d",
                        8: "\u0a6e",
                        9: "\u0a6f",
                        0: "\u0a66"
                    },
                    a = {
                        "\u0a67": "1",
                        "\u0a68": "2",
                        "\u0a69": "3",
                        "\u0a6a": "4",
                        "\u0a6b": "5",
                        "\u0a6c": "6",
                        "\u0a6d": "7",
                        "\u0a6e": "8",
                        "\u0a6f": "9",
                        "\u0a66": "0"
                    };
                e.defineLocale("pa-in", {
                    months: "\u0a1c\u0a28\u0a35\u0a30\u0a40_\u0a2b\u0a3c\u0a30\u0a35\u0a30\u0a40_\u0a2e\u0a3e\u0a30\u0a1a_\u0a05\u0a2a\u0a4d\u0a30\u0a48\u0a32_\u0a2e\u0a08_\u0a1c\u0a42\u0a28_\u0a1c\u0a41\u0a32\u0a3e\u0a08_\u0a05\u0a17\u0a38\u0a24_\u0a38\u0a24\u0a70\u0a2c\u0a30_\u0a05\u0a15\u0a24\u0a42\u0a2c\u0a30_\u0a28\u0a35\u0a70\u0a2c\u0a30_\u0a26\u0a38\u0a70\u0a2c\u0a30".split("_"),
                    monthsShort: "\u0a1c\u0a28\u0a35\u0a30\u0a40_\u0a2b\u0a3c\u0a30\u0a35\u0a30\u0a40_\u0a2e\u0a3e\u0a30\u0a1a_\u0a05\u0a2a\u0a4d\u0a30\u0a48\u0a32_\u0a2e\u0a08_\u0a1c\u0a42\u0a28_\u0a1c\u0a41\u0a32\u0a3e\u0a08_\u0a05\u0a17\u0a38\u0a24_\u0a38\u0a24\u0a70\u0a2c\u0a30_\u0a05\u0a15\u0a24\u0a42\u0a2c\u0a30_\u0a28\u0a35\u0a70\u0a2c\u0a30_\u0a26\u0a38\u0a70\u0a2c\u0a30".split("_"),
                    weekdays: "\u0a10\u0a24\u0a35\u0a3e\u0a30_\u0a38\u0a4b\u0a2e\u0a35\u0a3e\u0a30_\u0a2e\u0a70\u0a17\u0a32\u0a35\u0a3e\u0a30_\u0a2c\u0a41\u0a27\u0a35\u0a3e\u0a30_\u0a35\u0a40\u0a30\u0a35\u0a3e\u0a30_\u0a38\u0a3c\u0a41\u0a71\u0a15\u0a30\u0a35\u0a3e\u0a30_\u0a38\u0a3c\u0a28\u0a40\u0a1a\u0a30\u0a35\u0a3e\u0a30".split("_"),
                    weekdaysShort: "\u0a10\u0a24_\u0a38\u0a4b\u0a2e_\u0a2e\u0a70\u0a17\u0a32_\u0a2c\u0a41\u0a27_\u0a35\u0a40\u0a30_\u0a38\u0a3c\u0a41\u0a15\u0a30_\u0a38\u0a3c\u0a28\u0a40".split("_"),
                    weekdaysMin: "\u0a10\u0a24_\u0a38\u0a4b\u0a2e_\u0a2e\u0a70\u0a17\u0a32_\u0a2c\u0a41\u0a27_\u0a35\u0a40\u0a30_\u0a38\u0a3c\u0a41\u0a15\u0a30_\u0a38\u0a3c\u0a28\u0a40".split("_"),
                    longDateFormat: {
                        LT: "A h:mm \u0a35\u0a1c\u0a47",
                        LTS: "A h:mm:ss \u0a35\u0a1c\u0a47",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, A h:mm \u0a35\u0a1c\u0a47",
                        LLLL: "dddd, D MMMM YYYY, A h:mm \u0a35\u0a1c\u0a47"
                    },
                    calendar: {
                        sameDay: "[\u0a05\u0a1c] LT",
                        nextDay: "[\u0a15\u0a32] LT",
                        nextWeek: "[\u0a05\u0a17\u0a32\u0a3e] dddd, LT",
                        lastDay: "[\u0a15\u0a32] LT",
                        lastWeek: "[\u0a2a\u0a3f\u0a1b\u0a32\u0a47] dddd, LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s \u0a35\u0a3f\u0a71\u0a1a",
                        past: "%s \u0a2a\u0a3f\u0a1b\u0a32\u0a47",
                        s: "\u0a15\u0a41\u0a1d \u0a38\u0a15\u0a3f\u0a70\u0a1f",
                        ss: "%d \u0a38\u0a15\u0a3f\u0a70\u0a1f",
                        m: "\u0a07\u0a15 \u0a2e\u0a3f\u0a70\u0a1f",
                        mm: "%d \u0a2e\u0a3f\u0a70\u0a1f",
                        h: "\u0a07\u0a71\u0a15 \u0a18\u0a70\u0a1f\u0a3e",
                        hh: "%d \u0a18\u0a70\u0a1f\u0a47",
                        d: "\u0a07\u0a71\u0a15 \u0a26\u0a3f\u0a28",
                        dd: "%d \u0a26\u0a3f\u0a28",
                        M: "\u0a07\u0a71\u0a15 \u0a2e\u0a39\u0a40\u0a28\u0a3e",
                        MM: "%d \u0a2e\u0a39\u0a40\u0a28\u0a47",
                        y: "\u0a07\u0a71\u0a15 \u0a38\u0a3e\u0a32",
                        yy: "%d \u0a38\u0a3e\u0a32"
                    },
                    preparse: function(e) {
                        return e.replace(/[\u0a67\u0a68\u0a69\u0a6a\u0a6b\u0a6c\u0a6d\u0a6e\u0a6f\u0a66]/g, function(e) {
                            return a[e]
                        })
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, function(e) {
                            return t[e]
                        })
                    },
                    meridiemParse: /\u0a30\u0a3e\u0a24|\u0a38\u0a35\u0a47\u0a30|\u0a26\u0a41\u0a2a\u0a39\u0a3f\u0a30|\u0a38\u0a3c\u0a3e\u0a2e/,
                    meridiemHour: function(e, t) {
                        return 12 === e && (e = 0), "\u0a30\u0a3e\u0a24" === t ? e < 4 ? e : e + 12 : "\u0a38\u0a35\u0a47\u0a30" === t ? e : "\u0a26\u0a41\u0a2a\u0a39\u0a3f\u0a30" === t ? e >= 10 ? e : e + 12 : "\u0a38\u0a3c\u0a3e\u0a2e" === t ? e + 12 : void 0
                    },
                    meridiem: function(e, t, a) {
                        return e < 4 ? "\u0a30\u0a3e\u0a24" : e < 10 ? "\u0a38\u0a35\u0a47\u0a30" : e < 17 ? "\u0a26\u0a41\u0a2a\u0a39\u0a3f\u0a30" : e < 20 ? "\u0a38\u0a3c\u0a3e\u0a2e" : "\u0a30\u0a3e\u0a24"
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                })
            }(a("wd/R"))
        },
        "8//i": function(e, t, a) {
            "use strict";
            var n = a("CDJp"),
                i = a("RDha"),
                r = a("g8vO");
            e.exports = function(e) {
                var t = n.global,
                    a = {
                        display: !0,
                        animate: !0,
                        position: "chartArea",
                        angleLines: {
                            display: !0,
                            color: "rgba(0, 0, 0, 0.1)",
                            lineWidth: 1
                        },
                        gridLines: {
                            circular: !1
                        },
                        ticks: {
                            showLabelBackdrop: !0,
                            backdropColor: "rgba(255,255,255,0.75)",
                            backdropPaddingY: 2,
                            backdropPaddingX: 2,
                            callback: r.formatters.linear
                        },
                        pointLabels: {
                            display: !0,
                            fontSize: 10,
                            callback: function(e) {
                                return e
                            }
                        }
                    };

                function s(e) {
                    var t = e.options;
                    return t.angleLines.display || t.pointLabels.display ? e.chart.data.labels.length : 0
                }

                function o(e) {
                    var a = e.options.pointLabels,
                        n = i.valueOrDefault(a.fontSize, t.defaultFontSize),
                        r = i.valueOrDefault(a.fontStyle, t.defaultFontStyle),
                        s = i.valueOrDefault(a.fontFamily, t.defaultFontFamily);
                    return {
                        size: n,
                        style: r,
                        family: s,
                        font: i.fontString(n, r, s)
                    }
                }

                function d(e, t, a, n, i) {
                    return e === n || e === i ? {
                        start: t - a / 2,
                        end: t + a / 2
                    } : e < n || e > i ? {
                        start: t - a - 5,
                        end: t
                    } : {
                        start: t,
                        end: t + a + 5
                    }
                }

                function l(e) {
                    return 0 === e || 180 === e ? "center" : e < 180 ? "left" : "right"
                }

                function u(e, t, a, n) {
                    if (i.isArray(t))
                        for (var r = a.y, s = 1.5 * n, o = 0; o < t.length; ++o) e.fillText(t[o], a.x, r), r += s;
                    else e.fillText(t, a.x, a.y)
                }

                function _(e, t, a) {
                    90 === e || 270 === e ? a.y -= t.h / 2 : (e > 270 || e < 90) && (a.y -= t.h)
                }

                function m(e) {
                    return i.isNumber(e) ? e : 0
                }
                var h = e.LinearScaleBase.extend({
                    setDimensions: function() {
                        var e = this,
                            a = e.options,
                            n = a.ticks;
                        e.width = e.maxWidth, e.height = e.maxHeight, e.xCenter = Math.round(e.width / 2), e.yCenter = Math.round(e.height / 2);
                        var r = i.min([e.height, e.width]),
                            s = i.valueOrDefault(n.fontSize, t.defaultFontSize);
                        e.drawingArea = a.display ? r / 2 - (s / 2 + n.backdropPaddingY) : r / 2
                    },
                    determineDataLimits: function() {
                        var e = this,
                            t = e.chart,
                            a = Number.POSITIVE_INFINITY,
                            n = Number.NEGATIVE_INFINITY;
                        i.each(t.data.datasets, function(r, s) {
                            if (t.isDatasetVisible(s)) {
                                var o = t.getDatasetMeta(s);
                                i.each(r.data, function(t, i) {
                                    var r = +e.getRightValue(t);
                                    isNaN(r) || o.data[i].hidden || (a = Math.min(r, a), n = Math.max(r, n))
                                })
                            }
                        }), e.min = a === Number.POSITIVE_INFINITY ? 0 : a, e.max = n === Number.NEGATIVE_INFINITY ? 0 : n, e.handleTickRangeOptions()
                    },
                    getTickLimit: function() {
                        var e = this.options.ticks,
                            a = i.valueOrDefault(e.fontSize, t.defaultFontSize);
                        return Math.min(e.maxTicksLimit ? e.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * a)))
                    },
                    convertTicksToLabels: function() {
                        var t = this;
                        e.LinearScaleBase.prototype.convertTicksToLabels.call(t), t.pointLabels = t.chart.data.labels.map(t.options.pointLabels.callback, t)
                    },
                    getLabelForIndex: function(e, t) {
                        return +this.getRightValue(this.chart.data.datasets[t].data[e])
                    },
                    fit: function() {
                        var e, t;
                        this.options.pointLabels.display ? function(e) {
                            var t, a, n, r = o(e),
                                l = Math.min(e.height / 2, e.width / 2),
                                u = {
                                    r: e.width,
                                    l: 0,
                                    t: e.height,
                                    b: 0
                                },
                                _ = {};
                            e.ctx.font = r.font, e._pointLabelSizes = [];
                            var m, h, c, f = s(e);
                            for (t = 0; t < f; t++) {
                                n = e.getPointPosition(t, l), m = e.ctx, h = r.size, a = i.isArray(c = e.pointLabels[t] || "") ? {
                                    w: i.longestText(m, m.font, c),
                                    h: c.length * h + 1.5 * (c.length - 1) * h
                                } : {
                                    w: m.measureText(c).width,
                                    h: h
                                }, e._pointLabelSizes[t] = a;
                                var p = e.getIndexAngle(t),
                                    M = i.toDegrees(p) % 360,
                                    y = d(M, n.x, a.w, 0, 180),
                                    g = d(M, n.y, a.h, 90, 270);
                                y.start < u.l && (u.l = y.start, _.l = p), y.end > u.r && (u.r = y.end, _.r = p), g.start < u.t && (u.t = g.start, _.t = p), g.end > u.b && (u.b = g.end, _.b = p)
                            }
                            e.setReductions(l, u, _)
                        }(this) : (e = this, t = Math.min(e.height / 2, e.width / 2), e.drawingArea = Math.round(t), e.setCenterPoint(0, 0, 0, 0))
                    },
                    setReductions: function(e, t, a) {
                        var n = t.l / Math.sin(a.l),
                            i = Math.max(t.r - this.width, 0) / Math.sin(a.r),
                            r = -t.t / Math.cos(a.t),
                            s = -Math.max(t.b - this.height, 0) / Math.cos(a.b);
                        n = m(n), i = m(i), r = m(r), s = m(s), this.drawingArea = Math.min(Math.round(e - (n + i) / 2), Math.round(e - (r + s) / 2)), this.setCenterPoint(n, i, r, s)
                    },
                    setCenterPoint: function(e, t, a, n) {
                        var i = this,
                            r = a + i.drawingArea,
                            s = i.height - n - i.drawingArea;
                        i.xCenter = Math.round((e + i.drawingArea + (i.width - t - i.drawingArea)) / 2 + i.left), i.yCenter = Math.round((r + s) / 2 + i.top)
                    },
                    getIndexAngle: function(e) {
                        return e * (2 * Math.PI / s(this)) + (this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0) * Math.PI * 2 / 360
                    },
                    getDistanceFromCenterForValue: function(e) {
                        var t = this;
                        if (null === e) return 0;
                        var a = t.drawingArea / (t.max - t.min);
                        return t.options.ticks.reverse ? (t.max - e) * a : (e - t.min) * a
                    },
                    getPointPosition: function(e, t) {
                        var a = this.getIndexAngle(e) - Math.PI / 2;
                        return {
                            x: Math.round(Math.cos(a) * t) + this.xCenter,
                            y: Math.round(Math.sin(a) * t) + this.yCenter
                        }
                    },
                    getPointPositionForValue: function(e, t) {
                        return this.getPointPosition(e, this.getDistanceFromCenterForValue(t))
                    },
                    getBasePosition: function() {
                        var e = this.min,
                            t = this.max;
                        return this.getPointPositionForValue(0, this.beginAtZero ? 0 : e < 0 && t < 0 ? t : e > 0 && t > 0 ? e : 0)
                    },
                    draw: function() {
                        var e = this,
                            a = e.options,
                            n = a.gridLines,
                            r = a.ticks,
                            d = i.valueOrDefault;
                        if (a.display) {
                            var m = e.ctx,
                                h = this.getIndexAngle(0),
                                c = d(r.fontSize, t.defaultFontSize),
                                f = d(r.fontStyle, t.defaultFontStyle),
                                p = d(r.fontFamily, t.defaultFontFamily),
                                M = i.fontString(c, f, p);
                            i.each(e.ticks, function(a, o) {
                                if (o > 0 || r.reverse) {
                                    var l = e.getDistanceFromCenterForValue(e.ticksAsNumbers[o]);
                                    if (n.display && 0 !== o && function(e, t, a, n) {
                                            var r = e.ctx;
                                            if (r.strokeStyle = i.valueAtIndexOrDefault(t.color, n - 1), r.lineWidth = i.valueAtIndexOrDefault(t.lineWidth, n - 1), e.options.gridLines.circular) r.beginPath(), r.arc(e.xCenter, e.yCenter, a, 0, 2 * Math.PI), r.closePath(), r.stroke();
                                            else {
                                                var o = s(e);
                                                if (0 === o) return;
                                                r.beginPath();
                                                var d = e.getPointPosition(0, a);
                                                r.moveTo(d.x, d.y);
                                                for (var l = 1; l < o; l++) d = e.getPointPosition(l, a), r.lineTo(d.x, d.y);
                                                r.closePath(), r.stroke()
                                            }
                                        }(e, n, l, o), r.display) {
                                        var u = d(r.fontColor, t.defaultFontColor);
                                        if (m.font = M, m.save(), m.translate(e.xCenter, e.yCenter), m.rotate(h), r.showLabelBackdrop) {
                                            var _ = m.measureText(a).width;
                                            m.fillStyle = r.backdropColor, m.fillRect(-_ / 2 - r.backdropPaddingX, -l - c / 2 - r.backdropPaddingY, _ + 2 * r.backdropPaddingX, c + 2 * r.backdropPaddingY)
                                        }
                                        m.textAlign = "center", m.textBaseline = "middle", m.fillStyle = u, m.fillText(a, 0, -l), m.restore()
                                    }
                                }
                            }), (a.angleLines.display || a.pointLabels.display) && function(e) {
                                var a = e.ctx,
                                    n = e.options,
                                    r = n.angleLines,
                                    d = n.pointLabels;
                                a.lineWidth = r.lineWidth, a.strokeStyle = r.color;
                                var m = e.getDistanceFromCenterForValue(n.ticks.reverse ? e.min : e.max),
                                    h = o(e);
                                a.textBaseline = "top";
                                for (var c = s(e) - 1; c >= 0; c--) {
                                    if (r.display) {
                                        var f = e.getPointPosition(c, m);
                                        a.beginPath(), a.moveTo(e.xCenter, e.yCenter), a.lineTo(f.x, f.y), a.stroke(), a.closePath()
                                    }
                                    if (d.display) {
                                        var p = e.getPointPosition(c, m + 5),
                                            M = i.valueAtIndexOrDefault(d.fontColor, c, t.defaultFontColor);
                                        a.font = h.font, a.fillStyle = M;
                                        var y = e.getIndexAngle(c),
                                            g = i.toDegrees(y);
                                        a.textAlign = l(g), _(g, e._pointLabelSizes[c], p), u(a, e.pointLabels[c] || "", p, h.size)
                                    }
                                }
                            }(e)
                        }
                    }
                });
                e.scaleService.registerScaleType("radialLinear", h, a)
            }
        },
        "8TtQ": function(e, t, a) {
            "use strict";
            e.exports = function(e) {
                var t = e.Scale.extend({
                    getLabels: function() {
                        var e = this.chart.data;
                        return this.options.labels || (this.isHorizontal() ? e.xLabels : e.yLabels) || e.labels
                    },
                    determineDataLimits: function() {
                        var e, t = this,
                            a = t.getLabels();
                        t.minIndex = 0, t.maxIndex = a.length - 1, void 0 !== t.options.ticks.min && (e = a.indexOf(t.options.ticks.min), t.minIndex = -1 !== e ? e : t.minIndex), void 0 !== t.options.ticks.max && (e = a.indexOf(t.options.ticks.max), t.maxIndex = -1 !== e ? e : t.maxIndex), t.min = a[t.minIndex], t.max = a[t.maxIndex]
                    },
                    buildTicks: function() {
                        var e = this,
                            t = e.getLabels();
                        e.ticks = 0 === e.minIndex && e.maxIndex === t.length - 1 ? t : t.slice(e.minIndex, e.maxIndex + 1)
                    },
                    getLabelForIndex: function(e, t) {
                        var a = this,
                            n = a.chart.data,
                            i = a.isHorizontal();
                        return n.yLabels && !i ? a.getRightValue(n.datasets[t].data[e]) : a.ticks[e - a.minIndex]
                    },
                    getPixelForValue: function(e, t) {
                        var a, n = this,
                            i = n.options.offset,
                            r = Math.max(n.maxIndex + 1 - n.minIndex - (i ? 0 : 1), 1);
                        if (void 0 !== e && null !== e && (a = n.isHorizontal() ? e.x : e.y), void 0 !== a || void 0 !== e && isNaN(t)) {
                            var s = n.getLabels().indexOf(e = a || e);
                            t = -1 !== s ? s : t
                        }
                        if (n.isHorizontal()) {
                            var o = n.width / r,
                                d = o * (t - n.minIndex);
                            return i && (d += o / 2), n.left + Math.round(d)
                        }
                        var l = n.height / r,
                            u = l * (t - n.minIndex);
                        return i && (u += l / 2), n.top + Math.round(u)
                    },
                    getPixelForTick: function(e) {
                        return this.getPixelForValue(this.ticks[e], e + this.minIndex, null)
                    },
                    getValueForPixel: function(e) {
                        var t = this,
                            a = t.options.offset,
                            n = Math.max(t._ticks.length - (a ? 0 : 1), 1),
                            i = t.isHorizontal(),
                            r = (i ? t.width : t.height) / n;
                        return e -= i ? t.left : t.top, a && (e -= r / 2), (e <= 0 ? 0 : Math.round(e / r)) + t.minIndex
                    },
                    getBasePixel: function() {
                        return this.bottom
                    }
                });
                e.scaleService.registerScaleType("category", t, {
                    position: "bottom"
                })
            }
        },
        "8mBD": function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("pt", {
                    months: "janeiro_fevereiro_mar\xe7o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
                    monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
                    weekdays: "Domingo_Segunda-feira_Ter\xe7a-feira_Quarta-feira_Quinta-feira_Sexta-feira_S\xe1bado".split("_"),
                    weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_S\xe1b".split("_"),
                    weekdaysMin: "Do_2\xaa_3\xaa_4\xaa_5\xaa_6\xaa_S\xe1".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D [de] MMMM [de] YYYY",
                        LLL: "D [de] MMMM [de] YYYY HH:mm",
                        LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[Hoje \xe0s] LT",
                        nextDay: "[Amanh\xe3 \xe0s] LT",
                        nextWeek: "dddd [\xe0s] LT",
                        lastDay: "[Ontem \xe0s] LT",
                        lastWeek: function() {
                            return 0 === this.day() || 6 === this.day() ? "[\xdaltimo] dddd [\xe0s] LT" : "[\xdaltima] dddd [\xe0s] LT"
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "em %s",
                        past: "h\xe1 %s",
                        s: "segundos",
                        ss: "%d segundos",
                        m: "um minuto",
                        mm: "%d minutos",
                        h: "uma hora",
                        hh: "%d horas",
                        d: "um dia",
                        dd: "%d dias",
                        M: "um m\xeas",
                        MM: "%d meses",
                        y: "um ano",
                        yy: "%d anos"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\xba/,
                    ordinal: "%d\xba",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(a("wd/R"))
        },
        "9rRi": function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("gd", {
                    months: ["Am Faoilleach", "An Gearran", "Am M\xe0rt", "An Giblean", "An C\xe8itean", "An t-\xd2gmhios", "An t-Iuchar", "An L\xf9nastal", "An t-Sultain", "An D\xe0mhair", "An t-Samhain", "An D\xf9bhlachd"],
                    monthsShort: ["Faoi", "Gear", "M\xe0rt", "Gibl", "C\xe8it", "\xd2gmh", "Iuch", "L\xf9n", "Sult", "D\xe0mh", "Samh", "D\xf9bh"],
                    monthsParseExact: !0,
                    weekdays: ["Did\xf2mhnaich", "Diluain", "Dim\xe0irt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"],
                    weekdaysShort: ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
                    weekdaysMin: ["D\xf2", "Lu", "M\xe0", "Ci", "Ar", "Ha", "Sa"],
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[An-diugh aig] LT",
                        nextDay: "[A-m\xe0ireach aig] LT",
                        nextWeek: "dddd [aig] LT",
                        lastDay: "[An-d\xe8 aig] LT",
                        lastWeek: "dddd [seo chaidh] [aig] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "ann an %s",
                        past: "bho chionn %s",
                        s: "beagan diogan",
                        ss: "%d diogan",
                        m: "mionaid",
                        mm: "%d mionaidean",
                        h: "uair",
                        hh: "%d uairean",
                        d: "latha",
                        dd: "%d latha",
                        M: "m\xecos",
                        MM: "%d m\xecosan",
                        y: "bliadhna",
                        yy: "%d bliadhna"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
                    ordinal: function(e) {
                        return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh")
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(a("wd/R"))
        },
        "A+xa": function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("cv", {
                    months: "\u043a\u04d1\u0440\u043b\u0430\u0447_\u043d\u0430\u0440\u04d1\u0441_\u043f\u0443\u0448_\u0430\u043a\u0430_\u043c\u0430\u0439_\u04ab\u04d7\u0440\u0442\u043c\u0435_\u0443\u0442\u04d1_\u04ab\u0443\u0440\u043b\u0430_\u0430\u0432\u04d1\u043d_\u044e\u043f\u0430_\u0447\u04f3\u043a_\u0440\u0430\u0448\u0442\u0430\u0432".split("_"),
                    monthsShort: "\u043a\u04d1\u0440_\u043d\u0430\u0440_\u043f\u0443\u0448_\u0430\u043a\u0430_\u043c\u0430\u0439_\u04ab\u04d7\u0440_\u0443\u0442\u04d1_\u04ab\u0443\u0440_\u0430\u0432\u043d_\u044e\u043f\u0430_\u0447\u04f3\u043a_\u0440\u0430\u0448".split("_"),
                    weekdays: "\u0432\u044b\u0440\u0441\u0430\u0440\u043d\u0438\u043a\u0443\u043d_\u0442\u0443\u043d\u0442\u0438\u043a\u0443\u043d_\u044b\u0442\u043b\u0430\u0440\u0438\u043a\u0443\u043d_\u044e\u043d\u043a\u0443\u043d_\u043a\u04d7\u04ab\u043d\u0435\u0440\u043d\u0438\u043a\u0443\u043d_\u044d\u0440\u043d\u0435\u043a\u0443\u043d_\u0448\u04d1\u043c\u0430\u0442\u043a\u0443\u043d".split("_"),
                    weekdaysShort: "\u0432\u044b\u0440_\u0442\u0443\u043d_\u044b\u0442\u043b_\u044e\u043d_\u043a\u04d7\u04ab_\u044d\u0440\u043d_\u0448\u04d1\u043c".split("_"),
                    weekdaysMin: "\u0432\u0440_\u0442\u043d_\u044b\u0442_\u044e\u043d_\u043a\u04ab_\u044d\u0440_\u0448\u043c".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD-MM-YYYY",
                        LL: "YYYY [\u04ab\u0443\u043b\u0445\u0438] MMMM [\u0443\u0439\u04d1\u0445\u04d7\u043d] D[-\u043c\u04d7\u0448\u04d7]",
                        LLL: "YYYY [\u04ab\u0443\u043b\u0445\u0438] MMMM [\u0443\u0439\u04d1\u0445\u04d7\u043d] D[-\u043c\u04d7\u0448\u04d7], HH:mm",
                        LLLL: "dddd, YYYY [\u04ab\u0443\u043b\u0445\u0438] MMMM [\u0443\u0439\u04d1\u0445\u04d7\u043d] D[-\u043c\u04d7\u0448\u04d7], HH:mm"
                    },
                    calendar: {
                        sameDay: "[\u041f\u0430\u044f\u043d] LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",
                        nextDay: "[\u042b\u0440\u0430\u043d] LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",
                        lastDay: "[\u04d6\u043d\u0435\u0440] LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",
                        nextWeek: "[\u04aa\u0438\u0442\u0435\u0441] dddd LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",
                        lastWeek: "[\u0418\u0440\u0442\u043d\u04d7] dddd LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: function(e) {
                            return e + (/\u0441\u0435\u0445\u0435\u0442$/i.exec(e) ? "\u0440\u0435\u043d" : /\u04ab\u0443\u043b$/i.exec(e) ? "\u0442\u0430\u043d" : "\u0440\u0430\u043d")
                        },
                        past: "%s \u043a\u0430\u044f\u043b\u043b\u0430",
                        s: "\u043f\u04d7\u0440-\u0438\u043a \u04ab\u0435\u043a\u043a\u0443\u043d\u0442",
                        ss: "%d \u04ab\u0435\u043a\u043a\u0443\u043d\u0442",
                        m: "\u043f\u04d7\u0440 \u043c\u0438\u043d\u0443\u0442",
                        mm: "%d \u043c\u0438\u043d\u0443\u0442",
                        h: "\u043f\u04d7\u0440 \u0441\u0435\u0445\u0435\u0442",
                        hh: "%d \u0441\u0435\u0445\u0435\u0442",
                        d: "\u043f\u04d7\u0440 \u043a\u0443\u043d",
                        dd: "%d \u043a\u0443\u043d",
                        M: "\u043f\u04d7\u0440 \u0443\u0439\u04d1\u0445",
                        MM: "%d \u0443\u0439\u04d1\u0445",
                        y: "\u043f\u04d7\u0440 \u04ab\u0443\u043b",
                        yy: "%d \u04ab\u0443\u043b"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}-\u043c\u04d7\u0448/,
                    ordinal: "%d-\u043c\u04d7\u0448",
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(a("wd/R"))
        },
        A5uo: function(e, t, a) {
            "use strict";
            var n = a("CDJp"),
                i = a("K2E3"),
                r = a("RDha");
            n._set("global", {
                animation: {
                    duration: 1e3,
                    easing: "easeOutQuart",
                    onProgress: r.noop,
                    onComplete: r.noop
                }
            }), e.exports = function(e) {
                e.Animation = i.extend({
                    chart: null,
                    currentStep: 0,
                    numSteps: 60,
                    easing: "",
                    render: null,
                    onAnimationProgress: null,
                    onAnimationComplete: null
                }), e.animationService = {
                    frameDuration: 17,
                    animations: [],
                    dropFrames: 0,
                    request: null,
                    addAnimation: function(e, t, a, n) {
                        var i, r, s = this.animations;
                        for (t.chart = e, n || (e.animating = !0), i = 0, r = s.length; i < r; ++i)
                            if (s[i].chart === e) return void(s[i] = t);
                        s.push(t), 1 === s.length && this.requestAnimationFrame()
                    },
                    cancelAnimation: function(e) {
                        var t = r.findIndex(this.animations, function(t) {
                            return t.chart === e
                        }); - 1 !== t && (this.animations.splice(t, 1), e.animating = !1)
                    },
                    requestAnimationFrame: function() {
                        var e = this;
                        null === e.request && (e.request = r.requestAnimFrame.call(window, function() {
                            e.request = null, e.startDigest()
                        }))
                    },
                    startDigest: function() {
                        var e = this,
                            t = Date.now(),
                            a = 0;
                        e.dropFrames > 1 && (a = Math.floor(e.dropFrames), e.dropFrames = e.dropFrames % 1), e.advance(1 + a);
                        var n = Date.now();
                        e.dropFrames += (n - t) / e.frameDuration, e.animations.length > 0 && e.requestAnimationFrame()
                    },
                    advance: function(e) {
                        for (var t, a, n = this.animations, i = 0; i < n.length;) a = (t = n[i]).chart, t.currentStep = (t.currentStep || 0) + e, t.currentStep = Math.min(t.currentStep, t.numSteps), r.callback(t.render, [a, t], a), r.callback(t.onAnimationProgress, [t], a), t.currentStep >= t.numSteps ? (r.callback(t.onAnimationComplete, [t], a), a.animating = !1, n.splice(i, 1)) : ++i
                    }
                }, Object.defineProperty(e.Animation.prototype, "animationObject", {
                    get: function() {
                        return this
                    }
                }), Object.defineProperty(e.Animation.prototype, "chartInstance", {
                    get: function() {
                        return this.chart
                    },
                    set: function(e) {
                        this.chart = e
                    }
                })
            }
        },
        AQ68: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("uz-latn", {
                    months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"),
                    monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),
                    weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"),
                    weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),
                    weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "D MMMM YYYY, dddd HH:mm"
                    },
                    calendar: {
                        sameDay: "[Bugun soat] LT [da]",
                        nextDay: "[Ertaga] LT [da]",
                        nextWeek: "dddd [kuni soat] LT [da]",
                        lastDay: "[Kecha soat] LT [da]",
                        lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "Yaqin %s ichida",
                        past: "Bir necha %s oldin",
                        s: "soniya",
                        ss: "%d soniya",
                        m: "bir daqiqa",
                        mm: "%d daqiqa",
                        h: "bir soat",
                        hh: "%d soat",
                        d: "bir kun",
                        dd: "%d kun",
                        M: "bir oy",
                        MM: "%d oy",
                        y: "bir yil",
                        yy: "%d yil"
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(a("wd/R"))
        },
        AX6q: function(e, t, a) {
            "use strict";
            var n = a("CDJp"),
                i = a("K2E3"),
                r = a("RDha"),
                s = a("fELs"),
                o = r.noop;

            function d(e, t) {
                return e.usePointStyle ? t * Math.SQRT2 : e.boxWidth
            }
            n._set("global", {
                legend: {
                    display: !0,
                    position: "top",
                    fullWidth: !0,
                    reverse: !1,
                    weight: 1e3,
                    onClick: function(e, t) {
                        var a = t.datasetIndex,
                            n = this.chart,
                            i = n.getDatasetMeta(a);
                        i.hidden = null === i.hidden ? !n.data.datasets[a].hidden : null, n.update()
                    },
                    onHover: null,
                    labels: {
                        boxWidth: 40,
                        padding: 10,
                        generateLabels: function(e) {
                            var t = e.data;
                            return r.isArray(t.datasets) ? t.datasets.map(function(t, a) {
                                return {
                                    text: t.label,
                                    fillStyle: r.isArray(t.backgroundColor) ? t.backgroundColor[0] : t.backgroundColor,
                                    hidden: !e.isDatasetVisible(a),
                                    lineCap: t.borderCapStyle,
                                    lineDash: t.borderDash,
                                    lineDashOffset: t.borderDashOffset,
                                    lineJoin: t.borderJoinStyle,
                                    lineWidth: t.borderWidth,
                                    strokeStyle: t.borderColor,
                                    pointStyle: t.pointStyle,
                                    datasetIndex: a
                                }
                            }, this) : []
                        }
                    }
                },
                legendCallback: function(e) {
                    var t = [];
                    t.push('<ul class="' + e.id + '-legend">');
                    for (var a = 0; a < e.data.datasets.length; a++) t.push('<li><span style="background-color:' + e.data.datasets[a].backgroundColor + '"></span>'), e.data.datasets[a].label && t.push(e.data.datasets[a].label), t.push("</li>");
                    return t.push("</ul>"), t.join("")
                }
            });
            var l = i.extend({
                initialize: function(e) {
                    r.extend(this, e), this.legendHitBoxes = [], this.doughnutMode = !1
                },
                beforeUpdate: o,
                update: function(e, t, a) {
                    var n = this;
                    return n.beforeUpdate(), n.maxWidth = e, n.maxHeight = t, n.margins = a, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize
                },
                afterUpdate: o,
                beforeSetDimensions: o,
                setDimensions: function() {
                    var e = this;
                    e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0, e.minSize = {
                        width: 0,
                        height: 0
                    }
                },
                afterSetDimensions: o,
                beforeBuildLabels: o,
                buildLabels: function() {
                    var e = this,
                        t = e.options.labels || {},
                        a = r.callback(t.generateLabels, [e.chart], e) || [];
                    t.filter && (a = a.filter(function(a) {
                        return t.filter(a, e.chart.data)
                    })), e.options.reverse && a.reverse(), e.legendItems = a
                },
                afterBuildLabels: o,
                beforeFit: o,
                fit: function() {
                    var e = this,
                        t = e.options,
                        a = t.labels,
                        i = t.display,
                        s = e.ctx,
                        o = n.global,
                        l = r.valueOrDefault,
                        u = l(a.fontSize, o.defaultFontSize),
                        _ = l(a.fontStyle, o.defaultFontStyle),
                        m = l(a.fontFamily, o.defaultFontFamily),
                        h = r.fontString(u, _, m),
                        c = e.legendHitBoxes = [],
                        f = e.minSize,
                        p = e.isHorizontal();
                    if (p ? (f.width = e.maxWidth, f.height = i ? 10 : 0) : (f.width = i ? 10 : 0, f.height = e.maxHeight), i)
                        if (s.font = h, p) {
                            var M = e.lineWidths = [0],
                                y = e.legendItems.length ? u + a.padding : 0;
                            s.textAlign = "left", s.textBaseline = "top", r.each(e.legendItems, function(t, n) {
                                var i = d(a, u) + u / 2 + s.measureText(t.text).width;
                                M[M.length - 1] + i + a.padding >= e.width && (y += u + a.padding, M[M.length] = e.left), c[n] = {
                                    left: 0,
                                    top: 0,
                                    width: i,
                                    height: u
                                }, M[M.length - 1] += i + a.padding
                            }), f.height += y
                        } else {
                            var g = a.padding,
                                L = e.columnWidths = [],
                                v = a.padding,
                                Y = 0,
                                k = 0,
                                b = u + g;
                            r.each(e.legendItems, function(e, t) {
                                var n = d(a, u) + u / 2 + s.measureText(e.text).width;
                                k + b > f.height && (v += Y + a.padding, L.push(Y), Y = 0, k = 0), Y = Math.max(Y, n), k += b, c[t] = {
                                    left: 0,
                                    top: 0,
                                    width: n,
                                    height: u
                                }
                            }), v += Y, L.push(Y), f.width += v
                        }
                    e.width = f.width, e.height = f.height
                },
                afterFit: o,
                isHorizontal: function() {
                    return "top" === this.options.position || "bottom" === this.options.position
                },
                draw: function() {
                    var e = this,
                        t = e.options,
                        a = t.labels,
                        i = n.global,
                        s = i.elements.line,
                        o = e.width,
                        l = e.lineWidths;
                    if (t.display) {
                        var u, _ = e.ctx,
                            m = r.valueOrDefault,
                            h = m(a.fontColor, i.defaultFontColor),
                            c = m(a.fontSize, i.defaultFontSize),
                            f = m(a.fontStyle, i.defaultFontStyle),
                            p = m(a.fontFamily, i.defaultFontFamily),
                            M = r.fontString(c, f, p);
                        _.textAlign = "left", _.textBaseline = "middle", _.lineWidth = .5, _.strokeStyle = h, _.fillStyle = h, _.font = M;
                        var y = d(a, c),
                            g = e.legendHitBoxes,
                            L = e.isHorizontal();
                        u = L ? {
                            x: e.left + (o - l[0]) / 2,
                            y: e.top + a.padding,
                            line: 0
                        } : {
                            x: e.left + a.padding,
                            y: e.top + a.padding,
                            line: 0
                        };
                        var v = c + a.padding;
                        r.each(e.legendItems, function(n, d) {
                            var h = _.measureText(n.text).width,
                                f = y + c / 2 + h,
                                p = u.x,
                                M = u.y;
                            L ? p + f >= o && (M = u.y += v, u.line++, p = u.x = e.left + (o - l[u.line]) / 2) : M + v > e.bottom && (p = u.x = p + e.columnWidths[u.line] + a.padding, M = u.y = e.top + a.padding, u.line++),
                                function(e, a, n) {
                                    if (!(isNaN(y) || y <= 0)) {
                                        _.save(), _.fillStyle = m(n.fillStyle, i.defaultColor), _.lineCap = m(n.lineCap, s.borderCapStyle), _.lineDashOffset = m(n.lineDashOffset, s.borderDashOffset), _.lineJoin = m(n.lineJoin, s.borderJoinStyle), _.lineWidth = m(n.lineWidth, s.borderWidth), _.strokeStyle = m(n.strokeStyle, i.defaultColor);
                                        var o = 0 === m(n.lineWidth, s.borderWidth);
                                        if (_.setLineDash && _.setLineDash(m(n.lineDash, s.borderDash)), t.labels && t.labels.usePointStyle) {
                                            var d = c * Math.SQRT2 / 2,
                                                l = d / Math.SQRT2;
                                            r.canvas.drawPoint(_, n.pointStyle, d, e + l, a + l)
                                        } else o || _.strokeRect(e, a, y, c), _.fillRect(e, a, y, c);
                                        _.restore()
                                    }
                                }(p, M, n), g[d].left = p, g[d].top = M,
                                function(e, t, a, n) {
                                    var i = c / 2,
                                        r = y + i + e,
                                        s = t + i;
                                    _.fillText(a.text, r, s), a.hidden && (_.beginPath(), _.lineWidth = 2, _.moveTo(r, s), _.lineTo(r + n, s), _.stroke())
                                }(p, M, n, h), L ? u.x += f + a.padding : u.y += v
                        })
                    }
                },
                handleEvent: function(e) {
                    var t = this,
                        a = t.options,
                        n = "mouseup" === e.type ? "click" : e.type,
                        i = !1;
                    if ("mousemove" === n) {
                        if (!a.onHover) return
                    } else {
                        if ("click" !== n) return;
                        if (!a.onClick) return
                    }
                    var r = e.x,
                        s = e.y;
                    if (r >= t.left && r <= t.right && s >= t.top && s <= t.bottom)
                        for (var o = t.legendHitBoxes, d = 0; d < o.length; ++d) {
                            var l = o[d];
                            if (r >= l.left && r <= l.left + l.width && s >= l.top && s <= l.top + l.height) {
                                if ("click" === n) {
                                    a.onClick.call(t, e.native, t.legendItems[d]), i = !0;
                                    break
                                }
                                if ("mousemove" === n) {
                                    a.onHover.call(t, e.native, t.legendItems[d]), i = !0;
                                    break
                                }
                            }
                        }
                    return i
                }
            });

            function u(e, t) {
                var a = new l({
                    ctx: e.ctx,
                    options: t,
                    chart: e
                });
                s.configure(e, a, t), s.addBox(e, a), e.legend = a
            }
            e.exports = {
                id: "legend",
                _element: l,
                beforeInit: function(e) {
                    var t = e.options.legend;
                    t && u(e, t)
                },
                beforeUpdate: function(e) {
                    var t = e.options.legend,
                        a = e.legend;
                    t ? (r.mergeIf(t, n.global.legend), a ? (s.configure(e, a, t), a.options = t) : u(e, t)) : a && (s.removeBox(e, a), delete e.legend)
                },
                afterEvent: function(e, t) {
                    var a = e.legend;
                    a && a.handleEvent(t)
                }
            }
        },
        As3K: function(e, t, a) {
            "use strict";
            var n = a("TC34");
            e.exports = {
                toLineHeight: function(e, t) {
                    var a = ("" + e).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
                    if (!a || "normal" === a[1]) return 1.2 * t;
                    switch (e = +a[2], a[3]) {
                        case "px":
                            return e;
                        case "%":
                            e /= 100
                    }
                    return t * e
                },
                toPadding: function(e) {
                    var t, a, i, r;
                    return n.isObject(e) ? (t = +e.top || 0, a = +e.right || 0, i = +e.bottom || 0, r = +e.left || 0) : t = a = i = r = +e || 0, {
                        top: t,
                        right: a,
                        bottom: i,
                        left: r,
                        height: t + i,
                        width: r + a
                    }
                },
                resolve: function(e, t, a) {
                    var i, r, s;
                    for (i = 0, r = e.length; i < r; ++i)
                        if (void 0 !== (s = e[i]) && (void 0 !== t && "function" == typeof s && (s = s(t)), void 0 !== a && n.isArray(s) && (s = s[a]), void 0 !== s)) return s
                }
            }
        },
        AvvY: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("ml", {
                    months: "\u0d1c\u0d28\u0d41\u0d35\u0d30\u0d3f_\u0d2b\u0d46\u0d2c\u0d4d\u0d30\u0d41\u0d35\u0d30\u0d3f_\u0d2e\u0d3e\u0d7c\u0d1a\u0d4d\u0d1a\u0d4d_\u0d0f\u0d2a\u0d4d\u0d30\u0d3f\u0d7d_\u0d2e\u0d47\u0d2f\u0d4d_\u0d1c\u0d42\u0d7a_\u0d1c\u0d42\u0d32\u0d48_\u0d13\u0d17\u0d38\u0d4d\u0d31\u0d4d\u0d31\u0d4d_\u0d38\u0d46\u0d2a\u0d4d\u0d31\u0d4d\u0d31\u0d02\u0d2c\u0d7c_\u0d12\u0d15\u0d4d\u0d1f\u0d4b\u0d2c\u0d7c_\u0d28\u0d35\u0d02\u0d2c\u0d7c_\u0d21\u0d3f\u0d38\u0d02\u0d2c\u0d7c".split("_"),
                    monthsShort: "\u0d1c\u0d28\u0d41._\u0d2b\u0d46\u0d2c\u0d4d\u0d30\u0d41._\u0d2e\u0d3e\u0d7c._\u0d0f\u0d2a\u0d4d\u0d30\u0d3f._\u0d2e\u0d47\u0d2f\u0d4d_\u0d1c\u0d42\u0d7a_\u0d1c\u0d42\u0d32\u0d48._\u0d13\u0d17._\u0d38\u0d46\u0d2a\u0d4d\u0d31\u0d4d\u0d31._\u0d12\u0d15\u0d4d\u0d1f\u0d4b._\u0d28\u0d35\u0d02._\u0d21\u0d3f\u0d38\u0d02.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "\u0d1e\u0d3e\u0d2f\u0d31\u0d3e\u0d34\u0d4d\u0d1a_\u0d24\u0d3f\u0d19\u0d4d\u0d15\u0d33\u0d3e\u0d34\u0d4d\u0d1a_\u0d1a\u0d4a\u0d35\u0d4d\u0d35\u0d3e\u0d34\u0d4d\u0d1a_\u0d2c\u0d41\u0d27\u0d28\u0d3e\u0d34\u0d4d\u0d1a_\u0d35\u0d4d\u0d2f\u0d3e\u0d34\u0d3e\u0d34\u0d4d\u0d1a_\u0d35\u0d46\u0d33\u0d4d\u0d33\u0d3f\u0d2f\u0d3e\u0d34\u0d4d\u0d1a_\u0d36\u0d28\u0d3f\u0d2f\u0d3e\u0d34\u0d4d\u0d1a".split("_"),
                    weekdaysShort: "\u0d1e\u0d3e\u0d2f\u0d7c_\u0d24\u0d3f\u0d19\u0d4d\u0d15\u0d7e_\u0d1a\u0d4a\u0d35\u0d4d\u0d35_\u0d2c\u0d41\u0d27\u0d7b_\u0d35\u0d4d\u0d2f\u0d3e\u0d34\u0d02_\u0d35\u0d46\u0d33\u0d4d\u0d33\u0d3f_\u0d36\u0d28\u0d3f".split("_"),
                    weekdaysMin: "\u0d1e\u0d3e_\u0d24\u0d3f_\u0d1a\u0d4a_\u0d2c\u0d41_\u0d35\u0d4d\u0d2f\u0d3e_\u0d35\u0d46_\u0d36".split("_"),
                    longDateFormat: {
                        LT: "A h:mm -\u0d28\u0d41",
                        LTS: "A h:mm:ss -\u0d28\u0d41",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, A h:mm -\u0d28\u0d41",
                        LLLL: "dddd, D MMMM YYYY, A h:mm -\u0d28\u0d41"
                    },
                    calendar: {
                        sameDay: "[\u0d07\u0d28\u0d4d\u0d28\u0d4d] LT",
                        nextDay: "[\u0d28\u0d3e\u0d33\u0d46] LT",
                        nextWeek: "dddd, LT",
                        lastDay: "[\u0d07\u0d28\u0d4d\u0d28\u0d32\u0d46] LT",
                        lastWeek: "[\u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e] dddd, LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d",
                        past: "%s \u0d2e\u0d41\u0d7b\u0d2a\u0d4d",
                        s: "\u0d05\u0d7d\u0d2a \u0d28\u0d3f\u0d2e\u0d3f\u0d37\u0d19\u0d4d\u0d19\u0d7e",
                        ss: "%d \u0d38\u0d46\u0d15\u0d4d\u0d15\u0d7b\u0d21\u0d4d",
                        m: "\u0d12\u0d30\u0d41 \u0d2e\u0d3f\u0d28\u0d3f\u0d31\u0d4d\u0d31\u0d4d",
                        mm: "%d \u0d2e\u0d3f\u0d28\u0d3f\u0d31\u0d4d\u0d31\u0d4d",
                        h: "\u0d12\u0d30\u0d41 \u0d2e\u0d23\u0d3f\u0d15\u0d4d\u0d15\u0d42\u0d7c",
                        hh: "%d \u0d2e\u0d23\u0d3f\u0d15\u0d4d\u0d15\u0d42\u0d7c",
                        d: "\u0d12\u0d30\u0d41 \u0d26\u0d3f\u0d35\u0d38\u0d02",
                        dd: "%d \u0d26\u0d3f\u0d35\u0d38\u0d02",
                        M: "\u0d12\u0d30\u0d41 \u0d2e\u0d3e\u0d38\u0d02",
                        MM: "%d \u0d2e\u0d3e\u0d38\u0d02",
                        y: "\u0d12\u0d30\u0d41 \u0d35\u0d7c\u0d37\u0d02",
                        yy: "%d \u0d35\u0d7c\u0d37\u0d02"
                    },
                    meridiemParse: /\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f|\u0d30\u0d3e\u0d35\u0d3f\u0d32\u0d46|\u0d09\u0d1a\u0d4d\u0d1a \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d|\u0d35\u0d48\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d47\u0d30\u0d02|\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f/i,
                    meridiemHour: function(e, t) {
                        return 12 === e && (e = 0), "\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f" === t && e >= 4 || "\u0d09\u0d1a\u0d4d\u0d1a \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d" === t || "\u0d35\u0d48\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d47\u0d30\u0d02" === t ? e + 12 : e
                    },
                    meridiem: function(e, t, a) {
                        return e < 4 ? "\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f" : e < 12 ? "\u0d30\u0d3e\u0d35\u0d3f\u0d32\u0d46" : e < 17 ? "\u0d09\u0d1a\u0d4d\u0d1a \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d" : e < 20 ? "\u0d35\u0d48\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d47\u0d30\u0d02" : "\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f"
                    }
                })
            }(a("wd/R"))
        },
        B55N: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("ja", {
                    months: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
                    monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
                    weekdays: "\u65e5\u66dc\u65e5_\u6708\u66dc\u65e5_\u706b\u66dc\u65e5_\u6c34\u66dc\u65e5_\u6728\u66dc\u65e5_\u91d1\u66dc\u65e5_\u571f\u66dc\u65e5".split("_"),
                    weekdaysShort: "\u65e5_\u6708_\u706b_\u6c34_\u6728_\u91d1_\u571f".split("_"),
                    weekdaysMin: "\u65e5_\u6708_\u706b_\u6c34_\u6728_\u91d1_\u571f".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "YYYY/MM/DD",
                        LL: "YYYY\u5e74M\u6708D\u65e5",
                        LLL: "YYYY\u5e74M\u6708D\u65e5 HH:mm",
                        LLLL: "YYYY\u5e74M\u6708D\u65e5 dddd HH:mm",
                        l: "YYYY/MM/DD",
                        ll: "YYYY\u5e74M\u6708D\u65e5",
                        lll: "YYYY\u5e74M\u6708D\u65e5 HH:mm",
                        llll: "YYYY\u5e74M\u6708D\u65e5(ddd) HH:mm"
                    },
                    meridiemParse: /\u5348\u524d|\u5348\u5f8c/i,
                    isPM: function(e) {
                        return "\u5348\u5f8c" === e
                    },
                    meridiem: function(e, t, a) {
                        return e < 12 ? "\u5348\u524d" : "\u5348\u5f8c"
                    },
                    calendar: {
                        sameDay: "[\u4eca\u65e5] LT",
                        nextDay: "[\u660e\u65e5] LT",
                        nextWeek: function(e) {
                            return e.week() < this.week() ? "[\u6765\u9031]dddd LT" : "dddd LT"
                        },
                        lastDay: "[\u6628\u65e5] LT",
                        lastWeek: function(e) {
                            return this.week() < e.week() ? "[\u5148\u9031]dddd LT" : "dddd LT"
                        },
                        sameElse: "L"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\u65e5/,
                    ordinal: function(e, t) {
                        switch (t) {
                            case "d":
                            case "D":
                            case "DDD":
                                return e + "\u65e5";
                            default:
                                return e
                        }
                    },
                    relativeTime: {
                        future: "%s\u5f8c",
                        past: "%s\u524d",
                        s: "\u6570\u79d2",
                        ss: "%d\u79d2",
                        m: "1\u5206",
                        mm: "%d\u5206",
                        h: "1\u6642\u9593",
                        hh: "%d\u6642\u9593",
                        d: "1\u65e5",
                        dd: "%d\u65e5",
                        M: "1\u30f6\u6708",
                        MM: "%d\u30f6\u6708",
                        y: "1\u5e74",
                        yy: "%d\u5e74"
                    }
                })
            }(a("wd/R"))
        },
        BVg3: function(e, t, a) {
            ! function(e) {
                "use strict";

                function t(e) {
                    return e % 100 == 11 || e % 10 != 1
                }

                function a(e, a, n, i) {
                    var r = e + " ";
                    switch (n) {
                        case "s":
                            return a || i ? "nokkrar sek\xfandur" : "nokkrum sek\xfandum";
                        case "ss":
                            return t(e) ? r + (a || i ? "sek\xfandur" : "sek\xfandum") : r + "sek\xfanda";
                        case "m":
                            return a ? "m\xedn\xfata" : "m\xedn\xfatu";
                        case "mm":
                            return t(e) ? r + (a || i ? "m\xedn\xfatur" : "m\xedn\xfatum") : a ? r + "m\xedn\xfata" : r + "m\xedn\xfatu";
                        case "hh":
                            return t(e) ? r + (a || i ? "klukkustundir" : "klukkustundum") : r + "klukkustund";
                        case "d":
                            return a ? "dagur" : i ? "dag" : "degi";
                        case "dd":
                            return t(e) ? a ? r + "dagar" : r + (i ? "daga" : "d\xf6gum") : a ? r + "dagur" : r + (i ? "dag" : "degi");
                        case "M":
                            return a ? "m\xe1nu\xf0ur" : i ? "m\xe1nu\xf0" : "m\xe1nu\xf0i";
                        case "MM":
                            return t(e) ? a ? r + "m\xe1nu\xf0ir" : r + (i ? "m\xe1nu\xf0i" : "m\xe1nu\xf0um") : a ? r + "m\xe1nu\xf0ur" : r + (i ? "m\xe1nu\xf0" : "m\xe1nu\xf0i");
                        case "y":
                            return a || i ? "\xe1r" : "\xe1ri";
                        case "yy":
                            return t(e) ? r + (a || i ? "\xe1r" : "\xe1rum") : r + (a || i ? "\xe1r" : "\xe1ri")
                    }
                }
                e.defineLocale("is", {
                    months: "jan\xfaar_febr\xfaar_mars_apr\xedl_ma\xed_j\xfan\xed_j\xfal\xed_\xe1g\xfast_september_okt\xf3ber_n\xf3vember_desember".split("_"),
                    monthsShort: "jan_feb_mar_apr_ma\xed_j\xfan_j\xfal_\xe1g\xfa_sep_okt_n\xf3v_des".split("_"),
                    weekdays: "sunnudagur_m\xe1nudagur_\xferi\xf0judagur_mi\xf0vikudagur_fimmtudagur_f\xf6studagur_laugardagur".split("_"),
                    weekdaysShort: "sun_m\xe1n_\xferi_mi\xf0_fim_f\xf6s_lau".split("_"),
                    weekdaysMin: "Su_M\xe1_\xder_Mi_Fi_F\xf6_La".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY [kl.] H:mm",
                        LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
                    },
                    calendar: {
                        sameDay: "[\xed dag kl.] LT",
                        nextDay: "[\xe1 morgun kl.] LT",
                        nextWeek: "dddd [kl.] LT",
                        lastDay: "[\xed g\xe6r kl.] LT",
                        lastWeek: "[s\xed\xf0asta] dddd [kl.] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "eftir %s",
                        past: "fyrir %s s\xed\xf0an",
                        s: a,
                        ss: a,
                        m: a,
                        mm: a,
                        h: "klukkustund",
                        hh: a,
                        d: a,
                        dd: a,
                        M: a,
                        MM: a,
                        y: a,
                        yy: a
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(a("wd/R"))
        },
        ByF4: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("fo", {
                    months: "januar_februar_mars_apr\xedl_mai_juni_juli_august_september_oktober_november_desember".split("_"),
                    monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
                    weekdays: "sunnudagur_m\xe1nadagur_t\xfdsdagur_mikudagur_h\xf3sdagur_fr\xedggjadagur_leygardagur".split("_"),
                    weekdaysShort: "sun_m\xe1n_t\xfds_mik_h\xf3s_fr\xed_ley".split("_"),
                    weekdaysMin: "su_m\xe1_t\xfd_mi_h\xf3_fr_le".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D. MMMM, YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[\xcd dag kl.] LT",
                        nextDay: "[\xcd morgin kl.] LT",
                        nextWeek: "dddd [kl.] LT",
                        lastDay: "[\xcd gj\xe1r kl.] LT",
                        lastWeek: "[s\xed\xf0stu] dddd [kl] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "um %s",
                        past: "%s s\xed\xf0ani",
                        s: "f\xe1 sekund",
                        ss: "%d sekundir",
                        m: "ein minutt",
                        mm: "%d minuttir",
                        h: "ein t\xedmi",
                        hh: "%d t\xedmar",
                        d: "ein dagur",
                        dd: "%d dagar",
                        M: "ein m\xe1na\xf0i",
                        MM: "%d m\xe1na\xf0ir",
                        y: "eitt \xe1r",
                        yy: "%d \xe1r"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(a("wd/R"))
        },
        CDJp: function(e, t, a) {
            "use strict";
            var n = a("RDha");
            e.exports = {
                _set: function(e, t) {
                    return n.merge(this[e] || (this[e] = {}), t)
                }
            }
        },
        CjzT: function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
                    a = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
                    n = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
                    i = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
                e.defineLocale("es-do", {
                    months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
                    monthsShort: function(e, n) {
                        return e ? /-MMM-/.test(n) ? a[e.month()] : t[e.month()] : t
                    },
                    monthsRegex: i,
                    monthsShortRegex: i,
                    monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
                    monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
                    monthsParse: n,
                    longMonthsParse: n,
                    shortMonthsParse: n,
                    weekdays: "domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado".split("_"),
                    weekdaysShort: "dom._lun._mar._mi\xe9._jue._vie._s\xe1b.".split("_"),
                    weekdaysMin: "do_lu_ma_mi_ju_vi_s\xe1".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "h:mm A",
                        LTS: "h:mm:ss A",
                        L: "DD/MM/YYYY",
                        LL: "D [de] MMMM [de] YYYY",
                        LLL: "D [de] MMMM [de] YYYY h:mm A",
                        LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
                    },
                    calendar: {
                        sameDay: function() {
                            return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        nextDay: function() {
                            return "[ma\xf1ana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        nextWeek: function() {
                            return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        lastDay: function() {
                            return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        lastWeek: function() {
                            return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "en %s",
                        past: "hace %s",
                        s: "unos segundos",
                        ss: "%d segundos",
                        m: "un minuto",
                        mm: "%d minutos",
                        h: "una hora",
                        hh: "%d horas",
                        d: "un d\xeda",
                        dd: "%d d\xedas",
                        M: "un mes",
                        MM: "%d meses",
                        y: "un a\xf1o",
                        yy: "%d a\xf1os"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\xba/,
                    ordinal: "%d\xba",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(a("wd/R"))
        },
        CoRJ: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("ar-ma", {
                    months: "\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648\u0632_\u063a\u0634\u062a_\u0634\u062a\u0646\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0646\u0628\u0631_\u062f\u062c\u0646\u0628\u0631".split("_"),
                    monthsShort: "\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648\u0632_\u063a\u0634\u062a_\u0634\u062a\u0646\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0646\u0628\u0631_\u062f\u062c\u0646\u0628\u0631".split("_"),
                    weekdays: "\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062a\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"),
                    weekdaysShort: "\u0627\u062d\u062f_\u0627\u062a\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"),
                    weekdaysMin: "\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                        nextDay: "[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                        nextWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                        lastDay: "[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                        lastWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "\u0641\u064a %s",
                        past: "\u0645\u0646\u0630 %s",
                        s: "\u062b\u0648\u0627\u0646",
                        ss: "%d \u062b\u0627\u0646\u064a\u0629",
                        m: "\u062f\u0642\u064a\u0642\u0629",
                        mm: "%d \u062f\u0642\u0627\u0626\u0642",
                        h: "\u0633\u0627\u0639\u0629",
                        hh: "%d \u0633\u0627\u0639\u0627\u062a",
                        d: "\u064a\u0648\u0645",
                        dd: "%d \u0623\u064a\u0627\u0645",
                        M: "\u0634\u0647\u0631",
                        MM: "%d \u0623\u0634\u0647\u0631",
                        y: "\u0633\u0646\u0629",
                        yy: "%d \u0633\u0646\u0648\u0627\u062a"
                    },
                    week: {
                        dow: 6,
                        doy: 12
                    }
                })
            }(a("wd/R"))
        },
        "D/JM": function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("eu", {
                    months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
                    monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
                    weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
                    weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "YYYY-MM-DD",
                        LL: "YYYY[ko] MMMM[ren] D[a]",
                        LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
                        LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
                        l: "YYYY-M-D",
                        ll: "YYYY[ko] MMM D[a]",
                        lll: "YYYY[ko] MMM D[a] HH:mm",
                        llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
                    },
                    calendar: {
                        sameDay: "[gaur] LT[etan]",
                        nextDay: "[bihar] LT[etan]",
                        nextWeek: "dddd LT[etan]",
                        lastDay: "[atzo] LT[etan]",
                        lastWeek: "[aurreko] dddd LT[etan]",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s barru",
                        past: "duela %s",
                        s: "segundo batzuk",
                        ss: "%d segundo",
                        m: "minutu bat",
                        mm: "%d minutu",
                        h: "ordu bat",
                        hh: "%d ordu",
                        d: "egun bat",
                        dd: "%d egun",
                        M: "hilabete bat",
                        MM: "%d hilabete",
                        y: "urte bat",
                        yy: "%d urte"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(a("wd/R"))
        },
        "DKr+": function(e, t, a) {
            ! function(e) {
                "use strict";

                function t(e, t, a, n) {
                    var i = {
                        s: ["thodde secondanim", "thodde second"],
                        ss: [e + " secondanim", e + " second"],
                        m: ["eka mintan", "ek minute"],
                        mm: [e + " mintanim", e + " mintam"],
                        h: ["eka horan", "ek hor"],
                        hh: [e + " horanim", e + " horam"],
                        d: ["eka disan", "ek dis"],
                        dd: [e + " disanim", e + " dis"],
                        M: ["eka mhoinean", "ek mhoino"],
                        MM: [e + " mhoineanim", e + " mhoine"],
                        y: ["eka vorsan", "ek voros"],
                        yy: [e + " vorsanim", e + " vorsam"]
                    };
                    return t ? i[a][0] : i[a][1]
                }
                e.defineLocale("gom-latn", {
                    months: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),
                    monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split("_"),
                    weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),
                    weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "A h:mm [vazta]",
                        LTS: "A h:mm:ss [vazta]",
                        L: "DD-MM-YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY A h:mm [vazta]",
                        LLLL: "dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]",
                        llll: "ddd, D MMM YYYY, A h:mm [vazta]"
                    },
                    calendar: {
                        sameDay: "[Aiz] LT",
                        nextDay: "[Faleam] LT",
                        nextWeek: "[Ieta to] dddd[,] LT",
                        lastDay: "[Kal] LT",
                        lastWeek: "[Fatlo] dddd[,] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s",
                        past: "%s adim",
                        s: t,
                        ss: t,
                        m: t,
                        mm: t,
                        h: t,
                        hh: t,
                        d: t,
                        dd: t,
                        M: t,
                        MM: t,
                        y: t,
                        yy: t
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(er)/,
                    ordinal: function(e, t) {
                        switch (t) {
                            case "D":
                                return e + "er";
                            default:
                            case "M":
                            case "Q":
                            case "DDD":
                            case "d":
                            case "w":
                            case "W":
                                return e
                        }
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    },
                    meridiemParse: /rati|sokalli|donparam|sanje/,
                    meridiemHour: function(e, t) {
                        return 12 === e && (e = 0), "rati" === t ? e < 4 ? e : e + 12 : "sokalli" === t ? e : "donparam" === t ? e > 12 ? e : e + 12 : "sanje" === t ? e + 12 : void 0
                    },
                    meridiem: function(e, t, a) {
                        return e < 4 ? "rati" : e < 12 ? "sokalli" : e < 16 ? "donparam" : e < 20 ? "sanje" : "rati"
                    }
                })
            }(a("wd/R"))
        },
        Dkky: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("fr-ch", {
                    months: "janvier_f\xe9vrier_mars_avril_mai_juin_juillet_ao\xfbt_septembre_octobre_novembre_d\xe9cembre".split("_"),
                    monthsShort: "janv._f\xe9vr._mars_avr._mai_juin_juil._ao\xfbt_sept._oct._nov._d\xe9c.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
                    weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
                    weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[Aujourd\u2019hui \xe0] LT",
                        nextDay: "[Demain \xe0] LT",
                        nextWeek: "dddd [\xe0] LT",
                        lastDay: "[Hier \xe0] LT",
                        lastWeek: "dddd [dernier \xe0] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "dans %s",
                        past: "il y a %s",
                        s: "quelques secondes",
                        ss: "%d secondes",
                        m: "une minute",
                        mm: "%d minutes",
                        h: "une heure",
                        hh: "%d heures",
                        d: "un jour",
                        dd: "%d jours",
                        M: "un mois",
                        MM: "%d mois",
                        y: "un an",
                        yy: "%d ans"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
                    ordinal: function(e, t) {
                        switch (t) {
                            default:
                                case "M":
                                case "Q":
                                case "D":
                                case "DDD":
                                case "d":
                                return e + (1 === e ? "er" : "e");
                            case "w":
                                    case "W":
                                    return e + (1 === e ? "re" : "e")
                        }
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(a("wd/R"))
        },
        Dmvi: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("en-au", {
                    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                    monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                    weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                    weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                    longDateFormat: {
                        LT: "h:mm A",
                        LTS: "h:mm:ss A",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY h:mm A",
                        LLLL: "dddd, D MMMM YYYY h:mm A"
                    },
                    calendar: {
                        sameDay: "[Today at] LT",
                        nextDay: "[Tomorrow at] LT",
                        nextWeek: "dddd [at] LT",
                        lastDay: "[Yesterday at] LT",
                        lastWeek: "[Last] dddd [at] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "in %s",
                        past: "%s ago",
                        s: "a few seconds",
                        ss: "%d seconds",
                        m: "a minute",
                        mm: "%d minutes",
                        h: "an hour",
                        hh: "%d hours",
                        d: "a day",
                        dd: "%d days",
                        M: "a month",
                        MM: "%d months",
                        y: "a year",
                        yy: "%d years"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                    ordinal: function(e) {
                        var t = e % 10;
                        return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(a("wd/R"))
        },
        DoHr: function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = {
                    1: "'inci",
                    5: "'inci",
                    8: "'inci",
                    70: "'inci",
                    80: "'inci",
                    2: "'nci",
                    7: "'nci",
                    20: "'nci",
                    50: "'nci",
                    3: "'\xfcnc\xfc",
                    4: "'\xfcnc\xfc",
                    100: "'\xfcnc\xfc",
                    6: "'nc\u0131",
                    9: "'uncu",
                    10: "'uncu",
                    30: "'uncu",
                    60: "'\u0131nc\u0131",
                    90: "'\u0131nc\u0131"
                };
                e.defineLocale("tr", {
                    months: "Ocak_\u015eubat_Mart_Nisan_May\u0131s_Haziran_Temmuz_A\u011fustos_Eyl\xfcl_Ekim_Kas\u0131m_Aral\u0131k".split("_"),
                    monthsShort: "Oca_\u015eub_Mar_Nis_May_Haz_Tem_A\u011fu_Eyl_Eki_Kas_Ara".split("_"),
                    weekdays: "Pazar_Pazartesi_Sal\u0131_\xc7ar\u015famba_Per\u015fembe_Cuma_Cumartesi".split("_"),
                    weekdaysShort: "Paz_Pts_Sal_\xc7ar_Per_Cum_Cts".split("_"),
                    weekdaysMin: "Pz_Pt_Sa_\xc7a_Pe_Cu_Ct".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[bug\xfcn saat] LT",
                        nextDay: "[yar\u0131n saat] LT",
                        nextWeek: "[gelecek] dddd [saat] LT",
                        lastDay: "[d\xfcn] LT",
                        lastWeek: "[ge\xe7en] dddd [saat] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s sonra",
                        past: "%s \xf6nce",
                        s: "birka\xe7 saniye",
                        ss: "%d saniye",
                        m: "bir dakika",
                        mm: "%d dakika",
                        h: "bir saat",
                        hh: "%d saat",
                        d: "bir g\xfcn",
                        dd: "%d g\xfcn",
                        M: "bir ay",
                        MM: "%d ay",
                        y: "bir y\u0131l",
                        yy: "%d y\u0131l"
                    },
                    ordinal: function(e, a) {
                        switch (a) {
                            case "d":
                            case "D":
                            case "Do":
                            case "DD":
                                return e;
                            default:
                                if (0 === e) return e + "'\u0131nc\u0131";
                                var n = e % 10;
                                return e + (t[n] || t[e % 100 - n] || t[e >= 100 ? 100 : null])
                        }
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(a("wd/R"))
        },
        DxQv: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("da", {
                    months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
                    monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
                    weekdays: "s\xf8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\xf8rdag".split("_"),
                    weekdaysShort: "s\xf8n_man_tir_ons_tor_fre_l\xf8r".split("_"),
                    weekdaysMin: "s\xf8_ma_ti_on_to_fr_l\xf8".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY HH:mm",
                        LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm"
                    },
                    calendar: {
                        sameDay: "[i dag kl.] LT",
                        nextDay: "[i morgen kl.] LT",
                        nextWeek: "p\xe5 dddd [kl.] LT",
                        lastDay: "[i g\xe5r kl.] LT",
                        lastWeek: "[i] dddd[s kl.] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "om %s",
                        past: "%s siden",
                        s: "f\xe5 sekunder",
                        ss: "%d sekunder",
                        m: "et minut",
                        mm: "%d minutter",
                        h: "en time",
                        hh: "%d timer",
                        d: "en dag",
                        dd: "%d dage",
                        M: "en m\xe5ned",
                        MM: "%d m\xe5neder",
                        y: "et \xe5r",
                        yy: "%d \xe5r"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(a("wd/R"))
        },
        Dzi0: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("tl-ph", {
                    months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
                    monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
                    weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
                    weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
                    weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "MM/D/YYYY",
                        LL: "MMMM D, YYYY",
                        LLL: "MMMM D, YYYY HH:mm",
                        LLLL: "dddd, MMMM DD, YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "LT [ngayong araw]",
                        nextDay: "[Bukas ng] LT",
                        nextWeek: "LT [sa susunod na] dddd",
                        lastDay: "LT [kahapon]",
                        lastWeek: "LT [noong nakaraang] dddd",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "sa loob ng %s",
                        past: "%s ang nakalipas",
                        s: "ilang segundo",
                        ss: "%d segundo",
                        m: "isang minuto",
                        mm: "%d minuto",
                        h: "isang oras",
                        hh: "%d oras",
                        d: "isang araw",
                        dd: "%d araw",
                        M: "isang buwan",
                        MM: "%d buwan",
                        y: "isang taon",
                        yy: "%d taon"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}/,
                    ordinal: function(e) {
                        return e
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(a("wd/R"))
        },
        "E+lV": function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = {
                    words: {
                        ss: ["\u0441\u0435\u043a\u0443\u043d\u0434\u0430", "\u0441\u0435\u043a\u0443\u043d\u0434\u0435", "\u0441\u0435\u043a\u0443\u043d\u0434\u0438"],
                        m: ["\u0458\u0435\u0434\u0430\u043d \u043c\u0438\u043d\u0443\u0442", "\u0458\u0435\u0434\u043d\u0435 \u043c\u0438\u043d\u0443\u0442\u0435"],
                        mm: ["\u043c\u0438\u043d\u0443\u0442", "\u043c\u0438\u043d\u0443\u0442\u0435", "\u043c\u0438\u043d\u0443\u0442\u0430"],
                        h: ["\u0458\u0435\u0434\u0430\u043d \u0441\u0430\u0442", "\u0458\u0435\u0434\u043d\u043e\u0433 \u0441\u0430\u0442\u0430"],
                        hh: ["\u0441\u0430\u0442", "\u0441\u0430\u0442\u0430", "\u0441\u0430\u0442\u0438"],
                        dd: ["\u0434\u0430\u043d", "\u0434\u0430\u043d\u0430", "\u0434\u0430\u043d\u0430"],
                        MM: ["\u043c\u0435\u0441\u0435\u0446", "\u043c\u0435\u0441\u0435\u0446\u0430", "\u043c\u0435\u0441\u0435\u0446\u0438"],
                        yy: ["\u0433\u043e\u0434\u0438\u043d\u0430", "\u0433\u043e\u0434\u0438\u043d\u0435", "\u0433\u043e\u0434\u0438\u043d\u0430"]
                    },
                    correctGrammaticalCase: function(e, t) {
                        return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
                    },
                    translate: function(e, a, n) {
                        var i = t.words[n];
                        return 1 === n.length ? a ? i[0] : i[1] : e + " " + t.correctGrammaticalCase(e, i)
                    }
                };
                e.defineLocale("sr-cyrl", {
                    months: "\u0458\u0430\u043d\u0443\u0430\u0440_\u0444\u0435\u0431\u0440\u0443\u0430\u0440_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0438\u043b_\u043c\u0430\u0458_\u0458\u0443\u043d_\u0458\u0443\u043b_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043f\u0442\u0435\u043c\u0431\u0430\u0440_\u043e\u043a\u0442\u043e\u0431\u0430\u0440_\u043d\u043e\u0432\u0435\u043c\u0431\u0430\u0440_\u0434\u0435\u0446\u0435\u043c\u0431\u0430\u0440".split("_"),
                    monthsShort: "\u0458\u0430\u043d._\u0444\u0435\u0431._\u043c\u0430\u0440._\u0430\u043f\u0440._\u043c\u0430\u0458_\u0458\u0443\u043d_\u0458\u0443\u043b_\u0430\u0432\u0433._\u0441\u0435\u043f._\u043e\u043a\u0442._\u043d\u043e\u0432._\u0434\u0435\u0446.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "\u043d\u0435\u0434\u0435\u0459\u0430_\u043f\u043e\u043d\u0435\u0434\u0435\u0459\u0430\u043a_\u0443\u0442\u043e\u0440\u0430\u043a_\u0441\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0440\u0442\u0430\u043a_\u043f\u0435\u0442\u0430\u043a_\u0441\u0443\u0431\u043e\u0442\u0430".split("_"),
                    weekdaysShort: "\u043d\u0435\u0434._\u043f\u043e\u043d._\u0443\u0442\u043e._\u0441\u0440\u0435._\u0447\u0435\u0442._\u043f\u0435\u0442._\u0441\u0443\u0431.".split("_"),
                    weekdaysMin: "\u043d\u0435_\u043f\u043e_\u0443\u0442_\u0441\u0440_\u0447\u0435_\u043f\u0435_\u0441\u0443".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY H:mm",
                        LLLL: "dddd, D. MMMM YYYY H:mm"
                    },
                    calendar: {
                        sameDay: "[\u0434\u0430\u043d\u0430\u0441 \u0443] LT",
                        nextDay: "[\u0441\u0443\u0442\u0440\u0430 \u0443] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[\u0443] [\u043d\u0435\u0434\u0435\u0459\u0443] [\u0443] LT";
                                case 3:
                                    return "[\u0443] [\u0441\u0440\u0435\u0434\u0443] [\u0443] LT";
                                case 6:
                                    return "[\u0443] [\u0441\u0443\u0431\u043e\u0442\u0443] [\u0443] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[\u0443] dddd [\u0443] LT"
                            }
                        },
                        lastDay: "[\u0458\u0443\u0447\u0435 \u0443] LT",
                        lastWeek: function() {
                            return ["[\u043f\u0440\u043e\u0448\u043b\u0435] [\u043d\u0435\u0434\u0435\u0459\u0435] [\u0443] LT", "[\u043f\u0440\u043e\u0448\u043b\u043e\u0433] [\u043f\u043e\u043d\u0435\u0434\u0435\u0459\u043a\u0430] [\u0443] LT", "[\u043f\u0440\u043e\u0448\u043b\u043e\u0433] [\u0443\u0442\u043e\u0440\u043a\u0430] [\u0443] LT", "[\u043f\u0440\u043e\u0448\u043b\u0435] [\u0441\u0440\u0435\u0434\u0435] [\u0443] LT", "[\u043f\u0440\u043e\u0448\u043b\u043e\u0433] [\u0447\u0435\u0442\u0432\u0440\u0442\u043a\u0430] [\u0443] LT", "[\u043f\u0440\u043e\u0448\u043b\u043e\u0433] [\u043f\u0435\u0442\u043a\u0430] [\u0443] LT", "[\u043f\u0440\u043e\u0448\u043b\u0435] [\u0441\u0443\u0431\u043e\u0442\u0435] [\u0443] LT"][this.day()]
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "\u0437\u0430 %s",
                        past: "\u043f\u0440\u0435 %s",
                        s: "\u043d\u0435\u043a\u043e\u043b\u0438\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434\u0438",
                        ss: t.translate,
                        m: t.translate,
                        mm: t.translate,
                        h: t.translate,
                        hh: t.translate,
                        d: "\u0434\u0430\u043d",
                        dd: t.translate,
                        M: "\u043c\u0435\u0441\u0435\u0446",
                        MM: t.translate,
                        y: "\u0433\u043e\u0434\u0438\u043d\u0443",
                        yy: t.translate
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(a("wd/R"))
        },
        EOgW: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("th", {
                    months: "\u0e21\u0e01\u0e23\u0e32\u0e04\u0e21_\u0e01\u0e38\u0e21\u0e20\u0e32\u0e1e\u0e31\u0e19\u0e18\u0e4c_\u0e21\u0e35\u0e19\u0e32\u0e04\u0e21_\u0e40\u0e21\u0e29\u0e32\u0e22\u0e19_\u0e1e\u0e24\u0e29\u0e20\u0e32\u0e04\u0e21_\u0e21\u0e34\u0e16\u0e38\u0e19\u0e32\u0e22\u0e19_\u0e01\u0e23\u0e01\u0e0e\u0e32\u0e04\u0e21_\u0e2a\u0e34\u0e07\u0e2b\u0e32\u0e04\u0e21_\u0e01\u0e31\u0e19\u0e22\u0e32\u0e22\u0e19_\u0e15\u0e38\u0e25\u0e32\u0e04\u0e21_\u0e1e\u0e24\u0e28\u0e08\u0e34\u0e01\u0e32\u0e22\u0e19_\u0e18\u0e31\u0e19\u0e27\u0e32\u0e04\u0e21".split("_"),
                    monthsShort: "\u0e21.\u0e04._\u0e01.\u0e1e._\u0e21\u0e35.\u0e04._\u0e40\u0e21.\u0e22._\u0e1e.\u0e04._\u0e21\u0e34.\u0e22._\u0e01.\u0e04._\u0e2a.\u0e04._\u0e01.\u0e22._\u0e15.\u0e04._\u0e1e.\u0e22._\u0e18.\u0e04.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c_\u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c_\u0e2d\u0e31\u0e07\u0e04\u0e32\u0e23_\u0e1e\u0e38\u0e18_\u0e1e\u0e24\u0e2b\u0e31\u0e2a\u0e1a\u0e14\u0e35_\u0e28\u0e38\u0e01\u0e23\u0e4c_\u0e40\u0e2a\u0e32\u0e23\u0e4c".split("_"),
                    weekdaysShort: "\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c_\u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c_\u0e2d\u0e31\u0e07\u0e04\u0e32\u0e23_\u0e1e\u0e38\u0e18_\u0e1e\u0e24\u0e2b\u0e31\u0e2a_\u0e28\u0e38\u0e01\u0e23\u0e4c_\u0e40\u0e2a\u0e32\u0e23\u0e4c".split("_"),
                    weekdaysMin: "\u0e2d\u0e32._\u0e08._\u0e2d._\u0e1e._\u0e1e\u0e24._\u0e28._\u0e2a.".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY \u0e40\u0e27\u0e25\u0e32 H:mm",
                        LLLL: "\u0e27\u0e31\u0e19dddd\u0e17\u0e35\u0e48 D MMMM YYYY \u0e40\u0e27\u0e25\u0e32 H:mm"
                    },
                    meridiemParse: /\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07|\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07/,
                    isPM: function(e) {
                        return "\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07" === e
                    },
                    meridiem: function(e, t, a) {
                        return e < 12 ? "\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07" : "\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07"
                    },
                    calendar: {
                        sameDay: "[\u0e27\u0e31\u0e19\u0e19\u0e35\u0e49 \u0e40\u0e27\u0e25\u0e32] LT",
                        nextDay: "[\u0e1e\u0e23\u0e38\u0e48\u0e07\u0e19\u0e35\u0e49 \u0e40\u0e27\u0e25\u0e32] LT",
                        nextWeek: "dddd[\u0e2b\u0e19\u0e49\u0e32 \u0e40\u0e27\u0e25\u0e32] LT",
                        lastDay: "[\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e27\u0e32\u0e19\u0e19\u0e35\u0e49 \u0e40\u0e27\u0e25\u0e32] LT",
                        lastWeek: "[\u0e27\u0e31\u0e19]dddd[\u0e17\u0e35\u0e48\u0e41\u0e25\u0e49\u0e27 \u0e40\u0e27\u0e25\u0e32] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "\u0e2d\u0e35\u0e01 %s",
                        past: "%s\u0e17\u0e35\u0e48\u0e41\u0e25\u0e49\u0e27",
                        s: "\u0e44\u0e21\u0e48\u0e01\u0e35\u0e48\u0e27\u0e34\u0e19\u0e32\u0e17\u0e35",
                        ss: "%d \u0e27\u0e34\u0e19\u0e32\u0e17\u0e35",
                        m: "1 \u0e19\u0e32\u0e17\u0e35",
                        mm: "%d \u0e19\u0e32\u0e17\u0e35",
                        h: "1 \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07",
                        hh: "%d \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07",
                        d: "1 \u0e27\u0e31\u0e19",
                        dd: "%d \u0e27\u0e31\u0e19",
                        M: "1 \u0e40\u0e14\u0e37\u0e2d\u0e19",
                        MM: "%d \u0e40\u0e14\u0e37\u0e2d\u0e19",
                        y: "1 \u0e1b\u0e35",
                        yy: "%d \u0e1b\u0e35"
                    }
                })
            }(a("wd/R"))
        },
        G0Q6: function(e, t, a) {
            "use strict";
            var n = a("CDJp"),
                i = a("vvH+"),
                r = a("RDha");
            n._set("line", {
                showLines: !0,
                spanGaps: !1,
                hover: {
                    mode: "label"
                },
                scales: {
                    xAxes: [{
                        type: "category",
                        id: "x-axis-0"
                    }],
                    yAxes: [{
                        type: "linear",
                        id: "y-axis-0"
                    }]
                }
            }), e.exports = function(e) {
                function t(e, t) {
                    return r.valueOrDefault(e.showLine, t.showLines)
                }
                e.controllers.line = e.DatasetController.extend({
                    datasetElementType: i.Line,
                    dataElementType: i.Point,
                    update: function(e) {
                        var a, n, i, s = this,
                            o = s.getMeta(),
                            d = o.dataset,
                            l = o.data || [],
                            u = s.chart.options,
                            _ = u.elements.line,
                            m = s.getScaleForId(o.yAxisID),
                            h = s.getDataset(),
                            c = t(h, u);
                        for (c && (i = d.custom || {}, void 0 !== h.tension && void 0 === h.lineTension && (h.lineTension = h.tension), d._scale = m, d._datasetIndex = s.index, d._children = l, d._model = {
                                spanGaps: h.spanGaps ? h.spanGaps : u.spanGaps,
                                tension: i.tension ? i.tension : r.valueOrDefault(h.lineTension, _.tension),
                                backgroundColor: i.backgroundColor ? i.backgroundColor : h.backgroundColor || _.backgroundColor,
                                borderWidth: i.borderWidth ? i.borderWidth : h.borderWidth || _.borderWidth,
                                borderColor: i.borderColor ? i.borderColor : h.borderColor || _.borderColor,
                                borderCapStyle: i.borderCapStyle ? i.borderCapStyle : h.borderCapStyle || _.borderCapStyle,
                                borderDash: i.borderDash ? i.borderDash : h.borderDash || _.borderDash,
                                borderDashOffset: i.borderDashOffset ? i.borderDashOffset : h.borderDashOffset || _.borderDashOffset,
                                borderJoinStyle: i.borderJoinStyle ? i.borderJoinStyle : h.borderJoinStyle || _.borderJoinStyle,
                                fill: i.fill ? i.fill : void 0 !== h.fill ? h.fill : _.fill,
                                steppedLine: i.steppedLine ? i.steppedLine : r.valueOrDefault(h.steppedLine, _.stepped),
                                cubicInterpolationMode: i.cubicInterpolationMode ? i.cubicInterpolationMode : r.valueOrDefault(h.cubicInterpolationMode, _.cubicInterpolationMode)
                            }, d.pivot()), a = 0, n = l.length; a < n; ++a) s.updateElement(l[a], a, e);
                        for (c && 0 !== d._model.tension && s.updateBezierControlPoints(), a = 0, n = l.length; a < n; ++a) l[a].pivot()
                    },
                    getPointBackgroundColor: function(e, t) {
                        var a = this.chart.options.elements.point.backgroundColor,
                            n = this.getDataset(),
                            i = e.custom || {};
                        return i.backgroundColor ? a = i.backgroundColor : n.pointBackgroundColor ? a = r.valueAtIndexOrDefault(n.pointBackgroundColor, t, a) : n.backgroundColor && (a = n.backgroundColor), a
                    },
                    getPointBorderColor: function(e, t) {
                        var a = this.chart.options.elements.point.borderColor,
                            n = this.getDataset(),
                            i = e.custom || {};
                        return i.borderColor ? a = i.borderColor : n.pointBorderColor ? a = r.valueAtIndexOrDefault(n.pointBorderColor, t, a) : n.borderColor && (a = n.borderColor), a
                    },
                    getPointBorderWidth: function(e, t) {
                        var a = this.chart.options.elements.point.borderWidth,
                            n = this.getDataset(),
                            i = e.custom || {};
                        return isNaN(i.borderWidth) ? !isNaN(n.pointBorderWidth) || r.isArray(n.pointBorderWidth) ? a = r.valueAtIndexOrDefault(n.pointBorderWidth, t, a) : isNaN(n.borderWidth) || (a = n.borderWidth) : a = i.borderWidth, a
                    },
                    updateElement: function(e, t, a) {
                        var n, i, s = this,
                            o = s.getMeta(),
                            d = e.custom || {},
                            l = s.getDataset(),
                            u = s.index,
                            _ = l.data[t],
                            m = s.getScaleForId(o.yAxisID),
                            h = s.getScaleForId(o.xAxisID),
                            c = s.chart.options.elements.point;
                        void 0 !== l.radius && void 0 === l.pointRadius && (l.pointRadius = l.radius), void 0 !== l.hitRadius && void 0 === l.pointHitRadius && (l.pointHitRadius = l.hitRadius), n = h.getPixelForValue("object" == typeof _ ? _ : NaN, t, u), i = a ? m.getBasePixel() : s.calculatePointY(_, t, u), e._xScale = h, e._yScale = m, e._datasetIndex = u, e._index = t, e._model = {
                            x: n,
                            y: i,
                            skip: d.skip || isNaN(n) || isNaN(i),
                            radius: d.radius || r.valueAtIndexOrDefault(l.pointRadius, t, c.radius),
                            pointStyle: d.pointStyle || r.valueAtIndexOrDefault(l.pointStyle, t, c.pointStyle),
                            backgroundColor: s.getPointBackgroundColor(e, t),
                            borderColor: s.getPointBorderColor(e, t),
                            borderWidth: s.getPointBorderWidth(e, t),
                            tension: o.dataset._model ? o.dataset._model.tension : 0,
                            steppedLine: !!o.dataset._model && o.dataset._model.steppedLine,
                            hitRadius: d.hitRadius || r.valueAtIndexOrDefault(l.pointHitRadius, t, c.hitRadius)
                        }
                    },
                    calculatePointY: function(e, t, a) {
                        var n, i, r, s = this.chart,
                            o = this.getMeta(),
                            d = this.getScaleForId(o.yAxisID),
                            l = 0,
                            u = 0;
                        if (d.options.stacked) {
                            for (n = 0; n < a; n++)
                                if (i = s.data.datasets[n], "line" === (r = s.getDatasetMeta(n)).type && r.yAxisID === d.id && s.isDatasetVisible(n)) {
                                    var _ = Number(d.getRightValue(i.data[t]));
                                    _ < 0 ? u += _ || 0 : l += _ || 0
                                }
                            var m = Number(d.getRightValue(e));
                            return d.getPixelForValue(m < 0 ? u + m : l + m)
                        }
                        return d.getPixelForValue(e)
                    },
                    updateBezierControlPoints: function() {
                        var e, t, a, n, i = this.getMeta(),
                            s = this.chart.chartArea,
                            o = i.data || [];

                        function d(e, t, a) {
                            return Math.max(Math.min(e, a), t)
                        }
                        if (i.dataset._model.spanGaps && (o = o.filter(function(e) {
                                return !e._model.skip
                            })), "monotone" === i.dataset._model.cubicInterpolationMode) r.splineCurveMonotone(o);
                        else
                            for (e = 0, t = o.length; e < t; ++e) a = o[e]._model, n = r.splineCurve(r.previousItem(o, e)._model, a, r.nextItem(o, e)._model, i.dataset._model.tension), a.controlPointPreviousX = n.previous.x, a.controlPointPreviousY = n.previous.y, a.controlPointNextX = n.next.x, a.controlPointNextY = n.next.y;
                        if (this.chart.options.elements.line.capBezierPoints)
                            for (e = 0, t = o.length; e < t; ++e)(a = o[e]._model).controlPointPreviousX = d(a.controlPointPreviousX, s.left, s.right), a.controlPointPreviousY = d(a.controlPointPreviousY, s.top, s.bottom), a.controlPointNextX = d(a.controlPointNextX, s.left, s.right), a.controlPointNextY = d(a.controlPointNextY, s.top, s.bottom)
                    },
                    draw: function() {
                        var e = this.chart,
                            a = this.getMeta(),
                            n = a.data || [],
                            i = e.chartArea,
                            s = n.length,
                            o = 0;
                        for (r.canvas.clipArea(e.ctx, i), t(this.getDataset(), e.options) && a.dataset.draw(), r.canvas.unclipArea(e.ctx); o < s; ++o) n[o].draw(i)
                    },
                    setHoverStyle: function(e) {
                        var t = this.chart.data.datasets[e._datasetIndex],
                            a = e._index,
                            n = e.custom || {},
                            i = e._model;
                        i.radius = n.hoverRadius || r.valueAtIndexOrDefault(t.pointHoverRadius, a, this.chart.options.elements.point.hoverRadius), i.backgroundColor = n.hoverBackgroundColor || r.valueAtIndexOrDefault(t.pointHoverBackgroundColor, a, r.getHoverColor(i.backgroundColor)), i.borderColor = n.hoverBorderColor || r.valueAtIndexOrDefault(t.pointHoverBorderColor, a, r.getHoverColor(i.borderColor)), i.borderWidth = n.hoverBorderWidth || r.valueAtIndexOrDefault(t.pointHoverBorderWidth, a, i.borderWidth)
                    },
                    removeHoverStyle: function(e) {
                        var t = this,
                            a = t.chart.data.datasets[e._datasetIndex],
                            n = e._index,
                            i = e.custom || {},
                            s = e._model;
                        void 0 !== a.radius && void 0 === a.pointRadius && (a.pointRadius = a.radius), s.radius = i.radius || r.valueAtIndexOrDefault(a.pointRadius, n, t.chart.options.elements.point.radius), s.backgroundColor = t.getPointBackgroundColor(e, n), s.borderColor = t.getPointBorderColor(e, n), s.borderWidth = t.getPointBorderWidth(e, n)
                    }
                })
            }
        },
        G0Uy: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("mt", {
                    months: "Jannar_Frar_Marzu_April_Mejju_\u0120unju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Di\u010bembru".split("_"),
                    monthsShort: "Jan_Fra_Mar_Apr_Mej_\u0120un_Lul_Aww_Set_Ott_Nov_Di\u010b".split("_"),
                    weekdays: "Il-\u0126add_It-Tnejn_It-Tlieta_L-Erbg\u0127a_Il-\u0126amis_Il-\u0120img\u0127a_Is-Sibt".split("_"),
                    weekdaysShort: "\u0126ad_Tne_Tli_Erb_\u0126am_\u0120im_Sib".split("_"),
                    weekdaysMin: "\u0126a_Tn_Tl_Er_\u0126a_\u0120i_Si".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[Illum fil-]LT",
                        nextDay: "[G\u0127ada fil-]LT",
                        nextWeek: "dddd [fil-]LT",
                        lastDay: "[Il-biera\u0127 fil-]LT",
                        lastWeek: "dddd [li g\u0127adda] [fil-]LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "f\u2019 %s",
                        past: "%s ilu",
                        s: "ftit sekondi",
                        ss: "%d sekondi",
                        m: "minuta",
                        mm: "%d minuti",
                        h: "sieg\u0127a",
                        hh: "%d sieg\u0127at",
                        d: "\u0121urnata",
                        dd: "%d \u0121ranet",
                        M: "xahar",
                        MM: "%d xhur",
                        y: "sena",
                        yy: "%d sni"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\xba/,
                    ordinal: "%d\xba",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(a("wd/R"))
        },
        H8ED: function(e, t, a) {
            ! function(e) {
                "use strict";

                function t(e, t, a) {
                    var n, i;
                    return "m" === a ? t ? "\u0445\u0432\u0456\u043b\u0456\u043d\u0430" : "\u0445\u0432\u0456\u043b\u0456\u043d\u0443" : "h" === a ? t ? "\u0433\u0430\u0434\u0437\u0456\u043d\u0430" : "\u0433\u0430\u0434\u0437\u0456\u043d\u0443" : e + " " + (n = +e, i = {
                        ss: t ? "\u0441\u0435\u043a\u0443\u043d\u0434\u0430_\u0441\u0435\u043a\u0443\u043d\u0434\u044b_\u0441\u0435\u043a\u0443\u043d\u0434" : "\u0441\u0435\u043a\u0443\u043d\u0434\u0443_\u0441\u0435\u043a\u0443\u043d\u0434\u044b_\u0441\u0435\u043a\u0443\u043d\u0434",
                        mm: t ? "\u0445\u0432\u0456\u043b\u0456\u043d\u0430_\u0445\u0432\u0456\u043b\u0456\u043d\u044b_\u0445\u0432\u0456\u043b\u0456\u043d" : "\u0445\u0432\u0456\u043b\u0456\u043d\u0443_\u0445\u0432\u0456\u043b\u0456\u043d\u044b_\u0445\u0432\u0456\u043b\u0456\u043d",
                        hh: t ? "\u0433\u0430\u0434\u0437\u0456\u043d\u0430_\u0433\u0430\u0434\u0437\u0456\u043d\u044b_\u0433\u0430\u0434\u0437\u0456\u043d" : "\u0433\u0430\u0434\u0437\u0456\u043d\u0443_\u0433\u0430\u0434\u0437\u0456\u043d\u044b_\u0433\u0430\u0434\u0437\u0456\u043d",
                        dd: "\u0434\u0437\u0435\u043d\u044c_\u0434\u043d\u0456_\u0434\u0437\u0451\u043d",
                        MM: "\u043c\u0435\u0441\u044f\u0446_\u043c\u0435\u0441\u044f\u0446\u044b_\u043c\u0435\u0441\u044f\u0446\u0430\u045e",
                        yy: "\u0433\u043e\u0434_\u0433\u0430\u0434\u044b_\u0433\u0430\u0434\u043e\u045e"
                    }[a].split("_"), n % 10 == 1 && n % 100 != 11 ? i[0] : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? i[1] : i[2])
                }
                e.defineLocale("be", {
                    months: {
                        format: "\u0441\u0442\u0443\u0434\u0437\u0435\u043d\u044f_\u043b\u044e\u0442\u0430\u0433\u0430_\u0441\u0430\u043a\u0430\u0432\u0456\u043a\u0430_\u043a\u0440\u0430\u0441\u0430\u0432\u0456\u043a\u0430_\u0442\u0440\u0430\u045e\u043d\u044f_\u0447\u044d\u0440\u0432\u0435\u043d\u044f_\u043b\u0456\u043f\u0435\u043d\u044f_\u0436\u043d\u0456\u045e\u043d\u044f_\u0432\u0435\u0440\u0430\u0441\u043d\u044f_\u043a\u0430\u0441\u0442\u0440\u044b\u0447\u043d\u0456\u043a\u0430_\u043b\u0456\u0441\u0442\u0430\u043f\u0430\u0434\u0430_\u0441\u043d\u0435\u0436\u043d\u044f".split("_"),
                        standalone: "\u0441\u0442\u0443\u0434\u0437\u0435\u043d\u044c_\u043b\u044e\u0442\u044b_\u0441\u0430\u043a\u0430\u0432\u0456\u043a_\u043a\u0440\u0430\u0441\u0430\u0432\u0456\u043a_\u0442\u0440\u0430\u0432\u0435\u043d\u044c_\u0447\u044d\u0440\u0432\u0435\u043d\u044c_\u043b\u0456\u043f\u0435\u043d\u044c_\u0436\u043d\u0456\u0432\u0435\u043d\u044c_\u0432\u0435\u0440\u0430\u0441\u0435\u043d\u044c_\u043a\u0430\u0441\u0442\u0440\u044b\u0447\u043d\u0456\u043a_\u043b\u0456\u0441\u0442\u0430\u043f\u0430\u0434_\u0441\u043d\u0435\u0436\u0430\u043d\u044c".split("_")
                    },
                    monthsShort: "\u0441\u0442\u0443\u0434_\u043b\u044e\u0442_\u0441\u0430\u043a_\u043a\u0440\u0430\u0441_\u0442\u0440\u0430\u0432_\u0447\u044d\u0440\u0432_\u043b\u0456\u043f_\u0436\u043d\u0456\u0432_\u0432\u0435\u0440_\u043a\u0430\u0441\u0442_\u043b\u0456\u0441\u0442_\u0441\u043d\u0435\u0436".split("_"),
                    weekdays: {
                        format: "\u043d\u044f\u0434\u0437\u0435\u043b\u044e_\u043f\u0430\u043d\u044f\u0434\u0437\u0435\u043b\u0430\u043a_\u0430\u045e\u0442\u043e\u0440\u0430\u043a_\u0441\u0435\u0440\u0430\u0434\u0443_\u0447\u0430\u0446\u0432\u0435\u0440_\u043f\u044f\u0442\u043d\u0456\u0446\u0443_\u0441\u0443\u0431\u043e\u0442\u0443".split("_"),
                        standalone: "\u043d\u044f\u0434\u0437\u0435\u043b\u044f_\u043f\u0430\u043d\u044f\u0434\u0437\u0435\u043b\u0430\u043a_\u0430\u045e\u0442\u043e\u0440\u0430\u043a_\u0441\u0435\u0440\u0430\u0434\u0430_\u0447\u0430\u0446\u0432\u0435\u0440_\u043f\u044f\u0442\u043d\u0456\u0446\u0430_\u0441\u0443\u0431\u043e\u0442\u0430".split("_"),
                        isFormat: /\[ ?[\u0423\u0443\u045e] ?(?:\u043c\u0456\u043d\u0443\u043b\u0443\u044e|\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0443\u044e)? ?\] ?dddd/
                    },
                    weekdaysShort: "\u043d\u0434_\u043f\u043d_\u0430\u0442_\u0441\u0440_\u0447\u0446_\u043f\u0442_\u0441\u0431".split("_"),
                    weekdaysMin: "\u043d\u0434_\u043f\u043d_\u0430\u0442_\u0441\u0440_\u0447\u0446_\u043f\u0442_\u0441\u0431".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY \u0433.",
                        LLL: "D MMMM YYYY \u0433., HH:mm",
                        LLLL: "dddd, D MMMM YYYY \u0433., HH:mm"
                    },
                    calendar: {
                        sameDay: "[\u0421\u0451\u043d\u043d\u044f \u045e] LT",
                        nextDay: "[\u0417\u0430\u045e\u0442\u0440\u0430 \u045e] LT",
                        lastDay: "[\u0423\u0447\u043e\u0440\u0430 \u045e] LT",
                        nextWeek: function() {
                            return "[\u0423] dddd [\u045e] LT"
                        },
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                case 3:
                                case 5:
                                case 6:
                                    return "[\u0423 \u043c\u0456\u043d\u0443\u043b\u0443\u044e] dddd [\u045e] LT";
                                case 1:
                                case 2:
                                case 4:
                                    return "[\u0423 \u043c\u0456\u043d\u0443\u043b\u044b] dddd [\u045e] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "\u043f\u0440\u0430\u0437 %s",
                        past: "%s \u0442\u0430\u043c\u0443",
                        s: "\u043d\u0435\u043a\u0430\u043b\u044c\u043a\u0456 \u0441\u0435\u043a\u0443\u043d\u0434",
                        m: t,
                        mm: t,
                        h: t,
                        hh: t,
                        d: "\u0434\u0437\u0435\u043d\u044c",
                        dd: t,
                        M: "\u043c\u0435\u0441\u044f\u0446",
                        MM: t,
                        y: "\u0433\u043e\u0434",
                        yy: t
                    },
                    meridiemParse: /\u043d\u043e\u0447\u044b|\u0440\u0430\u043d\u0456\u0446\u044b|\u0434\u043d\u044f|\u0432\u0435\u0447\u0430\u0440\u0430/,
                    isPM: function(e) {
                        return /^(\u0434\u043d\u044f|\u0432\u0435\u0447\u0430\u0440\u0430)$/.test(e)
                    },
                    meridiem: function(e, t, a) {
                        return e < 4 ? "\u043d\u043e\u0447\u044b" : e < 12 ? "\u0440\u0430\u043d\u0456\u0446\u044b" : e < 17 ? "\u0434\u043d\u044f" : "\u0432\u0435\u0447\u0430\u0440\u0430"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}-(\u0456|\u044b|\u0433\u0430)/,
                    ordinal: function(e, t) {
                        switch (t) {
                            case "M":
                            case "d":
                            case "DDD":
                            case "w":
                            case "W":
                                return e % 10 != 2 && e % 10 != 3 || e % 100 == 12 || e % 100 == 13 ? e + "-\u044b" : e + "-\u0456";
                            case "D":
                                return e + "-\u0433\u0430";
                            default:
                                return e
                        }
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(a("wd/R"))
        },
        HP3h: function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = {
                        1: "1",
                        2: "2",
                        3: "3",
                        4: "4",
                        5: "5",
                        6: "6",
                        7: "7",
                        8: "8",
                        9: "9",
                        0: "0"
                    },
                    a = function(e) {
                        return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
                    },
                    n = {
                        s: ["\u0623\u0642\u0644 \u0645\u0646 \u062b\u0627\u0646\u064a\u0629", "\u062b\u0627\u0646\u064a\u0629 \u0648\u0627\u062d\u062f\u0629", ["\u062b\u0627\u0646\u064a\u062a\u0627\u0646", "\u062b\u0627\u0646\u064a\u062a\u064a\u0646"], "%d \u062b\u0648\u0627\u0646", "%d \u062b\u0627\u0646\u064a\u0629", "%d \u062b\u0627\u0646\u064a\u0629"],
                        m: ["\u0623\u0642\u0644 \u0645\u0646 \u062f\u0642\u064a\u0642\u0629", "\u062f\u0642\u064a\u0642\u0629 \u0648\u0627\u062d\u062f\u0629", ["\u062f\u0642\u064a\u0642\u062a\u0627\u0646", "\u062f\u0642\u064a\u0642\u062a\u064a\u0646"], "%d \u062f\u0642\u0627\u0626\u0642", "%d \u062f\u0642\u064a\u0642\u0629", "%d \u062f\u0642\u064a\u0642\u0629"],
                        h: ["\u0623\u0642\u0644 \u0645\u0646 \u0633\u0627\u0639\u0629", "\u0633\u0627\u0639\u0629 \u0648\u0627\u062d\u062f\u0629", ["\u0633\u0627\u0639\u062a\u0627\u0646", "\u0633\u0627\u0639\u062a\u064a\u0646"], "%d \u0633\u0627\u0639\u0627\u062a", "%d \u0633\u0627\u0639\u0629", "%d \u0633\u0627\u0639\u0629"],
                        d: ["\u0623\u0642\u0644 \u0645\u0646 \u064a\u0648\u0645", "\u064a\u0648\u0645 \u0648\u0627\u062d\u062f", ["\u064a\u0648\u0645\u0627\u0646", "\u064a\u0648\u0645\u064a\u0646"], "%d \u0623\u064a\u0627\u0645", "%d \u064a\u0648\u0645\u064b\u0627", "%d \u064a\u0648\u0645"],
                        M: ["\u0623\u0642\u0644 \u0645\u0646 \u0634\u0647\u0631", "\u0634\u0647\u0631 \u0648\u0627\u062d\u062f", ["\u0634\u0647\u0631\u0627\u0646", "\u0634\u0647\u0631\u064a\u0646"], "%d \u0623\u0634\u0647\u0631", "%d \u0634\u0647\u0631\u0627", "%d \u0634\u0647\u0631"],
                        y: ["\u0623\u0642\u0644 \u0645\u0646 \u0639\u0627\u0645", "\u0639\u0627\u0645 \u0648\u0627\u062d\u062f", ["\u0639\u0627\u0645\u0627\u0646", "\u0639\u0627\u0645\u064a\u0646"], "%d \u0623\u0639\u0648\u0627\u0645", "%d \u0639\u0627\u0645\u064b\u0627", "%d \u0639\u0627\u0645"]
                    },
                    i = function(e) {
                        return function(t, i, r, s) {
                            var o = a(t),
                                d = n[e][a(t)];
                            return 2 === o && (d = d[i ? 0 : 1]), d.replace(/%d/i, t)
                        }
                    },
                    r = ["\u064a\u0646\u0627\u064a\u0631", "\u0641\u0628\u0631\u0627\u064a\u0631", "\u0645\u0627\u0631\u0633", "\u0623\u0628\u0631\u064a\u0644", "\u0645\u0627\u064a\u0648", "\u064a\u0648\u0646\u064a\u0648", "\u064a\u0648\u0644\u064a\u0648", "\u0623\u063a\u0633\u0637\u0633", "\u0633\u0628\u062a\u0645\u0628\u0631", "\u0623\u0643\u062a\u0648\u0628\u0631", "\u0646\u0648\u0641\u0645\u0628\u0631", "\u062f\u064a\u0633\u0645\u0628\u0631"];
                e.defineLocale("ar-ly", {
                    months: r,
                    monthsShort: r,
                    weekdays: "\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"),
                    weekdaysShort: "\u0623\u062d\u062f_\u0625\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"),
                    weekdaysMin: "\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "D/\u200fM/\u200fYYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    meridiemParse: /\u0635|\u0645/,
                    isPM: function(e) {
                        return "\u0645" === e
                    },
                    meridiem: function(e, t, a) {
                        return e < 12 ? "\u0635" : "\u0645"
                    },
                    calendar: {
                        sameDay: "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                        nextDay: "[\u063a\u062f\u064b\u0627 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                        nextWeek: "dddd [\u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                        lastDay: "[\u0623\u0645\u0633 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                        lastWeek: "dddd [\u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "\u0628\u0639\u062f %s",
                        past: "\u0645\u0646\u0630 %s",
                        s: i("s"),
                        ss: i("s"),
                        m: i("m"),
                        mm: i("m"),
                        h: i("h"),
                        hh: i("h"),
                        d: i("d"),
                        dd: i("d"),
                        M: i("M"),
                        MM: i("M"),
                        y: i("y"),
                        yy: i("y")
                    },
                    preparse: function(e) {
                        return e.replace(/\u060c/g, ",")
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, function(e) {
                            return t[e]
                        }).replace(/,/g, "\u060c")
                    },
                    week: {
                        dow: 6,
                        doy: 12
                    }
                })
            }(a("wd/R"))
        },
        Hg4g: function(e, t) {
            e.exports = {
                acquireContext: function(e) {
                    return e && e.canvas && (e = e.canvas), e && e.getContext("2d") || null
                }
            }
        },
        HlEa: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return i
            });
            var n = a("CcnG"),
                i = function() {
                    function e(e) {
                        this.chartPackage = {
                            AnnotationChart: "annotationchart",
                            AreaChart: "corechart",
                            Bar: "bar",
                            BarChart: "corechart",
                            BubbleChart: "corechart",
                            Calendar: "calendar",
                            CandlestickChart: "corechart",
                            ColumnChart: "corechart",
                            ComboChart: "corechart",
                            PieChart: "corechart",
                            Gantt: "gantt",
                            Gauge: "gauge",
                            GeoChart: "geochart",
                            Histogram: "corechart",
                            Line: "line",
                            LineChart: "corechart",
                            Map: "map",
                            OrgChart: "orgchart",
                            Sankey: "sankey",
                            Scatter: "scatter",
                            ScatterChart: "corechart",
                            SteppedAreaChart: "corechart",
                            Table: "table",
                            Timeline: "timeline",
                            TreeMap: "treemap",
                            WordTree: "wordtree"
                        }, this.googleScriptLoadingNotifier = new n.EventEmitter, this.googleScriptIsLoading = !1, this.localeId = e
                    }
                    return e.prototype.load = function(e, t) {
                        var a = this;
                        return new Promise(function(n, i) {
                            void 0 === n && (n = Function.prototype), void 0 === i && (i = Function.prototype), a.loadGoogleChartsScript().then(function() {
                                var i = {
                                    packages: [a.chartPackage[e]],
                                    language: a.localeId,
                                    callback: n
                                };
                                t && (i.mapsApiKey = t), google.charts.load("45.2", i)
                            }).catch(function(e) {
                                return i()
                            })
                        })
                    }, e.prototype.loadGoogleChartsScript = function() {
                        var e = this;
                        return new Promise(function(t, a) {
                            if (void 0 === t && (t = Function.prototype), void 0 === a && (a = Function.prototype), "undefined" != typeof google && google.charts) t();
                            else if (e.googleScriptIsLoading) e.googleScriptLoadingNotifier.subscribe(function(e) {
                                e ? t() : a()
                            });
                            else {
                                e.googleScriptIsLoading = !0;
                                var n = document.createElement("script");
                                n.type = "text/javascript", n.src = "https://www.gstatic.com/charts/loader.js", n.async = !0, n.defer = !0, n.onload = function() {
                                    e.googleScriptIsLoading = !1, e.googleScriptLoadingNotifier.emit(!0), t()
                                }, n.onerror = function() {
                                    e.googleScriptIsLoading = !1, e.googleScriptLoadingNotifier.emit(!1), a()
                                }, document.getElementsByTagName("head")[0].appendChild(n)
                            }
                        })
                    }, e
                }()
        },
        IBtZ: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("ka", {
                    months: {
                        standalone: "\u10d8\u10d0\u10dc\u10d5\u10d0\u10e0\u10d8_\u10d7\u10d4\u10d1\u10d4\u10e0\u10d5\u10d0\u10da\u10d8_\u10db\u10d0\u10e0\u10e2\u10d8_\u10d0\u10de\u10e0\u10d8\u10da\u10d8_\u10db\u10d0\u10d8\u10e1\u10d8_\u10d8\u10d5\u10dc\u10d8\u10e1\u10d8_\u10d8\u10d5\u10da\u10d8\u10e1\u10d8_\u10d0\u10d2\u10d5\u10d8\u10e1\u10e2\u10dd_\u10e1\u10d4\u10e5\u10e2\u10d4\u10db\u10d1\u10d4\u10e0\u10d8_\u10dd\u10e5\u10e2\u10dd\u10db\u10d1\u10d4\u10e0\u10d8_\u10dc\u10dd\u10d4\u10db\u10d1\u10d4\u10e0\u10d8_\u10d3\u10d4\u10d9\u10d4\u10db\u10d1\u10d4\u10e0\u10d8".split("_"),
                        format: "\u10d8\u10d0\u10dc\u10d5\u10d0\u10e0\u10e1_\u10d7\u10d4\u10d1\u10d4\u10e0\u10d5\u10d0\u10da\u10e1_\u10db\u10d0\u10e0\u10e2\u10e1_\u10d0\u10de\u10e0\u10d8\u10da\u10d8\u10e1_\u10db\u10d0\u10d8\u10e1\u10e1_\u10d8\u10d5\u10dc\u10d8\u10e1\u10e1_\u10d8\u10d5\u10da\u10d8\u10e1\u10e1_\u10d0\u10d2\u10d5\u10d8\u10e1\u10e2\u10e1_\u10e1\u10d4\u10e5\u10e2\u10d4\u10db\u10d1\u10d4\u10e0\u10e1_\u10dd\u10e5\u10e2\u10dd\u10db\u10d1\u10d4\u10e0\u10e1_\u10dc\u10dd\u10d4\u10db\u10d1\u10d4\u10e0\u10e1_\u10d3\u10d4\u10d9\u10d4\u10db\u10d1\u10d4\u10e0\u10e1".split("_")
                    },
                    monthsShort: "\u10d8\u10d0\u10dc_\u10d7\u10d4\u10d1_\u10db\u10d0\u10e0_\u10d0\u10de\u10e0_\u10db\u10d0\u10d8_\u10d8\u10d5\u10dc_\u10d8\u10d5\u10da_\u10d0\u10d2\u10d5_\u10e1\u10d4\u10e5_\u10dd\u10e5\u10e2_\u10dc\u10dd\u10d4_\u10d3\u10d4\u10d9".split("_"),
                    weekdays: {
                        standalone: "\u10d9\u10d5\u10d8\u10e0\u10d0_\u10dd\u10e0\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8_\u10e1\u10d0\u10db\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8_\u10dd\u10d7\u10ee\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8_\u10ee\u10e3\u10d7\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8_\u10de\u10d0\u10e0\u10d0\u10e1\u10d9\u10d4\u10d5\u10d8_\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8".split("_"),
                        format: "\u10d9\u10d5\u10d8\u10e0\u10d0\u10e1_\u10dd\u10e0\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1_\u10e1\u10d0\u10db\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1_\u10dd\u10d7\u10ee\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1_\u10ee\u10e3\u10d7\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1_\u10de\u10d0\u10e0\u10d0\u10e1\u10d9\u10d4\u10d5\u10e1_\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1".split("_"),
                        isFormat: /(\u10ec\u10d8\u10dc\u10d0|\u10e8\u10d4\u10db\u10d3\u10d4\u10d2)/
                    },
                    weekdaysShort: "\u10d9\u10d5\u10d8_\u10dd\u10e0\u10e8_\u10e1\u10d0\u10db_\u10dd\u10d7\u10ee_\u10ee\u10e3\u10d7_\u10de\u10d0\u10e0_\u10e8\u10d0\u10d1".split("_"),
                    weekdaysMin: "\u10d9\u10d5_\u10dd\u10e0_\u10e1\u10d0_\u10dd\u10d7_\u10ee\u10e3_\u10de\u10d0_\u10e8\u10d0".split("_"),
                    longDateFormat: {
                        LT: "h:mm A",
                        LTS: "h:mm:ss A",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY h:mm A",
                        LLLL: "dddd, D MMMM YYYY h:mm A"
                    },
                    calendar: {
                        sameDay: "[\u10d3\u10e6\u10d4\u10e1] LT[-\u10d6\u10d4]",
                        nextDay: "[\u10ee\u10d5\u10d0\u10da] LT[-\u10d6\u10d4]",
                        lastDay: "[\u10d2\u10e3\u10e8\u10d8\u10dc] LT[-\u10d6\u10d4]",
                        nextWeek: "[\u10e8\u10d4\u10db\u10d3\u10d4\u10d2] dddd LT[-\u10d6\u10d4]",
                        lastWeek: "[\u10ec\u10d8\u10dc\u10d0] dddd LT-\u10d6\u10d4",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: function(e) {
                            return /(\u10ec\u10d0\u10db\u10d8|\u10ec\u10e3\u10d7\u10d8|\u10e1\u10d0\u10d0\u10d7\u10d8|\u10ec\u10d4\u10da\u10d8)/.test(e) ? e.replace(/\u10d8$/, "\u10e8\u10d8") : e + "\u10e8\u10d8"
                        },
                        past: function(e) {
                            return /(\u10ec\u10d0\u10db\u10d8|\u10ec\u10e3\u10d7\u10d8|\u10e1\u10d0\u10d0\u10d7\u10d8|\u10d3\u10e6\u10d4|\u10d7\u10d5\u10d4)/.test(e) ? e.replace(/(\u10d8|\u10d4)$/, "\u10d8\u10e1 \u10ec\u10d8\u10dc") : /\u10ec\u10d4\u10da\u10d8/.test(e) ? e.replace(/\u10ec\u10d4\u10da\u10d8$/, "\u10ec\u10da\u10d8\u10e1 \u10ec\u10d8\u10dc") : void 0
                        },
                        s: "\u10e0\u10d0\u10db\u10d3\u10d4\u10dc\u10d8\u10db\u10d4 \u10ec\u10d0\u10db\u10d8",
                        ss: "%d \u10ec\u10d0\u10db\u10d8",
                        m: "\u10ec\u10e3\u10d7\u10d8",
                        mm: "%d \u10ec\u10e3\u10d7\u10d8",
                        h: "\u10e1\u10d0\u10d0\u10d7\u10d8",
                        hh: "%d \u10e1\u10d0\u10d0\u10d7\u10d8",
                        d: "\u10d3\u10e6\u10d4",
                        dd: "%d \u10d3\u10e6\u10d4",
                        M: "\u10d7\u10d5\u10d4",
                        MM: "%d \u10d7\u10d5\u10d4",
                        y: "\u10ec\u10d4\u10da\u10d8",
                        yy: "%d \u10ec\u10d4\u10da\u10d8"
                    },
                    dayOfMonthOrdinalParse: /0|1-\u10da\u10d8|\u10db\u10d4-\d{1,2}|\d{1,2}-\u10d4/,
                    ordinal: function(e) {
                        return 0 === e ? e : 1 === e ? e + "-\u10da\u10d8" : e < 20 || e <= 100 && e % 20 == 0 || e % 100 == 0 ? "\u10db\u10d4-" + e : e + "-\u10d4"
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(a("wd/R"))
        },
        "Ivi+": function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("ko", {
                    months: "1\uc6d4_2\uc6d4_3\uc6d4_4\uc6d4_5\uc6d4_6\uc6d4_7\uc6d4_8\uc6d4_9\uc6d4_10\uc6d4_11\uc6d4_12\uc6d4".split("_"),
                    monthsShort: "1\uc6d4_2\uc6d4_3\uc6d4_4\uc6d4_5\uc6d4_6\uc6d4_7\uc6d4_8\uc6d4_9\uc6d4_10\uc6d4_11\uc6d4_12\uc6d4".split("_"),
                    weekdays: "\uc77c\uc694\uc77c_\uc6d4\uc694\uc77c_\ud654\uc694\uc77c_\uc218\uc694\uc77c_\ubaa9\uc694\uc77c_\uae08\uc694\uc77c_\ud1a0\uc694\uc77c".split("_"),
                    weekdaysShort: "\uc77c_\uc6d4_\ud654_\uc218_\ubaa9_\uae08_\ud1a0".split("_"),
                    weekdaysMin: "\uc77c_\uc6d4_\ud654_\uc218_\ubaa9_\uae08_\ud1a0".split("_"),
                    longDateFormat: {
                        LT: "A h:mm",
                        LTS: "A h:mm:ss",
                        L: "YYYY.MM.DD.",
                        LL: "YYYY\ub144 MMMM D\uc77c",
                        LLL: "YYYY\ub144 MMMM D\uc77c A h:mm",
                        LLLL: "YYYY\ub144 MMMM D\uc77c dddd A h:mm",
                        l: "YYYY.MM.DD.",
                        ll: "YYYY\ub144 MMMM D\uc77c",
                        lll: "YYYY\ub144 MMMM D\uc77c A h:mm",
                        llll: "YYYY\ub144 MMMM D\uc77c dddd A h:mm"
                    },
                    calendar: {
                        sameDay: "\uc624\ub298 LT",
                        nextDay: "\ub0b4\uc77c LT",
                        nextWeek: "dddd LT",
                        lastDay: "\uc5b4\uc81c LT",
                        lastWeek: "\uc9c0\ub09c\uc8fc dddd LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s \ud6c4",
                        past: "%s \uc804",
                        s: "\uba87 \ucd08",
                        ss: "%d\ucd08",
                        m: "1\ubd84",
                        mm: "%d\ubd84",
                        h: "\ud55c \uc2dc\uac04",
                        hh: "%d\uc2dc\uac04",
                        d: "\ud558\ub8e8",
                        dd: "%d\uc77c",
                        M: "\ud55c \ub2ec",
                        MM: "%d\ub2ec",
                        y: "\uc77c \ub144",
                        yy: "%d\ub144"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(\uc77c|\uc6d4|\uc8fc)/,
                    ordinal: function(e, t) {
                        switch (t) {
                            case "d":
                            case "D":
                            case "DDD":
                                return e + "\uc77c";
                            case "M":
                                return e + "\uc6d4";
                            case "w":
                            case "W":
                                return e + "\uc8fc";
                            default:
                                return e
                        }
                    },
                    meridiemParse: /\uc624\uc804|\uc624\ud6c4/,
                    isPM: function(e) {
                        return "\uc624\ud6c4" === e
                    },
                    meridiem: function(e, t, a) {
                        return e < 12 ? "\uc624\uc804" : "\uc624\ud6c4"
                    }
                })
            }(a("wd/R"))
        },
        JVSJ: function(e, t, a) {
            ! function(e) {
                "use strict";

                function t(e, t, a) {
                    var n = e + " ";
                    switch (a) {
                        case "ss":
                            return n + (1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi");
                        case "m":
                            return t ? "jedna minuta" : "jedne minute";
                        case "mm":
                            return n + (1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta");
                        case "h":
                            return t ? "jedan sat" : "jednog sata";
                        case "hh":
                            return n + (1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati");
                        case "dd":
                            return n + (1 === e ? "dan" : "dana");
                        case "MM":
                            return n + (1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci");
                        case "yy":
                            return n + (1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina")
                    }
                }
                e.defineLocale("bs", {
                    months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
                    monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "nedjelja_ponedjeljak_utorak_srijeda_\u010detvrtak_petak_subota".split("_"),
                    weekdaysShort: "ned._pon._uto._sri._\u010det._pet._sub.".split("_"),
                    weekdaysMin: "ne_po_ut_sr_\u010de_pe_su".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY H:mm",
                        LLLL: "dddd, D. MMMM YYYY H:mm"
                    },
                    calendar: {
                        sameDay: "[danas u] LT",
                        nextDay: "[sutra u] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[u] [nedjelju] [u] LT";
                                case 3:
                                    return "[u] [srijedu] [u] LT";
                                case 6:
                                    return "[u] [subotu] [u] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[u] dddd [u] LT"
                            }
                        },
                        lastDay: "[ju\u010der u] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                case 3:
                                    return "[pro\u0161lu] dddd [u] LT";
                                case 6:
                                    return "[pro\u0161le] [subote] [u] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[pro\u0161li] dddd [u] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "za %s",
                        past: "prije %s",
                        s: "par sekundi",
                        ss: t,
                        m: t,
                        mm: t,
                        h: t,
                        hh: t,
                        d: "dan",
                        dd: t,
                        M: "mjesec",
                        MM: t,
                        y: "godinu",
                        yy: t
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(a("wd/R"))
        },
        JvlW: function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = {
                    ss: "sekund\u0117_sekund\u017ei\u0173_sekundes",
                    m: "minut\u0117_minut\u0117s_minut\u0119",
                    mm: "minut\u0117s_minu\u010di\u0173_minutes",
                    h: "valanda_valandos_valand\u0105",
                    hh: "valandos_valand\u0173_valandas",
                    d: "diena_dienos_dien\u0105",
                    dd: "dienos_dien\u0173_dienas",
                    M: "m\u0117nuo_m\u0117nesio_m\u0117nes\u012f",
                    MM: "m\u0117nesiai_m\u0117nesi\u0173_m\u0117nesius",
                    y: "metai_met\u0173_metus",
                    yy: "metai_met\u0173_metus"
                };

                function a(e, t, a, n) {
                    return t ? i(a)[0] : n ? i(a)[1] : i(a)[2]
                }

                function n(e) {
                    return e % 10 == 0 || e > 10 && e < 20
                }

                function i(e) {
                    return t[e].split("_")
                }

                function r(e, t, r, s) {
                    var o = e + " ";
                    return 1 === e ? o + a(0, t, r[0], s) : t ? o + (n(e) ? i(r)[1] : i(r)[0]) : s ? o + i(r)[1] : o + (n(e) ? i(r)[1] : i(r)[2])
                }
                e.defineLocale("lt", {
                    months: {
                        format: "sausio_vasario_kovo_baland\u017eio_gegu\u017e\u0117s_bir\u017eelio_liepos_rugpj\u016b\u010dio_rugs\u0117jo_spalio_lapkri\u010dio_gruod\u017eio".split("_"),
                        standalone: "sausis_vasaris_kovas_balandis_gegu\u017e\u0117_bir\u017eelis_liepa_rugpj\u016btis_rugs\u0117jis_spalis_lapkritis_gruodis".split("_"),
                        isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
                    },
                    monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
                    weekdays: {
                        format: "sekmadien\u012f_pirmadien\u012f_antradien\u012f_tre\u010diadien\u012f_ketvirtadien\u012f_penktadien\u012f_\u0161e\u0161tadien\u012f".split("_"),
                        standalone: "sekmadienis_pirmadienis_antradienis_tre\u010diadienis_ketvirtadienis_penktadienis_\u0161e\u0161tadienis".split("_"),
                        isFormat: /dddd HH:mm/
                    },
                    weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_\u0160e\u0161".split("_"),
                    weekdaysMin: "S_P_A_T_K_Pn_\u0160".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "YYYY-MM-DD",
                        LL: "YYYY [m.] MMMM D [d.]",
                        LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                        LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
                        l: "YYYY-MM-DD",
                        ll: "YYYY [m.] MMMM D [d.]",
                        lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                        llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
                    },
                    calendar: {
                        sameDay: "[\u0160iandien] LT",
                        nextDay: "[Rytoj] LT",
                        nextWeek: "dddd LT",
                        lastDay: "[Vakar] LT",
                        lastWeek: "[Pra\u0117jus\u012f] dddd LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "po %s",
                        past: "prie\u0161 %s",
                        s: function(e, t, a, n) {
                            return t ? "kelios sekund\u0117s" : n ? "keli\u0173 sekund\u017ei\u0173" : "kelias sekundes"
                        },
                        ss: r,
                        m: a,
                        mm: r,
                        h: a,
                        hh: r,
                        d: a,
                        dd: r,
                        M: a,
                        MM: r,
                        y: a,
                        yy: r
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}-oji/,
                    ordinal: function(e) {
                        return e + "-oji"
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(a("wd/R"))
        },
        "K/tc": function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("af", {
                    months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
                    monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
                    weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
                    weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
                    weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
                    meridiemParse: /vm|nm/i,
                    isPM: function(e) {
                        return /^nm$/i.test(e)
                    },
                    meridiem: function(e, t, a) {
                        return e < 12 ? a ? "vm" : "VM" : a ? "nm" : "NM"
                    },
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[Vandag om] LT",
                        nextDay: "[M\xf4re om] LT",
                        nextWeek: "dddd [om] LT",
                        lastDay: "[Gister om] LT",
                        lastWeek: "[Laas] dddd [om] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "oor %s",
                        past: "%s gelede",
                        s: "'n paar sekondes",
                        ss: "%d sekondes",
                        m: "'n minuut",
                        mm: "%d minute",
                        h: "'n uur",
                        hh: "%d ure",
                        d: "'n dag",
                        dd: "%d dae",
                        M: "'n maand",
                        MM: "%d maande",
                        y: "'n jaar",
                        yy: "%d jaar"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
                    ordinal: function(e) {
                        return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(a("wd/R"))
        },
        K2E3: function(e, t, a) {
            "use strict";
            var n = a("6ww4"),
                i = a("RDha"),
                r = function(e) {
                    i.extend(this, e), this.initialize.apply(this, arguments)
                };
            i.extend(r.prototype, {
                initialize: function() {
                    this.hidden = !1
                },
                pivot: function() {
                    var e = this;
                    return e._view || (e._view = i.clone(e._model)), e._start = {}, e
                },
                transition: function(e) {
                    var t = this,
                        a = t._model,
                        i = t._start,
                        r = t._view;
                    return a && 1 !== e ? (r || (r = t._view = {}), i || (i = t._start = {}), function(e, t, a, i) {
                        var r, s, o, d, l, u, _, m, h, c = Object.keys(a);
                        for (r = 0, s = c.length; r < s; ++r)
                            if (u = a[o = c[r]], t.hasOwnProperty(o) || (t[o] = u), (d = t[o]) !== u && "_" !== o[0]) {
                                if (e.hasOwnProperty(o) || (e[o] = d), (_ = typeof u) == typeof(l = e[o]))
                                    if ("string" === _) {
                                        if ((m = n(l)).valid && (h = n(u)).valid) {
                                            t[o] = h.mix(m, i).rgbString();
                                            continue
                                        }
                                    } else if ("number" === _ && isFinite(l) && isFinite(u)) {
                                    t[o] = l + (u - l) * i;
                                    continue
                                }
                                t[o] = u
                            }
                    }(i, r, a, e), t) : (t._view = a, t._start = null, t)
                },
                tooltipPosition: function() {
                    return {
                        x: this._model.x,
                        y: this._model.y
                    }
                },
                hasValue: function() {
                    return i.isNumber(this._model.x) && i.isNumber(this._model.y)
                }
            }), r.extend = i.inherits, e.exports = r
        },
        KAQS: function(e, t, a) {
            "use strict";
            var n = a("RDha");
            e.exports = function(e) {
                var t = ["push", "pop", "shift", "splice", "unshift"];

                function a(e, a) {
                    var n = e._chartjs;
                    if (n) {
                        var i = n.listeners,
                            r = i.indexOf(a); - 1 !== r && i.splice(r, 1), i.length > 0 || (t.forEach(function(t) {
                            delete e[t]
                        }), delete e._chartjs)
                    }
                }
                e.DatasetController = function(e, t) {
                    this.initialize(e, t)
                }, n.extend(e.DatasetController.prototype, {
                    datasetElementType: null,
                    dataElementType: null,
                    initialize: function(e, t) {
                        this.chart = e, this.index = t, this.linkScales(), this.addElements()
                    },
                    updateIndex: function(e) {
                        this.index = e
                    },
                    linkScales: function() {
                        var e = this,
                            t = e.getMeta(),
                            a = e.getDataset();
                        null !== t.xAxisID && t.xAxisID in e.chart.scales || (t.xAxisID = a.xAxisID || e.chart.options.scales.xAxes[0].id), null !== t.yAxisID && t.yAxisID in e.chart.scales || (t.yAxisID = a.yAxisID || e.chart.options.scales.yAxes[0].id)
                    },
                    getDataset: function() {
                        return this.chart.data.datasets[this.index]
                    },
                    getMeta: function() {
                        return this.chart.getDatasetMeta(this.index)
                    },
                    getScaleForId: function(e) {
                        return this.chart.scales[e]
                    },
                    reset: function() {
                        this.update(!0)
                    },
                    destroy: function() {
                        this._data && a(this._data, this)
                    },
                    createMetaDataset: function() {
                        var e = this.datasetElementType;
                        return e && new e({
                            _chart: this.chart,
                            _datasetIndex: this.index
                        })
                    },
                    createMetaData: function(e) {
                        var t = this.dataElementType;
                        return t && new t({
                            _chart: this.chart,
                            _datasetIndex: this.index,
                            _index: e
                        })
                    },
                    addElements: function() {
                        var e, t, a = this.getMeta(),
                            n = this.getDataset().data || [],
                            i = a.data;
                        for (e = 0, t = n.length; e < t; ++e) i[e] = i[e] || this.createMetaData(e);
                        a.dataset = a.dataset || this.createMetaDataset()
                    },
                    addElementAndReset: function(e) {
                        var t = this.createMetaData(e);
                        this.getMeta().data.splice(e, 0, t), this.updateElement(t, e, !0)
                    },
                    buildOrUpdateElements: function() {
                        var e, i, r = this,
                            s = r.getDataset(),
                            o = s.data || (s.data = []);
                        r._data !== o && (r._data && a(r._data, r), i = r, (e = o)._chartjs ? e._chartjs.listeners.push(i) : (Object.defineProperty(e, "_chartjs", {
                            configurable: !0,
                            enumerable: !1,
                            value: {
                                listeners: [i]
                            }
                        }), t.forEach(function(t) {
                            var a = "onData" + t.charAt(0).toUpperCase() + t.slice(1),
                                i = e[t];
                            Object.defineProperty(e, t, {
                                configurable: !0,
                                enumerable: !1,
                                value: function() {
                                    var t = Array.prototype.slice.call(arguments),
                                        r = i.apply(this, t);
                                    return n.each(e._chartjs.listeners, function(e) {
                                        "function" == typeof e[a] && e[a].apply(e, t)
                                    }), r
                                }
                            })
                        })), r._data = o), r.resyncElements()
                    },
                    update: n.noop,
                    transition: function(e) {
                        for (var t = this.getMeta(), a = t.data || [], n = a.length, i = 0; i < n; ++i) a[i].transition(e);
                        t.dataset && t.dataset.transition(e)
                    },
                    draw: function() {
                        var e = this.getMeta(),
                            t = e.data || [],
                            a = t.length,
                            n = 0;
                        for (e.dataset && e.dataset.draw(); n < a; ++n) t[n].draw()
                    },
                    removeHoverStyle: function(e, t) {
                        var a = this.chart.data.datasets[e._datasetIndex],
                            i = e._index,
                            r = e.custom || {},
                            s = n.valueAtIndexOrDefault,
                            o = e._model;
                        o.backgroundColor = r.backgroundColor ? r.backgroundColor : s(a.backgroundColor, i, t.backgroundColor), o.borderColor = r.borderColor ? r.borderColor : s(a.borderColor, i, t.borderColor), o.borderWidth = r.borderWidth ? r.borderWidth : s(a.borderWidth, i, t.borderWidth)
                    },
                    setHoverStyle: function(e) {
                        var t = this.chart.data.datasets[e._datasetIndex],
                            a = e._index,
                            i = e.custom || {},
                            r = n.valueAtIndexOrDefault,
                            s = n.getHoverColor,
                            o = e._model;
                        o.backgroundColor = i.hoverBackgroundColor ? i.hoverBackgroundColor : r(t.hoverBackgroundColor, a, s(o.backgroundColor)), o.borderColor = i.hoverBorderColor ? i.hoverBorderColor : r(t.hoverBorderColor, a, s(o.borderColor)), o.borderWidth = i.hoverBorderWidth ? i.hoverBorderWidth : r(t.hoverBorderWidth, a, o.borderWidth)
                    },
                    resyncElements: function() {
                        var e = this.getMeta(),
                            t = this.getDataset().data,
                            a = e.data.length,
                            n = t.length;
                        n < a ? e.data.splice(n, a - n) : n > a && this.insertElements(a, n - a)
                    },
                    insertElements: function(e, t) {
                        for (var a = 0; a < t; ++a) this.addElementAndReset(e + a)
                    },
                    onDataPush: function() {
                        this.insertElements(this.getDataset().data.length - 1, arguments.length)
                    },
                    onDataPop: function() {
                        this.getMeta().data.pop()
                    },
                    onDataShift: function() {
                        this.getMeta().data.shift()
                    },
                    onDataSplice: function(e, t) {
                        this.getMeta().data.splice(e, t), this.insertElements(e, arguments.length - 2)
                    },
                    onDataUnshift: function() {
                        this.insertElements(0, arguments.length)
                    }
                }), e.DatasetController.extend = n.inherits
            }
        },
        KSF8: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("vi", {
                    months: "th\xe1ng 1_th\xe1ng 2_th\xe1ng 3_th\xe1ng 4_th\xe1ng 5_th\xe1ng 6_th\xe1ng 7_th\xe1ng 8_th\xe1ng 9_th\xe1ng 10_th\xe1ng 11_th\xe1ng 12".split("_"),
                    monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
                    monthsParseExact: !0,
                    weekdays: "ch\u1ee7 nh\u1eadt_th\u1ee9 hai_th\u1ee9 ba_th\u1ee9 t\u01b0_th\u1ee9 n\u0103m_th\u1ee9 s\xe1u_th\u1ee9 b\u1ea3y".split("_"),
                    weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
                    weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
                    weekdaysParseExact: !0,
                    meridiemParse: /sa|ch/i,
                    isPM: function(e) {
                        return /^ch$/i.test(e)
                    },
                    meridiem: function(e, t, a) {
                        return e < 12 ? a ? "sa" : "SA" : a ? "ch" : "CH"
                    },
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM [n\u0103m] YYYY",
                        LLL: "D MMMM [n\u0103m] YYYY HH:mm",
                        LLLL: "dddd, D MMMM [n\u0103m] YYYY HH:mm",
                        l: "DD/M/YYYY",
                        ll: "D MMM YYYY",
                        lll: "D MMM YYYY HH:mm",
                        llll: "ddd, D MMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[H\xf4m nay l\xfac] LT",
                        nextDay: "[Ng\xe0y mai l\xfac] LT",
                        nextWeek: "dddd [tu\u1ea7n t\u1edbi l\xfac] LT",
                        lastDay: "[H\xf4m qua l\xfac] LT",
                        lastWeek: "dddd [tu\u1ea7n r\u1ed3i l\xfac] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s t\u1edbi",
                        past: "%s tr\u01b0\u1edbc",
                        s: "v\xe0i gi\xe2y",
                        ss: "%d gi\xe2y",
                        m: "m\u1ed9t ph\xfat",
                        mm: "%d ph\xfat",
                        h: "m\u1ed9t gi\u1edd",
                        hh: "%d gi\u1edd",
                        d: "m\u1ed9t ng\xe0y",
                        dd: "%d ng\xe0y",
                        M: "m\u1ed9t th\xe1ng",
                        MM: "%d th\xe1ng",
                        y: "m\u1ed9t n\u0103m",
                        yy: "%d n\u0103m"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}/,
                    ordinal: function(e) {
                        return e
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(a("wd/R"))
        },
        KTz0: function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = {
                    words: {
                        ss: ["sekund", "sekunda", "sekundi"],
                        m: ["jedan minut", "jednog minuta"],
                        mm: ["minut", "minuta", "minuta"],
                        h: ["jedan sat", "jednog sata"],
                        hh: ["sat", "sata", "sati"],
                        dd: ["dan", "dana", "dana"],
                        MM: ["mjesec", "mjeseca", "mjeseci"],
                        yy: ["godina", "godine", "godina"]
                    },
                    correctGrammaticalCase: function(e, t) {
                        return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
                    },
                    translate: function(e, a, n) {
                        var i = t.words[n];
                        return 1 === n.length ? a ? i[0] : i[1] : e + " " + t.correctGrammaticalCase(e, i)
                    }
                };
                e.defineLocale("me", {
                    months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
                    monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "nedjelja_ponedjeljak_utorak_srijeda_\u010detvrtak_petak_subota".split("_"),
                    weekdaysShort: "ned._pon._uto._sri._\u010det._pet._sub.".split("_"),
                    weekdaysMin: "ne_po_ut_sr_\u010de_pe_su".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY H:mm",
                        LLLL: "dddd, D. MMMM YYYY H:mm"
                    },
                    calendar: {
                        sameDay: "[danas u] LT",
                        nextDay: "[sjutra u] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[u] [nedjelju] [u] LT";
                                case 3:
                                    return "[u] [srijedu] [u] LT";
                                case 6:
                                    return "[u] [subotu] [u] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[u] dddd [u] LT"
                            }
                        },
                        lastDay: "[ju\u010de u] LT",
                        lastWeek: function() {
                            return ["[pro\u0161le] [nedjelje] [u] LT", "[pro\u0161log] [ponedjeljka] [u] LT", "[pro\u0161log] [utorka] [u] LT", "[pro\u0161le] [srijede] [u] LT", "[pro\u0161log] [\u010detvrtka] [u] LT", "[pro\u0161log] [petka] [u] LT", "[pro\u0161le] [subote] [u] LT"][this.day()]
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "za %s",
                        past: "prije %s",
                        s: "nekoliko sekundi",
                        ss: t.translate,
                        m: t.translate,
                        mm: t.translate,
                        h: t.translate,
                        hh: t.translate,
                        d: "dan",
                        dd: t.translate,
                        M: "mjesec",
                        MM: t.translate,
                        y: "godinu",
                        yy: t.translate
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(a("wd/R"))
        },
        Loxo: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("uz", {
                    months: "\u044f\u043d\u0432\u0430\u0440_\u0444\u0435\u0432\u0440\u0430\u043b_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0435\u043b_\u043c\u0430\u0439_\u0438\u044e\u043d_\u0438\u044e\u043b_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043d\u0442\u044f\u0431\u0440_\u043e\u043a\u0442\u044f\u0431\u0440_\u043d\u043e\u044f\u0431\u0440_\u0434\u0435\u043a\u0430\u0431\u0440".split("_"),
                    monthsShort: "\u044f\u043d\u0432_\u0444\u0435\u0432_\u043c\u0430\u0440_\u0430\u043f\u0440_\u043c\u0430\u0439_\u0438\u044e\u043d_\u0438\u044e\u043b_\u0430\u0432\u0433_\u0441\u0435\u043d_\u043e\u043a\u0442_\u043d\u043e\u044f_\u0434\u0435\u043a".split("_"),
                    weekdays: "\u042f\u043a\u0448\u0430\u043d\u0431\u0430_\u0414\u0443\u0448\u0430\u043d\u0431\u0430_\u0421\u0435\u0448\u0430\u043d\u0431\u0430_\u0427\u043e\u0440\u0448\u0430\u043d\u0431\u0430_\u041f\u0430\u0439\u0448\u0430\u043d\u0431\u0430_\u0416\u0443\u043c\u0430_\u0428\u0430\u043d\u0431\u0430".split("_"),
                    weekdaysShort: "\u042f\u043a\u0448_\u0414\u0443\u0448_\u0421\u0435\u0448_\u0427\u043e\u0440_\u041f\u0430\u0439_\u0416\u0443\u043c_\u0428\u0430\u043d".split("_"),
                    weekdaysMin: "\u042f\u043a_\u0414\u0443_\u0421\u0435_\u0427\u043e_\u041f\u0430_\u0416\u0443_\u0428\u0430".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "D MMMM YYYY, dddd HH:mm"
                    },
                    calendar: {
                        sameDay: "[\u0411\u0443\u0433\u0443\u043d \u0441\u043e\u0430\u0442] LT [\u0434\u0430]",
                        nextDay: "[\u042d\u0440\u0442\u0430\u0433\u0430] LT [\u0434\u0430]",
                        nextWeek: "dddd [\u043a\u0443\u043d\u0438 \u0441\u043e\u0430\u0442] LT [\u0434\u0430]",
                        lastDay: "[\u041a\u0435\u0447\u0430 \u0441\u043e\u0430\u0442] LT [\u0434\u0430]",
                        lastWeek: "[\u0423\u0442\u0433\u0430\u043d] dddd [\u043a\u0443\u043d\u0438 \u0441\u043e\u0430\u0442] LT [\u0434\u0430]",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "\u042f\u043a\u0438\u043d %s \u0438\u0447\u0438\u0434\u0430",
                        past: "\u0411\u0438\u0440 \u043d\u0435\u0447\u0430 %s \u043e\u043b\u0434\u0438\u043d",
                        s: "\u0444\u0443\u0440\u0441\u0430\u0442",
                        ss: "%d \u0444\u0443\u0440\u0441\u0430\u0442",
                        m: "\u0431\u0438\u0440 \u0434\u0430\u043a\u0438\u043a\u0430",
                        mm: "%d \u0434\u0430\u043a\u0438\u043a\u0430",
                        h: "\u0431\u0438\u0440 \u0441\u043e\u0430\u0442",
                        hh: "%d \u0441\u043e\u0430\u0442",
                        d: "\u0431\u0438\u0440 \u043a\u0443\u043d",
                        dd: "%d \u043a\u0443\u043d",
                        M: "\u0431\u0438\u0440 \u043e\u0439",
                        MM: "%d \u043e\u0439",
                        y: "\u0431\u0438\u0440 \u0439\u0438\u043b",
                        yy: "%d \u0439\u0438\u043b"
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(a("wd/R"))
        },
        LtGu: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return n
            }), a("TX0D"), a("HlEa");
            var n = function() {}
        },
        ODdm: function(e, t, a) {
            "use strict";
            e.exports = function(e) {
                e.Bar = function(t, a) {
                    return a.type = "bar", new e(t, a)
                }
            }
        },
        OIYi: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("en-ca", {
                    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                    monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                    weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                    weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                    longDateFormat: {
                        LT: "h:mm A",
                        LTS: "h:mm:ss A",
                        L: "YYYY-MM-DD",
                        LL: "MMMM D, YYYY",
                        LLL: "MMMM D, YYYY h:mm A",
                        LLLL: "dddd, MMMM D, YYYY h:mm A"
                    },
                    calendar: {
                        sameDay: "[Today at] LT",
                        nextDay: "[Tomorrow at] LT",
                        nextWeek: "dddd [at] LT",
                        lastDay: "[Yesterday at] LT",
                        lastWeek: "[Last] dddd [at] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "in %s",
                        past: "%s ago",
                        s: "a few seconds",
                        ss: "%d seconds",
                        m: "a minute",
                        mm: "%d minutes",
                        h: "an hour",
                        hh: "%d hours",
                        d: "a day",
                        dd: "%d days",
                        M: "a month",
                        MM: "%d months",
                        y: "a year",
                        yy: "%d years"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                    ordinal: function(e) {
                        var t = e % 10;
                        return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                    }
                })
            }(a("wd/R"))
        },
        OXbD: function(e, t, a) {
            "use strict";
            var n = a("CDJp"),
                i = a("K2E3"),
                r = a("RDha"),
                s = n.global.defaultColor;

            function o(e) {
                var t = this._view;
                return !!t && Math.abs(e - t.x) < t.radius + t.hitRadius
            }
            n._set("global", {
                elements: {
                    point: {
                        radius: 3,
                        pointStyle: "circle",
                        backgroundColor: s,
                        borderColor: s,
                        borderWidth: 1,
                        hitRadius: 1,
                        hoverRadius: 4,
                        hoverBorderWidth: 1
                    }
                }
            }), e.exports = i.extend({
                inRange: function(e, t) {
                    var a = this._view;
                    return !!a && Math.pow(e - a.x, 2) + Math.pow(t - a.y, 2) < Math.pow(a.hitRadius + a.radius, 2)
                },
                inLabelRange: o,
                inXRange: o,
                inYRange: function(e) {
                    var t = this._view;
                    return !!t && Math.abs(e - t.y) < t.radius + t.hitRadius
                },
                getCenterPoint: function() {
                    var e = this._view;
                    return {
                        x: e.x,
                        y: e.y
                    }
                },
                getArea: function() {
                    return Math.PI * Math.pow(this._view.radius, 2)
                },
                tooltipPosition: function() {
                    var e = this._view;
                    return {
                        x: e.x,
                        y: e.y,
                        padding: e.radius + e.borderWidth
                    }
                },
                draw: function(e) {
                    var t = this._view,
                        a = this._model,
                        i = this._chart.ctx,
                        o = t.pointStyle,
                        d = t.radius,
                        l = t.x,
                        u = t.y,
                        _ = r.color,
                        m = 0;
                    t.skip || (i.strokeStyle = t.borderColor || s, i.lineWidth = r.valueOrDefault(t.borderWidth, n.global.elements.point.borderWidth), i.fillStyle = t.backgroundColor || s, void 0 !== e && (a.x < e.left || 1.01 * e.right < a.x || a.y < e.top || 1.01 * e.bottom < a.y) && (a.x < e.left ? m = (l - a.x) / (e.left - a.x) : 1.01 * e.right < a.x ? m = (a.x - l) / (a.x - e.right) : a.y < e.top ? m = (u - a.y) / (e.top - a.y) : 1.01 * e.bottom < a.y && (m = (a.y - u) / (a.y - e.bottom)), m = Math.round(100 * m) / 100, i.strokeStyle = _(i.strokeStyle).alpha(m).rgbString(), i.fillStyle = _(i.fillStyle).alpha(m).rgbString()), r.canvas.drawPoint(i, o, d, l, u))
                }
            })
        },
        Oaa7: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("en-gb", {
                    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                    monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                    weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                    weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[Today at] LT",
                        nextDay: "[Tomorrow at] LT",
                        nextWeek: "dddd [at] LT",
                        lastDay: "[Yesterday at] LT",
                        lastWeek: "[Last] dddd [at] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "in %s",
                        past: "%s ago",
                        s: "a few seconds",
                        ss: "%d seconds",
                        m: "a minute",
                        mm: "%d minutes",
                        h: "an hour",
                        hh: "%d hours",
                        d: "a day",
                        dd: "%d days",
                        M: "a month",
                        MM: "%d months",
                        y: "a year",
                        yy: "%d years"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                    ordinal: function(e) {
                        var t = e % 10;
                        return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(a("wd/R"))
        },
        Ob0Z: function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = {
                        1: "\u0967",
                        2: "\u0968",
                        3: "\u0969",
                        4: "\u096a",
                        5: "\u096b",
                        6: "\u096c",
                        7: "\u096d",
                        8: "\u096e",
                        9: "\u096f",
                        0: "\u0966"
                    },
                    a = {
                        "\u0967": "1",
                        "\u0968": "2",
                        "\u0969": "3",
                        "\u096a": "4",
                        "\u096b": "5",
                        "\u096c": "6",
                        "\u096d": "7",
                        "\u096e": "8",
                        "\u096f": "9",
                        "\u0966": "0"
                    };

                function n(e, t, a, n) {
                    var i = "";
                    if (t) switch (a) {
                        case "s":
                            i = "\u0915\u093e\u0939\u0940 \u0938\u0947\u0915\u0902\u0926";
                            break;
                        case "ss":
                            i = "%d \u0938\u0947\u0915\u0902\u0926";
                            break;
                        case "m":
                            i = "\u090f\u0915 \u092e\u093f\u0928\u093f\u091f";
                            break;
                        case "mm":
                            i = "%d \u092e\u093f\u0928\u093f\u091f\u0947";
                            break;
                        case "h":
                            i = "\u090f\u0915 \u0924\u093e\u0938";
                            break;
                        case "hh":
                            i = "%d \u0924\u093e\u0938";
                            break;
                        case "d":
                            i = "\u090f\u0915 \u0926\u093f\u0935\u0938";
                            break;
                        case "dd":
                            i = "%d \u0926\u093f\u0935\u0938";
                            break;
                        case "M":
                            i = "\u090f\u0915 \u092e\u0939\u093f\u0928\u093e";
                            break;
                        case "MM":
                            i = "%d \u092e\u0939\u093f\u0928\u0947";
                            break;
                        case "y":
                            i = "\u090f\u0915 \u0935\u0930\u094d\u0937";
                            break;
                        case "yy":
                            i = "%d \u0935\u0930\u094d\u0937\u0947"
                    } else switch (a) {
                        case "s":
                            i = "\u0915\u093e\u0939\u0940 \u0938\u0947\u0915\u0902\u0926\u093e\u0902";
                            break;
                        case "ss":
                            i = "%d \u0938\u0947\u0915\u0902\u0926\u093e\u0902";
                            break;
                        case "m":
                            i = "\u090f\u0915\u093e \u092e\u093f\u0928\u093f\u091f\u093e";
                            break;
                        case "mm":
                            i = "%d \u092e\u093f\u0928\u093f\u091f\u093e\u0902";
                            break;
                        case "h":
                            i = "\u090f\u0915\u093e \u0924\u093e\u0938\u093e";
                            break;
                        case "hh":
                            i = "%d \u0924\u093e\u0938\u093e\u0902";
                            break;
                        case "d":
                            i = "\u090f\u0915\u093e \u0926\u093f\u0935\u0938\u093e";
                            break;
                        case "dd":
                            i = "%d \u0926\u093f\u0935\u0938\u093e\u0902";
                            break;
                        case "M":
                            i = "\u090f\u0915\u093e \u092e\u0939\u093f\u0928\u094d\u092f\u093e";
                            break;
                        case "MM":
                            i = "%d \u092e\u0939\u093f\u0928\u094d\u092f\u093e\u0902";
                            break;
                        case "y":
                            i = "\u090f\u0915\u093e \u0935\u0930\u094d\u0937\u093e";
                            break;
                        case "yy":
                            i = "%d \u0935\u0930\u094d\u0937\u093e\u0902"
                    }
                    return i.replace(/%d/i, e)
                }
                e.defineLocale("mr", {
                    months: "\u091c\u093e\u0928\u0947\u0935\u093e\u0930\u0940_\u092b\u0947\u092c\u094d\u0930\u0941\u0935\u093e\u0930\u0940_\u092e\u093e\u0930\u094d\u091a_\u090f\u092a\u094d\u0930\u093f\u0932_\u092e\u0947_\u091c\u0942\u0928_\u091c\u0941\u0932\u0948_\u0911\u0917\u0938\u094d\u091f_\u0938\u092a\u094d\u091f\u0947\u0902\u092c\u0930_\u0911\u0915\u094d\u091f\u094b\u092c\u0930_\u0928\u094b\u0935\u094d\u0939\u0947\u0902\u092c\u0930_\u0921\u093f\u0938\u0947\u0902\u092c\u0930".split("_"),
                    monthsShort: "\u091c\u093e\u0928\u0947._\u092b\u0947\u092c\u094d\u0930\u0941._\u092e\u093e\u0930\u094d\u091a._\u090f\u092a\u094d\u0930\u093f._\u092e\u0947._\u091c\u0942\u0928._\u091c\u0941\u0932\u0948._\u0911\u0917._\u0938\u092a\u094d\u091f\u0947\u0902._\u0911\u0915\u094d\u091f\u094b._\u0928\u094b\u0935\u094d\u0939\u0947\u0902._\u0921\u093f\u0938\u0947\u0902.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "\u0930\u0935\u093f\u0935\u093e\u0930_\u0938\u094b\u092e\u0935\u093e\u0930_\u092e\u0902\u0917\u0933\u0935\u093e\u0930_\u092c\u0941\u0927\u0935\u093e\u0930_\u0917\u0941\u0930\u0942\u0935\u093e\u0930_\u0936\u0941\u0915\u094d\u0930\u0935\u093e\u0930_\u0936\u0928\u093f\u0935\u093e\u0930".split("_"),
                    weekdaysShort: "\u0930\u0935\u093f_\u0938\u094b\u092e_\u092e\u0902\u0917\u0933_\u092c\u0941\u0927_\u0917\u0941\u0930\u0942_\u0936\u0941\u0915\u094d\u0930_\u0936\u0928\u093f".split("_"),
                    weekdaysMin: "\u0930_\u0938\u094b_\u092e\u0902_\u092c\u0941_\u0917\u0941_\u0936\u0941_\u0936".split("_"),
                    longDateFormat: {
                        LT: "A h:mm \u0935\u093e\u091c\u0924\u093e",
                        LTS: "A h:mm:ss \u0935\u093e\u091c\u0924\u093e",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, A h:mm \u0935\u093e\u091c\u0924\u093e",
                        LLLL: "dddd, D MMMM YYYY, A h:mm \u0935\u093e\u091c\u0924\u093e"
                    },
                    calendar: {
                        sameDay: "[\u0906\u091c] LT",
                        nextDay: "[\u0909\u0926\u094d\u092f\u093e] LT",
                        nextWeek: "dddd, LT",
                        lastDay: "[\u0915\u093e\u0932] LT",
                        lastWeek: "[\u092e\u093e\u0917\u0940\u0932] dddd, LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s\u092e\u0927\u094d\u092f\u0947",
                        past: "%s\u092a\u0942\u0930\u094d\u0935\u0940",
                        s: n,
                        ss: n,
                        m: n,
                        mm: n,
                        h: n,
                        hh: n,
                        d: n,
                        dd: n,
                        M: n,
                        MM: n,
                        y: n,
                        yy: n
                    },
                    preparse: function(e) {
                        return e.replace(/[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g, function(e) {
                            return a[e]
                        })
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, function(e) {
                            return t[e]
                        })
                    },
                    meridiemParse: /\u0930\u093e\u0924\u094d\u0930\u0940|\u0938\u0915\u093e\u0933\u0940|\u0926\u0941\u092a\u093e\u0930\u0940|\u0938\u093e\u092f\u0902\u0915\u093e\u0933\u0940/,
                    meridiemHour: function(e, t) {
                        return 12 === e && (e = 0), "\u0930\u093e\u0924\u094d\u0930\u0940" === t ? e < 4 ? e : e + 12 : "\u0938\u0915\u093e\u0933\u0940" === t ? e : "\u0926\u0941\u092a\u093e\u0930\u0940" === t ? e >= 10 ? e : e + 12 : "\u0938\u093e\u092f\u0902\u0915\u093e\u0933\u0940" === t ? e + 12 : void 0
                    },
                    meridiem: function(e, t, a) {
                        return e < 4 ? "\u0930\u093e\u0924\u094d\u0930\u0940" : e < 10 ? "\u0938\u0915\u093e\u0933\u0940" : e < 17 ? "\u0926\u0941\u092a\u093e\u0930\u0940" : e < 20 ? "\u0938\u093e\u092f\u0902\u0915\u093e\u0933\u0940" : "\u0930\u093e\u0924\u094d\u0930\u0940"
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                })
            }(a("wd/R"))
        },
        OjkT: function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = {
                        1: "\u0967",
                        2: "\u0968",
                        3: "\u0969",
                        4: "\u096a",
                        5: "\u096b",
                        6: "\u096c",
                        7: "\u096d",
                        8: "\u096e",
                        9: "\u096f",
                        0: "\u0966"
                    },
                    a = {
                        "\u0967": "1",
                        "\u0968": "2",
                        "\u0969": "3",
                        "\u096a": "4",
                        "\u096b": "5",
                        "\u096c": "6",
                        "\u096d": "7",
                        "\u096e": "8",
                        "\u096f": "9",
                        "\u0966": "0"
                    };
                e.defineLocale("ne", {
                    months: "\u091c\u0928\u0935\u0930\u0940_\u092b\u0947\u092c\u094d\u0930\u0941\u0935\u0930\u0940_\u092e\u093e\u0930\u094d\u091a_\u0905\u092a\u094d\u0930\u093f\u0932_\u092e\u0908_\u091c\u0941\u0928_\u091c\u0941\u0932\u093e\u0908_\u0905\u0917\u0937\u094d\u091f_\u0938\u0947\u092a\u094d\u091f\u0947\u092e\u094d\u092c\u0930_\u0905\u0915\u094d\u091f\u094b\u092c\u0930_\u0928\u094b\u092d\u0947\u092e\u094d\u092c\u0930_\u0921\u093f\u0938\u0947\u092e\u094d\u092c\u0930".split("_"),
                    monthsShort: "\u091c\u0928._\u092b\u0947\u092c\u094d\u0930\u0941._\u092e\u093e\u0930\u094d\u091a_\u0905\u092a\u094d\u0930\u093f._\u092e\u0908_\u091c\u0941\u0928_\u091c\u0941\u0932\u093e\u0908._\u0905\u0917._\u0938\u0947\u092a\u094d\u091f._\u0905\u0915\u094d\u091f\u094b._\u0928\u094b\u092d\u0947._\u0921\u093f\u0938\u0947.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "\u0906\u0907\u0924\u092c\u093e\u0930_\u0938\u094b\u092e\u092c\u093e\u0930_\u092e\u0919\u094d\u0917\u0932\u092c\u093e\u0930_\u092c\u0941\u0927\u092c\u093e\u0930_\u092c\u093f\u0939\u093f\u092c\u093e\u0930_\u0936\u0941\u0915\u094d\u0930\u092c\u093e\u0930_\u0936\u0928\u093f\u092c\u093e\u0930".split("_"),
                    weekdaysShort: "\u0906\u0907\u0924._\u0938\u094b\u092e._\u092e\u0919\u094d\u0917\u0932._\u092c\u0941\u0927._\u092c\u093f\u0939\u093f._\u0936\u0941\u0915\u094d\u0930._\u0936\u0928\u093f.".split("_"),
                    weekdaysMin: "\u0906._\u0938\u094b._\u092e\u0902._\u092c\u0941._\u092c\u093f._\u0936\u0941._\u0936.".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "A\u0915\u094b h:mm \u092c\u091c\u0947",
                        LTS: "A\u0915\u094b h:mm:ss \u092c\u091c\u0947",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, A\u0915\u094b h:mm \u092c\u091c\u0947",
                        LLLL: "dddd, D MMMM YYYY, A\u0915\u094b h:mm \u092c\u091c\u0947"
                    },
                    preparse: function(e) {
                        return e.replace(/[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g, function(e) {
                            return a[e]
                        })
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, function(e) {
                            return t[e]
                        })
                    },
                    meridiemParse: /\u0930\u093e\u0924\u093f|\u092c\u093f\u0939\u093e\u0928|\u0926\u093f\u0909\u0901\u0938\u094b|\u0938\u093e\u0901\u091d/,
                    meridiemHour: function(e, t) {
                        return 12 === e && (e = 0), "\u0930\u093e\u0924\u093f" === t ? e < 4 ? e : e + 12 : "\u092c\u093f\u0939\u093e\u0928" === t ? e : "\u0926\u093f\u0909\u0901\u0938\u094b" === t ? e >= 10 ? e : e + 12 : "\u0938\u093e\u0901\u091d" === t ? e + 12 : void 0
                    },
                    meridiem: function(e, t, a) {
                        return e < 3 ? "\u0930\u093e\u0924\u093f" : e < 12 ? "\u092c\u093f\u0939\u093e\u0928" : e < 16 ? "\u0926\u093f\u0909\u0901\u0938\u094b" : e < 20 ? "\u0938\u093e\u0901\u091d" : "\u0930\u093e\u0924\u093f"
                    },
                    calendar: {
                        sameDay: "[\u0906\u091c] LT",
                        nextDay: "[\u092d\u094b\u0932\u093f] LT",
                        nextWeek: "[\u0906\u0909\u0901\u0926\u094b] dddd[,] LT",
                        lastDay: "[\u0939\u093f\u091c\u094b] LT",
                        lastWeek: "[\u0917\u090f\u0915\u094b] dddd[,] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s\u092e\u093e",
                        past: "%s \u0905\u0917\u093e\u0921\u093f",
                        s: "\u0915\u0947\u0939\u0940 \u0915\u094d\u0937\u0923",
                        ss: "%d \u0938\u0947\u0915\u0947\u0923\u094d\u0921",
                        m: "\u090f\u0915 \u092e\u093f\u0928\u0947\u091f",
                        mm: "%d \u092e\u093f\u0928\u0947\u091f",
                        h: "\u090f\u0915 \u0918\u0923\u094d\u091f\u093e",
                        hh: "%d \u0918\u0923\u094d\u091f\u093e",
                        d: "\u090f\u0915 \u0926\u093f\u0928",
                        dd: "%d \u0926\u093f\u0928",
                        M: "\u090f\u0915 \u092e\u0939\u093f\u0928\u093e",
                        MM: "%d \u092e\u0939\u093f\u0928\u093e",
                        y: "\u090f\u0915 \u092c\u0930\u094d\u0937",
                        yy: "%d \u092c\u0930\u094d\u0937"
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                })
            }(a("wd/R"))
        },
        Oxv6: function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = {
                    0: "-\u0443\u043c",
                    1: "-\u0443\u043c",
                    2: "-\u044e\u043c",
                    3: "-\u044e\u043c",
                    4: "-\u0443\u043c",
                    5: "-\u0443\u043c",
                    6: "-\u0443\u043c",
                    7: "-\u0443\u043c",
                    8: "-\u0443\u043c",
                    9: "-\u0443\u043c",
                    10: "-\u0443\u043c",
                    12: "-\u0443\u043c",
                    13: "-\u0443\u043c",
                    20: "-\u0443\u043c",
                    30: "-\u044e\u043c",
                    40: "-\u0443\u043c",
                    50: "-\u0443\u043c",
                    60: "-\u0443\u043c",
                    70: "-\u0443\u043c",
                    80: "-\u0443\u043c",
                    90: "-\u0443\u043c",
                    100: "-\u0443\u043c"
                };
                e.defineLocale("tg", {
                    months: "\u044f\u043d\u0432\u0430\u0440_\u0444\u0435\u0432\u0440\u0430\u043b_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0435\u043b_\u043c\u0430\u0439_\u0438\u044e\u043d_\u0438\u044e\u043b_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043d\u0442\u044f\u0431\u0440_\u043e\u043a\u0442\u044f\u0431\u0440_\u043d\u043e\u044f\u0431\u0440_\u0434\u0435\u043a\u0430\u0431\u0440".split("_"),
                    monthsShort: "\u044f\u043d\u0432_\u0444\u0435\u0432_\u043c\u0430\u0440_\u0430\u043f\u0440_\u043c\u0430\u0439_\u0438\u044e\u043d_\u0438\u044e\u043b_\u0430\u0432\u0433_\u0441\u0435\u043d_\u043e\u043a\u0442_\u043d\u043e\u044f_\u0434\u0435\u043a".split("_"),
                    weekdays: "\u044f\u043a\u0448\u0430\u043d\u0431\u0435_\u0434\u0443\u0448\u0430\u043d\u0431\u0435_\u0441\u0435\u0448\u0430\u043d\u0431\u0435_\u0447\u043e\u0440\u0448\u0430\u043d\u0431\u0435_\u043f\u0430\u043d\u04b7\u0448\u0430\u043d\u0431\u0435_\u04b7\u0443\u043c\u044a\u0430_\u0448\u0430\u043d\u0431\u0435".split("_"),
                    weekdaysShort: "\u044f\u0448\u0431_\u0434\u0448\u0431_\u0441\u0448\u0431_\u0447\u0448\u0431_\u043f\u0448\u0431_\u04b7\u0443\u043c_\u0448\u043d\u0431".split("_"),
                    weekdaysMin: "\u044f\u0448_\u0434\u0448_\u0441\u0448_\u0447\u0448_\u043f\u0448_\u04b7\u043c_\u0448\u0431".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[\u0418\u043c\u0440\u04ef\u0437 \u0441\u043e\u0430\u0442\u0438] LT",
                        nextDay: "[\u041f\u0430\u0433\u043e\u04b3 \u0441\u043e\u0430\u0442\u0438] LT",
                        lastDay: "[\u0414\u0438\u0440\u04ef\u0437 \u0441\u043e\u0430\u0442\u0438] LT",
                        nextWeek: "dddd[\u0438] [\u04b3\u0430\u0444\u0442\u0430\u0438 \u043e\u044f\u043d\u0434\u0430 \u0441\u043e\u0430\u0442\u0438] LT",
                        lastWeek: "dddd[\u0438] [\u04b3\u0430\u0444\u0442\u0430\u0438 \u0433\u0443\u0437\u0430\u0448\u0442\u0430 \u0441\u043e\u0430\u0442\u0438] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "\u0431\u0430\u044a\u0434\u0438 %s",
                        past: "%s \u043f\u0435\u0448",
                        s: "\u044f\u043a\u0447\u0430\u043d\u0434 \u0441\u043e\u043d\u0438\u044f",
                        m: "\u044f\u043a \u0434\u0430\u049b\u0438\u049b\u0430",
                        mm: "%d \u0434\u0430\u049b\u0438\u049b\u0430",
                        h: "\u044f\u043a \u0441\u043e\u0430\u0442",
                        hh: "%d \u0441\u043e\u0430\u0442",
                        d: "\u044f\u043a \u0440\u04ef\u0437",
                        dd: "%d \u0440\u04ef\u0437",
                        M: "\u044f\u043a \u043c\u043e\u04b3",
                        MM: "%d \u043c\u043e\u04b3",
                        y: "\u044f\u043a \u0441\u043e\u043b",
                        yy: "%d \u0441\u043e\u043b"
                    },
                    meridiemParse: /\u0448\u0430\u0431|\u0441\u0443\u0431\u04b3|\u0440\u04ef\u0437|\u0431\u0435\u0433\u043e\u04b3/,
                    meridiemHour: function(e, t) {
                        return 12 === e && (e = 0), "\u0448\u0430\u0431" === t ? e < 4 ? e : e + 12 : "\u0441\u0443\u0431\u04b3" === t ? e : "\u0440\u04ef\u0437" === t ? e >= 11 ? e : e + 12 : "\u0431\u0435\u0433\u043e\u04b3" === t ? e + 12 : void 0
                    },
                    meridiem: function(e, t, a) {
                        return e < 4 ? "\u0448\u0430\u0431" : e < 11 ? "\u0441\u0443\u0431\u04b3" : e < 16 ? "\u0440\u04ef\u0437" : e < 19 ? "\u0431\u0435\u0433\u043e\u04b3" : "\u0448\u0430\u0431"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}-(\u0443\u043c|\u044e\u043c)/,
                    ordinal: function(e) {
                        return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null])
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(a("wd/R"))
        },
        PA2r: function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = "leden_\xfanor_b\u0159ezen_duben_kv\u011bten_\u010derven_\u010dervenec_srpen_z\xe1\u0159\xed_\u0159\xedjen_listopad_prosinec".split("_"),
                    a = "led_\xfano_b\u0159e_dub_kv\u011b_\u010dvn_\u010dvc_srp_z\xe1\u0159_\u0159\xedj_lis_pro".split("_");

                function n(e) {
                    return e > 1 && e < 5 && 1 != ~~(e / 10)
                }

                function i(e, t, a, i) {
                    var r = e + " ";
                    switch (a) {
                        case "s":
                            return t || i ? "p\xe1r sekund" : "p\xe1r sekundami";
                        case "ss":
                            return t || i ? r + (n(e) ? "sekundy" : "sekund") : r + "sekundami";
                        case "m":
                            return t ? "minuta" : i ? "minutu" : "minutou";
                        case "mm":
                            return t || i ? r + (n(e) ? "minuty" : "minut") : r + "minutami";
                        case "h":
                            return t ? "hodina" : i ? "hodinu" : "hodinou";
                        case "hh":
                            return t || i ? r + (n(e) ? "hodiny" : "hodin") : r + "hodinami";
                        case "d":
                            return t || i ? "den" : "dnem";
                        case "dd":
                            return t || i ? r + (n(e) ? "dny" : "dn\xed") : r + "dny";
                        case "M":
                            return t || i ? "m\u011bs\xedc" : "m\u011bs\xedcem";
                        case "MM":
                            return t || i ? r + (n(e) ? "m\u011bs\xedce" : "m\u011bs\xedc\u016f") : r + "m\u011bs\xedci";
                        case "y":
                            return t || i ? "rok" : "rokem";
                        case "yy":
                            return t || i ? r + (n(e) ? "roky" : "let") : r + "lety"
                    }
                }
                e.defineLocale("cs", {
                    months: t,
                    monthsShort: a,
                    monthsParse: function(e, t) {
                        var a, n = [];
                        for (a = 0; a < 12; a++) n[a] = new RegExp("^" + e[a] + "$|^" + t[a] + "$", "i");
                        return n
                    }(t, a),
                    shortMonthsParse: function(e) {
                        var t, a = [];
                        for (t = 0; t < 12; t++) a[t] = new RegExp("^" + e[t] + "$", "i");
                        return a
                    }(a),
                    longMonthsParse: function(e) {
                        var t, a = [];
                        for (t = 0; t < 12; t++) a[t] = new RegExp("^" + e[t] + "$", "i");
                        return a
                    }(t),
                    weekdays: "ned\u011ble_pond\u011bl\xed_\xfater\xfd_st\u0159eda_\u010dtvrtek_p\xe1tek_sobota".split("_"),
                    weekdaysShort: "ne_po_\xfat_st_\u010dt_p\xe1_so".split("_"),
                    weekdaysMin: "ne_po_\xfat_st_\u010dt_p\xe1_so".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY H:mm",
                        LLLL: "dddd D. MMMM YYYY H:mm",
                        l: "D. M. YYYY"
                    },
                    calendar: {
                        sameDay: "[dnes v] LT",
                        nextDay: "[z\xedtra v] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[v ned\u011bli v] LT";
                                case 1:
                                case 2:
                                    return "[v] dddd [v] LT";
                                case 3:
                                    return "[ve st\u0159edu v] LT";
                                case 4:
                                    return "[ve \u010dtvrtek v] LT";
                                case 5:
                                    return "[v p\xe1tek v] LT";
                                case 6:
                                    return "[v sobotu v] LT"
                            }
                        },
                        lastDay: "[v\u010dera v] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[minulou ned\u011bli v] LT";
                                case 1:
                                case 2:
                                    return "[minul\xe9] dddd [v] LT";
                                case 3:
                                    return "[minulou st\u0159edu v] LT";
                                case 4:
                                case 5:
                                    return "[minul\xfd] dddd [v] LT";
                                case 6:
                                    return "[minulou sobotu v] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "za %s",
                        past: "p\u0159ed %s",
                        s: i,
                        ss: i,
                        m: i,
                        mm: i,
                        h: i,
                        hh: i,
                        d: i,
                        dd: i,
                        M: i,
                        MM: i,
                        y: i,
                        yy: i
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(a("wd/R"))
        },
        PeUW: function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = {
                        1: "\u0be7",
                        2: "\u0be8",
                        3: "\u0be9",
                        4: "\u0bea",
                        5: "\u0beb",
                        6: "\u0bec",
                        7: "\u0bed",
                        8: "\u0bee",
                        9: "\u0bef",
                        0: "\u0be6"
                    },
                    a = {
                        "\u0be7": "1",
                        "\u0be8": "2",
                        "\u0be9": "3",
                        "\u0bea": "4",
                        "\u0beb": "5",
                        "\u0bec": "6",
                        "\u0bed": "7",
                        "\u0bee": "8",
                        "\u0bef": "9",
                        "\u0be6": "0"
                    };
                e.defineLocale("ta", {
                    months: "\u0b9c\u0ba9\u0bb5\u0bb0\u0bbf_\u0baa\u0bbf\u0baa\u0bcd\u0bb0\u0bb5\u0bb0\u0bbf_\u0bae\u0bbe\u0bb0\u0bcd\u0b9a\u0bcd_\u0b8f\u0baa\u0bcd\u0bb0\u0bb2\u0bcd_\u0bae\u0bc7_\u0b9c\u0bc2\u0ba9\u0bcd_\u0b9c\u0bc2\u0bb2\u0bc8_\u0b86\u0b95\u0bb8\u0bcd\u0b9f\u0bcd_\u0b9a\u0bc6\u0baa\u0bcd\u0b9f\u0bc6\u0bae\u0bcd\u0baa\u0bb0\u0bcd_\u0b85\u0b95\u0bcd\u0b9f\u0bc7\u0bbe\u0baa\u0bb0\u0bcd_\u0ba8\u0bb5\u0bae\u0bcd\u0baa\u0bb0\u0bcd_\u0b9f\u0bbf\u0b9a\u0bae\u0bcd\u0baa\u0bb0\u0bcd".split("_"),
                    monthsShort: "\u0b9c\u0ba9\u0bb5\u0bb0\u0bbf_\u0baa\u0bbf\u0baa\u0bcd\u0bb0\u0bb5\u0bb0\u0bbf_\u0bae\u0bbe\u0bb0\u0bcd\u0b9a\u0bcd_\u0b8f\u0baa\u0bcd\u0bb0\u0bb2\u0bcd_\u0bae\u0bc7_\u0b9c\u0bc2\u0ba9\u0bcd_\u0b9c\u0bc2\u0bb2\u0bc8_\u0b86\u0b95\u0bb8\u0bcd\u0b9f\u0bcd_\u0b9a\u0bc6\u0baa\u0bcd\u0b9f\u0bc6\u0bae\u0bcd\u0baa\u0bb0\u0bcd_\u0b85\u0b95\u0bcd\u0b9f\u0bc7\u0bbe\u0baa\u0bb0\u0bcd_\u0ba8\u0bb5\u0bae\u0bcd\u0baa\u0bb0\u0bcd_\u0b9f\u0bbf\u0b9a\u0bae\u0bcd\u0baa\u0bb0\u0bcd".split("_"),
                    weekdays: "\u0b9e\u0bbe\u0baf\u0bbf\u0bb1\u0bcd\u0bb1\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0ba4\u0bbf\u0b99\u0bcd\u0b95\u0b9f\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0b9a\u0bc6\u0bb5\u0bcd\u0bb5\u0bbe\u0baf\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0baa\u0bc1\u0ba4\u0ba9\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0bb5\u0bbf\u0baf\u0bbe\u0bb4\u0b95\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0bb5\u0bc6\u0bb3\u0bcd\u0bb3\u0bbf\u0b95\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0b9a\u0ba9\u0bbf\u0b95\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8".split("_"),
                    weekdaysShort: "\u0b9e\u0bbe\u0baf\u0bbf\u0bb1\u0bc1_\u0ba4\u0bbf\u0b99\u0bcd\u0b95\u0bb3\u0bcd_\u0b9a\u0bc6\u0bb5\u0bcd\u0bb5\u0bbe\u0baf\u0bcd_\u0baa\u0bc1\u0ba4\u0ba9\u0bcd_\u0bb5\u0bbf\u0baf\u0bbe\u0bb4\u0ba9\u0bcd_\u0bb5\u0bc6\u0bb3\u0bcd\u0bb3\u0bbf_\u0b9a\u0ba9\u0bbf".split("_"),
                    weekdaysMin: "\u0b9e\u0bbe_\u0ba4\u0bbf_\u0b9a\u0bc6_\u0baa\u0bc1_\u0bb5\u0bbf_\u0bb5\u0bc6_\u0b9a".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, HH:mm",
                        LLLL: "dddd, D MMMM YYYY, HH:mm"
                    },
                    calendar: {
                        sameDay: "[\u0b87\u0ba9\u0bcd\u0bb1\u0bc1] LT",
                        nextDay: "[\u0ba8\u0bbe\u0bb3\u0bc8] LT",
                        nextWeek: "dddd, LT",
                        lastDay: "[\u0ba8\u0bc7\u0bb1\u0bcd\u0bb1\u0bc1] LT",
                        lastWeek: "[\u0b95\u0b9f\u0ba8\u0bcd\u0ba4 \u0bb5\u0bbe\u0bb0\u0bae\u0bcd] dddd, LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s \u0b87\u0bb2\u0bcd",
                        past: "%s \u0bae\u0bc1\u0ba9\u0bcd",
                        s: "\u0b92\u0bb0\u0bc1 \u0b9a\u0bbf\u0bb2 \u0bb5\u0bbf\u0ba8\u0bbe\u0b9f\u0bbf\u0b95\u0bb3\u0bcd",
                        ss: "%d \u0bb5\u0bbf\u0ba8\u0bbe\u0b9f\u0bbf\u0b95\u0bb3\u0bcd",
                        m: "\u0b92\u0bb0\u0bc1 \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0bae\u0bcd",
                        mm: "%d \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0b99\u0bcd\u0b95\u0bb3\u0bcd",
                        h: "\u0b92\u0bb0\u0bc1 \u0bae\u0ba3\u0bbf \u0ba8\u0bc7\u0bb0\u0bae\u0bcd",
                        hh: "%d \u0bae\u0ba3\u0bbf \u0ba8\u0bc7\u0bb0\u0bae\u0bcd",
                        d: "\u0b92\u0bb0\u0bc1 \u0ba8\u0bbe\u0bb3\u0bcd",
                        dd: "%d \u0ba8\u0bbe\u0b9f\u0bcd\u0b95\u0bb3\u0bcd",
                        M: "\u0b92\u0bb0\u0bc1 \u0bae\u0bbe\u0ba4\u0bae\u0bcd",
                        MM: "%d \u0bae\u0bbe\u0ba4\u0b99\u0bcd\u0b95\u0bb3\u0bcd",
                        y: "\u0b92\u0bb0\u0bc1 \u0bb5\u0bb0\u0bc1\u0b9f\u0bae\u0bcd",
                        yy: "%d \u0b86\u0ba3\u0bcd\u0b9f\u0bc1\u0b95\u0bb3\u0bcd"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\u0bb5\u0ba4\u0bc1/,
                    ordinal: function(e) {
                        return e + "\u0bb5\u0ba4\u0bc1"
                    },
                    preparse: function(e) {
                        return e.replace(/[\u0be7\u0be8\u0be9\u0bea\u0beb\u0bec\u0bed\u0bee\u0bef\u0be6]/g, function(e) {
                            return a[e]
                        })
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, function(e) {
                            return t[e]
                        })
                    },
                    meridiemParse: /\u0baf\u0bbe\u0bae\u0bae\u0bcd|\u0bb5\u0bc8\u0b95\u0bb1\u0bc8|\u0b95\u0bbe\u0bb2\u0bc8|\u0ba8\u0ba3\u0bcd\u0baa\u0b95\u0bb2\u0bcd|\u0b8e\u0bb1\u0bcd\u0baa\u0bbe\u0b9f\u0bc1|\u0bae\u0bbe\u0bb2\u0bc8/,
                    meridiem: function(e, t, a) {
                        return e < 2 ? " \u0baf\u0bbe\u0bae\u0bae\u0bcd" : e < 6 ? " \u0bb5\u0bc8\u0b95\u0bb1\u0bc8" : e < 10 ? " \u0b95\u0bbe\u0bb2\u0bc8" : e < 14 ? " \u0ba8\u0ba3\u0bcd\u0baa\u0b95\u0bb2\u0bcd" : e < 18 ? " \u0b8e\u0bb1\u0bcd\u0baa\u0bbe\u0b9f\u0bc1" : e < 22 ? " \u0bae\u0bbe\u0bb2\u0bc8" : " \u0baf\u0bbe\u0bae\u0bae\u0bcd"
                    },
                    meridiemHour: function(e, t) {
                        return 12 === e && (e = 0), "\u0baf\u0bbe\u0bae\u0bae\u0bcd" === t ? e < 2 ? e : e + 12 : "\u0bb5\u0bc8\u0b95\u0bb1\u0bc8" === t || "\u0b95\u0bbe\u0bb2\u0bc8" === t ? e : "\u0ba8\u0ba3\u0bcd\u0baa\u0b95\u0bb2\u0bcd" === t && e >= 10 ? e : e + 12
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                })
            }(a("wd/R"))
        },
        PpIw: function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = {
                        1: "\u0ce7",
                        2: "\u0ce8",
                        3: "\u0ce9",
                        4: "\u0cea",
                        5: "\u0ceb",
                        6: "\u0cec",
                        7: "\u0ced",
                        8: "\u0cee",
                        9: "\u0cef",
                        0: "\u0ce6"
                    },
                    a = {
                        "\u0ce7": "1",
                        "\u0ce8": "2",
                        "\u0ce9": "3",
                        "\u0cea": "4",
                        "\u0ceb": "5",
                        "\u0cec": "6",
                        "\u0ced": "7",
                        "\u0cee": "8",
                        "\u0cef": "9",
                        "\u0ce6": "0"
                    };
                e.defineLocale("kn", {
                    months: "\u0c9c\u0ca8\u0cb5\u0cb0\u0cbf_\u0cab\u0cc6\u0cac\u0ccd\u0cb0\u0cb5\u0cb0\u0cbf_\u0cae\u0cbe\u0cb0\u0ccd\u0c9a\u0ccd_\u0c8f\u0caa\u0ccd\u0cb0\u0cbf\u0cb2\u0ccd_\u0cae\u0cc6\u0cd5_\u0c9c\u0cc2\u0ca8\u0ccd_\u0c9c\u0cc1\u0cb2\u0cc6\u0cd6_\u0c86\u0c97\u0cb8\u0ccd\u0c9f\u0ccd_\u0cb8\u0cc6\u0caa\u0ccd\u0c9f\u0cc6\u0c82\u0cac\u0cb0\u0ccd_\u0c85\u0c95\u0ccd\u0c9f\u0cc6\u0cc2\u0cd5\u0cac\u0cb0\u0ccd_\u0ca8\u0cb5\u0cc6\u0c82\u0cac\u0cb0\u0ccd_\u0ca1\u0cbf\u0cb8\u0cc6\u0c82\u0cac\u0cb0\u0ccd".split("_"),
                    monthsShort: "\u0c9c\u0ca8_\u0cab\u0cc6\u0cac\u0ccd\u0cb0_\u0cae\u0cbe\u0cb0\u0ccd\u0c9a\u0ccd_\u0c8f\u0caa\u0ccd\u0cb0\u0cbf\u0cb2\u0ccd_\u0cae\u0cc6\u0cd5_\u0c9c\u0cc2\u0ca8\u0ccd_\u0c9c\u0cc1\u0cb2\u0cc6\u0cd6_\u0c86\u0c97\u0cb8\u0ccd\u0c9f\u0ccd_\u0cb8\u0cc6\u0caa\u0ccd\u0c9f\u0cc6\u0c82_\u0c85\u0c95\u0ccd\u0c9f\u0cc6\u0cc2\u0cd5_\u0ca8\u0cb5\u0cc6\u0c82_\u0ca1\u0cbf\u0cb8\u0cc6\u0c82".split("_"),
                    monthsParseExact: !0,
                    weekdays: "\u0cad\u0cbe\u0ca8\u0cc1\u0cb5\u0cbe\u0cb0_\u0cb8\u0cc6\u0cc2\u0cd5\u0cae\u0cb5\u0cbe\u0cb0_\u0cae\u0c82\u0c97\u0cb3\u0cb5\u0cbe\u0cb0_\u0cac\u0cc1\u0ca7\u0cb5\u0cbe\u0cb0_\u0c97\u0cc1\u0cb0\u0cc1\u0cb5\u0cbe\u0cb0_\u0cb6\u0cc1\u0c95\u0ccd\u0cb0\u0cb5\u0cbe\u0cb0_\u0cb6\u0ca8\u0cbf\u0cb5\u0cbe\u0cb0".split("_"),
                    weekdaysShort: "\u0cad\u0cbe\u0ca8\u0cc1_\u0cb8\u0cc6\u0cc2\u0cd5\u0cae_\u0cae\u0c82\u0c97\u0cb3_\u0cac\u0cc1\u0ca7_\u0c97\u0cc1\u0cb0\u0cc1_\u0cb6\u0cc1\u0c95\u0ccd\u0cb0_\u0cb6\u0ca8\u0cbf".split("_"),
                    weekdaysMin: "\u0cad\u0cbe_\u0cb8\u0cc6\u0cc2\u0cd5_\u0cae\u0c82_\u0cac\u0cc1_\u0c97\u0cc1_\u0cb6\u0cc1_\u0cb6".split("_"),
                    longDateFormat: {
                        LT: "A h:mm",
                        LTS: "A h:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, A h:mm",
                        LLLL: "dddd, D MMMM YYYY, A h:mm"
                    },
                    calendar: {
                        sameDay: "[\u0c87\u0c82\u0ca6\u0cc1] LT",
                        nextDay: "[\u0ca8\u0cbe\u0cb3\u0cc6] LT",
                        nextWeek: "dddd, LT",
                        lastDay: "[\u0ca8\u0cbf\u0ca8\u0ccd\u0ca8\u0cc6] LT",
                        lastWeek: "[\u0c95\u0cc6\u0cc2\u0ca8\u0cc6\u0caf] dddd, LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s \u0ca8\u0c82\u0ca4\u0cb0",
                        past: "%s \u0cb9\u0cbf\u0c82\u0ca6\u0cc6",
                        s: "\u0c95\u0cc6\u0cb2\u0cb5\u0cc1 \u0c95\u0ccd\u0cb7\u0ca3\u0c97\u0cb3\u0cc1",
                        ss: "%d \u0cb8\u0cc6\u0c95\u0cc6\u0c82\u0ca1\u0cc1\u0c97\u0cb3\u0cc1",
                        m: "\u0c92\u0c82\u0ca6\u0cc1 \u0ca8\u0cbf\u0cae\u0cbf\u0cb7",
                        mm: "%d \u0ca8\u0cbf\u0cae\u0cbf\u0cb7",
                        h: "\u0c92\u0c82\u0ca6\u0cc1 \u0c97\u0c82\u0c9f\u0cc6",
                        hh: "%d \u0c97\u0c82\u0c9f\u0cc6",
                        d: "\u0c92\u0c82\u0ca6\u0cc1 \u0ca6\u0cbf\u0ca8",
                        dd: "%d \u0ca6\u0cbf\u0ca8",
                        M: "\u0c92\u0c82\u0ca6\u0cc1 \u0ca4\u0cbf\u0c82\u0c97\u0cb3\u0cc1",
                        MM: "%d \u0ca4\u0cbf\u0c82\u0c97\u0cb3\u0cc1",
                        y: "\u0c92\u0c82\u0ca6\u0cc1 \u0cb5\u0cb0\u0ccd\u0cb7",
                        yy: "%d \u0cb5\u0cb0\u0ccd\u0cb7"
                    },
                    preparse: function(e) {
                        return e.replace(/[\u0ce7\u0ce8\u0ce9\u0cea\u0ceb\u0cec\u0ced\u0cee\u0cef\u0ce6]/g, function(e) {
                            return a[e]
                        })
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, function(e) {
                            return t[e]
                        })
                    },
                    meridiemParse: /\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf|\u0cac\u0cc6\u0cb3\u0cbf\u0c97\u0ccd\u0c97\u0cc6|\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0cb9\u0ccd\u0ca8|\u0cb8\u0c82\u0c9c\u0cc6/,
                    meridiemHour: function(e, t) {
                        return 12 === e && (e = 0), "\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf" === t ? e < 4 ? e : e + 12 : "\u0cac\u0cc6\u0cb3\u0cbf\u0c97\u0ccd\u0c97\u0cc6" === t ? e : "\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0cb9\u0ccd\u0ca8" === t ? e >= 10 ? e : e + 12 : "\u0cb8\u0c82\u0c9c\u0cc6" === t ? e + 12 : void 0
                    },
                    meridiem: function(e, t, a) {
                        return e < 4 ? "\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf" : e < 10 ? "\u0cac\u0cc6\u0cb3\u0cbf\u0c97\u0ccd\u0c97\u0cc6" : e < 17 ? "\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0cb9\u0ccd\u0ca8" : e < 20 ? "\u0cb8\u0c82\u0c9c\u0cc6" : "\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(\u0ca8\u0cc6\u0cd5)/,
                    ordinal: function(e) {
                        return e + "\u0ca8\u0cc6\u0cd5"
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                })
            }(a("wd/R"))
        },
        Qexa: function(e, t, a) {
            "use strict";
            e.exports = function(e) {
                e.Bubble = function(t, a) {
                    return a.type = "bubble", new e(t, a)
                }
            }
        },
        Qj4J: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("ar-kw", {
                    months: "\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648\u0632_\u063a\u0634\u062a_\u0634\u062a\u0646\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0646\u0628\u0631_\u062f\u062c\u0646\u0628\u0631".split("_"),
                    monthsShort: "\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648\u0632_\u063a\u0634\u062a_\u0634\u062a\u0646\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0646\u0628\u0631_\u062f\u062c\u0646\u0628\u0631".split("_"),
                    weekdays: "\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062a\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"),
                    weekdaysShort: "\u0627\u062d\u062f_\u0627\u062a\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"),
                    weekdaysMin: "\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                        nextDay: "[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                        nextWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                        lastDay: "[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                        lastWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "\u0641\u064a %s",
                        past: "\u0645\u0646\u0630 %s",
                        s: "\u062b\u0648\u0627\u0646",
                        ss: "%d \u062b\u0627\u0646\u064a\u0629",
                        m: "\u062f\u0642\u064a\u0642\u0629",
                        mm: "%d \u062f\u0642\u0627\u0626\u0642",
                        h: "\u0633\u0627\u0639\u0629",
                        hh: "%d \u0633\u0627\u0639\u0627\u062a",
                        d: "\u064a\u0648\u0645",
                        dd: "%d \u0623\u064a\u0627\u0645",
                        M: "\u0634\u0647\u0631",
                        MM: "%d \u0623\u0634\u0647\u0631",
                        y: "\u0633\u0646\u0629",
                        yy: "%d \u0633\u0646\u0648\u0627\u062a"
                    },
                    week: {
                        dow: 0,
                        doy: 12
                    }
                })
            }(a("wd/R"))
        },
        RAwQ: function(e, t, a) {
            ! function(e) {
                "use strict";

                function t(e, t, a, n) {
                    var i = {
                        m: ["eng Minutt", "enger Minutt"],
                        h: ["eng Stonn", "enger Stonn"],
                        d: ["een Dag", "engem Dag"],
                        M: ["ee Mount", "engem Mount"],
                        y: ["ee Joer", "engem Joer"]
                    };
                    return t ? i[a][0] : i[a][1]
                }

                function a(e) {
                    if (e = parseInt(e, 10), isNaN(e)) return !1;
                    if (e < 0) return !0;
                    if (e < 10) return 4 <= e && e <= 7;
                    if (e < 100) {
                        var t = e % 10;
                        return a(0 === t ? e / 10 : t)
                    }
                    if (e < 1e4) {
                        for (; e >= 10;) e /= 10;
                        return a(e)
                    }
                    return a(e /= 1e3)
                }
                e.defineLocale("lb", {
                    months: "Januar_Februar_M\xe4erz_Abr\xebll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                    monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "Sonndeg_M\xe9indeg_D\xebnschdeg_M\xebttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
                    weekdaysShort: "So._M\xe9._D\xeb._M\xeb._Do._Fr._Sa.".split("_"),
                    weekdaysMin: "So_M\xe9_D\xeb_M\xeb_Do_Fr_Sa".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "H:mm [Auer]",
                        LTS: "H:mm:ss [Auer]",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY H:mm [Auer]",
                        LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
                    },
                    calendar: {
                        sameDay: "[Haut um] LT",
                        sameElse: "L",
                        nextDay: "[Muer um] LT",
                        nextWeek: "dddd [um] LT",
                        lastDay: "[G\xebschter um] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 2:
                                case 4:
                                    return "[Leschten] dddd [um] LT";
                                default:
                                    return "[Leschte] dddd [um] LT"
                            }
                        }
                    },
                    relativeTime: {
                        future: function(e) {
                            return a(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e
                        },
                        past: function(e) {
                            return a(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e
                        },
                        s: "e puer Sekonnen",
                        ss: "%d Sekonnen",
                        m: t,
                        mm: "%d Minutten",
                        h: t,
                        hh: "%d Stonnen",
                        d: t,
                        dd: "%d Deeg",
                        M: t,
                        MM: "%d M\xe9int",
                        y: t,
                        yy: "%d Joer"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(a("wd/R"))
        },
        RCHg: function(e, t, a) {
            "use strict";
            var n = a("wd/R");
            n = "function" == typeof n ? n : window.moment;
            var i = a("CDJp"),
                r = a("RDha"),
                s = Number.MIN_SAFE_INTEGER || -9007199254740991,
                o = Number.MAX_SAFE_INTEGER || 9007199254740991,
                d = {
                    millisecond: {
                        common: !0,
                        size: 1,
                        steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
                    },
                    second: {
                        common: !0,
                        size: 1e3,
                        steps: [1, 2, 5, 10, 30]
                    },
                    minute: {
                        common: !0,
                        size: 6e4,
                        steps: [1, 2, 5, 10, 30]
                    },
                    hour: {
                        common: !0,
                        size: 36e5,
                        steps: [1, 2, 3, 6, 12]
                    },
                    day: {
                        common: !0,
                        size: 864e5,
                        steps: [1, 2, 5]
                    },
                    week: {
                        common: !1,
                        size: 6048e5,
                        steps: [1, 2, 3, 4]
                    },
                    month: {
                        common: !0,
                        size: 2628e6,
                        steps: [1, 2, 3]
                    },
                    quarter: {
                        common: !1,
                        size: 7884e6,
                        steps: [1, 2, 3, 4]
                    },
                    year: {
                        common: !0,
                        size: 3154e7
                    }
                },
                l = Object.keys(d);

            function u(e, t) {
                return e - t
            }

            function _(e) {
                var t, a, n, i = {},
                    r = [];
                for (t = 0, a = e.length; t < a; ++t) i[n = e[t]] || (i[n] = !0, r.push(n));
                return r
            }

            function m(e, t, a, n) {
                var i = function(e, t, a) {
                        for (var n, i, r, s = 0, o = e.length - 1; s >= 0 && s <= o;) {
                            if (r = e[n = s + o >> 1], !(i = e[n - 1] || null)) return {
                                lo: null,
                                hi: r
                            };
                            if (r[t] < a) s = n + 1;
                            else {
                                if (!(i[t] > a)) return {
                                    lo: i,
                                    hi: r
                                };
                                o = n - 1
                            }
                        }
                        return {
                            lo: r,
                            hi: null
                        }
                    }(e, t, a),
                    r = i.lo ? i.hi ? i.lo : e[e.length - 2] : e[0],
                    s = i.lo ? i.hi ? i.hi : e[e.length - 1] : e[1],
                    o = s[t] - r[t];
                return r[n] + (s[n] - r[n]) * (o ? (a - r[t]) / o : 0)
            }

            function h(e, t) {
                var a = t.parser,
                    i = t.parser || t.format;
                return "function" == typeof a ? a(e) : "string" == typeof e && "string" == typeof i ? n(e, i) : (e instanceof n || (e = n(e)), e.isValid() ? e : "function" == typeof i ? i(e) : e)
            }

            function c(e, t) {
                if (r.isNullOrUndef(e)) return null;
                var a = t.options.time,
                    n = h(t.getRightValue(e), a);
                return n.isValid() ? (a.round && n.startOf(a.round), n.valueOf()) : null
            }

            function f(e) {
                for (var t = l.indexOf(e) + 1, a = l.length; t < a; ++t)
                    if (d[l[t]].common) return l[t]
            }
            e.exports = function(e) {
                var t = e.Scale.extend({
                    initialize: function() {
                        if (!n) throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");
                        this.mergeTicksOptions(), e.Scale.prototype.initialize.call(this)
                    },
                    update: function() {
                        var t = this.options;
                        return t.time && t.time.format && console.warn("options.time.format is deprecated and replaced by options.time.parser."), e.Scale.prototype.update.apply(this, arguments)
                    },
                    getRightValue: function(t) {
                        return t && void 0 !== t.t && (t = t.t), e.Scale.prototype.getRightValue.call(this, t)
                    },
                    determineDataLimits: function() {
                        var e, t, a, i, d, l, m = this,
                            h = m.chart,
                            f = m.options.time,
                            p = f.unit || "day",
                            M = o,
                            y = s,
                            g = [],
                            L = [],
                            v = [];
                        for (e = 0, a = h.data.labels.length; e < a; ++e) v.push(c(h.data.labels[e], m));
                        for (e = 0, a = (h.data.datasets || []).length; e < a; ++e)
                            if (h.isDatasetVisible(e))
                                if (r.isObject((d = h.data.datasets[e].data)[0]))
                                    for (L[e] = [], t = 0, i = d.length; t < i; ++t) l = c(d[t], m), g.push(l), L[e][t] = l;
                                else g.push.apply(g, v), L[e] = v.slice(0);
                        else L[e] = [];
                        v.length && (v = _(v).sort(u), M = Math.min(M, v[0]), y = Math.max(y, v[v.length - 1])), g.length && (g = _(g).sort(u), M = Math.min(M, g[0]), y = Math.max(y, g[g.length - 1])), M = c(f.min, m) || M, y = c(f.max, m) || y, M = M === o ? +n().startOf(p) : M, y = y === s ? +n().endOf(p) + 1 : y, m.min = Math.min(M, y), m.max = Math.max(M + 1, y), m._horizontal = m.isHorizontal(), m._table = [], m._timestamps = {
                            data: g,
                            datasets: L,
                            labels: v
                        }
                    },
                    buildTicks: function() {
                        var e, t, a, i = this,
                            s = i.min,
                            u = i.max,
                            _ = i.options,
                            p = _.time,
                            M = [],
                            y = [];
                        switch (_.ticks.source) {
                            case "data":
                                M = i._timestamps.data;
                                break;
                            case "labels":
                                M = i._timestamps.labels;
                                break;
                            case "auto":
                            default:
                                M = function(e, t, a, i) {
                                    var s, u = i.time,
                                        _ = u.unit || function(e, t, a, n) {
                                            var i, r, s = l.length;
                                            for (i = l.indexOf(u.minUnit); i < s - 1; ++i)
                                                if ((r = d[l[i]]).common && Math.ceil((a - t) / ((r.steps ? r.steps[r.steps.length - 1] : o) * r.size)) <= n) return l[i];
                                            return l[s - 1]
                                        }(0, e, t, a),
                                        m = f(_),
                                        h = r.valueOrDefault(u.stepSize, u.unitStepSize),
                                        c = "week" === _ && u.isoWeekday,
                                        p = i.ticks.major.enabled,
                                        M = d[_],
                                        y = n(e),
                                        g = n(t),
                                        L = [];
                                    for (h || (h = function(e, t, a, n) {
                                            var i, r, s, o = t - e,
                                                l = d[_],
                                                u = l.size,
                                                m = l.steps;
                                            if (!m) return Math.ceil(o / (n * u));
                                            for (i = 0, r = m.length; i < r && (s = m[i], !(Math.ceil(o / (u * s)) <= n)); ++i);
                                            return s
                                        }(e, t, 0, a)), c && (y = y.isoWeekday(c), g = g.isoWeekday(c)), y = y.startOf(c ? "day" : _), (g = g.startOf(c ? "day" : _)) < t && g.add(1, _), s = n(y), p && m && !c && !u.round && (s.startOf(m), s.add(~~((y - s) / (M.size * h)) * h, _)); s < g; s.add(h, _)) L.push(+s);
                                    return L.push(+s), L
                                }(s, u, i.getLabelCapacity(s), _)
                        }
                        for ("ticks" === _.bounds && M.length && (s = M[0], u = M[M.length - 1]), s = c(p.min, i) || s, u = c(p.max, i) || u, e = 0, t = M.length; e < t; ++e)(a = M[e]) >= s && a <= u && y.push(a);
                        return i.min = s, i.max = u, i._unit = p.unit || function(e, t, a, r) {
                                var s, o, u = n.duration(n(i.max).diff(n(a)));
                                for (s = l.length - 1; s >= l.indexOf(t); s--)
                                    if (d[o = l[s]].common && u.as(o) >= e.length) return o;
                                return l[t ? l.indexOf(t) : 0]
                            }(y, p.minUnit, i.min), i._majorUnit = f(i._unit), i._table = function(e, t, a, n) {
                                if ("linear" === _.distribution || !e.length) return [{
                                    time: t,
                                    pos: 0
                                }, {
                                    time: a,
                                    pos: 1
                                }];
                                var i, r, s, o, d, l = [],
                                    u = [t];
                                for (i = 0, r = e.length; i < r; ++i)(o = e[i]) > t && o < a && u.push(o);
                                for (u.push(a), i = 0, r = u.length; i < r; ++i) d = u[i + 1], o = u[i], void 0 !== (s = u[i - 1]) && void 0 !== d && Math.round((d + s) / 2) === o || l.push({
                                    time: o,
                                    pos: i / (r - 1)
                                });
                                return l
                            }(i._timestamps.data, s, u), i._offsets = function(e, t, a, n, i) {
                                var r, s, o = 0,
                                    d = 0;
                                return i.offset && t.length && (i.time.min || (s = t[0], o = (m(e, "time", r = t.length > 1 ? t[1] : n, "pos") - m(e, "time", s, "pos")) / 2), i.time.max || (r = t[t.length - 1], s = t.length > 1 ? t[t.length - 2] : a, d = (m(e, "time", r, "pos") - m(e, "time", s, "pos")) / 2)), {
                                    left: o,
                                    right: d
                                }
                            }(i._table, y, s, u, _), i._labelFormat = function(e, t) {
                                var a, n, i, r = e.length;
                                for (a = 0; a < r; a++) {
                                    if (0 !== (n = h(e[a], t)).millisecond()) return "MMM D, YYYY h:mm:ss.SSS a";
                                    0 === n.second() && 0 === n.minute() && 0 === n.hour() || (i = !0)
                                }
                                return i ? "MMM D, YYYY h:mm:ss a" : "MMM D, YYYY"
                            }(i._timestamps.data, p),
                            function(e, t) {
                                var a, i, r, s, o = [];
                                for (a = 0, i = e.length; a < i; ++a) r = e[a], s = !!t && r === +n(r).startOf(t), o.push({
                                    value: r,
                                    major: s
                                });
                                return o
                            }(y, i._majorUnit)
                    },
                    getLabelForIndex: function(e, t) {
                        var a = this.chart.data,
                            n = this.options.time,
                            i = a.labels && e < a.labels.length ? a.labels[e] : "",
                            s = a.datasets[t].data[e];
                        return r.isObject(s) && (i = this.getRightValue(s)), n.tooltipFormat ? h(i, n).format(n.tooltipFormat) : "string" == typeof i ? i : h(i, n).format(this._labelFormat)
                    },
                    tickFormatFunction: function(e, t, a, n) {
                        var i = this.options,
                            s = e.valueOf(),
                            o = i.time.displayFormats,
                            d = o[this._unit],
                            l = this._majorUnit,
                            u = o[l],
                            _ = e.clone().startOf(l).valueOf(),
                            m = i.ticks.major,
                            h = m.enabled && l && u && s === _,
                            c = e.format(n || (h ? u : d)),
                            f = h ? m : i.ticks.minor,
                            p = r.valueOrDefault(f.callback, f.userCallback);
                        return p ? p(c, t, a) : c
                    },
                    convertTicksToLabels: function(e) {
                        var t, a, i = [];
                        for (t = 0, a = e.length; t < a; ++t) i.push(this.tickFormatFunction(n(e[t].value), t, e));
                        return i
                    },
                    getPixelForOffset: function(e) {
                        var t = this,
                            a = t._horizontal ? t.width : t.height,
                            n = t._horizontal ? t.left : t.top,
                            i = m(t._table, "time", e, "pos");
                        return n + a * (t._offsets.left + i) / (t._offsets.left + 1 + t._offsets.right)
                    },
                    getPixelForValue: function(e, t, a) {
                        var n = null;
                        if (void 0 !== t && void 0 !== a && (n = this._timestamps.datasets[a][t]), null === n && (n = c(e, this)), null !== n) return this.getPixelForOffset(n)
                    },
                    getPixelForTick: function(e) {
                        var t = this.getTicks();
                        return e >= 0 && e < t.length ? this.getPixelForOffset(t[e].value) : null
                    },
                    getValueForPixel: function(e) {
                        var t = this,
                            a = t._horizontal ? t.width : t.height,
                            i = m(t._table, "pos", (a ? (e - (t._horizontal ? t.left : t.top)) / a : 0) * (t._offsets.left + 1 + t._offsets.left) - t._offsets.right, "time");
                        return n(i)
                    },
                    getLabelWidth: function(e) {
                        var t = this.options.ticks,
                            a = this.ctx.measureText(e).width,
                            n = r.toRadians(t.maxRotation),
                            s = Math.cos(n),
                            o = Math.sin(n);
                        return a * s + r.valueOrDefault(t.fontSize, i.global.defaultFontSize) * o
                    },
                    getLabelCapacity: function(e) {
                        var t = this,
                            a = t.options.time.displayFormats.millisecond,
                            i = t.tickFormatFunction(n(e), 0, [], a),
                            r = t.getLabelWidth(i),
                            s = t.isHorizontal() ? t.width : t.height,
                            o = Math.floor(s / r);
                        return o > 0 ? o : 1
                    }
                });
                e.scaleService.registerScaleType("time", t, {
                    position: "bottom",
                    distribution: "linear",
                    bounds: "data",
                    time: {
                        parser: !1,
                        format: !1,
                        unit: !1,
                        round: !1,
                        displayFormat: !1,
                        isoWeekday: !1,
                        minUnit: "millisecond",
                        displayFormats: {
                            millisecond: "h:mm:ss.SSS a",
                            second: "h:mm:ss a",
                            minute: "h:mm a",
                            hour: "hA",
                            day: "MMM D",
                            week: "ll",
                            month: "MMM YYYY",
                            quarter: "[Q]Q - YYYY",
                            year: "YYYY"
                        }
                    },
                    ticks: {
                        autoSkip: !1,
                        source: "auto",
                        major: {
                            enabled: !1
                        }
                    }
                })
            }
        },
        RDha: function(e, t, a) {
            "use strict";
            e.exports = a("TC34"), e.exports.easing = a("u0Op"), e.exports.canvas = a("Sfow"), e.exports.options = a("As3K")
        },
        RnhZ: function(e, t, a) {
            var n = {
                "./af": "K/tc",
                "./af.js": "K/tc",
                "./ar": "jnO4",
                "./ar-dz": "o1bE",
                "./ar-dz.js": "o1bE",
                "./ar-kw": "Qj4J",
                "./ar-kw.js": "Qj4J",
                "./ar-ly": "HP3h",
                "./ar-ly.js": "HP3h",
                "./ar-ma": "CoRJ",
                "./ar-ma.js": "CoRJ",
                "./ar-sa": "gjCT",
                "./ar-sa.js": "gjCT",
                "./ar-tn": "bYM6",
                "./ar-tn.js": "bYM6",
                "./ar.js": "jnO4",
                "./az": "SFxW",
                "./az.js": "SFxW",
                "./be": "H8ED",
                "./be.js": "H8ED",
                "./bg": "hKrs",
                "./bg.js": "hKrs",
                "./bm": "p/rL",
                "./bm.js": "p/rL",
                "./bn": "kEOa",
                "./bn.js": "kEOa",
                "./bo": "0mo+",
                "./bo.js": "0mo+",
                "./br": "aIdf",
                "./br.js": "aIdf",
                "./bs": "JVSJ",
                "./bs.js": "JVSJ",
                "./ca": "1xZ4",
                "./ca.js": "1xZ4",
                "./cs": "PA2r",
                "./cs.js": "PA2r",
                "./cv": "A+xa",
                "./cv.js": "A+xa",
                "./cy": "l5ep",
                "./cy.js": "l5ep",
                "./da": "DxQv",
                "./da.js": "DxQv",
                "./de": "tGlX",
                "./de-at": "s+uk",
                "./de-at.js": "s+uk",
                "./de-ch": "u3GI",
                "./de-ch.js": "u3GI",
                "./de.js": "tGlX",
                "./dv": "WYrj",
                "./dv.js": "WYrj",
                "./el": "jUeY",
                "./el.js": "jUeY",
                "./en-au": "Dmvi",
                "./en-au.js": "Dmvi",
                "./en-ca": "OIYi",
                "./en-ca.js": "OIYi",
                "./en-gb": "Oaa7",
                "./en-gb.js": "Oaa7",
                "./en-ie": "4dOw",
                "./en-ie.js": "4dOw",
                "./en-il": "czMo",
                "./en-il.js": "czMo",
                "./en-nz": "b1Dy",
                "./en-nz.js": "b1Dy",
                "./eo": "Zduo",
                "./eo.js": "Zduo",
                "./es": "iYuL",
                "./es-do": "CjzT",
                "./es-do.js": "CjzT",
                "./es-us": "Vclq",
                "./es-us.js": "Vclq",
                "./es.js": "iYuL",
                "./et": "7BjC",
                "./et.js": "7BjC",
                "./eu": "D/JM",
                "./eu.js": "D/JM",
                "./fa": "jfSC",
                "./fa.js": "jfSC",
                "./fi": "gekB",
                "./fi.js": "gekB",
                "./fo": "ByF4",
                "./fo.js": "ByF4",
                "./fr": "nyYc",
                "./fr-ca": "2fjn",
                "./fr-ca.js": "2fjn",
                "./fr-ch": "Dkky",
                "./fr-ch.js": "Dkky",
                "./fr.js": "nyYc",
                "./fy": "cRix",
                "./fy.js": "cRix",
                "./gd": "9rRi",
                "./gd.js": "9rRi",
                "./gl": "iEDd",
                "./gl.js": "iEDd",
                "./gom-latn": "DKr+",
                "./gom-latn.js": "DKr+",
                "./gu": "4MV3",
                "./gu.js": "4MV3",
                "./he": "x6pH",
                "./he.js": "x6pH",
                "./hi": "3E1r",
                "./hi.js": "3E1r",
                "./hr": "S6ln",
                "./hr.js": "S6ln",
                "./hu": "WxRl",
                "./hu.js": "WxRl",
                "./hy-am": "1rYy",
                "./hy-am.js": "1rYy",
                "./id": "UDhR",
                "./id.js": "UDhR",
                "./is": "BVg3",
                "./is.js": "BVg3",
                "./it": "bpih",
                "./it.js": "bpih",
                "./ja": "B55N",
                "./ja.js": "B55N",
                "./jv": "tUCv",
                "./jv.js": "tUCv",
                "./ka": "IBtZ",
                "./ka.js": "IBtZ",
                "./kk": "bXm7",
                "./kk.js": "bXm7",
                "./km": "6B0Y",
                "./km.js": "6B0Y",
                "./kn": "PpIw",
                "./kn.js": "PpIw",
                "./ko": "Ivi+",
                "./ko.js": "Ivi+",
                "./ky": "lgnt",
                "./ky.js": "lgnt",
                "./lb": "RAwQ",
                "./lb.js": "RAwQ",
                "./lo": "sp3z",
                "./lo.js": "sp3z",
                "./lt": "JvlW",
                "./lt.js": "JvlW",
                "./lv": "uXwI",
                "./lv.js": "uXwI",
                "./me": "KTz0",
                "./me.js": "KTz0",
                "./mi": "aIsn",
                "./mi.js": "aIsn",
                "./mk": "aQkU",
                "./mk.js": "aQkU",
                "./ml": "AvvY",
                "./ml.js": "AvvY",
                "./mn": "lYtQ",
                "./mn.js": "lYtQ",
                "./mr": "Ob0Z",
                "./mr.js": "Ob0Z",
                "./ms": "6+QB",
                "./ms-my": "ZAMP",
                "./ms-my.js": "ZAMP",
                "./ms.js": "6+QB",
                "./mt": "G0Uy",
                "./mt.js": "G0Uy",
                "./my": "honF",
                "./my.js": "honF",
                "./nb": "bOMt",
                "./nb.js": "bOMt",
                "./ne": "OjkT",
                "./ne.js": "OjkT",
                "./nl": "+s0g",
                "./nl-be": "2ykv",
                "./nl-be.js": "2ykv",
                "./nl.js": "+s0g",
                "./nn": "uEye",
                "./nn.js": "uEye",
                "./pa-in": "8/+R",
                "./pa-in.js": "8/+R",
                "./pl": "jVdC",
                "./pl.js": "jVdC",
                "./pt": "8mBD",
                "./pt-br": "0tRk",
                "./pt-br.js": "0tRk",
                "./pt.js": "8mBD",
                "./ro": "lyxo",
                "./ro.js": "lyxo",
                "./ru": "lXzo",
                "./ru.js": "lXzo",
                "./sd": "Z4QM",
                "./sd.js": "Z4QM",
                "./se": "//9w",
                "./se.js": "//9w",
                "./si": "7aV9",
                "./si.js": "7aV9",
                "./sk": "e+ae",
                "./sk.js": "e+ae",
                "./sl": "gVVK",
                "./sl.js": "gVVK",
                "./sq": "yPMs",
                "./sq.js": "yPMs",
                "./sr": "zx6S",
                "./sr-cyrl": "E+lV",
                "./sr-cyrl.js": "E+lV",
                "./sr.js": "zx6S",
                "./ss": "Ur1D",
                "./ss.js": "Ur1D",
                "./sv": "X709",
                "./sv.js": "X709",
                "./sw": "dNwA",
                "./sw.js": "dNwA",
                "./ta": "PeUW",
                "./ta.js": "PeUW",
                "./te": "XLvN",
                "./te.js": "XLvN",
                "./tet": "V2x9",
                "./tet.js": "V2x9",
                "./tg": "Oxv6",
                "./tg.js": "Oxv6",
                "./th": "EOgW",
                "./th.js": "EOgW",
                "./tl-ph": "Dzi0",
                "./tl-ph.js": "Dzi0",
                "./tlh": "z3Vd",
                "./tlh.js": "z3Vd",
                "./tr": "DoHr",
                "./tr.js": "DoHr",
                "./tzl": "z1FC",
                "./tzl.js": "z1FC",
                "./tzm": "wQk9",
                "./tzm-latn": "tT3J",
                "./tzm-latn.js": "tT3J",
                "./tzm.js": "wQk9",
                "./ug-cn": "YRex",
                "./ug-cn.js": "YRex",
                "./uk": "raLr",
                "./uk.js": "raLr",
                "./ur": "UpQW",
                "./ur.js": "UpQW",
                "./uz": "Loxo",
                "./uz-latn": "AQ68",
                "./uz-latn.js": "AQ68",
                "./uz.js": "Loxo",
                "./vi": "KSF8",
                "./vi.js": "KSF8",
                "./x-pseudo": "/X5v",
                "./x-pseudo.js": "/X5v",
                "./yo": "fzPg",
                "./yo.js": "fzPg",
                "./zh-cn": "XDpg",
                "./zh-cn.js": "XDpg",
                "./zh-hk": "SatO",
                "./zh-hk.js": "SatO",
                "./zh-tw": "kOpN",
                "./zh-tw.js": "kOpN"
            };

            function i(e) {
                var t = r(e);
                return a(t)
            }

            function r(e) {
                var t = n[e];
                if (!(t + 1)) {
                    var a = new Error('Cannot find module "' + e + '".');
                    throw a.code = "MODULE_NOT_FOUND", a
                }
                return t
            }
            i.keys = function() {
                return Object.keys(n)
            }, i.resolve = r, e.exports = i, i.id = "RnhZ"
        },
        "S3/U": function(e, t, a) {
            "use strict";
            e.exports = function(e) {
                e.Scatter = function(t, a) {
                    return a.type = "scatter", new e(t, a)
                }
            }
        },
        S6ln: function(e, t, a) {
            ! function(e) {
                "use strict";

                function t(e, t, a) {
                    var n = e + " ";
                    switch (a) {
                        case "ss":
                            return n + (1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi");
                        case "m":
                            return t ? "jedna minuta" : "jedne minute";
                        case "mm":
                            return n + (1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta");
                        case "h":
                            return t ? "jedan sat" : "jednog sata";
                        case "hh":
                            return n + (1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati");
                        case "dd":
                            return n + (1 === e ? "dan" : "dana");
                        case "MM":
                            return n + (1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci");
                        case "yy":
                            return n + (1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina")
                    }
                }
                e.defineLocale("hr", {
                    months: {
                        format: "sije\u010dnja_velja\u010de_o\u017eujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
                        standalone: "sije\u010danj_velja\u010da_o\u017eujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
                    },
                    monthsShort: "sij._velj._o\u017eu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "nedjelja_ponedjeljak_utorak_srijeda_\u010detvrtak_petak_subota".split("_"),
                    weekdaysShort: "ned._pon._uto._sri._\u010det._pet._sub.".split("_"),
                    weekdaysMin: "ne_po_ut_sr_\u010de_pe_su".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY H:mm",
                        LLLL: "dddd, D. MMMM YYYY H:mm"
                    },
                    calendar: {
                        sameDay: "[danas u] LT",
                        nextDay: "[sutra u] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[u] [nedjelju] [u] LT";
                                case 3:
                                    return "[u] [srijedu] [u] LT";
                                case 6:
                                    return "[u] [subotu] [u] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[u] dddd [u] LT"
                            }
                        },
                        lastDay: "[ju\u010der u] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                case 3:
                                    return "[pro\u0161lu] dddd [u] LT";
                                case 6:
                                    return "[pro\u0161le] [subote] [u] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[pro\u0161li] dddd [u] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "za %s",
                        past: "prije %s",
                        s: "par sekundi",
                        ss: t,
                        m: t,
                        mm: t,
                        h: t,
                        hh: t,
                        d: "dan",
                        dd: t,
                        M: "mjesec",
                        MM: t,
                        y: "godinu",
                        yy: t
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(a("wd/R"))
        },
        S7Ns: function(e, t, a) {
            "use strict";
            e.exports = function(e) {
                e.Doughnut = function(t, a) {
                    return a.type = "doughnut", new e(t, a)
                }
            }
        },
        SFxW: function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = {
                    1: "-inci",
                    5: "-inci",
                    8: "-inci",
                    70: "-inci",
                    80: "-inci",
                    2: "-nci",
                    7: "-nci",
                    20: "-nci",
                    50: "-nci",
                    3: "-\xfcnc\xfc",
                    4: "-\xfcnc\xfc",
                    100: "-\xfcnc\xfc",
                    6: "-nc\u0131",
                    9: "-uncu",
                    10: "-uncu",
                    30: "-uncu",
                    60: "-\u0131nc\u0131",
                    90: "-\u0131nc\u0131"
                };
                e.defineLocale("az", {
                    months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
                    monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
                    weekdays: "Bazar_Bazar ert\u0259si_\xc7\u0259r\u015f\u0259nb\u0259 ax\u015fam\u0131_\xc7\u0259r\u015f\u0259nb\u0259_C\xfcm\u0259 ax\u015fam\u0131_C\xfcm\u0259_\u015e\u0259nb\u0259".split("_"),
                    weekdaysShort: "Baz_BzE_\xc7Ax_\xc7\u0259r_CAx_C\xfcm_\u015e\u0259n".split("_"),
                    weekdaysMin: "Bz_BE_\xc7A_\xc7\u0259_CA_C\xfc_\u015e\u0259".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[bug\xfcn saat] LT",
                        nextDay: "[sabah saat] LT",
                        nextWeek: "[g\u0259l\u0259n h\u0259ft\u0259] dddd [saat] LT",
                        lastDay: "[d\xfcn\u0259n] LT",
                        lastWeek: "[ke\xe7\u0259n h\u0259ft\u0259] dddd [saat] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s sonra",
                        past: "%s \u0259vv\u0259l",
                        s: "birne\xe7\u0259 saniy\u0259",
                        ss: "%d saniy\u0259",
                        m: "bir d\u0259qiq\u0259",
                        mm: "%d d\u0259qiq\u0259",
                        h: "bir saat",
                        hh: "%d saat",
                        d: "bir g\xfcn",
                        dd: "%d g\xfcn",
                        M: "bir ay",
                        MM: "%d ay",
                        y: "bir il",
                        yy: "%d il"
                    },
                    meridiemParse: /gec\u0259|s\u0259h\u0259r|g\xfcnd\xfcz|ax\u015fam/,
                    isPM: function(e) {
                        return /^(g\xfcnd\xfcz|ax\u015fam)$/.test(e)
                    },
                    meridiem: function(e, t, a) {
                        return e < 4 ? "gec\u0259" : e < 12 ? "s\u0259h\u0259r" : e < 17 ? "g\xfcnd\xfcz" : "ax\u015fam"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}-(\u0131nc\u0131|inci|nci|\xfcnc\xfc|nc\u0131|uncu)/,
                    ordinal: function(e) {
                        if (0 === e) return e + "-\u0131nc\u0131";
                        var a = e % 10;
                        return e + (t[a] || t[e % 100 - a] || t[e >= 100 ? 100 : null])
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(a("wd/R"))
        },
        SatO: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("zh-hk", {
                    months: "\u4e00\u6708_\u4e8c\u6708_\u4e09\u6708_\u56db\u6708_\u4e94\u6708_\u516d\u6708_\u4e03\u6708_\u516b\u6708_\u4e5d\u6708_\u5341\u6708_\u5341\u4e00\u6708_\u5341\u4e8c\u6708".split("_"),
                    monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
                    weekdays: "\u661f\u671f\u65e5_\u661f\u671f\u4e00_\u661f\u671f\u4e8c_\u661f\u671f\u4e09_\u661f\u671f\u56db_\u661f\u671f\u4e94_\u661f\u671f\u516d".split("_"),
                    weekdaysShort: "\u9031\u65e5_\u9031\u4e00_\u9031\u4e8c_\u9031\u4e09_\u9031\u56db_\u9031\u4e94_\u9031\u516d".split("_"),
                    weekdaysMin: "\u65e5_\u4e00_\u4e8c_\u4e09_\u56db_\u4e94_\u516d".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "YYYY/MM/DD",
                        LL: "YYYY\u5e74M\u6708D\u65e5",
                        LLL: "YYYY\u5e74M\u6708D\u65e5 HH:mm",
                        LLLL: "YYYY\u5e74M\u6708D\u65e5dddd HH:mm",
                        l: "YYYY/M/D",
                        ll: "YYYY\u5e74M\u6708D\u65e5",
                        lll: "YYYY\u5e74M\u6708D\u65e5 HH:mm",
                        llll: "YYYY\u5e74M\u6708D\u65e5dddd HH:mm"
                    },
                    meridiemParse: /\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/,
                    meridiemHour: function(e, t) {
                        return 12 === e && (e = 0), "\u51cc\u6668" === t || "\u65e9\u4e0a" === t || "\u4e0a\u5348" === t ? e : "\u4e2d\u5348" === t ? e >= 11 ? e : e + 12 : "\u4e0b\u5348" === t || "\u665a\u4e0a" === t ? e + 12 : void 0
                    },
                    meridiem: function(e, t, a) {
                        var n = 100 * e + t;
                        return n < 600 ? "\u51cc\u6668" : n < 900 ? "\u65e9\u4e0a" : n < 1130 ? "\u4e0a\u5348" : n < 1230 ? "\u4e2d\u5348" : n < 1800 ? "\u4e0b\u5348" : "\u665a\u4e0a"
                    },
                    calendar: {
                        sameDay: "[\u4eca\u5929]LT",
                        nextDay: "[\u660e\u5929]LT",
                        nextWeek: "[\u4e0b]ddddLT",
                        lastDay: "[\u6628\u5929]LT",
                        lastWeek: "[\u4e0a]ddddLT",
                        sameElse: "L"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(\u65e5|\u6708|\u9031)/,
                    ordinal: function(e, t) {
                        switch (t) {
                            case "d":
                            case "D":
                            case "DDD":
                                return e + "\u65e5";
                            case "M":
                                return e + "\u6708";
                            case "w":
                            case "W":
                                return e + "\u9031";
                            default:
                                return e
                        }
                    },
                    relativeTime: {
                        future: "%s\u5167",
                        past: "%s\u524d",
                        s: "\u5e7e\u79d2",
                        ss: "%d \u79d2",
                        m: "1 \u5206\u9418",
                        mm: "%d \u5206\u9418",
                        h: "1 \u5c0f\u6642",
                        hh: "%d \u5c0f\u6642",
                        d: "1 \u5929",
                        dd: "%d \u5929",
                        M: "1 \u500b\u6708",
                        MM: "%d \u500b\u6708",
                        y: "1 \u5e74",
                        yy: "%d \u5e74"
                    }
                })
            }(a("wd/R"))
        },
        Sfow: function(e, t, a) {
            "use strict";
            var n = a("TC34");
            t = e.exports = {
                clear: function(e) {
                    e.ctx.clearRect(0, 0, e.width, e.height)
                },
                roundedRect: function(e, t, a, n, i, r) {
                    if (r) {
                        var s = Math.min(r, n / 2),
                            o = Math.min(r, i / 2);
                        e.moveTo(t + s, a), e.lineTo(t + n - s, a), e.quadraticCurveTo(t + n, a, t + n, a + o), e.lineTo(t + n, a + i - o), e.quadraticCurveTo(t + n, a + i, t + n - s, a + i), e.lineTo(t + s, a + i), e.quadraticCurveTo(t, a + i, t, a + i - o), e.lineTo(t, a + o), e.quadraticCurveTo(t, a, t + s, a)
                    } else e.rect(t, a, n, i)
                },
                drawPoint: function(e, t, a, n, i) {
                    var r, s, o, d, l, u;
                    if (!t || "object" != typeof t || "[object HTMLImageElement]" !== (r = t.toString()) && "[object HTMLCanvasElement]" !== r) {
                        if (!(isNaN(a) || a <= 0)) {
                            switch (t) {
                                default: e.beginPath(),
                                e.arc(n, i, a, 0, 2 * Math.PI),
                                e.closePath(),
                                e.fill();
                                break;
                                case "triangle":
                                        e.beginPath(),
                                    l = (s = 3 * a / Math.sqrt(3)) * Math.sqrt(3) / 2,
                                    e.moveTo(n - s / 2, i + l / 3),
                                    e.lineTo(n + s / 2, i + l / 3),
                                    e.lineTo(n, i - 2 * l / 3),
                                    e.closePath(),
                                    e.fill();
                                    break;
                                case "rect":
                                        u = 1 / Math.SQRT2 * a,
                                    e.beginPath(),
                                    e.fillRect(n - u, i - u, 2 * u, 2 * u),
                                    e.strokeRect(n - u, i - u, 2 * u, 2 * u);
                                    break;
                                case "rectRounded":
                                        var _ = a / Math.SQRT2,
                                        m = n - _,
                                        h = i - _,
                                        c = Math.SQRT2 * a;e.beginPath(),
                                    this.roundedRect(e, m, h, c, c, a / 2),
                                    e.closePath(),
                                    e.fill();
                                    break;
                                case "rectRot":
                                        u = 1 / Math.SQRT2 * a,
                                    e.beginPath(),
                                    e.moveTo(n - u, i),
                                    e.lineTo(n, i + u),
                                    e.lineTo(n + u, i),
                                    e.lineTo(n, i - u),
                                    e.closePath(),
                                    e.fill();
                                    break;
                                case "cross":
                                        e.beginPath(),
                                    e.moveTo(n, i + a),
                                    e.lineTo(n, i - a),
                                    e.moveTo(n - a, i),
                                    e.lineTo(n + a, i),
                                    e.closePath();
                                    break;
                                case "crossRot":
                                        e.beginPath(),
                                    o = Math.cos(Math.PI / 4) * a,
                                    d = Math.sin(Math.PI / 4) * a,
                                    e.moveTo(n - o, i - d),
                                    e.lineTo(n + o, i + d),
                                    e.moveTo(n - o, i + d),
                                    e.lineTo(n + o, i - d),
                                    e.closePath();
                                    break;
                                case "star":
                                        e.beginPath(),
                                    e.moveTo(n, i + a),
                                    e.lineTo(n, i - a),
                                    e.moveTo(n - a, i),
                                    e.lineTo(n + a, i),
                                    o = Math.cos(Math.PI / 4) * a,
                                    d = Math.sin(Math.PI / 4) * a,
                                    e.moveTo(n - o, i - d),
                                    e.lineTo(n + o, i + d),
                                    e.moveTo(n - o, i + d),
                                    e.lineTo(n + o, i - d),
                                    e.closePath();
                                    break;
                                case "line":
                                        e.beginPath(),
                                    e.moveTo(n - a, i),
                                    e.lineTo(n + a, i),
                                    e.closePath();
                                    break;
                                case "dash":
                                        e.beginPath(),
                                    e.moveTo(n, i),
                                    e.lineTo(n + a, i),
                                    e.closePath()
                            }
                            e.stroke()
                        }
                    } else e.drawImage(t, n - t.width / 2, i - t.height / 2, t.width, t.height)
                },
                clipArea: function(e, t) {
                    e.save(), e.beginPath(), e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), e.clip()
                },
                unclipArea: function(e) {
                    e.restore()
                },
                lineTo: function(e, t, a, n) {
                    if (a.steppedLine) return "after" === a.steppedLine && !n || "after" !== a.steppedLine && n ? e.lineTo(t.x, a.y) : e.lineTo(a.x, t.y), void e.lineTo(a.x, a.y);
                    a.tension ? e.bezierCurveTo(n ? t.controlPointPreviousX : t.controlPointNextX, n ? t.controlPointPreviousY : t.controlPointNextY, n ? a.controlPointNextX : a.controlPointPreviousX, n ? a.controlPointNextY : a.controlPointPreviousY, a.x, a.y) : e.lineTo(a.x, a.y)
                }
            }, n.clear = t.clear, n.drawRoundedRectangle = function(e) {
                e.beginPath(), t.roundedRect.apply(t, arguments), e.closePath()
            }
        },
        T016: function(e, t, a) {
            "use strict";
            e.exports = {
                aliceblue: [240, 248, 255],
                antiquewhite: [250, 235, 215],
                aqua: [0, 255, 255],
                aquamarine: [127, 255, 212],
                azure: [240, 255, 255],
                beige: [245, 245, 220],
                bisque: [255, 228, 196],
                black: [0, 0, 0],
                blanchedalmond: [255, 235, 205],
                blue: [0, 0, 255],
                blueviolet: [138, 43, 226],
                brown: [165, 42, 42],
                burlywood: [222, 184, 135],
                cadetblue: [95, 158, 160],
                chartreuse: [127, 255, 0],
                chocolate: [210, 105, 30],
                coral: [255, 127, 80],
                cornflowerblue: [100, 149, 237],
                cornsilk: [255, 248, 220],
                crimson: [220, 20, 60],
                cyan: [0, 255, 255],
                darkblue: [0, 0, 139],
                darkcyan: [0, 139, 139],
                darkgoldenrod: [184, 134, 11],
                darkgray: [169, 169, 169],
                darkgreen: [0, 100, 0],
                darkgrey: [169, 169, 169],
                darkkhaki: [189, 183, 107],
                darkmagenta: [139, 0, 139],
                darkolivegreen: [85, 107, 47],
                darkorange: [255, 140, 0],
                darkorchid: [153, 50, 204],
                darkred: [139, 0, 0],
                darksalmon: [233, 150, 122],
                darkseagreen: [143, 188, 143],
                darkslateblue: [72, 61, 139],
                darkslategray: [47, 79, 79],
                darkslategrey: [47, 79, 79],
                darkturquoise: [0, 206, 209],
                darkviolet: [148, 0, 211],
                deeppink: [255, 20, 147],
                deepskyblue: [0, 191, 255],
                dimgray: [105, 105, 105],
                dimgrey: [105, 105, 105],
                dodgerblue: [30, 144, 255],
                firebrick: [178, 34, 34],
                floralwhite: [255, 250, 240],
                forestgreen: [34, 139, 34],
                fuchsia: [255, 0, 255],
                gainsboro: [220, 220, 220],
                ghostwhite: [248, 248, 255],
                gold: [255, 215, 0],
                goldenrod: [218, 165, 32],
                gray: [128, 128, 128],
                green: [0, 128, 0],
                greenyellow: [173, 255, 47],
                grey: [128, 128, 128],
                honeydew: [240, 255, 240],
                hotpink: [255, 105, 180],
                indianred: [205, 92, 92],
                indigo: [75, 0, 130],
                ivory: [255, 255, 240],
                khaki: [240, 230, 140],
                lavender: [230, 230, 250],
                lavenderblush: [255, 240, 245],
                lawngreen: [124, 252, 0],
                lemonchiffon: [255, 250, 205],
                lightblue: [173, 216, 230],
                lightcoral: [240, 128, 128],
                lightcyan: [224, 255, 255],
                lightgoldenrodyellow: [250, 250, 210],
                lightgray: [211, 211, 211],
                lightgreen: [144, 238, 144],
                lightgrey: [211, 211, 211],
                lightpink: [255, 182, 193],
                lightsalmon: [255, 160, 122],
                lightseagreen: [32, 178, 170],
                lightskyblue: [135, 206, 250],
                lightslategray: [119, 136, 153],
                lightslategrey: [119, 136, 153],
                lightsteelblue: [176, 196, 222],
                lightyellow: [255, 255, 224],
                lime: [0, 255, 0],
                limegreen: [50, 205, 50],
                linen: [250, 240, 230],
                magenta: [255, 0, 255],
                maroon: [128, 0, 0],
                mediumaquamarine: [102, 205, 170],
                mediumblue: [0, 0, 205],
                mediumorchid: [186, 85, 211],
                mediumpurple: [147, 112, 219],
                mediumseagreen: [60, 179, 113],
                mediumslateblue: [123, 104, 238],
                mediumspringgreen: [0, 250, 154],
                mediumturquoise: [72, 209, 204],
                mediumvioletred: [199, 21, 133],
                midnightblue: [25, 25, 112],
                mintcream: [245, 255, 250],
                mistyrose: [255, 228, 225],
                moccasin: [255, 228, 181],
                navajowhite: [255, 222, 173],
                navy: [0, 0, 128],
                oldlace: [253, 245, 230],
                olive: [128, 128, 0],
                olivedrab: [107, 142, 35],
                orange: [255, 165, 0],
                orangered: [255, 69, 0],
                orchid: [218, 112, 214],
                palegoldenrod: [238, 232, 170],
                palegreen: [152, 251, 152],
                paleturquoise: [175, 238, 238],
                palevioletred: [219, 112, 147],
                papayawhip: [255, 239, 213],
                peachpuff: [255, 218, 185],
                peru: [205, 133, 63],
                pink: [255, 192, 203],
                plum: [221, 160, 221],
                powderblue: [176, 224, 230],
                purple: [128, 0, 128],
                rebeccapurple: [102, 51, 153],
                red: [255, 0, 0],
                rosybrown: [188, 143, 143],
                royalblue: [65, 105, 225],
                saddlebrown: [139, 69, 19],
                salmon: [250, 128, 114],
                sandybrown: [244, 164, 96],
                seagreen: [46, 139, 87],
                seashell: [255, 245, 238],
                sienna: [160, 82, 45],
                silver: [192, 192, 192],
                skyblue: [135, 206, 235],
                slateblue: [106, 90, 205],
                slategray: [112, 128, 144],
                slategrey: [112, 128, 144],
                snow: [255, 250, 250],
                springgreen: [0, 255, 127],
                steelblue: [70, 130, 180],
                tan: [210, 180, 140],
                teal: [0, 128, 128],
                thistle: [216, 191, 216],
                tomato: [255, 99, 71],
                turquoise: [64, 224, 208],
                violet: [238, 130, 238],
                wheat: [245, 222, 179],
                white: [255, 255, 255],
                whitesmoke: [245, 245, 245],
                yellow: [255, 255, 0],
                yellowgreen: [154, 205, 50]
            }
        },
        TC34: function(e, t, a) {
            "use strict";
            var n, i = {
                noop: function() {},
                uid: (n = 0, function() {
                    return n++
                }),
                isNullOrUndef: function(e) {
                    return null === e || void 0 === e
                },
                isArray: Array.isArray ? Array.isArray : function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                },
                isObject: function(e) {
                    return null !== e && "[object Object]" === Object.prototype.toString.call(e)
                },
                valueOrDefault: function(e, t) {
                    return void 0 === e ? t : e
                },
                valueAtIndexOrDefault: function(e, t, a) {
                    return i.valueOrDefault(i.isArray(e) ? e[t] : e, a)
                },
                callback: function(e, t, a) {
                    if (e && "function" == typeof e.call) return e.apply(a, t)
                },
                each: function(e, t, a, n) {
                    var r, s, o;
                    if (i.isArray(e))
                        if (s = e.length, n)
                            for (r = s - 1; r >= 0; r--) t.call(a, e[r], r);
                        else
                            for (r = 0; r < s; r++) t.call(a, e[r], r);
                    else if (i.isObject(e))
                        for (s = (o = Object.keys(e)).length, r = 0; r < s; r++) t.call(a, e[o[r]], o[r])
                },
                arrayEquals: function(e, t) {
                    var a, n, r, s;
                    if (!e || !t || e.length !== t.length) return !1;
                    for (a = 0, n = e.length; a < n; ++a)
                        if (s = t[a], (r = e[a]) instanceof Array && s instanceof Array) {
                            if (!i.arrayEquals(r, s)) return !1
                        } else if (r !== s) return !1;
                    return !0
                },
                clone: function(e) {
                    if (i.isArray(e)) return e.map(i.clone);
                    if (i.isObject(e)) {
                        for (var t = {}, a = Object.keys(e), n = a.length, r = 0; r < n; ++r) t[a[r]] = i.clone(e[a[r]]);
                        return t
                    }
                    return e
                },
                _merger: function(e, t, a, n) {
                    var r = t[e],
                        s = a[e];
                    i.isObject(r) && i.isObject(s) ? i.merge(r, s, n) : t[e] = i.clone(s)
                },
                _mergerIf: function(e, t, a) {
                    var n = t[e],
                        r = a[e];
                    i.isObject(n) && i.isObject(r) ? i.mergeIf(n, r) : t.hasOwnProperty(e) || (t[e] = i.clone(r))
                },
                merge: function(e, t, a) {
                    var n, r, s, o, d, l = i.isArray(t) ? t : [t],
                        u = l.length;
                    if (!i.isObject(e)) return e;
                    for (n = (a = a || {}).merger || i._merger, r = 0; r < u; ++r)
                        if (i.isObject(t = l[r]))
                            for (d = 0, o = (s = Object.keys(t)).length; d < o; ++d) n(s[d], e, t, a);
                    return e
                },
                mergeIf: function(e, t) {
                    return i.merge(e, t, {
                        merger: i._mergerIf
                    })
                },
                extend: function(e) {
                    for (var t = function(t, a) {
                            e[a] = t
                        }, a = 1, n = arguments.length; a < n; ++a) i.each(arguments[a], t);
                    return e
                },
                inherits: function(e) {
                    var t = this,
                        a = e && e.hasOwnProperty("constructor") ? e.constructor : function() {
                            return t.apply(this, arguments)
                        },
                        n = function() {
                            this.constructor = a
                        };
                    return n.prototype = t.prototype, a.prototype = new n, a.extend = i.inherits, e && i.extend(a.prototype, e), a.__super__ = t.prototype, a
                }
            };
            e.exports = i, i.callCallback = i.callback, i.indexOf = function(e, t, a) {
                return Array.prototype.indexOf.call(e, t, a)
            }, i.getValueOrDefault = i.valueOrDefault, i.getValueAtIndexOrDefault = i.valueAtIndexOrDefault
        },
        TX0D: function(e, t, a) {
            "use strict";
            var n = a("CcnG"),
                i = (a("HlEa"), function() {
                    function e(e) {
                        this.tooltipDOMElement = e
                    }
                    return e.prototype.setPosition = function(t, a) {
                        this.tooltipDOMElement.nativeElement.style.left = t + e.PIXELS, this.tooltipDOMElement.nativeElement.style.top = a + e.PIXELS
                    }, e.prototype.getDOMElement = function() {
                        return this.tooltipDOMElement
                    }, e.PIXELS = "px", e
                }());
            a.d(t, "a", function() {
                return r
            });
            var r = function() {
                function e(e, t) {
                    this.el = e, this.loaderService = t, this.chartSelect = new n.EventEmitter, this.chartReady = new n.EventEmitter, this.chartError = new n.EventEmitter, this.mouseOver = new n.EventEmitter, this.mouseOut = new n.EventEmitter
                }
                return e.prototype.ngOnChanges = function(e) {
                    var t = this;
                    if (e.data) {
                        if (!this.data) return;
                        this.options = this.data.options, this.loaderService.load(this.data.chartType, this.data.apiKey).then(function() {
                            void 0 === t.wrapper || t.wrapper.getChartType() !== t.data.chartType ? t.wrapper = new google.visualization.ChartWrapper(t.data) : (t.unregisterChartEvents(), t.wrapper.setDataTable(t.data.dataTable), t.wrapper.setOptions(t.options)), t.registerChartWrapperEvents(), t.reformat(), t.redraw()
                        })
                    }
                }, e.prototype.redraw = function() {
                    this.reformat(), this.wrapper.draw(this.el.nativeElement.querySelector("div"))
                }, e.prototype.reformat = function() {
                    if (this.data && void 0 !== this.data.formatters)
                        for (var e = 0, t = this.data.formatters; e < t.length; e++)
                            for (var a = t[e], n = new(0, google.visualization[a.type])(a.options), i = 0, r = a.columns; i < r.length; i++) {
                                var s = r[i];
                                n.format(this.wrapper.getDataTable(), s)
                            }
                }, e.prototype.getSelectorBySeriesType = function(e) {
                    return {
                        bars: "bar#%s#%r",
                        haxis: "hAxis#0#label",
                        line: "point#%s#%r",
                        legend: "legendentry#%s",
                        area: "point#%s#%r"
                    }[e]
                }, e.prototype.getSeriesByColumn = function(e) {
                    for (var t = 0, a = this.wrapper.getDataTable(), n = e - 1; n >= 0; n--) {
                        var i = a.getColumnRole(n),
                            r = a.getColumnType(n);
                        "data" !== i && "number" !== r || t++
                    }
                    return t
                }, e.prototype.getBoundingBoxForItem = function(e) {
                    var t = {
                        top: 0,
                        left: 0,
                        width: 0,
                        height: 0
                    };
                    if (this.cli) {
                        var a = e.column,
                            n = this.getSeriesByColumn(a),
                            i = e.row,
                            r = this.options.seriesType;
                        if (this.options.series && this.options.series[n] && this.options.series[n].type && (r = this.options.series[n].type), r) {
                            var s = this.getSelectorBySeriesType(r);
                            if (s) {
                                s = s.replace("%s", n + "").replace("%c", a + "").replace("%r", i + "");
                                var o = this.cli.getBoundingBox(s);
                                o && (t = o)
                            }
                        }
                    }
                    return t
                }, e.prototype.getValueAtPosition = function(e) {
                    return null === e.row ? null : this.wrapper.getDataTable().getValue(e.row, e.column)
                }, e.prototype.getColumnTypeAtPosition = function(e) {
                    return this.wrapper.getDataTable().getColumnType(e.column) || ""
                }, e.prototype.getColumnLabelAtPosition = function(e) {
                    return this.wrapper.getDataTable().getColumnLabel(e.column) || ""
                }, e.prototype.getHTMLTooltip = function() {
                    var e = new n.ElementRef(this.el.nativeElement.querySelector(".google-visualization-tooltip"));
                    return new i(e)
                }, e.prototype.parseMouseEvent = function(e) {
                    return {
                        position: e,
                        boundingBox: this.getBoundingBoxForItem(e),
                        value: this.getValueAtPosition(e),
                        columnType: this.getColumnTypeAtPosition(e),
                        columnLabel: this.getColumnLabelAtPosition(e)
                    }
                }, e.prototype.unregisterChartEvents = function() {
                    google.visualization.events.removeAllListeners(this.wrapper)
                }, e.prototype.registerChartEvents = function() {
                    var e = this;
                    if (this.mouseOver.observers.length > 0) {
                        var t = this.wrapper.getChart();
                        this.cli = t.getChartLayoutInterface(), google.visualization.events.addListener(t, "onmouseover", function(t) {
                            var a = e.parseMouseEvent(t);
                            a.tooltip = e.getHTMLTooltip(), e.mouseOver.emit(a)
                        })
                    }
                    this.mouseOut.observers.length > 0 && (t = this.wrapper.getChart(), this.cli = t.getChartLayoutInterface(), google.visualization.events.addListener(t, "onmouseout", function(t) {
                        var a = e.parseMouseEvent(t);
                        e.mouseOut.emit(a)
                    }))
                }, e.prototype.registerChartWrapperEvents = function() {
                    var e = this;
                    google.visualization.events.addListener(this.wrapper, "ready", function() {
                        e.chartReady.emit({
                            message: "Chart ready"
                        }), e.registerChartEvents()
                    }), google.visualization.events.addListener(this.wrapper, "error", function(t) {
                        e.chartError.emit(t)
                    }), google.visualization.events.addListener(this.wrapper, "select", function() {
                        var t, a, n = e.wrapper.visualization.getSelection()[0];
                        if (void 0 !== n) {
                            var i = [],
                                r = [];
                            if (null !== n.row)
                                for (var s = e.wrapper.getDataTable(), o = s.getNumberOfColumns(), d = 0; d < o; d++) i.push(s.getValue(n.row, d)), r.push(s.getFormattedValue(n.row, d));
                            (a = {
                                message: "select",
                                row: n.row,
                                column: n.column
                            }).selectedRowValues = i, a.selectedRowFormattedValues = r, t = a
                        } else t = {
                            message: "deselect",
                            row: null,
                            column: null,
                            selectedRowValues: [],
                            selectedRowFormattedValues: []
                        };
                        e.chartSelect.emit(t)
                    })
                }, e
            }()
        },
        UDhR: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("id", {
                    months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
                    monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),
                    weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
                    weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
                    weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
                    longDateFormat: {
                        LT: "HH.mm",
                        LTS: "HH.mm.ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY [pukul] HH.mm",
                        LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
                    },
                    meridiemParse: /pagi|siang|sore|malam/,
                    meridiemHour: function(e, t) {
                        return 12 === e && (e = 0), "pagi" === t ? e : "siang" === t ? e >= 11 ? e : e + 12 : "sore" === t || "malam" === t ? e + 12 : void 0
                    },
                    meridiem: function(e, t, a) {
                        return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam"
                    },
                    calendar: {
                        sameDay: "[Hari ini pukul] LT",
                        nextDay: "[Besok pukul] LT",
                        nextWeek: "dddd [pukul] LT",
                        lastDay: "[Kemarin pukul] LT",
                        lastWeek: "dddd [lalu pukul] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "dalam %s",
                        past: "%s yang lalu",
                        s: "beberapa detik",
                        ss: "%d detik",
                        m: "semenit",
                        mm: "%d menit",
                        h: "sejam",
                        hh: "%d jam",
                        d: "sehari",
                        dd: "%d hari",
                        M: "sebulan",
                        MM: "%d bulan",
                        y: "setahun",
                        yy: "%d tahun"
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(a("wd/R"))
        },
        UpQW: function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = ["\u062c\u0646\u0648\u0631\u06cc", "\u0641\u0631\u0648\u0631\u06cc", "\u0645\u0627\u0631\u0686", "\u0627\u067e\u0631\u06cc\u0644", "\u0645\u0626\u06cc", "\u062c\u0648\u0646", "\u062c\u0648\u0644\u0627\u0626\u06cc", "\u0627\u06af\u0633\u062a", "\u0633\u062a\u0645\u0628\u0631", "\u0627\u06a9\u062a\u0648\u0628\u0631", "\u0646\u0648\u0645\u0628\u0631", "\u062f\u0633\u0645\u0628\u0631"],
                    a = ["\u0627\u062a\u0648\u0627\u0631", "\u067e\u06cc\u0631", "\u0645\u0646\u06af\u0644", "\u0628\u062f\u06be", "\u062c\u0645\u0639\u0631\u0627\u062a", "\u062c\u0645\u0639\u06c1", "\u06c1\u0641\u062a\u06c1"];
                e.defineLocale("ur", {
                    months: t,
                    monthsShort: t,
                    weekdays: a,
                    weekdaysShort: a,
                    weekdaysMin: a,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd\u060c D MMMM YYYY HH:mm"
                    },
                    meridiemParse: /\u0635\u0628\u062d|\u0634\u0627\u0645/,
                    isPM: function(e) {
                        return "\u0634\u0627\u0645" === e
                    },
                    meridiem: function(e, t, a) {
                        return e < 12 ? "\u0635\u0628\u062d" : "\u0634\u0627\u0645"
                    },
                    calendar: {
                        sameDay: "[\u0622\u062c \u0628\u0648\u0642\u062a] LT",
                        nextDay: "[\u06a9\u0644 \u0628\u0648\u0642\u062a] LT",
                        nextWeek: "dddd [\u0628\u0648\u0642\u062a] LT",
                        lastDay: "[\u06af\u0630\u0634\u062a\u06c1 \u0631\u0648\u0632 \u0628\u0648\u0642\u062a] LT",
                        lastWeek: "[\u06af\u0630\u0634\u062a\u06c1] dddd [\u0628\u0648\u0642\u062a] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s \u0628\u0639\u062f",
                        past: "%s \u0642\u0628\u0644",
                        s: "\u0686\u0646\u062f \u0633\u06cc\u06a9\u0646\u0688",
                        ss: "%d \u0633\u06cc\u06a9\u0646\u0688",
                        m: "\u0627\u06cc\u06a9 \u0645\u0646\u0679",
                        mm: "%d \u0645\u0646\u0679",
                        h: "\u0627\u06cc\u06a9 \u06af\u06be\u0646\u0679\u06c1",
                        hh: "%d \u06af\u06be\u0646\u0679\u06d2",
                        d: "\u0627\u06cc\u06a9 \u062f\u0646",
                        dd: "%d \u062f\u0646",
                        M: "\u0627\u06cc\u06a9 \u0645\u0627\u06c1",
                        MM: "%d \u0645\u0627\u06c1",
                        y: "\u0627\u06cc\u06a9 \u0633\u0627\u0644",
                        yy: "%d \u0633\u0627\u0644"
                    },
                    preparse: function(e) {
                        return e.replace(/\u060c/g, ",")
                    },
                    postformat: function(e) {
                        return e.replace(/,/g, "\u060c")
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(a("wd/R"))
        },
        UqmZ: function(e, t, a) {
            "use strict";
            var n = a("CDJp"),
                i = a("K2E3"),
                r = a("RDha"),
                s = n.global;
            n._set("global", {
                elements: {
                    line: {
                        tension: .4,
                        backgroundColor: s.defaultColor,
                        borderWidth: 3,
                        borderColor: s.defaultColor,
                        borderCapStyle: "butt",
                        borderDash: [],
                        borderDashOffset: 0,
                        borderJoinStyle: "miter",
                        capBezierPoints: !0,
                        fill: !0
                    }
                }
            }), e.exports = i.extend({
                draw: function() {
                    var e, t, a, n, i = this._view,
                        o = this._chart.ctx,
                        d = i.spanGaps,
                        l = this._children.slice(),
                        u = s.elements.line,
                        _ = -1;
                    for (this._loop && l.length && l.push(l[0]), o.save(), o.lineCap = i.borderCapStyle || u.borderCapStyle, o.setLineDash && o.setLineDash(i.borderDash || u.borderDash), o.lineDashOffset = i.borderDashOffset || u.borderDashOffset, o.lineJoin = i.borderJoinStyle || u.borderJoinStyle, o.lineWidth = i.borderWidth || u.borderWidth, o.strokeStyle = i.borderColor || s.defaultColor, o.beginPath(), _ = -1, e = 0; e < l.length; ++e) t = l[e], a = r.previousItem(l, e), n = t._view, 0 === e ? n.skip || (o.moveTo(n.x, n.y), _ = e) : (a = -1 === _ ? a : l[_], n.skip || (_ !== e - 1 && !d || -1 === _ ? o.moveTo(n.x, n.y) : r.canvas.lineTo(o, a._view, t._view), _ = e));
                    o.stroke(), o.restore()
                }
            })
        },
        Ur1D: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("ss", {
                    months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),
                    monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),
                    weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),
                    weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
                    weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "h:mm A",
                        LTS: "h:mm:ss A",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY h:mm A",
                        LLLL: "dddd, D MMMM YYYY h:mm A"
                    },
                    calendar: {
                        sameDay: "[Namuhla nga] LT",
                        nextDay: "[Kusasa nga] LT",
                        nextWeek: "dddd [nga] LT",
                        lastDay: "[Itolo nga] LT",
                        lastWeek: "dddd [leliphelile] [nga] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "nga %s",
                        past: "wenteka nga %s",
                        s: "emizuzwana lomcane",
                        ss: "%d mzuzwana",
                        m: "umzuzu",
                        mm: "%d emizuzu",
                        h: "lihora",
                        hh: "%d emahora",
                        d: "lilanga",
                        dd: "%d emalanga",
                        M: "inyanga",
                        MM: "%d tinyanga",
                        y: "umnyaka",
                        yy: "%d iminyaka"
                    },
                    meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
                    meridiem: function(e, t, a) {
                        return e < 11 ? "ekuseni" : e < 15 ? "emini" : e < 19 ? "entsambama" : "ebusuku"
                    },
                    meridiemHour: function(e, t) {
                        return 12 === e && (e = 0), "ekuseni" === t ? e : "emini" === t ? e >= 11 ? e : e + 12 : "entsambama" === t || "ebusuku" === t ? 0 === e ? 0 : e + 12 : void 0
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}/,
                    ordinal: "%d",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(a("wd/R"))
        },
        V2x9: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("tet", {
                    months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_Ju\xf1u_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split("_"),
                    monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
                    weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split("_"),
                    weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"),
                    weekdaysMin: "Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[Ohin iha] LT",
                        nextDay: "[Aban iha] LT",
                        nextWeek: "dddd [iha] LT",
                        lastDay: "[Horiseik iha] LT",
                        lastWeek: "dddd [semana kotuk] [iha] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "iha %s",
                        past: "%s liuba",
                        s: "minutu balun",
                        ss: "minutu %d",
                        m: "minutu ida",
                        mm: "minutu %d",
                        h: "oras ida",
                        hh: "oras %d",
                        d: "loron ida",
                        dd: "loron %d",
                        M: "fulan ida",
                        MM: "fulan %d",
                        y: "tinan ida",
                        yy: "tinan %d"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                    ordinal: function(e) {
                        var t = e % 10;
                        return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(a("wd/R"))
        },
        Vclq: function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
                    a = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
                e.defineLocale("es-us", {
                    months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
                    monthsShort: function(e, n) {
                        return e ? /-MMM-/.test(n) ? a[e.month()] : t[e.month()] : t
                    },
                    monthsParseExact: !0,
                    weekdays: "domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado".split("_"),
                    weekdaysShort: "dom._lun._mar._mi\xe9._jue._vie._s\xe1b.".split("_"),
                    weekdaysMin: "do_lu_ma_mi_ju_vi_s\xe1".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "h:mm A",
                        LTS: "h:mm:ss A",
                        L: "MM/DD/YYYY",
                        LL: "MMMM [de] D [de] YYYY",
                        LLL: "MMMM [de] D [de] YYYY h:mm A",
                        LLLL: "dddd, MMMM [de] D [de] YYYY h:mm A"
                    },
                    calendar: {
                        sameDay: function() {
                            return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        nextDay: function() {
                            return "[ma\xf1ana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        nextWeek: function() {
                            return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        lastDay: function() {
                            return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        lastWeek: function() {
                            return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "en %s",
                        past: "hace %s",
                        s: "unos segundos",
                        ss: "%d segundos",
                        m: "un minuto",
                        mm: "%d minutos",
                        h: "una hora",
                        hh: "%d horas",
                        d: "un d\xeda",
                        dd: "%d d\xedas",
                        M: "un mes",
                        MM: "%d meses",
                        y: "un a\xf1o",
                        yy: "%d a\xf1os"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\xba/,
                    ordinal: "%d\xba",
                    week: {
                        dow: 0,
                        doy: 6
                    }
                })
            }(a("wd/R"))
        },
        VgNv: function(e, t, a) {
            "use strict";
            var n = a("CDJp"),
                i = a("RDha");
            n._set("global", {
                plugins: {}
            }), e.exports = {
                _plugins: [],
                _cacheId: 0,
                register: function(e) {
                    var t = this._plugins;
                    [].concat(e).forEach(function(e) {
                        -1 === t.indexOf(e) && t.push(e)
                    }), this._cacheId++
                },
                unregister: function(e) {
                    var t = this._plugins;
                    [].concat(e).forEach(function(e) {
                        var a = t.indexOf(e); - 1 !== a && t.splice(a, 1)
                    }), this._cacheId++
                },
                clear: function() {
                    this._plugins = [], this._cacheId++
                },
                count: function() {
                    return this._plugins.length
                },
                getAll: function() {
                    return this._plugins
                },
                notify: function(e, t, a) {
                    var n, i, r, s, o, d = this.descriptors(e),
                        l = d.length;
                    for (n = 0; n < l; ++n)
                        if ("function" == typeof(o = (r = (i = d[n]).plugin)[t]) && ((s = [e].concat(a || [])).push(i.options), !1 === o.apply(r, s))) return !1;
                    return !0
                },
                descriptors: function(e) {
                    var t = e.$plugins || (e.$plugins = {});
                    if (t.id === this._cacheId) return t.descriptors;
                    var a = [],
                        r = [],
                        s = e && e.config || {},
                        o = s.options && s.options.plugins || {};
                    return this._plugins.concat(s.plugins || []).forEach(function(e) {
                        if (-1 === a.indexOf(e)) {
                            var t = e.id,
                                s = o[t];
                            !1 !== s && (!0 === s && (s = i.clone(n.global.plugins[t])), a.push(e), r.push({
                                plugin: e,
                                options: s || {}
                            }))
                        }
                    }), t.descriptors = r, t.id = this._cacheId, r
                },
                _invalidate: function(e) {
                    delete e.$plugins
                }
            }
        },
        WYrj: function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = ["\u0796\u07ac\u0782\u07aa\u0787\u07a6\u0783\u07a9", "\u078a\u07ac\u0784\u07b0\u0783\u07aa\u0787\u07a6\u0783\u07a9", "\u0789\u07a7\u0783\u07a8\u0797\u07aa", "\u0787\u07ad\u0795\u07b0\u0783\u07a9\u078d\u07aa", "\u0789\u07ad", "\u0796\u07ab\u0782\u07b0", "\u0796\u07aa\u078d\u07a6\u0787\u07a8", "\u0787\u07af\u078e\u07a6\u0790\u07b0\u0793\u07aa", "\u0790\u07ac\u0795\u07b0\u0793\u07ac\u0789\u07b0\u0784\u07a6\u0783\u07aa", "\u0787\u07ae\u0786\u07b0\u0793\u07af\u0784\u07a6\u0783\u07aa", "\u0782\u07ae\u0788\u07ac\u0789\u07b0\u0784\u07a6\u0783\u07aa", "\u0791\u07a8\u0790\u07ac\u0789\u07b0\u0784\u07a6\u0783\u07aa"],
                    a = ["\u0787\u07a7\u078b\u07a8\u0787\u07b0\u078c\u07a6", "\u0780\u07af\u0789\u07a6", "\u0787\u07a6\u0782\u07b0\u078e\u07a7\u0783\u07a6", "\u0784\u07aa\u078b\u07a6", "\u0784\u07aa\u0783\u07a7\u0790\u07b0\u078a\u07a6\u078c\u07a8", "\u0780\u07aa\u0786\u07aa\u0783\u07aa", "\u0780\u07ae\u0782\u07a8\u0780\u07a8\u0783\u07aa"];
                e.defineLocale("dv", {
                    months: t,
                    monthsShort: t,
                    weekdays: a,
                    weekdaysShort: a,
                    weekdaysMin: "\u0787\u07a7\u078b\u07a8_\u0780\u07af\u0789\u07a6_\u0787\u07a6\u0782\u07b0_\u0784\u07aa\u078b\u07a6_\u0784\u07aa\u0783\u07a7_\u0780\u07aa\u0786\u07aa_\u0780\u07ae\u0782\u07a8".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "D/M/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    meridiemParse: /\u0789\u0786|\u0789\u078a/,
                    isPM: function(e) {
                        return "\u0789\u078a" === e
                    },
                    meridiem: function(e, t, a) {
                        return e < 12 ? "\u0789\u0786" : "\u0789\u078a"
                    },
                    calendar: {
                        sameDay: "[\u0789\u07a8\u0787\u07a6\u078b\u07aa] LT",
                        nextDay: "[\u0789\u07a7\u078b\u07a6\u0789\u07a7] LT",
                        nextWeek: "dddd LT",
                        lastDay: "[\u0787\u07a8\u0787\u07b0\u0794\u07ac] LT",
                        lastWeek: "[\u078a\u07a7\u0787\u07a8\u078c\u07aa\u0788\u07a8] dddd LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "\u078c\u07ac\u0783\u07ad\u078e\u07a6\u0787\u07a8 %s",
                        past: "\u0786\u07aa\u0783\u07a8\u0782\u07b0 %s",
                        s: "\u0790\u07a8\u0786\u07aa\u0782\u07b0\u078c\u07aa\u0786\u07ae\u0785\u07ac\u0787\u07b0",
                        ss: "d% \u0790\u07a8\u0786\u07aa\u0782\u07b0\u078c\u07aa",
                        m: "\u0789\u07a8\u0782\u07a8\u0793\u07ac\u0787\u07b0",
                        mm: "\u0789\u07a8\u0782\u07a8\u0793\u07aa %d",
                        h: "\u078e\u07a6\u0791\u07a8\u0787\u07a8\u0783\u07ac\u0787\u07b0",
                        hh: "\u078e\u07a6\u0791\u07a8\u0787\u07a8\u0783\u07aa %d",
                        d: "\u078b\u07aa\u0788\u07a6\u0780\u07ac\u0787\u07b0",
                        dd: "\u078b\u07aa\u0788\u07a6\u0790\u07b0 %d",
                        M: "\u0789\u07a6\u0780\u07ac\u0787\u07b0",
                        MM: "\u0789\u07a6\u0790\u07b0 %d",
                        y: "\u0787\u07a6\u0780\u07a6\u0783\u07ac\u0787\u07b0",
                        yy: "\u0787\u07a6\u0780\u07a6\u0783\u07aa %d"
                    },
                    preparse: function(e) {
                        return e.replace(/\u060c/g, ",")
                    },
                    postformat: function(e) {
                        return e.replace(/,/g, "\u060c")
                    },
                    week: {
                        dow: 7,
                        doy: 12
                    }
                })
            }(a("wd/R"))
        },
        WxRl: function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = "vas\xe1rnap h\xe9tf\u0151n kedden szerd\xe1n cs\xfct\xf6rt\xf6k\xf6n p\xe9nteken szombaton".split(" ");

                function a(e, t, a, n) {
                    var i = e;
                    switch (a) {
                        case "s":
                            return n || t ? "n\xe9h\xe1ny m\xe1sodperc" : "n\xe9h\xe1ny m\xe1sodperce";
                        case "ss":
                            return i + (n || t) ? " m\xe1sodperc" : " m\xe1sodperce";
                        case "m":
                            return "egy" + (n || t ? " perc" : " perce");
                        case "mm":
                            return i + (n || t ? " perc" : " perce");
                        case "h":
                            return "egy" + (n || t ? " \xf3ra" : " \xf3r\xe1ja");
                        case "hh":
                            return i + (n || t ? " \xf3ra" : " \xf3r\xe1ja");
                        case "d":
                            return "egy" + (n || t ? " nap" : " napja");
                        case "dd":
                            return i + (n || t ? " nap" : " napja");
                        case "M":
                            return "egy" + (n || t ? " h\xf3nap" : " h\xf3napja");
                        case "MM":
                            return i + (n || t ? " h\xf3nap" : " h\xf3napja");
                        case "y":
                            return "egy" + (n || t ? " \xe9v" : " \xe9ve");
                        case "yy":
                            return i + (n || t ? " \xe9v" : " \xe9ve")
                    }
                    return ""
                }

                function n(e) {
                    return (e ? "" : "[m\xfalt] ") + "[" + t[this.day()] + "] LT[-kor]"
                }
                e.defineLocale("hu", {
                    months: "janu\xe1r_febru\xe1r_m\xe1rcius_\xe1prilis_m\xe1jus_j\xfanius_j\xfalius_augusztus_szeptember_okt\xf3ber_november_december".split("_"),
                    monthsShort: "jan_feb_m\xe1rc_\xe1pr_m\xe1j_j\xfan_j\xfal_aug_szept_okt_nov_dec".split("_"),
                    weekdays: "vas\xe1rnap_h\xe9tf\u0151_kedd_szerda_cs\xfct\xf6rt\xf6k_p\xe9ntek_szombat".split("_"),
                    weekdaysShort: "vas_h\xe9t_kedd_sze_cs\xfct_p\xe9n_szo".split("_"),
                    weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "YYYY.MM.DD.",
                        LL: "YYYY. MMMM D.",
                        LLL: "YYYY. MMMM D. H:mm",
                        LLLL: "YYYY. MMMM D., dddd H:mm"
                    },
                    meridiemParse: /de|du/i,
                    isPM: function(e) {
                        return "u" === e.charAt(1).toLowerCase()
                    },
                    meridiem: function(e, t, a) {
                        return e < 12 ? !0 === a ? "de" : "DE" : !0 === a ? "du" : "DU"
                    },
                    calendar: {
                        sameDay: "[ma] LT[-kor]",
                        nextDay: "[holnap] LT[-kor]",
                        nextWeek: function() {
                            return n.call(this, !0)
                        },
                        lastDay: "[tegnap] LT[-kor]",
                        lastWeek: function() {
                            return n.call(this, !1)
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s m\xfalva",
                        past: "%s",
                        s: a,
                        ss: a,
                        m: a,
                        mm: a,
                        h: a,
                        hh: a,
                        d: a,
                        dd: a,
                        M: a,
                        MM: a,
                        y: a,
                        yy: a
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(a("wd/R"))
        },
        WyAD: function(e, t, a) {
            var n = a("yPMN")();
            n.helpers = a("RDha"), a("nDWh")(n), n.defaults = a("CDJp"), n.Element = a("K2E3"), n.elements = a("vvH+"), n.Interaction = a("mlr9"), n.layouts = a("fELs"), n.platform = a("iM7B"), n.plugins = a("VgNv"), n.Ticks = a("g8vO"), a("A5uo")(n), a("6rqY")(n), a("KAQS")(n), a("tjFV")(n), a("cdu6")(n), a("x8uC")(n), a("paOr")(n), a("8TtQ")(n), a("YSsK")(n), a("Y4Rb")(n), a("8//i")(n), a("RCHg")(n), a("ZANz")(n), a("bidN")(n), a("XQh+")(n), a("G0Q6")(n), a("5ZZ7")(n), a("aB2c")(n), a("35yf")(n), a("ODdm")(n), a("Qexa")(n), a("S7Ns")(n), a("7O6V")(n), a("qzaf")(n), a("iYGd")(n), a("S3/U")(n);
            var i = a("jXIB");
            for (var r in i) i.hasOwnProperty(r) && n.plugins.register(i[r]);
            n.platform.initialize(), e.exports = n, "undefined" != typeof window && (window.Chart = n), n.Legend = i.legend._element, n.Title = i.title._element, n.pluginService = n.plugins, n.PluginBase = n.Element.extend({}), n.canvasHelpers = n.helpers.canvas, n.layoutService = n.layouts
        },
        X709: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("sv", {
                    months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
                    monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
                    weekdays: "s\xf6ndag_m\xe5ndag_tisdag_onsdag_torsdag_fredag_l\xf6rdag".split("_"),
                    weekdaysShort: "s\xf6n_m\xe5n_tis_ons_tor_fre_l\xf6r".split("_"),
                    weekdaysMin: "s\xf6_m\xe5_ti_on_to_fr_l\xf6".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "YYYY-MM-DD",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY [kl.] HH:mm",
                        LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
                        lll: "D MMM YYYY HH:mm",
                        llll: "ddd D MMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[Idag] LT",
                        nextDay: "[Imorgon] LT",
                        lastDay: "[Ig\xe5r] LT",
                        nextWeek: "[P\xe5] dddd LT",
                        lastWeek: "[I] dddd[s] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "om %s",
                        past: "f\xf6r %s sedan",
                        s: "n\xe5gra sekunder",
                        ss: "%d sekunder",
                        m: "en minut",
                        mm: "%d minuter",
                        h: "en timme",
                        hh: "%d timmar",
                        d: "en dag",
                        dd: "%d dagar",
                        M: "en m\xe5nad",
                        MM: "%d m\xe5nader",
                        y: "ett \xe5r",
                        yy: "%d \xe5r"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
                    ordinal: function(e) {
                        var t = e % 10;
                        return e + (1 == ~~(e % 100 / 10) ? "e" : 1 === t ? "a" : 2 === t ? "a" : "e")
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(a("wd/R"))
        },
        X8CM: function(e, t, a) {
            "use strict";
            var n = a("CDJp"),
                i = a("K2E3"),
                r = a("RDha");
            n._set("global", {
                elements: {
                    arc: {
                        backgroundColor: n.global.defaultColor,
                        borderColor: "#fff",
                        borderWidth: 2
                    }
                }
            }), e.exports = i.extend({
                inLabelRange: function(e) {
                    var t = this._view;
                    return !!t && Math.pow(e - t.x, 2) < Math.pow(t.radius + t.hoverRadius, 2)
                },
                inRange: function(e, t) {
                    var a = this._view;
                    if (a) {
                        for (var n = r.getAngleFromPoint(a, {
                                x: e,
                                y: t
                            }), i = n.angle, s = n.distance, o = a.startAngle, d = a.endAngle; d < o;) d += 2 * Math.PI;
                        for (; i > d;) i -= 2 * Math.PI;
                        for (; i < o;) i += 2 * Math.PI;
                        return i >= o && i <= d && s >= a.innerRadius && s <= a.outerRadius
                    }
                    return !1
                },
                getCenterPoint: function() {
                    var e = this._view,
                        t = (e.startAngle + e.endAngle) / 2,
                        a = (e.innerRadius + e.outerRadius) / 2;
                    return {
                        x: e.x + Math.cos(t) * a,
                        y: e.y + Math.sin(t) * a
                    }
                },
                getArea: function() {
                    var e = this._view;
                    return Math.PI * ((e.endAngle - e.startAngle) / (2 * Math.PI)) * (Math.pow(e.outerRadius, 2) - Math.pow(e.innerRadius, 2))
                },
                tooltipPosition: function() {
                    var e = this._view,
                        t = e.startAngle + (e.endAngle - e.startAngle) / 2,
                        a = (e.outerRadius - e.innerRadius) / 2 + e.innerRadius;
                    return {
                        x: e.x + Math.cos(t) * a,
                        y: e.y + Math.sin(t) * a
                    }
                },
                draw: function() {
                    var e = this._chart.ctx,
                        t = this._view,
                        a = t.startAngle,
                        n = t.endAngle;
                    e.beginPath(), e.arc(t.x, t.y, t.outerRadius, a, n), e.arc(t.x, t.y, t.innerRadius, n, a, !0), e.closePath(), e.strokeStyle = t.borderColor, e.lineWidth = t.borderWidth, e.fillStyle = t.backgroundColor, e.fill(), e.lineJoin = "bevel", t.borderWidth && e.stroke()
                }
            })
        },
        XDpg: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("zh-cn", {
                    months: "\u4e00\u6708_\u4e8c\u6708_\u4e09\u6708_\u56db\u6708_\u4e94\u6708_\u516d\u6708_\u4e03\u6708_\u516b\u6708_\u4e5d\u6708_\u5341\u6708_\u5341\u4e00\u6708_\u5341\u4e8c\u6708".split("_"),
                    monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
                    weekdays: "\u661f\u671f\u65e5_\u661f\u671f\u4e00_\u661f\u671f\u4e8c_\u661f\u671f\u4e09_\u661f\u671f\u56db_\u661f\u671f\u4e94_\u661f\u671f\u516d".split("_"),
                    weekdaysShort: "\u5468\u65e5_\u5468\u4e00_\u5468\u4e8c_\u5468\u4e09_\u5468\u56db_\u5468\u4e94_\u5468\u516d".split("_"),
                    weekdaysMin: "\u65e5_\u4e00_\u4e8c_\u4e09_\u56db_\u4e94_\u516d".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "YYYY/MM/DD",
                        LL: "YYYY\u5e74M\u6708D\u65e5",
                        LLL: "YYYY\u5e74M\u6708D\u65e5Ah\u70b9mm\u5206",
                        LLLL: "YYYY\u5e74M\u6708D\u65e5ddddAh\u70b9mm\u5206",
                        l: "YYYY/M/D",
                        ll: "YYYY\u5e74M\u6708D\u65e5",
                        lll: "YYYY\u5e74M\u6708D\u65e5 HH:mm",
                        llll: "YYYY\u5e74M\u6708D\u65e5dddd HH:mm"
                    },
                    meridiemParse: /\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/,
                    meridiemHour: function(e, t) {
                        return 12 === e && (e = 0), "\u51cc\u6668" === t || "\u65e9\u4e0a" === t || "\u4e0a\u5348" === t ? e : "\u4e0b\u5348" === t || "\u665a\u4e0a" === t ? e + 12 : e >= 11 ? e : e + 12
                    },
                    meridiem: function(e, t, a) {
                        var n = 100 * e + t;
                        return n < 600 ? "\u51cc\u6668" : n < 900 ? "\u65e9\u4e0a" : n < 1130 ? "\u4e0a\u5348" : n < 1230 ? "\u4e2d\u5348" : n < 1800 ? "\u4e0b\u5348" : "\u665a\u4e0a"
                    },
                    calendar: {
                        sameDay: "[\u4eca\u5929]LT",
                        nextDay: "[\u660e\u5929]LT",
                        nextWeek: "[\u4e0b]ddddLT",
                        lastDay: "[\u6628\u5929]LT",
                        lastWeek: "[\u4e0a]ddddLT",
                        sameElse: "L"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(\u65e5|\u6708|\u5468)/,
                    ordinal: function(e, t) {
                        switch (t) {
                            case "d":
                            case "D":
                            case "DDD":
                                return e + "\u65e5";
                            case "M":
                                return e + "\u6708";
                            case "w":
                            case "W":
                                return e + "\u5468";
                            default:
                                return e
                        }
                    },
                    relativeTime: {
                        future: "%s\u5185",
                        past: "%s\u524d",
                        s: "\u51e0\u79d2",
                        ss: "%d \u79d2",
                        m: "1 \u5206\u949f",
                        mm: "%d \u5206\u949f",
                        h: "1 \u5c0f\u65f6",
                        hh: "%d \u5c0f\u65f6",
                        d: "1 \u5929",
                        dd: "%d \u5929",
                        M: "1 \u4e2a\u6708",
                        MM: "%d \u4e2a\u6708",
                        y: "1 \u5e74",
                        yy: "%d \u5e74"
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(a("wd/R"))
        },
        XLvN: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("te", {
                    months: "\u0c1c\u0c28\u0c35\u0c30\u0c3f_\u0c2b\u0c3f\u0c2c\u0c4d\u0c30\u0c35\u0c30\u0c3f_\u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c3f_\u0c0f\u0c2a\u0c4d\u0c30\u0c3f\u0c32\u0c4d_\u0c2e\u0c47_\u0c1c\u0c42\u0c28\u0c4d_\u0c1c\u0c42\u0c32\u0c46\u0c56_\u0c06\u0c17\u0c38\u0c4d\u0c1f\u0c41_\u0c38\u0c46\u0c2a\u0c4d\u0c1f\u0c46\u0c02\u0c2c\u0c30\u0c4d_\u0c05\u0c15\u0c4d\u0c1f\u0c4b\u0c2c\u0c30\u0c4d_\u0c28\u0c35\u0c02\u0c2c\u0c30\u0c4d_\u0c21\u0c3f\u0c38\u0c46\u0c02\u0c2c\u0c30\u0c4d".split("_"),
                    monthsShort: "\u0c1c\u0c28._\u0c2b\u0c3f\u0c2c\u0c4d\u0c30._\u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c3f_\u0c0f\u0c2a\u0c4d\u0c30\u0c3f._\u0c2e\u0c47_\u0c1c\u0c42\u0c28\u0c4d_\u0c1c\u0c42\u0c32\u0c46\u0c56_\u0c06\u0c17._\u0c38\u0c46\u0c2a\u0c4d._\u0c05\u0c15\u0c4d\u0c1f\u0c4b._\u0c28\u0c35._\u0c21\u0c3f\u0c38\u0c46.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "\u0c06\u0c26\u0c3f\u0c35\u0c3e\u0c30\u0c02_\u0c38\u0c4b\u0c2e\u0c35\u0c3e\u0c30\u0c02_\u0c2e\u0c02\u0c17\u0c33\u0c35\u0c3e\u0c30\u0c02_\u0c2c\u0c41\u0c27\u0c35\u0c3e\u0c30\u0c02_\u0c17\u0c41\u0c30\u0c41\u0c35\u0c3e\u0c30\u0c02_\u0c36\u0c41\u0c15\u0c4d\u0c30\u0c35\u0c3e\u0c30\u0c02_\u0c36\u0c28\u0c3f\u0c35\u0c3e\u0c30\u0c02".split("_"),
                    weekdaysShort: "\u0c06\u0c26\u0c3f_\u0c38\u0c4b\u0c2e_\u0c2e\u0c02\u0c17\u0c33_\u0c2c\u0c41\u0c27_\u0c17\u0c41\u0c30\u0c41_\u0c36\u0c41\u0c15\u0c4d\u0c30_\u0c36\u0c28\u0c3f".split("_"),
                    weekdaysMin: "\u0c06_\u0c38\u0c4b_\u0c2e\u0c02_\u0c2c\u0c41_\u0c17\u0c41_\u0c36\u0c41_\u0c36".split("_"),
                    longDateFormat: {
                        LT: "A h:mm",
                        LTS: "A h:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, A h:mm",
                        LLLL: "dddd, D MMMM YYYY, A h:mm"
                    },
                    calendar: {
                        sameDay: "[\u0c28\u0c47\u0c21\u0c41] LT",
                        nextDay: "[\u0c30\u0c47\u0c2a\u0c41] LT",
                        nextWeek: "dddd, LT",
                        lastDay: "[\u0c28\u0c3f\u0c28\u0c4d\u0c28] LT",
                        lastWeek: "[\u0c17\u0c24] dddd, LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s \u0c32\u0c4b",
                        past: "%s \u0c15\u0c4d\u0c30\u0c3f\u0c24\u0c02",
                        s: "\u0c15\u0c4a\u0c28\u0c4d\u0c28\u0c3f \u0c15\u0c4d\u0c37\u0c23\u0c3e\u0c32\u0c41",
                        ss: "%d \u0c38\u0c46\u0c15\u0c28\u0c4d\u0c32\u0c41",
                        m: "\u0c12\u0c15 \u0c28\u0c3f\u0c2e\u0c3f\u0c37\u0c02",
                        mm: "%d \u0c28\u0c3f\u0c2e\u0c3f\u0c37\u0c3e\u0c32\u0c41",
                        h: "\u0c12\u0c15 \u0c17\u0c02\u0c1f",
                        hh: "%d \u0c17\u0c02\u0c1f\u0c32\u0c41",
                        d: "\u0c12\u0c15 \u0c30\u0c4b\u0c1c\u0c41",
                        dd: "%d \u0c30\u0c4b\u0c1c\u0c41\u0c32\u0c41",
                        M: "\u0c12\u0c15 \u0c28\u0c46\u0c32",
                        MM: "%d \u0c28\u0c46\u0c32\u0c32\u0c41",
                        y: "\u0c12\u0c15 \u0c38\u0c02\u0c35\u0c24\u0c4d\u0c38\u0c30\u0c02",
                        yy: "%d \u0c38\u0c02\u0c35\u0c24\u0c4d\u0c38\u0c30\u0c3e\u0c32\u0c41"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\u0c35/,
                    ordinal: "%d\u0c35",
                    meridiemParse: /\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f|\u0c09\u0c26\u0c2f\u0c02|\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02|\u0c38\u0c3e\u0c2f\u0c02\u0c24\u0c4d\u0c30\u0c02/,
                    meridiemHour: function(e, t) {
                        return 12 === e && (e = 0), "\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f" === t ? e < 4 ? e : e + 12 : "\u0c09\u0c26\u0c2f\u0c02" === t ? e : "\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02" === t ? e >= 10 ? e : e + 12 : "\u0c38\u0c3e\u0c2f\u0c02\u0c24\u0c4d\u0c30\u0c02" === t ? e + 12 : void 0
                    },
                    meridiem: function(e, t, a) {
                        return e < 4 ? "\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f" : e < 10 ? "\u0c09\u0c26\u0c2f\u0c02" : e < 17 ? "\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02" : e < 20 ? "\u0c38\u0c3e\u0c2f\u0c02\u0c24\u0c4d\u0c30\u0c02" : "\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f"
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                })
            }(a("wd/R"))
        },
        "XQh+": function(e, t, a) {
            "use strict";
            var n = a("CDJp"),
                i = a("vvH+"),
                r = a("RDha");
            n._set("doughnut", {
                animation: {
                    animateRotate: !0,
                    animateScale: !1
                },
                hover: {
                    mode: "single"
                },
                legendCallback: function(e) {
                    var t = [];
                    t.push('<ul class="' + e.id + '-legend">');
                    var a = e.data,
                        n = a.datasets,
                        i = a.labels;
                    if (n.length)
                        for (var r = 0; r < n[0].data.length; ++r) t.push('<li><span style="background-color:' + n[0].backgroundColor[r] + '"></span>'), i[r] && t.push(i[r]), t.push("</li>");
                    return t.push("</ul>"), t.join("")
                },
                legend: {
                    labels: {
                        generateLabels: function(e) {
                            var t = e.data;
                            return t.labels.length && t.datasets.length ? t.labels.map(function(a, n) {
                                var i = e.getDatasetMeta(0),
                                    s = t.datasets[0],
                                    o = i.data[n],
                                    d = o && o.custom || {},
                                    l = r.valueAtIndexOrDefault,
                                    u = e.options.elements.arc;
                                return {
                                    text: a,
                                    fillStyle: d.backgroundColor ? d.backgroundColor : l(s.backgroundColor, n, u.backgroundColor),
                                    strokeStyle: d.borderColor ? d.borderColor : l(s.borderColor, n, u.borderColor),
                                    lineWidth: d.borderWidth ? d.borderWidth : l(s.borderWidth, n, u.borderWidth),
                                    hidden: isNaN(s.data[n]) || i.data[n].hidden,
                                    index: n
                                }
                            }) : []
                        }
                    },
                    onClick: function(e, t) {
                        var a, n, i, r = t.index,
                            s = this.chart;
                        for (a = 0, n = (s.data.datasets || []).length; a < n; ++a)(i = s.getDatasetMeta(a)).data[r] && (i.data[r].hidden = !i.data[r].hidden);
                        s.update()
                    }
                },
                cutoutPercentage: 50,
                rotation: -.5 * Math.PI,
                circumference: 2 * Math.PI,
                tooltips: {
                    callbacks: {
                        title: function() {
                            return ""
                        },
                        label: function(e, t) {
                            var a = t.labels[e.index],
                                n = ": " + t.datasets[e.datasetIndex].data[e.index];
                            return r.isArray(a) ? (a = a.slice())[0] += n : a += n, a
                        }
                    }
                }
            }), n._set("pie", r.clone(n.doughnut)), n._set("pie", {
                cutoutPercentage: 0
            }), e.exports = function(e) {
                e.controllers.doughnut = e.controllers.pie = e.DatasetController.extend({
                    dataElementType: i.Arc,
                    linkScales: r.noop,
                    getRingIndex: function(e) {
                        for (var t = 0, a = 0; a < e; ++a) this.chart.isDatasetVisible(a) && ++t;
                        return t
                    },
                    update: function(e) {
                        var t = this,
                            a = t.chart,
                            n = a.chartArea,
                            i = a.options,
                            s = i.elements.arc,
                            o = n.right - n.left - s.borderWidth,
                            d = n.bottom - n.top - s.borderWidth,
                            l = Math.min(o, d),
                            u = {
                                x: 0,
                                y: 0
                            },
                            _ = t.getMeta(),
                            m = i.cutoutPercentage,
                            h = i.circumference;
                        if (h < 2 * Math.PI) {
                            var c = i.rotation % (2 * Math.PI),
                                f = (c += 2 * Math.PI * (c >= Math.PI ? -1 : c < -Math.PI ? 1 : 0)) + h,
                                p = {
                                    x: Math.cos(c),
                                    y: Math.sin(c)
                                },
                                M = {
                                    x: Math.cos(f),
                                    y: Math.sin(f)
                                },
                                y = c <= 0 && f >= 0 || c <= 2 * Math.PI && 2 * Math.PI <= f,
                                g = c <= .5 * Math.PI && .5 * Math.PI <= f || c <= 2.5 * Math.PI && 2.5 * Math.PI <= f,
                                L = c <= -Math.PI && -Math.PI <= f || c <= Math.PI && Math.PI <= f,
                                v = c <= .5 * -Math.PI && .5 * -Math.PI <= f || c <= 1.5 * Math.PI && 1.5 * Math.PI <= f,
                                Y = m / 100,
                                k = {
                                    x: L ? -1 : Math.min(p.x * (p.x < 0 ? 1 : Y), M.x * (M.x < 0 ? 1 : Y)),
                                    y: v ? -1 : Math.min(p.y * (p.y < 0 ? 1 : Y), M.y * (M.y < 0 ? 1 : Y))
                                },
                                b = {
                                    x: y ? 1 : Math.max(p.x * (p.x > 0 ? 1 : Y), M.x * (M.x > 0 ? 1 : Y)),
                                    y: g ? 1 : Math.max(p.y * (p.y > 0 ? 1 : Y), M.y * (M.y > 0 ? 1 : Y))
                                },
                                D = {
                                    width: .5 * (b.x - k.x),
                                    height: .5 * (b.y - k.y)
                                };
                            l = Math.min(o / D.width, d / D.height), u = {
                                x: -.5 * (b.x + k.x),
                                y: -.5 * (b.y + k.y)
                            }
                        }
                        a.borderWidth = t.getMaxBorderWidth(_.data), a.outerRadius = Math.max((l - a.borderWidth) / 2, 0), a.innerRadius = Math.max(m ? a.outerRadius / 100 * m : 0, 0), a.radiusLength = (a.outerRadius - a.innerRadius) / a.getVisibleDatasetCount(), a.offsetX = u.x * a.outerRadius, a.offsetY = u.y * a.outerRadius, _.total = t.calculateTotal(), t.outerRadius = a.outerRadius - a.radiusLength * t.getRingIndex(t.index), t.innerRadius = Math.max(t.outerRadius - a.radiusLength, 0), r.each(_.data, function(a, n) {
                            t.updateElement(a, n, e)
                        })
                    },
                    updateElement: function(e, t, a) {
                        var n = this,
                            i = n.chart,
                            s = i.chartArea,
                            o = i.options,
                            d = o.animation,
                            l = (s.left + s.right) / 2,
                            u = (s.top + s.bottom) / 2,
                            _ = o.rotation,
                            m = o.rotation,
                            h = n.getDataset(),
                            c = a && d.animateRotate ? 0 : e.hidden ? 0 : n.calculateCircumference(h.data[t]) * (o.circumference / (2 * Math.PI));
                        r.extend(e, {
                            _datasetIndex: n.index,
                            _index: t,
                            _model: {
                                x: l + i.offsetX,
                                y: u + i.offsetY,
                                startAngle: _,
                                endAngle: m,
                                circumference: c,
                                outerRadius: a && d.animateScale ? 0 : n.outerRadius,
                                innerRadius: a && d.animateScale ? 0 : n.innerRadius,
                                label: (0, r.valueAtIndexOrDefault)(h.label, t, i.data.labels[t])
                            }
                        });
                        var f = e._model;
                        this.removeHoverStyle(e), a && d.animateRotate || (f.startAngle = 0 === t ? o.rotation : n.getMeta().data[t - 1]._model.endAngle, f.endAngle = f.startAngle + f.circumference), e.pivot()
                    },
                    removeHoverStyle: function(t) {
                        e.DatasetController.prototype.removeHoverStyle.call(this, t, this.chart.options.elements.arc)
                    },
                    calculateTotal: function() {
                        var e, t = this.getDataset(),
                            a = this.getMeta(),
                            n = 0;
                        return r.each(a.data, function(a, i) {
                            e = t.data[i], isNaN(e) || a.hidden || (n += Math.abs(e))
                        }), n
                    },
                    calculateCircumference: function(e) {
                        var t = this.getMeta().total;
                        return t > 0 && !isNaN(e) ? 2 * Math.PI * (Math.abs(e) / t) : 0
                    },
                    getMaxBorderWidth: function(e) {
                        for (var t, a, n = 0, i = this.index, r = e.length, s = 0; s < r; s++) t = e[s]._model ? e[s]._model.borderWidth : 0, n = (a = e[s]._chart ? e[s]._chart.config.data.datasets[i].hoverBorderWidth : 0) > (n = t > n ? t : n) ? a : n;
                        return n
                    }
                })
            }
        },
        Y4Rb: function(e, t, a) {
            "use strict";
            var n = a("RDha"),
                i = a("g8vO");
            e.exports = function(e) {
                var t = {
                        position: "left",
                        ticks: {
                            callback: i.formatters.logarithmic
                        }
                    },
                    a = e.Scale.extend({
                        determineDataLimits: function() {
                            var e = this,
                                t = e.options,
                                a = e.chart,
                                i = a.data.datasets,
                                r = e.isHorizontal();

                            function s(t) {
                                return r ? t.xAxisID === e.id : t.yAxisID === e.id
                            }
                            e.min = null, e.max = null, e.minNotZero = null;
                            var o = t.stacked;
                            if (void 0 === o && n.each(i, function(e, t) {
                                    if (!o) {
                                        var n = a.getDatasetMeta(t);
                                        a.isDatasetVisible(t) && s(n) && void 0 !== n.stack && (o = !0)
                                    }
                                }), t.stacked || o) {
                                var d = {};
                                n.each(i, function(i, r) {
                                    var o = a.getDatasetMeta(r),
                                        l = [o.type, void 0 === t.stacked && void 0 === o.stack ? r : "", o.stack].join(".");
                                    a.isDatasetVisible(r) && s(o) && (void 0 === d[l] && (d[l] = []), n.each(i.data, function(t, a) {
                                        var n = d[l],
                                            i = +e.getRightValue(t);
                                        isNaN(i) || o.data[a].hidden || i < 0 || (n[a] = n[a] || 0, n[a] += i)
                                    }))
                                }), n.each(d, function(t) {
                                    if (t.length > 0) {
                                        var a = n.min(t),
                                            i = n.max(t);
                                        e.min = null === e.min ? a : Math.min(e.min, a), e.max = null === e.max ? i : Math.max(e.max, i)
                                    }
                                })
                            } else n.each(i, function(t, i) {
                                var r = a.getDatasetMeta(i);
                                a.isDatasetVisible(i) && s(r) && n.each(t.data, function(t, a) {
                                    var n = +e.getRightValue(t);
                                    isNaN(n) || r.data[a].hidden || n < 0 || (null === e.min ? e.min = n : n < e.min && (e.min = n), null === e.max ? e.max = n : n > e.max && (e.max = n), 0 !== n && (null === e.minNotZero || n < e.minNotZero) && (e.minNotZero = n))
                                })
                            });
                            this.handleTickRangeOptions()
                        },
                        handleTickRangeOptions: function() {
                            var e = this,
                                t = e.options.ticks,
                                a = n.valueOrDefault;
                            e.min = a(t.min, e.min), e.max = a(t.max, e.max), e.min === e.max && (0 !== e.min && null !== e.min ? (e.min = Math.pow(10, Math.floor(n.log10(e.min)) - 1), e.max = Math.pow(10, Math.floor(n.log10(e.max)) + 1)) : (e.min = 1, e.max = 10)), null === e.min && (e.min = Math.pow(10, Math.floor(n.log10(e.max)) - 1)), null === e.max && (e.max = 0 !== e.min ? Math.pow(10, Math.floor(n.log10(e.min)) + 1) : 10), null === e.minNotZero && (e.minNotZero = e.min > 0 ? e.min : e.max < 1 ? Math.pow(10, Math.floor(n.log10(e.max))) : 1)
                        },
                        buildTicks: function() {
                            var e = this,
                                t = e.options.ticks,
                                a = !e.isHorizontal(),
                                i = e.ticks = function(e, t) {
                                    var a, i, r = [],
                                        s = n.valueOrDefault,
                                        o = s(e.min, Math.pow(10, Math.floor(n.log10(t.min)))),
                                        d = Math.floor(n.log10(t.max)),
                                        l = Math.ceil(t.max / Math.pow(10, d));
                                    0 === o ? (a = Math.floor(n.log10(t.minNotZero)), i = Math.floor(t.minNotZero / Math.pow(10, a)), r.push(o), o = i * Math.pow(10, a)) : (a = Math.floor(n.log10(o)), i = Math.floor(o / Math.pow(10, a)));
                                    var u = a < 0 ? Math.pow(10, Math.abs(a)) : 1;
                                    do {
                                        r.push(o), 10 == ++i && (i = 1, u = ++a >= 0 ? 1 : u), o = Math.round(i * Math.pow(10, a) * u) / u
                                    } while (a < d || a === d && i < l);
                                    var _ = s(e.max, o);
                                    return r.push(_), r
                                }({
                                    min: t.min,
                                    max: t.max
                                }, e);
                            e.max = n.max(i), e.min = n.min(i), t.reverse ? (a = !a, e.start = e.max, e.end = e.min) : (e.start = e.min, e.end = e.max), a && i.reverse()
                        },
                        convertTicksToLabels: function() {
                            this.tickValues = this.ticks.slice(), e.Scale.prototype.convertTicksToLabels.call(this)
                        },
                        getLabelForIndex: function(e, t) {
                            return +this.getRightValue(this.chart.data.datasets[t].data[e])
                        },
                        getPixelForTick: function(e) {
                            return this.getPixelForValue(this.tickValues[e])
                        },
                        _getFirstTickValue: function(e) {
                            var t = Math.floor(n.log10(e));
                            return Math.floor(e / Math.pow(10, t)) * Math.pow(10, t)
                        },
                        getPixelForValue: function(t) {
                            var a, i, r, s, o, d = this,
                                l = d.options.ticks.reverse,
                                u = n.log10,
                                _ = d._getFirstTickValue(d.minNotZero),
                                m = 0;
                            return t = +d.getRightValue(t), l ? (r = d.end, s = d.start, o = -1) : (r = d.start, s = d.end, o = 1), d.isHorizontal() ? (a = d.width, i = l ? d.right : d.left) : (a = d.height, o *= -1, i = l ? d.top : d.bottom), t !== r && (0 === r && (a -= m = n.getValueOrDefault(d.options.ticks.fontSize, e.defaults.global.defaultFontSize), r = _), 0 !== t && (m += a / (u(s) - u(r)) * (u(t) - u(r))), i += o * m), i
                        },
                        getValueForPixel: function(t) {
                            var a, i, r, s, o = this,
                                d = o.options.ticks.reverse,
                                l = n.log10,
                                u = o._getFirstTickValue(o.minNotZero);
                            if (d ? (i = o.end, r = o.start) : (i = o.start, r = o.end), o.isHorizontal() ? (a = o.width, s = d ? o.right - t : t - o.left) : (a = o.height, s = d ? t - o.top : o.bottom - t), s !== i) {
                                if (0 === i) {
                                    var _ = n.getValueOrDefault(o.options.ticks.fontSize, e.defaults.global.defaultFontSize);
                                    s -= _, a -= _, i = u
                                }
                                s *= l(r) - l(i), s /= a, s = Math.pow(10, l(i) + s)
                            }
                            return s
                        }
                    });
                e.scaleService.registerScaleType("logarithmic", a, t)
            }
        },
        YRex: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("ug-cn", {
                    months: "\u064a\u0627\u0646\u06cb\u0627\u0631_\u0641\u06d0\u06cb\u0631\u0627\u0644_\u0645\u0627\u0631\u062a_\u0626\u0627\u067e\u0631\u06d0\u0644_\u0645\u0627\u064a_\u0626\u0649\u064a\u06c7\u0646_\u0626\u0649\u064a\u06c7\u0644_\u0626\u0627\u06cb\u063a\u06c7\u0633\u062a_\u0633\u06d0\u0646\u062a\u06d5\u0628\u0649\u0631_\u0626\u06c6\u0643\u062a\u06d5\u0628\u0649\u0631_\u0646\u0648\u064a\u0627\u0628\u0649\u0631_\u062f\u06d0\u0643\u0627\u0628\u0649\u0631".split("_"),
                    monthsShort: "\u064a\u0627\u0646\u06cb\u0627\u0631_\u0641\u06d0\u06cb\u0631\u0627\u0644_\u0645\u0627\u0631\u062a_\u0626\u0627\u067e\u0631\u06d0\u0644_\u0645\u0627\u064a_\u0626\u0649\u064a\u06c7\u0646_\u0626\u0649\u064a\u06c7\u0644_\u0626\u0627\u06cb\u063a\u06c7\u0633\u062a_\u0633\u06d0\u0646\u062a\u06d5\u0628\u0649\u0631_\u0626\u06c6\u0643\u062a\u06d5\u0628\u0649\u0631_\u0646\u0648\u064a\u0627\u0628\u0649\u0631_\u062f\u06d0\u0643\u0627\u0628\u0649\u0631".split("_"),
                    weekdays: "\u064a\u06d5\u0643\u0634\u06d5\u0646\u0628\u06d5_\u062f\u06c8\u0634\u06d5\u0646\u0628\u06d5_\u0633\u06d5\u064a\u0634\u06d5\u0646\u0628\u06d5_\u0686\u0627\u0631\u0634\u06d5\u0646\u0628\u06d5_\u067e\u06d5\u064a\u0634\u06d5\u0646\u0628\u06d5_\u062c\u06c8\u0645\u06d5_\u0634\u06d5\u0646\u0628\u06d5".split("_"),
                    weekdaysShort: "\u064a\u06d5_\u062f\u06c8_\u0633\u06d5_\u0686\u0627_\u067e\u06d5_\u062c\u06c8_\u0634\u06d5".split("_"),
                    weekdaysMin: "\u064a\u06d5_\u062f\u06c8_\u0633\u06d5_\u0686\u0627_\u067e\u06d5_\u062c\u06c8_\u0634\u06d5".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "YYYY-MM-DD",
                        LL: "YYYY-\u064a\u0649\u0644\u0649M-\u0626\u0627\u064a\u0646\u0649\u06adD-\u0643\u06c8\u0646\u0649",
                        LLL: "YYYY-\u064a\u0649\u0644\u0649M-\u0626\u0627\u064a\u0646\u0649\u06adD-\u0643\u06c8\u0646\u0649\u060c HH:mm",
                        LLLL: "dddd\u060c YYYY-\u064a\u0649\u0644\u0649M-\u0626\u0627\u064a\u0646\u0649\u06adD-\u0643\u06c8\u0646\u0649\u060c HH:mm"
                    },
                    meridiemParse: /\u064a\u06d0\u0631\u0649\u0645 \u0643\u06d0\u0686\u06d5|\u0633\u06d5\u06be\u06d5\u0631|\u0686\u06c8\u0634\u062a\u0649\u0646 \u0628\u06c7\u0631\u06c7\u0646|\u0686\u06c8\u0634|\u0686\u06c8\u0634\u062a\u0649\u0646 \u0643\u06d0\u064a\u0649\u0646|\u0643\u06d5\u0686/,
                    meridiemHour: function(e, t) {
                        return 12 === e && (e = 0), "\u064a\u06d0\u0631\u0649\u0645 \u0643\u06d0\u0686\u06d5" === t || "\u0633\u06d5\u06be\u06d5\u0631" === t || "\u0686\u06c8\u0634\u062a\u0649\u0646 \u0628\u06c7\u0631\u06c7\u0646" === t ? e : "\u0686\u06c8\u0634\u062a\u0649\u0646 \u0643\u06d0\u064a\u0649\u0646" === t || "\u0643\u06d5\u0686" === t ? e + 12 : e >= 11 ? e : e + 12
                    },
                    meridiem: function(e, t, a) {
                        var n = 100 * e + t;
                        return n < 600 ? "\u064a\u06d0\u0631\u0649\u0645 \u0643\u06d0\u0686\u06d5" : n < 900 ? "\u0633\u06d5\u06be\u06d5\u0631" : n < 1130 ? "\u0686\u06c8\u0634\u062a\u0649\u0646 \u0628\u06c7\u0631\u06c7\u0646" : n < 1230 ? "\u0686\u06c8\u0634" : n < 1800 ? "\u0686\u06c8\u0634\u062a\u0649\u0646 \u0643\u06d0\u064a\u0649\u0646" : "\u0643\u06d5\u0686"
                    },
                    calendar: {
                        sameDay: "[\u0628\u06c8\u06af\u06c8\u0646 \u0633\u0627\u0626\u06d5\u062a] LT",
                        nextDay: "[\u0626\u06d5\u062a\u06d5 \u0633\u0627\u0626\u06d5\u062a] LT",
                        nextWeek: "[\u0643\u06d0\u0644\u06d5\u0631\u0643\u0649] dddd [\u0633\u0627\u0626\u06d5\u062a] LT",
                        lastDay: "[\u062a\u06c6\u0646\u06c8\u06af\u06c8\u0646] LT",
                        lastWeek: "[\u0626\u0627\u0644\u062f\u0649\u0646\u0642\u0649] dddd [\u0633\u0627\u0626\u06d5\u062a] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s \u0643\u06d0\u064a\u0649\u0646",
                        past: "%s \u0628\u06c7\u0631\u06c7\u0646",
                        s: "\u0646\u06d5\u0686\u0686\u06d5 \u0633\u06d0\u0643\u0648\u0646\u062a",
                        ss: "%d \u0633\u06d0\u0643\u0648\u0646\u062a",
                        m: "\u0628\u0649\u0631 \u0645\u0649\u0646\u06c7\u062a",
                        mm: "%d \u0645\u0649\u0646\u06c7\u062a",
                        h: "\u0628\u0649\u0631 \u0633\u0627\u0626\u06d5\u062a",
                        hh: "%d \u0633\u0627\u0626\u06d5\u062a",
                        d: "\u0628\u0649\u0631 \u0643\u06c8\u0646",
                        dd: "%d \u0643\u06c8\u0646",
                        M: "\u0628\u0649\u0631 \u0626\u0627\u064a",
                        MM: "%d \u0626\u0627\u064a",
                        y: "\u0628\u0649\u0631 \u064a\u0649\u0644",
                        yy: "%d \u064a\u0649\u0644"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(-\u0643\u06c8\u0646\u0649|-\u0626\u0627\u064a|-\u06be\u06d5\u067e\u062a\u06d5)/,
                    ordinal: function(e, t) {
                        switch (t) {
                            case "d":
                            case "D":
                            case "DDD":
                                return e + "-\u0643\u06c8\u0646\u0649";
                            case "w":
                            case "W":
                                return e + "-\u06be\u06d5\u067e\u062a\u06d5";
                            default:
                                return e
                        }
                    },
                    preparse: function(e) {
                        return e.replace(/\u060c/g, ",")
                    },
                    postformat: function(e) {
                        return e.replace(/,/g, "\u060c")
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(a("wd/R"))
        },
        YSsK: function(e, t, a) {
            "use strict";
            var n = a("CDJp"),
                i = a("RDha"),
                r = a("g8vO");
            e.exports = function(e) {
                var t = {
                        position: "left",
                        ticks: {
                            callback: r.formatters.linear
                        }
                    },
                    a = e.LinearScaleBase.extend({
                        determineDataLimits: function() {
                            var e = this,
                                t = e.options,
                                a = e.chart,
                                n = a.data.datasets,
                                r = e.isHorizontal();

                            function s(t) {
                                return r ? t.xAxisID === e.id : t.yAxisID === e.id
                            }
                            e.min = null, e.max = null;
                            var o = t.stacked;
                            if (void 0 === o && i.each(n, function(e, t) {
                                    if (!o) {
                                        var n = a.getDatasetMeta(t);
                                        a.isDatasetVisible(t) && s(n) && void 0 !== n.stack && (o = !0)
                                    }
                                }), t.stacked || o) {
                                var d = {};
                                i.each(n, function(n, r) {
                                    var o = a.getDatasetMeta(r),
                                        l = [o.type, void 0 === t.stacked && void 0 === o.stack ? r : "", o.stack].join(".");
                                    void 0 === d[l] && (d[l] = {
                                        positiveValues: [],
                                        negativeValues: []
                                    });
                                    var u = d[l].positiveValues,
                                        _ = d[l].negativeValues;
                                    a.isDatasetVisible(r) && s(o) && i.each(n.data, function(a, n) {
                                        var i = +e.getRightValue(a);
                                        isNaN(i) || o.data[n].hidden || (u[n] = u[n] || 0, _[n] = _[n] || 0, t.relativePoints ? u[n] = 100 : i < 0 ? _[n] += i : u[n] += i)
                                    })
                                }), i.each(d, function(t) {
                                    var a = t.positiveValues.concat(t.negativeValues),
                                        n = i.min(a),
                                        r = i.max(a);
                                    e.min = null === e.min ? n : Math.min(e.min, n), e.max = null === e.max ? r : Math.max(e.max, r)
                                })
                            } else i.each(n, function(t, n) {
                                var r = a.getDatasetMeta(n);
                                a.isDatasetVisible(n) && s(r) && i.each(t.data, function(t, a) {
                                    var n = +e.getRightValue(t);
                                    isNaN(n) || r.data[a].hidden || (null === e.min ? e.min = n : n < e.min && (e.min = n), null === e.max ? e.max = n : n > e.max && (e.max = n))
                                })
                            });
                            e.min = isFinite(e.min) && !isNaN(e.min) ? e.min : 0, e.max = isFinite(e.max) && !isNaN(e.max) ? e.max : 1, this.handleTickRangeOptions()
                        },
                        getTickLimit: function() {
                            var e, t = this.options.ticks;
                            if (this.isHorizontal()) e = Math.min(t.maxTicksLimit ? t.maxTicksLimit : 11, Math.ceil(this.width / 50));
                            else {
                                var a = i.valueOrDefault(t.fontSize, n.global.defaultFontSize);
                                e = Math.min(t.maxTicksLimit ? t.maxTicksLimit : 11, Math.ceil(this.height / (2 * a)))
                            }
                            return e
                        },
                        handleDirectionalChanges: function() {
                            this.isHorizontal() || this.ticks.reverse()
                        },
                        getLabelForIndex: function(e, t) {
                            return +this.getRightValue(this.chart.data.datasets[t].data[e])
                        },
                        getPixelForValue: function(e) {
                            var t = this,
                                a = t.start,
                                n = +t.getRightValue(e),
                                i = t.end - a;
                            return t.isHorizontal() ? t.left + t.width / i * (n - a) : t.bottom - t.height / i * (n - a)
                        },
                        getValueForPixel: function(e) {
                            var t = this,
                                a = t.isHorizontal();
                            return t.start + (a ? e - t.left : t.bottom - e) / (a ? t.width : t.height) * (t.end - t.start)
                        },
                        getPixelForTick: function(e) {
                            return this.getPixelForValue(this.ticksAsNumbers[e])
                        }
                    });
                e.scaleService.registerScaleType("linear", a, t)
            }
        },
        YuTi: function(e, t) {
            e.exports = function(e) {
                return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                    enumerable: !0,
                    get: function() {
                        return e.l
                    }
                }), Object.defineProperty(e, "id", {
                    enumerable: !0,
                    get: function() {
                        return e.i
                    }
                }), e.webpackPolyfill = 1), e
            }
        },
        Z4QM: function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = ["\u062c\u0646\u0648\u0631\u064a", "\u0641\u064a\u0628\u0631\u0648\u0631\u064a", "\u0645\u0627\u0631\u0686", "\u0627\u067e\u0631\u064a\u0644", "\u0645\u0626\u064a", "\u062c\u0648\u0646", "\u062c\u0648\u0644\u0627\u0621\u0650", "\u0622\u06af\u0633\u067d", "\u0633\u064a\u067e\u067d\u0645\u0628\u0631", "\u0622\u06aa\u067d\u0648\u0628\u0631", "\u0646\u0648\u0645\u0628\u0631", "\u068a\u0633\u0645\u0628\u0631"],
                    a = ["\u0622\u0686\u0631", "\u0633\u0648\u0645\u0631", "\u0627\u06b1\u0627\u0631\u0648", "\u0627\u0631\u0628\u0639", "\u062e\u0645\u064a\u0633", "\u062c\u0645\u0639", "\u0687\u0646\u0687\u0631"];
                e.defineLocale("sd", {
                    months: t,
                    monthsShort: t,
                    weekdays: a,
                    weekdaysShort: a,
                    weekdaysMin: a,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd\u060c D MMMM YYYY HH:mm"
                    },
                    meridiemParse: /\u0635\u0628\u062d|\u0634\u0627\u0645/,
                    isPM: function(e) {
                        return "\u0634\u0627\u0645" === e
                    },
                    meridiem: function(e, t, a) {
                        return e < 12 ? "\u0635\u0628\u062d" : "\u0634\u0627\u0645"
                    },
                    calendar: {
                        sameDay: "[\u0627\u0684] LT",
                        nextDay: "[\u0633\u0680\u0627\u06bb\u064a] LT",
                        nextWeek: "dddd [\u0627\u06b3\u064a\u0646 \u0647\u0641\u062a\u064a \u062a\u064a] LT",
                        lastDay: "[\u06aa\u0627\u0644\u0647\u0647] LT",
                        lastWeek: "[\u06af\u0632\u0631\u064a\u0644 \u0647\u0641\u062a\u064a] dddd [\u062a\u064a] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s \u067e\u0648\u0621",
                        past: "%s \u0627\u06b3",
                        s: "\u0686\u0646\u062f \u0633\u064a\u06aa\u0646\u068a",
                        ss: "%d \u0633\u064a\u06aa\u0646\u068a",
                        m: "\u0647\u06aa \u0645\u0646\u067d",
                        mm: "%d \u0645\u0646\u067d",
                        h: "\u0647\u06aa \u06aa\u0644\u0627\u06aa",
                        hh: "%d \u06aa\u0644\u0627\u06aa",
                        d: "\u0647\u06aa \u068f\u064a\u0646\u0647\u0646",
                        dd: "%d \u068f\u064a\u0646\u0647\u0646",
                        M: "\u0647\u06aa \u0645\u0647\u064a\u0646\u0648",
                        MM: "%d \u0645\u0647\u064a\u0646\u0627",
                        y: "\u0647\u06aa \u0633\u0627\u0644",
                        yy: "%d \u0633\u0627\u0644"
                    },
                    preparse: function(e) {
                        return e.replace(/\u060c/g, ",")
                    },
                    postformat: function(e) {
                        return e.replace(/,/g, "\u060c")
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(a("wd/R"))
        },
        ZAMP: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("ms-my", {
                    months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
                    monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
                    weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
                    weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
                    weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
                    longDateFormat: {
                        LT: "HH.mm",
                        LTS: "HH.mm.ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY [pukul] HH.mm",
                        LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
                    },
                    meridiemParse: /pagi|tengahari|petang|malam/,
                    meridiemHour: function(e, t) {
                        return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
                    },
                    meridiem: function(e, t, a) {
                        return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
                    },
                    calendar: {
                        sameDay: "[Hari ini pukul] LT",
                        nextDay: "[Esok pukul] LT",
                        nextWeek: "dddd [pukul] LT",
                        lastDay: "[Kelmarin pukul] LT",
                        lastWeek: "dddd [lepas pukul] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "dalam %s",
                        past: "%s yang lepas",
                        s: "beberapa saat",
                        ss: "%d saat",
                        m: "seminit",
                        mm: "%d minit",
                        h: "sejam",
                        hh: "%d jam",
                        d: "sehari",
                        dd: "%d hari",
                        M: "sebulan",
                        MM: "%d bulan",
                        y: "setahun",
                        yy: "%d tahun"
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(a("wd/R"))
        },
        ZANz: function(e, t, a) {
            "use strict";
            var n = a("CDJp"),
                i = a("vvH+"),
                r = a("RDha");
            n._set("bar", {
                hover: {
                    mode: "label"
                },
                scales: {
                    xAxes: [{
                        type: "category",
                        categoryPercentage: .8,
                        barPercentage: .9,
                        offset: !0,
                        gridLines: {
                            offsetGridLines: !0
                        }
                    }],
                    yAxes: [{
                        type: "linear"
                    }]
                }
            }), n._set("horizontalBar", {
                hover: {
                    mode: "index",
                    axis: "y"
                },
                scales: {
                    xAxes: [{
                        type: "linear",
                        position: "bottom"
                    }],
                    yAxes: [{
                        position: "left",
                        type: "category",
                        categoryPercentage: .8,
                        barPercentage: .9,
                        offset: !0,
                        gridLines: {
                            offsetGridLines: !0
                        }
                    }]
                },
                elements: {
                    rectangle: {
                        borderSkipped: "left"
                    }
                },
                tooltips: {
                    callbacks: {
                        title: function(e, t) {
                            var a = "";
                            return e.length > 0 && (e[0].yLabel ? a = e[0].yLabel : t.labels.length > 0 && e[0].index < t.labels.length && (a = t.labels[e[0].index])), a
                        },
                        label: function(e, t) {
                            return (t.datasets[e.datasetIndex].label || "") + ": " + e.xLabel
                        }
                    },
                    mode: "index",
                    axis: "y"
                }
            }), e.exports = function(e) {
                e.controllers.bar = e.DatasetController.extend({
                    dataElementType: i.Rectangle,
                    initialize: function() {
                        var t;
                        e.DatasetController.prototype.initialize.apply(this, arguments), (t = this.getMeta()).stack = this.getDataset().stack, t.bar = !0
                    },
                    update: function(e) {
                        var t, a, n = this.getMeta().data;
                        for (this._ruler = this.getRuler(), t = 0, a = n.length; t < a; ++t) this.updateElement(n[t], t, e)
                    },
                    updateElement: function(e, t, a) {
                        var n = this,
                            i = n.chart,
                            s = n.getMeta(),
                            o = n.getDataset(),
                            d = e.custom || {},
                            l = i.options.elements.rectangle;
                        e._xScale = n.getScaleForId(s.xAxisID), e._yScale = n.getScaleForId(s.yAxisID), e._datasetIndex = n.index, e._index = t, e._model = {
                            datasetLabel: o.label,
                            label: i.data.labels[t],
                            borderSkipped: d.borderSkipped ? d.borderSkipped : l.borderSkipped,
                            backgroundColor: d.backgroundColor ? d.backgroundColor : r.valueAtIndexOrDefault(o.backgroundColor, t, l.backgroundColor),
                            borderColor: d.borderColor ? d.borderColor : r.valueAtIndexOrDefault(o.borderColor, t, l.borderColor),
                            borderWidth: d.borderWidth ? d.borderWidth : r.valueAtIndexOrDefault(o.borderWidth, t, l.borderWidth)
                        }, n.updateElementGeometry(e, t, a), e.pivot()
                    },
                    updateElementGeometry: function(e, t, a) {
                        var n = this,
                            i = e._model,
                            r = n.getValueScale(),
                            s = r.getBasePixel(),
                            o = r.isHorizontal(),
                            d = n._ruler || n.getRuler(),
                            l = n.calculateBarValuePixels(n.index, t),
                            u = n.calculateBarIndexPixels(n.index, t, d);
                        i.horizontal = o, i.base = a ? s : l.base, i.x = o ? a ? s : l.head : u.center, i.y = o ? u.center : a ? s : l.head, i.height = o ? u.size : void 0, i.width = o ? void 0 : u.size
                    },
                    getValueScaleId: function() {
                        return this.getMeta().yAxisID
                    },
                    getIndexScaleId: function() {
                        return this.getMeta().xAxisID
                    },
                    getValueScale: function() {
                        return this.getScaleForId(this.getValueScaleId())
                    },
                    getIndexScale: function() {
                        return this.getScaleForId(this.getIndexScaleId())
                    },
                    _getStacks: function(e) {
                        var t, a, n = this.chart,
                            i = this.getIndexScale().options.stacked,
                            r = void 0 === e ? n.data.datasets.length : e + 1,
                            s = [];
                        for (t = 0; t < r; ++t)(a = n.getDatasetMeta(t)).bar && n.isDatasetVisible(t) && (!1 === i || !0 === i && -1 === s.indexOf(a.stack) || void 0 === i && (void 0 === a.stack || -1 === s.indexOf(a.stack))) && s.push(a.stack);
                        return s
                    },
                    getStackCount: function() {
                        return this._getStacks().length
                    },
                    getStackIndex: function(e, t) {
                        var a = this._getStacks(e),
                            n = void 0 !== t ? a.indexOf(t) : -1;
                        return -1 === n ? a.length - 1 : n
                    },
                    getRuler: function() {
                        var e, t, a = this.getIndexScale(),
                            n = this.getStackCount(),
                            i = this.index,
                            s = a.isHorizontal(),
                            o = s ? a.left : a.top,
                            d = o + (s ? a.width : a.height),
                            l = [];
                        for (e = 0, t = this.getMeta().data.length; e < t; ++e) l.push(a.getPixelForValue(null, e, i));
                        return {
                            min: r.isNullOrUndef(a.options.barThickness) ? function(e, t) {
                                var a, n, i, r, s = e.isHorizontal() ? e.width : e.height,
                                    o = e.getTicks();
                                for (i = 1, r = t.length; i < r; ++i) s = Math.min(s, t[i] - t[i - 1]);
                                for (i = 0, r = o.length; i < r; ++i) n = e.getPixelForTick(i), s = i > 0 ? Math.min(s, n - a) : s, a = n;
                                return s
                            }(a, l) : -1,
                            pixels: l,
                            start: o,
                            end: d,
                            stackCount: n,
                            scale: a
                        }
                    },
                    calculateBarValuePixels: function(e, t) {
                        var a, n, i, r, s, o, d = this.chart,
                            l = this.getMeta(),
                            u = this.getValueScale(),
                            _ = d.data.datasets,
                            m = u.getRightValue(_[e].data[t]),
                            h = u.options.stacked,
                            c = l.stack,
                            f = 0;
                        if (h || void 0 === h && void 0 !== c)
                            for (a = 0; a < e; ++a)(n = d.getDatasetMeta(a)).bar && n.stack === c && n.controller.getValueScaleId() === u.id && d.isDatasetVisible(a) && (i = u.getRightValue(_[a].data[t]), (m < 0 && i < 0 || m >= 0 && i > 0) && (f += i));
                        return r = u.getPixelForValue(f), {
                            size: o = ((s = u.getPixelForValue(f + m)) - r) / 2,
                            base: r,
                            head: s,
                            center: s + o / 2
                        }
                    },
                    calculateBarIndexPixels: function(e, t, a) {
                        var n = a.scale.options,
                            i = "flex" === n.barThickness ? function(e, t, a) {
                                var n = t.pixels,
                                    i = n[e],
                                    r = e > 0 ? n[e - 1] : null,
                                    s = e < n.length - 1 ? n[e + 1] : null,
                                    o = a.categoryPercentage;
                                return null === r && (r = i - (null === s ? t.end - i : s - i)), null === s && (s = i + i - r), {
                                    chunk: (s - r) / 2 * o / t.stackCount,
                                    ratio: a.barPercentage,
                                    start: i - (i - r) / 2 * o
                                }
                            }(t, a, n) : function(e, t, a) {
                                var n, i, s = a.barThickness,
                                    o = t.stackCount,
                                    d = t.pixels[e];
                                return r.isNullOrUndef(s) ? (n = t.min * a.categoryPercentage, i = a.barPercentage) : (n = s * o, i = 1), {
                                    chunk: n / o,
                                    ratio: i,
                                    start: d - n / 2
                                }
                            }(t, a, n),
                            s = this.getStackIndex(e, this.getMeta().stack),
                            o = i.start + i.chunk * s + i.chunk / 2,
                            d = Math.min(r.valueOrDefault(n.maxBarThickness, 1 / 0), i.chunk * i.ratio);
                        return {
                            base: o - d / 2,
                            head: o + d / 2,
                            center: o,
                            size: d
                        }
                    },
                    draw: function() {
                        var e = this.chart,
                            t = this.getValueScale(),
                            a = this.getMeta().data,
                            n = this.getDataset(),
                            i = a.length,
                            s = 0;
                        for (r.canvas.clipArea(e.ctx, e.chartArea); s < i; ++s) isNaN(t.getRightValue(n.data[s])) || a[s].draw();
                        r.canvas.unclipArea(e.ctx)
                    },
                    setHoverStyle: function(e) {
                        var t = this.chart.data.datasets[e._datasetIndex],
                            a = e._index,
                            n = e.custom || {},
                            i = e._model;
                        i.backgroundColor = n.hoverBackgroundColor ? n.hoverBackgroundColor : r.valueAtIndexOrDefault(t.hoverBackgroundColor, a, r.getHoverColor(i.backgroundColor)), i.borderColor = n.hoverBorderColor ? n.hoverBorderColor : r.valueAtIndexOrDefault(t.hoverBorderColor, a, r.getHoverColor(i.borderColor)), i.borderWidth = n.hoverBorderWidth ? n.hoverBorderWidth : r.valueAtIndexOrDefault(t.hoverBorderWidth, a, i.borderWidth)
                    },
                    removeHoverStyle: function(e) {
                        var t = this.chart.data.datasets[e._datasetIndex],
                            a = e._index,
                            n = e.custom || {},
                            i = e._model,
                            s = this.chart.options.elements.rectangle;
                        i.backgroundColor = n.backgroundColor ? n.backgroundColor : r.valueAtIndexOrDefault(t.backgroundColor, a, s.backgroundColor), i.borderColor = n.borderColor ? n.borderColor : r.valueAtIndexOrDefault(t.borderColor, a, s.borderColor), i.borderWidth = n.borderWidth ? n.borderWidth : r.valueAtIndexOrDefault(t.borderWidth, a, s.borderWidth)
                    }
                }), e.controllers.horizontalBar = e.controllers.bar.extend({
                    getValueScaleId: function() {
                        return this.getMeta().xAxisID
                    },
                    getIndexScaleId: function() {
                        return this.getMeta().yAxisID
                    }
                })
            }
        },
        Zduo: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("eo", {
                    months: "januaro_februaro_marto_aprilo_majo_junio_julio_a\u016dgusto_septembro_oktobro_novembro_decembro".split("_"),
                    monthsShort: "jan_feb_mar_apr_maj_jun_jul_a\u016dg_sep_okt_nov_dec".split("_"),
                    weekdays: "diman\u0109o_lundo_mardo_merkredo_\u0135a\u016ddo_vendredo_sabato".split("_"),
                    weekdaysShort: "dim_lun_mard_merk_\u0135a\u016d_ven_sab".split("_"),
                    weekdaysMin: "di_lu_ma_me_\u0135a_ve_sa".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "YYYY-MM-DD",
                        LL: "D[-a de] MMMM, YYYY",
                        LLL: "D[-a de] MMMM, YYYY HH:mm",
                        LLLL: "dddd, [la] D[-a de] MMMM, YYYY HH:mm"
                    },
                    meridiemParse: /[ap]\.t\.m/i,
                    isPM: function(e) {
                        return "p" === e.charAt(0).toLowerCase()
                    },
                    meridiem: function(e, t, a) {
                        return e > 11 ? a ? "p.t.m." : "P.T.M." : a ? "a.t.m." : "A.T.M."
                    },
                    calendar: {
                        sameDay: "[Hodia\u016d je] LT",
                        nextDay: "[Morga\u016d je] LT",
                        nextWeek: "dddd [je] LT",
                        lastDay: "[Hiera\u016d je] LT",
                        lastWeek: "[pasinta] dddd [je] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "post %s",
                        past: "anta\u016d %s",
                        s: "sekundoj",
                        ss: "%d sekundoj",
                        m: "minuto",
                        mm: "%d minutoj",
                        h: "horo",
                        hh: "%d horoj",
                        d: "tago",
                        dd: "%d tagoj",
                        M: "monato",
                        MM: "%d monatoj",
                        y: "jaro",
                        yy: "%d jaroj"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}a/,
                    ordinal: "%da",
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(a("wd/R"))
        },
        aB2c: function(e, t, a) {
            "use strict";
            var n = a("CDJp"),
                i = a("vvH+"),
                r = a("RDha");
            n._set("radar", {
                scale: {
                    type: "radialLinear"
                },
                elements: {
                    line: {
                        tension: 0
                    }
                }
            }), e.exports = function(e) {
                e.controllers.radar = e.DatasetController.extend({
                    datasetElementType: i.Line,
                    dataElementType: i.Point,
                    linkScales: r.noop,
                    update: function(e) {
                        var t = this,
                            a = t.getMeta(),
                            n = a.data,
                            i = a.dataset.custom || {},
                            s = t.getDataset(),
                            o = t.chart.options.elements.line,
                            d = t.chart.scale;
                        void 0 !== s.tension && void 0 === s.lineTension && (s.lineTension = s.tension), r.extend(a.dataset, {
                            _datasetIndex: t.index,
                            _scale: d,
                            _children: n,
                            _loop: !0,
                            _model: {
                                tension: i.tension ? i.tension : r.valueOrDefault(s.lineTension, o.tension),
                                backgroundColor: i.backgroundColor ? i.backgroundColor : s.backgroundColor || o.backgroundColor,
                                borderWidth: i.borderWidth ? i.borderWidth : s.borderWidth || o.borderWidth,
                                borderColor: i.borderColor ? i.borderColor : s.borderColor || o.borderColor,
                                fill: i.fill ? i.fill : void 0 !== s.fill ? s.fill : o.fill,
                                borderCapStyle: i.borderCapStyle ? i.borderCapStyle : s.borderCapStyle || o.borderCapStyle,
                                borderDash: i.borderDash ? i.borderDash : s.borderDash || o.borderDash,
                                borderDashOffset: i.borderDashOffset ? i.borderDashOffset : s.borderDashOffset || o.borderDashOffset,
                                borderJoinStyle: i.borderJoinStyle ? i.borderJoinStyle : s.borderJoinStyle || o.borderJoinStyle
                            }
                        }), a.dataset.pivot(), r.each(n, function(a, n) {
                            t.updateElement(a, n, e)
                        }, t), t.updateBezierControlPoints()
                    },
                    updateElement: function(e, t, a) {
                        var n = this,
                            i = e.custom || {},
                            s = n.getDataset(),
                            o = n.chart.scale,
                            d = n.chart.options.elements.point,
                            l = o.getPointPositionForValue(t, s.data[t]);
                        void 0 !== s.radius && void 0 === s.pointRadius && (s.pointRadius = s.radius), void 0 !== s.hitRadius && void 0 === s.pointHitRadius && (s.pointHitRadius = s.hitRadius), r.extend(e, {
                            _datasetIndex: n.index,
                            _index: t,
                            _scale: o,
                            _model: {
                                x: a ? o.xCenter : l.x,
                                y: a ? o.yCenter : l.y,
                                tension: i.tension ? i.tension : r.valueOrDefault(s.lineTension, n.chart.options.elements.line.tension),
                                radius: i.radius ? i.radius : r.valueAtIndexOrDefault(s.pointRadius, t, d.radius),
                                backgroundColor: i.backgroundColor ? i.backgroundColor : r.valueAtIndexOrDefault(s.pointBackgroundColor, t, d.backgroundColor),
                                borderColor: i.borderColor ? i.borderColor : r.valueAtIndexOrDefault(s.pointBorderColor, t, d.borderColor),
                                borderWidth: i.borderWidth ? i.borderWidth : r.valueAtIndexOrDefault(s.pointBorderWidth, t, d.borderWidth),
                                pointStyle: i.pointStyle ? i.pointStyle : r.valueAtIndexOrDefault(s.pointStyle, t, d.pointStyle),
                                hitRadius: i.hitRadius ? i.hitRadius : r.valueAtIndexOrDefault(s.pointHitRadius, t, d.hitRadius)
                            }
                        }), e._model.skip = i.skip ? i.skip : isNaN(e._model.x) || isNaN(e._model.y)
                    },
                    updateBezierControlPoints: function() {
                        var e = this.chart.chartArea,
                            t = this.getMeta();
                        r.each(t.data, function(a, n) {
                            var i = a._model,
                                s = r.splineCurve(r.previousItem(t.data, n, !0)._model, i, r.nextItem(t.data, n, !0)._model, i.tension);
                            i.controlPointPreviousX = Math.max(Math.min(s.previous.x, e.right), e.left), i.controlPointPreviousY = Math.max(Math.min(s.previous.y, e.bottom), e.top), i.controlPointNextX = Math.max(Math.min(s.next.x, e.right), e.left), i.controlPointNextY = Math.max(Math.min(s.next.y, e.bottom), e.top), a.pivot()
                        })
                    },
                    setHoverStyle: function(e) {
                        var t = this.chart.data.datasets[e._datasetIndex],
                            a = e.custom || {},
                            n = e._index,
                            i = e._model;
                        i.radius = a.hoverRadius ? a.hoverRadius : r.valueAtIndexOrDefault(t.pointHoverRadius, n, this.chart.options.elements.point.hoverRadius), i.backgroundColor = a.hoverBackgroundColor ? a.hoverBackgroundColor : r.valueAtIndexOrDefault(t.pointHoverBackgroundColor, n, r.getHoverColor(i.backgroundColor)), i.borderColor = a.hoverBorderColor ? a.hoverBorderColor : r.valueAtIndexOrDefault(t.pointHoverBorderColor, n, r.getHoverColor(i.borderColor)), i.borderWidth = a.hoverBorderWidth ? a.hoverBorderWidth : r.valueAtIndexOrDefault(t.pointHoverBorderWidth, n, i.borderWidth)
                    },
                    removeHoverStyle: function(e) {
                        var t = this.chart.data.datasets[e._datasetIndex],
                            a = e.custom || {},
                            n = e._index,
                            i = e._model,
                            s = this.chart.options.elements.point;
                        i.radius = a.radius ? a.radius : r.valueAtIndexOrDefault(t.pointRadius, n, s.radius), i.backgroundColor = a.backgroundColor ? a.backgroundColor : r.valueAtIndexOrDefault(t.pointBackgroundColor, n, s.backgroundColor), i.borderColor = a.borderColor ? a.borderColor : r.valueAtIndexOrDefault(t.pointBorderColor, n, s.borderColor), i.borderWidth = a.borderWidth ? a.borderWidth : r.valueAtIndexOrDefault(t.pointBorderWidth, n, s.borderWidth)
                    }
                })
            }
        },
        aIdf: function(e, t, a) {
            ! function(e) {
                "use strict";

                function t(e, t, a) {
                    return e + " " + function(e, t) {
                        return 2 === t ? function(e) {
                            var t = {
                                m: "v",
                                b: "v",
                                d: "z"
                            };
                            return void 0 === t[e.charAt(0)] ? e : t[e.charAt(0)] + e.substring(1)
                        }(e) : e
                    }({
                        mm: "munutenn",
                        MM: "miz",
                        dd: "devezh"
                    }[a], e)
                }
                e.defineLocale("br", {
                    months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
                    monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
                    weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),
                    weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
                    weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "h[e]mm A",
                        LTS: "h[e]mm:ss A",
                        L: "DD/MM/YYYY",
                        LL: "D [a viz] MMMM YYYY",
                        LLL: "D [a viz] MMMM YYYY h[e]mm A",
                        LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A"
                    },
                    calendar: {
                        sameDay: "[Hiziv da] LT",
                        nextDay: "[Warc'hoazh da] LT",
                        nextWeek: "dddd [da] LT",
                        lastDay: "[Dec'h da] LT",
                        lastWeek: "dddd [paset da] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "a-benn %s",
                        past: "%s 'zo",
                        s: "un nebeud segondenno\xf9",
                        ss: "%d eilenn",
                        m: "ur vunutenn",
                        mm: t,
                        h: "un eur",
                        hh: "%d eur",
                        d: "un devezh",
                        dd: t,
                        M: "ur miz",
                        MM: t,
                        y: "ur bloaz",
                        yy: function(e) {
                            switch (function e(t) {
                                return t > 9 ? e(t % 10) : t
                            }(e)) {
                                case 1:
                                case 3:
                                case 4:
                                case 5:
                                case 9:
                                    return e + " bloaz";
                                default:
                                    return e + " vloaz"
                            }
                        }
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(a\xf1|vet)/,
                    ordinal: function(e) {
                        return e + (1 === e ? "a\xf1" : "vet")
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(a("wd/R"))
        },
        aIsn: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("mi", {
                    months: "Kohi-t\u0101te_Hui-tanguru_Pout\u016b-te-rangi_Paenga-wh\u0101wh\u0101_Haratua_Pipiri_H\u014dngoingoi_Here-turi-k\u014dk\u0101_Mahuru_Whiringa-\u0101-nuku_Whiringa-\u0101-rangi_Hakihea".split("_"),
                    monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_H\u014dngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),
                    monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
                    monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
                    monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
                    monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
                    weekdays: "R\u0101tapu_Mane_T\u016brei_Wenerei_T\u0101ite_Paraire_H\u0101tarei".split("_"),
                    weekdaysShort: "Ta_Ma_T\u016b_We_T\u0101i_Pa_H\u0101".split("_"),
                    weekdaysMin: "Ta_Ma_T\u016b_We_T\u0101i_Pa_H\u0101".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY [i] HH:mm",
                        LLLL: "dddd, D MMMM YYYY [i] HH:mm"
                    },
                    calendar: {
                        sameDay: "[i teie mahana, i] LT",
                        nextDay: "[apopo i] LT",
                        nextWeek: "dddd [i] LT",
                        lastDay: "[inanahi i] LT",
                        lastWeek: "dddd [whakamutunga i] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "i roto i %s",
                        past: "%s i mua",
                        s: "te h\u0113kona ruarua",
                        ss: "%d h\u0113kona",
                        m: "he meneti",
                        mm: "%d meneti",
                        h: "te haora",
                        hh: "%d haora",
                        d: "he ra",
                        dd: "%d ra",
                        M: "he marama",
                        MM: "%d marama",
                        y: "he tau",
                        yy: "%d tau"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\xba/,
                    ordinal: "%d\xba",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(a("wd/R"))
        },
        aQkU: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("mk", {
                    months: "\u0458\u0430\u043d\u0443\u0430\u0440\u0438_\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0438\u043b_\u043c\u0430\u0458_\u0458\u0443\u043d\u0438_\u0458\u0443\u043b\u0438_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438_\u043e\u043a\u0442\u043e\u043c\u0432\u0440\u0438_\u043d\u043e\u0435\u043c\u0432\u0440\u0438_\u0434\u0435\u043a\u0435\u043c\u0432\u0440\u0438".split("_"),
                    monthsShort: "\u0458\u0430\u043d_\u0444\u0435\u0432_\u043c\u0430\u0440_\u0430\u043f\u0440_\u043c\u0430\u0458_\u0458\u0443\u043d_\u0458\u0443\u043b_\u0430\u0432\u0433_\u0441\u0435\u043f_\u043e\u043a\u0442_\u043d\u043e\u0435_\u0434\u0435\u043a".split("_"),
                    weekdays: "\u043d\u0435\u0434\u0435\u043b\u0430_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0440\u0442\u043e\u043a_\u043f\u0435\u0442\u043e\u043a_\u0441\u0430\u0431\u043e\u0442\u0430".split("_"),
                    weekdaysShort: "\u043d\u0435\u0434_\u043f\u043e\u043d_\u0432\u0442\u043e_\u0441\u0440\u0435_\u0447\u0435\u0442_\u043f\u0435\u0442_\u0441\u0430\u0431".split("_"),
                    weekdaysMin: "\u043de_\u043fo_\u0432\u0442_\u0441\u0440_\u0447\u0435_\u043f\u0435_\u0441a".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "D.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY H:mm",
                        LLLL: "dddd, D MMMM YYYY H:mm"
                    },
                    calendar: {
                        sameDay: "[\u0414\u0435\u043d\u0435\u0441 \u0432\u043e] LT",
                        nextDay: "[\u0423\u0442\u0440\u0435 \u0432\u043e] LT",
                        nextWeek: "[\u0412\u043e] dddd [\u0432\u043e] LT",
                        lastDay: "[\u0412\u0447\u0435\u0440\u0430 \u0432\u043e] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                case 3:
                                case 6:
                                    return "[\u0418\u0437\u043c\u0438\u043d\u0430\u0442\u0430\u0442\u0430] dddd [\u0432\u043e] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[\u0418\u0437\u043c\u0438\u043d\u0430\u0442\u0438\u043e\u0442] dddd [\u0432\u043e] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "\u043f\u043e\u0441\u043b\u0435 %s",
                        past: "\u043f\u0440\u0435\u0434 %s",
                        s: "\u043d\u0435\u043a\u043e\u043b\u043a\u0443 \u0441\u0435\u043a\u0443\u043d\u0434\u0438",
                        ss: "%d \u0441\u0435\u043a\u0443\u043d\u0434\u0438",
                        m: "\u043c\u0438\u043d\u0443\u0442\u0430",
                        mm: "%d \u043c\u0438\u043d\u0443\u0442\u0438",
                        h: "\u0447\u0430\u0441",
                        hh: "%d \u0447\u0430\u0441\u0430",
                        d: "\u0434\u0435\u043d",
                        dd: "%d \u0434\u0435\u043d\u0430",
                        M: "\u043c\u0435\u0441\u0435\u0446",
                        MM: "%d \u043c\u0435\u0441\u0435\u0446\u0438",
                        y: "\u0433\u043e\u0434\u0438\u043d\u0430",
                        yy: "%d \u0433\u043e\u0434\u0438\u043d\u0438"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}-(\u0435\u0432|\u0435\u043d|\u0442\u0438|\u0432\u0438|\u0440\u0438|\u043c\u0438)/,
                    ordinal: function(e) {
                        var t = e % 10,
                            a = e % 100;
                        return 0 === e ? e + "-\u0435\u0432" : 0 === a ? e + "-\u0435\u043d" : a > 10 && a < 20 ? e + "-\u0442\u0438" : 1 === t ? e + "-\u0432\u0438" : 2 === t ? e + "-\u0440\u0438" : 7 === t || 8 === t ? e + "-\u043c\u0438" : e + "-\u0442\u0438"
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(a("wd/R"))
        },
        b1Dy: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("en-nz", {
                    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                    monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                    weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                    weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                    longDateFormat: {
                        LT: "h:mm A",
                        LTS: "h:mm:ss A",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY h:mm A",
                        LLLL: "dddd, D MMMM YYYY h:mm A"
                    },
                    calendar: {
                        sameDay: "[Today at] LT",
                        nextDay: "[Tomorrow at] LT",
                        nextWeek: "dddd [at] LT",
                        lastDay: "[Yesterday at] LT",
                        lastWeek: "[Last] dddd [at] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "in %s",
                        past: "%s ago",
                        s: "a few seconds",
                        ss: "%d seconds",
                        m: "a minute",
                        mm: "%d minutes",
                        h: "an hour",
                        hh: "%d hours",
                        d: "a day",
                        dd: "%d days",
                        M: "a month",
                        MM: "%d months",
                        y: "a year",
                        yy: "%d years"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                    ordinal: function(e) {
                        var t = e % 10;
                        return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(a("wd/R"))
        },
        bOMt: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("nb", {
                    months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
                    monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "s\xf8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\xf8rdag".split("_"),
                    weekdaysShort: "s\xf8._ma._ti._on._to._fr._l\xf8.".split("_"),
                    weekdaysMin: "s\xf8_ma_ti_on_to_fr_l\xf8".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY [kl.] HH:mm",
                        LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
                    },
                    calendar: {
                        sameDay: "[i dag kl.] LT",
                        nextDay: "[i morgen kl.] LT",
                        nextWeek: "dddd [kl.] LT",
                        lastDay: "[i g\xe5r kl.] LT",
                        lastWeek: "[forrige] dddd [kl.] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "om %s",
                        past: "%s siden",
                        s: "noen sekunder",
                        ss: "%d sekunder",
                        m: "ett minutt",
                        mm: "%d minutter",
                        h: "en time",
                        hh: "%d timer",
                        d: "en dag",
                        dd: "%d dager",
                        M: "en m\xe5ned",
                        MM: "%d m\xe5neder",
                        y: "ett \xe5r",
                        yy: "%d \xe5r"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(a("wd/R"))
        },
        bXm7: function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = {
                    0: "-\u0448\u0456",
                    1: "-\u0448\u0456",
                    2: "-\u0448\u0456",
                    3: "-\u0448\u0456",
                    4: "-\u0448\u0456",
                    5: "-\u0448\u0456",
                    6: "-\u0448\u044b",
                    7: "-\u0448\u0456",
                    8: "-\u0448\u0456",
                    9: "-\u0448\u044b",
                    10: "-\u0448\u044b",
                    20: "-\u0448\u044b",
                    30: "-\u0448\u044b",
                    40: "-\u0448\u044b",
                    50: "-\u0448\u0456",
                    60: "-\u0448\u044b",
                    70: "-\u0448\u0456",
                    80: "-\u0448\u0456",
                    90: "-\u0448\u044b",
                    100: "-\u0448\u0456"
                };
                e.defineLocale("kk", {
                    months: "\u049b\u0430\u04a3\u0442\u0430\u0440_\u0430\u049b\u043f\u0430\u043d_\u043d\u0430\u0443\u0440\u044b\u0437_\u0441\u04d9\u0443\u0456\u0440_\u043c\u0430\u043c\u044b\u0440_\u043c\u0430\u0443\u0441\u044b\u043c_\u0448\u0456\u043b\u0434\u0435_\u0442\u0430\u043c\u044b\u0437_\u049b\u044b\u0440\u043a\u04af\u0439\u0435\u043a_\u049b\u0430\u0437\u0430\u043d_\u049b\u0430\u0440\u0430\u0448\u0430_\u0436\u0435\u043b\u0442\u043e\u049b\u0441\u0430\u043d".split("_"),
                    monthsShort: "\u049b\u0430\u04a3_\u0430\u049b\u043f_\u043d\u0430\u0443_\u0441\u04d9\u0443_\u043c\u0430\u043c_\u043c\u0430\u0443_\u0448\u0456\u043b_\u0442\u0430\u043c_\u049b\u044b\u0440_\u049b\u0430\u0437_\u049b\u0430\u0440_\u0436\u0435\u043b".split("_"),
                    weekdays: "\u0436\u0435\u043a\u0441\u0435\u043d\u0431\u0456_\u0434\u04af\u0439\u0441\u0435\u043d\u0431\u0456_\u0441\u0435\u0439\u0441\u0435\u043d\u0431\u0456_\u0441\u04d9\u0440\u0441\u0435\u043d\u0431\u0456_\u0431\u0435\u0439\u0441\u0435\u043d\u0431\u0456_\u0436\u04b1\u043c\u0430_\u0441\u0435\u043d\u0431\u0456".split("_"),
                    weekdaysShort: "\u0436\u0435\u043a_\u0434\u04af\u0439_\u0441\u0435\u0439_\u0441\u04d9\u0440_\u0431\u0435\u0439_\u0436\u04b1\u043c_\u0441\u0435\u043d".split("_"),
                    weekdaysMin: "\u0436\u043a_\u0434\u0439_\u0441\u0439_\u0441\u0440_\u0431\u0439_\u0436\u043c_\u0441\u043d".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[\u0411\u04af\u0433\u0456\u043d \u0441\u0430\u0493\u0430\u0442] LT",
                        nextDay: "[\u0415\u0440\u0442\u0435\u04a3 \u0441\u0430\u0493\u0430\u0442] LT",
                        nextWeek: "dddd [\u0441\u0430\u0493\u0430\u0442] LT",
                        lastDay: "[\u041a\u0435\u0448\u0435 \u0441\u0430\u0493\u0430\u0442] LT",
                        lastWeek: "[\u04e8\u0442\u043a\u0435\u043d \u0430\u043f\u0442\u0430\u043d\u044b\u04a3] dddd [\u0441\u0430\u0493\u0430\u0442] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s \u0456\u0448\u0456\u043d\u0434\u0435",
                        past: "%s \u0431\u04b1\u0440\u044b\u043d",
                        s: "\u0431\u0456\u0440\u043d\u0435\u0448\u0435 \u0441\u0435\u043a\u0443\u043d\u0434",
                        ss: "%d \u0441\u0435\u043a\u0443\u043d\u0434",
                        m: "\u0431\u0456\u0440 \u043c\u0438\u043d\u0443\u0442",
                        mm: "%d \u043c\u0438\u043d\u0443\u0442",
                        h: "\u0431\u0456\u0440 \u0441\u0430\u0493\u0430\u0442",
                        hh: "%d \u0441\u0430\u0493\u0430\u0442",
                        d: "\u0431\u0456\u0440 \u043a\u04af\u043d",
                        dd: "%d \u043a\u04af\u043d",
                        M: "\u0431\u0456\u0440 \u0430\u0439",
                        MM: "%d \u0430\u0439",
                        y: "\u0431\u0456\u0440 \u0436\u044b\u043b",
                        yy: "%d \u0436\u044b\u043b"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}-(\u0448\u0456|\u0448\u044b)/,
                    ordinal: function(e) {
                        return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null])
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(a("wd/R"))
        },
        bYM6: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("ar-tn", {
                    months: "\u062c\u0627\u0646\u0641\u064a_\u0641\u064a\u0641\u0631\u064a_\u0645\u0627\u0631\u0633_\u0623\u0641\u0631\u064a\u0644_\u0645\u0627\u064a_\u062c\u0648\u0627\u0646_\u062c\u0648\u064a\u0644\u064a\u0629_\u0623\u0648\u062a_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"),
                    monthsShort: "\u062c\u0627\u0646\u0641\u064a_\u0641\u064a\u0641\u0631\u064a_\u0645\u0627\u0631\u0633_\u0623\u0641\u0631\u064a\u0644_\u0645\u0627\u064a_\u062c\u0648\u0627\u0646_\u062c\u0648\u064a\u0644\u064a\u0629_\u0623\u0648\u062a_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"),
                    weekdays: "\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"),
                    weekdaysShort: "\u0623\u062d\u062f_\u0625\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"),
                    weekdaysMin: "\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                        nextDay: "[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                        nextWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                        lastDay: "[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                        lastWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "\u0641\u064a %s",
                        past: "\u0645\u0646\u0630 %s",
                        s: "\u062b\u0648\u0627\u0646",
                        ss: "%d \u062b\u0627\u0646\u064a\u0629",
                        m: "\u062f\u0642\u064a\u0642\u0629",
                        mm: "%d \u062f\u0642\u0627\u0626\u0642",
                        h: "\u0633\u0627\u0639\u0629",
                        hh: "%d \u0633\u0627\u0639\u0627\u062a",
                        d: "\u064a\u0648\u0645",
                        dd: "%d \u0623\u064a\u0627\u0645",
                        M: "\u0634\u0647\u0631",
                        MM: "%d \u0623\u0634\u0647\u0631",
                        y: "\u0633\u0646\u0629",
                        yy: "%d \u0633\u0646\u0648\u0627\u062a"
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(a("wd/R"))
        },
        bidN: function(e, t, a) {
            "use strict";
            var n = a("CDJp"),
                i = a("vvH+"),
                r = a("RDha");
            n._set("bubble", {
                hover: {
                    mode: "single"
                },
                scales: {
                    xAxes: [{
                        type: "linear",
                        position: "bottom",
                        id: "x-axis-0"
                    }],
                    yAxes: [{
                        type: "linear",
                        position: "left",
                        id: "y-axis-0"
                    }]
                },
                tooltips: {
                    callbacks: {
                        title: function() {
                            return ""
                        },
                        label: function(e, t) {
                            return (t.datasets[e.datasetIndex].label || "") + ": (" + e.xLabel + ", " + e.yLabel + ", " + t.datasets[e.datasetIndex].data[e.index].r + ")"
                        }
                    }
                }
            }), e.exports = function(e) {
                e.controllers.bubble = e.DatasetController.extend({
                    dataElementType: i.Point,
                    update: function(e) {
                        var t = this,
                            a = t.getMeta();
                        r.each(a.data, function(a, n) {
                            t.updateElement(a, n, e)
                        })
                    },
                    updateElement: function(e, t, a) {
                        var n = this,
                            i = n.getMeta(),
                            r = e.custom || {},
                            s = n.getScaleForId(i.xAxisID),
                            o = n.getScaleForId(i.yAxisID),
                            d = n._resolveElementOptions(e, t),
                            l = n.getDataset().data[t],
                            u = n.index,
                            _ = a ? s.getPixelForDecimal(.5) : s.getPixelForValue("object" == typeof l ? l : NaN, t, u),
                            m = a ? o.getBasePixel() : o.getPixelForValue(l, t, u);
                        e._xScale = s, e._yScale = o, e._options = d, e._datasetIndex = u, e._index = t, e._model = {
                            backgroundColor: d.backgroundColor,
                            borderColor: d.borderColor,
                            borderWidth: d.borderWidth,
                            hitRadius: d.hitRadius,
                            pointStyle: d.pointStyle,
                            radius: a ? 0 : d.radius,
                            skip: r.skip || isNaN(_) || isNaN(m),
                            x: _,
                            y: m
                        }, e.pivot()
                    },
                    setHoverStyle: function(e) {
                        var t = e._model,
                            a = e._options;
                        t.backgroundColor = r.valueOrDefault(a.hoverBackgroundColor, r.getHoverColor(a.backgroundColor)), t.borderColor = r.valueOrDefault(a.hoverBorderColor, r.getHoverColor(a.borderColor)), t.borderWidth = r.valueOrDefault(a.hoverBorderWidth, a.borderWidth), t.radius = a.radius + a.hoverRadius
                    },
                    removeHoverStyle: function(e) {
                        var t = e._model,
                            a = e._options;
                        t.backgroundColor = a.backgroundColor, t.borderColor = a.borderColor, t.borderWidth = a.borderWidth, t.radius = a.radius
                    },
                    _resolveElementOptions: function(e, t) {
                        var a, n, i, s = this.chart,
                            o = s.data.datasets[this.index],
                            d = e.custom || {},
                            l = s.options.elements.point,
                            u = r.options.resolve,
                            _ = o.data[t],
                            m = {},
                            h = {
                                chart: s,
                                dataIndex: t,
                                dataset: o,
                                datasetIndex: this.index
                            },
                            c = ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle"];
                        for (a = 0, n = c.length; a < n; ++a) m[i = c[a]] = u([d[i], o[i], l[i]], h, t);
                        return m.radius = u([d.radius, _ ? _.r : void 0, o.radius, l.radius], h, t), m
                    }
                })
            }
        },
        bpih: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("it", {
                    months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
                    monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
                    weekdays: "domenica_luned\xec_marted\xec_mercoled\xec_gioved\xec_venerd\xec_sabato".split("_"),
                    weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
                    weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[Oggi alle] LT",
                        nextDay: "[Domani alle] LT",
                        nextWeek: "dddd [alle] LT",
                        lastDay: "[Ieri alle] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[la scorsa] dddd [alle] LT";
                                default:
                                    return "[lo scorso] dddd [alle] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: function(e) {
                            return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e
                        },
                        past: "%s fa",
                        s: "alcuni secondi",
                        ss: "%d secondi",
                        m: "un minuto",
                        mm: "%d minuti",
                        h: "un'ora",
                        hh: "%d ore",
                        d: "un giorno",
                        dd: "%d giorni",
                        M: "un mese",
                        MM: "%d mesi",
                        y: "un anno",
                        yy: "%d anni"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\xba/,
                    ordinal: "%d\xba",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(a("wd/R"))
        },
        cRix: function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),
                    a = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
                e.defineLocale("fy", {
                    months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
                    monthsShort: function(e, n) {
                        return e ? /-MMM-/.test(n) ? a[e.month()] : t[e.month()] : t
                    },
                    monthsParseExact: !0,
                    weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
                    weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
                    weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD-MM-YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[hjoed om] LT",
                        nextDay: "[moarn om] LT",
                        nextWeek: "dddd [om] LT",
                        lastDay: "[juster om] LT",
                        lastWeek: "[\xf4fr\xfbne] dddd [om] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "oer %s",
                        past: "%s lyn",
                        s: "in pear sekonden",
                        ss: "%d sekonden",
                        m: "ien min\xfat",
                        mm: "%d minuten",
                        h: "ien oere",
                        hh: "%d oeren",
                        d: "ien dei",
                        dd: "%d dagen",
                        M: "ien moanne",
                        MM: "%d moannen",
                        y: "ien jier",
                        yy: "%d jierren"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
                    ordinal: function(e) {
                        return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(a("wd/R"))
        },
        cdu6: function(e, t, a) {
            "use strict";
            var n = a("CDJp"),
                i = a("K2E3"),
                r = a("RDha"),
                s = a("g8vO");

            function o(e) {
                var t, a, n = [];
                for (t = 0, a = e.length; t < a; ++t) n.push(e[t].label);
                return n
            }

            function d(e, t, a) {
                var n = e.getPixelForTick(t);
                return a && (n -= 0 === t ? (e.getPixelForTick(1) - n) / 2 : (n - e.getPixelForTick(t - 1)) / 2), n
            }
            n._set("scale", {
                display: !0,
                position: "left",
                offset: !1,
                gridLines: {
                    display: !0,
                    color: "rgba(0, 0, 0, 0.1)",
                    lineWidth: 1,
                    drawBorder: !0,
                    drawOnChartArea: !0,
                    drawTicks: !0,
                    tickMarkLength: 10,
                    zeroLineWidth: 1,
                    zeroLineColor: "rgba(0,0,0,0.25)",
                    zeroLineBorderDash: [],
                    zeroLineBorderDashOffset: 0,
                    offsetGridLines: !1,
                    borderDash: [],
                    borderDashOffset: 0
                },
                scaleLabel: {
                    display: !1,
                    labelString: "",
                    lineHeight: 1.2,
                    padding: {
                        top: 4,
                        bottom: 4
                    }
                },
                ticks: {
                    beginAtZero: !1,
                    minRotation: 0,
                    maxRotation: 50,
                    mirror: !1,
                    padding: 0,
                    reverse: !1,
                    display: !0,
                    autoSkip: !0,
                    autoSkipPadding: 0,
                    labelOffset: 0,
                    callback: s.formatters.values,
                    minor: {},
                    major: {}
                }
            }), e.exports = function(e) {
                function t(e, t, a) {
                    return r.isArray(t) ? r.longestText(e, a, t) : e.measureText(t).width
                }

                function a(e) {
                    var t = r.valueOrDefault,
                        a = n.global,
                        i = t(e.fontSize, a.defaultFontSize),
                        s = t(e.fontStyle, a.defaultFontStyle),
                        o = t(e.fontFamily, a.defaultFontFamily);
                    return {
                        size: i,
                        style: s,
                        family: o,
                        font: r.fontString(i, s, o)
                    }
                }

                function s(e) {
                    return r.options.toLineHeight(r.valueOrDefault(e.lineHeight, 1.2), r.valueOrDefault(e.fontSize, n.global.defaultFontSize))
                }
                e.Scale = i.extend({
                    getPadding: function() {
                        return {
                            left: this.paddingLeft || 0,
                            top: this.paddingTop || 0,
                            right: this.paddingRight || 0,
                            bottom: this.paddingBottom || 0
                        }
                    },
                    getTicks: function() {
                        return this._ticks
                    },
                    mergeTicksOptions: function() {
                        var e = this.options.ticks;
                        for (var t in !1 === e.minor && (e.minor = {
                                display: !1
                            }), !1 === e.major && (e.major = {
                                display: !1
                            }), e) "major" !== t && "minor" !== t && (void 0 === e.minor[t] && (e.minor[t] = e[t]), void 0 === e.major[t] && (e.major[t] = e[t]))
                    },
                    beforeUpdate: function() {
                        r.callback(this.options.beforeUpdate, [this])
                    },
                    update: function(e, t, a) {
                        var n, i, s, o, d, l, u = this;
                        for (u.beforeUpdate(), u.maxWidth = e, u.maxHeight = t, u.margins = r.extend({
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0
                            }, a), u.longestTextCache = u.longestTextCache || {}, u.beforeSetDimensions(), u.setDimensions(), u.afterSetDimensions(), u.beforeDataLimits(), u.determineDataLimits(), u.afterDataLimits(), u.beforeBuildTicks(), d = u.buildTicks() || [], u.afterBuildTicks(), u.beforeTickToLabelConversion(), s = u.convertTicksToLabels(d) || u.ticks, u.afterTickToLabelConversion(), u.ticks = s, n = 0, i = s.length; n < i; ++n) o = s[n], (l = d[n]) ? l.label = o : d.push(l = {
                            label: o,
                            major: !1
                        });
                        return u._ticks = d, u.beforeCalculateTickRotation(), u.calculateTickRotation(), u.afterCalculateTickRotation(), u.beforeFit(), u.fit(), u.afterFit(), u.afterUpdate(), u.minSize
                    },
                    afterUpdate: function() {
                        r.callback(this.options.afterUpdate, [this])
                    },
                    beforeSetDimensions: function() {
                        r.callback(this.options.beforeSetDimensions, [this])
                    },
                    setDimensions: function() {
                        var e = this;
                        e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0
                    },
                    afterSetDimensions: function() {
                        r.callback(this.options.afterSetDimensions, [this])
                    },
                    beforeDataLimits: function() {
                        r.callback(this.options.beforeDataLimits, [this])
                    },
                    determineDataLimits: r.noop,
                    afterDataLimits: function() {
                        r.callback(this.options.afterDataLimits, [this])
                    },
                    beforeBuildTicks: function() {
                        r.callback(this.options.beforeBuildTicks, [this])
                    },
                    buildTicks: r.noop,
                    afterBuildTicks: function() {
                        r.callback(this.options.afterBuildTicks, [this])
                    },
                    beforeTickToLabelConversion: function() {
                        r.callback(this.options.beforeTickToLabelConversion, [this])
                    },
                    convertTicksToLabels: function() {
                        var e = this.options.ticks;
                        this.ticks = this.ticks.map(e.userCallback || e.callback, this)
                    },
                    afterTickToLabelConversion: function() {
                        r.callback(this.options.afterTickToLabelConversion, [this])
                    },
                    beforeCalculateTickRotation: function() {
                        r.callback(this.options.beforeCalculateTickRotation, [this])
                    },
                    calculateTickRotation: function() {
                        var e = this,
                            t = e.ctx,
                            n = e.options.ticks,
                            i = o(e._ticks),
                            s = a(n);
                        t.font = s.font;
                        var d = n.minRotation || 0;
                        if (i.length && e.options.display && e.isHorizontal())
                            for (var l, u = r.longestText(t, s.font, i, e.longestTextCache), _ = u, m = e.getPixelForTick(1) - e.getPixelForTick(0) - 6; _ > m && d < n.maxRotation;) {
                                var h = r.toRadians(d);
                                if (l = Math.cos(h), Math.sin(h) * u > e.maxHeight) {
                                    d--;
                                    break
                                }
                                d++, _ = l * u
                            }
                        e.labelRotation = d
                    },
                    afterCalculateTickRotation: function() {
                        r.callback(this.options.afterCalculateTickRotation, [this])
                    },
                    beforeFit: function() {
                        r.callback(this.options.beforeFit, [this])
                    },
                    fit: function() {
                        var e = this,
                            n = e.minSize = {
                                width: 0,
                                height: 0
                            },
                            i = o(e._ticks),
                            d = e.options,
                            l = d.ticks,
                            u = d.scaleLabel,
                            _ = d.gridLines,
                            m = d.display,
                            h = e.isHorizontal(),
                            c = a(l),
                            f = d.gridLines.tickMarkLength;
                        if (n.width = h ? e.isFullWidth() ? e.maxWidth - e.margins.left - e.margins.right : e.maxWidth : m && _.drawTicks ? f : 0, n.height = h ? m && _.drawTicks ? f : 0 : e.maxHeight, u.display && m) {
                            var p = s(u) + r.options.toPadding(u.padding).height;
                            h ? n.height += p : n.width += p
                        }
                        if (l.display && m) {
                            var M = r.longestText(e.ctx, c.font, i, e.longestTextCache),
                                y = r.numberOfLabelLines(i),
                                g = .5 * c.size,
                                L = e.options.ticks.padding;
                            if (h) {
                                e.longestLabelWidth = M;
                                var v = r.toRadians(e.labelRotation),
                                    Y = Math.cos(v),
                                    k = Math.sin(v);
                                n.height = Math.min(e.maxHeight, n.height + (k * M + c.size * y + g * (y - 1) + g) + L), e.ctx.font = c.font;
                                var b = t(e.ctx, i[0], c.font),
                                    D = t(e.ctx, i[i.length - 1], c.font);
                                0 !== e.labelRotation ? (e.paddingLeft = "bottom" === d.position ? Y * b + 3 : Y * g + 3, e.paddingRight = "bottom" === d.position ? Y * g + 3 : Y * D + 3) : (e.paddingLeft = b / 2 + 3, e.paddingRight = D / 2 + 3)
                            } else l.mirror ? M = 0 : M += L + g, n.width = Math.min(e.maxWidth, n.width + M), e.paddingTop = c.size / 2, e.paddingBottom = c.size / 2
                        }
                        e.handleMargins(), e.width = n.width, e.height = n.height
                    },
                    handleMargins: function() {
                        var e = this;
                        e.margins && (e.paddingLeft = Math.max(e.paddingLeft - e.margins.left, 0), e.paddingTop = Math.max(e.paddingTop - e.margins.top, 0), e.paddingRight = Math.max(e.paddingRight - e.margins.right, 0), e.paddingBottom = Math.max(e.paddingBottom - e.margins.bottom, 0))
                    },
                    afterFit: function() {
                        r.callback(this.options.afterFit, [this])
                    },
                    isHorizontal: function() {
                        return "top" === this.options.position || "bottom" === this.options.position
                    },
                    isFullWidth: function() {
                        return this.options.fullWidth
                    },
                    getRightValue: function(e) {
                        if (r.isNullOrUndef(e)) return NaN;
                        if ("number" == typeof e && !isFinite(e)) return NaN;
                        if (e)
                            if (this.isHorizontal()) {
                                if (void 0 !== e.x) return this.getRightValue(e.x)
                            } else if (void 0 !== e.y) return this.getRightValue(e.y);
                        return e
                    },
                    getLabelForIndex: r.noop,
                    getPixelForValue: r.noop,
                    getValueForPixel: r.noop,
                    getPixelForTick: function(e) {
                        var t = this,
                            a = t.options.offset;
                        if (t.isHorizontal()) {
                            var n = (t.width - (t.paddingLeft + t.paddingRight)) / Math.max(t._ticks.length - (a ? 0 : 1), 1),
                                i = n * e + t.paddingLeft;
                            return a && (i += n / 2), t.left + Math.round(i) + (t.isFullWidth() ? t.margins.left : 0)
                        }
                        return t.top + e * ((t.height - (t.paddingTop + t.paddingBottom)) / (t._ticks.length - 1))
                    },
                    getPixelForDecimal: function(e) {
                        var t = this;
                        return t.isHorizontal() ? t.left + Math.round((t.width - (t.paddingLeft + t.paddingRight)) * e + t.paddingLeft) + (t.isFullWidth() ? t.margins.left : 0) : t.top + e * t.height
                    },
                    getBasePixel: function() {
                        return this.getPixelForValue(this.getBaseValue())
                    },
                    getBaseValue: function() {
                        var e = this.min,
                            t = this.max;
                        return this.beginAtZero ? 0 : e < 0 && t < 0 ? t : e > 0 && t > 0 ? e : 0
                    },
                    _autoSkip: function(e) {
                        var t, a, n, i, s = this,
                            o = s.isHorizontal(),
                            d = s.options.ticks.minor,
                            l = e.length,
                            u = r.toRadians(s.labelRotation),
                            _ = Math.cos(u),
                            m = s.longestLabelWidth * _,
                            h = [];
                        for (d.maxTicksLimit && (i = d.maxTicksLimit), o && (t = !1, (m + d.autoSkipPadding) * l > s.width - (s.paddingLeft + s.paddingRight) && (t = 1 + Math.floor((m + d.autoSkipPadding) * l / (s.width - (s.paddingLeft + s.paddingRight)))), i && l > i && (t = Math.max(t, Math.floor(l / i)))), a = 0; a < l; a++) n = e[a], (t > 1 && a % t > 0 || a % t == 0 && a + t >= l) && a !== l - 1 && delete n.label, h.push(n);
                        return h
                    },
                    draw: function(e) {
                        var t = this,
                            i = t.options;
                        if (i.display) {
                            var o = t.ctx,
                                l = n.global,
                                u = i.ticks.minor,
                                _ = i.ticks.major || u,
                                m = i.gridLines,
                                h = i.scaleLabel,
                                c = 0 !== t.labelRotation,
                                f = t.isHorizontal(),
                                p = u.autoSkip ? t._autoSkip(t.getTicks()) : t.getTicks(),
                                M = r.valueOrDefault(u.fontColor, l.defaultFontColor),
                                y = a(u),
                                g = r.valueOrDefault(_.fontColor, l.defaultFontColor),
                                L = a(_),
                                v = m.drawTicks ? m.tickMarkLength : 0,
                                Y = r.valueOrDefault(h.fontColor, l.defaultFontColor),
                                k = a(h),
                                b = r.options.toPadding(h.padding),
                                D = r.toRadians(t.labelRotation),
                                w = [],
                                x = t.options.gridLines.lineWidth,
                                T = "right" === i.position ? t.right : t.right - x - v,
                                S = "right" === i.position ? t.right + v : t.right,
                                H = "bottom" === i.position ? t.top + x : t.bottom - v - x,
                                j = "bottom" === i.position ? t.top + x + v : t.bottom + x;
                            if (r.each(p, function(a, n) {
                                    if (!r.isNullOrUndef(a.label)) {
                                        var s, o, _, h, M, y, g, L, Y, k, b, P, C, O, A = a.label;
                                        n === t.zeroLineIndex && i.offset === m.offsetGridLines ? (s = m.zeroLineWidth, o = m.zeroLineColor, _ = m.zeroLineBorderDash, h = m.zeroLineBorderDashOffset) : (s = r.valueAtIndexOrDefault(m.lineWidth, n), o = r.valueAtIndexOrDefault(m.color, n), _ = r.valueOrDefault(m.borderDash, l.borderDash), h = r.valueOrDefault(m.borderDashOffset, l.borderDashOffset));
                                        var W = "middle",
                                            F = "middle",
                                            R = u.padding;
                                        if (f) {
                                            var E = v + R;
                                            "bottom" === i.position ? (F = c ? "middle" : "top", W = c ? "right" : "center", O = t.top + E) : (F = c ? "middle" : "bottom", W = c ? "left" : "center", O = t.bottom - E);
                                            var I = d(t, n, m.offsetGridLines && p.length > 1);
                                            I < t.left && (o = "rgba(0,0,0,0)"), I += r.aliasPixel(s), C = t.getPixelForTick(n) + u.labelOffset, M = g = Y = b = I, y = H, L = j, k = e.top, P = e.bottom + x
                                        } else {
                                            var z, N = "left" === i.position;
                                            u.mirror ? (W = N ? "left" : "right", z = R) : (W = N ? "right" : "left", z = v + R), C = N ? t.right - z : t.left + z;
                                            var B = d(t, n, m.offsetGridLines && p.length > 1);
                                            B < t.top && (o = "rgba(0,0,0,0)"), B += r.aliasPixel(s), O = t.getPixelForTick(n) + u.labelOffset, M = T, g = S, Y = e.left, b = e.right + x, y = L = k = P = B
                                        }
                                        w.push({
                                            tx1: M,
                                            ty1: y,
                                            tx2: g,
                                            ty2: L,
                                            x1: Y,
                                            y1: k,
                                            x2: b,
                                            y2: P,
                                            labelX: C,
                                            labelY: O,
                                            glWidth: s,
                                            glColor: o,
                                            glBorderDash: _,
                                            glBorderDashOffset: h,
                                            rotation: -1 * D,
                                            label: A,
                                            major: a.major,
                                            textBaseline: F,
                                            textAlign: W
                                        })
                                    }
                                }), r.each(w, function(e) {
                                    if (m.display && (o.save(), o.lineWidth = e.glWidth, o.strokeStyle = e.glColor, o.setLineDash && (o.setLineDash(e.glBorderDash), o.lineDashOffset = e.glBorderDashOffset), o.beginPath(), m.drawTicks && (o.moveTo(e.tx1, e.ty1), o.lineTo(e.tx2, e.ty2)), m.drawOnChartArea && (o.moveTo(e.x1, e.y1), o.lineTo(e.x2, e.y2)), o.stroke(), o.restore()), u.display) {
                                        o.save(), o.translate(e.labelX, e.labelY), o.rotate(e.rotation), o.font = e.major ? L.font : y.font, o.fillStyle = e.major ? g : M, o.textBaseline = e.textBaseline, o.textAlign = e.textAlign;
                                        var a = e.label;
                                        if (r.isArray(a))
                                            for (var n = a.length, i = 1.5 * y.size, s = t.isHorizontal() ? 0 : -i * (n - 1) / 2, d = 0; d < n; ++d) o.fillText("" + a[d], 0, s), s += i;
                                        else o.fillText(a, 0, 0);
                                        o.restore()
                                    }
                                }), h.display) {
                                var P, C, O = 0,
                                    A = s(h) / 2;
                                if (f) P = t.left + (t.right - t.left) / 2, C = "bottom" === i.position ? t.bottom - A - b.bottom : t.top + A + b.top;
                                else {
                                    var W = "left" === i.position;
                                    P = W ? t.left + A + b.top : t.right - A - b.top, C = t.top + (t.bottom - t.top) / 2, O = W ? -.5 * Math.PI : .5 * Math.PI
                                }
                                o.save(), o.translate(P, C), o.rotate(O), o.textAlign = "center", o.textBaseline = "middle", o.fillStyle = Y, o.font = k.font, o.fillText(h.labelString, 0, 0), o.restore()
                            }
                            if (m.drawBorder) {
                                o.lineWidth = r.valueAtIndexOrDefault(m.lineWidth, 0), o.strokeStyle = r.valueAtIndexOrDefault(m.color, 0);
                                var F = t.left,
                                    R = t.right + x,
                                    E = t.top,
                                    I = t.bottom + x,
                                    z = r.aliasPixel(o.lineWidth);
                                f ? (E = I = "top" === i.position ? t.bottom : t.top, E += z, I += z) : (F = R = "left" === i.position ? t.right : t.left, F += z, R += z), o.beginPath(), o.moveTo(F, E), o.lineTo(R, I), o.stroke()
                            }
                        }
                    }
                })
            }
        },
        czMo: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("en-il", {
                    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                    monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                    weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                    weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[Today at] LT",
                        nextDay: "[Tomorrow at] LT",
                        nextWeek: "dddd [at] LT",
                        lastDay: "[Yesterday at] LT",
                        lastWeek: "[Last] dddd [at] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "in %s",
                        past: "%s ago",
                        s: "a few seconds",
                        m: "a minute",
                        mm: "%d minutes",
                        h: "an hour",
                        hh: "%d hours",
                        d: "a day",
                        dd: "%d days",
                        M: "a month",
                        MM: "%d months",
                        y: "a year",
                        yy: "%d years"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                    ordinal: function(e) {
                        var t = e % 10;
                        return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                    }
                })
            }(a("wd/R"))
        },
        dNwA: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("sw", {
                    months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),
                    monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
                    weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),
                    weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
                    weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[leo saa] LT",
                        nextDay: "[kesho saa] LT",
                        nextWeek: "[wiki ijayo] dddd [saat] LT",
                        lastDay: "[jana] LT",
                        lastWeek: "[wiki iliyopita] dddd [saat] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s baadaye",
                        past: "tokea %s",
                        s: "hivi punde",
                        ss: "sekunde %d",
                        m: "dakika moja",
                        mm: "dakika %d",
                        h: "saa limoja",
                        hh: "masaa %d",
                        d: "siku moja",
                        dd: "masiku %d",
                        M: "mwezi mmoja",
                        MM: "miezi %d",
                        y: "mwaka mmoja",
                        yy: "miaka %d"
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(a("wd/R"))
        },
        "e+ae": function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = "janu\xe1r_febru\xe1r_marec_apr\xedl_m\xe1j_j\xfan_j\xfal_august_september_okt\xf3ber_november_december".split("_"),
                    a = "jan_feb_mar_apr_m\xe1j_j\xfan_j\xfal_aug_sep_okt_nov_dec".split("_");

                function n(e) {
                    return e > 1 && e < 5
                }

                function i(e, t, a, i) {
                    var r = e + " ";
                    switch (a) {
                        case "s":
                            return t || i ? "p\xe1r sek\xfand" : "p\xe1r sekundami";
                        case "ss":
                            return t || i ? r + (n(e) ? "sekundy" : "sek\xfand") : r + "sekundami";
                        case "m":
                            return t ? "min\xfata" : i ? "min\xfatu" : "min\xfatou";
                        case "mm":
                            return t || i ? r + (n(e) ? "min\xfaty" : "min\xfat") : r + "min\xfatami";
                        case "h":
                            return t ? "hodina" : i ? "hodinu" : "hodinou";
                        case "hh":
                            return t || i ? r + (n(e) ? "hodiny" : "hod\xedn") : r + "hodinami";
                        case "d":
                            return t || i ? "de\u0148" : "d\u0148om";
                        case "dd":
                            return t || i ? r + (n(e) ? "dni" : "dn\xed") : r + "d\u0148ami";
                        case "M":
                            return t || i ? "mesiac" : "mesiacom";
                        case "MM":
                            return t || i ? r + (n(e) ? "mesiace" : "mesiacov") : r + "mesiacmi";
                        case "y":
                            return t || i ? "rok" : "rokom";
                        case "yy":
                            return t || i ? r + (n(e) ? "roky" : "rokov") : r + "rokmi"
                    }
                }
                e.defineLocale("sk", {
                    months: t,
                    monthsShort: a,
                    weekdays: "nede\u013ea_pondelok_utorok_streda_\u0161tvrtok_piatok_sobota".split("_"),
                    weekdaysShort: "ne_po_ut_st_\u0161t_pi_so".split("_"),
                    weekdaysMin: "ne_po_ut_st_\u0161t_pi_so".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY H:mm",
                        LLLL: "dddd D. MMMM YYYY H:mm"
                    },
                    calendar: {
                        sameDay: "[dnes o] LT",
                        nextDay: "[zajtra o] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[v nede\u013eu o] LT";
                                case 1:
                                case 2:
                                    return "[v] dddd [o] LT";
                                case 3:
                                    return "[v stredu o] LT";
                                case 4:
                                    return "[vo \u0161tvrtok o] LT";
                                case 5:
                                    return "[v piatok o] LT";
                                case 6:
                                    return "[v sobotu o] LT"
                            }
                        },
                        lastDay: "[v\u010dera o] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[minul\xfa nede\u013eu o] LT";
                                case 1:
                                case 2:
                                    return "[minul\xfd] dddd [o] LT";
                                case 3:
                                    return "[minul\xfa stredu o] LT";
                                case 4:
                                case 5:
                                    return "[minul\xfd] dddd [o] LT";
                                case 6:
                                    return "[minul\xfa sobotu o] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "za %s",
                        past: "pred %s",
                        s: i,
                        ss: i,
                        m: i,
                        mm: i,
                        h: i,
                        hh: i,
                        d: i,
                        dd: i,
                        M: i,
                        MM: i,
                        y: i,
                        yy: i
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(a("wd/R"))
        },
        fELs: function(e, t, a) {
            "use strict";
            var n = a("RDha");

            function i(e, t) {
                return n.where(e, function(e) {
                    return e.position === t
                })
            }

            function r(e, t) {
                e.forEach(function(e, t) {
                    return e._tmpIndex_ = t, e
                }), e.sort(function(e, a) {
                    var n = t ? a : e,
                        i = t ? e : a;
                    return n.weight === i.weight ? n._tmpIndex_ - i._tmpIndex_ : n.weight - i.weight
                }), e.forEach(function(e) {
                    delete e._tmpIndex_
                })
            }
            e.exports = {
                defaults: {},
                addBox: function(e, t) {
                    e.boxes || (e.boxes = []), t.fullWidth = t.fullWidth || !1, t.position = t.position || "top", t.weight = t.weight || 0, e.boxes.push(t)
                },
                removeBox: function(e, t) {
                    var a = e.boxes ? e.boxes.indexOf(t) : -1; - 1 !== a && e.boxes.splice(a, 1)
                },
                configure: function(e, t, a) {
                    for (var n, i = ["fullWidth", "position", "weight"], r = i.length, s = 0; s < r; ++s) a.hasOwnProperty(n = i[s]) && (t[n] = a[n])
                },
                update: function(e, t, a) {
                    if (e) {
                        var s = n.options.toPadding((e.options.layout || {}).padding),
                            o = s.left,
                            d = s.right,
                            l = s.top,
                            u = s.bottom,
                            _ = i(e.boxes, "left"),
                            m = i(e.boxes, "right"),
                            h = i(e.boxes, "top"),
                            c = i(e.boxes, "bottom"),
                            f = i(e.boxes, "chartArea");
                        r(_, !0), r(m, !1), r(h, !0), r(c, !1);
                        var p = t - o - d,
                            M = a - l - u,
                            y = (t - p / 2) / (_.length + m.length),
                            g = (a - M / 2) / (h.length + c.length),
                            L = p,
                            v = M,
                            Y = [];
                        n.each(_.concat(m, h, c), function(e) {
                            var t, a = e.isHorizontal();
                            a ? (t = e.update(e.fullWidth ? p : L, g), v -= t.height) : (t = e.update(y, v), L -= t.width), Y.push({
                                horizontal: a,
                                minSize: t,
                                box: e
                            })
                        });
                        var k = 0,
                            b = 0,
                            D = 0,
                            w = 0;
                        n.each(h.concat(c), function(e) {
                            if (e.getPadding) {
                                var t = e.getPadding();
                                k = Math.max(k, t.left), b = Math.max(b, t.right)
                            }
                        }), n.each(_.concat(m), function(e) {
                            if (e.getPadding) {
                                var t = e.getPadding();
                                D = Math.max(D, t.top), w = Math.max(w, t.bottom)
                            }
                        });
                        var x = o,
                            T = d,
                            S = l,
                            H = u;
                        n.each(_.concat(m), F), n.each(_, function(e) {
                            x += e.width
                        }), n.each(m, function(e) {
                            T += e.width
                        }), n.each(h.concat(c), F), n.each(h, function(e) {
                            S += e.height
                        }), n.each(c, function(e) {
                            H += e.height
                        }), n.each(_.concat(m), function(e) {
                            var t = n.findNextWhere(Y, function(t) {
                                return t.box === e
                            });
                            t && e.update(t.minSize.width, v, {
                                left: 0,
                                right: 0,
                                top: S,
                                bottom: H
                            })
                        }), x = o, T = d, S = l, H = u, n.each(_, function(e) {
                            x += e.width
                        }), n.each(m, function(e) {
                            T += e.width
                        }), n.each(h, function(e) {
                            S += e.height
                        }), n.each(c, function(e) {
                            H += e.height
                        });
                        var j = Math.max(k - x, 0);
                        x += j, T += Math.max(b - T, 0);
                        var P = Math.max(D - S, 0);
                        S += P, H += Math.max(w - H, 0);
                        var C = a - S - H,
                            O = t - x - T;
                        O === L && C === v || (n.each(_, function(e) {
                            e.height = C
                        }), n.each(m, function(e) {
                            e.height = C
                        }), n.each(h, function(e) {
                            e.fullWidth || (e.width = O)
                        }), n.each(c, function(e) {
                            e.fullWidth || (e.width = O)
                        }), v = C, L = O);
                        var A = o + j,
                            W = l + P;
                        n.each(_.concat(h), R), A += L, W += v, n.each(m, R), n.each(c, R), e.chartArea = {
                            left: x,
                            top: S,
                            right: x + L,
                            bottom: S + v
                        }, n.each(f, function(t) {
                            t.left = e.chartArea.left, t.top = e.chartArea.top, t.right = e.chartArea.right, t.bottom = e.chartArea.bottom, t.update(L, v)
                        })
                    }

                    function F(e) {
                        var t = n.findNextWhere(Y, function(t) {
                            return t.box === e
                        });
                        if (t)
                            if (e.isHorizontal()) {
                                var a = {
                                    left: Math.max(x, k),
                                    right: Math.max(T, b),
                                    top: 0,
                                    bottom: 0
                                };
                                e.update(e.fullWidth ? p : L, M / 2, a)
                            } else e.update(t.minSize.width, v)
                    }

                    function R(e) {
                        e.isHorizontal() ? (e.left = e.fullWidth ? o : x, e.right = e.fullWidth ? t - d : x + L, e.top = W, e.bottom = W + e.height, W = e.bottom) : (e.left = A, e.right = A + e.width, e.top = S, e.bottom = S + v, A = e.right)
                    }
                }
            }
        },
        fzPg: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("yo", {
                    months: "S\u1eb9\u0301r\u1eb9\u0301_E\u0300re\u0300le\u0300_\u1eb8r\u1eb9\u0300na\u0300_I\u0300gbe\u0301_E\u0300bibi_O\u0300ku\u0300du_Ag\u1eb9mo_O\u0300gu\u0301n_Owewe_\u1ecc\u0300wa\u0300ra\u0300_Be\u0301lu\u0301_\u1ecc\u0300p\u1eb9\u0300\u0300".split("_"),
                    monthsShort: "S\u1eb9\u0301r_E\u0300rl_\u1eb8rn_I\u0300gb_E\u0300bi_O\u0300ku\u0300_Ag\u1eb9_O\u0300gu\u0301_Owe_\u1ecc\u0300wa\u0300_Be\u0301l_\u1ecc\u0300p\u1eb9\u0300\u0300".split("_"),
                    weekdays: "A\u0300i\u0300ku\u0301_Aje\u0301_I\u0300s\u1eb9\u0301gun_\u1eccj\u1ecd\u0301ru\u0301_\u1eccj\u1ecd\u0301b\u1ecd_\u1eb8ti\u0300_A\u0300ba\u0301m\u1eb9\u0301ta".split("_"),
                    weekdaysShort: "A\u0300i\u0300k_Aje\u0301_I\u0300s\u1eb9\u0301_\u1eccjr_\u1eccjb_\u1eb8ti\u0300_A\u0300ba\u0301".split("_"),
                    weekdaysMin: "A\u0300i\u0300_Aj_I\u0300s_\u1eccr_\u1eccb_\u1eb8t_A\u0300b".split("_"),
                    longDateFormat: {
                        LT: "h:mm A",
                        LTS: "h:mm:ss A",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY h:mm A",
                        LLLL: "dddd, D MMMM YYYY h:mm A"
                    },
                    calendar: {
                        sameDay: "[O\u0300ni\u0300 ni] LT",
                        nextDay: "[\u1ecc\u0300la ni] LT",
                        nextWeek: "dddd [\u1eccs\u1eb9\u0300 to\u0301n'b\u1ecd] [ni] LT",
                        lastDay: "[A\u0300na ni] LT",
                        lastWeek: "dddd [\u1eccs\u1eb9\u0300 to\u0301l\u1ecd\u0301] [ni] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "ni\u0301 %s",
                        past: "%s k\u1ecdja\u0301",
                        s: "i\u0300s\u1eb9ju\u0301 aaya\u0301 die",
                        ss: "aaya\u0301 %d",
                        m: "i\u0300s\u1eb9ju\u0301 kan",
                        mm: "i\u0300s\u1eb9ju\u0301 %d",
                        h: "wa\u0301kati kan",
                        hh: "wa\u0301kati %d",
                        d: "\u1ecdj\u1ecd\u0301 kan",
                        dd: "\u1ecdj\u1ecd\u0301 %d",
                        M: "osu\u0300 kan",
                        MM: "osu\u0300 %d",
                        y: "\u1ecddu\u0301n kan",
                        yy: "\u1ecddu\u0301n %d"
                    },
                    dayOfMonthOrdinalParse: /\u1ecdj\u1ecd\u0301\s\d{1,2}/,
                    ordinal: "\u1ecdj\u1ecd\u0301 %d",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(a("wd/R"))
        },
        g8vO: function(e, t, a) {
            "use strict";
            var n = a("RDha");
            e.exports = {
                formatters: {
                    values: function(e) {
                        return n.isArray(e) ? e : "" + e
                    },
                    linear: function(e, t, a) {
                        var i = a.length > 3 ? a[2] - a[1] : a[1] - a[0];
                        Math.abs(i) > 1 && e !== Math.floor(e) && (i = e - Math.floor(e));
                        var r = n.log10(Math.abs(i)),
                            s = "";
                        if (0 !== e) {
                            var o = -1 * Math.floor(r);
                            o = Math.max(Math.min(o, 20), 0), s = e.toFixed(o)
                        } else s = "0";
                        return s
                    },
                    logarithmic: function(e, t, a) {
                        var i = e / Math.pow(10, Math.floor(n.log10(e)));
                        return 0 === e ? "0" : 1 === i || 2 === i || 5 === i || 0 === t || t === a.length - 1 ? e.toExponential() : ""
                    }
                }
            }
        },
        gVVK: function(e, t, a) {
            ! function(e) {
                "use strict";

                function t(e, t, a, n) {
                    var i = e + " ";
                    switch (a) {
                        case "s":
                            return t || n ? "nekaj sekund" : "nekaj sekundami";
                        case "ss":
                            return i + (1 === e ? t ? "sekundo" : "sekundi" : 2 === e ? t || n ? "sekundi" : "sekundah" : e < 5 ? t || n ? "sekunde" : "sekundah" : "sekund");
                        case "m":
                            return t ? "ena minuta" : "eno minuto";
                        case "mm":
                            return i + (1 === e ? t ? "minuta" : "minuto" : 2 === e ? t || n ? "minuti" : "minutama" : e < 5 ? t || n ? "minute" : "minutami" : t || n ? "minut" : "minutami");
                        case "h":
                            return t ? "ena ura" : "eno uro";
                        case "hh":
                            return i + (1 === e ? t ? "ura" : "uro" : 2 === e ? t || n ? "uri" : "urama" : e < 5 ? t || n ? "ure" : "urami" : t || n ? "ur" : "urami");
                        case "d":
                            return t || n ? "en dan" : "enim dnem";
                        case "dd":
                            return i + (1 === e ? t || n ? "dan" : "dnem" : 2 === e ? t || n ? "dni" : "dnevoma" : t || n ? "dni" : "dnevi");
                        case "M":
                            return t || n ? "en mesec" : "enim mesecem";
                        case "MM":
                            return i + (1 === e ? t || n ? "mesec" : "mesecem" : 2 === e ? t || n ? "meseca" : "mesecema" : e < 5 ? t || n ? "mesece" : "meseci" : t || n ? "mesecev" : "meseci");
                        case "y":
                            return t || n ? "eno leto" : "enim letom";
                        case "yy":
                            return i + (1 === e ? t || n ? "leto" : "letom" : 2 === e ? t || n ? "leti" : "letoma" : e < 5 ? t || n ? "leta" : "leti" : t || n ? "let" : "leti")
                    }
                }
                e.defineLocale("sl", {
                    months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
                    monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "nedelja_ponedeljek_torek_sreda_\u010detrtek_petek_sobota".split("_"),
                    weekdaysShort: "ned._pon._tor._sre._\u010det._pet._sob.".split("_"),
                    weekdaysMin: "ne_po_to_sr_\u010de_pe_so".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY H:mm",
                        LLLL: "dddd, D. MMMM YYYY H:mm"
                    },
                    calendar: {
                        sameDay: "[danes ob] LT",
                        nextDay: "[jutri ob] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[v] [nedeljo] [ob] LT";
                                case 3:
                                    return "[v] [sredo] [ob] LT";
                                case 6:
                                    return "[v] [soboto] [ob] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[v] dddd [ob] LT"
                            }
                        },
                        lastDay: "[v\u010deraj ob] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[prej\u0161njo] [nedeljo] [ob] LT";
                                case 3:
                                    return "[prej\u0161njo] [sredo] [ob] LT";
                                case 6:
                                    return "[prej\u0161njo] [soboto] [ob] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[prej\u0161nji] dddd [ob] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "\u010dez %s",
                        past: "pred %s",
                        s: t,
                        ss: t,
                        m: t,
                        mm: t,
                        h: t,
                        hh: t,
                        d: t,
                        dd: t,
                        M: t,
                        MM: t,
                        y: t,
                        yy: t
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(a("wd/R"))
        },
        gekB: function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = "nolla yksi kaksi kolme nelj\xe4 viisi kuusi seitsem\xe4n kahdeksan yhdeks\xe4n".split(" "),
                    a = ["nolla", "yhden", "kahden", "kolmen", "nelj\xe4n", "viiden", "kuuden", t[7], t[8], t[9]];

                function n(e, n, i, r) {
                    var s = "";
                    switch (i) {
                        case "s":
                            return r ? "muutaman sekunnin" : "muutama sekunti";
                        case "ss":
                            return r ? "sekunnin" : "sekuntia";
                        case "m":
                            return r ? "minuutin" : "minuutti";
                        case "mm":
                            s = r ? "minuutin" : "minuuttia";
                            break;
                        case "h":
                            return r ? "tunnin" : "tunti";
                        case "hh":
                            s = r ? "tunnin" : "tuntia";
                            break;
                        case "d":
                            return r ? "p\xe4iv\xe4n" : "p\xe4iv\xe4";
                        case "dd":
                            s = r ? "p\xe4iv\xe4n" : "p\xe4iv\xe4\xe4";
                            break;
                        case "M":
                            return r ? "kuukauden" : "kuukausi";
                        case "MM":
                            s = r ? "kuukauden" : "kuukautta";
                            break;
                        case "y":
                            return r ? "vuoden" : "vuosi";
                        case "yy":
                            s = r ? "vuoden" : "vuotta"
                    }
                    return function(e, n) {
                        return e < 10 ? n ? a[e] : t[e] : e
                    }(e, r) + " " + s
                }
                e.defineLocale("fi", {
                    months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kes\xe4kuu_hein\xe4kuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
                    monthsShort: "tammi_helmi_maalis_huhti_touko_kes\xe4_hein\xe4_elo_syys_loka_marras_joulu".split("_"),
                    weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
                    weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
                    weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
                    longDateFormat: {
                        LT: "HH.mm",
                        LTS: "HH.mm.ss",
                        L: "DD.MM.YYYY",
                        LL: "Do MMMM[ta] YYYY",
                        LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
                        LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
                        l: "D.M.YYYY",
                        ll: "Do MMM YYYY",
                        lll: "Do MMM YYYY, [klo] HH.mm",
                        llll: "ddd, Do MMM YYYY, [klo] HH.mm"
                    },
                    calendar: {
                        sameDay: "[t\xe4n\xe4\xe4n] [klo] LT",
                        nextDay: "[huomenna] [klo] LT",
                        nextWeek: "dddd [klo] LT",
                        lastDay: "[eilen] [klo] LT",
                        lastWeek: "[viime] dddd[na] [klo] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s p\xe4\xe4st\xe4",
                        past: "%s sitten",
                        s: n,
                        ss: n,
                        m: n,
                        mm: n,
                        h: n,
                        hh: n,
                        d: n,
                        dd: n,
                        M: n,
                        MM: n,
                        y: n,
                        yy: n
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(a("wd/R"))
        },
        gjCT: function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = {
                        1: "\u0661",
                        2: "\u0662",
                        3: "\u0663",
                        4: "\u0664",
                        5: "\u0665",
                        6: "\u0666",
                        7: "\u0667",
                        8: "\u0668",
                        9: "\u0669",
                        0: "\u0660"
                    },
                    a = {
                        "\u0661": "1",
                        "\u0662": "2",
                        "\u0663": "3",
                        "\u0664": "4",
                        "\u0665": "5",
                        "\u0666": "6",
                        "\u0667": "7",
                        "\u0668": "8",
                        "\u0669": "9",
                        "\u0660": "0"
                    };
                e.defineLocale("ar-sa", {
                    months: "\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a\u0648_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648_\u0623\u063a\u0633\u0637\u0633_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"),
                    monthsShort: "\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a\u0648_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648_\u0623\u063a\u0633\u0637\u0633_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"),
                    weekdays: "\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"),
                    weekdaysShort: "\u0623\u062d\u062f_\u0625\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"),
                    weekdaysMin: "\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    meridiemParse: /\u0635|\u0645/,
                    isPM: function(e) {
                        return "\u0645" === e
                    },
                    meridiem: function(e, t, a) {
                        return e < 12 ? "\u0635" : "\u0645"
                    },
                    calendar: {
                        sameDay: "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                        nextDay: "[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                        nextWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                        lastDay: "[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                        lastWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "\u0641\u064a %s",
                        past: "\u0645\u0646\u0630 %s",
                        s: "\u062b\u0648\u0627\u0646",
                        ss: "%d \u062b\u0627\u0646\u064a\u0629",
                        m: "\u062f\u0642\u064a\u0642\u0629",
                        mm: "%d \u062f\u0642\u0627\u0626\u0642",
                        h: "\u0633\u0627\u0639\u0629",
                        hh: "%d \u0633\u0627\u0639\u0627\u062a",
                        d: "\u064a\u0648\u0645",
                        dd: "%d \u0623\u064a\u0627\u0645",
                        M: "\u0634\u0647\u0631",
                        MM: "%d \u0623\u0634\u0647\u0631",
                        y: "\u0633\u0646\u0629",
                        yy: "%d \u0633\u0646\u0648\u0627\u062a"
                    },
                    preparse: function(e) {
                        return e.replace(/[\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u0660]/g, function(e) {
                            return a[e]
                        }).replace(/\u060c/g, ",")
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, function(e) {
                            return t[e]
                        }).replace(/,/g, "\u060c")
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                })
            }(a("wd/R"))
        },
        hKrs: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("bg", {
                    months: "\u044f\u043d\u0443\u0430\u0440\u0438_\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0438\u043b_\u043c\u0430\u0439_\u044e\u043d\u0438_\u044e\u043b\u0438_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438_\u043e\u043a\u0442\u043e\u043c\u0432\u0440\u0438_\u043d\u043e\u0435\u043c\u0432\u0440\u0438_\u0434\u0435\u043a\u0435\u043c\u0432\u0440\u0438".split("_"),
                    monthsShort: "\u044f\u043d\u0440_\u0444\u0435\u0432_\u043c\u0430\u0440_\u0430\u043f\u0440_\u043c\u0430\u0439_\u044e\u043d\u0438_\u044e\u043b\u0438_\u0430\u0432\u0433_\u0441\u0435\u043f_\u043e\u043a\u0442_\u043d\u043e\u0435_\u0434\u0435\u043a".split("_"),
                    weekdays: "\u043d\u0435\u0434\u0435\u043b\u044f_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u044f\u0434\u0430_\u0447\u0435\u0442\u0432\u044a\u0440\u0442\u044a\u043a_\u043f\u0435\u0442\u044a\u043a_\u0441\u044a\u0431\u043e\u0442\u0430".split("_"),
                    weekdaysShort: "\u043d\u0435\u0434_\u043f\u043e\u043d_\u0432\u0442\u043e_\u0441\u0440\u044f_\u0447\u0435\u0442_\u043f\u0435\u0442_\u0441\u044a\u0431".split("_"),
                    weekdaysMin: "\u043d\u0434_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "D.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY H:mm",
                        LLLL: "dddd, D MMMM YYYY H:mm"
                    },
                    calendar: {
                        sameDay: "[\u0414\u043d\u0435\u0441 \u0432] LT",
                        nextDay: "[\u0423\u0442\u0440\u0435 \u0432] LT",
                        nextWeek: "dddd [\u0432] LT",
                        lastDay: "[\u0412\u0447\u0435\u0440\u0430 \u0432] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                case 3:
                                case 6:
                                    return "[\u0412 \u0438\u0437\u043c\u0438\u043d\u0430\u043b\u0430\u0442\u0430] dddd [\u0432] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[\u0412 \u0438\u0437\u043c\u0438\u043d\u0430\u043b\u0438\u044f] dddd [\u0432] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "\u0441\u043b\u0435\u0434 %s",
                        past: "\u043f\u0440\u0435\u0434\u0438 %s",
                        s: "\u043d\u044f\u043a\u043e\u043b\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434\u0438",
                        ss: "%d \u0441\u0435\u043a\u0443\u043d\u0434\u0438",
                        m: "\u043c\u0438\u043d\u0443\u0442\u0430",
                        mm: "%d \u043c\u0438\u043d\u0443\u0442\u0438",
                        h: "\u0447\u0430\u0441",
                        hh: "%d \u0447\u0430\u0441\u0430",
                        d: "\u0434\u0435\u043d",
                        dd: "%d \u0434\u043d\u0438",
                        M: "\u043c\u0435\u0441\u0435\u0446",
                        MM: "%d \u043c\u0435\u0441\u0435\u0446\u0430",
                        y: "\u0433\u043e\u0434\u0438\u043d\u0430",
                        yy: "%d \u0433\u043e\u0434\u0438\u043d\u0438"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}-(\u0435\u0432|\u0435\u043d|\u0442\u0438|\u0432\u0438|\u0440\u0438|\u043c\u0438)/,
                    ordinal: function(e) {
                        var t = e % 10,
                            a = e % 100;
                        return 0 === e ? e + "-\u0435\u0432" : 0 === a ? e + "-\u0435\u043d" : a > 10 && a < 20 ? e + "-\u0442\u0438" : 1 === t ? e + "-\u0432\u0438" : 2 === t ? e + "-\u0440\u0438" : 7 === t || 8 === t ? e + "-\u043c\u0438" : e + "-\u0442\u0438"
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(a("wd/R"))
        },
        hmAI: function(e, t, a) {
            "use strict";
            var n = a("mrSG").__decorate,
                i = a("CcnG"),
                r = a("lBHd"),
                s = function() {};
            s = n([i.NgModule({
                imports: [],
                exports: [r.EasyPieChartComponent],
                declarations: [r.EasyPieChartComponent]
            })], s), t.EasyPieChartModule = s
        },
        honF: function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = {
                        1: "\u1041",
                        2: "\u1042",
                        3: "\u1043",
                        4: "\u1044",
                        5: "\u1045",
                        6: "\u1046",
                        7: "\u1047",
                        8: "\u1048",
                        9: "\u1049",
                        0: "\u1040"
                    },
                    a = {
                        "\u1041": "1",
                        "\u1042": "2",
                        "\u1043": "3",
                        "\u1044": "4",
                        "\u1045": "5",
                        "\u1046": "6",
                        "\u1047": "7",
                        "\u1048": "8",
                        "\u1049": "9",
                        "\u1040": "0"
                    };
                e.defineLocale("my", {
                    months: "\u1007\u1014\u103a\u1014\u101d\u102b\u101b\u102e_\u1016\u1031\u1016\u1031\u102c\u103a\u101d\u102b\u101b\u102e_\u1019\u1010\u103a_\u1027\u1015\u103c\u102e_\u1019\u1031_\u1007\u103d\u1014\u103a_\u1007\u1030\u101c\u102d\u102f\u1004\u103a_\u101e\u103c\u1002\u102f\u1010\u103a_\u1005\u1000\u103a\u1010\u1004\u103a\u1018\u102c_\u1021\u1031\u102c\u1000\u103a\u1010\u102d\u102f\u1018\u102c_\u1014\u102d\u102f\u101d\u1004\u103a\u1018\u102c_\u1012\u102e\u1007\u1004\u103a\u1018\u102c".split("_"),
                    monthsShort: "\u1007\u1014\u103a_\u1016\u1031_\u1019\u1010\u103a_\u1015\u103c\u102e_\u1019\u1031_\u1007\u103d\u1014\u103a_\u101c\u102d\u102f\u1004\u103a_\u101e\u103c_\u1005\u1000\u103a_\u1021\u1031\u102c\u1000\u103a_\u1014\u102d\u102f_\u1012\u102e".split("_"),
                    weekdays: "\u1010\u1014\u1004\u103a\u1039\u1002\u1014\u103d\u1031_\u1010\u1014\u1004\u103a\u1039\u101c\u102c_\u1021\u1004\u103a\u1039\u1002\u102b_\u1017\u102f\u1012\u1039\u1013\u101f\u1030\u1038_\u1000\u103c\u102c\u101e\u1015\u1010\u1031\u1038_\u101e\u1031\u102c\u1000\u103c\u102c_\u1005\u1014\u1031".split("_"),
                    weekdaysShort: "\u1014\u103d\u1031_\u101c\u102c_\u1002\u102b_\u101f\u1030\u1038_\u1000\u103c\u102c_\u101e\u1031\u102c_\u1014\u1031".split("_"),
                    weekdaysMin: "\u1014\u103d\u1031_\u101c\u102c_\u1002\u102b_\u101f\u1030\u1038_\u1000\u103c\u102c_\u101e\u1031\u102c_\u1014\u1031".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[\u101a\u1014\u1031.] LT [\u1019\u103e\u102c]",
                        nextDay: "[\u1019\u1014\u1000\u103a\u1016\u103c\u1014\u103a] LT [\u1019\u103e\u102c]",
                        nextWeek: "dddd LT [\u1019\u103e\u102c]",
                        lastDay: "[\u1019\u1014\u1031.\u1000] LT [\u1019\u103e\u102c]",
                        lastWeek: "[\u1015\u103c\u102e\u1038\u1001\u1032\u1037\u101e\u1031\u102c] dddd LT [\u1019\u103e\u102c]",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "\u101c\u102c\u1019\u100a\u103a\u1037 %s \u1019\u103e\u102c",
                        past: "\u101c\u103d\u1014\u103a\u1001\u1032\u1037\u101e\u1031\u102c %s \u1000",
                        s: "\u1005\u1000\u1039\u1000\u1014\u103a.\u1021\u1014\u100a\u103a\u1038\u1004\u101a\u103a",
                        ss: "%d \u1005\u1000\u1039\u1000\u1014\u1037\u103a",
                        m: "\u1010\u1005\u103a\u1019\u102d\u1014\u1005\u103a",
                        mm: "%d \u1019\u102d\u1014\u1005\u103a",
                        h: "\u1010\u1005\u103a\u1014\u102c\u101b\u102e",
                        hh: "%d \u1014\u102c\u101b\u102e",
                        d: "\u1010\u1005\u103a\u101b\u1000\u103a",
                        dd: "%d \u101b\u1000\u103a",
                        M: "\u1010\u1005\u103a\u101c",
                        MM: "%d \u101c",
                        y: "\u1010\u1005\u103a\u1014\u103e\u1005\u103a",
                        yy: "%d \u1014\u103e\u1005\u103a"
                    },
                    preparse: function(e) {
                        return e.replace(/[\u1041\u1042\u1043\u1044\u1045\u1046\u1047\u1048\u1049\u1040]/g, function(e) {
                            return a[e]
                        })
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, function(e) {
                            return t[e]
                        })
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(a("wd/R"))
        },
        iEDd: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("gl", {
                    months: "xaneiro_febreiro_marzo_abril_maio_xu\xf1o_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),
                    monthsShort: "xan._feb._mar._abr._mai._xu\xf1._xul._ago._set._out._nov._dec.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "domingo_luns_martes_m\xe9rcores_xoves_venres_s\xe1bado".split("_"),
                    weekdaysShort: "dom._lun._mar._m\xe9r._xov._ven._s\xe1b.".split("_"),
                    weekdaysMin: "do_lu_ma_m\xe9_xo_ve_s\xe1".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D [de] MMMM [de] YYYY",
                        LLL: "D [de] MMMM [de] YYYY H:mm",
                        LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
                    },
                    calendar: {
                        sameDay: function() {
                            return "[hoxe " + (1 !== this.hours() ? "\xe1s" : "\xe1") + "] LT"
                        },
                        nextDay: function() {
                            return "[ma\xf1\xe1 " + (1 !== this.hours() ? "\xe1s" : "\xe1") + "] LT"
                        },
                        nextWeek: function() {
                            return "dddd [" + (1 !== this.hours() ? "\xe1s" : "a") + "] LT"
                        },
                        lastDay: function() {
                            return "[onte " + (1 !== this.hours() ? "\xe1" : "a") + "] LT"
                        },
                        lastWeek: function() {
                            return "[o] dddd [pasado " + (1 !== this.hours() ? "\xe1s" : "a") + "] LT"
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: function(e) {
                            return 0 === e.indexOf("un") ? "n" + e : "en " + e
                        },
                        past: "hai %s",
                        s: "uns segundos",
                        ss: "%d segundos",
                        m: "un minuto",
                        mm: "%d minutos",
                        h: "unha hora",
                        hh: "%d horas",
                        d: "un d\xeda",
                        dd: "%d d\xedas",
                        M: "un mes",
                        MM: "%d meses",
                        y: "un ano",
                        yy: "%d anos"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\xba/,
                    ordinal: "%d\xba",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(a("wd/R"))
        },
        iM7B: function(e, t, a) {
            "use strict";
            var n = a("RDha"),
                i = a("Hg4g"),
                r = a("q8Fl");
            e.exports = n.extend({
                initialize: function() {},
                acquireContext: function() {},
                releaseContext: function() {},
                addEventListener: function() {},
                removeEventListener: function() {}
            }, r._enabled ? r : i)
        },
        iYGd: function(e, t, a) {
            "use strict";
            e.exports = function(e) {
                e.Radar = function(t, a) {
                    return a.type = "radar", new e(t, a)
                }
            }
        },
        iYuL: function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
                    a = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
                    n = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
                    i = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
                e.defineLocale("es", {
                    months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
                    monthsShort: function(e, n) {
                        return e ? /-MMM-/.test(n) ? a[e.month()] : t[e.month()] : t
                    },
                    monthsRegex: i,
                    monthsShortRegex: i,
                    monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
                    monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
                    monthsParse: n,
                    longMonthsParse: n,
                    shortMonthsParse: n,
                    weekdays: "domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado".split("_"),
                    weekdaysShort: "dom._lun._mar._mi\xe9._jue._vie._s\xe1b.".split("_"),
                    weekdaysMin: "do_lu_ma_mi_ju_vi_s\xe1".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D [de] MMMM [de] YYYY",
                        LLL: "D [de] MMMM [de] YYYY H:mm",
                        LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
                    },
                    calendar: {
                        sameDay: function() {
                            return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        nextDay: function() {
                            return "[ma\xf1ana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        nextWeek: function() {
                            return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        lastDay: function() {
                            return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        lastWeek: function() {
                            return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "en %s",
                        past: "hace %s",
                        s: "unos segundos",
                        ss: "%d segundos",
                        m: "un minuto",
                        mm: "%d minutos",
                        h: "una hora",
                        hh: "%d horas",
                        d: "un d\xeda",
                        dd: "%d d\xedas",
                        M: "un mes",
                        MM: "%d meses",
                        y: "un a\xf1o",
                        yy: "%d a\xf1os"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\xba/,
                    ordinal: "%d\xba",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(a("wd/R"))
        },
        jUeY: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("el", {
                    monthsNominativeEl: "\u0399\u03b1\u03bd\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2_\u03a6\u03b5\u03b2\u03c1\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2_\u039c\u03ac\u03c1\u03c4\u03b9\u03bf\u03c2_\u0391\u03c0\u03c1\u03af\u03bb\u03b9\u03bf\u03c2_\u039c\u03ac\u03b9\u03bf\u03c2_\u0399\u03bf\u03cd\u03bd\u03b9\u03bf\u03c2_\u0399\u03bf\u03cd\u03bb\u03b9\u03bf\u03c2_\u0391\u03cd\u03b3\u03bf\u03c5\u03c3\u03c4\u03bf\u03c2_\u03a3\u03b5\u03c0\u03c4\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2_\u039f\u03ba\u03c4\u03ce\u03b2\u03c1\u03b9\u03bf\u03c2_\u039d\u03bf\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2_\u0394\u03b5\u03ba\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2".split("_"),
                    monthsGenitiveEl: "\u0399\u03b1\u03bd\u03bf\u03c5\u03b1\u03c1\u03af\u03bf\u03c5_\u03a6\u03b5\u03b2\u03c1\u03bf\u03c5\u03b1\u03c1\u03af\u03bf\u03c5_\u039c\u03b1\u03c1\u03c4\u03af\u03bf\u03c5_\u0391\u03c0\u03c1\u03b9\u03bb\u03af\u03bf\u03c5_\u039c\u03b1\u0390\u03bf\u03c5_\u0399\u03bf\u03c5\u03bd\u03af\u03bf\u03c5_\u0399\u03bf\u03c5\u03bb\u03af\u03bf\u03c5_\u0391\u03c5\u03b3\u03bf\u03cd\u03c3\u03c4\u03bf\u03c5_\u03a3\u03b5\u03c0\u03c4\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5_\u039f\u03ba\u03c4\u03c9\u03b2\u03c1\u03af\u03bf\u03c5_\u039d\u03bf\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5_\u0394\u03b5\u03ba\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5".split("_"),
                    months: function(e, t) {
                        return e ? "string" == typeof t && /D/.test(t.substring(0, t.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()] : this._monthsNominativeEl
                    },
                    monthsShort: "\u0399\u03b1\u03bd_\u03a6\u03b5\u03b2_\u039c\u03b1\u03c1_\u0391\u03c0\u03c1_\u039c\u03b1\u03ca_\u0399\u03bf\u03c5\u03bd_\u0399\u03bf\u03c5\u03bb_\u0391\u03c5\u03b3_\u03a3\u03b5\u03c0_\u039f\u03ba\u03c4_\u039d\u03bf\u03b5_\u0394\u03b5\u03ba".split("_"),
                    weekdays: "\u039a\u03c5\u03c1\u03b9\u03b1\u03ba\u03ae_\u0394\u03b5\u03c5\u03c4\u03ad\u03c1\u03b1_\u03a4\u03c1\u03af\u03c4\u03b7_\u03a4\u03b5\u03c4\u03ac\u03c1\u03c4\u03b7_\u03a0\u03ad\u03bc\u03c0\u03c4\u03b7_\u03a0\u03b1\u03c1\u03b1\u03c3\u03ba\u03b5\u03c5\u03ae_\u03a3\u03ac\u03b2\u03b2\u03b1\u03c4\u03bf".split("_"),
                    weekdaysShort: "\u039a\u03c5\u03c1_\u0394\u03b5\u03c5_\u03a4\u03c1\u03b9_\u03a4\u03b5\u03c4_\u03a0\u03b5\u03bc_\u03a0\u03b1\u03c1_\u03a3\u03b1\u03b2".split("_"),
                    weekdaysMin: "\u039a\u03c5_\u0394\u03b5_\u03a4\u03c1_\u03a4\u03b5_\u03a0\u03b5_\u03a0\u03b1_\u03a3\u03b1".split("_"),
                    meridiem: function(e, t, a) {
                        return e > 11 ? a ? "\u03bc\u03bc" : "\u039c\u039c" : a ? "\u03c0\u03bc" : "\u03a0\u039c"
                    },
                    isPM: function(e) {
                        return "\u03bc" === (e + "").toLowerCase()[0]
                    },
                    meridiemParse: /[\u03a0\u039c]\.?\u039c?\.?/i,
                    longDateFormat: {
                        LT: "h:mm A",
                        LTS: "h:mm:ss A",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY h:mm A",
                        LLLL: "dddd, D MMMM YYYY h:mm A"
                    },
                    calendarEl: {
                        sameDay: "[\u03a3\u03ae\u03bc\u03b5\u03c1\u03b1 {}] LT",
                        nextDay: "[\u0391\u03cd\u03c1\u03b9\u03bf {}] LT",
                        nextWeek: "dddd [{}] LT",
                        lastDay: "[\u03a7\u03b8\u03b5\u03c2 {}] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 6:
                                    return "[\u03c4\u03bf \u03c0\u03c1\u03bf\u03b7\u03b3\u03bf\u03cd\u03bc\u03b5\u03bd\u03bf] dddd [{}] LT";
                                default:
                                    return "[\u03c4\u03b7\u03bd \u03c0\u03c1\u03bf\u03b7\u03b3\u03bf\u03cd\u03bc\u03b5\u03bd\u03b7] dddd [{}] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    calendar: function(e, t) {
                        var a, n = this._calendarEl[e],
                            i = t && t.hours();
                        return ((a = n) instanceof Function || "[object Function]" === Object.prototype.toString.call(a)) && (n = n.apply(t)), n.replace("{}", i % 12 == 1 ? "\u03c3\u03c4\u03b7" : "\u03c3\u03c4\u03b9\u03c2")
                    },
                    relativeTime: {
                        future: "\u03c3\u03b5 %s",
                        past: "%s \u03c0\u03c1\u03b9\u03bd",
                        s: "\u03bb\u03af\u03b3\u03b1 \u03b4\u03b5\u03c5\u03c4\u03b5\u03c1\u03cc\u03bb\u03b5\u03c0\u03c4\u03b1",
                        ss: "%d \u03b4\u03b5\u03c5\u03c4\u03b5\u03c1\u03cc\u03bb\u03b5\u03c0\u03c4\u03b1",
                        m: "\u03ad\u03bd\u03b1 \u03bb\u03b5\u03c0\u03c4\u03cc",
                        mm: "%d \u03bb\u03b5\u03c0\u03c4\u03ac",
                        h: "\u03bc\u03af\u03b1 \u03ce\u03c1\u03b1",
                        hh: "%d \u03ce\u03c1\u03b5\u03c2",
                        d: "\u03bc\u03af\u03b1 \u03bc\u03ad\u03c1\u03b1",
                        dd: "%d \u03bc\u03ad\u03c1\u03b5\u03c2",
                        M: "\u03ad\u03bd\u03b1\u03c2 \u03bc\u03ae\u03bd\u03b1\u03c2",
                        MM: "%d \u03bc\u03ae\u03bd\u03b5\u03c2",
                        y: "\u03ad\u03bd\u03b1\u03c2 \u03c7\u03c1\u03cc\u03bd\u03bf\u03c2",
                        yy: "%d \u03c7\u03c1\u03cc\u03bd\u03b9\u03b1"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\u03b7/,
                    ordinal: "%d\u03b7",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(a("wd/R"))
        },
        jVdC: function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = "stycze\u0144_luty_marzec_kwiecie\u0144_maj_czerwiec_lipiec_sierpie\u0144_wrzesie\u0144_pa\u017adziernik_listopad_grudzie\u0144".split("_"),
                    a = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_wrze\u015bnia_pa\u017adziernika_listopada_grudnia".split("_");

                function n(e) {
                    return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1
                }

                function i(e, t, a) {
                    var i = e + " ";
                    switch (a) {
                        case "ss":
                            return i + (n(e) ? "sekundy" : "sekund");
                        case "m":
                            return t ? "minuta" : "minut\u0119";
                        case "mm":
                            return i + (n(e) ? "minuty" : "minut");
                        case "h":
                            return t ? "godzina" : "godzin\u0119";
                        case "hh":
                            return i + (n(e) ? "godziny" : "godzin");
                        case "MM":
                            return i + (n(e) ? "miesi\u0105ce" : "miesi\u0119cy");
                        case "yy":
                            return i + (n(e) ? "lata" : "lat")
                    }
                }
                e.defineLocale("pl", {
                    months: function(e, n) {
                        return e ? "" === n ? "(" + a[e.month()] + "|" + t[e.month()] + ")" : /D MMMM/.test(n) ? a[e.month()] : t[e.month()] : t
                    },
                    monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_pa\u017a_lis_gru".split("_"),
                    weekdays: "niedziela_poniedzia\u0142ek_wtorek_\u015broda_czwartek_pi\u0105tek_sobota".split("_"),
                    weekdaysShort: "ndz_pon_wt_\u015br_czw_pt_sob".split("_"),
                    weekdaysMin: "Nd_Pn_Wt_\u015ar_Cz_Pt_So".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[Dzi\u015b o] LT",
                        nextDay: "[Jutro o] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[W niedziel\u0119 o] LT";
                                case 2:
                                    return "[We wtorek o] LT";
                                case 3:
                                    return "[W \u015brod\u0119 o] LT";
                                case 6:
                                    return "[W sobot\u0119 o] LT";
                                default:
                                    return "[W] dddd [o] LT"
                            }
                        },
                        lastDay: "[Wczoraj o] LT",
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[W zesz\u0142\u0105 niedziel\u0119 o] LT";
                                case 3:
                                    return "[W zesz\u0142\u0105 \u015brod\u0119 o] LT";
                                case 6:
                                    return "[W zesz\u0142\u0105 sobot\u0119 o] LT";
                                default:
                                    return "[W zesz\u0142y] dddd [o] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "za %s",
                        past: "%s temu",
                        s: "kilka sekund",
                        ss: i,
                        m: i,
                        mm: i,
                        h: i,
                        hh: i,
                        d: "1 dzie\u0144",
                        dd: "%d dni",
                        M: "miesi\u0105c",
                        MM: i,
                        y: "rok",
                        yy: i
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(a("wd/R"))
        },
        jXIB: function(e, t, a) {
            "use strict";
            e.exports = {}, e.exports.filler = a("vpM6"), e.exports.legend = a("AX6q"), e.exports.title = a("mjYD")
        },
        jfSC: function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = {
                        1: "\u06f1",
                        2: "\u06f2",
                        3: "\u06f3",
                        4: "\u06f4",
                        5: "\u06f5",
                        6: "\u06f6",
                        7: "\u06f7",
                        8: "\u06f8",
                        9: "\u06f9",
                        0: "\u06f0"
                    },
                    a = {
                        "\u06f1": "1",
                        "\u06f2": "2",
                        "\u06f3": "3",
                        "\u06f4": "4",
                        "\u06f5": "5",
                        "\u06f6": "6",
                        "\u06f7": "7",
                        "\u06f8": "8",
                        "\u06f9": "9",
                        "\u06f0": "0"
                    };
                e.defineLocale("fa", {
                    months: "\u0698\u0627\u0646\u0648\u06cc\u0647_\u0641\u0648\u0631\u06cc\u0647_\u0645\u0627\u0631\u0633_\u0622\u0648\u0631\u06cc\u0644_\u0645\u0647_\u0698\u0648\u0626\u0646_\u0698\u0648\u0626\u06cc\u0647_\u0627\u0648\u062a_\u0633\u067e\u062a\u0627\u0645\u0628\u0631_\u0627\u06a9\u062a\u0628\u0631_\u0646\u0648\u0627\u0645\u0628\u0631_\u062f\u0633\u0627\u0645\u0628\u0631".split("_"),
                    monthsShort: "\u0698\u0627\u0646\u0648\u06cc\u0647_\u0641\u0648\u0631\u06cc\u0647_\u0645\u0627\u0631\u0633_\u0622\u0648\u0631\u06cc\u0644_\u0645\u0647_\u0698\u0648\u0626\u0646_\u0698\u0648\u0626\u06cc\u0647_\u0627\u0648\u062a_\u0633\u067e\u062a\u0627\u0645\u0628\u0631_\u0627\u06a9\u062a\u0628\u0631_\u0646\u0648\u0627\u0645\u0628\u0631_\u062f\u0633\u0627\u0645\u0628\u0631".split("_"),
                    weekdays: "\u06cc\u06a9\u200c\u0634\u0646\u0628\u0647_\u062f\u0648\u0634\u0646\u0628\u0647_\u0633\u0647\u200c\u0634\u0646\u0628\u0647_\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647_\u067e\u0646\u062c\u200c\u0634\u0646\u0628\u0647_\u062c\u0645\u0639\u0647_\u0634\u0646\u0628\u0647".split("_"),
                    weekdaysShort: "\u06cc\u06a9\u200c\u0634\u0646\u0628\u0647_\u062f\u0648\u0634\u0646\u0628\u0647_\u0633\u0647\u200c\u0634\u0646\u0628\u0647_\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647_\u067e\u0646\u062c\u200c\u0634\u0646\u0628\u0647_\u062c\u0645\u0639\u0647_\u0634\u0646\u0628\u0647".split("_"),
                    weekdaysMin: "\u06cc_\u062f_\u0633_\u0686_\u067e_\u062c_\u0634".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    meridiemParse: /\u0642\u0628\u0644 \u0627\u0632 \u0638\u0647\u0631|\u0628\u0639\u062f \u0627\u0632 \u0638\u0647\u0631/,
                    isPM: function(e) {
                        return /\u0628\u0639\u062f \u0627\u0632 \u0638\u0647\u0631/.test(e)
                    },
                    meridiem: function(e, t, a) {
                        return e < 12 ? "\u0642\u0628\u0644 \u0627\u0632 \u0638\u0647\u0631" : "\u0628\u0639\u062f \u0627\u0632 \u0638\u0647\u0631"
                    },
                    calendar: {
                        sameDay: "[\u0627\u0645\u0631\u0648\u0632 \u0633\u0627\u0639\u062a] LT",
                        nextDay: "[\u0641\u0631\u062f\u0627 \u0633\u0627\u0639\u062a] LT",
                        nextWeek: "dddd [\u0633\u0627\u0639\u062a] LT",
                        lastDay: "[\u062f\u06cc\u0631\u0648\u0632 \u0633\u0627\u0639\u062a] LT",
                        lastWeek: "dddd [\u067e\u06cc\u0634] [\u0633\u0627\u0639\u062a] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "\u062f\u0631 %s",
                        past: "%s \u067e\u06cc\u0634",
                        s: "\u0686\u0646\u062f \u062b\u0627\u0646\u06cc\u0647",
                        ss: "\u062b\u0627\u0646\u06cc\u0647 d%",
                        m: "\u06cc\u06a9 \u062f\u0642\u06cc\u0642\u0647",
                        mm: "%d \u062f\u0642\u06cc\u0642\u0647",
                        h: "\u06cc\u06a9 \u0633\u0627\u0639\u062a",
                        hh: "%d \u0633\u0627\u0639\u062a",
                        d: "\u06cc\u06a9 \u0631\u0648\u0632",
                        dd: "%d \u0631\u0648\u0632",
                        M: "\u06cc\u06a9 \u0645\u0627\u0647",
                        MM: "%d \u0645\u0627\u0647",
                        y: "\u06cc\u06a9 \u0633\u0627\u0644",
                        yy: "%d \u0633\u0627\u0644"
                    },
                    preparse: function(e) {
                        return e.replace(/[\u06f0-\u06f9]/g, function(e) {
                            return a[e]
                        }).replace(/\u060c/g, ",")
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, function(e) {
                            return t[e]
                        }).replace(/,/g, "\u060c")
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\u0645/,
                    ordinal: "%d\u0645",
                    week: {
                        dow: 6,
                        doy: 12
                    }
                })
            }(a("wd/R"))
        },
        jnO4: function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = {
                        1: "\u0661",
                        2: "\u0662",
                        3: "\u0663",
                        4: "\u0664",
                        5: "\u0665",
                        6: "\u0666",
                        7: "\u0667",
                        8: "\u0668",
                        9: "\u0669",
                        0: "\u0660"
                    },
                    a = {
                        "\u0661": "1",
                        "\u0662": "2",
                        "\u0663": "3",
                        "\u0664": "4",
                        "\u0665": "5",
                        "\u0666": "6",
                        "\u0667": "7",
                        "\u0668": "8",
                        "\u0669": "9",
                        "\u0660": "0"
                    },
                    n = function(e) {
                        return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
                    },
                    i = {
                        s: ["\u0623\u0642\u0644 \u0645\u0646 \u062b\u0627\u0646\u064a\u0629", "\u062b\u0627\u0646\u064a\u0629 \u0648\u0627\u062d\u062f\u0629", ["\u062b\u0627\u0646\u064a\u062a\u0627\u0646", "\u062b\u0627\u0646\u064a\u062a\u064a\u0646"], "%d \u062b\u0648\u0627\u0646", "%d \u062b\u0627\u0646\u064a\u0629", "%d \u062b\u0627\u0646\u064a\u0629"],
                        m: ["\u0623\u0642\u0644 \u0645\u0646 \u062f\u0642\u064a\u0642\u0629", "\u062f\u0642\u064a\u0642\u0629 \u0648\u0627\u062d\u062f\u0629", ["\u062f\u0642\u064a\u0642\u062a\u0627\u0646", "\u062f\u0642\u064a\u0642\u062a\u064a\u0646"], "%d \u062f\u0642\u0627\u0626\u0642", "%d \u062f\u0642\u064a\u0642\u0629", "%d \u062f\u0642\u064a\u0642\u0629"],
                        h: ["\u0623\u0642\u0644 \u0645\u0646 \u0633\u0627\u0639\u0629", "\u0633\u0627\u0639\u0629 \u0648\u0627\u062d\u062f\u0629", ["\u0633\u0627\u0639\u062a\u0627\u0646", "\u0633\u0627\u0639\u062a\u064a\u0646"], "%d \u0633\u0627\u0639\u0627\u062a", "%d \u0633\u0627\u0639\u0629", "%d \u0633\u0627\u0639\u0629"],
                        d: ["\u0623\u0642\u0644 \u0645\u0646 \u064a\u0648\u0645", "\u064a\u0648\u0645 \u0648\u0627\u062d\u062f", ["\u064a\u0648\u0645\u0627\u0646", "\u064a\u0648\u0645\u064a\u0646"], "%d \u0623\u064a\u0627\u0645", "%d \u064a\u0648\u0645\u064b\u0627", "%d \u064a\u0648\u0645"],
                        M: ["\u0623\u0642\u0644 \u0645\u0646 \u0634\u0647\u0631", "\u0634\u0647\u0631 \u0648\u0627\u062d\u062f", ["\u0634\u0647\u0631\u0627\u0646", "\u0634\u0647\u0631\u064a\u0646"], "%d \u0623\u0634\u0647\u0631", "%d \u0634\u0647\u0631\u0627", "%d \u0634\u0647\u0631"],
                        y: ["\u0623\u0642\u0644 \u0645\u0646 \u0639\u0627\u0645", "\u0639\u0627\u0645 \u0648\u0627\u062d\u062f", ["\u0639\u0627\u0645\u0627\u0646", "\u0639\u0627\u0645\u064a\u0646"], "%d \u0623\u0639\u0648\u0627\u0645", "%d \u0639\u0627\u0645\u064b\u0627", "%d \u0639\u0627\u0645"]
                    },
                    r = function(e) {
                        return function(t, a, r, s) {
                            var o = n(t),
                                d = i[e][n(t)];
                            return 2 === o && (d = d[a ? 0 : 1]), d.replace(/%d/i, t)
                        }
                    },
                    s = ["\u064a\u0646\u0627\u064a\u0631", "\u0641\u0628\u0631\u0627\u064a\u0631", "\u0645\u0627\u0631\u0633", "\u0623\u0628\u0631\u064a\u0644", "\u0645\u0627\u064a\u0648", "\u064a\u0648\u0646\u064a\u0648", "\u064a\u0648\u0644\u064a\u0648", "\u0623\u063a\u0633\u0637\u0633", "\u0633\u0628\u062a\u0645\u0628\u0631", "\u0623\u0643\u062a\u0648\u0628\u0631", "\u0646\u0648\u0641\u0645\u0628\u0631", "\u062f\u064a\u0633\u0645\u0628\u0631"];
                e.defineLocale("ar", {
                    months: s,
                    monthsShort: s,
                    weekdays: "\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"),
                    weekdaysShort: "\u0623\u062d\u062f_\u0625\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"),
                    weekdaysMin: "\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "D/\u200fM/\u200fYYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    meridiemParse: /\u0635|\u0645/,
                    isPM: function(e) {
                        return "\u0645" === e
                    },
                    meridiem: function(e, t, a) {
                        return e < 12 ? "\u0635" : "\u0645"
                    },
                    calendar: {
                        sameDay: "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                        nextDay: "[\u063a\u062f\u064b\u0627 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                        nextWeek: "dddd [\u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                        lastDay: "[\u0623\u0645\u0633 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                        lastWeek: "dddd [\u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "\u0628\u0639\u062f %s",
                        past: "\u0645\u0646\u0630 %s",
                        s: r("s"),
                        ss: r("s"),
                        m: r("m"),
                        mm: r("m"),
                        h: r("h"),
                        hh: r("h"),
                        d: r("d"),
                        dd: r("d"),
                        M: r("M"),
                        MM: r("M"),
                        y: r("y"),
                        yy: r("y")
                    },
                    preparse: function(e) {
                        return e.replace(/[\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u0660]/g, function(e) {
                            return a[e]
                        }).replace(/\u060c/g, ",")
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, function(e) {
                            return t[e]
                        }).replace(/,/g, "\u060c")
                    },
                    week: {
                        dow: 6,
                        doy: 12
                    }
                })
            }(a("wd/R"))
        },
        kEOa: function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = {
                        1: "\u09e7",
                        2: "\u09e8",
                        3: "\u09e9",
                        4: "\u09ea",
                        5: "\u09eb",
                        6: "\u09ec",
                        7: "\u09ed",
                        8: "\u09ee",
                        9: "\u09ef",
                        0: "\u09e6"
                    },
                    a = {
                        "\u09e7": "1",
                        "\u09e8": "2",
                        "\u09e9": "3",
                        "\u09ea": "4",
                        "\u09eb": "5",
                        "\u09ec": "6",
                        "\u09ed": "7",
                        "\u09ee": "8",
                        "\u09ef": "9",
                        "\u09e6": "0"
                    };
                e.defineLocale("bn", {
                    months: "\u099c\u09be\u09a8\u09c1\u09df\u09be\u09b0\u09c0_\u09ab\u09c7\u09ac\u09cd\u09b0\u09c1\u09df\u09be\u09b0\u09bf_\u09ae\u09be\u09b0\u09cd\u099a_\u098f\u09aa\u09cd\u09b0\u09bf\u09b2_\u09ae\u09c7_\u099c\u09c1\u09a8_\u099c\u09c1\u09b2\u09be\u0987_\u0986\u0997\u09b8\u09cd\u099f_\u09b8\u09c7\u09aa\u09cd\u099f\u09c7\u09ae\u09cd\u09ac\u09b0_\u0985\u0995\u09cd\u099f\u09cb\u09ac\u09b0_\u09a8\u09ad\u09c7\u09ae\u09cd\u09ac\u09b0_\u09a1\u09bf\u09b8\u09c7\u09ae\u09cd\u09ac\u09b0".split("_"),
                    monthsShort: "\u099c\u09be\u09a8\u09c1_\u09ab\u09c7\u09ac_\u09ae\u09be\u09b0\u09cd\u099a_\u098f\u09aa\u09cd\u09b0_\u09ae\u09c7_\u099c\u09c1\u09a8_\u099c\u09c1\u09b2_\u0986\u0997_\u09b8\u09c7\u09aa\u09cd\u099f_\u0985\u0995\u09cd\u099f\u09cb_\u09a8\u09ad\u09c7_\u09a1\u09bf\u09b8\u09c7".split("_"),
                    weekdays: "\u09b0\u09ac\u09bf\u09ac\u09be\u09b0_\u09b8\u09cb\u09ae\u09ac\u09be\u09b0_\u09ae\u0999\u09cd\u0997\u09b2\u09ac\u09be\u09b0_\u09ac\u09c1\u09a7\u09ac\u09be\u09b0_\u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf\u09ac\u09be\u09b0_\u09b6\u09c1\u0995\u09cd\u09b0\u09ac\u09be\u09b0_\u09b6\u09a8\u09bf\u09ac\u09be\u09b0".split("_"),
                    weekdaysShort: "\u09b0\u09ac\u09bf_\u09b8\u09cb\u09ae_\u09ae\u0999\u09cd\u0997\u09b2_\u09ac\u09c1\u09a7_\u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf_\u09b6\u09c1\u0995\u09cd\u09b0_\u09b6\u09a8\u09bf".split("_"),
                    weekdaysMin: "\u09b0\u09ac\u09bf_\u09b8\u09cb\u09ae_\u09ae\u0999\u09cd\u0997_\u09ac\u09c1\u09a7_\u09ac\u09c3\u09b9\u0983_\u09b6\u09c1\u0995\u09cd\u09b0_\u09b6\u09a8\u09bf".split("_"),
                    longDateFormat: {
                        LT: "A h:mm \u09b8\u09ae\u09df",
                        LTS: "A h:mm:ss \u09b8\u09ae\u09df",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, A h:mm \u09b8\u09ae\u09df",
                        LLLL: "dddd, D MMMM YYYY, A h:mm \u09b8\u09ae\u09df"
                    },
                    calendar: {
                        sameDay: "[\u0986\u099c] LT",
                        nextDay: "[\u0986\u0997\u09be\u09ae\u09c0\u0995\u09be\u09b2] LT",
                        nextWeek: "dddd, LT",
                        lastDay: "[\u0997\u09a4\u0995\u09be\u09b2] LT",
                        lastWeek: "[\u0997\u09a4] dddd, LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s \u09aa\u09b0\u09c7",
                        past: "%s \u0986\u0997\u09c7",
                        s: "\u0995\u09df\u09c7\u0995 \u09b8\u09c7\u0995\u09c7\u09a8\u09cd\u09a1",
                        ss: "%d \u09b8\u09c7\u0995\u09c7\u09a8\u09cd\u09a1",
                        m: "\u098f\u0995 \u09ae\u09bf\u09a8\u09bf\u099f",
                        mm: "%d \u09ae\u09bf\u09a8\u09bf\u099f",
                        h: "\u098f\u0995 \u0998\u09a8\u09cd\u099f\u09be",
                        hh: "%d \u0998\u09a8\u09cd\u099f\u09be",
                        d: "\u098f\u0995 \u09a6\u09bf\u09a8",
                        dd: "%d \u09a6\u09bf\u09a8",
                        M: "\u098f\u0995 \u09ae\u09be\u09b8",
                        MM: "%d \u09ae\u09be\u09b8",
                        y: "\u098f\u0995 \u09ac\u099b\u09b0",
                        yy: "%d \u09ac\u099b\u09b0"
                    },
                    preparse: function(e) {
                        return e.replace(/[\u09e7\u09e8\u09e9\u09ea\u09eb\u09ec\u09ed\u09ee\u09ef\u09e6]/g, function(e) {
                            return a[e]
                        })
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, function(e) {
                            return t[e]
                        })
                    },
                    meridiemParse: /\u09b0\u09be\u09a4|\u09b8\u0995\u09be\u09b2|\u09a6\u09c1\u09aa\u09c1\u09b0|\u09ac\u09bf\u0995\u09be\u09b2|\u09b0\u09be\u09a4/,
                    meridiemHour: function(e, t) {
                        return 12 === e && (e = 0), "\u09b0\u09be\u09a4" === t && e >= 4 || "\u09a6\u09c1\u09aa\u09c1\u09b0" === t && e < 5 || "\u09ac\u09bf\u0995\u09be\u09b2" === t ? e + 12 : e
                    },
                    meridiem: function(e, t, a) {
                        return e < 4 ? "\u09b0\u09be\u09a4" : e < 10 ? "\u09b8\u0995\u09be\u09b2" : e < 17 ? "\u09a6\u09c1\u09aa\u09c1\u09b0" : e < 20 ? "\u09ac\u09bf\u0995\u09be\u09b2" : "\u09b0\u09be\u09a4"
                    },
                    week: {
                        dow: 0,
                        doy: 6
                    }
                })
            }(a("wd/R"))
        },
        kOpN: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("zh-tw", {
                    months: "\u4e00\u6708_\u4e8c\u6708_\u4e09\u6708_\u56db\u6708_\u4e94\u6708_\u516d\u6708_\u4e03\u6708_\u516b\u6708_\u4e5d\u6708_\u5341\u6708_\u5341\u4e00\u6708_\u5341\u4e8c\u6708".split("_"),
                    monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
                    weekdays: "\u661f\u671f\u65e5_\u661f\u671f\u4e00_\u661f\u671f\u4e8c_\u661f\u671f\u4e09_\u661f\u671f\u56db_\u661f\u671f\u4e94_\u661f\u671f\u516d".split("_"),
                    weekdaysShort: "\u9031\u65e5_\u9031\u4e00_\u9031\u4e8c_\u9031\u4e09_\u9031\u56db_\u9031\u4e94_\u9031\u516d".split("_"),
                    weekdaysMin: "\u65e5_\u4e00_\u4e8c_\u4e09_\u56db_\u4e94_\u516d".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "YYYY/MM/DD",
                        LL: "YYYY\u5e74M\u6708D\u65e5",
                        LLL: "YYYY\u5e74M\u6708D\u65e5 HH:mm",
                        LLLL: "YYYY\u5e74M\u6708D\u65e5dddd HH:mm",
                        l: "YYYY/M/D",
                        ll: "YYYY\u5e74M\u6708D\u65e5",
                        lll: "YYYY\u5e74M\u6708D\u65e5 HH:mm",
                        llll: "YYYY\u5e74M\u6708D\u65e5dddd HH:mm"
                    },
                    meridiemParse: /\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/,
                    meridiemHour: function(e, t) {
                        return 12 === e && (e = 0), "\u51cc\u6668" === t || "\u65e9\u4e0a" === t || "\u4e0a\u5348" === t ? e : "\u4e2d\u5348" === t ? e >= 11 ? e : e + 12 : "\u4e0b\u5348" === t || "\u665a\u4e0a" === t ? e + 12 : void 0
                    },
                    meridiem: function(e, t, a) {
                        var n = 100 * e + t;
                        return n < 600 ? "\u51cc\u6668" : n < 900 ? "\u65e9\u4e0a" : n < 1130 ? "\u4e0a\u5348" : n < 1230 ? "\u4e2d\u5348" : n < 1800 ? "\u4e0b\u5348" : "\u665a\u4e0a"
                    },
                    calendar: {
                        sameDay: "[\u4eca\u5929] LT",
                        nextDay: "[\u660e\u5929] LT",
                        nextWeek: "[\u4e0b]dddd LT",
                        lastDay: "[\u6628\u5929] LT",
                        lastWeek: "[\u4e0a]dddd LT",
                        sameElse: "L"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(\u65e5|\u6708|\u9031)/,
                    ordinal: function(e, t) {
                        switch (t) {
                            case "d":
                            case "D":
                            case "DDD":
                                return e + "\u65e5";
                            case "M":
                                return e + "\u6708";
                            case "w":
                            case "W":
                                return e + "\u9031";
                            default:
                                return e
                        }
                    },
                    relativeTime: {
                        future: "%s\u5167",
                        past: "%s\u524d",
                        s: "\u5e7e\u79d2",
                        ss: "%d \u79d2",
                        m: "1 \u5206\u9418",
                        mm: "%d \u5206\u9418",
                        h: "1 \u5c0f\u6642",
                        hh: "%d \u5c0f\u6642",
                        d: "1 \u5929",
                        dd: "%d \u5929",
                        M: "1 \u500b\u6708",
                        MM: "%d \u500b\u6708",
                        y: "1 \u5e74",
                        yy: "%d \u5e74"
                    }
                })
            }(a("wd/R"))
        },
        l5ep: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("cy", {
                    months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
                    monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
                    weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
                    weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
                    weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[Heddiw am] LT",
                        nextDay: "[Yfory am] LT",
                        nextWeek: "dddd [am] LT",
                        lastDay: "[Ddoe am] LT",
                        lastWeek: "dddd [diwethaf am] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "mewn %s",
                        past: "%s yn \xf4l",
                        s: "ychydig eiliadau",
                        ss: "%d eiliad",
                        m: "munud",
                        mm: "%d munud",
                        h: "awr",
                        hh: "%d awr",
                        d: "diwrnod",
                        dd: "%d diwrnod",
                        M: "mis",
                        MM: "%d mis",
                        y: "blwyddyn",
                        yy: "%d flynedd"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
                    ordinal: function(e) {
                        var t = "";
                        return e > 20 ? t = 40 === e || 50 === e || 60 === e || 80 === e || 100 === e ? "fed" : "ain" : e > 0 && (t = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"][e]), e + t
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(a("wd/R"))
        },
        lBHd: function(e, t, a) {
            "use strict";
            var n = a("mrSG").__decorate,
                i = a("mrSG").__metadata,
                r = a("CcnG"),
                s = function() {
                    function e(e) {
                        this.element = e.nativeElement, this.options = Object.assign({
                            barColor: "#ef1e25",
                            trackColor: "#f9f9f9",
                            scaleColor: "#dfe0e0",
                            scaleLength: 5,
                            lineCap: "round",
                            lineWidth: 3,
                            size: 110,
                            rotate: 0,
                            animate: {
                                duration: 1e3,
                                enabled: !0
                            }
                        }, this.options)
                    }
                    return e.prototype.ngOnInit = function() {
                        this.element.innerHTML = "", this.pieChart = new EasyPieChart(this.element, this.options), this.pieChart.update(this.percent)
                    }, e.prototype.ngOnChanges = function(e) {
                        e.percent.isFirstChange() || this.pieChart.update(this.percent)
                    }, e
                }();
            n([r.Input(), i("design:type", Object)], s.prototype, "percent", void 0), n([r.Input(), i("design:type", Object)], s.prototype, "options", void 0), s = n([r.Component({
                selector: "easy-pie-chart",
                template: "<div>Loading...</div>"
            })], s), t.EasyPieChartComponent = s
        },
        lXzo: function(e, t, a) {
            ! function(e) {
                "use strict";

                function t(e, t, a) {
                    var n, i;
                    return "m" === a ? t ? "\u043c\u0438\u043d\u0443\u0442\u0430" : "\u043c\u0438\u043d\u0443\u0442\u0443" : e + " " + (n = +e, i = {
                        ss: t ? "\u0441\u0435\u043a\u0443\u043d\u0434\u0430_\u0441\u0435\u043a\u0443\u043d\u0434\u044b_\u0441\u0435\u043a\u0443\u043d\u0434" : "\u0441\u0435\u043a\u0443\u043d\u0434\u0443_\u0441\u0435\u043a\u0443\u043d\u0434\u044b_\u0441\u0435\u043a\u0443\u043d\u0434",
                        mm: t ? "\u043c\u0438\u043d\u0443\u0442\u0430_\u043c\u0438\u043d\u0443\u0442\u044b_\u043c\u0438\u043d\u0443\u0442" : "\u043c\u0438\u043d\u0443\u0442\u0443_\u043c\u0438\u043d\u0443\u0442\u044b_\u043c\u0438\u043d\u0443\u0442",
                        hh: "\u0447\u0430\u0441_\u0447\u0430\u0441\u0430_\u0447\u0430\u0441\u043e\u0432",
                        dd: "\u0434\u0435\u043d\u044c_\u0434\u043d\u044f_\u0434\u043d\u0435\u0439",
                        MM: "\u043c\u0435\u0441\u044f\u0446_\u043c\u0435\u0441\u044f\u0446\u0430_\u043c\u0435\u0441\u044f\u0446\u0435\u0432",
                        yy: "\u0433\u043e\u0434_\u0433\u043e\u0434\u0430_\u043b\u0435\u0442"
                    }[a].split("_"), n % 10 == 1 && n % 100 != 11 ? i[0] : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? i[1] : i[2])
                }
                var a = [/^\u044f\u043d\u0432/i, /^\u0444\u0435\u0432/i, /^\u043c\u0430\u0440/i, /^\u0430\u043f\u0440/i, /^\u043c\u0430[\u0439\u044f]/i, /^\u0438\u044e\u043d/i, /^\u0438\u044e\u043b/i, /^\u0430\u0432\u0433/i, /^\u0441\u0435\u043d/i, /^\u043e\u043a\u0442/i, /^\u043d\u043e\u044f/i, /^\u0434\u0435\u043a/i];
                e.defineLocale("ru", {
                    months: {
                        format: "\u044f\u043d\u0432\u0430\u0440\u044f_\u0444\u0435\u0432\u0440\u0430\u043b\u044f_\u043c\u0430\u0440\u0442\u0430_\u0430\u043f\u0440\u0435\u043b\u044f_\u043c\u0430\u044f_\u0438\u044e\u043d\u044f_\u0438\u044e\u043b\u044f_\u0430\u0432\u0433\u0443\u0441\u0442\u0430_\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f_\u043e\u043a\u0442\u044f\u0431\u0440\u044f_\u043d\u043e\u044f\u0431\u0440\u044f_\u0434\u0435\u043a\u0430\u0431\u0440\u044f".split("_"),
                        standalone: "\u044f\u043d\u0432\u0430\u0440\u044c_\u0444\u0435\u0432\u0440\u0430\u043b\u044c_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0435\u043b\u044c_\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c_\u043e\u043a\u0442\u044f\u0431\u0440\u044c_\u043d\u043e\u044f\u0431\u0440\u044c_\u0434\u0435\u043a\u0430\u0431\u0440\u044c".split("_")
                    },
                    monthsShort: {
                        format: "\u044f\u043d\u0432._\u0444\u0435\u0432\u0440._\u043c\u0430\u0440._\u0430\u043f\u0440._\u043c\u0430\u044f_\u0438\u044e\u043d\u044f_\u0438\u044e\u043b\u044f_\u0430\u0432\u0433._\u0441\u0435\u043d\u0442._\u043e\u043a\u0442._\u043d\u043e\u044f\u0431._\u0434\u0435\u043a.".split("_"),
                        standalone: "\u044f\u043d\u0432._\u0444\u0435\u0432\u0440._\u043c\u0430\u0440\u0442_\u0430\u043f\u0440._\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433._\u0441\u0435\u043d\u0442._\u043e\u043a\u0442._\u043d\u043e\u044f\u0431._\u0434\u0435\u043a.".split("_")
                    },
                    weekdays: {
                        standalone: "\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0435\u0440\u0433_\u043f\u044f\u0442\u043d\u0438\u0446\u0430_\u0441\u0443\u0431\u0431\u043e\u0442\u0430".split("_"),
                        format: "\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u0435\u0434\u0443_\u0447\u0435\u0442\u0432\u0435\u0440\u0433_\u043f\u044f\u0442\u043d\u0438\u0446\u0443_\u0441\u0443\u0431\u0431\u043e\u0442\u0443".split("_"),
                        isFormat: /\[ ?[\u0412\u0432] ?(?:\u043f\u0440\u043e\u0448\u043b\u0443\u044e|\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e|\u044d\u0442\u0443)? ?\] ?dddd/
                    },
                    weekdaysShort: "\u0432\u0441_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"),
                    weekdaysMin: "\u0432\u0441_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"),
                    monthsParse: a,
                    longMonthsParse: a,
                    shortMonthsParse: a,
                    monthsRegex: /^(\u044f\u043d\u0432\u0430\u0440[\u044c\u044f]|\u044f\u043d\u0432\.?|\u0444\u0435\u0432\u0440\u0430\u043b[\u044c\u044f]|\u0444\u0435\u0432\u0440?\.?|\u043c\u0430\u0440\u0442\u0430?|\u043c\u0430\u0440\.?|\u0430\u043f\u0440\u0435\u043b[\u044c\u044f]|\u0430\u043f\u0440\.?|\u043c\u0430[\u0439\u044f]|\u0438\u044e\u043d[\u044c\u044f]|\u0438\u044e\u043d\.?|\u0438\u044e\u043b[\u044c\u044f]|\u0438\u044e\u043b\.?|\u0430\u0432\u0433\u0443\u0441\u0442\u0430?|\u0430\u0432\u0433\.?|\u0441\u0435\u043d\u0442\u044f\u0431\u0440[\u044c\u044f]|\u0441\u0435\u043d\u0442?\.?|\u043e\u043a\u0442\u044f\u0431\u0440[\u044c\u044f]|\u043e\u043a\u0442\.?|\u043d\u043e\u044f\u0431\u0440[\u044c\u044f]|\u043d\u043e\u044f\u0431?\.?|\u0434\u0435\u043a\u0430\u0431\u0440[\u044c\u044f]|\u0434\u0435\u043a\.?)/i,
                    monthsShortRegex: /^(\u044f\u043d\u0432\u0430\u0440[\u044c\u044f]|\u044f\u043d\u0432\.?|\u0444\u0435\u0432\u0440\u0430\u043b[\u044c\u044f]|\u0444\u0435\u0432\u0440?\.?|\u043c\u0430\u0440\u0442\u0430?|\u043c\u0430\u0440\.?|\u0430\u043f\u0440\u0435\u043b[\u044c\u044f]|\u0430\u043f\u0440\.?|\u043c\u0430[\u0439\u044f]|\u0438\u044e\u043d[\u044c\u044f]|\u0438\u044e\u043d\.?|\u0438\u044e\u043b[\u044c\u044f]|\u0438\u044e\u043b\.?|\u0430\u0432\u0433\u0443\u0441\u0442\u0430?|\u0430\u0432\u0433\.?|\u0441\u0435\u043d\u0442\u044f\u0431\u0440[\u044c\u044f]|\u0441\u0435\u043d\u0442?\.?|\u043e\u043a\u0442\u044f\u0431\u0440[\u044c\u044f]|\u043e\u043a\u0442\.?|\u043d\u043e\u044f\u0431\u0440[\u044c\u044f]|\u043d\u043e\u044f\u0431?\.?|\u0434\u0435\u043a\u0430\u0431\u0440[\u044c\u044f]|\u0434\u0435\u043a\.?)/i,
                    monthsStrictRegex: /^(\u044f\u043d\u0432\u0430\u0440[\u044f\u044c]|\u0444\u0435\u0432\u0440\u0430\u043b[\u044f\u044c]|\u043c\u0430\u0440\u0442\u0430?|\u0430\u043f\u0440\u0435\u043b[\u044f\u044c]|\u043c\u0430[\u044f\u0439]|\u0438\u044e\u043d[\u044f\u044c]|\u0438\u044e\u043b[\u044f\u044c]|\u0430\u0432\u0433\u0443\u0441\u0442\u0430?|\u0441\u0435\u043d\u0442\u044f\u0431\u0440[\u044f\u044c]|\u043e\u043a\u0442\u044f\u0431\u0440[\u044f\u044c]|\u043d\u043e\u044f\u0431\u0440[\u044f\u044c]|\u0434\u0435\u043a\u0430\u0431\u0440[\u044f\u044c])/i,
                    monthsShortStrictRegex: /^(\u044f\u043d\u0432\.|\u0444\u0435\u0432\u0440?\.|\u043c\u0430\u0440[\u0442.]|\u0430\u043f\u0440\.|\u043c\u0430[\u044f\u0439]|\u0438\u044e\u043d[\u044c\u044f.]|\u0438\u044e\u043b[\u044c\u044f.]|\u0430\u0432\u0433\.|\u0441\u0435\u043d\u0442?\.|\u043e\u043a\u0442\.|\u043d\u043e\u044f\u0431?\.|\u0434\u0435\u043a\.)/i,
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY \u0433.",
                        LLL: "D MMMM YYYY \u0433., H:mm",
                        LLLL: "dddd, D MMMM YYYY \u0433., H:mm"
                    },
                    calendar: {
                        sameDay: "[\u0421\u0435\u0433\u043e\u0434\u043d\u044f, \u0432] LT",
                        nextDay: "[\u0417\u0430\u0432\u0442\u0440\u0430, \u0432] LT",
                        lastDay: "[\u0412\u0447\u0435\u0440\u0430, \u0432] LT",
                        nextWeek: function(e) {
                            if (e.week() === this.week()) return 2 === this.day() ? "[\u0412\u043e] dddd, [\u0432] LT" : "[\u0412] dddd, [\u0432] LT";
                            switch (this.day()) {
                                case 0:
                                    return "[\u0412 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435] dddd, [\u0432] LT";
                                case 1:
                                case 2:
                                case 4:
                                    return "[\u0412 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439] dddd, [\u0432] LT";
                                case 3:
                                case 5:
                                case 6:
                                    return "[\u0412 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e] dddd, [\u0432] LT"
                            }
                        },
                        lastWeek: function(e) {
                            if (e.week() === this.week()) return 2 === this.day() ? "[\u0412\u043e] dddd, [\u0432] LT" : "[\u0412] dddd, [\u0432] LT";
                            switch (this.day()) {
                                case 0:
                                    return "[\u0412 \u043f\u0440\u043e\u0448\u043b\u043e\u0435] dddd, [\u0432] LT";
                                case 1:
                                case 2:
                                case 4:
                                    return "[\u0412 \u043f\u0440\u043e\u0448\u043b\u044b\u0439] dddd, [\u0432] LT";
                                case 3:
                                case 5:
                                case 6:
                                    return "[\u0412 \u043f\u0440\u043e\u0448\u043b\u0443\u044e] dddd, [\u0432] LT"
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "\u0447\u0435\u0440\u0435\u0437 %s",
                        past: "%s \u043d\u0430\u0437\u0430\u0434",
                        s: "\u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434",
                        ss: t,
                        m: t,
                        mm: t,
                        h: "\u0447\u0430\u0441",
                        hh: t,
                        d: "\u0434\u0435\u043d\u044c",
                        dd: t,
                        M: "\u043c\u0435\u0441\u044f\u0446",
                        MM: t,
                        y: "\u0433\u043e\u0434",
                        yy: t
                    },
                    meridiemParse: /\u043d\u043e\u0447\u0438|\u0443\u0442\u0440\u0430|\u0434\u043d\u044f|\u0432\u0435\u0447\u0435\u0440\u0430/i,
                    isPM: function(e) {
                        return /^(\u0434\u043d\u044f|\u0432\u0435\u0447\u0435\u0440\u0430)$/.test(e)
                    },
                    meridiem: function(e, t, a) {
                        return e < 4 ? "\u043d\u043e\u0447\u0438" : e < 12 ? "\u0443\u0442\u0440\u0430" : e < 17 ? "\u0434\u043d\u044f" : "\u0432\u0435\u0447\u0435\u0440\u0430"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}-(\u0439|\u0433\u043e|\u044f)/,
                    ordinal: function(e, t) {
                        switch (t) {
                            case "M":
                            case "d":
                            case "DDD":
                                return e + "-\u0439";
                            case "D":
                                return e + "-\u0433\u043e";
                            case "w":
                            case "W":
                                return e + "-\u044f";
                            default:
                                return e
                        }
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(a("wd/R"))
        },
        lYtQ: function(e, t, a) {
            ! function(e) {
                "use strict";

                function t(e, t, a, n) {
                    switch (a) {
                        case "s":
                            return t ? "\u0445\u044d\u0434\u0445\u044d\u043d \u0441\u0435\u043a\u0443\u043d\u0434" : "\u0445\u044d\u0434\u0445\u044d\u043d \u0441\u0435\u043a\u0443\u043d\u0434\u044b\u043d";
                        case "ss":
                            return e + (t ? " \u0441\u0435\u043a\u0443\u043d\u0434" : " \u0441\u0435\u043a\u0443\u043d\u0434\u044b\u043d");
                        case "m":
                        case "mm":
                            return e + (t ? " \u043c\u0438\u043d\u0443\u0442" : " \u043c\u0438\u043d\u0443\u0442\u044b\u043d");
                        case "h":
                        case "hh":
                            return e + (t ? " \u0446\u0430\u0433" : " \u0446\u0430\u0433\u0438\u0439\u043d");
                        case "d":
                        case "dd":
                            return e + (t ? " \u04e9\u0434\u04e9\u0440" : " \u04e9\u0434\u0440\u0438\u0439\u043d");
                        case "M":
                        case "MM":
                            return e + (t ? " \u0441\u0430\u0440" : " \u0441\u0430\u0440\u044b\u043d");
                        case "y":
                        case "yy":
                            return e + (t ? " \u0436\u0438\u043b" : " \u0436\u0438\u043b\u0438\u0439\u043d");
                        default:
                            return e
                    }
                }
                e.defineLocale("mn", {
                    months: "\u041d\u044d\u0433\u0434\u04af\u0433\u044d\u044d\u0440 \u0441\u0430\u0440_\u0425\u043e\u0451\u0440\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0413\u0443\u0440\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0414\u04e9\u0440\u04e9\u0432\u0434\u04af\u0433\u044d\u044d\u0440 \u0441\u0430\u0440_\u0422\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0417\u0443\u0440\u0433\u0430\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0414\u043e\u043b\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u041d\u0430\u0439\u043c\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0415\u0441\u0434\u04af\u0433\u044d\u044d\u0440 \u0441\u0430\u0440_\u0410\u0440\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0410\u0440\u0432\u0430\u043d \u043d\u044d\u0433\u0434\u04af\u0433\u044d\u044d\u0440 \u0441\u0430\u0440_\u0410\u0440\u0432\u0430\u043d \u0445\u043e\u0451\u0440\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440".split("_"),
                    monthsShort: "1 \u0441\u0430\u0440_2 \u0441\u0430\u0440_3 \u0441\u0430\u0440_4 \u0441\u0430\u0440_5 \u0441\u0430\u0440_6 \u0441\u0430\u0440_7 \u0441\u0430\u0440_8 \u0441\u0430\u0440_9 \u0441\u0430\u0440_10 \u0441\u0430\u0440_11 \u0441\u0430\u0440_12 \u0441\u0430\u0440".split("_"),
                    monthsParseExact: !0,
                    weekdays: "\u041d\u044f\u043c_\u0414\u0430\u0432\u0430\u0430_\u041c\u044f\u0433\u043c\u0430\u0440_\u041b\u0445\u0430\u0433\u0432\u0430_\u041f\u04af\u0440\u044d\u0432_\u0411\u0430\u0430\u0441\u0430\u043d_\u0411\u044f\u043c\u0431\u0430".split("_"),
                    weekdaysShort: "\u041d\u044f\u043c_\u0414\u0430\u0432_\u041c\u044f\u0433_\u041b\u0445\u0430_\u041f\u04af\u0440_\u0411\u0430\u0430_\u0411\u044f\u043c".split("_"),
                    weekdaysMin: "\u041d\u044f_\u0414\u0430_\u041c\u044f_\u041b\u0445_\u041f\u04af_\u0411\u0430_\u0411\u044f".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "YYYY-MM-DD",
                        LL: "YYYY \u043e\u043d\u044b MMMM\u044b\u043d D",
                        LLL: "YYYY \u043e\u043d\u044b MMMM\u044b\u043d D HH:mm",
                        LLLL: "dddd, YYYY \u043e\u043d\u044b MMMM\u044b\u043d D HH:mm"
                    },
                    meridiemParse: /\u04ae\u04e8|\u04ae\u0425/i,
                    isPM: function(e) {
                        return "\u04ae\u0425" === e
                    },
                    meridiem: function(e, t, a) {
                        return e < 12 ? "\u04ae\u04e8" : "\u04ae\u0425"
                    },
                    calendar: {
                        sameDay: "[\u04e8\u043d\u04e9\u04e9\u0434\u04e9\u0440] LT",
                        nextDay: "[\u041c\u0430\u0440\u0433\u0430\u0430\u0448] LT",
                        nextWeek: "[\u0418\u0440\u044d\u0445] dddd LT",
                        lastDay: "[\u04e8\u0447\u0438\u0433\u0434\u04e9\u0440] LT",
                        lastWeek: "[\u04e8\u043d\u0433\u04e9\u0440\u0441\u04e9\u043d] dddd LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s \u0434\u0430\u0440\u0430\u0430",
                        past: "%s \u04e9\u043c\u043d\u04e9",
                        s: t,
                        ss: t,
                        m: t,
                        mm: t,
                        h: t,
                        hh: t,
                        d: t,
                        dd: t,
                        M: t,
                        MM: t,
                        y: t,
                        yy: t
                    },
                    dayOfMonthOrdinalParse: /\d{1,2} \u04e9\u0434\u04e9\u0440/,
                    ordinal: function(e, t) {
                        switch (t) {
                            case "d":
                            case "D":
                            case "DDD":
                                return e + " \u04e9\u0434\u04e9\u0440";
                            default:
                                return e
                        }
                    }
                })
            }(a("wd/R"))
        },
        lgnt: function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = {
                    0: "-\u0447\u04af",
                    1: "-\u0447\u0438",
                    2: "-\u0447\u0438",
                    3: "-\u0447\u04af",
                    4: "-\u0447\u04af",
                    5: "-\u0447\u0438",
                    6: "-\u0447\u044b",
                    7: "-\u0447\u0438",
                    8: "-\u0447\u0438",
                    9: "-\u0447\u0443",
                    10: "-\u0447\u0443",
                    20: "-\u0447\u044b",
                    30: "-\u0447\u0443",
                    40: "-\u0447\u044b",
                    50: "-\u0447\u04af",
                    60: "-\u0447\u044b",
                    70: "-\u0447\u0438",
                    80: "-\u0447\u0438",
                    90: "-\u0447\u0443",
                    100: "-\u0447\u04af"
                };
                e.defineLocale("ky", {
                    months: "\u044f\u043d\u0432\u0430\u0440\u044c_\u0444\u0435\u0432\u0440\u0430\u043b\u044c_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0435\u043b\u044c_\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c_\u043e\u043a\u0442\u044f\u0431\u0440\u044c_\u043d\u043e\u044f\u0431\u0440\u044c_\u0434\u0435\u043a\u0430\u0431\u0440\u044c".split("_"),
                    monthsShort: "\u044f\u043d\u0432_\u0444\u0435\u0432_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440_\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433_\u0441\u0435\u043d_\u043e\u043a\u0442_\u043d\u043e\u044f_\u0434\u0435\u043a".split("_"),
                    weekdays: "\u0416\u0435\u043a\u0448\u0435\u043c\u0431\u0438_\u0414\u04af\u0439\u0448\u04e9\u043c\u0431\u04af_\u0428\u0435\u0439\u0448\u0435\u043c\u0431\u0438_\u0428\u0430\u0440\u0448\u0435\u043c\u0431\u0438_\u0411\u0435\u0439\u0448\u0435\u043c\u0431\u0438_\u0416\u0443\u043c\u0430_\u0418\u0448\u0435\u043c\u0431\u0438".split("_"),
                    weekdaysShort: "\u0416\u0435\u043a_\u0414\u04af\u0439_\u0428\u0435\u0439_\u0428\u0430\u0440_\u0411\u0435\u0439_\u0416\u0443\u043c_\u0418\u0448\u0435".split("_"),
                    weekdaysMin: "\u0416\u043a_\u0414\u0439_\u0428\u0439_\u0428\u0440_\u0411\u0439_\u0416\u043c_\u0418\u0448".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[\u0411\u04af\u0433\u04af\u043d \u0441\u0430\u0430\u0442] LT",
                        nextDay: "[\u042d\u0440\u0442\u0435\u04a3 \u0441\u0430\u0430\u0442] LT",
                        nextWeek: "dddd [\u0441\u0430\u0430\u0442] LT",
                        lastDay: "[\u041a\u0435\u0447\u0435 \u0441\u0430\u0430\u0442] LT",
                        lastWeek: "[\u04e8\u0442\u043a\u0435\u043d \u0430\u043f\u0442\u0430\u043d\u044b\u043d] dddd [\u043a\u04af\u043d\u04af] [\u0441\u0430\u0430\u0442] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s \u0438\u0447\u0438\u043d\u0434\u0435",
                        past: "%s \u043c\u0443\u0440\u0443\u043d",
                        s: "\u0431\u0438\u0440\u043d\u0435\u0447\u0435 \u0441\u0435\u043a\u0443\u043d\u0434",
                        ss: "%d \u0441\u0435\u043a\u0443\u043d\u0434",
                        m: "\u0431\u0438\u0440 \u043c\u04af\u043d\u04e9\u0442",
                        mm: "%d \u043c\u04af\u043d\u04e9\u0442",
                        h: "\u0431\u0438\u0440 \u0441\u0430\u0430\u0442",
                        hh: "%d \u0441\u0430\u0430\u0442",
                        d: "\u0431\u0438\u0440 \u043a\u04af\u043d",
                        dd: "%d \u043a\u04af\u043d",
                        M: "\u0431\u0438\u0440 \u0430\u0439",
                        MM: "%d \u0430\u0439",
                        y: "\u0431\u0438\u0440 \u0436\u044b\u043b",
                        yy: "%d \u0436\u044b\u043b"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}-(\u0447\u0438|\u0447\u044b|\u0447\u04af|\u0447\u0443)/,
                    ordinal: function(e) {
                        return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null])
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(a("wd/R"))
        },
        lyxo: function(e, t, a) {
            ! function(e) {
                "use strict";

                function t(e, t, a) {
                    var n = " ";
                    return (e % 100 >= 20 || e >= 100 && e % 100 == 0) && (n = " de "), e + n + {
                        ss: "secunde",
                        mm: "minute",
                        hh: "ore",
                        dd: "zile",
                        MM: "luni",
                        yy: "ani"
                    }[a]
                }
                e.defineLocale("ro", {
                    months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
                    monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "duminic\u0103_luni_mar\u021bi_miercuri_joi_vineri_s\xe2mb\u0103t\u0103".split("_"),
                    weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_S\xe2m".split("_"),
                    weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_S\xe2".split("_"),
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY H:mm",
                        LLLL: "dddd, D MMMM YYYY H:mm"
                    },
                    calendar: {
                        sameDay: "[azi la] LT",
                        nextDay: "[m\xe2ine la] LT",
                        nextWeek: "dddd [la] LT",
                        lastDay: "[ieri la] LT",
                        lastWeek: "[fosta] dddd [la] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "peste %s",
                        past: "%s \xeen urm\u0103",
                        s: "c\xe2teva secunde",
                        ss: t,
                        m: "un minut",
                        mm: t,
                        h: "o or\u0103",
                        hh: t,
                        d: "o zi",
                        dd: t,
                        M: "o lun\u0103",
                        MM: t,
                        y: "un an",
                        yy: t
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(a("wd/R"))
        },
        mgIt: function(e, t, a) {
            var n = a("T016");

            function i(e) {
                if (e) {
                    var t = [0, 0, 0],
                        a = 1,
                        i = e.match(/^#([a-fA-F0-9]{3})$/i);
                    if (i) {
                        i = i[1];
                        for (var r = 0; r < t.length; r++) t[r] = parseInt(i[r] + i[r], 16)
                    } else if (i = e.match(/^#([a-fA-F0-9]{6})$/i))
                        for (i = i[1], r = 0; r < t.length; r++) t[r] = parseInt(i.slice(2 * r, 2 * r + 2), 16);
                    else if (i = e.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                        for (r = 0; r < t.length; r++) t[r] = parseInt(i[r + 1]);
                        a = parseFloat(i[4])
                    } else if (i = e.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                        for (r = 0; r < t.length; r++) t[r] = Math.round(2.55 * parseFloat(i[r + 1]));
                        a = parseFloat(i[4])
                    } else if (i = e.match(/(\w+)/)) {
                        if ("transparent" == i[1]) return [0, 0, 0, 0];
                        if (!(t = n[i[1]])) return
                    }
                    for (r = 0; r < t.length; r++) t[r] = u(t[r], 0, 255);
                    return a = a || 0 == a ? u(a, 0, 1) : 1, t[3] = a, t
                }
            }

            function r(e) {
                if (e) {
                    var t = e.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
                    if (t) {
                        var a = parseFloat(t[4]);
                        return [u(parseInt(t[1]), 0, 360), u(parseFloat(t[2]), 0, 100), u(parseFloat(t[3]), 0, 100), u(isNaN(a) ? 1 : a, 0, 1)]
                    }
                }
            }

            function s(e) {
                if (e) {
                    var t = e.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
                    if (t) {
                        var a = parseFloat(t[4]);
                        return [u(parseInt(t[1]), 0, 360), u(parseFloat(t[2]), 0, 100), u(parseFloat(t[3]), 0, 100), u(isNaN(a) ? 1 : a, 0, 1)]
                    }
                }
            }

            function o(e, t) {
                return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "rgba(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + t + ")"
            }

            function d(e, t) {
                return "rgba(" + Math.round(e[0] / 255 * 100) + "%, " + Math.round(e[1] / 255 * 100) + "%, " + Math.round(e[2] / 255 * 100) + "%, " + (t || e[3] || 1) + ")"
            }

            function l(e, t) {
                return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "hsla(" + e[0] + ", " + e[1] + "%, " + e[2] + "%, " + t + ")"
            }

            function u(e, t, a) {
                return Math.min(Math.max(t, e), a)
            }

            function _(e) {
                var t = e.toString(16).toUpperCase();
                return t.length < 2 ? "0" + t : t
            }
            e.exports = {
                getRgba: i,
                getHsla: r,
                getRgb: function(e) {
                    var t = i(e);
                    return t && t.slice(0, 3)
                },
                getHsl: function(e) {
                    var t = r(e);
                    return t && t.slice(0, 3)
                },
                getHwb: s,
                getAlpha: function(e) {
                    var t = i(e);
                    return t ? t[3] : (t = r(e)) ? t[3] : (t = s(e)) ? t[3] : void 0
                },
                hexString: function(e) {
                    return "#" + _(e[0]) + _(e[1]) + _(e[2])
                },
                rgbString: function(e, t) {
                    return t < 1 || e[3] && e[3] < 1 ? o(e, t) : "rgb(" + e[0] + ", " + e[1] + ", " + e[2] + ")"
                },
                rgbaString: o,
                percentString: function(e, t) {
                    return t < 1 || e[3] && e[3] < 1 ? d(e, t) : "rgb(" + Math.round(e[0] / 255 * 100) + "%, " + Math.round(e[1] / 255 * 100) + "%, " + Math.round(e[2] / 255 * 100) + "%)"
                },
                percentaString: d,
                hslString: function(e, t) {
                    return t < 1 || e[3] && e[3] < 1 ? l(e, t) : "hsl(" + e[0] + ", " + e[1] + "%, " + e[2] + "%)"
                },
                hslaString: l,
                hwbString: function(e, t) {
                    return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "hwb(" + e[0] + ", " + e[1] + "%, " + e[2] + "%" + (void 0 !== t && 1 !== t ? ", " + t : "") + ")"
                },
                keyword: function(e) {
                    return m[e.slice(0, 3)]
                }
            };
            var m = {};
            for (var h in n) m[n[h]] = h
        },
        mjYD: function(e, t, a) {
            "use strict";
            var n = a("CDJp"),
                i = a("K2E3"),
                r = a("RDha"),
                s = a("fELs"),
                o = r.noop;
            n._set("global", {
                title: {
                    display: !1,
                    fontStyle: "bold",
                    fullWidth: !0,
                    lineHeight: 1.2,
                    padding: 10,
                    position: "top",
                    text: "",
                    weight: 2e3
                }
            });
            var d = i.extend({
                initialize: function(e) {
                    r.extend(this, e), this.legendHitBoxes = []
                },
                beforeUpdate: o,
                update: function(e, t, a) {
                    var n = this;
                    return n.beforeUpdate(), n.maxWidth = e, n.maxHeight = t, n.margins = a, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize
                },
                afterUpdate: o,
                beforeSetDimensions: o,
                setDimensions: function() {
                    var e = this;
                    e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0, e.minSize = {
                        width: 0,
                        height: 0
                    }
                },
                afterSetDimensions: o,
                beforeBuildLabels: o,
                buildLabels: o,
                afterBuildLabels: o,
                beforeFit: o,
                fit: function() {
                    var e = this,
                        t = e.options,
                        a = t.display,
                        i = (0, r.valueOrDefault)(t.fontSize, n.global.defaultFontSize),
                        s = e.minSize,
                        o = r.isArray(t.text) ? t.text.length : 1,
                        d = r.options.toLineHeight(t.lineHeight, i),
                        l = a ? o * d + 2 * t.padding : 0;
                    e.isHorizontal() ? (s.width = e.maxWidth, s.height = l) : (s.width = l, s.height = e.maxHeight), e.width = s.width, e.height = s.height
                },
                afterFit: o,
                isHorizontal: function() {
                    var e = this.options.position;
                    return "top" === e || "bottom" === e
                },
                draw: function() {
                    var e = this,
                        t = e.ctx,
                        a = r.valueOrDefault,
                        i = e.options,
                        s = n.global;
                    if (i.display) {
                        var o, d, l, u = a(i.fontSize, s.defaultFontSize),
                            _ = a(i.fontStyle, s.defaultFontStyle),
                            m = a(i.fontFamily, s.defaultFontFamily),
                            h = r.fontString(u, _, m),
                            c = r.options.toLineHeight(i.lineHeight, u),
                            f = c / 2 + i.padding,
                            p = 0,
                            M = e.top,
                            y = e.left,
                            g = e.bottom,
                            L = e.right;
                        t.fillStyle = a(i.fontColor, s.defaultFontColor), t.font = h, e.isHorizontal() ? (d = y + (L - y) / 2, l = M + f, o = L - y) : (d = "left" === i.position ? y + f : L - f, l = M + (g - M) / 2, o = g - M, p = Math.PI * ("left" === i.position ? -.5 : .5)), t.save(), t.translate(d, l), t.rotate(p), t.textAlign = "center", t.textBaseline = "middle";
                        var v = i.text;
                        if (r.isArray(v))
                            for (var Y = 0, k = 0; k < v.length; ++k) t.fillText(v[k], 0, Y, o), Y += c;
                        else t.fillText(v, 0, 0, o);
                        t.restore()
                    }
                }
            });

            function l(e, t) {
                var a = new d({
                    ctx: e.ctx,
                    options: t,
                    chart: e
                });
                s.configure(e, a, t), s.addBox(e, a), e.titleBlock = a
            }
            e.exports = {
                id: "title",
                _element: d,
                beforeInit: function(e) {
                    var t = e.options.title;
                    t && l(e, t)
                },
                beforeUpdate: function(e) {
                    var t = e.options.title,
                        a = e.titleBlock;
                    t ? (r.mergeIf(t, n.global.title), a ? (s.configure(e, a, t), a.options = t) : l(e, t)) : a && (s.removeBox(e, a), delete e.titleBlock)
                }
            }
        },
        mlr9: function(e, t, a) {
            "use strict";
            var n = a("RDha");

            function i(e, t) {
                return e.native ? {
                    x: e.x,
                    y: e.y
                } : n.getRelativePosition(e, t)
            }

            function r(e, t) {
                var a, n, i, r, s;
                for (n = 0, r = e.data.datasets.length; n < r; ++n)
                    if (e.isDatasetVisible(n))
                        for (i = 0, s = (a = e.getDatasetMeta(n)).data.length; i < s; ++i) {
                            var o = a.data[i];
                            o._view.skip || t(o)
                        }
            }

            function s(e, t) {
                var a = [];
                return r(e, function(e) {
                    e.inRange(t.x, t.y) && a.push(e)
                }), a
            }

            function o(e, t, a, n) {
                var i = Number.POSITIVE_INFINITY,
                    s = [];
                return r(e, function(e) {
                    if (!a || e.inRange(t.x, t.y)) {
                        var r = e.getCenterPoint(),
                            o = n(t, r);
                        o < i ? (s = [e], i = o) : o === i && s.push(e)
                    }
                }), s
            }

            function d(e) {
                var t = -1 !== e.indexOf("x"),
                    a = -1 !== e.indexOf("y");
                return function(e, n) {
                    var i = t ? Math.abs(e.x - n.x) : 0,
                        r = a ? Math.abs(e.y - n.y) : 0;
                    return Math.sqrt(Math.pow(i, 2) + Math.pow(r, 2))
                }
            }

            function l(e, t, a) {
                var n = i(t, e);
                a.axis = a.axis || "x";
                var r = d(a.axis),
                    l = a.intersect ? s(e, n) : o(e, n, !1, r),
                    u = [];
                return l.length ? (e.data.datasets.forEach(function(t, a) {
                    if (e.isDatasetVisible(a)) {
                        var n = e.getDatasetMeta(a).data[l[0]._index];
                        n && !n._view.skip && u.push(n)
                    }
                }), u) : []
            }
            e.exports = {
                modes: {
                    single: function(e, t) {
                        var a = i(t, e),
                            n = [];
                        return r(e, function(e) {
                            if (e.inRange(a.x, a.y)) return n.push(e), n
                        }), n.slice(0, 1)
                    },
                    label: l,
                    index: l,
                    dataset: function(e, t, a) {
                        var n = i(t, e);
                        a.axis = a.axis || "xy";
                        var r = d(a.axis),
                            l = a.intersect ? s(e, n) : o(e, n, !1, r);
                        return l.length > 0 && (l = e.getDatasetMeta(l[0]._datasetIndex).data), l
                    },
                    "x-axis": function(e, t) {
                        return l(e, t, {
                            intersect: !1
                        })
                    },
                    point: function(e, t) {
                        return s(e, i(t, e))
                    },
                    nearest: function(e, t, a) {
                        var n = i(t, e);
                        a.axis = a.axis || "xy";
                        var r = d(a.axis),
                            s = o(e, n, a.intersect, r);
                        return s.length > 1 && s.sort(function(e, t) {
                            var a = e.getArea() - t.getArea();
                            return 0 === a && (a = e._datasetIndex - t._datasetIndex), a
                        }), s.slice(0, 1)
                    },
                    x: function(e, t, a) {
                        var n = i(t, e),
                            s = [],
                            o = !1;
                        return r(e, function(e) {
                            e.inXRange(n.x) && s.push(e), e.inRange(n.x, n.y) && (o = !0)
                        }), a.intersect && !o && (s = []), s
                    },
                    y: function(e, t, a) {
                        var n = i(t, e),
                            s = [],
                            o = !1;
                        return r(e, function(e) {
                            e.inYRange(n.y) && s.push(e), e.inRange(n.x, n.y) && (o = !0)
                        }), a.intersect && !o && (s = []), s
                    }
                }
            }
        },
        nDWh: function(e, t, a) {
            "use strict";
            var n = a("6ww4"),
                i = a("CDJp"),
                r = a("RDha");
            e.exports = function(e) {
                function t(e, t, a) {
                    var n;
                    return "string" == typeof e ? (n = parseInt(e, 10), -1 !== e.indexOf("%") && (n = n / 100 * t.parentNode[a])) : n = e, n
                }

                function a(e) {
                    return void 0 !== e && null !== e && "none" !== e
                }

                function s(e, n, i) {
                    var r = document.defaultView,
                        s = e.parentNode,
                        o = r.getComputedStyle(e)[n],
                        d = r.getComputedStyle(s)[n],
                        l = a(o),
                        u = a(d),
                        _ = Number.POSITIVE_INFINITY;
                    return l || u ? Math.min(l ? t(o, e, i) : _, u ? t(d, s, i) : _) : "none"
                }
                r.configMerge = function() {
                    return r.merge(r.clone(arguments[0]), [].slice.call(arguments, 1), {
                        merger: function(t, a, n, i) {
                            var s = a[t] || {},
                                o = n[t];
                            "scales" === t ? a[t] = r.scaleMerge(s, o) : "scale" === t ? a[t] = r.merge(s, [e.scaleService.getScaleDefaults(o.type), o]) : r._merger(t, a, n, i)
                        }
                    })
                }, r.scaleMerge = function() {
                    return r.merge(r.clone(arguments[0]), [].slice.call(arguments, 1), {
                        merger: function(t, a, n, i) {
                            if ("xAxes" === t || "yAxes" === t) {
                                var s, o, d, l = n[t].length;
                                for (a[t] || (a[t] = []), s = 0; s < l; ++s) o = r.valueOrDefault((d = n[t][s]).type, "xAxes" === t ? "category" : "linear"), s >= a[t].length && a[t].push({}), r.merge(a[t][s], !a[t][s].type || d.type && d.type !== a[t][s].type ? [e.scaleService.getScaleDefaults(o), d] : d)
                            } else r._merger(t, a, n, i)
                        }
                    })
                }, r.where = function(e, t) {
                    if (r.isArray(e) && Array.prototype.filter) return e.filter(t);
                    var a = [];
                    return r.each(e, function(e) {
                        t(e) && a.push(e)
                    }), a
                }, r.findIndex = Array.prototype.findIndex ? function(e, t, a) {
                    return e.findIndex(t, a)
                } : function(e, t, a) {
                    a = void 0 === a ? e : a;
                    for (var n = 0, i = e.length; n < i; ++n)
                        if (t.call(a, e[n], n, e)) return n;
                    return -1
                }, r.findNextWhere = function(e, t, a) {
                    r.isNullOrUndef(a) && (a = -1);
                    for (var n = a + 1; n < e.length; n++) {
                        var i = e[n];
                        if (t(i)) return i
                    }
                }, r.findPreviousWhere = function(e, t, a) {
                    r.isNullOrUndef(a) && (a = e.length);
                    for (var n = a - 1; n >= 0; n--) {
                        var i = e[n];
                        if (t(i)) return i
                    }
                }, r.isNumber = function(e) {
                    return !isNaN(parseFloat(e)) && isFinite(e)
                }, r.almostEquals = function(e, t, a) {
                    return Math.abs(e - t) < a
                }, r.almostWhole = function(e, t) {
                    var a = Math.round(e);
                    return a - t < e && a + t > e
                }, r.max = function(e) {
                    return e.reduce(function(e, t) {
                        return isNaN(t) ? e : Math.max(e, t)
                    }, Number.NEGATIVE_INFINITY)
                }, r.min = function(e) {
                    return e.reduce(function(e, t) {
                        return isNaN(t) ? e : Math.min(e, t)
                    }, Number.POSITIVE_INFINITY)
                }, r.sign = Math.sign ? function(e) {
                    return Math.sign(e)
                } : function(e) {
                    return 0 == (e = +e) || isNaN(e) ? e : e > 0 ? 1 : -1
                }, r.log10 = Math.log10 ? function(e) {
                    return Math.log10(e)
                } : function(e) {
                    var t = Math.log(e) * Math.LOG10E,
                        a = Math.round(t);
                    return e === Math.pow(10, a) ? a : t
                }, r.toRadians = function(e) {
                    return e * (Math.PI / 180)
                }, r.toDegrees = function(e) {
                    return e * (180 / Math.PI)
                }, r.getAngleFromPoint = function(e, t) {
                    var a = t.x - e.x,
                        n = t.y - e.y,
                        i = Math.sqrt(a * a + n * n),
                        r = Math.atan2(n, a);
                    return r < -.5 * Math.PI && (r += 2 * Math.PI), {
                        angle: r,
                        distance: i
                    }
                }, r.distanceBetweenPoints = function(e, t) {
                    return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
                }, r.aliasPixel = function(e) {
                    return e % 2 == 0 ? 0 : .5
                }, r.splineCurve = function(e, t, a, n) {
                    var i = e.skip ? t : e,
                        r = t,
                        s = a.skip ? t : a,
                        o = Math.sqrt(Math.pow(r.x - i.x, 2) + Math.pow(r.y - i.y, 2)),
                        d = Math.sqrt(Math.pow(s.x - r.x, 2) + Math.pow(s.y - r.y, 2)),
                        l = o / (o + d),
                        u = d / (o + d),
                        _ = n * (l = isNaN(l) ? 0 : l),
                        m = n * (u = isNaN(u) ? 0 : u);
                    return {
                        previous: {
                            x: r.x - _ * (s.x - i.x),
                            y: r.y - _ * (s.y - i.y)
                        },
                        next: {
                            x: r.x + m * (s.x - i.x),
                            y: r.y + m * (s.y - i.y)
                        }
                    }
                }, r.EPSILON = Number.EPSILON || 1e-14, r.splineCurveMonotone = function(e) {
                    var t, a, n, i, s, o, d, l, u, _ = (e || []).map(function(e) {
                            return {
                                model: e._model,
                                deltaK: 0,
                                mK: 0
                            }
                        }),
                        m = _.length;
                    for (t = 0; t < m; ++t)
                        if (!(n = _[t]).model.skip) {
                            if (a = t > 0 ? _[t - 1] : null, (i = t < m - 1 ? _[t + 1] : null) && !i.model.skip) {
                                var h = i.model.x - n.model.x;
                                n.deltaK = 0 !== h ? (i.model.y - n.model.y) / h : 0
                            }
                            n.mK = !a || a.model.skip ? n.deltaK : !i || i.model.skip ? a.deltaK : this.sign(a.deltaK) !== this.sign(n.deltaK) ? 0 : (a.deltaK + n.deltaK) / 2
                        }
                    for (t = 0; t < m - 1; ++t) i = _[t + 1], (n = _[t]).model.skip || i.model.skip || (r.almostEquals(n.deltaK, 0, this.EPSILON) ? n.mK = i.mK = 0 : (s = n.mK / n.deltaK, o = i.mK / n.deltaK, (l = Math.pow(s, 2) + Math.pow(o, 2)) <= 9 || (d = 3 / Math.sqrt(l), n.mK = s * d * n.deltaK, i.mK = o * d * n.deltaK)));
                    for (t = 0; t < m; ++t)(n = _[t]).model.skip || (a = t > 0 ? _[t - 1] : null, i = t < m - 1 ? _[t + 1] : null, a && !a.model.skip && (n.model.controlPointPreviousX = n.model.x - (u = (n.model.x - a.model.x) / 3), n.model.controlPointPreviousY = n.model.y - u * n.mK), i && !i.model.skip && (n.model.controlPointNextX = n.model.x + (u = (i.model.x - n.model.x) / 3), n.model.controlPointNextY = n.model.y + u * n.mK))
                }, r.nextItem = function(e, t, a) {
                    return a ? t >= e.length - 1 ? e[0] : e[t + 1] : t >= e.length - 1 ? e[e.length - 1] : e[t + 1]
                }, r.previousItem = function(e, t, a) {
                    return a ? t <= 0 ? e[e.length - 1] : e[t - 1] : t <= 0 ? e[0] : e[t - 1]
                }, r.niceNum = function(e, t) {
                    var a = Math.floor(r.log10(e)),
                        n = e / Math.pow(10, a);
                    return (t ? n < 1.5 ? 1 : n < 3 ? 2 : n < 7 ? 5 : 10 : n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * Math.pow(10, a)
                }, r.requestAnimFrame = "undefined" == typeof window ? function(e) {
                    e()
                } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
                    return window.setTimeout(e, 1e3 / 60)
                }, r.getRelativePosition = function(e, t) {
                    var a, n, i = e.originalEvent || e,
                        s = e.currentTarget || e.srcElement,
                        o = s.getBoundingClientRect(),
                        d = i.touches;
                    d && d.length > 0 ? (a = d[0].clientX, n = d[0].clientY) : (a = i.clientX, n = i.clientY);
                    var l = parseFloat(r.getStyle(s, "padding-left")),
                        u = parseFloat(r.getStyle(s, "padding-top")),
                        _ = parseFloat(r.getStyle(s, "padding-right")),
                        m = parseFloat(r.getStyle(s, "padding-bottom")),
                        h = o.bottom - o.top - u - m;
                    return {
                        x: a = Math.round((a - o.left - l) / (o.right - o.left - l - _) * s.width / t.currentDevicePixelRatio),
                        y: n = Math.round((n - o.top - u) / h * s.height / t.currentDevicePixelRatio)
                    }
                }, r.getConstraintWidth = function(e) {
                    return s(e, "max-width", "clientWidth")
                }, r.getConstraintHeight = function(e) {
                    return s(e, "max-height", "clientHeight")
                }, r.getMaximumWidth = function(e) {
                    var t = e.parentNode;
                    if (!t) return e.clientWidth;
                    var a = parseInt(r.getStyle(t, "padding-left"), 10),
                        n = parseInt(r.getStyle(t, "padding-right"), 10),
                        i = t.clientWidth - a - n,
                        s = r.getConstraintWidth(e);
                    return isNaN(s) ? i : Math.min(i, s)
                }, r.getMaximumHeight = function(e) {
                    var t = e.parentNode;
                    if (!t) return e.clientHeight;
                    var a = parseInt(r.getStyle(t, "padding-top"), 10),
                        n = parseInt(r.getStyle(t, "padding-bottom"), 10),
                        i = t.clientHeight - a - n,
                        s = r.getConstraintHeight(e);
                    return isNaN(s) ? i : Math.min(i, s)
                }, r.getStyle = function(e, t) {
                    return e.currentStyle ? e.currentStyle[t] : document.defaultView.getComputedStyle(e, null).getPropertyValue(t)
                }, r.retinaScale = function(e, t) {
                    var a = e.currentDevicePixelRatio = t || window.devicePixelRatio || 1;
                    if (1 !== a) {
                        var n = e.canvas,
                            i = e.height,
                            r = e.width;
                        n.height = i * a, n.width = r * a, e.ctx.scale(a, a), n.style.height || n.style.width || (n.style.height = i + "px", n.style.width = r + "px")
                    }
                }, r.fontString = function(e, t, a) {
                    return t + " " + e + "px " + a
                }, r.longestText = function(e, t, a, n) {
                    var i = (n = n || {}).data = n.data || {},
                        s = n.garbageCollect = n.garbageCollect || [];
                    n.font !== t && (i = n.data = {}, s = n.garbageCollect = [], n.font = t), e.font = t;
                    var o = 0;
                    r.each(a, function(t) {
                        void 0 !== t && null !== t && !0 !== r.isArray(t) ? o = r.measureText(e, i, s, o, t) : r.isArray(t) && r.each(t, function(t) {
                            void 0 === t || null === t || r.isArray(t) || (o = r.measureText(e, i, s, o, t))
                        })
                    });
                    var d = s.length / 2;
                    if (d > a.length) {
                        for (var l = 0; l < d; l++) delete i[s[l]];
                        s.splice(0, d)
                    }
                    return o
                }, r.measureText = function(e, t, a, n, i) {
                    var r = t[i];
                    return r || (r = t[i] = e.measureText(i).width, a.push(i)), r > n && (n = r), n
                }, r.numberOfLabelLines = function(e) {
                    var t = 1;
                    return r.each(e, function(e) {
                        r.isArray(e) && e.length > t && (t = e.length)
                    }), t
                }, r.color = n ? function(e) {
                    return e instanceof CanvasGradient && (e = i.global.defaultColor), n(e)
                } : function(e) {
                    return console.error("Color.js not found!"), e
                }, r.getHoverColor = function(e) {
                    return e instanceof CanvasPattern ? e : r.color(e).saturate(.5).darken(.1).rgbString()
                }
            }
        },
        nyYc: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("fr", {
                    months: "janvier_f\xe9vrier_mars_avril_mai_juin_juillet_ao\xfbt_septembre_octobre_novembre_d\xe9cembre".split("_"),
                    monthsShort: "janv._f\xe9vr._mars_avr._mai_juin_juil._ao\xfbt_sept._oct._nov._d\xe9c.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
                    weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
                    weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[Aujourd\u2019hui \xe0] LT",
                        nextDay: "[Demain \xe0] LT",
                        nextWeek: "dddd [\xe0] LT",
                        lastDay: "[Hier \xe0] LT",
                        lastWeek: "dddd [dernier \xe0] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "dans %s",
                        past: "il y a %s",
                        s: "quelques secondes",
                        ss: "%d secondes",
                        m: "une minute",
                        mm: "%d minutes",
                        h: "une heure",
                        hh: "%d heures",
                        d: "un jour",
                        dd: "%d jours",
                        M: "un mois",
                        MM: "%d mois",
                        y: "un an",
                        yy: "%d ans"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
                    ordinal: function(e, t) {
                        switch (t) {
                            case "D":
                                return e + (1 === e ? "er" : "");
                            default:
                            case "M":
                            case "Q":
                            case "DDD":
                            case "d":
                                return e + (1 === e ? "er" : "e");
                            case "w":
                            case "W":
                                return e + (1 === e ? "re" : "e")
                        }
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(a("wd/R"))
        },
        o1bE: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("ar-dz", {
                    months: "\u062c\u0627\u0646\u0641\u064a_\u0641\u064a\u0641\u0631\u064a_\u0645\u0627\u0631\u0633_\u0623\u0641\u0631\u064a\u0644_\u0645\u0627\u064a_\u062c\u0648\u0627\u0646_\u062c\u0648\u064a\u0644\u064a\u0629_\u0623\u0648\u062a_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"),
                    monthsShort: "\u062c\u0627\u0646\u0641\u064a_\u0641\u064a\u0641\u0631\u064a_\u0645\u0627\u0631\u0633_\u0623\u0641\u0631\u064a\u0644_\u0645\u0627\u064a_\u062c\u0648\u0627\u0646_\u062c\u0648\u064a\u0644\u064a\u0629_\u0623\u0648\u062a_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"),
                    weekdays: "\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"),
                    weekdaysShort: "\u0627\u062d\u062f_\u0627\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"),
                    weekdaysMin: "\u0623\u062d_\u0625\u062b_\u062b\u0644\u0627_\u0623\u0631_\u062e\u0645_\u062c\u0645_\u0633\u0628".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                        nextDay: "[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                        nextWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                        lastDay: "[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                        lastWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "\u0641\u064a %s",
                        past: "\u0645\u0646\u0630 %s",
                        s: "\u062b\u0648\u0627\u0646",
                        ss: "%d \u062b\u0627\u0646\u064a\u0629",
                        m: "\u062f\u0642\u064a\u0642\u0629",
                        mm: "%d \u062f\u0642\u0627\u0626\u0642",
                        h: "\u0633\u0627\u0639\u0629",
                        hh: "%d \u0633\u0627\u0639\u0627\u062a",
                        d: "\u064a\u0648\u0645",
                        dd: "%d \u0623\u064a\u0627\u0645",
                        M: "\u0634\u0647\u0631",
                        MM: "%d \u0623\u0634\u0647\u0631",
                        y: "\u0633\u0646\u0629",
                        yy: "%d \u0633\u0646\u0648\u0627\u062a"
                    },
                    week: {
                        dow: 0,
                        doy: 4
                    }
                })
            }(a("wd/R"))
        },
        "p/rL": function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("bm", {
                    months: "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_M\u025bkalo_Zuw\u025bnkalo_Zuluyekalo_Utikalo_S\u025btanburukalo_\u0254kut\u0254burukalo_Nowanburukalo_Desanburukalo".split("_"),
                    monthsShort: "Zan_Few_Mar_Awi_M\u025b_Zuw_Zul_Uti_S\u025bt_\u0254ku_Now_Des".split("_"),
                    weekdays: "Kari_Nt\u025bn\u025bn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"),
                    weekdaysShort: "Kar_Nt\u025b_Tar_Ara_Ala_Jum_Sib".split("_"),
                    weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "MMMM [tile] D [san] YYYY",
                        LLL: "MMMM [tile] D [san] YYYY [l\u025br\u025b] HH:mm",
                        LLLL: "dddd MMMM [tile] D [san] YYYY [l\u025br\u025b] HH:mm"
                    },
                    calendar: {
                        sameDay: "[Bi l\u025br\u025b] LT",
                        nextDay: "[Sini l\u025br\u025b] LT",
                        nextWeek: "dddd [don l\u025br\u025b] LT",
                        lastDay: "[Kunu l\u025br\u025b] LT",
                        lastWeek: "dddd [t\u025bm\u025bnen l\u025br\u025b] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "%s k\u0254n\u0254",
                        past: "a b\u025b %s b\u0254",
                        s: "sanga dama dama",
                        ss: "sekondi %d",
                        m: "miniti kelen",
                        mm: "miniti %d",
                        h: "l\u025br\u025b kelen",
                        hh: "l\u025br\u025b %d",
                        d: "tile kelen",
                        dd: "tile %d",
                        M: "kalo kelen",
                        MM: "kalo %d",
                        y: "san kelen",
                        yy: "san %d"
                    },
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(a("wd/R"))
        },
        paOr: function(e, t, a) {
            "use strict";
            var n = a("RDha");
            e.exports = function(e) {
                var t = n.noop;
                e.LinearScaleBase = e.Scale.extend({
                    getRightValue: function(t) {
                        return "string" == typeof t ? +t : e.Scale.prototype.getRightValue.call(this, t)
                    },
                    handleTickRangeOptions: function() {
                        var e = this,
                            t = e.options.ticks;
                        if (t.beginAtZero) {
                            var a = n.sign(e.min),
                                i = n.sign(e.max);
                            a < 0 && i < 0 ? e.max = 0 : a > 0 && i > 0 && (e.min = 0)
                        }
                        var r = void 0 !== t.min || void 0 !== t.suggestedMin,
                            s = void 0 !== t.max || void 0 !== t.suggestedMax;
                        void 0 !== t.min ? e.min = t.min : void 0 !== t.suggestedMin && (e.min = null === e.min ? t.suggestedMin : Math.min(e.min, t.suggestedMin)), void 0 !== t.max ? e.max = t.max : void 0 !== t.suggestedMax && (e.max = null === e.max ? t.suggestedMax : Math.max(e.max, t.suggestedMax)), r !== s && e.min >= e.max && (r ? e.max = e.min + 1 : e.min = e.max - 1), e.min === e.max && (e.max++, t.beginAtZero || e.min--)
                    },
                    getTickLimit: t,
                    handleDirectionalChanges: t,
                    buildTicks: function() {
                        var e = this,
                            t = e.options.ticks,
                            a = e.getTickLimit(),
                            i = {
                                maxTicks: a = Math.max(2, a),
                                min: t.min,
                                max: t.max,
                                stepSize: n.valueOrDefault(t.fixedStepSize, t.stepSize)
                            },
                            r = e.ticks = function(e, t) {
                                var a, i = [];
                                if (e.stepSize && e.stepSize > 0) a = e.stepSize;
                                else {
                                    var r = n.niceNum(t.max - t.min, !1);
                                    a = n.niceNum(r / (e.maxTicks - 1), !0)
                                }
                                var s = Math.floor(t.min / a) * a,
                                    o = Math.ceil(t.max / a) * a;
                                e.min && e.max && e.stepSize && n.almostWhole((e.max - e.min) / e.stepSize, a / 1e3) && (s = e.min, o = e.max);
                                var d = (o - s) / a;
                                d = n.almostEquals(d, Math.round(d), a / 1e3) ? Math.round(d) : Math.ceil(d);
                                var l = 1;
                                a < 1 && (l = Math.pow(10, a.toString().length - 2), s = Math.round(s * l) / l, o = Math.round(o * l) / l), i.push(void 0 !== e.min ? e.min : s);
                                for (var u = 1; u < d; ++u) i.push(Math.round((s + u * a) * l) / l);
                                return i.push(void 0 !== e.max ? e.max : o), i
                            }(i, e);
                        e.handleDirectionalChanges(), e.max = n.max(r), e.min = n.min(r), t.reverse ? (r.reverse(), e.start = e.max, e.end = e.min) : (e.start = e.min, e.end = e.max)
                    },
                    convertTicksToLabels: function() {
                        var t = this;
                        t.ticksAsNumbers = t.ticks.slice(), t.zeroLineIndex = t.ticks.indexOf(0), e.Scale.prototype.convertTicksToLabels.call(t)
                    }
                })
            }
        },
        q8Fl: function(e, t, a) {
            "use strict";
            var n = a("RDha"),
                i = ["animationstart", "webkitAnimationStart"],
                r = {
                    touchstart: "mousedown",
                    touchmove: "mousemove",
                    touchend: "mouseup",
                    pointerenter: "mouseenter",
                    pointerdown: "mousedown",
                    pointermove: "mousemove",
                    pointerup: "mouseup",
                    pointerleave: "mouseout",
                    pointerout: "mouseout"
                };

            function s(e, t) {
                var a = n.getStyle(e, t),
                    i = a && a.match(/^(\d+)(\.\d+)?px$/);
                return i ? Number(i[1]) : void 0
            }
            var o = !! function() {
                var e = !1;
                try {
                    var t = Object.defineProperty({}, "passive", {
                        get: function() {
                            e = !0
                        }
                    });
                    window.addEventListener("e", null, t)
                } catch (e) {}
                return e
            }() && {
                passive: !0
            };

            function d(e, t, a) {
                e.addEventListener(t, a, o)
            }

            function l(e, t, a) {
                e.removeEventListener(t, a, o)
            }

            function u(e, t, a, n, i) {
                return {
                    type: e,
                    chart: t,
                    native: i || null,
                    x: void 0 !== a ? a : null,
                    y: void 0 !== n ? n : null
                }
            }
            e.exports = {
                _enabled: "undefined" != typeof window && "undefined" != typeof document,
                initialize: function() {
                    var e, t, a = "from{opacity:0.99}to{opacity:1}";
                    e = "@-webkit-keyframes chartjs-render-animation{" + a + "}@keyframes chartjs-render-animation{" + a + "}.chartjs-render-monitor{-webkit-animation:chartjs-render-animation 0.001s;animation:chartjs-render-animation 0.001s;}", t = this._style || document.createElement("style"), this._style || (this._style = t, e = "/* Chart.js */\n" + e, t.setAttribute("type", "text/css"), document.getElementsByTagName("head")[0].appendChild(t)), t.appendChild(document.createTextNode(e))
                },
                acquireContext: function(e, t) {
                    "string" == typeof e ? e = document.getElementById(e) : e.length && (e = e[0]), e && e.canvas && (e = e.canvas);
                    var a = e && e.getContext && e.getContext("2d");
                    return a && a.canvas === e ? (function(e, t) {
                        var a = e.style,
                            n = e.getAttribute("height"),
                            i = e.getAttribute("width");
                        if (e.$chartjs = {
                                initial: {
                                    height: n,
                                    width: i,
                                    style: {
                                        display: a.display,
                                        height: a.height,
                                        width: a.width
                                    }
                                }
                            }, a.display = a.display || "block", null === i || "" === i) {
                            var r = s(e, "width");
                            void 0 !== r && (e.width = r)
                        }
                        if (null === n || "" === n)
                            if ("" === e.style.height) e.height = e.width / (t.options.aspectRatio || 2);
                            else {
                                var o = s(e, "height");
                                void 0 !== r && (e.height = o)
                            }
                    }(e, t), a) : null
                },
                releaseContext: function(e) {
                    var t = e.canvas;
                    if (t.$chartjs) {
                        var a = t.$chartjs.initial;
                        ["height", "width"].forEach(function(e) {
                            var i = a[e];
                            n.isNullOrUndef(i) ? t.removeAttribute(e) : t.setAttribute(e, i)
                        }), n.each(a.style || {}, function(e, a) {
                            t.style[a] = e
                        }), t.width = t.width, delete t.$chartjs
                    }
                },
                addEventListener: function(e, t, a) {
                    var s = e.canvas;
                    if ("resize" !== t) {
                        var o = a.$chartjs || (a.$chartjs = {});
                        d(s, t, (o.proxies || (o.proxies = {}))[e.id + "_" + t] = function(t) {
                            a(function(e, t) {
                                var a = r[e.type] || e.type,
                                    i = n.getRelativePosition(e, t);
                                return u(a, t, i.x, i.y, e)
                            }(t, e))
                        })
                    } else ! function(e, t, a) {
                        var r, s, o, l, _ = e.$chartjs || (e.$chartjs = {}),
                            m = _.resizer = function(e) {
                                var t = document.createElement("div"),
                                    a = "chartjs-size-monitor",
                                    n = "position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;";
                                t.style.cssText = n, t.className = a, t.innerHTML = '<div class="' + a + '-expand" style="' + n + '"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="' + a + '-shrink" style="' + n + '"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div>';
                                var i = t.childNodes[0],
                                    r = t.childNodes[1];
                                t._reset = function() {
                                    i.scrollLeft = 1e6, i.scrollTop = 1e6, r.scrollLeft = 1e6, r.scrollTop = 1e6
                                };
                                var s = function() {
                                    t._reset(), e()
                                };
                                return d(i, "scroll", s.bind(i, "expand")), d(r, "scroll", s.bind(r, "shrink")), t
                            }((r = function() {
                                if (_.resizer) return t(u("resize", a))
                            }, o = !1, l = [], function() {
                                l = Array.prototype.slice.call(arguments), s = s || this, o || (o = !0, n.requestAnimFrame.call(window, function() {
                                    o = !1, r.apply(s, l)
                                }))
                            }));
                        ! function(e, t) {
                            var a = e.$chartjs || (e.$chartjs = {}),
                                r = a.renderProxy = function(e) {
                                    "chartjs-render-animation" === e.animationName && t()
                                };
                            n.each(i, function(t) {
                                d(e, t, r)
                            }), a.reflow = !!e.offsetParent, e.classList.add("chartjs-render-monitor")
                        }(e, function() {
                            if (_.resizer) {
                                var t = e.parentNode;
                                t && t !== m.parentNode && t.insertBefore(m, t.firstChild), m._reset()
                            }
                        })
                    }(s, a, e)
                },
                removeEventListener: function(e, t, a) {
                    var r, s, o, d = e.canvas;
                    if ("resize" !== t) {
                        var u = ((a.$chartjs || {}).proxies || {})[e.id + "_" + t];
                        u && l(d, t, u)
                    } else o = (s = (r = d).$chartjs || {}).resizer, delete s.resizer,
                        function(e) {
                            var t = e.$chartjs || {},
                                a = t.renderProxy;
                            a && (n.each(i, function(t) {
                                l(e, t, a)
                            }), delete t.renderProxy), e.classList.remove("chartjs-render-monitor")
                        }(r), o && o.parentNode && o.parentNode.removeChild(o)
                }
            }, n.addEvent = d, n.removeEvent = l
        },
        qzaf: function(e, t, a) {
            "use strict";
            e.exports = function(e) {
                e.PolarArea = function(t, a) {
                    return a.type = "polarArea", new e(t, a)
                }
            }
        },
        raLr: function(e, t, a) {
            ! function(e) {
                "use strict";

                function t(e, t, a) {
                    var n, i;
                    return "m" === a ? t ? "\u0445\u0432\u0438\u043b\u0438\u043d\u0430" : "\u0445\u0432\u0438\u043b\u0438\u043d\u0443" : "h" === a ? t ? "\u0433\u043e\u0434\u0438\u043d\u0430" : "\u0433\u043e\u0434\u0438\u043d\u0443" : e + " " + (n = +e, i = {
                        ss: t ? "\u0441\u0435\u043a\u0443\u043d\u0434\u0430_\u0441\u0435\u043a\u0443\u043d\u0434\u0438_\u0441\u0435\u043a\u0443\u043d\u0434" : "\u0441\u0435\u043a\u0443\u043d\u0434\u0443_\u0441\u0435\u043a\u0443\u043d\u0434\u0438_\u0441\u0435\u043a\u0443\u043d\u0434",
                        mm: t ? "\u0445\u0432\u0438\u043b\u0438\u043d\u0430_\u0445\u0432\u0438\u043b\u0438\u043d\u0438_\u0445\u0432\u0438\u043b\u0438\u043d" : "\u0445\u0432\u0438\u043b\u0438\u043d\u0443_\u0445\u0432\u0438\u043b\u0438\u043d\u0438_\u0445\u0432\u0438\u043b\u0438\u043d",
                        hh: t ? "\u0433\u043e\u0434\u0438\u043d\u0430_\u0433\u043e\u0434\u0438\u043d\u0438_\u0433\u043e\u0434\u0438\u043d" : "\u0433\u043e\u0434\u0438\u043d\u0443_\u0433\u043e\u0434\u0438\u043d\u0438_\u0433\u043e\u0434\u0438\u043d",
                        dd: "\u0434\u0435\u043d\u044c_\u0434\u043d\u0456_\u0434\u043d\u0456\u0432",
                        MM: "\u043c\u0456\u0441\u044f\u0446\u044c_\u043c\u0456\u0441\u044f\u0446\u0456_\u043c\u0456\u0441\u044f\u0446\u0456\u0432",
                        yy: "\u0440\u0456\u043a_\u0440\u043e\u043a\u0438_\u0440\u043e\u043a\u0456\u0432"
                    }[a].split("_"), n % 10 == 1 && n % 100 != 11 ? i[0] : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? i[1] : i[2])
                }

                function a(e) {
                    return function() {
                        return e + "\u043e" + (11 === this.hours() ? "\u0431" : "") + "] LT"
                    }
                }
                e.defineLocale("uk", {
                    months: {
                        format: "\u0441\u0456\u0447\u043d\u044f_\u043b\u044e\u0442\u043e\u0433\u043e_\u0431\u0435\u0440\u0435\u0437\u043d\u044f_\u043a\u0432\u0456\u0442\u043d\u044f_\u0442\u0440\u0430\u0432\u043d\u044f_\u0447\u0435\u0440\u0432\u043d\u044f_\u043b\u0438\u043f\u043d\u044f_\u0441\u0435\u0440\u043f\u043d\u044f_\u0432\u0435\u0440\u0435\u0441\u043d\u044f_\u0436\u043e\u0432\u0442\u043d\u044f_\u043b\u0438\u0441\u0442\u043e\u043f\u0430\u0434\u0430_\u0433\u0440\u0443\u0434\u043d\u044f".split("_"),
                        standalone: "\u0441\u0456\u0447\u0435\u043d\u044c_\u043b\u044e\u0442\u0438\u0439_\u0431\u0435\u0440\u0435\u0437\u0435\u043d\u044c_\u043a\u0432\u0456\u0442\u0435\u043d\u044c_\u0442\u0440\u0430\u0432\u0435\u043d\u044c_\u0447\u0435\u0440\u0432\u0435\u043d\u044c_\u043b\u0438\u043f\u0435\u043d\u044c_\u0441\u0435\u0440\u043f\u0435\u043d\u044c_\u0432\u0435\u0440\u0435\u0441\u0435\u043d\u044c_\u0436\u043e\u0432\u0442\u0435\u043d\u044c_\u043b\u0438\u0441\u0442\u043e\u043f\u0430\u0434_\u0433\u0440\u0443\u0434\u0435\u043d\u044c".split("_")
                    },
                    monthsShort: "\u0441\u0456\u0447_\u043b\u044e\u0442_\u0431\u0435\u0440_\u043a\u0432\u0456\u0442_\u0442\u0440\u0430\u0432_\u0447\u0435\u0440\u0432_\u043b\u0438\u043f_\u0441\u0435\u0440\u043f_\u0432\u0435\u0440_\u0436\u043e\u0432\u0442_\u043b\u0438\u0441\u0442_\u0433\u0440\u0443\u0434".split("_"),
                    weekdays: function(e, t) {
                        var a = {
                            nominative: "\u043d\u0435\u0434\u0456\u043b\u044f_\u043f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a_\u0432\u0456\u0432\u0442\u043e\u0440\u043e\u043a_\u0441\u0435\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0435\u0440_\u043f\u2019\u044f\u0442\u043d\u0438\u0446\u044f_\u0441\u0443\u0431\u043e\u0442\u0430".split("_"),
                            accusative: "\u043d\u0435\u0434\u0456\u043b\u044e_\u043f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a_\u0432\u0456\u0432\u0442\u043e\u0440\u043e\u043a_\u0441\u0435\u0440\u0435\u0434\u0443_\u0447\u0435\u0442\u0432\u0435\u0440_\u043f\u2019\u044f\u0442\u043d\u0438\u0446\u044e_\u0441\u0443\u0431\u043e\u0442\u0443".split("_"),
                            genitive: "\u043d\u0435\u0434\u0456\u043b\u0456_\u043f\u043e\u043d\u0435\u0434\u0456\u043b\u043a\u0430_\u0432\u0456\u0432\u0442\u043e\u0440\u043a\u0430_\u0441\u0435\u0440\u0435\u0434\u0438_\u0447\u0435\u0442\u0432\u0435\u0440\u0433\u0430_\u043f\u2019\u044f\u0442\u043d\u0438\u0446\u0456_\u0441\u0443\u0431\u043e\u0442\u0438".split("_")
                        };
                        return e ? a[/(\[[\u0412\u0432\u0423\u0443]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:\u043c\u0438\u043d\u0443\u043b\u043e\u0457|\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u043e\u0457)? ?\] ?dddd/.test(t) ? "genitive" : "nominative"][e.day()] : a.nominative
                    },
                    weekdaysShort: "\u043d\u0434_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"),
                    weekdaysMin: "\u043d\u0434_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY \u0440.",
                        LLL: "D MMMM YYYY \u0440., HH:mm",
                        LLLL: "dddd, D MMMM YYYY \u0440., HH:mm"
                    },
                    calendar: {
                        sameDay: a("[\u0421\u044c\u043e\u0433\u043e\u0434\u043d\u0456 "),
                        nextDay: a("[\u0417\u0430\u0432\u0442\u0440\u0430 "),
                        lastDay: a("[\u0412\u0447\u043e\u0440\u0430 "),
                        nextWeek: a("[\u0423] dddd ["),
                        lastWeek: function() {
                            switch (this.day()) {
                                case 0:
                                case 3:
                                case 5:
                                case 6:
                                    return a("[\u041c\u0438\u043d\u0443\u043b\u043e\u0457] dddd [").call(this);
                                case 1:
                                case 2:
                                case 4:
                                    return a("[\u041c\u0438\u043d\u0443\u043b\u043e\u0433\u043e] dddd [").call(this)
                            }
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "\u0437\u0430 %s",
                        past: "%s \u0442\u043e\u043c\u0443",
                        s: "\u0434\u0435\u043a\u0456\u043b\u044c\u043a\u0430 \u0441\u0435\u043a\u0443\u043d\u0434",
                        ss: t,
                        m: t,
                        mm: t,
                        h: "\u0433\u043e\u0434\u0438\u043d\u0443",
                        hh: t,
                        d: "\u0434\u0435\u043d\u044c",
                        dd: t,
                        M: "\u043c\u0456\u0441\u044f\u0446\u044c",
                        MM: t,
                        y: "\u0440\u0456\u043a",
                        yy: t
                    },
                    meridiemParse: /\u043d\u043e\u0447\u0456|\u0440\u0430\u043d\u043a\u0443|\u0434\u043d\u044f|\u0432\u0435\u0447\u043e\u0440\u0430/,
                    isPM: function(e) {
                        return /^(\u0434\u043d\u044f|\u0432\u0435\u0447\u043e\u0440\u0430)$/.test(e)
                    },
                    meridiem: function(e, t, a) {
                        return e < 4 ? "\u043d\u043e\u0447\u0456" : e < 12 ? "\u0440\u0430\u043d\u043a\u0443" : e < 17 ? "\u0434\u043d\u044f" : "\u0432\u0435\u0447\u043e\u0440\u0430"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}-(\u0439|\u0433\u043e)/,
                    ordinal: function(e, t) {
                        switch (t) {
                            case "M":
                            case "d":
                            case "DDD":
                            case "w":
                            case "W":
                                return e + "-\u0439";
                            case "D":
                                return e + "-\u0433\u043e";
                            default:
                                return e
                        }
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(a("wd/R"))
        },
        "s+uk": function(e, t, a) {
            ! function(e) {
                "use strict";

                function t(e, t, a, n) {
                    var i = {
                        m: ["eine Minute", "einer Minute"],
                        h: ["eine Stunde", "einer Stunde"],
                        d: ["ein Tag", "einem Tag"],
                        dd: [e + " Tage", e + " Tagen"],
                        M: ["ein Monat", "einem Monat"],
                        MM: [e + " Monate", e + " Monaten"],
                        y: ["ein Jahr", "einem Jahr"],
                        yy: [e + " Jahre", e + " Jahren"]
                    };
                    return t ? i[a][0] : i[a][1]
                }
                e.defineLocale("de-at", {
                    months: "J\xe4nner_Februar_M\xe4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                    monthsShort: "J\xe4n._Feb._M\xe4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
                    weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
                    weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY HH:mm",
                        LLLL: "dddd, D. MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[heute um] LT [Uhr]",
                        sameElse: "L",
                        nextDay: "[morgen um] LT [Uhr]",
                        nextWeek: "dddd [um] LT [Uhr]",
                        lastDay: "[gestern um] LT [Uhr]",
                        lastWeek: "[letzten] dddd [um] LT [Uhr]"
                    },
                    relativeTime: {
                        future: "in %s",
                        past: "vor %s",
                        s: "ein paar Sekunden",
                        ss: "%d Sekunden",
                        m: t,
                        mm: "%d Minuten",
                        h: t,
                        hh: "%d Stunden",
                        d: t,
                        dd: t,
                        M: t,
                        MM: t,
                        y: t,
                        yy: t
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(a("wd/R"))
        },
        sp3z: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("lo", {
                    months: "\u0ea1\u0eb1\u0e87\u0e81\u0ead\u0e99_\u0e81\u0eb8\u0ea1\u0e9e\u0eb2_\u0ea1\u0eb5\u0e99\u0eb2_\u0ec0\u0ea1\u0eaa\u0eb2_\u0e9e\u0eb6\u0e94\u0eaa\u0eb0\u0e9e\u0eb2_\u0ea1\u0eb4\u0e96\u0eb8\u0e99\u0eb2_\u0e81\u0ecd\u0ea5\u0eb0\u0e81\u0ebb\u0e94_\u0eaa\u0eb4\u0e87\u0eab\u0eb2_\u0e81\u0eb1\u0e99\u0e8d\u0eb2_\u0e95\u0eb8\u0ea5\u0eb2_\u0e9e\u0eb0\u0e88\u0eb4\u0e81_\u0e97\u0eb1\u0e99\u0ea7\u0eb2".split("_"),
                    monthsShort: "\u0ea1\u0eb1\u0e87\u0e81\u0ead\u0e99_\u0e81\u0eb8\u0ea1\u0e9e\u0eb2_\u0ea1\u0eb5\u0e99\u0eb2_\u0ec0\u0ea1\u0eaa\u0eb2_\u0e9e\u0eb6\u0e94\u0eaa\u0eb0\u0e9e\u0eb2_\u0ea1\u0eb4\u0e96\u0eb8\u0e99\u0eb2_\u0e81\u0ecd\u0ea5\u0eb0\u0e81\u0ebb\u0e94_\u0eaa\u0eb4\u0e87\u0eab\u0eb2_\u0e81\u0eb1\u0e99\u0e8d\u0eb2_\u0e95\u0eb8\u0ea5\u0eb2_\u0e9e\u0eb0\u0e88\u0eb4\u0e81_\u0e97\u0eb1\u0e99\u0ea7\u0eb2".split("_"),
                    weekdays: "\u0ead\u0eb2\u0e97\u0eb4\u0e94_\u0e88\u0eb1\u0e99_\u0ead\u0eb1\u0e87\u0e84\u0eb2\u0e99_\u0e9e\u0eb8\u0e94_\u0e9e\u0eb0\u0eab\u0eb1\u0e94_\u0eaa\u0eb8\u0e81_\u0ec0\u0eaa\u0ebb\u0eb2".split("_"),
                    weekdaysShort: "\u0e97\u0eb4\u0e94_\u0e88\u0eb1\u0e99_\u0ead\u0eb1\u0e87\u0e84\u0eb2\u0e99_\u0e9e\u0eb8\u0e94_\u0e9e\u0eb0\u0eab\u0eb1\u0e94_\u0eaa\u0eb8\u0e81_\u0ec0\u0eaa\u0ebb\u0eb2".split("_"),
                    weekdaysMin: "\u0e97_\u0e88_\u0ead\u0e84_\u0e9e_\u0e9e\u0eab_\u0eaa\u0e81_\u0eaa".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "\u0ea7\u0eb1\u0e99dddd D MMMM YYYY HH:mm"
                    },
                    meridiemParse: /\u0e95\u0ead\u0e99\u0ec0\u0e8a\u0ebb\u0ec9\u0eb2|\u0e95\u0ead\u0e99\u0ec1\u0ea5\u0e87/,
                    isPM: function(e) {
                        return "\u0e95\u0ead\u0e99\u0ec1\u0ea5\u0e87" === e
                    },
                    meridiem: function(e, t, a) {
                        return e < 12 ? "\u0e95\u0ead\u0e99\u0ec0\u0e8a\u0ebb\u0ec9\u0eb2" : "\u0e95\u0ead\u0e99\u0ec1\u0ea5\u0e87"
                    },
                    calendar: {
                        sameDay: "[\u0ea1\u0eb7\u0ec9\u0e99\u0eb5\u0ec9\u0ec0\u0ea7\u0ea5\u0eb2] LT",
                        nextDay: "[\u0ea1\u0eb7\u0ec9\u0ead\u0eb7\u0ec8\u0e99\u0ec0\u0ea7\u0ea5\u0eb2] LT",
                        nextWeek: "[\u0ea7\u0eb1\u0e99]dddd[\u0edc\u0ec9\u0eb2\u0ec0\u0ea7\u0ea5\u0eb2] LT",
                        lastDay: "[\u0ea1\u0eb7\u0ec9\u0ea7\u0eb2\u0e99\u0e99\u0eb5\u0ec9\u0ec0\u0ea7\u0ea5\u0eb2] LT",
                        lastWeek: "[\u0ea7\u0eb1\u0e99]dddd[\u0ec1\u0ea5\u0ec9\u0ea7\u0e99\u0eb5\u0ec9\u0ec0\u0ea7\u0ea5\u0eb2] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "\u0ead\u0eb5\u0e81 %s",
                        past: "%s\u0e9c\u0ec8\u0eb2\u0e99\u0ea1\u0eb2",
                        s: "\u0e9a\u0ecd\u0ec8\u0ec0\u0e97\u0ebb\u0ec8\u0eb2\u0ec3\u0e94\u0ea7\u0eb4\u0e99\u0eb2\u0e97\u0eb5",
                        ss: "%d \u0ea7\u0eb4\u0e99\u0eb2\u0e97\u0eb5",
                        m: "1 \u0e99\u0eb2\u0e97\u0eb5",
                        mm: "%d \u0e99\u0eb2\u0e97\u0eb5",
                        h: "1 \u0e8a\u0ebb\u0ec8\u0ea7\u0ec2\u0ea1\u0e87",
                        hh: "%d \u0e8a\u0ebb\u0ec8\u0ea7\u0ec2\u0ea1\u0e87",
                        d: "1 \u0ea1\u0eb7\u0ec9",
                        dd: "%d \u0ea1\u0eb7\u0ec9",
                        M: "1 \u0ec0\u0e94\u0eb7\u0ead\u0e99",
                        MM: "%d \u0ec0\u0e94\u0eb7\u0ead\u0e99",
                        y: "1 \u0e9b\u0eb5",
                        yy: "%d \u0e9b\u0eb5"
                    },
                    dayOfMonthOrdinalParse: /(\u0e97\u0eb5\u0ec8)\d{1,2}/,
                    ordinal: function(e) {
                        return "\u0e97\u0eb5\u0ec8" + e
                    }
                })
            }(a("wd/R"))
        },
        t1N5: function(e, t) {
            function a(e) {
                var t, a, n = e[0] / 255,
                    i = e[1] / 255,
                    r = e[2] / 255,
                    s = Math.min(n, i, r),
                    o = Math.max(n, i, r),
                    d = o - s;
                return o == s ? t = 0 : n == o ? t = (i - r) / d : i == o ? t = 2 + (r - n) / d : r == o && (t = 4 + (n - i) / d), (t = Math.min(60 * t, 360)) < 0 && (t += 360), a = (s + o) / 2, [t, 100 * (o == s ? 0 : a <= .5 ? d / (o + s) : d / (2 - o - s)), 100 * a]
            }

            function n(e) {
                var t, a, n = e[0],
                    i = e[1],
                    r = e[2],
                    s = Math.min(n, i, r),
                    o = Math.max(n, i, r),
                    d = o - s;
                return a = 0 == o ? 0 : d / o * 1e3 / 10, o == s ? t = 0 : n == o ? t = (i - r) / d : i == o ? t = 2 + (r - n) / d : r == o && (t = 4 + (n - i) / d), (t = Math.min(60 * t, 360)) < 0 && (t += 360), [t, a, o / 255 * 1e3 / 10]
            }

            function i(e) {
                var t = e[0],
                    n = e[1],
                    i = e[2];
                return [a(e)[0], 1 / 255 * Math.min(t, Math.min(n, i)) * 100, 100 * (i = 1 - 1 / 255 * Math.max(t, Math.max(n, i)))]
            }

            function s(e) {
                var t, a = e[0] / 255,
                    n = e[1] / 255,
                    i = e[2] / 255;
                return [100 * ((1 - a - (t = Math.min(1 - a, 1 - n, 1 - i))) / (1 - t) || 0), 100 * ((1 - n - t) / (1 - t) || 0), 100 * ((1 - i - t) / (1 - t) || 0), 100 * t]
            }

            function o(e) {
                return k[JSON.stringify(e)]
            }

            function d(e) {
                var t = e[0] / 255,
                    a = e[1] / 255,
                    n = e[2] / 255;
                return [100 * (.4124 * (t = t > .04045 ? Math.pow((t + .055) / 1.055, 2.4) : t / 12.92) + .3576 * (a = a > .04045 ? Math.pow((a + .055) / 1.055, 2.4) : a / 12.92) + .1805 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92)), 100 * (.2126 * t + .7152 * a + .0722 * n), 100 * (.0193 * t + .1192 * a + .9505 * n)]
            }

            function l(e) {
                var t = d(e),
                    a = t[0],
                    n = t[1],
                    i = t[2];
                return n /= 100, i /= 108.883, a = (a /= 95.047) > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (a - n), 200 * (n - (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116))]
            }

            function u(e) {
                var t, a, n, i, r, s = e[0] / 360,
                    o = e[1] / 100,
                    d = e[2] / 100;
                if (0 == o) return [r = 255 * d, r, r];
                t = 2 * d - (a = d < .5 ? d * (1 + o) : d + o - d * o), i = [0, 0, 0];
                for (var l = 0; l < 3; l++)(n = s + 1 / 3 * -(l - 1)) < 0 && n++, n > 1 && n--, i[l] = 255 * (r = 6 * n < 1 ? t + 6 * (a - t) * n : 2 * n < 1 ? a : 3 * n < 2 ? t + (a - t) * (2 / 3 - n) * 6 : t);
                return i
            }

            function _(e) {
                var t = e[0] / 60,
                    a = e[1] / 100,
                    n = e[2] / 100,
                    i = Math.floor(t) % 6,
                    r = t - Math.floor(t),
                    s = 255 * n * (1 - a),
                    o = 255 * n * (1 - a * r),
                    d = 255 * n * (1 - a * (1 - r));
                switch (n *= 255, i) {
                    case 0:
                        return [n, d, s];
                    case 1:
                        return [o, n, s];
                    case 2:
                        return [s, n, d];
                    case 3:
                        return [s, o, n];
                    case 4:
                        return [d, s, n];
                    case 5:
                        return [n, s, o]
                }
            }

            function m(e) {
                var t, a, n, i, s = e[0] / 360,
                    o = e[1] / 100,
                    d = e[2] / 100,
                    l = o + d;
                switch (l > 1 && (o /= l, d /= l), a = 1 - d, n = 6 * s - (t = Math.floor(6 * s)), 0 != (1 & t) && (n = 1 - n), i = o + n * (a - o), t) {
                    default:
                        case 6:
                        case 0:
                        r = a,
                    g = i,
                    b = o;
                    break;
                    case 1:
                            r = i,
                        g = a,
                        b = o;
                        break;
                    case 2:
                            r = o,
                        g = a,
                        b = i;
                        break;
                    case 3:
                            r = o,
                        g = i,
                        b = a;
                        break;
                    case 4:
                            r = i,
                        g = o,
                        b = a;
                        break;
                    case 5:
                            r = a,
                        g = o,
                        b = i
                }
                return [255 * r, 255 * g, 255 * b]
            }

            function h(e) {
                var t = e[1] / 100,
                    a = e[2] / 100,
                    n = e[3] / 100;
                return [255 * (1 - Math.min(1, e[0] / 100 * (1 - n) + n)), 255 * (1 - Math.min(1, t * (1 - n) + n)), 255 * (1 - Math.min(1, a * (1 - n) + n))]
            }

            function c(e) {
                var t, a, n, i = e[0] / 100,
                    r = e[1] / 100,
                    s = e[2] / 100;
                return a = -.9689 * i + 1.8758 * r + .0415 * s, n = .0557 * i + -.204 * r + 1.057 * s, t = (t = 3.2406 * i + -1.5372 * r + -.4986 * s) > .0031308 ? 1.055 * Math.pow(t, 1 / 2.4) - .055 : t *= 12.92, a = a > .0031308 ? 1.055 * Math.pow(a, 1 / 2.4) - .055 : a *= 12.92, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n *= 12.92, [255 * (t = Math.min(Math.max(0, t), 1)), 255 * (a = Math.min(Math.max(0, a), 1)), 255 * (n = Math.min(Math.max(0, n), 1))]
            }

            function f(e) {
                var t = e[0],
                    a = e[1],
                    n = e[2];
                return a /= 100, n /= 108.883, t = (t /= 95.047) > .008856 ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116, [116 * (a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116) - 16, 500 * (t - a), 200 * (a - (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116))]
            }

            function p(e) {
                var t, a, n, i, r = e[0],
                    s = e[1],
                    o = e[2];
                return r <= 8 ? i = (a = 100 * r / 903.3) / 100 * 7.787 + 16 / 116 : (a = 100 * Math.pow((r + 16) / 116, 3), i = Math.pow(a / 100, 1 / 3)), [t = t / 95.047 <= .008856 ? t = 95.047 * (s / 500 + i - 16 / 116) / 7.787 : 95.047 * Math.pow(s / 500 + i, 3), a, n = n / 108.883 <= .008859 ? n = 108.883 * (i - o / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(i - o / 200, 3)]
            }

            function M(e) {
                var t, a = e[0],
                    n = e[1],
                    i = e[2];
                return (t = 360 * Math.atan2(i, n) / 2 / Math.PI) < 0 && (t += 360), [a, Math.sqrt(n * n + i * i), t]
            }

            function y(e) {
                return c(p(e))
            }

            function L(e) {
                var t, a = e[1];
                return t = e[2] / 360 * 2 * Math.PI, [e[0], a * Math.cos(t), a * Math.sin(t)]
            }

            function v(e) {
                return Y[e]
            }
            e.exports = {
                rgb2hsl: a,
                rgb2hsv: n,
                rgb2hwb: i,
                rgb2cmyk: s,
                rgb2keyword: o,
                rgb2xyz: d,
                rgb2lab: l,
                rgb2lch: function(e) {
                    return M(l(e))
                },
                hsl2rgb: u,
                hsl2hsv: function(e) {
                    var t = e[1] / 100,
                        a = e[2] / 100;
                    return 0 === a ? [0, 0, 0] : [e[0], 2 * (t *= (a *= 2) <= 1 ? a : 2 - a) / (a + t) * 100, (a + t) / 2 * 100]
                },
                hsl2hwb: function(e) {
                    return i(u(e))
                },
                hsl2cmyk: function(e) {
                    return s(u(e))
                },
                hsl2keyword: function(e) {
                    return o(u(e))
                },
                hsv2rgb: _,
                hsv2hsl: function(e) {
                    var t, a, n = e[1] / 100,
                        i = e[2] / 100;
                    return t = n * i, [e[0], 100 * (t = (t /= (a = (2 - n) * i) <= 1 ? a : 2 - a) || 0), 100 * (a /= 2)]
                },
                hsv2hwb: function(e) {
                    return i(_(e))
                },
                hsv2cmyk: function(e) {
                    return s(_(e))
                },
                hsv2keyword: function(e) {
                    return o(_(e))
                },
                hwb2rgb: m,
                hwb2hsl: function(e) {
                    return a(m(e))
                },
                hwb2hsv: function(e) {
                    return n(m(e))
                },
                hwb2cmyk: function(e) {
                    return s(m(e))
                },
                hwb2keyword: function(e) {
                    return o(m(e))
                },
                cmyk2rgb: h,
                cmyk2hsl: function(e) {
                    return a(h(e))
                },
                cmyk2hsv: function(e) {
                    return n(h(e))
                },
                cmyk2hwb: function(e) {
                    return i(h(e))
                },
                cmyk2keyword: function(e) {
                    return o(h(e))
                },
                keyword2rgb: v,
                keyword2hsl: function(e) {
                    return a(v(e))
                },
                keyword2hsv: function(e) {
                    return n(v(e))
                },
                keyword2hwb: function(e) {
                    return i(v(e))
                },
                keyword2cmyk: function(e) {
                    return s(v(e))
                },
                keyword2lab: function(e) {
                    return l(v(e))
                },
                keyword2xyz: function(e) {
                    return d(v(e))
                },
                xyz2rgb: c,
                xyz2lab: f,
                xyz2lch: function(e) {
                    return M(f(e))
                },
                lab2xyz: p,
                lab2rgb: y,
                lab2lch: M,
                lch2lab: L,
                lch2xyz: function(e) {
                    return p(L(e))
                },
                lch2rgb: function(e) {
                    return y(L(e))
                }
            };
            var Y = {
                    aliceblue: [240, 248, 255],
                    antiquewhite: [250, 235, 215],
                    aqua: [0, 255, 255],
                    aquamarine: [127, 255, 212],
                    azure: [240, 255, 255],
                    beige: [245, 245, 220],
                    bisque: [255, 228, 196],
                    black: [0, 0, 0],
                    blanchedalmond: [255, 235, 205],
                    blue: [0, 0, 255],
                    blueviolet: [138, 43, 226],
                    brown: [165, 42, 42],
                    burlywood: [222, 184, 135],
                    cadetblue: [95, 158, 160],
                    chartreuse: [127, 255, 0],
                    chocolate: [210, 105, 30],
                    coral: [255, 127, 80],
                    cornflowerblue: [100, 149, 237],
                    cornsilk: [255, 248, 220],
                    crimson: [220, 20, 60],
                    cyan: [0, 255, 255],
                    darkblue: [0, 0, 139],
                    darkcyan: [0, 139, 139],
                    darkgoldenrod: [184, 134, 11],
                    darkgray: [169, 169, 169],
                    darkgreen: [0, 100, 0],
                    darkgrey: [169, 169, 169],
                    darkkhaki: [189, 183, 107],
                    darkmagenta: [139, 0, 139],
                    darkolivegreen: [85, 107, 47],
                    darkorange: [255, 140, 0],
                    darkorchid: [153, 50, 204],
                    darkred: [139, 0, 0],
                    darksalmon: [233, 150, 122],
                    darkseagreen: [143, 188, 143],
                    darkslateblue: [72, 61, 139],
                    darkslategray: [47, 79, 79],
                    darkslategrey: [47, 79, 79],
                    darkturquoise: [0, 206, 209],
                    darkviolet: [148, 0, 211],
                    deeppink: [255, 20, 147],
                    deepskyblue: [0, 191, 255],
                    dimgray: [105, 105, 105],
                    dimgrey: [105, 105, 105],
                    dodgerblue: [30, 144, 255],
                    firebrick: [178, 34, 34],
                    floralwhite: [255, 250, 240],
                    forestgreen: [34, 139, 34],
                    fuchsia: [255, 0, 255],
                    gainsboro: [220, 220, 220],
                    ghostwhite: [248, 248, 255],
                    gold: [255, 215, 0],
                    goldenrod: [218, 165, 32],
                    gray: [128, 128, 128],
                    green: [0, 128, 0],
                    greenyellow: [173, 255, 47],
                    grey: [128, 128, 128],
                    honeydew: [240, 255, 240],
                    hotpink: [255, 105, 180],
                    indianred: [205, 92, 92],
                    indigo: [75, 0, 130],
                    ivory: [255, 255, 240],
                    khaki: [240, 230, 140],
                    lavender: [230, 230, 250],
                    lavenderblush: [255, 240, 245],
                    lawngreen: [124, 252, 0],
                    lemonchiffon: [255, 250, 205],
                    lightblue: [173, 216, 230],
                    lightcoral: [240, 128, 128],
                    lightcyan: [224, 255, 255],
                    lightgoldenrodyellow: [250, 250, 210],
                    lightgray: [211, 211, 211],
                    lightgreen: [144, 238, 144],
                    lightgrey: [211, 211, 211],
                    lightpink: [255, 182, 193],
                    lightsalmon: [255, 160, 122],
                    lightseagreen: [32, 178, 170],
                    lightskyblue: [135, 206, 250],
                    lightslategray: [119, 136, 153],
                    lightslategrey: [119, 136, 153],
                    lightsteelblue: [176, 196, 222],
                    lightyellow: [255, 255, 224],
                    lime: [0, 255, 0],
                    limegreen: [50, 205, 50],
                    linen: [250, 240, 230],
                    magenta: [255, 0, 255],
                    maroon: [128, 0, 0],
                    mediumaquamarine: [102, 205, 170],
                    mediumblue: [0, 0, 205],
                    mediumorchid: [186, 85, 211],
                    mediumpurple: [147, 112, 219],
                    mediumseagreen: [60, 179, 113],
                    mediumslateblue: [123, 104, 238],
                    mediumspringgreen: [0, 250, 154],
                    mediumturquoise: [72, 209, 204],
                    mediumvioletred: [199, 21, 133],
                    midnightblue: [25, 25, 112],
                    mintcream: [245, 255, 250],
                    mistyrose: [255, 228, 225],
                    moccasin: [255, 228, 181],
                    navajowhite: [255, 222, 173],
                    navy: [0, 0, 128],
                    oldlace: [253, 245, 230],
                    olive: [128, 128, 0],
                    olivedrab: [107, 142, 35],
                    orange: [255, 165, 0],
                    orangered: [255, 69, 0],
                    orchid: [218, 112, 214],
                    palegoldenrod: [238, 232, 170],
                    palegreen: [152, 251, 152],
                    paleturquoise: [175, 238, 238],
                    palevioletred: [219, 112, 147],
                    papayawhip: [255, 239, 213],
                    peachpuff: [255, 218, 185],
                    peru: [205, 133, 63],
                    pink: [255, 192, 203],
                    plum: [221, 160, 221],
                    powderblue: [176, 224, 230],
                    purple: [128, 0, 128],
                    rebeccapurple: [102, 51, 153],
                    red: [255, 0, 0],
                    rosybrown: [188, 143, 143],
                    royalblue: [65, 105, 225],
                    saddlebrown: [139, 69, 19],
                    salmon: [250, 128, 114],
                    sandybrown: [244, 164, 96],
                    seagreen: [46, 139, 87],
                    seashell: [255, 245, 238],
                    sienna: [160, 82, 45],
                    silver: [192, 192, 192],
                    skyblue: [135, 206, 235],
                    slateblue: [106, 90, 205],
                    slategray: [112, 128, 144],
                    slategrey: [112, 128, 144],
                    snow: [255, 250, 250],
                    springgreen: [0, 255, 127],
                    steelblue: [70, 130, 180],
                    tan: [210, 180, 140],
                    teal: [0, 128, 128],
                    thistle: [216, 191, 216],
                    tomato: [255, 99, 71],
                    turquoise: [64, 224, 208],
                    violet: [238, 130, 238],
                    wheat: [245, 222, 179],
                    white: [255, 255, 255],
                    whitesmoke: [245, 245, 245],
                    yellow: [255, 255, 0],
                    yellowgreen: [154, 205, 50]
                },
                k = {};
            for (var D in Y) k[JSON.stringify(Y[D])] = D
        },
        tGlX: function(e, t, a) {
            ! function(e) {
                "use strict";

                function t(e, t, a, n) {
                    var i = {
                        m: ["eine Minute", "einer Minute"],
                        h: ["eine Stunde", "einer Stunde"],
                        d: ["ein Tag", "einem Tag"],
                        dd: [e + " Tage", e + " Tagen"],
                        M: ["ein Monat", "einem Monat"],
                        MM: [e + " Monate", e + " Monaten"],
                        y: ["ein Jahr", "einem Jahr"],
                        yy: [e + " Jahre", e + " Jahren"]
                    };
                    return t ? i[a][0] : i[a][1]
                }
                e.defineLocale("de", {
                    months: "Januar_Februar_M\xe4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                    monthsShort: "Jan._Feb._M\xe4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
                    weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
                    weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY HH:mm",
                        LLLL: "dddd, D. MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[heute um] LT [Uhr]",
                        sameElse: "L",
                        nextDay: "[morgen um] LT [Uhr]",
                        nextWeek: "dddd [um] LT [Uhr]",
                        lastDay: "[gestern um] LT [Uhr]",
                        lastWeek: "[letzten] dddd [um] LT [Uhr]"
                    },
                    relativeTime: {
                        future: "in %s",
                        past: "vor %s",
                        s: "ein paar Sekunden",
                        ss: "%d Sekunden",
                        m: t,
                        mm: "%d Minuten",
                        h: t,
                        hh: "%d Stunden",
                        d: t,
                        dd: t,
                        M: t,
                        MM: t,
                        y: t,
                        yy: t
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(a("wd/R"))
        },
        tT3J: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("tzm-latn", {
                    months: "innayr_br\u02e4ayr\u02e4_mar\u02e4s\u02e4_ibrir_mayyw_ywnyw_ywlywz_\u0263w\u0161t_\u0161wtanbir_kt\u02e4wbr\u02e4_nwwanbir_dwjnbir".split("_"),
                    monthsShort: "innayr_br\u02e4ayr\u02e4_mar\u02e4s\u02e4_ibrir_mayyw_ywnyw_ywlywz_\u0263w\u0161t_\u0161wtanbir_kt\u02e4wbr\u02e4_nwwanbir_dwjnbir".split("_"),
                    weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asi\u1e0dyas".split("_"),
                    weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asi\u1e0dyas".split("_"),
                    weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asi\u1e0dyas".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[asdkh g] LT",
                        nextDay: "[aska g] LT",
                        nextWeek: "dddd [g] LT",
                        lastDay: "[assant g] LT",
                        lastWeek: "dddd [g] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "dadkh s yan %s",
                        past: "yan %s",
                        s: "imik",
                        ss: "%d imik",
                        m: "minu\u1e0d",
                        mm: "%d minu\u1e0d",
                        h: "sa\u025ba",
                        hh: "%d tassa\u025bin",
                        d: "ass",
                        dd: "%d ossan",
                        M: "ayowr",
                        MM: "%d iyyirn",
                        y: "asgas",
                        yy: "%d isgasn"
                    },
                    week: {
                        dow: 6,
                        doy: 12
                    }
                })
            }(a("wd/R"))
        },
        tUCv: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("jv", {
                    months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
                    monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
                    weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
                    weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
                    weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
                    longDateFormat: {
                        LT: "HH.mm",
                        LTS: "HH.mm.ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY [pukul] HH.mm",
                        LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
                    },
                    meridiemParse: /enjing|siyang|sonten|ndalu/,
                    meridiemHour: function(e, t) {
                        return 12 === e && (e = 0), "enjing" === t ? e : "siyang" === t ? e >= 11 ? e : e + 12 : "sonten" === t || "ndalu" === t ? e + 12 : void 0
                    },
                    meridiem: function(e, t, a) {
                        return e < 11 ? "enjing" : e < 15 ? "siyang" : e < 19 ? "sonten" : "ndalu"
                    },
                    calendar: {
                        sameDay: "[Dinten puniko pukul] LT",
                        nextDay: "[Mbenjang pukul] LT",
                        nextWeek: "dddd [pukul] LT",
                        lastDay: "[Kala wingi pukul] LT",
                        lastWeek: "dddd [kepengker pukul] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "wonten ing %s",
                        past: "%s ingkang kepengker",
                        s: "sawetawis detik",
                        ss: "%d detik",
                        m: "setunggal menit",
                        mm: "%d menit",
                        h: "setunggal jam",
                        hh: "%d jam",
                        d: "sedinten",
                        dd: "%d dinten",
                        M: "sewulan",
                        MM: "%d wulan",
                        y: "setaun",
                        yy: "%d taun"
                    },
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(a("wd/R"))
        },
        tjFV: function(e, t, a) {
            "use strict";
            var n = a("CDJp"),
                i = a("RDha"),
                r = a("fELs");
            e.exports = function(e) {
                e.scaleService = {
                    constructors: {},
                    defaults: {},
                    registerScaleType: function(e, t, a) {
                        this.constructors[e] = t, this.defaults[e] = i.clone(a)
                    },
                    getScaleConstructor: function(e) {
                        return this.constructors.hasOwnProperty(e) ? this.constructors[e] : void 0
                    },
                    getScaleDefaults: function(e) {
                        return this.defaults.hasOwnProperty(e) ? i.merge({}, [n.scale, this.defaults[e]]) : {}
                    },
                    updateScaleDefaults: function(e, t) {
                        this.defaults.hasOwnProperty(e) && (this.defaults[e] = i.extend(this.defaults[e], t))
                    },
                    addScalesToLayout: function(e) {
                        i.each(e.scales, function(t) {
                            t.fullWidth = t.options.fullWidth, t.position = t.options.position, t.weight = t.options.weight, r.addBox(e, t)
                        })
                    }
                }
            }
        },
        u0Op: function(e, t, a) {
            "use strict";
            var n = a("TC34"),
                i = {
                    linear: function(e) {
                        return e
                    },
                    easeInQuad: function(e) {
                        return e * e
                    },
                    easeOutQuad: function(e) {
                        return -e * (e - 2)
                    },
                    easeInOutQuad: function(e) {
                        return (e /= .5) < 1 ? .5 * e * e : -.5 * (--e * (e - 2) - 1)
                    },
                    easeInCubic: function(e) {
                        return e * e * e
                    },
                    easeOutCubic: function(e) {
                        return (e -= 1) * e * e + 1
                    },
                    easeInOutCubic: function(e) {
                        return (e /= .5) < 1 ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2)
                    },
                    easeInQuart: function(e) {
                        return e * e * e * e
                    },
                    easeOutQuart: function(e) {
                        return -((e -= 1) * e * e * e - 1)
                    },
                    easeInOutQuart: function(e) {
                        return (e /= .5) < 1 ? .5 * e * e * e * e : -.5 * ((e -= 2) * e * e * e - 2)
                    },
                    easeInQuint: function(e) {
                        return e * e * e * e * e
                    },
                    easeOutQuint: function(e) {
                        return (e -= 1) * e * e * e * e + 1
                    },
                    easeInOutQuint: function(e) {
                        return (e /= .5) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2)
                    },
                    easeInSine: function(e) {
                        return 1 - Math.cos(e * (Math.PI / 2))
                    },
                    easeOutSine: function(e) {
                        return Math.sin(e * (Math.PI / 2))
                    },
                    easeInOutSine: function(e) {
                        return -.5 * (Math.cos(Math.PI * e) - 1)
                    },
                    easeInExpo: function(e) {
                        return 0 === e ? 0 : Math.pow(2, 10 * (e - 1))
                    },
                    easeOutExpo: function(e) {
                        return 1 === e ? 1 : 1 - Math.pow(2, -10 * e)
                    },
                    easeInOutExpo: function(e) {
                        return 0 === e ? 0 : 1 === e ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * --e))
                    },
                    easeInCirc: function(e) {
                        return e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1)
                    },
                    easeOutCirc: function(e) {
                        return Math.sqrt(1 - (e -= 1) * e)
                    },
                    easeInOutCirc: function(e) {
                        return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
                    },
                    easeInElastic: function(e) {
                        var t = 1.70158,
                            a = 0,
                            n = 1;
                        return 0 === e ? 0 : 1 === e ? 1 : (a || (a = .3), n < 1 ? (n = 1, t = a / 4) : t = a / (2 * Math.PI) * Math.asin(1 / n), -n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / a))
                    },
                    easeOutElastic: function(e) {
                        var t = 1.70158,
                            a = 0,
                            n = 1;
                        return 0 === e ? 0 : 1 === e ? 1 : (a || (a = .3), n < 1 ? (n = 1, t = a / 4) : t = a / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / a) + 1)
                    },
                    easeInOutElastic: function(e) {
                        var t = 1.70158,
                            a = 0,
                            n = 1;
                        return 0 === e ? 0 : 2 == (e /= .5) ? 1 : (a || (a = .45), n < 1 ? (n = 1, t = a / 4) : t = a / (2 * Math.PI) * Math.asin(1 / n), e < 1 ? n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / a) * -.5 : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / a) * .5 + 1)
                    },
                    easeInBack: function(e) {
                        var t = 1.70158;
                        return e * e * ((t + 1) * e - t)
                    },
                    easeOutBack: function(e) {
                        var t = 1.70158;
                        return (e -= 1) * e * ((t + 1) * e + t) + 1
                    },
                    easeInOutBack: function(e) {
                        var t = 1.70158;
                        return (e /= .5) < 1 ? e * e * ((1 + (t *= 1.525)) * e - t) * .5 : .5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2)
                    },
                    easeInBounce: function(e) {
                        return 1 - i.easeOutBounce(1 - e)
                    },
                    easeOutBounce: function(e) {
                        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
                    },
                    easeInOutBounce: function(e) {
                        return e < .5 ? .5 * i.easeInBounce(2 * e) : .5 * i.easeOutBounce(2 * e - 1) + .5
                    }
                };
            e.exports = {
                effects: i
            }, n.easingEffects = i
        },
        u3GI: function(e, t, a) {
            ! function(e) {
                "use strict";

                function t(e, t, a, n) {
                    var i = {
                        m: ["eine Minute", "einer Minute"],
                        h: ["eine Stunde", "einer Stunde"],
                        d: ["ein Tag", "einem Tag"],
                        dd: [e + " Tage", e + " Tagen"],
                        M: ["ein Monat", "einem Monat"],
                        MM: [e + " Monate", e + " Monaten"],
                        y: ["ein Jahr", "einem Jahr"],
                        yy: [e + " Jahre", e + " Jahren"]
                    };
                    return t ? i[a][0] : i[a][1]
                }
                e.defineLocale("de-ch", {
                    months: "Januar_Februar_M\xe4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                    monthsShort: "Jan._Feb._M\xe4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
                    weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                    weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY HH:mm",
                        LLLL: "dddd, D. MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[heute um] LT [Uhr]",
                        sameElse: "L",
                        nextDay: "[morgen um] LT [Uhr]",
                        nextWeek: "dddd [um] LT [Uhr]",
                        lastDay: "[gestern um] LT [Uhr]",
                        lastWeek: "[letzten] dddd [um] LT [Uhr]"
                    },
                    relativeTime: {
                        future: "in %s",
                        past: "vor %s",
                        s: "ein paar Sekunden",
                        ss: "%d Sekunden",
                        m: t,
                        mm: "%d Minuten",
                        h: t,
                        hh: "%d Stunden",
                        d: t,
                        dd: t,
                        M: t,
                        MM: t,
                        y: t,
                        yy: t
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(a("wd/R"))
        },
        uEye: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("nn", {
                    months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
                    monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
                    weekdays: "sundag_m\xe5ndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
                    weekdaysShort: "sun_m\xe5n_tys_ons_tor_fre_lau".split("_"),
                    weekdaysMin: "su_m\xe5_ty_on_to_fr_l\xf8".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY [kl.] H:mm",
                        LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
                    },
                    calendar: {
                        sameDay: "[I dag klokka] LT",
                        nextDay: "[I morgon klokka] LT",
                        nextWeek: "dddd [klokka] LT",
                        lastDay: "[I g\xe5r klokka] LT",
                        lastWeek: "[F\xf8reg\xe5ande] dddd [klokka] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "om %s",
                        past: "%s sidan",
                        s: "nokre sekund",
                        ss: "%d sekund",
                        m: "eit minutt",
                        mm: "%d minutt",
                        h: "ein time",
                        hh: "%d timar",
                        d: "ein dag",
                        dd: "%d dagar",
                        M: "ein m\xe5nad",
                        MM: "%d m\xe5nader",
                        y: "eit \xe5r",
                        yy: "%d \xe5r"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(a("wd/R"))
        },
        uXwI: function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = {
                    ss: "sekundes_sekund\u0113m_sekunde_sekundes".split("_"),
                    m: "min\u016btes_min\u016bt\u0113m_min\u016bte_min\u016btes".split("_"),
                    mm: "min\u016btes_min\u016bt\u0113m_min\u016bte_min\u016btes".split("_"),
                    h: "stundas_stund\u0101m_stunda_stundas".split("_"),
                    hh: "stundas_stund\u0101m_stunda_stundas".split("_"),
                    d: "dienas_dien\u0101m_diena_dienas".split("_"),
                    dd: "dienas_dien\u0101m_diena_dienas".split("_"),
                    M: "m\u0113ne\u0161a_m\u0113ne\u0161iem_m\u0113nesis_m\u0113ne\u0161i".split("_"),
                    MM: "m\u0113ne\u0161a_m\u0113ne\u0161iem_m\u0113nesis_m\u0113ne\u0161i".split("_"),
                    y: "gada_gadiem_gads_gadi".split("_"),
                    yy: "gada_gadiem_gads_gadi".split("_")
                };

                function a(e, t, a) {
                    return a ? t % 10 == 1 && t % 100 != 11 ? e[2] : e[3] : t % 10 == 1 && t % 100 != 11 ? e[0] : e[1]
                }

                function n(e, n, i) {
                    return e + " " + a(t[i], e, n)
                }

                function i(e, n, i) {
                    return a(t[i], e, n)
                }
                e.defineLocale("lv", {
                    months: "janv\u0101ris_febru\u0101ris_marts_apr\u012blis_maijs_j\u016bnijs_j\u016blijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
                    monthsShort: "jan_feb_mar_apr_mai_j\u016bn_j\u016bl_aug_sep_okt_nov_dec".split("_"),
                    weekdays: "sv\u0113tdiena_pirmdiena_otrdiena_tre\u0161diena_ceturtdiena_piektdiena_sestdiena".split("_"),
                    weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
                    weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY.",
                        LL: "YYYY. [gada] D. MMMM",
                        LLL: "YYYY. [gada] D. MMMM, HH:mm",
                        LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
                    },
                    calendar: {
                        sameDay: "[\u0160odien pulksten] LT",
                        nextDay: "[R\u012bt pulksten] LT",
                        nextWeek: "dddd [pulksten] LT",
                        lastDay: "[Vakar pulksten] LT",
                        lastWeek: "[Pag\u0101ju\u0161\u0101] dddd [pulksten] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "p\u0113c %s",
                        past: "pirms %s",
                        s: function(e, t) {
                            return t ? "da\u017eas sekundes" : "da\u017e\u0101m sekund\u0113m"
                        },
                        ss: n,
                        m: i,
                        mm: n,
                        h: i,
                        hh: n,
                        d: i,
                        dd: n,
                        M: i,
                        MM: n,
                        y: i,
                        yy: n
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(a("wd/R"))
        },
        uxXc: function(e, t, a) {
            var n = a("t1N5"),
                i = function() {
                    return new l
                };
            for (var r in n) {
                i[r + "Raw"] = function(e) {
                    return function(t) {
                        return "number" == typeof t && (t = Array.prototype.slice.call(arguments)), n[e](t)
                    }
                }(r);
                var s = /(\w+)2(\w+)/.exec(r),
                    o = s[1],
                    d = s[2];
                (i[o] = i[o] || {})[d] = i[r] = function(e) {
                    return function(t) {
                        "number" == typeof t && (t = Array.prototype.slice.call(arguments));
                        var a = n[e](t);
                        if ("string" == typeof a || void 0 === a) return a;
                        for (var i = 0; i < a.length; i++) a[i] = Math.round(a[i]);
                        return a
                    }
                }(r)
            }
            var l = function() {
                this.convs = {}
            };
            l.prototype.routeSpace = function(e, t) {
                var a = t[0];
                return void 0 === a ? this.getValues(e) : ("number" == typeof a && (a = Array.prototype.slice.call(t)), this.setValues(e, a))
            }, l.prototype.setValues = function(e, t) {
                return this.space = e, this.convs = {}, this.convs[e] = t, this
            }, l.prototype.getValues = function(e) {
                var t = this.convs[e];
                if (!t) {
                    var a = this.space;
                    t = i[a][e](this.convs[a]), this.convs[e] = t
                }
                return t
            }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function(e) {
                l.prototype[e] = function(t) {
                    return this.routeSpace(e, arguments)
                }
            }), e.exports = i
        },
        vpM6: function(e, t, a) {
            "use strict";
            var n = a("CDJp"),
                i = a("vvH+"),
                r = a("RDha");
            n._set("global", {
                plugins: {
                    filler: {
                        propagate: !0
                    }
                }
            });
            var s = {
                dataset: function(e) {
                    var t = e.fill,
                        a = e.chart,
                        n = a.getDatasetMeta(t),
                        i = n && a.isDatasetVisible(t) && n.dataset._children || [],
                        r = i.length || 0;
                    return r ? function(e, t) {
                        return t < r && i[t]._view || null
                    } : null
                },
                boundary: function(e) {
                    var t = e.boundary,
                        a = t ? t.x : null,
                        n = t ? t.y : null;
                    return function(e) {
                        return {
                            x: null === a ? e.x : a,
                            y: null === n ? e.y : n
                        }
                    }
                }
            };

            function o(e, t, a) {
                var n, i = e._model || {},
                    r = i.fill;
                if (void 0 === r && (r = !!i.backgroundColor), !1 === r || null === r) return !1;
                if (!0 === r) return "origin";
                if (n = parseFloat(r, 10), isFinite(n) && Math.floor(n) === n) return "-" !== r[0] && "+" !== r[0] || (n = t + n), !(n === t || n < 0 || n >= a) && n;
                switch (r) {
                    case "bottom":
                        return "start";
                    case "top":
                        return "end";
                    case "zero":
                        return "origin";
                    case "origin":
                    case "start":
                    case "end":
                        return r;
                    default:
                        return !1
                }
            }

            function d(e) {
                var t, a = e.el._model || {},
                    n = e.el._scale || {},
                    i = e.fill,
                    r = null;
                if (isFinite(i)) return null;
                if ("start" === i ? r = void 0 === a.scaleBottom ? n.bottom : a.scaleBottom : "end" === i ? r = void 0 === a.scaleTop ? n.top : a.scaleTop : void 0 !== a.scaleZero ? r = a.scaleZero : n.getBasePosition ? r = n.getBasePosition() : n.getBasePixel && (r = n.getBasePixel()), void 0 !== r && null !== r) {
                    if (void 0 !== r.x && void 0 !== r.y) return r;
                    if ("number" == typeof r && isFinite(r)) return {
                        x: (t = n.isHorizontal()) ? r : null,
                        y: t ? null : r
                    }
                }
                return null
            }

            function l(e, t, a) {
                var n, i = e[t].fill,
                    r = [t];
                if (!a) return i;
                for (; !1 !== i && -1 === r.indexOf(i);) {
                    if (!isFinite(i)) return i;
                    if (!(n = e[i])) return !1;
                    if (n.visible) return i;
                    r.push(i), i = n.fill
                }
                return !1
            }

            function u(e) {
                var t = e.fill,
                    a = "dataset";
                return !1 === t ? null : (isFinite(t) || (a = "boundary"), s[a](e))
            }

            function _(e) {
                return e && !e.skip
            }

            function m(e, t, a, n, i) {
                var s;
                if (n && i) {
                    for (e.moveTo(t[0].x, t[0].y), s = 1; s < n; ++s) r.canvas.lineTo(e, t[s - 1], t[s]);
                    for (e.lineTo(a[i - 1].x, a[i - 1].y), s = i - 1; s > 0; --s) r.canvas.lineTo(e, a[s], a[s - 1], !0)
                }
            }
            e.exports = {
                id: "filler",
                afterDatasetsUpdate: function(e, t) {
                    var a, n, r, s, _ = (e.data.datasets || []).length,
                        m = t.propagate,
                        h = [];
                    for (n = 0; n < _; ++n) s = null, (r = (a = e.getDatasetMeta(n)).dataset) && r._model && r instanceof i.Line && (s = {
                        visible: e.isDatasetVisible(n),
                        fill: o(r, n, _),
                        chart: e,
                        el: r
                    }), a.$filler = s, h.push(s);
                    for (n = 0; n < _; ++n)(s = h[n]) && (s.fill = l(h, n, m), s.boundary = d(s), s.mapper = u(s))
                },
                beforeDatasetDraw: function(e, t) {
                    var a = t.meta.$filler;
                    if (a) {
                        var i = e.ctx,
                            s = a.el,
                            o = s._view,
                            d = s._children || [],
                            l = a.mapper,
                            u = o.backgroundColor || n.global.defaultColor;
                        l && u && d.length && (r.canvas.clipArea(i, e.chartArea), function(e, t, a, n, i, r) {
                            var s, o, d, l, u, h, c, f = t.length,
                                p = n.spanGaps,
                                M = [],
                                y = [],
                                g = 0,
                                L = 0;
                            for (e.beginPath(), s = 0, o = f + !!r; s < o; ++s) u = a(l = t[d = s % f]._view, d, n), h = _(l), c = _(u), h && c ? (g = M.push(l), L = y.push(u)) : g && L && (p ? (h && M.push(l), c && y.push(u)) : (m(e, M, y, g, L), g = L = 0, M = [], y = []));
                            m(e, M, y, g, L), e.closePath(), e.fillStyle = i, e.fill()
                        }(i, d, l, o, u, s._loop), r.canvas.unclipArea(i))
                    }
                }
            }
        },
        "vvH+": function(e, t, a) {
            "use strict";
            e.exports = {}, e.exports.Arc = a("X8CM"), e.exports.Line = a("UqmZ"), e.exports.Point = a("OXbD"), e.exports.Rectangle = a("2UWG")
        },
        wQk9: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("tzm", {
                    months: "\u2d49\u2d4f\u2d4f\u2d30\u2d62\u2d54_\u2d31\u2d55\u2d30\u2d62\u2d55_\u2d4e\u2d30\u2d55\u2d5a_\u2d49\u2d31\u2d54\u2d49\u2d54_\u2d4e\u2d30\u2d62\u2d62\u2d53_\u2d62\u2d53\u2d4f\u2d62\u2d53_\u2d62\u2d53\u2d4d\u2d62\u2d53\u2d63_\u2d56\u2d53\u2d5b\u2d5c_\u2d5b\u2d53\u2d5c\u2d30\u2d4f\u2d31\u2d49\u2d54_\u2d3d\u2d5f\u2d53\u2d31\u2d55_\u2d4f\u2d53\u2d61\u2d30\u2d4f\u2d31\u2d49\u2d54_\u2d37\u2d53\u2d4a\u2d4f\u2d31\u2d49\u2d54".split("_"),
                    monthsShort: "\u2d49\u2d4f\u2d4f\u2d30\u2d62\u2d54_\u2d31\u2d55\u2d30\u2d62\u2d55_\u2d4e\u2d30\u2d55\u2d5a_\u2d49\u2d31\u2d54\u2d49\u2d54_\u2d4e\u2d30\u2d62\u2d62\u2d53_\u2d62\u2d53\u2d4f\u2d62\u2d53_\u2d62\u2d53\u2d4d\u2d62\u2d53\u2d63_\u2d56\u2d53\u2d5b\u2d5c_\u2d5b\u2d53\u2d5c\u2d30\u2d4f\u2d31\u2d49\u2d54_\u2d3d\u2d5f\u2d53\u2d31\u2d55_\u2d4f\u2d53\u2d61\u2d30\u2d4f\u2d31\u2d49\u2d54_\u2d37\u2d53\u2d4a\u2d4f\u2d31\u2d49\u2d54".split("_"),
                    weekdays: "\u2d30\u2d59\u2d30\u2d4e\u2d30\u2d59_\u2d30\u2d62\u2d4f\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4f\u2d30\u2d59_\u2d30\u2d3d\u2d54\u2d30\u2d59_\u2d30\u2d3d\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4e\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d39\u2d62\u2d30\u2d59".split("_"),
                    weekdaysShort: "\u2d30\u2d59\u2d30\u2d4e\u2d30\u2d59_\u2d30\u2d62\u2d4f\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4f\u2d30\u2d59_\u2d30\u2d3d\u2d54\u2d30\u2d59_\u2d30\u2d3d\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4e\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d39\u2d62\u2d30\u2d59".split("_"),
                    weekdaysMin: "\u2d30\u2d59\u2d30\u2d4e\u2d30\u2d59_\u2d30\u2d62\u2d4f\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4f\u2d30\u2d59_\u2d30\u2d3d\u2d54\u2d30\u2d59_\u2d30\u2d3d\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4e\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d39\u2d62\u2d30\u2d59".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[\u2d30\u2d59\u2d37\u2d45 \u2d34] LT",
                        nextDay: "[\u2d30\u2d59\u2d3d\u2d30 \u2d34] LT",
                        nextWeek: "dddd [\u2d34] LT",
                        lastDay: "[\u2d30\u2d5a\u2d30\u2d4f\u2d5c \u2d34] LT",
                        lastWeek: "dddd [\u2d34] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "\u2d37\u2d30\u2d37\u2d45 \u2d59 \u2d62\u2d30\u2d4f %s",
                        past: "\u2d62\u2d30\u2d4f %s",
                        s: "\u2d49\u2d4e\u2d49\u2d3d",
                        ss: "%d \u2d49\u2d4e\u2d49\u2d3d",
                        m: "\u2d4e\u2d49\u2d4f\u2d53\u2d3a",
                        mm: "%d \u2d4e\u2d49\u2d4f\u2d53\u2d3a",
                        h: "\u2d59\u2d30\u2d44\u2d30",
                        hh: "%d \u2d5c\u2d30\u2d59\u2d59\u2d30\u2d44\u2d49\u2d4f",
                        d: "\u2d30\u2d59\u2d59",
                        dd: "%d o\u2d59\u2d59\u2d30\u2d4f",
                        M: "\u2d30\u2d62o\u2d53\u2d54",
                        MM: "%d \u2d49\u2d62\u2d62\u2d49\u2d54\u2d4f",
                        y: "\u2d30\u2d59\u2d33\u2d30\u2d59",
                        yy: "%d \u2d49\u2d59\u2d33\u2d30\u2d59\u2d4f"
                    },
                    week: {
                        dow: 6,
                        doy: 12
                    }
                })
            }(a("wd/R"))
        },
        "wd/R": function(e, t, a) {
            (function(e) {
                e.exports = function() {
                    "use strict";
                    var t, n;

                    function i() {
                        return t.apply(null, arguments)
                    }

                    function r(e) {
                        return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
                    }

                    function s(e) {
                        return null != e && "[object Object]" === Object.prototype.toString.call(e)
                    }

                    function o(e) {
                        return void 0 === e
                    }

                    function d(e) {
                        return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
                    }

                    function l(e) {
                        return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
                    }

                    function u(e, t) {
                        var a, n = [];
                        for (a = 0; a < e.length; ++a) n.push(t(e[a], a));
                        return n
                    }

                    function _(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }

                    function m(e, t) {
                        for (var a in t) _(t, a) && (e[a] = t[a]);
                        return _(t, "toString") && (e.toString = t.toString), _(t, "valueOf") && (e.valueOf = t.valueOf), e
                    }

                    function h(e, t, a, n) {
                        return Tt(e, t, a, n, !0).utc()
                    }

                    function c(e) {
                        return null == e._pf && (e._pf = {
                            empty: !1,
                            unusedTokens: [],
                            unusedInput: [],
                            overflow: -2,
                            charsLeftOver: 0,
                            nullInput: !1,
                            invalidMonth: null,
                            invalidFormat: !1,
                            userInvalidated: !1,
                            iso: !1,
                            parsedDateParts: [],
                            meridiem: null,
                            rfc2822: !1,
                            weekdayMismatch: !1
                        }), e._pf
                    }

                    function f(e) {
                        if (null == e._isValid) {
                            var t = c(e),
                                a = n.call(t.parsedDateParts, function(e) {
                                    return null != e
                                }),
                                i = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && a);
                            if (e._strict && (i = i && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return i;
                            e._isValid = i
                        }
                        return e._isValid
                    }

                    function p(e) {
                        var t = h(NaN);
                        return null != e ? m(c(t), e) : c(t).userInvalidated = !0, t
                    }
                    n = Array.prototype.some ? Array.prototype.some : function(e) {
                        for (var t = Object(this), a = t.length >>> 0, n = 0; n < a; n++)
                            if (n in t && e.call(this, t[n], n, t)) return !0;
                        return !1
                    };
                    var M = i.momentProperties = [];

                    function y(e, t) {
                        var a, n, i;
                        if (o(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), o(t._i) || (e._i = t._i), o(t._f) || (e._f = t._f), o(t._l) || (e._l = t._l), o(t._strict) || (e._strict = t._strict), o(t._tzm) || (e._tzm = t._tzm), o(t._isUTC) || (e._isUTC = t._isUTC), o(t._offset) || (e._offset = t._offset), o(t._pf) || (e._pf = c(t)), o(t._locale) || (e._locale = t._locale), M.length > 0)
                            for (a = 0; a < M.length; a++) o(i = t[n = M[a]]) || (e[n] = i);
                        return e
                    }
                    var g = !1;

                    function L(e) {
                        y(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === g && (g = !0, i.updateOffset(this), g = !1)
                    }

                    function v(e) {
                        return e instanceof L || null != e && null != e._isAMomentObject
                    }

                    function Y(e) {
                        return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
                    }

                    function k(e) {
                        var t = +e,
                            a = 0;
                        return 0 !== t && isFinite(t) && (a = Y(t)), a
                    }

                    function b(e, t, a) {
                        var n, i = Math.min(e.length, t.length),
                            r = Math.abs(e.length - t.length),
                            s = 0;
                        for (n = 0; n < i; n++)(a && e[n] !== t[n] || !a && k(e[n]) !== k(t[n])) && s++;
                        return s + r
                    }

                    function D(e) {
                        !1 === i.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
                    }

                    function w(e, t) {
                        var a = !0;
                        return m(function() {
                            if (null != i.deprecationHandler && i.deprecationHandler(null, e), a) {
                                for (var n, r = [], s = 0; s < arguments.length; s++) {
                                    if (n = "", "object" == typeof arguments[s]) {
                                        for (var o in n += "\n[" + s + "] ", arguments[0]) n += o + ": " + arguments[0][o] + ", ";
                                        n = n.slice(0, -2)
                                    } else n = arguments[s];
                                    r.push(n)
                                }
                                D(e + "\nArguments: " + Array.prototype.slice.call(r).join("") + "\n" + (new Error).stack), a = !1
                            }
                            return t.apply(this, arguments)
                        }, t)
                    }
                    var x, T = {};

                    function S(e, t) {
                        null != i.deprecationHandler && i.deprecationHandler(e, t), T[e] || (D(t), T[e] = !0)
                    }

                    function H(e) {
                        return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
                    }

                    function j(e, t) {
                        var a, n = m({}, e);
                        for (a in t) _(t, a) && (s(e[a]) && s(t[a]) ? (n[a] = {}, m(n[a], e[a]), m(n[a], t[a])) : null != t[a] ? n[a] = t[a] : delete n[a]);
                        for (a in e) _(e, a) && !_(t, a) && s(e[a]) && (n[a] = m({}, n[a]));
                        return n
                    }

                    function P(e) {
                        null != e && this.set(e)
                    }
                    i.suppressDeprecationWarnings = !1, i.deprecationHandler = null, x = Object.keys ? Object.keys : function(e) {
                        var t, a = [];
                        for (t in e) _(e, t) && a.push(t);
                        return a
                    };
                    var C = {};

                    function O(e, t) {
                        var a = e.toLowerCase();
                        C[a] = C[a + "s"] = C[t] = e
                    }

                    function A(e) {
                        return "string" == typeof e ? C[e] || C[e.toLowerCase()] : void 0
                    }

                    function W(e) {
                        var t, a, n = {};
                        for (a in e) _(e, a) && (t = A(a)) && (n[t] = e[a]);
                        return n
                    }
                    var F = {};

                    function R(e, t) {
                        F[e] = t
                    }

                    function E(e, t, a) {
                        var n = "" + Math.abs(e);
                        return (e >= 0 ? a ? "+" : "" : "-") + Math.pow(10, Math.max(0, t - n.length)).toString().substr(1) + n
                    }
                    var I = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
                        z = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
                        N = {},
                        B = {};

                    function V(e, t, a, n) {
                        var i = n;
                        "string" == typeof n && (i = function() {
                            return this[n]()
                        }), e && (B[e] = i), t && (B[t[0]] = function() {
                            return E(i.apply(this, arguments), t[1], t[2])
                        }), a && (B[a] = function() {
                            return this.localeData().ordinal(i.apply(this, arguments), e)
                        })
                    }

                    function J(e, t) {
                        return e.isValid() ? (t = U(t, e.localeData()), N[t] = N[t] || function(e) {
                            var t, a, n, i = e.match(I);
                            for (t = 0, a = i.length; t < a; t++) i[t] = B[i[t]] ? B[i[t]] : (n = i[t]).match(/\[[\s\S]/) ? n.replace(/^\[|\]$/g, "") : n.replace(/\\/g, "");
                            return function(t) {
                                var n, r = "";
                                for (n = 0; n < a; n++) r += H(i[n]) ? i[n].call(t, e) : i[n];
                                return r
                            }
                        }(t), N[t](e)) : e.localeData().invalidDate()
                    }

                    function U(e, t) {
                        var a = 5;

                        function n(e) {
                            return t.longDateFormat(e) || e
                        }
                        for (z.lastIndex = 0; a >= 0 && z.test(e);) e = e.replace(z, n), z.lastIndex = 0, a -= 1;
                        return e
                    }
                    var G = /\d/,
                        q = /\d\d/,
                        K = /\d{3}/,
                        Z = /\d{4}/,
                        Q = /[+-]?\d{6}/,
                        X = /\d\d?/,
                        $ = /\d\d\d\d?/,
                        ee = /\d\d\d\d\d\d?/,
                        te = /\d{1,3}/,
                        ae = /\d{1,4}/,
                        ne = /[+-]?\d{1,6}/,
                        ie = /\d+/,
                        re = /[+-]?\d+/,
                        se = /Z|[+-]\d\d:?\d\d/gi,
                        oe = /Z|[+-]\d\d(?::?\d\d)?/gi,
                        de = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
                        le = {};

                    function ue(e, t, a) {
                        le[e] = H(t) ? t : function(e, n) {
                            return e && a ? a : t
                        }
                    }

                    function _e(e, t) {
                        return _(le, e) ? le[e](t._strict, t._locale) : new RegExp(me(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, a, n, i) {
                            return t || a || n || i
                        })))
                    }

                    function me(e) {
                        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
                    }
                    var he = {};

                    function ce(e, t) {
                        var a, n = t;
                        for ("string" == typeof e && (e = [e]), d(t) && (n = function(e, a) {
                                a[t] = k(e)
                            }), a = 0; a < e.length; a++) he[e[a]] = n
                    }

                    function fe(e, t) {
                        ce(e, function(e, a, n, i) {
                            n._w = n._w || {}, t(e, n._w, n, i)
                        })
                    }

                    function pe(e, t, a) {
                        null != t && _(he, e) && he[e](t, a._a, a, e)
                    }
                    var Me = 0,
                        ye = 1,
                        ge = 2,
                        Le = 3,
                        ve = 4,
                        Ye = 5,
                        ke = 6,
                        be = 7,
                        De = 8;

                    function we(e) {
                        return xe(e) ? 366 : 365
                    }

                    function xe(e) {
                        return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
                    }
                    V("Y", 0, 0, function() {
                        var e = this.year();
                        return e <= 9999 ? "" + e : "+" + e
                    }), V(0, ["YY", 2], 0, function() {
                        return this.year() % 100
                    }), V(0, ["YYYY", 4], 0, "year"), V(0, ["YYYYY", 5], 0, "year"), V(0, ["YYYYYY", 6, !0], 0, "year"), O("year", "y"), R("year", 1), ue("Y", re), ue("YY", X, q), ue("YYYY", ae, Z), ue("YYYYY", ne, Q), ue("YYYYYY", ne, Q), ce(["YYYYY", "YYYYYY"], Me), ce("YYYY", function(e, t) {
                        t[Me] = 2 === e.length ? i.parseTwoDigitYear(e) : k(e)
                    }), ce("YY", function(e, t) {
                        t[Me] = i.parseTwoDigitYear(e)
                    }), ce("Y", function(e, t) {
                        t[Me] = parseInt(e, 10)
                    }), i.parseTwoDigitYear = function(e) {
                        return k(e) + (k(e) > 68 ? 1900 : 2e3)
                    };
                    var Te, Se = He("FullYear", !0);

                    function He(e, t) {
                        return function(a) {
                            return null != a ? (Pe(this, e, a), i.updateOffset(this, t), this) : je(this, e)
                        }
                    }

                    function je(e, t) {
                        return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
                    }

                    function Pe(e, t, a) {
                        e.isValid() && !isNaN(a) && ("FullYear" === t && xe(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + t](a, e.month(), Ce(a, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + t](a))
                    }

                    function Ce(e, t) {
                        if (isNaN(e) || isNaN(t)) return NaN;
                        var a = (t % 12 + 12) % 12;
                        return e += (t - a) / 12, 1 === a ? xe(e) ? 29 : 28 : 31 - a % 7 % 2
                    }
                    Te = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
                        var t;
                        for (t = 0; t < this.length; ++t)
                            if (this[t] === e) return t;
                        return -1
                    }, V("M", ["MM", 2], "Mo", function() {
                        return this.month() + 1
                    }), V("MMM", 0, 0, function(e) {
                        return this.localeData().monthsShort(this, e)
                    }), V("MMMM", 0, 0, function(e) {
                        return this.localeData().months(this, e)
                    }), O("month", "M"), R("month", 8), ue("M", X), ue("MM", X, q), ue("MMM", function(e, t) {
                        return t.monthsShortRegex(e)
                    }), ue("MMMM", function(e, t) {
                        return t.monthsRegex(e)
                    }), ce(["M", "MM"], function(e, t) {
                        t[ye] = k(e) - 1
                    }), ce(["MMM", "MMMM"], function(e, t, a, n) {
                        var i = a._locale.monthsParse(e, n, a._strict);
                        null != i ? t[ye] = i : c(a).invalidMonth = e
                    });
                    var Oe = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
                        Ae = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                        We = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

                    function Fe(e, t) {
                        var a;
                        if (!e.isValid()) return e;
                        if ("string" == typeof t)
                            if (/^\d+$/.test(t)) t = k(t);
                            else if (!d(t = e.localeData().monthsParse(t))) return e;
                        return a = Math.min(e.date(), Ce(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, a), e
                    }

                    function Re(e) {
                        return null != e ? (Fe(this, e), i.updateOffset(this, !0), this) : je(this, "Month")
                    }
                    var Ee = de,
                        Ie = de;

                    function ze() {
                        function e(e, t) {
                            return t.length - e.length
                        }
                        var t, a, n = [],
                            i = [],
                            r = [];
                        for (t = 0; t < 12; t++) a = h([2e3, t]), n.push(this.monthsShort(a, "")), i.push(this.months(a, "")), r.push(this.months(a, "")), r.push(this.monthsShort(a, ""));
                        for (n.sort(e), i.sort(e), r.sort(e), t = 0; t < 12; t++) n[t] = me(n[t]), i[t] = me(i[t]);
                        for (t = 0; t < 24; t++) r[t] = me(r[t]);
                        this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + n.join("|") + ")", "i")
                    }

                    function Ne(e) {
                        var t = new Date(Date.UTC.apply(null, arguments));
                        return e < 100 && e >= 0 && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e), t
                    }

                    function Be(e, t, a) {
                        var n = 7 + t - a;
                        return -(7 + Ne(e, 0, n).getUTCDay() - t) % 7 + n - 1
                    }

                    function Ve(e, t, a, n, i) {
                        var r, s, o = 1 + 7 * (t - 1) + (7 + a - n) % 7 + Be(e, n, i);
                        return o <= 0 ? s = we(r = e - 1) + o : o > we(e) ? (r = e + 1, s = o - we(e)) : (r = e, s = o), {
                            year: r,
                            dayOfYear: s
                        }
                    }

                    function Je(e, t, a) {
                        var n, i, r = Be(e.year(), t, a),
                            s = Math.floor((e.dayOfYear() - r - 1) / 7) + 1;
                        return s < 1 ? n = s + Ue(i = e.year() - 1, t, a) : s > Ue(e.year(), t, a) ? (n = s - Ue(e.year(), t, a), i = e.year() + 1) : (i = e.year(), n = s), {
                            week: n,
                            year: i
                        }
                    }

                    function Ue(e, t, a) {
                        var n = Be(e, t, a),
                            i = Be(e + 1, t, a);
                        return (we(e) - n + i) / 7
                    }
                    V("w", ["ww", 2], "wo", "week"), V("W", ["WW", 2], "Wo", "isoWeek"), O("week", "w"), O("isoWeek", "W"), R("week", 5), R("isoWeek", 5), ue("w", X), ue("ww", X, q), ue("W", X), ue("WW", X, q), fe(["w", "ww", "W", "WW"], function(e, t, a, n) {
                        t[n.substr(0, 1)] = k(e)
                    }), V("d", 0, "do", "day"), V("dd", 0, 0, function(e) {
                        return this.localeData().weekdaysMin(this, e)
                    }), V("ddd", 0, 0, function(e) {
                        return this.localeData().weekdaysShort(this, e)
                    }), V("dddd", 0, 0, function(e) {
                        return this.localeData().weekdays(this, e)
                    }), V("e", 0, 0, "weekday"), V("E", 0, 0, "isoWeekday"), O("day", "d"), O("weekday", "e"), O("isoWeekday", "E"), R("day", 11), R("weekday", 11), R("isoWeekday", 11), ue("d", X), ue("e", X), ue("E", X), ue("dd", function(e, t) {
                        return t.weekdaysMinRegex(e)
                    }), ue("ddd", function(e, t) {
                        return t.weekdaysShortRegex(e)
                    }), ue("dddd", function(e, t) {
                        return t.weekdaysRegex(e)
                    }), fe(["dd", "ddd", "dddd"], function(e, t, a, n) {
                        var i = a._locale.weekdaysParse(e, n, a._strict);
                        null != i ? t.d = i : c(a).invalidWeekday = e
                    }), fe(["d", "e", "E"], function(e, t, a, n) {
                        t[n] = k(e)
                    });
                    var Ge = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                        qe = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                        Ke = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                        Ze = de,
                        Qe = de,
                        Xe = de;

                    function $e() {
                        function e(e, t) {
                            return t.length - e.length
                        }
                        var t, a, n, i, r, s = [],
                            o = [],
                            d = [],
                            l = [];
                        for (t = 0; t < 7; t++) a = h([2e3, 1]).day(t), n = this.weekdaysMin(a, ""), i = this.weekdaysShort(a, ""), r = this.weekdays(a, ""), s.push(n), o.push(i), d.push(r), l.push(n), l.push(i), l.push(r);
                        for (s.sort(e), o.sort(e), d.sort(e), l.sort(e), t = 0; t < 7; t++) o[t] = me(o[t]), d[t] = me(d[t]), l[t] = me(l[t]);
                        this._weekdaysRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + d.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + s.join("|") + ")", "i")
                    }

                    function et() {
                        return this.hours() % 12 || 12
                    }

                    function tt(e, t) {
                        V(e, 0, 0, function() {
                            return this.localeData().meridiem(this.hours(), this.minutes(), t)
                        })
                    }

                    function at(e, t) {
                        return t._meridiemParse
                    }
                    V("H", ["HH", 2], 0, "hour"), V("h", ["hh", 2], 0, et), V("k", ["kk", 2], 0, function() {
                        return this.hours() || 24
                    }), V("hmm", 0, 0, function() {
                        return "" + et.apply(this) + E(this.minutes(), 2)
                    }), V("hmmss", 0, 0, function() {
                        return "" + et.apply(this) + E(this.minutes(), 2) + E(this.seconds(), 2)
                    }), V("Hmm", 0, 0, function() {
                        return "" + this.hours() + E(this.minutes(), 2)
                    }), V("Hmmss", 0, 0, function() {
                        return "" + this.hours() + E(this.minutes(), 2) + E(this.seconds(), 2)
                    }), tt("a", !0), tt("A", !1), O("hour", "h"), R("hour", 13), ue("a", at), ue("A", at), ue("H", X), ue("h", X), ue("k", X), ue("HH", X, q), ue("hh", X, q), ue("kk", X, q), ue("hmm", $), ue("hmmss", ee), ue("Hmm", $), ue("Hmmss", ee), ce(["H", "HH"], Le), ce(["k", "kk"], function(e, t, a) {
                        var n = k(e);
                        t[Le] = 24 === n ? 0 : n
                    }), ce(["a", "A"], function(e, t, a) {
                        a._isPm = a._locale.isPM(e), a._meridiem = e
                    }), ce(["h", "hh"], function(e, t, a) {
                        t[Le] = k(e), c(a).bigHour = !0
                    }), ce("hmm", function(e, t, a) {
                        var n = e.length - 2;
                        t[Le] = k(e.substr(0, n)), t[ve] = k(e.substr(n)), c(a).bigHour = !0
                    }), ce("hmmss", function(e, t, a) {
                        var n = e.length - 4,
                            i = e.length - 2;
                        t[Le] = k(e.substr(0, n)), t[ve] = k(e.substr(n, 2)), t[Ye] = k(e.substr(i)), c(a).bigHour = !0
                    }), ce("Hmm", function(e, t, a) {
                        var n = e.length - 2;
                        t[Le] = k(e.substr(0, n)), t[ve] = k(e.substr(n))
                    }), ce("Hmmss", function(e, t, a) {
                        var n = e.length - 4,
                            i = e.length - 2;
                        t[Le] = k(e.substr(0, n)), t[ve] = k(e.substr(n, 2)), t[Ye] = k(e.substr(i))
                    });
                    var nt, it = He("Hours", !0),
                        rt = {
                            calendar: {
                                sameDay: "[Today at] LT",
                                nextDay: "[Tomorrow at] LT",
                                nextWeek: "dddd [at] LT",
                                lastDay: "[Yesterday at] LT",
                                lastWeek: "[Last] dddd [at] LT",
                                sameElse: "L"
                            },
                            longDateFormat: {
                                LTS: "h:mm:ss A",
                                LT: "h:mm A",
                                L: "MM/DD/YYYY",
                                LL: "MMMM D, YYYY",
                                LLL: "MMMM D, YYYY h:mm A",
                                LLLL: "dddd, MMMM D, YYYY h:mm A"
                            },
                            invalidDate: "Invalid date",
                            ordinal: "%d",
                            dayOfMonthOrdinalParse: /\d{1,2}/,
                            relativeTime: {
                                future: "in %s",
                                past: "%s ago",
                                s: "a few seconds",
                                ss: "%d seconds",
                                m: "a minute",
                                mm: "%d minutes",
                                h: "an hour",
                                hh: "%d hours",
                                d: "a day",
                                dd: "%d days",
                                M: "a month",
                                MM: "%d months",
                                y: "a year",
                                yy: "%d years"
                            },
                            months: Ae,
                            monthsShort: We,
                            week: {
                                dow: 0,
                                doy: 6
                            },
                            weekdays: Ge,
                            weekdaysMin: Ke,
                            weekdaysShort: qe,
                            meridiemParse: /[ap]\.?m?\.?/i
                        },
                        st = {},
                        ot = {};

                    function dt(e) {
                        return e ? e.toLowerCase().replace("_", "-") : e
                    }

                    function lt(t) {
                        var n = null;
                        if (!st[t] && void 0 !== e && e && e.exports) try {
                            n = nt._abbr, a("RnhZ")("./" + t), ut(n)
                        } catch (e) {}
                        return st[t]
                    }

                    function ut(e, t) {
                        var a;
                        return e && ((a = o(t) ? mt(e) : _t(e, t)) ? nt = a : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), nt._abbr
                    }

                    function _t(e, t) {
                        if (null !== t) {
                            var a, n = rt;
                            if (t.abbr = e, null != st[e]) S("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), n = st[e]._config;
                            else if (null != t.parentLocale)
                                if (null != st[t.parentLocale]) n = st[t.parentLocale]._config;
                                else {
                                    if (null == (a = lt(t.parentLocale))) return ot[t.parentLocale] || (ot[t.parentLocale] = []), ot[t.parentLocale].push({
                                        name: e,
                                        config: t
                                    }), null;
                                    n = a._config
                                }
                            return st[e] = new P(j(n, t)), ot[e] && ot[e].forEach(function(e) {
                                _t(e.name, e.config)
                            }), ut(e), st[e]
                        }
                        return delete st[e], null
                    }

                    function mt(e) {
                        var t;
                        if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return nt;
                        if (!r(e)) {
                            if (t = lt(e)) return t;
                            e = [e]
                        }
                        return function(e) {
                            for (var t, a, n, i, r = 0; r < e.length;) {
                                for (t = (i = dt(e[r]).split("-")).length, a = (a = dt(e[r + 1])) ? a.split("-") : null; t > 0;) {
                                    if (n = lt(i.slice(0, t).join("-"))) return n;
                                    if (a && a.length >= t && b(i, a, !0) >= t - 1) break;
                                    t--
                                }
                                r++
                            }
                            return nt
                        }(e)
                    }

                    function ht(e) {
                        var t, a = e._a;
                        return a && -2 === c(e).overflow && (t = a[ye] < 0 || a[ye] > 11 ? ye : a[ge] < 1 || a[ge] > Ce(a[Me], a[ye]) ? ge : a[Le] < 0 || a[Le] > 24 || 24 === a[Le] && (0 !== a[ve] || 0 !== a[Ye] || 0 !== a[ke]) ? Le : a[ve] < 0 || a[ve] > 59 ? ve : a[Ye] < 0 || a[Ye] > 59 ? Ye : a[ke] < 0 || a[ke] > 999 ? ke : -1, c(e)._overflowDayOfYear && (t < Me || t > ge) && (t = ge), c(e)._overflowWeeks && -1 === t && (t = be), c(e)._overflowWeekday && -1 === t && (t = De), c(e).overflow = t), e
                    }

                    function ct(e, t, a) {
                        return null != e ? e : null != t ? t : a
                    }

                    function ft(e) {
                        var t, a, n, r, s, o = [];
                        if (!e._d) {
                            for (n = function(e) {
                                    var t = new Date(i.now());
                                    return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
                                }(e), e._w && null == e._a[ge] && null == e._a[ye] && function(e) {
                                    var t, a, n, i, r, s, o, d;
                                    if (null != (t = e._w).GG || null != t.W || null != t.E) r = 1, s = 4, a = ct(t.GG, e._a[Me], Je(St(), 1, 4).year), n = ct(t.W, 1), ((i = ct(t.E, 1)) < 1 || i > 7) && (d = !0);
                                    else {
                                        r = e._locale._week.dow, s = e._locale._week.doy;
                                        var l = Je(St(), r, s);
                                        a = ct(t.gg, e._a[Me], l.year), n = ct(t.w, l.week), null != t.d ? ((i = t.d) < 0 || i > 6) && (d = !0) : null != t.e ? (i = t.e + r, (t.e < 0 || t.e > 6) && (d = !0)) : i = r
                                    }
                                    n < 1 || n > Ue(a, r, s) ? c(e)._overflowWeeks = !0 : null != d ? c(e)._overflowWeekday = !0 : (o = Ve(a, n, i, r, s), e._a[Me] = o.year, e._dayOfYear = o.dayOfYear)
                                }(e), null != e._dayOfYear && (s = ct(e._a[Me], n[Me]), (e._dayOfYear > we(s) || 0 === e._dayOfYear) && (c(e)._overflowDayOfYear = !0), a = Ne(s, 0, e._dayOfYear), e._a[ye] = a.getUTCMonth(), e._a[ge] = a.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = o[t] = n[t];
                            for (; t < 7; t++) e._a[t] = o[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
                            24 === e._a[Le] && 0 === e._a[ve] && 0 === e._a[Ye] && 0 === e._a[ke] && (e._nextDay = !0, e._a[Le] = 0), e._d = (e._useUTC ? Ne : function(e, t, a, n, i, r, s) {
                                var o = new Date(e, t, a, n, i, r, s);
                                return e < 100 && e >= 0 && isFinite(o.getFullYear()) && o.setFullYear(e), o
                            }).apply(null, o), r = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[Le] = 24), e._w && void 0 !== e._w.d && e._w.d !== r && (c(e).weekdayMismatch = !0)
                        }
                    }
                    var pt = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                        Mt = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                        yt = /Z|[+-]\d\d(?::?\d\d)?/,
                        gt = [
                            ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                            ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                            ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                            ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                            ["YYYY-DDD", /\d{4}-\d{3}/],
                            ["YYYY-MM", /\d{4}-\d\d/, !1],
                            ["YYYYYYMMDD", /[+-]\d{10}/],
                            ["YYYYMMDD", /\d{8}/],
                            ["GGGG[W]WWE", /\d{4}W\d{3}/],
                            ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                            ["YYYYDDD", /\d{7}/]
                        ],
                        Lt = [
                            ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                            ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                            ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                            ["HH:mm", /\d\d:\d\d/],
                            ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                            ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                            ["HHmmss", /\d\d\d\d\d\d/],
                            ["HHmm", /\d\d\d\d/],
                            ["HH", /\d\d/]
                        ],
                        vt = /^\/?Date\((\-?\d+)/i;

                    function Yt(e) {
                        var t, a, n, i, r, s, o = e._i,
                            d = pt.exec(o) || Mt.exec(o);
                        if (d) {
                            for (c(e).iso = !0, t = 0, a = gt.length; t < a; t++)
                                if (gt[t][1].exec(d[1])) {
                                    i = gt[t][0], n = !1 !== gt[t][2];
                                    break
                                }
                            if (null == i) return void(e._isValid = !1);
                            if (d[3]) {
                                for (t = 0, a = Lt.length; t < a; t++)
                                    if (Lt[t][1].exec(d[3])) {
                                        r = (d[2] || " ") + Lt[t][0];
                                        break
                                    }
                                if (null == r) return void(e._isValid = !1)
                            }
                            if (!n && null != r) return void(e._isValid = !1);
                            if (d[4]) {
                                if (!yt.exec(d[4])) return void(e._isValid = !1);
                                s = "Z"
                            }
                            e._f = i + (r || "") + (s || ""), wt(e)
                        } else e._isValid = !1
                    }
                    var kt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
                        bt = {
                            UT: 0,
                            GMT: 0,
                            EDT: -240,
                            EST: -300,
                            CDT: -300,
                            CST: -360,
                            MDT: -360,
                            MST: -420,
                            PDT: -420,
                            PST: -480
                        };

                    function Dt(e) {
                        var t, a, n, i, r, s, o, d = kt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
                        if (d) {
                            var l = (t = d[3], a = d[2], n = d[5], i = d[6], r = d[7], s = [(o = parseInt(d[4], 10), o <= 49 ? 2e3 + o : o <= 999 ? 1900 + o : o), We.indexOf(t), parseInt(a, 10), parseInt(n, 10), parseInt(i, 10)], r && s.push(parseInt(r, 10)), s);
                            if (! function(e, t, a) {
                                    return !e || qe.indexOf(e) === new Date(t[0], t[1], t[2]).getDay() || (c(a).weekdayMismatch = !0, a._isValid = !1, !1)
                                }(d[1], l, e)) return;
                            e._a = l, e._tzm = function(e, t, a) {
                                if (e) return bt[e];
                                if (t) return 0;
                                var n = parseInt(a, 10),
                                    i = n % 100;
                                return (n - i) / 100 * 60 + i
                            }(d[8], d[9], d[10]), e._d = Ne.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), c(e).rfc2822 = !0
                        } else e._isValid = !1
                    }

                    function wt(e) {
                        if (e._f !== i.ISO_8601)
                            if (e._f !== i.RFC_2822) {
                                e._a = [], c(e).empty = !0;
                                var t, a, n, r, s, o = "" + e._i,
                                    d = o.length,
                                    l = 0;
                                for (n = U(e._f, e._locale).match(I) || [], t = 0; t < n.length; t++)(a = (o.match(_e(r = n[t], e)) || [])[0]) && ((s = o.substr(0, o.indexOf(a))).length > 0 && c(e).unusedInput.push(s), o = o.slice(o.indexOf(a) + a.length), l += a.length), B[r] ? (a ? c(e).empty = !1 : c(e).unusedTokens.push(r), pe(r, a, e)) : e._strict && !a && c(e).unusedTokens.push(r);
                                c(e).charsLeftOver = d - l, o.length > 0 && c(e).unusedInput.push(o), e._a[Le] <= 12 && !0 === c(e).bigHour && e._a[Le] > 0 && (c(e).bigHour = void 0), c(e).parsedDateParts = e._a.slice(0), c(e).meridiem = e._meridiem, e._a[Le] = (u = e._locale, _ = e._a[Le], null == (m = e._meridiem) ? _ : null != u.meridiemHour ? u.meridiemHour(_, m) : null != u.isPM ? ((h = u.isPM(m)) && _ < 12 && (_ += 12), h || 12 !== _ || (_ = 0), _) : _), ft(e), ht(e)
                            } else Dt(e);
                        else Yt(e);
                        var u, _, m, h
                    }

                    function xt(e) {
                        var t = e._i,
                            a = e._f;
                        return e._locale = e._locale || mt(e._l), null === t || void 0 === a && "" === t ? p({
                            nullInput: !0
                        }) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), v(t) ? new L(ht(t)) : (l(t) ? e._d = t : r(a) ? function(e) {
                            var t, a, n, i, r;
                            if (0 === e._f.length) return c(e).invalidFormat = !0, void(e._d = new Date(NaN));
                            for (i = 0; i < e._f.length; i++) r = 0, t = y({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[i], wt(t), f(t) && (r += c(t).charsLeftOver, r += 10 * c(t).unusedTokens.length, c(t).score = r, (null == n || r < n) && (n = r, a = t));
                            m(e, a || t)
                        }(e) : a ? wt(e) : function(e) {
                            var t = e._i;
                            o(t) ? e._d = new Date(i.now()) : l(t) ? e._d = new Date(t.valueOf()) : "string" == typeof t ? function(e) {
                                var t = vt.exec(e._i);
                                null === t ? (Yt(e), !1 === e._isValid && (delete e._isValid, Dt(e), !1 === e._isValid && (delete e._isValid, i.createFromInputFallback(e)))) : e._d = new Date(+t[1])
                            }(e) : r(t) ? (e._a = u(t.slice(0), function(e) {
                                return parseInt(e, 10)
                            }), ft(e)) : s(t) ? function(e) {
                                if (!e._d) {
                                    var t = W(e._i);
                                    e._a = u([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function(e) {
                                        return e && parseInt(e, 10)
                                    }), ft(e)
                                }
                            }(e) : d(t) ? e._d = new Date(t) : i.createFromInputFallback(e)
                        }(e), f(e) || (e._d = null), e))
                    }

                    function Tt(e, t, a, n, i) {
                        var o, d = {};
                        return !0 !== a && !1 !== a || (n = a, a = void 0), (s(e) && function(e) {
                            if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
                            var t;
                            for (t in e)
                                if (e.hasOwnProperty(t)) return !1;
                            return !0
                        }(e) || r(e) && 0 === e.length) && (e = void 0), d._isAMomentObject = !0, d._useUTC = d._isUTC = i, d._l = a, d._i = e, d._f = t, d._strict = n, (o = new L(ht(xt(d))))._nextDay && (o.add(1, "d"), o._nextDay = void 0), o
                    }

                    function St(e, t, a, n) {
                        return Tt(e, t, a, n, !1)
                    }
                    i.createFromInputFallback = w("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) {
                        e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
                    }), i.ISO_8601 = function() {}, i.RFC_2822 = function() {};
                    var Ht = w("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                            var e = St.apply(null, arguments);
                            return this.isValid() && e.isValid() ? e < this ? this : e : p()
                        }),
                        jt = w("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                            var e = St.apply(null, arguments);
                            return this.isValid() && e.isValid() ? e > this ? this : e : p()
                        });

                    function Pt(e, t) {
                        var a, n;
                        if (1 === t.length && r(t[0]) && (t = t[0]), !t.length) return St();
                        for (a = t[0], n = 1; n < t.length; ++n) t[n].isValid() && !t[n][e](a) || (a = t[n]);
                        return a
                    }
                    var Ct = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

                    function Ot(e) {
                        var t = W(e),
                            a = t.year || 0,
                            n = t.quarter || 0,
                            i = t.month || 0,
                            r = t.week || 0,
                            s = t.day || 0,
                            o = t.hour || 0,
                            d = t.minute || 0,
                            l = t.second || 0,
                            u = t.millisecond || 0;
                        this._isValid = function(e) {
                            for (var t in e)
                                if (-1 === Te.call(Ct, t) || null != e[t] && isNaN(e[t])) return !1;
                            for (var a = !1, n = 0; n < Ct.length; ++n)
                                if (e[Ct[n]]) {
                                    if (a) return !1;
                                    parseFloat(e[Ct[n]]) !== k(e[Ct[n]]) && (a = !0)
                                }
                            return !0
                        }(t), this._milliseconds = +u + 1e3 * l + 6e4 * d + 1e3 * o * 60 * 60, this._days = +s + 7 * r, this._months = +i + 3 * n + 12 * a, this._data = {}, this._locale = mt(), this._bubble()
                    }

                    function At(e) {
                        return e instanceof Ot
                    }

                    function Wt(e) {
                        return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
                    }

                    function Ft(e, t) {
                        V(e, 0, 0, function() {
                            var e = this.utcOffset(),
                                a = "+";
                            return e < 0 && (e = -e, a = "-"), a + E(~~(e / 60), 2) + t + E(~~e % 60, 2)
                        })
                    }
                    Ft("Z", ":"), Ft("ZZ", ""), ue("Z", oe), ue("ZZ", oe), ce(["Z", "ZZ"], function(e, t, a) {
                        a._useUTC = !0, a._tzm = Et(oe, e)
                    });
                    var Rt = /([\+\-]|\d\d)/gi;

                    function Et(e, t) {
                        var a = (t || "").match(e);
                        if (null === a) return null;
                        var n = ((a[a.length - 1] || []) + "").match(Rt) || ["-", 0, 0],
                            i = 60 * n[1] + k(n[2]);
                        return 0 === i ? 0 : "+" === n[0] ? i : -i
                    }

                    function It(e, t) {
                        var a, n;
                        return t._isUTC ? (a = t.clone(), n = (v(e) || l(e) ? e.valueOf() : St(e).valueOf()) - a.valueOf(), a._d.setTime(a._d.valueOf() + n), i.updateOffset(a, !1), a) : St(e).local()
                    }

                    function zt(e) {
                        return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
                    }

                    function Nt() {
                        return !!this.isValid() && this._isUTC && 0 === this._offset
                    }
                    i.updateOffset = function() {};
                    var Bt = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
                        Vt = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

                    function Jt(e, t) {
                        var a, n, i, r, s, o, l = e,
                            u = null;
                        return At(e) ? l = {
                            ms: e._milliseconds,
                            d: e._days,
                            M: e._months
                        } : d(e) ? (l = {}, t ? l[t] = e : l.milliseconds = e) : (u = Bt.exec(e)) ? (a = "-" === u[1] ? -1 : 1, l = {
                            y: 0,
                            d: k(u[ge]) * a,
                            h: k(u[Le]) * a,
                            m: k(u[ve]) * a,
                            s: k(u[Ye]) * a,
                            ms: k(Wt(1e3 * u[ke])) * a
                        }) : (u = Vt.exec(e)) ? l = {
                            y: Ut(u[2], a = "-" === u[1] ? -1 : 1),
                            M: Ut(u[3], a),
                            w: Ut(u[4], a),
                            d: Ut(u[5], a),
                            h: Ut(u[6], a),
                            m: Ut(u[7], a),
                            s: Ut(u[8], a)
                        } : null == l ? l = {} : "object" == typeof l && ("from" in l || "to" in l) && (r = St(l.from), s = St(l.to), i = r.isValid() && s.isValid() ? (s = It(s, r), r.isBefore(s) ? o = Gt(r, s) : ((o = Gt(s, r)).milliseconds = -o.milliseconds, o.months = -o.months), o) : {
                            milliseconds: 0,
                            months: 0
                        }, (l = {}).ms = i.milliseconds, l.M = i.months), n = new Ot(l), At(e) && _(e, "_locale") && (n._locale = e._locale), n
                    }

                    function Ut(e, t) {
                        var a = e && parseFloat(e.replace(",", "."));
                        return (isNaN(a) ? 0 : a) * t
                    }

                    function Gt(e, t) {
                        var a = {
                            milliseconds: 0,
                            months: 0
                        };
                        return a.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(a.months, "M").isAfter(t) && --a.months, a.milliseconds = +t - +e.clone().add(a.months, "M"), a
                    }

                    function qt(e, t) {
                        return function(a, n) {
                            var i;
                            return null === n || isNaN(+n) || (S(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), i = a, a = n, n = i), Kt(this, Jt(a = "string" == typeof a ? +a : a, n), e), this
                        }
                    }

                    function Kt(e, t, a, n) {
                        var r = t._milliseconds,
                            s = Wt(t._days),
                            o = Wt(t._months);
                        e.isValid() && (n = null == n || n, o && Fe(e, je(e, "Month") + o * a), s && Pe(e, "Date", je(e, "Date") + s * a), r && e._d.setTime(e._d.valueOf() + r * a), n && i.updateOffset(e, s || o))
                    }
                    Jt.fn = Ot.prototype, Jt.invalid = function() {
                        return Jt(NaN)
                    };
                    var Zt = qt(1, "add"),
                        Qt = qt(-1, "subtract");

                    function Xt(e, t) {
                        var a = 12 * (t.year() - e.year()) + (t.month() - e.month()),
                            n = e.clone().add(a, "months");
                        return -(a + (t - n < 0 ? (t - n) / (n - e.clone().add(a - 1, "months")) : (t - n) / (e.clone().add(a + 1, "months") - n))) || 0
                    }

                    function $t(e) {
                        var t;
                        return void 0 === e ? this._locale._abbr : (null != (t = mt(e)) && (this._locale = t), this)
                    }
                    i.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", i.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
                    var ea = w("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
                        return void 0 === e ? this.localeData() : this.locale(e)
                    });

                    function ta() {
                        return this._locale
                    }

                    function aa(e, t) {
                        V(0, [e, e.length], 0, t)
                    }

                    function na(e, t, a, n, i) {
                        var r;
                        return null == e ? Je(this, n, i).year : (t > (r = Ue(e, n, i)) && (t = r), (function(e, t, a, n, i) {
                            var r = Ve(e, t, a, n, i),
                                s = Ne(r.year, 0, r.dayOfYear);
                            return this.year(s.getUTCFullYear()), this.month(s.getUTCMonth()), this.date(s.getUTCDate()), this
                        }).call(this, e, t, a, n, i))
                    }
                    V(0, ["gg", 2], 0, function() {
                        return this.weekYear() % 100
                    }), V(0, ["GG", 2], 0, function() {
                        return this.isoWeekYear() % 100
                    }), aa("gggg", "weekYear"), aa("ggggg", "weekYear"), aa("GGGG", "isoWeekYear"), aa("GGGGG", "isoWeekYear"), O("weekYear", "gg"), O("isoWeekYear", "GG"), R("weekYear", 1), R("isoWeekYear", 1), ue("G", re), ue("g", re), ue("GG", X, q), ue("gg", X, q), ue("GGGG", ae, Z), ue("gggg", ae, Z), ue("GGGGG", ne, Q), ue("ggggg", ne, Q), fe(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, a, n) {
                        t[n.substr(0, 2)] = k(e)
                    }), fe(["gg", "GG"], function(e, t, a, n) {
                        t[n] = i.parseTwoDigitYear(e)
                    }), V("Q", 0, "Qo", "quarter"), O("quarter", "Q"), R("quarter", 7), ue("Q", G), ce("Q", function(e, t) {
                        t[ye] = 3 * (k(e) - 1)
                    }), V("D", ["DD", 2], "Do", "date"), O("date", "D"), R("date", 9), ue("D", X), ue("DD", X, q), ue("Do", function(e, t) {
                        return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
                    }), ce(["D", "DD"], ge), ce("Do", function(e, t) {
                        t[ge] = k(e.match(X)[0])
                    });
                    var ia = He("Date", !0);
                    V("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), O("dayOfYear", "DDD"), R("dayOfYear", 4), ue("DDD", te), ue("DDDD", K), ce(["DDD", "DDDD"], function(e, t, a) {
                        a._dayOfYear = k(e)
                    }), V("m", ["mm", 2], 0, "minute"), O("minute", "m"), R("minute", 14), ue("m", X), ue("mm", X, q), ce(["m", "mm"], ve);
                    var ra = He("Minutes", !1);
                    V("s", ["ss", 2], 0, "second"), O("second", "s"), R("second", 15), ue("s", X), ue("ss", X, q), ce(["s", "ss"], Ye);
                    var sa, oa = He("Seconds", !1);
                    for (V("S", 0, 0, function() {
                            return ~~(this.millisecond() / 100)
                        }), V(0, ["SS", 2], 0, function() {
                            return ~~(this.millisecond() / 10)
                        }), V(0, ["SSS", 3], 0, "millisecond"), V(0, ["SSSS", 4], 0, function() {
                            return 10 * this.millisecond()
                        }), V(0, ["SSSSS", 5], 0, function() {
                            return 100 * this.millisecond()
                        }), V(0, ["SSSSSS", 6], 0, function() {
                            return 1e3 * this.millisecond()
                        }), V(0, ["SSSSSSS", 7], 0, function() {
                            return 1e4 * this.millisecond()
                        }), V(0, ["SSSSSSSS", 8], 0, function() {
                            return 1e5 * this.millisecond()
                        }), V(0, ["SSSSSSSSS", 9], 0, function() {
                            return 1e6 * this.millisecond()
                        }), O("millisecond", "ms"), R("millisecond", 16), ue("S", te, G), ue("SS", te, q), ue("SSS", te, K), sa = "SSSS"; sa.length <= 9; sa += "S") ue(sa, ie);

                    function da(e, t) {
                        t[ke] = k(1e3 * ("0." + e))
                    }
                    for (sa = "S"; sa.length <= 9; sa += "S") ce(sa, da);
                    var la = He("Milliseconds", !1);
                    V("z", 0, 0, "zoneAbbr"), V("zz", 0, 0, "zoneName");
                    var ua = L.prototype;

                    function _a(e) {
                        return e
                    }
                    ua.add = Zt, ua.calendar = function(e, t) {
                        var a = e || St(),
                            n = It(a, this).startOf("day"),
                            r = i.calendarFormat(this, n) || "sameElse",
                            s = t && (H(t[r]) ? t[r].call(this, a) : t[r]);
                        return this.format(s || this.localeData().calendar(r, this, St(a)))
                    }, ua.clone = function() {
                        return new L(this)
                    }, ua.diff = function(e, t, a) {
                        var n, i, r;
                        if (!this.isValid()) return NaN;
                        if (!(n = It(e, this)).isValid()) return NaN;
                        switch (i = 6e4 * (n.utcOffset() - this.utcOffset()), t = A(t)) {
                            case "year":
                                r = Xt(this, n) / 12;
                                break;
                            case "month":
                                r = Xt(this, n);
                                break;
                            case "quarter":
                                r = Xt(this, n) / 3;
                                break;
                            case "second":
                                r = (this - n) / 1e3;
                                break;
                            case "minute":
                                r = (this - n) / 6e4;
                                break;
                            case "hour":
                                r = (this - n) / 36e5;
                                break;
                            case "day":
                                r = (this - n - i) / 864e5;
                                break;
                            case "week":
                                r = (this - n - i) / 6048e5;
                                break;
                            default:
                                r = this - n
                        }
                        return a ? r : Y(r)
                    }, ua.endOf = function(e) {
                        return void 0 === (e = A(e)) || "millisecond" === e ? this : ("date" === e && (e = "day"), this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms"))
                    }, ua.format = function(e) {
                        e || (e = this.isUtc() ? i.defaultFormatUtc : i.defaultFormat);
                        var t = J(this, e);
                        return this.localeData().postformat(t)
                    }, ua.from = function(e, t) {
                        return this.isValid() && (v(e) && e.isValid() || St(e).isValid()) ? Jt({
                            to: this,
                            from: e
                        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
                    }, ua.fromNow = function(e) {
                        return this.from(St(), e)
                    }, ua.to = function(e, t) {
                        return this.isValid() && (v(e) && e.isValid() || St(e).isValid()) ? Jt({
                            from: this,
                            to: e
                        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
                    }, ua.toNow = function(e) {
                        return this.to(St(), e)
                    }, ua.get = function(e) {
                        return H(this[e = A(e)]) ? this[e]() : this
                    }, ua.invalidAt = function() {
                        return c(this).overflow
                    }, ua.isAfter = function(e, t) {
                        var a = v(e) ? e : St(e);
                        return !(!this.isValid() || !a.isValid()) && ("millisecond" === (t = A(o(t) ? "millisecond" : t)) ? this.valueOf() > a.valueOf() : a.valueOf() < this.clone().startOf(t).valueOf())
                    }, ua.isBefore = function(e, t) {
                        var a = v(e) ? e : St(e);
                        return !(!this.isValid() || !a.isValid()) && ("millisecond" === (t = A(o(t) ? "millisecond" : t)) ? this.valueOf() < a.valueOf() : this.clone().endOf(t).valueOf() < a.valueOf())
                    }, ua.isBetween = function(e, t, a, n) {
                        return ("(" === (n = n || "()")[0] ? this.isAfter(e, a) : !this.isBefore(e, a)) && (")" === n[1] ? this.isBefore(t, a) : !this.isAfter(t, a))
                    }, ua.isSame = function(e, t) {
                        var a, n = v(e) ? e : St(e);
                        return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = A(t || "millisecond")) ? this.valueOf() === n.valueOf() : (a = n.valueOf(), this.clone().startOf(t).valueOf() <= a && a <= this.clone().endOf(t).valueOf()))
                    }, ua.isSameOrAfter = function(e, t) {
                        return this.isSame(e, t) || this.isAfter(e, t)
                    }, ua.isSameOrBefore = function(e, t) {
                        return this.isSame(e, t) || this.isBefore(e, t)
                    }, ua.isValid = function() {
                        return f(this)
                    }, ua.lang = ea, ua.locale = $t, ua.localeData = ta, ua.max = jt, ua.min = Ht, ua.parsingFlags = function() {
                        return m({}, c(this))
                    }, ua.set = function(e, t) {
                        if ("object" == typeof e)
                            for (var a = function(e) {
                                    var t = [];
                                    for (var a in e) t.push({
                                        unit: a,
                                        priority: F[a]
                                    });
                                    return t.sort(function(e, t) {
                                        return e.priority - t.priority
                                    }), t
                                }(e = W(e)), n = 0; n < a.length; n++) this[a[n].unit](e[a[n].unit]);
                        else if (H(this[e = A(e)])) return this[e](t);
                        return this
                    }, ua.startOf = function(e) {
                        switch (e = A(e)) {
                            case "year":
                                this.month(0);
                            case "quarter":
                            case "month":
                                this.date(1);
                            case "week":
                            case "isoWeek":
                            case "day":
                            case "date":
                                this.hours(0);
                            case "hour":
                                this.minutes(0);
                            case "minute":
                                this.seconds(0);
                            case "second":
                                this.milliseconds(0)
                        }
                        return "week" === e && this.weekday(0), "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this
                    }, ua.subtract = Qt, ua.toArray = function() {
                        var e = this;
                        return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
                    }, ua.toObject = function() {
                        var e = this;
                        return {
                            years: e.year(),
                            months: e.month(),
                            date: e.date(),
                            hours: e.hours(),
                            minutes: e.minutes(),
                            seconds: e.seconds(),
                            milliseconds: e.milliseconds()
                        }
                    }, ua.toDate = function() {
                        return new Date(this.valueOf())
                    }, ua.toISOString = function(e) {
                        if (!this.isValid()) return null;
                        var t = !0 !== e,
                            a = t ? this.clone().utc() : this;
                        return a.year() < 0 || a.year() > 9999 ? J(a, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : H(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", J(a, "Z")) : J(a, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
                    }, ua.inspect = function() {
                        if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
                        var e = "moment",
                            t = "";
                        this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z");
                        var a = "[" + e + '("]',
                            n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY";
                        return this.format(a + n + "-MM-DD[T]HH:mm:ss.SSS" + t + '[")]')
                    }, ua.toJSON = function() {
                        return this.isValid() ? this.toISOString() : null
                    }, ua.toString = function() {
                        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
                    }, ua.unix = function() {
                        return Math.floor(this.valueOf() / 1e3)
                    }, ua.valueOf = function() {
                        return this._d.valueOf() - 6e4 * (this._offset || 0)
                    }, ua.creationData = function() {
                        return {
                            input: this._i,
                            format: this._f,
                            locale: this._locale,
                            isUTC: this._isUTC,
                            strict: this._strict
                        }
                    }, ua.year = Se, ua.isLeapYear = function() {
                        return xe(this.year())
                    }, ua.weekYear = function(e) {
                        return na.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
                    }, ua.isoWeekYear = function(e) {
                        return na.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
                    }, ua.quarter = ua.quarters = function(e) {
                        return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
                    }, ua.month = Re, ua.daysInMonth = function() {
                        return Ce(this.year(), this.month())
                    }, ua.week = ua.weeks = function(e) {
                        var t = this.localeData().week(this);
                        return null == e ? t : this.add(7 * (e - t), "d")
                    }, ua.isoWeek = ua.isoWeeks = function(e) {
                        var t = Je(this, 1, 4).week;
                        return null == e ? t : this.add(7 * (e - t), "d")
                    }, ua.weeksInYear = function() {
                        var e = this.localeData()._week;
                        return Ue(this.year(), e.dow, e.doy)
                    }, ua.isoWeeksInYear = function() {
                        return Ue(this.year(), 1, 4)
                    }, ua.date = ia, ua.day = ua.days = function(e) {
                        if (!this.isValid()) return null != e ? this : NaN;
                        var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                        return null != e ? (e = function(e, t) {
                            return "string" != typeof e ? e : isNaN(e) ? "number" == typeof(e = t.weekdaysParse(e)) ? e : null : parseInt(e, 10)
                        }(e, this.localeData()), this.add(e - t, "d")) : t
                    }, ua.weekday = function(e) {
                        if (!this.isValid()) return null != e ? this : NaN;
                        var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
                        return null == e ? t : this.add(e - t, "d")
                    }, ua.isoWeekday = function(e) {
                        if (!this.isValid()) return null != e ? this : NaN;
                        if (null != e) {
                            var t = function(e, t) {
                                return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
                            }(e, this.localeData());
                            return this.day(this.day() % 7 ? t : t - 7)
                        }
                        return this.day() || 7
                    }, ua.dayOfYear = function(e) {
                        var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                        return null == e ? t : this.add(e - t, "d")
                    }, ua.hour = ua.hours = it, ua.minute = ua.minutes = ra, ua.second = ua.seconds = oa, ua.millisecond = ua.milliseconds = la, ua.utcOffset = function(e, t, a) {
                        var n, r = this._offset || 0;
                        if (!this.isValid()) return null != e ? this : NaN;
                        if (null != e) {
                            if ("string" == typeof e) {
                                if (null === (e = Et(oe, e))) return this
                            } else Math.abs(e) < 16 && !a && (e *= 60);
                            return !this._isUTC && t && (n = zt(this)), this._offset = e, this._isUTC = !0, null != n && this.add(n, "m"), r !== e && (!t || this._changeInProgress ? Kt(this, Jt(e - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, i.updateOffset(this, !0), this._changeInProgress = null)), this
                        }
                        return this._isUTC ? r : zt(this)
                    }, ua.utc = function(e) {
                        return this.utcOffset(0, e)
                    }, ua.local = function(e) {
                        return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(zt(this), "m")), this
                    }, ua.parseZone = function() {
                        if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
                        else if ("string" == typeof this._i) {
                            var e = Et(se, this._i);
                            null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
                        }
                        return this
                    }, ua.hasAlignedHourOffset = function(e) {
                        return !!this.isValid() && (e = e ? St(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0)
                    }, ua.isDST = function() {
                        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
                    }, ua.isLocal = function() {
                        return !!this.isValid() && !this._isUTC
                    }, ua.isUtcOffset = function() {
                        return !!this.isValid() && this._isUTC
                    }, ua.isUtc = Nt, ua.isUTC = Nt, ua.zoneAbbr = function() {
                        return this._isUTC ? "UTC" : ""
                    }, ua.zoneName = function() {
                        return this._isUTC ? "Coordinated Universal Time" : ""
                    }, ua.dates = w("dates accessor is deprecated. Use date instead.", ia), ua.months = w("months accessor is deprecated. Use month instead", Re), ua.years = w("years accessor is deprecated. Use year instead", Se), ua.zone = w("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(e, t) {
                        return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
                    }), ua.isDSTShifted = w("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() {
                        if (!o(this._isDSTShifted)) return this._isDSTShifted;
                        var e = {};
                        if (y(e, this), (e = xt(e))._a) {
                            var t = e._isUTC ? h(e._a) : St(e._a);
                            this._isDSTShifted = this.isValid() && b(e._a, t.toArray()) > 0
                        } else this._isDSTShifted = !1;
                        return this._isDSTShifted
                    });
                    var ma = P.prototype;

                    function ha(e, t, a, n) {
                        var i = mt(),
                            r = h().set(n, t);
                        return i[a](r, e)
                    }

                    function ca(e, t, a) {
                        if (d(e) && (t = e, e = void 0), e = e || "", null != t) return ha(e, t, a, "month");
                        var n, i = [];
                        for (n = 0; n < 12; n++) i[n] = ha(e, n, a, "month");
                        return i
                    }

                    function fa(e, t, a, n) {
                        "boolean" == typeof e ? (d(t) && (a = t, t = void 0), t = t || "") : (a = t = e, e = !1, d(t) && (a = t, t = void 0), t = t || "");
                        var i, r = mt(),
                            s = e ? r._week.dow : 0;
                        if (null != a) return ha(t, (a + s) % 7, n, "day");
                        var o = [];
                        for (i = 0; i < 7; i++) o[i] = ha(t, (i + s) % 7, n, "day");
                        return o
                    }
                    ma.calendar = function(e, t, a) {
                        var n = this._calendar[e] || this._calendar.sameElse;
                        return H(n) ? n.call(t, a) : n
                    }, ma.longDateFormat = function(e) {
                        var t = this._longDateFormat[e],
                            a = this._longDateFormat[e.toUpperCase()];
                        return t || !a ? t : (this._longDateFormat[e] = a.replace(/MMMM|MM|DD|dddd/g, function(e) {
                            return e.slice(1)
                        }), this._longDateFormat[e])
                    }, ma.invalidDate = function() {
                        return this._invalidDate
                    }, ma.ordinal = function(e) {
                        return this._ordinal.replace("%d", e)
                    }, ma.preparse = _a, ma.postformat = _a, ma.relativeTime = function(e, t, a, n) {
                        var i = this._relativeTime[a];
                        return H(i) ? i(e, t, a, n) : i.replace(/%d/i, e)
                    }, ma.pastFuture = function(e, t) {
                        var a = this._relativeTime[e > 0 ? "future" : "past"];
                        return H(a) ? a(t) : a.replace(/%s/i, t)
                    }, ma.set = function(e) {
                        var t, a;
                        for (a in e) H(t = e[a]) ? this[a] = t : this["_" + a] = t;
                        this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
                    }, ma.months = function(e, t) {
                        return e ? r(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Oe).test(t) ? "format" : "standalone"][e.month()] : r(this._months) ? this._months : this._months.standalone
                    }, ma.monthsShort = function(e, t) {
                        return e ? r(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Oe.test(t) ? "format" : "standalone"][e.month()] : r(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
                    }, ma.monthsParse = function(e, t, a) {
                        var n, i, r;
                        if (this._monthsParseExact) return (function(e, t, a) {
                            var n, i, r, s = e.toLocaleLowerCase();
                            if (!this._monthsParse)
                                for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n) r = h([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(r, "").toLocaleLowerCase(), this._longMonthsParse[n] = this.months(r, "").toLocaleLowerCase();
                            return a ? "MMM" === t ? -1 !== (i = Te.call(this._shortMonthsParse, s)) ? i : null : -1 !== (i = Te.call(this._longMonthsParse, s)) ? i : null : "MMM" === t ? -1 !== (i = Te.call(this._shortMonthsParse, s)) ? i : -1 !== (i = Te.call(this._longMonthsParse, s)) ? i : null : -1 !== (i = Te.call(this._longMonthsParse, s)) ? i : -1 !== (i = Te.call(this._shortMonthsParse, s)) ? i : null
                        }).call(this, e, t, a);
                        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) {
                            if (i = h([2e3, n]), a && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp("^" + this.months(i, "").replace(".", "") + "$", "i"), this._shortMonthsParse[n] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$", "i")), a || this._monthsParse[n] || (r = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), this._monthsParse[n] = new RegExp(r.replace(".", ""), "i")), a && "MMMM" === t && this._longMonthsParse[n].test(e)) return n;
                            if (a && "MMM" === t && this._shortMonthsParse[n].test(e)) return n;
                            if (!a && this._monthsParse[n].test(e)) return n
                        }
                    }, ma.monthsRegex = function(e) {
                        return this._monthsParseExact ? (_(this, "_monthsRegex") || ze.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (_(this, "_monthsRegex") || (this._monthsRegex = Ie), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
                    }, ma.monthsShortRegex = function(e) {
                        return this._monthsParseExact ? (_(this, "_monthsRegex") || ze.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (_(this, "_monthsShortRegex") || (this._monthsShortRegex = Ee), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
                    }, ma.week = function(e) {
                        return Je(e, this._week.dow, this._week.doy).week
                    }, ma.firstDayOfYear = function() {
                        return this._week.doy
                    }, ma.firstDayOfWeek = function() {
                        return this._week.dow
                    }, ma.weekdays = function(e, t) {
                        return e ? r(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"][e.day()] : r(this._weekdays) ? this._weekdays : this._weekdays.standalone
                    }, ma.weekdaysMin = function(e) {
                        return e ? this._weekdaysMin[e.day()] : this._weekdaysMin
                    }, ma.weekdaysShort = function(e) {
                        return e ? this._weekdaysShort[e.day()] : this._weekdaysShort
                    }, ma.weekdaysParse = function(e, t, a) {
                        var n, i, r;
                        if (this._weekdaysParseExact) return (function(e, t, a) {
                            var n, i, r, s = e.toLocaleLowerCase();
                            if (!this._weekdaysParse)
                                for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; n < 7; ++n) r = h([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(r, "").toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(r, "").toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(r, "").toLocaleLowerCase();
                            return a ? "dddd" === t ? -1 !== (i = Te.call(this._weekdaysParse, s)) ? i : null : "ddd" === t ? -1 !== (i = Te.call(this._shortWeekdaysParse, s)) ? i : null : -1 !== (i = Te.call(this._minWeekdaysParse, s)) ? i : null : "dddd" === t ? -1 !== (i = Te.call(this._weekdaysParse, s)) ? i : -1 !== (i = Te.call(this._shortWeekdaysParse, s)) ? i : -1 !== (i = Te.call(this._minWeekdaysParse, s)) ? i : null : "ddd" === t ? -1 !== (i = Te.call(this._shortWeekdaysParse, s)) ? i : -1 !== (i = Te.call(this._weekdaysParse, s)) ? i : -1 !== (i = Te.call(this._minWeekdaysParse, s)) ? i : null : -1 !== (i = Te.call(this._minWeekdaysParse, s)) ? i : -1 !== (i = Te.call(this._weekdaysParse, s)) ? i : -1 !== (i = Te.call(this._shortWeekdaysParse, s)) ? i : null
                        }).call(this, e, t, a);
                        for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) {
                            if (i = h([2e3, 1]).day(n), a && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp("^" + this.weekdays(i, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[n] = new RegExp("^" + this.weekdaysShort(i, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[n] = new RegExp("^" + this.weekdaysMin(i, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[n] || (r = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""), this._weekdaysParse[n] = new RegExp(r.replace(".", ""), "i")), a && "dddd" === t && this._fullWeekdaysParse[n].test(e)) return n;
                            if (a && "ddd" === t && this._shortWeekdaysParse[n].test(e)) return n;
                            if (a && "dd" === t && this._minWeekdaysParse[n].test(e)) return n;
                            if (!a && this._weekdaysParse[n].test(e)) return n
                        }
                    }, ma.weekdaysRegex = function(e) {
                        return this._weekdaysParseExact ? (_(this, "_weekdaysRegex") || $e.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (_(this, "_weekdaysRegex") || (this._weekdaysRegex = Ze), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
                    }, ma.weekdaysShortRegex = function(e) {
                        return this._weekdaysParseExact ? (_(this, "_weekdaysRegex") || $e.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (_(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Qe), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
                    }, ma.weekdaysMinRegex = function(e) {
                        return this._weekdaysParseExact ? (_(this, "_weekdaysRegex") || $e.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (_(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Xe), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
                    }, ma.isPM = function(e) {
                        return "p" === (e + "").toLowerCase().charAt(0)
                    }, ma.meridiem = function(e, t, a) {
                        return e > 11 ? a ? "pm" : "PM" : a ? "am" : "AM"
                    }, ut("en", {
                        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                        ordinal: function(e) {
                            var t = e % 10;
                            return e + (1 === k(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
                        }
                    }), i.lang = w("moment.lang is deprecated. Use moment.locale instead.", ut), i.langData = w("moment.langData is deprecated. Use moment.localeData instead.", mt);
                    var pa = Math.abs;

                    function Ma(e, t, a, n) {
                        var i = Jt(t, a);
                        return e._milliseconds += n * i._milliseconds, e._days += n * i._days, e._months += n * i._months, e._bubble()
                    }

                    function ya(e) {
                        return e < 0 ? Math.floor(e) : Math.ceil(e)
                    }

                    function ga(e) {
                        return 4800 * e / 146097
                    }

                    function La(e) {
                        return 146097 * e / 4800
                    }

                    function va(e) {
                        return function() {
                            return this.as(e)
                        }
                    }
                    var Ya = va("ms"),
                        ka = va("s"),
                        ba = va("m"),
                        Da = va("h"),
                        wa = va("d"),
                        xa = va("w"),
                        Ta = va("M"),
                        Sa = va("y");

                    function Ha(e) {
                        return function() {
                            return this.isValid() ? this._data[e] : NaN
                        }
                    }
                    var ja = Ha("milliseconds"),
                        Pa = Ha("seconds"),
                        Ca = Ha("minutes"),
                        Oa = Ha("hours"),
                        Aa = Ha("days"),
                        Wa = Ha("months"),
                        Fa = Ha("years"),
                        Ra = Math.round,
                        Ea = {
                            ss: 44,
                            s: 45,
                            m: 45,
                            h: 22,
                            d: 26,
                            M: 11
                        },
                        Ia = Math.abs;

                    function za(e) {
                        return (e > 0) - (e < 0) || +e
                    }

                    function Na() {
                        if (!this.isValid()) return this.localeData().invalidDate();
                        var e, t, a = Ia(this._milliseconds) / 1e3,
                            n = Ia(this._days),
                            i = Ia(this._months);
                        t = Y((e = Y(a / 60)) / 60), a %= 60, e %= 60;
                        var r = Y(i / 12),
                            s = i %= 12,
                            o = n,
                            d = t,
                            l = e,
                            u = a ? a.toFixed(3).replace(/\.?0+$/, "") : "",
                            _ = this.asSeconds();
                        if (!_) return "P0D";
                        var m = _ < 0 ? "-" : "",
                            h = za(this._months) !== za(_) ? "-" : "",
                            c = za(this._days) !== za(_) ? "-" : "",
                            f = za(this._milliseconds) !== za(_) ? "-" : "";
                        return m + "P" + (r ? h + r + "Y" : "") + (s ? h + s + "M" : "") + (o ? c + o + "D" : "") + (d || l || u ? "T" : "") + (d ? f + d + "H" : "") + (l ? f + l + "M" : "") + (u ? f + u + "S" : "")
                    }
                    var Ba = Ot.prototype;
                    return Ba.isValid = function() {
                        return this._isValid
                    }, Ba.abs = function() {
                        var e = this._data;
                        return this._milliseconds = pa(this._milliseconds), this._days = pa(this._days), this._months = pa(this._months), e.milliseconds = pa(e.milliseconds), e.seconds = pa(e.seconds), e.minutes = pa(e.minutes), e.hours = pa(e.hours), e.months = pa(e.months), e.years = pa(e.years), this
                    }, Ba.add = function(e, t) {
                        return Ma(this, e, t, 1)
                    }, Ba.subtract = function(e, t) {
                        return Ma(this, e, t, -1)
                    }, Ba.as = function(e) {
                        if (!this.isValid()) return NaN;
                        var t, a, n = this._milliseconds;
                        if ("month" === (e = A(e)) || "year" === e) return a = this._months + ga(t = this._days + n / 864e5), "month" === e ? a : a / 12;
                        switch (t = this._days + Math.round(La(this._months)), e) {
                            case "week":
                                return t / 7 + n / 6048e5;
                            case "day":
                                return t + n / 864e5;
                            case "hour":
                                return 24 * t + n / 36e5;
                            case "minute":
                                return 1440 * t + n / 6e4;
                            case "second":
                                return 86400 * t + n / 1e3;
                            case "millisecond":
                                return Math.floor(864e5 * t) + n;
                            default:
                                throw new Error("Unknown unit " + e)
                        }
                    }, Ba.asMilliseconds = Ya, Ba.asSeconds = ka, Ba.asMinutes = ba, Ba.asHours = Da, Ba.asDays = wa, Ba.asWeeks = xa, Ba.asMonths = Ta, Ba.asYears = Sa, Ba.valueOf = function() {
                        return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * k(this._months / 12) : NaN
                    }, Ba._bubble = function() {
                        var e, t, a, n, i, r = this._milliseconds,
                            s = this._days,
                            o = this._months,
                            d = this._data;
                        return r >= 0 && s >= 0 && o >= 0 || r <= 0 && s <= 0 && o <= 0 || (r += 864e5 * ya(La(o) + s), s = 0, o = 0), d.milliseconds = r % 1e3, e = Y(r / 1e3), d.seconds = e % 60, t = Y(e / 60), d.minutes = t % 60, a = Y(t / 60), d.hours = a % 24, o += i = Y(ga(s += Y(a / 24))), s -= ya(La(i)), n = Y(o / 12), o %= 12, d.days = s, d.months = o, d.years = n, this
                    }, Ba.clone = function() {
                        return Jt(this)
                    }, Ba.get = function(e) {
                        return e = A(e), this.isValid() ? this[e + "s"]() : NaN
                    }, Ba.milliseconds = ja, Ba.seconds = Pa, Ba.minutes = Ca, Ba.hours = Oa, Ba.days = Aa, Ba.weeks = function() {
                        return Y(this.days() / 7)
                    }, Ba.months = Wa, Ba.years = Fa, Ba.humanize = function(e) {
                        if (!this.isValid()) return this.localeData().invalidDate();
                        var t = this.localeData(),
                            a = function(e, t, a) {
                                var n = Jt(e).abs(),
                                    i = Ra(n.as("s")),
                                    r = Ra(n.as("m")),
                                    s = Ra(n.as("h")),
                                    o = Ra(n.as("d")),
                                    d = Ra(n.as("M")),
                                    l = Ra(n.as("y")),
                                    u = i <= Ea.ss && ["s", i] || i < Ea.s && ["ss", i] || r <= 1 && ["m"] || r < Ea.m && ["mm", r] || s <= 1 && ["h"] || s < Ea.h && ["hh", s] || o <= 1 && ["d"] || o < Ea.d && ["dd", o] || d <= 1 && ["M"] || d < Ea.M && ["MM", d] || l <= 1 && ["y"] || ["yy", l];
                                return u[2] = t, u[3] = +e > 0, u[4] = a, (function(e, t, a, n, i) {
                                    return i.relativeTime(t || 1, !!a, e, n)
                                }).apply(null, u)
                            }(this, !e, t);
                        return e && (a = t.pastFuture(+this, a)), t.postformat(a)
                    }, Ba.toISOString = Na, Ba.toString = Na, Ba.toJSON = Na, Ba.locale = $t, Ba.localeData = ta, Ba.toIsoString = w("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Na), Ba.lang = ea, V("X", 0, 0, "unix"), V("x", 0, 0, "valueOf"), ue("x", re), ue("X", /[+-]?\d+(\.\d{1,3})?/), ce("X", function(e, t, a) {
                        a._d = new Date(1e3 * parseFloat(e, 10))
                    }), ce("x", function(e, t, a) {
                        a._d = new Date(k(e))
                    }), i.version = "2.22.2", t = St, i.fn = ua, i.min = function() {
                        return Pt("isBefore", [].slice.call(arguments, 0))
                    }, i.max = function() {
                        return Pt("isAfter", [].slice.call(arguments, 0))
                    }, i.now = function() {
                        return Date.now ? Date.now() : +new Date
                    }, i.utc = h, i.unix = function(e) {
                        return St(1e3 * e)
                    }, i.months = function(e, t) {
                        return ca(e, t, "months")
                    }, i.isDate = l, i.locale = ut, i.invalid = p, i.duration = Jt, i.isMoment = v, i.weekdays = function(e, t, a) {
                        return fa(e, t, a, "weekdays")
                    }, i.parseZone = function() {
                        return St.apply(null, arguments).parseZone()
                    }, i.localeData = mt, i.isDuration = At, i.monthsShort = function(e, t) {
                        return ca(e, t, "monthsShort")
                    }, i.weekdaysMin = function(e, t, a) {
                        return fa(e, t, a, "weekdaysMin")
                    }, i.defineLocale = _t, i.updateLocale = function(e, t) {
                        if (null != t) {
                            var a, n, i = rt;
                            null != (n = lt(e)) && (i = n._config), (a = new P(t = j(i, t))).parentLocale = st[e], st[e] = a, ut(e)
                        } else null != st[e] && (null != st[e].parentLocale ? st[e] = st[e].parentLocale : null != st[e] && delete st[e]);
                        return st[e]
                    }, i.locales = function() {
                        return x(st)
                    }, i.weekdaysShort = function(e, t, a) {
                        return fa(e, t, a, "weekdaysShort")
                    }, i.normalizeUnits = A, i.relativeTimeRounding = function(e) {
                        return void 0 === e ? Ra : "function" == typeof e && (Ra = e, !0)
                    }, i.relativeTimeThreshold = function(e, t) {
                        return void 0 !== Ea[e] && (void 0 === t ? Ea[e] : (Ea[e] = t, "s" === e && (Ea.ss = t - 1), !0))
                    }, i.calendarFormat = function(e, t) {
                        var a = e.diff(t, "days", !0);
                        return a < -6 ? "sameElse" : a < -1 ? "lastWeek" : a < 0 ? "lastDay" : a < 1 ? "sameDay" : a < 2 ? "nextDay" : a < 7 ? "nextWeek" : "sameElse"
                    }, i.prototype = ua, i.HTML5_FMT = {
                        DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
                        DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
                        DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
                        DATE: "YYYY-MM-DD",
                        TIME: "HH:mm",
                        TIME_SECONDS: "HH:mm:ss",
                        TIME_MS: "HH:mm:ss.SSS",
                        WEEK: "YYYY-[W]WW",
                        MONTH: "YYYY-MM"
                    }, i
                }()
            }).call(this, a("YuTi")(e))
        },
        x6pH: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("he", {
                    months: "\u05d9\u05e0\u05d5\u05d0\u05e8_\u05e4\u05d1\u05e8\u05d5\u05d0\u05e8_\u05de\u05e8\u05e5_\u05d0\u05e4\u05e8\u05d9\u05dc_\u05de\u05d0\u05d9_\u05d9\u05d5\u05e0\u05d9_\u05d9\u05d5\u05dc\u05d9_\u05d0\u05d5\u05d2\u05d5\u05e1\u05d8_\u05e1\u05e4\u05d8\u05de\u05d1\u05e8_\u05d0\u05d5\u05e7\u05d8\u05d5\u05d1\u05e8_\u05e0\u05d5\u05d1\u05de\u05d1\u05e8_\u05d3\u05e6\u05de\u05d1\u05e8".split("_"),
                    monthsShort: "\u05d9\u05e0\u05d5\u05f3_\u05e4\u05d1\u05e8\u05f3_\u05de\u05e8\u05e5_\u05d0\u05e4\u05e8\u05f3_\u05de\u05d0\u05d9_\u05d9\u05d5\u05e0\u05d9_\u05d9\u05d5\u05dc\u05d9_\u05d0\u05d5\u05d2\u05f3_\u05e1\u05e4\u05d8\u05f3_\u05d0\u05d5\u05e7\u05f3_\u05e0\u05d5\u05d1\u05f3_\u05d3\u05e6\u05de\u05f3".split("_"),
                    weekdays: "\u05e8\u05d0\u05e9\u05d5\u05df_\u05e9\u05e0\u05d9_\u05e9\u05dc\u05d9\u05e9\u05d9_\u05e8\u05d1\u05d9\u05e2\u05d9_\u05d7\u05de\u05d9\u05e9\u05d9_\u05e9\u05d9\u05e9\u05d9_\u05e9\u05d1\u05ea".split("_"),
                    weekdaysShort: "\u05d0\u05f3_\u05d1\u05f3_\u05d2\u05f3_\u05d3\u05f3_\u05d4\u05f3_\u05d5\u05f3_\u05e9\u05f3".split("_"),
                    weekdaysMin: "\u05d0_\u05d1_\u05d2_\u05d3_\u05d4_\u05d5_\u05e9".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D [\u05d1]MMMM YYYY",
                        LLL: "D [\u05d1]MMMM YYYY HH:mm",
                        LLLL: "dddd, D [\u05d1]MMMM YYYY HH:mm",
                        l: "D/M/YYYY",
                        ll: "D MMM YYYY",
                        lll: "D MMM YYYY HH:mm",
                        llll: "ddd, D MMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[\u05d4\u05d9\u05d5\u05dd \u05d1\u05be]LT",
                        nextDay: "[\u05de\u05d7\u05e8 \u05d1\u05be]LT",
                        nextWeek: "dddd [\u05d1\u05e9\u05e2\u05d4] LT",
                        lastDay: "[\u05d0\u05ea\u05de\u05d5\u05dc \u05d1\u05be]LT",
                        lastWeek: "[\u05d1\u05d9\u05d5\u05dd] dddd [\u05d4\u05d0\u05d7\u05e8\u05d5\u05df \u05d1\u05e9\u05e2\u05d4] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "\u05d1\u05e2\u05d5\u05d3 %s",
                        past: "\u05dc\u05e4\u05e0\u05d9 %s",
                        s: "\u05de\u05e1\u05e4\u05e8 \u05e9\u05e0\u05d9\u05d5\u05ea",
                        ss: "%d \u05e9\u05e0\u05d9\u05d5\u05ea",
                        m: "\u05d3\u05e7\u05d4",
                        mm: "%d \u05d3\u05e7\u05d5\u05ea",
                        h: "\u05e9\u05e2\u05d4",
                        hh: function(e) {
                            return 2 === e ? "\u05e9\u05e2\u05ea\u05d9\u05d9\u05dd" : e + " \u05e9\u05e2\u05d5\u05ea"
                        },
                        d: "\u05d9\u05d5\u05dd",
                        dd: function(e) {
                            return 2 === e ? "\u05d9\u05d5\u05de\u05d9\u05d9\u05dd" : e + " \u05d9\u05de\u05d9\u05dd"
                        },
                        M: "\u05d7\u05d5\u05d3\u05e9",
                        MM: function(e) {
                            return 2 === e ? "\u05d7\u05d5\u05d3\u05e9\u05d9\u05d9\u05dd" : e + " \u05d7\u05d5\u05d3\u05e9\u05d9\u05dd"
                        },
                        y: "\u05e9\u05e0\u05d4",
                        yy: function(e) {
                            return 2 === e ? "\u05e9\u05e0\u05ea\u05d9\u05d9\u05dd" : e % 10 == 0 && 10 !== e ? e + " \u05e9\u05e0\u05d4" : e + " \u05e9\u05e0\u05d9\u05dd"
                        }
                    },
                    meridiemParse: /\u05d0\u05d7\u05d4"\u05e6|\u05dc\u05e4\u05e0\u05d4"\u05e6|\u05d0\u05d7\u05e8\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd|\u05dc\u05e4\u05e0\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd|\u05dc\u05e4\u05e0\u05d5\u05ea \u05d1\u05d5\u05e7\u05e8|\u05d1\u05d1\u05d5\u05e7\u05e8|\u05d1\u05e2\u05e8\u05d1/i,
                    isPM: function(e) {
                        return /^(\u05d0\u05d7\u05d4"\u05e6|\u05d0\u05d7\u05e8\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd|\u05d1\u05e2\u05e8\u05d1)$/.test(e)
                    },
                    meridiem: function(e, t, a) {
                        return e < 5 ? "\u05dc\u05e4\u05e0\u05d5\u05ea \u05d1\u05d5\u05e7\u05e8" : e < 10 ? "\u05d1\u05d1\u05d5\u05e7\u05e8" : e < 12 ? a ? '\u05dc\u05e4\u05e0\u05d4"\u05e6' : "\u05dc\u05e4\u05e0\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd" : e < 18 ? a ? '\u05d0\u05d7\u05d4"\u05e6' : "\u05d0\u05d7\u05e8\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd" : "\u05d1\u05e2\u05e8\u05d1"
                    }
                })
            }(a("wd/R"))
        },
        x8uC: function(e, t, a) {
            "use strict";
            var n = a("CDJp"),
                i = a("K2E3"),
                r = a("RDha");
            n._set("global", {
                tooltips: {
                    enabled: !0,
                    custom: null,
                    mode: "nearest",
                    position: "average",
                    intersect: !0,
                    backgroundColor: "rgba(0,0,0,0.8)",
                    titleFontStyle: "bold",
                    titleSpacing: 2,
                    titleMarginBottom: 6,
                    titleFontColor: "#fff",
                    titleAlign: "left",
                    bodySpacing: 2,
                    bodyFontColor: "#fff",
                    bodyAlign: "left",
                    footerFontStyle: "bold",
                    footerSpacing: 2,
                    footerMarginTop: 6,
                    footerFontColor: "#fff",
                    footerAlign: "left",
                    yPadding: 6,
                    xPadding: 6,
                    caretPadding: 2,
                    caretSize: 5,
                    cornerRadius: 6,
                    multiKeyBackground: "#fff",
                    displayColors: !0,
                    borderColor: "rgba(0,0,0,0)",
                    borderWidth: 0,
                    callbacks: {
                        beforeTitle: r.noop,
                        title: function(e, t) {
                            var a = "",
                                n = t.labels,
                                i = n ? n.length : 0;
                            if (e.length > 0) {
                                var r = e[0];
                                r.xLabel ? a = r.xLabel : i > 0 && r.index < i && (a = n[r.index])
                            }
                            return a
                        },
                        afterTitle: r.noop,
                        beforeBody: r.noop,
                        beforeLabel: r.noop,
                        label: function(e, t) {
                            var a = t.datasets[e.datasetIndex].label || "";
                            return a && (a += ": "), a + e.yLabel
                        },
                        labelColor: function(e, t) {
                            var a = t.getDatasetMeta(e.datasetIndex).data[e.index]._view;
                            return {
                                borderColor: a.borderColor,
                                backgroundColor: a.backgroundColor
                            }
                        },
                        labelTextColor: function() {
                            return this._options.bodyFontColor
                        },
                        afterLabel: r.noop,
                        afterBody: r.noop,
                        beforeFooter: r.noop,
                        footer: r.noop,
                        afterFooter: r.noop
                    }
                }
            }), e.exports = function(e) {
                function t(e, t) {
                    var a = r.color(e);
                    return a.alpha(t * a.alpha()).rgbaString()
                }

                function a(e, t) {
                    return t && (r.isArray(t) ? Array.prototype.push.apply(e, t) : e.push(t)), e
                }

                function s(e) {
                    var t = n.global,
                        a = r.valueOrDefault;
                    return {
                        xPadding: e.xPadding,
                        yPadding: e.yPadding,
                        xAlign: e.xAlign,
                        yAlign: e.yAlign,
                        bodyFontColor: e.bodyFontColor,
                        _bodyFontFamily: a(e.bodyFontFamily, t.defaultFontFamily),
                        _bodyFontStyle: a(e.bodyFontStyle, t.defaultFontStyle),
                        _bodyAlign: e.bodyAlign,
                        bodyFontSize: a(e.bodyFontSize, t.defaultFontSize),
                        bodySpacing: e.bodySpacing,
                        titleFontColor: e.titleFontColor,
                        _titleFontFamily: a(e.titleFontFamily, t.defaultFontFamily),
                        _titleFontStyle: a(e.titleFontStyle, t.defaultFontStyle),
                        titleFontSize: a(e.titleFontSize, t.defaultFontSize),
                        _titleAlign: e.titleAlign,
                        titleSpacing: e.titleSpacing,
                        titleMarginBottom: e.titleMarginBottom,
                        footerFontColor: e.footerFontColor,
                        _footerFontFamily: a(e.footerFontFamily, t.defaultFontFamily),
                        _footerFontStyle: a(e.footerFontStyle, t.defaultFontStyle),
                        footerFontSize: a(e.footerFontSize, t.defaultFontSize),
                        _footerAlign: e.footerAlign,
                        footerSpacing: e.footerSpacing,
                        footerMarginTop: e.footerMarginTop,
                        caretSize: e.caretSize,
                        cornerRadius: e.cornerRadius,
                        backgroundColor: e.backgroundColor,
                        opacity: 0,
                        legendColorBackground: e.multiKeyBackground,
                        displayColors: e.displayColors,
                        borderColor: e.borderColor,
                        borderWidth: e.borderWidth
                    }
                }
                e.Tooltip = i.extend({
                    initialize: function() {
                        this._model = s(this._options), this._lastActive = []
                    },
                    getTitle: function() {
                        var e = this._options.callbacks,
                            t = e.beforeTitle.apply(this, arguments),
                            n = e.title.apply(this, arguments),
                            i = e.afterTitle.apply(this, arguments),
                            r = [];
                        return a(r = a(r = a(r, t), n), i)
                    },
                    getBeforeBody: function() {
                        var e = this._options.callbacks.beforeBody.apply(this, arguments);
                        return r.isArray(e) ? e : void 0 !== e ? [e] : []
                    },
                    getBody: function(e, t) {
                        var n = this,
                            i = n._options.callbacks,
                            s = [];
                        return r.each(e, function(e) {
                            var r = {
                                before: [],
                                lines: [],
                                after: []
                            };
                            a(r.before, i.beforeLabel.call(n, e, t)), a(r.lines, i.label.call(n, e, t)), a(r.after, i.afterLabel.call(n, e, t)), s.push(r)
                        }), s
                    },
                    getAfterBody: function() {
                        var e = this._options.callbacks.afterBody.apply(this, arguments);
                        return r.isArray(e) ? e : void 0 !== e ? [e] : []
                    },
                    getFooter: function() {
                        var e = this._options.callbacks,
                            t = e.beforeFooter.apply(this, arguments),
                            n = e.footer.apply(this, arguments),
                            i = e.afterFooter.apply(this, arguments),
                            r = [];
                        return a(r = a(r = a(r, t), n), i)
                    },
                    update: function(t) {
                        var a, n, i, o, d, l, u, _ = this,
                            m = _._options,
                            h = _._model,
                            c = _._model = s(m),
                            f = _._active,
                            p = _._data,
                            M = {
                                xAlign: h.xAlign,
                                yAlign: h.yAlign
                            },
                            y = {
                                x: h.x,
                                y: h.y
                            },
                            g = {
                                width: h.width,
                                height: h.height
                            },
                            L = {
                                x: h.caretX,
                                y: h.caretY
                            };
                        if (f.length) {
                            c.opacity = 1;
                            var v = [],
                                Y = [];
                            L = e.Tooltip.positioners[m.position].call(_, f, _._eventPosition);
                            var k = [];
                            for (a = 0, n = f.length; a < n; ++a) k.push((o = void 0, d = void 0, o = (i = f[a])._xScale, d = i._yScale || i._scale, l = i._index, u = i._datasetIndex, {
                                xLabel: o ? o.getLabelForIndex(l, u) : "",
                                yLabel: d ? d.getLabelForIndex(l, u) : "",
                                index: l,
                                datasetIndex: u,
                                x: i._model.x,
                                y: i._model.y
                            }));
                            m.filter && (k = k.filter(function(e) {
                                return m.filter(e, p)
                            })), m.itemSort && (k = k.sort(function(e, t) {
                                return m.itemSort(e, t, p)
                            })), r.each(k, function(e) {
                                v.push(m.callbacks.labelColor.call(_, e, _._chart)), Y.push(m.callbacks.labelTextColor.call(_, e, _._chart))
                            }), c.title = _.getTitle(k, p), c.beforeBody = _.getBeforeBody(k, p), c.body = _.getBody(k, p), c.afterBody = _.getAfterBody(k, p), c.footer = _.getFooter(k, p), c.x = Math.round(L.x), c.y = Math.round(L.y), c.caretPadding = m.caretPadding, c.labelColors = v, c.labelTextColors = Y, c.dataPoints = k, y = function(e, t, a, n) {
                                var i = e.x,
                                    r = e.y,
                                    s = e.caretPadding,
                                    o = a.xAlign,
                                    d = a.yAlign,
                                    l = e.caretSize + s,
                                    u = e.cornerRadius + s;
                                return "right" === o ? i -= t.width : "center" === o && ((i -= t.width / 2) + t.width > n.width && (i = n.width - t.width), i < 0 && (i = 0)), "top" === d ? r += l : r -= "bottom" === d ? t.height + l : t.height / 2, "center" === d ? "left" === o ? i += l : "right" === o && (i -= l) : "left" === o ? i -= u : "right" === o && (i += u), {
                                    x: i,
                                    y: r
                                }
                            }(c, g = function(e, t) {
                                var a = e._chart.ctx,
                                    n = 2 * t.yPadding,
                                    i = 0,
                                    s = t.body,
                                    o = s.reduce(function(e, t) {
                                        return e + t.before.length + t.lines.length + t.after.length
                                    }, 0);
                                o += t.beforeBody.length + t.afterBody.length;
                                var d = t.title.length,
                                    l = t.footer.length,
                                    u = t.titleFontSize,
                                    _ = t.bodyFontSize,
                                    m = t.footerFontSize;
                                n += d * u, n += d ? (d - 1) * t.titleSpacing : 0, n += d ? t.titleMarginBottom : 0, n += o * _, n += o ? (o - 1) * t.bodySpacing : 0, n += l ? t.footerMarginTop : 0, n += l * m, n += l ? (l - 1) * t.footerSpacing : 0;
                                var h = 0,
                                    c = function(e) {
                                        i = Math.max(i, a.measureText(e).width + h)
                                    };
                                return a.font = r.fontString(u, t._titleFontStyle, t._titleFontFamily), r.each(t.title, c), a.font = r.fontString(_, t._bodyFontStyle, t._bodyFontFamily), r.each(t.beforeBody.concat(t.afterBody), c), h = t.displayColors ? _ + 2 : 0, r.each(s, function(e) {
                                    r.each(e.before, c), r.each(e.lines, c), r.each(e.after, c)
                                }), h = 0, a.font = r.fontString(m, t._footerFontStyle, t._footerFontFamily), r.each(t.footer, c), {
                                    width: i += 2 * t.xPadding,
                                    height: n
                                }
                            }(this, c), M = function(e, t) {
                                var a, n, i, r, s, o = e._model,
                                    d = e._chart,
                                    l = e._chart.chartArea,
                                    u = "center",
                                    _ = "center";
                                o.y < t.height ? _ = "top" : o.y > d.height - t.height && (_ = "bottom");
                                var m = (l.left + l.right) / 2,
                                    h = (l.top + l.bottom) / 2;
                                "center" === _ ? (a = function(e) {
                                    return e <= m
                                }, n = function(e) {
                                    return e > m
                                }) : (a = function(e) {
                                    return e <= t.width / 2
                                }, n = function(e) {
                                    return e >= d.width - t.width / 2
                                }), i = function(e) {
                                    return e + t.width + o.caretSize + o.caretPadding > d.width
                                }, r = function(e) {
                                    return e - t.width - o.caretSize - o.caretPadding < 0
                                }, s = function(e) {
                                    return e <= h ? "top" : "bottom"
                                }, a(o.x) ? (u = "left", i(o.x) && (u = "center", _ = s(o.y))) : n(o.x) && (u = "right", r(o.x) && (u = "center", _ = s(o.y)));
                                var c = e._options;
                                return {
                                    xAlign: c.xAlign ? c.xAlign : u,
                                    yAlign: c.yAlign ? c.yAlign : _
                                }
                            }(this, g), _._chart)
                        } else c.opacity = 0;
                        return c.xAlign = M.xAlign, c.yAlign = M.yAlign, c.x = y.x, c.y = y.y, c.width = g.width, c.height = g.height, c.caretX = L.x, c.caretY = L.y, _._model = c, t && m.custom && m.custom.call(_, c), _
                    },
                    drawCaret: function(e, t) {
                        var a = this._chart.ctx,
                            n = this.getCaretPosition(e, t, this._view);
                        a.lineTo(n.x1, n.y1), a.lineTo(n.x2, n.y2), a.lineTo(n.x3, n.y3)
                    },
                    getCaretPosition: function(e, t, a) {
                        var n, i, r, s, o, d, l = a.caretSize,
                            u = a.cornerRadius,
                            _ = a.xAlign,
                            m = a.yAlign,
                            h = e.x,
                            c = e.y,
                            f = t.width,
                            p = t.height;
                        if ("center" === m) o = c + p / 2, "left" === _ ? (i = (n = h) - l, r = n, s = o + l, d = o - l) : (i = (n = h + f) + l, r = n, s = o - l, d = o + l);
                        else if ("left" === _ ? (n = (i = h + u + l) - l, r = i + l) : "right" === _ ? (n = (i = h + f - u - l) - l, r = i + l) : (n = (i = a.caretX) - l, r = i + l), "top" === m) o = (s = c) - l, d = s;
                        else {
                            o = (s = c + p) + l, d = s;
                            var M = r;
                            r = n, n = M
                        }
                        return {
                            x1: n,
                            x2: i,
                            x3: r,
                            y1: s,
                            y2: o,
                            y3: d
                        }
                    },
                    drawTitle: function(e, a, n, i) {
                        var s = a.title;
                        if (s.length) {
                            n.textAlign = a._titleAlign, n.textBaseline = "top";
                            var o, d, l = a.titleFontSize,
                                u = a.titleSpacing;
                            for (n.fillStyle = t(a.titleFontColor, i), n.font = r.fontString(l, a._titleFontStyle, a._titleFontFamily), o = 0, d = s.length; o < d; ++o) n.fillText(s[o], e.x, e.y), e.y += l + u, o + 1 === s.length && (e.y += a.titleMarginBottom - u)
                        }
                    },
                    drawBody: function(e, a, n, i) {
                        var s = a.bodyFontSize,
                            o = a.bodySpacing,
                            d = a.body;
                        n.textAlign = a._bodyAlign, n.textBaseline = "top", n.font = r.fontString(s, a._bodyFontStyle, a._bodyFontFamily);
                        var l = 0,
                            u = function(t) {
                                n.fillText(t, e.x + l, e.y), e.y += s + o
                            };
                        n.fillStyle = t(a.bodyFontColor, i), r.each(a.beforeBody, u);
                        var _ = a.displayColors;
                        l = _ ? s + 2 : 0, r.each(d, function(o, d) {
                            var l = t(a.labelTextColors[d], i);
                            n.fillStyle = l, r.each(o.before, u), r.each(o.lines, function(r) {
                                _ && (n.fillStyle = t(a.legendColorBackground, i), n.fillRect(e.x, e.y, s, s), n.lineWidth = 1, n.strokeStyle = t(a.labelColors[d].borderColor, i), n.strokeRect(e.x, e.y, s, s), n.fillStyle = t(a.labelColors[d].backgroundColor, i), n.fillRect(e.x + 1, e.y + 1, s - 2, s - 2), n.fillStyle = l), u(r)
                            }), r.each(o.after, u)
                        }), l = 0, r.each(a.afterBody, u), e.y -= o
                    },
                    drawFooter: function(e, a, n, i) {
                        var s = a.footer;
                        s.length && (e.y += a.footerMarginTop, n.textAlign = a._footerAlign, n.textBaseline = "top", n.fillStyle = t(a.footerFontColor, i), n.font = r.fontString(a.footerFontSize, a._footerFontStyle, a._footerFontFamily), r.each(s, function(t) {
                            n.fillText(t, e.x, e.y), e.y += a.footerFontSize + a.footerSpacing
                        }))
                    },
                    drawBackground: function(e, a, n, i, r) {
                        n.fillStyle = t(a.backgroundColor, r), n.strokeStyle = t(a.borderColor, r), n.lineWidth = a.borderWidth;
                        var s = a.xAlign,
                            o = a.yAlign,
                            d = e.x,
                            l = e.y,
                            u = i.width,
                            _ = i.height,
                            m = a.cornerRadius;
                        n.beginPath(), n.moveTo(d + m, l), "top" === o && this.drawCaret(e, i), n.lineTo(d + u - m, l), n.quadraticCurveTo(d + u, l, d + u, l + m), "center" === o && "right" === s && this.drawCaret(e, i), n.lineTo(d + u, l + _ - m), n.quadraticCurveTo(d + u, l + _, d + u - m, l + _), "bottom" === o && this.drawCaret(e, i), n.lineTo(d + m, l + _), n.quadraticCurveTo(d, l + _, d, l + _ - m), "center" === o && "left" === s && this.drawCaret(e, i), n.lineTo(d, l + m), n.quadraticCurveTo(d, l, d + m, l), n.closePath(), n.fill(), a.borderWidth > 0 && n.stroke()
                    },
                    draw: function() {
                        var e = this._chart.ctx,
                            t = this._view;
                        if (0 !== t.opacity) {
                            var a = {
                                    width: t.width,
                                    height: t.height
                                },
                                n = {
                                    x: t.x,
                                    y: t.y
                                },
                                i = Math.abs(t.opacity < .001) ? 0 : t.opacity;
                            this._options.enabled && (t.title.length || t.beforeBody.length || t.body.length || t.afterBody.length || t.footer.length) && (this.drawBackground(n, t, e, a, i), n.x += t.xPadding, n.y += t.yPadding, this.drawTitle(n, t, e, i), this.drawBody(n, t, e, i), this.drawFooter(n, t, e, i))
                        }
                    },
                    handleEvent: function(e) {
                        var t, a = this,
                            n = a._options;
                        return a._lastActive = a._lastActive || [], a._active = "mouseout" === e.type ? [] : a._chart.getElementsAtEventForMode(e, n.mode, n), (t = !r.arrayEquals(a._active, a._lastActive)) && (a._lastActive = a._active, (n.enabled || n.custom) && (a._eventPosition = {
                            x: e.x,
                            y: e.y
                        }, a.update(!0), a.pivot())), t
                    }
                }), e.Tooltip.positioners = {
                    average: function(e) {
                        if (!e.length) return !1;
                        var t, a, n = 0,
                            i = 0,
                            r = 0;
                        for (t = 0, a = e.length; t < a; ++t) {
                            var s = e[t];
                            if (s && s.hasValue()) {
                                var o = s.tooltipPosition();
                                n += o.x, i += o.y, ++r
                            }
                        }
                        return {
                            x: Math.round(n / r),
                            y: Math.round(i / r)
                        }
                    },
                    nearest: function(e, t) {
                        var a, n, i, s = t.x,
                            o = t.y,
                            d = Number.POSITIVE_INFINITY;
                        for (a = 0, n = e.length; a < n; ++a) {
                            var l = e[a];
                            if (l && l.hasValue()) {
                                var u = l.getCenterPoint(),
                                    _ = r.distanceBetweenPoints(t, u);
                                _ < d && (d = _, i = l)
                            }
                        }
                        if (i) {
                            var m = i.tooltipPosition();
                            s = m.x, o = m.y
                        }
                        return {
                            x: s,
                            y: o
                        }
                    }
                }
            }
        },
        xdbM: function(e, t, a) {
            "use strict";
            var n = a("mrSG").__decorate,
                i = a("mrSG").__metadata,
                r = a("CcnG"),
                s = a("WyAD"),
                o = function() {
                    function e(e) {
                        this.labels = [], this.options = {}, this.chartClick = new r.EventEmitter, this.chartHover = new r.EventEmitter, this.initFlag = !1, this.element = e
                    }
                    return e.prototype.ngOnInit = function() {
                        this.ctx = this.element.nativeElement.getContext("2d"), this.cvs = this.element.nativeElement, this.initFlag = !0, (this.data || this.datasets) && this.refresh()
                    }, e.prototype.ngOnChanges = function(e) {
                        this.initFlag && (e.hasOwnProperty("data") || e.hasOwnProperty("datasets") ? (this.updateChartData(e.data ? e.data.currentValue : e.datasets.currentValue), this.chart.update()) : this.refresh())
                    }, e.prototype.ngOnDestroy = function() {
                        this.chart && (this.chart.destroy(), this.chart = void 0)
                    }, e.prototype.getChartBuilder = function(e) {
                        var t = this,
                            a = this.getDatasets(),
                            n = Object.assign({}, this.options);
                        return !1 === this.legend && (n.legend = {
                            display: !1
                        }), n.hover = n.hover || {}, n.hover.onHover || (n.hover.onHover = function(e) {
                            e && !e.length || t.chartHover.emit({
                                active: e
                            })
                        }), n.onClick || (n.onClick = function(e, a) {
                            t.chartClick.emit({
                                event: e,
                                active: a
                            })
                        }), new s.Chart(e, {
                            type: this.chartType,
                            data: {
                                labels: this.labels,
                                datasets: a
                            },
                            options: n
                        })
                    }, e.prototype.updateChartData = function(e) {
                        Array.isArray(e[0].data) ? this.chart.data.datasets.forEach(function(t, a) {
                            t.data = e[a].data, e[a].label && (t.label = e[a].label)
                        }) : this.chart.data.datasets[0].data = e
                    }, e.prototype.getDatasets = function() {
                        var e = this,
                            t = void 0;
                        if ((!this.datasets || !this.datasets.length && this.data && this.data.length) && (t = Array.isArray(this.data[0]) ? this.data.map(function(t, a) {
                                return {
                                    data: t,
                                    label: e.labels[a] || "Label " + a
                                }
                            }) : [{
                                data: this.data,
                                label: "Label 0"
                            }]), (this.datasets && this.datasets.length || t && t.length) && (t = (this.datasets || t).map(function(t, a) {
                                var n = Object.assign({}, t);
                                return e.colors && e.colors.length ? Object.assign(n, e.colors[a]) : Object.assign(n, function(e, t, a) {
                                    return "pie" === e || "doughnut" === e ? {
                                        backgroundColor: (n = m(a)).map(function(e) {
                                            return d(e, .6)
                                        }),
                                        borderColor: n.map(function() {
                                            return "#fff"
                                        }),
                                        pointBackgroundColor: n.map(function(e) {
                                            return d(e, 1)
                                        }),
                                        pointBorderColor: n.map(function() {
                                            return "#fff"
                                        }),
                                        pointHoverBackgroundColor: n.map(function(e) {
                                            return d(e, 1)
                                        }),
                                        pointHoverBorderColor: n.map(function(e) {
                                            return d(e, 1)
                                        })
                                    } : "polarArea" === e ? function(e) {
                                        return {
                                            backgroundColor: e.map(function(e) {
                                                return d(e, .6)
                                            }),
                                            borderColor: e.map(function(e) {
                                                return d(e, 1)
                                            }),
                                            hoverBackgroundColor: e.map(function(e) {
                                                return d(e, .8)
                                            }),
                                            hoverBorderColor: e.map(function(e) {
                                                return d(e, 1)
                                            })
                                        }
                                    }(m(a)) : "line" === e || "radar" === e ? function(e) {
                                        return {
                                            backgroundColor: d(e, .4),
                                            borderColor: d(e, 1),
                                            pointBackgroundColor: d(e, 1),
                                            pointBorderColor: "#fff",
                                            pointHoverBackgroundColor: "#fff",
                                            pointHoverBorderColor: d(e, .8)
                                        }
                                    }(_(t)) : "bar" === e || "horizontalBar" === e ? function(e) {
                                        return {
                                            backgroundColor: d(e, .6),
                                            borderColor: d(e, 1),
                                            hoverBackgroundColor: d(e, .8),
                                            hoverBorderColor: d(e, 1)
                                        }
                                    }(_(t)) : _(t);
                                    var n
                                }(e.chartType, a, n.data.length)), n
                            })), !t) throw new Error("ng-charts configuration error,\n      data or datasets field are required to render char " + this.chartType);
                        return t
                    }, e.prototype.refresh = function() {
                        this.ngOnDestroy(), this.chart = this.getChartBuilder(this.ctx)
                    }, e.defaultColors = [
                        [255, 99, 132],
                        [54, 162, 235],
                        [255, 206, 86],
                        [231, 233, 237],
                        [75, 192, 192],
                        [151, 187, 205],
                        [220, 220, 220],
                        [247, 70, 74],
                        [70, 191, 189],
                        [253, 180, 92],
                        [148, 159, 177],
                        [77, 83, 96]
                    ], e
                }();

            function d(e, t) {
                return "rgba(" + e.concat(t).join(",") + ")"
            }

            function l(e, t) {
                return Math.floor(Math.random() * (t - e + 1)) + e
            }

            function u() {
                return [l(0, 255), l(0, 255), l(0, 255)]
            }

            function _(e) {
                return o.defaultColors[e] || u()
            }

            function m(e) {
                for (var t = new Array(e), a = 0; a < e; a++) t[a] = o.defaultColors[a] || u();
                return t
            }
            n([r.Input(), i("design:type", Array)], o.prototype, "data", void 0), n([r.Input(), i("design:type", Array)], o.prototype, "datasets", void 0), n([r.Input(), i("design:type", Array)], o.prototype, "labels", void 0), n([r.Input(), i("design:type", Object)], o.prototype, "options", void 0), n([r.Input(), i("design:type", String)], o.prototype, "chartType", void 0), n([r.Input(), i("design:type", Array)], o.prototype, "colors", void 0), n([r.Input(), i("design:type", Boolean)], o.prototype, "legend", void 0), n([r.Output(), i("design:type", r.EventEmitter)], o.prototype, "chartClick", void 0), n([r.Output(), i("design:type", r.EventEmitter)], o.prototype, "chartHover", void 0), o = n([r.Directive({
                selector: "canvas[baseChart]",
                exportAs: "base-chart"
            })], o), t.BaseChartDirective = o;
            var h = function() {};
            h = n([r.NgModule({
                declarations: [o],
                exports: [o],
                imports: []
            })], h), t.ChartsModule = h
        },
        yPMN: function(e, t, a) {
            "use strict";
            a("CDJp")._set("global", {
                responsive: !0,
                responsiveAnimationDuration: 0,
                maintainAspectRatio: !0,
                events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
                hover: {
                    onHover: null,
                    mode: "nearest",
                    intersect: !0,
                    animationDuration: 400
                },
                onClick: null,
                defaultColor: "rgba(0,0,0,0.1)",
                defaultFontColor: "#666",
                defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                defaultFontSize: 12,
                defaultFontStyle: "normal",
                showLines: !0,
                elements: {},
                layout: {
                    padding: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }
                }
            }), e.exports = function() {
                var e = function(e, t) {
                    return this.construct(e, t), this
                };
                return e.Chart = e, e
            }
        },
        yPMs: function(e, t, a) {
            ! function(e) {
                "use strict";
                e.defineLocale("sq", {
                    months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_N\xebntor_Dhjetor".split("_"),
                    monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_N\xebn_Dhj".split("_"),
                    weekdays: "E Diel_E H\xebn\xeb_E Mart\xeb_E M\xebrkur\xeb_E Enjte_E Premte_E Shtun\xeb".split("_"),
                    weekdaysShort: "Die_H\xebn_Mar_M\xebr_Enj_Pre_Sht".split("_"),
                    weekdaysMin: "D_H_Ma_M\xeb_E_P_Sh".split("_"),
                    weekdaysParseExact: !0,
                    meridiemParse: /PD|MD/,
                    isPM: function(e) {
                        return "M" === e.charAt(0)
                    },
                    meridiem: function(e, t, a) {
                        return e < 12 ? "PD" : "MD"
                    },
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[Sot n\xeb] LT",
                        nextDay: "[Nes\xebr n\xeb] LT",
                        nextWeek: "dddd [n\xeb] LT",
                        lastDay: "[Dje n\xeb] LT",
                        lastWeek: "dddd [e kaluar n\xeb] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "n\xeb %s",
                        past: "%s m\xeb par\xeb",
                        s: "disa sekonda",
                        ss: "%d sekonda",
                        m: "nj\xeb minut\xeb",
                        mm: "%d minuta",
                        h: "nj\xeb or\xeb",
                        hh: "%d or\xeb",
                        d: "nj\xeb dit\xeb",
                        dd: "%d dit\xeb",
                        M: "nj\xeb muaj",
                        MM: "%d muaj",
                        y: "nj\xeb vit",
                        yy: "%d vite"
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(a("wd/R"))
        },
        z1FC: function(e, t, a) {
            ! function(e) {
                "use strict";

                function t(e, t, a, n) {
                    var i = {
                        s: ["viensas secunds", "'iensas secunds"],
                        ss: [e + " secunds", e + " secunds"],
                        m: ["'n m\xedut", "'iens m\xedut"],
                        mm: [e + " m\xeduts", e + " m\xeduts"],
                        h: ["'n \xfeora", "'iensa \xfeora"],
                        hh: [e + " \xfeoras", e + " \xfeoras"],
                        d: ["'n ziua", "'iensa ziua"],
                        dd: [e + " ziuas", e + " ziuas"],
                        M: ["'n mes", "'iens mes"],
                        MM: [e + " mesen", e + " mesen"],
                        y: ["'n ar", "'iens ar"],
                        yy: [e + " ars", e + " ars"]
                    };
                    return n ? i[a][0] : t ? i[a][0] : i[a][1]
                }
                e.defineLocale("tzl", {
                    months: "Januar_Fevraglh_Mar\xe7_Avr\xefu_Mai_G\xfcn_Julia_Guscht_Setemvar_Listop\xe4ts_Noemvar_Zecemvar".split("_"),
                    monthsShort: "Jan_Fev_Mar_Avr_Mai_G\xfcn_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
                    weekdays: "S\xfaladi_L\xfane\xe7i_Maitzi_M\xe1rcuri_Xh\xfaadi_Vi\xe9ner\xe7i_S\xe1turi".split("_"),
                    weekdaysShort: "S\xfal_L\xfan_Mai_M\xe1r_Xh\xfa_Vi\xe9_S\xe1t".split("_"),
                    weekdaysMin: "S\xfa_L\xfa_Ma_M\xe1_Xh_Vi_S\xe1".split("_"),
                    longDateFormat: {
                        LT: "HH.mm",
                        LTS: "HH.mm.ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM [dallas] YYYY",
                        LLL: "D. MMMM [dallas] YYYY HH.mm",
                        LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
                    },
                    meridiemParse: /d\'o|d\'a/i,
                    isPM: function(e) {
                        return "d'o" === e.toLowerCase()
                    },
                    meridiem: function(e, t, a) {
                        return e > 11 ? a ? "d'o" : "D'O" : a ? "d'a" : "D'A"
                    },
                    calendar: {
                        sameDay: "[oxhi \xe0] LT",
                        nextDay: "[dem\xe0 \xe0] LT",
                        nextWeek: "dddd [\xe0] LT",
                        lastDay: "[ieiri \xe0] LT",
                        lastWeek: "[s\xfcr el] dddd [lasteu \xe0] LT",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "osprei %s",
                        past: "ja%s",
                        s: t,
                        ss: t,
                        m: t,
                        mm: t,
                        h: t,
                        hh: t,
                        d: t,
                        dd: t,
                        M: t,
                        MM: t,
                        y: t,
                        yy: t
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(a("wd/R"))
        },
        z3Vd: function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = "pagh_wa\u2019_cha\u2019_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");

                function a(e, a, n, i) {
                    var r = function(e) {
                        var a = Math.floor(e % 1e3 / 100),
                            n = Math.floor(e % 100 / 10),
                            i = e % 10,
                            r = "";
                        return a > 0 && (r += t[a] + "vatlh"), n > 0 && (r += ("" !== r ? " " : "") + t[n] + "maH"), i > 0 && (r += ("" !== r ? " " : "") + t[i]), "" === r ? "pagh" : r
                    }(e);
                    switch (n) {
                        case "ss":
                            return r + " lup";
                        case "mm":
                            return r + " tup";
                        case "hh":
                            return r + " rep";
                        case "dd":
                            return r + " jaj";
                        case "MM":
                            return r + " jar";
                        case "yy":
                            return r + " DIS"
                    }
                }
                e.defineLocale("tlh", {
                    months: "tera\u2019 jar wa\u2019_tera\u2019 jar cha\u2019_tera\u2019 jar wej_tera\u2019 jar loS_tera\u2019 jar vagh_tera\u2019 jar jav_tera\u2019 jar Soch_tera\u2019 jar chorgh_tera\u2019 jar Hut_tera\u2019 jar wa\u2019maH_tera\u2019 jar wa\u2019maH wa\u2019_tera\u2019 jar wa\u2019maH cha\u2019".split("_"),
                    monthsShort: "jar wa\u2019_jar cha\u2019_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa\u2019maH_jar wa\u2019maH wa\u2019_jar wa\u2019maH cha\u2019".split("_"),
                    monthsParseExact: !0,
                    weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
                    weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
                    weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
                    longDateFormat: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm"
                    },
                    calendar: {
                        sameDay: "[DaHjaj] LT",
                        nextDay: "[wa\u2019leS] LT",
                        nextWeek: "LLL",
                        lastDay: "[wa\u2019Hu\u2019] LT",
                        lastWeek: "LLL",
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: function(e) {
                            var t = e;
                            return -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "leS" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "waQ" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "nem" : t + " pIq"
                        },
                        past: function(e) {
                            var t = e;
                            return -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "Hu\u2019" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "wen" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "ben" : t + " ret"
                        },
                        s: "puS lup",
                        ss: a,
                        m: "wa\u2019 tup",
                        mm: a,
                        h: "wa\u2019 rep",
                        hh: a,
                        d: "wa\u2019 jaj",
                        dd: a,
                        M: "wa\u2019 jar",
                        MM: a,
                        y: "wa\u2019 DIS",
                        yy: a
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 4
                    }
                })
            }(a("wd/R"))
        },
        zx6S: function(e, t, a) {
            ! function(e) {
                "use strict";
                var t = {
                    words: {
                        ss: ["sekunda", "sekunde", "sekundi"],
                        m: ["jedan minut", "jedne minute"],
                        mm: ["minut", "minute", "minuta"],
                        h: ["jedan sat", "jednog sata"],
                        hh: ["sat", "sata", "sati"],
                        dd: ["dan", "dana", "dana"],
                        MM: ["mesec", "meseca", "meseci"],
                        yy: ["godina", "godine", "godina"]
                    },
                    correctGrammaticalCase: function(e, t) {
                        return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
                    },
                    translate: function(e, a, n) {
                        var i = t.words[n];
                        return 1 === n.length ? a ? i[0] : i[1] : e + " " + t.correctGrammaticalCase(e, i)
                    }
                };
                e.defineLocale("sr", {
                    months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
                    monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
                    monthsParseExact: !0,
                    weekdays: "nedelja_ponedeljak_utorak_sreda_\u010detvrtak_petak_subota".split("_"),
                    weekdaysShort: "ned._pon._uto._sre._\u010det._pet._sub.".split("_"),
                    weekdaysMin: "ne_po_ut_sr_\u010de_pe_su".split("_"),
                    weekdaysParseExact: !0,
                    longDateFormat: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY H:mm",
                        LLLL: "dddd, D. MMMM YYYY H:mm"
                    },
                    calendar: {
                        sameDay: "[danas u] LT",
                        nextDay: "[sutra u] LT",
                        nextWeek: function() {
                            switch (this.day()) {
                                case 0:
                                    return "[u] [nedelju] [u] LT";
                                case 3:
                                    return "[u] [sredu] [u] LT";
                                case 6:
                                    return "[u] [subotu] [u] LT";
                                case 1:
                                case 2:
                                case 4:
                                case 5:
                                    return "[u] dddd [u] LT"
                            }
                        },
                        lastDay: "[ju\u010de u] LT",
                        lastWeek: function() {
                            return ["[pro\u0161le] [nedelje] [u] LT", "[pro\u0161log] [ponedeljka] [u] LT", "[pro\u0161log] [utorka] [u] LT", "[pro\u0161le] [srede] [u] LT", "[pro\u0161log] [\u010detvrtka] [u] LT", "[pro\u0161log] [petka] [u] LT", "[pro\u0161le] [subote] [u] LT"][this.day()]
                        },
                        sameElse: "L"
                    },
                    relativeTime: {
                        future: "za %s",
                        past: "pre %s",
                        s: "nekoliko sekundi",
                        ss: t.translate,
                        m: t.translate,
                        mm: t.translate,
                        h: t.translate,
                        hh: t.translate,
                        d: "dan",
                        dd: t.translate,
                        M: "mesec",
                        MM: t.translate,
                        y: "godinu",
                        yy: t.translate
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: "%d.",
                    week: {
                        dow: 1,
                        doy: 7
                    }
                })
            }(a("wd/R"))
        }
    }
]);