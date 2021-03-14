(this.webpackJsonpcadre = this.webpackJsonpcadre || []).push([
  [0],
  {
    33: function (t, e, a) {},
    34: function (t, e, a) {},
    57: function (t, e, a) {},
    60: function (t, e, a) {
      "use strict";
      a.r(e);
      var s = a(1),
        n = a.n(s),
        c = a(26),
        r = a.n(c),
        i = (a(33), a(34), a(10)),
        d = a(11),
        o = a(13),
        l = a(12),
        j = a(62),
        h = a(63),
        u = a(65),
        b = a(68),
        O = a(67),
        y = a(64),
        p = a(17),
        f = a.n(p),
        x = a(27),
        v = (a(9), a(2)),
        m = (function (t) {
          Object(o.a)(a, t);
          var e = Object(l.a)(a);
          function a(t) {
            var s;
            return (
              Object(i.a)(this, a),
              ((s = e.call(this, t)).state = { courselist: [], assgn: [] }),
              (s.test = !1),
              s
            );
          }
          return (
            Object(d.a)(a, [
              {
                key: "componentDidMount",
                value: (function () {
                  var t = Object(x.a)(
                    f.a.mark(function t() {
                      return f.a.wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "render",
                value: function () {
                  var t = this.state.courselist;
                  return Object(v.jsxs)(j.a, {
                    children: [
                      Object(v.jsx)(h.a, {
                        children: Object(v.jsx)("div", {
                          className: this.props.today ? "blue" : "black",
                          children: Object(v.jsx)("h3", {
                            children: this.props.day,
                          }),
                        }),
                      }),
                      Object(v.jsx)(h.a, {
                        children: Object(v.jsx)("div", {
                          className: this.props.today ? "blue" : "black",
                          children: Object(v.jsx)("h4", {
                            children: this.props.date,
                          }),
                        }),
                      }),
                      t.map(function (t, e) {
                        return Object(v.jsx)(
                          h.a,
                          { className: "course", children: t },
                          e
                        );
                      }),
                    ],
                  });
                },
              },
            ]),
            a
          );
        })(n.a.Component),
        g =
          (a(57),
          (function (t) {
            Object(o.a)(a, t);
            var e = Object(l.a)(a);
            function a(t) {
              var s;
              return (
                Object(i.a)(this, a),
                ((s = e.call(this, t)).setDayRef = function (t) {
                  s.expandRef = t;
                }),
                (s.state = { today: new Date(), days: 3 }),
                (s.date = Object(O.a)(s.state.today, "d")),
                (s.expandRef = n.a.createRef()),
                s
              );
            }
            return (
              Object(d.a)(a, [
                {
                  key: "shouldComponentUpdate",
                  value: function () {
                    return this.state.days > 0;
                  },
                },
                {
                  key: "hello",
                  value: function () {
                    console.log("I was triggered during render");
                  },
                },
                {
                  key: "expandDay",
                  value: function () {
                    var t = this.expandRef;
                    console.log(t);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    for (
                      var t = this, e = [], a = 0;
                      a < this.state.days;
                      a++
                    ) {
                      var s =
                        0 === a
                          ? Object(v.jsx)(
                              m,
                              {
                                className: "a-day",
                                today: !0,
                                month: Object(O.a)(this.state.today, "LLL"),
                                date: this.state.today.getDate(),
                                day: Object(O.a)(this.state.today, "EEE"),
                                ref: this.setDayRef,
                              },
                              Math.random()
                            )
                          : Object(v.jsx)(
                              m,
                              {
                                className: "a-day",
                                today: !1,
                                month: Object(O.a)(
                                  Object(y.a)(this.state.today, a),
                                  "LLL"
                                ),
                                date: Object(y.a)(
                                  this.state.today,
                                  a
                                ).getDate(),
                                day: Object(O.a)(
                                  Object(y.a)(this.state.today, a),
                                  "EEE"
                                ),
                                ref: this.setDayRef,
                              },
                              a
                            );
                      e.push(s);
                    }
                    return Object(v.jsxs)(j.a, {
                      className: "bx--grid calendar-contain",
                      narrow: !0,
                      children: [
                        Object(v.jsx)(h.a, {
                          children: Object(v.jsxs)("h4", {
                            "aria-label": "calendar",
                            className: "calendar-title",
                            children: [
                              " ",
                              Object(O.a)(this.state.today, "LLLL"),
                              " ",
                              this.date,
                              this.state.days > 1
                                ? " \u2014 " +
                                  Object(O.a)(
                                    Object(y.a)(
                                      this.state.today,
                                      this.state.days
                                    ),
                                    "LLLL"
                                  ) +
                                  " " +
                                  Object(y.a)(
                                    this.state.today,
                                    this.state.days - 1
                                  ).getDate()
                                : "",
                            ],
                          }),
                        }),
                        Object(v.jsx)(h.a, {
                          className: "slider-row",
                          children: Object(v.jsx)(u.a, {
                            lg: 4,
                            md: 2,
                            sm: 0,
                            children: Object(v.jsxs)("div", {
                              children: [
                                Object(v.jsxs)("p", {
                                  children: [this.state.days, " days"],
                                }),
                                Object(v.jsx)(b.a, {
                                  ariaLabelInput: "day slider",
                                  className: "day-slider ",
                                  max: 5,
                                  min: 1,
                                  value: 3,
                                  onChange: function (e) {
                                    var a = e.value;
                                    return t.setState({ days: a });
                                  },
                                }),
                              ],
                            }),
                          }),
                        }),
                        Object(v.jsx)(h.a, {
                          className: "date-head",
                          children: e.map(function (e) {
                            return Object(v.jsx)(
                              u.a,
                              {
                                className: "a-day",
                                onClick: function () {
                                  return t.expandDay();
                                },
                                children: e,
                              },
                              e.props.date
                            );
                          }),
                        }),
                      ],
                    });
                  },
                },
              ]),
              a
            );
          })(n.a.Component)),
        L = a(69);
      var N = function () {
          return Object(v.jsx)("div", {
            className: "App",
            children: Object(v.jsx)(L.a, {
              isFixedNav: !0,
              expanded: !0,
              isChildOfHeader: !1,
              "aria-label": "Side navigation",
            }),
          });
        },
        k = a(66);
      var D = function () {
          return Object(v.jsxs)("div", {
            className: "App",
            children: [
              Object(v.jsx)(N, {}),
              Object(v.jsx)(k.a, { children: Object(v.jsx)(g, {}) }),
            ],
          });
        },
        C = function (t) {
          t &&
            t instanceof Function &&
            a
              .e(3)
              .then(a.bind(null, 70))
              .then(function (e) {
                var a = e.getCLS,
                  s = e.getFID,
                  n = e.getFCP,
                  c = e.getLCP,
                  r = e.getTTFB;
                a(t), s(t), n(t), c(t), r(t);
              });
        };
      r.a.render(
        Object(v.jsx)(n.a.StrictMode, { children: Object(v.jsx)(D, {}) }),
        document.getElementById("root")
      ),
        C();
    },
  },
  [[60, 1, 2]],
]);
//# sourceMappingURL=main.8514a2dd.chunk.js.map
