(this.webpackJsonpcadre = this.webpackJsonpcadre || []).push([
  [0],
  {
    45: function (e, t, a) {},
    46: function (e, t, a) {},
    69: function (e, t, a) {},
    72: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(3),
        r = a.n(n),
        s = a(38),
        c = a.n(s),
        u = (a(45), a(46), a(16)),
        i = a(17),
        o = a(24),
        d = a(22),
        p = a(75),
        l = a(76),
        j = a(78),
        f = a(82),
        b = a(81),
        h = a(77),
        m = a(6),
        x = a.n(m),
        y = a(9),
        O = a(10),
        v = a.n(O),
        g = {
          getStudents: (function () {
            var e = Object(y.a)(
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
            var e = Object(y.a)(
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
            var e = Object(y.a)(
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
            var e = Object(y.a)(
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
            var e = Object(y.a)(
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
            var e = Object(y.a)(
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
            var e = Object(y.a)(
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
            var e = Object(y.a)(
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
            var e = Object(y.a)(
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
            var e = Object(y.a)(
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
            var e = Object(y.a)(
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
            var e = Object(y.a)(
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
        w = a(80),
        L = a(73),
        k = a(74),
        D = a(1),
        N = (function (e) {
          Object(o.a)(a, e);
          var t = Object(d.a)(a);
          function a(e) {
            var n;
            return (
              Object(u.a)(this, a),
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
            Object(i.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this,
                    t = this.props.student.courses.filter(function (t) {
                      if (t.days.includes(e.props.day))
                        return (
                          (t.startDate = Object(w.a)(
                            t.startDate,
                            "yyyy-MM-dd",
                            new Date()
                          )),
                          (t.endDate = Object(w.a)(
                            t.endDate,
                            "yyyy-MM-dd",
                            new Date()
                          )),
                          (t.startTime = Object(w.a)(
                            t.startTime,
                            "HH:mm",
                            new Date()
                          )),
                          (t.endTime = Object(w.a)(
                            t.endTime,
                            "HH:mm",
                            new Date()
                          )),
                          t
                        );
                    }),
                    a = this.props.student.labs.filter(function (t) {
                      if (t.days.includes(e.props.day))
                        return (
                          (t.startTime = Object(w.a)(
                            t.startTime,
                            "HH:mm",
                            new Date()
                          )),
                          (t.endTime = Object(w.a)(
                            t.endTime,
                            "HH:mm",
                            new Date()
                          )),
                          t
                        );
                    });
                  this.setState({ lectures: t, labs: a });
                },
              },
              {
                key: "parseTime",
                value: function (e) {
                  var t = Object(L.a)(e),
                    a = Object(k.a)(e);
                  return (
                    (t >= 13 ? t - 12 : t) +
                    ":" +
                    (0 == a ? "00" : a) +
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
                    n = t.labs;
                  return Object(D.jsxs)(p.a, {
                    className: this.state.expand,
                    children: [
                      Object(D.jsx)(l.a, {
                        children: Object(D.jsx)("div", {
                          className: this.props.today ? "blue" : "black",
                          children: Object(D.jsx)("h3", {
                            children: this.props.day,
                          }),
                        }),
                      }),
                      Object(D.jsx)(l.a, {
                        children: Object(D.jsx)("div", {
                          className: this.props.today ? "blue" : "black",
                          children: Object(D.jsx)("h4", {
                            children: this.props.date,
                          }),
                        }),
                      }),
                      a.map(function (t) {
                        return Object(D.jsxs)(
                          l.a,
                          {
                            className: "course",
                            children: [
                              Object(D.jsx)("h4", {
                                children:
                                  t.courseId +
                                  " - " +
                                  t.courseName +
                                  " " +
                                  t.section,
                              }),
                              Object(D.jsx)("br", {}),
                              Object(D.jsx)("h5", {
                                children:
                                  "Lecture Time: " +
                                  e.parseTime(t.startTime) +
                                  " - " +
                                  e.parseTime(t.endTime),
                              }),
                              Object(D.jsx)("br", {}),
                              Object(D.jsx)("h5", {
                                children: "Zoom Link: " + t.zoomLink,
                              }),
                              Object(D.jsx)("br", {}),
                            ],
                          },
                          t.id
                        );
                      }),
                      n.map(function (t) {
                        return Object(D.jsxs)(
                          l.a,
                          {
                            className: "lab",
                            children: [
                              Object(D.jsx)("h4", {
                                children:
                                  t.course.courseId +
                                  " - " +
                                  t.course.courseName +
                                  " " +
                                  t.course.section,
                              }),
                              Object(D.jsx)("br", {}),
                              Object(D.jsx)("h5", {
                                children:
                                  "Lecture Time: " +
                                  e.parseTime(t.startTime) +
                                  " - " +
                                  e.parseTime(t.endTime),
                              }),
                              Object(D.jsx)("br", {}),
                              Object(D.jsx)("h5", {
                                children: "Zoom Link: " + t.zoomLink,
                              }),
                              Object(D.jsx)("br", {}),
                            ],
                          },
                          t.id
                        );
                      }),
                    ],
                  });
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        T =
          (a(69),
          (function (e) {
            Object(o.a)(a, e);
            var t = Object(d.a)(a);
            function a(e) {
              var n;
              return (
                Object(u.a)(this, a),
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
                (n.date = Object(b.a)(n.state.today, "d")),
                (n.expandRef = r.a.createRef()),
                (n.daysrefs = {}),
                n
              );
            }
            return (
              Object(i.a)(a, [
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
                    var a,
                      n = this.daysrefs[e].state;
                    "no-expand" === this.state.expand &&
                      (a =
                        "no-expand" === n.expand ? "is-expanded" : "no-expand"),
                      this.daysrefs[e].setState({ expand: a }),
                      console.log(this.daysrefs),
                      console.log(this.daysrefs[e].props.className);
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
                                ? Object(D.jsx)(
                                    N,
                                    {
                                      today: !0,
                                      month: Object(b.a)(e.state.today, "LLL"),
                                      date: e.state.today.getDate(),
                                      day: Object(b.a)(e.state.today, "EEE"),
                                      year: Object(b.a)(e.state.today, "yyyy"),
                                      ref: function (t) {
                                        return (e.daysrefs[a] = t);
                                      },
                                      expand: "no-expand",
                                      student: e.state.student,
                                    },
                                    a
                                  )
                                : Object(D.jsx)(
                                    N,
                                    {
                                      today: !1,
                                      month: Object(b.a)(
                                        Object(h.a)(e.state.today, a),
                                        "LLL"
                                      ),
                                      date: Object(h.a)(
                                        e.state.today,
                                        a
                                      ).getDate(),
                                      day: Object(b.a)(
                                        Object(h.a)(e.state.today, a),
                                        "EEE"
                                      ),
                                      year: Object(b.a)(
                                        Object(h.a)(e.state.today, a),
                                        "yyyy"
                                      ),
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
                    return Object(D.jsxs)(p.a, {
                      className: "bx--grid calendar-contain",
                      narrow: !0,
                      children: [
                        Object(D.jsx)(l.a, {
                          children: Object(D.jsxs)("h4", {
                            "aria-label": "calendar",
                            className: "calendar-title",
                            children: [
                              " ",
                              Object(b.a)(this.state.today, "LLLL"),
                              " ",
                              this.date,
                              this.state.days > 1
                                ? " \u2014 " +
                                  Object(b.a)(
                                    Object(h.a)(
                                      this.state.today,
                                      this.state.days
                                    ),
                                    "LLLL"
                                  ) +
                                  " " +
                                  Object(h.a)(
                                    this.state.today,
                                    this.state.days - 1
                                  ).getDate()
                                : "",
                            ],
                          }),
                        }),
                        Object(D.jsx)(l.a, {
                          className: "slider-row",
                          children: Object(D.jsx)(j.a, {
                            lg: 4,
                            md: 2,
                            sm: 0,
                            children: Object(D.jsxs)("div", {
                              children: [
                                Object(D.jsxs)("p", {
                                  children: [this.state.days, " days"],
                                }),
                                Object(D.jsx)(f.a, {
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
                              ],
                            }),
                          }),
                        }),
                        Object(D.jsx)(l.a, {
                          className: "date-head",
                          children: t.map(function (t, a) {
                            var n = e.expandDay.bind(e, a);
                            return Object(D.jsx)(
                              j.a,
                              {
                                className: "a-day " + e.state.expand,
                                onClick: n,
                                children: t,
                              },
                              t.props.date
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
          })(r.a.Component)),
        S = a(83);
      var C = function () {
          return Object(D.jsx)("div", {
            className: "App",
            children: Object(D.jsx)(S.a, {
              isFixedNav: !0,
              expanded: !0,
              isChildOfHeader: !1,
              "aria-label": "Side navigation",
            }),
          });
        },
        E = a(79);
      var M = function () {
          return Object(D.jsxs)("div", {
            className: "App",
            children: [
              Object(D.jsx)(C, {}),
              Object(D.jsx)(E.a, { children: Object(D.jsx)(T, {}) }),
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
        Object(D.jsx)(r.a.StrictMode, { children: Object(D.jsx)(M, {}) }),
        document.getElementById("root")
      ),
        H();
    },
  },
  [[72, 1, 2]],
]);
//# sourceMappingURL=main.1c868155.chunk.js.map
