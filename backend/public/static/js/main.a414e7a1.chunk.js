(this.webpackJsonpcadre = this.webpackJsonpcadre || []).push([
  [0],
  {
    45: function (e, t, a) {},
    46: function (e, t, a) {},
    67: function (e, t, a) {},
    72: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(3),
        r = a.n(n),
        s = a(38),
        c = a.n(s),
        i = (a(45), a(46), a(16)),
        d = a(17),
        o = a(24),
        u = a(22),
        l = a(76),
        p = a(77),
        h = a(78),
        j = a(82),
        f = a(81),
        b = a(75),
        m = a(6),
        x = a.n(m),
        O = a(8),
        y = a(10),
        v = a.n(y),
        g = {
          getStudents: (function () {
            var e = Object(O.a)(
              x.a.mark(function e() {
                var t;
                return x.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), v.a.get("/students");
                      case 2:
                        return (t = e.sent), e.abrupt("return", t.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          getStudentByEmail: (function () {
            var e = Object(O.a)(
              x.a.mark(function e(t) {
                var a;
                return x.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          v()({
                            method: "post",
                            url: "/getStudent",
                            data: { email: t },
                          })
                        );
                      case 2:
                        return (a = e.sent), e.abrupt("return", a.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          createStudent: (function () {
            var e = Object(O.a)(
              x.a.mark(function e(t, a, n) {
                var r;
                return x.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          v()({
                            method: "post",
                            url: "/students",
                            data: { email: t, firstName: a, lastName: n },
                          })
                        );
                      case 2:
                        return (r = e.sent), e.abrupt("return", r.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t, a, n) {
              return e.apply(this, arguments);
            };
          })(),
          deleteStudent: (function () {
            var e = Object(O.a)(
              x.a.mark(function e(t) {
                var a;
                return x.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          v()({
                            method: "delete",
                            url: "/students",
                            data: { email: t },
                          })
                        );
                      case 2:
                        return (a = e.sent), e.abrupt("return", a.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          getProfessors: (function () {
            var e = Object(O.a)(
              x.a.mark(function e() {
                var t;
                return x.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), v.a.get("/professor");
                      case 2:
                        return (t = e.sent), e.abrupt("return", t.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          getProfessorByEmail: (function () {
            var e = Object(O.a)(
              x.a.mark(function e(t) {
                var a;
                return x.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          v()({
                            method: "post",
                            url: "/getProfessor",
                            data: { email: t },
                          })
                        );
                      case 2:
                        return (a = e.sent), e.abrupt("return", a.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          createProfessor: (function () {
            var e = Object(O.a)(
              x.a.mark(function e(t, a, n) {
                var r;
                return x.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          v()({
                            method: "post",
                            url: "/professors",
                            data: { email: t, firstName: a, lastName: n },
                          })
                        );
                      case 2:
                        return (r = e.sent), e.abrupt("return", r.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t, a, n) {
              return e.apply(this, arguments);
            };
          })(),
          deleteProfessor: (function () {
            var e = Object(O.a)(
              x.a.mark(function e(t) {
                var a;
                return x.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          v()({
                            method: "delete",
                            url: "/professors",
                            data: { email: t },
                          })
                        );
                      case 2:
                        return (a = e.sent), e.abrupt("return", a.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          getCourses: (function () {
            var e = Object(O.a)(
              x.a.mark(function e() {
                var t;
                return x.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), v.a.get("/courses");
                      case 2:
                        return (t = e.sent), e.abrupt("return", t.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          getLectures: (function () {
            var e = Object(O.a)(
              x.a.mark(function e() {
                var t;
                return x.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), v.a.get("/lectures");
                      case 2:
                        return (t = e.sent), e.abrupt("return", t.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          getModifiedLecture: (function () {
            var e = Object(O.a)(
              x.a.mark(function e(t, a) {
                var n;
                return x.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          v()({
                            method: "post",
                            url: "/getLecture",
                            data: { courseId: t, lectureDate: a },
                          })
                        );
                      case 2:
                        return (n = e.sent), e.abrupt("return", n.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t, a) {
              return e.apply(this, arguments);
            };
          })(),
          getLabs: (function () {
            var e = Object(O.a)(
              x.a.mark(function e() {
                var t;
                return x.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), v.a.get("/labs");
                      case 2:
                        return (t = e.sent), e.abrupt("return", t.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
        },
        k = a(80),
        w = a(73),
        N = a(74),
        L = a(1),
        D = (function (e) {
          Object(o.a)(a, e);
          var t = Object(u.a)(a);
          function a(e) {
            var n;
            return (
              Object(i.a)(this, a),
              ((n = t.call(this, e)).state = {
                lectures: [],
                labs: [],
                assignments: [],
                student: n.props.student,
                expand: "no-expand",
              }),
              (n.test = !1),
              n
            );
          }
          return (
            Object(d.a)(a, [
              {
                key: "componentDidMount",
                value: (function () {
                  var e = Object(O.a)(
                    x.a.mark(function e() {
                      var t,
                        a,
                        n = this;
                      return x.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                (t = this.props.student.courses.filter(
                                  function (e) {
                                    if (e.days.includes(n.props.day))
                                      return (
                                        (e.startDate = Object(k.a)(
                                          e.startDate,
                                          "yyyy-MM-dd",
                                          new Date()
                                        )),
                                        (e.endDate = Object(k.a)(
                                          e.endDate,
                                          "yyyy-MM-dd",
                                          new Date()
                                        )),
                                        (e.startTime = Object(k.a)(
                                          e.startTime,
                                          "HH:mm",
                                          new Date()
                                        )),
                                        (e.endTime = Object(k.a)(
                                          e.endTime,
                                          "HH:mm",
                                          new Date()
                                        )),
                                        e
                                      );
                                  }
                                )),
                                  (a = this.props.student.labs.filter(function (
                                    e
                                  ) {
                                    if (e.days.includes(n.props.day))
                                      return (
                                        (e.startTime = Object(k.a)(
                                          e.startTime,
                                          "HH:mm",
                                          new Date()
                                        )),
                                        (e.endTime = Object(k.a)(
                                          e.endTime,
                                          "HH:mm",
                                          new Date()
                                        )),
                                        e
                                      );
                                  })),
                                  this.setState({ lectures: t, labs: a });
                              case 3:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "parseTime",
                value: function (e) {
                  var t = Object(w.a)(e),
                    a = Object(N.a)(e);
                  return (
                    (t >= 13 ? t - 12 : t) +
                    ":" +
                    (0 === a ? "00" : a) +
                    (t >= 12 ? " PM" : " AM")
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.state,
                    a = t.lectures,
                    n = t.labs,
                    r = {
                      transform:
                        "is-expanded" === this.state.expand
                          ? "translateX(-".concat(
                              (function (e) {
                                var t = document.getElementById(
                                  "clndr-col-" + e
                                );
                                return (
                                  console.log(t.clientWidth), t.clientWidth
                                );
                              })(this.props.i) * this.props.i,
                              "px)"
                            )
                          : "translateX(0px)",
                    };
                  return (
                    console.log(this.props.expandWidth),
                    Object(L.jsxs)("section", {
                      id: "clndr-col-" + this.props.i,
                      className:
                        "day-col " +
                        this.state.expand +
                        (this.props.today ? " clndr-today" : ""),
                      style: r,
                      children: [
                        Object(L.jsxs)("div", {
                          className: "date",
                          children: [
                            Object(L.jsx)("h3", {
                              className: "clndr-day",
                              children: this.props.day,
                            }),
                            Object(L.jsx)("h4", {
                              className: "clndr-date",
                              children: this.props.date,
                            }),
                          ],
                        }),
                        Object(L.jsxs)("div", {
                          className: "courses",
                          children: [
                            a.map(function (t) {
                              return Object(L.jsxs)(
                                "div",
                                {
                                  className: "course",
                                  children: [
                                    Object(L.jsx)("div", {
                                      className: "course-id",
                                      children: Object(L.jsx)("h4", {
                                        children: t.courseId,
                                      }),
                                    }),
                                    Object(L.jsx)("div", {
                                      className: "fullname-course",
                                      style: {
                                        display:
                                          e.props.days < 4 ? "block" : "none",
                                      },
                                      children: Object(L.jsx)("h6", {
                                        children:
                                          t.courseName + " " + t.section,
                                      }),
                                    }),
                                    Object(L.jsx)("div", {
                                      className: "time",
                                      children: Object(L.jsxs)("h5", {
                                        children: [
                                          " ",
                                          e.parseTime(t.startTime) +
                                            " - " +
                                            e.parseTime(t.endTime),
                                          " ",
                                        ],
                                      }),
                                    }),
                                    Object(L.jsxs)("div", {
                                      className: "zoomlink",
                                      children: [
                                        Object(L.jsx)("h5", {
                                          className: "blue",
                                          children: Object(L.jsx)("a", {
                                            target: "_blank",
                                            rel: "noreferrer",
                                            href: t.zoomLink,
                                            children: "Zoom Link:",
                                          }),
                                        }),
                                        Object(L.jsx)("p", {
                                          style: {
                                            display:
                                              e.props.days < 4
                                                ? "block"
                                                : "none",
                                          },
                                          children: Object(L.jsx)("a", {
                                            target: "_blank",
                                            rel: "noreferrer",
                                            href: t.zoomLink,
                                            children: t.zoomLink,
                                          }),
                                        }),
                                      ],
                                    }),
                                    Object(L.jsx)("div", {
                                      className: "xtra-info",
                                      style: {
                                        display:
                                          "is-expanded" === e.state.expand
                                            ? "block"
                                            : "none",
                                      },
                                      children: Object(L.jsxs)("ul", {
                                        children: [
                                          Object(L.jsx)("li", {
                                            children: "assignments",
                                          }),
                                          Object(L.jsx)("li", {
                                            children: "office hours",
                                          }),
                                          Object(L.jsx)("li", {
                                            children: "other",
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                },
                                t.id
                              );
                            }),
                            n.map(function (t) {
                              return Object(L.jsxs)(
                                "div",
                                {
                                  className: "lab",
                                  children: [
                                    Object(L.jsx)("div", {
                                      className: "course-id",
                                      children: Object(L.jsx)("h4", {
                                        children: t.labId ? t.labId : "Lab",
                                      }),
                                    }),
                                    Object(L.jsx)("div", {
                                      className: "fullname-course",
                                      style: {
                                        display:
                                          e.props.days < 4 ? "block" : "none",
                                      },
                                      children: Object(L.jsx)("h4", {
                                        children:
                                          t.courseName + " " + t.section,
                                      }),
                                    }),
                                    Object(L.jsx)("div", {
                                      className: "time",
                                      children: Object(L.jsxs)("h5", {
                                        children: [
                                          " ",
                                          e.parseTime(t.startTime) +
                                            " - " +
                                            e.parseTime(t.endTime),
                                          " ",
                                        ],
                                      }),
                                    }),
                                    Object(L.jsxs)("div", {
                                      className: "zoomlink",
                                      children: [
                                        Object(L.jsx)("h5", {
                                          className: "blue",
                                          children: Object(L.jsx)("a", {
                                            target: "_blank",
                                            rel: "noreferrer",
                                            href: t.zoomLink,
                                            children: "Zoom Link:",
                                          }),
                                        }),
                                        Object(L.jsx)("p", {
                                          style: {
                                            display:
                                              e.props.days < 4
                                                ? "block"
                                                : "none",
                                          },
                                          children: Object(L.jsx)("a", {
                                            target: "_blank",
                                            rel: "noreferrer",
                                            href: t.zoomLink,
                                            children: t.zoomLink,
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                t.id
                              );
                            }),
                          ],
                        }),
                      ],
                    })
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        T =
          (a(67),
          (function (e) {
            Object(o.a)(a, e);
            var t = Object(u.a)(a);
            function a(e) {
              var n;
              return (
                Object(i.a)(this, a),
                ((n = t.call(this, e)).setDayRef = function (e) {
                  (n.expandRef = e),
                    n.daysrefs.push(n.expandRef),
                    console.log(e);
                }),
                (n.state = {
                  today: new Date(),
                  days: 3,
                  dataLoaded: !1,
                  student: [],
                  expand: "no-expand",
                }),
                (n.date = Object(f.a)(n.state.today, "d")),
                (n.expandRef = r.a.createRef()),
                (n.daysrefs = []),
                n
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
                  key: "componentDidMount",
                  value: function () {
                    var e = this;
                    g.getStudentByEmail("jmin@bu.edu").then(function (t) {
                      console.log(t),
                        e.setState({ dataLoaded: !0, student: t });
                    });
                  },
                },
                {
                  key: "expandDay",
                  value: function (e, t) {
                    var a = this.daysrefs[e].state;
                    "no-expand" === this.state.expand
                      ? (this.daysrefs[e].setState({ expand: "is-expanded" }),
                        this.setState({ expand: "is-expanded" }))
                      : "is-expanded" === a.expand &&
                        (this.daysrefs[e].setState({ expand: "no-expand" }),
                        this.setState({ expand: "no-expand" }));
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this,
                      t = [];
                    if (this.state.dataLoaded)
                      for (
                        var a = function (a) {
                            var n =
                              0 === a
                                ? Object(L.jsx)(
                                    D,
                                    {
                                      i: a,
                                      today: !0,
                                      month: Object(f.a)(e.state.today, "LLL"),
                                      date: e.state.today.getDate(),
                                      day: Object(f.a)(e.state.today, "EEE"),
                                      days: e.state.days,
                                      ref: function (t) {
                                        return (e.daysrefs[a] = t);
                                      },
                                      expand: "no-expand",
                                      student: e.state.student,
                                    },
                                    a
                                  )
                                : Object(L.jsx)(
                                    D,
                                    {
                                      i: a,
                                      today: !1,
                                      month: Object(f.a)(
                                        Object(b.a)(e.state.today, a),
                                        "LLL"
                                      ),
                                      date: Object(b.a)(
                                        e.state.today,
                                        a
                                      ).getDate(),
                                      day: Object(f.a)(
                                        Object(b.a)(e.state.today, a),
                                        "EEE"
                                      ),
                                      days: e.state.days,
                                      ref: function (t) {
                                        return (e.daysrefs[a] = t);
                                      },
                                      expand: "no-expand",
                                      student: e.state.student,
                                    },
                                    a
                                  );
                            t.push(n);
                          },
                          n = 0;
                        n < this.state.days;
                        n++
                      )
                        a(n);
                    return this.state.dataLoaded
                      ? Object(L.jsxs)(l.a, {
                          id: "calendar",
                          className: "bx--grid calendar-contain",
                          narrow: !0,
                          children: [
                            Object(L.jsxs)(p.a, {
                              className: "intro",
                              children: [
                                Object(L.jsxs)(h.a, {
                                  children: [
                                    Object(L.jsxs)("h3", {
                                      children: [
                                        "Hello, ",
                                        this.state.student.firstName,
                                      ],
                                    }),
                                    Object(L.jsxs)("h4", {
                                      "aria-label": "calendar",
                                      className: "calendar-title",
                                      children: [
                                        Object(f.a)(this.state.today, "cccc") +
                                          ", ",
                                        Object(f.a)(this.state.today, "LLLL"),
                                        " ",
                                        this.date,
                                      ],
                                    }),
                                  ],
                                }),
                                Object(L.jsxs)(h.a, {
                                  className: "slider",
                                  children: [
                                    Object(L.jsxs)("h4", {
                                      children: [
                                        " ",
                                        this.state.days,
                                        " days ",
                                      ],
                                    }),
                                    Object(L.jsx)("div", {
                                      className: "slider-row",
                                      children: Object(L.jsx)("div", {
                                        children: Object(L.jsx)("div", {
                                          children: Object(L.jsx)(j.a, {
                                            ariaLabelInput: "day slider",
                                            className: "day-slider ",
                                            max: 5,
                                            min: 1,
                                            value: 3,
                                            onChange: function (t) {
                                              var a = t.value;
                                              return e.setState({ days: a });
                                            },
                                          }),
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Object(L.jsx)(p.a, {
                              className: "date-head",
                              children: t.map(function (t, a) {
                                var n = e.expandDay.bind(e, a);
                                return Object(L.jsx)(
                                  h.a,
                                  {
                                    className: "a-day",
                                    lg: Math.floor(16 / e.state.days),
                                    onClick: n,
                                    children: t,
                                  },
                                  t.props.date
                                );
                              }),
                            }),
                          ],
                        })
                      : Object(L.jsx)("p", { children: "loading" });
                  },
                },
              ]),
              a
            );
          })(r.a.Component)),
        S = a(83);
      var E = function () {
          return Object(L.jsx)("div", {
            className: "App",
            children: Object(L.jsx)(S.a, {
              isFixedNav: !0,
              expanded: !0,
              isChildOfHeader: !1,
              "aria-label": "Side navigation",
            }),
          });
        },
        M = a(79);
      var C = function () {
          return Object(L.jsxs)("div", {
            className: "App",
            children: [
              Object(L.jsx)(E, {}),
              Object(L.jsx)(M.a, { children: Object(L.jsx)(T, {}) }),
            ],
          });
        },
        H = function (e) {
          e &&
            e instanceof Function &&
            a
              .e(3)
              .then(a.bind(null, 84))
              .then(function (t) {
                var a = t.getCLS,
                  n = t.getFID,
                  r = t.getFCP,
                  s = t.getLCP,
                  c = t.getTTFB;
                a(e), n(e), r(e), s(e), c(e);
              });
        };
      c.a.render(
        Object(L.jsx)(r.a.StrictMode, { children: Object(L.jsx)(C, {}) }),
        document.getElementById("root")
      ),
        H();
    },
  },
  [[72, 1, 2]],
]);
//# sourceMappingURL=main.a414e7a1.chunk.js.map
